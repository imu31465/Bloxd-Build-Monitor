# Changed — Bundle Modifications Report (Part 026 / 099)

- **Updated at**: `2026-11-26T22:08 JST`
- **Part**: `26 / 99` (**295** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 025](part-025.md) · [Part 027 →](part-027.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/262.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/262.js` (40 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b)

#### 28. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L124-L125` → after: `L2881-L2942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2881-L2942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/262.js#L2881-L2942) · [Before (L124-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/262.js#L124-L125)

```diff
-       static FromPositionAndNormalToRef(MM, rM, iM) {
-         return iM.normal.jR(rM), iM.normal.normalize(), iM.d = -MM.dot(iM.normal), iM
+     }
+     const QX = 5e3,
+       AX = 1;
+     let FX, oX = AX,
+       DX = 0;
+     const EX = !0;
+     let YX = EX;
+     tU.d.subscribe("_ignoreBasicBoards", (UU => {
+       YX = UU
+     })), (0, cU.onGameReset)((() => {
+       YX = EX
+     }));
+     let NX = null;
+     const IX = () => NX;
+     let pX, aX, tX;
+     var gX, kX, GX, BX, ZX, RX, PX, WX, dX;
+ ... (46 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L127-L129` → after: `L2944-L3117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2944-L3117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/262.js#L2944-L3117) · [Before (L127-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/262.js#L127-L129)

```diff
-       static SignedDistanceToPlaneFromPositionAndNormal(MM, rM, iM) {
-         const SM = -(rM.x * MM.x + rM.y * MM.y + rM.z * MM.z);
-         return OM.q.Dot(iM, rM) + SM
+       UU.inputs.down.on("crouch", (() => {
+         if (cX()) return;
+         if (!UU.mG.canCrouch) return;
+         const XU = UU.xG.nzU();
+         LU.e.get("clientEscMenuOptions").crouchIsToggle && (XU.crouchToggled = !XU.crouchToggled && !XU.padSneakToggled), XU.padSneakToggled = !1
+       }));
+       const zU = () => {
+         const UU = XU();
+         UU.isGun() && UU.inaccuracyCalculator.jump()
+       };
+       UU.inputs.down.on("jump", (UU => {
+         cX() || (zU(), pX(UU))
+       }));
+       for (const cU of GU.l) UU.inputs.down.on(cU, (UU => {
+         var XU, zU;
+         null !== (XU = (0, eU.b)().client) && void 0 !== XU && null !== (zU = XU.freeCameraController) && void 0 !== zU && zU.handlefreeCamKeyPress(cU, UU, !0) && (UU.preventDefault(), UU.stopPropagation())
+ ... (158 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L132` → after: `L3282-L3954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR3282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L3282-L3954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/262.js#L3282-L3954) · [Before (L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/262.js#L132)

```diff
-     SM._TmpMatrix = OM.d.Identity()
+     qX(gX = {}, kX = ['qe"S.EJD5l/]<Jk/N=VIE3wuW7=', '!#xh`q"$I`"', "q>9I^9(^>4>u%&if|_PgDW4V%oiVx<HezGA1S!E|ym0jw=xj", "|G0S%DV:Tf33<+ja1`ML.^.", 'y)zL}Cz9?<21hs:E(".N%?Pw{?Y$P(oE', "*v1X.&tqefGmQ2T", '/(;3`=N$r+Gj0`H"zk', "Rh)goujuY+8QK%o#f!#L6U[aR0pLN%XEWBB5KI^O", '{YWXu8~V{J> … [truncated]
+       qX(UU[LX[12]] = LX[1], UU[LX[15]] = [function() {
+         return globalThis
+       }, function() {
+         return global
+       }, function() {
+         return window
+       }, function() {
+         return new Function("return this")()
+       }], UU[LX[13]] = LX[17], UU[LX[4]] = []);
+       try {
+         qX(UU[LX[13]] = Object, UU[LX[4]][LX[26]]("".__proto__.constructor.name))
+       } catch (kX) {}
+       UU: for (UU[LX[14]] = LX[1]; UU[LX[14]] < UU[LX[15]][LX[12]]; UU[LX[14]]++) try {
+         for (UU[LX[13]] = UU[LX[15]][UU[LX[14]]](), UU[LX[10]] = LX[1]; UU[LX[10]] < UU[LX[4]][LX[12]]; UU[LX[10]]++)
+           if (typeof UU[LX[13]][UU[LX[4]][UU[LX[10]]]] === LX[16]) continue UU;
+ ... (657 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L134` → after: `L3956-L3990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR3956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L3956-L3990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/262.js#L3956-L3990) · [Before (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/262.js#L134)

```diff
-   39705: (MM, rM, iM) => {
+   39824: (UU, XU, zU) => {
+     zU.d(XU, {
+       e: () => QU,
+       f: () => yU
+     });
+     var cU = zU(37870);
+ 
+     function yU(UU, XU) {
+       return {
+         replayedClipName: UU,
+         replayedClipAgeSeconds: XU
+       }
+     }
+ 
+     function QU(UU, XU, zU, yU, QU) {
+       const AU = function(UU) {
+ ... (19 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L138-L141` → after: `L3994-L4005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR3994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L3994-L4005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/262.js#L3994-L4005) · [Before (L138-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/262.js#L138-L141)

```diff
-     var OM = iM(39711);
-     const SM = (MM, rM, iM) => MM ? MM.getClassName && "Mesh" === MM.getClassName() ? null : !MM.getClassName || "SubMesh" !== MM.getClassName() && "PhysicsBody" !== MM.getClassName() ? MM.clone ? MM.clone() : Array.isArray(MM) ? MM.slice() : iM && "object" === typeof MM ? {
-       ...MM
-     } : null : MM.clone(rM) : null;
+     var cU = zU(39158),
+       yU = zU(344),
+       QU = zU(3043);
+ 
+     function AU() {
+       var UU, XU, zU, cU;
+       const AU = (0, QU.e)(),
+         FU = null !== (UU = null === (XU = AU.xG.tzU(AU.pM)) || void 0 === XU ? void 0 : XU.selectedItem) && void 0 !== UU ? UU : null,
+         oU = FU ? (0, QU.b)().getItemStat(AU.pM, FU.name, "attackCooldownMs") : null,
+         DU = (0, yU.pd)(oU, null === FU || void 0 === FU || null === (zU = FU.attributes.customAttributes) || void 0 === zU || null === (cU = zU.enchantments) || void 0 === cU ? void 0 : cU["Attack Speed"]);
+       return Math.max(56, Math.ceil((DU + 30) / 3))
+     }
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L143-L151` → after: `L4007-L4185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR4007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L4007-L4185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/262.js#L4007-L4185) · [Before (L143-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/262.js#L143-L151)

```diff
-       static DeepCopy(MM, rM, iM, jM) {
-         let aM = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         const PM = function(MM) {
-           const rM = [];
-           do {
-             const iM = Object.getOwnPropertyNames(MM);
-             for (const MM of iM) - 1 === rM.indexOf(MM) && rM.push(MM)
-           } while (MM = Object.getPrototypeOf(MM));
-           return rM
+       constructor(UU, XU) {
+         this.tries = void 0, this.dueMs = void 0, this.intervalMs = void 0, this.tries = [UU], this.dueMs = UU, this.intervalMs = XU
+       }
+       spacedBy(UU, XU) {
+         if (UU === this.intervalMs) return this;
+         const zU = this.tries[this.tries.length - 1],
+           cU = new FU(zU, UU);
+         return cU.dueMs = Math.max(zU, XU - UU), cU
+       }
+       nextDueMs() {
+         const UU = this.tries[this.tries.length - 1];
+         return Math.max(UU + 56, this.tries[0] + this.tries.length * this.intervalMs, this.dueMs + this.intervalMs)
+       }
+       noteTry(UU, XU) {
+         this.tries.push(UU), this.tries.length > 3 && this.tries.shift(), this.dueMs = XU
+       }
+ ... (163 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L153-L171` → after: `L4187-L4266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR4187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L4187-L4266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/262.js#L4187-L4266) · [Before (L153-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/262.js#L153-L171)

```diff
-         for (const QM of PM) {
-           if ("_" === QM[0] && (!jM || -1 === jM.indexOf(QM))) continue;
-           if (QM.endsWith("Observable")) continue;
-           if (iM && -1 !== iM.indexOf(QM)) continue;
-           const PM = MM[QM],
-             zM = typeof PM;
-           if ("function" !== zM) try {
-             if ("object" === zM)
-               if (PM instanceof Uint8Array) rM[QM] = Uint8Array.from(PM);
-               else if (PM instanceof Array) {
-               if (rM[QM] = [], PM.length > 0)
-                 if ("object" == typeof PM[0])
-                   for (let MM = 0; MM < PM.length; MM++) {
-                     const iM = SM(PM[MM], rM, aM); - 1 === rM[QM].indexOf(iM) && rM[QM].push(iM)
-                   } else rM[QM] = PM.slice(0)
-             } else rM[QM] = SM(PM, rM, aM);
- ... (3 more removed lines; see GitHub link above)
+       const AU = cU.Sp.Dot(EU, YU);
+       let oU = -cU.Sp.Dot(EU, NU);
+       Math.abs(AU) < .001 && Math.abs(oU) < .001 && (oU = -1);
+       const DU = null !== (zU = null === (yU = UU.WY.LcU()) || void 0 === yU ? void 0 : yU.projectionMatrix) && void 0 !== zU ? zU : UU.WY.nS().activeCamera.getProjectionMatrix().m;
+       return wU(AU * DU[0], oU * DU[5])
+     }
+ 
+     function PU(UU, XU) {
+       const zU = UU.WY.nS(),
+         yU = zU.qp(),
+         QU = yU.getRenderWidth(),
+         AU = yU.getRenderHeight();
+       ZU.width = QU, ZU.height = AU;
+       const FU = UU.WY.LcU(),
+         EU = FU ? BU.sUU(FU.eye[0], FU.eye[1], FU.eye[2]) : UU.WY.camera.globalPosition;
+       oU.sUU(EU.x + 10 * XU[0], EU.y + 10 * XU[1], EU.z + 10 * XU[2]);
+ ... (64 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L177` → after: `L4480-L4550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR4480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L4480-L4550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/262.js#L4480-L4550) · [Before (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/262.js#L177)

```diff
-   38885: (MM, rM, iM) => {
+   39858: (UU, XU, zU) => {
+     zU.d(XU, {
+       d: () => QU,
+       h: () => yU
+     });
+     var cU = zU(31);
+ 
+     function yU(UU) {
+       return "refetchCode" === UU || "devDownloadJson" === UU || UU.startsWith("Plugin")
+     }
+ 
+     function QU(UU, XU) {
+       "refetchCode" !== UU ? "Plugin|MobAiPlugin|ShowPetUi" !== UU ? Promise.all([zU.e(120), zU.e(121), zU.e(116), zU.e(118), zU.e(231)]).then((() => zU(44426))).then((zU => {
+         let {
+           runClientGameMessage: cU
+         } = zU;
+ ... (55 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L179-L181` → after: `L4552-L4572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR4552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L4552-L4572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/262.js#L4552-L4572) · [Before (L179-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/262.js#L179-L181)

```diff
-       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (MM => {
-         const rM = 16 * Math.random() | 0;
-         return ("x" === MM ? rM : 3 & rM | 8).toString(16)
+       yU.k.UY("clearUiRequests");
+       for (const UU of FU.values()) UU.tearDownNotification();
+       FU.clear()
+     }
+ 
+     function YU(UU, XU, zU, yU) {
+       const oU = "string" === typeof XU ? {
+           translationKey: XU
+         } : XU,
+         DU = QU.NotificationProvider.showPromptPopup({
+           title: oU.translationKey,
+           textOpts: {
+             title: (0, AU.e)(oU.params, cU.gameBridge.latest("hiddenPlayerNames"))
+           },
+           confirmText: "general:yes",
+           cancelText: "general:no",
+ ... (5 more added lines; see GitHub link above)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L186` → after: `L4580-L4617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR4580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L4580-L4617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/262.js#L4580-L4617) · [Before (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/262.js#L186)

```diff
-     })
+     });
+     const cU = "ue:",
+       yU = ["keydown", "keyup", "mousedown", "mouseup", "pointerdown", "pointerup", "touchstart", "touchend"],
+       QU = "[A-Za-z0-9]{1,24}",
+       AU = 15,
+       FU = new RegExp(`^${QU}$`);
+     new RegExp(`^${cU}(${[...yU,"other"].join("|")}):(?:n|k(${QU})|b(0|[1-9][0-9]?)):([01])([01])$`);
+ 
+     function oU(UU, XU, zU, QU, oU) {
+       const DU = "string" === typeof UU && yU.includes(UU) ? UU : "other";
+       let EU = "n";
+       return "string" === typeof XU ? EU = FU.test(XU) ? `k${XU}` : "n" : "number" === typeof zU && Number.isInteger(zU) && zU >= 0 && zU <= AU && (EU = `b${zU}`), `${cU}${DU}:${EU}:${QU?1:0}${oU?1:0}`
+     }
+     var DU = zU(1715),
+       EU = zU(1808);
+     let YU = null;
+ ... (22 more added lines; see GitHub link above)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L188` → after: `L4619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR4619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L4619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/262.js#L4619) · [Before (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/262.js#L188)

```diff
-   39711: (MM, rM, iM) => {
+   39835: (UU, XU, zU) => {
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L190` → after: `L4621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR4621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L4621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/262.js#L4621) · [Before (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/262.js#L190)

```diff
-       e: () => OM
+       c: () => cU
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L193-L257` → after: `L4624-L4694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR4624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L4624-L4694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/262.js#L4624-L4694) · [Before (L193-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/262.js#L193-L257)

```diff
-       static _CheckLimit(MM, rM) {
-         let iM = OM._LogLimitOutputs[MM];
-         return iM ? iM.current++ : (iM = {
-           limit: rM,
-           current: 1
-         }, OM._LogLimitOutputs[MM] = iM), iM.current <= iM.limit
-       }
-       static _GenerateLimitMessage(MM) {
-         let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-         const iM = OM._LogLimitOutputs[MM];
-         if (!iM || !OM.MessageLimitReached) return;
-         const SM = this._Levels[rM];
-         iM.current === iM.limit && OM[SM.name](OM.MessageLimitReached.replace(/%LIMIT%/g, "" + iM.limit).replace(/%TYPE%/g, SM.name ?? ""))
-       }
-       static _AddLogEntry(MM) {
-         OM._LogCache = MM + OM._LogCache, OM.OnNewCacheEntry && OM.OnNewCacheEntry(MM)
- ... (49 more removed lines; see GitHub link above)
+       constructor() {
+         this.members = new Map
+       }
+       apply(UU) {
+         const XU = {
+           added: [],
+           removed: [],
+           settingChanges: []
+         };
+         for (const cU of UU.KQ) {
+           let UU = this.members.get(cU.bQ);
+           if (UU || (UU = {
+               name: null,
+               settings: {}
+             }, this.members.set(cU.bQ, UU), XU.added.push(cU.bQ)), null !== cU.TQ && (UU.name = cU.TQ), null !== cU.hQ || cU.UA.length > 0) {
+             const zU = null === cU.hQ ? {} : JSON.parse(cU.hQ);
+ ... (55 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/263.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/263.js` (26 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696)

#### 1. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/263.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/263.js#L2)

```diff
- export const ids = [262, 263];
+ export const ids = [263];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L4-L16` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/263.js#L4) · [Before (L4-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/263.js#L4-L16)

```diff
-   63896: (MM, rM, iM) => {
-     iM.r(rM), iM.d(rM, {
-       RegisterShaderMaterial: () => OM.d,
-       ShaderMaterial: () => OM.n,
-       ShaderMaterialCreateFromSnippetAsync: () => OM.f,
-       ShaderMaterialParse: () => OM.m,
-       ShaderMaterialParseFromFileAsync: () => OM.g,
-       ShaderMaterialParseFromSnippetAsync: () => OM.j
-     });
-     var OM = iM(41556);
-     (0, OM.d)()
-   },
-   38740: (MM, rM, iM) => {
+   39285: (UU, XU, zU) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L20` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/263.js#L8-L9) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/263.js#L20)

```diff
-     var OM = iM(38744);
+     var cU = zU(39293);
+     const yU = [0, 0, 0];
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L22-L25` → after: `L11-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L11-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/263.js#L11-L13) · [Before (L22-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/263.js#L22-L25)

```diff
-       static GetPlanes(MM) {
-         const rM = [];
-         for (let iM = 0; iM < 6; iM++) rM.push(new OM.d(0, 0, 0, 0));
-         return SM.GetPlanesToRef(MM, rM), rM
+       constructor(UU) {
+         let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yU;
+         this.pool = UU, this.origin = XU, this.count = 0, this.free = []
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L27-L29` → after: `L15-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L15-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/263.js#L15-L18) · [Before (L27-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/263.js#L27-L29)

```diff
-       static GetNearPlaneToRef(MM, rM) {
-         const iM = MM.m;
-         rM.normal.x = iM[3] + iM[2], rM.normal.y = iM[7] + iM[6], rM.normal.z = iM[11] + iM[10], rM.d = iM[15] + iM[14], rM.normalize()
+       take() {
+         var UU;
+         const XU = null !== (UU = this.free.pop()) && void 0 !== UU ? UU : this.count++;
+         return XU >= this.pool.xY && this.pool.grow(Math.max(2 * this.pool.xY, XU + 1)), this.hide(XU), XU
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L31-L33` → after: `L20-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L20-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/263.js#L20-L21) · [Before (L31-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/263.js#L31-L33)

```diff
-       static GetFarPlaneToRef(MM, rM) {
-         const iM = MM.m;
-         rM.normal.x = iM[3] - iM[2], rM.normal.y = iM[7] - iM[6], rM.normal.z = iM[11] - iM[10], rM.d = iM[15] - iM[14], rM.normalize()
+       release(UU) {
+         this.hide(UU), this.free.push(UU)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L35-L37` → after: `L23-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L23-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/263.js#L23-L29) · [Before (L35-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/263.js#L35-L37)

```diff
-       static GetLeftPlaneToRef(MM, rM) {
-         const iM = MM.m;
-         rM.normal.x = iM[3] + iM[0], rM.normal.y = iM[7] + iM[4], rM.normal.z = iM[11] + iM[8], rM.d = iM[15] + iM[12], rM.normalize()
+       write(UU, XU, zU, yU) {
+         const {
+           records: QU
+         } = this.pool, {
+           origin: AU
+         } = this, FU = UU * cU.e;
+         QU[FU] = XU - AU[0], QU[FU + 1] = zU - AU[1], QU[FU + 2] = yU - AU[2], QU[FU + cU.h] = 0, this.pool.markDirty(UU)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L39-L41` → after: `L31-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/263.js#L31-L32) · [Before (L39-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/263.js#L39-L41)

```diff
-       static GetRightPlaneToRef(MM, rM) {
-         const iM = MM.m;
-         rM.normal.x = iM[3] - iM[0], rM.normal.y = iM[7] - iM[4], rM.normal.z = iM[11] - iM[8], rM.d = iM[15] - iM[12], rM.normalize()
+       hide(UU) {
+         this.pool.records[UU * cU.e + cU.h] = 1, this.pool.markDirty(UU)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L43-L45` → after: `L34-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/263.js#L34-L35) · [Before (L43-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/263.js#L43-L45)

```diff
-       static GetTopPlaneToRef(MM, rM) {
-         const iM = MM.m;
-         rM.normal.x = iM[3] - iM[1], rM.normal.y = iM[7] - iM[5], rM.normal.z = iM[11] - iM[9], rM.d = iM[15] - iM[13], rM.normalize()
+       commit() {
+         this.pool.commit(this.count)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L47-L49` → after: `L37-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/263.js#L37-L38) · [Before (L47-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/263.js#L47-L49)

```diff
-       static GetBottomPlaneToRef(MM, rM) {
-         const iM = MM.m;
-         rM.normal.x = iM[3] + iM[1], rM.normal.y = iM[7] + iM[5], rM.normal.z = iM[11] + iM[9], rM.d = iM[15] + iM[13], rM.normalize()
+       dispose() {
+         this.pool.dispose()
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L51-L52` → after: `L40-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L40-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/263.js#L40-L54) · [Before (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/263.js#L51-L52)

```diff
-       static GetPlanesToRef(MM, rM) {
-         SM.GetNearPlaneToRef(MM, rM[0]), SM.GetFarPlaneToRef(MM, rM[1]), SM.GetLeftPlaneToRef(MM, rM[2]), SM.GetRightPlaneToRef(MM, rM[3]), SM.GetTopPlaneToRef(MM, rM[4]), SM.GetBottomPlaneToRef(MM, rM[5])
+     }
+     class AU {
+       constructor(UU, XU, zU) {
+         this.api = UU, this.model = XU, this.initialCapacity = zU, this.kinds = new Map, this.origin = [0, 0, 0]
+       }
+       kindOf(UU) {
+         let XU = this.kinds.get(UU);
+         if (void 0 === XU) {
+           const zU = this.api.createInstancePool({
+             ...this.model,
+             item: UU
+           }, this.initialCapacity);
+           null === zU || void 0 === zU || zU.setOrigin(this.origin[0], this.origin[1], this.origin[2]), XU = zU && new QU(zU, this.origin), this.kinds.set(UU, XU)
+         }
+         return XU
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L54-L56` → after: `L56-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L56-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/263.js#L56-L62) · [Before (L54-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/263.js#L54-L56)

```diff
-       static IsPointInFrustum(MM, rM) {
-         for (let iM = 0; iM < 6; iM++)
-           if (rM[iM].dotCoordinate(MM) < 0) return !1;
+       follow(UU) {
+         const {
+           origin: XU
+         } = this;
+         if (Math.abs(UU[0] - XU[0]) <= 512 && Math.abs(UU[1] - XU[1]) <= 512 && Math.abs(UU[2] - XU[2]) <= 512) return !1;
+         XU[0] = Math.floor(UU[0]), XU[1] = Math.floor(UU[1]), XU[2] = Math.floor(UU[2]);
+         for (const zU of this.kinds.values()) null === zU || void 0 === zU || zU.pool.setOrigin(XU[0], XU[1], XU[2]);
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L61` → after: `L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/263.js#L74) · [Before (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/263.js#L61)

```diff
-   38744: (MM, rM, iM) => {
+   39299: (UU, XU, zU) => {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L63` → after: `L76-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L76-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/263.js#L76-L78) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/263.js#L63)

```diff
-       d: () => SM
+       c: () => AU,
+       d: () => FU,
+       g: () => oU
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L65-L68` → after: `L80-L622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L80-L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/263.js#L80-L622) · [Before (L65-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/263.js#L65-L68)

```diff
-     var OM = iM(38040);
-     class SM {
-       constructor(MM, rM, iM, SM) {
-         this.normal = new OM.q(MM, rM, iM), this.d = SM
+     const cU = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
+       yU = [0, 1, 2, 0, 2, 3],
+       QU = [4, 5];
+ 
+     function AU(UU, XU, zU, cU, yU) {
+       for (let AU = 0; AU < 6; AU++) QU.includes(AU) === yU && DU(UU, XU, zU, cU, AU)
+     }
+ 
+     function FU(UU, XU, zU, cU) {
+       for (let yU = 0; yU < 6; yU++) DU(UU, XU, zU, cU, yU)
+     }
+ 
+     function oU(UU, XU, zU, QU, AU) {
+       for (let FU = 0; FU < 6; FU++)
+         for (const oU of [0, 1]) {
+           const [DU, EU, YU] = [oU + 2, oU + 1, (oU + 3) % 4], NU = UU.length / 3;
+ ... (527 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L70-L71` → after: `L624-L730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L624-L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/263.js#L624-L730) · [Before (L70-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/263.js#L70-L71)

```diff
-       HOM() {
-         return [this.normal.x, this.normal.y, this.normal.z, this.d]
+     }
+     const pU = {
+       tier: "coreTierName",
+       stage: "coreStageName",
+       atomic: "coreAtomicName"
+     };
+ 
+     function aU(UU, XU) {
+       return YU(UU) > 0 && XU < QU
+     }
+ 
+     function tU(UU) {
+       const XU = YU(UU);
+       if (XU > 0) return {
+         kind: "atomic",
+         n: XU,
+ ... (91 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L73-L74` → after: `L732-L734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L732-L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/263.js#L732-L734) · [Before (L73-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/263.js#L73-L74)

```diff
-       clone() {
-         return new SM(this.normal.x, this.normal.y, this.normal.z, this.d)
+       if (UU.endsWith(VU)) {
+         const XU = UU.slice(0, -14);
+         return void 0 !== fU[XU] ? XU : null
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L76-L77` → after: `L736-L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L736-L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/263.js#L736-L800) · [Before (L76-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/263.js#L76-L77)

```diff
-       getClassName() {
-         return "Plane"
+       return null
+     }
+ 
+     function mU(UU) {
+       return !0 === UU.mobFarm
+     }
+ 
+     function lU(UU, XU) {
+       return HU[fU[XU]] * UU.opMs / 1e3
+     }
+     const xU = new Map;
+     const JU = "baf2islands",
+       jU = "baf2islandnew";
+ 
+     function KU(UU) {
+       const XU = yU.findIndex((XU => XU.unlocks.includes(UU)));
+ ... (49 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L79-L81` → after: `L802-L881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L802-L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/263.js#L802-L881) · [Before (L79-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/263.js#L79-L81)

```diff
-       getHashCode() {
-         let MM = this.normal.getHashCode();
-         return MM = 397 * MM ^ this.d, MM
+     }
+ 
+     function FX(UU, XU) {
+       const zU = "number" === typeof UU ? UU : "one" === UU ? 1 : "stack" === UU ? 99 : XU;
+       return Math.min(XU, zU)
+     }
+ 
+     function oX(UU, XU) {
+       const zU = UU => "number" === typeof UU ? UU : "one" === UU ? 1 : 99;
+       return "fill" === UU || "fill" === XU ? "fill" : zU(UU) + zU(XU)
+     }
+ 
+     function DX(UU, XU) {
+       const zU = AX(UU),
+         cU = AX(XU),
+         yU = zU && cU ? function(UU, XU) {
+ ... (64 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L83-L162` → after: `L883-L1294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L883-L1294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/263.js#L883-L1294) · [Before (L83-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/263.js#L83-L162)

```diff
-       normalize() {
-         const MM = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
-         let rM = 0;
-         return 0 !== MM && (rM = 1 / MM), this.normal.x *= rM, this.normal.y *= rM, this.normal.z *= rM, this.d *= rM, this
-       }
-       transform(MM) {
-         const rM = SM._TmpMatrix;
-         MM.invertToRef(rM);
-         const iM = rM.m,
-           OM = this.normal.x,
-           jM = this.normal.y,
-           aM = this.normal.z,
-           PM = this.d,
-           nM = OM * iM[0] + jM * iM[1] + aM * iM[2] + PM * iM[3],
-           QM = OM * iM[4] + jM * iM[5] + aM * iM[6] + PM * iM[7],
-           zM = OM * iM[8] + jM * iM[9] + aM * iM[10] + PM * iM[11],
- ... (64 more removed lines; see GitHub link above)
+     }
+     const LX = "baf2synth",
+       eX = ["Burner Drill", "Crusher", "Smelter", "Generator", "Press", "Wire Mill", "Alloy Kiln", "Electric Drill", "Assembler", "Tree Cutter", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Crystal Vat", "Recycler", "Crop Harvester", "Condenser", "Centrifuge", "Synthe … [truncated]
+       CX = ["Raw Porkchop", "Raw Beef", "Raw Mutton", "Raw Venison"],
+       wX = ["Cooked Porkchop", "Steak", "Cooked Mutton", "Cooked Venison"],
+       qX = function(UU, XU) {
+         return {
+           input: UU,
+           inputAmount: arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
+           output: XU,
+           outputAmount: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
+           bonus: arguments.length > 4 ? arguments[4] : void 0
+         }
+       },
+       OX = function(UU, XU) {
+         return {
+ ... (396 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L164-L183` → after: `L1296-L1640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R1296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L1296-L1640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/263.js#L1296-L1640) · [Before (L164-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/263.js#L164-L183)

```diff
-         }(MM);
-         for (const QM of PM) {
-           if ("_" === QM[0] && (!jM || -1 === jM.indexOf(QM))) continue;
-           if (QM.endsWith("Observable")) continue;
-           if (iM && -1 !== iM.indexOf(QM)) continue;
-           const PM = MM[QM],
-             zM = typeof PM;
-           if ("function" !== zM) try {
-             if ("object" === zM)
-               if (PM instanceof Uint8Array) rM[QM] = Uint8Array.from(PM);
-               else if (PM instanceof Array) {
-               if (rM[QM] = [], PM.length > 0)
-                 if ("object" == typeof PM[0])
-                   for (let MM = 0; MM < PM.length; MM++) {
-                     const iM = SM(PM[MM], rM, aM); - 1 === rM[QM].indexOf(iM) && rM[QM].push(iM)
-                   } else rM[QM] = PM.slice(0)
- ... (4 more removed lines; see GitHub link above)
+         }(zU)), zU.synth) return lX(zU, XU.taught);
+       if (XU.coupled && zU.couplable) return sX(zU, XU.level);
+       const cU = zU.inputSlots && null !== XU.taught ? jX[XU.taught] : void 0;
+       if (!cU) return zU;
+       const yU = `${UU}|${cU.output}`;
+       let QU = KX.get(yU);
+       return QU || (QU = {
+         ...zU,
+         bench: cU
+       }, KX.set(yU, QU)), QU
+     }
+     const TX = ["Diamond", "Moonstone"];
+ 
+     function hX(UU) {
+       return new Set(UU.flatMap((UU => UU.bonus ? [UU.output, UU.bonus.item] : [UU.output])).filter((UU => !TX.includes(UU))))
+     }
+ ... (329 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L188-L194` → after: `L1749-L1751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R1749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L1749-L1751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/263.js#L1749-L1751) · [Before (L188-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/263.js#L188-L194)

```diff
-   },
-   38885: (MM, rM, iM) => {
-     function OM() {
-       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (MM => {
-         const rM = 16 * Math.random() | 0;
-         return ("x" === MM ? rM : 3 & rM | 8).toString(16)
-       }))
+ 
+     function uc(UU) {
+       return UU < Nz.n - 24
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L196-L203` → after: `L1753-L1961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R1753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L1753-L1961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/263.js#L1753-L1961) · [Before (L196-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/263.js#L196-L203)

```diff
-     iM.d(rM, {
-       d: () => OM
-     })
-   },
-   39711: (MM, rM, iM) => {
-     iM.d(rM, {
-       e: () => OM
-     });
+     const fc = new Set(["Comet Ore", "Comet Heart", "Isotope Comet Ore", "Isotope Comet Heart"]);
+     const ic = "Wrench",
+       Hc = "Nova Wrench";
+ 
+     function Mc(UU) {
+       return UU === ic || UU === Hc
+     }
+     const vc = [...Nz.J, "Belt Lift", "Belt Drop"];
+     const Vc = ["Belt Lift", "Belt Drop"],
+       sc = {
+         leftRight: "leftFront",
+         leftFront: "frontRight",
+         frontRight: null
+       };
+ 
+     function nc(UU) {
+ ... (193 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L205-L253` → after: `L1963-L2111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R1963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L1963-L2111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/263.js#L1963-L2111) · [Before (L205-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/263.js#L205-L253)

```diff
-       static _CheckLimit(MM, rM) {
-         let iM = OM._LogLimitOutputs[MM];
-         return iM ? iM.current++ : (iM = {
-           limit: rM,
-           current: 1
-         }, OM._LogLimitOutputs[MM] = iM), iM.current <= iM.limit
-       }
-       static _GenerateLimitMessage(MM) {
-         let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-         const iM = OM._LogLimitOutputs[MM];
-         if (!iM || !OM.MessageLimitReached) return;
-         const SM = this._Levels[rM];
-         iM.current === iM.limit && OM[SM.name](OM.MessageLimitReached.replace(/%LIMIT%/g, "" + iM.limit).replace(/%TYPE%/g, SM.name ?? ""))
-       }
-       static _AddLogEntry(MM) {
-         OM._LogCache = MM + OM._LogCache, OM.OnNewCacheEntry && OM.OnNewCacheEntry(MM)
- ... (33 more removed lines; see GitHub link above)
+       constructor() {
+         let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
+         this.requestBook = UU, this.view = {
+           name: null,
+           rows: [],
+           reward: null,
+           goal: null,
+           pulse: 0,
+           itemNames: {},
+           side: null,
+           sideCameUpAt: 0,
+           tier: null,
+           core: null,
+           chapters: null,
+           also: [],
+           depth: null,
+ ... (133 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L257-L260` → after: `L2139-L2236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R2139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L2139-L2236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/263.js#L2139-L2236) · [Before (L257-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/263.js#L257-L260)

```diff
-     OM.NoneLogLevel = 0, OM.MessageLogLevel = 1, OM.WarningLogLevel = 2, OM.ErrorLogLevel = 4, OM.AllLogLevel = 7, OM.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", OM._LogCache = "", OM._LogLimitOutputs = {}, OM._Levels =  … [truncated]
-       color: "white",
-       logFunc: console.log,
-       name: "Log"
+     const ly = "baf2QuestItems",
+       xy = new Set;
+     let Jy = new Set,
+       jy = null;
+ 
+     function Ky(UU) {
+       const XU = SU(UU.tutorial),
+         zU = XU ? sy(UU, !0) : xy;
+       "inventory" === gy.e.get("openInGameMenuName") ? (jy = null, (0, Oy.t)(zU)) : jy = zU;
+       const cU = XU ? sy(UU, !1) : xy;
+       (0, wy.e)(cU, Jy) || (Jy = cU, qy.k.UY(ly, Jy))
+     }
+ 
+     function by() {
+       return (0, Cy.c)(ly, (() => Jy))
+     }
+ ... (82 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L262-L269` → after: `L2238-L17827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R2238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L2238-L17827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/263.js#L2238-L17827) · [Before (L262-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/263.js#L262-L269)

```diff
-       color: "orange",
-       logFunc: console.warn,
-       name: "Warn"
-     }, {}, {
-       color: "red",
-       logFunc: console.error,
-       name: "Error"
-     }], OM.errorsCount = 0, OM.Log = OM._LogEnabled.bind(OM, OM.MessageLogLevel), OM.Warn = OM._LogEnabled.bind(OM, OM.WarningLogLevel), OM.Error = OM._LogEnabled.bind(OM, OM.ErrorLogLevel)
+       item: "Raw Voltite",
+       amount: 2,
+       weight: 10,
+       fromTier: 3,
+       later: {
+         tier: 4,
+         weight: 3
+       }
+     }, {
+       item: "Machine Hull",
+       amount: 1,
+       weight: 4,
+       fromTier: 3
+     }, {
+       item: "Diamond",
+       amount: 1,
+ ... (15574 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/264.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/264.js` (53 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42)

#### 1. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/264.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/264.js#L4)

```diff
-   38784: (MM, rM, iM) => {
+   44290: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L7` → after: `L230-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L230-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/264.js#L230-L235) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/264.js#L7)

```diff
-       g: () => aM
+       i: () => pU,
+       l: () => IU,
+       o: () => eU,
+       s: () => LU,
+       t: () => PU,
+       x: () => dU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L9-L11` → after: `L237-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L237-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/264.js#L237-L243) · [Before (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/264.js#L9-L11)

```diff
-     var OM = iM(9839),
-       SM = iM(9816),
-       jM = iM(332);
+     var cU = zU(37825),
+       yU = zU(37819),
+       QU = zU(37827),
+       AU = zU(41383),
+       FU = zU(41235),
+       oU = zU(37841),
+       DU = zU(41289);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L13-L3222` → after: `L245-L2470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L245-L2470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/264.js#L245-L2470) · [Before (L13-L3222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/264.js#L13-L3222)

```diff
-       "Maple Door": {
-         positions: [{
-           block: "Maple Door",
-           x: 0,
-           y: 0,
-           z: 0
-         }, {
-           block: "_Maple Door Top",
-           x: 0,
-           y: 1,
-           z: 0
-         }]
-       },
-       "Maple Door|meta|rot1|open": {
-         positions: [{
-           block: "Maple Door|meta|rot1|open",
- ... (3194 more removed lines; see GitHub link above)
+       internalPickerForMesh: void 0
+     };
+     class YU {
+       constructor(UU, XU) {
+         let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
+           yU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : cU.c;
+         this.origin = UU, this.direction = XU, this.length = zU, this.epsilon = yU
+       }
+       clone() {
+         return new YU(this.origin.clone(), this.direction.clone(), this.length)
+       }
+       intersectsBoxMinMax(UU, XU) {
+         let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         const cU = YU._TmpVector3[0].sUU(UU.x - zU, UU.y - zU, UU.z - zU),
+           yU = YU._TmpVector3[1].sUU(XU.x + zU, XU.y + zU, XU.z + zU);
+         let QU, AU, FU, oU, DU = 0,
+ ... (2210 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L3225-L3258` → after: `L2644-L3242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R2644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L2644-L3242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/264.js#L2644-L3242) · [Before (L3225-L3258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/264.js#L3225-L3258)

```diff
-       }(),
-       ... function() {
-         const MM = {
-             1: MM => ({
-               x: 0,
-               z: MM
-             }),
-             2: MM => ({
-               x: MM,
-               z: 0
-             }),
-             3: MM => ({
-               x: 0,
-               z: -MM
-             }),
-             4: MM => ({
- ... (18 more removed lines; see GitHub link above)
+         const AU = iU._TmpMats[0];
+         if (!this._getAbsoluteInverseMatrixUnscaledToRef(AU, yU)) return;
+         const FU = iU._TmpMats[1];
+         QU.e.RotationYawPitchRollToRef(UU, XU, zU, FU), AU.multiplyToRef(FU, FU), this._rotateWithMatrix(FU, cU, yU)
+       }
+       rotate(UU, XU) {
+         let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
+           cU = arguments.length > 3 ? arguments[3] : void 0;
+         const yU = iU._TmpMats[0];
+         yU.setTranslationFromFloats(0, 0, 0), QU.e.RotationAxisToRef(UU, XU, yU), this._rotateWithMatrix(yU, zU, cU)
+       }
+       setAxisAngle(UU, XU) {
+         let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
+           cU = arguments.length > 3 ? arguments[3] : void 0;
+         if (0 === zU) {
+           const yU = iU._TmpQuat;
+ ... (583 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L3264-L3288` → after: `L3599-L3629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R3599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L3599-L3629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/264.js#L3599-L3629) · [Before (L3264-L3288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/264.js#L3264-L3288)

```diff
-       }(),
-       ... function() {
-         const MM = {};
-         for (let rM = 1; rM <= OM.s; rM++) {
-           const iM = (0, OM.fc)(rM),
-             SM = OM.v[rM - 1],
-             jM = [{
-               block: iM,
-               x: 0,
-               y: 0,
-               z: 0
-             }];
-           for (const MM of OM.k)
-             for (let rM = 1; rM <= SM; rM++) {
-               if ("southwest" === MM && 1 === rM) continue;
-               const {
- ... (9 more removed lines; see GitHub link above)
+       }
+       _bindGeometryRendering(UU) {
+         const XU = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
+           zU = qX.c.GetConfiguration(XU);
+         if (!zU?._defines) return;
+         UU.setFloat("objectId", 0), UU.setInt("meshBlendTag", 0);
+         const cU = this._scene?.activeCamera;
+         if (UU.setFloat2("cameraInfo", cU?.minZ ?? 0, cU?.maxZ ?? 1), this.isLocal && void 0 !== zU.defines.PREPASS_LOCAL_POSITION_INDEX) {
+           UU.setMatrix("inverseEmitterWM", this._emitterInverseWorldMatrix);
+           const XU = this.worldOffset.subtractToRef(this._scene?.floatingOriginOffset || QU.q.ZeroReadOnly, QU.l.Sp[0]);
+           UU.setVector3("geometryWorldOffset", XU)
+         }
+       }
+       animate() {
+         let UU, XU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         if (this._started && !this.paused) {
+ ... (15 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L3290-L3291` → after: `L3631-L3636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R3631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L3631-L3636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/264.js#L3631-L3636) · [Before (L3290-L3291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/264.js#L3290-L3291)

```diff
-           MM[iM] = {
-             positions: jM
+             if (this._vertexBuffer)
+               if (this._useFixedCapacityForSnapshot) {
+                 const UU = this._vertexBufferSize * (this._useInstancing ? 1 : 4),
+                   XU = this._particles.length;
+                 XU < this._fixedCapacityHighWaterMark && this._vertexData.fill(0, XU * UU, this._fixedCapacityHighWaterMark * UU), this._fixedCapacityHighWaterMark = XU, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
+               } else this._vertexBuffer.updateDirectly(this._vertexData, 0, this._particles.length)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L3406-L3565` → after: `L3659-L3660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R3659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L3659-L3660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/264.js#L3659-L3660) · [Before (L3406-L3565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/264.js#L3406-L3565)

```diff
-     };
- 
-     function PM(MM) {
-       return {
-         [`${MM} Banner`]: {
-           positions: [{
-             block: `${MM} Banner`,
-             x: 0,
-             y: 0,
-             z: 0
-           }, {
-             block: `_${MM} Banner Flag|meta|rot1|bot`,
-             x: 0,
-             y: 1,
-             z: 0
-           }]
- ... (144 more removed lines; see GitHub link above)
+       _appendParticleVertices(UU, XU) {
+         this._appendParticleVertex(UU++, XU, 0, 0), this._useInstancing || (this._appendParticleVertex(UU++, XU, 1, 0), this._appendParticleVertex(UU++, XU, 1, 1), this._appendParticleVertex(UU, XU, 0, 1))
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L3567-L3663` → after: `L3662-L3663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R3662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L3662-L3663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/264.js#L3662-L3663) · [Before (L3567-L3663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/264.js#L3567-L3663)

```diff
-     }
- 
-     function nM(MM) {
-       const rM = (0, jM.Sb)(MM);
-       return {
-         [rM]: {
-           positions: [{
-             block: rM,
-             x: 0,
-             y: 0,
-             z: 0
-           }, {
-             block: `_${rM} Top Left`,
-             x: 0,
-             y: 1,
-             z: 0
- ... (81 more removed lines; see GitHub link above)
+       rebuild() {
+         this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._createIndexBuffer(), this._spriteBuffer?._rebuild(), this._createVertexBuffers(), this.resetDrawCache()
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L3665-L3741` → after: `L3665-L3675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R3665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L3665-L3675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/264.js#L3665-L3675) · [Before (L3665-L3741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/264.js#L3665-L3741)

```diff
-     }
- 
-     function QM(MM) {
-       const rM = `_${MM} Back`,
-         iM = `_${MM} Dish`;
-       return {
-         [MM]: {
-           positions: [{
-             block: MM,
-             x: 0,
-             y: 0,
-             z: 0
-           }, {
-             block: rM,
-             x: 0,
-             y: 0,
- ... (61 more removed lines; see GitHub link above)
+       async _initShaderSourceAsync() {
+         this._engine.isWebGPU && !OX.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([zU.e(652).then((() => zU(63979))), zU.e(646).then((() => zU(63987)))])) : await Promise.all([zU.e(635).then((() => zU(63990))), Promise.all([zU.e(628), zU.e(661)]).then((() => zU(63994) … [truncated]
+       }
+       isReady() {
+         if (!this._shadersLoaded) return !1;
+         if (!this.emitter || this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady() || !this.particleTexture || !this.particleTexture.isReady()) return !1;
+         if (this.blendMode !== RU.BLENDMODE_MULTIPLYADD) {
+           if (!this._getWrapper(this.blendMode).effect.isReady()) return !1
+         } else {
+           if (!this._getWrapper(RU.BLENDMODE_MULTIPLY).effect.isReady()) return !1;
+           if (!this._getWrapper(RU.BLENDMODE_ADD).effect.isReady()) return !1
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L3744-L3765` → after: `L3679-L3689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R3679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L3679-L3689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/264.js#L3679-L3689) · [Before (L3744-L3765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/264.js#L3744-L3765)

```diff
-     }
- 
-     function zM(MM) {
-       const rM = `Small ${MM} Pod`;
-       return {
-         [rM]: {
-           positions: [{
-             block: rM,
-             x: 0,
-             y: 0,
-             z: 0
-           }, {
-             block: `_Small ${MM} Pod Mid`,
-             x: 0,
-             y: 1,
-             z: 0
- ... (6 more removed lines; see GitHub link above)
+       _render(UU) {
+         const XU = this._getWrapper(UU),
+           zU = XU.effect,
+           cU = this._engine;
+         cU.enableEffect(XU);
+         const yU = this.defaultViewMatrix ?? this._scene.getViewMatrix();
+         zU.setTexture("diffuseSampler", this.particleTexture), zU.setMatrix("view", yU);
+         const AU = this.defaultProjectionMatrix ?? this._scene.getProjectionMatrix();
+         if (zU.setMatrix("projection", AU), this._isAnimationSheetEnabled && this.particleTexture) {
+           const UU = this.particleTexture.getBaseSize();
+           zU.setFloat3("particlesInfos", this.spriteCellWidth / UU.width, this.spriteCellHeight / UU.height, this.spriteCellWidth / UU.width)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L3768-L3780` → after: `L3706-L3719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R3706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L3706-L3719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/264.js#L3706-L3719) · [Before (L3768-L3780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/264.js#L3768-L3780)

```diff
-     }
-     for (const mM in aM) {
-       for (const MM of aM[mM].positions)
-         if (MM.id = SM.k[MM.block].id, mM === MM.block && (0 !== MM.x || 0 !== MM.y || 0 !== MM.z)) throw new Error(`Multiblock "${mM}" has main block "${MM.block}" at non-origin position (${MM.x}, ${MM.y}, ${MM.z}) - if you need to do something like this, you'll need to rethink  … [truncated]
-       aM[SM.k[mM].id] = aM[mM]
-     }
-     const LM = {};
-     for (const mM in aM)
-       for (const {
-           block: MM,
-           x: rM,
-           y: iM,
-           z: OM
+       render() {
+         if (!this.isReady() || !this._particles.length && !this._useFixedCapacityForSnapshot) return 0;
+         const UU = this._engine;
+         let XU;
+         return UU.setState && (UU.setState(!1), this.forceDepthWrite && UU.setDepthWrite(!0)), XU = this.blendMode === RU.BLENDMODE_MULTIPLYADD ? this._render(RU.BLENDMODE_MULTIPLY) + this._render(RU.BLENDMODE_ADD) : this._render(this.blendMode), this._engine.unbindInstanceAttrib … [truncated]
+       }
+       _onDispose() {}
+       dispose() {
+         let UU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
+           XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+         if (this._engine._onReleaseRenderPassObservable?.remove(this._renderPassObserver), this._renderPassObserver = null, this.resetDrawCache(), this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), … [truncated]
+           const UU = this._scene.nB.indexOf(this);
+           UU > -1 && this._scene.nB.splice(UU, 1), this._scene._activeParticleSystems.dispose()
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L3782-L3789` → after: `L3721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R3721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L3721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/264.js#L3721) · [Before (L3782-L3789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/264.js#L3782-L3789)

```diff
-         of aM[mM].positions) {
-         const jM = {
-           mainMultiblock: mM,
-           compX: rM,
-           compY: iM,
-           compZ: OM
-         };
-         LM[MM] = jM, LM[SM.k[MM].id] = jM
+         this.bS.notifyObservers(this), this.bS.clear(), this.onStoppedObservable.clear(), this.onStartedObservable.clear(), this.reset(), this._isDisposed = !0
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L3814-L3852` → after: `L3731-L3733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R3731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L3731-L3733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/264.js#L3731-L3733) · [Before (L3814-L3852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/264.js#L3814-L3852)

```diff
-         this.model = MM, this.reshapeOffsets = [...aM, [0, -1, 0]]
-       }
-       handles(MM) {
-         const rM = OM.k[MM];
-         return (null === rM || void 0 === rM ? void 0 : rM.model) === this.model && void 0 !== rM.attachedTop
-       }
-       affects(MM) {
-         return this.handles(MM) || PM(MM) || (0, jM.z)(OM.k[MM])
-       }
-       shape(MM, rM, iM, aM, nM) {
-         let QM = this.handles(MM(rM, iM + 1, aM)) ? SM.g : 0;
-         return SM.q.forEach(((nM, zM) => {
-           let {
-             dx: LM,
-             dz: mM
-           } = nM;
- ... (23 more removed lines; see GitHub link above)
+         if (this.particleSystem = UU, this.type = 1, this.inheritDirection = !1, this.inheritedVelocityAmount = 0, !UU.emitter || !UU.emitter.dispose) {
+           const XU = (0, rX.e)("BABYLON.AbstractMesh");
+           UU.emitter = new XU("SubemitterSystemEmitter", UU.nS()), UU._disposeEmitterOnDispose = !0
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L3854-L3860` → after: `L3735-L3741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R3735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L3735-L3741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/264.js#L3735-L3741) · [Before (L3854-L3860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/264.js#L3854-L3860)

```diff
-       if (OM.enchantmentData)
-         for (const LM in OM.enchantmentData) {
-           const MM = OM.enchantmentData[LM];
-           if (!MM) continue;
-           if ("object" !== typeof MM) {
-             OM.enchantmentData[LM] = void 0;
-             continue
+       }
+       clone() {
+         let UU = this.particleSystem.emitter;
+         if (UU) {
+           if (UU instanceof QU.q) UU = UU.clone();
+           else if (-1 !== UU.getClassName().indexOf("Mesh")) {
+             UU = new((0, rX.e)("BABYLON.Mesh"))("", UU.nS()), UU.isVisible = !1
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L3862-L3913` → after: `L3743-L3762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R3743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L3743-L3762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/264.js#L3743-L3762) · [Before (L3862-L3913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/264.js#L3862-L3913)

```diff
-           const rM = MM.icon,
-             iM = MM.description;
-           var PM, nM, QM, zM;
-           if ("string" !== typeof rM) OM.enchantmentData[LM].icon = null !== (PM = null === rM || void 0 === rM || null === (nM = rM.toString) || void 0 === nM ? void 0 : nM.call(rM)) && void 0 !== PM ? PM : void 0;
-           if ("string" !== typeof iM) OM.enchantmentData[LM].description = null !== (QM = null === iM || void 0 === iM || null === (zM = iM.toString) || void 0 === zM ? void 0 : zM.call(iM)) && void 0 !== QM ? QM : void 0
-         }
-       return rM.customAttributes = OM, rM
-     }
-     iM.d(rM, {
-       b: () => OM
-     })
-   },
-   39218: (MM, rM, iM) => {
-     iM.d(rM, {
-       e: () => eM,
-       f: () => yM,
- ... (36 more removed lines; see GitHub link above)
+         } else UU = new QU.q;
+         const XU = new uX(this.particleSystem.clone(this.particleSystem.name, UU));
+         return XU.particleSystem.name += "Clone", XU.type = this.type, XU.inheritDirection = this.inheritDirection, XU.inheritedVelocityAmount = this.inheritedVelocityAmount, XU.particleSystem._disposeEmitterOnDispose = !0, XU.particleSystem.disposeOnStop = !0, XU
+       }
+       serialize() {
+         let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         const XU = {};
+         return XU.type = this.type, XU.inheritDirection = this.inheritDirection, XU.inheritedVelocityAmount = this.inheritedVelocityAmount, XU.particleSystem = this.particleSystem.serialize(UU), XU
+       }
+       static _ParseParticleSystem(UU, XU, zU) {
+         throw (0, fU.m)("ParseParticle")
+       }
+       static Parse(UU, XU, zU) {
+         const cU = UU.particleSystem,
+           yU = new uX(uX._ParseParticleSystem(cU, XU, zU, !0));
+         return yU.type = UU.type, yU.inheritDirection = UU.inheritDirection, yU.inheritedVelocityAmount = UU.inheritedVelocityAmount, yU.particleSystem._isSubEmitter = !0, yU
+ ... (4 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L3915-L3921` → after: `L3764-L3803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R3764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L3764-L3803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/264.js#L3764-L3803) · [Before (L3915-L3921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/264.js#L3915-L3921)

```diff
- 
-     function UM(MM, rM, iM, jM, PM) {
-       var nM;
-       let zM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : MM(rM[0], rM[1], rM[2]);
-       if (!(QM[zM - aM] & 1 << iM)) return null;
-       const [LM, mM, HM] = SM.C[PM][iM], hM = [rM[0] + LM, rM[1] + mM, rM[2] + HM], JM = MM(hM[0], hM[1], hM[2]), dM = null === (nM = OM.k[JM]) || void 0 === nM ? void 0 : nM.meta;
-       return (null === dM || void 0 === dM ? void 0 : dM.rootId) === jM && dM.rot === PM && QM[JM - aM] & 1 << (1 ^ iM) ? hM : null
+     var fX = zU(41003),
+       iX = zU(41134);
+     const HX = () => {};
+     class MX {
+       constructor() {
+         this.particlePositionGenerator = HX, this.particleDestinationGenerator = HX, this.particleDirectionGenerator = HX
+       }
+       startDirectionFunction(UU, XU, zU, cU) {
+         const yU = QU.l.Sp[0];
+         if (this.particleDirectionGenerator && this.particleDirectionGenerator !== HX) this.particleDirectionGenerator(-1, zU, yU);
+         else if (this.particleDestinationGenerator && this.particleDestinationGenerator !== HX) {
+           this.particleDestinationGenerator(-1, zU, yU);
+           const UU = QU.l.Sp[1];
+           yU.subtractToRef(zU.position, UU), UU.scaleToRef(1 / zU.lifeTime, yU)
+         } else yU.set(0, 0, 0);
+         cU ? XU.YL(yU) : QU.q.TransformNormalToRef(yU, UU, XU)
+ ... (24 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L3923-L3933` → after: `L3805-L3817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R3805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L3805-L3817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/264.js#L3805-L3817) · [Before (L3923-L3933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/264.js#L3923-L3933)

```diff
- 
-     function GM(MM, rM, iM, jM) {
-       const aM = MM(rM, iM, jM);
-       if (!nM(aM)) return null;
-       const {
-         rootId: PM,
-         rot: QM
-       } = OM.k[aM].meta, LM = (rM, iM) => {
-         let OM = rM,
-           SM = 1;
-         for (let jM = UM(MM, OM, iM, PM, QM); jM && SM < zM; jM = UM(MM, OM, iM, PM, QM)) OM = jM, SM++;
+     const vX = QU.q.Zero(),
+       VX = QU.q.Zero(),
+       sX = QU.q.Zero();
+     class nX {
+       constructor() {
+         this.strength = 0, this.position = QU.q.Zero()
+       }
+       _processParticle(UU, XU) {
+         this.position.subtractToRef(UU.position, vX);
+         const zU = vX.lengthSquared() + 1;
+         vX.normalize().scaleToRef(this.strength / zU, VX), VX.scaleToRef(XU._tempScaledUpdateSpeed, sX), UU.direction.addInPlace(sX)
+       }
+       serialize() {
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L3935-L3936` → after: `L3819-L3820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R3819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L3819-L3820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/264.js#L3819-L3820) · [Before (L3935-L3936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/264.js#L3935-L3936)

```diff
-           end: OM,
-           cells: SM
+           position: this.position.cyU(),
+           strength: this.strength
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L3951-L3988` → after: `L3824-L3834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R3824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L3824-L3834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/264.js#L3824-L3834) · [Before (L3951-L3988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/264.js#L3951-L3988)

```diff
- 
-     function CM(MM, rM) {
-       for (const iM of function(MM) {
-           let {
-             anchor: rM,
-             rot: iM,
-             width: OM,
-             height: jM
-           } = MM;
-           const [aM, , PM] = SM.C[iM][HM], nM = [];
-           for (let SM = 0; SM < jM; SM++)
-             for (let MM = 0; MM < OM; MM++) nM.push([rM[0] + aM * MM, rM[1] - SM, rM[2] + PM * MM]);
-           return nM
-         }(MM))
-         if (dM(rM(iM[0], iM[1], iM[2]))) return iM;
-       return null
- ... (22 more removed lines; see GitHub link above)
+     const mX = ["level", "hasAlpha", "getAlphaFromRGB", "gammaSpace", "coordinatesIndex", "coordinatesMode", "wrapU", "wrapV", "wrapR", "anisotropicFilteringLevel", "uOffset", "vOffset", "uScale", "vScale", "uAng", "vAng", "wAng", "uRotationCenter", "vRotationCenter", "wRotationC … [truncated]
+     class lX extends OX {
+       constructor() {
+         super(...arguments), this._disposeEmitterOnDispose = !1, this.doNotSerialize = !1, this.canStart = () => !0, this._flowMap = null, this._flowMapUpdate = null, this._source = null, this._blockReference = 0, this.flowMapStrength = 1, this._attractorUpdate = null, this.metad … [truncated]
+           if (!this._subEmitters || 0 === this._subEmitters.length) return;
+           const XU = Math.floor(Math.random() * this._subEmitters.length);
+           for (const zU of this._subEmitters[XU])
+             if (1 === zU.type) {
+               const XU = zU.clone();
+               UU._inheritParticleInfoToSubEmitter(XU), XU.particleSystem._rootParticleSystem = this, this.activeSubSystems.push(XU.particleSystem), XU.particleSystem.start()
+             }
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L3991-L3995` → after: `L3837-L3838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R3837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L3837-L3838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/264.js#L3837-L3838) · [Before (L3991-L3995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/264.js#L3991-L3995)

```diff
-       return hM ??= GM(MM, HM[0], HM[1], HM[2]), {
-         cells: zM,
-         topLeft: HM,
-         rect: hM,
-         textCell: CM(hM, rM)
+       get source() {
+         return this._source
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L3997-L4011` → after: `L3840-L3841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R3840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L3840-L3841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/264.js#L3840-L3841) · [Before (L3997-L4011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/264.js#L3997-L4011)

```diff
-     }
- 
-     function bM(MM, rM, iM, aM, PM) {
-       if (null !== iM && nM(iM)) {
-         const {
-           rootName: MM,
-           rot: rM
-         } = OM.k[iM].meta;
-         if (SM.C[rM].some((MM => {
-             let [rM, iM, OM] = MM;
-             return rM === aM[0] && iM === aM[1] && OM === aM[2]
-           }))) return {
-           root: MM,
-           rot: rM
-         }
+       get isNodeGenerated() {
+         return null !== this._source
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L4013-L4016` → after: `L3843-L3844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R3843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L3843-L3844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/264.js#L3843-L3844) · [Before (L4013-L4016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/264.js#L4013-L4016)

```diff
-       const [QM, zM] = SM.p[PM], LM = MM(rM[0] - QM, rM[1], rM[2] - zM);
-       return {
-         root: (0, jM.h)(LM) ? SM.I : SM.G,
-         rot: PM
+       get flowMap() {
+         return this._flowMap
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L4018-L4072` → after: `L3846-L3850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R3846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L3846-L3850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/264.js#L3846-L3850) · [Before (L4018-L4072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/264.js#L4018-L4072)

```diff
-     }
-   },
-   39210: (MM, rM, iM) => {
-     iM.d(rM, {
-       B: () => tM,
-       C: () => mM,
-       e: () => yM,
-       f: () => UM,
-       i: () => eM,
-       m: () => bM,
-       q: () => hM,
-       s: () => LM,
-       w: () => HM,
-       x: () => wM
-     });
-     var OM = iM(6944),
- ... (39 more removed lines; see GitHub link above)
+       set flowMap(UU) {
+         this._flowMap !== UU && (this._flowMap = UU, this._flowMapUpdate && (wX(this._flowMapUpdate), this._flowMapUpdate = null), UU && (this._flowMapUpdate = {
+           process: UU => {
+             const XU = this.nS()?.getTransformMatrix();
+             this._flowMap._processParticle(UU, this.flowMapStrength * this._tempScaledUpdateSpeed, XU)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L4074-L4166` → after: `L3852-L3859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R3852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L3852-L3859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/264.js#L3852-L3859) · [Before (L4074-L4166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/264.js#L4074-L4166)

```diff
-           validBlockIds: [aM, PM],
-           meshSize: 1.2,
-           placeSound: "splash1"
-         },
-         Speedboat: {
-           meshItemName: "INTERNAL_MESH_Speedboat",
-           physicsState: {
-             type: OM.n.BOAT,
-             tier: OM.d.SPEED
-           },
-           validBlockIds: [aM],
-           meshSize: 1.2,
-           placeSound: "splash1"
-         },
-         Hovercraft: {
-           meshItemName: "INTERNAL_MESH_Hovercraft",
- ... (77 more removed lines; see GitHub link above)
+           previousItem: null,
+           nextItem: null
+         }, CX(this._flowMapUpdate, this._directionProcessing)))
+       }
+       addAttractor(UU) {
+         super.addAttractor(UU), 1 === this._attractors.length && (this._attractorUpdate = {
+           process: UU => {
+             for (const XU of this._attractors) XU._processParticle(UU, this)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L4168-L4200` → after: `L3861-L3929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R3861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L3861-L3929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/264.js#L3861-L3929) · [Before (L4168-L4200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/264.js#L4168-L4200)

```diff
-           validBlockIds: "solidBlocks",
-           meshSize: 4,
-           placeSound: null,
-           seats: [{
-             role: "driver",
-             localOffset: [0, .25, -.2]
-           }, {
-             role: "passenger",
-             localOffset: [0, .25, -1.2]
-           }]
-         },
-         "Gold Mining Drill": {
-           ...zM,
-           meshItemName: "INTERNAL_MESH_Gold Mining Drill",
-           physicsState: {
-             type: OM.n.CAR,
- ... (17 more removed lines; see GitHub link above)
+           previousItem: null,
+           nextItem: null
+         }, CX(this._attractorUpdate, this._directionProcessing))
+       }
+       removeAttractor(UU) {
+         super.removeAttractor(UU), 0 === this._attractors.length && this._attractorUpdate && wX(this._attractorUpdate)
+       }
+       start() {
+         let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
+         this.canStart() && super.start(UU)
+       }
+       _prepareSubEmitterInternalArray() {
+         if (this._subEmitters = new Array, this.subEmitters)
+           for (const UU of this.subEmitters) UU instanceof lX ? this._subEmitters.push([new uX(UU)]) : UU instanceof uX ? this._subEmitters.push([UU]) : UU instanceof Array && this._subEmitters.push(UU)
+       }
+       _stopSubEmitters() {
+ ... (53 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L4202-L4208` → after: `L3931-L3936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R3931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L3931-L3936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/264.js#L3931-L3936) · [Before (L4202-L4208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/264.js#L4202-L4208)

```diff
-         },
-         "Moonstone Mining Drill": {
-           ...zM,
-           meshItemName: "INTERNAL_MESH_Moonstone Mining Drill",
-           physicsState: {
-             type: OM.n.CAR,
-             tier: OM.e.MOONSTONE_MINING_DRILL
+         }
+         if (UU.emitterId || 0 === UU.emitterId || void 0 !== UU.emitter ? (UU.emitterId || 0 === UU.emitterId) && yU ? (XU.emitter = yU.getLastMeshById(UU.emitterId), XU.emitter || (XU.emitter = QU.q.Zero())) : XU.emitter = QU.q.FromArray(UU.emitter) : XU.emitter = QU.q.Zero(), X … [truncated]
+           for (let zU = 0; zU < UU.animations.length; zU++) {
+             const cU = UU.animations[zU],
+               yU = (0, rX.e)("BABYLON.Animation");
+             yU && XU.animations.push(yU.Parse(cU))
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L4210-L4236` → after: `L3938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R3938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L3938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/264.js#L3938) · [Before (L4210-L4236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/264.js#L4210-L4236)

```diff
-         },
-         "Armored Car": {
-           meshItemName: "INTERNAL_MESH_Armored Car",
-           physicsState: {
-             type: OM.n.CAR,
-             tier: OM.e.ARMORED_CAR
-           },
-           validBlockIds: "solidBlocks",
-           meshSize: 4,
-           placeSound: null,
-           seats: [{
-             role: "driver",
-             localOffset: [0, .25, -.2]
-           }, {
-             role: "passenger",
-             localOffset: [0, .25, -1.2]
- ... (11 more removed lines; see GitHub link above)
+           XU.beginAnimationOnStart = UU.beginAnimationOnStart, XU.beginAnimationFrom = UU.beginAnimationFrom, XU.beginAnimationTo = UU.beginAnimationTo, XU.beginAnimationLoop = UU.beginAnimationLoop
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L4238-L4259` → after: `L3940-L3944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R3940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L3940-L3944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/264.js#L3940-L3944) · [Before (L4238-L4259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/264.js#L4238-L4259)

```diff
-       },
-       mM = Object.values(LM).map((MM => MM.meshItemName));
- 
-     function HM(MM) {
-       for (const rM of SM.e)
-         if (LM[rM].meshItemName === MM) return rM;
-       return null
-     }
- 
-     function hM(MM, rM) {
-       const iM = MM.validBlockIds;
-       if (Array.isArray(iM)) return iM.includes(rM);
-       if (rM === nM) return !1;
-       if ("solidBlocks" === iM) return !0 !== jM.k[rM].CH;
-       if ("solidBlocksOrFluid" === iM) return !0;
-       throw new Error(`Unsupported validBlockIds for ${rM}: ${JSON.stringify(iM)}`)
- ... (6 more removed lines; see GitHub link above)
+         if (UU.autoAnimate && yU && yU.beginAnimation(XU, UU.autoAnimateFrom, UU.autoAnimateTo, UU.autoAnimateLoop, UU.autoAnimateSpeed || 1), XU.startDelay = 0 | UU.startDelay, XU.minAngularSpeed = UU.minAngularSpeed, XU.maxAngularSpeed = UU.maxAngularSpeed, XU.minSize = UU.minS … [truncated]
+           for (const QU of UU.colorGradients) XU.addColorGradient(QU.gradient, EU.e.FromArray(QU.color1), QU.color2 ? EU.e.FromArray(QU.color2) : void 0);
+         if (UU.rampGradients) {
+           for (const zU of UU.rampGradients) XU.addRampGradient(zU.gradient, EU.b.FromArray(zU.color));
+           XU.useRampGradients = UU.useRampGradients
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L4261-L4267` → after: `L3946-L4007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R3946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L3946-L4007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/264.js#L3946-L4007) · [Before (L4261-L4267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/264.js#L4261-L4267)

```diff
-       },
-       dM = {
-         "Yellow Balloon": {
-           ...JM,
-           physicsState: {
-             type: OM.n.BALLOON,
-             tier: OM.b.YELLOW
+         if (UU.colorRemapGradients)
+           for (const QU of UU.colorRemapGradients) XU.addColorRemapGradient(QU.gradient, void 0 !== QU.factor1 ? QU.factor1 : QU.factor, QU.factor2);
+         if (UU.alphaRemapGradients)
+           for (const QU of UU.alphaRemapGradients) XU.addAlphaRemapGradient(QU.gradient, void 0 !== QU.factor1 ? QU.factor1 : QU.factor, QU.factor2);
+         if (UU.sizeGradients)
+           for (const QU of UU.sizeGradients) XU.addSizeGradient(QU.gradient, void 0 !== QU.factor1 ? QU.factor1 : QU.factor, QU.factor2);
+         if (UU.angularSpeedGradients)
+           for (const QU of UU.angularSpeedGradients) XU.addAngularSpeedGradient(QU.gradient, void 0 !== QU.factor1 ? QU.factor1 : QU.factor, QU.factor2);
+         if (UU.velocityGradients)
+           for (const QU of UU.velocityGradients) XU.addVelocityGradient(QU.gradient, void 0 !== QU.factor1 ? QU.factor1 : QU.factor, QU.factor2);
+         if (UU.dragGradients)
+           for (const QU of UU.dragGradients) XU.addDragGradient(QU.gradient, void 0 !== QU.factor1 ? QU.factor1 : QU.factor, QU.factor2);
+         if (UU.emitRateGradients)
+           for (const QU of UU.emitRateGradients) XU.addEmitRateGradient(QU.gradient, void 0 !== QU.factor1 ? QU.factor1 : QU.factor, QU.factor2);
+         if (UU.startSizeGradients)
+           for (const QU of UU.startSizeGradients) XU.addStartSizeGradient(QU.gradient, void 0 !== QU.factor1 ? QU.factor1 : QU.factor, QU.factor2);
+ ... (46 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L4269-L4274` → after: `L4009-L4030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R4009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L4009-L4030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/264.js#L4009-L4030) · [Before (L4269-L4274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/264.js#L4269-L4274)

```diff
-         },
-         "White Balloon": {
-           ...JM,
-           physicsState: {
-             type: OM.n.BALLOON,
-             tier: OM.b.WHITE
+           FU.parse(UU.particleEmitterType, yU)
+         } else FU = new YU.e, FU.parse(UU, yU);
+         XU.particleEmitterType = FU, XU.startSpriteCellID = UU.startSpriteCellID, XU.endSpriteCellID = UU.endSpriteCellID, XU.spriteCellLoop = UU.spriteCellLoop ?? !0, XU.spriteCellWidth = UU.spriteCellWidth, XU.spriteCellHeight = UU.spriteCellHeight, XU.spriteCellChangeSpeed = U … [truncated]
+       }
+       static Parse(UU, XU, zU) {
+         let cU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+           yU = arguments.length > 4 ? arguments[4] : void 0;
+         const AU = UU.name;
+         let FU, oU, DU = null,
+           YU = null;
+         if (XU instanceof fX.c ? FU = XU : (oU = XU, FU = oU.qp()), UU.customShader && (0, fU.e)(FU.createEffectForParticles)) {
+           YU = UU.customShader;
+           const XU = YU.shaderOptions.defines.length > 0 ? YU.shaderOptions.defines.join("\n") : "";
+           DU = FU.createEffectForParticles(YU.shaderPath.fragmentElement, YU.shaderOptions.uniforms, YU.shaderOptions.samplers, XU)
+         }
+         const NU = new lX(AU, yU || UU.xY, XU, DU, UU.isAnimationSheetEnabled);
+ ... (6 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L4276-L4281` → after: `L4032-L4036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R4032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L4032-L4036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/264.js#L4032-L4036) · [Before (L4276-L4281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/264.js#L4276-L4281)

```diff
-         },
-         "Red Balloon": {
-           ...JM,
-           physicsState: {
-             type: OM.n.BALLOON,
-             tier: OM.b.RED
+         }
+         if (UU.attractors)
+           for (const EU of UU.attractors) {
+             const UU = new nX;
+             UU.position = QU.q.FromArray(EU.position), UU.strength = EU.strength, NU.addAttractor(UU)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L4283-L4288` → after: `L4038-L4048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R4038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L4038-L4048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/264.js#L4038-L4048) · [Before (L4283-L4288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/264.js#L4283-L4288)

```diff
-         },
-         "Purple Balloon": {
-           ...JM,
-           physicsState: {
-             type: OM.n.BALLOON,
-             tier: OM.b.PURPLE
+         return lX._Parse(UU, NU, XU, zU), UU.textureMask && (NU.textureMask = EU.e.FromArray(UU.textureMask)), UU.worldOffset && (NU.worldOffset = QU.q.FromArray(UU.worldOffset)), UU.preventAutoStart && (NU.preventAutoStart = UU.preventAutoStart), UU.metadata && (NU.metadata = UU … [truncated]
+       }
+       serialize() {
+         let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         const XU = {};
+         if (lX._Serialize(XU, this, UU), XU.textureMask = this.textureMask.cyU(), XU.customShader = this.customShader, XU.preventAutoStart = this.preventAutoStart, XU.worldOffset = this.worldOffset.cyU(), this.metadata && (XU.metadata = this.metadata), this.subEmitters) {
+           XU.subEmitters = [], this._subEmitters || this._prepareSubEmitterInternalArray();
+           for (const zU of this._subEmitters) {
+             const cU = [];
+             for (const XU of zU) XU.particleSystem.doNotSerialize || cU.push(XU.serialize(UU));
+             XU.subEmitters.push(cU)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L4290-L4295` → after: `L4050-L4082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R4050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L4050-L4082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/264.js#L4050-L4082) · [Before (L4290-L4295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/264.js#L4290-L4295)

```diff
-         },
-         "Pink Balloon": {
-           ...JM,
-           physicsState: {
-             type: OM.n.BALLOON,
-             tier: OM.b.PINK
+         }
+         if (this._attractors && this._attractors.length) {
+           XU.attractors = [];
+           for (const UU of this._attractors) XU.attractors.push(UU.serialize())
+         }
+         return XU
+       }
+       static _Serialize(UU, XU, zU) {
+         if (UU.name = XU.name, UU.id = XU.id, UU.xY = XU.getCapacity(), UU.disposeOnStop = XU.disposeOnStop, UU.manualEmitCount = XU.manualEmitCount, XU.emitter.position) {
+           const zU = XU.emitter;
+           UU.emitterId = zU.id
+         } else {
+           const zU = XU.emitter;
+           UU.emitter = zU.cyU()
+         }
+         if (XU.particleEmitterType && (UU.particleEmitterType = XU.particleEmitterType.serialize()), XU.particleTexture)
+ ... (17 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L4297-L4302` → after: `L4084-L4093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R4084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L4084-L4093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/264.js#L4084-L4093) · [Before (L4297-L4302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/264.js#L4297-L4302)

```diff
-         },
-         "Orange Balloon": {
-           ...JM,
-           physicsState: {
-             type: OM.n.BALLOON,
-             tier: OM.b.ORANGE
+         }
+         const yU = XU.getRampGradients();
+         if (yU) {
+           UU.rampGradients = [];
+           for (const XU of yU) {
+             const zU = {
+               gradient: XU.gradient,
+               color: XU.color.cyU()
+             };
+             UU.rampGradients.push(zU)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L4304-L4309` → after: `L4095-L4105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R4095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L4095-L4105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/264.js#L4095-L4105) · [Before (L4304-L4309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/264.js#L4304-L4309)

```diff
-         },
-         "Magenta Balloon": {
-           ...JM,
-           physicsState: {
-             type: OM.n.BALLOON,
-             tier: OM.b.MAGENTA
+           UU.useRampGradients = XU.useRampGradients
+         }
+         const QU = XU.getColorRemapGradients();
+         if (QU) {
+           UU.colorRemapGradients = [];
+           for (const XU of QU) {
+             const zU = {
+               gradient: XU.gradient,
+               factor1: XU.factor1
+             };
+             void 0 !== XU.factor2 ? zU.factor2 = XU.factor2 : zU.factor2 = XU.factor1, UU.colorRemapGradients.push(zU)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L4311-L4316` → after: `L4107-L4116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R4107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L4107-L4116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/264.js#L4107-L4116) · [Before (L4311-L4316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/264.js#L4311-L4316)

```diff
-         },
-         "Lime Balloon": {
-           ...JM,
-           physicsState: {
-             type: OM.n.BALLOON,
-             tier: OM.b.LIME
+         }
+         const AU = XU.getAlphaRemapGradients();
+         if (AU) {
+           UU.alphaRemapGradients = [];
+           for (const XU of AU) {
+             const zU = {
+               gradient: XU.gradient,
+               factor1: XU.factor1
+             };
+             void 0 !== XU.factor2 ? zU.factor2 = XU.factor2 : zU.factor2 = XU.factor1, UU.alphaRemapGradients.push(zU)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L4318-L4323` → after: `L4118-L4127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R4118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L4118-L4127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/264.js#L4118-L4127) · [Before (L4318-L4323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/264.js#L4318-L4323)

```diff
-         },
-         "Light Gray Balloon": {
-           ...JM,
-           physicsState: {
-             type: OM.n.BALLOON,
-             tier: OM.b.LIGHT_GRAY
+         }
+         const FU = XU.getSizeGradients();
+         if (FU) {
+           UU.sizeGradients = [];
+           for (const XU of FU) {
+             const zU = {
+               gradient: XU.gradient,
+               factor1: XU.factor1
+             };
+             void 0 !== XU.factor2 ? zU.factor2 = XU.factor2 : zU.factor2 = XU.factor1, UU.sizeGradients.push(zU)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L4325-L4330` → after: `L4129-L4138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R4129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L4129-L4138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/264.js#L4129-L4138) · [Before (L4325-L4330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/264.js#L4325-L4330)

```diff
-         },
-         "Light Blue Balloon": {
-           ...JM,
-           physicsState: {
-             type: OM.n.BALLOON,
-             tier: OM.b.LIGHT_BLUE
+         }
+         const oU = XU.getAngularSpeedGradients();
+         if (oU) {
+           UU.angularSpeedGradients = [];
+           for (const XU of oU) {
+             const zU = {
+               gradient: XU.gradient,
+               factor1: XU.factor1
+             };
+             void 0 !== XU.factor2 ? zU.factor2 = XU.factor2 : zU.factor2 = XU.factor1, UU.angularSpeedGradients.push(zU)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L4332-L4337` → after: `L4140-L4149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R4140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L4140-L4149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/264.js#L4140-L4149) · [Before (L4332-L4337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/264.js#L4332-L4337)

```diff
-         },
-         "Green Balloon": {
-           ...JM,
-           physicsState: {
-             type: OM.n.BALLOON,
-             tier: OM.b.GREEN
+         }
+         const DU = XU.getVelocityGradients();
+         if (DU) {
+           UU.velocityGradients = [];
+           for (const XU of DU) {
+             const zU = {
+               gradient: XU.gradient,
+               factor1: XU.factor1
+             };
+             void 0 !== XU.factor2 ? zU.factor2 = XU.factor2 : zU.factor2 = XU.factor1, UU.velocityGradients.push(zU)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L4339-L4344` → after: `L4151-L4160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R4151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L4151-L4160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/264.js#L4151-L4160) · [Before (L4339-L4344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/264.js#L4339-L4344)

```diff
-         },
-         "Gray Balloon": {
-           ...JM,
-           physicsState: {
-             type: OM.n.BALLOON,
-             tier: OM.b.GRAY
+         }
+         const EU = XU.getDragGradients();
+         if (EU) {
+           UU.dragGradients = [];
+           for (const XU of EU) {
+             const zU = {
+               gradient: XU.gradient,
+               factor1: XU.factor1
+             };
+             void 0 !== XU.factor2 ? zU.factor2 = XU.factor2 : zU.factor2 = XU.factor1, UU.dragGradients.push(zU)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L4346-L4351` → after: `L4162-L4171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R4162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L4162-L4171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/264.js#L4162-L4171) · [Before (L4346-L4351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/264.js#L4346-L4351)

```diff
-         },
-         "Cyan Balloon": {
-           ...JM,
-           physicsState: {
-             type: OM.n.BALLOON,
-             tier: OM.b.CYAN
+         }
+         const YU = XU.getEmitRateGradients();
+         if (YU) {
+           UU.emitRateGradients = [];
+           for (const XU of YU) {
+             const zU = {
+               gradient: XU.gradient,
+               factor1: XU.factor1
+             };
+             void 0 !== XU.factor2 ? zU.factor2 = XU.factor2 : zU.factor2 = XU.factor1, UU.emitRateGradients.push(zU)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L4353-L4358` → after: `L4173-L4182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R4173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L4173-L4182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/264.js#L4173-L4182) · [Before (L4353-L4358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/264.js#L4353-L4358)

```diff
-         },
-         "Brown Balloon": {
-           ...JM,
-           physicsState: {
-             type: OM.n.BALLOON,
-             tier: OM.b.BROWN
+         }
+         const NU = XU.getStartSizeGradients();
+         if (NU) {
+           UU.startSizeGradients = [];
+           for (const XU of NU) {
+             const zU = {
+               gradient: XU.gradient,
+               factor1: XU.factor1
+             };
+             void 0 !== XU.factor2 ? zU.factor2 = XU.factor2 : zU.factor2 = XU.factor1, UU.startSizeGradients.push(zU)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L4360-L4365` → after: `L4184-L4193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R4184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L4184-L4193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/264.js#L4184-L4193) · [Before (L4360-L4365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/264.js#L4360-L4365)

```diff
-         },
-         "Blue Balloon": {
-           ...JM,
-           physicsState: {
-             type: OM.n.BALLOON,
-             tier: OM.b.BLUE
+         }
+         const IU = XU.getLifeTimeGradients();
+         if (IU) {
+           UU.lifeTimeGradients = [];
+           for (const XU of IU) {
+             const zU = {
+               gradient: XU.gradient,
+               factor1: XU.factor1
+             };
+             void 0 !== XU.factor2 ? zU.factor2 = XU.factor2 : zU.factor2 = XU.factor1, UU.lifeTimeGradients.push(zU)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L4367-L4372` → after: `L4195-L4204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R4195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L4195-L4204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/264.js#L4195-L4204) · [Before (L4367-L4372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/264.js#L4367-L4372)

```diff
-         },
-         "Black Balloon": {
-           ...JM,
-           physicsState: {
-             type: OM.n.BALLOON,
-             tier: OM.b.BLACK
+         }
+         const pU = XU.getLimitVelocityGradients();
+         if (pU) {
+           UU.limitVelocityGradients = [];
+           for (const XU of pU) {
+             const zU = {
+               gradient: XU.gradient,
+               factor1: XU.factor1
+             };
+             void 0 !== XU.factor2 ? zU.factor2 = XU.factor2 : zU.factor2 = XU.factor1, UU.limitVelocityGradients.push(zU)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L4375` → after: `L4208-L4257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R4208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L4208-L4257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/264.js#L4208-L4257) · [Before (L4375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/264.js#L4375)

```diff
-       };
+         XU.noiseTexture && (UU.noiseTexture = XU.noiseTexture.serialize())
+       }
+       clone(UU, XU) {
+         let zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+         const cU = {
+           ...this._customWrappers
+         };
+         let yU = null;
+         const QU = this._engine;
+         if ((0, fU.e)(QU.createEffectForParticles) && null != this.customShader) {
+           yU = this.customShader;
+           const UU = yU.shaderOptions.defines.length > 0 ? yU.shaderOptions.defines.join("\n") : "",
+             XU = QU.createEffectForParticles(yU.shaderPath.fragmentElement, yU.shaderOptions.uniforms, yU.shaderOptions.samplers, UU);
+           cU[0] ? cU[0].effect = XU : this.setCustomEffect(XU, 0)
+         }
+         const AU = this.serialize(zU),
+ ... (34 more added lines; see GitHub link above)
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L4378-L4379` → after: `L4260-L4267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R4260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L4260-L4267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/264.js#L4260-L4267) · [Before (L4378-L4379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/264.js#L4378-L4379)

```diff
-       var rM;
-       return null === MM || void 0 === MM ? null : null !== (rM = dM[MM]) && void 0 !== rM ? rM : null
+       switch (UU) {
+         case DU.b.TEXTURETYPE_HALF_FLOAT:
+           return 65504;
+         case DU.b.TEXTURETYPE_FLOAT:
+           return 3e38;
+         default:
+           return 1
+       }
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L4381-L4385` → after: `L4269-L4304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R4269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L4269-L4304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/264.js#L4269-L4304) · [Before (L4381-L4385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/264.js#L4381-L4385)

```diff
-     const lM = {
-         meshAttachment: {
-           size: 3,
-           offset: [0, .72, .3],
-           rotation: [-Math.PI / 2, Math.PI, Math.PI]
+     let GU = (() => {
+       var UU;
+       let XU, FU, DU, NU, GU, BU, ZU, RU, PU, WU, dU, LU, eU, CU, wU, qU = oU.d,
+         OU = [],
+         SU = [],
+         rU = [],
+         uU = [],
+         fU = [],
+         iU = [],
+         HU = [],
+         MU = [],
+         vU = [],
+         VU = [],
+         sU = [],
+         nU = [],
+         mU = [],
+ ... (20 more added lines; see GitHub link above)
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L4387-L4393` → after: `L4306-L4343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R4306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L4306-L4343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/264.js#L4306-L4343) · [Before (L4387-L4393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/264.js#L4387-L4393)

```diff
-       },
-       EM = {
-         "Wood Hang Glider": {
-           ...lM,
-           physicsState: {
-             type: OM.n.GLIDER,
-             tier: OM.h.WOOD
+         needAlphaBlending() {
+           return this.alpha < 1
+         }
+         needAlphaTesting() {
+           return !1
+         }
+         getAlphaTestTexture() {
+           return null
+         }
+         isReadyForSubMesh(XU, zU) {
+           const cU = zU._drawWrapper;
+           if (this.isFrozen && cU.effect && cU._wasPreviouslyReady) return !0;
+           zU.materialDefines || (zU.materialDefines = new gU);
+           const yU = zU.materialDefines,
+             QU = this.nS();
+           if (this._isReadyForSubMesh(zU)) return !0;
+ ... (22 more added lines; see GitHub link above)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L4395-L4400` → after: `L4345-L4357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R4345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L4345-L4357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/264.js#L4345-L4357) · [Before (L4395-L4400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/264.js#L4395-L4400)

```diff
-         },
-         "Iron Hang Glider": {
-           ...lM,
-           physicsState: {
-             type: OM.n.GLIDER,
-             tier: OM.h.IRON
+           return !(!zU.effect || !zU.effect.isReady()) && (yU._renderId = QU.getRenderId(), cU._wasPreviouslyReady = !0, !0)
+         }
+         bindForSubMesh(UU, XU, zU) {
+           const cU = this.nS(),
+             yU = zU.materialDefines;
+           if (!yU) return;
+           const QU = zU.effect;
+           if (!QU) return;
+           this._activeEffect = QU, this.bindOnlyWorldMatrix(UU), this._activeEffect.setMatrix("viewProjection", cU.getTransformMatrix()), this._mustRebind(cU, QU, zU) && ((0, aU.e)(QU, this, cU), this.pointsCloud && this._activeEffect.setFloat("pointSize", this.pointSize), this._ … [truncated]
+           const FU = cU.activeCamera;
+           if (FU) {
+             const UU = FU.getWorldMatrix();
+             this._cameraPosition.x = UU.m[12], this._cameraPosition.y = UU.m[13], this._cameraPosition.z = UU.m[14], this._activeEffect.setVector3("cameraPosition", AU.TmpVectors.Sp[0].YL(this._cameraPosition).ZyU(cU.floatingOriginOffset))
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L4402-L4407` → after: `L4359-L4361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R4359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L4359-L4361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/264.js#L4359-L4361) · [Before (L4402-L4407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/264.js#L4402-L4407)

```diff
-         },
-         "Gold Hang Glider": {
-           ...lM,
-           physicsState: {
-             type: OM.n.GLIDER,
-             tier: OM.h.GOLD
+           if (this._activeEffect.setVector3("cameraOffset", this.cameraOffset), this._activeEffect.setVector3("up", this.up), (this.rawHdrOutput || this.luminance > 0) && this._activeEffect.setFloat("luminance", this.luminance), this._activeEffect.setFloat("turbidity", this.turbi … [truncated]
+             const UU = cU.qp()._currentRenderTarget;
+             this._activeEffect.setFloat("maxColorValue", kU(UU?.texture?.type))
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L4409-L4414` → after: `L4363-L4366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R4363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L4363-L4366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/264.js#L4363-L4366) · [Before (L4409-L4414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/264.js#L4409-L4414)

```diff
-         },
-         "Diamond Hang Glider": {
-           ...lM,
-           physicsState: {
-             type: OM.n.GLIDER,
-             tier: OM.h.DIAMOND
+           if (!this.useSunPosition) {
+             const UU = Math.PI * (this.inclination - .5),
+               XU = 2 * Math.PI * (this.azimuth - .5);
+             this.sunPosition.x = this.distance * Math.cos(XU) * Math.cos(UU), this.sunPosition.y = this.distance * Math.sin(-UU), this.sunPosition.z = this.distance * Math.sin(XU) * Math.cos(UU), AU.Quaternion.FromUnitVectorsToRef(AU.Sp.UpReadOnly, this.up, this._skyOrientation), … [truncated]
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L4417-L4465` → after: `L4370-L4594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R4370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L4370-L4594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/264.js#L4370-L4594) · [Before (L4417-L4465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/264.js#L4417-L4465)

```diff
-       };
- 
-     function UM(MM) {
-       var rM;
-       return null === MM || void 0 === MM ? null : null !== (rM = EM[MM]) && void 0 !== rM ? rM : null
-     }
-     const GM = new Set(Object.values(dM).map((MM => MM.physicsState.type))),
-       CM = new Set(Object.values(EM).map((MM => MM.physicsState.type)));
- 
-     function eM(MM) {
-       return GM.has(MM)
-     }
- 
-     function bM(MM) {
-       return CM.has(MM)
-     }
- ... (33 more removed lines; see GitHub link above)
+         getAnimatables() {
+           return []
+         }
+         dispose(UU) {
+           super.dispose(UU)
+         }
+         clone(XU) {
+           return QU.b.Clone((() => new UU(XU, this.nS())), this)
+         }
+         serialize() {
+           const UU = super.serialize();
+           return UU.customType = "BABYLON.SkyMaterial", UU
+         }
+         getClassName() {
+           return "SkyMaterial"
+         }
+ ... (209 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/265.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/265.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250)

#### 1. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/265.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/265.js#L4)

```diff
-   39040: (MM, rM, iM) => {
+   42190: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L7-L11` → after: `L7-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L7-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/265.js#L7-L8) · [Before (L7-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/265.js#L7-L11)

```diff
-       g: () => OM,
-       i: () => PM,
-       k: () => SM,
-       l: () => aM,
-       m: () => jM
+       f: () => EU,
+       g: () => DU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L13-L27` → after: `L10-L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L10-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/265.js#L10-L219) · [Before (L13-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/265.js#L13-L27)

```diff
-     const OM = 1.001,
-       SM = .501,
-       jM = .025,
-       aM = .75,
-       PM = .08,
-       nM = 4;
- 
-     function QM() {
-       const MM = SM,
-         rM = jM,
-         iM = MM - rM / 2,
-         OM = (2 * MM - 2 * rM) / (2 * nM - 1),
-         aM = [];
-       for (const SM of [-iM, iM])
-         for (const jM of [-iM, iM])
+     var cU, yU = zU(37855),
+       QU = zU(37819);
+     ! function(UU) {
+       UU[UU.CW = 0] = "CW", UU[UU.CCW = 1] = "CCW"
+     }(cU || (cU = {}));
+     class AU {
+       static Interpolate(UU, XU, zU, cU, yU) {
+         if (0 === UU) return 0;
+         const QU = 1 - 3 * cU + 3 * XU,
+           AU = 3 * cU - 6 * XU,
+           FU = 3 * XU;
+         let oU = UU;
+         for (let DU = 0; DU < 5; DU++) {
+           const XU = oU * oU;
+           oU -= (QU * (XU * oU) + AU * XU + FU * oU - UU) * (1 / (3 * QU * XU + 2 * AU * oU + FU)), oU = Math.min(1, Math.max(0, oU))
+         }
+ ... (194 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L29-L35` → after: `L221-L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L221-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/265.js#L221-L293) · [Before (L29-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/265.js#L29-L35)

```diff
-             const PM = -MM + rM + OM * (2 * iM + .5);
-             aM.push([OM, rM, rM, PM, SM, jM]), aM.push([rM, OM, rM, SM, PM, jM]), aM.push([rM, rM, OM, SM, jM, PM])
-           }
-       for (const SM of [-iM, iM])
-         for (const MM of [-iM, iM])
-           for (const OM of [-iM, iM]) aM.push([rM, rM, rM, SM, MM, OM]);
-       return aM
+             AU = 0;
+             for (let oU = 0; oU < XU; oU++) cU.push(QU.q.CatmullRom(UU[FU % zU], UU[(FU + 1) % zU], UU[(FU + 2) % zU], UU[(FU + 3) % zU], AU)), AU += yU
+           }
+           cU.push(cU[0])
+         } else {
+           const zU = [];
+           zU.push(UU[0].clone()), zU.push(...UU), zU.push(UU[UU.length - 1].clone());
+           let FU = 0;
+           for (; FU < zU.length - 3; FU++) {
+             AU = 0;
+             for (let UU = 0; UU < XU; UU++) cU.push(QU.q.CatmullRom(zU[FU], zU[FU + 1], zU[FU + 2], zU[FU + 3], AU)), AU += yU
+           }
+           FU--, cU.push(QU.q.CatmullRom(zU[FU], zU[FU + 1], zU[FU + 2], zU[FU + 3], AU))
+         }
+         return new EU(cU)
+       }
+ ... (57 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L38` → after: `L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/265.js#L296) · [Before (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/265.js#L38)

```diff
-   39426: (MM, rM, iM) => {
+   39486: (UU, XU, zU) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L40-L56` → after: `L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/265.js#L298) · [Before (L40-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/265.js#L40-L56)

```diff
-       C: () => eM,
-       D: () => HM,
-       F: () => CM,
-       J: () => bM,
-       L: () => GM,
-       P: () => UM,
-       Q: () => mM,
-       S: () => JM,
-       V: () => yM,
-       X: () => SM,
-       d: () => zM,
-       h: () => nM,
-       k: () => EM,
-       o: () => QM,
-       s: () => PM,
-       u: () => aM,
- ... (1 more removed lines; see GitHub link above)
+       c: () => QU
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L58-L179` → after: `L300-L337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L300-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/265.js#L300-L337) · [Before (L58-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/265.js#L58-L179)

```diff
-     var OM = iM(9904);
- 
-     function SM(MM) {
-       return Math.floor(MM).toLocaleString("en-US")
-     }
-     const jM = 2e3,
-       aM = .005,
-       PM = .001,
-       nM = 2,
-       QM = "Fluid Tank",
-       zM = "Coolant Mixer",
-       LM = 144;
- 
-     function mM(MM) {
-       const rM = MM.split("|")[0];
-       return (0, OM.p)(rM) ? rM === OM.e ? "cryo" : "water" : null
- ... (106 more removed lines; see GitHub link above)
+     var cU = zU(39493);
+     const yU = (UU, XU, zU) => UU ? UU.getClassName && "Mesh" === UU.getClassName() ? null : !UU.getClassName || "SubMesh" !== UU.getClassName() && "PhysicsBody" !== UU.getClassName() ? UU.clone ? UU.clone() : Array.isArray(UU) ? UU.slice() : zU && "object" === typeof UU ? {
+       ...UU
+     } : null : UU.clone(XU) : null;
+     class QU {
+       static DeepCopy(UU, XU, zU, QU) {
+         let AU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         const FU = function(UU) {
+           const XU = [];
+           do {
+             const zU = Object.getOwnPropertyNames(UU);
+             for (const UU of zU) - 1 === XU.indexOf(UU) && XU.push(UU)
+           } while (UU = Object.getPrototypeOf(UU));
+           return XU
+         }(UU);
+         for (const DU of FU) {
+ ... (22 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L181` → after: `L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/265.js#L339) · [Before (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/265.js#L181)

```diff
-   39414: (MM, rM, iM) => {
+   39493: (UU, XU, zU) => {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L183-L184` → after: `L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/265.js#L341) · [Before (L183-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/265.js#L183-L184)

```diff
-       d: () => sM,
-       h: () => DM
+       b: () => cU
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L186-L645` → after: `L343-L408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L343-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/265.js#L343-L408) · [Before (L186-L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/265.js#L186-L645)

```diff
-     var OM = iM(9816),
-       SM = iM(9852);
-     const jM = [
-       [1, 0, 0],
-       [-1, 0, 0],
-       [0, 0, 1],
-       [0, 0, -1],
-       [0, 1, 0],
-       [0, -1, 0]
-     ];
-     var aM = iM(9866),
-       PM = iM(39224),
-       nM = iM(9863);
-     const QM = {
-       1: [0, -1],
-       2: [-1, 0],
- ... (444 more removed lines; see GitHub link above)
+     class cU {
+       static _CheckLimit(UU, XU) {
+         let zU = cU._LogLimitOutputs[UU];
+         return zU ? zU.current++ : (zU = {
+           limit: XU,
+           current: 1
+         }, cU._LogLimitOutputs[UU] = zU), zU.current <= zU.limit
+       }
+       static _GenerateLimitMessage(UU) {
+         let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+         const zU = cU._LogLimitOutputs[UU];
+         if (!zU || !cU.MessageLimitReached) return;
+         const yU = this._Levels[XU];
+         zU.current === zU.limit && cU[yU.name](cU.MessageLimitReached.replace(/%LIMIT%/g, "" + zU.limit).replace(/%TYPE%/g, yU.name ?? ""))
+       }
+       static _AddLogEntry(UU) {
+ ... (50 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/266.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/266.js` (79 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927)

#### 1. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4-L2844` → after: `L4-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L4-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L4-L16) · [Before (L4-L2844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L4-L2844)

```diff
-   40140: (MM, rM, iM) => {
-     function OM(MM) {
-       return !(!MM.lobbyLeaderboardInfo && !MM.lobbyManage)
-     }
-     iM.d(rM, {
-       d: () => OM
-     })
-   },
-   40059: (MM, rM, iM) => {
-     iM.d(rM, {
-       c: () => jM
-     });
-     var OM = iM(22),
-       SM = iM(2067);
- 
-     function jM(MM) {
- ... (2825 more removed lines; see GitHub link above)
+   39624: (UU, XU, zU) => {
+     var cU = {
+       "./cape_cow_cream.png": 28639,
+       "./cape_cow_normal.png": 28646,
+       "./cape_creator_level1.png": 28648,
+       "./cape_creator_level2.png": 28651,
+       "./cape_creator_level3.png": 28660,
+       "./cape_none.png": 28669,
+       "./cape_pig.png": 28676,
+       "./cape_sheep.png": 28683,
+       "./cape_super.png": 28686,
+       "./cape_super_inverted.png": 28689,
+       "./cape_youtuber.png": 28694
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L2847-L3385` → after: `L19-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L19-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L19-L22) · [Before (L2847-L3385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L2847-L3385)

```diff
-     function Or() {
-       var MM, rM;
-       return !(null === (MM = (0, gM.b)().client) || void 0 === MM || null === (rM = MM.freeCameraController) || void 0 === rM || !rM.movesFly())
-     }
- 
-     function Sr(MM) {
-       const rM = MM.on.bind(MM);
-       MM.on = (MM, iM) => {
-         EM.A.has(MM) ? rM(MM, iM) : rM(MM, (rM => {
-           var OM;
-           return null !== (OM = (0, gM.b)().client) && void 0 !== OM && OM.isReplayMode() ? function(MM) {
-             return MM in ir
-           }(MM) && Or() ? iM(rM) : void 0 : iM(rM)
-         }))
-       }
-     }
- ... (523 more removed lines; see GitHub link above)
+     function yU(UU) {
+       var XU = QU(UU);
+       return zU(XU)
+     }
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L3387-L3422` → after: `L24-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L24-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L24-L27) · [Before (L3387-L3422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L3387-L3422)

```diff
-         function OM() {
-           console.log((function(...MM) {
-             for (Wr(MM[tr[4]] = tr[1], MM[tr[52]] = MM[tr[0]].length, MM[tr[23]] = [], MM[-tr[54]] = tr[0], MM[tr[14]] = tr[0], MM[tr[0]].sort(((MM, rM) => MM - rM))), MM[-tr[53]] = tr[0]; MM[-tr[53]] < MM[tr[52]]; MM[-tr[53]]++)
-               if (!(MM[-tr[53]] > tr[0] && MM[tr[0]][MM[-tr[53]]] === MM[tr[0]][MM[-tr[53]] - tr[1]]))
-                 for (Wr(MM[-tr[54]] = MM[-tr[53]] + tr[1], MM[tr[14]] = MM[tr[52]] - tr[1]); MM[-tr[54]] < MM[tr[14]];)
-                   if (MM[tr[0]][MM[-tr[53]]] + MM[tr[0]][MM[-tr[54]]] + MM[tr[0]][MM[tr[14]]] < tr[0]) MM[-tr[54]]++;
-                   else if (MM[tr[0]][MM[-tr[53]]] + MM[tr[0]][MM[-tr[54]]] + MM[tr[0]][MM[tr[14]]] > tr[0]) MM[tr[14]]--;
-             else {
-               for (MM[tr[23]].push([MM[tr[0]][MM[-tr[53]]], MM[tr[0]][MM[-tr[54]]], MM[tr[0]][MM[tr[14]]]]); MM[-tr[54]] < MM[tr[14]] && MM[tr[0]][MM[-tr[54]]] === MM[tr[0]][MM[-tr[54]] + tr[1]];) MM[-tr[54]]++;
-               for (; MM[-tr[54]] < MM[tr[14]] && MM[tr[0]][MM[tr[14]]] === MM[tr[0]][MM[tr[14]] - tr[1]];) MM[tr[14]]--;
-               Wr(MM[-tr[54]]++, MM[tr[14]]--)
-             }
-             return MM[tr[23]]
-           }))
-         }
-         if (iM(80) + "P" in pr && OM(), (0, lM.l)()) {
- ... (20 more removed lines; see GitHub link above)
+     function QU(UU) {
+       if (!zU.o(cU, UU)) {
+         var XU = new Error("Cannot find module '" + UU + "'");
+         throw XU.code = "MODULE_NOT_FOUND", XU
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L3424-L3554` → after: `L29-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L29-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L29-L38) · [Before (L3424-L3554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L3424-L3554)

```diff
-     }), hr = function(MM) {
-       if (gr(98) in pr && function(...MM) {
-           Wr(MM[tr[4]] = tr[0], MM[tr[59]] = function(...rM) {
-             return Wr(rM[tr[4]] = tr[24], rM[tr[24]] = {}), rM[tr[6]].length !== rM[tr[0]].length + rM[tr[1]].length ? tr[57] : MM[tr[1]](rM[tr[0]], rM[tr[1]], rM[tr[6]], tr[0], tr[0], tr[0], rM[tr[24]])
-           }, MM[tr[1]] = function(...rM) {
-             return Wr(rM[tr[4]] = tr[20], rM[tr[58]] = tr[57]), rM[tr[25]] >= rM[tr[6]].length ? tr[101] : rM[tr[18]]["" + rM[tr[24]] + rM[tr[26]] + rM[tr[25]]] !== tr[12] ? rM[tr[18]]["" + rM[tr[24]] + rM[tr[26]] + rM[tr[25]]] : (rM[tr[6]][rM[tr[25]]] === rM[tr[0]][rM[tr[24]]] & … [truncated]
-           }, console.log(MM[tr[59]]))
-         }(), (arguments[gr(99)] > tr[1] && arguments[tr[1]] !== tr[12] ? arguments[tr[1]] : tr[57]) && (0, BM[tr[50]])(MM)) {
-         function iM(...MM) {
-           for (Wr(MM[tr[4]] = tr[1], MM[tr[1]] = '8/_96d}"Eu|*Am(QIaBDZz;q$&4Lv#xjJi^n,`]gNWV.=%eb2UFkCP+OwH>Go?!p0Kl31Y7t)MXc5sSf:TR~h[{@ry<', MM[tr[60]] = "" + (MM[tr[0]] || ""), MM[tr[27]] = MM[tr[60]].length, MM[tr[26]] = [], MM[tr[50]] = tr[0], MM[tr[8]] = tr[0], MM[tr[31]]  … [truncated]
-             if (MM[tr[15]] = MM[tr[1]].indexOf(MM[tr[60]][MM[tr[61]]]), MM[tr[15]] !== -tr[1])
-               if (MM[tr[31]] < tr[0]) MM[tr[31]] = MM[tr[15]];
-               else {
-                 Wr(MM[tr[31]] += MM[tr[15]] * tr[32], MM[tr[50]] |= MM[tr[31]] << MM[tr[8]], MM[tr[8]] += (MM[tr[31]] & tr[34]) > tr[35] ? tr[36] : tr[37]);
-                 do {
-                   Wr(MM[tr[26]].push(MM[tr[50]] & tr[3]), MM[tr[50]] >>= tr[2], MM[tr[8]] -= tr[2])
- ... (115 more removed lines; see GitHub link above)
+       return cU[UU]
+     }
+     yU.keys = function() {
+       return Object.keys(cU)
+     }, yU.resolve = QU, UU.exports = yU, yU.id = 39624
+   },
+   39994: (UU, XU, zU) => {
+     function cU(UU) {
+       return void 0 === UU ? void 0 : [UU[0], UU[1], UU[2]]
+     }
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L3556-L3608` → after: `L40-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L40-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L40-L59) · [Before (L3556-L3608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L3556-L3608)

```diff
-                     function QM(...MM) {
-                       return MM[tr[4]] = tr[1], typeof yr[MM[tr[0]]] === tr[10] ? yr[MM[tr[0]]] = nM(lr[MM[tr[0]]]) : yr[MM[tr[0]]]
-                     }
-                     throw Error(QM(111))
-                   }
-                 }
-                 if ((248 & MM[-tr[87]]) == tr[93] && (Wr(MM[tr[1]] = zM(), MM[tr[94]] = zM(), MM[tr[50]] = zM(), MM[tr[43]] = (MM[-tr[87]] & tr[20]) << tr[79] | MM[tr[1]] << tr[21] | MM[tr[94]] << tr[18] | MM[tr[50]]), MM[tr[43]] >= tr[71] && MM[tr[43]] <= 1114111)) return MM[tr[ … [truncated]
-                 throw Error(OM(tr[94]))
-               }
-               rM = String.fromCharCode, Wr(iM = void 0, SM = void 0, jM = void 0), Wr(MM.version = function(...MM) {
-                 return MM[tr[4]] = tr[1], typeof yr[MM[tr[0]]] === tr[10] ? yr[MM[tr[0]]] = function(MM) {
-                   var rM, iM, OM, SM, jM, aM, PM;
-                   for (Wr(rM = "" + (MM || ""), iM = rM.length, OM = [], SM = tr[0], jM = tr[0], aM = -tr[1]), PM = tr[0]; PM < iM; PM++) {
-                     var nM = 'G?`N{(58v1sWa3$>nTHlY,z)xV_Z%Pco:^!mDf&~ECB[eb=uw.K;It<hF4Q#*p/}qdJy9Mj"Ug@X27S6AR|Lkr0O+i]'.indexOf(rM[PM]);
-                     if (nM !== -tr[1])
-                       if (aM < tr[0]) aM = nM;
- ... (37 more removed lines; see GitHub link above)
+     function yU(UU) {
+       const XU = UU.particles;
+       return {
+         opts: {
+           texture: XU.texture,
+           xY: XU.xY,
+           minLifeTime: XU.minLifeTime,
+           maxLifeTime: XU.maxLifeTime,
+           minSize: XU.minSize,
+           maxSize: XU.maxSize,
+           minEmitPower: XU.minEmitPower,
+           maxEmitPower: XU.maxEmitPower,
+           emitRate: XU.emitRate,
+           gravity: cU(XU.gravity),
+           dir1: cU(XU.dir1),
+           dir2: cU(XU.dir2),
+ ... (4 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L3610-L3933` → after: `L61-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L61-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L61-L78) · [Before (L3610-L3933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L3610-L3933)

```diff
-       const rM = window[gr(116)];
-       if (typeof rM !== function(MM) {
-           return typeof yr[MM] === tr[10] ? yr[MM] = function(MM) {
-             var rM, iM, OM, SM, jM, aM, PM;
-             for (Wr(rM = "" + (MM || ""), iM = rM.length, OM = [], SM = tr[0], jM = tr[0], aM = -tr[1]), PM = tr[0]; PM < iM; PM++) {
-               var nM = '1+Hv5}pztMO{G%AQPR/$JIW7.:*`f]eUwhd)~ui#b=lqom?gry,N>cj^C3k@9K!B&X4[S_V2En0DYZ|(86T<"xaLsF;'.indexOf(rM[PM]);
-               if (nM !== -tr[1])
-                 if (aM < tr[0]) aM = nM;
-                 else {
-                   Wr(aM += nM * tr[32], SM |= aM << jM, jM += (aM & tr[34]) > tr[35] ? tr[36] : tr[37]);
-                   do {
-                     Wr(OM.push(SM & tr[3]), SM >>= tr[2], jM -= tr[2])
-                   } while (jM > tr[20]);
-                   aM = -tr[1]
-                 }
-             }
- ... (308 more removed lines; see GitHub link above)
+     }
+     zU.d(XU, {
+       c: () => yU
+     })
+   },
+   39954: (UU, XU, zU) => {
+     zU.d(XU, {
+       c: () => QU,
+       g: () => DU,
+       k: () => oU,
+       m: () => AU
+     });
+     var cU = zU(220);
+     const yU = JSON.parse('{"aura_snowfall":{"offset":[0,2.6,0],"ownInFirstPerson":true,"particles":{"blendMode":1,"capacity":64,"colorGradients":[{"minColor":[255,255,255,0.9],"timeFraction":0},{"minColor":[255,255,255,0],"timeFraction":1}],"depth":3,"dir1":[-0.2,-1,-0.2],"dir2" … [truncated]
+       QU = "PetRoot";
+     let AU = JSON.parse('{"pet_reindeer":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset … [truncated]
+ ... (2 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L3936-L3938` → after: `L81-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L81-L82) · [Before (L3936-L3938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L3936-L3938)

```diff
-       JM.i.Tz("QTEMouseState", {
-         isDown: MM
-       })
+       var XU;
+       return null !== (XU = (0, cU.b)(AU, UU)) && void 0 !== XU ? XU : null
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L3942-L3980` → after: `L86-L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L86-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L86-L87) · [Before (L3942-L3980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L3942-L3980)

```diff
-       var rM, iM, SM, jM, aM, PM, nM, QM;
-       const LM = (0, gM.f)();
-       LM.pMM = null !== (rM = function(MM, rM) {
-         var iM, OM;
-         if (!Lr) return null;
-         const SM = MM.bloxd;
-         Pr ??= SM.getMetaInfo("Board").rootId;
-         const jM = null !== (iM = null === rM || void 0 === rM ? void 0 : rM.VV) && void 0 !== iM ? iM : null;
-         if (!jM || SM.getMetaInfo(jM).rootId !== Pr) return null;
-         const aM = null !== (OM = null === rM || void 0 === rM ? void 0 : rM.position) && void 0 !== OM ? OM : null;
-         if (SM.playerCanChangePos(MM.eD, aM[0], aM[1], aM[2])) return null;
-         const PM = (MM, rM, iM) => {
-           const OM = SM.blockDataOwner.getBlockData(MM, rM, iM),
-             jM = null === OM || void 0 === OM ? void 0 : OM.persisted.shared.text.split("\n")[0].toLowerCase().trim();
-           return sM.singleLineBoardActions.has(jM)
-         };
- ... (23 more removed lines; see GitHub link above)
+       var XU;
+       return null !== (XU = (0, cU.b)(FU, UU)) && void 0 !== XU ? XU : null
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L3991` → after: `L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L90) · [Before (L3991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L3991)

```diff
-   40121: (MM, rM, iM) => {
+   39999: (UU, XU, zU) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L3996-L3997` → after: `L96-L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L96-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L96-L145) · [Before (L3996-L3997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L3996-L3997)

```diff
-     var OM = iM(39433);
-     let SM = !1;
+     class cU {
+       constructor() {
+         this.pose = {
+           pos: [0, 0, 0],
+           yaw: 0,
+           mode: "flying",
+           seated: !1,
+           clip: void 0
+         }, this.Et = [0, 0, 0], this.lastFeet = [0, 0, 0], this.target = [0, 0, 0], this.started = !1, this.speed = 0, this.stillS = 0, this.perchLocked = !1, this.sinceTakeOffS = 1 / 0
+       }
+       step(UU) {
+         var XU;
+         const {
+           feet: zU,
+           heading: cU,
+           tuning: AU
+ ... (34 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L3999-L4000` → after: `L147-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L147-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L147-L148) · [Before (L3999-L4000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L3999-L4000)

```diff
-     function jM() {
-       return SM
+     function yU(UU, XU) {
+       return UU.bobAmplitude * Math.sin(2 * Math.PI * UU.bobHz * XU)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4003-L4004` → after: `L151-L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L151-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L151-L153) · [Before (L4003-L4004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L4003-L4004)

```diff
-     function aM(MM) {
-       SM = MM, MM ? OM.i.setMultiplierType("emoteWheel", 0) : OM.i.removeMultiplier("emoteWheel")
+     function QU(UU, XU, zU, cU, yU) {
+       const [QU, AU, FU] = zU;
+       UU[0] = XU[0] + QU * yU + FU * cU, UU[1] = XU[1] + AU, UU[2] = XU[2] - QU * cU + FU * yU
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4007-L4010` → after: `L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L156) · [Before (L4007-L4010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L4007-L4010)

```diff
-   40134: (MM, rM, iM) => {
-     function OM(MM) {
-       return Boolean(MM.aU.useInventory && MM.aU.useFullInventory && MM.hU.WrM(MM.eD))
-     }
+   39962: (UU, XU, zU) => {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4012-L4013` → after: `L158-L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L158-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L158-L169) · [Before (L4012-L4013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L4012-L4013)

```diff
-       c: () => OM
-     })
+       e: () => QU
+     });
+     var cU = zU(37814),
+       yU = zU(38610);
+ 
+     function QU(UU, XU) {
+       var zU;
+       UU.blendMode = XU.blendMode, UU.minLifeTime = XU.minLifeTime, UU.maxLifeTime = XU.maxLifeTime, UU.minSize = XU.minSize, UU.maxSize = XU.maxSize, UU.minEmitPower = XU.minEmitPower, UU.maxEmitPower = XU.maxEmitPower;
+       const QU = null !== (zU = XU.gravity) && void 0 !== zU ? zU : [0, 0, 0];
+       UU.gravity = new cU.Sp(QU[0], QU[1], QU[2]);
+       for (const cU of XU.colorGradients) UU.addColorGradient(cU.timeFraction, (0, yU.k)(cU.minColor), cU.maxColor ? (0, yU.k)(cU.maxColor) : void 0)
+     }
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4015` → after: `L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L171) · [Before (L4015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L4015)

```diff
-   40028: (MM, rM, iM) => {
+   39552: (UU, XU, zU) => {
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4018` → after: `L174-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L174-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L174-L178) · [Before (L4018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L4018)

```diff
-       e: () => SM
+       f: () => RU,
+       h: () => ZU,
+       i: () => WU,
+       l: () => dU,
+       m: () => kU
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4020` → after: `L180-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L180-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L180-L197) · [Before (L4020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L4020)

```diff
-     var OM = iM(38097);
+     var cU = zU(320),
+       yU = zU(39566),
+       QU = zU(3059),
+       AU = zU(3064),
+       FU = zU(39556),
+       oU = zU(39563),
+       DU = zU(27),
+       EU = zU(111),
+       YU = zU(3203),
+       NU = zU(97),
+       IU = zU(134),
+       pU = zU(42),
+       aU = zU(3964),
+       tU = zU(123);
+     const gU = {
+       no_adapter: "start_no_adapter",
+ ... (2 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4022-L4025` → after: `L199-L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L199-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L199-L250) · [Before (L4022-L4025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L4022-L4025)

```diff
-     function SM(MM, rM) {
-       return {
-         replayedClipName: MM,
-         replayedClipAgeSeconds: rM
+     function kU(UU) {
+       var XU;
+       const zU = null !== (XU = EU.currentUrl.getSearchParam(UU)) && void 0 !== XU ? XU : pU.k.getItem(UU);
+       return null === zU || void 0 === zU || "" === zU ? null : "0" !== zU && "false" !== zU && !1 !== zU && 0 !== zU
+     }
+     async function GU(UU, XU) {
+       (0, QU.z)(null);
+       const zU = (0, AU.m)((0, AU.l)(XU.useWebGpu, !0));
+       (0, NU.setWebGpuRequested)("lite" === zU.requested && (0, NU.getWebGpuSupported)());
+       const FU = (0, AU.f)(zU.source);
+       null !== FU && console.info(`Renderer: ${zU.requested} from ${FU}`), null !== zU.fallbackReason && console.warn(`Renderer: ${zU.fallbackReason}`);
+       let EU = zU.fallbackReason;
+       if ("webgl2" !== zU.choice) {
+         const FU = await async function(UU, XU, zU, AU) {
+           const FU = await (0, NU.probeWebGpuAdapter)();
+           if ("usable" !== FU) return (0, NU.setWebGpuFallbackReason)(FU), console.info("No usable WebGPU adapter, rendering with WebGL."), "no usable WebGPU adapter";
+ ... (36 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4029-L4046` → after: `L254-L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L254-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L254-L283) · [Before (L4029-L4046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L4029-L4046)

```diff
-     function jM(MM, rM, iM, SM, jM) {
-       const aM = function(MM) {
-           if ("object" !== typeof MM || null === MM) return null;
-           const {
-             replayedClipName: rM,
-             replayedClipAgeSeconds: iM
-           } = MM;
-           return "string" === typeof rM && "number" === typeof iM ? {
-             HS: rM,
-             hS: iM
-           } : null
-         }(iM),
-         PM = null === aM ? iM : null,
-         {
-           HS: nM = null,
-           hS: QM = 0
- ... (2 more removed lines; see GitHub link above)
+     function BU() {
+       return Promise.all([zU.e(277), zU.e(278), zU.e(275), zU.e(285), zU.e(279), zU.e(284), zU.e(282), zU.e(274), zU.e(287), zU.e(299), zU.e(286), zU.e(280), zU.e(281), zU.e(264), zU.e(0)]).then((() => zU(44223)))
+     }
+     async function ZU() {
+       return (await BU()).createSceneParticleSystem
+     }
+     async function RU() {
+       Promise.all([zU.e(277), zU.e(609)]).then((() => zU(44309))).then((UU => {
+         UU.installImageBitmapTextureLoader()
+       })).catch((() => {}));
+       const [UU, XU] = await Promise.all([BU(), Promise.all([zU.e(277), zU.e(278), zU.e(275), zU.e(285), zU.e(279), zU.e(284), zU.e(282), zU.e(274), zU.e(287), zU.e(299), zU.e(286), zU.e(280), zU.e(281), zU.e(264), zU.e(0)]).then((() => zU(44318))), Promise.all([zU.e(277), zU.e(2 … [truncated]
+       return (0, FU.e)(XU.SkyMaterial), UU.default
+     }
+ 
+     function PU(UU) {
+       return "lite" === (0, AU.m)((0, AU.l)(UU, !1)).choice && (0, NU.getWebGpuSupported)() && !pU.k.getItem(tU.p)
+ ... (14 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4049` → after: `L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L286) · [Before (L4049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L4049)

```diff
-   40127: (MM, rM, iM) => {
+   39563: (UU, XU, zU) => {
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4051` → after: `L288-L289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L288-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L288-L289) · [Before (L4051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L4051)

```diff
-       c: () => zM
+       c: () => FU,
+       f: () => AU
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4053-L4055` → after: `L291-L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L291-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L291-L293) · [Before (L4053-L4055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L4053-L4055)

```diff
-     var OM = iM(39372),
-       SM = iM(332),
-       jM = iM(3063);
+     var cU = zU(27),
+       yU = zU(34809),
+       QU = zU(3203);
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4057-L4081` → after: `L295-L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L295-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L295-L297) · [Before (L4057-L4081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L4057-L4081)

```diff
-     function aM() {
-       var MM, rM, iM, OM;
-       const aM = (0, jM.f)(),
-         PM = null !== (MM = null === (rM = aM.hU.urM(aM.eD)) || void 0 === rM ? void 0 : rM.selectedItem) && void 0 !== MM ? MM : null,
-         nM = PM ? (0, jM.b)().getItemStat(aM.eD, PM.name, "attackCooldownMs") : null,
-         QM = (0, SM.cd)(nM, null === PM || void 0 === PM || null === (iM = PM.attributes.customAttributes) || void 0 === iM || null === (OM = iM.enchantments) || void 0 === OM ? void 0 : OM["Attack Speed"]);
-       return Math.max(56, Math.ceil((QM + 30) / 3))
-     }
-     class PM {
-       constructor(MM, rM) {
-         this.tries = void 0, this.dueMs = void 0, this.intervalMs = void 0, this.tries = [MM], this.dueMs = MM, this.intervalMs = rM
-       }
-       spacedBy(MM, rM) {
-         if (MM === this.intervalMs) return this;
-         const iM = this.tries[this.tries.length - 1],
-           OM = new PM(iM, MM);
- ... (9 more removed lines; see GitHub link above)
+     function AU(UU) {
+       var XU;
+       return null !== (XU = UU.parentElement) && void 0 !== XU ? XU : UU
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4083-L4118` → after: `L299-L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L299-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L299-L304) · [Before (L4083-L4118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L4083-L4118)

```diff
-     var nM = iM(40121),
-       QM = iM(1313);
-     class zM {
-       constructor() {
-         this.timer = null, this.tries = new PM(0, 0), this.check = () => {
-           const MM = Date.now(),
-             rM = this.tries.spacedBy(aM(), MM),
-             iM = rM.nextDueMs();
-           if (MM < iM) this.schedule();
-           else {
-             if (rM.noteTry(MM, iM), this.tries = rM, (0, QM.B)() && !(0, nM.c)()) {
-               var SM, PM;
-               (0, OM.g)();
-               const MM = (0, jM.f)();
-               null === (SM = MM.hU.qrM(MM.eD)) || void 0 === SM || null === (PM = SM.QG) || void 0 === PM || PM.repeatAttack()
-             }
- ... (20 more removed lines; see GitHub link above)
+ 
+     function FU(UU, XU) {
+       if (UU.clientWidth <= 0 || UU.clientHeight <= 0 || yU.c.isHeld()) return null;
+       const zU = (0, QU.k)(),
+         [AU, FU] = XU.size(zU);
+       return (0, QU.n)(AU, FU, zU, cU.e.get("clientEscMenuOptions").pixelScale)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4122` → after: `L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L307) · [Before (L4122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L4122)

```diff
-   40032: (MM, rM, iM) => {
+   42213: (UU, XU, zU) => {
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4128-L4129` → after: `L313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L313) · [Before (L4128-L4129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L4128-L4129)

```diff
-       n: () => JM,
-       p: () => LM
+       n: () => NU
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4131-L4140` → after: `L315-L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L315-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L315-L325) · [Before (L4131-L4140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L4131-L4140)

```diff
-     var OM = iM(40036),
-       SM = iM(38130),
-       jM = iM(4069),
-       aM = iM(2045),
-       PM = iM(22),
-       nM = iM(3063);
-     const QM = new OM.c;
- 
-     function zM() {
-       return QM
+     var cU = zU(1236),
+       yU = zU(2334),
+       QU = zU(37886),
+       AU = zU(38258);
+     class FU {
+       constructor(UU, XU) {
+         this.pose = UU, this.nodes = void 0, this.nodes = UU.boneNames.map((UU => XU.get(UU)))
+       }
+       write(UU) {
+         this.pose.pose(UU), (0, AU.l)(this.pose, this.nodes)
+       }
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4143-L4144` → after: `L328-L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L328-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L328-L330) · [Before (L4143-L4144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L4143-L4144)

```diff
-     function LM() {
-       QM.clear()
+     function oU(UU) {
+       UU.unfreezeWorldMatrix();
+       for (const XU of UU.getChildren()) oU(XU)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4146-L4152` → after: `L332-L347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L332-L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L332-L347) · [Before (L4146-L4152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L4146-L4152)

```diff
- 
-     function mM() {
-       for (const MM of QM.ids()) {
-         const rM = QM.getName(MM);
-         void 0 !== rM && aM.c.delete(rM)
-       }
-       LM(), PM.i.Tz("playerRosterChanged", QM.ids())
+     async function DU(UU, XU, zU, cU) {
+       let {
+         keepTransforms: yU,
+         backFaceCulling: AU
+       } = cU;
+       const FU = await (0, QU.j)(XU, UU),
+         DU = (0, QU.g)(null !== zU && void 0 !== zU ? zU : XU, UU, void 0, AU);
+       (0, QU.m)(FU, DU, {
+         keepTransforms: yU,
+         backFaceCulling: AU,
+         onProcessedMesh: XU => {
+           UU.UyU(XU, !1), XU.isVisible = !1
+         }
+       });
+       for (const QU of FU.rootNodes) oU(QU);
+       return FU
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4156-L4159` → after: `L351-L352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L351-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L351-L352) · [Before (L4156-L4159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L4156-L4159)

```diff
-       var iM, OM;
-       if (QM.has(MM)) return QM.getSetting(MM, rM);
-       const SM = (0, nM.f)();
-       return null === (iM = SM.rY[SM.eD]) || void 0 === iM || null === (OM = iM[MM]) || void 0 === OM ? void 0 : OM[rM]
+       UU.isVisible = XU;
+       for (const zU of UU.getChildMeshes()) zU.isVisible = XU
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4163-L4181` → after: `L356-L358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L356-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L356-L358) · [Before (L4163-L4181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L4163-L4181)

```diff
-       const {
-         added: rM,
-         removed: iM,
-         settingChanges: OM
-       } = QM.apply(MM);
-       for (const {
-           playerId: SM,
-           name: jM
-         }
-         of iM) void 0 === jM || dM(SM) || aM.c.delete(jM);
-       for (const {
-           playerId: jM,
-           settings: aM
-         }
-         of OM)
-         if (dM(jM)) JM(jM, aM);
- ... (3 more removed lines; see GitHub link above)
+       const XU = new Map;
+       for (const zU of UU.getNodes()) XU.set(zU.name, zU);
+       return XU
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4184-L4188` → after: `L361-L428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L361-L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L361-L428) · [Before (L4184-L4188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L4184-L4188)

```diff
-     function JM(MM) {
-       let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QM.getSettings(MM);
-       if (rM) {
-         (0, SM.e)(MM);
-         for (const iM in rM)(0, SM.d)(MM, iM, rM[iM])
+     function NU(UU, XU, zU, cU) {
+       EU(UU, !0), (0, QU.r)(UU, XU.overlayColour), zU.attachTransformNode(UU, cU, zU.getNamedNode(cU, XU.destNode))
+     }
+     class IU {
+       constructor(UU, XU, zU) {
+         this.sa = UU, this.thinInstMgr = XU, this.YH = zU, this.modelCache = {}, this.attachmentsByType = {}, this.shownBones = [], this.cosmeticNames = {}
+       }
+       loadModel(UU, XU, zU) {
+         const cU = (0, QU.h)(UU, XU);
+         return cU in this.modelCache || (this.modelCache[cU] = (async () => {
+           try {
+             const cU = YU(await DU(this.sa, UU, XU, {
+                 keepTransforms: void 0 !== zU,
+                 backFaceCulling: !1
+               })),
+               yU = void 0 === zU ? null : (0, AU.h)(zU, (UU => {
+ ... (52 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4196-L4202` → after: `L432-L434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L432-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L432-L434) · [Before (L4196-L4202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L4196-L4202)

```diff
-   39074: (MM, rM, iM) => {
-     iM.d(rM, {
-       b: () => tM,
-       f: () => CM,
-       j: () => bM,
-       n: () => wM,
-       r: () => gM
+   42288: (UU, XU, zU) => {
+     zU.r(XU), zU.d(XU, {
+       openCharacterPreview: () => zX
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4204-L4225` → after: `L436-L485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L436-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L436-L485) · [Before (L4204-L4225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L4204-L4225)

```diff
-     var OM = iM(38034),
-       SM = iM(39078),
-       jM = iM(347),
-       aM = iM.n(jM),
-       PM = iM(3809);
-     const nM = new OM.sh,
-       QM = new OM.sh,
-       zM = new OM.sh,
-       LM = new OM.sh,
-       mM = new OM.sh,
-       HM = [0, 0, 0],
-       hM = {
-         x: 0,
-         y: 0
-       },
-       JM = new OM.sh(1, 0, 0),
- ... (6 more removed lines; see GitHub link above)
+     var cU = zU(38849),
+       yU = zU(3043),
+       QU = zU(625),
+       AU = zU(37876),
+       FU = zU(2338),
+       oU = zU(37870),
+       DU = zU(40929),
+       EU = zU(41199),
+       YU = zU(42184),
+       NU = zU(37814),
+       IU = zU(41331),
+       pU = zU(37919),
+       aU = zU(41348),
+       tU = zU(42242),
+       gU = zU(37812),
+       kU = zU(42213),
+ ... (34 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4227-L4238` → after: `L487-L544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L487-L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L487-L544) · [Before (L4227-L4238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L4227-L4238)

```diff
-     function CM(MM, rM) {
-       var iM, SM;
-       const jM = eM(MM, rM);
-       if (jM) {
-         const MM = jM.x,
-           rM = jM.y,
-           iM = MM - 50,
-           OM = rM - 50;
-         return Math.abs(iM) <= PM.e && Math.abs(OM) <= (0, PM.k)() ? {
-           x: MM,
-           y: rM
-         } : RM(iM, OM)
+     function qU(UU) {
+       let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+       return new NU.Sp(UU[0] * XU, UU[1] * XU, UU[2] * XU)
+     }
+     class OU {
+       constructor(UU, XU) {
+         this.sa = UU, this.scale = XU, this.petNodes = new Map, this.particleTextures = new Map, this.petName = "pet_none", this.shownPet = null, this.petIsolated = !1, this.auraSeq = 0, this.aura = null, this.auraName = "aura_none", this.auraTuning = null, this.auraDrawn = Promi … [truncated]
+       }
+       async setPet(UU) {
+         var XU;
+         this.petName = UU, null === (XU = this.shownPet) || void 0 === XU || XU.node.YC(!1), this.shownPet = null;
+         const zU = (0, RU.k)(UU);
+         if (!zU) return;
+         let cU;
+         try {
+           cU = await this.petNode(zU.model)
+ ... (42 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4240-L4250` → after: `L546-L605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L546-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L546-L605) · [Before (L4240-L4250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L4240-L4250)

```diff
-       zM.iMM(rM[0], rM[1], rM[2]),
-         function(MM) {
-           const rM = MM.CL.YiM(),
-             iM = rM ? OM.Matrix.FromArrayToRef(rM.worldMatrix, 0, EM) : MM.CL.Hk().activeCamera.getWorldMatrix();
-           OM.sh.TransformNormalToRef(JM, iM, LM), LM.normalize(), OM.sh.TransformNormalToRef(dM, iM, mM), mM.normalize()
-         }(MM);
-       const aM = OM.sh.Dot(zM, LM);
-       let nM = -OM.sh.Dot(zM, mM);
-       Math.abs(aM) < .001 && Math.abs(nM) < .001 && (nM = -1);
-       const QM = null !== (iM = null === (SM = MM.CL.YiM()) || void 0 === SM ? void 0 : SM.projectionMatrix) && void 0 !== iM ? iM : MM.CL.Hk().activeCamera.getProjectionMatrix().m;
-       return RM(aM * QM[0], nM * QM[5])
+       writePose(UU) {
+         var XU;
+         if (!this.shownPet) return;
+         const zU = (0, RU.k)(this.petName),
+           {
+             scale: cU
+           } = this;
+         if (this.petIsolated) return void this.writeIsolatedPose(this.shownPet, zU);
+         const [yU, QU, AU] = zU.followOffset, {
+           node: FU
+         } = this.shownPet;
+         FU.position.set(yU * cU, (QU + (0, PU.e)(zU, UU) - 1) * cU, AU * cU), FU.rotation.y = zU.yawOffset, FU.RY.IUU(zU.scale * cU), null !== (XU = zU.clips) && void 0 !== XU && XU.fly && this.shownPet.play(zU.clips.fly, UU)
+       }
+       isolatePet() {
+         this.petIsolated = !0
+       }
+ ... (44 more added lines; see GitHub link above)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4254-L4263` → after: `L611-L622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L611-L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L611-L622) · [Before (L4254-L4263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L4254-L4263)

```diff
-       const iM = MM.CL.Hk(),
-         SM = iM.ph(),
-         jM = SM.getRenderWidth(),
-         aM = SM.getRenderHeight();
-       GM.width = jM, GM.height = aM;
-       const PM = MM.CL.YiM(),
-         zM = PM ? UM.iMM(PM.eye[0], PM.eye[1], PM.eye[2]) : MM.CL.camera.globalPosition;
-       nM.iMM(zM.x + 10 * rM[0], zM.y + 10 * rM[1], zM.z + 10 * rM[2]);
-       const LM = PM ? OM.Matrix.FromArrayToRef(PM.viewProjectionMatrix, 0, lM) : iM.getTransformMatrix();
-       return OM.sh.ProjectToRef(nM, yM, LM, GM, QM), QM.z < 0 || QM.z > 1 ? null : (hM.x = QM.x / jM * 100, hM.y = QM.y / aM * 100, hM)
+       if (!MU) return;
+       const AU = (0, yU.e)();
+       if (AU.nC(!1), cU.d.Player.meshApi.updatePlayerCosmetic(AU.pM, sU, UU, XU, !0), "cape" === UU)
+         if (XU === QU.f) vU.YC(!1);
+         else {
+           vU.YC(!0);
+           vU.material.diffuseTexture = new tU.b(zU(39624)(`./cape_${XU}.png`), vU.nS(), {
+             invertY: !1,
+             samplingMode: tU.b.NEAREST_NEAREST_MIPLINEAR
+           })
+         }
+       "pet" === UU ? KU.pet = lU.setPet(XU) : "aura" === UU ? KU.aura = lU.setAura(XU) : KU[UU] = mU.update(UU, XU)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4267` → after: `L626-L627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L626-L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L626-L627) · [Before (L4267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L4267)

```diff
-       return CM(MM, uM(MM, rM))
+       const [zU, cU] = (0, uU.e)(UU, XU, window.devicePixelRatio);
+       fU.setSize(Math.max(zU, Math.floor(UU)), Math.max(cU, Math.floor(XU)))
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4269-L4274` → after: `L629-L698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L629-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L629-L698) · [Before (L4269-L4274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L4269-L4274)

```diff
- 
-     function wM(MM, rM) {
-       const iM = eM(MM, uM(MM, rM));
-       return iM && {
-         x: iM.x,
-         y: iM.y
+     let hU = 0;
+     class UX {
+       constructor(UU, XU) {
+         this.framing = XU, this.ready = xU, this.dev = {
+           canvas: () => JU,
+           isolateHead(UU) {
+             const XU = VU.getNodeNames(sU);
+             for (let zU = 0; zU < XU.length; zU++) "HeadMesh" !== XU[zU] && "__root__" !== XU[zU] && "TorsoNode" !== XU[zU] && VU.setNodeEnabled(sU, zU, !1);
+             if (UU) {
+               const UU = VU.getNamedNode(sU, "HeadMesh");
+               VU.setNodeDisableColorWrite(sU, UU, !0, (UU => {
+                 const XU = new aU.StandardMaterial(`${UU.name}_depthOnly`, UU.nS());
+                 return XU.disableColorWrite = !0, XU
+               }))
+             }
+             VU.setPosition(sU, 0, -12, 0), bU("pet", "pet_none"), bU("aura", "aura_none")
+ ... (54 more added lines; see GitHub link above)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4279-L4280` → after: `L703-L709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L703-L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L703-L709) · [Before (L4279-L4280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L4279-L4280)

```diff
-       var rM, iM;
-       return 1 / (null !== (rM = null === (iM = MM.CL.YiM()) || void 0 === iM ? void 0 : iM.projectionMatrix[0]) && void 0 !== rM ? rM : MM.CL.Hk().activeCamera.getProjectionMatrix().m[0])
+       let {
+         yaw: XU,
+         pitch: zU,
+         radius: cU,
+         target: yU
+       } = UU;
+       iU.alpha = XU, iU.beta = zU, cU && (iU.radius = cU), yU && iU.target.set(yU[0], yU[1], yU[2])
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4283-L4288` → after: `L712-L739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L712-L739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L712-L739) · [Before (L4283-L4288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L4283-L4288)

```diff
-     function gM(MM, rM, iM) {
-       const OM = MM.CL.YiM(),
-         SM = OM ? OM.worldMatrix : MM.CL.Hk().activeCamera.getWorldMatrix().m,
-         jM = MM.Am;
-       for (let aM = 0; aM < 3; aM++) rM[aM] = SM[12 + aM] + jM[aM], iM[aM] = SM[8 + aM];
-       aM().normalize(iM, iM)
+     function zX(UU, XU) {
+       return UU.appendChild(JU), fU || function() {
+         fU = new DU.c(JU, !0, {
+           preserveDrawingBuffer: !0
+         });
+         const UU = (0, yU.e)();
+         fU.XyU = UU.WY.engine.XyU, HU = new EU.e(fU), HU.clearColor = new pU.e(0, 0, 0, 0), HU.ambientColor = new pU.Color3(1, 1, 1), iU = new YU.e("bt", 0, 0, 1, NU.Sp.Zero(), HU), iU.attachControl(JU, !0), iU.panningSensibility = 0, xU = (0, cU.w)("Player", HU, !0).then((XU =>  … [truncated]
+           MU = XU.meshApi, vU = XU.capeMesh, VU = UU.WY.DH;
+           const zU = 8.33;
+           sU = (0, cU.o)("Player", zU, !0, !0), VU.setPosition(sU, 0, -8.33, 0);
+           const yU = VU.getNamedNode(sU, "BodyMesh");
+           VU.attachTransformNode(vU, sU, yU), VU.set(sU, "aOpacity", 1), VU.rM(sU, "aOpacity", 1), mU = new kU.c(HU, VU, sU), lU = new OU(HU, zU), nU = new gU.AnimatorState, nU.WN = UU, nU.thinInstMgr = VU, nU.YH = sU, nU.RcU = VU.icU(sU, 0), nU.modelLifeformType = "Player", nU.n … [truncated]
+           const QU = vU.gM().boundingBox;
+           vU.position.y = ((24 - QU.maximum.y + QU.minimum.y) / 2 - 1 / 32) / zU, vU.position.z = -1 / zU, vU.rotationQuaternion = null;
+           const AU = Math.PI / 18,
+             FU = QU.maximum.y / zU;
+ ... (12 more added lines; see GitHub link above)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4291-L4295` → after: `L752-L763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L752-L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L752-L763) · [Before (L4291-L4295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L4291-L4295)

```diff
-     function uM(MM, rM) {
-       const iM = MM.Am,
-         OM = MM.CL.YiM(),
-         SM = OM ? UM.iMM(OM.eye[0], OM.eye[1], OM.eye[2]) : MM.CL.camera.globalPosition;
-       return HM[0] = rM[0] - iM[0] - SM.x, HM[1] = rM[1] - iM[1] - SM.y, HM[2] = rM[2] - iM[2] - SM.z, aM().normalize(HM, HM), HM
+     function oU(UU) {
+       return `\n\t\t\t\t${(0,FU.x)(UU,"mat2","rotate",[{name:"ang",type:"float"}],`\
+       n\ t\ t\ t\ t\ t$ {
+         (0, FU.C)(UU, "float", "s", "sin(ang)")
+       }\
+       n\ t\ t\ t\ t\ t$ {
+         (0, FU.C)(UU, "float", "c", "cos(ang)")
+       }\
+       n\ t\ t\ t\ t\ treturn $ {
+         (0, FU.k)(UU, "mat2", "c", "s", "-s", "c")
+       };\
+       n\ t\ t\ t\ t`)}\n\t\t\t`
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4299` → after: `L767-L774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L767-L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L767-L774) · [Before (L4299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L4299)

```diff
-       return (0, PM.g)(MM, rM, PM.e, (0, PM.k)())
+       let zU = (0, FU.xb)(UU, "skele" + (XU - 1));
+       for (let yU = XU - 2; yU >= 0; yU--) zU = (0, FU.mb)(UU, `boneIdx == ${yU}`, (0, FU.xb)(UU, `skele${yU}`), zU);
+       const cU = "bone.yz + rotate(bone.x) * pivot - pivot";
+       return `\n\t\t\t\t${(0,FU.C)(UU,"int","boneIdx",(0,FU.rb)(UU,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,FU.C)(UU,"vec3","bone",zU)}\n\t\t\t\t${(0,FU.C)(UU,"vec2","pivot",(0,FU.k)(UU,"vec2","0.0",`${(0,FU.Ib)(UU,"position")}.z`))}\n\t\t\t\t${(0,FU.V)(UU)?`positi … [truncated]
+     }
+ 
+     function EU(UU) {
+       return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,FU.k)(UU,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4302` → after: `L819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L819) · [Before (L4302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L4302)

```diff
-   40014: (MM, rM, iM) => {
+   39504: (UU, XU, zU) => {
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4304` → after: `L821-L822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L821-L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L821-L822) · [Before (L4304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L4304)

```diff
-       e: () => mM
+       c: () => EU,
+       g: () => YU
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4306-L4363` → after: `L824-L857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L824-L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L824-L857) · [Before (L4306-L4363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L4306-L4363)

```diff
-     var OM = iM(181),
-       SM = iM(347),
-       jM = iM.n(SM),
-       aM = iM(37699),
-       PM = iM(37705),
-       nM = iM(3063);
-     const QM = OM.f.jy * OM.f.playerEyeToHeightRatio,
-       zM = 250,
-       LM = 1.1,
-       mM = new class {
-         constructor() {
-           this.entities = new Map, this.playing = new Map, this.msSinceLastScan = 0
-         }
-         add(MM, rM) {
-           this.entities.set(MM, rM)
-         }
- ... (42 more removed lines; see GitHub link above)
+     var cU = zU(37940),
+       yU = zU(38077),
+       QU = zU(37946),
+       AU = zU(37961);
+     const FU = "bloxdTextLodBias",
+       oU = [{
+         name: FU,
+         type: "float"
+       }],
+       DU = "bloxdTextSample",
+       EU = {
+         planes: -.5,
+         boards: -.5
+       },
+       YU = {
+         name: "TextSampler",
+ ... (18 more added lines; see GitHub link above)
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4367` → after: `L901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L901) · [Before (L4367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L4367)

```diff
-   40065: (MM, rM, iM) => {
+   39556: (UU, XU, zU) => {
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4369-L4370` → after: `L903-L905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L903-L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L903-L905) · [Before (L4369-L4370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L4369-L4370)

```diff
-       b: () => jM,
-       d: () => SM
+       c: () => DU,
+       e: () => FU,
+       h: () => oU
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4372` → after: `L907-L910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L907-L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L907-L910) · [Before (L4372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L4372)

```diff
-     var OM = iM(22);
+     var cU = zU(38083),
+       yU = zU(37977);
+     const QU = new Set;
+     let AU = null;
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4375` → after: `L913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L913) · [Before (L4375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L4375)

```diff
-       return "refetchCode" === MM || "devDownloadJson" === MM || MM.startsWith("Plugin")
+       AU = UU
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4378-L4386` → after: `L916-L929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L916-L929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L916-L929) · [Before (L4378-L4386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L4378-L4386)

```diff
-     function jM(MM, rM) {
-       "refetchCode" !== MM ? "Plugin|MobAiPlugin|ShowPetUi" !== MM ? Promise.all([iM.e(121), iM.e(122), iM.e(117), iM.e(119), iM.e(236)]).then((() => iM(44386))).then((iM => {
-         let {
-           runClientGameMessage: OM
-         } = iM;
-         OM(MM, rM)
-       })).catch((rM => {
-         console.error(`Game message ${MM} failed`, rM)
-       })) : OM.i.Tz("showPetUi", rM) : OM.i.Tz("refetchCode")
+     function oU(UU) {
+       if (!AU) throw new Error("No SkyMaterial: WebGL2's backend installs it");
+       return new AU("sky", UU)
+     }
+ 
+     function DU(UU, XU, zU) {
+       if (!(0, cU.e)(UU)) return void UU.material.forceCompilation(UU, XU);
+       const AU = () => {
+         if (UU.oR()) return void QU.delete(UU);
+         const cU = (0, yU.V)(UU.material);
+         if (![null === cU || void 0 === cU ? void 0 : cU.diffuseTexture, null === cU || void 0 === cU ? void 0 : cU.opacityTexture, null === cU || void 0 === cU ? void 0 : cU.emissiveTexture, null === cU || void 0 === cU ? void 0 : cU.reflectionTexture].every((UU => !UU || zU.pre … [truncated]
+         QU.delete(UU), XU()
+       };
+       AU()
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4389` → after: `L932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L932) · [Before (L4389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L4389)

```diff
-   40048: (MM, rM, iM) => {
+   42292: (UU, XU, zU) => {
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4391` → after: `L934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L934) · [Before (L4391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L4391)

```diff
-       c: () => zM
+       e: () => QU
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4393-L4399` → after: `L936-L937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L936-L937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L936-L937) · [Before (L4393-L4399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L4393-L4399)

```diff
-     var OM = iM(1229),
-       SM = iM(1382),
-       jM = iM(19),
-       aM = iM(1360),
-       PM = iM(1373),
-       nM = iM(1591),
-       QM = iM(37416);
+     const cU = 4e5,
+       yU = 2;
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4401-L4409` → after: `L939-L942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L939-L942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L939-L942) · [Before (L4401-L4409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L4401-L4409)

```diff
-     function zM(MM) {
-       let {
-         Wr: rM,
-         sr: iM
-       } = MM;
-       const zM = null !== rM && void 0 !== rM ? rM : (0, PM.e)().gameNameWithVariation;
-       (0, OM.L)(zM) && ((0, QM.k)(), (0, aM.bb)((() => {
-         console.log("Received matchmaking order from game server to game", rM), (0, jM.j)("inGameReplay"), (0, nM.navigatePreserveSearch)((0, SM.b)(zM, null !== iM && void 0 !== iM ? iM : void 0))
-       }), "video_start"))
+     function QU(UU, XU, zU) {
+       let [QU, AU] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [UU, XU], FU = Math.min(Number.isFinite(zU) && zU > 0 ? zU : 1, yU);
+       const oU = Math.max(0, QU, UU) * Math.max(0, AU, XU) * FU * FU;
+       return oU > cU && (FU *= Math.sqrt(cU / oU)), [Math.max(1, Math.floor(Math.max(0, UU) * FU)), Math.max(1, Math.floor(Math.max(0, XU) * FU))]
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4412` → after: `L945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L945) · [Before (L4412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L4412)

```diff
-   40043: (MM, rM, iM) => {
+   42229: (UU, XU, zU) => {
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4416-L4417` → after: `L948-L949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L948-L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L948-L949) · [Before (L4416-L4417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L4416-L4417)

```diff
-       g: () => QM,
-       h: () => LM
+       i: () => kU,
+       l: () => JU
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4419-L4423` → after: `L951-L964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L951-L964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L951-L964) · [Before (L4419-L4423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L4419-L4423)

```diff
-     var OM = iM(2039),
-       SM = iM(22),
-       jM = iM(1429),
-       aM = iM(1270);
-     const PM = new Map;
+     var cU = zU(41348),
+       yU = zU(42233),
+       QU = zU(42279),
+       AU = zU(42242),
+       FU = zU(38563),
+       oU = zU(38573),
+       DU = zU(38581),
+       EU = zU(38589),
+       YU = zU(37995),
+       NU = zU(38004),
+       IU = zU(42248),
+       pU = zU(37961),
+       aU = zU(37977),
+       tU = zU(37946);
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4426-L4429` → after: `L967-L971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L967-L971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L967-L971) · [Before (L4426-L4429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L4426-L4429)

```diff
-       SM.i.Tz("newUiRequest", {
-         id: MM,
-         clientParameters: rM
-       }, !0)
+       return Object.assign((function(UU, zU, cU, yU) {
+         return XU(this.featureState, UU, zU, cU, yU)
+       }), {
+         FY: UU
+       })
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4433-L4435` → after: `L975-L1001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L975-L1001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L975-L1001) · [Before (L4433-L4435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L4433-L4435)

```diff
-       SM.i.Tz("removeUiRequest", MM, !0);
-       const rM = PM.get(MM);
-       rM && (rM.tearDownNotification(), PM.delete(MM))
+       const XU = class extends IU.c {
+           constructor(XU, zU) {
+             const cU = (0, aU.V)(XU),
+               yU = cU && (0, aU.v)(cU, UU.name);
+             for (var QU = arguments.length, AU = new Array(QU > 2 ? QU - 2 : 0), FU = 2; FU < QU; FU++) AU[FU - 2] = arguments[FU];
+             super(XU, UU.name, UU.priority, yU ? yU.defines : UU.defines(...AU), !1), this.featureState = void 0, this.featureState = zU, this._pluginManager._addPlugin(this), this._enable(!0), (0, aU.x)(this._material, UU, this.featureState, this._pluginDefineNames)
+           }
+           getClassName() {
+             return UU.className
+           }
+           isCompatible(UU) {
+             return UU === tU.b.GLSL || UU === tU.b.WGSL
+           }
+         },
+         zU = (0, pU.j)(UU);
+       for (const [cU, yU] of Object.entries(pU.e)) {
+ ... (11 more added lines; see GitHub link above)
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4438-L4441` → after: `L1008-L1110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1008-L1110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L1008-L1110) · [Before (L4438-L4441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L4438-L4441)

```diff
-     function zM() {
-       SM.i.Tz("clearUiRequests");
-       for (const MM of PM.values()) MM.tearDownNotification();
-       PM.clear()
+     function PU(UU, XU, zU) {
+       return (0, RU.g)(zU, XU.urls, (() => async function(UU, XU, zU) {
+         const {
+           width: cU
+         } = UU[0].getSize(), yU = UU.map(((UU, zU) => {
+           var yU;
+           const QU = Math.round(UU.getSize().height / cU),
+             AU = null === XU || void 0 === XU ? void 0 : XU[zU];
+           return {
+             pixels: AU && AU.byteLength === cU * cU * QU * 4 ? AU : null !== (yU = WU.get(UU.getInternalTexture())) && void 0 !== yU ? yU : UU._readPixelsSync(),
+             layers: QU
+           }
+         })), QU = Math.min(zU.qp().getCaps().texture2DArrayMaxLayerCount, 256), FU = (0, RU.d)(yU, cU, QU).map((UU => {
+           let {
+             pixels: XU,
+             layers: yU
+ ... (87 more added lines; see GitHub link above)
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4444-L4460` → after: `L1113-L1159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1113-L1159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L1113-L1159) · [Before (L4444-L4460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L4444-L4460)

```diff
-     function LM(MM, rM, iM, SM) {
-       const nM = "string" === typeof rM ? {
-           translationKey: rM
-         } : rM,
-         QM = jM.NotificationProvider.showPromptPopup({
-           title: nM.translationKey,
-           textOpts: {
-             title: (0, aM.g)(nM.params, OM.gameBridge.latest("hiddenPlayerNames"))
-           },
-           confirmText: "general:yes",
-           cancelText: "general:no",
-           destructive: iM,
-           unlockPointerKey: "uiRequestPopup"
-         });
-       PM.set(MM, QM), QM.getResult().then((rM => {
-         PM.delete(MM), "notificationTornDown" !== rM && SM(rM)
- ... (1 more removed lines; see GitHub link above)
+     function VU(UU, XU) {
+       if (!(XU instanceof cU.StandardMaterial) || XU.specularTexture) return;
+       const {
+         r: zU,
+         g: yU,
+         b: QU
+       } = XU.specularColor;
+       0 === zU && 0 === yU && 0 === QU && (UU.SPECULARTERM = !1)
+     }(0, EU.f)({
+       disableUnusedSpecularTerm: VU
+     });
+     var sU = zU(38007),
+       nU = zU(38243);
+     const mU = new RegExp(`^#define ${DU.b}\\s*$`, "m");
+     class lU extends(kU(DU.f)) {
+       constructor(UU, XU) {
+ ... (31 more added lines; see GitHub link above)
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4463` → after: `L1250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L1250) · [Before (L4463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L4463)

```diff
-   40036: (MM, rM, iM) => {
+   42273: (UU, XU, zU) => {
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4465` → after: `L1252-L1254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1252-L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L1252-L1254) · [Before (L4465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L4465)

```diff
-       c: () => OM
+       e: () => EU,
+       f: () => YU,
+       i: () => NU
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4467` → after: `L1256-L1263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1256-L1263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L1256-L1263) · [Before (L4467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L4467)

```diff
-     class OM {
+     var cU = zU(42261),
+       yU = zU(41177),
+       QU = zU(41387),
+       AU = zU(41495),
+       FU = zU(42269),
+       oU = zU(41493),
+       DU = zU(38121);
+     class EU extends AU.d {
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4469` → after: `L1265-L1267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1265-L1267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L1265-L1267) · [Before (L4469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L4469)

```diff
-         this.members = new Map
+         super(...arguments), this.model = null, this.onGeometryUpdated = (UU, XU) => {
+           this.releaseUnlessInstanced(XU)
+         }, this.onLinked = null
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4471-L4488` → after: `L1269-L1291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1269-L1291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L1269-L1291) · [Before (L4471-L4488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L4471-L4488)

```diff
-       apply(MM) {
-         const rM = {
-           added: [],
-           removed: [],
-           settingChanges: []
-         };
-         for (const OM of MM.MM) {
-           let MM = this.members.get(OM.rM);
-           if (MM || (MM = {
-               name: null,
-               settings: {}
-             }, this.members.set(OM.rM, MM), rM.added.push(OM.rM)), null !== OM.iM && (MM.name = OM.iM), null !== OM.OM || OM.SM.length > 0) {
-             const iM = null === OM.OM ? {} : JSON.parse(OM.OM);
-             Object.assign(MM.settings, iM);
-             for (const rM of OM.SM) delete MM.settings[rM], iM[rM] = void 0;
-             rM.settingChanges.push({
- ... (2 more removed lines; see GitHub link above)
+       link(UU) {
+         var XU;
+         (0, DU.p)(UU), this.model = UU, null === (XU = this.onLinked) || void 0 === XU || XU.call(this, UU)
+       }
+       relink() {
+         this.release();
+         const UU = [];
+         for (const yU of Object.values(this._vertexBuffers))
+           if (!yU.getIsInstanced()) {
+             const {
+               byteOffset: XU,
+               byteStride: zU,
+               type: cU,
+               normalized: QU
+             } = yU;
+             UU.push({
+ ... (7 more added lines; see GitHub link above)
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4490-L4498` → after: `L1293-L1328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1293-L1328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L1293-L1328) · [Before (L4490-L4498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L4490-L4498)

```diff
-           }
-         }
-         for (const OM of MM.jM) {
-           const MM = this.members.get(OM);
-           var iM;
-           if (MM) this.members.delete(OM), rM.removed.push({
-             playerId: OM,
-             name: null !== (iM = MM.name) && void 0 !== iM ? iM : void 0
-           })
+           } const XU = this._indices.length ? this._indices : null,
+           {
+             minimum: zU,
+             maximum: cU
+           } = this.extend;
+         this.link(new DU.h(UU, XU, this.getTotalVertices(), new Float64Array(zU.cyU()), new Float64Array(cU.cyU())))
+       }
+       copy(UU) {
+         if (!this.model) return super.copy(UU);
+         const XU = new EU(UU, this.nS()),
+           zU = this.yyU(void 0, !0);
+         zU && XU.setIndices(zU);
+         let AU = !1;
+         for (const QU in this._vertexBuffers) {
+           const UU = this._vertexBuffers[QU],
+             zU = UU.getData();
+ ... (20 more added lines; see GitHub link above)
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4500` → after: `L1330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L1330) · [Before (L4500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L4500)

```diff
-         return rM
+         return XU._updatable = AU, XU._boundingInfo = new QU.b(this.extend.minimum, this.extend.maximum), XU.relink(), XU
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4502-L4506` → after: `L1332-L1341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1332-L1341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L1332-L1341) · [Before (L4502-L4506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L4502-L4506)

```diff
-       has(MM) {
-         return this.members.has(MM)
-       }
-       ids() {
-         return [...this.members.keys()]
+       static mergeMeshes(UU, XU, zU, cU, yU, QU) {
+         const oU = UU[0].nS(),
+           DU = new FU.d(UU[0].name + "_merged", oU),
+           YU = new EU(AU.d.RandomId(), oU, void 0, !1, DU);
+         try {
+           if (!FU.d.MergeMeshes(UU, XU, zU, DU, yU, QU)) return DU.dispose(), null
+         } catch (NU) {
+           throw DU.dispose(), NU
+         }
+         return YU.relink(), DU
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4508-L4510` → after: `L1343-L1344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1343-L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L1343-L1344) · [Before (L4508-L4510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L4508-L4510)

```diff
-       getName(MM) {
-         var rM, iM;
-         return null !== (rM = null === (iM = this.members.get(MM)) || void 0 === iM ? void 0 : iM.name) && void 0 !== rM ? rM : void 0
+       removeVerticesData(UU) {
+         this.releaseUnlessInstanced(UU), super.removeVerticesData(UU)
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4512-L4514` → after: `L1346-L1347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1346-L1347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L1346-L1347) · [Before (L4512-L4514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L4512-L4514)

```diff
-       getSettings(MM) {
-         var rM;
-         return null === (rM = this.members.get(MM)) || void 0 === rM ? void 0 : rM.settings
+       dispose() {
+         this.release(), super.dispose()
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4516` → after: `L1349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L1349) · [Before (L4516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L4516)

```diff
-       getSetting(MM, rM) {
+       releaseUnlessInstanced(UU) {
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4518` → after: `L1351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L1351) · [Before (L4518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L4518)

```diff
-         return null === (iM = this.members.get(MM)) || void 0 === iM ? void 0 : iM.settings[rM]
+         UU && null !== (XU = this.getVertexBuffer(UU)) && void 0 !== XU && XU.getIsInstanced() || this.release()
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4520-L4521` → after: `L1353-L1354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1353-L1354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L1353-L1354) · [Before (L4520-L4521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L4520-L4521)

```diff
-       clear() {
-         this.members.clear()
+       release() {
+         this.model && ((0, DU.w)(this.model), this.model = null)
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4525` → after: `L1396-L1420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1396-L1420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L1396-L1420) · [Before (L4525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L4525)

```diff
-   40073: (MM, rM, iM) => {
+   42259: (UU, XU, zU) => {
+     function cU(UU, XU, zU) {
+       const cU = XU * XU * 4,
+         yU = UU[0].layers,
+         QU = yU * (UU.length - 1) + UU[UU.length - 1].layers,
+         AU = new Uint8Array(QU * cU);
+       UU.forEach(((XU, zU) => {
+         const QU = zU + 1 < UU.length ? Math.min(XU.layers, yU) : XU.layers;
+         AU.set(new Uint8Array(XU.pixels.buffer, XU.pixels.byteOffset, QU * cU), zU * yU * cU)
+       }));
+       const FU = Math.max(1, Math.min(QU, zU || QU));
+       if (FU === QU) return [{
+         pixels: AU,
+         layers: QU
+       }];
+       const oU = [];
+ ... (9 more added lines; see GitHub link above)
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4527-L4528` → after: `L1422-L1423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1422-L1423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L1422-L1423) · [Before (L4527-L4528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L4527-L4528)

```diff
-       b: () => OM,
-       e: () => SM
+       d: () => cU,
+       g: () => QU
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4530` → after: `L1425-L1449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1425-L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L1425-L1449) · [Before (L4530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L4530)

```diff
-     const OM = ["description", "label"];
+     const yU = new WeakMap;
+ 
+     function QU(UU, XU, zU) {
+       var cU, QU;
+       const AU = null !== (cU = yU.get(UU)) && void 0 !== cU ? cU : new Map;
+       yU.set(UU, AU);
+       const FU = null !== (QU = AU.get(XU[0])) && void 0 !== QU ? QU : [];
+       AU.set(XU[0], FU);
+       const oU = FU.find((UU => UU.urls.length === XU.length && UU.urls.every(((UU, zU) => UU === XU[zU]))));
+       if (oU) return oU.built;
+       const DU = {
+         urls: [...XU],
+         built: zU()
+       };
+       return FU.push(DU), DU.built.catch((() => {
+         FU.splice(FU.indexOf(DU), 1)
+ ... (9 more added lines; see GitHub link above)
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4533-L4537` → after: `L1452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/266.js#L1452) · [Before (L4533-L4537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/266.js#L4533-L4537)

```diff
-       const rM = MM.type;
-       return {
-         type: rM,
-         params: MM[rM]
-       }
+       return "object" === typeof UU && null !== UU && "startStep" in UU ? UU.startStep : null
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/267.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/267.js` (65 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/267.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/267.js#L4)

```diff
-   39505: (MM, rM, iM) => {
+   42213: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L6` → after: `L6-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L6-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/267.js#L6-L10) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/267.js#L6)

```diff
-       e: () => aM
+       c: () => IU,
+       d: () => DU,
+       g: () => YU,
+       k: () => EU,
+       n: () => NU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L8-L9` → after: `L12-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L12-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/267.js#L12-L15) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/267.js#L8-L9)

```diff
-     var OM = iM(39507);
-     const SM = [0, 0, 0];
+     var cU = zU(1236),
+       yU = zU(2334),
+       QU = zU(37886),
+       AU = zU(38258);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L11-L35` → after: `L17-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L17-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/267.js#L17-L18) · [Before (L11-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/267.js#L11-L35)

```diff
-       constructor(MM) {
-         let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SM;
-         this.pool = MM, this.origin = rM, this.count = 0, this.free = []
-       }
-       take() {
-         var MM;
-         const rM = null !== (MM = this.free.pop()) && void 0 !== MM ? MM : this.count++;
-         return rM >= this.pool.vL && this.pool.grow(Math.max(2 * this.pool.vL, rM + 1)), this.hide(rM), rM
-       }
-       release(MM) {
-         this.hide(MM), this.free.push(MM)
-       }
-       write(MM, rM, iM, SM) {
-         const {
-           records: jM
-         } = this.pool, {
- ... (9 more removed lines; see GitHub link above)
+       constructor(UU, XU) {
+         this.pose = UU, this.nodes = void 0, this.nodes = UU.boneNames.map((UU => XU.get(UU)))
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L37-L38` → after: `L20-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L20-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/267.js#L20-L21) · [Before (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/267.js#L37-L38)

```diff
-       dispose() {
-         this.pool.dispose()
+       write(UU) {
+         this.pose.pose(UU), (0, AU.l)(this.pose, this.nodes)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L41-L52` → after: `L24-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L24-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/267.js#L24-L40) · [Before (L41-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/267.js#L41-L52)

```diff
-     class aM {
-       constructor(MM, rM, iM) {
-         this.api = MM, this.model = rM, this.initialCapacity = iM, this.kinds = new Map, this.origin = [0, 0, 0]
-       }
-       kindOf(MM) {
-         let rM = this.kinds.get(MM);
-         if (void 0 === rM) {
-           const iM = this.api.createInstancePool({
-             ...this.model,
-             item: MM
-           }, this.initialCapacity);
-           null === iM || void 0 === iM || iM.setOrigin(this.origin[0], this.origin[1], this.origin[2]), rM = iM && new jM(iM, this.origin), this.kinds.set(MM, rM)
+ 
+     function oU(UU) {
+       UU.unfreezeWorldMatrix();
+       for (const XU of UU.getChildren()) oU(XU)
+     }
+     async function DU(UU, XU, zU, cU) {
+       let {
+         keepTransforms: yU,
+         backFaceCulling: AU
+       } = cU;
+       const FU = await (0, QU.j)(XU, UU),
+         DU = (0, QU.g)(null !== zU && void 0 !== zU ? zU : XU, UU, void 0, AU);
+       (0, QU.m)(FU, DU, {
+         keepTransforms: yU,
+         backFaceCulling: AU,
+         onProcessedMesh: XU => {
+ ... (1 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L54-L71` → after: `L42-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L42-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/267.js#L42-L44) · [Before (L54-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/267.js#L54-L71)

```diff
-         return rM
-       }
-       follow(MM) {
-         const {
-           origin: rM
-         } = this;
-         if (Math.abs(MM[0] - rM[0]) <= 512 && Math.abs(MM[1] - rM[1]) <= 512 && Math.abs(MM[2] - rM[2]) <= 512) return !1;
-         rM[0] = Math.floor(MM[0]), rM[1] = Math.floor(MM[1]), rM[2] = Math.floor(MM[2]);
-         for (const iM of this.kinds.values()) null === iM || void 0 === iM || iM.pool.setOrigin(rM[0], rM[1], rM[2]);
-         return !0
-       }
-       commit() {
-         for (const MM of this.kinds.values()) null === MM || void 0 === MM || MM.commit()
-       }
-       dispose() {
-         for (const MM of this.kinds.values()) null === MM || void 0 === MM || MM.dispose();
- ... (2 more removed lines; see GitHub link above)
+       });
+       for (const QU of FU.rootNodes) oU(QU);
+       return FU
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L84-L85` → after: `L47-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L47-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/267.js#L47-L49) · [Before (L84-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/267.js#L84-L85)

```diff
-     function aM(MM, rM, iM, OM, SM) {
-       for (let aM = 0; aM < 6; aM++) jM.includes(aM) === SM && QM(MM, rM, iM, OM, aM)
+     function EU(UU, XU) {
+       UU.isVisible = XU;
+       for (const zU of UU.getChildMeshes()) zU.isVisible = XU
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L88-L89` → after: `L52-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L52-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/267.js#L52-L55) · [Before (L88-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/267.js#L88-L89)

```diff
-     function PM(MM, rM, iM, OM) {
-       for (let SM = 0; SM < 6; SM++) QM(MM, rM, iM, OM, SM)
+     function YU(UU) {
+       const XU = new Map;
+       for (const zU of UU.getNodes()) XU.set(zU.name, zU);
+       return XU
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L92-L108` → after: `L58-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L58-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/267.js#L58-L59) · [Before (L92-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/267.js#L92-L108)

```diff
-     function nM(MM, rM, iM, jM, aM) {
-       for (let PM = 0; PM < 6; PM++)
-         for (const nM of [0, 1]) {
-           const [QM, zM, LM] = [nM + 2, nM + 1, (nM + 3) % 4], mM = MM.length / 3;
-           for (const [rM, SM] of [
-               [nM, zM],
-               [QM, zM],
-               [QM, LM],
-               [nM, LM]
-             ])
-             for (let nM = 0; nM < 3; nM++) {
-               const QM = OM[3 * (4 * PM + rM) + nM],
-                 zM = OM[3 * (4 * PM + SM) + nM];
-               MM.push((QM + (zM - QM) * aM) * jM / 2 + iM[nM])
-             }
-           for (const MM of SM) rM.push(mM + MM)
- ... (1 more removed lines; see GitHub link above)
+     function NU(UU, XU, zU, cU) {
+       EU(UU, !0), (0, QU.r)(UU, XU.overlayColour), zU.attachTransformNode(UU, cU, zU.getNamedNode(cU, XU.destNode))
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L110-L115` → after: `L61-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L61-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/267.js#L61-L126) · [Before (L110-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/267.js#L110-L115)

```diff
- 
-     function QM(MM, rM, iM, jM, aM) {
-       let [PM, nM, QM] = iM, [zM, LM, mM] = jM;
-       const HM = MM.length / 3;
-       for (let SM = 4 * aM; SM < 4 * aM + 4; SM++) MM.push(OM[3 * SM] * zM / 2 + PM, OM[3 * SM + 1] * LM / 2 + nM, OM[3 * SM + 2] * mM / 2 + QM);
-       for (const OM of SM) rM.push(HM + OM)
+     class IU {
+       constructor(UU, XU, zU) {
+         this.sa = UU, this.thinInstMgr = XU, this.YH = zU, this.modelCache = {}, this.attachmentsByType = {}, this.shownBones = [], this.cosmeticNames = {}
+       }
+       loadModel(UU, XU, zU) {
+         const cU = (0, QU.h)(UU, XU);
+         return cU in this.modelCache || (this.modelCache[cU] = (async () => {
+           try {
+             const cU = YU(await DU(this.sa, UU, XU, {
+                 keepTransforms: void 0 !== zU,
+                 backFaceCulling: !1
+               })),
+               yU = void 0 === zU ? null : (0, AU.h)(zU, (UU => {
+                 const XU = cU.get(UU);
+                 return XU ? (0, AU.g)(XU) : null
+               }));
+ ... (50 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L118` → after: `L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/267.js#L129) · [Before (L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/267.js#L118)

```diff
-   39483: (MM, rM, iM) => {
+   42180: (UU, XU, zU) => {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L120` → after: `L131-L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L131-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/267.js#L131-L133) · [Before (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/267.js#L120)

```diff
-       default: () => dl
+       openMobLineupPreview: () => lU,
+       openMobPreview: () => mU,
+       openPetPreview: () => xU
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L122-L581` → after: `L135-L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L135-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/267.js#L135-L196) · [Before (L122-L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/267.js#L122-L581)

```diff
-     var OM = iM(44);
-     const SM = [{
-         nameKey: "tierBurner",
-         cost: [],
-         islandRadius: 11.5,
-         machineAllowance: 16,
-         beltAllowance: 64,
-         newDeposits: [],
-         unlocks: [],
-         reward: null
-       }, {
-         nameKey: "tierCurrent",
-         cost: [{
-           item: "Iron Bar",
-           amount: 40
-         }, {
- ... (444 more removed lines; see GitHub link above)
+     var cU = zU(40929),
+       yU = zU(41199),
+       QU = zU(42184),
+       AU = zU(37919),
+       FU = zU(37814),
+       oU = zU(41331),
+       DU = zU(42205),
+       EU = zU(39250),
+       YU = zU(37882),
+       NU = zU(37870),
+       IU = zU(37812),
+       pU = zU(39152),
+       aU = zU(39144),
+       tU = zU(38849),
+       gU = zU(37886),
+       kU = zU(3043),
+ ... (46 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L584` → after: `L199-L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L199-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/267.js#L199-L215) · [Before (L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/267.js#L584)

```diff
-       return aM
+       if (null !== SU) return SU;
+       const UU = document.createElement("canvas");
+       UU.classList.add("MobPreviewCanvas");
+       const XU = new cU.c(UU, !0, {
+         preserveDrawingBuffer: !0
+       });
+       XU.XyU = (0, kU.e)().WY.engine.XyU;
+       const zU = new yU.e(XU);
+       zU.clearColor = new AU.e(0, 0, 0, 0), zU.ambientColor = new AU.Color3(1, 1, 1);
+       const DU = new QU.e("bt", Math.PI / 2, Math.PI / 2, eU, FU.Sp.Zero(), zU),
+         EU = new oU.d("light", new FU.Sp(-.1, 1, -.3), zU);
+       return EU.diffuse = new AU.Color3(1, 1, 1), EU.specular = new AU.Color3(1, 1, 1), EU.groundColor = new AU.Color3(.5, .5, .5), SU = {
+         engine: XU,
+         sa: zU,
+         canvas: UU,
+         camera: DU
+ ... (1 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L588-L599` → after: `L219-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L219-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/267.js#L219-L221) · [Before (L588-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/267.js#L588-L599)

```diff
-       aM = MM
-     }
-     const QM = {
-       11: "uraniumLine",
-       12: "centrifuge",
-       13: "reactorOnline",
-       14: "cryoCoolant",
-       15: "moreLasers"
-     };
- 
-     function zM() {
-       return aM ? SM.length : jM
+       return rU[UU] ??= (0, tU.w)(UU, fU().sa, !0).catch((XU => {
+         throw delete rU[UU], XU
+       })), rU[UU]
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L603-L604` → after: `L225-L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L225-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/267.js#L225-L228) · [Before (L603-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/267.js#L603-L604)

```diff
-       var rM, iM;
-       return null !== (rM = null === (iM = SM[MM - 1]) || void 0 === iM ? void 0 : iM.reactorTier) && void 0 !== rM ? rM : 0
+       let XU = uU.get(UU);
+       return XU || (XU = dU.r[UU].loadModel(fU().sa, !1).then((UU => (UU.YC(!1), UU)), (XU => {
+         throw uU.delete(UU), XU
+       })), uU.set(UU, XU)), XU
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L607-L609` → after: `L231-L300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L231-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/267.js#L231-L300) · [Before (L607-L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/267.js#L607-L609)

```diff
-     function mM(MM, rM) {
-       let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : LM(MM) > 0;
-       return iM && !aM ? "hidden" : MM <= rM ? "open" : iM ? rM < 5 ? "hidden" : rM < jM ? "teaser" : "locked" : "locked"
+     function MU(UU) {
+       var XU, zU, cU;
+       let {
+         mobType: yU,
+         variation: QU,
+         animation: AU
+       } = UU, oU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, BU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+       const ZU = null !== (XU = null === oU || void 0 === oU ? void 0 : oU.size) && void 0 !== XU ? XU : 1,
+         eU = null !== (zU = null === oU || void 0 === oU ? void 0 : oU.cosmetics) && void 0 !== zU ? zU : [],
+         qU = null !== (cU = null === oU || void 0 === oU ? void 0 : oU.jB) && void 0 !== cU ? cU : null;
+       let OU = !1,
+         SU = null,
+         rU = null;
+       const {
+         engine: uU,
+         sa: MU
+ ... (54 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L612-L622` → after: `L303-L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L303-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/267.js#L303-L329) · [Before (L612-L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/267.js#L612-L622)

```diff
-     function HM(MM, rM) {
-       let iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-       const {
-         kind: OM,
-         n: SM
-       } = dM(MM);
-       return {
-         key: rM[OM],
-         params: {
-           [OM]: iM ? String(SM) : SM
-         }
+     function VU(UU) {
+       let {
+         mobType: XU,
+         variation: zU,
+         metaInfo: cU,
+         tamed: yU
+       } = UU, QU = !1, AU = null, FU = 0;
+       const oU = (0, kU.e)(),
+         DU = oU.WY.DH,
+         EU = UU => {
+           FU += OU * (UU / 1e3) % (2 * Math.PI), DU.setRotationEulerY(AU, FU)
+         };
+       return iU(XU).then((UU => {
+         if (QU) return;
+         AU = (0, tU.o)(XU, qU, !0, !0), DU.setPosition(AU, 0, -qU, 0), UU.meshApi.updateVariation(AU, XU, zU);
+         const FU = {
+ ... (11 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L625-L632` → after: `L332-L358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L332-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/267.js#L332-L358) · [Before (L625-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/267.js#L625-L632)

```diff
-     const hM = {
-       tier: "coreTierName",
-       stage: "coreStageName",
-       atomic: "coreAtomicName"
-     };
- 
-     function JM(MM, rM) {
-       return LM(MM) > 0 && rM < jM
+     class sU {
+       constructor(UU, XU) {
+         this.place = XU, this.remove = null;
+         const {
+           engine: zU,
+           sa: cU,
+           canvas: yU
+         } = fU();
+         UU.appendChild(yU), zU.resize(), zU.runRenderLoop((() => {
+           cU.render()
+         }))
+       }
+       show(UU) {
+         var XU;
+         null === (XU = this.remove) || void 0 === XU || XU.call(this), this.remove = this.place(UU)
+       }
+ ... (11 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L634-L652` → after: `L360-L404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L360-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/267.js#L360-L404) · [Before (L634-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/267.js#L634-L652)

```diff
- 
-     function dM(MM) {
-       const rM = LM(MM);
-       if (rM > 0) return {
-         kind: "atomic",
-         n: rM,
-         short: `A${rM}`
-       };
-       const iM = function(MM) {
-         return MM >= 6 && MM <= 10 ? MM - 6 + 1 : 0
-       }(MM);
-       return iM > 0 ? {
-         kind: "stage",
-         n: iM,
-         short: `S${iM}`
-       } : {
- ... (3 more removed lines; see GitHub link above)
+     class nU {
+       constructor(UU) {
+         this.preview = void 0, this.view = {
+           figures: [],
+           shown: []
+         }, this.aspect = 1, this.placed = [], this.preview = new sU(UU, (() => () => {}))
+       }
+       show(UU) {
+         UU.figures !== this.view.figures && this.preload(UU.figures), this.view = UU, this.place()
+       }
+       resize(UU, XU) {
+         this.preview.resize(UU, XU), this.aspect = UU / XU, this.place()
+       }
+       close() {
+         this.preview.close();
+         for (const UU of this.placed) null === UU || void 0 === UU || UU.remove();
+ ... (29 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L657-L664` → after: `L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/267.js#L409) · [Before (L657-L664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/267.js#L657-L664)

```diff
-       return SM[Math.max(1, Math.min(MM, SM.length)) - 1]
-     }
- 
-     function lM(MM, rM) {
-       return MM < rM ? function(MM) {
-         var rM;
-         return null !== (rM = SM[MM]) && void 0 !== rM ? rM : null
-       }(MM) : null
+       return new sU(UU, MU)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L672-L673` → after: `L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/267.js#L413) · [Before (L672-L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/267.js#L672-L673)

```diff
-       var rM;
-       return null !== (rM = MM.baf2CoreOpen) && void 0 !== rM ? rM : jM
+       return new nU(UU)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L678` → after: `L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/267.js#L417) · [Before (L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/267.js#L678)

```diff
-       return bM.includes(MM)
+       return new sU(UU, VU)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L680-L682` → after: `L419-L428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L419-L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/267.js#L419-L428) · [Before (L680-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/267.js#L680-L682)

```diff
-     const tM = (MM, rM) => rM.map((rM => [rM, [MM]])),
-       gM = Object.fromEntries([...tM("Furnace", ["Iron Bar", "Gold Bar", "Copper Bar"]), ...tM("Workbench", ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"]), ...tM("Machine Bench", ["Burner Drill", "Crusher", "Smelter", "Conveyor Belt", "Tree Cutter", "Generator",  … [truncated]
-     new Set(["Recall Beacon", "Iron Hammer", "Wrench"]);
+   },
+   39621: (UU, XU, zU) => {
+     zU.d(XU, {
+       e: () => NU
+     });
+     var cU = zU(37940),
+       yU = zU(38037),
+       QU = zU(38077),
+       AU = zU(37961),
+       FU = zU(37946);
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L685-L686` → after: `L431-L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L431-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/267.js#L431-L441) · [Before (L685-L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/267.js#L685-L686)

```diff
-       var rM;
-       return null !== (rM = gM[MM]) && void 0 !== rM ? rM : ["Workbench"]
+       return `\n\t\t\t\t${(0,FU.x)(UU,"mat2","rotate",[{name:"ang",type:"float"}],`\
+       n\ t\ t\ t\ t\ t$ {
+         (0, FU.C)(UU, "float", "s", "sin(ang)")
+       }\
+       n\ t\ t\ t\ t\ t$ {
+         (0, FU.C)(UU, "float", "c", "cos(ang)")
+       }\
+       n\ t\ t\ t\ t\ treturn $ {
+         (0, FU.k)(UU, "mat2", "c", "s", "-s", "c")
+       };\
+       n\ t\ t\ t\ t`)}\n\t\t\t`
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L689-L690` → after: `L444-L448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L444-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/267.js#L444-L448) · [Before (L689-L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/267.js#L689-L690)

```diff
-     function RM(MM) {
-       return uM(MM)[0]
+     function DU(UU, XU) {
+       let zU = (0, FU.xb)(UU, "skele" + (XU - 1));
+       for (let yU = XU - 2; yU >= 0; yU--) zU = (0, FU.mb)(UU, `boneIdx == ${yU}`, (0, FU.xb)(UU, `skele${yU}`), zU);
+       const cU = "bone.yz + rotate(bone.x) * pivot - pivot";
+       return `\n\t\t\t\t${(0,FU.C)(UU,"int","boneIdx",(0,FU.rb)(UU,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,FU.C)(UU,"vec3","bone",zU)}\n\t\t\t\t${(0,FU.C)(UU,"vec2","pivot",(0,FU.k)(UU,"vec2","0.0",`${(0,FU.Ib)(UU,"position")}.z`))}\n\t\t\t\t${(0,FU.V)(UU)?`positi … [truncated]
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L697` → after: `L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/267.js#L452) · [Before (L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/267.js#L697)

```diff
-       return "on" === MM
+       return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,FU.k)(UU,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L699-L710` → after: `L454-L460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L454-L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/267.js#L454-L460) · [Before (L699-L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/267.js#L699-L710)

```diff
-     var DM = iM(332);
-     const kM = "Mob Farm",
-       ZM = {
-         Pig: 1,
-         Cow: 1,
-         Sheep: 1,
-         Deer: 1,
-         Stag: 1,
-         "Draugr Zombie": 2,
-         "Draugr Skeleton": 2,
-         "Cave Golem": 3,
-         "Magma Golem": 3
+     const YU = {
+         x: 0,
+         y: 0,
+         z: 0,
+         zY(UU, XU) {
+           return this.x = UU[XU], this.y = UU[XU + 1], this.z = UU[XU + 2], this
+         }
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L714-L716` → after: `L463-L514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L463-L514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/267.js#L463-L514) · [Before (L714-L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/267.js#L714-L716)

```diff
-         1: 20,
-         2: 60,
-         3: 120
+         name: "Cape",
+         className: "CapeMaterialPlugin",
+         priority: 200,
+         defines: (UU, XU) => ({
+           ...(0, cU.d)("CAPE"),
+           BLOXD_CAPE_BONES: `${UU}`,
+           BLOXD_CAPE_MAX_Y: (0, yU.Ab)(XU)
+         }),
+         getUniforms(UU) {
+           return (0, QU.d)(function(UU) {
+             const XU = [];
+             for (let zU = 0; zU < UU; zU++) XU.push({
+               name: `skele${zU}`,
+               type: "highp vec3"
+             });
+             return XU
+ ... (36 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L718-L730` → after: `L516-L559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L516-L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/267.js#L516-L559) · [Before (L718-L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/267.js#L718-L730)

```diff
-       YM = "baf2farmvoid",
-       NM = "Caged ",
-       AM = " Spawner Block";
- 
-     function xM(MM) {
-       return `lifeform:${(0,DM.me)(MM)}`
-     }
- 
-     function vM(MM) {
-       if (!MM) return null;
-       if (MM.startsWith(NM)) {
-         const rM = MM.slice(6);
-         return oM.includes(rM) ? rM : null
+       YU = {
+         name: "TextSampler",
+         className: "TextSamplerMaterialPlugin",
+         priority: 60,
+         defines: () => (0, cU.d)("TEXT_SAMPLER"),
+         getUniforms: UU => (0, yU.d)(oU, "fragment", UU),
+         bind(UU) {
+           UU.updateFloat(FU, this.lodBias)
+         },
+         uniformsVersion: () => 0,
+         getCustomCode(UU, XU) {
+           if ("fragment" !== UU) return null;
+           const zU = (0, QU.L)(XU, `vec4 ${DU}(sampler2D s, vec2 uv, float bias)`, `fn ${DU}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
+             cU = (0, QU.L)(XU, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
+             yU = `${(0,QU.R)(XU,"vDiffuseUV")} + uvOffset`,
+             AU = (0, QU.L)(XU, `${DU}(diffuseSampler, ${yU}, ${(0,QU.xb)(XU,FU)})`, `${DU}(diffuseSampler, diffuseSamplerSampler, ${yU}, ${(0,QU.xb)(XU,FU)})`);
+ ... (28 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L732-L734` → after: `L561-L562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L561-L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/267.js#L561-L562) · [Before (L732-L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/267.js#L732-L734)

```diff
-       if (MM.endsWith(AM)) {
-         const rM = MM.slice(0, -14);
-         return void 0 !== ZM[rM] ? rM : null
+       dispose(UU) {
+         (0, EU.k)(this._material), super.dispose(UU)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L736-L741` → after: `L564-L598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L564-L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/267.js#L564-L598) · [Before (L736-L741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/267.js#L736-L741)

```diff
-       return null
-     }
- 
-     function FM(MM) {
-       return !0 === MM.mobFarm
-     }
+     }(0, cU.l)(NU.g, IU), (0, NU.i)({
+       disableUnusedSpecularTerm: cU.e,
+       isLightingDisabled: UU => UU instanceof YU.StandardMaterial && UU.disableLighting
+     });
+     var pU = zU(39504);
+     class aU extends((0, cU.i)(pU.g)) {}(0, cU.l)(pU.g, aU);
+     var tU = zU(39621),
+       gU = zU(37932),
+       kU = zU(38891),
+       GU = zU(38046);
+     class BU extends((0, cU.i)(tU.e)) {}(0, cU.l)(tU.e, BU);
+     class ZU extends((0, cU.i)(gU.b)) {}(0, cU.l)(gU.b, ZU);
+     class RU extends((0, cU.i)(kU.p)) {}(0, cU.l)(kU.p, RU);
+     class PU extends((0, cU.i)(GU.d)) {}(0, cU.l)(GU.d, PU)
+   },
+   42229: (UU, XU, zU) => {
+ ... (19 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L744-L752` → after: `L601-L605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L601-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/267.js#L601-L605) · [Before (L744-L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/267.js#L744-L752)

```diff
-       return fM[ZM[rM]] * MM.opMs / 1e3
-     }
-     const XM = new Map;
-     const IM = "baf2islands",
-       KM = "baf2islandnew";
- 
-     function qM(MM) {
-       const rM = SM.findIndex((rM => rM.unlocks.includes(MM)));
-       return rM < 0 ? 1 : rM + 1
+       return Object.assign((function(UU, zU, cU, yU) {
+         return XU(this.featureState, UU, zU, cU, yU)
+       }), {
+         FY: UU
+       })
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L756` → after: `L609-L635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L609-L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/267.js#L609-L635) · [Before (L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/267.js#L756)

```diff
-       return Math.floor(MM).toLocaleString("en-US")
+       const XU = class extends IU.c {
+           constructor(XU, zU) {
+             const cU = (0, aU.V)(XU),
+               yU = cU && (0, aU.v)(cU, UU.name);
+             for (var QU = arguments.length, AU = new Array(QU > 2 ? QU - 2 : 0), FU = 2; FU < QU; FU++) AU[FU - 2] = arguments[FU];
+             super(XU, UU.name, UU.priority, yU ? yU.defines : UU.defines(...AU), !1), this.featureState = void 0, this.featureState = zU, this._pluginManager._addPlugin(this), this._enable(!0), (0, aU.x)(this._material, UU, this.featureState, this._pluginDefineNames)
+           }
+           getClassName() {
+             return UU.className
+           }
+           isCompatible(UU) {
+             return UU === tU.b.GLSL || UU === tU.b.WGSL
+           }
+         },
+         zU = (0, pU.j)(UU);
+       for (const [cU, yU] of Object.entries(pU.e)) {
+ ... (11 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L758-L761` → after: `L637-L640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L637-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/267.js#L637-L640) · [Before (L758-L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/267.js#L758-L761)

```diff
-     var VM = iM(39426);
-     const cM = "baf2terminaltake",
-       Mr = "baf2terminalput",
-       rr = ["one", "stack", "fill"];
+     class GU extends(kU(FU.c)) {}
+     var BU = zU(40929),
+       ZU = zU(42257),
+       RU = zU(42259);
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L764` → after: `L643-L671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L643-L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/267.js#L643-L671) · [Before (L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/267.js#L764)

```diff
-       return `${cM} ${MM} ${rM} ${iM}`
+       return (0, RU.g)(zU, XU.urls, (() => async function(UU, XU, zU) {
+         const {
+           width: cU
+         } = UU[0].getSize(), yU = UU.map(((UU, zU) => {
+           var yU;
+           const QU = Math.round(UU.getSize().height / cU),
+             AU = null === XU || void 0 === XU ? void 0 : XU[zU];
+           return {
+             pixels: AU && AU.byteLength === cU * cU * QU * 4 ? AU : null !== (yU = WU.get(UU.getInternalTexture())) && void 0 !== yU ? yU : UU._readPixelsSync(),
+             layers: QU
+           }
+         })), QU = Math.min(zU.qp().getCaps().texture2DArrayMaxLayerCount, 256), FU = (0, RU.d)(yU, cU, QU).map((UU => {
+           let {
+             pixels: XU,
+             layers: yU
+           } = UU;
+ ... (13 more added lines; see GitHub link above)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L766-L768` → after: `L673-L714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L673-L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/267.js#L673-L714) · [Before (L766-L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/267.js#L766-L768)

```diff
- 
-     function Or(MM, rM, iM) {
-       return `${Mr} ${MM} ${rM} ${iM}`
+     const WU = new WeakMap;
+     var dU = zU(38592);
+     class LU extends(kU(oU.j)) {
+       constructor(UU, XU) {
+         super(UU, XU), this.loaded = new Set, this.mirrors = void 0, this.mirrors = XU.textures.map((UU => UU.mirror)), XU.useWebGL2 && !XU.imagesPerAtlas.length && XU.textureAtlases.splice(0, XU.textureAtlases.length, ...this.mirrors.map((() => null))), this.mirrors.forEach(((UU … [truncated]
+           UU.onLoadObservable.add((UU => {
+             this.setTextureArrayData(UU, XU).catch((UU => {
+               console.error(`Failed to build the texture arrays, at atlas ${XU}`, UU)
+             }))
+           }))
+         })), (0, dU.h)(XU, UU.shaderLanguage)
+       }
+       async setTextureArrayData(UU, XU) {
+         const zU = this.featureState,
+           {
+             width: cU,
+ ... (26 more added lines; see GitHub link above)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L770-L772` → after: `L716-L744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L716-L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/267.js#L716-L744) · [Before (L770-L772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/267.js#L770-L772)

```diff
- 
-     function Sr(MM) {
-       return `${Mr} ${MM}`
+     const HU = {
+       Mesh: qU.d,
+       TransformNode: rU.c,
+       XY: eU.b,
+       VertexBuffer: eU.e,
+       BoundingInfo: CU.b,
+       Sp: wU.Sp,
+       ArenaBuffer: iU,
+       SubMesh: SU.d,
+       VertexData: OU.c,
+       MirroredGeometry: fU.e,
+       meshFromArrays: fU.f,
+       plainMeshFromArrays: fU.i
+     };
+     (0, uU.d)(HU);
+     var MU = zU(38057);
+ ... (13 more added lines; see GitHub link above)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L779-L16755` → after: `L747-L763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L747-L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/267.js#L747-L763) · [Before (L779-L16755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/267.js#L779-L16755)

```diff
-     function ar(MM) {
-       const rM = jr.find((rM => {
-         let [iM] = rM;
-         return MM.startsWith(iM)
-       }));
-       if (!rM) return null;
-       const [iM, OM] = rM, [SM, jM, ...aM] = MM.slice(iM.length).trim().split(" "), PM = Number(SM);
-       if (!Number.isSafeInteger(PM) || PM <= 0) return null;
-       if ("put" === OM && void 0 === jM) return {
-         kind: "putAll",
-         seq: PM
-       };
-       const nM = function(MM) {
-         if (rr.includes(MM)) return MM;
-         const rM = Number(MM);
-         return /^\d+$/.test(MM) && Number.isSafeInteger(rM) && rM > 0 ? rM : null
- ... (15961 more removed lines; see GitHub link above)
+     function VU(UU, XU) {
+       if (!(XU instanceof cU.StandardMaterial) || XU.specularTexture) return;
+       const {
+         r: zU,
+         g: yU,
+         b: QU
+       } = XU.specularColor;
+       0 === zU && 0 === yU && 0 === QU && (UU.SPECULARTERM = !1)
+     }(0, EU.f)({
+       disableUnusedSpecularTerm: VU
+     });
+     var sU = zU(38007),
+       nU = zU(38243);
+     const mU = new RegExp(`^#define ${DU.b}\\s*$`, "m");
+     class lU extends(kU(DU.f)) {
+       constructor(UU, XU) {
+ ... (1 more added lines; see GitHub link above)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L16757-L16775` → after: `L765-L767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L765-L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/267.js#L765-L767) · [Before (L16757-L16775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/267.js#L16757-L16775)

```diff
-     }
- 
-     function By(MM) {
-       return "Reactor Frame" === jO("reactor", MM)
-     }
- 
-     function Xy(MM) {
-       return Ni("reactor", MM) && !By(MM) && (MM.startsWith("Reactor Glass") || MM.startsWith("Reactor Port"))
-     }
-     const Iy = "baf2Goal";
-     class Ky {
-       constructor() {
-         this.goal = null, this.open = null, this.checkedAt = -1 / 0, this.subs = [sS.i.subscribe("setDirectionArrow", (MM => {
-           let {
-             id: rM,
-             position: iM
- ... (3 more removed lines; see GitHub link above)
+       prewarmDitherTwins(UU) {
+         const XU = new WeakSet;
+         UU.onEffectCreatedObservable.add((zU => {
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L16777` → after: `L769-L770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L769-L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/267.js#L769-L770) · [Before (L16777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/267.js#L16777)

```diff
-             id: rM
+             effect: cU,
+             subMesh: yU
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L16779-L16922` → after: `L772-L777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L772-L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/267.js#L772-L777) · [Before (L16779-L16922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/267.js#L16779-L16922)

```diff
-           null !== rM && rM !== Iy || (this.goal = null, this.open = null)
-         }))]
-       }
-       dispose() {
-         for (const MM of this.subs) sS.i.unsubscribe(MM)
-       }
-       sideOf(MM, rM, iM, OM) {
-         const SM = this.goal;
-         if (!SM) return 0;
-         iM - this.checkedAt > 1e3 && (this.checkedAt = iM, this.open = function(MM, rM) {
-           const [iM, OM, SM] = MM.map(Math.floor);
-           if (!Xy(rM(iM, OM, SM))) return null;
-           for (const [jM, aM] of [
-               [1, 0],
-               [0, 1]
-             ]) {
- ... (128 more removed lines; see GitHub link above)
+           if (this.featureState.prewarmingDither || XU.has(cU)) return;
+           XU.add(cU);
+           const QU = null === yU || void 0 === yU ? void 0 : yU.getMesh();
+           QU && !mU.test(cU.defines) && UU.nS().onAfterRenderObservable.addOnce((() => {
+             this.prewarmDither(QU) || XU.delete(cU)
+           }))
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L16925-L16968` → after: `L780-L787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L780-L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/267.js#L780-L787) · [Before (L16925-L16968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/267.js#L16925-L16968)

```diff
-       shiftLeftOf(MM, rM) {
-         var iM;
-         const OM = this.anchorOf(MM);
-         if (!OM) return 0;
-         const {
-           y: SM
-         } = OM, jM = OM.x + (null !== (iM = this.labelOffsets.get(MM)) && void 0 !== iM ? iM : 0), aM = this.em, {
-           halfWidth: PM,
-           labelled: nM
-         } = this.extentOf(MM), QM = SM - aM, zM = jM + PM;
-         return SM + aM * (nM ? 6.2 : 3) < rM.top || QM > rM.bottom || zM < rM.left - 6 || jM - PM > rM.right ? 0 : Math.max(rM.left - 6 - zM, 6 - (jM - PM))
-       }
-       shiftOnScreen(MM) {
-         var rM;
-         const iM = this.anchorOf(MM);
-         if (!iM) return 0;
- ... (28 more removed lines; see GitHub link above)
+       prewarmDither(UU) {
+         if (this.kp || UU.oR()) return !1;
+         const XU = new SU.d(0, 0, 0, 0, 0, UU, void 0, !1, !1);
+         this.featureState.prewarmingDither = !0;
+         try {
+           this._material.isReadyForSubMesh(UU, XU)
+         } finally {
+           this.featureState.prewarmingDither = !1
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L16971-L16991` → after: `L791-L792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L791-L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/267.js#L791-L792) · [Before (L16971-L16991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/267.js#L16971-L16991)

```diff
-       halfWidthOf(MM) {
-         let rM = this.halfWidths.get(MM);
-         return void 0 === rM && (rM = MM.offsetWidth / 2, this.halfWidths.set(MM, rM), this.sizes.observe(MM), this.labels.add(MM)), rM
-       }
-       forgetGoneLabels() {
-         for (const MM of this.labels) MM.isConnected || (this.sizes.unobserve(MM), this.halfWidths.delete(MM), this.labels.delete(MM))
-       }
-       anchorOf(MM) {
-         const rM = MM.style.translate,
-           iM = this.anchors.get(MM);
-         if (iM && iM.translate === rM && iM.innerWidth === this.innerWidth && iM.innerHeight === this.innerHeight) return iM;
-         const OM = /^(-?[\d.]+)vw (-?[\d.]+)vh$/.exec(rM);
-         if (!OM) return null;
-         const SM = {
-           translate: rM,
-           x: parseFloat(OM[1]) / 100 * this.innerWidth,
- ... (5 more removed lines; see GitHub link above)
+       dispose(UU) {
+         this.kp = !0, super.dispose(UU)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L16994` → after: `L795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/267.js#L795) · [Before (L16994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/267.js#L16994)

```diff
-     const Ty = "Baf2ArrowText";
+     const xU = new Map;
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L16997-L16998` → after: `L798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/267.js#L798) · [Before (L16997-L16998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/267.js#L16997-L16998)

```diff
-       const iM = MM.rows.find((MM => MM.current));
-       return sM(MM.tutorial) && null !== iM && void 0 !== iM && iM.item && vS(iM) && uM(iM.item).includes(rM) ? iM.item : null
+       xU.set(UU, XU)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L17000-L17019` → after: `L800-L880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L800-L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/267.js#L800-L880) · [Before (L17000-L17019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/267.js#L17000-L17019)

```diff
-     const cy = new class {
-       constructor(MM) {
-         this.select = MM, this.picks = new Map
-       }
-       open(MM, rM, iM) {
-         const OM = Vy(rM, MM);
-         null !== OM && this.LH(MM, OM, iM)
-       }
-       follow(MM, rM) {
-         if (PM())
-           for (const [iM, {
-               item: OM,
-               had: SM
-             }] of this.picks) {
-             const jM = Vy(MM, iM);
-             jM !== OM && (null !== jM && rM(OM) > SM ? this.LH(iM, jM, rM) : this.picks.delete(iM))
- ... (4 more removed lines; see GitHub link above)
+     JU(FU.c, GU), JU(oU.j, LU), JU(DU.f, lU), JU(EU.h, vU), (0, YU.e)({
+       create: (UU, XU) => {
+         const zU = new cU.StandardMaterial(UU.name, XU);
+         return (0, sU.m)(UU, zU), zU.detailMap._pluginDefineNames
+       },
+       write: (UU, XU, zU) => {
+         (0, sU.S)(UU.mirror, XU, zU)
+       },
+       addFeature: (UU, XU, zU) => {
+         const cU = xU.get(XU.feature);
+         if (!cU) throw new Error(`${XU.feature.name} has no plugin class (registerPluginClass)`);
+         new cU(UU.mirror, XU.state, ...zU)
+       },
+       texture: (UU, XU, zU) => {
+         let {
+           url: cU,
+ ... (65 more added lines; see GitHub link above)
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L17021-L17025` → after: `L882-L901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L882-L901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/267.js#L882-L901) · [Before (L17021-L17025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/267.js#L17021-L17025)

```diff
-       LH(MM, rM, iM) {
-         this.picks.set(MM, {
-           item: rM,
-           had: iM(rM)
-         }), this.select(MM, rM)
+     })
+   },
+   42273: (UU, XU, zU) => {
+     zU.d(XU, {
+       e: () => EU,
+       f: () => YU,
+       i: () => NU
+     });
+     var cU = zU(42261),
+       yU = zU(41177),
+       QU = zU(41387),
+       AU = zU(41495),
+       FU = zU(42269),
+       oU = zU(41493),
+       DU = zU(38121);
+     class EU extends AU.d {
+ ... (4 more added lines; see GitHub link above)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L17027-L17033` → after: `L903-L905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L903-L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/267.js#L903-L905) · [Before (L17027-L17033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/267.js#L17027-L17033)

```diff
-     }(DS.q);
- 
-     function Ml(MM) {
-       return rM => {
-         let iM = 0;
-         for (const OM of MM.getInventoryItems())(null === OM || void 0 === OM ? void 0 : OM.name) === rM && (iM += null === OM.amount ? 1 : Math.max(OM.amount, 0));
-         return iM
+       link(UU) {
+         var XU;
+         (0, DU.p)(UU), this.model = UU, null === (XU = this.onLinked) || void 0 === XU || XU.call(this, UU)
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L17035-L17052` → after: `L907-L925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L907-L925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/267.js#L907-L925) · [Before (L17035-L17052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/267.js#L17035-L17052)

```diff
-     }
- 
-     function rl(MM, rM, iM, OM) {
-       MM.getClientOption(rM, "canCraft") && "inventory" !== ES.d.get("openInGameMenuName") && (cy.open(iM, OM.get(), Ml(MM)), sS.i.Tz("toggleMenu", `inventory|${iM}`))
-     }
-     let il = null,
-       Ol = !1;
- 
-     function Sl(MM) {
-       const rM = Uj();
-       MM === il && rM === Ol || (il = MM, Ol = rM, (0, DS.t)(function(MM, rM) {
-         const iM = new Map;
-         for (let OM = MM + 1; OM <= SM.length; OM++) {
-           const SM = Aj(OM, MM, rM);
-           if (SM)
-             for (const rM of yM(OM).unlocks) iM.set(rM, {
- ... (2 more removed lines; see GitHub link above)
+       relink() {
+         this.release();
+         const UU = [];
+         for (const yU of Object.values(this._vertexBuffers))
+           if (!yU.getIsInstanced()) {
+             const {
+               byteOffset: XU,
+               byteStride: zU,
+               type: cU,
+               normalized: QU
+             } = yU;
+             UU.push({
+               kind: yU.getKind(),
+               data: yU.getData(),
+               offset: XU,
+               stride: zU,
+ ... (3 more added lines; see GitHub link above)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L17055-L17068` → after: `L964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/267.js#L964) · [Before (L17055-L17068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/267.js#L17055-L17068)

```diff
-         return iM
-       }(MM, rM)))
-     }
- 
-     function jl() {
-       return MM = () => {
-         null !== il && Sl(il)
-       }, (0, lj.i)(Ej, MM);
-       var MM
-     }
- 
-     function al() {
-       return (0, DS.v)(Nj(Object.keys(gM), kj)), () => {
-         (0, DS.v)([])
+         return XU._updatable = AU, XU._boundingInfo = new QU.b(this.extend.minimum, this.extend.maximum), XU.relink(), XU
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L17070-L17089` → after: `L966-L975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L966-L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/267.js#L966-L975) · [Before (L17070-L17089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/267.js#L17070-L17089)

```diff
-     }
- 
-     function Pl(MM, rM, iM) {
-       var OM, SM;
-       const jM = MM.getTargetedBlock();
-       if (!jM || ! function(MM, rM, iM) {
-           if ("Chest" !== rM) return !1;
-           const OM = MM.split("|")[0];
-           if (!Qi(OM) || 0 === Dr[OM].outputSlots.length) return !1;
-           const SM = ed(MM);
-           return iM[0] === SM[0] && iM[1] === SM[1] && iM[2] === SM[2]
-         }(iM, null === (OM = MM.TrM(rM)) || void 0 === OM ? void 0 : OM.name, jM.normal)) return !1;
-       const [aM, PM, nM] = jM.zd, QM = MM.getBlockId(aM, PM, nM);
-       return 0 === QM || !0 === (null === (SM = pM.k[QM]) || void 0 === SM ? void 0 : SM.canBePlacedOver)
-     }
-     var nl = iM(37705);
- ... (4 more removed lines; see GitHub link above)
+       static mergeMeshes(UU, XU, zU, cU, yU, QU) {
+         const oU = UU[0].nS(),
+           DU = new FU.d(UU[0].name + "_merged", oU),
+           YU = new EU(AU.d.RandomId(), oU, void 0, !1, DU);
+         try {
+           if (!FU.d.MergeMeshes(UU, XU, zU, DU, yU, QU)) return DU.dispose(), null
+         } catch (NU) {
+           throw DU.dispose(), NU
+         }
+         return YU.relink(), DU
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L17091-L17109` → after: `L977-L978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L977-L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/267.js#L977-L978) · [Before (L17091-L17109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/267.js#L17091-L17109)

```diff
-       onAltAction(MM, rM, iM) {
-         const OM = MM.getTargetedBlock();
-         if (!OM || function(MM) {
-             const rM = MM.split("|")[0];
-             return Qi(rM) || null !== wO(rM) || wM(rM) || di.b.includes(rM)
-           }(iM) && !Ql.has(iM.split("|")[0])) return;
-         const SM = MM.TrM(rM);
-         if (!SM || !Ql.has(SM.name.split("|")[0]) || Date.now() - this.lastAt < 4e3) return;
-         const jM = SM.typeObj.id,
-           [aM, PM, nM] = OM.zd,
-           QM = MM.getBlockId(aM, PM, nM),
-           zM = pM.k[QM];
-         (0 === QM || null !== zM && void 0 !== zM && zM.CH || null !== zM && void 0 !== zM && zM.canBePlacedOver) && MM.isSolidToPlayerBlockId(jM) && MM.canModifyBlockAt(aM, PM, nM) && MM.lrM(aM, PM, nM, jM) && !MM.lrM(aM, PM, nM, jM, rM) && (this.lastAt = Date.now(), this.toasts … [truncated]
-           baf2ToastText: [(0, DM.Od)({
-             translationKey: "buildAFactory2Game:beltStepBack"
-           }, DM.L.whiteUiText)],
- ... (3 more removed lines; see GitHub link above)
+       removeVerticesData(UU) {
+         this.releaseUnlessInstanced(UU), super.removeVerticesData(UU)
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L17111-L17114` → after: `L980-L981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L980-L981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/267.js#L980-L981) · [Before (L17111-L17114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/267.js#L17111-L17114)

```diff
-     }
-     class Ll {
-       constructor(MM) {
-         this.show = MM, this.started = null, this.gatedThisHold = new Set, this.hintedAt = new Map
+       dispose() {
+         this.release(), super.dispose()
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L17116` → after: `L983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/267.js#L983) · [Before (L17116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/267.js#L17116)

```diff
-       onMining(MM, rM, iM) {
+       releaseUnlessInstanced(UU) {
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L17118-L17153` → after: `L985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/267.js#L985) · [Before (L17118-L17153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/267.js#L17118-L17153)

```diff
-         if (!rM) return this.started = null, void this.gatedThisHold.clear();
-         if (!MM) return void(this.started = null);
-         const SM = `${MM.x},${MM.y},${MM.z},${MM.sQ}`;
-         if (SM === this.started) return;
-         this.started = SM;
-         const jM = oO(MM.y) ? jy(MM.block, MM.sQ, MM.level) : null;
-         if (null === jM || this.gatedThisHold.has(SM)) return;
-         this.gatedThisHold.add(SM);
-         const aM = MM.block.split("|")[0];
-         iM - (null !== (OM = this.hintedAt.get(aM)) && void 0 !== OM ? OM : -1 / 0) < 5e3 || (this.hintedAt.set(aM, iM), this.show({
-           baf2ToastText: ay(jM, MM.block),
-           baf2ToastMs: 2500,
-           baf2ToastStyle: "baf2ToastWarn"
-         }))
-       }
-     }
- ... (20 more removed lines; see GitHub link above)
+         UU && null !== (XU = this.getVertexBuffer(UU)) && void 0 !== XU && XU.getIsInstanced() || this.release()
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L17155-L17157` → after: `L987-L988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L987-L988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/267.js#L987-L988) · [Before (L17155-L17157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/267.js#L17155-L17157)

```diff
-       return {
-         message: MM,
-         itemNames: rM([...new Set(iM)])
+       release() {
+         this.model && ((0, DU.w)(this.model), this.model = null)
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L17297-L17718` → after: `L992-L1007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L992-L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/267.js#L992-L1007) · [Before (L17297-L17718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/267.js#L17297-L17718)

```diff
-       function Gr() {
-         (0, lS.k)(), Ur(null)
-       }
-       let Cr = new Set,
-         er = !1;
-       const br = {
-         onCreate: MM => {
-           dM = MM, dM.setGroundArrowStyle({
-             width: .6,
-             alpha: .5,
-             endAtSolidFace: !0
-           });
-           for (const rM of gr) {
-             const MM = Dr[rM].inputSlots ? gP(aM) : bP(rM, aM, RM, yM);
-             Er.push((0, dS.e)(rM, MM))
-           }
- ... (406 more removed lines; see GitHub link above)
+     function YU(UU, XU, zU) {
+       let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new FU.d(UU, zU);
+       const yU = (0, DU.l)(XU),
+         {
+           positions: QU,
+           normals: YU,
+           uvs: NU,
+           indices: IU,
+           named: pU = {}
+         } = XU,
+         aU = new oU.c;
+       aU.positions = QU, aU.normals = null !== YU && void 0 !== YU ? YU : null, aU.uvs = null !== NU && void 0 !== NU ? NU : null, aU.indices = IU;
+       const tU = new EU(AU.d.RandomId(), zU, aU, !1, cU);
+       for (const {
+           kind: AU,
+           components: FU
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L17720-L17735` → after: `L1009-L1010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR1009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L1009-L1010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/267.js#L1009-L1010) · [Before (L17720-L17735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/267.js#L17720-L17735)

```diff
-       };
-       return br
-     }
-   },
-   39485: (MM, rM, iM) => {
-     iM.d(rM, {
-       d: () => aM,
-       e: () => PM
-     });
-     var OM = iM(332),
-       SM = iM(35037),
-       jM = iM(3693);
- 
-     function aM(MM) {
-       const rM = (0, jM.d)(MM);
-       return (0, OM.Qb)(MM, void 0 === rM ? void 0 : (0, SM.displayNameOf)(rM))
+         of yU.vertexAttributes) AU in pU && cU.setVerticesData(AU, pU[AU], !1, FU);
+       return tU.link(yU), cU
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L17738-L17739` → after: `L1013-L1027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR1013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L1013-L1027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/267.js#L1013-L1027) · [Before (L17738-L17739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/267.js#L17738-L17739)

```diff
-     function PM(MM, rM) {
-       return MM(aM(rM))
+     function NU(UU, XU, zU) {
+       let cU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+       const yU = new FU.d(UU, zU),
+         {
+           positions: QU,
+           normals: AU,
+           uvs: DU,
+           indices: EU
+         } = XU;
+       return Object.assign(new oU.c, {
+         positions: QU,
+         normals: AU,
+         uvs: DU,
+         indices: EU
+       }).applyToMesh(yU, cU), yU
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L17742` → after: `L1030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR1030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L1030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/267.js#L1030) · [Before (L17742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/267.js#L17742)

```diff
-   39509: (MM, rM, iM) => {
+   42259: (UU, XU, zU) => {
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L17744-L17774` → after: `L1032-L1051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR1032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L1032-L1051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/267.js#L1032-L1051) · [Before (L17744-L17774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/267.js#L17744-L17774)

```diff
-       const OM = new Set,
-         SM = new ResizeObserver(iM),
-         jM = () => {
-           const rM = new Set(document.querySelectorAll(MM));
-           let jM = !1;
-           for (const MM of OM) rM.has(MM) || (SM.unobserve(MM), OM.delete(MM), jM = !0);
-           for (const MM of rM) OM.has(MM) || (SM.observe(MM), aM.observe(MM, {
-             attributes: !0,
-             attributeFilter: ["class", "style"]
-           }), OM.add(MM));
-           jM && iM()
-         },
-         aM = new MutationObserver((rM => {
-           rM.some((MM => "attributes" === MM.type)) && iM(), rM.some((rM => function(MM, rM, iM) {
-             if ("childList" !== MM.type) return !1;
-             for (const OM of MM.addedNodes)
- ... (15 more removed lines; see GitHub link above)
+       const cU = XU * XU * 4,
+         yU = UU[0].layers,
+         QU = yU * (UU.length - 1) + UU[UU.length - 1].layers,
+         AU = new Uint8Array(QU * cU);
+       UU.forEach(((XU, zU) => {
+         const QU = zU + 1 < UU.length ? Math.min(XU.layers, yU) : XU.layers;
+         AU.set(new Uint8Array(XU.pixels.buffer, XU.pixels.byteOffset, QU * cU), zU * yU * cU)
+       }));
+       const FU = Math.max(1, Math.min(QU, zU || QU));
+       if (FU === QU) return [{
+         pixels: AU,
+         layers: QU
+       }];
+       const oU = [];
+       for (let DU = 0; DU < QU; DU += FU) {
+         const UU = Math.min(QU, DU + FU);
+ ... (4 more added lines; see GitHub link above)
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L17778-L17806` → after: `L1056-L1057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR1056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L1056-L1057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/267.js#L1056-L1057) · [Before (L17778-L17806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/267.js#L17778-L17806)

```diff
-       b: () => OM
-     })
-   },
-   39499: (MM, rM, iM) => {
-     iM.d(rM, {
-       e: () => PM
-     });
-     var OM = iM(39491);
-     const SM = 5,
-       jM = [0, 0, 0],
-       aM = {
-         x: 0,
-         y: 0,
-         distSq: 0
-       };
- 
- ... (13 more removed lines; see GitHub link above)
+       d: () => cU,
+       g: () => QU
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L17825-L17826` → after: `L1062-L1075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR1062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L1062-L1075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/267.js#L1062-L1075) · [Before (L17825-L17826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/267.js#L17825-L17826)

```diff
-       const OM = SM(MM);
-       OM.x === rM && OM.y === iM || (OM.x = rM, OM.y = iM, MM.style.translate = `${rM}vw ${iM}vh`)
+       var cU, QU;
+       const AU = null !== (cU = yU.get(UU)) && void 0 !== cU ? cU : new Map;
+       yU.set(UU, AU);
+       const FU = null !== (QU = AU.get(XU[0])) && void 0 !== QU ? QU : [];
+       AU.set(XU[0], FU);
+       const oU = FU.find((UU => UU.urls.length === XU.length && UU.urls.every(((UU, zU) => UU === XU[zU]))));
+       if (oU) return oU.built;
+       const DU = {
+         urls: [...XU],
+         built: zU()
+       };
+       return FU.push(DU), DU.built.catch((() => {
+         FU.splice(FU.indexOf(DU), 1)
+       })), DU.built
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/268.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/268.js` (38 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813)

#### 1. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/268.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/268.js#L4)

```diff
-   44265: (MM, rM, iM) => {
+   42138: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L6` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/268.js#L6-L7) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/268.js#L6)

```diff
-       c: () => jM
+       d: () => QU,
+       f: () => AU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L8-L48` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/268.js#L9-L13) · [Before (L8-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/268.js#L8-L48)

```diff
-     var OM = iM(41213),
-       SM = iM(44273);
-     class jM {
-       constructor(MM, rM) {
-         let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
-         this.maxDepth = iM, this.uOM = [], this._maxBlockCapacity = rM || 64, this._selectionContent = new OM.d(1024), this._creationFunc = MM
-       }
-       update(MM, rM, iM) {
-         SM.b._CreateBlocks(MM, rM, iM, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
-       }
-       JOM(MM) {
-         for (let rM = 0; rM < this.blocks.length; rM++) {
-           this.blocks[rM].addEntry(MM)
-         }
-       }
-       Fk(MM) {
- ... (25 more removed lines; see GitHub link above)
+     var cU = zU(2014);
+     let yU = !1;
+ 
+     function QU() {
+       yU = !0
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L50-L54` → after: `L15-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L15-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/268.js#L15-L17) · [Before (L50-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/268.js#L50-L54)

```diff
-     jM.CreationFuncForMeshes = (MM, rM) => {
-       const iM = MM.aY();
-       !MM.isBlocked && iM.boundingBox.intersectsMinMax(rM.UOM, rM.EOM) && rM.entries.push(MM)
-     }, jM.CreationFuncForSubMeshes = (MM, rM) => {
-       MM.aY().boundingBox.intersectsMinMax(rM.UOM, rM.EOM) && rM.entries.push(MM)
+ 
+     function AU() {
+       yU && (yU = !1, (0, cU.e)())
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L57` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/268.js#L20) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/268.js#L57)

```diff
-   44273: (MM, rM, iM) => {
+   42133: (UU, XU, zU) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L59` → after: `L22-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L22-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/268.js#L22-L24) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/268.js#L59)

```diff
-       b: () => jM
+       d: () => AU,
+       h: () => QU,
+       k: () => FU
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L61-L144` → after: `L26-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L26-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/268.js#L26-L46) · [Before (L61-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/268.js#L61-L144)

```diff
-     var OM = iM(38040),
-       SM = iM(41412);
-     class jM {
-       constructor(MM, rM, iM, OM, SM, jM) {
-         this.entries = [], this.ROM = new Array, this._capacity = iM, this._depth = OM, this._maxDepth = SM, this._creationFunc = jM, this._minPoint = MM, this._maxPoint = rM, this.ROM.push(MM.clone()), this.ROM.push(rM.clone()), this.ROM.push(MM.clone()), this.ROM[2].x = rM.x, t … [truncated]
-       }
-       get vL() {
-         return this._capacity
-       }
-       get UOM() {
-         return this._minPoint
-       }
-       get EOM() {
-         return this._maxPoint
-       }
-       addEntry(MM) {
- ... (68 more removed lines; see GitHub link above)
+     var cU = zU(41652),
+       yU = zU(41660);
+ 
+     function QU(UU) {
+       if (UU.queries.drawCensus() < cU.Cb.BYTES) return null;
+       const XU = UU.memoryData(UU.scratch(), cU.Cb.BYTES, 4, "the draw census");
+       return null === XU ? null : {
+         terrainOpaque: cU.Cb.terrainOpaque(XU, 0),
+         terrainTransparent: cU.Cb.terrainTransparent(XU, 0),
+         terrainPack: cU.Cb.terrainPack(XU, 0),
+         earthSky: cU.Cb.earthSky(XU, 0),
+         skyMeshes: cU.Cb.skyMeshes(XU, 0),
+         regular: cU.Cb.regular(XU, 0),
+         thin: cU.Cb.thin(XU, 0),
+         line: cU.Cb.line(XU, 0),
+         text: cU.Cb.text(XU, 0),
+ ... (5 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L148` → after: `L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/268.js#L101) · [Before (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/268.js#L148)

```diff
-   44280: (MM, rM, iM) => {
+   42121: (UU, XU, zU) => {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L150` → after: `L103-L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L103-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/268.js#L103-L105) · [Before (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/268.js#L150)

```diff
-       c: () => zM
+       b: () => pU,
+       f: () => NU,
+       j: () => IU
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L152-L181` → after: `L107-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L107-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/268.js#L107-L150) · [Before (L152-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/268.js#L152-L181)

```diff
-     var OM = iM(41196),
-       SM = iM(38040),
-       jM = iM(41529),
-       aM = iM(44214),
-       PM = iM(41278),
-       nM = iM(38064),
-       QM = iM(44265);
-     class zM {
-       constructor(MM) {
-         this.name = PM.e.NAME_OCTREE, this.checksIsEnabled = !0, this._tempRay = new aM.z(SM.q.Zero(), new SM.q(1, 1, 1)), (MM = MM || nM.c.LastCreatedScene) && (this.YJ = MM, this.YJ.getActiveMeshCandidates = () => this.getActiveMeshCandidates(), this.YJ.getActiveSubMeshCandidat … [truncated]
-       }
-       register() {
-         this.YJ.onMeshRemovedObservable.add((MM => {
-           const rM = this.YJ.selectionOctree;
-           if (void 0 !== rM && null !== rM) {
-             const iM = rM.uOM.indexOf(MM); - 1 !== iM && rM.uOM.splice(iM, 1)
- ... (14 more removed lines; see GitHub link above)
+     var cU = zU(2023),
+       yU = zU(1319),
+       QU = zU(41660),
+       AU = zU(41676),
+       FU = zU(41680),
+       oU = zU(41695);
+     const DU = new yU.e;
+     let EU = !1;
+ 
+     function YU(UU) {
+       const XU = (0, QU.f)();
+       return null !== XU && +UU === XU.api.localId
+     }
+ 
+     function NU() {
+       EU || (EU = !0, (0, oU.m)(AU.o, (UU => {
+ ... (28 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L183-L186` → after: `L152-L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L152-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/268.js#L152-L175) · [Before (L183-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/268.js#L183-L186)

```diff
-       getIntersectingSubMeshCandidates(MM, rM) {
-         if (MM._submeshesOctree && MM.useOctreeForPicking) {
-           aM.z.TransformToRef(rM, MM.getWorldMatrix(), this._tempRay);
-           return MM._submeshesOctree.intersectsRay(this._tempRay)
+     }
+   },
+   42125: (UU, XU, zU) => {
+     zU.d(XU, {
+       b: () => EU
+     });
+     var cU = zU(5326),
+       yU = zU(5318),
+       QU = zU(41685),
+       AU = zU(41695);
+     const FU = new Set(cU.O),
+       oU = cU.O.map((UU => (new TextEncoder).encode(UU))),
+       DU = new Map;
+ 
+     function EU(UU, XU) {
+       var zU;
+ ... (8 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L188-L193` → after: `L177-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L177-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/268.js#L177-L186) · [Before (L188-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/268.js#L188-L193)

```diff
-         return this.YJ._getDefaultSubMeshCandidates(MM)
-       }
-       getCollidingSubMeshCandidates(MM, rM) {
-         if (MM._submeshesOctree && MM.useOctreeForCollisions) {
-           const iM = rM._velocityWorldLength + Math.max(rM._radius.x, rM._radius.y, rM._radius.z);
-           return MM._submeshesOctree.intersects(rM._basePointWorld, iM)
+         return !1
+       }(UU.payload, XU))) && function(UU) {
+         if (null === UU || "object" !== typeof UU || null === UU.settings || "object" !== typeof UU.settings) return;
+         const XU = String(UU.eId),
+           zU = UU.settings;
+         let cU = DU.get(XU);
+         for (const yU in zU) {
+           if (!FU.has(yU)) continue;
+           const UU = zU[yU];
+           null === UU || void 0 === UU ? cU && delete cU[yU] : (cU ??= {}, cU[yU] = UU)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L195-L222` → after: `L188-L192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L188-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/268.js#L188-L192) · [Before (L195-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/268.js#L195-L222)

```diff
-         return this.YJ._getDefaultSubMeshCandidates(MM)
-       }
-       rebuild() {}
-       dispose() {}
-     }
-     let LM = !1;
-     LM || (LM = !0, OM.d.prototype.createOrUpdateSelectionOctree = function() {
-       let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
-         rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
-         iM = this._getComponent(PM.e.NAME_OCTREE);
-       iM || (iM = new zM(this), this.MOM(iM)), this.oOM || (this.oOM = new QM.c(QM.c.CreationFuncForMeshes, MM, rM));
-       const OM = this.getWorldExtends();
-       return this.oOM.update(OM.min, OM.max, this.meshes), this.oOM
-     }, Object.defineProperty(OM.d.prototype, "selectionOctree", {
-       get: function() {
-         return this.oOM
- ... (12 more removed lines; see GitHub link above)
+         cU && DU.set(XU, cU)
+       }((0, QU.d)(UU.payload))
+     })), (0, AU.e)((() => {
+       DU.clear()
+     }))
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L224` → after: `L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/268.js#L194) · [Before (L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/268.js#L224)

```diff
-   44214: (MM, rM, iM) => {
+   42112: (UU, XU, zU) => {
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L228-L235` → after: `L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/268.js#L198) · [Before (L228-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/268.js#L228-L235)

```diff
-       h: () => hM,
-       i: () => HM,
-       m: () => gM,
-       n: () => tM,
-       q: () => eM,
-       t: () => wM,
-       x: () => bM,
-       z: () => LM
+       g: () => YU
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L237-L438` → after: `L200-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L200-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/268.js#L200-L207) · [Before (L237-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/268.js#L237-L438)

```diff
-     var OM = iM(38044),
-       SM = iM(38040),
-       jM = iM(38048),
-       aM = iM(41408),
-       PM = iM(41242),
-       nM = iM(38064),
-       QM = iM(41302);
-     const zM = {
-       internalPickerForMesh: void 0
-     };
-     class LM {
-       constructor(MM, rM) {
-         let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
-           SM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : OM.d;
-         this.origin = MM, this.direction = rM, this.length = iM, this.epsilon = SM
-       }
- ... (186 more removed lines; see GitHub link above)
+     var cU = zU(39835),
+       yU = zU(2012),
+       QU = zU(1319),
+       AU = zU(41676),
+       FU = zU(41680),
+       oU = zU(41695);
+     const DU = new cU.c;
+     let EU = {};
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L440-L454` → after: `L209-L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L209-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/268.js#L209-L210) · [Before (L440-L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/268.js#L440-L454)

```diff
-     function HM(MM, rM, iM, OM, jM, aM) {
-       let PM = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
-         nM = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
-       const QM = MM.ph();
-       if (!aM && !(aM = MM.activeCamera) && !(aM = MM.cameraToUseForPointers)) return MM;
-       const zM = aM.viewport,
-         LM = QM.getRenderHeight(),
-         {
-           x: mM,
-           y: HM,
-           width: hM,
-           height: JM
-         } = zM.toGlobal(QM.getRenderWidth(), LM),
-         dM = 1 / QM.getHardwareScalingLevel();
-       return rM = rM * dM - mM, iM = iM * dM - (LM - HM - JM), jM.update(rM, iM, hM, JM, OM || SM.d.IdentityReadOnly, PM ? SM.d.IdentityReadOnly : aM.getViewMatrix(), aM.getProjectionMatrix(), nM), MM
+     function YU(UU) {
+       return EU[UU]
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L457-L459` → after: `L214-L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L214-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/268.js#L214-L215) · [Before (L457-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/268.js#L457-L459)

```diff
-     function hM(MM, rM, iM, OM) {
-       const SM = LM.Zero();
-       return JM(MM, rM, iM, SM, OM), SM
+     function IU(UU) {
+       return NU.add(UU)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L462-L467` → after: `L218-L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L218-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/268.js#L218-L229) · [Before (L462-L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/268.js#L462-L467)

```diff
-     function JM(MM, rM, iM, OM, jM) {
-       if (!PM.c) return MM;
-       const aM = MM.ph();
-       if (!jM && !(jM = MM.activeCamera) && !(jM = MM.cameraToUseForPointers)) throw new Error("Active camera not set");
-       const nM = jM.viewport,
-         QM = aM.getRenderHeight(),
+     function pU(UU) {
+       NU.callEach(UU, "a roster listener")
+     }(0, oU.m)(AU.Z, (UU => {
+       const XU = (0, FU.d)(AU.Z, UU);
+       if (void 0 === XU) return;
+       const zU = XU.KQ.some((UU => {
+           let {
+             bQ: XU,
+             TQ: zU
+           } = UU;
+           return null !== zU && DU.has(XU) && DU.getName(XU) !== zU
+         })),
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L469-L490` → after: `L231-L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L231-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/268.js#L231-L296) · [Before (L469-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/268.js#L469-L490)

```diff
-           x: zM,
-           y: LM,
-           width: mM,
-           height: HM
-         } = nM.toGlobal(aM.getRenderWidth(), QM),
-         hM = SM.d.Identity(),
-         JM = 1 / aM.getHardwareScalingLevel();
-       return rM = rM * JM - zM, iM = iM * JM - (QM - LM - HM), OM.update(rM, iM, mM, HM, hM, hM, jM.getProjectionMatrix()), MM
-     }
- 
-     function dM(MM, rM, iM, OM, SM, jM, aM, PM) {
-       return yM(MM, iM, OM, rM(OM, iM.enableDistantPicking), SM, jM, aM, PM)
-     }
- 
-     function yM(MM, rM, iM, OM, SM, jM, aM, PM) {
-       const nM = rM.intersects(OM, SM, aM, jM, iM, PM);
- ... (6 more removed lines; see GitHub link above)
+           added: cU,
+           removed: QU,
+           settingChanges: oU
+         } = DU.apply(XU),
+         EU = new Set;
+       for (const yU of oU)
+         for (const UU in yU.settings) EU.add(UU);
+       const YU = zU || cU.length > 0 || QU.length > 0;
+       (YU || EU.has("hideNameSeed")) && function() {
+         const UU = new Map;
+         for (const XU of DU.ids()) {
+           const zU = DU.getName(XU),
+             cU = DU.getSetting(XU, "hideNameSeed");
+           void 0 !== zU && void 0 !== cU && null !== cU && UU.set(zU, cU)
+         }
+         yU.c.replaceAll(UU)
+ ... (50 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L493-L498` → after: `L299-L305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L299-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/268.js#L299-L305) · [Before (L493-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/268.js#L493-L498)

```diff
-       const rM = MM.getClassName();
-       if ("GreasedLineMesh" === rM) return {
-         rawBoundingInfo: null,
-         intersectionThreshold: 0
-       };
-       const iM = MM.rawBoundingInfo;
+       let {
+         deadEId: XU,
+         killerEId: zU,
+         killerLifeformType: cU,
+         withItem: yU,
+         killstreak: QU
+       } = UU;
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L500-L548` → after: `L307-L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L307-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/268.js#L307-L315) · [Before (L500-L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/268.js#L500-L548)

```diff
-         rawBoundingInfo: iM,
-         intersectionThreshold: iM ? lM(rM, MM) : 0
-       }
-     }
- 
-     function UM(MM, rM, iM, OM, SM) {
-       const jM = MM(iM, rM.enableDistantPicking);
-       return jM.intersectsSphere(OM.YOM, SM) && jM.intersectsBox(OM.boundingBox, SM) ? jM : null
-     }
- 
-     function GM(MM, rM, iM, OM, jM, aM) {
-       let nM = null;
-       const QM = !!(MM.activeCameras && MM.activeCameras.length > 1 && MM.cameraToUseForPointers !== MM.activeCamera),
-         LM = MM.cameraToUseForPointers || MM.activeCamera,
-         mM = zM.internalPickerForMesh || dM,
-         HM = mM === dM;
- ... (33 more removed lines; see GitHub link above)
+         killer: BU({
+           eId: zU,
+           lifeformType: cU
+         }),
+         victim: BU({
+           eId: XU
+         }),
+         withItem: yU,
+         killstreak: QU
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L553-L590` → after: `L319-L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L319-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/268.js#L319-L329) · [Before (L553-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/268.js#L553-L590)

```diff
-     function CM(MM, rM, iM, OM) {
-       if (!PM.c) return null;
-       const jM = [],
-         aM = !!(MM.activeCameras && MM.activeCameras.length > 1 && MM.cameraToUseForPointers !== MM.activeCamera),
-         nM = MM.cameraToUseForPointers || MM.activeCamera,
-         QM = zM.internalPickerForMesh || dM,
-         LM = QM === dM;
-       for (let PM = 0; PM < MM.meshes.length; PM++) {
-         const zM = MM.meshes[PM];
-         if (iM) {
-           if (!iM(zM, -1)) continue
-         } else if (!zM.isEnabled() || !zM.isVisible || !zM.AJ) continue;
-         const mM = aM && zM.isWorldMatrixCameraDependent(),
-           HM = zM.computeWorldMatrix(mM, nM);
-         if (zM.hasThinInstances && zM.krM) {
-           if (QM(null, rM, zM, HM, !0, !0, OM)) {
- ... (22 more removed lines; see GitHub link above)
+     function aU(UU) {
+       let {
+         killer: XU,
+         victim: zU,
+         withItem: cU
+       } = UU;
+       return {
+         killer: BU(XU),
+         victim: BU(zU),
+         withItem: cU,
+         killstreak: 0
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L601-L616` → after: `L333-L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L333-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/268.js#L333-L334) · [Before (L601-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/268.js#L601-L616)

```diff
-     function bM(MM, rM, iM, OM, jM, aM, PM) {
-       const nM = GM(MM, ((OM, SM) => (MM._tempPickingRay || (MM._tempPickingRay = LM.Zero()), HM(MM, rM, iM, OM, MM._tempPickingRay, aM || null, !1, SM), MM._tempPickingRay)), OM, jM, !1, PM);
-       return nM && (nM.ray = mM(MM, rM, iM, SM.d.Identity(), aM || null)), nM
-     }
- 
-     function wM(MM, rM, iM, OM, jM) {
-       const aM = GM(MM, (iM => (MM._pickWithRayInverseMatrix || (MM._pickWithRayInverseMatrix = SM.d.Identity()), iM.invertToRef(MM._pickWithRayInverseMatrix), MM._cachedRayForTransform || (MM._cachedRayForTransform = LM.Zero()), LM.TransformToRef(rM, MM._pickWithRayInverseMatrix … [truncated]
-       return aM && (aM.ray = rM), aM
-     }
- 
-     function tM(MM, rM, iM, OM, SM, jM) {
-       return CM(MM, (OM => mM(MM, rM, iM, OM, SM || null)), OM, jM)
-     }
- 
-     function gM(MM, rM, iM, OM) {
-       return CM(MM, (iM => (MM._pickWithRayInverseMatrix || (MM._pickWithRayInverseMatrix = SM.d.Identity()), iM.invertToRef(MM._pickWithRayInverseMatrix), MM._cachedRayForTransform || (MM._cachedRayForTransform = LM.Zero()), LM.TransformToRef(rM, MM._pickWithRayInverseMatrix, MM … [truncated]
+     function tU(UU) {
+       WU && LU((() => "killed" === UU.kind ? pU(UU.body) : aU(UU.body)))
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L620-L627` → after: `L340-L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L340-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/268.js#L340-L341) · [Before (L620-L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/268.js#L620-L627)

```diff
-       let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
-         OM = arguments.length > 3 ? arguments[3] : void 0,
-         jM = arguments.length > 4 ? arguments[4] : void 0;
-       OM || (OM = MM.getWorldMatrix()), rM.length = iM, jM ? rM.origin.jR(jM) : rM.origin.jR(MM.position);
-       const aM = SM.l.sh[2];
-       aM.set(0, 0, MM._scene.useRightHandedSystem ? -1 : 1);
-       const PM = SM.l.sh[3];
-       return SM.q.TransformNormalToRef(aM, OM, PM), SM.q.NormalizeToRef(PM, rM.direction), rM
+       var zU;
+       return YU.d.has(UU) ? null === (zU = YU.d.getSettings(UU)) || void 0 === zU ? void 0 : zU[XU] : (0, EU.b)(UU, XU)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L630-L764` → after: `L344-L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L344-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/268.js#L344-L419) · [Before (L630-L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/268.js#L630-L764)

```diff
-     function RM(MM, rM) {
-       rM && (rM.prototype.getForwardRay = function() {
-         let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
-           rM = arguments.length > 1 ? arguments[1] : void 0,
-           iM = arguments.length > 2 ? arguments[2] : void 0;
-         return uM(this, new LM(SM.q.Zero(), SM.q.Zero(), MM), MM, rM, iM)
-       }, rM.prototype.getForwardRayToRef = function(MM) {
-         return uM(this, MM, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, arguments.length > 2 ? arguments[2] : void 0, arguments.length > 3 ? arguments[3] : void 0)
-       }), MM && (QM.b._IsPickingAvailable = !0, MM.prototype.createPickingRay = function(MM, rM, iM, OM) {
-         return mM(this, MM, rM, iM, OM, arguments.length > 4 && void 0 !== arguments[4] && arguments[4])
-       })
-     }
-     LM._TmpVector3 = (0, jM.c)(6, SM.q.Zero), LM._RayDistant = LM.Zero(), LM._Smallnum = 1e-8, LM._Rayl = 1e9
-   },
-   44206: (MM, rM, iM) => {
-     iM.d(rM, {
- ... (119 more removed lines; see GitHub link above)
+     function BU(UU) {
+       var XU, zU, AU, FU, EU;
+       let {
+         eId: NU,
+         name: IU,
+         colour: pU,
+         lifeformType: aU
+       } = UU;
+       if (void 0 === NU || null === NU || "" === NU) {
+         const UU = IU || null;
+         return {
+           id: null,
+           shownName: UU,
+           lifeformType: null === UU && null !== aU && void 0 !== aU ? aU : null,
+           colour: pU || null,
+           local: !1,
+ ... (60 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L766` → after: `L421-L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L421-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/268.js#L421-L423) · [Before (L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/268.js#L766)

```diff
-               this.autoCalcShadowZBounds && (this._shadowMinZ = OM, this._shadowMaxZ = SM)
+             }), 0);
+             return () => {
+               clearTimeout(XU), WU = !1, PU = null
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L945-L946` → after: `L427-L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L427-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/268.js#L427-L441) · [Before (L945-L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/268.js#L945-L946)

```diff
-         const OM = rM.length - 1;
-         iM(rM[OM], rM[OM], 1)
+       },
+       SU = {
+         localPos() {
+           const UU = (0, DU.f)();
+           if (null === UU) return CU;
+           const XU = UU.api.apiView;
+           for (let zU = 0; zU < 3; zU++) wU[zU] = FU.w.localPos(XU, 0, zU);
+           return wU
+         },
+         targetedBlockPos() {
+           const UU = (0, DU.f)();
+           if (null === UU || FU.w.targetBlockId(UU.api.apiView, 0) === FU.cd) return null;
+           for (let XU = 0; XU < 3; XU++) qU[XU] = FU.w.targetBlock(UU.api.apiView, 0, XU);
+           return qU
+         }
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L950` → after: `L444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/268.js#L444) · [Before (L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/268.js#L950)

```diff
-   39756: (MM, rM, iM) => {
+   39835: (UU, XU, zU) => {
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L952` → after: `L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/268.js#L446) · [Before (L952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/268.js#L952)

```diff
-       b: () => aM
+       c: () => cU
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L959-L973` → after: `L450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/268.js#L450) · [Before (L959-L973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/268.js#L959-L973)

```diff
-         this.direction1 = new OM.q(0, 1, 0), this.direction2 = new OM.q(0, 1, 0), this.minEmitBox = new OM.q(-.5, -.5, -.5), this.maxEmitBox = new OM.q(.5, .5, .5)
-       }
-       startDirectionFunction(MM, rM, iM, jM) {
-         const aM = (0, SM.RandomRange)(this.direction1.x, this.direction2.x),
-           PM = (0, SM.RandomRange)(this.direction1.y, this.direction2.y),
-           nM = (0, SM.RandomRange)(this.direction1.z, this.direction2.z);
-         if (jM) return rM.x = aM, rM.y = PM, void(rM.z = nM);
-         OM.q.TransformNormalFromFloatsToRef(aM, PM, nM, MM, rM)
-       }
-       startPositionFunction(MM, rM, iM, jM) {
-         const aM = (0, SM.RandomRange)(this.minEmitBox.x, this.maxEmitBox.x),
-           PM = (0, SM.RandomRange)(this.minEmitBox.y, this.maxEmitBox.y),
-           nM = (0, SM.RandomRange)(this.minEmitBox.z, this.maxEmitBox.z);
-         if (jM) return rM.x = aM, rM.y = PM, void(rM.z = nM);
-         OM.q.TransformCoordinatesFromFloatsToRef(aM, PM, nM, MM, rM)
+         this.members = new Map
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L975-L977` → after: `L452-L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L452-L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/268.js#L452-L481) · [Before (L975-L977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/268.js#L975-L977)

```diff
-       clone() {
-         const MM = new aM;
-         return jM.b.DeepCopy(this, MM), MM
+       apply(UU) {
+         const XU = {
+           added: [],
+           removed: [],
+           settingChanges: []
+         };
+         for (const cU of UU.KQ) {
+           let UU = this.members.get(cU.bQ);
+           if (UU || (UU = {
+               name: null,
+               settings: {}
+             }, this.members.set(cU.bQ, UU), XU.added.push(cU.bQ)), null !== cU.TQ && (UU.name = cU.TQ), null !== cU.hQ || cU.UA.length > 0) {
+             const zU = null === cU.hQ ? {} : JSON.parse(cU.hQ);
+             Object.assign(UU.settings, zU);
+             for (const XU of cU.UA) delete UU.settings[XU], zU[XU] = void 0;
+             XU.settingChanges.push({
+ ... (14 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L979-L980` → after: `L483-L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L483-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/268.js#L483-L484) · [Before (L979-L980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/268.js#L979-L980)

```diff
-       applyToShader(MM) {
-         MM.setVector3("direction1", this.direction1), MM.setVector3("direction2", this.direction2), MM.setVector3("minEmitBox", this.minEmitBox), MM.setVector3("maxEmitBox", this.maxEmitBox)
+       has(UU) {
+         return this.members.has(UU)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L982-L983` → after: `L486-L487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L486-L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/268.js#L486-L487) · [Before (L982-L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/268.js#L982-L983)

```diff
-       buildUniformLayout(MM) {
-         MM.addUniform("direction1", 3), MM.addUniform("direction2", 3), MM.addUniform("minEmitBox", 3), MM.addUniform("maxEmitBox", 3)
+       ids() {
+         return [...this.members.keys()]
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L985-L986` → after: `L489-L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L489-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/268.js#L489-L491) · [Before (L985-L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/268.js#L985-L986)

```diff
-       getEffectDefines() {
-         return "#define BOXEMITTER"
+       getName(UU) {
+         var XU, zU;
+         return null !== (XU = null === (zU = this.members.get(UU)) || void 0 === zU ? void 0 : zU.name) && void 0 !== XU ? XU : void 0
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L988-L989` → after: `L493-L495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L493-L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/268.js#L493-L495) · [Before (L988-L989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/268.js#L988-L989)

```diff
-       getClassName() {
-         return "BoxParticleEmitter"
+       getSettings(UU) {
+         var XU;
+         return null === (XU = this.members.get(UU)) || void 0 === XU ? void 0 : XU.settings
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L991-L993` → after: `L497-L499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L497-L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/268.js#L497-L499) · [Before (L991-L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/268.js#L991-L993)

```diff
-       serialize() {
-         const MM = {};
-         return MM.type = this.getClassName(), MM.direction1 = this.direction1.HOM(), MM.direction2 = this.direction2.HOM(), MM.minEmitBox = this.minEmitBox.HOM(), MM.maxEmitBox = this.maxEmitBox.HOM(), MM
+       getSetting(UU, XU) {
+         var zU;
+         return null === (zU = this.members.get(UU)) || void 0 === zU ? void 0 : zU.settings[XU]
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L995-L996` → after: `L501-L502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L501-L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/268.js#L501-L502) · [Before (L995-L996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/268.js#L995-L996)

```diff
-       parse(MM) {
-         OM.q.FromArrayToRef(MM.direction1, 0, this.direction1), OM.q.FromArrayToRef(MM.direction2, 0, this.direction2), OM.q.FromArrayToRef(MM.minEmitBox, 0, this.minEmitBox), OM.q.FromArrayToRef(MM.maxEmitBox, 0, this.maxEmitBox)
+       clear() {
+         this.members.clear()
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/269.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/269.js` (32 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70)

#### 1. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/269.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/269.js#L4)

```diff
-   42196: (MM, rM, iM) => {
+   40278: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L6-L8` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/269.js#L6-L8) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/269.js#L6-L8)

```diff
-       b: () => aM,
-       c: () => zM,
-       g: () => QM
+       e: () => AU,
+       h: () => yU,
+       i: () => QU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L10-L24` → after: `L10-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L10-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/269.js#L10-L36) · [Before (L10-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/269.js#L10-L24)

```diff
-     var OM, SM = iM(38074),
-       jM = iM(38040);
-     ! function(MM) {
-       MM[MM.CW = 0] = "CW", MM[MM.CCW = 1] = "CCW"
-     }(OM || (OM = {}));
-     class aM {
-       static Interpolate(MM, rM, iM, OM, SM) {
-         if (0 === MM) return 0;
-         const jM = 1 - 3 * OM + 3 * rM,
-           aM = 3 * OM - 6 * rM,
-           PM = 3 * rM;
-         let nM = MM;
-         for (let QM = 0; QM < 5; QM++) {
-           const rM = nM * nM;
-           nM -= (jM * (rM * nM) + aM * rM + PM * nM - MM) * (1 / (3 * jM * rM + 2 * aM * nM + PM)), nM = Math.min(1, Math.max(0, nM))
+     var cU = zU(61);
+ 
+     function yU(UU) {
+       return FU(UU, oU)
+     }
+ 
+     function QU(UU) {
+       return FU(UU, DU)
+     }
+ 
+     function AU(UU) {
+       return `${Math.floor(UU/60)}:${String(UU%60).padStart(2,"0")}`
+     }
+ 
+     function FU(UU, XU) {
+       const [, zU] = (0, cU.useState)(null);
+ ... (11 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L26` → after: `L38-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L38-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/269.js#L38-L163) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/269.js#L26)

```diff
-         return 3 * Math.pow(1 - nM, 2) * nM * iM + 3 * (1 - nM) * Math.pow(nM, 2) * SM + Math.pow(nM, 3)
+       }), [UU, XU]), XU(UU)
+     }
+ 
+     function oU(UU) {
+       return (UU - performance.now()) / 1e3
+     }
+ 
+     function DU(UU) {
+       return Math.max(0, Math.ceil(oU(UU)))
+     }
+   },
+   40303: (UU, XU, zU) => {
+     zU.d(XU, {
+       d: () => yU
+     });
+     var cU = zU(40307);
+ ... (110 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L31` → after: `L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/269.js#L182) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/269.js#L31)

```diff
-         this._radians = MM, this._radians < 0 && (this._radians += 2 * Math.PI)
+         this.UY = UU, this.view = null, this.arrivalToken = 0, this.showToken = 0
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L33-L34` → after: `L184-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L184-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/269.js#L184-L185) · [Before (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/269.js#L33-L34)

```diff
-       degrees() {
-         return 180 * this._radians / Math.PI
+       getView() {
+         return this.view
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L36-L37` → after: `L187-L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L187-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/269.js#L187-L232) · [Before (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/269.js#L36-L37)

```diff
-       radians() {
-         return this._radians
+       PY(UU) {
+         if ("hide" === UU[0]) this.view = null;
+         else if ("show" === UU[0]) {
+           const XU = UU[3];
+           this.view = {
+             xY: UU[1],
+             shardsPerItem: UU[2],
+             total: XU.reduce(((UU, XU) => {
+               let [, zU] = XU;
+               return UU + zU
+             }), 0),
+             contents: XU,
+             arrival: null,
+             showToken: ++this.showToken
+           }
+         } else {
+ ... (30 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L39-L42` → after: `L234-L772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L234-L772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/269.js#L234-L772) · [Before (L39-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/269.js#L39-L42)

```diff
-       static BetweenTwoPoints(MM, rM) {
-         const iM = rM.subtract(MM),
-           OM = Math.atan2(iM.y, iM.x);
-         return new PM(OM)
+     }
+     var IU = zU(1106),
+       pU = zU.n(IU),
+       aU = zU(27),
+       tU = zU(37318),
+       gU = zU(1993),
+       kU = zU(1492),
+       GU = zU(2058),
+       BU = zU(1193);
+     const ZU = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPQAAAF1CAYAAADftMc3AAAQAElEQVR4Aex9B6AkV3XlfVXd///J82dGYaRRFpJGKEwQCkgzGkVQAgQG5YDxEmxss7Yx0YE1YAzYJngNthevwQbDgvECZndtDJhkhNLMKIxGWZN+Tp1TVb29p/q/P+/Xr+pYnfv/vv3Sfffde+uduq9eVXcb1MK/7fdfe34Lh+8P3fdA13mgZYDeft/V73By+c … [truncated]
+     var RU = zU(1305);
+     const PU = (0, FU.forwardRef)((function(UU, XU) {
+       let {
+         contents: zU,
+         xY: cU,
+         full: yU,
+ ... (523 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L44-L51` → after: `L774-L775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L774-L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/269.js#L774-L775) · [Before (L44-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/269.js#L44-L51)

```diff
-       static BetweenTwoVectors(MM, rM) {
-         let iM = MM.lengthSquared() * rM.lengthSquared();
-         if (0 === iM) return new PM(Math.PI / 2);
-         iM = Math.sqrt(iM);
-         let OM = MM.dot(rM) / iM;
-         OM = (0, SM.Clamp)(OM, -1, 1);
-         const jM = Math.acos(OM);
-         return new PM(jM)
+       kY() {
+         return this.picks.kY()
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L53-L54` → after: `L777-L780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L777-L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/269.js#L777-L780) · [Before (L53-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/269.js#L53-L54)

```diff
-       static FromRadians(MM) {
-         return new PM(MM)
+       pushLatest(UU) {
+         var XU;
+         const zU = null !== (XU = this.picks.getLastSent()) && void 0 !== XU ? XU : this.confirmed;
+         this.picks.dropWaiting() && UU === zU || this.picks.push(UU)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L56-L57` → after: `L782-L786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L782-L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/269.js#L782-L786) · [Before (L56-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/269.js#L56-L57)

```diff
-       static FromDegrees(MM) {
-         return new PM(MM * Math.PI / 180)
+       takeAnswer() {
+         this.picks.takeAnswer()
+       }
+       clear() {
+         this.picks.clear()
```
