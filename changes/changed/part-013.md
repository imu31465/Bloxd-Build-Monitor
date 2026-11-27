# Changed — Bundle Modifications Report (Part 013 / 082)

- **Updated at**: `2026-11-28T02:07 JST`
- **Part**: `13 / 82` (**296** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 012](part-012.md) · [Part 014 →](part-014.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/225.js` (u88b9b.1969c480 → 1yqdn.8419f1e1 · continued)

- **File**: `bundles/bloxd.io/chunks/js/225.js` (50 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789)

#### 41. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L374-L379` → after: `L839-L846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L839-L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/225.js#L839-L846) · [Before (L374-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/225.js#L374-L379)

```diff
-       async storePlayerPack(ee) {
-         try {
-           return null === ee ? (await this.host.store.removeItem(Ke.e), !0) : await this.host.store.setItem(Ke.e, ee)
-         } catch (ie) {
-           return this.host.warn("the texture pack wasn't stored: it shows until the page reloads", ie), !1
-         }
+     }
+     class ii {
+       constructor(WW, iW, OW) {
+         this.closed = WW, this.iZ = iW, this.menu = OW, this.view = void 0, this.dismiss = () => {
+           this.closePanel() && this.menu.dismiss()
+         }, this.onMenuClosed = () => {
+           this.closePanel()
+         }, this.view = WW
```

#### 42. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L381-L385` → after: `L848-L849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L848-L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/225.js#L848-L849) · [Before (L381-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/225.js#L381-L385)

```diff
-       change(ee, ie) {
-         if (!this.xf) {
-           this.changes++, this.onGamePack = ie, this.state = ee;
-           for (const ee of [...this.listeners.keys()]) this.deliver(ee)
-         }
+       getView() {
+         return this.view
```

#### 43. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L387-L395` → after: `L851-L861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L851-L861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/225.js#L851-L861) · [Before (L387-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/225.js#L387-L395)

```diff
-       deliver(ee) {
-         if (!this.xf && this.listeners.has(ee) && this.listeners.get(ee) !== this.state) {
-           this.listeners.set(ee, this.state);
-           try {
-             ee(this.state)
-           } catch (ie) {
-             this.host.warn("a texture pack listener threw", ie)
-           }
-         }
+       show(WW) {
+         this.set(WW), this.menu.open(this)
+       }
+       close() {
+         this.closePanel() && this.menu.close()
+       }
+       set(WW) {
+         this.view = WW, this.iZ(WW)
+       }
+       closePanel() {
+         return !!this.view.open && (this.dropPresses(), this.set(this.closed), !0)
```

#### 44. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L398-L402` → after: `L864-L871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L864-L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/225.js#L864-L871) · [Before (L398-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/225.js#L398-L402)

```diff
-     async function Te(ee, ie, He) {
-       const ye = (0, Fe.c)(await He.fetchPack(ie));
-       if (null !== ye) return {
-         pack: ye,
-         key: ie
+     const Oi = "greenvilleDepotView",
+       mi = {
+         open: !1,
+         explosives: [],
+         picked: 0,
+         selected: 0,
+         level: 1,
+         line: "demolitionDepotIntro"
```

#### 45. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L404-L410` → after: `L873-L915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L873-L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/225.js#L873-L915) · [Before (L404-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/225.js#L404-L410)

```diff
-       const be = await He.packKey(ee);
-       if (null === be) return null;
-       const Me = (0, Fe.c)(await He.fetchPack(be));
-       if (null === Me) throw new Error(`no texture pack at ${be}`);
-       return {
-         pack: Me,
-         key: be
+     class Ei extends ii {
+       constructor(WW, iW, OW, mW) {
+         super(mi, WW, iW), this.picks = void 0, this.select = WW => {
+           this.set({
+             ...this.getView(),
+             selected: WW
+           })
+         }, this.Kl = WW => {
+           const iW = this.getView();
+           WW !== iW.picked && (this.picks.pushLatest(WW), this.set({
+             ...iW,
+             picked: WW,
+             line: "demolitionGrubnikPicked"
+           }))
+         }, this.onAnswersTimedOut = () => {
+           const WW = this.getView();
+ ... (27 more added lines; see GitHub link above)
```

#### 46. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L415` → after: `L1041-L1182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R1041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L1041-L1182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/225.js#L1041-L1182) · [Before (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/225.js#L415)

```diff
-       return null === ee || ee.metaData.id === be.b
+       let {
+         icon: iW,
+         name: OW,
+         selected: mW,
+         locked: EW = !1,
+         className: NW,
+         onSelect: PW,
+         children: LW
+       } = WW;
+       return (0, JW.jsxs)("button", {
+         type: "button",
+         className: kW()("GreenvilleBoardTile", NW, {
+           Selected: mW,
+           Locked: EW
+         }),
+         "aria-pressed": mW,
+ ... (126 more added lines; see GitHub link above)
```

#### 47. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L419-L420` → after: `L1186-L1311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R1186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L1186-L1311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/225.js#L1186-L1311) · [Before (L419-L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/225.js#L419-L420)

```diff
-       const ie = (0, Fe.c)(ee);
-       return pe(ie) ? null : ie
+       let {
+         controller: iW
+       } = WW;
+       const OW = (0, SW.g)(Oi, iW.getView()),
+         {
+           t: mW
+         } = (0, yW.B)();
+       return 0 === OW.explosives.length ? null : (0, JW.jsxs)(li, {
+         open: OW.open,
+         onDismiss: iW.dismiss,
+         title: mW("greenvilleGame:demolitionDepotTitle"),
+         className: "GreenvilleDepotBoard",
+         headerExtra: (0, JW.jsx)("span", {
+           className: "GreenvilleBoardLevel",
+           children: mW("greenvilleGame:demolitionDepotLevel", {
+             level: OW.level
+ ... (110 more added lines; see GitHub link above)
```

#### 48. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L422-L424` → after: `L1313-L1320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R1313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L1313-L1320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/225.js#L1313-L1320) · [Before (L422-L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/225.js#L422-L424)

```diff
-     async function ze(ee) {
-       let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Me.d;
-       if (null === ee.pack) return null;
+ 
+     function Hi(WW) {
+       let {
+         car: iW,
+         out: OW,
+         awaiting: mW,
+         controller: EW
+       } = WW;
```

#### 49. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L426-L428` → after: `L1322-L1344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R1322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L1322-L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/225.js#L1322-L1344) · [Before (L426-L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/225.js#L426-L428)

```diff
-         packAssets: ye
-       } = await Promise.all([He.e(227), He.e(52)]).then((() => He(64049)));
-       return ye(ee, ie)
+         t: NW
+       } = (0, yW.B)();
+       return (0, JW.jsx)(Ui, {
+         icon: (0, JW.jsx)(xi, {
+           item: iW
+         }),
+         name: (0, JW.jsx)(Zi, {
+           item: iW
+         }),
+         children: (0, JW.jsxs)("div", {
+           className: "GreenvilleBoardActions",
+           children: [OW && (0, JW.jsx)("span", {
+             className: "GreenvilleGarageOutStamp",
+             children: NW("greenvilleGame:dealershipGarageOut")
+           }), (0, JW.jsx)(Pi.f, {
+             disabled: OW && mW,
+ ... (7 more added lines; see GitHub link above)
```

#### 50. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L432-L436` → after: `L1348-L1391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R1348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L1348-L1391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/225.js#L1348-L1391) · [Before (L432-L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/225.js#L432-L436)

```diff
-       const ie = (0, Ke.v)();
-       return null === ie ? () => {} : (ie.onmessage = ie => {
-         ee.readPlayerPack((0, Ue.f)(ie.data))
-       }, () => {
-         ie.close()
+       let {
+         controller: iW
+       } = WW;
+       const OW = (0, SW.g)(Yi, iW.getView()),
+         {
+           t: mW
+         } = (0, yW.B)(),
+         EW = 0 === OW.cars.length;
+       return (0, JW.jsxs)(li, {
+         open: OW.open,
+         onDismiss: iW.dismiss,
+         title: mW("greenvilleGame:dealershipGarageTitle"),
+         className: "GreenvilleGarageBoard",
+         status: {
+           speaker: mW("greenvilleGame:dealershipDelName"),
+           line: mW(EW ? "greenvilleGame:dealershipGarageEmpty" : `greenvilleGame:${OW.line}`)
+ ... (28 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/226.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/226.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65)

#### 1. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/226.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/226.js#L4)

```diff
-   34975: (ee, ie, He) => {
+   37317: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L6-L9` → after: `L6-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/226.js#L6-L9) · [Before (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/226.js#L6-L9)

```diff
-       packDisplayName: () => Te,
-       packModelMessage: () => pe,
-       packModelSummary: () => ze,
-       refusedPackModels: () => Xe
+       capturePreviewPicture: () => UW,
+       holdPreviewsLow: () => PW.d,
+       openLiveFigure: () => jW,
+       rasterNametag: () => KW
```

#### 3. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L11-L25` → after: `L11-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L11-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/226.js#L11-L94) · [Before (L11-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/226.js#L11-L25)

```diff
-     var ye = He(34984),
-       be = He(34988);
-     const Me = "DRACO",
-       Ke = 0,
-       Ue = 1,
-       Fe = 0,
-       Je = 1,
-       oe = 32768;
- 
-     function Re(ee) {
-       const ie = new DataView(ee.buffer, ee.byteOffset, ee.byteLength);
-       let He = 0;
-       const ye = () => {
-           if (He >= ee.byteLength) throw new RangeError("past the stream");
-           return ee[He++]
+     var mW = OW(1230),
+       EW = OW(3540),
+       NW = OW(35264),
+       PW = OW(37325),
+       LW = OW(37327),
+       cW = OW(37336),
+       wW = OW(37432),
+       tW = OW(4681);
+     const ZW = 480,
+       xW = 16,
+       lW = {
+         minGapMs: 250,
+         now: () => performance.now(),
+         skip: PW.t
+       },
+       AW = 30,
+ ... (68 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L27-L30` → after: `L96-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L96-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/226.js#L96-L158) · [Before (L27-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/226.js#L27-L30)

```diff
-         be = () => {
-           if (He + 4 > ee.byteLength) throw new RangeError("past the stream");
-           const ye = ie.getUint32(He, !0);
-           return He += 4, ye
+         close: () => {
+           tW = !0, wW.close()
+         }
+       }
+     }
+ 
+     function UW(WW, iW) {
+       return new Promise((OW => {
+         const mW = EW => {
+           (0, PW.b)((() => {
+             if (!iW()) return void OW(null);
+             const NW = WW.isConnected ? function(WW) {
+               let {
+                 canvas: iW,
+                 x: OW,
+                 width: mW
+ ... (47 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L32-L82` → after: `L160-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L160-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/226.js#L160-L200) · [Before (L32-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/226.js#L32-L82)

```diff
-         Re = () => {
-           let ee = 0;
-           for (let ie = 0; ie < 35; ie += 7) {
-             const He = ye();
-             if (ee += (127 & He) * 2 ** ie, 0 === (128 & He)) return ee
-           }
-           throw new RangeError("varint too long")
-         };
-       try {
-         for (let ee = 0; ee < Me.length; ee++)
-           if (ye() !== Me.charCodeAt(ee)) return null;
-         const ie = ye(),
-           ke = ye(),
-           qe = ye(),
-           fe = ye(),
-           Te = ye() | ye() << 8;
- ... (35 more removed lines; see GitHub link above)
+         mW = document.createElement("canvas"),
+         [EW, NW] = (0, cW.h)((0, cW.i)(cW.d.Nametag, OW), mW, !0);
+       return 0 === EW || 0 === NW ? null : {
+         src: mW.toDataURL("image/png"),
+         width: EW,
+         height: NW
+       }
+     }
+   },
+   35270: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => LW,
+       e: () => EW,
+       f: () => ZW
+     });
+     var mW = OW(1659);
+ ... (25 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L84-L90` → after: `L202-L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L202-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/226.js#L202-L293) · [Before (L84-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/226.js#L84-L90)

```diff
-         if (fe !== Je) return null;
-         ye(), ke < 2 && Re();
-         const Xe = Re();
-         return {
-           faces: Re(),
-           vertices: Xe,
-           minor: ke
+       };
+ 
+     function cW(WW, iW) {
+       WW instanceof Promise ? WW.then(iW).catch((WW => {
+         console.error("Couldn't open the preview", WW)
+       })) : iW(WW)
+     }
+     class wW {
+       constructor(WW) {
+         this.opened = null, this.view = null, this.size = null, this.closed = !1, cW(WW, (WW => {
+           this.closed ? WW.close() : (this.opened = WW, null !== this.size && WW.resize(this.size.width, this.size.height), null !== this.view && WW.show(this.view))
+         }))
+       }
+       show(WW) {
+         var iW;
+         this.view = WW, null === (iW = this.opened) || void 0 === iW || iW.show(WW)
+ ... (76 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L92-L96` → after: `L295-L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L295-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/226.js#L295-L350) · [Before (L92-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/226.js#L92-L96)

```diff
-       } catch {
-         return null
-       }
-     }
- 
+         return this.host
+       }
+       openMob(WW) {
+         return new wW(this.current().openMob(WW))
+       }
+       openPet(WW) {
+         return new wW(this.current().openPet(WW))
+       }
+       openMobLineup(WW) {
+         return new wW(this.current().openMobLineup(WW))
+       }
+       sharesCharacter() {
+         return !0 === this.current().sharesCharacter
+       }
+       openCharacter(WW, iW) {
+         return new tW(this.current().openCharacter(WW, iW))
+ ... (40 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L98-L126` → after: `L352-L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L352-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/226.js#L352-L370) · [Before (L98-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/226.js#L98-L126)

```diff
-       var ye, be;
-       if (null === (ye = null === (be = ee.extensionsUsed) || void 0 === be ? void 0 : be.includes("KHR_draco_mesh_compression")) || void 0 === ye || !ye) return null;
-       for (const Te of null !== (Me = ee.meshes) && void 0 !== Me ? Me : []) {
-         var Me;
-         for (const ye of Te.primitives) {
-           var Ke, Ue, Fe, Je, oe, ke;
-           const be = null === (Ke = ye.extensions) || void 0 === Ke ? void 0 : Ke.KHR_draco_mesh_compression;
-           if ("object" !== typeof be || null === be) continue;
-           const Me = null === (Ue = ee.bufferViews) || void 0 === Ue ? void 0 : Ue[be.bufferView];
-           if (null === ie || void 0 === Me) return qe;
-           const Te = null !== (Fe = Me.byteOffset) && void 0 !== Fe ? Fe : 0,
-             pe = Re(ie.subarray(Te, Te + Me.byteLength));
-           if (null === pe && !He) continue;
-           const Xe = null !== (Je = ee.accessors) && void 0 !== Je ? Je : [],
-             ze = null === (oe = Xe[ye.attributes.POSITION]) || void 0 === oe ? void 0 : oe.count,
-             Be = void 0 === ye.indices ? 0 : null === (ke = Xe[ye.indices]) || void 0 === ke ? void 0 : ke.count;
- ... (13 more removed lines; see GitHub link above)
+       if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(WW, iW).getContext("2d", OW);
+       const mW = document.createElement("canvas");
+       return mW.width = WW, mW.height = iW, mW.getContext("2d", OW)
+     }
+ 
+     function EW(WW, iW) {
+       return WW.getContext("2d", iW)
+     }
+     OW.d(iW, {
+       c: () => EW,
+       g: () => mW
+     })
+   },
+   37327: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => NW
+ ... (3 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L129-L152` → after: `L373-L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L373-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/226.js#L373-L409) · [Before (L129-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/226.js#L129-L152)

```diff
-       return `Texture pack "${ee}": model "${ie}" was not loaded because it ${He}. The default model is used instead.`
-     }
- 
-     function Xe(ee, ie, He) {
-       let {
-         strictDraco: Me = !1
-       } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
-       const Ke = {};
-       for (const [Ue, Fe] of Object.entries(ie)) {
-         let ie;
-         if (Fe.startsWith("data:")) try {
-           const ee = new Uint8Array((0, be.p)(Fe));
-           if (ie = (0, ye.e)(ee), null === ie) {
-             const {
-               json: He,
-               bin: ye
- ... (8 more removed lines; see GitHub link above)
+       let [NW, PW] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [WW, iW], LW = Math.min(Number.isFinite(OW) && OW > 0 ? OW : 1, EW);
+       const cW = Math.max(0, NW, WW) * Math.max(0, PW, iW) * LW * LW;
+       return cW > mW && (LW *= Math.sqrt(mW / cW)), [Math.max(1, Math.floor(Math.max(0, WW) * LW)), Math.max(1, Math.floor(Math.max(0, iW) * LW))]
+     }
+   },
+   37325: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => jW,
+       d: () => tW,
+       g: () => lW,
+       j: () => ZW,
+       l: () => UW,
+       o: () => AW,
+       r: () => bW,
+       t: () => xW
+     });
+ ... (21 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L156-L162` → after: `L413-L464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L413-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/226.js#L413-L464) · [Before (L156-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/226.js#L156-L162)

```diff
-     function ze(ee, ie) {
-       const He = Object.keys(ie);
-       if (0 === He.length) return null;
-       if (1 === He.length) return pe(ee, He[0], ie[He[0]]);
-       const ye = He.map((ee => `"${ee}" ${ie[ee]}`)).join("; ");
-       return `Texture pack "${ee}": ${He.length} models were not loaded (${ye}). The default models are used instead.`
-     }
+     function lW(WW) {
+       PW = WW
+     }
+ 
+     function AW() {
+       return NW > 0
+     }
+ 
+     function bW(WW) {
+       return !(NW > 0 && (PW || WW - cW < 1e3 / mW - EW)) && (cW = WW, !0)
+     }
+ 
+     function jW(WW) {
+       return wW.push(WW), () => {
+         wW = wW.filter((iW => iW !== WW))
+       }
+ ... (36 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/227.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/227.js` (36 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c)

#### 1. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L4-L8` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/227.js#L4-L6) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/227.js#L4-L8)

```diff
-   34984: (ee, ie, He) => {
-     He.d(ie, {
-       e: () => Ye,
-       i: () => Ae,
-       l: () => Pe
+   37547: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       GiftOpening: () => Ni
```

#### 2. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L10` → after: `L8-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L8-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/227.js#L8-L23) · [Before (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/227.js#L10)

```diff
-     var ye = He(34988);
+     var mW = OW(62),
+       EW = OW(1089),
+       NW = OW.n(EW),
+       PW = OW(1172),
+       LW = OW(25),
+       cW = OW(1556),
+       wW = OW(35264),
+       tW = OW(5238),
+       ZW = OW(1532),
+       xW = OW(1391),
+       lW = OW(3291),
+       AW = OW(3627),
+       bW = OW(3247),
+       jW = OW(1107),
+       UW = OW(4311),
+       kW = OW(1283);
```

#### 3. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L12-L67` → after: `L25-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L25-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/227.js#L25-L27) · [Before (L12-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/227.js#L12-L67)

```diff
-         fileBytes: 4194304,
-         vertices: 65535,
-         indices: 196608,
-         accessorElements: 196608,
-         primitives: 64,
-         nodes: 128,
-         meshes: 64,
-         materials: 8,
-         images: 8,
-         imageSide: 1024
-       },
-       Me = {
-         items: 1024,
-         perFile: 1024,
-         surfaces: 256,
-         few: 64,
- ... (40 more removed lines; see GitHub link above)
+       festive: "\ud83c\udf84 \u26c4 \ud83c\udf81",
+       sweater: "\u2744"
+     };
```

#### 4. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L70-L74` → after: `L30-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L30-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/227.js#L30-L93) · [Before (L70-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/227.js#L70-L74)

```diff
-       return ee.toLocaleString("en-US")
-     }
- 
-     function Xe(ee, ie, He) {
-       return ee > ie ? `has ${pe(ee)} ${He} (the limit is ${pe(ie)})` : null
+       let {
+         wrap: iW,
+         className: OW,
+         rootRef: mW,
+         bodyRef: EW,
+         lidRef: PW,
+         seamRef: LW
+       } = WW;
+       const cW = sW[iW];
+       return (0, kW.jsxs)("div", {
+         className: NW()("GiftBox", `GiftBoxWrap_${iW}`, OW),
+         ref: mW,
+         children: [(0, kW.jsx)("div", {
+           className: "GiftBoxPlinth"
+         }), (0, kW.jsxs)("div", {
+           className: "GiftBoxBody",
+ ... (48 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L78` → after: `L100-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L100-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/227.js#L100-L107) · [Before (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/227.js#L78)

```diff
-       return Number.isInteger(ee) && ee >= 0 && ee < (null !== ie && void 0 !== ie ? ie : 0)
+       const [OW] = iW.cosmeticPacks;
+       return void 0 !== OW ? (0, YW.g)(OW) : iW.superDays > 0 ? WW("paymentHistory:superRankDays", {
+         count: iW.superDays
+       }) : iW.hyperDays > 0 ? WW("paymentHistory:hyperRankDays", {
+         count: iW.hyperDays
+       }) : WW("paymentHistory:premiumCurrency", {
+         count: iW.premiumCurrency
+       })
```

#### 6. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L82` → after: `L111-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L111-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/227.js#L111-L124) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/227.js#L82)

```diff
-       return Number.isInteger(ee) && ee >= 0
+       var iW, OW;
+       const {
+         t: mW
+       } = (0, PW.B)(), EW = SW.g.find((iW => iW.id === WW.message));
+       return {
+         message: void 0 === EW ? null : mW(EW.key, {
+           name: WW.recipientName,
+           level: null !== (iW = WW.senderLevel) && void 0 !== iW ? iW : 1,
+           tier: null !== (OW = WW.tierLabel) && void 0 !== OW ? OW : ""
+         }),
+         level: null === WW.senderLevel || "levelFlex" === (null === EW || void 0 === EW ? void 0 : EW.kind) ? null : mW("giftOpening:gifterLevel", {
+           level: WW.senderLevel
+         })
+       }
```

#### 7. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L85-L86` → after: `L127-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L127-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/227.js#L127-L152) · [Before (L85-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/227.js#L85-L86)

```diff
-     function Ee(ee, ie) {
-       return void 0 !== ee && (!Array.isArray(ee) || ee.length > ie)
+     function JW(WW) {
+       let {
+         gift: iW,
+         shown: OW
+       } = WW;
+       const {
+         t: mW
+       } = (0, PW.B)(), {
+         message: EW,
+         level: LW
+       } = TW(iW);
+       return (0, kW.jsxs)("div", {
+         className: NW()("GiftOpeningCard", {
+           GiftOpeningCardShown: OW
+         }),
+         children: [(0, kW.jsx)("div", {
+ ... (10 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L89-L90` → after: `L155-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L155-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/227.js#L155-L171) · [Before (L89-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/227.js#L89-L90)

```diff
-     function ge(ee, ie) {
-       return "object" === typeof ee && null !== ee && Object.keys(ee).length > ie
+     function hW(WW) {
+       let {
+         gift: iW
+       } = WW;
+       const {
+         message: OW,
+         level: mW
+       } = TW(iW);
+       return (0, kW.jsxs)(kW.Fragment, {
+         children: [null !== OW && (0, kW.jsx)("div", {
+           className: "GiftOpeningIntroMessage SmallTextLight",
+           children: `"${OW}"`
+         }), null !== mW && (0, kW.jsx)("div", {
+           className: "GiftOpeningIntroLevel SmallTextBold",
+           children: mW
+         })]
+ ... (1 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L94-L95` → after: `L175-L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L175-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/227.js#L175-L214) · [Before (L94-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/227.js#L94-L95)

```diff
-       var ie;
-       return `${ee.normalized?"normalized ":""}${null!==(ie=ye.d[ee.componentType])&&void 0!==ie?ie:ee.componentType} ${ee.type}`
+       let {
+         gift: iW,
+         preview: OW,
+         analyticsValue: mW,
+         onReplay: EW,
+         onClose: NW
+       } = WW;
+       const {
+         t: wW
+       } = (0, PW.B)(), {
+         gameState: tW
+       } = (0, LW.p)(["gameState"]), lW = !OW && iW.items.cosmeticPacks.length > 0 && !(0, LW.e)(tW);
+       return (0, kW.jsxs)("div", {
+         className: "GiftOpeningButtons",
+         children: [OW && (0, kW.jsxs)(ZW.f, {
+           className: "GiftOpeningButton",
+ ... (24 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L98-L99` → after: `L234-L551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L234-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/227.js#L234-L551) · [Before (L98-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/227.js#L98-L99)

```diff
-     function de(ee) {
-       const ie = ie => {
+     function eW(WW, iW) {
+       return "sting" === WW ? uW[iW] : oW[WW]
+     }
+ 
+     function vW(WW, iW) {
+       let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+       try {
+         nW.c.play(eW(WW, iW), dW[WW]).rate(Math.pow(2, 2 * OW / 12))
+       } catch (mW) {
+         console.warn("[gift-opening] a sound failed to play", mW)
+       }
+     }
+     const gW = "cubic-bezier(0.22, 1, 0.36, 1)";
+     class DW {
+       constructor(WW, iW) {
+         this.parts = WW, this.options = iW, this.phase = "arrive", this.timers = [], this.animations = [], this.opened = !1, this.popped = !1
+ ... (302 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L101-L103` → after: `L553-L566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L553-L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/227.js#L553-L566) · [Before (L101-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/227.js#L101-L103)

```diff
-         return null !== (He = ee[ie]) && void 0 !== He ? He : -1
-       };
-       return 255 === ie(0) && 216 === ie(1) ? "JPEG" : 82 === ie(0) && 73 === ie(1) && 87 === ie(8) && 69 === ie(9) ? "WebP" : 171 === ie(0) && 75 === ie(1) && 84 === ie(2) && 88 === ie(3) ? "KTX2" : "non-PNG"
+         (this.clearTimers(), this.cancelAnimations(), this.popped) || (null === (WW = this.options.fx) || void 0 === WW || WW.clear());
+         this.markOpened(), this.parts.body.style.opacity = "0", this.parts.character.style.opacity = "1", this.parts.character.style.transform = "none", this.setPhase("done")
+       }
+       cancelAnimations() {
+         for (const WW of this.animations) WW.cancel();
+         this.animations = []
+       }
+       clearTimers() {
+         for (const WW of this.timers) clearTimeout(WW);
+         this.timers = []
+       }
+       dispose() {
+         this.clearTimers(), this.cancelAnimations(), this.parts.body.style.removeProperty("opacity"), this.parts.character.style.removeProperty("opacity"), this.parts.character.style.removeProperty("transform")
+       }
```

#### 12. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L107` → after: `L615-L619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L615-L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/227.js#L615-L619) · [Before (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/227.js#L107)

```diff
-       return ee.length >= 24 && [137, 80, 78, 71, 13, 10, 26, 10].every(((ie, He) => ee[He] === ie)) && 73 === ee[12] && 72 === ee[13] && 68 === ee[14] && 82 === ee[15]
+       const iW = pW[WW];
+       return {
+         ...iW,
+         burstAt: iW.chargeMs + iW.hitStopMs
+       }
```

#### 13. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L110-L111` → after: `L627-L634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L627-L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/227.js#L627-L634) · [Before (L110-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/227.js#L110-L111)

```diff
-     function te(ee) {
-       return /^[aeiou]/i.test(ee) ? `an ${ee}` : `a ${ee}`
+     function XW(WW, iW, OW) {
+       const mW = document.createElement("canvas"),
+         EW = Math.ceil(WW * iW);
+       mW.width = EW, mW.height = EW;
+       const NW = mW.getContext("2d");
+       return NW && OW(NW, EW), {
+         image: mW
+       }
```

#### 14. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L114-L116` → after: `L637-L640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L637-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/227.js#L637-L640) · [Before (L114-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/227.js#L114-L116)

```diff
-     function Ze(ee) {
-       const ie = ee.byteStride;
-       return void 0 === ie || Number.isInteger(ie) && ie >= 4 && ie <= 252 && ie % 4 === 0
+     function BW(WW, iW) {
+       return XW(16, iW, ((iW, OW) => {
+         iW.fillStyle = WW, iW.fillRect(.3 * OW, 0, .4 * OW, OW)
+       }))
```

#### 15. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L120-L124` → after: `L644-L646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L644-L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/227.js#L644-L646) · [Before (L120-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/227.js#L120-L124)

```diff
-       var ye, be;
-       const Me = null === (ye = ee.bufferViews) || void 0 === ye ? void 0 : ye[He];
-       if (!Me || !ie || 0 !== Me.buffer) return null;
-       const Ke = null !== (be = Me.byteOffset) && void 0 !== be ? be : 0;
-       return !Be(Ke) || !Be(Me.byteLength) || Ke + Me.byteLength > ie.byteLength ? null : ie.subarray(Ke, Ke + Me.byteLength)
+       return XW(14, OW, ((OW, mW) => {
+         OW.fillStyle = iW, OW.fillRect(0, 0, mW, mW), OW.fillStyle = WW, OW.fillRect(0, 0, mW, .35 * mW)
+       }))
```

#### 16. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L128-L139` → after: `L650-L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L650-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/227.js#L650-L652) · [Before (L128-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/227.js#L128-L139)

```diff
-       var He, be, Me;
-       const Ke = ye.m[ie.type],
-         Ue = ye.c[ie.componentType];
-       if (!Ke || !Ue || !Number.isInteger(ie.count) || ie.count < 0) return !1;
-       if (void 0 === ie.bufferView) return !0;
-       const Fe = null === (He = ee.bufferViews) || void 0 === He ? void 0 : He[ie.bufferView],
-         Je = null !== (be = ie.byteOffset) && void 0 !== be ? be : 0;
-       if (!Fe || !Be(Je) || Je % Ue !== 0) return !1;
-       const oe = Ke * Ue,
-         Re = null !== (Me = Fe.byteStride) && void 0 !== Me ? Me : oe;
-       if (Re < oe) return !1;
-       return (0 === ie.count ? 0 : Je + Re * (ie.count - 1) + oe) <= Fe.byteLength
+       return XW(18, iW, ((iW, OW) => {
+         iW.fillStyle = WW, iW.beginPath(), iW.moveTo(OW / 2, 0), iW.lineTo(.85 * OW, .55 * OW), iW.lineTo(OW / 2, OW), iW.lineTo(.2 * OW, .45 * OW), iW.closePath(), iW.fill(), iW.fillStyle = "rgba(255,255,255,0.55)", iW.beginPath(), iW.moveTo(OW / 2, 0), iW.lineTo(.6 * OW, .5 * O … [truncated]
+       }))
```

#### 17. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L142-L143` → after: `L655-L665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L655-L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/227.js#L655-L665) · [Before (L142-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/227.js#L142-L143)

```diff
-     function Pe(ee) {
-       return ee > be.fileBytes ? `is ${(ee/Ke).toFixed(1)} MiB (the limit is ${be.fileBytes/Ke} MiB)` : null
+     function GW(WW, iW) {
+       return XW(arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 20, iW, ((iW, OW) => {
+         const mW = OW / 2;
+         iW.fillStyle = WW, iW.beginPath();
+         for (let WW = 0; WW < 10; WW++) {
+           const OW = WW % 2 === 0 ? mW : .45 * mW,
+             EW = -Math.PI / 2 + WW * Math.PI / 5;
+           iW.lineTo(mW + Math.cos(EW) * OW, mW + Math.sin(EW) * OW)
+         }
+         iW.closePath(), iW.fill()
+       }))
```

#### 18. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L147-L219` → after: `L669-L928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L669-L928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/227.js#L669-L928) · [Before (L147-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/227.js#L147-L219)

```diff
-       try {
-         return function(ee, ie) {
-           var He, Ke, Re, pe, Be, Pe, Ae, Ye, Ve, ae, ce, xe, Le, Ce, ve, ue, me;
-           const le = Array.isArray(ee.extensionsUsed) && ee.extensionsUsed.includes("KHR_draco_mesh_compression");
-           if (function(ee, ie) {
-               var He, ye;
-               const {
-                 items: be,
-                 perFile: Ke,
-                 surfaces: Ue,
-                 few: Fe,
-                 bounds: Je,
-                 attributeMembers: oe
-               } = Me;
-               if (Ee(ee.extensionsRequired, Fe) || Ee(ee.animations, 1 / 0) || Ee(ee.skins, 1 / 0)) return !0;
-               if (null !== (He = ee.animations) && void 0 !== He && He.length || null !== (ye = ee.skins) && void 0 !== ye && ye.length) return !1;
- ... (57 more removed lines; see GitHub link above)
+       return XW(arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 24, iW, ((iW, OW) => {
+         const mW = iW.createRadialGradient(OW / 2, OW / 2, 0, OW / 2, OW / 2, OW / 2);
+         mW.addColorStop(0, "rgba(255,255,255,1)"), mW.addColorStop(.25, WW), mW.addColorStop(1, "rgba(0,0,0,0)"), iW.fillStyle = mW, iW.fillRect(0, 0, OW, OW)
+       }))
+     }
+     const aW = {
+       classic: WW => [BW("#e63946", WW), BW("#ffffff", WW), BW("#ffd166", WW), BW("#2a9d8f", WW), GW("#ffd166", WW, 14)],
+       blocks: WW => [qW("#6abe30", "#8a5a33", WW), qW("#8a5a33", "#6d4426", WW), qW("#9da3a6", "#7b8083", WW), qW("#7ff3f0", "#3fb7c0", WW)],
+       gems: WW => [RW("#b673ff", WW), RW("#ff7ad9", WW), RW("#6fe0ff", WW), RW("#ffffff", WW)],
+       stars: WW => [GW("#fff6b0", WW), GW("#ffffff", WW, 14), GW("#9fd0ff", WW, 12), IW("#9fd0ff", WW, 16)],
+       legend: WW => [BW("#ffc83d", WW), BW("#ff5d8f", WW), BW("#5ab8ff", WW), BW("#7cf29a", WW), GW("#ffc83d", WW), GW("#fff4c2", WW, 14)],
+       sweater: WW => [IW("#ffffff", WW, 18), IW("#dff3ff", WW, 12), GW("#ffffff", WW, 12)],
+       festive: WW => ["\ud83c\udf84", "\u26c4", "\ud83c\udf81", "\u2744\ufe0f", "\u2b50"].map((iW => function(WW, iW) {
+         return XW(26, iW, ((iW, OW) => {
+           iW.font = `${Math.round(.8*OW)}px sans-serif`, iW.textAlign = "center", iW.textBaseline = "middle", iW.fillText(WW, OW / 2, OW / 2 + .05 * OW)
+         }))
+ ... (244 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L221-L223` → after: `L930-L979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L930-L979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/227.js#L930-L979) · [Before (L221-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/227.js#L221-L223)

```diff
-           for (const [ye, be] of(null !== (Ie = ee.bufferViews) && void 0 !== Ie ? Ie : []).entries()) {
-             var Ie;
-             if (!we(ee, ie, ye) || !Ze(be)) return Ue
+           WW.globalAlpha = 1, WW.globalCompositeOperation = "source-over"
+         }
+       }
+     }
+     var Wi = OW(3224),
+       ii = OW(1653),
+       Oi = OW(1659),
+       mi = OW(3184);
+     const Ei = 5e3;
+ 
+     function Ni(WW) {
+       let {
+         request: iW
+       } = WW;
+       const {
+         t: OW
+ ... (34 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L225-L230` → after: `L981-L983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L981-L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/227.js#L981-L983) · [Before (L225-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/227.js#L225-L230)

```diff
-           const he = null !== (Pe = ee.accessors) && void 0 !== Pe ? Pe : [];
-           for (const ye of he) {
-             if (void 0 !== ye.sparse) return "uses sparse accessors";
-             const ie = Number.isInteger(ye.count) ? Xe(ye.count, be.accessorElements, "elements in an accessor") : null;
-             if (ie) return ie;
-             if (!De(ee, ye)) return Ue
+           return {
+             cosmetics: PW,
+             badge: mW
```

#### 21. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L232-L255` → after: `L985-L1045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L985-L1045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/227.js#L985-L1045) · [Before (L232-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/227.js#L232-L255)

```diff
-           const Ne = null !== (Ae = ee.scenes) && void 0 !== Ae ? Ae : [];
-           if (1 !== Ne.length) return `has ${Ne.length} scenes`;
-           const Ge = (0, ye.u)(ee);
-           if (void 0 !== Ge && 0 !== Ge) return Ue;
-           const re = null !== (Ye = ee.nodes) && void 0 !== Ye ? Ye : [],
-             Qe = null !== (Ve = ee.meshes) && void 0 !== Ve ? Ve : [],
-             ei = null !== (ae = ee.materials) && void 0 !== ae ? ae : [],
-             ii = null !== (ce = ee.textures) && void 0 !== ce ? ce : [],
-             Hi = null !== (xe = ee.images) && void 0 !== xe ? xe : [],
-             yi = null !== (Le = null !== (Ce = null !== (ve = Xe(re.length, be.nodes, "nodes")) && void 0 !== ve ? ve : Xe(Qe.length, be.meshes, "meshes")) && void 0 !== Ce ? Ce : Xe(ei.length, be.materials, "materials")) && void 0 !== Le ? Le : Xe(Hi.length, be.images, "images") … [truncated]
-           if (yi) return yi;
-           const bi = new Set;
-           for (const ye of re)
-             for (const ee of null !== (Mi = ye.children) && void 0 !== Mi ? Mi : []) {
-               var Mi;
-               if (!ze(ee, re.length) || bi.has(ee)) return Ue;
- ... (8 more removed lines; see GitHub link above)
+         }(sW.items, {
+           ...EW.getPlayerCosmetics()
+         }))),
+         [gW, pW] = (0, mW.useState)("arrive"),
+         [XW, BW] = (0, mW.useState)(0),
+         [qW, RW] = (0, mW.useState)(!1),
+         [GW, IW] = (0, mW.useState)(!1),
+         [aW, rW] = (0, mW.useState)(!1),
+         zW = (0, mW.useRef)(null),
+         FW = (0, mW.useRef)(null),
+         Ni = {
+           box: (0, mW.useRef)(null),
+           body: (0, mW.useRef)(null),
+           lid: (0, mW.useRef)(null),
+           seam: (0, mW.useRef)(null),
+           character: (0, mW.useRef)(null),
+ ... (45 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L257` → after: `L1047-L1050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR1047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L1047-L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/227.js#L1047-L1050) · [Before (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/227.js#L257)

```diff
-             if (!ze(ye, re.length) || bi.has(ye) || !Ui(ye)) return Ue
+             YW || ((0, cW.reportAnalyticsClick)({
+               id: "gift.open_anim",
+               value: dW
+             }), null === (WW = iW.onOpened) || void 0 === WW || WW.call(iW))
```

#### 23. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L259-L281` → after: `L1052-L1176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR1052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L1052-L1176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/227.js#L1052-L1176) · [Before (L259-L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/227.js#L259-L281)

```diff
-           for (const ye of re) {
-             if (void 0 !== ye.matrix) return "uses node matrices";
-             if (void 0 !== ye.skin) return "uses skins";
-             if (void 0 !== ye.weights) return "uses morph targets";
-             if (void 0 !== ye.mesh && !ze(ye.mesh, Qe.length)) return Ue;
-             const ee = [
-               [ye.translation, 3],
-               [ye.rotation, 4],
-               [ye.scale, 3]
-             ];
-             for (const [ie, He] of ee)
-               if (void 0 !== ie && (!Array.isArray(ie) || ie.length !== He || !ie.every((ee => Number.isFinite(ee))))) return Ue
-           }
-           let Ji = -1,
-             oi = 0,
-             Ri = 0,
- ... (7 more removed lines; see GitHub link above)
+         });
+         return FW.current = NW, NW.arrive(), () => {
+           window.removeEventListener("resize", EW), NW.dispose(), mW && (! function(WW) {
+             if (WW.frameMs.length < 10) return;
+             const iW = [...WW.frameMs].sort(((WW, iW) => WW - iW)),
+               OW = {
+                 frames: iW.length,
+                 medianFps: Math.round(1e3 / Math.max(iW[Math.floor(iW.length / 2)], 1)),
+                 p95FrameMs: Math.round(iW[Math.floor(.95 * iW.length)])
+               };
+             window.giftOpeningFrames = OW, console.info("[gift-opening] frames", OW)
+           }(mW), mW.stop())
+         }
+       }), [XW]);
+       const Pi = () => {
+           (0, KW.d)(iW)
+ ... (109 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L283-L334` → after: `L1178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR1178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L1178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/227.js#L1178) · [Before (L283-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/227.js#L283-L334)

```diff
-               if (4 !== be && 0 !== be) return `uses ${null!==(Ti=fe[be])&&void 0!==Ti?Ti:`mode ${be}`} primitives`;
-               if (void 0 !== He.targets) return "uses morph targets";
-               if (void 0 !== He.material && !ze(He.material, ei.length)) return Ue;
-               const Me = le ? null === (fi = He.extensions) || void 0 === fi ? void 0 : fi.KHR_draco_mesh_compression : void 0;
-               if (Me) {
-                 if (4 !== be) return "uses Draco-compressed points";
-                 if (!we(ee, ie, Me.bufferView) || "object" !== typeof Me.attributes) return Ue
-               }
-               const Ke = He.attributes;
-               if ("object" !== typeof Ke || null === Ke) return Ue;
-               if (void 0 === Ke.POSITION) return "has a primitive with no positions";
-               if (!ze(Ke.POSITION, he.length)) return Ue;
-               const Fe = he[Ke.POSITION].count;
-               for (const [ee, ie] of Object.entries(Ke)) {
-                 if (!ze(ie, he.length)) return Ue;
-                 if (/^(JOINTS|WEIGHTS)_\d+$/.test(ee)) return "uses skins";
- ... (36 more removed lines; see GitHub link above)
+               ("wait" !== gW || ci) && (null === (WW = FW.current) || void 0 === WW || WW.tap())
```

#### 25. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L336-L380` → after: `L1180-L1196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR1180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L1180-L1196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/227.js#L1180-L1196) · [Before (L336-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/227.js#L336-L380)

```diff
-           }
-           let zi = 0,
-             Bi = 0,
-             Ei = 0;
-           for (let ye = 0; ye < re.length; ye++) {
-             const ee = re[ye].mesh;
-             if (void 0 !== ee && Ki.has(ye))
-               for (const ie of Qe[ee].primitives) Ei++, zi += he[ie.attributes.POSITION].count, void 0 !== ie.indices && (Bi += he[ie.indices].count)
-           }
-           const gi = null !== (ue = null !== (me = Xe(zi, be.vertices, "vertices")) && void 0 !== me ? me : Xe(Bi, be.indices, "indices")) && void 0 !== ue ? ue : Xe(Ei, be.primitives, "primitives");
-           if (gi) return gi;
-           for (const ye of ei) {
-             var Oi, di;
-             if (void 0 !== ye.emissiveTexture) return "uses an emissive texture";
-             const ie = null !== (Oi = ye.alphaMode) && void 0 !== Oi ? Oi : "OPAQUE";
-             if ("OPAQUE" !== ie && "MASK" !== ie && "BLEND" !== ie) return Ue;
- ... (29 more removed lines; see GitHub link above)
+           }), ti && (0, kW.jsxs)(ZW.h, {
+             className: "GiftOpeningSkip",
+             onClick: Li,
+             children: [OW("giftOpening:skip"), " ", (0, kW.jsx)(xW.c, {
+               name: "arrow-right"
+             })]
+           }), "done" === gW && (0, kW.jsx)(HW, {
+             gift: sW,
+             preview: YW,
+             analyticsValue: dW,
+             onReplay: () => {
+               BW(XW + 1)
+             },
+             onClose: Pi
+           })]
+         })
+ ... (1 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L384-L394` → after: `L1208-L1340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR1208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L1208-L1340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/227.js#L1208-L1340) · [Before (L384-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/227.js#L384-L394)

```diff
-       const ie = Pe(ee.byteLength);
-       if (ie) return ie;
-       try {
-         const {
-           json: ie,
-           bin: He
-         } = (0, ye.y)(ee);
-         return Ae(ie, He)
-       } catch (He) {
-         if (He instanceof ye.k) return He.reason;
-         throw He
+       var iW;
+       return {
+         ...LW.store,
+         yaw: LW.store.yaw + (null !== (iW = mW.e[WW].previewYaw) && void 0 !== iW ? iW : 0)
+       }
+     }
+     const NW = {
+         yaw: .61 * Math.PI,
+         pitch: Math.PI / 2.05,
+         radius: 30,
+         target: [0, 0, 0]
+       },
+       PW = {
+         ...NW,
+         radius: 33,
+         target: [0, 3.9, 0]
+ ... (117 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L398` → after: `L1344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR1344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/227.js#L1344) · [Before (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/227.js#L398)

```diff
-   34988: (ee, ie, He) => {
+   35264: (WW, iW, OW) => {
```

#### 28. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L400-L409` → after: `L1346-L1348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR1346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L1346-L1348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/227.js#L1346-L1348) · [Before (L400-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/227.js#L400-L409)

```diff
-       c: () => fe,
-       d: () => qe,
-       e: () => pe,
-       i: () => Ke,
-       k: () => Me,
-       m: () => Te,
-       p: () => Re,
-       s: () => ke,
-       u: () => Ue,
-       y: () => oe
+       d: () => mW.d,
+       e: () => mW.e,
+       f: () => mW.f
```

#### 29. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L411-L413` → after: `L1350-L1351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR1350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L1350-L1351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/227.js#L1350-L1351) · [Before (L411-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/227.js#L411-L413)

```diff
-     const ye = 1179937895,
-       be = 1313821514;
-     class Me extends Error {
+     var mW = OW(35270);
+     class EW {
```

#### 30. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L415` → after: `L1353-L1358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR1353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L1353-L1358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/227.js#L1353-L1358) · [Before (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/227.js#L415)

```diff
-         super(`GLB refused: it ${ee}`), this.reason = ee, this.name = "GlbRefused"
+         this.load = WW, this.loaded = null, this.loading = null
+       }
+       run(WW) {
+         return null !== this.loaded ? WW(this.loaded) : (this.loading ??= this.load().then((WW => (this.loaded = WW, WW)), (WW => {
+           throw this.loading = null, WW
+         })), this.loading.then(WW))
```

#### 31. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L418-L420` → after: `L1361-L1375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR1361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L1361-L1375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/227.js#L1361-L1375) · [Before (L418-L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/227.js#L418-L420)

```diff
-     class Ke extends Error {
-       constructor(ee) {
-         super(ee), this.name = "GlbError"
+     class NW {
+       constructor() {
+         this.sharesCharacter = !0, this.mobScene = new EW((() => Promise.all([OW.e(85), OW.e(264), OW.e(263), OW.e(289), OW.e(113), OW.e(290), OW.e(89), OW.e(86), OW.e(287), OW.e(87), OW.e(88), OW.e(297), OW.e(291), OW.e(296), OW.e(294), OW.e(286), OW.e(311), OW.e(260), OW.e(278) … [truncated]
+       }
+       openMob(WW) {
+         return this.mobScene.run((iW => iW.openMobPreview(WW)))
+       }
+       openPet(WW) {
+         return this.mobScene.run((iW => iW.openPetPreview(WW)))
+       }
+       openMobLineup(WW) {
+         return this.mobScene.run((iW => iW.openMobLineupPreview(WW)))
+       }
+       openCharacter(WW, iW) {
+         return this.characterScene.run((OW => OW.openCharacterPreview(WW, iW)))
```

#### 32. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L425` → after: `L1390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR1390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L1390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/227.js#L1390) · [Before (L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/227.js#L425)

```diff
-       return Reflect.get(ee, "scene")
+       return WW === (0, EW.h)().Av ? (0, EW.h)().Dv : WW
```

#### 33. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L431-L443` → after: `L1394-L1504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR1394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L1394-L1504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/227.js#L1394-L1504) · [Before (L431-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/227.js#L431-L443)

```diff
-       var ie;
-       const He = ee instanceof Uint8Array ? ee : new Uint8Array(ee),
-         Ke = function(ee) {
-           const ie = new DataView(ee.buffer, ee.byteOffset, ee.byteLength);
-           if (ee.byteLength < 20 || ie.getUint32(0, !0) !== ye || 2 !== ie.getUint32(4, !0)) return null;
-           const He = Math.min(ie.getUint32(8, !0), ee.byteLength),
-             Me = ie.getUint32(12, !0);
-           if (ie.getUint32(16, !0) !== be || 20 + Me > He) return null;
-           let Ke;
-           try {
-             Ke = JSON.parse((new TextDecoder).decode(ee.subarray(20, 20 + Me)))
-           } catch {
-             return null
+       return !(0, mW.K)(WW) && NW(WW) === (0, EW.h)().Dv
+     }
+     const LW = "gravity";
+ 
+     function cW() {
+       return (0, EW.h)().physics[LW][1]
+     }
+   },
+   37555: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => yW
+     });
+     var mW = OW(37559),
+       EW = OW(182),
+       NW = OW(5615),
+       PW = OW(37563),
+ ... (95 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L445-L471` → after: `L1506-L1507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR1506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L1506-L1507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/227.js#L1506-L1507) · [Before (L445-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/227.js#L445-L471)

```diff
-           return "object" === typeof Ke && null !== Ke ? {
-             json: Ke,
-             jsonEnd: 20 + Me,
-             length: He
-           } : null
-         }(He);
-       if (null === Ke) throw new Me(Je);
-       const Ue = Ke.json,
-         {
-           jsonEnd: oe,
-           length: Re
-         } = Ke,
-         ke = new DataView(He.buffer, He.byteOffset, He.byteLength);
-       let qe = -1,
-         fe = 0;
-       for (let ye = oe; ye < Re;) {
- ... (11 more removed lines; see GitHub link above)
+         };
+         return mW
```

#### 35. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L473-L476` → after: `L1509-L1550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR1509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L1509-L1550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/227.js#L1509-L1550) · [Before (L473-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/227.js#L473-L476)

```diff
-       return {
-         json: Ue,
-         bin: Te,
-         fileBytes: He.byteLength
+       liveHowl() {
+         return this._unloaded ? null : this._howl
+       }
+       loaded() {
+         return "loaded" === this._howl.state()
+       }
+       unloadOnceIdle() {
+         (0, PW.f)(this._howl, (() => {
+           this._unloaded = !0
+         }))
+       }
+       setGlobalVolume(WW) {
+         this._volumeMultiplier.setMultiplierType("globalVolume", WW), this._howl.volume(WW)
+       }
+       _setPannerAttr(WW) {
+         let {
+ ... (26 more added lines; see GitHub link above)
```

#### 36. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L479-L493` → after: `L1553-L1650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR1553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L1553-L1650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/227.js#L1553-L1650) · [Before (L479-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/227.js#L479-L493)

```diff
- 
-     function Re(ee) {
-       const ie = ee.slice(ee.indexOf(",") + 1),
-         He = Uint8Array.fromBase64;
-       if (He) return He(ie).buffer;
-       const ye = atob(ie),
-         be = new Uint8Array(ye.length);
-       for (let Me = 0; Me < ye.length; Me++) be[Me] = ye.charCodeAt(Me);
-       return be.buffer
-     }
-     async function ke(ee) {
-       if (ee.startsWith("data:")) return Re(ee);
-       const ie = await fetch(ee);
-       if (!ie.ok) throw new Ke(`fetching ${ee} failed: ${ie.status} ${ie.statusText}`);
-       return await ie.arrayBuffer()
+     const yW = new class {
+       constructor() {
+         this.stereoSounds = {}, this.spatialSounds = {}, this.spatialVoices = new jW.c, this.idlePreloads = new Set, this.idlePreloadGeneration = 0, AW.l.subscribe("appManagerUpdated|soundVolume", (WW => {
+           const iW = Object.values(this.stereoSounds).concat(Object.values(this.spatialSounds));
+           for (const OW of iW) OW.setGlobalVolume(WW)
+         }))
+       }
+       play(WW, iW) {
+         var OW;
+         let NW, PW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (OW = (0, xW.h)()) || void 0 === OW ? void 0 : OW.Dv,
+           LW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : lW.f,
+           cW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : lW.g,
+           tW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
+         var AW;
+         (0, xW.h)() ? NW = !!Array.isArray(PW) || (0, wW.b)(PW) !== (null === (AW = (0, xW.h)()) || void 0 === AW ? void 0 : AW.Dv): NW = !1;
+         const bW = (0, mW.n)(WW),
+ ... (82 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/228.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/228.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba)

#### 1. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L4-L15` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/228.js#L4-L6) · [Before (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/228.js#L4-L15)

```diff
-   34995: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       animatedBlockTextures: () => Fe,
-       armourAtlasUrl: () => Ke,
-       averageColors: () => Je,
-       blockAtlasUrls: () => Me,
-       blockAtlasWidth: () => ye,
-       buildHash: () => Re,
-       builtTextureIndexFingerprint: () => oe,
-       imagesPerAtlas: () => be,
-       outputHash: () => ke,
-       rotatedBlockTextures: () => Ue
+   53489: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => NW
```

#### 2. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L17-L305` → after: `L8-L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L8-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/228.js#L8-L123) · [Before (L17-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/228.js#L17-L305)

```diff
-     const ye = 8,
-       be = [256, 256, 256, 256, 256, 256, 114],
-       Me = [He(34999), He(35002), He(35004), He(35010), He(35014), He(35016), He(35023)],
-       Ke = He(35027),
-       Ue = {
-         "alloy_kiln_top[rot[1": He(35036),
-         "alloy_kiln_top[rot[2": He(35040),
-         "alloy_kiln_top[rot[3": He(35044),
-         "alloy_kiln_top[rot[4": He(35049),
-         "auto_bench_top[rot[1": He(35055),
-         "auto_bench_top[rot[2": He(35064),
-         "auto_bench_top[rot[3": He(35066),
-         "auto_bench_top[rot[4": He(35069),
-         "belt_tunnel_exit_top[rot[1": He(35076),
-         "belt_tunnel_exit_top[rot[2": He(35080),
-         "belt_tunnel_exit_top[rot[3": He(35083),
- ... (273 more removed lines; see GitHub link above)
+     var mW = OW(62),
+       EW = OW(3809);
+ 
+     function NW(WW, iW, OW) {
+       const NW = (0, mW.useRef)(null),
+         {
+           width: PW,
+           height: LW
+         } = (0, EW.d)(WW);
+       (0, mW.useEffect)((() => {
+         const OW = iW(WW.current);
+         return NW.current = OW, () => {
+           OW.close(), NW.current = null
+         }
+       }), [WW, iW]), (0, mW.useEffect)((() => {
+         PW <= 0 || LW <= 0 || NW.current.resize(PW, LW)
+ ... (100 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L308-L527` → after: `L126-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L126-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/228.js#L126-L128) · [Before (L308-L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/228.js#L308-L527)

```diff
-         "Active Radar2": He(36519),
-         "Active Radar3": He(36525),
-         "Active Radar4": He(36533),
-         "Active Radar5": He(36538),
-         "Active Radar|meta|rot22": He(36519),
-         "Active Radar|meta|rot23": He(36525),
-         "Active Radar|meta|rot24": He(36533),
-         "Active Radar|meta|rot25": He(36538),
-         "Active Radar|meta|rot32": He(36519),
-         "Active Radar|meta|rot33": He(36525),
-         "Active Radar|meta|rot34": He(36533),
-         "Active Radar|meta|rot35": He(36538),
-         "Active Radar|meta|rot42": He(36519),
-         "Active Radar|meta|rot43": He(36525),
-         "Active Radar|meta|rot44": He(36533),
-         "Active Radar|meta|rot45": He(36538),
- ... (204 more removed lines; see GitHub link above)
+         ...NW,
+         radius: 33,
+         target: [0, 3.9, 0]
```

#### 4. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L530-L10909` → after: `L131-L344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L131-L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/228.js#L131-L344) · [Before (L530-L10909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/228.js#L530-L10909)

```diff
-         Unloaded: [
-           [244, 0, 255],
-           [0, 0, 0]
-         ],
-         Dirt: [
-           [133, 98, 77],
-           [139, 102, 80],
-           [127, 92, 74]
-         ],
-         "Messy Dirt": [
-           [123, 87, 59],
-           [129, 90, 62],
-           [118, 81, 57]
-         ],
-         "Grass Block": [
-           [93, 141, 53],
- ... (10364 more removed lines; see GitHub link above)
+         player: NW,
+         store: PW,
+         showcase: {
+           ...PW,
+           target: [0, 1.9, 0]
+         }
+       };
+ 
+     function cW(WW, iW) {
+       WW instanceof Promise ? WW.then(iW).catch((WW => {
+         console.error("Couldn't open the preview", WW)
+       })) : iW(WW)
+     }
+     class wW {
+       constructor(WW) {
+         this.opened = null, this.view = null, this.size = null, this.closed = !1, cW(WW, (WW => {
+ ... (198 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/229.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/229.js` (52 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0)

#### 1. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L5-L139` → after: `L4-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/229.js#L4-L14) · [Before (L5-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/229.js#L5-L139)

```diff
-   40554: (ee, ie, He) => {
-     function ye() {
-       return "object" === typeof process && "object" === typeof process.versions && "undefined" !== typeof process.versions.node
-     }
- 
-     function be(ee) {
-       return ee instanceof Uint8Array && (!ye() || !Buffer.isBuffer(ee))
-     }
- 
-     function Me(ee) {
-       return ee instanceof ArrayBuffer
-     }
- 
-     function Ke(ee) {
-       return !!ye() && Buffer.isBuffer(ee)
-     }
- ... (119 more removed lines; see GitHub link above)
+   53703: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       MobPreview: () => ZW
+     });
+     var mW = OW(62),
+       EW = OW(1089),
+       NW = OW.n(EW),
+       PW = OW(53489),
+       LW = OW(35264),
+       cW = OW(53483),
+       wW = OW(1283);
```

#### 2. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L142-L2492` → after: `L17-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L17-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/229.js#L17-L36) · [Before (L142-L2492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/229.js#L142-L2492)

```diff
-       this.array = ee, this.pos = 0
-     }
-     Me.prototype.readUncompressedLength = function() {
-       for (var ee, ie, He = 0, ye = 0; ye < 32 && this.pos < this.array.length;) {
-         if (ee = this.array[this.pos], this.pos += 1, (ie = 127 & ee) << ye >>> ye !== ie) return -1;
-         if (He |= ie << ye, ee < 128) return He;
-         ye += 7
-       }
-       return -1
-     }, Me.prototype.uncompressToBuffer = function(ee) {
-       for (var ie, Me, Ke, Ue, Fe = this.array, Je = Fe.length, oe = this.pos, Re = 0; oe < Fe.length;)
-         if (ie = Fe[oe], oe += 1, 0 === (3 & ie)) {
-           if ((Me = 1 + (ie >>> 2)) > 60) {
-             if (oe + 3 >= Je) return !1;
-             Ke = Me - 60, Me = 1 + ((Me = Fe[oe] + (Fe[oe + 1] << 8) + (Fe[oe + 2] << 16) + (Fe[oe + 3] << 24)) & He[Ke]), oe += Ke
-           }
- ... (2335 more removed lines; see GitHub link above)
+       return LW.f.openMob(WW)
+     }
+     const ZW = (0, mW.memo)((function(WW) {
+       let {
+         mobType: iW,
+         variation: OW = null,
+         animation: EW = cW.h,
+         className: LW
+       } = WW;
+       const ZW = (0, mW.useRef)(null),
+         xW = (0, mW.useMemo)((() => ({
+           mobType: iW,
+           variation: OW,
+           animation: EW
+         })), [iW, OW, EW]);
+       return (0, PW.c)(ZW, tW, xW), (0, wW.jsx)("div", {
+ ... (4 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L2494` → after: `L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/229.js#L38) · [Before (L2494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/229.js#L2494)

```diff
-   40742: (ee, ie, He) => {
+   53489: (WW, iW, OW) => {
```

#### 4. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L2496-L2502` → after: `L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/229.js#L40) · [Before (L2496-L2502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/229.js#L2496-L2502)

```diff
-       e: () => ke,
-       h: () => Re,
-       l: () => Xe,
-       n: () => Fe,
-       q: () => ze,
-       r: () => Je,
-       u: () => Ke
+       c: () => NW
```

#### 5. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L2504-L4433` → after: `L42-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L42-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/229.js#L42-L46) · [Before (L2504-L4433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/229.js#L2504-L4433)

```diff
-     var ye = He(40692),
-       be = He(40671),
-       Me = He(40746);
-     new Map, new Map;
-     const Ke = ee => {
-         if (!ee || "object" !== typeof ee) throw new TypeError("Encoding config must be an object.");
-         if (!ye.s.includes(ee.codec)) throw new TypeError(`Invalid video codec '${ee.codec}'. Must be one of: ${ye.s.join(", ")}.`);
-         const ie = ee.bitrate;
-         if (void 0 === ee.quality && void 0 === ie) throw new TypeError("config.quality must be provided.");
-         if (void 0 !== ee.quality && void 0 !== ie) throw new TypeError("config.quality and config.bitrate cannot both be provided.");
-         if (void 0 !== ee.quality && !(ee.quality instanceof ke)) throw new TypeError("config.quality, when provided, must be a Quality.");
-         if (void 0 !== ie && !(ie instanceof ke) && (!Number.isInteger(ie) || ie <= 0)) throw new TypeError("config.bitrate, when provided, must be a positive integer or a quality.");
-         if (void 0 !== ee.keyFrameInterval && (!Number.isFinite(ee.keyFrameInterval) || ee.keyFrameInterval < 0)) throw new TypeError("config.keyFrameInterval, when provided, must be a non-negative number.");
-         if (void 0 !== ee.sizeChangeBehavior && !["deny", "passThrough", "fill", "contain", "cover"].includes(ee.sizeChangeBehavior)) throw new TypeError("config.sizeChangeBehavior, when provided, must be 'deny', 'passThrough', 'fill', 'contain' or 'cover'.");
-         if (void 0 !== ee.transform) {
-           if ("object" !== typeof ee.transform || !ee.transform) throw new TypeError("config.transform, when provided, must be an object.");
- ... (1914 more removed lines; see GitHub link above)
+     var mW = OW(62),
+       EW = OW(3809);
+ 
+     function NW(WW, iW, OW) {
+       const NW = (0, mW.useRef)(null),
```

#### 6. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4435-L6325` → after: `L48-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L48-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/229.js#L48-L60) · [Before (L4435-L6325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/229.js#L4435-L6325)

```diff
-           const ee = this.initBoxWriter ?? this.boxWriter;
-           if ((0, Ue.I)(ee), this.formatOptions.onFtyp && ee.writer.startTrackingWrites(), ee.writeBox((ee => {
-               const ie = 512;
-               return ee.isQuickTime ? Le("ftyp", [ce("qt  "), Ze(ie), ce("qt  ")]) : ee.fragmented ? ee.cmaf ? Le("ftyp", [ce("iso5"), Ze(ie), ce("iso5"), ce("iso6"), ce("mp41"), ce("cmfc"), ce("dash")]) : Le("ftyp", [ce("iso5"), Ze(ie), ce("iso5"), ce("iso6"), ce("mp41")]) : Le( … [truncated]
-             })({
-               isQuickTime: this.isQuickTime,
-               holdsAvc: ie,
-               fragmented: this.isFragmented,
-               cmaf: this.isCmaf
-             })), this.formatOptions.onFtyp) {
-             const {
-               data: ie,
-               start: He
-             } = ee.writer.stopTrackingWrites();
-             this.formatOptions.onFtyp(ie, He)
-           }
- ... (1875 more removed lines; see GitHub link above)
+           width: PW,
+           height: LW
+         } = (0, EW.d)(WW);
+       (0, mW.useEffect)((() => {
+         const OW = iW(WW.current);
+         return NW.current = OW, () => {
+           OW.close(), NW.current = null
+         }
+       }), [WW, iW]), (0, mW.useEffect)((() => {
+         PW <= 0 || LW <= 0 || NW.current.resize(PW, LW)
+       }), [PW, LW]), (0, mW.useEffect)((() => {
+         NW.current.show(OW)
+       }), [OW])
```

#### 7. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6328` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/229.js#L63) · [Before (L6328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/229.js#L6328)

```diff
-   40665: (ee, ie, He) => {
+   53483: (WW, iW, OW) => {
```

#### 8. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6330` → after: `L65-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L65-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/229.js#L65-L67) · [Before (L6330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/229.js#L6330)

```diff
-       c: () => Be
+       c: () => xW,
+       d: () => ZW,
+       h: () => cW
```

#### 9. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6332-L6362` → after: `L69-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L69-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/229.js#L69-L78) · [Before (L6332-L6362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/229.js#L6332-L6362)

```diff
-     var ye = He(40671),
-       be = He(40676),
-       Me = He(40679),
-       Ke = He(40750),
-       Ue = He(40726),
-       Fe = He(40717),
-       Je = He(40703),
-       oe = He(40738),
-       Re = He(40692);
-     const ke = ["video", "audio", "subtitle"];
-     class qe {
-       constructor(ee, ie, He, ye, be) {
-         this.id = ee, this.output = ie, this.type = He, this.source = ye, this.metadata = be
-       }
-       isVideoTrack() {
-         return "video" === this.type
- ... (15 more removed lines; see GitHub link above)
+     var mW = OW(38320),
+       EW = OW(39881);
+ 
+     function NW(WW, iW) {
+       let [OW, mW, EW] = WW;
+       return [0, .5, 1].map((WW => ({
+         timeFraction: WW,
+         rotation: {
+           YO: "catmull-rom-spline",
+           point: [OW, mW, EW + (.5 === WW ? iW : 0)]
```

#### 10. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6364-L6390` → after: `L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/229.js#L80) · [Before (L6364-L6390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/229.js#L6364-L6390)

```diff
-         return !1
-       }
-     }
-     class fe extends qe {
-       constructor(ee, ie, He, ye) {
-         super(ee, ie, "video", He, ye)
-       }
-     }
-     class Te extends qe {
-       constructor(ee, ie, He, ye) {
-         super(ee, ie, "audio", He, ye)
-       }
-     }
-     class pe extends qe {
-       constructor(ee, ie, He, ye) {
-         super(ee, ie, "subtitle", He, ye)
- ... (11 more removed lines; see GitHub link above)
+       })))
```

#### 11. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6392-L6459` → after: `L82-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L82-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/229.js#L82-L95) · [Before (L6392-L6459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/229.js#L6392-L6459)

```diff
-     const ze = ee => {
-       if (!ee || "object" !== typeof ee) throw new TypeError("metadata must be an object.");
-       if (void 0 !== ee.languageCode && !(0, ye.Eb)(ee.languageCode)) throw new TypeError("metadata.languageCode, when provided, must be a three-letter, ISO 639-2/T language code.");
-       if (void 0 !== ee.name && "string" !== typeof ee.name) throw new TypeError("metadata.name, when provided, must be a string.");
-       if (void 0 !== ee.disposition && (0, be.n)(ee.disposition), void 0 !== ee.maximumPacketCount && (!Number.isInteger(ee.maximumPacketCount) || ee.maximumPacketCount < 0)) throw new TypeError("metadata.maximumPacketCount, when provided, must be a non-negative integer.");
-       if (void 0 !== ee.bitrate && (!Number.isFinite(ee.bitrate) || ee.bitrate < 0)) throw new TypeError("metadata.bitrate, when provided, must be a non-negative number.");
-       if (void 0 !== ee.averageBitrate && (!Number.isFinite(ee.averageBitrate) || ee.averageBitrate < 0)) throw new TypeError("metadata.averageBitrate, when provided, must be a non-negative number.");
-       if (void 0 !== ee.group && !(ee.group instanceof Xe) && (!Array.isArray(ee.group) || ee.group.some((ee => !(ee instanceof Xe))))) throw new TypeError("metadata.group, when provided, must be an OutputTrackGroup instance or an array of OutputTrackGroup instances.")
-     };
-     class Be extends ye.j {
-       get target() {
-         const ee = "Output.target cannot be used when using PathedTarget with an async callback. Use the 'target' event instead.";
-         if (this._rootTargetPromise) throw new TypeError(ee);
-         const ie = this._getRootTarget();
-         if ((0, ye.Qb)(ie)) throw new TypeError(ee);
-         return ie
- ... (52 more removed lines; see GitHub link above)
+ 
+     function PW(WW, iW, OW) {
+       return {
+         kO: 3200,
+         loop: !0,
+         MO: {
+           Root: {
+             timeline: [0, .5, 1].map((WW => ({
+               timeFraction: WW,
+               position: {
+                 YO: "catmull-rom-spline",
+                 point: [0, .5 === WW ? .18 : 0, 0]
+               }
+             })))
```

#### 12. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6461-L6608` → after: `L97-L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L97-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/229.js#L97-L110) · [Before (L6461-L6608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/229.js#L6461-L6608)

```diff
-           ie = this._getTargetValidated(ee),
-           He = ie => ("canceled" === this.state ? ie._close() : this._rememberTarget(ie), this._emit("target", {
-             target: ie,
-             request: ee,
-             isRoot: !0
-           }), this._rootTarget = ie, ie);
-         return (0, ye.Qb)(ie) ? this._rootTargetPromise = ie.then(He) : He(ie)
-       }
-       _getRootWriter(ee) {
-         return this._rootWriterPromise ??= (async () => {
-           const ie = await this._getRootTarget(),
-             He = new Fe.c(ie, "boolean" === typeof ee ? ee : ee(ie));
-           return He.start(), He
-         })()
-       }
-       addVideoTrack(ee) {
- ... (132 more removed lines; see GitHub link above)
+           HeadMesh: {
+             timeline: [0, .25, .75, 1].map((WW => ({
+               timeFraction: WW,
+               rotation: {
+                 YO: "catmull-rom-spline",
+                 point: [0, .25 === WW ? .12 : .75 === WW ? -.12 : 0, 0]
+               }
+             })))
+           },
+           ArmLeftMesh: {
+             timeline: NW(WW, OW)
+           },
+           ArmRightMesh: {
+             timeline: NW(iW, -OW)
```

#### 13. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6610-L6692` → after: `L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/229.js#L112) · [Before (L6610-L6692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/229.js#L6610-L6692)

```diff
-         })()
-       }
-     }
-   },
-   40738: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => Me,
-       e: () => be
-     });
-     var ye = He(40671);
-     const be = new Uint8Array(0);
-     class Me {
-       constructor(ee, ie, He, ye) {
-         let Me = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
-           Ke = arguments.length > 5 ? arguments[5] : void 0,
-           Ue = arguments.length > 6 ? arguments[6] : void 0;
- ... (67 more removed lines; see GitHub link above)
+         }
```

#### 14. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6696` → after: `L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/229.js#L122) · [Before (L6696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/229.js#L6696)

```diff
-   40746: (ee, ie, He) => {
+   35270: (WW, iW, OW) => {
```

#### 15. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6704-L6771` → after: `L128-L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L128-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/229.js#L128-L134) · [Before (L6704-L6771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/229.js#L6704-L6771)

```diff
-     var ye = He(40671),
-       be = He(40703),
-       Me = function(ee, ie, He) {
-         if (null !== ie && void 0 !== ie) {
-           if ("object" !== typeof ie && "function" !== typeof ie) throw new TypeError("Object expected.");
-           var ye, be;
-           if (He) {
-             if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
-             ye = ie[Symbol.asyncDispose]
-           }
-           if (void 0 === ye) {
-             if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
-             ye = ie[Symbol.dispose], He && (be = ye)
-           }
-           if ("function" !== typeof ye) throw new TypeError("Object not disposable.");
-           be && (ye = function() {
- ... (52 more removed lines; see GitHub link above)
+     var mW = OW(1659);
+ 
+     function EW(WW) {
+       var iW;
+       return {
+         ...LW.store,
+         yaw: LW.store.yaw + (null !== (iW = mW.e[WW].previewYaw) && void 0 !== iW ? iW : 0)
```

#### 16. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6774-L7266` → after: `L137-L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L137-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/229.js#L137-L153) · [Before (L6774-L7266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/229.js#L6774-L7266)

```diff
-     const Re = ["I420", "I420P10", "I420P12", "I420A", "I420AP10", "I420AP12", "I422", "I422P10", "I422P12", "I422A", "I422AP10", "I422AP12", "I444", "I444P10", "I444P12", "I444A", "I444AP10", "I444AP12", "NV12", "RGBA", "RGBX", "BGRA", "BGRX"],
-       ke = new Set(Re);
-     class qe {
-       get codedWidth() {
-         return this.visibleRect.width
-       }
-       get codedHeight() {
-         return this.visibleRect.height
-       }
-       get displayWidth() {
-         return this.rotation % 180 === 0 ? this.squarePixelWidth : this.squarePixelHeight
-       }
-       get displayHeight() {
-         return this.rotation % 180 === 0 ? this.squarePixelHeight : this.squarePixelWidth
-       }
-       get microsecondTimestamp() {
- ... (477 more removed lines; see GitHub link above)
+     const NW = {
+         yaw: .61 * Math.PI,
+         pitch: Math.PI / 2.05,
+         radius: 30,
+         target: [0, 0, 0]
+       },
+       PW = {
+         ...NW,
+         radius: 33,
+         target: [0, 3.9, 0]
+       },
+       LW = {
+         player: NW,
+         store: PW,
+         showcase: {
+           ...PW,
+ ... (1 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L7268-L7308` → after: `L155-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L155-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/229.js#L155-L160) · [Before (L7268-L7308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/229.js#L7268-L7308)

```diff
-         const {
-           canvas: Te,
-           context: pe,
-           isNew: ze
-         } = Xe(ke.width, ke.height);
-         return this._drawWithFitAndMipmapping(Te, pe, {
-           fit: ke.fit,
-           rotation: ke.rotation,
-           flip: ke.flip,
-           crop: ke.crop,
-           targetIsFresh: ze,
-           fillBlack: "discard" === ke.alpha
-         }), new qe(Te, {
-           timestamp: this.timestamp,
-           duration: this.duration,
-           rotation: 0,
- ... (25 more removed lines; see GitHub link above)
+       };
+ 
+     function cW(WW, iW) {
+       WW instanceof Promise ? WW.then(iW).catch((WW => {
+         console.error("Couldn't open the preview", WW)
+       })) : iW(WW)
```

#### 18. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L7343-L7353` → after: `L164-L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L164-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/229.js#L164-L166) · [Before (L7343-L7353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/229.js#L7343-L7353)

```diff
-         if (void 0 !== ee) {
-           if (!ee || "object" !== typeof ee) throw new TypeError("init.colorSpace, when provided, must be an object.");
-           const ie = Object.keys(ye.f);
-           if (null != ee.primaries && !ie.includes(ee.primaries)) throw new TypeError(`init.colorSpace.primaries, when provided, must be one of ${ie.join(", ")}.`);
-           const He = Object.keys(ye.t);
-           if (null != ee.transfer && !He.includes(ee.transfer)) throw new TypeError(`init.colorSpace.transfer, when provided, must be one of ${He.join(", ")}.`);
-           const be = Object.keys(ye.o);
-           if (null != ee.matrix && !be.includes(ee.matrix)) throw new TypeError(`init.colorSpace.matrix, when provided, must be one of ${be.join(", ")}.`);
-           if (null != ee.fullRange && "boolean" !== typeof ee.fullRange) throw new TypeError("init.colorSpace.fullRange, when provided, must be a boolean.")
-         }
-         this.primaries = ee?.primaries ?? null, this.transfer = ee?.transfer ?? null, this.matrix = ee?.matrix ?? null, this.fullRange = ee?.fullRange ?? null
+         this.opened = null, this.view = null, this.size = null, this.closed = !1, cW(WW, (WW => {
+           this.closed ? WW.close() : (this.opened = WW, null !== this.size && WW.resize(this.size.width, this.size.height), null !== this.view && WW.show(this.view))
+         }))
```

#### 19. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L7355-L7361` → after: `L168-L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L168-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/229.js#L168-L170) · [Before (L7355-L7361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/229.js#L7355-L7361)

```diff
-       toJSON() {
-         return {
-           primaries: this.primaries,
-           transfer: this.transfer,
-           matrix: this.matrix,
-           fullRange: this.fullRange
-         }
+       show(WW) {
+         var iW;
+         this.view = WW, null === (iW = this.opened) || void 0 === iW || iW.show(WW)
```

#### 20. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L7363-L7372` → after: `L172-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L172-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/229.js#L172-L174) · [Before (L7363-L7372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/229.js#L7363-L7372)

```diff
-     }
-     const Be = ee => "undefined" !== typeof VideoFrame && ee instanceof VideoFrame,
-       Ee = (ee, ie, He) => {
-         const be = Math.min(ee.left, ie),
-           Me = Math.min(ee.top, He),
-           Ke = Math.min(ee.width, ie - be),
-           Ue = Math.min(ee.height, He - Me);
-         return (0, ye.I)(Ke >= 0), (0, ye.I)(Ue >= 0), {
-           left: be,
-           top: Me,
+       resize(WW, iW) {
+         var OW;
+         this.size = {
```

#### 21. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L7375-L7579` → after: `L177-L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L177-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/229.js#L177-L181) · [Before (L7375-L7579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/229.js#L7375-L7579)

```diff
-         }
-       },
-       ge = (ee, ie) => {
-         if (!ee || "object" !== typeof ee) throw new TypeError(ie + "crop, when provided, must be an object.");
-         if (!Number.isInteger(ee.left) || ee.left < 0) throw new TypeError(ie + "crop.left must be a non-negative integer.");
-         if (!Number.isInteger(ee.top) || ee.top < 0) throw new TypeError(ie + "crop.top must be a non-negative integer.");
-         if (!Number.isInteger(ee.width) || ee.width < 0) throw new TypeError(ie + "crop.width must be a non-negative integer.");
-         if (!Number.isInteger(ee.height) || ee.height < 0) throw new TypeError(ie + "crop.height must be a non-negative integer.")
-       },
-       Oe = ee => {
-         if (!ee || "object" !== typeof ee) throw new TypeError("options must be an object.");
-         if (void 0 !== ee.colorSpace && !["display-p3", "srgb"].includes(ee.colorSpace)) throw new TypeError("options.colorSpace, when provided, must be 'display-p3' or 'srgb'.");
-         if (void 0 !== ee.format && "string" !== typeof ee.format) throw new TypeError("options.format, when provided, must be a string.");
-         if (void 0 !== ee.layout) {
-           if (!Array.isArray(ee.layout)) throw new TypeError("options.layout, when provided, must be an array.");
-           for (const ie of ee.layout) {
- ... (189 more removed lines; see GitHub link above)
+         }, null === (OW = this.opened) || void 0 === OW || OW.resize(WW, iW)
+       }
+       close() {
+         var WW;
+         this.closed = !0, null === (WW = this.opened) || void 0 === WW || WW.close(), this.opened = null
```

#### 22. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L7590-L7791` → after: `L186-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L186-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/229.js#L186-L188) · [Before (L7590-L7791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/229.js#L7590-L7791)

```diff
-         if (this._closed = !1, Le(ee)) {
-           if (null === ee.format) throw new TypeError("AudioData with null format is not supported.");
-           this._data = ee, this.format = ee.format, this.sampleRate = ee.sampleRate, this.numberOfFrames = ee.numberOfFrames, this.numberOfChannels = ee.numberOfChannels, this.timestamp = ee.timestamp / 1e6, this.duration = ee.numberOfFrames / ee.sampleRate
-         } else if (ee instanceof Ae) {
-           if (this._data = ee, ee._referenceCount++, this.format = ee.getFormat(), !Pe.has(this.format)) throw new TypeError("getFormat() must return an AudioSampleFormat.");
-           if (this.sampleRate = ee.getSampleRate(), !Number.isInteger(this.sampleRate) || this.sampleRate <= 0) throw new TypeError("getSampleRate() must return a positive integer.");
-           if (this.numberOfFrames = ee.getNumberOfFrames(), !Number.isInteger(this.numberOfFrames) || this.numberOfFrames < 0) throw new TypeError("getNumberOfFrames() must return a non-negative integer.");
-           if (this.numberOfChannels = ee.getNumberOfChannels(), !Number.isInteger(this.numberOfChannels) || this.numberOfChannels <= 0) throw new TypeError("getNumberOfChannels() must return a positive integer.");
-           if (this.timestamp = ee.getTimestamp(), !Number.isFinite(this.timestamp)) throw new TypeError("getTimestamp() must return a finite number.");
-           this.duration = this.numberOfFrames / this.sampleRate
-         } else {
-           if (!ee || "object" !== typeof ee) throw new TypeError("Invalid AudioDataInit: must be an object.");
-           if (!Pe.has(ee.format)) throw new TypeError("Invalid AudioDataInit: invalid format.");
-           if (!Number.isFinite(ee.sampleRate) || ee.sampleRate <= 0) throw new TypeError("Invalid AudioDataInit: sampleRate must be > 0.");
-           if (!Number.isInteger(ee.numberOfChannels) || 0 === ee.numberOfChannels) throw new TypeError("Invalid AudioDataInit: numberOfChannels must be an integer > 0.");
-           if (!Number.isFinite(ee?.timestamp)) throw new TypeError("init.timestamp must be a number.");
- ... (186 more removed lines; see GitHub link above)
+         this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(WW).then((WW => WW.ready)), cW(WW, (WW => {
+           this.closed ? WW.close() : (this.opened = WW, null !== this.size && WW.resize(this.size.width, this.size.height))
+         }))
```

#### 23. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L7793-L7794` → after: `L190-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L190-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/229.js#L190-L191) · [Before (L7793-L7794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/229.js#L7793-L7794)

```diff
-       close() {
-         this._closed || (Je?.unregister(this), this._data instanceof Ae ? (this._data._referenceCount--, 0 === this._data._referenceCount && this._data.close()) : Le(this._data) ? this._data.close() : this._data = new Uint8Array(0), this._closed = !0)
+       get dev() {
+         return this.opened.dev
```

#### 24. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L7796-L7805` → after: `L193-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L193-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/229.js#L193-L195) · [Before (L7796-L7805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/229.js#L7796-L7805)

```diff
-       toAudioData() {
-         if (this._closed) throw new Error("AudioSample is closed.");
-         return this._data instanceof Ae ? this._createAudioDataFromData() : Le(this._data) ? this._data.timestamp === this.microsecondTimestamp ? this._data.clone() : this._createAudioDataFromData() : new AudioData({
-           format: this.format,
-           sampleRate: this.sampleRate,
-           numberOfFrames: this.numberOfFrames,
-           numberOfChannels: this.numberOfChannels,
-           timestamp: this.microsecondTimestamp,
-           data: this._data.buffer instanceof ArrayBuffer ? this._data.buffer : this._data.slice()
-         })
+       isReady() {
+         var WW, iW;
+         return null !== (WW = null === (iW = this.opened) || void 0 === iW ? void 0 : iW.isReady()) && void 0 !== WW && WW
```

#### 25. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L7807-L7842` → after: `L197-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L197-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/229.js#L197-L199) · [Before (L7807-L7842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/229.js#L7807-L7842)

```diff
-       _createAudioDataFromData() {
-         if (ae(this.format)) {
-           const ee = this.allocationSize({
-               planeIndex: 0,
-               format: this.format
-             }),
-             ie = new ArrayBuffer(ee * this.numberOfChannels);
-           for (let He = 0; He < this.numberOfChannels; He++) this.copyTo(new Uint8Array(ie, He * ee, ee), {
-             planeIndex: He,
-             format: this.format
-           });
-           return new AudioData({
-             format: this.format,
-             sampleRate: this.sampleRate,
-             numberOfFrames: this.numberOfFrames,
-             numberOfChannels: this.numberOfChannels,
- ... (20 more removed lines; see GitHub link above)
+       setCosmetic(WW, iW) {
+         var OW;
+         null === (OW = this.opened) || void 0 === OW || OW.setCosmetic(WW, iW)
```

#### 26. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L7844-L7859` → after: `L201-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L201-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/229.js#L201-L203) · [Before (L7844-L7859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/229.js#L7844-L7859)

```diff
-       toAudioBuffer() {
-         if (this._closed) throw new Error("AudioSample is closed.");
-         const ee = new AudioBuffer({
-             numberOfChannels: this.numberOfChannels,
-             length: this.numberOfFrames,
-             sampleRate: this.sampleRate
-           }),
-           ie = new Float32Array(this.allocationSize({
-             planeIndex: 0,
-             format: "f32-planar"
-           }) / 4);
-         for (let He = 0; He < this.numberOfChannels; He++) this.copyTo(ie, {
-           planeIndex: He,
-           format: "f32-planar"
-         }), ee.copyToChannel(ie, He);
-         return ee
+       setNametag(WW) {
+         var iW;
+         null === (iW = this.opened) || void 0 === iW || iW.setNametag(WW)
```

#### 27. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L7861-L7865` → after: `L205-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L205-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/229.js#L205-L207) · [Before (L7861-L7865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/229.js#L7861-L7865)

```diff
-       setTimestamp(ee) {
-         if (!Number.isFinite(ee)) throw new TypeError("newTimestamp must be a number.");
-         this.timestamp = ee
-       } [Symbol.dispose]() {
-         this.close()
+       playEmote(WW) {
+         var iW;
+         null === (iW = this.opened) || void 0 === iW || iW.playEmote(WW)
```

#### 28. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L7867-L7887` → after: `L209-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L209-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/229.js#L209-L211) · [Before (L7867-L7887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/229.js#L7867-L7887)

```diff
-       static * _fromAudioBuffer(ee, ie) {
-         if (!(ee instanceof AudioBuffer)) throw new TypeError("audioBuffer must be an AudioBuffer.");
-         const He = ee.numberOfChannels,
-           ye = ee.sampleRate,
-           be = ee.length,
-           Me = Math.floor(24e4 / He);
-         let Ke = 0,
-           Ue = be;
-         for (; Ue > 0;) {
-           const be = Math.min(Me, Ue),
-             Fe = new Float32Array(He * be);
-           for (let ie = 0; ie < He; ie++) ee.copyFromChannel(Fe.subarray(ie * be, (ie + 1) * be), ie, Ke);
-           yield new Ye({
-             format: "f32-planar",
-             sampleRate: ye,
-             numberOfFrames: be,
- ... (5 more removed lines; see GitHub link above)
+       setOrbit(WW) {
+         var iW;
+         null === (iW = this.opened) || void 0 === iW || iW.setOrbit(WW)
```

#### 29. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L7889-L7912` → after: `L213-L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L213-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/229.js#L213-L215) · [Before (L7889-L7912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/229.js#L7889-L7912)

```diff
-       static fromAudioBuffer(ee, ie) {
-         if (!(ee instanceof AudioBuffer)) throw new TypeError("audioBuffer must be an AudioBuffer.");
-         const He = ee.numberOfChannels,
-           ye = ee.sampleRate,
-           be = ee.length,
-           Me = Math.floor(24e4 / He);
-         let Ke = 0,
-           Ue = be;
-         const Fe = [];
-         for (; Ue > 0;) {
-           const be = Math.min(Me, Ue),
-             Je = new Float32Array(He * be);
-           for (let ie = 0; ie < He; ie++) ee.copyFromChannel(Je.subarray(ie * be, (ie + 1) * be), ie, Ke);
-           const oe = new Ye({
-             format: "f32-planar",
-             sampleRate: ye,
- ... (8 more removed lines; see GitHub link above)
+       resetCamera() {
+         var WW;
+         null === (WW = this.opened) || void 0 === WW || WW.resetCamera()
```

#### 30. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L7914-L8068` → after: `L217-L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L217-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/229.js#L217-L219) · [Before (L7914-L8068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/229.js#L7914-L8068)

```diff
-     }
-     const Ve = ee => {
-         switch (ee) {
-           case "u8":
-           case "u8-planar":
-             return 1;
-           case "s16":
-           case "s16-planar":
-             return 2;
-           case "s32":
-           case "s32-planar":
-           case "f32":
-           case "f32-planar":
-             return 4;
-           default:
-             throw new Error("Unknown AudioSampleFormat")
- ... (139 more removed lines; see GitHub link above)
+       async untilDrawn(WW) {
+         var iW;
+         await this.ready, await (null === (iW = this.opened) || void 0 === iW ? void 0 : iW.untilDrawn(WW))
```

#### 31. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L8070-L8083` → after: `L221-L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L221-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/229.js#L221-L226) · [Before (L8070-L8083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/229.js#L8070-L8083)

```diff
-   },
-   40712: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => Ke,
-       e: () => Je,
-       g: () => Me,
-       j: () => Fe
-     });
-     const ye = /(?:(.+?)\n)?((?:\d{2}:)?\d{2}:\d{2}.\d{3})\s+-->\s+((?:\d{2}:)?\d{2}:\d{2}.\d{3})/g,
-       be = /^WEBVTT(.|\n)*?\n{2}/,
-       Me = /<(?:(\d{2}):)?(\d{2}):(\d{2}).(\d{3})>/g;
-     class Ke {
-       constructor(ee) {
-         this.preambleText = null, this.preambleEmitted = !1, this.options = ee
+       resize(WW, iW) {
+         var OW;
+         this.size = {
+           width: WW,
+           height: iW
+         }, null === (OW = this.opened) || void 0 === OW || OW.resize(WW, iW)
```

#### 32. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L8085-L8117` → after: `L228-L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L228-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/229.js#L228-L230) · [Before (L8085-L8117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/229.js#L8085-L8117)

```diff
-       parse(ee) {
-         let ie;
-         if (ee = ee.replaceAll("\r\n", "\n").replaceAll("\r", "\n"), ye.lastIndex = 0, !this.preambleText) {
-           if (!be.test(ee)) throw new Error("WebVTT preamble incorrect.");
-           ie = ye.exec(ee);
-           const He = ee.slice(0, ie?.index ?? ee.length).trimEnd();
-           if (!He) throw new Error("No WebVTT preamble provided.");
-           this.preambleText = He, ie && (ee = ee.slice(ie.index), ye.lastIndex = 0)
-         }
-         for (; ie = ye.exec(ee);) {
-           const He = ee.slice(0, ie.index),
-             be = ie[1],
-             Me = ie.index + ie[0].length,
-             Ke = ee.indexOf("\n", Me) + 1,
-             Ue = ee.slice(Me, Ke).trim();
-           let Je = ee.indexOf("\n\n", Me); - 1 === Je && (Je = ee.length);
- ... (17 more removed lines; see GitHub link above)
+       close() {
+         var WW;
+         this.closed = !0, null === (WW = this.opened) || void 0 === WW || WW.close(), this.opened = null
```

#### 33. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L8120-L8145` → after: `L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/229.js#L233) · [Before (L8120-L8145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/229.js#L8120-L8145)

```diff
-     const Ue = /(?:(\d{2}):)?(\d{2}):(\d{2}).(\d{3})/,
-       Fe = ee => {
-         const ie = Ue.exec(ee);
-         if (!ie) throw new Error("Expected match.");
-         return 36e5 * Number(ie[1] || "0") + 6e4 * Number(ie[2]) + 1e3 * Number(ie[3]) + Number(ie[4])
-       },
-       Je = ee => {
-         const ie = Math.floor(ee / 36e5),
-           He = Math.floor(ee % 36e5 / 6e4),
-           ye = Math.floor(ee % 6e4 / 1e3),
-           be = ee % 1e3;
-         return ie.toString().padStart(2, "0") + ":" + He.toString().padStart(2, "0") + ":" + ye.toString().padStart(2, "0") + "." + be.toString().padStart(3, "0")
-       }
-   },
-   40726: (ee, ie, He) => {
-     var ye;
- ... (10 more removed lines; see GitHub link above)
+     const ZW = new class {
```

#### 34. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L8147` → after: `L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/229.js#L235) · [Before (L8147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/229.js#L8147)

```diff
-         super(...arguments), this._writerAcquired = !1, this._monotonicity = null, this.onwrite = null
+         this.host = null, this.makeDefault = null
```

#### 35. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L8149-L8150` → after: `L237-L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L237-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/229.js#L237-L238) · [Before (L8149-L8150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/229.js#L8149-L8150)

```diff
-       _setMonotonicity(ee) {
-         !1 !== this._monotonicity && (this._monotonicity = ee)
+       setHost(WW) {
+         this.host = WW
```

#### 36. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L8152-L8177` → after: `L240-L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L240-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/229.js#L240-L241) · [Before (L8152-L8177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/229.js#L8152-L8177)

```diff
-       _dispatchWrite(ee, ie) {
-         this.onwrite?.(ee, ie), this._emit("write", {
-           start: ee,
-           end: ie
-         })
-       }
-       slice(ee) {
-         if (!Number.isInteger(ee) || ee < 0) throw new TypeError("offset must be a non-negative integer.");
-         return new Re(this, ee)
-       }
-     }
-     const Ue = 65536,
-       Fe = 2 ** 32;
-     class Je extends Ke {
-       constructor() {
-         let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
- ... (10 more removed lines; see GitHub link above)
+       setDefaultHost(WW) {
+         this.makeDefault = WW
```

#### 37. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L8179-L8189` → after: `L243-L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L243-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/229.js#L243-L246) · [Before (L8179-L8189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/229.js#L8179-L8189)

```diff
-       _ensureSize(ee) {
-         let ie = this._buffer.byteLength;
-         for (; ie < ee;) ie *= 2;
-         if (ie !== this._buffer.byteLength) {
-           if (ie > Fe) throw new Error("ArrayBuffer exceeded maximum size of 4294967296 bytes. Please consider using another target.");
-           if (this._supportsResize) this._buffer.resize(ie);
-           else {
-             const ee = new ArrayBuffer(ie),
-               He = new Uint8Array(ee);
-             He.set(this._bytes, 0), this._buffer = ee, this._bytes = He
-           }
+       current() {
+         if (null === this.host) {
+           if (null === this.makeDefault) throw new Error("no preview host");
+           this.host = this.makeDefault()
```

#### 38. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L8192-L8222` → after: `L250-L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L250-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/229.js#L250-L251) · [Before (L8192-L8222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/229.js#L8192-L8222)

```diff
-       _start() {}
-       _write(ee, ie) {
-         this._ensureSize(ie + ee.byteLength), this._bytes.set(ee, ie), this._maxPos = Math.max(this._maxPos, ie + ee.byteLength), this._dispatchWrite(ie, ie + ee.byteLength)
-       }
-       async _flush() {}
-       async _finalize() {
-         this.buffer = this._buffer.slice(0, this._maxPos), this._options.onFinalize && await this._options.onFinalize(this.buffer), this._emit("finalized")
-       }
-       async _close() {}
-       _getSlice(ee, ie) {
-         return this._bytes.slice(ee, ie)
-       }
-     }
-     class oe extends Ke {
-       _start() {}
-       _write(ee, ie) {
- ... (15 more removed lines; see GitHub link above)
+       openMob(WW) {
+         return new wW(this.current().openMob(WW))
```

#### 39. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L8224-L8225` → after: `L253-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L253-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/229.js#L253-L254) · [Before (L8224-L8225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/229.js#L8224-L8225)

```diff
-       _flush() {
-         return this._baseTarget._flush()
+       openPet(WW) {
+         return new wW(this.current().openPet(WW))
```

#### 40. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L8227-L8228` → after: `L256-L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L256-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/229.js#L256-L257) · [Before (L8227-L8228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/229.js#L8227-L8228)

```diff
-       async _finalize() {
-         this._emit("finalized")
+       openMobLineup(WW) {
+         return new wW(this.current().openMobLineup(WW))
```

#### 41. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L8230-L8232` → after: `L259-L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L259-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/229.js#L259-L260) · [Before (L8230-L8232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/229.js#L8230-L8232)

```diff
-       async _close() {}
-       _setMonotonicity(ee) {
-         super._setMonotonicity(ee), this._baseTarget._setMonotonicity(ee)
+       sharesCharacter() {
+         return !0 === this.current().sharesCharacter
```

#### 42. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L8234-L8238` → after: `L262-L263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L262-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/229.js#L262-L263) · [Before (L8234-L8238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/229.js#L8234-L8238)

```diff
-     }
-     class ke {
-       constructor(ee, ie) {
-         if (this.rootPath = ee, this.getTarget = ie, "string" !== typeof ee) throw new TypeError("rootPath must be a string.");
-         if ("function" !== typeof ie) throw new TypeError("getTarget must be a function.")
+       openCharacter(WW, iW) {
+         return new tW(this.current().openCharacter(WW, iW))
```

#### 43. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L8242-L8248` → after: `L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/229.js#L267) · [Before (L8242-L8248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/229.js#L8242-L8248)

```diff
-   40708: (ee, ie, He) => {
-     He.d(ie, {
-       d: () => ye
-     });
-     const ye = "Mediabunny v1.61.3"
-   },
-   40717: (ee, ie, He) => {
+   35264: (WW, iW, OW) => {
```

#### 44. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L8250` → after: `L269-L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L269-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/229.js#L269-L271) · [Before (L8250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/229.js#L8250)

```diff
-       c: () => be
+       d: () => mW.d,
+       e: () => mW.e,
+       f: () => mW.f
```

#### 45. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L8252` → after: `L273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/229.js#L273) · [Before (L8252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/229.js#L8252)

```diff
-     var ye = He(40671);
+     var mW = OW(35270);
```

#### 46. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L8254-L8265` → after: `L275-L276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L275-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/229.js#L275-L276) · [Before (L8254-L8265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/229.js#L8254-L8265)

```diff
-       constructor(ee, ie) {
-         if (this.finalized = !1, this.started = !1, this.pos = 0, this.trackedWrites = null, this.trackedStart = -1, this.trackedEnd = -1, ee._writerAcquired) throw new Error("Can't have multiple Writers for the same Target.");
-         this.target = ee, ee._setMonotonicity(ie), ee._writerAcquired = !0
-       }
-       start() {
-         (0, ye.I)(!this.started), this.target._start(), this.started = !0
-       }
-       write(ee) {
-         (0, ye.I)(this.started && !this.finalized), this.maybeTrackWrites(ee), this.target._write(ee, this.pos), this.pos += ee.byteLength
-       }
-       seek(ee) {
-         this.pos = ee
+       constructor(WW) {
+         this.load = WW, this.loaded = null, this.loading = null
```

#### 47. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L8267-L8268` → after: `L278-L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L278-L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/229.js#L278-L281) · [Before (L8267-L8268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/229.js#L8267-L8268)

```diff
-       getPos() {
-         return this.pos
+       run(WW) {
+         return null !== this.loaded ? WW(this.loaded) : (this.loading ??= this.load().then((WW => (this.loaded = WW, WW)), (WW => {
+           throw this.loading = null, WW
+         })), this.loading.then(WW))
```

#### 48. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L8270-L8271` → after: `L283-L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L283-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/229.js#L283-L286) · [Before (L8270-L8271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/229.js#L8270-L8271)

```diff
-       async flush() {
-         return (0, ye.I)(this.started && !this.finalized), this.target._flush()
+     }
+     class NW {
+       constructor() {
+         this.sharesCharacter = !0, this.mobScene = new EW((() => Promise.all([OW.e(85), OW.e(264), OW.e(263), OW.e(289), OW.e(113), OW.e(290), OW.e(89), OW.e(86), OW.e(287), OW.e(87), OW.e(88), OW.e(297), OW.e(291), OW.e(296), OW.e(294), OW.e(286), OW.e(311), OW.e(260), OW.e(278) … [truncated]
```

#### 49. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L8273-L8274` → after: `L288-L289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L288-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/229.js#L288-L289) · [Before (L8273-L8274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/229.js#L8273-L8274)

```diff
-       async finalize() {
-         (0, ye.I)(this.started && !this.finalized), await this.target._finalize(), this.finalized = !0
+       openMob(WW) {
+         return this.mobScene.run((iW => iW.openMobPreview(WW)))
```

#### 50. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L8276-L8290` → after: `L291-L292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L291-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/229.js#L291-L292) · [Before (L8276-L8290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/229.js#L8276-L8290)

```diff
-       maybeTrackWrites(ee) {
-         if (!this.trackedWrites) return;
-         let ie = this.getPos();
-         if (ie < this.trackedStart) {
-           if (ie + ee.byteLength <= this.trackedStart) return;
-           ee = ee.subarray(this.trackedStart - ie), ie = 0
-         }
-         const He = ie + ee.byteLength - this.trackedStart;
-         let ye = this.trackedWrites.byteLength;
-         for (; ye < He;) ye *= 2;
-         if (ye !== this.trackedWrites.byteLength) {
-           const ee = new Uint8Array(ye);
-           ee.set(this.trackedWrites, 0), this.trackedWrites = ee
-         }
-         this.trackedWrites.set(ee, ie - this.trackedStart), this.trackedEnd = Math.max(this.trackedEnd, ie + ee.byteLength)
+       openPet(WW) {
+         return this.mobScene.run((iW => iW.openPetPreview(WW)))
```

#### 51. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L8292-L8293` → after: `L294-L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L294-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/229.js#L294-L295) · [Before (L8292-L8293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/229.js#L8292-L8293)

```diff
-       startTrackingWrites() {
-         this.trackedWrites = new Uint8Array(1024), this.trackedStart = this.getPos(), this.trackedEnd = this.trackedStart
+       openMobLineup(WW) {
+         return this.mobScene.run((iW => iW.openMobLineupPreview(WW)))
```

#### 52. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L8295-L8302` → after: `L297-L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L297-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/229.js#L297-L298) · [Before (L8295-L8302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/229.js#L8295-L8302)

```diff
-       stopTrackingWrites() {
-         if (!this.trackedWrites) throw new Error("Internal error: Can't get tracked writes since nothing was tracked.");
-         const ee = {
-           data: this.trackedWrites.subarray(0, this.trackedEnd - this.trackedStart),
-           start: this.trackedStart,
-           end: this.trackedEnd
-         };
-         return this.trackedWrites = null, ee
+       openCharacter(WW, iW) {
+         return this.characterScene.run((OW => OW.openCharacterPreview(WW, iW)))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/230.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/230.js` (38 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26)

#### 1. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/230.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/230.js#L4)

```diff
-   44693: (ee, ie, He) => {
+   37544: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L6-L7` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/230.js#L6) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/230.js#L6-L7)

```diff
-       loadGlbAsset: () => Zi,
-       loadGlbTree: () => ti
+       default: () => Oi
```

#### 3. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L9-L11` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/230.js#L8-L12) · [Before (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/230.js#L9-L11)

```diff
-     var ye = He(38745),
-       be = He(125),
-       Me = He(1150);
+     var mW = OW(62);
+     const EW = "newPlayerDeal",
+       NW = 36e5,
+       PW = [4, 12, 20, 20, 30];
+     const LW = 12 * NW;
```

#### 4. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L14` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/230.js#L15) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/230.js#L14)

```diff
-       return (0, be.isDiscordClient)() ? `https://${Me.d.discordDomain}/${ee.href}` : ee.href
+       return WW - LW
```

#### 5. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L23-L24` → after: `L18-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L18-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/230.js#L18-L20) · [Before (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/230.js#L23-L24)

```diff
-     function oe() {
-       return Je()('(()=>{class ee extends Error{}function ie(ie,He){const ye=ie._malloc(He);if(0===ye)throw new ee(`Draco: the decoder\'s heap refused ${He} bytes`);return ye}function He(He,ye,be,Me){let Ke=null,Ue=null,Fe=null;try{Ke=new He.Decoder,Ue=new He.DecoderBuffer,Ue.Ini … [truncated]
+     function wW(WW, iW, OW) {
+       const mW = cW(OW);
+       return iW >= mW && iW < OW && (null === WW.lastShownAt || WW.lastShownAt < mW)
```

#### 6. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L43-L44` → after: `L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/230.js#L23) · [Before (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/230.js#L43-L44)

```diff
-     function de() {
-       if (!pe) return Promise.reject(new Error("Draco: configureDracoPool was not called"));
+     function tW(WW, iW) {
```

#### 7. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L46-L47` → after: `L25-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L25-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/230.js#L25-L28) · [Before (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/230.js#L46-L47)

```diff
-         scriptUrl: ee,
-         wasmBinaryUrl: ie
+         arrival: OW,
+         now: mW,
+         endsAt: EW,
+         playedOnDevice: LW
```

#### 8. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L49-L75` → after: `L30-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L30-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/230.js#L30-L59) · [Before (L49-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/230.js#L49-L75)

```diff
-       return Xe ??= fetch(ie).then((ee => {
-         if (!ee.ok) throw new Error(`Draco: fetching ${ie} failed: ${ee.status}`);
-         return ee.arrayBuffer()
-       })), Xe.catch((() => {
-         Xe = null
-       })), ge.workersStarted++, Promise.all([Xe, (0, qe.g)()]).then((ie => {
-         let [He] = ie;
-         return new Promise(((ie, ye) => {
-           const be = new oe;
-           be.onerror = ee => {
-             be.onmessage = null, be.onerror = null, be.terminate(), ye(new Error("Draco: the decode worker failed to start" + (ee.message ? `: ${ee.message}` : " (its script did not load)")))
-           }, be.onmessage = ee => {
-             let {
-               data: He
-             } = ee;
-             be.onmessage = null, be.onerror = null, "initDone" === He.id ? ie(be) : (be.terminate(), ye(new Error(`Draco: ${"initError"===He.id?He.message:"the worker did not start"}`)))
- ... (11 more removed lines; see GitHub link above)
+       return !(mW >= EW || !LW) && (!(!wW(WW, mW, EW) && 0 !== WW.shownCount && null !== WW.lastShownAt) || "open" === OW && mW - WW.lastShownAt >= (cW = WW.shownCount, PW[Math.min(Math.max(cW, 1), PW.length) - 1] * NW));
+       var cW
+     }
+     var ZW = OW(327),
+       xW = OW(1556),
+       lW = OW(25),
+       AW = OW(3132),
+       bW = OW(4076),
+       jW = OW(4085),
+       UW = OW(2059),
+       kW = OW(1185),
+       sW = OW(1111);
+     var MW = OW(1422),
+       KW = OW(39),
+       SW = OW(683),
+       YW = OW(3507),
+ ... (14 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L78-L104` → after: `L62-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L62-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/230.js#L62-L97) · [Before (L78-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/230.js#L78-L104)

```diff
-       const ie = ze.indexOf(ee); - 1 !== ie && ze.splice(ie, 1);
-       const He = Be.shift();
-       He && Ze(He)
-     }
- 
-     function te(ee, ie) {
-       ee.busy = !0, ee.releaseTimer && (clearTimeout(ee.releaseTimer), ee.releaseTimer = null);
-       ee.worker.then((He => {
-         const ye = Ee++;
-         He.onmessage = be => {
-           let {
-             data: Me
-           } = be;
-           if (("decoded" === Me.id || "decodeError" === Me.id) && Me.seq === ye) {
-             if (He.onmessage = null, He.onerror = null, "decoded" === Me.id) return ge.decodes++, ie.resolve({
-               indices: Me.indices,
- ... (11 more removed lines; see GitHub link above)
+       let {
+         shownView: iW,
+         close: OW
+       } = WW;
+       const {
+         t: EW
+       } = (0, oW.B)(), NW = (0, HW.V)(), {
+         purchaseUnderWay: PW,
+         notice: LW,
+         needsLogin: cW,
+         buyPack: wW
+       } = (0, DW.g)("popup", ((WW, iW) => {
+         OW(!1), (0, uW.b)(WW, iW)
+       })), tW = null === NW;
+       (0, mW.useEffect)((() => {
+         tW && OW(!1)
+ ... (20 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L106-L119` → after: `L99-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L99-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/230.js#L99-L111) · [Before (L106-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/230.js#L106-L119)

```diff
-         }, He.onerror = ye => {
-           He.onmessage = null, He.onerror = null, He.terminate(), ie.reject(new Error(`Draco: the decode worker failed: ${ye.message}`)), We(ee)
-         };
-         const be = {
-           id: "decode",
-           seq: ye,
-           data: ie.data,
-           attributeIds: ie.attributeIds,
-           expected: ie.expected
-         };
-         He.postMessage(be, [ie.data.buffer])
-       }), (He => {
-         ie.reject(He instanceof Error ? He : new Error(String(He))), We(ee)
-       }))
+         }), (0, VW.jsx)(eW.e, {
+           notice: LW,
+           className: "SmallTextBold NewPlayerDealNotice"
+         }), (0, VW.jsx)(eW.b, {
+           className: "SmallTextBold NewPlayerDealNotice"
+         }), (0, VW.jsx)(dW.O, {
+           className: "NewPlayerDealNoThanks",
+           onClick: () => {
+             OW(!0)
+           },
+           children: EW("newPlayerDeal:noThanks")
+         })]
+       })
```

#### 11. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L123-L138` → after: `L115-L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L115-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/230.js#L115-L121) · [Before (L123-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/230.js#L123-L138)

```diff
-       const ie = ze.find((ee => !ee.busy));
-       if (ie) te(ie, ee);
-       else {
-         if (Oe ??= (0, ke.c)() ? 1 : function(ee, ie) {
-             const He = ee ? Math.max(1, Math.min(Math.floor(.5 * ee), 4)) : 1;
-             return ie ? Math.min(He, fe) : He
-           }("object" === typeof navigator ? navigator.hardwareConcurrency : void 0, (0, Re.isMobile)()), ze.length < Oe) {
-           const ie = {
-             worker: de(),
-             busy: !0,
-             releaseTimer: null
-           };
-           return ze.push(ie), ge.mostWorkers = Math.max(ge.mostWorkers, ze.length), void te(ie, ee)
-         }
-         Be.push(ee)
-       }
+       let {
+         arm: iW,
+         children: OW
+       } = WW;
+       return (0, mW.useEffect)((() => {
+         (0, HW.P)(!0)
+       }), []), (0, HW.W)(iW, "popup"), OW
```

#### 12. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L141-L149` → after: `L124-L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L124-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/230.js#L124-L140) · [Before (L141-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/230.js#L141-L149)

```diff
-     function we(ee, ie, He) {
-       return new Promise(((ye, be) => {
-         Ze({
-           data: new Int8Array(ee.buffer, ee.byteOffset, ee.byteLength).slice(),
-           attributeIds: ie,
-           expected: He,
-           resolve: ye,
-           reject: be
-         })
+     function CW(WW) {
+       let iW = null;
+       MW.NotificationProvider.showCustomPopup({
+         body: OW => (0, VW.jsx)(fW, {
+           arm: WW.arm,
+           children: (0, VW.jsx)(pW, {
+             shownView: WW,
+             close: WW => {
+               iW ??= WW, OW()
+             }
+           })
+         }),
+         middleScreenPopupContainerClassName: "NewPlayerDealPopupContainer",
+         middleScreenPopupClassName: "NewPlayerDealPopupPanel",
+         unlockPointerKey: "NewPlayerDealPopup"
+       }).getResult().then((OW => {
+ ... (1 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L152-L162` → after: `L143-L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L143-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/230.js#L143-L146) · [Before (L152-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/230.js#L152-L162)

```diff
-     var De = He(38185),
-       Pe = He(38195),
-       Ae = He(34988),
-       Ye = He(34984);
-     const Ve = {
-       index: -1,
-       magFilter: void 0,
-       minFilter: void 0,
-       wrapS: void 0,
-       wrapT: void 0
-     };
+     const XW = 2500,
+       BW = 6e4;
+     const qW = 500,
+       RW = 6e4;
```

#### 14. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L165-L363` → after: `L149-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L149-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/230.js#L149-L155) · [Before (L165-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/230.js#L165-L363)

```diff
-       const ie = (0, Ye.l)(ee.byteLength);
-       if (ie) throw new Ae.k(ie);
-       const {
-         json: He,
-         bin: ye
-       } = (0, Ae.y)(ee), be = (0, Ye.i)(He, ye);
-       if (be) throw new Ae.k(be);
-       try {
-         return function(ee, ie) {
-           var He, ye, be, Me, Ke, Ue, Fe, Je, oe, Re, ke, qe, fe, Te, pe;
-           const Xe = new Map,
-             ze = He => {
-               let ye = Xe.get(He);
-               if (!ye) {
-                 var be;
-                 const Me = ee.bufferViews[He],
- ... (183 more removed lines; see GitHub link above)
+       const iW = Date.now() + RW;
+       return new Promise((OW => {
+         const mW = () => {
+           WW() ? (0, TW.g)() || MW.NotificationProvider.hasPopup() || (0, yW.m)() || (0, HW.z)() || null !== lW.d.get("openEverythingMenuName") ? Date.now() > iW ? OW(!1) : setTimeout(mW, qW) : OW(!0) : OW(!1)
+         };
+         mW()
+       }))
```

#### 15. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L365` → after: `L157-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L157-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/230.js#L157-L159) · [Before (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/230.js#L365)

```diff
-     const xe = new WeakMap;
+     const IW = "newPlayerDealPointerDeferred_";
+     let aW = !1,
+       rW = null;
```

#### 16. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L369-L370` → after: `L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/230.js#L163) · [Before (L369-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/230.js#L369-L370)

```diff
-       const ye = null !== (He = xe.get(ee)) && void 0 !== He ? He : ie(ee);
-       return xe.set(ee, ye), ye
+       return (null === (OW = rW) || void 0 === OW ? void 0 : OW.accountId) === iW && rW.shownCount === WW.shownCount
```

#### 17. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L373-L390` → after: `L166-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L166-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/230.js#L166-L167) · [Before (L373-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/230.js#L373-L390)

```diff
-     function Ce(ee) {
-       const ie = ee.bufferView,
-         He = 5125 === ee.componentType ? Uint32Array : Uint16Array,
-         ye = ie.bytes.buffer,
-         be = ie.bytes.byteOffset + (ee.byteOffset || 0);
-       return be % He.BYTES_PER_ELEMENT !== 0 ? new He(ye.slice(be, be + ee.count * He.BYTES_PER_ELEMENT), 0) : new He(ye, be, ee.count)
-     }
- 
-     function ve(ee, ie) {
-       if (ee.min && ee.max) return [new Float64Array(ee.min), new Float64Array(ee.max)];
-       const He = ie.find((ee => {
-           let {
-             kind: ie
-           } = ee;
-           return "position" === ie
-         })),
- ... (2 more removed lines; see GitHub link above)
+     function FW(WW, iW, OW) {
+       return !!zW(iW, OW) && (rW = null, (0, HW.E)(OW), CW(WW), !0)
```

#### 18. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L392-L399` → after: `L169-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L169-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/230.js#L169-L174) · [Before (L392-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/230.js#L392-L399)

```diff
- 
-     function ue(ee) {
-       const ie = ee.attributes.map((ee => {
-           var ie, He;
-           let {
-             kind: ye,
-             accessor: be
-           } = ee;
+     async function QW(WW, iW, OW, mW) {
+       if (aW) return !1;
+       let EW;
+       aW = !0;
+       try {
+         EW = await async function(WW) {
```

#### 19. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L401-L415` → after: `L176-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L176-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/230.js#L176-L182) · [Before (L401-L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/230.js#L401-L415)

```diff
-             bufferView: Me,
-             numComponents: Ke
-           } = be;
-           if (!Me) {
-             return {
-               kind: ye,
-               data: Le(be, (() => new Float32Array(Ke * be.count))),
-               offset: 0,
-               stride: 4 * Ke,
-               components: Ke,
-               glType: 5126,
-               isNormalized: !1
-             }
-           }
-           const Ue = null !== (ie = Me.byteStride) && void 0 !== ie ? ie : Ke * Ae.c[be.componentType];
+             newPlayerDeal: iW,
+             counted: OW
+           } = await (0, sW.postJsonWithMetricsCookiesAndJsonResponse)(`${kW.clientSideServerUrls.indexUrl}/index/new-player-deal/shown`, {
+             shownCount: WW
+           }, {
+             retries: 1
+           });
```

#### 20. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L417-L423` → after: `L184-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L184-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/230.js#L184-L185) · [Before (L417-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/230.js#L417-L423)

```diff
-             kind: ye,
-             data: Me.bytes,
-             offset: null !== (He = be.byteOffset) && void 0 !== He ? He : 0,
-             stride: Ue,
-             components: Ke,
-             glType: be.componentType,
-             isNormalized: be.normalized
+             newPlayerDeal: iW,
+             counted: !0 === OW
```

#### 21. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L425-L429` → after: `L187-L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L187-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/230.js#L187-L196) · [Before (L425-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/230.js#L425-L429)

```diff
-         })),
-         He = ee.indices,
-         ye = He && Le(He, Ce),
-         be = ee.position;
-       return new Pe.c(ie, ye, be.count, ...ve(be, ie))
+         }(iW.shownCount)
+       } catch (NW) {
+         return console.error("New player deal: counting a showing of its popup failed", NW), !1
+       } finally {
+         aW = !1
+       }
+       return (0, HW.T)(OW, EW.newPlayerDeal), EW.counted && null !== EW.newPlayerDeal && (rW = {
+         accountId: mW,
+         shownCount: EW.newPlayerDeal.shownCount
+       }, "landingPage" === lW.d.get("gameState") && FW(WW, EW.newPlayerDeal, mW)), !0
```

#### 22. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L431` → after: `L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/230.js#L198) · [Before (L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/230.js#L431)

```diff
-     const me = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array];
+     let Wi = null;
```

#### 23. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L433-L450` → after: `L200-L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L200-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/230.js#L200-L231) · [Before (L433-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/230.js#L433-L450)

```diff
-     function le(ee, ie) {
-       const He = ie.attributes.map((ee => {
-         let {
-           kind: ie,
-           data: He,
-           size: ye,
-           byteOffset: be,
-           byteStride: Me,
-           normalized: Ke
-         } = ee;
-         return {
-           kind: ie,
-           data: He,
-           offset: be,
-           stride: Me,
-           components: ye,
- ... (2 more removed lines; see GitHub link above)
+     function ii(WW, iW, OW, EW, NW) {
+       var PW;
+       const {
+         gameState: LW
+       } = (0, lW.p)(["gameState"]), xW = "landingPage" === LW, {
+         pointing: AW
+       } = (0, YW.f)(), bW = (0, mW.useRef)(AW);
+       bW.current = AW;
+       const jW = (0, mW.useRef)(WW);
+       jW.current = WW;
+       const kW = (0, mW.useRef)(iW);
+       kW.current = iW;
+       const sW = (0, mW.useRef)(OW);
+       sW.current = OW;
+       const [MW, yW] = (0, mW.useState)(null), TW = (0, mW.useRef)(0), JW = (0, mW.useRef)(0), hW = (0, mW.useRef)(!1), HW = (0, mW.useCallback)((WW => {
+         "open" === function(WW) {
+ ... (16 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L452-L453` → after: `L233-L276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L233-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/230.js#L233-L276) · [Before (L452-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/230.js#L452-L453)

```diff
-       }));
-       return new Pe.c(He, ie.indices, ie.totalVertices, ...ve(ee.position, He))
+       }), [xW, HW]);
+       const nW = null !== (PW = null === WW || void 0 === WW ? void 0 : WW.endsAt) && void 0 !== PW ? PW : null;
+       (0, mW.useEffect)((() => {
+         if (!xW || null === nW) return;
+         const WW = cW(nW) - Date.now();
+         if (WW <= 0 || WW > UW.c) return;
+         const iW = setTimeout((() => {
+           HW(!1)
+         }), WW);
+         return () => {
+           clearTimeout(iW)
+         }
+       }), [xW, nW, HW]);
+       const uW = null !== WW && null !== EW && null === NW;
+       (0, mW.useEffect)((() => {
+         if (null === MW || !uW || JW.current >= MW.seq) return;
+ ... (28 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L456-L458` → after: `L279-L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L279-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/230.js#L279-L365) · [Before (L456-L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/230.js#L456-L458)

```diff
-     function Se(ee) {
-       const ie = ee.lastIndexOf("/");
-       return ie < 0 ? ee : ee.substring(ie + 1)
+     function Oi() {
+       const {
+         userContext: WW
+       } = (0, hW.e)(), iW = (0, AW.usePurchasesAllowed)(), [OW, NW] = (0, mW.useState)(nW.n);
+       (0, mW.useEffect)((() => (NW((0, nW.n)()), (0, nW.r)(NW))), []);
+       const PW = (0, HW.e)(WW);
+       ! function(WW, iW, OW) {
+         const [NW, PW] = (0, mW.useState)(0);
+         (0, mW.useEffect)((() => {
+           if (!iW || null === WW) return;
+           if (null !== OW) return void(0, HW.O)(WW, (0, nW.g)());
+           if (null !== (0, HW.l)(WW)) return;
+           let mW, NW = !1;
+           return (0, jW.getBillingClient)().getOfferings(EW).then((iW => {
+             let {
+               offering: OW
+ ... (71 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L462-L463` → after: `L387-L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L387-L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/230.js#L387-L398) · [Before (L462-L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/230.js#L462-L463)

```diff
-       const ie = ee.lastIndexOf("/");
-       return ie < 0 ? "" : ee.substring(0, ie + 1)
+       let {
+         endsAt: iW,
+         className: OW
+       } = WW;
+       return (0, lW.jsxs)("span", {
+         className: NW()("NewPlayerDealClock", OW),
+         children: [(0, lW.jsx)(wW.c, {
+           name: "hourglass"
+         }), (0, lW.jsx)(cW.f, {
+           toTime: iW
+         })]
+       })
```

#### 27. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L467` → after: `L402-L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L402-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/230.js#L402-L452) · [Before (L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/230.js#L467)

```diff
-       return ee.name || `node${ee.index}`
+       let {
+         offered: iW,
+         needsLogin: OW,
+         busy: mW,
+         highlight: EW,
+         onBuy: cW
+       } = WW;
+       const {
+         t: wW
+       } = (0, PW.B)(), {
+         pack: AW
+       } = iW, bW = (0, ZW.e)(iW.package);
+       return (0, lW.jsxs)("div", {
+         className: NW()("NewPlayerDealPack", {
+           NewPlayerDealPackHighlight: EW
+         }),
+ ... (35 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L490-L492` → after: `L456-L489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L456-L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/230.js#L456-L489) · [Before (L490-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/230.js#L490-L492)

```diff
-       var ie, He, ye, be;
-       const Me = null !== (ie = ee.minFilter) && void 0 !== ie ? ie : 9987;
-       return 9729 === (null !== (He = ee.magFilter) && void 0 !== He ? He : 9729) ? null !== (ye = Ie[Me]) && void 0 !== ye ? ye : 3 : null !== (be = he[Me]) && void 0 !== be ? be : 4
+       let {
+         view: iW,
+         needsLogin: OW,
+         busy: EW,
+         highlight: LW,
+         onBuy: cW
+       } = WW;
+       const {
+         t: wW
+       } = (0, PW.B)();
+       return (0, lW.jsxs)("div", {
+         className: NW()("NewPlayerDealPacks", iW.packs.length > 1 ? "NewPlayerDealPacksTwo" : "NewPlayerDealPacksOne"),
+         children: [iW.packs.map(((WW, iW) => (0, lW.jsxs)(mW.Fragment, {
+           children: [iW > 0 && (0, lW.jsx)("div", {
+             className: "NewPlayerDealDivider",
+             "aria-hidden": !0,
+ ... (18 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L494-L497` → after: `L491-L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L491-L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/230.js#L491-L517) · [Before (L494-L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/230.js#L494-L497)

```diff
-     const Ge = {
-       33071: 0,
-       33648: 2
-     };
+   },
+   35285: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => TW,
+       g: () => hW
+     });
+     OW(35279);
+     var mW = OW(4139),
+       EW = OW(1556),
+       NW = OW(3132),
+       PW = OW(4126),
+       LW = OW(4105),
+       cW = OW(4132),
+       wW = OW(4085),
+       tW = OW(1172),
+       ZW = OW(1422),
+ ... (11 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L499-L501` → after: `L519-L523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L519-L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/230.js#L519-L523) · [Before (L499-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/230.js#L499-L501)

```diff
-     function re(ee) {
-       var ie;
-       return null !== (ie = Ge[null !== ee && void 0 !== ee ? ee : 10497]) && void 0 !== ie ? ie : 1
+     function YW(WW, iW) {
+       null !== WW && (0, UW.v)(WW) || ((0, EW.reportAnalyticsClick)({
+         id: "store.purchase_done",
+         value: `self:${iW.pack.packageId}`
+       }), null !== WW && (0, UW.D)(WW), TW(iW.pack.gems))
```

#### 31. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L504-L505` → after: `L526-L543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L526-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/230.js#L526-L543) · [Before (L504-L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/230.js#L504-L505)

```diff
-     function Qe(ee) {
-       return 9728 === ee.minFilter || 9729 === ee.minFilter
+     function yW(WW, iW, OW) {
+       const EW = (0, UW.e)(iW);
+       switch (WW.kind) {
+         case "completed":
+           YW(EW, OW);
+           break;
+         case "pending":
+           NW = WW.intentId, PW = () => {
+             jW.j.refresh(), YW(EW, OW)
+           }, SW || (SW = !0, KW.listen()), KW.follow(NW, PW);
+           break;
+         case "unknownPackage":
+           (0, UW.T)(iW, null);
+           break;
+         case "failed":
+           WW.errorKey === mW.b.newPlayerDealUnavailable && (0, UW.T)(iW, null)
+ ... (2 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L509-L515` → after: `L547-L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L547-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/230.js#L547-L554) · [Before (L509-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/230.js#L509-L515)

```diff
-       var ie, He, ye;
-       const be = Float64Array.from(null !== (ie = ee.scale) && void 0 !== ie ? ie : [1, 1, 1]);
-       return ee.hasCamera && (be[0] = -1), {
-         translation: Float64Array.from(null !== (He = ee.translation) && void 0 !== He ? He : [0, 0, 0]),
-         rotation: Float64Array.from(null !== (ye = ee.rotation) && void 0 !== ye ? ye : [0, 0, 0, 1]),
-         scale: be
-       }
+       ZW.NotificationProvider.showCustomPopup({
+         body: iW => (0, MW.jsx)(JW, {
+           gems: WW,
+           close: iW
+         }),
+         middleScreenPopupClassName: "NewPlayerDealAddedPopup",
+         disableExitButton: !0
+       })
```

#### 33. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L518` → after: `L557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/230.js#L557) · [Before (L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/230.js#L518)

```diff
-     function ii(ee, ie) {
+     function JW(WW) {
```

#### 34. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L520-L522` → after: `L559-L560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L559-L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/230.js#L559-L560) · [Before (L520-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/230.js#L520-L522)

```diff
-         translation: He,
-         rotation: ye,
-         scale: be
+         gems: iW,
+         close: OW
```

#### 35. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L524-L709` → after: `L562-L581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L562-L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/230.js#L562-L581) · [Before (L524-L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/230.js#L524-L709)

```diff
-       const Me = new Float32Array(16);
-       return (0, De.b)(be, 0, ye, 0, He, 0, Me), ie && (0, De.k)(Me, ie, 0, Me), Me
-     }
-     class Hi {
-       constructor(ee, ie, He, ye) {
-         this.model = ee, this.decode = ie, this.fileInfo = He, this.uniqueRootUrl = ye, this.primitives = void 0, this.parents = new Map, this.uses = new Map, this.own = new Map;
-         const be = new Set,
-           Me = (ie, He) => {
-             const ye = ee.nodes[ie];
-             if (this.parents.has(ye)) throw new Ae.i(`/nodes/${ie}: Invalid recursive node hierarchy`);
-             this.parents.set(ye, He);
-             const Ke = null === ye.mesh ? [] : ee.meshes[ye.mesh].primitives,
-               Ue = Ke.map((ee => {
-                 const ie = Ke.length > 1;
-                 return {
-                   name: ie ? `${je(ye)}_primitive${ee.index}` : je(ye),
- ... (170 more removed lines; see GitHub link above)
+       const {
+         t: mW
+       } = (0, tW.B)();
+       return (0, MW.jsxs)("div", {
+         className: "NewPlayerDealAdded",
+         children: [(0, MW.jsxs)("div", {
+           className: "NewPlayerDealAddedHead",
+           children: [(0, MW.jsx)(AW.c, {
+             name: "circle-check"
+           }), (0, MW.jsx)(bW.c, {
+             amount: iW
+           }), (0, MW.jsx)("span", {
+             children: mW("newPlayerDeal:added")
+           })]
+         }), (0, MW.jsx)(lW.n, {
+           className: "NewPlayerDealAddedOk",
+ ... (4 more added lines; see GitHub link above)
```

#### 36. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L713-L927` → after: `L585-L604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L585-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/230.js#L585-L604) · [Before (L713-L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/230.js#L713-L927)

```diff
-       (0, Mi.f)(ee) || (ee.geometry && ee.geometry.useBoundingInfoFromGeometry ? ee._updateBoundingInfo() : ee.refreshBoundingInfo(!0, !0))
-     }
-     class Ji {
-       constructor(ee, ie) {
-         this.yp = ee, this.decode = ie, this.bufferData = Promise.resolve(), this.viewData = new Map, this.viewBuffers = new Map, this.vertexBuffers = new Map, this.dracoGeometry = new Map
-       }
-       viewBytes(ee) {
-         let ie = this.viewData.get(ee.index);
-         return ie || (ie = this.bufferData.then((() => ee.bytes)), this.viewData.set(ee.index, ie)), ie
-       }
-       viewBuffer(ee) {
-         let ie = this.viewBuffers.get(ee.index);
-         return ie || (ie = this.viewBytes(ee).then((ee => new((0, bi.d)().bR)(this.yp.Nf(), ee, !1))), this.viewBuffers.set(ee.index, ie)), ie
-       }
-       vertexBuffer(ee, ie) {
-         const {
- ... (199 more removed lines; see GitHub link above)
+       let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : PW.b;
+       const {
+         userContext: OW
+       } = (0, xW.e)(), {
+         purchaseUnderWay: mW,
+         notice: EW,
+         buy: cW
+       } = (0, LW.b)(iW), wW = (0, kW.n)(), tW = OW.mayBuy() || (0, NW.guestsMayBuy)(), ZW = null === wW ? !tW : wW.guest && !OW.isLoggedIn();
+       return {
+         purchaseUnderWay: mW,
+         notice: EW,
+         needsLogin: ZW,
+         buyPack: function(mW, EW) {
+           (0, UW.L)("new_player_deal.buy", (0, sW.b)(mW.arm, WW, EW.pack.packageId)), null === wW ? cW(function(WW) {
+             return {
+               sku: WW.pack.packageId,
+ ... (4 more added lines; see GitHub link above)
```

#### 37. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L929-L1027` → after: `L606-L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L606-L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/230.js#L606-L610) · [Before (L929-L1027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/230.js#L929-L1027)

```diff
-             for (const ie of ee.children) ye.push(this.loadNode(this.asset.model.nodes[ie], (ee => {
-               ee.parent = be
-             })));
-             (He => {
-               Ei(He, ee.extras), ie(He)
-             })(be)
-           };
-         if (null === ee.mesh) {
-           const ie = this.node(je(ee), !1);
-           this.nodeObjects.set(ee.index, ie), be(ie)
-         } else {
-           const ie = this.asset.model.meshes[ee.mesh];
-           ye.push(this.loadMesh(`/meshes/${ie.index}`, ee, ie, be))
-         }
-         return Promise.all(ye).then((() => {
-           for (const He of null !== (ie = this.nodePrimitives.get(ee.index)) && void 0 !== ie ? ie : []) {
- ... (83 more removed lines; see GitHub link above)
+           }(EW), null, {
+             followPending: !1
+           }).then((WW => {
+             yW(WW, OW, EW)
+           })) : ZW ? iW(EW.pack.packageId, null) : YW((0, UW.e)(OW), EW)
```

#### 38. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L1088-L1090` → after: `L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/230.js#L615) · [Before (L1088-L1090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/230.js#L1088-L1090)

```diff
-   44704: (ee, ie, He) => {
-     ee.exports = He.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
-   }
+   35279: () => {}
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/231.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/231.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26)

#### 1. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L4-L6` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/231.js#L4-L7) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/231.js#L4-L6)

```diff
-   44710: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       default: () => Me
+   35307: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => EW,
+       g: () => NW
```

#### 2. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L8-L9` → after: `L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/231.js#L9) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/231.js#L8-L9)

```diff
-     var ye = He(36938),
-       be = He.n(ye);
+     var mW = OW(4431);
```

#### 3. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L12` → after: `L12-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L12-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/231.js#L12-L27) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/231.js#L12)

```diff
-       return be()('/*! For license information please see u88b9b.procGen.worker.53b9ea78.worker.js.LICENSE.txt */\n(()=>{var ee={63:ee=>{const ie="object"===typeof performance&&performance&&"function"===typeof performance.now?performance:Date,He=()=>ie.now(),ye=ee=>ee===1/0||(ee= … [truncated]
+       if ("undefined" === typeof BroadcastChannel) return null;
+       const WW = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
+       try {
+         const iW = new BroadcastChannel(mW.m);
+         iW.postMessage({
+           stored: WW
+         }), iW.close()
+       } catch {
+         return null
+       }
+       return WW
+     }
+ 
+     function NW(WW) {
+       const iW = "object" === typeof WW && null !== WW ? WW.stored : null;
+       return "string" === typeof iW ? iW : null
```

#### 4. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L15-L18` → after: `L30-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L30-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/231.js#L30-L287) · [Before (L15-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/231.js#L15-L18)

```diff
-   36938: ee => {
-     ee.exports = function(ee, ie, He, ye) {
-       var be = self || window;
-       try {
+   35303: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => PW,
+       e: () => EW,
+       h: () => NW
+     });
+     var mW = OW(4431);
+     async function EW(WW, iW, OW) {
+       let EW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
+       const NW = PW(await WW.getItem(mW.h, iW));
+       if (null === NW || EW()) return null;
+       const LW = await WW.getItem(mW.l, iW);
+       return EW() ? null : (await async function(WW) {
+         await Promise.all([WW.removeItem(mW.h), WW.removeItem(mW.l)])
+       }(WW).catch(OW), {
+         pack: NW,
+ ... (242 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L20` → after: `L289-L389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L289-L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/231.js#L289-L389) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/231.js#L20)

```diff
-           var Me;
+           OW = await this.host.store.getItem(PW.d, !0)
+         } catch (EW) {
+           return void this.host.warn("the stored texture pack didn't read again: the pack in play stays", EW)
+         }
+         if (this.JA || this.ownChanges !== iW) return;
+         const mW = UW(OW);
+         (0, xW.c)(mW, this.playerPack) || (this.ownChanges++, this.setOwn(mW), this.onGamePack || this.change({
+           pack: mW,
+           gameSource: null
+         }, !1))
+       }
+       joinedWithout() {
+         this.picks++
+       }
+       dispose() {
+         this.JA = !0, this.listeners.clear()
+ ... (85 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L22` → after: `L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/231.js#L391) · [Before (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/231.js#L22)

```diff
-             Me = new be.Blob([ee])
+             WW(this.state)
```

#### 7. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L24` → after: `L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/231.js#L393) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/231.js#L24)

```diff
-             (Me = new(be.BlobBuilder || be.WebKitBlobBuilder || be.MozBlobBuilder || be.MSBlobBuilder)).append(ee), Me = Me.getBlob()
+             this.host.warn("a texture pack listener threw", iW)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/232.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/232.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608)

#### 1. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/232.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/232.js#L4)

```diff
-   44738: (ee, ie, He) => {
+   35316: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L6` → after: `L6-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/232.js#L6-L9) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/232.js#L6)

```diff
-       default: () => Me
+       packDisplayName: () => bW,
+       packModelMessage: () => jW,
+       packModelSummary: () => kW,
+       refusedPackModels: () => UW
```

#### 3. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L8-L9` → after: `L11-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L11-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/232.js#L11-L18) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/232.js#L8-L9)

```diff
-     var ye = He(36938),
-       be = He.n(ye);
+     var mW = OW(35324),
+       EW = OW(35330);
+     const NW = "DRACO",
+       PW = 0,
+       LW = 1,
+       cW = 0,
+       wW = 1,
+       tW = 32768;
```

#### 4. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L11-L17` → after: `L20-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L20-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/232.js#L20-L39) · [Before (L11-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/232.js#L11-L17)

```diff
-     function Me() {
-       return be()('(()=>{var ee={10:(ee,ie,He)=>{ee.exports=He.p+"static/media/zstdDecodeWorker.5838c4073820c3637cf2.js"},19:(ee,ie,He)=>{ee.exports=He.p+"static/media/bloxd_wasm_bg.79dbad279890d8558b9f.wasm"},24:(ee,ie,He)=>{ee.exports=He.p+"static/media/bloxd_wasm_textures_bg.6 … [truncated]
-     }
-   },
-   36938: ee => {
-     ee.exports = function(ee, ie, He, ye) {
-       var be = self || window;
+     function ZW(WW) {
+       const iW = new DataView(WW.buffer, WW.byteOffset, WW.byteLength);
+       let OW = 0;
+       const mW = () => {
+           if (OW >= WW.byteLength) throw new RangeError("past the stream");
+           return WW[OW++]
+         },
+         EW = () => {
+           if (OW + 4 > WW.byteLength) throw new RangeError("past the stream");
+           const mW = iW.getUint32(OW, !0);
+           return OW += 4, mW
+         },
+         ZW = () => {
+           let WW = 0;
+           for (let iW = 0; iW < 35; iW += 7) {
+             const OW = mW();
+ ... (4 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L19-L24` → after: `L41-L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L41-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/232.js#L41-L81) · [Before (L19-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/232.js#L19-L24)

```diff
-         try {
-           var Me;
-           try {
-             Me = new be.Blob([ee])
-           } catch (Je) {
-             (Me = new(be.BlobBuilder || be.WebKitBlobBuilder || be.MozBlobBuilder || be.MSBlobBuilder)).append(ee), Me = Me.getBlob()
+         for (let WW = 0; WW < NW.length; WW++)
+           if (mW() !== NW.charCodeAt(WW)) return null;
+         const iW = mW(),
+           xW = mW(),
+           lW = mW(),
+           AW = mW(),
+           bW = mW() | mW() << 8;
+         if (2 !== iW) return null;
+         0 !== (bW & tW) && function(WW, iW, OW) {
+           const mW = () => {
+               iW(OW())
+             },
+             EW = () => {
+               let OW = 1,
+                 EW = !0;
+               for (; OW > 0;) {
+ ... (25 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L33-L35` → after: `L84-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L84-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/232.js#L84-L93) · [Before (L33-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/232.js#L33-L35)

```diff
-       } catch (Je) {
-         if (!ye) throw Error("Inline worker is not supported");
-         return new be[ie](ye, He)
+         if (AW !== wW) return null;
+         mW(), xW < 2 && ZW();
+         const UW = ZW();
+         return {
+           faces: ZW(),
+           vertices: UW,
+           minor: xW
+         }
+       } catch {
+         return null
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/233.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/233.js` (39 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c)

#### 1. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L4-L19` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/233.js#L4) · [Before (L4-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/233.js#L4-L19)

```diff
-   37049: (ee, ie, He) => {
-     function ye(ee, ie, He) {
-       if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(ee, ie).getContext("2d", He);
-       const ye = document.createElement("canvas");
-       return ye.width = ee, ye.height = ie, ye.getContext("2d", He)
-     }
- 
-     function be(ee, ie) {
-       return ee.getContext("2d", ie)
-     }
-     He.d(ie, {
-       c: () => be,
-       f: () => ye
-     })
-   },
-   41899: (ee, ie, He) => {
+   35324: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L21` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/233.js#L6-L8) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/233.js#L21)

```diff
-       c: () => Ue
+       d: () => oW,
+       h: () => uW,
+       l: () => nW
```

#### 3. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L23-L26` → after: `L10-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L10-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/233.js#L10-L67) · [Before (L23-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/233.js#L23-L26)

```diff
-     const ye = 1 << 20,
-       be = 1 << 21,
-       Me = 1024,
-       Ke = 2048;
+     var mW = OW(35330);
+     const EW = {
+         fileBytes: 4194304,
+         vertices: 65535,
+         indices: 196608,
+         accessorElements: 196608,
+         primitives: 64,
+         nodes: 128,
+         meshes: 64,
+         materials: 8,
+         images: 8,
+         imageSide: 1024
+       },
+       NW = {
+         items: 1024,
+         perFile: 1024,
+ ... (42 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L28-L32` → after: `L69-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/233.js#L69-L70) · [Before (L28-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/233.js#L28-L32)

```diff
-     function Ue(ee, ie, He) {
-       const Ue = ee + ye,
-         Fe = ie + Me,
-         Je = He + ye;
-       return Ue < 0 || Ue >= be || Je < 0 || Je >= be || Fe < 0 || Fe >= Ke ? -1 : (Ue * be + Je) * Ke + Fe
+     function jW(WW) {
+       return WW.toLocaleString("en-US")
```

#### 5. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L49` → after: `L73-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L73-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/233.js#L73-L75) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/233.js#L49)

```diff
-     function ye(ee) {}
+     function UW(WW, iW, OW) {
+       return WW > iW ? `has ${jW(WW)} ${OW} (the limit is ${jW(iW)})` : null
+     }
```

#### 6. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L51` → after: `L77-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L77-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/233.js#L77-L79) · [Before (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/233.js#L51)

```diff
-     function be(ee) {}
+     function kW(WW, iW) {
+       return Number.isInteger(WW) && WW >= 0 && WW < (null !== iW && void 0 !== iW ? iW : 0)
+     }
```

#### 7. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L53` → after: `L81-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L81-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/233.js#L81-L83) · [Before (L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/233.js#L53)

```diff
-     function Me(ee) {}
+     function sW(WW) {
+       return Number.isInteger(WW) && WW >= 0
+     }
```

#### 8. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L55` → after: `L85-L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L85-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/233.js#L85-L87) · [Before (L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/233.js#L55)

```diff
-     function Ke(ee) {}
+     function MW(WW, iW) {
+       return void 0 !== WW && (!Array.isArray(WW) || WW.length > iW)
+     }
```

#### 9. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L57` → after: `L89-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L89-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/233.js#L89-L91) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/233.js#L57)

```diff
-     function Ue(ee) {}
+     function KW(WW, iW) {
+       return "object" === typeof WW && null !== WW && Object.keys(WW).length > iW
+     }
```

#### 10. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L59` → after: `L93-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L93-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/233.js#L93-L96) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/233.js#L59)

```diff
-     function Fe(ee, ie, He) {}
+     function SW(WW) {
+       var iW;
+       return `${WW.normalized?"normalized ":""}${null!==(iW=mW.e[WW.componentType])&&void 0!==iW?iW:WW.componentType} ${WW.type}`
+     }
```

#### 11. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L61` → after: `L98-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L98-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/233.js#L98-L104) · [Before (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/233.js#L61)

```diff
-     function Je(ee) {}
+     function YW(WW) {
+       const iW = iW => {
+         var OW;
+         return null !== (OW = WW[iW]) && void 0 !== OW ? OW : -1
+       };
+       return 255 === iW(0) && 216 === iW(1) ? "JPEG" : 82 === iW(0) && 73 === iW(1) && 87 === iW(8) && 69 === iW(9) ? "WebP" : 171 === iW(0) && 75 === iW(1) && 84 === iW(2) && 88 === iW(3) ? "KTX2" : "non-PNG"
+     }
```

#### 12. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L63-L180` → after: `L106-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L106-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/233.js#L106-L107) · [Before (L63-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/233.js#L63-L180)

```diff
-     function oe(ee) {}
-   },
-   41887: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => Be,
-       d: () => fe,
-       h: () => je,
-       i: () => we,
-       j: () => Ae,
-       m: () => Ye,
-       p: () => ze,
-       q: () => pe,
-       u: () => Xe,
-       v: () => Ze,
-       w: () => me,
-       y: () => Oe,
- ... (102 more removed lines; see GitHub link above)
+     function yW(WW) {
+       return WW.length >= 24 && [137, 80, 78, 71, 13, 10, 26, 10].every(((iW, OW) => WW[OW] === iW)) && 73 === WW[12] && 72 === WW[13] && 68 === WW[14] && 82 === WW[15]
```

#### 13. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L185-L188` → after: `L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/233.js#L111) · [Before (L185-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/233.js#L185-L188)

```diff
-       if (0 === ee) return Ue;
-       const ie = new Me.b(ye.Ob);
-       for (let He = 0; He < ye.Ob; He++) ie[He] = ee >>> 8 * He & 255;
-       return ie
+       return /^[aeiou]/i.test(WW) ? `an ${WW}` : `a ${WW}`
```

#### 14. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L190-L212` → after: `L113-L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L113-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/233.js#L113-L116) · [Before (L190-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/233.js#L190-L212)

```diff
-     class Je {
-       constructor(ee, ie) {
-         this.input = void 0, this.net = void 0, this.worker = void 0, this.cmd = void 0, this.input = new Ke(ie, {
-           ptr: () => ee.Bk(),
-           bk: () => ee.tUe(),
-           reserve: ie => ee.LUe(ie)
-         }), this.net = new Ke(ie, {
-           ptr: () => ee.aUe(),
-           bk: () => ee.VUe(),
-           reserve: ie => ee.CUe(ie)
-         }), this.worker = new Ke(ie, {
-           ptr: () => ee.KFe(),
-           bk: () => ee.MFe(),
-           reserve: ie => ee.vUe(ie)
-         }), this.cmd = new Ke(ie, {
-           ptr: () => ee.pUe(),
- ... (7 more removed lines; see GitHub link above)
+ 
+     function JW(WW) {
+       const iW = WW.byteStride;
+       return void 0 === iW || Number.isInteger(iW) && iW >= 4 && iW <= 252 && iW % 4 === 0
```

#### 15. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L237-L250` → after: `L119-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L119-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/233.js#L119-L124) · [Before (L237-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/233.js#L237-L250)

```diff
-     function Ve(ee, ie) {
-       ee.forEachWorkerOut(((He, be, Me) => {
-         if ((0, ye._d)(He)) try {
-           var Ke;
-           null === (Ke = ie.worldgen) || void 0 === Ke || Ke.take(He, Me)
-         } catch (Fe) {
-           ee.crash(Oe, Fe)
-         } else try {
-           var Ue;
-           null === (Ue = ie.mesh) || void 0 === Ue || Ue.take(He, be, Me)
-         } catch (Fe) {
-           ee.crash(Ye, Fe)
-         }
-       }))
+     function hW(WW, iW, OW) {
+       var mW, EW;
+       const NW = null === (mW = WW.bufferViews) || void 0 === mW ? void 0 : mW[OW];
+       if (!NW || !iW || 0 !== NW.buffer) return null;
+       const PW = null !== (EW = NW.byteOffset) && void 0 !== EW ? EW : 0;
+       return !sW(PW) || !sW(NW.byteLength) || PW + NW.byteLength > iW.byteLength ? null : iW.subarray(PW, PW + NW.byteLength)
```

#### 16. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L255-L261` → after: `L128-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L128-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/233.js#L128-L139) · [Before (L255-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/233.js#L255-L261)

```diff
-       let He = !1;
-       const ye = () => {
-         He = !1, ie()
-       };
-       return () => {
-         !He && ee.cursor >= ae && (He = !0, queueMicrotask(ye))
-       }
+       var OW, EW, NW;
+       const PW = mW.o[iW.type],
+         LW = mW.c[iW.componentType];
+       if (!PW || !LW || !Number.isInteger(iW.count) || iW.count < 0) return !1;
+       if (void 0 === iW.bufferView) return !0;
+       const cW = null === (OW = WW.bufferViews) || void 0 === OW ? void 0 : OW[iW.bufferView],
+         wW = null !== (EW = iW.byteOffset) && void 0 !== EW ? EW : 0;
+       if (!cW || !sW(wW) || wW % LW !== 0) return !1;
+       const tW = PW * LW,
+         ZW = null !== (NW = cW.byteStride) && void 0 !== NW ? NW : tW;
+       if (ZW < tW) return !1;
+       return (0 === iW.count ? 0 : wW + ZW * (iW.count - 1) + tW) <= cW.byteLength
```

#### 17. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L266` → after: `L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/233.js#L143) · [Before (L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/233.js#L266)

```diff
-       return Pe.has(ee.site) ? ee.error instanceof WebAssembly.RuntimeError || (0, be.i)(ee.error) : !xe.has(ee.site) && ee.error instanceof Error
+       return WW > EW.fileBytes ? `is ${(WW/PW).toFixed(1)} MiB (the limit is ${EW.fileBytes/PW} MiB)` : null
```

#### 18. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L276-L342` → after: `L147-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L147-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/233.js#L147-L245) · [Before (L276-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/233.js#L276-L342)

```diff
-       const {
-         site: He,
-         error: be,
-         header: Me
-       } = ee, Ke = Me ? (0, ye.Xd)(Me.lastError) : "noFrame", Ue = `CORE-${He===Te?Ke:He}`, Fe = null === be || void 0 === be ? "" : ` ${(0,oe.n)(be)}`, Je = {
-         site: He,
-         wasmBuild: ie.wasm,
-         clientVersion: ie.client
-       };
-       return Me && (Je.status = String(Me.status), Je.lastError = Ke, Je.lastErrorCode = String(Me.lastError), Je.lastErrorDetail = String(Me.lastErrorDetail), Je.errorCount = String(Me.errorCount), Je.frameIndex = String(Me.frameIndex), Je.tickIndex = String(Me.tickIndex)), {
-         code: Ue,
-         message: `core ${He}, last error ${Ke};${Fe}`,
-         details: Je
-       }
-     }
-     class je {
- ... (51 more removed lines; see GitHub link above)
+       try {
+         return function(WW, iW) {
+           var OW, PW, ZW, jW, sW, nW, uW, oW, dW, eW, vW, gW, DW, VW, pW, fW, CW;
+           const XW = Array.isArray(WW.extensionsUsed) && WW.extensionsUsed.includes("KHR_draco_mesh_compression");
+           if (function(WW, iW) {
+               var OW, mW;
+               const {
+                 items: EW,
+                 perFile: PW,
+                 surfaces: LW,
+                 few: cW,
+                 bounds: wW,
+                 attributeMembers: tW
+               } = NW;
+               if (MW(WW.extensionsRequired, cW) || MW(WW.animations, 1 / 0) || MW(WW.skins, 1 / 0)) return !0;
+               if (null !== (OW = WW.animations) && void 0 !== OW && OW.length || null !== (mW = WW.skins) && void 0 !== mW && mW.length) return !1;
+ ... (83 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L344-L345` → after: `L247-L248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L247-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/233.js#L247-L248) · [Before (L344-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/233.js#L344-L345)

```diff
-               if (ge ??= null === (be = this.gameHost) || void 0 === be ? void 0 : be.takeFault(), void 0 === ge && !this.takeSends(te)) return ye.F.Fatal;
-               He = this.core.yX()
+               if (!kW(WW, FW.length) || Ei.has(WW)) return LW;
+               Ei.add(WW)
```

#### 20. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L347-L351` → after: `L250-L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L250-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/233.js#L250-L257) · [Before (L347-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/233.js#L347-L351)

```diff
-             return He
-           }))
-         } catch (Se) {
-           Oe = {
-             error: Se
+           const Pi = new Set,
+             Li = WW => {
+               var iW;
+               return !Pi.has(WW) && (Pi.add(WW), (null !== (iW = FW[WW].children) && void 0 !== iW ? iW : []).every(Li))
+             };
+           for (const mW of null !== (ci = rW[0].nodes) && void 0 !== ci ? ci : []) {
+             var ci;
+             if (!kW(mW, FW.length) || Ei.has(mW) || !Li(mW)) return LW
```

#### 21. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L353-L388` → after: `L259-L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L259-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/233.js#L259-L270) · [Before (L353-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/233.js#L353-L388)

```diff
-         }
-         ge ??= null === (He = this.gameHost) || void 0 === He ? void 0 : He.takeFault();
-         const Ze = this.stopped || null !== Oe || void 0 !== ge;
-         this.rings.reset(Ze ? Ke.cursor : Xe, Ze ? Fe.cursor : Be, Ze ? Je.cursor : Ee);
-         const we = null === Oe && void 0 === ge,
-           De = we && !this.stopped && pe === ye.F.Fatal && 0 === this.core.nq(),
-           Pe = we && !De ? this.headerView() : null,
-           Ae = De ? {
-             ...null !== (Ye = this.lastHeader) && void 0 !== Ye ? Ye : (0, ye.oe)(new Uint32Array(ye.eb)),
-             status: ye.F.Fatal,
-             lastError: ye.E.CoreBusy,
-             lastErrorDetail: 0
-           } : null === Pe ? null : (0, ye.oe)(Pe);
-         var Ye;
-         null !== Ae && (this.lastHeader = Ae);
-         const Ve = null !== Ae && pe !== ye.F.Fatal,
- ... (20 more removed lines; see GitHub link above)
+           for (const mW of FW) {
+             if (void 0 !== mW.matrix) return "uses node matrices";
+             if (void 0 !== mW.skin) return "uses skins";
+             if (void 0 !== mW.weights) return "uses morph targets";
+             if (void 0 !== mW.mesh && !kW(mW.mesh, QW.length)) return LW;
+             const WW = [
+               [mW.translation, 3],
+               [mW.rotation, 4],
+               [mW.scale, 3]
+             ];
+             for (const [iW, OW] of WW)
+               if (void 0 !== iW && (!Array.isArray(iW) || iW.length !== OW || !iW.every((WW => Number.isFinite(WW))))) return LW
```

#### 22. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L390-L398` → after: `L272-L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L272-L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/233.js#L272-L335) · [Before (L390-L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/233.js#L390-L398)

```diff
-           return this.handEnvEvents()
-         }
-         for (const ye of Ce) {
-           if (this.stopped) return !1;
-           try {
-             var me, le;
-             null === (me = (le = this.handlers).onNetEvent) || void 0 === me || me.call(le, ye)
-           } catch (Se) {
-             return this.crashOn(We, Se), !1
+           let wi = -1,
+             ti = 0,
+             Zi = 0,
+             xi = null;
+           for (const EW of QW) {
+             if (void 0 !== EW.weights) return "uses morph targets";
+             if (0 === EW.primitives.length) return LW;
+             for (const OW of EW.primitives) {
+               var li, Ai;
+               const EW = null !== (li = OW.mode) && void 0 !== li ? li : 4;
+               var bi;
+               if (4 !== EW && 0 !== EW) return `uses ${null!==(bi=AW[EW])&&void 0!==bi?bi:`mode ${EW}`} primitives`;
+               if (void 0 !== OW.targets) return "uses morph targets";
+               if (void 0 !== OW.material && !kW(OW.material, Wi.length)) return LW;
+               const NW = XW ? null === (Ai = OW.extensions) || void 0 === Ai ? void 0 : Ai.KHR_draco_mesh_compression : void 0;
+               if (NW) {
+ ... (48 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L400-L410` → after: `L337-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L337-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/233.js#L337-L343) · [Before (L400-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/233.js#L400-L410)

```diff
-         }
-         return this.handEnvEvents()
-       }
-       handEnvEvents() {
-         for (const Me of this.graceEvents) {
-           if (this.stopped) return !1;
-           try {
-             var ee, ie;
-             null === (ee = (ie = this.handlers).onReconnectGrace) || void 0 === ee || ee.call(ie, Me)
-           } catch (be) {
-             return this.crashOn(We, be), !1
+           let Ui = 0,
+             ki = 0,
+             si = 0;
+           for (let mW = 0; mW < FW.length; mW++) {
+             const WW = FW[mW].mesh;
+             if (void 0 !== WW && Pi.has(mW))
+               for (const iW of QW[WW].primitives) si++, Ui += aW[iW.attributes.POSITION].count, void 0 !== iW.indices && (ki += aW[iW.indices].count)
```

#### 24. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L412-L415` → after: `L345-L347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L345-L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/233.js#L345-L347) · [Before (L412-L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/233.js#L412-L415)

```diff
-         }
-         for (const Me of this.envEvents) {
-           if (this.stopped) return !1;
-           try {
+           const Mi = null !== (fW = null !== (CW = UW(Ui, EW.vertices, "vertices")) && void 0 !== CW ? CW : UW(ki, EW.indices, "indices")) && void 0 !== fW ? fW : UW(si, EW.primitives, "primitives");
+           if (Mi) return Mi;
+           for (const mW of Wi) {
```

#### 25. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L417-L442` → after: `L349-L358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L349-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/233.js#L349-L358) · [Before (L417-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/233.js#L417-L442)

```diff
-             null === (He = (ye = this.handlers).onEnvEvent) || void 0 === He || He.call(ye, Me)
-           } catch (be) {
-             return this.crashOn(te, be), !1
-           }
-         }
-         return !this.stopped
-       }
-       setEventWalker(ee) {
-         this.eventWalker = ee
-       }
-       writePendingInput() {
-         if (this.stopped) return !1;
-         const {
-           input: ee
-         } = this.rings;
-         try {
- ... (10 more removed lines; see GitHub link above)
+             if (void 0 !== mW.emissiveTexture) return "uses an emissive texture";
+             const iW = null !== (Ki = mW.alphaMode) && void 0 !== Ki ? Ki : "OPAQUE";
+             if ("OPAQUE" !== iW && "MASK" !== iW && "BLEND" !== iW) return LW;
+             const OW = null === (Si = mW.pbrMetallicRoughness) || void 0 === Si ? void 0 : Si.baseColorTexture;
+             if (OW) {
+               var Yi, yi, Ti, Ji, Hi;
+               const iW = null !== (Yi = WW.extensionsUsed) && void 0 !== Yi && Yi.includes("KHR_texture_transform") ? null === (yi = OW.extensions) || void 0 === yi ? void 0 : yi.KHR_texture_transform : void 0;
+               if (0 !== (null !== (Ti = OW.texCoord) && void 0 !== Ti ? Ti : 0) || 0 !== (null !== (Ji = null === iW || void 0 === iW ? void 0 : iW.texCoord) && void 0 !== Ji ? Ji : 0)) return "uses a second UV set";
+               const mW = ii[OW.index];
+               if (!mW || !kW(mW.source, Oi.length) || void 0 !== mW.sampler && !kW(mW.sampler, null === (Hi = WW.samplers) || void 0 === Hi ? void 0 : Hi.length)) return LW
```

#### 26. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L451-L675` → after: `L361-L374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L361-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/233.js#L361-L374) · [Before (L451-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/233.js#L451-L675)

```diff
-           Me > 0 && this.unsentOptions.splice(0, Me)
-         } catch (ie) {
-           return this.crash(Xe, ie), !1
-         }
-         return !0
-       }
-       setHoldDraws(ee) {
-         this.drawsHeld = ee
-       }
-       setUiPrefs(ee) {
-         this.unsentUiPrefs = {
-           ...ee
-         }
-       }
-       setEnvPrefs(ee) {
-         this.unsentEnvPrefs = {
- ... (209 more removed lines; see GitHub link above)
+           for (const mW of Oi) {
+             if (void 0 !== mW.uri) return cW;
+             if (void 0 === mW.bufferView) return LW;
+             const OW = hW(WW, iW, mW.bufferView);
+             if (!OW) return LW;
+             if ("image/png" !== mW.mimeType) {
+               var ni, ui, oi;
+               return `has ${TW(null!==(ni=null!==(ui={"image/jpeg":"JPEG","image/webp":"WebP","image/ktx2":"KTX2"}[null!==(oi=mW.mimeType)&&void 0!==oi?oi:""])&&void 0!==ui?ui:mW.mimeType)&&void 0!==ni?ni:"untyped")} image`
+             }
+             if (!yW(OW)) return `has ${TW(YW(OW))} image`;
+             const NW = new DataView(OW.buffer, OW.byteOffset, OW.byteLength),
+               PW = NW.getUint32(16),
+               wW = NW.getUint32(20);
+             if (PW > EW.imageSide || wW > EW.imageSide) return `has a ${PW} \xd7 ${wW} image (the limit is ${EW.imageSide})`
```

#### 27. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L677-L678` → after: `L376-L378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L376-L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/233.js#L376-L378) · [Before (L677-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/233.js#L677-L678)

```diff
-           oe = ee + (0, ye.le)(Fe)
-         }
+           return null
+         }(WW, iW)
+       } catch {
```

#### 28. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L800-L802` → after: `L384-L385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L384-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/233.js#L384-L385) · [Before (L800-L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/233.js#L800-L802)

```diff
-       be = {
-         scanned: !1
-       };
+       const iW = nW(WW.byteLength);
+       if (iW) return iW;
```

#### 29. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L804-L806` → after: `L387-L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L387-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/233.js#L387-L394) · [Before (L804-L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/233.js#L804-L806)

```diff
-         return ee()
-       } finally {
-         be = null
+         const {
+           json: iW,
+           bin: OW
+         } = (0, mW.y)(WW);
+         return uW(iW, OW)
+       } catch (OW) {
+         if (OW instanceof mW.n) return OW.reason;
+         throw OW
```

#### 30. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L817` → after: `L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/233.js#L398) · [Before (L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/233.js#L817)

```diff
-   41948: (ee, ie, He) => {
+   35330: (WW, iW, OW) => {
```

#### 31. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L819-L840` → after: `L400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/233.js#L400) · [Before (L819-L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/233.js#L819-L840)

```diff
-       e: () => ye
-     });
-     const ye = {
-       webgpu: "rust_webgpu",
-       webgl: "rust_webgl2",
-       webgl1: "rust_webgl1"
-     }
-   },
-   37102: (ee, ie, He) => {
-     function ye() {
-       return He(37108)
-     }
- 
-     function be() {
-       return He(37116)
-     }
- ... (6 more removed lines; see GitHub link above)
+       c: () => AW,
```

#### 32. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L842-L850` → after: `L402-L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L402-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/233.js#L402-L409) · [Before (L842-L850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/233.js#L842-L850)

```diff
-       h: () => be
-     })
-   },
-   36965: (ee, ie, He) => {
-     He.d(ie, {
-       d: () => Ue,
-       g: () => Je,
-       k: () => Ke,
-       n: () => Re
+       i: () => jW,
+       l: () => PW,
+       n: () => NW,
+       o: () => bW,
+       r: () => ZW,
+       t: () => xW,
+       v: () => LW,
+       y: () => tW
```

#### 33. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L852-L859` → after: `L411-L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L411-L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/233.js#L411-L416) · [Before (L852-L859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/233.js#L852-L859)

```diff
-     var ye = He(36950),
-       be = He(8);
-     const Me = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;
- 
-     function Ke(ee) {
-       if (ee instanceof WebAssembly.RuntimeError) return !0;
-       const ie = ee instanceof Error ? ee.stack : void 0;
-       return "string" === typeof ie && Me.test(ie)
+     const mW = 1179937895,
+       EW = 1313821514;
+     class NW extends Error {
+       constructor(WW) {
+         super(`GLB refused: it ${WW}`), this.reason = WW, this.name = "GlbRefused"
+       }
```

#### 34. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L861-L869` → after: `L418-L421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L418-L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/233.js#L418-L421) · [Before (L861-L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/233.js#L861-L869)

```diff
- 
-     function Ue(ee, ie, He) {
-       var be;
-       const Ke = ee instanceof Error ? ee.name : "thrown",
-         Ue = (ee instanceof Error && null !== (be = ee.stack) && void 0 !== be ? be : "").split("\n").filter((ee => Me.test(ee))).slice(0, 8).map((ee => ee.trim())),
-         Fe = null === ie ? "wasm memory unknown" : `wasm memory ${Math.round(ie/2**20)} MB`,
-         Je = null === He.panic ? "" : `, panic: ${(0,ye.i)(He.panic)}`,
-         oe = `${Ke}: ${ee instanceof Error?ee.message:String(ee)}`;
-       return `${(0,ye.m)(He.kind,He.refusedBytes)} ${oe} (${Fe})${Je}${Ue.length>0?` | ${Ue.join(" < ")}`:""}`
+     class PW extends Error {
+       constructor(WW) {
+         super(WW), this.name = "GlbError"
+       }
```

#### 35. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L874-L882` → after: `L425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/233.js#L425) · [Before (L874-L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/233.js#L874-L882)

```diff
-       var ie;
-       let He = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
-       if (!(ee instanceof Error) || !Fe.test(ee.message)) return {};
-       if (!("detached" in He)) return {
-         arrayBufferDetached: "absent"
-       };
-       return {
-         arrayBufferDetached: (0, be.S)(null === (ie = (0, be.J)(He, "detached")) || void 0 === ie ? void 0 : ie.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
-       }
+       return Reflect.get(WW, "scene")
```

#### 36. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L884` → after: `L427-L428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L427-L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/233.js#L427-L428) · [Before (L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/233.js#L884)

```diff
-     const oe = 500;
+     const cW = 5130562,
+       wW = "is not a binary glTF 2.0 file";
```

#### 37. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L887-L896` → after: `L431-L471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L431-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/233.js#L431-L471) · [Before (L887-L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/233.js#L887-L896)

```diff
-       let ie = "[object Object]";
-       try {
-         ie = String(ee)
-       } catch {}
-       if ("[object Object]" !== ie) return ie;
-       try {
-         var He, ye;
-         return null !== (He = null === (ye = JSON.stringify(ee)) || void 0 === ye ? void 0 : ye.slice(0, oe)) && void 0 !== He ? He : ie
-       } catch {
-         return ie
+       var iW;
+       const OW = WW instanceof Uint8Array ? WW : new Uint8Array(WW),
+         PW = function(WW) {
+           const iW = new DataView(WW.buffer, WW.byteOffset, WW.byteLength);
+           if (WW.byteLength < 20 || iW.getUint32(0, !0) !== mW || 2 !== iW.getUint32(4, !0)) return null;
+           const OW = Math.min(iW.getUint32(8, !0), WW.byteLength),
+             NW = iW.getUint32(12, !0);
+           if (iW.getUint32(16, !0) !== EW || 20 + NW > OW) return null;
+           let PW;
+           try {
+             PW = JSON.parse((new TextDecoder).decode(WW.subarray(20, 20 + NW)))
+           } catch {
+             return null
+           }
+           return "object" === typeof PW && null !== PW ? {
+             json: PW,
+ ... (25 more added lines; see GitHub link above)
```

#### 38. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L936-L938` → after: `L474-L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L474-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/233.js#L474-L476) · [Before (L936-L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/233.js#L936-L938)

```diff
-         kind: ye,
-         panic: Me > 0 ? null : be,
-         refusedBytes: Me
+         json: LW,
+         bin: bW,
+         fileBytes: OW.byteLength
```

#### 39. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L944` → after: `L481-L493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L481-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/233.js#L481-L493) · [Before (L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/233.js#L944)

```diff
-       return ee.replace(/\s*\n\s*/g, " / ").slice(0, Ue)
+       const iW = WW.slice(WW.indexOf(",") + 1),
+         OW = Uint8Array.fromBase64;
+       if (OW) return OW(iW).buffer;
+       const mW = atob(iW),
+         EW = new Uint8Array(mW.length);
+       for (let NW = 0; NW < mW.length; NW++) EW[NW] = mW.charCodeAt(NW);
+       return EW.buffer
+     }
+     async function xW(WW) {
+       if (WW.startsWith("data:")) return ZW(WW);
+       const iW = await fetch(WW);
+       if (!iW.ok) throw new PW(`fetching ${WW} failed: ${iW.status} ${iW.statusText}`);
+       return await iW.arrayBuffer()
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/234.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/234.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7)

#### 1. `bundles/bloxd.io/chunks/js/234.js` (Changed code · before: `L4-L8` → after: `L4-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7) · [After (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/234.js#L4-L15) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/234.js#L4-L8)

```diff
-   37286: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => Ke,
-       d: () => be,
-       h: () => Me
+   35332: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       animatedBlockTextures: () => cW,
+       armourAtlasUrl: () => PW,
+       averageColors: () => wW,
+       blockAtlasUrls: () => NW,
+       blockAtlasWidth: () => mW,
+       buildHash: () => ZW,
+       builtTextureIndexFingerprint: () => tW,
+       imagesPerAtlas: () => EW,
+       outputHash: () => xW,
+       rotatedBlockTextures: () => LW
```

#### 2. `bundles/bloxd.io/chunks/js/234.js` (Changed code · before: `L10-L277` → after: `L17-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7) · [After (L17-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/234.js#L17-L20) · [Before (L10-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/234.js#L10-L277)

```diff
-     var ye = He(1851);
-     class be extends Error {
-       constructor(ee) {
-         super("The game server didn't answer in time"), this.leg = ee, this.name = "SeatRequestTimedOut"
-       }
-     }
-     const Me = new class {
-       constructor() {
-         this.count = 0, this.answers = 0, this.waiting = new Set
-       }
-       get answered() {
-         return this.answers
-       }
-       answer() {
-         this.answers++
-       }
- ... (252 more removed lines; see GitHub link above)
+     const mW = 8,
+       EW = [256, 256, 256, 256, 256, 256, 114],
+       NW = [OW(35334), OW(35338), OW(35340), OW(35347), OW(35355), OW(35363), OW(35369)],
+       PW = OW(35373),
```

#### 3. `bundles/bloxd.io/chunks/js/234.js` (Changed code · before: `L279-L383` → after: `L22-L527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7) · [After (L22-L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/234.js#L22-L527) · [Before (L279-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/234.js#L279-L383)

```diff
-         halvedAt: null,
-         reloadSpent: !1
-       };
- 
-     function xe() {
-       let ee = null;
-       try {
-         var ie;
-         ee = JSON.parse(null !== (ie = (0, Je.k)((0, Je.o)(), ae)) && void 0 !== ie ? ie : "null")
-       } catch {
-         return ce
-       }
-       if ("object" !== typeof ee || null === ee) return ce;
-       const {
-         halvedAt: He,
-         reloadSpent: ye
- ... (89 more removed lines; see GitHub link above)
+         "alloy_kiln_top[rot[1": OW(35382),
+         "alloy_kiln_top[rot[2": OW(35389),
+         "alloy_kiln_top[rot[3": OW(35398),
+         "alloy_kiln_top[rot[4": OW(35406),
+         "auto_bench_top[rot[1": OW(35413),
+         "auto_bench_top[rot[2": OW(35417),
+         "auto_bench_top[rot[3": OW(35424),
+         "auto_bench_top[rot[4": OW(35426),
+         "belt_tunnel_exit_top[rot[1": OW(35432),
+         "belt_tunnel_exit_top[rot[2": OW(35439),
+         "belt_tunnel_exit_top[rot[3": OW(35446),
+         "belt_tunnel_exit_top[rot[4": OW(35451),
+         "belt_tunnel_top[rot[1": OW(35453),
+         "belt_tunnel_top[rot[2": OW(35461),
+         "belt_tunnel_top[rot[3": OW(35469),
+         "belt_tunnel_top[rot[4": OW(35477),
+ ... (490 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/234.js` (Changed code · before: `L386-L616` → after: `L530-L10909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7R530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7) · [After (L530-L10909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/234.js#L530-L10909) · [Before (L386-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/234.js#L386-L616)

```diff
-         targetBytes: Ue,
-         leastBytes: Fe
-       };
- 
-     function ge(ee) {
-       return {
-         targetBytes: ee,
-         leastBytes: 0
-       }
-     }
- 
-     function Oe(ee) {
-       return ee >= be.b ? Be : Ee
-     }
-     const de = 2 * Me;
- 
- ... (215 more removed lines; see GitHub link above)
+         Unloaded: [
+           [244, 0, 255],
+           [0, 0, 0]
+         ],
+         Dirt: [
+           [133, 98, 77],
+           [139, 102, 80],
+           [127, 92, 74]
+         ],
+         "Messy Dirt": [
+           [123, 87, 59],
+           [129, 90, 62],
+           [118, 81, 57]
+         ],
+         "Grass Block": [
+           [93, 141, 53],
+ ... (10364 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/235.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/235.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f)

#### 1. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/235.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/235.js#L4)

```diff
-   37015: (ee, ie, He) => {
+   37238: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L6-L10` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/235.js#L6) · [Before (L6-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/235.js#L6-L10)

```diff
-       ITEM_FILES_WITHOUT_SPRITE: () => Ue,
-       ITEM_SPRITES: () => Me,
-       ITEM_SPRITES_WITHOUT_FILE: () => Ke,
-       ITEM_SPRITE_RUNS: () => be,
-       MAX_SPRITE_ITEM_ID: () => ye
+       WasmTextureWorker: () => kW
```

#### 3. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L12-L16` → after: `L8-L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L8-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/235.js#L8-L326) · [Before (L12-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/235.js#L12-L16)

```diff
-     const ye = 10113,
-       be = "$######$################################################%=####################################################################################################################################################$########################################$#################### … [truncated]
-       Me = "unloaded|dirt|coarse_dirt|sand|clay|gravel|snow|log_maple|log_pine|log_plum|log_cedar|log_aspen|log_jungle|planks_maple|planks_aspen|planks_plum|planks_jungle|planks_pine|planks_cedar|stripped_maple_log|stripped_aspen_log|stripped_plum_log|stripped_jungle_log|stripped … [truncated]
-       Ke = "############################################################################################################################################4+##&###############%####$##3########################0######&#####&####$%###############<#####$#&###%##########'*######G%#####-$ … [truncated]
-       Ue = "amethite_armour_2|astral_armour_2|beetroot_plant_stage0|beetroot_plant_stage1|beetroot_plant_stage2|berry_bush_stage0|book_page|camel_painting_option2|carrot_plant_stage0|carrot_plant_stage1|carrot_plant_stage2|crimson_trapdoor|cursemetal_armour_2|date_pudding_option2 … [truncated]
+     var mW = OW(632),
+       EW = OW(4379),
+       NW = OW(37245),
+       PW = OW.n(NW);
+ 
+     function LW() {
+       return PW()('(()=>{var WW={d:(iW,OW)=>{for(var mW in OW)WW.o(OW,mW)&&!WW.o(iW,mW)&&Object.defineProperty(iW,mW,{enumerable:!0,get:OW[mW]})},o:(WW,iW)=>Object.prototype.hasOwnProperty.call(WW,iW),r:WW=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(W … [truncated]
+     }
+     var cW = OW(37250),
+       wW = OW(4409),
+       tW = OW(4426),
+       ZW = OW(4422),
+       xW = OW(4388);
+ 
+     function lW(WW) {
+       return "" === WW ? [] : WW.split("\0")
+ ... (303 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/236.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/236.js` (45 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0)

#### 1. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L2` → after: `L3`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R3) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/236.js#L3) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/236.js#L2)

```diff
- export const ids = [236, 237];
+ export const ids = [236];
```

#### 2. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L4-L21` → after: `L5-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L5-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/236.js#L5-L8) · [Before (L4-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/236.js#L4-L21)

```diff
-   44474: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       CharacterCustomisationUI: () => Ji
-     });
-     var ye = He(59),
-       be = He(2722),
-       Me = He(3848),
-       Ke = He(3829),
-       Ue = He(1075),
-       Fe = He(1053),
-       Je = He.n(Fe),
-       oe = He(1189),
-       Re = He(592),
-       ke = He(1127),
-       qe = He(2278),
-       fe = He(1557),
- ... (2 more removed lines; see GitHub link above)
+   41001: (WW, iW, OW) => {
+     function mW() {
+       return "object" === typeof process && "object" === typeof process.versions && "undefined" !== typeof process.versions.node
+     }
```

#### 3. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L23-L24` → after: `L10-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/236.js#L10-L11) · [Before (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/236.js#L23-L24)

```diff
-     function Xe(ee, ie) {
-       return pe.includes(ee) && "string" === typeof ie && (0, Te.h)(ee, ie)
+     function EW(WW) {
+       return WW instanceof Uint8Array && (!mW() || !Buffer.isBuffer(WW))
```

#### 4. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L28-L33` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/236.js#L15) · [Before (L28-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/236.js#L28-L33)

```diff
-       const ie = {};
-       for (const He of pe) {
-         const ye = ee[He];
-         void 0 !== ye && Xe(He, ye) && (ie[He] = ye)
-       }
-       return ie
+       return WW instanceof ArrayBuffer
```

#### 5. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L37` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/236.js#L19) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/236.js#L37)

```diff
-       return 0 === Object.keys(ee).length
+       return !!mW() && Buffer.isBuffer(WW)
```

#### 6. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L41-L73` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/236.js#L44) · [Before (L41-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/236.js#L41-L73)

```diff
-       return Object.entries(ee).every((ee => {
-         let [He, ye] = ee;
-         return ie[He] === ye
-       }))
-     }
-     var ge = He(2284),
-       Oe = He(3394),
-       de = He(2029),
-       We = He(1438),
-       te = He(2326),
-       Ze = He(2397),
-       we = He(18),
-       De = He(2862),
-       Pe = He(1490),
-       Ae = He(1083),
-       Ye = He(1913);
- ... (17 more removed lines; see GitHub link above)
+       return 506832829 * WW >>> iW
```

#### 7. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L160-L253` → after: `L47-L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L47-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/236.js#L47-L48) · [Before (L160-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/236.js#L160-L253)

```diff
-     function re(ee) {
-       let {
-         wornOutfit: ie,
-         onApply: He,
-         onOverwrite: be,
-         onDelete: Me
-       } = ee;
-       const {
-         t: Ke
-       } = (0, ke.v)(), {
-         accountId: Fe,
-         data: oe
-       } = (0, De.h)(ce, !1), {
-         userContext: Re
-       } = (0, Ue.b)();
-       async function qe(ee, ie) {
- ... (78 more removed lines; see GitHub link above)
+     function EW(WW, iW) {
+       return WW[iW] + (WW[iW + 1] << 8) + (WW[iW + 2] << 16) + (WW[iW + 3] << 24)
```

#### 8. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L260` → after: `L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/236.js#L52) · [Before (L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/236.js#L260)

```diff
-       return null !== ee && !(0, ei.d)(ii.c, ie, He, ee.collected, ee.ownedPacks)
+       return WW[iW] === WW[OW] && WW[iW + 1] === WW[OW + 1] && WW[iW + 2] === WW[OW + 2] && WW[iW + 3] === WW[OW + 3]
```

#### 9. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L263-L270` → after: `L55-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L55-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/236.js#L55-L60) · [Before (L263-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/236.js#L263-L270)

```diff
-     function yi(ee) {
-       let {
-         locked: ie,
-         children: He
-       } = ee;
-       return ie ? (0, Ge.jsx)(bi, {
-         children: He
-       }) : He
+     function PW(WW, iW, OW, mW, EW) {
+       return OW <= 60 ? (mW[EW] = OW - 1 << 2, EW += 1) : OW < 256 ? (mW[EW] = 240, mW[EW + 1] = OW - 1, EW += 2) : (mW[EW] = 244, mW[EW + 1] = OW - 1 & 255, mW[EW + 2] = OW - 1 >>> 8, EW += 3),
+         function(WW, iW, OW, mW, EW) {
+           var NW;
+           for (NW = 0; NW < EW; NW++) OW[mW + NW] = WW[iW + NW]
+         }(WW, iW, mW, EW, OW), EW + OW
```

#### 10. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L273-L288` → after: `L63-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/236.js#L63-L64) · [Before (L273-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/236.js#L273-L288)

```diff
-     function bi(ee) {
-       var ie;
-       let {
-         children: He
-       } = ee;
-       const {
-         t: ye
-       } = (0, ke.v)(), {
-         userContext: be
-       } = (0, Ue.b)(), Me = null !== (ie = be.dailyDrop) && void 0 !== ie && ie.hidden ? ye("dailyDrop:lockedFromHidden") : ye("dailyDrop:lockedFrom");
-       return (0, Ge.jsx)(Ie.g, {
-         tooltipInner: (0, Ge.jsx)(Ge.Fragment, {
-           children: Me
-         }),
-         children: He
-       })
+     function LW(WW, iW, OW, mW) {
+       return mW < 12 && OW < 2048 ? (WW[iW] = 1 + (mW - 4 << 2) + (OW >>> 8 << 5), WW[iW + 1] = 255 & OW, iW + 2) : (WW[iW] = 2 + (mW - 1 << 2), WW[iW + 1] = 255 & OW, WW[iW + 2] = OW >>> 8, iW + 3)
```

#### 11. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L291-L292` → after: `L67-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L67-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/236.js#L67-L69) · [Before (L291-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/236.js#L291-L292)

```diff
-     function Mi(ee, ie, He) {
-       return (0, qe.j)(ee, ie).purchasable && !(0, ve.A)(ee, ie, He)
+     function cW(WW, iW, OW, mW) {
+       for (; mW >= 68;) iW = LW(WW, iW, OW, 64), mW -= 64;
+       return mW > 64 && (iW = LW(WW, iW, OW, 60), mW -= 60), LW(WW, iW, OW, mW)
```

#### 12. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L295-L299` → after: `L72-L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L72-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/236.js#L72-L105) · [Before (L295-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/236.js#L295-L299)

```diff
-     function Ki(ee, ie) {
-       return Object.entries(ee).some((ee => {
-         let [He, ye] = ee;
-         return Mi(He, ye, ie)
-       }))
+     function wW(WW, iW, LW, wW, tW) {
+       for (var ZW = 1; 1 << ZW <= LW && ZW <= 14;) ZW += 1;
+       var xW = 32 - (ZW -= 1);
+       "undefined" === typeof OW[ZW] && (OW[ZW] = new Uint16Array(1 << ZW));
+       var lW, AW = OW[ZW];
+       for (lW = 0; lW < AW.length; lW++) AW[lW] = 0;
+       var bW, jW, UW, kW, sW, MW, KW, SW, YW, yW, TW = iW + LW,
+         JW = iW,
+         hW = iW,
+         HW = !0;
+       if (LW >= 15)
+         for (bW = TW - 15, UW = mW(EW(WW, iW += 1), xW); HW;) {
+           MW = 32, kW = iW;
+           do {
+             if (jW = UW, KW = MW >>> 5, MW += 1, kW = (iW = kW) + KW, iW > bW) {
+               HW = !1;
+ ... (18 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L303-L334` → after: `L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/236.js#L109) · [Before (L303-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/236.js#L303-L334)

```diff
-       var ie;
-       let {
-         pack: He,
-         ownedPacks: ye,
-         showStoreLink: be = !1,
-         children: Me
-       } = ee;
-       const {
-         t: Ke
-       } = (0, ke.v)(), Ue = Ce.b[He], Fe = Ue.purchasable && !ye.includes(He) && Ce.p.includes(He), oe = ue.l[He];
-       return (0, Ge.jsxs)("div", {
-         className: Je()("CosmeticPackGroup", {
-           CosmeticPackGroupLocked: Fe
-         }),
-         children: [oe && (0, Ge.jsx)(oe, {}), (0, Ge.jsxs)("div", {
-           className: "CosmeticPackGroupLabel",
- ... (16 more removed lines; see GitHub link above)
+       this.array = WW
```

#### 14. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L337-L472` → after: `L131-L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L131-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/236.js#L131-L134) · [Before (L337-L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/236.js#L337-L472)

```diff
-     function Fi(ee) {
-       let {
-         equippedEmoteIds: ie,
-         ownedPacks: He,
-         canBuy: ye,
-         onUpdateLoadout: be,
-         onEmoteSelected: Me,
-         onEquipPreviewSkin: Ke
-       } = ee;
-       const {
-         t: Ue
-       } = (0, ke.v)(), Fe = new Set(ie), Re = new Map, fe = Object.keys(qe.f.emote).sort(((ee, ie) => {
-         var He, ye, be, Me;
-         return (null !== (He = null === (ye = (0, qe.h)("emote", ee)) || void 0 === ye ? void 0 : ye.clientIdx) && void 0 !== He ? He : 0) - (null !== (be = null === (Me = (0, qe.h)("emote", ie)) || void 0 === Me ? void 0 : Me.clientIdx) && void 0 !== be ? be : 0)
-       })).filter((ee => {
-         const ie = (0, qe.j)("emote", ee),
- ... (120 more removed lines; see GitHub link above)
+     function mW(WW, iW, OW, mW, EW) {
+       var NW;
+       for (NW = 0; NW < EW; NW++) OW[mW + NW] = WW[iW + NW]
+     }
```

#### 15. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L474-L480` → after: `L136-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L136-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/236.js#L136-L139) · [Before (L474-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/236.js#L474-L480)

```diff
-       function oi() {
-         null !== bi.current && (clearTimeout(bi.current), bi.current = null);
-         const ee = Ji.current;
-         null !== ee && (Ji.current = null, (0, Qe.d)(pe, [
-           ["emote", ee]
-         ]))
-       }
+     function EW(WW, iW, OW, mW) {
+       var EW;
+       for (EW = 0; EW < mW; EW++) WW[iW + EW] = WW[iW - OW + EW]
+     }
```

#### 16. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L482-L498` → after: `L141-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L141-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/236.js#L141-L148) · [Before (L482-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/236.js#L482-L498)

```diff
-       function Ri(ee, ie, He) {
-         var ye, be, Me;
-         he.current = {
-           ...he.current,
-           [ee]: ie
-         }, Be(), He && ((0, Qe.d)(pe, [
-           [ee, ie]
-         ]), ue(null));
-         const Ke = (0, qe.h)(ee, ie);
-         if (null !== Ke && void 0 !== Ke && Ke.colourGroup && null !== (ye = Ce.b[Ke.cosmeticPack].colourGroups) && void 0 !== ye && null !== (be = ye[Ke.colourGroup]) && void 0 !== be && be.showSwatchSelector) {
-           const He = (0, qe.g)(ie);
-           He && Ve((ie => ({
-             ...ie,
-             [`${Ke.cosmeticPack}_${ee}_${Ke.colourGroup}`]: parseInt(He[1])
-           })))
-         }
- ... (1 more removed lines; see GitHub link above)
+     function NW(WW) {
+       this.array = WW, this.pos = 0
+     }
+     NW.prototype.readUncompressedLength = function() {
+       for (var WW, iW, OW = 0, mW = 0; mW < 32 && this.pos < this.array.length;) {
+         if (WW = this.array[this.pos], this.pos += 1, (iW = 127 & WW) << mW >>> mW !== iW) return -1;
+         if (OW |= iW << mW, WW < 128) return OW;
+         mW += 7
```

#### 17. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L500-L507` → after: `L150-L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L150-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/236.js#L150-L198) · [Before (L500-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/236.js#L500-L507)

```diff
- 
-       function ki(ee) {
-         Pe((ie => {
-           const He = {
-             ...ie
-           };
-           return delete He[ee], He
-         }))
+       return -1
+     }, NW.prototype.uncompressToBuffer = function(WW) {
+       for (var iW, NW, PW, LW, cW = this.array, wW = cW.length, tW = this.pos, ZW = 0; tW < cW.length;)
+         if (iW = cW[tW], tW += 1, 0 === (3 & iW)) {
+           if ((NW = 1 + (iW >>> 2)) > 60) {
+             if (tW + 3 >= wW) return !1;
+             PW = NW - 60, NW = 1 + ((NW = cW[tW] + (cW[tW + 1] << 8) + (cW[tW + 2] << 16) + (cW[tW + 3] << 24)) & OW[PW]), tW += PW
+           }
+           if (tW + NW > wW) return !1;
+           mW(cW, tW, WW, ZW, NW), tW += NW, ZW += NW
+         } else {
+           switch (3 & iW) {
+             case 1:
+               NW = 4 + (iW >>> 2 & 7), LW = cW[tW] + (iW >>> 5 << 8), tW += 1;
+               break;
+             case 2:
+ ... (33 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L509-L530` → after: `L200-L236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L200-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/236.js#L200-L236) · [Before (L509-L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/236.js#L509-L530)

```diff
- 
-       function qi(ee, ie) {
-         let {
-           undoable: He
-         } = ie;
-         Object.keys(De).length > 0 && Pe({});
-         const ye = Object.entries(ee).filter((ee => {
-           let [ie, He] = ee;
-           return he.current[ie] !== He && !Mi(ie, He, fi) && !Hi(Ti, ie, He)
-         }));
-         He ? ye.length > 0 && ue({
-           kind: "worn",
-           outfit: ze(he.current)
-         }) : ue(null);
-         for (const [be, Me] of ye) Ri(be, Me, !1);
-         ye.length > 0 && (0, Qe.d)(pe, ye)
- ... (6 more removed lines; see GitHub link above)
+     }
+   },
+   41149: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => NW,
+       g: () => EW,
+       i: () => wW,
+       k: () => lW,
+       n: () => PW,
+       q: () => AW
+     });
+     var mW = OW(41154);
+     const EW = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350],
+       NW = [-1, 1, 2, 3, 4, 5, 6, 8],
+       PW = WW => {
+         if (!WW || WW.byteLength < 2) throw new TypeError("AAC description must be at least 2 bytes long.");
+ ... (21 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L532-L534` → after: `L238-L244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L238-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/236.js#L238-L244) · [Before (L532-L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/236.js#L532-L534)

```diff
-           of ee) {
-           if (!He) return;
-           ie = !0, Ne.current || Ri(ye, be, !1), Be()
+         return null !== tW && tW > 1 && (xW = !1), {
+           objectType: OW,
+           coreObjectType: ZW,
+           frequencyIndex: EW,
+           channelConfiguration: wW,
+           outputSampleRate: lW,
+           outputNumberOfChannels: xW && 1 === tW ? 2 : tW
```

#### 20. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L536-L540` → after: `L246-L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L246-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/236.js#L246-L258) · [Before (L536-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/236.js#L536-L540)

```diff
-         ie && (Ne.current = !0)
-       })), (0, ye.useEffect)((() => {
-         if (!Xe) {
-           for (const [ee, ie] of Object.entries(pe.getPlayerCosmetics())) Ri(ee, ie, !1);
-           Be()
+       },
+       LW = WW => {
+         const iW = WW.readBits(5);
+         return 31 === iW ? 32 + WW.readBits(6) : iW
+       },
+       cW = WW => {
+         const iW = WW.readBits(4);
+         return 15 === iW ? {
+           frequencyIndex: iW,
+           sampleRate: WW.readBits(24)
+         } : {
+           frequencyIndex: iW,
+           sampleRate: iW < EW.length ? EW[iW] : null
```

#### 21. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L542-L578` → after: `L260-L436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L260-L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/236.js#L260-L436) · [Before (L542-L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/236.js#L542-L578)

```diff
-       }), [Xe]), (0, ye.useEffect)((() => () => {
-         oi()
-       }), []);
-       const fi = pe.getOwnedCosmeticPacks(),
-         Ti = function(ee, ie) {
-           return null === ee ? null : {
-             collected: new Set(ee.collected),
-             ownedPacks: ie
-           }
-         }(pe.dailyDrop, fi),
-         Xi = (0, ne.usePurchasesAllowed)(),
-         zi = Object.keys(qe.f[He]).filter((ee => {
-           const ie = (0, qe.j)(He, ee),
-             ye = (0, ve.A)(He, ee, fi);
-           return !(ie.purchasable && !ye && !Xi) && (ie.clientSelectable || ye)
-         })).sort(((ee, ie) => {
- ... (21 more removed lines; see GitHub link above)
+       },
+       wW = WW => {
+         const iW = 5 === WW.objectType || 29 === WW.objectType,
+           OW = 29 === WW.objectType,
+           EW = iW ? WW.outputSampleRate / 2 : WW.outputSampleRate,
+           PW = OW ? 1 : WW.outputNumberOfChannels,
+           LW = NW.indexOf(PW);
+         if (-1 === LW) throw new TypeError(`Unsupported number of channels: ${WW.outputNumberOfChannels}`);
+         let cW = 16;
+         WW.objectType >= 32 && (cW += 6), 15 === xW(EW) && (cW += 24), iW && (cW += 9, 15 === xW(WW.outputSampleRate) && (cW += 24));
+         const wW = Math.ceil(cW / 8),
+           lW = new Uint8Array(wW),
+           AW = new mW.c(lW);
+         return tW(AW, WW.objectType), ZW(AW, EW), AW.writeBits(4, LW), iW && (ZW(AW, WW.outputSampleRate), tW(AW, 2)), AW.writeBits(3, 0), lW
+       },
+       tW = (WW, iW) => {
+ ... (161 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L580` → after: `L438-L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L438-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/236.js#L438-L453) · [Before (L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/236.js#L580)

```diff
-           ie = new Map;
+           OW = WW.length;
+         for (let mW = 0; mW < OW; mW++) mW + 2 < OW && 0 === WW[mW] && 0 === WW[mW + 1] && 3 === WW[mW + 2] ? (iW.push(0, 0), mW += 2) : iW.push(WW[mW]);
+         return new Uint8Array(iW)
+       },
+       jW = new Uint8Array([0, 0, 0, 1]),
+       UW = WW => {
+         const iW = WW.reduce(((WW, iW) => WW + jW.byteLength + iW.byteLength), 0),
+           OW = new Uint8Array(iW);
+         let mW = 0;
+         for (const EW of WW) OW.set(jW, mW), mW += jW.byteLength, OW.set(EW, mW), mW += EW.byteLength;
+         return OW
+       },
+       kW = (WW, iW) => {
+         const OW = WW.reduce(((WW, OW) => WW + iW + OW.byteLength), 0),
+           mW = new Uint8Array(OW);
+         let NW = 0;
```

#### 23. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L582-L584` → after: `L455-L469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L455-L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/236.js#L455-L469) · [Before (L582-L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/236.js#L582-L584)

```diff
-           var di, Wi;
-           const be = null !== (di = null === (Wi = (0, qe.h)(He, ye)) || void 0 === Wi ? void 0 : Wi.colourGroup) && void 0 !== di ? di : null;
-           ie.has(be) || (ie.set(be, []), ee.push(be)), ie.get(be).push(ye)
+           const WW = new DataView(mW.buffer, mW.byteOffset, mW.byteLength);
+           switch (iW) {
+             case 1:
+               WW.setUint8(NW, PW.byteLength);
+               break;
+             case 2:
+               WW.setUint16(NW, PW.byteLength, !1);
+               break;
+             case 3:
+               (0, EW.cd)(WW, NW, PW.byteLength, !1);
+               break;
+             case 4:
+               WW.setUint32(NW, PW.byteLength, !1)
+           }
+           NW += iW, mW.set(PW, NW), NW += PW.byteLength
```

#### 24. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L586-L601` → after: `L471-L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L471-L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/236.js#L471-L481) · [Before (L586-L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/236.js#L586-L601)

```diff
-         const Me = ee.map((ee => {
-           var be;
-           const Me = ie.get(ee),
-             Ke = ee ? null === (be = Ce.b[ye].colourGroups) || void 0 === be ? void 0 : be[ee] : void 0,
-             Ue = !0 === (null === Ke || void 0 === Ke ? void 0 : Ke.showSwatchSelector) && !gi.has(`${ye}_${ee}`);
-           if (Ue && Ke) {
-             var Fe;
-             const ie = null !== (Fe = Ye[`${ye}_${He}_${ee}`]) && void 0 !== Fe ? Fe : (0, Ce.f)(Ke.colours);
-             return {
-               groupName: ee,
-               showSwatch: Ue,
-               cosmetics: Me.filter((ee => {
-                 const He = (0, qe.g)(ee);
-                 return !He || ie.toString() === He[1].toString()
-               }))
-             }
+         return mW
+       },
+       sW = WW => {
+         try {
+           const iW = [],
+             OW = [],
+             mW = [];
+           for (const EW of xW(WW)) {
+             const NW = WW.subarray(EW.offset, EW.offset + EW.length),
+               PW = AW(NW[0]);
+             PW === cW.SPS ? iW.push(NW) : PW === cW.PPS ? OW.push(NW) : PW === cW.SPS_EXT && mW.push(NW)
```

#### 25. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L604-L606` → after: `L490-L500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L490-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/236.js#L490-L500) · [Before (L604-L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/236.js#L604-L606)

```diff
-             groupName: ee,
-             cosmetics: Me,
-             showSwatch: Ue
+             configurationVersion: 1,
+             avcProfileIndication: PW.profileIdc,
+             profileCompatibility: PW.constraintFlags,
+             avcLevelIndication: PW.levelIdc,
+             lengthSizeMinusOne: 3,
+             sequenceParameterSets: iW,
+             pictureParameterSets: OW,
+             chromaFormat: LW ? PW.chromaFormatIdc : null,
+             bitDepthLumaMinus8: LW ? PW.bitDepthLumaMinus8 : null,
+             bitDepthChromaMinus8: LW ? PW.bitDepthChromaMinus8 : null,
+             sequenceParameterSetExt: LW ? mW : null
```

#### 26. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L608-L655` → after: `L502-L676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L502-L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/236.js#L502-L676) · [Before (L608-L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/236.js#L608-L655)

```diff
-         }));
-         Oi.set(ye, Me)
-       }
-       const ti = Array.from(Bi.keys()),
-         Zi = new Map;
-       for (const [ye, be] of Object.entries(fe.b)) {
-         const ee = Ce.b[be.cosmeticPack],
-           ie = (0, ve.y)(be.cosmetics, fi),
-           He = Ce.h.some((ee => (0, Ce.d)(ee) === ye));
-         (ee.clientSelectable || He || ie) && ((!ee.purchasable || ie || Xi) && (Zi.has(be.cosmeticPack) || Zi.set(be.cosmeticPack, []), Zi.get(be.cosmeticPack).push([ye, be])))
-       }
-       const wi = Array.from(Zi.keys());
-       return (0, Ge.jsxs)("div", {
-         className: "CharCustomisationBody",
-         children: [("cape" === He || "nameColour" === He) && !(0, Re.b)(pe.getPlayerRanks()) && (0, Ge.jsxs)("div", {
-           className: "CharCustomisationBodyHeader",
- ... (32 more removed lines; see GitHub link above)
+         } catch (iW) {
+           return NW.d._error("Error building AVC Decoder Configuration Record:", iW), null
+         }
+       },
+       MW = WW => {
+         const iW = [];
+         iW.push(WW.configurationVersion), iW.push(WW.avcProfileIndication), iW.push(WW.profileCompatibility), iW.push(WW.avcLevelIndication), iW.push(252 | 3 & WW.lengthSizeMinusOne), iW.push(224 | 31 & WW.sequenceParameterSets.length);
+         for (const OW of WW.sequenceParameterSets) {
+           const WW = OW.byteLength;
+           iW.push(WW >> 8), iW.push(255 & WW);
+           for (let mW = 0; mW < WW; mW++) iW.push(OW[mW])
+         }
+         iW.push(WW.pictureParameterSets.length);
+         for (const OW of WW.pictureParameterSets) {
+           const WW = OW.byteLength;
+           iW.push(WW >> 8), iW.push(255 & WW);
+ ... (159 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L657-L733` → after: `L678-L702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L678-L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/236.js#L678-L702) · [Before (L657-L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/236.js#L657-L733)

```diff
-             }), wi.map((ee => {
-               const ie = Zi.get(ee);
-               return (0, Ge.jsx)(Ui, {
-                 pack: ee,
-                 ownedPacks: fi,
-                 showStoreLink: !Ce.l.includes(ee) && ie.some((ee => {
-                   let [, {
-                     cosmetics: ie
-                   }] = ee;
-                   return Ki(ie, fi)
-                 })),
-                 children: (0, Ge.jsx)("div", {
-                   className: "CharacterPresetsGrid",
-                   children: ie.map((ee => {
-                     let [ie, {
-                       cosmetics: He
- ... (61 more removed lines; see GitHub link above)
+           }(0, EW.Ic)(OW);
+           const lW = (0, EW.Ic)(OW);
+           if (0 === lW)(0, EW.Ic)(OW);
+           else if (1 === lW) {
+             OW.skipBits(1), (0, EW.Jc)(OW), (0, EW.Jc)(OW);
+             const WW = (0, EW.Ic)(OW);
+             for (let iW = 0; iW < WW; iW++)(0, EW.Jc)(OW)
+           }(0, EW.Ic)(OW), OW.skipBits(1);
+           const AW = (0, EW.Ic)(OW),
+             jW = (0, EW.Ic)(OW),
+             UW = 16 * (AW + 1),
+             kW = 16 * (jW + 1);
+           let sW = UW,
+             MW = kW;
+           const KW = OW.readBits(1);
+           KW || OW.skipBits(1), OW.skipBits(1);
+ ... (9 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L735-L865` → after: `L704-L712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L704-L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/236.js#L704-L712) · [Before (L735-L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/236.js#L735-L865)

```diff
-           }), "characters" !== ie && "emote" !== ie && (0, Ge.jsxs)("div", {
-             className: "CharCustomisPartSelectorWrapper",
-             children: [!1, ti.map((ee => {
-               const ie = Oi.get(ee);
-               return (0, Ge.jsx)(Ui, {
-                 pack: ee,
-                 ownedPacks: fi,
-                 children: ie.map((ie => {
-                   var ye;
-                   let {
-                     groupName: be,
-                     cosmetics: Me,
-                     showSwatch: Ke
-                   } = ie;
-                   const Ue = be ? null === (ye = Ce.b[ee].colourGroups) || void 0 === ye ? void 0 : ye[be] : void 0,
-                     Fe = `${ee}_${He}_${be}`;
- ... (115 more removed lines; see GitHub link above)
+             sW -= PW * (WW + iW), MW -= LW * (mW + NW)
+           }
+           let YW = 2,
+             TW = 2,
+             JW = 2,
+             hW = 0,
+             HW = {
+               num: 1,
+               den: 1
```

#### 29. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L867-L877` → after: `L714-L729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L714-L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/236.js#L714-L729) · [Before (L867-L877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/236.js#L867-L877)

```diff
-             onDrawn: ee => {
-               var ie, He;
-               const ye = null === (ie = ei.current) || void 0 === ie || null === (He = ie.getDevTools()) || void 0 === He ? void 0 : He.canvas(),
-                 be = (ee, ie) => 0 === Object.keys(Ae.current).length && JSON.stringify(pe.getPlayerCosmetics()) === ee && ii.current.seq === ie.seq && null === ii.current.id,
-                 Ue = JSON.stringify(pe.getPlayerCosmetics()),
-                 Fe = ii.current;
-               if (!Me.j || !ee || void 0 === ye || !be(Ue, Fe)) return;
-               const Je = (0, Ke.d)(pe);
-               (0, Ke.c)(ye, Je, (() => be(Ue, Fe))).catch((ee => {
-                 console.warn("[loading-character] couldn't keep your picture from Customise", ee)
-               }))
+             nW = null,
+             uW = null,
+             oW = null,
+             dW = null;
+           const eW = OW.pos;
+           if (OW.readBits(1)) {
+             if (OW.readBits(1)) {
+               const WW = OW.readBits(8);
+               if (255 === WW) HW = {
+                 num: OW.readBits(16),
+                 den: OW.readBits(16)
+               };
+               else {
+                 const iW = SW[WW];
+                 iW && (HW = iW)
+               }
```

#### 30. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L879-L944` → after: `L731-L778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L731-L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/236.js#L731-L778) · [Before (L879-L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/236.js#L879-L944)

```diff
-           })]
-         })]
-       })
-     }))
-   },
-   44481: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       CharacterPreview: () => pe
-     });
-     var ye = He(59),
-       be = He(2957),
-       Me = He(1189),
-       Ke = He(2683),
-       Ue = He(34919),
-       Fe = He(4010),
-       Je = He(37049),
- ... (50 more removed lines; see GitHub link above)
+             OW.readBits(1) && OW.skipBits(1);
+             if (OW.readBits(1)) {
+               OW.skipBits(3), hW = OW.readBits(1);
+               OW.readBits(1) && (YW = OW.readBits(8), TW = OW.readBits(8), JW = OW.readBits(8))
+             }
+             OW.readBits(1) && ((0, EW.Ic)(OW), (0, EW.Ic)(OW));
+             OW.readBits(1) && (OW.skipBits(32), OW.skipBits(32), OW.skipBits(1));
+             const WW = OW.readBits(1);
+             WW && yW(OW);
+             const iW = OW.readBits(1);
+             iW && yW(OW), (WW || iW) && OW.skipBits(1), OW.skipBits(1), oW = OW.pos, dW = OW.readBits(1), dW && (OW.skipBits(1), (0, EW.Ic)(OW), (0, EW.Ic)(OW), (0, EW.Ic)(OW), (0, EW.Ic)(OW), nW = (0, EW.Ic)(OW), uW = (0, EW.Ic)(OW))
+           }
+           if (null === nW) {
+             (0, EW.K)(null === uW);
+             if (44 !== NW && 86 !== NW && 100 !== NW && 110 !== NW && 122 !== NW && 244 !== NW || !(16 & PW)) {
+               const WW = AW + 1,
+ ... (32 more added lines; see GitHub link above)
```

#### 31. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L946-L1006` → after: `L780-L837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L780-L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/236.js#L780-L837) · [Before (L946-L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/236.js#L946-L1006)

```diff
-       })
-     }
-     let fe = null;
-     const Te = .6 * Math.PI,
-       pe = (0, ye.memo)((0, ye.forwardRef)((function(ee, ie) {
-         let {
-           onReady: He,
-           onDrawn: Je,
-           owner: oe = "other",
-           framing: Re = "player",
-           forcedCosmetics: pe,
-           oo: Xe,
-           emotePlaySeq: ze,
-           turntableFromYaw: Be = null,
-           nametag: Ee
-         } = ee;
- ... (45 more removed lines; see GitHub link above)
+       },
+       yW = WW => {
+         const iW = (0, EW.Ic)(WW);
+         WW.skipBits(4), WW.skipBits(4);
+         for (let OW = 0; OW <= iW; OW++)(0, EW.Ic)(WW), (0, EW.Ic)(WW), WW.skipBits(1);
+         WW.skipBits(5), WW.skipBits(5), WW.skipBits(5), WW.skipBits(5)
+       },
+       TW = (WW, iW) => {
+         if (iW.description) {
+           const OW = 3 & (0, EW.pd)(iW.description)[21];
+           return lW(WW, OW + 1)
+         }
+         return xW(WW)
+       },
+       JW = WW => WW >> 1 & 63,
+       hW = WW => {
+ ... (42 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L1008-L1035` → after: `L839-L888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L839-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/236.js#L839-L888) · [Before (L1008-L1035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/236.js#L1008-L1035)

```diff
-             },
-             isReady() {
-               var ee, ie;
-               return null !== (ee = null === (ie = We.current) || void 0 === ie ? void 0 : ie.isReady()) && void 0 !== ee && ee
-             },
-             resetCamera() {
-               var ee;
-               null === (ee = We.current) || void 0 === ee || ee.resetCamera()
-             },
-             setOrbit(ee) {
-               var ie;
-               null === (ie = We.current) || void 0 === ie || ie.setOrbit(ee)
-             },
-             turnCamera(ee) {
-               var ie;
-               const He = Ue.e[Re];
- ... (12 more removed lines; see GitHub link above)
+               const sW = (0, EW.Ic)(iW),
+                 MW = (0, EW.Ic)(iW);
+               (0, EW.Ic)(iW);
+               const KW = iW.readBits(1);
+               let SW = 0;
+               for (let WW = KW ? 0 : OW; WW <= OW; WW++)(0, EW.Ic)(iW), SW = (0, EW.Ic)(iW), (0, EW.Ic)(iW);
+               (0, EW.Ic)(iW), (0, EW.Ic)(iW), (0, EW.Ic)(iW), (0, EW.Ic)(iW), (0, EW.Ic)(iW), (0, EW.Ic)(iW), iW.readBits(1) && iW.readBits(1) && nW(iW), iW.skipBits(1), iW.skipBits(1), iW.readBits(1) && (iW.skipBits(4), iW.skipBits(4), (0, EW.Ic)(iW), (0, EW.Ic)(iW), iW.skipBits … [truncated]
+               const YW = (0, EW.Ic)(iW);
+               if (uW(iW, YW), iW.readBits(1)) {
+                 const WW = (0, EW.Ic)(iW);
+                 for (let OW = 0; OW < WW; OW++)(0, EW.Ic)(iW), iW.skipBits(1)
+               }
+               iW.skipBits(1), iW.skipBits(1);
+               let yW = 2,
+                 TW = 2,
+                 JW = 2,
+ ... (34 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L1038-L1077` → after: `L901-L1011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L901-L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/236.js#L901-L1011) · [Before (L1038-L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/236.js#L1038-L1077)

```diff
-         }), [pe, Re, ce]), (0, ye.useEffect)((() => {
-           const ee = Fe.b.register(oe),
-             ie = Ue.i.openCharacter(ge.current, Re);
-           We.current = ie, fe = ie;
-           let He = !0;
-           return ie.ready.then((() => {
-             He && (De(!0), Pe.current())
-           })).catch((ee => {
-             console.error("Failed to set up the character preview", ee)
-           })), () => {
-             He = !1, ee(), fe === ie && (ie.resetCamera(), fe = null), ie.close(), We.current = null
-           }
-         }), []), (0, ye.useEffect)((() => {
-           Oe <= 0 || de <= 0 || We.current.resize(Oe, de)
-         }), [Oe, de]), (0, ye.useEffect)((() => {
-           if (!we) return;
- ... (24 more removed lines; see GitHub link above)
+           const ZW = [...iW.length ? [{
+             arrayCompleteness: 1,
+             nalUnitType: wW.VPS_NUT,
+             nalUnits: iW
+           }] : [], ...OW.length ? [{
+             arrayCompleteness: 1,
+             nalUnitType: wW.SPS_NUT,
+             nalUnits: OW
+           }] : [], ...mW.length ? [{
+             arrayCompleteness: 1,
+             nalUnitType: wW.PPS_NUT,
+             nalUnits: mW
+           }] : [], ...PW.length ? [{
+             arrayCompleteness: 1,
+             nalUnitType: JW(PW[0][0]),
+             nalUnits: PW
+ ... (95 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L1079-L1086` → after: `L1013-L1017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R1013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L1013-L1017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/236.js#L1013-L1017) · [Before (L1079-L1086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/236.js#L1079-L1086)

```diff
-           const ye = performance.now();
-           let be = 0;
-           const Me = Ke => {
-             ee.setOrbit({
-               yaw: Be + (Ke - ye) / 6e3 * 2 * Math.PI,
-               pitch: ie,
-               radius: He
-             }), be = requestAnimationFrame(Me)
+         if (WW.readBits(1)) {
+           const iW = WW.readBits(8);
+           if (255 === iW) cW = {
+             num: WW.readBits(16),
+             den: WW.readBits(16)
```

#### 35. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L1088-L1127` → after: `L1019-L1109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R1019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L1019-L1109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/236.js#L1019-L1109) · [Before (L1088-L1127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/236.js#L1088-L1127)

```diff
-           return be = requestAnimationFrame(Me), () => {
-             cancelAnimationFrame(be), fe === ee && ee.resetCamera()
-           }
-         }), [we, Be]), (0, ke.jsxs)(ke.Fragment, {
-           children: [(0, ke.jsx)("div", {
-             className: "CharCustomisationPreview",
-             ref: ge
-           }), Ee && (0, ke.jsx)(qe, {
-             nametag: Ee
-           })]
-         })
-       })))
-   },
-   37175: (ee, ie, He) => {
-     He.d(ie, {
-       d: () => Ke
- ... (24 more removed lines; see GitHub link above)
+           else {
+             const WW = SW[iW];
+             WW && (cW = WW)
+           }
+         }
+         return WW.readBits(1) && WW.readBits(1), WW.readBits(1) && (WW.readBits(3), PW = WW.readBits(1), WW.readBits(1) && (OW = WW.readBits(8), mW = WW.readBits(8), NW = WW.readBits(8))), WW.readBits(1) && ((0, EW.Ic)(WW), (0, EW.Ic)(WW)), WW.readBits(1), WW.readBits(1), WW.read … [truncated]
+           pixelAspectRatio: cW,
+           colourPrimaries: OW,
+           transferCharacteristics: mW,
+           matrixCoefficients: NW,
+           fullRangeFlag: PW,
+           minSpatialSegmentationIdc: LW
+         }
+       },
+       eW = (WW, iW, OW) => {
+         let mW = !1,
+ ... (75 more added lines; see GitHub link above)
```

#### 36. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L1129-L1130` → after: `L1111-L1128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R1111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L1111-L1128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/236.js#L1111-L1128) · [Before (L1129-L1130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/236.js#L1129-L1130)

```diff
-             te: ie,
-             Ze: He
+             configurationVersion: mW,
+             generalProfileSpace: PW,
+             generalTierFlag: LW,
+             generalProfileIdc: cW,
+             generalProfileCompatibilityFlags: wW,
+             generalConstraintIndicatorFlags: tW,
+             generalLevelIdc: ZW,
+             minSpatialSegmentationIdc: xW,
+             parallelismType: lW,
+             chromaFormatIdc: AW,
+             bitDepthLumaMinus8: bW,
+             bitDepthChromaMinus8: jW,
+             avgFrameRate: UW,
+             constantFrameRate: sW,
+             numTemporalLayers: MW,
+             temporalIdNested: KW,
+ ... (2 more added lines; see GitHub link above)
```

#### 37. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L1132-L1181` → after: `L1130-L6693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R1130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L1130-L6693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/236.js#L1130-L6693) · [Before (L1132-L1181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/236.js#L1132-L1181)

```diff
-         }));
-         this.pending.clear(), this.lastSentAt = Date.now(), be.b.updateCosmetics(ee, ie).catch((ee => {
-           console.error("Failed to update cosmetics", ee)
-         }))
-       }
-     };
- 
-     function Ke(ee, ie) {
-       for (const [He, ye] of ie) ee.setPlayerCosmetics(He, ye);
-       if (null === ye.gameBridge.latest("connectedGame").websocketUrl) Me.save(ee, ie);
-       else
-         for (const [He, be] of ie) ye.gameBridge.send("updateMyCosmetic", {
-           te: He,
-           Ze: be
-         })
-     }
- ... (34 more removed lines; see GitHub link above)
+         } catch (iW) {
+           return NW.d._error("Error deserializing HEVC Decoder Configuration Record:", iW), null
+         }
+       };
+     var VW;
+     ! function(WW) {
+       WW[WW.audAllowed = 0] = "audAllowed", WW[WW.beforeFirstVcl = 1] = "beforeFirstVcl", WW[WW.afterFirstVcl = 2] = "afterFirstVcl", WW[WW.eoBitstreamAllowed = 3] = "eoBitstreamAllowed", WW[WW.noMoreDataAllowed = 4] = "noMoreDataAllowed"
+     }(VW || (VW = {}));
+     const pW = {
+         1: {
+           colourPrimaries: 5,
+           transferCharacteristics: 6,
+           matrixCoefficients: 5
+         },
+         2: {
+           colourPrimaries: 1,
+ ... (5548 more added lines; see GitHub link above)
```

#### 38. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L1183-L1186` → after: `L6695-L6772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R6695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L6695-L6772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/236.js#L6695-L6772) · [Before (L1183-L1186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/236.js#L1183-L1186)

```diff
- 
-     function Je(ee) {
-       be = ee, Me++, (0, ye.d)();
-       for (const ie of Ke) ie()
+   },
+   41198: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => oW,
+       g: () => lW,
+       k: () => fW,
+       n: () => VW,
+       o: () => KW
+     });
+     var mW = OW(41127),
+       EW = OW(41162),
+       NW = function(WW, iW, OW) {
+         if (null !== iW && void 0 !== iW) {
+           if ("object" !== typeof iW && "function" !== typeof iW) throw new TypeError("Object expected.");
+           var mW, EW;
+           if (OW) {
+ ... (62 more added lines; see GitHub link above)
```

#### 39. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L1188-L1190` → after: `L6774-L7308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R6774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L6774-L7308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/236.js#L6774-L7308) · [Before (L1188-L1190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/236.js#L1188-L1190)

```diff
- 
-     function oe(ee) {
-       Ke.add(ee)
+     const ZW = ["I420", "I420P10", "I420P12", "I420A", "I420AP10", "I420AP12", "I422", "I422P10", "I422P12", "I422A", "I422AP10", "I422AP12", "I444", "I444P10", "I444P12", "I444A", "I444AP10", "I444AP12", "NV12", "RGBA", "RGBX", "BGRA", "BGRX"],
+       xW = new Set(ZW);
+     class lW {
+       get codedWidth() {
+         return this.visibleRect.width
+       }
+       get codedHeight() {
+         return this.visibleRect.height
+       }
+       get displayWidth() {
+         return this.rotation % 180 === 0 ? this.squarePixelWidth : this.squarePixelHeight
+       }
+       get displayHeight() {
+         return this.rotation % 180 === 0 ? this.squarePixelHeight : this.squarePixelWidth
+       }
+       get microsecondTimestamp() {
+ ... (519 more added lines; see GitHub link above)
```

#### 40. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L1192-L1195` → after: `L7310-L7362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R7310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L7310-L7362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/236.js#L7310-L7362) · [Before (L1192-L1195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/236.js#L1192-L1195)

```diff
-   },
-   37102: (ee, ie, He) => {
-     function ye() {
-       return He(37108)
+     const AW = [],
+       bW = [];
+     let jW = 0;
+     const UW = (WW, iW) => {
+       for (const mW of bW)
+         if (mW.canvas.width === WW && mW.canvas.height === iW) return mW.age = jW++, {
+           canvas: mW.canvas,
+           context: mW.context,
+           isNew: !1
+         };
+       let OW;
+       if ("undefined" !== typeof OffscreenCanvas) OW = new OffscreenCanvas(WW, iW);
+       else {
+         if ("undefined" === typeof window || "undefined" === typeof document) throw new Error("Cannot transform VideoSamples in this environment. Either run in an environment with OffscreenCanvas or HTMLCanvasElement, or supply a custom VideoSample transformer using registerVideo … [truncated]
+         OW = document.createElement("canvas"), OW.width = WW, OW.height = iW
+       }
+ ... (37 more added lines; see GitHub link above)
```

#### 41. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L1197-L1199` → after: `L7364-L7580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R7364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L7364-L7580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/236.js#L7364-L7580) · [Before (L1197-L1199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/236.js#L1197-L1199)

```diff
- 
-     function be() {
-       return He(37116)
+     const sW = WW => "undefined" !== typeof VideoFrame && WW instanceof VideoFrame,
+       MW = (WW, iW, OW) => {
+         const EW = Math.min(WW.left, iW),
+           NW = Math.min(WW.top, OW),
+           PW = Math.min(WW.width, iW - EW),
+           LW = Math.min(WW.height, OW - NW);
+         return (0, mW.K)(PW >= 0), (0, mW.K)(LW >= 0), {
+           left: EW,
+           top: NW,
+           width: PW,
+           height: LW
+         }
+       },
+       KW = (WW, iW) => {
+         if (!WW || "object" !== typeof WW) throw new TypeError(iW + "crop, when provided, must be an object.");
+         if (!Number.isInteger(WW.left) || WW.left < 0) throw new TypeError(iW + "crop.left must be a non-negative integer.");
+ ... (201 more added lines; see GitHub link above)
```

#### 42. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L1201-L1203` → after: `L7582-L7913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R7582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L7582-L7913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/236.js#L7582-L7913) · [Before (L1201-L1203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/236.js#L1201-L1203)

```diff
- 
-     function Me(ee) {
-       return ["pl", "ru", "tr", "uk", "vi"].includes(ee)
+     class oW {
+       get microsecondTimestamp() {
+         return Math.trunc(mW.u * this.timestamp)
+       }
+       get microsecondDuration() {
+         return Math.trunc(mW.u * this.duration)
+       }
+       constructor(WW) {
+         if (this._closed = !1, DW(WW)) {
+           if (null === WW.format) throw new TypeError("AudioData with null format is not supported.");
+           this._data = WW, this.format = WW.format, this.sampleRate = WW.sampleRate, this.numberOfFrames = WW.numberOfFrames, this.numberOfChannels = WW.numberOfChannels, this.timestamp = WW.timestamp / 1e6, this.duration = WW.numberOfFrames / WW.sampleRate
+         } else if (WW instanceof uW) {
+           if (this._data = WW, WW._referenceCount++, this.format = WW.getFormat(), !nW.has(this.format)) throw new TypeError("getFormat() must return an AudioSampleFormat.");
+           if (this.sampleRate = WW.getSampleRate(), !Number.isInteger(this.sampleRate) || this.sampleRate <= 0) throw new TypeError("getSampleRate() must return a positive integer.");
+           if (this.numberOfFrames = WW.getNumberOfFrames(), !Number.isInteger(this.numberOfFrames) || this.numberOfFrames < 0) throw new TypeError("getNumberOfFrames() must return a non-negative integer.");
+           if (this.numberOfChannels = WW.getNumberOfChannels(), !Number.isInteger(this.numberOfChannels) || this.numberOfChannels <= 0) throw new TypeError("getNumberOfChannels() must return a positive integer.");
+ ... (316 more added lines; see GitHub link above)
```

#### 43. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L1207-L1209` → after: `L8074-L8240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R8074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L8074-L8240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/236.js#L8074-L8240) · [Before (L1207-L1209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/236.js#L1207-L1209)

```diff
-       e: () => ye,
-       h: () => be
-     })
+       d: () => wW,
+       g: () => NW,
+       j: () => cW
+     });
+     const mW = /(?:(.+?)\n)?((?:\d{2}:)?\d{2}:\d{2}.\d{3})\s+-->\s+((?:\d{2}:)?\d{2}:\d{2}.\d{3})/g,
+       EW = /^WEBVTT(.|\n)*?\n{2}/,
+       NW = /<(?:(\d{2}):)?(\d{2}):(\d{2}).(\d{3})>/g;
+     class PW {
+       constructor(WW) {
+         this.preambleText = null, this.preambleEmitted = !1, this.options = WW
+       }
+       parse(WW) {
+         let iW;
+         if (WW = WW.replaceAll("\r\n", "\n").replaceAll("\r", "\n"), mW.lastIndex = 0, !this.preambleText) {
+           if (!EW.test(WW)) throw new Error("WebVTT preamble incorrect.");
+           iW = mW.exec(WW);
+ ... (151 more added lines; see GitHub link above)
```

#### 44. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L1211-L1212` → after: `L8242-L8246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R8242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L8242-L8246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/236.js#L8242-L8246) · [Before (L1211-L1212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/236.js#L1211-L1212)

```diff
-   37108: (ee, ie, He) => {
-     ee.exports = He.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
+   41164: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => mW
+     });
+     const mW = "Mediabunny v1.61.3"
```

#### 45. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L1214-L1215` → after: `L8248-L8304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R8248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L8248-L8304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/236.js#L8248-L8304) · [Before (L1214-L1215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/236.js#L1214-L1215)

```diff
-   37116: (ee, ie, He) => {
-     ee.exports = He.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
+   41176: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => EW
+     });
+     var mW = OW(41127);
+     class EW {
+       constructor(WW, iW) {
+         if (this.finalized = !1, this.started = !1, this.pos = 0, this.trackedWrites = null, this.trackedStart = -1, this.trackedEnd = -1, WW._writerAcquired) throw new Error("Can't have multiple Writers for the same Target.");
+         this.target = WW, WW._setMonotonicity(iW), WW._writerAcquired = !0
+       }
+       start() {
+         (0, mW.K)(!this.started), this.target._start(), this.started = !0
+       }
+       write(WW) {
+         (0, mW.K)(this.started && !this.finalized), this.maybeTrackWrites(WW), this.target._write(WW, this.pos), this.pos += WW.byteLength
+       }
+ ... (41 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/237.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/237.js` (26 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3)

#### 1. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/237.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/237.js#L4)

```diff
-   44481: (ee, ie, He) => {
+   53676: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L6` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/237.js#L6-L7) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/237.js#L6)

```diff
-       CharacterPreview: () => pe
+       loadGlbAsset: () => Ji,
+       loadGlbTree: () => Ti
```

#### 3. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L8-L17` → after: `L9-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/237.js#L9-L11) · [Before (L8-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/237.js#L8-L17)

```diff
-     var ye = He(59),
-       be = He(2957),
-       Me = He(1189),
-       Ke = He(2683),
-       Ue = He(34919),
-       Fe = He(4010),
-       Je = He(37049),
-       oe = He(37064),
-       Re = He(37081),
-       ke = He(1228);
+     var mW = OW(39088),
+       EW = OW(136),
+       NW = OW(1189);
```

#### 4. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L20-L21` → after: `L14-L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L14-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/237.js#L14-L48) · [Before (L20-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/237.js#L20-L21)

```diff
-       let {
-         nametag: ie
+       return (0, EW.isDiscordClient)() ? `https://${NW.d.discordDomain}/${WW.href}` : WW.href
+     }
+     const LW = {
+       scriptUrl: PW(new OW.U(OW(53679))),
+       wasmBinaryUrl: PW(new OW.U(OW(53687)))
+     };
+     var cW = OW(2388),
+       wW = OW(37245),
+       tW = OW.n(wW);
+ 
+     function ZW() {
+       return tW()('(()=>{class WW extends Error{}function iW(iW,OW){const mW=iW._malloc(OW);if(0===mW)throw new WW(`Draco: the decoder\'s heap refused ${OW} bytes`);return mW}function OW(OW,mW,EW,NW){let PW=null,LW=null,cW=null;try{PW=new OW.Decoder,LW=new OW.DecoderBuffer,LW.Ini … [truncated]
+     }
+     var xW = OW(100),
+       lW = OW(5089),
+       AW = OW(299);
+ ... (19 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L23-L55` → after: `L50-L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L50-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/237.js#L50-L131) · [Before (L23-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/237.js#L23-L55)

```diff
-       const He = (0, ye.useRef)(null),
-         {
-           height: Me
-         } = (0, be.e)(He),
-         [Ke, Ue] = (0, ye.useState)(!1),
-         {
-           name: Fe,
-           ranks: qe,
-           nameColour: fe
-         } = ie;
-       return (0, ye.useEffect)((() => {
-         let ee = !0;
-         return Re.j.untilLoadedFor(Fe).then((() => {
-           ee && Ue(!0)
-         })), () => {
-           ee = !1
- ... (17 more removed lines; see GitHub link above)
+       return kW ??= (0, cW.C)(iW), kW.catch((() => {
+         kW = null
+       })), SW.workersStarted++, Promise.all([kW, (0, AW.p)()]).then((iW => {
+         let [OW] = iW;
+         return new Promise(((iW, mW) => {
+           const EW = new ZW;
+           EW.onerror = WW => {
+             EW.onmessage = null, EW.onerror = null, EW.terminate(), mW(new Error("Draco: the decode worker failed to start" + (WW.message ? `: ${WW.message}` : " (its script did not load)")))
+           }, EW.onmessage = WW => {
+             let {
+               data: OW
+             } = WW;
+             EW.onmessage = null, EW.onerror = null, "initDone" === OW.id ? iW(EW) : (EW.terminate(), mW(new Error(`Draco: ${"initError"===OW.id?OW.message:"the worker did not start"}`)))
+           };
+           const NW = OW.slice().buffer,
+             PW = {
+ ... (66 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L57-L64` → after: `L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/237.js#L133) · [Before (L57-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/237.js#L57-L64)

```diff
-         return ye(), (0, Re.h)(ye)
-       }), [Ke, Me, Fe, qe, fe]), (0, ke.jsx)("canvas", {
-         ref: He,
-         className: "CharacterPreviewNametag",
-         role: "img",
-         "aria-label": Fe,
-         style: {
-           visibility: Ke ? void 0 : "hidden"
+           return sW.push(iW), SW.mostWorkers = Math.max(SW.mostWorkers, sW.length), void JW(iW, WW)
```

#### 7. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L66` → after: `L135-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L135-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/237.js#L135-L136) · [Before (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/237.js#L66)

```diff
-       })
+         MW.push(WW)
+       }
```

#### 8. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L68-L110` → after: `L138-L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L138-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/237.js#L138-L176) · [Before (L68-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/237.js#L68-L110)

```diff
-     let fe = null;
-     const Te = .6 * Math.PI,
-       pe = (0, ye.memo)((0, ye.forwardRef)((function(ee, ie) {
-         let {
-           onReady: He,
-           onDrawn: Je,
-           owner: oe = "other",
-           framing: Re = "player",
-           forcedCosmetics: pe,
-           oo: Xe,
-           emotePlaySeq: ze,
-           turntableFromYaw: Be = null,
-           nametag: Ee
-         } = ee;
-         const ge = (0, ye.useRef)(null),
-           {
- ... (27 more removed lines; see GitHub link above)
+ 
+     function HW(WW, iW, OW) {
+       return new Promise(((mW, EW) => {
+         hW({
+           data: new Int8Array(WW.buffer, WW.byteOffset, WW.byteLength).slice(),
+           attributeIds: iW,
+           expected: OW,
+           resolve: mW,
+           reject: EW
+         })
+       }))
+     }
+     var nW = OW(38549),
+       uW = OW(38562),
+       oW = OW(35330),
+       dW = OW(35324);
+ ... (23 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L112-L124` → after: `L178-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L178-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/237.js#L178-L191) · [Before (L112-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/237.js#L112-L124)

```diff
-                 We.current !== ee || Ye.current !== ie || Ve.current || (Ve.current = !0, null === (ye = Ae.current) || void 0 === ye || ye.call(Ae, He))
-               }))
-             }))
-           }), []);
-         return (0, ye.useImperativeHandle)(ie, (() => {
-           const ee = (ee, ie) => {
-             var He;
-             (te.current[ee] = ie, null !== pe && void 0 !== pe && pe[ee]) || (null === (He = We.current) || void 0 === He || He.setCosmetic(ee, ie), ce())
-           };
-           return {
-             updateCosmetic: ee,
-             setAllCosmetics(ie) {
-               for (const ye of Me.v) {
+                 const NW = WW.bufferViews[OW],
+                   PW = null !== (EW = NW.byteOffset) && void 0 !== EW ? EW : 0;
+                 mW = {
+                   index: OW,
+                   bytes: iW.subarray(PW, PW + NW.byteLength),
+                   byteStride: NW.byteStride
+                 }, UW.set(OW, mW)
+               }
+               return mW
+             },
+             sW = new Map,
+             MW = iW => {
+               let OW = sW.get(iW);
+               if (!OW) {
```

#### 10. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L126` → after: `L193-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L193-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/237.js#L193-L205) · [Before (L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/237.js#L126)

```diff
-                 ee(ye, null !== (He = ie[ye]) && void 0 !== He ? He : (0, Ke.e)(ye))
+                 const EW = WW.accessors[iW];
+                 OW = {
+                   index: iW,
+                   count: EW.count,
+                   type: EW.type,
+                   numComponents: oW.o[EW.type],
+                   componentType: EW.componentType,
+                   normalized: null !== (mW = EW.normalized) && void 0 !== mW && mW,
+                   byteOffset: EW.byteOffset,
+                   bufferView: void 0 === EW.bufferView ? null : kW(EW.bufferView),
+                   min: EW.min,
+                   max: EW.max
+                 }, sW.set(iW, OW)
```

#### 11. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L129` → after: `L209-L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L209-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/237.js#L209-L262) · [Before (L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/237.js#L129)

```diff
-             isReady() {
+             KW = null !== (OW = null === (mW = WW.extensionsUsed) || void 0 === mW ? void 0 : mW.includes("KHR_draco_mesh_compression")) && void 0 !== OW && OW,
+             SW = (null !== (EW = WW.meshes) && void 0 !== EW ? EW : []).map(((iW, OW) => {
+               const mW = iW.primitives.map(((iW, OW) => {
+                 var mW, EW, NW;
+                 const PW = KW ? null === (mW = iW.extensions) || void 0 === mW ? void 0 : mW.KHR_draco_mesh_compression : void 0;
+                 let LW = null;
+                 const cW = [];
+                 if (PW) {
+                   const OW = {
+                     vertices: WW.accessors[iW.attributes.POSITION].count,
+                     indices: void 0 === iW.indices ? 0 : WW.accessors[iW.indices].count,
+                     components: {}
+                   };
+                   LW = {
+                     bufferView: kW(PW.bufferView),
+                     attributeIds: {},
+ ... (38 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L131-L168` → after: `L264-L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L264-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/237.js#L264-L334) · [Before (L131-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/237.js#L131-L168)

```diff
-               return null !== (ee = null === (ie = We.current) || void 0 === ie ? void 0 : ie.isReady()) && void 0 !== ee && ee
-             },
-             resetCamera() {
-               var ee;
-               null === (ee = We.current) || void 0 === ee || ee.resetCamera()
-             },
-             setOrbit(ee) {
-               var ie;
-               null === (ie = We.current) || void 0 === ie || ie.setOrbit(ee)
-             },
-             turnCamera(ee) {
-               var ie;
-               const He = Ue.e[Re];
-               null === (ie = We.current) || void 0 === ie || ie.setOrbit({
-                 ...He,
-                 yaw: He.yaw + ee
- ... (22 more removed lines; see GitHub link above)
+               return {
+                 index: iW,
+                 name: WW.name,
+                 children: null !== (OW = WW.children) && void 0 !== OW ? OW : [],
+                 mesh: null !== (mW = WW.mesh) && void 0 !== mW ? mW : null,
+                 translation: WW.translation,
+                 rotation: WW.rotation,
+                 scale: WW.scale,
+                 hasCamera: void 0 !== WW.camera,
+                 extras: WW.extras
+               }
+             })),
+             yW = null !== (PW = null === (LW = WW.extensionsUsed) || void 0 === LW ? void 0 : LW.includes("KHR_materials_unlit")) && void 0 !== PW && PW,
+             TW = null !== (cW = null === (wW = WW.extensionsUsed) || void 0 === wW ? void 0 : wW.includes("KHR_texture_transform")) && void 0 !== cW && cW,
+             JW = (null !== (tW = WW.materials) && void 0 !== tW ? tW : []).map(((WW, iW) => {
+               var OW, mW, EW, NW;
+ ... (55 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L170-L178` → after: `L336-L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L336-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/237.js#L336-L411) · [Before (L170-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/237.js#L170-L178)

```diff
-         }), []), (0, ye.useEffect)((() => {
-           Oe <= 0 || de <= 0 || We.current.resize(Oe, de)
-         }), [Oe, de]), (0, ye.useEffect)((() => {
-           if (!we) return;
-           const ee = Ze.current;
-           for (const ie of Me.v) {
-             const He = null === pe || void 0 === pe ? void 0 : pe[ie],
-               ye = ee[ie];
-             He && He !== ye ? We.current.setCosmetic(ie, He) : !He && ye && te.current[ie] && We.current.setCosmetic(ie, te.current[ie])
+         }(OW, mW)
+       } catch (NW) {
+         throw NW instanceof oW.l ? NW : new oW.l(`reading the GLB failed: ${NW instanceof Error?NW.message:String(NW)}`)
+       }
+     }
+     async function gW(WW, iW) {
+       var OW, mW;
+       const EW = WW.draco;
+       if (!EW) throw new oW.l("not a Draco primitive");
+       let NW;
+       try {
+         NW = await iW(EW.bufferView.bytes, EW.attributeIds, EW.expected)
+       } catch (wW) {
+         throw new oW.l(`Draco decoding failed: ${wW instanceof Error?wW.message:String(wW)}`)
+       }
+       const {
+ ... (60 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L180-L209` → after: `L413-L421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L413-L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/237.js#L413-L421) · [Before (L180-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/237.js#L180-L209)

```diff
-           Ze.current = {
-             ...pe
-           }, ae.current = !0, ce()
-         }), [pe, we, ce]), (0, ye.useEffect)((() => {
-           we && We.current.playEmote(null !== Xe && void 0 !== Xe ? Xe : null)
-         }), [Xe, ze, we]), (0, ye.useEffect)((() => {
-           if (!we || null === Be) return;
-           const ee = We.current,
-             {
-               pitch: ie,
-               radius: He
-             } = Ue.e[Re];
-           if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return ee.setOrbit({
-             yaw: Be + Te,
-             pitch: ie,
-             radius: He
- ... (14 more removed lines; see GitHub link above)
+           const LW = null !== (iW = NW.byteStride) && void 0 !== iW ? iW : PW * oW.c[EW.componentType];
+           return {
+             kind: mW,
+             data: NW.bytes,
+             offset: null !== (OW = EW.byteOffset) && void 0 !== OW ? OW : 0,
+             stride: LW,
+             components: PW,
+             glType: EW.componentType,
+             isNormalized: EW.normalized
```

#### 15. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L211-L225` → after: `L423-L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L423-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/237.js#L423-L427) · [Before (L211-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/237.js#L211-L225)

```diff
-         }), [we, Be]), (0, ke.jsxs)(ke.Fragment, {
-           children: [(0, ke.jsx)("div", {
-             className: "CharCustomisationPreview",
-             ref: ge
-           }), Ee && (0, ke.jsx)(qe, {
-             nametag: Ee
-           })]
-         })
-       })))
-   },
-   37049: (ee, ie, He) => {
-     function ye(ee, ie, He) {
-       if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(ee, ie).getContext("2d", He);
-       const ye = document.createElement("canvas");
-       return ye.width = ee, ye.height = ie, ye.getContext("2d", He)
+         })),
+         OW = WW.indices,
+         mW = OW && VW(OW, pW),
+         EW = WW.position;
+       return new uW.d(iW, mW, EW.count, ...fW(EW, iW))
```

#### 16. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L229` → after: `L432-L451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L432-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/237.js#L432-L451) · [Before (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/237.js#L229)

```diff
-       return ee.getContext("2d", ie)
+       const OW = iW.attributes.map((WW => {
+         let {
+           kind: iW,
+           data: OW,
+           size: mW,
+           byteOffset: EW,
+           byteStride: NW,
+           normalized: PW
+         } = WW;
+         return {
+           kind: iW,
+           data: OW,
+           offset: EW,
+           stride: NW,
+           components: mW,
+           glType: 5120 + XW.indexOf(OW.constructor),
+ ... (4 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L248-L249` → after: `L454-L456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L454-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/237.js#L454-L456) · [Before (L248-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/237.js#L248-L249)

```diff
-     function Ue() {
-       return be
+     function qW(WW) {
+       const iW = WW.lastIndexOf("/");
+       return iW < 0 ? WW : WW.substring(iW + 1)
```

#### 18. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L252-L253` → after: `L459-L461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L459-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/237.js#L459-L461) · [Before (L252-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/237.js#L252-L253)

```diff
-     function Fe() {
-       return Me
+     function RW(WW) {
+       const iW = WW.lastIndexOf("/");
+       return iW < 0 ? "" : WW.substring(0, iW + 1)
```

#### 19. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L257-L258` → after: `L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/237.js#L465) · [Before (L257-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/237.js#L257-L258)

```diff
-       be = ee, Me++, (0, ye.d)();
-       for (const ie of Ke) ie()
+       return WW.name || `node${WW.index}`
```

#### 20. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L262` → after: `L488-L490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L488-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/237.js#L488-L490) · [Before (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/237.js#L262)

```diff
-       Ke.add(ee)
+       var iW, OW, mW, EW;
+       const NW = null !== (iW = WW.minFilter) && void 0 !== iW ? iW : 9987;
+       return 9729 === (null !== (OW = WW.magFilter) && void 0 !== OW ? OW : 9729) ? null !== (mW = aW[NW]) && void 0 !== mW ? mW : 3 : null !== (EW = rW[NW]) && void 0 !== EW ? EW : 4
```

#### 21. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L264-L267` → after: `L492-L499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L492-L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/237.js#L492-L499) · [Before (L264-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/237.js#L264-L267)

```diff
-   },
-   37102: (ee, ie, He) => {
-     function ye() {
-       return He(37108)
+     const FW = {
+       33071: 0,
+       33648: 2
+     };
+ 
+     function QW(WW) {
+       var iW;
+       return null !== (iW = FW[null !== WW && void 0 !== WW ? WW : 10497]) && void 0 !== iW ? iW : 1
```

#### 22. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L270-L271` → after: `L502-L707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L502-L707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/237.js#L502-L707) · [Before (L270-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/237.js#L270-L271)

```diff
-     function be() {
-       return He(37116)
+     function Wi(WW) {
+       return 9728 === WW.minFilter || 9729 === WW.minFilter
+     }
+ 
+     function ii(WW) {
+       var iW, OW, mW;
+       const EW = Float64Array.from(null !== (iW = WW.scale) && void 0 !== iW ? iW : [1, 1, 1]);
+       return WW.hasCamera && (EW[0] = -1), {
+         translation: Float64Array.from(null !== (OW = WW.translation) && void 0 !== OW ? OW : [0, 0, 0]),
+         rotation: Float64Array.from(null !== (mW = WW.rotation) && void 0 !== mW ? mW : [0, 0, 0, 1]),
+         scale: EW
+       }
+     }
+ 
+     function Oi(WW, iW) {
+       let {
+ ... (190 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L275` → after: `L711-L1045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L711-L1045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/237.js#L711-L1045) · [Before (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/237.js#L275)

```diff
-       return ["pl", "ru", "tr", "uk", "vi"].includes(ee)
+       (0, Pi.f)(WW) || (WW.geometry && WW.geometry.useBoundingInfoFromGeometry ? WW._updateBoundingInfo() : WW.refreshBoundingInfo(!0, !0))
+     }
+     class ti {
+       constructor(WW, iW) {
+         this.rb = WW, this.decode = iW, this.bufferData = Promise.resolve(), this.viewData = new Map, this.viewBuffers = new Map, this.vertexBuffers = new Map, this.dracoGeometry = new Map
+       }
+       viewBytes(WW) {
+         let iW = this.viewData.get(WW.index);
+         return iW || (iW = this.bufferData.then((() => WW.bytes)), this.viewData.set(WW.index, iW)), iW
+       }
+       viewBuffer(WW) {
+         let iW = this.viewBuffers.get(WW.index);
+         return iW || (iW = this.viewBytes(WW).then((WW => new((0, Ni.c)().OZ)(this.rb.VA(), WW, !1))), this.viewBuffers.set(WW.index, iW)), iW
+       }
+       vertexBuffer(WW, iW) {
+         const {
+ ... (319 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L277-L280` → after: `L1047-L1056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R1047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L1047-L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/237.js#L1047-L1056) · [Before (L277-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/237.js#L277-L280)

```diff
-     He.d(ie, {
-       b: () => Me,
-       e: () => ye,
-       h: () => be
+     async function Ji(WW, iW, OW, EW) {
+       try {
+         return await Ei(WW, iW, OW, HW, mW.b, (WW => EW(WW, new ti(iW, HW))))
+       } finally {
+         yi()
+       }
+     }
+     Zi = LW, UW || (UW = {
+       scriptUrl: new URL(Zi.scriptUrl, location.href).href,
+       wasmBinaryUrl: new URL(Zi.wasmBinaryUrl, location.href).href
```

#### 25. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L283-L284` → after: `L1059-L1084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R1059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L1059-L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/237.js#L1059-L1084) · [Before (L283-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/237.js#L283-L284)

```diff
-   37108: (ee, ie, He) => {
-     ee.exports = He.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
+   37245: WW => {
+     WW.exports = function(WW, iW, OW, mW) {
+       var EW = self || window;
+       try {
+         try {
+           var NW;
+           try {
+             NW = new EW.Blob([WW])
+           } catch (wW) {
+             (NW = new(EW.BlobBuilder || EW.WebKitBlobBuilder || EW.MozBlobBuilder || EW.MSBlobBuilder)).append(WW), NW = NW.getBlob()
+           }
+           var PW = EW.URL || EW.webkitURL,
+             LW = PW.createObjectURL(NW),
+             cW = new EW[iW](LW, OW);
+           return PW.revokeObjectURL(LW), cW
+         } catch (wW) {
+ ... (10 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L286-L287` → after: `L1086-L1087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R1086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L1086-L1087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/237.js#L1086-L1087) · [Before (L286-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/237.js#L286-L287)

```diff
-   37116: (ee, ie, He) => {
-     ee.exports = He.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
+   53679: (WW, iW, OW) => {
+     WW.exports = OW.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/238.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/238.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf)

#### 1. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/238.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/238.js#L4-L6)

```diff
-   37066: (ee, ie, He) => {
-     He.d(ie, {
-       b: () => Ue
+   53694: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       default: () => NW
```

#### 2. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L8` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/238.js#L8-L9) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/238.js#L8)

```diff
-     var ye = He(1169);
+     var mW = OW(37245),
+       EW = OW.n(mW);
```

#### 3. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L10-L12` → after: `L11-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L11-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/238.js#L11-L12) · [Before (L10-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/238.js#L10-L12)

```diff
-     function be(ee) {
-       const ie = /(\d*\.?\d+)px/.exec(ee);
-       return ie ? Number(ie[1]) : null
+     function NW() {
+       return EW()('/*! For license information please see 1yqdn.procGen.worker.c2d9f7e9.worker.js.LICENSE.txt */\n(()=>{var WW={46:WW=>{const iW="object"===typeof performance&&performance&&"function"===typeof performance.now?performance:Date,OW=()=>iW.now(),mW=WW=>WW===1/0||(WW=> … [truncated]
```

#### 4. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L14-L66` → after: `L14-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L14-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/238.js#L14-L20) · [Before (L14-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/238.js#L14-L66)

```diff
- 
-     function Me(ee) {
-       return ee.split(/[\s,]+/).pop()
-     }
-     let Ke = !1;
-     const Ue = {
-       debug: !1,
-       align: "center",
-       vAlign: "middle",
-       fontSize: 14,
-       fontWeight: "",
-       fontStyle: "",
-       fontVariant: "",
-       font: "Arial",
-       lineHeight: null,
-       justify: !1,
- ... (37 more removed lines; see GitHub link above)
+   },
+   37245: WW => {
+     WW.exports = function(WW, iW, OW, mW) {
+       var EW = self || window;
+       try {
+         try {
+           var NW;
```

#### 5. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L68-L107` → after: `L22-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L22-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/238.js#L22-L24) · [Before (L68-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/238.js#L68-L107)

```diff
-             return ee.scale(He, He), {
-               height: this.drawLines(ee, ie, ye / He, Ue / He, Fe / He, Je / He, Be).height * He
-             }
-           } finally {
-             ee.restore()
-           }
-         }
-         return this.drawLines(ee, ie, ye, Ue, Fe, Je, qe)
-       },
-       drawLines: function(ee, ie, He, be, Me, Ke, Ue) {
-         const Fe = He + Me,
-           Je = be + Ke;
-         let oe, Re = be + Ke / 2 + Ue / 2;
-         "right" === this.align ? (oe = Fe, ee.textAlign = "right") : "left" === this.align ? (oe = He, ee.textAlign = "left") : (oe = He + Me / 2, ee.textAlign = "center");
-         for (const ye of ie) {
-           ee.measureText(ye).width >= Me && (ie = ie.replace(ye, ""))
- ... (24 more removed lines; see GitHub link above)
+             NW = new EW.Blob([WW])
+           } catch (wW) {
+             (NW = new(EW.BlobBuilder || EW.WebKitBlobBuilder || EW.MozBlobBuilder || EW.MSBlobBuilder)).append(WW), NW = NW.getBlob()
```

#### 6. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L109-L118` → after: `L26-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L26-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/238.js#L26-L31) · [Before (L109-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/238.js#L109-L118)

```diff
-         }));
-         const Te = this.lineHeight ? this.lineHeight : this.getTextHeight(ee, ie),
-           pe = Te * (ke.length - 1),
-           Xe = pe / 2;
-         let ze = be;
-         "top" === this.vAlign ? Re = be + Ue : "bottom" === this.vAlign ? (Re = Je - pe, ze = Je) : (ze = be + Ke / 2, Re -= Xe), ke.forEach((ie => {
-           ie = ie.trim(), ee.fillText(ie, oe, Re), Re += Te
-         })), this.debug && (ee.lineWidth = 3, ee.strokeStyle = "#00909e", ee.strokeRect(He, be, Me, Ke), ee.lineWidth = 2, ee.strokeStyle = "#f6d743", ee.beginPath(), ee.moveTo(oe, be), ee.lineTo(oe, Je), ee.stroke(), ee.strokeStyle = "#ff6363", ee.beginPath(), ee.moveTo(He, ze), … [truncated]
-         return {
-           height: pe + Te
+           var PW = EW.URL || EW.webkitURL,
+             LW = PW.createObjectURL(NW),
+             cW = new EW[iW](LW, OW);
+           return PW.revokeObjectURL(LW), cW
+         } catch (wW) {
+           return new EW[iW]("data:application/javascript,".concat(encodeURIComponent(WW)), OW)
```

#### 7. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L171` → after: `L34-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/238.js#L34-L35) · [Before (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/238.js#L171)

```diff
-         return void 0 !== He && console.error(`Couldn't parse ${He}`, ye), ie
+         if (!mW) throw Error("Inline worker is not supported");
+         return new EW[iW](mW, OW)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/239.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/239.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357f)

#### 1. `bundles/bloxd.io/chunks/js/239.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/239.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/239.js#L4)

```diff
-   37126: (ee, ie, He) => {
+   53708: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/239.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357fR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357f) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/239.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/239.js#L6)

```diff
-       CreateCustomLobby: () => Pe
+       default: () => NW
```

#### 3. `bundles/bloxd.io/chunks/js/239.js` (Changed code · before: `L8-L34` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357fR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357f) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/239.js#L8-L9) · [Before (L8-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/239.js#L8-L34)

```diff
-     He(37132);
-     var ye = He(5018),
-       be = He(59),
-       Me = He(1674),
-       Ke = He(1053),
-       Ue = He.n(Ke),
-       Fe = He(3442),
-       Je = He(1083),
-       oe = He(1141),
-       Re = He(4974),
-       ke = He(1438),
-       qe = He(37138),
-       fe = He(1127),
-       Te = He(1315),
-       pe = He(1502),
-       Xe = He(18),
- ... (11 more removed lines; see GitHub link above)
+     var mW = OW(37245),
+       EW = OW.n(mW);
```

#### 4. `bundles/bloxd.io/chunks/js/239.js` (Changed code · before: `L36-L503` → after: `L11-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357fR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357f) · [After (L11-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/239.js#L11-L12) · [Before (L36-L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/239.js#L36-L503)

```diff
-     function Pe(ee) {
-       var ie, He, Ke, Pe;
-       let {
-         gameNameWithVariation: Ae,
-         close: Ye,
-         initialDefaultGamemode: Ve
-       } = ee;
-       const {
-         t: ae
-       } = (0, fe.v)(), ce = (0, pe.useNavigatePreserveSearch)(), [xe, Le] = (0, be.useState)("Enter"), [Ce, ve] = (0, be.useState)(""), ue = be.useRef(null), me = null === (ie = ge.e[Ae]) || void 0 === ie ? void 0 : ie.showWorldsInsteadOfCustomLobbies, le = me ? 1 : null === (He  … [truncated]
-       Ve || (Ve = "classic_creative" === Ae || "classic_creativeFlat" === Ae ? "creative" : "classic" === Ae ? "peaceful" : "survival");
-       const je = {
-         baseOptions: {
-           gameNameWithVariation: me ? "classic" : Ae,
-           name: "",
-           visibility: "unlisted"
- ... (452 more removed lines; see GitHub link above)
+     function NW() {
+       return EW()('(()=>{var WW={22:(WW,iW,OW)=>{WW.exports=OW.p+"static/media/bloxd_wasm_bg.c887ae513bec2c674549.wasm"},28:(WW,iW,OW)=>{WW.exports=OW.p+"static/media/bloxd_wasm_textures_bg.5f6ebeba7b776ee2ab3c.wasm"},15:(WW,iW,OW)=>{WW.exports=OW.p+"static/media/zstdDecodeWorker … [truncated]
```

#### 5. `bundles/bloxd.io/chunks/js/239.js` (Changed code · before: `L506-L592` → after: `L15-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357fR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357f) · [After (L15-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/239.js#L15-L24) · [Before (L506-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/239.js#L506-L592)

```diff
-   37138: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => oe,
-       f: () => ke
-     });
-     var ye = He(59),
-       be = He(1340),
-       Me = He(1127),
-       Ke = He(1320),
-       Ue = He(3865),
-       Fe = He(5407),
-       Je = He(1228);
- 
-     function oe(ee) {
-       let {
-         loading: ie,
- ... (71 more removed lines; see GitHub link above)
+   37245: WW => {
+     WW.exports = function(WW, iW, OW, mW) {
+       var EW = self || window;
+       try {
+         try {
+           var NW;
+           try {
+             NW = new EW.Blob([WW])
+           } catch (wW) {
+             (NW = new(EW.BlobBuilder || EW.WebKitBlobBuilder || EW.MozBlobBuilder || EW.MSBlobBuilder)).append(WW), NW = NW.getBlob()
```

#### 6. `bundles/bloxd.io/chunks/js/239.js` (Changed code · before: `L594-L702` → after: `L26-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357fR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357f) · [After (L26-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/239.js#L26-L36) · [Before (L594-L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/239.js#L594-L702)

```diff
-         })]
-       })
-     }
- 
-     function ke(ee) {
-       let {
-         ownedSchematics: ie,
-         currentWorldSchematicId: He,
-         onClose: ye
-       } = ee;
-       be.NotificationProvider.showCustomPopup({
-         body: ee => (0, Je.jsx)(Re, {
-           ownedSchematics: ie,
-           currentWorldSchematicId: He,
-           onClose: ee
-         }),
- ... (93 more removed lines; see GitHub link above)
+           var PW = EW.URL || EW.webkitURL,
+             LW = PW.createObjectURL(NW),
+             cW = new EW[iW](LW, OW);
+           return PW.revokeObjectURL(LW), cW
+         } catch (wW) {
+           return new EW[iW]("data:application/javascript,".concat(encodeURIComponent(WW)), OW)
+         }
+       } catch (wW) {
+         if (!mW) throw Error("Inline worker is not supported");
+         return new EW[iW](mW, OW)
+       }
```

#### 7. `bundles/bloxd.io/chunks/js/239.js` (Changed code · before: `L704-L705` → after: `L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357fR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357f) · [After (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/239.js#L38) · [Before (L704-L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/239.js#L704-L705)

```diff
-   },
-   37132: () => {}
+   }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/240.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/240.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1)

#### 1. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L4` → after: `L4-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L4-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/240.js#L4-L141) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/240.js#L4)

```diff
-   37138: (ee, ie, He) => {
+   37727: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => PW,
+       c: () => EW,
+       d: () => NW
+     });
+     var mW = OW(1755);
+     class EW extends Error {
+       constructor(WW) {
+         super("The game server didn't answer in time"), this.leg = WW, this.name = "SeatRequestTimedOut"
+       }
+     }
+     const NW = new class {
+       constructor() {
+         this.count = 0, this.answers = 0, this.waiting = new Set
+       }
+ ... (122 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L7` → after: `L144-L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L144-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/240.js#L144-L149) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/240.js#L7)

```diff
-       f: () => ke
+       d: () => XW,
+       g: () => CW,
+       i: () => fW,
+       m: () => dW,
+       p: () => pW,
+       q: () => DW
```
