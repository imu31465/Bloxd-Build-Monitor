# Changed — Bundle Modifications Report (Part 015 / 056)

- **Updated at**: `2026-11-26T01:33 JST`
- **Part**: `15 / 56` (**285** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 014](part-014.md) · [Part 016 →](part-016.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/273.js` (wp3j0a.a13381cf → fo1voe.f743fbcf · continued)

- **File**: `bundles/bloxd.io/chunks/js/273.js` (90 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325)

#### 33. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1059-L1062` → after: `L3043-L3081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R3043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L3043-L3081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L3043-L3081) · [Before (L1059-L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L1059-L1062)

```diff
-     function jZ(GG, bG, ZG) {
-       const wG = GG.hQ(388, bG, 4);
-       if (wG < 0) return !1;
-       return GG.view.setUint32(wG + 0, ZG, !0), !0
+     function oi(MM) {
+       let {
+         view: rM,
+         produce: iM,
+         controller: OM
+       } = MM;
+       const {
+         t: SM
+       } = (0, UM.A)(), jM = MM => {
+         const [rM, SM] = MM;
+         return (0, CM.jsx)(Di, {
+           line: MM,
+           selected: Pi(MM, iM),
+           onSelect: () => {
+             OM.selectProduce({
+               item: rM,
+ ... (23 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1065-L1069` → after: `L3084-L3152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R3084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L3084-L3152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L3084-L3152) · [Before (L1065-L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L1065-L1069)

```diff
-     function PZ(GG, bG, ZG, wG) {
-       const SG = GG.hQ(389, bG, 8);
-       if (SG < 0) return !1;
-       const LG = GG.view;
-       return LG.setInt32(SG + 0, ZG, !0), LG.setFloat32(SG + 4, wG, !0), !0
+     function fi(MM) {
+       let {
+         controller: rM
+       } = MM;
+       const iM = (0, lM.e)(Ji, rM.getView()),
+         {
+           t: OM
+         } = (0, UM.A)(),
+         SM = function(MM) {
+           const {
+             t: rM
+           } = (0, UM.A)();
+           return "delivered" === MM.kind ? rM("greenvilleGame:tillieDelivered", {
+             order: rM(MM.nameKey),
+             gold: MM.gold
+           }) : "sold" === MM.kind ? rM("greenvilleGame:tillieSold", {
+ ... (53 more added lines; see GitHub link above)
```

#### 35. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1072-L1076` → after: `L3156-L3300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R3156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L3156-L3300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L3156-L3300) · [Before (L1072-L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L1072-L1076)

```diff
-     function MZ(GG, bG, ZG, wG) {
-       const SG = GG.hQ(390, bG, 8);
-       if (SG < 0) return !1;
-       const LG = GG.view;
-       return LG.setInt32(SG + 0, ZG, !0), LG.setFloat32(SG + 4, wG, !0), !0
+     function Ni(MM) {
+       let {
+         controller: rM
+       } = MM;
+       (0, lM.e)(di, null);
+       const {
+         t: iM
+       } = (0, UM.A)(), OM = rM.getTracker();
+       return null === OM ? null : (0, CM.jsxs)("div", {
+         className: "GreenvilleTrackerCard",
+         children: [(0, CM.jsx)("strong", {
+           className: "GreenvilleTrackerTitle",
+           children: iM(OM.nameKey)
+         }), (0, CM.jsx)("ul", {
+           className: "GreenvilleTrackerRows",
+           children: OM.needs.map((MM => {
+ ... (129 more added lines; see GitHub link above)
```

#### 36. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1079-L1083` → after: `L3303-L3321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R3303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L3303-L3321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L3303-L3321) · [Before (L1079-L1083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L1079-L1083)

```diff
-     function AZ(GG, bG, ZG, wG, SG, LG) {
-       const yG = GG.hQ(391, bG, 12);
-       if (yG < 0) return !1;
-       const kG = GG.view;
-       return kG.setFloat32(yG + 0, ZG, !0), kG.setFloat32(yG + 4, wG, !0), kG.setUint8(yG + 8, SG), kG.setUint8(yG + 9, LG), !0
+     function Fi(MM) {
+       switch (MM[0]) {
+         case "hudTier":
+           return {
+             kind: MM[0], tierKey: MM[1], locked: MM[2]
+           };
+         case "hudBay":
+           return {
+             kind: MM[0], materialKey: MM[1], objectKey: MM[2], percent: MM[3]
+           };
+         case "hudBayEmpty":
+           return {
+             kind: MM[0]
+           };
+         case "hudFarmTier":
+           return {
+ ... (3 more added lines; see GitHub link above)
```

#### 37. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1087-L1089` → after: `L3336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R3336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L3336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L3336) · [Before (L1087-L1089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L1087-L1089)

```diff
-       const wG = GG.hQ(392, bG, 4);
-       if (wG < 0) return !1;
-       return GG.view.setUint32(wG + 0, ZG, !0), !0
+       return rM >= MM.x0 && rM <= MM.x1 && iM >= MM.z0 && iM <= MM.z1
```

#### 38. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1092-L1096` → after: `L3346-L3347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R3346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L3346-L3347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L3346-L3347) · [Before (L1092-L1096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L1092-L1096)

```diff
-     function qZ(GG, bG, ZG, wG, SG) {
-       const LG = GG.hQ(393, bG, 12);
-       if (LG < 0) return !1;
-       const yG = GG.view;
-       return yG.setUint32(LG + 0, ZG, !0), yG.setUint16(LG + 4, wG, !0), yG.setFloat32(LG + 8, SG, !0), !0
+     function aO(MM, rM) {
+       return [Ti + Vi + MM * ci, Ti + Vi + rM * ci]
```

#### 39. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1099-L1105` → after: `L3350-L3375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R3350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L3350-L3375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L3350-L3375) · [Before (L1099-L1105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L1099-L1105)

```diff
-     function nZ(GG, bG, ZG, wG, SG, LG, yG) {
-       const kG = GG.hQ(394, bG, 36);
-       if (kG < 0) return !1;
-       const UG = GG.view;
-       UG.setUint32(kG + 0, ZG, !0), UG.setUint16(kG + 4, wG, !0), UG.setUint8(kG + 6, SG);
-       for (let YG = 0; YG < 3; YG++) UG.setFloat64(kG + 8 + 8 * YG, LG[YG], !0);
-       return UG.setFloat32(kG + 32, yG, !0), !0
+     function PO() {
+       const MM = [];
+       SO.forEach(((rM, iM) => {
+         rM.forEach(((rM, OM) => {
+           if ("residential" !== rM.kind) return;
+           const [SM, jM] = aO(OM, iM);
+           for (const [iM, aM, PM] of [
+               [0, 0, "north"],
+               [1, 0, "north"],
+               [0, 1, "south"],
+               [1, 1, "south"]
+             ]) MM.push({
+             chunk: [SM / qi + iM, 0, jM / qi + aM],
+             facing: PM,
+             neighbourhood: rM.name
+           })
+ ... (10 more added lines; see GitHub link above)
```

#### 40. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1108-L1111` → after: `L3394-L3457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R3394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L3394-L3457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L3394-L3457) · [Before (L1108-L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L1108-L1111)

```diff
-     function gZ(GG, bG, ZG) {
-       const wG = GG.hQ(398, bG, 4);
-       if (wG < 0) return !1;
-       return GG.view.setUint32(wG + 0, ZG, !0), !0
+     function zO(MM, rM, iM, OM) {
+       switch (rM.kind) {
+         case "hudTown":
+           return "city" !== rM.place ? {
+             key: rM.place,
+             name: MM(`greenvilleGame:${rM.place}`),
+             eyebrow: null
+           } : "tile" === iM.kind ? {
+             key: `place|${jO[iM.district]}`,
+             name: jO[iM.district],
+             eyebrow: null
+           } : "outside" === iM.kind ? {
+             key: "city|outside",
+             name: MM("greenvilleGame:placeGreenville"),
+             eyebrow: null
+           } : null;
+ ... (48 more added lines; see GitHub link above)
```

#### 41. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1114-L1117` → after: `L3460-L3493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R3460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L3460-L3493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L3460-L3493) · [Before (L1114-L1117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L1114-L1117)

```diff
-     function eZ(GG, bG, ZG) {
-       const wG = GG.hQ(448, bG, 4);
-       if (wG < 0) return !1;
-       return GG.view.setFloat32(wG + 0, ZG, !0), !0
+     function LO(MM) {
+       let {
+         controller: rM,
+         children: iM
+       } = MM;
+       (0, lM.e)(Ai, null);
+       const [OM, SM] = (0, PM.useState)(null);
+       (0, Bi.j)(OM, ".RightElements");
+       const jM = rM.getPlace();
+       return (0, CM.jsx)(dM.i, {
+         placement: "topRight",
+         children: (0, CM.jsx)("div", {
+           className: "GreenvilleHudColumn",
+           children: (0, CM.jsxs)("div", {
+             ref: SM,
+             className: "GreenvilleHudColumnStack",
+ ... (18 more added lines; see GitHub link above)
```

#### 42. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1120-L1125` → after: `L3496-L3518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R3496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L3496-L3518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L3496-L3518) · [Before (L1120-L1125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L1120-L1125)

```diff
-     function RZ(GG, bG, ZG, wG) {
-       const SG = GG.hQ(450, bG, 12);
-       if (SG < 0) return !1;
-       const LG = GG.view;
-       for (let yG = 0; yG < 2; yG++) LG.setFloat32(SG + 0 + 4 * yG, ZG[yG], !0);
-       return LG.setUint8(SG + 8, wG), !0
+     function mO(MM) {
+       let {
+         rows: rM
+       } = MM;
+       const {
+         t: iM
+       } = (0, UM.A)();
+       return (0, CM.jsx)("ul", {
+         className: "GreenvilleTrackerRows",
+         children: rM.map((MM => {
+           let [rM, OM] = MM;
+           return (0, CM.jsxs)("li", {
+             className: "GreenvilleTrackerRow",
+             children: [(0, CM.jsx)("span", {
+               className: "GreenvilleTrackerLabel",
+               children: iM(rM)
+ ... (7 more added lines; see GitHub link above)
```

#### 43. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1128-L1132` → after: `L3521-L3562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R3521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L3521-L3562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L3521-L3562) · [Before (L1128-L1132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L1128-L1132)

```diff
-     function TZ(GG, bG, ZG, wG) {
-       const SG = GG.hQ(452, bG, 8);
-       if (SG < 0) return !1;
-       const LG = GG.view;
-       return LG.setFloat32(SG + 0, ZG, !0), LG.setUint8(SG + 4, wG), !0
+     function HO(MM) {
+       let {
+         levels: rM
+       } = MM;
+       const {
+         t: iM
+       } = (0, UM.A)();
+       return (0, CM.jsxs)("div", {
+         className: "GreenvilleTrackerCard GreenvilleJobsStrip",
+         children: [(0, CM.jsx)("strong", {
+           className: "GreenvilleTrackerTitle",
+           children: iM("greenvilleGame:jobs")
+         }), (0, CM.jsx)("ul", {
+           className: "GreenvilleJobsStripJobs",
+           children: aM.map(((MM, OM) => {
+             const SM = rM[OM];
+ ... (26 more added lines; see GitHub link above)
```

#### 44. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1135-L1139` → after: `L3565-L3629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R3565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L3565-L3629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L3565-L3629) · [Before (L1135-L1139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L1135-L1139)

```diff
-     function HZ(GG, bG, ZG, wG, SG) {
-       const LG = GG.hQ(454, bG, 4);
-       if (LG < 0) return !1;
-       const yG = GG.view;
-       return yG.setUint8(LG + 0, ZG), yG.setUint8(LG + 1, wG), yG.setUint8(LG + 2, SG), !0
+     function hO(MM) {
+       let {
+         job: {
+           stats: rM,
+           next: iM
+         }
+       } = MM;
+       const {
+         t: OM
+       } = (0, UM.A)();
+       return (0, CM.jsxs)(CM.Fragment, {
+         children: [rM.length > 0 && (0, CM.jsx)("div", {
+           className: "GreenvilleTrackerCard",
+           children: (0, CM.jsx)("ul", {
+             className: "GreenvilleTrackerRows",
+             children: rM.map((MM => {
+ ... (49 more added lines; see GitHub link above)
```

#### 45. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1142-L1147` → after: `L3632-L3703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R3632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L3632-L3703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L3632-L3703) · [Before (L1142-L1147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L1142-L1147)

```diff
-     function tZ(GG, bG, ZG, wG) {
-       const SG = GG.hQ(455, bG, 40);
-       if (SG < 0) return !1;
-       const LG = GG.view;
-       for (let yG = 0; yG < 9; yG++) LG.setInt32(SG + 0 + 4 * yG, ZG[yG], !0);
-       return LG.setUint32(SG + 36, wG, !0), !0
+     function JO(MM) {
+       let {
+         home: rM
+       } = MM;
+       const {
+         t: iM,
+         selectedLanguage: OM
+       } = (0, UM.A)(), SM = (0, pr.j)("hiddenPlayerNames");
+       return (0, CM.jsxs)("div", {
+         className: "GreenvilleTrackerCard",
+         children: [(0, CM.jsxs)("strong", {
+           className: "GreenvilleTrackerTitle GreenvilleBestTimesTitle",
+           children: [(0, CM.jsx)(VM.b, {
+             name: "trophy"
+           }), iM("greenvilleGame:parkourBestTimes")]
+         }), (0, CM.jsx)("ol", {
+ ... (56 more added lines; see GitHub link above)
```

#### 46. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1150-L1154` → after: `L3724-L3733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R3724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L3724-L3733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L3724-L3733) · [Before (L1150-L1154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L1150-L1154)

```diff
-     function DZ(GG, bG, ZG, wG) {
-       const SG = GG.hQ(456, bG, 8);
-       if (SG < 0) return !1;
-       const LG = GG.view;
-       return LG.setFloat32(SG + 0, ZG, !0), LG.setUint8(SG + 4, wG), !0
+     function UO(MM) {
+       let {
+         controller: rM
+       } = MM;
+       (0, lM.e)(dO, null);
+       const iM = rM.getLevelUps();
+       return 0 === iM.length ? null : (0, DM.createPortal)((0, CM.jsx)(GO, {
+         levelUp: iM[0],
+         onDone: rM.revealed
+       }, iM[0].token), document.body)
```

#### 47. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1157-L1163` → after: `L3736-L3818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R3736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L3736-L3818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L3736-L3818) · [Before (L1157-L1163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L1157-L1163)

```diff
-     function NZ(GG, bG, ZG, wG, SG) {
-       const LG = GG.hQ(457, bG, 16);
-       if (LG < 0) return !1;
-       const yG = GG.view;
-       for (let kG = 0; kG < 3; kG++) yG.setInt32(LG + 0 + 4 * kG, ZG[kG], !0);
-       for (let kG = 0; kG < 3; kG++) yG.setInt8(LG + 12 + 1 * kG, wG[kG]);
-       return yG.setUint8(LG + 15, SG), !0
+     function GO(MM) {
+       let {
+         levelUp: rM,
+         onDone: iM
+       } = MM;
+       const {
+         t: OM
+       } = (0, UM.A)(), SM = (0, PM.useRef)(null), {
+         unlock: jM
+       } = rM, aM = null === jM ? 2600 : 4200;
+       (0, PM.useLayoutEffect)((() => {
+         const MM = document.querySelector(".GreenvilleTopBar");
+         MM && SM.current.style.setProperty("--top-bar-bottom", `${MM.getBoundingClientRect().bottom}px`)
+       }), []), (0, PM.useEffect)((() => {
+         const MM = SM.current.animate(lO, {
+           duration: aM,
+ ... (67 more added lines; see GitHub link above)
```

#### 48. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1166-L1170` → after: `L3822-L3882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R3822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L3822-L3882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L3822-L3882) · [Before (L1166-L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L1166-L1170)

```diff
-     function OZ(GG, bG, ZG, wG) {
-       const SG = GG.hQ(530, bG, 4 + wG.length);
-       if (SG < 0) return !1;
-       const LG = GG.view;
-       return LG.setUint8(SG + 0, ZG), pZ(LG).set(wG, LG.byteOffset + SG + 4), !0
+     function eO(MM) {
+       return MM.map((MM => {
+         let [rM, iM, OM, SM, jM, aM] = MM;
+         return {
+           key: `${rM}|${iM}|${OM}|${SM}|${jM}`,
+           icon: rM,
+           target: [iM, OM, SM],
+           item: jM,
+           label: aM
+         }
+       }))
+     }
+     class bO {
+       constructor(MM) {
+         this.Tz = MM, this.view = null
+       }
+ ... (45 more added lines; see GitHub link above)
```

#### 49. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1173-L1177` → after: `L3897-L3907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R3897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L3897-L3907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L3897-L3907) · [Before (L1173-L1177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L1173-L1177)

```diff
-     function xZ(GG, bG, ZG, wG, SG, LG) {
-       const yG = GG.hQ(531, bG, 12 + LG.length);
-       if (yG < 0) return !1;
-       const kG = GG.view;
-       return kG.setFloat32(yG + 0, ZG, !0), kG.setFloat32(yG + 4, wG, !0), kG.setUint32(yG + 8, SG, !0), pZ(kG).set(LG, kG.byteOffset + yG + 12), !0
+     function gO(MM) {
+       var rM;
+       let {
+         controller: iM
+       } = MM;
+       (0, lM.e)(CO, null);
+       const OM = null === (rM = iM.getView()) || void 0 === rM ? void 0 : rM.job;
+       return "marketDeliver" !== (null === OM || void 0 === OM ? void 0 : OM.kind) ? null : (0, CM.jsx)(uO, {
+         endsAt: OM.endsAt,
+         delivered: OM.delivered
+       })
```

#### 50. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1180-L1184` → after: `L3910-L3960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R3910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L3910-L3960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L3910-L3960) · [Before (L1180-L1184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L1180-L1184)

```diff
-     function BZ(GG, bG, ZG, wG, SG, LG) {
-       const yG = GG.hQ(532, bG, 12 + LG.length);
-       if (yG < 0) return !1;
-       const kG = GG.view;
-       return kG.setInt32(yG + 0, ZG, !0), kG.setInt32(yG + 4, wG, !0), kG.setUint32(yG + 8, SG, !0), pZ(kG).set(LG, kG.byteOffset + yG + 12), !0
+     function uO(MM) {
+       let {
+         endsAt: rM,
+         delivered: iM
+       } = MM;
+       const {
+         t: OM
+       } = (0, UM.A)(), SM = Math.max(0, Math.ceil((0, wO.g)(rM))), jM = (0, PM.useRef)(null), aM = (0, PM.useRef)(null), nM = (0, PM.useRef)({
+         endsAt: rM,
+         delivered: iM
+       }), [QM, zM] = (0, PM.useState)(null);
+       (0, PM.useLayoutEffect)((() => {
+         const MM = iM > nM.current.delivered ? Math.round((rM - nM.current.endsAt) / 1e3) : 0;
+         var OM;
+         (nM.current = {
+           endsAt: rM,
+ ... (35 more added lines; see GitHub link above)
```

#### 51. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1187-L1191` → after: `L3963-L3977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R3963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L3963-L3977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L3963-L3977) · [Before (L1187-L1191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L1187-L1191)

```diff
-     function Gw(GG, bG, ZG, wG, SG) {
-       const LG = GG.hQ(533, bG, 8 + SG.length);
-       if (LG < 0) return !1;
-       const yG = GG.view;
-       return yG.setInt32(LG + 0, ZG, !0), yG.setInt32(LG + 4, wG, !0), pZ(yG).set(SG, yG.byteOffset + LG + 8), !0
+     function RO(MM) {
+       var rM;
+       let {
+         controller: iM
+       } = MM;
+       (0, lM.e)(CO, null);
+       const OM = null === (rM = iM.getView()) || void 0 === rM ? void 0 : rM.job;
+       return OM ? (0, CM.jsxs)("div", {
+         className: "GreenvilleTrackerCard",
+         children: ["marketDeliver" === OM.kind && (0, CM.jsx)(sO, {
+           shift: OM
+         }), "marketDeliver" !== OM.kind && (0, CM.jsx)(pO, {
+           task: OM
+         })]
+       }) : null
```

#### 52. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1194-L1195` → after: `L3980-L4025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R3980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L3980-L4025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L3980-L4025) · [Before (L1194-L1195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L1194-L1195)

```diff
-     function bw(GG, bG) {
-       return !(GG.hQ(576, bG, 0) < 0)
+     function pO(MM) {
+       let {
+         task: rM
+       } = MM;
+       const {
+         t: iM
+       } = (0, UM.A)(), OM = "marketPick" === rM.kind && rM.goods.every((MM => {
+         let [, rM] = MM;
+         return 0 === rM
+       }));
+       return (0, CM.jsxs)(CM.Fragment, {
+         children: [(0, CM.jsx)("strong", {
+           className: "GreenvilleTrackerTitle",
+           children: iM("marketPick" === rM.kind ? "greenvilleGame:marketPanelOrder" : "greenvilleGame:marketPanelCrate")
+         }), (0, CM.jsx)("ul", {
+           className: "GreenvilleTrackerRows",
+ ... (30 more added lines; see GitHub link above)
```

#### 53. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1198-L1205` → after: `L4028-L4040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R4028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L4028-L4040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L4028-L4040) · [Before (L1198-L1205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L1198-L1205)

```diff
-     function Zw(GG, bG, ZG, wG, SG, LG) {
-       const yG = GG.hQ(577, bG, 36 + LG.length);
-       if (yG < 0) return !1;
-       const kG = GG.view;
-       kG.setUint8(yG + 0, ZG);
-       for (let UG = 0; UG < 16; UG++) kG.setUint8(yG + 4 + 1 * UG, wG[UG]);
-       for (let UG = 0; UG < 16; UG++) kG.setUint8(yG + 20 + 1 * UG, SG[UG]);
-       return pZ(kG).set(LG, kG.byteOffset + yG + 36), !0
+     function WO(MM) {
+       let {
+         endsAt: rM
+       } = MM;
+       const {
+         t: iM
+       } = (0, UM.A)(), OM = Math.ceil((0, wO.g)(rM));
+       return OM <= 0 ? null : (0, CM.jsx)("div", {
+         className: "GreenvilleTrackerTip",
+         children: iM("greenvilleGame:marketPanelTip", {
+           seconds: OM
+         })
+       })
```

#### 54. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1208-L1212` → after: `L4043-L4119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R4043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L4043-L4119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L4043-L4119) · [Before (L1208-L1212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L1208-L1212)

```diff
-     function ww(GG, bG, ZG, wG) {
-       const SG = GG.hQ(578, bG, 4 + wG.length);
-       if (SG < 0) return !1;
-       const LG = GG.view;
-       return LG.setUint8(SG + 0, ZG), pZ(LG).set(wG, LG.byteOffset + SG + 4), !0
+     function sO(MM) {
+       let {
+         shift: rM
+       } = MM;
+       const {
+         t: iM
+       } = (0, UM.A)();
+       return (0, CM.jsxs)(CM.Fragment, {
+         children: [(0, CM.jsx)("strong", {
+           className: "GreenvilleTrackerTitle",
+           children: iM("greenvilleGame:marketPanelDeliveries")
+         }), (0, CM.jsxs)("ul", {
+           className: "GreenvilleTrackerRows",
+           children: [(0, CM.jsxs)("li", {
+             className: "GreenvilleTrackerRow",
+             children: [(0, CM.jsx)("span", {
+ ... (61 more added lines; see GitHub link above)
```

#### 55. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1215-L1219` → after: `L4122-L4165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R4122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L4122-L4165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L4122-L4165) · [Before (L1215-L1219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L1215-L1219)

```diff
-     function Sw(GG, bG, ZG, wG, SG, LG, yG, kG) {
-       const UG = GG.hQ(579, bG, 36);
-       if (UG < 0) return !1;
-       const YG = GG.view;
-       return YG.setFloat64(UG + 0, ZG, !0), YG.setFloat64(UG + 8, wG, !0), YG.setFloat64(UG + 16, SG, !0), YG.setFloat64(UG + 24, LG, !0), YG.setUint16(UG + 32, yG, !0), YG.setUint8(UG + 34, kG), !0
+     function ZO(MM) {
+       let {
+         waypoint: {
+           icon: rM,
+           item: iM,
+           label: OM
+         },
+         bind: SM
+       } = MM;
+       const jM = "marketHouse" === rM;
+       return (0, CM.jsxs)("div", {
+         ref: SM,
+         className: hM()("GreenvilleMarketWaypoint", {
+           House: jM
+         }),
+         children: [jM && (0, CM.jsx)(oO, {}), (0, CM.jsxs)("div", {
+ ... (28 more added lines; see GitHub link above)
```

#### 56. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1222-L1223` → after: `L4169-L4173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R4169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L4169-L4173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L4169-L4173) · [Before (L1222-L1223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L1222-L1223)

```diff
-       constructor(GG, bG) {
-         this.core = GG, this.afterCall = bG
+       constructor(MM) {
+         this.market = MM, this.waypoints = new fO.e({
+           labels: "GreenvilleMarketWaypointLabels",
+           distance: "GreenvilleMarketWaypointDistance"
+         }, "greenvilleGame:marketDistance")
```

#### 57. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1225-L1227` → after: `L4175-L4183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R4175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L4175-L4183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L4175-L4183) · [Before (L1225-L1227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L1225-L1227)

```diff
-       canModify(GG, bG, ZG) {
-         const wG = this.core.sLG(GG, bG, ZG);
-         return this.afterCall(), wG
+       frame(MM, rM) {
+         this.waypoints.setRender(MM);
+         const iM = this.market.getView();
+         if (iM && this.waypoints.hasMarkers())
+           for (const {
+               key: OM,
+               target: SM
+             }
+             of iM.waypoints) this.waypoints.update(OM, SM[0], SM[1] + 1, SM[2], rM)
```

#### 58. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1229-L1235` → after: `L4185-L4224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R4185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L4185-L4224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L4185-L4224) · [Before (L1229-L1235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L1229-L1235)

```diff
-       terrainBlocked(GG, bG, ZG, wG, SG) {
-         const LG = this.core.FyG(GG, bG, ZG, wG, SG);
-         return this.afterCall(), LG
-       }
-       HI(GG, bG, ZG, wG) {
-         const SG = this.core.bQ(GG, bG, ZG, wG);
-         return this.afterCall(), SG
+     }
+     const NO = {
+       Street: "St",
+       Avenue: "Ave",
+       Road: "Rd",
+       Lane: "Ln"
+     };
+ 
+     function AO(MM, rM) {
+       return rM.map(((rM, iM) => {
+         const OM = rM.lastIndexOf(" "),
+           SM = rM.slice(OM + 1);
+         let jM = NO[SM];
+         return void 0 === jM && (console.warn(`Greenville street "${rM}" has no suffix abbreviation`), jM = SM), {
+           axis: MM,
+           line: iM,
+ ... (24 more added lines; see GitHub link above)
```

#### 59. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1237-L1239` → after: `L4226-L4239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R4226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L4226-L4239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L4226-L4239) · [Before (L1237-L1239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L1237-L1239)

```diff
-       blockData(GG, bG, ZG) {
-         const wG = this.core.MLG(GG, bG, ZG);
-         return this.afterCall(), wG
+     }
+     let XO = null;
+ 
+     function IO(MM, rM, iM, OM) {
+       if (OM && "outside" !== OM.kind) {
+         const {
+           box: iM
+         } = OM;
+         if (!OO(iM, MM, rM) && OO({
+             x0: iM.x0 - 2,
+             z0: iM.z0 - 2,
+             x1: iM.x1 + 2,
+             z1: iM.z1 + 2
+           }, MM, rM)) return OM
```

#### 60. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1241-L1243` → after: `L4241-L4359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R4241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L4241-L4359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L4241-L4359) · [Before (L1241-L1243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L1241-L1243)

```diff
-       cameraSweep(GG, bG, ZG, wG, SG, LG, yG) {
-         const kG = this.core.PSG(GG, bG, ZG, wG, SG, LG, yG);
-         return this.afterCall(), kG
+       return function(MM, rM, iM) {
+         const {
+           eastWest: OM,
+           northSouth: SM
+         } = xO;
+         switch (MM.kind) {
+           case "outside":
+             return vO;
+           case "street": {
+             const rM = MM.segment * ci + Vi,
+               iM = MM.line * ci;
+             return {
+               kind: "street",
+               box: "eastWest" === MM.axis ? BO(rM, iM, ci - Vi, Vi) : BO(iM, rM, Vi, ci - Vi),
+               street: xO[MM.axis][MM.line],
+               block: 100 * (MM.segment + 1)
+ ... (103 more added lines; see GitHub link above)
```

#### 61. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1245-L1247` → after: `L4361-L4404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R4361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L4361-L4404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L4361-L4404) · [Before (L1245-L1247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L1245-L1247)

```diff
-       hasServerTarget(GG) {
-         const bG = this.core.xLG(GG);
-         return this.afterCall(), bG
+     }
+     var qO = iM(40551);
+     const TO = iM.p + "static/media/greenvilleCity.7b141fefdb213c21b37a.png";
+     var VO = iM(40543),
+       cO = iM(222);
+     const MS = Ii.f.HL,
+       rS = MO / MS,
+       iS = rO / MS,
+       OS = (iO - rO) / MS;
+     class SS {
+       constructor(MM) {
+         this.api = MM, this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), this.image = this.context.createImageData(MS, MS), this.plots = new Set(PO().map((MM => {
+           let {
+             chunk: rM
+           } = MM;
+           return (rM[2] - Ti / MS) * rS + rM[0] - Ti / MS
+ ... (28 more added lines; see GitHub link above)
```

#### 62. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1249-L1251` → after: `L4406-L4407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R4406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L4406-L4407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L4406-L4407) · [Before (L1249-L1251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L1249-L1251)

```diff
-       entityInteractable(GG) {
-         const bG = this.core.HLG(GG);
-         return this.afterCall(), bG
+       mount(MM) {
+         this.host = MM, null === MM || void 0 === MM || MM.replaceChildren(this.canvas)
```

#### 63. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1253-L1255` → after: `L4409-L4415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R4409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L4409-L4415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L4409-L4415) · [Before (L1253-L1255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L1253-L1255)

```diff
-       entityCrouching(GG) {
-         const bG = this.core.TLG(GG);
-         return this.afterCall(), bG
+       focusOn(MM, rM) {
+         const iM = Math.min(rS - 1, Math.max(0, Math.floor((MM - Ti) / MS))),
+           OM = Math.min(rS - 1, Math.max(0, Math.floor((rM - Ti) / MS)));
+         iM === this.focus.column && OM === this.focus.row || (this.focus = {
+           column: iM,
+           row: OM
+         }, this.order = [...this.plots].sort(((MM, rM) => Math.hypot(MM % rS - iM, Math.floor(MM / rS) - OM) - Math.hypot(rM % rS - iM, Math.floor(rM / rS) - OM))))
```

#### 64. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1257-L1259` → after: `L4417-L4419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R4417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L4417-L4419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L4417-L4419) · [Before (L1257-L1259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L1257-L1259)

```diff
-       predictServerPosition(GG, bG, ZG, wG) {
-         const SG = this.core.YyG(GG, bG, ZG, wG);
-         return this.afterCall(), SG
+       forget(MM, rM) {
+         const iM = rM * rS + MM;
+         this.stale[iM] = 1, this.versions.fill(NaN, iM * OS, (iM + 1) * OS)
```

#### 65. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1261-L1263` → after: `L4421-L4423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R4421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L4421-L4423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L4421-L4423) · [Before (L1261-L1263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L1261-L1263)

```diff
-       setOtherEntitySetting(GG, bG, ZG) {
-         const wG = this.core.gSG(GG, bG, ZG);
-         return this.afterCall(), wG
+       dispose() {
+         var MM, rM;
+         null !== this.timer && clearTimeout(this.timer), null === (MM = this.cancelIdle) || void 0 === MM || MM.call(this), this.host = null, this.dh = !0, null === (rM = this.baked) || void 0 === rM || rM.close(), this.baked = null
```

#### 66. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1265-L1267` → after: `L4425-L4436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R4425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L4425-L4436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L4425-L4436) · [Before (L1265-L1267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L1265-L1267)

```diff
-       entityInfoBatch(GG) {
-         const bG = this.core.TSG(GG);
-         return this.afterCall(), bG
+       async drawBakedCity() {
+         try {
+           const MM = await fetch(TO);
+           if (!MM.ok) throw new Error(`HTTP ${MM.status}`);
+           const rM = await createImageBitmap(await MM.blob(), {
+             colorSpaceConversion: "none"
+           });
+           if (this.dh) return void rM.close();
+           this.baked = rM, this.context.drawImage(rM, 0, 0)
+         } catch (MM) {
+           console.error("Greenville map: the baked city failed to load", MM)
+         }
```

#### 67. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1269-L1271` → after: `L4438-L4443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R4438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L4438-L4443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L4438-L4443) · [Before (L1269-L1271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L1269-L1271)

```diff
-       entityName(GG) {
-         const bG = this.core.tLG(GG);
-         return this.afterCall(), bG
+       schedule(MM) {
+         this.timer = setTimeout((() => {
+           this.timer = null, this.cancelIdle = (0, cO.d)(this.pass, {
+             timeoutMs: 1e3
+           })
+         }), MM)
```

#### 68. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1273-L1275` → after: `L4445-L4454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R4445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L4445-L4454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L4445-L4454) · [Before (L1273-L1275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L1273-L1275)

```diff
-       hasEffect(GG, bG) {
-         const ZG = this.core.OLG(GG, bG);
-         return this.afterCall(), ZG
+       readVersions(MM) {
+         const rM = Ti / MS + MM % rS,
+           iM = Ti / MS + Math.floor(MM / rS);
+         let OM = !1;
+         for (let jM = 0; jM < OS; jM++) {
+           var SM;
+           const aM = null !== (SM = this.api.getChunkVersion(rM, iS + jM, iM)) && void 0 !== SM ? SM : 0;
+           this.current[jM] = aM, OM ||= aM !== this.versions[MM * OS + jM]
+         }
+         return OM
```

#### 69. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1277-L1279` → after: `L4456-L4458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R4456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L4456-L4458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L4456-L4458) · [Before (L1277-L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L1277-L1279)

```diff
-       scratchPtr() {
-         const GG = this.core.cSG();
-         return this.afterCall(), GG
+       repaintIfPainted(MM, rM) {
+         const iM = rM * rS + MM;
+         MM < rS && rM < rS && 1 === this.painted[iM] && this.versions.fill(NaN, iM * OS, (iM + 1) * OS)
```

#### 70. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1281-L1283` → after: `L4460-L4470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R4460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L4460-L4470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L4460-L4470) · [Before (L1281-L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L1281-L1283)

```diff
-       invSwap(GG, bG) {
-         const ZG = this.core.SyG(GG, bG);
-         return this.afterCall(), ZG
+       storeHeights(MM, rM) {
+         let iM = !1,
+           OM = !1;
+         for (let SM = 0; SM < this.ids.length; SM++) {
+           const jM = SM % MS,
+             aM = Math.floor(SM / MS),
+             PM = (rM * MS + aM) * MO + MM * MS + jM,
+             nM = 0 === this.ids[SM] ? qO.g : this.tops[SM];
+           this.heights[PM] !== nM && (iM ||= jM === MS - 1, OM ||= aM === MS - 1, this.heights[PM] = nM)
+         }
+         iM && this.repaintIfPainted(MM + 1, rM), OM && this.repaintIfPainted(MM, rM + 1)
```

#### 71. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1285-L1287` → after: `L4472-L4478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R4472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L4472-L4478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L4472-L4478) · [Before (L1285-L1287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L1285-L1287)

```diff
-       invMove(GG, bG, ZG) {
-         const wG = this.core.byG(GG, bG, ZG);
-         return this.afterCall(), wG
+       readEdgeHeights(MM, rM, iM, OM, SM) {
+         this.api.readColumnTops(MM, rM, iM, OM, rO, iO, SM, this.edgeIds, this.edgeTops);
+         const jM = iM - MM;
+         for (let aM = 0; aM < MS; aM++) {
+           const iM = (rM - Ti + Math.floor(aM / jM)) * MO + MM - Ti + aM % jM;
+           this.heights[iM] = 0 === this.edgeIds[aM] ? qO.g : this.edgeTops[aM]
+         }
```

#### 72. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1289-L1291` → after: `L4480-L4507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R4480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L4480-L4507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L4480-L4507) · [Before (L1289-L1291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L1289-L1291)

```diff
-       invQuickMove(GG, bG, ZG, wG) {
-         const SG = this.core.ZyG(GG, bG, ZG, wG);
-         return this.afterCall(), SG
+       paint(MM, rM, iM, OM) {
+         const SM = rM * rS + MM,
+           jM = 1 === this.stale[SM];
+         this.stale[SM] = 0;
+         const aM = Ti + MM * MS,
+           PM = Ti + rM * MS,
+           nM = MO - (MM + 1) * MS,
+           {
+             ids: QM,
+             tops: zM,
+             heights: LM
+           } = this;
+         if (0 === this.current[0 - iS]) return void(jM && (this.context.clearRect(nM, rM * MS, MS, MS), this.baked && this.context.drawImage(this.baked, nM, rM * MS, MS, MS, nM, rM * MS, MS, MS), QM.fill(0), this.storeHeights(MM, rM)));
+         this.painted[SM] = 1, this.api.readColumnTops(aM, PM, aM + MS, PM + MS, rO, iO, OM, QM, zM), this.storeHeights(MM, rM), this.plots.has(SM - 1) || this.readEdgeHeights(aM - 1, PM, aM, PM + MS, OM), this.plots.has(SM - rS) || this.readEdgeHeights(aM, PM - 1, aM + MS, PM, OM … [truncated]
+         const mM = this.image.data;
+         for (let HM = 0; HM < MS; HM++)
+ ... (12 more added lines; see GitHub link above)
```

#### 73. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1293-L1295` → after: `L4509-L4569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R4509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L4509-L4569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L4509-L4569) · [Before (L1293-L1295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L1293-L1295)

```diff
-       invRemove(GG, bG, ZG) {
-         const wG = this.core.wyG(GG, bG, ZG);
-         return this.afterCall(), wG
+     }
+     const jS = "greenvilleNavAddress",
+       aS = "greenvilleNavPlots",
+       PS = "greenvilleNavMarkers",
+       nS = Math.log(MO / 80),
+       QS = 5 * Math.PI / 180,
+       zS = {
+         kind: "outside"
+       };
+ 
+     function LS(MM) {
+       return (MM - Ti) / Ii.f.HL
+     }
+     class mS {
+       constructor(MM, rM, iM) {
+         this.publishAddress = MM, this.publishPlots = rM, this.publishMarkers = iM, this.address = zS, this.addressKey = KO(zS), this.block = {
+ ... (45 more added lines; see GitHub link above)
```

#### 74. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1297-L1299` → after: `L4571-L4572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R4571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L4571-L4572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L4571-L4572) · [Before (L1297-L1299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L1297-L1299)

```diff
-       invEnchant(GG, bG, ZG, wG, SG) {
-         const LG = this.core.GyG(GG, bG, ZG, wG, SG);
-         return this.afterCall(), LG
+       start(MM) {
+         this.terrain = new SS(MM)
```

#### 75. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1301-L1303` → after: `L4574-L4575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R4574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L4574-L4575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L4574-L4575) · [Before (L1301-L1303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L1301-L1303)

```diff
-       craft(GG, bG, ZG) {
-         const wG = this.core.craft(GG, bG, ZG);
-         return this.afterCall(), wG
+       dispose() {
+         this.terrain.dispose()
```

#### 76. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1305-L1307` → after: `L4577-L4578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R4577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L4577-L4578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L4577-L4578) · [Before (L1305-L1307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L1305-L1307)

```diff
-       salvage(GG, bG, ZG) {
-         const wG = this.core.salvage(GG, bG, ZG);
-         return this.afterCall(), wG
+       getAddress() {
+         return this.address
```

#### 77. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1309-L1311` → after: `L4580-L4581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R4580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L4580-L4581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L4580-L4581) · [Before (L1309-L1311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L1309-L1311)

```diff
-       selectSlot(GG) {
-         const bG = this.core.QyG(GG);
-         return this.afterCall(), bG
+       getPlots() {
+         return this.plots
```

#### 78. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1313-L1315` → after: `L4583-L4584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R4583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L4583-L4584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L4583-L4584) · [Before (L1313-L1315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L1313-L1315)

```diff
-       closeChest() {
-         const GG = this.core.qLG();
-         return this.afterCall(), GG
+       getMarkers() {
+         return this.markers
```

#### 79. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1317-L1319` → after: `L4586-L4600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R4586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L4586-L4600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L4586-L4600) · [Before (L1317-L1319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L1317-L1319)

```diff
-       itemAttributesBatch(GG) {
-         const bG = this.core.RSG(GG);
-         return this.afterCall(), bG
+       GL(MM) {
+         const rM = [...this.plots.plots];
+         for (const [OM, SM, jM] of "plotsAll" === MM[0] ? MM[1] : [MM[1]]) {
+           const MM = rM[OM - 1];
+           var iM;
+           if (MM.state === SM && MM.mine === jM || (rM[OM - 1] = {
+               ...MM,
+               state: SM,
+               mine: jM
+             }), MM.state !== SM) null === (iM = this.terrain) || void 0 === iM || iM.forget(MM.chunkX, MM.chunkZ)
+         }
+         this.plots = {
+           plots: rM,
+           animate: "plotsOne" === MM[0]
+         }, this.publishPlots(this.plots)
```

#### 80. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1321-L1323` → after: `L4602-L4616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R4602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L4602-L4616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L4602-L4616) · [Before (L1321-L1323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L1321-L1323)

```diff
-       itemNames() {
-         const GG = this.core.vW();
-         return this.afterCall(), GG
+       receiveMarkers(MM) {
+         this.markers = MM.map((MM => {
+           const [rM, iM] = [LS(MM[2]), LS(MM[3])];
+           return "mapPlace" === MM[0] ? {
+             kind: "place",
+             place: MM[1],
+             x: rM,
+             z: iM
+           } : {
+             kind: "npc",
+             face: null === MM[1] ? "npc" : `npc_${MM[1]}`,
+             x: rM,
+             z: iM
+           }
+         })), this.publishMarkers(this.markers)
```

#### 81. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1325-L1327` → after: `L4618-L4639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R4618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L4618-L4639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L4618-L4639) · [Before (L1325-L1327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L1325-L1327)

```diff
-       blockProps() {
-         const GG = this.core.ALG();
-         return this.afterCall(), GG
+       frame(MM, rM, iM) {
+         if (!rM) return;
+         const OM = Math.floor(rM[0]),
+           SM = Math.floor(rM[2]);
+         if (OM !== this.block.x || SM !== this.block.z) {
+           this.block = {
+             x: OM,
+             z: SM
+           }, this.terrain.focusOn(OM, SM), this.address = IO(OM, SM, MM.cameraHeading, this.address);
+           const rM = KO(this.address);
+           rM !== this.addressKey && (this.addressKey = rM, this.publishAddress(this.address))
+         }
+         const jM = performance.now(),
+           aM = function(MM, rM) {
+             return rM || "plot" !== MM.kind && "tile" !== MM.kind ? 0 : 1
+           }(this.address, iM);
+ ... (6 more added lines; see GitHub link above)
```

#### 82. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1329-L1331` → after: `L4641-L4662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R4641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L4641-L4662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L4641-L4662) · [Before (L1329-L1331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L1329-L1331)

```diff
-       itemProps() {
-         const GG = this.core.LyG();
-         return this.afterCall(), GG
+       writeView(MM, rM, iM) {
+         const {
+           uL: OM,
+           arrowTrack: SM,
+           arrow: jM,
+           written: aM
+         } = this;
+         if (!OM || !SM || !jM) return;
+         const PM = (Ti + MO - MM) / MO,
+           nM = (rM - Ti) / MO,
+           QM = Math.exp(this.zoom * nS),
+           zM = Math.abs(Math.atan2(Math.sin(iM - aM.heading), Math.cos(iM - aM.heading))),
+           LM = QM !== aM.scale,
+           mM = !(Math.hypot(PM - aM.u, nM - aM.v) * this.worldPx * QM < 1);
+         if (LM || mM || !(zM < QS)) {
+           if (LM || mM) {
+ ... (6 more added lines; see GitHub link above)
```

#### 83. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1333-L1335` → after: `L4664-L4705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R4664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L4664-L4705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L4664-L4705) · [Before (L1333-L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L1333-L1335)

```diff
-       salvageRecipe(GG) {
-         const bG = this.core.tSG(GG);
-         return this.afterCall(), bG
+     }
+     var HS = iM(39580);
+     const hS = MO / Ii.f.HL,
+       JS = `matrix(-1 0 0 1 ${hS} 0)`,
+       dS = .08,
+       yS = [{
+         transform: "scaleY(0)"
+       }, {
+         transform: "scaleY(1)"
+       }],
+       lS = [{
+         opacity: 1
+       }, {
+         opacity: 0
+       }],
+       ES = {
+ ... (26 more added lines; see GitHub link above)
```

#### 84. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1337-L1339` → after: `L4707-L4726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R4707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L4707-L4726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L4707-L4726) · [Before (L1337-L1339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L1337-L1339)

```diff
-       craftingView(GG, bG, ZG) {
-         const wG = this.core.eSG(GG, bG, ZG);
-         return this.afterCall(), wG
+     }
+ 
+     function bS(MM) {
+       let {
+         axis: rM,
+         line: iM
+       } = MM;
+       const OM = .3,
+         SM = 3 * iM + OM,
+         jM = hS - .6;
+       return "eastWest" === rM ? {
+         x: OM,
+         y: SM,
+         width: jM,
+         height: .4
+       } : {
+ ... (4 more added lines; see GitHub link above)
```

#### 85. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1341-L1343` → after: `L4728-L5397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R4728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L4728-L5397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L4728-L5397) · [Before (L1341-L1343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L1341-L1343)

```diff
-       directorView() {
-         const GG = this.core.jSG();
-         return this.afterCall(), GG
+     }
+ 
+     function wS(MM) {
+       let {
+         controller: rM
+       } = MM;
+       (0, lM.e)(aS, null);
+       const {
+         plots: iM,
+         animate: OM
+       } = rM.getPlots();
+       return (0, CM.jsx)("div", {
+         className: "GreenvilleNavMap",
+         children: (0, CM.jsxs)("div", {
+           className: "GreenvilleNavMapWorld",
+           ref: rM.mountWorld,
+ ... (654 more added lines; see GitHub link above)
```

#### 86. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1345-L1347` → after: `L5399-L5555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R5399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L5399-L5555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L5399-L5555) · [Before (L1345-L1347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L1345-L1347)

```diff
-       directorDefaultPose() {
-         const GG = this.core.ASG();
-         return this.afterCall(), GG
+     }
+ 
+     function qS(MM) {
+       let {
+         home: rM
+       } = MM;
+       const {
+         t: iM
+       } = (0, UM.A)();
+       return rM.pvp || rM.parkour || !rM.visitorsAllowed ? (0, CM.jsxs)("div", {
+         className: "GreenvillePlaceTagRow GreenvillePlaceTagChips",
+         children: [rM.pvp && (0, CM.jsx)("span", {
+           className: "GreenvillePlaceChip Danger",
+           children: iM("greenvilleGame:houseChipPvp")
+         }), rM.parkour && (0, CM.jsx)("span", {
+           className: "GreenvillePlaceChip",
+ ... (141 more added lines; see GitHub link above)
```

#### 87. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1349-L1351` → after: `L5557-L5573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R5557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L5557-L5573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L5557-L5573) · [Before (L1349-L1351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L1349-L1351)

```diff
-       directorEntity(GG) {
-         const bG = this.core.sSG(GG);
-         return this.afterCall(), bG
+     }
+   },
+   40551: (MM, rM, iM) => {
+     iM.d(rM, {
+       c: () => PM,
+       g: () => aM
+     });
+     var OM = iM(9816);
+     const SM = {
+         Water: [63, 118, 228],
+         Lava: [232, 110, 30]
+       },
+       jM = [150, 150, 150],
+       aM = -2147483648;
+     class PM {
+       constructor(MM) {
+ ... (1 more added lines; see GitHub link above)
```

#### 88. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1353-L1355` → after: `L5575-L5583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R5575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L5575-L5583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L5575-L5583) · [Before (L1353-L1355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L1353-L1355)

```diff
-       directorPose(GG, bG, ZG, wG, SG, LG) {
-         const yG = this.core.qSG(GG, bG, ZG, wG, SG, LG);
-         return this.afterCall(), yG
+       get(MM) {
+         var rM, iM, aM, PM, nM;
+         const QM = this.byId.get(MM);
+         if (void 0 !== QM) return QM;
+         const zM = null !== (rM = null === (iM = OM.k[MM]) || void 0 === iM ? void 0 : iM.name) && void 0 !== rM ? rM : "",
+           LM = zM.split("|")[0],
+           mM = null !== (aM = this.averages[zM]) && void 0 !== aM ? aM : this.averages[LM],
+           HM = null !== (PM = null !== (nM = null === mM || void 0 === mM ? void 0 : mM[0]) && void 0 !== nM ? nM : SM[LM]) && void 0 !== PM ? PM : 0 === (null === mM || void 0 === mM ? void 0 : mM.length) ? null : jM;
+         return this.byId.set(MM, HM), HM
```

#### 89. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1357-L1359` → after: `L5585-L5588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R5585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L5585-L5588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L5585-L5588) · [Before (L1357-L1359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L1357-L1359)

```diff
-       passTimings(GG) {
-         const bG = this.core.UyG(GG);
-         return this.afterCall(), bG
+       getDrawnIds() {
+         const MM = new Uint8Array(65536);
+         for (let rM = 1; rM < 65536; rM++) void 0 !== OM.k[rM] && null !== this.get(rM) && (MM[rM] = 1);
+         return MM
```

#### 90. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1361-L1363` → after: `L5590-L5596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R5590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L5590-L5596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/273.js#L5590-L5596) · [Before (L1361-L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/273.js#L1361-L1363)

```diff
-       drawCensus() {
-         const GG = this.core.RLG();
-         return this.afterCall(), GG
+       drawPixel(MM, rM, iM, OM, SM, jM) {
+         const PM = function(MM, rM, iM) {
+             const OM = MM - rM + (MM - iM);
+             return Math.max(.65, Math.min(1.2, .97 + .055 * OM))
+           }(OM, SM === aM ? OM : SM, jM === aM ? OM : jM),
+           nM = this.get(iM);
+         MM[rM] = nM[0] * PM, MM[rM + 1] = nM[1] * PM, MM[rM + 2] = nM[2] * PM, MM[rM + 3] = 255
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/274.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/274.js` (11 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3)

#### 1. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4-L9` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/274.js#L4-L6) · [Before (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/274.js#L4-L9)

```diff
-   42043: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       c: () => dG,
-       f: () => kG,
-       i: () => yG,
-       m: () => YG
+   40915: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       playDocsSound: () => nM
```

#### 2. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L11-L13` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/274.js#L8-L12) · [Before (L11-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/274.js#L11-L13)

```diff
-     var wG = ZG(37618),
-       SG = ZG(39116),
-       LG = ZG(39111);
+     var OM = iM(5265),
+       SM = iM(37705),
+       jM = iM(1202),
+       aM = iM(37713);
+     const PM = new Map;
```

#### 3. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L15-L420` → after: `L14-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L14-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/274.js#L14-L19) · [Before (L15-L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/274.js#L15-L420)

```diff
-     function yG(GG, bG, ZG, wG) {
-       const SG = LG.t;
-       bG.fill(0), GG.gravity.toArray(bG, SG.gravity), GG.colorDead.toArray(bG, SG.colorDead), ZG[SG.ramp] = GG.useRampGradients ? 1 : 0;
-       const yG = GG.getColorGradients(),
-         kG = fG(GG, yG, "colour", wG);
-       ZG[SG.colorCount] = kG;
-       for (let LG = 0; LG < kG; LG++) {
-         var UG;
-         const GG = yG[QG(yG, LG)];
-         bG[SG.colorPositions + LG] = GG.gradient, GG.color1.toArray(bG, SG.color1 + 4 * LG), (null !== (UG = GG.color2) && void 0 !== UG ? UG : GG.color1).toArray(bG, SG.color2 + 4 * LG)
-       }
-       const YG = GG.getVelocityGradients(),
-         VG = fG(GG, YG, "Sd", wG);
-       ZG[SG.velocityCount] = VG;
-       for (let LG = 0; LG < VG; LG++) rG(bG, SG.Sd + 4 * LG, YG[QG(YG, LG)]);
-       const pG = GG.useRampGradients ? GG.getColorRemapGradients() : null,
- ... (390 more removed lines; see GitHub link above)
+     function nM(MM, rM, iM, nM, QM) {
+       let zM, LM = 0;
+       if (rM) zM = new OM.Howl({
+         src: [`${jM.clientSideServerUrls.staticUrl}/sounds/music/${MM}.mp3`],
+         html5: !0,
+         volume: iM
```

#### 4. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L422-L942` → after: `L21-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L21-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/274.js#L21-L29) · [Before (L422-L942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/274.js#L422-L942)

```diff
-       return new Uint8Array(SG.getMappedRange(), 0, bG.byteLength).set(new Uint8Array(bG.buffer, bG.byteOffset, bG.byteLength)), SG.unmap(), SG
-     }
- 
-     function DG(GG, bG) {
-       return Math.floor(Math.log2(Math.max(GG, bG))) + 1
-     }
- 
-     function NG(GG, bG, ZG, wG, SG, LG) {
-       const yG = GG.createTexture({
-           label: LG,
-           size: {
-             width: ZG,
-             height: wG,
-             depthOrArrayLayers: SG
-           },
-           format: "rgba8unorm",
- ... (505 more removed lines; see GitHub link above)
+       else {
+         const rM = (0, SM.r)(MM);
+         LM = rM.ms / 1e3, zM = PM.get(MM), zM || (zM = new OM.Howl({
+           src: [...rM.src],
+           volume: 1
+         }), PM.set(MM, zM))
+       }
+       const mM = rM ? zM.play() : zM.play(aM.e);
+       zM.volume(iM, mM), nM > 0 && zM.seek(nM, mM);
```

#### 5. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L944-L952` → after: `L31-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/274.js#L31-L32) · [Before (L944-L952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/274.js#L944-L952)

```diff
-         const GG = [...ZG].filter((GG => {
-             let [, bG] = GG;
-             return !0 !== bG
-           })),
-           bG = GG.map((GG => {
-             let [bG] = GG;
-             return bG
-           })).join("|");
-         yG = GG.length ? new RegExp(`\\b(${bG})\\b`, "g") : null
+         const MM = zM.duration();
+         return rM || MM > 0 ? MM : LM
```

#### 6. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L954-L1002` → after: `L34-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L34-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/274.js#L34-L36) · [Before (L954-L1002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/274.js#L954-L1002)

```diff
-       kG();
-       for (const UG of GG.split("\n")) {
-         const GG = gb.exec(UG);
-         if (!GG) {
-           LG() && wG.push(yG ? Rb(UG, yG, ZG) : UG);
-           continue
-         }
-         const bG = GG[1],
-           YG = GG[2].trim();
-         if ("ifdef" === bG || "ifndef" === bG || "if" === bG) {
-           const GG = LG(),
-             wG = "if" === bG ? Tb(YG, ZG) : ZG.has(YG) === ("ifdef" === bG);
-           SG.push({
-             active: GG && wG,
-             parentActive: GG,
-             taken: wG
- ... (33 more removed lines; see GitHub link above)
+       let hM = !1;
+       const JM = MM => {
+           hM || (hM = !0, zM.off("play", dM, mM), zM.off("end", yM, mM), zM.off("loaderror", EM), zM.off("playerror", lM, mM), rM && zM.unload(), QM.onEnd(MM))
```

#### 7. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1005-L1038` → after: `L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/274.js#L39) · [Before (L1005-L1038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/274.js#L1005-L1038)

```diff
-           const GG = yG();
-           if ("!" === GG) return !UG();
-           if ("(" === GG) {
-             const GG = VG();
-             return yG(), GG
-           }
-           if ("defined" === GG) {
-             const GG = "(" === LG();
-             GG && yG();
-             const ZG = yG();
-             return GG && yG(), bG.has(ZG)
-           }
-           const ZG = LG();
-           if ("==" === ZG || "!=" === ZG || ">" === ZG || "<" === ZG || ">=" === ZG || "<=" === ZG) {
-             yG();
-             const bG = kG(GG),
- ... (18 more removed lines; see GitHub link above)
+           QM.onPlay(HM())
```

#### 8. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1041-L1048` → after: `L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/274.js#L42) · [Before (L1041-L1048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/274.js#L1041-L1048)

```diff
-           let GG = UG();
-           for (;
-             "&&" === LG();) {
-             yG();
-             const bG = UG();
-             GG = GG && bG
-           }
-           return GG
+           JM(!1)
```

#### 9. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1050-L1058` → after: `L44-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L44-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/274.js#L44-L45) · [Before (L1050-L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/274.js#L1050-L1058)

```diff
-         VG = () => {
-           let GG = YG();
-           for (;
-             "||" === LG();) {
-             yG();
-             const bG = YG();
-             GG = GG || bG
-           }
-           return GG
+         lM = (rM, iM) => {
+           console.error(`Could not play docs sound ${MM}`, iM), JM(!0)
```

#### 10. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1060-L1401` → after: `L47-L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L47-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/274.js#L47-L48) · [Before (L1060-L1401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/274.js#L1060-L1401)

```diff
-         pG = VG();
-       if (SG !== wG.length) throw new Error(`Cannot evaluate #if ${GG}`);
-       return pG
-     }
-     var Hb = ZG(37541),
-       tb = ZG(37885),
-       Db = ZG(37892),
-       Nb = ZG(41084),
-       Ob = ZG(39158);
-     const xb = 32,
-       Bb = [10, 3, 10],
-       GZ = [21, 7, 21],
-       bZ = GZ[0] * GZ[1] * GZ[2],
-       ZZ = 0,
-       wZ = 1,
-       SZ = 2,
- ... (326 more removed lines; see GitHub link above)
+         EM = (iM, OM) => {
+           rM || PM.get(MM) !== zM || (PM.delete(MM), zM.unload()), lM(iM, OM)
```

#### 11. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1403` → after: `L50-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L50-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/274.js#L50-L72) · [Before (L1403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/274.js#L1403)

```diff
-         return `${RZ(bG)}${LG}${function(GG){const[bG,ZG,wG]=eZ.t;return`@group(${GG.group}) @binding(${GG.volume}) var bloxdSpShadowVolume: texture_3d<f32>;\n@group(${GG.group}) @binding(${GG.sampler}) var bloxdSpShadowVolumeSampler: sampler;\nfn bloxdSpVolumeAt(p: vec3f, offset … [truncated]
+       return zM.on("play", dM, mM), zM.once("end", yM, mM), zM.once("loaderror", EM), zM.once("playerror", lM, mM), {
+         pause: () => {
+           zM.pause(mM)
+         },
+         resume: () => {
+           zM.play(mM)
+         },
+         seek: MM => {
+           const rM = HM(),
+             iM = Math.max(MM, 0);
+           zM.seek(rM > 0 ? Math.min(iM, rM) : iM, mM)
+         },
+         XE: () => {
+           const MM = zM.seek(mM);
+           return "number" === typeof MM ? Math.max(0, MM) : 0
+         },
+ ... (7 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/275.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/275.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a)

#### 1. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L4-L8` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/275.js#L4-L6) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/275.js#L4-L8)

```diff
-   41305: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       c: () => yG,
-       g: () => LG,
-       k: () => kG
+   40928: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       default: () => IM
```

#### 2. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L10-L11` → after: `L8-L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L8-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/275.js#L8-L617) · [Before (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/275.js#L10-L11)

```diff
-     let wG = null,
-       SG = null;
+     iM(6922);
+     var OM = iM(44),
+       SM = iM(40931),
+       jM = iM(41190),
+       aM = iM(41313),
+       PM = iM(41358),
+       nM = iM(41374),
+       QM = iM(38167),
+       zM = iM(38034),
+       LM = iM(41495),
+       mM = iM(41543),
+       HM = (iM(41564), iM(1229)),
+       hM = iM(181),
+       JM = iM(1188),
+       dM = iM(19),
+       yM = iM(3047),
+ ... (594 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L14-L15` → after: `L620-L657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L620-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/275.js#L620-L657) · [Before (L14-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/275.js#L14-L15)

```diff
-       return wG = GG, SG = null, kG(bG), () => {
-         wG === GG && (wG = null, SG = null)
+       const iM = (iM, OM, SM) => new zM.sh(0 === iM ? MM[0] : rM[0], 0 === OM ? MM[1] : rM[1], 0 === SM ? MM[2] : rM[2]),
+         OM = [];
+       for (const SM of [0, 1])
+         for (const MM of [0, 1]) OM.push([iM(0, SM, MM), iM(1, SM, MM)], [iM(SM, 0, MM), iM(SM, 1, MM)], [iM(SM, MM, 0), iM(SM, MM, 1)]);
+       return OM
+     }
+ 
+     function Mr(MM) {
+       return [Math.sin(MM.heading) * Math.cos(MM.pitch), -Math.sin(MM.pitch), Math.cos(MM.heading) * Math.cos(MM.pitch)]
+     }
+ 
+     function rr(MM) {
+       return [Math.cos(MM), 0, -Math.sin(MM)]
+     }
+ 
+     function ir(MM, rM, iM) {
+ ... (22 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L19-L21` → after: `L661-L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L661-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/275.js#L661-L669) · [Before (L19-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/275.js#L19-L21)

```diff
-     function yG() {
-       return null === SG ? null : {
-         ...SG
+     function Or(MM, rM, iM) {
+       const OM = jr(MM),
+         SM = jr(iM),
+         jM = ar(MM.position, Pr(rM, -1)),
+         aM = [0, 1, 2].reduce(((MM, rM) => ar(MM, Pr(SM[rM], nr(jM, OM[rM])))), [0, 0, 0]);
+       return {
+         position: ar(rM, aM),
+         heading: iM.heading,
+         pitch: iM.pitch
```

#### 5. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L26-L37` → after: `L674-L681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L674-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/275.js#L674-L681) · [Before (L26-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/275.js#L26-L37)

```diff
-       var bG;
-       null !== (bG = wG) && void 0 !== bG && bG(GG) && (SG = {
-         ...GG
-       })
-     }
-   },
-   41319: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       c: () => SG,
-       e: () => LG
-     });
-     let wG = null;
+       return Pr(ar(MM.min, MM.max), .5)
+     }
+ 
+     function jr(MM) {
+       const rM = Mr(MM),
+         iM = rr(MM.heading);
+       return [rM, iM, Qr(rM, iM)]
+     }
```

#### 6. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L40-L67` → after: `L684-L696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L684-L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/275.js#L684-L696) · [Before (L40-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/275.js#L40-L67)

```diff
-       wG = {
-         conn: GG,
-         reason: bG
-       }
-     }
- 
-     function LG(GG) {
-       var bG;
-       const ZG = (null === (bG = wG) || void 0 === bG ? void 0 : bG.conn) === GG ? wG.reason : null;
-       return wG = null, ZG
-     }
-   },
-   41383: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       e: () => LG,
-       h: () => SG
- ... (12 more removed lines; see GitHub link above)
+       return [MM[0] + rM[0], MM[1] + rM[1], MM[2] + rM[2]]
+     }
+ 
+     function Pr(MM, rM) {
+       return [MM[0] * rM, MM[1] * rM, MM[2] * rM]
+     }
+ 
+     function nr(MM, rM) {
+       return MM[0] * rM[0] + MM[1] * rM[1] + MM[2] * rM[2]
+     }
+ 
+     function Qr(MM, rM) {
+       return [MM[1] * rM[2] - MM[2] * rM[1], MM[2] * rM[0] - MM[0] * rM[2], MM[0] * rM[1] - MM[1] * rM[0]]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/276.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/276.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6)

#### 1. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L4-L6` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/276.js#L4-L7) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/276.js#L4-L6)

```diff
-   41447: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       gamePackSource: () => LG
+   41323: (MM, rM, iM) => {
+     iM.d(rM, {
+       b: () => dM,
+       d: () => EM
```

#### 2. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L8-L9` → after: `L9-L6874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L9-L6874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/276.js#L9-L6874) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/276.js#L8-L9)

```diff
-     var wG = ZG(5008),
-       SG = ZG(1431);
+     var OM = iM(41099),
+       SM = iM(41105),
+       jM = iM(41213),
+       aM = iM(38068),
+       PM = iM(38040),
+       nM = iM(41328),
+       QM = iM(39711),
+       zM = iM(38085),
+       LM = iM(40990),
+       mM = iM(39078),
+       HM = iM(38740),
+       hM = iM(41061),
+       JM = iM(41121);
+     let dM = (() => {
+       var MM;
+       let rM, iM, zM, dM, yM, lM, EM, UM, GM, CM, eM, bM, wM, tM, gM, uM, RM, pM, WM = nM.d,
+ ... (6850 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L12-L14` → after: `L6877-L7741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R6877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L6877-L7741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/276.js#L6877-L7741) · [Before (L12-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/276.js#L12-L14)

```diff
-       return {
-         packKey: async bG => (await SG.d.getGame(GG, bG, !0)).customTexturePackKey,
-         fetchPack: wG.e
+       const rM = MM.bakedVertexAnimationManager?.texture?.getInternalTexture()?._bufferView;
+       return rM instanceof Float32Array || rM instanceof Uint16Array
+     }
+ 
+     function zM(MM, rM, iM, OM) {
+       iM.P_(Number.POSITIVE_INFINITY), OM.P_(Number.NEGATIVE_INFINITY);
+       for (let SM = 0; SM < 3 * rM; SM += 3) {
+         const rM = MM[SM],
+           jM = MM[SM + 1],
+           aM = MM[SM + 2];
+         rM < iM.x && (iM.x = rM), jM < iM.y && (iM.y = jM), aM < iM.z && (iM.z = aM), rM > OM.x && (OM.x = rM), jM > OM.y && (OM.y = jM), aM > OM.z && (OM.z = aM)
+       }
+     }
+ 
+     function LM(MM, rM, iM) {
+       iM && (MM.x -= MM.x * iM.x + iM.y, MM.y -= MM.y * iM.x + iM.y, MM.z -= MM.z * iM.x + iM.y, rM.x += rM.x * iM.x + iM.y, rM.y += rM.y * iM.x + iM.y, rM.z += rM.z * iM.x + iM.y)
+ ... (849 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/277.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/277.js` (11 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410)

#### 1. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/277.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/277.js#L2)

```diff
- export const ids = [276, 277];
+ export const ids = [277];
```

#### 2. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4-L6` → after: `L4-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/277.js#L4-L9) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/277.js#L4-L6)

```diff
-   41447: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       gamePackSource: () => LG
+   41250: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => PM,
+       f: () => JM,
+       h: () => QM,
+       j: () => nM
```

#### 3. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L8-L9` → after: `L11-L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L11-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/277.js#L11-L181) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/277.js#L8-L9)

```diff
-     var wG = ZG(5008),
-       SG = ZG(1431);
+     var OM = iM(41026),
+       SM = iM(39711),
+       jM = iM(41167),
+       aM = iM(41072);
+     class PM {
+       get xG() {
+         return this._isDisposed
+       }
+       constructor(MM, rM, iM) {
+         let SM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
+           jM = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
+           PM = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+           nM = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+           QM = arguments.length > 7 ? arguments[7] : void 0,
+           zM = arguments.length > 8 ? arguments[8] : void 0;
+         this._isAlreadyOwned = !1, this._isDisposed = !1, (0, aM.c)(), MM && MM.Hk ? this._engine = MM.Hk().ph() : this._engine = MM, this._updatable = iM, this._instanced = PM, this._divisor = QM || 1, this._label = zM, rM instanceof OM.c ? (this._data = null, this._buffer = rM) … [truncated]
+ ... (155 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L12-L14` → after: `L184-L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L184-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/277.js#L184-L204) · [Before (L12-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/277.js#L12-L14)

```diff
-       return {
-         packKey: async bG => (await SG.d.getGame(GG, bG, !0)).customTexturePackKey,
-         fetchPack: wG.e
+       switch (MM) {
+         case nM.UVKind:
+         case nM.UV2Kind:
+         case nM.UV3Kind:
+         case nM.UV4Kind:
+         case nM.UV5Kind:
+         case nM.UV6Kind:
+           return 2;
+         case nM.NormalKind:
+         case nM.PositionKind:
+           return 3;
+         case nM.ColorKind:
+         case nM.ColorInstanceKind:
+         case nM.MatricesIndicesKind:
+         case nM.MatricesIndicesExtraKind:
+         case nM.MatricesWeightsKind:
+ ... (5 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L17-L33` → after: `L207-L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L207-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/277.js#L207-L226) · [Before (L17-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/277.js#L17-L33)

```diff
-   },
-   51425: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       fetchGuestContext: () => fG,
-       guestJoinTarget: () => zG,
-       guestJoinWithPack: () => KG,
-       guestPackForGame: () => QG,
-       invalidateGuestTrafficCode: () => rG
-     });
-     var wG = ZG(1163),
-       SG = ZG(1431),
-       LG = ZG(80),
-       yG = ZG(36801),
-       kG = ZG(1096),
-       UG = ZG(41122),
-       YG = ZG(41447),
- ... (1 more removed lines; see GitHub link above)
+ 
+     function zM(MM) {
+       return MM instanceof Int8Array ? nM.BYTE : MM instanceof Uint8Array ? nM.UNSIGNED_BYTE : MM instanceof Int16Array ? nM.SHORT : MM instanceof Uint16Array ? nM.UNSIGNED_SHORT : MM instanceof Int32Array ? nM.INT : MM instanceof Uint32Array ? nM.UNSIGNED_INT : nM.FLOAT
+     }
+ 
+     function LM(MM) {
+       return (0, jM.n)(MM)
+     }
+ 
+     function mM(MM, rM, iM, OM, SM, aM, PM, nM) {
+       (0, jM.h)(MM, rM, iM, OM, SM, aM, PM, ((MM, rM) => {
+         for (let iM = 0; iM < OM; iM++) nM(MM[iM], rM + iM)
+       }))
+     }
+ 
+     function HM(MM, rM, iM, OM, SM, aM, PM, nM) {
+ ... (4 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L36` → after: `L229-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L229-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/277.js#L229-L242) · [Before (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/277.js#L36)

```diff
-       if (LG.featureFlags.useTurnstile) throw new UG.TurnstilePageError
+       hM || (hM = !0, nM.DeduceStride = QM, nM.GetDataType = zM, nM.GetTypeByteLength = LM, nM.ForEach = mM, nM.GetFloatData = HM)
+     }
+   },
+   41026: (MM, rM, iM) => {
+     iM.d(rM, {
+       c: () => OM
+     });
+     class OM {
+       get underlyingResource() {
+         return null
+       }
+       constructor() {
+         this.references = 0, this.vL = 0, this.is32Bits = !1, this.uniqueId = OM._Counter++
+       }
```

#### 7. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L40` → after: `L320-L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L320-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/277.js#L320-L327) · [Before (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/277.js#L40)

```diff
-       return (0, kG.fetchAnonymousUserContext)().catch((GG => (console.warn("the guest context didn't load", GG), null)))
+       SM || (SM = !0, OM.ThinEngine.prototype.updateDynamicIndexBuffer = function(MM, rM) {
+         let iM;
+         this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(MM), iM = MM.is32Bits ? rM instanceof Uint32Array ? rM : new Uint32Array(rM) : rM instanceof Uint16Array ? rM : new Uint16Array(rM), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, iM, … [truncated]
+       }, OM.ThinEngine.prototype.updateDynamicVertexBuffer = function(MM, rM, iM, OM) {
+         this.bindArrayBuffer(MM), void 0 === iM && (iM = 0);
+         const SM = rM.byteLength || rM.length;
+         void 0 === OM || OM >= SM && 0 === iM ? rM instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, iM, new Float32Array(rM)) : this._gl.bufferSubData(this._gl.ARRAY_BUFFER, iM, rM) : rM instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, iM, new Floa … [truncated]
+       })
```

#### 8. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L42-L48` → after: `L329-L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L329-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/277.js#L329-L365) · [Before (L42-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/277.js#L42-L48)

```diff
-     async function QG(GG, bG, ZG, wG) {
-       try {
-         const SG = await ZG;
-         if (null === SG) return void console.warn(`the texture pack step for ${GG} has no guest context: the pack in play stays`);
-         await bG.packForGame(GG, (0, YG.gamePackSource)(SG), wG)
-       } catch (SG) {
-         console.warn(`the texture pack step for ${GG} failed: the pack in play stays`, SG)
+   },
+   41040: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => OM
+     });
+     class OM {
+       get underlyingResource() {
+         return this._webGLTexture
+       }
+       constructor() {
+         let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
+           rM = arguments.length > 1 ? arguments[1] : void 0;
+         if (this._MSAARenderBuffers = null, this._context = rM, !MM && (MM = rM.createTexture(), !MM)) throw new Error("Unable to create webGL texture");
+         this.set(MM)
+       }
+       setUsage() {}
+ ... (21 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L51-L54` → after: `L368-L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L368-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/277.js#L368-L440) · [Before (L51-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/277.js#L51-L54)

```diff
-     async function KG(GG, bG, ZG, wG) {
-       pG();
-       const SG = fG();
-       return await ZG(((bG, ZG) => QG(GG, bG, SG, ZG))), zG(GG, bG, wG(), await SG)
+   },
+   41005: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => lM
+     });
+     var OM = iM(38068),
+       SM = iM(40957),
+       jM = iM(38064),
+       aM = iM(39711),
+       PM = iM(38056),
+       nM = iM(41009);
+     class QM {
+       constructor() {
+         let MM = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
+         this._isDepthTestDirty = !1, this._isDepthMaskDirty = !1, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !1, this._isFrontFaceDirty = !1, MM && this.reset()
+       }
+ ... (57 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L56-L64` → after: `L442-L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L442-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/277.js#L442-L529) · [Before (L56-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/277.js#L56-L64)

```diff
-     let hG = null,
-       dG = null;
-     async function JG() {
-       if ((null === hG || hG.hasExpired()) && (dG ??= (0, kG.fetchAnonymousUserContext)().then((GG => {
-           hG = GG
-         })).finally((() => {
-           dG = null
-         })), await dG), null === hG) throw new Error("no guest context to post as");
-       return hG.getMetricsCookies()
+     class zM {
+       get isDirty() {
+         return this._isStencilTestDirty || this._isStencilMaskDirty || this._isStencilFuncDirty || this._isStencilOpDirty
+       }
+       get func() {
+         return this._func
+       }
+       set func(MM) {
+         this._func !== MM && (this._func = MM, this._isStencilFuncDirty = !0)
+       }
+       get backFunc() {
+         return this._func
+       }
+       set backFunc(MM) {
+         this._backFunc !== MM && (this._backFunc = MM, this._isStencilFuncDirty = !0)
+       }
+ ... (72 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L66-L91` → after: `L531-L1092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L531-L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/277.js#L531-L1092) · [Before (L66-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/277.js#L66-L91)

```diff
-     async function rG() {
-       var GG;
-       await (null === (GG = hG) || void 0 === GG ? void 0 : GG.invalidateTrafficCode())
-     }
-     async function zG(GG, bG, ZG) {
-       let LG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
-       pG();
-       const UG = null !== LG && void 0 !== LG ? LG : await (0, kG.fetchAnonymousUserContext)();
-       if (hG = UG, UG.isLoggedIn()) throw new Error("the shell's page joins as a guest only");
-       const YG = await SG.d.matchmakePlayer(UG, bG, GG, (0, yG.e)()),
-         fG = performance.now();
-       if (!("gameServerHost" in YG)) throw new Error(`matchmaking refused: ${YG.failReason}`);
-       const QG = wG.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(YG.gameServerHost);
-       if (QG.isError()) throw new Error(`no socket URL for ${YG.gameServerHost}: ${QG.asError().message}`);
-       const KG = {
-         endpoint: QG.getValue(),
- ... (10 more removed lines; see GitHub link above)
+     class LM {
+       constructor() {
+         this.reset()
+       }
+       reset() {
+         this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = LM.ALWAYS, this.opStencilFail = LM.KEEP, this.opDepthFail = LM.KEEP, this.opStencilDepthPass = LM.REPLACE, this.backFunc = LM.ALWAYS, this.backOpStencilFail = LM.KEEP, this.backOpDepthF … [truncated]
+       }
+       get stencilFunc() {
+         return this.func
+       }
+       set stencilFunc(MM) {
+         this.func = MM
+       }
+       get stencilBackFunc() {
+         return this.backFunc
+       }
+ ... (546 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/278.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/278.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0)

#### 1. `bundles/bloxd.io/chunks/js/278.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/278.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/278.js#L2)

```diff
- export const ids = [278];
+ export const ids = [278, 662];
```

#### 2. `bundles/bloxd.io/chunks/js/278.js` (Changed code · before: `L4` → after: `L4-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0) · [After (L4-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/278.js#L4-L21) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/278.js#L4)

```diff
-   41449: (GG, bG, ZG) => {
+   40964: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => OM
+     });
+     class OM {
+       static GetShadersRepository() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? OM.ShadersRepository : OM.ShadersRepositoryWGSL
+       }
+       static GetShadersStore() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? OM.ShadersStore : OM.ShadersStoreWGSL
+       }
+       static GetIncludesShadersStore() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? OM.IncludesShadersStore : OM.IncludesShadersStoreWGSL
+       }
+     }
+     OM.ShadersRepository = "src/Shaders/", OM.ShadersStore = {}, OM.IncludesShadersStore = {}, OM.ShadersRepositoryWGSL = "src/ShadersWGSL/", OM.ShadersStoreWGSL = {}, OM.IncludesShadersStoreWGSL = {}
+ ... (2 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/278.js` (Changed code · before: `L6` → after: `L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0) · [After (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/278.js#L23) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/278.js#L6)

```diff
-       BloxdInformation: () => QG
+       postprocessVertexShader: () => aM
```

#### 4. `bundles/bloxd.io/chunks/js/278.js` (Changed code · before: `L8-L151` → after: `L25-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0) · [After (L25-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/278.js#L25-L31) · [Before (L8-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/278.js#L8-L151)

```diff
-     var wG = ZG(1151),
-       SG = ZG(51),
-       LG = ZG(80),
-       yG = ZG(1393),
-       kG = ZG(116),
-       UG = ZG(1016),
-       YG = ZG(1067);
-     const VG = (0, SG.lazy)((() => Promise.all([ZG.e(124), ZG.e(398)]).then((() => ZG(6520))))),
-       pG = (0, SG.lazy)((() => ZG.e(126).then((() => ZG(6535)))));
- 
-     function fG() {
-       return (0, YG.jsxs)("div", {
-         className: "LegalText",
-         children: [(0, YG.jsx)("div", {
-           className: "BloxdInformationHeader FullyFancyText",
-           children: "Security Exploit Bounty Program"
- ... (128 more removed lines; see GitHub link above)
+     var OM = iM(40964);
+     const SM = "postprocessVertexShader",
+       jM = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTE … [truncated]
+     OM.e.ShadersStore[SM] || (OM.e.ShadersStore[SM] = jM);
+     const aM = {
+       name: SM,
+       shader: jM
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/279.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/279.js` (70 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae)

#### 1. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L4)

```diff
-   41487: (GG, bG, ZG) => {
+   41167: (MM, rM, iM) => {
```

#### 2. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L6)

```diff
-       d: () => zG,
+       c: () => mM,
```

#### 3. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L8-L13` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L8-L12) · [Before (L8-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L8-L13)

```diff
-       j: () => dG,
-       l: () => JG,
-       o: () => fG,
-       r: () => hG,
-       s: () => KG,
-       u: () => QG
+       h: () => nM,
+       i: () => HM,
+       m: () => QM,
+       n: () => PM,
+       r: () => zM
```

#### 4. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L15-L66` → after: `L14-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L14-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L14-L21) · [Before (L15-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L15-L66)

```diff
-     var wG = ZG(37439),
-       SG = ZG(37621),
-       LG = ZG(37471),
-       yG = ZG(41493),
-       kG = ZG(40599),
-       UG = ZG(40407),
-       YG = ZG(40432),
-       VG = ZG(40416),
-       pG = ZG(37484);
-     const fG = Object.freeze(new wG.g(0, 0, 0, 0)),
-       QG = Object.freeze(wG.p.Zero()),
-       KG = Object.freeze(wG.m.Zero()),
-       hG = Object.freeze(UG.c.Zero()),
-       dG = Object.freeze(SG.c.Black()),
-       JG = Object.freeze(new SG.d(0, 0, 0, 0)),
-       rG = {
- ... (36 more removed lines; see GitHub link above)
+     var OM = iM(39711),
+       SM = iM(41176);
+ 
+     function jM(MM, rM, iM, OM) {
+       switch (rM) {
+         case 5120: {
+           let rM = MM.getInt8(iM);
+           return OM && (rM = Math.max(rM / 127, -1)), rM
```

#### 5. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L68` → after: `L23-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L23-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L23-L44) · [Before (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L68)

```diff
-         return bG
+         case 5121: {
+           let rM = MM.getUint8(iM);
+           return OM && (rM /= 255), rM
+         }
+         case 5122: {
+           let rM = MM.getInt16(iM, !0);
+           return OM && (rM = Math.max(rM / 32767, -1)), rM
+         }
+         case 5123: {
+           let rM = MM.getUint16(iM, !0);
+           return OM && (rM /= 65535), rM
+         }
+         case 5131:
+           return (0, SM.c)(MM.getUint16(iM, !0));
+         case 5124:
+           return MM.getInt32(iM, !0);
+ ... (6 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L70-L71` → after: `L46-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L46-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L46-L75) · [Before (L70-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L70-L71)

```diff
-       addEvent(GG) {
-         this._events.push(GG), this._events.sort(((GG, bG) => GG.frame - bG.frame))
+     }
+ 
+     function aM(MM, rM, iM, OM, jM) {
+       switch (rM) {
+         case 5120:
+           OM && (jM = Math.round(127 * jM)), MM.setInt8(iM, jM);
+           break;
+         case 5121:
+           OM && (jM = Math.round(255 * jM)), MM.setUint8(iM, jM);
+           break;
+         case 5122:
+           OM && (jM = Math.round(32767 * jM)), MM.setInt16(iM, jM, !0);
+           break;
+         case 5123:
+           OM && (jM = Math.round(65535 * jM)), MM.setUint16(iM, jM, !0);
+           break;
+ ... (14 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L73-L74` → after: `L77-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L77-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L77-L93) · [Before (L73-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L73-L74)

```diff
-       removeEvents(GG) {
-         for (let bG = 0; bG < this._events.length; bG++) this._events[bG].frame === GG && (this._events.splice(bG, 1), bG--)
+     }
+ 
+     function PM(MM) {
+       switch (MM) {
+         case 5120:
+         case 5121:
+           return 1;
+         case 5122:
+         case 5123:
+         case 5131:
+           return 2;
+         case 5124:
+         case 5125:
+         case 5126:
+           return 4;
+         default:
+ ... (1 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L76-L77` → after: `L95-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L95-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L95-L117) · [Before (L76-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L76-L77)

```diff
-       getEvents() {
-         return this._events
+     }
+ 
+     function nM(MM, rM, iM, OM, SM, nM, QM, zM) {
+       const LM = new Array(OM),
+         mM = new Array(OM);
+       if (MM instanceof Array) {
+         let SM = rM / 4;
+         const jM = iM / 4;
+         for (let rM = 0; rM < nM; rM += OM) {
+           for (let rM = 0; rM < OM; rM++) LM[rM] = mM[rM] = MM[SM + rM];
+           zM(mM, rM);
+           for (let rM = 0; rM < OM; rM++) LM[rM] !== mM[rM] && (MM[SM + rM] = mM[rM]);
+           SM += jM
+         }
+       } else {
+         const HM = ArrayBuffer.isView(MM) ? new DataView(MM.buffer, MM.byteOffset, MM.byteLength) : new DataView(MM),
+ ... (7 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L79-L80` → after: `L119-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L119-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L119-L128) · [Before (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L79-L80)

```diff
-       createRange(GG, bG, ZG) {
-         this._ranges[GG] || (this._ranges[GG] = new yG.c(GG, bG, ZG))
+     }
+ 
+     function QM(MM, rM, iM, SM, jM, aM, QM, zM) {
+       const LM = rM * PM(iM),
+         mM = QM * rM;
+       if (5126 !== iM || jM !== LM) {
+         const OM = new Float32Array(mM);
+         return nM(MM, SM, jM, rM, iM, mM, aM, ((MM, iM) => {
+           for (let SM = 0; SM < rM; SM++) OM[iM + SM] = MM[SM]
+         })), OM
```

#### 10. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L82-L89` → after: `L130-L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L130-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L130-L164) · [Before (L82-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L82-L89)

```diff
-       deleteRange(GG) {
-         let bG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         const ZG = this._ranges[GG];
-         if (ZG) {
-           if (bG) {
-             const GG = ZG.from,
-               bG = ZG.to;
-             for (let ZG = this._keys.length - 1; ZG >= 0; ZG--) this._keys[ZG].frame >= GG && this._keys[ZG].frame <= bG && this._keys.splice(ZG, 1)
+       if (!(MM instanceof Array || MM instanceof Float32Array) || 0 !== SM || MM.length !== mM) {
+         if (MM instanceof Array) {
+           const rM = SM / 4;
+           return MM.slice(rM, rM + mM)
+         }
+         if (ArrayBuffer.isView(MM)) {
+           const rM = MM.byteOffset + SM;
+           return 0 !== (3 & rM) && (OM.e.Warn("Float array must be aligned to 4-bytes border"), zM = !0), zM ? new Float32Array(MM.buffer.slice(rM, rM + mM * Float32Array.BYTES_PER_ELEMENT)) : new Float32Array(MM.buffer, rM, mM)
+         }
+         return new Float32Array(MM, SM, mM)
+       }
+       return zM ? MM.slice() : MM
+     }
+ 
+     function zM(MM, rM, iM, SM, jM, aM, QM) {
+       const zM = PM(iM),
+ ... (19 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L91` → after: `L166-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L166-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L166-L178) · [Before (L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L91)

```diff
-           this._ranges[GG] = null
+         }(iM),
+         mM = aM * rM;
+       if (Array.isArray(MM)) {
+         if (0 !== (3 & SM) || 0 !== (3 & jM)) throw new Error("byteOffset and byteStride must be a multiple of 4 for number[] data.");
+         const OM = SM / 4,
+           PM = jM / 4;
+         if (OM + (aM - 1) * PM + rM > MM.length) throw new Error("Last accessed index is out of bounds.");
+         if (PM < rM) throw new Error("Data stride cannot be smaller than the component size.");
+         if (PM !== rM) {
+           const OM = new LM(mM);
+           return nM(MM, SM, jM, rM, iM, mM, !1, ((MM, iM) => {
+             for (let SM = 0; SM < rM; SM++) OM[iM + SM] = MM[SM]
+           })), OM
```

#### 12. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L94-L95` → after: `L182-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L182-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L182-L193) · [Before (L94-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L94-L95)

```diff
-       getRange(GG) {
-         return this._ranges[GG]
+       let HM, hM = SM;
+       ArrayBuffer.isView(MM) ? (HM = MM.buffer, hM += MM.byteOffset) : HM = MM;
+       if (hM + (aM - 1) * jM + rM * zM > HM.byteLength) throw new Error("Last accessed byte is out of bounds.");
+       const JM = rM * zM;
+       if (jM < JM) throw new Error("Byte stride cannot be smaller than the component's byte size.");
+       if (jM !== JM) {
+         const MM = new LM(mM),
+           iM = new Uint8Array(HM, hM),
+           OM = new Uint8Array(MM.buffer),
+           SM = rM * zM;
+         for (let rM = 0, PM = 0, nM = 0; rM < aM; rM++, PM += jM, nM += SM) OM.set(iM.subarray(PM, PM + SM), nM);
+         return MM
```

#### 13. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L97-L98` → after: `L195-L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L195-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L195-L225) · [Before (L97-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L97-L98)

```diff
-       getKeys() {
-         return this._keys
+       return 1 !== zM && 0 !== (hM & zM - 1) && (OM.e.Warn("Array must be aligned to border of element size. Data will be copied."), QM = !0), QM ? new LM(HM.slice(hM, hM + mM * zM)) : new LM(HM, hM, mM)
+     }
+ 
+     function LM(MM, rM, iM, SM, jM, aM, QM, zM) {
+       const LM = rM * PM(iM),
+         mM = QM * rM;
+       if (zM.length !== mM) throw new Error("Output length is not valid");
+       if (5126 === iM && jM === LM)
+         if (MM instanceof Array) {
+           const rM = SM / 4;
+           zM.set(MM, rM)
+         } else if (ArrayBuffer.isView(MM)) {
+         const rM = MM.byteOffset + SM;
+         if (0 !== (3 & rM)) return OM.e.Warn("Float array must be aligned to 4-bytes border"), void zM.set(new Float32Array(MM.buffer.slice(rM, rM + mM * Float32Array.BYTES_PER_ELEMENT)));
+         const iM = new Float32Array(MM.buffer, rM, mM);
+         zM.set(iM)
+ ... (15 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L100-L103` → after: `L227-L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L227-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L227-L247) · [Before (L100-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L100-L103)

```diff
-       getHighestFrame() {
-         let GG = 0;
-         for (let bG = 0, ZG = this._keys.length; bG < ZG; bG++) GG < this._keys[bG].frame && (GG = this._keys[bG].frame);
-         return GG
+       return 4 === MM.BYTES_PER_ELEMENT
+     }
+ 
+     function HM(MM) {
+       const rM = MM.buffer;
+       if (rM instanceof ArrayBuffer) return MM;
+       const iM = new ArrayBuffer(MM.byteLength);
+       return new Uint8Array(iM).set(new Uint8Array(rM, MM.byteOffset, MM.byteLength)), iM
+     }
+   },
+   40998: (MM, rM, iM) => {
+     iM.d(rM, {
+       b: () => bM,
+       c: () => CM,
+       h: () => eM,
+       e: () => WM,
+ ... (5 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L105-L106` → after: `L249-L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L249-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L249-L250) · [Before (L105-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L105-L106)

```diff
-       getEasingFunction() {
-         return this._easingFunction
+       isValid(MM) {
+         return !0
```

#### 16. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L108-L109` → after: `L252-L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L252-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L252-L274) · [Before (L108-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L108-L109)

```diff
-       setEasingFunction(GG) {
-         this._easingFunction = GG
+       process(MM, rM, iM) {
+         let OM = "";
+         if (this.line) {
+           let iM = this.line;
+           const SM = rM.processor;
+           if (SM) {
+             SM.lineProcessor && (iM = SM.lineProcessor(iM, rM.isFragment, rM.processingContext));
+             const OM = rM.processor?.attributeKeywordName ?? "attribute",
+               jM = rM.isFragment && rM.processor?.varyingFragmentKeywordName ? rM.processor?.varyingFragmentKeywordName : !rM.isFragment && rM.processor?.varyingVertexKeywordName ? rM.processor?.varyingVertexKeywordName : "varying";
+             if (!rM.isFragment && SM.attributeProcessor && this.line.startsWith(OM)) iM = SM.attributeProcessor(this.line, MM, rM.processingContext);
+             else if (SM.varyingProcessor && (SM.varyingCheck?.(this.line, rM.isFragment) || !SM.varyingCheck && this.line.startsWith(jM))) iM = SM.varyingProcessor(this.line, rM.isFragment, MM, rM.processingContext);
+             else if (SM.uniformProcessor && SM.uniformRegexp && SM.uniformRegexp.test(this.line)) rM.lookForClosingBracketForUniformBuffer || (iM = SM.uniformProcessor(this.line, rM.isFragment, MM, rM.processingContext));
+             else if (SM.uniformBufferProcessor && SM.uniformBufferRegexp && SM.uniformBufferRegexp.test(this.line)) rM.lookForClosingBracketForUniformBuffer || (iM = SM.uniformBufferProcessor(this.line, rM.isFragment, rM.processingContext), rM.lookForClosingBracketForUniformBuffe … [truncated]
+             else if (SM.textureProcessor && SM.textureRegexp && SM.textureRegexp.test(this.line)) iM = SM.textureProcessor(this.line, rM.isFragment, MM, rM.processingContext);
+             else if ((SM.uniformProcessor || SM.uniformBufferProcessor) && this.line.startsWith("uniform") && !rM.lookForClosingBracketForUniformBuffer) {
+               /uniform\s+(?:(?:highp)?|(?:lowp)?)\s*(\S+)\s+(\S+)\s*;/.test(this.line) ? SM.uniformProcessor && (iM = SM.uniformProcessor(this.line, rM.isFragment, MM, rM.processingContext)) : SM.uniformBufferProcessor && (iM = SM.uniformBufferProcessor(this.line, rM.isFragment,  … [truncated]
+ ... (7 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L111-L112` → after: `L276-L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L276-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L276-L279) · [Before (L111-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L111-L112)

```diff
-       floatInterpolateFunction(GG, bG, ZG) {
-         return (0, LG.Lerp)(GG, bG, ZG)
+     }
+     class SM {
+       constructor() {
+         this._lines = []
```

#### 18. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L114-L115` → after: `L281-L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L281-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L281-L282) · [Before (L114-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L114-L115)

```diff
-       floatInterpolateFunctionWithTangents(GG, bG, ZG, wG, SG) {
-         return (0, LG.Hermite)(GG, bG, ZG, wG, SG)
+       get currentLine() {
+         return this._lines[this.lineIndex]
```

#### 19. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L117-L118` → after: `L284-L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L284-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L284-L285) · [Before (L117-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L117-L118)

```diff
-       quaternionInterpolateFunction(GG, bG, ZG) {
-         return wG.g.Slerp(GG, bG, ZG)
+       get canRead() {
+         return this.lineIndex < this._lines.length - 1
```

#### 20. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L120-L121` → after: `L287-L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L287-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L287-L311) · [Before (L120-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L120-L121)

```diff
-       quaternionInterpolateFunctionWithTangents(GG, bG, ZG, SG, LG) {
-         return wG.g.Hermite(GG, bG, ZG, SG, LG).normalize()
+       set lines(MM) {
+         this._lines.length = 0;
+         for (const rM of MM) {
+           if (!rM || "\r" === rM) continue;
+           if ("#" === rM[0]) {
+             this._lines.push(rM);
+             continue
+           }
+           const MM = rM.trim();
+           if (!MM) continue;
+           if (MM.startsWith("//")) {
+             this._lines.push(rM);
+             continue
+           }
+           const iM = MM.indexOf(";");
+           if (-1 === iM) this._lines.push(MM);
+ ... (9 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L123-L124` → after: `L313-L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L313-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L313-L320) · [Before (L123-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L123-L124)

```diff
-       vector3InterpolateFunction(GG, bG, ZG) {
-         return wG.p.Lerp(GG, bG, ZG)
+     }
+     class jM extends OM {
+       process(MM, rM, iM) {
+         for (let OM = 0; OM < this.children.length; OM++) {
+           const SM = this.children[OM];
+           if (SM.isValid(MM)) return SM.process(MM, rM, iM)
+         }
+         return ""
```

#### 22. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L126-L127` → after: `L322-L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L322-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L322-L325) · [Before (L126-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L126-L127)

```diff
-       vector3InterpolateFunctionWithTangents(GG, bG, ZG, SG, LG) {
-         return wG.p.Hermite(GG, bG, ZG, SG, LG)
+     }
+     class aM extends OM {
+       isValid(MM) {
+         return this.testExpression.isTrue(MM)
```

#### 23. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L129-L130` → after: `L327-L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L327-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L327-L330) · [Before (L129-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L129-L130)

```diff
-       vector2InterpolateFunction(GG, bG, ZG) {
-         return wG.m.Lerp(GG, bG, ZG)
+     }
+     class PM {
+       isTrue(MM) {
+         return !0
```

#### 24. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L132-L133` → after: `L332-L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L332-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L332-L340) · [Before (L132-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L132-L133)

```diff
-       vector2InterpolateFunctionWithTangents(GG, bG, ZG, SG, LG) {
-         return wG.m.Hermite(GG, bG, ZG, SG, LG)
+       static postfixToInfix(MM) {
+         const rM = [];
+         for (const iM of MM)
+           if (void 0 === PM._OperatorPriority[iM]) rM.push(iM);
+           else {
+             const MM = rM[rM.length - 1],
+               OM = rM[rM.length - 2];
+             rM.length -= 2, rM.push(`(${OM}${iM}${MM})`)
+           } return rM[rM.length - 1]
```

#### 25. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L135-L136` → after: `L342-L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L342-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L342-L375) · [Before (L135-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L135-L136)

```diff
-       sizeInterpolateFunction(GG, bG, ZG) {
-         return UG.c.Lerp(GG, bG, ZG)
+       static infixToPostfix(MM) {
+         const rM = PM._InfixToPostfixCache.get(MM);
+         if (rM) return rM.accessTime = Date.now(), rM.result;
+         if (!MM.includes("&&") && !MM.includes("||") && !MM.includes(")") && !MM.includes("(")) return [MM];
+         const iM = [];
+         let OM = -1;
+         const SM = () => {
+             zM = zM.trim(), "" !== zM && (iM.push(zM), zM = "")
+           },
+           jM = MM => {
+             OM < PM._Stack.length - 1 && (PM._Stack[++OM] = MM)
+           },
+           aM = () => PM._Stack[OM],
+           nM = () => -1 === OM ? "!!INVALID EXPRESSION!!" : PM._Stack[OM--];
+         let QM = 0,
+           zM = "";
+ ... (18 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L138-L139` → after: `L377-L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L377-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L377-L379) · [Before (L138-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L138-L139)

```diff
-       color3InterpolateFunction(GG, bG, ZG) {
-         return SG.c.Lerp(GG, bG, ZG)
+       static ClearCache() {
+         const MM = Array.from(PM._InfixToPostfixCache.entries()).sort(((MM, rM) => MM[1].accessTime - rM[1].accessTime));
+         for (let rM = 0; rM < PM.InfixToPostfixCacheCleanupSize; rM++) PM._InfixToPostfixCache.delete(MM[rM][0])
```

#### 27. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L141-L142` → after: `L381-L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L381-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L381-L391) · [Before (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L141-L142)

```diff
-       color3InterpolateFunctionWithTangents(GG, bG, ZG, wG, LG) {
-         return SG.c.Hermite(GG, bG, ZG, wG, LG)
+     }
+     PM.InfixToPostfixCacheLimitSize = 5e4, PM.InfixToPostfixCacheCleanupSize = 25e3, PM._InfixToPostfixCache = new Map, PM._OperatorPriority = {
+       ")": 0,
+       "(": 1,
+       "||": 2,
+       "&&": 3
+     }, PM._Stack = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
+     class nM extends PM {
+       constructor(MM) {
+         let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         super(), this.define = MM, this.not = rM
```

#### 28. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L144-L145` → after: `L393-L395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L393-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L393-L395) · [Before (L144-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L144-L145)

```diff
-       color4InterpolateFunction(GG, bG, ZG) {
-         return SG.d.Lerp(GG, bG, ZG)
+       isTrue(MM) {
+         let rM = void 0 !== MM[this.define];
+         return this.not && (rM = !rM), rM
```

#### 29. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L147-L148` → after: `L397-L400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L397-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L397-L400) · [Before (L147-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L147-L148)

```diff
-       color4InterpolateFunctionWithTangents(GG, bG, ZG, wG, LG) {
-         return SG.d.Hermite(GG, bG, ZG, wG, LG)
+     }
+     class QM extends PM {
+       isTrue(MM) {
+         return this.leftOperand.isTrue(MM) || this.rightOperand.isTrue(MM)
```

#### 30. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L150-L151` → after: `L402-L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L402-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L402-L405) · [Before (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L150-L151)

```diff
-       _getKeyValue(GG) {
-         return "function" === typeof GG ? GG() : GG
+     }
+     class zM extends PM {
+       isTrue(MM) {
+         return this.leftOperand.isTrue(MM) && this.rightOperand.isTrue(MM)
```

#### 31. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L153-L154` → after: `L407-L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L407-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L407-L410) · [Before (L153-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L153-L154)

```diff
-       evaluate(GG) {
-         return rG.key = 0, this._interpolate(GG, rG)
+     }
+     class LM extends PM {
+       constructor(MM, rM, iM) {
+         super(), this.define = MM, this.operand = rM, this.testValue = iM
```

#### 32. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L156-L242` → after: `L412-L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L412-L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L412-L422) · [Before (L156-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L156-L242)

```diff
-       _interpolate(GG, bG) {
-         let ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-         if (bG.Dw === zG.ANIMATIONLOOPMODE_CONSTANT && bG.repeatCount > 0) return bG.highLimitValue.clone ? bG.highLimitValue.clone() : bG.highLimitValue;
-         const wG = this._keys;
-         let SG;
-         if (this._coreAnimation) SG = this._coreAnimation._key;
-         else {
-           const LG = wG.length;
-           for (SG = bG.key; SG >= 0 && GG < wG[SG].frame;) --SG;
-           for (; SG + 1 <= LG - 1 && GG >= wG[SG + 1].frame;) ++SG;
-           if (bG.key = SG, SG < 0) return ZG ? void 0 : this._getKeyValue(wG[0].value);
-           if (SG + 1 > LG - 1) return ZG ? void 0 : this._getKeyValue(wG[LG - 1].value);
-           this._key = SG
-         }
-         const LG = wG[SG],
-           yG = wG[SG + 1];
- ... (71 more removed lines; see GitHub link above)
+       toString() {
+         return `${this.define} ${this.operand} ${this.testValue}`
+       }
+       isTrue(MM) {
+         let rM = !1;
+         const iM = parseInt(void 0 != MM[this.define] ? MM[this.define] : this.define),
+           OM = parseInt(void 0 != MM[this.testValue] ? MM[this.testValue] : this.testValue);
+         if (isNaN(iM) || isNaN(OM)) return !1;
+         switch (this.operand) {
+           case ">":
+             rM = iM > OM;
```

#### 33. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L244-L279` → after: `L424-L437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L424-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L424-L437) · [Before (L244-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L244-L279)

```diff
-           case zG.ANIMATIONTYPE_COLOR3: {
-             const GG = YG ? this.color3InterpolateFunctionWithTangents(kG, LG.outTangent.scale(VG), UG, yG.inTangent.scale(VG), pG) : this.color3InterpolateFunction(kG, UG, pG);
-             switch (bG.Dw) {
-               case zG.ANIMATIONLOOPMODE_CYCLE:
-               case zG.ANIMATIONLOOPMODE_CONSTANT:
-               case zG.ANIMATIONLOOPMODE_YOYO:
-                 return GG;
-               case zG.ANIMATIONLOOPMODE_RELATIVE:
-               case zG.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
-                 return GG.add((bG.offsetValue || dG).scale(bG.repeatCount))
-             }
-             break
-           }
-           case zG.ANIMATIONTYPE_COLOR4: {
-             const GG = YG ? this.color4InterpolateFunctionWithTangents(kG, LG.outTangent.scale(VG), UG, yG.inTangent.scale(VG), pG) : this.color4InterpolateFunction(kG, UG, pG);
-             switch (bG.Dw) {
- ... (20 more removed lines; see GitHub link above)
+           case "<":
+             rM = iM < OM;
+             break;
+           case "<=":
+             rM = iM <= OM;
+             break;
+           case ">=":
+             rM = iM >= OM;
+             break;
+           case "==":
+             rM = iM === OM;
+             break;
+           case "!=":
+             rM = iM !== OM
```

#### 34. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L281` → after: `L439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L439) · [Before (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L281)

```diff
-         return 0
+         return rM
```

#### 35. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L283-L284` → after: `L441-L485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L441-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L441-L485) · [Before (L283-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L283-L284)

```diff
-       matrixInterpolateFunction(GG, bG, ZG, SG) {
-         return zG.AllowMatrixDecomposeForInterpolation ? SG ? (wG.e.DecomposeLerpToRef(GG, bG, ZG, SG), SG) : wG.e.DecomposeLerp(GG, bG, ZG) : SG ? (wG.e.LerpToRef(GG, bG, ZG, SG), SG) : wG.e.Lerp(GG, bG, ZG)
+     }
+     var mM = iM(40990),
+       HM = iM(40981);
+     const hM = /defined\s*?\((.+?)\)/g,
+       JM = /defined\s*?\[(.+?)\]/g,
+       dM = /#include\s?<(.+)>(\((.*)\))*(\[(.*)\])*/g,
+       yM = /__decl__/,
+       lM = /light\{X\}.(\w*)/g,
+       EM = /\{X\}/g,
+       UM = [],
+       GM = /(#ifdef)|(#else)|(#elif)|(#endif)|(#ifndef)|(#if)/;
+ 
+     function CM(MM) {
+       MM.processor && MM.processor.initializeShaders && MM.processor.initializeShaders(MM.processingContext)
+     }
+ 
+ ... (29 more added lines; see GitHub link above)
```

#### 36. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L286-L294` → after: `L487-L536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L487-L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L487-L536) · [Before (L286-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L286-L294)

```diff
-       clone() {
-         let GG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         const bG = new zG(this.name, this.targetPropertyPath.join("."), this.framePerSecond, this.dataType, this.Dw);
-         if (bG.enableBlending = this.enableBlending, bG.blendingSpeed = this.blendingSpeed, this._keys && bG.setKeys(this._keys, !1, GG), this._ranges) {
-           bG._ranges = {};
-           for (const GG in this._ranges) {
-             const ZG = this._ranges[GG];
-             ZG && (bG._ranges[GG] = ZG.clone())
-           }
+     }
+ 
+     function wM(MM) {
+       const rM = /defined\((.+)\)/.exec(MM);
+       if (rM && rM.length) return new nM(rM[1].trim(), "!" === MM[0]);
+       const iM = ["==", "!=", ">=", "<=", "<", ">"];
+       let OM = "",
+         SM = 0;
+       for (OM of iM)
+         if (SM = MM.indexOf(OM), SM > -1) break;
+       if (-1 === SM) return new nM(MM);
+       const jM = MM.substring(0, SM).trim(),
+         aM = MM.substring(SM + OM.length).trim();
+       return new LM(jM, OM, aM)
+     }
+ 
+ ... (34 more added lines; see GitHub link above)
```

#### 37. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L298-L311` → after: `L539-L573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L539-L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L539-L573) · [Before (L298-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L298-L311)

```diff
-       setKeys(GG) {
-         let bG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-         if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) this._keys = GG;
-         else if (this._keys = GG.slice(0), bG)
-           for (let ZG = 0; ZG < this._keys.length; ZG++) {
-             const GG = this._keys[ZG];
-             this._keys[ZG] = {
-               frame: GG.frame,
-               value: GG.value.clone ? GG.value.clone() : GG.value,
-               inTangent: GG.inTangent && GG.inTangent.clone ? GG.inTangent.clone() : GG.inTangent,
-               outTangent: GG.outTangent && GG.outTangent.clone ? GG.outTangent.clone() : GG.outTangent,
-               interpolation: GG.interpolation,
-               lockedTangent: GG.lockedTangent,
-               easingFunction: GG.easingFunction
+     }
+ 
+     function uM(MM, rM, iM) {
+       for (; MM.canRead;) {
+         MM.lineIndex++;
+         const SM = MM.currentLine;
+         if (SM.indexOf("#") >= 0) {
+           const OM = GM.exec(SM);
+           if (OM && OM.length) {
+             switch (OM[0]) {
+               case "#ifdef": {
+                 const OM = new jM;
+                 rM.children.push(OM);
+                 const aM = tM(SM, 6);
+                 OM.children.push(aM), gM(MM, OM, aM, iM);
+                 break
+ ... (19 more added lines; see GitHub link above)
```

#### 38. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L347-L352` → after: `L578-L581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L578-L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L578-L581) · [Before (L347-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L347-L352)

```diff
-         GG.Bh = [];
-         for (const wG in this._ranges) {
-           const bG = this._ranges[wG];
-           if (!bG) continue;
-           const ZG = {};
-           ZG.name = wG, ZG.from = bG.from, ZG.to = bG.to, GG.Bh.push(ZG)
+         const aM = new OM;
+         if (aM.line = SM, rM.children.push(aM), "#" === SM[0] && "d" === SM[1]) {
+           const MM = SM.replace(";", "").split(" ");
+           aM.additionalDefineKey = MM[1], 3 === MM.length && (aM.additionalDefineValue = MM[2])
```

#### 39. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L356-L358` → after: `L584-L598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L584-L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L584-L598) · [Before (L356-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L356-L358)

```diff
-       static _UniversalLerp(GG, bG, ZG) {
-         const wG = GG.constructor;
-         return wG.Lerp ? wG.Lerp(GG, bG, ZG) : wG.Slerp ? wG.Slerp(GG, bG, ZG) : GG.toFixed ? GG * (1 - ZG) + ZG * bG : bG
+       return !1
+     }
+ 
+     function RM(MM, rM, iM, jM) {
+       const aM = new OM,
+         PM = new SM;
+       return PM.lineIndex = -1, PM.lines = MM.split("\n"), uM(PM, aM, jM), aM.process(rM, iM, jM)
+     }
+ 
+     function pM(MM, rM) {
+       const iM = MM.defines,
+         OM = {};
+       for (const SM of iM) {
+         const MM = SM.replace("#define", "").replace(";", "").trim().split(" ");
+         OM[MM[0]] = MM.length > 1 ? MM[1] : ""
```

#### 40. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L364-L440` → after: `L605-L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L605-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L605-L642) · [Before (L364-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L364-L440)

```diff
-       SG = "object" === typeof bG ? bG : {
-         referenceFrame: bG ?? 0,
-         range: ZG,
-         cloneOriginalAnimation: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-         clonedAnimationName: arguments.length > 4 ? arguments[4] : void 0
-       };
-       let LG = GG;
-       SG.cloneOriginalAnimation && (LG = GG.clone(), LG.name = SG.clonedAnimationName || LG.name);
-       const yG = LG.getKeys();
-       if (!yG.length) return LG;
-       const kG = SG.referenceFrame && SG.referenceFrame >= 0 ? SG.referenceFrame : 0;
-       let UG = 0;
-       const YG = yG[0];
-       let VG = yG.length - 1;
-       const pG = yG[VG],
-         fG = {
- ... (61 more removed lines; see GitHub link above)
+       for (UM.length = 0; null !== (OM = dM.exec(MM));) UM.push(OM);
+       let SM = [MM],
+         jM = !1;
+       for (const PM of UM) {
+         let MM = PM[1];
+         if (-1 !== MM.indexOf("__decl__") && (MM = MM.replace(yM, ""), rM.supportsUniformBuffers && (MM = MM.replace("Vertex", "Ubo").replace("Fragment", "Ubo")), MM += "Declaration"), !rM.includesShadersStore[MM]) {
+           const OM = rM.shadersRepository + "ShadersInclude/" + MM + ".fx";
+           return void sM.loadFile(OM, (OM => {
+             rM.includesShadersStore[MM] = OM, WM(SM.join(""), rM, iM)
+           }))
+         } {
+           let iM = rM.includesShadersStore[MM];
+           if (PM[2]) {
+             const MM = PM[3].split(",");
+             for (let rM = 0; rM < MM.length; rM += 2) {
+               const OM = new RegExp(MM[rM], "g"),
+ ... (22 more added lines; see GitHub link above)
```

#### 41. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L443` → after: `L645-L647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L645-L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L645-L647) · [Before (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L443)

```diff
-       return JG && LG.setKeys(JG, !0), LG
+       UM.length = 0;
+       const aM = SM.join("");
+       jM ? WM(aM.toString(), rM, iM) : iM(aM)
```

#### 42. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L446-L448` → after: `L666-L667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L666-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L666-L667) · [Before (L446-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L446-L448)

```diff
-     function oG(GG, bG, ZG, wG) {
-       const SG = new zG(GG + "Animation", GG, ZG, bG, zG.ANIMATIONLOOPMODE_CONSTANT);
-       return SG.setEasingFunction(wG), SG
+     function jM(MM, rM) {
+       return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + (rM ? rM + "\n" : "") + MM
```

#### 43. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L451-L453` → after: `L670-L673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L670-L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L670-L673) · [Before (L451-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L451-L453)

```diff
-     function XG(GG, bG, ZG, wG, SG, LG, yG, kG, UG, YG, VG) {
-       const pG = zG._PrepareAnimation(GG, ZG, wG, SG, LG, yG, kG, UG);
-       return pG ? (bG.Dv && (VG = bG.Dv()), VG ? VG.beginDirectAnimation(bG, [pG], 0, SG, pG.Dw !== zG.ANIMATIONLOOPMODE_CONSTANT, 1, YG) : null) : null
+     function aM(MM, rM, iM, jM, aM, PM, nM) {
+       const QM = nM || SM.loadFile;
+       if (!QM) throw (0, OM.n)("FileTools");
+       return QM(MM, rM, iM, jM, aM, PM)
```

#### 44. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L456-L459` → after: `L676-L681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L676-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L676-L681) · [Before (L456-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L456-L459)

```diff
-     function uG(GG, bG, ZG, wG, SG, LG, yG, kG, UG, YG, VG) {
-       const pG = zG._PrepareAnimation(GG, wG, SG, LG, yG, kG, UG, YG);
-       if (!pG) return null;
-       return bG.Dv().beginDirectHierarchyAnimation(bG, ZG, [pG], 0, LG, 1 === pG.Dw, 1, VG)
+     function PM(MM, rM, iM, OM) {
+       if (MM) return rM ? MM.IS_NDC_HALF_ZRANGE = "" : delete MM.IS_NDC_HALF_ZRANGE, iM ? MM.USE_REVERSE_DEPTHBUFFER = "" : delete MM.USE_REVERSE_DEPTHBUFFER, void(OM ? MM.USE_EXACT_SRGB_CONVERSIONS = "" : delete MM.USE_EXACT_SRGB_CONVERSIONS);
+       {
+         let MM = "";
+         return rM && (MM += "#define IS_NDC_HALF_ZRANGE"), iM && (MM && (MM += "\n"), MM += "#define USE_REVERSE_DEPTHBUFFER"), OM && (MM && (MM += "\n"), MM += "#define USE_EXACT_SRGB_CONVERSIONS"), MM
+       }
```

#### 45. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L462-L464` → after: `L684-L727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L684-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L684-L727) · [Before (L462-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L462-L464)

```diff
-     function iG(GG, bG, ZG, wG, SG, LG, yG, kG, UG, YG) {
-       const VG = zG._PrepareAnimation(GG, ZG, wG, SG, LG, yG, kG, UG);
-       return VG ? (bG.animations.push(VG), bG.Dv().beginAnimation(bG, 0, SG, 1 === VG.Dw, 1, YG)) : null
+     function nM(MM, rM) {
+       let iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+         OM = arguments.length > 3 ? arguments[3] : void 0;
+       switch (MM) {
+         case 3: {
+           const MM = new Int8Array(rM);
+           return OM && MM.set(new Int8Array(OM)), MM
+         }
+         case 0: {
+           const MM = new Uint8Array(rM);
+           return OM && MM.set(new Uint8Array(OM)), MM
+         }
+         case 4: {
+           const MM = "number" !== typeof rM ? new Int16Array(rM) : new Int16Array(iM ? rM / 2 : rM);
+           return OM && MM.set(new Int16Array(OM)), MM
+         }
+ ... (28 more added lines; see GitHub link above)
```

#### 46. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L467-L480` → after: `L739-L740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L739-L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L739-L740) · [Before (L467-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L467-L480)

```diff
-     function CG(GG, bG, ZG, wG, SG, LG, yG) {
-       let kG = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
-         UG = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
-         YG = arguments.length > 9 ? arguments[9] : void 0;
-       if (yG <= 0) return ZG[GG] = bG, kG && kG(), null;
-       const VG = SG * (yG / 1e3);
-       LG.setKeys(YG ?? [{
-         frame: 0,
-         value: ZG[GG].clone ? ZG[GG].clone() : ZG[GG]
-       }, {
-         frame: VG,
-         value: bG
-       }]), ZG.animations || (ZG.animations = []), ZG.animations.push(LG);
-       return wG.beginAnimation(ZG, 0, VG, !1, 1, kG ?? void 0, void 0, UG)
+     function SM(MM) {
+       if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !OM[MM]) return OM[MM] = !0, `${MM} needs to be imported before as it contains a side-effect required by your code.`
```

#### 47. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L484` → after: `L747-L754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L747-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L747-L754) · [Before (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L484)

```diff
-       VG.b.AppendSerializedAnimations(GG, bG)
+       let iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+       const OM = function() {
+         if ((iM || aM) && 0 === PM) {
+           const iM = `${MM}.${rM}`;
+           jM[iM] || (jM[iM] = !0, console.warn(`[Babylon.js] ${iM}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
+         }
+       };
+       return OM.__isSideEffectStub = !0, OM
```

#### 48. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L488-L524` → after: `L758-L773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L758-L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L758-L773) · [Before (L488-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L488-L524)

```diff
-       const bG = new zG(GG.name, GG.property, GG.framePerSecond, GG.dataType, GG.loopBehavior),
-         ZG = GG.dataType,
-         LG = [];
-       let yG, kG;
-       for (GG.enableBlending && (bG.enableBlending = GG.enableBlending), GG.blendingSpeed && (bG.blendingSpeed = GG.blendingSpeed), kG = 0; kG < GG.keys.length; kG++) {
-         const bG = GG.keys[kG];
-         let UG, YG, VG;
-         switch (ZG) {
-           case zG.ANIMATIONTYPE_FLOAT:
-             yG = bG.values[0], bG.values.length >= 2 && (UG = bG.values[1]), bG.values.length >= 3 && (YG = bG.values[2]), bG.values.length >= 4 && (VG = bG.values[3]);
-             break;
-           case zG.ANIMATIONTYPE_QUATERNION:
-             if (yG = wG.g.FromArray(bG.values), bG.values.length >= 8) {
-               const GG = wG.g.FromArray(bG.values.slice(4, 8));
-               GG.equals(wG.g.Zero()) || (UG = GG)
-             }
- ... (21 more removed lines; see GitHub link above)
+       return !!MM && !MM.__isSideEffectStub
+     }
+ 
+     function zM(MM, rM) {
+       return {
+         get() {},
+         set(MM) {
+           Object.defineProperty(this, rM, {
+             value: MM,
+             writable: !0,
+             configurable: !0,
+             enumerable: !0
+           })
+         },
+         configurable: !0,
+         enumerable: !0
```

#### 49. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L530-L547` → after: `L776-L779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L776-L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L776-L779) · [Before (L530-L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L530-L547)

```diff
-     async function IG(GG, bG) {
-       return await new Promise(((ZG, wG) => {
-         const SG = new YG.b;
-         SG.addEventListener("readystatechange", (() => {
-           if (4 == SG.readyState)
-             if (200 == SG.status) {
-               let bG = JSON.parse(SG.responseText);
-               if (bG.animations && (bG = bG.animations), bG.length) {
-                 const GG = [];
-                 for (const ZG of bG) GG.push(mG(ZG));
-                 ZG(GG)
-               } else {
-                 const wG = mG(bG);
-                 GG && (wG.name = GG), ZG(wG)
-               }
-             } else wG("Unable to load the animation")
- ... (2 more removed lines; see GitHub link above)
+   },
+   40972: (MM, rM, iM) => {
+     function OM() {
+       return "undefined" !== typeof window
```

#### 50. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L549-L571` → after: `L781-L783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L781-L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L781-L783) · [Before (L549-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L549-L571)

```diff
-     async function FG(GG) {
-       const bG = this?.SnippetUrl ?? zG.SnippetUrl;
-       return await new Promise(((ZG, wG) => {
-         const SG = new YG.b;
-         SG.addEventListener("readystatechange", (() => {
-           if (4 == SG.readyState)
-             if (200 == SG.status) {
-               const bG = JSON.parse(JSON.parse(SG.responseText).jsonPayload);
-               if (bG.animations) {
-                 const wG = JSON.parse(bG.animations),
-                   SG = [];
-                 for (const bG of wG.animations) {
-                   const ZG = mG(bG);
-                   ZG.snippetId = GG, SG.push(ZG)
-                 }
-                 ZG(SG)
- ... (7 more removed lines; see GitHub link above)
+ 
+     function SM() {
+       return "undefined" !== typeof navigator
```

#### 51. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L578` → after: `L787-L794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L787-L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L787-L794) · [Before (L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L578)

```diff
-       aG || (aG = !0, zG.Parse = mG, zG.ParseFromFileAsync = IG, zG.ParseFromSnippetAsync = FG, zG.CreateFromSnippetAsync = vG, zG.CreateAnimation = oG, zG.CreateAndStartAnimation = XG, zG.CreateAndStartHierarchyAnimation = uG, zG.CreateMergeAndStartAnimation = iG, zG.MakeAnimati … [truncated]
+       return "undefined" !== typeof document
+     }
+ 
+     function aM(MM) {
+       let rM = "",
+         iM = MM.firstChild;
+       for (; iM;) 3 === iM.nodeType && (rM += iM.textContent), iM = iM.nextSibling;
+       return rM
```

#### 52. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L581` → after: `L803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L803) · [Before (L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L581)

```diff
-   41493: (GG, bG, ZG) => {
+   41156: (MM, rM, iM) => {
```

#### 53. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L583` → after: `L805-L807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L805-L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L805-L807) · [Before (L583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L583)

```diff
-       c: () => wG
+       b: () => OM,
+       e: () => SM,
+       i: () => jM
```

#### 54. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L585` → after: `L809-L820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L809-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L809-L820) · [Before (L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L585)

```diff
-     class wG {
+     class OM extends Error {}
+     OM._setPrototypeOf = Object.setPrototypeOf || ((MM, rM) => (MM.__proto__ = rM, MM));
+     const SM = {
+       MeshInvalidPositionsError: 0,
+       UnsupportedTextureError: 1e3,
+       GLTFLoaderUnexpectedMagicError: 2e3,
+       SceneLoaderError: 3e3,
+       LoadFileError: 4e3,
+       RequestFileError: 4001,
+       ReadFileError: 4002
+     };
+     class jM extends OM {
```

#### 55. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L587-L590` → after: `L822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L822) · [Before (L587-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L587-L590)

```diff
-         this.name = GG, this.from = bG, this.to = ZG
-       }
-       clone() {
-         return new wG(this.name, this.from, this.to)
+         super(MM), this.errorCode = rM, this.innerError = iM, this.name = "RuntimeError", OM._setPrototypeOf(this, jM.prototype)
```

#### 56. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L594` → after: `L826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L826) · [Before (L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L594)

```diff
-   41552: (GG, bG, ZG) => {
+   41145: (MM, rM, iM) => {
```

#### 57. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L596-L597` → after: `L828-L837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L828-L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L828-L837) · [Before (L596-L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L596-L597)

```diff
-       b: () => wG.c,
-       c: () => wG.l
+       d: () => pM,
+       f: () => EM,
+       j: () => tM,
+       k: () => uM,
+       n: () => bM,
+       p: () => CM,
+       s: () => eM,
+       u: () => ZM,
+       w: () => wM,
+       x: () => UM
```

#### 58. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L599-L600` → after: `L839-L1239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L839-L1239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L839-L1239) · [Before (L599-L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L599-L600)

```diff
-     var wG = ZG(40524);
-     (0, wG.g)()
+     var OM = iM(41148),
+       SM = iM(40972),
+       jM = iM(38068);
+     class aM {}
+     aM.FilesToLoad = {};
+     var PM = iM(41156),
+       nM = iM(41160),
+       QM = iM(38064),
+       zM = iM(40981),
+       LM = iM(40998),
+       mM = iM(39711),
+       HM = iM(41003),
+       hM = iM(41167);
+     const JM = new RegExp(/^data:([^,]+\/[^,]+)?;base64,/i);
+     class dM extends PM.i {
+       constructor(MM, rM) {
+ ... (385 more added lines; see GitHub link above)
```

#### 59. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L602` → after: `L1241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR1241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L1241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L1241) · [Before (L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L602)

```diff
-   41527: (GG, bG, ZG) => {
+   41176: (MM, rM, iM) => {
```

#### 60. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L604` → after: `L1243-L1245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR1243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L1243-L1245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L1243-L1245) · [Before (L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L604)

```diff
-       d: () => wG.d
+       c: () => PM,
+       e: () => jM,
+       g: () => aM
```

#### 61. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L606-L607` → after: `L1247-L1298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR1247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L1247-L1298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L1247-L1298) · [Before (L606-L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L606-L607)

```diff
-     var wG = ZG(40857);
-     (0, wG.b)()
+     let OM = null;
+ 
+     function SM() {
+       if (OM) return OM;
+       const MM = new ArrayBuffer(4),
+         rM = new Float32Array(MM),
+         iM = new Uint32Array(MM),
+         SM = new Uint32Array(512),
+         jM = new Uint32Array(512);
+       for (let OM = 0; OM < 256; ++OM) {
+         const MM = OM - 127;
+         MM < -24 ? (SM[OM] = 0, SM[256 | OM] = 32768, jM[OM] = 24, jM[256 | OM] = 24) : MM < -14 ? (SM[OM] = 1024 >> -MM - 14, SM[256 | OM] = 1024 >> -MM - 14 | 32768, jM[OM] = -MM - 1, jM[256 | OM] = -MM - 1) : MM <= 15 ? (SM[OM] = MM + 15 << 10, SM[256 | OM] = MM + 15 << 10 | 3 … [truncated]
+       }
+       const aM = new Uint32Array(2048),
+         PM = new Uint32Array(64),
+         nM = new Uint32Array(64);
+ ... (36 more added lines; see GitHub link above)
```

#### 62. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L609` → after: `L1300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR1300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L1300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L1300) · [Before (L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L609)

```diff
-   41502: (GG, bG, ZG) => {
+   41160: (MM, rM, iM) => {
```

#### 63. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L611` → after: `L1302-L1304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR1302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L1302-L1304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L1302-L1304) · [Before (L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L611)

```diff
-       e: () => wG.e
+       d: () => jM,
+       f: () => SM,
+       j: () => OM
```

#### 64. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L613-L614` → after: `L1306-L1323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR1306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L1306-L1323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L1306-L1323) · [Before (L613-L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L613-L614)

```diff
-     var wG = ZG(40844);
-     (0, wG.h)()
+     const OM = MM => {
+         const rM = ArrayBuffer.isView(MM) ? new Uint8Array(MM.buffer, MM.byteOffset, MM.byteLength) : new Uint8Array(MM);
+         return "function" === typeof rM.toBase64 ? rM.toBase64() : function(MM) {
+           const rM = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
+           let iM, OM, SM, jM, aM, PM, nM, QM = "",
+             zM = 0;
+           for (; zM < MM.length;) iM = MM[zM++], OM = zM < MM.length ? MM[zM++] : Number.NaN, SM = zM < MM.length ? MM[zM++] : Number.NaN, jM = iM >> 2, aM = (3 & iM) << 4 | OM >> 4, PM = (15 & OM) << 2 | SM >> 6, nM = 63 & SM, isNaN(OM) ? PM = nM = 64 : isNaN(SM) && (nM = 64), Q … [truncated]
+           return QM
+         }(rM)
+       },
+       SM = MM => atob(MM),
+       jM = MM => "function" === typeof Uint8Array.fromBase64 ? Uint8Array.fromBase64(MM).buffer : function(MM) {
+         const rM = SM(MM),
+           iM = rM.length,
+           OM = new Uint8Array(new ArrayBuffer(iM));
+         for (let SM = 0; SM < iM; SM++) OM[SM] = rM.charCodeAt(SM);
+ ... (2 more added lines; see GitHub link above)
```

#### 65. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L616` → after: `L1325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR1325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L1325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L1325) · [Before (L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L616)

```diff
-   41560: (GG, bG, ZG) => {
+   41003: (MM, rM, iM) => {
```

#### 66. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L618` → after: `L1327-L1328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR1327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L1327-L1328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L1327-L1328) · [Before (L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L618)

```diff
-       d: () => wG.c
+       c: () => SM,
+       d: () => aM
```

#### 67. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L620-L621` → after: `L1330-L1358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR1330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L1330-L1358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L1330-L1358) · [Before (L620-L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L620-L621)

```diff
-     var wG = ZG(40784);
-     (0, wG.g)()
+     let OM = [];
+     class SM {
+       static SetImmediate(MM) {
+         0 === OM.length && setTimeout((() => {
+           const MM = OM;
+           OM = [];
+           for (const rM of MM) rM()
+         }), 1), OM.push(MM)
+       }
+     }
+ 
+     function jM(MM, rM, iM) {
+       try {
+         if (MM()) return rM(), !0
+       } catch (OM) {
+         return iM?.(OM), !0
+ ... (13 more added lines; see GitHub link above)
```

#### 68. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L623` → after: `L1360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR1360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L1360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L1360) · [Before (L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L623)

```diff
-   41498: (GG, bG, ZG) => {
+   41148: (MM, rM, iM) => {
```

#### 69. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L625` → after: `L1362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR1362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L1362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L1362) · [Before (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L625)

```diff
-       d: () => wG.d
+       e: () => OM
```

#### 70. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L627-L628` → after: `L1364-L1508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR1364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L1364-L1508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/279.js#L1364-L1508) · [Before (L627-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/279.js#L627-L628)

```diff
-     var wG = ZG(40820);
-     (0, wG.b)()
+     class OM {
+       constructor() {
+         this._xhr = "undefined" !== typeof _native && _native.XMLHttpRequest ? new _native.XMLHttpRequest : new XMLHttpRequest, this._requestURL = ""
+       }
+       static get IsCustomRequestAvailable() {
+         return Object.keys(OM.CustomRequestHeaders).length > 0 || OM.CustomRequestModifiers.length > 0
+       }
+       static _CleanUrl(MM) {
+         return MM = (MM = MM.replace("file:http:", "http:")).replace("file:https:", "https:")
+       }
+       static _ShouldSkipRequestModifications(MM) {
+         return OM.SkipRequestModificationForBabylonCDN && (MM.includes("preview.babylonjs.com") || MM.includes("cdn.babylonjs.com"))
+       }
+       static _CollectCustomizations(MM) {
+         const rM = {
+           ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
+ ... (129 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/280.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/280.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db)

#### 1. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4-L5` → after: `L4-L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/280.js#L4-L613) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/280.js#L4-L5)

```diff
-   41581: GG => {
-     GG.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAKGSURBVHic7Zk9bNNAFMf/MZFIwrUBCVVILF26tXNnKrEwIHViYSxLkNgIHxVCCFGgK6KwdOvClK1LRTuXBaF2i5BYkBBDoOGSGAkcBucF+2zHcXzGMX6/xbnn9y7n5/fu3 … [truncated]
+   41210: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => jM
+     });
+     var OM = iM(39711),
+       SM = iM(38085);
+     class jM {
+       static Instantiate(MM) {
+         if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[MM]) return this.RegisteredExternalClasses[MM];
+         const rM = (0, SM.b)(MM);
+         if (rM) return rM;
+         OM.e.Warn(MM + " not found, you may have missed an import.");
+         const iM = MM.split(".");
+         let jM = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
+         for (let OM = 0, SM = iM.length; OM < SM; OM++) jM = jM[iM[OM]];
+         return "function" !== typeof jM ? null : jM
+ ... (594 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/281.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/281.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696)

#### 1. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4-L5` → after: `L4-L1290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4-L1290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/281.js#L4-L1290) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/281.js#L4-L5)

```diff
-   41589: GG => {
-     GG.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7dpBDsFAFMbxjnQjqUTcxgHs7DmCvQv0ArbO4AB2DuA2ItHEklXFotR4U9/U/H/LZjrz8nmhXuoyo8NufbPcfzpfTecvVltnuX9gOv0P5KE2KoqR1/qquoQ62 … [truncated]
+   41520: (MM, rM, iM) => {
+     iM.d(rM, {
+       c: () => OM
+     });
+     let OM = !1
+   },
+   41091: (MM, rM, iM) => {
+     iM.d(rM, {
+       c: () => hM
+     });
+     var OM = iM(41099),
+       SM = iM(41105),
+       jM = iM(38068),
+       aM = iM(38040),
+       PM = iM(38064),
+       nM = iM(38885),
+ ... (1271 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/282.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/282.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8)

#### 1. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L4-L5` → after: `L4-L620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L4-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/282.js#L4-L620) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/282.js#L4-L5)

```diff
-   41597: GG => {
-     GG.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEMSURBVHic7doxDgFBFMbxHZaEKDXOoHUFB3BSB1DrtCoH0Eg0QkKEakWxrPFmfbPm/ys3szMvnxfWy7rMaDoe3iz3H89X0/nLzd5Z7m+ZTv8DeaiNBr2O1/rD6RLqaBM6I … [truncated]
+   41354: (MM, rM, iM) => {
+     iM.d(rM, {
+       c: () => aM,
+       e: () => PM
+     });
+     var OM = iM(39711),
+       SM = iM(41121),
+       jM = iM(41323),
+       aM = {};
+     class PM {
+       constructor(MM) {
+         this.attachedToElement = !1, this.attached = {}, this.camera = MM, this.checkInputs = () => {}
+       }
+       add(MM) {
+         const rM = MM.getSimpleName();
+         this.attached[rM] ? OM.e.Warn("camera input of type " + rM + " already exists on camera") : (this.attached[rM] = MM, MM.camera = this.camera, MM.checkInputs && (this.checkInputs = this._addCheckInputs(MM.checkInputs.bind(MM))), this.attachedToElement && MM.attachControl(t … [truncated]
+ ... (601 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/283.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/283.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e)

#### 1. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L4-L5` → after: `L4-L1033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L4-L1033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/283.js#L4-L1033) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/283.js#L4-L5)

```diff
-   41602: GG => {
-     GG.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7dpBDsFAFMbxjnQljcSGxAXsHcDeAcQ5HMsJ7B3AMSRsJNLYsqpYlBpv6pua/2/ZTGdePi/US11mdNrsbpb7z4ej6fzpeuks9/dMp/+BPNRG/UHhtf56KUMdb … [truncated]
+   41313: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => tM
+     });
+     var OM = iM(41099),
+       SM = iM(41105),
+       jM = iM(38040),
+       aM = iM(41320),
+       PM = iM(41354),
+       nM = iM(41287),
+       QM = iM(41205);
+     let zM = (() => {
+       var MM;
+       let rM, iM, aM, PM, zM, LM, mM, HM, hM, JM, dM, yM = [],
+         lM = [],
+         EM = [],
+ ... (1014 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/284.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/284.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887)

#### 1. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L4-L5` → after: `L4-L880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L4-L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/284.js#L4-L880) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/284.js#L4-L5)

```diff
-   41611: GG => {
-     GG.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAIFSURBVHic7ZqxTsMwEIYvKB0qWgkydOlD8QJsDIihsMDUuRsLYkAMSAyIjYFXKluHgMjgSqkE01Wpm4vj2GkJ/r+lSez/0ub+XGLXETny/Pr2U9xXSlX27/f7G/vc36ST4 … [truncated]
+   41366: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => mM
+     });
+     var OM = iM(41099),
+       SM = iM(41105),
+       jM = iM(38040),
+       aM = iM(38173),
+       PM = iM(41328),
+       nM = iM(41240),
+       QM = iM(38085),
+       zM = iM(41309),
+       LM = iM(41121);
+     let mM = (() => {
+       var MM, rM;
+       let iM, mM, HM, hM, JM, dM, yM, lM, EM, UM, GM, CM, eM, bM = PM.d,
+ ... (861 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/285.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/285.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2)

#### 1. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L4-L5` → after: `L4-L2236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L4-L2236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/285.js#L4-L2236) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/285.js#L4-L5)

```diff
-   41614: GG => {
-     GG.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEISURBVHic7dqxEsFAFIXhrMkM4tXUGr3WjFqpVir0GrXOcwkqqhhFiHU3zsb+X5nZ7N457hB34jKj7WJ8s9x/vlxN5883R2e5v2c6/Q/koTYaFYXX+lNZhjrahA4IvWHTJ … [truncated]
+   42190: (MM, rM, iM) => {
+     iM.d(rM, {
+       c: () => NM
+     });
+     var OM = iM(41099),
+       SM = iM(41105),
+       jM = iM(38068),
+       aM = iM(38040),
+       PM = iM(38074),
+       nM = iM(41328),
+       QM = iM(41502),
+       zM = iM(41283),
+       LM = iM(41009),
+       mM = iM(38044);
+     class HM {
+       constructor() {
+ ... (2217 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/286.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/286.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469)

#### 1. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L4-L5` → after: `L4-L2730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L4-L2730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/286.js#L4-L2730) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/286.js#L4-L5)

```diff
-   41621: GG => {
-     GG.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEWSURBVHic7dohEoJAFMZxcCgSLHIOq8Vs8QSewOxJzJ7AO5gtVs+hxYBREwzjMDDLW/zA/f/iusCbz6fCG+PI6HrevS3H3x9P0/U321NsOX5iuvofSHydaJqmTvtfee7r0 … [truncated]
+   41491: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => SM
+     });
+     var OM = iM(41109);
+ 
+     function SM(MM) {
+       return class extends MM {
+         constructor() {
+           super(...arguments);
+           const MM = new.target;
+           if (!MM[Symbol.metadata]) {
+             const rM = Object.getPrototypeOf(MM)?.[Symbol.metadata];
+             MM[Symbol.metadata] = rM ? Object.create(rM) : {}
+           }
+           const rM = (0, OM.b)(MM[Symbol.metadata]);
+ ... (2711 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/287.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/287.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1)

#### 1. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4-L5` → after: `L4-L2648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4-L2648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/287.js#L4-L2648) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/287.js#L4-L5)

```diff
-   41625: GG => {
-     GG.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEQSURBVHic7dpBDsFAFMbxjnRBIiSO4QZ2tuIgDuAEDuAATmJrxwkcQ0Ik7FhVLEqNN/VNzf+3bKYzL58X6qUuM9ouxzfL/YfT1XT+dLFzlvtbptP/QB5qo36347X+eL6EO … [truncated]
+   41408: (MM, rM, iM) => {
+     iM.d(rM, {
+       c: () => OM
+     });
+     class OM {
+       constructor(MM, rM, iM) {
+         this.bu = MM, this.bv = rM, this.distance = iM, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
+       }
+     }
+   },
+   41412: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => aM
+     });
+     var OM = iM(38048),
+       SM = iM(38040),
+ ... (2629 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/288.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/288.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1)

#### 1. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L4-L5` → after: `L4-L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L4-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/288.js#L4-L365) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/288.js#L4-L5)

```diff
-   41627: GG => {
-     GG.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEHSURBVHic7dqxEsFAFIXhrEkjGt5Nq9bSKhUKDa1aq/dYNKKkilGEWHfjbOz/lZnN7p3jDnEnLjParMY3y/2n88V0/nJ9dJb7e6bT/0AeaqOi6HutL8trqKNN6IDQGzZ9s … [truncated]
+   44241: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => OM
+     });
+     class OM {}
+     OM.AUTOSAMPLERSUFFIX = "Sampler", OM.DISABLEUA = "#define DISABLE_UNIFORMITY_ANALYSIS", OM.ALPHA_DISABLE = 0, OM.ALPHA_ADD = 1, OM.ALPHA_COMBINE = 2, OM.ALPHA_SUBTRACT = 3, OM.ALPHA_MULTIPLY = 4, OM.ALPHA_MAXIMIZED = 5, OM.ALPHA_ONEONE = 6, OM.ALPHA_PREMULTIPLIED = 7, OM.ALPH … [truncated]
+   },
+   44229: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => nM
+     });
+     var OM = iM(41099),
+       SM = iM(41105),
+       jM = iM(38040),
+       aM = iM(41366),
+       PM = iM(41337);
+ ... (346 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/289.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/289.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848)

#### 1. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L4-L5` → after: `L4-L569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L4-L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/289.js#L4-L569) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/289.js#L4-L5)

```diff
-   41635: GG => {
-     GG.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7do9EsFAGMbxrEnjY3Quo1WrncIBnMABXIJardDonUNnfJRUMYoQ6914Nvb/KzOb3Xce7xDvxGVG0/HwZrn/cDybzl9u985yf8t0+h/IQ23U67S91p8u11BHm … [truncated]
+   41556: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => eM,
+       f: () => GM,
+       g: () => EM,
+       j: () => UM,
+       m: () => lM,
+       n: () => yM
+     });
+     var OM = iM(41121),
+       SM = iM(41196),
+       jM = iM(38040),
+       aM = iM(41250),
+       PM = iM(41560),
+       nM = iM(41447),
+       QM = iM(41148),
+ ... (550 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/290.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/290.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b)

#### 1. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L4-L5` → after: `L4-L2446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L4-L2446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/290.js#L4-L2446) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/290.js#L4-L5)

```diff
-   41643: GG => {
-     GG.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEISURBVHic7dqxEsFAFIXhrElDFB5OSavRewSFXqOlVOi8lkIoqWIUIdbdOBv7f2Vms3vnuEPcicuMVpPxzXL/6Vyazl8ejs5yf890+h/IQ21UDPpe68vLNdTRJnRA6A2bP … [truncated]
+   41573: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       default: () => yi
+     });
+     var OM = iM(44),
+       SM = iM(1116),
+       jM = iM.n(SM);
+     const aM = ["forward", "backward", "left", "right", "jump", "sprint", "crouch", "primary", "secondary", "middle"],
+       PM = 3e3;
+ 
+     function nM(MM) {
+       return MM.down && MM.inPlay && !MM.bound
+     }
+ 
+     function QM(MM, rM) {
+       let iM = 0,
+ ... (2427 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/291.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/291.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4)

#### 1. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L4-L5` → after: `L5-L11248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L5-L11248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/291.js#L5-L11248) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/291.js#L4-L5)

```diff
-   41650: GG => {
-     GG.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAEACAYAAAADRnAGAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAPVSURBVHic7dxPbhMxGIdhB03aRSXaHafgAmwQC4TEohI34BRIPQESl0Fi20XVTS/ADThBi1QCnZHKAiwl7njGY3v8+c/77BJsx5n57GZI5rdRgd69P3/cf7w9Op5s3z/8O … [truncated]
+   41580: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => Ra,
+       g: () => pa,
+       i: () => zn
+     });
+     var OM, SM = Object.defineProperty,
+       jM = (MM, rM, iM) => ((MM, rM, iM) => rM in MM ? SM(MM, rM, {
+         enumerable: !0,
+         configurable: !0,
+         writable: !0,
+         value: iM
+       }) : MM[rM] = iM)(MM, "symbol" !== typeof rM ? rM + "" : rM, iM),
+       aM = Object.defineProperty,
+       PM = (MM, rM, iM) => ((MM, rM, iM) => rM in MM ? aM(MM, rM, {
+         enumerable: !0,
+ ... (11228 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/292.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/292.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76)

#### 1. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L4-L5` → after: `L5-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L5-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/292.js#L5-L27) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/292.js#L4-L5)

```diff
-   41655: GG => {
-     GG.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAKpSURBVHic7Zq/ThVBFMa/JXNBFAiVISEhSsM2WhFewADREAMkFEYSX4DCjvgExs4XoNBgKyUF8SUgBLWxkcTCRMMFLty78VrNze5hZ3Z2Z+7dXeb8utmZMzM78805Z/8Es … [truncated]
+   41593: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       FirebaseError: () => OM.d,
+       SDK_VERSION: () => OM.g,
+       _DEFAULT_ENTRY_NAME: () => OM.j,
+       MOM: () => OM.l,
+       _addOrOverwriteComponent: () => OM.o,
+       _apps: () => OM.r,
+       _clearComponents: () => OM.t,
+       _components: () => OM.w,
+       _getProvider: () => OM.x,
+       _registerComponent: () => OM.z,
+       _removeServiceInstance: () => OM.A,
+       deleteApp: () => OM.B,
+       getApp: () => OM.G,
+       getApps: () => OM.F,
+ ... (7 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/293.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/293.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663)

#### 1. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L4-L5` → after: `L5-L1233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L5-L1233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/293.js#L5-L1233) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/293.js#L4-L5)

```diff
-   41662: GG => {
-     GG.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEKSURBVHic7doxDoJAEIVh1hBjY/BsxsrOI3ADLmA8gp2VsfJgEhtjoxXGAsV1Ft/i/l9Jlt3Jc6I4wWVG22pxs9x/Ol9M55fro7PcPzKd/gfyUBsVxdhrfV1fQx1tQgeE3 … [truncated]
+   41611: (MM, rM, iM) => {
+     iM.d(rM, {
+       $: () => JM,
+       C: () => tM,
+       D: () => pM,
+       G: () => LM,
+       H: () => zM,
+       L: () => mM,
+       N: () => NM,
+       P: () => hM,
+       T: () => dM,
+       U: () => wM,
+       V: () => lM,
+       X: () => EM,
+       db: () => yM,
+       e: () => HM,
+ ... (1213 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/294.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/294.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b)

#### 1. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L4-L5` → after: `L5-L1039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L5-L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/294.js#L5-L1039) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/294.js#L4-L5)

```diff
-   41669: GG => {
-     GG.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAELSURBVHic7dqxEsFAFIXhjcmko6BTeSKlSucBVB5Hp1J6IpUKBV0aqhhFiHU3zsb+X5nZ7N457hB3kjmj8WZ9s9xfns6m84/LVWa5v2c6/Q/koTYqBn2v9eXlGupoEzog9 … [truncated]
+   41619: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       getAnalytics: () => Xr,
+       getGoogleAnalyticsClientId: () => Tr,
+       initializeAnalytics: () => Ir,
+       isSupported: () => Kr,
+       logEvent: () => ii,
+       setAnalyticsCollectionEnabled: () => Mi,
+       setConsent: () => Oi,
+       setCurrentScreen: () => qr,
+       setDefaultEventParameters: () => ri,
+       setUserId: () => Vr,
+       setUserProperties: () => cr,
+       settings: () => Fr
+     });
+     var OM = iM(41598),
+ ... (1019 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/295.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/295.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617)

#### 1. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L4-L9` → after: `L5-L4026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L5-L4026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/295.js#L5-L4026) · [Before (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/295.js#L4-L9)

```diff
-   41678: GG => {
-     GG.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAIOSURBVHic7ZoxSwMxFIDfFRGVKgVxcpJDnK6Dg/9AXFwqdFKqk3UUl9JJnMTNsXYqopNDZ/EfODjYSVpxEoQOHlraUsFzsLFeendtLrlLr3nfEnp5Ly+XvPdySaoBJ+W8Y … [truncated]
-   }
- };
- Object.freeze(modules);
- for (const GG in modules) Object.freeze(modules[GG]);
+     41628: (MM, rM, iM) => {
+         iM.r(rM), iM.d(rM, {
+           ActionCodeOperation: () => mM,
+           ActionCodeURL: () => Tr,
+           AuthCredential: () => fr,
+           AuthErrorCodes: () => yM,
+           EmailAuthCredential: () => Br,
+           EmailAuthProvider: () => cr,
+           FacebookAuthProvider: () => Oi,
+           FactorId: () => nM,
+           GithubAuthProvider: () => ji,
+           GoogleAuthProvider: () => Si,
+           OAuthCredential: () => Ir,
+           OAuthProvider: () => ii,
+           OperationType: () => LM,
+           PhoneAuthCredential: () => qr,
+ ... (4006 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/296.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/296.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486)

#### 1. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L4-L6` → after: `L4-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L4-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/296.js#L4-L142) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/296.js#L4-L6)

```diff
-   41710: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       CharacterPreview: () => pG
+   41669: (MM, rM, iM) => {
+     iM.d(rM, {
+       $: () => Tr,
+       $b: () => jr,
+       $d: () => GM,
+       $f: () => di,
+       A: () => mM,
+       Ae: () => Ii,
+       Af: () => OO,
+       Bb: () => Pr,
+       Bc: () => Qr,
+       Be: () => ki,
+       Cd: () => zM,
+       E: () => Sr,
+       Ed: () => dr,
+       Ee: () => oi,
+ ... (123 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L8-L152` → after: `L144-L1384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L144-L1384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/296.js#L144-L1384) · [Before (L8-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/296.js#L8-L152)

```diff
-     var wG = ZG(51),
-       SG = ZG(2732),
-       LG = ZG(1198),
-       yG = ZG(2537),
-       kG = ZG(34515),
-       UG = ZG(3625),
-       YG = ZG(1067);
-     const VG = .6 * Math.PI,
-       pG = (0, wG.memo)((0, wG.forwardRef)((function(GG, bG) {
-         let {
-           onReady: ZG,
-           onDrawn: pG,
-           owner: fG = "other",
-           framing: QG = "player",
-           forcedCosmetics: KG,
-           Ak: hG,
- ... (129 more removed lines; see GitHub link above)
+     const OM = -2147483648,
+       SM = 12,
+       jM = 12,
+       aM = 4095,
+       PM = {
+         Lifeform: 1,
+         Throwable: 2,
+         Mesh: 3,
+         Audio: 4,
+         Item: 5
+       },
+       nM = {
+         Alive: 1,
+         Crouching: 2,
+         OnGround: 4,
+         InFluid: 8,
+ ... (1225 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/297.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/297.js` (53 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3)

#### 1. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L4-L6` → after: `L4-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/297.js#L4-L9) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/297.js#L4-L6)

```diff
-   41715: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       default: () => Tb
+   44259: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => dM,
+       e: () => PM,
+       h: () => aM,
+       i: () => QM
```

#### 2. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L8-L66` → after: `L11-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L11-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/297.js#L11-L24) · [Before (L8-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/297.js#L8-L66)

```diff
-     var wG = ZG(41721),
-       SG = ZG(41775),
-       LG = ZG(41777),
-       yG = ZG(51),
-       kG = ZG(59),
-       UG = ZG(41793),
-       YG = ZG(41795),
-       VG = ZG(4779),
-       pG = ZG(41801),
-       fG = ZG(1876),
-       QG = ZG(41805),
-       KG = ZG(41820),
-       hG = ZG.n(KG),
-       dG = ZG(41784),
-       JG = ZG(41787),
-       rG = ZG(1302),
- ... (43 more removed lines; see GitHub link above)
+     var OM = iM(38167),
+       SM = iM(39748),
+       jM = iM(39741);
+ 
+     function aM(MM, rM, iM, OM) {
+       const SM = jM.z;
+       rM.fill(0), MM.gravity.toArray(rM, SM.gravity), MM.colorDead.toArray(rM, SM.colorDead), iM[SM.ramp] = MM.useRampGradients ? 1 : 0;
+       const aM = MM.getColorGradients(),
+         PM = mM(MM, aM, "colour", OM);
+       iM[SM.colorCount] = PM;
+       for (let jM = 0; jM < PM; jM++) {
+         var nM;
+         const MM = aM[HM(aM, jM)];
+         rM[SM.colorPositions + jM] = MM.gradient, MM.color1.toArray(rM, SM.color1 + 4 * jM), (null !== (nM = MM.color2) && void 0 !== nM ? nM : MM.color1).toArray(rM, SM.color2 + 4 * jM)
```

#### 3. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L68-L69` → after: `L26-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L26-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/297.js#L26-L39) · [Before (L68-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/297.js#L68-L69)

```diff
-       ignoreEvent() {
-         return !0
+       const QM = MM.getVelocityGradients(),
+         zM = mM(MM, QM, "dd", OM);
+       iM[SM.velocityCount] = zM;
+       for (let jM = 0; jM < zM; jM++) lM(rM, SM.dd + 4 * jM, QM[HM(QM, jM)]);
+       const LM = MM.useRampGradients ? MM.getColorRemapGradients() : null,
+         hM = mM(MM, LM, "colour remap", OM);
+       iM[SM.remapCount] = hM;
+       for (let jM = 0; jM < hM; jM++) lM(rM, SM.remap + 4 * jM, LM[HM(LM, jM)])
+     }
+ 
+     function PM() {
+       return {
+         key: [],
+         texels: new Uint8Array(4 * jM.o)
```

#### 4. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L74-L97` → after: `L45-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L45-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/297.js#L45-L57) · [Before (L74-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/297.js#L74-L97)

```diff
-       const ZG = [],
-         wG = [];
-       for (const [, yG] of GG) {
-         const GG = bG - yG.lastMoved < qG;
-         if (ZG.push({
-             pos: yG.head,
-             decoration: IG.c.widget({
-               widget: new RG(yG.colour, yG.playerName, GG),
-               side: 1
-             })
-           }), yG.anchor !== yG.head) {
-           const GG = Math.min(yG.anchor, yG.head),
-             bG = Math.max(yG.anchor, yG.head);
-           wG.push({
-             from: GG,
-             to: bG,
- ... (8 more removed lines; see GitHub link above)
+       return zM(MM, nM), !yM(nM, rM.key) && (rM.key.length = 0, rM.key.push(...nM), rM.key.length > 0 && function(MM, rM) {
+         for (let iM = 0; iM < jM.o; iM++) SM.i.GetCurrentGradient(iM / jM.o, MM, ((MM, rM, iM) => {
+           OM.Color3.LerpToRef(MM.color, rM.color, iM, LM)
+         })), rM[4 * iM] = 255 * LM.r, rM[4 * iM + 1] = 255 * LM.g, rM[4 * iM + 2] = 255 * LM.b, rM[4 * iM + 3] = 255
+       }(MM.getRampGradients(), rM.texels), !0)
+     }
+ 
+     function zM(MM, rM) {
+       rM.length = 0;
+       const iM = MM.useRampGradients ? MM.getRampGradients() : null;
+       if (null !== iM && void 0 !== iM && iM.length) {
+         rM.push(iM.length);
+         for (const MM of iM) rM.push(MM.gradient, MM.color.r, MM.color.g, MM.color.b)
```

#### 5. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L99-L172` → after: `L59-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L59-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/297.js#L59-L60) · [Before (L99-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/297.js#L99-L172)

```diff
-       const SG = new mG.v,
-         LG = [];
-       for (const yG of ZG) LG.push({
-         bias: 1,
-         deco: yG.decoration,
-         from: yG.pos,
-         to: yG.pos
-       });
-       for (const yG of wG) LG.push({
-         bias: 0,
-         deco: yG.decoration,
-         from: yG.from,
-         to: yG.to
-       });
-       LG.sort(((GG, bG) => GG.from - bG.from || GG.deco.startSide - bG.deco.startSide || GG.bias - bG.bias));
-       for (const yG of LG) SG.add(yG.from, yG.to, yG.deco);
- ... (58 more removed lines; see GitHub link above)
+     }
+     const LM = new OM.Color3;
```

#### 6. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L174-L175` → after: `L62-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L62-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/297.js#L62-L63) · [Before (L174-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/297.js#L174-L175)

```diff
-     function BG(GG) {
-       return GG.field(OG)
+     function mM(MM, rM, iM, OM) {
+       return rM ? rM.length > jM.d ? (OM(`particleStops:${iM}`, `GPU particles use the first 2 and last ${jM.d-2} of more than ${jM.d} ${iM} gradient stops (${MM.name})`), jM.d) : rM.length : 0
```

#### 7. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L180-L223` → after: `L67-L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L67-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/297.js#L67-L129) · [Before (L180-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/297.js#L180-L223)

```diff
-       const ZG = (0, yG.useRef)(null);
-       (0, yG.useEffect)((() => {
-         var GG;
-         (null === (GG = ZG.current) || void 0 === GG ? void 0 : GG.path) !== bG && (ZG.current = null)
-       }), [bG]);
-       const wG = GG => {
-         var wG;
-         const SG = ZG.current;
-         if (null === GG || void 0 === GG || !GG.dom.isConnected || !SG || SG.path !== bG) return;
-         ZG.current = null;
-         const {
-           vQ: yG
-         } = SG;
-         if (yG && null !== yG.text && performance.now() - yG.at < Gb) {
-           const bG = function(GG, bG) {
-             if (GG === bG) return null;
- ... (28 more removed lines; see GitHub link above)
+       return rM < 2 || MM.length <= jM.d ? rM : MM.length - jM.d + rM
+     }
+     const hM = new Float32Array(jM.s),
+       JM = new Uint32Array(hM.buffer);
+ 
+     function dM(MM, rM, iM) {
+       return aM(MM, hM, JM, iM), rM && yM(JM, rM) ? null : JM.slice()
+     }
+ 
+     function yM(MM, rM) {
+       if (MM.length !== rM.length) return !1;
+       for (let iM = 0; iM < MM.length; iM++)
+         if (MM[iM] !== rM[iM]) return !1;
+       return !0
+     }
+ 
+ ... (47 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L225-L245` → after: `L131-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L131-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/297.js#L131-L180) · [Before (L225-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/297.js#L225-L245)

```diff
-       return (0, uG.g)("CodeEditorGoToLine", (bG => {
-         ZG.current = bG, wG(GG.current)
-       })), (0, uG.g)("CodeEditorKeepEdits", (() => {
-         const wG = GG.current;
-         if (null === wG || !wG.dom.isConnected || null === bG) return;
-         const {
-           doc: SG,
-           selection: LG
-         } = wG.state, {
-           head: yG
-         } = LG.main, kG = SG.lineAt(yG), UG = {
-           text: (0, WG.k)(wG.state).length > 0 ? SG.toString() : null,
-           at: performance.now(),
-           focused: wG.hasFocus,
-           placed: BG(wG.state)
-         };
- ... (5 more removed lines; see GitHub link above)
+       return PM.push(QM), QM.built.catch((() => {
+         PM.splice(PM.indexOf(QM), 1)
+       })), QM.built
+     }
+   },
+   44250: (MM, rM, iM) => {
+     function OM() {
+       let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
+       const rM = new Set;
+       return (iM, OM) => {
+         rM.has(iM) || (rM.add(iM), console.warn(MM + OM))
+       }
+     }
+     iM.d(rM, {
+       b: () => OM
+     })
+ ... (34 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L247-L250` → after: `L182-L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L182-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/297.js#L182-L184) · [Before (L247-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/297.js#L247-L250)

```diff
-       })), GG => {
-         var SG;
-         const LG = ZG.current;
-         !1 === (null === LG || void 0 === LG || null === (SG = LG.vQ) || void 0 === SG ? void 0 : SG.focused) && LG.path === bG || GG.focus(), wG(GG)
+       }
+       getClassName() {
+         return "LinesMesh"
```

#### 10. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L253-L254` → after: `L187-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L187-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/297.js#L187-L194) · [Before (L253-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/297.js#L253-L254)

```diff
-     var Zb = ZG(4387),
-       wb = ZG(1151);
+     const QM = ["VERTEXCOLOR", "VERTEXALPHA", "INSTANCES", "THIN_INSTANCES", "INSTANCESCOLOR", "FOG", "LITE_FRONT_LAYER"],
+       zM = MM => 1 << QM.indexOf(MM),
+       LM = zM("VERTEXCOLOR"),
+       mM = zM("INSTANCES"),
+       HM = zM("THIN_INSTANCES"),
+       hM = zM("INSTANCESCOLOR"),
+       JM = zM("FOG"),
+       dM = zM("LITE_FRONT_LAYER");
```

#### 11. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L256-L309` → after: `L196-L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L196-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/297.js#L196-L198) · [Before (L256-L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/297.js#L256-L309)

```diff
-     function Sb(GG, bG) {
-       const {
-         t: ZG
-       } = (0, wb.w)();
-       (0, uG.g)("CodeEditorInsertText", (wG => {
-         let {
-           text: SG,
-           focus: LG
-         } = wG;
-         const yG = GG.current,
-           kG = null !== yG && void 0 !== yG && yG.dom.isConnected ? function(GG, bG) {
-             if (!BG(GG)) return null;
-             const {
-               from: ZG,
-               to: wG
-             } = GG.selection.main, SG = ZG + bG.length;
- ... (38 more removed lines; see GitHub link above)
+     function yM(MM, rM, iM, OM) {
+       let SM = 0;
+       return MM.isVerticesDataPresent("color") && (SM |= LM), "none" !== rM && (SM |= mM), "thin" === rM && (SM |= HM, MM.isVerticesDataPresent("instanceColor") && (SM |= hM)), OM.fogEnabled && MM.applyFog && 0 !== OM.fogMode && (SM |= JM), iM >= 1 && (SM |= dM), SM
```

#### 12. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L468-L520` → after: `L202-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L202-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/297.js#L202-L218) · [Before (L468-L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/297.js#L468-L520)

```diff
-       return [Eb, LG.n.fromClass(class {
-         constructor(GG) {
-           this.view = GG, this.onDown = GG => {
-             const bG = GG.target instanceof Element && null !== GG.target.closest(".cm-tooltip");
-             0 !== GG.button || bG || this.view.state.field(Eb) || this.view.dispatch({
-               effects: zb.of(!0)
-             })
-           }, this.onUp = () => {
-             this.view.state.field(Eb) && this.view.dispatch({
-               effects: zb.of(!1)
-             })
-           }, GG.dom.addEventListener("mousedown", this.onDown), document.addEventListener("mouseup", this.onUp), window.addEventListener("blur", this.onUp)
-         }
-         destroy() {
-           this.view.dom.removeEventListener("mousedown", this.onDown), document.removeEventListener("mouseup", this.onUp), window.removeEventListener("blur", this.onUp)
-         }
- ... (37 more removed lines; see GitHub link above)
+       MM.updateColor4("color", rM.color, rM.alpha)
+     }
+     var EM = iM(38829),
+       UM = iM(38298),
+       GM = iM(38235),
+       CM = iM(38188),
+       eM = iM(38809),
+       bM = iM(38822),
+       wM = iM(38217),
+       tM = iM(38221),
+       gM = iM(38233);
+     const uM = CM.b.GLSL;
+     class RM {
+       constructor(MM, rM) {
+         this.name = MM, this.YJ = rM, this.uniqueId = void 0, this.checkReadyOnlyOnce = !1, this._blockDirtyMechanism = !1, this.disposers = [], this.Rk = {
+           addOnce: MM => {
+ ... (1 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L522-L523` → after: `L220-L253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L220-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/297.js#L220-L253) · [Before (L522-L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/297.js#L522-L523)

```diff
-         }
-       }(ZG, GG, bG)))]
+         }, this.uniqueId = rM.getUniqueId()
+       }
+       get isFrozen() {
+         return this.checkReadyOnlyOnce
+       }
+       Hk() {
+         return this.YJ
+       }
+       getClassName() {
+         return "LiteMaterial"
+       }
+       freeze() {
+         this.checkReadyOnlyOnce = !0
+       }
+       unfreeze() {
+         this.checkReadyOnlyOnce = !1
+ ... (18 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L525-L534` → after: `L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/297.js#L255) · [Before (L525-L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/297.js#L525-L534)

```diff
-     var ub = ZG(1067);
-     const ib = new Set(["(", "{", "[", "<"]),
-       Cb = new Set([")", "}", "]", ">"]),
-       Wb = {
-         text: "var(--codeTooltipText, white)",
-         parameterName: "var(--codeTooltipParameterName, orange)",
-         parameter: "var(--codeTooltipParameter, cyan)",
-         suffix: "var(--codeTooltipSuffix, pink)",
-         docs: "var(--codeTooltipDocs, gray)"
-       };
+     const pM = new WeakSet;
```

#### 15. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L537` → after: `L258-L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L258-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/297.js#L258-L259) · [Before (L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/297.js#L537)

```diff
-       let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
+       return pM.has(MM)
+     }
```

#### 16. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L539-L552` → after: `L261-L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L261-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/297.js#L261-L314) · [Before (L539-L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/297.js#L539-L552)

```diff
-       function ZG(GG, bG) {
-         let ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-         const wG = [];
-         for (const SG of GG) {
-           let GG;
-           GG = "punctuation" === SG.kind ? Wb.text : "parameterName" === SG.kind ? Wb.parameterName : bG, wG.push({
-             str: SG.text,
-             style: {
-               color: GG,
-               opacity: ZG ? .5 : void 0
-             }
-           })
-         }
-         return wG
+     function sM(MM) {
+       pM.add(MM)
+     }
+     const DM = {
+       create: (MM, rM) => ((0, GM.s)(MM, new RM(MM.name, rM)), tM.d.defines()),
+       write: () => {},
+       addFeature: (MM, rM) => {
+         const iM = MM.mirror;
+         rM.feature === bM.j && rM.state.dirLightCount > 0 && (MM.disableLighting = !0, (0, wM.W)(MM)), "BLOXD_LIGHTING" in rM.defines && (0, UM.k)(iM), rM.feature === eM.g && ((0, EM.j)(rM.state, uM), function(MM, rM) {
+           const iM = MM.Hk().ph();
+           setTimeout((() => {
+             iM.atlasArrays(rM.sources).then((iM => {
+               (0, EM.c)(MM, rM, iM.map((MM => ({
+                 atlas: MM,
+                 layers: MM.layers
+               }))), iM[0].layerWidth, uM)
+ ... (38 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L554-L560` → after: `L316-L351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L316-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/297.js#L316-L351) · [Before (L554-L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/297.js#L554-L560)

```diff
-       const wG = [];
-       if (wG.push(...ZG(GG.prefixDisplayParts, Wb.text)), GG.parameters.length > 0) {
-         wG.push("\n");
-         for (let SG = 0; SG < GG.parameters.length; SG++) {
-           const LG = GG.parameters[SG];
-           wG.push("\t"), wG.push(...ZG(LG.displayParts, Wb.parameter, null !== bG && SG !== bG)), wG.push("\n")
-         }
+     };
+     var kM = iM(38316),
+       ZM = iM(38068);
+     class oM {
+       constructor(MM, rM, iM) {
+         this.engine = MM, this.clearColor = rM, this.ambientColor = iM, this.onBeforeRenderObservable = new ZM.d, this.onBeforeCameraRenderObservable = new ZM.d, this.onAfterRenderObservable = new ZM.d, this.activeCamera = null, this.useRightHandedSystem = !1, this.iblIntensity = … [truncated]
+       }
+       ph() {
+         return this.engine
+       }
+       getUniqueId() {
+         return ++this.lastId
+       }
+       getFrameId() {
+         return this.frameId
+       }
+ ... (20 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L572-L573` → after: `L355-L356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L355-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/297.js#L355-L356) · [Before (L572-L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/297.js#L572-L573)

```diff
-     function lb(GG) {
-       return "/" + GG
+     function fM() {
+       throw new Error("Lite has no WebGL engine, Babylon particles or Babylon picks")
```

#### 19. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L575-L577` → after: `L358-L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L358-L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/297.js#L358-L406) · [Before (L575-L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/297.js#L575-L577)

```diff
- 
-     function jb(GG, bG, ZG) {
-       GG.getSourceFile(bG) && GG.deleteFile(bG), GG.createFile(bG, ZG)
+     const YM = {
+       uiM: fM,
+       TOM: (MM, rM) => {
+         const iM = new oM(MM.engine, OM.d.FromArray(rM.clearColor), OM.Color3.FromArray(rM.ambientColor));
+         (0, aM.e)(DM, iM), MM.YJ = iM,
+           function(MM, rM) {
+             const iM = Object.assign((0, kM.g)(MM, "camera"), {
+               layerMask: 268435455
+             });
+             MM.model.nodes.setWorldSource(iM.row, MM.model.view.worldMatrix), MM.camera = rM.activeCamera = iM
+           }(MM, iM), (0, SM.d)(MM, ((MM, rM, iM) => (0, jM.f)(MM, rM, iM, PM.d)))
+       },
+       XOM: () => {},
+       setBabylonFog: () => {},
+       cOM: fM,
+       OSM: () => {},
+ ... (33 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L581` → after: `L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/297.js#L412) · [Before (L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/297.js#L581)

```diff
-       return !!GG && ((0, oG.m)(GG) || (0, oG.l)(GG))
+       return Math.max(4, 4 * Math.ceil(MM / 4))
```

#### 21. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L584-L593` → after: `L415-L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L415-L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/297.js#L415-L422) · [Before (L584-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/297.js#L584-L593)

```diff
-     function Mb(GG, bG, ZG) {
-       return () => {
-         let wG = [...bG.languageService.getSemanticDiagnostics(ZG), ...bG.languageService.getSyntacticDiagnostics(ZG)];
-         return wG = wG.filter((GG => !(0, iG.L)(GG.start) && !(0, iG.L)(GG.length) && !Fb.has(GG.code))), GG || (wG = wG.filter((GG => !vb.has(GG.code)))), wG.map((GG => ({
-           from: GG.start,
-           to: GG.start + GG.length,
-           message: "string" === typeof GG.messageText ? GG.messageText : GG.messageText.messageText,
-           severity: ab.has(GG.code) ? "warning" : "error"
-         })))
-       }
+     function IM(MM, rM, iM, OM) {
+       const SM = MM.createBuffer({
+         label: OM,
+         size: XM(rM.byteLength),
+         usage: iM,
+         mappedAtCreation: !0
+       });
+       return new Uint8Array(SM.getMappedRange(), 0, rM.byteLength).set(new Uint8Array(rM.buffer, rM.byteOffset, rM.byteLength)), SM.unmap(), SM
```

#### 22. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L597-L602` → after: `L426-L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L426-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/297.js#L426-L452) · [Before (L597-L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/297.js#L597-L602)

```diff
-       return ZG => {
-         var wG, SG;
-         const LG = GG.languageService.getCompletionsAtPosition(bG, ZG.pos, {});
-         if (!LG) return {
-           from: ZG.pos,
-           options: []
+       return Math.floor(Math.log2(Math.max(MM, rM))) + 1
+     }
+ 
+     function qM(MM, rM, iM, OM, SM, jM) {
+       const aM = MM.createTexture({
+           label: jM,
+           size: {
+             width: iM,
+             height: OM,
+             depthOrArrayLayers: SM
+           },
+           format: "rgba8unorm",
+           mipLevelCount: KM(iM, OM),
+           usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
+         }),
+         PM = (rM, iM, OM, jM) => {
+ ... (11 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L604-L631` → after: `L454-L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L454-L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/297.js#L454-L475) · [Before (L604-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/297.js#L604-L631)

```diff
-         let yG = null !== (wG = null === (SG = LG.optionalReplacementSpan) || void 0 === SG ? void 0 : SG.start) && void 0 !== wG ? wG : ZG.pos;
-         if (!LG.optionalReplacementSpan) {
-           const GG = ZG.state.doc.sliceString(0, ZG.pos);
-           for (; yG > 0 && /[\w$]/.test(GG[yG - 1]);) yG--
-         }
-         return LG.entries = LG.entries.filter((GG => GG.kind !== hG().ScriptElementKind.warning)), {
-           from: yG,
-           options: LG.entries.map((wG => {
-             var SG, LG, kG, UG;
-             const YG = GG.languageService.getCompletionEntryDetails(bG, ZG.pos, wG.name, {}, wG.source, {}, wG.data),
-               VG = null !== (SG = null === (LG = wG.replacementSpan) || void 0 === LG ? void 0 : LG.start) && void 0 !== SG ? SG : yG,
-               pG = wG.replacementSpan ? wG.replacementSpan.start + wG.replacementSpan.length : ZG.pos,
-               fG = null !== (kG = wG.insertText) && void 0 !== kG ? kG : wG.name;
-             return {
-               label: wG.name,
-               detail: null === YG || void 0 === YG ? void 0 : YG.displayParts.map((GG => GG.text)).join(""),
- ... (12 more removed lines; see GitHub link above)
+       PM(rM, 0, iM, OM);
+       let nM = 1;
+       for (const QM of function*(MM, rM, iM, OM) {
+           let SM = MM,
+             jM = rM,
+             aM = iM;
+           for (; jM > 1 || aM > 1;) {
+             const MM = Math.max(1, jM >> 1),
+               rM = Math.max(1, aM >> 1),
+               iM = new Uint8Array(MM * rM * OM * 4),
+               PM = 4 * jM;
+             let nM = 0;
+             for (let QM = 0; QM < OM; QM++) {
+               const OM = QM * PM * aM;
+               for (let QM = 0; QM < rM; QM++) {
+                 const rM = OM + Math.min(2 * QM, aM - 1) * PM,
+ ... (6 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L634-L636` → after: `L478-L485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L478-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/297.js#L478-L485) · [Before (L634-L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/297.js#L634-L636)

```diff
-           }))
-         }
-       }
+             yield {
+               data: iM,
+               width: MM,
+               height: rM
+             }, SM = iM, jM = MM, aM = rM
+           }
+         }(rM, iM, OM, SM)) PM(QM.data, nM++, QM.width, QM.height);
+       return aM
```

#### 25. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L640-L655` → after: `L493-L495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L493-L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/297.js#L493-L495) · [Before (L640-L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/297.js#L640-L655)

```diff
-       return bG => {
-         const ZG = document.createElement("div");
-         ZG.className = "CodeEditorTooltip";
-         let wG = !1;
-         return queueMicrotask((() => {
-           wG || (kG.render((0, ub.jsx)(fG.c, {
-             text: GG
-           }), ZG), bG.requestMeasure())
-         })), {
-           dom: ZG,
-           destroy() {
-             wG = !0, queueMicrotask((() => {
-               kG.unmountComponentAtNode(ZG)
-             }))
-           }
-         }
+       if (MM.startsWith("data:")) {
+         const rM = MM.search(/[;,]/);
+         return `data:${rM>5?MM.slice(5,rM):""} URL of ${MM.length} characters`
```

#### 26. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L658-L678` → after: `L499-L518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L499-L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/297.js#L499-L518) · [Before (L658-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/297.js#L658-L678)

```diff
- 
-     function qb(GG, bG, ZG) {
-       return wG => {
-         var SG;
-         if (!bG) return [];
-         const LG = null === (SG = wG.selection.Bh[0]) || void 0 === SG ? void 0 : SG.head;
-         if (void 0 === LG) return [];
-         const yG = GG.languageService.getSignatureHelpItems(ZG, LG, {});
-         if (!yG || !yG.items.length) return [];
-         const kG = yG.applicableSpan.start - yG.items[0].prefixDisplayParts.map((GG => GG.text)).join("").length,
-           UG = yG.applicableSpan.start,
-           YG = wG.doc.lineAt(LG),
-           VG = YG.from,
-           pG = Math.min(YG.to, LG);
-         let fG, QG;
-         return kG < VG ? (fG = VG, QG = pG) : (fG = kG, QG = UG), [{
- ... (5 more removed lines; see GitHub link above)
+     async function cM(MM) {
+       const rM = await fetch(MM);
+       if (!rM.ok) throw new Error(`${VM(MM)}: ${rM.status} ${rM.statusText}`);
+       return createImageBitmap(await rM.blob(), TM)
+     }
+     async function Mr(MM) {
+       const rM = await cM(MM),
+         iM = new OffscreenCanvas(rM.width, rM.height),
+         OM = iM.getContext("2d", {
+           willReadFrequently: !0
+         });
+       if (!OM) throw new Error("No 2D context to decode an image");
+       OM.drawImage(rM, 0, 0);
+       const {
+         data: SM
+       } = OM.getImageData(0, 0, rM.width, rM.height);
+ ... (4 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L683-L726` → after: `L523-L551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L523-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/297.js#L523-L551) · [Before (L683-L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/297.js#L683-L726)

```diff
-       return (ZG, wG, SG) => {
-         const LG = GG.languageService.getQuickInfoAtPosition(bG, wG);
-         if (!LG) return [];
-         const yG = LG.textSpan.start,
-           kG = LG.textSpan.start + LG.textSpan.length;
-         if (wG < yG || wG >= kG) return [];
-         if (LG.kind === hG().ScriptElementKind.memberFunctionElement || LG.kind === hG().ScriptElementKind.variableElement && "declare" === LG.kindModifiers) {
-           const GG = LG.displayParts.findIndex((GG => "space" === GG.kind)); - 1 !== GG && (LG.displayParts = LG.displayParts.slice(GG));
-           const bG = {
-               prefixDisplayParts: [],
-               parameters: [],
-               suffixDisplayParts: [],
-               documentation: []
-             },
-             ZG = LG.displayParts.findIndex((GG => "punctuation" === GG.kind && "(" === GG.text)); - 1 !== ZG && (bG.prefixDisplayParts = LG.displayParts.slice(0, ZG + 1), LG.displayParts = LG.displayParts.slice(ZG + 1));
-           const wG = LG.displayParts.findLastIndex((GG => "punctuation" === GG.kind && ")" === GG.text)); - 1 !== wG && (bG.suffixDisplayParts = LG.displayParts.slice(wG), LG.displayParts = LG.displayParts.slice(0, wG));
- ... (28 more removed lines; see GitHub link above)
+       return (0, FM.f)(MM, rM.urls, (async () => {
+         const iM = await Promise.all(rM.urls.map((async (MM, iM) => {
+             var OM, SM, jM, aM, PM;
+             return null !== (aM = null !== (SM = null === (jM = rM.pixels) || void 0 === jM ? void 0 : jM[iM]) && void 0 !== SM ? SM : null, PM = rM.layerWidth, OM = null !== aM && void 0 !== aM && aM.byteLength && PM && aM.byteLength % (PM * PM * 4) === 0 ? {
+               pixels: aM,
+               layerWidth: PM,
+               layers: aM.byteLength / (PM * PM * 4)
+             } : null) && void 0 !== OM ? OM : await async function(MM) {
+               const {
+                 pixels: rM,
+                 width: iM
+               } = await Mr(MM);
+               return {
+                 pixels: rM,
+                 layerWidth: iM,
+                 layers: rM.byteLength / (iM * iM * 4)
+ ... (13 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L728-L743` → after: `L553-L7017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L553-L7017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/297.js#L553-L7017) · [Before (L728-L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/297.js#L728-L743)

```diff
-         });
-         if (LG.documentation) {
-           UG.push("\n\n");
-           for (const GG of LG.documentation) UG.push({
-             str: GG.text,
-             style: {
-               color: Wb.docs
-             }
-           })
-         }
-         return [{
-           pos: yG,
-           end: kG,
-           above: !0,
-           create: sb(UG)
-         }]
+         }))
+       }))
+     }
+     const ir = new Map([
+         [0, "zero"],
+         [1, "one"],
+         [768, "src"],
+         [769, "one-minus-src"],
+         [770, "src-alpha"],
+         [771, "one-minus-src-alpha"],
+         [772, "dst-alpha"],
+         [773, "one-minus-dst-alpha"],
+         [774, "dst"],
+         [775, "one-minus-dst"],
+         [776, "src-alpha-saturated"]
+       ]),
+ ... (6449 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L746-L771` → after: `L7020-L7089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R7020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L7020-L7089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/297.js#L7020-L7089) · [Before (L746-L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/297.js#L746-L771)

```diff
-     const gb = {
-       indentSize: 4,
-       tabSize: 4,
-       newLineCharacter: "\n",
-       convertTabsToSpaces: !0,
-       insertSpaceAfterCommaDelimiter: !0,
-       insertSpaceAfterSemicolonInForStatements: !0,
-       insertSpaceBeforeAndAfterBinaryOperators: !0,
-       insertSpaceAfterKeywordsInControlFlowStatements: !0,
-       insertSpaceAfterFunctionKeywordForAnonymousFunctions: !0,
-       insertSpaceBeforeFunctionParenthesis: !1,
-       insertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis: !1,
-       insertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets: !1,
-       insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces: !0,
-       insertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces: !1,
-       insertSpaceAfterOpeningAndBeforeClosingJsxExpressionBraces: !1,
- ... (10 more removed lines; see GitHub link above)
+ 
+     function On(MM, rM, iM, OM) {
+       return `${MS(MM)}|${MM.atlasLayers}|${MM.U3}|${rM}|${iM}|${OM._colorFormat}|${OM._depthStencilFormat}|${OM._sampleCount}`
+     }
+ 
+     function Sn(MM, rM) {
+       return MM.distance - rM.distance
+     }
+ 
+     function jn(MM, rM) {
+       return rM.distance - MM.distance
+     }
+     class an {
+       constructor() {
+         this.left = []
+       }
+ ... (54 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L774-L833` → after: `L7092-L7150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R7092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L7092-L7150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/297.js#L7092-L7150) · [Before (L774-L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/297.js#L774-L833)

```diff
-       let {
-         isLobbyCode: bG,
-         code: ZG,
-         onChange: kG,
-         canEditCode: fG,
-         setTemporaryMessage: KG,
-         close: iG,
-         showTooltips: RG,
-         lightMode: TG,
-         collabState: tG,
-         onRemoteDocChange: DG,
-         files: NG,
-         activePath: OG,
-         pluginName: BG,
-         pluginFile: Gb,
-         pluginSource: Zb,
- ... (44 more removed lines; see GitHub link above)
+       return Math.max(1, Math.min(16, MM))
+     }
+     class zn {
+       constructor(MM, rM) {
+         let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : console.warn;
+         this.sink = MM, this.loadTexture = rM, this.warn = iM, this.blockCaster = new Uint16Array(1), this.builtVersion = -1, this.byKey = new Map, this.nextCaster = 1, this.nextMaskWord = 0, this.warned = new Set, this.textures = new Map, this.loads = [], this.pending = Promise. … [truncated]
+       }
+       update(MM, rM) {
+         return (MM.vx !== this.builtVersion || this.blockCaster.length !== rM) && (this.build(MM, rM), !0)
+       }
+       build(MM, rM) {
+         this.builtVersion = MM.vx;
+         const iM = new Uint16Array(rM),
+           OM = new Map;
+         for (let SM = 1; SM < rM; SM++) {
+           const rM = this.classify(MM, SM, OM);
+ ... (43 more added lines; see GitHub link above)
```

#### 31. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L835-L842` → after: `L7152-L7334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R7152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L7152-L7334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/297.js#L7152-L7334) · [Before (L835-L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/297.js#L835-L842)

```diff
-           }, LG = new Map, yG = [];
-           if (GG) {
-             const GG = null !== bG && void 0 !== bG ? bG : {
-               [EG.k]: ZG || "\n"
-             };
-             for (const [bG, ZG] of Object.entries(GG)) {
-               const GG = lb(bG);
-               LG.set(GG, ZG || "\n"), yG.push(GG)
+             return rM
+           }(SM);
+           return function(MM) {
+             return MM.every((MM => 4294967295 === MM))
+           }(MM) ? li : MM.every((MM => 0 === MM)) ? null : {
+             kind: "shape",
+             key: `shape:${MM.join(",")}`,
+             mask: MM
+           }
+         }
+         if (MM.bC[rM] || !MM.iJ[rM]) return null;
+         const jM = [0, 1, 2, 3, 4, 5].map((OM => {
+           const SM = MM.OJ[6 * rM + OM];
+           let jM = iM.get(SM);
+           return void 0 === jM && (jM = function(MM) {
+             if (!MM || MM.HJ) return null;
+ ... (167 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L844-L850` → after: `L7336-L7427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R7336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L7336-L7427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/297.js#L7336-L7427) · [Before (L844-L850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/297.js#L844-L850)

```diff
-             const SG = lb(null !== wG && void 0 !== wG ? wG : EG.k);
-             LG.has(SG) ? LG.set(SG, ZG || "\n") : (LG.set(SG, ZG || "\n"), yG.push(SG)), LG.set("/node_modules/@bloxd/index.d.ts", VG.default), yG.push("/node_modules/@bloxd/index.d.ts");
-             for (const bG of Object.values(zG.h)) {
-               LG.set(bG.typesVfsPath, bG.types), yG.push(bG.typesVfsPath);
-               for (const [GG, ZG] of Object.entries(bG.files)) {
-                 const wG = `/plugin-preview/${bG.name}/${GG}`;
-                 LG.set(wG, ZG || "\n"), yG.push(wG)
+       }
+       requeueStarved() {
+         for (let MM = 0; MM < ri; MM++) this.starved[MM] && this.slotChunk[MM] && this.enqueue(MM)
+       }
+       enqueue(MM) {
+         this.queued[MM] || (this.queued[MM] = 1, this.queue.push(MM), this.queueSorted = !1)
+       }
+       drain(MM) {
+         if (0 === this.queue.length) return;
+         if (!this.queueSorted) {
+           const MM = new Map;
+           for (const rM of this.queue) MM.set(rM, this.slotDistance(rM));
+           this.queue.sort(((rM, iM) => MM.get(iM) - MM.get(rM))), this.queueSorted = !0
+         }
+         const rM = performance.now();
+         let iM = 0;
+ ... (76 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L853-L864` → after: `L7430-L7502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R7430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L7430-L7502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/297.js#L7430-L7502) · [Before (L853-L864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/297.js#L853-L864)

```diff
-           } else LG.set(cb, ZG || "\n"), yG.push(cb);
-           LG.set("/globals.d.ts", GG ? YG.d : UG.e), LG.set("/lib.d.ts", pG.e), yG.push("/globals.d.ts", "/lib.d.ts");
-           const kG = QG.c(LG),
-             fG = QG.d(kG, yG, hG(), SG);
-           Ub({
-             Gd: fG,
-             fsMap: LG
-           })
-         }()
-       }), []), (0, yG.useEffect)((() => {
-         var GG, wG;
-         if (!kb || !bG) return;
+         }
+         return 0 === JM ? Oi : 32768 === dM ? Si | yM << 8 : (this.writePoolEntries(rM, iM, OM), this.writeVoxels(ni + rM * Qi, mM), ji | yM << 8)
+       }
+       writePoolEntries(MM, rM, iM) {
+         const {
+           bricks: OM,
+           cells: SM,
+           special: jM
+         } = rM, aM = this.entry;
+         let PM = 0;
+         for (let zM = 0; zM < Pi; zM++) PM += jM[zM];
+         if (0 === PM) return;
+         iM && this.freeCount < PM && this.evictBeyond(MM, PM);
+         const nM = new Uint32Array(iM ? Math.min(PM, this.freeCount) : 0);
+         let QM = 0;
+         for (let zM = 0; zM < Pi; zM++) {
+ ... (57 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L866-L867` → after: `L7504-L7506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R7504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L7504-L7506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/297.js#L7504-L7506) · [Before (L866-L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/297.js#L866-L867)

```diff
-           Gd: SG,
-           fsMap: LG
+           queue: jM
+         } = this.device, {
+           words: aM
```

#### 35. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L869-L883` → after: `L7508-L7511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R7508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L7508-L7511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/297.js#L7508-L7511) · [Before (L869-L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/297.js#L869-L883)

```diff
-         if (function(GG, bG, ZG) {
-             const wG = new Set;
-             for (const [SG, LG] of Object.entries(ZG)) {
-               const ZG = lb(SG);
-               wG.add(ZG);
-               const yG = LG || "\n";
-               bG.get(ZG) !== yG && (bG.set(ZG, yG), jb(GG, ZG, yG))
-             }
-             for (const SG of [...bG.keys()]) "/globals.d.ts" === SG || "/lib.d.ts" === SG || SG.startsWith("/node_modules/") || SG.startsWith("/plugin-preview/") || wG.has(SG) || (bG.delete(SG), GG.getSourceFile(SG) && GG.deleteFile(SG))
-           }(SG, LG, null !== NG && void 0 !== NG ? NG : {
-             [EG.k]: ZG || "\n"
-           }), BG) return void jb(SG, Cb, Zb || "\n");
-         const yG = null !== (GG = null === (wG = Qb.current) || void 0 === wG ? void 0 : wG.state.doc.toString()) && void 0 !== GG ? GG : ZG;
-         jb(SG, Cb, yG || "\n")
-       }), [NG, OG, kb, BG, Zb, Cb, ZG, bG]), (0, yG.useEffect)((() => {
+         jM.writeBuffer(this.frameBuffer, 0, aM, 0, 16385), OM.refs > 0 && jM.writeBuffer(this.frameBuffer, 65540, aM, si, OM.refs), SM || jM.writeBuffer(this.frameBuffer, 327684, aM, Di, OM.parts * Wi)
+       }
+       add(MM) {
+         const rM = this.gridFor(MM);
```

#### 36. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L886` → after: `L7514-L7520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R7514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L7514-L7520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/297.js#L7514-L7520) · [Before (L886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/297.js#L886)

```diff
-           Gd: GG
+           frame: iM
+         } = this, {
+           uL: OM,
+           worldAt: SM,
+           instances: jM,
+           instanceCount: aM,
+           thin: PM
```

#### 37. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L888-L911` → after: `L7522-L7597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R7522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L7522-L7597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/297.js#L7522-L7597) · [Before (L888-L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/297.js#L888-L911)

```diff
-         jb(GG, Cb, (BG ? Zb : ZG) || "\n")
-       }), [ZG, BG, Zb, Cb, kb]), (0, yG.useEffect)((() => () => {
-         rb.current && (rb.current(), rb.current = null)
-       }), []), (0, yG.useEffect)((() => (wb(((GG, bG) => {
-         if (BG) return !1;
-         const ZG = Qb.current,
-           wG = Kb.current,
-           SG = wG ? (0, oG.r)(wG.docKey) : null;
-         if (!ZG || !wG || hb.current !== wG.clientID || GG !== SG) return !1;
-         const LG = ZG.state.doc.toString();
-         return LG !== bG && ZG.dispatch({
-           changes: {
-             from: 0,
-             to: LG.length,
-             insert: bG
-           }
- ... (8 more removed lines; see GitHub link above)
+         if (jM)
+           for (let nM = 0; nM < aM; nM++) PM ? (xi(jM, 16 * nM, OM, SM, this.uL), iM.add(rM, this.uL)) : iM.add(rM, jM, 16 * nM);
+         else iM.add(rM, OM, SM)
+       }
+       gridFor(MM) {
+         let {
+           geometry: rM,
+           indexed: iM,
+           first: OM,
+           count: SM,
+           skip: jM
+         } = MM, aM = this.grids.get(rM);
+         aM || (aM = new Map, this.grids.set(rM, aM));
+         const PM = `${iM?OM:-1-OM}:${SM}:${null!==jM&&void 0!==jM?jM:""}`;
+         let nM = aM.get(PM);
+         if (void 0 !== nM || this.gridsFull) return nM;
+ ... (60 more added lines; see GitHub link above)
```

#### 38. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L913-L929` → after: `L7599-L7641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R7599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L7599-L7641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/297.js#L7599-L7641) · [Before (L913-L929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/297.js#L913-L929)

```diff
-           Gd: GG,
-           fsMap: ZG
-         } = kb, wG = GG.getSourceFile(Cb).getFullText();
-         let SG = 0;
-         if (bG && NG)
-           for (const [bG, kG] of Object.entries(NG)) bG !== (null !== OG && void 0 !== OG ? OG : EG.k) && (SG += kG.length);
-         const LG = function(GG, bG, ZG, wG, SG) {
-           const LG = GG.languageService.getFormattingEditsForDocument(wG, gb);
-           if (!LG.length) return CG.d.error("Code is already formatted.");
-           LG.sort(((GG, bG) => bG.span.start - GG.span.start));
-           let yG = GG.getSourceFile(wG).getFullText();
-           for (const kG of LG) yG = yG.slice(0, kG.span.start) + kG.iU + yG.slice(kG.span.start + kG.span.length);
-           return yG !== (ZG ? (0, XG.m)(yG, SG) : (0, XG.i)(yG)) ? CG.d.error("Formatting the code will go beyond the character limit.") : CG.d.value(yG)
-         }(GG, 0, bG, Cb, SG);
-         if (LG.isError()) return void KG({
-           message: LG.asError().message,
- ... (1 more removed lines; see GitHub link above)
+           words: PM,
+           ...nM
+         } = aM;
+         if (this.gridTop + PM.length > Zi) return void(this.gridsFull = !0);
+         const QM = this.gridTop;
+         return this.gridTop += PM.length, this.device.queue.writeBuffer(this.gridBuffer, 4 * QM, PM), {
+           ...nM,
+           at: QM
+         }
+       }
+     }
+     const yn = Math.cos(1 * Math.PI / 180);
+ 
+     function En(MM, rM) {
+       return MM[0] * rM[0] + MM[1] * rM[1] + MM[2] * rM[2] < yn
+     }
+ ... (27 more added lines; see GitHub link above)
```

#### 39. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L931-L936` → after: `L7643-L7649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R7643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L7643-L7649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/297.js#L7643-L7649) · [Before (L931-L936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/297.js#L931-L936)

```diff
-         const yG = LG.getValue();
-         yG && (Qb.current.dispatch({
-           changes: {
-             from: 0,
-             to: wG.length,
-             insert: yG
+         const [iM, OM, SM] = Bi.q;
+         this.volume = MM.createTexture({
+           label: "sun-shadow-volume",
+           size: {
+             width: iM,
+             height: OM,
+             depthOrArrayLayers: SM
```

#### 40. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L938-L939` → after: `L7651-L7693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R7651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L7651-L7693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/297.js#L7651-L7693) · [Before (L938-L939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/297.js#L938-L939)

```diff
-           selection: {
-             anchor: yG.length
+           dimension: "3d",
+           format: "rgba8unorm",
+           usage: GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.TEXTURE_BINDING
+         }), this.volumeView = this.volume.createView({
+           label: "sun-shadow-volume"
+         }), this.volumeSampler = MM.createSampler({
+           label: "sun-shadow-volume",
+           magFilter: "linear",
+           minFilter: "linear",
+           addressModeU: "repeat",
+           addressModeV: "repeat",
+           addressModeW: "repeat"
+         }), this.work = MM.createBuffer({
+           label: "sun-shadow-volume-work",
+           size: Bi.p,
+           usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
+ ... (27 more added lines; see GitHub link above)
```

#### 41. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L941-L944` → after: `L7695-L7943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R7695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L7695-L7943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/297.js#L7695-L7943) · [Before (L941-L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/297.js#L941-L944)

```diff
-         }), jb(GG, Cb, yG), kG(yG))
-       }));
-       const Ib = (0, yG.useMemo)((() => {
-         if (!kb) return [];
+         }, {
+           binding: SM.Xm,
+           resource: {
+             buffer: this.voxelBuffer
+           }
+         }, {
+           binding: SM.special,
+           resource: {
+             buffer: this.special
+           }
+         }, {
+           binding: SM.volume,
+           resource: this.volumeView
+         }, {
+           binding: SM.sampler,
+           resource: this.volumeSampler
+ ... (233 more added lines; see GitHub link above)
```

#### 42. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L946-L947` → after: `L7945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R7945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L7945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/297.js#L7945) · [Before (L946-L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/297.js#L946-L947)

```diff
-           Gd: GG,
-           fsMap: ZG
+           name: SM
```

#### 43. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L949-L964` → after: `L7947-L7982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R7947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L7947-L7982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/297.js#L7947-L7982) · [Before (L949-L964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/297.js#L949-L964)

```diff
-         ! function(GG, bG, ZG, wG) {
-           if (GG.getSourceFile(ZG)) return;
-           const SG = wG || "\n";
-           bG.set(ZG, SG), GG.createFile(ZG, SG)
-         }(GG, ZG, Cb, (BG ? ib.current : ob.current) || "\n");
-         const yG = bG && Pb(BG ? null !== Gb && void 0 !== Gb ? Gb : "index.ts" : OG),
-           kG = [(0, SG.e)({
-             jsx: !1,
-             typescript: yG
-           }), LG.c.highest(LG.b.domEventHandlers({
-             keydown: GG => "Escape" === GG.key ? (Eb.current(), GG.stopPropagation(), !0) : (GG.stopPropagation(), !1)
-           })), (0, wG.e)({
-             override: [Ab(GG, Cb)]
-           }), IG.j.fromClass(class {
-             constructor(GG) {
-               this.view = GG, this.timeout = null, this.scheduleParse()
+         this.ring = MM.createBuffer({
+           label: `particles-${SM}`,
+           size: rM.ring.records.byteLength,
+           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
+         }), this.uniforms = MM.createBuffer({
+           label: `particles-uniforms-${SM}`,
+           size: 4 * en.s,
+           usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
+         })
+       }
+       writeUniforms(MM) {
+         const rM = (0, pn.d)(this.system, this.uniformBits, MM);
+         rM && (this.uniformBits = rM, this.device.queue.writeBuffer(this.uniforms, 0, rM))
+       }
+       bind() {
+         const {
+ ... (20 more added lines; see GitHub link above)
```

#### 44. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L966-L967` → after: `L7984-L7987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R7984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L7984-L7987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/297.js#L7984-L7987) · [Before (L966-L967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/297.js#L966-L967)

```diff
-             update(GG) {
-               (GG.docChanged || GG.viewportChanged) && this.scheduleParse()
+           }, {
+             binding: 1,
+             resource: {
+               buffer: this.ring
```

#### 45. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L969-L970` → after: `L7989-L8039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R7989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L7989-L8039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/297.js#L7989-L8039) · [Before (L969-L970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/297.js#L969-L970)

```diff
-             destroy() {
-               null !== this.timeout && (clearTimeout(this.timeout), this.timeout = null)
+           }, {
+             binding: 2,
+             resource: rM.sampler
+           }, {
+             binding: 3,
+             resource: rM.view
+           }, {
+             binding: 4,
+             resource: this.bindings.rampSampler
+           }, {
+             binding: 5,
+             resource: iM
+           }]
+         }))
+       }
+       destroy() {
+ ... (35 more added lines; see GitHub link above)
```

#### 46. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L972-L977` → after: `L8041-L8045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R8041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L8041-L8045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/297.js#L8041-L8045) · [Before (L972-L977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/297.js#L972-L977)

```diff
-             scheduleParse() {
-               null === this.timeout && (this.timeout = setTimeout((() => {
-                 this.timeout = null;
-                 const GG = this.view.viewport.to;
-                 (0, MG.cb)(this.view.state, GG) || (0, MG.J)(this.view, GG, AG) || this.scheduleParse()
-               }), sG))
+           }, {
+             binding: 1,
+             visibility: GPUShaderStage.VERTEX,
+             buffer: {
+               type: "read-only-storage"
```

#### 47. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L979-L988` → after: `L8047-L8051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R8047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L8047-L8051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/297.js#L8047-L8051) · [Before (L979-L988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/297.js#L979-L988)

```diff
-           }), ...xG, LG.b.lineWrapping, LG.j.define({
-             create: qb(GG, RG, Cb),
-             update(bG, ZG) {
-               const wG = ZG.effects.some((GG => GG.is(eb)));
-               return ZG.docChanged || ZG.selection || wG ? (jb(GG, Cb, ZG.state.doc.toString() || " "), qb(GG, RG, Cb)(ZG.state)) : bG
-             },
-             provide: GG => LG.y.computeN([GG], (bG => bG.field(GG)))
-           }), (0, LG.v)(nb(GG, Cb)), (0, JG.f)(Mb(bG, GG, Cb)), LG.n.fromClass(class {
-             constructor(GG) {
-               this.view = GG, this.searchPanel = null
+           }, {
+             binding: 2,
+             visibility: GPUShaderStage.FRAGMENT,
+             sampler: {
+               type: "filtering"
```

#### 48. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L990-L997` → after: `L8053-L8057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R8053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L8053-L8057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/297.js#L8053-L8057) · [Before (L990-L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/297.js#L990-L997)

```diff
-             update(GG) {
-               const bG = GG.view.dom.querySelector(".cm-search");
-               if (bG !== this.searchPanel) {
-                 if (this.searchPanel = bG, !this.searchPanel) return;
-                 this.searchPanel.addEventListener("keydown", (GG => {
-                   "Escape" === GG.key && (0, dG.d)(this.view), GG.stopPropagation()
-                 }))
-               }
+           }, {
+             binding: 3,
+             visibility: GPUShaderStage.FRAGMENT,
+             texture: {
+               sampleType: "float"
```

#### 49. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L999-L1157` → after: `L8059-L8199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R8059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L8059-L8199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/297.js#L8059-L8199) · [Before (L999-L1157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/297.js#L999-L1157)

```diff
-           })];
-         Lb && !BG && kG.push(Xb(bG ? null !== OG && void 0 !== OG ? OG : EG.k : Jb.c, yb));
-         const UG = Kb.current;
-         if (UG && !BG) {
-           kG.push(... function(GG, bG, ZG, wG, SG) {
-             let LG = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
-             const yG = (0, oG.r)(ZG),
-               kG = IG.j.fromClass(class {
-                 constructor(GG) {
-                   this.view = GG, this.pushing = !1, this.pushTimeout = null, this.pushDelayTimeout = null, this.cursorTimeout = null, this.lastPushTime = 0, this.pulling = !1, this.pullPending = !1, this.lastCursorSent = 0, this.destroyed = !1, this.subToken = void 0, this.subTo … [truncated]
-                     GG.docKey === yG && GG.type === oG.f.Updates && (GG.updates ? this.applyUpdates(GG.updates) : this.pull())
-                   })), this.pull()
-                 }
-                 applyUpdates(GG) {
-                   const bG = JSON.parse(GG).map((GG => ({
-                     clientID: GG.clientID,
- ... (143 more removed lines; see GitHub link above)
+           }, {
+             binding: 4,
+             visibility: GPUShaderStage.FRAGMENT,
+             sampler: {
+               type: "filtering"
+             }
+           }, {
+             binding: 5,
+             visibility: GPUShaderStage.FRAGMENT,
+             texture: {
+               sampleType: "float"
+             }
+           }]
+         });
+         this.frameLayout = MM.createBindGroupLayout({
+           label: "particles-frame",
+ ... (125 more added lines; see GitHub link above)
```

#### 50. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L1159-L1161` → after: `L8201-L8227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R8201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L8201-L8227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/297.js#L8201-L8227) · [Before (L1159-L1161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/297.js#L1159-L1161)

```diff
-           }(UG.docKey, UG.existingCursors);
-           kG.push(...GG.extensions), zb.current = GG.connect
-         } else zb.current = null;
+           }, SM, jr((0, BM.i)(MM))),
+           primitive: {
+             topology: "triangle-strip",
+             cullMode: "none"
+           },
+           depthStencil: SM._depthStencilFormat ? {
+             format: SM._depthStencilFormat,
+             depthCompare: aM,
+             depthWriteEnabled: !1
+           } : void 0,
+           multisample: {
+             count: SM._sampleCount
+           }
+         }).then((rM => {
+           iM.set(MM, rM)
+         }), (rM => {
+ ... (11 more added lines; see GitHub link above)
```

#### 51. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L1163-L1177` → after: `L8229-L8369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R8229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L8229-L8369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/297.js#L8229-L8369) · [Before (L1163-L1177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/297.js#L1163-L1177)

```diff
-       }), [bG, kb, RG, Yb, Vb, Cb, OG, BG, Gb, fG, Lb, yb]);
-       if (!kb || !tG && !BG) return (0, ub.jsx)("div", {
-         className: "CodeEditorContent",
-         children: (0, ub.jsx)(rG.b, {})
-       });
-       const Fb = BG ? `plugin-${BG}-${null!==Gb&&void 0!==Gb?Gb:"index.ts"}` : tG ? `collab-${tG.clientID}` : `local-${bG}`;
-       return (0, ub.jsx)(LG.r, {
-         value: BG ? null !== Zb && void 0 !== Zb ? Zb : "" : ZG,
-         onChange: kG,
-         extensions: Ib,
-         className: "CodeEditorContent",
-         theme: TG ? db : "dark",
-         editable: fG && !BG,
-         basicSetup: Rb,
-         onCreateEditor: GG => {
+       }
+       createFrameBuffer() {
+         return this.device.createBuffer({
+           label: "particles-frames",
+           size: this.frameData.byteLength,
+           usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
+         })
+       }
+       createFrameBindGroup() {
+         return this.device.createBindGroup({
+           label: "particles-frames",
+           layout: this.frameLayout,
+           entries: [{
+             binding: 0,
+             resource: {
+               buffer: this.frameBuffer,
+ ... (125 more added lines; see GitHub link above)
```

#### 52. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L1179` → after: `L8371-L8515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R8371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L8371-L8515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/297.js#L8371-L8515) · [Before (L1179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/297.js#L1179)

```diff
-           Qb.current = GG, hb.current = null !== (bG = null === tG || void 0 === tG ? void 0 : tG.clientID) && void 0 !== bG ? bG : null, mb(GG), rb.current && rb.current(), zb.current && (rb.current = zb.current(GG))
+           rM = MM.device, nr.add(rM)
+         })), MM.YJ.camera = this.camera
+       }
+       async rebuild() {
+         var MM, rM, iM, OM, SM;
+         const jM = await An();
+         this.halted = !0, this.liteTerrain.retire(), null === (MM = this.sunShadow) || void 0 === MM || MM.dispose(), this.XrM.detach();
+         try {
+           (0, AM.c)(this.engine)
+         } catch (zM) {
+           console.warn("Lite: disposing the lost device's engine threw", zM)
+         }
+         const aM = {
+             width: this.XrM.renderWidth,
+             height: this.XrM.renderHeight
+           },
+ ... (129 more added lines; see GitHub link above)
```

#### 53. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L1181` → after: `L8517-L8679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R8517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L8517-L8679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/297.js#L8517-L8679) · [Before (L1181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/297.js#L1181)

```diff
-       }, Fb)
+         return iM
+       } catch (nM) {
+         throw aM.destroy(), null === PM() ? nM : (0, iP.g)(nM, "device")
+       }
+     }
+     async function An() {
+       const MM = await navigator.gpu.requestAdapter({
+         powerPreference: "high-performance"
+       });
+       if (!MM) throw (0, iP.g)(new Error("No WebGPU adapter"), "no_adapter");
+       return MM
+     }
+     async function xn(MM, rM, iM, OM) {
+       let SM;
+       try {
+         SM = await (0, NM.f)(MM, {
+ ... (147 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/298.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/298.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89)

#### 1. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/298.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/298.js#L4)

```diff
-   41721: (GG, bG, ZG) => {
+   42017: (MM, rM, iM) => {
```

#### 2. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L7-L256` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/298.js#L8) · [Before (L7-L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/298.js#L7-L256)

```diff
-       f: () => ib,
-       i: () => rb,
-       j: () => UG,
-       l: () => lb,
-       m: () => YG,
-       o: () => fb
-     });
-     var wG = ZG(41727),
-       SG = ZG(41735),
-       LG = ZG(41754);
-     class yG {
-       constructor(GG, bG, ZG, wG) {
-         this.state = GG, this.pos = bG, this.explicit = ZG, this.view = wG, this.abortListeners = [], this.abortOnDocChange = !1
-       }
-       tokenBefore(GG) {
-         let bG = (0, LG.gb)(this.state).resolveInner(this.pos, -1);
- ... (234 more removed lines; see GitHub link above)
+       g: () => PM
```

#### 3. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L260-L1230` → after: `L14-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L14-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/298.js#L14-L15) · [Before (L260-L1230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/298.js#L260-L1230)

```diff
-       return GG ? bG ? GG + " " + bG : GG : bG
-     }
- 
-     function uG(GG, bG, ZG, wG, LG, yG) {
-       let kG, UG, YG = GG.textDirection == SG.d.RTL,
-         VG = YG,
-         pG = !1,
-         fG = "top",
-         QG = bG.left - LG.left,
-         KG = LG.right - bG.right,
-         hG = wG.right - wG.left,
-         dG = wG.bottom - wG.top;
-       if (VG && QG < Math.min(hG, KG) ? VG = !1 : !VG && KG < Math.min(hG, QG) && (VG = !0), hG <= (VG ? QG : KG)) kG = Math.max(LG.top, Math.min(ZG.top, LG.bottom - dG)) - bG.top, UG = Math.min(400, VG ? QG : KG);
-       else {
-         pG = !0, UG = Math.min(400, (YG ? bG.right : LG.right - bG.left) - 30);
-         let GG = LG.bottom - bG.bottom;
- ... (955 more removed lines; see GitHub link above)
+       return OM = MM, SM = null, PM(rM), () => {
+         OM === MM && (OM = null, SM = null)
```

#### 4. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L1278` → after: `L20-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L20-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/298.js#L20-L22) · [Before (L1278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/298.js#L1278)

```diff
-       return [ub, Jb]
+       return null === SM ? null : {
+         ...SM
+       }
```

#### 5. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L1283-L1486` → after: `L26-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L26-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/298.js#L26-L28) · [Before (L1283-L1486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/298.js#L1283-L1486)

```diff
-       for (let bG = 0; bG < 16; bG += 2)
-         if (zb.charCodeAt(bG) == GG) return zb.charAt(bG + 1);
-       return (0, wG.cb)(GG < 128 ? GG : GG + 1)
-     }
- 
-     function ob(GG, bG) {
-       return GG.languageDataAt("closeBrackets", bG)[0] || Kb
-     }
-     const Xb = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
-       ub = SG.h.inputHandler.of(((GG, bG, ZG, SG) => {
-         if ((Xb ? GG.composing : GG.compositionStarted) || GG.state.readOnly) return !1;
-         let LG = GG.state.selection.main;
-         if (SG.length > 2 || 2 == SG.length && 1 == (0, wG.R)((0, wG.Q)(SG, 0)) || bG != LG.from || ZG != LG.to) return !1;
-         let yG = function(GG, bG) {
-           let ZG = ob(GG, GG.selection.main.head),
-             SG = ZG.brackets || Kb.brackets;
- ... (188 more removed lines; see GitHub link above)
+       var rM;
+       null !== (rM = OM) && void 0 !== rM && rM(MM) && (SM = {
+         ...MM
```

#### 6. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L1547` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/298.js#L32) · [Before (L1547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/298.js#L1547)

```diff
-   41869: (GG, bG, ZG) => {
+   42031: (MM, rM, iM) => {
```

#### 7. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L1549-L1552` → after: `L34-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/298.js#L34-L35) · [Before (L1549-L1552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/298.js#L1549-L1552)

```diff
-       e: () => YG,
-       f: () => fG,
-       g: () => VG,
-       k: () => pG
+       c: () => SM,
+       g: () => jM
```

#### 8. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L1554-L1596` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/298.js#L37) · [Before (L1554-L1596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/298.js#L1554-L1596)

```diff
-     var wG = ZG(41727);
-     class SG {
-       constructor(GG, bG, ZG, wG) {
-         this.origin = GG, this.changes = bG, this.effects = ZG, this.clientID = wG
-       }
-     }
-     class LG {
-       constructor(GG, bG) {
-         this.version = GG, this.unconfirmed = bG
-       }
-     }
-     const yG = wG.m.define({
-         combine(GG) {
-           let bG = (0, wG.S)(GG, {
-             startVersion: 0,
-             clientID: null,
- ... (27 more removed lines; see GitHub link above)
+     let OM = null;
```

#### 9. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L1599-L1618` → after: `L40-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L40-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/298.js#L40-L42) · [Before (L1599-L1618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/298.js#L1599-L1618)

```diff
-       let {
-         version: ZG,
-         unconfirmed: YG
-       } = GG.field(UG), {
-         clientID: VG
-       } = GG.facet(yG);
-       ZG += bG.length;
-       let pG = [],
-         fG = null,
-         QG = 0;
-       for (let SG of bG) {
-         let GG = QG < YG.length ? YG[QG] : null;
-         GG && GG.clientID == SG.clientID ? (fG && (fG = fG.map(GG.changes, !0)), pG = wG.C.mapEffects(pG, SG.changes), QG++) : (pG = wG.C.mapEffects(pG, SG.changes), SG.effects && (pG = pG.concat(SG.effects)), fG = fG ? fG.compose(SG.changes) : SG.changes)
-       }
-       if (QG && (YG = YG.slice(QG)), YG.length && (fG && (YG = YG.map((GG => {
-           let bG = GG.changes.map(fG);
- ... (4 more removed lines; see GitHub link above)
+       OM = {
+         conn: MM,
+         reason: rM
```

#### 10. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L1635` → after: `L47-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L47-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/298.js#L47-L49) · [Before (L1635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/298.js#L1635)

```diff
-       return GG.field(UG).version
+       var rM;
+       const iM = (null === (rM = OM) || void 0 === rM ? void 0 : rM.conn) === MM ? OM.reason : null;
+       return OM = null, iM
```

#### 11. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L1638` → after: `L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/298.js#L52) · [Before (L1638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/298.js#L1638)

```diff
-   41775: (GG, bG, ZG) => {
+   42081: (MM, rM, iM) => {
```

#### 12. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L1640` → after: `L54-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L54-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/298.js#L54-L55) · [Before (L1640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/298.js#L1640)

```diff
-       e: () => hb
+       b: () => jM,
+       c: () => SM
```

#### 13. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L1642-L1922` → after: `L57-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L57-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/298.js#L57-L60) · [Before (L1642-L1922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/298.js#L1642-L1922)

```diff
-     var wG = ZG(41763);
-     class SG {
-       constructor(GG, bG, ZG, wG, SG, LG, yG, kG, UG) {
-         let YG = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
-           VG = arguments.length > 10 ? arguments[10] : void 0;
-         this.p = GG, this.stack = bG, this.state = ZG, this.reducePos = wG, this.pos = SG, this.score = LG, this.buffer = yG, this.bufferBase = kG, this.curContext = UG, this.lookAhead = YG, this.parent = VG
-       }
-       toString() {
-         return `[${this.stack.filter(((GG,bG)=>bG%3==0)).concat(this.state)}]@${this.pos}${this.score?"!"+this.score:""}`
-       }
-       static start(GG, bG) {
-         let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
-           wG = GG.parser.context;
-         return new SG(GG, [], bG, ZG, ZG, 0, [], 0, wG ? new LG(wG, wG.start) : null, 0, null)
-       }
-       get context() {
- ... (265 more removed lines; see GitHub link above)
+     let OM = {
+       fire: () => {},
+       close: () => {}
+     };
```

#### 14. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L1925-L1949` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/298.js#L63) · [Before (L1925-L1949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/298.js#L1925-L1949)

```diff
-       let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uint16Array;
-       if ("string" != typeof GG) return GG;
-       let ZG = null;
-       for (let wG = 0, SG = 0; wG < GG.length;) {
-         let LG = 0;
-         for (;;) {
-           let bG = GG.charCodeAt(wG++),
-             ZG = !1;
-           if (126 == bG) {
-             LG = 65535;
-             break
-           }
-           bG >= 92 && bG--, bG >= 34 && bG--;
-           let SG = bG - 32;
-           if (SG >= 46 && (SG -= 46, ZG = !0), LG += SG, ZG) break;
-           LG *= 46
- ... (9 more removed lines; see GitHub link above)
+       OM = MM
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/299.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/299.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8)

#### 1. `bundles/bloxd.io/chunks/js/299.js` (Changed code · before: `L4-L28` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/299.js#L4-L6) · [Before (L4-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/299.js#L4-L28)

```diff
-   41727: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       c: () => rb,
-       d: () => aG,
-       ChangeSet: () => cG,
-       f: () => Fb,
-       j: () => nG,
-       l: () => lb,
-       m: () => RG,
-       q: () => vG,
-       s: () => Sb,
-       x: () => nb,
-       v: () => gb,
-       A: () => Pb,
-       C: () => ob,
-       G: () => xG,
- ... (9 more removed lines; see GitHub link above)
+   42165: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       gamePackSource: () => jM
```

#### 2. `bundles/bloxd.io/chunks/js/299.js` (Changed code · before: `L30-L31` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/299.js#L8-L9) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/299.js#L30-L31)

```diff
-     let wG = [],
-       SG = [];
+     var OM = iM(5388),
+       SM = iM(1573);
```

#### 3. `bundles/bloxd.io/chunks/js/299.js` (Changed code · before: `L1070-L2143` → after: `L13-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8) · [After (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/299.js#L13-L14) · [Before (L1070-L2143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/299.js#L1070-L2143)

```diff
-         create(GG) {
-           for (let bG of wG) Yb(GG, bG);
-           return GG.values[yG] = kG(GG), 1
-         },
-         update(GG, ZG) {
-           if (!DG(GG, LG)) return 0;
-           let wG = kG(GG);
-           return bG.compare(wG, GG.values[yG]) ? 0 : (GG.values[yG] = wG, 1)
-         },
-         reconfigure(GG, SG) {
-           let LG = DG(GG, wG),
-             UG = SG.config.facets[bG.id],
-             YG = SG.facet(bG);
-           if (UG && !LG && TG(ZG, UG)) return GG.values[yG] = YG, 0;
-           let VG = kG(GG);
-           return bG.compare(VG, YG) ? (GG.values[yG] = YG, 0) : (GG.values[yG] = VG, 1)
- ... (1058 more removed lines; see GitHub link above)
+         packKey: async rM => (await SM.c.getGame(MM, rM, !0)).customTexturePackKey,
+         fetchPack: OM.d
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/300.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/300.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008)

#### 1. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/300.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/300.js#L2)

```diff
- export const ids = [300];
+ export const ids = [299, 300];
```

#### 2. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L4-L14` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/300.js#L4-L6) · [Before (L4-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/300.js#L4-L14)

```diff
-   41814: GG => {
-     function bG(GG) {
-       var bG = new Error("Cannot find module '" + GG + "'");
-       throw bG.code = "MODULE_NOT_FOUND", bG
-     }
-     bG.keys = () => [], bG.resolve = bG, bG.id = 41814, GG.exports = bG
-   },
-   41876: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       d: () => wG,
-       g: () => SG
+   42165: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       gamePackSource: () => jM
```

#### 3. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L16-L19` → after: `L8-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/300.js#L8-L14) · [Before (L16-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/300.js#L16-L19)

```diff
-     const wG = "Sends one question to the AI",
-       SG = {
-         title: wG,
-         "data-asks-ai": !0
+     var OM = iM(5388),
+       SM = iM(1573);
+ 
+     function jM(MM) {
+       return {
+         packKey: async rM => (await SM.c.getGame(MM, rM, !0)).customTexturePackKey,
+         fetchPack: OM.d
```

#### 4. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L22-L24` → after: `L18-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L18-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/300.js#L18-L24) · [Before (L22-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/300.js#L22-L24)

```diff
-   41793: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       e: () => wG
+   53755: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       fetchGuestContext: () => mM,
+       guestJoinTarget: () => EM,
+       guestJoinWithPack: () => hM,
+       guestPackForGame: () => HM,
+       invalidateGuestTrafficCode: () => lM
```

#### 5. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L26-L4010` → after: `L26-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L26-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/300.js#L26-L37) · [Before (L26-L4010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/300.js#L26-L4010)

```diff
-     const wG = String.raw`
- 	/** The ID of the player running the code.
- 	 *
- 	 * Lobby code usually has nobody running it, so this is null.
- 	 */
- 	declare const myId: string | null
- 	/** The position of the code block or press to code board */
- 	declare const thisPos: [number, number, number]
- 	/** The owner of the current custom lobby */
- 	declare const lobbyOwnerId: string | null
- 
- 	interface Console {
- 		/** Log a message to chat. */
- 		log(message: any): void
- 	}
- 	declare const console: Console
- ... (3969 more removed lines; see GitHub link above)
+     var OM = iM(1202),
+       SM = iM(1573),
+       jM = iM(83),
+       aM = iM(37414),
+       PM = iM(1144),
+       nM = iM(41833),
+       QM = iM(42165),
+       zM = iM(41787);
+ 
+     function LM() {
+       if (jM.featureFlags.useTurnstile) throw new nM.TurnstilePageError
+     }
```

#### 6. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L4012-L4264` → after: `L39-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L39-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/300.js#L39-L40) · [Before (L4012-L4264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/300.js#L4012-L4264)

```diff
- type ClientOptions = {
- 		canChange: boolean
- 		/** How far, in blocks from the eye, the player can break, place and use blocks. 0 to 20. */
- 		blockReach: number
- 		ezBridging: boolean
- 		/** How long an ez bridging block grows before it is solid. 0 places it instantly. Null uses 900ms, or instant in creative. */
- 		ezBridgingGrowMs: number
- 		ezTowering: boolean
- 		/** How long an ez towering block grows before it is solid. 0 places it instantly. Null uses 900ms, or instant in creative. */
- 		ezToweringGrowMs: number
- 		speedMultiplier: number
- 		crouchingSpeed: number
- 		/** you should probably use speed multiplier - this doesn't make much sense on phone */
- 		walkingSpeed: number
- 		/** you should probably use speed multiplier - this doesn't make much sense on phone */
- 		runningSpeed: number
- ... (237 more removed lines; see GitHub link above)
+     function mM() {
+       return (0, PM.fetchAnonymousUserContext)(!0).catch((MM => (console.warn("the guest context didn't load", MM), null)))
```

#### 7. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L4266-L4275` → after: `L42-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L42-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/300.js#L42-L94) · [Before (L4266-L4275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/300.js#L4266-L4275)

```diff
-     bG.keys = () => [], bG.resolve = bG, bG.id = 41857, GG.exports = bG
-   },
-   41809: () => {},
-   41844: () => {},
-   41828: () => {},
-   41863: () => {},
-   41837: () => {},
-   41833: () => {},
-   41824: () => {},
-   41853: () => {}
+     async function HM(MM, rM, iM, OM) {
+       try {
+         const SM = await iM;
+         if (null === SM) return void console.warn(`the texture pack step for ${MM} has no guest context: the pack in play stays`);
+         await rM.packForGame(MM, (0, QM.gamePackSource)(SM), OM)
+       } catch (SM) {
+         console.warn(`the texture pack step for ${MM} failed: the pack in play stays`, SM)
+       }
+     }
+     async function hM(MM, rM, iM, OM) {
+       LM();
+       const SM = mM();
+       return await iM(((rM, iM) => HM(MM, rM, SM, iM))), EM(MM, rM, OM(), await SM)
+     }
+     let JM = null,
+       dM = null;
+ ... (37 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/301.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/301.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad)

#### 1. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/301.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/301.js#L4-L6)

```diff
-   41801: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       e: () => wG
+   42170: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       BloxdInformation: () => HM
```

#### 2. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L8-L7359` → after: `L8-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/301.js#L8-L152) · [Before (L8-L7359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/301.js#L8-L7359)

```diff
-     const wG = String.raw`interface Map<K, V> {
-     clear(): void;
-     /**
-      * @returns true if an element in the Map existed and has been removed, or false if the element does not exist.
-      */
-     delete(key: K): boolean;
-     /**
-      * Executes a provided function once per each key/value pair in the Map, in insertion order.
-      */
-     forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void;
-     /**
-      * Returns a specified element from the Map object. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map.
-      * @returns Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.
-      */
-     get(key: K): V | undefined;
-     /**
- ... (7336 more removed lines; see GitHub link above)
+     var OM = iM(1188),
+       SM = iM(44),
+       jM = iM(83),
+       aM = iM(1520),
+       PM = iM(119),
+       nM = iM(1398),
+       QM = iM(1303);
+     const zM = (0, SM.lazy)((() => Promise.all([iM.e(137), iM.e(702)]).then((() => iM(7016))))),
+       LM = (0, SM.lazy)((() => iM.e(139).then((() => iM(7033)))));
+ 
+     function mM() {
+       return (0, QM.jsxs)("div", {
+         className: "LegalText",
+         children: [(0, QM.jsx)("div", {
+           className: "BloxdInformationHeader FullyFancyText",
+           children: "Security Exploit Bounty Program"
+ ... (129 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/302.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/302.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a)

#### 1. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L4` → after: `L4-L576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L4-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/302.js#L4-L576) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/302.js#L4)

```diff
-   41805: (GG, bG, ZG) => {
+   42200: (MM, rM, iM) => {
+     iM.d(rM, {
+       b: () => EM,
+       f: () => sM,
+       j: () => dM,
+       k: () => yM,
+       l: () => mM,
+       n: () => JM,
+       r: () => hM,
+       v: () => HM
+     });
+     var OM = iM(38040),
+       SM = iM(38173),
+       jM = iM(38074),
+       aM = iM(42208),
+       PM = iM(41328),
+ ... (557 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L6-L13` → after: `L578-L581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L578-L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/302.js#L578-L581) · [Before (L6-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/302.js#L6-L13)

```diff
-       return wG = Object.assign ? Object.assign.bind() : function(GG) {
-         for (var bG = 1; bG < arguments.length; bG++) {
-           var ZG = arguments[bG];
-           for (var wG in ZG)({}).hasOwnProperty.call(ZG, wG) && (GG[wG] = ZG[wG])
-         }
-         return GG
-       }, wG.apply(null, arguments)
-     }
+       WM || (WM = !0, EM.Parse = gM, EM.ParseFromFileAsync = uM, EM.ParseFromSnippetAsync = RM, EM.CreateFromSnippetAsync = pM, EM.CreateAnimation = GM, EM.CreateAndStartAnimation = CM, EM.CreateAndStartHierarchyAnimation = eM, EM.CreateMergeAndStartAnimation = bM, EM.MakeAnimati … [truncated]
+     }
+   },
+   42208: (MM, rM, iM) => {
```

#### 3. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L18-L230` → after: `L585-L628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L585-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/302.js#L585-L628) · [Before (L18-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/302.js#L18-L230)

```diff
-     var SG = !1;
-     try {
-       SG = "undefined" !== typeof localStorage
-     } catch (KG) {}
-     var LG = "undefined" !== typeof process,
-       yG = SG && "function" === typeof localStorage.getItem && localStorage.getItem("DEBUG") || LG && {
-         NODE_ENV: "production",
-         PUBLIC_URL: "",
-         WDS_SOCKET_HOST: void 0,
-         WDS_SOCKET_PATH: void 0,
-         WDS_SOCKET_PORT: void 0,
-         FAST_REFRESH: !0,
-         REACT_APP_DEV_URLS: "false"
-       }.DEBUG ? console.log : function(GG) {
-         return ""
-       };
- ... (197 more removed lines; see GitHub link above)
+     class OM {
+       constructor(MM, rM, iM) {
+         this.name = MM, this.from = rM, this.to = iM
+       }
+       clone() {
+         return new OM(this.name, this.from, this.to)
+       }
+     }
+   },
+   42269: (MM, rM, iM) => {
+     iM.d(rM, {
+       b: () => OM.d,
+       e: () => OM.j
+     });
+     var OM = iM(41250);
+     (0, OM.f)()
+ ... (28 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/303.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/303.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a)

#### 1. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L4-L125586` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/303.js#L4-L5) · [Before (L4-L125586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/303.js#L4-L125586)

```diff
-   41820: (GG, bG, ZG) => {
-     var wG = "/index.js",
-       SG = {};
-     (GG => {
-       var bG = Object.defineProperty,
-         SG = (Object.getOwnPropertyDescriptor, Object.getOwnPropertyNames, Object.prototype.hasOwnProperty, (GG, ZG) => {
-           for (var wG in ZG) bG(GG, wG, {
-             get: ZG[wG],
-             enumerable: !0
-           })
-         }),
-         LG = {};
-       SG(LG, {
-         ANONYMOUS: () => D9,
-         AccessFlags: () => kL,
-         AssertionLevel: () => zZ,
- ... (125567 more removed lines; see GitHub link above)
+   42300: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAABbCAYAAACI0FBrAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAANGSURBVHic7ZwxixNBFMdnJQRCmkCCjYVXHFoIciJoYWWX0m8hYpfCD2FhJ+K3ECu/gIWCRIQUkS1OxEbuYJvj4JqzMCEhmZ15M29297/Z/6+ay+7O7O1/33v7HjOTGQ8P3 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/304.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/304.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc)

#### 1. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L4-L79` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/304.js#L4-L6) · [Before (L4-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/304.js#L4-L79)

```diff
-   41902: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       collectImportedWorldCodePluginNames: () => YG
-     });
-     var wG = ZG(2404),
-       SG = ZG(37200),
-       LG = ZG(41820),
-       yG = ZG.n(LG);
- 
-     function kG(GG) {
-       return yG().isImportDeclaration(GG) && yG().isStringLiteral(GG.moduleSpecifier) && function(GG) {
-         const bG = GG.importClause;
-         if (!bG) return !0;
-         if (bG.isTypeOnly) return !1;
-         const ZG = bG.namedBindings;
-         return !(ZG && !yG().isNamespaceImport(ZG)) || !!bG.name || ZG.elements.some((GG => !GG.isTypeOnly))
- ... (60 more removed lines; see GitHub link above)
+   42307: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAABACAYAAAATffeWAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAALqSURBVFiF3Ze/T1NRFMc/73lb01IKija1TUv5MTgYojEsCungREiYnBxYHHUwLpLwBxhno4thYXDRyWCYHAiwSAyJMUQSWh4lLaQCJrVpoS3U4fU929De+2JNIH6X+3LuP … [truncated]
+   }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/305.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/305.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e)

#### 1. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L4-L413` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/305.js#L4-L5) · [Before (L4-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/305.js#L4-L413)

```diff
-   41879: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       default: () => XG
-     });
-     var wG = ZG(51),
-       SG = ZG(4760),
-       LG = ZG(1621),
-       yG = ZG(1006),
-       kG = ZG.n(yG),
-       UG = ZG(1393),
-       YG = ZG(1151),
-       VG = ZG(4734),
-       pG = ZG(4745),
-       fG = ZG(4750),
-       QG = ZG(1067);
- 
- ... (394 more removed lines; see GitHub link above)
+   42309: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAKGSURBVHic7Zk9bNNAFMf/MZFIwrUBCVVILF26tXNnKrEwIHViYSxLkNgIHxVCCFGgK6KwdOvClK1LRTuXBaF2i5BYkBBDoOGSGAkcBucF+2zHcXzGMX6/xbnn9y7n5/fu3 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/306.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/306.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2)

#### 1. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L4-L108` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/306.js#L4-L5) · [Before (L4-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/306.js#L4-L108)

```diff
-   41904: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       ensureLocalBloxdTypes: () => JG
-     });
-     var wG = ZG(4779),
-       SG = ZG(41801),
-       LG = ZG(41795),
-       yG = ZG(37197),
-       kG = ZG(37200),
-       UG = ZG(37212);
-     const YG = JSON.stringify({
-       name: "@bloxd",
-       types: "index.d.ts"
-     }, null, "\t") + "\n";
- 
-     function VG(GG) {
- ... (89 more removed lines; see GitHub link above)
+   42315: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACCAYAAACddGYaAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAdSURBVAiZYzi+peH/rLqY/z+/3v/PAGMc39LwHwDpAxJzISLv6wAAAABJRU5ErkJggg==","alphaCutoff":0,"vertices":[0.33843,0.44812,0.5765,0.33843, … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/307.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/307.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a)

#### 1. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L4-L72` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/307.js#L4-L5) · [Before (L4-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/307.js#L4-L72)

```diff
-   41972: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       installImageBitmapTextureLoader: () => YG
-     });
-     var wG = ZG(40252),
-       SG = ZG(41979),
-       LG = ZG(3180);
- 
-     function yG(GG, bG) {
-       if ("string" === typeof GG) {
-         const ZG = (0, LG.i)(GG);
-         return ZG ? new Blob([(0, LG.d)(ZG.base64)], {
-           type: ZG.mimeType || bG
-         }) : null
-       }
-       return GG instanceof Blob ? GG : new Blob([GG], {
- ... (53 more removed lines; see GitHub link above)
+   42318: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7dpBDsFAFMbxjnQjqUTcxgHs7DmCvQv0ArbO4AB2DuA2ItHEklXFotR4U9/U/H/LZjrz8nmhXuoyo8NufbPcfzpfTecvVltnuX9gOv0P5KE2KoqR1/qquoQ62 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/308.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/308.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e)

#### 1. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L4-L4405` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/308.js#L4-L5) · [Before (L4-L4405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/308.js#L4-L4405)

```diff
-   42051: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       e: () => LG
-     });
-     var wG = ZG(40484),
-       SG = ZG(42057);
-     class LG {
-       constructor(GG, bG) {
-         let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
-         this.maxDepth = ZG, this.gwG = [], this._maxBlockCapacity = bG || 64, this._selectionContent = new wG.c(1024), this._creationFunc = GG
-       }
-       update(GG, bG, ZG) {
-         SG.b._CreateBlocks(GG, bG, ZG, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
-       }
-       FwG(GG) {
-         for (let bG = 0; bG < this.blocks.length; bG++) {
- ... (4386 more removed lines; see GitHub link above)
+   42326: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAABCAYAAAD0In+KAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAARSURBVAiZYzy+peH/80evGQAbSQWwz2X/bgAAAABJRU5ErkJggg==","alphaCutoff":0,"vertices":[0.7723,1,0.0765,0.7723,1,0.0765,0.7723,1,0.0765 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/309.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/309.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868)

#### 1. `bundles/bloxd.io/chunks/js/309.js` (Changed code · before: `L4-L1379` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/309.js#L4-L5) · [Before (L4-L1379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/309.js#L4-L1379)

```diff
-   42150: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       e: () => LG
-     });
-     var wG = ZG(42141),
-       SG = ZG(42155);
- 
-     function LG(GG) {
-       (0, SG.c)(GG), (0, wG.u)(GG);
-       const bG = GG._surfaces;
-       for (const ZG of bG) ZG._renderingContexts.length = 0, ZG._ro?.disconnect(), ZG._context.unconfigure();
-       bG.length = 0;
-       try {
-         GG._disposeManagedResources?.(), GG._disposeStorageBuffers?.()
-       } finally {
-         GG._device.destroy()
- ... (1360 more removed lines; see GitHub link above)
+   42332: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAABCAYAAAAb4BS0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAWSURBVAiZYzi+peH/rLqY/z+/3v8PADf5CTq4b563AAAAAElFTkSuQmCC","alphaCutoff":0,"vertices":[0,0.53441,0.4375,0,0.53441,0.4375,0,0.53441 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/310.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/310.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d)

#### 1. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L4-L27` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/310.js#L4-L5) · [Before (L4-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/310.js#L4-L27)

```diff
-   42193: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       parseShaderPack: () => wG
-     });
- 
-     function wG(GG) {
-       var bG, ZG;
-       const wG = GG.get("shaderPackUrl"),
-         SG = null !== (bG = GG.get("shaderPackMode")) && void 0 !== bG ? bG : "strict";
-       if (null === wG) {
-         if (GG.has("shaderPackMode")) throw new Error("shaderPackMode= needs shaderPackUrl=");
-         return null
-       }
-       if ("lite" !== GG.get("renderer")) throw new Error("shaderPackUrl= needs renderer=lite: shader packs run on Lite only");
-       if (! function(GG) {
-           return "strict" === GG || "allow" === GG
- ... (8 more removed lines; see GitHub link above)
+   42339: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAAD6CAYAAAD3EYqJAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAgJSURBVHic7Z0xjFVFFIbnkWlkI5FFQaKVmphgtLHaxM5ELbSQECmko0GzlYkNRguMNCRWRGjslkJDsMACrE22spFopVYmBBQwmMXyWeA859135s2ZO2fn/ve88zXsfe/e2 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/311.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/311.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab)

#### 1. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L4-L429` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/311.js#L4-L5) · [Before (L4-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/311.js#L4-L429)

```diff
-   42219: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       d: () => YG
-     });
-     var wG = ZG(37439),
-       SG = ZG(37471),
-       LG = ZG(40379),
-       yG = ZG(37443),
-       kG = ZG(37621);
-     class UG {
-       constructor(GG, bG, ZG, wG) {
-         this.name = GG, this.worldAxisForNormal = bG, this.worldAxisForFileX = ZG, this.worldAxisForFileY = wG
-       }
-     }
-     class YG {
-       static _NearestPow2Floor(GG) {
- ... (410 more removed lines; see GitHub link above)
+   42341: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABYCAYAAABrqdC6AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAWNSURBVHic7Z29axxHGMbflfd0WCccnMQyLpIU0fVpgsAEGUNMIBi5UboETCBN/gA3KUKKNCZ1mkCiwqUL48LY4BAwcSEMxr3sInFhkHDkKHcS573TpLDmtDs378w7H7s7c … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/312.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/312.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986)

#### 1. `bundles/bloxd.io/chunks/js/312.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/312.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/312.js#L2)

```diff
- export const ids = [311, 312];
+ export const ids = [312];
```

#### 2. `bundles/bloxd.io/chunks/js/312.js` (Changed code · before: `L4-L468` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/312.js#L4-L5) · [Before (L4-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/312.js#L4-L468)

```diff
-   42230: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       _DDSTextureLoader: () => LG
-     });
-     var wG = ZG(40379),
-       SG = ZG(42215);
-     class LG {
-       constructor() {
-         this.supportCascades = !0
-       }
-       loadCubeData(GG, bG, ZG, LG) {
-         const yG = bG.CK();
-         let kG, UG = !1,
-           YG = 1e3;
-         if (Array.isArray(GG))
-           for (let wG = 0; wG < GG.length; wG++) {
- ... (449 more removed lines; see GitHub link above)
+   42344: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAqCAYAAADMKGkhAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGXSURBVFiF7ZixTsMwEIb/IAsV1AWJB+ncmWfohjqyVB06MHZgZGCoWBgRW5+hM3OfA5C6VKVCldKhXHQCx47PlmNTvqm1c4r963z3x8XD82sJAZNhv7h/WpQAoDrnxmd32 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/313.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/313.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333)

#### 1. `bundles/bloxd.io/chunks/js/313.js` (Changed code · before: `L4-L463` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/313.js#L4-L5) · [Before (L4-L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/313.js#L4-L463)

```diff
-   42240: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       _ENVTextureLoader: () => CG
-     });
-     var wG = ZG(40319),
-       SG = ZG(37439),
-       LG = ZG(37471),
-       yG = ZG(40379),
-       kG = ZG(40210),
-       UG = ZG(40387),
-       YG = (ZG(40475), ZG(42248)),
-       VG = ZG(39093),
-       pG = (ZG(42262), ZG(42289), ZG(40447));
-     const fG = "image/png",
-       QG = [134, 22, 135, 150, 246, 214, 150, 54];
- 
- ... (444 more removed lines; see GitHub link above)
+   42353: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAABCCAYAAAD+Kj5zAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGTSURBVGiB7Zi9SsRAFIVPTNgF/wrFP0RtbAVhG30CC99kwcbaMm8g+CYp8gY2gmBroxa6xW7hH+ziEpsMZMYwE5OBGYbzdUnuzc6dM5ebPRE6srG5WwDAfP4DAJiMR5Euf … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/314.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/314.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-be57f9ce485cdb591d2d0f0fc89db66bdafe6707ce9a736db48670781427cf65)

#### 1. `bundles/bloxd.io/chunks/js/314.js` (Changed code · before: `L4-L101` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-be57f9ce485cdb591d2d0f0fc89db66bdafe6707ce9a736db48670781427cf65R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-be57f9ce485cdb591d2d0f0fc89db66bdafe6707ce9a736db48670781427cf65) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/314.js#L4-L5) · [Before (L4-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/314.js#L4-L101)

```diff
-   42228: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       _IESTextureLoader: () => kG
-     });
-     var wG = ZG(37471);
- 
-     function SG(GG) {
-       return GG.split(" ").filter((GG => "" !== GG)).map((GG => parseFloat(GG)))
-     }
- 
-     function LG(GG, bG, ZG) {
-       for (; ZG.length !== bG;) {
-         const bG = SG(GG.lines[GG.index++]);
-         ZG.push(...bG)
-       }
-     }
- ... (82 more removed lines; see GitHub link above)
+   42360: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAABCAYAAADTjP5iAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABUSURBVAiZAUkAtv8Br49V/4uzUwALGBYAuqVBALSNUgDp7PkAFiEFAKOlzAB4iKsAHyYmAG1QKwA7MSEAxtLjADMpGgC+4xYA2NjdAOfn5ABBQT8A33Ua4vPiZVMAAAAAS … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/315.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/315.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3b)

#### 1. `bundles/bloxd.io/chunks/js/315.js` (Changed code · before: `L4-L285` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3b) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/315.js#L4-L5) · [Before (L4-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/315.js#L4-L285)

```diff
-   42235: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       _BasisTextureLoader: () => rG
-     });
-     var wG, SG = ZG(40477),
-       LG = ZG(39093),
-       yG = ZG(40857),
-       kG = ZG(40210);
- 
-     function UG() {
-       const GG = 0,
-         bG = 1,
-         ZG = 2,
-         wG = 3,
-         SG = 6,
-         LG = 8,
- ... (266 more removed lines; see GitHub link above)
+   42367: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAABCAYAAAAb4BS0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAVSURBVAiZYxQSFv/PzcPLIC5exgAADicCBfqQrQEAAAAASUVORK5CYII=","alphaCutoff":0,"vertices":[0,0.46559,0.0625,0,0.46559,0.0625,0,0.46559 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/316.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/316.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064)

#### 1. `bundles/bloxd.io/chunks/js/316.js` (Changed code · before: `L4-L2020` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/316.js#L4-L5) · [Before (L4-L2020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/316.js#L4-L2020)

```diff
-   42277: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       b: () => JG
-     });
-     var wG = ZG(37465),
-       SG = ZG(37439),
-       LG = ZG(40857),
-       yG = ZG(40526),
-       kG = ZG(40319),
-       UG = ZG(39093),
-       YG = ZG(40508),
-       VG = ZG(40540),
-       pG = ZG(37448),
-       fG = ZG(40271),
-       QG = ZG(40484),
-       KG = ZG(40573);
- ... (2001 more removed lines; see GitHub link above)
+   42371: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAACCAYAAACQahZdAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAhSURBVAiZY5SVV/nPwMDA8PjhHUYJSbn/DAwMDEwMWAAAq/oFUma3L30AAAAASUVORK5CYII=","alphaCutoff":0.05,"vertices":[0,0.28828,-0.2437,0,0.28 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/317.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/317.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9)

#### 1. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L4-L172` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/317.js#L4-L5) · [Before (L4-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/317.js#L4-L172)

```diff
-   42294: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       _HDRTextureLoader: () => VG
-     });
-     var wG = ZG(37439);
-     class SG {
-       static ConvertPanoramaToCubemap(GG, bG, ZG, wG) {
-         let SG, LG = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
-           yG = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
-         if (!GG) throw "ConvertPanoramaToCubemap: input cannot be null";
-         if (GG.length != bG * ZG * 3) {
-           if (GG.length != bG * ZG * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
-           SG = 4
-         } else SG = 3;
-         return {
-           front: this.CreateCubemapTexture(wG, this.FACE_FRONT, GG, bG, ZG, LG, yG, SG),
- ... (153 more removed lines; see GitHub link above)
+   42377: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAAACCAYAAABxAQMMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAHkSURBVCiR7dLPS1MBAMDx79xmrb23ue1t0+XItTWcK3JF9ENpVgSV6aG6WIegCKyMRpFJy0N2sJnNojqsslZpiESypQghUYcuwkBKokKyeE3JyG0VCelc147d6/svfD+Kq … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/318.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/318.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c)

#### 1. `bundles/bloxd.io/chunks/js/318.js` (Changed code · before: `L4-L458` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/318.js#L4-L5) · [Before (L4-L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/318.js#L4-L458)

```diff
-   42302: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       _KTXTextureLoader: () => KG
-     });
-     var wG = ZG(39093);
-     class SG {
-       constructor(GG, bG) {
-         if (this.data = GG, this.isInvalid = !1, !SG.IsValid(GG)) return this.isInvalid = !0, void wG.c.Error("texture missing KTX identifier");
-         const ZG = Uint32Array.BYTES_PER_ELEMENT,
-           LG = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * ZG),
-           yG = 67305985 === LG.getUint32(0, !0);
-         return this.glType = LG.getUint32(1 * ZG, yG), this.glTypeSize = LG.getUint32(2 * ZG, yG), this.glFormat = LG.getUint32(3 * ZG, yG), this.glInternalFormat = LG.getUint32(4 * ZG, yG), this.glBaseInternalFormat = LG.getUint32(5 * ZG, yG), this.pixelWidth = LG.getUint32(6 *  … [truncated]
-       }
-       uploadLevels(GG, bG) {
-         switch (this.loadType) {
-           case SG.COMPRESSED_2D:
- ... (439 more removed lines; see GitHub link above)
+   42380: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACdSURBVDiNY2RgYGBoilb9zwAFdUtvM6Lz1bUM4XwGBgaGm9fOMwoJi6OIvXv7kpGJgYqAhYGBgUFZFNVMdP7PH9+JMoz6LiMEHty7wYgu9u7tSwwxogzDFgHY1FHfm1++f … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/319.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/319.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9)

#### 1. `bundles/bloxd.io/chunks/js/319.js` (Changed code · before: `L4-L172` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/319.js#L4-L5) · [Before (L4-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/319.js#L4-L172)

```diff
-   42314: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       _TGATextureLoader: () => kG
-     });
-     var wG = ZG(39093);
- 
-     function SG(GG) {
-       let bG = 0;
-       return {
-         id_length: GG[bG++],
-         colormap_type: GG[bG++],
-         image_type: GG[bG++],
-         colormap_index: GG[bG++] | GG[bG++] << 8,
-         colormap_length: GG[bG++] | GG[bG++] << 8,
-         colormap_size: GG[bG++],
-         origin: [GG[bG++] | GG[bG++] << 8, GG[bG++] | GG[bG++] << 8],
- ... (153 more removed lines; see GitHub link above)
+   42383: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAqCAYAAAAeeGN5AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGJSURBVGiB7ZixTsNADIZ/R6YLdGmHToiFpwCeoRJPWinPADwFCzBAhmRpu7TDMdBUJ4FQ7vxfsVA+qUpPah3bv89nnSyX9wEG6nols/nCZKNrG4oNfXh8stig0bWNWG3o+ … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/320.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/320.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363d)

#### 1. `bundles/bloxd.io/chunks/js/320.js` (Changed code · before: `L4-L772` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363d) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/320.js#L4-L5) · [Before (L4-L772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/320.js#L4-L772)

```diff
-   42317: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       ReadExrDataAsync: () => pb,
-       _ExrTextureLoader: () => Vb
-     });
-     var wG = ZG(39093),
-       SG = ZG(37471),
-       LG = ZG(40451);
-     const yG = 4,
-       kG = 4,
-       UG = 1,
-       YG = 2,
-       VG = 8,
-       pG = 65536,
-       fG = pG >> 3,
-       QG = 14,
- ... (753 more removed lines; see GitHub link above)
+   42389: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAABCCAYAAAD+Kj5zAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGRSURBVGiB7Zg/S8QwGMbfXMsVDunm5seQEw5uExRcBNHByek+gpOjn0IQnFzEP4vogZsgePSbuBUR7vCsgyk0sZe0TSAhPL8t6Zumb56+JHkYGTIcXRZERD/fSyIiymYTp … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/321.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/321.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49)

#### 1. `bundles/bloxd.io/chunks/js/321.js` (Changed code · before: `L4-L105` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/321.js#L4-L5) · [Before (L4-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/321.js#L4-L105)

```diff
-   42491: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       d: () => yG
-     });
-     var wG = ZG(40237);
-     const SG = "bumpVertex",
-       LG = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tang … [truncated]
-     wG.e.IncludesShadersStore[SG] || (wG.e.IncludesShadersStore[SG] = LG);
-     const yG = {
-       name: SG,
-       shader: LG
-     }
-   },
-   42399: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       d: () => yG
- ... (86 more removed lines; see GitHub link above)
+   42397: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAACCAYAAABhYU3QAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAA5SURBVAiZY1jfH/rfymnFf9eoff//////nwEHYEEX2NwT+P/lm58MYoqsDIuXnmGo6FjNIK+mxgAAtuUU1Ys7U8AAAAAASUVORK5CYII=","alphaCutoff":0,"vertic … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/322.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/322.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239c)

#### 1. `bundles/bloxd.io/chunks/js/322.js` (Changed code · before: `L4-L405` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239c) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/322.js#L4-L5) · [Before (L4-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/322.js#L4-L405)

```diff
-   42465: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       d: () => yG
-     });
-     var wG = ZG(40237);
-     const SG = "bakedVertexAnimation",
-       LG = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\n#define BVASNAME bakedVertexAnimationSettingsInstanced\n#else\n#define BVASNAME bakedVertexAnimationSettings\n#endif\nfloat VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME. … [truncated]
-     wG.e.IncludesShadersStore[SG] || (wG.e.IncludesShadersStore[SG] = LG);
-     const yG = {
-       name: SG,
-       shader: LG
-     }
-   },
-   42367: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       d: () => yG
- ... (386 more removed lines; see GitHub link above)
+   42404: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAZSURBVAiZY5SVV/kvLl7GwMbHw8D8bwEDAB57A8ZQ9iKrAAAAAElFTkSuQmCC","alphaCutoff":0,"vertices":[0,0.46559,0.0625,0,0.46559,0.0625,0,0.4 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/323.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/323.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3)

#### 1. `bundles/bloxd.io/chunks/js/323.js` (Changed code · before: `L4-L184` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/323.js#L4-L5) · [Before (L4-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/323.js#L4-L184)

```diff
-   42528: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       b: () => yG
-     });
-     var wG = ZG(40237);
-     const SG = "decalFragmentDeclaration",
-       LG = "#ifdef DECAL\nuniform vec4 vDecalInfos;\n#endif\n";
-     wG.e.IncludesShadersStore[SG] || (wG.e.IncludesShadersStore[SG] = LG);
-     const yG = {
-       name: SG,
-       shader: LG
-     }
-   },
-   42656: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       b: () => yG
- ... (165 more removed lines; see GitHub link above)
+   42409: MM => {
+     MM.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAACCAYAAACQahZdAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAhSURBVAiZY7RyWfafgYGB4dieKEYTs1n/GRgYGJgYsAAAxYYGBwfNrmYAAAAASUVORK5CYII=","alphaCutoff":0.05,"vertices":[0,0.28828,-0.2437,0,0.28 … [truncated]
```
