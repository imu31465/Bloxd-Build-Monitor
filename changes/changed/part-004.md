# Changed — Bundle Modifications Report (Part 004 / 069)

- **Updated at**: `2026-11-25T01:02 JST`
- **Part**: `4 / 69` (**301** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 003](part-003.md) · [Part 005 →](part-005.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/107.js` (w4ddu.56408518 → sn3sfj.2522680a · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/107.js` (51 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0)

#### 9. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L283-L294` → after: `L111-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L111-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/107.js#L111-L126) · [Before (L283-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/107.js#L283-L294)

```diff
-       return nC(this, void 0, void 0, (function() {
-         return fC(this, (function(zC) {
-           switch (zC.label) {
-             case 0:
-               return [4, Promise.all(CC.map((function(CC) {
-                 return CC.getFile()
-               })))];
-             case 1:
-               return [2, zC.sent().map((function(CC) {
-                 return WC(CC)
-               }))]
-           }
+       const {
+         disabled: ip,
+         hideWrapper: cp
+       } = pp, {
+         t: Op
+       } = (0, Sp.H)(), Yp = pp.advancedMode ? Lp.map((ip => [ip, pp.callbacks[ip]])) : Ip.h.map((ip => [ip, pp.callbacks[ip]])), Ap = (0, xp.jsx)("div", {
+         className: op()("PluginsGrid", {
+           SectionBody: !cp
+         }),
+         children: Yp.map((pp => {
+           let [cp, Op] = pp;
+           return (0, xp.jsx)(Dp, {
+             plugin: cp,
+             callbacks: Op,
+             disabled: ip
+           }, cp)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L296-L316` → after: `L128-L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L128-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/107.js#L128-L135) · [Before (L296-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/107.js#L296-L316)

```diff
-       }))
-     }
- 
-     function pC(CC, zC) {
-       return nC(this, void 0, void 0, (function() {
-         var ZC;
-         return fC(this, (function(QC) {
-           switch (QC.label) {
-             case 0:
-               return CC.items ? (ZC = GC(CC.items).filter((function(CC) {
-                 return "file" === CC.kind
-               })), "drop" !== zC ? [2, ZC] : [4, Promise.all(ZC.map(RC))]) : [3, 2];
-             case 1:
-               return [2, PC(AC(QC.sent()))];
-             case 2:
-               return [2, PC(GC(CC.files).map((function(CC) {
- ... (5 more removed lines; see GitHub link above)
+       });
+       return cp ? Ap : (0, xp.jsxs)("div", {
+         className: "BloxdForm",
+         children: [(0, xp.jsx)("div", {
+           className: "SectionTitle",
+           children: Op("worldBuilder:pluginsSection")
+         }), Ap]
+       })
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L320-L322` → after: `L139-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L139-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/107.js#L139-L179) · [Before (L320-L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/107.js#L320-L322)

```diff
-       return CC.filter((function(CC) {
-         return -1 === NC.indexOf(CC.name)
-       }))
+       let {
+         plugin: ip,
+         callbacks: {
+           isEnabled: cp,
+           eC: Op
+         },
+         disabled: Ip
+       } = pp;
+       const {
+         t: Lp
+       } = (0, Sp.H)(), Yp = cp();
+       return (0, xp.jsxs)("div", {
+         className: op()("PluginCard", {
+           PluginCardEnabled: Yp,
+           PluginCardDisabledForm: Ip
+         }),
+ ... (25 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L324-L329` → after: `L181-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L181-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/107.js#L181-L197) · [Before (L324-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/107.js#L324-L329)

```diff
- 
-     function GC(CC) {
-       if (null === CC) return [];
-       for (var zC = [], ZC = 0; ZC < CC.length; ZC++) {
-         var QC = CC[ZC];
-         zC.push(QC)
+     const Ap = {
+         fallDamage: "classic:enableFallDamage",
+         tpRequests: "classic:enableTpRequests",
+         spawnProtection: "classic:enableSpawnProtection",
+         spawnReset: "classic:enableSpawnReset",
+         smpMarketplace: "classic:enableSmpMarketplace",
+         survivalGuns: "classic:enableSurvivalGuns",
+         dayNight: "classic:enableDayNight"
+       },
+       Pp = {
+         fallDamage: "classic:enableFallDamageDescription",
+         tpRequests: "classic:enableTpRequestsDescription",
+         spawnProtection: "classic:enableSpawnProtectionDescription",
+         spawnReset: "classic:enableSpawnResetDescription",
+         smpMarketplace: "classic:enableSmpMarketplaceDescription",
+         survivalGuns: "classic:enableSurvivalGunsDescription",
+ ... (1 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L331-L332` → after: `L199-L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L199-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/107.js#L199-L224) · [Before (L331-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/107.js#L331-L332)

```diff
-       return zC
-     }
+   },
+   5048: (pp, ip, cp) => {
+     cp.d(ip, {
+       j: () => Si,
+       d: () => Ii,
+       f: () => oi,
+       k: () => xi
+     });
+     var Op = cp(62),
+       op = cp(1372),
+       Ip = cp(1480),
+       Sp = cp(1692),
+       xp = cp(1201),
+       Lp = cp(1361),
+       Yp = cp(1387),
+       Dp = cp(1060),
+ ... (10 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L335-L337` → after: `L227-L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L227-L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/107.js#L227-L256) · [Before (L335-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/107.js#L335-L337)

```diff
-       if ("function" !== typeof CC.webkitGetAsEntry) return xC(CC);
-       var zC = CC.webkitGetAsEntry();
-       return zC && zC.isDirectory ? IC(zC) : xC(CC)
+       let {
+         icon: ip,
+         title: cp,
+         disabled: Op,
+         children: op
+       } = pp;
+       return (0, dp.jsxs)("div", {
+         className: Wp()("ManageCard", {
+           ManageCardDisabled: Op
+         }),
+         children: [(0, dp.jsxs)("div", {
+           className: "ManageCardHead",
+           children: [(0, dp.jsx)("div", {
+             className: "ManageCardIcon",
+             children: (0, dp.jsx)(Dp.d, {
+               name: ip
+ ... (14 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L341-L343` → after: `L260-L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L260-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/107.js#L260-L274) · [Before (L341-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/107.js#L341-L343)

```diff
-       return CC.reduce((function(CC, zC) {
-         return qC(qC([], oC(CC), !1), oC(Array.isArray(zC) ? AC(zC) : [zC]), !1)
-       }), [])
+       let {
+         label: ip,
+         caption: cp,
+         children: Op
+       } = pp;
+       return (0, dp.jsxs)("div", {
+         className: "ManageStackedField",
+         children: [(0, dp.jsx)("div", {
+           className: "ManageStackedFieldLabel",
+           children: ip
+         }), Op, cp && (0, dp.jsx)("div", {
+           className: "ManageStackedFieldCaption",
+           children: cp
+         })]
+       })
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L347-L350` → after: `L278-L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L278-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/107.js#L278-L301) · [Before (L347-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/107.js#L347-L350)

```diff
-       var zC = CC.getAsFile();
-       if (!zC) return Promise.reject("".concat(CC, " is not a File"));
-       var ZC = WC(zC);
-       return Promise.resolve(ZC)
+       let {
+         label: ip,
+         caption: cp,
+         disabled: Op,
+         children: op
+       } = pp;
+       return (0, dp.jsxs)("div", {
+         className: Wp()("ManageField", {
+           ManageFieldDisabled: Op
+         }),
+         children: [(0, dp.jsxs)("div", {
+           className: "ManageFieldText",
+           children: [(0, dp.jsx)("div", {
+             className: "ManageFieldLabel",
+             children: ip
+           }), (0, dp.jsx)("div", {
+ ... (8 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L354-L356` → after: `L305-L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L305-L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/107.js#L305-L506) · [Before (L354-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/107.js#L354-L356)

```diff
-       return nC(this, void 0, void 0, (function() {
-         return fC(this, (function(zC) {
-           return [2, CC.isDirectory ? IC(CC) : iC(CC)]
+       var ip, cp;
+       let {
+         schematicData: Op,
+         updateSchematicData: op,
+         publishFormEnabled: Ip,
+         formEnabled: Sp
+       } = pp;
+       const {
+         t: Lp
+       } = (0, xp.H)(), Yp = !Ip, Dp = {
+         tpRequests: {
+           isEnabled: () => !Op.disableTpRequests,
+           eC: pp => op("disableTpRequests", !pp)
+         },
+         spawnProtection: {
+           isEnabled: () => !Op.disableSpawnProtection,
+ ... (186 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L358` → after: `L508-L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L508-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/107.js#L508-L529) · [Before (L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/107.js#L358)

```diff
-       }))
+       }(ip);
+       if (cp.naturalHeight > cp.naturalWidth) throw new Tp;
+       const Op = 1024 * Jp,
+         {
+           dataUrl: op,
+           finalQuality: Ip
+         } = function(pp, ip) {
+           const cp = document.createElement("canvas");
+           cp.width = pp.naturalWidth, cp.height = pp.naturalHeight, cp.getContext("2d").drawImage(pp, 0, 0);
+           let Op = .92,
+             op = cp.toDataURL("image/jpeg", Op);
+           for (; .75 * op.length > ip && Op > .05;) Op -= .05, op = cp.toDataURL("image/jpeg", Op);
+           return {
+             dataUrl: op,
+             finalQuality: Op
+           }
+ ... (6 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L362-L390` → after: `L538-L640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L538-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/107.js#L538-L640) · [Before (L362-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/107.js#L362-L390)

```diff
-       var zC = CC.createReader();
-       return new Promise((function(CC, ZC) {
-         var QC = [];
-         ! function wC() {
-           var bC = this;
-           zC.readEntries((function(zC) {
-             return nC(bC, void 0, void 0, (function() {
-               var bC, nC, oC;
-               return fC(this, (function(fC) {
-                 switch (fC.label) {
-                   case 0:
-                     if (zC.length) return [3, 5];
-                     fC.label = 1;
-                   case 1:
-                     return fC.trys.push([1, 3, , 4]), [4, Promise.all(QC)];
-                   case 2:
- ... (13 more removed lines; see GitHub link above)
+       var ip;
+       let {
+         schematicId: cp,
+         hasReadUploadPolicy: op,
+         onPolicyValidationError: Lp,
+         onThumbnailReady: Yp
+       } = pp;
+       const {
+         t: Pp
+       } = (0, xp.H)(), [yp, Up] = (0, Op.useState)(null), [wp, vp] = (0, Op.useState)(""), [tp, Hp] = (0, Op.useState)(""), [ep, jp] = (0, Op.useState)(!0), [kp, mp] = (0, Op.useState)(!1), Rp = (0, Op.useRef)(!1), [qp, Mp] = (0, Op.useState)(null), [Cp, Ep] = (0, Op.useState)(!1 … [truncated]
+         getRootProps: Bp,
+         getInputProps: bp,
+         isDragActive: hp
+       } = (0, lp.c)({
+         accept: {
+           "image/*": [".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp"]
+ ... (87 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L392-L394` → after: `L642-L682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L642-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/107.js#L642-L682) · [Before (L392-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/107.js#L392-L394)

```diff
-           }))
-         }()
-       }))
+           },
+           maxLength: Ap.k
+         }), rp && (0, dp.jsx)("div", {
+           className: "ThumbnailUploadError",
+           children: Pp("thumbnail:nameRequired", {
+             min: Ap.m,
+             max: Ap.k
+           })
+         }), (0, dp.jsxs)("label", {
+           className: "ThumbnailUploadCheckbox",
+           children: [(0, dp.jsx)("input", {
+             type: "checkbox",
+             checked: ep,
+             onChange: pp => {
+               jp(pp.target.checked)
+             }
+ ... (25 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L398-L406` → after: `L687-L731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L687-L731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/107.js#L687-L731) · [Before (L398-L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/107.js#L398-L406)

```diff
-       return nC(this, void 0, void 0, (function() {
-         return fC(this, (function(zC) {
-           return [2, new Promise((function(zC, ZC) {
-             CC.file((function(ZC) {
-               var QC = WC(ZC, CC.fullPath);
-               zC(QC)
-             }), (function(CC) {
-               ZC(CC)
-             }))
+       let {
+         schematicId: ip,
+         ownedThumbnailCount: cp,
+         onClose: op,
+         onThumbnailReady: Ip
+       } = pp;
+       const {
+         t: Sp
+       } = (0, xp.H)(), {
+         userContext: Lp
+       } = (0, Ep.b)(), [Yp, Pp] = (0, Op.useState)(!1), [yp, Up] = (0, Op.useState)(!1), [wp, vp] = (0, Op.useState)(!1), tp = (0, Op.useRef)();
+       (0, Op.useEffect)((() => () => {
+         clearTimeout(tp.current)
+       }), []);
+       const Hp = function(pp, ip) {
+         const cp = [];
+ ... (29 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L408-L409` → after: `L733-L846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L733-L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/107.js#L733-L846) · [Before (L408-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/107.js#L408-L409)

```diff
-         }))
-       }))
+         })
+       }
+       return (0, dp.jsxs)("div", {
+         className: Wp()("ThumbnailUploaderInner", {
+           ThumbnailUploaderSuccess: Yp
+         }),
+         children: [Yp && (0, dp.jsxs)("div", {
+           className: "ThumbnailUploadSuccessOverlay",
+           children: [(0, dp.jsxs)("div", {
+             className: "ThumbnailUploadSuccessIcon FullyFancyText AnimFadeInScaleUp",
+             children: [(0, dp.jsx)(Dp.d, {
+               name: "check"
+             }), (0, dp.jsx)(Qp.b, {})]
+           }), (0, dp.jsx)("div", {
+             className: "ThumbnailUploadSuccessText AnimFadeInScaleUp",
+             children: Sp("thumbnail:thumbnailUploaded")
+ ... (98 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L411` → after: `L848-L878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L848-L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/107.js#L848-L878) · [Before (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/107.js#L411)

```diff
-     var vC = ZC(4922);
+     var Fp = cp(1211);
+     const gp = {
+       "custom-game-bad-thumbnail": {
+         reason: "thumbnail:rejectionInappropriate",
+         tips: ["thumbnail:rejectionInappropriateTip1", "thumbnail:rejectionInappropriateTip2", "thumbnail:rejectionInappropriateTip3"]
+       },
+       "thumbnail-copyright-content": {
+         reason: "thumbnail:rejectionCopyright",
+         tips: ["thumbnail:rejectionCopyrightTip1", "thumbnail:rejectionCopyrightTip2", "thumbnail:rejectionCopyrightTip3"]
+       },
+       "thumbnail-random-irrelevant-content": {
+         reason: "thumbnail:rejectionIrrelevant",
+         tips: ["thumbnail:rejectionIrrelevantTip1", "thumbnail:rejectionIrrelevantTip2", "thumbnail:rejectionIrrelevantTip3"]
+       },
+       "thumbnail-sexual-content": {
+         reason: "thumbnail:rejectionSexual",
+ ... (15 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L414-L421` → after: `L881-L893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L881-L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/107.js#L881-L893) · [Before (L414-L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/107.js#L414-L421)

```diff
-       return function(CC) {
-         if (Array.isArray(CC)) return HC(CC)
-       }(CC) || function(CC) {
-         if ("undefined" !== typeof Symbol && null != CC[Symbol.iterator] || null != CC["@@iterator"]) return Array.from(CC)
-       }(CC) || mC(CC) || function() {
-         throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
-       }()
-     }
+       var ip, cp;
+       let {
+         schematicData: Sp,
+         updateSchematicData: Yp,
+         publishFormEnabled: Ap,
+         onClose: Pp
+       } = pp;
+       const {
+         t: yp
+       } = (0, xp.H)(), {
+         userContext: Up,
+         isUserContextUpdating: wp
+       } = (0, Ep.b)(), vp = (0, Cp.b)(), [tp, Hp] = (0, Op.useState)([]), [ep, jp] = (0, Op.useState)([]), [kp, mp] = (0, Op.useState)(!0), [Rp, qp] = (0, Op.useState)(null !== (ip = Sp.customThumbnailId) && void 0 !== ip ? ip : null), [lp, Qp] = (0, Op.useState)(null), Jp = (0,  … [truncated]
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L423-L429` → after: `L895-L924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L895-L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/107.js#L895-L924) · [Before (L423-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/107.js#L423-L429)

```diff
-     function hC(CC, zC) {
-       var ZC = Object.keys(CC);
-       if (Object.getOwnPropertySymbols) {
-         var QC = Object.getOwnPropertySymbols(CC);
-         zC && (QC = QC.filter((function(zC) {
-           return Object.getOwnPropertyDescriptor(CC, zC).enumerable
-         }))), ZC.push.apply(ZC, QC)
+       function hp(pp, ip) {
+         fp.current && (clearTimeout(fp.current), fp.current = null), Qp(pp), null !== pp && ip && (fp.current = setTimeout((() => {
+           Qp(null), fp.current = null
+         }), 5e3))
+       }(0, Op.useEffect)((() => () => {
+         clearTimeout(Tp.current), clearTimeout(fp.current)
+       }), []);
+       const ap = (0, Op.useCallback)((() => {
+         mp(!0), Mp.b.getOwnedThumbnails(Up).then((pp => {
+           const ip = [],
+             cp = [];
+           for (const Op of pp.thumbnails) Op.rejectionPolicyId ? ip.push(Op) : cp.push(Op);
+           ip.sort(((pp, ip) => pp.lastUpdatedAt - ip.lastUpdatedAt)), cp.sort(((pp, ip) => {
+             const cp = pp.approved ? 1 : 0,
+               Op = (ip.approved ? 1 : 0) - cp;
+             return 0 !== Op ? Op : ip.lastUpdatedAt - pp.lastUpdatedAt
+ ... (14 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L434-L440` → after: `L927-L942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L927-L942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/107.js#L927-L942) · [Before (L434-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/107.js#L434-L440)

```diff
-     function KC(CC) {
-       for (var zC = 1; zC < arguments.length; zC++) {
-         var ZC = null != arguments[zC] ? arguments[zC] : {};
-         zC % 2 ? hC(Object(ZC), !0).forEach((function(zC) {
-           YC(CC, zC, ZC[zC])
-         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(CC, Object.getOwnPropertyDescriptors(ZC)) : hC(Object(ZC)).forEach((function(zC) {
-           Object.defineProperty(CC, zC, Object.getOwnPropertyDescriptor(ZC, zC))
+       function Gp() {
+         Bp.current = Date.now(), Tp.current = null;
+         const pp = Np.current;
+         Np.current = null, hp({
+           text: yp("thumbnail:settingThumbnail"),
+           type: "info"
+         }, !1), Mp.b.setSchematicThumbnail(Up, Sp.schematicId, pp).then((() => {
+           vp.current && (hp({
+             text: yp("thumbnail:thumbnailUpdated"),
+             type: "success"
+           }, !0), Jp.current = pp, Yp("customThumbnailId", pp), Yp("customThumbnailBlurhash", void 0), Yp("customThumbnailVariants", void 0))
+         })).catch((pp => {
+           vp.current && (hp({
+             text: pp.errorMessageForUser ? yp(pp.errorMessageForUser, pp.errorMessageTranslationParams) : yp("thumbnail:failedToSetThumbnail"),
+             type: "error"
+           }, !0), qp(Jp.current))
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L446-L452` → after: `L946-L1085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L946-L1085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/107.js#L946-L1085) · [Before (L446-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/107.js#L446-L452)

```diff
-     function YC(CC, zC, ZC) {
-       return zC in CC ? Object.defineProperty(CC, zC, {
-         value: ZC,
-         enumerable: !0,
-         configurable: !0,
-         writable: !0
-       }) : CC[zC] = ZC, CC
+       function zp(pp) {
+         qp(pp), Np.current = pp;
+         const ip = Date.now() - Bp.current;
+         ip >= 1e3 ? Gp() : (hp({
+           text: yp("thumbnail:settingThumbnail"),
+           type: "info"
+         }, !1), Tp.current || (Tp.current = setTimeout((() => {
+           Gp()
+         }), 1e3 - ip)))
+       }
+       return (0, Op.useEffect)((() => {
+         !1 === wp && ap()
+       }), [wp, ap]), ep.length > 0 ? (0, dp.jsx)(rp, {
+         rejectedThumbnails: ep,
+         userContext: Up,
+         isMountedRef: vp,
+ ... (124 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L455-L473` → after: `L1088-L1102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1088-L1102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/107.js#L1088-L1102) · [Before (L455-L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/107.js#L455-L473)

```diff
-     function dC(CC, zC) {
-       return function(CC) {
-         if (Array.isArray(CC)) return CC
-       }(CC) || function(CC, zC) {
-         var ZC = null == CC ? null : "undefined" !== typeof Symbol && CC[Symbol.iterator] || CC["@@iterator"];
-         if (null == ZC) return;
-         var QC, wC, bC = [],
-           nC = !0,
-           fC = !1;
-         try {
-           for (ZC = ZC.call(CC); !(nC = (QC = ZC.next()).done) && (bC.push(QC.value), !zC || bC.length !== zC); nC = !0);
-         } catch (oC) {
-           fC = !0, wC = oC
-         } finally {
-           try {
-             nC || null == ZC.return || ZC.return()
- ... (3 more removed lines; see GitHub link above)
+     function rp(pp) {
+       let {
+         rejectedThumbnails: ip,
+         userContext: cp,
+         isMountedRef: op,
+         onAcknowledged: Sp
+       } = pp;
+       const {
+         t: Yp
+       } = (0, xp.H)(), [Ap, Pp] = (0, Op.useState)(!1), [Wp, yp] = (0, Op.useState)(!1), Up = function(pp) {
+         const ip = new Map;
+         for (const cp of pp) {
+           const pp = cp.rejectionPolicyId,
+             Op = ip.get(pp);
+           Op ? Op.push(cp) : ip.set(pp, [cp])
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L476-L478` → after: `L1105-L1174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1105-L1174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/107.js#L1105-L1174) · [Before (L476-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/107.js#L476-L478)

```diff
-       }(CC, zC) || mC(CC, zC) || function() {
-         throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
-       }()
+       }(ip);
+       return (0, dp.jsxs)("div", {
+         className: "ThumbnailRejectionNotice",
+         children: [(0, dp.jsxs)("div", {
+           className: "ThumbnailRejectionNoticeTitle",
+           children: [(0, dp.jsx)(Dp.d, {
+             name: "triangle-exclamation"
+           }), " ", Yp("thumbnail:thumbnailsRejected"), " ", (0, dp.jsx)(Dp.d, {
+             name: "triangle-exclamation"
+           })]
+         }), (0, dp.jsx)("div", {
+           className: "ThumbnailRejectionNoticeSubtitle",
+           children: Yp("thumbnail:thumbnailsRejectedDescription")
+         }), (0, dp.jsx)("div", {
+           className: "ThumbnailRejectionNoticeList",
+           children: [...Up.entries()].map((pp => {
+ ... (54 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L481-L486` → after: `L1177-L1218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1177-L1218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/107.js#L1177-L1218) · [Before (L481-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/107.js#L481-L486)

```diff
-     function mC(CC, zC) {
-       if (CC) {
-         if ("string" === typeof CC) return HC(CC, zC);
-         var ZC = Object.prototype.toString.call(CC).slice(8, -1);
-         return "Object" === ZC && CC.constructor && (ZC = CC.constructor.name), "Map" === ZC || "Set" === ZC ? Array.from(CC) : "Arguments" === ZC || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ZC) ? HC(CC, zC) : void 0
-       }
+     function Zp(pp) {
+       let {
+         thumbnailId: ip,
+         thumbnailName: cp,
+         onClose: Op
+       } = pp;
+       const {
+         t: op
+       } = (0, xp.H)();
+       return (0, dp.jsxs)("div", {
+         className: "ThumbnailDeleteConfirm",
+         children: [(0, dp.jsx)("div", {
+           className: "ThumbnailDeleteConfirmTitle",
+           children: op("thumbnail:deleteThumbnail")
+         }), (0, dp.jsxs)("div", {
+           className: "ThumbnailDeleteConfirmImageContainer",
+ ... (26 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L489-L526` → after: `L1225-L1234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1225-L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/107.js#L1225-L1234) · [Before (L489-L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/107.js#L489-L526)

```diff
-     function HC(CC, zC) {
-       (null == zC || zC > CC.length) && (zC = CC.length);
-       for (var ZC = 0, QC = new Array(zC); ZC < zC; ZC++) QC[ZC] = CC[ZC];
-       return QC
-     }
-     var EC = "file-invalid-type",
-       lC = "file-too-large",
-       XC = "file-too-small",
-       cC = "too-many-files",
-       uC = function(CC) {
-         CC = Array.isArray(CC) && 1 === CC.length ? CC[0] : CC;
-         var zC = Array.isArray(CC) ? "one of ".concat(CC.join(", ")) : CC;
-         return {
-           code: EC,
-           message: "File type must be ".concat(zC)
-         }
- ... (22 more removed lines; see GitHub link above)
+     function ii(pp) {
+       let {
+         schematicData: ip,
+         setTexturePack: cp,
+         initializeTexturePack: op,
+         publishFormEnabled: Ip
+       } = pp;
+       const {
+         t: Sp
+       } = (0, xp.H)(), [Lp, Yp] = (0, Op.useState)(null), [Dp, Ap] = (0, Op.useState)(null), [Pp, yp] = (0, Op.useState)(!1), Up = (0, Cp.b)(), wp = Ip && !Pp, vp = ip.customTexturePackKey;
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L528-L536` → after: `L1236-L1281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1236-L1281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/107.js#L1236-L1281) · [Before (L528-L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/107.js#L528-L536)

```diff
-     function tC(CC, zC, ZC) {
-       if (DC(CC.size))
-         if (DC(zC) && DC(ZC)) {
-           if (CC.size > ZC) return [!1, rC(ZC)];
-           if (CC.size < zC) return [!1, sC(zC)]
-         } else {
-           if (DC(zC) && CC.size < zC) return [!1, sC(zC)];
-           if (DC(ZC) && CC.size > ZC) return [!1, rC(ZC)]
-         } return [!0, null]
+       function tp(pp) {
+         var ip;
+         Yp(pp.metaData.id), Ap(null !== (ip = pp.metaData.fromFolderName) && void 0 !== ip ? ip : null), (pp.metaData.id !== zp.q.CUSTOM || pp.metaData.fromFolderName) && cp(pp)
+       }
+       return (0, Op.useEffect)((() => {
+         vp && (yp(!0), (0, sp.d)(vp).then((pp => {
+           var ip;
+           Up.current && (pp ? (Yp(pp.metaData.id), Ap(null !== (ip = pp.metaData.fromFolderName) && void 0 !== ip ? ip : null), op(pp)) : console.error(`No texture pack at ${vp}`))
+         })).catch((pp => {
+           console.error("Error fetching texture pack: ", pp)
+         })).finally((() => {
+           yp(!1)
+         })))
+       }), [vp, op, Up]), (0, dp.jsxs)("div", {
+         className: "BloxdForm TexturePackSection",
+         children: [(0, dp.jsx)("div", {
+ ... (30 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L540` → after: `L1286-L1324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1286-L1324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/107.js#L1286-L1324) · [Before (L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/107.js#L540)

```diff
-       return void 0 !== CC && null !== CC
+       var ip;
+       let {
+         gameCategory: cp,
+         setGameCategory: Op,
+         disabled: op
+       } = pp;
+       const Sp = null !== (ip = (0, yp.ob)(cp)) && void 0 !== ip ? ip : "other";
+       return (0, dp.jsxs)("div", {
+         className: "GameCategoryPicker",
+         children: [(0, dp.jsx)(vp.i, {
+           label: "worldBuilder:gameCategoryGroup",
+           className: "GameCategoryGroup",
+           disabled: op,
+           children: (0, dp.jsx)(tp.d, {
+             options: yp.db.map((pp => ({
+               value: pp,
+ ... (23 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L544` → after: `L1328-L1393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1328-L1393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/107.js#L1328-L1393) · [Before (L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/107.js#L544)

```diff
-       return "function" === typeof CC.isPropagationStopped ? CC.isPropagationStopped() : "undefined" !== typeof CC.cancelBubble && CC.cancelBubble
+       let {
+         editor: ip,
+         onClose: cp
+       } = pp;
+       const {
+         t: Op
+       } = (0, xp.H)(), {
+         schematicData: op,
+         updateSchematicData: Ip,
+         publishFormEnabled: Lp,
+         formEnabled: Yp
+       } = ip;
+       return (0, dp.jsxs)(dp.Fragment, {
+         children: [(0, dp.jsxs)(ep, {
+           icon: "pen-to-square",
+           title: Op("worldBuilder:basicsSection"),
+ ... (50 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L548-L550` → after: `L1397-L1431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1397-L1431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/107.js#L1397-L1431) · [Before (L548-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/107.js#L548-L550)

```diff
-       return CC.dataTransfer ? Array.prototype.some.call(CC.dataTransfer.types, (function(CC) {
-         return "Files" === CC || "application/x-moz-file" === CC
-       })) : !!CC.target && !!CC.target.files
+       let {
+         editor: ip
+       } = pp;
+       const {
+         t: cp
+       } = (0, xp.H)(), {
+         schematicData: Op,
+         formEnabled: op,
+         hasUnsavedChanges: Sp
+       } = ip, Ap = op && Sp;
+       return (0, dp.jsxs)("footer", {
+         className: "SchematicPageFooter",
+         children: [op && Sp && (0, dp.jsxs)("div", {
+           className: "SchematicPageFooterStatus",
+           children: [(0, dp.jsx)("span", {
+             className: "SchematicPageFooterStatusDot"
+ ... (19 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L554-L555` → after: `L1435-L1443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1435-L1443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/107.js#L1435-L1443) · [Before (L554-L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/107.js#L554-L555)

```diff
-       CC.preventDefault()
-     }
+       let {
+         schematic: ip,
+         onSchematicUpdate: cp,
+         onClose: op,
+         inSourceWorld: Sp
+       } = pp;
+       const {
+         t: Lp
+       } = (0, xp.H)();
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L557-L563` → after: `L1445-L1446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1445-L1446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/107.js#L1445-L1446) · [Before (L557-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/107.js#L557-L563)

```diff
-     function UC() {
-       for (var CC = arguments.length, zC = new Array(CC), ZC = 0; ZC < CC; ZC++) zC[ZC] = arguments[ZC];
-       return function(CC) {
-         for (var ZC = arguments.length, QC = new Array(ZC > 1 ? ZC - 1 : 0), wC = 1; wC < ZC; wC++) QC[wC - 1] = arguments[wC];
-         return zC.some((function(zC) {
-           return !jC(CC) && zC && zC.apply(void 0, [CC].concat(QC)), jC(CC)
-         }))
+       function Yp() {
+         null === op || void 0 === op || op()
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L568-L572` → after: `L1479-L1495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1479-L1495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/107.js#L1479-L1495) · [Before (L568-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/107.js#L568-L572)

```diff
-       return "audio/*" === CC || "video/*" === CC || "image/*" === CC || "text/*" === CC || /\w+\/[-+.\w]+/g.test(CC)
-     }
- 
-     function OC(CC) {
-       return /^.*\.[\w]+$/.test(CC)
+       let {
+         schematic: ip,
+         onSchematicUpdate: cp,
+         onClose: Op,
+         inSourceWorld: Ip
+       } = pp;
+       op.NotificationProvider.showCustomPopup({
+         body: pp => (0, dp.jsx)(Si, {
+           schematic: ip,
+           onSchematicUpdate: cp,
+           onClose: pp,
+           inSourceWorld: Ip
+         }),
+         middleScreenPopupClassName: "SchematicPopup",
+         onClose: Op,
+         unlockPointerKey: "schematicPagePopup"
+ ... (1 more added lines; see GitHub link above)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L574-L577` → after: `L1497-L1509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1497-L1509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/107.js#L1497-L1509) · [Before (L574-L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/107.js#L574-L577)

```diff
-     var kC = ["children"],
-       VC = ["open"],
-       Cz = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
-       zz = ["refKey", "onChange", "onClick"];
+   },
+   5067: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Ap
+     });
+     var Op = cp(1049),
+       op = cp.n(Op),
+       Ip = cp(1201),
+       Sp = cp(1060),
+       xp = cp(1480),
+       Lp = cp(1387),
+       Yp = cp(1361),
+       Dp = cp(1112);
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L580-L586` → after: `L1512-L1570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1512-L1570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/107.js#L1512-L1570) · [Before (L580-L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/107.js#L580-L586)

```diff
-       return function(CC) {
-         if (Array.isArray(CC)) return bz(CC)
-       }(CC) || function(CC) {
-         if ("undefined" !== typeof Symbol && null != CC[Symbol.iterator] || null != CC["@@iterator"]) return Array.from(CC)
-       }(CC) || wz(CC) || function() {
-         throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
-       }()
+       let {
+         editor: ip,
+         className: cp
+       } = pp;
+       const {
+         t: Op
+       } = (0, Ip.H)(), {
+         schematicData: Ap,
+         formEnabled: Pp,
+         publishFormEnabled: Wp
+       } = ip, yp = !Pp || !Wp;
+       return (0, Dp.jsxs)("div", {
+         className: op()("PublishButtonContainer", cp),
+         children: [ip.canEditSourceWorld && (0, Dp.jsxs)(xp.f, {
+           onClick: ip.editSourceWorld,
+           disabled: yp,
+ ... (43 more added lines; see GitHub link above)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L588-L607` → after: `L1572-L1581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1572-L1581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/107.js#L1572-L1581) · [Before (L588-L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/107.js#L588-L607)

```diff
- 
-     function Qz(CC, zC) {
-       return function(CC) {
-         if (Array.isArray(CC)) return CC
-       }(CC) || function(CC, zC) {
-         var ZC = null == CC ? null : "undefined" !== typeof Symbol && CC[Symbol.iterator] || CC["@@iterator"];
-         if (null == ZC) return;
-         var QC, wC, bC = [],
-           nC = !0,
-           fC = !1;
-         try {
-           for (ZC = ZC.call(CC); !(nC = (QC = ZC.next()).done) && (bC.push(QC.value), !zC || bC.length !== zC); nC = !0);
-         } catch (oC) {
-           fC = !0, wC = oC
-         } finally {
-           try {
- ... (4 more removed lines; see GitHub link above)
+   },
+   5103: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => op
+     });
+     var Op = cp(1211);
+     async function op(pp) {
+       const ip = await fetch(`${Op.clientSideServerUrls.s3Url}/${pp}`, {
+         headers: {
+           Accept: "application/json"
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L609-L612` → after: `L1583-L1586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1583-L1586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/107.js#L1583-L1586) · [Before (L609-L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/107.js#L609-L612)

```diff
-         return bC
-       }(CC, zC) || wz(CC, zC) || function() {
-         throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
-       }()
+       });
+       if (404 === ip.status || 403 === ip.status) return null;
+       if (!ip.ok) throw new Error(`Failed to download the texture pack (${ip.status})`);
+       return await ip.json()
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L616-L619` → after: `L1607-L1628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1607-L1628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/107.js#L1607-L1628) · [Before (L616-L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/107.js#L616-L619)

```diff
-       if (CC) {
-         if ("string" === typeof CC) return bz(CC, zC);
-         var ZC = Object.prototype.toString.call(CC).slice(8, -1);
-         return "Object" === ZC && CC.constructor && (ZC = CC.constructor.name), "Map" === ZC || "Set" === ZC ? Array.from(CC) : "Arguments" === ZC || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ZC) ? bz(CC, zC) : void 0
+       return {
+         schematicId: pp.schematicId,
+         name: pp.name,
+         description: pp.description,
+         gamePublished: ip,
+         gameCategory: pp.gameCategory,
+         defaultGamemode: pp.defaultGamemode,
+         voidDeathHeight: pp.voidDeathHeight,
+         disableKeepInventory: pp.disableKeepInventory,
+         disableTpRequests: pp.disableTpRequests,
+         disableLobbySpawn: pp.disableLobbySpawn,
+         disableMobs: pp.disableMobs,
+         disableSpawnProtection: pp.disableSpawnProtection,
+         disableFallDamage: pp.disableFallDamage,
+         worldBorder: pp.worldBorder,
+         hideLobbyCode: pp.hideLobbyCode,
+ ... (6 more added lines; see GitHub link above)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L623-L627` → after: `L1632-L1641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1632-L1641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/107.js#L1632-L1641) · [Before (L623-L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/107.js#L623-L627)

```diff
-     function bz(CC, zC) {
-       (null == zC || zC > CC.length) && (zC = CC.length);
-       for (var ZC = 0, QC = new Array(zC); ZC < zC; ZC++) QC[ZC] = CC[ZC];
-       return QC
-     }
+     function wp(pp) {
+       let {
+         onNavigateAway: ip,
+         inSourceWorld: cp = !1
+       } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+       const {
+         userContext: wp
+       } = (0, Wp.b)(), vp = (0, yp.useNavigatePreserveSearch)(), [tp, Hp] = (0, Op.useState)({
+         ...pp
+       }), [dp, ep] = (0, Op.useState)("Enter"), [jp, kp] = (0, Op.useState)(void 0), mp = (0, Op.useRef)(Up(pp, pp.gamePublished)), Rp = (0, Op.useRef)(void 0), qp = "Enter" === dp, Mp = wp.playerHasRank("developer") || wp.playerHasRank("admin") || "Enter" === dp && !1 !== tp.sch … [truncated]
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L629-L635` → after: `L1643-L1647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1643-L1647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/107.js#L1643-L1647) · [Before (L629-L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/107.js#L629-L635)

```diff
-     function nz(CC, zC) {
-       var ZC = Object.keys(CC);
-       if (Object.getOwnPropertySymbols) {
-         var QC = Object.getOwnPropertySymbols(CC);
-         zC && (QC = QC.filter((function(zC) {
-           return Object.getOwnPropertyDescriptor(CC, zC).enumerable
-         }))), ZC.push.apply(ZC, QC)
+       function Ep(pp, ip) {
+         Hp((cp => ({
+           ...cp,
+           [pp]: ip
+         })))
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L637-L638` → after: `L1649-L1651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1649-L1651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/107.js#L1649-L1651) · [Before (L637-L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/107.js#L637-L638)

```diff
-       return ZC
-     }
+       const Xp = (0, Op.useCallback)((pp => {
+         Rp.current = pp, kp(pp)
+       }), []);
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L640-L646` → after: `L1653-L1676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1653-L1676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/107.js#L1653-L1676) · [Before (L640-L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/107.js#L640-L646)

```diff
-     function fz(CC) {
-       for (var zC = 1; zC < arguments.length; zC++) {
-         var ZC = null != arguments[zC] ? arguments[zC] : {};
-         zC % 2 ? nz(Object(ZC), !0).forEach((function(zC) {
-           oz(CC, zC, ZC[zC])
-         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(CC, Object.getOwnPropertyDescriptors(ZC)) : nz(Object(ZC)).forEach((function(zC) {
-           Object.defineProperty(CC, zC, Object.getOwnPropertyDescriptor(ZC, zC))
+       function lp(pp) {
+         ep("Loading");
+         const ip = Up(tp, pp),
+           cp = jp !== Rp.current ? jp : void 0;
+         Dp.b.updateSchematic(wp, ip, cp).then((cp => {
+           let {
+             customTexturePackKey: Op
+           } = cp;
+           ep("Success"), Ep("customTexturePackKey", Op), mp.current = ip, Rp.current = void 0, kp(void 0), setTimeout((() => {
+             Ep("gamePublished", pp), ep("Enter")
+           }), 1e3)
+         })).catch((pp => {
+           var ip;
+           (console.error("Failed to save schematic:", pp), ep("Error"), pp instanceof Sp.e && pp.errorMessageForUser) && Pp.NotificationProvider.showAlertPopup({
+             title: "worldBuilder:changesNotSaved",
+             subtitle: pp.errorMessageForUser,
+ ... (8 more added lines; see GitHub link above)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L649-L699` → after: `L1679-L1699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1679-L1699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/107.js#L1679-L1699) · [Before (L649-L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/107.js#L649-L699)

```diff
-       return CC
-     }
- 
-     function oz(CC, zC, ZC) {
-       return zC in CC ? Object.defineProperty(CC, zC, {
-         value: ZC,
-         enumerable: !0,
-         configurable: !0,
-         writable: !0
-       }) : CC[zC] = ZC, CC
-     }
- 
-     function qz(CC, zC) {
-       if (null == CC) return {};
-       var ZC, QC, wC = function(CC, zC) {
-         if (null == CC) return {};
- ... (35 more removed lines; see GitHub link above)
+       return {
+         schematicData: tp,
+         updateSchematicData: Ep,
+         setTexturePack: kp,
+         initializeTexturePack: Xp,
+         updateState: dp,
+         formEnabled: qp,
+         publishFormEnabled: Mp,
+         hasUnsavedChanges: Cp,
+         canEditSourceWorld: !cp,
+         saveSchematic: lp,
+         unpublishSchematic: function() {
+           Pp.NotificationProvider.showPromptPopup({
+             icon: "rocket-launch",
+             title: "worldBuilder:unpublishAsGameConfirmTitle",
+             subtitle: "worldBuilder:unpublishAsGameConfirmSubtitle",
+ ... (5 more added lines; see GitHub link above)
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1009-L1013` → after: `L1702-L1711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1702-L1711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/107.js#L1702-L1711) · [Before (L1009-L1013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/107.js#L1009-L1013)

```diff
-         Kz = function(CC) {
-           return IC ? null : ez(CC)
-         },
-         Yz = function(CC) {
-           iC && CC.stopPropagation()
+         editSourceWorld: function() {
+           ep("Loading"), Ap.b.getSourceWorld(tp.schematicId).then((pp => {
+             Yp.gameBridge.send("leaveGame", {
+               reloadPath: "/"
+             }), (0, Lp.k)("other"), vp((0, op.c)("classic", pp)), null === ip || void 0 === ip || ip()
+           })).catch((pp => {
+             console.error("Failed to get source world:", pp), ep("Error"), setTimeout((() => {
+               ep("Enter")
+             }), 1e3)
+           }))
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1015-L1111` → after: `L1713-L1717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1713-L1717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/107.js#L1713-L1717) · [Before (L1015-L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/107.js#L1015-L1111)

```diff
-         dz = (0, QC.useMemo)((function() {
-           return function() {
-             var CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
-               zC = CC.refKey,
-               ZC = void 0 === zC ? "ref" : zC,
-               QC = CC.role,
-               bC = CC.onKeyDown,
-               nC = CC.onFocus,
-               fC = CC.onBlur,
-               oC = CC.onClick,
-               qC = CC.onDragEnter,
-               FC = CC.onDragOver,
-               WC = CC.onDragLeave,
-               NC = CC.onDrop,
-               MC = qz(CC, Cz);
-             return fz(fz(oz({
- ... (81 more removed lines; see GitHub link above)
+         playGame: function() {
+           Yp.gameBridge.send("leaveGame", {
+             reloadPath: "/"
+           }), vp((0, xp.u)((0, Ip.t)(tp.schematicId), tp)), null === ip || void 0 === ip || ip()
+         }
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1114-L1116` → after: `L1720-L1721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1720-L1721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/107.js#L1720-L1721) · [Before (L1114-L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/107.js#L1114-L1116)

```diff
- 
-     function Sz() {}
-   }
+   },
+   5054: () => {}
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/108.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/108.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L4-L80` → after: `L4-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L4-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/108.js#L4-L63) · [Before (L4-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/108.js#L4-L80)

```diff
-   4951: (CC, zC, ZC) => {
-     function QC(CC) {
-       return QC = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(CC) {
-         return typeof CC
-       } : function(CC) {
-         return CC && "function" == typeof Symbol && CC.constructor === Symbol && CC !== Symbol.prototype ? "symbol" : typeof CC
-       }, QC(CC)
-     }
-     Object.defineProperty(zC, "__esModule", {
-       value: !0
-     }), zC.default = void 0;
-     var wC = WC(ZC(1002)),
-       bC = function(CC, zC) {
-         if (!zC && CC && CC.__esModule) return CC;
-         if (null === CC || "object" !== QC(CC) && "function" !== typeof CC) return {
-           default: CC
- ... (61 more removed lines; see GitHub link above)
+   36565: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Lp
+     });
+     var Op = cp(1049),
+       op = cp.n(Op),
+       Ip = cp(62),
+       Sp = cp(4664),
+       xp = cp(1112);
+ 
+     function Lp(pp) {
+       let {
+         locked: ip,
+         children: cp
+       } = pp;
+       const Op = (0, Ip.useRef)(null),
+ ... (44 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L82-L218` → after: `L65-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L65-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/108.js#L65-L93) · [Before (L82-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/108.js#L82-L218)

```diff
-         throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
-       }
-       var bC, nC = !0,
-         fC = !1;
-       return {
-         s: function() {
-           ZC = ZC.call(CC)
-         },
-         n: function() {
-           var CC = ZC.next();
-           return nC = CC.done, CC
-         },
-         e: function(CC) {
-           fC = !0, bC = CC
-         },
-         f: function() {
- ... (121 more removed lines; see GitHub link above)
+       })
+     }
+ 
+     function wp(pp) {
+       let {
+         flow: ip,
+         close: cp,
+         onCreating: xp,
+         onCreated: Up,
+         onFailedClosed: wp,
+         join: vp
+       } = pp;
+       const {
+         t: tp
+       } = (0, Sp.H)(), [Hp, dp] = (0, op.useState)(Op.s), [ep, jp] = (0, op.useState)(!1), [kp, mp] = (0, op.useState)(""), Rp = (0, Ap.b)();
+       (0, op.useEffect)((() => {
+ ... (13 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L644` → after: `L97-L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L97-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/108.js#L97-L259) · [Before (L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/108.js#L644)

```diff
-         return CC
+       });
+       return (0, yp.jsxs)("div", {
+         className: "CreateCustomLobby",
+         children: [(0, yp.jsx)("div", {
+           className: "CreateCustomLobbyTitleContainer",
+           children: (0, yp.jsx)("div", {
+             className: "CreateCustomLobbyTitle",
+             children: tp("homePage:myWorld")
+           })
+         }), (0, yp.jsx)(Lp.b, {
+           locked: ep,
+           children: (0, yp.jsxs)("div", {
+             className: "CreateCustomLobbyFields",
+             children: [(0, yp.jsx)(Pp.e, {
+               value: Hp.defaultGamemode,
+               onChange: pp => {
+ ... (147 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L646-L684` → after: `L261-L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L261-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/108.js#L261-L268) · [Before (L646-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/108.js#L646-L684)

```diff
-       WC = function(CC) {
-         return CC && CC.ownerDocument && CC.ownerDocument.defaultView || bC
-       },
-       NC = GC(0, 0, 0, 0);
- 
-     function MC(CC) {
-       return parseFloat(CC) || 0
-     }
- 
-     function gC(CC) {
-       for (var zC = [], ZC = 1; ZC < arguments.length; ZC++) zC[ZC - 1] = arguments[ZC];
-       return zC.reduce((function(zC, ZC) {
-         return zC + MC(CC["border-" + ZC + "-width"])
-       }), 0)
-     }
- 
- ... (23 more removed lines; see GitHub link above)
+       Pp = {
+         fallDamage: "classic:enableFallDamageDescription",
+         tpRequests: "classic:enableTpRequestsDescription",
+         spawnProtection: "classic:enableSpawnProtectionDescription",
+         spawnReset: "classic:enableSpawnResetDescription",
+         smpMarketplace: "classic:enableSmpMarketplaceDescription",
+         survivalGuns: "classic:enableSurvivalGunsDescription",
+         dayNight: "classic:enableDayNightDescription"
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L686-L800` → after: `L270-L361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L270-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/108.js#L270-L361) · [Before (L686-L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/108.js#L686-L800)

```diff
-       return GC(wC.left, wC.top, fC, oC)
-     }
-     var pC = "undefined" !== typeof SVGGraphicsElement ? function(CC) {
-       return CC instanceof WC(CC).SVGGraphicsElement
-     } : function(CC) {
-       return CC instanceof WC(CC).SVGElement && "function" === typeof CC.getBBox
-     };
- 
-     function PC(CC) {
-       return wC ? pC(CC) ? function(CC) {
-         var zC = CC.getBBox();
-         return GC(0, 0, zC.width, zC.height)
-       }(CC) : SC(CC) : NC
-     }
- 
-     function GC(CC, zC, ZC, QC) {
- ... (99 more removed lines; see GitHub link above)
+   },
+   36557: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Yp,
+       i: () => Dp
+     });
+     cp(62);
+     var Op = cp(1049),
+       op = cp.n(Op),
+       Ip = cp(4719),
+       Sp = cp(322),
+       xp = cp(1201),
+       Lp = cp(1112);
+ 
+     function Yp(pp) {
+       let {
+ ... (76 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/109.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/109.js` (42 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80)

#### 1. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/109.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/109.js#L2)

```diff
- export const ids = [109, 397];
+ export const ids = [109];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L4-L5` → after: `L4-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L4-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/109.js#L4-L25) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/109.js#L4-L5)

```diff
-   4911: (CC, zC, ZC) => {
-     var QC = ZC(4915);
+   5097: (pp, ip) => {
+     ip.e = function(pp, ip) {
+       if (pp && ip) {
+         var cp = Array.isArray(ip) ? ip : ip.split(","),
+           Op = pp.name || "",
+           op = (pp.type || "").toLowerCase(),
+           Ip = op.replace(/\/.*$/, "");
+         return cp.some((function(pp) {
+           var ip = pp.trim().toLowerCase();
+           return "." === ip.charAt(0) ? Op.toLowerCase().endsWith(ip) : ip.endsWith("/*") ? Ip === ip.replace(/\/.*$/, "") : op === ip
+         }))
+       }
+       return !0
+     }
+   },
+   5076: (pp, ip, cp) => {
+ ... (6 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L7` → after: `L27-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L27-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/109.js#L27-L35) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/109.js#L7)

```diff
-     function wC() {}
+     function Sp(pp, ip, cp, Op) {
+       return new(cp || (cp = Promise))((function(op, Ip) {
+         function Sp(pp) {
+           try {
+             Lp(Op.next(pp))
+           } catch (ip) {
+             Ip(ip)
+           }
+         }
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L9-L14` → after: `L37-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L37-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/109.js#L37-L126) · [Before (L9-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/109.js#L9-L14)

```diff
-     function bC() {}
-     bC.resetWarningCache = wC, CC.exports = function() {
-       function CC(CC, zC, ZC, wC, bC, nC) {
-         if (nC !== QC) {
-           var fC = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
-           throw fC.name = "Invariant Violation", fC
+         function xp(pp) {
+           try {
+             Lp(Op.throw(pp))
+           } catch (ip) {
+             Ip(ip)
+           }
+         }
+ 
+         function Lp(pp) {
+           var ip;
+           pp.done ? op(pp.value) : (ip = pp.value, ip instanceof cp ? ip : new cp((function(pp) {
+             pp(ip)
+           }))).then(Sp, xp)
+         }
+         Lp((Op = Op.apply(pp, ip || [])).next())
+       }))
+ ... (74 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L18-L19` → after: `L132-L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L132-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/109.js#L132-L149) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/109.js#L18-L19)

```diff
-       function zC() {
-         return CC
+     function Lp(pp, ip) {
+       var cp = "function" === typeof Symbol && pp[Symbol.iterator];
+       if (!cp) return pp;
+       var Op, op, Ip = cp.call(pp),
+         Sp = [];
+       try {
+         for (;
+           (void 0 === ip || ip-- > 0) && !(Op = Ip.next()).done;) Sp.push(Op.value)
+       } catch (xp) {
+         op = {
+           error: xp
+         }
+       } finally {
+         try {
+           Op && !Op.done && (cp = Ip.return) && cp.call(Ip)
+         } finally {
+ ... (2 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L21-L45` → after: `L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/109.js#L151) · [Before (L21-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/109.js#L21-L45)

```diff
-       CC.isRequired = CC;
-       var ZC = {
-         array: CC,
-         bigint: CC,
-         bool: CC,
-         func: CC,
-         number: CC,
-         object: CC,
-         string: CC,
-         symbol: CC,
-         any: CC,
-         arrayOf: zC,
-         element: CC,
-         elementType: CC,
-         instanceOf: zC,
-         node: CC,
- ... (9 more removed lines; see GitHub link above)
+       return Sp
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L66-L78` → after: `L154-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L154-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/109.js#L154-L254) · [Before (L66-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/109.js#L66-L78)

```diff
-     function FC() {
-       const {
-         t: CC
-       } = (0, bC.y)(), zC = (0, QC.useNavigatePreserveSearch)();
-       return (0, fC.b)(), (0, qC.jsxs)("div", {
-         className: "ShaderPackPublishPage AnimFadeIn",
-         children: [(0, qC.jsx)("div", {
-           className: "ShaderPackPublishBack",
-           children: (0, qC.jsx)(wC.c, {
-             onClick: () => {
-               zC(oC.W)
-             },
-             children: CC("shaderPackListing:backToPacks")
+     function Yp(pp, ip, cp) {
+       if (cp || 2 === arguments.length)
+         for (var Op, op = 0, Ip = ip.length; op < Ip; op++) !Op && op in ip || (Op || (Op = Array.prototype.slice.call(ip, 0, op)), Op[op] = ip[op]);
+       return pp.concat(Op || Array.prototype.slice.call(ip))
+     }
+     Object.create;
+     "function" === typeof SuppressedError && SuppressedError;
+     var Dp = new Map([
+       ["aac", "audio/aac"],
+       ["abw", "application/x-abiword"],
+       ["arc", "application/x-freearc"],
+       ["avif", "image/avif"],
+       ["avi", "video/x-msvideo"],
+       ["azw", "application/vnd.amazon.ebook"],
+       ["bin", "application/octet-stream"],
+       ["bmp", "image/bmp"],
+ ... (85 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L80-L91` → after: `L256-L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L256-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/109.js#L256-L268) · [Before (L80-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/109.js#L80-L91)

```diff
-         }), (0, qC.jsx)("h1", {
-           className: "ShaderPackPublishTitle",
-           children: CC("shaderPackListing:publishTitle")
-         }), (0, qC.jsx)(nC.ShaderPackPublishForm, {
-           existing: null,
-           onPublished: CC => {
-             zC((0, oC.$)(CC.packId), {
-               replace: !0
-             })
-           }
-         })]
-       })
+         }
+         return pp
+       }(pp);
+       if ("string" !== typeof cp.path) {
+         var Op = pp.webkitRelativePath;
+         Object.defineProperty(cp, "path", {
+           value: "string" === typeof ip ? ip : "string" === typeof Op && Op.length > 0 ? Op : pp.name,
+           writable: !1,
+           configurable: !1,
+           enumerable: !0
+         })
+       }
+       return cp
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L93-L108` → after: `L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/109.js#L270) · [Before (L93-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/109.js#L93-L108)

```diff
-   },
-   6570: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       b: () => NC,
-       e: () => MC,
-       f: () => WC,
-       j: () => gC
-     });
-     var QC = ZC(48),
-       wC = ZC(6560),
-       bC = ZC(1439),
-       nC = ZC(6556),
-       fC = ZC(6572),
-       oC = ZC(1076);
-     const qC = "shaderPackListingView",
-       FC = "shaderPackListingFilterOpen";
+     var Pp = [".DS_Store", "Thumbs.db"];
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L110-L113` → after: `L272-L273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L272-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/109.js#L272-L273) · [Before (L110-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/109.js#L110-L113)

```diff
-     function WC() {
-       var CC;
-       const [zC, ZC] = (0, fC.d)(qC, wC.B[0]);
-       return [null !== (CC = wC.B.find((CC => CC === zC))) && void 0 !== CC ? CC : wC.B[0], ZC]
+     function Wp(pp) {
+       return "object" === typeof pp && null !== pp
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L116-L119` → after: `L276-L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L276-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/109.js#L276-L279) · [Before (L116-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/109.js#L116-L119)

```diff
-     function NC() {
-       (0, QC.useEffect)((() => () => {
-         window.location.pathname.startsWith(nC.W) || (0, nC.m)()
-       }), [])
+     function yp(pp) {
+       return tp(pp.target.files).map((function(pp) {
+         return Ap(pp)
+       }))
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L122-L123` → after: `L282-L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L282-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/109.js#L282-L296) · [Before (L122-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/109.js#L122-L123)

```diff
-     function MC() {
-       return (0, fC.d)(FC, !1)
+     function Up(pp) {
+       return Sp(this, void 0, void 0, (function() {
+         return xp(this, (function(ip) {
+           switch (ip.label) {
+             case 0:
+               return [4, Promise.all(pp.map((function(pp) {
+                 return pp.getFile()
+               })))];
+             case 1:
+               return [2, ip.sent().map((function(pp) {
+                 return Ap(pp)
+               }))]
+           }
+         }))
+       }))
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L126-L135` → after: `L299-L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L299-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/109.js#L299-L314) · [Before (L126-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/109.js#L126-L135)

```diff
-     function gC() {
-       const {
-         userContext: CC,
-         isUserContextUpdating: zC
-       } = (0, oC.e)(), [ZC, wC] = (0, QC.useState)(null), nC = (0, QC.useRef)(new Set);
- 
-       function fC(CC, zC) {
-         wC((ZC => {
-           const QC = new Set(ZC);
-           return zC ? QC.add(CC) : QC.delete(CC), QC
+     function wp(pp, ip) {
+       return Sp(this, void 0, void 0, (function() {
+         var cp;
+         return xp(this, (function(Op) {
+           switch (Op.label) {
+             case 0:
+               return pp.items ? (cp = tp(pp.items).filter((function(pp) {
+                 return "file" === pp.kind
+               })), "drop" !== ip ? [2, cp] : [4, Promise.all(cp.map(Hp))]) : [3, 2];
+             case 1:
+               return [2, vp(dp(Op.sent()))];
+             case 2:
+               return [2, vp(tp(pp.files).map((function(pp) {
+                 return Ap(pp)
+               })))]
+           }
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L137-L160` → after: `L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/109.js#L316) · [Before (L137-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/109.js#L137-L160)

```diff
-       }
-       return (0, QC.useEffect)((() => {
-         if (zC) return;
-         let ZC = !1;
-         return bC.d.getFavouriteShaderPacks(CC).then((CC => {
-           ZC || wC(new Set(CC))
-         })).catch((CC => {
-           console.error("Failed to get favourite shader packs", CC), ZC || wC(new Set)
-         })), () => {
-           ZC = !0
-         }
-       }), [CC, zC]), {
-         isFavourite: CC => null === ZC ? null : ZC.has(CC),
-         toggle: function(zC) {
-           if (null === ZC || nC.current.has(zC)) return;
-           nC.current.add(zC);
- ... (8 more removed lines; see GitHub link above)
+       }))
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L198` → after: `L320-L322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L320-L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/109.js#L320-L322) · [Before (L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/109.js#L198)

```diff
-       return `${nC}/${encodeURIComponent(CC)}`
+       return pp.filter((function(pp) {
+         return -1 === Pp.indexOf(pp.name)
+       }))
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L203` → after: `L326-L331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L326-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/109.js#L326-L331) · [Before (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/109.js#L203)

```diff
-       qC = CC
+       if (null === pp) return [];
+       for (var ip = [], cp = 0; cp < pp.length; cp++) {
+         var Op = pp[cp];
+         ip.push(Op)
+       }
+       return ip
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L206-L207` → after: `L334-L337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L334-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/109.js#L334-L337) · [Before (L206-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/109.js#L206-L207)

```diff
-     function WC() {
-       return qC
+     function Hp(pp) {
+       if ("function" !== typeof pp.webkitGetAsEntry) return ep(pp);
+       var ip = pp.webkitGetAsEntry();
+       return ip && ip.isDirectory ? kp(ip) : ep(pp)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L210-L211` → after: `L340-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L340-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/109.js#L340-L343) · [Before (L210-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/109.js#L210-L211)

```diff
-     function NC() {
-       qC = null
+     function dp(pp) {
+       return pp.reduce((function(pp, ip) {
+         return Yp(Yp([], Lp(pp), !1), Lp(Array.isArray(ip) ? dp(ip) : [ip]), !1)
+       }), [])
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L215` → after: `L347-L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L347-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/109.js#L347-L350) · [Before (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/109.js#L215)

```diff
-       return CC.playerHasRank("developer") || CC.playerHasRank("admin")
+       var ip = pp.getAsFile();
+       if (!ip) return Promise.reject("".concat(pp, " is not a File"));
+       var cp = Ap(ip);
+       return Promise.resolve(cp)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L226-L227` → after: `L353-L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L353-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/109.js#L353-L394) · [Before (L226-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/109.js#L226-L227)

```diff
-     function pC(CC, zC) {
-       return CC.withFeatures.includes(zC) ? "with" : CC.withoutFeatures.includes(zC) ? "without" : null
+     function jp(pp) {
+       return Sp(this, void 0, void 0, (function() {
+         return xp(this, (function(ip) {
+           return [2, pp.isDirectory ? kp(pp) : mp(pp)]
+         }))
+       }))
+     }
+ 
+     function kp(pp) {
+       var ip = pp.createReader();
+       return new Promise((function(pp, cp) {
+         var Op = [];
+         ! function op() {
+           var Ip = this;
+           ip.readEntries((function(ip) {
+             return Sp(Ip, void 0, void 0, (function() {
+ ... (26 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L231` → after: `L398-L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L398-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/109.js#L398-L409) · [Before (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/109.js#L231)

```diff
-       return null === CC ? "with" : "with" === CC ? "without" : null
+       return Sp(this, void 0, void 0, (function() {
+         return xp(this, (function(ip) {
+           return [2, new Promise((function(ip, cp) {
+             pp.file((function(cp) {
+               var Op = Ap(cp, pp.fullPath);
+               ip(Op)
+             }), (function(pp) {
+               cp(pp)
+             }))
+           }))]
+         }))
+       }))
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L235` → after: `L414-L420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L414-L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/109.js#L414-L420) · [Before (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/109.js#L235)

```diff
-       return "with" === CC ? "only" : null === CC ? "include" : void 0
+       return function(pp) {
+         if (Array.isArray(pp)) return Qp(pp)
+       }(pp) || function(pp) {
+         if ("undefined" !== typeof Symbol && null != pp[Symbol.iterator] || null != pp["@@iterator"]) return Array.from(pp)
+       }(pp) || lp(pp) || function() {
+         throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
+       }()
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L239-L243` → after: `L424-L429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L424-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/109.js#L424-L429) · [Before (L239-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/109.js#L239-L243)

```diff
-       const ZC = pC(CC, zC),
-         QC = CC => CC.filter((CC => CC !== zC));
-       return {
-         withFeatures: null === ZC ? [...CC.withFeatures, zC] : QC(CC.withFeatures),
-         withoutFeatures: "with" === ZC ? [...CC.withoutFeatures, zC] : QC(CC.withoutFeatures)
+       var cp = Object.keys(pp);
+       if (Object.getOwnPropertySymbols) {
+         var Op = Object.getOwnPropertySymbols(pp);
+         ip && (Op = Op.filter((function(ip) {
+           return Object.getOwnPropertyDescriptor(pp, ip).enumerable
+         }))), cp.push.apply(cp, Op)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L255-L266` → after: `L435-L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L435-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/109.js#L435-L441) · [Before (L255-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/109.js#L255-L266)

```diff
-       var zC, ZC, wC;
-       const nC = CC.get(AC),
-         fC = (null !== (zC = CC.get(JC)) && void 0 !== zC ? zC : eC).split(","),
-         oC = CC.get(iC);
-       return {
-         section: "favourites" === nC || "mine" === nC ? nC : "explore",
-         sort: null !== (ZC = QC.x.find((zC => zC === CC.get(xC)))) && void 0 !== ZC ? ZC : vC,
-         withFeatures: gC.filter((CC => fC.includes(CC) && !fC.includes(`-${CC}`))),
-         withoutFeatures: gC.filter((CC => fC.includes(`-${CC}`))),
-         searchQuery: (null === (wC = CC.get(IC)) || void 0 === wC ? void 0 : wC.slice(0, QC.G)) || null,
-         pageNumber: (0, bC.f)(CC.get(bC.b)),
-         banned: "only" === oC ? "with" : "include" === oC ? null : "without"
+       for (var ip = 1; ip < arguments.length; ip++) {
+         var cp = null != arguments[ip] ? arguments[ip] : {};
+         ip % 2 ? Mp(Object(cp), !0).forEach((function(ip) {
+           Ep(pp, ip, cp[ip])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : Mp(Object(cp)).forEach((function(ip) {
+           Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
+         }))
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L271-L273` → after: `L456-L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L456-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/109.js#L456-L478) · [Before (L271-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/109.js#L271-L273)

```diff
-       var ZC;
-       const QC = HC(zC);
-       (0, bC.i)(CC, AC, "explore" === zC.section ? null : zC.section), (0, bC.i)(CC, xC, zC.sort === vC ? null : zC.sort), (0, bC.i)(CC, JC, QC === eC ? null : QC), (0, bC.i)(CC, IC, zC.searchQuery), (0, bC.i)(CC, iC, null !== (ZC = GC(zC.banned)) && void 0 !== ZC ? ZC : null), ( … [truncated]
+       return function(pp) {
+         if (Array.isArray(pp)) return pp
+       }(pp) || function(pp, ip) {
+         var cp = null == pp ? null : "undefined" !== typeof Symbol && pp[Symbol.iterator] || pp["@@iterator"];
+         if (null == cp) return;
+         var Op, op, Ip = [],
+           Sp = !0,
+           xp = !1;
+         try {
+           for (cp = cp.call(pp); !(Sp = (Op = cp.next()).done) && (Ip.push(Op.value), !ip || Ip.length !== ip); Sp = !0);
+         } catch (Lp) {
+           xp = !0, op = Lp
+         } finally {
+           try {
+             Sp || null == cp.return || cp.return()
+           } finally {
+ ... (7 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L276-L286` → after: `L481-L536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L481-L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/109.js#L481-L536) · [Before (L276-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/109.js#L276-L286)

```diff
-     function YC(CC) {
-       const zC = new URLSearchParams;
-       return KC(zC, {
-         section: "explore",
-         sort: vC,
-         withFeatures: "strict" === CC ? [CC] : [CC, "strict"],
-         withoutFeatures: [],
-         searchQuery: null,
-         pageNumber: 1,
-         banned: "without"
-       }), `${nC}?${zC.toString()}`
+     function lp(pp, ip) {
+       if (pp) {
+         if ("string" === typeof pp) return Qp(pp, ip);
+         var cp = Object.prototype.toString.call(pp).slice(8, -1);
+         return "Object" === cp && pp.constructor && (cp = pp.constructor.name), "Map" === cp || "Set" === cp ? Array.from(pp) : "Arguments" === cp || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cp) ? Qp(pp, ip) : void 0
+       }
+     }
+ 
+     function Qp(pp, ip) {
+       (null == ip || ip > pp.length) && (ip = pp.length);
+       for (var cp = 0, Op = new Array(ip); cp < ip; cp++) Op[cp] = pp[cp];
+       return Op
+     }
+     var Jp = "file-invalid-type",
+       Bp = "file-too-large",
+       Np = "file-too-small",
+ ... (40 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L290` → after: `L540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/109.js#L540) · [Before (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/109.js#L290)

```diff
-       return HC(CC) === eC
+       return void 0 !== pp && null !== pp
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L294` → after: `L544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/109.js#L544) · [Before (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/109.js#L294)

```diff
-       return null !== CC.searchQuery || "with" === CC.banned || HC(CC) !== eC
+       return "function" === typeof pp.isPropagationStopped ? pp.isPropagationStopped() : "undefined" !== typeof pp.cancelBubble && pp.cancelBubble
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L298-L314` → after: `L548-L551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L548-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/109.js#L548-L551) · [Before (L298-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/109.js#L298-L314)

```diff
-       return gC.flatMap((zC => {
-         const ZC = pC(CC, zC);
-         return "with" === ZC ? [zC] : "without" === ZC ? [`-${zC}`] : []
-       })).join(",")
-     }
-     const EC = {
-         popular: "shaderPackListing:sortPopular",
-         updated: "shaderPackListing:sortUpdated",
-         newest: "shaderPackListing:sortNewest"
-       },
-       lC = {
-         forest: "shaderPackListing:viewForest",
-         desert: "shaderPackListing:viewDesert",
-         water: "shaderPackListing:viewWater",
-         night: "shaderPackListing:viewNight",
-         cave: "shaderPackListing:viewCave"
- ... (1 more removed lines; see GitHub link above)
+       return pp.dataTransfer ? Array.prototype.some.call(pp.dataTransfer.types, (function(pp) {
+         return "Files" === pp || "application/x-moz-file" === pp
+       })) : !!pp.target && !!pp.target.files
+     }
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L317` → after: `L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/109.js#L554) · [Before (L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/109.js#L317)

```diff
-       return Math.round(100 * Math.max(0, 1 - 1 / CC))
+       pp.preventDefault()
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L320-L349` → after: `L557-L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L557-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/109.js#L557-L563) · [Before (L320-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/109.js#L320-L349)

```diff
-     function cC(CC, zC, ZC, wC) {
-       const bC = [];
-       CC.isBanned && bC.push({
-         tone: "warning",
-         text: wC("shaderPackListing:ownerBanned"),
-         detail: null
-       });
-       const {
-         pending: nC
-       } = CC;
-       if (null === CC.brokenError || nC && !nC.error || bC.push({
-           tone: "warning",
-           text: wC("shaderPackListing:ownerBroken"),
-           detail: CC.brokenError
-         }), null !== nC && void 0 !== nC && nC.error) bC.push({
-         tone: "warning",
- ... (14 more removed lines; see GitHub link above)
+     function zp() {
+       for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
+       return function(pp) {
+         for (var cp = arguments.length, Op = new Array(cp > 1 ? cp - 1 : 0), op = 1; op < cp; op++) Op[op - 1] = arguments[op];
+         return ip.some((function(ip) {
+           return !Gp(pp) && ip && ip.apply(void 0, [pp].concat(Op)), Gp(pp)
+         }))
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L359` → after: `L568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/109.js#L568) · [Before (L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/109.js#L359)

```diff
-       return Math.max(1, Math.round(CC / 1024))
+       return "audio/*" === pp || "video/*" === pp || "image/*" === pp || "text/*" === pp || /\w+\/[-+.\w]+/g.test(pp)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L362-L363` → after: `L571-L586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L571-L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/109.js#L571-L586) · [Before (L362-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/109.js#L362-L363)

```diff
-     function rC(CC, zC, ZC) {
-       return CC instanceof wC.d && CC.errorMessageForUser ? CC.errorMessageForUser : zC(ZC)
+     function Kp(pp) {
+       return /^.*\.[\w]+$/.test(pp)
+     }
+     var Vp = ["children"],
+       ii = ["open"],
+       ci = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
+       Oi = ["refKey", "onChange", "onClick"];
+ 
+     function oi(pp) {
+       return function(pp) {
+         if (Array.isArray(pp)) return xi(pp)
+       }(pp) || function(pp) {
+         if ("undefined" !== typeof Symbol && null != pp[Symbol.iterator] || null != pp["@@iterator"]) return Array.from(pp)
+       }(pp) || Si(pp) || function() {
+         throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
+       }()
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L374-L378` → after: `L590-L612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L590-L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/109.js#L590-L612) · [Before (L374-L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/109.js#L374-L378)

```diff
-       var ZC;
-       const [bC, nC] = (0, QC.useState)(null !== (ZC = wC.i.getItem(CC)) && void 0 !== ZC ? ZC : zC);
-       return [bC, zC => {
-         wC.i.setItem(CC, zC), nC(zC)
-       }]
+       return function(pp) {
+         if (Array.isArray(pp)) return pp
+       }(pp) || function(pp, ip) {
+         var cp = null == pp ? null : "undefined" !== typeof Symbol && pp[Symbol.iterator] || pp["@@iterator"];
+         if (null == cp) return;
+         var Op, op, Ip = [],
+           Sp = !0,
+           xp = !1;
+         try {
+           for (cp = cp.call(pp); !(Sp = (Op = cp.next()).done) && (Ip.push(Op.value), !ip || Ip.length !== ip); Sp = !0);
+         } catch (Lp) {
+           xp = !0, op = Lp
+         } finally {
+           try {
+             Sp || null == cp.return || cp.return()
+           } finally {
+ ... (7 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L380-L391` → after: `L614-L620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L614-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/109.js#L614-L620) · [Before (L380-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/109.js#L380-L391)

```diff
-   },
-   6660: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       c: () => wC,
-       e: () => bC
-     });
-     var QC = ZC(38);
-     const wC = "shaderPack";
-     async function bC() {
-       var CC;
-       let zC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-       return null !== (CC = await QC.g.getItem(wC, zC)) && void 0 !== CC ? CC : null
+ 
+     function Si(pp, ip) {
+       if (pp) {
+         if ("string" === typeof pp) return xi(pp, ip);
+         var cp = Object.prototype.toString.call(pp).slice(8, -1);
+         return "Object" === cp && pp.constructor && (cp = pp.constructor.name), "Map" === cp || "Set" === cp ? Array.from(pp) : "Arguments" === cp || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cp) ? xi(pp, ip) : void 0
+       }
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L436` → after: `L624-L626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L624-L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/109.js#L624-L626) · [Before (L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/109.js#L436)

```diff
-       return CC.slice(0, zC).replace(/[\uD800-\uDBFF]$/, "")
+       (null == ip || ip > pp.length) && (ip = pp.length);
+       for (var cp = 0, Op = new Array(ip); cp < ip; cp++) Op[cp] = pp[cp];
+       return Op
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L442-L445` → after: `L629-L637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L629-L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/109.js#L629-L637) · [Before (L442-L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/109.js#L442-L445)

```diff
-     function MC(CC) {
-       const zC = CC,
-         ZC = null === zC || void 0 === zC ? void 0 : zC.files;
-       return "number" === typeof(null === zC || void 0 === zC ? void 0 : zC.apiVersion) && "string" === typeof zC.name && (null === zC.author || "string" === typeof zC.author) && (void 0 === zC.keepCircleShadows || "boolean" === typeof zC.keepCircleShadows) && "object" === typeof … [truncated]
+     function Li(pp, ip) {
+       var cp = Object.keys(pp);
+       if (Object.getOwnPropertySymbols) {
+         var Op = Object.getOwnPropertySymbols(pp);
+         ip && (Op = Op.filter((function(ip) {
+           return Object.getOwnPropertyDescriptor(pp, ip).enumerable
+         }))), cp.push.apply(cp, Op)
+       }
+       return cp
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L451` → after: `L641-L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L641-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/109.js#L641-L649) · [Before (L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/109.js#L451)

```diff
-       return `https://bloxdhub.com/workshop/${encodeURIComponent(CC)}`
+       for (var ip = 1; ip < arguments.length; ip++) {
+         var cp = null != arguments[ip] ? arguments[ip] : {};
+         ip % 2 ? Li(Object(cp), !0).forEach((function(ip) {
+           Di(pp, ip, cp[ip])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : Li(Object(cp)).forEach((function(ip) {
+           Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
+         }))
+       }
+       return pp
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L456-L458` → after: `L652-L658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L652-L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/109.js#L652-L658) · [Before (L456-L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/109.js#L456-L458)

```diff
-     function RC(CC) {
-       var zC;
-       return CC === PC || null !== (zC = null === CC || void 0 === CC ? void 0 : CC.startsWith(GC)) && void 0 !== zC && zC
+     function Di(pp, ip, cp) {
+       return ip in pp ? Object.defineProperty(pp, ip, {
+         value: cp,
+         enumerable: !0,
+         configurable: !0,
+         writable: !0
+       }) : pp[ip] = cp, pp
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L462` → after: `L662-L674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L662-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/109.js#L662-L674) · [Before (L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/109.js#L462)

```diff
-       return `shaderPacks/${CC}/${zC}.json`
+       if (null == pp) return {};
+       var cp, Op, op = function(pp, ip) {
+         if (null == pp) return {};
+         var cp, Op, op = {},
+           Ip = Object.keys(pp);
+         for (Op = 0; Op < Ip.length; Op++) cp = Ip[Op], ip.indexOf(cp) >= 0 || (op[cp] = pp[cp]);
+         return op
+       }(pp, ip);
+       if (Object.getOwnPropertySymbols) {
+         var Ip = Object.getOwnPropertySymbols(pp);
+         for (Op = 0; Op < Ip.length; Op++) cp = Ip[Op], ip.indexOf(cp) >= 0 || Object.prototype.propertyIsEnumerable.call(pp, cp) && (op[cp] = pp[cp])
+       }
+       return op
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L465-L466` → after: `L753-L1076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L753-L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/109.js#L753-L1076) · [Before (L465-L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/109.js#L465-L466)

```diff
-     function xC(CC, zC, ZC, QC) {
-       return null === zC.renderId ? JC(CC, zC.baselineVersion, ZC, QC) : `${CC}/${function(CC,zC,ZC,QC){return`shaderPacks/${CC}/${zC}/${ZC}-${QC}.webp`}(zC.packId,zC.renderId,ZC,QC)}`
+     function Ui() {
+       var pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
+         ip = Yi(Yi({}, Wi), pp),
+         cp = ip.accept,
+         op = ip.disabled,
+         Ip = ip.getFilesFromEvent,
+         Sp = ip.maxSize,
+         xp = ip.minSize,
+         Lp = ip.multiple,
+         Yp = ip.maxFiles,
+         Dp = ip.onDragEnter,
+         Ap = ip.onDragLeave,
+         Pp = ip.onDragOver,
+         Wp = ip.onDrop,
+         yp = ip.onDropAccepted,
+         Up = ip.onDropRejected,
+ ... (308 more added lines; see GitHub link above)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L469-L470` → after: `L1079-L1112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R1079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L1079-L1112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/109.js#L1079-L1112) · [Before (L469-L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/109.js#L469-L470)

```diff
-     function JC(CC, zC, ZC, QC) {
-       return `${CC}/${function(CC,zC,ZC){return`shaderPacks/baseline/${CC}/${zC}-${ZC}.webp`}(zC,ZC,QC)}`
+     function wi(pp, ip) {
+       switch (ip.type) {
+         case "focus":
+           return Yi(Yi({}, pp), {}, {
+             lE: !0
+           });
+         case "blur":
+           return Yi(Yi({}, pp), {}, {
+             lE: !1
+           });
+         case "openDialog":
+           return Yi(Yi({}, yi), {}, {
+             isFileDialogActive: !0
+           });
+         case "closeDialog":
+           return Yi(Yi({}, pp), {}, {
+ ... (18 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/110.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/110.js` (42 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae)

#### 1. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L4-L101` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/110.js#L4) · [Before (L4-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/110.js#L4-L101)

```diff
-   8893: (CC, zC, ZC) => {
-     ZC.r(zC), ZC.d(zC, {
-       default: () => pz
-     });
-     var QC = ZC(1463),
-       wC = ZC(20),
-       bC = ZC(4591),
-       nC = ZC(48),
-       fC = ZC(1383);
-     var oC = ZC(1840),
-       qC = ZC(1453),
-       FC = ZC(1307),
-       WC = ZC(1143),
-       NC = ZC(134),
-       MC = ZC(184),
-       gC = ZC(970),
- ... (82 more removed lines; see GitHub link above)
+   5127: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L103-L133` → after: `L6-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L6-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/110.js#L6-L10) · [Before (L103-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/110.js#L103-L133)

```diff
-       let {
-         onApply: zC,
-         onSkip: ZC
-       } = CC;
-       const {
-         t: QC
-       } = (0, WC.y)();
-       return (0, nC.useEffect)((() => {
-         jC.h.skipPlayWait()
-       }), []), (0, yC.jsx)(TC.i, {
-         icon: "download",
-         title: "customTexturePack:downloadTitle",
-         subtitle: (0, yC.jsxs)("div", {
-           className: "CustomTexturePackDownloaderSubtitleText",
-           children: [QC("customTexturePack:downloadPrompt"), (0, yC.jsx)("div", {
-             className: "CustomTexturePackDownloaderWarningText",
- ... (15 more removed lines; see GitHub link above)
+       return Op = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
+         return typeof pp
+       } : function(pp) {
+         return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
+       }, Op(pp)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L135-L152` → after: `L12-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L12-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/110.js#L12-L35) · [Before (L135-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/110.js#L135-L152)

```diff
-     async function UC() {
-       let CC = !1;
-       const zC = FC.NotificationProvider.showCustomPopup({
-         body: zC => (0, yC.jsx)(LC, {
-           onApply: () => {
-             CC = !0, zC()
-           },
-           onSkip: zC
-         }),
-         disableExitButton: !0,
-         disablePressBackgroundToClose: !0
-       });
-       return await zC.getResult(), CC
-     }
-     let BC = {
-       wanted: !1
- ... (2 more removed lines; see GitHub link above)
+     Object.defineProperty(ip, "__esModule", {
+       value: !0
+     }), ip.default = void 0;
+     var op = Ap(cp(1049)),
+       Ip = function(pp, ip) {
+         if (!ip && pp && pp.__esModule) return pp;
+         if (null === pp || "object" !== Op(pp) && "function" !== typeof pp) return {
+           default: pp
+         };
+         var cp = Dp(ip);
+         if (cp && cp.has(pp)) return cp.get(pp);
+         var op = {},
+           Ip = Object.defineProperty && Object.getOwnPropertyDescriptor;
+         for (var Sp in pp)
+           if ("default" !== Sp && Object.prototype.hasOwnProperty.call(pp, Sp)) {
+             var xp = Ip ? Object.getOwnPropertyDescriptor(pp, Sp) : null;
+ ... (8 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L155` → after: `L38-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L38-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/110.js#L38-L43) · [Before (L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/110.js#L155)

```diff
-       CC.setGamePackConfirm(UC), OC = CC
+       if ("function" !== typeof WeakMap) return null;
+       var ip = new WeakMap,
+         cp = new WeakMap;
+       return (Dp = function(pp) {
+         return pp ? cp : ip
+       })(pp)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L160-L168` → after: `L47-L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L47-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/110.js#L47-L48) · [Before (L160-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/110.js#L160-L168)

```diff
-       let {
-         schematicId: zC,
-         texturePackKey: ZC,
-         onClose: QC
-       } = CC;
-       const [wC, bC] = (0, nC.useState)("prompt"), [fC, oC] = (0, nC.useState)(null), qC = (0, VC.e)();
- 
-       function FC() {
-         QC()
+       return pp && pp.__esModule ? pp : {
+         default: pp
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L170-L187` → after: `L50-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L50-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/110.js#L50-L73) · [Before (L170-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/110.js#L170-L187)

```diff
-       return "prompt" === wC ? (0, yC.jsx)(LC, {
-         onApply: async function() {
-           bC("downloading");
-           try {
-             const CC = await async function(CC, zC) {
-               const ZC = await (0, tC.d)(zC);
-               if (ZC) return {
-                 pack: ZC,
-                 key: zC
-               };
-               const QC = await RC.userContextManager.getCurrentUserContext(),
-                 wC = (await GC.d.getGame(QC, CC, !0)).customTexturePackKey;
-               if (!wC) return null;
-               const bC = await (0, tC.d)(wC);
-               if (!bC) throw new Error("The texture pack could not be found");
-               return {
- ... (2 more removed lines; see GitHub link above)
+     }
+ 
+     function Pp(pp, ip) {
+       var cp = "undefined" !== typeof Symbol && pp[Symbol.iterator] || pp["@@iterator"];
+       if (!cp) {
+         if (Array.isArray(pp) || (cp = function(pp, ip) {
+             if (!pp) return;
+             if ("string" === typeof pp) return Wp(pp, ip);
+             var cp = Object.prototype.toString.call(pp).slice(8, -1);
+             "Object" === cp && pp.constructor && (cp = pp.constructor.name);
+             if ("Map" === cp || "Set" === cp) return Array.from(pp);
+             if ("Arguments" === cp || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cp)) return Wp(pp, ip)
+           }(pp)) || ip && pp && "number" === typeof pp.length) {
+           cp && (pp = cp);
+           var Op = 0,
+             op = function() {};
+ ... (8 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L189-L195` → after: `L75-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L75-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/110.js#L75-L79) · [Before (L189-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/110.js#L189-L195)

```diff
-             }(zC, ZC);
-             if (!qC.current) return;
-             if (!CC) return void QC();
-             if ((0, rC.h)(CC.pack)) return void bC("refused");
-             sC.c.setFromJson(CC.pack, "customGame"), await sC.c.saveTemporaryTexturePack(CC.key), qC.current && (0, hC.reloadBloxd)()
-           } catch (CC) {
-             oC(CC instanceof Error ? CC.message : String(CC)), bC("error")
+             },
+             e: function(pp) {
+               throw pp
+             },
+             f: op
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L198-L216` → after: `L90-L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L90-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/110.js#L90-L92) · [Before (L198-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/110.js#L198-L216)

```diff
-         onSkip: FC
-       }) : "downloading" === wC ? (0, yC.jsx)(TC.i, {
-         icon: "download",
-         title: "customTexturePack:downloading",
-         subtitle: (0, yC.jsx)("div", {
-           className: "CustomTexturePackDownloaderLogoLoaderContainer",
-           children: (0, yC.jsx)(aC.d, {
-             showFace: !0
-           })
-         })
-       }) : "error" === wC ? (0, yC.jsx)(TC.i, {
-         icon: "face-worried",
-         title: "customTexturePack:errorTitle",
-         subtitle: fC,
-         confirm: {
-           text: "customTexturePack:refreshPage",
- ... (3 more removed lines; see GitHub link above)
+         n: function() {
+           var pp = cp.next();
+           return Sp = pp.done, pp
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L218-L228` → after: `L94-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L94-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/110.js#L94-L102) · [Before (L218-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/110.js#L218-L228)

```diff
-         cancel: {
-           text: "customTexturePack:skip",
-           onClick: FC
-         }
-       }) : "refused" === wC ? (0, yC.jsx)(TC.i, {
-         icon: "face-worried",
-         title: "customTexturePack:cantApplyTitle",
-         subtitle: "customTexturePack:gamePackHasExternalUrls",
-         confirm: {
-           text: "general:continue",
-           onClick: FC
+         e: function(pp) {
+           xp = !0, Ip = pp
+         },
+         f: function() {
+           try {
+             Sp || null == cp.return || cp.return()
+           } finally {
+             if (xp) throw Ip
+           }
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L230` → after: `L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/110.js#L104) · [Before (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/110.js#L230)

```diff
-       }) : null
+       }
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L244-L246` → after: `L107-L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L107-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/110.js#L107-L110) · [Before (L244-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/110.js#L244-L246)

```diff
-     function Nz() {
-       const CC = wC.b.get("clientEscMenuOptions");
-       oC.gameBridge.send("setLookSensitivity", wC.b.get("isTouchScreen") ? (0, Wz.o)(CC) : CC.mouseSensitivity)
+     function Wp(pp, ip) {
+       (null == ip || ip > pp.length) && (ip = pp.length);
+       for (var cp = 0, Op = new Array(ip); cp < ip; cp++) Op[cp] = pp[cp];
+       return Op
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L249-L260` → after: `L113-L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L113-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/110.js#L113-L116) · [Before (L249-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/110.js#L249-L260)

```diff
-     function Mz(CC) {
-       const zC = CC.asError();
-       if (zC.debugResult.wZ || (0, qz.c)(zC.debugResult.error)) return;
-       console.log("Failed to join lobby:", zC.message);
-       const ZC = "timedOut" === zC.debugResult.gameServerUnreachable;
-       (0, wz.reportClientError)("matchmake_failed", zC.message, ZC ? "CONNECT_TO_GAME_SERVER_TIMEOUT" : NC.l[zC.code]);
-       const {
-         error: QC
-       } = zC.debugResult;
-       if (QC instanceof lC.l && "default" !== QC.packSource) {
-         const CC = (0, bz.d)("js", "game" === QC.packSource ? "game" : "page", (0, bz.g)(QC));
-         (0, wz.reportClientError)("texture_pack", QC, CC)
+     function yp(pp, ip) {
+       for (var cp = 0; cp < ip.length; cp++) {
+         var Op = ip[cp];
+         Op.enumerable = Op.enumerable || !1, Op.configurable = !0, "value" in Op && (Op.writable = !0), Object.defineProperty(pp, Op.key, Op)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L264-L267` → after: `L120-L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L120-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/110.js#L120-L123) · [Before (L264-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/110.js#L264-L267)

```diff
-     function gz(CC) {
-       if (null === CC || void 0 === CC || !CC.isError()) return !1;
-       const zC = CC.asError();
-       return zC.code === NC.l.REQUEST_TO_MATCHMAKING && !(0, qz.c)(zC.debugResult.error)
+     function Up(pp, ip) {
+       return Up = Object.setPrototypeOf || function(pp, ip) {
+         return pp.__proto__ = ip, pp
+       }, Up(pp, ip)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L269-L307` → after: `L125-L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L125-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/110.js#L125-L130) · [Before (L269-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/110.js#L269-L307)

```diff
-     async function Sz(CC, zC, ZC) {
-       const QC = (0, fz.H)(zC);
-       async function nC(CC, zC, ZC, QC) {
-         var nC;
-         if (QC.aborted) return null;
-         null === wC.b.get("gameEntrySource") && (0, wC.g)("directPlayUrl"), Fz.z && (0, DC.h)().catch((() => {})), wC.b.set({
-           gameState: "findingLobby"
-         }), vC.o.bp("loadingScreenState", "loadingPage:findingLobby");
-         const fC = await RC.userContextManager.getCurrentUserContext();
-         oC.gameBridge.send("setRequestedGame", {
-           gameNameWithVariation: zC,
-           discordContext: CC instanceof uC.d ? CC.getSerialisableParams() : null
-         }), (0, Qz.h)(null !== (nC = jC.h.playInputAt()) && void 0 !== nC ? nC : performance.now());
-         const qC = await async function(CC, zC, ZC, QC, wC) {
-           try {
-             await bC.reqLibsLoadedPromise
- ... (23 more removed lines; see GitHub link above)
+ 
+     function wp(pp) {
+       var ip = function() {
+         if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
+         if (Reflect.construct.sham) return !1;
+         if ("function" === typeof Proxy) return !0;
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L309-L313` → after: `L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/110.js#L132) · [Before (L309-L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/110.js#L309-L313)

```diff
-           var bC;
-           let fC = CC,
-             oC = await nC(fC, zC, ZC, wC);
-           for (let CC = 0; QC && CC < fz.i && (gz(oC) && await (0, fz.J)((0, fz.r)(CC), wC)); CC++) fC = (0, fz.u)(fC, CC + 1, "string" === typeof fC && (0, pC.U)(fC)), oC = await nC(fC, zC, ZC, wC);
-           return null !== (bC = oC) && void 0 !== bC && bC.isError() && Mz(oC), oC
+           return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L315-L318` → after: `L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/110.js#L134) · [Before (L315-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/110.js#L315-L318)

```diff
-           if ((0, wz.reportClientError)("matchmake_failed", fC, "unexpected"), oC.gameBridge.send("leaveGame", {
-               reloadPath: wC.aborted ? null : "/"
-             }), wC.aborted) return null;
-           throw fC
+           return !1
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L320-L329` → after: `L136-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L136-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/110.js#L136-L148) · [Before (L320-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/110.js#L320-L329)

```diff
-       }), (async CC => {
-         var ZC;
-         if (QC) return;
-         const wC = (0, YC.x)();
-         null !== wC && (await wC, CC.aborted) || (null !== (ZC = cC.d[zC]) && void 0 !== ZC && ZC.playAdBeforeMatchmaking ? (jC.h.skipPlayWait(), await new Promise((CC => {
-           (0, YC.X)((() => {
-             CC(!0)
-           }), "video_start")
-         }))) : (0, YC.X)((() => {}), "video_start"))
-       }))
+       }();
+       return function() {
+         var cp, op = tp(pp);
+         if (ip) {
+           var Ip = tp(this).constructor;
+           cp = Reflect.construct(op, arguments, Ip)
+         } else cp = op.apply(this, arguments);
+         return function(pp, ip) {
+           if (ip && ("object" === Op(ip) || "function" === typeof ip)) return ip;
+           if (void 0 !== ip) throw new TypeError("Derived constructors may only return object or undefined");
+           return vp(pp)
+         }(this, cp)
+       }
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L332-L357` → after: `L151-L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L151-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/110.js#L151-L183) · [Before (L332-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/110.js#L332-L357)

```diff
-     function pz() {
-       const {
-         t: CC
-       } = (0, WC.y)(), zC = (0, qC.useNavigatePreserveSearch)(), ZC = (0, QC.v)(), MC = (0, QC.C)(), SC = (0, nC.useRef)({
-         t: CC,
-         navigate: zC
-       });
-       SC.current = {
-         t: CC,
-         navigate: zC
-       };
-       const AC = (0, nC.useRef)("");
-       AC.current = ZC.pathname + ZC.search;
-       const {
-         gameState: xC,
-         clientEscMenuOptions: IC
- ... (10 more removed lines; see GitHub link above)
+     function vp(pp) {
+       if (void 0 === pp) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
+       return pp
+     }
+ 
+     function tp(pp) {
+       return tp = Object.setPrototypeOf ? Object.getPrototypeOf : function(pp) {
+         return pp.__proto__ || Object.getPrototypeOf(pp)
+       }, tp(pp)
+     }
+ 
+     function Hp(pp, ip, cp) {
+       return ip in pp ? Object.defineProperty(pp, ip, {
+         value: cp,
+         enumerable: !0,
+         configurable: !0,
+ ... (17 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L359-L411` → after: `L185-L236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L185-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/110.js#L185-L236) · [Before (L359-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/110.js#L359-L411)

```diff
-       }), [cC]), (0, nC.useEffect)((() => {
-         var CC;
-         (0, bC.needGameClientNow)();
-         const {
-           t: zC,
-           navigate: QC
-         } = SC.current, nC = (0, zz.b)(MC, ZC.search);
-         if (MC.lobbyName && !new URLSearchParams(ZC.search).has("lobby")) return void QC((0, XC.b)(nC.gameNameWithVariation, nC.lobbyName), {
-           replace: !0
-         });
-         let fC = Promise.resolve({
-           shouldMatchmake: !0
-         });
-         if ("/play/discord-custom-lobby" === ZC.pathname) {
-           const CC = wC.b.get("discordContext");
-           if (!CC) return void QC("/");
- ... (37 more removed lines; see GitHub link above)
+       },
+       ep = function(pp) {
+         ! function(pp, ip) {
+           if ("function" !== typeof ip && null !== ip) throw new TypeError("Super expression must either be null or a function");
+           Object.defineProperty(pp, "prototype", {
+             value: Object.create(ip && ip.prototype, {
+               constructor: {
+                 value: pp,
+                 writable: !0,
+                 configurable: !0
+               }
+             }),
+             writable: !1
+           }), ip && Up(pp, ip)
+         }(Sp, pp);
+         var ip, cp, Op, Ip = wp(Sp);
+ ... (36 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L413-L429` → after: `L238-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L238-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/110.js#L238-L318) · [Before (L413-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/110.js#L413-L429)

```diff
-             const wC = QC.customTexturePackKey;
-             if (!wC) return void(sC.c.isUsingTemporaryTexturePack() && ((0, hC.reloadBloxd)(), await new Promise((() => {}))));
-             if (sC.c.isUsingTemporaryTexturePack() && sC.c.getTemporaryTexturePackSource() === wC) return;
-             const bC = FC.NotificationProvider.showCustomPopup({
-               body: CC => (0, yC.jsx)(Cz, {
-                 schematicId: ZC,
-                 texturePackKey: wC,
-                 onClose: CC
-               }),
-               disableExitButton: !0,
-               disablePressBackgroundToClose: !0
-             });
-             await bC.getResult()
-           }(dC), zC = fC;
-           fC = CC.catch((CC => {
-             console.error("Failed to check for custom texture pack", CC)
- ... (1 more removed lines; see GitHub link above)
+           })), Hp(vp(cp), "handleEnd", (function(pp) {
+             var ip = cp.props.onChangeComplete;
+             cp.setState({
+               active: !1
+             }, (function() {
+               ip && ip(pp)
+             })), document.removeEventListener("mousemove", cp.handleDrag), document.removeEventListener("mouseup", cp.handleEnd)
+           })), Hp(vp(cp), "handleKeyDown", (function(pp) {
+             pp.preventDefault();
+             var ip, Op = pp.keyCode,
+               op = cp.props,
+               Ip = op.value,
+               Sp = op.min,
+               xp = op.max,
+               Lp = op.step,
+               Yp = op.onChange;
+ ... (65 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L431-L489` → after: `L320-L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L320-L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/110.js#L320-L367) · [Before (L431-L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/110.js#L431-L489)

```diff
-         const cC = null !== vC.current;
-         vC.current = null, (0, nz.f)(null);
-         const uC = () => {
-           xC ? (0, qC.navigateToHomePage)() : (eC.current = cC, QC(-1))
-         };
-         let rC = !1;
-         const TC = ZC.pathname + ZC.search,
-           aC = () => !rC && AC.current === TC;
-         return fC.then((CC => {
-           let {
-             shouldMatchmake: ZC,
-             discordContext: bC
-           } = CC;
-           aC() && (ZC ? Sz(null !== bC && void 0 !== bC ? bC : nC.lobbyName, bC ? "classic" : nC.gameNameWithVariation, nC.directJoinVmUrl).then((CC => {
-             if (null !== CC && aC())
-               if (CC.isError()) {
- ... (43 more removed lines; see GitHub link above)
+         return ip = Sp, (cp = [{
+           key: "componentDidMount",
+           value: function() {
+             this.handleUpdate(), new xp.default(this.handleUpdate).observe(this.slider)
+           }
+         }, {
+           key: "render",
+           value: function() {
+             var pp = this,
+               ip = this.props,
+               cp = ip.value,
+               Op = ip.orientation,
+               Ip = ip.className,
+               Sp = ip.tooltip,
+               xp = ip.reverse,
+               Lp = ip.labels,
+ ... (32 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L491-L512` → after: `L369-L372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L369-L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/110.js#L369-L372) · [Before (L491-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/110.js#L491-L512)

```diff
-                 gC.then((CC => {
-                   if (CC) {
-                     (0, wC.g)(qC);
-                     const CC = (0, XC.b)(nC.gameNameWithVariation, nC.lobbyName);
-                     "low" === fC ? QC(CC) : (0, hC.reloadBloxd)(CC)
-                   }
-                 })), oC.gameBridge.send("leaveGame", {
-                   reloadPath: "/"
-                 }), uC()
-               } else {
-                 const {
-                   gameNameWithVariation: zC,
-                   lobbyName: ZC
-                 } = CC.getValue();
-                 vC.current = {
-                   gameNameWithVariation: zC,
- ... (6 more removed lines; see GitHub link above)
+               } catch (Qp) {
+                 Mp.e(Qp)
+               } finally {
+                 Mp.f()
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L514-L523` → after: `L374-L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L374-L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/110.js#L374-L406) · [Before (L514-L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/110.js#L514-L523)

```diff
-           })).catch((CC => {
-             if (!aC()) return;
-             FC.NotificationProvider.showPromptPopup({
-               icon: "face-dizzy",
-               title: "Unexpected Error",
-               subtitle: (0, yC.jsxs)(yC.Fragment, {
-                 children: [zC("homePage:pleaseCopyError"), (0, yC.jsx)("div", {
-                   style: {
-                     fontSize: "0.9rem",
-                     paddingTop: "1rem"
+             }
+             return (0, Yp.jsxs)("div", {
+               ref: function(ip) {
+                 pp.slider = ip
+               },
+               className: (0, op.default)("rangeslider", "rangeslider-".concat(Op), {
+                 "rangeslider-reverse": xp
+               }, Ip),
+               onMouseDown: this.handleDrag,
+               onMouseUp: this.handleEnd,
+               onTouchStart: this.handleStart,
+               onTouchEnd: this.handleEnd,
+               "aria-valuemin": Dp,
+               "aria-valuemax": Ap,
+               "aria-valuenow": cp,
+               "aria-orientation": Op,
+ ... (17 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L525-L526` → after: `L408-L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L408-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/110.js#L408-L410) · [Before (L525-L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/110.js#L525-L526)

```diff
-                   children: (0, yC.jsx)(mC.e, {
-                     errorString: CC.stack
+                   className: "rangeslider__handle-tooltip",
+                   children: (0, Yp.jsx)("span", {
+                     children: this.handleFormat(cp)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L529-L573` → after: `L416-L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L416-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/110.js#L416-L446) · [Before (L529-L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/110.js#L529-L573)

```diff
-               }),
-               confirmText: zC("general:tryAgain"),
-               cancelText: zC("general:cancel")
-             }).getResult().then((CC => {
-               !0 === CC && (0, hC.reloadBloxd)((0, XC.b)(nC.gameNameWithVariation, nC.lobbyName))
-             })), uC()
-           })) : QC(-1))
-         })), () => {
-           rC = !0
-         }
-       }), [MC, ZC.search, ZC.pathname]), (0, nC.useEffect)((() => {
-         IC.disableFullscreen && (0, dC.h)() ? (0, dC.n)() : !IC.disableFullscreen && (0, dC.l)() && (0, dC.x)()
-       }), [xC, IC]), (0, nC.useEffect)((() => {
-         "inGame" === xC && Nz()
-       }), [xC, IC]), (0, nC.useEffect)((() => {
-         "inGame" !== xC && wC.b.set({
- ... (29 more removed lines; see GitHub link above)
+               }), Lp && this.renderLabels(mp)]
+             })
+           }
+         }]) && yp(ip.prototype, cp), Op && yp(ip, Op), Object.defineProperty(ip, "prototype", {
+           writable: !1
+         }), Sp
+       }(Ip.Component);
+     Hp(ep, "propTypes", {
+       min: Sp.default.number,
+       max: Sp.default.number,
+       step: Sp.default.number,
+       value: Sp.default.number,
+       orientation: Sp.default.string,
+       tooltip: Sp.default.bool,
+       reverse: Sp.default.bool,
+       labels: Sp.default.object,
+ ... (15 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L575-L584` → after: `L448-L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L448-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/110.js#L448-L465) · [Before (L575-L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/110.js#L575-L584)

```diff
-     var QC = ZC(1149);
-     async function wC(CC) {
-       const zC = await fetch(`${QC.clientSideServerUrls.s3Url}/${CC}`, {
-         headers: {
-           Accept: "application/json"
-         }
-       });
-       if (404 === zC.status || 403 === zC.status) return null;
-       if (!zC.ok) throw new Error(`Failed to download the texture pack (${zC.status})`);
-       return await zC.json()
+     var jp = ep;
+     ip.default = jp
+   },
+   5122: (pp, ip, cp) => {
+     var Op;
+     ip.b = void 0;
+     var op = ((Op = cp(5127)) && Op.__esModule ? Op : {
+       default: Op
+     }).default;
+     ip.b = op
+   },
+   5137: (pp, ip) => {
+     Object.defineProperty(ip, "__esModule", {
+       value: !0
+     }), ip.capitalize = function(pp) {
+       return pp.charAt(0).toUpperCase() + pp.substr(1)
+ ... (2 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L587-L593` → after: `L468-L469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L468-L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/110.js#L468-L469) · [Before (L587-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/110.js#L587-L593)

```diff
-   8912: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       b: () => nC
-     });
-     var QC = ZC(1284),
-       wC = ZC(1169),
-       bC = ZC(600);
+   5085: (pp, ip, cp) => {
+     var Op = cp(5088);
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L595-L607` → after: `L471-L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L471-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/110.js#L471-L478) · [Before (L595-L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/110.js#L595-L607)

```diff
-     function nC(CC) {
-       return CC = function(CC, zC) {
-         var ZC;
-         const QC = new URLSearchParams(zC),
-           wC = QC.get("lobby"),
-           bC = QC.get("vm"),
-           nC = null !== (ZC = wC) && void 0 !== ZC ? ZC : CC.lobbyName,
-           fC = null !== bC && void 0 !== bC ? bC : CC.directJoinVmUrl;
-         if (nC === CC.lobbyName && fC === CC.directJoinVmUrl) return CC;
-         return {
-           ...CC,
-           lobbyName: nC,
-           directJoinVmUrl: fC
+     function op() {}
+ 
+     function Ip() {}
+     Ip.resetWarningCache = op, pp.exports = function() {
+       function pp(pp, ip, cp, op, Ip, Sp) {
+         if (Sp !== Op) {
+           var xp = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
+           throw xp.name = "Invariant Violation", xp
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L609-L612` → after: `L480-L482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L480-L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/110.js#L480-L482) · [Before (L609-L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/110.js#L609-L612)

```diff
-       }(CC, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), CC = function(CC) {
-         if ((0, bC.H)(CC.directJoinVmUrl)) return CC;
-         const zC = (0, wC.hb)(CC.directJoinVmUrl);
-         null === zC && (CC.directJoinVmUrl = void 0);
+       }
+ 
+       function ip() {
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L614-L617` → after: `L484-L509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L484-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/110.js#L484-L509) · [Before (L614-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/110.js#L614-L617)

```diff
-       }(CC = function(CC) {
-         if ((0, bC.H)(CC.gameNameWithVariation)) return CC;
-         return CC.gameNameWithVariation = (0, QC.k)(CC.gameNameWithVariation), CC
-       }(CC))
+       }
+       pp.isRequired = pp;
+       var cp = {
+         array: pp,
+         bigint: pp,
+         bool: pp,
+         func: pp,
+         number: pp,
+         object: pp,
+         string: pp,
+         symbol: pp,
+         any: pp,
+         arrayOf: ip,
+         element: pp,
+         elementType: pp,
+         instanceOf: ip,
+ ... (10 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L620-L633` → after: `L512-L516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L512-L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/110.js#L512-L516) · [Before (L620-L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/110.js#L620-L633)

```diff
-   8907: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       d: () => bC,
-       g: () => wC
-     });
-     let QC = !1;
- 
-     function wC() {
-       QC = !0
-     }
- 
-     function bC() {
-       return QC
-     }
+   5081: (pp, ip, cp) => {
+     pp.exports = cp(5085)()
+   },
+   5088: pp => {
+     pp.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L635-L639` → after: `L518-L520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L518-L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/110.js#L518-L520) · [Before (L635-L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/110.js#L635-L639)

```diff
-   8904: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       d: () => MC,
-       h: () => NC,
-       j: () => gC
+   5129: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       default: () => mp
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L641-L647` → after: `L522-L523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L522-L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/110.js#L522-L523) · [Before (L641-L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/110.js#L641-L647)

```diff
-     var QC = ZC(3137),
-       wC = ZC(2224),
-       bC = ZC(2050),
-       nC = ZC(4582),
-       fC = ZC(3464),
-       oC = ZC(8907);
-     let qC = null;
+     var Op = function() {
+         if ("undefined" !== typeof Map) return Map;
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L649-L655` → after: `L525-L579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L525-L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/110.js#L525-L579) · [Before (L649-L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/110.js#L649-L655)

```diff
-     function FC() {
-       return Promise.all([ZC.e(74), ZC.e(77), ZC.e(89), ZC.e(211), ZC.e(76), ZC.e(210), ZC.e(134), ZC.e(196), ZC.e(139), ZC.e(87), ZC.e(218), ZC.e(63)]).then((() => ZC(40510)))
-     }
- 
-     function WC() {
-       Promise.all([ZC.e(72), ZC.e(75), ZC.e(74), ZC.e(73), ZC.e(89), ZC.e(86), ZC.e(269), ZC.e(189), ZC.e(223), ZC.e(247), ZC.e(218), ZC.e(46)]).then((() => ZC(40832))).catch((() => {}))
-     }
+         function pp(pp, ip) {
+           var cp = -1;
+           return pp.some((function(pp, Op) {
+             return pp[0] === ip && (cp = Op, !0)
+           })), cp
+         }
+         return function() {
+           function ip() {
+             this.__entries__ = []
+           }
+           return Object.defineProperty(ip.prototype, "size", {
+             get: function() {
+               return this.__entries__.length
+             },
+             enumerable: !0,
+             configurable: !0
+ ... (39 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L657-L668` → after: `L581-L583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L581-L583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/110.js#L581-L583) · [Before (L657-L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/110.js#L657-L668)

```diff
-     function NC() {
-       return nC.e.cancelDownloadForJoin(), (0, fC.b)(), (0, wC.f)(), (0, oC.g)(), (0, bC.k)(), WC(), Promise.all([ZC.e(77), ZC.e(89), ZC.e(211), ZC.e(210), ZC.e(134), ZC.e(139), ZC.e(58)]).then((() => ZC(40885))).then((CC => {
-         let {
-           startJoinLoad: zC
-         } = CC;
-         zC()
-       }), (() => {})), qC ??= FC().then((CC => (CC.startWasmPlay(), CC.followPageUiPack((CC => {
-         QC.c.showGamePack(CC)
-       })), CC)), (CC => {
-         throw qC = null, CC
-       })), qC
-     }
+             function Ip() {
+               cp && (cp = !1, pp()), Op && Lp()
+             }
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L670-L672` → after: `L585-L587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L585-L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/110.js#L585-L587) · [Before (L670-L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/110.js#L670-L672)

```diff
-     function MC() {
-       return WC(), ZC.e(271).then((() => ZC(40888))).catch((() => {})), FC().then((() => {}))
-     }
+             function xp() {
+               Sp(Ip)
+             }
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L674-L689` → after: `L589-L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L589-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/110.js#L589-L649) · [Before (L674-L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/110.js#L674-L689)

```diff
-     function gC() {
-       return FC().then((CC => {
-         CC.startWasmPreviews(), CC.prefetchWasmPreviews()
-       }))
-     }
-   },
-   8897: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       b: () => bC,
-       e: () => nC,
-       i: () => fC,
-       m: () => qC,
-       n: () => oC
-     });
-     var QC = ZC(184),
-       wC = ZC(4562);
+             function Lp() {
+               var pp = Date.now();
+               if (cp) {
+                 if (pp - op < 2) return;
+                 Op = !0
+               } else cp = !0, Op = !1, setTimeout(xp, ip);
+               op = pp
+             }
+             return Lp
+           }(this.refresh.bind(this), 20)
+         }
+         return pp.prototype.addObserver = function(pp) {
+           ~this.observers_.indexOf(pp) || this.observers_.push(pp), this.connected_ || this.connect_()
+         }, pp.prototype.removeObserver = function(pp) {
+           var ip = this.observers_,
+             cp = ip.indexOf(pp);
+ ... (45 more added lines; see GitHub link above)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L692` → after: `L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/110.js#L652) · [Before (L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/110.js#L692)

```diff
-       return nC(CC) === QC.e.gameOrPluginOnPlayerAuthRejected.code
+       return parseFloat(pp) || 0
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L696` → after: `L656-L659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L656-L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/110.js#L656-L659) · [Before (L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/110.js#L696)

```diff
-       return "object" === typeof CC && null !== CC ? CC.code : void 0
+       for (var ip = [], cp = 1; cp < arguments.length; cp++) ip[cp - 1] = arguments[cp];
+       return ip.reduce((function(ip, cp) {
+         return ip + Wp(pp["border-" + cp + "-width"])
+       }), 0)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L700-L701` → after: `L663-L686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L663-L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/110.js#L663-L686) · [Before (L700-L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/110.js#L700-L701)

```diff
-       var zC;
-       return null !== (zC = Object.keys(wC.c).find((zC => wC.c[zC] === CC))) && void 0 !== zC ? zC : null
+       var ip = pp.clientWidth,
+         cp = pp.clientHeight;
+       if (!ip && !cp) return Pp;
+       var Op = Ap(pp).getComputedStyle(pp),
+         op = function(pp) {
+           for (var ip = {}, cp = 0, Op = ["top", "right", "bottom", "left"]; cp < Op.length; cp++) {
+             var op = Op[cp],
+               Ip = pp["padding-" + op];
+             ip[op] = Wp(Ip)
+           }
+           return ip
+         }(Op),
+         Ip = op.left + op.right,
+         Sp = op.top + op.bottom,
+         xp = Wp(Op.width),
+         Lp = Wp(Op.height);
+ ... (8 more added lines; see GitHub link above)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L705` → after: `L695-L698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L695-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/110.js#L695-L698) · [Before (L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/110.js#L705)

```diff
-       return "notWhitelisted" === CC ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
+       return op ? wp(pp) ? function(pp) {
+         var ip = pp.getBBox();
+         return tp(0, 0, ip.width, ip.height)
+       }(pp) : Up(pp) : Pp
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L707-L711` → after: `L700-L707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L700-L707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/110.js#L700-L707) · [Before (L707-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/110.js#L707-L711)

```diff
-     const qC = {
-       private: "customLobby:cantJoinPrivate",
-       notWhitelisted: "customLobby:cantJoinNotWhitelisted",
-       banned: "customLobby:cantJoinBanned",
-       adminLocked: "customLobby:cantJoinAdminLocked"
+ 
+     function tp(pp, ip, cp, Op) {
+       return {
+         x: pp,
+         y: ip,
+         width: cp,
+         height: Op
+       }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/111.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/111.js` (38 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4)

#### 1. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/111.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/111.js#L2)

```diff
- export const ids = [111];
+ export const ids = [111, 402];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L4-L21` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/111.js#L4-L5) · [Before (L4-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/111.js#L4-L21)

```diff
-   4942: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       b: () => gC,
-       e: () => RC,
-       f: () => SC,
-       h: () => GC
-     });
-     var QC = ZC(48),
-       wC = ZC(4947),
-       bC = ZC(4300),
-       nC = ZC(1321),
-       fC = ZC(4971),
-       oC = ZC(1002),
-       qC = ZC.n(oC),
-       FC = ZC(1307),
-       WC = ZC(1645),
- ... (2 more removed lines; see GitHub link above)
+   5085: (pp, ip, cp) => {
+     var Op = cp(5088);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L23-L68` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/111.js#L7) · [Before (L23-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/111.js#L23-L68)

```diff
-     function gC(CC) {
-       let {
-         label: zC,
-         onClick: ZC,
-         checked: QC,
-         circleInfoText: wC,
-         className: fC,
-         disabled: oC,
-         note: FC
-       } = CC;
-       return (0, MC.jsxs)("div", {
-         "aria-disabled": oC || void 0,
-         "data-pad-focusable": !0,
-         className: qC()("SettingBox CheckboxContainer", {
-           [fC]: fC,
-           SettingBoxDisabled: oC
- ... (30 more removed lines; see GitHub link above)
+     function op() {}
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L70-L179` → after: `L9-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L9-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/111.js#L9-L14) · [Before (L70-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/111.js#L70-L179)

```diff
-     function SC(CC) {
-       let {
-         name: zC,
-         onChange: ZC,
-         min: wC,
-         max: bC,
-         step: fC,
-         initValue: oC,
-         circleInfoText: FC,
-         format: WC,
-         className: NC,
-         padStep: gC,
-         disabled: SC = !1,
-         selectableMax: pC,
-         cappedNote: GC,
-         onChangeComplete: RC
- ... (94 more removed lines; see GitHub link above)
+     function Ip() {}
+     Ip.resetWarningCache = op, pp.exports = function() {
+       function pp(pp, ip, cp, op, Ip, Sp) {
+         if (Sp !== Op) {
+           var xp = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
+           throw xp.name = "Invariant Violation", xp
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L181-L234` → after: `L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/111.js#L16) · [Before (L181-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/111.js#L181-L234)

```diff
-       }), []);
-       const KC = (0, QC.useRef)(!1);
-       return (0, NC.g)(iC, {
-         adjust: CC => {
-           if (JC) return;
-           const zC = null !== xC && void 0 !== xC ? xC : Math.max(fC, Math.round((nC - bC) / 20 / fC) * fC),
-             QC = eC(ZC + CC * zC * (FC ? -1 : 1));
-           QC !== ZC && (null === RC || void 0 === RC || RC(), oC(QC), null === AC || void 0 === AC || AC())
-         },
-         setFraction: CC => {
-           if (JC) return;
-           const zC = eC(bC + (FC ? 1 - CC : CC) * (nC - bC));
-           zC !== ZC && (KC.current || (KC.current = !0, null === RC || void 0 === RC || RC()), oC(zC))
-         },
-         endDrag: () => {
-           KC.current && (KC.current = !1, null === AC || void 0 === AC || AC())
- ... (38 more removed lines; see GitHub link above)
+       }
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L236-L258` → after: `L18-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L18-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/111.js#L18-L45) · [Before (L236-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/111.js#L236-L258)

```diff
-     function RC(CC) {
-       let {
-         label: zC,
-         options: ZC,
-         value: QC,
-         onChange: wC,
-         circleInfoText: bC
-       } = CC;
-       return (0, MC.jsxs)("div", {
-         className: "SettingBox SegmentedSettingRow",
-         children: [(0, MC.jsxs)("div", {
-           className: "SliderText",
-           children: [zC, bC && (0, MC.jsx)(nC.b, {
-             className: "SettingsTextInputCircleInfo",
-             hoverInfo: bC
-           })]
- ... (7 more removed lines; see GitHub link above)
+       function ip() {
+         return pp
+       }
+       pp.isRequired = pp;
+       var cp = {
+         array: pp,
+         bigint: pp,
+         bool: pp,
+         func: pp,
+         number: pp,
+         object: pp,
+         string: pp,
+         symbol: pp,
+         any: pp,
+         arrayOf: ip,
+         element: pp,
+ ... (12 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L261` → after: `L48-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L48-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/111.js#L48-L54) · [Before (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/111.js#L261)

```diff
-   6663: (CC, zC, ZC) => {
+   5081: (pp, ip, cp) => {
+     pp.exports = cp(5085)()
+   },
+   5088: pp => {
+     pp.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
+   },
+   6737: (pp, ip, cp) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L265-L290` → after: `L58-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L58-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/111.js#L58-L64) · [Before (L265-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/111.js#L265-L290)

```diff
-     var QC = ZC(48),
-       wC = ZC(1463),
-       bC = ZC(6560),
-       nC = ZC(1169),
-       fC = ZC(326),
-       oC = ZC(1295),
-       qC = ZC(1453),
-       FC = ZC(1388),
-       WC = ZC(1321),
-       NC = ZC(2575),
-       MC = ZC(2718),
-       gC = ZC(4491),
-       SC = ZC(1076),
-       pC = ZC(1439),
-       PC = ZC(77),
-       GC = ZC(1143);
- ... (10 more removed lines; see GitHub link above)
+     var Op = cp(1538),
+       op = cp(1480),
+       Ip = cp(1201),
+       Sp = cp(6743),
+       xp = cp(6716),
+       Lp = cp(6698),
+       Yp = cp(1112);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L292-L297` → after: `L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/111.js#L66) · [Before (L292-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/111.js#L292-L297)

```diff
-     function hC(CC) {
-       let {
-         details: zC,
-         owner: ZC,
-         onChanged: wC
-       } = CC;
+     function Dp() {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L300-L393` → after: `L69-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L69-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/111.js#L69-L74) · [Before (L300-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/111.js#L300-L393)

```diff
-       } = (0, GC.y)(), fC = (0, qC.useNavigatePreserveSearch)(), {
-         userContext: WC
-       } = (0, SC.e)(), [NC, MC] = (0, QC.useState)(!1), [gC, PC] = (0, QC.useState)(null), [RC, AC] = (0, QC.useState)(!1), {
-         packId: hC,
-         name: KC,
-         description: YC,
-         live: dC
-       } = zC;
-       async function mC(CC) {
-         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wC;
-         MC(!0), PC(null);
-         try {
-           await CC(), zC()
-         } catch (ZC) {
-           console.error("Failed to change a shader pack", ZC), PC((0, iC.z)(ZC, nC, "shaderPackListing:ownerActionFailed"))
-         } finally {
- ... (78 more removed lines; see GitHub link above)
+       } = (0, Ip.H)(), ip = (0, Op.useNavigatePreserveSearch)();
+       return (0, xp.b)(), (0, Yp.jsxs)("div", {
+         className: "ShaderPackPublishPage AnimFadeIn",
+         children: [(0, Yp.jsx)("div", {
+           className: "ShaderPackPublishBack",
+           children: (0, Yp.jsx)(op.d, {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L395-L398` → after: `L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/111.js#L76) · [Before (L395-L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/111.js#L395-L398)

```diff
-               mC((() => pC.d.updateShaderPack(WC, {
-                 packId: hC,
-                 listed: !ZC.listed
-               })))
+               ip(Lp.R)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L400-L450` → after: `L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/111.js#L78) · [Before (L400-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/111.js#L400-L450)

```diff
-             children: [(0, vC.jsx)(JC.c, {
-               name: ZC.listed ? "eye-slash" : "eye"
-             }), " ", nC(ZC.listed ? "shaderPackListing:unlist" : "shaderPackListing:relist")]
-           }), !ZC.isBanned && (0, vC.jsxs)(FC.g, {
-             disabled: NC,
-             onClick: () => {
-               AC(!RC)
-             },
-             children: [(0, vC.jsx)(JC.c, {
-               name: "upload"
-             }), " ", nC("shaderPackListing:uploadVersion")]
-           }), (0, vC.jsxs)(FC.K, {
-             disabled: NC || ZC.isBanned,
-             onClick: () => {
-               !async function() {
-                 !0 === await IC.NotificationProvider.showPromptPopup({
- ... (35 more removed lines; see GitHub link above)
+             children: pp("shaderPackListing:backToPacks")
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L452-L535` → after: `L80-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L80-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/111.js#L80-L88) · [Before (L452-L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/111.js#L452-L535)

```diff
-         })]
-       })
-     }
-     var KC = ZC(60),
-       YC = ZC(1806),
-       dC = ZC(1228),
-       mC = ZC(4979),
-       HC = ZC(1149),
-       EC = ZC(6570),
-       lC = ZC(6562),
-       XC = ZC(6580);
- 
-     function cC(CC) {
-       let {
-         item: zC
-       } = CC;
- ... (68 more removed lines; see GitHub link above)
+         }), (0, Yp.jsx)("h1", {
+           className: "ShaderPackPublishTitle",
+           children: pp("shaderPackListing:publishTitle")
+         }), (0, Yp.jsx)(Sp.ShaderPackPublishForm, {
+           existing: null,
+           onPublished: pp => {
+             ip((0, Lp.V)(pp.packId), {
+               replace: !0
+             })
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L541-L572` → after: `L110-L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L110-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/111.js#L110-L113) · [Before (L541-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/111.js#L541-L572)

```diff
-     function uC(CC) {
-       let {
-         fullUrl: zC,
-         largeUrl: ZC,
-         alt: wC,
-         onClose: bC
-       } = CC;
-       const nC = (0, QC.useRef)(null);
-       return (0, dC.u)("popup", nC, bC), (0, QC.useEffect)((() => {
-         function CC(CC) {
-           "Escape" === CC.key && (CC.stopPropagation(), bC())
-         }
-         return window.addEventListener("keydown", CC, !0), () => {
-           window.removeEventListener("keydown", CC, !0)
-         }
-       }), [bC]), (0, KC.createPortal)((0, vC.jsxs)("div", {
- ... (16 more removed lines; see GitHub link above)
+     function Ap() {
+       var pp;
+       const [ip, cp] = (0, xp.d)(Yp, op.J[0]);
+       return [null !== (pp = op.J.find((pp => pp === ip))) && void 0 !== pp ? pp : op.J[0], cp]
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L589-L658` → after: `L116-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L116-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/111.js#L116-L119) · [Before (L589-L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/111.js#L589-L658)

```diff
-       function MC(CC) {
-         oC((zC => (0, YC.c)(zC + CC, 0, 100)))
-       }
- 
-       function gC(CC) {
-         const zC = CC.currentTarget.getBoundingClientRect();
-         oC((0, YC.c)((CC.clientX - zC.left) / zC.width * 100, 0, 100))
-       }
-       return (0, mC.g)(FC, {
-         adjust: CC => {
-           MC(CC * rC)
-         },
-         setFraction: CC => {
-           oC(100 * CC)
-         },
-         endDrag: () => {}
- ... (54 more removed lines; see GitHub link above)
+     function Pp() {
+       (0, Op.useEffect)((() => () => {
+         window.location.pathname.startsWith(Sp.R) || (0, Sp.g)()
+       }), [])
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L661-L675` → after: `L122-L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L122-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/111.js#L122-L123) · [Before (L661-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/111.js#L661-L675)

```diff
-     function TC(CC) {
-       let {
-         side: zC,
-         onClick: ZC,
-         children: QC
-       } = CC;
-       return (0, vC.jsx)("button", {
-         type: "button",
-         className: `ShaderPackStageButton ${zC}`,
-         onClick: ZC,
-         children: (0, vC.jsx)("span", {
-           className: "ShaderPackStageButtonFace SmallTextBold",
-           children: QC
-         })
-       })
+     function Wp() {
+       return (0, xp.d)(Dp, !1)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L689` → after: `L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/111.js#L126) · [Before (L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/111.js#L689)

```diff
-     function yC(CC) {
+     function yp() {
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L691-L692` → after: `L128-L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L128-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/111.js#L128-L137) · [Before (L691-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/111.js#L691-L692)

```diff
-         userContext: zC
-       } = (0, SC.e)(), [wC, bC] = (0, QC.useState)(null), [nC, fC] = (0, QC.useState)(!1), [oC, qC] = (0, QC.useState)(!1), [FC, WC] = (0, QC.useState)(null), NC = null === CC || void 0 === CC ? void 0 : CC.packId, MC = null === CC || void 0 === CC ? void 0 : CC.sourceHash;
+         userContext: pp,
+         isUserContextUpdating: ip
+       } = (0, Lp.b)(), [cp, op] = (0, Op.useState)(null), Sp = (0, Op.useRef)(new Set);
+ 
+       function xp(pp, ip) {
+         op((cp => {
+           const Op = new Set(cp);
+           return ip ? Op.add(pp) : Op.delete(pp), Op
+         }))
+       }
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L694` → after: `L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/111.js#L139) · [Before (L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/111.js#L694)

```diff
-         if (fC(!1), WC(null), void 0 === NC) return;
+         if (ip) return;
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L696-L699` → after: `L141-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/111.js#L141-L142) · [Before (L696-L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/111.js#L696-L699)

```diff
-         return Promise.all([(0, PC.hasUsableWebGpuAdapter)(), (0, DC.e)()]).then((zC => {
-           let [ZC, QC] = zC;
-           var wC;
-           CC || (bC(ZC), fC((null === QC || void 0 === QC || null === (wC = QC.listing) || void 0 === wC ? void 0 : wC.packId) === NC && QC.listing.sourceHash === MC))
+         return Ip.b.getFavouriteShaderPacks(pp).then((pp => {
+           cp || op(new Set(pp))
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L701` → after: `L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/111.js#L144) · [Before (L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/111.js#L701)

```diff
-           console.error("Failed to check whether this shader pack can be used", zC), CC || bC(!1)
+           console.error("Failed to get favourite shader packs", pp), cp || op(new Set)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L706-L732` → after: `L149-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L149-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/111.js#L149-L158) · [Before (L706-L732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/111.js#L706-L732)

```diff
-         webGpuUsable: wC,
-         inUse: nC,
-         busy: oC,
-         errorKey: FC,
-         use: () => {
-           null !== CC && async function(CC) {
-             qC(!0), WC(null);
-             try {
-               const {
-                 installListedShaderPack: QC
-               } = await Promise.all([ZC.e(77), ZC.e(133), ZC.e(113)]).then((() => ZC(40318))), wC = await QC({
-                 packId: CC.packId,
-                 sourceHash: CC.sourceHash,
-                 name: CC.name,
-                 ownerName: CC.ownerName,
-                 description: CC.description
- ... (11 more removed lines; see GitHub link above)
+         isFavourite: pp => null === cp ? null : cp.has(pp),
+         toggle: function(ip) {
+           if (null === cp || Sp.current.has(ip)) return;
+           Sp.current.add(ip);
+           const Op = !cp.has(ip);
+           xp(ip, Op), (Op ? Ip.b.favouriteShaderPack(pp, ip) : Ip.b.unfavouriteShaderPack(pp, ip)).catch((pp => {
+             console.error("Failed to change a favourite shader pack", pp), xp(ip, !Op)
+           })).finally((() => {
+             Sp.current.delete(ip)
+           }))
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L738-L766` → after: `L198-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L198-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/111.js#L198-L207) · [Before (L738-L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/111.js#L738-L766)

```diff
-       let {
-         packUse: zC
-       } = CC;
-       const {
-         t: ZC
-       } = (0, GC.y)(), {
-         webGpuUsable: QC,
-         inUse: wC,
-         busy: bC,
-         errorKey: nC,
-         use: fC
-       } = zC;
-       return (0, vC.jsxs)("div", {
-         className: "ShaderPackUse",
-         children: [(0, vC.jsxs)(FC.o, {
-           disabled: !0 !== QC || wC,
- ... (13 more removed lines; see GitHub link above)
+       return `${Sp}/${encodeURIComponent(pp)}`
+     }
+     let Yp = null;
+ 
+     function Dp(pp) {
+       Yp = pp
+     }
+ 
+     function Ap() {
+       return Yp
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L771-L778` → after: `L272-L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L272-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/111.js#L272-L274) · [Before (L771-L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/111.js#L771-L778)

```diff
-       const {
-         t: zC
-       } = (0, GC.y)(), ZC = (0, qC.useNavigatePreserveSearch)(), {
-         packId: bC
-       } = (0, wC.C)(), {
-         userContext: nC,
-         isUserContextUpdating: fC
-       } = (0, SC.e)(), [WC, NC] = (0, QC.useState)(null), [MC, PC] = (0, QC.useState)(null), [RC, AC] = (0, QC.useState)(0), xC = (0, QC.useRef)(0);
+       const Op = Qp(ip);
+       (0, Ip.g)(pp, dp, "explore" === ip.section ? null : ip.section), (0, Ip.g)(pp, ep, ip.sort === Rp ? null : ip.sort), (0, Ip.g)(pp, jp, Op === qp ? null : Op), (0, Ip.g)(pp, kp, ip.searchQuery), (0, Ip.g)(pp, mp, null !== (cp = tp(ip.banned)) && void 0 !== cp ? cp : null), ( … [truncated]
+     }
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L780-L840` → after: `L276-L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L276-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/111.js#L276-L286) · [Before (L780-L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/111.js#L780-L840)

```diff
-       function JC() {
-         var CC;
-         null !== (CC = (0, qC.getPreviousLocation)()) && void 0 !== CC && CC.startsWith(iC.W) ? ZC(-1) : ZC(iC.W)
-       }(0, gC.e)(JC), (0, EC.b)(), (0, QC.useEffect)((() => {
-         if (fC || void 0 === bC) return;
-         const CC = ++xC.current;
-         PC(null), pC.d.getShaderPack(nC, bC).then((zC => {
-           xC.current === CC && NC(zC)
-         })).catch((zC => {
-           xC.current === CC && (console.error("Failed to get the shader pack", zC), NC(null), PC({
-             error: zC
-           }))
-         }))
-       }), [bC, nC, fC, RC]);
-       const IC = () => {
-           AC((CC => CC + 1))
- ... (45 more removed lines; see GitHub link above)
+     function Ep(pp) {
+       const ip = new URLSearchParams;
+       return Cp(ip, {
+         section: "explore",
+         sort: Rp,
+         withFeatures: "strict" === pp ? [pp] : [pp, "strict"],
+         withoutFeatures: [],
+         searchQuery: null,
+         pageNumber: 1,
+         banned: "without"
+       }), `${Sp}?${ip.toString()}`
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L844-L862` → after: `L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/111.js#L290) · [Before (L844-L862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/111.js#L844-L862)

```diff
-       let {
-         item: zC,
-         favourites: ZC,
-         packUse: QC
-       } = CC;
-       const wC = ZC.isFavourite(zC.packId);
-       return (0, vC.jsxs)("div", {
-         className: "ShaderPackInformationActions",
-         children: [PC.featureFlags.settings.canUseShaderPacks && (0, vC.jsx)(LC, {
-           packUse: QC
-         }), (0, vC.jsx)(FC.x, {
-           className: "ShaderPackInformationLike",
-           onClick: () => {
-             ZC.toggle(zC.packId)
-           },
-           isLiked: !0 === wC,
- ... (3 more removed lines; see GitHub link above)
+       return Qp(pp) === qp
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L866-L954` → after: `L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/111.js#L294) · [Before (L866-L954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/111.js#L866-L954)

```diff
-       let {
-         item: zC,
-         ownerPreview: ZC,
-         bloxdhubSlug: QC,
-         actions: wC
-       } = CC;
-       const {
-         t: fC
-       } = (0, GC.y)(), oC = (0, MC.q)(), FC = null === QC ? null : (0, bC.e)(QC);
-       return (0, vC.jsxs)("div", {
-         className: "ShaderPackFacts",
-         children: [zC.description && (0, vC.jsx)("p", {
-           className: "ShaderPackDescription",
-           children: zC.description
-         }), (0, vC.jsxs)("div", {
-           className: "ShaderPackFeatureList",
- ... (73 more removed lines; see GitHub link above)
+       return null !== pp.searchQuery || "with" === pp.banned || Qp(pp) !== qp
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L958-L962` → after: `L298-L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L298-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/111.js#L298-L326) · [Before (L958-L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/111.js#L958-L962)

```diff
-       let {
-         label: zC,
-         time: ZC,
-         now: QC
-       } = CC;
+       return yp.flatMap((ip => {
+         const cp = wp(pp, ip);
+         return "with" === cp ? [ip] : "without" === cp ? [`-${ip}`] : []
+       })).join(",")
+     }
+     const Jp = {
+         popular: "shaderPackListing:sortPopular",
+         updated: "shaderPackListing:sortUpdated",
+         newest: "shaderPackListing:sortNewest"
+       },
+       Bp = {
+         forest: "shaderPackListing:viewForest",
+         desert: "shaderPackListing:viewDesert",
+         water: "shaderPackListing:viewWater",
+         night: "shaderPackListing:viewNight",
+         cave: "shaderPackListing:viewCave"
+ ... (13 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L964-L971` → after: `L328-L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L328-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/111.js#L328-L348) · [Before (L964-L971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/111.js#L964-L971)

```diff
-         t: wC,
-         selectedLanguage: bC
-       } = (0, GC.y)(), nC = new Date(ZC);
-       let oC = nC.toLocaleDateString();
-       if (QC - ZC <= 30 * fC.e) {
-         const CC = (0, GC.m)(bC.code, "shaderPackListing:timeAgo");
-         oC = wC("shaderPackListing:timeAgo", {
-           time: (0, fC.U)(CC, ZC, QC)
+         pending: Sp
+       } = pp;
+       if (null === pp.brokenError || Sp && !Sp.error || Ip.push({
+           tone: "warning",
+           text: op("shaderPackListing:ownerBroken"),
+           detail: pp.brokenError
+         }), null !== Sp && void 0 !== Sp && Sp.error) Ip.push({
+         tone: "warning",
+         text: op(ip ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
+         detail: (0, Op.n)(Sp.error) ? null : Sp.error
+       });
+       else if (Sp) {
+         const pp = null === Sp.renderNotBefore ? 0 : Sp.renderNotBefore - cp,
+           Op = String(Math.ceil(pp / 6e4)),
+           xp = op(ip ? pp > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : pp > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
+             minutes: Op
+ ... (5 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L974-L983` → after: `L351-L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L351-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/111.js#L351-L355) · [Before (L974-L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/111.js#L974-L983)

```diff
-       return (0, vC.jsx)(WC.d, {
-         tooltipInner: nC.toLocaleString(),
-         children: (0, vC.jsxs)("div", {
-           children: [(0, vC.jsx)("dt", {
-             children: zC
-           }), (0, vC.jsx)("dd", {
-             children: oC
-           })]
-         })
-       })
+       return pp.listed || Ip.push({
+         tone: "info",
+         text: op("shaderPackListing:ownerUnlisted"),
+         detail: null
+       }), Ip
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L995-L1033` → after: `L359-L363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L359-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/111.js#L359-L363) · [Before (L995-L1033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/111.js#L995-L1033)

```diff
-       let {
-         options: zC,
-         value: ZC,
-         onChange: QC,
-         ariaLabel: nC,
-         className: fC,
-         reselectable: oC = !1,
-         keepsFocus: qC = !1,
-         padTabs: FC
-       } = CC;
-       const WC = void 0 !== FC;
-       return (0, bC.jsx)("div", {
-         className: wC()("SegmentedToggle", fC),
-         role: "group",
-         "aria-label": nC,
-         "data-pad-tabs": FC,
- ... (23 more removed lines; see GitHub link above)
+       return Math.max(1, Math.round(pp / 1024))
+     }
+ 
+     function bp(pp, ip, cp) {
+       return pp instanceof op.e && pp.errorMessageForUser ? pp.errorMessageForUser : ip(cp)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L1036` → after: `L366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/111.js#L366) · [Before (L1036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/111.js#L1036)

```diff
-   4979: (CC, zC, ZC) => {
+   6724: (pp, ip, cp) => {
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L1038-L1039` → after: `L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/111.js#L368) · [Before (L1038-L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/111.js#L1038-L1039)

```diff
-       c: () => bC,
-       g: () => nC
+       d: () => Ip
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L1041-L1065` → after: `L370-L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L370-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/111.js#L370-L379) · [Before (L1041-L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/111.js#L1041-L1065)

```diff
-     var QC = ZC(48);
-     const wC = new WeakMap,
-       bC = CC => {
-         var zC;
-         const ZC = CC.closest("[data-pad-slider]");
-         return ZC && null !== (zC = wC.get(ZC)) && void 0 !== zC ? zC : null
-       },
-       nC = (CC, zC) => {
-         const ZC = (0, QC.useRef)(zC);
-         ZC.current = zC, (0, QC.useEffect)((() => {
-           if (CC.current) return ((CC, zC) => (wC.set(CC, zC), () => {
-             wC.get(CC) === zC && wC.delete(CC)
-           }))(CC.current, {
-             adjust: CC => {
-               ZC.current.adjust(CC)
-             },
- ... (9 more removed lines; see GitHub link above)
+     var Op = cp(62),
+       op = cp(44);
+ 
+     function Ip(pp, ip) {
+       var cp;
+       const [Ip, Sp] = (0, Op.useState)(null !== (cp = op.h.getItem(pp)) && void 0 !== cp ? cp : ip);
+       return [Ip, ip => {
+         op.h.setItem(pp, ip), Sp(ip)
+       }]
+     }
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L1067` → after: `L381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/111.js#L381) · [Before (L1067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/111.js#L1067)

```diff
-   6660: (CC, zC, ZC) => {
+   6804: (pp, ip, cp) => {
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L1069-L1070` → after: `L383-L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L383-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/111.js#L383-L384) · [Before (L1069-L1070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/111.js#L1069-L1070)

```diff
-       c: () => wC,
-       e: () => bC
+       e: () => op,
+       f: () => Ip
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L1072` → after: `L386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/111.js#L386) · [Before (L1072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/111.js#L1072)

```diff
-     var QC = ZC(38);
+     var Op = cp(44);
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L1077` → after: `L391-L470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L391-L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/111.js#L391-L470) · [Before (L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/111.js#L1077)

```diff
-       return null !== (CC = await QC.g.getItem(wC, zC)) && void 0 !== CC ? CC : null
+       return null !== (pp = await Op.g.getItem(op, ip)) && void 0 !== pp ? pp : null
+     }
+   },
+   6704: (pp, ip, cp) => {
+     cp.d(ip, {
+       A: () => Ip,
+       D: () => xp,
+       G: () => Sp,
+       J: () => Op,
+       M: () => Pp,
+       P: () => Dp,
+       S: () => dp,
+       V: () => Ap,
+       W: () => Yp,
+       d: () => yp,
+       g: () => wp,
+ ... (64 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/112.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/112.js` (21 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295)

#### 1. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L4-L7` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/112.js#L4-L6) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/112.js#L4-L7)

```diff
-   5008: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       b: () => FC,
-       f: () => qC
+   9030: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       default: () => ei
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L9-L18` → after: `L8-L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L8-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/112.js#L8-L100) · [Before (L9-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/112.js#L9-L18)

```diff
-     var QC = ZC(48),
-       wC = ZC(1388),
-       bC = ZC(1143),
-       nC = ZC(77),
-       fC = ZC(3123),
-       oC = ZC(1056);
- 
-     function qC() {
-       return !(0, nC.isMobile)()
-     }
+     var Op = cp(1543),
+       op = cp(25),
+       Ip = cp(4747),
+       Sp = cp(62),
+       xp = cp(1476);
+     var Lp = cp(1956),
+       Yp = cp(1538),
+       Dp = cp(1372),
+       Ap = cp(1201),
+       Pp = cp(156),
+       Wp = cp(195),
+       yp = cp(1014),
+       Up = cp(1024),
+       wp = cp(1234),
+       vp = cp(2420),
+       tp = cp(1520),
+ ... (77 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L22-L24` → after: `L104-L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L104-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/112.js#L104-L105) · [Before (L22-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/112.js#L22-L24)

```diff
-         disabled: zC,
-         openFolderPicker: ZC,
-         onFiles: nC
+         onApply: ip,
+         onSkip: cp
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L28-L39` → after: `L109-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L109-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/112.js#L109-L195) · [Before (L28-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/112.js#L28-L39)

```diff
-       } = (0, bC.y)(), WC = (0, QC.useRef)(null);
-       return (0, oC.jsxs)("div", {
-         className: "PackPickButtons",
-         "data-pad-mouse-only": !0,
-         children: [(0, oC.jsx)("input", {
-           ref: WC,
-           type: "file",
-           accept: ".zip,application/zip",
-           hidden: !0,
-           onChange: function(CC) {
-             const zC = Array.from(CC.target.files);
-             CC.target.value = "", nC(zC)
+       } = (0, Ap.H)();
+       return (0, Sp.useEffect)((() => {
+         Gp.e.skipPlayWait()
+       }), []), (0, rp.jsx)(ap.j, {
+         icon: "download",
+         title: "customTexturePack:downloadTitle",
+         subtitle: (0, rp.jsxs)("div", {
+           className: "CustomTexturePackDownloaderSubtitleText",
+           children: [Op("customTexturePack:downloadPrompt"), (0, rp.jsx)("div", {
+             className: "CustomTexturePackDownloaderWarningText",
+             children: Op("customTexturePack:authorWarning")
+           }), (0, rp.jsx)("div", {
+             className: "CustomTexturePackDownloaderSecondaryText",
+             children: Op("customTexturePack:existingPackSaved")
+           })]
+         }),
+ ... (71 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L41-L46` → after: `L197-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L197-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/112.js#L197-L213) · [Before (L41-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/112.js#L41-L46)

```diff
-         }), qC() && (0, oC.jsx)(wC.g, {
-           disabled: zC,
-           onClick: ZC,
-           children: FC("general:chooseFolder")
-         }), (0, oC.jsx)(wC.g, {
-           disabled: zC,
+         },
+         onSkip: Dp
+       }) : "downloading" === op ? (0, rp.jsx)(ap.j, {
+         icon: "download",
+         title: "customTexturePack:downloading",
+         subtitle: (0, rp.jsx)("div", {
+           className: "CustomTexturePackDownloaderLogoLoaderContainer",
+           children: (0, rp.jsx)(np.c, {
+             showFace: !0
+           })
+         })
+       }) : "error" === op ? (0, rp.jsx)(ap.j, {
+         icon: "face-worried",
+         title: "customTexturePack:errorTitle",
+         subtitle: xp,
+         confirm: {
+ ... (1 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L48-L96` → after: `L215-L263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L215-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/112.js#L215-L263) · [Before (L48-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/112.js#L48-L96)

```diff
-             (0, fC.c)(WC.current)
-           },
-           children: FC("general:chooseZip")
-         })]
-       })
-     }
-   },
-   4992: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       d: () => fC,
-       g: () => nC,
-       h: () => bC
-     });
-     var QC = ZC(4998);
-     const wC = [CC => CC.strict ? "strict" : "nonStrict", CC => CC.program];
- 
- ... (33 more removed lines; see GitHub link above)
+             window.location.reload()
+           }
+         },
+         cancel: {
+           text: "customTexturePack:skip",
+           onClick: Dp
+         }
+       }) : "refused" === op ? (0, rp.jsx)(ap.j, {
+         icon: "face-worried",
+         title: "customTexturePack:cantApplyTitle",
+         subtitle: "customTexturePack:gamePackHasExternalUrls",
+         confirm: {
+           text: "general:continue",
+           onClick: Dp
+         }
+       }) : null
+ ... (33 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L98-L103` → after: `L265-L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L265-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/112.js#L265-L274) · [Before (L98-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/112.js#L98-L103)

```diff
-       return bC
-     }
- 
-     function WC(CC, zC) {
-       const ZC = new Map;
-       for (const wC of CC) {
+     }
+ 
+     function Hi(pp) {
+       if (null === pp || void 0 === pp || !pp.isError()) return !1;
+       const ip = pp.asError();
+       return ip.code === Pp.k.REQUEST_TO_MATCHMAKING && !(0, Pi.e)(ip.debugResult.error)
+     }
+     async function di(pp, ip, cp) {
+       const Op = (0, Di.M)(ip);
+       async function Sp(pp, ip, cp, Op) {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L105-L106` → after: `L276-L309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L276-L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/112.js#L276-L309) · [Before (L105-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/112.js#L105-L106)

```diff
-         const CC = zC(wC);
-         ZC.set(CC, [...null !== (QC = ZC.get(CC)) && void 0 !== QC ? QC : [], wC])
+         if (Op.aborted) return null;
+         null === op.c.get("gameEntrySource") && (0, op.k)("directPlayUrl"), Wi.z && (0, gp.f)().catch((() => {})), op.c.set({
+           gameState: "findingLobby"
+         }), Rp.m.GA("loadingScreenState", "loadingPage:findingLobby");
+         const xp = await Hp.userContextManager.getCurrentUserContext();
+         Lp.gameBridge.send("setRequestedGame", {
+           gameNameWithVariation: ip,
+           discordContext: pp instanceof fp.e ? pp.getSerialisableParams() : null
+         }), (0, Ii.i)(null !== (Sp = Gp.e.playInputAt()) && void 0 !== Sp ? Sp : performance.now());
+         const Yp = await async function(pp, ip, cp, Op, op) {
+           try {
+             await (0, Ui.k)(Ip.reqLibsLoadedPromise, vi, "Required libraries timed out")
+           } catch (Sp) {
+             const pp = Sp instanceof Ui.h ? `Required libraries still loading after ${vi/1e3} s: ${(0,Ip.requiredLibsPending)().join(", ")}` : Sp.toString();
+             return qp.d.errorWithCode(pp, Pp.k.LOAD_REQUIRED_LIBS, {
+               error: Sp,
+ ... (18 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L108-L137` → after: `L311-L336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L311-L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/112.js#L311-L336) · [Before (L108-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/112.js#L108-L137)

```diff
-       return [...ZC.values()]
-     }
-   },
-   6594: (CC, zC, ZC) => {
-     ZC.r(zC), ZC.d(zC, {
-       ShaderPackPublishForm: () => RC
-     });
-     var QC = ZC(48),
-       wC = ZC(6560),
-       bC = ZC(189),
-       nC = ZC(5002),
-       fC = ZC(1013),
-       oC = ZC(1388),
-       qC = ZC(1593),
-       FC = ZC(1076),
-       WC = ZC(6596),
- ... (14 more removed lines; see GitHub link above)
+       return Op && (0, op.k)("updateRejoin"), (0, Li.l)((async op => {
+         try {
+           var Ip;
+           let xp = pp,
+             Lp = await Sp(xp, ip, cp, op);
+           for (let pp = 0; Op && pp < Di.l && (Hi(Lp) && await (0, Di.N)((0, Di.x)(pp), op)); pp++) xp = (0, Di.z)(xp, pp + 1, "string" === typeof xp && (0, wp.I)(xp)), Lp = await Sp(xp, ip, cp, op);
+           return null !== (Ip = Lp) && void 0 !== Ip && Ip.isError() && ti(Lp), Lp
+         } catch (xp) {
+           if ((0, Si.reportClientError)("matchmake_failed", xp, "unexpected"), Lp.gameBridge.send("leaveGame", {
+               reloadPath: op.aborted ? null : "/"
+             }), op.aborted) return null;
+           throw xp
+         }
+       }), (async pp => {
+         var cp;
+         if (Op) return;
+ ... (10 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L140-L160` → after: `L339-L359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L339-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/112.js#L339-L359) · [Before (L140-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/112.js#L140-L160)

```diff
-       } = (0, gC.y)(), {
-         userContext: iC,
-         isUserContextUpdating: vC
-       } = (0, FC.e)(), [eC, hC] = (0, QC.useState)(null), [KC, YC] = (0, QC.useState)(0), [dC, mC] = (0, QC.useState)(null !== (zC = null === RC || void 0 === RC ? void 0 : RC.name) && void 0 !== zC ? zC : ""), HC = (0, QC.useRef)(dC), EC = (0, QC.useRef)(""), lC = CC => {
-         HC.current = CC, mC(CC)
-       }, [XC, cC] = (0, QC.useState)(null !== (ZC = null === RC || void 0 === RC ? void 0 : RC.description) && void 0 !== ZC ? ZC : ""), uC = (0, QC.useRef)(XC), rC = (0, QC.useRef)(""), sC = CC => {
-         uC.current = CC, cC(CC)
-       }, [TC, aC] = (0, QC.useState)(!1), {
-         loading: tC,
-         error: DC,
-         setError: jC,
-         onFiles: yC
-       } = (0, NC.i)((async CC => {
-         const zC = await (0, SC.loadPageShaderPackCompiler)();
-         if (!zC) return void jC(IC("shaderPack:compilerUnavailable"));
-         const ZC = await (0, pC.c)(zC, CC.files);
- ... (5 more removed lines; see GitHub link above)
+       } = (0, Ap.H)(), ip = (0, Yp.useNavigatePreserveSearch)(), cp = (0, Op.r)(), Wp = (0, Op.A)(), Up = (0, Sp.useRef)({
+         t: pp,
+         navigate: ip
+       });
+       Up.current = {
+         t: pp,
+         navigate: ip
+       };
+       const dp = (0, Sp.useRef)("");
+       dp.current = cp.pathname + cp.search;
+       const {
+         gameState: ep,
+         clientEscMenuOptions: kp
+       } = (0, op.o)(["gameState", "clientEscMenuOptions"]), Rp = (0, Sp.useRef)(null), fp = (0, Sp.useRef)(!1);
+       var bp;
+       (0, Li.p)(), (0, Li.r)(), bp = Wi.z, (0, Sp.useEffect)((() => {
+ ... (5 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L162-L260` → after: `L361-L526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L361-L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/112.js#L361-L526) · [Before (L162-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/112.js#L162-L260)

```diff
-           if ("" !== HC.current.trim() && HC.current !== EC.current || (EC.current = (0, wC.P)(CC.manifest.name.trim(), wC.y), lC(EC.current)), "" === uC.current.trim() || uC.current === rC.current) rC.current = (0, wC.P)((null !== (QC = CC.manifest.description) && void 0 !== QC  … [truncated]
-           YC((CC => CC + 1))
-         }
-       })), LC = !vC && !iC.isLoggedIn() && !bC.e.offlineMode, UC = dC.trim(), BC = UC.length < wC.A, OC = null !== eC && !1 !== (null === (WC = eC.validation) || void 0 === WC ? void 0 : WC.ok) && !tC && !BC && !LC && !vC;
-       return (0, GC.jsxs)("div", {
-         className: "ShaderPackPublishForm",
-         children: [(0, GC.jsx)("p", {
-           className: "ShaderPackPublishIntro",
-           children: RC ? IC("shaderPackListing:uploadIntro", {
-             minutes: String(wC.E / 6e4)
-           }) : IC("shaderPackListing:publishIntro")
-         }), (0, GC.jsx)(JC, {}), LC && (0, GC.jsx)("div", {
-           className: "ShaderPackPublishNote Warning",
-           children: IC("shaderPackListing:publishNeedsLogin")
-         }), (0, GC.jsx)(NC.e, {
-           busy: tC,
- ... (83 more removed lines; see GitHub link above)
+           pp = !1, sp.wanted = !1, null === (ip = Kp) || void 0 === ip || ip.setGamePackConfirm(null), Kp = null
+         }
+       }), [bp]), (0, Sp.useEffect)((() => {
+         var pp, ip, Op;
+         (0, Ip.needGameClientNow)();
+         const {
+           t: Sp,
+           navigate: xp
+         } = Up.current, Ap = (0, Oi.c)(Wp, cp.search);
+         if (Wp.lobbyName && !new URLSearchParams(cp.search).has("lobby")) return void xp((0, Np.c)(Ap.gameNameWithVariation, Ap.lobbyName), {
+           replace: !0
+         });
+         let ep = Promise.resolve({
+           shouldMatchmake: !0
+         });
+         if ("/play/discord-custom-lobby" === cp.pathname) {
+ ... (150 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L263-L268` → after: `L551-L606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L551-L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/112.js#L551-L606) · [Before (L263-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/112.js#L263-L268)

```diff
-             }()
-           },
-           children: [(0, GC.jsx)(fC.c, {
-             name: "upload"
-           }), " ", IC(RC ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
-         })]
+           })).catch((pp => {
+             if (!Ii()) return;
+             Dp.NotificationProvider.showPromptPopup({
+               icon: "face-dizzy",
+               title: "Unexpected Error",
+               subtitle: (0, rp.jsxs)(rp.Fragment, {
+                 children: [Sp("homePage:pleaseCopyError"), (0, rp.jsx)("div", {
+                   style: {
+                     fontSize: "0.9rem",
+                     paddingTop: "1rem"
+                   },
+                   children: (0, rp.jsx)(lp.c, {
+                     errorString: pp.stack
+                   })
+                 })]
+               }),
+ ... (40 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L334` → after: `L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/112.js#L610) · [Before (L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/112.js#L334)

```diff
-   4998: (CC, zC, ZC) => {
+   5103: (pp, ip, cp) => {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L336-L338` → after: `L612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/112.js#L612) · [Before (L336-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/112.js#L336-L338)

```diff
-       b: () => QC.j,
-       f: () => wC,
-       i: () => QC.q
+       d: () => op
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L340-L344` → after: `L614-L624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L614-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/112.js#L614-L624) · [Before (L340-L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/112.js#L340-L344)

```diff
-     var QC = ZC(5002);
-     const wC = [!1, !0].flatMap((CC => ["terrain", "liquid", "model"].map((zC => ({
-       strict: CC,
-       program: zC
-     })))))
+     var Op = cp(1211);
+     async function op(pp) {
+       const ip = await fetch(`${Op.clientSideServerUrls.s3Url}/${pp}`, {
+         headers: {
+           Accept: "application/json"
+         }
+       });
+       if (404 === ip.status || 403 === ip.status) return null;
+       if (!ip.ok) throw new Error(`Failed to download the texture pack (${ip.status})`);
+       return await ip.json()
+     }
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L346` → after: `L626-L659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L626-L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/112.js#L626-L659) · [Before (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/112.js#L346)

```diff
-   5002: (CC, zC, ZC) => {
+   9049: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => Sp
+     });
+     var Op = cp(1356),
+       op = cp(1234),
+       Ip = cp(640);
+ 
+     function Sp(pp) {
+       return pp = function(pp, ip) {
+         var cp;
+         const Op = new URLSearchParams(ip),
+           op = Op.get("lobby"),
+           Ip = Op.get("vm"),
+           Sp = null !== (cp = op) && void 0 !== cp ? cp : pp.lobbyName,
+           xp = null !== Ip && void 0 !== Ip ? Ip : pp.directJoinVmUrl;
+ ... (18 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L349-L357` → after: `L662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/112.js#L662) · [Before (L349-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/112.js#L349-L357)

```diff
-       g: () => nC,
-       j: () => QC,
-       k: () => SC,
-       m: () => WC,
-       q: () => wC,
-       r: () => bC,
-       s: () => qC,
-       w: () => FC,
-       y: () => NC
+       g: () => op
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L359-L402` → after: `L664-L670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L664-L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/112.js#L664-L670) · [Before (L359-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/112.js#L359-L402)

```diff
-     const QC = 5;
- 
-     function wC(CC) {
-       return CC === QC
-     }
- 
-     function bC(CC) {
-       return [...CC.features]
-     }
-     const nC = 262144,
-       fC = 256,
-       oC = 256;
- 
-     function qC(CC) {
-       if ("object" !== typeof CC || null === CC || Array.isArray(CC)) return "The pack has no files.";
-       const zC = [];
- ... (28 more removed lines; see GitHub link above)
+     let Op = !1;
+ 
+     function op() {
+       Op = !0
+     }
+ 
+     function Ip() {
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L407-L431` → after: `L684-L728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L684-L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/112.js#L684-L728) · [Before (L407-L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/112.js#L407-L431)

```diff
-       return CC < zC ? -1 : CC > zC ? 1 : 0
-     }
- 
-     function NC(CC) {
-       const zC = new TextEncoder;
-       let ZC = 0;
-       for (const {
-           source: QC
-         }
-         of CC) ZC += zC.encode(QC).byteLength;
-       return ZC
-     }
- 
-     function MC(CC) {
-       if (!CC.toLowerCase().endsWith(".wgsl")) return `${CC} isn't a .wgsl file.`;
-       if (CC.length > oC) return `A file path is over ${oC} characters.`;
- ... (9 more removed lines; see GitHub link above)
+       return `${ip}\n${null!==pp&&void 0!==pp?pp:""}`
+     }
+ 
+     function Ip(pp) {
+       Op = pp
+     }
+ 
+     function Sp(pp) {
+       const ip = Op;
+       return Op = null, null !== ip && ip.key === pp ? ip.settled : null
+     }
+ 
+     function xp(pp, ip, cp, Op) {
+       let op = !1;
+       null !== ip && setTimeout((() => {
+         Op() && !op && ip()
+ ... (29 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L433-L434` → after: `L730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/112.js#L730) · [Before (L433-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/112.js#L433-L434)

```diff
-           numAnimStates: ZC,
-           animStartIdx: wC
+           startJoinLoad: ip
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L436-L525` → after: `L732-L781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L732-L781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/112.js#L732-L781) · [Before (L436-L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/112.js#L436-L525)

```diff
-         for (let bC = 1; bC < ZC; bC++) QC.set(wC + bC - 1, zC)
-       }));
-       const wC = Object.entries(CC),
-         bC = new Map;
-       for (const [SC, pC] of wC) {
-         const CC = gC.exec(SC);
-         "1" === CC?.[2] && bC.set(CC[1], pC + 1)
-       }
-       const nC = CC => {
-           const zC = gC.exec(CC);
-           return zC && bC.has(zC[1]) ? {
-             root: zC[1],
-             rotation: Number(zC[2]) - 1
-           } : null
-         },
-         fC = new Set(wC.map((CC => {
- ... (74 more removed lines; see GitHub link above)
+         ip()
+       }), (() => {})), Yp ??= Dp().then((pp => (pp.startWasmPlay(), pp.followPageUiPack((pp => {
+         Op.d.showGamePack(pp)
+       })), pp)), (pp => {
+         throw Yp = null, pp
+       })), Yp
+     }
+ 
+     function Wp() {
+       return Ap(), cp.e(276).then((() => cp(41273))).catch((() => {})), Dp().then((() => {}))
+     }
+ 
+     function yp() {
+       return Dp().then((pp => {
+         pp.startWasmPreviews(), pp.prefetchWasmPreviews()
+       }))
+ ... (34 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/113.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/113.js` (30 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/113.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/113.js#L2)

```diff
- export const ids = [113, 116, 136, 137];
+ export const ids = [113];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/113.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/113.js#L4)

```diff
-   4998: (CC, zC, ZC) => {
+   5113: (pp, ip, cp) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/113.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/113.js#L6)

```diff
-       b: () => QC.j,
+       b: () => yp,
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L8` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/113.js#L8-L9) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/113.js#L8)

```diff
-       i: () => QC.q
+       i: () => Up,
+       l: () => tp
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L10-L38` → after: `L11-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L11-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/113.js#L11-L67) · [Before (L10-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/113.js#L10-L38)

```diff
-     var QC = ZC(5002);
-     const wC = [!1, !0].flatMap((CC => ["terrain", "liquid", "model"].map((zC => ({
-       strict: CC,
-       program: zC
-     })))))
-   },
-   40318: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       c: () => WC,
-       installListedShaderPack: () => FC
-     });
-     var QC = ZC(6560),
-       wC = ZC(5002),
-       bC = ZC(1149),
-       nC = ZC(6609),
-       fC = ZC(4998),
- ... (13 more removed lines; see GitHub link above)
+     var Op = cp(62),
+       op = cp(5122),
+       Ip = cp(4462),
+       Sp = cp(1387),
+       xp = cp(5146),
+       Lp = cp(1049),
+       Yp = cp.n(Lp),
+       Dp = cp(1372),
+       Ap = cp(1765),
+       Pp = cp(5149),
+       Wp = cp(1112);
+ 
+     function yp(pp) {
+       let {
+         label: ip,
+         onClick: cp,
+ ... (41 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L40-L56` → after: `L69-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L69-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/113.js#L69-L179) · [Before (L40-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/113.js#L40-L56)

```diff
-     async function WC(CC, zC) {
-       const ZC = await async function(CC) {
-         let {
-           packId: zC,
-           sourceHash: ZC
-         } = CC;
-         try {
-           const CC = await fetch(`${bC.clientSideServerUrls.s3Url}/${(0,QC.J)(zC,ZC)}`, {
-             headers: {
-               Accept: "application/json"
-             }
-           });
-           if (!CC.ok) return console.error(`Failed to download shader pack ${zC} (${CC.status})`), null;
-           const wC = await CC.json();
-           return "object" !== typeof wC || null === wC ? (console.error(`Shader pack ${zC}'s source isn't an object`), null) : wC
-         } catch (wC) {
- ... (1 more removed lines; see GitHub link above)
+ 
+     function Up(pp) {
+       let {
+         name: ip,
+         onChange: cp,
+         min: op,
+         max: Ip,
+         step: xp,
+         initValue: Lp,
+         circleInfoText: Dp,
+         format: Ap,
+         className: Pp,
+         padStep: yp,
+         disabled: Up = !1,
+         selectableMax: wp,
+         cappedNote: tp,
+ ... (95 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L58-L83` → after: `L181-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L181-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/113.js#L181-L188) · [Before (L58-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/113.js#L58-L83)

```diff
-       }(CC);
-       if (null === ZC) return {
-         kind: "failed",
-         reason: "download"
-       };
-       if (!(0, fC.i)(ZC.apiVersion)) return {
-         kind: "failed",
-         reason: "apiVersion"
-       };
-       const nC = (0, wC.s)(ZC.files);
-       if ("string" === typeof nC) return console.error(`A listed shader pack breaks the pack rules: ${nC}`), {
-         kind: "failed",
-         reason: "invalid"
-       };
-       const FC = await (0, qC.c)(zC, nC);
-       if (!1 === (null === FC || void 0 === FC ? void 0 : FC.ok)) return {
- ... (10 more removed lines; see GitHub link above)
+       }), []);
+       const Cp = (0, Op.useRef)(!1);
+       return (0, Pp.h)(mp, {
+         adjust: pp => {
+           if (jp) return;
+           const ip = null !== ep && void 0 !== ep ? ep : Math.max(xp, Math.round((Sp - Ip) / 20 / xp) * xp),
+             Op = qp(cp + pp * ip * (Dp ? -1 : 1));
+           Op !== cp && (null === Hp || void 0 === Hp || Hp(), Lp(Op), null === dp || void 0 === dp || dp())
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L85-L91` → after: `L190-L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L190-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/113.js#L190-L220) · [Before (L85-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/113.js#L85-L91)

```diff
-         files: nC
-       };
-       return {
-         kind: "loaded",
-         stored: (0, oC.toStoredShaderPack)(WC, FC, {
-           packId: CC.packId,
-           sourceHash: CC.sourceHash
+         setFraction: pp => {
+           if (jp) return;
+           const ip = qp(Ip + (Dp ? 1 - pp : pp) * (Sp - Ip));
+           ip !== cp && (Cp.current || (Cp.current = !0, null === Hp || void 0 === Hp || Hp()), Lp(ip))
+         },
+         endDrag: () => {
+           Cp.current && (Cp.current = !1, null === dp || void 0 === dp || dp())
+         }
+       }), (0, Wp.jsx)("div", {
+         ref: kp,
+         style: {
+           display: "contents"
+         },
+         children: (0, Wp.jsx)(op.b, {
+           value: cp,
+           min: Ip,
+ ... (15 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L93` → after: `L222-L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L222-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/113.js#L222-L258) · [Before (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/113.js#L93)

```diff
-       }
+       })
+     }
+     async function tp() {
+       const pp = Dp.NotificationProvider.showPromptPopup({
+         title: "settingsMenu:reloadPagePopupTitle",
+         subtitle: "settingsMenu:reloadPagePopupSubtitle",
+         confirmText: "settingsMenu:reloadPagePopupConfirm",
+         confirmTooltip: "",
+         cancelText: "general:cancel",
+         cancelTooltip: ""
+       });
+       !0 === await pp.getResult() && (0, Ap.reloadBloxd)()
+     }
+ 
+     function Hp(pp) {
+       let {
+ ... (21 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L96` → after: `L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/113.js#L261) · [Before (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/113.js#L96)

```diff
-   6658: (CC, zC, ZC) => {
+   6806: (pp, ip, cp) => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L98-L111` → after: `L263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/113.js#L263) · [Before (L98-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/113.js#L98-L111)

```diff
-       forgetShaderPackActiveHint: () => KC,
-       isOtherApiVersion: () => iC,
-       isShaderPackActive: () => AC,
-       isShaderPackChangePending: () => IC,
-       markShaderPackChangePending: () => JC,
-       pageShaderPackValidationVersion: () => vC,
-       reconcileStoredShaderPackHint: () => hC,
-       removeShaderPack: () => RC,
-       replaceShaderPack: () => pC,
-       saveShaderPack: () => SC,
-       shaderPackNeedsCheck: () => eC,
-       storedPackOutcome: () => xC,
-       storedShaderPackFiles: () => NC,
-       toStoredShaderPack: () => WC
+       default: () => Kp
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L113-L120` → after: `L265-L292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L265-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/113.js#L265-L292) · [Before (L113-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/113.js#L113-L120)

```diff
-     var QC = ZC(5002),
-       wC = ZC(4998),
-       bC = ZC(38),
-       nC = ZC(3432),
-       fC = ZC(6660),
-       oC = ZC(6630);
-     const qC = "shaderPackChangePending";
-     let FC = null;
+     var Op = cp(62),
+       op = cp(1543),
+       Ip = cp(6704),
+       Sp = cp(1234),
+       xp = cp(337),
+       Lp = cp(1569),
+       Yp = cp(1361),
+       Dp = cp(1538),
+       Ap = cp(1480),
+       Pp = cp(1387),
+       Wp = cp(1626),
+       yp = cp(2671),
+       Up = cp(2814),
+       wp = cp(4648),
+       vp = cp(1141),
+       tp = cp(1520),
+ ... (12 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L122-L128` → after: `L294-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L294-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/113.js#L294-L318) · [Before (L122-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/113.js#L122-L128)

```diff
-     function WC(CC, zC, ZC) {
-       return {
-         manifest: CC.manifest,
-         files: (0, QC.w)(CC.files),
-         validation: zC,
-         ...ZC && {
-           listing: ZC
+     function Ep(pp) {
+       let {
+         details: ip,
+         owner: cp,
+         onChanged: op
+       } = pp;
+       const {
+         t: Sp
+       } = (0, dp.H)(), xp = (0, Dp.useNavigatePreserveSearch)(), {
+         userContext: Lp
+       } = (0, vp.b)(), [Pp, Wp] = (0, Op.useState)(!1), [yp, Up] = (0, Op.useState)(null), [wp, Hp] = (0, Op.useState)(!1), {
+         packId: ep,
+         name: jp,
+         description: Ep,
+         live: Xp
+       } = ip;
+ ... (9 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L134-L137` → after: `L467-L540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L467-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/113.js#L467-L540) · [Before (L134-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/113.js#L134-L137)

```diff
-       return Object.keys(CC.files).map((zC => ({
-         path: zC,
-         source: CC.files[zC]
-       })))
+       let {
+         item: ip
+       } = pp;
+       const {
+         t: cp
+       } = (0, dp.H)(), [op] = (0, Np.h)(), [Sp, xp] = (0, Op.useState)(op), [Lp, Yp] = (0, Op.useState)(!1), [Dp, Ap] = (0, Op.useState)(!1), {
+         s3Url: Pp
+       } = Bp.clientSideServerUrls, {
+         width: Wp,
+         height: yp
+       } = Ip.u.large, Up = (0, Ip.x)(Pp, ip, Sp, "large"), {
+         renderVersion: wp
+       } = ip;
+       return (0, Mp.jsxs)("div", {
+         className: "ShaderPackPreviews",
+         children: [(0, Mp.jsx)(fp.e, {
+ ... (58 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L142-L162` → after: `L544-L574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L544-L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/113.js#L544-L574) · [Before (L142-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/113.js#L142-L162)

```diff
-       const zC = MC.then(CC);
-       return MC = zC.catch((() => {})), zC
-     }
- 
-     function SC(CC, zC) {
-       return gC((() => PC(CC, zC)))
-     }
- 
-     function pC(CC, zC, ZC) {
-       return gC((async () => JSON.stringify(await (0, fC.e)()) === JSON.stringify(CC) && (null === zC ? (await GC(), !0) : PC(zC, ZC))))
-     }
-     async function PC(CC, zC) {
-       const ZC = await bC.g.setItem(fC.c, CC);
-       return ZC && YC(CC, zC), ZC
-     }
-     async function GC() {
- ... (5 more removed lines; see GitHub link above)
+       let {
+         fullUrl: ip,
+         largeUrl: cp,
+         alt: op,
+         onClose: Ip
+       } = pp;
+       const Sp = (0, Op.useRef)(null);
+       return (0, Qp.x)("popup", Sp, Ip), (0, Op.useEffect)((() => {
+         function pp(pp) {
+           "Escape" === pp.key && (pp.stopPropagation(), Ip())
+         }
+         return window.addEventListener("keydown", pp, !0), () => {
+           window.removeEventListener("keydown", pp, !0)
+         }
+       }), [Ip]), (0, Xp.createPortal)((0, Mp.jsxs)("div", {
+         ref: Sp,
+ ... (15 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L165-L167` → after: `L578-L589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L578-L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/113.js#L578-L589) · [Before (L165-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/113.js#L165-L167)

```diff
-     function AC(CC, zC) {
-       return "active" === xC(CC, zC).kind
-     }
+     function np(pp) {
+       let {
+         item: ip,
+         packUrl: cp,
+         baselineUrl: op
+       } = pp;
+       const {
+         t: Sp
+       } = (0, dp.H)(), [xp, Lp] = (0, Op.useState)(50), Yp = (0, Op.useRef)(!1), Dp = (0, Op.useRef)(null), {
+         width: Ap,
+         height: Pp
+       } = Ip.u.large;
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L169-L190` → after: `L591-L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L591-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/113.js#L591-L592) · [Before (L169-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/113.js#L169-L190)

```diff
-     function xC(CC, zC) {
-       var ZC;
-       return null === CC ? {
-         kind: "none",
-         reason: "nothingStored"
-       } : iC(CC) ? {
-         kind: "none",
-         reason: "otherApiVersion"
-       } : !1 !== (null === (ZC = CC.validation) || void 0 === ZC ? void 0 : ZC.ok) || CC.validation.fromRecheck ? null === zC ? {
-         kind: "none",
-         reason: "noCompiler"
-       } : eC(CC, zC) ? {
-         kind: "blocked",
-         messageKey: "shaderPack:failedUnchecked"
-       } : CC.validation.ok ? {
-         kind: "active"
- ... (6 more removed lines; see GitHub link above)
+       function Wp(pp) {
+         Lp((ip => (0, lp.h)(ip + pp, 0, 100)))
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L194-L199` → after: `L595-L660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L595-L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/113.js#L595-L660) · [Before (L194-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/113.js#L194-L199)

```diff
-     function JC() {
-       bC.k.setItem(qC, performance.timeOrigin)
-     }
- 
-     function IC() {
-       return bC.k.getItem(qC) === performance.timeOrigin
+       function yp(pp) {
+         const ip = pp.currentTarget.getBoundingClientRect();
+         Lp((0, lp.h)((pp.clientX - ip.left) / ip.width * 100, 0, 100))
+       }
+       return (0, Jp.h)(Dp, {
+         adjust: pp => {
+           Wp(pp * ap)
+         },
+         setFraction: pp => {
+           Lp(100 * pp)
+         },
+         endDrag: () => {}
+       }), (0, Mp.jsxs)("div", {
+         ref: Dp,
+         className: "ShaderPackCompare",
+         "data-pad-slider": "",
+ ... (50 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L203` → after: `L664-L677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L664-L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/113.js#L664-L677) · [Before (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/113.js#L203)

```diff
-       return !(0, wC.i)(CC.manifest.apiVersion)
+       let {
+         side: ip,
+         onClick: cp,
+         children: Op
+       } = pp;
+       return (0, Mp.jsx)("button", {
+         type: "button",
+         className: `ShaderPackStageButton ${ip}`,
+         onClick: cp,
+         children: (0, Mp.jsx)("span", {
+           className: "ShaderPackStageButtonFace SmallTextBold",
+           children: Op
+         })
+       })
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L207-L212` → after: `L692-L736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L692-L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/113.js#L692-L736) · [Before (L207-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/113.js#L207-L212)

```diff
-       return FC ??= CC.Rm((0, oC.shaderPackTextures)()), FC
-     }
- 
-     function eC(CC, zC) {
-       var ZC;
-       return (null === (ZC = CC.validation) || void 0 === ZC ? void 0 : ZC.headerVersion) !== vC(zC)
+       const {
+         userContext: ip
+       } = (0, vp.b)(), [op, Ip] = (0, Op.useState)(null), [Sp, xp] = (0, Op.useState)(!1), [Lp, Yp] = (0, Op.useState)(!1), [Dp, Ap] = (0, Op.useState)(null), Pp = null === pp || void 0 === pp ? void 0 : pp.packId, Wp = null === pp || void 0 === pp ? void 0 : pp.sourceHash;
+       return (0, Op.useEffect)((() => {
+         if (xp(!1), Ap(null), void 0 === Pp) return;
+         let pp = !1;
+         return Promise.all([(0, Hp.hasUsableWebGpuAdapter)(), (0, rp.f)()]).then((ip => {
+           let [cp, Op] = ip;
+           var op;
+           pp || (Ip(cp), xp((null === Op || void 0 === Op || null === (op = Op.listing) || void 0 === op ? void 0 : op.packId) === Pp && Op.listing.sourceHash === Wp))
+         })).catch((ip => {
+           console.error("Failed to check whether this shader pack can be used", ip), pp || Ip(!1)
+         })), () => {
+           pp = !0
+         }
+       }), [Pp, Wp]), {
+ ... (29 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L216-L224` → after: `L740-L768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L740-L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/113.js#L740-L768) · [Before (L216-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/113.js#L216-L224)

```diff
-       return gC((async () => {
-         YC(await (0, fC.e)(!0), CC)
-       }))
-     }
- 
-     function KC() {
-       return gC((async () => {
-         bC.i.removeItem(nC.b)
-       }))
+       let {
+         packUse: ip
+       } = pp;
+       const {
+         t: cp
+       } = (0, dp.H)(), {
+         webGpuUsable: Op,
+         inUse: op,
+         busy: Ip,
+         errorKey: Sp,
+         use: xp
+       } = ip;
+       return (0, Mp.jsxs)("div", {
+         className: "ShaderPackUse",
+         children: [(0, Mp.jsxs)(Ap.o, {
+           disabled: !0 !== Op || op,
+ ... (13 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L313-L325` → after: `L773-L780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L773-L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/113.js#L773-L780) · [Before (L313-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/113.js#L313-L325)

```diff
-       if (!(0, QC.shaderPackNeedsCheck)(CC, zC) || (0, QC.isOtherApiVersion)(CC)) return CC;
-       const wC = await fC(zC, (0, QC.storedShaderPackFiles)(CC));
-       if (!wC) return CC;
-       const bC = !1 === (null === (ZC = CC.validation) || void 0 === ZC ? void 0 : ZC.ok) && !CC.validation.fromRecheck,
-         nC = {
-           ...CC,
-           validation: bC ? wC : {
-             ...wC,
-             fromRecheck: !0
-           }
-         };
-       return await (0, QC.replaceShaderPack)(CC, nC, zC) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), nC
-     }
+       const {
+         t: ip
+       } = (0, dp.H)(), cp = (0, Dp.useNavigatePreserveSearch)(), {
+         packId: Ip
+       } = (0, op.A)(), {
+         userContext: Sp,
+         isUserContextUpdating: xp
+       } = (0, vp.b)(), [Pp, yp] = (0, Op.useState)(null), [Up, Hp] = (0, Op.useState)(null), [ep, jp] = (0, Op.useState)(0), kp = (0, Op.useRef)(0);
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L327-L334` → after: `L782-L844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L782-L844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/113.js#L782-L844) · [Before (L327-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/113.js#L327-L334)

```diff
-     function qC(CC, zC, ZC) {
-       return {
-         headerVersion: (0, QC.pageShaderPackValidationVersion)(CC),
-         ok: 0 === zC.length,
-         errors: zC.slice(0, nC),
-         moreErrors: Math.max(0, zC.length - nC),
-         offInStrict: ZC
-       }
+       function mp() {
+         var pp;
+         null !== (pp = (0, Dp.getPreviousLocation)()) && void 0 !== pp && pp.startsWith(qp.R) ? cp(-1) : cp(qp.R)
+       }(0, wp.e)(mp), (0, Np.b)(), (0, Op.useEffect)((() => {
+         if (xp || void 0 === Ip) return;
+         const pp = ++kp.current;
+         Hp(null), tp.b.getShaderPack(Sp, Ip).then((ip => {
+           kp.current === pp && yp(ip)
+         })).catch((ip => {
+           kp.current === pp && (console.error("Failed to get the shader pack", ip), yp(null), Hp({
+             error: ip
+           }))
+         }))
+       }), [Ip, Sp, xp, ep]);
+       const Rp = () => {
+           jp((pp => pp + 1))
+ ... (47 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L353` → after: `L848-L866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L848-L866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/113.js#L848-L866) · [Before (L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/113.js#L353)

```diff
-       return CC === QC
+       let {
+         item: ip,
+         favourites: cp,
+         packUse: Op
+       } = pp;
+       const op = cp.isFavourite(ip.packId);
+       return (0, Mp.jsxs)("div", {
+         className: "ShaderPackInformationActions",
+         children: [Hp.featureFlags.settings.canUseShaderPacks && (0, Mp.jsx)(sp, {
+           packUse: Op
+         }), (0, Mp.jsx)(Ap.x, {
+           className: "ShaderPackInformationLike",
+           onClick: () => {
+             cp.toggle(ip.packId)
+           },
+           isLiked: !0 === op,
+ ... (3 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L357` → after: `L870-L958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L870-L958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/113.js#L870-L958) · [Before (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/113.js#L357)

```diff
-       return [...CC.features]
+       let {
+         item: ip,
+         ownerPreview: cp,
+         bloxdhubSlug: Op,
+         actions: op
+       } = pp;
+       const {
+         t: xp
+       } = (0, dp.H)(), Lp = (0, Up.o)(), Yp = null === Op ? null : (0, Ip.g)(Op);
+       return (0, Mp.jsxs)("div", {
+         className: "ShaderPackFacts",
+         children: [ip.description && (0, Mp.jsx)("p", {
+           className: "ShaderPackDescription",
+           children: ip.description
+         }), (0, Mp.jsxs)("div", {
+           className: "ShaderPackFeatureList",
+ ... (73 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L364-L370` → after: `L962-L975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L962-L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/113.js#L962-L975) · [Before (L364-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/113.js#L364-L370)

```diff
-       if ("object" !== typeof CC || null === CC || Array.isArray(CC)) return "The pack has no files.";
-       const zC = [];
-       for (const [ZC, QC] of Object.entries(CC)) {
-         if ("string" !== typeof QC) return `${ZC} isn't text.`;
-         zC.push({
-           path: ZC,
-           source: QC
+       let {
+         label: ip,
+         time: cp,
+         now: Op
+       } = pp;
+       const {
+         t: op,
+         selectedLanguage: Ip
+       } = (0, dp.H)(), Sp = new Date(cp);
+       let Lp = Sp.toLocaleDateString();
+       if (Op - cp <= 30 * xp.i) {
+         const pp = (0, dp.p)(Ip.code, "shaderPackListing:timeAgo");
+         Lp = op("shaderPackListing:timeAgo", {
+           time: (0, xp.cb)(pp, cp, Op)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L373-L408` → after: `L978-L987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L978-L987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/113.js#L978-L987) · [Before (L373-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/113.js#L373-L408)

```diff
-       return zC.sort(((CC, zC) => WC(CC.path, zC.path))),
-         function(CC) {
-           if (0 === CC.length) return "The pack has no .wgsl files.";
-           if (CC.length > fC) return `The pack has more than ${fC} .wgsl files.`;
-           const zC = new Set;
-           for (const {
-               path: ZC
-             }
-             of CC) {
-             const CC = MC(ZC);
-             if (null !== CC) return CC;
-             if (zC.has(ZC)) return `The pack has two files at ${ZC}.`;
-             zC.add(ZC)
-           }
-           return NC(CC) > nC ? `The pack's .wgsl files are over ${nC/1024} KB in total.` : null
-         }(zC) ?? zC
- ... (20 more removed lines; see GitHub link above)
+       return (0, Mp.jsx)(Pp.f, {
+         tooltipInner: Sp.toLocaleString(),
+         children: (0, Mp.jsxs)("div", {
+           children: [(0, Mp.jsx)("dt", {
+             children: ip
+           }), (0, Mp.jsx)("dd", {
+             children: Lp
+           })]
+         })
+       })
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L412-L415` → after: `L999-L1037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L999-L1037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/113.js#L999-L1037) · [Before (L412-L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/113.js#L412-L415)

```diff
-       if (!CC.toLowerCase().endsWith(".wgsl")) return `${CC} isn't a .wgsl file.`;
-       if (CC.length > oC) return `A file path is over ${oC} characters.`;
-       if (CC.includes("\\") || /[\u0000-\u001f]/.test(CC)) return `${CC} isn't a valid file path.`;
-       return CC.split("/").some((CC => "" === CC || "." === CC || ".." === CC)) ? `${CC} isn't a valid file path.` : null
+       let {
+         options: ip,
+         value: cp,
+         onChange: Op,
+         ariaLabel: Sp,
+         className: xp,
+         reselectable: Lp = !1,
+         keepsFocus: Yp = !1,
+         padTabs: Dp
+       } = pp;
+       const Ap = void 0 !== Dp;
+       return (0, Ip.jsx)("div", {
+         className: op()("SegmentedToggle", xp),
+         role: "group",
+         "aria-label": Sp,
+         "data-pad-tabs": Dp,
+ ... (23 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L417-L494` → after: `L1039-L1066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R1039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L1039-L1066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/113.js#L1039-L1066) · [Before (L417-L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/113.js#L417-L494)

```diff
-     const gC = /^(.*)\[rot\[([1-4])$/;
- 
-     function SC(CC, zC) {
-       let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
-       const QC = new Map;
-       zC.forEach(((CC, zC) => {
-         let {
-           numAnimStates: ZC,
-           animStartIdx: wC
-         } = CC;
-         for (let bC = 1; bC < ZC; bC++) QC.set(wC + bC - 1, zC)
-       }));
-       const wC = Object.entries(CC),
-         bC = new Map;
-       for (const [SC, pC] of wC) {
-         const CC = gC.exec(SC);
- ... (62 more removed lines; see GitHub link above)
+   },
+   5149: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Ip,
+       h: () => Sp
+     });
+     var Op = cp(62);
+     const op = new WeakMap,
+       Ip = pp => {
+         var ip;
+         const cp = pp.closest("[data-pad-slider]");
+         return cp && null !== (ip = op.get(cp)) && void 0 !== ip ? ip : null
+       },
+       Sp = (pp, ip) => {
+         const cp = (0, Op.useRef)(ip);
+         cp.current = ip, (0, Op.useEffect)((() => {
+ ... (12 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L496-L515` → after: `L1068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R1068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L1068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/113.js#L1068) · [Before (L496-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/113.js#L496-L515)

```diff
-         } else NC.set(ZC, SC + 1)
-       }
-       for (const gC of NC.keys()) MC.delete(gC);
-       for (const [gC, SC] of ZC) {
-         const CC = NC.get(SC);
-         void 0 === CC || NC.has(gC) || (NC.set(gC, CC), MC.delete(gC))
-       }
-       return {
-         named: [...NC].sort(((CC, zC) => {
-           let [ZC] = CC, [QC] = zC;
-           return ZC < QC ? -1 : ZC > QC ? 1 : 0
-         })).map((CC => {
-           let [zC, ZC] = CC;
-           return {
-             name: zC,
-             id: ZC
- ... (4 more removed lines; see GitHub link above)
+         }), [pp])
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/114.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/114.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/114.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/114.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/114.js#L2)

```diff
- export const ids = [114, 116, 136, 137];
+ export const ids = [114];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/114.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/114.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/114.js#L4)

```diff
-   4998: (CC, zC, ZC) => {
+   5173: (pp, ip, cp) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/114.js` (Changed code · before: `L6-L8` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/114.js#L6-L7) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/114.js#L6-L8)

```diff
-       b: () => QC.j,
-       f: () => wC,
-       i: () => QC.q
+       d: () => Dp,
+       e: () => Yp
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/114.js` (Changed code · before: `L10` → after: `L9-L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1) · [After (L9-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/114.js#L9-L340) · [Before (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/114.js#L10)

```diff
-     var QC = ZC(5002);
+     var Op = cp(62),
+       op = cp(1480),
+       Ip = cp(1201),
+       Sp = cp(104),
+       xp = cp(3235),
+       Lp = cp(1112);
+ 
+     function Yp() {
+       return !(0, Sp.isMobile)()
+     }
+ 
+     function Dp(pp) {
+       let {
+         disabled: ip,
+         openFolderPicker: cp,
+         onFiles: Sp
+ ... (316 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/114.js` (Changed code · before: `L16-L151` → after: `L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1R346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1) · [After (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/114.js#L346) · [Before (L16-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/114.js#L16-L151)

```diff
-   6658: (CC, zC, ZC) => {
-     ZC.r(zC), ZC.d(zC, {
-       forgetShaderPackActiveHint: () => KC,
-       isOtherApiVersion: () => iC,
-       isShaderPackActive: () => AC,
-       isShaderPackChangePending: () => IC,
-       markShaderPackChangePending: () => JC,
-       pageShaderPackValidationVersion: () => vC,
-       reconcileStoredShaderPackHint: () => hC,
-       removeShaderPack: () => RC,
-       replaceShaderPack: () => pC,
-       saveShaderPack: () => SC,
-       shaderPackNeedsCheck: () => eC,
-       storedPackOutcome: () => xC,
-       storedShaderPackFiles: () => NC,
-       toStoredShaderPack: () => WC
- ... (120 more removed lines; see GitHub link above)
+   5167: (pp, ip, cp) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/114.js` (Changed code · before: `L154-L192` → after: `L349-L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1R349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1) · [After (L349-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/114.js#L349-L350) · [Before (L154-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/114.js#L154-L192)

```diff
-       e: () => bC
-     });
-     var QC = ZC(38);
-     const wC = "shaderPack";
-     async function bC() {
-       var CC;
-       let zC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-       return null !== (CC = await QC.g.getItem(wC, zC)) && void 0 !== CC ? CC : null
-     }
-   },
-   6630: (CC, zC, ZC) => {
-     ZC.r(zC), ZC.d(zC, {
-       loadShaderPackTextures: () => nC,
-       shaderPackTextures: () => fC
-     });
-     var QC = ZC(5002);
- ... (23 more removed lines; see GitHub link above)
+       e: () => Sp,
+       f: () => Op,
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/114.js` (Changed code · before: `L196-L197` → after: `L353-L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1R353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1) · [After (L353-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/114.js#L353-L354) · [Before (L196-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/114.js#L196-L197)

```diff
-       q: () => wC,
-       r: () => bC,
+       o: () => op,
+       p: () => Ip,
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/114.js` (Changed code · before: `L199-L200` → after: `L356-L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1R356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1) · [After (L356-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/114.js#L356-L357) · [Before (L199-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/114.js#L199-L200)

```diff
-       w: () => FC,
-       y: () => NC
+       v: () => Dp,
+       z: () => Pp
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/114.js` (Changed code · before: `L219` → after: `L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1R376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1) · [After (L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/114.js#L376) · [Before (L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/114.js#L219)

```diff
-         if ("string" !== typeof QC) return `${ZC} isn't text.`;
+         if ("string" !== typeof Op) return `${cp} isn't text.`;
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/114.js` (Changed code · before: `L228` → after: `L385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1R385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1) · [After (L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/114.js#L385) · [Before (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/114.js#L228)

```diff
-           if (CC.length > fC) return `The pack has more than ${fC} .wgsl files.`;
+           if (pp.length > xp) return `The pack has more than ${xp} .wgsl files.`;
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/114.js` (Changed code · before: `L236` → after: `L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1R393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1) · [After (L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/114.js#L393) · [Before (L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/114.js#L236)

```diff
-             if (zC.has(ZC)) return `The pack has two files at ${ZC}.`;
+             if (ip.has(cp)) return `The pack has two files at ${cp}.`;
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/114.js` (Changed code · before: `L239` → after: `L396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1R396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1) · [After (L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/114.js#L396) · [Before (L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/114.js#L239)

```diff
-           return NC(CC) > nC ? `The pack's .wgsl files are over ${nC/1024} KB in total.` : null
+           return Pp(pp) > Sp ? `The pack's .wgsl files are over ${Sp/1024} KB in total.` : null
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/114.js` (Changed code · before: `L264-L267` → after: `L421-L424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1R421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1) · [After (L421-L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/114.js#L421-L424) · [Before (L264-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/114.js#L264-L267)

```diff
-       if (!CC.toLowerCase().endsWith(".wgsl")) return `${CC} isn't a .wgsl file.`;
-       if (CC.length > oC) return `A file path is over ${oC} characters.`;
-       if (CC.includes("\\") || /[\u0000-\u001f]/.test(CC)) return `${CC} isn't a valid file path.`;
-       return CC.split("/").some((CC => "" === CC || "." === CC || ".." === CC)) ? `${CC} isn't a valid file path.` : null
+       if (!pp.toLowerCase().endsWith(".wgsl")) return `${pp} isn't a .wgsl file.`;
+       if (pp.length > Lp) return `A file path is over ${Lp} characters.`;
+       if (pp.includes("\\") || /[\u0000-\u001f]/.test(pp)) return `${pp} isn't a valid file path.`;
+       return pp.split("/").some((pp => "" === pp || "." === pp || ".." === pp)) ? `${pp} isn't a valid file path.` : null
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/114.js` (Changed code · before: `L300` → after: `L457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1R457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1) · [After (L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/114.js#L457) · [Before (L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/114.js#L300)

```diff
-           return (zC[ZC]?.numAnimStates ?? 0) > 1 && !fC.has(QC) ? QC : CC
+           return (ip[cp]?.numAnimStates ?? 0) > 1 && !xp.has(Op) ? Op : pp
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/115.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/115.js` (24 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6)

#### 1. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/115.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/115.js#L2)

```diff
- export const ids = [115, 116, 136];
+ export const ids = [115, 118, 138, 139];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/115.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/115.js#L4)

```diff
-   4998: (CC, zC, ZC) => {
+   5159: (pp, ip, cp) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L6-L8` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/115.js#L6-L8) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/115.js#L6-L8)

```diff
-       b: () => QC.j,
-       f: () => wC,
-       i: () => QC.q
+       e: () => Op.f,
+       g: () => op,
+       k: () => Op.o
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L10` → after: `L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/115.js#L10) · [Before (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/115.js#L10)

```diff
-     var QC = ZC(5002);
+     var Op = cp(5167);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L16` → after: `L16-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L16-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/115.js#L16-L96) · [Before (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/115.js#L16)

```diff
-   39051: (CC, zC, ZC) => {
+   40674: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Ap,
+       installListedShaderPack: () => Dp
+     });
+     var Op = cp(6704),
+       op = cp(5167),
+       Ip = cp(1211),
+       Sp = cp(6758),
+       xp = cp(5159),
+       Lp = cp(6798),
+       Yp = cp(6792);
+     async function Dp(pp) {
+       const ip = await (0, Sp.loadPageShaderPackCompiler)();
+       if (null === ip) return {
+         kind: "failed",
+ ... (65 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L18-L21` → after: `L98-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L98-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/115.js#L98-L111) · [Before (L18-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/115.js#L18-L21)

```diff
-       ShaderPackPage: () => oC,
-       harnessShaderPackMode: () => NC,
-       setHarnessUrlShaderPack: () => WC,
-       shaderPackPage: () => FC
+       forgetShaderPackActiveHint: () => Cp,
+       isOtherApiVersion: () => mp,
+       isShaderPackActive: () => dp,
+       isShaderPackChangePending: () => kp,
+       markShaderPackChangePending: () => jp,
+       pageShaderPackValidationVersion: () => Rp,
+       reconcileStoredShaderPackHint: () => Mp,
+       removeShaderPack: () => Hp,
+       replaceShaderPack: () => wp,
+       saveShaderPack: () => Up,
+       shaderPackNeedsCheck: () => qp,
+       storedPackOutcome: () => ep,
+       storedShaderPackFiles: () => Pp,
+       toStoredShaderPack: () => Ap
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L23-L40` → after: `L113-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L113-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/115.js#L113-L128) · [Before (L23-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/115.js#L23-L40)

```diff
-     var QC = ZC(77),
-       wC = ZC(38),
-       bC = (ZC(3436), ZC(4998), ZC(3432)),
-       nC = ZC(6660);
-     ZC(6630);
-     const fC = {
-       status: "none"
-     };
-     class oC {
-       constructor() {
-         this.stored = null, this.compiling = null, this.pagePack = null, this.resolved = null
-       }
-       preload() {
-         if (null === this.stored) {
-           if ((0, bC.f)(QC.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), qC().then((CC => {
-             CC && wC.i.removeItem(bC.b)
- ... (2 more removed lines; see GitHub link above)
+     var Op = cp(5167),
+       op = cp(5159),
+       Ip = cp(44),
+       Sp = cp(3564),
+       xp = cp(6804),
+       Lp = cp(6772);
+     const Yp = "shaderPackChangePending";
+     let Dp = null;
+ 
+     function Ap(pp, ip, cp) {
+       return {
+         manifest: pp.manifest,
+         files: (0, Op.v)(pp.files),
+         validation: ip,
+         ...cp && {
+           listing: cp
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L42-L77` → after: `L130-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L130-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/115.js#L130-L155) · [Before (L42-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/115.js#L42-L77)

```diff
-         return this.stored
-       }
-       prefetchHint() {
-         return (0, bC.e)(QC.featureFlags.settings.canUseShaderPacks)
-       }
-       async loadActive() {
-         const CC = await this.load();
-         return "active" === CC.status ? CC.pack : null
-       }
-       load() {
-         return this.pagePack ??= this.read().catch((CC => (console.error("Failed to load the shader pack", CC), fC))).then((CC => (this.resolved ??= CC, CC))), this.pagePack
-       }
-       hasNone() {
-         var CC;
-         return "none" === (null === (CC = this.resolved) || void 0 === CC ? void 0 : CC.status)
-       }
- ... (20 more removed lines; see GitHub link above)
+       }
+     }
+ 
+     function Pp(pp) {
+       return Object.keys(pp.files).map((ip => ({
+         path: ip,
+         source: pp.files[ip]
+       })))
+     }
+     let Wp = Promise.resolve();
+ 
+     function yp(pp) {
+       const ip = Wp.then(pp);
+       return Wp = ip.catch((() => {})), ip
+     }
+ 
+ ... (10 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L80-L90` → after: `L158-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L158-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/115.js#L158-L159) · [Before (L80-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/115.js#L80-L90)

```diff
-       if (!(0, bC.g)(QC.featureFlags.settings.canUseShaderPacks)) return null;
-       try {
-         const CC = await (0, nC.e)(!0);
-         return CC || wC.i.setItem(bC.b, !1), CC
-       } catch (CC) {
-         return console.error("Failed to read the stored shader pack", CC), wC.i.removeItem(bC.b), null
-       }
-     }
-     const FC = new oC;
- 
-     function WC(CC, zC) {}
+       await Ip.g.removeItem(xp.e), Ip.h.removeItem(Sp.d)
+     }
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L93` → after: `L162-L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L162-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/115.js#L162-L228) · [Before (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/115.js#L93)

```diff
-       return null
+       return yp(tp)
+     }
+ 
+     function dp(pp, ip) {
+       return "active" === ep(pp, ip).kind
+     }
+ 
+     function ep(pp, ip) {
+       var cp;
+       return null === pp ? {
+         kind: "none",
+         reason: "nothingStored"
+       } : mp(pp) ? {
+         kind: "none",
+         reason: "otherApiVersion"
+       } : !1 !== (null === (cp = pp.validation) || void 0 === cp ? void 0 : cp.ok) || pp.validation.fromRecheck ? null === ip ? {
+ ... (51 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L96-L109` → after: `L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/115.js#L231) · [Before (L96-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/115.js#L96-L109)

```diff
-   6660: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       c: () => wC,
-       e: () => bC
-     });
-     var QC = ZC(38);
-     const wC = "shaderPack";
-     async function bC() {
-       var CC;
-       let zC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-       return null !== (CC = await QC.g.getItem(wC, zC)) && void 0 !== CC ? CC : null
-     }
-   },
-   6630: (CC, zC, ZC) => {
+   6772: (pp, ip, cp) => {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L114` → after: `L236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/115.js#L236) · [Before (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/115.js#L114)

```diff
-     var QC = ZC(5002);
+     var Op = cp(5167);
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L119` → after: `L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/115.js#L241) · [Before (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/115.js#L119)

```diff
-       return bC ??= Promise.all([ZC.e(72), ZC.e(188)]).then((() => ZC(40313))).then((CC => {
+       return Ip ??= Promise.all([cp.e(73), cp.e(190)]).then((() => cp(40670))).then((pp => {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L125` → after: `L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/115.js#L247) · [Before (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/115.js#L125)

```diff
-         return wC ??= (0, QC.k)(ZC, bC, zC), wC
+         return op ??= (0, Op.j)(cp, Ip, ip), op
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L134` → after: `L256-L337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L256-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/115.js#L256-L337) · [Before (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/115.js#L134)

```diff
-   5002: (CC, zC, ZC) => {
+   6792: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Lp,
+       h: () => xp
+     });
+     var Op = cp(6798),
+       op = cp(6772),
+       Ip = cp(118);
+     const Sp = 100;
+     async function xp(pp, ip) {
+       var cp;
+       let Op = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (cp = navigator.gpu) && void 0 !== cp ? cp : null;
+       const Sp = pp.ipp(ip, (0, op.shaderPackTextures)());
+       if (Sp.errors.length > 0) return Yp(pp, Sp.errors, Sp.offInStrict);
+       const xp = await async function(pp) {
+         if (!pp) return null;
+ ... (66 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L137` → after: `L340-L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L340-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/115.js#L340-L341) · [Before (L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/115.js#L137)

```diff
-       g: () => nC,
+       e: () => Sp,
+       f: () => Op,
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L141-L142` → after: `L344-L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L344-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/115.js#L344-L345) · [Before (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/115.js#L141-L142)

```diff
-       q: () => wC,
-       r: () => bC,
+       o: () => op,
+       p: () => Ip,
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L144-L145` → after: `L347-L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L347-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/115.js#L347-L348) · [Before (L144-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/115.js#L144-L145)

```diff
-       w: () => FC,
-       y: () => NC
+       v: () => Dp,
+       z: () => Pp
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L164` → after: `L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/115.js#L367) · [Before (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/115.js#L164)

```diff
-         if ("string" !== typeof QC) return `${ZC} isn't text.`;
+         if ("string" !== typeof Op) return `${cp} isn't text.`;
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L173` → after: `L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/115.js#L376) · [Before (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/115.js#L173)

```diff
-           if (CC.length > fC) return `The pack has more than ${fC} .wgsl files.`;
+           if (pp.length > xp) return `The pack has more than ${xp} .wgsl files.`;
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L181` → after: `L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/115.js#L384) · [Before (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/115.js#L181)

```diff
-             if (zC.has(ZC)) return `The pack has two files at ${ZC}.`;
+             if (ip.has(cp)) return `The pack has two files at ${cp}.`;
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L184` → after: `L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/115.js#L387) · [Before (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/115.js#L184)

```diff
-           return NC(CC) > nC ? `The pack's .wgsl files are over ${nC/1024} KB in total.` : null
+           return Pp(pp) > Sp ? `The pack's .wgsl files are over ${Sp/1024} KB in total.` : null
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L209-L212` → after: `L412-L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L412-L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/115.js#L412-L415) · [Before (L209-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/115.js#L209-L212)

```diff
-       if (!CC.toLowerCase().endsWith(".wgsl")) return `${CC} isn't a .wgsl file.`;
-       if (CC.length > oC) return `A file path is over ${oC} characters.`;
-       if (CC.includes("\\") || /[\u0000-\u001f]/.test(CC)) return `${CC} isn't a valid file path.`;
-       return CC.split("/").some((CC => "" === CC || "." === CC || ".." === CC)) ? `${CC} isn't a valid file path.` : null
+       if (!pp.toLowerCase().endsWith(".wgsl")) return `${pp} isn't a .wgsl file.`;
+       if (pp.length > Lp) return `A file path is over ${Lp} characters.`;
+       if (pp.includes("\\") || /[\u0000-\u001f]/.test(pp)) return `${pp} isn't a valid file path.`;
+       return pp.split("/").some((pp => "" === pp || "." === pp || ".." === pp)) ? `${pp} isn't a valid file path.` : null
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L245` → after: `L448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/115.js#L448) · [Before (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/115.js#L245)

```diff
-           return (zC[ZC]?.numAnimStates ?? 0) > 1 && !fC.has(QC) ? QC : CC
+           return (ip[cp]?.numAnimStates ?? 0) > 1 && !xp.has(Op) ? Op : pp
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/116.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/116.js` (15 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/116.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/116.js#L2)

```diff
- export const ids = [116, 136];
+ export const ids = [116, 118, 138, 139];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L4` → after: `L4-L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L4-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/116.js#L4-L164) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/116.js#L4)

```diff
-   6630: (CC, zC, ZC) => {
+   5159: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Op.f,
+       g: () => op,
+       k: () => Op.o
+     });
+     var Op = cp(5167);
+     const op = [!1, !0].flatMap((pp => ["terrain", "liquid", "model"].map((ip => ({
+       strict: pp,
+       program: ip
+     })))))
+   },
+   6798: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       forgetShaderPackActiveHint: () => Cp,
+       isOtherApiVersion: () => mp,
+ ... (145 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L9` → after: `L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/116.js#L169) · [Before (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/116.js#L9)

```diff
-     var QC = ZC(5002);
+     var Op = cp(5167);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L14` → after: `L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/116.js#L174) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/116.js#L14)

```diff
-       return bC ??= Promise.all([ZC.e(72), ZC.e(188)]).then((() => ZC(40313))).then((CC => {
+       return Ip ??= Promise.all([cp.e(73), cp.e(190)]).then((() => cp(40670))).then((pp => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L20` → after: `L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/116.js#L180) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/116.js#L20)

```diff
-         return wC ??= (0, QC.k)(ZC, bC, zC), wC
+         return op ??= (0, Op.j)(cp, Ip, ip), op
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L29` → after: `L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/116.js#L189) · [Before (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/116.js#L29)

```diff
-   5002: (CC, zC, ZC) => {
+   5167: (pp, ip, cp) => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L32` → after: `L192-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L192-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/116.js#L192-L193) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/116.js#L32)

```diff
-       g: () => nC,
+       e: () => Sp,
+       f: () => Op,
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L36-L37` → after: `L196-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L196-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/116.js#L196-L197) · [Before (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/116.js#L36-L37)

```diff
-       q: () => wC,
-       r: () => bC,
+       o: () => op,
+       p: () => Ip,
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L39-L40` → after: `L199-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L199-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/116.js#L199-L200) · [Before (L39-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/116.js#L39-L40)

```diff
-       w: () => FC,
-       y: () => NC
+       v: () => Dp,
+       z: () => Pp
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L59` → after: `L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/116.js#L219) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/116.js#L59)

```diff
-         if ("string" !== typeof QC) return `${ZC} isn't text.`;
+         if ("string" !== typeof Op) return `${cp} isn't text.`;
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L68` → after: `L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/116.js#L228) · [Before (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/116.js#L68)

```diff
-           if (CC.length > fC) return `The pack has more than ${fC} .wgsl files.`;
+           if (pp.length > xp) return `The pack has more than ${xp} .wgsl files.`;
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L76` → after: `L236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/116.js#L236) · [Before (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/116.js#L76)

```diff
-             if (zC.has(ZC)) return `The pack has two files at ${ZC}.`;
+             if (ip.has(cp)) return `The pack has two files at ${cp}.`;
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L79` → after: `L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/116.js#L239) · [Before (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/116.js#L79)

```diff
-           return NC(CC) > nC ? `The pack's .wgsl files are over ${nC/1024} KB in total.` : null
+           return Pp(pp) > Sp ? `The pack's .wgsl files are over ${Sp/1024} KB in total.` : null
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L104-L107` → after: `L264-L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L264-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/116.js#L264-L267) · [Before (L104-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/116.js#L104-L107)

```diff
-       if (!CC.toLowerCase().endsWith(".wgsl")) return `${CC} isn't a .wgsl file.`;
-       if (CC.length > oC) return `A file path is over ${oC} characters.`;
-       if (CC.includes("\\") || /[\u0000-\u001f]/.test(CC)) return `${CC} isn't a valid file path.`;
-       return CC.split("/").some((CC => "" === CC || "." === CC || ".." === CC)) ? `${CC} isn't a valid file path.` : null
+       if (!pp.toLowerCase().endsWith(".wgsl")) return `${pp} isn't a .wgsl file.`;
+       if (pp.length > Lp) return `A file path is over ${Lp} characters.`;
+       if (pp.includes("\\") || /[\u0000-\u001f]/.test(pp)) return `${pp} isn't a valid file path.`;
+       return pp.split("/").some((pp => "" === pp || "." === pp || ".." === pp)) ? `${pp} isn't a valid file path.` : null
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L140` → after: `L300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/116.js#L300) · [Before (L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/116.js#L140)

```diff
-           return (zC[ZC]?.numAnimStates ?? 0) > 1 && !fC.has(QC) ? QC : CC
+           return (ip[cp]?.numAnimStates ?? 0) > 1 && !xp.has(Op) ? Op : pp
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/117.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/117.js` (38 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc)

#### 1. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L3` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/117.js#L2) · [Before (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/117.js#L3)

```diff
- export const ids = [117];
+ export const ids = [117, 118, 138];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L5-L18148` → after: `L4-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/117.js#L4-L8) · [Before (L5-L18148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/117.js#L5-L18148)

```diff
-   6220: function(CC, zC, ZC) {
-     var QC;
-     ! function() {
-       var wC, bC = 1e9,
-         nC = {
-           precision: 20,
-           rounding: 4,
-           toExpNeg: -7,
-           toExpPos: 21,
-           LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
-         },
-         fC = !0,
-         oC = "[DecimalError] ",
-         qC = oC + "Invalid argument: ",
-         FC = oC + "Exponent out of range: ",
-         WC = Math.floor,
- ... (18128 more removed lines; see GitHub link above)
+   5159: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Op.f,
+       g: () => op,
+       k: () => Op.o
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L18150-L18278` → after: `L10-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L10-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/117.js#L10-L27) · [Before (L18150-L18278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/117.js#L18150-L18278)

```diff
-     var Sb = ZC(6231),
-       pb = ZC(6106);
- 
-     function Pb(CC) {
-       for (var zC = CC.length, ZC = new Array(zC); --zC >= 0;) ZC[zC] = zC;
-       return ZC
-     }
- 
-     function Gb(CC, zC) {
-       return CC[zC]
-     }
- 
-     function Rb(CC) {
-       const zC = [];
-       return zC.key = CC, zC
-     }
- ... (113 more removed lines; see GitHub link above)
+     var Op = cp(5167);
+     const op = [!1, !0].flatMap((pp => ["terrain", "liquid", "model"].map((ip => ({
+       strict: pp,
+       program: ip
+     })))))
+   },
+   39396: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       ShaderPackPage: () => Lp,
+       harnessShaderPackMode: () => Pp,
+       setHarnessUrlShaderPack: () => Ap,
+       shaderPackPage: () => Dp
+     });
+     var Op = cp(104),
+       op = cp(44),
+       Ip = (cp(3572), cp(5159), cp(3564)),
+ ... (2 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L18280-L18298` → after: `L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/117.js#L29) · [Before (L18280-L18298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/117.js#L18280-L18298)

```diff
-       rangeStep: function(CC, zC, ZC) {
-         for (var QC = new(Db())(CC), wC = 0, bC = []; QC.lt(zC) && wC < 1e5;) bC.push(QC.toNumber()), QC = QC.add(ZC), wC++;
-         return bC
-       },
-       getDigitCount: function(CC) {
-         return 0 === CC ? 1 : Math.floor(new(Db())(CC).abs().log(10).toNumber()) + 1
-       },
-       interpolateNumber: Vb((function(CC, zC, ZC) {
-         var QC = +CC;
-         return QC + ZC * (+zC - QC)
-       })),
-       uninterpolateNumber: Vb((function(CC, zC, ZC) {
-         var QC = zC - +CC;
-         return (ZC - CC) / (QC = QC || 1 / 0)
-       })),
-       uninterpolateTruncation: Vb((function(CC, zC, ZC) {
- ... (3 more removed lines; see GitHub link above)
+       status: "none"
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L18300-L19076` → after: `L31-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L31-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/117.js#L31-L33) · [Before (L18300-L19076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/117.js#L18300-L19076)

```diff
- 
-     function nn(CC) {
-       return function(CC) {
-         if (Array.isArray(CC)) return Fn(CC)
-       }(CC) || function(CC) {
-         if ("undefined" !== typeof Symbol && Symbol.iterator in Object(CC)) return Array.from(CC)
-       }(CC) || qn(CC) || function() {
-         throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
-       }()
-     }
- 
-     function fn(CC, zC) {
-       return function(CC) {
-         if (Array.isArray(CC)) return CC
-       }(CC) || function(CC, zC) {
-         if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(CC))) return;
- ... (761 more removed lines; see GitHub link above)
+     class Lp {
+       constructor() {
+         this.stored = null, this.compiling = null, this.pagePack = null, this.resolved = null
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L19078-L19157` → after: `L35-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L35-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/117.js#L35-L40) · [Before (L19078-L19157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/117.js#L19078-L19157)

```diff
-       var oC = Kn(wC, vb()(nC) ? zC.dataKey : nC);
-       return vb()(oC) ? null : zC.scale(oC)
-     }
-     var Zf = function(CC) {
-         var zC = CC.axis,
-           ZC = CC.ticks,
-           QC = CC.offset,
-           wC = CC.bandSize,
-           bC = CC.entry,
-           nC = CC.index;
-         if ("category" === zC.type) return ZC[nC] ? ZC[nC].coordinate + QC : null;
-         var fC = Kn(bC, zC.dataKey, zC.domain[nC]);
-         return vb()(fC) ? null : zC.scale(fC) - wC / 2 + QC
-       },
-       Qf = function(CC) {
-         var zC = CC.numericAxis,
- ... (64 more removed lines; see GitHub link above)
+       preload() {
+         if (null === this.stored) {
+           if ((0, Ip.f)(Op.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), Yp().then((pp => {
+             pp && op.h.removeItem(Ip.d)
+           })), this.stored;
+           this.prefetchHint() && this.compiler().catch((() => {})), this.stored = this.readStored()
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L19159-L19184` → after: `L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/117.js#L42) · [Before (L19159-L19184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/117.js#L19159-L19184)

```diff
-         return ZC ? void 0 : 0
-       },
-       Ff = function(CC, zC, ZC) {
-         return CC && CC.length ? sb()(CC, mb()(ZC, "type.defaultProps.domain")) ? zC : CC : zC
-       },
-       Wf = function(CC, zC) {
-         var ZC = CC.type.defaultProps ? en(en({}, CC.type.defaultProps), CC.props) : CC.props,
-           QC = ZC.dataKey,
-           wC = ZC.name,
-           bC = ZC.unit,
-           nC = ZC.formatter,
-           fC = ZC.tooltipType,
-           oC = ZC.chartType,
-           qC = ZC.hide;
-         return en(en({}, (0, Rn.c)(CC, !1)), {}, {
-           dataKey: QC,
- ... (10 more removed lines; see GitHub link above)
+         return this.stored
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L19186-L19208` → after: `L44-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L44-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/117.js#L44-L45) · [Before (L19186-L19208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/117.js#L19186-L19208)

```diff
-   },
-   6138: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       b: () => NC,
-       d: () => WC
-     });
-     var QC = ZC(5983);
- 
-     function wC(CC) {
-       return wC = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(CC) {
-         return typeof CC
-       } : function(CC) {
-         return CC && "function" == typeof Symbol && CC.constructor === Symbol && CC !== Symbol.prototype ? "symbol" : typeof CC
-       }, wC(CC)
-     }
- 
- ... (7 more removed lines; see GitHub link above)
+       prefetchHint() {
+         return (0, Ip.e)(Op.featureFlags.settings.canUseShaderPacks)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L19210-L19220` → after: `L47-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L47-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/117.js#L47-L49) · [Before (L19210-L19220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/117.js#L19210-L19220)

```diff
-       return ZC
-     }
- 
-     function nC(CC) {
-       for (var zC = 1; zC < arguments.length; zC++) {
-         var ZC = null != arguments[zC] ? arguments[zC] : {};
-         zC % 2 ? bC(Object(ZC), !0).forEach((function(zC) {
-           fC(CC, zC, ZC[zC])
-         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(CC, Object.getOwnPropertyDescriptors(ZC)) : bC(Object(ZC)).forEach((function(zC) {
-           Object.defineProperty(CC, zC, Object.getOwnPropertyDescriptor(ZC, zC))
-         }))
+       async loadActive() {
+         const pp = await this.load();
+         return "active" === pp.status ? pp.pack : null
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L19222-L19298` → after: `L51-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/117.js#L51-L52) · [Before (L19222-L19298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/117.js#L19222-L19298)

```diff
-       return CC
-     }
- 
-     function fC(CC, zC, ZC) {
-       return (zC = function(CC) {
-         var zC = function(CC, zC) {
-           if ("object" != wC(CC) || !CC) return CC;
-           var ZC = CC[Symbol.toPrimitive];
-           if (void 0 !== ZC) {
-             var QC = ZC.call(CC, zC || "default");
-             if ("object" != wC(QC)) return QC;
-             throw new TypeError("@@toPrimitive must return a primitive value.")
-           }
-           return ("string" === zC ? String : Number)(CC)
-         }(CC, "string");
-         return "symbol" == wC(zC) ? zC : zC + ""
- ... (61 more removed lines; see GitHub link above)
+       load() {
+         return this.pagePack ??= this.read().catch((pp => (console.error("Failed to load the shader pack", pp), xp))).then((pp => (this.resolved ??= pp, pp))), this.pagePack
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L19300-L19395` → after: `L54-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L54-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/117.js#L54-L72) · [Before (L19300-L19395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/117.js#L19300-L19395)

```diff
-   },
-   5136: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       A: () => MC,
-       D: () => RC,
-       c: () => eC,
-       d: () => iC,
-       e: () => xC,
-       i: () => vC,
-       j: () => AC,
-       l: () => JC,
-       n: () => IC,
-       o: () => pC,
-       q: () => PC,
-       u: () => SC,
-       y: () => gC
- ... (80 more removed lines; see GitHub link above)
+       hasNone() {
+         var pp;
+         return "none" === (null === (pp = this.resolved) || void 0 === pp ? void 0 : pp.status)
+       }
+       block(pp) {
+         this.resolved = {
+           status: "blocked",
+           messageKey: pp,
+           variants: null
+         }, this.pagePack = Promise.resolve(this.resolved)
+       }
+       compiler() {
+         return this.compiling ??= Promise.all([cp.e(78), cp.e(136), cp.e(142)]).then((() => cp(41994))).then((pp => (pp.prefetchCompiler(), pp))), this.compiling
+       }
+       async readStored() {
+         const pp = await Yp();
+ ... (3 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L19397-L19414` → after: `L74-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L74-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/117.js#L74-L76) · [Before (L19397-L19414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/117.js#L19397-L19414)

```diff
-   },
-   5983: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       c: () => QC
-     });
-     var QC = {
-       isSsr: !("undefined" !== typeof window && window.document && window.document.createElement && window.setTimeout),
-       get: function(CC) {
-         return QC[CC]
-       },
-       set: function(CC, zC) {
-         if ("string" === typeof CC) QC[CC] = zC;
-         else {
-           var ZC = Object.keys(CC);
-           ZC && ZC.length && ZC.forEach((function(zC) {
-             QC[zC] = CC[zC]
- ... (2 more removed lines; see GitHub link above)
+       async read() {
+         const pp = await this.preload();
+         return pp ? (await this.compiler()).compilePagePack(pp) : xp
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L19417-L19425` → after: `L79-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L79-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/117.js#L79-L93) · [Before (L19417-L19425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/117.js#L19417-L19425)

```diff
-   },
-   6246: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       c: () => QC
-     });
-     var QC = function(CC, zC) {
-       var ZC = CC.alwaysShow,
-         QC = CC.ifOverflow;
-       return ZC && (QC = "extendDomain"), QC === zC
+     async function Yp() {
+       if (!(0, Ip.i)(Op.featureFlags.settings.canUseShaderPacks)) return null;
+       try {
+         const pp = await (0, Sp.f)(!0);
+         return pp || op.h.setItem(Ip.d, !1), pp
+       } catch (pp) {
+         return console.error("Failed to read the stored shader pack", pp), op.h.removeItem(Ip.d), null
+       }
+     }
+     const Dp = new Lp;
+ 
+     function Ap(pp, ip) {}
+ 
+     function Pp() {
+       return null
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L19428` → after: `L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/117.js#L96) · [Before (L19428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/117.js#L19428)

```diff
-   5417: (CC, zC, ZC) => {
+   6804: (pp, ip, cp) => {
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L19430` → after: `L98-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L98-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/117.js#L98-L99) · [Before (L19430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/117.js#L19430)

```diff
-       c: () => QC
+       e: () => op,
+       f: () => Ip
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L19432-L19433` → after: `L101-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L101-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/117.js#L101-L106) · [Before (L19432-L19433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/117.js#L19432-L19433)

```diff
-     var QC = function(CC, zC) {
-       for (var ZC = arguments.length, QC = new Array(ZC > 2 ? ZC - 2 : 0), wC = 2; wC < ZC; wC++) QC[wC - 2] = arguments[wC]
+     var Op = cp(44);
+     const op = "shaderPack";
+     async function Ip() {
+       var pp;
+       let ip = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+       return null !== (pp = await Op.g.getItem(op, ip)) && void 0 !== pp ? pp : null
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L19436-L19440` → after: `L109-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L109-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/117.js#L109-L112) · [Before (L19436-L19440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/117.js#L19436-L19440)

```diff
-   6244: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       d: () => fC,
-       g: () => NC,
-       h: () => qC
+   6772: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       loadShaderPackTextures: () => Sp,
+       shaderPackTextures: () => xp
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L19442-L19450` → after: `L114-L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L114-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/117.js#L114-L116) · [Before (L19442-L19450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/117.js#L19442-L19450)

```diff
-     ZC(5414), ZC(48), ZC(5251);
- 
-     function QC(CC) {
-       return QC = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(CC) {
-         return typeof CC
-       } : function(CC) {
-         return CC && "function" == typeof Symbol && CC.constructor === Symbol && CC !== Symbol.prototype ? "symbol" : typeof CC
-       }, QC(CC)
-     }
+     var Op = cp(5167);
+     let op = null,
+       Ip = null;
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L19452-L19460` → after: `L118-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L118-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/117.js#L118-L126) · [Before (L19452-L19460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/117.js#L19452-L19460)

```diff
-     function wC(CC, zC) {
-       var ZC = Object.keys(CC);
-       if (Object.getOwnPropertySymbols) {
-         var QC = Object.getOwnPropertySymbols(CC);
-         zC && (QC = QC.filter((function(zC) {
-           return Object.getOwnPropertyDescriptor(CC, zC).enumerable
-         }))), ZC.push.apply(ZC, QC)
-       }
-       return ZC
+     function Sp() {
+       return Ip ??= Promise.all([cp.e(73), cp.e(190)]).then((() => cp(40670))).then((pp => {
+         let {
+           FORMER_BLOCK_IMAGE_NAMES: ip,
+           textureNameToIndex: cp,
+           textureAnimationData: Ip
+         } = pp;
+         return op ??= (0, Op.j)(cp, Ip, ip), op
+       })), Ip
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L19463-L19471` → after: `L129-L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L129-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/117.js#L129-L130) · [Before (L19463-L19471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/117.js#L19463-L19471)

```diff
-     function bC(CC) {
-       for (var zC = 1; zC < arguments.length; zC++) {
-         var ZC = null != arguments[zC] ? arguments[zC] : {};
-         zC % 2 ? wC(Object(ZC), !0).forEach((function(zC) {
-           nC(CC, zC, ZC[zC])
-         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(CC, Object.getOwnPropertyDescriptors(ZC)) : wC(Object(ZC)).forEach((function(zC) {
-           Object.defineProperty(CC, zC, Object.getOwnPropertyDescriptor(ZC, zC))
-         }))
-       }
+     function xp() {
+       if (null === op) throw new Error("Shader pack textures read before loadShaderPackTextures");
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L19583` → after: `L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/117.js#L134) · [Before (L19583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/117.js#L19583)

```diff
-   5423: (CC, zC, ZC) => {
+   5167: (pp, ip, cp) => {
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L19589` → after: `L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/117.js#L139) · [Before (L19589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/117.js#L19589)

```diff
-       i: () => KC,
+       j: () => Up,
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L19592-L19593` → after: `L143-L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L143-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/117.js#L143-L144) · [Before (L19592-L19593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/117.js#L19592-L19593)

```diff
-       t: () => HC,
-       x: () => lC,
+       s: () => Yp,
+       v: () => Dp,
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L19596-L19630` → after: `L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/117.js#L147) · [Before (L19596-L19630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/117.js#L19596-L19630)

```diff
-     var QC = ZC(5169),
-       wC = ZC.n(QC),
-       bC = ZC(5414),
-       nC = ZC.n(bC),
-       fC = ZC(5140),
-       oC = ZC.n(fC),
-       qC = ZC(5251),
-       FC = ZC.n(qC),
-       WC = ZC(5060),
-       NC = ZC.n(WC),
-       MC = ZC(48),
-       gC = ZC(5432),
-       SC = ZC(5136),
-       pC = ZC(5445),
-       PC = ZC(5447),
-       GC = ["children"],
- ... (19 more removed lines; see GitHub link above)
+     const Op = 5;
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L19633-L19768` → after: `L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/117.js#L150) · [Before (L19633-L19768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/117.js#L19633-L19768)

```diff
-       return xC = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(CC) {
-         return typeof CC
-       } : function(CC) {
-         return CC && "function" == typeof Symbol && CC.constructor === Symbol && CC !== Symbol.prototype ? "symbol" : typeof CC
-       }, xC(CC)
-     }
-     var JC = {
-         click: "onClick",
-         mousedown: "onMouseDown",
-         mouseup: "onMouseUp",
-         mouseover: "onMouseOver",
-         mousemove: "onMouseMove",
-         mouseout: "onMouseOut",
-         mouseenter: "onMouseEnter",
-         mouseleave: "onMouseLeave",
-         touchcancel: "onTouchCancel",
- ... (120 more removed lines; see GitHub link above)
+       return pp === Op
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L19783-L19798` → after: `L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/117.js#L154) · [Before (L19783-L19798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/117.js#L19783-L19798)

```diff
-       return nC = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(CC) {
-         return typeof CC
-       } : function(CC) {
-         return CC && "function" == typeof Symbol && CC.constructor === Symbol && CC !== Symbol.prototype ? "symbol" : typeof CC
-       }, nC(CC)
-     }
- 
-     function fC(CC, zC) {
-       var ZC = Object.keys(CC);
-       if (Object.getOwnPropertySymbols) {
-         var QC = Object.getOwnPropertySymbols(CC);
-         zC && (QC = QC.filter((function(zC) {
-           return Object.getOwnPropertyDescriptor(CC, zC).enumerable
-         }))), ZC.push.apply(ZC, QC)
-       }
-       return ZC
+       return [...pp.features]
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L19802-L19808` → after: `L161-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L161-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/117.js#L161-L168) · [Before (L19802-L19808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/117.js#L19802-L19808)

```diff
-       for (var zC = 1; zC < arguments.length; zC++) {
-         var ZC = null != arguments[zC] ? arguments[zC] : {};
-         zC % 2 ? fC(Object(ZC), !0).forEach((function(zC) {
-           qC(CC, zC, ZC[zC])
-         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(CC, Object.getOwnPropertyDescriptors(ZC)) : fC(Object(ZC)).forEach((function(zC) {
-           Object.defineProperty(CC, zC, Object.getOwnPropertyDescriptor(ZC, zC))
-         }))
+       if ("object" !== typeof pp || null === pp || Array.isArray(pp)) return "The pack has no files.";
+       const ip = [];
+       for (const [cp, Op] of Object.entries(pp)) {
+         if ("string" !== typeof Op) return `${cp} isn't text.`;
+         ip.push({
+           path: cp,
+           source: Op
+         })
```
