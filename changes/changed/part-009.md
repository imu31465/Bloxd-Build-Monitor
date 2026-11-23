# Changed — Bundle Modifications Report (Part 009 / 050)

- **Updated at**: `2026-11-24T00:42 JST`
- **Part**: `9 / 50` (**280** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 008](part-008.md) · [Part 010 →](part-010.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/220.js` (bbb6l5.0244a119 → w4ddu.56408518 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/220.js` (54 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557)

#### 9. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L476-L488` → after: `L1355-L1357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R1355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L1355-L1357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/220.js#L1355-L1357) · [Before (L476-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/220.js#L476-L488)

```diff
-         "Lord Vulcan": {
-           physicsBodyDimensions: {
-             width: 1.2,
-             height: 5.4
-           },
-           hitBoxDimensions: {
-             width: 2.4,
-             height: 5.4
-           },
-           eyeHeight: 4.1,
-           rideHeight: 5.4,
-           Am: .5,
-           wEq: !1
+         rules: {
+           icon: "list",
+           title: "lobbyManage:rules"
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L490-L492` → after: `L1359-L1433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R1359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L1359-L1433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/220.js#L1359-L1433) · [Before (L490-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/220.js#L490-L492)

```diff
-         Zombie: {
-           ...Aq,
-           defaultPose: "zombie"
+         leaderboard: {
+           icon: "trophy",
+           title: "lobbyManage:leaderboard"
+         }
+       },
+       Pz = 5,
+       Gz = (0, QC.memo)((function(CC) {
+         let {
+           page: zC,
+           manage: ZC,
+           leaderboard: wC,
+           focusRequest: bC,
+           onFocused: nC,
+           ruleRowsShown: fC
+         } = CC;
+         return "leaderboard" === zC ? (0, lC.jsx)(QC.Suspense, {
+ ... (59 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L494-L497` → after: `L1435-L1437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R1435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L1435-L1437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/220.js#L1435-L1437) · [Before (L494-L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/220.js#L494-L497)

```diff
-         Skeleton: Aq,
-         Mummy: {
-           ...Aq,
-           defaultPose: "zombie"
+         cC = () => {
+           var CC, zC;
+           oC.current.style.scrollPaddingTop = `${null!==(CC=null===(zC=FC.current)||void 0===zC?void 0:zC.offsetHeight)&&void 0!==CC?CC:0}px`
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L499-L511` → after: `L1439-L1450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R1439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L1439-L1450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/220.js#L1439-L1450) · [Before (L499-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/220.js#L499-L511)

```diff
-         Scorpion: {
-           physicsBodyDimensions: {
-             width: 1,
-             height: .9
-           },
-           hitBoxDimensions: {
-             width: 1.6,
-             height: 1.4
-           },
-           eyeHeight: .6,
-           rideHeight: .9,
-           Am: .5,
-           wEq: !1
+         uC = CC => {
+           const zC = oC.current,
+             ZC = WC.current.get(CC);
+           if (void 0 === ZC) return;
+           const QC = document.activeElement,
+             wC = EC.current,
+             bC = null === wC ? null : ZC.querySelector(`[data-lobby-manage-row="${CSS.escape(wC.name)}"]`);
+           cC(), QC instanceof HTMLElement && null !== bC && void 0 !== bC && bC.contains(QC) ? QC.scrollIntoView({
+             block: "center"
+           }) : null === ZC.previousElementSibling ? zC.scrollTop = 0 : ZC.scrollIntoView({
+             block: "start"
+           }), AC.current = zC.scrollTop
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L513-L525` → after: `L1452-L1456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R1452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L1452-L1456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/220.js#L1452-L1456) · [Before (L513-L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/220.js#L513-L525)

```diff
-         Vulcanite: {
-           physicsBodyDimensions: {
-             width: .8,
-             height: 2
-           },
-           hitBoxDimensions: {
-             width: 1.3,
-             height: 2.1
-           },
-           eyeHeight: 1.6,
-           rideHeight: 2.1,
-           Am: .5,
-           wEq: !1
+         rC = CC => {
+           (0, wC.reportAnalyticsClick)({
+             id: "lobby_manage.page",
+             value: CC
+           }), XC(CC), uC(CC)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L527-L539` → after: `L1458-L1467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R1458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L1458-L1467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/220.js#L1458-L1467) · [Before (L527-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/220.js#L527-L539)

```diff
-         "Evil Tome": {
-           physicsBodyDimensions: {
-             width: .6,
-             height: .9
-           },
-           hitBoxDimensions: {
-             width: .9,
-             height: .95
-           },
-           eyeHeight: .6,
-           rideHeight: .95,
-           Am: .5,
-           wEq: !1
+         sC = () => {
+           var CC, zC;
+           const ZC = oC.current,
+             QC = ZC.getBoundingClientRect().top + (null !== (CC = null === (zC = FC.current) || void 0 === zC ? void 0 : zC.offsetHeight) && void 0 !== CC ? CC : 0),
+             wC = bC.map((CC => {
+               var zC, ZC;
+               return (null !== (zC = null === (ZC = WC.current.get(CC)) || void 0 === ZC ? void 0 : ZC.getBoundingClientRect().top) && void 0 !== zC ? zC : 1 / 0) - QC
+             })),
+             nC = !mC && ZC.scrollTop + ZC.clientHeight >= ZC.scrollHeight - 1;
+           JC(bC[(0, fC.h)(wC, nC)])
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L541-L553` → after: `L1469-L1501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R1469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L1469-L1501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/220.js#L1469-L1501) · [Before (L541-L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/220.js#L541-L553)

```diff
-         "Magma Toad": {
-           physicsBodyDimensions: {
-             width: 1,
-             height: 1
-           },
-           hitBoxDimensions: {
-             width: 1.5,
-             height: 1.15
-           },
-           eyeHeight: 1,
-           rideHeight: 1.1,
-           Am: .5,
-           wEq: !1
+         TC = () => {
+           null !== RC.current && (XC(null), sC())
+         };
+       (0, QC.useLayoutEffect)((() => {
+         null !== nC && bC.includes(nC.page) && rC(nC.page)
+       }), [null === nC || void 0 === nC ? void 0 : nC.seq]), (0, QC.useLayoutEffect)((() => {
+         null === RC.current || bC.includes(RC.current) || TC()
+       }));
+       const {
+         onFocused: aC
+       } = CC, tC = (0, QC.useCallback)((CC => {
+         null !== RC.current && uC(RC.current), aC(CC)
+       }), [aC]);
+       (0, QC.useLayoutEffect)((() => {
+         const CC = RC.current;
+         null !== CC && (!mC || bC.indexOf(hC[KC - 1]) < bC.indexOf(CC)) && uC(CC)
+ ... (17 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L555-L567` → after: `L1503-L1505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R1503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L1503-L1505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/220.js#L1503-L1505) · [Before (L555-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/220.js#L555-L567)

```diff
-         Stalker: {
-           physicsBodyDimensions: {
-             width: .5,
-             height: 2.6
-           },
-           hitBoxDimensions: {
-             width: .6,
-             height: 2.9
-           },
-           eyeHeight: 2.4,
-           rideHeight: 2.5,
-           Am: .5,
-           wEq: !1
+         onClick: CC => {
+           var zC;
+           null !== (zC = FC.current) && void 0 !== zC && zC.contains(CC.target) || TC()
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L569-L582` → after: `L1507-L1510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R1507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L1507-L1510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/220.js#L1507-L1510) · [Before (L569-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/220.js#L569-L582)

```diff
-         Crone: {
-           turnRate: 1.2,
-           physicsBodyDimensions: {
-             width: .6,
-             height: 2.9
-           },
-           hitBoxDimensions: {
-             width: .7,
-             height: 3.2
-           },
-           eyeHeight: 2.7,
-           rideHeight: 2.8,
-           Am: .5,
-           wEq: !1
+         onFocus: CC => {
+           var zC;
+           const ZC = null === RC.current ? null : WC.current.get(RC.current);
+           !ZC || ZC.contains(CC.target) || null !== (zC = FC.current) && void 0 !== zC && zC.contains(CC.target) || TC()
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L584-L607` → after: `L1512-L1563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R1512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L1512-L1563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/220.js#L1512-L1563) · [Before (L584-L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/220.js#L584-L607)

```diff
-         "Iron Guardian": xq,
-         "Gold Guardian": xq,
-         "Diamond Guardian": xq,
-         "Moonstone Guardian": xq,
-         "Iron Goofy Golem": xq,
-         "Gold Goofy Golem": xq,
-         "Diamond Goofy Golem": xq,
-         "Moonstone Goofy Golem": xq,
-         "Tiki Terror": {
-           poseRig: "tiki",
-           physicsBodyDimensions: {
-             width: 1,
-             height: 4.3
-           },
-           hitBoxDimensions: {
-             width: 2.4,
- ... (8 more removed lines; see GitHub link above)
+         children: [bC.length > 1 && (0, lC.jsx)("div", {
+           ref: FC,
+           className: "LobbyManageChips",
+           children: (0, lC.jsx)(PC.b, {
+             options: bC.map((CC => ({
+               value: CC,
+               label: (0, lC.jsx)(Rz, {
+                 page: CC
+               }),
+               ariaLabel: ZC(pz[CC].title)
+             }))),
+             value: IC,
+             padTabs: "2",
+             ariaLabel: ZC("lobbyManageEntry:manageLobby"),
+             reselectable: !0,
+             onChange: rC
+ ... (36 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L610` → after: `L1566-L1626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R1566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L1566-L1626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/220.js#L1566-L1626) · [Before (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/220.js#L610)

```diff
-       return Nq[qq]
+       return void 0 === (null === CC || void 0 === CC ? void 0 : CC.page) ? null : {
+         page: CC.page,
+         seq: CC.seq
+       }
+     }
+ 
+     function Jz(CC) {
+       let {
+         leaderboard: zC
+       } = CC;
+       const ZC = function() {
+           const CC = (0, oC.h)("lobbyManage"),
+             [zC, ZC] = (0, QC.useReducer)((CC => CC + 1), 0),
+             [wC] = (0, QC.useState)((() => new qC.b(ZC)));
+           return (0, QC.useEffect)((() => {
+             const CC = wC.nextDeadline();
+ ... (45 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L613` → after: `L1629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R1629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L1629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/220.js#L1629) · [Before (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/220.js#L613)

```diff
-   37111: (qq, Eq, gq) => {
+   36447: (CC, zC, ZC) => {
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L617-L733` → after: `L1634-L1705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R1634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L1634-L1705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/220.js#L1634-L1705) · [Before (L617-L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/220.js#L617-L733)

```diff
-     const Yq = {
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
- ... (101 more removed lines; see GitHub link above)
+     var QC = ZC(1418),
+       wC = ZC(1865),
+       bC = ZC(1840);
+     const nC = 1e4;
+     let fC = 0;
+ 
+     function oC(CC) {
+       const zC = ++fC;
+       return new Promise((ZC => {
+         const fC = zC => {
+             oC(), clearTimeout(qC), !1 === (null === zC || void 0 === zC ? void 0 : zC.ok) && (0, QC.reportAnalyticsClick)({
+               id: "lobby_manage.refused",
+               value: CC.type
+             }), ZC(zC)
+           },
+           oC = wC.e.subscribe("lobbyManage", (CC => {
+ ... (56 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L735-L744` → after: `L1707-L1713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R1707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L1707-L1713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/220.js#L1707-L1713) · [Before (L735-L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/220.js#L735-L744)

```diff
-       },
-       "skyblock:forged:gold-moonstone-gold": {
-         name: "Midas Moon",
-         lore: "Mobs it fells seem to rattle with coins.",
-         damageMultiplier: 1.18,
-         cooldownMultiplier: .92,
-         ability: "gildedEdge",
-         traits: {
-           coins: 2,
-           bossBane: .6
+         return CC
+       }
+       statusOf(CC, zC) {
+         const ZC = this.statuses.get(CC);
+         return !ZC || ZC.until <= zC ? null : {
+           ok: ZC.ok,
+           text: ZC.text
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L746-L773` → after: `L1715-L1717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R1715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L1715-L1717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/220.js#L1715-L1717) · [Before (L746-L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/220.js#L746-L773)

```diff
-       },
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
- ... (12 more removed lines; see GitHub link above)
+       }
+       isPending(CC) {
+         return this.pending.has(CC)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L777` → after: `L1721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R1721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L1721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/220.js#L1721) · [Before (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/220.js#L777)

```diff
-   37661: (qq, Eq, gq) => {
+   36436: (CC, zC, ZC) => {
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L779` → after: `L1723-L1724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R1723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L1723-L1724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/220.js#L1723-L1724) · [Before (L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/220.js#L779)

```diff
-       c: () => mq
+       d: () => qC,
+       f: () => oC
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L781-L786` → after: `L1726-L1730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R1726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L1726-L1730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/220.js#L1726-L1730) · [Before (L781-L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/220.js#L781-L786)

```diff
-     var Yq = gq(317),
-       lq = gq.n(Yq),
-       Oq = gq(1870);
-     let mq;
-     var xq, Aq, cq, uq, Bq, Wq, Nq, aq, Vq;
-     const dq = [229, 0, 1, "h", 3, 62, "i", 231, "e", 230, 203, 8, 255, "length", "c", "d", "a", "undefined", void 0, 131, 16, "b", 117, 63, 6, "fromCodePoint", 7, 12, "push", 246, 115, 106, 57, 52, 9, 91, 8191, 88, 13, 14, 4, 196, "g", "f", !1, 2, 34, 130, 116, 127, 128, 129, nu … [truncated]
+     var QC = ZC(583),
+       wC = ZC(1840),
+       bC = ZC(1559),
+       nC = ZC(77),
+       fC = ZC(1209);
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L788-L800` → after: `L1732-L1733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R1732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L1732-L1733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/220.js#L1732-L1733) · [Before (L788-L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/220.js#L788-L800)

```diff
-     function jq(...qq) {
-       return qq[dq[13]] = dq[2], typeof xq[qq[dq[1]]] === dq[17] ? xq[qq[dq[1]]] = function(...qq) {
-         for (bq(qq[dq[13]] = dq[2], qq[dq[5]] = 'XEHGhQieZbaRPDC5O)#S8.6:t*knl^>uL&JgB`do"=!xVAp(MFjm2WzU%yfqsc_NK@|T<r,Iw~1v079}?4/[$3]{+Y;', qq[-dq[0]] = "" + (qq[dq[1]] || ""), qq[dq[4]] = qq[-dq[0]].length, qq[-dq[10]] = [], qq[dq[8]] = dq[1], qq[-dq[9]] = dq[1], qq[dq[7]] =  … [truncated]
-           if (qq[dq[6]] = qq[dq[5]].indexOf(qq[-dq[0]][qq[dq[3]]]), qq[dq[6]] !== -dq[2])
-             if (qq[dq[7]] < dq[1]) qq[dq[7]] = qq[dq[6]];
-             else {
-               bq(qq[dq[7]] += qq[dq[6]] * dq[35], qq[dq[8]] |= qq[dq[7]] << qq[-dq[9]], qq[-dq[9]] += (qq[dq[7]] & dq[36]) > dq[37] ? dq[38] : dq[39]);
-               do {
-                 bq(qq[-dq[10]].push(qq[dq[8]] & dq[12]), qq[dq[8]] >>= dq[11], qq[-dq[9]] -= dq[11])
-               } while (qq[-dq[9]] > dq[26]);
-               qq[dq[7]] = -dq[2]
-             } return qq[dq[7]] > -dq[2] && qq[-dq[10]].push((qq[dq[8]] | qq[dq[7]] << qq[-dq[9]]) & dq[12]), Hq(qq[-dq[10]])
-       }(Aq[qq[dq[1]]]) : xq[qq[dq[1]]]
+     function oC(CC, zC, ZC) {
+       return nC.featureFlags.useSocialFeatures && CC && null === (0, fC.e)(zC, ZC)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L803-L804` → after: `L1736-L1758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R1736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L1736-L1758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/220.js#L1736-L1758) · [Before (L803-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/220.js#L803-L804)

```diff
-     function Hq(...qq) {
-       return qq[dq[13]] = dq[2], typeof uq !== dq[17] && uq ? (new uq).decode(new Bq(qq[dq[1]])) : typeof Wq !== dq[17] && Wq ? Wq.from(qq[dq[1]]).toString("utf-8") : Vq(qq[dq[1]])
+     function qC(CC, zC) {
+       var ZC, nC;
+       const fC = bC.d.getSocialState().friends.find((CC => CC.name.toLowerCase() === zC.toLowerCase())),
+         oC = wC.gameBridge.latest("players").byId[CC],
+         qC = void 0 !== oC && oC.name === zC,
+         FC = qC && null !== (ZC = oC.cosmetics) && void 0 !== ZC ? ZC : void 0,
+         WC = fC && FC ? {
+           ...fC,
+           cosmetics: FC
+         } : fC;
+       return {
+         playerSocialPreview: null !== WC && void 0 !== WC ? WC : {
+           isError: !1,
+           name: zC,
+           ranks: qC ? [...oC.ranks] : [],
+           cosmetics: null !== FC && void 0 !== FC ? FC : {},
+ ... (7 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L807-L854` → after: `L1774-L1791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R1774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L1774-L1791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/220.js#L1774-L1791) · [Before (L807-L854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/220.js#L807-L854)

```diff
-     function oq() {}
-     bq(xq = {}, Aq = ["ubHv{yYeQKpuiQ+gJ1S^dFIE", "dbrUb_Y}dKnthGd*Egm7b].E", 'tx,Iy,Q*55.`4wO"J:Ae=<apk8Sv(GEu&m903Iz2(sq', "Umm^eBiB;C;k85Zu{ML~Qrl#$by0VGs=zIOi9rs]!_`}X", "ux7Iz$|1xqDw$hrt;R}Fbr|t@yC/t(_>3,jn(ox(TS:0L(/l~i:&zJlH", 'o:9lWw/"sR4sJDC', '*<N~V%)=bCJ@Ew"u.1<7Djd>eD … [truncated]
-       bq(qq[dq[13]] = dq[1], qq[dq[16]] = [function() {
-         return globalThis
-       }, function() {
-         return global
-       }, function() {
-         return window
-       }, function() {
-         return new Function("return this")()
-       }], qq[dq[2]] = dq[18], qq[dq[14]] = []);
-       try {
-         bq(qq[dq[2]] = Object, qq[dq[14]][dq[28]]("".__proto__.constructor.name))
-       } catch (Aq) {}
-       qq: for (qq[dq[15]] = dq[1]; qq[dq[15]] < qq[dq[16]][dq[13]]; qq[dq[15]]++) try {
-         for (qq[dq[2]] = qq[dq[16]][qq[dq[15]]](), qq[dq[8]] = dq[1]; qq[dq[8]] < qq[dq[14]][dq[13]]; qq[dq[8]]++)
- ... (32 more removed lines; see GitHub link above)
+     function WC(CC) {
+       let {
+         label: zC,
+         icon: ZC,
+         placeholder: wC,
+         onSubmit: WC
+       } = CC;
+       const NC = (0, QC.useRef)(null),
+         [MC, gC] = (0, QC.useState)(""),
+         [SC, pC] = (0, QC.useState)("Enter"),
+         [PC, GC] = (0, QC.useState)(null);
+       (0, QC.useEffect)((() => {
+         if ("Success" !== SC && "Error" !== SC) return;
+         const CC = setTimeout((() => {
+           "Success" === SC && NC.current && (NC.current.value = "", gC("")), pC("Enter")
+         }), "Success" === SC ? 1e3 : 4e3);
+ ... (2 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L856-L910` → after: `L1793-L1798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R1793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L1793-L1798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/220.js#L1793-L1798) · [Before (L856-L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/220.js#L856-L910)

```diff
-         qq[dq[13]] = dq[4], Eq(107) + dq[21] in oq && function(...qq) {
-           function Eq(...qq) {
-             for (bq(qq[dq[13]] = dq[2], qq[dq[16]] = 'fLoNAXth+Oy!u2cp]G)?`"H<7d#z3V&g|.Drq=:jZWFQKUk%1BREwl$s^I(PxYv;iSn~ae>@JbM_Cm}968540,[*/{T', qq[dq[21]] = "" + (qq[dq[1]] || ""), qq[dq[14]] = qq[dq[21]].length, qq[dq[15]] = [], qq[dq[8]] = dq[1], qq[dq[43]] = dq[1], qq[dq[4 … [truncated]
-               if (qq[dq[41]] = qq[dq[16]].indexOf(qq[dq[21]][qq[dq[11]]]), qq[dq[41]] !== -dq[2])
-                 if (qq[dq[42]] < dq[1]) qq[dq[42]] = qq[dq[41]];
-                 else {
-                   bq(qq[dq[42]] += qq[dq[41]] * dq[35], qq[dq[8]] |= qq[dq[42]] << qq[dq[43]], qq[dq[43]] += (qq[dq[42]] & dq[36]) > dq[37] ? dq[38] : dq[39]);
-                   do {
-                     bq(qq[dq[15]].push(qq[dq[8]] & dq[12]), qq[dq[8]] >>= dq[11], qq[dq[43]] -= dq[11])
-                   } while (qq[dq[43]] > dq[26]);
-                   qq[dq[42]] = -dq[2]
-                 } return qq[dq[42]] > -dq[2] && qq[dq[15]].push((qq[dq[8]] | qq[dq[42]] << qq[dq[43]]) & dq[12]), Hq(qq[dq[15]])
-           }
- 
-           function gq(...qq) {
-             return qq[dq[13]] = dq[2], typeof xq[qq[dq[1]]] === dq[17] ? xq[qq[dq[1]]] = Eq(Aq[qq[dq[1]]]) : xq[qq[dq[1]]]
- ... (39 more removed lines; see GitHub link above)
+       }), [SC]);
+       const RC = () => {
+         const CC = MC.trim();
+         "" !== CC && "Enter" === SC && (pC("Loading"), WC(CC).then((CC => {
+           NC.current && ("error" in CC ? null === CC.error ? pC("Enter") : (GC(CC.error), pC("Error")) : pC("Success"))
+         })))
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L912-L914` → after: `L1800-L1832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R1800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L1800-L1832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/220.js#L1800-L1832) · [Before (L912-L914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/220.js#L912-L914)

```diff
- 
-     function bq() {
-       bq = function() {}
+       return (0, FC.jsxs)("div", {
+         className: "PlayerNameField",
+         onKeyDown: CC => {
+           CC.target === NC.current && "Escape" !== CC.key && CC.stopPropagation()
+         },
+         children: [(0, FC.jsxs)("div", {
+           className: bC()("AddFriendBodyOverlay", `AddFriendBodyOverlay${SC}`),
+           children: ["Loading" === SC && (0, FC.jsx)(oC.d, {}), "Success" === SC && (0, FC.jsx)(qC.c, {
+             name: "check"
+           }), "Error" === SC && PC]
+         }), (0, FC.jsxs)("div", {
+           className: "PlayerSearch",
+           children: [(0, FC.jsx)(nC.c, {
+             className: "PlayerSearchInput",
+             domRef: NC,
+             maxLength: 32,
+ ... (17 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L916-L1008` → after: `L1834-L1851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R1834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L1834-L1851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/220.js#L1834-L1851) · [Before (L916-L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/220.js#L916-L1008)

```diff
-     mq = (...qq) => {
-       function Eq(...qq) {
-         return qq[dq[13]] = dq[2], typeof xq[qq[dq[1]]] === dq[17] ? xq[qq[dq[1]]] = function(...qq) {
-           for (bq(qq[dq[13]] = dq[2], qq[-dq[46]] = '}*y@=1>("&4{Lb|gVj9SpuzMP3DAl6KhQG<ask0vwF^n!m%Tio?U75;+EWr)B2R,`_#I/c.xJte:8qd]YHfO$~[CNXZ', qq[dq[45]] = "" + (qq[dq[1]] || ""), qq[dq[4]] = qq[dq[45]].length, qq[dq[47]] = [], qq[dq[8]] = dq[1], qq[dq[24]] = dq[1], qq[dq[42] … [truncated]
-             if (qq[dq[34]] = qq[-dq[46]].indexOf(qq[dq[45]][qq[dq[11]]]), qq[dq[34]] !== -dq[2])
-               if (qq[dq[42]] < dq[1]) qq[dq[42]] = qq[dq[34]];
-               else {
-                 bq(qq[dq[42]] += qq[dq[34]] * dq[35], qq[dq[8]] |= qq[dq[42]] << qq[dq[24]], qq[dq[24]] += (qq[dq[42]] & dq[36]) > dq[37] ? dq[38] : dq[39]);
-                 do {
-                   bq(qq[dq[47]].push(qq[dq[8]] & dq[12]), qq[dq[8]] >>= dq[11], qq[dq[24]] -= dq[11])
-                 } while (qq[dq[24]] > dq[26]);
-                 qq[dq[42]] = -dq[2]
-               } return qq[dq[42]] > -dq[2] && qq[dq[47]].push((qq[dq[8]] | qq[dq[42]] << qq[dq[24]]) & dq[12]), Hq(qq[dq[47]])
-         }(Aq[qq[dq[1]]]) : xq[qq[dq[1]]]
-       }
-       qq[dq[13]] = dq[11], Eq(dq[30]) in oq && function(...qq) {
- ... (77 more removed lines; see GitHub link above)
+   },
+   36598: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       b: () => WC
+     });
+     var QC = ZC(48),
+       wC = ZC(1002),
+       bC = ZC.n(wC),
+       nC = ZC(1143),
+       fC = ZC(1013),
+       oC = ZC(1056);
+     const qC = {
+         unlisted: "link",
+         public: "globe",
+         whitelist: "user-check",
+         private: "lock"
+ ... (2 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L1010-L1015` → after: `L1853-L1914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R1853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L1853-L1914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/220.js#L1853-L1914) · [Before (L1010-L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/220.js#L1010-L1015)

```diff
-                     function gq(...qq) {
-                       return qq[dq[13]] = dq[2], typeof xq[qq[dq[1]]] === dq[17] ? xq[qq[dq[1]]] = Eq(Aq[qq[dq[1]]]) : xq[qq[dq[1]]]
-                     }
-                     throw Error(gq(dq[74]) + gq(155) + gq(156) + qq[dq[1]].toString(dq[20]).toUpperCase() + (gq(157) + gq(158) + gq(159) + dq[8]))
-                   }
-                 }
+     function WC(CC) {
+       let {
+         visibility: zC,
+         onPick: ZC
+       } = CC;
+       const {
+         t: wC
+       } = (0, nC.y)(), WC = (0, QC.useRef)([]);
+       return (0, oC.jsx)("div", {
+         className: "WorldSocialTiles",
+         role: "group",
+         "aria-label": wC("worldSocial:whoCanJoin"),
+         children: FC.map(((CC, QC) => {
+           const nC = CC === zC;
+           return (0, oC.jsxs)("button", {
+             ref: CC => {
+ ... (46 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L1017-L1018` → after: `L1916-L1947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R1916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L1916-L1947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/220.js#L1916-L1947) · [Before (L1017-L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/220.js#L1017-L1018)

```diff
-                 function Yq(...Eq) {
-                   return Eq[dq[13]] = dq[45], qq[dq[2]](Eq[dq[1]] >> Eq[dq[2]] & dq[23] | dq[50])
+     function fC(CC) {
+       let {
+         ZN: zC,
+         children: ZC,
+         ...fC
+       } = CC;
+       const {
+         t: oC
+       } = (0, QC.y)();
+       return (0, nC.jsx)("div", {
+         className: "WhitelistTickRow",
+         onClick: () => {
+           zC.onChange(!zC.on)
+         },
+         children: (0, nC.jsx)(wC.f, {
+           ...fC,
+ ... (16 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L1021-L1022` → after: `L1972-L2021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R1972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L1972-L2021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/220.js#L1972-L2021) · [Before (L1021-L1022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/220.js#L1021-L1022)

```diff
-                 function lq(...Eq) {
-                   return Eq[dq[13]] = dq[2], (4294967168 & Eq[dq[1]]) == dq[1] ? qq[dq[2]](Eq[dq[1]]) : (Eq[dq[16]] = "", (4294965248 & Eq[dq[1]]) == dq[1] ? Eq[dq[16]] = qq[dq[2]](Eq[dq[1]] >> dq[24] & dq[79] | dq[95]) : (4294901760 & Eq[dq[1]]) == dq[1] ? bq(gq(Eq[dq[1]]), Eq[d … [truncated]
+     function gC(CC) {
+       let {
+         worldCode: zC,
+         message: ZC
+       } = CC;
+       const {
+         t: gC
+       } = (0, wC.y)(), {
+         isTouchScreen: SC
+       } = (0, fC.k)(["isTouchScreen"]), pC = nC.featureFlags.canUseInviteLinks, PC = (0, FC.e)(pC && null === ZC), [GC, RC] = (0, qC.i)(), AC = (0, QC.useRef)(null);
+       if (null !== ZC) return (0, MC.jsxs)("div", {
+         className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
+         children: [(0, MC.jsx)(NC.c, {
+           name: "lock"
+         }), (0, MC.jsx)("span", {
+           children: ZC
+ ... (34 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L1025-L1038` → after: `L2048-L2060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R2048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L2048-L2060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/220.js#L2048-L2060) · [Before (L1025-L1038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/220.js#L1025-L1038)

```diff
-                 function Oq(...Eq) {
-                   if (Eq[dq[13]] = dq[1], qq[-dq[94]] >= qq[dq[14]]) {
-                     function gq(...qq) {
-                       for (bq(qq[dq[13]] = dq[2], qq[-dq[93]] = '&IZlUWVhEfQJSRK|q1~g)_A8$+=%wjG4*THObpsY`>!uNzaB/.}d([^0ytPk7v?@n{9mce:6FM,<3x"2]rX#iLD5C;o', qq[dq[21]] = "" + (qq[dq[1]] || ""), qq[dq[92]] = qq[dq[21]].length, qq[dq[40]] = [], qq[dq[8]] = dq[1], qq[dq[24]] = dq[ … [truncated]
-                         if (qq[dq[6]] = qq[-dq[93]].indexOf(qq[dq[21]][qq[dq[11]]]), qq[dq[6]] !== -dq[2])
-                           if (qq[dq[26]] < dq[1]) qq[dq[26]] = qq[dq[6]];
-                           else {
-                             bq(qq[dq[26]] += qq[dq[6]] * dq[35], qq[dq[8]] |= qq[dq[26]] << qq[dq[24]], qq[dq[24]] += (qq[dq[26]] & dq[36]) > dq[37] ? dq[38] : dq[39]);
-                             do {
-                               bq(qq[dq[40]].push(qq[dq[8]] & dq[12]), qq[dq[8]] >>= dq[11], qq[dq[24]] -= dq[11])
-                             } while (qq[dq[24]] > dq[26]);
-                             qq[dq[26]] = -dq[2]
-                           } return qq[dq[26]] > -dq[2] && qq[dq[40]].push((qq[dq[8]] | qq[dq[26]] << qq[dq[24]]) & dq[12]), Hq(qq[dq[40]])
-                     }
+     function WC(CC, zC) {
+       var ZC;
+       return {
+         isError: !1,
+         name: CC,
+         ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
+         cosmetics: null !== zC && void 0 !== zC ? zC : {},
+         nameColour: null !== (ZC = null === zC || void 0 === zC ? void 0 : zC.nameColour) && void 0 !== ZC ? ZC : QC.d,
+         location: {
+           status: "offline"
+         }
+       }
+     }
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L1040-L1060` → after: `L2062-L2106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R2062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L2062-L2106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/220.js#L2062-L2106) · [Before (L1040-L1060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/220.js#L1040-L1060)

```diff
-                     function Yq(...qq) {
-                       return qq[dq[13]] = dq[2], typeof xq[qq[dq[1]]] === dq[17] ? xq[qq[dq[1]]] = gq(Aq[qq[dq[1]]]) : xq[qq[dq[1]]]
-                     }
-                     throw Error(Yq(160))
-                   }
-                   if (bq(Eq[dq[21]] = qq[dq[40]][qq[-dq[94]]] & dq[12], qq[-dq[94]]++), (Eq[dq[21]] & dq[95]) == dq[50]) return Eq[dq[21]] & dq[23];
-                   throw Error(function(...qq) {
-                     return qq[dq[13]] = dq[2], typeof xq[qq[dq[1]]] === dq[17] ? xq[qq[dq[1]]] = function(...qq) {
-                       for (bq(qq[dq[13]] = dq[2], qq[dq[16]] = 'A<wue]jDyLKh#PrF4[a*x=R:m`~IV^Z96q0W)d%T;bQM?O|n1o8Yl2g$S/@i3c!>HUf{5BE_pCtN,.s7v&z(kG+X}"J', qq[-dq[90]] = "" + (qq[dq[1]] || ""), qq[-dq[62]] = qq[-dq[90]].length, qq[dq[40]] = [], qq[dq[8]] = dq[1], qq[dq[24]] = d … [truncated]
-                         if (qq[-dq[91]] = qq[dq[16]].indexOf(qq[-dq[90]][qq[dq[3]]]), qq[-dq[91]] !== -dq[2])
-                           if (qq[-dq[4]] < dq[1]) qq[-dq[4]] = qq[-dq[91]];
-                           else {
-                             bq(qq[-dq[4]] += qq[-dq[91]] * dq[35], qq[dq[8]] |= qq[-dq[4]] << qq[dq[24]], qq[dq[24]] += (qq[-dq[4]] & dq[36]) > dq[37] ? dq[38] : dq[39]);
-                             do {
-                               bq(qq[dq[40]].push(qq[dq[8]] & dq[12]), qq[dq[8]] >>= dq[11], qq[dq[24]] -= dq[11])
-                             } while (qq[dq[24]] > dq[26]);
- ... (5 more removed lines; see GitHub link above)
+     function NC(CC) {
+       let {
+         player: zC,
+         isFriend: ZC = !1,
+         status: QC,
+         showLocation: oC = void 0 === QC,
+         ZN: WC,
+         onSendFriendRequest: NC,
+         actions: MC,
+         zIndex: gC
+       } = CC;
+       const {
+         t: SC
+       } = (0, wC.y)();
+       let pC = QC;
+       null !== WC && void 0 !== WC && WC.on && (pC = (0, FC.jsxs)(FC.Fragment, {
+ ... (29 more added lines; see GitHub link above)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L1062-L1075` → after: `L2108-L2145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R2108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L2108-L2145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/220.js#L2108-L2145) · [Before (L1062-L1075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/220.js#L1062-L1075)

```diff
-                 function mq(...Eq) {
-                   if (Eq[dq[13]] = dq[1], bq(Eq[-dq[97]] = dq[18], Eq[dq[26]] = dq[18], Eq[dq[14]] = dq[18], Eq[dq[4]] = dq[18], Eq[dq[40]] = dq[18]), qq[-dq[94]] > qq[dq[14]]) {
-                     function Yq(...qq) {
-                       for (bq(qq[dq[13]] = dq[2], qq[dq[2]] = '~!;6sy,?meHnPz/}5S(>X9uc$#vfJ1%oTMp@Ai2D&a]l38:Zwx_hWV{dGIrFC)*qBjY0<UO".E`Qt^RN4kb7+K|[=gL', qq[dq[45]] = "" + (qq[dq[1]] || ""), qq[dq[14]] = qq[dq[45]].length, qq[-dq[69]] = [], qq[dq[96]] = dq[1], qq[dq[43]] = dq[ … [truncated]
-                         if (qq[dq[34]] = qq[dq[2]].indexOf(qq[dq[45]][qq[dq[11]]]), qq[dq[34]] !== -dq[2])
-                           if (qq[dq[26]] < dq[1]) qq[dq[26]] = qq[dq[34]];
-                           else {
-                             bq(qq[dq[26]] += qq[dq[34]] * dq[35], qq[dq[96]] |= qq[dq[26]] << qq[dq[43]], qq[dq[43]] += (qq[dq[26]] & dq[36]) > dq[37] ? dq[38] : dq[39]);
-                             do {
-                               bq(qq[-dq[69]].push(qq[dq[96]] & dq[12]), qq[dq[96]] >>= dq[11], qq[dq[43]] -= dq[11])
-                             } while (qq[dq[43]] > dq[26]);
-                             qq[dq[26]] = -dq[2]
-                           } return qq[dq[26]] > -dq[2] && qq[-dq[69]].push((qq[dq[96]] | qq[dq[26]] << qq[dq[43]]) & dq[12]), Hq(qq[-dq[69]])
-                     }
+     function MC(CC) {
+       let {
+         row: zC,
+         ZN: ZC,
+         canInvite: QC,
+         invited: bC,
+         onInvite: nC,
+         zIndex: fC
+       } = CC;
+       const {
+         t: qC
+       } = (0, wC.y)(), WC = "online" === zC.place ? oC.g : oC.i;
+       return (0, FC.jsx)(NC, {
+         player: zC.friend,
+         isFriend: !0,
+         status: "here" === zC.place ? qC("worldSocial:inThisWorld") : void 0,
+ ... (22 more added lines; see GitHub link above)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L1077-L1098` → after: `L2147-L2157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R2147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L2147-L2157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/220.js#L2147-L2157) · [Before (L1077-L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/220.js#L1077-L1098)

```diff
-                     function lq(...qq) {
-                       return qq[dq[13]] = dq[2], typeof xq[qq[dq[1]]] === dq[17] ? xq[qq[dq[1]]] = Yq(Aq[qq[dq[1]]]) : xq[qq[dq[1]]]
-                     }
-                     throw Error(lq(162))
-                   }
-                   if (qq[-dq[94]] == qq[dq[14]]) return dq[44];
-                   if (bq(Eq[-dq[97]] = qq[dq[40]][qq[-dq[94]]] & dq[12], qq[-dq[94]]++), (Eq[-dq[97]] & dq[50]) == dq[1]) return Eq[-dq[97]];
-                   if ((Eq[-dq[97]] & dq[98]) == dq[95]) {
-                     if (bq(Eq[dq[26]] = Oq(), Eq[dq[40]] = (Eq[-dq[97]] & dq[79]) << dq[24] | Eq[dq[26]]), Eq[dq[40]] >= dq[50]) return Eq[dq[40]];
-                     {
-                       function mq(...qq) {
-                         for (bq(qq[dq[13]] = dq[2], qq[dq[99]] = 'Hw/$Gzvo>JEr0+qDFZCNuVln3X6?y@^ti]}M_[x;P<ha:BUb5m`{K.I,f8*2&|T7L~R#e19cg%4Ys!SA)(pj="dQkOW', qq[dq[21]] = "" + (qq[dq[1]] || ""), qq[dq[14]] = qq[dq[21]].length, qq[dq[15]] = [], qq[-dq[100]] = dq[1], qq[dq[24]] = … [truncated]
-                           if (qq[dq[6]] = qq[dq[99]].indexOf(qq[dq[21]][qq[dq[3]]]), qq[dq[6]] !== -dq[2])
-                             if (qq[dq[42]] < dq[1]) qq[dq[42]] = qq[dq[6]];
-                             else {
-                               bq(qq[dq[42]] += qq[dq[6]] * dq[35], qq[-dq[100]] |= qq[dq[42]] << qq[dq[24]], qq[dq[24]] += (qq[dq[42]] & dq[36]) > dq[37] ? dq[38] : dq[39]);
- ... (6 more removed lines; see GitHub link above)
+     function nC(CC) {
+       const zC = {
+         lobbyName: CC,
+         answer: null,
+         response: wC.d.getSocialSettings(CC)
+       };
+       return zC.response.then((CC => {
+         zC.answer = CC
+       })), zC
+     }
+     const fC = new Map;
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L1100-L1120` → after: `L2159-L2161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R2159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L2159-L2161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/220.js#L2159-L2161) · [Before (L1100-L1120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/220.js#L1100-L1120)

```diff
-                       function cq(...qq) {
-                         return qq[dq[13]] = dq[2], typeof xq[qq[dq[1]]] === dq[17] ? xq[qq[dq[1]]] = mq(Aq[qq[dq[1]]]) : xq[qq[dq[1]]]
-                       }
-                       throw Error(cq(163))
-                     }
-                   }
-                   if ((Eq[-dq[97]] & dq[101]) == dq[98]) {
-                     if (bq(Eq[dq[26]] = Oq(), Eq[dq[14]] = Oq(), Eq[dq[40]] = (Eq[-dq[97]] & dq[86]) << dq[27] | Eq[dq[26]] << dq[24] | Eq[dq[14]]), Eq[dq[40]] >= 2048) return gq(Eq[dq[40]]), Eq[dq[40]];
-                     {
-                       function uq(...qq) {
-                         for (bq(qq[dq[13]] = dq[2], qq[-dq[103]] = 'Kocu3n)eq?=2txC1|:WT_SkmO9;5r$@68jPL^B&{ZdI.DFl7y!~#haH0+/%U`sb"vJg]4RE(zp,Qw*A>}[XGM<YNVif', qq[-dq[102]] = "" + (qq[dq[1]] || ""), qq[dq[14]] = qq[-dq[102]].length, qq[dq[40]] = [], qq[-dq[104]] = dq[1], qq[dq[ … [truncated]
-                           if (qq[dq[6]] = qq[-dq[103]].indexOf(qq[-dq[102]][qq[dq[11]]]), qq[dq[6]] !== -dq[2])
-                             if (qq[dq[26]] < dq[1]) qq[dq[26]] = qq[dq[6]];
-                             else {
-                               bq(qq[dq[26]] += qq[dq[6]] * dq[35], qq[-dq[104]] |= qq[dq[26]] << qq[dq[24]], qq[dq[24]] += (qq[dq[26]] & dq[36]) > dq[37] ? dq[38] : dq[39]);
-                               do {
- ... (5 more removed lines; see GitHub link above)
+     function oC(CC) {
+       fC.set(CC.lobbyName, CC)
+     }
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L1122-L1209` → after: `L2163-L2217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R2163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L2163-L2217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/220.js#L2163-L2217) · [Before (L1122-L1209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/220.js#L1122-L1209)

```diff
-                       function Bq(...qq) {
-                         return qq[dq[13]] = dq[2], typeof xq[qq[dq[1]]] === dq[17] ? xq[qq[dq[1]]] = uq(Aq[qq[dq[1]]]) : xq[qq[dq[1]]]
-                       }
-                       throw Error(Bq(164))
-                     }
-                   }
-                   if ((Eq[-dq[97]] & dq[117]) == dq[101] && (bq(Eq[dq[26]] = Oq(), Eq[dq[14]] = Oq(), Eq[dq[4]] = Oq(), Eq[dq[40]] = (Eq[-dq[97]] & dq[26]) << dq[87] | Eq[dq[26]] << dq[27] | Eq[dq[14]] << dq[24] | Eq[dq[4]]), Eq[dq[40]] >= dq[81] && Eq[dq[40]] <= 1114111)) return … [truncated]
-                   throw Error(function(...qq) {
-                     return qq[dq[13]] = dq[2], typeof xq[qq[dq[1]]] === dq[17] ? xq[qq[dq[1]]] = function(...qq) {
-                       for (bq(qq[dq[13]] = dq[2], qq[dq[16]] = '_83*!(z.|~j@O;0t1yEmenC?9M2J7Y+Uo4VWa"x<PFQbd`pLws/qX[{&v#)D>H:5h]}$Ilk,^g=riN%GBRfcKTSu6ZA', qq[dq[21]] = "" + (qq[dq[1]] || ""), qq[dq[4]] = qq[dq[21]].length, qq[dq[15]] = [], qq[dq[73]] = dq[1], qq[dq[24]] = dq[1 … [truncated]
-                         if (qq[dq[34]] = qq[dq[16]].indexOf(qq[dq[21]][qq[dq[11]]]), qq[dq[34]] !== -dq[2])
-                           if (qq[dq[42]] < dq[1]) qq[dq[42]] = qq[dq[34]];
-                           else {
-                             bq(qq[dq[42]] += qq[dq[34]] * dq[35], qq[dq[73]] |= qq[dq[42]] << qq[dq[24]], qq[dq[24]] += (qq[dq[42]] & dq[36]) > dq[37] ? dq[38] : dq[39]);
-                             do {
-                               bq(qq[dq[15]].push(qq[dq[73]] & dq[12]), qq[dq[73]] >>= dq[11], qq[dq[24]] -= dq[11])
- ... (72 more removed lines; see GitHub link above)
+     function qC(CC) {
+       const [zC] = (0, QC.useState)((() => function(CC) {
+         var zC;
+         const ZC = null !== (zC = fC.get(CC)) && void 0 !== zC ? zC : null;
+         return null !== ZC && void 0 !== ZC && ZC.answer && "error" in ZC.answer ? null : ZC
+       }(CC))), [ZC, nC] = (0, QC.useState)((() => null !== zC && void 0 !== zC && zC.answer && "settings" in zC.answer ? zC.answer.settings : null)), [oC, qC] = (0, QC.useState)(!0), [FC, WC] = (0, QC.useState)(null !== ZC), NC = (0, QC.useRef)(ZC);
+       NC.current = ZC;
+       const MC = (0, QC.useRef)(0),
+         gC = (0, QC.useRef)(0),
+         SC = (0, QC.useRef)(!1),
+         pC = (0, QC.useRef)(!0),
+         PC = (0, QC.useCallback)((async zC => {
+           const ZC = ++MC.current,
+             QC = await (null !== zC && void 0 !== zC ? zC : wC.d.getSocialSettings(CC));
+           pC.current && ZC === MC.current && (WC(!0), qC(!1), "error" in QC || nC(QC.settings))
+         }), [CC]),
+ ... (39 more added lines; see GitHub link above)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L1211-L1216` → after: `L2219-L2222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R2219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L2219-L2222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/220.js#L2219-L2222) · [Before (L1211-L1216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/220.js#L1211-L1216)

```diff
-           }
-           return mq > -dq[2] && Yq.push((lq | mq << Oq) & dq[12]), Hq(Yq)
-         }
- 
-         function zq(...qq) {
-           return qq[dq[13]] = dq[2], typeof xq[qq[dq[1]]] === dq[17] ? xq[qq[dq[1]]] = Tq(Aq[qq[dq[1]]]) : xq[qq[dq[1]]]
+             });
+           if (gC.current > 0) return qC;
+           const FC = SC.current;
+           return SC.current = !1, !FC && "settings" in oC ? AC(oC.settings) : (FC || AC(fC), PC()), qC
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L1219-L1243` → after: `L2235-L2239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R2235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L2235-L2239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/220.js#L2235-L2239) · [Before (L1219-L1243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/220.js#L1219-L1243)

```diff
-         function Sq(...qq) {
-           bq(qq[dq[13]] = dq[1], qq[dq[16]] = function(...Eq) {
-             return bq(Eq[dq[13]] = dq[45], Eq[dq[45]] = [], Eq[dq[4]] = Eq[dq[1]].length, Eq[dq[1]].sort(((qq, Eq) => qq - Eq)), qq[dq[2]](Eq[dq[45]], [], dq[1], Eq[dq[4]], Eq[dq[1]], Eq[dq[2]])), Eq[dq[45]]
-           }, qq[dq[2]] = function(...Eq) {
-             if (bq(Eq[dq[13]] = dq[24], Eq[dq[108]] = dq[52]), !(Eq[dq[73]] < dq[1])) {
-               if (Eq[dq[73]] === dq[1]) return Eq[dq[1]].push(Eq[dq[2]]);
-               for (Eq[dq[21]] = Eq[dq[45]]; Eq[dq[21]] < Eq[dq[4]] && !(Eq[dq[40]][Eq[dq[21]]] > Eq[dq[73]]); Eq[dq[21]]++) Eq[dq[21]] > Eq[dq[45]] && Eq[dq[40]][Eq[dq[21]]] === Eq[dq[40]][Eq[dq[21]] - dq[2]] || bq(Eq[dq[108]] = Array.from(Eq[dq[2]]), Eq[dq[108]].push(Eq[dq[40]][ … [truncated]
-             }
-           }, console.log(qq[dq[16]]))
-         }
-         zq(184) + "Y" in oq && Sq();
-         let pq = qq[dq[45]][zq(185) + zq(186)] * Nq;
-         if (!cq) {
-           function Lq(...qq) {
-             for (bq(qq[dq[13]] = dq[2], qq[dq[2]] = '/UCTcNbflMq?X"YpJ7}B=kv~Z{x%yodt)>,!ru5Q8|mze;WI[Sw_:0]ghO#`<AVFPD@K&63(R*E4^iLH$2js9G1a.n+', qq[dq[21]] = "" + (qq[dq[1]] || ""), qq[dq[14]] = qq[dq[21]].length, qq[dq[40]] = [], qq[dq[73]] = dq[1], qq[dq[24]] = dq[1], qq[-dq[ … [truncated]
-               if (qq[dq[6]] = qq[dq[2]].indexOf(qq[dq[21]][qq[dq[110]]]), qq[dq[6]] !== -dq[2])
- ... (9 more removed lines; see GitHub link above)
+     function bC(CC, zC) {
+       var ZC;
+       const QC = null !== (ZC = wC.get(CC)) && void 0 !== ZC ? ZC : new Map;
+       QC.set(zC, Date.now()), wC.set(CC, QC)
+     }
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L1245-L1247` → after: `L2241-L2255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R2241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L2241-L2255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/220.js#L2241-L2255) · [Before (L1245-L1247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/220.js#L1245-L1247)

```diff
-           function Jq(...qq) {
-             return qq[dq[13]] = dq[2], typeof xq[qq[dq[1]]] === dq[17] ? xq[qq[dq[1]]] = Lq(Aq[qq[dq[1]]]) : xq[qq[dq[1]]]
-           }
+     function nC(CC) {
+       const zC = wC.get(CC);
+       if (!zC) return [];
+       const ZC = Date.now();
+       for (const [wC, bC] of zC) ZC - bC >= QC.m && zC.delete(wC);
+       return [...zC.keys()]
+     }
+   },
+   36588: (CC, zC, ZC) => {
+     function QC(CC, zC) {
+       const ZC = zC.toLowerCase();
+       for (const QC of CC)
+         if (QC.toLowerCase() === ZC) return !0;
+       return !1
+     }
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L1249-L1271` → after: `L2257-L2272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R2257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L2257-L2272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/220.js#L2257-L2272) · [Before (L1249-L1271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/220.js#L1249-L1271)

```diff
-           function kq(...qq) {
-             qq[dq[13]] = dq[1]
-           }
-           Jq(187) + "n" in oq && kq(), pq *= qq[dq[45]][Jq(dq[93]) + Jq(194)]
-         }
-         let Gq = qq[dq[45]][zq(dq[107]) + zq(dq[41]) + "ss"] * Wq;
-         if (Wq < .3) {
-           function Rq(qq) {
-             var Eq, gq, Yq, lq, Oq, mq, xq;
-             for (bq(Eq = "" + (qq || ""), gq = Eq.length, Yq = [], lq = dq[1], Oq = dq[1], mq = -dq[2]), xq = dq[1]; xq < gq; xq++) {
-               var Aq = '5gcsXmUVERMkniPSO+/^l]3w1D=:%<?FLQ|;tuo>aGZzHB{[!IqjW#Cve4~KJYh&fA*xrNT.07bd2,`p8)}y$6_(@9"'.indexOf(Eq[xq]);
-               if (Aq !== -dq[2])
-                 if (mq < dq[1]) mq = Aq;
-                 else {
-                   bq(mq += Aq * dq[35], lq |= mq << Oq, Oq += (mq & dq[36]) > dq[37] ? dq[38] : dq[39]);
-                   do {
- ... (7 more removed lines; see GitHub link above)
+     function wC(CC, zC, ZC) {
+       const wC = [],
+         bC = [],
+         nC = [];
+       for (const fC of CC) !fC.isError && fC.name && ("inGame" === fC.location.status && fC.location.inLobbyName === zC || QC(ZC, fC.name) ? bC.push({
+         friend: fC,
+         place: "here"
+       }) : "offline" === fC.location.status ? nC.push({
+         friend: fC,
+         place: "offline"
+       }) : wC.push({
+         friend: fC,
+         place: "online"
+       }));
+       return [...wC, ...bC, ...nC]
+     }
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L1273-L1275` → after: `L2274-L2279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R2274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L2274-L2279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/220.js#L2274-L2279) · [Before (L1273-L1275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/220.js#L1273-L1275)

```diff
-           function Uq(...qq) {
-             return qq[dq[13]] = dq[2], typeof xq[qq[dq[1]]] === dq[17] ? xq[qq[dq[1]]] = Rq(Aq[qq[dq[1]]]) : xq[qq[dq[1]]]
-           }
+     function bC(CC, zC, ZC) {
+       const wC = [],
+         bC = CC.flatMap((CC => "here" === CC.place ? [CC.friend.name] : []));
+       for (const nC of [...bC, ...zC]) QC(wC, nC) || QC(ZC, nC) || wC.push(nC);
+       return wC
+     }
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L1277-L1294` → after: `L2281-L2283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R2281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L2281-L2283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/220.js#L2281-L2283) · [Before (L1277-L1294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/220.js#L1277-L1294)

```diff
-           function Fq(...qq) {
-             qq[dq[13]] = dq[1]
-           }
-           Uq(dq[97]) + "3" in oq && Fq(), Gq *= Wq
-         }
-         if (pq > Gq) {
-           function sq(...qq) {
-             for (bq(qq[dq[13]] = dq[2], qq[dq[16]] = '*!<,D;^+b"Av.9V{L(z%SO#)7=FHBj_U~ud|Isl$R6cCopm3>1yarJ}NZ]EfT@q8Kx?Q2k5h&Gin4:0wXeMt/`W[PgY', qq[dq[21]] = "" + (qq[dq[1]] || ""), qq[dq[14]] = qq[dq[21]].length, qq[dq[15]] = [], qq[dq[73]] = dq[1], qq[dq[43]] = dq[1], qq[dq[ … [truncated]
-               if (qq[dq[6]] = qq[dq[16]].indexOf(qq[dq[21]][qq[-dq[66]]]), qq[dq[6]] !== -dq[2])
-                 if (qq[dq[26]] < dq[1]) qq[dq[26]] = qq[dq[6]];
-                 else {
-                   bq(qq[dq[26]] += qq[dq[6]] * dq[35], qq[dq[73]] |= qq[dq[26]] << qq[dq[43]], qq[dq[43]] += (qq[dq[26]] & dq[36]) > dq[37] ? dq[38] : dq[39]);
-                   do {
-                     bq(qq[dq[15]].push(qq[dq[73]] & dq[12]), qq[dq[73]] >>= dq[11], qq[dq[43]] -= dq[11])
-                   } while (qq[dq[43]] > dq[26]);
-                   qq[dq[26]] = -dq[2]
- ... (2 more removed lines; see GitHub link above)
+     function nC(CC, zC) {
+       return null === CC || void 0 === CC || !CC.canManage || QC(CC.whitelist, zC) ? "none" : "whitelist" === CC.visibility ? "required" : "quiet"
+     }
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L1296-L1298` → after: `L2285-L2291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R2285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L2285-L2291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/220.js#L2285-L2291) · [Before (L1296-L1298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/220.js#L1296-L1298)

```diff
-           function Xq(...qq) {
-             return qq[dq[13]] = dq[2], typeof xq[qq[dq[1]]] === dq[17] ? xq[qq[dq[1]]] = sq(Aq[qq[dq[1]]]) : xq[qq[dq[1]]]
-           }
+     function fC(CC) {
+       if (null === CC) return !0;
+       const {
+         visibility: zC
+       } = CC;
+       return "public" === zC || "unlisted" === zC || "whitelist" === zC && CC.canManage
+     }
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L1300-L1309` → after: `L2293-L2298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R2293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L2293-L2298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/220.js#L2293-L2298) · [Before (L1300-L1309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/220.js#L1300-L1309)

```diff
-           function wq(...qq) {
-             bq(qq[dq[13]] = dq[1], qq[dq[123]] = function(...qq) {
-               if (bq(qq[dq[13]] = dq[2], qq[dq[16]] = qq[dq[1]].length), qq[dq[16]] < dq[45]) return dq[1];
-               if (bq(qq[-dq[7]] = Math.max(...qq[dq[1]]), qq[dq[14]] = Math.min(...qq[dq[1]])), qq[-dq[7]] === qq[dq[14]]) return dq[1];
-               for (bq(qq[dq[15]] = Array(qq[dq[16]] - dq[2]).fill(Number.MAX_SAFE_INTEGER), qq[dq[73]] = Array(qq[dq[16]] - dq[2]).fill(Number.MIN_SAFE_INTEGER), qq[-dq[121]] = Math.ceil((qq[-dq[7]] - qq[dq[14]]) / (qq[dq[16]] - dq[2])), qq[dq[42]] = dq[1]), qq[dq[3]] = dq[1]; qq … [truncated]
-               for (bq(qq[dq[6]] = Number.MIN_SAFE_INTEGER, qq[dq[82]] = qq[dq[14]]), qq[dq[122]] = dq[1]; qq[dq[122]] < qq[dq[16]] - dq[2]; qq[dq[122]]++) qq[dq[15]][qq[dq[122]]] === Number.MAX_SAFE_INTEGER && qq[dq[73]][qq[dq[122]]] === Number.MIN_SAFE_INTEGER || bq(qq[dq[6]] =  … [truncated]
-               return qq[dq[6]] = Math.max(qq[dq[6]], qq[-dq[7]] - qq[dq[82]]), qq[dq[6]]
-             }, console.log(qq[dq[123]]))
-           }
-           Xq(dq[10]) + "l" in oq && wq(), pq = Gq
+     function oC(CC, zC, ZC) {
+       if (ZC) {
+         const ZC = zC.filter((zC => !QC(CC.whitelist, zC)));
+         return {
+           ...CC,
+           whitelist: [...CC.whitelist, ...ZC]
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L1313` → after: `L2301-L2304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R2301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L2301-L2304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/220.js#L2301-L2304) · [Before (L1313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/220.js#L1313)

```diff
-       qq[dq[40]][Eq(dq[96]) + dq[124]] = qq[dq[45]][Eq(208) + Eq(dq[51]) + dq[124]] * (cq ? Yq : mq)
+       return {
+         ...CC,
+         whitelist: CC.whitelist.filter((CC => !QC(zC, CC)))
+       }
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L1316` → after: `L2322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R2322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L2322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/220.js#L2322) · [Before (L1316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/220.js#L1316)

```diff
-   37656: (qq, Eq, gq) => {
+   36882: (CC, zC, ZC) => {
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L1318-L1319` → after: `L2324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R2324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L2324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/220.js#L2324) · [Before (L1318-L1319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/220.js#L1318-L1319)

```diff
-       c: () => Aq,
-       g: () => xq
+       e: () => bC
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L1321-L1363` → after: `L2326-L2327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R2326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L2326-L2327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/220.js#L2326-L2327) · [Before (L1321-L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/220.js#L1321-L1363)

```diff
-     var Yq = gq(37661),
-       lq = gq(1870);
-     const Oq = 2,
-       mq = 1,
-       xq = {
-         Am: 1,
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
- ... (27 more removed lines; see GitHub link above)
+     var QC = ZC(48),
+       wC = ZC(2369);
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L1365-L1375` → after: `L2329-L2342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R2329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L2329-L2342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/220.js#L2329-L2342) · [Before (L1365-L1375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/220.js#L1365-L1375)

```diff
-     function Aq(qq, Eq, gq, xq, Aq, cq, uq) {
-       if (Aq.speed) return (0, Yq.c)(Eq, gq, xq, Aq, cq, uq, qq), void(Aq.ticksToReachMaxIdleFriction = Oq);
-       const Bq = xq.isOnGround(),
-         Wq = Eq.bloxd.getSyncedClientOptions(Eq.bloxd.getPlayerReader(gq)),
-         Nq = null === Wq ? Eq.bloxd.getClientPredictedOption(gq, "groundFrictionScale") : Wq.groundFrictionScale,
-         aq = null === Wq ? Eq.bloxd.getClientPredictedOption(gq, "airFrictionScale") : Wq.airFrictionScale,
-         Vq = Bq ? Nq : aq,
-         dq = Math.max(mq, Vq),
-         jq = Aq.ticksToReachMaxIdleFriction / Oq,
-         Hq = (0, lq.w)(dq, Vq, jq);
-       cq.friction = qq.standingFriction * ((null === Wq ? Eq.bloxd.getClientPredictedOption(gq, "airMomentumConservation") : Wq.airMomentumConservation) ? Hq : Vq), Aq.ticksToReachMaxIdleFriction > 0 && Aq.ticksToReachMaxIdleFriction--
+     function bC() {
+       const CC = (0, wC.h)("lobbyLeaderboardInfo");
+       return (0, QC.useMemo)((() => function(CC) {
+         if (null === CC) return null;
+         const zC = Object.entries(CC),
+           ZC = zC.filter((CC => {
+             let [, zC] = CC;
+             return void 0 !== zC
+           }));
+         if (ZC.length === zC.length) return CC;
+         const QC = Object.fromEntries(ZC),
+           wC = Object.keys(CC).filter((CC => !Object.hasOwn(QC, CC)));
+         return console.warn(`lobbyLeaderboardInfo left out its undefined columns: ${wC.join(", ")}`), QC
+       }(CC)), [CC])
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/221.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/221.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L4-L23` → after: `L4-L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L4-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/221.js#L4-L153) · [Before (L4-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/221.js#L4-L23)

```diff
-   39563: (qq, Eq, gq) => {
-     gq.r(Eq), gq.d(Eq, {
-       getBlockFaces: () => Wq,
-       getIngameIconUrl: () => Vq,
-       getItemIconUrl: () => aq,
-       getItemTextureUrl: () => Nq,
-       getParticleTextureUrl: () => dq
-     });
-     var Yq = gq(4283),
-       lq = gq(37086),
-       Oq = gq(9371),
-       mq = gq(3059);
-     const xq = new Set,
-       Aq = new Set;
-     let cq = null;
- 
- ... (4 more removed lines; see GitHub link above)
+   36521: CC => {
+     CC.exports = {
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

#### 2. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L26-L31` → after: `L167-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L167-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/221.js#L167-L168) · [Before (L26-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/221.js#L26-L31)

```diff
-     function Bq(qq, Eq) {
-       try {
-         return (0, Oq.getDefaultTexture)(qq, Eq).url
-       } catch {
-         return uq(qq), null
-       }
+     function qC(CC, zC, ZC) {
+       return Math.min(Math.max(zC, CC), ZC)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L36-L44` → after: `L177-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L177-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/221.js#L177-L186) · [Before (L36-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/221.js#L36-L44)

```diff
-       const Oq = lq.m[qq];
-       if (!Oq || Oq.itemTexture || !Oq.textureInfo) return null;
-       const {
-         textureInfo: xq,
-         texturePerSide: Aq
-       } = Oq, cq = qq => {
-         return "string" === typeof(Eq = Aq && Array.isArray(xq) ? xq[Aq[qq]] : xq) ? Bq(Eq, mq.g.BLOCK) : Eq && "object" === typeof Eq && "animTextures" in Eq ? Bq((0, Yq.l)(Eq), mq.g.BLOCK) : null;
-         var Eq
-       }, uq = cq(2);
+       switch (CC.substring(0, 3).toLowerCase()) {
+         case "hsl":
+           zC = oC.get.hsl(CC), ZC = "hsl";
+           break;
+         case "hwb":
+           zC = oC.get.hwb(CC), ZC = "hwb";
+           break;
+         default:
+           zC = oC.get.rgb(CC), ZC = "rgb"
+       }
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L46-L48` → after: `L188-L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L188-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/221.js#L188-L189) · [Before (L46-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/221.js#L46-L48)

```diff
-         top: uq,
-         left: null !== (Eq = cq(4)) && void 0 !== Eq ? Eq : uq,
-         right: null !== (gq = cq(0)) && void 0 !== gq ? gq : uq
+         model: ZC,
+         value: zC
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L52-L55` → after: `L260-L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L260-L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/221.js#L260-L475) · [Before (L52-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/221.js#L52-L55)

```diff
-     function Nq(qq) {
-       var Eq;
-       const gq = lq.m[qq];
-       return Bq(null !== (Eq = null === gq || void 0 === gq ? void 0 : gq.itemTexture) && void 0 !== Eq ? Eq : "string" === typeof(null === gq || void 0 === gq ? void 0 : gq.textureInfo) ? gq.textureInfo : qq, mq.g.ITEM)
+     function oC(CC, zC) {
+       if (!(this instanceof oC)) return new oC(CC, zC);
+       if (zC && zC in bC && (zC = null), zC && !(zC in wC)) throw new Error("Unknown model: " + zC);
+       let ZC, qC;
+       if (null == CC) this.model = "rgb", this.color = [0, 0, 0], this.valpha = 1;
+       else if (CC instanceof oC) this.model = CC.model, this.color = [...CC.color], this.valpha = CC.valpha;
+       else if ("string" === typeof CC) {
+         const zC = QC.get(CC);
+         if (null === zC) throw new Error("Unable to parse color from string: " + CC);
+         this.model = zC.model, qC = wC[this.model].channels, this.color = zC.value.slice(0, qC), this.valpha = "number" === typeof zC.value[qC] ? zC.value[qC] : 1
+       } else if (CC.length > 0) {
+         this.model = zC || "rgb", qC = wC[this.model].channels;
+         const ZC = Array.prototype.slice.call(CC, 0, qC);
+         this.color = NC(ZC, qC), this.valpha = "number" === typeof CC[qC] ? CC[qC] : 1
+       } else if ("number" === typeof CC) this.model = "rgb", this.color = [CC >> 16 & 255, CC >> 8 & 255, 255 & CC], this.valpha = 1;
+       else {
+ ... (200 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L59-L60` → after: `L479-L483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L479-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/221.js#L479-L483) · [Before (L59-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/221.js#L59-L60)

```diff
-       var Eq, gq;
-       return lq.m[qq] ? null !== (Eq = null === (gq = Wq(qq)) || void 0 === gq ? void 0 : gq.top) && void 0 !== Eq ? Eq : Nq(qq) : null
+       return function(zC) {
+         return function(CC, zC) {
+           return Number(CC.toFixed(zC))
+         }(zC, CC)
+       }
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L63-L64` → after: `L486-L493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L486-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/221.js#L486-L493) · [Before (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/221.js#L63-L64)

```diff
-     function Vq(qq) {
-       return Bq(qq, mq.g.ICON)
+     function FC(CC, zC, ZC) {
+       CC = Array.isArray(CC) ? CC : [CC];
+       for (const QC of CC)(fC[QC] || (fC[QC] = []))[zC] = ZC;
+       return CC = CC[0],
+         function(QC) {
+           let wC;
+           return void 0 !== QC ? (ZC && (QC = ZC(QC)), wC = this[CC](), wC.color[zC] = QC, wC) : (wC = this[CC]().color[zC], ZC && (wC = ZC(wC)), wC)
+         }
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L68-L71` → after: `L497-L498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L497-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/221.js#L497-L498) · [Before (L68-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/221.js#L68-L71)

```diff
-       try {
-         return gq(3189)(`./${qq}.png`)
-       } catch {
-         return uq(qq), null
+       return function(zC) {
+         return Math.max(0, Math.min(CC, zC))
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L75-L78` → after: `L508-L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L508-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/221.js#L508-L511) · [Before (L75-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/221.js#L75-L78)

```diff
-   37111: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       d: () => Yq
-     });
+   36537: (CC, zC, ZC) => {
+     const QC = ZC(36545),
+       wC = {};
+     for (const nC of Object.keys(QC)) wC[QC[nC]] = nC;
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L80-L179` → after: `L513-L515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L513-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/221.js#L513-L515) · [Before (L80-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/221.js#L80-L179)

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

#### 11. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L181-L196` → after: `L517-L519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L517-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/221.js#L517-L519) · [Before (L181-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/221.js#L181-L196)

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

#### 12. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L198-L207` → after: `L521-L539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L521-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/221.js#L521-L539) · [Before (L198-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/221.js#L198-L207)

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

#### 13. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L209-L235` → after: `L541-L732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L541-L732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/221.js#L541-L732) · [Before (L209-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/221.js#L209-L235)

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

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/222.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/222.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5)

#### 1. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/222.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/222.js#L4)

```diff
-   37145: (qq, Eq, gq) => {
+   36641: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L8` → after: `L7-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L7-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/222.js#L7-L10) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/222.js#L8)

```diff
-       h: () => lq
+       g: () => oz,
+       j: () => Wz,
+       k: () => qz,
+       m: () => Fz
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L10-L15` → after: `L12-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L12-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/222.js#L12-L136) · [Before (L10-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/222.js#L10-L15)

```diff
-     const Yq = 1 / 2.2,
-       lq = 2.2;
-     Math.sqrt(5);
-     let Oq = .001
-   },
-   37158: (qq, Eq, gq) => {
+     const QC = JSON.parse('{"src":["/sounds/generatedSprites/gunSemiAutomatic.aef27960ef.ogg","/sounds/generatedSprites/gunSemiAutomatic.e56594fab5.m4a","/sounds/generatedSprites/gunSemiAutomatic.d3e434f4d0.mp3","/sounds/generatedSprites/gunSemiAutomatic.97d6a47358.ac3"],"sprite" … [truncated]
+       wC = JSON.parse('{"src":["/sounds/generatedSprites/gunSubmachineGun.9d869e4ca3.ogg","/sounds/generatedSprites/gunSubmachineGun.8736ce9068.m4a","/sounds/generatedSprites/gunSubmachineGun.0a429c7e98.mp3","/sounds/generatedSprites/gunSubmachineGun.1db2897c09.ac3"],"sprite":{"s … [truncated]
+       bC = JSON.parse('{"src":["/sounds/generatedSprites/gunPistol.7432a47272.ogg","/sounds/generatedSprites/gunPistol.adec2d9f75.m4a","/sounds/generatedSprites/gunPistol.a9f647182b.mp3","/sounds/generatedSprites/gunPistol.f363b9fa6d.ac3"],"sprite":{"pistol_cock_01":[0,510],"pist … [truncated]
+       nC = JSON.parse('{"src":["/sounds/generatedSprites/gunRifle.ca54b877ed.ogg","/sounds/generatedSprites/gunRifle.94dfb28886.m4a","/sounds/generatedSprites/gunRifle.f2eb64407a.mp3","/sounds/generatedSprites/gunRifle.d268c1da8d.ac3"],"sprite":{"rifle_cock_01":[0,705.30612244897 … [truncated]
+       fC = JSON.parse('{"src":["/sounds/generatedSprites/gunMisc.35b4609d1c.ogg","/sounds/generatedSprites/gunMisc.acc63e7fe9.m4a","/sounds/generatedSprites/gunMisc.4403caaad2.mp3","/sounds/generatedSprites/gunMisc.97552f11dc.ac3"],"sprite":{"bullet_shell_bounce_general_07":[0,82 … [truncated]
+       oC = JSON.parse('{"src":["/sounds/generatedSprites/gunShotgun.4e0220339e.ogg","/sounds/generatedSprites/gunShotgun.137d0e6b6f.m4a","/sounds/generatedSprites/gunShotgun.8b1144b235.mp3","/sounds/generatedSprites/gunShotgun.0b25a6370a.ac3"],"sprite":{"shotgun_cock_01":[0,914.2 … [truncated]
+       qC = JSON.parse('{"src":["/sounds/generatedSprites/dig.affb4a6f05.ogg","/sounds/generatedSprites/dig.082c5b232c.m4a","/sounds/generatedSprites/dig.71feb10d5c.mp3","/sounds/generatedSprites/dig.4913c53dc2.ac3"],"sprite":{"cloth1":[0,1671.8367346938776],"cloth2":[1773.3333333 … [truncated]
+       FC = JSON.parse('{"src":["/sounds/generatedSprites/step.52076ddc3a.ogg","/sounds/generatedSprites/step.d6260ef2cc.m4a","/sounds/generatedSprites/step.6e5286b3a8.mp3","/sounds/generatedSprites/step.cfb5f3dd8f.ac3"],"sprite":{"hit1":[0,557.2789115646258],"hit2":[660,650.15873 … [truncated]
+       WC = JSON.parse('{"src":["/sounds/generatedSprites/randomBeep.7b90315654.ogg","/sounds/generatedSprites/randomBeep.0e88f6aa33.m4a","/sounds/generatedSprites/randomBeep.47ff5e799a.mp3","/sounds/generatedSprites/randomBeep.444034b8b7.ac3"],"sprite":{"beep":[100,2455.510204081 … [truncated]
+       NC = JSON.parse('{"src":["/sounds/generatedSprites/randomCannon.f9d64818ea.ogg","/sounds/generatedSprites/randomCannon.52f7576d74.m4a","/sounds/generatedSprites/randomCannon.bde162aee8.mp3","/sounds/generatedSprites/randomCannon.4877805969.ac3"],"sprite":{"cannonFire1":[100 … [truncated]
+       MC = JSON.parse('{"src":["/sounds/generatedSprites/randomCash.8ff82dcd92.ogg","/sounds/generatedSprites/randomCash.a86426509f.m4a","/sounds/generatedSprites/randomCash.48929d75f1.mp3","/sounds/generatedSprites/randomCash.f687b943c4.ac3"],"sprite":{"cashRegister":[100,3819.6 … [truncated]
+       gC = JSON.parse('{"src":["/sounds/generatedSprites/randomExp.fa5a4c9798.ogg","/sounds/generatedSprites/randomExp.a7e2faf290.m4a","/sounds/generatedSprites/randomExp.b4baff1a37.mp3","/sounds/generatedSprites/randomExp.4974715bbd.ac3"],"sprite":{"exp_collect":[100,1009.206349 … [truncated]
+       SC = JSON.parse('{"src":["/sounds/generatedSprites/randomFallsmall.e0ec9ce0a7.ogg","/sounds/generatedSprites/randomFallsmall.a1f24b70c2.m4a","/sounds/generatedSprites/randomFallsmall.bcbd5fef60.mp3","/sounds/generatedSprites/randomFallsmall.a3b7d06594.ac3"],"sprite":{"falls … [truncated]
+       pC = JSON.parse('{"src":["/sounds/generatedSprites/randomItems.380c31a312.ogg","/sounds/generatedSprites/randomItems.6ae69434b9.m4a","/sounds/generatedSprites/randomItems.85b5c2f034.mp3","/sounds/generatedSprites/randomItems.cdadb8aa52.ac3"],"sprite":{"bow":[100,500],"bucke … [truncated]
+       PC = JSON.parse('{"src":["/sounds/generatedSprites/randomFire.06f418fc54.ogg","/sounds/generatedSprites/randomFire.7c5564dd14.m4a","/sounds/generatedSprites/randomFire.f61e3ab1f3.mp3","/sounds/generatedSprites/randomFire.5869bbefc8.ac3"],"sprite":{"fireBurn":[100,2827.39229 … [truncated]
+       GC = JSON.parse('{"src":["/sounds/generatedSprites/randomFirecracker.ddc99cbc73.ogg","/sounds/generatedSprites/randomFirecracker.128308b436.m4a","/sounds/generatedSprites/randomFirecracker.d5635f7e7d.mp3","/sounds/generatedSprites/randomFirecracker.e5afa15901.ac3"],"sprite" … [truncated]
+ ... (109 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L17-L56` → after: `L138-L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L138-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/222.js#L138-L144) · [Before (L17-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/222.js#L17-L56)

```diff
-       return parseInt(qq.toString().replace(/\W/g, ""))
-     }
- 
-     function lq(qq, Eq) {
-       let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
-       return Math.abs(qq - Eq) <= gq
-     }
- 
-     function Oq(qq, Eq, gq) {
-       let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
-       return qq < Eq - Yq || qq > gq + Yq
-     }
- 
-     function mq(qq, Eq) {
-       return qq === Eq ? qq : Math.random() * (Eq - qq) + qq
-     }
- ... (24 more removed lines; see GitHub link above)
+       if (fz[CC]) return Nz(fz[CC]);
+       {
+         const zC = [];
+         for (const ZC in wz)
+           for (const QC in wz[ZC].sprite) QC.startsWith(CC) && zC.push(QC);
+         return fz[CC] = zC, Nz(zC)
+       }
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L60-L83` → after: `L148-L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L148-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/222.js#L148-L149) · [Before (L60-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/222.js#L60-L83)

```diff
-       let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-         gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
-       return Math.min(gq, Math.max(Eq, qq))
-     }
- 
-     function Nq(qq) {
-       return qq -= 2 * Math.PI * Math.floor((qq + Math.PI) / (2 * Math.PI))
-     }
- 
-     function aq(qq) {
-       const Eq = qq.toString(16);
-       return qq <= 15 ? ("0" + Eq).toUpperCase() : Eq.toUpperCase()
-     }
- 
-     function Vq(qq) {
-       if (Math.log2) return Math.floor(Math.log2(qq));
- ... (8 more removed lines; see GitHub link above)
+       const zC = nz[CC];
+       if (void 0 === zC) throw new Error(`Invalid sound name ${CC} (not in any sprite sheet)`);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L88-L223` → after: `L154-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L154-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/222.js#L154-L155) · [Before (L88-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/222.js#L88-L223)

```diff
-       return qq - Math.floor(qq / Eq) * Eq
-     }
- 
-     function jq(qq, Eq, gq) {
-       return (qq - Eq) / (gq - Eq)
-     }
- 
-     function Hq(qq, Eq, gq) {
-       return qq * (gq - Eq) + Eq
-     }
- 
-     function oq(qq, Eq) {
-       let gq = dq(Eq - qq, 360);
-       return gq > 180 && (gq -= 360), gq
-     }
- 
- ... (120 more removed lines; see GitHub link above)
+       if (!(CC in wz)) throw new Error("Invalid spriteTrack name");
+       return zC in wz[CC].sprite
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/223.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/223.js` (56 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L3` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/223.js#L2) · [Before (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/223.js#L3)

```diff
- export const ids = [223, 230];
+ export const ids = [223];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L5-L25` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/223.js#L4-L7) · [Before (L5-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/223.js#L5-L25)

```diff
-   38280: qq => {
-     qq.exports = function(qq) {
-       return null != qq && null != qq.constructor && "function" === typeof qq.constructor.isBuffer && qq.constructor.isBuffer(qq)
-     }
-   },
-   38264: (qq, Eq, gq) => {
-     var Yq = gq(38267),
-       lq = gq(38273),
-       Oq = gq(38280);
-     gq.g.__TYPEDARRAY_POOL || (gq.g.__TYPEDARRAY_POOL = {
-       UINT8: lq([32, 0]),
-       UINT16: lq([32, 0]),
-       UINT32: lq([32, 0]),
-       INT8: lq([32, 0]),
-       INT16: lq([32, 0]),
-       INT32: lq([32, 0]),
- ... (5 more removed lines; see GitHub link above)
+   39457: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => QC,
+       f: () => wC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L27-L59` → after: `L9-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L9-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/223.js#L9-L12) · [Before (L27-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/223.js#L27-L59)

```diff
-     var mq = "undefined" !== typeof Uint8ClampedArray,
-       xq = gq.g.__TYPEDARRAY_POOL;
-     xq.UINT8C || (xq.UINT8C = lq([32, 0])), xq.BUFFER || (xq.BUFFER = lq([32, 0]));
-     var Aq = xq.DATA,
-       cq = xq.BUFFER;
- 
-     function uq(qq) {
-       if (qq) {
-         var Eq = qq.length || qq.byteLength,
-           gq = Yq.log2(Eq);
-         Aq[gq].push(qq)
-       }
-     }
- 
-     function Bq(qq) {
-       qq = Yq.nextPow2(qq);
- ... (17 more removed lines; see GitHub link above)
+     const QC = "The world isn't loaded, so no blocks can be seen.",
+       wC = "The world isn't loaded, so nothing in it can be seen."
+   },
+   38944: (CC, zC, ZC) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L61` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/223.js#L14) · [Before (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/223.js#L61)

```diff
-       return new Int8Array(Bq(qq), 0, qq)
+       return !(!CC.lobbyLeaderboardInfo && !CC.lobbyManage)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L65` → after: `L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/223.js#L28) · [Before (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/223.js#L65)

```diff
-       return new Int16Array(Bq(2 * qq), 0, qq)
+       QC = CC
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L68-L69` → after: `L31-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/223.js#L31-L32) · [Before (L68-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/223.js#L68-L69)

```diff
-     function jq(qq) {
-       return new Int32Array(Bq(4 * qq), 0, qq)
+     function bC(CC, zC) {
+       return QC(CC, zC)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L73` → after: `L51-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L51-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/223.js#L51-L53) · [Before (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/223.js#L73)

```diff
-       return new Float32Array(Bq(4 * qq), 0, qq)
+       var zC, ZC;
+       const QC = (0, bC.k)();
+       return QC ? null === (zC = (0, wC.e)(QC.api, CC[0], CC[1], CC[2])) || void 0 === zC || null === (ZC = zC.persisted) || void 0 === ZC ? void 0 : ZC.shared : void 0
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L77` → after: `L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/223.js#L57) · [Before (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/223.js#L77)

```diff
-       return new Float64Array(Bq(8 * qq), 0, qq)
+       return `${CC[0]},${CC[1]},${CC[2]}`
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L80-L81` → after: `L63-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/223.js#L63-L64) · [Before (L80-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/223.js#L80-L81)

```diff
-     function Pq(qq) {
-       return mq ? new Uint8ClampedArray(Bq(qq), 0, qq) : Wq(qq)
+     function SC() {
+       return gC
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L85-L93` → after: `L68-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L68-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/223.js#L68-L79) · [Before (L85-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/223.js#L85-L93)

```diff
-       return new DataView(Bq(qq), 0, qq)
-     }
-     Eq.free = function(qq) {
-       if (Oq(qq)) cq[Yq.log2(qq.length)].push(qq);
-       else {
-         if ("[object ArrayBuffer]" !== Object.prototype.toString.call(qq) && (qq = qq.buffer), !qq) return;
-         var Eq = qq.length || qq.byteLength,
-           gq = 0 | Yq.log2(Eq);
-         Aq[gq].push(qq)
+       const zC = null !== MC && MC.key === WC(CC.pos) ? MC.type : null;
+       if (null === zC) return CC;
+       let ZC = null;
+       if ("Iron" === zC) {
+         const {
+           cachedPasskey: zC,
+           ...QC
+         } = PC(CC.pos);
+         ZC = {
+           zn: null !== zC && void 0 !== zC ? zC : [0, 0, 0, 0],
+           ...QC
+         }
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L95-L128` → after: `L81-L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L81-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/223.js#L81-L84) · [Before (L95-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/223.js#L95-L128)

```diff
-     }, Eq.freeUint8 = Eq.freeUint16 = Eq.freeUint32 = Eq.freeInt8 = Eq.freeInt16 = Eq.freeInt32 = Eq.freeFloat32 = Eq.freeFloat = Eq.freeFloat64 = Eq.freeDouble = Eq.freeUint8Clamped = Eq.freeDataView = function(qq) {
-       uq(qq.buffer)
-     }, Eq.freeArrayBuffer = uq, Eq.freeBuffer = function(qq) {
-       cq[Yq.log2(qq.length)].push(qq)
-     }, Eq.malloc = function(qq, Eq) {
-       if (void 0 === Eq || "arraybuffer" === Eq) return Bq(qq);
-       switch (Eq) {
-         case "uint8":
-           return Wq(qq);
-         case "uint16":
-           return Nq(qq);
-         case "uint32":
-           return aq(qq);
-         case "int8":
-           return Vq(qq);
-         case "int16":
- ... (18 more removed lines; see GitHub link above)
+       return {
+         ...CC,
+         type: zC,
+         ironChest: ZC
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L134-L135` → after: `L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/223.js#L87) · [Before (L134-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/223.js#L134-L135)

```diff
-   },
-   38267: (qq, Eq) => {
+ 
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L137-L172` → after: `L89-L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L89-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/223.js#L89-L189) · [Before (L137-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/223.js#L137-L172)

```diff
-       var Eq = 32;
-       return (qq &= -qq) && Eq--, 65535 & qq && (Eq -= 16), 16711935 & qq && (Eq -= 8), 252645135 & qq && (Eq -= 4), 858993459 & qq && (Eq -= 2), 1431655765 & qq && (Eq -= 1), Eq
-     }
-     Eq.INT_BITS = 32, Eq.INT_MAX = 2147483647, Eq.INT_MIN = -1 << 31, Eq.sign = function(qq) {
-       return (qq > 0) - (qq < 0)
-     }, Eq.abs = function(qq) {
-       var Eq = qq >> 31;
-       return (qq ^ Eq) - Eq
-     }, Eq.min = function(qq, Eq) {
-       return Eq ^ (qq ^ Eq) & -(qq < Eq)
-     }, Eq.max = function(qq, Eq) {
-       return qq ^ (qq ^ Eq) & -(qq < Eq)
-     }, Eq.isPow2 = function(qq) {
-       return !(qq & qq - 1) && !!qq
-     }, Eq.log2 = function(qq) {
-       var Eq, gq;
- ... (20 more removed lines; see GitHub link above)
+       const zC = FC(CC),
+         ZC = null === zC || void 0 === zC ? void 0 : zC.ownerDbId,
+         QC = function(CC) {
+           var zC;
+           let ZC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : FC(CC);
+           const QC = WC(CC),
+             wC = NC.get(QC);
+           return wC ? wC.lastOpened < (null !== (zC = null === ZC || void 0 === ZC ? void 0 : ZC.passkeyLastUpdated) && void 0 !== zC ? zC : 0) ? (NC.delete(QC), null) : [...wC.zn] : null
+         }(CC, zC);
+       return void 0 === ZC ? {
+         cachedPasskey: QC
+       } : {
+         ownerDbId: ZC,
+         cachedPasskey: QC
+       }
+     }(0, qC.l)(nC.e, (CC => {
+ ... (85 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L189-L207` → after: `L192-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L192-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/223.js#L192-L200) · [Before (L189-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/223.js#L189-L207)

```diff
-   38258: (qq, Eq, gq) => {
-     qq.exports = function(qq, Eq, gq) {
-       switch (arguments.length) {
-         case 1:
-           return Yq = [], cq(lq = qq, lq, uq, !0), Yq;
-         case 2:
-           return "function" === typeof Eq ? cq(qq, qq, Eq, !0) : function(qq, Eq) {
-             return Yq = [], cq(qq, Eq, uq, !1), Yq
-           }(qq, Eq);
-         case 3:
-           return cq(qq, Eq, gq, !1);
-         default:
-           throw new Error("box-intersect: Invalid arguments")
-       }
-       var lq
-     };
- ... (3 more removed lines; see GitHub link above)
+   40485: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => oC,
+       g: () => nC,
+       k: () => fC
+     });
+     var QC = ZC(40412),
+       wC = ZC(4711),
+       bC = ZC(40423);
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L209-L212` → after: `L202-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L202-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/223.js#L202-L205) · [Before (L209-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/223.js#L209-L212)

```diff
-     function xq(qq, Eq) {
-       for (var gq = 0; gq < qq; ++gq)
-         if (!(Eq[gq] <= Eq[gq + qq])) return !0;
-       return !1
+     function nC() {
+       var CC;
+       const zC = null === (CC = (0, bC.k)()) || void 0 === CC ? void 0 : CC.api.localId;
+       return void 0 === zC || zC === QC.qd ? null : String(zC)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L215-L221` → after: `L208-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L208-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/223.js#L208-L218) · [Before (L215-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/223.js#L215-L221)

```diff
-     function Aq(qq, Eq, gq, Yq) {
-       for (var lq = 0, Oq = 0, mq = 0, Aq = qq.length; mq < Aq; ++mq) {
-         var cq = qq[mq];
-         if (!xq(Eq, cq)) {
-           for (var uq = 0; uq < 2 * Eq; ++uq) gq[lq++] = cq[uq];
-           Yq[Oq++] = mq
-         }
+     function fC(CC) {
+       const zC = (0, bC.k)();
+       if (null !== zC) return CC(zC);
+       let ZC = null;
+       const QC = (0, wC.p)((() => {
+         const zC = (0, bC.k)();
+         null !== zC && null === ZC && (QC(), ZC = CC(zC))
+       }));
+       return () => {
+         var CC;
+         QC(), null === (CC = ZC) || void 0 === CC || CC()
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L226-L244` → after: `L222-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L222-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/223.js#L222-L235) · [Before (L226-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/223.js#L226-L244)

```diff
-     function cq(qq, Eq, gq, Yq) {
-       var xq = qq.length,
-         cq = Eq.length;
-       if (!(xq <= 0 || cq <= 0)) {
-         var uq = qq[0].length >>> 1;
-         if (!(uq <= 0)) {
-           var Bq, Wq = lq.mallocDouble(2 * uq * xq),
-             Nq = lq.mallocInt32(xq);
-           if ((xq = Aq(qq, uq, Wq, Nq)) > 0) {
-             if (1 === uq && Yq) Oq.init(xq), Bq = Oq.sweepComplete(uq, gq, 0, xq, Wq, Nq, 0, xq, Wq, Nq);
-             else {
-               var aq = lq.mallocDouble(2 * uq * cq),
-                 Vq = lq.mallocInt32(cq);
-               (cq = Aq(Eq, uq, aq, Vq)) > 0 && (Oq.init(xq + cq), Bq = 1 === uq ? Oq.sweepBipartite(uq, gq, 0, xq, Wq, Nq, 0, cq, aq, Vq) : mq(uq, gq, Yq, xq, Wq, Nq, cq, aq, Vq), lq.free(aq), lq.free(Vq))
-             }
-             lq.free(Wq), lq.free(Nq)
- ... (3 more removed lines; see GitHub link above)
+     function oC(CC, zC, ZC) {
+       return {
+         current: () => {
+           const ZC = (0, bC.k)();
+           return null === ZC ? zC : CC(ZC)()
+         },
+         watch: zC => fC((QC => {
+           const wC = CC(QC);
+           let bC = wC();
+           return zC(bC), ZC((() => {
+             const CC = wC();
+             CC !== bC && (bC = CC, zC(CC))
+           }))
+         }))
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L248-L249` → after: `L247-L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L247-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/223.js#L247-L249) · [Before (L248-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/223.js#L248-L249)

```diff
-     function uq(qq, Eq) {
-       Yq.push([qq, Eq])
+     function nC() {
+       var CC, zC;
+       return null !== (CC = null === (zC = (0, QC.k)()) || void 0 === zC ? void 0 : zC.itemBridgeSources) && void 0 !== CC ? CC : bC.b
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L266-L283` → after: `L253-L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L253-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/223.js#L253-L258) · [Before (L266-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/223.js#L266-L283)

```diff
-       var Eq = "bruteForce" + (qq ? "Full" : "Partial"),
-         Yq = [],
-         mq = Wq.slice();
-       qq || mq.splice(3, 0, lq);
-       var xq = ["function " + Eq + "(" + mq.join() + "){"];
- 
-       function Aq(Eq, lq) {
-         var mq = function(qq, Eq, Yq) {
-           var lq = "bruteForce" + (qq ? "Red" : "Blue") + (Eq ? "Flip" : "") + (Yq ? "Full" : ""),
-             mq = ["function ", lq, "(", Wq.join(), "){", "var ", Oq, "=2*", gq, ";"],
-             xq = "for(var i=rs,rp=es*rs;i<re;++i,rp+=es){var x0=rb[ax+rp],x1=rb[ax+rp+d],xi=ri[i];",
-             Aq = "for(var j=bs,bp=es*bs;j<be;++j,bp+=es){var y0=bb[ax+bp]," + (Yq ? "y1=bb[ax+bp+d]," : "") + "yi=bi[j];";
-           return qq ? mq.push(xq, "Q", ":", Aq) : mq.push(Aq, "Q", ":", xq), Yq ? mq.push("if(y1<x0||x1<y0)continue;") : Eq ? mq.push("if(y0<=x0||x1<y0)continue;") : mq.push("if(y0<x0||x1<y0)continue;"), mq.push("for(var k=ax+1;k<d;++k){var r0=rb[k+rp],r1=rb[k+d+rp],b0=bb[k+bp],b … [truncated]
-             name: lq,
-             code: mq.join("")
-           }
- ... (2 more removed lines; see GitHub link above)
+       return {
+         current: () => nC().states[CC].current(),
+         watch: zC => (0, wC.k)((ZC => {
+           const QC = ZC.itemBridgeSources.states[CC];
+           return zC(QC.current()), QC.watch(zC)
+         }))
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L396-L411` → after: `L262-L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L262-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/223.js#L262-L264) · [Before (L396-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/223.js#L396-L411)

```diff
-     function vq(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq, cq, uq) {
-       var Bq = 2 * qq,
-         Wq = Aq * Bq,
-         Nq = cq[Wq + Eq];
-       qq: for (var aq = lq, Vq = lq * Bq; aq < Oq; ++aq, Vq += Bq) {
-         var dq = mq[Vq + Eq],
-           jq = mq[Vq + Eq + qq];
-         if (!(Nq < dq || jq < Nq) && (!Yq || Nq !== dq)) {
-           for (var Hq, oq = xq[aq], Pq = Eq + 1; Pq < qq; ++Pq) {
-             dq = mq[Vq + Pq], jq = mq[Vq + Pq + qq];
-             var Qq = cq[Wq + Pq],
-               yq = cq[Wq + Pq + qq];
-             if (jq < Qq || yq < dq) continue qq
-           }
-           if (void 0 !== (Hq = Yq ? gq(uq, oq) : gq(oq, uq))) return Hq
-         }
+     function oC(CC) {
+       return {
+         watch: zC => (0, wC.k)((ZC => ZC.itemBridgeSources.events[CC].watch(zC)))
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L414-L434` → after: `L267-L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L267-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/223.js#L267-L297) · [Before (L414-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/223.js#L414-L434)

```diff
- 
-     function hq(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq, cq) {
-       var uq = 2 * qq,
-         Bq = xq * uq,
-         Wq = Aq[Bq + Eq];
-       qq: for (var Nq = Yq, aq = Yq * uq; Nq < lq; ++Nq, aq += uq) {
-         var Vq = mq[Nq];
-         if (Vq !== cq) {
-           var dq = Oq[aq + Eq],
-             jq = Oq[aq + Eq + qq];
-           if (!(Wq < dq || jq < Wq)) {
-             for (var Hq = Eq + 1; Hq < qq; ++Hq) {
-               dq = Oq[aq + Hq], jq = Oq[aq + Hq + qq];
-               var oq = Aq[Bq + Hq],
-                 Pq = Aq[Bq + Hq + qq];
-               if (jq < oq || Pq < dq) continue qq
- ... (5 more removed lines; see GitHub link above)
+     const qC = {
+       states: {
+         inventory: fC("inventory"),
+         hotbar: fC("hotbar"),
+         crafting: fC("crafting"),
+         heldItemAim: fC("heldItemAim")
+       },
+       events: {
+         hotbarSlotRequested: oC("hotbarSlotRequested"),
+         hotbarScrolled: oC("hotbarScrolled"),
+         numberKeyPressed: oC("numberKeyPressed"),
+         inventoryDropRequested: oC("inventoryDropRequested"),
+         chestToggled: oC("chestToggled"),
+         chestRefreshed: oC("chestRefreshed"),
+         inventorySynced: oC("inventorySynced"),
+         enchantingTableOpened: oC("enchantingTableOpened")
+ ... (15 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L438-L482` → after: `L301-L305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L301-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/223.js#L301-L305) · [Before (L438-L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/223.js#L438-L482)

```diff
-   38317: (qq, Eq, gq) => {
-     qq.exports = function(qq, Eq, gq, mq, xq, Aq) {
-       if (mq <= gq + 1) return gq;
-       var cq = gq,
-         uq = mq,
-         Bq = mq + gq >>> 1,
-         Wq = 2 * qq,
-         Nq = Bq,
-         aq = xq[Wq * Bq + Eq];
-       for (; cq < uq;) {
-         if (uq - cq < lq) {
-           Oq(qq, Eq, cq, uq, xq, Aq), aq = xq[Wq * Bq + Eq];
-           break
-         }
-         var Vq = uq - cq,
-           dq = Math.random() * Vq + cq | 0,
- ... (29 more removed lines; see GitHub link above)
+   40493: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       b: () => fC
+     });
+     var QC = ZC(39457);
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L484-L489` → after: `L307-L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L307-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/223.js#L307-L446) · [Before (L484-L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/223.js#L484-L489)

```diff
-     function Oq(qq, Eq, gq, Yq, lq, Oq) {
-       for (var mq = 2 * qq, xq = mq * (gq + 1) + Eq, Aq = gq + 1; Aq < Yq; ++Aq, xq += mq)
-         for (var cq = lq[xq], uq = Aq, Bq = mq * (Aq - 1); uq > gq && lq[Bq + Eq] > cq; --uq, Bq -= mq) {
-           for (var Wq = Bq, Nq = Bq + mq, aq = 0; aq < mq; ++aq, ++Wq, ++Nq) {
-             var Vq = lq[Wq];
-             lq[Wq] = lq[Nq], lq[Nq] = Vq
+     function wC(CC) {
+       return {
+         current: () => CC,
+         watch: () => () => {}
+       }
+     }
+ 
+     function bC() {}
+     const nC = Object.freeze([0, 0, 0]),
+       fC = {
+         states: {
+           health: wC({
+             health: null,
+             maxHealth: null,
+             shield: null,
+             maxShield: null
+ ... (124 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L491-L519` → after: `L448-L544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L448-L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/223.js#L448-L544) · [Before (L491-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/223.js#L491-L519)

```diff
-           var dq = Oq[uq];
-           Oq[uq] = Oq[uq - 1], Oq[uq - 1] = dq
-         }
-     }
-   },
-   38319: qq => {
-     qq.exports = function(qq, gq) {
-       var Yq = "abcdef".split("").concat(gq),
-         lq = [];
-       qq.indexOf("lo") >= 0 && lq.push("lo=e[k+n]");
-       qq.indexOf("hi") >= 0 && lq.push("hi=e[k+o]");
-       return Yq.push(Eq.replace("_", lq.join()).replace("$", qq)), Function.apply(void 0, Yq)
-     };
-     var Eq = "for(var j=2*a,k=j*c,l=k,m=c,n=b,o=a+b,p=c;d>p;++p,k+=j){var _;if($)if(m===p)m+=1,l+=j;else{for(var s=0;j>s;++s){var t=e[k+s];e[k+s]=e[l],e[l++]=t}var u=f[p];f[p]=f[m],f[m++]=u}}return m"
-   },
-   38293: qq => {
- ... (13 more removed lines; see GitHub link above)
+         },
+         commands: {
+           selectHotbarSlot: bC,
+           removeInventoryItem: () => !1,
+           swapInventorySlots: () => !1,
+           moveInventoryItem: () => !1,
+           quickMoveInventoryItem: () => null,
+           closeChest: bC,
+           setInventoryOpen: bC,
+           changeIronChestPasskey: bC,
+           dragReplayCamera: bC,
+           applyTemporaryThirdPerson: bC,
+           holdEmoteWheel: bC,
+           recordFlyingMiddleText: bC,
+           focusCrafting: bC,
+           craftRecipe: () => ({
+ ... (81 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L523-L541` → after: `L547-L569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L547-L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/223.js#L547-L569) · [Before (L523-L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/223.js#L523-L541)

```diff
-     }
- 
-     function Yq(qq, Eq, gq) {
-       Eq *= 2;
-       var Yq = gq[qq *= 2],
-         lq = gq[qq + 1];
-       gq[qq] = gq[Eq], gq[qq + 1] = gq[Eq + 1], gq[Eq] = Yq, gq[Eq + 1] = lq
-     }
- 
-     function lq(qq, Eq, gq) {
-       Eq *= 2, gq[qq *= 2] = gq[Eq], gq[qq + 1] = gq[Eq + 1]
-     }
- 
-     function Oq(qq, Eq, gq, Yq) {
-       Eq *= 2, gq *= 2;
-       var lq = Yq[qq *= 2],
- ... (3 more removed lines; see GitHub link above)
+   },
+   40417: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => vC,
+       h: () => iC,
+       j: () => eC,
+       m: () => IC,
+       q: () => xC
+     });
+     var QC = ZC(39076),
+       wC = ZC(1169),
+       bC = ZC(1865),
+       nC = ZC(1872),
+       fC = ZC(3276),
+       oC = ZC(36685),
+       qC = ZC(1275),
+ ... (7 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L543-L544` → after: `L571-L581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L571-L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/223.js#L571-L581) · [Before (L543-L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/223.js#L543-L544)

```diff
-     function mq(qq, Eq, gq, Yq, lq) {
-       Eq *= 2, lq[qq *= 2] = lq[Eq], lq[Eq] = gq, lq[qq + 1] = lq[Eq + 1], lq[Eq + 1] = Yq
+     function PC(CC) {
+       const zC = new Map,
+         ZC = ZC => {
+           if ("string" !== typeof ZC) return;
+           let QC = zC.get(ZC);
+           return void 0 === QC && (QC = CC(ZC), void 0 !== QC && zC.set(ZC, QC)), QC
+         };
+       return new Proxy({}, {
+         get: (CC, zC) => ZC(zC),
+         has: (CC, zC) => void 0 !== ZC(zC)
+       })
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L547-L551` → after: `L584-L586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L584-L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/223.js#L584-L586) · [Before (L547-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/223.js#L547-L551)

```diff
-     function xq(qq, Eq, gq) {
-       Eq *= 2;
-       var Yq = gq[qq *= 2],
-         lq = gq[Eq];
-       return !(Yq < lq) && (Yq !== lq || gq[qq + 1] > gq[Eq + 1])
+     function GC(CC) {
+       const zC = (0, fC.b)(CC);
+       return void 0 !== zC && (0, fC.c)(zC) === CC
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L554-L557` → after: `L589-L607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L589-L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/223.js#L589-L607) · [Before (L554-L557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/223.js#L554-L557)

```diff
-     function Aq(qq, Eq, gq, Yq) {
-       var lq = Yq[qq *= 2];
-       return lq < Eq || lq === Eq && Yq[qq + 1] < gq
-     }
+     function RC(CC) {
+       var zC;
+       const ZC = null === (zC = (0, FC.k)()) || void 0 === zC ? void 0 : zC.tables;
+       if (void 0 === ZC || !GC(CC)) return;
+       const QC = {
+           displayName: ZC.getDisplayName(CC)
+         },
+         wC = ZC.getItemStat(CC, "description");
+       void 0 !== wC && null !== wC && (QC.description = wC);
+       const {
+         rootName: bC
+       } = ZC.getMetaInfo(CC);
+       bC !== CC && (QC.rootName = bC);
+       const nC = ZC.getItemStat(CC, "armourReduction");
+       return void 0 !== nC && null !== nC && (QC.armourReduction = nC), QC
+     }(0, FC.y)((CC => {
+ ... (3 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L559-L673` → after: `L609-L624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L609-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/223.js#L609-L624) · [Before (L559-L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/223.js#L559-L673)

```diff
-     function cq(qq, uq, Bq) {
-       var Wq = (uq - qq + 1) / 6 | 0,
-         Nq = qq + Wq,
-         aq = uq - Wq,
-         Vq = qq + uq >> 1,
-         dq = Vq - Wq,
-         jq = Vq + Wq,
-         Hq = Nq,
-         oq = dq,
-         Pq = Vq,
-         Qq = jq,
-         yq = aq,
-         tq = qq + 1,
-         rq = uq - 1,
-         vq = 0;
-       xq(Hq, oq, Bq) && (vq = Hq, Hq = oq, oq = vq), xq(Qq, yq, Bq) && (vq = Qq, Qq = yq, yq = vq), xq(Hq, Pq, Bq) && (vq = Hq, Hq = Pq, Pq = vq), xq(oq, Pq, Bq) && (vq = oq, oq = Pq, Pq = vq), xq(Hq, Qq, Bq) && (vq = Hq, Hq = Qq, Qq = vq), xq(Pq, Qq, Bq) && (vq = Pq, Pq = Qq, Qq … [truncated]
- ... (99 more removed lines; see GitHub link above)
+     function xC() {
+       return Boolean(bC.e.get("useInventory") && bC.e.get("useFullInventory"))
+     }
+     let JC = null;
+     const IC = {
+         inventory: function() {
+           const CC = SC.e.states.inventory;
+           let zC = null;
+           const ZC = CC => {
+             var ZC;
+             return null === CC.chest ? CC : ((null === (ZC = zC) || void 0 === ZC ? void 0 : ZC.from) === CC && zC.chestVersion === (0, gC.e)() || (zC = {
+               from: CC,
+               chestVersion: (0, gC.e)(),
+               view: {
+                 ...CC,
+                 chest: (0, gC.m)(CC.chest)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L675-L678` → after: `L626-L632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L626-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/223.js#L626-L632) · [Before (L675-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/223.js#L675-L678)

```diff
-             0 === Tq ? dq(Aq, cq, iq++, zq) : 1 === Tq ? dq(uq, Bq, Zq++, zq) : 2 === Tq && dq(Wq, Nq, fq++, zq)
-           } else {
-             zq = (Mq >> 1) - 1;
-             0 === Tq ? Vq(Aq, cq, iq--, zq) : 1 === Tq ? Vq(uq, Bq, Zq--, zq) : 2 === Tq && Vq(Wq, Nq, fq--, zq)
+             }), zC.view)
+           };
+           return {
+             current: () => ZC(CC.current()),
+             watch: zC => CC.watch((CC => {
+               zC(ZC(CC))
+             }))
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L680-L721` → after: `L634-L646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L634-L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/223.js#L634-L646) · [Before (L680-L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/223.js#L680-L721)

```diff
-         }
-       },
-       scanBipartite: function(qq, Eq, gq, Yq, lq, xq, uq, Bq, Wq, Nq, jq, Hq) {
-         var oq = 0,
-           Pq = 2 * qq,
-           Qq = Eq,
-           yq = Eq + qq,
-           tq = 1,
-           rq = 1;
-         Yq ? rq = mq : tq = mq;
-         for (var vq = lq; vq < xq; ++vq) {
-           var hq = vq + tq,
-             nq = Pq * vq;
-           aq[oq++] = uq[nq + Qq], aq[oq++] = -hq, aq[oq++] = uq[nq + yq], aq[oq++] = hq
-         }
-         for (vq = Wq; vq < Nq; ++vq) {
- ... (26 more removed lines; see GitHub link above)
+         }(),
+         crafting: SC.e.states.crafting,
+         stationItems: {
+           current() {
+             var CC;
+             return (null === (CC = JC) || void 0 === CC ? void 0 : CC.namesVersion) !== (0, fC.d)() && (JC = {
+               namesVersion: (0, fC.d)(),
+               items: {
+                 enchantable: PC((CC => {
+                   const zC = (0, fC.b)(CC);
+                   return void 0 !== zC && null !== pC && pC.enchantmentPerksOf(zC).length > 0 || void 0
+                 })),
+                 salvageable: PC((CC => !(!GC(CC) || null === (0, oC.d)(CC)) || void 0))
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L723-L768` → after: `L648-L665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L648-L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/223.js#L648-L665) · [Before (L723-L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/223.js#L723-L768)

```diff
-             }
-           } else Vq(Aq, cq, Zq--, fq - tq)
-         }
-       },
-       scanComplete: function(qq, Eq, gq, Yq, lq, xq, cq, uq, Bq, Wq, Nq) {
-         for (var Vq = 0, dq = 2 * qq, jq = Eq, Hq = Eq + qq, oq = Yq; oq < lq; ++oq) {
-           var Pq = oq + mq,
-             Qq = dq * oq;
-           aq[Vq++] = xq[Qq + jq], aq[Vq++] = -Pq, aq[Vq++] = xq[Qq + Hq], aq[Vq++] = Pq
-         }
-         for (oq = uq; oq < Bq; ++oq) {
-           Pq = oq + 1;
-           var yq = dq * oq;
-           aq[Vq++] = Wq[yq + jq], aq[Vq++] = -Pq
-         }
-         var tq = Vq >>> 1;
- ... (30 more removed lines; see GitHub link above)
+             }), JC.items
+           },
+           watch: () => () => {}
+         },
+         itemInfo: function() {
+           let CC = null;
+           const zC = () => {
+             var zC;
+             return (null === (zC = CC) || void 0 === zC ? void 0 : zC.namesVersion) !== (0, fC.d)() && (CC = {
+               namesVersion: (0, fC.d)(),
+               infos: PC(RC)
+             }), CC.infos
+           };
+           return {
+             current: zC,
+             watch: ZC => (0, nC.p)((QC => {
+ ... (2 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L770-L864` → after: `L667-L675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L667-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/223.js#L667-L675) · [Before (L770-L864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/223.js#L770-L864)

```diff
-         }
-       }
-     };
-     var Yq = gq(38264),
-       lq = gq(38267),
-       Oq = gq(38293),
-       mq = 1 << 28,
-       xq = 1024,
-       Aq = Yq.mallocInt32(xq),
-       cq = Yq.mallocInt32(xq),
-       uq = Yq.mallocInt32(xq),
-       Bq = Yq.mallocInt32(xq),
-       Wq = Yq.mallocInt32(xq),
-       Nq = Yq.mallocInt32(xq),
-       aq = Yq.mallocDouble(8192);
- 
- ... (79 more removed lines; see GitHub link above)
+         }(),
+         creativeVisibility: (0, nC.l)((function() {
+           const CC = {};
+           for (const wC of null !== (zC = null === (ZC = pC) || void 0 === ZC ? void 0 : ZC.creativeItemIds()) && void 0 !== zC ? zC : []) {
+             var zC, ZC, nC, oC;
+             const qC = (0, fC.c)(wC);
+             if (void 0 === qC) continue;
+             const FC = null !== (nC = bC.e.get((0, QC.d)(qC, "showInCreativeInven"))) && void 0 !== nC ? nC : null === (oC = pC) || void 0 === oC ? void 0 : oC.showInCreativeInvenOf(wC);
+             "boolean" === typeof FC && (CC[qC] = FC)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L866-L869` → after: `L677-L679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L677-L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/223.js#L677-L679) · [Before (L866-L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/223.js#L866-L869)

```diff
-           qq.length = 0
-         }(xq.multiComps), xq.removals.length && function(qq) {
-           for (var Eq = 0; Eq < qq.length; Eq++) {
-             qq[Eq].flush()
+           return {
+             publicLobby: (0, wC.U)((0, qC.d)().lobbyName),
+             shownInGame: CC
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L871-L971` → after: `L681-L724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L681-L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/223.js#L681-L724) · [Before (L871-L971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/223.js#L871-L971)

```diff
-           qq.length = 0
-         }(xq.removals)
-       }
-       this.qV = lq, this._systems = Oq, this._renderSystems = mq, this.eC = function(Eq) {
-         var Yq = gq++;
-         return Array.isArray(Eq) && Eq.forEach((Eq => qq.zk(Yq, Eq))), Yq
-       }, this.deleteEntity = function(Eq) {
-         return Object.keys(lq).forEach((qq => {
-           lq[qq].hash[Eq] && Aq(Eq, qq)
-         })), qq
-       }, this.ugq = function(qq) {
-         if (!qq) throw new Error("Missing component definition");
-         var gq = qq.name;
-         if (!gq) throw new Error("Component definition must have a name property.");
-         if ("string" !== typeof gq) throw new Error("Component name must be a string.");
-         if ("" === gq) throw new Error("Component name must be a non-empty string.");
- ... (85 more removed lines; see GitHub link above)
+         }), ["connectedGameChanged"], (0, nC.i)("ShowInCreativeInven")),
+         fullInventory: (0, nC.l)(xC, [], (0, nC.j)("useInventory", "useFullInventory"))
+       },
+       iC = {
+         inventoryDropRequested: SC.e.events.inventoryDropRequested,
+         chestToggled: SC.e.events.chestToggled,
+         chestRefreshed: SC.e.events.chestRefreshed,
+         inventorySynced: SC.e.events.inventorySynced,
+         enchantingTableOpened: SC.e.events.enchantingTableOpened
+       },
+       vC = {
+         removeInventoryItem: SC.e.commands.removeInventoryItem,
+         swapInventorySlots: SC.e.commands.swapInventorySlots,
+         moveInventoryItem: SC.e.commands.moveInventoryItem,
+         quickMoveInventoryItem: SC.e.commands.quickMoveInventoryItem,
+         closeChest: SC.e.commands.closeChest,
+ ... (28 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L973-L988` → after: `L726-L728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L726-L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/223.js#L726-L728) · [Before (L973-L988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/223.js#L973-L988)

```diff
-         return qq
-       }, this.removeMultiComponent = function(gq, Yq, Oq) {
-         var mq = Eq[Yq],
-           Aq = lq[Yq];
-         if (!Aq) throw new Error(`Unknown component: ${Yq}.`);
-         if (!mq.multi) throw new Error("removeMultiComponent called on non-multi component");
-         return function(qq, Eq, gq, Yq) {
-           var lq = gq.hash[qq];
-           if (lq) {
-             var Oq = lq[Yq];
-             Oq && (lq[Yq] = null, Eq.OJ && Eq.OJ(qq, Oq), xq.multiComps.push({
-               entID: qq,
-               data: gq
-             }), cq())
-           }
-         }(gq, mq, Aq, Oq), qq
+       },
+       eC = {
+         enchantingOffer: SC.e.queries.enchantingOffer
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L993-L1004` → after: `L731-L740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L731-L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/223.js#L731-L740) · [Before (L993-L1004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/223.js#L993-L1004)

```diff
-   38231: qq => {
-     function Eq(qq, Eq) {
-       var gq = qq._map[Eq];
-       if (delete qq.hash[Eq], delete qq._map[Eq], gq === qq.list.length - 1) qq.list.pop(), qq._idList.pop();
-       else {
-         var Yq = qq.list.pop();
-         qq.list[gq] = Yq;
-         var lq = qq._idList.pop();
-         qq._idList[gq] = lq, qq._map[lq] = gq
-       }
-     }
-     qq.exports = class {
+   40476: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       b: () => QC,
+       d: () => FC,
+       e: () => nC,
+       h: () => wC,
+       k: () => fC,
+       m: () => qC
+     });
+     class QC extends Error {
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L1006-L1026` → after: `L742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/223.js#L742) · [Before (L1006-L1026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/223.js#L1006-L1026)

```diff
-         this.list = [], this.hash = {}, this._map = {}, this._idList = [], this._pendingRemovals = []
-       }
-       add(qq, Eq) {
-         if ("number" === typeof this._map[qq]) {
-           var gq = this._map[qq];
-           this.hash[qq] = Eq, this.list[gq] = Eq, this._idList[gq] = qq
-         } else this._map[qq] = this.list.length, this.hash[qq] = Eq, this.list.push(Eq), this._idList.push(qq)
-       }
-       remove(qq) {
-         var Eq = this._map[qq];
-         this.hash[qq] = null, this.list[Eq] = null, this._pendingRemovals.push(qq)
-       }
-       dispose() {
-         this.list = null, this.hash = null, this._map = null, this._idList = null, this._pendingRemovals.length = 0
-       }
-       flush() {
- ... (5 more removed lines; see GitHub link above)
+         super(...arguments), this.name = "CoreCorruption"
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L1087-L1091` → after: `L747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/223.js#L747) · [Before (L1087-L1091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/223.js#L1087-L1091)

```diff
-       var Eq = !1;
-       if (null != qq && "function" != typeof qq.toString) try {
-         Eq = !!(qq + "")
-       } catch (gq) {}
-       return Eq
+       return CC instanceof RangeError && /call stack/i.test(CC.message) || CC instanceof Error && "InternalError" === CC.name && /recursion/i.test(CC.message)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L1095-L1099` → after: `L752-L753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L752-L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/223.js#L752-L753) · [Before (L1095-L1099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/223.js#L1095-L1099)

```diff
-       var Eq = -1,
-         gq = Array(qq.size);
-       return qq.forEach((function(qq, Yq) {
-         gq[++Eq] = [Yq, qq]
-       })), gq
+       var zC;
+       return CC instanceof WebAssembly.RuntimeError || CC instanceof QC || wC(CC) && bC.test(null !== (zC = CC.stack) && void 0 !== zC ? zC : "")
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L1103-L1105` → after: `L757-L758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L757-L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/223.js#L757-L758) · [Before (L1103-L1105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/223.js#L1103-L1105)

```diff
-       return function(gq) {
-         return qq(Eq(gq))
-       }
+       if (nC(CC)) throw CC;
+       console.error(zC, CC)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L1108-L1113` → after: `L761-L762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L761-L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/223.js#L761-L762) · [Before (L1108-L1113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/223.js#L1108-L1113)

```diff
-     function wq(qq) {
-       var Eq = -1,
-         gq = Array(qq.size);
-       return qq.forEach((function(qq) {
-         gq[++Eq] = qq
-       })), gq
+     function oC(CC, zC, ZC, wC, bC) {
+       if (zC % wC !== 0 || zC + ZC > CC.byteLength) throw new QC(`${bC}: ${ZC} bytes at ${zC}, ${wC}-aligned, outside ${CC.byteLength} bytes of memory`)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L1151-L1157` → after: `L765-L766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L765-L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/223.js#L765-L766) · [Before (L1151-L1157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/223.js#L1151-L1157)

```diff
-     function nE(qq) {
-       var Eq = -1,
-         gq = qq ? qq.length : 0;
-       for (this.clear(); ++Eq < gq;) {
-         var Yq = qq[Eq];
-         this.set(Yq[0], Yq[1])
-       }
+     function qC(CC, zC, ZC, QC, wC) {
+       return 0 === ZC ? null : (oC(zC, ZC, QC * CC.BYTES_PER_ELEMENT, CC.BYTES_PER_ELEMENT, wC), new CC(zC, ZC, QC))
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L1160-L1166` → after: `L769-L770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L769-L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/223.js#L769-L770) · [Before (L1160-L1166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/223.js#L1160-L1166)

```diff
-     function bE(qq) {
-       var Eq = -1,
-         gq = qq ? qq.length : 0;
-       for (this.clear(); ++Eq < gq;) {
-         var Yq = qq[Eq];
-         this.set(Yq[0], Yq[1])
-       }
+     function FC(CC, zC, ZC, QC, wC) {
+       return 0 === zC ? null : (oC(CC, zC, ZC, QC, wC), new DataView(CC, zC, ZC))
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L1168-L1174` → after: `L772-L789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L772-L789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/223.js#L772-L789) · [Before (L1168-L1174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/223.js#L1168-L1174)

```diff
- 
-     function iE(qq) {
-       var Eq = -1,
-         gq = qq ? qq.length : 0;
-       for (this.clear(); ++Eq < gq;) {
-         var Yq = qq[Eq];
-         this.set(Yq[0], Yq[1])
+   },
+   40423: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       B: () => gC,
+       c: () => QC,
+       g: () => PC,
+       k: () => SC,
+       l: () => pC,
+       n: () => NC,
+       r: () => MC,
+       u: () => FC,
+       y: () => WC
+     });
+     class QC extends Error {
+       constructor(CC) {
+         super(`the join's code did not load: ${CC instanceof Error?CC.message:String(CC)}`, {
+ ... (2 more added lines; see GitHub link above)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L1177-L1202` → after: `L792-L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L792-L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/223.js#L792-L796) · [Before (L1177-L1202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/223.js#L1177-L1202)

```diff
- 
-     function ZE(qq) {
-       this.__data__ = new bE(qq)
-     }
- 
-     function fE(qq, Eq) {
-       var gq = wE(qq) || function(qq) {
-           return function(qq) {
-             return function(qq) {
-               return !!qq && "object" == typeof qq
-             }(qq) && KE(qq)
-           }(qq) && EE.call(qq, "callee") && (!cE.call(qq, "callee") || gE.call(qq) == Oq)
-         }(qq) ? function(qq, Eq) {
-           for (var gq = -1, Yq = Array(qq); ++gq < qq;) Yq[gq] = Eq(gq);
-           return Yq
-         }(qq.length, String) : [],
- ... (10 more removed lines; see GitHub link above)
+     let wC = null,
+       bC = null,
+       nC = null;
+     const fC = [];
+     let oC = null;
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L1205-L1297` → after: `L799-L802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L799-L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/223.js#L799-L802) · [Before (L1205-L1297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/223.js#L1205-L1297)

```diff
-       for (var gq = qq.length; gq--;)
-         if (XE(qq[gq][0], Eq)) return gq;
-       return -1
-     }
- 
-     function zE(qq, Eq, gq, Yq, lq, Nq, Hq) {
-       var fq;
-       if (Yq && (fq = Nq ? Yq(qq, lq, Nq, Hq) : Yq(qq)), void 0 !== fq) return fq;
-       if (!eE(qq)) return qq;
-       var Mq = wE(qq);
-       if (Mq) {
-         if (fq = function(qq) {
-             var Eq = qq.length,
-               gq = qq.constructor(Eq);
-             Eq && "string" == typeof qq[0] && EE.call(qq, "index") && (gq.index = qq.index, gq.input = qq.input);
-             return gq
- ... (77 more removed lines; see GitHub link above)
+       try {
+         CC(zC)
+       } catch (ZC) {
+         console.error("[bloxd-wasm-client] the game chunk's listener failed", ZC)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L1318-L1334` → after: `L806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/223.js#L806) · [Before (L1318-L1334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/223.js#L1318-L1334)

```diff
-     function SE(qq) {
-       return !(!eE(qq) || (Eq = qq, Dq && Dq in Eq)) && (IE(qq) || Fq(qq) ? YE : fq).test(sE(qq));
-       var Eq
-     }
- 
-     function pE(qq) {
-       var Eq = new qq.constructor(qq.byteLength);
-       return new mE(Eq).set(new mE(qq)), Eq
-     }
- 
-     function GE(qq, Eq, gq, Yq) {
-       gq || (gq = {});
-       for (var lq = -1, Oq = Eq.length; ++lq < Oq;) {
-         var mq = Eq[lq],
-           xq = Yq ? Yq(gq[mq], qq[mq], mq, gq, qq) : void 0;
-         ME(gq, mq, void 0 === xq ? qq[mq] : xq)
- ... (1 more removed lines; see GitHub link above)
+     function FC() {
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L1427-L1428` → after: `L811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/223.js#L811) · [Before (L1427-L1428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/223.js#L1427-L1428)

```diff
-       var Eq = qq && qq.constructor;
-       return qq === ("function" == typeof Eq && Eq.prototype || Iq)
+       fC.push(CC), null !== oC && qC(CC, oC)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L1432-L1440` → after: `L815-L821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L815-L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/223.js#L815-L821) · [Before (L1432-L1440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/223.js#L1432-L1440)

```diff
-       if (null != qq) {
-         try {
-           return qE.call(qq)
-         } catch (Eq) {}
-         try {
-           return qq + ""
-         } catch (Eq) {}
-       }
-       return ""
+       return wC ??= Promise.all([ZC.e(72), ZC.e(96), ZC.e(221), ZC.e(77), ZC.e(222), ZC.e(198), ZC.e(95), ZC.e(240), ZC.e(269), ZC.e(197), ZC.e(210), ZC.e(189), ZC.e(196), ZC.e(191), ZC.e(142), ZC.e(87), ZC.e(121), ZC.e(247), ZC.e(56)]).then((() => ZC(42374))).then((zC => {
+         zC.loadAudio(CC), oC = zC;
+         for (const CC of fC) qC(CC, zC);
+         return zC
+       })).catch((CC => {
+         throw wC = null, CC
+       })), wC
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L1442-L1459` → after: `L823-L828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L823-L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/223.js#L823-L828) · [Before (L1442-L1459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/223.js#L1442-L1459)

```diff
- 
-     function XE(qq, Eq) {
-       return qq === Eq || qq !== qq && Eq !== Eq
-     }(aE && RE(new aE(new ArrayBuffer(1))) != Pq || VE && RE(new VE) != uq || dE && RE(dE.resolve()) != Nq || jE && RE(new jE) != Vq || HE && RE(new HE) != Hq) && (RE = function(qq) {
-       var Eq = gE.call(qq),
-         gq = Eq == Wq ? qq.constructor : void 0,
-         Yq = gq ? sE(gq) : void 0;
-       if (Yq) switch (Yq) {
-         case PE:
-           return Pq;
-         case QE:
-           return uq;
-         case yE:
-           return Nq;
-         case tE:
-           return Vq;
- ... (2 more removed lines; see GitHub link above)
+     async function MC(CC, zC) {
+       try {
+         const ZC = await NC(CC);
+         await ZC.loadClientGame(zC)
+       } catch (ZC) {
+         throw new QC(ZC)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L1484-L1506` → after: `L832-L835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L832-L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/223.js#L832-L835) · [Before (L1484-L1506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/223.js#L1484-L1506)

```diff
-     function DE(qq) {
-       return KE(qq) ? fE(qq) : function(qq) {
-         if (!FE(qq)) return NE(qq);
-         var Eq = [];
-         for (var gq in Object(qq)) EE.call(qq, gq) && "constructor" != gq && Eq.push(gq);
-         return Eq
-       }(qq)
-     }
-     qq.exports = function(qq) {
-       return zE(qq, !0, !0)
-     }
-   },
-   38434: qq => {
-     function Eq(qq, Eq, gq) {
-       for (var Yq = qq.length, lq = -1 / 0, Oq = 1 / 0, mq = 0; mq < Yq; mq++) {
-         var xq = (gq[0][mq] - qq[mq]) / Eq[mq],
- ... (7 more removed lines; see GitHub link above)
+     function gC(CC, zC) {
+       bC = {
+         running: CC,
+         shell: zC
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L1523-L1527` → after: `L839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/223.js#L839) · [Before (L1523-L1527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/223.js#L1523-L1527)

```diff
-     function lq(qq) {
-       for (var Eq, gq, lq = 0, Oq = qq.length, mq = 0; mq < qq.length;) {
-         for (Eq = qq[mq], gq = 0; mq < Oq && qq[mq] === Eq;) ++mq, ++gq;
-         lq += Yq.log2(gq) / 7 | 0, lq += Yq.log2(Eq >>> 0) / 7 | 0, lq += 2
-       }
+     function SC() {
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L1530-L1549` → after: `L842-L850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L842-L850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/223.js#L842-L850) · [Before (L1530-L1549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/223.js#L1530-L1549)

```diff
-     Eq.size = lq, Eq.encode = function(qq, Eq) {
-       Eq || (Eq = new Uint8Array(lq(qq)));
-       for (var gq, Yq, Oq = 0, mq = Eq.length, xq = 0; xq < qq.length;) {
-         for (gq = qq[xq], Yq = 0; xq < qq.length && qq[xq] === gq;) ++xq, ++Yq;
-         for (; Oq < mq && Yq >= 128;) Eq[Oq++] = 128 + (127 & Yq), Yq >>>= 7;
-         if (Oq >= mq) throw new Error("RLE buffer overflow");
-         for (Eq[Oq++] = Yq, gq >>>= 0; Oq < mq && gq >= 128;) Eq[Oq++] = 128 + (127 & gq), gq >>>= 7;
-         if (Oq >= mq) throw new Error("RLE buffer overflow");
-         Eq[Oq++] = gq
-       }
-       return Eq
-     }, Eq.decode = function(qq, Eq) {
-       for (var gq, Yq, lq, Oq, mq = Eq.length, xq = qq.length, Aq = 0, cq = 0; cq < xq;) {
-         for (gq = 0, Yq = 0; cq < xq && qq[cq] >= 128;) gq += (127 & qq[cq++]) << Yq, Yq += 7;
-         if (gq += qq[cq++] << Yq, cq >= xq) throw new Error("RLE buffer underrun");
-         if (Aq + gq > mq) throw new Error("Chunk buffer overflow");
- ... (4 more removed lines; see GitHub link above)
+     async function pC(CC) {
+       const zC = bC;
+       if ((null === zC || void 0 === zC ? void 0 : zC.running) !== CC) throw new Error("the core's session has ended");
+       const ZC = await NC(zC.shell.audio).catch((CC => {
+         throw new QC(CC)
+       }));
+       if (null !== nC) return nC;
+       if (bC !== zC || CC.isStopped) throw new Error("the core stopped while the game code loaded");
+       if (nC = ZC.startGameHost(CC, zC.shell), null === nC) throw new Error("the core's shared tables didn't read, so the game can't start");
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L1552-L1777` → after: `L853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/223.js#L853) · [Before (L1552-L1777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/223.js#L1552-L1777)

```diff
-   },
-   37734: (qq, Eq) => {
-     function gq(qq) {
-       var Eq = 32;
-       return (qq &= -qq) && Eq--, 65535 & qq && (Eq -= 16), 16711935 & qq && (Eq -= 8), 252645135 & qq && (Eq -= 4), 858993459 & qq && (Eq -= 2), 1431655765 & qq && (Eq -= 1), Eq
-     }
-     Eq.INT_BITS = 32, Eq.INT_MAX = 2147483647, Eq.INT_MIN = -1 << 31, Eq.sign = function(qq) {
-       return (qq > 0) - (qq < 0)
-     }, Eq.abs = function(qq) {
-       var Eq = qq >> 31;
-       return (qq ^ Eq) - Eq
-     }, Eq.min = function(qq, Eq) {
-       return Eq ^ (qq ^ Eq) & -(qq < Eq)
-     }, Eq.max = function(qq, Eq) {
-       return qq ^ (qq ^ Eq) & -(qq < Eq)
-     }, Eq.isPow2 = function(qq) {
- ... (210 more removed lines; see GitHub link above)
+ 
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L1779-L1782` → after: `L855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/223.js#L855) · [Before (L1779-L1782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/223.js#L1779-L1782)

```diff
-       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (qq => {
-         const Eq = 16 * Math.random() | 0;
-         return ("x" === qq ? Eq : 3 & Eq | 8).toString(16)
-       }))
+       null !== nC && (null !== oC ? oC.endGameHost(nC) : nC.closeGame()), nC = null, bC = null
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/224.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/224.js` (38 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd)

#### 1. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/224.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/224.js#L2)

```diff
- export const ids = [224, 230, 233];
+ export const ids = [224];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/224.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/224.js#L4)

```diff
-   39980: (qq, Eq, gq) => {
+   36792: (CC, zC, ZC) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L6-L105` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/224.js#L6) · [Before (L6-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/224.js#L6-L105)

```diff
-       d: () => mq,
-       f: () => xq
-     });
-     var Yq = gq(38653),
-       lq = gq(39779),
-       Oq = gq(39951),
-       mq = {};
-     class xq {
-       constructor(qq) {
-         this.attachedToElement = !1, this.attached = {}, this.camera = qq, this.checkInputs = () => {}
-       }
-       add(qq) {
-         const Eq = qq.getSimpleName();
-         this.attached[Eq] ? Yq.b.Warn("camera input of type " + Eq + " already exists on camera") : (this.attached[Eq] = qq, qq.camera = this.camera, qq.checkInputs && (this.checkInputs = this._addCheckInputs(qq.checkInputs.bind(qq))), this.attachedToElement && qq.attachControl(t … [truncated]
-       }
-       remove(qq) {
- ... (84 more removed lines; see GitHub link above)
+       c: () => xC,
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L108-L191` → after: `L9-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L9-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/224.js#L9-L26) · [Before (L108-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/224.js#L108-L191)

```diff
-     var Yq = gq(39757),
-       lq = gq(39759),
-       Oq = gq(37139),
-       mq = gq(37289),
-       xq = gq(39995),
-       Aq = gq(39960),
-       cq = gq(37171);
-     let uq = (() => {
-         var qq;
-         let Eq, gq, Aq = xq.c,
-           cq = [],
-           uq = [],
-           Bq = [],
-           Wq = [];
-         return qq = class extends Aq {
-           constructor(qq, Eq, gq, lq) {
- ... (68 more removed lines; see GitHub link above)
+     var QC = ZC(4198),
+       wC = ZC(1383),
+       bC = ZC(48),
+       nC = ZC(6484),
+       fC = ZC(4185),
+       oC = ZC(1240),
+       qC = ZC(1840),
+       FC = ZC(1811),
+       WC = ZC(1388),
+       NC = ZC(1143),
+       MC = ZC(36794),
+       gC = ZC(1002),
+       SC = ZC.n(gC),
+       pC = ZC(1263),
+       PC = ZC(1013),
+       GC = ZC(1228),
+ ... (2 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L194-L246` → after: `L29-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L29-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/224.js#L29-L35) · [Before (L194-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/224.js#L194-L246)

```diff
-       Bq || (Bq = !0, Aq.c.AddNodeConstructor("Light_Type_3", ((qq, Eq) => () => new uq(qq, Oq.q.Zero(), Eq))), (0, cq.g)("BABYLON.HemisphericLight", uq))
-     }
-   },
-   37286: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       Color3: () => Yq.d,
-       e: () => Yq.g
-     });
-     var Yq = gq(37289);
-     (0, Yq.h)()
-   },
-   37758: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       c: () => lq
-     });
-     var Yq = gq(37767);
- ... (37 more removed lines; see GitHub link above)
+       const {
+         t: CC
+       } = (0, NC.y)(), [zC, ZC] = (0, bC.useState)(!1), [gC, xC] = (0, bC.useState)(null), [IC, iC] = (0, bC.useState)(1), [vC, eC] = (0, bC.useState)(!1), [hC, KC] = (0, bC.useState)(!1), YC = (0, bC.useRef)(0), dC = (0, bC.useRef)(!1), mC = (0, bC.useRef)(!1), HC = (0, bC.useRe … [truncated]
+ 
+       function lC() {
+         const CC = null !== gC && void 0 !== gC ? gC : "Rested Speed";
+         qC.gameBridge.send("wakeUp", hC ? CC : null), EC.current = null, ZC(!1), xC(null), iC(1), eC(!1), KC(!1)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L250` → after: `L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/224.js#L161) · [Before (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/224.js#L250)

```diff
-   37767: (qq, Eq, gq) => {
+   40405: (CC, zC, ZC) => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L252` → after: `L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/224.js#L163) · [Before (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/224.js#L252)

```diff
-       d: () => lq
+       b: () => LC
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L254` → after: `L165-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L165-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/224.js#L165-L186) · [Before (L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/224.js#L254)

```diff
-     var Yq = gq(37139);
+     var QC = ZC(20),
+       wC = ZC(28),
+       bC = ZC(4219),
+       nC = ZC(310),
+       fC = ZC(1557),
+       oC = ZC(8174),
+       qC = ZC(4227),
+       FC = ZC(8713),
+       WC = ZC(8208),
+       NC = ZC(8184),
+       MC = ZC(8215),
+       gC = ZC(1600),
+       SC = ZC(8223),
+       pC = ZC(8659),
+       PC = ZC(8807),
+       GC = ZC(8729),
+ ... (6 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L256-L315` → after: `L188-L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L188-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/224.js#L188-L189) · [Before (L256-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/224.js#L256-L315)

```diff
-       constructor(qq, Eq, gq, lq) {
-         this.normal = new Yq.q(qq, Eq, gq), this.d = lq
-       }
-       bYq() {
-         return [this.normal.x, this.normal.y, this.normal.z, this.d]
-       }
-       clone() {
-         return new lq(this.normal.x, this.normal.y, this.normal.z, this.d)
-       }
-       getClassName() {
-         return "Plane"
-       }
-       getHashCode() {
-         let qq = this.normal.getHashCode();
-         return qq = 397 * qq ^ this.d, qq
-       }
- ... (44 more removed lines; see GitHub link above)
+       constructor() {
+         this.lostAtMs = null
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L317-L319` → after: `L191-L192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L191-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/224.js#L191-L192) · [Before (L317-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/224.js#L317-L319)

```diff
-       static FromPoints(qq, Eq, gq) {
-         const Yq = new lq(0, 0, 0, 0);
-         return Yq.copyFromPoints(qq, Eq, gq), Yq
+       update(CC, zC) {
+         return CC ? (this.lostAtMs = null, !1) : (this.lostAtMs ??= zC, zC - this.lostAtMs >= 250)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L321-L330` → after: `L194-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L194-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/224.js#L194-L195) · [Before (L321-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/224.js#L321-L330)

```diff
-       static FromPositionAndNormal(qq, Eq) {
-         const gq = new lq(0, 0, 0, 0);
-         return this.FromPositionAndNormalToRef(qq, Eq, gq)
-       }
-       static FromPositionAndNormalToRef(qq, Eq, gq) {
-         return gq.normal.WG(Eq), gq.normal.normalize(), gq.d = -qq.dot(gq.normal), gq
-       }
-       static SignedDistanceToPlaneFromPositionAndNormal(qq, Eq, gq) {
-         const lq = -(Eq.x * qq.x + Eq.y * qq.y + Eq.z * qq.z);
-         return Yq.q.Dot(gq, Eq) + lq
+       reset() {
+         this.lostAtMs = null
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L353-L354` → after: `L199-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L199-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/224.js#L199-L200) · [Before (L353-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/224.js#L353-L354)

```diff
-       constructor(qq, Eq, gq, Yq) {
-         this.x = qq, this.y = Eq, this.width = gq, this.height = Yq
+       constructor(CC, zC) {
+         this.press = CC, this.release = zC, this.downAtMs = null, this.token = null, this.latched = !1
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L356-L357` → after: `L202-L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L202-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/224.js#L202-L204) · [Before (L356-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/224.js#L356-L357)

```diff
-       toGlobal(qq, Eq) {
-         return new Yq(this.x * qq, this.y * Eq, this.width * qq, this.height * Eq)
+       update(CC, zC, ZC, QC) {
+         if (CC && null === this.downAtMs) return this.downAtMs = ZC, this.latched = QC, void(this.token = this.press());
+         null !== this.downAtMs && (this.latched ? CC && this.end() : !zC && ZC - this.downAtMs >= 40 && this.end())
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L359-L360` → after: `L206-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L206-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/224.js#L206-L207) · [Before (L359-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/224.js#L359-L360)

```diff
-       toGlobalToRef(qq, Eq, gq) {
-         return gq.x = this.x * qq, gq.y = this.y * Eq, gq.width = this.width * qq, gq.height = this.height * Eq, this
+       isLatched() {
+         return null !== this.downAtMs && this.latched
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L362-L363` → after: `L209-L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L209-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/224.js#L209-L210) · [Before (L362-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/224.js#L362-L363)

```diff
-       clone() {
-         return new Yq(this.x, this.y, this.width, this.height)
+       unlatch() {
+         this.latched = !1
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L365-L409` → after: `L212-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L212-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/224.js#L212-L213) · [Before (L365-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/224.js#L365-L409)

```diff
-     }
-   },
-   40155: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       d: () => cq
-     });
-     var Yq = gq(37139),
-       lq = gq(37289),
-       Oq = gq(40163),
-       mq = gq(40176),
-       xq = gq(40190);
- 
-     function Aq(qq) {
-       let Eq = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
-       const gq = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
-         Oq = [],
- ... (29 more removed lines; see GitHub link above)
+       cancel() {
+         null !== this.downAtMs && this.end()
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L411-L425` → after: `L215-L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L215-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/224.js#L215-L217) · [Before (L411-L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/224.js#L411-L425)

```diff
-       const jq = [Aq / 2, cq / 2, uq / 2],
-         Hq = dq.reduce(((qq, Eq, gq) => qq.concat(Eq * jq[gq % 3])), []),
-         oq = 0 === qq.sideOrientation ? 0 : qq.sideOrientation || mq.d.DEFAULTSIDE,
-         Pq = qq.faceUV || new Array(6),
-         Qq = qq.faceColors,
-         yq = [];
-       for (let mq = 0; mq < 6; mq++) void 0 === Pq[mq] && (Pq[mq] = new Yq.r(0, 0, 1, 1)), Qq && void 0 === Qq[mq] && (Qq[mq] = new lq.g(1, 1, 1, 1));
-       for (let Yq = 0; Yq < 6; Yq++)
-         if (Oq.push(Pq[Yq].z, xq.b ? 1 - Pq[Yq].w : Pq[Yq].w), Oq.push(Pq[Yq].x, xq.b ? 1 - Pq[Yq].w : Pq[Yq].w), Oq.push(Pq[Yq].x, xq.b ? 1 - Pq[Yq].y : Pq[Yq].y), Oq.push(Pq[Yq].z, xq.b ? 1 - Pq[Yq].y : Pq[Yq].y), Qq)
-           for (let qq = 0; qq < 4; qq++) yq.push(Qq[Yq].r, Qq[Yq].g, Qq[Yq].b, Qq[Yq].a);
-       mq.d._ComputeSides(oq, Hq, Eq, gq, Oq, qq.frontUVs, qq.backUVs);
-       const tq = new mq.d;
-       if (tq.indices = Eq, tq.positions = Hq, tq.normals = gq, tq.uvs = Oq, Qq) {
-         const qq = oq === mq.d.DOUBLESIDE ? yq.concat(yq) : yq;
-         tq.colors = qq
+       end() {
+         const CC = this.token;
+         this.downAtMs = null, this.token = null, this.latched = !1, this.release(CC)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L437-L480` → after: `L220-L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L220-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/224.js#L220-L285) · [Before (L437-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/224.js#L437-L480)

```diff
-     let uq = !1;
-     uq || (uq = !0, mq.d.CreateBox = Aq, Oq.e.CreateBox = function(qq, Eq) {
-       return cq(qq, {
-         size: Eq,
-         sideOrientation: arguments.length > 4 ? arguments[4] : void 0,
-         updatable: arguments.length > 3 ? arguments[3] : void 0
-       }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
-     })
-   },
-   40205: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => Bq
-     });
-     var Yq = gq(37139),
-       lq = gq(40163),
-       Oq = gq(40176),
- ... (28 more removed lines; see GitHub link above)
+     const hC = {
+         kind: "specialAction",
+         action: "SpecialAction2"
+       },
+       KC = CC => {
+         let zC = null;
+         const ZC = new iC.d,
+           QC = () => {
+             zC && (((CC, zC, ZC) => {
+               switch (ZC.kind) {
+                 case "reload":
+                   return void zC.specialActionUp("SpecialAction1");
+                 case "specialAction":
+                   return void zC.specialActionUp(ZC.action);
+                 case "customButton":
+                   return void AC.gameBridge.send("pressCustomButton", {
+ ... (50 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L484-L523` → after: `L288-L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L288-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/224.js#L288-L308) · [Before (L484-L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/224.js#L484-L523)

```diff
-       }
-       const Aq = new Oq.d;
-       return Aq.indices = Eq, Aq.positions = gq, lq && (Aq.colors = mq), Aq
-     }
- 
-     function uq(qq) {
-       const Eq = qq.dashSize || 3,
-         gq = qq.gapSize || 1,
-         lq = qq.dashNb || 200,
-         mq = qq.points,
-         xq = [],
-         Aq = [],
-         cq = Yq.q.Zero();
-       let uq, Bq, Wq, Nq = 0,
-         aq = 0;
-       for (Wq = 0; Wq < mq.length - 1; Wq++) mq[Wq + 1].subtractToRef(mq[Wq], cq), Nq += cq.length();
- ... (24 more removed lines; see GitHub link above)
+       };
+     var YC = ZC(8160);
+     var dC = ZC(40396),
+       mC = ZC(8757),
+       HC = ZC(8203),
+       EC = ZC(8847);
+     var lC = ZC(40392),
+       XC = ZC(8850),
+       cC = ZC(40410),
+       uC = ZC(8831),
+       rC = ZC(8762),
+       sC = ZC(8768),
+       TC = ZC(8770),
+       aC = ZC(8664);
+     const tC = () => aC.b[(0, NC.k)().tapHoldTime].wheelMs,
+       DC = () => ((0, FC.b)(), new Event("controllerMenuKey")),
+ ... (5 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L525-L563` → after: `L310-L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L310-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/224.js#L310-L340) · [Before (L525-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/224.js#L525-L563)

```diff
-         return Yq.updateVerticesData(xq.g.PositionKind, qq, !1, !1), Oq && Eq && Yq.updateVerticesData(xq.g.ColorKind, Eq, !1, !1), Yq.refreshBoundingInfo(), Yq
-       }
-       const Aq = !!Oq,
-         uq = new mq.b(qq, gq, null, void 0, void 0, Aq, Eq.useVertexAlpha, Eq.material);
-       return cq(Eq).applyToMesh(uq, Eq.updatable), uq
-     }
- 
-     function Wq(qq, Eq) {
-       let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-       const Yq = Eq.colors ? [Eq.colors] : null;
-       return Bq(qq, {
-         lines: [Eq.points],
-         updatable: Eq.updatable,
-         instance: Eq.instance,
-         colors: Yq,
-         useVertexAlpha: Eq.useVertexAlpha,
- ... (23 more removed lines; see GitHub link above)
+       }), (CC => {
+         let {
+           bodies: zC,
+           press: QC
+         } = CC;
+         ZC(zC, QC)
+       })),
+       yC = {
+         running: !1,
+         latchedAtMs: -1 / 0
+       },
+       LC = CC => {
+         const zC = {
+           x: 0,
+           y: 0,
+           magnitude: 0,
+ ... (15 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L565` → after: `L342-L487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L342-L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/224.js#L342-L487) · [Before (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/224.js#L565)

```diff
-         return (Eq.dashNb || Eq.dashSize || Eq.gapSize || Eq.useVertexAlpha || Eq.material) && Aq.b.Warn("You have used an option other than points with the instance option. Please be aware that these other options will be ignored."), xq.updateMeshPositions(qq, !1), xq
+         let hC = !1;
+         const LC = new vC,
+           UC = CC.look,
+           BC = new iC.d,
+           OC = new iC.d,
+           kC = KC(CC),
+           VC = wC.o.subscribe(RC.r, (zC => {
+             kC.pressPicked(CC.bodies(), zC)
+           })),
+           Cz = jC(CC, (CC => CC.primaryFireDown()), ((CC, zC) => {
+             CC.primaryFireUp(zC)
+           })),
+           zz = jC(CC, (CC => CC.altFireDown()), ((CC, zC) => {
+             CC.altFireUp(zC)
+           }));
+         let Zz = !1,
+ ... (130 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L588` → after: `L490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/224.js#L490) · [Before (L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/224.js#L588)

```diff
-   40213: (qq, Eq, gq) => {
+   40396: (CC, zC, ZC) => {
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L590-L591` → after: `L492-L494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L492-L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/224.js#L492-L494) · [Before (L590-L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/224.js#L590-L591)

```diff
-       b: () => Wq,
-       c: () => Vq
+       d: () => gC,
+       e: () => pC,
+       g: () => MC
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L593-L624` → after: `L496-L519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L496-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/224.js#L496-L519) · [Before (L593-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/224.js#L593-L624)

```diff
-     var Yq, lq, Oq = gq(37289),
-       mq = gq(39879),
-       xq = gq(40163),
-       Aq = gq(40221),
-       cq = gq(40037),
-       uq = gq(40225),
-       Bq = gq(39636);
-     class Wq extends xq.e {
-       _isShaderMaterial(qq) {
-         return !!qq && "ShaderMaterial" === qq.getClassName()
-       }
-       constructor(qq) {
-         let Eq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
-           Yq = arguments.length > 5 ? arguments[5] : void 0,
-           lq = arguments.length > 6 ? arguments[6] : void 0,
-           xq = arguments.length > 7 ? arguments[7] : void 0;
- ... (16 more removed lines; see GitHub link above)
+     var QC = ZC(1240),
+       wC = ZC(4219),
+       bC = ZC(8799),
+       nC = ZC(36792),
+       fC = ZC(1637),
+       oC = ZC(1134),
+       qC = ZC(8223),
+       FC = ZC(8729),
+       WC = ZC(8812);
+     const NC = {
+         emoteWheel: bC.g,
+         quickChatWheel: FC.d,
+         actionWheel: WC.u
+       },
+       MC = Object.keys(NC),
+       gC = "dead",
+ ... (8 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L627-L640` → after: `L522-L545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L522-L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/224.js#L522-L545) · [Before (L627-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/224.js#L627-L640)

```diff
-       getClassName() {
-         return "LinesMesh"
-       }
-       get material() {
-         return this._internalAbstractMeshDataInfo._material
-       }
-       set material(qq) {
-         const Eq = this.material;
-         if (Eq === qq) return;
-         const gq = Eq && this._ownsMaterial;
-         this._ownsMaterial = !1, this._setInternalMaterial(qq), gq && Eq?.dispose()
-       }
-       _setInternalMaterial(qq) {
-         this._setMaterial(qq), this.material && (this.material.fillMode = cq.e.LineListDrawMode, this.material.disableLighting = !0)
+   },
+   40392: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => wC,
+       f: () => oC,
+       j: () => fC,
+       l: () => FC,
+       n: () => nC,
+       p: () => bC,
+       t: () => qC,
+       w: () => WC
+     });
+     var QC = ZC(8167);
+     class wC {
+       constructor() {
+         this.fullTiltSinceMs = null
+ ... (8 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L642-L643` → after: `L547-L548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L547-L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/224.js#L547-L548) · [Before (L642-L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/224.js#L642-L643)

```diff
-       get checkCollisions() {
-         return !1
+       reset() {
+         this.fullTiltSinceMs = null
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L645-L655` → after: `L550-L577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L550-L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/224.js#L550-L577) · [Before (L645-L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/224.js#L645-L655)

```diff
-       set checkCollisions(qq) {}
-       _bind(qq, Eq) {
-         if (!this._geometry) return this;
-         const gq = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
-         if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(Eq, gq) : this._geometry._bind(Eq, gq, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMate … [truncated]
-           const {
-             r: qq,
-             g: Eq,
-             b: gq
-           } = this.color;
-           this._color4.set(qq, Eq, gq, this.alpha), this.material.setColor4("color", this._color4)
+     }
+     const bC = (CC, zC, ZC, wC, bC) => {
+         let nC = 1;
+         return "boost" === ZC.lookCurve ? nC = CC.update(zC, ZC, bC) : CC.reset(),
+           function(CC, zC) {
+             let {
+               yawBoost: ZC = 1,
+               aiming: wC = !1
+             } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
+             const bC = (0, QC.h)((0, QC.i)(CC, zC.lookDeadzone), zC.lookCurve),
+               nC = 220 * Math.PI / 180,
+               fC = wC ? zC.aimLookSensitivity / 100 : 1,
+               oC = zC.lookSensitivityX / 100 * fC,
+               qC = zC.lookSensitivityY / 100 * fC;
+             return {
+               yawRadPerSec: bC.x * nC * oC * ZC * (zC.invertLookX ? -1 : 1),
+ ... (12 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L657-L673` → after: `L579-L595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L579-L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/224.js#L579-L595) · [Before (L657-L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/224.js#L657-L673)

```diff
-         return this
-       }
-       _draw(qq, Eq, gq) {
-         if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
-         const Yq = this.ZJ().Ba();
-         return this._unIndexed ? Yq.drawArraysType(cq.e.LineListDrawMode, qq.verticesStart, qq.verticesCount, gq) : Yq.drawElementsType(cq.e.LineListDrawMode, qq.indexStart, qq.indexCount, gq), this
-       }
-       dispose(qq) {
-         let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || Eq) && this.material?.dispose(!1, !1, !0), super.dispose(qq)
-       }
-       clone(qq) {
-         let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-           gq = arguments.length > 2 ? arguments[2] : void 0;
-         if (Eq && void 0 === Eq._addToSceneRootNodes) {
-           const gq = Eq;
- ... (1 more removed lines; see GitHub link above)
+       },
+       fC = (CC, zC) => zC ? {
+         move: CC.rightStick,
+         look: CC.leftStick
+       } : {
+         move: CC.leftStick,
+         look: CC.rightStick
+       },
+       oC = (CC, zC) => {
+         const ZC = (0, QC.i)(CC, zC),
+           wC = Math.min(1, Math.hypot(ZC.x, ZC.y));
+         return {
+           magnitude: wC,
+           speed: Math.min(1, wC / .8),
+           headingOffset: 0 === wC ? 0 : Math.atan2(ZC.x, -ZC.y),
+           x: ZC.x,
+ ... (1 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L675-L681` → after: `L597-L622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L597-L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/224.js#L597-L622) · [Before (L675-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/224.js#L675-L681)

```diff
-         return new Wq(qq, this.ZJ(), Eq, this, gq)
-       }
-       createInstance(qq) {
-         const Eq = new Nq(qq, this);
-         if (this.uR) {
-           Eq.uR = {};
-           for (const qq in this.uR) Eq.uR[qq] = this.uR[qq]
+       },
+       qC = (CC, zC) => {
+         let {
+           sprintPressed: ZC,
+           magnitude: QC,
+           autoSprint: wC,
+           nowMs: bC
+         } = zC;
+         const nC = ZC ? bC : CC.latchedAtMs,
+           fC = (CC => {
+             let {
+               running: zC,
+               magnitude: ZC,
+               sprintPressed: QC,
+               autoSprint: wC
+             } = CC;
+ ... (10 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L683-L706` → after: `L624-L632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L624-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/224.js#L624-L632) · [Before (L683-L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/224.js#L683-L706)

```diff
-         return Eq
-       }
-       serialize(qq) {
-         super.serialize(qq), qq.color = this.color.bYq(), qq.alpha = this.alpha
-       }
-       static Parse(qq, Eq) {
-         const gq = new Wq(qq.name, Eq);
-         return gq.color = Oq.d.FromArray(qq.color), gq.alpha = qq.alpha, gq
-       }
-     }
-     Wq.ForceGLSL = !1;
-     class Nq extends Aq.b {
-       constructor(qq, Eq) {
-         super(qq, Eq), this.intersectionThreshold = Eq.intersectionThreshold
-       }
-       getClassName() {
- ... (8 more removed lines; see GitHub link above)
+       },
+       FC = (CC, zC, ZC) => ZC && CC.gyroAiming && "button" === CC.gyroActivation && CC.gyroButton !== zC ? CC.gyroButton : null,
+       WC = (CC, zC) => zC ? {
+         ...CC,
+         isHeld: ZC => ZC !== zC && CC.isHeld(ZC),
+         wasPressed: ZC => ZC !== zC && CC.wasPressed(ZC),
+         wasReleased: ZC => ZC !== zC && CC.wasReleased(ZC),
+         value: ZC => ZC === zC ? 0 : CC.value(ZC)
+       } : CC
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L708` → after: `L634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/224.js#L634) · [Before (L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/224.js#L708)

```diff
-   38649: (qq, Eq, gq) => {
+   40410: (CC, zC, ZC) => {
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L710` → after: `L636-L637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L636-L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/224.js#L636-L637) · [Before (L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/224.js#L710)

```diff
-       b: () => Oq
+       b: () => wC,
+       e: () => QC
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L712-L715` → after: `L639-L662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L639-L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/224.js#L639-L662) · [Before (L712-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/224.js#L712-L715)

```diff
-     var Yq = gq(38653);
-     const lq = (qq, Eq, gq) => qq ? qq.getClassName && "Mesh" === qq.getClassName() ? null : !qq.getClassName || "SubMesh" !== qq.getClassName() && "PhysicsBody" !== qq.getClassName() ? qq.clone ? qq.clone() : Array.isArray(qq) ? qq.slice() : gq && "object" === typeof qq ? {
-       ...qq
-     } : null : qq.clone(Eq) : null;
+     const QC = CC => {
+       let {
+         mode: zC,
+         sneakHeld: ZC,
+         sneakPressed: QC,
+         sneakTogglePressed: wC,
+         descending: bC,
+         canCrouch: nC,
+         toggled: fC
+       } = CC;
+       return nC ? bC ? {
+         crouchHeld: ZC,
+         toggled: !1
+       } : "hold" === zC ? {
+         crouchHeld: ZC,
+         toggled: wC ? !fC : fC
+ ... (8 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L717-L746` → after: `L664-L676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L664-L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/224.js#L664-L676) · [Before (L717-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/224.js#L717-L746)

```diff
-       static DeepCopy(qq, Eq, gq, Oq) {
-         let mq = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         const xq = function(qq) {
-           const Eq = [];
-           do {
-             const gq = Object.getOwnPropertyNames(qq);
-             for (const qq of gq) - 1 === Eq.indexOf(qq) && Eq.push(qq)
-           } while (qq = Object.getPrototypeOf(qq));
-           return Eq
-         }(qq);
-         for (const cq of xq) {
-           if ("_" === cq[0] && (!Oq || -1 === Oq.indexOf(cq))) continue;
-           if (cq.endsWith("Observable")) continue;
-           if (gq && -1 !== gq.indexOf(cq)) continue;
-           const xq = qq[cq],
-             uq = typeof xq;
- ... (14 more removed lines; see GitHub link above)
+       constructor() {
+         this.regainPending = !1, this.regainedAtMs = -1 / 0, this.graceEndsMs = -1 / 0, this.ignoringHeld = !1
+       }
+       lostToPadScreen() {
+         this.regainPending = !0
+       }
+       filter(CC, zC) {
+         this.regainPending && (this.regainPending = !1, this.regainedAtMs = zC, this.graceEndsMs = zC + 500);
+         const ZC = zC < this.graceEndsMs;
+         return ZC && (CC.sneakPressed || CC.sneakTogglePressed) && (this.graceEndsMs = Math.min(this.regainedAtMs + 1e3, Math.max(this.graceEndsMs, zC + 300))), CC.sneakHeld ? ZC && CC.sneakPressed && (this.ignoringHeld = !0) : this.ignoringHeld = !1, {
+           sneakHeld: CC.sneakHeld && !this.ignoringHeld,
+           sneakPressed: CC.sneakPressed && !this.ignoringHeld,
+           sneakTogglePressed: CC.sneakTogglePressed && !ZC
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L751-L760` → after: `L681-L682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L681-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/224.js#L681-L682) · [Before (L751-L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/224.js#L751-L760)

```diff
-   37872: (qq, Eq, gq) => {
-     function Yq() {
-       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (qq => {
-         const Eq = 16 * Math.random() | 0;
-         return ("x" === qq ? Eq : 3 & Eq | 8).toString(16)
-       }))
-     }
-     gq.d(Eq, {
-       d: () => Yq
-     })
+   40381: (CC, zC, ZC) => {
+     ZC(8850)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L762` → after: `L684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/224.js#L684) · [Before (L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/224.js#L762)

```diff
-   38653: (qq, Eq, gq) => {
+   40389: (CC, zC, ZC) => {
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L764` → after: `L686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/224.js#L686) · [Before (L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/224.js#L764)

```diff
-       b: () => Yq
+       e: () => RC
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L766-L815` → after: `L688-L772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L688-L772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/224.js#L688-L772) · [Before (L766-L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/224.js#L766-L815)

```diff
-     class Yq {
-       static _CheckLimit(qq, Eq) {
-         let gq = Yq._LogLimitOutputs[qq];
-         return gq ? gq.current++ : (gq = {
-           limit: Eq,
-           current: 1
-         }, Yq._LogLimitOutputs[qq] = gq), gq.current <= gq.limit
-       }
-       static _GenerateLimitMessage(qq) {
-         let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-         const gq = Yq._LogLimitOutputs[qq];
-         if (!gq || !Yq.MessageLimitReached) return;
-         const lq = this._Levels[Eq];
-         gq.current === gq.limit && Yq[lq.name](Yq.MessageLimitReached.replace(/%LIMIT%/g, "" + gq.limit).replace(/%TYPE%/g, lq.name ?? ""))
-       }
-       static _AddLogEntry(qq) {
- ... (34 more removed lines; see GitHub link above)
+     var QC = ZC(28),
+       wC = ZC(8799),
+       bC = ZC(8803),
+       nC = ZC(8174),
+       fC = ZC(8208),
+       oC = ZC(8184),
+       qC = ZC(40392),
+       FC = ZC(40396),
+       WC = ZC(8223),
+       NC = ZC(8167),
+       MC = ZC(8729),
+       gC = ZC(8812);
+     const SC = [{
+         isOpen: wC.h,
+         openButton: () => (0, nC.i)("emoteWheel"),
+         aim: CC => {
+ ... (69 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/225.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/225.js` (40 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee)

#### 1. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/225.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/225.js#L2)

```diff
- export const ids = [225, 230];
+ export const ids = [225];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/225.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/225.js#L4)

```diff
-   41585: (qq, Eq, gq) => {
+   38300: (CC, zC, ZC) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L8-L23` → after: `L8-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L8-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/225.js#L8-L15) · [Before (L8-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/225.js#L8-L23)

```diff
-     var Yq = gq(41519),
-       lq = gq(39748);
-     let Oq = !1;
- 
-     function mq() {
-       Oq || (Oq = !0, lq.d.prototype._sphericalPolynomialTargetSize = 0, lq.d.prototype.forceSphericalPolynomialsRecompute = function() {
-         this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
-       }, Object.defineProperty(lq.d.prototype, "sphericalPolynomial", {
-         get: function() {
-           if (this._texture) {
-             if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
-             if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = Yq.b.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialCo … [truncated]
-               this._texture._sphericalPolynomial = qq, this._texture._sphericalPolynomialComputed = !0
-             }))), null
-           }
-           return null
+     var QC = ZC(184),
+       wC = ZC(37496);
+     const bC = 1.2,
+       nC = {
+         poseRig: "golem",
+         physicsBodyDimensions: {
+           width: .5,
+           height: 2.5
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L25-L26` → after: `L17-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/225.js#L17-L19) · [Before (L25-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/225.js#L25-L26)

```diff
-         set: function(qq) {
-           this._texture && (this._texture._sphericalPolynomial = qq)
+         hitBoxDimensions: {
+           width: 2.2,
+           height: 2.8
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L28-L709` → after: `L21-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L21-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/225.js#L21-L25) · [Before (L28-L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/225.js#L28-L709)

```diff
-         enumerable: !0,
-         configurable: !0
-       }))
-     }
-   },
-   37286: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       Color3: () => Yq.d,
-       e: () => Yq.g
-     });
-     var Yq = gq(37289);
-     (0, Yq.h)()
-   },
-   37758: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       c: () => lq
- ... (666 more removed lines; see GitHub link above)
+         eyeHeight: 2.3,
+         rideHeight: 2.3,
+         Mq: .5,
+         PzC: !1
+       },
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L711-L750` → after: `L27-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L27-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/225.js#L27-L38) · [Before (L711-L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/225.js#L711-L750)

```diff
-         ...jq,
-         TwoPi: 2 * Math.PI,
-         Sign: Math.sign,
-         Log2: Math.log2,
-         HCF: Hq
-       };
-     var Pq = gq(41561),
-       Qq = gq(40883),
-       yq = gq(41340),
-       tq = gq(41347),
-       rq = gq(41581);
-     (0, rq.RegisterDumpTools)();
-     var vq = gq(39757),
-       hq = gq(39759),
-       nq = gq(38653),
-       bq = gq(39858),
- ... (24 more removed lines; see GitHub link above)
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
+         Mq: .5,
+         PzC: !1
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L752-L14364` → after: `L40-L607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L40-L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/225.js#L40-L607) · [Before (L752-L14364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/225.js#L752-L14364)

```diff
-       Tq = qq => Mq(qq, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAgAElEQVR42u29yY5tWXIlZnbuiSaTbZFUkZRKrCKhElASQA0EoQABgn6hJvoXzfUP+gP9hWb6Bg00IgRoQJaKqUxmZmTEe8/v0uB2u7Fm2T7HIyIrnz88uPvt3f2a2WrMbOvf/u3PvvzP/sUf/N6//i8vf/lv/3v5H//d//Sb//Uq/5u8yf8hV/m/5 … [truncated]
-       zq = qq => Mq(qq, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAF9UlEQVR4nGWVy64eVxGF16X27u7/HMcyuZGYAINwmTBigngBXoc34El4B0ZMGDJjFCExQUIKiRKZYBITHdvn/L1rF4P+c+yEUqmH9WmtrrWLkdB4C1/91h/9yn947D8+8CfdlBeGGAMtqwNd6K7VWAJrw9qwLtw2nDaernh6wKuHPD3S1Vs6vaPT9 … [truncated]
-       Sq = qq => Mq(qq, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAABGSklEQVR42u3cx4tb6brvcf0DmmpUoxrUoAY1KCgwFAZjME1jjGmMTWNs2tjY2MY2DjjinHPOOeec3dXOOeecU2VlaSksSc/9aq1X0pJKqmD3Dn3upvnCSe197v38nlfS2fscW1x+kbCMloAsFY/skEY5KbVySb7JXfkoT+WtvJGX8ol/67s8lDr+o … [truncated]
-     var pq = gq(39838),
-       Gq = gq(37139),
-       Lq = gq(39879),
-       Jq = gq(40033),
-       kq = gq(40113);
-     class Rq extends Jq.c {
-       constructor() {
-         super(...arguments), this.BRDF_V_HEIGHT_CORRELATED = !1, this.MS_BRDF_ENERGY_CONSERVATION = !1, this.SPHERICAL_HARMONICS = !1, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !1, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, thi … [truncated]
-       }
-     }
-     let Uq = (() => {
-       var qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq, cq;
-       let uq, Bq, Wq, Nq, aq, Vq, dq, jq, Hq, oq = kq.c,
- ... (13597 more removed lines; see GitHub link above)
+       oC = {
+         physicsBodyDimensions: {
+           width: QC.f.tp,
+           height: QC.f.Dp
+         },
+         hitBoxDimensions: {
+           width: QC.f.tp + .4,
+           height: QC.f.Dp + .6
+         },
+         eyeHeight: QC.f.Dp * QC.f.playerEyeToHeightRatio,
+         rideHeight: QC.f.Dp - .3,
+         Mq: .5,
+         PzC: !1
+       },
+       qC = {
+         physicsBodyDimensions: {
+ ... (552 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L14367` → after: `L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/225.js#L610) · [Before (L14367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/225.js#L14367)

```diff
-       return "number" === typeof qq || "boolean" === typeof qq || "bigint" === typeof qq || Xm(qq)
+       return MC[CC]
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L14369-L14455` → after: `L612-L716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L612-L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/225.js#L612-L716) · [Before (L14369-L14455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/225.js#L14369-L14455)

```diff
-     class Im {
-       constructor(qq, Eq) {
-         this._ns = new Map, this._prefixCount = 0, this._builder = qq, this._format = Fm(Eq), this._nFmt = new sm(this._format)
-       }
-       withNamespace() {
-         for (var qq = arguments.length, Eq = new Array(qq), gq = 0; gq < qq; gq++) Eq[gq] = arguments[gq];
-         for (const Yq of Eq) this._assignNamespace(Yq);
-         return this
-       }
-       serialize(qq, Eq) {
-         if (!(Eq = Eq ?? pm(qq))) throw new Error("can not find name for given object");
-         const gq = Lm(Eq);
-         gq.ns && this._assignNamespace(gq.ns, "xmlns"), this._gatherNamespaces(qq, new WeakSet);
-         const Yq = this._builder.ele(null, gq.name);
-         for (const [lq, Oq] of Array.from(this._ns.entries())) Yq.att("xmlns", Oq, lq);
-         this._writeObjectContent(Yq, qq, (new WeakSet).add(qq)), this._builder.end()
- ... (71 more removed lines; see GitHub link above)
+   },
+   36938: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => QC
+     });
+     const QC = {
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
+ ... (89 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L14457-L14466` → after: `L718-L733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L718-L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/225.js#L718-L733) · [Before (L14457-L14466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/225.js#L14457-L14466)

```diff
-         const Oq = [];
-         for (const mq of Object.keys(qq)) {
-           const Eq = qq[mq];
-           if (null === Eq || void 0 === Eq) continue;
-           const gq = lq.get(mq);
-           if (gq) {
-             if (gq.some((qq => !0 === qq.ignore || "none" === qq.kind))) continue;
-             for (const qq of gq) qq.name && this._assignNamespace(qq.name)
-           }
-           Oq.push(Eq)
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

#### 11. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L14468-L14477` → after: `L735-L744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L735-L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/225.js#L735-L744) · [Before (L14468-L14477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/225.js#L14468-L14477)

```diff
-         for (const mq of Oq) Km(mq) || this._gatherNamespaces(mq, Eq)
-       }
-       _assignNamespace(qq, Eq) {
-         const gq = Lm(qq);
-         if (gq?.ns) {
-           const qq = gq.ns.toLowerCase();
-           this._ns.get(qq) || this._ns.set(qq, Eq ?? this._buildNsPrefix(qq))
-         } else if ("xmlns" === Eq) {
-           const qq = gq.name.toLowerCase();
-           this._ns.get(qq) || this._ns.set(qq, Eq ?? this._buildNsPrefix(qq))
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

#### 12. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L14479-L14490` → after: `L746-L773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L746-L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/225.js#L746-L773) · [Before (L14479-L14490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/225.js#L14479-L14490)

```diff
-       }
-       _buildNsPrefix(qq) {
-         let Eq, gq = !1;
-         do {
-           Eq = "ns" + this._prefixCount++;
-           for (const qq of Array.from(this._ns.values()))
-             if (qq === Eq) {
-               gq = !0;
-               break
-             }
-         } while (gq);
-         return Eq
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

#### 13. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L14493-L14530` → after: `L776-L918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L776-L918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/225.js#L776-L918) · [Before (L14493-L14530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/225.js#L14493-L14530)

```diff
-     class em {}
-     var Dm;
-     em.OpenTag = "<", em.CloseTag = ">", em.Slash = "/", em.Question = "?", em.Quote = '"', em.Equal = "=", em.Space = " ", em.Semicolon = ":", em.Dec = "<?xml", em.Xml = "xml", em.Xmlns = "xmlns", em.Xsi = "xsi", em.VersionKeyword = "version", em.EncodingKeyword = "encoding", em … [truncated]
-       function(qq) {
-         qq[qq.Declaration = 0] = "Declaration", qq[qq.Tag = 1] = "Tag", qq[qq.Attribute = 2] = "Attribute", qq[qq.Text = 3] = "Text"
-       }(Dm || (Dm = {}));
-     class qx {
-       constructor(qq) {
-         this._ctxStack = [], this._d = 0, this._w = qq
-       }
-       dec(qq, Eq, gq) {
-         return this._w.write(em.Dec), this._writeAttStr(em.VersionKeyword, qq), Eq && this._writeAttStr(em.EncodingKeyword, Eq), void 0 !== gq && this._writeAttStr(em.StandaloneKeyword, gq ? "yes" : "no"), this._w.write(em.Question, em.CloseTag), this
-       }
-       att(qq, Eq, gq) {
-         const Yq = this._peekContext();
-         if (!Yq) throw new Error("att() without open element");
- ... (22 more removed lines; see GitHub link above)
+   },
+   37504: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => nC
+     });
+     var QC = ZC(338),
+       wC = ZC.n(QC),
+       bC = ZC(1806);
+     let nC;
+     var fC, oC, qC, FC, WC, NC, MC, gC, SC;
+     const pC = ["b", 0, 1, 8, "c", 140, 85, "g", "e", "f", "d", 255, "length", 3, "a", 89, "undefined", void 0, 4, 197, 23, 63, 6, "fromCodePoint", 7, 12, "push", 2, "h", 9, 91, 131, 8191, 88, 13, 14, 70, 82, 127, 77, 120, 237, 200, 165, 215, "i", 27, 248, 238, 37, 46, 181, 5, 29 … [truncated]
+ 
+     function PC(...CC) {
+       return CC[pC[12]] = pC[2], typeof fC[CC[pC[1]]] === pC[16] ? fC[CC[pC[1]]] = function(...CC) {
+         for (YC(CC[pC[12]] = pC[2], CC[-pC[5]] = 'C0w}[Do()ex8%fp~/1iVvzgRu<>*SE9=.a{|WPh:Njmtqy2Z`b63!B4JnLd5l$HKkQX7sU^,Yc?&FIM@#A"rT;G_]+O', CC[pC[0]] = "" + (CC[pC[1]] || ""), CC[pC[4]] = CC[pC[0]].length, CC[pC[10]] = [], CC[pC[8]] = pC[1], CC[pC[9]] = pC[1], CC[pC[7]] = -pC … [truncated]
+           if (CC[-pC[6]] = CC[-pC[5]].indexOf(CC[pC[0]][CC[pC[3]]]), CC[-pC[6]] !== -pC[2])
+ ... (127 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L14532-L14590` → after: `L920-L922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L920-L922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/225.js#L920-L922) · [Before (L14532-L14590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/225.js#L14532-L14590)

```diff
-         return this._pushContext(Yq, ++this._d), this._w.write(em.OpenTag, Yq), this
-       }
-       text(qq) {
-         const Eq = this._peekContext();
-         if (!Eq) throw new Error("text() without open element");
-         return this._closeOpenTagIfNeeded(Eq), Eq.lastToken = Dm.Text, this._w.write(this._escText(qq)), this
-       }
-       end() {
-         const qq = this._popContext();
-         return qq && (this._d--, qq.closed ? this._w.write(em.OpenTag, em.Slash, qq.name, em.CloseTag) : this._w.write(em.Slash, em.CloseTag)), this
-       }
-       _pushContext(qq, Eq) {
-         const gq = new qx.Context(qq, Eq);
-         return this._ctxStack.push(gq), gq
-       }
-       _popContext() {
- ... (43 more removed lines; see GitHub link above)
+ 
+         function SC(...CC) {
+           return CC[pC[12]] = pC[2], typeof fC[CC[pC[1]]] === pC[16] ? fC[CC[pC[1]]] = gC(oC[CC[pC[1]]]) : fC[CC[pC[1]]]
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L14592-L15217` → after: `L924-L973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L924-L973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/225.js#L924-L973) · [Before (L14592-L15217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/225.js#L14592-L15217)

```diff
-       }
-       _ensurePrefixDeclared(qq, Eq) {
-         const gq = this._lookupPrefix(Eq);
-         if (gq) return gq;
-         if (qq.closed) throw new Error(`can not declare namespace after start tag closed for <${qq.name}>`);
-         const Yq = this._allocPrefix(qq);
-         return this._writeAttStr(`${em.Xmlns}:${Yq}`, Eq), this._registerNamespace(qq, Yq, Eq), Yq
-       }
-       _closeOpenTagIfNeeded(qq) {
-         qq.closed || (this._w.write(em.CloseTag), qq.closed = !0)
-       }
-     }
-     qx.Context = class {
-       constructor(qq, Eq) {
-         this.name = "", this.closed = !1, this.lastToken = null, this.ns2prefix = new Map, this.prefix2ns = new Map, this.defaultNs = null, this.name = qq, this.depth = Eq
-       }
- ... (610 more removed lines; see GitHub link above)
+ 
+         function PC(...CC) {
+           var zC;
+           YC(CC[pC[12]] = pC[1], zC = function(...CC) {
+             YC(CC[pC[12]] = pC[2], this.HW = CC[pC[1]], this.length = pC[1], this.map = {}, this.head = pC[57], this.tail = pC[57])
+           }, zC.prototype.get = function(...CC) {
+             var zC;
+             return YC(CC[pC[12]] = pC[2], zC = this.map[CC[pC[1]]]), zC ? (this.remove(zC), this.insert(zC.key, zC.val), zC.val) : -pC[2]
+           }, zC.prototype.put = function(...CC) {
+             YC(CC[pC[12]] = pC[27], this.map[CC[pC[1]]] ? (this.remove(this.map[CC[pC[1]]]), this.insert(CC[pC[1]], CC[pC[2]])) : this.length === this.HW ? (this.remove(this.head), this.insert(CC[pC[1]], CC[pC[2]])) : (this.insert(CC[pC[1]], CC[pC[2]]), this.length++))
+           }, zC.prototype.remove = function(...CC) {
+             YC(CC[pC[12]] = pC[2], CC[pC[14]] = CC[pC[1]].prev, CC[pC[56]] = CC[pC[1]].next), CC[pC[56]] && (CC[pC[56]].prev = CC[pC[14]]), CC[pC[14]] && (CC[pC[14]].next = CC[pC[56]]), this.head === CC[pC[1]] && (this.head = CC[pC[56]]), this.tail === CC[pC[1]] && (this.tail = C … [truncated]
+           }, zC.prototype.insert = function(...CC) {
+             YC(CC[pC[12]] = pC[27], CC[pC[14]] = new List(CC[pC[1]], CC[pC[2]]), this.tail ? (this.tail.next = CC[pC[14]], CC[pC[14]].prev = this.tail, this.tail = CC[pC[14]]) : (this.tail = CC[pC[14]], this.head = CC[pC[14]]), this.map[CC[pC[1]]] = CC[pC[14]])
+           }, console.log(zC))
+         }
+ ... (34 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L15219-L15230` → after: `L975-L987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L975-L987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/225.js#L975-L987) · [Before (L15219-L15230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/225.js#L15219-L15230)

```diff
-             },
-             metadata: hq
-           }, oq, Pq), (0, vq.f)(null, null, xq, {
-             kind: "field",
-             name: "pid",
-             static: !1,
-             private: !1,
-             access: {
-               has: qq => "pid" in qq,
-               get: qq => qq.pid,
-               set: (qq, Eq) => {
-                 qq.pid = Eq
+               static generate(...CC) {
+                 CC[pC[12]] = pC[2];
+                 const ZC = zC(65537);
+                 let QC, wC;
+                 CC[pC[2]] = pC[17];
+                 do {
+                   YC(QC = this.randomPrime(CC[pC[1]] / pC[27]), wC = this.randomPrime(CC[pC[1]] / pC[27]), CC[pC[2]] = zC.lcm(QC.prev(), wC.prev()))
+                 } while (zC.gcd(ZC, CC[pC[2]]).notEquals(pC[2]) || QC.minus(wC).abs().shiftRight(CC[pC[1]] / pC[27] - pC[82]).isZero());
+                 return {
+                   e: ZC,
+                   n: QC.multiply(wC),
+                   d: ZC.modInv(CC[pC[2]])
+                 }
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L15232-L15243` → after: `L989-L990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L989-L990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/225.js#L989-L990) · [Before (L15232-L15243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/225.js#L15232-L15243)

```diff
-             },
-             metadata: hq
-           }, Qq, yq), (0, vq.f)(null, null, Aq, {
-             kind: "field",
-             name: "pindex",
-             static: !1,
-             private: !1,
-             access: {
-               has: qq => "pindex" in qq,
-               get: qq => qq.pindex,
-               set: (qq, Eq) => {
-                 qq.pindex = Eq
+               static encrypt(...CC) {
+                 return CC[pC[12]] = pC[13], zC(CC[pC[1]]).modPow(CC[pC[27]], CC[pC[2]])
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L15245-L15352` → after: `L992-L993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L992-L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/225.js#L992-L993) · [Before (L15245-L15352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/225.js#L15245-L15352)

```diff
-             },
-             metadata: hq
-           }, tq, rq), (0, vq.f)(null, qq = {
-             value: Eq
-           }, cq, {
-             kind: "class",
-             name: Eq.name,
-             metadata: hq
-           }, null, uq), Eq = qq.value, hq && Object.defineProperty(Eq, Symbol.metadata, {
-             enumerable: !0,
-             configurable: !0,
-             writable: !0,
-             value: hq
-           }), (0, vq.i)(Eq, uq)
-         })(), Eq
-       })(),
- ... (92 more removed lines; see GitHub link above)
+               static decrypt(...CC) {
+                 return CC[pC[12]] = pC[13], zC(CC[pC[1]]).modPow(CC[pC[2]], CC[pC[27]])
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L15354-L15365` → after: `L995-L998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L995-L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/225.js#L995-L998) · [Before (L15354-L15365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/225.js#L15354-L15365)

```diff
-             },
-             metadata: Nq
-           }, xq, Aq), (0, vq.f)(null, null, Yq, {
-             kind: "field",
-             name: "y",
-             static: !1,
-             private: !1,
-             access: {
-               has: qq => "y" in qq,
-               get: qq => qq.y,
-               set: (qq, Eq) => {
-                 qq.y = Eq
+               static encode(...CC) {
+                 CC[pC[12]] = pC[2];
+                 const ZC = CC[pC[1]].split("").map((CC => CC.charCodeAt())).join("");
+                 return zC(ZC)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L15367-L15378` → after: `L1000-L1008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR1000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L1000-L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/225.js#L1000-L1008) · [Before (L15367-L15378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/225.js#L15367-L15378)

```diff
-             },
-             metadata: Nq
-           }, cq, uq), (0, vq.f)(null, null, lq, {
-             kind: "field",
-             name: "z",
-             static: !1,
-             private: !1,
-             access: {
-               has: qq => "z" in qq,
-               get: qq => qq.z,
-               set: (qq, Eq) => {
-                 qq.z = Eq
+               static decode(...CC) {
+                 CC[pC[12]] = pC[2];
+                 const zC = CC[pC[1]].toString();
+                 CC[pC[83]] = "";
+                 for (let ZC = pC[1]; ZC < zC.length; ZC += pC[27]) {
+                   let QC = Number(zC.substr(ZC, pC[27]));
+                   QC <= 30 ? (CC[pC[83]] += String.fromCharCode(Number(zC.substr(ZC, pC[13]))), ZC++) : CC[pC[83]] += String.fromCharCode(QC)
+                 }
+                 return CC[pC[83]]
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L15380-L15445` → after: `L1010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR1010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L1010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/225.js#L1010) · [Before (L15380-L15445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/225.js#L15380-L15445)

```diff
-             },
-             metadata: Nq
-           }, Bq, Wq), (0, vq.f)(null, qq = {
-             value: Eq
-           }, Oq, {
-             kind: "class",
-             name: Eq.name,
-             metadata: Nq
-           }, null, mq), Eq = qq.value, Nq && Object.defineProperty(Eq, Symbol.metadata, {
-             enumerable: !0,
-             configurable: !0,
-             writable: !0,
-             value: Nq
-           }), (0, vq.i)(Eq, mq)
-         })(), Eq
-       })(),
- ... (50 more removed lines; see GitHub link above)
+             }, module.exports = CC[pC[14]])
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L15447-L15473` → after: `L1012-L1156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR1012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L1012-L1156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/225.js#L1012-L1156) · [Before (L15447-L15473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/225.js#L15447-L15473)

```diff
-         };
-         return (0, vq.j)(Eq, "ThreeMfTriangle"), (() => {
-           const hq = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-           gq = [Tm({
-             name: "v1"
-           })], Yq = [Tm({
-             name: "v2"
-           })], lq = [Tm({
-             name: "v3"
-           })], Oq = [Tm({
-             name: "p1"
-           })], mq = [Tm({
-             name: "p2"
-           })], xq = [Tm({
-             name: "p3"
-           })], Aq = [Tm({
- ... (11 more removed lines; see GitHub link above)
+           EC(134) in AC && lC(), wC()[EC(135)](xC, xC, IC, mC)
+         }
+         YC(CC[pC[29]] = (0, bC[pC[84]])(CC[pC[29]], 1, Math[SC(pC[85])](pC[2], Math[SC(136)](pC[1], -dC, pC[2] - eC / CC[pC[52]]))), wC()[SC(137)](xC, xC, iC))
+       }
+       const FC = vC;
+       YC(wC()[zC(138)](FC, xC, hC), FC[pC[2]] = pC[1], CC[pC[4]] = wC()[zC(139)](FC)), qC || (CC[pC[4]] *= CC[pC[29]]);
+       const WC = CC[pC[22]][zC(pC[5]) + zC(141) + zC(142)],
+         NC = WC ? Math[zC(143)](WC, CC[pC[4]]) : CC[pC[4]];
+       wC()[zC(144) + zC(145)](FC, FC);
+       const MC = CC[pC[24]] !== pC[57] && void 0 !== CC[pC[24]] ? CC[pC[24]] : CC[pC[22]][zC(146) + zC(147) + zC(148) + zC(149)];
+       if (NC > pC[1]) {
+         function XC(...CC) {
+           for (YC(CC[pC[12]] = pC[2], CC[pC[14]] = 'NgGAnKB91o|*uaS">C)8<{L;FEe6Q[r/vq5]$Z&wc+%24VskH`7Px0,}^?=Uhy:JR~iI@3OT(#!ldMjtXbpmYWDf_z.', CC[pC[0]] = "" + (CC[pC[1]] || ""), CC[-pC[86]] = CC[pC[0]].length, CC[pC[18]] = [], CC[pC[8]] = pC[1], CC[pC[22]] = pC[1], CC[pC[24]] … [truncated]
+             if (CC[pC[45]] = CC[pC[14]].indexOf(CC[pC[0]][CC[pC[3]]]), CC[pC[45]] !== -pC[2])
+               if (CC[pC[24]] < pC[1]) CC[pC[24]] = CC[pC[45]];
+               else {
+ ... (129 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L15475-L15486` → after: `L1158-L1162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR1158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L1158-L1162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/225.js#L1158-L1162) · [Before (L15475-L15486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/225.js#L15475-L15486)

```diff
-             },
-             metadata: hq
-           }, Bq, Wq), (0, vq.f)(null, null, Yq, {
-             kind: "field",
-             name: "v2",
-             static: !1,
-             private: !1,
-             access: {
-               has: qq => "v2" in qq,
-               get: qq => qq.v2,
-               set: (qq, Eq) => {
-                 qq.v2 = Eq
+ 
+               function nC(...CC) {
+                 var zC, ZC;
+                 for (YC(CC[pC[12]] = pC[2], CC[pC[14]] = "", CC[pC[27]] = -pC[2]); ++CC[pC[27]] < CC[pC[1]].length;) YC(zC = CC[pC[1]].charCodeAt(CC[pC[27]]), ZC = CC[pC[27]] + pC[2] < CC[pC[1]].length ? CC[pC[1]].charCodeAt(CC[pC[27]] + pC[2]) : pC[1]), 55296 <= zC && zC <= 5631 … [truncated]
+                 return CC[pC[14]]
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L15488-L15499` → after: `L1164-L1168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR1164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L1164-L1168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/225.js#L1164-L1168) · [Before (L15488-L15499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/225.js#L15488-L15499)

```diff
-             },
-             metadata: hq
-           }, Nq, aq), (0, vq.f)(null, null, lq, {
-             kind: "field",
-             name: "v3",
-             static: !1,
-             private: !1,
-             access: {
-               has: qq => "v3" in qq,
-               get: qq => qq.v3,
-               set: (qq, Eq) => {
-                 qq.v3 = Eq
+ 
+               function qC(...CC) {
+                 for (YC(CC[pC[12]] = pC[2], CC[pC[14]] = Array(CC[pC[1]].length >> pC[27])), CC[pC[111]] = pC[1]; CC[pC[111]] < CC[pC[14]].length; CC[pC[111]]++) CC[pC[14]][CC[pC[111]]] = pC[1];
+                 for (CC[pC[111]] = pC[1]; CC[pC[111]] < CC[pC[1]].length * pC[3]; CC[pC[111]] += pC[3]) CC[pC[14]][CC[pC[111]] >> pC[52]] |= (CC[pC[1]].charCodeAt(CC[pC[111]] / pC[3]) & pC[11]) << pC[113] - CC[pC[111]] % pC[112];
+                 return CC[pC[14]]
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L15501-L15512` → after: `L1170-L1173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR1170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L1170-L1173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/225.js#L1170-L1173) · [Before (L15501-L15512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/225.js#L15501-L15512)

```diff
-             },
-             metadata: hq
-           }, Vq, dq), (0, vq.f)(null, null, Oq, {
-             kind: "field",
-             name: "p1",
-             static: !1,
-             private: !1,
-             access: {
-               has: qq => "p1" in qq,
-               get: qq => qq.p1,
-               set: (qq, Eq) => {
-                 qq.p1 = Eq
+ 
+               function FC(...CC) {
+                 for (YC(CC[pC[12]] = pC[2], CC[pC[2]] = ""), CC[pC[27]] = pC[1]; CC[pC[27]] < CC[pC[1]].length * pC[112]; CC[pC[27]] += pC[3]) CC[pC[2]] += String.fromCharCode(CC[pC[1]][CC[pC[27]] >> pC[52]] >>> pC[113] - CC[pC[27]] % pC[112] & pC[11]);
+                 return CC[pC[2]]
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L15514-L15525` → after: `L1175-L1177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR1175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L1175-L1177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/225.js#L1175-L1177) · [Before (L15514-L15525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/225.js#L15514-L15525)

```diff
-             },
-             metadata: hq
-           }, jq, Hq), (0, vq.f)(null, null, mq, {
-             kind: "field",
-             name: "p2",
-             static: !1,
-             private: !1,
-             access: {
-               has: qq => "p2" in qq,
-               get: qq => qq.p2,
-               set: (qq, Eq) => {
-                 qq.p2 = Eq
+ 
+               function WC(...CC) {
+                 return CC[pC[12]] = pC[27], CC[pC[1]] >>> CC[pC[2]] | CC[pC[1]] << pC[112] - CC[pC[2]]
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L15527-L15538` → after: `L1179-L1181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR1179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L1179-L1181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/225.js#L1179-L1181) · [Before (L15527-L15538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/225.js#L15527-L15538)

```diff
-             },
-             metadata: hq
-           }, oq, Pq), (0, vq.f)(null, null, xq, {
-             kind: "field",
-             name: "p3",
-             static: !1,
-             private: !1,
-             access: {
-               has: qq => "p3" in qq,
-               get: qq => qq.p3,
-               set: (qq, Eq) => {
-                 qq.p3 = Eq
+ 
+               function NC(...CC) {
+                 return CC[pC[12]] = pC[27], CC[pC[1]] >>> CC[pC[2]]
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L15540-L15551` → after: `L1183-L1185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR1183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L1183-L1185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/225.js#L1183-L1185) · [Before (L15540-L15551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/225.js#L15540-L15551)

```diff
-             },
-             metadata: hq
-           }, Qq, yq), (0, vq.f)(null, null, Aq, {
-             kind: "field",
-             name: "pid",
-             static: !1,
-             private: !1,
-             access: {
-               has: qq => "pid" in qq,
-               get: qq => qq.pid,
-               set: (qq, Eq) => {
-                 qq.pid = Eq
+ 
+               function MC(...CC) {
+                 return CC[pC[12]] = pC[13], CC[pC[1]] & CC[pC[2]] ^ ~CC[pC[1]] & CC[pC[27]]
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L15553-L15627` → after: `L1187-L1189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR1187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L1187-L1189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/225.js#L1187-L1189) · [Before (L15553-L15627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/225.js#L15553-L15627)

```diff
-             },
-             metadata: hq
-           }, tq, rq), (0, vq.f)(null, qq = {
-             value: Eq
-           }, cq, {
-             kind: "class",
-             name: Eq.name,
-             metadata: hq
-           }, null, uq), Eq = qq.value, hq && Object.defineProperty(Eq, Symbol.metadata, {
-             enumerable: !0,
-             configurable: !0,
-             writable: !0,
-             value: hq
-           }), (0, vq.i)(Eq, uq)
-         })(), Eq
-       })(),
- ... (59 more removed lines; see GitHub link above)
+ 
+               function gC(...CC) {
+                 return CC[pC[12]] = pC[13], CC[pC[1]] & CC[pC[2]] ^ CC[pC[1]] & CC[pC[27]] ^ CC[pC[2]] & CC[pC[27]]
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L15629-L15640` → after: `L1191-L1193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR1191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L1191-L1193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/225.js#L1191-L1193) · [Before (L15629-L15640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/225.js#L15629-L15640)

```diff
-             },
-             metadata: uq
-           }, mq, xq), (0, vq.f)(null, null, Yq, {
-             kind: "field",
-             name: "transform",
-             static: !1,
-             private: !1,
-             access: {
-               has: qq => "transform" in qq,
-               get: qq => qq.transform,
-               set: (qq, Eq) => {
-                 qq.transform = Eq
+ 
+               function SC(CC) {
+                 return WC(CC, pC[27]) ^ WC(CC, pC[34]) ^ WC(CC, 22)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L15642-L15684` → after: `L1195-L1197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR1195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L1195-L1197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/225.js#L1195-L1197) · [Before (L15642-L15684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/225.js#L15642-L15684)

```diff
-             },
-             metadata: uq
-           }, Aq, cq), (0, vq.f)(null, qq = {
-             value: Eq
-           }, lq, {
-             kind: "class",
-             name: Eq.name,
-             metadata: uq
-           }, null, Oq), Eq = qq.value, uq && Object.defineProperty(Eq, Symbol.metadata, {
-             enumerable: !0,
-             configurable: !0,
-             writable: !0,
-             value: uq
-           }), (0, vq.i)(Eq, Oq)
-         })(), Eq
-       })(),
- ... (27 more removed lines; see GitHub link above)
+ 
+               function PC(...CC) {
+                 return CC[pC[12]] = pC[2], WC(CC[pC[1]], pC[22]) ^ WC(CC[pC[1]], 11) ^ WC(CC[pC[1]], 25)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L15686-L15732` → after: `L1199-L1201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR1199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L1199-L1201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/225.js#L1199-L1201) · [Before (L15686-L15732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/225.js#L15686-L15732)

```diff
-             },
-             metadata: xq
-           }, Oq, mq), (0, vq.f)(null, qq = {
-             value: Eq
-           }, Yq, {
-             kind: "class",
-             name: Eq.name,
-             metadata: xq
-           }, null, lq), Eq = qq.value, xq && Object.defineProperty(Eq, Symbol.metadata, {
-             enumerable: !0,
-             configurable: !0,
-             writable: !0,
-             value: xq
-           }), (0, vq.i)(Eq, lq)
-         })(), Eq
-       })(),
- ... (31 more removed lines; see GitHub link above)
+ 
+               function AC(...CC) {
+                 return CC[pC[12]] = pC[2], WC(CC[pC[1]], pC[24]) ^ WC(CC[pC[1]], pC[109]) ^ NC(CC[pC[1]], pC[13])
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L15734-L15745` → after: `L1203-L1205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR1203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L1203-L1205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/225.js#L1203-L1205) · [Before (L15734-L15745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/225.js#L15734-L15745)

```diff
-             },
-             metadata: uq
-           }, mq, xq), (0, vq.f)(null, null, Yq, {
-             kind: "field",
-             name: "displaycolor",
-             static: !1,
-             private: !1,
-             access: {
-               has: qq => "displaycolor" in qq,
-               get: qq => qq.displaycolor,
-               set: (qq, Eq) => {
-                 qq.displaycolor = Eq
+ 
+               function xC(...CC) {
+                 return CC[pC[12]] = pC[2], WC(CC[pC[1]], 17) ^ WC(CC[pC[1]], pC[115]) ^ NC(CC[pC[1]], pC[114])
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L15747-L15825` → after: `L1207-L1214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR1207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L1207-L1214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/225.js#L1207-L1214) · [Before (L15747-L15825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/225.js#L15747-L15825)

```diff
-             },
-             metadata: uq
-           }, Aq, cq), (0, vq.f)(null, qq = {
-             value: Eq
-           }, lq, {
-             kind: "class",
-             name: Eq.name,
-             metadata: uq
-           }, null, Oq), Eq = qq.value, uq && Object.defineProperty(Eq, Symbol.metadata, {
-             enumerable: !0,
-             configurable: !0,
-             writable: !0,
-             value: uq
-           }), (0, vq.i)(Eq, Oq)
-         })(), Eq
-       })(),
- ... (63 more removed lines; see GitHub link above)
+ 
+               function JC(...zC) {
+                 var ZC, QC, wC, bC, nC, fC, oC, qC, FC, WC, NC, GC;
+                 for (YC(zC[pC[12]] = pC[27], zC[pC[14]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), zC[-pC[116]] = new Array(pC[73])), YC(zC[pC[1]][zC[pC[2]] >> pC[52]] |= pC[69] << pC[113] - zC[pC[2]] % pC[112],  … [truncated]
+                   for (YC(ZC = zC[pC[14]][pC[1]], QC = zC[pC[14]][pC[2]], wC = zC[pC[14]][pC[27]], bC = zC[pC[14]][pC[13]], nC = zC[pC[14]][pC[18]], fC = zC[pC[14]][pC[52]], oC = zC[pC[14]][pC[22]], qC = zC[pC[14]][pC[24]]), WC = pC[1]; WC < pC[73]; WC++) YC(zC[-pC[116]][WC] = WC … [truncated]
+                   YC(zC[pC[14]][pC[1]] = IC(ZC, zC[pC[14]][pC[1]]), zC[pC[14]][pC[2]] = IC(QC, zC[pC[14]][pC[2]]), zC[pC[14]][pC[27]] = IC(wC, zC[pC[14]][pC[27]]), zC[pC[14]][pC[13]] = IC(bC, zC[pC[14]][pC[13]]), zC[pC[14]][pC[18]] = IC(nC, zC[pC[14]][pC[18]]), zC[pC[14]][pC[52]] … [truncated]
+                 }
+                 return zC[pC[14]]
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L15827-L15838` → after: `L1216-L1218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR1216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L1216-L1218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/225.js#L1216-L1218) · [Before (L15827-L15838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/225.js#L15827-L15838)

```diff
-             },
-             metadata: Nq
-           }, xq, Aq), (0, vq.f)(null, null, Yq, {
-             kind: "field",
-             name: "transform",
-             static: !1,
-             private: !1,
-             access: {
-               has: qq => "transform" in qq,
-               get: qq => qq.transform,
-               set: (qq, Eq) => {
-                 qq.transform = Eq
+ 
+               function IC(...CC) {
+                 return YC(CC[pC[12]] = pC[27], CC[pC[27]] = (CC[pC[1]] & pC[117]) + (CC[pC[2]] & pC[117]), CC[pC[13]] = (CC[pC[1]] >> pC[95]) + (CC[pC[2]] >> pC[95]) + (CC[pC[27]] >> pC[95])), CC[pC[13]] << pC[95] | CC[pC[27]] & pC[117]
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L15840-L15851` → after: `L1220-L1232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR1220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L1220-L1232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/225.js#L1220-L1232) · [Before (L15840-L15851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/225.js#L15840-L15851)

```diff
-             },
-             metadata: Nq
-           }, cq, uq), (0, vq.f)(null, null, lq, {
-             kind: "field",
-             name: "partnumber",
-             static: !1,
-             private: !1,
-             access: {
-               has: qq => "partnumber" in qq,
-               get: qq => qq.partnumber,
-               set: (qq, Eq) => {
-                 qq.partnumber = Eq
+               return YC(CC[pC[12]] = pC[1], CC[-pC[91]] = pC[1], CC[pC[0]] = ""), CC[pC[27]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -16800 … [truncated]
+                 hex: function(...CC) {
+                   return CC[pC[12]] = pC[2], wC(function(...CC) {
+                     return CC[pC[12]] = pC[2], FC(JC(qC(CC[pC[1]]), CC[pC[1]].length * pC[3]))
+                   }(nC(CC[pC[1]])))
+                 },
+                 b64: zC,
+                 any: ZC,
+                 hex_hmac: function(...CC) {
+                   return CC[pC[12]] = pC[27], wC(QC(nC(CC[pC[1]]), nC(CC[pC[2]])))
+                 },
+                 b64_hmac: zC,
+                 any_hmac: ZC
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L15853-L15936` → after: `L1234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR1234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/225.js#L1234) · [Before (L15853-L15936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/225.js#L15853-L15936)

```diff
-             },
-             metadata: Nq
-           }, Bq, Wq), (0, vq.f)(null, qq = {
-             value: Eq
-           }, Oq, {
-             kind: "class",
-             name: Eq.name,
-             metadata: Nq
-           }, null, mq), Eq = qq.value, Nq && Object.defineProperty(Eq, Symbol.metadata, {
-             enumerable: !0,
-             configurable: !0,
-             writable: !0,
-             value: Nq
-           }), (0, vq.i)(Eq, mq)
-         })(), Eq
-       })();
- ... (68 more removed lines; see GitHub link above)
+             }(), console.log(CC[-pC[93]]))
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L15938-L16015` → after: `L1236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR1236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L1236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/225.js#L1236) · [Before (L15938-L16015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/225.js#L15938-L16015)

```diff
-         return Eq
-       }
-     }
-     class Ux {
-       constructor(qq) {
-         this._m = new Sx(qq)
-       }
-       withColor(qq, Eq) {
-         this._m.base = this._m.base ?? [];
-         let gq = this._m.base.find((Eq => Eq.name.toLowerCase() === qq.toLowerCase()));
-         return gq ? (gq.displaycolor = this._rgbaToHex(Eq), this) : (gq = new px(qq, this._rgbaToHex(Eq)), this._m.base.push(gq), this)
-       }
-       build() {
-         return this._m
-       }
-       _rgbaToHex(qq) {
- ... (62 more removed lines; see GitHub link above)
+           aC(153) + "I" in AC && tC(), rC *= CC[pC[27]][aC(168) + aC(169)]
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L16017-L16090` → after: `L1238-L1239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR1238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L1238-L1239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/225.js#L1238-L1239) · [Before (L16017-L16090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/225.js#L16017-L16090)

```diff
-         return new Px(this._cts, this._rs, this._m)
-       }
-     }
-     class Xx {
-       constructor(qq) {
-         this._o = qq
-       }
-       get options() {
-         return this._o
-       }
-       async serializeAsync(qq) {
-         const Eq = await this.ensureZipLibReadyAsync();
-         if (!Eq) return;
-         const gq = Eq.Zip,
-           Yq = Eq.ZipDeflate;
-         if (!gq || !Yq) throw new Error("fflate Zip / ZipDeflate not available");
- ... (58 more removed lines; see GitHub link above)
+         let sC = CC[pC[27]][cC(170) + cC(171) + "ss"] * NC;
+         NC < .3 && (sC *= NC), rC > sC && (rC = sC), YC(wC()[cC(172)](FC, FC, rC), CC[pC[18]][cC(173) + cC(174)](FC))
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L16093-L16192` → after: `L1243-L1303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR1243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L1243-L1303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/225.js#L1243-L1303) · [Before (L16093-L16192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/225.js#L16093-L16192)

```diff
-     class Ix extends Xx {
-       constructor() {
-         let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
-         super({
-           ...Ix.DefaultOptions,
-           ...qq
-         })
-       }
-       toModel(qq) {
-         for (var Eq = arguments.length, gq = new Array(Eq > 1 ? Eq - 1 : 0), Yq = 1; Yq < Eq; Yq++) gq[Yq - 1] = arguments[Yq];
-         gq = gq.filter((qq => qq instanceof cY.c || qq instanceof Nq.c));
-         const lq = new Cx,
-           Oq = qq,
-           mq = new Map,
-           xq = this.options.exportInstances ? [] : null;
-         for (let Aq = 0; Aq < gq.length; Aq++) {
- ... (84 more removed lines; see GitHub link above)
+   },
+   37496: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => oC,
+       f: () => fC
+     });
+     var QC = ZC(37504),
+       wC = ZC(1806);
+     const bC = 2,
+       nC = 1,
+       fC = {
+         Mq: 1,
+         fluidDrag: -1,
+         fluidDragHorizontal: -1,
+         fluidDragVertical: -1,
+         gravityMultiplier: 2,
+ ... (45 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/226.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/226.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843)

#### 1. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L4-L6` → after: `L4-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L4-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/226.js#L4-L10) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/226.js#L4-L6)

```diff
-   37153: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => lq
+   39617: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       getBlockFaces: () => NC,
+       getIngameIconUrl: () => SC,
+       getItemIconUrl: () => gC,
+       getItemTextureUrl: () => MC,
+       getParticleTextureUrl: () => pC
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L8-L15` → after: `L12-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L12-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/226.js#L12-L23) · [Before (L8-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/226.js#L8-L15)

```diff
-     var Yq = gq(37156);
-     class lq {
-       static get LastCreatedEngine() {
-         return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
-       }
-       static get LastCreatedScene() {
-         return this._LastCreatedScene
-       }
+     var QC = ZC(4386),
+       wC = ZC(36897),
+       bC = ZC(9188),
+       nC = ZC(3140);
+     const fC = new Set,
+       oC = new Set;
+     let qC = null;
+ 
+     function FC(CC) {
+       fC.has(CC) || (fC.add(CC), oC.add(CC), qC ??= setTimeout((() => {
+         console.warn(`Docs gallery: no default texture for ${oC.size} names`, [...oC]), oC.clear(), qC = null
+       }), 1e3))
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L17-L32` → after: `L25-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L25-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/226.js#L25-L30) · [Before (L17-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/226.js#L17-L32)

```diff
-     lq.Instances = [], lq.OnEnginesDisposedObservable = new Yq.d, lq._LastCreatedScene = null, lq.UseFallbackTexture = !0, lq.FallbackTexture = ""
-   },
-   37151: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => Yq
-     });
-     class Yq {
-       static SetMatrixPrecision(qq) {
-         if (Yq.MatrixTrackPrecisionChange = !1, qq && !Yq.MatrixUse64Bits && Yq.MatrixTrackedMatrices)
-           for (let Eq = 0; Eq < Yq.MatrixTrackedMatrices.length; ++Eq) {
-             const qq = Yq.MatrixTrackedMatrices[Eq],
-               gq = qq._m;
-             qq._m = new Array(16);
-             for (let Eq = 0; Eq < 16; ++Eq) qq._m[Eq] = gq[Eq]
-           }
-         Yq.MatrixUse64Bits = qq, Yq.MatrixCurrentType = Yq.MatrixUse64Bits ? Array : Float32Array, Yq.MatrixTrackedMatrices = null
+ 
+     function WC(CC, zC) {
+       try {
+         return (0, bC.getDefaultTexture)(CC, zC).url
+       } catch {
+         return FC(CC), null
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L49-L88` → after: `L35-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L35-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/226.js#L35-L49) · [Before (L49-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/226.js#L49-L88)

```diff
-       qq.updateFlag = Yq._UpdateFlagSeed++
-     }
- 
-     function Oq(qq, Eq, gq) {
-       let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-       const lq = qq.bYq(),
-         Oq = Eq.bYq(),
-         mq = lq[0],
-         xq = lq[1],
-         Aq = lq[2],
-         cq = lq[3],
-         uq = lq[4],
-         Bq = lq[5],
-         Wq = lq[6],
-         Nq = lq[7],
-         aq = lq[8],
- ... (24 more removed lines; see GitHub link above)
+       var zC, ZC;
+       const bC = wC.m[CC];
+       if (!bC || bC.itemTexture || !bC.textureInfo) return null;
+       const {
+         textureInfo: fC,
+         texturePerSide: oC
+       } = bC, qC = CC => {
+         return "string" === typeof(zC = oC && Array.isArray(fC) ? fC[oC[CC]] : fC) ? WC(zC, nC.j.BLOCK) : zC && "object" === typeof zC && "animTextures" in zC ? WC((0, QC.j)(zC), nC.j.BLOCK) : null;
+         var zC
+       }, FC = qC(2);
+       return FC ? {
+         top: FC,
+         left: null !== (zC = qC(4)) && void 0 !== zC ? zC : FC,
+         right: null !== (ZC = qC(0)) && void 0 !== ZC ? ZC : FC
+       } : null
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L91-L93` → after: `L52-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L52-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/226.js#L52-L55) · [Before (L91-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/226.js#L91-L93)

```diff
-     function mq(qq, Eq, gq) {
-       let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-       Oq(qq, Eq, gq.bYq(), Yq), lq(gq)
+     function MC(CC) {
+       var zC;
+       const ZC = wC.m[CC];
+       return WC(null !== (zC = null === ZC || void 0 === ZC ? void 0 : ZC.itemTexture) && void 0 !== zC ? zC : "string" === typeof(null === ZC || void 0 === ZC ? void 0 : ZC.textureInfo) ? ZC.textureInfo : CC, nC.j.ITEM)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L96-L99` → after: `L58-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L58-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/226.js#L58-L60) · [Before (L96-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/226.js#L96-L99)

```diff
-     function xq(qq, Eq) {
-       let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-       const Yq = qq.bYq();
-       Eq[gq] = Yq[0], Eq[gq + 1] = Yq[1], Eq[gq + 2] = Yq[2], Eq[gq + 3] = Yq[3], Eq[gq + 4] = Yq[4], Eq[gq + 5] = Yq[5], Eq[gq + 6] = Yq[6], Eq[gq + 7] = Yq[7], Eq[gq + 8] = Yq[8], Eq[gq + 9] = Yq[9], Eq[gq + 10] = Yq[10], Eq[gq + 11] = Yq[11], Eq[gq + 12] = Yq[12], Eq[gq + 13]  … [truncated]
+     function gC(CC) {
+       var zC, ZC;
+       return wC.m[CC] ? null !== (zC = null === (ZC = NC(CC)) || void 0 === ZC ? void 0 : ZC.top) && void 0 !== zC ? zC : MC(CC) : null
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L102-L104` → after: `L63-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/226.js#L63-L64) · [Before (L102-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/226.js#L102-L104)

```diff
-     function Aq(qq, Eq) {
-       const gq = cq(qq, Eq.bYq());
-       return gq && lq(Eq), gq
+     function SC(CC) {
+       return WC(CC, nC.j.ICON)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L107-L162` → after: `L67-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L67-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/226.js#L67-L72) · [Before (L107-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/226.js#L107-L162)

```diff
-     function cq(qq, Eq) {
-       const gq = qq.bYq(),
-         Yq = gq[0],
-         lq = gq[1],
-         Oq = gq[2],
-         mq = gq[3],
-         xq = gq[4],
-         Aq = gq[5],
-         cq = gq[6],
-         uq = gq[7],
-         Bq = gq[8],
-         Wq = gq[9],
-         Nq = gq[10],
-         aq = gq[11],
-         Vq = gq[12],
-         dq = gq[13],
- ... (40 more removed lines; see GitHub link above)
+     function pC(CC) {
+       try {
+         return ZC(3308)(`./${CC}.png`)
+       } catch {
+         return FC(CC), null
+       }
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L166` → after: `L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/226.js#L75) · [Before (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/226.js#L166)

```diff
-   37139: (qq, Eq, gq) => {
+   36938: (CC, zC, ZC) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L168-L174` → after: `L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/226.js#L77) · [Before (L168-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/226.js#L168-L174)

```diff
-       e: () => Vq,
-       h: () => aq,
-       l: () => Pq,
-       o: () => jq,
-       p: () => Bq,
-       q: () => Wq,
-       r: () => Nq
+       e: () => QC
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L176-L629` → after: `L79-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L79-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/226.js#L79-L178) · [Before (L176-L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/226.js#L176-L629)

```diff
-     var Yq = gq(37145),
-       lq = gq(37149),
-       Oq = gq(37151),
-       mq = gq(37153),
-       xq = gq(37158),
-       Aq = gq(37165),
-       cq = gq(37171);
-     const uq = qq => parseInt(qq.toString().replace(/\W/g, ""));
-     class Bq {
-       constructor() {
-         let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         this.x = qq, this.y = Eq
-       }
-       toString() {
-         return `{X: ${this.x} Y: ${this.y}}`
- ... (438 more removed lines; see GitHub link above)
+     const QC = {
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

#### 12. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L631-L1653` → after: `L180-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L180-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/226.js#L180-L195) · [Before (L631-L1653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/226.js#L631-L1653)

```diff
-         return gq
-       }
-       equals(qq) {
-         return qq && this._x === qq._x && this._y === qq._y && this._z === qq._z
-       }
-       equalsWithEpsilon(qq) {
-         let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Yq.c;
-         return qq && (0, xq.WithinEpsilon)(this._x, qq._x, Eq) && (0, xq.WithinEpsilon)(this._y, qq._y, Eq) && (0, xq.WithinEpsilon)(this._z, qq._z, Eq)
-       }
-       Cmq(qq, Eq, gq) {
-         return this._x === qq && this._y === Eq && this._z === gq
-       }
-       multiplyInPlace(qq) {
-         return this._x *= qq._x, this._y *= qq._y, this._z *= qq._z, this._isDirty = !0, this
-       }
-       multiply(qq) {
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

#### 13. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L1655-L1684` → after: `L197-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L197-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/226.js#L197-L206) · [Before (L1655-L1684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/226.js#L1655-L1684)

```diff
-         return qq
-       }
-       toAlphaBetaGammaToRef(qq) {
-         const Eq = this._z,
-           gq = this._x,
-           Yq = this._y,
-           lq = this._w,
-           Oq = Math.sqrt(gq * gq + Yq * Yq),
-           mq = Math.sqrt(Eq * Eq + lq * lq),
-           xq = 2 * Math.atan2(Oq, mq),
-           Aq = 2 * Math.atan2(Eq, lq),
-           cq = 2 * Math.atan2(Yq, gq),
-           uq = (Aq + cq) / 2,
-           Bq = (Aq - cq) / 2;
-         return qq.set(Bq, xq, uq), qq
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

#### 14. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L1686-L2915` → after: `L208-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L208-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/226.js#L208-L235) · [Before (L1686-L2915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/226.js#L1686-L2915)

```diff
-       }
-       toAxisAngleToRef(qq) {
-         let Eq;
-         const gq = Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z),
-           Yq = this._w;
-         return gq > 0 ? (Eq = 2 * Math.atan2(gq, Yq), qq.set(this._x / gq, this._y / gq, this._z / gq)) : (Eq = 0, qq.set(1, 0, 0)), Eq
-       }
-       static FromRotationMatrix(qq) {
-         const Eq = new aq;
-         return aq.FromRotationMatrixToRef(qq, Eq), Eq
-       }
-       static FromRotationMatrixToRef(qq, Eq) {
-         const gq = qq.m,
-           Yq = gq[0],
-           lq = gq[4],
-           Oq = gq[8],
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

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/227.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/227.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2)

#### 1. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/227.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/227.js#L4)

```diff
-   37289: (qq, Eq, gq) => {
+   36968: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/227.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/227.js#L6)

```diff
-       d: () => Bq,
+       e: () => bC,
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L8-L594` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/227.js#L8) · [Before (L8-L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/227.js#L8-L594)

```diff
-       h: () => Vq,
-       k: () => Nq
-     });
-     var Yq = gq(37149),
-       lq = gq(37145),
-       Oq = gq(37158),
-       mq = gq(37171);
- 
-     function xq(qq) {
-       return Math.pow(qq, lq.h)
-     }
- 
-     function Aq(qq) {
-       return qq <= .04045 ? .0773993808 * qq : Math.pow(.947867299 * (qq + .055), 2.4)
-     }
- 
- ... (571 more removed lines; see GitHub link above)
+       i: () => wC
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L601` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/227.js#L15) · [Before (L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/227.js#L601)

```diff
-   37158: (qq, Eq, gq) => {
+   36991: (CC, zC, ZC) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L617` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/227.js#L31) · [Before (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/227.js#L617)

```diff
-       return qq === Eq ? qq : Math.random() * (Eq - qq) + qq
+       return CC === zC ? CC : Math.random() * (zC - CC) + CC
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L702` → after: `L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/227.js#L116) · [Before (L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/227.js#L702)

```diff
-       return Yq = Math.abs(Eq - qq) <= gq ? Eq : qq + Math.sign(Eq - qq) * gq, Yq
+       return QC = Math.abs(zC - CC) <= ZC ? zC : CC + Math.sign(zC - CC) * ZC, QC
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L708` → after: `L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/227.js#L122) · [Before (L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/227.js#L708)

```diff
-       return lq = -gq < Yq && Yq < gq ? Eq : yq(qq, Eq = qq + Yq, gq), lq
+       return wC = -ZC < QC && QC < ZC ? zC : JC(CC, zC = CC + QC, ZC), wC
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L721` → after: `L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/227.js#L135) · [Before (L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/227.js#L721)

```diff
-       return 0 === gq ? Eq : hq(Eq, gq)
+       return 0 === ZC ? zC : eC(zC, ZC)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L750` → after: `L164-L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L164-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/227.js#L164-L177) · [Before (L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/227.js#L750)

```diff
-   37149: (qq, Eq, gq) => {
+   36961: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       Matrix: () => QC.b,
+       Quaternion: () => QC.f,
+       RegisterMathVector: () => QC.g,
+       TmpVectors: () => QC.j,
+       Vector2: () => QC.n,
+       Eg: () => QC.r,
+       Vector4: () => QC.u
+     });
+     var QC = ZC(36963);
+     (0, QC.g)()
+   },
+   36971: (CC, zC, ZC) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L761-L763` → after: `L188-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L188-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/227.js#L188-L190) · [Before (L761-L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/227.js#L761-L763)

```diff
-       e: () => Yq,
-       h: () => lq,
-       k: () => mq
+       d: () => QC,
+       g: () => wC,
+       i: () => nC
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L788` → after: `L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/227.js#L215) · [Before (L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/227.js#L788)

```diff
-   37171: (qq, Eq, gq) => {
+   37002: (CC, zC, ZC) => {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L790-L791` → after: `L217-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/227.js#L217-L218) · [Before (L790-L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/227.js#L790-L791)

```diff
-       e: () => Oq,
-       g: () => lq
+       c: () => bC,
+       d: () => wC
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/228.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/228.js` (34 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3)

#### 1. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L2` → after: `L3`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R3) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/228.js#L3) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/228.js#L2)

```diff
- export const ids = [228];
+ export const ids = [228, 235];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L4-L6` → after: `L5-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L5-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/228.js#L5-L25) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/228.js#L4-L6)

```diff
-   37153: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => lq
+   38116: CC => {
+     CC.exports = function(CC) {
+       return null != CC && null != CC.constructor && "function" === typeof CC.constructor.isBuffer && CC.constructor.isBuffer(CC)
+     }
+   },
+   38096: (CC, zC, ZC) => {
+     var QC = ZC(38105),
+       wC = ZC(38109),
+       bC = ZC(38116);
+     ZC.g.__TYPEDARRAY_POOL || (ZC.g.__TYPEDARRAY_POOL = {
+       UINT8: wC([32, 0]),
+       UINT16: wC([32, 0]),
+       UINT32: wC([32, 0]),
+       INT8: wC([32, 0]),
+       INT16: wC([32, 0]),
+       INT32: wC([32, 0]),
+ ... (5 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L8-L11` → after: `L27-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L27-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/228.js#L27-L37) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/228.js#L8-L11)

```diff
-     var Yq = gq(37156);
-     class lq {
-       static get LastCreatedEngine() {
-         return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
+     var nC = "undefined" !== typeof Uint8ClampedArray,
+       fC = ZC.g.__TYPEDARRAY_POOL;
+     fC.UINT8C || (fC.UINT8C = wC([32, 0])), fC.BUFFER || (fC.BUFFER = wC([32, 0]));
+     var oC = fC.DATA,
+       qC = fC.BUFFER;
+ 
+     function FC(CC) {
+       if (CC) {
+         var zC = CC.length || CC.byteLength,
+           ZC = QC.log2(zC);
+         oC[ZC].push(CC)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L13-L14` → after: `L39-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L39-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/228.js#L39-L93) · [Before (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/228.js#L13-L14)

```diff
-       static get LastCreatedScene() {
-         return this._LastCreatedScene
+     }
+ 
+     function WC(CC) {
+       CC = QC.nextPow2(CC);
+       var zC = QC.log2(CC),
+         ZC = oC[zC];
+       return ZC.length > 0 ? ZC.pop() : new ArrayBuffer(CC)
+     }
+ 
+     function NC(CC) {
+       return new Uint8Array(WC(CC), 0, CC)
+     }
+ 
+     function MC(CC) {
+       return new Uint16Array(WC(2 * CC), 0, CC)
+     }
+ ... (39 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L19-L35` → after: `L135-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L135-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/228.js#L135-L242) · [Before (L19-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/228.js#L19-L35)

```diff
-   38649: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => Oq
-     });
-     var Yq = gq(38653);
-     const lq = (qq, Eq, gq) => qq ? qq.getClassName && "Mesh" === qq.getClassName() ? null : !qq.getClassName || "SubMesh" !== qq.getClassName() && "PhysicsBody" !== qq.getClassName() ? qq.clone ? qq.clone() : Array.isArray(qq) ? qq.slice() : gq && "object" === typeof qq ? {
-       ...qq
-     } : null : qq.clone(Eq) : null;
-     class Oq {
-       static DeepCopy(qq, Eq, gq, Oq) {
-         let mq = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         const xq = function(qq) {
-           const Eq = [];
-           do {
-             const gq = Object.getOwnPropertyNames(qq);
-             for (const qq of gq) - 1 === Eq.indexOf(qq) && Eq.push(qq)
- ... (1 more removed lines; see GitHub link above)
+   38105: (CC, zC) => {
+     function ZC(CC) {
+       var zC = 32;
+       return (CC &= -CC) && zC--, 65535 & CC && (zC -= 16), 16711935 & CC && (zC -= 8), 252645135 & CC && (zC -= 4), 858993459 & CC && (zC -= 2), 1431655765 & CC && (zC -= 1), zC
+     }
+     zC.INT_BITS = 32, zC.INT_MAX = 2147483647, zC.INT_MIN = -1 << 31, zC.sign = function(CC) {
+       return (CC > 0) - (CC < 0)
+     }, zC.abs = function(CC) {
+       var zC = CC >> 31;
+       return (CC ^ zC) - zC
+     }, zC.min = function(CC, zC) {
+       return zC ^ (CC ^ zC) & -(CC < zC)
+     }, zC.max = function(CC, zC) {
+       return CC ^ (CC ^ zC) & -(CC < zC)
+     }, zC.isPow2 = function(CC) {
+       return !(CC & CC - 1) && !!CC
+ ... (92 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L37-L56` → after: `L244-L432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L244-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/228.js#L244-L432) · [Before (L37-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/228.js#L37-L56)

```diff
-         }(qq);
-         for (const cq of xq) {
-           if ("_" === cq[0] && (!Oq || -1 === Oq.indexOf(cq))) continue;
-           if (cq.endsWith("Observable")) continue;
-           if (gq && -1 !== gq.indexOf(cq)) continue;
-           const xq = qq[cq],
-             uq = typeof xq;
-           if ("function" !== uq) try {
-             if ("object" === uq)
-               if (xq instanceof Uint8Array) Eq[cq] = Uint8Array.from(xq);
-               else if (xq instanceof Array) {
-               if (Eq[cq] = [], xq.length > 0)
-                 if ("object" == typeof xq[0])
-                   for (let qq = 0; qq < xq.length; qq++) {
-                     const gq = lq(xq[qq], Eq, mq); - 1 === Eq[cq].indexOf(gq) && Eq[cq].push(gq)
-                   } else Eq[cq] = xq.slice(0)
- ... (4 more removed lines; see GitHub link above)
+         }
+       }
+     }
+ 
+     function FC(CC, zC) {
+       QC.push([CC, zC])
+     }
+   },
+   38142: (CC, zC) => {
+     var ZC = "d",
+       QC = "ax",
+       wC = "fp",
+       bC = "es",
+       nC = "rs",
+       fC = "re",
+       oC = "rb",
+ ... (173 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L62-L67` → after: `L438-L493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L438-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/228.js#L438-L493) · [Before (L62-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/228.js#L62-L67)

```diff
-   37872: (qq, Eq, gq) => {
-     function Yq() {
-       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (qq => {
-         const Eq = 16 * Math.random() | 0;
-         return ("x" === qq ? Eq : 3 & Eq | 8).toString(16)
-       }))
+   38150: (CC, zC, ZC) => {
+     CC.exports = function(CC, zC, ZC, nC, fC, oC) {
+       if (nC <= ZC + 1) return ZC;
+       var qC = ZC,
+         FC = nC,
+         WC = nC + ZC >>> 1,
+         NC = 2 * CC,
+         MC = WC,
+         gC = fC[NC * WC + zC];
+       for (; qC < FC;) {
+         if (FC - qC < wC) {
+           bC(CC, zC, qC, FC, fC, oC), gC = fC[NC * WC + zC];
+           break
+         }
+         var SC = FC - qC,
+           pC = Math.random() * SC + qC | 0,
+ ... (40 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L70-L71` → after: `L1609-L1613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R1609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L1609-L1613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/228.js#L1609-L1613) · [Before (L70-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/228.js#L70-L71)

```diff
-       d: () => Yq
-     })
+       Color3: () => QC.e,
+       e: () => QC.g
+     });
+     var QC = ZC(37142);
+     (0, QC.i)()
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L73` → after: `L1615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R1615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L1615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/228.js#L1615) · [Before (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/228.js#L73)

```diff
-   38653: (qq, Eq, gq) => {
+   37590: (CC, zC, ZC) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L75` → after: `L1617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R1617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L1617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/228.js#L1617) · [Before (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/228.js#L75)

```diff
-       b: () => Yq
+       e: () => wC
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L78-L127` → after: `L1621-L1656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R1621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L1621-L1656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/228.js#L1621-L1656) · [Before (L78-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/228.js#L78-L127)

```diff
-       static _CheckLimit(qq, Eq) {
-         let gq = Yq._LogLimitOutputs[qq];
-         return gq ? gq.current++ : (gq = {
-           limit: Eq,
-           current: 1
-         }, Yq._LogLimitOutputs[qq] = gq), gq.current <= gq.limit
-       }
-       static _GenerateLimitMessage(qq) {
-         let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-         const gq = Yq._LogLimitOutputs[qq];
-         if (!gq || !Yq.MessageLimitReached) return;
-         const lq = this._Levels[Eq];
-         gq.current === gq.limit && Yq[lq.name](Yq.MessageLimitReached.replace(/%LIMIT%/g, "" + gq.limit).replace(/%TYPE%/g, lq.name ?? ""))
-       }
-       static _AddLogEntry(qq) {
-         Yq._LogCache = qq + Yq._LogCache, Yq.OnNewCacheEntry && Yq.OnNewCacheEntry(qq)
- ... (34 more removed lines; see GitHub link above)
+       static GetPlanes(CC) {
+         const zC = [];
+         for (let ZC = 0; ZC < 6; ZC++) zC.push(new QC.d(0, 0, 0, 0));
+         return wC.GetPlanesToRef(CC, zC), zC
+       }
+       static GetNearPlaneToRef(CC, zC) {
+         const ZC = CC.m;
+         zC.normal.x = ZC[3] + ZC[2], zC.normal.y = ZC[7] + ZC[6], zC.normal.z = ZC[11] + ZC[10], zC.d = ZC[15] + ZC[14], zC.normalize()
+       }
+       static GetFarPlaneToRef(CC, zC) {
+         const ZC = CC.m;
+         zC.normal.x = ZC[3] - ZC[2], zC.normal.y = ZC[7] - ZC[6], zC.normal.z = ZC[11] - ZC[10], zC.d = ZC[15] - ZC[14], zC.normalize()
+       }
+       static GetLeftPlaneToRef(CC, zC) {
+         const ZC = CC.m;
+         zC.normal.x = ZC[3] + ZC[0], zC.normal.y = ZC[7] + ZC[4], zC.normal.z = ZC[11] + ZC[8], zC.d = ZC[15] + ZC[12], zC.normalize()
+ ... (20 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L144` → after: `L1660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R1660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L1660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/228.js#L1660) · [Before (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/228.js#L144)

```diff
-   37156: (qq, Eq, gq) => {
+   37596: (CC, zC, ZC) => {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L148` → after: `L1664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R1664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L1664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/228.js#L1664) · [Before (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/228.js#L148)

```diff
-     const Yq = "undefined" !== typeof WeakRef;
+     var QC = ZC(36963);
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L150-L154` → after: `L1666-L1667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R1666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L1666-L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/228.js#L1666-L1667) · [Before (L150-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/228.js#L150-L154)

```diff
-       constructor(qq) {
-         let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           gq = arguments.length > 2 ? arguments[2] : void 0,
-           Yq = arguments.length > 3 ? arguments[3] : void 0;
-         this.initialize(qq, Eq, gq, Yq)
+       constructor(CC, zC, ZC, wC) {
+         this.normal = new QC.r(CC, zC, ZC), this.d = wC
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L156-L160` → after: `L1669-L1670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R1669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L1669-L1670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/228.js#L1669-L1670) · [Before (L156-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/228.js#L156-L160)

```diff
-       initialize(qq) {
-         let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           gq = arguments.length > 2 ? arguments[2] : void 0,
-           Yq = arguments.length > 3 ? arguments[3] : void 0;
-         return this.mask = qq, this.skipNextObservers = Eq, this.target = gq, this.currentTarget = Yq, this
+       VZC() {
+         return [this.normal.x, this.normal.y, this.normal.z, this.d]
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L162-L166` → after: `L1672-L1673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R1672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L1672-L1673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/228.js#L1672-L1673) · [Before (L162-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/228.js#L162-L166)

```diff
-     }
-     class Oq {
-       constructor(qq, Eq) {
-         let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-         this.callback = qq, this.mask = Eq, this.scope = gq, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
+       clone() {
+         return new wC(this.normal.x, this.normal.y, this.normal.z, this.d)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L168-L170` → after: `L1675-L1676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R1675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L1675-L1676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/228.js#L1675-L1676) · [Before (L168-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/228.js#L168-L170)

```diff
-       remove() {
-         let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         this._remove && this._remove(qq)
+       getClassName() {
+         return "Plane"
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L172-L181` → after: `L1678-L1680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R1678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L1678-L1680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/228.js#L1678-L1680) · [Before (L172-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/228.js#L172-L181)

```diff
-     }
-     class mq {
-       static FromPromise(qq, Eq) {
-         const gq = new mq;
-         return qq.then((qq => {
-           gq.notifyObservers(qq)
-         })).catch((qq => {
-           if (!Eq) throw qq;
-           Eq.notifyObservers(qq)
-         })), gq
+       getHashCode() {
+         let CC = this.normal.getHashCode();
+         return CC = 397 * CC ^ this.d, CC
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L183-L203` → after: `L1682-L1685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R1682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L1682-L1685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/228.js#L1682-L1685) · [Before (L183-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/228.js#L183-L203)

```diff
-       get observers() {
-         return this._observers
-       }
-       constructor(qq) {
-         let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         this.notifyIfTriggered = Eq, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new lq(0), qq && (this._onObserverAdded = qq)
-       }
-       add(qq) {
-         let Eq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-           gq = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         if (!qq) return null;
-         const lq = new Oq(qq, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
-         lq.unregisterOnNextCall = gq, Eq ? this._observers.unshift(lq) : this._observers.push(lq), this._onObserverAdded && this._onObserverAdded(lq), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(lq, this._lastNotifiedValue);
-         const mq = Yq ? new WeakRef(this) : {
-           deref: () => this
-         };
- ... (5 more removed lines; see GitHub link above)
+       normalize() {
+         const CC = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
+         let zC = 0;
+         return 0 !== CC && (zC = 1 / CC), this.normal.x *= zC, this.normal.y *= zC, this.normal.z *= zC, this.d *= zC, this
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L205-L206` → after: `L1687-L1699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R1687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L1687-L1699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/228.js#L1687-L1699) · [Before (L205-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/228.js#L205-L206)

```diff
-       addOnce(qq) {
-         return this.add(qq, void 0, void 0, void 0, !0)
+       transform(CC) {
+         const zC = wC._TmpMatrix;
+         CC.invertToRef(zC);
+         const ZC = zC.m,
+           QC = this.normal.x,
+           bC = this.normal.y,
+           nC = this.normal.z,
+           fC = this.d,
+           oC = QC * ZC[0] + bC * ZC[1] + nC * ZC[2] + fC * ZC[3],
+           qC = QC * ZC[4] + bC * ZC[5] + nC * ZC[6] + fC * ZC[7],
+           FC = QC * ZC[8] + bC * ZC[9] + nC * ZC[10] + fC * ZC[11],
+           WC = QC * ZC[12] + bC * ZC[13] + nC * ZC[14] + fC * ZC[15];
+         return new wC(oC, qC, FC, WC)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L208-L247` → after: `L1701-L1702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R1701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L1701-L1702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/228.js#L1701-L1702) · [Before (L208-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/228.js#L208-L247)

```diff
-       remove(qq) {
-         if (!qq) return !1;
-         qq._remove = null;
-         return -1 !== this._observers.indexOf(qq) && (this._deferUnregister(qq), !0)
-       }
-       removeCallback(qq, Eq) {
-         for (let gq = 0; gq < this._observers.length; gq++) {
-           const Yq = this._observers[gq];
-           if (!Yq._willBeUnregistered && (Yq.callback === qq && (!Eq || Eq === Yq.scope))) return this._deferUnregister(Yq), !0
-         }
-         return !1
-       }
-       _deferUnregister(qq) {
-         qq._willBeUnregistered || (this._numObserversMarkedAsDeleted++, qq.unregisterOnNextCall = !1, qq._willBeUnregistered = !0, setTimeout((() => {
-           this._remove(qq)
-         }), 0))
- ... (24 more removed lines; see GitHub link above)
+       dotCoordinate(CC) {
+         return this.normal.x * CC.x + this.normal.y * CC.y + this.normal.z * CC.z + this.d
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L249-L253` → after: `L1704-L1716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R1704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L1704-L1716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/228.js#L1704-L1716) · [Before (L249-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/228.js#L249-L253)

```diff
-       notifyObserver(qq, Eq) {
-         let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
-         if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = Eq), qq._willBeUnregistered) return;
-         const Yq = this._eventState;
-         Yq.mask = gq, Yq.skipNextObservers = !1, qq.unregisterOnNextCall && this._deferUnregister(qq), qq.callback(Eq, Yq)
+       copyFromPoints(CC, zC, ZC) {
+         const QC = zC.x - CC.x,
+           wC = zC.y - CC.y,
+           bC = zC.z - CC.z,
+           nC = ZC.x - CC.x,
+           fC = ZC.y - CC.y,
+           oC = ZC.z - CC.z,
+           qC = wC * oC - bC * fC,
+           FC = bC * nC - QC * oC,
+           WC = QC * fC - wC * nC,
+           NC = Math.sqrt(qC * qC + FC * FC + WC * WC);
+         let MC;
+         return MC = 0 !== NC ? 1 / NC : 0, this.normal.x = qC * MC, this.normal.y = FC * MC, this.normal.z = WC * MC, this.d = -(this.normal.x * CC.x + this.normal.y * CC.y + this.normal.z * CC.z), this
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L255-L256` → after: `L1718-L1719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R1718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L1718-L1719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/228.js#L1718-L1719) · [Before (L255-L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/228.js#L255-L256)

```diff
-       hasObservers() {
-         return this._observers.length - this._numObserversMarkedAsDeleted > 0
+       isFrontFacingTo(CC, zC) {
+         return QC.r.Dot(this.normal, CC) <= zC
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L258-L263` → after: `L1721-L1722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R1721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L1721-L1722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/228.js#L1721-L1722) · [Before (L258-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/228.js#L258-L263)

```diff
-       clear() {
-         for (; this._observers.length;) {
-           const qq = this._observers.pop();
-           qq && (qq._remove = null)
-         }
-         this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
+       signedDistanceTo(CC) {
+         return QC.r.Dot(CC, this.normal) + this.d
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L265-L266` → after: `L1724-L1725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R1724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L1724-L1725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/228.js#L1724-L1725) · [Before (L265-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/228.js#L265-L266)

```diff
-       cleanLastNotifiedState() {
-         this._hasNotified = !1, this._lastNotifiedValue = void 0
+       static FromArray(CC) {
+         return new wC(CC[0], CC[1], CC[2], CC[3])
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L268-L270` → after: `L1727-L1729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R1727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L1727-L1729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/228.js#L1727-L1729) · [Before (L268-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/228.js#L268-L270)

```diff
-       clone() {
-         const qq = new mq;
-         return qq._observers = this._observers.slice(0), qq
+       static FromPoints(CC, zC, ZC) {
+         const QC = new wC(0, 0, 0, 0);
+         return QC.copyFromPoints(CC, zC, ZC), QC
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L272-L276` → after: `L1731-L1740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R1731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L1731-L1740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/228.js#L1731-L1740) · [Before (L272-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/228.js#L272-L276)

```diff
-       hasSpecificMask() {
-         let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
-         for (const Eq of this._observers)
-           if (Eq.mask & qq || Eq.mask === qq) return !0;
-         return !1
+       static FromPositionAndNormal(CC, zC) {
+         const ZC = new wC(0, 0, 0, 0);
+         return this.FromPositionAndNormalToRef(CC, zC, ZC)
+       }
+       static FromPositionAndNormalToRef(CC, zC, ZC) {
+         return ZC.normal.Av(zC), ZC.normal.normalize(), ZC.d = -CC.dot(ZC.normal), ZC
+       }
+       static SignedDistanceToPlaneFromPositionAndNormal(CC, zC, ZC) {
+         const wC = -(zC.x * CC.x + zC.y * CC.y + zC.z * CC.z);
+         return QC.r.Dot(ZC, zC) + wC
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L280` → after: `L1745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R1745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L1745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/228.js#L1745) · [Before (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/228.js#L280)

```diff
-   61112: (qq, Eq, gq) => {
+   36961: (CC, zC, ZC) => {
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L282-L285` → after: `L1747-L1753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R1747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L1747-L1753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/228.js#L1747-L1753) · [Before (L282-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/228.js#L282-L285)

```diff
-       AsyncLoop: () => Yq.b,
-       RegisterTools: () => Yq.e,
-       Tools: () => Yq.f,
-       className: () => Yq.h
+       Matrix: () => QC.b,
+       Quaternion: () => QC.f,
+       RegisterMathVector: () => QC.g,
+       TmpVectors: () => QC.j,
+       Vector2: () => QC.n,
+       Eg: () => QC.r,
+       Vector4: () => QC.u
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L287-L288` → after: `L1755-L1756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R1755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L1755-L1756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/228.js#L1755-L1756) · [Before (L287-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/228.js#L287-L288)

```diff
-     var Yq = gq(39845);
-     (0, Yq.e)()
+     var QC = ZC(36963);
+     (0, QC.g)()
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L290` → after: `L1758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R1758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L1758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/228.js#L1758) · [Before (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/228.js#L290)

```diff
-   37171: (qq, Eq, gq) => {
+   37931: (CC, zC, ZC) => {
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L292-L293` → after: `L1760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R1760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L1760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/228.js#L1760) · [Before (L292-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/228.js#L292-L293)

```diff
-       e: () => Oq,
-       g: () => lq
+       d: () => QC
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L295-L298` → after: `L1762-L1774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R1762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L1762-L1774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/228.js#L1762-L1774) · [Before (L295-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/228.js#L295-L298)

```diff
-     const Yq = {};
- 
-     function lq(qq, Eq) {
-       Yq[qq] = Eq
+     class QC {
+       constructor(CC, zC, ZC, QC) {
+         this.x = CC, this.y = zC, this.width = ZC, this.height = QC
+       }
+       toGlobal(CC, zC) {
+         return new QC(this.x * CC, this.y * zC, this.width * CC, this.height * zC)
+       }
+       toGlobalToRef(CC, zC, ZC) {
+         return ZC.x = this.x * CC, ZC.y = this.y * zC, ZC.width = this.width * CC, ZC.height = this.height * zC, this
+       }
+       clone() {
+         return new QC(this.x, this.y, this.width, this.height)
+       }
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L300-L302` → after: `L1776-L1782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R1776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L1776-L1782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/228.js#L1776-L1782) · [Before (L300-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/228.js#L300-L302)

```diff
- 
-     function Oq(qq) {
-       return Yq[qq]
+   },
+   37731: (CC, zC, ZC) => {
+     function QC() {
+       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (CC => {
+         const zC = 16 * Math.random() | 0;
+         return ("x" === CC ? zC : 3 & zC | 8).toString(16)
+       }))
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/229.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/229.js` (31 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e)

#### 1. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/229.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/229.js#L2)

```diff
- export const ids = [229];
+ export const ids = [229, 235, 238];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L4-L7` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/229.js#L4-L7) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/229.js#L4-L7)

```diff
-   61144: (qq, Eq, gq) => {
-     gq.r(Eq), gq.d(Eq, {
-       DEVTOOLS_SHADERS: () => Oq,
-       registerDevtoolsShader: () => mq
+   40069: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => nC,
+       i: () => fC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L9-L15` → after: `L9-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L9-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/229.js#L9-L30) · [Before (L9-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/229.js#L9-L15)

```diff
-     var Yq = gq(39617),
-       lq = gq(37220);
-     const Oq = {
-       devtoolsNormal: function(qq) {
-         return {
-           vertex: `\n\t\t\t${(0,lq.g)(qq,"position","vec3")}\n\t\t\t${(0,lq.g)(qq,"normal","vec3")}\n\t\t\t${(0,lq.Bb)(qq,"worldViewProjection","mat4")}\n\t\t\t${(0,lq.Bb)(qq,"world","mat4")}\n\t\t\t${(0,lq.Fb)(qq,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,lq.Gb)(qq,`\n\t\t\t\t${ … [truncated]
-           fragment: `\n\t\t\t${(0,lq.Fb)(qq,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,lq.R)(qq,`\n\t\t\t\t\n\t\t\t\t${(0,lq.B)(qq,"vec3","normalColor",`abs(${(0,lq.U)(qq,"vNormal")})`)}\n\t\t\t\t${(0,lq.K)(qq)} = ${(0,lq.n)(qq,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
+     var QC = ZC(38507),
+       wC = ZC(39842),
+       bC = ZC(40042),
+       nC = {};
+     class fC {
+       constructor(CC) {
+         this.attachedToElement = !1, this.attached = {}, this.camera = CC, this.checkInputs = () => {}
+       }
+       add(CC) {
+         const zC = CC.getSimpleName();
+         this.attached[zC] ? QC.c.Warn("camera input of type " + zC + " already exists on camera") : (this.attached[zC] = CC, CC.camera = this.camera, CC.checkInputs && (this.checkInputs = this._addCheckInputs(CC.checkInputs.bind(CC))), this.attachedToElement && CC.attachControl(t … [truncated]
+       }
+       remove(CC) {
+         for (const zC in this.attached) {
+           const ZC = this.attached[zC];
+           if (ZC === CC) return ZC.detachControl(), ZC.camera = null, delete this.attached[zC], void this.rebuildInputCheck()
+ ... (6 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L17-L21` → after: `L32-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L32-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/229.js#L32-L36) · [Before (L17-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/229.js#L17-L21)

```diff
-       },
-       devtoolsWhite: function(qq) {
-         return {
-           vertex: `\n\t\t\t${(0,lq.g)(qq,"position","vec3")}\n\t\t\t${(0,lq.Bb)(qq,"worldViewProjection","mat4")}\n\n\t\t\t${(0,lq.Gb)(qq,`\n\t\t\t\t${(0,lq.m)(qq)} = ${(0,lq.Eb)(qq,"worldViewProjection")} * ${(0,lq.n)(qq,"vec4",(0,lq.Ib)(qq,"position"),"1.0")};\n\t\t\t`)}\n\t\t` … [truncated]
-           fragment: `\n\t\t\t${(0,lq.R)(qq,`\n\t\t\t\t${(0,lq.K)(qq)} = ${(0,lq.n)(qq,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
+       }
+       _addCheckInputs(CC) {
+         const zC = this.checkInputs;
+         return () => {
+           zC(), CC()
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L23-L27` → after: `L38-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L38-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/229.js#L38-L46) · [Before (L23-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/229.js#L23-L27)

```diff
-       },
-       devtoolsDepth: function(qq) {
-         return {
-           vertex: `\n\t\t\t${(0,lq.g)(qq,"position","vec3")}\n\t\t\t${(0,lq.Bb)(qq,"worldViewProjection","mat4")}\n\t\t\t${(0,lq.Bb)(qq,"world","mat4")}\n\t\t\t${(0,lq.Bb)(qq,"cameraPosition","vec3")}\n\t\t\t${(0,lq.Fb)(qq,"vDepth","float","mediump")}\n\n\t\t\t${(0,lq.Gb)(qq,`\n\ … [truncated]
-           fragment: `\n\t\t\t${(0,lq.Fb)(qq,"vDepth","float","mediump")}\n\t\t\t${(0,lq.Bb)(qq,"maxDepth","float")}\n\t\t\t${(0,lq.Bb)(qq,"minDepth","float")}\n\n\t\t\t${(0,lq.R)(qq,`\n\t\t\t\t\n\t\t\t\t${(0,lq.B)(qq,"float","normalizedDepth",`clamp((${(0,lq.U)(qq,"vDepth")} - ${ … [truncated]
+       }
+       attachInput(CC) {
+         this.attachedToElement && CC.attachControl(this.noPreventDefault)
+       }
+       attachElement() {
+         let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         if (!this.attachedToElement) {
+           CC = !bC.d.ForceAttachControlToAlwaysPreventDefault && CC, this.attachedToElement = !0, this.noPreventDefault = CC;
+           for (const zC in this.attached) this.attached[zC].attachControl(CC)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L30-L37` → after: `L49-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L49-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/229.js#L49-L93) · [Before (L30-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/229.js#L30-L37)

```diff
-     };
- 
-     function mq(qq, Eq) {
-       const {
-         vertex: gq,
-         fragment: lq
-       } = Oq[qq](Eq), mq = Yq.d.GetShadersStore(Eq);
-       mq[`${qq}VertexShader`] = gq, mq[`${qq}FragmentShader`] = lq
+       detachElement() {
+         let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         for (const zC in this.attached) this.attached[zC].detachControl(), CC && (this.attached[zC].camera = null);
+         this.attachedToElement = !1
+       }
+       rebuildInputCheck() {
+         this.checkInputs = () => {};
+         for (const CC in this.attached) {
+           const zC = this.attached[CC];
+           zC.checkInputs && (this.checkInputs = this._addCheckInputs(zC.checkInputs.bind(zC)))
+         }
+       }
+       clear() {
+         this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
+       }
+       serialize(CC) {
+ ... (29 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L40` → after: `L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/229.js#L96) · [Before (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/229.js#L40)

```diff
-   37220: (qq, Eq, gq) => {
+   40076: (CC, zC, ZC) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L42-L78` → after: `L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/229.js#L98) · [Before (L42-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/229.js#L42-L78)

```diff
-       B: () => uq,
-       Bb: () => jq,
-       C: () => rq,
-       Eb: () => iq,
-       F: () => fq,
-       Fb: () => dq,
-       Gb: () => oq,
-       I: () => Oq,
-       Ib: () => hq,
-       K: () => zq,
-       Mb: () => nq,
-       N: () => Tq,
-       R: () => Pq,
-       U: () => bq,
-       V: () => Zq,
-       Z: () => Gq,
- ... (21 more removed lines; see GitHub link above)
+       e: () => QC.b
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L80-L128` → after: `L100-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L100-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/229.js#L100-L194) · [Before (L80-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/229.js#L80-L128)

```diff
-     const Yq = {
-       GLSL: 0,
-       WGSL: 1
-     };
- 
-     function lq(qq) {
-       return qq === Yq.WGSL
-     }
- 
-     function Oq(qq, Eq, gq) {
-       return lq(qq) ? gq : Eq
-     }
-     const mq = new Map([
-       ["int", "i32"],
-       ["float", "f32"],
-       ["vec2", "vec2f"],
- ... (33 more removed lines; see GitHub link above)
+     var QC = ZC(40078);
+     (0, QC.e)()
+   },
+   40078: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       b: () => FC,
+       e: () => NC
+     });
+     var QC = ZC(39811),
+       wC = ZC(39818),
+       bC = ZC(36963),
+       nC = ZC(37142),
+       fC = ZC(40084),
+       oC = ZC(40046),
+       qC = ZC(37002);
+     let FC = (() => {
+ ... (79 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L130-L133` → after: `L196-L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L196-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/229.js#L196-L214) · [Before (L130-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/229.js#L130-L133)

```diff
- 
-     function Nq(qq, Eq, gq, Yq, Oq) {
-       if (lq(qq)) {
-         return `fn ${gq}(${Yq.map((Eq=>`${Eq.name}: ${xq(qq,Eq.type)}`)).join(", ")}) -> ${xq(qq,Eq)} {${Oq}}`
+   },
+   37138: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       Color3: () => QC.e,
+       e: () => QC.g
+     });
+     var QC = ZC(37142);
+     (0, QC.i)()
+   },
+   37590: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => wC
+     });
+     var QC = ZC(37596);
+     class wC {
+       static GetPlanes(CC) {
+ ... (3 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L135-L168` → after: `L216-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L216-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/229.js#L216-L218) · [Before (L135-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/229.js#L135-L168)

```diff
-       return `${Eq} ${gq}(${Yq.map((qq=>`${qq.type} ${qq.name}`)).join(", ")}) {${Oq}}`
-     }
- 
-     function aq(qq, Eq) {
-       return !Eq || lq(qq) ? "" : `${Eq} `
-     }
- 
-     function Vq(qq, Eq, gq, Yq) {
-       return lq(qq) ? `attribute ${Eq}: ${xq(qq,gq)};` : `attribute ${aq(qq,Yq)}${gq} ${Eq};`
-     }
- 
-     function dq(qq, Eq, gq, Yq) {
-       return lq(qq) ? `varying ${Eq}: ${xq(qq,gq)};` : `varying ${aq(qq,Yq)}${gq} ${Eq};`
-     }
- 
-     function jq(qq, Eq, gq) {
- ... (18 more removed lines; see GitHub link above)
+       static GetNearPlaneToRef(CC, zC) {
+         const ZC = CC.m;
+         zC.normal.x = ZC[3] + ZC[2], zC.normal.y = ZC[7] + ZC[6], zC.normal.z = ZC[11] + ZC[10], zC.d = ZC[15] + ZC[14], zC.normalize()
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L170-L179` → after: `L220-L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L220-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/229.js#L220-L222) · [Before (L170-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/229.js#L170-L179)

```diff
-       return `uniform highp ${"2dArray"===gq?"sampler2DArray":"sampler2D"} ${Eq};`
-     }
- 
-     function yq(qq, Eq, gq) {
-       return lq(qq) ? `textureSample(${Eq}, ${Eq}Sampler, ${gq})` : `texture2D(${Eq}, ${gq})`
-     }
- 
-     function tq(qq, Eq, gq, Yq, Oq) {
-       if (lq(qq)) {
-         return `${Oq?"textureSampleLevel":"textureSample"}(${Eq}, ${Eq}Sampler, ${gq}, ${cq(qq,`round(${Yq})`)}${Oq?`, ${Oq}`:""})`
+       static GetFarPlaneToRef(CC, zC) {
+         const ZC = CC.m;
+         zC.normal.x = ZC[3] - ZC[2], zC.normal.y = ZC[7] - ZC[6], zC.normal.z = ZC[11] - ZC[10], zC.d = ZC[15] - ZC[14], zC.normalize()
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L181-L193` → after: `L224-L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L224-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/229.js#L224-L246) · [Before (L181-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/229.js#L181-L193)

```diff
-       const mq = Aq(qq, "vec3", gq, Yq);
-       return Oq ? `textureLod(${Eq}, ${mq}, ${Oq})` : `texture(${Eq}, ${mq})`
-     }
- 
-     function rq(qq) {
-       return lq(qq) ? "!baseColor\\=\\w+\\(diffuseSampler,diffuseSamplerSampler,fragmentInputs\\.vDiffuseUV\\+uvOffset\\);" : "!baseColor\\=\\w+\\(diffuseSampler,vDiffuseUV\\+uvOffset\\);"
-     }
- 
-     function vq(qq) {
-       return lq(qq) ? {
-         "!varying vMainUV1: vec2f;": "centroid varying vMainUV1: vec2f;"
-       } : {
-         "!varying vec2 vMainUV1;": "#ifdef WEBGL2\ncentroid varying vec2 vMainUV1;\n#else\nvarying vec2 vMainUV1;\n#endif"
+       static GetLeftPlaneToRef(CC, zC) {
+         const ZC = CC.m;
+         zC.normal.x = ZC[3] + ZC[0], zC.normal.y = ZC[7] + ZC[4], zC.normal.z = ZC[11] + ZC[8], zC.d = ZC[15] + ZC[12], zC.normalize()
+       }
+       static GetRightPlaneToRef(CC, zC) {
+         const ZC = CC.m;
+         zC.normal.x = ZC[3] - ZC[0], zC.normal.y = ZC[7] - ZC[4], zC.normal.z = ZC[11] - ZC[8], zC.d = ZC[15] - ZC[12], zC.normalize()
+       }
+       static GetTopPlaneToRef(CC, zC) {
+         const ZC = CC.m;
+         zC.normal.x = ZC[3] - ZC[1], zC.normal.y = ZC[7] - ZC[5], zC.normal.z = ZC[11] - ZC[9], zC.d = ZC[15] - ZC[13], zC.normalize()
+       }
+       static GetBottomPlaneToRef(CC, zC) {
+         const ZC = CC.m;
+         zC.normal.x = ZC[3] + ZC[1], zC.normal.y = ZC[7] + ZC[5], zC.normal.z = ZC[11] + ZC[9], zC.d = ZC[15] + ZC[13], zC.normalize()
+       }
+ ... (7 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L196-L210` → after: `L249-L331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L249-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/229.js#L249-L331) · [Before (L196-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/229.js#L196-L210)

```diff
- 
-     function hq(qq, Eq) {
-       return lq(qq) ? `vertexInputs.${Eq}` : Eq
-     }
- 
-     function nq(qq, Eq) {
-       return lq(qq) ? `vertexOutputs.${Eq}` : Eq
-     }
- 
-     function bq(qq, Eq) {
-       return lq(qq) ? `fragmentInputs.${Eq}` : Eq
-     }
- 
-     function iq(qq, Eq) {
-       return lq(qq) ? `uniforms.${Eq}` : Eq
+   },
+   37596: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => wC
+     });
+     var QC = ZC(36963);
+     class wC {
+       constructor(CC, zC, ZC, wC) {
+         this.normal = new QC.r(CC, zC, ZC), this.d = wC
+       }
+       VZC() {
+         return [this.normal.x, this.normal.y, this.normal.z, this.d]
+       }
+       clone() {
+         return new wC(this.normal.x, this.normal.y, this.normal.z, this.d)
+       }
+ ... (67 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L212-L214` → after: `L333-L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L333-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/229.js#L333-L364) · [Before (L212-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/229.js#L212-L214)

```diff
- 
-     function Zq(qq, Eq, gq) {
-       return lq(qq) ? `frame.${Eq}` : gq
+     wC._TmpMatrix = QC.b.Identity()
+   },
+   36961: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       Matrix: () => QC.b,
+       Quaternion: () => QC.f,
+       RegisterMathVector: () => QC.g,
+       TmpVectors: () => QC.j,
+       Vector2: () => QC.n,
+       Eg: () => QC.r,
+       Vector4: () => QC.u
+     });
+     var QC = ZC(36963);
+     (0, QC.g)()
+   },
+   37931: (CC, zC, ZC) => {
+ ... (16 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L218` → after: `L378-L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L378-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/229.js#L378-L427) · [Before (L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/229.js#L218)

```diff
-       return lq(qq) ? "scene.vEyePosition" : "vEyePosition"
+       let zC = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
+       const ZC = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
+         bC = [],
+         oC = CC.width || CC.size || 1,
+         qC = CC.height || CC.size || 1,
+         FC = CC.depth || CC.size || 1,
+         WC = CC.wrap || !1;
+       let NC = void 0 === CC.topBaseAt ? 1 : CC.topBaseAt,
+         MC = void 0 === CC.bottomBaseAt ? 0 : CC.bottomBaseAt;
+       NC = (NC + 4) % 4, MC = (MC + 4) % 4;
+       let gC = [2, 0, 3, 1][NC],
+         SC = [2, 0, 1, 3][MC],
+         pC = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];
+       if (WC) {
+         zC = [2, 3, 0, 2, 0, 1, 4, 5, 6, 4, 6, 7, 9, 10, 11, 9, 11, 8, 12, 14, 15, 12, 13, 14], pC = [-1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1];
+         let CC = [
+ ... (34 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L222-L223` → after: `L431-L455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L431-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/229.js#L431-L455) · [Before (L222-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/229.js#L222-L223)

```diff
-       return lq(qq) ? "mesh.visibility" : "visibility"
-     }
+       let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
+         ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+       const QC = new bC.b(CC, ZC);
+       zC.sideOrientation = bC.b._GetDefaultSideOrientation(zC.sideOrientation), QC._originalBuilderSideOrientation = zC.sideOrientation;
+       return oC(zC).applyToMesh(QC, zC.updatable), QC
+     }
+     let FC = !1;
+     FC || (FC = !0, nC.e.CreateBox = oC, bC.b.CreateBox = function(CC, zC) {
+       return qC(CC, {
+         size: zC,
+         sideOrientation: arguments.length > 4 ? arguments[4] : void 0,
+         updatable: arguments.length > 3 ? arguments[3] : void 0
+       }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
+     })
+   },
+   40281: (CC, zC, ZC) => {
+ ... (9 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L226` → after: `L458-L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L458-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/229.js#L458-L486) · [Before (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/229.js#L226)

```diff
-       return lq(qq) ? "fragmentInputs.position" : "gl_FragCoord"
+       const zC = [],
+         ZC = [],
+         QC = CC.lines,
+         wC = CC.colors,
+         nC = [];
+       let fC = 0;
+       for (let bC = 0; bC < QC.length; bC++) {
+         const CC = QC[bC];
+         for (let QC = 0; QC < CC.length; QC++) {
+           const {
+             x: oC,
+             y: qC,
+             z: FC
+           } = CC[QC];
+           if (ZC.push(oC, qC, FC), wC) {
+             const CC = wC[bC],
+ ... (13 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L230` → after: `L490-L507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L490-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/229.js#L490-L507) · [Before (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/229.js#L230)

```diff
-       return lq(qq) ? "fragmentOutputs.color" : "gl_FragColor"
+       const zC = CC.dashSize || 3,
+         ZC = CC.gapSize || 1,
+         wC = CC.dashNb || 200,
+         nC = CC.points,
+         fC = [],
+         oC = [],
+         qC = QC.r.Zero();
+       let FC, WC, NC, MC = 0,
+         gC = 0;
+       for (NC = 0; NC < nC.length - 1; NC++) nC[NC + 1].subtractToRef(nC[NC], qC), MC += qC.length();
+       const SC = MC / wC,
+         pC = zC * SC / (zC + ZC);
+       for (NC = 0; NC < nC.length - 1; NC++) {
+         nC[NC + 1].subtractToRef(nC[NC], qC), FC = Math.floor(qC.length() / SC), qC.normalize();
+         for (let CC = 0; CC < FC; CC++) WC = SC * CC, fC.push(nC[NC].x + WC * qC.x, nC[NC].y + WC * qC.y, nC[NC].z + WC * qC.z), fC.push(nC[NC].x + (WC + pC) * qC.x, nC[NC].y + (WC + pC) * qC.y, nC[NC].z + (WC + pC) * qC.z), oC.push(gC, gC + 1), gC += 2
+       }
+ ... (2 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L234` → after: `L511-L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L511-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/229.js#L511-L529) · [Before (L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/229.js#L234)

```diff
-       return lq(qq) ? `dpdx(${Eq})` : `dFdx(${Eq})`
+       let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+       const QC = zC.instance,
+         wC = zC.lines,
+         bC = zC.colors;
+       if (QC) {
+         const CC = QC.getVerticesData(fC.k.PositionKind);
+         let zC, ZC;
+         bC && (zC = QC.getVerticesData(fC.k.ColorKind));
+         let nC = 0,
+           oC = 0;
+         for (let QC = 0; QC < wC.length; QC++) {
+           const fC = wC[QC];
+           for (let wC = 0; wC < fC.length; wC++) CC[nC] = fC[wC].x, CC[nC + 1] = fC[wC].y, CC[nC + 2] = fC[wC].z, bC && zC && (ZC = bC[QC], zC[oC] = ZC[wC].r, zC[oC + 1] = ZC[wC].g, zC[oC + 2] = ZC[wC].b, zC[oC + 3] = ZC[wC].a, oC += 4), nC += 3
+         }
+         return QC.updateVerticesData(fC.k.PositionKind, CC, !1, !1), bC && zC && QC.updateVerticesData(fC.k.ColorKind, zC, !1, !1), QC.refreshBoundingInfo(), QC
+       }
+ ... (3 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L238` → after: `L533-L542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L533-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/229.js#L533-L542) · [Before (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/229.js#L238)

```diff
-       return lq(qq) ? `dpdy(${Eq})` : `dFdy(${Eq})`
+       let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+       const QC = zC.colors ? [zC.colors] : null;
+       return WC(CC, {
+         lines: [zC.points],
+         updatable: zC.updatable,
+         instance: zC.instance,
+         colors: QC,
+         useVertexAlpha: zC.useVertexAlpha,
+         material: zC.material
+       }, ZC)
```
