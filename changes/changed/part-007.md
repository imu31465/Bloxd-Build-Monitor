# Changed — Bundle Modifications Report (Part 007 / 086)

- **Updated at**: `2026-11-28T01:59 JST`
- **Part**: `7 / 86` (**306** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 006](part-006.md) · [Part 008 →](part-008.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/107.js` (gw4e3a.937868ec → 1yqdn.8419f1e1 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/107.js` (427 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0)

#### 401. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L10099-L10110` → after: `L15478-L15515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15478-L15515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L15478-L15515) · [Before (L10099-L10110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L10099-L10110)

```diff
-       getPersistedBlockArr(BB, OB, GB) {
-         const YB = [],
-           DB = this.storage.get(BB, OB, GB);
-         for (const QB in DB) {
-           const BB = DB[QB];
-           if (void 0 !== BB.persisted) {
-             const [OB, GB, DB] = QB.split("|"), oB = [Number(OB), Number(GB), Number(DB)];
-             YB.push({
-               pos: oB,
-               persisted: BB.persisted,
-               gameCreated: BB.gameCreated
-             })
+       Km()
+     }, Ym = !ii && Object.values(uW).some((WW => it(WW).length > 0)), ym = function(WW) {
+       let {
+         codeBlock: iW,
+         hasSettings: OW,
+         canEdit: EW
+       } = WW;
+       return (0, mW.useEffect)((() => {
+         (0, Tw.G)("aiNotes", !iW)
+       }), [iW]), (0, mW.useEffect)((() => {
+         (0, Tw.G)("aiGameSettings", OW)
+       }), [OW]), (0, mW.useEffect)((() => {
+         (0, Tw.G)("aiEdits", EW)
+       }), [EW]), (0, Jw.n)("aiHelperOverview")
+     }({
+       codeBlock: ii,
+ ... (22 more added lines; see GitHub link above)
```

#### 402. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L10113-L10127` → after: `L15518-L15563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15518-L15563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L15518-L15563) · [Before (L10113-L10127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L10113-L10127)

```diff
-         return YB
-       }
-       getSharedBlockArr(BB, OB, GB, YB) {
-         const DB = [],
-           QB = this.storage.get(BB, OB, GB);
-         for (const oB in QB) {
-           const BB = QB[oB],
-             [OB, GB, jB] = oB.split("|"),
-             yB = [Number(OB), Number(GB), Number(jB)];
-           if ((0, gB.Q)(BB)) console.error("ChunkInfo block at local pos", oB, "was nullish:", BB);
-           else {
-             const OB = this.getSharedDataForBlock(yB[0], yB[1], yB[2], BB);
-             !OB || YB && !YB(yB) || DB.push({
-               pos: yB,
-               data: OB
+       else Jm(WW.id, "declined")
+     }, Hm = WW => {
+       var iW;
+       const OW = null === (iW = Ni.find((iW => iW.id === WW))) || void 0 === iW ? void 0 : iW.target.key;
+       return Ni.findLast((iW => "user" === iW.role && iW.id < WW && iW.target.key === OW))
+     }, nm = WW => {
+       var iW;
+       return null === (iW = Hm(WW)) || void 0 === iW ? void 0 : iW.asked
+     }, um = WW => {
+       var iW, OW;
+       const mW = Hm(WW);
+       return null !== (iW = null !== (OW = null === mW || void 0 === mW ? void 0 : mW.about) && void 0 !== OW ? OW : null === mW || void 0 === mW ? void 0 : mW.text) && void 0 !== iW ? iW : "a change"
+     }, om = Ni.filter(oO), dm = null === (sW = om[om.length - 1]) || void 0 === sW ? void 0 : sW.id, em = null !== (KW = null === (SW = om.findLast((WW => "user" === WW.role))) || void 0 === SW ? void 0 : SW.id) && void 0 !== KW ? KW : 0, gm = om.length < Ni.length, Dm = om[om.le … [truncated]
+       var OW;
+       VO(null !== (OW = WW.retry) && void 0 !== OW ? OW : "", WW.retryShown, {
+         ...WW.retryOptions,
+ ... (30 more added lines; see GitHub link above)
```

#### 403. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L10130-L10256` → after: `L15566-L15580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15566-L15580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L15566-L15580) · [Before (L10130-L10256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L10130-L10256)

```diff
-         }
-         return DB
-       }
-       removingChunk(BB, OB, GB, YB) {
-         const DB = this.storage.get(BB, OB, GB),
-           QB = [BB * pB.f.pP, OB * pB.f.pP, GB * pB.f.pP];
-         for (const oB in DB) {
-           const BB = oB.split("|"),
-             OB = [Number(BB[0]), Number(BB[1]), Number(BB[2])],
-             GB = RB().add([0, 0, 0], OB, QB),
-             DB = this.bloxd.jR(GB[0], GB[1], GB[2]);
-           this.bloxd.onBlockRemoved(GB[0], GB[1], GB[2], DB, 0, YB)
-         }
-         this.storage.remove(BB, OB, GB)
-       }
-       blockChanged(BB, OB, GB) {
- ... (111 more removed lines; see GitHub link above)
+         }),
+         noticeActions: (WW, iW, OW) => ({
+           notice: OW.notice,
+           onRetry: () => {
+             EW(iW, {
+               retryOf: WW
+             })
+           },
+           onUseFree: () => {
+             EW(iW, {
+               useFree: !0,
+               retryOf: WW
+             })
+           },
+           onCheckKey: NW
```

#### 404. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L10259-L10288` → after: `L15583-L15586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15583-L15586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L15583-L15586) · [Before (L10259-L10288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L10259-L10288)

```diff
-       getRecipesForItem(BB, OB) {
-         var GB;
-         const YB = this.books.get(BB);
-         if (!YB) return;
-         const DB = null === (GB = YB.overrides) || void 0 === GB ? void 0 : GB.get(OB);
-         return void 0 !== DB ? DB : Object.hasOwn(YB.base, OB) ? YB.base[OB] : void 0
-       }
-       forEachRecipes(BB, OB) {
-         const GB = this.books.get(BB);
-         if (!GB) return;
-         const {
-           base: YB,
-           overrides: DB
-         } = GB;
-         for (const oB in YB) {
-           var QB;
- ... (14 more removed lines; see GitHub link above)
+     }({
+       entries: om,
+       busy: !!ti,
+       send: (WW, iW) => {
```

#### 405. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L10290-L10292` → after: `L15588-L15590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15588-L15590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L15588-L15590) · [Before (L10290-L10292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L10290-L10292)

```diff
-           name: YB,
-           HM: DB,
-           haveIngredients: QB
+           useFree: OW,
+           retryOf: mW,
+           continueFrom: EW
```

#### 406. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L10294-L10309` → after: `L15592-L15621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15592-L15621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L15592-L15621) · [Before (L10294-L10309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L10294-L10309)

```diff
-         return QB || this.getRecipesForItem(BB, YB)[DB].isStarterRecipe || this.haveOneOrMoreIngredientOf(BB, OB, YB, DB)
-       }
-       getRecipesAtStation(BB, OB, GB) {
-         const YB = [],
-           DB = [];
-         return this.forEachRecipes(BB, ((QB, oB) => {
-           oB.forEach(((oB, jB) => {
-             this.canUseRecipeAtStation(BB, QB, jB, GB) && (this.getMaxCraftTimesFromIngredientAmt(BB, OB, QB, jB) > 0 ? YB.push({
-               name: QB,
-               HM: jB,
-               haveIngredients: !0
-             }) : DB.push({
-               name: QB,
-               HM: jB,
-               haveIngredients: !1
-             }))
+         const NW = Ni.find((WW => WW.id === mW));
+         return VO(WW, null === NW || void 0 === NW ? void 0 : NW.retryShown, {
+           ...null === NW || void 0 === NW ? void 0 : NW.retryOptions,
+           useFree: OW,
+           retryOf: mW,
+           continueFrom: EW
+         })
+       },
+       onCheckKey: Cm
+     }), Gm = pL(vO) ? vO.status : null, Im = null !== Gm && void 0 !== Gm && Gm.isSuper ? Gm.resetsAt : null, am = (0, mW.useRef)({
+       resetsAt: 0,
+       count: 0,
+       nextAt: 0
+     });
+     (0, mW.useEffect)((() => {
+       if (null === Im) return;
+ ... (14 more added lines; see GitHub link above)
```

#### 407. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L10311-L10319` → after: `L15623-L15625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15623-L15625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L15623-L15625) · [Before (L10311-L10319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L10311-L10319)

```diff
-         })), YB.concat(DB)
-       }
-       canUseRecipeAtStation(BB, OB, GB, YB) {
-         const DB = this.getRecipesForItem(BB, OB)[GB].station;
-         let QB;
-         Array.isArray(DB) ? QB = DB : (QB = TP, TP[0] = DB, TP.length = 1);
-         for (const oB of QB) {
-           if (("Workbench" === YB || "Artisan Bench" === YB) && !oB) return !0;
-           if (YB && YB === oB || !YB && !oB) return !0
+         }), Math.max(0, WW.nextAt - Date.now()));
+         return () => {
+           OW = !0, clearTimeout(mW)
```

#### 408. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L10338-L10352` → after: `L15628-L15650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15628-L15650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L15628-L15650) · [Before (L10338-L10352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L10338-L10352)

```diff
-       getMaxCraftTimesFromIngredientAmt(BB, OB, GB, YB) {
-         const DB = this.getRecipesForItem(BB, GB);
-         if (void 0 === DB[YB]) return 0;
-         let QB = 1 / 0;
-         for (const {
-             items: oB,
-             amt: jB
-           }
-           of DB[YB].requires) {
-           let BB = 0;
-           for (const YB of oB) BB += OB.getAmountOfItem(YB);
-           const GB = Math.floor(BB / jB);
-           QB = Math.min(QB, GB)
-         }
-         return QB
+       const WW = setTimeout((() => {
+         iO(Date.now())
+       }), Math.max(0, (Im - WO - 1) % 6e4 + 1 - (Date.now() - WO)));
+       return () => {
+         clearTimeout(WW)
+       }
+     }), [Im, WO]);
+     const rm = Bm ? `${Bm.id}/${Bm.model.id}` : null;
+     (0, mW.useEffect)((() => {
+       Ti(!1)
+     }), [rm]);
+     const zm = Object.values(uW).some((WW => "" !== WW.trim())),
+       Fm = Ai || ki || Mi || null !== Si,
+       Qm = "aiAnswer" === ym || ("aiNotes" === ym || "aiGameSettings" === ym || "aiGear" === ym) && Fm ? ym : "aiPanel",
+       WE = (0, mW.useRef)(null),
+       iE = (0, mW.useRef)(null),
+ ... (7 more added lines; see GitHub link above)
```

#### 409. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L10354-L10369` → after: `L15652-L15662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15652-L15662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L15652-L15662) · [Before (L10354-L10369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L10354-L10369)

```diff
-       getCraftTimesInAvailableSpace(BB, OB, GB, YB, DB) {
-         const QB = this.getRecipesForItem(BB, GB)[YB].produces,
-           oB = OB.cloneZeroAlloc();
-         let jB = 0;
-         for (; jB < DB;) {
-           const OB = this.naiveGetCraftTimesInAvailableSpace(BB, oB, GB, YB);
-           let yB = Math.min(OB, DB - jB);
-           yB = Math.max(yB, 1), this.consumeIngredientsForCrafting(BB, oB, GB, YB, yB);
-           const JB = QB * yB,
-             {
-               itemsProvided: MB
-             } = this.provideItemsFromCrafting(oB, GB, JB);
-           if (MB !== JB) break;
-           jB += yB
-         }
-         return jB
+     }), [Si]), (0, mW.useEffect)((() => {
+       const WW = bO.current;
+       if (!Si || !WW) return;
+       WW.scrollTo({
+         top: 0
+       });
+       const iW = "settings" === Si && fm.current ? WW.querySelector(".WorldCodeAiModelRow.Selected") : null;
+       if (iW && iW.getBoundingClientRect().bottom > WW.getBoundingClientRect().bottom && !Pw(WW, iW)) {
+         const OW = WW.getBoundingClientRect(),
+           mW = iW.getBoundingClientRect();
+         WW.scrollTop += mW.top - OW.top - (OW.height - mW.height) / 2
```

#### 410. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L10371-L10378` → after: `L15664-L15694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15664-L15694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L15664-L15694) · [Before (L10371-L10378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L10371-L10378)

```diff
-       naiveGetCraftTimesInAvailableSpace(BB, OB, GB, YB) {
-         const DB = this.getRecipesForItem(BB, GB)[YB].produces,
-           QB = OB.getNumFreeSlots();
-         if (!1 !== this.bloxd.JP.metadatas[GB].stackable) {
-           let BB = 999 * QB,
-             YB = OB.findItem(GB, 0);
-           for (; null !== YB;) BB += Math.max(999 - OB.getItemAtIdx(YB).amount, 0), YB = OB.findItem(GB, YB + 1);
-           return Math.floor(BB / DB)
+       return () => {
+         WW.style.paddingBottom = ""
+       }
+     }), [Si]);
+     const {
+       disclosureRef: mE,
+       gearLabelRef: EE,
+       hasGearLabel: PE
+     } = function(WW, iW) {
+       const OW = (0, mW.useRef)(null),
+         EW = (0, mW.useRef)(null),
+         NW = (0, mW.useRef)(0),
+         [PW, LW] = (0, mW.useState)(!0);
+       return (0, mW.useLayoutEffect)((() => {
+         const iW = OW.current;
+         if (!iW || "undefined" === typeof ResizeObserver) return;
+ ... (15 more added lines; see GitHub link above)
```

#### 411. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L10380` → after: `L15696-L15699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15696-L15699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L15696-L15699) · [Before (L10380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L10380)

```diff
-         return Math.floor(QB / DB)
+       }), [WW, iW]), {
+         disclosureRef: OW,
+         gearLabelRef: EW,
+         hasGearLabel: PW
```

#### 412. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L10382-L10386` → after: `L15701-L15720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15701-L15720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L15701-L15720) · [Before (L10382-L10386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L10382-L10386)

```diff
-       craftItem(BB, OB, GB, YB, DB) {
-         const QB = {
-             vM: 0,
-             WJ: null,
-             amountAddedToSlot: 0
+     }(iE, Fm), LE = () => {
+       var WW;
+       qi([]), null === (WW = OO.current) || void 0 === WW || WW.abort(), AO()
+     }, wE = (0, PW.jsxs)("div", {
+       className: NW()("WorldCodeAiPanel", Si && "WorldCodeAiPanel-aiView"),
+       children: [(0, PW.jsxs)("div", {
+         className: "WorldCodeAiHeader",
+         children: [(0, PW.jsx)("span", {
+           className: "WorldCodeAiTitle",
+           children: "AI Helper"
+         }), (0, PW.jsx)("span", {
+           ref: mE,
+           className: "WorldCodeAiDisclosure",
+           title: "AI can be wrong. Check its changes.",
+           children: "AI can be wrong."
+         }), Fm && (0, PW.jsx)("button", {
+ ... (4 more added lines; see GitHub link above)
```

#### 413. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L10388-L10769` → after: `L15722-L15748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15722-L15748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L15722-L15748) · [Before (L10388-L10769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L10388-L10769)

```diff
-           oB = this.getMaxCraftTimes(BB, OB, GB, YB);
-         if (0 === oB) return QB;
-         const jB = Math.min(DB, oB),
-           yB = this.getRecipesForItem(BB, GB);
-         this.consumeIngredientsForCrafting(BB, OB, GB, YB, jB);
-         const JB = yB[YB].produces,
-           MB = JB * jB,
-           PB = yB[YB].attributes,
-           {
-             itemsProvided: zB,
-             WJ: lB,
-             amountAddedToSlot: pB
-           } = this.provideItemsFromCrafting(OB, GB, MB, PB);
-         return MB !== zB && console.error(new Error("Crafted the wrong amount!").stack), {
-           vM: zB / JB,
-           WJ: lB,
- ... (366 more removed lines; see GitHub link above)
+           children: "addKey" === Si && Hi.current ? "Back" : "Back to chat"
+         }), Si && (0, PW.jsx)("h3", {
+           className: "WorldCodeAiViewTitle",
+           children: "settings" === Si ? "AI settings" : ni ? `Edit ${AL(ni)} key` : "Add an API key"
+         }), "settings" === Si && (0, PW.jsxs)("span", {
+           className: "WorldCodeAiViewUsing",
+           children: [(0, PW.jsxs)("span", {
+             className: "WorldCodeAiViewUsingModel",
+             children: ["Using:", " ", Bm ? yi ? "Bot.xd (free) for the next question" : uw(Bm) : Gm ? TL : "Bot.xd (free)"]
+           }), (0, PW.jsxs)("span", {
+             className: "WorldCodeAiViewUsingEdits",
+             children: ["Edits: ", gi ? "On" : "Off"]
+           })]
+         }), Fm && ti && (0, PW.jsx)("button", {
+           className: "WorldCodeAiStop WorldCodeAiHeaderStop",
+           onClick: LE,
+ ... (11 more added lines; see GitHub link above)
```

#### 414. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L10771-L11003` → after: `L15750-L15879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15750-L15879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L15750-L15879) · [Before (L10771-L11003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L10771-L11003)

```diff
-         }
-         return !0
-       }
-       getBlockDrop(BB, OB, GB) {
-         return (0, jB.we)(this.getItemStat(BB, OB, "drops"), this.getItemStat(BB, OB, "specialToolDrop"), (() => this.getMetaInfo(OB).rootName), GB)
-       }
-       getBlockDropAmount(BB, OB) {
-         var GB, YB;
-         return OB && null !== (GB = null === (YB = MB.h[BB]) || void 0 === YB ? void 0 : YB.hJ) && void 0 !== GB ? GB : 1
-       }
-       getBlockBreakDrop(BB, OB, GB) {
-         if (!OB || this.getClientPredictedOption(BB, "creative") || !this.getBlockTypeIsHarvestable(BB, OB)) return null;
-         const YB = this.getBlockDrop(BB, OB, GB);
-         return YB && {
-           itemId: this.getItemId(YB.name),
-           amount: this.getBlockDropAmount(OB, YB.normalDrop)
- ... (217 more removed lines; see GitHub link above)
+         }), !Fm && Ym && (0, PW.jsx)(hw, {
+           step: "aiGameSettings",
+           placement: "bottom",
+           children: (0, PW.jsx)("button", {
+             className: NW()("WorldCodeAiLinkButton", Mi && "WorldCodeAiLinkButton-active"),
+             "aria-pressed": Mi,
+             onClick: () => {
+               Km(), bi(!1), si(!1), Ki(!Mi)
+             },
+             children: "Game settings"
+           })
+         }), !Fm && xi.length > 0 && (0, PW.jsx)("button", {
+           className: NW()("WorldCodeAiLinkButton", Ai && "WorldCodeAiLinkButton-active"),
+           "aria-pressed": Ai,
+           onClick: () => {
+             iO(Date.now()), si(!1), Ki(!1), bi(!Ai)
+ ... (114 more added lines; see GitHub link above)
```

#### 415. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L11005-L41433` → after: `L15881-L16641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15881-L16641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L15881-L16641) · [Before (L11005-L41433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L11005-L41433)

```diff
-           return !0
-         }(YB.NGB, DB, OB.width, OB.height, ((OB, GB, YB) => this.Qv(OB, GB, YB) ? this.getBlockCollisionForPlayer(BB, OB, GB, YB, this.getClientPredictedBlock(BB, OB, GB, YB)) : null))
-       }
-       takeHeldPlayerBodySize(BB) {
-         const OB = this.kz.DW.f4(BB),
-           GB = this.playerBodyGrowth.heldSize(OB);
-         void 0 !== GB && (this.playerBodyGrowth.clear(OB), this.kz.DW.AYB(BB, GB.width, GB.height, GB.width))
-       }
-       getVehicleSettingOverrides(BB) {
-         var OB, GB;
-         return null !== (OB = null === (GB = this.vehicleSettingOverridesByEId.get(BB)) || void 0 === GB ? void 0 : GB.getOverrides()) && void 0 !== OB ? OB : null
-       }
-       getVehicleSettingOverrideStore(BB) {
-         return this.vehicleSettingOverridesByEId.get(BB)
-       }
-       setVehicleSettingOverrides(BB, OB) {
- ... (30413 more removed lines; see GitHub link above)
+               return Um.current.includes(ZW) || Um.current.push(ZW), bm.current[WW] = null !== (PW = wW[WW]) && void 0 !== PW ? PW : "", Am.current[WW] = tW, sO.current = Date.now(), !0
+             }));
+             return jm.current = mW.catch((() => !1)), mW
+           } : void 0,
+           onTryIt: Vi ? () => {
+             lO(DW, Math.max(0, sO.current + 600 - Date.now()))
+           } : void 0,
+           onUndo: Vi && dW ? () => {
+             Sm()
+           } : void 0
+         }), "settings" === Si && (0, PW.jsx)(jw, {
+           allowEdits: di,
+           onAllowEditsChange: dW ? WW => {
+             ei(WW),
+               function(WW) {
+                 try {
+ ... (745 more added lines; see GitHub link above)
```

#### 416. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L41435-L41442` → after: `L16643-L16646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16643-L16646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L16643-L16646) · [Before (L41435-L41442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L41435-L41442)

```diff
-     function jB(BB, OB, GB) {
-       const YB = "Slab" === GB ? lB : MB,
-         DB = {};
-       return OB.forEach((OB => {
-         const QB = `${OB} ${BB}`;
-         Object.assign(DB, YB(`${QB} ${GB}`, QB))
-       })), DB
-     }
+   function NW(WW) {
+     const iW = (null !== WW && void 0 !== WW ? WW : "").match(/-?\d+(?:\.\d+)?/g);
+     return iW && iW.length >= 3 ? [Number(iW[0]), Number(iW[1]), Number(iW[2])] : null
+   }
```

#### 417. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L41444-L41453` → after: `L16648-L16650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16648-L16650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L16648-L16650) · [Before (L41444-L41453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L41444-L41453)

```diff
-     function yB(BB, OB) {
-       let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
-       const YB = {};
-       return OB.forEach((OB => {
-         YB[`${OB} ${BB}`] = [{
-           item: "Maple Wood Planks",
-           amt: GB
-         }]
-       })), YB
-     }
+   function PW(WW, iW) {
+     return WW === iW ? String(WW) : `${WW}-${iW}`
+   }
```

#### 418. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L41455-L41464` → after: `L16652-L16673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16652-L16673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L16652-L16673) · [Before (L41455-L41464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L41455-L41464)

```diff
-     function JB(BB, OB, GB) {
-       return {
-         [BB]: [{
-           requires: [{
-             items: [OB],
-             amt: GB
-           }],
-           produces: 4,
-           station: "Artisan Bench"
-         }]
+   function LW(WW, iW, OW, mW) {
+     const EW = [];
+     let NW = new Map;
+     for (let PW = WW[2]; PW < WW[2] + iW; PW++) {
+       const LW = new Map;
+       let cW = WW[0];
+       for (; cW < WW[0] + iW;) {
+         const EW = mW(cW, OW, PW);
+         let wW = cW;
+         for (; wW + 1 < WW[0] + iW && mW(wW + 1, OW, PW) === EW;) wW++;
+         if (null !== EW) {
+           const WW = `${cW} ${wW} ${EW}`,
+             iW = NW.get(WW);
+           iW ? (iW.z1 = PW, NW.delete(WW), LW.set(WW, iW)) : LW.set(WW, {
+             x0: cW,
+             x1: wW,
+ ... (6 more added lines; see GitHub link above)
```

#### 419. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L41468-L41469` → after: `L16680-L16694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16680-L16694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L16680-L16694) · [Before (L41468-L41469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L41468-L41469)

```diff
-     function MB(BB, OB) {
-       return JB(BB, OB, 3)
+   function cW(WW, iW, OW, EW) {
+     let NW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : mW;
+     const cW = [WW[0] + iW - 1, WW[1] + iW - 1, WW[2] + iW - 1],
+       wW = null !== EW && EW.every(((iW, OW) => Math.floor(iW) >= WW[OW] && Math.floor(iW) <= cW[OW])),
+       tW = [`The chunk from ${WW.join(" ")} to ${cW.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
+     null !== EW && tW.push(`The player's feet are at ${EW.map(Math.floor).join(" ")}, ${wW?"in this chunk":"outside this chunk"}.`);
+     const ZW = [];
+     for (let mW = WW[1]; mW <= cW[1]; mW++) {
+       const EW = LW(WW, iW, mW, OW).join("; "),
+         NW = ZW[ZW.length - 1];
+       (null === NW || void 0 === NW ? void 0 : NW.boxes) === EW ? NW.to = mW : ZW.push({
+         from: mW,
+         to: mW,
+         boxes: EW
+       })
```

#### 420. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L41471-L41481` → after: `L16696-L16703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16696-L16703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L16696-L16703) · [Before (L41471-L41481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L41471-L41481)

```diff
- 
-     function PB(BB, OB) {
-       return {
-         [BB]: [{
-           requires: [{
-             items: [OB],
-             amt: 5
-           }],
-           produces: 3,
-           station: "Workbench"
-         }]
+     const xW = ZW.filter((WW => "" !== WW.boxes));
+     0 === xW.length && tW.push("It is all air.");
+     let lW = tW.join("\n").length;
+     for (const mW of xW) {
+       const WW = `y${PW(mW.from,mW.to)}: ${mW.boxes}`;
+       if (lW += WW.length + 1, lW > NW) {
+         tW.push(`Cut short: the layers from y${mW.from} up aren't shown, as there are too many blocks.`);
+         break
```

#### 421. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L41485-L41495` → after: `L16732-L16739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16732-L16739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L16732-L16739) · [Before (L41485-L41495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L41485-L41495)

```diff
-     function zB(BB, OB) {
-       return {
-         [BB]: [{
-           requires: [{
-             items: [OB],
-             amt: 4
-           }],
-           produces: 1,
-           station: "Workbench"
-         }]
-       }
+   function cW(WW) {
+     const iW = LW(EW, WW);
+     return iW.length <= 3e4 ? {
+       url: iW,
+       sendsPrompt: !0
+     } : {
+       url: new URL(EW.url).origin,
+       sendsPrompt: !1
```

#### 422. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L41498-L41513` → after: `L16766-L16768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16766-L16768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L16766-L16768) · [Before (L41498-L41513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L41498-L41513)

```diff
-     function lB(BB, OB) {
-       return JB(BB, OB, 2)
-     }
-   },
-   39584: (BB, OB, GB) => {
-     GB.d(OB, {
-       d: () => YB.f
-     });
-     var YB = GB(192)
-   },
-   39417: (BB, OB, GB) => {
-     GB.d(OB, {
-       e: () => YB,
-       g: () => DB
-     });
-     const YB = new Map(["graphite", "football", "torch", "torch_blue", "torch_cyan", "torch_green", "torch_orange", "torch_purple", "torch_red"].map((BB => [BB, `${BB}_block`])));
+   function tW(WW) {
+     return `/docs/${wW(WW)}.md`
+   }
```

#### 423. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L41515-L41528` → after: `L16770-L16773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16770-L16773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L16770-L16773) · [Before (L41515-L41528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L41515-L41528)

```diff
-     function DB(BB) {
-       var OB;
-       return null !== (OB = YB.get(BB)) && void 0 !== OB ? OB : BB
-     }
-   },
-   39954: (BB, OB, GB) => {
-     GB.d(OB, {
-       d: () => QB,
-       f: () => jB
-     });
-     var YB = GB(353),
-       DB = GB(4886);
-     const QB = new Set(DB.o),
-       oB = new Map;
+   function ZW(WW, iW) {
+     return `/docs/${wW(WW)}/${iW+1}.md`
+   }
+   const xW = /^\/docs\/([a-z0-9-]+)(?:\/(\d+))?\.md$/;
```

#### 424. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L41530-L41534` → after: `L16775-L16779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16775-L16779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L16775-L16779) · [Before (L41530-L41534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L41530-L41534)

```diff
-     function jB(BB, OB) {
-       let GB = oB.get(OB);
-       void 0 === GB && (GB = new Map, oB.set(OB, GB));
-       let DB = GB.get(BB);
-       return void 0 === DB && (DB = `${BB}${(0,YB.A)(OB)}`, GB.set(BB, DB)), DB
+   function lW(WW) {
+     const iW = xW.exec(WW);
+     return null === iW ? null : {
+       name: iW[1],
+       part: void 0 === iW[2] ? null : Number(iW[2])
```

#### 425. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L41536-L41542` → after: `L16781-L16782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16781-L16782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L16781-L16782) · [Before (L41536-L41542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L41536-L41542)

```diff
-   },
-   39572: (BB, OB, GB) => {
-     GB.d(OB, {
-       b: () => QB
-     });
-     const YB = 1400,
-       DB = .45;
+   }
+   const AW = /^(?:\/studio)?\/docs(?:\/([a-z0-9-]+)(?:\/(\d+))?)?\/?$/;
```

#### 426. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L41544-L41619` → after: `L16784-L16789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16784-L16789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L16784-L16789) · [Before (L41544-L41619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L41544-L41619)

```diff
-     function QB(BB) {
-       return BB < YB ? Math.pow(YB / BB, DB) : 1
-     }
-   },
-   40034: (BB, OB, GB) => {
-     BB.exports = GB.p + "static/media/breach-zero-uncaught.c7d4410f99269ac1ee2f.webp"
-   },
-   40042: (BB, OB, GB) => {
-     BB.exports = GB.p + "static/media/breach-zero.ef5aacecf502228cd20b.webp"
-   },
-   40050: (BB, OB, GB) => {
-     BB.exports = GB.p + "static/media/brood-father-uncaught.ee678432c71b7061fae1.webp"
-   },
-   40059: (BB, OB, GB) => {
-     BB.exports = GB.p + "static/media/brood-father.e48391955a574c1155fa.webp"
-   },
- ... (60 more removed lines; see GitHub link above)
+   function bW(WW) {
+     const iW = AW.exec(WW);
+     if (null === iW) return null;
+     const [, OW = "", mW] = iW;
+     return void 0 === mW ? tW(OW) : ZW(OW, Number(mW) - 1)
+   }
```

#### 427. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L41621-L41657` → after: `L16791-L16792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16791-L16792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L16791-L16792) · [Before (L41621-L41657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L41621-L41657)

```diff
-     function QB() {
-       const BB = () => (0, YB.A)();
-       return {
-         memoryBytes: () => (0, YB.u)().buffer.byteLength,
-         reserveUpFront: OB => BB().iP(OB),
-         reserveAhead: OB => BB().FP(OB),
-         setCeiling: OB => {
-           BB().LP(OB)
-         },
-         lowWater: () => DB[BB().IP()] ?? "none",
-         stats: () => function(BB) {
-           const OB = new Uint32Array((0, YB.u)().buffer, BB, 17),
-             GB = BB => OB[BB] ?? 0,
-             DB = BB => ({
-               upFront: GB(BB),
-               ahead: GB(BB + 1),
- ... (21 more removed lines; see GitHub link above)
+   function jW(WW) {
+     return `/docsHtml/${wW(WW)}.html`
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/108.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/108.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/108.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/108.js#L4)

```diff
-   5353: (BB, OB, GB) => {
+   44879: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L6-L9` → after: `L6-L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L6-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/108.js#L6-L130) · [Before (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/108.js#L6-L9)

```diff
-       Howl: () => DB.Howl,
-       Howler: () => DB.Howler,
-       musicOutput: () => ZB,
-       readyAudioContext: () => NB
+       DOCS_AGENT_PART_CHARS: () => Di.c,
+       DOCS_LLMS_FULL_TXT_PATH: () => Di.g,
+       DOCS_LLMS_TXT_PATH: () => Di.k,
+       DOCS_LLMS_TXT_URL: () => Di.o,
+       ROOT_LLMS_TXT_PATH: () => Di.s,
+       allGamemodeSettings: () => mW.d,
+       arcadeModeStaticConfig: () => bW.b,
+       arenaStaticConfig: () => Ei,
+       backroomsStaticConfig: () => mi.d,
+       battleBoxStaticConfig: () => ci,
+       bedwarsStaticConfig: () => nW.c,
+       bloxdAggregatorConfig: () => LW.d,
+       bloxdPreprodAggregatorConfig: () => cW.e,
+       bloxdStagingAggregatorConfig: () => wW.d,
+       bridgeBattleStaticConfig: () => fW.b,
+       captureTheFlagStaticConfig: () => li,
+ ... (109 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L11-L16` → after: `L132-L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L132-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/108.js#L132-L134) · [Before (L11-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/108.js#L11-L16)

```diff
-     var YB, DB = GB(5362),
-       QB = GB(3873),
-       oB = GB(5073);
-     const jB = DB.Howler;
- 
-     function yB() {
+     var mW = OW(805);
+ 
+     function EW(WW) {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L18-L27` → after: `L136-L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L136-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/108.js#L136-L491) · [Before (L18-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/108.js#L18-L27)

```diff
-       if (jB.ctx || !jB.usingWebAudio || "undefined" === typeof AudioContext || !(0, oB.h)()) return;
-       const GB = navigator.audioSession;
-       let YB;
-       "auto" === (null === GB || void 0 === GB ? void 0 : GB.type) && (GB.type = "ambient");
-       try {
-         YB = new AudioContext({
-           sampleRate: 44100
-         })
-       } catch {
-         return
+       return null !== (iW = null === (OW = (0, mW.o)(WW)) || void 0 === OW ? void 0 : OW.defaultListedVariation) && void 0 !== iW ? iW : WW
+     }
+     var NW = OW(1049),
+       PW = OW(1078),
+       LW = OW(803),
+       cW = OW(791),
+       wW = OW(798),
+       tW = OW(789),
+       ZW = OW(782),
+       xW = OW(810),
+       lW = OW(839),
+       AW = OW(813),
+       bW = OW(818),
+       jW = OW(824),
+       UW = OW(830),
+       kW = OW(842),
+ ... (340 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/108.js` (Changed code · before: `L29-L122` → after: `L493-L505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84dR493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c326865a1a4c61d15ac4269ca462d5f83e718fb1ba1d69e55dd4db638968a84d) · [After (L493-L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/108.js#L493-L505) · [Before (L29-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/108.js#L29-L122)

```diff
-       const DB = YB.createGain();
-       DB.gain.setValueAtTime(jB._muted ? 0 : null !== (BB = jB._volume) && void 0 !== BB ? BB : 1, YB.currentTime), DB.connect(YB.destination), jB.ctx = YB, jB.masterGain = DB, null === (OB = jB._setup) || void 0 === OB || OB.call(jB)
-     }
-     jB._mobileUnloaded = !0;
-     const JB = jB.volume.bind(DB.Howler);
-     jB.volume = function() {
-       return yB(), JB(...arguments)
-     };
-     const MB = jB.mute.bind(DB.Howler);
-     jB.mute = BB => (yB(), MB(BB));
-     const PB = DB.Howl.prototype,
-       zB = PB.init;
- 
-     function lB() {
-       for (; jB._html5AudioPool.length < jB.html5PoolSize;) {
-         const BB = new Audio;
- ... (78 more removed lines; see GitHub link above)
+     }
+     const AW = /^(?:\/studio)?\/docs(?:\/([a-z0-9-]+)(?:\/(\d+))?)?\/?$/;
+ 
+     function bW(WW) {
+       const iW = AW.exec(WW);
+       if (null === iW) return null;
+       const [, OW = "", mW] = iW;
+       return void 0 === mW ? tW(OW) : ZW(OW, Number(mW) - 1)
+     }
+ 
+     function jW(WW) {
+       return `/docsHtml/${wW(WW)}.html`
+     }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/109.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/109.js` (58 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80)

#### 1. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L2` → after: `L3`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R3) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/109.js#L3) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/109.js#L2)

```diff
- export const ids = [108, 109, 110];
+ export const ids = [10, 13, 14, 16, 17, 19, 21, 23, 24, 27, 30, 109, 159];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L4-L7` → after: `L5-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L5-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/109.js#L5-L31) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/109.js#L4-L7)

```diff
-   37288: (BB, OB, GB) => {
-     function YB(BB, OB, GB, YB) {
-       return !(GB && !BB.aimable) && (!OB || BB.gun && "head" !== YB)
-     }
+   40498: (WW, iW, OW) => {
+     var mW = {
+       "./bedwars/bedwarsClient": 40505,
+       "./bridgeBattle/bridgeBattleClient": 40513,
+       "./buildAFactory2/buildAFactory2Client": 39669,
+       "./classic/classicClient": 40522,
+       "./classic/smp2/smp2Client": 40525,
+       "./clutch/clutchClient": 40548,
+       "./containmentBreach/containmentBreachClient": 40552,
+       "./cooking/cookingClient": 40694,
+       "./defusal/defusalClient": 40699,
+       "./frontline/frontlineClient": 40701,
+       "./goalRush/goalRushClient": 40728,
+       "./greenville/greenvilleClient": 40736,
+       "./hideseek/hideseekClient": 40765,
+       "./luckyBedwars/luckyBedwarsClient": 40771,
+ ... (11 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L10` → after: `L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/109.js#L34) · [Before (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/109.js#L10)

```diff
-       return Math.max(.1 * BB, 1)
+       return NW(WW).then(OW)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L13-L14` → after: `L37-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L37-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/109.js#L37-L44) · [Before (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/109.js#L13-L14)

```diff
-     function QB(BB, OB) {
-       return !BB && OB
+     function NW(WW) {
+       return Promise.resolve().then((() => {
+         if (!OW.o(mW, WW)) {
+           var iW = new Error("Cannot find module '" + WW + "'");
+           throw iW.code = "MODULE_NOT_FOUND", iW
+         }
+         return mW[WW]
+       }))
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L16-L20` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/109.js#L46) · [Before (L16-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/109.js#L16-L20)

```diff
-     GB.d(OB, {
-       e: () => QB,
-       f: () => DB,
-       h: () => YB
-     })
+     EW.keys = () => Object.keys(mW), EW.resolve = NW, EW.id = 40498, WW.exports = EW
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L22-L41` → after: `L48-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L48-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/109.js#L48-L86) · [Before (L22-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/109.js#L22-L41)

```diff
-   37292: (BB, OB, GB) => {
-     GB.d(OB, {
-       c: () => jB,
-       g: () => oB
-     });
-     let YB = null;
-     const DB = {
-         crosshairAccuracy: [],
-         turnDamageIndicators: []
-       },
-       QB = {
-         crosshairAccuracy: BB => {
-           const OB = DB.crosshairAccuracy.at(-1);
-           OB ? OB.hook(BB) : YB = BB
-         },
-         turnDamageIndicators: BB => {
- ... (4 more removed lines; see GitHub link above)
+   40031: (WW, iW, OW) => {
+     var mW = {
+       "./animator.ts": 38229,
+       "./autoRemoveMesh.ts": 40036,
+       "./autoRotate.js": 4e4,
+       "./bullet.js": 40041,
+       "./cameraShake.ts": 40049,
+       "./cape.ts": 40003,
+       "./crouchingHandler.ts": 40059,
+       "./doOnFirstTick.ts": 40053,
+       "./entityMultilineText.ts": 40067,
+       "./entityName.ts": 40080,
+       "./flashingMeshOverlay.js": 40092,
+       "./floating.ts": 40101,
+       "./forcedCameraTransition.ts": 40108,
+       "./fourLeggedMesh.ts": 39998,
+ ... (23 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L43-L54` → after: `L88-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L88-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/109.js#L88-L90) · [Before (L43-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/109.js#L43-L54)

```diff
-     function oB(BB, OB) {
-       const GB = {
-           hook: OB
-         },
-         oB = DB[BB];
-       if (oB.push(GB), "crosshairAccuracy" === BB && null !== YB) {
-         const BB = YB;
-         YB = null, QB.crosshairAccuracy(BB)
-       }
-       return () => {
-         const BB = oB.indexOf(GB); - 1 !== BB && oB.splice(BB, 1)
-       }
+     function EW(WW) {
+       var iW = NW(WW);
+       return OW(iW)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L57-L58` → after: `L93-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L93-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/109.js#L93-L98) · [Before (L57-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/109.js#L57-L58)

```diff
-     function jB() {
-       return QB
+     function NW(WW) {
+       if (!OW.o(mW, WW)) {
+         var iW = new Error("Cannot find module '" + WW + "'");
+         throw iW.code = "MODULE_NOT_FOUND", iW
+       }
+       return mW[WW]
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L61-L66` → after: `L104-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L104-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/109.js#L104-L128) · [Before (L61-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/109.js#L61-L66)

```diff
-   34755: (BB, OB, GB) => {
-     GB.d(OB, {
-       d: () => QB,
-       h: () => DB
-     });
-     var YB = GB(16);
+   40554: (WW, iW, OW) => {
+     var mW = {
+       "./breach-zero-uncaught.webp": 40559,
+       "./breach-zero.webp": 40568,
+       "./brood-father-uncaught.webp": 40574,
+       "./brood-father.webp": 40576,
+       "./carousel-uncaught.webp": 40580,
+       "./carousel.webp": 40583,
+       "./deadlock-uncaught.webp": 40591,
+       "./deadlock.webp": 40598,
+       "./doom-warlord-uncaught.webp": 40607,
+       "./doom-warlord.webp": 40616,
+       "./frost-revenant-uncaught.webp": 40619,
+       "./frost-revenant.webp": 40626,
+       "./hollow-choir-uncaught.webp": 40635,
+       "./hollow-choir.webp": 40640,
+ ... (9 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L68-L69` → after: `L130-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L130-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/109.js#L130-L132) · [Before (L68-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/109.js#L68-L69)

```diff
-     function DB(BB, OB) {
-       return BB && !OB
+     function EW(WW) {
+       var iW = NW(WW);
+       return OW(iW)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L72-L73` → after: `L135-L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L135-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/109.js#L135-L140) · [Before (L72-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/109.js#L72-L73)

```diff
-     function QB() {
-       return DB(YB.c.get("isTouchScreen"), YB.c.get("clientEscMenuOptions").touchActionButtons)
+     function NW(WW) {
+       if (!OW.o(mW, WW)) {
+         var iW = new Error("Cannot find module '" + WW + "'");
+         throw iW.code = "MODULE_NOT_FOUND", iW
+       }
+       return mW[WW]
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L76-L95` → after: `L146-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L146-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/109.js#L146-L171) · [Before (L76-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/109.js#L76-L95)

```diff
-   37113: (BB, OB, GB) => {
-     GB.r(OB), GB.d(OB, {
-       countDecodesAs: () => PB,
-       decodedAudio: () => zB
-     });
-     var YB = GB(3311),
-       DB = GB(5353);
-     const QB = DB.Howler,
-       oB = new Map;
-     let jB = 0;
-     const yB = {
-         song: 0,
-         sound: 0
-       },
-       JB = new WeakMap,
-       MB = new WeakSet;
- ... (4 more removed lines; see GitHub link above)
+   40914: () => {
+     "undefined" === typeof window || window.global || (window.global = window.globalThis || {})
+   },
+   40929: (WW, iW, OW) => {
+     var mW = [],
+       EW = [],
+       NW = [],
+       PW = [],
+       LW = [],
+       cW = [],
+       wW = [],
+       tW = [],
+       ZW = [],
+       xW = [],
+       lW = [],
+       AW = [],
+ ... (10 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L97-L101` → after: `L173-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L173-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/109.js#L173-L190) · [Before (L97-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/109.js#L97-L101)

```diff
-     function zB() {
-       return {
-         bytes: jB,
-         songsDecoded: yB.song,
-         soundsDecoded: yB.sound
+     function TW(WW, iW, OW, mW, EW, NW, PW, LW, cW) {
+       var wW, tW = UW,
+         ZW = kW;
+       for (wW = 0; wW < 3; wW++) {
+         var xW = 0 === wW ? OW : 1 === wW ? mW : EW;
+         tW[wW] = xW + WW[iW + wW], ZW[wW] = xW + WW[iW + wW + 3]
+       }
+       if (NW[0] < ZW[0] - cW && PW[0] > tW[0] + cW && NW[1] < ZW[1] - cW && PW[1] > tW[1] + cW && NW[2] < ZW[2] - cW && PW[2] > tW[2] + cW) return -1;
+       var lW = -1 / 0,
+         AW = 1 / 0,
+         bW = -1;
+       for (wW = 0; wW < 3; wW++) {
+         var jW = LW[wW];
+         if (0 !== jW) {
+           var MW = jW > 0 ? (tW[wW] - PW[wW]) / jW : (ZW[wW] - NW[wW]) / jW,
+             KW = jW > 0 ? (ZW[wW] - cW - NW[wW]) / jW : (tW[wW] + cW - PW[wW]) / jW;
+ ... (2 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L105-L130` → after: `L199-L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L199-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/109.js#L199-L216) · [Before (L105-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/109.js#L105-L130)

```diff
-     function lB(BB) {
-       if (MB.has(BB)) return;
-       MB.add(BB);
-       const OB = 1 === BB.decodeAudioData.length,
-         GB = BB.decodeAudioData.bind(BB);
-       BB.decodeAudioData = (BB, YB, DB) => {
-         const MB = BB => {
-           const OB = QB._howls.filter((BB => "loaded" !== BB._state));
-           try {
-             null === YB || void 0 === YB || YB(BB)
-           } finally {
-             const GB = OB.find((BB => "loaded" === BB._state));
-             void 0 !== GB && "string" === typeof GB._src && function(BB, OB, GB) {
-               var YB;
-               jB += GB - (null !== (YB = oB.get(OB)) && void 0 !== YB ? YB : 0), oB.set(OB, GB);
-               const DB = JB.get(BB);
- ... (10 more removed lines; see GitHub link above)
+     function uW(WW, iW, OW, wW) {
+       var ZW = Math.sqrt(WW[0] * WW[0] + WW[1] * WW[1] + WW[2] * WW[2]);
+       if (0 === ZW) return ZW;
+       for (var xW = 0; xW < 3; xW++) {
+         var lW = WW[xW] >= 0,
+           AW = lW ? 1 : -1;
+         PW[xW] = AW;
+         var bW = lW ? OW[xW] : iW[xW],
+           jW = lW ? iW[xW] : OW[xW];
+         mW[xW] = jW;
+         var UW = Math.floor(bW - AW * wW);
+         EW[xW] = UW, NW[xW] = Math.floor(jW + AW * wW);
+         var kW = WW[xW] / ZW;
+         tW[xW] = kW;
+         var sW = Math.abs(1 / kW);
+         LW[xW] = sW;
+ ... (2 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L132-L146` → after: `L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/109.js#L218) · [Before (L132-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/109.js#L132-L146)

```diff
-     }(0, YB.g)(zB);
-     const pB = DB.Howl.prototype,
-       qB = pB.init;
-     pB.init = function(BB) {
-       return DB.Howler.volume(), QB.ctx && lB(QB.ctx), qB.call(this, BB)
-     };
-     const ZB = pB.unload;
-     pB.unload = function() {
-       const BB = this._src,
-         OB = ZB.call(this);
-       if ("string" !== typeof BB) return OB;
-       const GB = oB.get(BB);
-       return void 0 !== GB && function(BB) {
-         return !QB._howls.some((OB => OB._src === BB || "string" === typeof OB._src && BB.indexOf(OB._src) >= 0))
-       }(BB) && (oB.delete(BB), jB -= GB), OB
+       return ZW
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L148-L156` → after: `L220-L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L220-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/109.js#L220-L229) · [Before (L148-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/109.js#L148-L156)

```diff
-   },
-   37484: (BB, OB, GB) => {
-     async function YB(BB) {
-       const OB = await fetch(BB, {
-         priority: "low"
-       });
-       if (!OB.ok) throw new Error(`Fetching ${BB} failed: HTTP ${OB.status}`);
-       const GB = OB.body.getReader();
-       for (; !(await GB.read()).done;);
+ 
+     function oW(WW, iW, OW, mW, EW, NW, PW) {
+       var LW = function(WW, iW, OW, mW, EW, NW, PW, LW) {
+         for (var cW = 1 / 0, wW = -1, tW = 0; tW < WW.length; tW += 6) {
+           var ZW = TW(WW, tW, iW, OW, mW, EW, NW, PW, LW);
+           ZW >= 0 && (ZW < cW || ZW === cW && sW[0] < wW) && (cW = ZW, wW = sW[0])
+         }
+         return sW[0] = wW, wW < 0 ? -1 : cW
+       }(WW, iW, OW, mW, EW, NW, PW, nW);
+       LW >= 0 && LW < JW && (JW = LW, hW = sW[0], HW = !0)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L174-L188` → after: `L232-L236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L232-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/109.js#L232-L236) · [Before (L174-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/109.js#L174-L188)

```diff
-     function yB() {
-       var BB, OB;
-       if (jB.ctx || !jB.usingWebAudio || "undefined" === typeof AudioContext || !(0, oB.h)()) return;
-       const GB = navigator.audioSession;
-       let YB;
-       "auto" === (null === GB || void 0 === GB ? void 0 : GB.type) && (GB.type = "ambient");
-       try {
-         YB = new AudioContext({
-           sampleRate: 44100
-         })
-       } catch {
-         return
-       }
-       const DB = YB.createGain();
-       DB.gain.setValueAtTime(jB._muted ? 0 : null !== (BB = jB._volume) && void 0 !== BB ? BB : 1, YB.currentTime), DB.connect(YB.destination), jB.ctx = YB, jB.masterGain = DB, null === (OB = jB._setup) || void 0 === OB || OB.call(jB)
+     function dW(WW, iW, OW, mW) {
+       for (var EW = 0; EW < yW; EW++)
+         if (MW[EW] === iW && KW[EW] === OW && SW[EW] === mW) return YW[EW];
+       var NW = WW(iW, OW, mW);
+       return yW < 32 && (MW[yW] = iW, KW[yW] = OW, SW[yW] = mW, YW[yW] = NW, yW++), NW
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L200-L210` → after: `L239-L244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L239-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/109.js#L239-L244) · [Before (L200-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/109.js#L200-L210)

```diff
-     function lB() {
-       for (; jB._html5AudioPool.length < jB.html5PoolSize;) {
-         const BB = new Audio;
-         BB._unlocked = !0, jB._releaseHtml5Audio(BB)
-       }
-       for (const OB of jB._howls)
-         if (!OB._webAudio)
-           for (const GB of OB._getSoundIds()) {
-             var BB;
-             const YB = null === (BB = OB._soundById(GB)) || void 0 === BB ? void 0 : BB._node;
-             YB && !YB._unlocked && (YB._unlocked = !0, YB.load())
+     function eW(WW, iW, OW, mW) {
+       for (var LW = PW[0], cW = PW[1], wW = PW[2], tW = EW[0] + LW, ZW = EW[1] + cW, xW = EW[2] + wW, lW = NW[0]; lW != tW; lW += LW)
+         for (var AW = NW[1]; AW != ZW; AW += cW)
+           for (var bW = NW[2]; bW != xW; bW += wW) {
+             var jW = dW(WW, lW, AW, bW);
+             Array.isArray(jW) && oW(jW, lW, AW, bW, iW, OW, mW)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L213-L230` → after: `L247-L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L247-L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/109.js#L247-L256) · [Before (L213-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/109.js#L213-L230)

```diff
-     PB.init = function(BB) {
-       return yB(), zB.call(this, BB)
-     }, (0, oB.h)() && (jB._unlockAudio = () => {
-       const BB = jB.ctx;
-       if (jB._audioUnlocked || !BB) return;
-       jB.autoUnlock = !1;
-       const OB = BB.createBuffer(1, 1, 22050);
-       jB._scratchBuffer = OB;
-       const GB = new AbortController;
-       let YB = "afterPaint";
-       const DB = () => {
-           var YB;
-           if (jB._audioUnlocked) return;
-           null === (YB = jB._autoResume) || void 0 === YB || YB.call(jB);
-           const DB = BB.createBufferSource();
-           DB.buffer = OB, DB.connect(BB.destination), DB.start(0), BB.resume().catch((() => {})), DB.onended = () => {
- ... (2 more removed lines; see GitHub link above)
+ 
+     function vW(WW, iW, OW, mW, LW, cW) {
+       for (var wW = PW[0], tW = 0 === iW ? EW[0] : NW[0], ZW = EW[0] + wW, xW = PW[1], lW = 1 === iW ? EW[1] : NW[1], AW = EW[1] + xW, bW = PW[2], jW = 2 === iW ? EW[2] : NW[2], UW = EW[2] + bW, kW = tW; kW != ZW; kW += wW)
+         for (var sW = lW; sW != AW; sW += xW)
+           for (var MW = jW; MW != UW; MW += bW) {
+             var KW = WW(kW, sW, MW);
+             if (!1 !== KW && null !== KW && void 0 !== KW) {
+               if (!Array.isArray(KW)) return OW <= JW && (JW = OW, hW = iW, HW = !1), !0;
+               oW(KW, kW, sW, MW, mW, LW, cW)
+             }
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L232-L254` → after: `L258-L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L258-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/109.js#L258-L260) · [Before (L232-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/109.js#L232-L254)

```diff
-         },
-         yB = () => {
-           lB(), DB()
-         },
-         JB = OB => {
-           if (lB(), "inTap" === YB) {
-             if ("running" === BB.state) return;
-             console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), DB()
-           } else "afterPaint" === YB && (YB = "queued", (0, QB.c)(OB.timeStamp, (() => {
-             YB = "inTap", DB()
-           })))
-         };
-       for (const QB of ["touchstart", "touchend"]) document.addEventListener(QB, yB, {
-         capture: !0,
-         signal: GB.signal
-       });
- ... (7 more removed lines; see GitHub link above)
+       return !1
+     }
+     var gW = 1e8;
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L256-L271` → after: `L262-L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L262-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/109.js#L262-L301) · [Before (L256-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/109.js#L256-L271)

```diff
-     function ZB() {
-       NB();
-       const {
-         ctx: BB,
-         masterGain: OB
-       } = jB;
-       return BB && OB ? {
-         ctx: BB,
-         destination: OB,
-         holdAwake: BB => {
-           var OB, GB;
-           (pB += BB ? 1 : -1, BB) ? null === (OB = jB._autoResume) || void 0 === OB || OB.call(jB): null === (GB = jB._autoSuspend) || void 0 === GB || GB.call(jB)
-         },
-         wake: () => {
-           var OB;
-           "running" !== BB.state && (null === (OB = jB._autoResume) || void 0 === OB || OB.call(jB), BB.resume().catch((() => {})))
+     function DW(WW, iW, OW, UW, kW, sW) {
+       var MW = wW,
+         KW = ZW,
+         SW = xW,
+         YW = AW;
+       VW(iW, OW), sW || (sW = jW);
+       var TW = function(WW, iW, OW, wW, ZW, xW) {
+         var AW = mW,
+           jW = NW,
+           UW = PW,
+           kW = cW,
+           sW = tW,
+           MW = 0,
+           KW = 0,
+           SW = 0,
+           YW = 0;
+ ... (24 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L273` → after: `L303-L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L303-L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/109.js#L303-L310) · [Before (L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/109.js#L273)

```diff
-       } : null
+         for (MW += TW, YW = 0; YW < 3; YW++) wW[YW] += OW[YW], ZW[YW] += OW[YW];
+         return MW
+       }(WW, UW, MW, KW, SW, sW);
+       if (!kW) {
+         for (var oW = 0; oW < 3; oW++) YW[oW] = OW[oW] > 0 ? SW[oW] - iW.max[oW] : KW[oW] - iW.base[oW];
+         iW.translate(YW)
+       }
+       return TW
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L284-L300` → after: `L314-L319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L314-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/109.js#L314-L319) · [Before (L284-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/109.js#L284-L300)

```diff
-       let {
-         afterJoin: GB,
-         joining: YB,
-         idle: DB,
-         fetchFile: QB,
-         rB: oB = () => !1
-       } = OB;
-       const jB = OB => {
-         OB >= BB.length || oB() || GB((() => {
-           DB((() => {
-             oB() || (YB() ? jB(OB) : QB(BB[OB]).catch((() => {})).finally((() => {
-               jB(OB + 1)
-             })))
-           }))
-         }))
-       };
- ... (1 more removed lines; see GitHub link above)
+       for (var OW = wW, mW = ZW, EW = xW, NW = 0; NW < 3; NW++) OW[NW] = +iW[NW], EW[NW] = +WW.max[NW], mW[NW] = +WW.base[NW];
+       for (var PW = 0; PW < 3; PW++) {
+         if (!(Number.isFinite(OW[PW]) && Math.abs(OW[PW]) <= gW)) throw pW("dir", OW, PW);
+         if (!(Number.isFinite(mW[PW]) && Math.abs(mW[PW]) <= gW)) throw pW("base", mW, PW);
+         if (!(Number.isFinite(EW[PW]) && Math.abs(EW[PW]) <= gW)) throw pW("max", EW, PW)
+       }
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L302-L362` → after: `L321-L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L321-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/109.js#L321-L325) · [Before (L302-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/109.js#L302-L362)

```diff
-     GB.d(OB, {
-       b: () => YB
-     })
-   },
-   37466: (BB, OB, GB) => {
-     GB.d(OB, {
-       b: () => YB
-     });
-     const YB = new Set(["gunSemiAutomatic", "gunSubmachineGun", "gunShotgun", "gunRifle", "gunPistol", "gunMisc", "step", "dig", "randomItems", "randomExp", "randomCash", "randomFallsmall", "note", "rpg", "phoneAndMoney"])
-   },
-   37477: (BB, OB, GB) => {
-     GB.d(OB, {
-       c: () => MB,
-       e: () => PB
-     });
-     var YB = GB(16),
- ... (45 more removed lines; see GitHub link above)
+ 
+     function pW(WW, iW, OW) {
+       return new Error("BLOXD VOXEL-SWEEP: non-terminating sweep rejected - " + WW + "[" + OW + "]=" + iW[OW] + " " + WW + "=[" + iW[0] + "," + iW[1] + "," + iW[2] + "]")
+     }
+     DW.checkInput = VW, WW.exports = DW
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L364` → after: `L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/109.js#L327) · [Before (L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/109.js#L364)

```diff
-   37461: (BB, OB, GB) => {
+   40976: (WW, iW, OW) => {
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L367-L368` → after: `L331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/109.js#L331) · [Before (L367-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/109.js#L367-L368)

```diff
-       f: () => DB,
-       j: () => YB
+       i: () => EW
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L371-L372` → after: `L335-L336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L335-L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/109.js#L335-L336) · [Before (L371-L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/109.js#L371-L372)

```diff
-     function YB(BB) {
-       return BB.replace(/[_\-\s]*\d+$/, "") || BB
+     function EW(WW, iW) {
+       return [Math.floor(WW[0] / iW) * iW, Math.floor(WW[1] / iW) * iW, Math.floor(WW[2] / iW) * iW]
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L375-L376` → after: `L339-L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L339-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/109.js#L339-L341) · [Before (L375-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/109.js#L375-L376)

```diff
-     function DB(BB, OB, GB) {
-       return GB <= 0 ? 0 : BB * GB / Math.max(OB, GB)
+     function NW(WW) {
+       const iW = (null !== WW && void 0 !== WW ? WW : "").match(/-?\d+(?:\.\d+)?/g);
+       return iW && iW.length >= 3 ? [Number(iW[0]), Number(iW[1]), Number(iW[2])] : null
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L380-L381` → after: `L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/109.js#L345) · [Before (L380-L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/109.js#L380-L381)

```diff
-       const GB = BB.getDurationMs();
-       return GB > 0 ? BB.loudness * Math.max(0, 1 - (OB - BB.startMs) / GB) : 0
+       return WW === iW ? String(WW) : `${WW}-${iW}`
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L383-L392` → after: `L347-L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L347-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/109.js#L347-L369) · [Before (L383-L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/109.js#L383-L392)

```diff
-     class oB {
-       constructor() {
-         let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24,
-           OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
-         this.maxVoices = BB, this.maxPerGroup = OB, this.voices = []
-       }
-       admit(BB) {
-         if (this.voices = this.voices.filter((BB => BB.isAlive())), null !== BB.group) {
-           const OB = this.voices.filter((OB => OB.group === BB.group));
-           if (OB.length >= this.maxPerGroup && !this.dropLeastWorth(OB, BB)) return !1
+ 
+     function LW(WW, iW, OW, mW) {
+       const EW = [];
+       let NW = new Map;
+       for (let PW = WW[2]; PW < WW[2] + iW; PW++) {
+         const LW = new Map;
+         let cW = WW[0];
+         for (; cW < WW[0] + iW;) {
+           const EW = mW(cW, OW, PW);
+           let wW = cW;
+           for (; wW + 1 < WW[0] + iW && mW(wW + 1, OW, PW) === EW;) wW++;
+           if (null !== EW) {
+             const WW = `${cW} ${wW} ${EW}`,
+               iW = NW.get(WW);
+             iW ? (iW.z1 = PW, NW.delete(WW), LW.set(WW, iW)) : LW.set(WW, {
+               x0: cW,
+ ... (7 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L394` → after: `L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/109.js#L371) · [Before (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/109.js#L394)

```diff
-         return !(this.voices.length >= this.maxVoices && !this.dropLeastWorth(this.voices, BB)) && (this.voices.push(BB), !0)
+         EW.push(...NW.values()), NW = LW
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L396-L402` → after: `L373-L399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L373-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/109.js#L373-L399) · [Before (L396-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/109.js#L396-L402)

```diff
-       dropLeastWorth(BB, OB) {
-         let GB = null,
-           YB = 1 / 0;
-         for (const DB of BB) {
-           if (!DB.canStop()) continue;
-           const BB = QB(DB, OB.startMs);
-           BB < YB && (GB = DB, YB = BB)
+       return EW.push(...NW.values()), EW.sort(((WW, iW) => WW.z0 - iW.z0 || WW.x0 - iW.x0)).map((WW => `x${PW(WW.x0,WW.x1)} z${PW(WW.z0,WW.z1)} ${WW.name}`))
+     }
+ 
+     function cW(WW, iW, OW, EW) {
+       let NW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : mW;
+       const cW = [WW[0] + iW - 1, WW[1] + iW - 1, WW[2] + iW - 1],
+         wW = null !== EW && EW.every(((iW, OW) => Math.floor(iW) >= WW[OW] && Math.floor(iW) <= cW[OW])),
+         tW = [`The chunk from ${WW.join(" ")} to ${cW.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
+       null !== EW && tW.push(`The player's feet are at ${EW.map(Math.floor).join(" ")}, ${wW?"in this chunk":"outside this chunk"}.`);
+       const ZW = [];
+       for (let mW = WW[1]; mW <= cW[1]; mW++) {
+         const EW = LW(WW, iW, mW, OW).join("; "),
+           NW = ZW[ZW.length - 1];
+         (null === NW || void 0 === NW ? void 0 : NW.boxes) === EW ? NW.to = mW : ZW.push({
+           from: mW,
+           to: mW,
+ ... (11 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L404` → after: `L401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/109.js#L401) · [Before (L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/109.js#L404)

```diff
-         return !(!GB || OB.loudness < YB) && (this.voices.splice(this.voices.indexOf(GB), 1), GB.stop(), !0)
+         tW.push(WW)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L408` → after: `L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/109.js#L406) · [Before (L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/109.js#L408)

```diff
-   37254: (BB, OB, GB) => {
+   40980: (WW, iW, OW) => {
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L410-L412` → after: `L408-L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L408-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/109.js#L408-L409) · [Before (L410-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/109.js#L410-L412)

```diff
-       e: () => DB,
-       i: () => oB,
-       k: () => jB
+       c: () => mW,
+       e: () => EW
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L414-L416` → after: `L411-L450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L411-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/109.js#L411-L450) · [Before (L414-L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/109.js#L414-L416)

```diff
-     var YB = GB(25);
-     const DB = "touchSprintChanged";
-     let QB = !0;
+     const mW = "The world isn't loaded, so no blocks can be seen.",
+       EW = "The world isn't loaded, so nothing in it can be seen."
+   },
+   40482: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => nW
+     });
+     var mW = OW(1876),
+       EW = OW(1422),
+       NW = OW(62),
+       PW = OW(1089),
+       LW = OW.n(PW),
+       cW = OW(1532),
+       wW = OW(100);
+     const tW = ["video/webm;codecs=vp9,opus", "video/webm;codecs=vp8,opus", "video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"],
+       ZW = ["video/mp4;codecs=avc1,mp4a.40.2", "video/mp4;codecs=avc1.42E01E,mp4a.40.2", "video/mp4;codecs=avc1", "video/mp4"];
+ ... (24 more added lines; see GitHub link above)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L419` → after: `L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/109.js#L453) · [Before (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/109.js#L419)

```diff
-       return QB
+       return AW("webm") ? "webm" : AW("mp4") ? "mp4" : "webm"
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L423` → after: `L457-L487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L457-L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/109.js#L457-L487) · [Before (L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/109.js#L423)

```diff
-       BB !== QB && (QB = BB, YB.o.tM(DB, BB))
+       let {
+         cards: iW
+       } = WW;
+       return (0, bW.jsx)("div", {
+         className: "ReplayVideoExportOptionCards",
+         children: iW.map((WW => (0, bW.jsxs)("div", {
+           className: "ReplayVideoExportOptionColumn",
+           children: [(0, bW.jsx)("div", {
+             className: LW()("ReplayVideoExportOptionCard", {
+               Selected: WW.selected,
+               Disabled: WW.disabled
+             }),
+             onClick: () => {
+               WW.disabled || WW.onSelect()
+             },
+             children: (0, bW.jsxs)("div", {
+ ... (15 more added lines; see GitHub link above)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L425-L438` → after: `L489-L521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L489-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/109.js#L489-L521) · [Before (L425-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/109.js#L425-L438)

```diff
-   },
-   37490: (BB, OB, GB) => {
-     GB.d(OB, {
-       c: () => QB,
-       e: () => oB,
-       i: () => YB
-     });
-     class YB {
-       constructor(BB) {
-         this.multipliers = {}, this._onUpdate = void 0, this._onUpdate = BB
-       }
-       setMultiplierType(BB, OB) {
-         var GB;
-         this.multipliers[BB] = OB, null === (GB = this._onUpdate) || void 0 === GB || GB.call(this)
+     const sW = (0, NW.memo)((function(WW) {
+       let {
+         hasPlaybackMark: iW,
+         canIncludeUi: OW,
+         includeUiDisabledReason: mW,
+         selectionRef: EW,
+         closePopup: PW
+       } = WW;
+       const LW = AW("webm") || AW("mp4"),
+         [tW, ZW] = (0, NW.useState)(UW),
+         [xW, lW] = (0, NW.useState)(OW),
+         sW = LW && AW(tW);
+       if (!LW) {
+         const WW = (0, wW.isMobile)() ? "screen recording" : "OBS";
+         return (0, bW.jsxs)("div", {
+           className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
+ ... (17 more added lines; see GitHub link above)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L440` → after: `L523-L620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L523-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/109.js#L523-L620) · [Before (L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/109.js#L440)

```diff
-       removeMultiplier(BB) {
+       const MW = iW ? "This will only play the range you've set.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes." : "This will play the whole recording from the start.\nYou won't be able to cancel once it begins.\n\nDon't touch … [truncated]
+         KW = [{
+           id: "withoutUi",
+           label: "Without UI",
+           description: "Usually cleaner and sharper.",
+           selected: !xW,
+           disabled: !1,
+           disabledReason: null,
+           onSelect: () => {
+             lW(!1)
+           }
+         }, {
+           id: "withUi",
+           label: "With UI",
+           description: "Includes HUD elements. May look worse on some devices.",
+           selected: xW,
+ ... (82 more added lines; see GitHub link above)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L442-L450` → after: `L622-L631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L622-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/109.js#L622-L631) · [Before (L442-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/109.js#L442-L450)

```diff
-         delete this.multipliers[BB], null === (OB = this._onUpdate) || void 0 === OB || OB.call(this)
-       }
-       getMultiplierType(BB) {
-         return this.multipliers[BB]
-       }
-       getTotalMultipliedVal() {
-         let BB = 1;
-         for (const OB in this.multipliers) BB *= this.multipliers[OB];
-         return BB
+         return "function" === typeof(null === (WW = navigator.mediaDevices) || void 0 === WW ? void 0 : WW.getDisplayMedia)
+       }() ? {
+         canIncludeUi: !0,
+         includeUiDisabledReason: null
+       } : {
+         canIncludeUi: !1,
+         includeUiDisabledReason: "Not supported on this device"
+       } : {
+         canIncludeUi: !1,
+         includeUiDisabledReason: "No UI to include"
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L453-L463` → after: `L634-L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L634-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/109.js#L634-L642) · [Before (L453-L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/109.js#L453-L463)

```diff
-     class DB {
-       constructor() {
-         let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
-         this.booleans = {}, this._onUpdate = void 0, this._onUpdate = BB
-       }
-       setBooleanType(BB, OB) {
-         const GB = this._getTotalBooleanVal();
-         this.booleans[BB] = !!OB;
-         const YB = this.getTotalBooleanVal();
-         var DB;
-         YB !== GB && (null === (DB = this._onUpdate) || void 0 === DB || DB.call(this, YB, this.booleans));
+     async function TW(WW, iW, OW) {
+       return WW ? async function() {
+         const WW = await navigator.mediaDevices.getDisplayMedia({
+           video: !0,
+           audio: !1,
+           preferCurrentTab: !0,
+           selfBrowserSurface: "include"
+         });
+         for (const iW of WW.getAudioTracks()) iW.stop(), WW.removeTrack(iW);
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L466-L472` → after: `L695-L711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L695-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/109.js#L695-L711) · [Before (L466-L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/109.js#L466-L472)

```diff
-       removeBoolean(BB) {
-         const OB = this._getTotalBooleanVal();
-         delete this.booleans[BB];
-         const GB = this._getTotalBooleanVal();
-         var YB;
-         null !== GB && GB !== OB && (null === (YB = this._onUpdate) || void 0 === YB || YB.call(this, GB, this.booleans));
-         return null !== GB && void 0 !== GB && GB
+       if (!PW) return;
+       const tW = null !== (iW = null === (OW = NW.startFailure) || void 0 === OW ? void 0 : OW.call(NW)) && void 0 !== iW ? iW : null;
+       if (null !== tW) return void EW.NotificationProvider.showAlertPopup({
+         title: "Video export failed",
+         subtitle: tW
+       });
+       if (! function(WW) {
+           return !(0, JW.b)() && ((0, JW.d)(!0), WW.holdInput(!0), !0)
+         }(NW)) return;
+       let ZW = null;
+       try {
+         ZW = await TW(PW.includeUi, (() => NW.canvas()), NW.Fv)
+       } catch (uW) {
+         return console.error("Failed to create video stream for export", uW), HW(NW), void EW.NotificationProvider.showAlertPopup({
+           title: "Video export failed",
+           subtitle: uW instanceof Error ? uW.message : "Could not start capture."
+ ... (1 more added lines; see GitHub link above)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L474-L475` → after: `L713-L819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L713-L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/109.js#L713-L819) · [Before (L474-L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/109.js#L474-L475)

```diff
-       getBooleanType(BB) {
-         return this.booleans[BB]
+       let AW = null;
+       const jW = [];
+       let UW = null,
+         kW = null;
+       try {
+         var KW, SW, nW;
+         AW = NW.playbackSpeed(), NW.closeViewer(), NW.setPlaybackSpeed(1), NW.pause(), NW.seekToTick(null !== LW && void 0 !== LW ? LW : 0);
+         const WW = await async function() {
+           const WW = MW.Howler.masterGain;
+           if (!MW.Howler.ctx || !WW) return null;
+           await MW.Howler.ctx.resume();
+           const iW = MW.Howler.ctx.createMediaStreamDestination();
+           WW.connect(iW), YW = iW;
+           const [OW] = iW.stream.getAudioTracks();
+           return null !== OW && void 0 !== OW ? OW : null
+         }();
+ ... (91 more added lines; see GitHub link above)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L477-L478` → after: `L821-L31020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L821-L31020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/109.js#L821-L31020) · [Before (L477-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/109.js#L477-L478)

```diff
-       getTotalBooleanVal() {
-         throw new Error("This is an abstract class, use BooleanAndCombinator")
+     }
+   },
+   5610: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => tW,
+       h: () => ZW
+     });
+     var mW = OW(5615),
+       EW = OW(25);
+     const NW = .25,
+       PW = .85,
+       LW = .02,
+       cW = .01;
+ 
+     function wW(WW, iW, OW, mW, EW, NW, LW) {
+       const {
+ ... (30184 more added lines; see GitHub link above)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L480-L482` → after: `L31022-L31056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R31022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L31022-L31056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/109.js#L31022-L31056) · [Before (L480-L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/109.js#L480-L482)

```diff
-       forceUpdate() {
-         var BB;
-         null === (BB = this._onUpdate) || void 0 === BB || BB.call(this, this.getTotalBooleanVal(), this.booleans)
+       fY(WW) {
+         const iW = WW._objectCullSlot;
+         if (void 0 !== iW) return iW;
+         let OW = this.free.pop();
+         return void 0 === OW && (OW = this.top < this.slots ? this.top++ : 0, this.top > this.BL.length && this.grow()), 0 !== OW && (this.BL[OW] = 1, this.recorded[OW] = 0, this.coords[3 * OW] = WW.i, this.coords[3 * OW + 1] = WW.j, this.coords[3 * OW + 2] = WW.k, this.keys[OW]  … [truncated]
+           const mW = WW + 32768 & 65535,
+             EW = OW + 32768 & 65535;
+           let NW = 0;
+           for (let PW = 15; PW >= 0; PW--) NW = 4 * NW + 2 * (EW >> PW & 1) + (mW >> PW & 1);
+           return 4096 * NW + (iW + 2048 & 4095)
+         }(WW.i, WW.j, WW.k), this.used++), WW._objectCullSlot = OW, OW
+       }
+       release(WW) {
+         const iW = WW._objectCullSlot;
+         WW._objectCullSlot = void 0, iW && (this.BL[iW] = 0, this.visible[iW] = 1, this.used--, this.pending.push(iW))
+       }
+ ... (19 more added lines; see GitHub link above)
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L484-L485` → after: `L31058-L31093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R31058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L31058-L31093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/109.js#L31058-L31093) · [Before (L484-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/109.js#L484-L485)

```diff
-       _getTotalBooleanVal() {
-         throw new Error("This is an abstract class, use BooleanAndCombinator")
+       update(WW, iW, OW, EW) {
+         const {
+           coords: NW,
+           BL: LW,
+           visible: cW,
+           recorded: wW
+         } = this, tW = OW + 2;
+         let ZW = PW !== this.recordedOn,
+           xW = 0;
+         for (let PW = 1; PW < this.top; PW++) {
+           let lW = 1;
+           if (1 === LW[PW]) {
+             const LW = NW[3 * PW],
+               cW = NW[3 * PW + 1],
+               wW = NW[3 * PW + 2];
+             lW = (0, mW.e)(WW, LW * OW - iW[0] - 1, cW * OW - iW[1] - 1, wW * OW - iW[2] - 1, tW) && (null === EW || EW.isDrawn(LW, cW, wW)) ? 1 : 0
+ ... (20 more added lines; see GitHub link above)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L488-L492` → after: `L31096-L31110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R31096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L31096-L31110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/109.js#L31096-L31110) · [Before (L488-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/109.js#L488-L492)

```diff
-     class QB extends DB {
-       getTotalBooleanVal() {
-         const BB = this._getTotalBooleanVal();
-         if (null === BB) throw new Error("Should not be gotten before at least 1 type has been initialised");
-         return BB
+ 
+     function sW(WW) {
+       var iW;
+       return null === (iW = WW.fb) || void 0 === iW ? void 0 : iW.R_
+     }
+ 
+     function MW(WW, iW, OW, mW, EW, NW) {
+       let PW = 0,
+         LW = !1,
+         cW = 0,
+         wW = 0,
+         tW = 0;
+       for (let ZW = 0; ZW < OW; ZW++) {
+         const OW = iW[ZW];
+         1 === mW[WW[ZW]] && (LW && tW - wW <= EW || (LW && (NW[2 * PW] = cW, NW[2 * PW + 1] = wW - cW, PW++), LW = !0, cW = tW), wW = OW), tW = OW
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L494-L498` → after: `L31112-L31114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R31112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L31112-L31114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/109.js#L31112-L31114) · [Before (L494-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/109.js#L494-L498)

```diff
-       _getTotalBooleanVal() {
-         let BB = !1,
-           OB = !0;
-         for (const GB in this.booleans) BB = !0, OB &&= this.booleans[GB];
-         return BB ? OB : null
+       if (LW) {
+         if (0 === PW && 0 === cW && wW === tW) return -1;
+         NW[2 * PW] = cW, NW[2 * PW + 1] = wW - cW, PW++
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L501-L505` → after: `L31118-L31127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R31118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L31118-L31127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/109.js#L31118-L31127) · [Before (L501-L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/109.js#L501-L505)

```diff
-     class oB extends DB {
-       getTotalBooleanVal() {
-         const BB = this._getTotalBooleanVal();
-         if (null === BB) throw new Error("Should not be gotten before at least 1 type has been initialised");
-         return BB
+ 
+     function KW(WW, iW, OW, mW, EW, NW, PW) {
+       let LW = 0;
+       for (let cW = 0; cW < 24; cW += 4) {
+         const wW = WW[cW],
+           tW = WW[cW + 1],
+           ZW = WW[cW + 2],
+           xW = wW * (wW >= 0 ? iW + EW : iW) + tW * (tW >= 0 ? OW + EW : OW) + ZW * (ZW >= 0 ? mW + EW : mW) + WW[cW + 3];
+         0 === cW && (LW = Math.max(xW, 0));
+         if (xW + (4 === cW ? PW : cW >= 8 ? NW * LW : 0) < 0) return !1
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L507-L511` → after: `L31129-L31183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R31129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L31129-L31183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/109.js#L31129-L31183) · [Before (L507-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/109.js#L507-L511)

```diff
-       _getTotalBooleanVal() {
-         let BB = !1,
-           OB = !1;
-         for (const GB in this.booleans) BB = !0, OB ||= this.booleans[GB];
-         return BB ? OB : null
+       return !0
+     }
+     const SW = 1e-4;
+ 
+     function YW(WW, iW, OW, mW, EW, NW, PW) {
+       const LW = (OW.x + mW.x) / 2,
+         cW = (OW.y + mW.y) / 2,
+         wW = (OW.z + mW.z) / 2,
+         tW = (mW.x - OW.x) / 2,
+         ZW = (mW.y - OW.y) / 2,
+         xW = (mW.z - OW.z) / 2;
+       for (let lW = 0; lW < 3; lW++) {
+         const OW = 0 === lW ? EW : 1 === lW ? NW : PW,
+           mW = WW[iW + lW],
+           AW = WW[iW + 4 + lW],
+           bW = WW[iW + 8 + lW],
+ ... (39 more added lines; see GitHub link above)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L515` → after: `L31187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R31187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L31187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/109.js#L31187) · [Before (L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/109.js#L515)

```diff
-   37486: (BB, OB, GB) => {
+   39948: (WW, iW, OW) => {
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L517-L519` → after: `L31189-L31192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R31189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L31189-L31192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/109.js#L31189-L31192) · [Before (L517-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/109.js#L517-L519)

```diff
-       c: () => QB,
-       f: () => YB,
-       g: () => DB
+       b: () => NW,
+       d: () => EW,
+       e: () => cW,
+       h: () => ZW
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L521` → after: `L31194-L31195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R31194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L31194-L31195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/109.js#L31194-L31195) · [Before (L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/109.js#L521)

```diff
-     const YB = 15,
+     var mW = OW(38364);
+     const EW = 0,
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L523` → after: `L31197-L31217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R31197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L31197-L31217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/109.js#L31197-L31217) · [Before (L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/109.js#L523)

```diff
-       QB = 30
+       PW = 4,
+       LW = new Map([
+         [EW, mW.e.ALPHA_ONEONE],
+         [1, mW.e.ALPHA_COMBINE],
+         [2, mW.e.ALPHA_ADD],
+         [NW, mW.e.ALPHA_MULTIPLY],
+         [-1, mW.e.ALPHA_SUBTRACT]
+       ]);
+ 
+     function cW(WW) {
+       var iW;
+       return null !== (iW = LW.get(WW)) && void 0 !== iW ? iW : WW
+     }
+     const wW = [NW, 2],
+       tW = new Map;
+ 
+ ... (5 more added lines; see GitHub link above)
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L525` → after: `L31219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R31219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L31219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/109.js#L31219) · [Before (L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/109.js#L525)

```diff
-   6991: (BB, OB, GB) => {
+   39983: (WW, iW, OW) => {
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L528-L529` → after: `L31222-L31418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R31222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L31222-L31418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/109.js#L31222-L31418) · [Before (L528-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/109.js#L528-L529)

```diff
-       h: () => DB,
-       j: () => yB,
+       i: () => LW,
+       m: () => wW,
+       p: () => PW
+     });
+     var mW = OW(7646);
+     const EW = new Map,
+       NW = new Map;
+ 
+     function PW(WW) {
+       const iW = JSON.stringify(WW),
+         OW = EW.get(iW);
+       if (void 0 !== OW) return OW;
+       const mW = EW.size + 1;
+       return EW.set(iW, mW), NW.set(mW, WW), mW
+     }
+ 
+ ... (181 more added lines; see GitHub link above)
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/109.js` (Changed code · before: `L535-L556` → after: `L41097-L41119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80R41097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-08bb2587f4b3733b49949f2dc73b96cd9e3114c66964a317c2b7d8a927863e80) · [After (L41097-L41119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/109.js#L41097-L41119) · [Before (L535-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/109.js#L535-L556)

```diff
-     let YB = function(BB) {
-         return BB[BB.DEFAULT = 0] = "DEFAULT", BB[BB.BOAT = 1] = "BOAT", BB[BB.GLIDER = 2] = "GLIDER", BB[BB.BALLOON = 3] = "BALLOON", BB[BB.SLEEPING = 4] = "SLEEPING", BB[BB.RIDING_MOB = 5] = "RIDING_MOB", BB[BB.CAR = 6] = "CAR", BB[BB.HOVERCRAFT = 7] = "HOVERCRAFT", BB
-       }({}),
-       DB = function(BB) {
-         return BB[BB.WOOD = 0] = "WOOD", BB[BB.OBSIDIAN = 1] = "OBSIDIAN", BB[BB.SPEED = 2] = "SPEED", BB
-       }({}),
-       QB = function(BB) {
-         return BB[BB.WOOD = 0] = "WOOD", BB[BB.IRON = 1] = "IRON", BB[BB.GOLD = 2] = "GOLD", BB[BB.DIAMOND = 3] = "DIAMOND", BB
-       }({}),
-       oB = function(BB) {
-         return BB[BB.YELLOW = 0] = "YELLOW", BB[BB.WHITE = 1] = "WHITE", BB[BB.RED = 2] = "RED", BB[BB.PURPLE = 3] = "PURPLE", BB[BB.PINK = 4] = "PINK", BB[BB.ORANGE = 5] = "ORANGE", BB[BB.MAGENTA = 6] = "MAGENTA", BB[BB.LIME = 7] = "LIME", BB[BB.LIGHT_GRAY = 8] = "LIGHT_GRAY", B … [truncated]
-       }({}),
-       jB = function(BB) {
-         return BB[BB.ROTATION_1 = 0] = "ROTATION_1", BB[BB.ROTATION_2 = 1] = "ROTATION_2", BB[BB.ROTATION_3 = 2] = "ROTATION_3", BB[BB.ROTATION_4 = 3] = "ROTATION_4", BB
-       }({}),
-       yB = function(BB) {
- ... (6 more removed lines; see GitHub link above)
+     const mW = ["terrain", "liquid", "model"];
+ 
+     function EW() {
+       const WW = [];
+       for (const iW of [!1, !0])
+         for (const OW of mW) WW.push({
+           strict: iW,
+           program: OW
+         });
+       return WW
+     }
+ 
+     function NW(WW) {
+       return `${WW.strict?"strict":"allow"}.${WW.program}`
+     }
+ 
+ ... (7 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/110.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/110.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae)

#### 1. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/110.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/110.js#L2)

```diff
- export const ids = [108, 110];
+ export const ids = [110];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L4-L77` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/110.js#L4) · [Before (L4-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/110.js#L4-L77)

```diff
-   37113: (BB, OB, GB) => {
-     GB.r(OB), GB.d(OB, {
-       countDecodesAs: () => PB,
-       decodedAudio: () => zB
-     });
-     var YB = GB(3311),
-       DB = GB(5353);
-     const QB = DB.Howler,
-       oB = new Map;
-     let jB = 0;
-     const yB = {
-         song: 0,
-         sound: 0
-       },
-       JB = new WeakMap,
-       MB = new WeakSet;
- ... (58 more removed lines; see GitHub link above)
+   5615: (WW, iW, OW) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L84-L86` → after: `L11-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L11-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/110.js#L11-L13) · [Before (L84-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/110.js#L84-L86)

```diff
-     var YB, DB = GB(5362),
-       QB = GB(3873),
-       oB = GB(5073);
+     var mW, EW = OW(5618),
+       NW = OW(4653),
+       PW = OW(5356);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L91` → after: `L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/110.js#L18) · [Before (L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/110.js#L91)

```diff
-       if (jB.ctx || !jB.usingWebAudio || "undefined" === typeof AudioContext || !(0, oB.h)()) return;
+       if (LW.ctx || !LW.usingWebAudio || "undefined" === typeof AudioContext || !(0, PW.k)()) return;
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L103` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/110.js#L30) · [Before (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/110.js#L103)

```diff
-       DB.gain.setValueAtTime(jB._muted ? 0 : null !== (BB = jB._volume) && void 0 !== BB ? BB : 1, YB.currentTime), DB.connect(YB.destination), jB.ctx = YB, jB.masterGain = DB, null === (OB = jB._setup) || void 0 === OB || OB.call(jB)
+       EW.gain.setValueAtTime(LW._muted ? 0 : null !== (WW = LW._volume) && void 0 !== WW ? WW : 1, mW.currentTime), EW.connect(mW.destination), LW.ctx = mW, LW.masterGain = EW, null === (iW = LW._setup) || void 0 === iW || iW.call(LW)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L130` → after: `L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/110.js#L57) · [Before (L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/110.js#L130)

```diff
-     }, (0, oB.h)() && (jB._unlockAudio = () => {
+     }, (0, PW.k)() && (LW._unlockAudio = () => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L155` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/110.js#L82) · [Before (L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/110.js#L155)

```diff
-           } else "afterPaint" === YB && (YB = "queued", (0, QB.c)(OB.timeStamp, (() => {
+           } else "afterPaint" === mW && (mW = "queued", (0, NW.b)(iW.timeStamp, (() => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/110.js` (Changed code · before: `L163` → after: `L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42aeR90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7c117c2713e011ad87c21007a17fbd2148c5bc31c03e3f6692d96745417f42ae) · [After (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/110.js#L90) · [Before (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/110.js#L163)

```diff
-       for (const QB of oB.c) document.addEventListener(QB, JB, {
+       for (const NW of PW.d) document.addEventListener(NW, wW, {
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/111.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/111.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4)

#### 1. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L3` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/111.js#L2) · [Before (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/111.js#L3)

```diff
- export const ids = [111];
+ export const ids = [110, 111];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L5-L68` → after: `L4-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L4-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/111.js#L4-L40) · [Before (L5-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/111.js#L5-L68)

```diff
-   5362: (BB, OB, GB) => {
-     var YB;
-     ! function() {
-       var DB = function() {
-         this.init()
-       };
-       DB.prototype = {
-         init: function() {
-           var BB = this || QB;
-           return BB._counter = 1e3, BB._html5AudioPool = [], BB.html5PoolSize = 10, BB._codecs = {}, BB._howls = [], BB._muted = !1, BB._volume = 1, BB._canPlayEvent = "canplaythrough", BB._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null, B … [truncated]
-         },
-         volume: function(BB) {
-           var OB = this || QB;
-           if (BB = parseFloat(BB), OB.ctx || lB(), "undefined" !== typeof BB && BB >= 0 && BB <= 1) {
-             if (OB._volume = BB, OB._muted) return OB;
-             OB.usingWebAudio && OB.masterGain.gain.setValueAtTime(BB, QB.ctx.currentTime);
- ... (48 more removed lines; see GitHub link above)
+   37569: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       countDecodesAs: () => ZW,
+       decodedAudio: () => xW
+     });
+     var mW = OW(4020),
+       EW = OW(5615);
+     const NW = EW.Howler,
+       PW = new Map;
+     let LW = 0;
+     const cW = {
+         song: 0,
+         sound: 0
+       },
+       wW = new WeakMap,
+       tW = new WeakSet;
+ ... (21 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L70-L125` → after: `L42-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L42-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/111.js#L42-L50) · [Before (L70-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/111.js#L70-L125)

```diff
-             OB = "undefined" !== typeof Audio ? new Audio : null
-           } catch (MB) {
-             return BB
-           }
-           if (!OB || "function" !== typeof OB.canPlayType) return BB;
-           var GB = OB.canPlayType("audio/mpeg;").replace(/^no$/, ""),
-             YB = BB._navigator ? BB._navigator.userAgent : "",
-             DB = YB.match(/OPR\/([0-6].)/g),
-             oB = DB && parseInt(DB[0].split("/")[1], 10) < 33,
-             jB = -1 !== YB.indexOf("Safari") && -1 === YB.indexOf("Chrome"),
-             yB = YB.match(/Version\/(.*?) /),
-             JB = jB && yB && parseInt(yB[1], 10) < 15;
-           return BB._codecs = {
-             mp3: !(oB || !GB && !OB.canPlayType("audio/mp3;").replace(/^no$/, "")),
-             mpeg: !!GB,
-             opus: !!OB.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
- ... (40 more removed lines; see GitHub link above)
+             null === mW || void 0 === mW || mW(WW)
+           } finally {
+             const OW = iW.find((WW => "loaded" === WW._state));
+             void 0 !== OW && "string" === typeof OW._src && function(WW, iW, OW) {
+               var mW;
+               LW += OW - (null !== (mW = PW.get(iW)) && void 0 !== mW ? mW : 0), PW.set(iW, OW);
+               const EW = wW.get(WW);
+               void 0 !== EW && cW[EW]++
+             }(OW, OW._src, WW.length * WW.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L730-L733` → after: `L54-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L54-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/111.js#L54-L186) · [Before (L730-L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/111.js#L730-L733)

```diff
-       void 0 === (YB = function() {
-         return {
-           Howler: QB,
-           Howl: oB
+         if (!iW) return OW(WW, tW, EW);
+         const ZW = OW(WW).then(tW);
+         return ZW.catch((WW => {
+           null === EW || void 0 === EW || EW(WW)
+         })), ZW
+       }
+     }(0, mW.h)(xW);
+     const AW = EW.Howl.prototype,
+       bW = AW.init;
+     AW.init = function(WW) {
+       return EW.Howler.volume(), NW.ctx && lW(NW.ctx), bW.call(this, WW)
+     };
+     const jW = AW.unload;
+     AW.unload = function() {
+       const WW = this._src,
+         iW = jW.call(this);
+ ... (117 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L735-L737` → after: `L188-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L188-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/111.js#L188-L191) · [Before (L735-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/111.js#L735-L737)

```diff
-       }.apply(OB, [])) || (BB.exports = YB), OB.Howler = QB, OB.Howl = oB, "undefined" !== typeof GB.g ? (GB.g.HowlerGlobal = DB, GB.g.Howler = QB, GB.g.Howl = oB, GB.g.Sound = jB) : "undefined" !== typeof window && (window.HowlerGlobal = DB, window.Howler = QB, window.Howl = oB, … [truncated]
-     }(),
-     function() {
+       } : null
+     }
+ 
+     function UW() {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/111.js` (Changed code · before: `L739-L893` → after: `L193-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-fd72c163da4b0567d3602fef4b2b356ec072b5e767133c411b6a0df18b7122a4) · [After (L193-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/111.js#L193-L195) · [Before (L739-L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/111.js#L739-L893)

```diff
-       HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(BB) {
-         var OB = this;
-         if (!OB.ctx || !OB.ctx.listener) return OB;
-         for (var GB = OB._howls.length - 1; GB >= 0; GB--) OB._howls[GB].stereo(BB);
-         return OB
-       }, HowlerGlobal.prototype.pos = function(BB, OB, GB) {
-         var YB = this;
-         return YB.ctx && YB.ctx.listener ? (OB = "number" !== typeof OB ? YB._pos[1] : OB, GB = "number" !== typeof GB ? YB._pos[2] : GB, "number" !== typeof BB ? YB._pos : (YB._pos = [BB, OB, GB], "undefined" !== typeof YB.ctx.listener.positionX ? (YB.ctx.listener.positionX.setT … [truncated]
-       }, HowlerGlobal.prototype.orientation = function(BB, OB, GB, YB, DB, QB) {
-         var oB = this;
-         if (!oB.ctx || !oB.ctx.listener) return oB;
-         var jB = oB._orientation;
-         return OB = "number" !== typeof OB ? jB[1] : OB, GB = "number" !== typeof GB ? jB[2] : GB, YB = "number" !== typeof YB ? jB[3] : YB, DB = "number" !== typeof DB ? jB[4] : DB, QB = "number" !== typeof QB ? jB[5] : QB, "number" !== typeof BB ? jB : (oB._orientation = [BB, O … [truncated]
-       }, Howl.prototype.init = (BB = Howl.prototype.init, function(OB) {
-         var GB = this;
-         return GB._orientation = OB.orientation || [1, 0, 0], GB._stereo = OB.stereo || null, GB._pos = OB.pos || null, GB._pannerAttr = {
- ... (139 more removed lines; see GitHub link above)
+       (LW.volume(), LW.ctx && LW.autoUnlock) && (null === (WW = LW._unlockAudio) || void 0 === WW || WW.call(LW))
+     }
+     bW && (LW._autoSuspend = () => AW > 0 ? EW.Howler : bW())
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/112.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/112.js` (11 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295)

#### 1. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/112.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/112.js#L2)

```diff
- export const ids = [112];
+ export const ids = [110, 111, 112];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/112.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/112.js#L4)

```diff
-   5368: (BB, OB, GB) => {
+   37569: (WW, iW, OW) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L6-L16` → after: `L6-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L6-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/112.js#L6-L13) · [Before (L6-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/112.js#L6-L16)

```diff
-       default: () => aB
-     });
-     var YB = GB(56),
-       DB = GB(1571),
-       QB = GB(353),
-       oB = GB(1234),
-       jB = GB(1675),
-       yB = GB(1262),
-       JB = GB(1591),
-       MB = GB(1540),
-       PB = GB(2946);
+       countDecodesAs: () => ZW,
+       decodedAudio: () => xW
+     });
+     var mW = OW(4020),
+       EW = OW(5615);
+     const NW = EW.Howler,
+       PW = new Map;
+     let LW = 0;
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L18-L19` → after: `L15-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L15-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/112.js#L15-L64) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/112.js#L18-L19)

```diff
-       retries: 2,
-       minTimeout: 2e3
+         song: 0,
+         sound: 0
+       },
+       wW = new WeakMap,
+       tW = new WeakSet;
+ 
+     function ZW(WW, iW) {
+       return wW.set(WW, iW), WW
+     }
+ 
+     function xW() {
+       return {
+         bytes: LW,
+         songsDecoded: cW.song,
+         soundsDecoded: cW.sound
+       }
+ ... (34 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L21-L47` → after: `L66-L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L66-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/112.js#L66-L247) · [Before (L21-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/112.js#L21-L47)

```diff
-     var lB = GB(1106),
-       pB = GB(1673),
-       qB = GB(1112),
-       ZB = GB(2e3),
-       NB = GB(1175),
-       RB = GB(1217),
-       WB = GB(3926),
-       AB = GB(1375),
-       VB = GB(1485),
-       SB = GB(1560),
-       nB = GB(2893),
-       UB = GB(2903),
-       fB = GB(5375),
-       kB = GB(2289),
-       dB = GB(1090),
-       KB = GB.n(dB),
- ... (11 more removed lines; see GitHub link above)
+     const jW = AW.unload;
+     AW.unload = function() {
+       const WW = this._src,
+         iW = jW.call(this);
+       if ("string" !== typeof WW) return iW;
+       const OW = PW.get(WW);
+       return void 0 !== OW && function(WW) {
+         return !NW._howls.some((iW => iW._src === WW || "string" === typeof iW._src && WW.indexOf(iW._src) >= 0))
+       }(WW) && (PW.delete(WW), LW -= OW), iW
+     }
+   },
+   37606: (WW, iW, OW) => {
+     async function mW(WW) {
+       const iW = await fetch(WW, {
+         priority: "low"
+       });
+ ... (166 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L50-L69` → after: `L250-L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L250-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/112.js#L250-L316) · [Before (L50-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/112.js#L50-L69)

```diff
-       let {
-         icon: OB,
-         label: GB,
-         value: YB
-       } = BB;
-       return (0, wB.jsxs)("div", {
-         className: "PlayerProfileStat",
-         children: [(0, wB.jsx)(uB.b, {
-           name: OB,
-           className: "PlayerProfileStatIcon"
-         }), (0, wB.jsxs)("div", {
-           className: "PlayerProfileStatText",
-           children: [(0, wB.jsx)("div", {
-             className: "PlayerProfileStatLabel SmallTextLight",
-             children: GB
-           }), (0, wB.jsx)("div", {
- ... (4 more removed lines; see GitHub link above)
+       return EW = WW, () => {
+         EW === WW && (EW = null)
+       }
+     }
+ 
+     function PW() {
+       return null !== EW
+     }
+ 
+     function LW(WW, iW, OW, NW) {
+       const PW = function(WW, iW) {
+         return "randomCannon" === WW || "randomFirecracker" === WW ? "explosion" : WW.startsWith("gun") ? /_shot_|^headshot/.test(iW) ? "combat" : null : WW.startsWith("mob") ? "creature" : /^(hit\d*|bow|successfulBowHit)$/.test(iW) ? "combat" : /^(chestOpen|chestClose|doorOpen|d … [truncated]
+       }(WW, iW);
+       if (null === PW || !EW) return;
+       OW * OW + NW * NW >= mW && EW(PW, Math.PI / 2 - Math.atan2(NW, OW))
+     }
+ ... (51 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L71` → after: `L318-L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L318-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/112.js#L318-L324) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/112.js#L71)

```diff
-     }
+   },
+   37583: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => PW,
+       d: () => EW,
+       f: () => mW
+     });
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L74-L129` → after: `L327-L347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L327-L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/112.js#L327-L347) · [Before (L74-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/112.js#L74-L129)

```diff
-       let {
-         profile: OB
-       } = BB;
-       const {
-         t: GB,
-         selectedLanguage: YB
-       } = (0, NB.H)();
-       let DB = GB("homePage:profileUnknown");
-       if (OB.lastOnline) {
-         const BB = (0, NB.s)(YB.code, "homePage:profileTimeAgo");
-         DB = GB("homePage:profileTimeAgo", {
-           time: (0, QB.eb)(BB, OB.lastOnline, Date.now())
-         })
-       }
-       let oB = GB("homePage:profileUnknown");
-       return OB.accountCreatedAt && (oB = new Date(OB.accountCreatedAt).toLocaleDateString(void 0, {
- ... (40 more removed lines; see GitHub link above)
+       return WW.replace(/[_\-\s]*\d+$/, "") || WW
+     }
+ 
+     function EW(WW, iW, OW) {
+       return OW <= 0 ? 0 : WW * OW / Math.max(iW, OW)
+     }
+ 
+     function NW(WW, iW) {
+       const OW = WW.getDurationMs();
+       return OW > 0 ? WW.loudness * Math.max(0, 1 - (iW - WW.startMs) / OW) : 0
+     }
+     class PW {
+       constructor() {
+         let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24,
+           iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
+         this.maxVoices = WW, this.maxPerGroup = iW, this.voices = []
+ ... (5 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L131-L145` → after: `L349-L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L349-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/112.js#L349-L373) · [Before (L131-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/112.js#L131-L145)

```diff
-       })), [OO, GO] = (0, YB.useState)(0);
-       (0, YB.useEffect)(nB.f, []), (0, YB.useEffect)((() => {
-         FB.gameBridge.send("leaveGame", {
-           reloadPath: null
-         }), IB.c.set({
-           gameState: "landingPage",
-           openEverythingMenuName: null,
-           openInGameMenuName: null
-         })
-       }), [iB.key]);
-       const YO = () => {
-         const BB = (0, SB.getPreviousLocation)();
-         null === BB || BB.startsWith("/play") ? (0, SB.navigateToHomePage)() : OB(-1)
-       };
-       (0, XB.e)(YO), (0, YB.useEffect)((() => {
+         return !(this.voices.length >= this.maxVoices && !this.dropLeastWorth(this.voices, WW)) && (this.voices.push(WW), !0)
+       }
+       dropLeastWorth(WW, iW) {
+         let OW = null,
+           mW = 1 / 0;
+         for (const EW of WW) {
+           if (!EW.canStop()) continue;
+           const WW = NW(EW, iW.startMs);
+           WW < mW && (OW = EW, mW = WW)
+         }
+         return !(!OW || iW.loudness < mW) && (this.voices.splice(this.voices.indexOf(OW), 1), OW.stop(), !0)
+       }
+     }
+   },
+   37626: (WW, iW, OW) => {
+     OW.d(iW, {
+ ... (9 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L147-L419` → after: `L375-L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L375-L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/112.js#L375-L377) · [Before (L147-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/112.js#L147-L419)

```diff
-         if (bB) return;
-         if (!cB) return void BO({
-           status: "notFound",
-           playerKey: aB
-         });
-         const OB = "urlId" in cB && (null === (BB = HB.current) || void 0 === BB ? void 0 : BB.urlId) === cB.urlId && vB.current === TB;
-         if (OB && sB.current) return;
-         const GB = OB ? null : UB.b.peek(TB, cB);
-         let YB = !1;
-         const DB = BB => "loaded" === BB.status && (BB.playerKey === aB || "urlId" in cB && BB.profile.urlId === cB.urlId);
-         return GB ? (vB.current = TB, sB.current = !1, BO({
-           status: "loaded",
-           profile: GB,
-           playerKey: aB
-         }), UB.b.invalidate(cB)) : BO((BB => DB(BB) ? BB : {
-           status: "loading"
- ... (257 more removed lines; see GitHub link above)
+         this.multipliers[WW] = iW, null === (OW = this._onUpdate) || void 0 === OW || OW.call(this)
+       }
+       removeMultiplier(WW) {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/112.js` (Changed code · before: `L421-L543` → after: `L379-L460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295R379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-22734089d9f052247305bde5303b705b8bb7c409d35b618063c838016ef83295) · [After (L379-L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/112.js#L379-L460) · [Before (L421-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/112.js#L421-L543)

```diff
-         if (!DB || !PB) return;
-         MB.NotificationProvider.showInputPopup({
-           title: "homePage:profileSocialLinkEditTitle",
-           textOpts: {
-             title: {
-               platform: ZB.name
-             }
-           },
-           prefixText: QB.r[OB],
-           placeholderText: "playBloxd",
-           initialValue: null !== (BB = null === GB || void 0 === GB ? void 0 : GB.handle) && void 0 !== BB ? BB : "",
-           maxLength: 30,
-           submitText: "general:save",
-           secondaryButtonText: GB ? "general:remove" : void 0
-         }).getResult().then((async BB => {
-           if ("notificationTornDown" !== BB && null !== BB) try {
- ... (107 more removed lines; see GitHub link above)
+         delete this.multipliers[WW], null === (iW = this._onUpdate) || void 0 === iW || iW.call(this)
+       }
+       getMultiplierType(WW) {
+         return this.multipliers[WW]
+       }
+       getTotalMultipliedVal() {
+         let WW = 1;
+         for (const iW in this.multipliers) WW *= this.multipliers[iW];
+         return WW
+       }
+     }
+     class EW {
+       constructor() {
+         let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
+         this.booleans = {}, this._onUpdate = void 0, this._onUpdate = WW
+       }
+ ... (66 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/113.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/113.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L4-L39` → after: `L5-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L5-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/113.js#L5-L9) · [Before (L4-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/113.js#L4-L39)

```diff
-   5379: (BB, OB, GB) => {
-     GB.r(OB), GB.d(OB, {
-       default: () => AB
-     });
-     var YB = GB(1571),
-       DB = GB(56),
-       QB = GB(1175),
-       oB = GB(1112),
-       jB = GB(1106),
-       yB = GB(2177),
-       JB = GB(1560),
-       MB = GB(1375),
-       PB = GB(1099),
-       zB = GB(16),
-       lB = GB(1485),
-       pB = GB(1383),
- ... (20 more removed lines; see GitHub link above)
+   5618: (WW, iW, OW) => {
+     var mW;
+     ! function() {
+       var EW = function() {
+         this.init()
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L41-L53` → after: `L11-L728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L11-L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/113.js#L11-L728) · [Before (L41-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/113.js#L41-L53)

```diff
- 
-     function AB() {
-       const {
-         t: BB
-       } = (0, QB.H)(), OB = (0, JB.useNavigatePreserveSearch)(), GB = (0, YB.r)(), {
-         isUserContextUpdating: AB
-       } = (0, oB.d)(), VB = (0, yB.c)(), SB = (0, jB.g)(), nB = (UB = GB.pathname).startsWith(ZB.y) ? null : UB.startsWith(WB.docs) ? "docs" : UB.startsWith(WB.leaderboard) ? "leaderboard" : "myGames";
-       var UB;
-       const fB = function(BB) {
-         if (!BB.startsWith(ZB.y)) return {
-           title: "studio:leaveStudio",
-           icon: "left-from-bracket",
-           to: "/"
+       EW.prototype = {
+         init: function() {
+           var WW = this || NW;
+           return WW._counter = 1e3, WW._html5AudioPool = [], WW.html5PoolSize = 10, WW._codecs = {}, WW._howls = [], WW._muted = !1, WW._volume = 1, WW._canPlayEvent = "canplaythrough", WW._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null, W … [truncated]
+         },
+         volume: function(WW) {
+           var iW = this || NW;
+           if (WW = parseFloat(WW), iW.ctx || lW(), "undefined" !== typeof WW && WW >= 0 && WW <= 1) {
+             if (iW._volume = WW, iW._muted) return iW;
+             iW.usingWebAudio && iW.masterGain.gain.setValueAtTime(WW, NW.ctx.currentTime);
+             for (var OW = 0; OW < iW._howls.length; OW++)
+               if (!iW._howls[OW]._webAudio)
+                 for (var mW = iW._howls[OW]._getSoundIds(), EW = 0; EW < mW.length; EW++) {
+                   var PW = iW._howls[OW]._soundById(mW[EW]);
+                   PW && PW._node && (PW._node.volume = PW._volume * WW)
+                 }
+ ... (702 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L55` → after: `L730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/113.js#L730) · [Before (L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/113.js#L55)

```diff
-         const OB = (0, JB.getPreviousLocation)();
+       void 0 === (mW = function() {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L57-L59` → after: `L732-L887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L732-L887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/113.js#L732-L887) · [Before (L57-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/113.js#L57-L59)

```diff
-           title: "general:back",
-           icon: "arrow-left",
-           to: null !== OB && OB.startsWith(WB.myGames) ? -1 : WB.myGames
+           Howler: NW,
+           Howl: PW
+         }
+       }.apply(iW, [])) || (WW.exports = mW), iW.Howler = NW, iW.Howl = PW, "undefined" !== typeof OW.g ? (OW.g.HowlerGlobal = EW, OW.g.Howler = NW, OW.g.Howl = PW, OW.g.Sound = LW) : "undefined" !== typeof window && (window.HowlerGlobal = EW, window.Howler = NW, window.Howl = PW, … [truncated]
+     }(),
+     function() {
+       var WW;
+       HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(WW) {
+         var iW = this;
+         if (!iW.ctx || !iW.ctx.listener) return iW;
+         for (var OW = iW._howls.length - 1; OW >= 0; OW--) iW._howls[OW].stereo(WW);
+         return iW
+       }, HowlerGlobal.prototype.pos = function(WW, iW, OW) {
+         var mW = this;
+         return mW.ctx && mW.ctx.listener ? (iW = "number" !== typeof iW ? mW._pos[1] : iW, OW = "number" !== typeof OW ? mW._pos[2] : OW, "number" !== typeof WW ? mW._pos : (mW._pos = [WW, iW, OW], "undefined" !== typeof mW.ctx.listener.positionX ? (mW.ctx.listener.positionX.setT … [truncated]
+       }, HowlerGlobal.prototype.orientation = function(WW, iW, OW, mW, EW, NW) {
+ ... (140 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/113.js` (Changed code · before: `L61-L113` → after: `L889-L893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1R889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d093372f514ebea62f5fec01e3d1b8ba34c7ec25a1600818dfa6a51a70fd42d1) · [After (L889-L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/113.js#L889-L893) · [Before (L61-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/113.js#L61-L113)

```diff
-       }(GB.pathname);
-       return (0, DB.useEffect)((() => {
-         zB.c.set({
-           gameState: "studio",
-           openEverythingMenuName: null
-         })
-       }), []), (0, NB.jsxs)("div", {
-         className: "StudioLayout AnimFadeIn",
-         children: [VB && (0, NB.jsx)("aside", {
-           className: "StudioLayoutLeft",
-           children: (0, NB.jsx)(qB.e, {})
-         }), (0, NB.jsxs)("div", {
-           className: "StudioLayoutRight",
-           children: [(0, NB.jsxs)("div", {
-             className: "StudioTop",
-             children: [(0, NB.jsx)(PB.b, {
- ... (37 more removed lines; see GitHub link above)
+       }(Sound.prototype.reset);
+       var iW = function(WW, iW) {
+         "spatial" === (iW = iW || "spatial") ? (WW._panner = Howler.ctx.createPanner(), WW._panner.coneInnerAngle = WW._pannerAttr.coneInnerAngle, WW._panner.coneOuterAngle = WW._pannerAttr.coneOuterAngle, WW._panner.coneOuterGain = WW._pannerAttr.coneOuterGain, WW._panner.distan … [truncated]
+       }
+     }()
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/114.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/114.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/114.js` (Changed code · before: `L4` → after: `L4-L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1) · [After (L4-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/114.js#L4-L346) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/114.js#L4)

```diff
-   5392: (BB, OB, GB) => {
+   5627: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       default: () => BW
+     });
+     var mW = OW(62),
+       EW = OW(1616),
+       NW = OW(344),
+       PW = OW(1223),
+       LW = OW(1713),
+       cW = OW(1259),
+       wW = OW(1642),
+       tW = OW(1584),
+       ZW = OW(3682);
+     const xW = {
+       retries: 2,
+       minTimeout: 2e3
+ ... (327 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/114.js` (Changed code · before: `L8` → after: `L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1R350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1) · [After (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/114.js#L350) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/114.js#L8)

```diff
-     var YB = GB(1090),
+     var mW = OW(1089),
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/114.js` (Changed code · before: `L10-L16` → after: `L352-L386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1) · [After (L352-L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/114.js#L352-L386) · [Before (L10-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/114.js#L10-L16)

```diff
-       QB = GB(1383),
-       oB = GB(1375),
-       jB = GB(3944),
-       yB = GB(120),
-       JB = GB(3982),
-       MB = GB(3968),
-       PB = GB(1282);
+       NW = OW(5329),
+       PW = OW(1172),
+       LW = OW(1391),
+       cW = OW(1532),
+       wW = OW(1584),
+       tW = OW(1422),
+       ZW = OW(3479),
+       xW = OW(1283);
+     const lW = {
+       youtube: {
+         icon: "youtube",
+         color: "#FF0033",
+         name: "YouTube"
+       },
+       tiktok: {
+         icon: "tiktok",
+ ... (19 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/114.js` (Changed code · before: `L20` → after: `L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1R390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1) · [After (L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/114.js#L390) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/114.js#L20)

```diff
-         game: OB
+         platform: iW
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/114.js` (Changed code · before: `L22-L41` → after: `L392-L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1R392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1) · [After (L392-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/114.js#L392-L511) · [Before (L22-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/114.js#L22-L41)

```diff
-       const GB = (0, yB.is99NightsCrazyGamesBundle)() ? "large" : "small",
-         YB = (0, JB.f)(OB, GB),
-         zB = (0, jB.e)(YB),
-         lB = void 0 !== zB.blurhash;
-       return (0, PB.jsxs)("div", {
-         className: "SchematicImageContainer",
-         children: [zB.isLoading && !lB && (0, PB.jsx)(oB.b, {
-           loaderType: "Secondary"
-         }), !zB.failed && (null !== zB.src || lB) && (0, PB.jsx)("div", {
-           className: DB()("SchematicImage", MB.h, {
-             SchematicImageFadeIn: zB.fadeIn && !lB
-           }),
-           style: (0, MB.e)(zB),
-           children: (0, PB.jsx)(MB.d, {
-             image: zB
-           })
- ... (4 more removed lines; see GitHub link above)
+       const OW = "youtube" === iW;
+       return (0, xW.jsxs)("span", {
+         className: EW()("PlayerProfileSocialLinkIcon", {
+           PlayerProfileSocialLinkIconYoutube: OW
+         }),
+         children: [OW && (0, xW.jsx)(ZW.e, {
+           variant: "white"
+         }), !OW && (0, xW.jsx)(LW.c, {
+           name: lW[iW].icon,
+           kit: "brands"
+         })]
+       })
+     }
+ 
+     function bW(WW) {
+       let {
+ ... (104 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/114.js` (Changed code · before: `L46-L125` → after: `L516-L520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1R516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1) · [After (L516-L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/114.js#L516-L520) · [Before (L46-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/114.js#L46-L125)

```diff
-   },
-   5382: (BB, OB, GB) => {
-     GB.r(OB), GB.d(OB, {
-       default: () => fB
-     });
-     GB(5386);
-     var YB = GB(56),
-       DB = GB(1090),
-       QB = GB.n(DB),
-       oB = GB(331),
-       jB = GB(1061),
-       yB = GB(1217),
-       JB = GB(1175),
-       MB = GB(1112),
-       PB = GB(1540),
-       zB = GB(5392),
- ... (64 more removed lines; see GitHub link above)
+ 
+     function jW(WW) {
+       let {
+         socialLinks: iW,
+         editable: OW = !1,
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/114.js` (Changed code · before: `L127-L231` → after: `L522-L538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1R522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1) · [After (L522-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/114.js#L522-L538) · [Before (L127-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/114.js#L127-L231)

```diff
-         isUserContextUpdating: DB
-       } = (0, MB.d)(), {
-         isCreating: WB,
-         create: AB
-       } = (0, NB.f)(), [fB, kB] = (0, YB.useState)(null), [dB, KB] = (0, YB.useState)(null), [uB, mB] = (0, YB.useState)(!1);
-       (0, YB.useEffect)((() => {
-         DB || (mB(!1), PB.b.getPublishedGamePreviews(GB, {
-           searchQuery: null,
-           pageNumber: 1,
-           pageSize: 50,
-           onlyFavouriteGames: !1,
-           onlyOwnedGames: !0,
-           onlyApprovedGames: !1,
-           schematicIdsToExclude: [],
-           gameCategories: [],
-           upAndComing: !1
- ... (89 more removed lines; see GitHub link above)
+         onLinksUpdated: EW
+       } = WW;
+       if (!OW && 0 === iW.length) return null;
+       const PW = new Map(iW.map((WW => [WW.platform, WW]))),
+         LW = OW ? NW.t : iW.map((WW => WW.platform));
+       return (0, xW.jsx)("div", {
+         className: "PlayerProfileSocialLinks",
+         children: (0, xW.jsx)("div", {
+           className: "PlayerProfileSocialLinksList",
+           children: LW.map((WW => (0, xW.jsx)(bW, {
+             platform: WW,
+             link: PW.get(WW),
+             editable: OW,
+             userContext: mW,
+             onLinksUpdated: EW
+           }, WW)))
+ ... (1 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/114.js` (Changed code · before: `L235-L304` → after: `L542-L544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1R542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-55cd60f084a5f9830f16b7cf5cef8f9c512a49e5b0dac9c1739ca8ad99f38cf1) · [After (L542-L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/114.js#L542-L544) · [Before (L235-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/114.js#L235-L304)

```diff
-   5402: (BB, OB, GB) => {
-     GB.d(OB, {
-       c: () => oB,
-       f: () => QB
-     });
-     var YB = GB(1586),
-       DB = GB(1282);
- 
-     function QB(BB) {
-       let {
-         thumbnail: OB,
-         name: GB
-       } = BB;
-       return (0, DB.jsxs)("div", {
-         className: "StudioTableGameCell",
-         children: [(0, DB.jsx)("div", {
- ... (54 more removed lines; see GitHub link above)
+   5634: WW => {
+     WW.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGOws7P7D8Kmpqb/NTU1wTQymwGbAhANwwzIOmAYxQRkCXNzczBGtgrFBGQFKFZgsxtuAi67YY5HMQGbAgCIxWSBYHJzHAAAAABJRU5ErkJggg=="
+   }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/115.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/115.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6)

#### 1. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/115.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/115.js#L4-L6)

```diff
-   5392: (BB, OB, GB) => {
-     GB.d(OB, {
-       d: () => zB
+   5651: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       default: () => MW
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L8-L9` → after: `L8-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/115.js#L8-L14) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/115.js#L8-L9)

```diff
-     var YB = GB(1090),
-       DB = GB.n(YB),
+     var mW = OW(1616),
+       EW = OW(62),
+       NW = OW(1172),
+       PW = OW(1107),
+       LW = OW(1095),
+       cW = OW(2192),
+       wW = OW(1605),
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L11-L16` → after: `L16-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L16-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/115.js#L16-L40) · [Before (L11-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/115.js#L11-L16)

```diff
-       oB = GB(1375),
-       jB = GB(3944),
-       yB = GB(120),
-       JB = GB(3982),
-       MB = GB(3968),
-       PB = GB(1282);
+       ZW = OW(1091),
+       xW = OW(25),
+       lW = OW(1532),
+       AW = OW(1391),
+       bW = OW(3591),
+       jW = OW(1638),
+       UW = OW(1283);
+     const kW = [{
+         id: "myGames",
+         icon: "joystick",
+         title: "studio:myGames"
+       }, {
+         id: "leaderboard",
+         icon: "trophy",
+         title: "studio:leaderboard"
+       }, {
+ ... (9 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/115.js` (Changed code · before: `L18-L42` → after: `L42-L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7406faa7a08362bd57849682f7b85755718d285bc6f1ec3326084a9523516ad6) · [After (L42-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/115.js#L42-L110) · [Before (L18-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/115.js#L18-L42)

```diff
-     function zB(BB) {
-       let {
-         game: OB
-       } = BB;
-       const GB = (0, yB.is99NightsCrazyGamesBundle)() ? "large" : "small",
-         YB = (0, JB.f)(OB, GB),
-         zB = (0, jB.e)(YB),
-         lB = void 0 !== zB.blurhash;
-       return (0, PB.jsxs)("div", {
-         className: "SchematicImageContainer",
-         children: [zB.isLoading && !lB && (0, PB.jsx)(oB.b, {
-           loaderType: "Secondary"
-         }), !zB.failed && (null !== zB.src || lB) && (0, PB.jsx)("div", {
-           className: DB()("SchematicImage", MB.h, {
-             SchematicImageFadeIn: zB.fadeIn && !lB
-           }),
- ... (9 more removed lines; see GitHub link above)
+     function MW() {
+       const {
+         t: WW
+       } = (0, NW.B)(), iW = (0, wW.useNavigatePreserveSearch)(), OW = (0, mW.u)(), {
+         isUserContextUpdating: MW
+       } = (0, PW.e)(), KW = (0, cW.e)(), SW = (0, LW.h)(), YW = (yW = OW.pathname).startsWith(jW.z) ? null : yW.startsWith(sW.docs) ? "docs" : yW.startsWith(sW.leaderboard) ? "leaderboard" : "myGames";
+       var yW;
+       const TW = function(WW) {
+         if (!WW.startsWith(jW.z)) return {
+           title: "studio:leaveStudio",
+           icon: "left-from-bracket",
+           to: "/"
+         };
+         const iW = (0, wW.getPreviousLocation)();
+         return {
+           title: "general:back",
+ ... (53 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/116.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/116.js` (15 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/116.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/116.js#L4)

```diff
-   5392: (BB, OB, GB) => {
+   5668: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/116.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/116.js#L6)

```diff
-       d: () => zB
+       b: () => xW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/116.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/116.js#L8)

```diff
-     var YB = GB(1090),
+     var mW = OW(1089),
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L11-L16` → after: `L12-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L12-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/116.js#L12-L16) · [Before (L11-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/116.js#L11-L16)

```diff
-       oB = GB(1375),
-       jB = GB(3944),
-       yB = GB(120),
-       JB = GB(3982),
-       MB = GB(3968),
-       PB = GB(1282);
+       LW = OW(4746),
+       cW = OW(136),
+       wW = OW(4787),
+       tW = OW(4776),
+       ZW = OW(1283);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/116.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/116.js#L24)

```diff
-         zB = (0, jB.e)(YB),
+         xW = (0, LW.f)(mW),
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L28` → after: `L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/116.js#L28) · [Before (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/116.js#L28)

```diff
-         children: [zB.isLoading && !lB && (0, PB.jsx)(oB.b, {
+         children: [xW.isLoading && !lW && (0, ZW.jsx)(PW.d, {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L31` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/116.js#L31) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/116.js#L31)

```diff
-           className: DB()("SchematicImage", MB.h, {
+           className: EW()("SchematicImage", tW.j, {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L34-L35` → after: `L34-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/116.js#L34-L35) · [Before (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/116.js#L34-L35)

```diff
-           style: (0, MB.e)(zB),
-           children: (0, PB.jsx)(MB.d, {
+           style: (0, tW.f)(xW),
+           children: (0, ZW.jsx)(tW.b, {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L40` → after: `L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/116.js#L40) · [Before (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/116.js#L40)

```diff
-           children: (0, PB.jsx)(QB.b, {
+           children: (0, ZW.jsx)(NW.c, {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L47` → after: `L47-L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L47-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/116.js#L47-L271) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/116.js#L47)

```diff
-   5524: (BB, OB, GB) => {
+   5660: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       default: () => TW
+     });
+     OW(5662);
+     var mW = OW(62),
+       EW = OW(1089),
+       NW = OW.n(EW),
+       PW = OW(327),
+       LW = OW(1065),
+       cW = OW(1217),
+       wW = OW(1172),
+       tW = OW(1107),
+       ZW = OW(1584),
+       xW = OW(5668),
+       lW = OW(1532),
+ ... (209 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L51-L52` → after: `L275-L276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L275-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/116.js#L275-L276) · [Before (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/116.js#L51-L52)

```diff
-     var YB = GB(56),
-       DB = GB(1090),
+     var mW = OW(62),
+       EW = OW(1089),
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L54-L63` → after: `L278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/116.js#L278) · [Before (L54-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/116.js#L54-L63)

```diff
-       oB = GB(5452),
-       jB = GB(1375),
-       yB = GB(1175),
-       JB = GB(3580),
-       MB = GB(3716),
-       PB = GB(1383),
-       zB = GB(3588),
-       lB = GB(5531),
-       pB = GB(5549),
-       qB = GB(1282);
+       PW = OW(1283);
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L67-L71` → after: `L282-L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L282-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/116.js#L282-L286) · [Before (L67-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/116.js#L67-L71)

```diff
-         folderName: OB,
-         onTexturePackUpdated: DB,
-         disabled: ZB = !1,
-         maxFileSizeMb: NB,
-         packOwner: RB
+         columns: iW,
+         rows: OW,
+         getRowKey: EW,
+         renderRow: LW,
+         className: cW
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L73-L182` → after: `L288-L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L288-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/116.js#L288-L299) · [Before (L73-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/116.js#L73-L182)

```diff
-       const {
-         t: WB
-       } = (0, yB.H)(), [AB, VB] = (0, YB.useState)(!1), [SB, nB] = (0, YB.useState)(null), [UB, fB] = (0, YB.useState)(null), kB = (0, YB.useRef)(null);
-       async function dB(BB) {
-         VB(!0);
-         try {
-           const OB = await (0, JB.n)(BB);
-           if ("customGame" === RB && (0, MB.m)(OB)) return void nB(WB(MB.c));
-           if (void 0 !== NB) {
-             const BB = JSON.stringify(OB).length / 1048576;
-             if (BB > NB) return void nB(WB("customTexturePack:packTooBig", {
-               size: BB.toFixed(1),
-               max: NB
-             }))
-           }
-           nB(null), fB(null), DB(OB), kB.current = OB,
- ... (94 more removed lines; see GitHub link above)
+       return (0, PW.jsxs)("table", {
+         className: NW()("Table", cW),
+         children: [(0, PW.jsx)("thead", {
+           children: (0, PW.jsx)("tr", {
+             children: iW.map((WW => (0, PW.jsx)("th", {
+               children: WW.header
+             }, WW.key)))
+           })
+         }), (0, PW.jsx)("tbody", {
+           children: OW.map(((WW, iW) => (0, PW.jsx)(mW.Fragment, {
+             children: LW(WW, iW)
+           }, EW(WW))))
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/116.js` (Changed code · before: `L187-L994` → after: `L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1R304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-160d8d133f99cf27bb51fb98612336b5c837809afd7a7034977b3a4dc4cf72d1) · [After (L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/116.js#L304) · [Before (L187-L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/116.js#L187-L994)

```diff
-   5549: (BB, OB, GB) => {
-     GB.d(OB, {
-       b: () => MB,
-       d: () => JB
-     });
-     var YB = GB(56),
-       DB = GB(1485),
-       QB = GB(1175),
-       oB = GB(92),
-       jB = GB(3558),
-       yB = GB(1282);
- 
-     function JB() {
-       return !(0, oB.isMobile)()
-     }
- 
- ... (792 more removed lines; see GitHub link above)
+   5662: () => {}
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/117.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/117.js` (33 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc)

#### 1. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/117.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/117.js#L4)

```diff
-   7015: (BB, OB, GB) => {
+   5668: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/117.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/117.js#L6)

```diff
-       d: () => RB
+       b: () => xW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L8-L16` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/117.js#L8) · [Before (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/117.js#L8-L16)

```diff
-     var YB = GB(56),
-       DB = GB(1485),
-       QB = GB(1540),
-       oB = GB(3928),
-       jB = GB(1112),
-       yB = GB(1375),
-       JB = GB(1405),
-       MB = GB(1383),
-       PB = GB(1090),
+     var mW = OW(1089),
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L18-L77` → after: `L10-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L10-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/117.js#L10-L16) · [Before (L18-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/117.js#L18-L77)

```diff
-       lB = GB(7011),
-       pB = GB(1282);
- 
-     function qB(BB) {
-       let {
-         info: OB,
-         className: GB
-       } = BB;
-       const {
-         statusText: YB,
-         rowText: DB
-       } = (0, lB.d)();
-       return (0, pB.jsxs)("div", {
-         className: zB()("GameApprovalInfoDetails", GB),
-         children: [(0, pB.jsxs)("div", {
-           className: zB()("GameApprovalInfoSummary", OB.overallPassed ? "Passed" : "Failed"),
- ... (44 more removed lines; see GitHub link above)
+       NW = OW(1391),
+       PW = OW(1383),
+       LW = OW(4746),
+       cW = OW(136),
+       wW = OW(4787),
+       tW = OW(4776),
+       ZW = OW(1283);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L81-L83` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/117.js#L20) · [Before (L81-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/117.js#L81-L83)

```diff
-         schematicId: OB,
-         canOverride: GB,
-         onApprovalChanged: PB
+         game: iW
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L85-L107` → after: `L22-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L22-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/117.js#L22-L25) · [Before (L85-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/117.js#L85-L107)

```diff
-       const {
-         t: zB
-       } = (0, ZB.H)(), {
-         userContext: lB
-       } = (0, jB.d)(), NB = (0, oB.c)(), [RB, WB] = (0, YB.useState)(null), [AB, VB] = (0, YB.useState)(null), [SB, nB] = (0, YB.useState)(!1), UB = (0, YB.useCallback)((() => {
-         VB(null), QB.b.getGameApprovalInfo(lB, OB).then((BB => {
-           NB.current && WB(BB)
-         })).catch((BB => {
-           console.error("Failed to get game approval info", BB), NB.current && VB(zB("studio:approvalLoadFailed"))
-         }))
-       }), [lB, OB, NB, zB]);
-       (0, YB.useEffect)((() => {
-         UB()
-       }), [UB]);
-       const fB = BB => {
-         SB || (nB(!0), QB.b.setGameApproval(lB, OB, BB).then((() => {
- ... (7 more removed lines; see GitHub link above)
+       const OW = (0, cW.is99NightsCrazyGamesBundle)() ? "large" : "small",
+         mW = (0, wW.f)(iW, OW),
+         xW = (0, LW.f)(mW),
+         lW = void 0 !== xW.blurhash;
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L109-L167` → after: `L27-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L27-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/117.js#L27-L42) · [Before (L109-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/117.js#L109-L167)

```diff
-         className: "ApprovalInfoPopupBody",
-         children: [(0, pB.jsx)("h1", {
-           className: "ApprovalInfoPopupTitle",
-           children: zB("studio:approvalTitle")
-         }), !RB && !AB && (0, pB.jsx)("div", {
-           className: "ApprovalInfoPopupLoader",
-           children: (0, pB.jsx)(yB.b, {})
-         }), AB && (0, pB.jsx)("div", {
-           className: "ApprovalInfoPopupError",
-           children: AB
-         }), RB && (0, pB.jsxs)(pB.Fragment, {
-           children: [(0, pB.jsx)(qB, {
-             info: RB
-           }), GB && (0, pB.jsxs)("div", {
-             className: "ApprovalInfoPopupActions",
-             children: [!0 !== RB.manualOverride && (0, pB.jsx)(JB.g, {
- ... (43 more removed lines; see GitHub link above)
+         className: "SchematicImageContainer",
+         children: [xW.isLoading && !lW && (0, ZW.jsx)(PW.d, {
+           loaderType: "Secondary"
+         }), !xW.failed && (null !== xW.src || lW) && (0, ZW.jsx)("div", {
+           className: EW()("SchematicImage", tW.j, {
+             SchematicImageFadeIn: xW.fadeIn && !lW
+           }),
+           style: (0, tW.f)(xW),
+           children: (0, ZW.jsx)(tW.b, {
+             image: xW
+           })
+         }), xW.failed && (0, ZW.jsx)("div", {
+           className: "SchematicImageError",
+           children: (0, ZW.jsx)(NW.c, {
+             name: "face-dizzy"
+           })
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L172-L254` → after: `L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/117.js#L47) · [Before (L172-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/117.js#L172-L254)

```diff
-   7011: (BB, OB, GB) => {
-     GB.d(OB, {
-       c: () => jB,
-       d: () => oB
-     });
-     var YB = GB(353),
-       DB = GB(1175);
-     const QB = {
-       manuallyApproved: "studio:approvalStatusManuallyApproved",
-       manuallyAndAutoApproved: "studio:approvalStatusManuallyAndAutoApproved",
-       manuallyDenied: "studio:approvalStatusManuallyDenied",
-       autoApproved: "studio:approvalStatusAutoApproved",
-       notApproved: "studio:approvalStatusNotApproved",
-       notIndexed: "studio:approvalStatusNotIndexed"
-     };
- 
- ... (67 more removed lines; see GitHub link above)
+   7511: (WW, iW, OW) => {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L258-L260` → after: `L51-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L51-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/117.js#L51-L53) · [Before (L258-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/117.js#L258-L260)

```diff
-     var YB = GB(56),
-       DB = GB(1571),
-       QB = GB(1090),
+     OW(5662);
+     var mW = OW(62),
+       EW = OW(1089),
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L262` → after: `L55-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/117.js#L55-L56) · [Before (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/117.js#L262)

```diff
-       jB = GB(1061),
+       PW = OW(327),
+       LW = OW(1065),
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L265-L274` → after: `L59-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L59-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/117.js#L59-L67) · [Before (L265-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/117.js#L265-L274)

```diff
-       MB = GB(353),
-       PB = GB(1591),
-       zB = GB(1044),
-       lB = GB(1175),
-       pB = GB(1112),
-       qB = GB(331),
-       ZB = GB(1540),
-       NB = GB(16),
-       RB = GB(2023),
-       WB = GB(1485),
+       tW = OW(1172),
+       ZW = OW(1584),
+       xW = OW(4792),
+       lW = OW(1107),
+       AW = OW(5668),
+       bW = OW(3610),
+       jW = OW(1532),
+       UW = OW(5271),
+       kW = OW(5673),
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L276-L369` → after: `L69-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L69-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/117.js#L69-L90) · [Before (L276-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/117.js#L276-L369)

```diff
-       VB = GB(1375),
-       SB = GB(5392),
-       nB = GB(5414),
-       UB = GB(5437),
-       fB = GB(5563),
-       kB = GB(2417),
-       dB = GB(1735),
-       KB = GB(2411),
-       uB = GB(1282);
- 
-     function mB(BB) {
-       let {
-         schematicId: OB,
-         takedown: GB
-       } = BB;
-       const {
- ... (78 more removed lines; see GitHub link above)
+       MW = OW(1605),
+       KW = OW(5268),
+       SW = OW(3488),
+       YW = OW(5676),
+       yW = OW(7392),
+       TW = OW(1638),
+       JW = OW(1283);
+     const hW = [{
+         scope: "customGames",
+         title: "studio:leaderboardCustomGames"
+       }, {
+         scope: "allGames",
+         title: "studio:leaderboardAllGames"
+       }, {
+         scope: "dormantGames",
+         title: "studio:leaderboardDormantGames"
+ ... (6 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L371-L378` → after: `L92-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L92-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/117.js#L92-L94) · [Before (L371-L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/117.js#L371-L378)

```diff
-         minute: {
-           stepMinutes: 1,
-           untilMinutes: 20
-         },
-         fiveMinutes: {
-           stepMinutes: 5,
-           untilMinutes: 60
-         }
+         playsPerDay: null,
+         avgPlaytimeMinutes: null,
+         retention: null
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L446-L451` → after: `L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/117.js#L99) · [Before (L446-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/117.js#L446-L451)

```diff
-         icon: OB,
-         label: GB,
-         onClick: YB,
-         disabled: DB = !1,
-         active: QB = !1,
-         small: oB = !1
+         position: iW
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L453-L468` → after: `L101-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L101-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/117.js#L101-L111) · [Before (L453-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/117.js#L453-L468)

```diff
-       return (0, uB.jsx)(cB.g, {
-         tooltipInner: GB,
-         placement: "top",
-         delayShow: 0,
-         children: (0, uB.jsxs)(WB.Z, {
-           className: oB ? "StudioSmallIconButton" : void 0,
-           active: QB,
-           disabled: DB,
-           onClick: YB,
-           children: [(0, uB.jsx)(AB.b, {
-             name: OB
-           }), (0, uB.jsx)("span", {
-             className: "VisuallyHidden",
-             children: GB
-           })]
-         })
+       const OW = yW.e[iW];
+       return (0, JW.jsxs)("td", {
+         className: NW()("StudioLeaderboardPosition", {
+           StudioLeaderboardTopPosition: void 0 !== OW,
+           [`StudioLeaderboardTopPosition${iW}`]: void 0 !== OW
+         }),
+         children: [void 0 !== OW && (0, JW.jsx)("img", {
+           className: "StudioLeaderboardPositionItem",
+           src: OW,
+           alt: ""
+         }), iW]
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L475-L477` → after: `L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/117.js#L117) · [Before (L475-L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/117.js#L475-L477)

```diff
-         fileNameParts: OB,
-         getTable: GB,
-         disabled: YB = !1
+         discoverability: iW
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L480-L495` → after: `L120-L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L120-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/117.js#L120-L131) · [Before (L480-L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/117.js#L480-L495)

```diff
-         t: DB
-       } = (0, lB.H)();
-       return (0, uB.jsx)(MO, {
-         small: !0,
-         icon: "download",
-         label: DB("Export Data"),
-         disabled: YB,
-         onClick: () => {
-           const BB = GB().map((BB => BB.map(QO).join(","))).join("\r\n");
-           (0, JO.downloadBlob)(new Blob([`${PO}${BB}`], {
-             type: "text/csv;charset=utf-8"
-           }), function(BB) {
-             const OB = BB.map(yO).filter((BB => "" !== BB)).join(" - ");
-             return `${""===OB?"export":OB}.csv`
-           }(OB))
-         }
+         playsPerDay: OW,
+         avgPlaytimeMinutes: EW,
+         retention: NW
+       } = null === iW ? eW : (0, xW.m)(iW);
+       return (0, JW.jsxs)(mW.Fragment, {
+         children: [(0, JW.jsx)("td", {
+           children: null !== OW ? (0, xW.d)(OW) : "-"
+         }), (0, JW.jsx)("td", {
+           children: null !== EW ? (0, xW.h)(EW) : "-"
+         }), (0, JW.jsx)("td", {
+           children: null !== NW ? (0, xW.k)(NW) : "-"
+         })]
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L505-L509` → after: `L136-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L136-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/117.js#L136-L141) · [Before (L505-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/117.js#L505-L509)

```diff
-       let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-       return new Date(BB).toLocaleDateString(void 0, {
-         day: "numeric",
-         month: "short",
-         timeZone: OB ? "UTC" : void 0
+       let {
+         discoverability: iW
+       } = WW;
+       return (0, JW.jsx)("td", {
+         className: "StudioLeaderboardEngagementScore",
+         children: void 0 !== (null === iW || void 0 === iW ? void 0 : iW.engagementScore) ? (0, cW.V)(Math.round(iW.engagementScore)) : "-"
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L513-L529` → after: `L145-L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L145-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/117.js#L145-L146) · [Before (L513-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/117.js#L513-L529)

```diff
-     function qO(BB) {
-       return new Date(BB).toLocaleTimeString(void 0, lO)
-     }
-     var ZO = GB(5578);
-     const NO = 864e5;
- 
-     function RO(BB, OB) {
-       return "1d" === OB ? pO(BB, !0) : `${pO(BB)}, ${qO(BB)}`
-     }
- 
-     function WO(BB) {
-       let {
-         point: OB,
-         label: GB,
-         formatValue: YB,
-         noDataLabel: DB
- ... (1 more removed lines; see GitHub link above)
+     function VW() {
+       var WW, iW;
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L532-L533` → after: `L149-L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L149-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/117.js#L149-L252) · [Before (L532-L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/117.js#L532-L533)

```diff
-       } = (0, lB.H)(), oB = BB => null === BB || void 0 === BB ? DB : YB(BB), jB = OB.comparisonBand;
-       return jB ? (0, uB.jsxs)(uB.Fragment, {
+       } = (0, tW.B)(), EW = (0, MW.useNavigatePreserveSearch)(), {
+         userContext: NW,
+         isUserContextUpdating: yW
+       } = (0, lW.e)(), eW = (0, SW.m)(), [VW, pW] = (0, KW.q)(), fW = (CW = VW.get(nW), hW.some((WW => WW.scope === CW)) ? CW : oW);
+       var CW;
+       const XW = function(WW) {
+           return PW.T.includes(WW) ? WW : null
+         }(VW.get(uW)),
+         BW = (0, KW.f)(VW.get(KW.b)),
+         [qW, RW] = (0, mW.useState)(null),
+         [GW, IW] = (0, mW.useState)(!1);
+ 
+       function aW(WW) {
+         pW((iW => {
+           (0, KW.j)(iW, nW, WW.scope === oW ? null : WW.scope), (0, KW.j)(iW, uW, WW.category), (0, KW.m)(iW, WW.page)
+         }))
+ ... (88 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L535-L539` → after: `L254-L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L254-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/117.js#L254-L258) · [Before (L535-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/117.js#L535-L539)

```diff
-           className: "StudioStatsChartTooltipSub SmallTextLight",
-           children: GB
-         }), (0, uB.jsxs)("div", {
-           className: "StudioStatsChartTooltipSub SmallTextLight",
-           children: [QB("studio:comparisonPercentile80"), ": ", oB(jB[1])]
+           className: "StudioPageHeader",
+           children: (0, JW.jsx)("h1", {
+             className: "StudioPageTitle",
+             children: OW("studio:leaderboard")
+           })
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L541-L542` → after: `L260-L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L260-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/117.js#L260-L282) · [Before (L541-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/117.js#L541-L542)

```diff
-           className: "StudioStatsChartTooltipSub SmallTextLight",
-           children: [QB("studio:comparisonPercentile50"), ": ", oB(OB.comparisonValue)]
+           className: "StudioLeaderboardBanner",
+           children: [!FW && (0, JW.jsx)("div", {
+             children: OW("studio:leaderboardBanner")
+           }), FW && (0, JW.jsx)("div", {
+             children: OW("studio:leaderboardDormantBanner")
+           }), (0, JW.jsx)("div", {
+             children: OW("studio:leaderboardMetricsBanner", {
+               days: dW
+             })
+           })]
+         }), rW && (0, JW.jsx)("div", {
+           className: "StudioLeaderboardScopes",
+           children: hW.map((WW => (0, JW.jsx)(jW.Z, {
+             active: fW === WW.scope,
+             onClick: () => {
+               aW({
+ ... (7 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L544-L545` → after: `L284-L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L284-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/117.js#L284-L393) · [Before (L544-L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/117.js#L544-L545)

```diff
-           className: "StudioStatsChartTooltipSub SmallTextLight",
-           children: [QB("studio:comparisonPercentile20"), ": ", oB(jB[0])]
+           className: "StudioLeaderboardCategories",
+           children: [(0, JW.jsx)(jW.Z, {
+             active: null === XW,
+             onClick: () => {
+               aW({
+                 scope: fW,
+                 category: null,
+                 page: 1
+               })
+             },
+             children: OW("studio:leaderboardAllCategories")
+           }), PW.T.map((WW => (0, JW.jsx)(jW.Z, {
+             active: XW === WW,
+             onClick: () => {
+               aW({
+                 scope: fW,
+ ... (94 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L552-L560` → after: `L397-L404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L397-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/117.js#L397-L404) · [Before (L552-L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/117.js#L552-L560)

```diff
- 
-     function AO(BB, OB, GB) {
-       return GB ? [`${OB}: ${BB("studio:comparisonPercentile20")}`, `${OB}: ${BB("studio:comparisonPercentile50")}`, `${OB}: ${BB("studio:comparisonPercentile80")}`] : [OB]
-     }
- 
-     function VO(BB, OB) {
-       var GB, YB, DB, QB, oB, jB;
-       return OB ? [null !== (GB = null === (YB = BB.comparisonBand) || void 0 === YB ? void 0 : YB[0]) && void 0 !== GB ? GB : null, null !== (DB = BB.comparisonValue) && void 0 !== DB ? DB : null, null !== (QB = null === (oB = BB.comparisonBand) || void 0 === oB ? void 0 : oB[1] … [truncated]
-     }
+   },
+   5676: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => PW,
+       e: () => NW
+     });
+     var mW = OW(1638),
+       EW = OW(1283);
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L564-L572` → after: `L408-L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L408-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/117.js#L408-L409) · [Before (L564-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/117.js#L564-L572)

```diff
-         active: OB,
-         payload: GB,
-         label: YB,
-         interval: DB,
-         formatValue: QB,
-         noDataLabel: oB,
-         comparisonLabel: jB,
-         showValue: yB = !0,
-         lines: JB
+         thumbnail: iW,
+         name: OW
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L577` → after: `L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/117.js#L412) · [Before (L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/117.js#L577)

```diff
-         className: "StudioStatsChartTooltip",
+         className: "StudioTableGameCell",
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L579-L600` → after: `L414-L418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L414-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/117.js#L414-L418) · [Before (L579-L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/117.js#L579-L600)

```diff
-           className: "StudioStatsChartTooltipTitle SmallTextLight",
-           children: RO(YB, DB)
-         }), yB && (0, uB.jsx)("div", {
-           className: "StudioStatsChartTooltipValue",
-           children: null === MB.value ? oB : QB(MB.value)
-         }), null === JB || void 0 === JB ? void 0 : JB.map(((BB, OB) => {
-           var GB;
-           const YB = null === (GB = MB.lineValues) || void 0 === GB ? void 0 : GB[OB];
-           return (0, uB.jsxs)("div", {
-             className: "StudioStatsChartTooltipLine SmallTextLight",
-             children: [(0, uB.jsx)("span", {
-               className: "StudioStatsChartTooltipLineSwatch",
-               style: {
-                 backgroundColor: BB.colour
-               }
-             }), BB.label, ": ", null === YB || void 0 === YB ? oB : QB(YB)]
- ... (6 more removed lines; see GitHub link above)
+           className: "StudioTableThumbnail",
+           children: iW
+         }), (0, EW.jsx)("span", {
+           className: "StudioTableGameName",
+           children: OW
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L622-L624` → after: `L425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/117.js#L425) · [Before (L622-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/117.js#L622-L624)

```diff
-         viewBox: OB,
-         text: GB,
-         alignLeft: YB
+         game: iW
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L626-L631` → after: `L427-L430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L427-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/117.js#L427-L430) · [Before (L626-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/117.js#L626-L631)

```diff
-       return void 0 === (null === OB || void 0 === OB ? void 0 : OB.x) || void 0 === OB.y ? null : (0, uB.jsx)("text", {
-         className: "StudioStatsChartMarkerLabel",
-         x: OB.x + (YB ? -5 : 5),
-         y: OB.y + 10,
-         textAnchor: YB ? "end" : "start",
-         children: GB
+       return (0, EW.jsx)("img", {
+         className: "StudioTableThumbnailImage",
+         src: (0, mW.o)(iW),
+         alt: ""
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L634-L640` → after: `L433-L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L433-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/117.js#L433-L441) · [Before (L634-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/117.js#L634-L640)

```diff
- 
-     function kO(BB) {
-       const OB = new Set;
-       return BB.forEach(((GB, YB) => {
-         if (null === GB) return;
-         [BB[YB - 1], BB[YB + 1]].some((BB => void 0 !== BB && null !== BB)) || OB.add(YB)
-       })), OB
+   },
+   7392: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => mW
+     });
+     const mW = {
+       1: OW(7401),
+       2: OW(7406),
+       3: OW(7411)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L645-L649` → after: `L455-L459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L455-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/117.js#L455-L459) · [Before (L645-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/117.js#L645-L649)

```diff
-         swatchClassName: OB,
-         colour: GB,
-         isFill: YB,
-         label: DB,
-         Qm: QB
+         columns: iW,
+         rows: OW,
+         getRowKey: EW,
+         renderRow: LW,
+         className: cW
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L651-L670` → after: `L461-L467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L461-L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/117.js#L461-L467) · [Before (L651-L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/117.js#L651-L670)

```diff
-       const {
-         t: jB
-       } = (0, lB.H)();
-       return (0, uB.jsxs)("span", {
-         className: "StudioStatsChartLegendEntry",
-         children: [(0, uB.jsx)("span", {
-           className: oB()("StudioStatsChartLegendSwatch", OB),
-           style: YB ? {
-             backgroundColor: GB
-           } : {
-             color: GB
-           }
-         }), DB, void 0 !== QB && (0, uB.jsx)("span", {
-           ...(0, WB.db)(),
-           className: "StudioStatsChartLegendRemove",
-           title: jB("general:remove"),
- ... (4 more removed lines; see GitHub link above)
+       return (0, PW.jsxs)("table", {
+         className: NW()("Table", cW),
+         children: [(0, PW.jsx)("thead", {
+           children: (0, PW.jsx)("tr", {
+             children: iW.map((WW => (0, PW.jsx)("th", {
+               children: WW.header
+             }, WW.key)))
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/117.js` (Changed code · before: `L675-L32289` → after: `L476-L485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367ccR476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8199194668348c85f0a12d34a03d4a398b77303fa4bab85648967f671e8367cc) · [After (L476-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/117.js#L476-L485) · [Before (L675-L32289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/117.js#L675-L32289)

```diff
- 
-     function KO(BB) {
-       let {
-         seriesLabel: OB,
-         seriesColour: GB,
-         comparisonLabel: YB,
-         comparisonIsBand: DB,
-         lines: QB
-       } = BB;
-       const {
-         t: oB
-       } = (0, lB.H)();
-       return (0, uB.jsxs)("div", {
-         className: "StudioStatsChartLegend SmallTextLight",
-         children: [void 0 !== OB && void 0 !== GB && (0, uB.jsx)(dO, {
-           colour: GB,
- ... (31599 more removed lines; see GitHub link above)
+   },
+   5662: () => {},
+   7401: WW => {
+     WW.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGVJREFUGJVjYKAZ4LF0YGBgYPiPhrErsn9/8v/Tv5//P/37+b/9+5NYFaMowqaYCaby2Z4fDAwMDAwO684xOKw7hyLGwMDAwIhmKlxSyoWD4aCgOVwNskK4YgYGBhRFuAB2HxMLAPX+QYFf3uJZAAAAAElFTkSuQmCC"
+   },
+   7406: WW => {
+     WW.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAKhJREFUOI1jYBhxgJGQAntrHgYGBgaGg0e//EcWDw0NZWRgYGBYvXo1inom6rkNAjBciMtFv18bQhhCEBexMqtgdSlNXYjXRbgAzKUws6juQhZ0AUIu+7HWA6+BtA9DuAthLtr/GatG3rA7WM2iXRiG+AkwMjAwMLCKnsfqUnQX2Whx … [truncated]
+   },
+   7411: WW => {
+     WW.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAK9JREFUOI3l0zEKwjAYhuE3QY+hWEWQ4lwovYE4WY+pDg7iBURwlrYgWtGD1EGCtk3aJZn6jV9+fh5CAp2LaBuY+zMArklW/PfreCUANttdaV7as31TE5pEyf0BwNQbAdCXUit1KmwUmaKkapd1Ya9atMn2h2PjQvdClVv+BCBNM+15 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/118.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/118.js` (97 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L4)

```diff
-   5418: (BB, OB, GB) => {
+   5668: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L6-L8` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L6) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L6-L8)

```diff
-       b: () => PB,
-       d: () => MB,
-       e: () => zB
+       b: () => xW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L10-L12` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L8) · [Before (L10-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L10-L12)

```diff
-     GB(5426);
-     var YB = GB(1175),
-       DB = GB(1090),
+     var mW = OW(1089),
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L14-L15` → after: `L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L10) · [Before (L14-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L14-L15)

```diff
-       oB = GB(1405),
-       jB = (GB(56), GB(4777)),
+       NW = OW(1391),
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L17` → after: `L12-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L12-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L12-L16) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L17)

```diff
-       JB = GB(1282);
+       LW = OW(4746),
+       cW = OW(136),
+       wW = OW(4787),
+       tW = OW(4776),
+       ZW = OW(1283);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L21-L26` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L20) · [Before (L21-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L21-L26)

```diff
-         children: OB,
-         label: GB,
-         className: DB,
-         circleInfoText: jB,
-         disabled: MB,
-         onLabelClick: PB
+         game: iW
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L28-L38` → after: `L22-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L22-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L22-L25) · [Before (L28-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L28-L38)

```diff
-       const {
-         t: zB
-       } = (0, YB.H)(), lB = (0, JB.jsxs)("div", {
-         className: QB()("Label", {
-           ClickableLabel: void 0 !== PB
-         }),
-         onClick: PB,
-         children: [zB(GB), jB && (0, JB.jsx)(yB.b, {
-           name: "circle-info"
-         })]
-       });
+       const OW = (0, cW.is99NightsCrazyGamesBundle)() ? "large" : "small",
+         mW = (0, wW.f)(iW, OW),
+         xW = (0, LW.f)(mW),
+         lW = void 0 !== xW.blurhash;
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L40-L47` → after: `L27-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L27-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L27-L32) · [Before (L40-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L40-L47)

```diff
-         className: QB()("LabeledInput", {
-           [DB]: DB,
-           DisabledLabelInput: MB
-         }),
-         children: [jB && (0, JB.jsx)(oB.g, {
-           tooltipInner: (0, JB.jsx)("div", {
-             className: "LabeledInputTooltip",
-             children: zB(jB)
+         className: "SchematicImageContainer",
+         children: [xW.isLoading && !lW && (0, ZW.jsx)(PW.d, {
+           loaderType: "Secondary"
+         }), !xW.failed && (null !== xW.src || lW) && (0, ZW.jsx)("div", {
+           className: EW()("SchematicImage", tW.j, {
+             SchematicImageFadeIn: xW.fadeIn && !lW
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L49-L97` → after: `L34-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L34-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L34-L43) · [Before (L49-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L49-L97)

```diff
-           children: lB
-         }), !jB && lB, OB]
-       })
-     }
- 
-     function PB(BB) {
-       let {
-         checked: OB,
-         setChecked: GB,
-         disabled: YB = !1
-       } = BB;
-       return (0, JB.jsx)("div", {
-         className: "OtherInput ClickableOtherInput",
-         "data-pad-focusable": !0,
-         "aria-disabled": YB || void 0,
-         onClick: BB => {
- ... (33 more removed lines; see GitHub link above)
+           style: (0, tW.f)(xW),
+           children: (0, ZW.jsx)(tW.b, {
+             image: xW
+           })
+         }), xW.failed && (0, ZW.jsx)("div", {
+           className: "SchematicImageError",
+           children: (0, ZW.jsx)(NW.c, {
+             name: "face-dizzy"
+           })
+         })]
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L101` → after: `L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L47) · [Before (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L101)

```diff
-   5430: (BB, OB, GB) => {
+   5947: (WW, iW, OW) => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L103` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L49) · [Before (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L103)

```diff
-       d: () => JB
+       c: () => jW
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L105` → after: `L51-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L51-L52) · [Before (L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L105)

```diff
-     var YB = GB(1090),
+     var mW = OW(62),
+       EW = OW(1089),
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L107-L138` → after: `L54-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L54-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L54-L63) · [Before (L107-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L107-L138)

```diff
-       QB = GB(5047),
-       oB = GB(1175),
-       jB = GB(1282);
-     const yB = [...QB.k, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];
- 
-     function JB(BB) {
-       const {
-         disabled: OB,
-         hideWrapper: GB
-       } = BB, {
-         t: YB
-       } = (0, oB.H)(), JB = BB.advancedMode ? yB.map((OB => [OB, BB.callbacks[OB]])) : QB.k.map((OB => [OB, BB.callbacks[OB]])), PB = (0, jB.jsx)("div", {
-         className: DB()("PluginsGrid", {
-           SectionBody: !GB
-         }),
-         children: JB.map((BB => {
- ... (16 more removed lines; see GitHub link above)
+       PW = OW(5864),
+       LW = OW(1383),
+       cW = OW(1172),
+       wW = OW(4344),
+       tW = OW(4464),
+       ZW = OW(1391),
+       xW = OW(4349),
+       lW = OW(5952),
+       AW = OW(5978),
+       bW = OW(1283);
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L142-L147` → after: `L67-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L67-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L67-L71) · [Before (L142-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L142-L147)

```diff
-         plugin: OB,
-         callbacks: {
-           isEnabled: GB,
-           Zk: YB
-         },
-         disabled: QB
+         folderName: iW,
+         onTexturePackUpdated: EW,
+         disabled: jW = !1,
+         maxFileSizeMb: UW,
+         packOwner: kW
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L151` → after: `L75-L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L75-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L75-L125) · [Before (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L151)

```diff
-       } = (0, oB.H)(), JB = GB();
+       } = (0, cW.B)(), [MW, KW] = (0, mW.useState)(!1), [SW, YW] = (0, mW.useState)(null), [yW, TW] = (0, mW.useState)(null), JW = (0, mW.useRef)(null);
+       async function hW(WW) {
+         KW(!0);
+         try {
+           const iW = await (0, wW.m)(WW);
+           if ("customGame" === kW && (0, tW.q)(iW)) return void YW(sW(tW.e));
+           if (void 0 !== UW) {
+             const WW = JSON.stringify(iW).length / 1048576;
+             if (WW > UW) return void YW(sW("customTexturePack:packTooBig", {
+               size: WW.toFixed(1),
+               max: UW
+             }))
+           }
+           YW(null), TW(null), EW(iW), JW.current = iW,
+             function(WW, iW) {
+               const mW = WW.modelOverrides;
+ ... (35 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L153-L167` → after: `L127-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L127-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L127-L141) · [Before (L153-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L153-L167)

```diff
-         className: DB()("PluginCard", {
-           PluginCardEnabled: JB,
-           PluginCardDisabledForm: QB
-         }),
-         "data-pad-focusable": !0,
-         "aria-disabled": QB || void 0,
-         onClick: () => {
-           QB || YB(!JB)
-         },
-         children: [(0, jB.jsx)("div", {
-           className: "PluginCardIcon",
-           children: (0, jB.jsx)("img", {
-             src: `/textures/games/classic/customGames/${OB}.png`,
-             alt: OB
-           })
+         className: "CustomTexturePackContainer",
+         children: [(0, bW.jsxs)("div", {
+           className: "CustomTextureWarning",
+           children: [sW("settingsMenu:customTextureWarning"), ".", (0, bW.jsx)("br", {}), sW("settingsMenu:viewDocumentation"), ":", " ", (0, bW.jsx)("a", {
+             href: "https://github.com/Bloxdy/texturePacks",
+             target: "_blank",
+             rel: "noreferrer",
+             children: "github.com/Bloxdy/texturePacks"
+           })]
+         }), SW && (0, bW.jsxs)("div", {
+           className: "CustomTextureError",
+           children: [sW("general:error"), ": ", SW]
+         }), yW && (0, bW.jsx)("div", {
+           className: "CustomTextureError",
+           children: yW
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L169-L175` → after: `L143-L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L143-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L143-L181) · [Before (L169-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L169-L175)

```diff
-           className: "PluginCardBody",
-           children: [(0, jB.jsx)("div", {
-             className: "PluginCardTitle",
-             children: yB(PB[OB])
-           }), (0, jB.jsx)("div", {
-             className: "PluginCardDescription",
-             children: yB(zB[OB])
+           ...HW({
+             className: NW()("CustomTextureFolderUpload", {
+               ActiveDrag: uW,
+               Disabled: jW
+             })
+           }),
+           children: [(0, bW.jsx)("input", {
+             ...nW({
+               webkitdirectory: "true"
+             })
+           }), MW && (0, bW.jsx)("div", {
+             className: "CustomTextureFolderUploadLoading",
+             children: (0, bW.jsx)(LW.d, {})
+           }), !MW && !uW && iW && (0, bW.jsxs)(bW.Fragment, {
+             children: [(0, bW.jsx)("div", {
+               className: "CustomTextureFolderUploadIcon Active",
+ ... (23 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L202` → after: `L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L187) · [Before (L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L202)

```diff
-   5447: (BB, OB, GB) => {
+   5978: (WW, iW, OW) => {
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L206-L272` → after: `L192-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L192-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L192-L197) · [Before (L206-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L206-L272)

```diff
-     var YB = GB(1090),
-       DB = GB.n(YB),
-       QB = GB(1175),
-       oB = GB(1383),
-       jB = GB(1282);
- 
-     function yB(BB) {
-       let {
-         textKey: OB,
-         allowed: GB
-       } = BB;
-       const {
-         t: YB
-       } = (0, QB.H)();
-       return (0, jB.jsxs)("li", {
-         className: DB()("PolicyListItem", GB ? "Allowed" : "NotAllowed"),
- ... (51 more removed lines; see GitHub link above)
+     var mW = OW(62),
+       EW = OW(1532),
+       NW = OW(1172),
+       PW = OW(100),
+       LW = OW(4304),
+       cW = OW(1283);
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L274-L295` → after: `L199-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L199-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L199-L200) · [Before (L274-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L274-L295)

```diff
-     function WB(BB) {
-       let {
-         onScrolledToEnd: OB
-       } = BB;
-       const GB = (0, YB.useRef)(null),
-         {
-           after: DB
-         } = (0, lB.d)(GB, "y");
-       return (0, YB.useEffect)((() => {
-         DB || null === OB || void 0 === OB || OB()
-       }), [DB, OB]), (0, qB.jsx)("div", {
-         ref: GB,
-         className: QB()("PublishingPolicyRows", {
-           PublishingPolicyRowsMoreBelow: DB
-         }),
-         tabIndex: 0,
- ... (6 more removed lines; see GitHub link above)
+     function wW() {
+       return !(0, PW.isMobile)()
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L300` → after: `L205-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L205-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L205-L207) · [Before (L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L300)

```diff
-         onAnswer: OB
+         disabled: iW,
+         openFolderPicker: OW,
+         onFiles: PW
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L349-L352` → after: `L211-L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L211-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L211-L229) · [Before (L349-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L349-L352)

```diff
-       } = (0, yB.H)(), [OB, GB] = (0, YB.useState)(!1);
-       return (0, qB.jsxs)(qB.Fragment, {
-         children: [(0, qB.jsxs)(zB.Z, {
-           className: "PublishingPolicyLink",
+       } = (0, NW.B)(), ZW = (0, mW.useRef)(null);
+       return (0, cW.jsxs)("div", {
+         className: "PackPickButtons",
+         "data-pad-mouse-only": !0,
+         children: [(0, cW.jsx)("input", {
+           ref: ZW,
+           type: "file",
+           accept: ".zip,application/zip",
+           hidden: !0,
+           onChange: function(WW) {
+             const iW = Array.from(WW.target.files);
+             WW.target.value = "", PW(iW)
+           }
+         }), wW() && (0, cW.jsx)(EW.f, {
+           disabled: iW,
+           onClick: OW,
+ ... (3 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L354` → after: `L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L231) · [Before (L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L354)

```diff
-             GB(!0)
+             (0, LW.f)(ZW.current)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L356-L367` → after: `L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L233) · [Before (L356-L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L356-L367)

```diff
-           children: [(0, qB.jsx)(MB.b, {
-             name: "shield-halved"
-           }), " ", BB("worldBuilder:publishingPolicy")]
-         }), OB && (0, qB.jsx)(ZB, {
-           close: () => {
-             GB(!1)
-           },
-           body: (0, qB.jsx)(PB.g, {
-             className: "PublishingPolicyPopup",
-             title: "worldBuilder:publishingPolicy",
-             children: (0, qB.jsx)(WB, {})
-           })
+           children: tW("general:chooseZip")
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L372` → after: `L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L238) · [Before (L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L372)

```diff
-   5414: (BB, OB, GB) => {
+   5910: (WW, iW, OW) => {
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L375-L377` → after: `L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L243) · [Before (L375-L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L375-L377)

```diff
-       d: () => MO,
-       g: () => JO,
-       m: () => zO
+       n: () => sW
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L379-L388` → after: `L245-L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L245-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L245-L250) · [Before (L379-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L379-L388)

```diff
-     var YB = GB(56),
-       DB = GB(1400),
-       QB = GB(1485),
-       oB = GB(1735),
-       jB = GB(1175),
-       yB = GB(1375),
-       JB = GB(1405),
-       MB = GB(1383),
-       PB = GB(1217),
-       zB = GB(1090),
+     var mW = OW(62),
+       EW = OW(5919),
+       NW = OW(5041),
+       PW = OW(1434),
+       LW = OW(4171),
+       cW = OW(1089),
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L390-L396` → after: `L252-L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L252-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L252-L255) · [Before (L390-L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L390-L396)

```diff
-       pB = GB(331),
-       qB = GB(5047),
-       ZB = GB(1238),
-       NB = GB(5418),
-       RB = GB(3544),
-       WB = GB(5430),
-       AB = GB(1282);
+       tW = OW(1422),
+       ZW = OW(1856),
+       xW = OW(5940),
+       lW = OW(1283);
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L400-L401` → after: `L259-L263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L259-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L259-L263) · [Before (L400-L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L400-L401)

```diff
-         icon: OB,
-         title: GB,
+         label: iW,
+         onClick: OW,
+         checked: mW,
+         circleInfoText: EW,
+         className: LW,
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L403` → after: `L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L265) · [Before (L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L403)

```diff
-         children: DB
+         note: tW
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L406-L407` → after: `L268-L272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L268-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L268-L272) · [Before (L406-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L406-L407)

```diff
-         className: lB()("ManageCard", {
-           ManageCardDisabled: YB
+         "aria-disabled": cW || void 0,
+         "data-pad-focusable": !0,
+         className: wW()("SettingBox CheckboxContainer", {
+           [LW]: LW,
+           SettingBoxDisabled: cW
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L410-L419` → after: `L278-L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L278-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L278-L285) · [Before (L410-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L410-L419)

```diff
-           className: "ManageCardHead",
-           children: [(0, AB.jsx)("div", {
-             className: "ManageCardIcon",
-             children: (0, AB.jsx)(MB.b, {
-               name: OB
-             })
-           }), (0, AB.jsx)("div", {
-             children: (0, AB.jsx)("h2", {
-               className: "ManageCardTitle",
-               children: GB
+           className: "CheckboxInputAndText",
+           children: [(0, lW.jsx)("label", {
+             className: "CheckboxClickableLabel",
+             children: (0, lW.jsx)(NW.e, {
+               className: "SettingsCheckbox",
+               checked: mW,
+               disabled: cW,
+               onChange: () => {}
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L422-L443` → after: `L297-L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L297-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L297-L298) · [Before (L422-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L422-L443)

```diff
-         }), (0, AB.jsxs)("div", {
-           className: "ManageCardBody",
-           children: [DB, YB && (0, AB.jsx)("div", {
-             className: "ManageCardDisabledOverlay"
-           })]
-         })]
-       })
-     }
- 
-     function SB(BB) {
-       let {
-         label: OB,
-         caption: GB,
-         children: YB
-       } = BB;
-       return (0, AB.jsxs)("div", {
- ... (6 more removed lines; see GitHub link above)
+         }), tW && (0, lW.jsx)("div", {
+           className: "SettingNote",
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L451-L454` → after: `L306-L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L306-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L306-L320) · [Before (L451-L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L451-L454)

```diff
-         label: OB,
-         caption: GB,
-         disabled: YB,
-         children: DB
+         name: iW,
+         onChange: OW,
+         min: EW,
+         max: NW,
+         step: LW,
+         initValue: cW,
+         circleInfoText: tW,
+         format: ZW,
+         className: xW,
+         padStep: AW,
+         disabled: bW = !1,
+         selectableMax: jW,
+         cappedNote: UW,
+         note: sW,
+         onChangeComplete: MW
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L457-L458` → after: `L332-L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L332-L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L332-L335) · [Before (L457-L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L457-L458)

```diff
-         className: lB()("ManageField", {
-           ManageFieldDisabled: YB
+         className: wW()("SettingBox SettingsSliderDiv", {
+           [xW]: xW,
+           SettingBoxDisabled: bW,
+           SliderCapped: yW
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L461-L467` → after: `L339-L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L339-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L339-L342) · [Before (L461-L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L461-L467)

```diff
-           className: "ManageFieldText",
-           children: [(0, AB.jsx)("div", {
-             className: "ManageFieldLabel",
-             children: OB
-           }), (0, AB.jsx)("div", {
-             className: "ManageFieldCaption",
-             children: GB
+           className: "SliderText",
+           children: [`${iW}: ${ZW?ZW(KW):KW}`, tW && (0, lW.jsx)(PW.d, {
+             className: "SettingsTextInputCircleInfo",
+             hoverInfo: tW
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L470` → after: `L345-L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L345-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L345-L364) · [Before (L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L470)

```diff
-           className: "ManageFieldControl",
+           className: "SliderDiv",
+           children: (0, lW.jsx)(kW, {
+             value: KW,
+             min: EW,
+             max: NW,
+             step: LW,
+             onChange: WW => {
+               if (yW && WW >= jW && KW === jW) return;
+               const iW = yW ? Math.min(WW, jW) : WW;
+               YW.current = iW, SW(iW), OW(iW)
+             },
+             onChangeComplete: MW && (() => {
+               MW(YW.current)
+             }),
+             format: ZW,
+             padStep: AW,
+ ... (4 more added lines; see GitHub link above)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L479-L482` → after: `L378-L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L378-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L378-L393) · [Before (L479-L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L479-L482)

```diff
-         schematicData: YB,
-         updateSchematicData: DB,
-         publishFormEnabled: QB,
-         formEnabled: oB
+         value: iW,
+         min: OW,
+         max: NW,
+         step: PW,
+         onChange: LW,
+         orientation: cW,
+         reverse: wW,
+         setIsChanging: tW,
+         tooltip: ZW,
+         labels: AW,
+         handleLabel: bW,
+         format: kW,
+         onChangeStart: sW,
+         onChangeComplete: MW,
+         padStep: KW,
+         disabled: SW = !1
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L484-L501` → after: `L395-L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L395-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L395-L410) · [Before (L484-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L484-L501)

```diff
-       const {
-         t: yB
-       } = (0, jB.H)(), JB = !QB, MB = {
-         tpRequests: {
-           isEnabled: () => !YB.disableTpRequests,
-           Zk: BB => DB("disableTpRequests", !BB)
-         },
-         spawnProtection: {
-           isEnabled: () => !YB.disableSpawnProtection,
-           Zk: BB => DB("disableSpawnProtection", !BB)
-         },
-         spawnReset: {
-           isEnabled: () => !!YB.enableSpawnReset,
-           Zk: BB => DB("enableSpawnReset", BB)
-         },
-         smpMarketplace: {
- ... (2 more removed lines; see GitHub link above)
+       const YW = (0, mW.useRef)(null),
+         yW = (0, mW.useRef)(null);
+       (0, mW.useLayoutEffect)((() => {
+         var WW, iW, OW;
+         const mW = null !== (WW = null === (iW = YW.current) || void 0 === iW ? void 0 : iW.querySelector(".rangeslider")) && void 0 !== WW ? WW : null;
+         null === mW || void 0 === mW || mW.setAttribute("data-pad-slider", ""), null === mW || void 0 === mW || mW.setAttribute("data-pad-focusable", ""), null === mW || void 0 === mW || null === (OW = mW.querySelector(".rangeslider__handle")) || void 0 === OW || OW.setAttribute( … [truncated]
+       }), []), (0, mW.useLayoutEffect)((() => {
+         var WW, iW;
+         SW ? null === (WW = yW.current) || void 0 === WW || WW.setAttribute("aria-disabled", "true") : null === (iW = yW.current) || void 0 === iW || iW.removeAttribute("aria-disabled")
+       }), [SW]);
+       const TW = Math.max(UW(PW), UW(OW)),
+         JW = WW => {
+           if (WW >= NW) return NW;
+           if (WW <= OW) return OW;
+           const iW = Number((Math.round((WW - OW) / PW) * PW + OW).toFixed(TW));
+           return Math.min(NW, Math.max(OW, iW))
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L503-L505` → after: `L412-L430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L412-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L412-L430) · [Before (L503-L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L503-L505)

```diff
-         survivalGuns: {
-           isEnabled: () => !!YB.enableSurvivalGuns,
-           Zk: BB => DB("enableSurvivalGuns", BB)
+         hW = (0, mW.useRef)(MW);
+       hW.current = MW, (0, mW.useEffect)((() => {
+         const WW = YW.current;
+         if (!WW) return;
+         const iW = WW => {
+           var iW;
+           jW.has(WW.key) && (null === (iW = hW.current) || void 0 === iW || iW.call(hW))
+         };
+         return WW.addEventListener("keyup", iW), () => {
+           WW.removeEventListener("keyup", iW)
+         }
+       }), []);
+       const HW = (0, mW.useRef)(!1);
+       return (0, xW.d)(yW, {
+         adjust: WW => {
+           if (SW) return;
+ ... (3 more added lines; see GitHub link above)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L507-L509` → after: `L432-L435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L432-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L432-L435) · [Before (L507-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L507-L509)

```diff
-         fallDamage: {
-           isEnabled: () => !YB.disableFallDamage,
-           Zk: BB => DB("disableFallDamage", !BB)
+         setFraction: WW => {
+           if (SW) return;
+           const mW = JW(OW + (wW ? 1 - WW : WW) * (NW - OW));
+           mW !== iW && (HW.current || (HW.current = !0, null === sW || void 0 === sW || sW()), LW(mW))
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L511-L513` → after: `L437-L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L437-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L437-L438) · [Before (L511-L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L511-L513)

```diff
-         dayNight: {
-           isEnabled: () => !!YB.enableDayNight,
-           Zk: BB => DB("enableDayNight", BB)
+         endDrag: () => {
+           HW.current && (HW.current = !1, null === MW || void 0 === MW || MW())
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L515-L739` → after: `L440-L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L440-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L440-L443) · [Before (L515-L739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L515-L739)

```diff
-       };
-       return (0, AB.jsxs)(AB.Fragment, {
-         children: [!1 === YB.schematicContainsSpawnBlock && (0, AB.jsx)("div", {
-           className: "ManageWarningBanner",
-           children: yB("worldBuilder:mustContainSpawnBlock")
-         }), (0, AB.jsxs)("div", {
-           className: "ManageSettingsGrid",
-           children: [(0, AB.jsxs)(VB, {
-             icon: "globe",
-             title: yB("worldBuilder:worldRulesSection"),
-             disabled: !oB,
-             children: [(0, AB.jsx)(nB, {
-               label: yB("classic:defaultGamemode"),
-               caption: yB("classic:defaultGamemodeDescription"),
-               disabled: JB,
-               children: (0, AB.jsx)(RB.c, {
- ... (209 more removed lines; see GitHub link above)
+       }), (0, lW.jsx)("div", {
+         ref: YW,
+         style: {
+           display: "contents"
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L741-L812` → after: `L445-L451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L445-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L445-L451) · [Before (L741-L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L741-L812)

```diff
-         useFsAccessApi: !1
-       }), cB = ZB.length <= 30 ? ZB : `${ZB.slice(0,27)}...`, hB = null !== (OB = null === pB || void 0 === pB ? void 0 : pB.base64Jpg) && void 0 !== OB ? OB : null, aB = RB.trim(), eB = aB.length >= PB.p && aB.length <= PB.l, TB = mB && !pB && !kB, bB = mB && !eB;
-       return (0, AB.jsxs)("div", {
-         className: "ThumbnailUploadContainer",
-         children: [(0, AB.jsxs)("div", {
-           ...LB({
-             className: lB()("ThumbnailUploadDropzone", {
-               ActiveDrag: rB,
-               ValidationError: TB
-             })
-           }),
-           children: [(0, AB.jsx)("input", {
-             ...gB()
-           }), !rB && hB ? (0, AB.jsxs)(AB.Fragment, {
-             children: [(0, AB.jsxs)("div", {
-               className: "ThumbnailAspectPreviews",
- ... (56 more removed lines; see GitHub link above)
+         children: (0, lW.jsx)(EW.c, {
+           value: iW,
+           min: OW,
+           max: NW,
+           step: PW,
+           onChange: WW => {
+             LW(JW(WW))
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L814-L849` → after: `L453-L460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L453-L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L453-L460) · [Before (L814-L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L814-L849)

```diff
-           maxLength: PB.l
-         }), bB && (0, AB.jsx)("div", {
-           className: "ThumbnailUploadError",
-           children: zB("thumbnail:nameRequired", {
-             min: PB.p,
-             max: PB.l
-           })
-         }), (0, AB.jsxs)("label", {
-           className: "ThumbnailUploadCheckbox",
-           children: [(0, AB.jsx)("input", {
-             type: "checkbox",
-             checked: VB,
-             onChange: BB => {
-               SB(BB.target.checked)
-             }
-           }), zB("thumbnail:setAsThumbnailOnceApproved")]
- ... (20 more removed lines; see GitHub link above)
+           orientation: cW,
+           reverse: wW,
+           tooltip: ZW,
+           labels: AW,
+           handleLabel: bW,
+           format: kW,
+           onChangeStart: () => {
+             null === sW || void 0 === sW || sW(), null === tW || void 0 === tW || tW(!0)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L851-L852` → after: `L462-L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L462-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L462-L465) · [Before (L851-L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L851-L852)

```diff
-           children: zB(nB ? "thumbnail:processing" : "thumbnail:uploadThumbnail")
-         })]
+           onChangeComplete: () => {
+             null === tW || void 0 === tW || tW(!1), null === MW || void 0 === MW || MW()
+           }
+         })
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L855-L896` → after: `L468-L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L468-L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L468-L475) · [Before (L855-L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L855-L896)

```diff
-     const hB = 2e3;
- 
-     function aB(BB) {
-       let {
-         schematicId: OB,
-         ownedThumbnailCount: GB,
-         onClose: DB,
-         onThumbnailReady: QB
-       } = BB;
-       const {
-         t: oB
-       } = (0, jB.H)(), {
-         userContext: JB
-       } = (0, uB.d)(), [zB, pB] = (0, YB.useState)(!1), [qB, ZB] = (0, YB.useState)(!1), [NB, RB] = (0, YB.useState)(!1), WB = (0, YB.useRef)(), {
-         loading: VB,
-         eligibility: SB
- ... (26 more removed lines; see GitHub link above)
+     async function sW() {
+       const WW = tW.NotificationProvider.showPromptPopup({
+         title: "settingsMenu:reloadPagePopupTitle",
+         subtitle: "settingsMenu:reloadPagePopupSubtitle",
+         confirmText: "settingsMenu:reloadPagePopupConfirm",
+         confirmTooltip: "",
+         cancelText: "general:cancel",
+         cancelTooltip: ""
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L898-L960` → after: `L477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L477) · [Before (L898-L960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L898-L960)

```diff
-       return (0, AB.jsxs)("div", {
-         className: lB()("ThumbnailUploaderInner", {
-           ThumbnailUploaderSuccess: zB
-         }),
-         children: [zB && (0, AB.jsxs)("div", {
-           className: "ThumbnailUploadSuccessOverlay",
-           children: [(0, AB.jsxs)("div", {
-             className: "ThumbnailUploadSuccessIcon FullyFancyText AnimFadeInScaleUp",
-             children: [(0, AB.jsx)(MB.b, {
-               name: "check"
-             }), (0, AB.jsx)(FB.c, {})]
-           }), (0, AB.jsx)("div", {
-             className: "ThumbnailUploadSuccessText AnimFadeInScaleUp",
-             children: oB("thumbnail:thumbnailUploaded")
-           })]
-         }), (0, AB.jsx)("h1", {
- ... (47 more removed lines; see GitHub link above)
+       !0 === await WW.getResult() && (0, ZW.reloadBloxd)()
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L965-L1077` → after: `L482-L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L482-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L482-L486) · [Before (L965-L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L965-L1077)

```diff
-         imageUrl: OB,
-         thumbnailName: GB,
-         onClose: YB
-       } = BB;
-       const {
-         t: DB
-       } = (0, jB.H)();
-       return (0, AB.jsxs)("div", {
-         className: "ThumbnailDeleteConfirm",
-         children: [(0, AB.jsx)("div", {
-           className: "ThumbnailDeleteConfirmTitle",
-           children: DB("thumbnail:deleteThumbnail")
-         }), (0, AB.jsxs)("div", {
-           className: "ThumbnailDeleteConfirmImageContainer",
-           children: [null !== OB && (0, AB.jsx)("img", {
-             className: "ThumbnailDeleteConfirmImage",
- ... (97 more removed lines; see GitHub link above)
+         label: iW,
+         options: OW,
+         value: mW,
+         onChange: EW,
+         circleInfoText: NW
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L1083` → after: `L489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L489) · [Before (L1083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L1083)

```diff
-         className: "RejectedThumbnail",
+         className: "SettingBox SegmentedSettingRow",
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L1085-L1116` → after: `L491-L494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L491-L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L491-L494) · [Before (L1085-L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L1085-L1116)

```diff
-           className: "RejectedThumbnailImage",
-           children: [null !== GB.preview && (0, AB.jsx)("img", {
-             src: GB.preview,
-             alt: GB.name
-           }), null === GB.preview && (0, AB.jsx)(MB.b, {
-             name: "image-slash"
-           })]
-         }), (0, AB.jsxs)("div", {
-           className: "RejectedThumbnailDetails",
-           children: [(0, AB.jsx)("div", {
-             className: "RejectedThumbnailName",
-             children: GB.name
-           }), (0, AB.jsx)("div", {
-             children: null !== YB.gameName ? DB("thumbnail:rejectedGameAndDate", {
-               game: YB.gameName,
-               date: oB
- ... (16 more removed lines; see GitHub link above)
+           className: "SliderText",
+           children: [iW, NW && (0, lW.jsx)(PW.d, {
+             className: "SettingsTextInputCircleInfo",
+             hoverInfo: NW
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L1121-L1133` → after: `L504-L522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L504-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L504-L522) · [Before (L1121-L1133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L1121-L1133)

```diff
-     var sB = GB(1186);
- 
-     function xB(BB) {
-       return null !== BB.preview ? BB.preview : BB.approved ? `${sB.clientSideServerUrls.s3Url}/${(0,kB.e)(BB.id)}` : null
-     }
- 
-     function tB(BB) {
-       return null !== BB.pendingKey ? {
-         pendingKey: BB.pendingKey
-       } : {
-         thumbnailId: BB.id
-       }
-     }
+   },
+   5903: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => jW,
+       d: () => UW
+     });
+     var mW = OW(4344),
+       EW = OW(2300),
+       NW = OW(62),
+       PW = OW(1089),
+       LW = OW.n(PW),
+       cW = OW(1383),
+       wW = OW(4337),
+       tW = OW(1422),
+       ZW = OW(5910),
+       xW = OW(5947),
+ ... (3 more added lines; see GitHub link above)
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L1136` → after: `L525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L525) · [Before (L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L1136)

```diff
-       var OB, GB;
+       var iW;
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L1138-L1141` → after: `L527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L527) · [Before (L1138-L1141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L1138-L1141)

```diff
-         schematicData: oB,
-         updateSchematicData: JB,
-         publishFormEnabled: PB,
-         onClose: zB
+         setApplySettingsCallback: OW
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L1143-L1148` → after: `L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L529) · [Before (L1143-L1148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L1143-L1148)

```diff
-       const {
-         t: pB
-       } = (0, jB.H)(), {
-         userContext: qB,
-         isUserContextUpdating: ZB
-       } = (0, uB.d)(), NB = (0, KB.c)(), [RB, WB] = (0, YB.useState)([]), [VB, SB] = (0, YB.useState)([]), [nB, UB] = (0, YB.useState)(!0), [fB, kB] = (0, YB.useState)(!1), [IB, FB] = (0, YB.useState)(null !== (OB = oB.customThumbnailId) && void 0 !== OB ? OB : null), [iB, LB] =  … [truncated]
+       const [, PW] = (0, NW.useReducer)((WW => WW + 1), 0), LW = (0, NW.useRef)(!1), cW = (0, NW.useRef)(null);
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L1151-L1212` → after: `L532-L540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L532-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L532-L540) · [Before (L1151-L1212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L1151-L1212)

```diff
-         EB.current && (clearTimeout(EB.current), EB.current = null), LB(BB), null !== BB && OB && (EB.current = setTimeout((() => {
-           LB(null), EB.current = null
-         }), 5e3))
-       }(0, YB.useEffect)((() => () => {
-         clearTimeout(wB.current), clearTimeout(EB.current)
-       }), []);
-       const TB = (0, YB.useCallback)((() => {
-         UB(!0), dB.b.getOwnedThumbnails(qB).then((BB => {
-           const OB = [],
-             GB = [];
-           for (const YB of BB.thumbnails) YB.rejection ? OB.push({
-             thumbnail: YB,
-             rejection: YB.rejection
-           }) : GB.push(YB);
-           OB.sort(((BB, OB) => OB.rejection.at - BB.rejection.at)), GB.sort(((BB, OB) => {
-             const GB = BB.approved ? 1 : 0,
- ... (46 more removed lines; see GitHub link above)
+         wW.d.setFromJson(WW, "player");
+         const mW = wW.d.saveTexturePack();
+         if (lW.K) {
+           const WW = wW.d.toJson();
+           mW.then((iW => {
+             iW && (0, AW.c)(WW)
+           }))
+         } else LW.current ||= iW, cW.current !== wW.d.getId() || wW.d.getId() === EW.n.CUSTOM && LW.current ? OW((() => ZW.n)) : OW(null);
+         PW()
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L1214-L1358` → after: `L542-L578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L542-L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L542-L578) · [Before (L1214-L1358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L1214-L1358)

```diff
-       return (0, YB.useEffect)((() => {
-         !1 === ZB && TB()
-       }), [ZB, TB]), (0, AB.jsxs)("div", {
-         className: "BloxdForm ThumbnailSection",
-         children: [(0, AB.jsxs)("div", {
-           className: "SectionTitle",
-           children: [pB("thumbnail:gameThumbnail"), iB && (0, AB.jsx)("span", {
-             className: lB()("ThumbnailActionMsg", `ThumbnailActionMsg--${iB.type}`),
-             children: iB.text
-           })]
-         }), (0, AB.jsxs)("div", {
-           className: "SectionBody",
-           children: [VB.length > 0 && (0, AB.jsx)(HB, {
-             rejectedThumbnails: VB,
-             isAcknowledging: fB,
-             onAcknowledge: async function() {
- ... (129 more removed lines; see GitHub link above)
+       async function kW(WW) {
+         if (wW.d.getId() !== WW.metaData.id) {
+           if (wW.d.getId() === EW.n.CUSTOM && wW.d.getFromFolderName()) {
+             const WW = tW.NotificationProvider.showPromptPopup({
+               title: "settingsMenu:loseChangesTitle",
+               subtitle: "settingsMenu:loseChangesSubtitle",
+               confirmText: "general:continue",
+               destructive: !0,
+               confirmTooltip: "",
+               cancelText: "general:cancel",
+               cancelTooltip: ""
+             });
+             if (!0 !== await WW.getResult()) return
+           }
+           jW(WW, !1)
+         }
+ ... (21 more added lines; see GitHub link above)
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L1360` → after: `L580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L580) · [Before (L1360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L1360)

```diff
-         })]
+         })
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L1370-L1373` → after: `L586-L589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L586-L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L586-L589) · [Before (L1370-L1373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L1370-L1373)

```diff
-         schematicData: OB,
-         setTexturePack: GB,
-         initializeTexturePack: DB,
-         publishFormEnabled: QB
+         id: iW,
+         isSelected: OW,
+         setSelected: PW,
+         disabled: wW = !1
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L1375-L1382` → after: `L591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L591) · [Before (L1375-L1382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L1375-L1382)

```diff
-       const {
-         t: oB
-       } = (0, jB.H)(), [yB, JB] = (0, YB.useState)(null), [MB, PB] = (0, YB.useState)(null), [zB, pB] = (0, YB.useState)(!1), qB = (0, KB.c)(), ZB = QB && !zB, NB = OB.customTexturePackKey;
- 
-       function RB(BB) {
-         var OB;
-         JB(BB.metaData.id), PB(null !== (OB = BB.metaData.fromFolderName) && void 0 !== OB ? OB : null), (BB.metaData.id !== OO.t.CUSTOM || BB.metaData.fromFolderName) && GB(BB)
-       }
+       const [tW, ZW] = (0, NW.useState)(!0), [xW, lW] = (0, NW.useState)(""), [AW, jW] = (0, NW.useState)(""), [UW, kW] = (0, NW.useState)(""), sW = (0, NW.useRef)({});
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L1384` → after: `L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L593) · [Before (L1384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L1384)

```diff
-         NB && (pB(!0), (0, GO.e)(NB).then((BB => {
+         (0, mW.j)(iW).then((WW => {
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L1386` → after: `L595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L595) · [Before (L1386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L1386)

```diff
-           qB.current && (BB ? (JB(BB.metaData.id), PB(null !== (OB = BB.metaData.fromFolderName) && void 0 !== OB ? OB : null), DB(BB)) : console.error(`No texture pack at ${NB}`))
+           WW && (sW.current = WW, ZW(!1), lW(sW.current.metaData.name), jW(sW.current.metaData.author), kW(null !== (iW = sW.current.metaData.previewImage) && void 0 !== iW ? iW : ""))
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L1388-L1393` → after: `L597-L609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L597-L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L597-L609) · [Before (L1388-L1393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L1388-L1393)

```diff
-           console.error("Error fetching texture pack: ", BB)
-         })).finally((() => {
-           pB(!1)
-         })))
-       }), [NB, DB, qB]), (0, AB.jsxs)("div", {
-         className: "BloxdForm TexturePackSection",
+           console.warn(`Failed to fetch texture pack ${iW}`, WW)
+         }))
+       }), [iW]), (0, bW.jsxs)("div", {
+         "data-pad-focusable": !0,
+         "aria-disabled": wW || void 0,
+         className: LW()("TexturePack", {
+           Selected: OW,
+           Custom: iW === EW.n.CUSTOM,
+           Disabled: wW
+         }),
+         onClick: () => {
+           tW || wW || PW(sW.current)
+         },
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L1395-L1422` → after: `L611-L623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L611-L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L611-L623) · [Before (L1395-L1422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L1395-L1422)

```diff
-           className: "SectionTitle",
-           children: oB("customTexturePack:customTexturePack")
-         }), (0, AB.jsxs)("div", {
-           className: "TexturePackList",
-           children: [(0, AB.jsx)("div", {
-             className: lB()("TexturePack", {
-               Selected: null === yB && !zB,
-               Disabled: !ZB
-             }),
-             onClick: () => {
-               ZB && (JB(null), GB(null), PB(null))
-             },
-             children: (0, AB.jsx)("div", {
-               className: "TexturePackName",
-               children: "No Override"
-             })
- ... (12 more removed lines; see GitHub link above)
+           className: "TexturePackBg",
+           style: {
+             backgroundImage: UW ? `url(${UW})` : void 0
+           }
+         }), tW && (0, bW.jsx)("div", {
+           className: "TexturePackName",
+           children: (0, bW.jsx)(cW.d, {})
+         }), !tW && xW && (0, bW.jsx)("div", {
+           className: "TexturePackName",
+           children: xW
+         }), !tW && AW && (0, bW.jsx)("div", {
+           className: "TexturePackAuthor",
+           children: AW
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L1426` → after: `L627-L635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L627-L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L627-L635) · [Before (L1426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L1426)

```diff
-     var oO = GB(5563);
+   },
+   5952: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => LW,
+       e: () => PW,
+       h: () => NW
+     });
+     var mW = OW(5961);
+     const EW = [WW => WW.strict ? "strict" : "nonStrict", WW => WW.program];
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L1428-L1467` → after: `L637-L641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L637-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L637-L641) · [Before (L1428-L1467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L1428-L1467)

```diff
-     function jO(BB) {
-       var OB;
-       let {
-         gameCategory: GB,
-         setGameCategory: YB,
-         disabled: DB
-       } = BB;
-       const oB = null !== (OB = (0, pB.jb)(GB)) && void 0 !== OB ? OB : "other";
-       return (0, AB.jsxs)("div", {
-         className: "GameCategoryPicker",
-         children: [(0, AB.jsx)(NB.d, {
-           label: "worldBuilder:gameCategoryGroup",
-           className: "GameCategoryGroup",
-           disabled: DB,
-           children: (0, AB.jsx)(RB.c, {
-             options: pB.ab.map((BB => ({
- ... (24 more removed lines; see GitHub link above)
+     function NW(WW, iW) {
+       let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
+       const mW = {};
+       for (const EW in OW) mW[EW] = `\0${EW}\0`;
+       return WW(iW, mW).replace(/\0(\w+)\0/g, ((WW, iW) => OW[iW]))
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L1472-L1537` → after: `L645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L645) · [Before (L1472-L1537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L1472-L1537)

```diff
-       let {
-         editor: OB,
-         onClose: GB
-       } = BB;
-       const {
-         t: YB
-       } = (0, jB.H)(), {
-         schematicData: DB,
-         updateSchematicData: QB,
-         publishFormEnabled: yB,
-         formEnabled: JB
-       } = OB;
-       return (0, AB.jsxs)(AB.Fragment, {
-         children: [(0, AB.jsxs)(VB, {
-           icon: "pen-to-square",
-           title: YB("worldBuilder:basicsSection"),
- ... (50 more removed lines; see GitHub link above)
+       return null === WW.file ? null : WW.line > 0 ? `${WW.file}:${WW.line}` : WW.file
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L1541-L1579` → after: `L649-L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L649-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L649-L652) · [Before (L1541-L1579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L1541-L1579)

```diff
-       let {
-         editor: OB
-       } = BB;
-       const {
-         t: GB
-       } = (0, jB.H)(), {
-         schematicData: YB,
-         formEnabled: DB,
-         hasUnsavedChanges: oB,
-         publishSuspendedUntil: PB
-       } = OB, zB = (0, iB.j)(), lB = !0 === YB.gamePublished ? PB : null, pB = DB && oB && null === lB;
-       return (0, AB.jsxs)("footer", {
-         className: "SchematicPageFooter",
-         children: [null !== lB && (0, AB.jsx)("div", {
-           className: "SchematicPageFooterNotice",
-           children: zB(lB)
- ... (23 more removed lines; see GitHub link above)
+       const iW = new Map(WW.map((WW => [cW(WW).join("."), WW])));
+       if (0 === iW.size) return [];
+       const OW = tW([...iW.values()]);
+       return 0 === OW[0].length ? [] : OW
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L1583-L1591` → after: `L656-L658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L656-L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L656-L658) · [Before (L1583-L1591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L1583-L1591)

```diff
-       let {
-         schematic: OB,
-         onSchematicUpdate: GB,
-         onClose: DB,
-         inSourceWorld: oB
-       } = BB;
-       const {
-         t: yB
-       } = (0, jB.H)();
+       return EW.map((iW => iW(WW)))
+     }
+     const wW = EW.map((WW => new Set(mW.c.map(WW)).size));
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L1593-L1594` → after: `L660-L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L660-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L660-L669) · [Before (L1593-L1594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L1593-L1594)

```diff
-       function JB() {
-         null === DB || void 0 === DB || DB()
+     function tW(WW) {
+       const iW = EW.map((iW => new Set(WW.map(iW)))),
+         OW = iW.reduce(((WW, iW) => WW * iW.size), 1),
+         mW = iW.every(((WW, iW) => 1 === WW.size || WW.size === wW[iW]));
+       if (OW === WW.length && mW) return [EW.filter(((WW, OW) => 1 === iW[OW].size)).map((iW => iW(WW[0])))];
+       let NW = null;
+       for (let PW = 0; PW < EW.length; PW++) {
+         if (1 === iW[PW].size) continue;
+         const OW = ZW(WW, EW[PW]).flatMap(tW);
+         (null === NW || OW.length < NW.length) && (NW = OW)
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L1596-L1623` → after: `L671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L671) · [Before (L1596-L1623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L1596-L1623)

```diff
-       const MB = (0, oO.c)(OB, {
-         onNavigateAway: JB,
-         inSourceWorld: oB
-       });
-       return (0, YB.useEffect)((() => {
-         null === GB || void 0 === GB || GB(MB.schematicData)
-       }), [MB.schematicData, GB]), (0, AB.jsxs)("div", {
-         className: "SchematicPage SchematicPagePopupVariant",
-         children: [(0, AB.jsxs)("div", {
-           className: "SchematicPageBody",
-           children: [(0, AB.jsx)(QB.c, {
-             onClick: JB,
-             children: yB("worldBuilder:back")
-           }), (0, AB.jsx)(VB, {
-             icon: "rocket-launch",
-             title: yB("worldBuilder:actionsSection"),
- ... (12 more removed lines; see GitHub link above)
+       return NW
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L1626-L1643` → after: `L674-L681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L674-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L674-L681) · [Before (L1626-L1643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L1626-L1643)

```diff
-     function zO(BB) {
-       let {
-         schematic: OB,
-         onSchematicUpdate: GB,
-         onClose: YB,
-         inSourceWorld: QB
-       } = BB;
-       DB.NotificationProvider.showCustomPopup({
-         body: BB => (0, AB.jsx)(PO, {
-           schematic: OB,
-           onSchematicUpdate: GB,
-           onClose: BB,
-           inSourceWorld: QB
-         }),
-         middleScreenPopupClassName: "SchematicPopup",
-         onClose: YB,
- ... (2 more removed lines; see GitHub link above)
+     function ZW(WW, iW) {
+       const OW = new Map;
+       for (const EW of WW) {
+         var mW;
+         const WW = iW(EW);
+         OW.set(WW, [...null !== (mW = OW.get(WW)) && void 0 !== mW ? mW : [], EW])
+       }
+       return [...OW.values()]
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L1646` → after: `L684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L684) · [Before (L1646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L1646)

```diff
-   5437: (BB, OB, GB) => {
+   5940: (WW, iW, OW) => {
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L1648` → after: `L686-L687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L686-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L686-L687) · [Before (L1648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L1648)

```diff
-       b: () => lB
+       b: () => NW,
+       d: () => PW
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L1650-L1695` → after: `L689-L710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L689-L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L689-L710) · [Before (L1650-L1695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L1650-L1695)

```diff
-     var YB = GB(1090),
-       DB = GB.n(YB),
-       QB = GB(1175),
-       oB = GB(1383),
-       jB = GB(1485),
-       yB = GB(1405),
-       JB = GB(1375),
-       MB = GB(5441),
-       PB = GB(5449),
-       zB = GB(1282);
- 
-     function lB(BB) {
-       let {
-         editor: OB,
-         className: GB,
-         publishRefusal: YB = null
- ... (30 more removed lines; see GitHub link above)
+     var mW = OW(62);
+     const EW = new WeakMap,
+       NW = WW => {
+         var iW;
+         const OW = WW.closest("[data-pad-slider]");
+         return OW && null !== (iW = EW.get(OW)) && void 0 !== iW ? iW : null
+       },
+       PW = (WW, iW) => {
+         const OW = (0, mW.useRef)(iW);
+         OW.current = iW, (0, mW.useEffect)((() => {
+           if (WW.current) return ((WW, iW) => (EW.set(WW, iW), () => {
+             EW.get(WW) === iW && EW.delete(WW)
+           }))(WW.current, {
+             adjust: WW => {
+               OW.current.adjust(WW)
+             },
+ ... (6 more added lines; see GitHub link above)
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L1697-L1728` → after: `L712-L713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L712-L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L712-L713) · [Before (L1697-L1728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L1697-L1728)

```diff
-         }), !0 === pB.gamePublished && (0, zB.jsxs)(zB.Fragment, {
-           children: [(0, zB.jsx)(yB.g, {
-             tooltipInner: (0, zB.jsx)("div", {
-               className: "PublishButtonTooltip",
-               children: lB("worldBuilder:unpublishAsGameDescription")
-             }),
-             children: (0, zB.jsxs)(jB.Q, {
-               onClick: OB.unpublishSchematic,
-               disabled: RB,
-               children: [(0, zB.jsx)(oB.b, {
-                 name: "rocket-launch"
-               }), " ", lB("worldBuilder:unpublishAsGame"), " ", (0, zB.jsx)(oB.b, {
-                 name: "info-circle"
-               })]
-             })
-           }), (0, zB.jsxs)(jB.f, {
- ... (16 more removed lines; see GitHub link above)
+         }), [WW])
+       }
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L1730` → after: `L715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L715) · [Before (L1730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L1730)

```diff
-   5473: (BB, OB, GB) => {
+   5961: (WW, iW, OW) => {
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L1732` → after: `L717-L719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L717-L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L717-L719) · [Before (L1732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L1732)

```diff
-       e: () => DB
+       b: () => mW.l,
+       c: () => EW,
+       g: () => mW.r
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L1734-L1743` → after: `L721-L738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L721-L738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L721-L738) · [Before (L1734-L1743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L1734-L1743)

```diff
-     var YB = GB(1186);
-     async function DB(BB) {
-       const OB = await fetch(`${YB.clientSideServerUrls.s3Url}/${BB}`, {
-         headers: {
-           Accept: "application/json"
-         }
-       });
-       if (404 === OB.status || 403 === OB.status) return null;
-       if (!OB.ok) throw new Error(`Failed to download the texture pack (${OB.status})`);
-       return await OB.json()
+     var mW = OW(5970);
+     const EW = [!1, !0].flatMap((WW => ["terrain", "liquid", "model"].map((iW => ({
+       strict: WW,
+       program: iW
+     })))))
+   },
+   5984: (WW, iW, OW) => {
+     function mW(WW, iW) {
+       return EW(WW, iW)
+     }
+ 
+     function EW(WW, iW) {
+       if (WW === iW) return !0;
+       if ("object" !== typeof WW || "object" !== typeof iW || null === WW || null === iW || Array.isArray(WW) !== Array.isArray(iW)) return !1;
+       const OW = WW,
+         mW = iW,
+ ... (2 more added lines; see GitHub link above)
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L1746` → after: `L744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L744) · [Before (L1746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L1746)

```diff
-   5449: (BB, OB, GB) => {
+   5981: (WW, iW, OW) => {
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L1749-L1750` → after: `L747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L747) · [Before (L1749-L1750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L1749-L1750)

```diff
-       f: () => yB,
-       j: () => JB
+       e: () => LW
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L1752-L1755` → after: `L749-L751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L749-L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L749-L751) · [Before (L1752-L1755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L1752-L1755)

```diff
-     var YB = GB(56),
-       DB = GB(1540),
-       QB = GB(1175),
-       oB = GB(1112);
+     var mW = OW(2300),
+       EW = OW(5984);
+     let NW = null;
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L1757-L1795` → after: `L753-L755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L753-L755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L753-L755) · [Before (L1757-L1795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L1757-L1795)

```diff
-     function jB() {
-       let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
-       const {
-         userContext: OB
-       } = (0, oB.d)(), [GB, QB] = (0, YB.useState)((() => ({
-         loading: BB && OB.isLoggedIn(),
-         eligibility: null
-       })));
-       if ((0, YB.useEffect)((() => {
-           if (!BB || !OB.isLoggedIn()) return void QB({
-             loading: !1,
-             eligibility: null
-           });
-           let GB = !1;
-           return DB.b.getCreatorEligibility(OB).then((BB => {
-             GB || QB({
- ... (23 more removed lines; see GitHub link above)
+     function PW(WW) {
+       NW = {
+         pack: WW.metaData.id === mW.d ? null : WW
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L1799-L1826` → after: `L759-L760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L759-L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L759-L760) · [Before (L1799-L1826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L1799-L1826)

```diff
-     function yB() {
-       const {
-         t: BB,
-         selectedLanguage: OB
-       } = (0, QB.H)();
-       return (GB, YB) => BB(GB, {
-         date: (0, QB.f)(OB.code, GB, YB, {
-           dateStyle: "medium",
-           timeStyle: "short"
-         })
-       })
-     }
- 
-     function JB() {
-       const {
-         t: BB,
- ... (12 more removed lines; see GitHub link above)
+     function LW(WW) {
+       return !(null === NW || !(0, EW.c)(NW.pack, WW)) && (NW = null, !0)
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L1829` → after: `L763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L763) · [Before (L1829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L1829)

```diff
-   5563: (BB, OB, GB) => {
+   5970: (WW, iW, OW) => {
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L1831` → after: `L765-L774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L765-L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L765-L774) · [Before (L1831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L1831)

```diff
-       c: () => WB
+       A: () => tW,
+       D: () => xW,
+       e: () => LW,
+       i: () => PW,
+       l: () => mW,
+       o: () => bW,
+       p: () => ZW,
+       r: () => EW,
+       v: () => NW,
+       x: () => wW
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L1833-L1847` → after: `L776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L776) · [Before (L1833-L1847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L1833-L1847)

```diff
-     var YB = GB(56),
-       DB = GB(1360),
-       QB = GB(1049),
-       oB = GB(162),
-       jB = GB(2417),
-       yB = GB(1591),
-       JB = GB(16),
-       MB = GB(2023),
-       PB = GB(1540),
-       zB = GB(5011),
-       lB = GB(1400),
-       pB = GB(1964),
-       qB = GB(1112),
-       ZB = GB(1560),
-       NB = GB(5449);
+     const mW = 5;
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L1849-L1872` → after: `L778-L779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L778-L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L778-L779) · [Before (L1849-L1872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L1849-L1872)

```diff
-     function RB(BB, OB) {
-       return {
-         schematicId: BB.schematicId,
-         name: BB.name,
-         description: BB.description,
-         gamePublished: OB,
-         gameCategory: BB.gameCategory,
-         defaultGamemode: BB.defaultGamemode,
-         voidDeathHeight: BB.voidDeathHeight,
-         disableKeepInventory: BB.disableKeepInventory,
-         disableTpRequests: BB.disableTpRequests,
-         disableLobbySpawn: BB.disableLobbySpawn,
-         disableMobs: BB.disableMobs,
-         disableSpawnProtection: BB.disableSpawnProtection,
-         disableFallDamage: BB.disableFallDamage,
-         worldBorder: BB.worldBorder,
- ... (8 more removed lines; see GitHub link above)
+     function EW(WW) {
+       return WW === mW
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L1876-L1886` → after: `L783-L787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L783-L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L783-L787) · [Before (L1876-L1886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L1876-L1886)

```diff
-       var OB, GB;
-       let {
-         onNavigateAway: WB,
-         inSourceWorld: AB = !1,
-         canManage: VB = !0
-       } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-       const {
-         userContext: SB
-       } = (0, qB.d)(), nB = (0, ZB.useNavigatePreserveSearch)(), [UB, fB] = (0, YB.useState)({
-         ...BB
-       }), [kB, dB] = (0, YB.useState)("Enter"), [KB, uB] = (0, YB.useState)(void 0), [mB, IB] = (0, YB.useState)(!1), FB = (0, YB.useRef)(RB(BB, BB.gamePublished)), iB = (0, YB.useRef)(void 0), LB = "Enter" === kB, gB = null !== (OB = null === (GB = (0, NB.c)(VB).eligibility) ||  … [truncated]
+       return [...WW.features]
+     }
+     const PW = 262144,
+       LW = 256,
+       cW = 256;
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L1888-L1892` → after: `L789-L797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L789-L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L789-L797) · [Before (L1888-L1892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L1888-L1892)

```diff
-       function wB(BB, OB) {
-         fB((GB => ({
-           ...GB,
-           [BB]: OB
-         })))
+     function wW(WW) {
+       if ("object" !== typeof WW || null === WW || Array.isArray(WW)) return "The pack has no files.";
+       const iW = [];
+       for (const [OW, mW] of Object.entries(WW)) {
+         if ("string" !== typeof mW) return `${OW} isn't text.`;
+         iW.push({
+           path: OW,
+           source: mW
+         })
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L1894-L1896` → after: `L799-L815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L799-L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L799-L815) · [Before (L1894-L1896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L1894-L1896)

```diff
-       const EB = (0, YB.useCallback)((BB => {
-         iB.current = BB, uB(BB)
-       }), []);
+       return iW.sort(((WW, iW) => ZW(WW.path, iW.path))),
+         function(WW) {
+           if (0 === WW.length) return "The pack has no .wgsl files.";
+           if (WW.length > LW) return `The pack has more than ${LW} .wgsl files.`;
+           const iW = new Set;
+           for (const {
+               path: OW
+             }
+             of WW) {
+             const WW = lW(OW);
+             if (null !== WW) return WW;
+             if (iW.has(OW)) return `The pack has two files at ${OW}.`;
+             iW.add(OW)
+           }
+           return xW(WW) > PW ? `The pack's .wgsl files are over ${PW/1024} KB in total.` : null
+         }(iW) ?? iW
+ ... (1 more added lines; see GitHub link above)
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L1898-L1900` → after: `L817-L821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L817-L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L817-L821) · [Before (L1898-L1900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L1898-L1900)

```diff
-       function cB() {
-         return (0, yB.p)((0, QB.v)(UB.schematicId), UB)
-       }
+     function tW(WW) {
+       const iW = {};
+       for (const OW of WW) iW[OW.path] = OW.source;
+       return iW
+     }
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L1902-L1927` → after: `L823-L859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L823-L859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L823-L859) · [Before (L1902-L1927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L1902-L1927)

```diff
-       function hB(BB, OB) {
-         dB("Loading");
-         const GB = RB(UB, BB),
-           YB = KB !== iB.current ? KB : void 0;
-         PB.b.updateSchematic(SB, GB, YB, OB).then((OB => {
-           let {
-             customTexturePackKey: YB
-           } = OB;
-           dB("Success"), wB("customTexturePackKey", YB), FB.current = GB, iB.current = void 0, uB(void 0), !BB || UB.gamePublished || WB || pB.d.showGamePublished(UB.name, cB()), setTimeout((() => {
-             wB("gamePublished", BB), dB("Enter")
-           }), 1e3)
-         })).catch((BB => {
-           if (BB instanceof oB.d && BB.errorMessageForUser === jB.x && void 0 === OB) return dB("Enter"), void IB(!0);
-           var GB;
-           (console.error("Failed to save schematic:", BB), dB("Error"), BB instanceof oB.d && BB.errorMessageForUser) && lB.NotificationProvider.showAlertPopup({
-             title: "worldBuilder:changesNotSaved",
- ... (10 more removed lines; see GitHub link above)
+     function ZW(WW, iW) {
+       return WW < iW ? -1 : WW > iW ? 1 : 0
+     }
+ 
+     function xW(WW) {
+       const iW = new TextEncoder;
+       let OW = 0;
+       for (const {
+           source: mW
+         }
+         of WW) OW += iW.encode(mW).byteLength;
+       return OW
+     }
+ 
+     function lW(WW) {
+       if (!WW.toLowerCase().endsWith(".wgsl")) return `${WW} isn't a .wgsl file.`;
+ ... (21 more added lines; see GitHub link above)
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L1929-L1952` → after: `L861-L866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L861-L866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L861-L866) · [Before (L1929-L1952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L1929-L1952)

```diff
-       return {
-         schematicData: UB,
-         updateSchematicData: wB,
-         setTexturePack: uB,
-         initializeTexturePack: EB,
-         updateState: kB,
-         formEnabled: LB,
-         publishFormEnabled: rB,
-         hasUnsavedChanges: XB,
-         publishSuspendedUntil: gB,
-         canEditSourceWorld: !AB,
-         saveSchematic: hB,
-         unpublishSchematic: function() {
-           lB.NotificationProvider.showPromptPopup({
-             icon: "rocket-launch",
-             title: "worldBuilder:unpublishAsGameConfirmTitle",
- ... (8 more removed lines; see GitHub link above)
+       const PW = WW => {
+           const iW = AW.exec(WW);
+           return iW && NW.has(iW[1]) ? {
+             root: iW[1],
+             rotation: Number(iW[2]) - 1
+           } : null
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L1954-L1956` → after: `L868-L874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L868-L874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L868-L874) · [Before (L1954-L1956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L1954-L1956)

```diff
-         askingPublishingPolicy: mB,
-         answerPublishingPolicy: function(BB) {
-           IB(!1), BB && hB(!0, jB.B)
+         LW = new Set(EW.map((WW => {
+           let [iW] = WW;
+           return PW(iW)?.root ?? iW
+         }))),
+         cW = (WW, OW) => {
+           const mW = WW.replace(/_?0$/, "");
+           return (iW[OW]?.numAnimStates ?? 0) > 1 && !LW.has(mW) ? mW : WW
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L1958-L1972` → after: `L876-L904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L876-L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L876-L904) · [Before (L1958-L1972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L1958-L1972)

```diff
-         editSourceWorld: function() {
-           dB("Loading"), zB.c.getSourceWorld(UB.schematicId).then((BB => {
-             MB.gameBridge.send("leaveGame", {
-               reloadPath: "/"
-             }), (0, JB.m)("other"), nB((0, DB.c)("classic", BB)), null === WB || void 0 === WB || WB()
-           })).catch((BB => {
-             console.error("Failed to get source world:", BB), dB("Error"), setTimeout((() => {
-               dB("Enter")
-             }), 1e3)
-           }))
-         },
-         playGame: function() {
-           MB.gameBridge.send("leaveGame", {
-             reloadPath: "/"
-           }), nB(cB()), null === WB || void 0 === WB || WB()
+         wW = new Map;
+       for (const [AW, bW] of EW) wW.set(bW, cW(PW(AW)?.root ?? AW, bW));
+       const tW = EW.reduce(((WW, iW) => {
+           let [, OW] = iW;
+           return Math.max(WW, OW + 1)
+         }), 0),
+         ZW = Array.from({
+           length: tW
+         }, ((WW, iW) => ({
+           id: iW + 1,
+           rotation: 0
+         }))),
+         xW = new Map,
+         lW = new Map;
+       for (const [AW, bW] of EW) {
+         const WW = PW(AW),
+ ... (13 more added lines; see GitHub link above)
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L1976-L1977` → after: `L944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/118.js#L944) · [Before (L1976-L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/118.js#L1976-L1977)

```diff
-   },
-   5426: () => {}
+   }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/119.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/119.js` (36 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/119.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/119.js#L4)

```diff
-   37046: (BB, OB, GB) => {
+   7485: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/119.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/119.js#L6)

```diff
-       e: () => yB
+       c: () => kW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L8` → after: `L8-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/119.js#L8-L16) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/119.js#L8)

```diff
-     var YB = GB(1090),
+     var mW = OW(62),
+       EW = OW(1532),
+       NW = OW(1584),
+       PW = OW(4723),
+       LW = OW(1107),
+       cW = OW(1383),
+       wW = OW(1434),
+       tW = OW(1391),
+       ZW = OW(1089),
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L10-L12` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/119.js#L18-L19) · [Before (L10-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/119.js#L10-L12)

```diff
-       QB = GB(56),
-       oB = GB(4998),
-       jB = GB(1282);
+       lW = OW(7482),
+       AW = OW(1283);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L16-L17` → after: `L23-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/119.js#L23-L24) · [Before (L16-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/119.js#L16-L17)

```diff
-         locked: OB,
-         children: GB
+         info: iW,
+         className: OW
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L19-L28` → after: `L26-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L26-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/119.js#L26-L62) · [Before (L19-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/119.js#L19-L28)

```diff
-       const YB = (0, QB.useRef)(null),
-         yB = (0, oB.d)(YB, "y");
-       return (0, jB.jsx)("div", {
-         ref: YB,
-         className: DB()("CreateCustomLobbyBody", {
-           CreateCustomLobbyBodyMoreAbove: yB.before,
-           CreateCustomLobbyBodyMoreBelow: yB.after
-         }),
-         "data-pad-ignore": OB || void 0,
-         children: GB
+       const {
+         statusText: mW,
+         rowText: EW
+       } = (0, lW.h)();
+       return (0, AW.jsxs)("div", {
+         className: xW()("GameApprovalInfoDetails", OW),
+         children: [(0, AW.jsxs)("div", {
+           className: xW()("GameApprovalInfoSummary", iW.overallPassed ? "Passed" : "Failed"),
+           children: [(0, AW.jsx)(tW.c, {
+             name: iW.overallPassed ? "circle-check" : "circle-xmark"
+           }), (0, AW.jsx)("span", {
+             children: mW(iW.status)
+           })]
+         }), iW.rows.length > 0 && (0, AW.jsx)("div", {
+           className: "GameApprovalInfoRows",
+           children: iW.rows.map((WW => {
+ ... (21 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L31-L48` → after: `L65-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L65-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/119.js#L65-L66) · [Before (L31-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/119.js#L31-L48)

```diff
-   },
-   37108: (BB, OB, GB) => {
-     GB.r(OB), GB.d(OB, {
-       showFirstWorldSetupPopup: () => qB
-     });
-     GB(5426), GB(37036);
-     var YB = GB(5047),
-       DB = GB(56),
-       QB = GB(5011),
-       oB = GB(1175),
-       jB = GB(1400),
-       yB = GB(37046),
-       JB = GB(5430),
-       MB = GB(1485),
-       PB = GB(3928),
-       zB = GB(37044),
- ... (2 more removed lines; see GitHub link above)
+     var jW = OW(1172),
+       UW = OW(1422);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L56-L58` → after: `L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/119.js#L70) · [Before (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/119.js#L56-L58)

```diff
-         body: GB => (0, pB.jsx)(ZB, {
-           flow: OB,
-           close: GB,
+         body: () => (0, AW.jsx)(sW, {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L61-L64` → after: `L73-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L73-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/119.js#L73-L75) · [Before (L61-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/119.js#L61-L64)

```diff
-         middleScreenPopupClassName: "CreateCustomLobbyPopup",
-         onClose: () => {
-           OB.closed = !0, OB.requested || (0, lB.i)()
-         }
+         middleScreenPopupClassName: "ApprovalInfoPopup",
+         onClose: () => {},
+         unlockPointerKey: "approvalInfoPopup"
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L70-L75` → after: `L81-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L81-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/119.js#L81-L83) · [Before (L70-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/119.js#L70-L75)

```diff
-         flow: OB,
-         close: GB,
-         onCreating: jB,
-         onCreated: qB,
-         onFailedClosed: ZB,
-         join: NB
+         schematicId: iW,
+         canOverride: OW,
+         onApprovalChanged: ZW
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L79` → after: `L87-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L87-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/119.js#L87-L95) · [Before (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/119.js#L79)

```diff
-       } = (0, oB.H)(), [WB, AB] = (0, DB.useState)(YB.v), [VB, SB] = (0, DB.useState)(!1), [nB, UB] = (0, DB.useState)(""), fB = (0, PB.c)();
+       } = (0, jW.B)(), {
+         userContext: lW
+       } = (0, LW.e)(), UW = (0, PW.c)(), [kW, sW] = (0, mW.useState)(null), [MW, KW] = (0, mW.useState)(null), [SW, YW] = (0, mW.useState)(!1), yW = (0, mW.useCallback)((() => {
+         KW(null), NW.e.getGameApprovalInfo(lW, iW).then((WW => {
+           UW.current && sW(WW)
+         })).catch((WW => {
+           console.error("Failed to get game approval info", WW), UW.current && KW(xW("studio:approvalLoadFailed"))
+         }))
+       }), [lW, iW, UW, xW]);
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L81-L97` → after: `L97-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L97-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/119.js#L97-L107) · [Before (L81-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/119.js#L81-L97)

```diff
-         (0, lB.o)()
-       }), []);
-       const kB = BB => ({
-         isEnabled: () => WB.plugins[BB],
-         Zk: OB => {
-           (0, lB.m)({
-             plugin: BB,
-             enabled: OB
-           }), AB({
-             ...WB,
-             plugins: {
-               ...WB.plugins,
-               [BB]: OB
-             }
-           })
-         }
- ... (1 more removed lines; see GitHub link above)
+         yW()
+       }), [yW]);
+       const TW = WW => {
+         SW || (YW(!0), NW.e.setGameApproval(lW, iW, WW).then((() => {
+           null === ZW || void 0 === ZW || ZW(), UW.current && yW()
+         })).catch((WW => {
+           console.error("Failed to set game approval", WW)
+         })).finally((() => {
+           UW.current && YW(!1)
+         })))
+       };
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L99-L142` → after: `L109-L165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L109-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/119.js#L109-L165) · [Before (L99-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/119.js#L99-L142)

```diff
-         className: "CreateCustomLobby",
-         children: [(0, pB.jsx)("div", {
-           className: "CreateCustomLobbyTitleContainer",
-           children: (0, pB.jsx)("div", {
-             className: "CreateCustomLobbyTitle",
-             children: RB("homePage:myWorld")
-           })
-         }), (0, pB.jsx)(yB.e, {
-           locked: VB,
-           children: (0, pB.jsxs)("div", {
-             className: "CreateCustomLobbyFields",
-             children: [(0, pB.jsx)(zB.d, {
-               value: WB.defaultGamemode,
-               onChange: BB => {
-                 (0, YB.w)(BB) && BB !== WB.defaultGamemode && ((0, lB.m)({
-                   defaultGamemode: BB
- ... (28 more removed lines; see GitHub link above)
+         className: "ApprovalInfoPopupBody",
+         children: [(0, AW.jsx)("h1", {
+           className: "ApprovalInfoPopupTitle",
+           children: xW("studio:approvalTitle")
+         }), !kW && !MW && (0, AW.jsx)("div", {
+           className: "ApprovalInfoPopupLoader",
+           children: (0, AW.jsx)(cW.d, {})
+         }), MW && (0, AW.jsx)("div", {
+           className: "ApprovalInfoPopupError",
+           children: MW
+         }), kW && (0, AW.jsxs)(AW.Fragment, {
+           children: [(0, AW.jsx)(bW, {
+             info: kW
+           }), OW && (0, AW.jsxs)("div", {
+             className: "ApprovalInfoPopupActions",
+             children: [!0 !== kW.manualOverride && (0, AW.jsx)(wW.f, {
+ ... (41 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L170` → after: `L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/119.js#L172) · [Before (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/119.js#L170)

```diff
-   5430: (BB, OB, GB) => {
+   7482: (WW, iW, OW) => {
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L172` → after: `L174-L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L174-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/119.js#L174-L175) · [Before (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/119.js#L172)

```diff
-       d: () => JB
+       e: () => LW,
+       h: () => PW
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L174-L179` → after: `L177-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L177-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/119.js#L177-L186) · [Before (L174-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/119.js#L174-L179)

```diff
-     var YB = GB(1090),
-       DB = GB.n(YB),
-       QB = GB(5047),
-       oB = GB(1175),
-       jB = GB(1282);
-     const yB = [...QB.k, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];
+     var mW = OW(344),
+       EW = OW(1172);
+     const NW = {
+       manuallyApproved: "studio:approvalStatusManuallyApproved",
+       manuallyAndAutoApproved: "studio:approvalStatusManuallyAndAutoApproved",
+       manuallyDenied: "studio:approvalStatusManuallyDenied",
+       autoApproved: "studio:approvalStatusAutoApproved",
+       notApproved: "studio:approvalStatusNotApproved",
+       notIndexed: "studio:approvalStatusNotIndexed"
+     };
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L181` → after: `L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/119.js#L188) · [Before (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/119.js#L181)

```diff
-     function JB(BB) {
+     function PW() {
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L183-L206` → after: `L190-L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L190-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/119.js#L190-L251) · [Before (L183-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/119.js#L183-L206)

```diff
-         disabled: OB,
-         hideWrapper: GB
-       } = BB, {
-         t: YB
-       } = (0, oB.H)(), JB = BB.advancedMode ? yB.map((OB => [OB, BB.callbacks[OB]])) : QB.k.map((OB => [OB, BB.callbacks[OB]])), PB = (0, jB.jsx)("div", {
-         className: DB()("PluginsGrid", {
-           SectionBody: !GB
-         }),
-         children: JB.map((BB => {
-           let [GB, YB] = BB;
-           return (0, jB.jsx)(MB, {
-             plugin: GB,
-             callbacks: YB,
-             disabled: OB
-           }, GB)
-         }))
- ... (8 more removed lines; see GitHub link above)
+         t: WW,
+         selectedLanguage: iW
+       } = (0, EW.B)();
+       return {
+         statusText: iW => WW(NW[iW]),
+         rowText: OW => {
+           const NW = (WW, OW) => (0, mW.$)((0, EW.k)(iW.code, WW), 0, OW),
+             PW = (iW, OW) => null === OW ? iW : WW("studio:approvalWithMinDays", {
+               value: iW,
+               days: OW
+             });
+           switch (OW.kind) {
+             case "ownerAccountAge": {
+               const iW = OW.ownerIsLoggedIn ? "studio:approvalAccountAgeLoggedIn" : "studio:approvalAccountAgeNotLoggedIn";
+               return {
+                 label: WW("studio:approvalAccountAgeLabel"),
+ ... (46 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L211-L216` → after: `L288-L289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L288-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/119.js#L288-L289) · [Before (L211-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/119.js#L211-L216)

```diff
-         plugin: OB,
-         callbacks: {
-           isEnabled: GB,
-           Zk: YB
-         },
-         disabled: QB
+         schematicId: iW,
+         takedown: OW
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L220` → after: `L293-L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L293-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/119.js#L293-L307) · [Before (L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/119.js#L220)

```diff
-       } = (0, oB.H)(), JB = GB();
+       } = (0, lW.B)(), {
+         userContext: NW
+       } = (0, AW.e)(), [PW, LW] = (0, mW.useState)(function(WW) {
+         switch (WW) {
+           case "available":
+             return "closed";
+           case "asked":
+             return "sent";
+           case "unavailable":
+             return null
+         }
+       }(OW.review)), [cW, wW] = (0, mW.useState)(""), [tW, ZW] = (0, mW.useState)(null), xW = null !== OW.policyId && null !== OW.at ? EW("creatorModeration:bannerTitle", {
+         date: new Date(OW.at).toLocaleDateString(),
+         policyName: (0, HW.h)(EW, OW.policyId)
+       }) : EW("creatorModeration:bannerTitleLegacy");
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L222-L230` → after: `L309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/119.js#L309) · [Before (L222-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/119.js#L222-L230)

```diff
-         className: DB()("PluginCard", {
-           PluginCardEnabled: JB,
-           PluginCardDisabledForm: QB
-         }),
-         "data-pad-focusable": !0,
-         "aria-disabled": QB || void 0,
-         onClick: () => {
-           QB || YB(!JB)
-         },
+         className: "ManageWarningBanner StudioTakedownBanner",
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L232-L235` → after: `L311-L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L311-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/119.js#L311-L315) · [Before (L232-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/119.js#L232-L235)

```diff
-           className: "PluginCardIcon",
-           children: (0, jB.jsx)("img", {
-             src: `/textures/games/classic/customGames/${OB}.png`,
-             alt: OB
+           className: "StudioTakedownBannerTitle",
+           children: xW
+         }), null !== OW.reason && (0, nW.jsx)("div", {
+           children: EW("creatorModeration:moderatorNote", {
+             reason: OW.reason
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L237-L244` → after: `L317-L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L317-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/119.js#L317-L350) · [Before (L237-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/119.js#L237-L244)

```diff
-         }), (0, jB.jsxs)("div", {
-           className: "PluginCardBody",
-           children: [(0, jB.jsx)("div", {
-             className: "PluginCardTitle",
-             children: yB(PB[OB])
-           }), (0, jB.jsx)("div", {
-             className: "PluginCardDescription",
-             children: yB(zB[OB])
+         }), (0, nW.jsx)("div", {
+           children: (0, HW.e)(EW, OW.policyId)
+         }), 1 === OW.recentStrikeCount && (0, nW.jsx)("div", {
+           children: EW("creatorModeration:strikeOne")
+         }), OW.recentStrikeCount > 1 && (0, nW.jsx)("div", {
+           children: EW("creatorModeration:strikeMany", {
+             count: OW.recentStrikeCount
+           })
+         }), "closed" === PW && (0, nW.jsx)(sW.f, {
+           className: "StudioTakedownBannerAction",
+           onClick: () => {
+             LW("writing")
+           },
+           children: EW("creatorModeration:askForReview")
+         }), ("writing" === PW || "sending" === PW) && (0, nW.jsxs)("div", {
+           className: "StudioTakedownBannerReview",
+ ... (18 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L246-L248` → after: `L352-L356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L352-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/119.js#L352-L356) · [Before (L246-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/119.js#L246-L248)

```diff
-         }), (0, jB.jsx)("span", {
-           className: "PluginCardToggleLabel",
-           children: yB(JB ? "general:on" : "general:off")
+         }), "sent" === PW && (0, nW.jsx)("div", {
+           children: EW("creatorModeration:reviewSent")
+         }), null !== tW && (0, nW.jsx)("div", {
+           className: "StudioTakedownBannerError",
+           children: tW
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L253-L259` → after: `L365-L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L365-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/119.js#L365-L368) · [Before (L253-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/119.js#L253-L259)

```diff
-         fallDamage: "classic:enableFallDamage",
-         tpRequests: "classic:enableTpRequests",
-         spawnProtection: "classic:enableSpawnProtection",
-         spawnReset: "classic:enableSpawnReset",
-         smpMarketplace: "classic:enableSmpMarketplace",
-         survivalGuns: "classic:enableSurvivalGuns",
-         dayNight: "classic:enableDayNight"
+         "1h": 60,
+         "24h": 1440,
+         "7d": 10080,
+         "30d": 43200
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L262-L268` → after: `L371-L392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L371-L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/119.js#L371-L392) · [Before (L262-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/119.js#L262-L268)

```diff
-         fallDamage: "classic:enableFallDamageDescription",
-         tpRequests: "classic:enableTpRequestsDescription",
-         spawnProtection: "classic:enableSpawnProtectionDescription",
-         spawnReset: "classic:enableSpawnResetDescription",
-         smpMarketplace: "classic:enableSmpMarketplaceDescription",
-         survivalGuns: "classic:enableSurvivalGunsDescription",
-         dayNight: "classic:enableDayNightDescription"
+         minute: {
+           stepMinutes: 1,
+           untilMinutes: 20
+         },
+         fiveMinutes: {
+           stepMinutes: 5,
+           untilMinutes: 60
+         }
+       };
+ 
+     function VW(WW, iW) {
+       const OW = OW => WW.percentiles[iW.indexOf(OW)];
+       return {
+         count: WW.count,
+         playerCount: WW.playerCount,
+         sum: WW.sum,
+ ... (6 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L270-L282` → after: `L394-L442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L394-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/119.js#L394-L442) · [Before (L270-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/119.js#L270-L282)

```diff
-   },
-   37044: (BB, OB, GB) => {
-     GB.d(OB, {
-       d: () => JB,
-       g: () => MB
-     });
-     GB(56);
-     var YB = GB(1090),
-       DB = GB.n(YB),
-       QB = GB(5047),
-       oB = GB(331),
-       jB = GB(1175),
-       yB = GB(1282);
+     }
+     var pW = OW(4792),
+       fW = OW(5995),
+       CW = OW(1434),
+       XW = OW(6014),
+       BW = OW(6423),
+       qW = OW(7382),
+       RW = OW(7360),
+       GW = OW(7375),
+       IW = OW(6936),
+       aW = OW(7356),
+       rW = OW(7358),
+       zW = OW(7300),
+       FW = OW(4292),
+       QW = OW(7386),
+       Wi = OW(7252),
+ ... (33 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L286-L288` → after: `L446-L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L446-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/119.js#L446-L476) · [Before (L286-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/119.js#L286-L288)

```diff
-         value: OB,
-         onChange: GB,
-         showAll: YB,
+         icon: iW,
+         label: OW,
+         onClick: mW,
+         disabled: EW = !1,
+         active: NW = !1,
+         small: PW = !1
+       } = WW;
+       return (0, nW.jsx)(CW.f, {
+         tooltipInner: OW,
+         placement: "top",
+         delayShow: 0,
+         children: (0, nW.jsxs)(sW.Z, {
+           className: PW ? "StudioSmallIconButton" : void 0,
+           active: NW,
+           disabled: EW,
+           onClick: mW,
+ ... (15 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L293` → after: `L481-L575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L481-L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/119.js#L481-L575) · [Before (L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/119.js#L293)

```diff
-       } = (0, jB.H)();
+       } = (0, lW.B)();
+       return (0, nW.jsx)(ti, {
+         small: !0,
+         icon: "download",
+         label: EW("Export Data"),
+         disabled: mW,
+         onClick: () => {
+           const WW = OW().map((WW => WW.map(Ni).join(","))).join("\r\n");
+           (0, wi.downloadBlob)(new Blob([`${Zi}${WW}`], {
+             type: "text/csv;charset=utf-8"
+           }), function(WW) {
+             const iW = WW.map(ci).filter((WW => "" !== WW)).join(" - ");
+             return `${""===iW?"export":iW}.csv`
+           }(iW))
+         }
+       })
+ ... (79 more added lines; see GitHub link above)
```
