# Changed — Bundle Modifications Report (Part 055 / 104)

- **Updated at**: `2026-11-24T00:51 JST`
- **Part**: `55 / 104` (**416** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 054](part-054.md) · [Part 056 →](part-056.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/92.js` (3lwmg.ecbaa066 → w4ddu.56408518 · continued)

- **File**: `bundles/bloxd.io/chunks/js/92.js` (3534 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca)

#### 954. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7707` → after: `L7765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L7765) · [Before (L7707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L7707)

```diff
-           const kk = (xk > 1 ? 1 / xk : 1) * lk * Dk;
+           const CC = (NC > 1 ? 1 / NC : 1) * PC * QC;
```

#### 955. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7712-L7713` → after: `L7770-L7771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7770-L7771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L7770-L7771) · [Before (L7712-L7713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L7712-L7713)

```diff
-         const Lk = this.Lx.mY.vy(this.Lx.camera.uZ);
-         this.Lx.mY.setPosition(this.Lx.camera.uZ, [Lk[0] + pk, Lk[1] + Yk, Lk[2] + yk])
+         const xC = this.MN.JR.yG(this.MN.camera.YL);
+         this.MN.JR.setPosition(this.MN.camera.YL, [xC[0] + GC, xC[1] + AC, xC[2] + RC])
```

#### 956. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7717` → after: `L7775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L7775) · [Before (L7717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L7717)

```diff
-         wk.j.tm("freeCameraChanged"), (0, Im.c)(kk), null !== (ek = this.Lx.bloxd.client) && void 0 !== ek && ek.isReplayMode() && wk.j.tm("replayViewer|uiRefresh")
+         pC.o.bp("freeCameraChanged"), (0, Tq.e)(CC), null !== (zC = this.MN.bloxd.client) && void 0 !== zC && zC.isReplayMode() && pC.o.bp("replayViewer|uiRefresh")
```

#### 957. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7720-L7726` → after: `L7778-L7784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7778-L7784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L7778-L7784) · [Before (L7720-L7726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L7720-L7726)

```diff
-     var Em = ik(1850),
-       hm = ik(38758),
-       am = ik(38752),
-       Wm = ik(38773),
-       tm = ik(37235),
-       Xm = ik(38764),
-       Bm = ik(38516);
+     var Dq = ZC(1806),
+       jq = ZC(39015),
+       yq = ZC(39005),
+       Lq = ZC(39036),
+       Uq = ZC(37486),
+       Bq = ZC(39028),
+       Oq = ZC(38755);
```

#### 958. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7730-L7732` → after: `L7788-L7790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7788-L7790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L7788-L7790) · [Before (L7730-L7732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L7730-L7732)

```diff
-       fk.heading = ek + kk.pr[1] + (Dk ? kk.cameraRotationOffset[1] : 0);
-       const Sk = ik + kk.pr[0] + (Dk ? kk.cameraRotationOffset[0] : 0);
-       (0, am.n)((0, am.f)(fk.heading, Sk, cm), fk)
+       wC.heading = zC + CC.Qp[1] + (QC ? CC.cameraRotationOffset[1] : 0);
+       const bC = ZC + CC.Qp[0] + (QC ? CC.cameraRotationOffset[0] : 0);
+       (0, yq.j)((0, yq.c)(wC.heading, bC, kq), wC)
```

#### 959. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7738` → after: `L7796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L7796) · [Before (L7738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L7738)

```diff
-       pk().set(om, fk[0], fk[1], 0), pk().fi(om, om, pk().ZERO, kk.nf + kk.pr[2] + bk[2]), pk().Re(om, om, pk().ZERO, ik + kk.pr[0] + bk[0]), pk().ei(om, om, pk().ZERO, ek + kk.pr[1] + bk[1]), pk().add(Sk, Sk, om)
+       GC().set(CF, wC[0], wC[1], 0), GC().gq(CF, CF, GC().ZERO, CC.Cp + CC.Qp[2] + nC[2]), GC().io(CF, CF, GC().ZERO, ZC + CC.Qp[0] + nC[0]), GC().mo(CF, CF, GC().ZERO, zC + CC.Qp[1] + nC[1]), GC().add(bC, bC, CF)
```

#### 960. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7744` → after: `L7802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L7802) · [Before (L7744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L7744)

```diff
-       return um.b.copyReattachedTargetPosition(kk, Om) ? kk.camera.aN(Om, ek, ik, um.b.getSavedZoomDistance(kk), Dk) : null
+       return rq.b.copyReattachedTargetPosition(CC, ZF) ? CC.camera.Rk(ZF, zC, ZC, rq.b.getSavedZoomDistance(CC), QC) : null
```

#### 961. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7748` → after: `L7806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L7806) · [Before (L7748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L7748)

```diff
-       return (0, Xm.e)(kk) ? (0, ak.b)(kk) : null
+       return (0, Bq.e)(CC) ? (0, uC.c)(CC) : null
```

#### 962. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7752` → after: `L7810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L7810) · [Before (L7752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L7752)

```diff
-         this.Lx = kk, this.view = ek, this.pickEntity = ik, this.defaultPose = (0, Lm.k)(), this.feet = [0, 0, 0], this.aim = [0, 0, 0], this.localFrom = [0, 0, 0], this.pastBlocks = [0, 0, 0], this.pickTargetedBlock = (kk, ek, ik) => this.pickDistance(kk, ek, ik, this.Lx.Skk), t … [truncated]
+         this.MN = CC, this.view = zC, this.pickEntity = ZC, this.defaultPose = (0, dq.k)(), this.feet = [0, 0, 0], this.aim = [0, 0, 0], this.localFrom = [0, 0, 0], this.pastBlocks = [0, 0, 0], this.pickTargetedBlock = (CC, zC, ZC) => this.pickDistance(CC, zC, ZC, this.MN.SCC), t … [truncated]
```

#### 963. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7755-L7756` → after: `L7813-L7814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7813-L7814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L7813-L7814) · [Before (L7755-L7756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L7755-L7756)

```diff
-           return null !== (Dk = this.pickEntity(kk, ek, null !== fk && void 0 !== fk ? fk : ik)) && void 0 !== Dk ? Dk : fk
-         }, this.isUntargeted = kk => !this.Lx.Skk(kk)
+           return null !== (QC = this.pickEntity(CC, zC, null !== wC && void 0 !== wC ? wC : ZC)) && void 0 !== QC ? QC : wC
+         }, this.isUntargeted = CC => !this.MN.SCC(CC)
```

#### 964. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7759` → after: `L7817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L7817) · [Before (L7759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L7759)

```diff
-         return this.Lx.ykk
+         return this.MN.mCC
```

#### 965. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7763` → after: `L7821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L7821) · [Before (L7763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L7763)

```diff
-         return null !== ek && this.Lx.mY.ZZ(ek) ? (0, vr.getDrawnPosition)(this.Lx, ek, this.feet) : null
+         return null !== zC && this.MN.JR.lL(zC) ? (0, tf.getDrawnPosition)(this.MN, zC, this.feet) : null
```

#### 966. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7768-L7769` → after: `L7826-L7827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7826-L7827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L7826-L7827) · [Before (L7768-L7769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L7768-L7769)

```diff
-           return kk.mY.ZZ(ek) ? ((0, vr.getDrawnPosition)(kk, ek, ik), null !== kk.bloxd.getLifeformType(ek) && (ik[1] += kk.bloxd.getLifeformEyeHeight(ek)), ik) : null
-         }(this.Lx, ek, this.aim)
+           return CC.JR.lL(zC) ? ((0, tf.getDrawnPosition)(CC, zC, ZC), null !== CC.bloxd.getLifeformType(zC) && (ZC[1] += CC.bloxd.getLifeformEyeHeight(zC)), ZC) : null
+         }(this.MN, zC, this.aim)
```

#### 967. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7774` → after: `L7832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L7832) · [Before (L7774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L7774)

```diff
-         return null === Sk ? null : Sk === this.Lx.Qq ? this.view.heading : null !== (ek = null !== (ik = null === (Dk = (0, ur.getCaughtUpMeshRotation)(this.Lx, Sk)) || void 0 === Dk ? void 0 : Dk.renderRotation[1]) && void 0 !== ik ? ik : null === (fk = this.Lx.mY.eek(Sk)) || v … [truncated]
+         return null === bC ? null : bC === this.MN.qE ? this.view.heading : null !== (zC = null !== (ZC = null === (QC = (0, uf.getCaughtUpMeshRotation)(this.MN, bC)) || void 0 === QC ? void 0 : QC.renderRotation[1]) && void 0 !== ZC ? ZC : null === (wC = this.MN.JR.MzC(bC)) || v … [truncated]
```

#### 968. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7778-L7780` → after: `L7836-L7838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7836-L7838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L7836-L7838) · [Before (L7778-L7780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L7778-L7780)

```diff
-           Lx: Dk
-         } = this, fk = Dk.camera.XN(Dk.Zkk(kk, null, this.localFrom), ek, ik);
-         return fk < ik - 1e-6 ? fk : null
+           MN: QC
+         } = this, wC = QC.camera.Yk(QC.wzC(CC, null, this.localFrom), zC, ZC);
+         return wC < ZC - 1e-6 ? wC : null
```

#### 969. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7793` → after: `L7851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L7851) · [Before (L7793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L7793)

```diff
-         const fk = this.Lx.Un(kk, ek, ik, Dk);
+         const wC = this.MN.CM(CC, zC, ZC, QC);
```

#### 970. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7797` → after: `L7855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L7855) · [Before (L7797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L7797)

```diff
-         return (0, Em.C)(this.Lx.yH.kR().fov)
+         return (0, Dq.w)(this.MN.Vg.Lk().fov)
```

#### 971. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7800` → after: `L7858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L7858) · [Before (L7800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L7800)

```diff
-         return (0, Em.C)((0, Bm.getSettingsFov)())
+         return (0, Dq.w)((0, Oq.getSettingsFov)())
```

#### 972. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7805-L7806` → after: `L7863-L7864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7863-L7864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L7863-L7864) · [Before (L7805-L7806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L7805-L7806)

```diff
-         } = this.Lx.yH, ek = kk.getRenderWidth(), ik = kk.getRenderHeight();
-         return ek > 0 && ik > 0 ? ek / ik : 1
+         } = this.MN.Vg, zC = CC.getRenderWidth(), ZC = CC.getRenderHeight();
+         return zC > 0 && ZC > 0 ? zC / ZC : 1
```

#### 973. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7810` → after: `L7868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L7868) · [Before (L7810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L7810)

```diff
-           Lx: kk
+           MN: CC
```

#### 974. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7819` → after: `L7877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L7877) · [Before (L7819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L7819)

```diff
-           null !== fk && (kk.iN(gm, ek.position), Zm(kk.camera, ik, Dk, Sk, um.b.getSavedRigShift(kk), ek.position)), Tm(kk.camera, ik, Dk, Sk, ek)
+           null !== wC && (CC.lB(QF, zC.position), zF(CC.camera, ZC, QC, bC, rq.b.getSavedRigShift(CC), zC.position)), Vq(CC.camera, ZC, QC, bC, zC)
```

#### 975. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7821-L7822` → after: `L7879-L7880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7879-L7880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L7879-L7880) · [Before (L7821-L7822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L7821-L7822)

```diff
-         const Dk = 0 !== ek.HO;
-         return pk().copy(ik.position, ek.vy()), Zm(ek, ek.heading, ek.pitch, Dk, kk.yH.kR().fR, ik.position), Tm(ek, ek.heading, ek.pitch, Dk, ik), ik
+         const QC = 0 !== zC.uL;
+         return GC().copy(ZC.position, zC.yG()), zF(zC, zC.heading, zC.pitch, QC, CC.Vg.Lk().Vk, ZC.position), Vq(zC, zC.heading, zC.pitch, QC, ZC), ZC
```

#### 976. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7825` → after: `L7883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L7883) · [Before (L7825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L7825)

```diff
-     var Jm = ik(36113);
+     var fF = ZC(36454);
```

#### 977. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7828` → after: `L7886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L7886) · [Before (L7828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L7828)

```diff
-         this.Lx = kk, this.Ux = ek, this.pointer = ik, this.eye = [0, 0, 0], this.ray = [0, 0, 0], this.screenPoint = [0, 0], this.lastPick = {
+         this.MN = CC, this.fN = zC, this.pointer = ZC, this.eye = [0, 0, 0], this.ray = [0, 0, 0], this.screenPoint = [0, 0], this.lastPick = {
```

#### 978. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7842` → after: `L7900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L7900) · [Before (L7842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L7842)

```diff
-         const Dk = SM(this.Lx, this.eye);
+         const QC = MF(this.MN, this.eye);
```

#### 979. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7846` → after: `L7904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L7904) · [Before (L7846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L7846)

```diff
-             rk = null === bk || bk <= Cm ? Sk : bk;
+             fC = null === nC || nC <= mq ? bC : nC;
```

#### 980. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7848` → after: `L7906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L7906) · [Before (L7848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L7848)

```diff
-         }(Dk, ik, this.copyRay(), this.Ux.pickCursorTarget, this.tapPoint), this.hasTapPoint = !0, this.faceTap(Dk), !0
+         }(QC, ZC, this.copyRay(), this.fN.pickCursorTarget, this.tapPoint), this.hasTapPoint = !0, this.faceTap(QC), !0
```

#### 981. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7852` → after: `L7910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L7910) · [Before (L7852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L7852)

```diff
-           Lx: ik
+           MN: ZC
```

#### 982. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7856` → after: `L7914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L7914) · [Before (L7856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L7856)

```diff
-         if (ek && (0, Jm.e)(this.screenPoint[1])) return;
+         if (zC && (0, fF.h)(this.screenPoint[1])) return;
```

#### 983. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7866` → after: `L7924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L7924) · [Before (L7866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L7866)

```diff
-           if (null === bk || bk <= Cm) return (0, Lm.g)(ik, fk);
+           if (null === nC || nC <= mq) return (0, dq.h)(ZC, wC);
```

#### 984. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7869` → after: `L7927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L7927) · [Before (L7869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L7869)

```diff
-           if (rk < jm) return (0, Lm.g)(ik, fk);
+           if (fC < Eq) return (0, dq.h)(ZC, wC);
```

#### 985. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7871` → after: `L7929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L7929) · [Before (L7871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L7871)

```diff
-         }(fk, kk, Dk, this.Ux.pickCursorTarget, this.cursorAim), (0, Lm.g)(fk, Sk.eye), (0, Lm.g)(kk, Sk.camera), (0, Lm.g)(Dk, Sk.ray), this.msSincePick = 0), fM(ik, this.cursorAim, um.b.getPlayerFacingHeading(ik), um.b.getPlayerFacingPitch(ik))
+         }(wC, CC, QC, this.fN.pickCursorTarget, this.cursorAim), (0, dq.h)(wC, bC.eye), (0, dq.h)(CC, bC.camera), (0, dq.h)(QC, bC.ray), this.msSincePick = 0), NF(ZC, this.cursorAim, rq.b.getPlayerFacingHeading(ZC), rq.b.getPlayerFacingPitch(ZC))
```

#### 986. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7875` → after: `L7933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L7933) · [Before (L7875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L7875)

```diff
-           Lx: ek
+           MN: zC
```

#### 987. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7887` → after: `L7945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L7945) · [Before (L7887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L7887)

```diff
-           Lx: kk
+           MN: CC
```

#### 988. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7908` → after: `L7966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L7966) · [Before (L7908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L7908)

```diff
-         }(ek.heading + ek.pr[1], ek.pitch + ek.pr[0], ek.nf + ek.pr[2], kk.yH.kR().fov, this.Ux.getAspectRatio(), ik, Dk, this.ray)
+         }(zC.heading + zC.Qp[1], zC.pitch + zC.Qp[0], zC.Cp + zC.Qp[2], CC.Vg.Lk().fov, this.fN.getAspectRatio(), ZC, QC, this.ray)
```

#### 989. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7922` → after: `L7980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L7980) · [Before (L7922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L7922)

```diff
-       DM.heading = ik, DM.pitch = Dk, (0, am.n)(ek, DM), um.b.setPlayerFacing(kk, DM.heading, DM.pitch)
+       WF.heading = ZC, WF.pitch = QC, (0, yq.j)(zC, WF), rq.b.setPlayerFacing(CC, WF.heading, WF.pitch)
```

#### 990. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7926` → after: `L7984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L7984) · [Before (L7926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L7926)

```diff
-       return pk().copy(ek, kk.bloxd.getLifeformEyePos(kk.Qq, !1))
+       return GC().copy(zC, CC.bloxd.getLifeformEyePos(CC.qE, !1))
```

#### 991. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7928` → after: `L7986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L7986) · [Before (L7928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L7928)

```diff
-     var bM = ik(38781);
+     var gF = ZC(39042);
```

#### 992. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7942-L7943` → after: `L8000-L8001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8000-L8001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8000-L8001) · [Before (L7942-L7943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L7942-L7943)

```diff
-         if (!this.hasWritten) return fk.SF = 0, fk.mF = 0, fk.pointedAt = void 0, fk;
-         const Sk = (0, am.s)(this.writtenHeading, kk);
+         if (!this.hasWritten) return wC.VY = 0, wC.Zm = 0, wC.pointedAt = void 0, wC;
+         const bC = (0, yq.t)(this.writtenHeading, CC);
```

#### 993. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7967` → after: `L8025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8025) · [Before (L7967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L7967)

```diff
-         Mk = null !== mk && mk > Cm ? mk : Math.max(Cm, Pk);
+         FC = null !== qC && qC > mq ? qC : Math.max(mq, oC);
```

#### 994. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7976-L7977` → after: `L8034-L8035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8034-L8035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8034-L8035) · [Before (L7976-L7977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L7976-L7977)

```diff
-         fk = Math.max(-Dk, Math.min(Dk, (0, am.s)(kk, ek)));
-       return (0, am.q)(kk + fk)
+         wC = Math.max(-QC, Math.min(QC, (0, yq.t)(CC, zC)));
+       return (0, yq.s)(CC + wC)
```

#### 995. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7981-L7985` → after: `L8039-L8043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8039-L8043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8039-L8043) · [Before (L7981-L7985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L7981-L7985)

```diff
-         this.Lx = kk, this.cameraController = ek, this.freeCameraController = ik, this.cursor = Dk, this.Ux = void 0, this.director = void 0, this.view = new PM, this.look = {
-           SF: 0,
-           mF: 0
-         }, this.cursorAim = void 0, this.screen = void 0, this.facing = "movement", this.mouseTurns = "view", this.detached = !1, this.eye = [0, 0, 0], this.Ykk = [0, 0, 0], this.Lkk = [0, 0, 0], this.rayDirection = [0, 0, 0], this.cameraPosition = [0, 0, 0], this.aim = [0, 0, 0] … [truncated]
-         const bk = Zr.c.subscribe("gameCamera", (kk => {
+         this.MN = CC, this.cameraController = zC, this.freeCameraController = ZC, this.cursor = QC, this.fN = void 0, this.director = void 0, this.view = new pF, this.look = {
+           VY: 0,
+           Zm: 0
+         }, this.cursorAim = void 0, this.screen = void 0, this.facing = "movement", this.mouseTurns = "view", this.detached = !1, this.eye = [0, 0, 0], this.HCC = [0, 0, 0], this.ECC = [0, 0, 0], this.rayDirection = [0, 0, 0], this.cameraPosition = [0, 0, 0], this.aim = [0, 0, 0] … [truncated]
+         const nC = zo.e.subscribe("gameCamera", (CC => {
```

#### 996. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8001` → after: `L8059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8059) · [Before (L8001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8001)

```diff
-           "undefined" !== typeof document && "hidden" === document.visibilityState && performance.now() - this.lastFrameMs > 1e3 && kk.Ux.Eek([])
+           "undefined" !== typeof document && "hidden" === document.visibilityState && performance.now() - this.lastFrameMs > 1e3 && CC.fN.jzC([])
```

#### 997. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8003-L8004` → after: `L8061-L8062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8061-L8062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8061-L8062) · [Before (L8003-L8004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8003-L8004)

```diff
-         kk.on("Px", Mk), Dk.listenForTaps(((ek, ik) => {
-           this.aimAtClientPoint(ek, ik), kk.mkk()
+         CC.on("ZN", FC), QC.listenForTaps(((zC, ZC) => {
+           this.aimAtClientPoint(zC, ZC), CC.RCC()
```

#### 998. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8006` → after: `L8064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8064) · [Before (L8006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8006)

```diff
-         const Kk = wk.j.subscribe("localPlayerTeleported", (kk => {
+         const WC = pC.o.subscribe("localPlayerTeleported", (CC => {
```

#### 999. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8013` → after: `L8071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8071) · [Before (L8013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8013)

```diff
-           bk(), Dk.listenForTaps(null), wk.j.unsubscribe(Kk), kk.off("beforeRender", rk), kk.off("afterRender", Pk), kk.off("beforePhysicsTick", mk), kk.off("Px", Mk), this.release({
+           nC(), QC.listenForTaps(null), pC.o.unsubscribe(WC), CC.off("beforeRender", fC), CC.off("afterRender", oC), CC.off("beforePhysicsTick", qC), CC.off("ZN", FC), this.release({
```

#### 1000. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8015` → after: `L8073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8073) · [Before (L8015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8015)

```diff
-           }), this.screen.clear(), kk.Ux.Eek([])
+           }), this.screen.clear(), CC.fN.jzC([])
```

#### 1001. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8025` → after: `L8083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8083) · [Before (L8025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8025)

```diff
-         const ek = (0, Wm.f)(kk);
+         const zC = (0, Lq.d)(CC);
```

#### 1002. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8039` → after: `L8097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8097) · [Before (L8039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8039)

```diff
-         if (this.lastFrameMs = performance.now(), null !== (ek = this.Lx.bloxd.client) && void 0 !== ek && ek.isReplayMode()) return this.Lx.Ux.Eek([]), this.yieldToReplay(), void this.screen.clear();
+         if (this.lastFrameMs = performance.now(), null !== (zC = this.MN.bloxd.client) && void 0 !== zC && zC.isReplayMode()) return this.MN.fN.jzC([]), this.yieldToReplay(), void this.screen.clear();
```

#### 1003. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8042-L8045` → after: `L8100-L8103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8100-L8103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8100-L8103) · [Before (L8042-L8045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8042-L8045)

```diff
-         } = this.Lx;
-         this.detached || this.view.followBody(um.b.getPlayerFacingHeading(this.Lx));
-         const Dk = um.b.takeLookPointed(this.Lx);
-         null !== ik.yG || null !== ik.pG || null === this.mouseTurns && !Dk ? (this.look.SF = 0, this.look.mF = 0, this.look.pointedAt = void 0) : this.view.readLook(ik.heading, ik.pitch, "look" === this.mouseTurns, Dk, this.look);
+         } = this.MN;
+         this.detached || this.view.followBody(rq.b.getPlayerFacingHeading(this.MN));
+         const QC = rq.b.takeLookPointed(this.MN);
+         null !== ZC.dU || null !== ZC.KU || null === this.mouseTurns && !QC ? (this.look.VY = 0, this.look.Zm = 0, this.look.pointedAt = void 0) : this.view.readLook(ZC.heading, ZC.pitch, "look" === this.mouseTurns, QC, this.look);
```

#### 1004. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8047` → after: `L8105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8105) · [Before (L8047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8047)

```diff
-         if (this.Lx.Ux.Eek(this.director.getLoadingPositions()), this.syncShownSettings(), this.screen.show(this.director.getScreenFade(), this.director.getSettings()), !fk) return void this.release();
+         if (this.MN.fN.jzC(this.director.getLoadingPositions()), this.syncShownSettings(), this.screen.show(this.director.getScreenFade(), this.director.getSettings()), !wC) return void this.release();
```

#### 1005. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8050` → after: `L8108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8108) · [Before (L8050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8050)

```diff
-         "movement" !== this.facing || Sk || this.turnBodyTowardsMovement(kk), this.cursorAim.Px(kk), this.applyPose(fk)
+         "movement" !== this.facing || bC || this.turnBodyTowardsMovement(CC), this.cursorAim.ZN(CC), this.applyPose(wC)
```

#### 1006. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8056` → after: `L8114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8114) · [Before (L8056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8056)

```diff
-         return !um.b.isCameraDetachedFromPlayer(this.Lx) && (this.setControlsLocked(!0), um.b.detachCamera(this.Lx, {
+         return !rq.b.isCameraDetachedFromPlayer(this.MN) && (this.setControlsLocked(!0), rq.b.detachCamera(this.MN, {
```

#### 1007. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8058` → after: `L8116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8116) · [Before (L8058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8058)

```diff
-         }) ? (this.detached = !0, this.Lx.Sy = this.Lx.bloxd.getBlockReach(this.Lx.Qq), this.publishView(), !0) : (this.setControlsLocked(!1), !1))
+         }) ? (this.detached = !0, this.MN.yp = this.MN.bloxd.getBlockReach(this.MN.qE), this.publishView(), !0) : (this.setControlsLocked(!1), !1))
```

#### 1008. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8064` → after: `L8122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8122) · [Before (L8064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8064)

```diff
-           Lx: ik
+           MN: ZC
```

#### 1009. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8067-L8068` → after: `L8125-L8126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8125-L8126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8125-L8126) · [Before (L8067-L8068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8067-L8068)

```diff
-         } = ik, fk = um.b.getPlayerFacingHeading(ik), Sk = um.b.getPlayerFacingPitch(ik), bk = null !== (ek = Gm(ik, fk, Sk, this.reattachedPosition)) && void 0 !== ek ? ek : um.b.getSavedZoomDistance(ik);
-         this.giveUpView(), um.b.reattachCamera(ik), Dk.HO = bk, Dk.heading = fk, Dk.pitch = Sk, Dk.hN(), (0, kP.r)(ik), this.setControlsLocked(!1, kk)
+         } = ZC, wC = rq.b.getPlayerFacingHeading(ZC), bC = rq.b.getPlayerFacingPitch(ZC), nC = null !== (zC = wF(ZC, wC, bC, this.reattachedPosition)) && void 0 !== zC ? zC : rq.b.getSavedZoomDistance(ZC);
+         this.giveUpView(), rq.b.reattachCamera(ZC), QC.uL = nC, QC.heading = wC, QC.pitch = bC, QC.Wk(), (0, oo.r)(ZC), this.setControlsLocked(!1, CC)
```

#### 1010. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8071` → after: `L8129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8129) · [Before (L8071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8071)

```diff
-         this.detached && (this.giveUpView(), um.b.setFacingMode(this.Lx, "frozen"), this.setControlsLocked(!1, {
+         this.detached && (this.giveUpView(), rq.b.setFacingMode(this.MN, "frozen"), this.setControlsLocked(!1, {
```

#### 1011. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8076` → after: `L8134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8134) · [Before (L8076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8076)

```diff
-         this.detached = !1, this.Lx.Ykk = null, this.Lx.Lkk = null, this.publishView()
+         this.detached = !1, this.MN.HCC = null, this.MN.ECC = null, this.publishView()
```

#### 1012. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8087-L8088` → after: `L8145-L8146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8145-L8146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8145-L8146) · [Before (L8087-L8088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8087-L8088)

```diff
-           Lx: ik
-         } = this, Dk = ik.mY.eek(ik.Qq);
+           MN: ZC
+         } = this, QC = ZC.JR.MzC(ZC.qE);
```

#### 1013. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8090` → after: `L8148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8148) · [Before (L8090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8090)

```diff
-         const Sk = null !== (ek = Dk.ridingVehicleEId) && void 0 !== ek ? ek : null;
+         const bC = null !== (zC = QC.ridingVehicleEId) && void 0 !== zC ? zC : null;
```

#### 1014. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8092-L8093` → after: `L8150-L8151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8150-L8151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8150-L8151) · [Before (L8092-L8093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8092-L8093)

```diff
-             if (!(0, tm.e)(kk, ek)) return !0;
-             const ik = kk.bloxd.getResolvedPhysicsSettings(kk.Qq, kk.mY.vkk(kk.Qq).physicsState);
+             if (!(0, Uq.b)(CC, zC)) return !0;
+             const ZC = CC.bloxd.getResolvedPhysicsSettings(CC.qE, CC.JR.yCC(CC.qE).physicsState);
```

#### 1015. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8105` → after: `L8163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8163) · [Before (L8105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8105)

```diff
-           Lx: ek
+           MN: zC
```

#### 1016. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8109` → after: `L8167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8167) · [Before (L8109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8109)

```diff
-         ek.mY.setPosition(ik.uZ, kk.position), ik.heading = (0, am.q)(kk.heading), ik.pitch = (0, am.h)(kk.pitch), ik.hN(), (0, kP.r)(ek), ek.yH.kR().fov = (0, Em.h)(kk.fov), this.view.noteWritten(ik.heading, ik.pitch), (0, Lm.g)(kk.position, this.cameraPosition), "camera" === th … [truncated]
+         zC.JR.setPosition(ZC.YL, CC.position), ZC.heading = (0, yq.s)(CC.heading), ZC.pitch = (0, yq.g)(CC.pitch), ZC.Wk(), (0, oo.r)(zC), zC.Vg.Lk().fov = (0, Dq.j)(CC.fov), this.view.noteWritten(ZC.heading, ZC.pitch), (0, dq.h)(CC.position, this.cameraPosition), "camera" === th … [truncated]
```

#### 1017. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8113` → after: `L8171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8171) · [Before (L8113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8113)

```diff
-           Lx: ek
+           MN: zC
```

#### 1018. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8117` → after: `L8175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8175) · [Before (L8117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8117)

```diff
-         MM(SM(ek, this.eye), kk, (0, am.f)(ik.heading, ik.pitch, this.rayDirection), ek.Sy, this.Ux.pickTargetedBlock, this.aim), fM(ek, this.aim, ik.heading, ik.pitch)
+         GF(MF(zC, this.eye), CC, (0, yq.c)(ZC.heading, ZC.pitch, this.rayDirection), zC.yp, this.fN.pickTargetedBlock, this.aim), NF(zC, this.aim, ZC.heading, ZC.pitch)
```

#### 1019. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8121` → after: `L8179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8179) · [Before (L8121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8121)

```diff
-           Lx: kk
+           MN: CC
```

#### 1020. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8123` → after: `L8181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8181) · [Before (L8123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8123)

```diff
-         kk.Ykk = kk.Zkk(SM(kk, this.eye), null, this.Ykk), kk.Lkk = um.b.copyPlayerFacingDirection(kk, this.Lkk)
+         CC.HCC = CC.wzC(MF(CC, this.eye), null, this.HCC), CC.ECC = rq.b.copyPlayerFacingDirection(CC, this.ECC)
```

#### 1021. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8126` → after: `L8184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8184) · [Before (L8126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8126)

```diff
-     var nM = ik(33615);
+     var xF = ZC(33998);
```

#### 1022. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8133` → after: `L8191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8191) · [Before (L8133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8133)

```diff
-       return null !== (ik = null !== (Dk = kk.inclination) && void 0 !== Dk ? Dk : null === ek || void 0 === ek ? void 0 : ek.inclination) && void 0 !== ik ? ik : -.2
+       return null !== (ZC = null !== (QC = CC.inclination) && void 0 !== QC ? QC : null === zC || void 0 === zC ? void 0 : zC.inclination) && void 0 !== ZC ? ZC : -.2
```

#### 1023. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8139` → after: `L8197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8197) · [Before (L8139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8139)

```diff
-         return null !== (ik = null !== (Dk = kk.useSunPosition) && void 0 !== Dk ? Dk : null === ek || void 0 === ek ? void 0 : ek.useSunPosition) && void 0 !== ik ? ik : HM
+         return null !== (ZC = null !== (QC = CC.useSunPosition) && void 0 !== QC ? QC : null === zC || void 0 === zC ? void 0 : zC.useSunPosition) && void 0 !== ZC ? ZC : IF
```

#### 1024. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8144-L8145` → after: `L8202-L8203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8202-L8203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8202-L8203) · [Before (L8144-L8145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8144-L8145)

```diff
-           return null !== (ik = null !== (Dk = kk.sunPosition) && void 0 !== Dk ? Dk : null === ek || void 0 === ek ? void 0 : ek.sunPosition) && void 0 !== ik ? ik : wM
-         }(kk, ek), bk = new Gk.eH(Dk, fk, Sk);
+           return null !== (ZC = null !== (QC = CC.sunPosition) && void 0 !== QC ? QC : null === zC || void 0 === zC ? void 0 : zC.sunPosition) && void 0 !== ZC ? ZC : iF
+         }(CC, zC), nC = new UC.Eg(QC, wC, bC);
```

#### 1025. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8158` → after: `L8216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8216) · [Before (L8158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8158)

```diff
-       const fk = null !== ik && void 0 !== ik ? ik : lM(kk, ek),
+       const wC = null !== ZC && void 0 !== ZC ? ZC : vF(CC, zC),
```

#### 1026. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8161` → after: `L8219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8219) · [Before (L8161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8161)

```diff
-           return null !== (ik = null !== (Dk = kk.azimuth) && void 0 !== Dk ? Dk : null === ek || void 0 === ek ? void 0 : ek.azimuth) && void 0 !== ik ? ik : .55
+           return null !== (ZC = null !== (QC = CC.azimuth) && void 0 !== QC ? QC : null === zC || void 0 === zC ? void 0 : zC.azimuth) && void 0 !== ZC ? ZC : .55
```

#### 1027. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8165` → after: `L8223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8223) · [Before (L8165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8165)

```diff
-           return null !== (ik = null !== (Dk = kk.up) && void 0 !== Dk ? Dk : null === ek || void 0 === ek ? void 0 : ek.up) && void 0 !== ik ? ik : UM
+           return null !== (ZC = null !== (QC = CC.up) && void 0 !== QC ? QC : null === zC || void 0 === zC ? void 0 : zC.up) && void 0 !== ZC ? ZC : JF
```

#### 1028. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8169-L8170` → after: `L8227-L8228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8227-L8228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8227-L8228) · [Before (L8169-L8170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8169-L8170)

```diff
-         mk = new Gk.eH(Math.cos(Pk) * Math.cos(rk), Math.sin(-rk), Math.sin(Pk) * Math.cos(rk)),
-         Mk = new Gk.eH(bk[0], bk[1], bk[2]),
+         qC = new UC.Eg(Math.cos(oC) * Math.cos(fC), Math.sin(-fC), Math.sin(oC) * Math.cos(fC)),
+         FC = new UC.Eg(nC[0], nC[1], nC[2]),
```

#### 1029. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8172-L8173` → after: `L8230-L8231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8230-L8231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8230-L8231) · [Before (L8172-L8173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8172-L8173)

```diff
-       Gk.Quaternion.FromUnitVectorsToRef(Gk.eH.UpReadOnly, Mk, Kk);
-       const xk = new Gk.eH;
+       UC.Quaternion.FromUnitVectorsToRef(UC.Eg.UpReadOnly, FC, WC);
+       const NC = new UC.Eg;
```

#### 1030. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8199-L8202` → after: `L8257-L8260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8257-L8260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8257-L8260) · [Before (L8199-L8202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8199-L8202)

```diff
-         this.Lx = kk, this.starsMesh = null, this.starsMat = null, this.sunMesh = null, this.sunMat = null, this.moonMesh = null, this.moonMat = null, this.sunOpacity = null, this.moonOpacity = null, this.earthSkyBox = null;
-         const ek = this.Lx.bY.skyBox;
-         "object" === typeof ek && "earth" === ek.type && (this.earthSkyBox = ek), this.sunOpacity = this.Lx.bY.dayNightSunOpacity, this.moonOpacity = this.Lx.bY.dayNightMoonOpacity;
-         const ik = Zr.c.subscribe("dayNightSunOpacity", (kk => {
+         this.MN = CC, this.starsMesh = null, this.starsMat = null, this.sunMesh = null, this.sunMat = null, this.moonMesh = null, this.moonMat = null, this.sunOpacity = null, this.moonOpacity = null, this.earthSkyBox = null;
+         const zC = this.MN.pR.skyBox;
+         "object" === typeof zC && "earth" === zC.type && (this.earthSkyBox = zC), this.sunOpacity = this.MN.pR.dayNightSunOpacity, this.moonOpacity = this.MN.pR.dayNightMoonOpacity;
+         const ZC = zo.e.subscribe("dayNightSunOpacity", (CC => {
```

#### 1031. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8205` → after: `L8263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8263) · [Before (L8205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8205)

```diff
-           Dk = Zr.c.subscribe("dayNightMoonOpacity", (kk => {
+           QC = zo.e.subscribe("dayNightMoonOpacity", (CC => {
```

#### 1032. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8208` → after: `L8266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8266) · [Before (L8208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8208)

```diff
-           fk = Zr.c.subscribe("dayNightStarOpacity", (kk => {
+           wC = zo.e.subscribe("dayNightStarOpacity", (CC => {
```

#### 1033. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8211` → after: `L8269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8269) · [Before (L8211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8211)

```diff
-           Sk = Zr.c.subscribe("skyBox", (kk => {
+           bC = zo.e.subscribe("skyBox", (CC => {
```

#### 1034. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8216` → after: `L8274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8274) · [Before (L8216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8216)

```diff
-         })), this.syncSunAndMoon(), this.setStarOpacity(this.Lx.bY.dayNightStarOpacity)
+         })), this.syncSunAndMoon(), this.setStarOpacity(this.MN.pR.dayNightStarOpacity)
```

#### 1035. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8218` → after: `L8276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8276) · [Before (L8218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8218)

```diff
-       Qek() {
+       tzC() {
```

#### 1036. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8228` → after: `L8286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8286) · [Before (L8228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8228)

```diff
-         "object" === typeof kk && "earth" === kk.type ? this.earthSkyBox = kk : this.earthSkyBox = null, this.syncSunAndMoon()
+         "object" === typeof CC && "earth" === CC.type ? this.earthSkyBox = CC : this.earthSkyBox = null, this.syncSunAndMoon()
```

#### 1037. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8243-L8244` → after: `L8301-L8302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8301-L8302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8301-L8302) · [Before (L8243-L8244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8243-L8244)

```diff
-         null === kk && (null === (ik = this.sunMesh) || void 0 === ik || ik.bV(!1));
-         null === ek && (null === (Dk = this.moonMesh) || void 0 === Dk || Dk.bV(!1));
+         null === CC && (null === (ZC = this.sunMesh) || void 0 === ZC || ZC.IK(!1));
+         null === zC && (null === (QC = this.moonMesh) || void 0 === QC || QC.IK(!1));
```

#### 1038. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8247` → after: `L8305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8305) · [Before (L8247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8247)

```diff
-         }), this.sunMesh.bV(!0)), null !== ek && ((0, Tk.e)(this.moonMat, {
+         }), this.sunMesh.IK(!0)), null !== zC && ((0, DC.e)(this.moonMat, {
```

#### 1039. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8249` → after: `L8307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8307) · [Before (L8249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8249)

```diff
-         }), this.moonMesh.bV(!0)))
+         }), this.moonMesh.IK(!0)))
```

#### 1040. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8255` → after: `L8313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8313) · [Before (L8255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8255)

```diff
-         }), this.starsMesh.bV(!0)) : null === (ek = this.starsMesh) || void 0 === ek || ek.bV(!1)
+         }), this.starsMesh.IK(!0)) : null === (zC = this.starsMesh) || void 0 === zC || zC.IK(!1)
```

#### 1041. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8260-L8262` → after: `L8318-L8320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8318-L8320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8318-L8320) · [Before (L8260-L8262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8260-L8262)

```diff
-           yH: kk
-         } = this.Lx, {
-           bw: ek
+           Vg: CC
+         } = this.MN, {
+           sS: zC
```

#### 1042. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8264-L8265` → after: `L8322-L8323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8322-L8323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8322-L8323) · [Before (L8264-L8265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8264-L8265)

```diff
-         this.starsMesh = (0, yk.l)(kk, "dayNightStars", (0, Yk.o)());
-         const ik = nM.f.map((kk => nM.i + kk)),
+         this.starsMesh = (0, RC.n)(CC, "dayNightStars", (0, AC.i)());
+         const ZC = xF.e.map((CC => xF.h + CC)),
```

#### 1043. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8267` → after: `L8325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8325) · [Before (L8267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8267)

```diff
-             rootUrl: nM.i,
+             rootUrl: xF.h,
```

#### 1044. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8271` → after: `L8329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8329) · [Before (L8271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8271)

```diff
-             samplingMode: Lk.f.nearest
+             samplingMode: xC.h.nearest
```

#### 1045. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8273` → after: `L8331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8331) · [Before (L8273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8273)

```diff
-           fk = (0, Lk.p)(ek, Dk),
+           wC = (0, xC.n)(zC, QC),
```

#### 1046. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8277-L8278` → after: `L8335-L8336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8335-L8336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8335-L8336) · [Before (L8277-L8278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8277-L8278)

```diff
-             alphaMode: dk.d.add,
-             transparencyMode: dk.r.alphaBlend
+             alphaMode: eC.c.add,
+             transparencyMode: eC.t.alphaBlend
```

#### 1047. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8282` → after: `L8340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8340) · [Before (L8282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8282)

```diff
-           bw: ek,
+           sS: zC,
```

#### 1048. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8285-L8286` → after: `L8343-L8344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8343-L8344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8343-L8344) · [Before (L8285-L8286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8285-L8286)

```diff
-         const bk = jk.c.BILLBOARDMODE_ALL | jk.c.BILLBOARDMODE_USE_POSITION;
-         this.sunMesh = (0, yk.l)(kk, "dayNightSun", (0, Yk.l)({
+         const nC = iC.e.BILLBOARDMODE_ALL | iC.e.BILLBOARDMODE_USE_POSITION;
+         this.sunMesh = (0, RC.n)(CC, "dayNightSun", (0, AC.g)({
```

#### 1049. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8289` → after: `L8347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8347) · [Before (L8289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8289)

```diff
-         })), this.sunMat = CM(ek, "dayNightSun", nM.m), this.sunMesh.material = this.sunMat, this.sunMesh.billboardMode = bk, this.setupSkyMesh(this.sunMesh), this.moonMesh = (0, yk.l)(kk, "dayNightMoon", (0, Yk.l)({
+         })), this.sunMat = dF(zC, "dayNightSun", xF.l), this.sunMesh.material = this.sunMat, this.sunMesh.billboardMode = nC, this.setupSkyMesh(this.sunMesh), this.moonMesh = (0, RC.n)(CC, "dayNightMoon", (0, AC.g)({
```

#### 1050. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8292` → after: `L8350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8350) · [Before (L8292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8292)

```diff
-         })), this.moonMat = CM(ek, "dayNightMoon", nM.e), this.moonMesh.material = this.moonMat, this.moonMesh.billboardMode = bk, this.setupSkyMesh(this.moonMesh), this.applySizes(), this.starsMesh.bV(!1), this.sunMesh.bV(!1), this.moonMesh.bV(!1)
+         })), this.moonMat = dF(zC, "dayNightMoon", xF.d), this.moonMesh.material = this.moonMat, this.moonMesh.billboardMode = nC, this.setupSkyMesh(this.moonMesh), this.applySizes(), this.starsMesh.IK(!1), this.sunMesh.IK(!1), this.moonMesh.IK(!1)
```

#### 1051. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8295` → after: `L8353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8353) · [Before (L8295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8295)

```diff
-         kk.infiniteDistance = !0, kk.renderingGroupId = -1, kk.Pw = !1, kk.kH = !0, kk.DH = !0, kk.applyFog = !1, this.Lx.yH.Mw(kk, !1, this.Lx.Xx, !1)
+         CC.infiniteDistance = !0, CC.renderingGroupId = -1, CC.tS = !1, CC.Hg = !0, CC.Xg = !0, CC.applyFog = !1, this.MN.Vg.jS(CC, !1, this.MN.YN, !1)
```

#### 1052. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8301-L8304` → after: `L8359-L8362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8359-L8362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8359-L8362) · [Before (L8301-L8304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8301-L8304)

```diff
-           yH: kk
-         } = this.Lx, ek = .8 * kk.kR().far, ik = function() {
-           const kk = Hk.e.getSkyBox("default");
-           return "earth" === (null === kk || void 0 === kk ? void 0 : kk.type) ? kk : void 0
+           Vg: CC
+         } = this.MN, zC = .8 * CC.Lk().far, ZC = function() {
+           const CC = SC.c.getSkyBox("default");
+           return "earth" === (null === CC || void 0 === CC ? void 0 : CC.type) ? CC : void 0
```

#### 1053. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8314-L8315` → after: `L8372-L8373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8372-L8373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8372-L8373) · [Before (L8314-L8315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8314-L8315)

```diff
-           yH: kk
-         } = this.Lx, {
+           Vg: CC
+         } = this.MN, {
```

#### 1054. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8317-L8318` → after: `L8375-L8376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8375-L8376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8375-L8376) · [Before (L8317-L8318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8317-L8318)

```diff
-         } = kk.kR(), ik = .95 * ek;
-         this.starsMesh.wi.set(ik, ik, ik);
+         } = CC.Lk(), ZC = .95 * zC;
+         this.starsMesh.sq.set(ZC, ZC, ZC);
```

#### 1055. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8321` → after: `L8379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8379) · [Before (L8321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8321)

```diff
-         this.sunMesh.wi.set(fk, fk, fk);
+         this.sunMesh.sq.set(wC, wC, wC);
```

#### 1056. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8323` → after: `L8381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8381) · [Before (L8323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8323)

```diff
-         this.moonMesh.wi.set(Sk, Sk, Sk)
+         this.moonMesh.sq.set(bC, bC, bC)
```

#### 1057. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8336` → after: `L8394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8394) · [Before (L8336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8336)

```diff
-         samplingMode: Lk.f.nearest,
+         samplingMode: xC.h.nearest,
```

#### 1058. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8343` → after: `L8401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8401) · [Before (L8343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8343)

```diff
-         bw: kk,
+         sS: CC,
```

#### 1059. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8352-L8362` → after: `L8410-L8420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8410-L8420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8410-L8420) · [Before (L8352-L8362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8352-L8362)

```diff
-     var AM = ik(4189),
-       jM = ik(37497),
-       sM = ik(36906),
-       dM = ik(37213),
-       VM = ik(37028),
-       FM = ik(741),
-       uM = ik(2719),
-       qM = ik(4264),
-       IM = ik(115),
-       zM = ik(280),
-       QM = ik(38787);
+     var mF = ZC(4179),
+       HF = ZC(37731),
+       EF = ZC(37184),
+       lF = ZC(37456),
+       XF = ZC(37290),
+       cF = ZC(728),
+       uF = ZC(2770),
+       rF = ZC(4238),
+       sF = ZC(94),
+       TF = ZC(296),
+       aF = ZC(39051);
```

#### 1060. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8366` → after: `L8424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8424) · [Before (L8366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8366)

```diff
-       return (0, zM.i)() ? "shaderPack:failedWebGpuDisabledUntilRestart" : "shaderPack:failedNoWebGpu"
+       return (0, TF.k)() ? "shaderPack:failedWebGpuDisabledUntilRestart" : "shaderPack:failedNoWebGpu"
```

#### 1061. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8370` → after: `L8428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8428) · [Before (L8370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8370)

```diff
-       return `${kk.getMode()}|${kk.ew()}`
+       return `${CC.getMode()}|${CC.lS()}`
```

#### 1062. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8374` → after: `L8432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8432) · [Before (L8374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8374)

```diff
-       console.error(`Shader pack failed to compile for "${kk.failure.material}":`, kk.failure.message)
+       console.error(`Shader pack failed to compile for "${CC.failure.material}":`, CC.failure.message)
```

#### 1063. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8378` → after: `L8436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8436) · [Before (L8378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8378)

```diff
-         this.page = kk, this.lastPassedCheck = null, this.checkGeneration = 0, this.checksRunning = 0, this.heldFailures = [], this.inGame = !1, this.game = 0, this.notifiedModelFallback = !1, this.failedModelCode = new Set, wk.j.subscribe(vM, (kk => {
+         this.page = CC, this.lastPassedCheck = null, this.checkGeneration = 0, this.checksRunning = 0, this.heldFailures = [], this.inGame = !1, this.game = 0, this.notifiedModelFallback = !1, this.failedModelCode = new Set, pC.o.subscribe(tF, (CC => {
```

#### 1064. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8384` → after: `L8442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8442) · [Before (L8384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8384)

```diff
-           ek === this.game && this.inGame && wk.j.tm("chat", (0, qM.e)(ik, Dk))
+           zC === this.game && this.inGame && pC.o.bp("chat", (0, rF.j)(ZC, QC))
```

#### 1065. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8392` → after: `L8450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8450) · [Before (L8392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8392)

```diff
-         if ((0, ob.s)("webgpuloss")) {
+         if ((0, Vn.k)("webgpuloss")) {
```

#### 1066. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8394` → after: `L8452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8452) · [Before (L8394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8394)

```diff
-             status: "Ji"
+             status: "wZ"
```

#### 1067. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8396` → after: `L8454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8454) · [Before (L8396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8396)

```diff
-           (0, Zb.b)((Dk => Dk.noteJsJoin(ek, kk, ik)))
+           (0, Cf.d)((QC => QC.noteJsJoin(zC, CC, ZC)))
```

#### 1068. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8399-L8401` → after: `L8457-L8459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8457-L8459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8457-L8459) · [Before (L8399-L8401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8399-L8401)

```diff
-           status: "Ji"
-         } : (wk.j.tm("matchmakeAndPlayStepCompleted", {
-           step: ye.n.SHADER_PACK,
+           status: "wZ"
+         } : (pC.o.bp("matchmakeAndPlayStepCompleted", {
+           step: Gz.l.SHADER_PACK,
```

#### 1069. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8428-L8429` → after: `L8486-L8487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8486-L8487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8486-L8487) · [Before (L8428-L8429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8428-L8429)

```diff
-           const Pk = null !== (bk = null !== Sk && void 0 !== Sk ? Sk : null === fk || void 0 === fk ? void 0 : fk.message) && void 0 !== bk ? bk : fk,
-             mk = () => rk.packVariant === kk.defineFor(rk.program) && ("model" === rk.program || rk.lighting === kk.ew());
+           const oC = null !== (nC = null !== bC && void 0 !== bC ? bC : null === wC || void 0 === wC ? void 0 : wC.message) && void 0 !== nC ? nC : wC,
+             qC = () => fC.packVariant === CC.defineFor(fC.program) && ("model" === fC.program || fC.lighting === CC.lS());
```

#### 1070. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8431` → after: `L8489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8489) · [Before (L8431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8431)

```diff
-             ik || (this.failedModelCode.add(rk.packVariant), this.inGame && mk() && (console.error(`Shader pack program ${Dk} failed in game, so its models are drawn without the pack:`, Pk), this.notifyModelFallback()))
+             ZC || (this.failedModelCode.add(fC.packVariant), this.inGame && qC() && (console.error(`Shader pack program ${QC} failed in game, so its models are drawn without the pack:`, oC), this.notifyModelFallback()))
```

#### 1071. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8437` → after: `L8495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8495) · [Before (L8437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8437)

```diff
-               console.error(`Shader pack program ${Dk} failed in game:`, Pk)
+               console.error(`Shader pack program ${QC} failed in game:`, oC)
```

#### 1072. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8463` → after: `L8521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8521) · [Before (L8463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8463)

```diff
-         const Sk = null !== (Dk = (0, QM.harnessShaderPackMode)()) && void 0 !== Dk ? Dk : (0, FM.j)(ek);
+         const bC = null !== (QC = (0, aF.harnessShaderPackMode)()) && void 0 !== QC ? QC : (0, cF.g)(zC);
```

#### 1073. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8465` → after: `L8523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8523) · [Before (L8465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8465)

```diff
-           if ((0, OS.j)(fk.variants, Sk)) {
+           if ((0, tb.m)(wC.variants, bC)) {
```

#### 1074. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8477` → after: `L8535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8535) · [Before (L8477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8477)

```diff
-           if (!(0, OS.j)(fk.pack.variants, Sk)) return {
+           if (!(0, tb.m)(wC.pack.variants, bC)) return {
```

#### 1075. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8485-L8489` → after: `L8543-L8547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8543-L8547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8543-L8547) · [Before (L8485-L8489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8485-L8489)

```diff
-               const ek = (0, uM.m)();
-               if ("default" === (null === ek || void 0 === ek ? void 0 : ek.source)) return (0, zM.i)() ? "shaderPack:failedWebGpuOff" : "shaderPack:failedNoWebGpu";
-               return !0 === (null === ek || void 0 === ek || null === (kk = ek.fallbackReason) || void 0 === kk ? void 0 : kk.endsWith(IM.b)) ? "shaderPack:failedNoWebGpu" : null
-             }()) && void 0 !== bk ? bk : function() {
-               const kk = (0, uM.m)();
+               const zC = (0, uF.i)();
+               if ("default" === (null === zC || void 0 === zC ? void 0 : zC.source)) return (0, TF.k)() ? "shaderPack:failedWebGpuOff" : "shaderPack:failedNoWebGpu";
+               return !0 === (null === zC || void 0 === zC || null === (CC = zC.fallbackReason) || void 0 === CC ? void 0 : CC.endsWith(sF.d)) ? "shaderPack:failedNoWebGpu" : null
+             }()) && void 0 !== nC ? nC : function() {
+               const CC = (0, uF.i)();
```

#### 1076. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8503-L8504` → after: `L8561-L8562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8561-L8562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8561-L8562) · [Before (L8503-L8504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8503-L8504)

```diff
-         return "Ji" === Pk.status ? {
-           status: "Ji"
+         return "wZ" === oC.status ? {
+           status: "wZ"
```

#### 1077. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8536` → after: `L8594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8594) · [Before (L8536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8536)

```diff
-               message: `The check failed: ${Dk instanceof Error?Dk.message:String(Dk)}`
+               message: `The check failed: ${QC instanceof Error?QC.message:String(QC)}`
```

#### 1078. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8553` → after: `L8611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8611) · [Before (L8553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8553)

```diff
-         this.lastPassedCheck = null, this.endGame(), wk.j.tm(qM.d, "shaderPack:failedToCompile")
+         this.lastPassedCheck = null, this.endGame(), pC.o.bp(rF.f, "shaderPack:failedToCompile")
```

#### 1079. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8564` → after: `L8622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8622) · [Before (L8564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8564)

```diff
-         wk.j.tm(vM, ik, !0)
+         pC.o.bp(tF, ZC, !0)
```

#### 1080. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8567-L8568` → after: `L8625-L8626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8625-L8626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8625-L8626) · [Before (L8567-L8568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8567-L8568)

```diff
-     var tM = ik(38323),
-       XM = ik(38793);
+     var UF = ZC(38569),
+       BF = ZC(39060);
```

#### 1081. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8571` → after: `L8629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8629) · [Before (L8571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8571)

```diff
-         this.Lx = kk, this.skyBoxMesh = null, this.earthSkyKey = null, this.skyBoxRequestId = 0, this.dayAndNightSky = void 0, this.dayAndNightSky = new LM(kk), this.setupSkyBox(), this.setupFog(), this.setupLighting()
+         this.MN = CC, this.skyBoxMesh = null, this.earthSkyKey = null, this.skyBoxRequestId = 0, this.dayAndNightSky = void 0, this.dayAndNightSky = new YF(CC), this.setupSkyBox(), this.setupFog(), this.setupLighting()
```

#### 1082. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8574` → after: `L8632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8632) · [Before (L8574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8574)

```diff
-         const kk = Zr.c.subscribe("skyBox", (kk => {
+         const CC = zo.e.subscribe("skyBox", (CC => {
```

#### 1083. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8577-L8578` → after: `L8635-L8636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8635-L8636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8635-L8636) · [Before (L8577-L8578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8577-L8578)

```diff
-         this.Lx.yH.Qek = () => {
-           this.updateSkyboxSize(), this.dayAndNightSky.Qek()
+         this.MN.Vg.tzC = () => {
+           this.updateSkyboxSize(), this.dayAndNightSky.tzC()
```

#### 1084. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8581` → after: `L8639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8639) · [Before (L8581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8581)

```diff
-           kk(), this.Lx.yH.Qek = null, this.skyBoxRequestId++, null === (ek = this.skyBoxMesh) || void 0 === ek || ek.dispose(!1, !0), this.skyBoxMesh = null, this.earthSkyKey = null, this.Lx.yH.Z5 = null, this.Lx.yH.model.earthSky = null
+           CC(), this.MN.Vg.tzC = null, this.skyBoxRequestId++, null === (zC = this.skyBoxMesh) || void 0 === zC || zC.dispose(!1, !0), this.skyBoxMesh = null, this.earthSkyKey = null, this.MN.Vg.B3 = null, this.MN.Vg.model.earthSky = null
```

#### 1085. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8587-L8588` → after: `L8645-L8646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8645-L8646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8645-L8646) · [Before (L8587-L8588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8587-L8588)

```diff
-           yH: kk
-         } = this.Lx, {
+           Vg: CC
+         } = this.MN, {
```

#### 1086. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8590-L8591` → after: `L8648-L8649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8648-L8649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8648-L8649) · [Before (L8590-L8591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8590-L8591)

```diff
-         } = kk.kR();
-         this.skyBoxMesh.wi.set(ek, ek, ek)
+         } = CC.Lk();
+         this.skyBoxMesh.sq.set(zC, zC, zC)
```

#### 1087. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8594` → after: `L8652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8652) · [Before (L8594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8594)

```diff
-         if (this.Lx.AU)
+         if (this.MN.zg)
```

#### 1088. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8596` → after: `L8654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8654) · [Before (L8596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8596)

```diff
-             const kk = "object" === typeof ek ? ek : {
+             const CC = "object" === typeof zC ? zC : {
```

#### 1089. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8603-L8605` → after: `L8661-L8663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8661-L8663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8661-L8663) · [Before (L8603-L8605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8603-L8605)

```diff
-               } = pM(kk, "earth" === (null === ik || void 0 === ik ? void 0 : ik.type) ? ik : void 0);
-             this.Lx.yH.Z5 = [Dk, fk, Sk]
-           } else this.Lx.yH.Z5 = null
+               } = eF(CC, "earth" === (null === ZC || void 0 === ZC ? void 0 : ZC.type) ? ZC : void 0);
+             this.MN.Vg.B3 = [QC, wC, bC]
+           } else this.MN.Vg.B3 = null
```

#### 1090. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8608-L8610` → after: `L8666-L8668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8666-L8668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8666-L8668) · [Before (L8608-L8610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8608-L8610)

```diff
-         const ek = "string" === typeof kk ? kk : kk.type,
-           ik = Hk.e.getSkyBox(ek);
-         if (void 0 === ik && "earth" !== ek) return void console.error(`Skybox "${ek}" not found, ignoring update...`);
+         const zC = "string" === typeof CC ? CC : CC.type,
+           ZC = SC.c.getSkyBox(zC);
+         if (void 0 === ZC && "earth" !== zC) return void console.error(`Skybox "${zC}" not found, ignoring update...`);
```

#### 1091. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8616` → after: `L8674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8674) · [Before (L8616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8616)

```diff
-           if (ZM(kk, ek) === (null === (fk = (0, sM.f)(this.earthSkyKey)) || void 0 === fk ? void 0 : fk.dithering)) return void oM(this.skyBoxMesh, this.earthSkyKey, kk, ek)
+           if (zW(CC, zC) === (null === (wC = (0, EF.e)(this.earthSkyKey)) || void 0 === wC ? void 0 : wC.dithering)) return void CW(this.skyBoxMesh, this.earthSkyKey, CC, zC)
```

#### 1092. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8619-L8621` → after: `L8677-L8679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8677-L8679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8677-L8679) · [Before (L8619-L8621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8619-L8621)

```diff
-           bw: Sk,
-           YH: bk
-         } = this.Lx.yH, rk = "earth" === ek || "earth" === ik.type;
+           sS: bC,
+           CS: nC
+         } = this.MN.Vg, fC = "earth" === zC || "earth" === ZC.type;
```

#### 1093. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8627` → after: `L8685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8685) · [Before (L8627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8627)

```diff
-         const Pk = (0, yk.l)(this.Lx.yH, AM.d.SKYBOX, (0, Yk.o)()),
+         const oC = (0, RC.n)(this.MN.Vg, mF.b.SKYBOX, (0, AC.i)()),
```

#### 1094. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8632-L8633` → after: `L8690-L8691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8690-L8691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8690-L8691) · [Before (L8632-L8633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8632-L8633)

```diff
-             ek = (0, XM.c)(vb.b.get("clientEscMenuOptions").pixelScale),
-             Dk = (0, XM.k)(kk, ek, (0, Bm.getSettingsFov)()),
+             zC = (0, BF.e)(Hn.b.get("clientEscMenuOptions").pixelScale),
+             QC = (0, BF.j)(CC, zC, (0, Oq.getSettingsFov)()),
```

#### 1095. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8637` → after: `L8695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8695) · [Before (L8637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8637)

```diff
-               reflectionTexture: (0, Lk.p)(Sk, {
+               reflectionTexture: (0, xC.n)(bC, {
```

#### 1096. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8646` → after: `L8704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8704) · [Before (L8646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8646)

```diff
-             bw: Sk,
+             sS: bC,
```

#### 1097. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8651` → after: `L8709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8709) · [Before (L8651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8651)

```diff
-         Pk.Pw = !1, Pk.DH = !0, Pk.kH = !0, Pk.applyFog = this.shouldApplyFogToSkyBox(), Pk.renderingGroupId = -1, Pk.SH();
+         oC.tS = !1, oC.Xg = !0, oC.Hg = !0, oC.applyFog = this.shouldApplyFogToSkyBox(), oC.renderingGroupId = -1, oC.ug();
```

#### 1098. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8658` → after: `L8716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8716) · [Before (L8658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8658)

```diff
-         }), (0, fe.g)(Mk), (0, tM.e)(Pk, (() => {
+         }), (0, Qz.f)(FC), (0, UF.c)(oC, (() => {
```

#### 1099. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8664` → after: `L8722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8722) · [Before (L8664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8664)

```diff
-         null === (ik = this.skyBoxMesh) || void 0 === ik || ik.dispose(!1, !0), this.skyBoxMesh = kk, this.earthSkyKey = ek, this.updateSkyboxSize(), kk && this.Lx.yH.Mw(kk, !1, this.Lx.Xx, !1), this.Lx.yH.model.earthSky = null !== (Dk = ek && (0, sM.f)(ek)) && void 0 !== Dk ? Dk … [truncated]
+         null === (ZC = this.skyBoxMesh) || void 0 === ZC || ZC.dispose(!1, !0), this.skyBoxMesh = CC, this.earthSkyKey = zC, this.updateSkyboxSize(), CC && this.MN.Vg.jS(CC, !1, this.MN.YN, !1), this.MN.Vg.model.earthSky = null !== (QC = zC && (0, EF.e)(zC)) && void 0 !== QC ? QC … [truncated]
```

#### 1100. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8668` → after: `L8726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8726) · [Before (L8668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8668)

```diff
-         const kk = wk.j.subscribe("fogChunkDistanceChanged", (() => {
+         const CC = pC.o.subscribe("fogChunkDistanceChanged", (() => {
```

#### 1101. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8671` → after: `L8729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8729) · [Before (L8671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8671)

```diff
-           ek = Zr.c.subscribe("fogChunkDistanceOverride", (() => {
+           zC = zo.e.subscribe("fogChunkDistanceOverride", (() => {
```

#### 1102. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8674` → after: `L8732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8732) · [Before (L8674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8674)

```diff
-           ik = Zr.c.subscribe("fogBlockDistanceOverride", (() => {
+           ZC = zo.e.subscribe("fogBlockDistanceOverride", (() => {
```

#### 1103. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8677` → after: `L8735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8735) · [Before (L8677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8677)

```diff
-           Dk = Zr.c.subscribe("fogColourOverride", (() => {
+           QC = zo.e.subscribe("fogColourOverride", (() => {
```

#### 1104. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8680` → after: `L8738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8738) · [Before (L8680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8680)

```diff
-           fk = Zr.c.subscribe("fogOnSkybox", (() => {
+           wC = zo.e.subscribe("fogOnSkybox", (() => {
```

#### 1105. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8684` → after: `L8742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8742) · [Before (L8684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8684)

```diff
-           wk.j.unsubscribe(kk), ek(), ik(), Dk(), fk()
+           pC.o.unsubscribe(CC), zC(), ZC(), QC(), wC()
```

#### 1106. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8688` → after: `L8746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8746) · [Before (L8688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8688)

```diff
-         return !0 === this.Lx.bY.fogOnSkybox
+         return !0 === this.MN.pR.fogOnSkybox
```

#### 1107. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8692` → after: `L8750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8750) · [Before (L8692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8692)

```diff
-         const ik = null !== (kk = this.Lx.bY.fogChunkDistanceOverride) && void 0 !== kk ? kk : vb.b.get("clientEscMenuOptions").fogChunkDistance,
+         const ZC = null !== (CC = this.MN.pR.fogChunkDistanceOverride) && void 0 !== CC ? CC : Hn.b.get("clientEscMenuOptions").fogChunkDistance,
```

#### 1108. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8698` → after: `L8756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8756) · [Before (L8698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8698)

```diff
-         Sk && (null === (ek = (0, sM.f)(Sk)) || void 0 === ek ? void 0 : ek.fog) !== fk && (0, Ck.W)(Sk, {
+         bC && (null === (zC = (0, EF.e)(bC)) || void 0 === zC ? void 0 : zC.fog) !== wC && (0, JC.ab)(bC, {
```

#### 1109. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8700` → after: `L8758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8758) · [Before (L8700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8700)

```diff
-         }), Dk && Dk.applyFog !== fk && (Dk.applyFog = fk, (0, tM.e)(Dk, (() => {
+         }), QC && QC.applyFog !== wC && (QC.applyFog = wC, (0, UF.c)(QC, (() => {
```

#### 1110. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8702-L8708` → after: `L8760-L8766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8760-L8766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8760-L8766) · [Before (L8702-L8708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8702-L8708)

```diff
-         }), this.Lx.yH.YH));
-         const bk = this.Lx.bY.fogColourOverride,
-           Pk = bk ? (0, rk.L)(bk) : cM;
-         let mk = 100 * Uk.g.oU,
-           Mk = 101 * Uk.g.oU;
-         const Kk = this.Lx.bY.fogBlockDistanceOverride;
-         (0, Ek.F)(Kk) ? !vb.b.get("clientEscMenuOptions").showFog && (0, Ek.F)(this.Lx.bY.fogChunkDistanceOverride) || (mk = Uk.g.oU * ik, Mk = 0 === ik ? 5 : Uk.g.oU * (ik + 1)): (mk = 0, Mk = Kk), (0, dM.s)(this.Lx.yH, mk, Mk, Pk)
+         }), this.MN.Vg.CS));
+         const nC = this.MN.pR.fogColourOverride,
+           oC = nC ? (0, fC.N)(nC) : kF;
+         let qC = 100 * gC.f.Ig,
+           FC = 101 * gC.f.Ig;
+         const WC = this.MN.pR.fogBlockDistanceOverride;
+         (0, XC.H)(WC) ? !Hn.b.get("clientEscMenuOptions").showFog && (0, XC.H)(this.MN.pR.fogChunkDistanceOverride) || (qC = gC.f.Ig * ZC, FC = 0 === ZC ? 5 : gC.f.Ig * (ZC + 1)): (qC = 0, FC = WC), (0, lF.r)(this.MN.Vg, qC, FC, oC)
```

#### 1111. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8712` → after: `L8770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8770) · [Before (L8712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8712)

```diff
-         const kk = Zr.c.subscribe("lightingOverride", (() => {
+         const CC = zo.e.subscribe("lightingOverride", (() => {
```

#### 1112. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8715` → after: `L8773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8773) · [Before (L8715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8715)

```diff
-           ek = Zr.c.subscribe("skyLightColourOverride", (() => {
+           zC = zo.e.subscribe("skyLightColourOverride", (() => {
```

#### 1113. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8718` → after: `L8776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8776) · [Before (L8718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8718)

```diff
-           ik = Zr.c.subscribe("ambientLightColourOverride", (() => {
+           ZC = zo.e.subscribe("ambientLightColourOverride", (() => {
```

#### 1114. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8721` → after: `L8779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8779) · [Before (L8721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8721)

```diff
-           Dk = Zr.c.subscribe("visionMinLightColour", (() => {
+           QC = zo.e.subscribe("visionMinLightColour", (() => {
```

#### 1115. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8724` → after: `L8782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8782) · [Before (L8724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8724)

```diff
-           fk = wk.j.subscribe("appManagerUpdated|clientEscMenuOptions", (() => {
+           wC = pC.o.subscribe("appManagerUpdated|clientEscMenuOptions", (() => {
```

#### 1116. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8728` → after: `L8786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8786) · [Before (L8728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8728)

```diff
-           kk(), ek(), ik(), Dk(), wk.j.unsubscribe(fk)
+           CC(), zC(), ZC(), QC(), pC.o.unsubscribe(wC)
```

#### 1117. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8734-L8735` → after: `L8792-L8793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8792-L8793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8792-L8793) · [Before (L8734-L8735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8734-L8735)

```diff
-         } = this.Lx.bY, ek = vb.b.get("clientEscMenuOptions").enableLighting, ik = null !== kk && void 0 !== kk ? kk : ek, Dk = this.Lx.yH.ew !== ik;
-         this.Lx.yH.ew = ik, Dk && ((0, VM.f)(), ik && this.Lx.qY.requeueChunksForLighting(), WM.lightingChanged(this.Lx.AU));
+         } = this.MN.pR, zC = Hn.b.get("clientEscMenuOptions").enableLighting, ZC = null !== CC && void 0 !== CC ? CC : zC, QC = this.MN.Vg.lS !== ZC;
+         this.MN.Vg.lS = ZC, QC && ((0, XF.e)(), ZC && this.MN.JA.requeueChunksForLighting(), LF.lightingChanged(this.MN.zg));
```

#### 1118. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8740-L8741` → after: `L8798-L8799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8798-L8799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8798-L8799) · [Before (L8740-L8741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8740-L8741)

```diff
-         } = this.Lx.bY;
-         this.Lx.yH.skyLightColourOverride = fk ? (0, rk.L)(fk) : null, this.Lx.yH.ambientLightColourOverride = Sk ? (0, rk.L)(Sk) : null, this.Lx.yH.visionMinLightColour = bk ? (0, rk.L)(bk) : null
+         } = this.MN.pR;
+         this.MN.Vg.skyLightColourOverride = wC ? (0, fC.N)(wC) : null, this.MN.Vg.ambientLightColourOverride = bC ? (0, fC.N)(bC) : null, this.MN.Vg.visionMinLightColour = nC ? (0, fC.N)(nC) : null
```

#### 1119. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8749` → after: `L8807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8807) · [Before (L8749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8749)

```diff
-       const Bk = null === (fk = null !== (Sk = ik.infiniteDistance) && void 0 !== Sk ? Sk : null === Dk || void 0 === Dk ? void 0 : Dk.infiniteDistance) || void 0 === fk || fk;
+       const aC = null === (wC = null !== (bC = ZC.infiniteDistance) && void 0 !== bC ? bC : null === QC || void 0 === QC ? void 0 : QC.infiniteDistance) || void 0 === wC || wC;
```

#### 1120. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8751-L8753` → after: `L8809-L8811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8809-L8811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8809-L8811) · [Before (L8751-L8753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8751-L8753)

```diff
-       const ck = null !== (bk = ik.sunPosition) && void 0 !== bk ? bk : null === Dk || void 0 === Dk ? void 0 : Dk.sunPosition,
-         Tk = null !== (rk = ik.up) && void 0 !== rk ? rk : null === Dk || void 0 === Dk ? void 0 : Dk.up;
-       (0, Ck.W)(ek, {
+       const tC = null !== (nC = ZC.sunPosition) && void 0 !== nC ? nC : null === QC || void 0 === QC ? void 0 : QC.sunPosition,
+         DC = null !== (fC = ZC.up) && void 0 !== fC ? fC : null === QC || void 0 === QC ? void 0 : QC.up;
+       (0, JC.ab)(zC, {
```

#### 1121. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8755-L8762` → after: `L8813-L8820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8813-L8820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8813-L8820) · [Before (L8755-L8762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8755-L8762)

```diff
-         inclination: null !== (Pk = null !== (mk = ik.inclination) && void 0 !== mk ? mk : null === Dk || void 0 === Dk ? void 0 : Dk.inclination) && void 0 !== Pk ? Pk : -.2,
-         turbidity: null !== (Mk = null !== (Kk = ik.turbidity) && void 0 !== Kk ? Kk : null === Dk || void 0 === Dk ? void 0 : Dk.turbidity) && void 0 !== Mk ? Mk : 10,
-         luminance: null !== (xk = null !== (nk = ik.luminance) && void 0 !== nk ? nk : null === Dk || void 0 === Dk ? void 0 : Dk.luminance) && void 0 !== xk ? xk : .1,
-         rayleigh: null !== (Uk = null !== (Hk = ik.rayleigh) && void 0 !== Hk ? Hk : null === Dk || void 0 === Dk ? void 0 : Dk.rayleigh) && void 0 !== Uk ? Uk : 2,
-         mieCoefficient: null !== (wk = null !== (lk = ik.mieCoefficient) && void 0 !== lk ? lk : null === Dk || void 0 === Dk ? void 0 : Dk.mieCoefficient) && void 0 !== wk ? wk : .005,
-         mieDirectionalG: null !== (pk = null !== (yk = ik.mieDirectionalG) && void 0 !== yk ? yk : null === Dk || void 0 === Dk ? void 0 : Dk.mieDirectionalG) && void 0 !== pk ? pk : .8,
-         distance: null !== (Yk = null !== (Lk = ik.distance) && void 0 !== Lk ? Lk : null === Dk || void 0 === Dk ? void 0 : Dk.distance) && void 0 !== Yk ? Yk : 500,
-         useSunPosition: null !== (Ak = null !== (jk = ik.useSunPosition) && void 0 !== jk ? jk : null === Dk || void 0 === Dk ? void 0 : Dk.useSunPosition) && void 0 !== Ak ? Ak : HM,
+         inclination: null !== (oC = null !== (qC = ZC.inclination) && void 0 !== qC ? qC : null === QC || void 0 === QC ? void 0 : QC.inclination) && void 0 !== oC ? oC : -.2,
+         turbidity: null !== (FC = null !== (WC = ZC.turbidity) && void 0 !== WC ? WC : null === QC || void 0 === QC ? void 0 : QC.turbidity) && void 0 !== FC ? FC : 10,
+         luminance: null !== (NC = null !== (MC = ZC.luminance) && void 0 !== MC ? MC : null === QC || void 0 === QC ? void 0 : QC.luminance) && void 0 !== NC ? NC : .1,
+         rayleigh: null !== (gC = null !== (SC = ZC.rayleigh) && void 0 !== SC ? SC : null === QC || void 0 === QC ? void 0 : QC.rayleigh) && void 0 !== gC ? gC : 2,
+         mieCoefficient: null !== (pC = null !== (PC = ZC.mieCoefficient) && void 0 !== PC ? PC : null === QC || void 0 === QC ? void 0 : QC.mieCoefficient) && void 0 !== pC ? pC : .005,
+         mieDirectionalG: null !== (GC = null !== (RC = ZC.mieDirectionalG) && void 0 !== RC ? RC : null === QC || void 0 === QC ? void 0 : QC.mieDirectionalG) && void 0 !== GC ? GC : .8,
+         distance: null !== (AC = null !== (xC = ZC.distance) && void 0 !== xC ? xC : null === QC || void 0 === QC ? void 0 : QC.distance) && void 0 !== AC ? AC : 500,
+         useSunPosition: null !== (IC = null !== (iC = ZC.useSunPosition) && void 0 !== iC ? iC : null === QC || void 0 === QC ? void 0 : QC.useSunPosition) && void 0 !== IC ? IC : IF,
```

#### 1122. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8764-L8767` → after: `L8822-L8825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8822-L8825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8822-L8825) · [Before (L8764-L8767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8764-L8767)

```diff
-         cameraOffset: [null !== (sk = null !== (dk = ik.xCameraOffset) && void 0 !== dk ? dk : null === Dk || void 0 === Dk ? void 0 : Dk.xCameraOffset) && void 0 !== sk ? sk : 0, null !== (Vk = null !== (Fk = ik.yCameraOffset) && void 0 !== Fk ? Fk : null === Dk || void 0 === Dk … [truncated]
-         azimuth: null !== (Ik = null !== (zk = ik.azimuth) && void 0 !== zk ? zk : null === Dk || void 0 === Dk ? void 0 : Dk.azimuth) && void 0 !== Ik ? Ik : .55,
-         sunPosition: [null !== (Qk = null === ck || void 0 === ck ? void 0 : ck[0]) && void 0 !== Qk ? Qk : wM[0], null !== (vk = null === ck || void 0 === ck ? void 0 : ck[1]) && void 0 !== vk ? vk : wM[1], null !== (Ek = null === ck || void 0 === ck ? void 0 : ck[2]) && void 0  … [truncated]
-         up: [null !== (hk = null === Tk || void 0 === Tk ? void 0 : Tk[0]) && void 0 !== hk ? hk : UM[0], null !== (ak = null === Tk || void 0 === Tk ? void 0 : Tk[1]) && void 0 !== ak ? ak : UM[1], null !== (Wk = null === Tk || void 0 === Tk ? void 0 : Tk[2]) && void 0 !== Wk ?  … [truncated]
+         cameraOffset: [null !== (vC = null !== (eC = ZC.xCameraOffset) && void 0 !== eC ? eC : null === QC || void 0 === QC ? void 0 : QC.xCameraOffset) && void 0 !== vC ? vC : 0, null !== (hC = null !== (KC = ZC.yCameraOffset) && void 0 !== KC ? KC : null === QC || void 0 === QC … [truncated]
+         azimuth: null !== (mC = null !== (HC = ZC.azimuth) && void 0 !== HC ? HC : null === QC || void 0 === QC ? void 0 : QC.azimuth) && void 0 !== mC ? mC : .55,
+         sunPosition: [null !== (EC = null === tC || void 0 === tC ? void 0 : tC[0]) && void 0 !== EC ? EC : iF[0], null !== (lC = null === tC || void 0 === tC ? void 0 : tC[1]) && void 0 !== lC ? lC : iF[1], null !== (XC = null === tC || void 0 === tC ? void 0 : tC[2]) && void 0  … [truncated]
+         up: [null !== (cC = null === DC || void 0 === DC ? void 0 : DC[0]) && void 0 !== cC ? cC : JF[0], null !== (uC = null === DC || void 0 === DC ? void 0 : DC[1]) && void 0 !== uC ? uC : JF[1], null !== (rC = null === DC || void 0 === DC ? void 0 : DC[2]) && void 0 !== rC ?  … [truncated]
```

#### 1123. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8777` → after: `L8835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8835) · [Before (L8777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8777)

```diff
-           }(0, Ck.W)(ek, {
+           }(0, JC.ab)(zC, {
```

#### 1124. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8781` → after: `L8839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8839) · [Before (L8781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8781)

```diff
-       }(kk, ek, null !== (tk = null !== (Xk = ik.vertexTint) && void 0 !== Xk ? Xk : null === Dk || void 0 === Dk ? void 0 : Dk.vertexTint) && void 0 !== tk ? tk : [255, 255, 255])
+       }(CC, zC, null !== (sC = null !== (TC = ZC.vertexTint) && void 0 !== TC ? TC : null === QC || void 0 === QC ? void 0 : QC.vertexTint) && void 0 !== sC ? sC : [255, 255, 255])
```

#### 1125. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8786` → after: `L8844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8844) · [Before (L8786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8786)

```diff
-       return null !== (ik = null !== (Dk = kk.dithering) && void 0 !== Dk ? Dk : null === ek || void 0 === ek ? void 0 : ek.dithering) && void 0 !== ik && ik
+       return null !== (ZC = null !== (QC = CC.dithering) && void 0 !== QC ? QC : null === zC || void 0 === zC ? void 0 : zC.dithering) && void 0 !== ZC && ZC
```

#### 1126. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8788-L8789` → after: `L8846-L8847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8846-L8847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8846-L8847) · [Before (L8788-L8789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8788-L8789)

```diff
-     var OM = ik(36856);
-     const gM = Ek.u / 8,
+     var ZW = ZC(37121);
+     const QW = XC.x / 8,
```

#### 1127. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8793` → after: `L8851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8851) · [Before (L8793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8793)

```diff
-         for (let ek = 0; ek <= Ek.u; ek += gM) kk.push({
+         for (let zC = 0; zC <= XC.x; zC += QW) CC.push({
```

#### 1128. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8795` → after: `L8853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8853) · [Before (L8795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8795)

```diff
-           isChunkBound: ek % Ek.u === 0
+           isChunkBound: zC % XC.x === 0
```

#### 1129. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8802` → after: `L8860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8860) · [Before (L8802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8802)

```diff
-         this.Lx = kk, this.rendererId = ek, this.config = ik, this.tornDown = !1, this.borderMesh = null, this.subdivMesh = null, this.borderMaterial = null, this.subdivMaterial = null, this.lastChunkI = NaN, this.lastChunkJ = NaN, this.lastChunkK = NaN, this.planeThickness = voi … [truncated]
+         this.MN = CC, this.rendererId = zC, this.config = ZC, this.tornDown = !1, this.borderMesh = null, this.subdivMesh = null, this.borderMaterial = null, this.subdivMaterial = null, this.lastChunkI = NaN, this.lastChunkJ = NaN, this.lastChunkK = NaN, this.planeThickness = voi … [truncated]
```

#### 1130. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8804` → after: `L8862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8862) · [Before (L8804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8804)

```diff
-         })), RM.registerRenderer(this.Lx, this)
+         })), nW.registerRenderer(this.MN, this)
```

#### 1131. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8807` → after: `L8865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8865) · [Before (L8807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8807)

```diff
-         this.tornDown || (this.tornDown = !0, this.disposeMeshes(), RM.unregisterRenderer(this.Lx, this))
+         this.tornDown || (this.tornDown = !0, this.disposeMeshes(), nW.unregisterRenderer(this.MN, this))
```

#### 1132. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8815` → after: `L8873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8873) · [Before (L8815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8815)

```diff
-         }, kk.on("Px", RM.tickHandler))
+         }, CC.on("ZN", nW.tickHandler))
```

#### 1133. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8818` → after: `L8876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8876) · [Before (L8818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8818)

```diff
-         delete RM.allRenderers[ek.rendererId], RM.tickHandler && 0 === Object.keys(RM.allRenderers).length && (kk.off("Px", RM.tickHandler), RM.tickHandler = null)
+         delete nW.allRenderers[zC.rendererId], nW.tickHandler && 0 === Object.keys(nW.allRenderers).length && (CC.off("ZN", nW.tickHandler), nW.tickHandler = null)
```

#### 1134. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8829` → after: `L8887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8887) · [Before (L8829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8829)

```diff
-         const Dk = [(0, Ek.t)(kk), (0, Ek.t)(ek), (0, Ek.t)(ik)],
+         const QC = [(0, XC.v)(CC), (0, XC.v)(zC), (0, XC.v)(ZC)],
```

#### 1135. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8837` → after: `L8895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8895) · [Before (L8837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8837)

```diff
-                     (fk.isChunkBound && Sk.isChunkBound ? ek : ik).push(...Dk(kk, iK(fk.offset), iK(Sk.offset)))
+                     (wC.isChunkBound && bC.isChunkBound ? zC : ZC).push(...QC(CC, FW(wC.offset), FW(bC.offset)))
```

#### 1136. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8840` → after: `L8898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8898) · [Before (L8840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8840)

```diff
-         this.borderMaterial = this.createPlaneMaterial(`chunkBorderMat-${kk}-${ek}-${ik}`, this.config.borderColor), this.borderMesh = this.addPlanes("chunkBorders", fk, this.borderMaterial, Dk), this.subdivMaterial = this.createPlaneMaterial(`chunkSubdivMat-${kk}-${ek}-${ik}`, t … [truncated]
+         this.borderMaterial = this.createPlaneMaterial(`chunkBorderMat-${CC}-${zC}-${ZC}`, this.config.borderColor), this.borderMesh = this.addPlanes("chunkBorders", wC, this.borderMaterial, QC), this.subdivMaterial = this.createPlaneMaterial(`chunkSubdivMat-${CC}-${zC}-${ZC}`, t … [truncated]
```

#### 1137. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8843-L8844` → after: `L8901-L8902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8901-L8902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8901-L8902) · [Before (L8843-L8844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8843-L8844)

```diff
-         const fk = (0, yk.l)(this.Lx.yH, kk, function(kk) {
-           return (0, OM.f)(kk.map((kk => {
+         const wC = (0, RC.n)(this.MN.Vg, CC, function(CC) {
+           return (0, ZW.i)(CC.map((CC => {
```

#### 1138. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8846` → after: `L8904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8904) · [Before (L8846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8846)

```diff
-             return [(0, Yk.l)({
+             return [(0, AC.g)({
```

#### 1139. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8852` → after: `L8910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8910) · [Before (L8852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8852)

```diff
-         return fk.material = ik, fk.Pw = !1, this.Lx.yH.Mw(fk, !0, Dk), fk
+         return wC.material = ZC, wC.tS = !1, this.MN.Vg.jS(wC, !0, QC), wC
```

#### 1140. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8858` → after: `L8916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8916) · [Before (L8858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8858)

```diff
-           bw: this.Lx.yH.bw,
+           sS: this.MN.Vg.sS,
```

#### 1141. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8860` → after: `L8918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8918) · [Before (L8860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8860)

```diff
-             ...Ck.e,
+             ...JC.c,
```

#### 1142. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8865` → after: `L8923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8923) · [Before (L8865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8865)

```diff
-             transparencyMode: dk.r.alphaBlend
+             transparencyMode: eC.t.alphaBlend
```

#### 1143. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8875` → after: `L8933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8933) · [Before (L8875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8875)

```diff
-     const JM = Ek.u / 2,
+     const fW = XC.x / 2,
```

#### 1144. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8878-L8879` → after: `L8936-L8937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8936-L8937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8936-L8937) · [Before (L8878-L8879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8878-L8879)

```diff
-         [kk, Ek.u, ek, JM, ik, 0, 0],
-         [kk, Ek.u, ek, JM, ik, kK, 0]
+         [CC, XC.x, zC, fW, ZC, 0, 0],
+         [CC, XC.x, zC, fW, ZC, oW, 0]
```

#### 1145. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8881-L8882` → after: `L8939-L8940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8939-L8940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8939-L8940) · [Before (L8881-L8882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8881-L8882)

```diff
-         [Ek.u, kk, JM, ek, ik, 0, 0],
-         [Ek.u, kk, JM, ek, ik, 0, kK]
+         [XC.x, CC, fW, zC, ZC, 0, 0],
+         [XC.x, CC, fW, zC, ZC, 0, oW]
```

#### 1146. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8884-L8885` → after: `L8942-L8943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8942-L8943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8942-L8943) · [Before (L8884-L8885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8884-L8885)

```diff
-         [kk, Ek.u, ik, ek, JM, 0, kK],
-         [Ek.u, kk, ik, ek, JM, kK, 0]
+         [CC, XC.x, ZC, zC, fW, 0, oW],
+         [XC.x, CC, ZC, zC, fW, oW, 0]
```

#### 1147. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8889` → after: `L8947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8947) · [Before (L8889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8889)

```diff
-       return 0 === kk ? -.01 : kk === Ek.u ? Ek.u + GM : kk + GM
+       return 0 === CC ? -.01 : CC === XC.x ? XC.x + wW : CC + wW
```

#### 1148. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8895` → after: `L8953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8953) · [Before (L8895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8895)

```diff
-         this.Lx = kk, this.config = null, this.renderCallback = null, this.sampleX = new Float64Array(DK), this.sampleZ = new Float64Array(DK), this.sampleY = new Float64Array(DK), this.sampleAirborne = new Uint8Array(DK), this.worldOffset = [0, 0, 0], this.playerPos = [0, 0, 0], … [truncated]
+         this.MN = CC, this.config = null, this.renderCallback = null, this.sampleX = new Float64Array(WW), this.sampleZ = new Float64Array(WW), this.sampleY = new Float64Array(WW), this.sampleAirborne = new Uint8Array(WW), this.worldOffset = [0, 0, 0], this.playerPos = [0, 0, 0], … [truncated]
```

#### 1149. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8904` → after: `L8962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8962) · [Before (L8904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8904)

```diff
-         const ek = Zr.c.subscribe("groundArrowPath", (kk => {
+         const zC = zo.e.subscribe("groundArrowPath", (CC => {
```

#### 1150. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8913` → after: `L8971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8971) · [Before (L8913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8913)

```diff
-         this.config = kk, this.renderer.setColour(kk.colour), this.renderCallback || (this.renderCallback = kk => this.onBeforeRender(kk), this.Lx.on("beforeRender", this.renderCallback))
+         this.config = CC, this.renderer.setColour(CC.colour), this.renderCallback || (this.renderCallback = CC => this.onBeforeRender(CC), this.MN.on("beforeRender", this.renderCallback))
```

#### 1151. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8921` → after: `L8979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8979) · [Before (L8921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8921)

```diff
-         const kk = this.Lx.mY.ZZ(this.Lx.Qq);
+         const CC = this.MN.JR.lL(this.MN.qE);
```

#### 1152. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8923` → after: `L8981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8981) · [Before (L8923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8923)

```diff
-         pk().copy(this.worldOffset, this.Lx.Xx), pk().add(this.playerPos, kk.hG, this.worldOffset);
+         GC().copy(this.worldOffset, this.MN.YN), GC().add(this.playerPos, CC.nB, this.worldOffset);
```

#### 1153. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8932` → after: `L8990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L8990) · [Before (L8932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8932)

```diff
-         if (lP.endAtSolidFace && this.Lx.Ux.pT(Math.floor(ek[0]), Math.floor(ek[1]), Math.floor(ek[2]))) {
+         if (vo.endAtSolidFace && this.MN.fN.Sy(Math.floor(zC[0]), Math.floor(zC[1]), Math.floor(zC[2]))) {
```

#### 1154. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8979` → after: `L9037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9037) · [Before (L8979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8979)

```diff
-         return this.Lx.Ux.pT(kk, ek, ik) && !this.Lx.Ux.pT(kk, ek + 1, ik)
+         return this.MN.fN.Sy(CC, zC, ZC) && !this.MN.fN.Sy(CC, zC + 1, ZC)
```

#### 1155. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8982` → after: `L9040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9040) · [Before (L8982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8982)

```diff
-         this.renderCallback && (this.Lx.off("beforeRender", this.renderCallback), this.renderCallback = null), this.renderer.dispose()
+         this.renderCallback && (this.MN.off("beforeRender", this.renderCallback), this.renderCallback = null), this.renderer.dispose()
```

#### 1156. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8985-L8986` → after: `L9043-L9044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9043-L9044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9043-L9044) · [Before (L8985-L8986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8985-L8986)

```diff
-     var bK = ik(36396),
-       rK = ik(37402);
+     var gW = ZC(36687),
+       SW = ZC(37640);
```

#### 1157. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8989` → after: `L9047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9047) · [Before (L8989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8989)

```diff
-         this.Lx = void 0, this.bloxd = void 0, this.bloxdSetBlockNoMulti = (kk, ek, ik, Dk, fk) => {
+         this.MN = void 0, this.bloxd = void 0, this.bloxdSetBlockNoMulti = (CC, zC, ZC, QC, wC) => {
```

#### 1158. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8991` → after: `L9049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9049) · [Before (L8991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8991)

```diff
-         }, this.Lx = kk, this.bloxd = ek
+         }, this.MN = CC, this.bloxd = zC
```

#### 1159. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8994` → after: `L9052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9052) · [Before (L8994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L8994)

```diff
-         if (!(fk in rK.h)) return console.error(`Called for non multiblock ${fk}`), !1;
+         if (!(wC in SW.f)) return console.error(`Called for non multiblock ${wC}`), !1;
```

#### 1160. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9001-L9003` → after: `L9059-L9061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9059-L9061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9059-L9061) · [Before (L9001-L9003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9001-L9003)

```diff
-           of rK.h[fk].positions) {
-           const fk = this.bloxd.Fy(ek + bk, ik + rk, Dk + Pk);
-           if (this.Lx.Skk(fk) || !this.bloxd.playerCanChangePos(kk, ek + bk, ik + rk, Dk + Pk, Mk.g[Sk].id)) return !1
+           of SW.f[wC].positions) {
+           const wC = this.bloxd.rG(zC + nC, ZC + fC, QC + oC);
+           if (this.MN.SCC(wC) || !this.bloxd.playerCanChangePos(CC, zC + nC, ZC + fC, QC + oC, FC.g[bC].id)) return !1
```

#### 1161. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9015` → after: `L9073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9073) · [Before (L9015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9015)

```diff
-           of rK.h[ek].positions) ik.push([kk[0] + fk, kk[1] + Sk, kk[2] + bk]);
+           of SW.f[zC].positions) ZC.push([CC[0] + wC, CC[1] + bC, CC[2] + nC]);
```

#### 1162. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9019` → after: `L9077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9077) · [Before (L9019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9019)

```diff
-         if (kk in rK.e) {
+         if (CC in SW.b) {
```

#### 1163. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9036` → after: `L9094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9094) · [Before (L9036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9036)

```diff
-             of rK.h[fk].positions) {
+             of SW.f[wC].positions) {
```

#### 1164. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9040` → after: `L9098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9098) · [Before (L9040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9040)

```diff
-               nk = this.bloxd.Fy(fk, Kk, xk);
+               MC = this.bloxd.rG(wC, WC, NC);
```

#### 1165. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9067-L9068` → after: `L9125-L9126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9125-L9126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9125-L9126) · [Before (L9067-L9068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9067-L9068)

```diff
-         } = rK.e[kk], Pk = ek - Sk, mk = ik - bk, Mk = Dk - rk, Kk = this.bloxd.Fy(Pk, mk, Mk);
-         if (Kk in rK.h)
+         } = SW.b[CC], oC = zC - bC, qC = ZC - nC, FC = QC - fC, WC = this.bloxd.rG(oC, qC, FC);
+         if (WC in SW.f)
```

#### 1166. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9075` → after: `L9133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9133) · [Before (L9075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9075)

```diff
-             of rK.h[Kk].positions)
+             of SW.f[WC].positions)
```

#### 1167. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9093-L9095` → after: `L9151-L9153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9151-L9153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9151-L9153) · [Before (L9093-L9095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9093-L9095)

```diff
-         const rk = this.bloxd.Fy(kk, ek, ik),
-           Pk = null !== (fk = this.getRestoredTop(kk, ek, ik, rk, Dk, bk)) && void 0 !== fk ? fk : Dk;
-         if (rk in rK.e) {
+         const fC = this.bloxd.rG(CC, zC, ZC),
+           oC = null !== (wC = this.getRestoredTop(CC, zC, ZC, fC, QC, nC)) && void 0 !== wC ? wC : QC;
+         if (fC in SW.b) {
```

#### 1168. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9108` → after: `L9166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9166) · [Before (L9108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9108)

```diff
-             of rK.h[Dk].positions) {
+             of SW.f[QC].positions) {
```

#### 1169. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9112` → after: `L9170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9170) · [Before (L9112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9112)

```diff
-             this.bloxd.Fy(Dk, mk, Mk) === kk && Sk(Dk, mk, Mk, 0, !0)
+             this.bloxd.rG(QC, qC, FC) === CC && bC(QC, qC, FC, 0, !0)
```

#### 1170. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9115` → after: `L9173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9173) · [Before (L9115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9115)

```diff
-         if (Pk in rK.e) {
+         if (oC in SW.b) {
```

#### 1171. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9121` → after: `L9179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9179) · [Before (L9121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9121)

```diff
-           } = rK.e[Pk];
+           } = SW.b[oC];
```

#### 1172. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9128` → after: `L9186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9186) · [Before (L9128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9128)

```diff
-             of rK.h[Dk].positions) {
+             of SW.f[QC].positions) {
```

#### 1173. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9132-L9134` → after: `L9190-L9192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9190-L9192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9190-L9192) · [Before (L9132-L9134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9132-L9134)

```diff
-             if (!this.bloxd.qT(Dk, nk, Uk)) continue;
-             const Hk = this.bloxd.Fy(Dk, nk, Uk),
-               wk = !this.Lx.dn.pT(Hk);
+             if (!this.bloxd.Gy(QC, MC, gC)) continue;
+             const SC = this.bloxd.rG(QC, MC, gC),
+               pC = !this.MN.qM.Sy(SC);
```

#### 1174. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9143` → after: `L9201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9201) · [Before (L9143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9143)

```diff
-         return !!bk && (null === (Sk = Mk.g[this.bloxd.Fy(kk, ek, ik)]) || void 0 === Sk ? void 0 : Sk.meta.rootId) === Mk.g[bk].meta.rootId
+         return !!nC && (null === (bC = FC.g[this.bloxd.rG(CC, zC, ZC)]) || void 0 === bC ? void 0 : bC.meta.rootId) === FC.g[nC].meta.rootId
```

#### 1175. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9150-L9151` → after: `L9208-L9209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9208-L9209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9208-L9209) · [Before (L9150-L9151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9150-L9151)

```diff
-         if (null === Sk || !Pk || mk === rk.meta.rootId || mk === Pk.meta.rootId || !this.bloxd.qT(kk, ek - 1, ik)) return null;
-         const Kk = Mk.g[this.bloxd.Fy(kk, ek - 1, ik)];
+         if (null === bC || !oC || qC === fC.meta.rootId || qC === oC.meta.rootId || !this.bloxd.Gy(CC, zC - 1, ZC)) return null;
+         const WC = FC.g[this.bloxd.rG(CC, zC - 1, ZC)];
```

#### 1176. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9158-L9159` → after: `L9216-L9217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9216-L9217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9216-L9217) · [Before (L9158-L9159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9158-L9159)

```diff
-         if (!Kk && !xk || !this.bloxd.qT(kk, ek + 1, ik)) return;
-         const nk = this.bloxd.Fy(kk, ek + 1, ik),
+         if (!WC && !NC || !this.bloxd.Gy(CC, zC + 1, ZC)) return;
+         const MC = this.bloxd.rG(CC, zC + 1, ZC),
```

#### 1177. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9168` → after: `L9226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9226) · [Before (L9168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9168)

```diff
-     var mK = ik(9072);
+     var PW = ZC(9252);
```

#### 1178. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9172` → after: `L9230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9230) · [Before (L9172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9172)

```diff
-       (null === kk || void 0 === kk ? void 0 : kk.chestStr) !== Ek.e || Object.isFrozen(kk) || (kk.chestStr = (0, Ek.C)(kk.chestStr))
+       (null === CC || void 0 === CC ? void 0 : CC.chestStr) !== XC.i || Object.isFrozen(CC) || (CC.chestStr = (0, XC.G)(CC.chestStr))
```

#### 1179. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9179` → after: `L9237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9237) · [Before (L9179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9179)

```diff
-         if (this.storage.get(kk, ek, ik) && console.error(new Error(`adding chunk x y z ${kk} ${ek} ${ik} to dataowner that already exists`).stack), 0 === Dk.length) return void this.storage.set(kk, ek, ik, MK);
+         if (this.storage.get(CC, zC, ZC) && console.error(new Error(`adding chunk x y z ${CC} ${zC} ${ZC} to dataowner that already exists`).stack), 0 === QC.length) return void this.storage.set(CC, zC, ZC, GW);
```

#### 1180. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9190-L9191` → after: `L9248-L9249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9248-L9249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9248-L9249) · [Before (L9190-L9191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9190-L9191)

```diff
-           (kk[0] > 31 || kk[1] > 31 || kk[2] > 31 || kk[0] < 0 || kk[1] < 0 || kk[2] < 0) && (kk = (0, Ek.Z)(kk));
-           const ek = null !== bk && void 0 !== bk ? bk : {
+           (CC[0] > 31 || CC[1] > 31 || CC[2] > 31 || CC[0] < 0 || CC[1] < 0 || CC[2] < 0) && (CC = (0, XC.eb)(CC));
+           const zC = null !== nC && void 0 !== nC ? nC : {
```

#### 1181. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9195` → after: `L9253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9253) · [Before (L9195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9195)

```diff
-           KK(ek.persisted), fk[`${kk[0]}|${kk[1]}|${kk[2]}`] = ek
+           RW(zC.persisted), wC[`${CC[0]}|${CC[1]}|${CC[2]}`] = zC
```

#### 1182. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9224` → after: `L9282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9282) · [Before (L9224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9224)

```diff
-           if ((0, Ek.F)(kk)) console.error("ChunkInfo block at local pos", bk, "was nullish:", kk);
+           if ((0, XC.H)(CC)) console.error("ChunkInfo block at local pos", nC, "was nullish:", CC);
```

#### 1183. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9237` → after: `L9295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9295) · [Before (L9237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9237)

```diff
-           Sk = [kk * Uk.g.oU, ek * Uk.g.oU, ik * Uk.g.oU];
+           bC = [CC * gC.f.Ig, zC * gC.f.Ig, ZC * gC.f.Ig];
```

#### 1184. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9242` → after: `L9300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9300) · [Before (L9242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9242)

```diff
-             fk = this.bloxd.Fy(ik[0], ik[1], ik[2]);
+             wC = this.bloxd.rG(ZC[0], ZC[1], ZC[2]);
```

#### 1185. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9248-L9250` → after: `L9306-L9308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9306-L9308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9306-L9308) · [Before (L9248-L9250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9248-L9250)

```diff
-         const Dk = (0, Ek.K)(kk),
-           fk = (0, Ek.K)(ek),
-           Sk = (0, Ek.K)(ik),
+         const QC = (0, XC.Q)(CC),
+           wC = (0, XC.Q)(zC),
+           bC = (0, XC.Q)(ZC),
```

#### 1186. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9253` → after: `L9311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9311) · [Before (L9253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9253)

```diff
-         delete bk[`${(0,Ek.N)(kk)}|${(0,Ek.N)(ek)}|${(0,Ek.N)(ik)}`]
+         delete nC[`${(0,XC.U)(CC)}|${(0,XC.U)(zC)}|${(0,XC.U)(ZC)}`]
```

#### 1187. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9258` → after: `L9316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9316) · [Before (L9258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9258)

```diff
-         const Sk = Uk.g.oU;
+         const bC = gC.f.Ig;
```

#### 1188. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9265` → after: `L9323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9323) · [Before (L9265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9265)

```diff
-         return this.storage.get((0, Ek.K)(kk), (0, Ek.K)(ek), (0, Ek.K)(ik))[`${(0,Ek.N)(kk)}|${(0,Ek.N)(ek)}|${(0,Ek.N)(ik)}`]
+         return this.storage.get((0, XC.Q)(CC), (0, XC.Q)(zC), (0, XC.Q)(ZC))[`${(0,XC.U)(CC)}|${(0,XC.U)(zC)}|${(0,XC.U)(ZC)}`]
```

#### 1189. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9280-L9282` → after: `L9338-L9340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9338-L9340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9338-L9340) · [Before (L9280-L9282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9280-L9282)

```diff
-         const Sk = (0, Ek.K)(kk),
-           bk = (0, Ek.K)(ek),
-           rk = (0, Ek.K)(ik);
+         const bC = (0, XC.Q)(CC),
+           nC = (0, XC.Q)(zC),
+           fC = (0, XC.Q)(ZC);
```

#### 1190. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9285` → after: `L9343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9343) · [Before (L9285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9285)

```diff
-         const mk = `${(0,Ek.N)(kk)}|${(0,Ek.N)(ek)}|${(0,Ek.N)(ik)}`,
+         const qC = `${(0,XC.U)(CC)}|${(0,XC.U)(zC)}|${(0,XC.U)(ZC)}`,
```

#### 1191. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9291` → after: `L9349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9349) · [Before (L9291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9291)

```diff
-         const Sk = arguments.length >= 4 ? Dk : this.getBlockData(kk, ek, ik);
+         const bC = arguments.length >= 4 ? QC : this.getBlockData(CC, zC, ZC);
```

#### 1192. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9306-L9309` → after: `L9364-L9367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9364-L9367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9364-L9367) · [Before (L9306-L9309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9306-L9309)

```diff
-     var nK = ik(36630),
-       UK = ik(38795),
-       HK = ik(38798),
-       wK = ik(37634),
+     var xW = ZC(36897),
+       JW = ZC(39068),
+       IW = ZC(39071),
+       iW = ZC(37892),
```

#### 1193. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9316` → after: `L9374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9374) · [Before (L9316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9316)

```diff
-         this.bloxd = void 0, this.books = new Map, this.bloxd = kk, this.bloxd.isClient && this.onPlayerJoin(this.bloxd.Lx.Qq)
+         this.bloxd = void 0, this.books = new Map, this.bloxd = CC, this.bloxd.isClient && this.onPlayerJoin(this.bloxd.MN.qE)
```

#### 1194. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9323` → after: `L9381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9381) · [Before (L9323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9323)

```diff
-           base: UK.e,
+           base: JW.c,
```

#### 1195. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9332` → after: `L9390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9390) · [Before (L9332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9332)

```diff
-           fk = (0, HK.c)(null !== ik && void 0 !== ik ? ik : YK);
+           wC = (0, IW.e)(null !== ZC && void 0 !== ZC ? ZC : KW);
```

#### 1196. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9347` → after: `L9405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9405) · [Before (L9347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9347)

```diff
-         return void 0 !== fk ? fk : Object.hasOwn(Dk.base, ek) ? Dk.base[ek] : void 0
+         return void 0 !== wC ? wC : Object.hasOwn(QC.base, zC) ? QC.base[zC] : void 0
```

#### 1197. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9358` → after: `L9416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9416) · [Before (L9358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9358)

```diff
-           ek(bk, null !== (Sk = null === fk || void 0 === fk ? void 0 : fk.get(bk)) && void 0 !== Sk ? Sk : Dk[bk])
+           zC(nC, null !== (bC = null === wC || void 0 === wC ? void 0 : wC.get(nC)) && void 0 !== bC ? bC : QC[nC])
```

#### 1198. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9366` → after: `L9424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9424) · [Before (L9366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9366)

```diff
-         return void 0 !== Dk && (Dk.base !== UK.e || (null !== (ek = null === (ik = Dk.overrides) || void 0 === ik ? void 0 : ik.size) && void 0 !== ek ? ek : 0) > 0)
+         return void 0 !== QC && (QC.base !== JW.c || (null !== (zC = null === (ZC = QC.overrides) || void 0 === ZC ? void 0 : ZC.size) && void 0 !== zC ? zC : 0) > 0)
```

#### 1199. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9374` → after: `L9432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9432) · [Before (L9374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9374)

```diff
-           vM: fk,
+           Vn: wC,
```

#### 1200. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9386` → after: `L9444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9444) · [Before (L9386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9386)

```diff
-               vM: rk,
+               Vn: fC,
```

#### 1201. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9390` → after: `L9448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9448) · [Before (L9390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9390)

```diff
-               vM: rk,
+               Vn: fC,
```

#### 1202. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9399` → after: `L9457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9457) · [Before (L9399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9399)

```diff
-         Array.isArray(fk) ? Sk = fk : (Sk = pK, pK[0] = fk, pK.length = 1);
+         Array.isArray(wC) ? bC = wC : (bC = eW, eW[0] = wC, eW.length = 1);
```

#### 1203. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9457` → after: `L9515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9515) · [Before (L9457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9457)

```diff
-         if (!1 !== this.bloxd.dn.metadatas[ik].stackable) {
+         if (!1 !== this.bloxd.qM.metadatas[ZC].stackable) {
```

#### 1204. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9467-L9468` → after: `L9525-L9526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9525-L9526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9525-L9526) · [Before (L9467-L9468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9467-L9468)

```diff
-             EM: 0,
-             vr: null,
+             Cf: 0,
+             qn: null,
```

#### 1205. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9481` → after: `L9539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9539) · [Before (L9481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9481)

```diff
-             vr: nk,
+             qn: MC,
```

#### 1206. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9485-L9486` → after: `L9543-L9544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9543-L9544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9543-L9544) · [Before (L9485-L9486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9485-L9486)

```diff
-           EM: xk / mk,
-           vr: nk,
+           Cf: NC / qC,
+           qn: MC,
```

#### 1207. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9516` → after: `L9574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9574) · [Before (L9516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9516)

```diff
-         if (!1 !== this.bloxd.dn.metadatas[ek].stackable) {
+         if (!1 !== this.bloxd.qM.metadatas[zC].stackable) {
```

#### 1208. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9536` → after: `L9594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9594) · [Before (L9536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9536)

```diff
-           vr: Sk,
+           qn: bC,
```

#### 1209. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9584-L9585` → after: `L9642-L9643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9642-L9643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9642-L9643) · [Before (L9584-L9585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9584-L9585)

```diff
-       const ik = UK.i[kk];
-       return ik ? void 0 === ek ? ik : (ek <= 0 && (ek = 1), ik.map((kk => {
+       const ZC = JW.f[CC];
+       return ZC ? void 0 === zC ? ZC : (zC <= 0 && (zC = 1), ZC.map((CC => {
```

#### 1210. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9596-L9599` → after: `L9654-L9657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9654-L9657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9654-L9657) · [Before (L9596-L9599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9596-L9599)

```diff
-     var AK = ik(38064),
-       jK = ik(38071),
-       sK = ik(1218),
-       dK = ik(6328);
+     var mW = ZC(38309),
+       HW = ZC(38312),
+       EW = ZC(1183),
+       lW = ZC(6484);
```

#### 1211. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9603` → after: `L9661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9661) · [Before (L9603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9603)

```diff
-           ...nK.q
+           ...xW.m
```

#### 1212. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9607-L9609` → after: `L9665-L9667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9665-L9667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9665-L9667) · [Before (L9607-L9609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9607-L9609)

```diff
-     var FK = ik(38057),
-       uK = ik(37229),
-       qK = ik(33774);
+     var cW = ZC(38300),
+       uW = ZC(37475),
+       rW = ZC(34162);
```

#### 1213. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9613` → after: `L9671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9671) · [Before (L9613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9613)

```diff
-         this.bloxd = kk, this.enchanter = void 0, IK ??= new uK.e(nK.q), this.enchanter = IK
+         this.bloxd = CC, this.enchanter = void 0, sW ??= new uW.d(xW.m), this.enchanter = sW
```

#### 1214. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9616` → after: `L9674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9674) · [Before (L9616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9616)

```diff
-         return this.bloxd.isClient && console.assert(kk === this.bloxd.Lx.Qq || kk === this.bloxd.Lx.ykk, "eId in client getPossibleEnchantments must be local player"), this.enchanter.getPossibleEnchantmentsForItem(ek)
+         return this.bloxd.isClient && console.assert(CC === this.bloxd.MN.qE || CC === this.bloxd.MN.mCC, "eId in client getPossibleEnchantments must be local player"), this.enchanter.getPossibleEnchantmentsForItem(zC)
```

#### 1215. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9619-L9622` → after: `L9677-L9680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9677-L9680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9677-L9680) · [Before (L9619-L9622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9619-L9622)

```diff
-         if (this.bloxd.isClient && console.assert(kk === this.bloxd.Lx.Qq || kk === this.bloxd.Lx.ykk, "eId in client canUseEnchantingTable must be local player"), !this.bloxd.getClientPredictedOption(kk, "canCraft")) return !1;
-         if (!(0, qK.l)(ik)) return !1;
-         const Dk = this.bloxd.mY.Dek(kk).getItemAtIdx(ek);
-         return 0 !== this.getPossibleEnchantments(kk, null === Dk || void 0 === Dk ? void 0 : Dk.name).length && !(!Dk || (0, qK.k)(Dk.attributes))
+         if (this.bloxd.isClient && console.assert(CC === this.bloxd.MN.qE || CC === this.bloxd.MN.mCC, "eId in client canUseEnchantingTable must be local player"), !this.bloxd.getClientPredictedOption(CC, "canCraft")) return !1;
+         if (!(0, rW.t)(ZC)) return !1;
+         const QC = this.bloxd.JR.SzC(CC).getItemAtIdx(zC);
+         return 0 !== this.getPossibleEnchantments(CC, null === QC || void 0 === QC ? void 0 : QC.name).length && !(!QC || (0, rW.p)(QC.attributes))
```

#### 1216. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9625` → after: `L9683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9683) · [Before (L9625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9625)

```diff
-         return (0, qK.l)(kk)
+         return (0, rW.t)(CC)
```

#### 1217. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9628` → after: `L9686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9686) · [Before (L9628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9628)

```diff
-         return (0, qK.b)(kk, ek)
+         return (0, rW.d)(CC, zC)
```

#### 1218. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9634` → after: `L9692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9692) · [Before (L9634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9634)

```diff
-         return (0, qK.f)(kk, ek)
+         return (0, rW.h)(CC, zC)
```

#### 1219. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9636-L9639` → after: `L9694-L9697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9694-L9697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9694-L9697) · [Before (L9636-L9639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9636-L9639)

```diff
-     }(0, Mk.h)("Coal Ore"), (0, Mk.h)("Iron Ore"), (0, Mk.h)("Gold Ore"), (0, Mk.h)("Diamond Ore"), (0, Mk.h)("Moonstone Ore"), (0, Mk.h)("Pure Coal Ore"), (0, Mk.h)("Pure Iron Ore"), (0, Mk.h)("Pure Gold Ore"), (0, Mk.h)("Pure Diamond Ore"), (0, Mk.h)("Pure Moonstone Ore"), (0,  … [truncated]
-     var QK = ik(37250),
-       vK = ik(36655),
-       EK = ik(37253);
+     }(0, FC.k)("Coal Ore"), (0, FC.k)("Iron Ore"), (0, FC.k)("Gold Ore"), (0, FC.k)("Diamond Ore"), (0, FC.k)("Moonstone Ore"), (0, FC.k)("Pure Coal Ore"), (0, FC.k)("Pure Iron Ore"), (0, FC.k)("Pure Gold Ore"), (0, FC.k)("Pure Diamond Ore"), (0, FC.k)("Pure Moonstone Ore"), (0,  … [truncated]
+     var aW = ZC(37493),
+       tW = ZC(36926),
+       DW = ZC(37496);
```

#### 1220. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9641-L9642` → after: `L9699-L9700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9699-L9700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9699-L9700) · [Before (L9641-L9642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9641-L9642)

```diff
-     const hK = new Set(vK.d.map((function(kk) {
-       return `${kk}ByBlock`
+     const jW = new Set(tW.i.map((function(CC) {
+       return `${CC}ByBlock`
```

#### 1221. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9646` → after: `L9704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9704) · [Before (L9646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9646)

```diff
-       return void 0 === ek ? kk : {
+       return void 0 === zC ? CC : {
```

#### 1222. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9667` → after: `L9725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9725) · [Before (L9667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9667)

```diff
-         const Dk = null !== (ik = this.resolved) && void 0 !== ik ? ik : this.buildResolvedSettings(kk, ek);
+         const QC = null !== (ZC = this.resolved) && void 0 !== ZC ? ZC : this.buildResolvedSettings(CC, zC);
```

#### 1223. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9673` → after: `L9731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9731) · [Before (L9673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9673)

```diff
-         const Dk = null !== (ik = this.blockLookups) && void 0 !== ik ? ik : this.buildBlockLookups(kk, ek);
+         const QC = null !== (ZC = this.blockLookups) && void 0 !== ZC ? ZC : this.buildBlockLookups(CC, zC);
```

#### 1224. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9705` → after: `L9763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9763) · [Before (L9705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9705)

```diff
-           canAutoStep: void 0 === Dk ? ik.canAutoStep : (0, QK.d)(aK(Sk.canAutoStepByBlock, Dk))
+           canAutoStep: void 0 === QC ? ZC.canAutoStep : (0, aW.c)(yW(bC.canAutoStepByBlock, QC))
```

#### 1225. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9709` → after: `L9767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9767) · [Before (L9709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9709)

```diff
-     var tK = ik(37772);
+     var UW = ZC(38012);
```

#### 1226. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9713` → after: `L9771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9771) · [Before (L9713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9713)

```diff
-         this.XM = new WeakMap
+         this.vq = new WeakMap
```

#### 1227. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9716` → after: `L9774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9774) · [Before (L9716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9716)

```diff
-         return Sk && (Dk > ek || fk > ik) ? (this.XM.set(kk, {
+         return bC && (QC > zC || wC > ZC) ? (this.vq.set(CC, {
```

#### 1228. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9722` → after: `L9780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9780) · [Before (L9722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9722)

```diff
-         }) : (this.XM.delete(kk), {
+         }) : (this.vq.delete(CC), {
```

#### 1229. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9728` → after: `L9786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9786) · [Before (L9728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9728)

```diff
-         return this.XM.get(kk)
+         return this.vq.get(CC)
```

#### 1230. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9731` → after: `L9789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9789) · [Before (L9731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9731)

```diff
-         this.XM.delete(kk)
+         this.vq.delete(CC)
```

#### 1231. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9734-L9735` → after: `L9792-L9793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9792-L9793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9792-L9793) · [Before (L9734-L9735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9734-L9735)

```diff
-     var cK = ik(9105),
-       TK = ik(38805);
+     var kW = ZC(9299),
+       VW = ZC(39076);
```

#### 1232. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9738` → after: `L9796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9796) · [Before (L9738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9738)

```diff
-         this.isClient = ek, this.callbacks = ik, this.Lx = void 0, this.mY = void 0, this.multiblockManager = void 0, this.blockDataOwner = void 0, this.craftingManager = void 0, this.enchantingManager = void 0, this.entityNames = {}, this.meshParticleSystems = {}, this.dn = new  … [truncated]
+         this.isClient = zC, this.callbacks = ZC, this.MN = void 0, this.JR = void 0, this.multiblockManager = void 0, this.blockDataOwner = void 0, this.craftingManager = void 0, this.enchantingManager = void 0, this.entityNames = {}, this.meshParticleSystems = {}, this.qM = new  … [truncated]
```

#### 1233. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9761` → after: `L9819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9819) · [Before (L9761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9761)

```diff
-         this.multiblockManager.RV(kk, ek, ik, Dk, fk, Sk)
+         this.multiblockManager.TY(CC, zC, ZC, QC, wC, bC)
```

#### 1234. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9764` → after: `L9822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9822) · [Before (L9764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9764)

```diff
-         const Sk = this.Fy(kk, ek, ik);
+         const bC = this.rG(CC, zC, ZC);
```

#### 1235. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9769` → after: `L9827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9827) · [Before (L9769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9769)

```diff
-         return fk in rK.h ? this.multiblockManager.playerCanPlaceItem(kk, ek, ik, Dk, fk) : this.playerCanChangePos(kk, ek, ik, Dk, fk, Sk)
+         return wC in SW.f ? this.multiblockManager.playerCanPlaceItem(CC, zC, ZC, QC, wC) : this.playerCanChangePos(CC, zC, ZC, QC, wC, bC)
```

#### 1236. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9774` → after: `L9832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9832) · [Before (L9774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9774)

```diff
-         return this.isClient ? this.qT(ek, ik, Dk) && this.posSatisfiesModifyConstraints(kk, ek, ik, Dk) && (!this.Lx.dn.pT(fk) || this.Lx.Ux.rW.has(fk) || !this.Lx.mY.okk(ek, ik, Dk, this.Lx.dn.fW(fk), Sk ? kk : null)) : this.qT(ek, ik, Dk) && this.posSatisfiesModifyConstraints( … [truncated]
+         return this.isClient ? this.Gy(zC, ZC, QC) && this.posSatisfiesModifyConstraints(CC, zC, ZC, QC) && (!this.MN.qM.Sy(wC) || this.MN.fN.wT.has(wC) || !this.MN.JR.QzC(zC, ZC, QC, this.MN.qM.Xs(wC), bC ? CC : null)) : this.Gy(zC, ZC, QC) && this.posSatisfiesModifyConstraints( … [truncated]
```

#### 1237. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9783` → after: `L9841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9841) · [Before (L9783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9783)

```diff
-         return 1 === ek ? `Partially Full ${kk}` : 2 === ek ? `Half Full ${kk}` : 3 === ek ? `Nearly Full ${kk}` : 4 === ek ? kk : "Bowl"
+         return 1 === zC ? `Partially Full ${CC}` : 2 === zC ? `Half Full ${CC}` : 3 === zC ? `Nearly Full ${CC}` : 4 === zC ? CC : "Bowl"
```

#### 1238. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9789-L9791` → after: `L9847-L9849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9847-L9849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9847-L9849) · [Before (L9789-L9791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9789-L9791)

```diff
-         if (kk && kk !== cK.c) {
-           if (this.dn.metadatas[kk]) return this.dn.metadatas[kk].id;
-           throw new Error(`Invalid block name. You sent ${kk}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files or those registered with the api`)
+         if (CC && CC !== kW.b) {
+           if (this.qM.metadatas[CC]) return this.qM.metadatas[CC].id;
+           throw new Error(`Invalid block name. You sent ${CC}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files or those registered with the api`)
```

#### 1239. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9796` → after: `L9854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9854) · [Before (L9796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9796)

```diff
-         return kk && kk !== cK.c ? this.dn.metadatas[kk].name : cK.c
+         return CC && CC !== kW.b ? this.qM.metadatas[CC].name : kW.b
```

#### 1240. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9799` → after: `L9857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9857) · [Before (L9799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9799)

```diff
-         return kk && kk !== cK.c ? this.getItemTypeObjImpl(kk) : null
+         return CC && CC !== kW.b ? this.getItemTypeObjImpl(CC) : null
```

#### 1241. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9802-L9803` → after: `L9860-L9861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9860-L9861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9860-L9861) · [Before (L9802-L9803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9802-L9803)

```diff
-         if (!kk || kk === cK.c) return cK.e;
-         const ek = this.dn.metadatas[kk];
+         if (!CC || CC === kW.b) return kW.d;
+         const zC = this.qM.metadatas[CC];
```

#### 1242. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9805-L9806` → after: `L9863-L9864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9863-L9864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9863-L9864) · [Before (L9805-L9806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9805-L9806)

```diff
-           if (this.isExecutingUserCode()) return void console.error(`No metadata for item: ${kk}`);
-           throw new Error(`Item ${kk} not found in registry`)
+           if (this.isExecutingUserCode()) return void console.error(`No metadata for item: ${CC}`);
+           throw new Error(`Item ${CC} not found in registry`)
```

#### 1243. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9811` → after: `L9869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9869) · [Before (L9811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9811)

```diff
-         if (TK.d.has(ik) && (this.isClient || "Player" === this.getEntityType(kk))) {
+         if (VW.c.has(ZC) && (this.isClient || "Player" === this.getEntityType(CC))) {
```

#### 1244. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9813-L9814` → after: `L9871-L9872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9871-L9872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9871-L9872) · [Before (L9813-L9814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9813-L9814)

```diff
-             fk = this.getClientPredictedOption(kk, (0, TK.e)(Dk, ik));
-           if (!(0, Ek.F)(fk)) return fk
+             wC = this.getClientPredictedOption(CC, (0, VW.d)(QC, ZC));
+           if (!(0, XC.H)(wC)) return wC
```

#### 1245. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9820-L9821` → after: `L9878-L9879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9878-L9879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9878-L9879) · [Before (L9820-L9821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9820-L9821)

```diff
-         const Dk = null === (ik = this.dn.metadatas[kk]) || void 0 === ik ? void 0 : ik[ek];
-         return (0, Ek.F)(Dk) && "displayName" === ek ? this.getItemName(kk) : Dk
+         const QC = null === (ZC = this.qM.metadatas[CC]) || void 0 === ZC ? void 0 : ZC[zC];
+         return (0, XC.H)(QC) && "displayName" === zC ? this.getItemName(CC) : QC
```

#### 1246. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9831` → after: `L9889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9889) · [Before (L9831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9831)

```diff
-         return mk ? Math.max(0, null !== (Sk = this.getItemStat(kk, mk, "attackRange")) && void 0 !== Sk ? Sk : bk) : bk
+         return qC ? Math.max(0, null !== (bC = this.getItemStat(CC, qC, "attackRange")) && void 0 !== bC ? bC : nC) : nC
```

#### 1247. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9835` → after: `L9893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9893) · [Before (L9835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9835)

```diff
-         return null !== (ek = this.getClientPredictedOption(kk, "blockReach")) && void 0 !== ek ? ek : Uk.g.Sy
+         return null !== (zC = this.getClientPredictedOption(CC, "blockReach")) && void 0 !== zC ? zC : gC.f.yp
```

#### 1248. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9841-L9846` → after: `L9899-L9904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9899-L9904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9899-L9904) · [Before (L9841-L9846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9841-L9846)

```diff
-           const bk = null === (Dk = nK.q[null === ik || void 0 === ik ? void 0 : ik.name]) || void 0 === Dk ? void 0 : Dk.harvests,
-             Pk = null === (fk = nK.q[null === ik || void 0 === ik ? void 0 : ik.name]) || void 0 === fk ? void 0 : fk.level;
-           return !(0, rk.qc)({
-             blockHarvestType: this.dn.metadatas[ek].harvestType,
-             blockHarvestLevel: this.dn.metadatas[ek].harvestLevel,
-             harvestLevel: null !== (Sk = this.getItemStat(kk, ek, "harvestLevel")) && void 0 !== Sk ? Sk : 0,
+           const nC = null === (QC = xW.m[null === ZC || void 0 === ZC ? void 0 : ZC.name]) || void 0 === QC ? void 0 : QC.harvests,
+             oC = null === (wC = xW.m[null === ZC || void 0 === ZC ? void 0 : ZC.name]) || void 0 === wC ? void 0 : wC.level;
+           return !(0, fC.pc)({
+             blockHarvestType: this.qM.metadatas[zC].harvestType,
+             blockHarvestLevel: this.qM.metadatas[zC].harvestLevel,
+             harvestLevel: null !== (bC = this.getItemStat(CC, zC, "harvestLevel")) && void 0 !== bC ? bC : 0,
```

#### 1249. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9854` → after: `L9912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9912) · [Before (L9854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9854)

```diff
-         return (0, rk.Jd)(this.getItemStat(kk, ek, "drops"), this.getItemStat(kk, ek, "specialToolDrop"), (() => this.getMetaInfo(ek).rootName), ik)
+         return (0, fC.Ld)(this.getItemStat(CC, zC, "drops"), this.getItemStat(CC, zC, "specialToolDrop"), (() => this.getMetaInfo(zC).rootName), ZC)
```

#### 1250. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9858` → after: `L9916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9916) · [Before (L9858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9858)

```diff
-         return ek && null !== (ik = null === (Dk = Mk.g[kk]) || void 0 === Dk ? void 0 : Dk.CP) && void 0 !== ik ? ik : 1
+         return zC && null !== (ZC = null === (QC = FC.g[CC]) || void 0 === QC ? void 0 : QC.aq) && void 0 !== ZC ? ZC : 1
```

#### 1251. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9869` → after: `L9927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9927) · [Before (L9869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9869)

```diff
-         return this.Lx.mY.lkk(kk, "inventory") ? this.Lx.mY.Dek(kk).getItemAtSelectedSlot() : null
+         return this.MN.JR.YCC(CC, "inventory") ? this.MN.JR.SzC(CC).getItemAtSelectedSlot() : null
```

#### 1252. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9872` → after: `L9930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9930) · [Before (L9872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9872)

```diff
-         return (0, Le.e)(this.Lx, kk, !1).length >= 1
+         return (0, Az.i)(this.MN, CC, !1).length >= 1
```

#### 1253. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9876` → after: `L9934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9934) · [Before (L9876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9876)

```diff
-         const Dk = this.dn.metadatas;
+         const QC = this.qM.metadatas;
```

#### 1254. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9882` → after: `L9940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9940) · [Before (L9882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9882)

```diff
-             !(0, Ek.F)(ek) && (void 0 === fk || ek > fk) && (fk = ek);
+             !(0, XC.H)(zC) && (void 0 === wC || zC > wC) && (wC = zC);
```

#### 1255. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9888` → after: `L9946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9946) · [Before (L9888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9888)

```diff
-             void 0 === ik && (ik = (0, TK.e)(this.getItemName(rk), "stoodOnSpeedMultiplier"), this.stoodOnOptions[rk] = ik), void 0 === bk && (bk = this.getPlayerReader(kk));
+             void 0 === ZC && (ZC = (0, VW.d)(this.getItemName(fC), "stoodOnSpeedMultiplier"), this.stoodOnOptions[fC] = ZC), void 0 === nC && (nC = this.getPlayerReader(CC));
```

#### 1256. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9891` → after: `L9949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9949) · [Before (L9891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9891)

```diff
-           }(0, Ek.F)(ek) && (this.stoodOnKnown[rk] || (this.stoodOnDefaults[rk] = this.getDefaultItemStat(rk, "stoodOnSpeedMultiplier"), this.stoodOnKnown[rk] = !0), ek = this.stoodOnDefaults[rk]), !(0, Ek.F)(ek) && (void 0 === fk || ek > fk) && (fk = ek)
+           }(0, XC.H)(zC) && (this.stoodOnKnown[fC] || (this.stoodOnDefaults[fC] = this.getDefaultItemStat(fC, "stoodOnSpeedMultiplier"), this.stoodOnKnown[fC] = !0), zC = this.stoodOnDefaults[fC]), !(0, XC.H)(zC) && (void 0 === wC || zC > wC) && (wC = zC)
```

#### 1257. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9893` → after: `L9951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9951) · [Before (L9893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9893)

```diff
-         return null !== (ik = fk) && void 0 !== ik ? ik : 1
+         return null !== (ZC = wC) && void 0 !== ZC ? ZC : 1
```

#### 1258. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9896` → after: `L9954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9954) · [Before (L9896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9896)

```diff
-         const ek = this.dn.metadatas,
+         const zC = this.qM.metadatas,
```

#### 1259. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9902` → after: `L9960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9960) · [Before (L9902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9902)

```diff
-           (0, Ek.F)(kk) || (ik.push(fk), Dk.push(Number(kk)))
+           (0, XC.H)(CC) || (ZC.push(wC), QC.push(Number(CC)))
```

#### 1260. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9910` → after: `L9968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9968) · [Before (L9910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9910)

```diff
-         const Dk = this.dn.metadatas;
+         const QC = this.qM.metadatas;
```

#### 1261. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9915` → after: `L9973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9973) · [Before (L9915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9915)

```diff
-             const ek = (0, TK.e)(this.getItemName(kk), "stoodOnSpeedMultiplier");
+             const zC = (0, VW.d)(this.getItemName(CC), "stoodOnSpeedMultiplier");
```

#### 1262. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9926` → after: `L9984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9984) · [Before (L9926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9926)

```diff
-           if (!(0, Ek.F)(ik))
+           if (!(0, XC.H)(ZC))
```

#### 1263. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9937` → after: `L9995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L9995) · [Before (L9937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9937)

```diff
-         return 1 === ek ? Dk = .5 * ik : 2 === ek ? Dk = .75 * ik : ek >= this.maxBunnyHops && (Dk = ik), 1 + Dk
+         return 1 === zC ? QC = .5 * ZC : 2 === zC ? QC = .75 * ZC : zC >= this.maxBunnyHops && (QC = ZC), 1 + QC
```

#### 1264. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9950` → after: `L10008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10008) · [Before (L9950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9950)

```diff
-         return this.Lx.pickBlock(ek, ik, this.getBlockReach(kk))
+         return this.MN.pickBlock(zC, ZC, this.getBlockReach(CC))
```

#### 1265. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9963-L9964` → after: `L10021-L10022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10021-L10022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10021-L10022) · [Before (L9963-L9964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9963-L9964)

```diff
-         kk.attributes.customAttributes = Object.assign(null !== (Dk = kk.attributes.customAttributes) && void 0 !== Dk ? Dk : {}, {
-           author: this.getEntityName(this.isClient ? this.Lx.Qq : ik),
+         CC.attributes.customAttributes = Object.assign(null !== (QC = CC.attributes.customAttributes) && void 0 !== QC ? QC : {}, {
+           author: this.getEntityName(this.isClient ? this.MN.qE : ZC),
```

#### 1266. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9971` → after: `L10029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10029) · [Before (L9971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9971)

```diff
-         Sk !== bk && this.RV(kk, ek, ik, (0, Mk.h)(bk))
+         bC !== nC && this.TY(CC, zC, ZC, (0, FC.k)(nC))
```

#### 1267. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9976` → after: `L10034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10034) · [Before (L9976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9976)

```diff
-         return `${Dk[0]}|meta|${null!==(ik=Dk[2])&&void 0!==ik?ik:"rot1"}|${ek>0?"full":"empty"}`
+         return `${QC[0]}|meta|${null!==(ZC=QC[2])&&void 0!==ZC?ZC:"rot1"}|${zC>0?"full":"empty"}`
```

#### 1268. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9983` → after: `L10041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10041) · [Before (L9983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9983)

```diff
-           return `${0===ek?"Empty Bookshelf":"Bookshelf"}|meta|${null!==(fk=Dk[2])&&void 0!==fk?fk:"rot1"}|books${ek}`
+           return `${0===zC?"Empty Bookshelf":"Bookshelf"}|meta|${null!==(wC=QC[2])&&void 0!==wC?wC:"rot1"}|books${zC}`
```

#### 1269. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9990` → after: `L10048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10048) · [Before (L9990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9990)

```diff
-         const fk = this.mY.Dek(kk).getItems();
+         const wC = this.JR.SzC(CC).getItems();
```

#### 1270. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9993` → after: `L10051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10051) · [Before (L9993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L9993)

```diff
-           if (rk.q.includes(null === kk || void 0 === kk ? void 0 : kk.name)) {
+           if (fC.n.includes(null === CC || void 0 === CC ? void 0 : CC.name)) {
```

#### 1271. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10007` → after: `L10065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10065) · [Before (L10007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10007)

```diff
-           kk <= 0 ? ek.setItemSlot(ik, cK.c, null) : ek.setItemSlot(ik, Dk.name, kk, Dk.attributes)
+           CC <= 0 ? zC.setItemSlot(ZC, kW.b, null) : zC.setItemSlot(ZC, QC.name, CC, QC.attributes)
```

#### 1272. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10011` → after: `L10069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10069) · [Before (L10011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10011)

```diff
-         if (this.mY.lkk(kk, "itemState")) return "Item";
+         if (this.JR.YCC(CC, "itemState")) return "Item";
```

#### 1273. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10015` → after: `L10073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10073) · [Before (L10015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10015)

```diff
-           return -1 === kk ? ek : ek.slice(0, kk)
+           return -1 === CC ? zC : zC.slice(0, CC)
```

#### 1274. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10017` → after: `L10075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10075) · [Before (L10017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10017)

```diff
-         return console.error(new Error(`Tried to get entity type for entity ${kk} but it doesn't exist in networked state`).stack), null
+         return console.error(new Error(`Tried to get entity type for entity ${CC} but it doesn't exist in networked state`).stack), null
```

#### 1275. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10023` → after: `L10081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10081) · [Before (L10023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10023)

```diff
-           bk = pk().copy(this.tempVec2, Uk.l[Sk.pose]);
+           nC = GC().copy(this.tempVec2, gC.o[bC.pose]);
```

#### 1276. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10027-L10028` → after: `L10085-L10086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10085-L10086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10085-L10086) · [Before (L10027-L10028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10027-L10028)

```diff
-         if (ek.type === dK.o.DEFAULT) {
-           const ek = (0, AK.g)(this.WG(kk), this.getLifeformType(kk));
+         if (zC.type === lW.r.DEFAULT) {
+           const zC = (0, mW.h)(this.qB(CC), this.getLifeformType(CC));
```

#### 1277. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10033` → after: `L10091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10091) · [Before (L10033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10033)

```diff
-         Dk && (mk += Math.max(Math.abs(Dk[0]), Math.abs(Dk[2])), Mk += Dk[1]), (mk > jK.e || Mk > jK.c) && ((ek.type !== dK.o.DEFAULT || Dk) && this.onCollisionBoxCapped(), mk = Math.min(mk, jK.e), Mk = Math.min(Mk, jK.c)), this.updatePositionAndPhysicsImpl(kk, ek, ik, null !== D … [truncated]
+         QC && (qC += Math.max(Math.abs(QC[0]), Math.abs(QC[2])), FC += QC[1]), (qC > HW.i || FC > HW.e) && ((zC.type !== lW.r.DEFAULT || QC) && this.onCollisionBoxCapped(), qC = Math.min(qC, HW.i), FC = Math.min(FC, HW.e)), this.updatePositionAndPhysicsImpl(CC, zC, ZC, null !== Q … [truncated]
```

#### 1278. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10036-L10037` → after: `L10094-L10095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10094-L10095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10094-L10095) · [Before (L10036-L10037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10036-L10037)

```diff
-         const Sk = this.Lx.mY.ZZ(kk),
-           bk = null === ik && ((0, Nk.w)(ek.type) || ek.type === dK.o.SLEEPING),
+         const bC = this.MN.JR.lL(CC),
+           nC = null === ZC && ((0, BC.t)(zC.type) || zC.type === lW.r.SLEEPING),
```

#### 1279. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10039` → after: `L10097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10097) · [Before (L10039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10039)

```diff
-         this.Lx.mY.aek(kk, rk.width, rk.height, rk.width)
+         this.MN.JR.LzC(CC, fC.width, fC.height, fC.width)
```

#### 1280. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10043` → after: `L10101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10101) · [Before (L10043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10043)

```diff
-         const ik = this.Lx.mY.ZZ(kk),
+         const ZC = this.MN.JR.lL(CC),
```

#### 1281. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10046` → after: `L10104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10104) · [Before (L10046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10046)

```diff
-         const fk = null !== (ek = ik.Xx) && void 0 !== ek ? ek : this.Lx.Xx,
+         const wC = null !== (zC = ZC.YN) && void 0 !== zC ? zC : this.MN.YN,
```

#### 1282. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10062` → after: `L10120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10120) · [Before (L10062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10062)

```diff
-                   const Sk = !0 === Dk ? XK : Dk;
+                   const bC = !0 === QC ? BW : QC;
```

#### 1283. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10067` → after: `L10125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10125) · [Before (L10067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10067)

```diff
-           }(ik.zkk, fk, Dk.width, Dk.height, ((ek, ik, Dk) => this.qT(ek, ik, Dk) ? this.getBlockCollisionForPlayer(kk, ek, ik, Dk, this.getClientPredictedBlock(kk, ek, ik, Dk)) : null));
+           }(ZC.DCC, wC, QC.width, QC.height, ((zC, ZC, QC) => this.Gy(zC, ZC, QC) ? this.getBlockCollisionForPlayer(CC, zC, ZC, QC, this.getClientPredictedBlock(CC, zC, ZC, QC)) : null));
```

#### 1284. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10071` → after: `L10129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10129) · [Before (L10071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10071)

```diff
-         const ek = this.Lx.mY.ZZ(kk),
+         const zC = this.MN.JR.lL(CC),
```

#### 1285. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10073` → after: `L10131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10131) · [Before (L10073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10073)

```diff
-         void 0 !== ik && (this.playerBodyGrowth.clear(ek), this.Lx.mY.aek(kk, ik.width, ik.height, ik.width))
+         void 0 !== ZC && (this.playerBodyGrowth.clear(zC), this.MN.JR.LzC(CC, ZC.width, ZC.height, ZC.width))
```

#### 1286. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10077` → after: `L10135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10135) · [Before (L10077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10077)

```diff
-         return null !== (ek = null === (ik = this.vehicleSettingOverridesByEId.get(kk)) || void 0 === ik ? void 0 : ik.getOverrides()) && void 0 !== ek ? ek : null
+         return null !== (zC = null === (ZC = this.vehicleSettingOverridesByEId.get(CC)) || void 0 === ZC ? void 0 : ZC.getOverrides()) && void 0 !== zC ? zC : null
```

#### 1287. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10098` → after: `L10156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10156) · [Before (L10098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10098)

```diff
-         return this.mY.vkk(kk).physicsState
+         return this.JR.yCC(CC).physicsState
```

#### 1288. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10104` → after: `L10162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10162) · [Before (L10104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10104)

```diff
-           this.updatePositionAndPhysics(ek, ik, !1, null !== kk && void 0 !== kk ? kk : void 0, !0)
+           this.updatePositionAndPhysics(zC, ZC, !1, null !== CC && void 0 !== CC ? CC : void 0, !0)
```

#### 1289. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10120-L10121` → after: `L10178-L10179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10178-L10179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10178-L10179) · [Before (L10120-L10121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10120-L10121)

```diff
-           mY: ik
-         } = this.Lx, Dk = ik.getState(kk, ik.names.jU);
+           JR: ZC
+         } = this.MN, QC = ZC.getState(CC, ZC.names.Zg);
```

#### 1290. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10125-L10127` → after: `L10183-L10185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10183-L10185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10183-L10185) · [Before (L10125-L10127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10125-L10127)

```diff
-         const ik = (0, Nk.e)(kk);
-         if (null === ik) return void console.error(`useConsumableVehicle called with non-consumable-vehicle item "${kk}"`);
-         const Dk = this.Lx.mY.jW(null !== ek && void 0 !== ek ? ek : this.Lx.Qq),
+         const ZC = (0, BC.b)(CC);
+         if (null === ZC) return void console.error(`useConsumableVehicle called with non-consumable-vehicle item "${CC}"`);
+         const QC = this.MN.JR.eT(null !== zC && void 0 !== zC ? zC : this.MN.qE),
```

#### 1291. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10132` → after: `L10190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10190) · [Before (L10132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10132)

```diff
-         Dk.Cw[1] = 0, Dk.applyImpulse([0, Sk, 0]), this.useConsumableVehicleImpl(ek, kk, ik)
+         QC.Np[1] = 0, QC.applyImpulse([0, bC, 0]), this.useConsumableVehicleImpl(zC, CC, ZC)
```

#### 1292. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10135` → after: `L10193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10193) · [Before (L10135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10135)

```diff
-         const Dk = this.Lx.mY.jW(kk),
+         const QC = this.MN.JR.eT(CC),
```

#### 1293. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10144-L10145` → after: `L10202-L10203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10202-L10203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10202-L10203) · [Before (L10144-L10145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10144-L10145)

```diff
-           fk = Uk.g.gliderFuelCooldown * ik,
-           Sk = this.isClient ? fk : Math.max(0, fk - Uk.g.gliderFuelServerLeewayMs);
+           wC = gC.f.gliderFuelCooldown * ZC,
+           bC = this.isClient ? wC : Math.max(0, wC - gC.f.gliderFuelServerLeewayMs);
```

#### 1294. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10149` → after: `L10207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10207) · [Before (L10149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10149)

```diff
-         (0, tK.j)(this.Lx, kk, ek, ik)
+         (0, UW.h)(this.MN, CC, zC, ZC)
```

#### 1295. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10153` → after: `L10211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10211) · [Before (L10153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10153)

```diff
-         for (const ik of this.Lx.mY.mq(this.Lx.mY.names.fL)) ik.qU === kk && ek.push(ik.Mq);
+         for (const ZC of this.MN.JR.YH(this.MN.JR.names.Xx)) ZC.og === CC && zC.push(ZC.mH);
```

#### 1296. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10160` → after: `L10218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10218) · [Before (L10160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10160)

```diff
-           const [fk, Sk, bk] = rk.pos, Pk = Dk.get(fk, Sk, bk), [mk, Mk, Kk] = [kk * Uk.g.oU, ek * Uk.g.oU, ik * Uk.g.oU];
+           const [wC, bC, nC] = fC.pos, oC = QC.get(wC, bC, nC), [qC, FC, WC] = [CC * gC.f.Ig, zC * gC.f.Ig, ZC * gC.f.Ig];
```

#### 1297. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10175` → after: `L10233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10233) · [Before (L10175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10175)

```diff
-         null === ik && (console.error(new Error(`No lifeform type found for lifeformId: ${kk}, defaulting to player eye height`).stack), ik = "Player");
+         null === ZC && (console.error(new Error(`No lifeform type found for lifeformId: ${CC}, defaulting to player eye height`).stack), ZC = "Player");
```

#### 1298. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10177-L10178` → after: `L10235-L10236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10235-L10236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10235-L10236) · [Before (L10177-L10178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10177-L10178)

```diff
-           fk = null !== (ek = null === Dk || void 0 === Dk ? void 0 : Dk[1]) && void 0 !== ek ? ek : 0,
-           Sk = this.Lx.mY.eek(kk);
+           wC = null !== (zC = null === QC || void 0 === QC ? void 0 : QC[1]) && void 0 !== zC ? zC : 0,
+           bC = this.MN.JR.MzC(CC);
```

#### 1299. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10180` → after: `L10238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10238) · [Before (L10180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10180)

```diff
-         "sitting" === (null === Sk || void 0 === Sk ? void 0 : Sk.pose) ? bk = Uk.g.sittingEyeHeightRatio: !0 === (null === Sk || void 0 === Sk ? void 0 : Sk.crouching) && (bk = Uk.g.crouchingEyeHeightRatio);
+         "sitting" === (null === bC || void 0 === bC ? void 0 : bC.pose) ? nC = gC.f.sittingEyeHeightRatio: !0 === (null === bC || void 0 === bC ? void 0 : bC.crouching) && (nC = gC.f.crouchingEyeHeightRatio);
```

#### 1300. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10183` → after: `L10241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10241) · [Before (L10183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10183)

```diff
-         } = (0, FK.e)(ik), Pk = fk + rk * this.WG(kk) * bk;
+         } = (0, cW.e)(ZC), oC = wC + fC * this.qB(CC) * nC;
```

#### 1301. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10201-L10202` → after: `L10259-L10260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10259-L10260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10259-L10260) · [Before (L10201-L10202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10201-L10202)

```diff
-       Zkk(kk, ek) {
-         return pk().subtract(null !== ek && void 0 !== ek ? ek : pk().create(), kk, this.Lx.Xx)
+       wzC(CC, zC) {
+         return GC().subtract(null !== zC && void 0 !== zC ? zC : GC().create(), CC, this.MN.YN)
```

#### 1302. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10205` → after: `L10263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10263) · [Before (L10205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10205)

```diff
-         return pk().add(null !== ek && void 0 !== ek ? ek : pk().create(), kk, this.Lx.Xx)
+         return GC().add(null !== zC && void 0 !== zC ? zC : GC().create(), CC, this.MN.YN)
```

#### 1303. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10215` → after: `L10273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10273) · [Before (L10215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10215)

```diff
-         this.qT(kk, ek, ik) && (null === (fk = (Sk = this.callbacks).justBeforeBlockAdded) || void 0 === fk || fk.call(Sk, kk, ek, ik, Dk), "Bookshelf" === this.getMetaInfo(Dk).rootName && void 0 === (null === (bk = this.blockDataOwner.getBlockData(kk, ek, ik)) || void 0 === bk | … [truncated]
+         this.Gy(CC, zC, ZC) && (null === (wC = (bC = this.callbacks).justBeforeBlockAdded) || void 0 === wC || wC.call(bC, CC, zC, ZC, QC), "Bookshelf" === this.getMetaInfo(QC).rootName && void 0 === (null === (nC = this.blockDataOwner.getBlockData(CC, zC, ZC)) || void 0 === nC | … [truncated]
```

#### 1304. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10226` → after: `L10284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10284) · [Before (L10226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10226)

```diff
-         const Dk = this.Lx.mY.vkk(kk);
+         const QC = this.MN.JR.yCC(CC);
```

#### 1305. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10228-L10229` → after: `L10286-L10287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10286-L10287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10286-L10287) · [Before (L10228-L10229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10228-L10229)

```diff
-         const fk = this.Lx.mY.jW(kk);
-         fk.Cw[0] = 0, fk.Cw[2] = 0, ik && (fk.Cw[1] > 0 && (fk.Cw[1] = 0), fk.XE[1] > 0 && (fk.XE[1] = 0), this.Lx.mY.eek(kk).hitInPrevTick = !0);
+         const wC = this.MN.JR.eT(CC);
+         wC.Np[0] = 0, wC.Np[2] = 0, ZC && (wC.Np[1] > 0 && (wC.Np[1] = 0), wC.Vr[1] > 0 && (wC.Vr[1] = 0), this.MN.JR.MzC(CC).hitInPrevTick = !0);
```

#### 1306. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10232` → after: `L10290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10290) · [Before (L10232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10232)

```diff
-         } = Uk.g;
+         } = gC.f;
```

#### 1307. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10235` → after: `L10293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10293) · [Before (L10235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10235)

```diff
-       Dek(kk) {
+       SzC(CC) {
```

#### 1308. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10237` → after: `L10295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10295) · [Before (L10237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10237)

```diff
-         return null === (ek = this.Lx.mY.iek(kk)) || void 0 === ek ? void 0 : ek.inventory
+         return null === (zC = this.MN.JR.gzC(CC)) || void 0 === zC ? void 0 : zC.inventory
```

#### 1309. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10251-L10252` → after: `L10309-L10310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10309-L10310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10309-L10310) · [Before (L10251-L10252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10251-L10252)

```diff
-               const mk = this.Fy(rk[0], rk[1], rk[2]);
-               this.Lx.dn.pT(mk) && (Dk = Pk, fk = mk)
+               const qC = this.rG(fC[0], fC[1], fC[2]);
+               this.MN.qM.Sy(qC) && (QC = oC, wC = qC)
```

#### 1310. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10257` → after: `L10315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10315) · [Before (L10257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10257)

```diff
-         return (0, rk.Ad)(this.getPlayerRanks(kk), ek)
+         return (0, fC.xd)(this.getPlayerRanks(CC), zC)
```

#### 1311. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10260` → after: `L10318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10318) · [Before (L10260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10260)

```diff
-         return (0, rk.Cd)(this.getPlayerRanks(kk), ek)
+         return (0, fC.Ad)(this.getPlayerRanks(CC), zC)
```

#### 1312. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10263-L10264` → after: `L10321-L10322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10321-L10322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10321-L10322) · [Before (L10263-L10264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10263-L10264)

```diff
-         const rk = null !== Dk && void 0 !== Dk ? Dk : this.Fy(kk, ek, ik),
-           Pk = this.Lx.dn.Vn(rk);
+         const fC = null !== QC && void 0 !== QC ? QC : this.rG(CC, zC, ZC),
+           oC = this.MN.qM.FM(fC);
```

#### 1313. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10268-L10269` → after: `L10326-L10327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10326-L10327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10326-L10327) · [Before (L10268-L10269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10268-L10269)

```diff
-         switch ((0, Ce.gb)(ek, Dk), (0, Ce.gb)(ek, fk), ik) {
-           case sK.s.CAN_WALK_THROUGH:
+         switch ((0, xz.mb)(zC, QC), (0, xz.mb)(zC, wC), ZC) {
+           case EW.t.CAN_WALK_THROUGH:
```

#### 1314. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10272` → after: `L10330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10330) · [Before (L10272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10272)

```diff
-           case sK.s.CANT_WALK_THROUGH:
+           case EW.t.CANT_WALK_THROUGH:
```

#### 1315. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10275` → after: `L10333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10333) · [Before (L10275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10275)

```diff
-           case sK.s.DEFAULT_WALK_THROUGH:
+           case EW.t.DEFAULT_WALK_THROUGH:
```

#### 1316. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10284-L10285` → after: `L10342-L10343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10342-L10343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10342-L10343) · [Before (L10284-L10285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10284-L10285)

```diff
-         const rk = Mk.g[this.Fy(ek, ik - 1, Dk)];
-         !(0, mK.z)(bk) && (0, mK.z)(rk) && (Sk = [ek, ik - 1, Dk], bk = rk);
+         const fC = FC.g[this.rG(zC, ZC - 1, QC)];
+         !(0, PW.A)(nC) && (0, PW.A)(fC) && (bC = [zC, ZC - 1, QC], nC = fC);
```

#### 1317. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10290` → after: `L10348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10348) · [Before (L10290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10290)

```diff
-         } = bk.meta, [xk, , nk] = this.getEntityPos(kk), Uk = Kk ? mk : (0, mK.q)(mk, xk - (Sk[0] + .5), nk - (Sk[2] + .5));
+         } = nC.meta, [NC, , MC] = this.getEntityPos(CC), gC = WC ? qC : (0, PW.v)(qC, NC - (bC[0] + .5), MC - (bC[2] + .5));
```

#### 1318. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10293` → after: `L10351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10351) · [Before (L10293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10293)

```diff
-           toRootId: (0, Mk.h)((0, mK.m)(Pk, Uk, !Kk)),
+           toRootId: (0, FC.k)((0, PW.n)(oC, gC, !WC)),
```

#### 1319. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10303` → after: `L10361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10361) · [Before (L10303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10303)

```diff
-         if (bk in rK.e) {
+         if (nC in SW.b) {
```

#### 1320. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10309` → after: `L10367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10367) · [Before (L10309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10309)

```diff
-           } = rK.e[bk];
+           } = SW.b[nC];
```

#### 1321. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10319` → after: `L10377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10377) · [Before (L10319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10319)

```diff
-           toRootId: (0, Mk.h)(xk),
+           toRootId: (0, FC.k)(NC),
```

#### 1322. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10324` → after: `L10382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10382) · [Before (L10324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10324)

```diff
-     var ZK = ik(37805);
+     var zN = ZC(38042);
```

#### 1323. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10338` → after: `L10396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10396) · [Before (L10338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10338)

```diff
-         this.changedCells.set(`${kk},${ek},${ik}`, [kk, ek, ik]), this.redrawQueued || (this.redrawQueued = !0, queueMicrotask((() => {
+         this.changedCells.set(`${CC},${zC},${ZC}`, [CC, zC, ZC]), this.redrawQueued || (this.redrawQueued = !0, queueMicrotask((() => {
```

#### 1324. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10343` → after: `L10401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10401) · [Before (L10343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10343)

```diff
-         const Dk = `${kk},${ek},${ik}`,
+         const QC = `${CC},${zC},${ZC}`,
```

#### 1325. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10352` → after: `L10410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10410) · [Before (L10352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10352)

```diff
-           }] of this.drawnText)(0, Ek.O)(bk).join() === Dk && (this.drawnText.delete(Sk), this.changed(...rk))
+           }] of this.drawnText)(0, XC.X)(nC).join() === QC && (this.drawnText.delete(bC), this.changed(...fC))
```

#### 1326. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10372` → after: `L10430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10430) · [Before (L10372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10372)

```diff
-           const ik = (0, ZK.e)(kk, ek, bk[0], bk[1], bk[2]);
+           const ZC = (0, zN.d)(CC, zC, nC[0], nC[1], nC[2]);
```

#### 1327. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10375` → after: `L10433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10433) · [Before (L10375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10375)

```diff
-           if ((0, ZK.h)(Dk)) {
+           if ((0, zN.g)(QC)) {
```

#### 1328. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10380` → after: `L10438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10438) · [Before (L10380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10380)

```diff
-             this.bloxd.client.meshCreator.addNoticeboardText(ik.rect, kk.text, null !== (Sk = kk.textSize) && void 0 !== Sk ? Sk : 0), this.drawnText.set(ik.rect.anchor.join(), {
+             this.bloxd.client.meshCreator.addNoticeboardText(ZC.rect, CC.text, null !== (bC = CC.textSize) && void 0 !== bC ? bC : 0), this.drawnText.set(ZC.rect.anchor.join(), {
```

#### 1329. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10388-L10389` → after: `L10446-L10447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10446-L10447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10446-L10447) · [Before (L10388-L10389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10388-L10389)

```diff
-         const Dk = this.bloxd.Fy(...kk);
-         if (!(0, ZK.i)(Dk) || ek.has(kk.join())) return;
+         const QC = this.bloxd.rG(...CC);
+         if (!(0, zN.k)(QC) || zC.has(CC.join())) return;
```

#### 1330. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10396` → after: `L10454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10454) · [Before (L10396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10396)

```diff
-         for (; Pk.length > 0 && ik.length - mk < ZK.k;) {
+         for (; oC.length > 0 && ZC.length - qC < zN.m;) {
```

#### 1331. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10404` → after: `L10462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10462) · [Before (L10404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10404)

```diff
-             if (!this.bloxd.qT(...rk)) {
+             if (!this.bloxd.Gy(...fC)) {
```

#### 1332. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10408` → after: `L10466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10466) · [Before (L10408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10408)

```diff
-             const xk = null === (Kk = Mk.g[this.bloxd.Fy(...rk)]) || void 0 === Kk ? void 0 : Kk.meta;
+             const NC = null === (WC = FC.g[this.bloxd.rG(...fC)]) || void 0 === WC ? void 0 : WC.meta;
```

#### 1333. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10415-L10416` → after: `L10473-L10474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10473-L10474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10473-L10474) · [Before (L10415-L10416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10415-L10416)

```diff
-         const Dk = (0, Ek.O)(kk).join(),
-           fk = null !== (ik = this.waitingOnChunk.get(Dk)) && void 0 !== ik ? ik : new Map;
+         const QC = (0, XC.X)(CC).join(),
+           wC = null !== (ZC = this.waitingOnChunk.get(QC)) && void 0 !== ZC ? ZC : new Map;
```

#### 1334. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10420-L10425` → after: `L10478-L10483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10478-L10483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10478-L10483) · [Before (L10420-L10425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10420-L10425)

```diff
-     var GK = ik(38595),
-       NK = ik(36341),
-       RK = ik(38503),
-       JK = ik(1248),
-       kx = ik(1895),
-       ex = ik(36391);
+     var wN = ZC(38850),
+       bN = ZC(36641),
+       nN = ZC(38741),
+       fN = ZC(1211),
+       oN = ZC(1843),
+       qN = ZC(36685);
```

#### 1335. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10431` → after: `L10489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10489) · [Before (L10431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10431)

```diff
-             this.client.meshCreator.removeBoardsInChunk(kk, ek, ik), we.b.removeInChunk(kk, ek, ik)
+             this.client.meshCreator.removeBoardsInChunk(CC, zC, ZC), Sz.c.removeInChunk(CC, zC, ZC)
```

#### 1336. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10434` → after: `L10492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10492) · [Before (L10434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10434)

```diff
-             (0, RK.hidingMeshesChunkAdded)(this.Lx, kk, ek, ik), this.client.gameRecorder.onChunkAdded(kk, ek, ik, Dk), this.noticeboardTextRenderer.chunkAdded(kk, ek, ik)
+             (0, nN.hidingMeshesChunkAdded)(this.MN, CC, zC, ZC), this.client.gameRecorder.onChunkAdded(CC, zC, ZC, QC), this.noticeboardTextRenderer.chunkAdded(CC, zC, ZC)
```

#### 1337. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10437` → after: `L10495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10495) · [Before (L10437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10437)

```diff
-             "Board" === this.getMetaInfo(Dk).rootName ? this.client.meshCreator.addBoard(kk, ek, ik, Dk) : (0, ZK.i)(Dk) && this.noticeboardTextRenderer.changed(kk, ek, ik), 0 === Dk ? we.b.removeIfUnconfirmed(kk, ek, ik) : we.b.removeOnceBlockLanded(kk, ek, ik)
+             "Board" === this.getMetaInfo(QC).rootName ? this.client.meshCreator.addBoard(CC, zC, ZC, QC) : (0, zN.k)(QC) && this.noticeboardTextRenderer.changed(CC, zC, ZC), 0 === QC ? Sz.c.removeIfUnconfirmed(CC, zC, ZC) : Sz.c.removeOnceBlockLanded(CC, zC, ZC)
```

#### 1338. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10440-L10441` → after: `L10498-L10499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10498-L10499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10498-L10499) · [Before (L10440-L10441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10440-L10441)

```diff
-             wk.j.tm("EffectUpdate", {
-               ee: kk,
+             pC.o.bp("EffectUpdate", {
+               gQ: CC,
```

#### 1339. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10449` → after: `L10507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10507) · [Before (L10449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10449)

```diff
-         }), this.Lx = kk, this.client = ek, this.hideNameSeedSub = null, this.noticeboardTextRenderer = new gK(this), this.recentChunkEdits = new GK.e, this.applyingServerBlocks = !1, this.riddenVehicleEId = null, this.appliedPositionOffset = null, this.hideNameSeedSub = wk.j.sub … [truncated]
+         }), this.MN = CC, this.client = zC, this.hideNameSeedSub = null, this.noticeboardTextRenderer = new QN(this), this.recentChunkEdits = new wN.d, this.applyingServerBlocks = !1, this.riddenVehicleEId = null, this.appliedPositionOffset = null, this.hideNameSeedSub = pC.o.sub … [truncated]
```

#### 1340. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10456-L10457` → after: `L10514-L10515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10514-L10515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10514-L10515) · [Before (L10456-L10457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10456-L10457)

```diff
-           this.hideNameSeedSub && (wk.j.unsubscribe(this.hideNameSeedSub), this.hideNameSeedSub = null), kx.c.clear()
-         })), (0, ex.d)(CK), (0, Hk.j)((kk => {
+           this.hideNameSeedSub && (pC.o.unsubscribe(this.hideNameSeedSub), this.hideNameSeedSub = null), oN.d.clear()
+         })), (0, qN.e)(dW), (0, SC.f)((CC => {
```

#### 1341. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10459-L10460` → after: `L10517-L10518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10517-L10518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10517-L10518) · [Before (L10459-L10460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10459-L10460)

```diff
-           const ik = nK.q[kk];
-           return null !== (ek = null === ik || void 0 === ik ? void 0 : ik.itemTexture) && void 0 !== ek ? ek : null === ik || void 0 === ik ? void 0 : ik.textureInfo
+           const ZC = xW.m[CC];
+           return null !== (zC = null === ZC || void 0 === ZC ? void 0 : ZC.itemTexture) && void 0 !== zC ? zC : null === ZC || void 0 === ZC ? void 0 : ZC.textureInfo
```

#### 1342. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10464` → after: `L10522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10522) · [Before (L10464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10464)

```diff
-         if ((0, ZK.i)(kk)) return !0;
+         if ((0, zN.k)(CC)) return !0;
```

#### 1343. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10472-L10473` → after: `L10530-L10531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10530-L10531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10530-L10531) · [Before (L10472-L10473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10472-L10473)

```diff
-         const Sk = this.Fy(kk, ek, ik);
-         super.setBlockNoMulti(kk, ek, ik, Dk, fk), ((0, ZK.i)(Sk) || (0, ZK.i)(Dk)) && this.noticeboardTextRenderer.changed(kk, ek, ik)
+         const bC = this.rG(CC, zC, ZC);
+         super.setBlockNoMulti(CC, zC, ZC, QC, wC), ((0, zN.k)(bC) || (0, zN.k)(QC)) && this.noticeboardTextRenderer.changed(CC, zC, ZC)
```

#### 1344. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10476` → after: `L10534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10534) · [Before (L10476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10476)

```diff
-         this.qT(kk, ek, ik) && (this.Lx.RV(fk, kk, ek, ik), this.client.gameRecorder.onBlockPlaced(kk, ek, ik, Dk, fk), this.applyingServerBlocks || this.recentChunkEdits.noteEdit(kk, ek, ik))
+         this.Gy(CC, zC, ZC) && (this.MN.TY(wC, CC, zC, ZC), this.client.gameRecorder.onBlockPlaced(CC, zC, ZC, QC, wC), this.applyingServerBlocks || this.recentChunkEdits.noteEdit(CC, zC, ZC))
```

#### 1345. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10490` → after: `L10548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10548) · [Before (L10490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10490)

```diff
-         return Ok.h.itemsClient[kk]
+         return yC.g.itemsClient[CC]
```

#### 1346. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10498-L10501` → after: `L10556-L10559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10556-L10559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10556-L10559) · [Before (L10498-L10501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10498-L10501)

```diff
-         const Mk = this.Lx.mY.jW(kk);
-         if (Mk.Or = Sk.Or, Mk.fluidDrag = Sk.fluidDrag, Mk.fluidDragHoriz = Sk.fluidDragHorizontal, Mk.fluidDragVert = Sk.fluidDragVertical, Mk.gravityMultiplier = Sk.gravityMultiplier, Mk.uE = Sk.canAutoStep, fk && this.Lx.mY.eek(kk).setPose(Sk.pose, bk), null === (mk = this.Lx. … [truncated]
-           const kk = this.Lx.mY.vkk(this.Lx.Qq);
-           kk ? kk.physicsState = ek : console.error("No movement component found for player entity")
+         const FC = this.MN.JR.eT(CC);
+         if (FC.Mq = bC.Mq, FC.fluidDrag = bC.fluidDrag, FC.fluidDragHoriz = bC.fluidDragHorizontal, FC.fluidDragVert = bC.fluidDragVertical, FC.gravityMultiplier = bC.gravityMultiplier, FC.Tu = bC.canAutoStep, wC && this.MN.JR.MzC(CC).setPose(bC.pose, nC), null === (qC = this.MN. … [truncated]
+           const CC = this.MN.JR.yCC(this.MN.qE);
+           CC ? CC.physicsState = zC : console.error("No movement component found for player entity")
```

#### 1347. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10506` → after: `L10564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10564) · [Before (L10506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10506)

```diff
-           duration: null !== (Kk = Sk.effect.duration) && void 0 !== Kk ? Kk : null,
+           duration: null !== (WC = bC.effect.duration) && void 0 !== WC ? WC : null,
```

#### 1348. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10517` → after: `L10575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10575) · [Before (L10517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10517)

```diff
-         const Dk = this.Lx.mY.vkk(this.Lx.Qq),
+         const QC = this.MN.JR.yCC(this.MN.qE),
```

#### 1349. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10519-L10520` → after: `L10577-L10578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10577-L10578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10577-L10578) · [Before (L10519-L10520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10519-L10520)

```diff
-         Dk.physicsState.type !== dK.o.DEFAULT && Dk.physicsState.type !== ik.physicsState.type && this.updatePositionAndPhysics(this.Lx.Qq, {
-           type: dK.o.DEFAULT,
+         QC.physicsState.type !== lW.r.DEFAULT && QC.physicsState.type !== ZC.physicsState.type && this.updatePositionAndPhysics(this.MN.qE, {
+           type: lW.r.DEFAULT,
```

#### 1350. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10526` → after: `L10584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10584) · [Before (L10526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10526)

```diff
-         return console.assert(kk === this.Lx.Qq, "Should only get targeted block for local player"), null !== (ek = this.Lx.Lkk) && void 0 !== ek ? ek : this.Lx.camera.yN()
+         return console.assert(CC === this.MN.qE, "Should only get targeted block for local player"), null !== (zC = this.MN.ECC) && void 0 !== zC ? zC : this.MN.camera.yB()
```

#### 1351. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10530` → after: `L10588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10588) · [Before (L10530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10530)

```diff
-         return null !== (ek = null === (ik = this.Lx.mY.eek(kk)) || void 0 === ik ? void 0 : ik.meshOffset) && void 0 !== ek ? ek : null
+         return null !== (zC = null === (ZC = this.MN.JR.MzC(CC)) || void 0 === ZC ? void 0 : ZC.meshOffset) && void 0 !== zC ? zC : null
```

#### 1352. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10533` → after: `L10591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10591) · [Before (L10533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10533)

```diff
-         return this.Lx.Fy(kk, ek, ik)
+         return this.MN.rG(CC, zC, ZC)
```

#### 1353. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10536` → after: `L10594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10594) · [Before (L10536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10536)

```diff
-         return console.assert(kk === this.Lx.Qq || kk === this.Lx.ykk, "eId in client getClientPredictedOption must be local player"), this.Lx.bY[ek]
+         return console.assert(CC === this.MN.qE || CC === this.MN.mCC, "eId in client getClientPredictedOption must be local player"), this.MN.pR[zC]
```

#### 1354. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10539` → after: `L10597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10597) · [Before (L10539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10539)

```diff
-         return this.Lx.mY.vy(kk)
+         return this.MN.JR.yG(CC)
```

#### 1355. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10544-L10546` → after: `L10602-L10604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10602-L10604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10602-L10604) · [Before (L10544-L10546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10544-L10546)

```diff
-         if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) return null !== (fk = null === (Sk = (0, ur.getCaughtUpMeshRotation)(this.Lx, (0, ak.b)(kk))) || void 0 === Sk ? void 0 : Sk.renderRotation[1]) && void 0 !== fk ? fk : 0;
-         const bk = this.Lx.mY.getState((0, ak.b)(kk), "meshRotation");
-         return null !== (ek = null !== (ik = null === (Dk = this.client.getColyseusEntity(kk)) || void 0 === Dk ? void 0 : Dk.yRotation) && void 0 !== ik ? ik : null === bk || void 0 === bk ? void 0 : bk.serverSetRotation[1]) && void 0 !== ek ? ek : 0
+         if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) return null !== (wC = null === (bC = (0, uf.getCaughtUpMeshRotation)(this.MN, (0, uC.c)(CC))) || void 0 === bC ? void 0 : bC.renderRotation[1]) && void 0 !== wC ? wC : 0;
+         const nC = this.MN.JR.getState((0, uC.c)(CC), "meshRotation");
+         return null !== (zC = null !== (ZC = null === (QC = this.client.getColyseusEntity(CC)) || void 0 === QC ? void 0 : QC.yRotation) && void 0 !== ZC ? ZC : null === nC || void 0 === nC ? void 0 : nC.serverSetRotation[1]) && void 0 !== zC ? zC : 0
```

#### 1356. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10550` → after: `L10608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10608) · [Before (L10550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10550)

```diff
-         return kk !== this.Lx.Qq && kk !== this.Lx.ykk ? null !== (ek = null === (ik = this.Lx.mY.eek(kk)) || void 0 === ik ? void 0 : ik.ridingVehicleEId) && void 0 !== ek ? ek : null : this.riddenVehicleEId
+         return CC !== this.MN.qE && CC !== this.MN.mCC ? null !== (zC = null === (ZC = this.MN.JR.MzC(CC)) || void 0 === ZC ? void 0 : ZC.ridingVehicleEId) && void 0 !== zC ? zC : null : this.riddenVehicleEId
```

#### 1357. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10553` → after: `L10611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10611) · [Before (L10553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10553)

```diff
-         return this.riddenVehicleEId === kk ? [this.Lx.Qq] : []
+         return this.riddenVehicleEId === CC ? [this.MN.qE] : []
```

#### 1358. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10556` → after: `L10614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10614) · [Before (L10556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10556)

```diff
-         return kk !== this.Lx.Qq && kk !== this.Lx.ykk ? null : this.appliedPositionOffset
+         return CC !== this.MN.qE && CC !== this.MN.mCC ? null : this.appliedPositionOffset
```

#### 1359. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10560` → after: `L10618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10618) · [Before (L10560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10560)

```diff
-         null !== Sk && ik && (0, Nk.w)(ek.type) && (this.setVehicleSettingOverrides(Sk, null), this.riddenVehicleEId = null), ik && (this.appliedPositionOffset = null !== Dk && void 0 !== Dk ? Dk : null), super.updatePositionAndPhysics(kk, ek, ik, Dk, fk)
+         null !== bC && ZC && (0, BC.t)(zC.type) && (this.setVehicleSettingOverrides(bC, null), this.riddenVehicleEId = null), ZC && (this.appliedPositionOffset = null !== QC && void 0 !== QC ? QC : null), super.updatePositionAndPhysics(CC, zC, ZC, QC, wC)
```

#### 1360. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10566` → after: `L10624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10624) · [Before (L10566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10566)

```diff
-         return console.assert(kk === this.Lx.Qq || kk === this.Lx.ykk, "eId in client posSatisfiesModifyConstraints must be local player"), this.Lx.Ux.wkk(ek, ik, Dk)
+         return console.assert(CC === this.MN.qE || CC === this.MN.mCC, "eId in client posSatisfiesModifyConstraints must be local player"), this.MN.fN.KCC(zC, ZC, QC)
```

#### 1361. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10569` → after: `L10627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10627) · [Before (L10569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10569)

```diff
-         const kk = (0, JP.g)().ids();
+         const CC = (0, qq.e)().ids();
```

#### 1362. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10571` → after: `L10629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10629) · [Before (L10571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10571)

```diff
-         const ek = this.Lx.ykk;
+         const zC = this.MN.mCC;
```

#### 1363. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10576` → after: `L10634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10634) · [Before (L10576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10576)

```diff
-         return null !== (ek = super.getRawEntityName(kk)) && void 0 !== ek ? ek : (0, JP.g)().getName(kk)
+         return null !== (zC = super.getRawEntityName(CC)) && void 0 !== zC ? zC : (0, qq.e)().getName(CC)
```

#### 1364. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10580-L10581` → after: `L10638-L10639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10638-L10639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10638-L10639) · [Before (L10580-L10581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10580-L10581)

```diff
-         const ik = this.Lx.mY.Dek(this.Lx.Qq),
-           Dk = null !== (ek = null === ik || void 0 === ik ? void 0 : ik.getItemAtSelectedSlot()) && void 0 !== ek ? ek : null,
+         const ZC = this.MN.JR.SzC(this.MN.qE),
+           QC = null !== (zC = null === ZC || void 0 === ZC ? void 0 : ZC.getItemAtSelectedSlot()) && void 0 !== zC ? zC : null,
```

#### 1365. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10583-L10585` → after: `L10641-L10643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10641-L10643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10641-L10643) · [Before (L10583-L10585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10583-L10585)

```diff
-           Sk = this.Lx.mY.vkk(this.Lx.Qq);
-         Sk.gliderSpeedBonus = rk.e.getGlidingSpeedBonus(Dk);
-         const bk = (0, Nk.g)(fk);
+           bC = this.MN.JR.yCC(this.MN.qE);
+         bC.gliderSpeedBonus = fC.d.getGlidingSpeedBonus(QC);
+         const nC = (0, BC.f)(wC);
```

#### 1366. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10588-L10590` → after: `L10646-L10648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10646-L10648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10646-L10648) · [Before (L10588-L10590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10588-L10590)

```diff
-           if (Sk.physicsState.type === dK.o.SLEEPING) return;
-           Sk.physicsState.type !== dK.o.DEFAULT && Sk.physicsState.type !== bk.physicsState.type && this.updatePositionAndPhysics(this.Lx.Qq, {
-             type: dK.o.DEFAULT,
+           if (bC.physicsState.type === lW.r.SLEEPING) return;
+           bC.physicsState.type !== lW.r.DEFAULT && bC.physicsState.type !== nC.physicsState.type && this.updatePositionAndPhysics(this.MN.qE, {
+             type: lW.r.DEFAULT,
```

#### 1367. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10593-L10594` → after: `L10651-L10652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10651-L10652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10651-L10652) · [Before (L10593-L10594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10593-L10594)

```diff
-         } else(0, Nk.m)(Sk.physicsState.type) && this.updatePositionAndPhysics(this.Lx.Qq, {
-           type: dK.o.DEFAULT,
+         } else(0, BC.h)(bC.physicsState.type) && this.updatePositionAndPhysics(this.MN.qE, {
+           type: lW.r.DEFAULT,
```

#### 1368. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10604-L10605` → after: `L10662-L10663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10662-L10663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10662-L10663) · [Before (L10604-L10605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10604-L10605)

```diff
-         const fk = null !== (ik = (0, JP.h)(kk, "hideNameSeed")) && void 0 !== ik ? ik : null;
-         void 0 === Dk || Dk === ek && null !== fk || kx.c.delete(Dk), null !== fk && kx.c.set(ek, fk)
+         const wC = null !== (ZC = (0, qq.f)(CC, "hideNameSeed")) && void 0 !== ZC ? ZC : null;
+         void 0 === QC || QC === zC && null !== wC || oN.d.delete(QC), null !== wC && oN.d.set(zC, wC)
```

#### 1369. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10612-L10613` → after: `L10670-L10671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10670-L10671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/92.js#L10670-L10671) · [Before (L10612-L10613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/92.js#L10612-L10613)

```diff
-         const fk = null !== (ek = (0, JP.h)(kk, "hideNameSeed")) && void 0 !== ek ? ek : null;
-         return (0, JK.d)(Dk, ik, fk)
+         const wC = null !== (zC = (0, qq.f)(CC, "hideNameSeed")) && void 0 !== zC ? zC : null;
+         return (0, fN.b)(QC, ZC, wC)
```
