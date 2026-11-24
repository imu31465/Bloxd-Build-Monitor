# Changed — Bundle Modifications Report (Part 088 / 142)

- **Updated at**: `2026-11-25T04:31 JST`
- **Part**: `88 / 142` (**418** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 087](part-087.md) · [Part 089 →](part-089.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/77.js` (sn3sfj.2522680a → yma3ej.f92ebd70 · continued)

- **File**: `bundles/bloxd.io/chunks/js/77.js` (4724 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45)

#### 4221. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L33589` → after: `L33267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R33267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L33267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L33267) · [Before (L33589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L33589)

```diff
-               if (pp.amount + Dp <= op.g.maxItemStackSize) return pp.amount += Dp, Sp.amount -= Dp, Sp.amount <= 0 && (this.setItemAtIdx(cp, null), Sp.amount < 0 && !(this.inCreative && !this.gI && cp >= this.playerInventory.numSlots) && console.error(new Error("Moved too much it … [truncated]
+               if (TT.amount + jT <= zT.f.maxItemStackSize) return TT.amount += jT, gT.amount -= jT, gT.amount <= 0 && (this.setItemAtIdx(mT, null), gT.amount < 0 && !(this.inCreative && !this.OM && mT >= this.playerInventory.numSlots) && console.error(new Error("Moved too much it … [truncated]
```

#### 4222. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L33593-L33594` → after: `L33271-L33272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R33271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L33271-L33272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L33271-L33272) · [Before (L33593-L33594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L33593-L33594)

```diff
-               if (pp.amount < op.g.maxItemStackSize) {
-                 const ip = op.g.maxItemStackSize - pp.amount;
+               if (TT.amount < zT.f.maxItemStackSize) {
+                 const UT = zT.f.maxItemStackSize - TT.amount;
```

#### 4223. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L33606-L33607` → after: `L33284-L33285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R33284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L33284-L33285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L33284-L33285) · [Before (L33606-L33607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L33606-L33607)

```diff
-             attributes: (0, xp.g)(Sp.attributes)
-           }), Sp.amount -= Dp, Sp.amount <= 0 && (this.setItemAtIdx(cp, null), Sp.amount < 0 && !(this.inCreative && !this.gI && cp >= this.playerInventory.numSlots) && console.error(new Error(`Moved too much item: tried to move ${Dp} ${Sp.name} from slot ${cp} that had ${pp} ${S … [truncated]
+             attributes: (0, nT.i)(gT.attributes)
+           }), gT.amount -= jT, gT.amount <= 0 && (this.setItemAtIdx(mT, null), gT.amount < 0 && !(this.inCreative && !this.OM && mT >= this.playerInventory.numSlots) && console.error(new Error(`Moved too much item: tried to move ${jT} ${gT.name} from slot ${mT} that had ${TT} ${g … [truncated]
```

#### 4224. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L33612` → after: `L33290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R33290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L33290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L33290) · [Before (L33612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L33612)

```diff
-         return this.update(), null === Yp ? Ip : {
+         return this.update(), null === kT ? MT : {
```

#### 4225. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L33618` → after: `L33296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R33296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L33296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L33296) · [Before (L33618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L33618)

```diff
-         const cp = this.playerInventory.numSlots + (this.gI ? this.gI.numSlots : 0);
+         const mT = this.playerInventory.numSlots + (this.OM ? this.OM.numSlots : 0);
```

#### 4226. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L33625` → after: `L33303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R33303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L33303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L33303) · [Before (L33625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L33625)

```diff
-           if (this.gI) this.gI.setItemSlot(pp - this.playerInventory.numSlots, ip, cp, op);
+           if (this.OM) this.OM.setItemSlot(TT - this.playerInventory.numSlots, UT, mT, zT);
```

#### 4227. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L33627-L33629` → after: `L33305-L33307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R33305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L33305-L33307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L33305-L33307) · [Before (L33627-L33629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L33627-L33629)

```diff
-         } else if (pp >= this.playerInventory.numSlots - Op.c.length) {
-           const Ip = pp - this.playerInventory.numSlots + Op.c.length;
-           if ("Air" !== ip && (0, Yp.vb)(ip) !== Op.c[Ip]) throw new Error(`Attempting to put invalid item ${ip} ${cp} ${op} \t\t\t\t\tinto armour inven slot idx ${pp}`);
+         } else if (TT >= this.playerInventory.numSlots - WT.b.length) {
+           const MT = TT - this.playerInventory.numSlots + WT.b.length;
+           if ("Air" !== UT && (0, kT.Mb)(UT) !== WT.b[MT]) throw new Error(`Attempting to put invalid item ${UT} ${mT} ${zT} \t\t\t\t\tinto armour inven slot idx ${TT}`);
```

#### 4228. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L33635-L33636` → after: `L33313-L33314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R33313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L33313-L33314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L33313-L33314) · [Before (L33635-L33636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L33635-L33636)

```diff
-         if (ip && null !== ip.amount && (ip.amount < 0 || ip.amount > op.g.maxItemStackSize) && (console.error(new Error(`Tried to setItemAtIdx ${pp} with invalid amount ${ip.amount}. Slot will be set to null instead`).stack), ip = null), pp >= this.playerInventory.numSlots) {
-           if (this.gI) this.gI.items[pp - this.playerInventory.numSlots] = ip;
+         if (UT && null !== UT.amount && (UT.amount < 0 || UT.amount > zT.f.maxItemStackSize) && (console.error(new Error(`Tried to setItemAtIdx ${TT} with invalid amount ${UT.amount}. Slot will be set to null instead`).stack), UT = null), TT >= this.playerInventory.numSlots) {
+           if (this.OM) this.OM.items[TT - this.playerInventory.numSlots] = UT;
```

#### 4229. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L33638-L33639` → after: `L33316-L33317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R33316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L33316-L33317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L33316-L33317) · [Before (L33638-L33639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L33638-L33639)

```diff
-         } else if (pp >= this.playerInventory.numSlots - Op.c.length) {
-           const op = pp - this.playerInventory.numSlots + Op.c.length;
+         } else if (TT >= this.playerInventory.numSlots - WT.b.length) {
+           const zT = TT - this.playerInventory.numSlots + WT.b.length;
```

#### 4230. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L33641` → after: `L33319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R33319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L33319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L33319) · [Before (L33641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L33641)

```diff
-           if (ip && (0, Yp.vb)(ip.name) !== Op.c[op]) throw new Error(`Attempting to put invalid item ${null===(cp=ip)||void 0===cp?void 0:cp.name} ${null===(Ip=ip)||void 0===Ip?void 0:Ip.amount} ${JSON.stringify(null!==(Sp=null===(xp=ip)||void 0===xp?void 0:xp.attributes)&&void  … [truncated]
+           if (UT && (0, kT.Mb)(UT.name) !== WT.b[zT]) throw new Error(`Attempting to put invalid item ${null===(mT=UT)||void 0===mT?void 0:mT.name} ${null===(MT=UT)||void 0===MT?void 0:MT.amount} ${JSON.stringify(null!==(gT=null===(nT=UT)||void 0===nT?void 0:nT.attributes)&&void  … [truncated]
```

#### 4231. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L33647` → after: `L33325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R33325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L33325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L33325) · [Before (L33647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L33647)

```diff
-           if (this.gI) return this.gI.items[pp - this.playerInventory.numSlots];
+           if (this.OM) return this.OM.items[TT - this.playerInventory.numSlots];
```

#### 4232. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L33649-L33651` → after: `L33327-L33329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R33327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L33327-L33329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L33327-L33329) · [Before (L33649-L33651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L33649-L33651)

```diff
-             const ip = Ip.b[pp - this.playerInventory.numSlots],
-               cp = this.HP.bloxd.getItemTypeObj(ip);
-             if (!cp) throw new Error(`item ${ip} defined in creativeItems but not elsewhere`);
+             const UT = MT.d[TT - this.playerInventory.numSlots],
+               mT = this.Rl.bloxd.getItemTypeObj(UT);
+             if (!mT) throw new Error(`item ${UT} defined in creativeItems but not elsewhere`);
```

#### 4233. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L33655` → after: `L33333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R33333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L33333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L33333) · [Before (L33655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L33655)

```diff
-               attributes: (0, xp.k)(ip),
+               attributes: (0, nT.l)(UT),
```

#### 4234. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L33659` → after: `L33337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R33337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L33337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L33337) · [Before (L33659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L33659)

```diff
-           return this.HP.BU(`Attempting to get item in high idx ${pp} when not in chest or creative`, new Error(`Attempting to get item in high idx ${pp} when not in chest or creative`)), null
+           return this.Rl.ZZ(`Attempting to get item in high idx ${TT} when not in chest or creative`, new Error(`Attempting to get item in high idx ${TT} when not in chest or creative`)), null
```

#### 4235. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L33664-L33665` → after: `L33342-L33343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R33342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L33342-L33343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L33342-L33343) · [Before (L33664-L33665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L33664-L33665)

```diff
-         const ip = pp - Sp.q + Op.c.length;
-         return ip < 0 || ip >= Op.c.length ? null : Op.c[ip]
+         const UT = TT - gT.u + WT.b.length;
+         return UT < 0 || UT >= WT.b.length ? null : WT.b[UT]
```

#### 4236. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L33669` → after: `L33347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R33347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L33347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L33347) · [Before (L33669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L33669)

```diff
-         this.playerInventory.update(!0), null === (pp = this.gI) || void 0 === pp || pp.update(!0)
+         this.playerInventory.update(!0), null === (TT = this.OM) || void 0 === TT || TT.update(!0)
```

#### 4237. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L33682` → after: `L33360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R33360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L33360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L33360) · [Before (L33682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L33682)

```diff
-         this.gI && this.chestsWithUpdatesHeld && !this.chestsWithUpdatesHeld.has(this.gI) && (this.gI.holdUpdates(), this.chestsWithUpdatesHeld.add(this.gI))
+         this.OM && this.chestsWithUpdatesHeld && !this.chestsWithUpdatesHeld.has(this.OM) && (this.OM.holdUpdates(), this.chestsWithUpdatesHeld.add(this.OM))
```

#### 4238. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L33686-L33690` → after: `L33364-L33368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R33364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L33364-L33368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L33364-L33368) · [Before (L33686-L33690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L33686-L33690)

```diff
-           HI: this.playerInventory.stringify(),
-           gI: this.gI ? this.gI.stringify() : null,
-           GI: this.GI,
-           rI: JSON.stringify(this.rI),
-           ZI: this.gI ? this.gI.numSlots : null
+           Dz: this.playerInventory.stringify(),
+           OM: this.OM ? this.OM.stringify() : null,
+           eM: this.eM,
+           YM: JSON.stringify(this.YM),
+           JM: this.OM ? this.OM.numSlots : null
```

#### 4239. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L33695-L33699` → after: `L33373-L33377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R33373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L33373-L33377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L33373-L33377) · [Before (L33695-L33699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L33695-L33699)

```diff
-           HI: ip,
-           gI: cp,
-           GI: Op,
-           rI: op,
-           ZI: Ip
+           Dz: UT,
+           OM: mT,
+           eM: WT,
+           YM: zT,
+           JM: MT
```

#### 4240. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L33701` → after: `L33379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R33379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L33379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L33379) · [Before (L33701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L33701)

```diff
-         this.playerInventory.loadFromString(ip), cp ? (this.loadOpenChestFromStr(cp, null !== Ip && void 0 !== Ip ? Ip : Sp.j), this.GI = Op || null, this.rI = JSON.parse(op) || null) : (this.gI = null, this.GI = null, this.rI = null)
+         this.playerInventory.loadFromString(UT), mT ? (this.loadOpenChestFromStr(mT, null !== MT && void 0 !== MT ? MT : gT.l), this.eM = WT || null, this.YM = JSON.parse(zT) || null) : (this.OM = null, this.eM = null, this.YM = null)
```

#### 4241. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L33704-L33705` → after: `L33382-L33383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R33382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L33382-L33383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L33382-L33383) · [Before (L33704-L33705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L33704-L33705)

```diff
-         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Sp.j;
-         return this.gI = (0, xp.o)(this.HP, this.playerInventory.state.yJ, (pp => {
+         let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : gT.l;
+         return this.OM = (0, nT.o)(this.Rl, this.playerInventory.state.bV, (TT => {
```

#### 4242. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L33708` → after: `L33386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R33386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L33386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L33386) · [Before (L33708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L33708)

```diff
-         }), ip), this.holdChestUpdates(), this.gI.loadFromString(pp), this.gI
+         }), UT), this.holdChestUpdates(), this.OM.loadFromString(TT), this.OM
```

#### 4243. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L33712` → after: `L33390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R33390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L33390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L33390) · [Before (L33712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L33712)

```diff
-   38686: (pp, ip, cp) => {
+   38595: (TT, UT, mT) => {
```

#### 4244. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L33714-L33720` → after: `L33392-L33398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R33392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L33392-L33398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L33392-L33398) · [Before (L33714-L33720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L33714-L33720)

```diff
-       b: () => wp,
-       d: () => yp,
-       h: () => Wp,
-       k: () => Dp,
-       m: () => Pp,
-       q: () => Ap,
-       s: () => Sp
+       c: () => cT,
+       f: () => BT,
+       j: () => pT,
+       n: () => jT,
+       r: () => LT,
+       u: () => lT,
+       y: () => gT
```

#### 4245. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L33722-L33724` → after: `L33400-L33402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R33400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L33400-L33402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L33400-L33402) · [Before (L33722-L33724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L33722-L33724)

```diff
-     var Op = cp(1927),
-       op = cp(3296),
-       Ip = cp(2276);
+     var WT = mT(2014),
+       zT = mT(3317),
+       MT = mT(2348);
```

#### 4246. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L33727` → after: `L33405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R33405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L33405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L33405) · [Before (L33727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L33727)

```diff
-       Lp = (0, Op.o)(20),
+       HT = (0, WT.m)(20),
```

#### 4247. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L33733-L33737` → after: `L33411-L33415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R33411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L33411-L33415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L33411-L33415) · [Before (L33733-L33737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L33733-L33737)

```diff
-       Dp = (0, Op.o)(40),
-       Ap = (0, Op.o)(0),
-       Pp = (0, Op.o)(20),
-       Wp = (0, Op.o)(35),
-       yp = (0, Op.o)(40),
+       jT = (0, WT.m)(40),
+       lT = (0, WT.m)(0),
+       LT = (0, WT.m)(20),
+       pT = (0, WT.m)(35),
+       BT = (0, WT.m)(40),
```

#### 4248. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L33740-L33741` → after: `L33418-L33419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R33418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L33418-L33419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L33418-L33419) · [Before (L33740-L33741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L33740-L33741)

```diff
-         numTexturesInAtlas: op.c,
-         textureOffsets: Ip.d,
+         numTexturesInAtlas: zT.b,
+         textureOffsets: MT.b,
```

#### 4249. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L33940` → after: `L33618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R33618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L33618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L33618) · [Before (L33940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L33940)

```diff
-               softTolerance: (0, Op.o)(60),
+               softTolerance: (0, WT.m)(60),
```

#### 4250. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L33956` → after: `L33634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R33634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L33634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L33634) · [Before (L33956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L33956)

```diff
-               softTolerance: (0, Op.o)(60),
+               softTolerance: (0, WT.m)(60),
```

#### 4251. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L33971` → after: `L33649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R33649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L33649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L33649) · [Before (L33971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L33971)

```diff
-               softTolerance: (0, Op.o)(60),
+               softTolerance: (0, WT.m)(60),
```

#### 4252. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L34201` → after: `L33879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R33879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L33879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L33879) · [Before (L34201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L34201)

```diff
-               softTolerance: (0, Op.o)(60),
+               softTolerance: (0, WT.m)(60),
```

#### 4253. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L34276` → after: `L33954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R33954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L33954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L33954) · [Before (L34276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L34276)

```diff
-             softTolerance: (0, Op.o)(60),
+             softTolerance: (0, WT.m)(60),
```

#### 4254. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L34281` → after: `L33959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R33959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L33959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L33959) · [Before (L34281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L34281)

```diff
-             softTolerance: (0, Op.o)(60),
+             softTolerance: (0, WT.m)(60),
```

#### 4255. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L34417` → after: `L34095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R34095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L34095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L34095) · [Before (L34417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L34417)

```diff
-   37403: (pp, ip, cp) => {
+   37270: (TT, UT, mT) => {
```

#### 4256. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L34419` → after: `L34097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R34097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L34097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L34097) · [Before (L34419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L34419)

```diff
-       d: () => op
+       b: () => zT
```

#### 4257. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L34443` → after: `L34121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R34121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L34121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L34121) · [Before (L34443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L34443)

```diff
-       return null !== (ip = Sp[pp]) && void 0 !== ip ? ip : null
+       return null !== (UT = gT[TT]) && void 0 !== UT ? UT : null
```

#### 4258. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L34515` → after: `L34193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R34193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L34193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L34193) · [Before (L34515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L34515)

```diff
-   38682: (pp, ip, cp) => {
+   38586: (TT, UT, mT) => {
```

#### 4259. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L34517` → after: `L34195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R34195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L34195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L34195) · [Before (L34517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L34517)

```diff
-       e: () => op
+       b: () => zT
```

#### 4260. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35303` → after: `L34981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R34981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L34981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L34981) · [Before (L35303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35303)

```diff
-   38354: (pp, ip, cp) => {
+   38274: (TT, UT, mT) => {
```

#### 4261. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35305` → after: `L34983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R34983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L34983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L34983) · [Before (L35305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35305)

```diff
-       e: () => Op
+       b: () => WT
```

#### 4262. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35309` → after: `L34987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R34987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L34987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L34987) · [Before (L35309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35309)

```diff
-   37880: (pp, ip, cp) => {
+   37791: (TT, UT, mT) => {
```

#### 4263. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35313` → after: `L34990-L34991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R34990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L34990-L34991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L34990-L34991) · [Before (L35313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35313)

```diff
-       g: () => hp
+       e: () => DT,
+       i: () => uT
```

#### 4264. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35315-L35319` → after: `L34993-L34997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R34993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L34993-L34997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L34993-L34997) · [Before (L35315-L35319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35315-L35319)

```diff
-     var Op = cp(195),
-       op = cp(9338),
-       Ip = cp(9359),
-       Sp = cp(37889),
-       xp = cp(337);
+     var WT = mT(208),
+       zT = mT(9330),
+       MT = mT(9351),
+       gT = mT(37798),
+       nT = mT(366);
```

#### 4265. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35323` → after: `L35001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35001) · [Before (L35323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35323)

```diff
-       return (0, Sp.l)((Op => {
+       return (0, gT.i)((WT => {
```

#### 4266. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35326` → after: `L35004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35004) · [Before (L35326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35326)

```diff
-         return Op === Ip.Yk.fn(Ip.NJ) ? function(pp, ip) {
+         return WT === MT.pY.rK(MT.VV) ? function(TT, UT) {
```

#### 4267. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35330` → after: `L35008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35008) · [Before (L35330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35330)

```diff
-             if (!pp.lG(ip[0], ip[1], ip[2])) return !0
+             if (!TT.hG(UT[0], UT[1], UT[2])) return !0
```

#### 4268. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35333` → after: `L35011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35011) · [Before (L35333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35333)

```diff
-         }(op, Op) : (cp[0] = Math.floor((Op.DP.base[0] + Op.DP.max[0]) / 2), cp[1] = Math.floor(Op.DP.base[1]), cp[2] = Math.floor((Op.DP.base[2] + Op.DP.max[2]) / 2), op.jK(cp, cp), !op.lG(cp[0], cp[1], cp[2]))
+         }(zT, WT) : (mT[0] = Math.floor((WT.Kl.base[0] + WT.Kl.max[0]) / 2), mT[1] = Math.floor(WT.Kl.base[1]), mT[2] = Math.floor((WT.Kl.base[2] + WT.Kl.max[2]) / 2), zT.jD(mT, mT), !zT.hG(mT[0], mT[1], mT[2]))
```

#### 4269. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35338-L35341` → after: `L35016-L35019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35016-L35019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35016-L35019) · [Before (L35338-L35341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35338-L35341)

```diff
-       Ap = [...xp.zc.map((pp => op.e[pp].id)), op.e.Vines.id, op.e["Maple Trapdoor"].id, op.e["Pine Trapdoor"].id, op.e["Plum Trapdoor"].id, op.e["Cedar Trapdoor"].id, op.e["Aspen Trapdoor"].id, op.e["Jungle Trapdoor"].id, op.e["Palm Trapdoor"].id, op.e["Pear Trapdoor"].id, op.e[ … [truncated]
-       Pp = [op.e.Cobweb.id, op.e.Net.id],
-       Wp = [op.e["Fat Brown Mushroom"].id, op.e["Fat Red Mushroom"].id],
-       yp = Object.keys(op.e).filter((pp => op.e[pp].tW)).map((pp => op.e[pp].id)),
+       lT = [...nT.fd.map((TT => zT.g[TT].id)), zT.g.Vines.id, zT.g["Maple Trapdoor"].id, zT.g["Pine Trapdoor"].id, zT.g["Plum Trapdoor"].id, zT.g["Cedar Trapdoor"].id, zT.g["Aspen Trapdoor"].id, zT.g["Jungle Trapdoor"].id, zT.g["Palm Trapdoor"].id, zT.g["Pear Trapdoor"].id, zT.g[ … [truncated]
+       LT = [zT.g.Cobweb.id, zT.g.Net.id],
+       pT = [zT.g["Fat Brown Mushroom"].id, zT.g["Fat Red Mushroom"].id],
+       BT = Object.keys(zT.g).filter((TT => zT.g[TT].RL)).map((TT => zT.g[TT].id)),
```

#### 4270. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35344-L35346` → after: `L35022-L35024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35022-L35024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35022-L35024) · [Before (L35344-L35346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35344-L35346)

```diff
-     for (const [oi, Ii] of Object.entries(Ip.$b)) {
-       const pp = op.e[oi];
-       if (!pp) throw new Error(`Jump pad "${oi}" not found in blockMetadata`);
+     for (const [mU, WU] of Object.entries(MT.gc)) {
+       const TT = zT.g[mU];
+       if (!TT) throw new Error(`Jump pad "${mU}" not found in blockMetadata`);
```

#### 4271. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35354-L35355` → after: `L35032-L35033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35032-L35033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35032-L35033) · [Before (L35354-L35355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35354-L35355)

```diff
-     for (const oi of Object.keys(op.e)) {
-       const pp = op.e[oi],
+     for (const mU of Object.keys(zT.g)) {
+       const TT = zT.g[mU],
```

#### 4272. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35359-L35360` → after: `L35037-L35038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35037-L35038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35037-L35038) · [Before (L35359-L35360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35359-L35360)

```diff
-       let cp = pp.Ww ? 0 : 1;
-       for (let Op = 4; pp.Ww && Op < pp.Ww.length; Op += 6) cp = Math.max(cp, pp.Ww[Op]);
+       let mT = TT.oZ ? 0 : 1;
+       for (let WT = 4; TT.oZ && WT < TT.oZ.length; WT += 6) mT = Math.max(mT, TT.oZ[WT]);
```

#### 4273. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35365` → after: `L35043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35043) · [Before (L35365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35365)

```diff
-       return pp[pp.bounceable = 1] = "bounceable", pp[pp.wallClimbable = 2] = "wallClimbable", pp[pp.ceilingClimbable = 4] = "ceilingClimbable", pp[pp.cobweb = 8] = "cobweb", pp[pp.tW = 16] = "tW", pp[pp.jumpPad = 32] = "jumpPad", pp[pp.conveyor = 64] = "conveyor", pp
+       return TT[TT.bounceable = 1] = "bounceable", TT[TT.wallClimbable = 2] = "wallClimbable", TT[TT.ceilingClimbable = 4] = "ceilingClimbable", TT[TT.cobweb = 8] = "cobweb", TT[TT.RL = 16] = "RL", TT[TT.jumpPad = 32] = "jumpPad", TT[TT.conveyor = 64] = "conveyor", TT
```

#### 4274. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35367` → after: `L35045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35045) · [Before (L35367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35367)

```diff
-     const mp = (0, xp.bb)(op.e, (pp => {
+     const YT = (0, nT.lb)(zT.g, (TT => {
```

#### 4275. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35370` → after: `L35048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35048) · [Before (L35370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35370)

```diff
-       return Wp.includes(pp) && (cp |= kp.bounceable), Ap.includes(pp) && (cp |= kp.wallClimbable), null !== (ip = op.e[pp]) && void 0 !== ip && ip.climbableInside && (cp |= kp.ceilingClimbable), Pp.includes(pp) && (cp |= kp.cobweb), yp.includes(pp) && (cp |= kp.tW), Up.includes( … [truncated]
+       return pT.includes(TT) && (mT |= eT.bounceable), lT.includes(TT) && (mT |= eT.wallClimbable), null !== (UT = zT.g[TT]) && void 0 !== UT && UT.climbableInside && (mT |= eT.ceilingClimbable), LT.includes(TT) && (mT |= eT.cobweb), BT.includes(TT) && (mT |= eT.RL), ZT.includes( … [truncated]
```

#### 4276. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35377-L35378` → after: `L35055-L35056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35055-L35056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35055-L35056) · [Before (L35377-L35378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35377-L35378)

```diff
-     const Xp = (0, xp.bb)(op.e, (pp => {
-       const ip = op.e[pp];
+     const aT = (0, nT.lb)(zT.g, (TT => {
+       const UT = zT.g[TT];
```

#### 4277. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35384` → after: `L35062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35062) · [Before (L35384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35384)

```diff
-       return 1 === ip || 2 === ip ? 1 === ip : "trapdoor" === op.e[pp].model
+       return 1 === UT || 2 === UT ? 1 === UT : "trapdoor" === zT.g[TT].model
```

#### 4278. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35388` → after: `L35066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35066) · [Before (L35388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35388)

```diff
-       const ip = pp.UW;
+       const UT = TT.DL;
```

#### 4279. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35396` → after: `L35074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35074) · [Before (L35396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35396)

```diff
-         cp && Number.isInteger(cp.rootId) && !(Math.abs(cp.rootId) > 2147483647) && (null == op || Number.isInteger(op) && op >= 0 && op <= 127) && (qp[Op] = 1, Mp[Op] = cp.rootId, Cp[Op] = null !== op && void 0 !== op ? op : 0, Ep[Op] = cp.open ? 1 : 0)
+         mT && Number.isInteger(mT.rootId) && !(Math.abs(mT.rootId) > 2147483647) && (null == zT || Number.isInteger(zT) && zT >= 0 && zT <= 127) && (xT[WT] = 1, dT[WT] = mT.rootId, wT[WT] = null !== zT && void 0 !== zT ? zT : 0, tT[WT] = mT.open ? 1 : 0)
```

#### 4280. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35419-L35420` → after: `L35097-L35098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35097-L35098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35097-L35098) · [Before (L35419-L35420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35419-L35420)

```diff
-       pp.UW !== Rp && Qp(pp);
-       const op = pp.HP.Yk.xZ(ip).Iip,
+       TT.DL !== JT && XT(TT);
+       const zT = TT.Rl.pY.FN(UT).zUT,
```

#### 4281. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35423` → after: `L35101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35101) · [Before (L35423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35423)

```diff
-         xp = pp.jK(op, Tp),
+         nT = TT.jD(zT, FT),
```

#### 4282. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35427-L35428` → after: `L35105-L35106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35105-L35106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35105-L35106) · [Before (L35427-L35428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35427-L35428)

```diff
-         Wp = Ap + Op.g.Vw,
-         yp = .5 * (cp.DP.max[0] - cp.DP.base[0]),
+         pT = lT + WT.f.Fc,
+         BT = .5 * (mT.Kl.max[0] - mT.Kl.base[0]),
```

#### 4283. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35487` → after: `L35165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35165) · [Before (L35487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35487)

```diff
-             1 === Op || 3 === Op ? (pp = 2, Ip = 0, Sp = Yp + .5, op = 1 === Op ? Hp : Hp + 1) : (pp = 0, Ip = 2, Sp = Hp + .5, op = 2 === Op ? Yp : Yp + 1), Math.abs(xp[pp] - op) < hp && Math.abs(xp[Ip] - Sp) - .499 < yp && (Gp = !0, 0 !== cp.resting[pp] && (Np[pp] = ip))
+             1 === WT || 3 === WT ? (TT = 2, MT = 0, gT = kT + .5, zT = 1 === WT ? qT : qT + 1) : (TT = 0, MT = 2, gT = qT + .5, zT = 2 === WT ? kT : kT + 1), Math.abs(nT[TT] - zT) < uT && Math.abs(nT[MT] - gT) - .499 < BT && (GT = !0, 0 !== mT.resting[TT] && (sT[TT] = UT))
```

#### 4284. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35490` → after: `L35168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35168) · [Before (L35490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35490)

```diff
-             !(Lp - tp > Yp + 1 || Lp + tp < Yp || Pp - tp > Hp + 1 || Pp + tp < Hp) && (zp || (zp = !!(Rp & kp.cobweb)), sp || (sp = !!(Rp & kp.tW)))
+             !(HT - fT > kT + 1 || HT + fT < kT || LT - fT > qT + 1 || LT + fT < qT) && (hT || (hT = !!(JT & eT.cobweb)), DT || (DT = !!(JT & eT.RL)))
```

#### 4285. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35501-L35502` → after: `L35179-L35180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35179-L35180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35179-L35180) · [Before (L35501-L35502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35501-L35502)

```diff
-       const op = ip.DP.base,
-         Ip = ip.DP.max,
+       const zT = UT.Kl.base,
+         MT = UT.Kl.max,
```

#### 4286. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35504` → after: `L35182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35182) · [Before (L35504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35504)

```diff
-       return Sp[0] = op[0] - cp, Sp[1] = op[1] - Op, Sp[2] = op[2] - cp, Sp[3] = Ip[0] + cp, Sp[4] = Ip[1] + Op, Sp[5] = Ip[2] + cp, Zp(pp.HP, Sp)
+       return gT[0] = zT[0] - mT, gT[1] = zT[1] - WT, gT[2] = zT[2] - mT, gT[3] = MT[0] + mT, gT[4] = MT[1] + WT, gT[5] = MT[2] + mT, ET(TT.Rl, gT)
```

#### 4287. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35512` → after: `L35190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35190) · [Before (L35512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35512)

```diff
-       const cp = pp.BP;
+       const mT = TT.ZL;
```

#### 4288. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35541-L35542` → after: `L35219-L35220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35219-L35220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35219-L35220) · [Before (L35541-L35542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35541-L35542)

```diff
-         const Ip = pp.Yk.xZ(ip),
-           Sp = pp.Yk.fn(ip);
+         const MT = TT.pY.FN(UT),
+           gT = TT.pY.rK(UT);
```

#### 4289. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35544-L35545` → after: `L35222-L35223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35222-L35223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35222-L35223) · [Before (L35544-L35545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35544-L35545)

```diff
-         const xp = Ip.Vcp,
-           Lp = null !== (op = Ip.BP) && void 0 !== op ? op : pp.BP,
+         const nT = MT.smT,
+           HT = null !== (zT = MT.ZL) && void 0 !== zT ? zT : TT.ZL,
```

#### 4290. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35556-L35557` → after: `L35234-L35235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35234-L35235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35234-L35235) · [Before (L35556-L35557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35556-L35557)

```diff
-           const Pp = pp.nH(ip);
-           if (pp.UW.vG(Pp)) {
+           const LT = TT.uq(UT);
+           if (TT.DL.sG(LT)) {
```

#### 4291. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35593` → after: `L35271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35271) · [Before (L35593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35593)

```diff
-   38211: (pp, ip, cp) => {
+   38124: (TT, UT, mT) => {
```

#### 4292. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35595-L35596` → after: `L35273-L35274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35273-L35274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35273-L35274) · [Before (L35595-L35596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35595-L35596)

```diff
-       b: () => op,
-       d: () => Ip
+       d: () => zT,
+       f: () => MT
```

#### 4293. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35598` → after: `L35276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35276) · [Before (L35598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35598)

```diff
-     var Op = cp(9338);
+     var WT = mT(9330);
```

#### 4294. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35611` → after: `L35289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35289) · [Before (L35611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35611)

```diff
-         op = Op.e[pp].soundType,
+         zT = WT.g[TT].soundType,
```

#### 4295. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35615-L35616` → after: `L35293-L35294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35293-L35294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35293-L35294) · [Before (L35615-L35616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35615-L35616)

```diff
-         const op = Op.e[pp].harvestType;
-         return void 0 === op ? (console.error("no harvest type for block", Op.e[pp], Op.e[pp].name, ip), "stone") : cp[op]
+         const zT = WT.g[TT].harvestType;
+         return void 0 === zT ? (console.error("no harvest type for block", WT.g[TT], WT.g[TT].name, UT), "stone") : mT[zT]
```

#### 4296. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35627` → after: `L35305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35305) · [Before (L35627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35627)

```diff
-   37566: (pp, ip, cp) => {
+   37453: (TT, UT, mT) => {
```

#### 4297. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35629-L35632` → after: `L35307-L35309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35307-L35309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35307-L35309) · [Before (L35629-L35632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35629-L35632)

```diff
-       e: () => Op,
-       h: () => op,
-       l: () => Lp,
-       m: () => xp,
+       d: () => WT,
+       f: () => zT,
+       j: () => HT,
```

#### 4298. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35634` → after: `L35311-L35312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35311-L35312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35311-L35312) · [Before (L35634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35634)

```diff
-       q: () => Ip
+       r: () => gT,
+       s: () => MT
```

#### 4299. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35645` → after: `L35323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35323) · [Before (L35645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35645)

```diff
-   37589: (pp, ip, cp) => {
+   37474: (TT, UT, mT) => {
```

#### 4300. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35648-L35649` → after: `L35327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35327) · [Before (L35648-L35649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35648-L35649)

```diff
-       h: () => Xp,
-       l: () => Ep
+       h: () => tT
```

#### 4301. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35651` → after: `L35329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35329) · [Before (L35651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35651)

```diff
-     var Op = cp(37575);
+     var WT = mT(37465);
```

#### 4302. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35701-L35702` → after: `L35379-L35380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35379-L35380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35379-L35380) · [Before (L35701-L35702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35701-L35702)

```diff
-       if (pp.loop === Op.g.Loop || null !== pp.animTimeUpdate) return 1 / 0;
-       if (pp.loop === Op.g.Hold && pp.lengthSeconds > 0) return pp.startDelaySeconds + pp.lengthSeconds;
+       if (TT.loop === WT.l.Loop || null !== TT.animTimeUpdate) return 1 / 0;
+       if (TT.loop === WT.l.Hold && TT.lengthSeconds > 0) return TT.startDelaySeconds + TT.lengthSeconds;
```

#### 4303. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35704` → after: `L35382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35382) · [Before (L35704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35704)

```diff
-       return cp ? 1 / 0 : pp.startDelaySeconds + ip + 2 * Op.k
+       return mT ? 1 / 0 : TT.startDelaySeconds + UT + 2 * WT.o
```

#### 4304. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35726` → after: `L35404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35404) · [Before (L35726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35726)

```diff
-       return "number" === typeof pp ? pp : pp.constant
+       return "number" === typeof TT ? TT : TT.constant
```

#### 4305. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35728-L35730` → after: `L35406-L35408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35406-L35408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35406-L35408) · [Before (L35728-L35730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35728-L35730)

```diff
-     var Wp = cp(37593),
-       yp = cp(37568),
-       Up = cp(37580);
+     var pT = mT(37479),
+       BT = mT(37461),
+       ZT = mT(37468);
```

#### 4306. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35736-L35738` → after: `L35414-L35416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35414-L35416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35414-L35416) · [Before (L35736-L35738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35736-L35738)

```diff
-         ["rotation", Op.c.Rotation],
-         ["position", Op.c.Position],
-         ["scale", Op.c.Scale]
+         ["rotation", WT.h.Rotation],
+         ["position", WT.h.Position],
+         ["scale", WT.h.Scale]
```

#### 4307. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35744` → after: `L35422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35422) · [Before (L35744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35744)

```diff
-       if (pp.length > vp) return mp(ip, `file is ${pp.length} characters, over the 524288 limit`);
+       if (TT.length > vT) return YT(UT, `file is ${TT.length} characters, over the 524288 limit`);
```

#### 4308. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35749` → after: `L35427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35427) · [Before (L35749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35749)

```diff
-         return mp(ip, `invalid JSON: ${op.message}`)
+         return YT(UT, `invalid JSON: ${zT.message}`)
```

#### 4309. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35754` → after: `L35432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35432) · [Before (L35754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35754)

```diff
-         return mp(ip, `could not be loaded: ${op.message}`)
+         return YT(UT, `could not be loaded: ${zT.message}`)
```

#### 4310. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35762` → after: `L35440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35440) · [Before (L35762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35762)

```diff
-           severity: Op.b.Error,
+           severity: WT.d.Error,
```

#### 4311. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35773` → after: `L35451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35451) · [Before (L35773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35773)

```diff
-         if (!(0, yp.h)(pp)) return mp(this.source, "the file is not a JSON object");
+         if (!(0, BT.p)(TT)) return YT(this.source, "the file is not a JSON object");
```

#### 4312. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35775` → after: `L35453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35453) · [Before (L35775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35775)

```diff
-         if ("string" !== typeof ip || !wp.includes(ip)) return mp(this.source, `unsupported format_version ${JSON.stringify(ip)}; expected one of ${wp.join(", ")}`);
+         if ("string" !== typeof UT || !cT.includes(UT)) return YT(this.source, `unsupported format_version ${JSON.stringify(UT)}; expected one of ${cT.join(", ")}`);
```

#### 4313. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35777` → after: `L35455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35455) · [Before (L35777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35777)

```diff
-         if (!(0, yp.h)(cp)) return mp(this.source, 'missing "animations" object');
+         if (!(0, BT.p)(mT)) return YT(this.source, 'missing "animations" object');
```

#### 4314. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35779` → after: `L35457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35457) · [Before (L35779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35779)

```diff
-         if (op.length > 128) return mp(this.source, `${op.length} animations, over the 128 limit`);
+         if (zT.length > 128) return YT(this.source, `${zT.length} animations, over the 128 limit`);
```

#### 4315. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35784-L35785` → after: `L35462-L35463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35462-L35463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35462-L35463) · [Before (L35784-L35785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35784-L35785)

```diff
-           if (!(Sp instanceof yp.d)) throw Sp;
-           this.Yy(Op.b.Error, `${xp}: ${Sp.message}`)
+           if (!(gT instanceof BT.e)) throw gT;
+           this.Gp(WT.d.Error, `${nT}: ${gT.message}`)
```

#### 4316. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35788` → after: `L35466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35466) · [Before (L35788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35788)

```diff
-           severity: Op.b.Warning,
+           severity: WT.d.Warning,
```

#### 4317. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35798-L35799` → after: `L35476-L35477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35476-L35477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35476-L35477) · [Before (L35798-L35799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35798-L35799)

```diff
-         if (0 === pp.length || pp.length > Hp) throw new yp.d("animation names must be 1-128 characters");
-         if (!(0, yp.h)(ip)) throw new yp.d("is not an object");
+         if (0 === TT.length || TT.length > qT) throw new BT.e("animation names must be 1-128 characters");
+         if (!(0, BT.p)(UT)) throw new BT.e("is not an object");
```

#### 4318. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35803-L35805` → after: `L35481-L35483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35481-L35483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35481-L35483) · [Before (L35803-L35805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35803-L35805)

```diff
-         xp.length > 0 && this.Yy(Op.b.Warning, `${pp}: ${xp.join(", ")} not supported and ignored`), Lp.length > 0 && this.Yy(Op.b.Warning, `${pp}: unknown keys ignored: ${Lp.slice(0,5).join(", ")}${Lp.length>5?", ...":""}`);
-         const Yp = null !== (cp = ip.bones) && void 0 !== cp ? cp : {};
-         if (!(0, yp.h)(Yp)) throw new yp.d('"bones" is not an object');
+         nT.length > 0 && this.Gp(WT.d.Warning, `${TT}: ${nT.join(", ")} not supported and ignored`), HT.length > 0 && this.Gp(WT.d.Warning, `${TT}: unknown keys ignored: ${HT.slice(0,5).join(", ")}${HT.length>5?", ...":""}`);
+         const kT = null !== (mT = UT.bones) && void 0 !== mT ? mT : {};
+         if (!(0, BT.p)(kT)) throw new BT.e('"bones" is not an object');
```

#### 4319. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35807` → after: `L35485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35485) · [Before (L35807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35807)

```diff
-         if (Dp.length > 128) throw new yp.d(`${Dp.length} bones, over the 128 limit`);
+         if (jT.length > 128) throw new BT.e(`${jT.length} bones, over the 128 limit`);
```

#### 4320. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35813-L35814` → after: `L35491-L35492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35491-L35492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35491-L35492) · [Before (L35813-L35814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35813-L35814)

```diff
-           if (0 === Op.length || Op.length > Hp) throw new yp.d("bone names must be 1-128 characters");
-           if (Pp.has(pp)) throw new yp.d(`bone "${Op}" appears twice (bone names are case-insensitive)`);
+           if (0 === WT.length || WT.length > qT) throw new BT.e("bone names must be 1-128 characters");
+           if (LT.has(TT)) throw new BT.e(`bone "${WT}" appears twice (bone names are case-insensitive)`);
```

#### 4321. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35825` → after: `L35503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35503) · [Before (L35825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35825)

```diff
-           if ("number" !== typeof wp || !Number.isFinite(wp) || wp < 0 || wp > yp.e) throw new yp.d(`animation_length must be a number from 0 to ${yp.e}`);
+           if ("number" !== typeof cT || !Number.isFinite(cT) || cT < 0 || cT > BT.i) throw new BT.e(`animation_length must be a number from 0 to ${BT.i}`);
```

#### 4322. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35829` → after: `L35507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35507) · [Before (L35829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35829)

```diff
-         if ("boolean" !== typeof tp) throw new yp.d("override_previous_animation must be true or false");
+         if ("boolean" !== typeof fT) throw new BT.e("override_previous_animation must be true or false");
```

#### 4323. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35845-L35846` → after: `L35523-L35524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35523-L35524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35523-L35524) · [Before (L35845-L35846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35845-L35846)

```diff
-           mp = (0, Wp.f)(kp);
-         if (mp > Wp.c) throw new yp.d(`costs ${mp} to play each frame, over the ${Wp.c} limit: animate fewer bones or simplify its Molang`);
+           YT = (0, pT.j)(eT);
+         if (YT > pT.g) throw new BT.e(`costs ${YT} to play each frame, over the ${pT.g} limit: animate fewer bones or simplify its Molang`);
```

#### 4324. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35850` → after: `L35528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35528) · [Before (L35850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35850)

```diff
-         if (!(0, yp.h)(ip)) throw new yp.d(`bone "${pp}" is not an object`);
+         if (!(0, BT.p)(UT)) throw new BT.e(`bone "${TT}" is not an object`);
```

#### 4325. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35852-L35854` → after: `L35530-L35532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35530-L35532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35530-L35532) · [Before (L35852-L35854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35852-L35854)

```diff
-           [Op.c.Rotation]: null,
-           [Op.c.Position]: null,
-           [Op.c.Scale]: null
+           [WT.h.Rotation]: null,
+           [WT.h.Position]: null,
+           [WT.h.Scale]: null
```

#### 4326. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35858-L35859` → after: `L35536-L35537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35536-L35537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35536-L35537) · [Before (L35858-L35859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35858-L35859)

```diff
-           if (void 0 === op) throw new yp.d(`bone "${pp}": "${Op}" is not supported (only rotation, position and scale)`);
-           cp[op] = this.compileChannel(ip[Op], op, `${pp}.${Op}`)
+           if (void 0 === zT) throw new BT.e(`bone "${TT}": "${WT}" is not supported (only rotation, position and scale)`);
+           mT[zT] = this.compileChannel(UT[WT], zT, `${TT}.${WT}`)
```

#### 4327. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35863-L35865` → after: `L35541-L35543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35541-L35543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35541-L35543) · [Before (L35863-L35865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35863-L35865)

```diff
-           rotation: cp[Op.c.Rotation],
-           position: cp[Op.c.Position],
-           scale: cp[Op.c.Scale]
+           rotation: mT[WT.h.Rotation],
+           position: mT[WT.h.Position],
+           scale: mT[WT.h.Scale]
```

#### 4328. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35872` → after: `L35550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35550) · [Before (L35872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35872)

```diff
-           dataPoints: (0, yp.j)(pp, ip, cp),
+           dataPoints: (0, BT.t)(TT, UT, mT),
```

#### 4329. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35876` → after: `L35554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35554) · [Before (L35876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35876)

```diff
-         else if ((0, yp.h)(pp) && pp.post) op.push({
+         else if ((0, BT.p)(TT) && TT.post) zT.push({
```

#### 4330. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35878-L35879` → after: `L35556-L35557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35556-L35557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35556-L35557) · [Before (L35878-L35879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35878-L35879)

```diff
-           dataPoints: (0, yp.j)(pp, ip, cp),
-           catmullRom: (0, yp.p)(pp, cp),
+           dataPoints: (0, BT.t)(TT, UT, mT),
+           catmullRom: (0, BT.z)(TT, mT),
```

#### 4331. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35883` → after: `L35561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35561) · [Before (L35883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35883)

```diff
-           if (!(0, yp.h)(pp)) throw new yp.d(`${cp} must be a value, an array or a map of keyframes`);
+           if (!(0, BT.p)(TT)) throw new BT.e(`${mT} must be a value, an array or a map of keyframes`);
```

#### 4332. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35886` → after: `L35564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35564) · [Before (L35886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35886)

```diff
-             if (Op.length > 2048) throw new yp.d(`${cp} has ${Op.length} keyframes, over the 2048 limit`);
+             if (WT.length > 2048) throw new BT.e(`${mT} has ${WT.length} keyframes, over the 2048 limit`);
```

#### 4333. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35889` → after: `L35567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35567) · [Before (L35889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35889)

```diff
-                 Sp = `${cp}@${Ip}`;
+                 gT = `${mT}@${MT}`;
```

#### 4334. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35891-L35893` → after: `L35569-L35571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35569-L35571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35569-L35571) · [Before (L35891-L35893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35891-L35893)

```diff
-                 time: (0, yp.l)(Ip, cp),
-                 dataPoints: (0, yp.j)(Op, ip, Sp),
-                 catmullRom: !!(0, yp.h)(Op) && (0, yp.p)(Op, Sp),
+                 time: (0, BT.v)(MT, mT),
+                 dataPoints: (0, BT.t)(WT, UT, gT),
+                 catmullRom: !!(0, BT.p)(WT) && (0, BT.z)(WT, gT),
```

#### 4335. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35899-L35900` → after: `L35577-L35578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35577-L35578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35577-L35578) · [Before (L35899-L35900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35899-L35900)

```diff
-         if (0 === op.length) throw new yp.d(`${cp} has no keyframes`);
-         if (this.keyframeCount += op.length, this.keyframeCount > 2e4) throw new yp.d("the file has over 20000 keyframes");
+         if (0 === zT.length) throw new BT.e(`${mT} has no keyframes`);
+         if (this.keyframeCount += zT.length, this.keyframeCount > 2e4) throw new BT.e("the file has over 20000 keyframes");
```

#### 4336. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35903-L35904` → after: `L35581-L35582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35581-L35582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35581-L35582) · [Before (L35903-L35904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35903-L35904)

```diff
-           if (op[Ip].time - op[Ip - 1].time < Op.k) throw new yp.d(`${cp} has two keyframes at ${op[Ip].time}s`);
-         return (0, yp.g)(op), {
+           if (zT[MT].time - zT[MT - 1].time < WT.o) throw new BT.e(`${mT} has two keyframes at ${zT[MT].time}s`);
+         return (0, BT.l)(zT), {
```

#### 4337. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35930` → after: `L35608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35608) · [Before (L35930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35930)

```diff
-         return null !== (cp = Op.constant) && void 0 !== cp ? cp : Op
+         return null !== (mT = WT.constant) && void 0 !== mT ? mT : WT
```

#### 4338. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35933-L35937` → after: `L35611-L35615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35611-L35615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35611-L35615) · [Before (L35933-L35937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35933-L35937)

```diff
-         if ("number" === typeof pp) return (0, Up.n)(qp(pp, ip));
-         if ("string" !== typeof pp) throw new yp.d(`${ip}: expected a number or a Molang string`);
-         if (this.molangChars += pp.length, this.molangChars > 65536) throw new yp.d("the file has over 65536 characters of Molang");
-         if (!this.variables.reserve(pp)) throw new yp.d(`${ip}: the pack reads too many different variables`);
-         const cp = (0, Up.l)(pp, {
+         if ("number" === typeof TT) return (0, ZT.j)(xT(TT, UT));
+         if ("string" !== typeof TT) throw new BT.e(`${UT}: expected a number or a Molang string`);
+         if (this.molangChars += TT.length, this.molangChars > 65536) throw new BT.e("the file has over 65536 characters of Molang");
+         if (!this.variables.reserve(TT)) throw new BT.e(`${UT}: the pack reads too many different variables`);
+         const mT = (0, ZT.h)(TT, {
```

#### 4339. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35940-L35941` → after: `L35618-L35619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35618-L35619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35618-L35619) · [Before (L35940-L35941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35940-L35941)

```diff
-         if (!cp.ok) throw new yp.d(`${ip}: ${cp.error}`);
-         return null === cp.value.constant ? cp.value : (0, Up.n)(qp(cp.value.constant, ip))
+         if (!mT.ok) throw new BT.e(`${UT}: ${mT.error}`);
+         return null === mT.value.constant ? mT.value : (0, ZT.j)(xT(mT.value.constant, UT))
```

#### 4340. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35946` → after: `L35624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35624) · [Before (L35946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35946)

```diff
-         if (null === cp || cp < 0 || cp > yp.e) throw new yp.d(`${ip} must be a constant number of seconds from 0 to ${yp.e}`);
+         if (null === mT || mT < 0 || mT > BT.i) throw new BT.e(`${UT} must be a constant number of seconds from 0 to ${BT.i}`);
```

#### 4341. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35959` → after: `L35637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35637) · [Before (L35959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35959)

```diff
-       if (!Number.isFinite(pp) || Math.abs(pp) > tp) throw new yp.d(`${ip}: ${pp} is not a finite number within \xb11000000`);
+       if (!Number.isFinite(TT) || Math.abs(TT) > fT) throw new BT.e(`${UT}: ${TT} is not a finite number within \xb11000000`);
```

#### 4342. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35964-L35967` → after: `L35642-L35645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35642-L35645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35642-L35645) · [Before (L35964-L35967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35964-L35967)

```diff
-       if (void 0 === pp || !1 === pp) return Op.g.Once;
-       if (!0 === pp) return Op.g.Loop;
-       if ("hold_on_last_frame" === pp) return Op.g.Hold;
-       throw new yp.d(`loop ${JSON.stringify(pp)} is not supported (true, false or "hold_on_last_frame")`)
+       if (void 0 === TT || !1 === TT) return WT.l.Once;
+       if (!0 === TT) return WT.l.Loop;
+       if ("hold_on_last_frame" === TT) return WT.l.Hold;
+       throw new BT.e(`loop ${JSON.stringify(TT)} is not supported (true, false or "hold_on_last_frame")`)
```

#### 4343. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35981` → after: `L35659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35659) · [Before (L35981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35981)

```diff
-                 severity: Op.b.Error,
+                 severity: WT.d.Error,
```

#### 4344. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35983` → after: `L35661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35661) · [Before (L35983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35983)

```diff
-                 message: `${op.id} is already defined by another file; the first definition is kept`
+                 message: `${zT.id} is already defined by another file; the first definition is kept`
```

#### 4345. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L35995` → after: `L35673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35673) · [Before (L35995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L35995)

```diff
-         return null !== (ip = null !== (cp = this.byId.get(pp)) && void 0 !== cp ? cp : this.byShortName.get(pp)) && void 0 !== ip ? ip : null
+         return null !== (UT = null !== (mT = this.byId.get(TT)) && void 0 !== mT ? mT : this.byShortName.get(TT)) && void 0 !== UT ? UT : null
```

#### 4346. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36018` → after: `L35696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35696) · [Before (L36018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36018)

```diff
-   37617: (pp, ip, cp) => {
+   37501: (TT, UT, mT) => {
```

#### 4347. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36020-L36022` → after: `L35698-L35700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35698-L35700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35698-L35700) · [Before (L36020-L36022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36020-L36022)

```diff
-       b: () => Dp,
-       d: () => Ip,
-       f: () => Sp
+       c: () => jT,
+       g: () => MT,
+       h: () => gT
```

#### 4348. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36024` → after: `L35702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35702) · [Before (L36024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36024)

```diff
-     var Op = cp(37575);
+     var WT = mT(37465);
```

#### 4349. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36033` → after: `L35711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35711) · [Before (L36033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36033)

```diff
-         case Op.g.Once:
+         case WT.l.Once:
```

#### 4350. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36035` → after: `L35713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35713) · [Before (L36035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36035)

```diff
-         case Op.g.Hold:
+         case WT.l.Hold:
```

#### 4351. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36037` → after: `L35715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35715) · [Before (L36037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36037)

```diff
-         case Op.g.Loop: {
+         case WT.l.Loop: {
```

#### 4352. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36060` → after: `L35738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35738) · [Before (L36060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36060)

```diff
-       if (null !== Pp && Math.abs(Pp.time - ip) < Op.k ? yp = Pp : null !== Wp && Math.abs(Wp.time - ip) < Op.k ? yp = Wp : null === Pp || !Pp.step && null !== Wp ? null !== Wp && null === Pp && (yp = Wp) : yp = Pp, null !== yp) return void Yp(yp, ip, op, Ip);
+       if (null !== LT && Math.abs(LT.time - UT) < WT.o ? BT = LT : null !== pT && Math.abs(pT.time - UT) < WT.o ? BT = pT : null === LT || !LT.step && null !== pT ? null !== pT && null === LT && (BT = pT) : BT = LT, null !== BT) return void kT(BT, UT, zT, MT);
```

#### 4353. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36084` → after: `L35762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35762) · [Before (L36084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36084)

```diff
-           Sp = pp[0 === op ? op : op - 1],
+           gT = TT[0 === zT ? zT : zT - 1],
```

#### 4354. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36098` → after: `L35776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35776) · [Before (L36098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36098)

```diff
-       }(pp.time > ip || Math.abs(pp.time - ip) < Op.k ? pp.pre : pp.post, cp, op)
+       }(TT.time > UT || Math.abs(TT.time - UT) < WT.o ? TT.pre : TT.post, mT, zT)
```

#### 4355. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36102` → after: `L35780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35780) · [Before (L36102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36102)

```diff
-       return "number" === typeof pp ? pp : pp.evaluate(ip)
+       return "number" === typeof TT ? TT : TT.evaluate(UT)
```

#### 4356. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36105` → after: `L35783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35783) · [Before (L36105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36105)

```diff
-   37575: (pp, ip, cp) => {
+   37465: (TT, UT, mT) => {
```

#### 4357. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36107-L36110` → after: `L35785-L35788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35785-L35788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35785-L35788) · [Before (L36107-L36110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36107-L36110)

```diff
-       b: () => Sp,
-       c: () => op,
-       g: () => Ip,
-       k: () => Op
+       d: () => gT,
+       h: () => zT,
+       l: () => MT,
+       o: () => WT
```

#### 4358. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36123` → after: `L35801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35801) · [Before (L36123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36123)

```diff
-   37593: (pp, ip, cp) => {
+   37479: (TT, UT, mT) => {
```

#### 4359. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36128` → after: `L35804-L35806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35804-L35806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35804-L35806) · [Before (L36128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36128)

```diff
-       f: () => Ap
+       g: () => WT,
+       i: () => ZT,
+       j: () => lT
```

#### 4360. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36143` → after: `L35821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35821) · [Before (L36143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36143)

```diff
-         ip = yp(pp.blendWeight) + (null !== (cp = null === (Op = pp.animTimeUpdate) || void 0 === Op ? void 0 : Op.cost) && void 0 !== cp ? cp : 0);
+         UT = BT(TT.blendWeight) + (null !== (mT = null === (WT = TT.animTimeUpdate) || void 0 === WT ? void 0 : WT.cost) && void 0 !== mT ? mT : 0);
```

#### 4361. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36157` → after: `L35835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35835) · [Before (L36157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36157)

```diff
-       return cp && Op > 1 ? Sp + op + (Op >= 3 ? Lp : Op) * ip : Ip + op + Math.min(xp, Op) * ip
+       return mT && WT > 1 ? gT + zT + (WT >= 3 ? HT : WT) * UT : MT + zT + Math.min(nT, WT) * UT
```

#### 4362. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36188` → after: `L35866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35866) · [Before (L36188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36188)

```diff
-   37602: (pp, ip, cp) => {
+   37486: (TT, UT, mT) => {
```

#### 4363. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36190-L36191` → after: `L35868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35868) · [Before (L36190-L36191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36190-L36191)

```diff
-       c: () => Sp,
-       g: () => Ip,
+       e: () => gT,
```

#### 4364. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36193-L36194` → after: `L35870-L35872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35870-L35872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35870-L35872) · [Before (L36193-L36194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36193-L36194)

```diff
-       i: () => Yp,
-       l: () => Lp
+       l: () => zT,
+       n: () => kT,
+       q: () => HT
```

#### 4365. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36196` → after: `L35874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35874) · [Before (L36196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36196)

```diff
-     var Op = cp(37580);
+     var WT = mT(37468);
```

#### 4366. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36218` → after: `L35896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35896) · [Before (L36218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36218)

```diff
-       Lp[Op.h.LifeTime] = cp, Lp[Op.h.DeltaTime] = Ip, Lp[Op.h.GroundSpeed] = ip[op.GroundSpeed], Lp[Op.h.ModifiedMoveSpeed] = ip[op.GroundSpeed], Lp[Op.h.ModifiedDistanceMoved] = Sp, Lp[Op.h.VerticalSpeed] = ip[op.VerticalSpeed], Lp[Op.h.IsOnGround] = ip[op.OnGround], Lp[Op.h.Is … [truncated]
+       HT[WT.d.LifeTime] = mT, HT[WT.d.DeltaTime] = MT, HT[WT.d.GroundSpeed] = UT[zT.GroundSpeed], HT[WT.d.ModifiedMoveSpeed] = UT[zT.GroundSpeed], HT[WT.d.ModifiedDistanceMoved] = gT, HT[WT.d.VerticalSpeed] = UT[zT.VerticalSpeed], HT[WT.d.IsOnGround] = UT[zT.OnGround], HT[WT.d.Is … [truncated]
```

#### 4367. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36227` → after: `L35905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35905) · [Before (L36227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36227)

```diff
-   37376: (pp, ip, cp) => {
+   37246: (TT, UT, mT) => {
```

#### 4368. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36229` → after: `L35907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35907) · [Before (L36229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36229)

```diff
-       b: () => Op,
+       c: () => WT,
```

#### 4369. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36231` → after: `L35909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35909) · [Before (L36231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36231)

```diff
-       h: () => Dp,
+       j: () => jT,
```

#### 4370. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36233-L36234` → after: `L35911-L35912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35911-L35912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35911-L35912) · [Before (L36233-L36234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36233-L36234)

```diff
-       n: () => Ip,
-       o: () => Ap
+       m: () => MT,
+       n: () => lT
```

#### 4371. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36288` → after: `L35966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35966) · [Before (L36288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36288)

```diff
-   37561: (pp, ip, cp) => {
+   37449: (TT, UT, mT) => {
```

#### 4372. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36295-L36297` → after: `L35974-L35975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35974-L35975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35974-L35975) · [Before (L36295-L36297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36295-L36297)

```diff
-       n: () => sp,
-       q: () => Fp,
-       t: () => rp
+       m: () => KT,
+       q: () => NT
```

#### 4373. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36299-L36303` → after: `L35977-L35981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35977-L35981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35977-L35981) · [Before (L36299-L36303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36299-L36303)

```diff
-     var Op = cp(636),
-       op = cp(629),
-       Ip = cp(37271),
-       Sp = cp(37566),
-       xp = cp(37568);
+     var WT = mT(649),
+       zT = mT(643),
+       MT = mT(37152),
+       gT = mT(37453),
+       nT = mT(37461);
```

#### 4374. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36318-L36320` → after: `L35996-L35998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R35996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L35996-L35998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L35996-L35998) · [Before (L36318-L36320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36318-L36320)

```diff
-       if (void 0 === pp || "add" === pp) return Sp.l.Add;
-       if ("override" === pp) return Sp.l.Override;
-       throw new Lp(`${ip} must be "add" or "override"`)
+       if (void 0 === TT || "add" === TT) return gT.j.Add;
+       if ("override" === TT) return gT.j.Override;
+       throw new HT(`${UT} must be "add" or "override"`)
```

#### 4375. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36325` → after: `L36003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36003) · [Before (L36325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36325)

```diff
-       if (!Array.isArray(pp) || 0 === pp.length || pp.length > 128) throw new Lp(`${ip} must list 1-128 bone names`);
+       if (!Array.isArray(TT) || 0 === TT.length || TT.length > 128) throw new HT(`${UT} must list 1-128 bone names`);
```

#### 4376. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36327` → after: `L36005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36005) · [Before (L36327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36327)

```diff
-         if ("string" !== typeof cp || 0 === cp.length || cp.length > 128) throw new Lp(`${ip} must list bone names`);
+         if ("string" !== typeof mT || 0 === mT.length || mT.length > 128) throw new HT(`${UT} must list bone names`);
```

#### 4377. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36333` → after: `L36011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36011) · [Before (L36333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36333)

```diff
-       if ("number" !== typeof pp || !Number.isFinite(pp) || pp < cp || pp > Op) throw new Lp(`${op} must be a number from ${cp} to ${Op}`);
+       if ("number" !== typeof TT || !Number.isFinite(TT) || TT < mT || TT > WT) throw new HT(`${zT} must be a number from ${mT} to ${WT}`);
```

#### 4378. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36338` → after: `L36016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36016) · [Before (L36338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36338)

```diff
-       if (!(0, xp.h)(pp)) throw new Lp(`${ip} must be an object`);
+       if (!(0, nT.p)(TT)) throw new HT(`${UT} must be an object`);
```

#### 4379. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36344` → after: `L36022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36022) · [Before (L36344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36344)

```diff
-         if (!ip.includes(Op)) throw new Lp(`${cp}: unknown key "${Op}"`)
+         if (!UT.includes(WT)) throw new HT(`${mT}: unknown key "${WT}"`)
```

#### 4380. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36346-L36349` → after: `L36024-L36027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36024-L36027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36024-L36027) · [Before (L36346-L36349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36346-L36349)

```diff
-     var wp = cp(37589),
-       vp = cp(37593),
-       tp = cp(37575),
-       Hp = cp(37602);
+     var cT = mT(37474),
+       vT = mT(37479),
+       fT = mT(37465),
+       qT = mT(37486);
```

#### 4381. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36359` → after: `L36037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36037) · [Before (L36359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36359)

```diff
-           severity: tp.b.Error,
+           severity: fT.d.Error,
```

#### 4382. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36364` → after: `L36042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36042) · [Before (L36364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36364)

```diff
-       if (pp.length > dp) return Op(`file is ${pp.length} characters, over the ${dp} limit`);
+       if (TT.length > iT) return WT(`file is ${TT.length} characters, over the ${iT} limit`);
```

#### 4383. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36369` → after: `L36047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36047) · [Before (L36369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36369)

```diff
-         return Op(`invalid JSON: ${Ip.message}`)
+         return WT(`invalid JSON: ${MT.message}`)
```

#### 4384. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36386` → after: `L36064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36064) · [Before (L36386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36386)

```diff
-         return (0, xp.h)(ip) && "string" === typeof ip.target ? ip.target : null
+         return (0, nT.p)(UT) && "string" === typeof UT.target ? UT.target : null
```

#### 4385. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36394` → after: `L36072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36072) · [Before (L36394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36394)

```diff
-         for (const [cp, Op] of Hp.g) this.inputIndexByName.set(cp, Op)
+         for (const [mT, WT] of qT.h) this.inputIndexByName.set(mT, WT)
```

#### 4386. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36398` → after: `L36076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36076) · [Before (L36398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36398)

```diff
-         if (Up(ip, ["format_version", "target", "inputs", "variables", "layers", "actions"], "the file"), ip.format_version !== Sp.e) throw new Lp(`format_version must be "${Sp.e}"`);
+         if (ZT(UT, ["format_version", "target", "inputs", "variables", "layers", "actions"], "the file"), UT.format_version !== gT.d) throw new HT(`format_version must be "${gT.d}"`);
```

#### 4387. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36410-L36411` → after: `L36088-L36089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36088-L36089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36088-L36089) · [Before (L36410-L36411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36410-L36411)

```diff
-             const cp = this.compileLayer(pp, `layers[${ip}]`);
-             if (Yp.has(cp.name)) throw new Lp(`two layers are named "${cp.name}"`);
+             const mT = this.compileLayer(TT, `layers[${UT}]`);
+             if (kT.has(mT.name)) throw new HT(`two layers are named "${mT.name}"`);
```

#### 4388. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36424-L36425` → after: `L36102-L36103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36102-L36103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36102-L36103) · [Before (L36424-L36425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36424-L36425)

```diff
-           Pp = (0, vp.e)(Ap);
-         if (Pp > vp.b) throw new Lp(`its layers cost ${Pp} to play each frame, over the ${vp.b} limit: use fewer layers or lighter clips`);
+           LT = (0, vT.i)(lT);
+         if (LT > vT.e) throw new HT(`its layers cost ${LT} to play each frame, over the ${vT.e} limit: use fewer layers or lighter clips`);
```

#### 4389. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36433-L36434` → after: `L36111-L36112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36111-L36112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36111-L36112) · [Before (L36433-L36434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36433-L36434)

```diff
-           const Op = `inputs.${pp}`;
-           if (!kp.test(pp) || this.inputIndexByName.has(pp)) throw new Lp(`${Op}: input names must be identifiers distinct from the engine inputs`);
+           const WT = `inputs.${TT}`;
+           if (!eT.test(TT) || this.inputIndexByName.has(TT)) throw new HT(`${WT}: input names must be identifiers distinct from the engine inputs`);
```

#### 4390. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36437` → after: `L36115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36115) · [Before (L36437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36437)

```diff
-           const Ip = Wp(op.rise, 0, 0, 1e3, `${Op}.rise`),
+           const MT = pT(zT.rise, 0, 0, 1e3, `${WT}.rise`),
```

#### 4391. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36440-L36445` → after: `L36118-L36123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36118-L36123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36118-L36123) · [Before (L36440-L36445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36440-L36445)

```diff
-               from: this.engineInput(op.from, `${Op}.from`),
-               gate: void 0 === op.gate ? -1 : this.engineInput(op.gate, `${Op}.gate`),
-               scale: Wp(op.scale, 1, -1e6, ep, `${Op}.scale`),
-               offset: Wp(op.offset, 0, -1e6, ep, `${Op}.offset`),
-               min: Wp(op.min, -1e6, -1e6, ep, `${Op}.min`),
-               max: Wp(op.max, ep, -1e6, ep, `${Op}.max`),
+               from: this.engineInput(zT.from, `${WT}.from`),
+               gate: void 0 === zT.gate ? -1 : this.engineInput(zT.gate, `${WT}.gate`),
+               scale: pT(zT.scale, 1, -1e6, bT, `${WT}.scale`),
+               offset: pT(zT.offset, 0, -1e6, bT, `${WT}.offset`),
+               min: pT(zT.min, -1e6, -1e6, bT, `${WT}.min`),
+               max: pT(zT.max, bT, -1e6, bT, `${WT}.max`),
```

#### 4392. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36447` → after: `L36125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36125) · [Before (L36447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36447)

```diff
-               fall: Wp(op.fall, Ip, 0, 1e3, `${Op}.fall`)
+               fall: pT(zT.fall, MT, 0, 1e3, `${WT}.fall`)
```

#### 4393. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36449-L36450` → after: `L36127-L36128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36127-L36128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36127-L36128) · [Before (L36449-L36450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36449-L36450)

```diff
-           if (Sp.min > Sp.max) throw new Lp(`${Op}: min is above max`);
-           return this.inputIndexByName.set(pp, Hp.h.Count + cp), Sp
+           if (gT.min > gT.max) throw new HT(`${WT}: min is above max`);
+           return this.inputIndexByName.set(TT, qT.l.Count + mT), gT
```

#### 4394. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36461` → after: `L36139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36139) · [Before (L36461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36461)

```diff
-           if (!kp.test(Sp)) throw new Lp(`variables.${Sp}: variable names must be identifiers`);
+           if (!eT.test(gT)) throw new HT(`variables.${gT}: variable names must be identifiers`);
```

#### 4395. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36463` → after: `L36141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36141) · [Before (L36463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36463)

```diff
-           if (Ip.has(pp)) throw new Lp(`variables.${Sp}: another variable has this name in a different case`);
+           if (MT.has(TT)) throw new HT(`variables.${gT}: another variable has this name in a different case`);
```

#### 4396. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36469` → after: `L36147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36147) · [Before (L36469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36469)

```diff
-               value: Wp(cp, 0, -1e6, ep, `variables.${Sp}`)
+               value: pT(mT, 0, -1e6, bT, `variables.${gT}`)
```

#### 4397. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36474` → after: `L36152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36152) · [Before (L36474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36474)

```diff
-           if (void 0 === xp) throw new Lp(`variables.${Sp} must be a number or name an engine input or one of the binding's inputs`);
+           if (void 0 === nT) throw new HT(`variables.${gT} must be a number or name an engine input or one of the binding's inputs`);
```

#### 4398. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36489-L36490` → after: `L36167-L36168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36167-L36168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36167-L36168) · [Before (L36489-L36490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36489-L36490)

```diff
-         if ("string" !== typeof Op || !kp.test(Op)) throw new Lp(`${ip}.name must be an identifier`);
-         ip = `layer "${Op}"`;
+         if ("string" !== typeof WT || !eT.test(WT)) throw new HT(`${UT}.name must be an identifier`);
+         UT = `layer "${WT}"`;
```

#### 4399. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36495-L36496` → after: `L36173-L36174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36173-L36174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36173-L36174) · [Before (L36495-L36496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36495-L36496)

```diff
-           if (jp.some((pp => void 0 !== cp[pp]))) throw new Lp(`${ip}: use either "states" or a single "clip"/"blend", not both`);
-           this.compileStates(yp(cp.states, `${ip}.states`), ip, op), Ip = null !== (xp = op.get(Sp.h)) && void 0 !== xp ? xp : null, op.delete(Sp.h)
+           if (OT.some((TT => void 0 !== mT[TT]))) throw new HT(`${UT}: use either "states" or a single "clip"/"blend", not both`);
+           this.compileStates(BT(mT.states, `${UT}.states`), UT, zT), MT = null !== (nT = zT.get(gT.f)) && void 0 !== nT ? nT : null, zT.delete(gT.f)
```

#### 4400. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36503-L36506` → after: `L36181-L36184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36181-L36184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36181-L36184) · [Before (L36503-L36506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36503-L36506)

```diff
-           mode: Ap(cp.mode, `${ip}.mode`),
-           bones: Pp(cp.bones, `${ip}.bones`),
-           weight: void 0 === cp.weight ? Yp(1) : this.valueSource(cp.weight, `${ip}.weight`),
-           transitionSeconds: Wp(cp.transition, .2, 0, 10, `${ip}.transition`),
+           mode: lT(mT.mode, `${UT}.mode`),
+           bones: LT(mT.bones, `${UT}.bones`),
+           weight: void 0 === mT.weight ? kT(1) : this.valueSource(mT.weight, `${UT}.weight`),
+           transitionSeconds: pT(mT.transition, .2, 0, 10, `${UT}.transition`),
```

#### 4401. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36513` → after: `L36191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36191) · [Before (L36513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36513)

```diff
-         if (0 === Op.length || Op.length > 64) throw new Lp(`${ip}.states must list 1-64 states`);
+         if (0 === WT.length || WT.length > 64) throw new HT(`${UT}.states must list 1-64 states`);
```

#### 4402. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36515` → after: `L36193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36193) · [Before (L36515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36515)

```diff
-           if (xp !== Sp.h && !this.options.stateNames.has(xp)) throw new Lp(`${ip}: "${xp}" is not a state of this target`);
+           if (nT !== gT.f && !this.options.stateNames.has(nT)) throw new HT(`${UT}: "${nT}" is not a state of this target`);
```

#### 4403. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36522-L36523` → after: `L36200-L36201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36200-L36201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36200-L36201) · [Before (L36522-L36523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36522-L36523)

```diff
-               if (!Object.prototype.hasOwnProperty.call(pp, xp)) throw new Lp(`${ip}: "${Op}" shares "${xp}", which the layer does not define`);
-               if (op.has(Op)) throw new Lp(`${ip}: "${Op}" shares itself through a cycle`);
+               if (!Object.prototype.hasOwnProperty.call(TT, nT)) throw new HT(`${UT}: "${WT}" shares "${nT}", which the layer does not define`);
+               if (zT.has(WT)) throw new HT(`${UT}: "${WT}" shares itself through a cycle`);
```

#### 4404. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36528` → after: `L36206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36206) · [Before (L36528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36528)

```diff
-             const Yp = this.compileState(xp, Op, `${ip} state "${Op}"`);
+             const kT = this.compileState(nT, WT, `${UT} state "${WT}"`);
```

#### 4405. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36536-L36537` → after: `L36214-L36215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36214-L36215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36214-L36215) · [Before (L36536-L36537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36536-L36537)

```diff
-         const op = void 0 === Op.rate ? Yp(1) : this.valueSource(Op.rate, `${cp}.rate`);
-         if (op.input < 0 && op.constant < 0) throw new Lp(`${cp}.rate must not be negative`);
+         const zT = void 0 === WT.rate ? kT(1) : this.valueSource(WT.rate, `${mT}.rate`);
+         if (zT.input < 0 && zT.constant < 0) throw new HT(`${mT}.rate must not be negative`);
```

#### 4406. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36542` → after: `L36220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36220) · [Before (L36542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36542)

```diff
-             if (Op > 32 || Math.abs(cp - 1 / Op) > 5e-4) throw new Lp(`${ip} must divide a cycle evenly into at most 32 parts (1, 0.5, 0.333, 0.25, ...)`);
+             if (WT > 32 || Math.abs(mT - 1 / WT) > 5e-4) throw new HT(`${UT} must divide a cycle evenly into at most 32 parts (1, 0.5, 0.333, 0.25, ...)`);
```

#### 4407. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36544` → after: `L36222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36222) · [Before (L36544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36544)

```diff
-           }(Op.rest, `${cp}.rest`),
+           }(WT.rest, `${mT}.rest`),
```

#### 4408. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36546` → after: `L36224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36224) · [Before (L36546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36546)

```diff
-             if (Ip > 0 && !pp.some((pp => pp.strideBlocks > 0))) throw new Lp(`${cp}.rest needs a clip with a stride, as only a gait comes to rest`);
+             if (MT > 0 && !TT.some((TT => TT.strideBlocks > 0))) throw new HT(`${mT}.rest needs a clip with a stride, as only a gait comes to rest`);
```

#### 4409. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36550` → after: `L36228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36228) · [Before (L36550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36550)

```diff
-           if (void 0 !== Op.blend) throw new Lp(`${cp}: use either "clip" or "blend"`);
+           if (void 0 !== WT.blend) throw new HT(`${mT}: use either "clip" or "blend"`);
```

#### 4410. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36554` → after: `L36232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36232) · [Before (L36554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36554)

```diff
-               clip: this.clip(Op.clip, `${cp}.clip`),
+               clip: this.clip(WT.clip, `${mT}.clip`),
```

#### 4411. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36556` → after: `L36234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36234) · [Before (L36556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36556)

```diff
-               strideBlocks: Dp(Op.stride, `${cp}.stride`)
+               strideBlocks: jT(WT.stride, `${mT}.stride`)
```

#### 4412. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36563-L36566` → after: `L36241-L36244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36241-L36244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36241-L36244) · [Before (L36563-L36566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36563-L36566)

```diff
-         if (void 0 !== Op.stride) throw new Lp(`${cp}: give each blend clip its own stride`);
-         if (void 0 === Op.blend) throw new Lp(`${cp}: needs a "clip" or a "blend"`);
-         const xp = yp(Op.blend, `${cp}.blend`);
-         Up(xp, ["input", "clips"], `${cp}.blend`);
+         if (void 0 !== WT.stride) throw new HT(`${mT}: give each blend clip its own stride`);
+         if (void 0 === WT.blend) throw new HT(`${mT}: needs a "clip" or a "blend"`);
+         const nT = BT(WT.blend, `${mT}.blend`);
+         ZT(nT, ["input", "clips"], `${mT}.blend`);
```

#### 4413. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36568-L36569` → after: `L36246-L36247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36246-L36247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36246-L36247) · [Before (L36568-L36569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36568-L36569)

```diff
-         if (!Array.isArray(Ap) || 0 === Ap.length || Ap.length > 16) throw new Lp(`${cp}.blend.clips must list 1-16 clips`);
-         const Pp = Ap.map(((pp, ip) => this.compileBlendChild(pp, `${cp}.blend.clips[${ip}]`)));
+         if (!Array.isArray(lT) || 0 === lT.length || lT.length > 16) throw new HT(`${mT}.blend.clips must list 1-16 clips`);
+         const LT = lT.map(((TT, UT) => this.compileBlendChild(TT, `${mT}.blend.clips[${UT}]`)));
```

#### 4414. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36571` → after: `L36249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36249) · [Before (L36571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36571)

```diff
-           if (Pp[Yp].at <= Pp[Yp - 1].at) throw new Lp(`${cp}.blend.clips must be in increasing "at" order`);
+           if (LT[kT].at <= LT[kT - 1].at) throw new HT(`${mT}.blend.clips must be in increasing "at" order`);
```

#### 4415. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36575` → after: `L36253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36253) · [Before (L36575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36575)

```diff
-           blendInput: this.input(xp.input, `${cp}.blend.input`),
+           blendInput: this.input(nT.input, `${mT}.blend.input`),
```

#### 4416. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36586-L36587` → after: `L36264-L36265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36264-L36265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36264-L36265) · [Before (L36586-L36587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36586-L36587)

```diff
-         if (Array.isArray(pp) && (pp.length < 2 || pp.length > 3)) throw new Lp(`${ip} must be [clip, at] or [clip, at, stride]`);
-         if (Up(cp, ["clip", "at", "stride"], ip), "number" !== typeof cp.at) throw new Lp(`${ip}.at must be a number`);
+         if (Array.isArray(TT) && (TT.length < 2 || TT.length > 3)) throw new HT(`${UT} must be [clip, at] or [clip, at, stride]`);
+         if (ZT(mT, ["clip", "at", "stride"], UT), "number" !== typeof mT.at) throw new HT(`${UT}.at must be a number`);
```

#### 4417. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36589-L36591` → after: `L36267-L36269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36267-L36269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36267-L36269) · [Before (L36589-L36591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36589-L36591)

```diff
-           clip: this.clip(cp.clip, `${ip}.clip`),
-           at: Wp(cp.at, 0, -1e6, ep, `${ip}.at`),
-           strideBlocks: Dp(cp.stride, `${ip}.stride`)
+           clip: this.clip(mT.clip, `${UT}.clip`),
+           at: pT(mT.at, 0, -1e6, bT, `${UT}.at`),
+           strideBlocks: jT(mT.stride, `${UT}.stride`)
```

#### 4418. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36600-L36601` → after: `L36278-L36279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36278-L36279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36278-L36279) · [Before (L36600-L36601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36600-L36601)

```diff
-           const pp = `actions.${op}`;
-           if (!kp.test(op)) throw new Lp(`${pp}: action names must be identifiers`);
+           const TT = `actions.${zT}`;
+           if (!eT.test(zT)) throw new HT(`${TT}: action names must be identifiers`);
```

#### 4419. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36604-L36605` → after: `L36282-L36283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36282-L36283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36282-L36283) · [Before (L36604-L36605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36604-L36605)

```diff
-           const Ip = this.clip(cp.clip, `${pp}.clip`);
-           if (Sp.m.has(op) && Ip.clip.loop !== tp.g.Once) throw new Lp(`${pp}: the game plays this action, so its clip must end (not loop or hold on its last frame)`);
+           const MT = this.clip(mT.clip, `${TT}.clip`);
+           if (gT.n.has(zT) && MT.clip.loop !== fT.l.Once) throw new HT(`${TT}: the game plays this action, so its clip must end (not loop or hold on its last frame)`);
```

#### 4420. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36609-L36612` → after: `L36287-L36290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36287-L36290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36287-L36290) · [Before (L36609-L36612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36609-L36612)

```diff
-             mode: void 0 === cp.mode ? Sp.l.Override : Ap(cp.mode, `${pp}.mode`),
-             bones: Pp(cp.bones, `${pp}.bones`),
-             fadeInSeconds: Wp(cp.fadeIn, .1, 0, 10, `${pp}.fadeIn`),
-             fadeOutSeconds: Wp(cp.fadeOut, .1, 0, 10, `${pp}.fadeOut`)
+             mode: void 0 === mT.mode ? gT.j.Override : lT(mT.mode, `${TT}.mode`),
+             bones: LT(mT.bones, `${TT}.bones`),
+             fadeInSeconds: pT(mT.fadeIn, .1, 0, 10, `${TT}.fadeIn`),
+             fadeOutSeconds: pT(mT.fadeOut, .1, 0, 10, `${TT}.fadeOut`)
```

#### 4421. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36618-L36621` → after: `L36296-L36299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36296-L36299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36296-L36299) · [Before (L36618-L36621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36618-L36621)

```diff
-         if ("string" !== typeof pp || 0 === pp.length) throw new Lp(`${ip} must name a clip`);
-         const cp = (0, wp.l)(this.options.pools, pp);
-         if ("ambiguous" === cp) throw new Lp(`${ip}: several clips are called "${pp}"; use the full animation name`);
-         if ("noClip" === cp) throw new Lp(`${ip}: no clip named "${pp}"`);
+         if ("string" !== typeof TT || 0 === TT.length) throw new HT(`${UT} must name a clip`);
+         const mT = (0, cT.h)(this.options.pools, TT);
+         if ("ambiguous" === mT) throw new HT(`${UT}: several clips are called "${TT}"; use the full animation name`);
+         if ("noClip" === mT) throw new HT(`${UT}: no clip named "${TT}"`);
```

#### 4422. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36625-L36626` → after: `L36303-L36304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36303-L36304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36303-L36304) · [Before (L36625-L36626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36625-L36626)

```diff
-         const cp = "string" === typeof pp ? Hp.g.get(pp) : void 0;
-         if (void 0 === cp) throw new Lp(`${ip} must be one of ${[...Hp.g.keys()].join(", ")}`);
+         const mT = "string" === typeof TT ? qT.h.get(TT) : void 0;
+         if (void 0 === mT) throw new HT(`${UT} must be one of ${[...qT.h.keys()].join(", ")}`);
```

#### 4423. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36631` → after: `L36309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36309) · [Before (L36631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36631)

```diff
-         if (void 0 === cp) throw new Lp(`${ip} must name an engine input or one of the binding's inputs`);
+         if (void 0 === mT) throw new HT(`${UT} must name an engine input or one of the binding's inputs`);
```

#### 4424. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36645` → after: `L36323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36323) · [Before (L36645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36645)

```diff
-     var Cp = cp(37608);
+     var wT = mT(37495);
```

#### 4425. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36652` → after: `L36330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36330) · [Before (L36652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36652)

```diff
-       Np = new Set([...Op.k, ...op.n, Bp]),
+       sT = new Set([...WT.l, ...zT.l, QT]),
```

#### 4426. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36656-L36657` → after: `L36334-L36335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36334-L36335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36334-L36335) · [Before (L36656-L36657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36656-L36657)

```diff
-       hp = new Set(Ip.d),
-       ap = new Set([...Op.o.filter((pp => !Jp.has(pp))), ...hp]),
+       uT = new Set(MT.e),
+       CT = new Set([...WT.m.filter((TT => !IT.has(TT))), ...uT]),
```

#### 4427. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36665` → after: `L36343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36343) · [Before (L36665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36665)

```diff
-       return Fp(pp) ? bp : Np
+       return KT(TT) ? VT : sT
```

#### 4428. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36671` → after: `L36349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36349) · [Before (L36671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36671)

```diff
-         Op = cp ? np : ap,
+         WT = mT ? rT : CT,
```

#### 4429. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36675` → after: `L36353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36353) · [Before (L36675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36675)

```diff
-             severity: tp.b.Error,
+             severity: fT.d.Error,
```

#### 4430. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36683-L36684` → after: `L36361-L36362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36361-L36362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36361-L36362) · [Before (L36683-L36684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36683-L36684)

```diff
-       if (!cp && (Sp.length > Ep || xp > Xp)) return Ip("animations", `${Sp.length} files and ${xp} characters, over the ${Ep} file or ${Xp} character limit`), {
-         pool: new wp.e([]),
+       if (!mT && (gT.length > tT || nT > aT)) return MT("animations", `${gT.length} files and ${nT} characters, over the ${tT} file or ${aT} character limit`), {
+         pool: new cT.c([]),
```

#### 4431. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36703` → after: `L36381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36381) · [Before (L36703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36703)

```diff
-           void 0 !== pp && (Dp.has(pp) ? Ip(Up, `${pp} already has a clip file, ${Dp.get(pp).name}`) : Dp.set(pp, {
+           void 0 !== TT && (jT.has(TT) ? MT(ZT, `${TT} already has a clip file, ${jT.get(TT).name}`) : jT.set(TT, {
```

#### 4432. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36709` → after: `L36387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36387) · [Before (L36709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36709)

```diff
-           null === pp ? Ip(Up, 'has no target: set "target" to the mob or vehicle it animates') : Jp.has(pp) && !cp ? Ip(Up, `packs can't animate ${pp}`) : Op.has(pp) ? Yp.has(pp) ? Ip(Up, `${pp} already has a binding, in ${Yp.get(pp).name}`) : Yp.set(pp, {
+           null === TT ? MT(ZT, 'has no target: set "target" to the mob or vehicle it animates') : IT.has(TT) && !mT ? MT(ZT, `packs can't animate ${TT}`) : WT.has(TT) ? kT.has(TT) ? MT(ZT, `${TT} already has a binding, in ${kT.get(TT).name}`) : kT.set(TT, {
```

#### 4433. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36712` → after: `L36390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36390) · [Before (L36712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36712)

```diff
-           }) : Ip(Up, `${pp} isn't a mob or vehicle packs can animate`)
+           }) : MT(ZT, `${TT} isn't a mob or vehicle packs can animate`)
```

#### 4434. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36721` → after: `L36399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36399) · [Before (L36721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36721)

```diff
-         Wp = new wp.e(Lp, (pp => Pp.has(pp)));
+         pT = new cT.c(HT, (TT => LT.has(TT)));
```

#### 4435. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36726` → after: `L36404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36404) · [Before (L36726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36726)

```diff
-         pool: new wp.e([vp])
+         pool: new cT.c([vT])
```

#### 4436. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36766` → after: `L36444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36444) · [Before (L36766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36766)

```diff
-         diagnostics: [Kp(op.file, `${cp} has no built-in animation to play these clips: add a binding for it`)]
+         diagnostics: [oT(zT.file, `${mT} has no built-in animation to play these clips: add a binding for it`)]
```

#### 4437. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36768` → after: `L36446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36446) · [Before (L36768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36768)

```diff
-       const xp = mp(Sp.text, `${op.file} in the built-in ${cp} animation`, {
+       const nT = YT(gT.text, `${zT.file} in the built-in ${mT} animation`, {
```

#### 4438. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36784` → after: `L36462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36462) · [Before (L36784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36784)

```diff
-           return (0, wp.h)(ip.id)
+           return (0, cT.e)(UT.id)
```

#### 4439. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36788` → after: `L36466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36466) · [Before (L36788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36788)

```diff
-           diagnostics: [...xp.diagnostics, Kp(op.file, `none of its clips replaces one the ${cp} plays (${[...pp].join(", ")}): they play only by name`)]
+           diagnostics: [...nT.diagnostics, oT(zT.file, `none of its clips replaces one the ${mT} plays (${[...TT].join(", ")}): they play only by name`)]
```

#### 4440. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36796` → after: `L36474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36474) · [Before (L36796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36796)

```diff
-         severity: tp.b.Warning,
+         severity: fT.d.Warning,
```

#### 4441. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36802` → after: `L36480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36480) · [Before (L36802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36802)

```diff
-   37608: (pp, ip, cp) => {
+   37495: (TT, UT, mT) => {
```

#### 4442. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36804` → after: `L36482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36482) · [Before (L36804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36804)

```diff
-       d: () => op,
+       b: () => zT,
```

#### 4443. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36806` → after: `L36484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36484) · [Before (L36806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36806)

```diff
-       h: () => Ip
+       g: () => MT
```

#### 4444. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36808` → after: `L36486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36486) · [Before (L36808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36808)

```diff
-     var Op = cp(37575);
+     var WT = mT(37465);
```

#### 4445. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36813` → after: `L36491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36491) · [Before (L36813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36813)

```diff
-           return this.mask(pp.bones, `layer "${pp.name}"`)
+           return this.mask(TT.bones, `layer "${TT.name}"`)
```

#### 4446. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36816` → after: `L36494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36494) · [Before (L36816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36816)

```diff
-         for (const Op of pp.actions.values()) this.boneIndices(Op.clip.clip), cp.set(Op.name, this.mask(Op.bones, `action "${Op.name}"`));
+         for (const WT of TT.actions.values()) this.boneIndices(WT.clip.clip), mT.set(WT.name, this.mask(WT.bones, `action "${WT.name}"`));
```

#### 4447. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36831` → after: `L36509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36509) · [Before (L36831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36831)

```diff
-           this.animatesRig ||= pp.bones.some((pp => this.rig.namesBone(pp.name))), cp.length > 0 && this.warn(`${pp.id} animates bones ${this.rig.id} does not have: ${cp.map((pp=>pp.name)).join(", ")}`), this.boneIndicesByClip.set(pp, ip)
+           this.animatesRig ||= TT.bones.some((TT => this.rig.namesBone(TT.name))), mT.length > 0 && this.warn(`${TT.id} animates bones ${this.rig.id} does not have: ${mT.map((TT=>TT.name)).join(", ")}`), this.boneIndicesByClip.set(TT, UT)
```

#### 4448. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36840` → after: `L36518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36518) · [Before (L36840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36840)

```diff
-           pp < 0 ? (this.missing.add(Op), this.warn(`${ip} masks bone ${Op}, which ${this.rig.id} does not have`)) : cp[pp] = 1
+           TT < 0 ? (this.missing.add(WT), this.warn(`${UT} masks bone ${WT}, which ${this.rig.id} does not have`)) : mT[TT] = 1
```

#### 4449. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36846` → after: `L36524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36524) · [Before (L36846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36846)

```diff
-           severity: Op.b.Warning,
+           severity: WT.d.Warning,
```

#### 4450. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36879` → after: `L36557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36557) · [Before (L36879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36879)

```diff
-         for (const pp of null !== (ip = null === cp || void 0 === cp ? void 0 : cp.children) && void 0 !== ip ? ip : []) {
+         for (const TT of null !== (UT = null === mT || void 0 === mT ? void 0 : mT.children) && void 0 !== UT ? UT : []) {
```

#### 4451. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36885` → after: `L36563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36563) · [Before (L36885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36885)

```diff
-   37568: (pp, ip, cp) => {
+   37461: (TT, UT, mT) => {
```

#### 4452. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36889-L36891` → after: `L36566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36566) · [Before (L36889-L36891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36889-L36891)

```diff
-       g: () => ep,
-       h: () => kp,
-       j: () => tp,
+       i: () => BT,
```

#### 4453. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36893` → after: `L36568-L36571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36568-L36571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36568-L36571) · [Before (L36893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36893)

```diff
-       p: () => vp
+       p: () => eT,
+       t: () => fT,
+       v: () => cT,
+       z: () => vT
```

#### 4454. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36895-L36896` → after: `L36573-L36574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36573-L36574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36573-L36574) · [Before (L36895-L36896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36895-L36896)

```diff
-     var Op = cp(37575),
-       op = cp(37580);
+     var WT = mT(37465),
+       zT = mT(37468);
```

#### 4455. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36902` → after: `L36580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36580) · [Before (L36902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36902)

```diff
-       return "" === pp || "0" === pp || pp.length > op.e ? pp : Ip.test(pp) ? (-parseFloat(pp)).toString() : function(pp, ip) {
+       return "" === TT || "0" === TT || TT.length > zT.c ? TT : MT.test(TT) ? (-parseFloat(TT)).toString() : function(TT, UT) {
```

#### 4456. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36923` → after: `L36601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36601) · [Before (L36923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36923)

```diff
-         if (-1 === Op) return pp.includes("=") ? `${pp};${ip("")}` : ip(pp);
+         if (-1 === WT) return TT.includes("=") ? `${TT};${UT("")}` : UT(TT);
```

#### 4457. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36926` → after: `L36604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36604) · [Before (L36926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36926)

```diff
-         return Ip.includes("=") ? `${pp};${ip("")}` : `${op};${ip(Ip)}`
+         return MT.includes("=") ? `${TT};${UT("")}` : `${zT};${UT(MT)}`
```

#### 4458. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36980` → after: `L36658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36658) · [Before (L36980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36980)

```diff
-       if (!(cp >= 0 && cp <= yp)) throw new Wp(`${ip}: keyframe time "${pp}" must be a number of seconds from 0 to ${yp}`);
+       if (!(mT >= 0 && mT <= BT)) throw new pT(`${UT}: keyframe time "${TT}" must be a number of seconds from 0 to ${BT}`);
```

#### 4459. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36988` → after: `L36666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36666) · [Before (L36988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36988)

```diff
-       throw new Wp(`${ip}: lerp_mode ${JSON.stringify(cp)} is not supported (linear or catmullrom)`)
+       throw new pT(`${UT}: lerp_mode ${JSON.stringify(mT)} is not supported (linear or catmullrom)`)
```

#### 4460. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L36998` → after: `L36676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36676) · [Before (L36998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L36998)

```diff
-         if (op && !Sp && Ip.push(Hp(op, ip, cp)), 0 === Ip.length) throw new Wp(`${cp}: a keyframe needs "post" and optionally "pre"`);
+         if (zT && !gT && MT.push(qT(zT, UT, mT)), 0 === MT.length) throw new pT(`${mT}: a keyframe needs "post" and optionally "pre"`);
```

#### 4461. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37008` → after: `L36686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36686) · [Before (L37008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37008)

```diff
-           case Op.c.Position:
+           case WT.h.Position:
```

#### 4462. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37010` → after: `L36688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36688) · [Before (L37010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37010)

```diff
-           case Op.c.Rotation:
+           case WT.h.Rotation:
```

#### 4463. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37012` → after: `L36690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36690) · [Before (L37012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37012)

```diff
-           case Op.c.Scale:
+           case WT.h.Scale:
```

#### 4464. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37017` → after: `L36695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36695) · [Before (L37017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37017)

```diff
-           if ("number" !== typeof cp && "string" !== typeof cp) throw new Wp(`${ip}: vector elements must be numbers or Molang strings`);
+           if ("number" !== typeof mT && "string" !== typeof mT) throw new pT(`${UT}: vector elements must be numbers or Molang strings`);
```

#### 4465. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37022` → after: `L36700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36700) · [Before (L37022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37022)

```diff
-         if (3 !== pp.length) throw new Wp(`${ip}: vectors must have 1 or 3 elements`);
+         if (3 !== TT.length) throw new pT(`${UT}: vectors must have 1 or 3 elements`);
```

#### 4466. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37025` → after: `L36703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36703) · [Before (L37025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37025)

```diff
-       throw new Wp(`${cp}: values must be numbers, Molang strings or [x, y, z]`)
+       throw new pT(`${mT}: values must be numbers, Molang strings or [x, y, z]`)
```

#### 4467. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37029` → after: `L36707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36707) · [Before (L37029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37029)

```diff
-       return "number" === typeof pp ? 0 === pp ? 0 : -pp : Lp(pp)
+       return "number" === typeof TT ? 0 === TT ? 0 : -TT : HT(TT)
```

#### 4468. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37050` → after: `L36728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36728) · [Before (L37050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37050)

```diff
-   37557: (pp, ip, cp) => {
+   37443: (TT, UT, mT) => {
```

#### 4469. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37052` → after: `L36730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36730) · [Before (L37052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37052)

```diff
-       c: () => ic
+       e: () => AU
```

#### 4470. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37150` → after: `L36828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36828) · [Before (L37150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37150)

```diff
-     var Ki = cp(37561);
+     var hU = mT(37449);
```

#### 4471. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37252` → after: `L36930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36930) · [Before (L37252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37252)

```diff
-       return pc ??= (0, Ki.t)(Vi, "builtIn"), pc
+       return oU ??= (0, hU.q)(DU, "builtIn"), oU
```

#### 4472. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37255` → after: `L36933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R36933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L36933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L36933) · [Before (L37255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37255)

```diff
-   37580: (pp, ip, cp) => {
+   37468: (TT, UT, mT) => {
```

#### 4473. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37330` → after: `L37008-L37009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37008-L37009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37008-L37009) · [Before (L37330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37330)

```diff
-       e: () => Tp,
+       c: () => FT,
+       d: () => sT,
```

#### 4474. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37332-L37333` → after: `L37011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37011) · [Before (L37332-L37333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37332-L37333)

```diff
-       l: () => gp,
-       n: () => hp
+       j: () => uT
```

#### 4475. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37335` → after: `L37013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37013) · [Before (L37335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37335)

```diff
-     var op = cp(37376);
+     var zT = mT(37246);
```

#### 4476. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37362` → after: `L37040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37040) · [Before (L37362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37362)

```diff
-         in_out_quad: pp => pp < .5 ? 2 * pp * pp : (4 - 2 * pp) * pp - 1,
+         in_out_quad: TT => TT < .5 ? 2 * TT * TT : (4 - 2 * TT) * TT - 1,
```

#### 4477. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37365` → after: `L37043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37043) · [Before (L37365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37365)

```diff
-         in_out_cubic: pp => pp < .5 ? 4 * pp * pp * pp : (pp - 1) * (2 * pp - 2) * (2 * pp - 2) + 1,
+         in_out_cubic: TT => TT < .5 ? 4 * TT * TT * TT : (TT - 1) * (2 * TT - 2) * (2 * TT - 2) + 1,
```

#### 4478. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37368` → after: `L37046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37046) · [Before (L37368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37368)

```diff
-         in_out_quart: pp => pp < .5 ? 8 * pp * pp * pp * pp : 1 - 8 * (pp - 1) * (pp - 1) * (pp - 1) * (pp - 1),
+         in_out_quart: TT => TT < .5 ? 8 * TT * TT * TT * TT : 1 - 8 * (TT - 1) * (TT - 1) * (TT - 1) * (TT - 1),
```

#### 4479. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37371` → after: `L37049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37049) · [Before (L37371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37371)

```diff
-         in_out_quint: pp => pp < .5 ? 16 * pp * pp * pp * pp * pp : 1 + 16 * (pp - 1) * (pp - 1) * (pp - 1) * (pp - 1) * (pp - 1),
+         in_out_quint: TT => TT < .5 ? 16 * TT * TT * TT * TT * TT : 1 + 16 * (TT - 1) * (TT - 1) * (TT - 1) * (TT - 1) * (TT - 1),
```

#### 4480. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37374` → after: `L37052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37052) · [Before (L37374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37374)

```diff
-         in_out_expo: pp => 0 === pp || 1 === pp ? pp : 2 * pp < 1 ? .5 * 2 ** (10 * (2 * pp - 1)) : .5 * (2 - 2 ** (-10 * (2 * pp - 1))),
+         in_out_expo: TT => 0 === TT || 1 === TT ? TT : 2 * TT < 1 ? .5 * 2 ** (10 * (2 * TT - 1)) : .5 * (2 - 2 ** (-10 * (2 * TT - 1))),
```

#### 4481. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37391-L37392` → after: `L37069-L37070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37069-L37070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37069-L37070) · [Before (L37391-L37392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37391-L37392)

```diff
-         in_elastic: pp => 0 === pp || 1 === pp ? pp : -(2 ** (10 * (pp - 1))) * Lp(pp - 1, .7),
-         out_elastic: pp => 0 === pp || 1 === pp ? pp : 2 ** (2 * pp * -10) * Lp(2 * pp, .7) + 1,
+         in_elastic: TT => 0 === TT || 1 === TT ? TT : -(2 ** (10 * (TT - 1))) * HT(TT - 1, .7),
+         out_elastic: TT => 0 === TT || 1 === TT ? TT : 2 ** (2 * TT * -10) * HT(2 * TT, .7) + 1,
```

#### 4482. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37414` → after: `L37092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37092) · [Before (L37414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37414)

```diff
-         apply: ip => pp(ip * op.b)
+         apply: UT => TT(UT * zT.c)
```

#### 4483. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37422` → after: `L37100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37100) · [Before (L37422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37422)

```diff
-         apply: ip => pp(ip) / op.b
+         apply: UT => TT(UT) / zT.c
```

#### 4484. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37431` → after: `L37109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37109) · [Before (L37431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37431)

```diff
-         ["atan2", Pp(((pp, ip) => Math.atan2(pp, ip) / op.b))],
+         ["atan2", LT(((TT, UT) => Math.atan2(TT, UT) / zT.c))],
```

#### 4485. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37434-L37435` → after: `L37112-L37113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37112-L37113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37112-L37113) · [Before (L37434-L37435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37434-L37435)

```diff
-           const Op = pp > cp ? cp : pp;
-           return Op < ip ? ip : Op
+           const WT = TT > mT ? mT : TT;
+           return WT < UT ? UT : WT
```

#### 4486. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37464` → after: `L37142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37142) · [Before (L37464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37464)

```diff
-           return [`ease_${ip}`, ip.includes("elastic") || ip.includes("bounce") ? Up(Op, 2) : Op]
+           return [`ease_${UT}`, UT.includes("elastic") || UT.includes("bounce") ? ZT(WT, 2) : WT]
```

#### 4487. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37559` → after: `L37237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37237) · [Before (L37559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37559)

```diff
-             if (Op < pp.length && Cp.test(pp[Op])) throw new lp(`malformed number '${pp.slice(cp,Op+1)}'`, cp);
+             if (WT < TT.length && wT.test(TT[WT])) throw new yT(`malformed number '${TT.slice(mT,WT+1)}'`, mT);
```

#### 4488. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37577` → after: `L37255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37255) · [Before (L37577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37577)

```diff
-           if (void 0 === Sp) throw new lp(`unexpected character '${Op}'`, cp);
+           if (void 0 === gT) throw new yT(`unexpected character '${WT}'`, mT);
```

#### 4489. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37592` → after: `L37270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37270) · [Before (L37592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37592)

```diff
-       Bp = pp => pp.kind === Xp.End ? "end of expression" : `'${pp.text}'`;
+       QT = TT => TT.kind === aT.End ? "end of expression" : `'${TT.text}'`;
```

#### 4490. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37642` → after: `L37320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37320) · [Before (L37642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37642)

```diff
-         if (this.depth--, null !== pp.constant) return tp(pp.constant) ? ip : cp;
+         if (this.depth--, null !== TT.constant) return fT(TT.constant) ? UT : mT;
```

#### 4491. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37657` → after: `L37335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37335) · [Before (L37657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37657)

```diff
-             xp = null !== (cp = Op(op.text, ip, Sp)) && void 0 !== cp ? cp : ep(op.text, ip.evaluate, Sp.evaluate);
+             nT = null !== (mT = WT(zT.text, UT, gT)) && void 0 !== mT ? mT : bT(zT.text, UT.evaluate, gT.evaluate);
```

#### 4492. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37678` → after: `L37356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37356) · [Before (L37678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37678)

```diff
-         throw new lp(`expected an expression but found ${Bp(pp)}`, pp.offset)
+         throw new yT(`expected an expression but found ${QT(TT)}`, TT.offset)
```

#### 4493. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37686` → after: `L37364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37364) · [Before (L37686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37686)

```diff
-         if (-1 === Op) throw new lp(`unknown identifier '${pp.text}'`, pp.offset);
+         if (-1 === WT) throw new yT(`unknown identifier '${TT.text}'`, TT.offset);
```

#### 4494. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37693` → after: `L37371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37371) · [Before (L37693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37693)

```diff
-             if (void 0 === ip) throw new lp(`unknown query '${pp.text}'`, pp.offset);
+             if (void 0 === UT) throw new yT(`unknown query '${TT.text}'`, TT.offset);
```

#### 4495. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37703` → after: `L37381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37381) · [Before (L37703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37703)

```diff
-             if (void 0 === ip) throw new lp(`unknown variable '${pp.text}'`, pp.offset);
+             if (void 0 === UT) throw new yT(`unknown variable '${TT.text}'`, TT.offset);
```

#### 4496. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37713` → after: `L37391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37391) · [Before (L37713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37713)

```diff
-         throw new lp(null !== (ip = Rp.get(op)) && void 0 !== ip ? ip : `unknown identifier '${pp.text}'`, pp.offset)
+         throw new yT(null !== (UT = JT.get(zT)) && void 0 !== UT ? UT : `unknown identifier '${TT.text}'`, TT.offset)
```

#### 4497. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37717` → after: `L37395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37395) · [Before (L37717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37717)

```diff
-         if (pp.startsWith("random") || pp.startsWith("die_roll")) throw new lp(`'${ip.text}' is non-deterministic and not supported`, ip.offset);
+         if (TT.startsWith("random") || TT.startsWith("die_roll")) throw new yT(`'${UT.text}' is non-deterministic and not supported`, UT.offset);
```

#### 4498. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37719` → after: `L37397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37397) · [Before (L37719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37719)

```diff
-         if (void 0 === cp) throw new lp(`unknown function '${ip.text}'`, ip.offset);
+         if (void 0 === mT) throw new yT(`unknown function '${UT.text}'`, UT.offset);
```

#### 4499. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37728` → after: `L37406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37406) · [Before (L37728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37728)

```diff
-         if (Op.length !== cp.arity) throw new lp(`'${ip.text}' takes ${cp.arity} argument(s) but was given ${Op.length}`, ip.offset);
+         if (WT.length !== mT.arity) throw new yT(`'${UT.text}' takes ${mT.arity} argument(s) but was given ${WT.length}`, UT.offset);
```

#### 4500. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37733` → after: `L37411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37411) · [Before (L37733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37733)

```diff
-           for (let Yp = 1; Yp < (null !== (Lp = cp.cost) && void 0 !== Lp ? Lp : 1); Yp++) {
+           for (let kT = 1; kT < (null !== (HT = mT.cost) && void 0 !== HT ? HT : 1); kT++) {
```

#### 4501. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37770` → after: `L37448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37448) · [Before (L37770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37770)

```diff
-           throw new lp(`expected '${pp}' but found ${Bp(ip)}`, ip.offset)
+           throw new yT(`expected '${TT}' but found ${QT(UT)}`, UT.offset)
```

#### 4502. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37775` → after: `L37453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37453) · [Before (L37775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37775)

```diff
-         if (pp.kind !== Xp.End) throw new lp(`unexpected ${Bp(pp)}`, pp.offset)
+         if (TT.kind !== aT.End) throw new yT(`unexpected ${QT(TT)}`, TT.offset)
```

#### 4503. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37778` → after: `L37456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37456) · [Before (L37778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37778)

```diff
-     const np = pp => Number.isFinite(pp) ? pp : 0;
+     const rT = TT => Number.isFinite(TT) ? TT : 0;
```

#### 4504. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37790` → after: `L37468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37468) · [Before (L37790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37790)

```diff
-         if (pp.length > Tp) throw new lp(`expression is longer than ${Tp} characters`, Tp);
+         if (TT.length > FT) throw new yT(`expression is longer than ${FT} characters`, FT);
```

#### 4505. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37804` → after: `L37482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37482) · [Before (L37804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37804)

```diff
-           error: `${cp.message} at offset ${cp.offset}`
+           error: `${mT.message} at offset ${mT.offset}`
```

#### 4506. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37810` → after: `L37488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37488) · [Before (L37810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37810)

```diff
-   38660: (pp, ip, cp) => {
+   38570: (TT, UT, mT) => {
```

#### 4507. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37812` → after: `L37490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37490) · [Before (L37812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37812)

```diff
-       b: () => xp,
+       e: () => nT,
```

#### 4508. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37815` → after: `L37493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37493) · [Before (L37815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37815)

```diff
-     var Op = cp(343),
+     var WT = mT(375),
```

#### 4509. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37817` → after: `L37495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37495) · [Before (L37817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37817)

```diff
-       Ip = cp(38668),
+       MT = mT(38578),
```

#### 4510. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37828-L37829` → after: `L37506-L37507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37506-L37507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37506-L37507) · [Before (L37828-L37829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37828-L37829)

```diff
-         Lk: function(pp, ip) {},
-         uE: null,
+         lY: function(TT, UT) {},
+         yI: null,
```

#### 4511. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37832` → after: `L37510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37510) · [Before (L37832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37832)

```diff
-             const ip = pp.Yk.PJ("collideEntitiesProjectile");
+             const UT = TT.pY.qV("collideEntitiesProjectile");
```

#### 4512. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37844-L37847` → after: `L37522-L37525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37522-L37525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37522-L37525) · [Before (L37844-L37847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37844-L37847)

```diff
-         Ip = pp.Yk.fn(ip),
-         Sp = pp.Yk.xZ(ip),
-         xp = [Ip.DP.base[0] + Sp.width / 2, Ip.DP.base[1] + Sp.height / 2, Ip.DP.base[2] + Sp.width / 2];
-       op().add(xp, xp, null !== (cp = Sp.BP) && void 0 !== cp ? cp : pp.BP), Ap(pp, pp.Yk.getState(ip, "collideEntitiesProjectile"), Op, xp)
+         MT = TT.pY.rK(UT),
+         gT = TT.pY.FN(UT),
+         nT = [MT.Kl.base[0] + gT.width / 2, MT.Kl.base[1] + gT.height / 2, MT.Kl.base[2] + gT.width / 2];
+       zT().add(nT, nT, null !== (mT = gT.ZL) && void 0 !== mT ? mT : TT.ZL), lT(TT, TT.pY.getState(UT, "collideEntitiesProjectile"), WT, nT)
```

#### 4513. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37853` → after: `L37531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37531) · [Before (L37853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37853)

```diff
-       let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : pp.Yk.sH(ip.yJ);
+       let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : TT.pY.Aq(UT.bV);
```

#### 4514. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37860-L37861` → after: `L37538-L37539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37538-L37539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37538-L37539) · [Before (L37860-L37861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37860-L37861)

```diff
-         if (!pp.Yk.hpp(Op.yJ, "collideEntities")) continue;
-         if (!Op.tOp) continue;
+         if (!TT.pY.uTT(WT.bV, "collideEntities")) continue;
+         if (!WT.TWT) continue;
```

#### 4515. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37863` → after: `L37541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37541) · [Before (L37863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37863)

```diff
-         if (xp = ip._lastPos, Lp = Dp[op], (xp[0] >= Lp[0][0] && xp[0] <= Lp[1][0] && xp[1] >= Lp[0][1] && xp[1] <= Lp[1][1] && xp[2] >= Lp[0][2] && xp[2] <= Lp[1][2] || Math.abs(Ap) <= Ip) && (ip.callback(Op.yJ), !pp.Yk.hpp(ip.yJ, "collideEntitiesProjectile"))) break
+         if (nT = UT._lastPos, HT = jT[zT], (nT[0] >= HT[0][0] && nT[0] <= HT[1][0] && nT[1] >= HT[0][1] && nT[1] <= HT[1][1] && nT[2] >= HT[0][2] && nT[2] <= HT[1][2] || Math.abs(lT) <= MT) && (UT.callback(WT.bV), !TT.pY.uTT(UT.bV, "collideEntitiesProjectile"))) break
```

#### 4516. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37870` → after: `L37548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37548) · [Before (L37870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37870)

```diff
-       const ip = pp.Yk.PJ("collideEntities");
+       const UT = TT.pY.qV("collideEntities");
```

#### 4517. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37873-L37875` → after: `L37551-L37553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37551-L37553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37551-L37553) · [Before (L37873-L37875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37873-L37875)

```diff
-         const Sp = pp.Yk.xZ(ip[Ip].yJ),
-           xp = ip[Ip].wOp / 2,
-           Lp = ip[Ip].vOp / 2;
+         const gT = TT.pY.FN(UT[MT].bV),
+           nT = UT[MT].AmT / 2,
+           HT = UT[MT].RmT / 2;
```

#### 4518. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37877-L37879` → after: `L37555-L37557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37555-L37557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37555-L37557) · [Before (L37877-L37879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37877-L37879)

```diff
-           [Sp.Vcp[0] - xp, Sp.Vcp[1] - Lp, Sp.Vcp[2] - xp],
-           [Sp.Vcp[3] + xp, Sp.Vcp[4] + Lp, Sp.Vcp[5] + xp]
-         ], op().add(Dp[Ip][0], Dp[Ip][0], null !== (cp = Sp.BP) && void 0 !== cp ? cp : pp.BP), op().add(Dp[Ip][1], Dp[Ip][1], null !== (Op = Sp.BP) && void 0 !== Op ? Op : pp.BP)
+           [gT.smT[0] - nT, gT.smT[1] - HT, gT.smT[2] - nT],
+           [gT.smT[3] + nT, gT.smT[4] + HT, gT.smT[5] + nT]
+         ], zT().add(jT[MT][0], jT[MT][0], null !== (mT = gT.ZL) && void 0 !== mT ? mT : TT.ZL), zT().add(jT[MT][1], jT[MT][1], null !== (WT = gT.ZL) && void 0 !== WT ? WT : TT.ZL)
```

#### 4519. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37884` → after: `L37562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37562) · [Before (L37884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37884)

```diff
-   37901: (pp, ip, cp) => {
+   37807: (TT, UT, mT) => {
```

#### 4520. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37886` → after: `L37564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37564) · [Before (L37886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37886)

```diff
-       b: () => Yp,
+       c: () => kT,
```

#### 4521. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37889-L37891` → after: `L37567-L37569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37567-L37569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37567-L37569) · [Before (L37889-L37891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37889-L37891)

```diff
-     var Op = cp(37880),
-       op = cp(6605),
-       Ip = cp(6600);
+     var WT = mT(37791),
+       zT = mT(6542),
+       MT = mT(6540);
```

#### 4522. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37894-L37895` → after: `L37572-L37573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37572-L37573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37572-L37573) · [Before (L37894-L37895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37894-L37895)

```diff
-         this.yJ = void 0, this.maxSpeed = 4, this.moveForce = 80, this.responsiveness = 20, this.movingFriction = 0, this.standingFriction = 5, this.boatStandingFriction = .4, this.gliderFriction = 0, this.airMoveMult = 1, this.jumpForce = 0, this.jumpTime = 500, this.isGliding = … [truncated]
-           type: op.l.DEFAULT,
+         this.bV = void 0, this.maxSpeed = 4, this.moveForce = 80, this.responsiveness = 20, this.movingFriction = 0, this.standingFriction = 5, this.boatStandingFriction = .4, this.gliderFriction = 0, this.airMoveMult = 1, this.jumpForce = 0, this.jumpTime = 500, this.isGliding = … [truncated]
+           type: zT.q.DEFAULT,
```

#### 4523. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37901` → after: `L37579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37579) · [Before (L37901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37901)

```diff
-         }, this.fb = 0, this.steeringHeading = 0, this._steeringHeadingPrevTick = 0, this._steeringActiveLastTick = !1, this._lastTickVelocity = [0, 0, 0], this._beenOnSolidGroundSinceBhopBounce = !0, this.movementType = op.k.NORMAL, this.movementTypeLastTick = op.k.NORMAL, this. … [truncated]
+         }, this.fb = 0, this.steeringHeading = 0, this._steeringHeadingPrevTick = 0, this._steeringActiveLastTick = !1, this._lastTickVelocity = [0, 0, 0], this._beenOnSolidGroundSinceBhopBounce = !0, this.movementType = zT.p.NORMAL, this.movementTypeLastTick = zT.p.NORMAL, this. … [truncated]
```

#### 4524. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37910` → after: `L37588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37588) · [Before (L37910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37910)

```diff
-         return this.HP.Yk.fn(this.yJ).atRestY() < 0
+         return this.Rl.pY.rK(this.bV).atRestY() < 0
```

#### 4525. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37916` → after: `L37594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37594) · [Before (L37916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37916)

```diff
-         return (0, Op.d)(this.HP, this.yJ, !1)
+         return (0, WT.e)(this.Rl, this.bV, !1)
```

#### 4526. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37919` → after: `L37597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37597) · [Before (L37919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37919)

```diff
-         return pp === op.k.GLIDING ? this.hitWhilstGliding : this.hitWhilstFloating
+         return TT === zT.p.GLIDING ? this.hitWhilstGliding : this.hitWhilstFloating
```

#### 4527. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37922` → after: `L37600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37600) · [Before (L37922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37922)

```diff
-         pp === op.k.GLIDING ? this.hitWhilstGliding = ip : this.hitWhilstFloating = ip
+         TT === zT.p.GLIDING ? this.hitWhilstGliding = UT : this.hitWhilstFloating = UT
```

#### 4528. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37928` → after: `L37606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37606) · [Before (L37928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37928)

```diff
-       const ip = pp.Yk.xip(pp.NJ);
+       const UT = TT.pY.gUT(TT.VV);
```

#### 4529. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37937-L37938` → after: `L37615-L37616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37615-L37616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37615-L37616) · [Before (L37937-L37938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37937-L37938)

```diff
-         Lk: (ip, cp) => {
-           cp.HP = pp, xp = cp.isInCobweb, Lp = cp.isInFluid
+         lY: (UT, mT) => {
+           mT.Rl = TT, nT = mT.isInCobweb, HT = mT.isInFluid
```

#### 4530. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37940` → after: `L37618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37618) · [Before (L37940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37940)

```diff
-         uE: null,
+         yI: null,
```

#### 4531. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37945` → after: `L37623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37623) · [Before (L37945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37945)

```diff
-   37470: (pp, ip, cp) => {
+   37346: (TT, UT, mT) => {
```

#### 4532. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37947` → after: `L37625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37625) · [Before (L37947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37947)

```diff
-       e: () => Op
+       b: () => WT
```

#### 4533. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37981` → after: `L37659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37659) · [Before (L37981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37981)

```diff
-   38025: (pp, ip, cp) => {
+   37929: (TT, UT, mT) => {
```

#### 4534. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37985-L37987` → after: `L37664-L37665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37664-L37665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37664-L37665) · [Before (L37985-L37987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37985-L37987)

```diff
-       e: () => Wp,
-       f: () => Ap,
-       j: () => Dp,
+       g: () => lT,
+       i: () => jT,
```

#### 4535. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37989-L37991` → after: `L37667-L37669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37667-L37669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37667-L37669) · [Before (L37989-L37991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37989-L37991)

```diff
-       o: () => Pp,
-       r: () => Up,
-       u: () => yp
+       n: () => LT,
+       p: () => ZT,
+       q: () => BT
```

#### 4536. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37993-L37995` → after: `L37671-L37673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37671-L37673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37671-L37673) · [Before (L37993-L37995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37993-L37995)

```diff
-     var Op = cp(195),
-       op = cp(9338),
-       Ip = cp(38033);
+     var WT = mT(208),
+       zT = mT(9330),
+       MT = mT(37936);
```

#### 4537. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L37998` → after: `L37676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37676) · [Before (L37998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L37998)

```diff
-       return null !== ip && void 0 !== ip ? ip : pp ? 0 : Op.g.ezBridgeGrowMs
+       return null !== UT && void 0 !== UT ? UT : TT ? 0 : WT.f.ezBridgeGrowMs
```

#### 4538. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38023-L38024` → after: `L37701-L37702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37701-L37702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37701-L37702) · [Before (L38023-L38024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38023-L38024)

```diff
-       const ip = op.e[pp];
-       return !!ip && (!(pp in Ip.f) && (ip.model ? "Slab" === ip.model : !ip.twoDBlockItem))
+       const UT = zT.g[TT];
+       return !!UT && (!(TT in MT.i) && (UT.model ? "Slab" === UT.model : !UT.twoDBlockItem))
```

#### 4539. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38036` → after: `L37714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37714) · [Before (L38036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38036)

```diff
-       return Wp(ip.startedAtMs, ip.endsAtMs, cp) >= Op ? ip : pp
+       return pT(UT.startedAtMs, UT.endsAtMs, mT) >= WT ? UT : TT
```

#### 4540. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38050` → after: `L37728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37728) · [Before (L38050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38050)

```diff
-   37964: (pp, ip, cp) => {
+   37868: (TT, UT, mT) => {
```

#### 4541. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38055-L38059` → after: `L37733-L37737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37733-L37737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37733-L37737) · [Before (L38055-L38059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38055-L38059)

```diff
-       b: () => wp,
-       f: () => jp,
-       h: () => ep,
-       i: () => kp,
-       l: () => xp,
+       B: () => vT,
+       D: () => ZT,
+       c: () => cT,
+       g: () => OT,
+       k: () => bT,
```

#### 4542. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38062-L38064` → after: `L37741-L37742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37741-L37742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37741-L37742) · [Before (L38062-L38064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38062-L38064)

```diff
-       t: () => Lp,
-       w: () => vp,
-       z: () => Up
+       v: () => MT,
+       x: () => HT
```

#### 4543. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38088` → after: `L37766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37766) · [Before (L38088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38088)

```diff
-       return `~${function(pp){return pp.length<2?pp:":"===pp[1]?pp[0]:pp[0]+pp[1]}(ip)}~${pp}`
+       return `~${function(TT){return TT.length<2?TT:":"===TT[1]?TT[0]:TT[0]+TT[1]}(UT)}~${TT}`
```

#### 4544. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38134` → after: `L37812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37812) · [Before (L38134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38134)

```diff
-       if (cp <= ip) return `t ${pp}`;
+       if (mT <= UT) return `t ${TT}`;
```

#### 4545. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38168` → after: `L37846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37846) · [Before (L38168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38168)

```diff
-   38402: (pp, ip, cp) => {
+   38325: (TT, UT, mT) => {
```

#### 4546. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38171-L38172` → after: `L37850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37850) · [Before (L38171-L38172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38171-L38172)

```diff
-       d: () => xp,
-       f: () => Yp
+       d: () => kT
```

#### 4547. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38174-L38176` → after: `L37852-L37854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37852-L37854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37852-L37854) · [Before (L38174-L38176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38174-L38176)

```diff
-     var Op = cp(6605),
-       op = cp(337),
-       Ip = cp(640);
+     var WT = mT(6542),
+       zT = mT(366),
+       MT = mT(653);
```

#### 4548. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38184` → after: `L37862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37862) · [Before (L38184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38184)

```diff
-       for (let ip = 0; ip < Ip.p; ip++)
+       for (let UT = 0; UT < MT.q; UT++)
```

#### 4549. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38191` → after: `L37869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37869) · [Before (L38191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38191)

```diff
-       for (let Op = 0; Op < Ip.p; Op++) {
+       for (let WT = 0; WT < MT.q; WT++) {
```

#### 4550. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38194` → after: `L37872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37872) · [Before (L38194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38194)

```diff
-         if (Sp(op)) ip += null !== (cp = op.amount) && void 0 !== cp ? cp : 1
+         if (gT(zT)) UT += null !== (mT = zT.amount) && void 0 !== mT ? mT : 1
```

#### 4551. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38200-L38202` → after: `L37878-L37880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37878-L37880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37878-L37880) · [Before (L38200-L38202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38200-L38202)

```diff
-       if (cp !== Op.k.GLIDING && Ip !== Op.k.GLIDING) return;
-       const Sp = pp.Yk.xip(ip);
-       if (Sp.gliderFuelCooldownEnd = 0, cp === Op.k.GLIDING) {
+       if (mT !== WT.p.GLIDING && MT !== WT.p.GLIDING) return;
+       const gT = TT.pY.gUT(UT);
+       if (gT.gliderFuelCooldownEnd = 0, mT === WT.p.GLIDING) {
```

#### 4552. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38204-L38205` → after: `L37882-L37883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37882-L37883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37882-L37883) · [Before (L38204-L38205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38204-L38205)

```diff
-         const cp = null === (Lp = pp.Yk.Bip(ip)) || void 0 === Lp ? void 0 : Lp.inventory;
-         cp && null !== xp(cp) && pp.bloxd.startGliderFuelCooldown(ip, Sp, op.g.getFirecrackerCooldownMultiplier(cp.getItemAtSelectedSlot()))
+         const mT = null === (HT = TT.pY.tUT(UT)) || void 0 === HT ? void 0 : HT.inventory;
+         mT && null !== nT(mT) && TT.bloxd.startGliderFuelCooldown(UT, gT, zT.i.getFirecrackerCooldownMultiplier(mT.getItemAtSelectedSlot()))
```

#### 4553. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38209` → after: `L37887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37887) · [Before (L38209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38209)

```diff
-   38226: (pp, ip, cp) => {
+   38139: (TT, UT, mT) => {
```

#### 4554. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38211-L38212` → after: `L37889-L37890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37889-L37890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37889-L37890) · [Before (L38211-L38212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38211-L38212)

```diff
-       e: () => Ip,
-       g: () => Lp,
+       d: () => MT,
+       f: () => HT,
```

#### 4555. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38216-L38217` → after: `L37895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37895) · [Before (L38216-L38217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38216-L38217)

```diff
-       t: () => Dp,
-       v: () => op
+       q: () => zT
```

#### 4556. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38219` → after: `L37897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37897) · [Before (L38219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38219)

```diff
-     var Op = cp(4346);
+     var WT = mT(4333);
```

#### 4557. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38222` → after: `L37900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37900) · [Before (L38222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38222)

```diff
-       const ip = new Op.h(`blockBreakDrop|${pp}`);
+       const UT = new WT.k(`blockBreakDrop|${TT}`);
```

#### 4558. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38227` → after: `L37905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37905) · [Before (L38227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38227)

```diff
-       pp.gravityMultiplier = 2, pp.friction = 4, pp.Gx = .02, pp.lP = 0, pp.fluidDrag = .2
+       TT.gravityMultiplier = 2, TT.friction = 4, TT.Zn = .02, TT.LL = 0, TT.fluidDrag = .2
```

#### 4559. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38252` → after: `L37930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37930) · [Before (L38252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38252)

```diff
-   38693: (pp, ip, cp) => {
+   38601: (TT, UT, mT) => {
```

#### 4560. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38257-L38258` → after: `L37935-L37936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37935-L37936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37935-L37936) · [Before (L38257-L38258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38257-L38258)

```diff
-     var Op = cp(38690),
-       op = cp(38702);
+     var WT = mT(38598),
+       zT = mT(38609);
```

#### 4561. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38267` → after: `L37945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37945) · [Before (L38267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38267)

```diff
-       const Dp = (0, Op.b)(ip),
+       const jT = (0, WT.d)(UT),
```

#### 4562. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38272` → after: `L37950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37950) · [Before (L38272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38272)

```diff
-         Up = Math.min(Math.max(Ap * pp, Sp), op.e),
+         ZT = Math.min(Math.max(lT * TT, gT), zT.d),
```

#### 4563. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38274` → after: `L37952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37952) · [Before (L38274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38274)

```diff
-         vp = Math.max(Wp * Math.min(pp, op.e / Ap), Lp),
+         vT = Math.max(pT * Math.min(TT, zT.d / lT), HT),
```

#### 4564. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38281` → after: `L37959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37959) · [Before (L38281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38281)

```diff
-         shadowSize: Ip * pp * (null !== (cp = Dp.modelScale) && void 0 !== cp ? cp : 1)
+         shadowSize: MT * TT * (null !== (mT = jT.modelScale) && void 0 !== mT ? mT : 1)
```

#### 4565. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38285` → after: `L37963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37963) · [Before (L38285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38285)

```diff
-   37942: (pp, ip, cp) => {
+   37854: (TT, UT, mT) => {
```

#### 4566. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38287-L38289` → after: `L37965-L37967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37965-L37967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37965-L37967) · [Before (L38287-L38289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38287-L38289)

```diff
-       c: () => Sp,
-       e: () => Yp,
-       h: () => xp
+       d: () => gT,
+       h: () => kT,
+       i: () => nT
```

#### 4567. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38291-L38292` → after: `L37969-L37970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37969-L37970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37969-L37970) · [Before (L38291-L38292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38291-L38292)

```diff
-     var Op = cp(37951),
-       op = cp(2937),
+     var WT = mT(37857),
+       zT = mT(2963),
```

#### 4568. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38296` → after: `L37974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37974) · [Before (L38296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38296)

```diff
-       return `${pp}|${ip}|${cp}`
+       return `${TT}|${UT}|${mT}`
```

#### 4569. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38303` → after: `L37981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37981) · [Before (L38303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38303)

```diff
-     const Lp = cp(195).g.Qy;
+     const HT = mT(208).f.cB;
```

#### 4570. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38311` → after: `L37989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37989) · [Before (L38311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38311)

```diff
-   37855: (pp, ip, cp) => {
+   37764: (TT, UT, mT) => {
```

#### 4571. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38313-L38315` → after: `L37991-L37992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37991-L37992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37991-L37992) · [Before (L38313-L38315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38313-L38315)

```diff
-       c: () => Rp,
-       g: () => mp,
-       l: () => Ep,
+       b: () => JT,
+       f: () => YT,
```

#### 4572. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38318-L38320` → after: `L37998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R37998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L37998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L37998) · [Before (L38318-L38320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38318-L38320)

```diff
-       p: () => qp,
-       r: () => Qp,
-       u: () => lp
+       s: () => yT
```

#### 4573. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38322-L38324` → after: `L38000-L38002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R38000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L38000-L38002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L38000-L38002) · [Before (L38322-L38324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38322-L38324)

```diff
-     var Op = cp(6605),
-       op = cp(37861),
-       Ip = cp(337);
+     var WT = mT(6542),
+       zT = mT(37773),
+       MT = mT(366);
```

#### 4574. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38326` → after: `L38004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R38004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L38004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L38004) · [Before (L38326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38326)

```diff
-         Gx: .25,
+         Zn: .25,
```

#### 4575. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38336` → after: `L38014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R38014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L38014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L38014) · [Before (L38336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38336)

```diff
-         canAutoStepByBlock: Object.fromEntries(Ip.kc.map((pp => [pp, !0]))),
+         canAutoStepByBlock: Object.fromEntries(MT.Kc.map((TT => [TT, !0]))),
```

#### 4576. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38345` → after: `L38023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R38023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L38023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L38023) · [Before (L38345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38345)

```diff
-         speedMultiplierByBlock: Object.fromEntries(Ip.kc.map((pp => [pp, 40]))),
+         speedMultiplierByBlock: Object.fromEntries(MT.Kc.map((TT => [TT, 40]))),
```

#### 4577. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38385` → after: `L38063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R38063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L38063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L38063) · [Before (L38385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38385)

```diff
-         Gx: 2.5,
+         Zn: 2.5,
```

#### 4578. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38416` → after: `L38094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R38094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L38094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L38094) · [Before (L38416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38416)

```diff
-         Gx: 3,
+         Zn: 3,
```

#### 4579. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38455-L38458` → after: `L38133-L38136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R38133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L38133-L38136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L38133-L38136) · [Before (L38455-L38458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38455-L38458)

```diff
-       [Op.h.KART]: {},
-       [Op.h.OFF_ROADER]: Ap,
-       [Op.h.CAR]: {
-         Gx: 2.75,
+       [WT.i.KART]: {},
+       [WT.i.OFF_ROADER]: lT,
+       [WT.i.CAR]: {
+         Zn: 2.75,
```

#### 4580. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38483-L38488` → after: `L38161-L38166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R38161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L38161-L38166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L38161-L38166) · [Before (L38483-L38488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38483-L38488)

```diff
-       [Op.h.GOLD_MINING_DRILL]: Pp("Gold Mining Drill", 5),
-       [Op.h.IRON_MINING_DRILL]: Pp("Iron Mining Drill", 4),
-       [Op.h.DIAMOND_MINING_DRILL]: Pp("Diamond Mining Drill", 6),
-       [Op.h.MOONSTONE_MINING_DRILL]: Pp("Moonstone Mining Drill", 7),
-       [Op.h.ARMORED_CAR]: {
-         Gx: 4.5,
+       [WT.i.GOLD_MINING_DRILL]: LT("Gold Mining Drill", 5),
+       [WT.i.IRON_MINING_DRILL]: LT("Iron Mining Drill", 4),
+       [WT.i.DIAMOND_MINING_DRILL]: LT("Diamond Mining Drill", 6),
+       [WT.i.MOONSTONE_MINING_DRILL]: LT("Moonstone Mining Drill", 7),
+       [WT.i.ARMORED_CAR]: {
+         Zn: 4.5,
```

#### 4581. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38541` → after: `L38219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R38219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L38219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L38219) · [Before (L38541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38541)

```diff
-           activeMovementType: Op.k.GLIDING,
+           activeMovementType: WT.p.GLIDING,
```

#### 4582. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38548-L38549` → after: `L38226-L38227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R38226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L38226-L38227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L38226-L38227) · [Before (L38548-L38549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38548-L38549)

```diff
-         [Op.i.WOOD]: {},
-         [Op.i.IRON]: {
+         [WT.l.WOOD]: {},
+         [WT.l.IRON]: {
```

#### 4583. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38552` → after: `L38230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R38230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L38230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L38230) · [Before (L38552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38552)

```diff
-         [Op.i.GOLD]: {
+         [WT.l.GOLD]: {
```

#### 4584. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38555` → after: `L38233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R38233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L38233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L38233) · [Before (L38555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38555)

```diff
-         [Op.i.DIAMOND]: {
+         [WT.l.DIAMOND]: {
```

#### 4585. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38564` → after: `L38242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R38242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L38242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L38242) · [Before (L38564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38564)

```diff
-           activeMovementType: Op.k.FLOATING,
+           activeMovementType: WT.p.FLOATING,
```

#### 4586. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38578-L38593` → after: `L38256-L38271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R38256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L38256-L38271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L38256-L38271) · [Before (L38578-L38593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38578-L38593)

```diff
-         [Op.e.YELLOW]: Hp("Yellow"),
-         [Op.e.WHITE]: Hp("White"),
-         [Op.e.RED]: Hp("Red"),
-         [Op.e.PURPLE]: Hp("Purple"),
-         [Op.e.PINK]: Hp("Pink"),
-         [Op.e.ORANGE]: Hp("Orange"),
-         [Op.e.MAGENTA]: Hp("Magenta"),
-         [Op.e.LIME]: Hp("Lime"),
-         [Op.e.LIGHT_GRAY]: Hp("Light Gray"),
-         [Op.e.LIGHT_BLUE]: Hp("Light Blue"),
-         [Op.e.GREEN]: Hp("Green"),
-         [Op.e.GRAY]: Hp("Gray"),
-         [Op.e.CYAN]: Hp("Cyan"),
-         [Op.e.BROWN]: Hp("Brown"),
-         [Op.e.BLUE]: Hp("Blue"),
-         [Op.e.BLACK]: Hp("Black")
+         [WT.c.YELLOW]: qT("Yellow"),
+         [WT.c.WHITE]: qT("White"),
+         [WT.c.RED]: qT("Red"),
+         [WT.c.PURPLE]: qT("Purple"),
+         [WT.c.PINK]: qT("Pink"),
+         [WT.c.ORANGE]: qT("Orange"),
+         [WT.c.MAGENTA]: qT("Magenta"),
+         [WT.c.LIME]: qT("Lime"),
+         [WT.c.LIGHT_GRAY]: qT("Light Gray"),
+         [WT.c.LIGHT_BLUE]: qT("Light Blue"),
+         [WT.c.GREEN]: qT("Green"),
+         [WT.c.GRAY]: qT("Gray"),
+         [WT.c.CYAN]: qT("Cyan"),
+         [WT.c.BROWN]: qT("Brown"),
+         [WT.c.BLUE]: qT("Blue"),
+         [WT.c.BLACK]: qT("Black")
```

#### 4587. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38600` → after: `L38278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R38278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L38278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L38278) · [Before (L38600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38600)

```diff
-           icon: `${pp} Balloon`,
+           icon: `${TT} Balloon`,
```

#### 4588. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38606` → after: `L38284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R38284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L38284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L38284) · [Before (L38606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38606)

```diff
-       [Op.m.ROTATION_1]: {
+       [WT.u.ROTATION_1]: {
```

#### 4589. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38609` → after: `L38287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R38287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L38287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L38287) · [Before (L38609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38609)

```diff
-       [Op.m.ROTATION_2]: {
+       [WT.u.ROTATION_2]: {
```

#### 4590. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38612` → after: `L38290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R38290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L38290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L38290) · [Before (L38612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38612)

```diff
-       [Op.m.ROTATION_3]: {
+       [WT.u.ROTATION_3]: {
```

#### 4591. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38615` → after: `L38293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R38293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L38293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L38293) · [Before (L38615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38615)

```diff
-       [Op.m.ROTATION_4]: {
+       [WT.u.ROTATION_4]: {
```

#### 4592. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38619` → after: `L38297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R38297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L38297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L38297) · [Before (L38619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38619)

```diff
-     var ep = cp(9338),
+     var bT = mT(9330),
```

#### 4593. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38626` → after: `L38304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R38304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L38304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L38304) · [Before (L38626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38626)

```diff
-           ...op.f,
+           ...zT.c,
```

#### 4594. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38693` → after: `L38371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R38371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L38371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L38371) · [Before (L38693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38693)

```diff
-           op[Sp] = xp === cp ? Op : ip(xp)
+           zT[gT] = nT === mT ? WT : UT(nT)
```

#### 4595. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38703` → after: `L38381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R38381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L38381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L38381) · [Before (L38703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38703)

```diff
-       return (0, Ip.mc)(pp) ? null : (0, Ip.bb)(ep.h, (ip => {
+       return (0, MT.Qc)(TT) ? null : (0, MT.lb)(bT.k, (UT => {
```

#### 4596. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38705` → after: `L38383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R38383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L38383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L38383) · [Before (L38705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38705)

```diff
-         return null !== (cp = pp[(0, ep.d)(ip)]) && void 0 !== cp ? cp : 1
+         return null !== (mT = TT[(0, bT.e)(UT)]) && void 0 !== mT ? mT : 1
```

#### 4597. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38710-L38711` → after: `L38388-L38389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R38388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L38388-L38389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L38388-L38389) · [Before (L38710-L38711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38710-L38711)

```diff
-       return (0, Ip.mc)(pp) ? null : (0, Ip.bb)(ep.h, (ip => {
-         const cp = pp[(0, ep.d)(ip)];
+       return (0, MT.Qc)(TT) ? null : (0, MT.lb)(bT.k, (UT => {
+         const mT = TT[(0, bT.e)(UT)];
```

#### 4598. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38729-L38733` → after: `L38407-L38411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R38407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L38407-L38411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L38407-L38411) · [Before (L38729-L38733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38729-L38733)

```diff
-       [Op.l.DEFAULT]: new kp(op.f, {}),
-       [Op.l.BOAT]: new kp(Sp, xp),
-       [Op.l.GLIDER]: new kp(Up, wp),
-       [Op.l.BALLOON]: new kp(vp, tp),
-       [Op.l.SLEEPING]: new kp({
+       [WT.q.DEFAULT]: new eT(zT.c, {}),
+       [WT.q.BOAT]: new eT(gT, nT),
+       [WT.q.GLIDER]: new eT(ZT, cT),
+       [WT.q.BALLOON]: new eT(vT, fT),
+       [WT.q.SLEEPING]: new eT({
```

#### 4599. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38745-L38746` → after: `L38423-L38424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R38423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L38423-L38424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L38423-L38424) · [Before (L38745-L38746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38745-L38746)

```diff
-       [Op.l.RIDING_MOB]: new kp({
-         Gx: 1,
+       [WT.q.RIDING_MOB]: new eT({
+         Zn: 1,
```

#### 4600. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38761-L38763` → after: `L38439-L38441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R38439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L38439-L38441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L38439-L38441) · [Before (L38761-L38763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38761-L38763)

```diff
-       [Op.l.CAR]: new kp(Yp, Wp),
-       [Op.l.HOVERCRAFT]: new kp({
-         Gx: .5,
+       [WT.q.CAR]: new eT(kT, pT),
+       [WT.q.HOVERCRAFT]: new eT({
+         Zn: .5,
```

#### 4601. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38808` → after: `L38486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R38486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L38486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L38486) · [Before (L38808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38808)

```diff
-       return null !== pp.fixedHeading ? pp.fixedHeading : pp.steering ? ip : cp
+       return null !== TT.fixedHeading ? TT.fixedHeading : TT.steering ? UT : mT
```

#### 4602. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38811` → after: `L38489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R38489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L38489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L38489) · [Before (L38811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38811)

```diff
-   37898: (pp, ip, cp) => {
+   37805: (TT, UT, mT) => {
```

#### 4603. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38813` → after: `L38491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R38491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L38491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L38491) · [Before (L38813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38813)

```diff
-       b: () => Sp
+       d: () => gT
```

#### 4604. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38815-L38816` → after: `L38493-L38494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R38493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L38493-L38494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L38493-L38494) · [Before (L38815-L38816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38815-L38816)

```diff
-     var Op = cp(9338),
-       op = cp(337);
+     var WT = mT(9330),
+       zT = mT(366);
```

#### 4605. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38891` → after: `L38569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R38569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L38569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L38569) · [Before (L38891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38891)

```diff
-       Sp = (0, op.bb)(Op.h, (pp => {
+       gT = (0, zT.lb)(WT.k, (TT => {
```

#### 4606. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38893-L38894` → after: `L38571-L38572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R38571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L38571-L38572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L38571-L38572) · [Before (L38893-L38894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38893-L38894)

```diff
-         const Lp = (0, Op.d)(pp);
-         return null !== (ip = null !== (cp = null === (op = Ip[Lp]) || void 0 === op ? void 0 : op.upForceScalar) && void 0 !== cp ? cp : null === (Sp = Op.h[pp]) || void 0 === Sp || null === (xp = Sp.climbableInside) || void 0 === xp ? void 0 : xp.upForceScalar) && void 0 !== ip … [truncated]
+         const HT = (0, WT.e)(TT);
+         return null !== (UT = null !== (mT = null === (zT = MT[HT]) || void 0 === zT ? void 0 : zT.upForceScalar) && void 0 !== mT ? mT : null === (gT = WT.k[TT]) || void 0 === gT || null === (nT = gT.climbableInside) || void 0 === nT ? void 0 : nT.upForceScalar) && void 0 !== UT … [truncated]
```

#### 4607. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38897` → after: `L38575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R38575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L38575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L38575) · [Before (L38897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38897)

```diff
-   38006: (pp, ip, cp) => {
+   37904: (TT, UT, mT) => {
```

#### 4608. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38903-L38906` → after: `L38582-L38584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R38582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L38582-L38584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L38582-L38584) · [Before (L38903-L38906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38903-L38906)

```diff
-       f: () => xp,
-       g: () => Op,
-       h: () => Ip,
-       k: () => Sp
+       i: () => WT,
+       m: () => MT,
+       p: () => gT
```

#### 4609. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38916` → after: `L38594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R38594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L38594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L38594) · [Before (L38916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38916)

```diff
-       const Lp = Ip ? pp.heldMs + Sp : 0;
+       const HT = MT ? TT.heldMs + gT : 0;
```

#### 4610. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38931` → after: `L38609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R38609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L38609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L38609) · [Before (L38931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38931)

```diff
-   6600: (pp, ip, cp) => {
+   6540: (TT, UT, mT) => {
```

#### 4611. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38933-L38935` → after: `L38611-L38613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R38611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L38611-L38613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L38611-L38613) · [Before (L38933-L38935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38933-L38935)

```diff
-       b: () => Ap,
-       f: () => op,
-       i: () => Pp
+       c: () => lT,
+       g: () => zT,
+       h: () => LT
```

#### 4612. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38937` → after: `L38615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R38615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L38615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L38615) · [Before (L38937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38937)

```diff
-     var Op = cp(6605);
+     var WT = mT(6542);
```

#### 4613. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38940` → after: `L38618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R38618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L38618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L38618) · [Before (L38940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38940)

```diff
-       return pp && ip === Op.l.DEFAULT
+       return TT && UT === WT.q.DEFAULT
```

#### 4614. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38950` → after: `L38628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R38628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L38628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L38628) · [Before (L38950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38950)

```diff
-         this.bo = 0, this.ho = 0, this.yVelocity = 0
+         this.qz = 0, this.iz = 0, this.yVelocity = 0
```

#### 4615. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38953` → after: `L38631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R38631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L38631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L38631) · [Before (L38953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38953)

```diff
-         this.bo = 0, this.ho = 0, this.yVelocity = 0
+         this.qz = 0, this.iz = 0, this.yVelocity = 0
```

#### 4616. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38959-L38960` → after: `L38637-L38638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R38637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L38637-L38638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L38637-L38638) · [Before (L38959-L38960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38959-L38960)

```diff
-       pp.bo = ip ? Math.min(pp.bo + Sp / Ip * op, Sp) : 0, 0 === cp ? pp.ho = 0 : Op ? pp.ho = op : pp.ho += op;
-       const Ap = Math.min(pp.ho, Ip) / Ip,
+       TT.qz = UT ? Math.min(TT.qz + gT / MT * zT, gT) : 0, 0 === mT ? TT.iz = 0 : WT ? TT.iz = zT : TT.iz += zT;
+       const lT = Math.min(TT.iz, MT) / MT,
```

#### 4617. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38965` → after: `L38643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R38643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L38643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L38643) · [Before (L38965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38965)

```diff
-   38702: (pp, ip, cp) => {
+   38609: (TT, UT, mT) => {
```

#### 4618. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38968` → after: `L38646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R38646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L38646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L38646) · [Before (L38968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38968)

```diff
-       e: () => Op
+       d: () => WT
```

#### 4619. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38974` → after: `L38652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R38652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L38652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L38652) · [Before (L38974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38974)

```diff
-   37853: (pp, ip, cp) => {
+   37758: (TT, UT, mT) => {
```

#### 4620. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38976-L38978` → after: `L38654-L38656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R38654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L38654-L38656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L38654-L38656) · [Before (L38976-L38978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38976-L38978)

```diff
-       b: () => Lp,
-       f: () => Sp,
-       g: () => xp
+       e: () => HT,
+       g: () => gT,
+       i: () => nT
```

#### 4621. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38980` → after: `L38658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R38658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L38658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L38658) · [Before (L38980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38980)

```diff
-     var Op = cp(343),
+     var WT = mT(375),
```

#### 4622. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38982` → after: `L38660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R38660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L38660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L38660) · [Before (L38982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38982)

```diff
-       Ip = cp(337);
+       MT = mT(366);
```

#### 4623. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38985` → after: `L38663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R38663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L38663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L38663) · [Before (L38985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38985)

```diff
-     const tp = [116, 0, 1, "h", "c", "a", "i", "g", "e", 223, 4, 8, 255, "length", 34, 138, "undefined", 14, void 0, "d", 246, "b", 63, 6, "fromCodePoint", 7, 12, "push", 3, 98, 91, 10, "f", 8191, 88, 13, 120, 2, 102, 241, 244, 214, 245, 132, !1, 9, 189, 5, 127, 128, !0, 122, "PI … [truncated]
+     const fT = [0, 1, 8, 255, "length", "c", "d", "e", 68, 87, "undefined", void 0, 2, 4, "a", 63, 6, "fromCodePoint", 7, 12, "push", 184, 139, 197, 3, "b", 66, 166, 162, 210, !1, 78, 91, 105, 171, 193, 8191, 88, 13, 14, "i", 122, 235, 85, "f", "h", 47, 96, 57, "g", 104, 32, 9, ! … [truncated]
```

#### 4624. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38988-L38991` → after: `L38666-L38671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R38666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L38666-L38671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L38666-L38671) · [Before (L38988-L38991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38988-L38991)

```diff
-       return pp[tp[13]] = tp[2], typeof Yp[pp[tp[1]]] === tp[16] ? Yp[pp[tp[1]]] = function(...pp) {
-         for (Mp(pp[tp[13]] = tp[2], pp[tp[5]] = '+w<*x2`,8[]$fe_DCF#NI{O1um7cvX@&Vy>|g.hPz9ZpJR:BQT"EAs5ntj}3%!Kdl^/W~4?U6oM();=iLkH0aYSrqGb', pp[tp[0]] = "" + (pp[tp[1]] || ""), pp[tp[4]] = pp[tp[0]].length, pp[tp[10]] = [], pp[tp[8]] = tp[1], pp[tp[9]] = tp[1], pp[tp[7]] = -tp[ … [truncated]
-           if (pp[tp[6]] = pp[tp[5]].indexOf(pp[tp[0]][pp[tp[3]]]), pp[tp[6]] !== -tp[2])
-             if (pp[tp[7]] < tp[1]) pp[tp[7]] = pp[tp[6]];
+       return TT[fT[4]] = fT[1], typeof kT[TT[fT[0]]] === fT[10] ? kT[TT[fT[0]]] = function(TT) {
+         var UT, mT, WT, zT, MT, gT, nT;
+         for (xT(UT = "" + (TT || ""), mT = UT.length, WT = [], zT = fT[0], MT = fT[0], gT = -fT[1]), nT = fT[0]; nT < mT; nT++) {
+           var HT = 'AsuXgGSTdhWfZKla*L@!Qy^Uz9M.7vo#"kp3$1qmR%tB}rH&IOw?jF;cJYb~NEV26CiD)eP4n=`/|[:x_5,>80+]<({'.indexOf(UT[nT]);
+           if (HT !== -fT[1])
+             if (gT < fT[0]) gT = HT;
```

#### 4625. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38993` → after: `L38673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R38673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L38673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L38673) · [Before (L38993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38993)

```diff
-               Mp(pp[tp[7]] += pp[tp[6]] * tp[30], pp[tp[8]] |= pp[tp[7]] << pp[tp[9]], pp[tp[9]] += (pp[tp[7]] & tp[33]) > tp[34] ? tp[35] : tp[17]);
+               xT(gT += HT * fT[32], zT |= gT << MT, MT += (gT & fT[36]) > fT[37] ? fT[38] : fT[39]);
```

#### 4626. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L38995-L39003` → after: `L38675-L38681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R38675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L38675-L38681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L38675-L38681) · [Before (L38995-L39003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L38995-L39003)

```diff
-                 Mp(pp[tp[10]].push(pp[tp[8]] & tp[12]), pp[tp[8]] >>= tp[11], pp[tp[9]] -= tp[11])
-               } while (pp[tp[9]] > tp[25]);
-               pp[tp[7]] = -tp[2]
-             } return pp[tp[7]] > -tp[2] && pp[tp[10]].push((pp[tp[8]] | pp[tp[7]] << pp[tp[9]]) & tp[12]), dp(pp[tp[10]])
-       }(Dp[pp[tp[1]]]) : Yp[pp[tp[1]]]
-     }
- 
-     function dp(pp) {
-       return typeof Pp !== tp[16] && Pp ? (new Pp).decode(new Wp(pp)) : typeof yp !== tp[16] && yp ? yp.from(pp).toString("utf-8") : vp(pp)
+                 xT(WT.push(zT & fT[3]), zT >>= fT[2], MT -= fT[2])
+               } while (MT > fT[18]);
+               gT = -fT[1]
+             }
+         }
+         return gT > -fT[1] && WT.push((zT | gT << MT) & fT[3]), iT(WT)
+       }(jT[TT[fT[0]]]) : kT[TT[fT[0]]]
```

#### 4627. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L39007-L39020` → after: `L38685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R38685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L38685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L38685) · [Before (L39007-L39020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L39007-L39020)

```diff
-       if (pp[tp[13]] = tp[28], pp[tp[1]] === function(pp) {
-           return typeof Yp[pp] === tp[16] ? Yp[pp] = function(...pp) {
-             for (Mp(pp[tp[13]] = tp[2], pp[tp[2]] = 'K7<x%^u}]w&+WLA$t"8pM{s1m,v)g2adZ9R=|6k>jrlU`y0IOV~4f:BXYn./ez3[CDPEScb@5H*Q(i#;FoJNGTh_?q!', pp[tp[29]] = "" + (pp[tp[1]] || ""), pp[tp[28]] = pp[tp[29]].length, pp[tp[10]] = [], pp[-tp[31]] = tp[1], pp[tp[32]] = tp[1], pp[tp[ … [truncated]
-               if (pp[tp[6]] = pp[tp[2]].indexOf(pp[tp[29]][pp[tp[3]]]), pp[tp[6]] !== -tp[2])
-                 if (pp[tp[25]] < tp[1]) pp[tp[25]] = pp[tp[6]];
-                 else {
-                   Mp(pp[tp[25]] += pp[tp[6]] * tp[30], pp[-tp[31]] |= pp[tp[25]] << pp[tp[32]], pp[tp[32]] += (pp[tp[25]] & tp[33]) > tp[34] ? tp[35] : tp[17]);
-                   do {
-                     Mp(pp[tp[10]].push(pp[-tp[31]] & tp[12]), pp[-tp[31]] >>= tp[11], pp[tp[32]] -= tp[11])
-                   } while (pp[tp[32]] > tp[25]);
-                   pp[tp[25]] = -tp[2]
-                 } return pp[tp[25]] > -tp[2] && pp[tp[10]].push((pp[-tp[31]] | pp[tp[25]] << pp[tp[32]]) & tp[12]), dp(pp[tp[10]])
-           }(Dp[pp]) : Yp[pp]
-         }(119) + tp[67]) return pp[tp[2]] + pp[tp[37]]
+       return TT[fT[4]] = fT[1], typeof LT !== fT[10] && LT ? (new LT).decode(new pT(TT[fT[0]])) : typeof BT !== fT[10] && BT ? BT.from(TT[fT[0]]).toString("utf-8") : vT(TT[fT[0]])
```

#### 4628. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L39024-L39025` → after: `L38689-L38690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R38689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L38689-L38690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L38689-L38690) · [Before (L39024-L39025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L39024-L39025)

```diff
-     Mp(Yp = {}, Dp = ["q3(;pdt:k5C6^kgh~~q[cz~f6e", "B.~;}?kivK/LgCcv|.YMu", "$71ofQqfBdj_w", '|jZ;,k2r^[=MF!Iz$jV5"(T97FIe;x[P`UXx.!XBHj]>?mf', "*18[AP(e2", '4R1yJE%~"f{i7k0>gQNMv', '(`4,mzwdR{J&XCk7}.;"R(fgw%?Ln}}v/Fo`', "`XD)R!+", "ro%XO4Z}!8p{3}bgbIx2#)+", "h.?Aw:5}pFV&hm?&h[ … [truncated]
-       Mp(pp[tp[13]] = tp[1], pp[tp[5]] = [function() {
+     xT(kT = {}, jT = ['lN!W*4p6`lD9naJvD=:7{=9!8KQI)~hmqC8GDp13zL=fYIM74IM"|>[Y!Zb', "8Q4gT+6buZdSYI*.]IHcB_h!Ub!eSG^7n)u", "OI@[up32JQ", '?4:OA+yKia"Q;O19/L%.R3J`Q6r7,OG!', 'Q@I=k;~//f<6OI219"+gNnl+D!Ln#&i$f4jWd5,Ri2Gx@G', "]=@ni5h%6YW/*>N3TO$#M", "va0T9=tHTb`dsNF.!;6;>e5?tV27,5 … [truncated]
+       xT(TT[fT[4]] = fT[0], TT[-fT[8]] = [function() {
```

#### 4629. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L39033` → after: `L38698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R38698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L38698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L38698) · [Before (L39033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L39033)

```diff
-       }], pp[tp[2]] = tp[18], pp[-tp[14]] = []);
+       }], TT[fT[5]] = fT[11], TT[fT[6]] = []);
```

#### 4630. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L39035` → after: `L38700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R38700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L38700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L38700) · [Before (L39035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L39035)

```diff
-         Mp(pp[tp[2]] = Object, pp[-tp[14]][tp[27]]("".__proto__.constructor.name))
+         xT(TT[fT[5]] = Object, TT[fT[6]][fT[20]]("".__proto__.constructor.name))
```

#### 4631. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L39037-L39040` → after: `L38702-L38705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R38702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L38702-L38705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L38702-L38705) · [Before (L39037-L39040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L39037-L39040)

```diff
-       pp: for (pp[-tp[15]] = tp[1]; pp[-tp[15]] < pp[tp[5]][tp[13]]; pp[-tp[15]]++) try {
-         for (pp[tp[2]] = pp[tp[5]][pp[-tp[15]]](), pp[tp[10]] = tp[1]; pp[tp[10]] < pp[-tp[14]][tp[13]]; pp[tp[10]]++)
-           if (typeof pp[tp[2]][pp[-tp[14]][pp[tp[10]]]] === tp[16]) continue pp;
-         return pp[tp[2]]
+       TT: for (TT[fT[7]] = fT[0]; TT[fT[7]] < TT[-fT[8]][fT[4]]; TT[fT[7]]++) try {
+         for (TT[fT[5]] = TT[-fT[8]][TT[fT[7]]](), TT[fT[9]] = fT[0]; TT[fT[9]] < TT[fT[6]][fT[4]]; TT[fT[9]]++)
+           if (typeof TT[fT[5]][TT[fT[6]][TT[fT[9]]]] === fT[10]) continue TT;
+         return TT[fT[5]]
```

#### 4632. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L39042-L39044` → after: `L38707-L38709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R38707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L38707-L38709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L38707-L38709) · [Before (L39042-L39044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L39042-L39044)

```diff
-       return pp[tp[2]] || this
-     }() || {}, Pp = Ap.TextDecoder, Wp = Ap.Uint8Array, yp = Ap.my, Up = Ap.String || String, wp = Ap.Array || Array, vp = function(...pp) {
-       return Mp(pp[tp[13]] = tp[1], pp[tp[17]] = new wp(tp[49]), pp[tp[2]] = Up[tp[24]] || Up.fromCharCode, pp[tp[19]] = []),
+       return TT[fT[5]] || this
+     }() || {}, LT = lT.TextDecoder, pT = lT.Uint8Array, BT = lT.HB, ZT = lT.String || String, cT = lT.Array || Array, vT = function(...TT) {
+       return xT(TT[fT[4]] = fT[0], TT[fT[21]] = new cT(fT[69]), TT[fT[22]] = ZT[fT[17]] || ZT.fromCharCode, TT[fT[12]] = []),
```

#### 4633. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L39046-L39053` → after: `L38711-L38737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R38711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L38711-L38737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L38711-L38737) · [Before (L39046-L39053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L39046-L39053)

```diff
-           for (Mp(ip[tp[13]] = tp[2], ip[tp[5]] = tp[18], ip[tp[21]] = tp[18], ip[tp[20]] = ip[tp[1]][tp[13]], pp[tp[19]][tp[13]] = tp[1]), ip[tp[10]] = tp[1]; ip[tp[10]] < ip[tp[20]];) Mp(ip[tp[21]] = ip[tp[1]][ip[tp[10]]++], ip[tp[21]] <= tp[48] ? ip[tp[5]] = ip[tp[21]] : ip[tp … [truncated]
-           return pp[tp[19]].join("")
-         }
-     }());
-     const kp = op()[Hp(tp[36])](),
-       mp = op()[Hp(tp[36])](),
-       Rp = op()[Hp(tp[36])](),
-       qp = tp[26];
+           for (xT(UT[fT[4]] = fT[1], UT[fT[14]] = fT[11], UT[fT[12]] = fT[11], UT[fT[5]] = UT[fT[0]][fT[4]], TT[fT[12]][fT[4]] = fT[0]), UT[fT[13]] = fT[0]; UT[fT[13]] < UT[fT[5]];) xT(UT[fT[12]] = UT[fT[0]][UT[fT[13]]++], UT[fT[12]] <= fT[68] ? UT[fT[14]] = UT[fT[12]] : UT[fT[12 … [truncated]
+           return TT[fT[12]].join("")
+         }
+     }()), qT(97) + "6" in bT && function(...TT) {
+       xT(TT[fT[4]] = fT[0], TT[fT[14]] = function(...UT) {
+         return xT(UT[fT[4]] = fT[1], UT[fT[1]] = []), (UT[fT[0]] === fT[1] || UT[fT[0]] >= fT[13]) && TT[-fT[23]](UT[fT[1]], [], UT[fT[0]], fT[0]), UT[fT[1]]
+       }, TT[-fT[23]] = function(...UT) {
+         for (UT[fT[4]] = fT[13], UT[fT[14]] = UT[fT[24]]; UT[fT[14]] < UT[fT[12]]; UT[fT[14]]++) {
+           if (UT[fT[1]].length !== UT[fT[14]]) return;
+           for (UT[fT[25]] = fT[0]; UT[fT[25]] < UT[fT[12]]; UT[fT[25]]++) TT[fT[28]](UT[fT[1]], [UT[fT[14]], UT[fT[25]]]) && (xT(UT[fT[1]].push([UT[fT[14]], UT[fT[25]]]), TT[-fT[23]](UT[fT[0]], UT[fT[1]], UT[fT[12]], UT[fT[14]] + fT[1])), UT[fT[1]].length === UT[fT[12]] && UT[fT[ … [truncated]
+         }
+       }, TT[fT[24]] = function(...TT) {
+         for (xT(TT[fT[4]] = fT[1], TT[fT[14]] = [], TT[fT[25]] = TT[fT[0]].length), TT[fT[26]] = fT[0]; TT[fT[26]] < TT[fT[25]]; TT[fT[26]]++)
+           for (TT[fT[14]][TT[fT[26]]] = "", TT[-fT[27]] = fT[0]; TT[-fT[27]] < TT[fT[25]]; TT[-fT[27]]++) TT[fT[14]][TT[fT[26]]] += TT[fT[0]][TT[fT[26]]][fT[1]] === TT[-fT[27]] ? "Q" : ".";
+         return TT[fT[14]]
+       }, TT[fT[28]] = function(...TT) {
+ ... (11 more added lines; see GitHub link above)
```

#### 4634. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L39060-L39063` → after: `L38744-L38747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R38744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L38744-L38747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L38744-L38747) · [Before (L39060-L39063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L39060-L39063)

```diff
-         return pp[tp[13]] = tp[2], typeof Yp[pp[tp[1]]] === tp[16] ? Yp[pp[tp[1]]] = function(...pp) {
-           for (Mp(pp[tp[13]] = tp[2], pp[tp[38]] = 'F70|ps_f]*iIA>[T!`a~B=$X}kv#eN)Wlh?mgYtJ4EP(,Gncb3K^;LUHQu%28ORMywC@zd5/:Zq6S"9{+&.j<D1oVrx', pp[tp[37]] = "" + (pp[tp[1]] || ""), pp[tp[9]] = pp[tp[37]].length, pp[tp[40]] = [], pp[tp[8]] = tp[1], pp[-tp[39]] = tp[1], pp[tp[7]] … [truncated]
-             if (pp[tp[6]] = pp[tp[38]].indexOf(pp[tp[37]][pp[tp[3]]]), pp[tp[6]] !== -tp[2])
-               if (pp[tp[7]] < tp[1]) pp[tp[7]] = pp[tp[6]];
+         return TT[fT[4]] = fT[1], typeof kT[TT[fT[0]]] === fT[10] ? kT[TT[fT[0]]] = function(...TT) {
+           for (xT(TT[fT[4]] = fT[1], TT[fT[14]] = 'p(YktGi#DVJgh]e4TZS_=:HA2}E;1{N3Boqmac7)dlC~`z,9F"!<n^w?&vKLP+8M%jb/OW$5UuIQ>6s@0xfr[X*Ry.|', TT[-fT[51]] = "" + (TT[fT[0]] || ""), TT[fT[24]] = TT[-fT[51]].length, TT[fT[13]] = [], TT[fT[7]] = fT[0], TT[fT[44]] = fT[0], TT[fT[49 … [truncated]
+             if (TT[fT[52]] = TT[fT[14]].indexOf(TT[-fT[51]][TT[fT[45]]]), TT[fT[52]] !== -fT[1])
+               if (TT[fT[49]] < fT[0]) TT[fT[49]] = TT[fT[52]];
```

#### 4635. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L39065` → after: `L38749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R38749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L38749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L38749) · [Before (L39065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L39065)

```diff
-                 Mp(pp[tp[7]] += pp[tp[6]] * tp[30], pp[tp[8]] |= pp[tp[7]] << pp[-tp[39]], pp[-tp[39]] += (pp[tp[7]] & tp[33]) > tp[34] ? tp[35] : tp[17]);
+                 xT(TT[fT[49]] += TT[fT[52]] * fT[32], TT[fT[7]] |= TT[fT[49]] << TT[fT[44]], TT[fT[44]] += (TT[fT[49]] & fT[36]) > fT[37] ? fT[38] : fT[39]);
```

#### 4636. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L39067-L39071` → after: `L38751-L38755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R38751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L38751-L38755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L38751-L38755) · [Before (L39067-L39071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L39067-L39071)

```diff
-                   Mp(pp[tp[40]].push(pp[tp[8]] & tp[12]), pp[tp[8]] >>= tp[11], pp[-tp[39]] -= tp[11])
-                 } while (pp[-tp[39]] > tp[25]);
-                 pp[tp[7]] = -tp[2]
-               } return pp[tp[7]] > -tp[2] && pp[tp[40]].push((pp[tp[8]] | pp[tp[7]] << pp[-tp[39]]) & tp[12]), dp(pp[tp[40]])
-         }(Dp[pp[tp[1]]]) : Yp[pp[tp[1]]]
+                   xT(TT[fT[13]].push(TT[fT[7]] & fT[3]), TT[fT[7]] >>= fT[2], TT[fT[44]] -= fT[2])
+                 } while (TT[fT[44]] > fT[18]);
+                 TT[fT[49]] = -fT[1]
+               } return TT[fT[49]] > -fT[1] && TT[fT[13]].push((TT[fT[7]] | TT[fT[49]] << TT[fT[44]]) & fT[3]), iT(TT[fT[13]])
+         }(jT[TT[fT[0]]]) : kT[TT[fT[0]]]
```

#### 4637. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L39073-L39088` → after: `L38757-L38770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R38757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L38757-L38770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L38757-L38770) · [Before (L39073-L39088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L39073-L39088)

```diff
-       if (pp[tp[13]] = tp[45], ip(121) + "K" in jp && function(...pp) {
-           Mp(pp[tp[13]] = tp[1], pp[tp[5]] = function(...ip) {
-             return Mp(ip[tp[13]] = tp[2], ip[tp[2]] = []), (ip[tp[1]] === tp[2] || ip[tp[1]] >= tp[10]) && pp[tp[21]](ip[tp[2]], [], ip[tp[1]], tp[1]), ip[tp[2]]
-           }, pp[tp[21]] = function(...ip) {
-             for (ip[tp[13]] = tp[10], ip[tp[5]] = ip[tp[28]]; ip[tp[5]] < ip[tp[37]]; ip[tp[5]]++) {
-               if (ip[tp[2]].length !== ip[tp[5]]) return;
-               for (ip[tp[41]] = tp[1]; ip[tp[41]] < ip[tp[37]]; ip[tp[41]]++) pp[tp[4]](ip[tp[2]], [ip[tp[5]], ip[tp[41]]]) && (Mp(ip[tp[2]].push([ip[tp[5]], ip[tp[41]]]), pp[tp[21]](ip[tp[1]], ip[tp[2]], ip[tp[37]], ip[tp[5]] + tp[2])), ip[tp[2]].length === ip[tp[37]] && ip[tp[1 … [truncated]
-             }
-           }, pp[tp[19]] = function(...pp) {
-             for (Mp(pp[tp[13]] = tp[2], pp[tp[2]] = [], pp[tp[37]] = pp[tp[1]].length), pp[tp[4]] = tp[1]; pp[tp[4]] < pp[tp[37]]; pp[tp[4]]++)
-               for (pp[tp[2]][pp[tp[4]]] = "", pp[-tp[42]] = tp[1]; pp[-tp[42]] < pp[tp[37]]; pp[-tp[42]]++) pp[tp[2]][pp[tp[4]]] += pp[tp[1]][pp[tp[4]]][tp[2]] === pp[-tp[42]] ? "Q" : ".";
-             return pp[tp[2]]
-           }, pp[tp[4]] = function(...pp) {
-             for (Mp(pp[tp[13]] = tp[37], pp[tp[43]] = pp[tp[1]].length), pp[tp[28]] = tp[1]; pp[tp[28]] < pp[tp[43]]; pp[tp[28]]++) {
-               if (pp[tp[1]][pp[tp[28]]][tp[1]] === pp[tp[2]][tp[1]] || pp[tp[1]][pp[tp[28]]][tp[2]] === pp[tp[2]][tp[2]]) return tp[44];
-               if (Math.abs((pp[tp[1]][pp[tp[28]]][tp[1]] - pp[tp[2]][tp[1]]) / (pp[tp[1]][pp[tp[28]]][tp[2]] - pp[tp[2]][tp[2]])) === tp[2]) return tp[44]
+       if (TT[fT[4]] = fT[52], UT(fT[33]) in bT && function(...TT) {
+           function UT(TT) {
+             var UT, mT, WT, zT, MT, gT, nT, HT = 'OAjYGItbqgKXrhVy1"&sp2W%k3BzPM9{dlR?fS~,QNm8i<47TFZ@[n+*;_)LC]vuo0^H:=|(wExcae>J$D/6!}5#`.U';
+             for (xT(UT = "" + (TT || ""), mT = UT.length, WT = [], zT = fT[0], MT = fT[0], gT = -fT[1]), nT = fT[0]; nT < mT; nT++) {
+               var kT = HT.indexOf(UT[nT]);
+               if (kT !== -fT[1])
+                 if (gT < fT[0]) gT = kT;
+                 else {
+                   xT(gT += kT * fT[32], zT |= gT << MT, MT += (gT & fT[36]) > fT[37] ? fT[38] : fT[39]);
+                   do {
+                     xT(WT.push(zT & fT[3]), zT >>= fT[2], MT -= fT[2])
+                   } while (MT > fT[18]);
+                   gT = -fT[1]
+                 }
```

#### 4638. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L39090-L39092` → after: `L38772-L38814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R38772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L38772-L38814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L38772-L38814) · [Before (L39090-L39092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L39090-L39092)

```diff
-             return tp[50]
-           }, console.log(pp[tp[5]]))
-         }(), !pp[tp[2]][ip(tp[51]) + ip(123) + ip(124) + ip(125)]) {
+             return gT > -fT[1] && WT.push((zT | gT << MT) & fT[3]), iT(WT)
+           }
+ 
+           function mT(TT) {
+             return typeof kT[TT] === fT[10] ? kT[TT] = UT(jT[TT]) : kT[TT]
+           }
+ 
+           function WT(...TT) {
+             TT[fT[4]] = fT[1];
+             const UT = {};
+             for (let mT of TT[fT[0]].replace(/[^w]/g, "").toLowerCase()) UT[mT] = UT[mT] + fT[1] || fT[1];
+             return UT
+           }
+ 
+           function zT(...TT) {
+             TT[fT[4]] = fT[12];
+ ... (27 more added lines; see GitHub link above)
```
