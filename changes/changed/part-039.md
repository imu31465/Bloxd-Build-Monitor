# Changed — Bundle Modifications Report (Part 039 / 069)

- **Updated at**: `2026-11-25T01:02 JST`
- **Part**: `39 / 69` (**374** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 038](part-038.md) · [Part 040 →](part-040.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (w4ddu.56408518 → sn3sfj.2522680a · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (153 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001)

#### 67. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1483` → after: `L1079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1079) · [Before (L1483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1483)

```diff
-       return "loadoutStatPotency" === CC.loadoutStatKind ? (0, VC.M)(CC.loadoutStatValue) : String(CC.loadoutStatValue)
+       return "loadoutStatPotency" === pp.loadoutStatKind ? (0, ii.V)(pp.loadoutStatValue) : String(pp.loadoutStatValue)
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1493` → after: `L1089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1089) · [Before (L1493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1493)

```diff
-       } = (0, WC.y)(), wC = ZC.loadoutOptionTiers, bC = null === (zC = wC[0]) || void 0 === zC ? void 0 : zC.loadoutTierStats.map((CC => CC.loadoutStatKind));
+       } = (0, Ap.H)(), op = cp.loadoutOptionTiers, Ip = null === (ip = op[0]) || void 0 === ip ? void 0 : ip.loadoutTierStats.map((pp => pp.loadoutStatKind));
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1509-L1510` → after: `L1105-L1106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1105-L1106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1105-L1106) · [Before (L1509-L1510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1509-L1510)

```diff
-               children: QC(`${vC}:loadoutTier`, {
-                 tier: (0, VC.M)(zC + 1)
+               children: Op(`${Rp}:loadoutTier`, {
+                 tier: (0, ii.V)(ip + 1)
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1520` → after: `L1116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1116) · [Before (L1520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1520)

```diff
-                 children: [QC(`${vC}:${CC}`), zC && (0, iC.jsx)("span", {
+                 children: [Op(`${Rp}:${pp}`), ip && (0, mp.jsx)("span", {
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1559` → after: `L1155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1155) · [Before (L1559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1559)

```diff
-       } = (0, WC.y)(), nC = zC.loadout, fC = wC.loadoutOptionOwnedTier, oC = wC.loadoutOptionTiers.length, qC = QC.loadoutSlotEquippedId === wC.loadoutOptionId, FC = fC < oC ? wC.loadoutOptionTiers[fC].loadoutTierCost : null, NC = null !== FC && zz(nC, FC), MC = wC.loadoutOptionI … [truncated]
+       } = (0, Ap.H)(), Sp = ip.loadout, xp = op.loadoutOptionOwnedTier, Lp = op.loadoutOptionTiers.length, Yp = Op.loadoutSlotEquippedId === op.loadoutOptionId, Dp = xp < Lp ? op.loadoutOptionTiers[xp].loadoutTierCost : null, Pp = null !== Dp && Oi(Sp, Dp), Wp = op.loadoutOptionI … [truncated]
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1564-L1565` → after: `L1160-L1161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1160-L1161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1160-L1161) · [Before (L1564-L1565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1564-L1565)

```diff
-           status: 0 === fC ? bC(`${vC}:loadoutLocked`) : oC > 1 ? bC(`${vC}:loadoutTier`, {
-             tier: (0, VC.M)(fC)
+           status: 0 === xp ? Ip(`${Rp}:loadoutLocked`) : Lp > 1 ? Ip(`${Rp}:loadoutTier`, {
+             tier: (0, ii.V)(xp)
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1587-L1588` → after: `L1183-L1184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1183-L1184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1183-L1184) · [Before (L1587-L1588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1587-L1588)

```diff
-               children: 0 === fC ? bC(`${vC}:loadoutUnlock`) : bC(`${vC}:loadoutUpgrade`, {
-                 tier: (0, VC.M)(fC + 1)
+               children: 0 === xp ? Ip(`${Rp}:loadoutUnlock`) : Ip(`${Rp}:loadoutUpgrade`, {
+                 tier: (0, ii.V)(xp + 1)
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1593-L1594` → after: `L1189-L1190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1189-L1190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1189-L1190) · [Before (L1593-L1594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1593-L1594)

```diff
-             children: bC(`${vC}:loadoutMaxed`)
-           }), fC > 0 && !qC && (0, iC.jsx)(gC.g, {
+             children: Ip(`${Rp}:loadoutMaxed`)
+           }), xp > 0 && !Yp && (0, mp.jsx)(yp.f, {
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1599` → after: `L1195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1195) · [Before (L1599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1599)

```diff
-             children: bC(`${vC}:loadoutEquip`)
+             children: Ip(`${Rp}:loadoutEquip`)
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1613` → after: `L1209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1209) · [Before (L1613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1613)

```diff
-       } = (0, WC.y)(), bC = zC.loadout, nC = wz(bC), fC = QC.loadoutPerkId, oC = xz();
+       } = (0, Ap.H)(), Ip = ip.loadout, Sp = Si(Ip), xp = Op.loadoutPerkId, Lp = ji();
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1618` → after: `L1214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1214) · [Before (L1618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1618)

```diff
-           status: QC.loadoutPerkOwned ? null : wC(`${vC}:loadoutLocked`),
+           status: Op.loadoutPerkOwned ? null : op(`${Rp}:loadoutLocked`),
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1637` → after: `L1233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1233) · [Before (L1637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1637)

```diff
-               children: wC(`${vC}:loadoutUnlock`)
+               children: op(`${Rp}:loadoutUnlock`)
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1639` → after: `L1235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1235) · [Before (L1639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1639)

```diff
-           }), QC.loadoutPerkOwned && !QC.loadoutPerkEquipped && (0, iC.jsx)(gC.g, {
+           }), Op.loadoutPerkOwned && !Op.loadoutPerkEquipped && (0, mp.jsx)(yp.f, {
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1644` → after: `L1240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1240) · [Before (L1644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1644)

```diff
-             children: wC(`${vC}:loadoutEquip`)
+             children: op(`${Rp}:loadoutEquip`)
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1647-L1648` → after: `L1243-L1244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1243-L1244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1243-L1244) · [Before (L1647-L1648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1647-L1648)

```diff
-             children: wC(`${vC}:loadoutSocketsFullHint`)
-           }), QC.loadoutPerkEquipped && (0, iC.jsx)(gC.O, {
+             children: op(`${Rp}:loadoutSocketsFullHint`)
+           }), Op.loadoutPerkEquipped && (0, mp.jsx)(yp.S, {
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1653` → after: `L1249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1249) · [Before (L1653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1653)

```diff
-             children: wC(`${vC}:loadoutUnequip`)
+             children: op(`${Rp}:loadoutUnequip`)
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1669` → after: `L1265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1265) · [Before (L1669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1669)

```diff
-       } = (0, WC.y)();
+       } = (0, Ap.H)();
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1682` → after: `L1278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1278) · [Before (L1682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1682)

```diff
-           children: nC(`${vC}:loadoutEquippedBadge`)
+           children: Sp(`${Rp}:loadoutEquippedBadge`)
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1741` → after: `L1337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1337) · [Before (L1741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1741)

```diff
-       } = (0, WC.y)(), wC = zC.loadout, bC = xz();
+       } = (0, Ap.H)(), op = ip.loadout, Ip = ji();
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1744` → after: `L1340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1340) · [Before (L1744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1744)

```diff
-         "aria-label": QC(`${vC}:loadoutKit`),
+         "aria-label": Op(`${Rp}:loadoutKit`),
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1792` → after: `L1388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1388) · [Before (L1792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1792)

```diff
-       } = (0, WC.y)(), wC = zC.loadout, bC = wC.loadoutPerks.filter((CC => CC.loadoutPerkEquipped)), nC = xz();
+       } = (0, Ap.H)(), op = ip.loadout, Ip = op.loadoutPerks.filter((pp => pp.loadoutPerkEquipped)), Sp = ji();
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1809` → after: `L1405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1405) · [Before (L1809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1809)

```diff
-             children: QC(`${vC}:loadoutPerkCount`, {
+             children: Op(`${Rp}:loadoutPerkCount`, {
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1832` → after: `L1428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1428) · [Before (L1832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1832)

```diff
-                 children: ZC ? ZC.loadoutPerkName : QC(`${vC}:loadoutPerkSocketEmpty`)
+                 children: cp ? cp.loadoutPerkName : Op(`${Rp}:loadoutPerkSocketEmpty`)
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1854` → after: `L1450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1450) · [Before (L1854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1854)

```diff
-       } = (0, WC.y)();
+       } = (0, Ap.H)();
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1866` → after: `L1462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1462) · [Before (L1866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1866)

```diff
-           children: FC(`${vC}:loadoutEquippedBadge`)
+           children: Dp(`${Rp}:loadoutEquippedBadge`)
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1869` → after: `L1465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1465) · [Before (L1869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1869)

```diff
-           children: FC(`${vC}:loadoutLocked`)
+           children: Dp(`${Rp}:loadoutLocked`)
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1894` → after: `L1490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1490) · [Before (L1894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1894)

```diff
-           buttonRef: wC("CM", CC.loadoutPerkId),
+           buttonRef: op("SW", pp.loadoutPerkId),
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1911` → after: `L1507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1507) · [Before (L1911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1911)

```diff
-           buttonRef: wC("CM", CC.loadoutOptionId),
+           buttonRef: op("SW", pp.loadoutOptionId),
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1936` → after: `L1532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1532) · [Before (L1936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1936)

```diff
-       const ZC = (0, FC.f)(Nz, zC.getSnapshot()),
+       const cp = (0, Dp.i)(yi, ip.getSnapshot()),
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1939` → after: `L1535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1535) · [Before (L1939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1939)

```diff
-         } = (0, WC.y)();
+         } = (0, Ap.H)();
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1948` → after: `L1544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1544) · [Before (L1948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1948)

```diff
-           title: QC(`${vC}:loadoutTitle`),
+           title: Op(`${Rp}:loadoutTitle`),
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1957-L1958` → after: `L1553-L1554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1553-L1554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1553-L1554) · [Before (L1957-L1958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1957-L1958)

```diff
-               children: QC(`${vC}:loadoutRadioBadge`)
-             }), null !== wC && QC(`${vC}:${wC.loadoutNoticeKey}`, {
+               children: Op(`${Rp}:loadoutRadioBadge`)
+             }), null !== op && Op(`${Rp}:${op.loadoutNoticeKey}`, {
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1960` → after: `L1556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1556) · [Before (L1960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1960)

```diff
-               tier: (0, VC.M)(wC.loadoutNoticeTier),
+               tier: (0, ii.V)(op.loadoutNoticeTier),
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2012` → after: `L1608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1608) · [Before (L2012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2012)

```diff
-           return CC.locatorEntryArmed === ZC ? CC : {
+           return pp.locatorEntryArmed === cp ? pp : {
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2041` → after: `L1637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1637) · [Before (L2041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2041)

```diff
-         return (null !== (zC = ZC.find((CC => CC.locatorEntryArmed))) && void 0 !== zC ? zC : ZC[0]).locatorEntryId
+         return (null !== (ip = cp.find((pp => pp.locatorEntryArmed))) && void 0 !== ip ? ip : cp[0]).locatorEntryId
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2054-L2056` → after: `L1650-L1652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1650-L1652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1650-L1652) · [Before (L2054-L2056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2054-L2056)

```diff
-         locatorContained: `${vC}:locatorFlavourContained`,
-         locatorEncountered: `${vC}:locatorFlavourEncountered`,
-         locatorUnseen: `${vC}:locatorFlavourUnseen`
+         locatorContained: `${Rp}:locatorFlavourContained`,
+         locatorEncountered: `${Rp}:locatorFlavourEncountered`,
+         locatorUnseen: `${Rp}:locatorFlavourUnseen`
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2060-L2061` → after: `L1656-L1657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1656-L1657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1656-L1657) · [Before (L2060-L2061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2060-L2061)

```diff
-         codexNormalOnly: `${vC}:locatorAttunedNormal`,
-         codexHardOnly: `${vC}:locatorAttunedHard`
+         codexNormalOnly: `${Rp}:locatorAttunedNormal`,
+         codexHardOnly: `${Rp}:locatorAttunedHard`
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2085` → after: `L1681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1681) · [Before (L2085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2085)

```diff
-       } = (0, WC.y)();
+       } = (0, Ap.H)();
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2088` → after: `L1684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1684) · [Before (L2088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2088)

```diff
-         children: ZC(`${vC}:locatorArmedBadge`)
+         children: cp(`${Rp}:locatorArmedBadge`)
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2091` → after: `L1687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1687) · [Before (L2091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2091)

```diff
-         children: ZC(`${vC}:locatorOwnedBadge`)
+         children: cp(`${Rp}:locatorOwnedBadge`)
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2104` → after: `L1700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1700) · [Before (L2104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2104)

```diff
-         vq: ZC,
+         sx: cp,
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2117` → after: `L1713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1713) · [Before (L2117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2117)

```diff
-       } = (0, WC.y)(), bC = QC.locatorEntryId, nC = zC.locators.locatorEntries.find((CC => CC.locatorEntryArmed && CC !== QC));
+       } = (0, Ap.H)(), Ip = Op.locatorEntryId, Sp = ip.locators.locatorEntries.find((pp => pp.locatorEntryArmed && pp !== Op));
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2120` → after: `L1716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1716) · [Before (L2120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2120)

```diff
-         children: [QC.locatorEntryArmed && (0, iC.jsx)(gC.O, {
+         children: [Op.locatorEntryArmed && (0, mp.jsx)(yp.S, {
```

#### 110. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2125-L2126` → after: `L1721-L1722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1721-L1722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1721-L1722) · [Before (L2125-L2126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2125-L2126)

```diff
-           children: wC(`${vC}:locatorDisarm`)
-         }), QC.locatorEntryOwned && !QC.locatorEntryArmed && (0, iC.jsx)(gC.g, {
+           children: op(`${Rp}:locatorDisarm`)
+         }), Op.locatorEntryOwned && !Op.locatorEntryArmed && (0, mp.jsx)(yp.f, {
```

#### 111. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2131` → after: `L1727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1727) · [Before (L2131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2131)

```diff
-           children: wC(`${vC}:locatorArm`)
+           children: op(`${Rp}:locatorArm`)
```

#### 112. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2142` → after: `L1738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1738) · [Before (L2142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2142)

```diff
-             children: wC(`${vC}:locatorBuy`)
+             children: op(`${Rp}:locatorBuy`)
```

#### 113. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2146` → after: `L1742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1742) · [Before (L2146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2146)

```diff
-           children: wC(`${vC}:locatorReplacesHint`, {
+           children: op(`${Rp}:locatorReplacesHint`, {
```

#### 114. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2173` → after: `L1769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1769) · [Before (L2173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2173)

```diff
-       } = (0, WC.y)(), bC = Bz[QC.locatorEntryDifficulty];
+       } = (0, Ap.H)(), Ip = Vi[Op.locatorEntryDifficulty];
```

#### 115. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2184` → after: `L1780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1780) · [Before (L2184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2184)

```diff
-             name: wC(`${vC}:locatorName`, {
+             name: op(`${Rp}:locatorName`, {
```

#### 116. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2192` → after: `L1788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1788) · [Before (L2192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2192)

```diff
-             children: wC(QC.locatorEntryArmed ? `${vC}:locatorFlavourArmed` : Uz[QC.locatorEntryStanding])
+             children: op(Op.locatorEntryArmed ? `${Rp}:locatorFlavourArmed` : Ki[Op.locatorEntryStanding])
```

#### 117. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2198` → after: `L1794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1794) · [Before (L2198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2198)

```diff
-             children: wC(`${vC}:locatorUsage`)
+             children: op(`${Rp}:locatorUsage`)
```

#### 118. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2212` → after: `L1808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1808) · [Before (L2212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2212)

```diff
-       const ZC = (0, FC.f)(yz, zC.getSnapshot()),
+       const cp = (0, Dp.i)(zi, ip.getSnapshot()),
```

#### 119. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2215` → after: `L1811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1811) · [Before (L2215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2215)

```diff
-         } = (0, WC.y)(),
+         } = (0, Ap.H)(),
```

#### 120. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2223` → after: `L1819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1819) · [Before (L2223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2223)

```diff
-         title: QC(`${vC}:locatorTitle`),
+         title: Op(`${Rp}:locatorTitle`),
```

#### 121. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2233-L2234` → after: `L1829-L1830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1829-L1830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1829-L1830) · [Before (L2233-L2234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2233-L2234)

```diff
-             children: QC(`${vC}:locatorKeeperName`)
-           }), null !== nC && QC(`${vC}:${nC.locatorNoticeKey}`, {
+             children: Op(`${Rp}:locatorKeeperName`)
+           }), null !== Sp && Op(`${Rp}:${Sp.locatorNoticeKey}`, {
```

#### 122. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2285` → after: `L1881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1881) · [Before (L2285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2285)

```diff
-     var bZ = ZC(38375);
+     var Lc = cp(38767);
```

#### 123. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2322` → after: `L1918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1918) · [Before (L2322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2322)

```diff
-     var fZ = ZC(38373);
+     var Dc = cp(38762);
```

#### 124. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2341` → after: `L1937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1937) · [Before (L2341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2341)

```diff
-           (0, fC.u)()
+           (0, xp.t)()
```

#### 125. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2344` → after: `L1940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1940) · [Before (L2344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2344)

```diff
-           CC && (0, fC.k)()
+           pp && (0, xp.l)()
```

#### 126. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2350` → after: `L1946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1946) · [Before (L2350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2350)

```diff
-           nC.o.bp(Nz, CC, !0)
+           Sp.m.GA(yi, pp, !0)
```

#### 127. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2353` → after: `L1949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1949) · [Before (L2353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2353)

```diff
-           nC.o.bp(uC, CC, !0)
+           Sp.m.GA(fp, pp, !0)
```

#### 128. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2356` → after: `L1952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1952) · [Before (L2356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2356)

```diff
-           nC.o.bp(yz, CC, !0)
+           Sp.m.GA(zi, pp, !0)
```

#### 129. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2361` → after: `L1957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1957) · [Before (L2361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2361)

```diff
-           CC = zC, ZC = (0, fC.C)(null, {
+           pp = ip, cp = (0, xp.A)(null, {
```

#### 130. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2370` → after: `L1966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1966) · [Before (L2370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2370)

```diff
-           }), oC = (0, bC.g)(qZ)
+           }), Lp = (0, Ip.f)(Pc)
```

#### 131. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2373` → after: `L1969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1969) · [Before (L2373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2373)

```diff
-           "containmentLoadout" === CC ? MC.Ag(zC) : "containmentLoadoutClose" === CC ? MC.isOpen() && (MC.close(), (0, fC.h)()) : "containmentCodex" === CC ? gC.Ag(zC) : "containmentLocator" === CC && SC.Ag(zC)
+           "containmentLoadout" === pp ? Wp.Ey(ip) : "containmentLoadoutClose" === pp ? Wp.isOpen() && (Wp.close(), (0, xp.h)()) : "containmentCodex" === pp ? yp.Ey(ip) : "containmentLocator" === pp && Up.Ey(ip)
```

#### 132. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2375-L2376` → after: `L1971-L1972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1971-L1972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1971-L1972) · [Before (L2375-L2376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2375-L2376)

```diff
-         ZN: () => {
-           zC || wC.b.get("loadingOverlayVisible") || (zC = !0, CC.sendCommand("containmentEntered"))
+         LP: () => {
+           ip || op.c.get("loadingOverlayVisible") || (ip = !0, pp.sendCommand("containmentEntered"))
```

#### 133. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2387-L2550` → after: `L1983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1983) · [Before (L2387-L2550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2387-L2550)

```diff
-   36750: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       A: () => cC,
-       C: () => EC,
-       D: () => uC,
-       d: () => oC,
-       f: () => KC,
-       j: () => fC,
-       k: () => HC,
-       m: () => eC,
-       n: () => JC,
-       o: () => mC,
-       r: () => dC,
-       t: () => vC,
-       w: () => lC,
-       y: () => XC
- ... (148 more removed lines; see GitHub link above)
+   39488: (pp, ip, cp) => {
```

#### 134. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2553` → after: `L1986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1986) · [Before (L2553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2553)

```diff
-   39150: (CC, zC, ZC) => {
+   39497: (pp, ip, cp) => {
```

#### 135. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2556` → after: `L1989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1989) · [Before (L2556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2556)

```diff
-   39156: (CC, zC, ZC) => {
+   39505: (pp, ip, cp) => {
```

#### 136. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2559` → after: `L1992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1992) · [Before (L2559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2559)

```diff
-   39161: (CC, zC, ZC) => {
+   39507: (pp, ip, cp) => {
```

#### 137. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2562` → after: `L1995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1995) · [Before (L2562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2562)

```diff
-   39166: (CC, zC, ZC) => {
+   39510: (pp, ip, cp) => {
```

#### 138. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2565` → after: `L1998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R1998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L1998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1998) · [Before (L2565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2565)

```diff
-   39173: (CC, zC, ZC) => {
+   39516: (pp, ip, cp) => {
```

#### 139. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2568` → after: `L2001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R2001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L2001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2001) · [Before (L2568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2568)

```diff
-   39175: (CC, zC, ZC) => {
+   39520: (pp, ip, cp) => {
```

#### 140. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2571` → after: `L2004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R2004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L2004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2004) · [Before (L2571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2571)

```diff
-   39179: (CC, zC, ZC) => {
+   39525: (pp, ip, cp) => {
```

#### 141. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2574` → after: `L2007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R2007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L2007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2007) · [Before (L2574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2574)

```diff
-   39187: (CC, zC, ZC) => {
+   39534: (pp, ip, cp) => {
```

#### 142. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2577` → after: `L2010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R2010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L2010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2010) · [Before (L2577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2577)

```diff
-   39191: (CC, zC, ZC) => {
+   39543: (pp, ip, cp) => {
```

#### 143. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2580` → after: `L2013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R2013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L2013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2013) · [Before (L2580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2580)

```diff
-   39200: (CC, zC, ZC) => {
+   39546: (pp, ip, cp) => {
```

#### 144. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2583` → after: `L2016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R2016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L2016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2016) · [Before (L2583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2583)

```diff
-   39203: (CC, zC, ZC) => {
+   39549: (pp, ip, cp) => {
```

#### 145. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2586` → after: `L2019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R2019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L2019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2019) · [Before (L2586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2586)

```diff
-   39208: (CC, zC, ZC) => {
+   39556: (pp, ip, cp) => {
```

#### 146. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2589` → after: `L2022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R2022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2022) · [Before (L2589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2589)

```diff
-   39210: (CC, zC, ZC) => {
+   39559: (pp, ip, cp) => {
```

#### 147. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2592` → after: `L2025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R2025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L2025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2025) · [Before (L2592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2592)

```diff
-   39218: (CC, zC, ZC) => {
+   39567: (pp, ip, cp) => {
```

#### 148. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2595` → after: `L2028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R2028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L2028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2028) · [Before (L2595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2595)

```diff
-   39225: (CC, zC, ZC) => {
+   39570: (pp, ip, cp) => {
```

#### 149. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2598` → after: `L2031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R2031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L2031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2031) · [Before (L2598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2598)

```diff
-   39232: (CC, zC, ZC) => {
+   39576: (pp, ip, cp) => {
```

#### 150. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2601` → after: `L2034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R2034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L2034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2034) · [Before (L2601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2601)

```diff
-   39234: (CC, zC, ZC) => {
+   39585: (pp, ip, cp) => {
```

#### 151. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2604` → after: `L2037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R2037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L2037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2037) · [Before (L2604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2604)

```diff
-   39239: (CC, zC, ZC) => {
+   39592: (pp, ip, cp) => {
```

#### 152. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2607` → after: `L2040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R2040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L2040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2040) · [Before (L2607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2607)

```diff
-   39243: (CC, zC, ZC) => {
+   39600: (pp, ip, cp) => {
```

#### 153. `bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2610` → after: `L2043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001R2043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-92708b6ab8e1161e71e192d625b6b59461508b0e0ca814ca0fd54b49a23c9001) · [After (L2043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2043) · [Before (L2610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2610)

```diff
-   38373: CC => {
+   38762: pp => {
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/clientGame-cooking-cookingClient.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/clientGame-cooking-cookingClient.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-53d3f1a139dcb86494bda2e385afa80f4d0a709a1d3aba17771b42f706bdd9a6)

#### 1. `bundles/preprod.bloxd.io/chunks/js/clientGame-cooking-cookingClient.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-53d3f1a139dcb86494bda2e385afa80f4d0a709a1d3aba17771b42f706bdd9a6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-53d3f1a139dcb86494bda2e385afa80f4d0a709a1d3aba17771b42f706bdd9a6) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-cooking-cookingClient.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-cooking-cookingClient.js#L4)

```diff
-   39246: (CC, zC, ZC) => {
+   39608: (pp, ip, cp) => {
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/clientGame-defusal-defusalClient.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/clientGame-defusal-defusalClient.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e659a2823eafcce15a3c5a4cc4dcd3ce30e18d91e7504221a3d494c3555b387a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/clientGame-defusal-defusalClient.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e659a2823eafcce15a3c5a4cc4dcd3ce30e18d91e7504221a3d494c3555b387aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e659a2823eafcce15a3c5a4cc4dcd3ce30e18d91e7504221a3d494c3555b387a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-defusal-defusalClient.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-defusal-defusalClient.js#L4)

```diff
-   39252: (CC, zC, ZC) => {
+   39617: (pp, ip, cp) => {
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (116 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67)

#### 1. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L4)

```diff
-   36483: (CC, zC, ZC) => {
+   36791: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L9` → after: `L7-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L7-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L7-L9) · [Before (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L9)

```diff
-       f: () => WC
+       h: () => yp,
+       i: () => Pp,
+       k: () => Ap
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L11-L18` → after: `L11-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L11-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L11-L18) · [Before (L11-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L11-L18)

```diff
-     var QC = ZC(34153),
-       wC = ZC(36488),
-       bC = ZC(36490),
-       nC = ZC(8735),
-       fC = ZC(1383),
-       oC = ZC(48),
-       qC = ZC(60),
-       FC = ZC(1056);
+     var Op = cp(34430),
+       op = cp(36799),
+       Ip = cp(36804),
+       Sp = cp(8852),
+       xp = cp(1476),
+       Lp = cp(62),
+       Yp = cp(82),
+       Dp = cp(1112);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L22-L23` → after: `L22-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L22-L23) · [Before (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L22-L23)

```diff
-       return (0, fC.f)(wC.d, (0, wC.q)()), (0, FC.jsx)(FC.Fragment, {
-         children: null === (CC = (0, wC.q)()) || void 0 === CC ? void 0 : CC.content
+       return (0, xp.i)(op.d, (0, op.s)()), (0, Dp.jsx)(Dp.Fragment, {
+         children: null === (pp = (0, op.s)()) || void 0 === pp ? void 0 : pp.content
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L32-L33` → after: `L32-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L32-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L32-L33) · [Before (L32-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L32-L33)

```diff
-       (0, fC.f)(wC.d, (0, wC.q)());
-       const qC = null === (zC = (0, wC.q)()) || void 0 === zC ? void 0 : zC.menu;
+       (0, xp.i)(op.d, (0, op.s)());
+       const Yp = null === (ip = (0, op.s)()) || void 0 === ip ? void 0 : ip.menu;
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L36-L37` → after: `L36-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L36-L37) · [Before (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L36-L37)

```diff
-         ZC || (null === qC || void 0 === qC || null === (CC = qC.onClose) || void 0 === CC || CC.call(qC), (0, bC.p)())
-       }), [ZC, qC]), (0, oC.useEffect)((() => ZC ? (0, nC.f)(bC.z, bC.g) : void 0), [ZC]), (0, FC.jsx)(QC.d, {
+         cp || (null === Yp || void 0 === Yp || null === (pp = Yp.onClose) || void 0 === pp || pp.call(Yp), (0, Ip.q)())
+       }), [cp, Yp]), (0, Lp.useEffect)((() => cp ? (0, Sp.e)(Ip.A, Ip.d) : void 0), [cp]), (0, Dp.jsx)(Op.b, {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L49` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L49) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L49)

```diff
-         id: `clientGameHud-${zC}`,
+         id: `clientGameHud-${ip}`,
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L63` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L63) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L63)

```diff
-         wC(document.getElementById(`clientGameHud-${ZC}`))
+         op(document.getElementById(`clientGameHud-${cp}`))
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L67` → after: `L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L67) · [Before (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L67)

```diff
-   34153: (CC, zC, ZC) => {
+   34430: (pp, ip, cp) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L69)

```diff
-       d: () => bC
+       b: () => Ip
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L71-L72` → after: `L71-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L71-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L71-L72) · [Before (L71-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L71-L72)

```diff
-     var QC = ZC(4473),
-       wC = ZC(4479);
+     var Op = cp(4628),
+       op = cp(4635);
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L83` → after: `L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L83) · [Before (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L83)

```diff
-       return (0, wC.b)(!0, ZC, bC, oC), (0, QC.d)(fC, ZC), ZC || nC ? zC : null
+       return (0, op.e)(!0, cp, Ip, Lp), (0, Op.d)(xp, cp), cp || Sp ? ip : null
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L86` → after: `L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L86) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L86)

```diff
-   36564: (CC, zC, ZC) => {
+   36879: (pp, ip, cp) => {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L91` → after: `L90-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L90-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L90-L91) · [Before (L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L91)

```diff
-       k: () => oC
+       l: () => xp,
+       m: () => Lp
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L93-L94` → after: `L93-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L93-L94) · [Before (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L93-L94)

```diff
-     var QC = ZC(48),
-       wC = ZC(3099);
+     var Op = cp(62),
+       op = cp(3209);
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L100` → after: `L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L100) · [Before (L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L100)

```diff
-       const [zC] = (0, wC.c)(), [ZC, oC] = (0, QC.useState)(!1);
+       const [ip] = (0, op.b)(), [cp, Lp] = (0, Op.useState)(!1);
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L103-L104` → after: `L103-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L103-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L103-L104) · [Before (L103-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L103-L104)

```diff
-         const zC = document.querySelector(`.${nC}`),
-           ZC = document.querySelector(`.${fC}`),
+         const ip = document.querySelector(`.${Sp}`),
+           cp = document.querySelector(`.${xp}`),
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L121` → after: `L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L121) · [Before (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L121)

```diff
-   36558: (CC, zC, ZC) => {
+   36872: (pp, ip, cp) => {
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L123` → after: `L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L123) · [Before (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L123)

```diff
-       d: () => wC
+       c: () => op
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L150` → after: `L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L150) · [Before (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L150)

```diff
-   8735: (CC, zC, ZC) => {
+   8852: (pp, ip, cp) => {
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L152-L153` → after: `L152-L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L152-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L152-L153) · [Before (L152-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L152-L153)

```diff
-       c: () => bC,
-       f: () => wC
+       b: () => Ip,
+       e: () => op
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L170` → after: `L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L170) · [Before (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L170)

```diff
-   38369: (CC, zC, ZC) => {
+   38751: (pp, ip, cp) => {
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L176` → after: `L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L176) · [Before (L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L176)

```diff
-       } = ZC, nC = null !== (QC = CC.text) && void 0 !== QC ? QC : CC, fC = (nC.x / 100 - .5) * wC, oC = (nC.y / 100 - .5) * bC, qC = wC / 2 - zC.x;
+       } = cp, Sp = null !== (Op = pp.text) && void 0 !== Op ? Op : pp, xp = (Sp.x / 100 - .5) * op, Lp = (Sp.y / 100 - .5) * Ip, Yp = op / 2 - ip.x;
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L181` → after: `L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L181) · [Before (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L181)

```diff
-       const FC = Math.min(0 === fC ? 1 / 0 : qC / Math.abs(fC), oC > 0 ? (bC / 2 - zC.bottom) / oC : oC < 0 ? (zC.top - bC / 2) / oC : 1 / 0);
+       const Dp = Math.min(0 === xp ? 1 / 0 : Yp / Math.abs(xp), Lp > 0 ? (Ip / 2 - ip.bottom) / Lp : Lp < 0 ? (ip.top - Ip / 2) / Lp : 1 / 0);
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L191` → after: `L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L191) · [Before (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L191)

```diff
-       b: () => QC
+       d: () => Op
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L194` → after: `L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L194) · [Before (L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L194)

```diff
-   36490: (CC, zC, ZC) => {
+   36804: (pp, ip, cp) => {
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L196-L198` → after: `L196-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L196-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L196-L200) · [Before (L196-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L196-L198)

```diff
-       B: () => GC,
-       c: () => bC,
-       g: () => SC,
+       A: () => yp,
+       E: () => tp,
+       b: () => Ip,
+       d: () => Up,
+       f: () => wp,
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L200-L205` → after: `L202-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L202-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L202-L205) · [Before (L200-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L200-L205)

```diff
-       m: () => fC,
-       o: () => NC,
-       p: () => PC,
-       r: () => WC,
-       v: () => RC,
-       z: () => gC
+       n: () => Pp,
+       q: () => vp,
+       u: () => Ap,
+       w: () => Hp
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L207-L208` → after: `L207-L208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L207-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L207-L208) · [Before (L207-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L207-L208)

```diff
-     var QC = ZC(20),
-       wC = ZC(28);
+     var Op = cp(25),
+       op = cp(34);
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L215` → after: `L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L215) · [Before (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L215)

```diff
-         return (null !== (ZC = CC.order) && void 0 !== ZC ? ZC : 0) - (null !== (QC = zC.order) && void 0 !== QC ? QC : 0)
+         return (null !== (cp = pp.order) && void 0 !== cp ? cp : 0) - (null !== (Op = ip.order) && void 0 !== Op ? Op : 0)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L232` → after: `L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L232) · [Before (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L232)

```diff
-       CC.panel && "clientGame" === QC.b.get("openInGameMenuName") && qC(CC.id)
+       pp.panel && "clientGame" === Op.c.get("openInGameMenuName") && Yp(pp.id)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L258` → after: `L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L258) · [Before (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L258)

```diff
-       "inventory" !== QC.b.get("openInGameMenuName") && qC(null)
+       "inventory" !== Op.c.get("openInGameMenuName") && Yp(null)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L267-L268` → after: `L267-L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L267-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L267-L268) · [Before (L267-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L267-L268)

```diff
-       return nC.set(CC.id, CC), wC.o.bp(bC, fC(), !0), () => {
-         nC.get(CC.id) === CC && (nC.delete(CC.id), wC.o.bp(bC, fC()))
+       return Sp.set(pp.id, pp), op.m.GA(Ip, xp(), !0), () => {
+         Sp.get(pp.id) === pp && (Sp.delete(pp.id), op.m.GA(Ip, xp()))
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L272` → after: `L272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L272) · [Before (L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L272)

```diff
-   36488: (CC, zC, ZC) => {
+   36799: (pp, ip, cp) => {
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L274` → after: `L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L274) · [Before (L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L274)

```diff
-       C: () => FC,
+       A: () => Dp,
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L277` → after: `L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L277) · [Before (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L277)

```diff
-       k: () => PC,
+       l: () => vp,
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L279-L281` → after: `L279-L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L279-L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L279-L281) · [Before (L279-L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L279-L281)

```diff
-       q: () => qC,
-       u: () => SC,
-       y: () => MC
+       s: () => Yp,
+       t: () => Up,
+       x: () => Wp
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L283-L286` → after: `L283-L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L283-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L283-L286) · [Before (L283-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L283-L286)

```diff
-     var QC = ZC(20),
-       wC = ZC(28),
-       bC = ZC(1240),
-       nC = ZC(36490);
+     var Op = cp(25),
+       op = cp(34),
+       Ip = cp(1308),
+       Sp = cp(36804);
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L299-L300` → after: `L299-L300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L299-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L299-L300) · [Before (L299-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L299-L300)

```diff
-       return oC = ZC, wC.o.bp(fC, oC, !0), () => {
-         oC === ZC && (oC = null, gC = !1, pC(), wC.o.bp(fC, null))
+       return Lp = cp, op.m.GA(xp, Lp, !0), () => {
+         Lp === cp && (Lp = null, yp = !1, wp(), op.m.GA(xp, null))
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L317-L318` → after: `L317-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L317-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L317-L318) · [Before (L317-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L317-L318)

```diff
-       const CC = QC.b.get("openInGameMenuName");
-       "clientGame" !== CC && (gC = "inventory" === CC), (0, nC.o)() || (0, nC.j)(), (0, bC.u)(bC.e), QC.b.set({
+       const pp = Op.c.get("openInGameMenuName");
+       "clientGame" !== pp && (yp = "inventory" === pp), (0, Sp.n)() || (0, Sp.f)(), (0, Ip.s)(Ip.c), Op.c.set({
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L333` → after: `L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L333) · [Before (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L333)

```diff
-       "clientGame" === QC.b.get("openInGameMenuName") && QC.b.set({
+       "clientGame" === Op.c.get("openInGameMenuName") && Op.c.set({
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L335` → after: `L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L335) · [Before (L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L335)

```diff
-       }), CC || (0, nC.j)(), gC = !1
+       }), pp || (0, Sp.f)(), yp = !1
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L338` → after: `L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L338) · [Before (L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L338)

```diff
-   39259: (CC, zC, ZC) => {
+   39623: (pp, ip, cp) => {
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L343-L348` → after: `L343-L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L343-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L343-L348) · [Before (L343-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L343-L348)

```diff
-     var wC = ZC(48),
-       bC = ZC(36488),
-       nC = ZC(36897),
-       fC = ZC(36502),
-       oC = ZC(1645),
-       qC = ZC(28);
+     var op = cp(62),
+       Ip = cp(36799),
+       Sp = cp(37246),
+       xp = cp(36819),
+       Lp = cp(1765),
+       Yp = cp(34);
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L442` → after: `L442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L442) · [Before (L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L442)

```diff
-         for (let nC = 0; nC < 4; nC++) ZC.push((wC = nC * zC + .35, bC = (nC + 1) * zC - .35, gC(`M${WC+(QC=6+CC)*Math.cos(wC)} ${WC+QC*Math.sin(wC)} A${QC} ${QC} 0 0 1 ${WC+QC*Math.cos(bC)} ${WC+QC*Math.sin(bC)}`, 2)));
+         for (let Sp = 0; Sp < 4; Sp++) cp.push((op = Sp * ip + .35, Ip = (Sp + 1) * ip - .35, yp(`M${Ap+(Op=6+pp)*Math.cos(op)} ${Ap+Op*Math.sin(op)} A${Op} ${Op} 0 0 1 ${Ap+Op*Math.cos(Ip)} ${Ap+Op*Math.sin(Ip)}`, 2)));
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L447` → after: `L447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L447) · [Before (L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L447)

```diff
-       marksman: CC => [gC(`M${26-CC/2} ${39+CC/2} L32 33 L${38+CC/2} ${39+CC/2}`, 2), NC(14 - CC, WC, 24 - CC, WC, 1.5), NC(40 + CC, WC, 50 + CC, WC, 1.5), NC(14 - CC, 30, 14 - CC, 34, 1.5), NC(50 + CC, 30, 50 + CC, 34, 1.5)],
+       marksman: pp => [yp(`M${26-pp/2} ${39+pp/2} L32 33 L${38+pp/2} ${39+pp/2}`, 2), Pp(14 - pp, Ap, 24 - pp, Ap, 1.5), Pp(40 + pp, Ap, 50 + pp, Ap, 1.5), Pp(14 - pp, 30, 14 - pp, 34, 1.5), Pp(50 + pp, 30, 50 + pp, 34, 1.5)],
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L456` → after: `L456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L456) · [Before (L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L456)

```diff
-           ]) ZC.push(gC(`M${WC+QC*zC} ${WC+wC*(zC-5)} L${WC+QC*zC} ${WC+wC*zC} L${WC+QC*(zC-5)} ${WC+wC*zC}`, 2));
+           ]) cp.push(yp(`M${Ap+Op*ip} ${Ap+op*(ip-5)} L${Ap+Op*ip} ${Ap+op*ip} L${Ap+Op*(ip-5)} ${Ap+op*ip}`, 2));
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L469-L471` → after: `L469-L471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L469-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L469-L471) · [Before (L469-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L469-L471)

```diff
-       } = CC, wC = `<${zC}`;
-       for (const [bC, nC] of Object.entries(ZC)) wC += ` ${bC}="${nC}"`;
-       return void 0 === QC ? `${wC}/>` : `${wC}>${QC}</${zC}>`
+       } = pp, op = `<${ip}`;
+       for (const [Ip, Sp] of Object.entries(cp)) op += ` ${Ip}="${Sp}"`;
+       return void 0 === Op ? `${op}/>` : `${op}>${Op}</${ip}>`
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L479` → after: `L479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L479) · [Before (L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L479)

```diff
-         }, this.tokens = [qC.o.subscribe("aimingOverlay", (CC => {
+         }, this.tokens = [Yp.m.subscribe("aimingOverlay", (pp => {
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L481` → after: `L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L481) · [Before (L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L481)

```diff
-         })), qC.o.subscribe("mouseState", (CC => {
+         })), Yp.m.subscribe("mouseState", (pp => {
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L496` → after: `L496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L496) · [Before (L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L496)

```diff
-         } = this, bC = wC.isAlive(this.localPlayerId) && null !== (ZC = null === (QC = wC.XzC(this.localPlayerId)) || void 0 === QC ? void 0 : QC.name) && void 0 !== ZC ? ZC : null, nC = (fC = bC) && FC[fC] || null;
+         } = this, Ip = op.isAlive(this.localPlayerId) && null !== (cp = null === (Op = op.Acp(this.localPlayerId)) || void 0 === Op ? void 0 : Op.name) && void 0 !== cp ? cp : null, Sp = (xp = Ip) && Dp[xp] || null;
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L506` → after: `L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L506) · [Before (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L506)

```diff
-           MC = null !== oC && void 0 !== oC ? oC : 0;
+           Wp = null !== Lp && void 0 !== Lp ? Lp : 0;
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L512` → after: `L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L512) · [Before (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L512)

```diff
-         for (const CC of this.tokens) qC.o.unsubscribe(CC);
+         for (const pp of this.tokens) Yp.m.unsubscribe(pp);
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L518-L519` → after: `L518-L519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L518-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L518-L519) · [Before (L518-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L518-L519)

```diff
-           return `<svg viewBox="0 0 64 64">${PC[CC](zC).map(GC).join("")}</svg>`
-         }(CC, zC), this.shapes = Array.from(null !== (ZC = null === (QC = this.element.firstElementChild) || void 0 === QC ? void 0 : QC.children) && void 0 !== ZC ? ZC : [])) : zC !== this.drawnGap && (this.drawnGap = zC, function(CC, zC, ZC) {
+           return `<svg viewBox="0 0 64 64">${vp[pp](ip).map(tp).join("")}</svg>`
+         }(pp, ip), this.shapes = Array.from(null !== (cp = null === (Op = this.element.firstElementChild) || void 0 === Op ? void 0 : Op.children) && void 0 !== cp ? cp : [])) : ip !== this.drawnGap && (this.drawnGap = ip, function(pp, ip, cp) {
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L533` → after: `L533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L533) · [Before (L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L533)

```diff
-         const ZC = CC * nC.i / 2;
+         const cp = pp * Sp.j / 2;
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L552` → after: `L552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L552) · [Before (L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L552)

```diff
-         }, this.maxHealth = null, this.lb = 1, this.dead = !1, this.enabled = !0, this.cameraHeading = 0, this.token = void 0, this.readHealth = NaN, this.readShield = NaN, this.readMaxHealth = NaN, this.bindElement = CC => {
+         }, this.maxHealth = null, this.Bp = 1, this.dead = !1, this.enabled = !0, this.cameraHeading = 0, this.token = void 0, this.readHealth = NaN, this.readShield = NaN, this.readMaxHealth = NaN, this.bindElement = pp => {
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L554-L555` → after: `L554-L555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L554-L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L554-L555) · [Before (L554-L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L554-L555)

```diff
-           this.clearHits(), this.root = CC, this.lowLayer = null !== (zC = null === CC || void 0 === CC ? void 0 : CC.querySelector(".FrontlineDamageLow")) && void 0 !== zC ? zC : null, this.arcLayer = null !== (ZC = null === CC || void 0 === CC ? void 0 : CC.querySelector(".Fron … [truncated]
-         }, this.token = qC.o.subscribe("damagedByOtherPlayer", (CC => {
+           this.clearHits(), this.root = pp, this.lowLayer = null !== (ip = null === pp || void 0 === pp ? void 0 : pp.querySelector(".FrontlineDamageLow")) && void 0 !== ip ? ip : null, this.arcLayer = null !== (cp = null === pp || void 0 === pp ? void 0 : pp.querySelector(".Fron … [truncated]
+         }, this.token = Yp.m.subscribe("damagedByOtherPlayer", (pp => {
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L558` → after: `L558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L558) · [Before (L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L558)

```diff
-             Hb: ZC
+             Qp: cp
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L571` → after: `L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L571) · [Before (L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L571)

```diff
-         qC.o.unsubscribe(this.token), this.clearHits(), document.body.classList.remove(AC)
+         Yp.m.unsubscribe(this.token), this.clearHits(), document.body.classList.remove(dp)
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L581-L582` → after: `L581-L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L581-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L581-L582) · [Before (L581-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L581-L582)

```diff
-         if (this.readHealth = CC, this.readShield = zC, this.readMaxHealth = ZC, null === CC || void 0 === CC || !ZC) return this.lastHealthPool = null, this.maxHealth = null, this.lb = 1, this.dead = !1, void this.drawLow();
-         const QC = CC + (null !== zC && void 0 !== zC ? zC : 0);
+         if (this.readHealth = pp, this.readShield = ip, this.readMaxHealth = cp, null === pp || void 0 === pp || !cp) return this.lastHealthPool = null, this.maxHealth = null, this.Bp = 1, this.dead = !1, void this.drawLow();
+         const Op = pp + (null !== ip && void 0 !== ip ? ip : 0);
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L594` → after: `L594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L594) · [Before (L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L594)

```diff
-         this.dead = CC <= 0, this.dead && this.clearHits(), this.lastHealthPool = QC, this.maxHealth = ZC, this.lb = CC > 0 ? CC / ZC : 1, this.drawLow()
+         this.dead = pp <= 0, this.dead && this.clearHits(), this.lastHealthPool = Op, this.maxHealth = cp, this.Bp = pp > 0 ? pp / cp : 1, this.drawLow()
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L614-L617` → after: `L614-L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L614-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L614-L617) · [Before (L614-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L614-L617)

```diff
-         const CC = vC((xC - this.lb) / .25),
-           zC = vC((JC - this.lb) / .15000000000000002),
-           ZC = this.lb < xC;
-         this.lowLayer.classList.toggle("Active", ZC), this.lowLayer.classList.toggle("Critical", this.lb < JC), this.lowLayer.style.opacity = String(ZC ? .55 + .3 * CC + .15 * zC : 0)
+         const pp = Rp((ep - this.Bp) / .25),
+           ip = Rp((jp - this.Bp) / .15000000000000002),
+           cp = this.Bp < ep;
+         this.lowLayer.classList.toggle("Active", cp), this.lowLayer.classList.toggle("Critical", this.Bp < jp), this.lowLayer.style.opacity = String(cp ? .55 + .3 * pp + .15 * ip : 0)
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L669` → after: `L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L669) · [Before (L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L669)

```diff
-         (null === CC.drawnAngle || Math.abs(zC - CC.drawnAngle) > .005) && (CC.drawnAngle = zC, CC.element.style.rotate = `${zC}rad`)
+         (null === pp.drawnAngle || Math.abs(ip - pp.drawnAngle) > .005) && (pp.drawnAngle = ip, pp.element.style.rotate = `${ip}rad`)
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L674` → after: `L674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L674) · [Before (L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L674)

```diff
-         let bC = this.flashes.find((zC => null === zC.angle || null === CC ? zC.angle === CC : iC(zC.angle, CC) < .5));
+         let Ip = this.flashes.find((ip => null === ip.angle || null === pp ? ip.angle === pp : mp(ip.angle, pp) < .5));
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L724` → after: `L724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L724) · [Before (L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L724)

```diff
-         bC.glow.classList.toggle("Everywhere", null === CC), NC.setProperty("--glowX", `${oC}px`), NC.setProperty("--glowY", `${qC}px`), NC.setProperty("--glowRx", `${FC}px`), NC.setProperty("--glowRy", `${WC}px`), bC.element.style.transformOrigin = `${oC}px ${qC}px`, null === (w … [truncated]
+         Ip.glow.classList.toggle("Everywhere", null === pp), Pp.setProperty("--glowX", `${Lp}px`), Pp.setProperty("--glowY", `${Yp}px`), Pp.setProperty("--glowRx", `${Dp}px`), Pp.setProperty("--glowRy", `${Ap}px`), Ip.element.style.transformOrigin = `${Lp}px ${Yp}px`, null === (o … [truncated]
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L775` → after: `L775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L775) · [Before (L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L775)

```diff
-     var hC = ZC(1002),
+     var Mp = cp(1049),
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L777-L780` → after: `L777-L780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L777-L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L777-L780) · [Before (L777-L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L777-L780)

```diff
-       YC = ZC(36483),
-       dC = ZC(36564),
-       mC = ZC(1143),
-       HC = ZC(1383);
+       Ep = cp(36791),
+       Xp = cp(36879),
+       lp = cp(1201),
+       Qp = cp(1476);
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L797` → after: `L797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L797) · [Before (L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L797)

```diff
-         this.wire = CC, qC.o.bp(EC, CC, !0)
+         this.wire = pp, Yp.m.GA(Jp, pp, !0)
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L805` → after: `L805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L805) · [Before (L805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L805)

```diff
-         }, qC.o.bp(lC, this.scoreboard, !0)
+         }, Yp.m.GA(Bp, this.scoreboard, !0)
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L808` → after: `L808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L808) · [Before (L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L808)

```diff
-     var cC = ZC(1056);
+     var Tp = cp(1112);
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L836` → after: `L836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L836) · [Before (L836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L836)

```diff
-         className: KC()(zC, `Owner-${wC||"None"}`, `Leader-${nC||"None"}`, {
+         className: Cp()(ip, `Owner-${op||"None"}`, `Leader-${Sp||"None"}`, {
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L846` → after: `L846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L846) · [Before (L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L846)

```diff
-             width: `${bC}%`
+             width: `${Ip}%`
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L858` → after: `L858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L858) · [Before (L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L858)

```diff
-         } = (0, mC.y)();
+         } = (0, lp.H)();
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L872` → after: `L872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L872) · [Before (L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L872)

```diff
-                   className: KC()("FrontlinePointMarkerHomeTurf", `Team-${wC}`),
+                   className: Cp()("FrontlinePointMarkerHomeTurf", `Team-${op}`),
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L905-L906` → after: `L905-L906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L905-L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L905-L906) · [Before (L905-L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L905-L906)

```diff
-       const bC = (0, HC.f)(EC, zC.getWire()),
-         nC = (0, HC.f)(lC, zC.getScoreboard());
+       const Ip = (0, Qp.i)(Jp, ip.getWire()),
+         Sp = (0, Qp.i)(Bp, ip.getScoreboard());
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L918` → after: `L918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L918) · [Before (L918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L918)

```diff
-         }), (0, cC.jsx)(YC.c, {
+         }), (0, Tp.jsx)(Ep.h, {
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L948` → after: `L948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L948) · [Before (L948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L948)

```diff
-         } = (0, mC.y)();
+         } = (0, lp.H)();
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L952` → after: `L952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L952) · [Before (L952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L952)

```diff
-             className: KC()("FrontlinePlate", `Status-${QC}`, `Leader-${bC||"None"}`),
+             className: Cp()("FrontlinePlate", `Status-${Op}`, `Leader-${Ip||"None"}`),
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L986` → after: `L986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L986) · [Before (L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L986)

```diff
-             className: KC()("FrontlinePlate", "FrontlineAlert", `Tone-${wC}`),
+             className: Cp()("FrontlinePlate", "FrontlineAlert", `Tone-${op}`),
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1004` → after: `L1004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1004) · [Before (L1004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1004)

```diff
-         } = (0, mC.y)(), QC = (0, wC.useRef)(null), bC = function(CC, zC) {
+         } = (0, lp.H)(), Op = (0, op.useRef)(null), Ip = function(pp, ip) {
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1009-L1010` → after: `L1009-L1010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1009-L1010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1009-L1010) · [Before (L1009-L1010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1009-L1010)

```diff
-             const ZC = document.querySelector(`.${dC.e}`),
-               wC = document.querySelector(`.${dC.h}`),
+             const cp = document.querySelector(`.${Xp.h}`),
+               op = document.querySelector(`.${Xp.l}`),
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1015` → after: `L1015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1015) · [Before (L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1015)

```diff
-                   fC = zC.getBoundingClientRect().width - 2 * (null !== (CC = null === bC || void 0 === bC ? void 0 : bC.getBoundingClientRect().width) && void 0 !== CC ? CC : 0),
+                   xp = ip.getBoundingClientRect().width - 2 * (null !== (pp = null === Ip || void 0 === Ip ? void 0 : Ip.getBoundingClientRect().width) && void 0 !== pp ? pp : 0),
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1019` → after: `L1019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1019) · [Before (L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1019)

```diff
-                   NC = Math.min(qC - FC, WC - qC) - dC.c - fC / 2,
+                   Pp = Math.min(Yp - Dp, Ap - Yp) - Xp.e - xp / 2,
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1021-L1022` → after: `L1021-L1022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1021-L1022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1021-L1022) · [Before (L1021-L1022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1021-L1022)

```diff
-                   gC = MC ? (window.innerWidth - fC) / 2 - dC.c : NC;
-                 zC.style.setProperty("--frontlineTrackWidth", `${Math.max(0,Math.floor(Math.min(gC,14*nC)))}px`), QC(MC)
+                   yp = Wp ? (window.innerWidth - xp) / 2 - Xp.e : Pp;
+                 ip.style.setProperty("--frontlineTrackWidth", `${Math.max(0,Math.floor(Math.min(yp,14*Sp)))}px`), Op(Wp)
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1081` → after: `L1081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1081) · [Before (L1081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1081)

```diff
-       } = (0, mC.y)(), nC = String(ZC).padStart(3, "0"), fC = nC.search(/[1-9]/), oC = -1 === fC ? nC : nC.slice(0, fC), qC = Math.min(20, Math.floor(ZC / QC * 20));
+       } = (0, lp.H)(), Sp = String(cp).padStart(3, "0"), xp = Sp.search(/[1-9]/), Lp = -1 === xp ? Sp : Sp.slice(0, xp), Yp = Math.min(20, Math.floor(cp / Op * 20));
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1083` → after: `L1083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1083) · [Before (L1083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1083)

```diff
-         className: KC()("FrontlineTeamScore", wC, `Team-${zC}`),
+         className: Cp()("FrontlineTeamScore", op, `Team-${ip}`),
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1142-L1145` → after: `L1142-L1145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1142-L1145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1142-L1145) · [Before (L1142-L1145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1142-L1145)

```diff
-     var VC = ZC(36558),
-       Cz = ZC(1192),
-       zz = ZC(38319),
-       Zz = ZC(38369);
+     var ii = cp(36872),
+       ci = cp(1260),
+       Oi = cp(38712),
+       oi = cp(38751);
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1152` → after: `L1152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1152) · [Before (L1152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1152)

```diff
-         }, this.render = null, this.Sg = !1, this.mG = () => {
+         }, this.render = null, this.Ry = !1, this.mH = () => {
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1157` → after: `L1157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1157) · [Before (L1157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1157)

```diff
-         }, window.addEventListener("resize", this.mG), null === (zC = window.visualViewport) || void 0 === zC || zC.addEventListener("resize", this.mG)
+         }, window.addEventListener("resize", this.mH), null === (ip = window.visualViewport) || void 0 === ip || ip.addEventListener("resize", this.mH)
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1163` → after: `L1163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1163) · [Before (L1163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1163)

```diff
-           null === (ZC = this.markers.get(CC)) || void 0 === ZC || ZC.stopObserving(), this.markers.delete(CC), zC && !this.Sg && this.markers.set(CC, this.mount(zC))
+           null === (cp = this.markers.get(pp)) || void 0 === cp || cp.stopObserving(), this.markers.delete(pp), ip && !this.Ry && this.markers.set(pp, this.mount(ip))
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1172` → after: `L1172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1172) · [Before (L1172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1172)

```diff
-             CC && wC && (CC.target ??= [0, 0, 0], CC.target[0] = wC[0], CC.target[1] = wC[1] + 2.5, CC.target[2] = wC[2], this.place(CC), this.MQ(CC, zC && Math.hypot(wC[0] - zC[0], wC[1] - zC[1], wC[2] - zC[2])))
+             pp && op && (pp.target ??= [0, 0, 0], pp.target[0] = op[0], pp.target[1] = op[1] + 2.5, pp.target[2] = op[2], this.place(pp), this.ri(pp, ip && Math.hypot(op[0] - ip[0], op[1] - ip[1], op[2] - ip[2])))
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1177` → after: `L1177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1177) · [Before (L1177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1177)

```diff
-         this.Sg = !0, window.removeEventListener("resize", this.mG), null === (CC = window.visualViewport) || void 0 === CC || CC.removeEventListener("resize", this.mG);
+         this.Ry = !0, window.removeEventListener("resize", this.mH), null === (pp = window.visualViewport) || void 0 === pp || pp.removeEventListener("resize", this.mH);
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1194-L1195` → after: `L1194-L1195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1194-L1195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1194-L1195) · [Before (L1194-L1195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1194-L1195)

```diff
-           nC = null !== bC && void 0 !== bC ? bC : zC.projectWorldPosToScreenPos(CC.target),
-           fC = (0, Zz.b)({
+           Sp = null !== Ip && void 0 !== Ip ? Ip : ip.projectWorldPosToScreenPos(pp.target),
+           xp = (0, oi.d)({
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1200` → after: `L1200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1200) · [Before (L1200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1200)

```diff
-         (0, zz.e)(CC.root, Math.round(100 * fC.x) / 100, Math.round(100 * fC.y) / 100)
+         (0, Oi.b)(pp.root, Math.round(100 * xp.x) / 100, Math.round(100 * xp.y) / 100)
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1205` → after: `L1205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1205) · [Before (L1205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1205)

```diff
-         (null === CC.metres || (0, VC.d)(zC, CC.metres, CC.metresShownAt)) && (CC.metres = Math.round(zC), CC.metresShownAt = ZC, CC.distance.textContent = (0, mC.u)(Cz.h.get().getCurrentLanguageCode(), "frontlineHud:markerDistance", {
+         (null === pp.metres || (0, ii.c)(ip, pp.metres, pp.metresShownAt)) && (pp.metres = Math.round(ip), pp.metresShownAt = cp, pp.distance.textContent = (0, lp.B)(ci.g.get().getCurrentLanguageCode(), "frontlineHud:markerDistance", {
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1239-L1240` → after: `L1239-L1240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1239-L1240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1239-L1240) · [Before (L1239-L1240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1239-L1240)

```diff
-     var wz = ZC(6453),
-       bz = ZC(2604);
+     var Si = cp(6566),
+       xi = cp(2695);
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1259` → after: `L1259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1259) · [Before (L1259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1259)

```diff
-         }, qC.o.bp(nz, this.view, !0)
+         }, Yp.m.GA(Li, this.view, !0)
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1262` → after: `L1262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1262) · [Before (L1262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1262)

```diff
-     const oz = (0, wC.lazy)((() => (0, bz.e)(ZC.e(199).then((() => ZC(41576))), (CC => CC.FrontlineMvpLineup)))),
+     const Di = (0, op.lazy)((() => (0, xi.c)(Promise.all([cp.e(239), cp.e(202)]).then((() => cp(42012))), (pp => pp.FrontlineMvpLineup)))),
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1276` → after: `L1276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1276) · [Before (L1276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1276)

```diff
-       const ZC = (0, HC.f)(nz, zC.getView()),
+       const cp = (0, Qp.i)(Li, ip.getView()),
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1290` → after: `L1290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1290) · [Before (L1290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1290)

```diff
-       } = (0, mC.y)(), [, nC, fC, oC, qC, , FC, WC] = zC, NC = (0, wC.useMemo)((() => Fz.filter((CC => CC < WC.length))), [WC]), MC = (0, wC.useMemo)((() => NC.map((CC => {
+       } = (0, lp.H)(), [, Sp, xp, Lp, Yp, , Dp, Ap] = ip, Pp = (0, op.useMemo)((() => Pi.filter((pp => pp < Ap.length))), [Ap]), Wp = (0, op.useMemo)((() => Pp.map((pp => {
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1303` → after: `L1303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1303) · [Before (L1303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1303)

```diff
-         className: KC()("FrontlineRoundEnd", `Result-${nC}`),
+         className: Cp()("FrontlineRoundEnd", `Result-${Sp}`),
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1317` → after: `L1317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1317) · [Before (L1317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1317)

```diff
-             }), (gC = bC(Wz[nC]), /\p{Script=Arabic}/u.test(gC) ? [gC] : (0, wz.b)(gC)).map(((CC, zC) => (0, cC.jsx)("span", {
+             }), (yp = Ip(Wi[Sp]), /\p{Script=Arabic}/u.test(yp) ? [yp] : (0, Si.d)(yp)).map(((pp, ip) => (0, Tp.jsx)("span", {
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1372-L1373` → after: `L1372-L1373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1372-L1373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1372-L1373) · [Before (L1372-L1373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1372-L1373)

```diff
-       } = (0, mC.y)(), [wC, bC, nC, fC, oC] = zC, [qC, FC] = QC(function(CC, zC) {
-         return 1 === zC && "damage" !== CC ? `frontlineRoundEnd:${CC}One` : `frontlineRoundEnd:${CC}`
+       } = (0, lp.H)(), [op, Ip, Sp, xp, Lp] = ip, [Yp, Dp] = Op(function(pp, ip) {
+         return 1 === ip && "damage" !== pp ? `frontlineRoundEnd:${pp}One` : `frontlineRoundEnd:${pp}`
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1379` → after: `L1379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1379) · [Before (L1379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1379)

```diff
-         className: KC()("FrontlineMvpCard", `Place-${ZC+1}`, `Team-${bC}`),
+         className: Cp()("FrontlineMvpCard", `Place-${cp+1}`, `Team-${Ip}`),
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1381` → after: `L1381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1381) · [Before (L1381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1381)

```diff
-           "--revealMs": `${qz[ZC]}ms`
+           "--revealMs": `${Ai[cp]}ms`
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1417` → after: `L1417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1417) · [Before (L1417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1417)

```diff
-         null === (CC = FC) || void 0 === CC || CC.IK(!ZC), null === (zC = WC) || void 0 === zC || zC.IK(!QC)
+         null === (pp = Dp) || void 0 === pp || pp.eC(!cp), null === (ip = Ap) || void 0 === ip || ip.eC(!Op)
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1421` → after: `L1421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1421) · [Before (L1421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1421)

```diff
-           qC = CC, FC = new RC(CC, nC), WC = new IC(CC, nC), NC = new Qz(fC), SC(), MC = (0, bC.C)((0, wC.createElement)(wC.Fragment, null, (0, wC.createElement)(DC, {
+           Yp = pp, Dp = new Hp(pp, Sp), Ap = new kp(pp, Sp), Pp = new Ii(xp), Up(), Wp = (0, Ip.A)((0, op.createElement)(op.Fragment, null, (0, op.createElement)(gp, {
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1436` → after: `L1436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1436) · [Before (L1436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1436)

```diff
-           null === (ZC = FC) || void 0 === ZC || ZC.frame(CC, zC.tanHalfFovY), null === (QC = WC) || void 0 === QC || QC.frame(zC.cameraHeading), null === (wC = NC) || void 0 === wC || wC.frame(zC, null !== (bC = qC) && void 0 !== bC && bC.checkValid(nC) ? qC.yG(nC) : null)
+           null === (cp = Dp) || void 0 === cp || cp.frame(pp, ip.tanHalfFovY), null === (Op = Ap) || void 0 === Op || Op.frame(ip.cameraHeading), null === (op = Pp) || void 0 === op || op.frame(ip, null !== (Ip = Yp) && void 0 !== Ip && Ip.checkValid(Sp) ? Yp.sH(Sp) : null)
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1439` → after: `L1439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1439) · [Before (L1439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1439)

```diff
-           "frontlineHud" === CC ? fC.Ag(zC) : "frontlineScoreboard" === CC ? fC.receiveScoreboard(zC) : "frontlineRoundEnd" === CC ? oC.Ag(zC) : "frontlinePrefs" === CC && (gC = zC, SC())
+           "frontlineHud" === pp ? xp.Ey(ip) : "frontlineScoreboard" === pp ? xp.receiveScoreboard(ip) : "frontlineRoundEnd" === pp ? Lp.Ey(ip) : "frontlinePrefs" === pp && (yp = ip, Up())
```

#### 110. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1444` → after: `L1444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1444) · [Before (L1444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1444)

```diff
-   6453: (CC, zC, ZC) => {
+   6566: (pp, ip, cp) => {
```

#### 111. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1446` → after: `L1446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1446) · [Before (L1446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1446)

```diff
-       b: () => wC
+       d: () => op
```

#### 112. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1461` → after: `L1461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1461) · [Before (L1461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1461)

```diff
-   38319: (CC, zC, ZC) => {
+   38712: (pp, ip, cp) => {
```

#### 113. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1463-L1464` → after: `L1463-L1464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1463-L1464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1463-L1464) · [Before (L1463-L1464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1463-L1464)

```diff
-       e: () => nC,
-       i: () => bC
+       b: () => Sp,
+       d: () => Ip
```

#### 114. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1484` → after: `L1484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1484) · [Before (L1484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1484)

```diff
-       QC.x === zC && QC.y === ZC || (QC.x = zC, QC.y = ZC, CC.style.translate = `${zC}vw ${ZC}vh`)
+       Op.x === ip && Op.y === cp || (Op.x = ip, Op.y = cp, pp.style.translate = `${ip}vw ${cp}vh`)
```

#### 115. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1487` → after: `L1487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1487) · [Before (L1487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1487)

```diff
-   36938: (CC, zC, ZC) => {
+   37286: (pp, ip, cp) => {
```

#### 116. `bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1489` → after: `L1489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67R1489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-72eb48cf9a2e0196a89327103b09db7095eb3cf9237780991c8efaca6babdd67) · [After (L1489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1489) · [Before (L1489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1489)

```diff
-       e: () => QC
+       b: () => Op
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/clientGame-goalRush-goalRushClient.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/clientGame-goalRush-goalRushClient.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ccd97afffbd82b0248ddbcd0cf86d2135cedcf9be87e83f6bb735a74b499e08b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/clientGame-goalRush-goalRushClient.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ccd97afffbd82b0248ddbcd0cf86d2135cedcf9be87e83f6bb735a74b499e08bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ccd97afffbd82b0248ddbcd0cf86d2135cedcf9be87e83f6bb735a74b499e08b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-goalRush-goalRushClient.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-goalRush-goalRushClient.js#L4)

```diff
-   39262: (CC, zC, ZC) => {
+   39631: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/clientGame-goalRush-goalRushClient.js` (Changed code · before: `L63` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ccd97afffbd82b0248ddbcd0cf86d2135cedcf9be87e83f6bb735a74b499e08bR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ccd97afffbd82b0248ddbcd0cf86d2135cedcf9be87e83f6bb735a74b499e08b) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-goalRush-goalRushClient.js#L63) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-goalRush-goalRushClient.js#L63)

```diff
-             "ballState" === CC ? (oC = null !== (ZC = zC.eId) && void 0 !== ZC ? ZC : null, oC || SC()) : "frozen" === CC ? fC = zC.frozen : "pitchInfo" === CC && (qC = zC.goalZRed, FC = zC.goalZBlue, WC = Math.abs(FC - qC) / 2)
+             "ballState" === pp ? (Lp = null !== (cp = ip.eId) && void 0 !== cp ? cp : null, Lp || Up()) : "frozen" === pp ? xp = ip.frozen : "pitchInfo" === pp && (Yp = ip.goalZRed, Dp = ip.goalZBlue, Ap = Math.abs(Dp - Yp) / 2)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/clientGame-goalRush-goalRushClient.js` (Changed code · before: `L65` → after: `L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ccd97afffbd82b0248ddbcd0cf86d2135cedcf9be87e83f6bb735a74b499e08bR65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ccd97afffbd82b0248ddbcd0cf86d2135cedcf9be87e83f6bb735a74b499e08b) · [After (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-goalRush-goalRushClient.js#L65) · [Before (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-goalRush-goalRushClient.js#L65)

```diff
-           ZN: CC => {
+           LP: pp => {
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (75 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L4)

```diff
-   36483: (CC, zC, ZC) => {
+   36791: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L9` → after: `L7-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L7-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L7-L9) · [Before (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L9)

```diff
-       f: () => WC
+       h: () => yp,
+       i: () => Pp,
+       k: () => Ap
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L11-L18` → after: `L11-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L11-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L11-L18) · [Before (L11-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L11-L18)

```diff
-     var QC = ZC(34153),
-       wC = ZC(36488),
-       bC = ZC(36490),
-       nC = ZC(8735),
-       fC = ZC(1383),
-       oC = ZC(48),
-       qC = ZC(60),
-       FC = ZC(1056);
+     var Op = cp(34430),
+       op = cp(36799),
+       Ip = cp(36804),
+       Sp = cp(8852),
+       xp = cp(1476),
+       Lp = cp(62),
+       Yp = cp(82),
+       Dp = cp(1112);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L22-L23` → after: `L22-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L22-L23) · [Before (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L22-L23)

```diff
-       return (0, fC.f)(wC.d, (0, wC.q)()), (0, FC.jsx)(FC.Fragment, {
-         children: null === (CC = (0, wC.q)()) || void 0 === CC ? void 0 : CC.content
+       return (0, xp.i)(op.d, (0, op.s)()), (0, Dp.jsx)(Dp.Fragment, {
+         children: null === (pp = (0, op.s)()) || void 0 === pp ? void 0 : pp.content
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L32-L33` → after: `L32-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L32-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L32-L33) · [Before (L32-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L32-L33)

```diff
-       (0, fC.f)(wC.d, (0, wC.q)());
-       const qC = null === (zC = (0, wC.q)()) || void 0 === zC ? void 0 : zC.menu;
+       (0, xp.i)(op.d, (0, op.s)());
+       const Yp = null === (ip = (0, op.s)()) || void 0 === ip ? void 0 : ip.menu;
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L36-L37` → after: `L36-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L36-L37) · [Before (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L36-L37)

```diff
-         ZC || (null === qC || void 0 === qC || null === (CC = qC.onClose) || void 0 === CC || CC.call(qC), (0, bC.p)())
-       }), [ZC, qC]), (0, oC.useEffect)((() => ZC ? (0, nC.f)(bC.z, bC.g) : void 0), [ZC]), (0, FC.jsx)(QC.d, {
+         cp || (null === Yp || void 0 === Yp || null === (pp = Yp.onClose) || void 0 === pp || pp.call(Yp), (0, Ip.q)())
+       }), [cp, Yp]), (0, Lp.useEffect)((() => cp ? (0, Sp.e)(Ip.A, Ip.d) : void 0), [cp]), (0, Dp.jsx)(Op.b, {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L49` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L49) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L49)

```diff
-         id: `clientGameHud-${zC}`,
+         id: `clientGameHud-${ip}`,
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L63` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L63) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L63)

```diff
-         wC(document.getElementById(`clientGameHud-${ZC}`))
+         op(document.getElementById(`clientGameHud-${cp}`))
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L67` → after: `L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L67) · [Before (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L67)

```diff
-   34153: (CC, zC, ZC) => {
+   34430: (pp, ip, cp) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L69)

```diff
-       d: () => bC
+       b: () => Ip
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L71-L72` → after: `L71-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L71-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L71-L72) · [Before (L71-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L71-L72)

```diff
-     var QC = ZC(4473),
-       wC = ZC(4479);
+     var Op = cp(4628),
+       op = cp(4635);
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L83` → after: `L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L83) · [Before (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L83)

```diff
-       return (0, wC.b)(!0, ZC, bC, oC), (0, QC.d)(fC, ZC), ZC || nC ? zC : null
+       return (0, op.e)(!0, cp, Ip, Lp), (0, Op.d)(xp, cp), cp || Sp ? ip : null
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L86` → after: `L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L86) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L86)

```diff
-   8735: (CC, zC, ZC) => {
+   8852: (pp, ip, cp) => {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L88-L89` → after: `L88-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L88-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L88-L89) · [Before (L88-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L88-L89)

```diff
-       c: () => bC,
-       f: () => wC
+       b: () => Ip,
+       e: () => op
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L106` → after: `L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L106) · [Before (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L106)

```diff
-   36490: (CC, zC, ZC) => {
+   36804: (pp, ip, cp) => {
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L108-L110` → after: `L108-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L108-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L108-L112) · [Before (L108-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L108-L110)

```diff
-       B: () => GC,
-       c: () => bC,
-       g: () => SC,
+       A: () => yp,
+       E: () => tp,
+       b: () => Ip,
+       d: () => Up,
+       f: () => wp,
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L112-L117` → after: `L114-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L114-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L114-L117) · [Before (L112-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L112-L117)

```diff
-       m: () => fC,
-       o: () => NC,
-       p: () => PC,
-       r: () => WC,
-       v: () => RC,
-       z: () => gC
+       n: () => Pp,
+       q: () => vp,
+       u: () => Ap,
+       w: () => Hp
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L119-L120` → after: `L119-L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L119-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L119-L120) · [Before (L119-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L119-L120)

```diff
-     var QC = ZC(20),
-       wC = ZC(28);
+     var Op = cp(25),
+       op = cp(34);
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L127` → after: `L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L127) · [Before (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L127)

```diff
-         return (null !== (ZC = CC.order) && void 0 !== ZC ? ZC : 0) - (null !== (QC = zC.order) && void 0 !== QC ? QC : 0)
+         return (null !== (cp = pp.order) && void 0 !== cp ? cp : 0) - (null !== (Op = ip.order) && void 0 !== Op ? Op : 0)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L144` → after: `L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L144) · [Before (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L144)

```diff
-       CC.panel && "clientGame" === QC.b.get("openInGameMenuName") && qC(CC.id)
+       pp.panel && "clientGame" === Op.c.get("openInGameMenuName") && Yp(pp.id)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L170` → after: `L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L170) · [Before (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L170)

```diff
-       "inventory" !== QC.b.get("openInGameMenuName") && qC(null)
+       "inventory" !== Op.c.get("openInGameMenuName") && Yp(null)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L179-L180` → after: `L179-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L179-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L179-L180) · [Before (L179-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L179-L180)

```diff
-       return nC.set(CC.id, CC), wC.o.bp(bC, fC(), !0), () => {
-         nC.get(CC.id) === CC && (nC.delete(CC.id), wC.o.bp(bC, fC()))
+       return Sp.set(pp.id, pp), op.m.GA(Ip, xp(), !0), () => {
+         Sp.get(pp.id) === pp && (Sp.delete(pp.id), op.m.GA(Ip, xp()))
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L184` → after: `L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L184) · [Before (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L184)

```diff
-   36488: (CC, zC, ZC) => {
+   36799: (pp, ip, cp) => {
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L186` → after: `L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L186) · [Before (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L186)

```diff
-       C: () => FC,
+       A: () => Dp,
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L189` → after: `L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L189) · [Before (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L189)

```diff
-       k: () => PC,
+       l: () => vp,
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L191-L193` → after: `L191-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L191-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L191-L193) · [Before (L191-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L191-L193)

```diff
-       q: () => qC,
-       u: () => SC,
-       y: () => MC
+       s: () => Yp,
+       t: () => Up,
+       x: () => Wp
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L195-L198` → after: `L195-L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L195-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L195-L198) · [Before (L195-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L195-L198)

```diff
-     var QC = ZC(20),
-       wC = ZC(28),
-       bC = ZC(1240),
-       nC = ZC(36490);
+     var Op = cp(25),
+       op = cp(34),
+       Ip = cp(1308),
+       Sp = cp(36804);
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L211-L212` → after: `L211-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L211-L212) · [Before (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L211-L212)

```diff
-       return oC = ZC, wC.o.bp(fC, oC, !0), () => {
-         oC === ZC && (oC = null, gC = !1, pC(), wC.o.bp(fC, null))
+       return Lp = cp, op.m.GA(xp, Lp, !0), () => {
+         Lp === cp && (Lp = null, yp = !1, wp(), op.m.GA(xp, null))
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L229-L230` → after: `L229-L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L229-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L229-L230) · [Before (L229-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L229-L230)

```diff
-       const CC = QC.b.get("openInGameMenuName");
-       "clientGame" !== CC && (gC = "inventory" === CC), (0, nC.o)() || (0, nC.j)(), (0, bC.u)(bC.e), QC.b.set({
+       const pp = Op.c.get("openInGameMenuName");
+       "clientGame" !== pp && (yp = "inventory" === pp), (0, Sp.n)() || (0, Sp.f)(), (0, Ip.s)(Ip.c), Op.c.set({
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L245` → after: `L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L245) · [Before (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L245)

```diff
-       "clientGame" === QC.b.get("openInGameMenuName") && QC.b.set({
+       "clientGame" === Op.c.get("openInGameMenuName") && Op.c.set({
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L247` → after: `L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L247) · [Before (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L247)

```diff
-       }), CC || (0, nC.j)(), gC = !1
+       }), pp || (0, Sp.f)(), yp = !1
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L250` → after: `L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L250) · [Before (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L250)

```diff
-   39269: (CC, zC, ZC) => {
+   39640: (pp, ip, cp) => {
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L264-L266` → after: `L264-L266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L264-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L264-L266) · [Before (L264-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L264-L266)

```diff
-     var wC = ZC(48),
-       bC = ZC(37868),
-       nC = ZC(326);
+     var op = cp(62),
+       Ip = cp(38261),
+       Sp = cp(337);
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L270` → after: `L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L270) · [Before (L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L270)

```diff
-       return `${"Basic"===zC?"":`${zC} `}${"Simple"===CC?"":`${CC} `}Lucky Block`
+       return `${"Basic"===ip?"":`${ip} `}${"Simple"===pp?"":`${pp} `}Lucky Block`
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L283` → after: `L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L283) · [Before (L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L283)

```diff
-       MC = [...["Red", "Blue", "Green", "Yellow"].map((CC => `${(0,nC.S)(CC)} Wool`)), "Maple Wood Planks", "Cracked Stone Bricks", "Baked Clay", WC, ...NC];
+       Wp = [...["Red", "Blue", "Green", "Yellow"].map((pp => `${(0,Sp.ab)(pp)} Wool`)), "Maple Wood Planks", "Cracked Stone Bricks", "Baked Clay", Ap, ...Pp];
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L288` → after: `L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L288) · [Before (L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L288)

```diff
-     var SC = ZC(600);
+     var Up = cp(640);
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L304-L306` → after: `L304-L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L304-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L304-L306) · [Before (L304-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L304-L306)

```diff
-       length: SC.r - SC.q
-     }, ((CC, zC) => SC.q + zC)), ...Array.from({
-       length: SC.q
+       length: Up.p - Up.l
+     }, ((pp, ip) => Up.l + ip)), ...Array.from({
+       length: Up.l
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L316` → after: `L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L316) · [Before (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L316)

```diff
-         (null === QC || void 0 === QC ? void 0 : QC.name) === CC && (null !== (zC = QC.amount) && void 0 !== zC ? zC : 1) <= 1 && RC(CC) && this.pending.set(ZC, CC)
+         (null === Op || void 0 === Op ? void 0 : Op.name) === pp && (null !== (ip = Op.amount) && void 0 !== ip ? ip : 1) <= 1 && Hp(pp) && this.pending.set(cp, pp)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L319` → after: `L319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L319) · [Before (L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L319)

```diff
-         zC < SC.q && null === this.inventory.itemAt(zC) && RC(CC) && this.refill(zC, CC)
+         ip < Up.l && null === this.inventory.itemAt(ip) && Hp(pp) && this.refill(ip, pp)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L332` → after: `L332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L332) · [Before (L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L332)

```diff
-             if (!fC || nC < SC.q && zC !== ZC) continue;
+             if (!xp || Sp < Up.l && ip !== cp) continue;
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L345-L347` → after: `L345-L347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L345-L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L345-L347) · [Before (L345-L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L345-L347)

```diff
-     var AC = ZC(36488),
-       xC = ZC(60),
-       JC = ZC(1002),
+     var dp = cp(36799),
+       ep = cp(82),
+       jp = cp(1049),
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L363-L370` → after: `L363-L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L363-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L363-L370) · [Before (L363-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L363-L370)

```diff
-     var KC = ZC(310),
-       YC = ZC(2369),
-       dC = ZC(20),
-       mC = ZC(2557),
-       HC = ZC(1822),
-       EC = ZC(36483),
-       lC = ZC(1013);
-     var XC = ZC(1056);
+     var Cp = cp(322),
+       Ep = cp(2492),
+       Xp = cp(25),
+       lp = cp(2657),
+       Qp = cp(1941),
+       Jp = cp(36791),
+       Bp = cp(1060);
+     var Np = cp(1112);
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L372-L374` → after: `L372-L374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L372-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L372-L374) · [Before (L372-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L372-L374)

```diff
-       Basic: nC.H.whiteUiText,
-       Rare: nC.H.goldUiText,
-       Super: nC.H.cyanUiText
+       Basic: Sp.N.whiteUiText,
+       Rare: Sp.N.goldUiText,
+       Super: Sp.N.cyanUiText
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L379` → after: `L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L379) · [Before (L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L379)

```diff
-       const CC = (0, YC.h)("currencyAmounts"),
+       const pp = (0, Ep.i)("currencyAmounts"),
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L381` → after: `L381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L381) · [Before (L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L381)

```diff
-       return !zC || zC.hidden ? null : (0, XC.jsx)(EC.c, {
+       return !ip || ip.hidden ? null : (0, Np.jsx)(Jp.h, {
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L395` → after: `L395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L395) · [Before (L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L395)

```diff
-       } = (0, dC.k)(["openEverythingMenuName"]), qC = (0, mC.c)(), [FC, WC] = (0, wC.useState)(bC), [NC, MC] = (0, wC.useState)(null), [gC, SC] = (0, wC.useState)(0), [pC, PC] = (0, wC.useState)([]), GC = (0, wC.useRef)(bC), RC = (0, wC.useRef)(!1), AC = (0, wC.useRef)(null), JC  … [truncated]
+       } = (0, Xp.o)(["openEverythingMenuName"]), Yp = (0, lp.b)(), [Dp, Ap] = (0, op.useState)(Ip), [Pp, Wp] = (0, op.useState)(null), [yp, Up] = (0, op.useState)(0), [wp, vp] = (0, op.useState)([]), tp = (0, op.useRef)(Ip), Hp = (0, op.useRef)(!1), dp = (0, op.useRef)(null), jp  … [truncated]
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L419` → after: `L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L419) · [Before (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L419)

```diff
-           const ZC = nC.c.clamp((zC - fC) / 600, 0, 1);
+           const cp = Sp.d.clamp((ip - xp) / 600, 0, 1);
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L428` → after: `L428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L428) · [Before (L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L428)

```diff
-           const ZC = null !== (zC = fC.find((zC => CC < eC(zC)))) && void 0 !== zC ? zC : "Super";
+           const cp = null !== (ip = xp.find((ip => pp < qp(ip)))) && void 0 !== ip ? ip : "Super";
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L431` → after: `L431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L431) · [Before (L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L431)

```diff
-             progress: nC.c.clamp(CC / eC(ZC), 0, 1)
+             progress: Sp.d.clamp(pp / qp(cp), 0, 1)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L448` → after: `L448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L448) · [Before (L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L448)

```diff
-                 transform: `scaleX(${vC.progress})`
+                 transform: `scaleX(${Rp.progress})`
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L453` → after: `L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L453) · [Before (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L453)

```diff
-                 animationDelay: `${null!==(zC=null===NC||void 0===NC?void 0:NC.delayMs)&&void 0!==zC?zC:0}ms`
+                 animationDelay: `${null!==(ip=null===Pp||void 0===Pp?void 0:Pp.delayMs)&&void 0!==ip?ip:0}ms`
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L459` → after: `L459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L459) · [Before (L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L459)

```diff
-                 animationDelay: `${null!==(QC=null===NC||void 0===NC?void 0:NC.delayMs)&&void 0!==QC?QC:0}ms`
+                 animationDelay: `${null!==(Op=null===Pp||void 0===Pp?void 0:Pp.delayMs)&&void 0!==Op?Op:0}ms`
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L461` → after: `L461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L461) · [Before (L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L461)

```diff
-               children: (0, XC.jsx)(HC.e, {
+               children: (0, Np.jsx)(Qp.d, {
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L465` → after: `L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L465) · [Before (L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L465)

```diff
-             }, null !== (ZC = null === NC || void 0 === NC ? void 0 : NC.id) && void 0 !== ZC ? ZC : 0), (0, XC.jsx)("span", {
+             }, null !== (cp = null === Pp || void 0 === Pp ? void 0 : Pp.id) && void 0 !== cp ? cp : 0), (0, Np.jsx)("span", {
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L468` → after: `L468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L468) · [Before (L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L468)

```diff
-             }), YC && (0, XC.jsx)(lC.c, {
+             }), Ep && (0, Np.jsx)(Bp.d, {
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L498` → after: `L498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L498) · [Before (L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L498)

```diff
-           transform: `translate(${nC}px, ${fC}px) scale(0.3)`,
+           transform: `translate(${Sp}px, ${xp}px) scale(0.3)`,
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L501` → after: `L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L501) · [Before (L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L501)

```diff
-           transform: `translate(${oC}px, ${qC}px) scale(1.3)`,
+           transform: `translate(${Lp}px, ${Yp}px) scale(1.3)`,
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L505` → after: `L505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L505) · [Before (L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L505)

```diff
-           transform: `translate(${wC.left}px, ${wC.top}px) scale(0.8)`,
+           transform: `translate(${op.left}px, ${op.top}px) scale(0.8)`,
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L519` → after: `L519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L519) · [Before (L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L519)

```diff
-         children: (0, XC.jsx)(HC.e, {
+         children: (0, Np.jsx)(Qp.d, {
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L525` → after: `L525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L525) · [Before (L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L525)

```diff
-     var aC = ZC(28);
+     var np = cp(34);
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L537` → after: `L537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L537) · [Before (L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L537)

```diff
-       return null !== (zC = DC[CC.split(" ")[0]]) && void 0 !== zC ? zC : "#e07bff"
+       return null !== (ip = gp[pp.split(" ")[0]]) && void 0 !== ip ? ip : "#e07bff"
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L560` → after: `L560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L560) · [Before (L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L560)

```diff
-         this.bp()
+         this.GA()
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L575` → after: `L575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L575) · [Before (L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L575)

```diff
-         ZC && this.bp()
+         cp && this.GA()
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L581-L587` → after: `L581-L587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L581-L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L581-L587) · [Before (L581-L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L581-L587)

```diff
-         }, aC.o.bp(tC, this.view)
-       }
-     }
-     var LC = ZC(1383);
- 
-     function UC(CC) {
-       return document.querySelector(`.HotBar [data-inven-idx="${CC}"]`)
+         }, np.m.GA(Fp, this.view)
+       }
+     }
+     var Zp = cp(1476);
+ 
+     function zp(pp) {
+       return document.querySelector(`.HotBar [data-inven-idx="${pp}"]`)
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L597` → after: `L597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L597) · [Before (L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L597)

```diff
-         QC(null !== (CC = null === (ZC = UC(zC.slot)) || void 0 === ZC ? void 0 : ZC.getBoundingClientRect()) && void 0 !== CC ? CC : null)
+         Op(null !== (pp = null === (cp = zp(ip.slot)) || void 0 === cp ? void 0 : cp.getBoundingClientRect()) && void 0 !== pp ? pp : null)
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L638` → after: `L638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L638) · [Before (L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L638)

```diff
-       const ZC = (0, LC.f)(tC, zC.getView());
+       const cp = (0, Zp.i)(Fp, ip.getView());
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L668` → after: `L668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L668) · [Before (L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L668)

```diff
-           fC = CC, qC = (0, AC.C)((0, wC.createElement)(wC.Fragment, null, (0, wC.createElement)(rC), (0, wC.createElement)(kC, {
+           xp = pp, Yp = (0, dp.A)((0, op.createElement)(op.Fragment, null, (0, op.createElement)(bp), (0, op.createElement)(Vp, {
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L676-L677` → after: `L676-L677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L676-L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L676-L677) · [Before (L676-L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L676-L677)

```diff
-         ZN: () => {
-           FC.ZN(), WC.ZN()
+         LP: () => {
+           Dp.LP(), Ap.LP()
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L680` → after: `L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L680) · [Before (L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L680)

```diff
-           "luckyGearUpgrade" === CC && WC.Ag(zC)
+           "luckyGearUpgrade" === pp && Ap.Ey(ip)
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L697` → after: `L697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L697) · [Before (L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L697)

```diff
-   37868: (CC, zC, ZC) => {
+   38261: (pp, ip, cp) => {
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L701-L704` → after: `L701-L704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L701-L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L701-L704) · [Before (L701-L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L701-L704)

```diff
-     var QC = ZC(326),
-       wC = ZC(36796),
-       bC = ZC(4402);
-     const nC = ["Leaf Bed", "_Leaf Bed Head", ...QC.sc.flatMap((CC => [`${CC} Bed`, `_${CC} Bed Head`, `${CC} Strongbed`, `_${CC} Strongbed Head`]))];
+     var Op = cp(337),
+       op = cp(37146),
+       Ip = cp(4561);
+     const Sp = ["Leaf Bed", "_Leaf Bed Head", ...Op.wc.flatMap((pp => [`${pp} Bed`, `_${pp} Bed Head`, `${pp} Strongbed`, `_${pp} Strongbed Head`]))];
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L715` → after: `L715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L715) · [Before (L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L715)

```diff
-           if ((0, wC.d)(CC.getMetaInfo(fC).rootName) && !CC.isEntityInteractable(oC) && (0, bC.c)(null === (qC = CC.XzC(zC)) || void 0 === qC ? void 0 : qC.typeObj.type)) return "preventAction"
+           if ((0, op.b)(pp.getMetaInfo(xp).rootName) && !pp.isEntityInteractable(Lp) && (0, Ip.g)(null === (Yp = pp.Acp(ip)) || void 0 === Yp ? void 0 : Yp.typeObj.type)) return "preventAction"
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L720` → after: `L720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L720) · [Before (L720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L720)

```diff
-   36796: (CC, zC, ZC) => {
+   37146: (pp, ip, cp) => {
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L737` → after: `L737-L738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L737-L738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L737-L738) · [Before (L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L737)

```diff
-       d: () => nC,
+       b: () => Sp,
+       f: () => Op,
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L739-L740` → after: `L740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80cR740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7b47dfa7523b63ed5a6e46cb9470244e4d265caf6ca912f7a8e689bae4f7e80c) · [After (L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L740) · [Before (L739-L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L739-L740)

```diff
-       i: () => bC,
-       l: () => wC
+       h: () => op
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/clientGame-ninetyNineNights-ninetyNineNightsClient.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/clientGame-ninetyNineNights-ninetyNineNightsClient.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-164f5499516c06a2a58624d4d55132749302c9f9a02ccd7288c65689293571b1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/clientGame-ninetyNineNights-ninetyNineNightsClient.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-164f5499516c06a2a58624d4d55132749302c9f9a02ccd7288c65689293571b1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-164f5499516c06a2a58624d4d55132749302c9f9a02ccd7288c65689293571b1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-ninetyNineNights-ninetyNineNightsClient.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-ninetyNineNights-ninetyNineNightsClient.js#L4)

```diff
-   39275: (CC, zC, ZC) => {
+   39642: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/clientGame-ninetyNineNights-ninetyNineNightsClient.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-164f5499516c06a2a58624d4d55132749302c9f9a02ccd7288c65689293571b1R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-164f5499516c06a2a58624d4d55132749302c9f9a02ccd7288c65689293571b1) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-ninetyNineNights-ninetyNineNightsClient.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-ninetyNineNights-ninetyNineNightsClient.js#L8)

```diff
-     var QC = ZC(28);
+     var Op = cp(34);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/clientGame-ninetyNineNights-ninetyNineNightsClient.js` (Changed code · before: `L16` → after: `L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-164f5499516c06a2a58624d4d55132749302c9f9a02ccd7288c65689293571b1R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-164f5499516c06a2a58624d4d55132749302c9f9a02ccd7288c65689293571b1) · [After (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-ninetyNineNights-ninetyNineNightsClient.js#L16) · [Before (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-ninetyNineNights-ninetyNineNightsClient.js#L16)

```diff
-           zC || "Workbench" !== wC.getMetaInfo(fC).rootName || QC.o.bp("toggleMenu", "inventory|Workbench")
+           ip || "Workbench" !== op.getMetaInfo(xp).rootName || Op.m.GA("toggleMenu", "inventory|Workbench")
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/clientGame-oneBlock-oneBlockClient.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/clientGame-oneBlock-oneBlockClient.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2fe198b97e46d8af06b04e21adcbcd5852aa5948dfe8a2d5e8bc279e0afae863)

#### 1. `bundles/preprod.bloxd.io/chunks/js/clientGame-oneBlock-oneBlockClient.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2fe198b97e46d8af06b04e21adcbcd5852aa5948dfe8a2d5e8bc279e0afae863R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2fe198b97e46d8af06b04e21adcbcd5852aa5948dfe8a2d5e8bc279e0afae863) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-oneBlock-oneBlockClient.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-oneBlock-oneBlockClient.js#L4)

```diff
-   39284: (CC, zC, ZC) => {
+   39649: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/clientGame-oneBlock-oneBlockClient.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2fe198b97e46d8af06b04e21adcbcd5852aa5948dfe8a2d5e8bc279e0afae863R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2fe198b97e46d8af06b04e21adcbcd5852aa5948dfe8a2d5e8bc279e0afae863) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-oneBlock-oneBlockClient.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-oneBlock-oneBlockClient.js#L30)

```diff
-         ZN: () => {
+         LP: () => {
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (52 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00)

#### 1. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4)

```diff
-   36483: (CC, zC, ZC) => {
+   36791: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L9` → after: `L7-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L7-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L7-L9) · [Before (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L9)

```diff
-       f: () => WC
+       h: () => yp,
+       i: () => Pp,
+       k: () => Ap
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L11-L18` → after: `L11-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L11-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L11-L18) · [Before (L11-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L11-L18)

```diff
-     var QC = ZC(34153),
-       wC = ZC(36488),
-       bC = ZC(36490),
-       nC = ZC(8735),
-       fC = ZC(1383),
-       oC = ZC(48),
-       qC = ZC(60),
-       FC = ZC(1056);
+     var Op = cp(34430),
+       op = cp(36799),
+       Ip = cp(36804),
+       Sp = cp(8852),
+       xp = cp(1476),
+       Lp = cp(62),
+       Yp = cp(82),
+       Dp = cp(1112);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L22-L23` → after: `L22-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L22-L23) · [Before (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L22-L23)

```diff
-       return (0, fC.f)(wC.d, (0, wC.q)()), (0, FC.jsx)(FC.Fragment, {
-         children: null === (CC = (0, wC.q)()) || void 0 === CC ? void 0 : CC.content
+       return (0, xp.i)(op.d, (0, op.s)()), (0, Dp.jsx)(Dp.Fragment, {
+         children: null === (pp = (0, op.s)()) || void 0 === pp ? void 0 : pp.content
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L32-L33` → after: `L32-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L32-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L32-L33) · [Before (L32-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L32-L33)

```diff
-       (0, fC.f)(wC.d, (0, wC.q)());
-       const qC = null === (zC = (0, wC.q)()) || void 0 === zC ? void 0 : zC.menu;
+       (0, xp.i)(op.d, (0, op.s)());
+       const Yp = null === (ip = (0, op.s)()) || void 0 === ip ? void 0 : ip.menu;
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L36-L37` → after: `L36-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L36-L37) · [Before (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L36-L37)

```diff
-         ZC || (null === qC || void 0 === qC || null === (CC = qC.onClose) || void 0 === CC || CC.call(qC), (0, bC.p)())
-       }), [ZC, qC]), (0, oC.useEffect)((() => ZC ? (0, nC.f)(bC.z, bC.g) : void 0), [ZC]), (0, FC.jsx)(QC.d, {
+         cp || (null === Yp || void 0 === Yp || null === (pp = Yp.onClose) || void 0 === pp || pp.call(Yp), (0, Ip.q)())
+       }), [cp, Yp]), (0, Lp.useEffect)((() => cp ? (0, Sp.e)(Ip.A, Ip.d) : void 0), [cp]), (0, Dp.jsx)(Op.b, {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L49` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L49) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L49)

```diff
-         id: `clientGameHud-${zC}`,
+         id: `clientGameHud-${ip}`,
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L63` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L63) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L63)

```diff
-         wC(document.getElementById(`clientGameHud-${ZC}`))
+         op(document.getElementById(`clientGameHud-${cp}`))
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L67` → after: `L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L67) · [Before (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L67)

```diff
-   34153: (CC, zC, ZC) => {
+   34430: (pp, ip, cp) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L69)

```diff
-       d: () => bC
+       b: () => Ip
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L71-L72` → after: `L71-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L71-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L71-L72) · [Before (L71-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L71-L72)

```diff
-     var QC = ZC(4473),
-       wC = ZC(4479);
+     var Op = cp(4628),
+       op = cp(4635);
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L83` → after: `L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L83) · [Before (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L83)

```diff
-       return (0, wC.b)(!0, ZC, bC, oC), (0, QC.d)(fC, ZC), ZC || nC ? zC : null
+       return (0, op.e)(!0, cp, Ip, Lp), (0, Op.d)(xp, cp), cp || Sp ? ip : null
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L86` → after: `L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L86) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L86)

```diff
-   36564: (CC, zC, ZC) => {
+   36879: (pp, ip, cp) => {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L91` → after: `L90-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L90-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L90-L91) · [Before (L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L91)

```diff
-       k: () => oC
+       l: () => xp,
+       m: () => Lp
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L93-L94` → after: `L93-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L93-L94) · [Before (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L93-L94)

```diff
-     var QC = ZC(48),
-       wC = ZC(3099);
+     var Op = cp(62),
+       op = cp(3209);
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L100` → after: `L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L100) · [Before (L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L100)

```diff
-       const [zC] = (0, wC.c)(), [ZC, oC] = (0, QC.useState)(!1);
+       const [ip] = (0, op.b)(), [cp, Lp] = (0, Op.useState)(!1);
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L103-L104` → after: `L103-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L103-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L103-L104) · [Before (L103-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L103-L104)

```diff
-         const zC = document.querySelector(`.${nC}`),
-           ZC = document.querySelector(`.${fC}`),
+         const ip = document.querySelector(`.${Sp}`),
+           cp = document.querySelector(`.${xp}`),
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L121` → after: `L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L121) · [Before (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L121)

```diff
-   8735: (CC, zC, ZC) => {
+   8852: (pp, ip, cp) => {
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L123-L124` → after: `L123-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L123-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L123-L124) · [Before (L123-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L123-L124)

```diff
-       c: () => bC,
-       f: () => wC
+       b: () => Ip,
+       e: () => op
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L141` → after: `L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L141) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L141)

```diff
-   36490: (CC, zC, ZC) => {
+   38736: (pp, ip, cp) => {
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L143-L152` → after: `L143-L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L143-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L143-L145) · [Before (L143-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L143-L152)

```diff
-       B: () => GC,
-       c: () => bC,
-       g: () => SC,
-       j: () => pC,
-       m: () => fC,
-       o: () => NC,
-       p: () => PC,
-       r: () => WC,
-       v: () => RC,
-       z: () => gC
+       b: () => Sp,
+       e: () => xp,
+       i: () => Lp
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L154-L157` → after: `L147-L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L147-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L147-L149) · [Before (L154-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L154-L157)

```diff
-     var QC = ZC(20),
-       wC = ZC(28);
-     const bC = "clientGameInventoryButtonsChanged",
-       nC = new Map;
+     const Op = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
+       op = [0, 1, 2, 0, 2, 3],
+       Ip = [4, 5];
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L159-L163` → after: `L151-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L151-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L151-L152) · [Before (L159-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L159-L163)

```diff
-     function fC() {
-       return [...nC.values()].sort(((CC, zC) => {
-         var ZC, QC;
-         return (null !== (ZC = CC.order) && void 0 !== ZC ? ZC : 0) - (null !== (QC = zC.order) && void 0 !== QC ? QC : 0)
-       }))
+     function Sp(pp, ip, cp, Op, op) {
+       for (let Sp = 0; Sp < 6; Sp++) Ip.includes(Sp) === op && Yp(pp, ip, cp, Op, Sp)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L167-L168` → after: `L155-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L155-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L155-L156) · [Before (L167-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L167-L168)

```diff
-     function qC(CC) {
-       oC = CC
+     function xp(pp, ip, cp, Op) {
+       for (let op = 0; op < 6; op++) Yp(pp, ip, cp, Op, op)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L172-L179` → after: `L159-L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L159-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L159-L175) · [Before (L172-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L172-L179)

```diff
-     function WC(CC) {
-       FC = !0;
-       try {
-         CC.onClick()
-       } finally {
-         FC = !1
-       }
-       CC.panel && "clientGame" === QC.b.get("openInGameMenuName") && qC(CC.id)
+     function Lp(pp, ip, cp, Ip, Sp) {
+       for (let xp = 0; xp < 6; xp++)
+         for (const Lp of [0, 1]) {
+           const [Yp, Dp, Ap] = [Lp + 2, Lp + 1, (Lp + 3) % 4], Pp = pp.length / 3;
+           for (const [ip, op] of [
+               [Lp, Dp],
+               [Yp, Dp],
+               [Yp, Ap],
+               [Lp, Ap]
+             ])
+             for (let Lp = 0; Lp < 3; Lp++) {
+               const Yp = Op[3 * (4 * xp + ip) + Lp],
+                 Dp = Op[3 * (4 * xp + op) + Lp];
+               pp.push((Yp + (Dp - Yp) * Sp) * Ip / 2 + cp[Lp])
+             }
+           for (const pp of op) ip.push(Pp + pp)
+ ... (1 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L182-L183` → after: `L178-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L178-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L178-L182) · [Before (L182-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L182-L183)

```diff
-     function NC() {
-       return FC
+     function Yp(pp, ip, cp, Ip, Sp) {
+       let [xp, Lp, Yp] = cp, [Dp, Ap, Pp] = Ip;
+       const Wp = pp.length / 3;
+       for (let op = 4 * Sp; op < 4 * Sp + 4; op++) pp.push(Op[3 * op] * Dp / 2 + xp, Op[3 * op + 1] * Ap / 2 + Lp, Op[3 * op + 2] * Pp / 2 + Yp);
+       for (const Op of op) ip.push(Wp + Op)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L186-L188` → after: `L207-L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L207-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L207-L295) · [Before (L186-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L186-L188)

```diff
-     function MC() {
-       return fC().filter((CC => CC.panel && !CC.disabled))
-     }
+     function dp() {}
+     const ep = (0, Ip.createContext)({
+       hint: null,
+       journalRef: dp,
+       placementCardRef: dp,
+       buildRef: dp
+     });
+     var jp = cp(34);
+     const kp = [
+         ["farm_hut", "farm_house", "farm_barn"],
+         ["rusticHome_tent", "rusticHome_cabin", "rusticHome_house"],
+         ["market_stand", "market_stall", "market_shop"],
+         ["castle_wall", "castle_gate", "castle_tower"]
+       ],
+       mp = {
+         farm_hut: {
+ ... (73 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L191-L197` → after: `L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L298) · [Before (L191-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L191-L197)

```diff
-       const zC = MC(),
-         ZC = zC.findIndex((CC => CC.id === oC));
-       return !(ZC < 0 || zC.length < 2) && (WC(zC[(ZC + CC + zC.length) % zC.length]), !0)
-     }
- 
-     function SC() {
-       return null !== oC && MC().length > 1
+       return mp[pp]
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L200-L201` → after: `L302-L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L302-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L302-L304) · [Before (L200-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L200-L201)

```diff
-     function pC() {
-       qC(null)
+     function Cp(pp) {
+       var ip;
+       return null !== (ip = Mp.get(pp)) && void 0 !== ip ? ip : null
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L204-L205` → after: `L329-L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L329-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L329-L362) · [Before (L204-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L204-L205)

```diff
-     function PC() {
-       "inventory" !== QC.b.get("openInGameMenuName") && qC(null)
+     function Xp(pp, ip) {
+       const cp = new Set(pp),
+         Op = function(pp) {
+           const ip = new Set(pp);
+           return new Set(Rp.filter((pp => {
+             const cp = Cp(pp);
+             return null === cp || ip.has(cp)
+           })))
+         }(cp);
+       return Rp.map((pp => {
+         const op = pp === ip;
+         if (cp.has(pp)) return {
+           id: pp,
+           active: op,
+           note: null,
+           state: "completed",
+ ... (18 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L207-L210` → after: `L364-L392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L364-L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L364-L392) · [Before (L207-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L207-L210)

```diff
- 
-     function GC() {
-       const CC = oC;
-       return qC(null), CC
+     const lp = "plotsJournalChanged";
+     class Qp {
+       constructor(pp, ip) {
+         this.api = pp, this.placement = ip, this.pages = null, this.openRequested = null, this.openedOffered = !1, this.reported = new Set, this.onOpened = () => {
+           this.placement.stop(), this.Yy(this.openedOffered ? "journal_offered" : "journal_opened"), this.openedOffered = !1
+         }, this.build = pp => {
+           this.placement.start(pp), (0, Sp.h)()
+         }, this.putAway = () => {
+           this.api.sendCommand(`${op} cancel`)
+         }
+       }
+       getPages() {
+         return this.pages
+       }
+       Ey(pp) {
+         let [, ip, cp] = pp;
+ ... (13 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L214-L215` → after: `L398-L525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L398-L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L398-L525) · [Before (L214-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L214-L215)

```diff
-       return nC.set(CC.id, CC), wC.o.bp(bC, fC(), !0), () => {
-         nC.get(CC.id) === CC && (nC.delete(CC.id), wC.o.bp(bC, fC()))
+       let {
+         journal: ip
+       } = pp;
+       const cp = (0, Lp.i)(lp, ip.getPages()),
+         {
+           isTouchScreen: Op
+         } = (0, xp.o)(["isTouchScreen"]),
+         {
+           t: op
+         } = (0, Dp.H)(),
+         Yp = (0, Ip.useContext)(ep);
+       return (0, tp.b)((pp => null !== cp && pp.code === Bp && !pp.repeat && !(0, Hp.isTypingInInput)()), (pp => {
+         (0, Wp.v)(pp, !0, Sp.t)
+       })), null === cp ? null : (0, Jp.jsx)(yp.h, {
+         placement: "topRight",
+         children: (0, Jp.jsx)("div", {
+ ... (112 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L237-L238` → after: `L529-L544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L529-L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L529-L544) · [Before (L237-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L237-L238)

```diff
-     function qC() {
-       return oC
+     function gp(pp, ip, cp) {
+       let {
+         xRotationMappedOrigin: Op,
+         shouldSwapXZ: op
+       } = cp;
+       const Ip = op ? ip : pp;
+       return null === Op ? Ip : Op - Ip
+     }
+ 
+     function Gp(pp, ip, cp) {
+       let {
+         zRotationMappedOrigin: Op,
+         shouldSwapXZ: op
+       } = cp;
+       const Ip = op ? pp : ip;
+       return null === Op ? Ip : Op - Ip
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L242-L247` → after: `L611-L657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L611-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L611-L657) · [Before (L242-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L242-L247)

```diff
-       const ZC = {
-         content: CC,
-         menu: zC
-       };
-       return oC = ZC, wC.o.bp(fC, oC, !0), () => {
-         oC === ZC && (oC = null, gC = !1, pC(), wC.o.bp(fC, null))
+       const cp = `${pp}|${ip}`;
+       let Op = Zp.get(cp);
+       if (void 0 === Op) {
+         const {
+           size: op,
+           palette: Ip,
+           layers: Sp
+         } = rp[pp], xp = 90 === ip || 270 === ip, [Lp, Yp] = xp ? [op[2], op[0]] : [op[0], op[2]], Dp = function(pp, ip, cp) {
+           let Op = null,
+             op = null,
+             Ip = !1;
+           switch (pp) {
+             case 0:
+               break;
+             case 90:
+               Op = ip - 1, Ip = !0;
+ ... (31 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L250` → after: `L661-L662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L661-L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L661-L662) · [Before (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L250)

```diff
-     let WC = null;
+     const sp = "plotsBuildProgressChanged",
+       Kp = new Map;
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L252-L253` → after: `L664-L729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L664-L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L664-L729) · [Before (L252-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L252-L253)

```diff
-     function NC() {
-       return WC
+     function Vp(pp, ip, cp) {
+       let Op = 0,
+         op = 0;
+       return function(pp) {
+         let ip = Kp.get(pp);
+         if (void 0 === ip) {
+           const Op = [];
+           for (const {
+               offset: ip
+             }
+             of zp(pp, 0).cells) {
+             var cp;
+             Op[ip[1]] = (null !== (cp = Op[ip[1]]) && void 0 !== cp ? cp : 0) + 1
+           }
+           ip = Op, Kp.set(pp, ip)
+         }
+ ... (50 more added lines; see GitHub link above)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L257-L259` → after: `L737-L749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L737-L749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L737-L749) · [Before (L257-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L257-L259)

```diff
-       return WC = CC, () => {
-         WC === CC && (WC = null)
-       }
+       let {
+         onSkip: ip,
+         className: cp
+       } = pp;
+       const {
+         t: Op
+       } = (0, Dp.H)();
+       return (0, Jp.jsx)("button", {
+         type: "button",
+         className: Pp()("PlotsGuideSkipButton", cp),
+         ...(0, Yi.h)(ip, "pointerup"),
+         children: Op("tutorial:skip")
+       })
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L263-L267` → after: `L752-L786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L752-L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L752-L786) · [Before (L263-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L263-L267)

```diff
-     function SC() {
-       const CC = QC.b.get("openInGameMenuName");
-       "clientGame" !== CC && (gC = "inventory" === CC), (0, nC.o)() || (0, nC.j)(), (0, bC.u)(bC.e), QC.b.set({
-         openInGameMenuName: "clientGame",
-         openEverythingMenuName: null
+     function Ai(pp) {
+       let {
+         target: ip,
+         placement: cp,
+         spotlight: Op = null,
+         children: op
+       } = pp;
+       const {
+         t: Sp
+       } = (0, Dp.H)(), xp = (0, Ip.useRef)(ip);
+       return xp.current = ip, (0, Si.x)("popup", xp, null === Op ? null : Op.onSkip, null !== Op, null, "controller:menusSkipTutorial"), (0, Jp.jsxs)(Li.h, {
+         target: ip,
+         placement: cp,
+         className: Pp()("PlotsGuideBubble", {
+           Passive: null === Op
+         }),
+ ... (19 more added lines; see GitHub link above)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L271-L272` → after: `L790-L812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L790-L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L790-L812) · [Before (L271-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L271-L272)

```diff
-     function pC() {
-       GC(!1)
+     function Pi(pp) {
+       let {
+         className: ip,
+         icon: cp,
+         title: Op,
+         children: op
+       } = pp;
+       return (0, Jp.jsxs)("div", {
+         className: Pp()("PlotsCard", ip),
+         role: "status",
+         children: [(0, Jp.jsx)("span", {
+           className: "PlotsCardIcon",
+           children: (0, Jp.jsx)(Up.d, {
+             name: cp
+           })
+         }), (0, Jp.jsxs)("div", {
+ ... (7 more added lines; see GitHub link above)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L275-L276` → after: `L815-L839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L815-L839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L815-L839) · [Before (L275-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L275-L276)

```diff
-     function PC() {
-       GC(gC)
+     function Wi(pp) {
+       let {
+         progress: ip,
+         goal: cp
+       } = pp;
+       const Op = Math.min(ip, cp);
+       return (0, Jp.jsxs)("div", {
+         className: "PlotsProgress",
+         children: [(0, Jp.jsx)("div", {
+           className: "PlotsProgressBar",
+           role: "progressbar",
+           "aria-valuemin": 0,
+           "aria-valuemax": cp,
+           "aria-valuenow": Op,
+           children: (0, Jp.jsx)("div", {
+             className: "PlotsProgressBarFill",
+ ... (9 more added lines; see GitHub link above)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L280-L282` → after: `L843-L877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L843-L877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L843-L877) · [Before (L280-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L280-L282)

```diff
-       "clientGame" === QC.b.get("openInGameMenuName") && QC.b.set({
-         openInGameMenuName: CC ? "inventory" : null
-       }), CC || (0, nC.j)(), gC = !1
+       let {
+         progress: ip,
+         guide: cp
+       } = pp;
+       const {
+         t: Op
+       } = (0, Dp.H)(), {
+         isTouchScreen: op
+       } = (0, xp.o)(["isTouchScreen"]), Ip = ip.filled < 5;
+       return (0, Jp.jsxs)(Jp.Fragment, {
+         children: [(Ip || ip.total - ip.filled <= 5) && (0, Jp.jsx)("div", {
+           className: "PlotsGuideHandLayer",
+           children: (0, Jp.jsx)("div", {
+             ref: cp.bindHand,
+             className: "PlotsGuideHand",
+             children: (0, Jp.jsx)(Up.d, {
+ ... (19 more added lines; see GitHub link above)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L295-L296` → after: `L880-L884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L880-L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L880-L884) · [Before (L295-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L295-L296)

```diff
-     function nC(CC, zC, ZC, QC, wC) {
-       for (let nC = 0; nC < 6; nC++) bC.includes(nC) === wC && qC(CC, zC, ZC, QC, nC)
+     function Ui(pp) {
+       const ip = Yp.t["alt-fire"][0];
+       return "Mouse3" === ip ? pp("plotsGame:guideBuildRightClick") : pp("plotsGame:guideBuildKeys", {
+         key: (0, Yp.l)(ip)
+       })
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L299-L300` → after: `L887-L894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L887-L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L887-L894) · [Before (L299-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L299-L300)

```diff
-     function fC(CC, zC, ZC, QC) {
-       for (let wC = 0; wC < 6; wC++) qC(CC, zC, ZC, QC, wC)
+     function wi() {
+       return (0, Jp.jsx)("div", {
+         className: "PlotsGuideDragHand",
+         children: (0, Jp.jsx)(Up.d, {
+           name: "hand-back-point-up",
+           className: "SmallTextBold TouchTutorialIcon"
+         })
+       })
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L303-L318` → after: `L929-L964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L929-L964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L929-L964) · [Before (L303-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L303-L318)

```diff
-     function oC(CC, zC, ZC, bC, nC) {
-       for (let fC = 0; fC < 6; fC++)
-         for (const oC of [0, 1]) {
-           const [qC, FC, WC] = [oC + 2, oC + 1, (oC + 3) % 4], NC = CC.length / 3;
-           for (const [zC, wC] of [
-               [oC, FC],
-               [qC, FC],
-               [qC, WC],
-               [oC, WC]
-             ])
-             for (let oC = 0; oC < 3; oC++) {
-               const qC = QC[3 * (4 * fC + zC) + oC],
-                 FC = QC[3 * (4 * fC + wC) + oC];
-               CC.push((qC + (FC - qC) * nC) * bC / 2 + ZC[oC])
-             }
-           for (const CC of wC) zC.push(NC + CC)
+     function Ei() {
+       return Ci ??= function() {
+         const pp = Xi(),
+           ip = Math.max(...pp.map((pp => Tp.e[pp].id))) + 1,
+           cp = new Int32Array(ip),
+           Op = new Int32Array(ip),
+           op = new Uint8Array(ip).fill(1),
+           Ip = new Uint8Array(ip),
+           Sp = new Uint8Array(ip),
+           xp = new Array(ip).fill("Air"),
+           Lp = new Map,
+           Yp = pp => {
+             let ip = Lp.get(pp);
+             return void 0 === ip && (ip = Lp.size + 1, Lp.set(pp, ip)), ip
+           },
+           Dp = new Set(qi);
+ ... (20 more added lines; see GitHub link above)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L322-L331` → after: `L977-L978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L977-L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L977-L978) · [Before (L322-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L322-L331)

```diff
-     function qC(CC, zC, ZC, bC, nC) {
-       let [fC, oC, qC] = ZC, [FC, WC, NC] = bC;
-       const MC = CC.length / 3;
-       for (let wC = 4 * nC; wC < 4 * nC + 4; wC++) CC.push(QC[3 * wC] * FC / 2 + fC, QC[3 * wC + 1] * WC / 2 + oC, QC[3 * wC + 2] * NC / 2 + qC);
-       for (const QC of wC) zC.push(MC + QC)
-     }
-   },
-   36766: (CC, zC, ZC) => {
-     function QC(CC, zC) {
-       return null === CC || null === zC ? CC === zC : CC[0] === zC[0] && CC[1] === zC[1] && CC[2] === zC[2]
+     function Xi() {
+       return Object.keys(Tp.e).filter((pp => Tp.e[pp].name === pp))
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L335` → after: `L982-L990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L982-L990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L982-L990) · [Before (L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L335)

```diff
-       return [CC[0] + .5, CC[1] + .5, CC[2] + .5]
+       var ip;
+       const cp = Tp.e[pp],
+         {
+           rootName: Op,
+           rot: op
+         } = cp.meta,
+         [, ...Ip] = (null !== (ip = cp.rootMetaDesc) && void 0 !== ip ? ip : pp).split("|"),
+         Sp = Ip.filter((pp => !("meta" === pp || Mi.test(pp) || (0, ji.C)(cp) && /^[nesw]+$/.test(pp) || ui.i.includes(Op) && /^[lrud]+$/.test(pp) || ki.M.includes(Op) && /^(left|right)$/.test(pp))));
+       return [Op, ...Sp].map((pp => "fenceGate" === cp.model && pp === `rot${op}` ? "rot" + ((op - 1) % 2 + 1) : pp)).join("|")
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L337-L342` → after: `L992-L1000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L992-L1000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L992-L1000) · [Before (L337-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L337-L342)

```diff
-     ZC.d(zC, {
-       e: () => wC,
-       i: () => QC
-     })
-   },
-   36796: (CC, zC, ZC) => {
+ 
+     function Qi(pp, ip) {
+       const {
+         kinds: cp,
+         shapes: Op
+       } = Ei();
+       return cp[pp] === cp[ip] || Op[pp] === Op[ip]
+     }
+ 
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L344` → after: `L1002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R1002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L1002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1002) · [Before (L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L344)

```diff
-       return CC.includes("Leaf Bed")
+       return 1 === Ei().empty[pp]
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L348` → after: `L1006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R1006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1006) · [Before (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L348)

```diff
-       return / Bed(?: Head)?(?:\||$)/.test(CC) && !QC(CC)
+       return Ei().placingItems[pp]
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L352` → after: `L1010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R1010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L1010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1010) · [Before (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L352)

```diff
-       return CC.includes(" Strongbed")
+       return Ri.get(Tp.e[pp].meta.rootName)
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L356` → after: `L1029-L1035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R1029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L1029-L1035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1029-L1035) · [Before (L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L356)

```diff
-       return QC(CC) || wC(CC) || bC(CC)
+       const {
+         Ww: ip,
+         model: cp,
+         blockModel: Op,
+         meta: op
+       } = Tp.e[pp];
+       return void 0 !== ip ? ip : "CentreCross" === cp ? ai : null !== Op && void 0 !== Op && Op.startsWith("torch") ? op.halfblockPlacement === fi.c.side ? gi[op.rot - 1] : op.halfblockPlacement === fi.c.top ? Fi : ni : bi
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L358-L382` → after: `L1037-L1100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00R1037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e62ceb52e2151d37e661136af74bcd27608630f9a7740f0093946b7755ebf00) · [After (L1037-L1100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1037-L1100) · [Before (L358-L382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L358-L382)

```diff
-     ZC.d(zC, {
-       d: () => nC,
-       g: () => QC,
-       i: () => bC,
-       l: () => wC
-     })
-   },
-   36794: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       e: () => qC
-     });
-     var QC = ZC(36796),
-       wC = ZC(9194);
-     const bC = [],
-       nC = [],
-       fC = [],
- ... (9 more removed lines; see GitHub link above)
+     var ri = cp(195);
+     class Zi {
+       constructor(pp) {
+         this.api = pp, this.chunks = [], this.versions = [], this.lastCheckMs = -1 / 0
+       }
+       watch(pp) {
+         const ip = ri.g.Qy;
+         this.chunks = [];
+         for (let cp = 0; cp < pp.length; cp += 3) {
+           const Op = Math.floor(pp[cp] / ip),
+             op = Math.floor(pp[cp + 1] / ip),
+             Ip = Math.floor(pp[cp + 2] / ip);
+           this.watches(Op, op, Ip) || this.chunks.push(Op, op, Ip)
+         }
+         this.versions = [], this.lastCheckMs = -1 / 0, this.changed()
+       }
+ ... (48 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/clientGame-pvpCiv-pvpCivClient.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/clientGame-pvpCiv-pvpCivClient.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2f444112d0767c3e18190fd2aa0e71217a31037766c6a8297f4169f39b1381c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/clientGame-pvpCiv-pvpCivClient.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2f444112d0767c3e18190fd2aa0e71217a31037766c6a8297f4169f39b1381cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2f444112d0767c3e18190fd2aa0e71217a31037766c6a8297f4169f39b1381c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-pvpCiv-pvpCivClient.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-pvpCiv-pvpCivClient.js#L4)

```diff
-   39356: (CC, zC, ZC) => {
+   39735: (pp, ip, cp) => {
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/clientGame-skyIslands-skyIslandsClient.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/clientGame-skyIslands-skyIslandsClient.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-536fb9ddb5a84396943060d99eb7d00fea1e263d557b2f78a5a09e2a3f4267ec)

#### 1. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyIslands-skyIslandsClient.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-536fb9ddb5a84396943060d99eb7d00fea1e263d557b2f78a5a09e2a3f4267ecR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-536fb9ddb5a84396943060d99eb7d00fea1e263d557b2f78a5a09e2a3f4267ec) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-skyIslands-skyIslandsClient.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-skyIslands-skyIslandsClient.js#L4)

```diff
-   39360: (CC, zC, ZC) => {
+   39744: (pp, ip, cp) => {
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (72 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904)

#### 1. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L4)

```diff
-   36483: (CC, zC, ZC) => {
+   36791: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L9` → after: `L7-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L7-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L7-L9) · [Before (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L9)

```diff
-       f: () => WC
+       h: () => yp,
+       i: () => Pp,
+       k: () => Ap
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L11-L18` → after: `L11-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L11-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L11-L18) · [Before (L11-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L11-L18)

```diff
-     var QC = ZC(34153),
-       wC = ZC(36488),
-       bC = ZC(36490),
-       nC = ZC(8735),
-       fC = ZC(1383),
-       oC = ZC(48),
-       qC = ZC(60),
-       FC = ZC(1056);
+     var Op = cp(34430),
+       op = cp(36799),
+       Ip = cp(36804),
+       Sp = cp(8852),
+       xp = cp(1476),
+       Lp = cp(62),
+       Yp = cp(82),
+       Dp = cp(1112);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L22-L23` → after: `L22-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L22-L23) · [Before (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L22-L23)

```diff
-       return (0, fC.f)(wC.d, (0, wC.q)()), (0, FC.jsx)(FC.Fragment, {
-         children: null === (CC = (0, wC.q)()) || void 0 === CC ? void 0 : CC.content
+       return (0, xp.i)(op.d, (0, op.s)()), (0, Dp.jsx)(Dp.Fragment, {
+         children: null === (pp = (0, op.s)()) || void 0 === pp ? void 0 : pp.content
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L32-L33` → after: `L32-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L32-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L32-L33) · [Before (L32-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L32-L33)

```diff
-       (0, fC.f)(wC.d, (0, wC.q)());
-       const qC = null === (zC = (0, wC.q)()) || void 0 === zC ? void 0 : zC.menu;
+       (0, xp.i)(op.d, (0, op.s)());
+       const Yp = null === (ip = (0, op.s)()) || void 0 === ip ? void 0 : ip.menu;
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L36-L37` → after: `L36-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L36-L37) · [Before (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L36-L37)

```diff
-         ZC || (null === qC || void 0 === qC || null === (CC = qC.onClose) || void 0 === CC || CC.call(qC), (0, bC.p)())
-       }), [ZC, qC]), (0, oC.useEffect)((() => ZC ? (0, nC.f)(bC.z, bC.g) : void 0), [ZC]), (0, FC.jsx)(QC.d, {
+         cp || (null === Yp || void 0 === Yp || null === (pp = Yp.onClose) || void 0 === pp || pp.call(Yp), (0, Ip.q)())
+       }), [cp, Yp]), (0, Lp.useEffect)((() => cp ? (0, Sp.e)(Ip.A, Ip.d) : void 0), [cp]), (0, Dp.jsx)(Op.b, {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L49` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L49) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L49)

```diff
-         id: `clientGameHud-${zC}`,
+         id: `clientGameHud-${ip}`,
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L63` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L63) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L63)

```diff
-         wC(document.getElementById(`clientGameHud-${ZC}`))
+         op(document.getElementById(`clientGameHud-${cp}`))
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L67` → after: `L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L67) · [Before (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L67)

```diff
-   4760: (CC, zC, ZC) => {
+   4950: (pp, ip, cp) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L69-L70` → after: `L69-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L69-L70) · [Before (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L69-L70)

```diff
-       c: () => pC,
-       d: () => PC
+       e: () => wp,
+       i: () => vp
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L72` → after: `L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L72) · [Before (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L72)

```diff
-     var QC = ZC(1002),
+     var Op = cp(1049),
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L74-L80` → after: `L74-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L74-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L74-L80) · [Before (L74-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L74-L80)

```diff
-       bC = ZC(48),
-       nC = ZC(1143),
-       fC = ZC(4769),
-       oC = ZC(1811),
-       qC = ZC(2369),
-       FC = ZC(4775),
-       WC = ZC(1056);
+       Ip = cp(62),
+       Sp = cp(1201),
+       xp = cp(4956),
+       Lp = cp(1929),
+       Yp = cp(2492),
+       Dp = cp(4964),
+       Ap = cp(1112);
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L98` → after: `L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L98) · [Before (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L98)

```diff
-           "--word-delay": `${zC.delayMs}ms`
+           "--word-delay": `${ip.delayMs}ms`
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L100-L101` → after: `L100-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L100-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L100-L101) · [Before (L100-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L100-L101)

```diff
-         children: (0, WC.jsx)(fC.e, {
-           text: "icon" === zC.kind ? `[[${zC.icon}]]` : zC.text
+         children: (0, Ap.jsx)(xp.d, {
+           text: "icon" === ip.kind ? `[[${ip.icon}]]` : ip.text
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L112` → after: `L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L112) · [Before (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L112)

```diff
-       } = (0, nC.y)(), QC = (0, bC.useMemo)((() => (0, FC.c)((0, FC.f)(zC).plan.pieces)), [zC, ZC.code]);
+       } = (0, Sp.H)(), Op = (0, Ip.useMemo)((() => (0, Dp.e)((0, Dp.h)(ip).plan.pieces)), [ip, cp.code]);
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L132` → after: `L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L132) · [Before (L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L132)

```diff
-       const CC = (0, qC.h)("dialogue");
+       const pp = (0, Yp.i)("dialogue");
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L145` → after: `L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L145) · [Before (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L145)

```diff
-   4769: (CC, zC, ZC) => {
+   4956: (pp, ip, cp) => {
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L147` → after: `L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L147) · [Before (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L147)

```diff
-       e: () => fC
+       d: () => xp
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L149-L152` → after: `L149-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L149-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L149-L152) · [Before (L149-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L149-L152)

```diff
-     var QC = ZC(48),
-       wC = ZC(310),
-       bC = ZC(1822),
-       nC = ZC(1056);
+     var Op = cp(62),
+       op = cp(322),
+       Ip = cp(1941),
+       Sp = cp(1112);
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L160-L161` → after: `L160-L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L160-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L160-L161) · [Before (L160-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L160-L161)

```diff
-       return (0, wC.dc)(zC).forEach(((CC, zC) => {
-         if ("string" === typeof CC || !(0, bC.h)(CC.icon)) return void(fC += "string" === typeof CC ? CC : CC.icon);
+       return (0, op.nc)(ip).forEach(((pp, ip) => {
+         if ("string" === typeof pp || !(0, Ip.f)(pp.icon)) return void(xp += "string" === typeof pp ? pp : pp.icon);
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L170` → after: `L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L170) · [Before (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L170)

```diff
-               children: (0, nC.jsx)(bC.e, {
+               children: (0, Sp.jsx)(Ip.d, {
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L182` → after: `L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L182) · [Before (L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L182)

```diff
-   34153: (CC, zC, ZC) => {
+   34430: (pp, ip, cp) => {
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L184` → after: `L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L184) · [Before (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L184)

```diff
-       d: () => bC
+       b: () => Ip
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L186-L187` → after: `L186-L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L186-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L186-L187) · [Before (L186-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L186-L187)

```diff
-     var QC = ZC(4473),
-       wC = ZC(4479);
+     var Op = cp(4628),
+       op = cp(4635);
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L198` → after: `L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L198) · [Before (L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L198)

```diff
-       return (0, wC.b)(!0, ZC, bC, oC), (0, QC.d)(fC, ZC), ZC || nC ? zC : null
+       return (0, op.e)(!0, cp, Ip, Lp), (0, Op.d)(xp, cp), cp || Sp ? ip : null
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L201` → after: `L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L201) · [Before (L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L201)

```diff
-   4775: (CC, zC, ZC) => {
+   4964: (pp, ip, cp) => {
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L203-L204` → after: `L203-L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L203-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L203-L204) · [Before (L203-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L203-L204)

```diff
-       c: () => EC,
-       f: () => HC
+       e: () => Jp,
+       h: () => Qp
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L206-L207` → after: `L206-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L206-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L206-L207) · [Before (L206-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L206-L207)

```diff
-     var QC = ZC(4783),
-       wC = ZC(310);
+     var Op = cp(4970),
+       op = cp(322);
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L218-L220` → after: `L218-L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L218-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L218-L220) · [Before (L218-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L218-L220)

```diff
-       SC = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${gC}$`),
-       pC = new RegExp(`[?\uff1f]${gC}$`),
-       PC = new RegExp(`[!\uff01]${gC}$`),
+       Up = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${yp}$`),
+       wp = new RegExp(`[?\uff1f]${yp}$`),
+       vp = new RegExp(`[!\uff01]${yp}$`),
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L223-L224` → after: `L223-L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L223-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L223-L224) · [Before (L223-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L223-L224)

```diff
-       AC = new RegExp(`[${RC}]`),
-       xC = new RegExp(`[${RC}]|[^${RC}]+`, "g"),
+       dp = new RegExp(`[${Hp}]`),
+       ep = new RegExp(`[${Hp}]|[^${Hp}]+`, "g"),
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L239` → after: `L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L239) · [Before (L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L239)

```diff
-       const wC = null !== (zC = ZC.match(JC)) && void 0 !== zC ? zC : [];
+       const op = null !== (ip = cp.match(jp)) && void 0 !== ip ? ip : [];
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L242` → after: `L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L242) · [Before (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L242)

```diff
-         const CC = null !== (bC = null === (nC = ZC.match(/\p{L}/gu)) || void 0 === nC ? void 0 : nC.length) && void 0 !== bC ? bC : 0;
+         const pp = null !== (Ip = null === (Sp = cp.match(/\p{L}/gu)) || void 0 === Sp ? void 0 : Sp.length) && void 0 !== Ip ? Ip : 0;
```
