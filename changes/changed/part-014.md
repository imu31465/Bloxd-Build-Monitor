# Changed — Bundle Modifications Report (Part 014 / 069)

- **Updated at**: `2026-11-25T01:02 JST`
- **Part**: `14 / 69` (**300** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 013](part-013.md) · [Part 015 →](part-015.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/225.js` (w4ddu.56408518 → sn3sfj.2522680a · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/225.js` (56 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee)

#### 40. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1184-L1186` → after: `L17193-L17199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR17193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L17193-L17199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/225.js#L17193-L17199) · [Before (L1184-L1186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/225.js#L1184-L1186)

```diff
-               function MC(...CC) {
-                 return CC[pC[12]] = pC[13], CC[pC[1]] & CC[pC[2]] ^ ~CC[pC[1]] & CC[pC[27]]
-               }
+     function Ot(pp) {
+       return ip => {
+         let cp = 0;
+         for (const Op of pp.getInventoryItems())(null === Op || void 0 === Op ? void 0 : Op.name) === ip && (cp += null === Op.amount ? 1 : Math.max(Op.amount, 0));
+         return cp
+       }
+     }
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1188-L1190` → after: `L17201-L17205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR17201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L17201-L17205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/225.js#L17201-L17205) · [Before (L1188-L1190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/225.js#L1188-L1190)

```diff
-               function gC(...CC) {
-                 return CC[pC[12]] = pC[13], CC[pC[1]] & CC[pC[2]] ^ CC[pC[1]] & CC[pC[27]] ^ CC[pC[2]] & CC[pC[27]]
-               }
+     function ot(pp, ip, cp, Op) {
+       pp.getClientOption(ip, "canCraft") && "inventory" !== jo.c.get("openInGameMenuName") && (ct.open(cp, Op.get(), Ot(pp)), To.m.GA("toggleMenu", `inventory|${cp}`))
+     }
+     let It = null,
+       St = !1;
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1192-L1194` → after: `L17207-L17221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR17207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L17207-L17221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/225.js#L17207-L17221) · [Before (L1192-L1194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/225.js#L1192-L1194)

```diff
-               function SC(CC) {
-                 return WC(CC, pC[27]) ^ WC(CC, pC[34]) ^ WC(CC, 22)
-               }
+     function xt(pp) {
+       const ip = MI();
+       pp === It && ip === St || (It = pp, St = ip, (0, fo.u)(function(pp, ip) {
+         const cp = new Map;
+         for (let Op = pp + 1; Op <= op.length; Op++) {
+           const op = zI(Op, pp, ip);
+           if (op)
+             for (const ip of vp(Op).unlocks) cp.set(ip, {
+               ...op,
+               stepsAway: Op - pp
+             })
+         }
+         return cp
+       }(pp, ip)))
+     }
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1196-L1198` → after: `L17223-L17228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR17223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L17223-L17228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/225.js#L17223-L17228) · [Before (L1196-L1198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/225.js#L1196-L1198)

```diff
-               function PC(...CC) {
-                 return CC[pC[12]] = pC[2], WC(CC[pC[1]], pC[22]) ^ WC(CC[pC[1]], 11) ^ WC(CC[pC[1]], 25)
-               }
+     function Lt() {
+       return pp = () => {
+         null !== It && xt(It)
+       }, (0, RI.i)(qI, pp);
+       var pp
+     }
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1200-L1202` → after: `L17230-L17234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR17230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L17230-L17234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/225.js#L17230-L17234) · [Before (L1200-L1202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/225.js#L1200-L1202)

```diff
-               function AC(...CC) {
-                 return CC[pC[12]] = pC[2], WC(CC[pC[1]], pC[24]) ^ WC(CC[pC[1]], pC[109]) ^ NC(CC[pC[1]], pC[13])
-               }
+     function Yt() {
+       return (0, fo.C)(ZI(Object.keys(Mp), nI)), () => {
+         (0, fo.C)([])
+       }
+     }
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1204-L1206` → after: `L17236-L17298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR17236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L17236-L17298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/225.js#L17236-L17298) · [Before (L1204-L1206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/225.js#L1204-L1206)

```diff
-               function xC(...CC) {
-                 return CC[pC[12]] = pC[2], WC(CC[pC[1]], 17) ^ WC(CC[pC[1]], pC[115]) ^ NC(CC[pC[1]], pC[114])
-               }
+     function Dt(pp, ip, cp) {
+       var Op, op;
+       const Ip = pp.getTargetedBlock();
+       if (!Ip || ! function(pp, ip, cp) {
+           if ("Chest" !== ip) return !1;
+           const Op = pp.split("|")[0];
+           if (!Pc(Op) || 0 === Bi[Op].outputSlots.length) return !1;
+           const op = Rw(pp);
+           return cp[0] === op[0] && cp[1] === op[1] && cp[2] === op[2]
+         }(cp, null === (Op = pp.Acp(ip)) || void 0 === Op ? void 0 : Op.name, Ip.normal)) return !1;
+       const [Sp, xp, Lp] = Ip.nY, Yp = pp.getBlockId(Sp, xp, Lp);
+       return 0 === Yp || !0 === (null === (op = Xp.e[Yp]) || void 0 === op ? void 0 : op.canBePlacedOver)
+     }
+     var At = cp(36948);
+     const Pt = new Set(tc.b);
+     class Wt {
+ ... (47 more added lines; see GitHub link above)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1208-L1214` → after: `L17300-L17423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR17300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L17300-L17423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/225.js#L17300-L17423) · [Before (L1208-L1214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/225.js#L1208-L1214)

```diff
-               function JC(...zC) {
-                 var ZC, QC, wC, bC, nC, fC, oC, qC, FC, WC, NC, GC;
-                 for (YC(zC[pC[12]] = pC[27], zC[pC[14]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), zC[-pC[116]] = new Array(pC[73])), YC(zC[pC[1]][zC[pC[2]] >> pC[52]] |= pC[69] << pC[113] - zC[pC[2]] % pC[112],  … [truncated]
-                   for (YC(ZC = zC[pC[14]][pC[1]], QC = zC[pC[14]][pC[2]], wC = zC[pC[14]][pC[27]], bC = zC[pC[14]][pC[13]], nC = zC[pC[14]][pC[18]], fC = zC[pC[14]][pC[52]], oC = zC[pC[14]][pC[22]], qC = zC[pC[14]][pC[24]]), WC = pC[1]; WC < pC[73]; WC++) YC(zC[-pC[116]][WC] = WC … [truncated]
-                   YC(zC[pC[14]][pC[1]] = IC(ZC, zC[pC[14]][pC[1]]), zC[pC[14]][pC[2]] = IC(QC, zC[pC[14]][pC[2]]), zC[pC[14]][pC[27]] = IC(wC, zC[pC[14]][pC[27]]), zC[pC[14]][pC[13]] = IC(bC, zC[pC[14]][pC[13]]), zC[pC[14]][pC[18]] = IC(nC, zC[pC[14]][pC[18]]), zC[pC[14]][pC[52]] … [truncated]
-                 }
-                 return zC[pC[14]]
+     function wt(pp, ip) {
+       const cp = [...pp.baf2CoreBankPaused];
+       for (const [op] of pp.baf2CoreBanked) cp.push(op);
+       for (const Sp of op) {
+         for (const {
+             item: pp
+           }
+           of Sp.cost) cp.push(pp);
+         for (const pp of Sp.newDeposits) cp.push(pp.block);
+         for (const pp of Sp.unlocks) cp.push(pp, Ep(pp));
+         Sp.reward && cp.push(Sp.reward);
+         for (const {
+             item: pp
+           }
+           of null !== (Op = null === (Ip = Sp.charge) || void 0 === Ip ? void 0 : Ip.items) && void 0 !== Op ? Op : []) {
+           var Op, Ip;
+ ... (108 more added lines; see GitHub link above)
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1217-L1218` → after: `L17461-L17523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR17461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L17461-L17523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/225.js#L17461-L17523) · [Before (L1217-L1218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/225.js#L1217-L1218)

```diff
-               function IC(...CC) {
-                 return YC(CC[pC[12]] = pC[27], CC[pC[27]] = (CC[pC[1]] & pC[117]) + (CC[pC[2]] & pC[117]), CC[pC[13]] = (CC[pC[1]] >> pC[95]) + (CC[pC[2]] >> pC[95]) + (CC[pC[27]] >> pC[95])), CC[pC[13]] << pC[95] | CC[pC[27]] & pC[117]
+       function ji() {
+         (0, uo.h)(), ui(null)
+       }
+       let ki = new Set,
+         mi = !1;
+       const Ri = {
+         onCreate: pp => {
+           wp = pp, wp.setGroundArrowStyle({
+             width: .6,
+             alpha: .5,
+             endAtSolidFace: !0
+           });
+           for (const ip of Ci) {
+             const pp = Bi[ip].inputSlots ? Bx(Sp) : lx(ip, Sp, Ep, vp);
+             ei.push((0, Ho.g)(ip, pp))
+           }
+ ... (47 more added lines; see GitHub link above)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1220-L1229` → after: `L17525-L17560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR17525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L17525-L17560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/225.js#L17525-L17560) · [Before (L1220-L1229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/225.js#L1220-L1229)

```diff
-               return YC(CC[pC[12]] = pC[1], CC[-pC[91]] = pC[1], CC[pC[0]] = ""), CC[pC[27]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -16800 … [truncated]
-                 hex: function(...CC) {
-                   return CC[pC[12]] = pC[2], wC(function(...CC) {
-                     return CC[pC[12]] = pC[2], FC(JC(qC(CC[pC[1]]), CC[pC[1]].length * pC[3]))
-                   }(nC(CC[pC[1]])))
-                 },
-                 b64: zC,
-                 any: ZC,
-                 hex_hmac: function(...CC) {
-                   return CC[pC[12]] = pC[27], wC(QC(nC(CC[pC[1]]), nC(CC[pC[2]])))
+             }),
+             onClose: () => {
+               ui(null)
+             }
+           })), ei.push((0, eo.w)({
+             id: "baf2Quests",
+             labelKey: "buildAFactory2Game:questBookTitle",
+             icon: {
+               kind: "item",
+               name: "Book"
+             },
+             className: "Baf2QuestsButton",
+             onClick: () => {
+               ui({
+                 kind: "quests"
+               }), (0, uo.t)()
+ ... (20 more added lines; see GitHub link above)
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1231-L1234` → after: `L17562-L17635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR17562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L17562-L17635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/225.js#L17562-L17635) · [Before (L1231-L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/225.js#L1231-L1234)

```diff
-                 b64_hmac: zC,
-                 any_hmac: ZC
-               }
-             }(), console.log(CC[-pC[93]]))
+                 iconOnly: !0,
+                 disabled: !Sp,
+                 className: "Baf2TutorialButton",
+                 onClick: () => {
+                   pp.next()
+                 }
+               }))
+             };
+             op(ip.get());
+             const Ip = To.m.subscribe(bo, op);
+             return () => {
+               To.m.unsubscribe(Ip), Op()
+             }
+           }(jp, dp)), mi = !1, ei.push(Lt()), ei.push(Yt()), ei.push(function() {
+             const pp = To.m.subscribe(bo, OI),
+               ip = () => {
+ ... (58 more added lines; see GitHub link above)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1236` → after: `L17637-L17882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR17637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L17637-L17882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/225.js#L17637-L17882) · [Before (L1236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/225.js#L1236)

```diff
-           aC(153) + "I" in AC && tC(), rC *= CC[pC[27]][aC(168) + aC(169)]
+           mi || (mi = !0, vp.send("baf2clientready"));
+           const Sp = wp.getPositionView(Ip);
+           Wp.onAfterRender(ip, Sp, Pp), Mp.onAfterRender(ip, Sp, Pp, yp), Dp.run(Pp), Si.onAfterRender(wp, Sp), xi.onAfterRender(wp, Sp), Cp.onAfterRender(wp, Sp), Tp.onAfterRender(wp, Sp), fp.onAfterRender(wp, Ip, Sp), rp.onAfterRender(wp, Ip, Sp), sp.onAfterRender(wp, Ip), Kp.o … [truncated]
+           const Lp = wp.getTargetedBlock();
+           Ii.onAfterRender(wp, Ip, null !== (cp = null === Lp || void 0 === Lp ? void 0 : Lp.KV) && void 0 !== cp ? cp : 0, null !== (Op = null === Lp || void 0 === Lp ? void 0 : Lp.position) && void 0 !== Op ? Op : null), Pi.onAfterRender(wp, ip), qp.onMining(function(pp, ip) {
+             var cp, Op;
+             const op = pp.getMiningBlock();
+             if (!op) return null;
+             const Ip = (0, Xp.d)(pp.getBlockId(op[0], op[1], op[2])),
+               Sp = null !== (cp = null === (Op = pp.Acp(ip)) || void 0 === Op ? void 0 : Op.name) && void 0 !== cp ? cp : null,
+               xp = pp.getItemStat(ip, Ip.split("|")[0], "harvestLevel");
+             return {
+               block: Ip,
+               x: op[0],
+               y: op[1],
+               z: op[2],
+ ... (230 more added lines; see GitHub link above)
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1238-L1239` → after: `L17884-L17920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR17884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L17884-L17920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/225.js#L17884-L17920) · [Before (L1238-L1239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/225.js#L1238-L1239)

```diff
-         let sC = CC[pC[27]][cC(170) + cC(171) + "ss"] * NC;
-         NC < .3 && (sC *= NC), rC > sC && (rC = sC), YC(wC()[cC(172)](FC, FC, rC), CC[pC[18]][cC(173) + cC(174)](FC))
+       };
+       return Ri
+     }
+   },
+   38729: (pp, ip, cp) => {
+     function Op(pp, ip, cp) {
+       const Op = new Set,
+         op = new ResizeObserver(cp),
+         Ip = () => {
+           const ip = new Set(document.querySelectorAll(pp));
+           let Ip = !1;
+           for (const pp of Op) ip.has(pp) || (op.unobserve(pp), Op.delete(pp), Ip = !0);
+           for (const pp of ip) Op.has(pp) || (op.observe(pp), Sp.observe(pp, {
+             attributes: !0,
+             attributeFilter: ["class", "style"]
+           }), Op.add(pp));
+ ... (21 more added lines; see GitHub link above)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1244` → after: `L17927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR17927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L17927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/225.js#L17927) · [Before (L1244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/225.js#L1244)

```diff
-   37496: (CC, zC, ZC) => {
+   38719: (pp, ip, cp) => {
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1246-L1247` → after: `L17929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR17929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L17929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/225.js#L17929) · [Before (L1246-L1247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/225.js#L1246-L1247)

```diff
-       d: () => oC,
-       f: () => fC
+       e: () => xp
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1249-L1252` → after: `L17931-L17933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR17931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L17931-L17933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/225.js#L17931-L17933) · [Before (L1249-L1252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/225.js#L1249-L1252)

```diff
-     var QC = ZC(37504),
-       wC = ZC(1806);
-     const bC = 2,
-       nC = 1,
+     var Op = cp(38712);
+     const op = 5,
+       Ip = [0, 0, 0],
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1254-L1290` → after: `L17935-L17937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR17935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L17935-L17937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/225.js#L17935-L17937) · [Before (L1254-L1290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/225.js#L1254-L1290)

```diff
-         Mq: 1,
-         fluidDrag: -1,
-         fluidDragHorizontal: -1,
-         fluidDragVertical: -1,
-         gravityMultiplier: 2,
-         width: .5,
-         height: 1.8,
-         canRun: !0,
-         jumpMultiplier: 1,
-         upwardImpulseOnUse: 0,
-         canAutoStep: !0,
-         canAutoStepByBlock: {},
-         riderOffset: [0, 0, 0],
-         pose: "standing",
-         effect: null,
-         standingFriction: 5,
- ... (21 more removed lines; see GitHub link above)
+         x: 0,
+         y: 0,
+         distSq: 0
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1293-L1303` → after: `L17940-L17972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR17940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L17940-L17972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/225.js#L17940-L17972) · [Before (L1293-L1303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/225.js#L1293-L1303)

```diff
-     function oC(CC, zC, ZC, fC, oC, qC, FC) {
-       if (oC.speed) return (0, QC.d)(zC, ZC, fC, oC, qC, FC, CC), void(oC.ticksToReachMaxIdleFriction = bC);
-       const WC = fC.isOnGround(),
-         NC = zC.bloxd.getSyncedClientOptions(zC.bloxd.getPlayerReader(ZC)),
-         MC = null === NC ? zC.bloxd.getClientPredictedOption(ZC, "groundFrictionScale") : NC.groundFrictionScale,
-         gC = null === NC ? zC.bloxd.getClientPredictedOption(ZC, "airFrictionScale") : NC.airFrictionScale,
-         SC = WC ? MC : gC,
-         pC = Math.max(nC, SC),
-         PC = oC.ticksToReachMaxIdleFriction / bC,
-         GC = (0, wC.s)(pC, SC, PC);
-       qC.friction = CC.standingFriction * ((null === NC ? zC.bloxd.getClientPredictedOption(ZC, "airMomentumConservation") : NC.airMomentumConservation) ? GC : SC), oC.ticksToReachMaxIdleFriction > 0 && oC.ticksToReachMaxIdleFriction--
+     function xp(pp, ip, cp, xp, Lp, Yp) {
+       let [Dp, Ap, Pp] = xp;
+       const Wp = (Dp + .5 - cp[0]) ** 2 + (Ap - cp[1]) ** 2 + (Pp + .5 - cp[2]) ** 2;
+       let yp = null;
+       Wp <= Yp ** 2 && (Ip[0] = Dp + .5, Ip[1] = Ap + Lp, Ip[2] = Pp + .5, yp = ip.projectWorldPosToViewport(Ip));
+       const Up = null !== yp && yp.x > -op && yp.x < 100 + op && yp.y > -op && yp.y < 100 + op;
+       return (0, Op.d)(pp, !Up), Up ? (Sp.x = yp.x, Sp.y = yp.y, Sp.distSq = Wp, Sp) : null
+     }
+   },
+   38712: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Sp,
+       d: () => Ip
+     });
+     const Op = new WeakMap;
+ 
+ ... (17 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/226.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/226.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843)

#### 1. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L4-L23` → after: `L4-L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L4-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/226.js#L4-L153) · [Before (L4-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/226.js#L4-L23)

```diff
-   39617: (CC, zC, ZC) => {
-     ZC.r(zC), ZC.d(zC, {
-       getBlockFaces: () => NC,
-       getIngameIconUrl: () => SC,
-       getItemIconUrl: () => gC,
-       getItemTextureUrl: () => MC,
-       getParticleTextureUrl: () => pC
-     });
-     var QC = ZC(4386),
-       wC = ZC(36897),
-       bC = ZC(9188),
-       nC = ZC(3140);
-     const fC = new Set,
-       oC = new Set;
-     let qC = null;
- 
- ... (4 more removed lines; see GitHub link above)
+   36841: pp => {
+     pp.exports = {
+       aliceblue: [240, 248, 255],
+       antiquewhite: [250, 235, 215],
+       aqua: [0, 255, 255],
+       aquamarine: [127, 255, 212],
+       azure: [240, 255, 255],
+       beige: [245, 245, 220],
+       bisque: [255, 228, 196],
+       black: [0, 0, 0],
+       blanchedalmond: [255, 235, 205],
+       blue: [0, 0, 255],
+       blueviolet: [138, 43, 226],
+       brown: [165, 42, 42],
+       burlywood: [222, 184, 135],
+       cadetblue: [95, 158, 160],
+ ... (134 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L26-L31` → after: `L167-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L167-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/226.js#L167-L168) · [Before (L26-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/226.js#L26-L31)

```diff
-     function WC(CC, zC) {
-       try {
-         return (0, bC.getDefaultTexture)(CC, zC).url
-       } catch {
-         return FC(CC), null
-       }
+     function Yp(pp, ip, cp) {
+       return Math.min(Math.max(ip, pp), cp)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L36-L44` → after: `L177-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L177-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/226.js#L177-L186) · [Before (L36-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/226.js#L36-L44)

```diff
-       const bC = wC.m[CC];
-       if (!bC || bC.itemTexture || !bC.textureInfo) return null;
-       const {
-         textureInfo: fC,
-         texturePerSide: oC
-       } = bC, qC = CC => {
-         return "string" === typeof(zC = oC && Array.isArray(fC) ? fC[oC[CC]] : fC) ? WC(zC, nC.j.BLOCK) : zC && "object" === typeof zC && "animTextures" in zC ? WC((0, QC.j)(zC), nC.j.BLOCK) : null;
-         var zC
-       }, FC = qC(2);
+       switch (pp.substring(0, 3).toLowerCase()) {
+         case "hsl":
+           ip = Lp.get.hsl(pp), cp = "hsl";
+           break;
+         case "hwb":
+           ip = Lp.get.hwb(pp), cp = "hwb";
+           break;
+         default:
+           ip = Lp.get.rgb(pp), cp = "rgb"
+       }
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L46-L48` → after: `L188-L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L188-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/226.js#L188-L189) · [Before (L46-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/226.js#L46-L48)

```diff
-         top: FC,
-         left: null !== (zC = qC(4)) && void 0 !== zC ? zC : FC,
-         right: null !== (ZC = qC(0)) && void 0 !== ZC ? ZC : FC
+         model: cp,
+         value: ip
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L52-L55` → after: `L260-L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L260-L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/226.js#L260-L475) · [Before (L52-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/226.js#L52-L55)

```diff
-     function MC(CC) {
-       var zC;
-       const ZC = wC.m[CC];
-       return WC(null !== (zC = null === ZC || void 0 === ZC ? void 0 : ZC.itemTexture) && void 0 !== zC ? zC : "string" === typeof(null === ZC || void 0 === ZC ? void 0 : ZC.textureInfo) ? ZC.textureInfo : CC, nC.j.ITEM)
+     function Lp(pp, ip) {
+       if (!(this instanceof Lp)) return new Lp(pp, ip);
+       if (ip && ip in Ip && (ip = null), ip && !(ip in op)) throw new Error("Unknown model: " + ip);
+       let cp, Yp;
+       if (null == pp) this.model = "rgb", this.color = [0, 0, 0], this.valpha = 1;
+       else if (pp instanceof Lp) this.model = pp.model, this.color = [...pp.color], this.valpha = pp.valpha;
+       else if ("string" === typeof pp) {
+         const ip = Op.get(pp);
+         if (null === ip) throw new Error("Unable to parse color from string: " + pp);
+         this.model = ip.model, Yp = op[this.model].channels, this.color = ip.value.slice(0, Yp), this.valpha = "number" === typeof ip.value[Yp] ? ip.value[Yp] : 1
+       } else if (pp.length > 0) {
+         this.model = ip || "rgb", Yp = op[this.model].channels;
+         const cp = Array.prototype.slice.call(pp, 0, Yp);
+         this.color = Pp(cp, Yp), this.valpha = "number" === typeof pp[Yp] ? pp[Yp] : 1
+       } else if ("number" === typeof pp) this.model = "rgb", this.color = [pp >> 16 & 255, pp >> 8 & 255, 255 & pp], this.valpha = 1;
+       else {
+ ... (200 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L59-L60` → after: `L479-L483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L479-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/226.js#L479-L483) · [Before (L59-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/226.js#L59-L60)

```diff
-       var zC, ZC;
-       return wC.m[CC] ? null !== (zC = null === (ZC = NC(CC)) || void 0 === ZC ? void 0 : ZC.top) && void 0 !== zC ? zC : MC(CC) : null
+       return function(ip) {
+         return function(pp, ip) {
+           return Number(pp.toFixed(ip))
+         }(ip, pp)
+       }
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L63-L64` → after: `L486-L493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L486-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/226.js#L486-L493) · [Before (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/226.js#L63-L64)

```diff
-     function SC(CC) {
-       return WC(CC, nC.j.ICON)
+     function Dp(pp, ip, cp) {
+       pp = Array.isArray(pp) ? pp : [pp];
+       for (const Op of pp)(xp[Op] || (xp[Op] = []))[ip] = cp;
+       return pp = pp[0],
+         function(Op) {
+           let op;
+           return void 0 !== Op ? (cp && (Op = cp(Op)), op = this[pp](), op.color[ip] = Op, op) : (op = this[pp]().color[ip], cp && (op = cp(op)), op)
+         }
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L68-L71` → after: `L497-L498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L497-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/226.js#L497-L498) · [Before (L68-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/226.js#L68-L71)

```diff
-       try {
-         return ZC(3308)(`./${CC}.png`)
-       } catch {
-         return FC(CC), null
+       return function(ip) {
+         return Math.max(0, Math.min(pp, ip))
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L75-L78` → after: `L508-L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L508-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/226.js#L508-L511) · [Before (L75-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/226.js#L75-L78)

```diff
-   36938: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       e: () => QC
-     });
+   36859: (pp, ip, cp) => {
+     const Op = cp(36864),
+       op = {};
+     for (const Sp of Object.keys(Op)) op[Op[Sp]] = Sp;
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L80-L179` → after: `L513-L515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L513-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/226.js#L513-L515) · [Before (L80-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/226.js#L80-L179)

```diff
-       "skyblock:forged:astral-astral-astral": {
-         name: "Heart of the Cosmos",
-         lore: "Three shards of the night sky, forged as one. The stars answer whoever holds it.",
-         damageMultiplier: 1.8,
-         cooldownMultiplier: .8,
-         ability: "starfall"
-       },
-       "skyblock:forged:astral-moonstone-sanguine": {
-         name: "Eclipse Edge",
-         lore: "Moonlight over starlight over blood: the sky goes dark wherever it is drawn.",
-         damageMultiplier: 1.7,
-         cooldownMultiplier: .81,
-         ability: "eclipseField"
-       },
-       "skyblock:forged:astral-diamond-moonstone": {
-         name: "Starcutter",
- ... (84 more removed lines; see GitHub link above)
+       rgb: {
+         channels: 3,
+         labels: "rgb"
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L181-L196` → after: `L517-L519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L517-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/226.js#L517-L519) · [Before (L181-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/226.js#L181-L196)

```diff
-       "skyblock:forged:diamond-moonstone-gold": {
-         name: "Jeweller's Pride",
-         lore: "Too pretty to fight with. Fight with it anyway.",
-         damageMultiplier: 1.24,
-         cooldownMultiplier: .91,
-         ability: "gildedEdge"
-       },
-       "skyblock:forged:gold-gold-gold": {
-         name: "King's Ransom",
-         lore: "Worth more than the treasure it guards.",
-         damageMultiplier: 1.18,
-         cooldownMultiplier: .91,
-         ability: "gildedEdge",
-         traits: {
-           coins: 2.5
-         }
+       hsl: {
+         channels: 3,
+         labels: "hsl"
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L198-L207` → after: `L521-L539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L521-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/226.js#L521-L539) · [Before (L198-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/226.js#L198-L207)

```diff
-       "skyblock:forged:gold-moonstone-gold": {
-         name: "Midas Moon",
-         lore: "Mobs it fells seem to rattle with coins.",
-         damageMultiplier: 1.18,
-         cooldownMultiplier: .92,
-         ability: "gildedEdge",
-         traits: {
-           coins: 2,
-           bossBane: .6
-         }
+       hsv: {
+         channels: 3,
+         labels: "hsv"
+       },
+       hwb: {
+         channels: 3,
+         labels: "hwb"
+       },
+       cmyk: {
+         channels: 4,
+         labels: "cmyk"
+       },
+       xyz: {
+         channels: 3,
+         labels: "xyz"
+       },
+ ... (3 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L209-L235` → after: `L541-L732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L541-L732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/226.js#L541-L732) · [Before (L209-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/226.js#L209-L235)

```diff
-       "skyblock:forged:iron-iron-iron": {
-         name: "Old Faithful",
-         lore: "It has never let anyone down. It never will.",
-         damageMultiplier: 1.15,
-         cooldownMultiplier: .94,
-         ability: "warcry"
-       },
-       "skyblock:forged:iron-wood-wood": {
-         name: "Militia Blade",
-         lore: "Handed out at the outpost gate when the rift first opened.",
-         damageMultiplier: 1.09,
-         cooldownMultiplier: .97,
-         ability: "warcry"
-       },
-       "skyblock:forged:stone-stone-stone": {
-         name: "Quarryman's Cleaver",
- ... (11 more removed lines; see GitHub link above)
+       lch: {
+         channels: 3,
+         labels: "lch"
+       },
+       hex: {
+         channels: 1,
+         labels: ["hex"]
+       },
+       keyword: {
+         channels: 1,
+         labels: ["keyword"]
+       },
+       ansi16: {
+         channels: 1,
+         labels: ["ansi16"]
+       },
+ ... (176 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/227.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/227.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2)

#### 1. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/227.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/227.js#L4)

```diff
-   36968: (CC, zC, ZC) => {
+   36948: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L7-L8` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/227.js#L9-L10) · [Before (L7-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/227.js#L7-L8)

```diff
-       g: () => QC,
-       i: () => wC
+       i: () => Ai,
+       l: () => Pi
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L10-L15` → after: `L12-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L12-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/227.js#L12-L136) · [Before (L10-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/227.js#L10-L15)

```diff
-     const QC = 1 / 2.2,
-       wC = 2.2;
-     Math.sqrt(5);
-     let bC = .001
-   },
-   36991: (CC, zC, ZC) => {
+     const Op = JSON.parse('{"src":["/sounds/generatedSprites/gunSemiAutomatic.aef27960ef.ogg","/sounds/generatedSprites/gunSemiAutomatic.e56594fab5.m4a","/sounds/generatedSprites/gunSemiAutomatic.d3e434f4d0.mp3","/sounds/generatedSprites/gunSemiAutomatic.97d6a47358.ac3"],"sprite" … [truncated]
+       op = JSON.parse('{"src":["/sounds/generatedSprites/gunSubmachineGun.9d869e4ca3.ogg","/sounds/generatedSprites/gunSubmachineGun.8736ce9068.m4a","/sounds/generatedSprites/gunSubmachineGun.0a429c7e98.mp3","/sounds/generatedSprites/gunSubmachineGun.1db2897c09.ac3"],"sprite":{"s … [truncated]
+       Ip = JSON.parse('{"src":["/sounds/generatedSprites/gunPistol.7432a47272.ogg","/sounds/generatedSprites/gunPistol.adec2d9f75.m4a","/sounds/generatedSprites/gunPistol.a9f647182b.mp3","/sounds/generatedSprites/gunPistol.f363b9fa6d.ac3"],"sprite":{"pistol_cock_01":[0,510],"pist … [truncated]
+       Sp = JSON.parse('{"src":["/sounds/generatedSprites/gunRifle.ca54b877ed.ogg","/sounds/generatedSprites/gunRifle.94dfb28886.m4a","/sounds/generatedSprites/gunRifle.f2eb64407a.mp3","/sounds/generatedSprites/gunRifle.d268c1da8d.ac3"],"sprite":{"rifle_cock_01":[0,705.30612244897 … [truncated]
+       xp = JSON.parse('{"src":["/sounds/generatedSprites/gunMisc.35b4609d1c.ogg","/sounds/generatedSprites/gunMisc.acc63e7fe9.m4a","/sounds/generatedSprites/gunMisc.4403caaad2.mp3","/sounds/generatedSprites/gunMisc.97552f11dc.ac3"],"sprite":{"bullet_shell_bounce_general_07":[0,82 … [truncated]
+       Lp = JSON.parse('{"src":["/sounds/generatedSprites/gunShotgun.4e0220339e.ogg","/sounds/generatedSprites/gunShotgun.137d0e6b6f.m4a","/sounds/generatedSprites/gunShotgun.8b1144b235.mp3","/sounds/generatedSprites/gunShotgun.0b25a6370a.ac3"],"sprite":{"shotgun_cock_01":[0,914.2 … [truncated]
+       Yp = JSON.parse('{"src":["/sounds/generatedSprites/dig.affb4a6f05.ogg","/sounds/generatedSprites/dig.082c5b232c.m4a","/sounds/generatedSprites/dig.71feb10d5c.mp3","/sounds/generatedSprites/dig.4913c53dc2.ac3"],"sprite":{"cloth1":[0,1671.8367346938776],"cloth2":[1773.3333333 … [truncated]
+       Dp = JSON.parse('{"src":["/sounds/generatedSprites/step.52076ddc3a.ogg","/sounds/generatedSprites/step.d6260ef2cc.m4a","/sounds/generatedSprites/step.6e5286b3a8.mp3","/sounds/generatedSprites/step.cfb5f3dd8f.ac3"],"sprite":{"hit1":[0,557.2789115646258],"hit2":[660,650.15873 … [truncated]
+       Ap = JSON.parse('{"src":["/sounds/generatedSprites/randomBeep.7b90315654.ogg","/sounds/generatedSprites/randomBeep.0e88f6aa33.m4a","/sounds/generatedSprites/randomBeep.47ff5e799a.mp3","/sounds/generatedSprites/randomBeep.444034b8b7.ac3"],"sprite":{"beep":[100,2455.510204081 … [truncated]
+       Pp = JSON.parse('{"src":["/sounds/generatedSprites/randomCannon.f9d64818ea.ogg","/sounds/generatedSprites/randomCannon.52f7576d74.m4a","/sounds/generatedSprites/randomCannon.bde162aee8.mp3","/sounds/generatedSprites/randomCannon.4877805969.ac3"],"sprite":{"cannonFire1":[100 … [truncated]
+       Wp = JSON.parse('{"src":["/sounds/generatedSprites/randomCash.8ff82dcd92.ogg","/sounds/generatedSprites/randomCash.a86426509f.m4a","/sounds/generatedSprites/randomCash.48929d75f1.mp3","/sounds/generatedSprites/randomCash.f687b943c4.ac3"],"sprite":{"cashRegister":[100,3819.6 … [truncated]
+       yp = JSON.parse('{"src":["/sounds/generatedSprites/randomExp.fa5a4c9798.ogg","/sounds/generatedSprites/randomExp.a7e2faf290.m4a","/sounds/generatedSprites/randomExp.b4baff1a37.mp3","/sounds/generatedSprites/randomExp.4974715bbd.ac3"],"sprite":{"exp_collect":[100,1009.206349 … [truncated]
+       Up = JSON.parse('{"src":["/sounds/generatedSprites/randomFallsmall.e0ec9ce0a7.ogg","/sounds/generatedSprites/randomFallsmall.a1f24b70c2.m4a","/sounds/generatedSprites/randomFallsmall.bcbd5fef60.mp3","/sounds/generatedSprites/randomFallsmall.a3b7d06594.ac3"],"sprite":{"falls … [truncated]
+       wp = JSON.parse('{"src":["/sounds/generatedSprites/randomItems.380c31a312.ogg","/sounds/generatedSprites/randomItems.6ae69434b9.m4a","/sounds/generatedSprites/randomItems.85b5c2f034.mp3","/sounds/generatedSprites/randomItems.cdadb8aa52.ac3"],"sprite":{"bow":[100,500],"bucke … [truncated]
+       vp = JSON.parse('{"src":["/sounds/generatedSprites/randomFire.06f418fc54.ogg","/sounds/generatedSprites/randomFire.7c5564dd14.m4a","/sounds/generatedSprites/randomFire.f61e3ab1f3.mp3","/sounds/generatedSprites/randomFire.5869bbefc8.ac3"],"sprite":{"fireBurn":[100,2827.39229 … [truncated]
+       tp = JSON.parse('{"src":["/sounds/generatedSprites/randomFirecracker.ddc99cbc73.ogg","/sounds/generatedSprites/randomFirecracker.128308b436.m4a","/sounds/generatedSprites/randomFirecracker.d5635f7e7d.mp3","/sounds/generatedSprites/randomFirecracker.e5afa15901.ac3"],"sprite" … [truncated]
+ ... (109 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L17-L56` → after: `L138-L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L138-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/227.js#L138-L144) · [Before (L17-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/227.js#L17-L56)

```diff
-       return parseInt(CC.toString().replace(/\W/g, ""))
-     }
- 
-     function wC(CC, zC) {
-       let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
-       return Math.abs(CC - zC) <= ZC
-     }
- 
-     function bC(CC, zC, ZC) {
-       let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
-       return CC < zC - QC || CC > ZC + QC
-     }
- 
-     function nC(CC, zC) {
-       return CC === zC ? CC : Math.random() * (zC - CC) + CC
-     }
- ... (24 more removed lines; see GitHub link above)
+       if (Yi[pp]) return yi(Yi[pp]);
+       {
+         const ip = [];
+         for (const cp in Si)
+           for (const Op in Si[cp].sprite) Op.startsWith(pp) && ip.push(Op);
+         return Yi[pp] = ip, yi(ip)
+       }
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L60-L83` → after: `L148-L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L148-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/227.js#L148-L149) · [Before (L60-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/227.js#L60-L83)

```diff
-       let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-         ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
-       return Math.min(ZC, Math.max(zC, CC))
-     }
- 
-     function MC(CC) {
-       return CC -= 2 * Math.PI * Math.floor((CC + Math.PI) / (2 * Math.PI))
-     }
- 
-     function gC(CC) {
-       const zC = CC.toString(16);
-       return CC <= 15 ? ("0" + zC).toUpperCase() : zC.toUpperCase()
-     }
- 
-     function SC(CC) {
-       if (Math.log2) return Math.floor(Math.log2(CC));
- ... (8 more removed lines; see GitHub link above)
+       const ip = Li[pp];
+       if (void 0 === ip) throw new Error(`Invalid sound name ${pp} (not in any sprite sheet)`);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L88-L223` → after: `L154-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L154-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/227.js#L154-L155) · [Before (L88-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/227.js#L88-L223)

```diff
-       return CC - Math.floor(CC / zC) * zC
-     }
- 
-     function PC(CC, zC, ZC) {
-       return (CC - zC) / (ZC - zC)
-     }
- 
-     function GC(CC, zC, ZC) {
-       return CC * (ZC - zC) + zC
-     }
- 
-     function RC(CC, zC) {
-       let ZC = pC(zC - CC, 360);
-       return ZC > 180 && (ZC -= 360), ZC
-     }
- 
- ... (120 more removed lines; see GitHub link above)
+       if (!(pp in Si)) throw new Error("Invalid spriteTrack name");
+       return ip in Si[pp].sprite
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/228.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/228.js` (56 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3)

#### 1. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L3` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/228.js#L2) · [Before (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/228.js#L3)

```diff
- export const ids = [228, 235];
+ export const ids = [228];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L5-L25` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/228.js#L4-L7) · [Before (L5-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/228.js#L5-L25)

```diff
-   38116: CC => {
-     CC.exports = function(CC) {
-       return null != CC && null != CC.constructor && "function" === typeof CC.constructor.isBuffer && CC.constructor.isBuffer(CC)
-     }
-   },
-   38096: (CC, zC, ZC) => {
-     var QC = ZC(38105),
-       wC = ZC(38109),
-       bC = ZC(38116);
-     ZC.g.__TYPEDARRAY_POOL || (ZC.g.__TYPEDARRAY_POOL = {
-       UINT8: wC([32, 0]),
-       UINT16: wC([32, 0]),
-       UINT32: wC([32, 0]),
-       INT8: wC([32, 0]),
-       INT16: wC([32, 0]),
-       INT32: wC([32, 0]),
- ... (5 more removed lines; see GitHub link above)
+   39842: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => Op,
+       g: () => op
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L27-L59` → after: `L9-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L9-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/228.js#L9-L12) · [Before (L27-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/228.js#L27-L59)

```diff
-     var nC = "undefined" !== typeof Uint8ClampedArray,
-       fC = ZC.g.__TYPEDARRAY_POOL;
-     fC.UINT8C || (fC.UINT8C = wC([32, 0])), fC.BUFFER || (fC.BUFFER = wC([32, 0]));
-     var oC = fC.DATA,
-       qC = fC.BUFFER;
- 
-     function FC(CC) {
-       if (CC) {
-         var zC = CC.length || CC.byteLength,
-           ZC = QC.log2(zC);
-         oC[ZC].push(CC)
-       }
-     }
- 
-     function WC(CC) {
-       CC = QC.nextPow2(CC);
- ... (17 more removed lines; see GitHub link above)
+     const Op = "The world isn't loaded, so no blocks can be seen.",
+       op = "The world isn't loaded, so nothing in it can be seen."
+   },
+   39281: (pp, ip, cp) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L61` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/228.js#L14) · [Before (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/228.js#L61)

```diff
-       return new Int8Array(WC(CC), 0, CC)
+       return !(!pp.lobbyLeaderboardInfo && !pp.lobbyManage)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L65` → after: `L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/228.js#L28) · [Before (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/228.js#L65)

```diff
-       return new Int16Array(WC(2 * CC), 0, CC)
+       Op = pp
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L68-L69` → after: `L31-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/228.js#L31-L32) · [Before (L68-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/228.js#L68-L69)

```diff
-     function PC(CC) {
-       return new Int32Array(WC(4 * CC), 0, CC)
+     function Ip(pp, ip) {
+       return Op(pp, ip)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L73` → after: `L51-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L51-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/228.js#L51-L53) · [Before (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/228.js#L73)

```diff
-       return new Float32Array(WC(4 * CC), 0, CC)
+       var ip, cp;
+       const Op = (0, Ip.k)();
+       return Op ? null === (ip = (0, op.d)(Op.api, pp[0], pp[1], pp[2])) || void 0 === ip || null === (cp = ip.persisted) || void 0 === cp ? void 0 : cp.shared : void 0
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L77` → after: `L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/228.js#L57) · [Before (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/228.js#L77)

```diff
-       return new Float64Array(WC(8 * CC), 0, CC)
+       return `${pp[0]},${pp[1]},${pp[2]}`
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L80-L81` → after: `L63-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/228.js#L63-L64) · [Before (L80-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/228.js#L80-L81)

```diff
-     function AC(CC) {
-       return nC ? new Uint8ClampedArray(WC(CC), 0, CC) : NC(CC)
+     function Up() {
+       return yp
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L85-L93` → after: `L68-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L68-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/228.js#L68-L79) · [Before (L85-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/228.js#L85-L93)

```diff
-       return new DataView(WC(CC), 0, CC)
-     }
-     zC.free = function(CC) {
-       if (bC(CC)) qC[QC.log2(CC.length)].push(CC);
-       else {
-         if ("[object ArrayBuffer]" !== Object.prototype.toString.call(CC) && (CC = CC.buffer), !CC) return;
-         var zC = CC.length || CC.byteLength,
-           ZC = 0 | QC.log2(zC);
-         oC[ZC].push(CC)
+       const ip = null !== Wp && Wp.key === Ap(pp.pos) ? Wp.type : null;
+       if (null === ip) return pp;
+       let cp = null;
+       if ("Iron" === ip) {
+         const {
+           cachedPasskey: ip,
+           ...Op
+         } = vp(pp.pos);
+         cp = {
+           Zx: null !== ip && void 0 !== ip ? ip : [0, 0, 0, 0],
+           ...Op
+         }
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L95-L128` → after: `L81-L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L81-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/228.js#L81-L84) · [Before (L95-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/228.js#L95-L128)

```diff
-     }, zC.freeUint8 = zC.freeUint16 = zC.freeUint32 = zC.freeInt8 = zC.freeInt16 = zC.freeInt32 = zC.freeFloat32 = zC.freeFloat = zC.freeFloat64 = zC.freeDouble = zC.freeUint8Clamped = zC.freeDataView = function(CC) {
-       FC(CC.buffer)
-     }, zC.freeArrayBuffer = FC, zC.freeBuffer = function(CC) {
-       qC[QC.log2(CC.length)].push(CC)
-     }, zC.malloc = function(CC, zC) {
-       if (void 0 === zC || "arraybuffer" === zC) return WC(CC);
-       switch (zC) {
-         case "uint8":
-           return NC(CC);
-         case "uint16":
-           return MC(CC);
-         case "uint32":
-           return gC(CC);
-         case "int8":
-           return SC(CC);
-         case "int16":
- ... (18 more removed lines; see GitHub link above)
+       return {
+         ...pp,
+         type: ip,
+         ironChest: cp
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L134-L135` → after: `L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/228.js#L87) · [Before (L134-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/228.js#L134-L135)

```diff
-   },
-   38105: (CC, zC) => {
+ 
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L137-L172` → after: `L89-L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L89-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/228.js#L89-L189) · [Before (L137-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/228.js#L137-L172)

```diff
-       var zC = 32;
-       return (CC &= -CC) && zC--, 65535 & CC && (zC -= 16), 16711935 & CC && (zC -= 8), 252645135 & CC && (zC -= 4), 858993459 & CC && (zC -= 2), 1431655765 & CC && (zC -= 1), zC
-     }
-     zC.INT_BITS = 32, zC.INT_MAX = 2147483647, zC.INT_MIN = -1 << 31, zC.sign = function(CC) {
-       return (CC > 0) - (CC < 0)
-     }, zC.abs = function(CC) {
-       var zC = CC >> 31;
-       return (CC ^ zC) - zC
-     }, zC.min = function(CC, zC) {
-       return zC ^ (CC ^ zC) & -(CC < zC)
-     }, zC.max = function(CC, zC) {
-       return CC ^ (CC ^ zC) & -(CC < zC)
-     }, zC.isPow2 = function(CC) {
-       return !(CC & CC - 1) && !!CC
-     }, zC.log2 = function(CC) {
-       var zC, ZC;
- ... (20 more removed lines; see GitHub link above)
+       const ip = Dp(pp),
+         cp = null === ip || void 0 === ip ? void 0 : ip.ownerDbId,
+         Op = function(pp) {
+           var ip;
+           let cp = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Dp(pp);
+           const Op = Ap(pp),
+             op = Pp.get(Op);
+           return op ? op.lastOpened < (null !== (ip = null === cp || void 0 === cp ? void 0 : cp.passkeyLastUpdated) && void 0 !== ip ? ip : 0) ? (Pp.delete(Op), null) : [...op.Zx] : null
+         }(pp, ip);
+       return void 0 === cp ? {
+         cachedPasskey: Op
+       } : {
+         ownerDbId: cp,
+         cachedPasskey: Op
+       }
+     }(0, Yp.h)(Sp.d, (pp => {
+ ... (85 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L189-L207` → after: `L192-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L192-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/228.js#L192-L200) · [Before (L189-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/228.js#L189-L207)

```diff
-   38091: (CC, zC, ZC) => {
-     CC.exports = function(CC, zC, ZC) {
-       switch (arguments.length) {
-         case 1:
-           return QC = [], qC(wC = CC, wC, FC, !0), QC;
-         case 2:
-           return "function" === typeof zC ? qC(CC, CC, zC, !0) : function(CC, zC) {
-             return QC = [], qC(CC, zC, FC, !1), QC
-           }(CC, zC);
-         case 3:
-           return qC(CC, zC, ZC, !1);
-         default:
-           throw new Error("box-intersect: Invalid arguments")
-       }
-       var wC
-     };
- ... (3 more removed lines; see GitHub link above)
+   40857: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => Lp,
+       f: () => Sp,
+       i: () => xp
+     });
+     var Op = cp(40769),
+       op = cp(4886),
+       Ip = cp(40783);
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L209-L212` → after: `L202-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L202-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/228.js#L202-L205) · [Before (L209-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/228.js#L209-L212)

```diff
-     function fC(CC, zC) {
-       for (var ZC = 0; ZC < CC; ++ZC)
-         if (!(zC[ZC] <= zC[ZC + CC])) return !0;
-       return !1
+     function Sp() {
+       var pp;
+       const ip = null === (pp = (0, Ip.k)()) || void 0 === pp ? void 0 : pp.api.localId;
+       return void 0 === ip || ip === Op.Nc ? null : String(ip)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L215-L221` → after: `L208-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L208-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/228.js#L208-L218) · [Before (L215-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/228.js#L215-L221)

```diff
-     function oC(CC, zC, ZC, QC) {
-       for (var wC = 0, bC = 0, nC = 0, oC = CC.length; nC < oC; ++nC) {
-         var qC = CC[nC];
-         if (!fC(zC, qC)) {
-           for (var FC = 0; FC < 2 * zC; ++FC) ZC[wC++] = qC[FC];
-           QC[bC++] = nC
-         }
+     function xp(pp) {
+       const ip = (0, Ip.k)();
+       if (null !== ip) return pp(ip);
+       let cp = null;
+       const Op = (0, op.p)((() => {
+         const ip = (0, Ip.k)();
+         null !== ip && null === cp && (Op(), cp = pp(ip))
+       }));
+       return () => {
+         var pp;
+         Op(), null === (pp = cp) || void 0 === pp || pp()
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L226-L244` → after: `L222-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L222-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/228.js#L222-L235) · [Before (L226-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/228.js#L226-L244)

```diff
-     function qC(CC, zC, ZC, QC) {
-       var fC = CC.length,
-         qC = zC.length;
-       if (!(fC <= 0 || qC <= 0)) {
-         var FC = CC[0].length >>> 1;
-         if (!(FC <= 0)) {
-           var WC, NC = wC.mallocDouble(2 * FC * fC),
-             MC = wC.mallocInt32(fC);
-           if ((fC = oC(CC, FC, NC, MC)) > 0) {
-             if (1 === FC && QC) bC.init(fC), WC = bC.sweepComplete(FC, ZC, 0, fC, NC, MC, 0, fC, NC, MC);
-             else {
-               var gC = wC.mallocDouble(2 * FC * qC),
-                 SC = wC.mallocInt32(qC);
-               (qC = oC(zC, FC, gC, SC)) > 0 && (bC.init(fC + qC), WC = 1 === FC ? bC.sweepBipartite(FC, ZC, 0, fC, NC, MC, 0, qC, gC, SC) : nC(FC, ZC, QC, fC, NC, MC, qC, gC, SC), wC.free(gC), wC.free(SC))
-             }
-             wC.free(NC), wC.free(MC)
- ... (3 more removed lines; see GitHub link above)
+     function Lp(pp, ip, cp) {
+       return {
+         current: () => {
+           const cp = (0, Ip.k)();
+           return null === cp ? ip : pp(cp)()
+         },
+         watch: ip => xp((Op => {
+           const op = pp(Op);
+           let Ip = op();
+           return ip(Ip), cp((() => {
+             const pp = op();
+             pp !== Ip && (Ip = pp, ip(pp))
+           }))
+         }))
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L248-L249` → after: `L247-L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L247-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/228.js#L247-L249) · [Before (L248-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/228.js#L248-L249)

```diff
-     function FC(CC, zC) {
-       QC.push([CC, zC])
+     function Sp() {
+       var pp, ip;
+       return null !== (pp = null === (ip = (0, Op.k)()) || void 0 === ip ? void 0 : ip.itemBridgeSources) && void 0 !== pp ? pp : Ip.d
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L266-L283` → after: `L253-L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L253-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/228.js#L253-L258) · [Before (L266-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/228.js#L266-L283)

```diff
-       var zC = "bruteForce" + (CC ? "Full" : "Partial"),
-         QC = [],
-         nC = NC.slice();
-       CC || nC.splice(3, 0, wC);
-       var fC = ["function " + zC + "(" + nC.join() + "){"];
- 
-       function oC(zC, wC) {
-         var nC = function(CC, zC, QC) {
-           var wC = "bruteForce" + (CC ? "Red" : "Blue") + (zC ? "Flip" : "") + (QC ? "Full" : ""),
-             nC = ["function ", wC, "(", NC.join(), "){", "var ", bC, "=2*", ZC, ";"],
-             fC = "for(var i=rs,rp=es*rs;i<re;++i,rp+=es){var x0=rb[ax+rp],x1=rb[ax+rp+d],xi=ri[i];",
-             oC = "for(var j=bs,bp=es*bs;j<be;++j,bp+=es){var y0=bb[ax+bp]," + (QC ? "y1=bb[ax+bp+d]," : "") + "yi=bi[j];";
-           return CC ? nC.push(fC, "Q", ":", oC) : nC.push(oC, "Q", ":", fC), QC ? nC.push("if(y1<x0||x1<y0)continue;") : zC ? nC.push("if(y0<=x0||x1<y0)continue;") : nC.push("if(y0<x0||x1<y0)continue;"), nC.push("for(var k=ax+1;k<d;++k){var r0=rb[k+rp],r1=rb[k+d+rp],b0=bb[k+bp],b … [truncated]
-             name: wC,
-             code: nC.join("")
-           }
- ... (2 more removed lines; see GitHub link above)
+       return {
+         current: () => Sp().states[pp].current(),
+         watch: ip => (0, op.i)((cp => {
+           const Op = cp.itemBridgeSources.states[pp];
+           return ip(Op.current()), Op.watch(ip)
+         }))
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L396-L411` → after: `L262-L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L262-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/228.js#L262-L264) · [Before (L396-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/228.js#L396-L411)

```diff
-     function vC(CC, zC, ZC, QC, wC, bC, nC, fC, oC, qC, FC) {
-       var WC = 2 * CC,
-         NC = oC * WC,
-         MC = qC[NC + zC];
-       CC: for (var gC = wC, SC = wC * WC; gC < bC; ++gC, SC += WC) {
-         var pC = nC[SC + zC],
-           PC = nC[SC + zC + CC];
-         if (!(MC < pC || PC < MC) && (!QC || MC !== pC)) {
-           for (var GC, RC = fC[gC], AC = zC + 1; AC < CC; ++AC) {
-             pC = nC[SC + AC], PC = nC[SC + AC + CC];
-             var xC = qC[NC + AC],
-               JC = qC[NC + AC + CC];
-             if (PC < xC || JC < pC) continue CC
-           }
-           if (void 0 !== (GC = QC ? ZC(FC, RC) : ZC(RC, FC))) return GC
-         }
+     function Lp(pp) {
+       return {
+         watch: ip => (0, op.i)((cp => cp.itemBridgeSources.events[pp].watch(ip)))
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L414-L434` → after: `L267-L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L267-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/228.js#L267-L297) · [Before (L414-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/228.js#L414-L434)

```diff
- 
-     function eC(CC, zC, ZC, QC, wC, bC, nC, fC, oC, qC) {
-       var FC = 2 * CC,
-         WC = fC * FC,
-         NC = oC[WC + zC];
-       CC: for (var MC = QC, gC = QC * FC; MC < wC; ++MC, gC += FC) {
-         var SC = nC[MC];
-         if (SC !== qC) {
-           var pC = bC[gC + zC],
-             PC = bC[gC + zC + CC];
-           if (!(NC < pC || PC < NC)) {
-             for (var GC = zC + 1; GC < CC; ++GC) {
-               pC = bC[gC + GC], PC = bC[gC + GC + CC];
-               var RC = oC[WC + GC],
-                 AC = oC[WC + GC + CC];
-               if (PC < RC || AC < pC) continue CC
- ... (5 more removed lines; see GitHub link above)
+     const Yp = {
+       states: {
+         inventory: xp("inventory"),
+         hotbar: xp("hotbar"),
+         crafting: xp("crafting"),
+         heldItemAim: xp("heldItemAim")
+       },
+       events: {
+         hotbarSlotRequested: Lp("hotbarSlotRequested"),
+         hotbarScrolled: Lp("hotbarScrolled"),
+         numberKeyPressed: Lp("numberKeyPressed"),
+         inventoryDropRequested: Lp("inventoryDropRequested"),
+         chestToggled: Lp("chestToggled"),
+         chestRefreshed: Lp("chestRefreshed"),
+         inventorySynced: Lp("inventorySynced"),
+         enchantingTableOpened: Lp("enchantingTableOpened")
+ ... (15 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L438-L482` → after: `L301-L305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L301-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/228.js#L301-L305) · [Before (L438-L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/228.js#L438-L482)

```diff
-   38150: (CC, zC, ZC) => {
-     CC.exports = function(CC, zC, ZC, nC, fC, oC) {
-       if (nC <= ZC + 1) return ZC;
-       var qC = ZC,
-         FC = nC,
-         WC = nC + ZC >>> 1,
-         NC = 2 * CC,
-         MC = WC,
-         gC = fC[NC * WC + zC];
-       for (; qC < FC;) {
-         if (FC - qC < wC) {
-           bC(CC, zC, qC, FC, fC, oC), gC = fC[NC * WC + zC];
-           break
-         }
-         var SC = FC - qC,
-           pC = Math.random() * SC + qC | 0,
- ... (29 more removed lines; see GitHub link above)
+   40865: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => xp
+     });
+     var Op = cp(39842);
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L484-L489` → after: `L307-L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L307-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/228.js#L307-L446) · [Before (L484-L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/228.js#L484-L489)

```diff
-     function bC(CC, zC, ZC, QC, wC, bC) {
-       for (var nC = 2 * CC, fC = nC * (ZC + 1) + zC, oC = ZC + 1; oC < QC; ++oC, fC += nC)
-         for (var qC = wC[fC], FC = oC, WC = nC * (oC - 1); FC > ZC && wC[WC + zC] > qC; --FC, WC -= nC) {
-           for (var NC = WC, MC = WC + nC, gC = 0; gC < nC; ++gC, ++NC, ++MC) {
-             var SC = wC[NC];
-             wC[NC] = wC[MC], wC[MC] = SC
+     function op(pp) {
+       return {
+         current: () => pp,
+         watch: () => () => {}
+       }
+     }
+ 
+     function Ip() {}
+     const Sp = Object.freeze([0, 0, 0]),
+       xp = {
+         states: {
+           health: op({
+             health: null,
+             maxHealth: null,
+             shield: null,
+             maxShield: null
+ ... (124 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L491-L492` → after: `L448-L544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L448-L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/228.js#L448-L544) · [Before (L491-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/228.js#L491-L492)

```diff
-           var pC = bC[FC];
-           bC[FC] = bC[FC - 1], bC[FC - 1] = pC
+         },
+         commands: {
+           selectHotbarSlot: Ip,
+           removeInventoryItem: () => !1,
+           swapInventorySlots: () => !1,
+           moveInventoryItem: () => !1,
+           quickMoveInventoryItem: () => null,
+           closeChest: Ip,
+           setInventoryOpen: Ip,
+           changeIronChestPasskey: Ip,
+           dragReplayCamera: Ip,
+           applyTemporaryThirdPerson: Ip,
+           holdEmoteWheel: Ip,
+           recordFlyingMiddleText: Ip,
+           focusCrafting: Ip,
+           craftRecipe: () => ({
+ ... (81 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L523-L541` → after: `L547-L569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L547-L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/228.js#L547-L569) · [Before (L523-L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/228.js#L523-L541)

```diff
-     }
- 
-     function QC(CC, zC, ZC) {
-       zC *= 2;
-       var QC = ZC[CC *= 2],
-         wC = ZC[CC + 1];
-       ZC[CC] = ZC[zC], ZC[CC + 1] = ZC[zC + 1], ZC[zC] = QC, ZC[zC + 1] = wC
-     }
- 
-     function wC(CC, zC, ZC) {
-       zC *= 2, ZC[CC *= 2] = ZC[zC], ZC[CC + 1] = ZC[zC + 1]
-     }
- 
-     function bC(CC, zC, ZC, QC) {
-       zC *= 2, ZC *= 2;
-       var wC = QC[CC *= 2],
- ... (3 more removed lines; see GitHub link above)
+   },
+   40778: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => Rp,
+       g: () => mp,
+       j: () => qp,
+       m: () => kp,
+       o: () => ep
+     });
+     var Op = cp(39425),
+       op = cp(1234),
+       Ip = cp(1982),
+       Sp = cp(1996),
+       xp = cp(3400),
+       Lp = cp(37019),
+       Yp = cp(1349),
+ ... (7 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L543-L544` → after: `L571-L581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L571-L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/228.js#L571-L581) · [Before (L543-L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/228.js#L543-L544)

```diff
-     function nC(CC, zC, ZC, QC, wC) {
-       zC *= 2, wC[CC *= 2] = wC[zC], wC[zC] = ZC, wC[CC + 1] = wC[zC + 1], wC[zC + 1] = QC
+     function vp(pp) {
+       const ip = new Map,
+         cp = cp => {
+           if ("string" !== typeof cp) return;
+           let Op = ip.get(cp);
+           return void 0 === Op && (Op = pp(cp), void 0 !== Op && ip.set(cp, Op)), Op
+         };
+       return new Proxy({}, {
+         get: (pp, ip) => cp(ip),
+         has: (pp, ip) => void 0 !== cp(ip)
+       })
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L547-L551` → after: `L584-L586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L584-L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/228.js#L584-L586) · [Before (L547-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/228.js#L547-L551)

```diff
-     function fC(CC, zC, ZC) {
-       zC *= 2;
-       var QC = ZC[CC *= 2],
-         wC = ZC[zC];
-       return !(QC < wC) && (QC !== wC || ZC[CC + 1] > ZC[zC + 1])
+     function tp(pp) {
+       const ip = (0, xp.c)(pp);
+       return void 0 !== ip && (0, xp.d)(ip) === pp
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L554-L557` → after: `L589-L607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L589-L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/228.js#L589-L607) · [Before (L554-L557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/228.js#L554-L557)

```diff
-     function oC(CC, zC, ZC, QC) {
-       var wC = QC[CC *= 2];
-       return wC < zC || wC === zC && QC[CC + 1] < ZC
-     }
+     function Hp(pp) {
+       var ip;
+       const cp = null === (ip = (0, Dp.k)()) || void 0 === ip ? void 0 : ip.tables;
+       if (void 0 === cp || !tp(pp)) return;
+       const Op = {
+           displayName: cp.getDisplayName(pp)
+         },
+         op = cp.getItemStat(pp, "description");
+       void 0 !== op && null !== op && (Op.description = op);
+       const {
+         rootName: Ip
+       } = cp.getMetaInfo(pp);
+       Ip !== pp && (Op.rootName = Ip);
+       const Sp = cp.getItemStat(pp, "armourReduction");
+       return void 0 !== Sp && null !== Sp && (Op.armourReduction = Sp), Op
+     }(0, Dp.y)((pp => {
+ ... (3 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L559-L673` → after: `L609-L624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L609-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/228.js#L609-L624) · [Before (L559-L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/228.js#L559-L673)

```diff
-     function qC(CC, FC, WC) {
-       var NC = (FC - CC + 1) / 6 | 0,
-         MC = CC + NC,
-         gC = FC - NC,
-         SC = CC + FC >> 1,
-         pC = SC - NC,
-         PC = SC + NC,
-         GC = MC,
-         RC = pC,
-         AC = SC,
-         xC = PC,
-         JC = gC,
-         IC = CC + 1,
-         iC = FC - 1,
-         vC = 0;
-       fC(GC, RC, WC) && (vC = GC, GC = RC, RC = vC), fC(xC, JC, WC) && (vC = xC, xC = JC, JC = vC), fC(GC, AC, WC) && (vC = GC, GC = AC, AC = vC), fC(RC, AC, WC) && (vC = RC, RC = AC, AC = vC), fC(GC, xC, WC) && (vC = GC, GC = xC, xC = vC), fC(AC, xC, WC) && (vC = AC, AC = xC, xC … [truncated]
- ... (99 more removed lines; see GitHub link above)
+     function ep() {
+       return Boolean(Ip.c.get("useInventory") && Ip.c.get("useFullInventory"))
+     }
+     let jp = null;
+     const kp = {
+         inventory: function() {
+           const pp = Up.e.states.inventory;
+           let ip = null;
+           const cp = pp => {
+             var cp;
+             return null === pp.chest ? pp : ((null === (cp = ip) || void 0 === cp ? void 0 : cp.from) === pp && ip.chestVersion === (0, yp.b)() || (ip = {
+               from: pp,
+               chestVersion: (0, yp.b)(),
+               view: {
+                 ...pp,
+                 chest: (0, yp.h)(pp.chest)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L675-L678` → after: `L626-L632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L626-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/228.js#L626-L632) · [Before (L675-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/228.js#L675-L678)

```diff
-             0 === EC ? pC(oC, qC, YC++, lC) : 1 === EC ? pC(FC, WC, dC++, lC) : 2 === EC && pC(NC, MC, mC++, lC)
-           } else {
-             lC = (HC >> 1) - 1;
-             0 === EC ? SC(oC, qC, YC--, lC) : 1 === EC ? SC(FC, WC, dC--, lC) : 2 === EC && SC(NC, MC, mC--, lC)
+             }), ip.view)
+           };
+           return {
+             current: () => cp(pp.current()),
+             watch: ip => pp.watch((pp => {
+               ip(cp(pp))
+             }))
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L680-L721` → after: `L634-L646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L634-L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/228.js#L634-L646) · [Before (L680-L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/228.js#L680-L721)

```diff
-         }
-       },
-       scanBipartite: function(CC, zC, ZC, QC, wC, fC, FC, WC, NC, MC, PC, GC) {
-         var RC = 0,
-           AC = 2 * CC,
-           xC = zC,
-           JC = zC + CC,
-           IC = 1,
-           iC = 1;
-         QC ? iC = nC : IC = nC;
-         for (var vC = wC; vC < fC; ++vC) {
-           var eC = vC + IC,
-             hC = AC * vC;
-           gC[RC++] = FC[hC + xC], gC[RC++] = -eC, gC[RC++] = FC[hC + JC], gC[RC++] = eC
-         }
-         for (vC = NC; vC < MC; ++vC) {
- ... (26 more removed lines; see GitHub link above)
+         }(),
+         crafting: Up.e.states.crafting,
+         stationItems: {
+           current() {
+             var pp;
+             return (null === (pp = jp) || void 0 === pp ? void 0 : pp.namesVersion) !== (0, xp.g)() && (jp = {
+               namesVersion: (0, xp.g)(),
+               items: {
+                 enchantable: vp((pp => {
+                   const ip = (0, xp.c)(pp);
+                   return void 0 !== ip && null !== wp && wp.enchantmentPerksOf(ip).length > 0 || void 0
+                 })),
+                 salvageable: vp((pp => !(!tp(pp) || null === (0, Lp.b)(pp)) || void 0))
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L723-L768` → after: `L648-L665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L648-L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/228.js#L648-L665) · [Before (L723-L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/228.js#L723-L768)

```diff
-             }
-           } else SC(oC, qC, dC--, mC - IC)
-         }
-       },
-       scanComplete: function(CC, zC, ZC, QC, wC, fC, qC, FC, WC, NC, MC) {
-         for (var SC = 0, pC = 2 * CC, PC = zC, GC = zC + CC, RC = QC; RC < wC; ++RC) {
-           var AC = RC + nC,
-             xC = pC * RC;
-           gC[SC++] = fC[xC + PC], gC[SC++] = -AC, gC[SC++] = fC[xC + GC], gC[SC++] = AC
-         }
-         for (RC = FC; RC < WC; ++RC) {
-           AC = RC + 1;
-           var JC = pC * RC;
-           gC[SC++] = NC[JC + PC], gC[SC++] = -AC
-         }
-         var IC = SC >>> 1;
- ... (30 more removed lines; see GitHub link above)
+             }), jp.items
+           },
+           watch: () => () => {}
+         },
+         itemInfo: function() {
+           let pp = null;
+           const ip = () => {
+             var ip;
+             return (null === (ip = pp) || void 0 === ip ? void 0 : ip.namesVersion) !== (0, xp.g)() && (pp = {
+               namesVersion: (0, xp.g)(),
+               infos: vp(Hp)
+             }), pp.infos
+           };
+           return {
+             current: ip,
+             watch: cp => (0, Sp.v)((Op => {
+ ... (2 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L770-L864` → after: `L667-L675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L667-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/228.js#L667-L675) · [Before (L770-L864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/228.js#L770-L864)

```diff
-         }
-       }
-     };
-     var QC = ZC(38096),
-       wC = ZC(38105),
-       bC = ZC(38128),
-       nC = 1 << 28,
-       fC = 1024,
-       oC = QC.mallocInt32(fC),
-       qC = QC.mallocInt32(fC),
-       FC = QC.mallocInt32(fC),
-       WC = QC.mallocInt32(fC),
-       NC = QC.mallocInt32(fC),
-       MC = QC.mallocInt32(fC),
-       gC = QC.mallocDouble(8192);
- 
- ... (79 more removed lines; see GitHub link above)
+         }(),
+         creativeVisibility: (0, Sp.p)((function() {
+           const pp = {};
+           for (const op of null !== (ip = null === (cp = wp) || void 0 === cp ? void 0 : cp.creativeItemIds()) && void 0 !== ip ? ip : []) {
+             var ip, cp, Sp, Lp;
+             const Yp = (0, xp.d)(op);
+             if (void 0 === Yp) continue;
+             const Dp = null !== (Sp = Ip.c.get((0, Op.d)(Yp, "showInCreativeInven"))) && void 0 !== Sp ? Sp : null === (Lp = wp) || void 0 === Lp ? void 0 : Lp.showInCreativeInvenOf(op);
+             "boolean" === typeof Dp && (pp[Yp] = Dp)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L866-L869` → after: `L677-L679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L677-L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/228.js#L677-L679) · [Before (L866-L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/228.js#L866-L869)

```diff
-           CC.length = 0
-         }(fC.multiComps), fC.removals.length && function(CC) {
-           for (var zC = 0; zC < CC.length; zC++) {
-             CC[zC].flush()
+           return {
+             publicLobby: (0, op.I)((0, Yp.d)().lobbyName),
+             shownInGame: pp
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L871-L971` → after: `L681-L724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L681-L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/228.js#L681-L724) · [Before (L871-L971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/228.js#L871-L971)

```diff
-           CC.length = 0
-         }(fC.removals)
-       }
-       this.PS = wC, this._systems = bC, this._renderSystems = nC, this.dL = function(zC) {
-         var QC = ZC++;
-         return Array.isArray(zC) && zC.forEach((zC => CC.lH(QC, zC))), QC
-       }, this.deleteEntity = function(zC) {
-         return Object.keys(wC).forEach((CC => {
-           wC[CC].hash[zC] && oC(zC, CC)
-         })), CC
-       }, this.HzC = function(CC) {
-         if (!CC) throw new Error("Missing component definition");
-         var ZC = CC.name;
-         if (!ZC) throw new Error("Component definition must have a name property.");
-         if ("string" !== typeof ZC) throw new Error("Component name must be a string.");
-         if ("" === ZC) throw new Error("Component name must be a non-empty string.");
- ... (85 more removed lines; see GitHub link above)
+         }), ["connectedGameChanged"], (0, Sp.i)("ShowInCreativeInven")),
+         fullInventory: (0, Sp.p)(ep, [], (0, Sp.l)("useInventory", "useFullInventory"))
+       },
+       mp = {
+         inventoryDropRequested: Up.e.events.inventoryDropRequested,
+         chestToggled: Up.e.events.chestToggled,
+         chestRefreshed: Up.e.events.chestRefreshed,
+         inventorySynced: Up.e.events.inventorySynced,
+         enchantingTableOpened: Up.e.events.enchantingTableOpened
+       },
+       Rp = {
+         removeInventoryItem: Up.e.commands.removeInventoryItem,
+         swapInventorySlots: Up.e.commands.swapInventorySlots,
+         moveInventoryItem: Up.e.commands.moveInventoryItem,
+         quickMoveInventoryItem: Up.e.commands.quickMoveInventoryItem,
+         closeChest: Up.e.commands.closeChest,
+ ... (28 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L973-L988` → after: `L726-L728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L726-L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/228.js#L726-L728) · [Before (L973-L988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/228.js#L973-L988)

```diff
-         return CC
-       }, this.removeMultiComponent = function(ZC, QC, bC) {
-         var nC = zC[QC],
-           oC = wC[QC];
-         if (!oC) throw new Error(`Unknown component: ${QC}.`);
-         if (!nC.multi) throw new Error("removeMultiComponent called on non-multi component");
-         return function(CC, zC, ZC, QC) {
-           var wC = ZC.hash[CC];
-           if (wC) {
-             var bC = wC[QC];
-             bC && (wC[QC] = null, zC.lY && zC.lY(CC, bC), fC.multiComps.push({
-               entID: CC,
-               data: ZC
-             }), qC())
-           }
-         }(ZC, nC, oC, bC), CC
+       },
+       qp = {
+         enchantingOffer: Up.e.queries.enchantingOffer
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L993-L1004` → after: `L731-L740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L731-L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/228.js#L731-L740) · [Before (L993-L1004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/228.js#L993-L1004)

```diff
-   38072: CC => {
-     function zC(CC, zC) {
-       var ZC = CC._map[zC];
-       if (delete CC.hash[zC], delete CC._map[zC], ZC === CC.list.length - 1) CC.list.pop(), CC._idList.pop();
-       else {
-         var QC = CC.list.pop();
-         CC.list[ZC] = QC;
-         var wC = CC._idList.pop();
-         CC._idList[ZC] = wC, CC._map[wC] = ZC
-       }
-     }
-     CC.exports = class {
+   40842: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Op,
+       d: () => Dp,
+       f: () => Sp,
+       g: () => op,
+       i: () => xp,
+       l: () => Yp
+     });
+     class Op extends Error {
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L1006-L1026` → after: `L742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/228.js#L742) · [Before (L1006-L1026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/228.js#L1006-L1026)

```diff
-         this.list = [], this.hash = {}, this._map = {}, this._idList = [], this._pendingRemovals = []
-       }
-       add(CC, zC) {
-         if ("number" === typeof this._map[CC]) {
-           var ZC = this._map[CC];
-           this.hash[CC] = zC, this.list[ZC] = zC, this._idList[ZC] = CC
-         } else this._map[CC] = this.list.length, this.hash[CC] = zC, this.list.push(zC), this._idList.push(CC)
-       }
-       remove(CC) {
-         var zC = this._map[CC];
-         this.hash[CC] = null, this.list[zC] = null, this._pendingRemovals.push(CC)
-       }
-       dispose() {
-         this.list = null, this.hash = null, this._map = null, this._idList = null, this._pendingRemovals.length = 0
-       }
-       flush() {
- ... (5 more removed lines; see GitHub link above)
+         super(...arguments), this.name = "CoreCorruption"
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L1087-L1091` → after: `L747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/228.js#L747) · [Before (L1087-L1091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/228.js#L1087-L1091)

```diff
-       var zC = !1;
-       if (null != CC && "function" != typeof CC.toString) try {
-         zC = !!(CC + "")
-       } catch (ZC) {}
-       return zC
+       return pp instanceof RangeError && /call stack/i.test(pp.message) || pp instanceof Error && "InternalError" === pp.name && /recursion/i.test(pp.message)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L1095-L1099` → after: `L752-L753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L752-L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/228.js#L752-L753) · [Before (L1095-L1099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/228.js#L1095-L1099)

```diff
-       var zC = -1,
-         ZC = Array(CC.size);
-       return CC.forEach((function(CC, QC) {
-         ZC[++zC] = [QC, CC]
-       })), ZC
+       var ip;
+       return pp instanceof WebAssembly.RuntimeError || pp instanceof Op || op(pp) && Ip.test(null !== (ip = pp.stack) && void 0 !== ip ? ip : "")
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L1103-L1105` → after: `L757-L758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L757-L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/228.js#L757-L758) · [Before (L1103-L1105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/228.js#L1103-L1105)

```diff
-       return function(ZC) {
-         return CC(zC(ZC))
-       }
+       if (Sp(pp)) throw pp;
+       console.error(ip, pp)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L1108-L1113` → after: `L761-L762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L761-L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/228.js#L761-L762) · [Before (L1108-L1113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/228.js#L1108-L1113)

```diff
-     function LC(CC) {
-       var zC = -1,
-         ZC = Array(CC.size);
-       return CC.forEach((function(CC) {
-         ZC[++zC] = CC
-       })), ZC
+     function Lp(pp, ip, cp, op, Ip) {
+       if (ip % op !== 0 || ip + cp > pp.byteLength) throw new Op(`${Ip}: ${cp} bytes at ${ip}, ${op}-aligned, outside ${pp.byteLength} bytes of memory`)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L1151-L1157` → after: `L765-L766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L765-L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/228.js#L765-L766) · [Before (L1151-L1157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/228.js#L1151-L1157)

```diff
-     function hz(CC) {
-       var zC = -1,
-         ZC = CC ? CC.length : 0;
-       for (this.clear(); ++zC < ZC;) {
-         var QC = CC[zC];
-         this.set(QC[0], QC[1])
-       }
+     function Yp(pp, ip, cp, Op, op) {
+       return 0 === cp ? null : (Lp(ip, cp, Op * pp.BYTES_PER_ELEMENT, pp.BYTES_PER_ELEMENT, op), new pp(ip, cp, Op))
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L1160-L1166` → after: `L769-L770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L769-L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/228.js#L769-L770) · [Before (L1160-L1166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/228.js#L1160-L1166)

```diff
-     function Kz(CC) {
-       var zC = -1,
-         ZC = CC ? CC.length : 0;
-       for (this.clear(); ++zC < ZC;) {
-         var QC = CC[zC];
-         this.set(QC[0], QC[1])
-       }
+     function Dp(pp, ip, cp, Op, op) {
+       return 0 === ip ? null : (Lp(pp, ip, cp, Op, op), new DataView(pp, ip, cp))
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L1168-L1174` → after: `L772-L789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L772-L789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/228.js#L772-L789) · [Before (L1168-L1174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/228.js#L1168-L1174)

```diff
- 
-     function Yz(CC) {
-       var zC = -1,
-         ZC = CC ? CC.length : 0;
-       for (this.clear(); ++zC < ZC;) {
-         var QC = CC[zC];
-         this.set(QC[0], QC[1])
+   },
+   40783: (pp, ip, cp) => {
+     cp.d(ip, {
+       C: () => yp,
+       e: () => Op,
+       i: () => vp,
+       k: () => Up,
+       n: () => wp,
+       o: () => Pp,
+       q: () => Wp,
+       u: () => Dp,
+       y: () => Ap
+     });
+     class Op extends Error {
+       constructor(pp) {
+         super(`the join's code did not load: ${pp instanceof Error?pp.message:String(pp)}`, {
+ ... (2 more added lines; see GitHub link above)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L1177-L1202` → after: `L792-L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L792-L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/228.js#L792-L796) · [Before (L1177-L1202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/228.js#L1177-L1202)

```diff
- 
-     function dz(CC) {
-       this.__data__ = new Kz(CC)
-     }
- 
-     function mz(CC, zC) {
-       var ZC = Lz(CC) || function(CC) {
-           return function(CC) {
-             return function(CC) {
-               return !!CC && "object" == typeof CC
-             }(CC) && Uz(CC)
-           }(CC) && zz.call(CC, "callee") && (!qz.call(CC, "callee") || Zz.call(CC) == bC)
-         }(CC) ? function(CC, zC) {
-           for (var ZC = -1, QC = Array(CC); ++ZC < CC;) QC[ZC] = zC(ZC);
-           return QC
-         }(CC.length, String) : [],
- ... (10 more removed lines; see GitHub link above)
+     let op = null,
+       Ip = null,
+       Sp = null;
+     const xp = [];
+     let Lp = null;
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L1205-L1297` → after: `L799-L802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L799-L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/228.js#L799-L802) · [Before (L1205-L1297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/228.js#L1205-L1297)

```diff
-       for (var ZC = CC.length; ZC--;)
-         if (yz(CC[ZC][0], zC)) return ZC;
-       return -1
-     }
- 
-     function lz(CC, zC, ZC, QC, wC, MC, GC) {
-       var mC;
-       if (QC && (mC = MC ? QC(CC, wC, MC, GC) : QC(CC)), void 0 !== mC) return mC;
-       if (!kz(CC)) return CC;
-       var HC = Lz(CC);
-       if (HC) {
-         if (mC = function(CC) {
-             var zC = CC.length,
-               ZC = CC.constructor(zC);
-             zC && "string" == typeof CC[0] && zz.call(CC, "index") && (ZC.index = CC.index, ZC.input = CC.input);
-             return ZC
- ... (77 more removed lines; see GitHub link above)
+       try {
+         pp(ip)
+       } catch (cp) {
+         console.error("[bloxd-wasm-client] the game chunk's listener failed", cp)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L1318-L1334` → after: `L806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/228.js#L806) · [Before (L1318-L1334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/228.js#L1318-L1334)

```diff
-     function Xz(CC) {
-       return !(!kz(CC) || (zC = CC, VC && VC in zC)) && (Oz(CC) || DC(CC) ? Qz : mC).test(jz(CC));
-       var zC
-     }
- 
-     function cz(CC) {
-       var zC = new CC.constructor(CC.byteLength);
-       return new nz(zC).set(new nz(CC)), zC
-     }
- 
-     function uz(CC, zC, ZC, QC) {
-       ZC || (ZC = {});
-       for (var wC = -1, bC = zC.length; ++wC < bC;) {
-         var nC = zC[wC],
-           fC = QC ? QC(ZC[nC], CC[nC], nC, ZC, CC) : void 0;
-         Hz(ZC, nC, void 0 === fC ? CC[nC] : fC)
- ... (1 more removed lines; see GitHub link above)
+     function Dp() {
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L1427-L1428` → after: `L811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/228.js#L811) · [Before (L1427-L1428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/228.js#L1427-L1428)

```diff
-       var zC = CC && CC.constructor;
-       return CC === ("function" == typeof zC && zC.prototype || OC)
+       xp.push(pp), null !== Lp && Yp(pp, Lp)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L1432-L1440` → after: `L815-L821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L815-L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/228.js#L815-L821) · [Before (L1432-L1440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/228.js#L1432-L1440)

```diff
-       if (null != CC) {
-         try {
-           return Cz.call(CC)
-         } catch (zC) {}
-         try {
-           return CC + ""
-         } catch (zC) {}
-       }
-       return ""
+       return op ??= Promise.all([cp.e(73), cp.e(98), cp.e(226), cp.e(78), cp.e(227), cp.e(201), cp.e(97), cp.e(246), cp.e(273), cp.e(199), cp.e(214), cp.e(191), cp.e(198), cp.e(193), cp.e(144), cp.e(88), cp.e(122), cp.e(252), cp.e(57)]).then((() => cp(42870))).then((ip => {
+         ip.loadAudio(pp), Lp = ip;
+         for (const pp of xp) Yp(pp, ip);
+         return ip
+       })).catch((pp => {
+         throw op = null, pp
+       })), op
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L1442-L1459` → after: `L823-L828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L823-L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/228.js#L823-L828) · [Before (L1442-L1459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/228.js#L1442-L1459)

```diff
- 
-     function yz(CC, zC) {
-       return CC === zC || CC !== CC && zC !== zC
-     }(gz && az(new gz(new ArrayBuffer(1))) != AC || Sz && az(new Sz) != FC || pz && az(pz.resolve()) != MC || Pz && az(new Pz) != SC || Gz && az(new Gz) != GC) && (az = function(CC) {
-       var zC = Zz.call(CC),
-         ZC = zC == NC ? CC.constructor : void 0,
-         QC = ZC ? jz(ZC) : void 0;
-       if (QC) switch (QC) {
-         case Az:
-           return AC;
-         case xz:
-           return FC;
-         case Jz:
-           return MC;
-         case Iz:
-           return SC;
- ... (2 more removed lines; see GitHub link above)
+     async function Wp(pp, ip) {
+       try {
+         const cp = await Pp(pp);
+         await cp.loadClientGame(ip)
+       } catch (cp) {
+         throw new Op(cp)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L1474-L1506` → after: `L832-L835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L832-L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/228.js#L832-L835) · [Before (L1474-L1506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/228.js#L1474-L1506)

```diff
-     function Oz(CC) {
-       var zC = kz(CC) ? Zz.call(CC) : "";
-       return zC == oC || zC == qC
-     }
- 
-     function kz(CC) {
-       var zC = typeof CC;
-       return !!CC && ("object" == zC || "function" == zC)
-     }
- 
-     function Vz(CC) {
-       return Uz(CC) ? mz(CC) : function(CC) {
-         if (!Dz(CC)) return Mz(CC);
-         var zC = [];
-         for (var ZC in Object(CC)) zz.call(CC, ZC) && "constructor" != ZC && zC.push(ZC);
-         return zC
- ... (17 more removed lines; see GitHub link above)
+     function yp(pp, ip) {
+       Ip = {
+         running: pp,
+         shell: ip
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L1523-L1527` → after: `L839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/228.js#L839) · [Before (L1523-L1527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/228.js#L1523-L1527)

```diff
-     function wC(CC) {
-       for (var zC, ZC, wC = 0, bC = CC.length, nC = 0; nC < CC.length;) {
-         for (zC = CC[nC], ZC = 0; nC < bC && CC[nC] === zC;) ++nC, ++ZC;
-         wC += QC.log2(ZC) / 7 | 0, wC += QC.log2(zC >>> 0) / 7 | 0, wC += 2
-       }
+     function Up() {
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L1530-L1539` → after: `L842-L850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L842-L850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/228.js#L842-L850) · [Before (L1530-L1539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/228.js#L1530-L1539)

```diff
-     zC.size = wC, zC.encode = function(CC, zC) {
-       zC || (zC = new Uint8Array(wC(CC)));
-       for (var ZC, QC, bC = 0, nC = zC.length, fC = 0; fC < CC.length;) {
-         for (ZC = CC[fC], QC = 0; fC < CC.length && CC[fC] === ZC;) ++fC, ++QC;
-         for (; bC < nC && QC >= 128;) zC[bC++] = 128 + (127 & QC), QC >>>= 7;
-         if (bC >= nC) throw new Error("RLE buffer overflow");
-         for (zC[bC++] = QC, ZC >>>= 0; bC < nC && ZC >= 128;) zC[bC++] = 128 + (127 & ZC), ZC >>>= 7;
-         if (bC >= nC) throw new Error("RLE buffer overflow");
-         zC[bC++] = ZC
-       }
+     async function wp(pp) {
+       const ip = Ip;
+       if ((null === ip || void 0 === ip ? void 0 : ip.running) !== pp) throw new Error("the core's session has ended");
+       const cp = await Pp(ip.shell.audio).catch((pp => {
+         throw new Op(pp)
+       }));
+       if (null !== Sp) return Sp;
+       if (Ip !== ip || pp.isStopped) throw new Error("the core stopped while the game code loaded");
+       if (Sp = cp.startGameHost(pp, ip.shell), null === Sp) throw new Error("the core's shared tables didn't read, so the game can't start");
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L1659-L1777` → after: `L853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/228.js#L853) · [Before (L1659-L1777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/228.js#L1659-L1777)

```diff
-   },
-   37596: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       d: () => wC
-     });
-     var QC = ZC(36963);
-     class wC {
-       constructor(CC, zC, ZC, wC) {
-         this.normal = new QC.r(CC, zC, ZC), this.d = wC
-       }
-       VZC() {
-         return [this.normal.x, this.normal.y, this.normal.z, this.d]
-       }
-       clone() {
-         return new wC(this.normal.x, this.normal.y, this.normal.z, this.d)
-       }
- ... (103 more removed lines; see GitHub link above)
+ 
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L1779-L1782` → after: `L855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/228.js#L855) · [Before (L1779-L1782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/228.js#L1779-L1782)

```diff
-       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (CC => {
-         const zC = 16 * Math.random() | 0;
-         return ("x" === CC ? zC : 3 & zC | 8).toString(16)
-       }))
+       null !== Sp && (null !== Lp ? Lp.endGameHost(Sp) : Sp.closeGame()), Sp = null, Ip = null
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/229.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/229.js` (38 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e)

#### 1. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/229.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/229.js#L2)

```diff
- export const ids = [229, 235, 238];
+ export const ids = [229];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/229.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/229.js#L4)

```diff
-   40069: (CC, zC, ZC) => {
+   37134: (pp, ip, cp) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L6-L7` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/229.js#L6-L7) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/229.js#L6-L7)

```diff
-       e: () => nC,
-       i: () => fC
+       d: () => ep,
+       g: () => dp
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L9-L110` → after: `L9-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L9-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/229.js#L9-L18) · [Before (L9-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/229.js#L9-L110)

```diff
-     var QC = ZC(38507),
-       wC = ZC(39842),
-       bC = ZC(40042),
-       nC = {};
-     class fC {
-       constructor(CC) {
-         this.attachedToElement = !1, this.attached = {}, this.camera = CC, this.checkInputs = () => {}
-       }
-       add(CC) {
-         const zC = CC.getSimpleName();
-         this.attached[zC] ? QC.c.Warn("camera input of type " + zC + " already exists on camera") : (this.attached[zC] = CC, CC.camera = this.camera, CC.checkInputs && (this.checkInputs = this._addCheckInputs(CC.checkInputs.bind(CC))), this.attachedToElement && CC.attachControl(t … [truncated]
-       }
-       remove(CC) {
-         for (const zC in this.attached) {
-           const ZC = this.attached[zC];
-           if (ZC === CC) return ZC.detachControl(), ZC.camera = null, delete this.attached[zC], void this.rebuildInputCheck()
- ... (86 more removed lines; see GitHub link above)
+     var Op = cp(4355),
+       op = cp(1476),
+       Ip = cp(62),
+       Sp = cp(6605),
+       xp = cp(4343),
+       Lp = cp(1308),
+       Yp = cp(1956),
+       Dp = cp(1929),
+       Ap = cp(1480),
+       Pp = cp(1201),
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L112-L191` → after: `L20-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L20-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/229.js#L20-L26) · [Before (L112-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/229.js#L112-L191)

```diff
-       fC = ZC(40084),
-       oC = ZC(40046),
-       qC = ZC(37002);
-     let FC = (() => {
-         var CC;
-         let zC, ZC, oC = fC.c,
-           qC = [],
-           FC = [],
-           WC = [],
-           NC = [];
-         return CC = class extends oC {
-           constructor(CC, zC, ZC, wC) {
-             super(CC, ZC, wC), this.groundColor = (0, QC.n)(this, qC, new nC.e(0, 0, 0)), this.direction = ((0, QC.n)(this, FC), (0, QC.n)(this, WC, void 0)), (0, QC.n)(this, NC), this.direction = zC || bC.r.Up()
-           }
-           _buildUniformLayout() {
-             this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniform … [truncated]
- ... (64 more removed lines; see GitHub link above)
+       yp = cp(1049),
+       Up = cp.n(yp),
+       wp = cp(1334),
+       vp = cp(1060),
+       tp = cp(1295),
+       Hp = cp(1112);
+     const dp = "SleepingOverlay";
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L194-L246` → after: `L29-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L29-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/229.js#L29-L35) · [Before (L194-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/229.js#L194-L246)

```diff
-       WC || (WC = !0, oC.d.AddNodeConstructor("Light_Type_3", ((CC, zC) => () => new FC(CC, bC.r.Zero(), zC))), (0, qC.d)("BABYLON.HemisphericLight", FC))
-     }
-   },
-   37138: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       Color3: () => QC.e,
-       e: () => QC.g
-     });
-     var QC = ZC(37142);
-     (0, QC.i)()
-   },
-   37590: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       e: () => wC
-     });
-     var QC = ZC(37596);
- ... (37 more removed lines; see GitHub link above)
+       const {
+         t: pp
+       } = (0, Pp.H)(), [ip, cp] = (0, Ip.useState)(!1), [yp, ep] = (0, Ip.useState)(null), [kp, mp] = (0, Ip.useState)(1), [Rp, qp] = (0, Ip.useState)(!1), [Mp, Cp] = (0, Ip.useState)(!1), Ep = (0, Ip.useRef)(0), Xp = (0, Ip.useRef)(!1), lp = (0, Ip.useRef)(!1), Qp = (0, Ip.useRe … [truncated]
+ 
+       function Bp() {
+         const pp = null !== yp && void 0 !== yp ? yp : "Rested Speed";
+         Yp.gameBridge.send("wakeUp", Mp ? pp : null), Jp.current = null, cp(!1), ep(null), mp(1), qp(!1), Cp(!1)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L250` → after: `L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/229.js#L161) · [Before (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/229.js#L250)

```diff
-   37596: (CC, zC, ZC) => {
+   40758: (pp, ip, cp) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L254` → after: `L165-L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L165-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/229.js#L165-L187) · [Before (L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/229.js#L254)

```diff
-     var QC = ZC(36963);
+     var Op = cp(25),
+       op = cp(34),
+       Ip = cp(4371),
+       Sp = cp(322),
+       xp = cp(1650),
+       Lp = cp(8310),
+       Yp = cp(4379),
+       Dp = cp(8835),
+       Ap = cp(8336),
+       Pp = cp(8320),
+       Wp = cp(8338),
+       yp = cp(1419),
+       Up = cp(1698),
+       wp = cp(8346),
+       vp = cp(8793),
+       tp = cp(8919),
+ ... (7 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L256-L315` → after: `L189-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L189-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/229.js#L189-L190) · [Before (L256-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/229.js#L256-L315)

```diff
-       constructor(CC, zC, ZC, wC) {
-         this.normal = new QC.r(CC, zC, ZC), this.d = wC
-       }
-       VZC() {
-         return [this.normal.x, this.normal.y, this.normal.z, this.d]
-       }
-       clone() {
-         return new wC(this.normal.x, this.normal.y, this.normal.z, this.d)
-       }
-       getClassName() {
-         return "Plane"
-       }
-       getHashCode() {
-         let CC = this.normal.getHashCode();
-         return CC = 397 * CC ^ this.d, CC
-       }
- ... (44 more removed lines; see GitHub link above)
+       constructor() {
+         this.lostAtMs = null
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L317-L319` → after: `L192-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L192-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/229.js#L192-L193) · [Before (L317-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/229.js#L317-L319)

```diff
-       static FromPoints(CC, zC, ZC) {
-         const QC = new wC(0, 0, 0, 0);
-         return QC.copyFromPoints(CC, zC, ZC), QC
+       update(pp, ip) {
+         return pp ? (this.lostAtMs = null, !1) : (this.lostAtMs ??= ip, ip - this.lostAtMs >= 250)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L321-L330` → after: `L195-L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L195-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/229.js#L195-L196) · [Before (L321-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/229.js#L321-L330)

```diff
-       static FromPositionAndNormal(CC, zC) {
-         const ZC = new wC(0, 0, 0, 0);
-         return this.FromPositionAndNormalToRef(CC, zC, ZC)
-       }
-       static FromPositionAndNormalToRef(CC, zC, ZC) {
-         return ZC.normal.Av(zC), ZC.normal.normalize(), ZC.d = -CC.dot(ZC.normal), ZC
-       }
-       static SignedDistanceToPlaneFromPositionAndNormal(CC, zC, ZC) {
-         const wC = -(zC.x * CC.x + zC.y * CC.y + zC.z * CC.z);
-         return QC.r.Dot(ZC, zC) + wC
+       reset() {
+         this.lostAtMs = null
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L353-L354` → after: `L200-L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L200-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/229.js#L200-L201) · [Before (L353-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/229.js#L353-L354)

```diff
-       constructor(CC, zC, ZC, QC) {
-         this.x = CC, this.y = zC, this.width = ZC, this.height = QC
+       constructor(pp, ip) {
+         this.press = pp, this.release = ip, this.downAtMs = null, this.token = null, this.latched = !1
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L356-L357` → after: `L203-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L203-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/229.js#L203-L205) · [Before (L356-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/229.js#L356-L357)

```diff
-       toGlobal(CC, zC) {
-         return new QC(this.x * CC, this.y * zC, this.width * CC, this.height * zC)
+       update(pp, ip, cp, Op) {
+         if (pp && null === this.downAtMs) return this.downAtMs = cp, this.latched = Op, void(this.token = this.press(Op));
+         null !== this.downAtMs && (this.latched ? pp && this.end() : !ip && cp - this.downAtMs >= 40 && this.end())
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L359-L360` → after: `L207-L208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L207-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/229.js#L207-L208) · [Before (L359-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/229.js#L359-L360)

```diff
-       toGlobalToRef(CC, zC, ZC) {
-         return ZC.x = this.x * CC, ZC.y = this.y * zC, ZC.width = this.width * CC, ZC.height = this.height * zC, this
+       isLatched() {
+         return null !== this.downAtMs && this.latched
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L362-L363` → after: `L210-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L210-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/229.js#L210-L211) · [Before (L362-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/229.js#L362-L363)

```diff
-       clone() {
-         return new QC(this.x, this.y, this.width, this.height)
+       unlatch() {
+         this.latched = !1
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L365-L409` → after: `L213-L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L213-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/229.js#L213-L214) · [Before (L365-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/229.js#L365-L409)

```diff
-     }
-   },
-   40219: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       b: () => qC
-     });
-     var QC = ZC(36963),
-       wC = ZC(37142),
-       bC = ZC(40224),
-       nC = ZC(40235),
-       fC = ZC(40256);
- 
-     function oC(CC) {
-       let zC = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
-       const ZC = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
-         bC = [],
- ... (29 more removed lines; see GitHub link above)
+       cancel() {
+         null !== this.downAtMs && this.end()
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L411-L425` → after: `L216-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L216-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/229.js#L216-L218) · [Before (L411-L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/229.js#L411-L425)

```diff
-       const PC = [oC / 2, qC / 2, FC / 2],
-         GC = pC.reduce(((CC, zC, ZC) => CC.concat(zC * PC[ZC % 3])), []),
-         RC = 0 === CC.sideOrientation ? 0 : CC.sideOrientation || nC.e.DEFAULTSIDE,
-         AC = CC.faceUV || new Array(6),
-         xC = CC.faceColors,
-         JC = [];
-       for (let nC = 0; nC < 6; nC++) void 0 === AC[nC] && (AC[nC] = new QC.u(0, 0, 1, 1)), xC && void 0 === xC[nC] && (xC[nC] = new wC.g(1, 1, 1, 1));
-       for (let QC = 0; QC < 6; QC++)
-         if (bC.push(AC[QC].z, fC.d ? 1 - AC[QC].w : AC[QC].w), bC.push(AC[QC].x, fC.d ? 1 - AC[QC].w : AC[QC].w), bC.push(AC[QC].x, fC.d ? 1 - AC[QC].y : AC[QC].y), bC.push(AC[QC].z, fC.d ? 1 - AC[QC].y : AC[QC].y), xC)
-           for (let CC = 0; CC < 4; CC++) JC.push(xC[QC].r, xC[QC].g, xC[QC].b, xC[QC].a);
-       nC.e._ComputeSides(RC, GC, zC, ZC, bC, CC.frontUVs, CC.backUVs);
-       const IC = new nC.e;
-       if (IC.indices = zC, IC.positions = GC, IC.normals = ZC, IC.uvs = bC, xC) {
-         const CC = RC === nC.e.DOUBLESIDE ? JC.concat(JC) : JC;
-         IC.colors = CC
+       end() {
+         const pp = this.token;
+         this.downAtMs = null, this.token = null, this.latched = !1, this.release(pp)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L429-L480` → after: `L221-L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L221-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/229.js#L221-L286) · [Before (L429-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/229.js#L429-L480)

```diff
- 
-     function qC(CC) {
-       let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
-         ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-       const QC = new bC.b(CC, ZC);
-       zC.sideOrientation = bC.b._GetDefaultSideOrientation(zC.sideOrientation), QC._originalBuilderSideOrientation = zC.sideOrientation;
-       return oC(zC).applyToMesh(QC, zC.updatable), QC
-     }
-     let FC = !1;
-     FC || (FC = !0, nC.e.CreateBox = oC, bC.b.CreateBox = function(CC, zC) {
-       return qC(CC, {
-         size: zC,
-         sideOrientation: arguments.length > 4 ? arguments[4] : void 0,
-         updatable: arguments.length > 3 ? arguments[3] : void 0
-       }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
-     })
- ... (36 more removed lines; see GitHub link above)
+     const Cp = {
+         kind: "specialAction",
+         action: "SpecialAction2"
+       },
+       Ep = pp => {
+         let ip = null;
+         const cp = new Rp.e,
+           Op = () => {
+             ip && (((pp, ip, cp) => {
+               switch (cp.kind) {
+                 case "reload":
+                   return void ip.specialActionUp("SpecialAction1");
+                 case "specialAction":
+                   return void ip.specialActionUp(cp.action);
+                 case "customButton":
+                   return void ep.gameBridge.send("pressCustomButton", {
+ ... (50 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L484-L523` → after: `L289-L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L289-L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/229.js#L289-L310) · [Before (L484-L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/229.js#L484-L523)

```diff
-       }
-       const oC = new bC.e;
-       return oC.indices = zC, oC.positions = ZC, wC && (oC.colors = nC), oC
-     }
- 
-     function FC(CC) {
-       const zC = CC.dashSize || 3,
-         ZC = CC.gapSize || 1,
-         wC = CC.dashNb || 200,
-         nC = CC.points,
-         fC = [],
-         oC = [],
-         qC = QC.r.Zero();
-       let FC, WC, NC, MC = 0,
-         gC = 0;
-       for (NC = 0; NC < nC.length - 1; NC++) nC[NC + 1].subtractToRef(nC[NC], qC), MC += qC.length();
- ... (24 more removed lines; see GitHub link above)
+       };
+     var Xp = cp(8290);
+     var lp = cp(40751),
+       Qp = cp(8883),
+       Jp = cp(8334),
+       Bp = cp(8972);
+     var Np = cp(40747),
+       Tp = cp(8979),
+       fp = cp(40763),
+       bp = cp(8952),
+       hp = cp(8885),
+       ap = cp(8887),
+       np = cp(8890),
+       Fp = cp(8801),
+       gp = cp(8858);
+     const Gp = () => Fp.e[(0, Pp.h)().tapHoldTime].wheelMs,
+ ... (6 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L525-L563` → after: `L312-L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L312-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/229.js#L312-L342) · [Before (L525-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/229.js#L525-L563)

```diff
-         return QC.updateVerticesData(fC.k.PositionKind, CC, !1, !1), bC && zC && QC.updateVerticesData(fC.k.ColorKind, zC, !1, !1), QC.refreshBoundingInfo(), QC
-       }
-       const oC = !!bC,
-         FC = new nC.c(CC, ZC, null, void 0, void 0, oC, zC.useVertexAlpha, zC.material);
-       return qC(zC).applyToMesh(FC, zC.updatable), FC
-     }
- 
-     function NC(CC, zC) {
-       let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-       const QC = zC.colors ? [zC.colors] : null;
-       return WC(CC, {
-         lines: [zC.points],
-         updatable: zC.updatable,
-         instance: zC.instance,
-         colors: QC,
-         useVertexAlpha: zC.useVertexAlpha,
- ... (23 more removed lines; see GitHub link above)
+       }), (pp => {
+         let {
+           bodies: ip,
+           press: Op
+         } = pp;
+         cp(ip, Op)
+       })),
+       zp = {
+         running: !1,
+         latchedAtMs: -1 / 0
+       },
+       sp = pp => {
+         const ip = {
+           x: 0,
+           y: 0,
+           magnitude: 0,
+ ... (15 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L565` → after: `L344-L492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L344-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/229.js#L344-L492) · [Before (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/229.js#L565)

```diff
-         return (zC.dashNb || zC.dashSize || zC.gapSize || zC.useVertexAlpha || zC.material) && oC.c.Warn("You have used an option other than points with the instance option. Please be aware that these other options will be ignored."), fC.updateMeshPositions(CC, !1), fC
+         let Cp = !1;
+         const gp = new qp,
+           sp = pp.look,
+           Kp = new Rp.e,
+           Vp = new Rp.e,
+           ii = Ep(pp),
+           ci = op.m.subscribe(dp.t, (ip => {
+             ii.pressPicked(pp.bodies(), ip)
+           })),
+           Oi = Zp(pp, ((pp, ip) => pp.primaryFireDown(!ip)), ((pp, ip) => {
+             pp.primaryFireUp(ip)
+           })),
+           oi = Zp(pp, (pp => pp.altFireDown()), ((pp, ip) => {
+             pp.altFireUp(ip)
+           }));
+         let Ii = !1,
+ ... (133 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L588` → after: `L495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/229.js#L495) · [Before (L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/229.js#L588)

```diff
-   40283: (CC, zC, ZC) => {
+   40751: (pp, ip, cp) => {
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L590-L591` → after: `L497-L499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L497-L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/229.js#L497-L499) · [Before (L590-L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/229.js#L590-L591)

```diff
-       c: () => NC,
-       e: () => SC
+       b: () => yp,
+       e: () => wp,
+       i: () => Wp
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L593-L624` → after: `L501-L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L501-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/229.js#L501-L524) · [Before (L593-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/229.js#L593-L624)

```diff
-     var QC, wC, bC = ZC(37142),
-       nC = ZC(39959),
-       fC = ZC(40224),
-       oC = ZC(40292),
-       qC = ZC(40110),
-       FC = ZC(40297),
-       WC = ZC(39694);
-     class NC extends fC.b {
-       _isShaderMaterial(CC) {
-         return !!CC && "ShaderMaterial" === CC.getClassName()
-       }
-       constructor(CC) {
-         let zC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
-           QC = arguments.length > 5 ? arguments[5] : void 0,
-           wC = arguments.length > 6 ? arguments[6] : void 0,
-           fC = arguments.length > 7 ? arguments[7] : void 0;
- ... (16 more removed lines; see GitHub link above)
+     var Op = cp(1308),
+       op = cp(4371),
+       Ip = cp(8900),
+       Sp = cp(37134),
+       xp = cp(1749),
+       Lp = cp(1198),
+       Yp = cp(8346),
+       Dp = cp(8843),
+       Ap = cp(8928);
+     const Pp = {
+         emoteWheel: Ip.f,
+         quickChatWheel: Dp.d,
+         actionWheel: Ap.x
+       },
+       Wp = Object.keys(Pp),
+       yp = "dead",
+ ... (8 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L627-L640` → after: `L527-L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L527-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/229.js#L527-L550) · [Before (L627-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/229.js#L627-L640)

```diff
-       getClassName() {
-         return "LinesMesh"
-       }
-       get material() {
-         return this._internalAbstractMeshDataInfo._material
-       }
-       set material(CC) {
-         const zC = this.material;
-         if (zC === CC) return;
-         const ZC = zC && this._ownsMaterial;
-         this._ownsMaterial = !1, this._setInternalMaterial(CC), ZC && zC?.dispose()
-       }
-       _setInternalMaterial(CC) {
-         this._setMaterial(CC), this.material && (this.material.fillMode = qC.d.LineListDrawMode, this.material.disableLighting = !0)
+   },
+   40747: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => op,
+       f: () => Lp,
+       h: () => xp,
+       l: () => Dp,
+       m: () => Sp,
+       o: () => Ip,
+       q: () => Yp,
+       t: () => Ap
+     });
+     var Op = cp(8298);
+     class op {
+       constructor() {
+         this.fullTiltSinceMs = null
+ ... (8 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L642-L643` → after: `L552-L553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L552-L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/229.js#L552-L553) · [Before (L642-L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/229.js#L642-L643)

```diff
-       get checkCollisions() {
-         return !1
+       reset() {
+         this.fullTiltSinceMs = null
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L645-L655` → after: `L555-L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L555-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/229.js#L555-L582) · [Before (L645-L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/229.js#L645-L655)

```diff
-       set checkCollisions(CC) {}
-       _bind(CC, zC) {
-         if (!this._geometry) return this;
-         const ZC = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
-         if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(zC, ZC) : this._geometry._bind(zC, ZC, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMate … [truncated]
-           const {
-             r: CC,
-             g: zC,
-             b: ZC
-           } = this.color;
-           this._color4.set(CC, zC, ZC, this.alpha), this.material.setColor4("color", this._color4)
+     }
+     const Ip = (pp, ip, cp, op, Ip) => {
+         let Sp = 1;
+         return "boost" === cp.lookCurve ? Sp = pp.update(ip, cp, Ip) : pp.reset(),
+           function(pp, ip) {
+             let {
+               yawBoost: cp = 1,
+               aiming: op = !1
+             } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
+             const Ip = (0, Op.d)((0, Op.h)(pp, ip.lookDeadzone), ip.lookCurve),
+               Sp = 220 * Math.PI / 180,
+               xp = op ? ip.aimLookSensitivity / 100 : 1,
+               Lp = ip.lookSensitivityX / 100 * xp,
+               Yp = ip.lookSensitivityY / 100 * xp;
+             return {
+               yawRadPerSec: Ip.x * Sp * Lp * cp * (ip.invertLookX ? -1 : 1),
+ ... (12 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L657-L673` → after: `L584-L600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L584-L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/229.js#L584-L600) · [Before (L657-L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/229.js#L657-L673)

```diff
-         return this
-       }
-       _draw(CC, zC, ZC) {
-         if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
-         const QC = this.Km().mg();
-         return this._unIndexed ? QC.drawArraysType(qC.d.LineListDrawMode, CC.verticesStart, CC.verticesCount, ZC) : QC.drawElementsType(qC.d.LineListDrawMode, CC.indexStart, CC.indexCount, ZC), this
-       }
-       dispose(CC) {
-         let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || zC) && this.material?.dispose(!1, !1, !0), super.dispose(CC)
-       }
-       clone(CC) {
-         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-           ZC = arguments.length > 2 ? arguments[2] : void 0;
-         if (zC && void 0 === zC._addToSceneRootNodes) {
-           const ZC = zC;
- ... (1 more removed lines; see GitHub link above)
+       },
+       xp = (pp, ip) => ip ? {
+         move: pp.rightStick,
+         look: pp.leftStick
+       } : {
+         move: pp.leftStick,
+         look: pp.rightStick
+       },
+       Lp = (pp, ip) => {
+         const cp = (0, Op.h)(pp, ip),
+           op = Math.min(1, Math.hypot(cp.x, cp.y));
+         return {
+           magnitude: op,
+           speed: Math.min(1, op / .8),
+           headingOffset: 0 === op ? 0 : Math.atan2(cp.x, -cp.y),
+           x: cp.x,
+ ... (1 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L675-L681` → after: `L602-L627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L602-L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/229.js#L602-L627) · [Before (L675-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/229.js#L675-L681)

```diff
-         return new NC(CC, this.Km(), zC, this, ZC)
-       }
-       createInstance(CC) {
-         const zC = new MC(CC, this);
-         if (this.ZE) {
-           zC.ZE = {};
-           for (const CC in this.ZE) zC.ZE[CC] = this.ZE[CC]
+       },
+       Yp = (pp, ip) => {
+         let {
+           sprintPressed: cp,
+           magnitude: Op,
+           autoSprint: op,
+           nowMs: Ip
+         } = ip;
+         const Sp = cp ? Ip : pp.latchedAtMs,
+           xp = (pp => {
+             let {
+               running: ip,
+               magnitude: cp,
+               sprintPressed: Op,
+               autoSprint: op
+             } = pp;
+ ... (10 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L683-L706` → after: `L629-L637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L629-L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/229.js#L629-L637) · [Before (L683-L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/229.js#L683-L706)

```diff
-         return zC
-       }
-       serialize(CC) {
-         super.serialize(CC), CC.color = this.color.VZC(), CC.alpha = this.alpha
-       }
-       static Parse(CC, zC) {
-         const ZC = new NC(CC.name, zC);
-         return ZC.color = bC.e.FromArray(CC.color), ZC.alpha = CC.alpha, ZC
-       }
-     }
-     NC.ForceGLSL = !1;
-     class MC extends oC.c {
-       constructor(CC, zC) {
-         super(CC, zC), this.intersectionThreshold = zC.intersectionThreshold
-       }
-       getClassName() {
- ... (8 more removed lines; see GitHub link above)
+       },
+       Dp = (pp, ip, cp) => cp && pp.gyroAiming && "button" === pp.gyroActivation && pp.gyroButton !== ip ? pp.gyroButton : null,
+       Ap = (pp, ip) => ip ? {
+         ...pp,
+         isHeld: cp => cp !== ip && pp.isHeld(cp),
+         wasPressed: cp => cp !== ip && pp.wasPressed(cp),
+         wasReleased: cp => cp !== ip && pp.wasReleased(cp),
+         value: cp => cp === ip ? 0 : pp.value(cp)
+       } : pp
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L708` → after: `L639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/229.js#L639) · [Before (L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/229.js#L708)

```diff
-   38501: (CC, zC, ZC) => {
+   40763: (pp, ip, cp) => {
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L710` → after: `L641-L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L641-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/229.js#L641-L642) · [Before (L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/229.js#L710)

```diff
-       e: () => bC
+       d: () => op,
+       g: () => Op
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L712-L715` → after: `L644-L667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L644-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/229.js#L644-L667) · [Before (L712-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/229.js#L712-L715)

```diff
-     var QC = ZC(38507);
-     const wC = (CC, zC, ZC) => CC ? CC.getClassName && "Mesh" === CC.getClassName() ? null : !CC.getClassName || "SubMesh" !== CC.getClassName() && "PhysicsBody" !== CC.getClassName() ? CC.clone ? CC.clone() : Array.isArray(CC) ? CC.slice() : ZC && "object" === typeof CC ? {
-       ...CC
-     } : null : CC.clone(zC) : null;
+     const Op = pp => {
+       let {
+         mode: ip,
+         sneakHeld: cp,
+         sneakPressed: Op,
+         sneakTogglePressed: op,
+         descending: Ip,
+         canCrouch: Sp,
+         toggled: xp
+       } = pp;
+       return Sp ? Ip ? {
+         crouchHeld: cp,
+         toggled: !1
+       } : "hold" === ip ? {
+         crouchHeld: cp,
+         toggled: op ? !xp : xp
+ ... (8 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L717-L746` → after: `L669-L681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L669-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/229.js#L669-L681) · [Before (L717-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/229.js#L717-L746)

```diff
-       static DeepCopy(CC, zC, ZC, bC) {
-         let nC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         const fC = function(CC) {
-           const zC = [];
-           do {
-             const ZC = Object.getOwnPropertyNames(CC);
-             for (const CC of ZC) - 1 === zC.indexOf(CC) && zC.push(CC)
-           } while (CC = Object.getPrototypeOf(CC));
-           return zC
-         }(CC);
-         for (const qC of fC) {
-           if ("_" === qC[0] && (!bC || -1 === bC.indexOf(qC))) continue;
-           if (qC.endsWith("Observable")) continue;
-           if (ZC && -1 !== ZC.indexOf(qC)) continue;
-           const fC = CC[qC],
-             FC = typeof fC;
- ... (14 more removed lines; see GitHub link above)
+       constructor() {
+         this.regainPending = !1, this.regainedAtMs = -1 / 0, this.graceEndsMs = -1 / 0, this.ignoringHeld = !1
+       }
+       lostToPadScreen() {
+         this.regainPending = !0
+       }
+       filter(pp, ip) {
+         this.regainPending && (this.regainPending = !1, this.regainedAtMs = ip, this.graceEndsMs = ip + 500);
+         const cp = ip < this.graceEndsMs;
+         return cp && (pp.sneakPressed || pp.sneakTogglePressed) && (this.graceEndsMs = Math.min(this.regainedAtMs + 1e3, Math.max(this.graceEndsMs, ip + 300))), pp.sneakHeld ? cp && pp.sneakPressed && (this.ignoringHeld = !0) : this.ignoringHeld = !1, {
+           sneakHeld: pp.sneakHeld && !this.ignoringHeld,
+           sneakPressed: pp.sneakPressed && !this.ignoringHeld,
+           sneakTogglePressed: pp.sneakTogglePressed && !cp
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L751-L760` → after: `L686-L687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L686-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/229.js#L686-L687) · [Before (L751-L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/229.js#L751-L760)

```diff
-   37731: (CC, zC, ZC) => {
-     function QC() {
-       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (CC => {
-         const zC = 16 * Math.random() | 0;
-         return ("x" === CC ? zC : 3 & zC | 8).toString(16)
-       }))
-     }
-     ZC.d(zC, {
-       b: () => QC
-     })
+   40736: (pp, ip, cp) => {
+     cp(8979)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L762` → after: `L689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/229.js#L689) · [Before (L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/229.js#L762)

```diff
-   38507: (CC, zC, ZC) => {
+   40739: (pp, ip, cp) => {
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L764` → after: `L691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/229.js#L691) · [Before (L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/229.js#L764)

```diff
-       c: () => QC
+       e: () => Hp
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L766-L815` → after: `L693-L777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L693-L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/229.js#L693-L777) · [Before (L766-L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/229.js#L766-L815)

```diff
-     class QC {
-       static _CheckLimit(CC, zC) {
-         let ZC = QC._LogLimitOutputs[CC];
-         return ZC ? ZC.current++ : (ZC = {
-           limit: zC,
-           current: 1
-         }, QC._LogLimitOutputs[CC] = ZC), ZC.current <= ZC.limit
-       }
-       static _GenerateLimitMessage(CC) {
-         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-         const ZC = QC._LogLimitOutputs[CC];
-         if (!ZC || !QC.MessageLimitReached) return;
-         const wC = this._Levels[zC];
-         ZC.current === ZC.limit && QC[wC.name](QC.MessageLimitReached.replace(/%LIMIT%/g, "" + ZC.limit).replace(/%TYPE%/g, wC.name ?? ""))
-       }
-       static _AddLogEntry(CC) {
- ... (34 more removed lines; see GitHub link above)
+     var Op = cp(34),
+       op = cp(8900),
+       Ip = cp(8917),
+       Sp = cp(8310),
+       xp = cp(8336),
+       Lp = cp(8320),
+       Yp = cp(40747),
+       Dp = cp(40751),
+       Ap = cp(8346),
+       Pp = cp(8298),
+       Wp = cp(8843),
+       yp = cp(8928);
+     const Up = [{
+         isOpen: op.h,
+         openButton: () => (0, Sp.g)("emoteWheel"),
+         aim: pp => {
+ ... (69 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/230.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/230.js` (24 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341)

#### 1. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/230.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/230.js#L2)

```diff
- export const ids = [230, 235];
+ export const ids = [230];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/230.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/230.js#L4)

```diff
-   41655: (CC, zC, ZC) => {
+   38690: (pp, ip, cp) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/230.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/230.js#L6)

```diff
-       e: () => nC
+       b: () => yp
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L8-L23` → after: `L8-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L8-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/230.js#L8-L15) · [Before (L8-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/230.js#L8-L23)

```diff
-     var QC = ZC(41590),
-       wC = ZC(39803);
-     let bC = !1;
- 
-     function nC() {
-       bC || (bC = !0, wC.b.prototype._sphericalPolynomialTargetSize = 0, wC.b.prototype.forceSphericalPolynomialsRecompute = function() {
-         this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
-       }, Object.defineProperty(wC.b.prototype, "sphericalPolynomial", {
-         get: function() {
-           if (this._texture) {
-             if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
-             if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = QC.b.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialCo … [truncated]
-               this._texture._sphericalPolynomial = CC, this._texture._sphericalPolynomialComputed = !0
-             }))), null
-           }
-           return null
+     var Op = cp(195),
+       op = cp(37861);
+     const Ip = 1.2,
+       Sp = {
+         poseRig: "golem",
+         physicsBodyDimensions: {
+           width: .5,
+           height: 2.5
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L25-L26` → after: `L17-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/230.js#L17-L19) · [Before (L25-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/230.js#L25-L26)

```diff
-         set: function(CC) {
-           this._texture && (this._texture._sphericalPolynomial = CC)
+         hitBoxDimensions: {
+           width: 2.2,
+           height: 2.8
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L28-L167` → after: `L21-L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L21-L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/230.js#L21-L610) · [Before (L28-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/230.js#L28-L167)

```diff
-         enumerable: !0,
-         configurable: !0
-       }))
-     }
-   },
-   37138: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       Color3: () => QC.e,
-       e: () => QC.g
-     });
-     var QC = ZC(37142);
-     (0, QC.i)()
-   },
-   37590: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       e: () => wC
- ... (124 more removed lines; see GitHub link above)
+         eyeHeight: 2.3,
+         rideHeight: 2.3,
+         Gx: .5,
+         bip: !1
+       },
+       xp = {
+         physicsBodyDimensions: {
+           width: .5,
+           height: 2.5
+         },
+         hitBoxDimensions: {
+           width: 1.8,
+           height: 2.6
+         },
+         eyeHeight: 2.3,
+         rideHeight: 2.3,
+ ... (574 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L171-L184` → after: `L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/230.js#L613) · [Before (L171-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/230.js#L171-L184)

```diff
-   36961: (CC, zC, ZC) => {
-     ZC.r(zC), ZC.d(zC, {
-       Matrix: () => QC.b,
-       Quaternion: () => QC.f,
-       RegisterMathVector: () => QC.g,
-       TmpVectors: () => QC.j,
-       Vector2: () => QC.n,
-       Eg: () => QC.r,
-       Vector4: () => QC.u
-     });
-     var QC = ZC(36963);
-     (0, QC.g)()
-   },
-   37931: (CC, zC, ZC) => {
+   37286: (pp, ip, cp) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L186` → after: `L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/230.js#L615) · [Before (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/230.js#L186)

```diff
-       d: () => QC
+       b: () => Op
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L188-L199` → after: `L617-L773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L617-L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/230.js#L617-L773) · [Before (L188-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/230.js#L188-L199)

```diff
-     class QC {
-       constructor(CC, zC, ZC, QC) {
-         this.x = CC, this.y = zC, this.width = ZC, this.height = QC
-       }
-       toGlobal(CC, zC) {
-         return new QC(this.x * CC, this.y * zC, this.width * CC, this.height * zC)
-       }
-       toGlobalToRef(CC, zC, ZC) {
-         return ZC.x = this.x * CC, ZC.y = this.y * zC, ZC.width = this.width * CC, ZC.height = this.height * zC, this
-       }
-       clone() {
-         return new QC(this.x, this.y, this.width, this.height)
+     const Op = {
+       "skyblock:forged:astral-astral-astral": {
+         name: "Heart of the Cosmos",
+         lore: "Three shards of the night sky, forged as one. The stars answer whoever holds it.",
+         damageMultiplier: 1.8,
+         cooldownMultiplier: .8,
+         ability: "starfall"
+       },
+       "skyblock:forged:astral-moonstone-sanguine": {
+         name: "Eclipse Edge",
+         lore: "Moonlight over starlight over blood: the sky goes dark wherever it is drawn.",
+         damageMultiplier: 1.7,
+         cooldownMultiplier: .81,
+         ability: "eclipseField"
+       },
+       "skyblock:forged:astral-diamond-moonstone": {
+ ... (141 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L203` → after: `L777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/230.js#L777) · [Before (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/230.js#L203)

```diff
-   41590: (CC, zC, ZC) => {
+   37868: (pp, ip, cp) => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L205` → after: `L779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/230.js#L779) · [Before (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/230.js#L205)

```diff
-       b: () => qC
+       e: () => Sp
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L207-L244` → after: `L781-L856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L781-L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/230.js#L781-L856) · [Before (L207-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/230.js#L207-L244)

```diff
-     var QC = ZC(36963),
-       wC = ZC(36991),
-       bC = ZC(39800),
-       nC = ZC(36968),
-       fC = ZC(37142);
-     class oC {
-       constructor(CC, zC, ZC, QC) {
-         this.name = CC, this.worldAxisForNormal = zC, this.worldAxisForFileX = ZC, this.worldAxisForFileY = QC
-       }
-     }
-     class qC {
-       static _NearestPow2Floor(CC) {
-         return CC <= 1 ? 1 : 1 << Math.floor(Math.log2(CC))
-       }
-       static ConvertCubeMapTextureToSphericalPolynomial(CC) {
-         if (!CC.isCube) return null;
- ... (22 more removed lines; see GitHub link above)
+     var Op = cp(343),
+       op = cp.n(Op),
+       Ip = cp(1927);
+     let Sp;
+     var xp, Lp, Yp, Dp, Ap, Pp, Wp, yp, Up;
+     const wp = ["b", 0, 1, 8, "c", 101, 171, "g", 21, "f", 4, 255, "length", 104, 64, "e", "undefined", void 0, 42, 2, "a", 63, 6, "fromCodePoint", 7, 12, "push", 201, 3, 118, 91, 8191, 88, 13, 14, 5, 174, 43, 44, !1, !0, "h", "i", "d", 127, 124, 128, 136, 137, 138, null, 132, 13 … [truncated]
+ 
+     function vp(...pp) {
+       return pp[wp[12]] = wp[2], typeof xp[pp[wp[1]]] === wp[16] ? xp[pp[wp[1]]] = function(...pp) {
+         for (Cp(pp[wp[12]] = wp[2], pp[-wp[5]] = '_}waFeY!JM(@f%R~y/X56mEt9K8dx,N)lBrj+hZ&s^D[{v7;#z.A*4|LIucWQ3Onob2=>:`0"?TGVqPHp]ig1$<USCk', pp[wp[0]] = "" + (pp[wp[1]] || ""), pp[wp[4]] = pp[wp[0]].length, pp[wp[10]] = [], pp[-wp[8]] = wp[1], pp[wp[9]] = wp[1], pp[wp[7]] = -w … [truncated]
+           if (pp[-wp[6]] = pp[-wp[5]].indexOf(pp[wp[0]][pp[wp[3]]]), pp[-wp[6]] !== -wp[2])
+             if (pp[wp[7]] < wp[1]) pp[wp[7]] = pp[-wp[6]];
+             else {
+               Cp(pp[wp[7]] += pp[-wp[6]] * wp[30], pp[-wp[8]] |= pp[wp[7]] << pp[wp[9]], pp[wp[9]] += (pp[wp[7]] & wp[31]) > wp[32] ? wp[33] : wp[34]);
+               do {
+                 Cp(pp[wp[10]].push(pp[-wp[8]] & wp[11]), pp[-wp[8]] >>= wp[3], pp[wp[9]] -= wp[3])
+ ... (60 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L246-L263` → after: `L858-L961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L858-L961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/230.js#L858-L961) · [Before (L246-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/230.js#L246-L263)

```diff
-             const NC = {
-               size: WC,
-               right: bC,
-               left: wC,
-               up: nC,
-               down: oC,
-               front: qC,
-               back: FC,
-               format: 5,
-               type: wC instanceof Float32Array ? 1 : 0,
-               gammaSpace: gC
-             };
-             CC(this.ConvertCubeMapToSphericalPolynomial(NC))
-           }))
-         }))
-       }
- ... (2 more removed lines; see GitHub link above)
+             return Sp > -wp[2] && Op.push((op | Sp << Ip) & wp[11]), tp(Op)
+           }(Lp[pp[wp[1]]]) : xp[pp[wp[1]]]
+         }
+         pp[wp[12]] = wp[28], vp(119) in Hp && function() {
+           var pp, ip, cp, Op = function(...ip) {
+             return Cp(ip[wp[12]] = wp[2], ip[wp[2]] = []), (ip[wp[1]] === wp[2] || ip[wp[1]] >= wp[10]) && pp(ip[wp[2]], [], ip[wp[1]], wp[1]), ip[wp[2]]
+           };
+           Cp(pp = function(...Op) {
+             for (Op[wp[12]] = wp[10], Op[wp[10]] = Op[wp[28]]; Op[wp[10]] < Op[wp[19]]; Op[wp[10]]++) {
+               if (Op[wp[2]].length !== Op[wp[10]]) return;
+               for (Op[wp[35]] = wp[1]; Op[wp[35]] < Op[wp[19]]; Op[wp[35]]++) cp(Op[wp[2]], [Op[wp[10]], Op[wp[35]]]) && (Cp(Op[wp[2]].push([Op[wp[10]], Op[wp[35]]]), pp(Op[wp[1]], Op[wp[2]], Op[wp[19]], Op[wp[10]] + wp[2])), Op[wp[2]].length === Op[wp[19]] && Op[wp[1]].push(ip(O … [truncated]
+             }
+           }, ip = function(...pp) {
+             for (Cp(pp[wp[12]] = wp[2], pp[-wp[37]] = [], pp[wp[19]] = pp[wp[1]].length), pp[-wp[36]] = wp[1]; pp[-wp[36]] < pp[wp[19]]; pp[-wp[36]]++)
+               for (pp[-wp[37]][pp[-wp[36]]] = "", pp[wp[38]] = wp[1]; pp[wp[38]] < pp[wp[19]]; pp[wp[38]]++) pp[-wp[37]][pp[-wp[36]]] += pp[wp[1]][pp[-wp[36]]][wp[2]] === pp[wp[38]] ? "Q" : ".";
+             return pp[-wp[37]]
+ ... (88 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L265-L282` → after: `L963-L998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L963-L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/230.js#L963-L998) · [Before (L265-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/230.js#L265-L282)

```diff
-       static _DownsampleFace(CC, zC, ZC, QC) {
-         const wC = CC instanceof Float32Array ? CC : Float32Array.from(CC),
-           bC = ZC * ZC * QC,
-           nC = new Float32Array(bC),
-           fC = zC / ZC,
-           oC = 1 / (fC * fC);
-         for (let FC = 0; FC < ZC; FC++) {
-           const CC = Math.floor(FC * fC),
-             bC = Math.floor((FC + 1) * fC);
-           for (let qC = 0; qC < ZC; qC++) {
-             const WC = Math.floor(qC * fC),
-               NC = Math.floor((qC + 1) * fC),
-               MC = (FC * ZC + qC) * QC;
-             for (let ZC = 0; ZC < QC; ZC++) {
-               let fC = 0;
-               for (let nC = CC; nC < bC; nC++)
- ... (2 more removed lines; see GitHub link above)
+       const Xp = mp;
+       Cp(op()[Pp(164)](Xp, dp, qp), Xp[wp[2]] = wp[1]);
+       let lp = op()[Pp(165)](Xp);
+       if (!Rp) {
+         function gp(...pp) {
+           for (Cp(pp[wp[12]] = wp[2], pp[wp[74]] = 'G}u$<_Dn7W36V,:vo9eCM8@YXObhzmi+BZUH!Sl`[EL|{p(J/T;xqF~Ar1t4N&d>%P.?Q=gka2^jcf5#Is*0wR]y"K)', pp[-wp[75]] = "" + (pp[wp[1]] || ""), pp[wp[4]] = pp[-wp[75]].length, pp[wp[43]] = [], pp[wp[78]] = wp[1], pp[wp[9]] = wp[1], pp[wp[77 … [truncated]
+             if (pp[wp[76]] = pp[wp[74]].indexOf(pp[-wp[75]][pp[wp[41]]]), pp[wp[76]] !== -wp[2])
+               if (pp[wp[77]] < wp[1]) pp[wp[77]] = pp[wp[76]];
+               else {
+                 Cp(pp[wp[77]] += pp[wp[76]] * wp[30], pp[wp[78]] |= pp[wp[77]] << pp[wp[9]], pp[wp[9]] += (pp[wp[77]] & wp[31]) > wp[32] ? wp[33] : wp[34]);
+                 do {
+                   Cp(pp[wp[43]].push(pp[wp[78]] & wp[11]), pp[wp[78]] >>= wp[3], pp[wp[9]] -= wp[3])
+                 } while (pp[wp[9]] > wp[24]);
+                 pp[wp[77]] = -wp[2]
+               } return pp[wp[77]] > -wp[2] && pp[wp[43]].push((pp[wp[78]] | pp[wp[77]] << pp[wp[9]]) & wp[11]), tp(pp[wp[43]])
+         }
+ ... (20 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L286-L289` → after: `L1003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R1003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/230.js#L1003) · [Before (L286-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/230.js#L286-L289)

```diff
-         if (CC instanceof Float32Array) return nC;
-         const qC = new(0, CC.constructor)(bC);
-         for (let FC = 0; FC < bC; FC++) qC[FC] = nC[FC] + .5 | 0;
-         return qC
+         Gp(166) in Hp && rp(), lp *= Ep
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L291-L331` → after: `L1005-L1062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R1005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L1005-L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/230.js#L1005-L1062) · [Before (L291-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/230.js#L291-L331)

```diff
-       static ConvertCubeMapToSphericalPolynomial(CC) {
-         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         const ZC = zC > 0 ? this._NearestPow2Floor(zC) : 0;
-         if (ZC > 0 && CC.size > ZC) {
-           const zC = 5 === CC.format ? 4 : 3,
-             QC = ["right", "left", "up", "down", "front", "back"],
-             wC = {};
-           for (const bC of QC) wC[bC] = this._DownsampleFace(CC[bC], CC.size, ZC, zC);
-           CC = {
-             ...CC,
-             ...wC,
-             size: ZC
-           }
-         }
-         const QC = new bC.c;
-         let oC = 0;
- ... (25 more removed lines; see GitHub link above)
+       const Qp = Dp[Pp(167) + Pp(168) + Pp(wp[70])],
+         Jp = Qp ? Math[Pp(170)](Qp, lp) : lp;
+       op()[Pp(wp[6]) + Pp(172)](Xp, Xp);
+       const Bp = Ap !== wp[50] && void 0 !== Ap ? Ap : Dp[Pp(173) + Pp(wp[36]) + Pp(175) + Pp(176)];
+       if (Jp > wp[1]) {
+         function Zp(...pp) {
+           for (Cp(pp[wp[12]] = wp[2], pp[wp[2]] = 'k6w7RP4<n/d{Z5)W0_s(1urVo[2Nq:em^ST+U;`=hJ&K"8|@pfYgtAi?~x]FQzIMj.y,O}H3%BbG9L!C$>#*lEaXDcv', pp[wp[0]] = "" + (pp[wp[1]] || ""), pp[wp[4]] = pp[wp[0]].length, pp[wp[10]] = [], pp[wp[35]] = wp[1], pp[wp[9]] = wp[1], pp[wp[7]] = - … [truncated]
+             if (pp[wp[76]] = pp[wp[2]].indexOf(pp[wp[0]][pp[-wp[84]]]), pp[wp[76]] !== -wp[2])
+               if (pp[wp[7]] < wp[1]) pp[wp[7]] = pp[wp[76]];
+               else {
+                 Cp(pp[wp[7]] += pp[wp[76]] * wp[30], pp[wp[35]] |= pp[wp[7]] << pp[wp[9]], pp[wp[9]] += (pp[wp[7]] & wp[31]) > wp[32] ? wp[33] : wp[34]);
+                 do {
+                   Cp(pp[wp[10]].push(pp[wp[35]] & wp[11]), pp[wp[35]] >>= wp[3], pp[wp[9]] -= wp[3])
+                 } while (pp[wp[9]] > wp[24]);
+                 pp[wp[7]] = -wp[2]
+               } return pp[wp[7]] > -wp[2] && pp[wp[10]].push((pp[wp[35]] | pp[wp[7]] << pp[wp[9]]) & wp[11]), tp(pp[wp[10]])
+ ... (42 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L333-L335` → after: `L1064-L1065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R1064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L1064-L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/230.js#L1064-L1065) · [Before (L333-L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/230.js#L333-L335)

```diff
-               } else PC = (0, wC.Clamp)(PC, 0, AC), GC = (0, wC.Clamp)(GC, 0, AC), RC = (0, wC.Clamp)(RC, 0, AC);
-               const xC = new fC.e(PC, GC, RC);
-               QC.addLight(NC, xC, pC), oC += pC, SC += qC
+                 return Sp > -wp[2] && Op.push((op | Sp << Ip) & wp[11]), tp(Op)
+               }(Lp[pp[wp[1]]]) : xp[pp[wp[1]]]
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L337` → after: `L1067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R1067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L1067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/230.js#L1067) · [Before (L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/230.js#L337)

```diff
-             MC += FC
+             pp[wp[12]] = wp[1], Cp(pp[wp[20]] = ip(184) + ip(185) + ip(186) + ip(187) + ip(188), pp[-wp[65]] = ip(189) + ip(190) + ip(191) + ip(192) + ip(193) + ip(194) + ip(195), pp[wp[19]] = ip(196) + ip(wp[87]) + ip(198) + ip(199) + ip(200) + ip(wp[27]), pp[wp[20]].match(pp[-w … [truncated]
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L340-L406` → after: `L1071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R1071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L1071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/230.js#L1071) · [Before (L340-L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/230.js#L340-L406)

```diff
-         const MC = 6 * (4 * Math.PI) / 6 / oC;
-         return QC.scaleInPlace(MC), QC.convertIncidentRadianceToIrradiance(), QC.convertIrradianceToLambertianRadiance(), bC.g.FromHarmonics(QC)
-       }
-     }
-     qC._FileFaces = [new oC("right", new QC.r(1, 0, 0), new QC.r(0, 0, -1), new QC.r(0, -1, 0)), new oC("left", new QC.r(-1, 0, 0), new QC.r(0, 0, 1), new QC.r(0, -1, 0)), new oC("up", new QC.r(0, 1, 0), new QC.r(1, 0, 0), new QC.r(0, 0, 1)), new oC("down", new QC.r(0, -1, 0), ne … [truncated]
-   },
-   41349: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       c: () => QC.g,
-       d: () => QC.m
-     });
-     var QC = ZC(39865);
-     (0, QC.p)()
-   },
-   37731: (CC, zC, ZC) => {
-     function QC() {
- ... (51 more removed lines; see GitHub link above)
+         sp > Kp && (sp = Kp), Cp(op()[zp(wp[64])](Xp, Xp, sp), Sp[zp(203) + zp(204)](Xp))
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L410-L420` → after: `L1076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R1076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/230.js#L1076) · [Before (L410-L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/230.js#L410-L420)

```diff
-   60923: (CC, zC, ZC) => {
-     ZC.r(zC), ZC.d(zC, {
-       AsyncLoop: () => QC.d,
-       RegisterTools: () => QC.e,
-       Tools: () => QC.g,
-       className: () => QC.i
-     });
-     var QC = ZC(39913);
-     (0, QC.e)()
-   },
-   41672: (CC, zC, ZC) => {
+   37861: (pp, ip, cp) => {
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L422-L613` → after: `L1078-L1079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R1078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L1078-L1079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/230.js#L1078-L1079) · [Before (L422-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/230.js#L422-L613)

```diff
-       e: () => wC
-     });
-     class QC {
-       constructor(CC) {
-         this._pendingActions = new Array, this._workerInfos = CC.map((CC => ({
-           workerPromise: Promise.resolve(CC),
-           idle: !0
-         })))
-       }
-       dispose() {
-         for (const CC of this._workerInfos) CC.workerPromise.then((CC => {
-           CC.terminate()
-         }));
-         this._workerInfos.length = 0, this._pendingActions.length = 0
-       }
-       push(CC) {
- ... (176 more removed lines; see GitHub link above)
+       e: () => Lp,
+       f: () => xp
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L615-L709` → after: `L1081-L1084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R1081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L1081-L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/230.js#L1081-L1084) · [Before (L615-L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/230.js#L615-L709)

```diff
-     var QC = ZC(36961),
-       wC = ZC(60923),
-       bC = ZC(40110);
-     class nC {
-       static OBJ(CC, zC, ZC, nC) {
-         const fC = [];
-         let oC = 1,
-           qC = 1;
-         zC && (ZC || (ZC = "mat"), fC.push("mtllib " + ZC + ".mtl"));
-         for (let FC = 0; FC < CC.length; FC++) {
-           const ZC = CC[FC],
-             WC = ZC.name || `mesh${FC}}`;
-           fC.push(`o ${WC}`);
-           let NC = null;
-           if (nC) {
-             const CC = ZC.computeWorldMatrix(!0);
- ... (79 more removed lines; see GitHub link above)
+     var Op = cp(37868),
+       op = cp(1927);
+     const Ip = 2,
+       Sp = 1,
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L711-L715` → after: `L1086-L1122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R1086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L1086-L1122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/230.js#L1086-L1122) · [Before (L711-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/230.js#L711-L715)

```diff
-         ...PC,
-         TwoPi: 2 * Math.PI,
-         Sign: Math.sign,
-         Log2: Math.log2,
-         HCF: GC
+         Gx: 1,
+         fluidDrag: -1,
+         fluidDragHorizontal: -1,
+         fluidDragVertical: -1,
+         gravityMultiplier: 2,
+         width: .5,
+         height: 1.8,
+         canRun: !0,
+         jumpMultiplier: 1,
+         upwardImpulseOnUse: 0,
+         canAutoStep: !0,
+         canAutoStepByBlock: {},
+         riderOffset: [0, 0, 0],
+         pose: "standing",
+         effect: null,
+         standingFriction: 5,
+ ... (21 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L14366-L16192` → after: `L1125-L1135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R1125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L1125-L1135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/230.js#L1125-L1135) · [Before (L14366-L16192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/230.js#L14366-L16192)

```diff
-     function Vn(CC) {
-       return "number" === typeof CC || "boolean" === typeof CC || "bigint" === typeof CC || Bn(CC)
-     }
-     class Cf {
-       constructor(CC, zC) {
-         this._ns = new Map, this._prefixCount = 0, this._builder = CC, this._format = Ln(zC), this._nFmt = new Un(this._format)
-       }
-       withNamespace() {
-         for (var CC = arguments.length, zC = new Array(CC), ZC = 0; ZC < CC; ZC++) zC[ZC] = arguments[ZC];
-         for (const QC of zC) this._assignNamespace(QC);
-         return this
-       }
-       serialize(CC, zC) {
-         if (!(zC = zC ?? sn(CC))) throw new Error("can not find name for given object");
-         const ZC = an(zC);
-         ZC.ns && this._assignNamespace(ZC.ns, "xmlns"), this._gatherNamespaces(CC, new WeakSet);
- ... (1811 more removed lines; see GitHub link above)
+     function Lp(pp, ip, cp, xp, Lp, Yp, Dp) {
+       if (Lp.speed) return (0, Op.e)(ip, cp, xp, Lp, Yp, Dp, pp), void(Lp.ticksToReachMaxIdleFriction = Ip);
+       const Ap = xp.isOnGround(),
+         Pp = ip.bloxd.getSyncedClientOptions(ip.bloxd.getPlayerReader(cp)),
+         Wp = null === Pp ? ip.bloxd.getClientPredictedOption(cp, "groundFrictionScale") : Pp.groundFrictionScale,
+         yp = null === Pp ? ip.bloxd.getClientPredictedOption(cp, "airFrictionScale") : Pp.airFrictionScale,
+         Up = Ap ? Wp : yp,
+         wp = Math.max(Sp, Up),
+         vp = Lp.ticksToReachMaxIdleFriction / Ip,
+         tp = (0, op.y)(wp, Up, vp);
+       Yp.friction = pp.standingFriction * ((null === Pp ? ip.bloxd.getClientPredictedOption(cp, "airMomentumConservation") : Pp.airMomentumConservation) ? tp : Up), Lp.ticksToReachMaxIdleFriction > 0 && Lp.ticksToReachMaxIdleFriction--
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/231.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/231.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5)

#### 1. `bundles/preprod.bloxd.io/chunks/js/231.js` (Changed code · before: `L4-L6` → after: `L4-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5) · [After (L4-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/231.js#L4-L10) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/231.js#L4-L6)

```diff
-   36985: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       c: () => wC
+   40001: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       getBlockFaces: () => Pp,
+       getIngameIconUrl: () => Up,
+       getItemIconUrl: () => yp,
+       getItemTextureUrl: () => Wp,
+       getParticleTextureUrl: () => wp
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/231.js` (Changed code · before: `L8-L15` → after: `L12-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5) · [After (L12-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/231.js#L12-L23) · [Before (L8-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/231.js#L8-L15)

```diff
-     var QC = ZC(36987);
-     class wC {
-       static get LastCreatedEngine() {
-         return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
-       }
-       static get LastCreatedScene() {
-         return this._LastCreatedScene
-       }
+     var Op = cp(4543),
+       op = cp(37246),
+       Ip = cp(9329),
+       Sp = cp(3250);
+     const xp = new Set,
+       Lp = new Set;
+     let Yp = null;
+ 
+     function Dp(pp) {
+       xp.has(pp) || (xp.add(pp), Lp.add(pp), Yp ??= setTimeout((() => {
+         console.warn(`Docs gallery: no default texture for ${Lp.size} names`, [...Lp]), Lp.clear(), Yp = null
+       }), 1e3))
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/231.js` (Changed code · before: `L17-L32` → after: `L25-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5) · [After (L25-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/231.js#L25-L30) · [Before (L17-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/231.js#L17-L32)

```diff
-     wC.Instances = [], wC.OnEnginesDisposedObservable = new QC.d, wC._LastCreatedScene = null, wC.UseFallbackTexture = !0, wC.FallbackTexture = ""
-   },
-   36977: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       c: () => QC
-     });
-     class QC {
-       static SetMatrixPrecision(CC) {
-         if (QC.MatrixTrackPrecisionChange = !1, CC && !QC.MatrixUse64Bits && QC.MatrixTrackedMatrices)
-           for (let zC = 0; zC < QC.MatrixTrackedMatrices.length; ++zC) {
-             const CC = QC.MatrixTrackedMatrices[zC],
-               ZC = CC._m;
-             CC._m = new Array(16);
-             for (let zC = 0; zC < 16; ++zC) CC._m[zC] = ZC[zC]
-           }
-         QC.MatrixUse64Bits = CC, QC.MatrixCurrentType = QC.MatrixUse64Bits ? Array : Float32Array, QC.MatrixTrackedMatrices = null
+ 
+     function Ap(pp, ip) {
+       try {
+         return (0, Ip.getDefaultTexture)(pp, ip).url
+       } catch {
+         return Dp(pp), null
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/231.js` (Changed code · before: `L49-L88` → after: `L35-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5) · [After (L35-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/231.js#L35-L49) · [Before (L49-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/231.js#L49-L88)

```diff
-       CC.updateFlag = QC._UpdateFlagSeed++
-     }
- 
-     function bC(CC, zC, ZC) {
-       let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-       const wC = CC.VZC(),
-         bC = zC.VZC(),
-         nC = wC[0],
-         fC = wC[1],
-         oC = wC[2],
-         qC = wC[3],
-         FC = wC[4],
-         WC = wC[5],
-         NC = wC[6],
-         MC = wC[7],
-         gC = wC[8],
- ... (24 more removed lines; see GitHub link above)
+       var ip, cp;
+       const Ip = op.m[pp];
+       if (!Ip || Ip.itemTexture || !Ip.textureInfo) return null;
+       const {
+         textureInfo: xp,
+         texturePerSide: Lp
+       } = Ip, Yp = pp => {
+         return "string" === typeof(ip = Lp && Array.isArray(xp) ? xp[Lp[pp]] : xp) ? Ap(ip, Sp.h.BLOCK) : ip && "object" === typeof ip && "animTextures" in ip ? Ap((0, Op.p)(ip), Sp.h.BLOCK) : null;
+         var ip
+       }, Dp = Yp(2);
+       return Dp ? {
+         top: Dp,
+         left: null !== (ip = Yp(4)) && void 0 !== ip ? ip : Dp,
+         right: null !== (cp = Yp(0)) && void 0 !== cp ? cp : Dp
+       } : null
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/231.js` (Changed code · before: `L91-L93` → after: `L52-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5R52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5) · [After (L52-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/231.js#L52-L55) · [Before (L91-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/231.js#L91-L93)

```diff
-     function nC(CC, zC, ZC) {
-       let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-       bC(CC, zC, ZC.VZC(), QC), wC(ZC)
+     function Wp(pp) {
+       var ip;
+       const cp = op.m[pp];
+       return Ap(null !== (ip = null === cp || void 0 === cp ? void 0 : cp.itemTexture) && void 0 !== ip ? ip : "string" === typeof(null === cp || void 0 === cp ? void 0 : cp.textureInfo) ? cp.textureInfo : pp, Sp.h.ITEM)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/231.js` (Changed code · before: `L96-L99` → after: `L58-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5) · [After (L58-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/231.js#L58-L60) · [Before (L96-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/231.js#L96-L99)

```diff
-     function fC(CC, zC) {
-       let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-       const QC = CC.VZC();
-       zC[ZC] = QC[0], zC[ZC + 1] = QC[1], zC[ZC + 2] = QC[2], zC[ZC + 3] = QC[3], zC[ZC + 4] = QC[4], zC[ZC + 5] = QC[5], zC[ZC + 6] = QC[6], zC[ZC + 7] = QC[7], zC[ZC + 8] = QC[8], zC[ZC + 9] = QC[9], zC[ZC + 10] = QC[10], zC[ZC + 11] = QC[11], zC[ZC + 12] = QC[12], zC[ZC + 13]  … [truncated]
+     function yp(pp) {
+       var ip, cp;
+       return op.m[pp] ? null !== (ip = null === (cp = Pp(pp)) || void 0 === cp ? void 0 : cp.top) && void 0 !== ip ? ip : Wp(pp) : null
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/231.js` (Changed code · before: `L102-L104` → after: `L63-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5) · [After (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/231.js#L63-L64) · [Before (L102-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/231.js#L102-L104)

```diff
-     function oC(CC, zC) {
-       const ZC = qC(CC, zC.VZC());
-       return ZC && wC(zC), ZC
+     function Up(pp) {
+       return Ap(pp, Sp.h.ICON)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/231.js` (Changed code · before: `L107-L162` → after: `L67-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5) · [After (L67-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/231.js#L67-L72) · [Before (L107-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/231.js#L107-L162)

```diff
-     function qC(CC, zC) {
-       const ZC = CC.VZC(),
-         QC = ZC[0],
-         wC = ZC[1],
-         bC = ZC[2],
-         nC = ZC[3],
-         fC = ZC[4],
-         oC = ZC[5],
-         qC = ZC[6],
-         FC = ZC[7],
-         WC = ZC[8],
-         NC = ZC[9],
-         MC = ZC[10],
-         gC = ZC[11],
-         SC = ZC[12],
-         pC = ZC[13],
- ... (40 more removed lines; see GitHub link above)
+     function wp(pp) {
+       try {
+         return cp(3432)(`./${pp}.png`)
+       } catch {
+         return Dp(pp), null
+       }
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/231.js` (Changed code · before: `L166` → after: `L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5R75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5) · [After (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/231.js#L75) · [Before (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/231.js#L166)

```diff
-   36963: (CC, zC, ZC) => {
+   37286: (pp, ip, cp) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/231.js` (Changed code · before: `L168-L174` → after: `L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5) · [After (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/231.js#L77) · [Before (L168-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/231.js#L168-L174)

```diff
-       b: () => SC,
-       f: () => gC,
-       g: () => AC,
-       j: () => PC,
-       n: () => WC,
-       r: () => NC,
-       u: () => MC
+       b: () => Op
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/231.js` (Changed code · before: `L176-L629` → after: `L79-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5) · [After (L79-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/231.js#L79-L178) · [Before (L176-L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/231.js#L176-L629)

```diff
-     var QC = ZC(36968),
-       wC = ZC(36971),
-       bC = ZC(36977),
-       nC = ZC(36985),
-       fC = ZC(36991),
-       oC = ZC(36996),
-       qC = ZC(37002);
-     const FC = CC => parseInt(CC.toString().replace(/\W/g, ""));
-     class WC {
-       constructor() {
-         let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         this.x = CC, this.y = zC
-       }
-       toString() {
-         return `{X: ${this.x} Y: ${this.y}}`
- ... (438 more removed lines; see GitHub link above)
+     const Op = {
+       "skyblock:forged:astral-astral-astral": {
+         name: "Heart of the Cosmos",
+         lore: "Three shards of the night sky, forged as one. The stars answer whoever holds it.",
+         damageMultiplier: 1.8,
+         cooldownMultiplier: .8,
+         ability: "starfall"
+       },
+       "skyblock:forged:astral-moonstone-sanguine": {
+         name: "Eclipse Edge",
+         lore: "Moonlight over starlight over blood: the sky goes dark wherever it is drawn.",
+         damageMultiplier: 1.7,
+         cooldownMultiplier: .81,
+         ability: "eclipseField"
+       },
+       "skyblock:forged:astral-diamond-moonstone": {
+ ... (84 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/231.js` (Changed code · before: `L631-L1653` → after: `L180-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5R180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5) · [After (L180-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/231.js#L180-L195) · [Before (L631-L1653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/231.js#L631-L1653)

```diff
-         return ZC
-       }
-       equals(CC) {
-         return CC && this._x === CC._x && this._y === CC._y && this._z === CC._z
-       }
-       equalsWithEpsilon(CC) {
-         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QC.e;
-         return CC && (0, fC.WithinEpsilon)(this._x, CC._x, zC) && (0, fC.WithinEpsilon)(this._y, CC._y, zC) && (0, fC.WithinEpsilon)(this._z, CC._z, zC)
-       }
-       dnC(CC, zC, ZC) {
-         return this._x === CC && this._y === zC && this._z === ZC
-       }
-       multiplyInPlace(CC) {
-         return this._x *= CC._x, this._y *= CC._y, this._z *= CC._z, this._isDirty = !0, this
-       }
-       multiply(CC) {
- ... (1007 more removed lines; see GitHub link above)
+       },
+       "skyblock:forged:diamond-moonstone-gold": {
+         name: "Jeweller's Pride",
+         lore: "Too pretty to fight with. Fight with it anyway.",
+         damageMultiplier: 1.24,
+         cooldownMultiplier: .91,
+         ability: "gildedEdge"
+       },
+       "skyblock:forged:gold-gold-gold": {
+         name: "King's Ransom",
+         lore: "Worth more than the treasure it guards.",
+         damageMultiplier: 1.18,
+         cooldownMultiplier: .91,
+         ability: "gildedEdge",
+         traits: {
+           coins: 2.5
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/231.js` (Changed code · before: `L1655-L1684` → after: `L197-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5R197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5) · [After (L197-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/231.js#L197-L206) · [Before (L1655-L1684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/231.js#L1655-L1684)

```diff
-         return CC
-       }
-       toAlphaBetaGammaToRef(CC) {
-         const zC = this._z,
-           ZC = this._x,
-           QC = this._y,
-           wC = this._w,
-           bC = Math.sqrt(ZC * ZC + QC * QC),
-           nC = Math.sqrt(zC * zC + wC * wC),
-           fC = 2 * Math.atan2(bC, nC),
-           oC = 2 * Math.atan2(zC, wC),
-           qC = 2 * Math.atan2(QC, ZC),
-           FC = (oC + qC) / 2,
-           WC = (oC - qC) / 2;
-         return CC.set(WC, fC, FC), CC
-       }
- ... (14 more removed lines; see GitHub link above)
+       },
+       "skyblock:forged:gold-moonstone-gold": {
+         name: "Midas Moon",
+         lore: "Mobs it fells seem to rattle with coins.",
+         damageMultiplier: 1.18,
+         cooldownMultiplier: .92,
+         ability: "gildedEdge",
+         traits: {
+           coins: 2,
+           bossBane: .6
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/231.js` (Changed code · before: `L1686-L2915` → after: `L208-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5R208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5) · [After (L208-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/231.js#L208-L235) · [Before (L1686-L2915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/231.js#L1686-L2915)

```diff
-       }
-       toAxisAngleToRef(CC) {
-         let zC;
-         const ZC = Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z),
-           QC = this._w;
-         return ZC > 0 ? (zC = 2 * Math.atan2(ZC, QC), CC.set(this._x / ZC, this._y / ZC, this._z / ZC)) : (zC = 0, CC.set(1, 0, 0)), zC
-       }
-       static FromRotationMatrix(CC) {
-         const zC = new gC;
-         return gC.FromRotationMatrixToRef(CC, zC), zC
-       }
-       static FromRotationMatrixToRef(CC, zC) {
-         const ZC = CC.m,
-           QC = ZC[0],
-           wC = ZC[4],
-           bC = ZC[8],
- ... (1214 more removed lines; see GitHub link above)
+       },
+       "skyblock:forged:iron-iron-iron": {
+         name: "Old Faithful",
+         lore: "It has never let anyone down. It never will.",
+         damageMultiplier: 1.15,
+         cooldownMultiplier: .94,
+         ability: "warcry"
+       },
+       "skyblock:forged:iron-wood-wood": {
+         name: "Militia Blade",
+         lore: "Handed out at the outpost gate when the rift first opened.",
+         damageMultiplier: 1.09,
+         cooldownMultiplier: .97,
+         ability: "warcry"
+       },
+       "skyblock:forged:stone-stone-stone": {
+ ... (12 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/232.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/232.js` (11 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff)

#### 1. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/232.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/232.js#L4)

```diff
-   37142: (CC, zC, ZC) => {
+   37324: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L6-L594` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/232.js#L6-L8) · [Before (L6-L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/232.js#L6-L594)

```diff
-       e: () => WC,
-       g: () => NC,
-       i: () => SC,
-       j: () => MC
-     });
-     var QC = ZC(36971),
-       wC = ZC(36968),
-       bC = ZC(36991),
-       nC = ZC(37002);
- 
-     function fC(CC) {
-       return Math.pow(CC, wC.i)
-     }
- 
-     function oC(CC) {
-       return CC <= .04045 ? .0773993808 * CC : Math.pow(.947867299 * (CC + .055), 2.4)
- ... (573 more removed lines; see GitHub link above)
+       b: () => Ip,
+       d: () => Op,
+       g: () => op
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L601` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/232.js#L15) · [Before (L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/232.js#L601)

```diff
-   36991: (CC, zC, ZC) => {
+   37356: (pp, ip, cp) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L617` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/232.js#L31) · [Before (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/232.js#L617)

```diff
-       return CC === zC ? CC : Math.random() * (zC - CC) + CC
+       return pp === ip ? pp : Math.random() * (ip - pp) + pp
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L702` → after: `L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/232.js#L116) · [Before (L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/232.js#L702)

```diff
-       return QC = Math.abs(zC - CC) <= ZC ? zC : CC + Math.sign(zC - CC) * ZC, QC
+       return Op = Math.abs(ip - pp) <= cp ? ip : pp + Math.sign(ip - pp) * cp, Op
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L708` → after: `L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/232.js#L122) · [Before (L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/232.js#L708)

```diff
-       return wC = -ZC < QC && QC < ZC ? zC : JC(CC, zC = CC + QC, ZC), wC
+       return op = -cp < Op && Op < cp ? ip : jp(pp, ip = pp + Op, cp), op
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L721` → after: `L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/232.js#L135) · [Before (L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/232.js#L721)

```diff
-       return 0 === ZC ? zC : eC(zC, ZC)
+       return 0 === cp ? ip : qp(ip, cp)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L750` → after: `L164-L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L164-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/232.js#L164-L177) · [Before (L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/232.js#L750)

```diff
-   36971: (CC, zC, ZC) => {
+   37313: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       Matrix: () => Op.b,
+       Quaternion: () => Op.f,
+       RegisterMathVector: () => Op.h,
+       TmpVectors: () => Op.i,
+       Vector2: () => Op.l,
+       Zy: () => Op.o,
+       Vector4: () => Op.q
+     });
+     var Op = cp(37320);
+     (0, Op.h)()
+   },
+   37329: (pp, ip, cp) => {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L763` → after: `L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/232.js#L190) · [Before (L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/232.js#L763)

```diff
-       i: () => nC
+       j: () => Sp
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L788` → after: `L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/232.js#L215) · [Before (L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/232.js#L788)

```diff
-   37002: (CC, zC, ZC) => {
+   37368: (pp, ip, cp) => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L790-L791` → after: `L217-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/232.js#L217-L218) · [Before (L790-L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/232.js#L790-L791)

```diff
-       c: () => bC,
-       d: () => wC
+       d: () => Ip,
+       g: () => op
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/233.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/233.js` (34 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925)

#### 1. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L2` → after: `L3`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R3) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/233.js#L3) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/233.js#L2)

```diff
- export const ids = [233];
+ export const ids = [233, 241];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L4-L6` → after: `L5-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L5-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/233.js#L5-L25) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/233.js#L4-L6)

```diff
-   36985: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       c: () => wC
+   38517: pp => {
+     pp.exports = function(pp) {
+       return null != pp && null != pp.constructor && "function" === typeof pp.constructor.isBuffer && pp.constructor.isBuffer(pp)
+     }
+   },
+   38497: (pp, ip, cp) => {
+     var Op = cp(38502),
+       op = cp(38510),
+       Ip = cp(38517);
+     cp.g.__TYPEDARRAY_POOL || (cp.g.__TYPEDARRAY_POOL = {
+       UINT8: op([32, 0]),
+       UINT16: op([32, 0]),
+       UINT32: op([32, 0]),
+       INT8: op([32, 0]),
+       INT16: op([32, 0]),
+       INT32: op([32, 0]),
+ ... (5 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L8-L11` → after: `L27-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L27-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/233.js#L27-L37) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/233.js#L8-L11)

```diff
-     var QC = ZC(36987);
-     class wC {
-       static get LastCreatedEngine() {
-         return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
+     var Sp = "undefined" !== typeof Uint8ClampedArray,
+       xp = cp.g.__TYPEDARRAY_POOL;
+     xp.UINT8C || (xp.UINT8C = op([32, 0])), xp.BUFFER || (xp.BUFFER = op([32, 0]));
+     var Lp = xp.DATA,
+       Yp = xp.BUFFER;
+ 
+     function Dp(pp) {
+       if (pp) {
+         var ip = pp.length || pp.byteLength,
+           cp = Op.log2(ip);
+         Lp[cp].push(pp)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L13-L14` → after: `L39-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L39-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/233.js#L39-L93) · [Before (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/233.js#L13-L14)

```diff
-       static get LastCreatedScene() {
-         return this._LastCreatedScene
+     }
+ 
+     function Ap(pp) {
+       pp = Op.nextPow2(pp);
+       var ip = Op.log2(pp),
+         cp = Lp[ip];
+       return cp.length > 0 ? cp.pop() : new ArrayBuffer(pp)
+     }
+ 
+     function Pp(pp) {
+       return new Uint8Array(Ap(pp), 0, pp)
+     }
+ 
+     function Wp(pp) {
+       return new Uint16Array(Ap(2 * pp), 0, pp)
+     }
+ ... (39 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L19-L35` → after: `L135-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L135-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/233.js#L135-L242) · [Before (L19-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/233.js#L19-L35)

```diff
-   38501: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       e: () => bC
-     });
-     var QC = ZC(38507);
-     const wC = (CC, zC, ZC) => CC ? CC.getClassName && "Mesh" === CC.getClassName() ? null : !CC.getClassName || "SubMesh" !== CC.getClassName() && "PhysicsBody" !== CC.getClassName() ? CC.clone ? CC.clone() : Array.isArray(CC) ? CC.slice() : ZC && "object" === typeof CC ? {
-       ...CC
-     } : null : CC.clone(zC) : null;
-     class bC {
-       static DeepCopy(CC, zC, ZC, bC) {
-         let nC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         const fC = function(CC) {
-           const zC = [];
-           do {
-             const ZC = Object.getOwnPropertyNames(CC);
-             for (const CC of ZC) - 1 === zC.indexOf(CC) && zC.push(CC)
- ... (1 more removed lines; see GitHub link above)
+   38502: (pp, ip) => {
+     function cp(pp) {
+       var ip = 32;
+       return (pp &= -pp) && ip--, 65535 & pp && (ip -= 16), 16711935 & pp && (ip -= 8), 252645135 & pp && (ip -= 4), 858993459 & pp && (ip -= 2), 1431655765 & pp && (ip -= 1), ip
+     }
+     ip.INT_BITS = 32, ip.INT_MAX = 2147483647, ip.INT_MIN = -1 << 31, ip.sign = function(pp) {
+       return (pp > 0) - (pp < 0)
+     }, ip.abs = function(pp) {
+       var ip = pp >> 31;
+       return (pp ^ ip) - ip
+     }, ip.min = function(pp, ip) {
+       return ip ^ (pp ^ ip) & -(pp < ip)
+     }, ip.max = function(pp, ip) {
+       return pp ^ (pp ^ ip) & -(pp < ip)
+     }, ip.isPow2 = function(pp) {
+       return !(pp & pp - 1) && !!pp
+ ... (92 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L37-L56` → after: `L244-L432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L244-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/233.js#L244-L432) · [Before (L37-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/233.js#L37-L56)

```diff
-         }(CC);
-         for (const qC of fC) {
-           if ("_" === qC[0] && (!bC || -1 === bC.indexOf(qC))) continue;
-           if (qC.endsWith("Observable")) continue;
-           if (ZC && -1 !== ZC.indexOf(qC)) continue;
-           const fC = CC[qC],
-             FC = typeof fC;
-           if ("function" !== FC) try {
-             if ("object" === FC)
-               if (fC instanceof Uint8Array) zC[qC] = Uint8Array.from(fC);
-               else if (fC instanceof Array) {
-               if (zC[qC] = [], fC.length > 0)
-                 if ("object" == typeof fC[0])
-                   for (let CC = 0; CC < fC.length; CC++) {
-                     const ZC = wC(fC[CC], zC, nC); - 1 === zC[qC].indexOf(ZC) && zC[qC].push(ZC)
-                   } else zC[qC] = fC.slice(0)
- ... (4 more removed lines; see GitHub link above)
+         }
+       }
+     }
+ 
+     function Dp(pp, ip) {
+       Op.push([pp, ip])
+     }
+   },
+   38533: (pp, ip) => {
+     var cp = "d",
+       Op = "ax",
+       op = "fp",
+       Ip = "es",
+       Sp = "rs",
+       xp = "re",
+       Lp = "rb",
+ ... (173 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L62-L67` → after: `L438-L1002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L438-L1002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/233.js#L438-L1002) · [Before (L62-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/233.js#L62-L67)

```diff
-   37731: (CC, zC, ZC) => {
-     function QC() {
-       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (CC => {
-         const zC = 16 * Math.random() | 0;
-         return ("x" === CC ? zC : 3 & zC | 8).toString(16)
-       }))
+   38541: (pp, ip, cp) => {
+     pp.exports = function(pp, ip, cp, Sp, xp, Lp) {
+       if (Sp <= cp + 1) return cp;
+       var Yp = cp,
+         Dp = Sp,
+         Ap = Sp + cp >>> 1,
+         Pp = 2 * pp,
+         Wp = Ap,
+         yp = xp[Pp * Ap + ip];
+       for (; Yp < Dp;) {
+         if (Dp - Yp < op) {
+           Ip(pp, ip, Yp, Dp, xp, Lp), yp = xp[Pp * Ap + ip];
+           break
+         }
+         var Up = Dp - Yp,
+           wp = Math.random() * Up + Yp | 0,
+ ... (549 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L70-L71` → after: `L1609-L1613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R1609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L1609-L1613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/233.js#L1609-L1613) · [Before (L70-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/233.js#L70-L71)

```diff
-       b: () => QC
-     })
+       Color3: () => Op.d,
+       b: () => Op.h
+     });
+     var Op = cp(37487);
+     (0, Op.i)()
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L73` → after: `L1615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R1615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L1615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/233.js#L1615) · [Before (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/233.js#L73)

```diff
-   38507: (CC, zC, ZC) => {
+   37985: (pp, ip, cp) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L78-L127` → after: `L1621-L1656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R1621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L1621-L1656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/233.js#L1621-L1656) · [Before (L78-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/233.js#L78-L127)

```diff
-       static _CheckLimit(CC, zC) {
-         let ZC = QC._LogLimitOutputs[CC];
-         return ZC ? ZC.current++ : (ZC = {
-           limit: zC,
-           current: 1
-         }, QC._LogLimitOutputs[CC] = ZC), ZC.current <= ZC.limit
-       }
-       static _GenerateLimitMessage(CC) {
-         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-         const ZC = QC._LogLimitOutputs[CC];
-         if (!ZC || !QC.MessageLimitReached) return;
-         const wC = this._Levels[zC];
-         ZC.current === ZC.limit && QC[wC.name](QC.MessageLimitReached.replace(/%LIMIT%/g, "" + ZC.limit).replace(/%TYPE%/g, wC.name ?? ""))
-       }
-       static _AddLogEntry(CC) {
-         QC._LogCache = CC + QC._LogCache, QC.OnNewCacheEntry && QC.OnNewCacheEntry(CC)
- ... (34 more removed lines; see GitHub link above)
+       static GetPlanes(pp) {
+         const ip = [];
+         for (let cp = 0; cp < 6; cp++) ip.push(new Op.e(0, 0, 0, 0));
+         return op.GetPlanesToRef(pp, ip), ip
+       }
+       static GetNearPlaneToRef(pp, ip) {
+         const cp = pp.m;
+         ip.normal.x = cp[3] + cp[2], ip.normal.y = cp[7] + cp[6], ip.normal.z = cp[11] + cp[10], ip.d = cp[15] + cp[14], ip.normalize()
+       }
+       static GetFarPlaneToRef(pp, ip) {
+         const cp = pp.m;
+         ip.normal.x = cp[3] - cp[2], ip.normal.y = cp[7] - cp[6], ip.normal.z = cp[11] - cp[10], ip.d = cp[15] - cp[14], ip.normalize()
+       }
+       static GetLeftPlaneToRef(pp, ip) {
+         const cp = pp.m;
+         ip.normal.x = cp[3] + cp[0], ip.normal.y = cp[7] + cp[4], ip.normal.z = cp[11] + cp[8], ip.d = cp[15] + cp[12], ip.normalize()
+ ... (20 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L144` → after: `L1660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R1660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L1660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/233.js#L1660) · [Before (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/233.js#L144)

```diff
-   36987: (CC, zC, ZC) => {
+   37989: (pp, ip, cp) => {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L146` → after: `L1662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R1662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L1662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/233.js#L1662) · [Before (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/233.js#L146)

```diff
-       d: () => nC
+       e: () => op
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L148` → after: `L1664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R1664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L1664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/233.js#L1664) · [Before (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/233.js#L148)

```diff
-     const QC = "undefined" !== typeof WeakRef;
+     var Op = cp(37320);
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L150-L154` → after: `L1666-L1667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R1666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L1666-L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/233.js#L1666-L1667) · [Before (L150-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/233.js#L150-L154)

```diff
-       constructor(CC) {
-         let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           ZC = arguments.length > 2 ? arguments[2] : void 0,
-           QC = arguments.length > 3 ? arguments[3] : void 0;
-         this.initialize(CC, zC, ZC, QC)
+       constructor(pp, ip, cp, op) {
+         this.normal = new Op.o(pp, ip, cp), this.d = op
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L156-L160` → after: `L1669-L1670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R1669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L1669-L1670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/233.js#L1669-L1670) · [Before (L156-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/233.js#L156-L160)

```diff
-       initialize(CC) {
-         let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           ZC = arguments.length > 2 ? arguments[2] : void 0,
-           QC = arguments.length > 3 ? arguments[3] : void 0;
-         return this.mask = CC, this.skipNextObservers = zC, this.target = ZC, this.currentTarget = QC, this
+       BOp() {
+         return [this.normal.x, this.normal.y, this.normal.z, this.d]
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L162-L166` → after: `L1672-L1673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R1672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L1672-L1673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/233.js#L1672-L1673) · [Before (L162-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/233.js#L162-L166)

```diff
-     }
-     class bC {
-       constructor(CC, zC) {
-         let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-         this.callback = CC, this.mask = zC, this.scope = ZC, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
+       clone() {
+         return new op(this.normal.x, this.normal.y, this.normal.z, this.d)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L168-L170` → after: `L1675-L1676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R1675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L1675-L1676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/233.js#L1675-L1676) · [Before (L168-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/233.js#L168-L170)

```diff
-       remove() {
-         let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         this._remove && this._remove(CC)
+       getClassName() {
+         return "Plane"
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L172-L181` → after: `L1678-L1680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R1678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L1678-L1680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/233.js#L1678-L1680) · [Before (L172-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/233.js#L172-L181)

```diff
-     }
-     class nC {
-       static FromPromise(CC, zC) {
-         const ZC = new nC;
-         return CC.then((CC => {
-           ZC.notifyObservers(CC)
-         })).catch((CC => {
-           if (!zC) throw CC;
-           zC.notifyObservers(CC)
-         })), ZC
+       getHashCode() {
+         let pp = this.normal.getHashCode();
+         return pp = 397 * pp ^ this.d, pp
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L183-L203` → after: `L1682-L1685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R1682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L1682-L1685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/233.js#L1682-L1685) · [Before (L183-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/233.js#L183-L203)

```diff
-       get observers() {
-         return this._observers
-       }
-       constructor(CC) {
-         let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         this.notifyIfTriggered = zC, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new wC(0), CC && (this._onObserverAdded = CC)
-       }
-       add(CC) {
-         let zC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-           ZC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         if (!CC) return null;
-         const wC = new bC(CC, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
-         wC.unregisterOnNextCall = ZC, zC ? this._observers.unshift(wC) : this._observers.push(wC), this._onObserverAdded && this._onObserverAdded(wC), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(wC, this._lastNotifiedValue);
-         const nC = QC ? new WeakRef(this) : {
-           deref: () => this
-         };
- ... (5 more removed lines; see GitHub link above)
+       normalize() {
+         const pp = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
+         let ip = 0;
+         return 0 !== pp && (ip = 1 / pp), this.normal.x *= ip, this.normal.y *= ip, this.normal.z *= ip, this.d *= ip, this
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L205-L206` → after: `L1687-L1699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R1687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L1687-L1699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/233.js#L1687-L1699) · [Before (L205-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/233.js#L205-L206)

```diff
-       addOnce(CC) {
-         return this.add(CC, void 0, void 0, void 0, !0)
+       transform(pp) {
+         const ip = op._TmpMatrix;
+         pp.invertToRef(ip);
+         const cp = ip.m,
+           Op = this.normal.x,
+           Ip = this.normal.y,
+           Sp = this.normal.z,
+           xp = this.d,
+           Lp = Op * cp[0] + Ip * cp[1] + Sp * cp[2] + xp * cp[3],
+           Yp = Op * cp[4] + Ip * cp[5] + Sp * cp[6] + xp * cp[7],
+           Dp = Op * cp[8] + Ip * cp[9] + Sp * cp[10] + xp * cp[11],
+           Ap = Op * cp[12] + Ip * cp[13] + Sp * cp[14] + xp * cp[15];
+         return new op(Lp, Yp, Dp, Ap)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L208-L247` → after: `L1701-L1702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R1701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L1701-L1702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/233.js#L1701-L1702) · [Before (L208-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/233.js#L208-L247)

```diff
-       remove(CC) {
-         if (!CC) return !1;
-         CC._remove = null;
-         return -1 !== this._observers.indexOf(CC) && (this._deferUnregister(CC), !0)
-       }
-       removeCallback(CC, zC) {
-         for (let ZC = 0; ZC < this._observers.length; ZC++) {
-           const QC = this._observers[ZC];
-           if (!QC._willBeUnregistered && (QC.callback === CC && (!zC || zC === QC.scope))) return this._deferUnregister(QC), !0
-         }
-         return !1
-       }
-       _deferUnregister(CC) {
-         CC._willBeUnregistered || (this._numObserversMarkedAsDeleted++, CC.unregisterOnNextCall = !1, CC._willBeUnregistered = !0, setTimeout((() => {
-           this._remove(CC)
-         }), 0))
- ... (24 more removed lines; see GitHub link above)
+       dotCoordinate(pp) {
+         return this.normal.x * pp.x + this.normal.y * pp.y + this.normal.z * pp.z + this.d
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L249-L253` → after: `L1704-L1716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R1704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L1704-L1716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/233.js#L1704-L1716) · [Before (L249-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/233.js#L249-L253)

```diff
-       notifyObserver(CC, zC) {
-         let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
-         if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = zC), CC._willBeUnregistered) return;
-         const QC = this._eventState;
-         QC.mask = ZC, QC.skipNextObservers = !1, CC.unregisterOnNextCall && this._deferUnregister(CC), CC.callback(zC, QC)
+       copyFromPoints(pp, ip, cp) {
+         const Op = ip.x - pp.x,
+           op = ip.y - pp.y,
+           Ip = ip.z - pp.z,
+           Sp = cp.x - pp.x,
+           xp = cp.y - pp.y,
+           Lp = cp.z - pp.z,
+           Yp = op * Lp - Ip * xp,
+           Dp = Ip * Sp - Op * Lp,
+           Ap = Op * xp - op * Sp,
+           Pp = Math.sqrt(Yp * Yp + Dp * Dp + Ap * Ap);
+         let Wp;
+         return Wp = 0 !== Pp ? 1 / Pp : 0, this.normal.x = Yp * Wp, this.normal.y = Dp * Wp, this.normal.z = Ap * Wp, this.d = -(this.normal.x * pp.x + this.normal.y * pp.y + this.normal.z * pp.z), this
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L255-L256` → after: `L1718-L1719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R1718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L1718-L1719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/233.js#L1718-L1719) · [Before (L255-L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/233.js#L255-L256)

```diff
-       hasObservers() {
-         return this._observers.length - this._numObserversMarkedAsDeleted > 0
+       isFrontFacingTo(pp, ip) {
+         return Op.o.Dot(this.normal, pp) <= ip
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L258-L263` → after: `L1721-L1722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R1721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L1721-L1722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/233.js#L1721-L1722) · [Before (L258-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/233.js#L258-L263)

```diff
-       clear() {
-         for (; this._observers.length;) {
-           const CC = this._observers.pop();
-           CC && (CC._remove = null)
-         }
-         this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
+       signedDistanceTo(pp) {
+         return Op.o.Dot(pp, this.normal) + this.d
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L265-L266` → after: `L1724-L1725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R1724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L1724-L1725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/233.js#L1724-L1725) · [Before (L265-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/233.js#L265-L266)

```diff
-       cleanLastNotifiedState() {
-         this._hasNotified = !1, this._lastNotifiedValue = void 0
+       static FromArray(pp) {
+         return new op(pp[0], pp[1], pp[2], pp[3])
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L268-L270` → after: `L1727-L1729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R1727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L1727-L1729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/233.js#L1727-L1729) · [Before (L268-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/233.js#L268-L270)

```diff
-       clone() {
-         const CC = new nC;
-         return CC._observers = this._observers.slice(0), CC
+       static FromPoints(pp, ip, cp) {
+         const Op = new op(0, 0, 0, 0);
+         return Op.copyFromPoints(pp, ip, cp), Op
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L272-L276` → after: `L1731-L1740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R1731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L1731-L1740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/233.js#L1731-L1740) · [Before (L272-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/233.js#L272-L276)

```diff
-       hasSpecificMask() {
-         let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
-         for (const zC of this._observers)
-           if (zC.mask & CC || zC.mask === CC) return !0;
-         return !1
+       static FromPositionAndNormal(pp, ip) {
+         const cp = new op(0, 0, 0, 0);
+         return this.FromPositionAndNormalToRef(pp, ip, cp)
+       }
+       static FromPositionAndNormalToRef(pp, ip, cp) {
+         return cp.normal.rM(ip), cp.normal.normalize(), cp.d = -pp.dot(cp.normal), cp
+       }
+       static SignedDistanceToPlaneFromPositionAndNormal(pp, ip, cp) {
+         const op = -(ip.x * pp.x + ip.y * pp.y + ip.z * pp.z);
+         return Op.o.Dot(cp, ip) + op
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L280` → after: `L1745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R1745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L1745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/233.js#L1745) · [Before (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/233.js#L280)

```diff
-   60923: (CC, zC, ZC) => {
+   37313: (pp, ip, cp) => {
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L282-L285` → after: `L1747-L1753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R1747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L1747-L1753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/233.js#L1747-L1753) · [Before (L282-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/233.js#L282-L285)

```diff
-       AsyncLoop: () => QC.d,
-       RegisterTools: () => QC.e,
-       Tools: () => QC.g,
-       className: () => QC.i
+       Matrix: () => Op.b,
+       Quaternion: () => Op.f,
+       RegisterMathVector: () => Op.h,
+       TmpVectors: () => Op.i,
+       Vector2: () => Op.l,
+       Zy: () => Op.o,
+       Vector4: () => Op.q
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L287-L288` → after: `L1755-L1756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R1755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L1755-L1756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/233.js#L1755-L1756) · [Before (L287-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/233.js#L287-L288)

```diff
-     var QC = ZC(39913);
-     (0, QC.e)()
+     var Op = cp(37320);
+     (0, Op.h)()
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L290` → after: `L1758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R1758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L1758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/233.js#L1758) · [Before (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/233.js#L290)

```diff
-   37002: (CC, zC, ZC) => {
+   38313: (pp, ip, cp) => {
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L292-L293` → after: `L1760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R1760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L1760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/233.js#L1760) · [Before (L292-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/233.js#L292-L293)

```diff
-       c: () => bC,
-       d: () => wC
+       c: () => Op
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L295-L298` → after: `L1762-L1774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R1762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L1762-L1774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/233.js#L1762-L1774) · [Before (L295-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/233.js#L295-L298)

```diff
-     const QC = {};
- 
-     function wC(CC, zC) {
-       QC[CC] = zC
+     class Op {
+       constructor(pp, ip, cp, Op) {
+         this.x = pp, this.y = ip, this.width = cp, this.height = Op
+       }
+       toGlobal(pp, ip) {
+         return new Op(this.x * pp, this.y * ip, this.width * pp, this.height * ip)
+       }
+       toGlobalToRef(pp, ip, cp) {
+         return cp.x = this.x * pp, cp.y = this.y * ip, cp.width = this.width * pp, cp.height = this.height * ip, this
+       }
+       clone() {
+         return new Op(this.x, this.y, this.width, this.height)
+       }
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L300-L302` → after: `L1776-L1782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R1776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L1776-L1782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/233.js#L1776-L1782) · [Before (L300-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/233.js#L300-L302)

```diff
- 
-     function bC(CC) {
-       return QC[CC]
+   },
+   38124: (pp, ip, cp) => {
+     function Op() {
+       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (pp => {
+         const ip = 16 * Math.random() | 0;
+         return ("x" === pp ? ip : 3 & ip | 8).toString(16)
+       }))
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/234.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/234.js` (31 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89)

#### 1. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/234.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/234.js#L2)

```diff
- export const ids = [234];
+ export const ids = [234, 241, 244];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L4-L7` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/234.js#L4-L7) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/234.js#L4-L7)

```diff
-   60944: (CC, zC, ZC) => {
-     ZC.r(zC), ZC.d(zC, {
-       DEVTOOLS_SHADERS: () => bC,
-       registerDevtoolsShader: () => nC
+   40435: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Sp,
+       f: () => xp
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L9-L15` → after: `L9-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L9-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/234.js#L9-L24) · [Before (L9-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/234.js#L9-L15)

```diff
-     var QC = ZC(39674),
-       wC = ZC(37050);
-     const bC = {
-       devtoolsNormal: function(CC) {
-         return {
-           vertex: `\n\t\t\t${(0,wC.f)(CC,"position","vec3")}\n\t\t\t${(0,wC.f)(CC,"normal","vec3")}\n\t\t\t${(0,wC.nb)(CC,"worldViewProjection","mat4")}\n\t\t\t${(0,wC.nb)(CC,"world","mat4")}\n\t\t\t${(0,wC.qb)(CC,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,wC.sb)(CC,`\n\t\t\t\t${ … [truncated]
-           fragment: `\n\t\t\t${(0,wC.qb)(CC,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,wC.F)(CC,`\n\t\t\t\t\n\t\t\t\t${(0,wC.w)(CC,"vec3","normalColor",`abs(${(0,wC.J)(CC,"vNormal")})`)}\n\t\t\t\t${(0,wC.C)(CC)} = ${(0,wC.l)(CC,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
+     var Op = cp(38905),
+       op = cp(40233),
+       Ip = cp(40411),
+       Sp = {};
+     class xp {
+       constructor(pp) {
+         this.attachedToElement = !1, this.attached = {}, this.camera = pp, this.checkInputs = () => {}
+       }
+       add(pp) {
+         const ip = pp.getSimpleName();
+         this.attached[ip] ? Op.e.Warn("camera input of type " + ip + " already exists on camera") : (this.attached[ip] = pp, pp.camera = this.camera, pp.checkInputs && (this.checkInputs = this._addCheckInputs(pp.checkInputs.bind(pp))), this.attachedToElement && pp.attachControl(t … [truncated]
+       }
+       remove(pp) {
+         for (const ip in this.attached) {
+           const cp = this.attached[ip];
+           if (cp === pp) return cp.detachControl(), cp.camera = null, delete this.attached[ip], void this.rebuildInputCheck()
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L17-L21` → after: `L26-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L26-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/234.js#L26-L30) · [Before (L17-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/234.js#L17-L21)

```diff
-       },
-       devtoolsWhite: function(CC) {
-         return {
-           vertex: `\n\t\t\t${(0,wC.f)(CC,"position","vec3")}\n\t\t\t${(0,wC.nb)(CC,"worldViewProjection","mat4")}\n\n\t\t\t${(0,wC.sb)(CC,`\n\t\t\t\t${(0,wC.i)(CC)} = ${(0,wC.ob)(CC,"worldViewProjection")} * ${(0,wC.l)(CC,"vec4",(0,wC.wb)(CC,"position"),"1.0")};\n\t\t\t`)}\n\t\t` … [truncated]
-           fragment: `\n\t\t\t${(0,wC.F)(CC,`\n\t\t\t\t${(0,wC.C)(CC)} = ${(0,wC.l)(CC,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
+       }
+       removeByType(pp) {
+         for (const ip in this.attached) {
+           const cp = this.attached[ip];
+           cp.getClassName() === pp && (cp.detachControl(), cp.camera = null, delete this.attached[ip], this.rebuildInputCheck())
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L23-L27` → after: `L32-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L32-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/234.js#L32-L36) · [Before (L23-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/234.js#L23-L27)

```diff
-       },
-       devtoolsDepth: function(CC) {
-         return {
-           vertex: `\n\t\t\t${(0,wC.f)(CC,"position","vec3")}\n\t\t\t${(0,wC.nb)(CC,"worldViewProjection","mat4")}\n\t\t\t${(0,wC.nb)(CC,"world","mat4")}\n\t\t\t${(0,wC.nb)(CC,"cameraPosition","vec3")}\n\t\t\t${(0,wC.qb)(CC,"vDepth","float","mediump")}\n\n\t\t\t${(0,wC.sb)(CC,`\n\ … [truncated]
-           fragment: `\n\t\t\t${(0,wC.qb)(CC,"vDepth","float","mediump")}\n\t\t\t${(0,wC.nb)(CC,"maxDepth","float")}\n\t\t\t${(0,wC.nb)(CC,"minDepth","float")}\n\n\t\t\t${(0,wC.F)(CC,`\n\t\t\t\t\n\t\t\t\t${(0,wC.w)(CC,"float","normalizedDepth",`clamp((${(0,wC.J)(CC,"vDepth")} - ${ … [truncated]
+       }
+       _addCheckInputs(pp) {
+         const ip = this.checkInputs;
+         return () => {
+           ip(), pp()
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L30-L37` → after: `L39-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L39-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/234.js#L39-L93) · [Before (L30-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/234.js#L30-L37)

```diff
-     };
- 
-     function nC(CC, zC) {
-       const {
-         vertex: ZC,
-         fragment: wC
-       } = bC[CC](zC), nC = QC.b.GetShadersStore(zC);
-       nC[`${CC}VertexShader`] = ZC, nC[`${CC}FragmentShader`] = wC
+       attachInput(pp) {
+         this.attachedToElement && pp.attachControl(this.noPreventDefault)
+       }
+       attachElement() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         if (!this.attachedToElement) {
+           pp = !Ip.d.ForceAttachControlToAlwaysPreventDefault && pp, this.attachedToElement = !0, this.noPreventDefault = pp;
+           for (const ip in this.attached) this.attached[ip].attachControl(pp)
+         }
+       }
+       detachElement() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         for (const ip in this.attached) this.attached[ip].detachControl(), pp && (this.attached[ip].camera = null);
+         this.attachedToElement = !1
+       }
+       rebuildInputCheck() {
+ ... (39 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L40` → after: `L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/234.js#L96) · [Before (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/234.js#L40)

```diff
-   37050: (CC, zC, ZC) => {
+   40443: (pp, ip, cp) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L42-L78` → after: `L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/234.js#L98) · [Before (L42-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/234.js#L42-L78)

```diff
-       A: () => mC,
-       Ab: () => hC,
-       B: () => bC,
-       C: () => lC,
-       E: () => EC,
-       F: () => AC,
-       J: () => KC,
-       L: () => dC,
-       P: () => uC,
-       S: () => wC,
-       U: () => HC,
-       Y: () => sC,
-       Z: () => aC,
-       _: () => IC,
-       ab: () => JC,
-       bb: () => TC,
- ... (21 more removed lines; see GitHub link above)
+       d: () => Op.b
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L80-L128` → after: `L100-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L100-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/234.js#L100-L194) · [Before (L80-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/234.js#L80-L128)

```diff
-     const QC = {
-       GLSL: 0,
-       WGSL: 1
-     };
- 
-     function wC(CC) {
-       return CC === QC.WGSL
-     }
- 
-     function bC(CC, zC, ZC) {
-       return wC(CC) ? ZC : zC
-     }
-     const nC = new Map([
-       ["int", "i32"],
-       ["float", "f32"],
-       ["vec2", "vec2f"],
- ... (33 more removed lines; see GitHub link above)
+     var Op = cp(40445);
+     (0, Op.d)()
+   },
+   40445: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Dp,
+       d: () => Pp
+     });
+     var Op = cp(40203),
+       op = cp(40210),
+       Ip = cp(37320),
+       Sp = cp(37487),
+       xp = cp(40451),
+       Lp = cp(40415),
+       Yp = cp(37368);
+     let Dp = (() => {
+ ... (79 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L130-L133` → after: `L196-L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L196-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/234.js#L196-L214) · [Before (L130-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/234.js#L130-L133)

```diff
- 
-     function MC(CC, zC, ZC, QC, bC) {
-       if (wC(CC)) {
-         return `fn ${ZC}(${QC.map((zC=>`${zC.name}: ${fC(CC,zC.type)}`)).join(", ")}) -> ${fC(CC,zC)} {${bC}}`
+   },
+   37479: (pp, ip, cp) => {
+     cp.d(ip, {
+       Color3: () => Op.d,
+       b: () => Op.h
+     });
+     var Op = cp(37487);
+     (0, Op.i)()
+   },
+   37985: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => op
+     });
+     var Op = cp(37989);
+     class op {
+       static GetPlanes(pp) {
+ ... (3 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L135-L168` → after: `L216-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L216-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/234.js#L216-L218) · [Before (L135-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/234.js#L135-L168)

```diff
-       return `${zC} ${ZC}(${QC.map((CC=>`${CC.type} ${CC.name}`)).join(", ")}) {${bC}}`
-     }
- 
-     function gC(CC, zC) {
-       return !zC || wC(CC) ? "" : `${zC} `
-     }
- 
-     function SC(CC, zC, ZC, QC) {
-       return wC(CC) ? `attribute ${zC}: ${fC(CC,ZC)};` : `attribute ${gC(CC,QC)}${ZC} ${zC};`
-     }
- 
-     function pC(CC, zC, ZC, QC) {
-       return wC(CC) ? `varying ${zC}: ${fC(CC,ZC)};` : `varying ${gC(CC,QC)}${ZC} ${zC};`
-     }
- 
-     function PC(CC, zC, ZC) {
- ... (18 more removed lines; see GitHub link above)
+       static GetNearPlaneToRef(pp, ip) {
+         const cp = pp.m;
+         ip.normal.x = cp[3] + cp[2], ip.normal.y = cp[7] + cp[6], ip.normal.z = cp[11] + cp[10], ip.d = cp[15] + cp[14], ip.normalize()
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L170-L179` → after: `L220-L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L220-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/234.js#L220-L222) · [Before (L170-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/234.js#L170-L179)

```diff
-       return `uniform highp ${"2dArray"===ZC?"sampler2DArray":"sampler2D"} ${zC};`
-     }
- 
-     function JC(CC, zC, ZC) {
-       return wC(CC) ? `textureSample(${zC}, ${zC}Sampler, ${ZC})` : `texture2D(${zC}, ${ZC})`
-     }
- 
-     function IC(CC, zC, ZC, QC, bC) {
-       if (wC(CC)) {
-         return `${bC?"textureSampleLevel":"textureSample"}(${zC}, ${zC}Sampler, ${ZC}, ${qC(CC,`round(${QC})`)}${bC?`, ${bC}`:""})`
+       static GetFarPlaneToRef(pp, ip) {
+         const cp = pp.m;
+         ip.normal.x = cp[3] - cp[2], ip.normal.y = cp[7] - cp[6], ip.normal.z = cp[11] - cp[10], ip.d = cp[15] - cp[14], ip.normalize()
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L181-L193` → after: `L224-L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L224-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/234.js#L224-L246) · [Before (L181-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/234.js#L181-L193)

```diff
-       const nC = oC(CC, "vec3", ZC, QC);
-       return bC ? `textureLod(${zC}, ${nC}, ${bC})` : `texture(${zC}, ${nC})`
-     }
- 
-     function iC(CC) {
-       return wC(CC) ? "!baseColor\\=\\w+\\(diffuseSampler,diffuseSamplerSampler,fragmentInputs\\.vDiffuseUV\\+uvOffset\\);" : "!baseColor\\=\\w+\\(diffuseSampler,vDiffuseUV\\+uvOffset\\);"
-     }
- 
-     function vC(CC) {
-       return wC(CC) ? {
-         "!varying vMainUV1: vec2f;": "centroid varying vMainUV1: vec2f;"
-       } : {
-         "!varying vec2 vMainUV1;": "#ifdef WEBGL2\ncentroid varying vec2 vMainUV1;\n#else\nvarying vec2 vMainUV1;\n#endif"
+       static GetLeftPlaneToRef(pp, ip) {
+         const cp = pp.m;
+         ip.normal.x = cp[3] + cp[0], ip.normal.y = cp[7] + cp[4], ip.normal.z = cp[11] + cp[8], ip.d = cp[15] + cp[12], ip.normalize()
+       }
+       static GetRightPlaneToRef(pp, ip) {
+         const cp = pp.m;
+         ip.normal.x = cp[3] - cp[0], ip.normal.y = cp[7] - cp[4], ip.normal.z = cp[11] - cp[8], ip.d = cp[15] - cp[12], ip.normalize()
+       }
+       static GetTopPlaneToRef(pp, ip) {
+         const cp = pp.m;
+         ip.normal.x = cp[3] - cp[1], ip.normal.y = cp[7] - cp[5], ip.normal.z = cp[11] - cp[9], ip.d = cp[15] - cp[13], ip.normalize()
+       }
+       static GetBottomPlaneToRef(pp, ip) {
+         const cp = pp.m;
+         ip.normal.x = cp[3] + cp[1], ip.normal.y = cp[7] + cp[5], ip.normal.z = cp[11] + cp[9], ip.d = cp[15] + cp[13], ip.normalize()
+       }
+ ... (7 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L196-L210` → after: `L249-L331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L249-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/234.js#L249-L331) · [Before (L196-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/234.js#L196-L210)

```diff
- 
-     function eC(CC, zC) {
-       return wC(CC) ? `vertexInputs.${zC}` : zC
-     }
- 
-     function hC(CC, zC) {
-       return wC(CC) ? `vertexOutputs.${zC}` : zC
-     }
- 
-     function KC(CC, zC) {
-       return wC(CC) ? `fragmentInputs.${zC}` : zC
-     }
- 
-     function YC(CC, zC) {
-       return wC(CC) ? `uniforms.${zC}` : zC
+   },
+   37989: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => op
+     });
+     var Op = cp(37320);
+     class op {
+       constructor(pp, ip, cp, op) {
+         this.normal = new Op.o(pp, ip, cp), this.d = op
+       }
+       BOp() {
+         return [this.normal.x, this.normal.y, this.normal.z, this.d]
+       }
+       clone() {
+         return new op(this.normal.x, this.normal.y, this.normal.z, this.d)
+       }
+ ... (67 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L212-L214` → after: `L333-L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L333-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/234.js#L333-L364) · [Before (L212-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/234.js#L212-L214)

```diff
- 
-     function dC(CC, zC, ZC) {
-       return wC(CC) ? `frame.${zC}` : ZC
+     op._TmpMatrix = Op.b.Identity()
+   },
+   37313: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       Matrix: () => Op.b,
+       Quaternion: () => Op.f,
+       RegisterMathVector: () => Op.h,
+       TmpVectors: () => Op.i,
+       Vector2: () => Op.l,
+       Zy: () => Op.o,
+       Vector4: () => Op.q
+     });
+     var Op = cp(37320);
+     (0, Op.h)()
+   },
+   38313: (pp, ip, cp) => {
+ ... (16 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L218` → after: `L378-L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L378-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/234.js#L378-L427) · [Before (L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/234.js#L218)

```diff
-       return wC(CC) ? "scene.vEyePosition" : "vEyePosition"
+       let ip = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
+       const cp = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
+         Ip = [],
+         Lp = pp.width || pp.size || 1,
+         Yp = pp.height || pp.size || 1,
+         Dp = pp.depth || pp.size || 1,
+         Ap = pp.wrap || !1;
+       let Pp = void 0 === pp.topBaseAt ? 1 : pp.topBaseAt,
+         Wp = void 0 === pp.bottomBaseAt ? 0 : pp.bottomBaseAt;
+       Pp = (Pp + 4) % 4, Wp = (Wp + 4) % 4;
+       let yp = [2, 0, 3, 1][Pp],
+         Up = [2, 0, 1, 3][Wp],
+         wp = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];
+       if (Ap) {
+         ip = [2, 3, 0, 2, 0, 1, 4, 5, 6, 4, 6, 7, 9, 10, 11, 9, 11, 8, 12, 14, 15, 12, 13, 14], wp = [-1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1];
+         let pp = [
+ ... (34 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L222-L223` → after: `L431-L455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L431-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/234.js#L431-L455) · [Before (L222-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/234.js#L222-L223)

```diff
-       return wC(CC) ? "mesh.visibility" : "visibility"
-     }
+       let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
+         cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+       const Op = new Ip.d(pp, cp);
+       ip.sideOrientation = Ip.d._GetDefaultSideOrientation(ip.sideOrientation), Op._originalBuilderSideOrientation = ip.sideOrientation;
+       return Lp(ip).applyToMesh(Op, ip.updatable), Op
+     }
+     let Dp = !1;
+     Dp || (Dp = !0, Sp.d.CreateBox = Lp, Ip.d.CreateBox = function(pp, ip) {
+       return Yp(pp, {
+         size: ip,
+         sideOrientation: arguments.length > 4 ? arguments[4] : void 0,
+         updatable: arguments.length > 3 ? arguments[3] : void 0
+       }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
+     })
+   },
+   40626: (pp, ip, cp) => {
+ ... (9 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L226` → after: `L458-L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L458-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/234.js#L458-L486) · [Before (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/234.js#L226)

```diff
-       return wC(CC) ? "fragmentInputs.position" : "gl_FragCoord"
+       const ip = [],
+         cp = [],
+         Op = pp.lines,
+         op = pp.colors,
+         Sp = [];
+       let xp = 0;
+       for (let Ip = 0; Ip < Op.length; Ip++) {
+         const pp = Op[Ip];
+         for (let Op = 0; Op < pp.length; Op++) {
+           const {
+             x: Lp,
+             y: Yp,
+             z: Dp
+           } = pp[Op];
+           if (cp.push(Lp, Yp, Dp), op) {
+             const pp = op[Ip],
+ ... (13 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L230` → after: `L490-L507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L490-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/234.js#L490-L507) · [Before (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/234.js#L230)

```diff
-       return wC(CC) ? "fragmentOutputs.color" : "gl_FragColor"
+       const ip = pp.dashSize || 3,
+         cp = pp.gapSize || 1,
+         op = pp.dashNb || 200,
+         Sp = pp.points,
+         xp = [],
+         Lp = [],
+         Yp = Op.o.Zero();
+       let Dp, Ap, Pp, Wp = 0,
+         yp = 0;
+       for (Pp = 0; Pp < Sp.length - 1; Pp++) Sp[Pp + 1].subtractToRef(Sp[Pp], Yp), Wp += Yp.length();
+       const Up = Wp / op,
+         wp = ip * Up / (ip + cp);
+       for (Pp = 0; Pp < Sp.length - 1; Pp++) {
+         Sp[Pp + 1].subtractToRef(Sp[Pp], Yp), Dp = Math.floor(Yp.length() / Up), Yp.normalize();
+         for (let pp = 0; pp < Dp; pp++) Ap = Up * pp, xp.push(Sp[Pp].x + Ap * Yp.x, Sp[Pp].y + Ap * Yp.y, Sp[Pp].z + Ap * Yp.z), xp.push(Sp[Pp].x + (Ap + wp) * Yp.x, Sp[Pp].y + (Ap + wp) * Yp.y, Sp[Pp].z + (Ap + wp) * Yp.z), Lp.push(yp, yp + 1), yp += 2
+       }
+ ... (2 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L234` → after: `L511-L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L511-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/234.js#L511-L529) · [Before (L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/234.js#L234)

```diff
-       return wC(CC) ? `dpdx(${zC})` : `dFdx(${zC})`
+       let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+       const Op = ip.instance,
+         op = ip.lines,
+         Ip = ip.colors;
+       if (Op) {
+         const pp = Op.getVerticesData(xp.j.PositionKind);
+         let ip, cp;
+         Ip && (ip = Op.getVerticesData(xp.j.ColorKind));
+         let Sp = 0,
+           Lp = 0;
+         for (let Op = 0; Op < op.length; Op++) {
+           const xp = op[Op];
+           for (let op = 0; op < xp.length; op++) pp[Sp] = xp[op].x, pp[Sp + 1] = xp[op].y, pp[Sp + 2] = xp[op].z, Ip && ip && (cp = Ip[Op], ip[Lp] = cp[op].r, ip[Lp + 1] = cp[op].g, ip[Lp + 2] = cp[op].b, ip[Lp + 3] = cp[op].a, Lp += 4), Sp += 3
+         }
+         return Op.updateVerticesData(xp.j.PositionKind, pp, !1, !1), Ip && ip && Op.updateVerticesData(xp.j.ColorKind, ip, !1, !1), Op.refreshBoundingInfo(), Op
+       }
+ ... (3 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L238` → after: `L533-L542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L533-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/234.js#L533-L542) · [Before (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/234.js#L238)

```diff
-       return wC(CC) ? `dpdy(${zC})` : `dFdy(${zC})`
+       let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+       const Op = ip.colors ? [ip.colors] : null;
+       return Ap(pp, {
+         lines: [ip.points],
+         updatable: ip.updatable,
+         instance: ip.instance,
+         colors: Op,
+         useVertexAlpha: ip.useVertexAlpha,
+         material: ip.material
+       }, cp)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L242-L250` → after: `L546-L691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L546-L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/234.js#L546-L691) · [Before (L242-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/234.js#L242-L250)

```diff
-       return wC(CC) ? `inverseSqrt(${zC})` : `inversesqrt(${zC})`
-     }
- 
-     function rC(CC, zC, ZC, QC) {
-       return wC(CC) ? `select(${QC}, ${ZC}, ${zC})` : `((${zC}) ? (${ZC}) : (${QC}))`
-     }
- 
-     function sC(CC, zC, ZC) {
-       return wC(CC) ? `((${zC}) - (${ZC}) * floor((${zC}) / (${ZC})))` : `mod(${zC}, ${ZC})`
+       let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+       const Ip = ip.points,
+         xp = ip.instance,
+         Yp = ip.gapSize || 1,
+         Ap = ip.dashSize || 3;
+       if (xp) {
+         const pp = pp => {
+           const ip = Op.o.Zero(),
+             cp = pp.length / 6;
+           let op, Sp, Lp, Yp, Dp = 0,
+             Ap = 0;
+           for (Lp = 0; Lp < Ip.length - 1; Lp++) Ip[Lp + 1].subtractToRef(Ip[Lp], ip), Dp += ip.length();
+           const Pp = Dp / cp,
+             Wp = xp._creationDataStorage.dashSize,
+             yp = Wp * Pp / (Wp + xp._creationDataStorage.gapSize);
+           for (Lp = 0; Lp < Ip.length - 1; Lp++)
+ ... (130 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L252-L254` → after: `L693-L700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L693-L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/234.js#L693-L700) · [Before (L252-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/234.js#L252-L254)

```diff
- 
-     function TC(CC, zC, ZC) {
-       return wC(CC) ? `${zC} = vec4f(${ZC}, ${zC}.a);` : `${zC}.rgb = ${ZC};`
+     Pp.ForceGLSL = !1;
+     class Wp extends Lp.d {
+       constructor(pp, ip) {
+         super(pp, ip), this.intersectionThreshold = ip.intersectionThreshold
+       }
+       getClassName() {
+         return "InstancedLinesMesh"
+       }
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L257-L258` → after: `L704-L748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L704-L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/234.js#L704-L748) · [Before (L257-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/234.js#L257-L258)

```diff
-     function aC(CC, zC, ZC) {
-       return wC(CC) ? `${zC} = vec4f(${zC}.rgb * (${ZC}), ${zC}.a);` : `${zC}.rgb *= ${ZC};`
+     function Up() {
+       yp || (yp = !0, xp.d._LinesMeshParser = (pp, ip) => Pp.Parse(pp, ip))
+     }(Op = Pp.prototype).enableEdgesRendering ?? (Op.enableEdgesRendering = (0, Ap.k)("LinesMesh", "enableEdgesRendering")), (op = Wp.prototype).enableEdgesRendering ?? (op.enableEdgesRendering = (0, Ap.k)("InstancedLinesMesh", "enableEdgesRendering"))
+   },
+   38900: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Ip
+     });
+     var Op = cp(38905);
+     const op = (pp, ip, cp) => pp ? pp.getClassName && "Mesh" === pp.getClassName() ? null : !pp.getClassName || "SubMesh" !== pp.getClassName() && "PhysicsBody" !== pp.getClassName() ? pp.clone ? pp.clone() : Array.isArray(pp) ? pp.slice() : cp && "object" === typeof pp ? {
+       ...pp
+     } : null : pp.clone(ip) : null;
+     class Ip {
+       static DeepCopy(pp, ip, cp, Ip) {
+         let Sp = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         const xp = function(pp) {
+ ... (29 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L260-L262` → after: `L750-L756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L750-L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/234.js#L750-L756) · [Before (L260-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/234.js#L260-L262)

```diff
- 
-     function tC(CC, zC, ZC) {
-       return wC(CC) ? `${zC} = vec4f(${ZC}, ${zC}.w);` : `${zC}.xyz = ${ZC};`
+   },
+   38124: (pp, ip, cp) => {
+     function Op() {
+       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (pp => {
+         const ip = 16 * Math.random() | 0;
+         return ("x" === pp ? ip : 3 & ip | 8).toString(16)
+       }))
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L265` → after: `L762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/234.js#L762) · [Before (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/234.js#L265)

```diff
-   39674: (CC, zC, ZC) => {
+   38905: (pp, ip, cp) => {
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L267` → after: `L764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/234.js#L764) · [Before (L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/234.js#L267)

```diff
-       b: () => QC
+       e: () => Op
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L270-L271` → after: `L767-L782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L767-L782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/234.js#L767-L782) · [Before (L270-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/234.js#L270-L271)

```diff
-       static GetShadersRepository() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? QC.ShadersRepository : QC.ShadersRepositoryWGSL
+       static _CheckLimit(pp, ip) {
+         let cp = Op._LogLimitOutputs[pp];
+         return cp ? cp.current++ : (cp = {
+           limit: ip,
+           current: 1
+         }, Op._LogLimitOutputs[pp] = cp), cp.current <= cp.limit
+       }
+       static _GenerateLimitMessage(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+         const cp = Op._LogLimitOutputs[pp];
+         if (!cp || !Op.MessageLimitReached) return;
+         const op = this._Levels[ip];
+         cp.current === cp.limit && Op[op.name](Op.MessageLimitReached.replace(/%LIMIT%/g, "" + cp.limit).replace(/%TYPE%/g, op.name ?? ""))
+       }
+       static _AddLogEntry(pp) {
+         Op._LogCache = pp + Op._LogCache, Op.OnNewCacheEntry && Op.OnNewCacheEntry(pp)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L273-L274` → after: `L784-L787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L784-L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/234.js#L784-L787) · [Before (L273-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/234.js#L273-L274)

```diff
-       static GetShadersStore() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? QC.ShadersStore : QC.ShadersStoreWGSL
+       static _FormatMessage(pp) {
+         const ip = pp => pp < 10 ? "0" + pp : "" + pp,
+           cp = new Date;
+         return "[" + ip(cp.getHours()) + ":" + ip(cp.getMinutes()) + ":" + ip(cp.getSeconds()) + "]: " + pp
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L276-L277` → after: `L789-L816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L789-L816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/234.js#L789-L816) · [Before (L276-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/234.js#L276-L277)

```diff
-       static GetIncludesShadersStore() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? QC.IncludesShadersStore : QC.IncludesShadersStoreWGSL
+       static _LogDisabled(pp, ip) {}
+       static _LogEnabled() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
+           ip = arguments.length > 1 ? arguments[1] : void 0,
+           cp = arguments.length > 2 ? arguments[2] : void 0;
+         const op = Array.isArray(ip) ? ip[0] : ip;
+         if (void 0 !== cp && !Op._CheckLimit(op, cp)) return;
+         const Ip = Op._FormatMessage(op),
+           Sp = this._Levels[pp],
+           xp = Array.isArray(ip) ? ip.slice(1) : [];
+         Sp.logFunc && Sp.logFunc("BJS - " + Ip, ...xp);
+         const Lp = `<div style='color:${Sp.color}'>${Ip}</div><br>`;
+         Op._AddLogEntry(Lp), Op._GenerateLimitMessage(op, pp)
+       }
+       static get LogCache() {
+         return Op._LogCache
+ ... (12 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L280` → after: `L819-L838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L819-L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/234.js#L819-L838) · [Before (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/234.js#L280)

```diff
-     QC.ShadersRepository = "src/Shaders/", QC.ShadersStore = {}, QC.IncludesShadersStore = {}, QC.ShadersRepositoryWGSL = "src/ShadersWGSL/", QC.ShadersStoreWGSL = {}, QC.IncludesShadersStoreWGSL = {}
+     Op.NoneLogLevel = 0, Op.MessageLogLevel = 1, Op.WarningLogLevel = 2, Op.ErrorLogLevel = 4, Op.AllLogLevel = 7, Op.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Op._LogCache = "", Op._LogLimitOutputs = {}, Op._Levels =  … [truncated]
+       color: "white",
+       logFunc: console.log,
+       name: "Log"
+     }, {
+       color: "orange",
+       logFunc: console.warn,
+       name: "Warn"
+     }, {}, {
+       color: "red",
+       logFunc: console.error,
+       name: "Error"
+     }], Op.errorsCount = 0, Op.Log = Op._LogEnabled.bind(Op, Op.MessageLogLevel), Op.Warn = Op._LogEnabled.bind(Op, Op.WarningLogLevel), Op.Error = Op._LogEnabled.bind(Op, Op.ErrorLogLevel)
+   },
+   40289: (pp, ip, cp) => {
+     cp.d(ip, {
+ ... (4 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/235.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/235.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248)

#### 1. `bundles/preprod.bloxd.io/chunks/js/235.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/235.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/235.js#L2)

```diff
- export const ids = [235];
+ export const ids = [235, 241];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/235.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/235.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/235.js#L4)

```diff
-   37138: (CC, zC, ZC) => {
+   42109: (pp, ip, cp) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/235.js` (Changed code · before: `L6-L7` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/235.js#L6) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/235.js#L6-L7)

```diff
-       Color3: () => QC.e,
-       e: () => QC.g
+       d: () => Sp
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/235.js` (Changed code · before: `L9` → after: `L8-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248) · [After (L8-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/235.js#L8-L38) · [Before (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/235.js#L9)

```diff
-     var QC = ZC(37142);
+     var Op = cp(42025),
+       op = cp(40195);
+     let Ip = !1;
+ 
+     function Sp() {
+       Ip || (Ip = !0, op.d.prototype._sphericalPolynomialTargetSize = 0, op.d.prototype.forceSphericalPolynomialsRecompute = function() {
+         this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
+       }, Object.defineProperty(op.d.prototype, "sphericalPolynomial", {
+         get: function() {
+           if (this._texture) {
+             if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
+             if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = Op.d.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialCo … [truncated]
+               this._texture._sphericalPolynomial = pp, this._texture._sphericalPolynomialComputed = !0
+             }))), null
+           }
+           return null
+ ... (15 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/236.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/236.js` (21 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb)

#### 1. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/236.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/236.js#L4)

```diff
-   40899: (CC, zC, ZC) => {
+   37345: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/236.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/236.js#L6)

```diff
-       noaDevTools: () => WC
+       e: () => op
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L8-L237` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/236.js#L8-L11) · [Before (L8-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/236.js#L8-L237)

```diff
-     var QC = ZC(37404),
-       wC = ZC(37394),
-       bC = ZC(2753),
-       nC = ZC(1645),
-       fC = ZC(40805);
- 
-     function oC(CC) {
-       const {
-         Vg: zC
-       } = CC, ZC = zC.engine, QC = {
-         width: ZC.getRenderWidth(),
-         height: ZC.getRenderHeight()
-       };
-       return {
-         canvas: ZC.getRenderingCanvas(),
-         maxTextureSize: ZC.getCaps().maxTextureSize,
- ... (214 more removed lines; see GitHub link above)
+     var Op = cp(37349);
+     class op {
+       static get LastCreatedEngine() {
+         return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L239-L242` → after: `L13-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/236.js#L13-L14) · [Before (L239-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/236.js#L239-L242)

```diff
-       capturePhoto(CC, zC, ZC) {
-         return function(CC, zC, ZC, QC) {
-           return (0, fC.d)(oC(CC), zC, ZC, QC)
-         }((0, bC.e)(), CC, zC, ZC)
+       static get LastCreatedScene() {
+         return this._LastCreatedScene
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L246` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/236.js#L19) · [Before (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/236.js#L246)

```diff
-   40805: (CC, zC, ZC) => {
+   37338: (pp, ip, cp) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L251-L302` → after: `L23-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L23-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/236.js#L23-L30) · [Before (L251-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/236.js#L251-L302)

```diff
-     var QC = ZC(1664);
-     const wC = 33177600,
-       bC = 3e4;
-     let nC = !1;
- 
-     function fC(CC, zC, ZC) {
-       let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
-       const {
-         scale: fC = 1,
-         type: oC = "image/png",
-         quality: qC
-       } = QC;
-       if (!CC.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
-       if (nC) return Promise.reject(new Error("A screenshot is already being taken"));
-       nC = !0;
-       const FC = function(CC, zC, ZC) {
- ... (36 more removed lines; see GitHub link above)
+     class Op {
+       static SetMatrixPrecision(pp) {
+         if (Op.MatrixTrackPrecisionChange = !1, pp && !Op.MatrixUse64Bits && Op.MatrixTrackedMatrices)
+           for (let ip = 0; ip < Op.MatrixTrackedMatrices.length; ++ip) {
+             const pp = Op.MatrixTrackedMatrices[ip],
+               cp = pp._m;
+             pp._m = new Array(16);
+             for (let ip = 0; ip < 16; ++ip) pp._m[ip] = cp[ip]
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L304-L312` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/236.js#L32) · [Before (L304-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/236.js#L304-L312)

```diff
-         }))
-       }))
-     }
-     async function oC(CC, zC, ZC) {
-       try {
-         const wC = await fC(CC, zC, ZC);
-         (0, QC.e)(wC.blob, `bloxd-screenshot-${wC.width}x${wC.height}-${Date.now()}.png`)
-       } catch (wC) {
-         console.error("Error taking screenshot:", wC)
+         Op.MatrixUse64Bits = pp, Op.MatrixCurrentType = Op.MatrixUse64Bits ? Array : Float32Array, Op.MatrixTrackedMatrices = null
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L316` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/236.js#L37) · [Before (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/236.js#L316)

```diff
-   37404: (CC, zC, ZC) => {
+   37359: (pp, ip, cp) => {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L320` → after: `L42-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L42-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/236.js#L42-L44) · [Before (L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/236.js#L320)

```diff
-       i: () => nC
+       j: () => Op,
+       l: () => Ip,
+       p: () => Sp
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L322-L324` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/236.js#L46) · [Before (L322-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/236.js#L322-L324)

```diff
-     var QC = ZC(37398),
-       wC = ZC(37408);
-     let bC = 0;
+     class Op {}
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L326-L330` → after: `L48-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L48-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/236.js#L48-L49) · [Before (L326-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/236.js#L326-L330)

```diff
-     function nC(CC, zC) {
-       const ZC = CC;
-       ZC._noaFaceGroups = null !== zC && void 0 !== zC ? zC : null, ZC._noaFaceEpoch = -1, ZC._noaFaceMask = -1, ZC._noaFaceCount = -1, ZC._noaFaceMaterial = null;
-       const QC = CC.Zx;
-       QC && 1 === QC.length && (QC[0].indexStart = 0, QC[0].indexCount = CC.getTotalIndices())
+     function op(pp) {
+       pp.updateFlag = Op._UpdateFlagSeed++
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L333-L340` → after: `L52-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L52-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/236.js#L52-L88) · [Before (L333-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/236.js#L333-L340)

```diff
-     function fC(CC, zC) {
-       if (zC) {
-         bC++;
-         for (const zC of CC) {
-           const CC = zC._noaFaceGroups;
-           CC && nC(zC, CC)
-         }
-       } else bC = Math.max(0, bC - 1)
+     function Ip(pp, ip, cp) {
+       let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+       const op = pp.BOp(),
+         Ip = ip.BOp(),
+         Sp = op[0],
+         xp = op[1],
+         Lp = op[2],
+         Yp = op[3],
+         Dp = op[4],
+         Ap = op[5],
+         Pp = op[6],
+         Wp = op[7],
+         yp = op[8],
+         Up = op[9],
+         wp = op[10],
+         vp = op[11],
+ ... (21 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L344-L351` → after: `L92-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L92-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/236.js#L92-L93) · [Before (L344-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/236.js#L344-L351)

```diff
-       let wC = -1,
-         bC = 0;
-       for (let nC = 0; nC < QC.d; nC++) {
-         const ZC = CC[nC],
-           fC = CC[nC + 1];
-         fC > ZC && zC & 1 << QC.b[nC] && (wC < 0 && (wC = ZC), bC = fC)
-       }
-       return wC < 0 ? (ZC[0] = 0, ZC[1] = 0, 0) : (ZC[0] = wC, ZC[1] = bC - wC, bC - wC)
+       let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+       Ip(pp, ip, cp.BOp(), Op), op(cp)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L413-L418` → after: `L97-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L97-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/236.js#L97-L99) · [Before (L413-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/236.js#L413-L418)

```diff
-       CC._data = zC
-     }
- 
-     function fC(CC) {
-       var zC, ZC;
-       (null !== (zC = null === (ZC = CC.getBuffer()) || void 0 === ZC ? void 0 : ZC.HW) && void 0 !== zC ? zC : 0) > 0 && (QC.add(CC), 0 === wC ? nC(CC, null) : bC.add(CC))
+       let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+       const Op = pp.BOp();
+       ip[cp] = Op[0], ip[cp + 1] = Op[1], ip[cp + 2] = Op[2], ip[cp + 3] = Op[3], ip[cp + 4] = Op[4], ip[cp + 5] = Op[5], ip[cp + 6] = Op[6], ip[cp + 7] = Op[7], ip[cp + 8] = Op[8], ip[cp + 9] = Op[9], ip[cp + 10] = Op[10], ip[cp + 11] = Op[11], ip[cp + 12] = Op[12], ip[cp + 13]  … [truncated]
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L421-L441` → after: `L102-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L102-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/236.js#L102-L104) · [Before (L421-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/236.js#L421-L441)

```diff
-     function oC(CC) {
-       wC++;
-       for (const ZC of function(CC) {
-           const zC = new Set;
-           for (const wC of CC) {
-             const CC = wC.geometry;
-             for (const wC of Object.values(null !== (ZC = null === CC || void 0 === CC ? void 0 : CC.getVertexBuffers()) && void 0 !== ZC ? ZC : {})) {
-               var ZC;
-               const CC = wC.getWrapperBuffer();
-               QC.has(CC) && zC.add(CC)
-             }
-           }
-           return zC
-         }(CC)) ZC.getData() || qC(ZC), bC.add(ZC);
-       let zC = !0;
-       return () => {
- ... (5 more removed lines; see GitHub link above)
+     function Lp(pp, ip) {
+       const cp = Yp(pp, ip.BOp());
+       return cp && op(ip), cp
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L444-L449` → after: `L107-L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L107-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/236.js#L107-L162) · [Before (L444-L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/236.js#L444-L449)

```diff
-     function qC(CC) {
-       const zC = CC.getBuffer();
-       if (!zC || !(zC.HW > 0)) return;
-       const ZC = CC._engine,
-         QC = new Uint8Array(zC.HW);
-       ZC.bindArrayBuffer(zC), ZC._gl.getBufferSubData(ZC._gl.ARRAY_BUFFER, 0, QC), ZC._resetVertexBufferBinding(), nC(CC, QC)
+     function Yp(pp, ip) {
+       const cp = pp.BOp(),
+         Op = cp[0],
+         op = cp[1],
+         Ip = cp[2],
+         Sp = cp[3],
+         xp = cp[4],
+         Lp = cp[5],
+         Yp = cp[6],
+         Dp = cp[7],
+         Ap = cp[8],
+         Pp = cp[9],
+         Wp = cp[10],
+         yp = cp[11],
+         Up = cp[12],
+         wp = cp[13],
+ ... (40 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L452` → after: `L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/236.js#L166) · [Before (L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/236.js#L452)

```diff
-   37398: (CC, zC, ZC) => {
+   37320: (pp, ip, cp) => {
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L485` → after: `L172-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L172-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/236.js#L172-L174) · [Before (L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/236.js#L485)

```diff
-       k: () => gC
+       l: () => Ap,
+       o: () => Pp,
+       q: () => Wp
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L487-L507` → after: `L176-L487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L176-L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/236.js#L176-L487) · [Before (L487-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/236.js#L487-L507)

```diff
-     var QC = ZC(37398);
-     const wC = 1 / 16,
-       bC = 1 / 64,
-       nC = 2048;
-     QC.j;
- 
-     function fC(CC, zC, ZC) {
-       return Math.min(Math.abs(CC[0] * zC), Math.abs(CC[5] * ZC)) / 2
-     }
- 
-     function oC(CC, zC) {
-       return wC + bC * CC * CC / zC
-     }
- 
-     function qC(CC, zC, ZC, wC, bC) {
-       const nC = QC.k;
- ... (5 more removed lines; see GitHub link above)
+     var Op = cp(37324),
+       op = cp(37329),
+       Ip = cp(37338),
+       Sp = cp(37345),
+       xp = cp(37356),
+       Lp = cp(37359),
+       Yp = cp(37368);
+     const Dp = pp => parseInt(pp.toString().replace(/\W/g, ""));
+     class Ap {
+       constructor() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
+           ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         this.x = pp, this.y = ip
+       }
+       toString() {
+         return `{X: ${this.x} Y: ${this.y}}`
+ ... (296 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L509-L521` → after: `L489-L629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L489-L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/236.js#L489-L629) · [Before (L509-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/236.js#L509-L521)

```diff
-     const WC = (() => {
-         const CC = [];
-         for (let zC = 0; zC < QC.n.length; zC++) {
-           let ZC = 0;
-           for (let wC = zC + 1; wC <= QC.n.length; wC++) {
-             const bC = 1 << QC.n[wC - 1];
-             if (ZC & bC) break;
-             ZC |= bC, CC.push({
-               start: zC,
-               end: wC,
-               tQ: ZC
-             })
-           }
+     Ap._V8PerformanceHack = new Ap(.5, .5), Ap._ZeroReadOnly = Ap.Zero();
+     class Pp {
+       get x() {
+         return this._x
+       }
+       set x(pp) {
+         this._x = pp, this._isDirty = !0
+       }
+       get y() {
+         return this._y
+       }
+       set y(pp) {
+         this._y = pp, this._isDirty = !0
+       }
+       get z() {
+         return this._z
+ ... (125 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L524-L566` → after: `L632-L2916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L632-L2916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/236.js#L632-L2916) · [Before (L524-L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/236.js#L524-L566)

```diff
-       })(),
-       NC = [];
- 
-     function MC(CC, zC) {
-       const ZC = QC.g[zC];
-       return CC[ZC + 1] - CC[ZC]
-     }
- 
-     function gC(CC, zC, ZC) {
-       let wC = 0;
-       for (let nC = 0; nC < QC.j; nC++) MC(CC, nC) > 0 && (wC |= 1 << nC);
-       if (0 === (zC &= wC)) return 0;
-       if (zC === wC) return ZC[0] = 0, ZC[1] = CC[QC.d], 1;
-       let bC = null,
-         fC = 1 / 0;
-       for (const qC of function(CC) {
- ... (27 more removed lines; see GitHub link above)
+       }
+       equals(pp) {
+         return pp && this._x === pp._x && this._y === pp._y && this._z === pp._z
+       }
+       equalsWithEpsilon(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Op.b;
+         return pp && (0, xp.WithinEpsilon)(this._x, pp._x, ip) && (0, xp.WithinEpsilon)(this._y, pp._y, ip) && (0, xp.WithinEpsilon)(this._z, pp._z, ip)
+       }
+       jxp(pp, ip, cp) {
+         return this._x === pp && this._y === ip && this._z === cp
+       }
+       multiplyInPlace(pp) {
+         return this._x *= pp._x, this._y *= pp._y, this._z *= pp._z, this._isDirty = !0, this
+       }
+       multiply(pp) {
+         return this.multiplyByFloats(pp._x, pp._y, pp._z)
+ ... (2269 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/237.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/237.js` (99 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab)

#### 1. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L2)

```diff
- export const ids = [237, 238];
+ export const ids = [237];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L4)

```diff
-   40078: (CC, zC, ZC) => {
+   37487: (pp, ip, cp) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L6-L7` → after: `L6-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L6-L9) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L6-L7)

```diff
-       b: () => FC,
-       e: () => NC
+       d: () => Ap,
+       h: () => Pp,
+       i: () => Up,
+       j: () => Wp
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L9-L92` → after: `L11-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L11-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L11-L14) · [Before (L9-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L9-L92)

```diff
-     var QC = ZC(39811),
-       wC = ZC(39818),
-       bC = ZC(36963),
-       nC = ZC(37142),
-       fC = ZC(40084),
-       oC = ZC(40046),
-       qC = ZC(37002);
-     let FC = (() => {
-         var CC;
-         let zC, ZC, oC = fC.c,
-           qC = [],
-           FC = [],
-           WC = [],
-           NC = [];
-         return CC = class extends oC {
-           constructor(CC, zC, ZC, wC) {
- ... (68 more removed lines; see GitHub link above)
+     var Op = cp(37329),
+       op = cp(37324),
+       Ip = cp(37356),
+       Sp = cp(37368);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L94-L95` → after: `L16-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L16-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L16-L29) · [Before (L94-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L94-L95)

```diff
-     function NC() {
-       WC || (WC = !0, oC.d.AddNodeConstructor("Light_Type_3", ((CC, zC) => () => new FC(CC, bC.r.Zero(), zC))), (0, qC.d)("BABYLON.HemisphericLight", FC))
+     function xp(pp) {
+       return Math.pow(pp, op.g)
+     }
+ 
+     function Lp(pp) {
+       return pp <= .04045 ? .0773993808 * pp : Math.pow(.947867299 * (pp + .055), 2.4)
+     }
+ 
+     function Yp(pp) {
+       return Math.pow(pp, op.d)
+     }
+ 
+     function Dp(pp) {
+       return pp <= .0031308 ? 12.92 * pp : 1.055 * Math.pow(pp, .41666) - .055
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L104-L107` → after: `L32-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L32-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L32-L36) · [Before (L104-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L104-L107)

```diff
-       static GetPlanes(CC) {
-         const zC = [];
-         for (let ZC = 0; ZC < 6; ZC++) zC.push(new QC.d(0, 0, 0, 0));
-         return wC.GetPlanesToRef(CC, zC), zC
+       constructor() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
+           ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+           cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         this.r = pp, this.g = ip, this.b = cp
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L109-L111` → after: `L38-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L38-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L38-L39) · [Before (L109-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L109-L111)

```diff
-       static GetNearPlaneToRef(CC, zC) {
-         const ZC = CC.m;
-         zC.normal.x = ZC[3] + ZC[2], zC.normal.y = ZC[7] + ZC[6], zC.normal.z = ZC[11] + ZC[10], zC.d = ZC[15] + ZC[14], zC.normalize()
+       toString() {
+         return "{R: " + this.r + " G:" + this.g + " B:" + this.b + "}"
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L113-L115` → after: `L41-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L41-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L41-L42) · [Before (L113-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L113-L115)

```diff
-       static GetFarPlaneToRef(CC, zC) {
-         const ZC = CC.m;
-         zC.normal.x = ZC[3] - ZC[2], zC.normal.y = ZC[7] - ZC[6], zC.normal.z = ZC[11] - ZC[10], zC.d = ZC[15] - ZC[14], zC.normalize()
+       getClassName() {
+         return "Color3"
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L117-L119` → after: `L44-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L44-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L44-L46) · [Before (L117-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L117-L119)

```diff
-       static GetLeftPlaneToRef(CC, zC) {
-         const ZC = CC.m;
-         zC.normal.x = ZC[3] + ZC[0], zC.normal.y = ZC[7] + ZC[4], zC.normal.z = ZC[11] + ZC[8], zC.d = ZC[15] + ZC[12], zC.normalize()
+       getHashCode() {
+         let pp = 255 * this.r | 0;
+         return pp = 397 * pp ^ 255 * this.g, pp = 397 * pp ^ 255 * this.b, pp
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L121-L123` → after: `L48-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L48-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L48-L50) · [Before (L121-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L121-L123)

```diff
-       static GetRightPlaneToRef(CC, zC) {
-         const ZC = CC.m;
-         zC.normal.x = ZC[3] - ZC[0], zC.normal.y = ZC[7] - ZC[4], zC.normal.z = ZC[11] - ZC[8], zC.d = ZC[15] - ZC[12], zC.normalize()
+       toArray(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         return pp[ip] = this.r, pp[ip + 1] = this.g, pp[ip + 2] = this.b, this
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L125-L127` → after: `L52-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L52-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L52-L54) · [Before (L125-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L125-L127)

```diff
-       static GetTopPlaneToRef(CC, zC) {
-         const ZC = CC.m;
-         zC.normal.x = ZC[3] - ZC[1], zC.normal.y = ZC[7] - ZC[5], zC.normal.z = ZC[11] - ZC[9], zC.d = ZC[15] - ZC[13], zC.normalize()
+       vcp(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         return Ap.FromArrayToRef(pp, ip, this), this
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L129-L131` → after: `L56-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L56-L58) · [Before (L129-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L129-L131)

```diff
-       static GetBottomPlaneToRef(CC, zC) {
-         const ZC = CC.m;
-         zC.normal.x = ZC[3] + ZC[1], zC.normal.y = ZC[7] + ZC[5], zC.normal.z = ZC[11] + ZC[9], zC.d = ZC[15] + ZC[13], zC.normalize()
+       toColor4() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
+         return new Pp(this.r, this.g, this.b, pp)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L133-L134` → after: `L60-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L60-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L60-L61) · [Before (L133-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L133-L134)

```diff
-       static GetPlanesToRef(CC, zC) {
-         wC.GetNearPlaneToRef(CC, zC[0]), wC.GetFarPlaneToRef(CC, zC[1]), wC.GetLeftPlaneToRef(CC, zC[2]), wC.GetRightPlaneToRef(CC, zC[3]), wC.GetTopPlaneToRef(CC, zC[4]), wC.GetBottomPlaneToRef(CC, zC[5])
+       BOp() {
+         return [this.r, this.g, this.b]
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L136-L139` → after: `L63-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L63-L64) · [Before (L136-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L136-L139)

```diff
-       static IsPointInFrustum(CC, zC) {
-         for (let ZC = 0; ZC < 6; ZC++)
-           if (zC[ZC].dotCoordinate(CC) < 0) return !1;
-         return !0
+       toLuminance() {
+         return .3 * this.r + .59 * this.g + .11 * this.b
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L141-L150` → after: `L66-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L66-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L66-L67) · [Before (L141-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L141-L150)

```diff
-     }
-   },
-   37596: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       d: () => wC
-     });
-     var QC = ZC(36963);
-     class wC {
-       constructor(CC, zC, ZC, wC) {
-         this.normal = new QC.r(CC, zC, ZC), this.d = wC
+       multiply(pp) {
+         return new Ap(this.r * pp.r, this.g * pp.g, this.b * pp.b)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L152-L153` → after: `L69-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L69-L70) · [Before (L152-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L152-L153)

```diff
-       VZC() {
-         return [this.normal.x, this.normal.y, this.normal.z, this.d]
+       multiplyToRef(pp, ip) {
+         return ip.r = this.r * pp.r, ip.g = this.g * pp.g, ip.b = this.b * pp.b, ip
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L155-L156` → after: `L72-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L72-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L72-L73) · [Before (L155-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L155-L156)

```diff
-       clone() {
-         return new wC(this.normal.x, this.normal.y, this.normal.z, this.d)
+       multiplyInPlace(pp) {
+         return this.r *= pp.r, this.g *= pp.g, this.b *= pp.b, this
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L158-L159` → after: `L75-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L75-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L75-L76) · [Before (L158-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L158-L159)

```diff
-       getClassName() {
-         return "Plane"
+       multiplyByFloats(pp, ip, cp) {
+         return new Ap(this.r * pp, this.g * ip, this.b * cp)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L161-L182` → after: `L78-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L78-L79) · [Before (L161-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L161-L182)

```diff
-       getHashCode() {
-         let CC = this.normal.getHashCode();
-         return CC = 397 * CC ^ this.d, CC
-       }
-       normalize() {
-         const CC = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
-         let zC = 0;
-         return 0 !== CC && (zC = 1 / CC), this.normal.x *= zC, this.normal.y *= zC, this.normal.z *= zC, this.d *= zC, this
-       }
-       transform(CC) {
-         const zC = wC._TmpMatrix;
-         CC.invertToRef(zC);
-         const ZC = zC.m,
-           QC = this.normal.x,
-           bC = this.normal.y,
-           nC = this.normal.z,
- ... (6 more removed lines; see GitHub link above)
+       divide(pp) {
+         throw new ReferenceError("Can not divide a color")
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L184-L205` → after: `L81-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L81-L82) · [Before (L184-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L184-L205)

```diff
-       dotCoordinate(CC) {
-         return this.normal.x * CC.x + this.normal.y * CC.y + this.normal.z * CC.z + this.d
-       }
-       copyFromPoints(CC, zC, ZC) {
-         const QC = zC.x - CC.x,
-           wC = zC.y - CC.y,
-           bC = zC.z - CC.z,
-           nC = ZC.x - CC.x,
-           fC = ZC.y - CC.y,
-           oC = ZC.z - CC.z,
-           qC = wC * oC - bC * fC,
-           FC = bC * nC - QC * oC,
-           WC = QC * fC - wC * nC,
-           NC = Math.sqrt(qC * qC + FC * FC + WC * WC);
-         let MC;
-         return MC = 0 !== NC ? 1 / NC : 0, this.normal.x = qC * MC, this.normal.y = FC * MC, this.normal.z = WC * MC, this.d = -(this.normal.x * CC.x + this.normal.y * CC.y + this.normal.z * CC.z), this
- ... (6 more removed lines; see GitHub link above)
+       divideToRef(pp, ip) {
+         throw new ReferenceError("Can not divide a color")
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L207-L208` → after: `L84-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L84-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L84-L85) · [Before (L207-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L207-L208)

```diff
-       static FromArray(CC) {
-         return new wC(CC[0], CC[1], CC[2], CC[3])
+       divideInPlace(pp) {
+         throw new ReferenceError("Can not divide a color")
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L210-L212` → after: `L87-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L87-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L87-L88) · [Before (L210-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L210-L212)

```diff
-       static FromPoints(CC, zC, ZC) {
-         const QC = new wC(0, 0, 0, 0);
-         return QC.copyFromPoints(CC, zC, ZC), QC
+       minimizeInPlace(pp) {
+         return this.minimizeInPlaceFromFloats(pp.r, pp.g, pp.b)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L214-L216` → after: `L90-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L90-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L90-L91) · [Before (L214-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L214-L216)

```diff
-       static FromPositionAndNormal(CC, zC) {
-         const ZC = new wC(0, 0, 0, 0);
-         return this.FromPositionAndNormalToRef(CC, zC, ZC)
+       maximizeInPlace(pp) {
+         return this.maximizeInPlaceFromFloats(pp.r, pp.g, pp.b)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L218-L219` → after: `L93-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L93-L94) · [Before (L218-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L218-L219)

```diff
-       static FromPositionAndNormalToRef(CC, zC, ZC) {
-         return ZC.normal.Av(zC), ZC.normal.normalize(), ZC.d = -CC.dot(ZC.normal), ZC
+       minimizeInPlaceFromFloats(pp, ip, cp) {
+         return this.r = Math.min(pp, this.r), this.g = Math.min(ip, this.g), this.b = Math.min(cp, this.b), this
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L221-L223` → after: `L96-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L96-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L96-L97) · [Before (L221-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L221-L223)

```diff
-       static SignedDistanceToPlaneFromPositionAndNormal(CC, zC, ZC) {
-         const wC = -(zC.x * CC.x + zC.y * CC.y + zC.z * CC.z);
-         return QC.r.Dot(ZC, zC) + wC
+       maximizeInPlaceFromFloats(pp, ip, cp) {
+         return this.r = Math.max(pp, this.r), this.g = Math.max(ip, this.g), this.b = Math.max(cp, this.b), this
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L225-L234` → after: `L99-L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L99-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L99-L100) · [Before (L225-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L225-L234)

```diff
-     }
-     wC._TmpMatrix = QC.b.Identity()
-   },
-   37931: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       d: () => QC
-     });
-     class QC {
-       constructor(CC, zC, ZC, QC) {
-         this.x = CC, this.y = zC, this.width = ZC, this.height = QC
+       floorToRef(pp) {
+         throw new ReferenceError("Can not floor a color")
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L236-L237` → after: `L102-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L102-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L102-L103) · [Before (L236-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L236-L237)

```diff
-       toGlobal(CC, zC) {
-         return new QC(this.x * CC, this.y * zC, this.width * CC, this.height * zC)
+       floor() {
+         throw new ReferenceError("Can not floor a color")
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L239-L240` → after: `L105-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L105-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L105-L106) · [Before (L239-L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L239-L240)

```diff
-       toGlobalToRef(CC, zC, ZC) {
-         return ZC.x = this.x * CC, ZC.y = this.y * zC, ZC.width = this.width * CC, ZC.height = this.height * zC, this
+       fractToRef(pp) {
+         throw new ReferenceError("Can not fract a color")
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L242-L243` → after: `L108-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L108-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L108-L109) · [Before (L242-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L242-L243)

```diff
-       clone() {
-         return new QC(this.x, this.y, this.width, this.height)
+       fract() {
+         throw new ReferenceError("Can not fract a color")
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L245-L286` → after: `L111-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L111-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L111-L112) · [Before (L245-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L245-L286)

```diff
-     }
-   },
-   38501: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       e: () => bC
-     });
-     var QC = ZC(38507);
-     const wC = (CC, zC, ZC) => CC ? CC.getClassName && "Mesh" === CC.getClassName() ? null : !CC.getClassName || "SubMesh" !== CC.getClassName() && "PhysicsBody" !== CC.getClassName() ? CC.clone ? CC.clone() : Array.isArray(CC) ? CC.slice() : ZC && "object" === typeof CC ? {
-       ...CC
-     } : null : CC.clone(zC) : null;
-     class bC {
-       static DeepCopy(CC, zC, ZC, bC) {
-         let nC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         const fC = function(CC) {
-           const zC = [];
-           do {
- ... (26 more removed lines; see GitHub link above)
+       equals(pp) {
+         return pp && this.r === pp.r && this.g === pp.g && this.b === pp.b
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L288-L331` → after: `L114-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L114-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/237.js#L114-L147) · [Before (L288-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/237.js#L288-L331)

```diff
-     }
-   },
-   37731: (CC, zC, ZC) => {
-     function QC() {
-       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (CC => {
-         const zC = 16 * Math.random() | 0;
-         return ("x" === CC ? zC : 3 & zC | 8).toString(16)
-       }))
-     }
-     ZC.d(zC, {
-       b: () => QC
-     })
-   },
-   38507: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       c: () => QC
- ... (28 more removed lines; see GitHub link above)
+       equalsFloats(pp, ip, cp) {
+         return this.jxp(pp, ip, cp)
+       }
+       jxp(pp, ip, cp) {
+         return this.r === pp && this.g === ip && this.b === cp
+       }
+       equalsWithEpsilon(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : op.b;
+         return (0, Ip.WithinEpsilon)(this.r, pp.r, ip) && (0, Ip.WithinEpsilon)(this.g, pp.g, ip) && (0, Ip.WithinEpsilon)(this.b, pp.b, ip)
+       }
+       gp() {
+         throw new ReferenceError("Can not negate a color")
+       }
+       negateInPlace() {
+         throw new ReferenceError("Can not negate a color")
+       }
+ ... (18 more added lines; see GitHub link above)
```
