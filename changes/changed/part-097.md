# Changed — Bundle Modifications Report (Part 097 / 161)

- **Updated at**: `2026-11-27T02:05 JST`
- **Part**: `97 / 161` (**400** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 096](part-096.md) · [Part 098 →](part-098.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/88.js` (cwj32u.ae3e40c2 → gw4e3a.937868ec · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/88.js` (4670 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46)

#### 2132. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L15789-L15791` → after: `L15547-L15549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R15547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L15547-L15549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L15547-L15549) · [Before (L15789-L15791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L15789-L15791)

```diff
-         const LH = HH.pT.ILH(zH),
-           rH = null !== (lH = null === LH || void 0 === LH ? void 0 : LH.pose) && void 0 !== lH ? lH : "standing";
-         AH.setInput(hH.d.Crouching, null !== LH && void 0 !== LH && LH.crouching ? 1 : 0), AH.setInput(hH.d.Aiming, (0, QH.e)(HH, zH) ? 1 : 0), "standing" !== rH && (IH[fH++] = rH), null !== LH && void 0 !== LH && LH.crouching && (IH[fH++] = SH.e), null !== BH._aiState && (IH[fH+ … [truncated]
+         const GB = BB.DW.EGB(yB),
+           DB = null !== (IB = null === GB || void 0 === GB ? void 0 : GB.pose) && void 0 !== IB ? IB : "standing";
+         YB.setInput(oB.i.Crouching, null !== GB && void 0 !== GB && GB.crouching ? 1 : 0), YB.setInput(oB.i.Aiming, (0, qB.e)(BB, yB) ? 1 : 0), "standing" !== DB && (uB[mB++] = DB), null !== GB && void 0 !== GB && GB.crouching && (uB[mB++] = QB.c), null !== OB._aiState && (uB[mB+ … [truncated]
```

#### 2133. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L15799` → after: `L15557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R15557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L15557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L15557) · [Before (L15799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L15799)

```diff
-         return BH._sentHeadingLastFrame = LH, BH._catchingUp = !Number.isNaN(LH) && Math.abs(tH.d.computeShortestRotation(EH, LH)) > bH, void(BH._catchingUp && (BH._turnHeldSeconds = kH))
+         return OB._sentHeadingLastFrame = GB, OB._catchingUp = !Number.isNaN(GB) && Math.abs(jB.b.computeShortestRotation(MB, GB)) > fB, void(OB._catchingUp && (OB._turnHeldSeconds = kB))
```

#### 2134. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L15808` → after: `L15566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R15566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L15566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L15566) · [Before (L15808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L15808)

```diff
-         !Number.isNaN(SH) && Math.abs(tH.d.computeShortestRotation(SH, rH)) > hH ? BH._catchingUp = !0 : BH._catchingUp && Math.abs(tH.d.computeShortestRotation(LH, rH)) <= bH && (BH._catchingUp = !1);
+         !Number.isNaN(QB) && Math.abs(jB.b.computeShortestRotation(QB, DB)) > oB ? OB._catchingUp = !0 : OB._catchingUp && Math.abs(jB.b.computeShortestRotation(GB, DB)) <= fB && (OB._catchingUp = !1);
```

#### 2135. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L15816-L15817` → after: `L15574-L15575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R15574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L15574-L15575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L15574-L15575) · [Before (L15816-L15817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L15816-L15817)

```diff
-           HH.setInput(hH.d.GroundSpeed, BH), HH.setInput(hH.d.ForwardSpeed, LH), HH.setInput(hH.d.VerticalSpeed, AH), HH.setInput(hH.d.TurnRate, rH), HH.setInput(hH.d.OnGround, Math.abs(AH) < vH ? 1 : 0)
-         }(AH, KH / LH, eH / LH, GH / LH, NH / LH), BH._snapNext ? (BH._snapNext = !1, AH.markDiscontinuity()) : AH.addTravel(eH < PH * KH ? -KH : KH)
+           BB.setInput(oB.i.GroundSpeed, OB), BB.setInput(oB.i.ForwardSpeed, GB), BB.setInput(oB.i.VerticalSpeed, YB), BB.setInput(oB.i.TurnRate, DB), BB.setInput(oB.i.OnGround, Math.abs(YB) < WB ? 1 : 0)
+         }(YB, FB / GB, LB / GB, zB / GB, XB / GB), OB._snapNext ? (OB._snapNext = !1, YB.markDiscontinuity()) : YB.addTravel(LB < AB * FB ? -FB : FB)
```

#### 2136. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L15821-L15822` → after: `L15579-L15580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R15579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L15579-L15580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L15579-L15580) · [Before (L15821-L15822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L15821-L15822)

```diff
-       if (!BH._isVehicle || (0, XH.b)(HH, BH.pR)) return Number.NaN;
-       const LH = HH.pT.getState(BH.pR, "meshRotation");
+       if (!OB._isVehicle || (0, PB.c)(BB, OB.qL)) return Number.NaN;
+       const GB = BB.DW.getState(OB.qL, "meshRotation");
```

#### 2137. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L15826` → after: `L15584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R15584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L15584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L15584) · [Before (L15826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L15826)

```diff
-   38605: (HH, BH, LH) => {
+   38418: (BB, OB, GB) => {
```

#### 2138. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L15840` → after: `L15598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R15598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L15598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L15598) · [Before (L15840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L15840)

```diff
-     var AH = LH(330),
+     var YB = GB(363),
```

#### 2139. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L15842-L15848` → after: `L15600-L15606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R15600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L15600-L15606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L15600-L15606) · [Before (L15842-L15848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L15842-L15848)

```diff
-       SH = LH(38610),
-       hH = LH(38619),
-       tH = LH(176),
-       zH = LH(38623),
-       CH = LH(38229),
-       EH = LH(37952);
-     const XH = 1e3 / tH.g.serverTicksPerSecond,
+       QB = GB(38424),
+       oB = GB(38432),
+       jB = GB(192),
+       yB = GB(38440),
+       JB = GB(38055),
+       MB = GB(37769);
+     const PB = 1e3 / jB.f.serverTicksPerSecond,
```

#### 2140. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L15878` → after: `L15636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R15636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L15636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L15636) · [Before (L15878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L15878)

```diff
-       return AH > LH ? LH / AH : 1
+       return YB > GB ? GB / YB : 1
```

#### 2141. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L15944` → after: `L15702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R15702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L15702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L15702) · [Before (L15944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L15944)

```diff
-         const rH = HH.pT.getState(BH, "smoothToServerPos");
+         const DB = BB.DW.getState(OB, "smoothToServerPos");
```

#### 2142. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L15946` → after: `L15704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R15704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L15704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L15704) · [Before (L15946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L15946)

```diff
-         BH = null === (AH = HH.pT.GAH(BH)) || void 0 === AH ? void 0 : AH.Xu
+         OB = null === (YB = BB.DW.nYB(OB)) || void 0 === YB ? void 0 : YB.qp
```

#### 2143. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L15956` → after: `L15714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R15714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L15714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L15714) · [Before (L15956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L15956)

```diff
-       return !(null === HH || void 0 === HH || !HH.isEnabled()) && (!("xR" in HH) || HH.isVisible && (null === BH || (0, zH.g)(HH, BH)))
+       return !(null === BB || void 0 === BB || !BB.isEnabled()) && (!("SF" in BB) || BB.isVisible && (null === OB || (0, yB.g)(BB, OB)))
```

#### 2144. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L15961-L15963` → after: `L15719-L15721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R15719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L15719-L15721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L15719-L15721) · [Before (L15961-L15963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L15961-L15963)

```diff
-       const LH = BH.pR;
-       if (HH.pT.GAH(LH)) return;
-       const AH = HH.pT.A4(LH).S_,
+       const GB = OB.qL;
+       if (BB.DW.nYB(GB)) return;
+       const YB = BB.DW.f4(GB).Y1,
```

#### 2145. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L15967` → after: `L15725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R15725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L15725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L15725) · [Before (L15967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L15967)

```diff
-       HH.pT.setPosition(LH, bH(BH._skipped, BH._clock.ms, oH)), VH(BH), NH.clear(), RH(HH, LH, AH[0] - rH, AH[1] - SH, AH[2] - hH)
+       BB.DW.setPosition(GB, fB(OB._skipped, OB._clock.ms, KB)), nB(OB), XB.clear(), wB(BB, GB, YB[0] - DB, YB[1] - QB, YB[2] - oB)
```

#### 2146. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L15971-L15972` → after: `L15729-L15730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R15729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L15729-L15730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L15729-L15730) · [Before (L15971-L15972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L15971-L15972)

```diff
-       const AH = HH.pT.getState(BH, "smoothToServerPos");
-       return null !== AH && void 0 !== AH && AH._skipping && !HH.pT.GAH(BH) ? bH(AH._skipped, AH._clock.ms, LH) : (rH().copy(LH, HH.pT.hT(BH)), LH)
+       const YB = BB.DW.getState(OB, "smoothToServerPos");
+       return null !== YB && void 0 !== YB && YB._skipping && !BB.DW.nYB(OB) ? fB(YB._skipped, YB._clock.ms, GB) : (DB().copy(GB, BB.DW.pR(OB)), GB)
```

#### 2147. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L15976` → after: `L15734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R15734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L15734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L15734) · [Before (L15976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L15976)

```diff
-       return HH.pT.aBH(BH, "smoothToServerPos") ? qH(HH, BH, LH) : rH().add(LH, HH.pT.A4(BH).S_, HH.DG)
+       return BB.DW.YGB(OB, "smoothToServerPos") ? gB(BB, OB, GB) : DB().add(GB, BB.DW.f4(OB).Y1, BB.Tz)
```

#### 2148. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L15985-L15988` → after: `L15743-L15746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R15743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L15743-L15746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L15743-L15746) · [Before (L15985-L15988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L15985-L15988)

```diff
-         pT: tH
-       } = HH, zH = HH.mX.bR, EH = tH.A4(BH).S_, XH = tH.VLH(BH);
-       if (null !== XH && void 0 !== XH && XH.NAH) {
-         if (XH.NAH.RAH) {
+         DW: jB
+       } = BB, yB = BB.UP.kF, MB = jB.f4(OB).Y1, PB = jB.iGB(OB);
+       if (null !== PB && void 0 !== PB && PB.HYB) {
+         if (PB.HYB.vYB) {
```

#### 2149. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L15992` → after: `L15750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R15750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L15750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L15750) · [Before (L15992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L15992)

```diff
-           zH.setPosition(XH.kR, EH[0] + HH[0], EH[1] + HH[1], EH[2] + HH[2])
+           yB.setPosition(PB.uF, MB[0] + BB[0], MB[1] + BB[1], MB[2] + BB[2])
```

#### 2150. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L15998` → after: `L15756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R15756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L15756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L15756) · [Before (L15998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L15998)

```diff
-         (0, CH.p)(HH, HH.position.x + LH, HH.position.y + AH, HH.position.z + rH), HH.dLH()
+         (0, JB.s)(BB, BB.position.x + GB, BB.position.y + YB, BB.position.z + DB), BB.DYB()
```

#### 2151. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16000` → after: `L15758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R15758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L15758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L15758) · [Before (L16000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16000)

```diff
-       const GH = tH.getState(BH, tH.names.lX);
+       const zB = jB.getState(OB, jB.names.KP);
```

#### 2152. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16003-L16006` → after: `L15761-L15764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R15761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L15761-L15764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L15761-L15764) · [Before (L16003-L16006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16003-L16006)

```diff
-       YH && (0, CH.p)(YH, YH.position.x + LH, YH.position.y + AH, YH.position.z + rH);
-       for (const CH of tH.JR(tH.names.HV))
-         if (CH.Xu === BH) {
-           const BH = tH.A4(CH.pR).S_,
+       lB && (0, JB.s)(lB, lB.position.x + GB, lB.position.y + YB, lB.position.z + DB);
+       for (const JB of jB.lL(jB.names.vW))
+         if (JB.qp === OB) {
+           const OB = jB.f4(JB.qL).Y1,
```

#### 2153. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16010` → after: `L15768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R15768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L15768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L15768) · [Before (L16010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16010)

```diff
-           BH[0] += LH, BH[1] += AH, BH[2] += rH, RH(HH, CH.pR, BH[0] - SH, BH[1] - hH, BH[2] - zH)
+           OB[0] += GB, OB[1] += YB, OB[2] += DB, wB(BB, JB.qL, OB[0] - QB, OB[1] - oB, OB[2] - yB)
```

#### 2154. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16015-L16016` → after: `L15773-L15774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R15773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L15773-L15774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L15773-L15774) · [Before (L16015-L16016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16015-L16016)

```diff
-       const AH = HH.zLH,
-         rH = HH.S_,
+       const YB = BB.NGB,
+         DB = BB.Y1,
```

#### 2155. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16024-L16025` → after: `L15782-L15783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R15782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L15782-L15783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L15782-L15783) · [Before (L16024-L16025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16024-L16025)

```diff
-       const BH = HH.mX.bR,
-         LH = HH.pT.oLH(HH.pT.names.lX),
+       const OB = BB.UP.kF,
+         GB = BB.DW.wGB(BB.DW.names.KP),
```

#### 2156. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16030` → after: `L15788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R15788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L15788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L15788) · [Before (L16030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16030)

```diff
-       }, (() => new hH.d(0, 0, 0, 0)));
+       }, (() => new oB.c(0, 0, 0, 0)));
```

#### 2157. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16052-L16053` → after: `L15810-L15811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R15810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L15810-L15811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L15810-L15811) · [Before (L16052-L16053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16052-L16053)

```diff
-         const AH = HH.pT.VLH(LH);
-         return !!AH && (null !== AH.kR ? BH.has(AH.kR) && BH.getActuallyVisible(AH.kR) : cH(AH.mesh, CH))
+         const YB = BB.DW.iGB(GB);
+         return !!YB && (null !== YB.uF ? OB.has(YB.uF) && OB.getActuallyVisible(YB.uF) : iB(YB.mesh, JB))
```

#### 2158. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16059` → after: `L15817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R15817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L15817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L15817) · [Before (L16059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16059)

```diff
-           AH.add(BH), BH = null === (LH = HH.pT.GAH(BH)) || void 0 === LH ? void 0 : LH.Xu
+           YB.add(OB), OB = null === (GB = BB.DW.nYB(OB)) || void 0 === GB ? void 0 : GB.qp
```

#### 2159. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16067` → after: `L15825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R15825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L15825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L15825) · [Before (L16067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16067)

```diff
-           const LH = HH.mX.yN(),
+           const GB = BB.UP.JF(),
```

#### 2160. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16070-L16072` → after: `L15828-L15830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R15828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L15828-L15830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L15828-L15830) · [Before (L16070-L16072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16070-L16072)

```diff
-           CH = null, HH.mX.FAH() ? CH = null !== (hH = LH.frustumPlanes) && void 0 !== hH ? hH : null : null !== rH && (SH.e.GetPlanesToRef(rH.getTransformationMatrix(), zH), CH = zH), kH(null === (BH = HH.pT.GAH(HH.camera.Z6)) || void 0 === BH ? void 0 : BH.Xu);
-           for (const AH of HH.pT.JR(HH.pT.names.HV)) OH(AH.pR) && kH(AH.Xu);
-           for (const AH of HH.pT.JR("lineToEntity")) cH(AH._line, CH) && (kH(AH.pR), kH(AH._targetEId))
+           JB = null, BB.UP.tYB() ? JB = null !== (oB = GB.frustumPlanes) && void 0 !== oB ? oB : null : null !== DB && (QB.b.GetPlanesToRef(DB.getTransformationMatrix(), yB), JB = yB), kB(null === (OB = BB.DW.nYB(BB.camera.W4)) || void 0 === OB ? void 0 : OB.qp);
+           for (const YB of BB.DW.lL(BB.DW.names.vW)) UB(YB.qL) && kB(YB.qp);
+           for (const YB of BB.DW.lL("lineToEntity")) iB(YB._line, JB) && (kB(YB.qL), kB(YB._targetEId))
```

#### 2161. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16089` → after: `L15847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R15847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L15847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L15847) · [Before (L16089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16089)

```diff
-         aT: function(HH, BH) {
+         OW: function(BB, OB) {
```

#### 2162. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16092` → after: `L15850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R15850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L15850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L15850) · [Before (L16092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16092)

```diff
-         bq: function(HH, BH) {
+         Qm: function(BB, OB) {
```

#### 2163. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16095` → after: `L15853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R15853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L15853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L15853) · [Before (L16095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16095)

```diff
-         rU: function(BH, LH) {
+         oW: function(OB, GB) {
```

#### 2164. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16098` → after: `L15856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R15856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L15856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L15856) · [Before (L16098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16098)

```diff
-             SH = HH.DG;
+             QB = BB.Tz;
```

#### 2165. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16107` → after: `L15865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R15865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L15865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L15865) · [Before (L16107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16107)

```diff
-               AH._awakeIndex >= 0 || jH(HH.pT.A4(AH.pR), AH.serverPosition, LH) || VH(AH)
+               YB._awakeIndex >= 0 || EB(BB.DW.f4(YB.qL), YB.serverPosition, GB) || nB(YB)
```

#### 2166. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16114` → after: `L15872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R15872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L15872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L15872) · [Before (L16114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16114)

```diff
-               XH = HH.pT.A4(LH.pR);
+               PB = BB.DW.f4(GB.qL);
```

#### 2167. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16120-L16122` → after: `L15878-L15880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R15878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L15878-L15880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L15878-L15880) · [Before (L16120-L16122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16120-L16122)

```diff
-             const YH = HH.pT.VLH(LH.pR);
-             if (!YH || !(null !== (hH = null === (zH = YH.NAH) || void 0 === zH ? void 0 : zH.RAH) && void 0 !== hH ? hH : null === (CH = YH.mesh) || void 0 === CH ? void 0 : CH.isEnabled())) {
-               LH._skipping = !1, HH.pT.setPosition(LH.pR, EH);
+             const lB = BB.DW.iGB(GB.qL);
+             if (!lB || !(null !== (oB = null === (yB = lB.HYB) || void 0 === yB ? void 0 : yB.vYB) && void 0 !== oB ? oB : null === (JB = lB.mesh) || void 0 === JB ? void 0 : JB.isEnabled())) {
+               GB._skipping = !1, BB.DW.setPosition(GB.qL, MB);
```

#### 2168. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16125-L16126` → after: `L15883-L15884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R15883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L15883-L15884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L15883-L15884) · [Before (L16125-L16126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16125-L16126)

```diff
-             if (null !== YH.kR && oH(LH.pR, YH.kR)) {
-               mH(LH, XH.position, AH, BH), HH.pT.setPosition(LH.pR, EH);
+             if (null !== lB.uF && KB(GB.qL, lB.uF)) {
+               dB(GB, PB.position, YB, OB), BB.DW.setPosition(GB.qL, MB);
```

#### 2169. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16132` → after: `L15890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R15890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L15890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L15890) · [Before (L16132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16132)

```diff
-             (WH > 100 || WH < QH) && rH().copy(uH, EH), HH.pT.setPosition(LH.pR, uH)
+             (ZB > 100 || ZB < qB) && DB().copy(pB, MB), BB.DW.setPosition(GB.qL, pB)
```

#### 2170. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16138` → after: `L15896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R15896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L15896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L15896) · [Before (L16138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16138)

```diff
-   38596: (HH, BH, LH) => {
+   38411: (BB, OB, GB) => {
```

#### 2171. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16145-L16147` → after: `L15903-L15905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R15903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L15903-L15905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L15903-L15905) · [Before (L16145-L16147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16145-L16147)

```diff
-     var AH = LH(1962),
-       rH = LH(37952);
-     var SH = LH(38605);
+     var YB = GB(1998),
+       DB = GB(37769);
+     var QB = GB(38418);
```

#### 2172. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16156-L16157` → after: `L15914-L15915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R15914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L15914-L15915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L15914-L15915) · [Before (L16156-L16157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16156-L16157)

```diff
-           kR: null,
-           NAH: null,
+           uF: null,
+           HYB: null,
```

#### 2173. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16166` → after: `L15924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R15924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L15924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L15924) · [Before (L16166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16166)

```diff
-         aT: function(HH, BH) {
+         OW: function(BB, OB) {
```

#### 2174. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16169-L16170` → after: `L15927-L15928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R15927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L15927-L15928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L15927-L15928) · [Before (L16169-L16170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16169-L16170)

```diff
-         rU: function(BH, LH) {
-           for (const AH of LH) HH.pT.aBH(AH.pR, "humanoidMesh") || zH(HH, AH, BH), AH.NAH.RAH && ((0, rH.pausesOutOfView)(HH, AH.pR, AH.kR) ? AH._pausedDt += BH : YH(HH, AH, BH))
+         oW: function(OB, GB) {
+           for (const YB of GB) BB.DW.YGB(YB.qL, "humanoidMesh") || yB(BB, YB, OB), YB.HYB.vYB && ((0, DB.pausesOutOfView)(BB, YB.qL, YB.uF) ? YB._pausedDt += OB : lB(BB, YB, OB))
```

#### 2175. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16176` → after: `L15934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R15934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L15934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L15934) · [Before (L16176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16176)

```diff
-       const [AH, rH, hH] = (0, SH.getDrawnPosition)(HH, BH.pR, CH), tH = BH._drawnPosition;
+       const [YB, DB, oB] = (0, QB.getDrawnPosition)(BB, OB.qL, JB), jB = OB._drawnPosition;
```

#### 2176. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16188` → after: `L15946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R15946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L15946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L15946) · [Before (L16188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16188)

```diff
-       const LH = HH.pT.getState(BH, "updateWalkingState");
+       const GB = BB.DW.getState(OB, "updateWalkingState");
```

#### 2177. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16196-L16197` → after: `L15954-L15955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R15954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L15954-L15955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L15954-L15955) · [Before (L16196-L16197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16196-L16197)

```diff
-           const rH = BH.pR,
-             SH = HH.pT.getState(rH, "humanoidMesh");
+           const DB = OB.qL,
+             QB = BB.DW.getState(DB, "humanoidMesh");
```

#### 2178. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16200` → after: `L15958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R15958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L15958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L15958) · [Before (L16200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16200)

```diff
-             const BH = HH.pT.ILH(rH);
+             const OB = BB.DW.EGB(DB);
```

#### 2179. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16203-L16205` → after: `L15961-L15963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R15961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L15961-L15963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L15961-L15963) · [Before (L16203-L16205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16203-L16205)

```diff
-               const SH = null === (LH = HH.pT.GAH(BH)) || void 0 === LH ? void 0 : LH.Xu;
-               return null === (AH = null !== (rH = SH ? HH.pT.ILH(SH) : null) && void 0 !== rH ? rH : HH.pT.ILH(BH)) || void 0 === AH ? void 0 : AH.speed
-             }(HH, rH)) && void 0 !== hH ? hH : BH.speed, void(XH = null !== (tH = SH.maxWalkingAngleOverride) && void 0 !== tH ? tH : BH.crouching ? .5 : null)
+               const QB = null === (GB = BB.DW.nYB(OB)) || void 0 === GB ? void 0 : GB.qp;
+               return null === (YB = null !== (DB = QB ? BB.DW.EGB(QB) : null) && void 0 !== DB ? DB : BB.DW.EGB(OB)) || void 0 === YB ? void 0 : YB.speed
+             }(BB, DB)) && void 0 !== oB ? oB : OB.speed, void(PB = null !== (jB = QB.maxWalkingAngleOverride) && void 0 !== jB ? jB : OB.crouching ? .5 : null)
```

#### 2180. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16207` → after: `L15965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R15965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L15965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L15965) · [Before (L16207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16207)

```diff
-           EH = BH.drawnSpeed, XH = null !== (LH = null === (AH = HH.pT.getState(rH, "fourLeggedMesh")) || void 0 === AH ? void 0 : AH.maxWalkingAngleOverride) && void 0 !== LH ? LH : null
+           MB = OB.drawnSpeed, PB = null !== (GB = null === (YB = BB.DW.getState(DB, "fourLeggedMesh")) || void 0 === YB ? void 0 : YB.maxWalkingAngleOverride) && void 0 !== GB ? GB : null
```

#### 2181. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16214` → after: `L15972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R15972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L15972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L15972) · [Before (L16214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16214)

```diff
-       const tH = (SH ? AH : 1.3 * hH) * LH / (2 * BH.walkingLegSwingDuration);
+       const jB = (QB ? YB : 1.3 * oB) * GB / (2 * OB.walkingLegSwingDuration);
```

#### 2182. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16223` → after: `L15981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R15981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L15981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L15981) · [Before (L16223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16223)

```diff
-       return null !== BH ? BH : (0, AH.f)(.16 * (HH - hH) + .9, .9, 1.4)
+       return null !== OB ? OB : (0, YB.f)(.16 * (BB - oB) + .9, .9, 1.4)
```

#### 2183. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16231` → after: `L15989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R15989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L15989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L15989) · [Before (L16231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16231)

```diff
-   38545: (HH, BH, LH) => {
+   38362: (BB, OB, GB) => {
```

#### 2184. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16233-L16234` → after: `L15991-L15992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R15991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L15991-L15992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L15991-L15992) · [Before (L16233-L16234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16233-L16234)

```diff
-       b: () => tH,
-       f: () => hH
+       e: () => jB,
+       g: () => oB
```

#### 2185. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16236` → after: `L15994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R15994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L15994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L15994) · [Before (L16236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16236)

```diff
-     const AH = new(LH(37297).b)(new URL(LH.p + LH.u(55), LH.b), {
+     const YB = new(GB(37085).d)(new URL(GB.p + GB.u(55), GB.b), {
```

#### 2186. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16240-L16242` → after: `L15998-L16000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R15998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L15998-L16000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L15998-L16000) · [Before (L16240-L16242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16240-L16242)

```diff
-     var rH = LH(38551),
-       SH = LH(3119);
-     const hH = new rH.b((async () => {
+     var DB = GB(38364),
+       QB = GB(3150);
+     const oB = new DB.d((async () => {
```

#### 2187. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16260` → after: `L16018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16018) · [Before (L16260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16260)

```diff
-         const HH = await LH.e(231).then((() => LH(45003)));
+         const BB = await GB.e(231).then((() => GB(44661)));
```

#### 2188. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16274` → after: `L16032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16032) · [Before (L16274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16274)

```diff
-         HH instanceof ErrorEvent || (0, SH.e)("The world couldn't load. Refresh the page to keep playing.")
+         BB instanceof ErrorEvent || (0, QB.c)("The world couldn't load. Refresh the page to keep playing.")
```

#### 2189. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16279` → after: `L16037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16037) · [Before (L16279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16279)

```diff
-   38829: (HH, BH, LH) => {
+   38634: (BB, OB, GB) => {
```

#### 2190. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16283` → after: `L16040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16040) · [Before (L16283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16283)

```diff
-       g: () => tH,
+       f: () => oB,
```

#### 2191. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16285-L16287` → after: `L16042-L16045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16042-L16045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16042-L16045) · [Before (L16285-L16287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16285-L16287)

```diff
-       k: () => XH,
-       l: () => YH,
-       p: () => uH
+       m: () => WB,
+       q: () => PB,
+       u: () => lB,
+       v: () => pB
```

#### 2192. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16289` → after: `L16047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16047) · [Before (L16289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16289)

```diff
-     var AH = LH(9957);
+     var YB = GB(9962);
```

#### 2193. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16311` → after: `L16069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16069) · [Before (L16311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16311)

```diff
-         boxes: AH.n.map(rH),
+         boxes: YB.q.map(DB),
```

#### 2194. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16316` → after: `L16074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16074) · [Before (L16316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16316)

```diff
-         boxes: AH.u.map(rH),
+         boxes: YB.v.map(DB),
```

#### 2195. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16329-L16330` → after: `L16087-L16088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16087-L16088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16087-L16088) · [Before (L16329-L16330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16329-L16330)

```diff
-         inner: CH("innerStairs", AH.q.innerLeft),
-         outer: CH("outerStairs", AH.q.outerLeft)
+         inner: JB("innerStairs", YB.s.innerLeft),
+         outer: JB("outerStairs", YB.s.outerLeft)
```

#### 2196. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16333-L16334` → after: `L16091-L16092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16091-L16092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16091-L16092) · [Before (L16333-L16334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16333-L16334)

```diff
-         inner: CH("upsideDownInnerStairs", AH.v.innerLeft),
-         outer: CH("upsideDownOuterStairs", AH.v.outerLeft)
+         inner: JB("upsideDownInnerStairs", YB.z.innerLeft),
+         outer: JB("upsideDownOuterStairs", YB.z.outerLeft)
```

#### 2197. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16340` → after: `L16098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16098) · [Before (L16340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16340)

```diff
-           if (null === BH) return HH ? zH : tH;
+           if (null === OB) return BB ? yB : jB;
```

#### 2198. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16345` → after: `L16103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16103) · [Before (L16345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16345)

```diff
-       return 0 === rH ? AH : {
+       return 0 === DB ? YB : {
```

#### 2199. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16347` → after: `L16105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16105) · [Before (L16347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16347)

```diff
-         key: `${AH.key}|turn${rH}`,
+         key: `${YB.key}|turn${DB}`,
```

#### 2200. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16388` → after: `L16146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16146) · [Before (L16388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16388)

```diff
-         throw new Error(`Box face ${BH} has no axis for uv ${HH}`)
+         throw new Error(`Box face ${OB} has no axis for uv ${BB}`)
```

#### 2201. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16444` → after: `L16202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16202) · [Before (L16444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16444)

```diff
-   38453: (HH, BH, LH) => {
+   38280: (BB, OB, GB) => {
```

#### 2202. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16448` → after: `L16206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16206) · [Before (L16448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16448)

```diff
-     var AH = LH(330),
+     var YB = GB(363),
```

#### 2203. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16450` → after: `L16208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16208) · [Before (L16450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16450)

```diff
-       SH = LH(38459);
+       QB = GB(38282);
```

#### 2204. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16456` → after: `L16214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16214) · [Before (L16456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16456)

```diff
-       return CH.isCameraDetachedFromPlayer(HH) && null !== (BH = hH.get(HH)) && void 0 !== BH ? BH : null
+       return JB.isCameraDetachedFromPlayer(BB) && null !== (OB = oB.get(BB)) && void 0 !== OB ? OB : null
```

#### 2205. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16461` → after: `L16219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16219) · [Before (L16461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16461)

```diff
-         return !HH.pT.GAH(HH.camera.Z6)
+         return !BB.DW.nYB(BB.camera.W4)
```

#### 2206. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16468` → after: `L16226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16226) · [Before (L16468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16468)

```diff
-         const tH = HH.pT.GAH(HH.camera.Z6);
+         const jB = BB.DW.nYB(BB.camera.W4);
```

#### 2207. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16474` → after: `L16232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16232) · [Before (L16474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16474)

```diff
-           CH = HH.mX.N_().R_;
+           JB = BB.UP.p_().q_;
```

#### 2208. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16476-L16477` → after: `L16234-L16235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16234-L16235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16234-L16235) · [Before (L16476-L16477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16476-L16477)

```diff
-           followEntity: tH.Xu,
-           xAH: tH.xAH,
+           followEntity: jB.qp,
+           uYB: jB.uYB,
```

#### 2209. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16479` → after: `L16237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16237) · [Before (L16479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16479)

```diff
-           savedZoomDistance: HH.camera.W4,
+           savedZoomDistance: BB.camera.K4,
```

#### 2210. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16481` → after: `L16239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16239) · [Before (L16481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16481)

```diff
-           facingMode: null !== (LH = SH.facingMode) && void 0 !== LH ? LH : "frozen",
+           facingMode: null !== (GB = QB.facingMode) && void 0 !== GB ? GB : "frozen",
```

#### 2211. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16484-L16486` → after: `L16242-L16244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16242-L16244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16242-L16244) · [Before (L16484-L16486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16484-L16486)

```diff
-         }), HH.camera.W4 = 0, HH.camera.O4 = 0, CH[0] = 0, CH[1] = 0, HH.pT.ILH(HH.lF).heading = zH.heading, HH.pT.fn(HH.camera.Z6, HH.pT.names.HV);
-         const EH = null !== (rH = SH.position) && void 0 !== rH ? rH : HH.camera.Q_();
-         return HH.pT.setPosition(HH.camera.Z6, [EH[0], EH[1], EH[2]]), AH(HH), !0
+         }), BB.camera.K4 = 0, BB.camera.Z8 = 0, JB[0] = 0, JB[1] = 0, BB.DW.EGB(BB.EX).heading = yB.heading, BB.DW.dL(BB.camera.W4, BB.DW.names.vW);
+         const MB = null !== (DB = QB.position) && void 0 !== DB ? DB : BB.camera.R6();
+         return BB.DW.setPosition(BB.camera.W4, [MB[0], MB[1], MB[2]]), YB(BB), !0
```

#### 2212. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16491` → after: `L16249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16249) · [Before (L16491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16491)

```diff
-         null === (BH = HH.pT.yLH(HH.lF)) || void 0 === BH || BH.OEH()
+         null === (OB = BB.DW.MYB(BB.EX)) || void 0 === OB || OB.IMB()
```

#### 2213. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16501` → after: `L16259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16259) · [Before (L16501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16501)

```diff
-         return null !== (BH = null === (LH = zH(HH)) || void 0 === LH ? void 0 : LH.facing.heading) && void 0 !== BH ? BH : HH.camera.heading
+         return null !== (OB = null === (GB = yB(BB)) || void 0 === GB ? void 0 : GB.facing.heading) && void 0 !== OB ? OB : BB.camera.heading
```

#### 2214. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16506-L16507` → after: `L16264-L16265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16264-L16265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16264-L16265) · [Before (L16506-L16507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16506-L16507)

```diff
-         if (!LH) return rH().copy(BH, HH.camera.T_());
-         const AH = (0, SH.b)(LH.facing.heading, LH.facing.pitch);
+         if (!GB) return DB().copy(OB, BB.camera.B_());
+         const YB = (0, QB.c)(GB.facing.heading, GB.facing.pitch);
```

#### 2215. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16518-L16519` → after: `L16276-L16277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16276-L16277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16276-L16277) · [Before (L16518-L16519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16518-L16519)

```diff
-         HH.pT.yR(HH.camera.Z6, HH.pT.names.HV, {
-           Xu: LH.followEntity,
+         BB.DW.RL(BB.camera.W4, BB.DW.names.vW, {
+           qp: GB.followEntity,
```

#### 2216. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16521-L16523` → after: `L16279-L16281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16279-L16281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16279-L16281) · [Before (L16521-L16523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16521-L16523)

```diff
-           xAH: LH.xAH
-         }), HH.camera.W4 = LH.savedZoomDistance, HH.camera.O4 = LH.savedZoomDistance;
-         const rH = HH.mX.N_().R_;
+           uYB: GB.uYB
+         }), BB.camera.K4 = GB.savedZoomDistance, BB.camera.Z8 = GB.savedZoomDistance;
+         const DB = BB.UP.p_().q_;
```

#### 2217. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16527` → after: `L16285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16285) · [Before (L16527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16527)

```diff
-         return null !== (BH = null === (LH = zH(HH)) || void 0 === LH ? void 0 : LH.savedZoomDistance) && void 0 !== BH ? BH : 0
+         return null !== (OB = null === (GB = yB(BB)) || void 0 === GB ? void 0 : GB.savedZoomDistance) && void 0 !== OB ? OB : 0
```

#### 2218. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16530` → after: `L16288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16288) · [Before (L16530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16530)

```diff
-         return null !== (BH = null === (LH = zH(HH)) || void 0 === LH ? void 0 : LH.savedRigShift) && void 0 !== BH ? BH : tH
+         return null !== (OB = null === (GB = yB(BB)) || void 0 === GB ? void 0 : GB.savedRigShift) && void 0 !== OB ? OB : jB
```

#### 2219. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16533-L16534` → after: `L16291-L16292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16291-L16292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16291-L16292) · [Before (L16533-L16534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16533-L16534)

```diff
-           AH = LH && HH.pT.A4(LH.followEntity);
-         return !!AH && (LH.xAH ? LH.xAH(BH, !0, LH.followOffset) : rH().copy(BH, LH.followOffset), rH().add(BH, AH.S_, BH), !0)
+           YB = GB && BB.DW.f4(GB.followEntity);
+         return !!YB && (GB.uYB ? GB.uYB(OB, !0, GB.followOffset) : DB().copy(OB, GB.followOffset), DB().add(OB, YB.Y1, OB), !0)
```

#### 2220. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16543` → after: `L16301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16301) · [Before (L16543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16543)

```diff
-         return null !== (BH = null === (LH = zH(HH)) || void 0 === LH ? void 0 : LH.facing.pitch) && void 0 !== BH ? BH : HH.camera.pitch
+         return null !== (OB = null === (GB = yB(BB)) || void 0 === GB ? void 0 : GB.facing.pitch) && void 0 !== OB ? OB : BB.camera.pitch
```

#### 2221. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16547` → after: `L16305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16305) · [Before (L16547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16547)

```diff
-         return GH(HH) ? XH(HH, BH) : rH().copy(BH, HH.camera.T_())
+         return zB(BB) ? PB(BB, OB) : DB().copy(OB, BB.camera.B_())
```

#### 2222. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16556` → after: `L16314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16314) · [Before (L16556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16556)

```diff
-         BH(HH) ? HH.pT.setPosition(HH.camera.Z6, AH) : LH(HH, {
+         OB(BB) ? BB.DW.setPosition(BB.camera.W4, YB) : GB(BB, {
```

#### 2223. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16561` → after: `L16319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16319) · [Before (L16561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16561)

```diff
-         const zH = HH.pT.ILH(HH.lF);
+         const yB = BB.DW.EGB(BB.EX);
```

#### 2224. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16566` → after: `L16324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16324) · [Before (L16566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16566)

```diff
-   38626: (HH, BH, LH) => {
+   38442: (BB, OB, GB) => {
```

#### 2225. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16568-L16570` → after: `L16326-L16328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16326-L16328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16326-L16328) · [Before (L16568-L16570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16568-L16570)

```diff
-       d: () => XH,
-       g: () => zH,
-       h: () => CH
+       b: () => PB,
+       f: () => yB,
+       j: () => JB
```

#### 2226. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16572` → after: `L16330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16330) · [Before (L16572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16572)

```diff
-     var AH = LH(38635);
+     var YB = GB(38449);
```

#### 2227. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16581` → after: `L16339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16339) · [Before (L16581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16581)

```diff
-         EW: AH
+         lZ: YB
```

#### 2228. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16615` → after: `L16373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16373) · [Before (L16615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16615)

```diff
-       return (BH, LH, rH) => HH.cX.Ay(BH, LH, rH) ? "ground" : HH.cX.HHH(BH, LH, rH) ? "water" === (0, AH.c)(HH.cX.Ip(BH, LH, rH)) ? "ground" : "hazard" : "empty"
+       return (OB, GB, DB) => BB.mP.xH(OB, GB, DB) ? "ground" : BB.mP.Z5(OB, GB, DB) ? "water" === (0, YB.e)(BB.mP.sH(OB, GB, DB)) ? "ground" : "hazard" : "empty"
```

#### 2229. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16618` → after: `L16376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16376) · [Before (L16618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16618)

```diff
-   39308: (HH, BH, LH) => {
+   39099: (BB, OB, GB) => {
```

#### 2230. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16622-L16623` → after: `L16380-L16381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16380-L16381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16380-L16381) · [Before (L16622-L16623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16622-L16623)

```diff
-     var AH = LH(39114),
-       rH = LH(330),
+     var YB = GB(38894),
+       DB = GB(363),
```

#### 2231. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16625-L16633` → after: `L16383-L16391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16383-L16391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16383-L16391) · [Before (L16625-L16633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16625-L16633)

```diff
-       hH = LH(176),
-       tH = LH(39312),
-       zH = LH(39138),
-       CH = LH(37608),
-       EH = LH(37617),
-       XH = LH(4061),
-       GH = LH(4113),
-       YH = LH(609),
-       uH = LH(4617);
+       oB = GB(192),
+       jB = GB(39104),
+       yB = GB(38925),
+       JB = GB(37434),
+       MB = GB(37436),
+       PB = GB(4111),
+       zB = GB(4166),
+       lB = GB(633),
+       pB = GB(4642);
```

#### 2232. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16660` → after: `L16418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16418) · [Before (L16660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16660)

```diff
-           HH.playParticleEffect(BH, tH ? LH : null)
+           BB.playParticleEffect(OB, jB ? GB : null)
```

#### 2233. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16722-L16724` → after: `L16480-L16482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16480-L16482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16480-L16482) · [Before (L16722-L16724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16722-L16724)

```diff
-     var xH = LH(323),
-       vH = LH(614),
-       PH = LH(317);
+     var RB = GB(358),
+       WB = GB(635),
+       AB = GB(353);
```

#### 2234. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16751` → after: `L16509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16509) · [Before (L16751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16751)

```diff
-         jG: 2.5,
+         hz: 2.5,
```

#### 2235. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16901` → after: `L16659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16659) · [Before (L16901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16901)

```diff
-           jG: 0,
+           hz: 0,
```

#### 2236. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16919` → after: `L16677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16677) · [Before (L16919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16919)

```diff
-           jG: 0,
+           hz: 0,
```

#### 2237. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16939` → after: `L16697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16697) · [Before (L16939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16939)

```diff
-           jG: 0,
+           hz: 0,
```

#### 2238. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L16998` → after: `L16756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16756) · [Before (L16998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L16998)

```diff
-         ...Object.fromEntries(vH.w.map((HH => [(0, PH.dc)(HH), {
+         ...Object.fromEntries(WB.w.map((BB => [(0, AB.ic)(BB), {
```

#### 2239. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17118` → after: `L16876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16876) · [Before (L17118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17118)

```diff
-         ...Object.fromEntries(xH.f.map((HH => [HH, oH]))),
+         ...Object.fromEntries(RB.k.map((BB => [BB, KB]))),
```

#### 2240. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17123` → after: `L16881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16881) · [Before (L17123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17123)

```diff
-           jG: 0,
+           hz: 0,
```

#### 2241. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17132` → after: `L16890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16890) · [Before (L17132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17132)

```diff
-           jG: 0,
+           hz: 0,
```

#### 2242. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17158` → after: `L16916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16916) · [Before (L17158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17158)

```diff
-           jG: .05,
+           hz: .05,
```

#### 2243. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17174` → after: `L16932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16932) · [Before (L17174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17174)

```diff
-         this.bloxd = HH, this.eId = BH, this.bG = void 0, this.type = void 0, this.spawnTime = void 0, this.distToPlayerInterval = void 0, this.autoRemoveTimeout = void 0, this.bG = HH.bG, this.type = (0, AH.e)(LH).item, this.spawnTime = Date.now()
+         this.bloxd = BB, this.eId = OB, this.kz = void 0, this.type = void 0, this.spawnTime = void 0, this.distToPlayerInterval = void 0, this.autoRemoveTimeout = void 0, this.kz = BB.kz, this.type = (0, YB.i)(GB).item, this.spawnTime = Date.now()
```

#### 2244. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17178` → after: `L16936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16936) · [Before (L17178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17178)

```diff
-         this.bG.pT.deleteEntity(this.eId)
+         this.kz.DW.deleteEntity(this.eId)
```

#### 2245. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17185` → after: `L16943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16943) · [Before (L17185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17185)

```diff
-           bG: BH
+           kz: OB
```

#### 2246. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17187` → after: `L16945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16945) · [Before (L17187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17187)

```diff
-           pT: LH
+           DW: GB
```

#### 2247. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17192` → after: `L16950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16950) · [Before (L17192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17192)

```diff
-         LH.add([HH.x, HH.y, HH.z], rH, SH, null, null, !1, !1, this.eId), LH.yR(this.eId, LH.names.smoothToServerPos);
+         GB.add([BB.x, BB.y, BB.z], DB, QB, null, null, !1, !1, this.eId), GB.RL(this.eId, GB.names.smoothToServerPos);
```

#### 2248. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17195-L17198` → after: `L16953-L16956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16953-L16956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16953-L16956) · [Before (L17195-L17198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17195-L17198)

```diff
-         } = (0, AH.e)(HH.type);
-         if (null !== hH && AH.d.includes(this.type)) {
-           if (hH === BH.JBH) return;
-           const HH = BH.mF[BH.lF][hH];
+         } = (0, YB.i)(BB.type);
+         if (null !== oB && YB.e.includes(this.type)) {
+           if (oB === OB.QGB) return;
+           const BB = OB.FX[OB.EX][oB];
```

#### 2249. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17201` → after: `L16959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16959) · [Before (L17201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17201)

```diff
-         LH.yR(this.eId, "doOnFirstTick", {
+         GB.RL(this.eId, "doOnFirstTick", {
```

#### 2250. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17203` → after: `L16961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16961) · [Before (L17203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17203)

```diff
-             LH.yR(this.eId, "hidingMeshManager", {
+             GB.RL(this.eId, "hidingMeshManager", {
```

#### 2251. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17205` → after: `L16963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16963) · [Before (L17205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17205)

```diff
-                 LH.yR(this.eId, LH.names.mesh, {
+                 GB.RL(this.eId, GB.names.mesh, {
```

#### 2252. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17207` → after: `L16965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16965) · [Before (L17207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17207)

```diff
-                   EzH: !1
+                   AyB: !1
```

#### 2253. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17211` → after: `L16969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16969) · [Before (L17211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17211)

```diff
-                 LH.fn(this.eId, LH.names.mesh)
+                 GB.dL(this.eId, GB.names.mesh)
```

#### 2254. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17222` → after: `L16980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16980) · [Before (L17222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17222)

```diff
-           bG: AH
+           kz: YB
```

#### 2255. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17224-L17225` → after: `L16982-L16983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16982-L16983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16982-L16983) · [Before (L17224-L17225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17224-L17225)

```diff
-           pT: rH
-         } = AH, uH = AH.lF, xH = this.getSpawnPos(uH), vH = {
+           DW: DB
+         } = YB, pB = YB.EX, RB = this.getSpawnPos(pB), WB = {
```

#### 2256. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17231` → after: `L16989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16989) · [Before (L17231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17231)

```diff
-               } = IH[this.type], zH = rH.hT(this.eId), xH = this.bloxd.getClosestSolidBlock(zH), [vH, PH, TH] = zH;
+               } = uB[this.type], yB = DB.pR(this.eId), RB = this.bloxd.getClosestSolidBlock(yB), [WB, AB, VB] = yB;
```

#### 2257. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17235-L17238` → after: `L16993-L16996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16993-L16996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16993-L16996) · [Before (L17235-L17238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17235-L17238)

```diff
-                 return void(0, XH.sendColyMessage)(GH.Cg, {
-                   st: this.eId,
-                   TE: zH,
-                   UE: HH
+                 return void(0, PB.sendColyMessage)(zB.Og, {
+                   oy: this.eId,
+                   jy: yB,
+                   yy: BB
```

#### 2258. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17241` → after: `L16999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R16999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L16999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L16999) · [Before (L17241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17241)

```diff
-               const UH = null !== (HH = tH.type) && void 0 !== HH ? HH : QH.Boom;
+               const SB = null !== (BB = jB.type) && void 0 !== BB ? BB : qB.Boom;
```

#### 2259. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17243` → after: `L17001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17001) · [Before (L17243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17243)

```diff
-               const VH = rH.hT(uH),
+               const nB = DB.pR(pB),
```

#### 2260. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17248` → after: `L17006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17006) · [Before (L17248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17248)

```diff
-               SH().Ot(VH, OH) < bH + 1 && CH.c.play((0, EH.h)("cannonFire"), null !== (mH = null !== (oH = tH.volume) && void 0 !== oH ? oH : IH[this.type].volume) && void 0 !== mH ? mH : 1, OH, bH, kH).rate(.8 + .2 * Math.random());
+               QB().IM(nB, UB) < fB + 1 && JB.b.play((0, MB.f)("cannonFire"), null !== (dB = null !== (KB = jB.volume) && void 0 !== KB ? KB : uB[this.type].volume) && void 0 !== dB ? dB : 1, UB, fB, kB).rate(.8 + .2 * Math.random());
```

#### 2261. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17256` → after: `L17014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17014) · [Before (L17256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17256)

```diff
-                 const CH = HH.bloxd.isClient ? [...HH.pT.hT(BH)] : HH.room.api.hT(BH);
+                 const JB = BB.bloxd.isClient ? [...BB.DW.pR(OB)] : BB.room.api.pR(OB);
```

#### 2262. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17262` → after: `L17020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17020) · [Before (L17262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17262)

```diff
-                   const rH = HH.pT.xJ(BH);
+                   const DB = BB.DW.mC(OB);
```

#### 2263. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17264` → after: `L17022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17022) · [Before (L17264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17264)

```diff
-                   rH && (SH = rH.MG.vec[1] / 2);
+                   DB && (QB = DB.Rz.vec[1] / 2);
```

#### 2264. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17271` → after: `L17029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17029) · [Before (L17271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17271)

```diff
-                   return AH >= tH ? hH : SH + (AH - LH) / (tH - LH) * (hH - SH)
+                   return YB >= jB ? oB : QB + (YB - GB) / (jB - GB) * (oB - QB)
```

#### 2265. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17281-L17285` → after: `L17039-L17043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17039-L17043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17039-L17043) · [Before (L17281-L17285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17281-L17285)

```diff
-               }(this.bG, uH, "Player", UH, null !== (BH = null === (LH = tH.knockbackFactor) || void 0 === LH ? void 0 : LH.terrain) && void 0 !== BH ? BH : 1, 2 * tH.power, OH, tH.ignoreProjectiles);
-               SH().scale(lH, lH, 1 / hH.g.clientTicksPerSecond), rH.xJ(AH.lF).applyImpulse([lH[0], lH[1], lH[2]]), (0, XH.sendColyMessage)(GH.Cg, {
-                 st: this.eId,
-                 TE: zH,
-                 UE: lH
+               }(this.kz, pB, "Player", SB, null !== (OB = null === (GB = jB.knockbackFactor) || void 0 === GB ? void 0 : GB.terrain) && void 0 !== OB ? OB : 1, 2 * jB.power, UB, jB.ignoreProjectiles);
+               QB().scale(IB, IB, 1 / oB.f.clientTicksPerSecond), DB.mC(YB.EX).applyImpulse([IB[0], IB[1], IB[2]]), (0, PB.sendColyMessage)(zB.Og, {
+                 oy: this.eId,
+                 jy: yB,
+                 yy: IB
```

#### 2266. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17291` → after: `L17049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17049) · [Before (L17291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17291)

```diff
-           rH.yR(this.eId, "doOnFirstTick", {
+           DB.RL(this.eId, "doOnFirstTick", {
```

#### 2267. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17300-L17305` → after: `L17058-L17063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17058-L17063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17058-L17063) · [Before (L17300-L17305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17300-L17305)

```diff
-         this.eId = rH.add(xH, TH, UH, null, null, !0, !1).toString(), (0, XH.sendColyMessage)(GH.Dg, {
-             st: this.eId,
-             IE: this.type,
-             fE: HH,
-             Ch: this.bG.camera.Z2
-           }), CH.c.play((0, EH.h)("bow"), .6 * (null !== (BH = IH[this.type].volume) && void 0 !== BH ? BH : 1)).rate(.6 + .2 * Math.random()), rH.yR(this.eId, "doOnFirstTick", {
+         this.eId = DB.add(RB, VB, SB, null, null, !0, !1).toString(), (0, PB.sendColyMessage)(zB.Qg, {
+             oy: this.eId,
+             RJ: this.type,
+             WJ: BB,
+             YJ: this.kz.camera.J9
+           }), JB.b.play((0, MB.f)("bow"), .6 * (null !== (OB = uB[this.type].volume) && void 0 !== OB ? OB : 1)).rate(.6 + .2 * Math.random()), DB.RL(this.eId, "doOnFirstTick", {
```

#### 2268. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17307` → after: `L17065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17065) · [Before (L17307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17307)

```diff
-               rH.yR(this.eId, "hidingMeshManager", {
+               DB.RL(this.eId, "hidingMeshManager", {
```

#### 2269. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17309` → after: `L17067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17067) · [Before (L17309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17309)

```diff
-                   rH.yR(this.eId, rH.names.mesh, {
+                   DB.RL(this.eId, DB.names.mesh, {
```

#### 2270. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17311` → after: `L17069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17069) · [Before (L17311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17311)

```diff
-                     EzH: !0
+                     AyB: !0
```

#### 2271. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17315` → after: `L17073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17073) · [Before (L17315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17315)

```diff
-                   rH.fn(this.eId, rH.names.mesh)
+                   DB.dL(this.eId, DB.names.mesh)
```

#### 2272. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17323-L17324` → after: `L17081-L17082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17081-L17082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17081-L17082) · [Before (L17323-L17324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17323-L17324)

```diff
-             SH().sqrDist(rH.hT(this.eId), rH.hT(uH)) > 1e4 && ((0, XH.sendColyMessage)(GH.Hg, {
-               st: this.eId
+             QB().sqrDist(DB.pR(this.eId), DB.pR(pB)) > 1e4 && ((0, PB.sendColyMessage)(zB.Sg, {
+               oy: this.eId
```

#### 2273. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17327-L17328` → after: `L17085-L17086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17085-L17086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17085-L17086) · [Before (L17327-L17328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17327-L17328)

```diff
-             (0, XH.sendColyMessage)(GH.Hg, {
-               st: this.eId
+             (0, PB.sendColyMessage)(zB.Sg, {
+               oy: this.eId
```

#### 2274. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17330` → after: `L17088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17088) · [Before (L17330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17330)

```diff
-           }), null !== (LH = IH[this.type].autoRemoveAfterTime) && void 0 !== LH ? LH : 6e4, this.eId), rH.yR(this.eId, "collideTerrain", {
+           }), null !== (GB = uB[this.type].autoRemoveAfterTime) && void 0 !== GB ? GB : 6e4, this.eId), DB.RL(this.eId, "collideTerrain", {
```

#### 2275. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17333` → after: `L17091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17091) · [Before (L17333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17333)

```diff
-               (0, zH.vzH)(rH.getState(this.eId, "physics"), rH.A4(this.eId)), rH.lzH(this.eId, rH.A4(this.eId));
+               (0, yB.uyB)(DB.getState(this.eId, "physics"), DB.f4(this.eId)), DB.cyB(this.eId, DB.f4(this.eId));
```

#### 2276. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17335-L17336` → after: `L17093-L17094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17093-L17094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17093-L17094) · [Before (L17335-L17336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17335-L17336)

```diff
-                 AH = rH.xJ(this.eId);
-               SH().length(AH.EW) > .1 && LH && ((0, tH.d)(this.bG, this.eId), !rH.aBH(this.eId, "collideTerrain")) || (null === (HH = (BH = vH[this.type]).onHitTerrain) || void 0 === HH || HH.call(BH), LH && PH())
+                 YB = DB.mC(this.eId);
+               QB().length(YB.lZ) > .1 && GB && ((0, jB.g)(this.kz, this.eId), !DB.YGB(this.eId, "collideTerrain")) || (null === (BB = (OB = WB[this.type]).onHitTerrain) || void 0 === BB || BB.call(OB), GB && AB())
```

#### 2277. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17338` → after: `L17096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17096) · [Before (L17338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17338)

```diff
-           }), rH.yR(this.eId, "collideEntitiesProjectile", {
+           }), DB.RL(this.eId, "collideEntitiesProjectile", {
```

#### 2278. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17345-L17346` → after: `L17103-L17104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17103-L17104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17103-L17104) · [Before (L17345-L17346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17345-L17346)

```diff
-             const EH = HH.pT.xJ(BH),
-               XH = SH().copy(EH.EW, AH),
+             const MB = BB.DW.mC(OB),
+               PB = QB().copy(MB.lZ, YB),
```

#### 2279. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17348-L17349` → after: `L17106-L17107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17106-L17107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17106-L17107) · [Before (L17348-L17349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17348-L17349)

```diff
-             SH().normalize(XH, XH), SH().scale(XH, XH, GH.speed * zH), EH.gravityMultiplier = (null !== (rH = GH.gravityMult) && void 0 !== rH ? rH : 1) * CH, EH.rE = .02, EH.jG = (null !== (hH = GH.jG) && void 0 !== hH ? hH : .1) * EH.rE, EH.fluidDrag = null !== (tH = GH.fluidDr … [truncated]
-           }(this.bG, this.eId, this.type, this.bG.camera.Z2)
+             QB().normalize(PB, PB), QB().scale(PB, PB, zB.speed * yB), MB.gravityMultiplier = (null !== (DB = zB.gravityMult) && void 0 !== DB ? DB : 1) * JB, MB.Wy = .02, MB.hz = (null !== (oB = zB.hz) && void 0 !== oB ? oB : .1) * MB.Wy, MB.fluidDrag = null !== (jB = zB.fluidDr … [truncated]
+           }(this.kz, this.eId, this.type, this.kz.camera.J9)
```

#### 2280. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17353` → after: `L17111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17111) · [Before (L17353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17353)

```diff
-         if ("torso" === IH[this.type].spawnOffset) BH = SH().clone(this.bG.pT.hT(HH)), BH[1] += hH.g.iW / 2;
+         if ("torso" === uB[this.type].spawnOffset) OB = QB().clone(this.kz.DW.pR(BB)), OB[1] += oB.f.xZ / 2;
```

#### 2281. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17360-L17361` → after: `L17118-L17119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17118-L17119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17118-L17119) · [Before (L17360-L17361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17360-L17361)

```diff
-           width: null !== (HH = null !== (BH = null === (LH = IH[this.type]) || void 0 === LH ? void 0 : LH.collisionWidth) && void 0 !== BH ? BH : null === (AH = IH[this.type]) || void 0 === AH ? void 0 : AH.collisionHeight) && void 0 !== HH ? HH : .1,
-           height: null !== (rH = null !== (SH = null === (hH = IH[this.type]) || void 0 === hH ? void 0 : hH.collisionHeight) && void 0 !== SH ? SH : null === (tH = IH[this.type]) || void 0 === tH ? void 0 : tH.collisionWidth) && void 0 !== rH ? rH : .1
+           width: null !== (BB = null !== (OB = null === (GB = uB[this.type]) || void 0 === GB ? void 0 : GB.collisionWidth) && void 0 !== OB ? OB : null === (YB = uB[this.type]) || void 0 === YB ? void 0 : YB.collisionHeight) && void 0 !== BB ? BB : .1,
+           height: null !== (DB = null !== (QB = null === (oB = uB[this.type]) || void 0 === oB ? void 0 : oB.collisionHeight) && void 0 !== QB ? QB : null === (jB = uB[this.type]) || void 0 === jB ? void 0 : jB.collisionWidth) && void 0 !== DB ? DB : .1
```

#### 2282. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17366` → after: `L17124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17124) · [Before (L17366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17366)

```diff
-   38444: (HH, BH, LH) => {
+   38272: (BB, OB, GB) => {
```

#### 2283. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17368-L17371` → after: `L17126-L17129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17126-L17129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17126-L17129) · [Before (L17368-L17371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17368-L17371)

```diff
-       b: () => SH,
-       c: () => hH,
-       g: () => rH,
-       j: () => tH
+       e: () => QB,
+       i: () => oB,
+       l: () => DB,
+       n: () => jB
```

#### 2284. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17373` → after: `L17131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17131) · [Before (L17373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17373)

```diff
-     var AH = LH(3038);
+     var YB = GB(3088);
```

#### 2285. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17377-L17378` → after: `L17135-L17136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17135-L17136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17135-L17136) · [Before (L17377-L17378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17377-L17378)

```diff
-       const rH = (0, AH.c)();
-       return null !== (BH = null === (LH = rH.mF[rH.lF][HH]) || void 0 === LH ? void 0 : LH.canAttack) && void 0 !== BH && BH || hH(HH)
+       const DB = (0, YB.g)();
+       return null !== (OB = null === (GB = DB.FX[DB.EX][BB]) || void 0 === GB ? void 0 : GB.canAttack) && void 0 !== OB && OB || oB(BB)
```

#### 2286. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17383-L17384` → after: `L17141-L17142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17141-L17142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17141-L17142) · [Before (L17383-L17384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17383-L17384)

```diff
-       const rH = (0, AH.c)();
-       return null !== (BH = null === (LH = rH.mF[rH.lF][HH]) || void 0 === LH ? void 0 : LH.interactionPrompt) && void 0 !== BH ? BH : null
+       const DB = (0, YB.g)();
+       return null !== (OB = null === (GB = DB.FX[DB.EX][BB]) || void 0 === GB ? void 0 : GB.interactionPrompt) && void 0 !== OB ? OB : null
```

#### 2287. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17390-L17391` → after: `L17148-L17149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17148-L17149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17148-L17149) · [Before (L17390-L17391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17390-L17391)

```diff
-       const rH = (0, AH.c)();
-       return null !== (BH = null === (LH = rH.mF[rH.lF][HH]) || void 0 === LH ? void 0 : LH.interactable) && void 0 !== BH && BH
+       const DB = (0, YB.g)();
+       return null !== (OB = null === (GB = DB.FX[DB.EX][BB]) || void 0 === GB ? void 0 : GB.interactable) && void 0 !== OB && OB
```

#### 2288. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17397-L17398` → after: `L17155-L17156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17155-L17156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17155-L17156) · [Before (L17397-L17398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17397-L17398)

```diff
-           const HH = (0, AH.c)(),
-             BH = HH.mF[HH.lF];
+           const BB = (0, YB.g)(),
+             OB = BB.FX[BB.EX];
```

#### 2289. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17405` → after: `L17163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17163) · [Before (L17405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17405)

```diff
-       const SH = null !== HH && void 0 !== HH ? HH : AH.f.localPlayerPickActionHelper;
+       const QB = null !== BB && void 0 !== BB ? BB : YB.h.localPlayerPickActionHelper;
```

#### 2290. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17407-L17409` → after: `L17165-L17167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17165-L17167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17165-L17167) · [Before (L17407-L17409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17407-L17409)

```diff
-       const tH = (0, AH.c)(),
-         zH = null !== (LH = SH.getPickEntityResult(null !== (rH = null !== BH && void 0 !== BH ? BH : tH.pBH) && void 0 !== rH ? rH : tH.camera.T_())) && void 0 !== LH ? LH : null;
-       return hH(zH) ? zH : null
+       const jB = (0, YB.g)(),
+         yB = null !== (GB = QB.getPickEntityResult(null !== (DB = null !== OB && void 0 !== OB ? OB : jB.jGB) && void 0 !== DB ? DB : jB.camera.B_())) && void 0 !== GB ? GB : null;
+       return oB(yB) ? yB : null
```

#### 2291. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17412` → after: `L17170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17170) · [Before (L17412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17412)

```diff
-   38026: (HH, BH, LH) => {
+   37839: (BB, OB, GB) => {
```

#### 2292. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17414` → after: `L17172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17172) · [Before (L17414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17414)

```diff
-       b: () => EH
+       c: () => MB
```

#### 2293. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17416-L17418` → after: `L17174-L17176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17174-L17176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17174-L17176) · [Before (L17416-L17418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17416-L17418)

```diff
-     var AH = LH(4617),
-       rH = LH(38020),
-       SH = LH(38029);
+     var YB = GB(4642),
+       DB = GB(37836),
+       QB = GB(37841);
```

#### 2294. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17422` → after: `L17180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17180) · [Before (L17422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17422)

```diff
-         this.bG = HH, this.now = BH, this.animations = new Map, this.warned = new Set
+         this.kz = BB, this.now = OB, this.animations = new Map, this.warned = new Set
```

#### 2295. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17431` → after: `L17189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17189) · [Before (L17431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17431)

```diff
-         "clip" === (null === XH || void 0 === XH ? void 0 : XH.kind) && (null === EH || void 0 === EH || null === (GH = EH.getRigController()) || void 0 === GH || GH.stopClip(XH.VB));
+         "clip" === (null === PB || void 0 === PB ? void 0 : PB.kind) && (null === MB || void 0 === MB || null === (zB = MB.getRigController()) || void 0 === zB || zB.stopClip(PB.pG));
```

#### 2296. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17433-L17434` → after: `L17191-L17192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17191-L17192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17191-L17192) · [Before (L17433-L17434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17433-L17434)

```diff
-           TB: AH,
-           UB: Math.max(SH, 0),
+           zG: YB,
+           lG: Math.max(QB, 0),
```

#### 2297. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17442` → after: `L17200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17200) · [Before (L17442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17442)

```diff
-         if (null === EH || void 0 === EH || EH.stopAnimation(BH), null === zH || BH !== rH.g.Custom) return void this.forget(HH, BH);
+         if (null === MB || void 0 === MB || MB.stopAnimation(OB), null === yB || OB !== DB.f.Custom) return void this.forget(BB, OB);
```

#### 2298. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17445-L17446` → after: `L17203-L17204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17203-L17204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17203-L17204) · [Before (L17445-L17446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17445-L17446)

```diff
-           VB: zH,
-           OB: Math.max(CH, 0),
+           pG: yB,
+           qG: Math.max(JB, 0),
```

#### 2299. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17450` → after: `L17208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17208) · [Before (L17450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17450)

```diff
-         const QH = null !== (tH = null === EH || void 0 === EH ? void 0 : EH.getRigController()) && void 0 !== tH ? tH : null;
+         const qB = null !== (jB = null === MB || void 0 === MB ? void 0 : MB.getRigController()) && void 0 !== jB ? jB : null;
```

#### 2300. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17461-L17462` → after: `L17219-L17220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17219-L17220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17219-L17220) · [Before (L17461-L17462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17461-L17462)

```diff
-             UB: tH,
-             TB: zH,
+             lG: jB,
+             zG: yB,
```

#### 2301. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17470` → after: `L17228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17228) · [Before (L17470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17470)

```diff
-         const AH = null === (LH = this.animations.get(HH)) || void 0 === LH ? void 0 : LH.get(rH.g.Custom);
+         const YB = null === (GB = this.animations.get(BB)) || void 0 === GB ? void 0 : GB.get(DB.f.Custom);
```

#### 2302. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17475` → after: `L17233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17233) · [Before (L17475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17475)

```diff
-         return [...null !== (BH = null === (LH = this.animations.get(HH)) || void 0 === LH ? void 0 : LH.keys()) && void 0 !== BH ? BH : []]
+         return [...null !== (OB = null === (GB = this.animations.get(BB)) || void 0 === GB ? void 0 : GB.keys()) && void 0 !== OB ? OB : []]
```

#### 2303. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17479` → after: `L17237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17237) · [Before (L17479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17479)

```diff
-         for (const [AH, rH] of null !== (LH = this.animations.get(HH)) && void 0 !== LH ? LH : []) {
+         for (const [YB, DB] of null !== (GB = this.animations.get(BB)) && void 0 !== GB ? GB : []) {
```

#### 2304. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17483` → after: `L17241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17241) · [Before (L17483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17483)

```diff
-             UB: rH.UB
+             lG: DB.lG
```

#### 2305. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17485-L17486` → after: `L17243-L17244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17243-L17244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17243-L17244) · [Before (L17485-L17486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17485-L17486)

```diff
-             VB: rH.VB,
-             UB: rH.UB
+             pG: DB.pG,
+             lG: DB.lG
```

#### 2306. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17499` → after: `L17257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17257) · [Before (L17499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17499)

```diff
-             if (null === AH || void 0 === AH || AH.stopAnimation(BH), "clip" === rH.kind) null === AH || void 0 === AH || null === (HH = AH.getRigController()) || void 0 === HH || HH.stopClip(rH.VB)
+             if (null === YB || void 0 === YB || YB.stopAnimation(OB), "clip" === DB.kind) null === YB || void 0 === YB || null === (BB = YB.getRigController()) || void 0 === BB || BB.stopClip(DB.pG)
```

#### 2307. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17506` → after: `L17264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17264) · [Before (L17506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17506)

```diff
-         return null !== (BH = this.bG.pT.getState(HH, "animator")) && void 0 !== BH ? BH : null
+         return null !== (OB = this.kz.DW.getState(BB, "animator")) && void 0 !== OB ? OB : null
```

#### 2308. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17518-L17521` → after: `L17276-L17279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17276-L17279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17276-L17279) · [Before (L17518-L17521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17518-L17521)

```diff
-           VB: LH,
-           TB: AH,
-           UB: rH,
-           OB: SH,
+           pG: GB,
+           zG: YB,
+           lG: DB,
+           qG: QB,
```

#### 2309. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17524` → after: `L17282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17282) · [Before (L17524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17524)

```diff
-         "noClip" === zH ? this.warnOnce(`${LH}|${CH}`, `Can't play "${LH}": ${CH} has no clip by that name`) : "ambiguous" === zH && this.warnOnce(`${LH}|${CH}`, `Can't play "${LH}" on ${CH}: several clips are called that, so give its full name`)
+         "noClip" === yB ? this.warnOnce(`${GB}|${JB}`, `Can't play "${GB}": ${JB} has no clip by that name`) : "ambiguous" === yB && this.warnOnce(`${GB}|${JB}`, `Can't play "${GB}" on ${JB}: several clips are called that, so give its full name`)
```

#### 2310. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17535` → after: `L17293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17293) · [Before (L17535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17535)

```diff
-         this.now = BH, this.animations = void 0, this.attachments = new Map, this.attachmentGenerations = new Map, this.nextAttachmentGeneration = 0, this.particleSystemUpdates = new Map, this.effects = new Map, this.floating = new Map, this.QL = new Set, this.healthFracs = new M … [truncated]
+         this.now = OB, this.animations = void 0, this.attachments = new Map, this.attachmentGenerations = new Map, this.nextAttachmentGeneration = 0, this.particleSystemUpdates = new Map, this.effects = new Map, this.floating = new Map, this.uQ = new Set, this.healthFracs = new M … [truncated]
```

#### 2311. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17538` → after: `L17296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17296) · [Before (L17538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17538)

```diff
-         XH(this.attachments, HH).set(BH.kH, BH)
+         PB(this.attachments, BB).set(OB.BO, OB)
```

#### 2312. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17545` → after: `L17303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17303) · [Before (L17545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17545)

```diff
-         return [...null !== (BH = null === (LH = this.attachments.get(HH)) || void 0 === LH ? void 0 : LH.values()) && void 0 !== BH ? BH : []]
+         return [...null !== (OB = null === (GB = this.attachments.get(BB)) || void 0 === GB ? void 0 : GB.values()) && void 0 !== OB ? OB : []]
```

#### 2313. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17585` → after: `L17343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17343) · [Before (L17585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17585)

```diff
-         return null !== (BH = this.effects.get(HH)) && void 0 !== BH ? BH : tH
+         return null !== (OB = this.effects.get(BB)) && void 0 !== OB ? OB : jB
```

#### 2314. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17593` → after: `L17351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17351) · [Before (L17593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17593)

```diff
-           ZB: BH ? LH : null
+           DB: OB ? GB : null
```

#### 2315. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17600` → after: `L17358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17358) · [Before (L17600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17600)

```diff
-         BH ? this.QL.add(HH) : this.QL.delete(HH)
+         OB ? this.uQ.add(BB) : this.uQ.delete(BB)
```

#### 2316. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17603` → after: `L17361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17361) · [Before (L17603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17603)

```diff
-         return this.QL.has(HH)
+         return this.uQ.has(BB)
```

#### 2317. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17610` → after: `L17368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17368) · [Before (L17610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17610)

```diff
-         return null !== (BH = this.healthFracs.get(HH)) && void 0 !== BH ? BH : null
+         return null !== (OB = this.healthFracs.get(BB)) && void 0 !== OB ? OB : null
```

#### 2318. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17613` → after: `L17371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17371) · [Before (L17613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17613)

```diff
-         this.animations.remove(HH), this.attachments.delete(HH), this.attachmentGenerations.delete(HH), this.particleSystemUpdates.delete(HH), this.effects.delete(HH), this.floating.delete(HH), this.QL.delete(HH), this.healthFracs.delete(HH)
+         this.animations.remove(BB), this.attachments.delete(BB), this.attachmentGenerations.delete(BB), this.particleSystemUpdates.delete(BB), this.effects.delete(BB), this.floating.delete(BB), this.uQ.delete(BB), this.healthFracs.delete(BB)
```

#### 2319. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17616` → after: `L17374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17374) · [Before (L17616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17616)

```diff
-         this.animations.clear(), this.attachments.clear(), this.attachmentGenerations.clear(), this.particleSystemUpdates.clear(), this.effects.clear(), this.floating.clear(), this.QL.clear(), this.healthFracs.clear()
+         this.animations.clear(), this.attachments.clear(), this.attachmentGenerations.clear(), this.particleSystemUpdates.clear(), this.effects.clear(), this.floating.clear(), this.uQ.clear(), this.healthFracs.clear()
```

#### 2320. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17629-L17632` → after: `L17387-L17390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17387-L17390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17387-L17390) · [Before (L17629-L17632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17629-L17632)

```diff
-               kH: BH,
-               mH: LH,
-               oH: AH,
-               IH: rH
+               BO: OB,
+               OO: GB,
+               GO: YB,
+               YO: DB
```

#### 2321. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17635-L17637` → after: `L17393-L17395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17393-L17395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17393-L17395) · [Before (L17635-L17637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17635-L17637)

```diff
-               mH: LH,
-               oH: AH,
-               IH: rH
+               OO: GB,
+               GO: YB,
+               YO: DB
```

#### 2322. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17641` → after: `L17399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17399) · [Before (L17641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17641)

```diff
-           dU: JSON.parse(JSON.stringify(null !== (BH = this.particleSystemUpdates.get(HH)) && void 0 !== BH ? BH : {})),
+           rW: JSON.parse(JSON.stringify(null !== (OB = this.particleSystemUpdates.get(BB)) && void 0 !== OB ? OB : {})),
```

#### 2323. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17643-L17645` → after: `L17401-L17403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17401-L17403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17401-L17403) · [Before (L17643-L17645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17643-L17645)

```diff
-           floating: null !== (LH = this.floating.get(HH)) && void 0 !== LH ? LH : null,
-           QL: this.QL.has(HH),
-           PA: this.getHealthFrac(HH)
+           floating: null !== (GB = this.floating.get(BB)) && void 0 !== GB ? GB : null,
+           uQ: this.uQ.has(BB),
+           xG: this.getHealthFrac(BB)
```

#### 2324. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17649` → after: `L17407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17407) · [Before (L17649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17649)

```diff
-         return this.animations.retainedTypes(HH).length > 0 || this.attachments.has(HH) || this.attachmentGenerations.has(HH) || this.particleSystemUpdates.has(HH) || this.effects.has(HH) || this.floating.has(HH) || this.QL.has(HH) || this.healthFracs.has(HH)
+         return this.animations.retainedTypes(BB).length > 0 || this.attachments.has(BB) || this.attachmentGenerations.has(BB) || this.particleSystemUpdates.has(BB) || this.effects.has(BB) || this.floating.has(BB) || this.uQ.has(BB) || this.healthFracs.has(BB)
```

#### 2325. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17669` → after: `L17427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17427) · [Before (L17669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17669)

```diff
-   38970: (HH, BH, LH) => {
+   38771: (BB, OB, GB) => {
```

#### 2326. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17671-L17674` → after: `L17429-L17431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17429-L17431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17429-L17431) · [Before (L17671-L17674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17671-L17674)

```diff
-       d: () => QB,
-       h: () => kB,
-       l: () => bB,
-       m: () => PB,
+       e: () => qO,
+       g: () => kO,
+       k: () => fO,
```

#### 2327. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17676-L17677` → after: `L17433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17433) · [Before (L17676-L17677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17676-L17677)

```diff
-       o: () => WB,
-       s: () => TB,
+       q: () => dO,
```

#### 2328. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17679-L17680` → after: `L17435-L17438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17435-L17438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17435-L17438) · [Before (L17679-L17680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17679-L17680)

```diff
-       w: () => IB,
-       x: () => UB
+       x: () => VO,
+       z: () => RO,
+       D: () => uO,
+       H: () => SO
```

#### 2329. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17682-L17709` → after: `L17440-L17467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17440-L17467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17440-L17467) · [Before (L17682-L17709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17682-L17709)

```diff
-     var AH = LH(38071),
-       rH = LH(37961),
-       SH = LH(4061),
-       hH = LH(37633),
-       tH = LH(38977),
-       zH = LH(38986),
-       CH = LH(37943),
-       EH = LH(38026),
-       XH = LH(38593),
-       GH = LH(38507),
-       YH = LH(609),
-       uH = LH(152),
-       QH = LH(39022),
-       WH = LH(2339),
-       MH = LH(2760),
-       xH = LH(2351),
- ... (12 more removed lines; see GitHub link above)
+     var YB = GB(37885),
+       DB = GB(37771),
+       QB = GB(4111),
+       oB = GB(37452),
+       jB = GB(38780),
+       yB = GB(38786),
+       JB = GB(37761),
+       MB = GB(37839),
+       PB = GB(38409),
+       zB = GB(38321),
+       lB = GB(633),
+       pB = GB(162),
+       qB = GB(38805),
+       ZB = GB(2392),
+       NB = GB(2787),
+       RB = GB(2404),
+ ... (12 more added lines; see GitHub link above)
```

#### 2330. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17711-L17717` → after: `L17469-L17475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17469-L17475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17469-L17475) · [Before (L17711-L17717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17711-L17717)

```diff
-       KH = LH(2036);
-     var cH = LH(18),
-       eH = LH(3503),
-       qH = LH(619),
-       gH = LH(3508),
-       NH = LH(38062),
-       RH = LH(3562);
+       FB = GB(2050);
+     var iB = GB(25),
+       LB = GB(3573),
+       gB = GB(641),
+       rB = GB(3580),
+       XB = GB(37877),
+       wB = GB(3629);
```

#### 2331. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17719-L17741` → after: `L17477-L17499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17477-L17499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17477-L17499) · [Before (L17719-L17741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17719-L17741)

```diff
-     var nH = LH(3038),
-       FH = LH(37945),
-       DH = LH(38450),
-       wH = LH(38994),
-       ZH = LH(38048),
-       dH = LH(39002),
-       aH = LH(39019),
-       sH = LH(38190),
-       JH = LH(38192),
-       iH = LH(38878),
-       pH = LH(38713),
-       yH = LH(38176),
-       HB = LH(38100),
-       BB = LH(38157),
-       LB = LH(38041),
-       AB = LH(39026),
- ... (7 more removed lines; see GitHub link above)
+     var cB = GB(3088),
+       hB = GB(37763),
+       aB = GB(38275),
+       eB = GB(38789),
+       TB = GB(37857),
+       bB = GB(38796),
+       CB = GB(38801),
+       HB = GB(38011),
+       vB = GB(38019),
+       sB = GB(38682),
+       xB = GB(38531),
+       tB = GB(38005),
+       BO = GB(37928),
+       OO = GB(37984),
+       GO = GB(37849),
+       YO = GB(38809),
+ ... (7 more added lines; see GitHub link above)
```

#### 2332. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17744` → after: `L17502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17502) · [Before (L17744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17744)

```diff
-         this.bG = HH, this.vehicleEId = null, this.previousHeading = 0
+         this.kz = BB, this.vehicleEId = null, this.previousHeading = 0
```

#### 2333. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17752` → after: `L17510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17510) · [Before (L17752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17752)

```diff
-           pT: rH,
+           DW: DB,
```

#### 2334. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17754` → after: `L17512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17512) · [Before (L17754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17754)

```diff
-           lF: hH,
+           EX: oB,
```

#### 2335. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17756-L17758` → after: `L17514-L17516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17514-L17516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17514-L17516) · [Before (L17756-L17758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17756-L17758)

```diff
-         } = this.bG, zH = null === (HH = rH.ILH(hH)) || void 0 === HH ? void 0 : HH.ridingVehicleEId, CH = zH && (null === (BH = rH.GAH(hH)) || void 0 === BH ? void 0 : BH.Xu) === zH, EH = (null === (LH = rH.GAH(SH.Z6)) || void 0 === LH ? void 0 : LH.Xu) === hH;
-         if (!CH || !EH || null !== SH.K3 || null !== (AH = tH.client) && void 0 !== AH && AH.isReplayMode()) return this.reset(), 0;
-         const XH = (0, EB.getCaughtUpMeshRotation)(this.bG, zH);
+         } = this.kz, yB = null === (BB = DB.EGB(oB)) || void 0 === BB ? void 0 : BB.ridingVehicleEId, JB = yB && (null === (OB = DB.nYB(oB)) || void 0 === OB ? void 0 : OB.qp) === yB, MB = (null === (GB = DB.nYB(QB.W4)) || void 0 === GB ? void 0 : GB.qp) === oB;
+         if (!JB || !MB || null !== QB.B3 || null !== (YB = jB.client) && void 0 !== YB && YB.isReplayMode()) return this.reset(), 0;
+         const PB = (0, MO.getCaughtUpMeshRotation)(this.kz, yB);
```

#### 2336. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17761` → after: `L17519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17519) · [Before (L17761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17761)

```diff
-           YH = this.vehicleEId === zH ? bH.d.computeShortestRotation(this.previousHeading, GH) : 0;
+           lB = this.vehicleEId === yB ? fB.b.computeShortestRotation(this.previousHeading, zB) : 0;
```

#### 2337. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17765-L17767` → after: `L17523-L17525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17523-L17525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17523-L17525) · [Before (L17765-L17767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17765-L17767)

```diff
-     var GB = LH(38444),
-       YB = LH(38950),
-       uB = LH(5077);
+     var zO = GB(38272),
+       lO = GB(38751),
+       pO = GB(5088);
```

#### 2338. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17770-L17771` → after: `L17528-L17529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17528-L17529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17528-L17529) · [Before (L17770-L17771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17770-L17771)

```diff
-       YB.g.setPlayerRigCheck((HH => YH.j.includes(HH) && fB(HH))), (0, BB.l)(), await eH.b.requiredAssetsAreGenerated();
-       const BH = eH.b.getGenerationFailure();
+       lO.e.setPlayerRigCheck((BB => lB.j.includes(BB) && mO(BB))), (0, OO.k)(), await LB.c.requiredAssetsAreGenerated();
+       const OB = LB.c.getGenerationFailure();
```

#### 2339. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17773` → after: `L17531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17531) · [Before (L17773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17773)

```diff
-       const LH = HH.mX.yN();
+       const GB = BB.UP.JF();
```

#### 2340. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17776-L17778` → after: `L17534-L17536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17534-L17536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17534-L17536) · [Before (L17776-L17778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17776-L17778)

```diff
-           const BH = AH.then((() => (0, uB.r)(`lifeform ${HH}`)));
-           return AH = BH, BH.then((() => xB(HH, LH))).then((HH => (cH.k.AX("matchmakeAndPlayStepCompleted", {
-             step: uH.h.SETUP_LIFEFORMS,
+           const OB = YB.then((() => (0, pO.n)(`lifeform ${BB}`)));
+           return YB = OB, OB.then((() => RO(BB, GB))).then((BB => (iB.o.tM("matchmakeAndPlayStepCompleted", {
+             step: pB.l.SETUP_LIFEFORMS,
```

#### 2341. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17786` → after: `L17544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17544) · [Before (L17786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17786)

```diff
-       return QB = hH, await (0, uB.r)("local player"),
+       return qO = oB, await (0, pO.n)("local player"),
```

#### 2342. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17790-L17791` → after: `L17548-L17549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17548-L17549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17548-L17549) · [Before (L17790-L17791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17790-L17791)

```diff
-               pT: LH,
-               lF: AH
+               DW: GB,
+               EX: YB
```

#### 2343. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17793-L17796` → after: `L17551-L17554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17551-L17554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17551-L17554) · [Before (L17793-L17796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17793-L17796)

```diff
-           TB(BH, HH, AH), (0, ZH.o)(HH, AH), LH.yR(AH, LH.names.movementInputs), LH.yR(AH, LH.names.movement), LH.yR(AH, LH.names.updateServerOfMovement), LH.yR(AH, LH.names.playerCameraAdjustment), LH.yR(AH, LH.names.crouchingHandler), LH.yR(AH, "stepSoundOnWalk"), LH.yR(AH, "pl … [truncated]
-           const rH = LH.xJ(AH);
-           rH.alwaysApplyHorizFriction = !0, rH.jG = 0;
-           const hH = LH.GAH(HH.camera.Z6),
+           VO(OB, BB, YB), (0, TB.w)(BB, YB), GB.RL(YB, GB.names.movementInputs), GB.RL(YB, GB.names.movement), GB.RL(YB, GB.names.updateServerOfMovement), GB.RL(YB, GB.names.playerCameraAdjustment), GB.RL(YB, GB.names.crouchingHandler), GB.RL(YB, "stepSoundOnWalk"), GB.RL(YB, "pl … [truncated]
+           const DB = GB.mC(YB);
+           DB.alwaysApplyHorizFriction = !0, DB.hz = 0;
+           const oB = GB.nYB(BB.camera.W4),
```

#### 2344. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17798` → after: `L17556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17556) · [Before (L17798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17798)

```diff
-           HH.camera.B_ = () => tH.B_(), hH.xAH = (BH, rH, SH) => {
+           BB.camera.U3 = () => jB.U3(), oB.uYB = (OB, DB, QB) => {
```

#### 2345. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17800-L17802` → after: `L17558-L17560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17558-L17560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17558-L17560) · [Before (L17800-L17802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17800-L17802)

```diff
-             const hH = LH.ILH(AH).ridingVehicleEId;
-             if (hH && !LH.aBH(AH, LH.names.HV)) {
-               const SH = LH.ILH(AH).meshOffset,
+             const oB = GB.EGB(YB).ridingVehicleEId;
+             if (oB && !GB.YGB(YB, GB.names.vW)) {
+               const QB = GB.EGB(YB).meshOffset,
```

#### 2346. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17809` → after: `L17567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17567) · [Before (L17809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17809)

```diff
-             (0, XH.tickMovementInputsPrePhysics)(HH, BH), LH.aBH(AH, LH.names.HV) || (0, GH.tickMovementPrePhysics)(HH, BH)
+             (0, PB.tickMovementInputsPrePhysics)(BB, OB), GB.YGB(YB, GB.names.vW) || (0, zB.tickMovementPrePhysics)(BB, OB)
```

#### 2347. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17815` → after: `L17573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17573) · [Before (L17815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17815)

```diff
-             tH.reset(), lH().set(rH.EW, 0, 0, 0), lH().set(rH.bZ, 0, 0, 0), lH().set(rH.eZ, 0, 0, 0), HH.bloxd.takeHeldPlayerBodySize(AH), LH.KzH(AH, LH.names.movement), LH.KzH(AH, LH.names.moveState);
+             jB.reset(), IB().set(DB.lZ, 0, 0, 0), IB().set(DB.eT, 0, 0, 0), IB().set(DB.YC, 0, 0, 0), BB.bloxd.takeHeldPlayerBodySize(YB), GB.hyB(YB, GB.names.movement), GB.hyB(YB, GB.names.moveState);
```

#### 2348. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17819-L17820` → after: `L17577-L17578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17577-L17578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17577-L17578) · [Before (L17819-L17820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17819-L17820)

```diff
-                   kR: BH,
-                   NAH: rH,
+                   uF: OB,
+                   HYB: DB,
```

#### 2349. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17827-L17829` → after: `L17585-L17587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17585-L17587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17585-L17587) · [Before (L17827-L17829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17827-L17829)

```diff
-               if (LH.KzH(AH, HH, {
-                   kR: BH,
-                   NAH: rH,
+               if (GB.hyB(YB, BB, {
+                   uF: OB,
+                   HYB: DB,
```

#### 2350. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17832-L17834` → after: `L17590-L17592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17590-L17592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17590-L17592) · [Before (L17832-L17834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17832-L17834)

```diff
-                 }), LH.KzH(AH, "animator", {
-                   kR: BH,
-                   NAH: rH,
+                 }), GB.hyB(YB, "animator", {
+                   uF: OB,
+                   HYB: DB,
```

#### 2351. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17836` → after: `L17594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17594) · [Before (L17836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17836)

```diff
-                 }), LH.aBH(AH, "rigAnimation")) {
+                 }), GB.YGB(YB, "rigAnimation")) {
```

#### 2352. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17840` → after: `L17598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17598) · [Before (L17840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17840)

```diff
-                 LH.KzH(AH, "rigAnimation", {
+                 GB.hyB(YB, "rigAnimation", {
```

#### 2353. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17842` → after: `L17600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17600) · [Before (L17842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17842)

```diff
-                   kR: BH
+                   uF: OB
```

#### 2354. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17846-L17847` → after: `L17604-L17605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17604-L17605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17604-L17605) · [Before (L17846-L17847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17846-L17847)

```diff
-             LH.KzH(AH, LH.names.meshAttachments)
-           })), LH.yR(AH, LH.names.cameraShake), LH.yR(AH, "forcedCameraTransition"),
+             GB.hyB(YB, GB.names.meshAttachments)
+           })), GB.RL(YB, GB.names.cameraShake), GB.RL(YB, "forcedCameraTransition"),
```

#### 2355. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17849` → after: `L17607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17607) · [Before (L17849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17849)

```diff
-               const BH = HH.lF;
+               const OB = BB.EX;
```

#### 2356. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17851` → after: `L17609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17609) · [Before (L17851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17851)

```diff
-                 if (!0 === LH && !HH.pT.cLH(BH)) {
+                 if (!0 === GB && !BB.DW.eGB(OB)) {
```

#### 2357. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17853-L17854` → after: `L17611-L17612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17611-L17612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17611-L17612) · [Before (L17853-L17854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17853-L17854)

```diff
-                     const AH = HH.pT.lLH(BH);
-                     cH.k.AX("updatedInventory", AH.getItems())
+                     const YB = BB.DW.hGB(OB);
+                     iB.o.tM("updatedInventory", YB.getItems())
```

#### 2358. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17856` → after: `L17614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17614) · [Before (L17856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17856)

```diff
-                   HH.pT.yR(BH, HH.pT.names.inventory, {
+                   BB.DW.RL(OB, BB.DW.names.inventory, {
```

#### 2359. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17859-L17860` → after: `L17617-L17618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17617-L17618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17617-L17618) · [Before (L17859-L17860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17859-L17860)

```diff
-                   }), HH.pT.KLH(HH.lF).inCreative = HH.wT.creative, cH.k.AX("playerInventoryComponentChanged")
-                 }!1 === LH && HH.pT.cLH(BH) && (HH.pT.fn(BH, HH.pT.names.inventory), cH.k.AX("playerInventoryComponentChanged"))
+                   }), BB.DW.aGB(BB.EX).inCreative = BB.xR.creative, iB.o.tM("playerInventoryComponentChanged")
+                 }!1 === GB && BB.DW.eGB(OB) && (BB.DW.dL(OB, BB.DW.names.inventory), iB.o.tM("playerInventoryComponentChanged"))
```

#### 2360. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17862-L17864` → after: `L17620-L17622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17620-L17622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17620-L17622) · [Before (L17862-L17864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17862-L17864)

```diff
-                 HH.pT.aBH(BH, "inventory") && (HH.pT.KLH(HH.lF).inCreative = LH)
-               })), cH.k.subscribe("leaveGame", (() => {
-                 HH.pT.cLH(BH) && HH.pT.fn(BH, HH.pT.names.inventory)
+                 BB.DW.YGB(OB, "inventory") && (BB.DW.aGB(BB.EX).inCreative = GB)
+               })), iB.o.subscribe("leaveGame", (() => {
+                 BB.DW.eGB(OB) && BB.DW.dL(OB, BB.DW.names.inventory)
```

#### 2361. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17872` → after: `L17630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17630) · [Before (L17872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17872)

```diff
-               pT: AH
+               DW: YB
```

#### 2362. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17877-L17878` → after: `L17635-L17636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17635-L17636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17635-L17636) · [Before (L17877-L17878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17877-L17878)

```diff
-               const BH = HH.pT.JR("genericLifeformState");
-               for (const HH of BH) HH.meshEnabledCombinator.removeBoolean("closestVisibleX"), AH.getState(HH.pR, AH.names.lX).enabledCombinator.removeBoolean("closestVisibleX")
+               const OB = BB.DW.lL("genericLifeformState");
+               for (const BB of OB) BB.meshEnabledCombinator.removeBoolean("closestVisibleX"), YB.getState(BB.qL, YB.names.KP).enabledCombinator.removeBoolean("closestVisibleX")
```

#### 2363. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17889` → after: `L17647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17647) · [Before (L17889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17889)

```diff
-             const tH = AH.hT(HH.lF);
+             const jB = YB.pR(BB.EX);
```

#### 2364. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17891` → after: `L17649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17649) · [Before (L17891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17891)

```diff
-             const zH = AH.JR("genericLifeformState");
+             const yB = YB.lL("genericLifeformState");
```

#### 2365. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17893` → after: `L17651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17651) · [Before (L17893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17893)

```diff
-             LH.length = zH.length, LH.sort(((HH, BH) => lH().Ot(AH.hT(HH.pR), tH) - lH().Ot(AH.hT(BH.pR), tH)));
+             GB.length = yB.length, GB.sort(((BB, OB) => IB().IM(YB.pR(BB.qL), jB) - IB().IM(YB.pR(OB.qL), jB)));
```

#### 2366. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17895` → after: `L17653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17653) · [Before (L17895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17895)

```diff
-             for (const rH of LH) rH.pR !== HH.lF && (CH < BH ? (rH.meshEnabledCombinator.setBooleanType("closestVisibleX", !0), AH.getState(rH.pR, AH.names.lX).enabledCombinator.setBooleanType("closestVisibleX", !0), CH++) : (rH.meshEnabledCombinator.setBooleanType("closestVisibl … [truncated]
+             for (const DB of GB) DB.qL !== BB.EX && (JB < OB ? (DB.meshEnabledCombinator.setBooleanType("closestVisibleX", !0), YB.getState(DB.qL, YB.names.KP).enabledCombinator.setBooleanType("closestVisibleX", !0), JB++) : (DB.meshEnabledCombinator.setBooleanType("closestVisibl … [truncated]
```

#### 2367. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17897-L17899` → after: `L17655-L17657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17655-L17657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17655-L17657) · [Before (L17897-L17899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17897-L17899)

```diff
-           HH.on("IX", (function(BH) {
-             const LH = AH.hT(HH.lF),
-               tH = lH().Ot(LH, rH);
+           BB.on("kP", (function(OB) {
+             const GB = YB.pR(BB.EX),
+               jB = IB().IM(GB, DB);
```

#### 2368. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17929` → after: `L17687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17687) · [Before (L17929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17929)

```diff
-         tH = null !== (LH = hH.meshMetadata.lifeformTypeForModelOverride) && void 0 !== LH ? LH : HH,
+         jB = null !== (GB = oB.meshMetadata.lifeformTypeForModelOverride) && void 0 !== GB ? GB : BB,
```

#### 2369. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17933-L17934` → after: `L17691-L17692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17691-L17692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17691-L17692) · [Before (L17933-L17934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17933-L17934)

```diff
-         for (const HH of QH.d) zH.push(WH.d[HH][(0, MH.d)(HH)].atlasIdx);
-         CH = xH.f
+         for (const BB of qB.e) yB.push(ZB.h[BB][(0, NB.d)(BB)].atlasIdx);
+         JB = RB.g
```

#### 2370. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17937-L17938` → after: `L17695-L17696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17695-L17696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17695-L17696) · [Before (L17937-L17938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17937-L17938)

```diff
-           LH = (0, vH.b)(BH, "default");
-         for (zH.push(LH.atlasIdx1), zH.push(LH.atlasIdx2), zH.push(LH.atlasIdx3); CH * CH < PH.s[BH].length;) CH *= 2
+           GB = (0, WB.d)(OB, "default");
+         for (yB.push(GB.atlasIdx1), yB.push(GB.atlasIdx2), yB.push(GB.atlasIdx3); JB * JB < AB.p[OB].length;) JB *= 2
```

#### 2371. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17948` → after: `L17706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17706) · [Before (L17948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17948)

```diff
-         } = (0, rB.b)(HH), AH = (0, IH.e)() || !1, rH = null !== (BH = LH.lifeformTypeForModelOverride) && void 0 !== BH ? BH : HH, SH = AH ? eH.b.getModel(`${rH}_Model`, gH.g.LIFEFORM) : null, hH = SH && !SH.notFound;
+         } = (0, DO.b)(BB), YB = (0, uB.f)() || !1, DB = null !== (OB = GB.lifeformTypeForModelOverride) && void 0 !== OB ? OB : BB, QB = YB ? LB.c.getModel(`${DB}_Model`, rB.f.LIFEFORM) : null, oB = QB && !QB.notFound;
```

#### 2372. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17951-L17954` → after: `L17709-L17712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17709-L17712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17709-L17712) · [Before (L17951-L17954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17951-L17954)

```diff
-           const HH = hH ? gH.k.LIFEFORM_ATLAS : gH.k.PLAYER_ASSET;
-           tH = eH.b.getTexture("Player_Atlas", HH).url
-         } else tH = eH.b.getTexture(`${HH}_Atlas`, gH.k.LIFEFORM_ATLAS).url;
-         let zH = hH ? SH.url : (0, ZH.k)(rH, `${rH}_Model.glb`);
+           const BB = oB ? rB.h.LIFEFORM_ATLAS : rB.h.PLAYER_ASSET;
+           jB = LB.c.getTexture("Player_Atlas", BB).url
+         } else jB = LB.c.getTexture(`${BB}_Atlas`, rB.h.LIFEFORM_ATLAS).url;
+         let yB = oB ? QB.url : (0, TB.q)(DB, `${DB}_Model.glb`);
```

#### 2373. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17960` → after: `L17718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17718) · [Before (L17960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17960)

```diff
-               AH = (0, ZH.k)(HH, `${HH}${jH}`)
+               YB = (0, TB.q)(BB, `${BB}${EB}`)
```

#### 2374. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17964-L17970` → after: `L17722-L17728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17722-L17728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17722-L17728) · [Before (L17964-L17970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17964-L17970)

```diff
-             const rH = (0, RH.i)(AH);
-             if (!rH) return console.error(`Pre-reconstructed GLB for ${HH} is no longer base64-inlined - cannot verify its build hash. Falling back to runtime reconstruction.`), null;
-             const SH = (0, RH.i)(BH);
-             if (!SH) return console.error(`GLB for ${HH} is no longer base64-inlined - cannot verify the pre-reconstructed build hash. Falling back to runtime reconstruction.`), null;
-             const hH = (0, RH.e)(rH.base64),
-               tH = (0, NH.h)(LH, SH.base64);
-             if ((0, NH.v)(hH) !== tH) return console.error(`Stale pre-reconstructed model for ${HH} - re-run \`npm run buildMeshes\`. Falling back to runtime reconstruction.`), null;
+             const DB = (0, wB.j)(YB);
+             if (!DB) return console.error(`Pre-reconstructed GLB for ${BB} is no longer base64-inlined - cannot verify its build hash. Falling back to runtime reconstruction.`), null;
+             const QB = (0, wB.j)(OB);
+             if (!QB) return console.error(`GLB for ${BB} is no longer base64-inlined - cannot verify the pre-reconstructed build hash. Falling back to runtime reconstruction.`), null;
+             const oB = (0, wB.d)(DB.base64),
+               jB = (0, XB.k)(GB, QB.base64);
+             if ((0, XB.E)(oB) !== jB) return console.error(`Stale pre-reconstructed model for ${BB} - re-run \`npm run buildMeshes\`. Falling back to runtime reconstruction.`), null;
```

#### 2375. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17979` → after: `L17737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17737) · [Before (L17979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17979)

```diff
-       await (0, uB.r)(`lifeform ${HH} materials`);
+       await (0, pO.n)(`lifeform ${BB} materials`);
```

#### 2376. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17990` → after: `L17748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17748) · [Before (L17990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17990)

```diff
-       if (!(0, qH.M)(hH.getArmourMetadata)) {
+       if (!(0, gB.Q)(oB.getArmourMetadata)) {
```

#### 2377. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17997` → after: `L17755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17755) · [Before (L17997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17997)

```diff
-           return (0, HB.b)({
+           return (0, BO.c)({
```

#### 2378. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L17999` → after: `L17757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17757) · [Before (L17999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L17999)

```diff
-             NQ: LH,
+             eq: GB,
```

#### 2379. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18001` → after: `L17759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17759) · [Before (L18001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18001)

```diff
-               transparencyMode: SB.c.MATERIAL_OPAQUE,
+               transparencyMode: QO.d.MATERIAL_OPAQUE,
```

#### 2380. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18006` → after: `L17764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17764) · [Before (L18006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18006)

```diff
-                 samplingMode: tB.f.nearest,
+                 samplingMode: jO.g.nearest,
```

#### 2381. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18016` → after: `L17774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17774) · [Before (L18016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18016)

```diff
-               (0, zB.p)(HH, iH.e, {
+               (0, yO.w)(BB, sB.e, {
```

#### 2382. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18018` → after: `L17776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17776) · [Before (L18018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18018)

```diff
-               }), (0, JH.d)(HH, (0, nH.c)().mX), (0, yH.c)(HH), (0, zB.p)(HH, pH.h), (0, zB.J)(HH)
+               }), (0, vB.e)(BB, (0, cB.g)().UP), (0, tB.d)(BB), (0, yO.w)(BB, xB.f), (0, yO.K)(BB)
```

#### 2383. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18022` → after: `L17780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17780) · [Before (L18022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18022)

```diff
-         }(`${HH}ArmourMaterial`, LH, BH), kH = LH.textureOffsets, mH = LH.isArmourVisibleByDefault
+         }(`${BB}ArmourMaterial`, GB, OB), kB = GB.textureOffsets, dB = GB.isArmourVisibleByDefault
```

#### 2384. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18026` → after: `L17784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17784) · [Before (L18026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18026)

```diff
-         const rH = await (0, BB.h)(LH, AH, {}).catch((HH => (console.error(`Failed to parse pre-reconstructed model for ${BH} - falling back to runtime reconstruction.`, HH, ...null !== HH && void 0 !== HH && HH.innerError ? [HH.innerError] : []), null)));
+         const DB = await (0, OO.g)(GB, YB, {}).catch((BB => (console.error(`Failed to parse pre-reconstructed model for ${OB} - falling back to runtime reconstruction.`, BB, ...null !== BB && void 0 !== BB && BB.innerError ? [BB.innerError] : []), null)));
```

#### 2385. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18028-L18030` → after: `L17786-L17788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17786-L17788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17786-L17788) · [Before (L18028-L18030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18028-L18030)

```diff
-         await (0, uB.r)(`lifeform ${HH} model`), rH.addAllToScene();
-         const SH = (0, AB.h)(rH, AH);
-         if (!SH) return rH.dispose(), console.error(`Corrupt pre-reconstructed model for ${BH} (no __root__) - falling back to runtime reconstruction.`), null;
+         await (0, pO.n)(`lifeform ${BB} model`), DB.addAllToScene();
+         const QB = (0, YO.d)(DB, YB);
+         if (!QB) return DB.dispose(), console.error(`Corrupt pre-reconstructed model for ${OB} (no __root__) - falling back to runtime reconstruction.`), null;
```

#### 2386. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18034` → after: `L17792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17792) · [Before (L18034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18034)

```diff
-         const LH = await (0, BB.h)("", BH, {
+         const GB = await (0, OO.g)("", OB, {
```

#### 2387. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18037` → after: `L17795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17795) · [Before (L18037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18037)

```diff
-         await (0, uB.r)(`lifeform ${HH} model`), fH = oH ? AB.d.reconstructModel(LH, oH.reconstructionSchema, BH, XH) : {
+         await (0, pO.n)(`lifeform ${BB} model`), mB = KB ? YO.c.reconstructModel(GB, KB.reconstructionSchema, OB, PB) : {
```

#### 2388. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18042-L18043` → after: `L17800-L17801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17800-L17801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17800-L17801) · [Before (L18042-L18043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18042-L18043)

```diff
-       await (0, uB.r)(`lifeform ${HH} meshes`);
-       const lH = (0, nH.c)(),
+       await (0, pO.n)(`lifeform ${BB} meshes`);
+       const IB = (0, cB.g)(),
```

#### 2389. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18045` → after: `L17803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17803) · [Before (L18045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18045)

```diff
-           mX: KH
+           UP: FB
```

#### 2390. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18047-L18048` → after: `L17805-L17806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17805-L17806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17805-L17806) · [Before (L18047-L18048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18047-L18048)

```diff
-         cH = KH.bR,
-         FH = SH || !KH.yu;
+         iB = FB.kF,
+         hB = QB || !FB.Dq;
```

#### 2391. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18051-L18052` → after: `L17809-L17810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17809-L17810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17809-L17810) · [Before (L18051-L18052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18051-L18052)

```diff
-         const HH = (0, ZH.f)(rH) ? bH : null !== (DH = null !== YH && void 0 !== YH && YH.includes(rH.name) ? OH : null) && void 0 !== DH ? DH : VH;
-         HH && FH && (SH ? BH.QrH(rH, !1) : KH.jR(rH)), (0, NH.n)(rH) || (0, NH.r)(rH, 1 / 512), rH.oR(), rH.material = HH, rH.sideOrientation = SB.c.CounterClockWiseSideOrientation, (0, hB.f)(rH) ? null !== uH && void 0 !== uH && uH.includes(rH.name) && (rH.noSunShadowVertices =  … [truncated]
+         const BB = (0, TB.j)(DB) ? fB : null !== (aB = null !== lB && void 0 !== lB && lB.includes(DB.name) ? UB : null) && void 0 !== aB ? aB : nB;
+         BB && hB && (QB ? OB.UDB(DB, !1) : FB.YL(DB)), (0, XB.u)(DB) || (0, XB.D)(DB, 1 / 512), DB.mF(), DB.material = BB, DB.sideOrientation = QO.d.CounterClockWiseSideOrientation, (0, oO.e)(DB) ? null !== pB && void 0 !== pB && pB.includes(DB.name) && (DB.noSunShadowVertices =  … [truncated]
```

#### 2392. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18055` → after: `L17813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17813) · [Before (L18055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18055)

```diff
-         ((0, hB.f)(rH) ? !rH.material : !rH.yN().meshes.includes(rH)) && 0 === rH.getChildMeshes().length && rH.vI(!1)
+         ((0, oO.e)(DB) ? !DB.material : !DB.JF().meshes.includes(DB)) && 0 === DB.getChildMeshes().length && DB.Zk(!1)
```

#### 2393. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18061` → after: `L17819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17819) · [Before (L18061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18061)

```diff
-           "ArmLeftMesh" === QH.name && QH.translate(rH.lu.LeftReadOnly, HH), "ArmRightMesh" === QH.name && QH.translate(rH.lu.RightReadOnly, HH), "HeadMesh" === QH.name && QH.translate(rH.lu.DownReadOnly, HH), "LegLeftMesh" === QH.name && QH.translate(rH.lu.UpReadOnly, HH), "LegR … [truncated]
+           "ArmLeftMesh" === qB.name && qB.translate(DB.Xp.LeftReadOnly, BB), "ArmRightMesh" === qB.name && qB.translate(DB.Xp.RightReadOnly, BB), "HeadMesh" === qB.name && qB.translate(DB.Xp.DownReadOnly, BB), "LegLeftMesh" === qB.name && qB.translate(DB.Xp.UpReadOnly, BB), "LegR … [truncated]
```

#### 2394. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18068` → after: `L17826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17826) · [Before (L18068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18068)

```diff
-         for (const rH of aH) rH.material && KH.jR(rH);
+         for (const DB of CB) DB.material && FB.YL(DB);
```

#### 2395. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18070` → after: `L17828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17828) · [Before (L18070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18070)

```diff
-         const HH = (0, ZH.k)("Player", "cape_cuboid_18_12.glb").replace("model/gltf-binary;", ""),
+         const BB = (0, TB.q)("Player", "cape_cuboid_18_12.glb").replace("model/gltf-binary;", ""),
```

#### 2396. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18077-L18079` → after: `L17835-L17837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17835-L17837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17835-L17837) · [Before (L18077-L18079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18077-L18079)

```diff
-           } = BH.jF();
-           if (rH.lu.DistanceSquared(HH.minimum, HH.maximum)) {
-             (0, NH.n)(BH) || (0, NH.r)(BH, 1 / 128), BH.name = "Cape", BH.bX = BH.bX.scale(.12), BH.jQ = !1, wH = BH;
+           } = OB.Gw();
+           if (DB.Xp.DistanceSquared(BB.minimum, BB.maximum)) {
+             (0, XB.u)(OB) || (0, XB.D)(OB, 1 / 128), OB.name = "Cape", OB.SP = OB.SP.scale(.12), OB.bq = !1, eB = OB;
```

#### 2397. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18086` → after: `L17844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17844) · [Before (L18086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18086)

```diff
-           NQ: BH,
+           eq: OB,
```

#### 2398. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18092` → after: `L17850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17850) · [Before (L18092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18092)

```diff
-           meshGroupsWithDifferentAtlases: Object.fromEntries(Object.entries(null !== (AH = hH.meshMetadata.meshGroupsWithDifferentAtlases) && void 0 !== AH ? AH : {}).map((BH => {
+           meshGroupsWithDifferentAtlases: Object.fromEntries(Object.entries(null !== (YB = oB.meshMetadata.meshGroupsWithDifferentAtlases) && void 0 !== YB ? YB : {}).map((OB => {
```

#### 2399. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18095` → after: `L17853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17853) · [Before (L18095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18095)

```diff
-               numTexturesInAtlas: "default" === AH.numTexturesInAtlas ? "Player" === tH ? CH : PH.s[HH].length : AH.numTexturesInAtlas
+               numTexturesInAtlas: "default" === YB.numTexturesInAtlas ? "Player" === jB ? JB : AB.p[BB].length : YB.numTexturesInAtlas
```

#### 2400. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18099` → after: `L17857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17857) · [Before (L18099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18099)

```diff
-         CB = SH ? `${HH}Preview` : HH;
+         JO = QB ? `${BB}Preview` : BB;
```

#### 2401. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18101` → after: `L17859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17859) · [Before (L18101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18101)

```diff
-         aX: 32,
+         CP: 32,
```

#### 2402. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18125` → after: `L17883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17883) · [Before (L18125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18125)

```diff
-       }), cH.setPickableForType(CB, !SH), cH.setCullableForType(CB, !SH), (0, LB.n)(dH), {
+       }), iB.setPickableForType(JO, !QB), iB.setCullableForType(JO, !QB), (0, GO.v)(bB), {
```

#### 2403. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18133-L18135` → after: `L17891-L17893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17891-L17893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17891-L17893) · [Before (L18133-L18135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18133-L18135)

```diff
-       return (0, HB.b)({
-         name: `${HH}SpriteSheet${SH?"":"WithVisibleBackFaces"}`,
-         NQ: BH,
+       return (0, BO.c)({
+         name: `${BB}SpriteSheet${QB?"":"WithVisibleBackFaces"}`,
+         eq: OB,
```

#### 2404. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18143` → after: `L17901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17901) · [Before (L18143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18143)

```diff
-             samplingMode: tB.f.nearest
+             samplingMode: jO.g.nearest
```

#### 2405. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18154` → after: `L17912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17912) · [Before (L18154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18154)

```diff
-           (0, aH.b)(HH, AH, AH, rH), (0, zB.p)(HH, sH.d), (0, JH.d)(HH, (0, nH.c)().mX), (0, yH.c)(HH), (0, zB.J)(HH)
+           (0, CB.e)(BB, YB, YB, DB), (0, yO.w)(BB, HB.c), (0, vB.e)(BB, (0, cB.g)().UP), (0, tB.d)(BB), (0, yO.K)(BB)
```

#### 2406. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18164-L18166` → after: `L17922-L17924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17922-L17924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17922-L17924) · [Before (L18164-L18166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18164-L18166)

```diff
-       const SH = (0, nH.c)().mX.bR,
-         hH = rH ? `${HH}Preview` : HH;
-       if (!SH.hasType(hH)) throw new Error(`Thin instance manager not set up for ${HH}`);
+       const QB = (0, cB.g)().UP.kF,
+         oB = DB ? `${BB}Preview` : BB;
+       if (!QB.hasType(oB)) throw new Error(`Thin instance manager not set up for ${BB}`);
```

#### 2407. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18168` → after: `L17926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17926) · [Before (L18168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18168)

```diff
-       LH && SH.vI(tH, !0);
+       GB && QB.Zk(jB, !0);
```

#### 2408. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18172` → after: `L17930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17930) · [Before (L18172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18172)

```diff
-       return SH.setGroupEnabled(tH, "armour", zH), zH && SH.setGroup(tH, "armour", "aArmourTint", 1, 1, 1, 0), QB[HH].meshApi.updateMeshOverlayColour(tH, new AH.d(0, 0, 0, 0)), QB[HH].meshApi.updateMeshLightLevels(tH, CB.c), SH.getScale(tH).scaleInPlace(BH), SH.setDirty(tH, 0), t … [truncated]
+       return QB.setGroupEnabled(jB, "armour", yB), yB && QB.setGroup(jB, "armour", "aArmourTint", 1, 1, 1, 0), qO[BB].meshApi.updateMeshOverlayColour(jB, new YB.e(0, 0, 0, 0)), qO[BB].meshApi.updateMeshLightLevels(jB, JO.d), QB.getScale(jB).scaleInPlace(OB), QB.setDirty(jB, 0), j … [truncated]
```

#### 2409. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18178` → after: `L17936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17936) · [Before (L18178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18178)

```diff
-         pT: TH
+         DW: VB
```

#### 2410. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18181` → after: `L17939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17939) · [Before (L18181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18181)

```diff
-       } = (0, rB.b)(HH), oH = BH.mX.bR, IH = PB(HH), fH = oH.yAH(IH, 0);
+       } = (0, DO.b)(BB), KB = OB.UP.kF, uB = AO(BB), mB = KB.yDB(uB, 0);
```

#### 2411. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18183` → after: `L17941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17941) · [Before (L18183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18183)

```diff
-       "humanoidMesh" === mH.type ? (eH = UH.p, qH = UH.l) : (eH = UH.i, qH = UH.g), TH.yR(LH, TH.names.moveState), TH.yR(LH, "genericLifeformState"), TH.yR(LH, "genericLifeform", {
+       "humanoidMesh" === dB.type ? (LB = SB.p, gB = SB.l) : (LB = SB.j, gB = SB.f), VB.RL(GB, VB.names.moveState), VB.RL(GB, "genericLifeformState"), VB.RL(GB, "genericLifeform", {
```

#### 2412. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18185-L18187` → after: `L17943-L17945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17943-L17945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17943-L17945) · [Before (L18185-L18187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18185-L18187)

```diff
-           kR: IH,
-           NAH: fH
-         }), TH.yR(LH, "pU"), TH.yR(LH, "meshRotation", {
+           uF: uB,
+           HYB: mB
+         }), VB.RL(GB, "cW"), VB.RL(GB, "meshRotation", {
```

#### 2413. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18193` → after: `L17951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17951) · [Before (L18193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18193)

```diff
-           modelYRotationOffset: null !== (rH = mH.modelYRotationOffset) && void 0 !== rH ? rH : 0
+           modelYRotationOffset: null !== (DB = dB.modelYRotationOffset) && void 0 !== DB ? DB : 0
```

#### 2414. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18196` → after: `L17954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17954) · [Before (L18196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18196)

```diff
-           const LH = HH.pT.iLH(BH),
+           const GB = BB.DW.yYB(OB),
```

#### 2415. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18198` → after: `L17956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17956) · [Before (L18198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18198)

```diff
-             rH = HH.wT.showPlayersInUnloadedChunks || !1;
+             DB = BB.xR.showPlayersInUnloadedChunks || !1;
```

#### 2416. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18202` → after: `L17960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17960) · [Before (L18202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18202)

```diff
-           HH.pT.yR(BH, "inLoadedChunk", {
+           BB.DW.RL(OB, "inLoadedChunk", {
```

#### 2417. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18204` → after: `L17962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17962) · [Before (L18204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18204)

```diff
-               SH = rH, hH || (AH.setBooleanType("inLoadedChunk", rH), BH !== HH.lF && (LH.isLifeformMeshEnabled = rH))
+               QB = DB, oB || (YB.setBooleanType("inLoadedChunk", DB), OB !== BB.EX && (GB.isLifeformMeshEnabled = DB))
```

#### 2418. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18208` → after: `L17966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17966) · [Before (L18208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18208)

```diff
-               hH = rH, hH ? (AH.setBooleanType("inLoadedChunk", !0), LH.isLifeformMeshEnabled = !0) : (AH.setBooleanType("inLoadedChunk", SH), BH !== HH.lF && (LH.isLifeformMeshEnabled = SH))
+               oB = DB, oB ? (YB.setBooleanType("inLoadedChunk", !0), GB.isLifeformMeshEnabled = !0) : (YB.setBooleanType("inLoadedChunk", QB), OB !== BB.EX && (GB.isLifeformMeshEnabled = QB))
```

#### 2419. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18210-L18211` → after: `L17968-L17969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17968-L17969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17968-L17969) · [Before (L18210-L18211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18210-L18211)

```diff
-             zH = cH.k.subscribe(`lifeformDisposed|${BH}`, (() => {
-               tH(), cH.k.unsubscribe(zH)
+             yB = iB.o.subscribe(`lifeformDisposed|${OB}`, (() => {
+               jB(), iB.o.unsubscribe(yB)
```

#### 2420. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18213-L18215` → after: `L17971-L17973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17971-L17973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17971-L17973) · [Before (L18213-L18215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18213-L18215)

```diff
-         }(BH, LH), TH.yR(LH, "updateWalkingState", {
-           kR: IH,
-           NAH: fH,
+         }(OB, GB), VB.RL(GB, "updateWalkingState", {
+           uF: uB,
+           HYB: mB,
```

#### 2421. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18217-L18226` → after: `L17975-L17984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17975-L17984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17975-L17984) · [Before (L18217-L18226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18217-L18226)

```diff
-         }), TH.yR(LH, TH.names[mH.type], {
-           kR: IH,
-           NAH: fH,
-           heldItemPositionParams: null !== (SH = mH.heldItemPositionParams) && void 0 !== SH ? SH : {},
-           maxWalkingAngleOverride: null !== (XH = mH.walkingLegSwingAngle) && void 0 !== XH ? XH : null
-         }), TH.yR(LH, "animator", {
-           kR: IH,
-           NAH: fH,
-           modelLifeformType: null !== (GH = mH.lifeformTypeForModelOverride) && void 0 !== GH ? GH : HH
-         }), YB.g.hasAnimation(HH) && TH.yR(LH, "rigAnimation", {
+         }), VB.RL(GB, VB.names[dB.type], {
+           uF: uB,
+           HYB: mB,
+           heldItemPositionParams: null !== (QB = dB.heldItemPositionParams) && void 0 !== QB ? QB : {},
+           maxWalkingAngleOverride: null !== (PB = dB.walkingLegSwingAngle) && void 0 !== PB ? PB : null
+         }), VB.RL(GB, "animator", {
+           uF: uB,
+           HYB: mB,
+           modelLifeformType: null !== (zB = dB.lifeformTypeForModelOverride) && void 0 !== zB ? zB : BB
+         }), lO.e.hasAnimation(BB) && VB.RL(GB, "rigAnimation", {
```

#### 2422. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18228` → after: `L17986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17986) · [Before (L18228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18228)

```diff
-           kR: IH
+           uF: uB
```

#### 2423. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18232-L18233` → after: `L17990-L17991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17990-L17991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17990-L17991) · [Before (L18232-L18233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18232-L18233)

```diff
-             pT: AH
-           } = BH, rH = (0, rB.b)(HH), SH = AH.iLH(LH), zH = AH.getState(LH, AH.names.lX);
+             DW: YB
+           } = OB, DB = (0, DO.b)(BB), QB = YB.yYB(GB), yB = YB.getState(GB, YB.names.KP);
```

#### 2424. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18236` → after: `L17994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17994) · [Before (L18236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18236)

```diff
-               SH.meshEnabledCombinator.setBooleanType(HH, BH), AH.getState(LH, AH.names.lX).enabledCombinator.setBooleanType(HH, BH)
+               QB.meshEnabledCombinator.setBooleanType(BB, OB), YB.getState(GB, YB.names.KP).enabledCombinator.setBooleanType(BB, OB)
```

#### 2425. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18241` → after: `L17999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R17999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L17999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L17999) · [Before (L18241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18241)

```diff
-                 BH.mX.bR.setVisibility(SH.kR, HH)
+                 OB.UP.kF.setVisibility(QB.uF, BB)
```

#### 2426. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18243` → after: `L18001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18001) · [Before (L18243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18243)

```diff
-               const tH = (0, nH.b)().getFollowingEntities(LH);
+               const jB = (0, cB.d)().getFollowingEntities(GB);
```

#### 2427. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18245` → after: `L18003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18003) · [Before (L18245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18245)

```diff
-                 const rH = AH.VLH(LH);
+                 const DB = YB.iGB(GB);
```

#### 2428. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18248` → after: `L18006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18006) · [Before (L18248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18248)

```diff
-                     kR: LH
+                     uF: GB
```

#### 2429. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18251-L18252` → after: `L18009-L18010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18009-L18010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18009-L18010) · [Before (L18251-L18252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18251-L18252)

```diff
-                     BH.mX.bR.vI(LH, HH)
-                   } else rH.mesh.name !== kH.d.SKYBOX && (rH.mesh.isVisible = HH)
+                     OB.UP.kF.Zk(GB, BB)
+                   } else DB.mesh.name !== kB.e.SKYBOX && (DB.mesh.isVisible = BB)
```

#### 2430. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18255` → after: `L18013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18013) · [Before (L18255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18255)

```diff
-               AH.getState(LH, AH.names.lX).enabledCombinator.setBooleanType("visible", HH)
+               YB.getState(GB, YB.names.KP).enabledCombinator.setBooleanType("visible", BB)
```

#### 2431. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18259` → after: `L18017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18017) · [Before (L18259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18259)

```diff
-                 zH = BH.pT.getState((0, hH.b)(LH), rH.meshMetadata.type);
+                 yB = OB.DW.getState((0, oB.b)(GB), DB.meshMetadata.type);
```

#### 2432. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18261` → after: `L18019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18019) · [Before (L18261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18261)

```diff
-               const CH = (0, nH.c)().mX.bR,
+               const JB = (0, cB.g)().UP.kF,
```

#### 2433. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18263` → after: `L18021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18021) · [Before (L18263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18263)

```diff
-                   kR: EH
+                   uF: MB
```

#### 2434. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18266` → after: `L18024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18024) · [Before (L18266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18266)

```diff
-               const XH = BH.pT.getState((0, hH.b)(LH), "animator"),
+               const PB = OB.DW.getState((0, oB.b)(GB), "animator"),
```

#### 2435. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18268` → after: `L18026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18026) · [Before (L18268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18268)

```diff
-                 uH = GH ? YH.l : CH.getNodeNames(EH);
+                 pB = zB ? lB.m : JB.getNodeNames(MB);
```

#### 2436. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18273` → after: `L18031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18031) · [Before (L18273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18273)

```diff
-                   LH = null !== (QH = SH[HH]) && void 0 !== QH ? QH : [1, 1, 1];
+                   GB = null !== (qB = QB[BB]) && void 0 !== qB ? qB : [1, 1, 1];
```

#### 2437. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18277` → after: `L18035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18035) · [Before (L18277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18277)

```diff
-             GH = BH.mF[BH.lF][LH];
+             zB = OB.FX[OB.EX][GB];
```

#### 2438. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18279` → after: `L18037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18037) · [Before (L18279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18279)

```diff
-           const uH = cH.k.subscribe(`otherEntitySettingsClientifiedEId|${LH}|_isAlive`, (HH => {
+           const pB = iB.o.subscribe(`otherEntitySettingsClientifiedEId|${GB}|_isAlive`, (BB => {
```

#### 2439. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18282` → after: `L18040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18040) · [Before (L18282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18282)

```diff
-             QH = cH.k.subscribe(`otherEntitySettingsClientifiedEId|${LH}|canSee`, (HH => {
+             qB = iB.o.subscribe(`otherEntitySettingsClientifiedEId|${GB}|canSee`, (BB => {
```

#### 2440. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18285` → after: `L18043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18043) · [Before (L18285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18285)

```diff
-             WH = cH.k.subscribe(`otherEntitySettingsClientifiedEId|${LH}|_invisibleEffect`, (HH => {
+             ZB = iB.o.subscribe(`otherEntitySettingsClientifiedEId|${GB}|_invisibleEffect`, (BB => {
```

#### 2441. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18288` → after: `L18046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18046) · [Before (L18288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18288)

```diff
-             MH = cH.k.subscribe(`otherEntitySettingsClientifiedEId|${LH}|meshScaling`, (HH => {
+             NB = iB.o.subscribe(`otherEntitySettingsClientifiedEId|${GB}|meshScaling`, (BB => {
```

#### 2442. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18292` → after: `L18050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18050) · [Before (L18292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18292)

```diff
-           if (LH === BH.lF) {
+           if (GB === OB.EX) {
```

#### 2443. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18296-L18297` → after: `L18054-L18055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18054-L18055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18054-L18055) · [Before (L18296-L18297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18296-L18297)

```diff
-             xH = cH.k.subscribe(`otherEntitySettingsClientifiedEId|${BH.lF}|_isAlive`, (LH => {
-               const AH = BH.pT.xJ(BH.lF);
+             RB = iB.o.subscribe(`otherEntitySettingsClientifiedEId|${OB.EX}|_isAlive`, (GB => {
+               const YB = OB.DW.mC(OB.EX);
```

#### 2444. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18301` → after: `L18059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18059) · [Before (L18301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18301)

```diff
-               } else HH.gravityMultiplier = AH.gravityMultiplier, AH.gravityMultiplier = 0, AH.EW[0] = 0, AH.EW[1] = 0, AH.EW[2] = 0, AH.bZ[0] = 0, AH.bZ[1] = 0, AH.bZ[2] = 0, AH.eZ[0] = 0, AH.eZ[1] = 0, AH.eZ[2] = 0
+               } else BB.gravityMultiplier = YB.gravityMultiplier, YB.gravityMultiplier = 0, YB.lZ[0] = 0, YB.lZ[1] = 0, YB.lZ[2] = 0, YB.eT[0] = 0, YB.eT[1] = 0, YB.eT[2] = 0, YB.YC[0] = 0, YB.YC[1] = 0, YB.YC[2] = 0
```

#### 2445. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18304-L18305` → after: `L18062-L18063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18062-L18063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18062-L18063) · [Before (L18304-L18305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18304-L18305)

```diff
-           const vH = cH.k.subscribe(`lifeformDisposed|${LH}`, (() => {
-             cH.k.unsubscribe(uH), cH.k.unsubscribe(QH), cH.k.unsubscribe(WH), cH.k.unsubscribe(MH), cH.k.unsubscribe(xH), cH.k.unsubscribe(vH)
+           const WB = iB.o.subscribe(`lifeformDisposed|${GB}`, (() => {
+             iB.o.unsubscribe(pB), iB.o.unsubscribe(qB), iB.o.unsubscribe(ZB), iB.o.unsubscribe(NB), iB.o.unsubscribe(RB), iB.o.unsubscribe(WB)
```

#### 2446. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18307-L18308` → after: `L18065-L18066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18065-L18066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18065-L18066) · [Before (L18307-L18308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18307-L18308)

```diff
-         }(HH, BH, LH), TH.yR(LH, TH.names.mesh, {
-           CzH: "humanoidMesh" === mH.type ? HH => {
+         }(BB, OB, GB), VB.RL(GB, VB.names.mesh, {
+           WyB: "humanoidMesh" === dB.type ? BB => {
```

#### 2447. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18310` → after: `L18068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18068) · [Before (L18310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18310)

```diff
-             const rH = TH.ILH(LH),
+             const DB = VB.EGB(GB),
```

#### 2448. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18314` → after: `L18072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18072) · [Before (L18314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18314)

```diff
-               hH = null !== (AH = rH.ridingVehicleEId) && void 0 !== AH ? AH : null;
+               oB = null !== (YB = DB.ridingVehicleEId) && void 0 !== YB ? YB : null;
```

#### 2449. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18317-L18318` → after: `L18075-L18076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18075-L18076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18075-L18076) · [Before (L18317-L18318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18317-L18318)

```diff
-               const AH = BH.bloxd.getEntityHeading(null !== hH && void 0 !== hH ? hH : LH, !0);
-               lH().iQ(HH, SH, lH().ZERO, AH)
+               const YB = OB.bloxd.getEntityHeading(null !== oB && void 0 !== oB ? oB : GB, !0);
+               IB().sq(BB, QB, IB().ZERO, YB)
```

#### 2450. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18320` → after: `L18078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18078) · [Before (L18320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18320)

```diff
-             null !== hH && (0, wH.d)(BH, hH, HH)
+             null !== oB && (0, eB.c)(OB, oB, BB)
```

#### 2451. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18322-L18323` → after: `L18080-L18081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18080-L18081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18080-L18081) · [Before (L18322-L18323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18322-L18323)

```diff
-           kR: IH,
-           NAH: fH,
+           uF: uB,
+           HYB: mB,
```

#### 2452. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18325-L18329` → after: `L18083-L18087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18083-L18087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18083-L18087) · [Before (L18325-L18329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18325-L18329)

```diff
-           jQ: !1,
-           jAH: !1
-         }), TH.yR(LH, TH.names.cape);
-       const gH = (0, EH.b)(BH).getFloating((0, hH.b)(LH));
-       TH.yR(LH, "floating", gH ? {
+           bq: !1,
+           sYB: !1
+         }), VB.RL(GB, VB.names.cape);
+       const rB = (0, MB.c)(OB).getFloating((0, oB.b)(GB));
+       VB.RL(GB, "floating", rB ? {
```

#### 2453. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18331` → after: `L18089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18089) · [Before (L18331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18331)

```diff
-         ZB: gH.ZB
+         DB: rB.DB
```

#### 2454. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18333-L18335` → after: `L18091-L18093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18091-L18093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18091-L18093) · [Before (L18333-L18335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18333-L18335)

```diff
-       const NH = TH.iLH(LH).meshEnabledCombinator.getTotalBooleanVal();
-       if (oH.vI(IH, NH), oH.setEntityId(IH, LH), oH.setPickable(IH, (0, GB.g)(LH)), fB(HH)) {
-         TH.yR(LH, TH.names.meshAttachments);
+       const XB = VB.yYB(GB).meshEnabledCombinator.getTotalBooleanVal();
+       if (KB.Zk(uB, XB), KB.setEntityId(uB, GB), KB.setPickable(uB, (0, zO.l)(GB)), mO(BB)) {
+         VB.RL(GB, VB.names.meshAttachments);
```

#### 2455. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18345` → after: `L18103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18103) · [Before (L18345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18345)

```diff
-         if (zH.e[LH]) {
+         if (yB.d[GB]) {
```

#### 2456. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18348` → after: `L18106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18106) · [Before (L18348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18348)

```diff
-           for (const HH of VH.r) zH.e[LH][HH] && AH.updatePlayerCosmetic(BH, IH, HH, zH.e[LH][HH])
+           for (const BB of nB.t) yB.d[GB][BB] && YB.updatePlayerCosmetic(OB, uB, BB, yB.d[GB][BB])
```

#### 2457. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18350-L18351` → after: `L18108-L18109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18108-L18109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18108-L18109) · [Before (L18350-L18351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18350-L18351)

```diff
-         LH === BH.lF || null !== (RH = (0, nH.b)().client) && void 0 !== RH && RH.isReplayMode() || (TH.yR(LH, "proximityHide"), cH.k.AX(`otherPlayerTeleported|${LH}`, {
-           pos: BH.pT.hT(LH)
+         GB === OB.EX || null !== (wB = (0, cB.d)().client) && void 0 !== wB && wB.isReplayMode() || (VB.RL(GB, "proximityHide"), iB.o.tM(`otherPlayerTeleported|${GB}`, {
+           pos: OB.DW.pR(GB)
```

#### 2458. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18354-L18355` → after: `L18112-L18113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18112-L18113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18112-L18113) · [Before (L18354-L18355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18354-L18355)

```diff
-       TH.getState(LH, TH.names.lX).size = OH.b, TH.yR(LH, "proximityFade", {
-         serverOpacity: null !== (uH = null === (QH = BH.mF[BH.lF][LH]) || void 0 === QH ? void 0 : QH.opacity) && void 0 !== uH ? uH : 1
+       VB.getState(GB, VB.names.KP).size = UB.d, VB.RL(GB, "proximityFade", {
+         serverOpacity: null !== (pB = null === (qB = OB.FX[OB.EX][GB]) || void 0 === qB ? void 0 : qB.opacity) && void 0 !== pB ? pB : 1
```

#### 2459. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18358-L18359` → after: `L18116-L18117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18116-L18117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18116-L18117) · [Before (L18358-L18359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18358-L18359)

```diff
-       LH === BH.lF && (jH = BH.JBH, cH.k.subscribe("initInfoReceived", (() => {
-         jH = BH.JBH
+       GB === OB.EX && (EB = OB.QGB, iB.o.subscribe("initInfoReceived", (() => {
+         EB = OB.QGB
```

#### 2460. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18361` → after: `L18119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18119) · [Before (L18361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18361)

```diff
-       const FH = (0, nH.b)().E_(LH);
+       const hB = (0, cB.d)().E1(GB);
```

#### 2461. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18363` → after: `L18121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18121) · [Before (L18363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18363)

```diff
-       const DH = cH.k.subscribe("otherEntitySettings|opacity", (HH => {
+       const aB = iB.o.subscribe("otherEntitySettings|opacity", (BB => {
```

#### 2462. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18369` → after: `L18127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18127) · [Before (L18369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18369)

```diff
-           const SH = BH.pT.rAH(LH);
+           const QB = OB.DW.pYB(GB);
```

#### 2463. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18372` → after: `L18130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18130) · [Before (L18372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18372)

```diff
-         ZH = cH.k.subscribe(`otherEntitySettingsClientifiedEId|${LH}|_invincible`, (HH => {
+         TB = iB.o.subscribe(`otherEntitySettingsClientifiedEId|${GB}|_invincible`, (BB => {
```

#### 2464. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18377` → after: `L18135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18135) · [Before (L18377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18377)

```diff
-         !HH && TH.aBH(LH, "flashingMeshOverlay") && TH.fn(LH, "flashingMeshOverlay"), HH && !TH.aBH(LH, "flashingMeshOverlay") && TH.yR(LH, "flashingMeshOverlay")
+         !BB && VB.YGB(GB, "flashingMeshOverlay") && VB.dL(GB, "flashingMeshOverlay"), BB && !VB.YGB(GB, "flashingMeshOverlay") && VB.RL(GB, "flashingMeshOverlay")
```

#### 2465. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18379-L18380` → after: `L18137-L18138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18137-L18138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18137-L18138) · [Before (L18379-L18380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18379-L18380)

```diff
-       dH(null === (WH = BH.mF[BH.lF][LH]) || void 0 === WH ? void 0 : WH._invincible);
-       const aH = cH.k.subscribe(`otherEntitySettingsClientifiedEId|${LH}|zIndex`, (HH => {
+       bB(null === (ZB = OB.FX[OB.EX][GB]) || void 0 === ZB ? void 0 : ZB._invincible);
+       const CB = iB.o.subscribe(`otherEntitySettingsClientifiedEId|${GB}|zIndex`, (BB => {
```

#### 2466. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18383-L18384` → after: `L18141-L18142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18141-L18142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18141-L18142) · [Before (L18383-L18384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18383-L18384)

```diff
-       oH.setRenderingGroupId(IH, null !== (MH = null === (xH = BH.mF[BH.lF][LH]) || void 0 === xH ? void 0 : xH.zIndex) && void 0 !== MH ? MH : 0);
-       const sH = cH.k.subscribe(`otherEntitySettingsClientifiedEId|${LH}|overlayColour`, (HH => {
+       KB.setRenderingGroupId(uB, null !== (NB = null === (RB = OB.FX[OB.EX][GB]) || void 0 === RB ? void 0 : RB.zIndex) && void 0 !== NB ? NB : 0);
+       const HB = iB.o.subscribe(`otherEntitySettingsClientifiedEId|${GB}|overlayColour`, (BB => {
```

#### 2467. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18391-L18392` → after: `L18149-L18150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18149-L18150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18149-L18150) · [Before (L18391-L18392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18391-L18392)

```diff
-           const BH = (0, bH.W)(HH);
-           rH = new AH.d(BH[0] / 255, BH[1] / 255, BH[2] / 255, .5)
+           const OB = (0, fB.Y)(BB);
+           DB = new YB.e(OB[0] / 255, OB[1] / 255, OB[2] / 255, .5)
```

#### 2468. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18394` → after: `L18152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18152) · [Before (L18394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18394)

```diff
-         BH.pT.ZLH(LH).overlayColourOverride = rH
+         OB.DW.YYB(GB).overlayColourOverride = DB
```

#### 2469. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18396-L18397` → after: `L18154-L18155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18154-L18155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18154-L18155) · [Before (L18396-L18397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18396-L18397)

```diff
-       JH(null !== (vH = null === (PH = BH.mF[BH.lF][LH]) || void 0 === PH ? void 0 : PH.overlayColour) && void 0 !== vH ? vH : null);
-       const iH = cH.k.subscribe(`entityScale|${LH}`, (AH => {
+       vB(null !== (WB = null === (AB = OB.FX[OB.EX][GB]) || void 0 === AB ? void 0 : AB.overlayColour) && void 0 !== WB ? WB : null);
+       const sB = iB.o.subscribe(`entityScale|${GB}`, (YB => {
```

#### 2470. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18404` → after: `L18162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18162) · [Before (L18404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18404)

```diff
-           tH = HH.pT.getState((0, hH.b)(BH), SH.meshMetadata.type);
+           jB = BB.DW.getState((0, oB.b)(OB), QB.meshMetadata.type);
```

#### 2471. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18407` → after: `L18165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18165) · [Before (L18407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18407)

```diff
-           kR: zH
+           uF: yB
```

#### 2472. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18412` → after: `L18170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18170) · [Before (L18412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18412)

```diff
-         } = (0, OH.c)(AH, LH), EH = HH.mX.bR, XH = (0, hH.b)(BH);
+         } = (0, UB.g)(YB, GB), MB = BB.UP.kF, PB = (0, oB.b)(OB);
```

#### 2473. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18415` → after: `L18173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18173) · [Before (L18415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18415)

```diff
-           const HH = EH.yAH(zH, 0).scale;
+           const BB = MB.yDB(yB, 0).scale;
```

#### 2474. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18418-L18420` → after: `L18176-L18178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18176-L18178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18176-L18178) · [Before (L18418-L18420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18418-L18420)

```diff
-         const YH = AH * (null !== (rH = SH.modelScale) && void 0 !== rH ? rH : 1);
-         HH.pT.getState(XH, "animator").setNodeOwnScale(0, GH[0] * YH, GH[1] * YH, GH[2] * YH);
-         const uH = HH.pT.getState(XH, HH.pT.names.lX);
+         const lB = YB * (null !== (DB = QB.modelScale) && void 0 !== DB ? DB : 1);
+         BB.DW.getState(PB, "animator").setNodeOwnScale(0, zB[0] * lB, zB[1] * lB, zB[2] * lB);
+         const pB = BB.DW.getState(PB, BB.DW.names.KP);
```

#### 2475. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18423-L18424` → after: `L18181-L18182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18181-L18182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18181-L18182) · [Before (L18423-L18424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18423-L18424)

```diff
-       const yH = cH.k.subscribe(`lifeformDisposed|${LH}`, (() => {
-         cH.k.unsubscribe(DH), cH.k.unsubscribe(ZH), cH.k.unsubscribe(aH), cH.k.unsubscribe(sH), cH.k.unsubscribe(iH), cH.k.unsubscribe(yH), LH !== BH.lF && delete VB[LH]
+       const tB = iB.o.subscribe(`lifeformDisposed|${GB}`, (() => {
+         iB.o.unsubscribe(aB), iB.o.unsubscribe(TB), iB.o.unsubscribe(CB), iB.o.unsubscribe(HB), iB.o.unsubscribe(sB), iB.o.unsubscribe(tB), GB !== OB.EX && delete nO[GB]
```

#### 2476. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18426` → after: `L18184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18184) · [Before (L18426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18426)

```diff
-       cH.k.AX(`lifeformSetupFinished|${LH}`)
+       iB.o.tM(`lifeformSetupFinished|${GB}`)
```

#### 2477. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18432-L18434` → after: `L18190-L18192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18190-L18192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18190-L18192) · [Before (L18432-L18434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18432-L18434)

```diff
-         Ah: LH,
-         rh: AH,
-         Sh: rH
+         nB: GB,
+         UB: YB,
+         fB: DB
```

#### 2478. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18437-L18438` → after: `L18195-L18196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18195-L18196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18195-L18196) · [Before (L18437-L18438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18437-L18438)

```diff
-       zH.e[LH] = {
-         ...zH.e[LH],
+       yB.d[GB] = {
+         ...yB.d[GB],
```

#### 2479. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18440-L18441` → after: `L18198-L18199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18198-L18199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18198-L18199) · [Before (L18440-L18441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18440-L18441)

```diff
-       }, zH.e[SH] = {
-         ...zH.e[SH],
+       }, yB.d[QB] = {
+         ...yB.d[QB],
```

#### 2480. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18444` → after: `L18202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18202) · [Before (L18444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18444)

```diff
-       const tH = (0, nH.c)().pT.BAH(SH);
+       const jB = (0, cB.g)().DW.zYB(QB);
```

#### 2481. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18446-L18448` → after: `L18204-L18206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18204-L18206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18204-L18206) · [Before (L18446-L18448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18446-L18448)

```diff
-       const CH = null !== (BH = tH.kR) && void 0 !== BH ? BH : null;
-       null !== CH && QB ? QB.Player.meshApi.updatePlayerCosmetic(SH, tH.kR, AH, rH) : console.error(`Error: ${SH} not ready for updateIngamePlayerCustomisation, ${null!==CH} ${!!QB}`)
-     }(0, SH.onGameReset)(zH.f);
+       const JB = null !== (OB = jB.uF) && void 0 !== OB ? OB : null;
+       null !== JB && qO ? qO.Player.meshApi.updatePlayerCosmetic(QB, jB.uF, YB, DB) : console.error(`Error: ${QB} not ready for updateIngamePlayerCustomisation, ${null!==JB} ${!!qO}`)
+     }(0, QB.onGameReset)(yB.e);
```

#### 2482. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18454` → after: `L18212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18212) · [Before (L18454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18454)

```diff
-       return null !== (BH = VB[(0, hH.b)(HH)]) && void 0 !== BH ? BH : {}
+       return null !== (OB = nO[(0, oB.b)(BB)]) && void 0 !== OB ? OB : {}
```

#### 2483. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18459` → after: `L18217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18217) · [Before (L18459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18459)

```diff
-       return null !== (BH = OB[(0, hH.b)(HH)]) && void 0 !== BH ? BH : 1
+       return null !== (OB = UO[(0, oB.b)(BB)]) && void 0 !== OB ? OB : 1
```

#### 2484. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18464` → after: `L18222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18222) · [Before (L18464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18464)

```diff
-       return null !== (BH = null === (LH = VB[(0, hH.b)(HH)]) || void 0 === LH || null === (AH = LH.Helmet) || void 0 === AH ? void 0 : AH.itemName) && void 0 !== BH ? BH : null
+       return null !== (OB = null === (GB = nO[(0, oB.b)(BB)]) || void 0 === GB || null === (YB = GB.Helmet) || void 0 === YB ? void 0 : YB.itemName) && void 0 !== OB ? OB : null
```

#### 2485. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18470` → after: `L18228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18228) · [Before (L18470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18470)

```diff
-       const SH = (0, nH.c)(),
+       const QB = (0, cB.g)(),
```

#### 2486. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18479-L18481` → after: `L18237-L18239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18237-L18239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18237-L18239) · [Before (L18479-L18481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18479-L18481)

```diff
-       const zH = SH.pT.BAH(tH);
-       if (null === (null !== (rH = null === zH || void 0 === zH ? void 0 : zH.kR) && void 0 !== rH ? rH : null) || !QB) return;
-       const CH = (0, nH.b)().getLifeformType(tH),
+       const yB = QB.DW.zYB(jB);
+       if (null === (null !== (DB = null === yB || void 0 === yB ? void 0 : yB.uF) && void 0 !== DB ? DB : null) || !qO) return;
+       const JB = (0, cB.d)().getLifeformType(jB),
```

#### 2487. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18483-L18484` → after: `L18241-L18242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18241-L18242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18241-L18242) · [Before (L18483-L18484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18483-L18484)

```diff
-       if (!(EH instanceof dH.b)) return;
-       const XH = LH ? mH.q[LH] : void 0;
+       if (!(MB instanceof bB.d)) return;
+       const PB = GB ? dB.k[GB] : void 0;
```

#### 2488. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18488` → after: `L18246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18246) · [Before (L18488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18488)

```diff
-         const HH = LH ? (0, mH.n)(LH) : null,
+         const BB = GB ? (0, dB.j)(GB) : null,
```

#### 2489. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18498-L18499` → after: `L18256-L18257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18256-L18257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18256-L18257) · [Before (L18498-L18499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18498-L18499)

```diff
-         lF: HH
-       } = (0, nH.c)();
+         EX: BB
+       } = (0, cB.g)();
```

#### 2490. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18504` → after: `L18262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18262) · [Before (L18504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18504)

```diff
-   39011: (HH, BH, LH) => {
+   38798: (BB, OB, GB) => {
```

#### 2491. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18506` → after: `L18264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18264) · [Before (L18506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18506)

```diff
-       b: () => CH
+       e: () => JB
```

#### 2492. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18508-L18512` → after: `L18266-L18270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18266-L18270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18266-L18270) · [Before (L18508-L18512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18508-L18512)

```diff
-     var AH = LH(38071),
-       rH = LH(3038),
-       SH = LH(38331),
-       hH = LH(37961),
-       tH = LH(39019);
+     var YB = GB(37885),
+       DB = GB(3088),
+       QB = GB(38167),
+       oB = GB(37771),
+       jB = GB(38801);
```

#### 2493. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18526` → after: `L18284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18284) · [Before (L18526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18526)

```diff
-           if (void 0 !== LH[zH.name]) zH.uF("aAtlasIdx1", 1), zH.uF("aArmourTint", 4), zH.uF("aEnchantmentColour", 3), zH.uF("aEnchantmentSpeed", 1), zH.kF.aAtlasIdx1 = 0, zH.kF.aArmourTint = new AH.d(1, 1, 1, 0), zH.kF.aEnchantmentColour = new AH.Color3(0, 0, 0), zH.kF.aEnchantm … [truncated]
+           if (void 0 !== GB[yB.name]) yB.BX("aAtlasIdx1", 1), yB.BX("aArmourTint", 4), yB.BX("aEnchantmentColour", 3), yB.BX("aEnchantmentSpeed", 1), yB.yX.aAtlasIdx1 = 0, yB.yX.aArmourTint = new YB.e(1, 1, 1, 0), yB.yX.aEnchantmentColour = new YB.Color3(0, 0, 0), yB.yX.aEnchantm … [truncated]
```

#### 2494. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18528-L18530` → after: `L18286-L18288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18286-L18288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18286-L18288) · [Before (L18528-L18530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18528-L18530)

```diff
-             const HH = (0, tH.h)(rH.length);
-             for (let BH = 1; BH <= HH; BH++) zH.uF((0, tH.c)(BH), 4);
-             for (let BH = 1; BH <= HH; BH++) zH.kF[(0, tH.c)(BH)] = hH.Vector4.FromArray(rH, 4 * (BH - 1))
+             const BB = (0, jB.k)(DB.length);
+             for (let OB = 1; OB <= BB; OB++) yB.BX((0, jB.i)(OB), 4);
+             for (let OB = 1; OB <= BB; OB++) yB.yX[(0, jB.i)(OB)] = oB.Vector4.FromArray(DB, 4 * (OB - 1))
```

#### 2495. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18532` → after: `L18290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18290) · [Before (L18532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18532)

```diff
-           zH.uF("aOpacity", 1), zH.kF.aOpacity = 1, zH.uF("aLightLevels", 4), zH.kF.aLightLevels = (0, SH.m)()
+           yB.BX("aOpacity", 1), yB.yX.aOpacity = 1, yB.BX("aLightLevels", 4), yB.yX.aLightLevels = (0, QB.m)()
```

#### 2496. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18536` → after: `L18294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18294) · [Before (L18536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18536)

```diff
-         const LH = (0, rH.c)().mX.bR;
+         const GB = (0, DB.g)().UP.kF;
```

#### 2497. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18541` → after: `L18299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18299) · [Before (L18541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18541)

```diff
-         (0, rH.c)().mX.bR.setGroupEnabled(HH, BH, LH)
+         (0, DB.g)().UP.kF.setGroupEnabled(BB, OB, GB)
```

#### 2498. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18544-L18545` → after: `L18302-L18303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18302-L18303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18302-L18303) · [Before (L18544-L18545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18544-L18545)

```diff
-         const LH = (0, rH.c)().mX.bR;
-         LH.set(HH, "aOpacity", BH), LH.sF(HH, "aOpacity", BH)
+         const GB = (0, DB.g)().UP.kF;
+         GB.set(BB, "aOpacity", OB), GB.Jw(BB, "aOpacity", OB)
```

#### 2499. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18548-L18549` → after: `L18306-L18307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18306-L18307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18306-L18307) · [Before (L18548-L18549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18548-L18549)

```diff
-         const LH = (0, rH.c)().mX.bR;
-         LH.set(HH, "aLightLevels", BH), LH.sF(HH, "aLightLevels", BH)
+         const GB = (0, DB.g)().UP.kF;
+         GB.set(BB, "aLightLevels", OB), GB.Jw(BB, "aLightLevels", OB)
```

#### 2500. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18552` → after: `L18310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18310) · [Before (L18552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18552)

```diff
-         const LH = (0, rH.c)().mX.bR;
+         const GB = (0, DB.g)().UP.kF;
```

#### 2501. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18558-L18559` → after: `L18316-L18317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18316-L18317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18316-L18317) · [Before (L18558-L18559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18558-L18559)

```diff
-           } = (0, tH.g)(Number(AH));
-           this.playerAtlasVec4s[HH][rH - 1][SH] = BH[AH], LH.setGroup(HH, "notArmour", `aAtlasIdx${rH}`, this.playerAtlasVec4s[HH][rH - 1])
+           } = (0, jB.j)(Number(YB));
+           this.playerAtlasVec4s[BB][DB - 1][QB] = OB[YB], GB.setGroup(BB, "notArmour", `aAtlasIdx${DB}`, this.playerAtlasVec4s[BB][DB - 1])
```

#### 2502. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18564` → after: `L18322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18322) · [Before (L18564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18564)

```diff
-   39002: (HH, BH, LH) => {
+   38796: (BB, OB, GB) => {
```

#### 2503. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18566` → after: `L18324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18324) · [Before (L18566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18566)

```diff
-       b: () => MH
+       d: () => NB
```

#### 2504. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18568` → after: `L18326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18326) · [Before (L18568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18568)

```diff
-     var AH = LH(330),
+     var YB = GB(363),
```

#### 2505. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18570-L18580` → after: `L18328-L18338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18328-L18338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18328-L18338) · [Before (L18570-L18580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18570-L18580)

```diff
-       SH = LH(3549),
-       hH = LH(38729),
-       tH = LH(2339),
-       zH = LH(39011),
-       CH = LH(3038),
-       EH = LH(317),
-       XH = LH(39022),
-       GH = LH(2760),
-       YH = LH(37945),
-       uH = LH(38450),
-       QH = LH(38726);
+       QB = GB(3622),
+       oB = GB(38545),
+       jB = GB(2392),
+       yB = GB(38798),
+       JB = GB(3088),
+       MB = GB(353),
+       PB = GB(38805),
+       zB = GB(2787),
+       lB = GB(37763),
+       pB = GB(38275),
+       qB = GB(38542);
```

#### 2506. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18582` → after: `L18340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18340) · [Before (L18582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18582)

```diff
-     class MH extends zH.b {
+     class NB extends yB.e {
```

#### 2507. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18590-L18592` → after: `L18348-L18350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18348-L18350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18348-L18350) · [Before (L18590-L18592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18590-L18592)

```diff
-         const SH = (0, tH.h)(LH, AH);
-         if (!SH) return void console.error(`Error: ${AH} not a valid cosmetic of type ${LH}`);
-         const hH = (0, CH.c)();
+         const QB = (0, jB.n)(GB, YB);
+         if (!QB) return void console.error(`Error: ${YB} not a valid cosmetic of type ${GB}`);
+         const oB = (0, JB.g)();
```

#### 2508. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18594` → after: `L18352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18352) · [Before (L18594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18594)

```diff
-         const EH = XH.d.indexOf(LH);
+         const MB = PB.e.indexOf(GB);
```

#### 2509. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18597` → after: `L18355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18355) · [Before (L18597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18597)

```diff
-           const HH = null !== (QH = SH.atlasIdx) && void 0 !== QH ? QH : (0, tH.h)(LH, `${LH}_none`).atlasIdx;
+           const BB = null !== (qB = QB.atlasIdx) && void 0 !== qB ? qB : (0, jB.n)(GB, `${GB}_none`).atlasIdx;
```

#### 2510. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18604` → after: `L18362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18362) · [Before (L18604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18604)

```diff
-             pT: BH
+             DW: OB
```

#### 2511. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18617-L18619` → after: `L18375-L18377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18375-L18377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18375-L18377) · [Before (L18617-L18619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18617-L18619)

```diff
-         const zH = (0, CH.c)(),
-           XH = zH.pT.BAH(HH);
-         if (!XH) return void console.error(`Error: ${HH} not ready for updatePlayerArmour, ${XH}`);
+         const yB = (0, JB.g)(),
+           PB = yB.DW.zYB(BB);
+         if (!PB) return void console.error(`Error: ${BB} not ready for updatePlayerArmour, ${PB}`);
```

#### 2512. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18621` → after: `L18379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18379) · [Before (L18621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18621)

```diff
-           YH = zH.mX.bR,
+           lB = yB.UP.kF,
```

#### 2513. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18623` → after: `L18381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18381) · [Before (L18623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18623)

```diff
-             kR: uH
+             uF: pB
```

#### 2514. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18629` → after: `L18387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18387) · [Before (L18629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18629)

```diff
-             YH.setNode(uH, HH, "aAtlasIdx1", SH.g[LH]);
+             lB.setNode(pB, BB, "aAtlasIdx1", QB.d[GB]);
```

#### 2515. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18632` → after: `L18390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18390) · [Before (L18632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18632)

```diff
-             const tH = null !== (WH = hH.m[rH]) && void 0 !== WH ? WH : hH.m.None;
+             const jB = null !== (ZB = oB.q[DB]) && void 0 !== ZB ? ZB : oB.q.None;
```

#### 2516. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18634` → after: `L18392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18392) · [Before (L18634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18634)

```diff
-             const zH = null !== (MH = EH.jb[rH]) && void 0 !== MH ? MH : EH.jb.None;
+             const yB = null !== (NB = MB.rb[DB]) && void 0 !== NB ? NB : MB.rb.None;
```

#### 2517. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18641` → after: `L18399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18399) · [Before (L18641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18641)

```diff
-         const LH = (0, CH.c)(),
+         const GB = (0, JB.g)(),
```

#### 2518. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18643` → after: `L18401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18401) · [Before (L18643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18643)

```diff
-             pT: AH
+             DW: YB
```

#### 2519. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18645-L18647` → after: `L18403-L18405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18403-L18405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18403-L18405) · [Before (L18645-L18647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18645-L18647)

```diff
-           SH = HH === LH.lF ? AH.A4(HH).S_ : AH.hT(HH),
-           hH = HH === LH.lF ? rH().ZERO : LH.DG,
-           tH = LH.mX.bR;
+           QB = BB === GB.EX ? YB.f4(BB).Y1 : YB.pR(BB),
+           oB = BB === GB.EX ? DB().ZERO : GB.Tz,
+           jB = GB.UP.kF;
```

#### 2520. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18652` → after: `L18410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18410) · [Before (L18652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18652)

```diff
-           SH = HH.yAH(BH, 0);
+           QB = BB.yDB(OB, 0);
```

#### 2521. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18680` → after: `L18438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18438) · [Before (L18680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18680)

```diff
-   39035: (HH, BH, LH) => {
+   38812: (BB, OB, GB) => {
```

#### 2522. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18684-L18691` → after: `L18442-L18449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18442-L18449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18442-L18449) · [Before (L18684-L18691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18684-L18691)

```diff
-     var AH = LH(39334),
-       rH = LH(39342),
-       SH = LH(37633),
-       hH = LH(38970),
-       tH = LH(39040),
-       zH = LH(18),
-       CH = LH(38048),
-       EH = LH(38444);
+     var YB = GB(39123),
+       DB = GB(39127),
+       QB = GB(37452),
+       oB = GB(38771),
+       jB = GB(38816),
+       yB = GB(25),
+       JB = GB(37857),
+       MB = GB(38272);
```

#### 2523. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18694` → after: `L18452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18452) · [Before (L18694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18694)

```diff
-         this.bloxd = HH, this.eId = BH, this.lifeformType = void 0, this.bG = void 0, this.canAttackSub = void 0, this.interactableSub = void 0, this.multilineTextBoxSub = void 0, this.lifeformType = LH, this.bG = HH.bG
+         this.bloxd = BB, this.eId = OB, this.lifeformType = void 0, this.kz = void 0, this.canAttackSub = void 0, this.interactableSub = void 0, this.multilineTextBoxSub = void 0, this.lifeformType = GB, this.kz = BB.kz
```

#### 2524. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18698` → after: `L18456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18456) · [Before (L18698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18698)

```diff
-         !this.bloxd.getEntityName(this.eId) && BH.defaultName && this.bloxd.setEntityName(this.eId, BH.defaultName), this.bG.pT.add([HH.x, HH.y, HH.z], BH.physicsBodyDimensions.width, BH.physicsBodyDimensions.height, null, null, !1, !0, this.eId), this.bG.pT.yR(this.eId, this.bG. … [truncated]
+         !this.bloxd.getEntityName(this.eId) && OB.defaultName && this.bloxd.setEntityName(this.eId, OB.defaultName), this.kz.DW.add([BB.x, BB.y, BB.z], OB.physicsBodyDimensions.width, OB.physicsBodyDimensions.height, null, null, !1, !0, this.eId), this.kz.DW.RL(this.eId, this.kz. … [truncated]
```

#### 2525. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18701-L18704` → after: `L18459-L18462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18459-L18462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18459-L18462) · [Before (L18701-L18704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18701-L18704)

```diff
-           const LH = this.bG.mX.bR,
-             AH = null !== (HH = null === (BH = this.bG.pT.VLH(this.eId)) || void 0 === BH ? void 0 : BH.kR) && void 0 !== HH ? HH : null,
-             rH = (0, EH.g)(this.eId);
-           null === AH && console.error(`Error: ${this.eId} not ready for pickability change to ${rH}`), LH.setPickable(AH, rH)
+           const GB = this.kz.UP.kF,
+             YB = null !== (BB = null === (OB = this.kz.DW.iGB(this.eId)) || void 0 === OB ? void 0 : OB.uF) && void 0 !== BB ? BB : null,
+             DB = (0, MB.l)(this.eId);
+           null === YB && console.error(`Error: ${this.eId} not ready for pickability change to ${DB}`), GB.setPickable(YB, DB)
```

#### 2526. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18706` → after: `L18464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18464) · [Before (L18706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18706)

```diff
-         this.canAttackSub = zH.k.subscribe(`otherEntitySettings|${this.eId}|canAttack`, LH), this.interactableSub = zH.k.subscribe(`otherEntitySettings|${this.eId}|interactable`, LH), this.multilineTextBoxSub = (0, CH.o)(this.bG, this.eId), (0, hH.s)(this.lifeformType, this.bG, t … [truncated]
+         this.canAttackSub = yB.o.subscribe(`otherEntitySettings|${this.eId}|canAttack`, GB), this.interactableSub = yB.o.subscribe(`otherEntitySettings|${this.eId}|interactable`, GB), this.multilineTextBoxSub = (0, JB.w)(this.kz, this.eId), (0, oB.x)(this.lifeformType, this.kz, t … [truncated]
```

#### 2527. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18709` → after: `L18467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18467) · [Before (L18709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18709)

```diff
-         const LH = this.bG.pT.ILH(this.eId);
+         const GB = this.kz.DW.EGB(this.eId);
```

#### 2528. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18713-L18714` → after: `L18471-L18472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18471-L18472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18471-L18472) · [Before (L18713-L18714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18713-L18714)

```diff
-             if ("yRotation" === HH ? LH.heading = BH : void 0 !== LH[HH] && (LH[HH] = BH), "armSwinging" === HH && BH) {
-               const HH = this.bG.pT.BAH(this.eId);
+             if ("yRotation" === BB ? GB.heading = OB : void 0 !== GB[BB] && (GB[BB] = OB), "armSwinging" === BB && OB) {
+               const BB = this.kz.DW.zYB(this.eId);
```

#### 2529. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18716` → after: `L18474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18474) · [Before (L18716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18716)

```diff
-             } else if ("xRotation" === HH || "yRotation" === HH || "zRotation" === HH)(0, CH.q)(this.bG, this.eId, HH, BH);
+             } else if ("xRotation" === BB || "yRotation" === BB || "zRotation" === BB)(0, JB.x)(this.kz, this.eId, BB, OB);
```

#### 2530. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18719-L18720` → after: `L18477-L18478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18477-L18478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18477-L18478) · [Before (L18719-L18720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18719-L18720)

```diff
-               const HH = this.bG.pT.pLH(this.eId);
-               HH.networkedHeldItemName = BH, (0, tH.updateHeldItemState)(this.bG, HH)
+               const BB = this.kz.DW.JYB(this.eId);
+               BB.networkedHeldItemName = OB, (0, jB.updateHeldItemState)(this.kz, BB)
```

#### 2531. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L18722-L18723` → after: `L18480-L18481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R18480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L18480-L18481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/88.js#L18480-L18481) · [Before (L18722-L18723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/88.js#L18722-L18723)

```diff
-               const HH = this.bG.pT.pLH(this.eId);
-               HH.networkedHeldItemEnchantmentTier = BH, (0, tH.updateHeldItemState)(this.bG, HH)
+               const BB = this.kz.DW.JYB(this.eId);
+               BB.networkedHeldItemEnchantmentTier = OB, (0, jB.updateHeldItemState)(this.kz, BB)
```
