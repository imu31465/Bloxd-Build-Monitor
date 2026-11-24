# Changed — Bundle Modifications Report (Part 012 / 069)

- **Updated at**: `2026-11-25T01:02 JST`
- **Part**: `12 / 69` (**298** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 011](part-011.md) · [Part 013 →](part-013.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/193.js` (w4ddu.56408518 → sn3sfj.2522680a · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/193.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081)

#### 9. `bundles/preprod.bloxd.io/chunks/js/193.js` (Changed code · before: `L10976-L11892` → after: `L1438-L1737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081R1438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0120d657a3ef94b17f5d76232f411334dbc8db2a61f9c0af284334b1e8e16081) · [After (L1438-L1737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/193.js#L1438-L1737) · [Before (L10976-L11892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/193.js#L10976-L11892)

```diff
-             },
-             ib = function(CC, zC, ZC) {
-               "undefined" != typeof document && void 0 !== document.cookie && (document.cookie = encodeURIComponent(CC) + "=" + encodeURIComponent(zC) + function(CC) {
-                 void 0 === CC && (CC = {});
-                 var zC = CC,
-                   ZC = zC.path,
-                   QC = zC.domain,
-                   wC = zC.expires,
-                   bC = zC.secure,
-                   nC = zC.sameSite,
-                   fC = ["none", "lax", "strict"].indexOf((nC || "").toLowerCase()) > -1 ? nC : null;
-                 return [null == ZC ? "" : ";path=" + ZC, null == QC ? "" : ";domain=" + QC, null == wC ? "" : ";expires=" + wC.toUTCString(), void 0 === bC || !1 === bC ? "" : ";secure", null === fC ? "" : ";SameSite=" + fC].join("")
-               }(ZC))
-             },
-             vb = function() {
-               return "undefined" == typeof document || void 0 === document.cookie ? "" : document.cookie
- ... (901 more removed lines; see GitHub link above)
+             }(yp.standing),
+             lp = Cp.find(Rp),
+             Qp = qp.find(Rp),
+             Jp = null === Xp || void 0 === lp ? null : {
+               value: lp.value,
+               rank: Xp.rank
+             },
+             Bp = vp(qp, void 0 === Qp || Qp.value === (null === Jp || void 0 === Jp ? void 0 : Jp.value) ? Jp : null),
+             Np = vp(Cp, Jp),
+             Tp = (pp, ip) => {
+               const cp = pp.findIndex(Rp);
+               return cp >= 0 ? ip[cp] : null
+             },
+             fp = null !== (Sp = null !== (Dp = null === Xp || void 0 === Xp ? void 0 : Xp.rank) && void 0 !== Dp ? Dp : Tp(Cp, Np)) && void 0 !== Sp ? Sp : Tp(qp, Bp);
+           pp.font = "bold 34px 'Jetbrains Mono', monospace";
+           const bp = [...Mp ? Bp : [], ...Ep ? [] : Np],
+ ... (284 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/194.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/194.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67)

#### 1. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/194.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/194.js#L4)

```diff
-   34040: (CC, zC, ZC) => {
+   34267: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L6-L8` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/194.js#L6-L7) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/194.js#L6-L8)

```diff
-       ALL_DEV_TOOLS: () => nC,
-       coreDevTools: () => qC,
-       devTools: () => oC
+       getLatestPublishedUpdateLog: () => xp,
+       updateLogsData: () => Sp
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L10-L22` → after: `L9-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L9-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/194.js#L9-L118) · [Before (L10-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/194.js#L10-L22)

```diff
-     var QC = ZC(615),
-       wC = ZC(1257),
-       bC = ZC(34046);
-     const nC = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
-     async function fC() {
-       const {
-         noaDevTools: CC
-       } = await ZC.e(236).then((() => ZC(40899)));
-       return CC
-     }
-     const oC = new class {
-         constructor() {
-           this.loadHost = fC, this.tools = nC
+     var Op = cp(817),
+       op = cp(322);
+     const Ip = "\xa0\xa0\xa0\xa0",
+       Sp = [{
+         author: ["Oliver", "Harry"],
+         date: new Date("2026-11-17T16:00:00Z"),
+         title: "\u2728Characters are back in the Store!\u2728",
+         description: "Every character from the Y2K, Spring and Astro packs is back, and you can now buy each one on its own!\n\n\ud83d\udcbf Y2K: Alice, Roy, Ela and Tilly\n\ud83c\udf37 Spring: Harry, Gnome, Poppy and Daisy\n\ud83d\ude80 Astro: Zara, Nova, Rex and Vex\n\nAlready  … [truncated]
+         image: "CosmeticPacks.jpg",
+         onClickImage: {
+           type: "openMenu",
+           menu: op.n.COSMETIC_SHOP
+         },
+         callToAction: {
+           color: "rainbow",
+           label: "Go to Store!",
+ ... (94 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L24-L25` → after: `L120-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L120-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/194.js#L120-L136) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/194.js#L24-L25)

```diff
-         setHost(CC) {
-           this.tools = null === CC ? nC : CC.tools, this.loadHost = null === CC ? fC : async () => CC
+       }, {
+         author: ["januaryboy", "Oliver"],
+         date: new Date("2026-10-27T12:00:00Z"),
+         title: "New Texture Pack: January 16x16 \ud83c\udfa8",
+         description: "A brand new 16x16 texture pack by januaryboy, giving every block, crop and model a fresh, crisp look!\n\n Pick it in Settings > Texture Pack.",
+         image: "january_16x16_texture_pack.jpg",
+         onClickImage: {
+           type: "openSettings",
+           category: "texturePack"
+         },
+         callToAction: {
+           color: "blue",
+           label: "Try it now",
+           action: {
+             type: "openSettings",
+             category: "texturePack"
+ ... (1 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L27-L28` → after: `L138-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L138-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/194.js#L138-L158) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/194.js#L27-L28)

```diff
-         supports(CC) {
-           return this.tools.has(CC)
+       }, {
+         author: "pegasys",
+         date: new Date("2026-10-22T12:00:00Z"),
+         title: "New Game: Build a Factory 2 \ud83c\udfed",
+         description: "Your own floating island, your own factory!\n\n Mine ore in the Wilds below, automate it with machines and conveyor belts, and power up your Core to unlock new tech. Your factory keeps working even while you're away!",
+         image: "build_a_factory_2.jpg",
+         onClickImage: {
+           type: "playGame",
+           game: "buildAFactory2"
+         },
+         mobileNotification: {
+           title: "New Game: Build a Factory 2 \ud83c\udfed",
+           body: "Build machines on your own floating island and watch them work - even while you're away!"
+         },
+         callToAction: {
+           color: "blue",
+ ... (5 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L30-L32` → after: `L160-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L160-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/194.js#L160-L171) · [Before (L30-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/194.js#L30-L32)

```diff
-         async downloadScene(CC, zC) {
-           const ZC = await this.loadHost();
-           await ZC.downloadScene(CC, zC)
+       }, {
+         date: new Date("2026-10-21T13:00:00Z"),
+         title: "Skyblock Official Trailer",
+         description: "We have released the official trailer for Bloxd Skyblock!",
+         youtubeVideoId: "A2LktM6_YFM",
+         callToAction: {
+           color: "blue",
+           label: "Watch on YouTube",
+           action: {
+             type: "openUrl",
+             url: "https://www.youtube.com/watch?v=A2LktM6_YFM"
+           }
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L34-L36` → after: `L173-L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L173-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/194.js#L173-L189) · [Before (L34-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/194.js#L34-L36)

```diff
-         async setAmbientLightIntensity(CC) {
-           const zC = await this.loadHost();
-           await zC.setAmbientLightIntensity(CC)
+       }, {
+         author: ["Dirty Flea Sack", "ellie", "Harry"],
+         date: Op.c,
+         title: "Skyblock: Cragrock Mines! \u26cf\ufe0f",
+         description: "A meteor has struck Cragrock Mines, and the dwarves need your help!\n\n Ride a cannon over a lava lake, drive a gold-mining drill and earn the trust of the wary Elder Crag. Finish Ruby's mining lessons in the Hub and she'll show you the way.",
+         image: "skyblock_cragrock_mines.jpg",
+         onClickImage: {
+           type: "playGame",
+           game: "skyblock"
+         },
+         callToAction: {
+           color: "blue",
+           label: "Explore the mines",
+           action: {
+             type: "playGame",
+             game: "skyblock"
+ ... (1 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L38-L39` → after: `L191-L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L191-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/194.js#L191-L225) · [Before (L38-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/194.js#L38-L39)

```diff
-         async capturePhoto(CC, zC, ZC) {
-           return (await this.loadHost()).capturePhoto(CC, zC, ZC)
+       }, {
+         author: "Oliver",
+         date: new Date("2026-10-14T12:00:00Z"),
+         title: "Invite Your Friends! \ud83d\udce8",
+         description: "Invite a friend to your game or party from their profile, and they'll get a notification to join you.\n\n Missed one? Your invites wait in the Social menu until they expire.",
+         callToAction: {
+           color: "blue",
+           label: "Open Social",
+           action: {
+             type: "openMenu",
+             menu: op.n.SOCIAL
+           }
+         },
+         showPopupOnLoad: !1
+       }, {
+         author: ["JBL", "AnxietreeDev"],
+ ... (19 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L41-L45` → after: `L227-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L227-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/194.js#L227-L235) · [Before (L41-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/194.js#L41-L45)

```diff
-       },
-       qC = {
-         tools: bC.c,
-         downloadScene: async () => {
-           throw new Error("This client can't download the scene")
+       }, {
+         author: "pegasys",
+         date: new Date("2026-10-09T12:00:00Z"),
+         title: "Lucky Bedwars: New Armour & Weapons! \u2694\ufe0f",
+         description: "Open Super Armour and Super Weapon lucky blocks to loot powerful new gear sets, each with its own special ability:\n \u2022 Spectral Armour - stand still to turn invisible.\n \u2022 Astral Armour - jump higher.\n \u2022 Magmasteel Weapons - set the ground un … [truncated]
+         image: "lucky_bedwars_gear_sets.jpg",
+         onClickImage: {
+           type: "playGame",
+           game: "luckyBedwars"
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L47-L48` → after: `L237-L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L237-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/194.js#L237-L239) · [Before (L47-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/194.js#L47-L48)

```diff
-         setAmbientLightIntensity: async () => {
-           throw new Error("This client can't set the ambient light")
+         mobileNotification: {
+           title: "Lucky Bedwars: New Armour & Weapons! \u2694\ufe0f",
+           body: "Loot new armour and weapon sets with special abilities - turn invisible, set enemies on fire and more!"
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L50-L51` → after: `L241-L1112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L241-L1112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/194.js#L241-L1112) · [Before (L50-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/194.js#L50-L51)

```diff
-         capturePhoto: async () => {
-           throw new Error("No game is drawing yet")
+         callToAction: {
+           color: "blue",
+           label: "Play now!",
+           action: {
+             type: "playGame",
+             game: "luckyBedwars"
+           }
+         }
+       }, {
+         author: ["Dirty Flea Sack", "ellie", "Harry", "AnxietreeDev"],
+         date: new Date("2026-10-07T08:00:00Z"),
+         title: "New Game: Skyblock!",
+         description: "Your Skyblock adventure begins! Complete quests, explore new islands and conquer dungeons in our new questing RPG!",
+         image: "skyblock_thumbnail_large.jpg",
+         onClickImage: {
+           type: "playGame",
+ ... (856 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/194.js` (Changed code · before: `L53-L56` → after: `L1114-L2780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67R1114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8ff2301ac486b21fb90c73702107ee25518416cdca8a7ee3d2f403350b818f67) · [After (L1114-L2780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/194.js#L1114-L2780) · [Before (L53-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/194.js#L53-L56)

```diff
-       };
-     QC.z && oC.setHost(qC), (0, wC.y)((() => {
-       oC.setHost(qC)
-     }))
+       }, {
+         date: new Date("2026-04-15T12:00:00Z"),
+         title: "Nuketown has been reworked",
+         description: "The Nuketown map has been completely remade from the ground up.\n\nTry it out now in Clutch and let us know what you think!",
+         image: "nuketown_rework.jpg",
+         author: ["Harry", "pegasys"],
+         callToAction: {
+           color: "blue",
+           label: "Try it out",
+           action: {
+             type: "playGame",
+             game: "clutch"
+           }
+         }
+       }, {
+         date: new Date("2026-04-10T15:02:00Z"),
+ ... (1651 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/195.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/195.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359)

#### 1. `bundles/preprod.bloxd.io/chunks/js/195.js` (Changed code · before: `L4-L94` → after: `L4-L1013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359) · [After (L4-L1013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/195.js#L4-L1013) · [Before (L4-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/195.js#L4-L94)

```diff
-   36264: (CC, zC, ZC) => {
-     ZC.r(zC), ZC.d(zC, {
-       showOnboardingPopup: () => lC
-     });
-     var QC = ZC(48),
-       wC = ZC(1143),
-       bC = ZC(1307),
-       nC = ZC(1388),
-       fC = ZC(4256),
-       oC = ZC(1501),
-       qC = ZC(1493),
-       FC = ZC(2166),
-       WC = ZC(1002),
-       NC = ZC.n(WC),
-       MC = ZC(1078),
-       gC = ZC(36271),
- ... (75 more removed lines; see GitHub link above)
+   34271: function(module, __unused_webpack_exports, __webpack_require__) {
+     var n;
+     this || self, n = function() {
+       return function() {
+         var __webpack_modules__ = {
+             4264: function(pp, ip, cp) {
+               pp.exports = cp(7588)
+             },
+             5036: function(pp, ip, cp) {
+               cp(1719), cp(5677), cp(6394), cp(5334), cp(6969), cp(2021), cp(8328), cp(2129);
+               var Op = cp(1287);
+               pp.exports = Op.Promise
+             },
+             2582: function(pp, ip, cp) {
+               cp(1646), cp(6394), cp(2004), cp(462), cp(8407), cp(2429), cp(1172), cp(8288), cp(1274), cp(8201), cp(6626), cp(3211), cp(9952), cp(15), cp(9831), cp(7521), cp(2972), cp(6956), cp(5222), cp(2257);
+               var Op = cp(1287);
+ ... (994 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/195.js` (Changed code · before: `L97-L150` → after: `L1030-L1361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359R1030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359) · [After (L1030-L1361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/195.js#L1030-L1361) · [Before (L97-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/195.js#L97-L150)

```diff
-             }, wC)
-           }))
-         })]
-       })
-     }
- 
-     function hC() {
-       const {
-         t: CC
-       } = (0, wC.y)(), {
-         userContext: zC,
-         isUserContextUpdating: ZC
-       } = (0, GC.e)(), [bC, nC] = (0, QC.useState)(!1), [, oC] = (0, QC.useReducer)((CC => CC + 1), 0), qC = (0, QC.useRef)({}), FC = (0, QC.useRef)(null), WC = (0, PC.e)(), xC = {
-         ...zC.getPlayerCosmetics(),
-         ...FC.current
-       }, hC = (0, QC.useRef)(null);
- ... (38 more removed lines; see GitHub link above)
+             },
+             783: function(pp, ip, cp) {
+               var Op = cp(7583);
+               pp.exports = Op.Promise
+             },
+             8640: function(pp, ip, cp) {
+               var Op = cp(4061),
+                 op = cp(6544);
+               pp.exports = !!Object.getOwnPropertySymbols && !op((function() {
+                 var pp = Symbol();
+                 return !String(pp) || !(Object(pp) instanceof Symbol) || !Symbol.sham && Op && Op < 41
+               }))
+             },
+             9491: function(pp, ip, cp) {
+               var Op = cp(7583),
+                 op = cp(9212),
+ ... (316 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/195.js` (Changed code · before: `L152-L174` → after: `L1363-L1399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359R1363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359) · [After (L1363-L1399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/195.js#L1363-L1399) · [Before (L152-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/195.js#L152-L174)

```diff
-             }(xC, wC);
-             return (0, RC.jsx)("button", {
-               type: "button",
-               className: NC()("OnboardingPreset", {
-                 OnboardingPresetSelected: bC
-               }),
-               "aria-label": CC("homePage:onboardingPreset", {
-                 number: ZC + 1
-               }),
-               "aria-pressed": bC,
-               onClick: () => {
-                 (0, fC.h)(`preset.${QC}`);
-                 const {
-                   eyes: CC,
-                   skin: zC
-                 } = qC.current;
- ... (7 more removed lines; see GitHub link above)
+             },
+             3955: function(pp, ip, cp) {
+               var Op = cp(7583).TypeError;
+               pp.exports = function(pp) {
+                 if (null == pp) throw Op("Can't call method on " + pp);
+                 return pp
+               }
+             },
+             460: function(pp, ip, cp) {
+               var Op = cp(7583),
+                 op = Object.defineProperty;
+               pp.exports = function(pp, ip) {
+                 try {
+                   op(Op, pp, {
+                     value: ip,
+                     configurable: !0,
+ ... (21 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/195.js` (Changed code · before: `L177-L181` → after: `L1402-L1677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359R1402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359) · [After (L1402-L1677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/195.js#L1402-L1677) · [Before (L177-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/195.js#L177-L181)

```diff
-               },
-               children: (0, RC.jsx)("div", {
-                 className: "OnboardingPresetImage",
-                 style: {
-                   backgroundImage: `url(/textures/charSkins/previews/character_${QC}_preview.png)`
+               }
+             },
+             8821: function(pp, ip, cp) {
+               var Op = cp(4615).f,
+                 op = cp(2870),
+                 Ip = cp(3649)("toStringTag");
+               pp.exports = function(pp, ip, cp) {
+                 pp && !cp && (pp = pp.prototype), pp && !op(pp, Ip) && Op(pp, Ip, {
+                   configurable: !0,
+                   value: ip
+                 })
+               }
+             },
+             9137: function(pp, ip, cp) {
+               var Op = cp(7836),
+                 op = cp(8284),
+ ... (260 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/195.js` (Changed code · before: `L184-L213` → after: `L1723-L1788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359R1723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359) · [After (L1723-L1788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/195.js#L1723-L1788) · [Before (L184-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/195.js#L184-L213)

```diff
-             }, QC)
-           }))
-         }), (0, RC.jsxs)("button", {
-           type: "button",
-           className: "OnboardingMoreOptions",
-           "aria-expanded": bC,
-           onClick: () => {
-             bC || (0, fC.h)("more"), nC(!bC)
-           },
-           children: [CC("homePage:onboardingMoreOptions"), (0, RC.jsx)(SC.c, {
-             name: bC ? "caret-up" : "caret-down"
-           })]
-         }), bC && (0, RC.jsxs)("div", {
-           ref: hC,
-           className: "OnboardingMore",
-           children: [(0, RC.jsx)("div", {
- ... (14 more removed lines; see GitHub link above)
+             },
+             1646: function(pp, ip, cp) {
+               var Op = cp(7263),
+                 op = cp(7583),
+                 Ip = cp(6544),
+                 Sp = cp(4521),
+                 xp = cp(794),
+                 Lp = cp(1324),
+                 Yp = cp(1825),
+                 Dp = cp(5999),
+                 Ap = cp(4822),
+                 Pp = cp(9269),
+                 Wp = cp(3649),
+                 yp = cp(4061),
+                 Up = Wp("isConcatSpreadable"),
+                 wp = 9007199254740991,
+ ... (50 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/195.js` (Changed code · before: `L215-L222` → after: `L1790-L1947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359R1790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359) · [After (L1790-L1947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/195.js#L1790-L1947) · [Before (L215-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/195.js#L215-L222)

```diff
-               }
-             }), (0, RC.jsx)(eC, {
-               label: CC("homePage:onboardingSkinColour"),
-               colours: IC,
-               picked: null === mC || void 0 === mC ? void 0 : mC[1],
-               onPick: CC => {
-                 (0, fC.h)("skin"), qC.current.skin = CC, YC({
-                   skin: vC("skin", "0", CC)
+               }), (function() {
+                 var pp = Wp(this),
+                   ip = pp.target,
+                   cp = pp.kind,
+                   Op = pp.index++;
+                 return !ip || Op >= ip.length ? (pp.target = void 0, {
+                   value: void 0,
+                   done: !0
+                 }) : "keys" == cp ? {
+                   value: Op,
+                   done: !1
+                 } : "values" == cp ? {
+                   value: ip[Op],
+                   done: !1
+                 } : {
+                   value: [Op, ip[Op]],
+ ... (142 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/195.js` (Changed code · before: `L225-L354` → after: `L1950-L2054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359R1950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359) · [After (L1950-L2054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/195.js#L1950-L2054) · [Before (L225-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/195.js#L225-L354)

```diff
-             })]
-           })]
-         })]
-       })
-     }
-     var KC = ZC(1211),
-       YC = ZC(20),
-       dC = ZC(34053),
-       mC = ZC(1295),
-       HC = ZC(1593);
- 
-     function EC(CC) {
-       const {
-         t: zC
-       } = (0, wC.y)(), {
-         userContext: ZC,
- ... (114 more removed lines; see GitHub link above)
+             },
+             5334: function(pp, ip, cp) {
+               var Op, op, Ip, Sp, xp = cp(7263),
+                 Lp = cp(6268),
+                 Yp = cp(7583),
+                 Dp = cp(5897),
+                 Ap = cp(8262),
+                 Pp = cp(783),
+                 Wp = cp(1270),
+                 yp = cp(6893),
+                 Up = cp(7496),
+                 wp = cp(8821),
+                 vp = cp(7730),
+                 tp = cp(8257),
+                 Hp = cp(9212),
+                 dp = cp(794),
+ ... (89 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/195.js` (Changed code · before: `L356-L359` → after: `L2056-L2208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359R2056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359) · [After (L2056-L2208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/195.js#L2056-L2208) · [Before (L356-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/195.js#L356-L359)

```diff
-                 })()
-               },
-               children: (0, RC.jsx)(SC.c, {
-                 name: "dice"
+                 },
+                 Wi = function(pp) {
+                   return 1 !== pp.rejection && !pp.parent
+                 },
+                 yi = function(pp) {
+                   Ap(qp, Yp, (function() {
+                     var ip = pp.facade;
+                     fp ? Kp.emit("rejectionHandled", ip) : Ai("rejectionhandled", ip, pp.value)
+                   }))
+                 },
+                 Ui = function(pp, ip, cp) {
+                   return function(Op) {
+                     pp(ip, Op, cp)
+                   }
+                 },
+                 wi = function(pp, ip, cp) {
+ ... (137 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/195.js` (Changed code · before: `L361-L567` → after: `L2210-L11892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359R2210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-371b4f1a1ac7fa3428c204815728060e8cfd6c4d5ab5b1013ef1245ae77d8359) · [After (L2210-L11892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/195.js#L2210-L11892) · [Before (L361-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/195.js#L361-L567)

```diff
-             })]
-           }), "suffixed" === (null === NC || void 0 === NC ? void 0 : NC.kind) && (0, RC.jsx)("div", {
-             className: "OnboardingNameNote",
-             children: zC("homePage:onboardingNameSuffixed", {
-               taken: NC.taken,
-               name: NC.name
-             })
-           }), null !== sC && (0, RC.jsx)("div", {
-             className: "OnboardingNameNote OnboardingNameError",
-             children: sC
-           })]
-         }),
-         submit: () => {
-           if (!gC && null !== iC) {
-             if (null === oC) {
-               if (uC(iC)) return;
- ... (191 more removed lines; see GitHub link above)
+             },
+             2257: function(pp, ip, cp) {
+               var Op = cp(7263),
+                 op = cp(7583),
+                 Ip = cp(8821);
+               Op({
+                 global: !0
+               }, {
+                 Reflect: {}
+               }), Ip(op.Reflect, "Reflect", !0)
+             },
+             2129: function(pp, ip, cp) {
+               var Op = cp(6389).charAt,
+                 op = cp(8320),
+                 Ip = cp(2743),
+                 Sp = cp(9012),
+ ... (9667 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/196.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/196.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015e)

#### 1. `bundles/preprod.bloxd.io/chunks/js/196.js` (Changed code · before: `L4-L14` → after: `L4-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015e) · [After (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/196.js#L4-L8) · [Before (L4-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/196.js#L4-L14)

```diff
-   34091: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       c: () => tC,
-       d: () => Rz,
-       f: () => Gz,
-       h: () => xz,
-       l: () => bz,
-       p: () => fz,
-       t: () => qz,
-       u: () => Az,
-       v: () => oz
+   34306: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       ALL_DEV_TOOLS: () => Sp,
+       coreDevTools: () => Yp,
+       devTools: () => Lp
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/196.js` (Changed code · before: `L16-L284` → after: `L10-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015eR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015e) · [After (L10-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/196.js#L10-L17) · [Before (L16-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/196.js#L16-L284)

```diff
-     var QC = ZC(20),
-       wC = ZC(77),
-       bC = ZC(1557),
-       nC = ZC(4346),
-       fC = ZC(2894),
-       oC = ZC(2903),
-       qC = ZC(38);
-     const {
-       windows: FC,
-       target: WC,
-       stepDown: NC,
-       stepUp: MC,
-       noGain: gC
-     } = oC.d, SC = 1e3 / 60 * 1.08, pC = 1e3 / 55, PC = 1e3 / 45, GC = 1e3 / 30 * .92, RC = 1e3 / 30 * 1.08;
-     class AC {
-       constructor() {
- ... (253 more removed lines; see GitHub link above)
+     var Op = cp(657),
+       op = cp(1317),
+       Ip = cp(34310);
+     const Sp = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
+     async function xp() {
+       const {
+         noaDevTools: pp
+       } = await cp.e(242).then((() => cp(41280)));
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/196.js` (Changed code · before: `L287-L316` → after: `L20-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015eR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015e) · [After (L20-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/196.js#L20-L22) · [Before (L287-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/196.js#L287-L316)

```diff
- 
-     function DC(CC) {
-       const zC = "number" === typeof CC ? Date.now() - CC : -1;
-       return zC >= 0 && zC < lC
-     }
-     let jC = null;
- 
-     function yC() {
-       return jC ??= (0, wC.getDeviceDefaultPixelScale)(), LC(jC)
-     }
- 
-     function LC(CC) {
-       const zC = QC.b.get("clientEscMenuOptions");
-       return zC.pixelSmoothing && !(0, nC.b)("pixelScale") && zC.pixelScale === CC
-     }
-     let UC = null,
- ... (14 more removed lines; see GitHub link above)
+     const Lp = new class {
+         constructor() {
+           this.loadHost = xp, this.tools = Sp
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/196.js` (Changed code · before: `L318-L376` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015eR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015e) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/196.js#L24-L25) · [Before (L318-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/196.js#L318-L376)

```diff
-       }
-       return UC
-     }
- 
-     function kC(CC, zC) {
-       var ZC;
-       const QC = zC.indexOf(null !== (ZC = CC.failedUpN) && void 0 !== ZC ? ZC : -1);
-       return QC >= 0 && DC(CC.failedUpAt) ? {
-         step: QC,
-         untilMs: performance.now() + oC.d.stepUp.failWaitsMs[0]
-       } : null
-     }
-     let VC = null,
-       Cz = !1,
-       zz = "";
-     const Zz = new Set;
- ... (43 more removed lines; see GitHub link above)
+         setHost(pp) {
+           this.tools = null === pp ? Sp : pp.tools, this.loadHost = null === pp ? xp : async () => pp
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/196.js` (Changed code · before: `L378-L385` → after: `L27-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015eR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015e) · [After (L27-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/196.js#L27-L45) · [Before (L378-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/196.js#L378-L385)

```diff
-       }))
-     }
-     let Fz = 0;
- 
-     function Wz() {
-       var CC;
-       const zC = null !== (CC = rC()) && void 0 !== CC ? CC : {
-           gpu: zz
+         supports(pp) {
+           return this.tools.has(pp)
+         }
+         async downloadScene(pp, ip) {
+           const cp = await this.loadHost();
+           await cp.downloadScene(pp, ip)
+         }
+         async setAmbientLightIntensity(pp) {
+           const ip = await this.loadHost();
+           await ip.setAmbientLightIntensity(pp)
+         }
+         async capturePhoto(pp, ip, cp) {
+           return (await this.loadHost()).capturePhoto(pp, ip, cp)
+         }
+       },
+       Yp = {
+ ... (3 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/196.js` (Changed code · before: `L387-L481` → after: `L47-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015eR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015e) · [After (L47-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/196.js#L47-L51) · [Before (L387-L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/196.js#L387-L481)

```diff
-         ZC = uC();
-       Fz = cC(), VC = new YC({
-           changed: Qz,
-           lM: () => {
-             Mz({
-               heldN: void 0
-             })
-           },
-           vq: CC => {
-             var zC;
-             const ZC = uC()[CC],
-               QC = {
-                 heldN: ZC,
-                 heldAt: Date.now(),
-                 heldTarget: cC()
-               };
- ... (79 more removed lines; see GitHub link above)
+         setAmbientLightIntensity: async () => {
+           throw new Error("This client can't set the ambient light")
+         },
+         capturePhoto: async () => {
+           throw new Error("No game is drawing yet")
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/196.js` (Changed code · before: `L483-L518` → after: `L53-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015eR53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-116858dd5af8be0ee2506ef4a63e10e59997ab8c01bd25c0986a789e335c015e) · [After (L53-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/196.js#L53-L56) · [Before (L483-L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/196.js#L483-L518)

```diff
-       }
-     }
- 
-     function xz() {
-       var CC;
-       null === (CC = VC) || void 0 === CC || CC.resized(performance.now())
-     }
-   },
-   34100: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       d: () => bC
-     });
-     var QC = ZC(77),
-       wC = ZC(107);
- 
-     function bC(CC, zC, ZC) {
- ... (20 more removed lines; see GitHub link above)
+       };
+     Op.z && Lp.setHost(Yp), (0, op.y)((() => {
+       Lp.setHost(Yp)
+     }))
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/197.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/197.js` (33 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abee)

#### 1. `bundles/preprod.bloxd.io/chunks/js/197.js` (Changed code · before: `L4-L49` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abeeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abee) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/197.js#L4-L6) · [Before (L4-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/197.js#L4-L49)

```diff
-   36690: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       e: () => bC
-     });
-     var QC = ZC(48),
-       wC = ZC(28);
- 
-     function bC(CC, zC) {
-       const [ZC, bC] = (0, QC.useState)(zC);
-       return (0, QC.useEffect)((() => {
-         bC(zC());
-         const ZC = wC.o.subscribe(CC, (CC => {
-           bC(CC)
-         }));
-         return () => {
-           wC.o.unsubscribe(ZC)
- ... (30 more removed lines; see GitHub link above)
+   36593: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       showOnboardingPopup: () => Bp
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/197.js` (Changed code · before: `L51-L60` → after: `L8-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abeeR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abee) · [After (L8-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/197.js#L8-L28) · [Before (L51-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/197.js#L51-L60)

```diff
-     var QC = ZC(36811);
-     let wC = {
-       open: async () => {
-         throw new Error(QC.c.viewerLoadFailed.text)
-       },
-       replayKey: () => (console.warn("No game client has loaded to save a replay from"), null),
-       encode: async () => null,
-       fileHandle: () => null,
-       markSaved: () => {}
-     };
+     var Op = cp(62),
+       op = cp(1201),
+       Ip = cp(1372),
+       Sp = cp(1480),
+       xp = cp(4417),
+       Lp = cp(1579),
+       Yp = cp(1577),
+       Dp = cp(2276),
+       Ap = cp(1049),
+       Pp = cp.n(Ap),
+       Wp = cp(1149),
+       yp = cp(36602),
+       Up = cp(1060),
+       wp = cp(2429),
+       vp = cp(3587),
+       tp = cp(1141),
+ ... (5 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/197.js` (Changed code · before: `L63-L167` → after: `L31-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abeeR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abee) · [After (L31-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/197.js#L31-L39) · [Before (L63-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/197.js#L63-L167)

```diff
-       wC = CC
-     }
- 
-     function nC() {
-       return wC
-     }
-   },
-   36811: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       c: () => nC,
-       f: () => qC,
-       i: () => oC
-     });
-     var QC = ZC(28);
-     const wC = 1500,
-       bC = 1e3,
- ... (89 more removed lines; see GitHub link above)
+       return Yp.e.default.colourGroups[pp].colours.map(((pp, ip) => {
+         let {
+           rbg: cp,
+           order: Op
+         } = pp;
+         return {
+           rbg: cp,
+           order: Op,
+           index: ip
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/197.js` (Changed code · before: `L169-L173` → after: `L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abeeR41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abee) · [After (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/197.js#L41) · [Before (L169-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/197.js#L169-L173)

```diff
-       },
-       fC = new Set(Object.values(nC).filter((CC => "Error" === CC.type)).map((CC => CC.text)));
- 
-     function oC(CC) {
-       return CC instanceof Error && fC.has(CC.message) ? CC.message : void 0
+       })).sort(((pp, ip) => pp.order - ip.order))
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/197.js` (Changed code · before: `L175-L206` → after: `L43-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abeeR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abee) · [After (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/197.js#L43-L44) · [Before (L175-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/197.js#L175-L206)

```diff
- 
-     function qC(CC) {
-       var zC;
-       const ZC = null !== (zC = CC.timeoutMs) && void 0 !== zC ? zC : "Error" === CC.type ? wC : bC;
-       QC.o.bp("showBottomMessage", {
-         message: CC.text,
-         timeoutLength: ZC,
-         type: CC.type
-       })
-     }
-   },
-   36375: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       c: () => wC,
-       f: () => bC
-     });
- ... (16 more removed lines; see GitHub link above)
+     const jp = ep("eyes"),
+       kp = ep("skin");
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/197.js` (Changed code · before: `L209-L286` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abeeR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abee) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/197.js#L47-L50) · [Before (L209-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/197.js#L209-L286)

```diff
-       return CC && !zC
-     }
- 
-     function bC() {
-       return wC(QC.b.get("isTouchScreen"), QC.b.get("clientEscMenuOptions").touchActionButtons)
-     }
-   },
-   36676: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       c: () => QC
-     });
-     const QC = 3
-   },
-   36687: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       B: () => iC,
- ... (62 more removed lines; see GitHub link above)
+       var cp;
+       if (void 0 === ip || "default" !== (null === (cp = (0, Dp.m)(pp, ip)) || void 0 === cp ? void 0 : cp.cosmeticPack)) return null;
+       const Op = (0, Dp.j)(ip);
+       return Op && [Op[0], Number(Op[1])]
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/197.js` (Changed code · before: `L290-L316` → after: `L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abeeR54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abee) · [After (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/197.js#L54) · [Before (L290-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/197.js#L290-L316)

```diff
-       const QC = [...zC.keys()].sort(((CC, ZC) => zC.get(CC) - zC.get(ZC)));
-       return CC.forEach(((wC, bC) => {
-         const nC = ZC(wC);
-         zC.has(nC) || (QC.splice(0 === bC ? 0 : QC.indexOf(ZC(CC[bC - 1])) + 1, 0, nC), zC.set(nC, -1))
-       })), QC.forEach(((CC, ZC) => {
-         zC.set(CC, ZC)
-       })), [...CC].sort(((CC, QC) => zC.get(ZC(CC)) - zC.get(ZC(QC))))
-     }
- 
-     function xC(CC, zC) {
-       const ZC = {
-         variation: CC,
-         itemName: zC
-       };
-       bC.o.bp(qC, ZC)
-     }
- ... (11 more removed lines; see GitHub link above)
+       return `${pp}_${ip}_${cp}`
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/197.js` (Changed code · before: `L331-L355` → after: `L58-L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abeeR58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abee) · [After (L58-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/197.js#L58-L100) · [Before (L331-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/197.js#L331-L355)

```diff
-       QC = CC
-     }
- 
-     function bC(CC, zC) {
-       return QC(CC, zC)
-     }
-   },
-   36451: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       d: () => MC,
-       e: () => wC,
-       h: () => nC,
-       j: () => oC
-     });
-     var QC = ZC(36454);
-     const wC = "data-camera-fade",
- ... (9 more removed lines; see GitHub link above)
+       let {
+         label: ip,
+         colours: cp,
+         picked: Op,
+         onPick: Ip
+       } = pp;
+       const {
+         t: Sp
+       } = (0, op.H)();
+       return (0, Hp.jsxs)("div", {
+         className: "OnboardingColours",
+         children: [(0, Hp.jsx)("div", {
+           className: "OnboardingColoursLabel",
+           children: ip
+         }), (0, Hp.jsx)("div", {
+           className: "OnboardingSwatches",
+ ... (27 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/197.js` (Changed code · before: `L359-L374` → after: `L104-L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abeeR104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abee) · [After (L104-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/197.js#L104-L228) · [Before (L359-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/197.js#L359-L374)

```diff
-       const CC = document.createElement("div"),
-         {
-           style: zC
-         } = CC;
-       return zC.position = "absolute", zC.left = "0", zC.right = "0", zC.pointerEvents = "none", CC
-     }
- 
-     function FC(CC) {
-       const zC = qC();
-       zC.style[CC] = "0", zC.style.height = 100 * QC.b + "%", zC.style.background = "#000000", zC.style.pointerEvents = "auto", zC.setAttribute(bC, ""), zC.addEventListener("mousedown", NC), zC.addEventListener("contextmenu", WC);
-       for (const ZC of ["touchstart", "touchmove", "touchend", "touchcancel"]) zC.addEventListener(ZC, WC);
-       return zC
-     }
- 
-     function WC(CC) {
-       CC.preventDefault(), CC.stopPropagation()
+       const {
+         t: pp
+       } = (0, op.H)(), {
+         userContext: ip,
+         isUserContextUpdating: cp
+       } = (0, tp.b)(), [Ip, Sp] = (0, Op.useState)(!1), [, Lp] = (0, Op.useReducer)((pp => pp + 1), 0), Yp = (0, Op.useRef)({}), Dp = (0, Op.useRef)(null), Ap = (0, vp.b)(), ep = {
+         ...ip.getPlayerCosmetics(),
+         ...Dp.current
+       }, Mp = (0, Op.useRef)(null);
+       (0, Op.useEffect)((() => {
+         var pp;
+         Ip && (null === (pp = Mp.current) || void 0 === pp || pp.scrollIntoView({
+           block: "nearest"
+         }))
+       }), [Ip]);
+       const Cp = (pp, ip) => {
+ ... (109 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/197.js` (Changed code · before: `L378-L419` → after: `L237-L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abeeR237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abee) · [After (L237-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/197.js#L237-L250) · [Before (L378-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/197.js#L378-L419)

```diff
-       WC(CC);
-       const zC = document.activeElement;
-       zC instanceof HTMLElement && zC !== document.body && zC.blur()
-     }
-     class MC {
-       constructor(CC) {
-         this.getContainer = CC, this.elements = null, this.colour = "", this.alpha = 0, this.letterbox = !1, this.markedHost = null, this.markedCovered = !1
-       }
-       setFade(CC, zC) {
-         var ZC;
-         if (!this.elements && zC <= 0) return;
-         const {
-           fade: QC
-         } = this.getElements(), wC = null !== (ZC = fC) && void 0 !== ZC ? ZC : this.getContainer();
-         QC.parentElement !== wC && wC.appendChild(QC);
-         const bC = this.markHost(zC > 0 ? fC : null, zC >= 1);
- ... (26 more removed lines; see GitHub link above)
+       const {
+         t: ip
+       } = (0, op.H)(), {
+         userContext: cp,
+         isUserContextUpdating: Ip
+       } = (0, tp.b)(), Lp = Ip ? null : cp.getPlayerName(), Yp = (0, Op.useRef)(null), [Dp, Ap] = (0, Op.useState)((() => null === Lp ? (0, Cp.e)() : null)), [Pp, Wp] = (0, Op.useState)(null), [yp, wp] = (0, Op.useState)(!1), dp = (0, Op.useRef)("aW"), ep = (0, vp.b)(), jp = (0,  … [truncated]
+         Yp.current && (Yp.current.value = pp), Ap(pp)
+       }, Mp = (0, Op.useRef)(!1);
+       (0, Op.useEffect)((() => {
+         var pp, ip;
+         !yp && Mp.current && (Mp.current = !1, null === (pp = Yp.current) || void 0 === pp || pp.focus(), null === (ip = Yp.current) || void 0 === ip || ip.select())
+       }), [yp]);
+       const Jp = (0, Op.useRef)(null);
+       (0, Op.useEffect)((() => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/197.js` (Changed code · before: `L421-L422` → after: `L252-L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abeeR252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abee) · [After (L252-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/197.js#L252-L262) · [Before (L421-L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/197.js#L421-L422)

```diff
-         const QC = CC !== this.markedHost;
-         if (!QC && zC === this.markedCovered) return !1;
+         null !== Pp && (null === (pp = Jp.current) || void 0 === pp || pp.scrollIntoView({
+           block: "nearest"
+         }))
+       }), [Pp]);
+       const Bp = (pp, ip) => {
+         const cp = document.activeElement === Yp.current || Mp.current;
+         wp(!0), Wp(null), pp.then((pp => {
+           ep.current && (wp(!1), Mp.current = cp, ip(pp))
+         }))
+       };
+       (0, Op.useEffect)((() => {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/197.js` (Changed code · before: `L424-L500` → after: `L264-L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abeeR264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abee) · [After (L264-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/197.js#L264-L303) · [Before (L424-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/197.js#L424-L500)

```diff
-         QC && (null === (bC = this.markedHost) || void 0 === bC || null === (nC = bC.parentElement) || void 0 === nC || nC.removeAttribute(wC));
-         return null === CC || void 0 === CC || null === (ZC = CC.parentElement) || void 0 === ZC || ZC.setAttribute(wC, zC ? "covered" : ""), this.markedHost = CC, this.markedCovered = zC, QC
-       }
-       getElements() {
-         if (this.elements) return this.elements;
-         const CC = FC("top"),
-           zC = FC("bottom");
-         CC.style.transform = "translateY(-100%)", zC.style.transform = "translateY(100%)";
-         const ZC = qC();
-         ZC.style.top = "0", ZC.style.bottom = "0", ZC.style.display = "none", ZC.setAttribute("data-camera-fade-layer", "");
-         const QC = this.getContainer();
-         return QC.appendChild(CC), QC.appendChild(zC), CC.getBoundingClientRect(), this.elements = {
-           fade: ZC,
-           top: CC,
-           bottom: zC
-         }, this.elements
- ... (61 more removed lines; see GitHub link above)
+         Ep.c.get("isTouchScreen") || (null === (pp = Yp.current) || void 0 === pp || pp.focus(), null === (ip = Yp.current) || void 0 === ip || ip.select())
+       }), []);
+       const Np = () => {
+           (0, xp.n)(dp.current), pp()
+         },
+         Tp = pp => "refused" === pp.outcome ? pp.message : ip((0, Xp.h)(pp.failure)),
+         fp = pp => !(pp.length >= Cp.m) && (Wp({
+           kind: "error",
+           message: ip("homePage:changeNameMinLengthError", {
+             length: Cp.m
+           })
+         }), !0),
+         bp = pp => {
+           var Op, op, Ip;
+           pp.toLowerCase() !== (null === (Op = null !== (op = null === (Ip = Rp.current) || void 0 === Ip ? void 0 : Ip.name) && void 0 !== op ? op : Lp) || void 0 === Op ? void 0 : Op.toLowerCase()) ? fp(pp) || Bp((0, Xp.d)(cp, pp), (cp => {
+             "taken" !== cp.outcome ? "refused" !== cp.outcome && "failed" !== cp.outcome ? cp.name !== pp ? (dp.current = "suffixed", Rp.current = {
+ ... (24 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/197.js` (Changed code · before: `L506-L518` → after: `L387-L402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abeeR387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abee) · [After (L387-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/197.js#L387-L402) · [Before (L506-L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/197.js#L506-L518)

```diff
-     function WC(CC) {
-       switch (CC) {
-         case "linear":
-           return QC;
-         case "easeIn":
-           return wC;
-         case "easeOut":
-           return bC;
-         case "easeInOut":
-           return nC;
-         default:
-           return CC
-       }
+     function Bp() {
+       const pp = {
+         finished: !1
+       };
+       return Ip.NotificationProvider.showCustomPopup({
+         body: ip => (0, Hp.jsx)(Np, {
+           onFinish: () => {
+             (0, xp.g)(), pp.finished = !0, ip()
+           }
+         }),
+         middleScreenPopupClassName: "OnboardingPopup",
+         ignoreBackgroundPress: !0,
+         onClose: () => {
+           pp.finished || (0, xp.d)()
+         }
+       })
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/197.js` (Changed code · before: `L531` → after: `L406-L433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abeeR406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abee) · [After (L406-L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/197.js#L406-L433) · [Before (L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/197.js#L531)

```diff
-       return Math.abs(CC) > wC
+       let {
+         onFinish: ip
+       } = pp;
+       const {
+         t: cp
+       } = (0, op.H)(), Ip = Jp(ip);
+       return (0, Op.useEffect)((() => {
+         (0, xp.p)()
+       }), []), (0, Hp.jsxs)("div", {
+         className: "Onboarding",
+         children: [(0, Hp.jsx)("div", {
+           className: "OnboardingTitle",
+           children: cp("homePage:onboardingTitle")
+         }), (0, Hp.jsxs)("div", {
+           className: "OnboardingBody",
+           children: [Ip.field, (0, Hp.jsx)(Mp, {})]
+ ... (12 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/197.js` (Changed code · before: `L534` → after: `L436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abeeR436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abee) · [After (L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/197.js#L436) · [Before (L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/197.js#L534)

```diff
-   34102: (CC, zC, ZC) => {
+   36602: (pp, ip, cp) => {
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/197.js` (Changed code · before: `L536` → after: `L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abeeR438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abee) · [After (L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/197.js#L438) · [Before (L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/197.js#L536)

```diff
-       d: () => bC
+       b: () => Sp
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/197.js` (Changed code · before: `L538-L543` → after: `L440-L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abeeR440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abee) · [After (L440-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/197.js#L440-L441) · [Before (L538-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/197.js#L538-L543)

```diff
-     var QC = ZC(1029);
- 
-     function wC() {
-       var CC, zC;
-       return null !== (CC = null === (zC = screen.orientation) || void 0 === zC ? void 0 : zC.type) && void 0 !== CC ? CC : innerWidth > innerHeight ? "landscape" : "portrait"
-     }
+     var Op = cp(1956),
+       op = cp(1520);
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/197.js` (Changed code · before: `L546-L548` → after: `L444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abeeR444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abee) · [After (L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/197.js#L444) · [Before (L546-L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/197.js#L546-L548)

```diff
-         this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
-           document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
-         }
+         this.pending = new Map, this.userContext = null, this.timer = null, this.lastSentAt = -1 / 0, this.watchingVisibility = !1
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/197.js` (Changed code · before: `L550-L551` → after: `L446-L455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abeeR446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abee) · [After (L446-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/197.js#L446-L455) · [Before (L550-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/197.js#L550-L551)

```diff
-       isHeld() {
-         return this.holding && wC() !== this.heldOrientation && (this.holding = !1), this.holding
+       save(pp, ip) {
+         pp !== this.userContext && this.sendHeld(), this.userContext = pp;
+         for (const [Op, op] of ip) this.pending.set(Op, op);
+         if (null !== this.timer) return;
+         const cp = this.lastSentAt + 1100 - Date.now();
+         cp <= 0 ? this.send(pp) : (this.timer = setTimeout((() => {
+           this.sendHeld()
+         }), cp), this.watchingVisibility || (this.watchingVisibility = !0, document.addEventListener("visibilitychange", (() => {
+           "hidden" === document.visibilityState && this.sendHeld()
+         }))))
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/197.js` (Changed code · before: `L553-L556` → after: `L457-L458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abeeR457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abee) · [After (L457-L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/197.js#L457-L458) · [Before (L553-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/197.js#L553-L556)

```diff
-       hold() {
-         this.heldOrientation = wC(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
-           this.holding && (0, QC.IS)(new Error("Game view size held for 60 s"))
-         }), 6e4)
+       sendHeld() {
+         null !== this.timer && null !== this.userContext && (clearTimeout(this.timer), this.timer = null, this.send(this.userContext))
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/197.js` (Changed code · before: `L558-L563` → after: `L460-L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abeeR460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abee) · [After (L460-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/197.js#L460-L465) · [Before (L558-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/197.js#L558-L563)

```diff
-       release() {
-         clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
-           if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
-           else {
-             this.holding = !1;
-             for (const CC of this.resizers) CC()
+       send(pp) {
+         const ip = Array.from(this.pending, (pp => {
+           let [ip, cp] = pp;
+           return {
+             KI: ip,
+             VI: cp
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/197.js` (Changed code · before: `L565-L691` → after: `L467-L470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abeeR467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abee) · [After (L467-L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/197.js#L467-L470) · [Before (L565-L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/197.js#L565-L691)

```diff
-         }), 1e3)
-       }
-       heldSizer(CC) {
-         let zC = !1;
-         return () => {
-           if (zC && this.isHeld()) return null;
-           const ZC = CC();
-           return zC ||= null !== ZC, ZC
-         }
-       }
-       onRelease(CC) {
-         return this.resizers.add(CC), () => {
-           this.resizers.delete(CC)
-         }
-       }
-     }
- ... (111 more removed lines; see GitHub link above)
+         }));
+         this.pending.clear(), this.lastSentAt = Date.now(), op.b.updateCosmetics(pp, ip).catch((pp => {
+           console.error("Failed to update cosmetics", pp)
+         }))
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/197.js` (Changed code · before: `L696-L711` → after: `L475-L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abeeR475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abee) · [After (L475-L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/197.js#L475-L481) · [Before (L696-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/197.js#L696-L711)

```diff
-       const {
-         numLines: ZC,
-         charsPerLine: QC
-       } = PC[zC];
-       return RC(CC, ZC, QC, !1)
-     }
- 
-     function RC(CC, zC, ZC, QC, wC) {
-       (wC || QC) && (CC = CC.slice(0, null !== wC && void 0 !== wC ? wC : zC * ZC));
-       const bC = CC.split("\n");
-       if (bC.length > zC && bC.splice(zC, bC.length - zC), !QC)
-         for (let nC = 0; nC < bC.length; nC++) {
-           const CC = bC[nC];
-           CC.length > ZC && (bC[nC] = CC.substring(0, ZC), bC.length < zC && bC.splice(nC + 1, 0, CC.substring(ZC)))
-         }
-       return bC.join("\n")
+       for (const [cp, Op] of ip) pp.setPlayerCosmetics(cp, Op);
+       if (null === Op.gameBridge.latest("connectedGame").websocketUrl) Ip.save(pp, ip);
+       else
+         for (const [cp, op] of ip) Op.gameBridge.send("updateMyCosmetic", {
+           KI: cp,
+           VI: op
+         })
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/197.js` (Changed code · before: `L714` → after: `L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abeeR484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abee) · [After (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/197.js#L484) · [Before (L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/197.js#L714)

```diff
-   34162: (CC, zC, ZC) => {
+   34316: (pp, ip, cp) => {
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/197.js` (Changed code · before: `L720-L721` → after: `L489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abeeR489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abee) · [After (L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/197.js#L489) · [Before (L720-L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/197.js#L720-L721)

```diff
-       p: () => qC,
-       t: () => oC
+       n: () => yp
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/197.js` (Changed code · before: `L723-L805` → after: `L491-L495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abeeR491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abee) · [After (L491-L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/197.js#L491-L495) · [Before (L723-L805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/197.js#L723-L805)

```diff
-     var QC = ZC(326);
-     const wC = ["Wood Enchanting Table", "Stone Enchanting Table", "Iron Enchanting Table", "Gold Enchanting Table", "Diamond Enchanting Table"],
-       bC = {
-         Damage: {
-           translationKey: "enchantments:damageDescription"
-         },
-         "Attack Speed": {
-           translationKey: "enchantments:attackSpeedDescription"
-         },
-         "Critical Damage": {
-           translationKey: "enchantments:criticalDamageDescription"
-         },
-         Protection: {
-           translationKey: "enchantments:protectionDescription"
-         },
-         Health: {
- ... (67 more removed lines; see GitHub link above)
+     var Op = cp(156),
+       op = cp(1284),
+       Ip = cp(1211),
+       Sp = cp(1149),
+       xp = cp(1758);
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/197.js` (Changed code · before: `L807-L856` → after: `L497-L500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abeeR497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abee) · [After (L497-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/197.js#L497-L500) · [Before (L807-L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/197.js#L807-L856)

```diff
-       "Wood Enchanting Table": [{
-         min: 1,
-         max: 2
-       }, {
-         min: 3,
-         max: 4
-       }, {
-         min: 5,
-         max: 6
-       }],
-       "Stone Enchanting Table": [{
-         min: 2,
-         max: 4
-       }, {
-         min: 5,
-         max: 10
- ... (34 more removed lines; see GitHub link above)
+       offline: "homePage:onboardingNameNoAccount",
+       outdated: "general:updatedReloading",
+       busy: "homePage:changeNameTooFast",
+       server: "homePage:changeNameFailed"
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/197.js` (Changed code · before: `L860` → after: `L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abeeR504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abee) · [After (L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/197.js#L504) · [Before (L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/197.js#L860)

```diff
-       return wC.includes(CC)
+       return Lp[pp]
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/197.js` (Changed code · before: `L864-L865` → after: `L508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abeeR508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abee) · [After (L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/197.js#L508) · [Before (L864-L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/197.js#L864-L865)

```diff
-       var zC;
-       return !0 === (null === CC || void 0 === CC || null === (zC = CC.customAttributes) || void 0 === zC ? void 0 : zC.cannotEnchant)
+       return (0, xp.e)(pp) ? "outdated" : pp instanceof Op.e ? 429 === pp.httpCode ? "busy" : "server" : "offline"
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/197.js` (Changed code · before: `L868-L872` → after: `L511-L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abeeR511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abee) · [After (L511-L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/197.js#L511-L517) · [Before (L868-L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/197.js#L868-L872)

```diff
-     function FC(CC, zC) {
-       const {
-         max: ZC
-       } = fC[CC].at(-1);
-       return zC <= ZC
+     function Ap(pp, ip, cp) {
+       return (0, Sp.postJsonWithMetricsCookiesAndJsonResponse)(`${Ip.clientSideServerUrls.indexUrl}${ip}`, cp, {
+         retries: 3
+       }, pp.getMetricsCookies()).catch((pp => (console.error("Bad response from the server when trying to change name:", ip, pp), {
+         outcome: "failed",
+         failure: Dp(pp)
+       })))
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/197.js` (Changed code · before: `L876-L901` → after: `L521-L527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abeeR521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abee) · [After (L521-L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/197.js#L521-L527) · [Before (L876-L901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/197.js#L876-L901)

```diff
-       const zC = Math.sin(CC / 80),
-         ZC = CC => {
-           if (CC <= 0) return 0;
-           if (CC > 1) return 1;
-           let zC = 0;
-           const ZC = [1, 7, 21, 35, 35, 21, 7, 1];
-           for (let QC = 0; QC < ZC.length; QC++) {
-             zC += (QC % 2 === 0 ? 1 : -1) * ZC[QC] * Math.pow(CC, 2 + QC) / (2 + QC)
-           }
-           return 72 * zC
-         },
-         QC = .3 - .78 * zC,
-         wC = .5 - .78 * zC,
-         bC = .6 - .7 * zC,
-         nC = .8 - .6 * zC;
-       let fC = ZC(QC),
- ... (10 more removed lines; see GitHub link above)
+       return "outcome" in pp && "failed" === pp.outcome
+     }
+ 
+     function Wp(pp) {
+       return console.error("Error when trying to get with new name from DB", pp), {
+         outcome: "refused",
+         message: pp
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/197.js` (Changed code · before: `L906-L909` → after: `L550-L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abeeR550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abee) · [After (L550-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/197.js#L550-L563) · [Before (L906-L909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/197.js#L906-L909)

```diff
-       const {
-         min: ZC,
-         max: wC
-       } = fC[CC][zC], bC = QC.c.sampleUniformIntDistribution(ZC, wC, "includeMax");
+       let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
+       const Op = 1 === ip ? 1 : 10 ** (ip - 1),
+         Ip = String(Op + Math.floor(cp() * (10 ** ip - Op)));
+       return `${pp.slice(0,op.i-ip)}${Ip}`
+     }
+     const vp = [1, 2, 3, 4];
+     async function tp(pp, ip) {
+       const cp = await Up(pp, ip);
+       if ("taken" !== cp.outcome) return cp;
+       for (const Op of vp) {
+         const cp = wp(ip, Op),
+           op = await Up(pp, cp);
+         if ("taken" !== op.outcome) return op
+       }
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/197.js` (Changed code · before: `L911-L912` → after: `L565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abeeR565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-db0806fd614262b922758d53baf950f1e65e77222ef769ca124d6eaf72d4abee) · [After (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/197.js#L565) · [Before (L911-L912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/197.js#L911-L912)

```diff
-         ...WC(bC),
-         level: bC
+         outcome: "taken"
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/198.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/198.js` (29 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f)

#### 1. `bundles/preprod.bloxd.io/chunks/js/198.js` (Changed code · before: `L4-L29` → after: `L4-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f) · [After (L4-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/198.js#L4-L14) · [Before (L4-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/198.js#L4-L29)

```diff
-   34171: (CC, zC, ZC) => {
-     ZC.r(zC), ZC.d(zC, {
-       MAX_BLOCK_ID: () => QC,
-       armourReductionOf: () => TC,
-       clipSizeOf: () => sC,
-       creativeAltNames: () => nz,
-       creativeCategoryOf: () => kC,
-       creativeItemCategories: () => fC,
-       creativeItemCategoryIcons: () => oC,
-       creativeItemIds: () => OC,
-       descriptionOf: () => cC,
-       displayNameOf: () => XC,
-       dropsNothing: () => DC,
-       enchantmentPerksOf: () => UC,
-       gunTypeOf: () => tC,
-       harvestsNullLevelOf: () => jC,
- ... (10 more removed lines; see GitHub link above)
+   34364: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => gp,
+       h: () => ui,
+       l: () => ei,
+       p: () => ki,
+       r: () => Li,
+       v: () => Di,
+       w: () => Pi,
+       y: () => ji,
+       C: () => Ai
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/198.js` (Changed code · before: `L31-L57` → after: `L16-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272fR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f) · [After (L16-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/198.js#L16-L47) · [Before (L31-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/198.js#L31-L57)

```diff
-     const QC = 8558,
-       wC = "''WL&M3GT%cM)MK$YE1aM2'I+F+O_*c^*=%'%%%%%%%K>F>%%)K=H=%%[*W5_5['[R$ZW$S%[X&NH&L5C$W$5,KS&%]]&I%^Z&NM&b7TK$Y6G,Y>%M%M7P6$WD%Vc$LZ$OY$%+Q[&;S$/G$N&W%F$W%F$S$N&G'.F$c%`'1+%)41(1(+49$(2=b$/`N,RN,K/c_&Q0EC$O(''P`&O$%-%%^R2-*)&%;NV/ZT%IT%3XM$%%%%%_U$%b73.%%`-T-%%%%%%L9$M8X7 … [truncated]
-       bC = "S-$SW$$R&$SG2$)$'$)$4$)$X*$I6$-$%$%$cC1$WD1$%%%$]5$b7$RH4$%$%$%$%$%$%$%$%$%$)$N+$EG&$ZT%$IT%$3$XM$$%$%$%$%$%$Z1$Y[$$O`0$'$'$'$-&+&%&)&4&1&(&1*(*+&4&9&$&(&2&=&E$&'&%&%&%&1%_%$TV3$%$D.$$$Uc&$S$$S$$S$$S$$S$$S$$S$&S$&S$$S$$S$$S$$S$$S$$S$$S$$^1$S$$]I($%$M/$+$N-$%$Z$$%$I6$3 … [truncated]
-       nC = "Crafting Table|Cauldron|Sign|Iron Nugget|Gold Nugget|Diamond Nugget|Moonstone Nugget|Iron Ingot|Gold Ingot|Draugr Knight Sword|Cooked Potato|Cooked Beef|Raw Lamb|Cooked Lamb|Gold Watermelon Stag Antlers|Bear Fur|Cave Golem Eye|Frost Golem Eye|Draugr Knight Heart|Fur B … [truncated]
-       fC = ["building", "colours", "nature", "decoration", "utility", "tools", "combat", "food", "mobs", "materials", "worldTools"],
-       oC = {
-         building: "Stone Bricks",
-         colours: "Magenta Wool",
-         nature: "Grass Block",
-         decoration: "Lantern",
-         utility: "Workbench",
-         tools: "Iron Pickaxe",
-         combat: "Iron Sword",
-         food: "Apple",
-         mobs: "Pig Spawn Orb",
-         materials: "Iron Bar",
- ... (11 more removed lines; see GitHub link above)
+     var Op = cp(259),
+       op = cp(25),
+       Ip = cp(104),
+       Sp = cp(1650),
+       xp = cp(4515),
+       Lp = cp(2993),
+       Yp = cp(3e3),
+       Dp = cp(44);
+     const {
+       windows: Ap,
+       target: Pp,
+       stepDown: Wp,
+       stepUp: yp,
+       noGain: Up
+     } = Yp.d, wp = 1e3 / 60 * 1.08, vp = 1e3 / 55, tp = 1e3 / 45, Hp = 1e3 / 30 * .92, dp = 1e3 / 30 * 1.08;
+     class ep {
+ ... (16 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/198.js` (Changed code · before: `L60-L67` → after: `L50-L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272fR50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f) · [After (L50-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/198.js#L50-L241) · [Before (L60-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/198.js#L60-L67)

```diff
- 
-     function MC(CC, zC, ZC) {
-       const QC = NC(CC);
-       let wC = null,
-         bC = [];
-       return CC => {
-         const nC = QC(CC);
-         if (0 !== nC) return null === wC && (wC = zC.split(FC.u), bC = new Array(wC.length)), bC[nC - 1] ??= ZC(wC[nC - 1])
+     const jp = Ap.windowMs,
+       kp = Ap.settleMs,
+       mp = Ap.graceMs,
+       Rp = Ap.minIntervals,
+       qp = 1e3 * Rp / jp,
+       Mp = Math.floor(1e4 / jp),
+       Cp = Up.backoffMs,
+       Ep = Up.maxMs;
+     class Xp {
+       constructor(pp, ip) {
+         let {
+           lowest: cp,
+           startStep: Op = 0,
+           noGain: op = null,
+           upWait: Ip = null
+         } = ip;
+ ... (176 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/198.js` (Changed code · before: `L71-L72` → after: `L251-L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272fR251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f) · [After (L251-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/198.js#L251-L252) · [Before (L71-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/198.js#L71-L72)

```diff
-     function gC(CC) {
-       return CC
+     function fp() {
+       return (0, Lp.G)(op.c.get("clientEscMenuOptions").pixelScale) * (0, Lp.C)()
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/198.js` (Changed code · before: `L75-L76` → after: `L255-L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272fR255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f) · [After (L255-L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/198.js#L255-L256) · [Before (L75-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/198.js#L75-L76)

```diff
-     function SC(CC) {
-       return CC === FC.f ? null : (0, FC.G)(CC)
+     function bp() {
+       return (0, Lp.s)(fp())
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/198.js` (Changed code · before: `L84-L108` → after: `L259-L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272fR259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f) · [After (L259-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/198.js#L259-L261) · [Before (L84-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/198.js#L84-L108)

```diff
-     function xC(CC, zC, ZC) {
-       AC !== (0, qC.d)() && (AC = (0, qC.d)(), GC.clear(), RC.clear());
-       let QC = CC.get(zC);
-       return void 0 === QC && (QC = ZC(), void 0 !== QC && CC.set(zC, QC)), QC
-     }
-     const JC = MC("_$QN+###Y$#b'#%$=%/#I'%##7%))+%[%(#%9##%)(#%9(#%?(I$%'('%%('%%('%%('%#(%%%('%%('%%('%#(%%%('%#('%%('%%('%%('%%('%#(%%#(%%#(%%%('%#(%%%(#%I%##%%)M&%A)A%A)b&%b&(Q.%)(#%)(W%%#(1%#(-%#(#%#(Q$%#(G(%/(#%1('%I%$b%%+$+&3(-$%%+$+&3(-$%%+$+&3(-$%%+$+&3(-$?&#%#$3(-$+&#%#$ … [truncated]
-       IC = MC("J,##O$##$#%/$#%/$#%/$-%9$1%#$)%A$#%b&$1%-$[+%S%$%%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%9$M2#+%-$#%/$#%/$#%/$#%%$-&/$-%+$9%3$-%E$$b%%I%$A%#$%%=$b(&-$-&#%/$#%/$#%/$#%%$-&)%'$-%#$7%M'$E+%#$%%#$?%K)$5%#$-&#%%$#%+$#%/$#%/$#%/$#%%$-&Q$%#$-& … [truncated]
-       iC = MC(".W]+#%#%#%#%#%#%#%#%%%#%#%#%%%#%#%#", "30|20|16|1|2|5|7|12|8|100|21|24|22|75", Number),
-       vC = MC("&PO+#####%####################$#%#,#%#####,%&#)#,#.#%#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1$bC$'#*#/#,#&$8'#*#/#,#&$8'#*#/#,#&$8'#*#/#,#&$1'#*# … [truncated]
-       eC = MC(">W]+#%#)$)%9$", "none|sniper", gC),
-       hC = MC("*W]+#%#%#%#%$%#)&%(%%%$%%)$)'%&", "semi_automatic|submachine|rifle|pistol|shotgun", gC),
-       KC = NC("]%LV+#c&M.$4_1$44$44$44$49$4/$4/$4/$"),
-       YC = NC("$a&#$9$Z$K?$&;$$[($(c($6Y&$$)$$$$&G%$*$$$*$(V*$Z$V$$$#$$#$&+$$#$$%$$$$$$$$$$&$$$#$$($,E0$$T&$&V$$D$`-$(%$6*$$%$T$M$$$L%$6;$$$$$2$$W:$*D^%$$N%$BB$BB$BB$BB$BB$BB$BB$BB$BB$BB$BB$2O'$2*$2*$2*$2*$2*$2*$2*$2*$2*$:*$0=$&^$$$N$$(Q$$$]$$.#$&6$$K%$:.$*I$$*&$*S+$6,$"),
-       dC = MC("$DO+#######%#$ZD$$#%#&#'%(#$#%#&#'%(#$#%#&#'%(#$#%#&#'%(#$#%#&#'%(#$#%#&#'%($U$(.1($'(.1($'(.1($'(.1($2(.+($((.+($((.+($((.+($C&($@$", "1|2|3|4|5", (CC => "" === CC ? null : Number(CC))),
-       mC = MC("$F(#$%$$&#$)%$)%$0$$,$$%$$&$$6$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$@$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$'$$I$%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$.#$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$' … [truncated]
-       HC = MC(",QN+####$/#+#+###+#4####1+##S(+$$#2A#$H%#$%0$%0$%0$%0$%0$%0$%0$%0$%0$U.0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0:C/(:.($R$$#&#'#(#*++#0$%0&&(&$($$$#&#'#(#*++#0$%0&&(&$($$$#&#'#(#*++#0$%0&&(&$($$$#&#'#(#*++#0$%0&&(&$(?+$#(#0$%0&&(&#(,#+$#(#0$%0&&(&#(,#+$#(#0$%0 … [truncated]
- ... (9 more removed lines; see GitHub link above)
+     function hp() {
+       const pp = Dp.h.getItem(Bp);
+       return "object" !== typeof pp || null === pp || "string" !== typeof pp.gpu ? null : pp
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/198.js` (Changed code · before: `L112-L116` → after: `L265-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272fR265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f) · [After (L265-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/198.js#L265-L269) · [Before (L112-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/198.js#L112-L116)

```diff
-       const zC = PC(CC);
-       return null !== zC ? zC : xC(RC, CC, (() => {
-         var zC;
-         return null !== (zC = (0, FC.I)(XC(CC))) && void 0 !== zC ? zC : void 0
-       }))
+       return {
+         untilEpochMs: Date.now() + (pp.untilMs - performance.now()),
+         backoffMs: pp.backoffMs,
+         fps: pp.fps
+       }
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/198.js` (Changed code · before: `L120` → after: `L273-L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272fR273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f) · [After (L273-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/198.js#L273-L277) · [Before (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/198.js#L120)

```diff
-       return JC(CC)
+       return void 0 === pp || "number" !== typeof pp.fps ? null : {
+         untilMs: performance.now() + (pp.untilEpochMs - Date.now()),
+         backoffMs: pp.backoffMs,
+         fps: pp.fps
+       }
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/198.js` (Changed code · before: `L123-L124` → after: `L281-L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272fR281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f) · [After (L281-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/198.js#L281-L286) · [Before (L123-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/198.js#L123-L124)

```diff
-     function rC(CC) {
-       return IC(CC)
+     function gp() {
+       if (null === Fp) {
+         const pp = new URLSearchParams(window.location.search).get("msaa");
+         Fp = op.c.get("clientEscMenuOptions").antiAliasing && ("0" === pp || "1" !== pp && !(0, xp.c)("antiAliasing") && (0, Qp.e)())
+       }
+       return Fp
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/198.js` (Changed code · before: `L128` → after: `L290-L291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272fR290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f) · [After (L290-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/198.js#L290-L291) · [Before (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/198.js#L128)

```diff
-       return iC(CC)
+       const ip = "number" === typeof pp ? Date.now() - pp : -1;
+       return ip >= 0 && ip < Np
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/198.js` (Changed code · before: `L131-L132` → after: `L295-L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272fR295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f) · [After (L295-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/198.js#L295-L296) · [Before (L131-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/198.js#L131-L132)

```diff
-     function TC(CC) {
-       return vC(CC)
+     function Zp() {
+       return rp ??= (0, Ip.getDeviceDefaultPixelScale)(), zp(rp)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/198.js` (Changed code · before: `L136` → after: `L300-L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272fR300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f) · [After (L300-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/198.js#L300-L301) · [Before (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/198.js#L136)

```diff
-       return eC(CC)
+       const ip = op.c.get("clientEscMenuOptions");
+       return ip.pixelSmoothing && !(0, xp.c)("pixelScale") && ip.pixelScale === pp
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/198.js` (Changed code · before: `L139-L140` → after: `L306-L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272fR306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f) · [After (L306-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/198.js#L306-L320) · [Before (L139-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/198.js#L139-L140)

```diff
-     function tC(CC) {
-       return hC(CC)
+     function Vp() {
+       if (null === sp || Kp !== fp()) {
+         var pp;
+         Kp = fp();
+         const ip = Number(null !== (pp = new URLSearchParams(window.location.search).get(Tp)) && void 0 !== pp ? pp : ""),
+           cp = bp();
+         if (ip > 0 && ip <= 1) sp = (0, Lp.z)(cp, cp[0] / ip);
+         else {
+           const pp = hp(),
+             ip = (0, Lp.z)(cp, (0, Lp.A)(fp())),
+             Op = !(0, Qp.g)() && Gp(null === pp || void 0 === pp ? void 0 : pp.heldAt) && (null === pp || void 0 === pp ? void 0 : pp.heldTarget) === fp() ? null === pp || void 0 === pp ? void 0 : pp.heldN : void 0;
+           sp = "number" === typeof Op ? Math.min(ip, (0, Lp.z)(cp, Op)) : ip
+         }
+       }
+       return sp
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/198.js` (Changed code · before: `L143-L144` → after: `L323-L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272fR323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f) · [After (L323-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/198.js#L323-L329) · [Before (L143-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/198.js#L143-L144)

```diff
-     function DC(CC) {
-       return 0 !== YC(CC)
+     function ii(pp, ip) {
+       var cp;
+       const Op = ip.indexOf(null !== (cp = pp.failedUpN) && void 0 !== cp ? cp : -1);
+       return Op >= 0 && Gp(pp.failedUpAt) ? {
+         step: Op,
+         untilMs: performance.now() + Yp.d.stepUp.failWaitsMs[0]
+       } : null
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/198.js` (Changed code · before: `L147-L148` → after: `L336-L337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272fR336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f) · [After (L336-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/198.js#L336-L337) · [Before (L147-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/198.js#L147-L148)

```diff
-     function jC(CC) {
-       return dC(CC)
+     function Si() {
+       for (const pp of Ii) pp()
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/198.js` (Changed code · before: `L151-L152` → after: `L340-L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272fR340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f) · [After (L340-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/198.js#L340-L341) · [Before (L151-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/198.js#L151-L152)

```diff
-     function yC(CC) {
-       return 0 !== KC(CC)
+     function xi() {
+       return Oi ? null : (Ui(), null === ci ? (null !== rp || null !== (0, Ip.peekGpuVendor)() ? Zp() : zp(1)) ? Vp() : null : Zp() ? ci.currentStep() : null)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/198.js` (Changed code · before: `L155-L159` → after: `L344-L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272fR344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f) · [After (L344-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/198.js#L344-L349) · [Before (L155-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/198.js#L155-L159)

```diff
-     function LC(CC) {
-       const zC = mC(CC);
-       if (void 0 === zC || zC.startsWith(FC.t)) return null === zC || void 0 === zC ? void 0 : zC.slice(FC.t.length);
-       const ZC = (0, qC.c)(CC);
-       return void 0 === ZC ? void 0 : `${ZC}${FC.u}${zC}`
+     function Li() {
+       const pp = xi();
+       if (null === pp) return null;
+       const ip = bp(),
+         cp = ip[Math.min(pp, ip.length - 1)];
+       return cp === Yi() ? null : cp
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/198.js` (Changed code · before: `L162-L164` → after: `L352-L353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272fR352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f) · [After (L352-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/198.js#L352-L353) · [Before (L162-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/198.js#L162-L164)

```diff
-     function UC(CC) {
-       var zC;
-       return null !== (zC = HC(CC)) && void 0 !== zC ? zC : WC
+     function Yi() {
+       return (0, Lp.x)(op.c.get("clientEscMenuOptions").pixelScale, (0, Lp.C)())
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/198.js` (Changed code · before: `L169-L176` → after: `L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272fR357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f) · [After (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/198.js#L357) · [Before (L169-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/198.js#L169-L176)

```diff
-       if (null === BC) {
-         const CC = [],
-           zC = new FC.y(wC);
-         let ZC = 0;
-         for (; !zC.done;) ZC += (0, FC.N)(zC.next()), CC.push(ZC);
-         BC = Object.freeze(CC)
-       }
-       return BC
+       return null !== ci && null !== Li()
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/198.js` (Changed code · before: `L180` → after: `L361-L363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272fR361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f) · [After (L361-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/198.js#L361-L363) · [Before (L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/198.js#L180)

```diff
-       return EC(CC)
+       return Ii.add(pp), () => {
+         Ii.delete(pp)
+       }
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/198.js` (Changed code · before: `L183` → after: `L366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272fR366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f) · [After (L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/198.js#L366) · [Before (L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/198.js#L183)

```diff
-     function VC(CC, zC) {
+     function Pi(pp, ip, cp) {
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/198.js` (Changed code · before: `L185` → after: `L368-L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272fR368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f) · [After (L368-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/198.js#L368-L379) · [Before (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/198.js#L185)

```diff
-       return 0 !== ((null !== (ZC = lC(CC)) && void 0 !== ZC ? ZC : 0) & zC)
+       if (null !== ci || Oi || (0, Qp.g)()) return;
+       const Ip = (0, lp.d)(pp, ip, cp);
+       null !== Ip && ((0, Qp.j)(Ip.vendor), "" !== Ip.renderer && (0, Op.l)(Ip.vendor, Ip.renderer)), oi = `${pp}:${(null===Ip||void 0===Ip?void 0:Ip.renderer)||(null===Ip||void 0===Ip?void 0:Ip.vendor)||""}`, (null === (op = hp()) || void 0 === op ? void 0 : op.gpu) !== oi && (D … [truncated]
+         gpu: oi
+       }), sp = null), yi(), document.addEventListener("visibilitychange", (() => {
+         if (document.hidden) try {
+           var pp;
+           null === (pp = ci) || void 0 === pp || pp.hidden()
+         } catch (ip) {
+           ji(), console.error("The quality steps stopped", ip)
+         }
+       }))
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/198.js` (Changed code · before: `L188-L189` → after: `L383-L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272fR383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f) · [After (L383-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/198.js#L383-L446) · [Before (L188-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/198.js#L188-L189)

```diff
-     function Cz(CC) {
-       return VC(CC, FC.c.OnlyInSearch)
+     function yi() {
+       var pp;
+       const ip = null !== (pp = hp()) && void 0 !== pp ? pp : {
+           gpu: oi
+         },
+         cp = bp();
+       Wi = fp(), ci = new Xp({
+           changed: Si,
+           aW: () => {
+             wi({
+               heldN: void 0
+             })
+           },
+           sx: pp => {
+             var ip;
+             const cp = bp()[pp],
+ ... (48 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/198.js` (Changed code · before: `L192-L193` → after: `L449-L450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272fR449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f) · [After (L449-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/198.js#L449-L450) · [Before (L192-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/198.js#L192-L193)

```diff
-     function zz(CC) {
-       return VC(CC, FC.c.OnlyInCategory)
+     function Ui() {
+       null !== ci && fp() !== Wi && (sp = null, yi())
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/198.js` (Changed code · before: `L197` → after: `L454-L458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272fR454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f) · [After (L454-L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/198.js#L454-L458) · [Before (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/198.js#L197)

```diff
-       return VC(CC, FC.c.DevOnly)
+       Dp.h.setItem(Bp, {
+         ...hp(),
+         ...pp,
+         gpu: oi
+       })
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/198.js` (Changed code · before: `L200-L201` → after: `L465-L466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272fR465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f) · [After (L465-L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/198.js#L465-L466) · [Before (L200-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/198.js#L200-L201)

```diff
-     function Qz(CC) {
-       return !VC(CC, FC.c.HiddenByDefault) && void 0
+     function ei() {
+       vi++
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/198.js` (Changed code · before: `L204-L207` → after: `L469-L471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272fR469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f) · [After (L469-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/198.js#L469-L471) · [Before (L204-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/198.js#L204-L207)

```diff
-     function wz(CC, zC, ZC, QC) {
-       var wC;
-       const bC = null !== (wC = lC(CC)) && void 0 !== wC ? wC : 0;
-       return 0 !== (bC & FC.c.DisabledInPublicLobbies) && zC || 0 !== (bC & FC.c.DisabledInProduction) && !0 || !ZC || !QC && 0 !== (bC & FC.c.DevOnly)
+     function ui(pp, ip, cp) {
+       let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+       Ui(), null !== ci && (pp - Hi >= 1e3 && (di = vi - ti > Yp.d.sceneChange.meshesPerSecond, ti = vi, Hi = pp), Jp.c.isHeld() ? ci.paused(pp) : ci.frame(pp, ip, cp && !document.hidden && Zp(), di || Op > 0 || (0, Sp.l)()))
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/198.js` (Changed code · before: `L212-L221` → after: `L475-L482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272fR475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f) · [After (L475-L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/198.js#L475-L482) · [Before (L212-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/198.js#L212-L221)

```diff
-       if (null === bz) {
-         const CC = nC.split(FC.u),
-           zC = new Map,
-           ZC = new FC.y(bC);
-         let QC = 0,
-           wC = 0;
-         for (; !ZC.done;) {
-           QC += (0, FC.N)(ZC.next());
-           const bC = ZC.next();
-           zC.set(QC, Object.freeze(CC.slice(wC, wC + bC))), wC += bC
+       if (!Oi) {
+         Oi = !0, null !== ci && (ci = null, wi({
+           noGain: void 0
+         }));
+         try {
+           Si()
+         } catch (pp) {
+           console.error("The quality steps' resize to the player's n failed", pp)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/198.js` (Changed code · before: `L225` → after: `L485-L518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272fR485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-60d55a53e575aeeeeb65dfcd91d538cd38eabf7a8ccabfaff68108b88215272f) · [After (L485-L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/198.js#L485-L518) · [Before (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/198.js#L225)

```diff
-       return bz
+     }
+ 
+     function ki() {
+       var pp;
+       null === (pp = ci) || void 0 === pp || pp.resized(performance.now())
+     }
+   },
+   34367: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => Ip
+     });
+     var Op = cp(104),
+       op = cp(129);
+ 
+     function Ip(pp, ip, cp) {
+       if ("webgpu" === pp) return cp ? ((0, Op.seedGpuVendor)(cp), {
+ ... (18 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/199.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/199.js` (62 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df)

#### 1. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/199.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/199.js#L4)

```diff
-   41330: (CC, zC, ZC) => {
+   37169: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L6` → after: `L6-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/199.js#L6-L9) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/199.js#L6)

```diff
-       c: () => bC
+       b: () => op,
+       e: () => Ip,
+       h: () => xp,
+       l: () => Sp
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L8-L9` → after: `L11-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L11-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/199.js#L11-L13) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/199.js#L8-L9)

```diff
-     var QC = ZC(48),
-       wC = ZC(2734);
+     var Op = cp(1779);
+     const op = ".bloxdreplay",
+       Ip = "application/octet-stream";
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L11-L20` → after: `L15-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L15-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/199.js#L15-L147) · [Before (L11-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/199.js#L11-L20)

```diff
-     function bC(CC, zC, ZC) {
-       const bC = (0, QC.useRef)(null),
-         {
-           width: nC,
-           height: fC
-         } = (0, wC.e)(CC);
-       (0, QC.useEffect)((() => {
-         const ZC = zC(CC.current);
-         return bC.current = ZC, () => {
-           ZC.close(), bC.current = null
+     function Sp() {
+       return `game-recording-${(arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date).toISOString()}${op}`
+     }
+ 
+     function xp(pp) {
+       let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Sp();
+       return (0, Op.c)(new Blob([pp], {
+         type: Ip
+       }), ip), ip
+     }
+   },
+   37151: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Sp,
+       f: () => Ip
+     });
+ ... (117 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L22-L26` → after: `L149-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L149-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/199.js#L149-L163) · [Before (L22-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/199.js#L22-L26)

```diff
-       }), [CC, zC]), (0, QC.useEffect)((() => {
-         nC <= 0 || fC <= 0 || bC.current.resize(nC, fC)
-       }), [nC, fC]), (0, QC.useEffect)((() => {
-         bC.current.show(ZC)
-       }), [ZC])
+       },
+       xp = new Set(Object.values(Sp).filter((pp => "Error" === pp.type)).map((pp => pp.text)));
+ 
+     function Lp(pp) {
+       return pp instanceof Error && xp.has(pp.message) ? pp.message : void 0
+     }
+ 
+     function Yp(pp) {
+       var ip;
+       const cp = null !== (ip = pp.timeoutMs) && void 0 !== ip ? ip : "Error" === pp.type ? op : Ip;
+       Op.m.GA("showBottomMessage", {
+         message: pp.text,
+         timeoutLength: cp,
+         type: pp.type
+       })
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L29` → after: `L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/199.js#L166) · [Before (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/199.js#L29)

```diff
-   41336: (CC, zC, ZC) => {
+   36693: (pp, ip, cp) => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L32-L33` → after: `L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/199.js#L169) · [Before (L32-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/199.js#L32-L33)

```diff
-       d: () => WC,
-       e: () => oC
+       f: () => Ip
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L35-L36` → after: `L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/199.js#L171) · [Before (L35-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/199.js#L35-L36)

```diff
-     var QC = ZC(37023),
-       wC = ZC(38454);
+     let Op = !1;
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L38-L46` → after: `L173-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L173-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/199.js#L173-L174) · [Before (L38-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/199.js#L38-L46)

```diff
-     function bC(CC, zC) {
-       let [ZC, QC, wC] = CC;
-       return [0, .5, 1].map((CC => ({
-         timeFraction: CC,
-         rotation: {
-           nb: "catmull-rom-spline",
-           point: [ZC, QC, wC + (.5 === CC ? zC : 0)]
-         }
-       })))
+     function op() {
+       return Op
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L49-L79` → after: `L177-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L177-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/199.js#L177-L178) · [Before (L49-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/199.js#L49-L79)

```diff
-     function nC(CC, zC, ZC) {
-       return {
-         Cb: 3200,
-         loop: !0,
-         Zb: {
-           Root: {
-             timeline: [0, .5, 1].map((CC => ({
-               timeFraction: CC,
-               position: {
-                 nb: "catmull-rom-spline",
-                 point: [0, .5 === CC ? .18 : 0, 0]
-               }
-             })))
-           },
-           HeadMesh: {
-             timeline: [0, .25, .75, 1].map((CC => ({
- ... (15 more removed lines; see GitHub link above)
+     function Ip(pp) {
+       return Op !== pp && (Op = pp, !0)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L88` → after: `L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/199.js#L181) · [Before (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/199.js#L88)

```diff
-   38454: (CC, zC, ZC) => {
+   34386: (pp, ip, cp) => {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L90-L91` → after: `L183-L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L183-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/199.js#L183-L184) · [Before (L90-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/199.js#L90-L91)

```diff
-       b: () => wC,
-       c: () => bC
+       c: () => Ip,
+       g: () => op
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L93` → after: `L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/199.js#L186) · [Before (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/199.js#L93)

```diff
-     const QC = new WeakMap;
+     var Op = cp(25);
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L96` → after: `L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/199.js#L189) · [Before (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/199.js#L96)

```diff
-       return QC.set(CC, zC), CC
+       return pp && !ip
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L99-L101` → after: `L192-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L192-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/199.js#L192-L193) · [Before (L99-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/199.js#L99-L101)

```diff
-     function bC(CC) {
-       var zC;
-       return null !== (zC = QC.get(CC)) && void 0 !== zC ? zC : null
+     function Ip() {
+       return op(Op.c.get("isTouchScreen"), Op.c.get("clientEscMenuOptions").touchActionButtons)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L104` → after: `L196-L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L196-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/199.js#L196-L202) · [Before (L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/199.js#L104)

```diff
-   34194: (CC, zC, ZC) => {
+   37010: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => Op
+     });
+     const Op = 3
+   },
+   37021: (pp, ip, cp) => {
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L107-L108` → after: `L210-L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L210-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/199.js#L210-L215) · [Before (L107-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/199.js#L107-L108)

```diff
-       g: () => wC,
-       i: () => FC
+       h: () => dp,
+       j: () => Hp,
+       n: () => jp,
+       q: () => ep,
+       u: () => wp,
+       y: () => yp
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L110` → after: `L217-L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L217-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/199.js#L217-L230) · [Before (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/199.js#L110)

```diff
-     var QC = ZC(1501);
+     var Op = cp(1424),
+       op = cp(37025),
+       Ip = cp(34);
+     const Sp = "clientGameCraftableMarksChanged",
+       xp = "clientGameCraftableLocksChanged",
+       Lp = "clientGameCraftableOrderChanged",
+       Yp = "selectCraftable";
+     let Dp = new Set,
+       Ap = new Map,
+       Pp = new Map;
+ 
+     function Wp() {
+       return Dp
+     }
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L113-L117` → after: `L233-L234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L233-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/199.js#L233-L234) · [Before (L113-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/199.js#L113-L117)

```diff
-       var zC;
-       return {
-         ...nC.store,
-         yaw: nC.store.yaw + (null !== (zC = QC.b[CC].previewYaw) && void 0 !== zC ? zC : 0)
-       }
+       const ip = new Set(pp);
+       (0, op.b)(ip, Dp) || (Dp = ip, Ip.m.GA(Sp, Dp))
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L134-L137` → after: `L237-L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L237-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/199.js#L237-L238) · [Before (L134-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/199.js#L134-L137)

```diff
-     function fC(CC, zC) {
-       CC instanceof Promise ? CC.then(zC).catch((CC => {
-         console.error("Couldn't open the preview", CC)
-       })) : zC(CC)
+     function Up() {
+       return Ap
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L139-L159` → after: `L240-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L240-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/199.js#L240-L242) · [Before (L139-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/199.js#L139-L159)

```diff
-     class oC {
-       constructor(CC) {
-         this.opened = null, this.view = null, this.size = null, this.closed = !1, fC(CC, (CC => {
-           this.closed ? CC.close() : (this.opened = CC, null !== this.size && CC.resize(this.size.width, this.size.height), null !== this.view && CC.show(this.view))
-         }))
-       }
-       show(CC) {
-         var zC;
-         this.view = CC, null === (zC = this.opened) || void 0 === zC || zC.show(CC)
-       }
-       resize(CC, zC) {
-         var ZC;
-         this.size = {
-           width: CC,
-           height: zC
-         }, null === (ZC = this.opened) || void 0 === ZC || ZC.resize(CC, zC)
- ... (5 more removed lines; see GitHub link above)
+ 
+     function wp(pp) {
+       0 === pp.size && 0 === Ap.size || (Ap = new Map(pp), Ip.m.GA(xp, Ap))
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L161-L201` → after: `L244-L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L244-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/199.js#L244-L258) · [Before (L161-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/199.js#L161-L201)

```diff
-     class qC {
-       constructor(CC) {
-         this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(CC).then((CC => CC.ready)), fC(CC, (CC => {
-           this.closed ? CC.close() : (this.opened = CC, null !== this.size && CC.resize(this.size.width, this.size.height))
-         }))
-       }
-       get dev() {
-         return this.opened.dev
-       }
-       isReady() {
-         var CC, zC;
-         return null !== (CC = null === (zC = this.opened) || void 0 === zC ? void 0 : zC.isReady()) && void 0 !== CC && CC
-       }
-       setCosmetic(CC, zC) {
-         var ZC;
-         null === (ZC = this.opened) || void 0 === ZC || ZC.setCosmetic(CC, zC)
- ... (25 more removed lines; see GitHub link above)
+ 
+     function vp() {
+       return Pp
+     }
+ 
+     function tp(pp) {
+       pp.length === Pp.size && pp.every(((pp, ip) => Pp.get(pp) === ip)) || (Pp = new Map(pp.map(((pp, ip) => [pp, ip]))), Ip.m.GA(Lp, Pp))
+     }
+ 
+     function Hp(pp, ip, cp, Op) {
+       if (! function(pp, ip, cp) {
+           return pp.size > 0 || ip.size > 0 || cp.size > 0
+         }(ip, cp, Op)) return pp;
+       const op = pp => {
+         const Op = cp.get(pp.name);
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L203-L204` → after: `L260-L266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L260-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/199.js#L260-L266) · [Before (L203-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/199.js#L203-L204)

```diff
-         this.closed = !0, null === (CC = this.opened) || void 0 === CC || CC.close(), this.opened = null
-       }
+         return Op ? null !== (op = Op.stepsAway) && void 0 !== op ? op : 1 : ip.has(pp.name) ? -1 : 0
+       };
+       return [...pp].sort(((pp, ip) => op(pp) - op(ip) || ((pp, ip) => {
+         const cp = Op.get(pp.name),
+           op = Op.get(ip.name);
+         return void 0 === cp || void 0 === op ? (void 0 === cp ? 1 : 0) - (void 0 === op ? 1 : 0) : Number(ip.haveIngredients) - Number(pp.haveIngredients) || cp - op
+       })(pp, ip)))
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L206-L234` → after: `L268-L276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L268-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/199.js#L268-L276) · [Before (L206-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/199.js#L206-L234)

```diff
-     const FC = new class {
-       constructor() {
-         this.host = null, this.makeDefault = null
-       }
-       setHost(CC) {
-         this.host = CC
-       }
-       setDefaultHost(CC) {
-         this.makeDefault = CC
-       }
-       current() {
-         if (null === this.host) {
-           if (null === this.makeDefault) throw new Error("no preview host");
-           this.host = this.makeDefault()
-         }
-         return this.host
- ... (13 more removed lines; see GitHub link above)
+ 
+     function dp(pp, ip, cp) {
+       const Op = [...ip.keys()].sort(((pp, cp) => ip.get(pp) - ip.get(cp)));
+       return pp.forEach(((op, Ip) => {
+         const Sp = cp(op);
+         ip.has(Sp) || (Op.splice(0 === Ip ? 0 : Op.indexOf(cp(pp[Ip - 1])) + 1, 0, Sp), ip.set(Sp, -1))
+       })), Op.forEach(((pp, cp) => {
+         ip.set(pp, cp)
+       })), [...pp].sort(((pp, Op) => ip.get(cp(pp)) - ip.get(cp(Op))))
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L236-L252` → after: `L278-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L278-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/199.js#L278-L284) · [Before (L236-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/199.js#L236-L252)

```diff
-   },
-   34185: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       c: () => QC.d,
-       g: () => QC.g,
-       k: () => QC.i
-     });
-     var QC = ZC(34194);
-     class wC {
-       constructor(CC) {
-         this.load = CC, this.loaded = null, this.loading = null
-       }
-       run(CC) {
-         return null !== this.loaded ? CC(this.loaded) : (this.loading ??= this.load().then((CC => (this.loaded = CC, CC)), (CC => {
-           throw this.loading = null, CC
-         })), this.loading.then(CC))
- ... (1 more removed lines; see GitHub link above)
+ 
+     function ep(pp, ip) {
+       const cp = {
+         variation: pp,
+         itemName: ip
+       };
+       Ip.m.GA(Yp, cp)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L254-L269` → after: `L286-L300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L286-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/199.js#L286-L300) · [Before (L254-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/199.js#L254-L269)

```diff
-     class bC {
-       constructor() {
-         this.mobScene = new wC((() => Promise.all([ZC.e(72), ZC.e(232), ZC.e(231), ZC.e(254), ZC.e(96), ZC.e(255), ZC.e(75), ZC.e(74), ZC.e(252), ZC.e(73), ZC.e(262), ZC.e(256), ZC.e(261), ZC.e(259), ZC.e(251), ZC.e(274), ZC.e(228), ZC.e(244), ZC.e(257), ZC.e(260), ZC.e(77), ZC.e … [truncated]
-       }
-       openMob(CC) {
-         return this.mobScene.run((zC => zC.openMobPreview(CC)))
-       }
-       openPet(CC) {
-         return this.mobScene.run((zC => zC.openPetPreview(CC)))
-       }
-       openMobLineup(CC) {
-         return this.mobScene.run((zC => zC.openMobLineupPreview(CC)))
-       }
-       openCharacter(CC, zC) {
-         return this.characterScene.run((ZC => ZC.openCharacterPreview(CC, zC)))
-       }
+ 
+     function jp() {
+       yp([]), wp(new Map), tp([])
+     }
+ 
+     function kp() {
+       return (0, Op.d)(Sp, Wp)
+     }
+ 
+     function mp() {
+       return (0, Op.d)(xp, Up)
+     }
+ 
+     function Rp() {
+       return (0, Op.d)(Lp, vp)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L273-L275` → after: `L303-L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L303-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/199.js#L303-L306) · [Before (L273-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/199.js#L273-L275)

```diff
-   41576: (CC, zC, ZC) => {
-     ZC.r(zC), ZC.d(zC, {
-       FrontlineMvpLineup: () => WC
+   37019: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Ip,
+       f: () => op
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L277-L283` → after: `L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/199.js#L308) · [Before (L277-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/199.js#L277-L283)

```diff
-     var QC = ZC(48),
-       wC = ZC(1002),
-       bC = ZC.n(wC),
-       nC = ZC(34185),
-       fC = ZC(41336),
-       oC = ZC(41330),
-       qC = ZC(1056);
+     let Op = () => null;
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L286-L332` → after: `L311-L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L311-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/199.js#L311-L316) · [Before (L286-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/199.js#L286-L332)

```diff
-       return nC.k.openMobLineup(CC)
-     }
-     const WC = (0, QC.memo)((function(CC) {
-       let {
-         players: zC,
-         className: ZC
-       } = CC;
-       const wC = (0, QC.useRef)(null),
-         nC = (0, QC.useMemo)((() => zC.map((CC => {
-           let {
-             cosmetics: zC,
-             size: ZC,
-             heldGun: QC
-           } = CC;
-           return {
-             cosmetics: zC,
- ... (31 more removed lines; see GitHub link above)
+       Op = pp
+     }
+ 
+     function Ip(pp, ip) {
+       return Op(pp, ip)
+     }
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L334` → after: `L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/199.js#L318) · [Before (L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/199.js#L334)

```diff
-   37023: (CC, zC, ZC) => {
+   36764: (pp, ip, cp) => {
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L339-L341` → after: `L325-L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L325-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/199.js#L325-L327) · [Before (L339-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/199.js#L339-L341)

```diff
-     var QC = ZC(37014),
-       wC = ZC(326),
-       bC = ZC(1806);
+     var Op = cp(36767);
+     const op = "data-camera-fade",
+       Ip = "data-letterbox-bar";
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L344-L345` → after: `L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/199.js#L330) · [Before (L344-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/199.js#L344-L345)

```diff
-       if ("Cb" in CC) return JC.createAnimationScript(CC);
-       return new qC(CC).createAnimationScript()
+       return pp instanceof Element && pp.hasAttribute(Ip)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L348-L350` → after: `L334-L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L334-L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/199.js#L334-L335) · [Before (L348-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/199.js#L348-L350)

```diff
-     function fC(CC, zC, ZC, wC) {
-       const bC = CC.Cb <= 0 ? 1 : zC + ZC * Math.max(0, wC) / CC.Cb;
-       return CC.zb === QC.g.LoopOnLastFrame ? bC % 1 : CC.zb === QC.g.NoLoop && bC >= 1 ? null : Math.min(1, bC)
+     function Lp(pp) {
+       xp = pp
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L352-L357` → after: `L337-L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L337-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/199.js#L337-L341) · [Before (L352-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/199.js#L352-L357)

```diff
-     class oC {
-       createAnimationScript(CC) {
-         const {
-           Cb: zC,
-           loop: ZC,
-           Zb: QC
+ 
+     function Yp() {
+       const pp = document.createElement("div"),
+         {
+           style: ip
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L359-L363` → after: `L343-L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L343-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/199.js#L343-L364) · [Before (L359-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/199.js#L359-L363)

```diff
-         return {
-           Cb: Math.round(zC),
-           zb: this.createLoopMode(null !== ZC && void 0 !== ZC && ZC),
-           Zb: this.createNodeSkeletonAnimationScript(null !== QC && void 0 !== QC ? QC : null)
-         }
+       return ip.position = "absolute", ip.left = "0", ip.right = "0", ip.pointerEvents = "none", pp
+     }
+ 
+     function Dp(pp) {
+       const ip = Yp();
+       ip.style[pp] = "0", ip.style.height = 100 * Op.e + "%", ip.style.background = "#000000", ip.style.pointerEvents = "auto", ip.setAttribute(Ip, ""), ip.addEventListener("mousedown", Pp), ip.addEventListener("contextmenu", Ap);
+       for (const cp of ["touchstart", "touchmove", "touchend", "touchcancel"]) ip.addEventListener(cp, Ap);
+       return ip
+     }
+ 
+     function Ap(pp) {
+       pp.preventDefault(), pp.stopPropagation()
+     }
+ 
+     function Pp(pp) {
+       Ap(pp);
+ ... (6 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L365-L374` → after: `L366-L374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L366-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/199.js#L366-L374) · [Before (L365-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/199.js#L365-L374)

```diff
-       createLoopMode(CC) {
-         switch (CC) {
-           case !1:
-             return QC.g.NoLoop;
-           case !0:
-             return QC.g.LoopOnLastFrame;
-           case "hold-on-last-frame":
-             return QC.g.HoldOnLastFrame
-         }
-         throw new Error(`Invalid loop mode schema: ${CC}`)
+       setFade(pp, ip) {
+         var cp;
+         if (!this.elements && ip <= 0) return;
+         const {
+           fade: Op
+         } = this.getElements(), op = null !== (cp = xp) && void 0 !== cp ? cp : this.getContainer();
+         Op.parentElement !== op && op.appendChild(Op);
+         const Ip = this.markHost(ip > 0 ? xp : null, ip >= 1);
+         (pp !== this.colour || ip !== this.alpha || Ip) && (pp !== this.colour && (Op.style.background = pp), Op.style.opacity = String(ip), Op.style.display = ip > 0 ? "" : "none", this.fadeKeeperHosts(ip), this.colour = pp, this.alpha = ip)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L376-L383` → after: `L376-L380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L376-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/199.js#L376-L380) · [Before (L376-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/199.js#L376-L383)

```diff
-       createNodeSkeletonAnimationScript(CC) {
-         if (null === CC) return null;
-         const zC = {};
-         for (const ZC in CC) {
-           const QC = CC[ZC];
-           zC[ZC] = this.createNodeAnimationScript(QC)
-         }
-         return zC
+       fadeKeeperHosts(pp) {
+         var ip;
+         const cp = null === (ip = this.markedHost) || void 0 === ip ? void 0 : ip.parentElement;
+         if (cp)
+           for (const Op of cp.querySelectorAll("[data-camera-keeper-host]")) Op.style.setProperty("--camera-fade-alpha", String(pp))
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L385` → after: `L382-L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L382-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/199.js#L382-L384) · [Before (L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/199.js#L385)

```diff
-       createNodeAnimationScript(CC) {
+       setLetterbox(pp, ip) {
+         if (pp === this.letterbox) return;
+         if (!this.elements && !pp) return;
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L387-L415` → after: `L386-L397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L386-L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/199.js#L386-L397) · [Before (L387-L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/199.js#L387-L415)

```diff
-           timeline: zC
-         } = CC, ZC = zC.filter((CC => Number.isFinite(CC.timeFraction)));
-         return ZC.sort(((CC, zC) => CC.timeFraction - zC.timeFraction)), {
-           rotation: this.createTimelineFromKeyframes(ZC, "rotation", NC),
-           position: this.createTimelineFromKeyframes(ZC, "position", gC)
-         }
-       }
-       createTimelineFromKeyframes(CC, zC, ZC) {
-         const QC = [];
-         for (const oC of CC) {
-           const CC = oC[zC];
-           if (CC) {
-             const zC = this.createAnimationFrameWithoutPrecomputes(oC.timeFraction, CC);
-             FC(zC) && QC.push(zC)
-           }
-         }
- ... (13 more removed lines; see GitHub link above)
+           top: cp,
+           bottom: Op
+         } = this.getElements();
+         this.letterbox = pp;
+         const op = !ip || "function" === typeof window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "none" : "transform 400ms ease-in-out";
+         cp.style.transition = op, Op.style.transition = op, cp.style.transform = pp ? "translateY(0)" : "translateY(-100%)", Op.style.transform = pp ? "translateY(0)" : "translateY(100%)"
+       }
+       clear() {
+         const {
+           elements: pp
+         } = this;
+         pp && (this.markHost(null, !1), pp.fade.remove(), pp.top.remove(), pp.bottom.remove(), this.elements = null, this.colour = "", this.alpha = 0, this.letterbox = !1)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L417-L418` → after: `L399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/199.js#L399) · [Before (L417-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/199.js#L417-L418)

```diff
-       createAnimationFrameWithoutPrecomputes(CC, zC) {
-         let ZC, QC, wC = null;
+       markHost(pp, ip) {
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L420-L433` → after: `L401-L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L401-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/199.js#L401-L419) · [Before (L420-L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/199.js#L420-L433)

```diff
-         if ("object" === typeof zC && "point" in zC) wC = null !== (bC = zC.nb) && void 0 !== bC ? bC : null, ZC = zC.point, QC = zC.point;
-         else if ("object" === typeof zC && "pre" in zC) {
-           var nC;
-           wC = null !== (nC = zC.nb) && void 0 !== nC ? nC : null, ZC = zC.pre, QC = zC.post
-         } else ZC = zC, QC = zC;
-         return {
-           timeFraction: CC,
-           nb: this.createLerpMode(wC),
-           pre: ZC,
-           post: QC
-         }
-       }
-       createLerpMode(CC) {
-         return null === CC ? QC.f.Linear : oC.LERP_MODE_SCHEMA_MAPPING[CC]
+         const Op = pp !== this.markedHost;
+         if (!Op && ip === this.markedCovered) return !1;
+         var Ip, Sp;
+         Op && (null === (Ip = this.markedHost) || void 0 === Ip || null === (Sp = Ip.parentElement) || void 0 === Sp || Sp.removeAttribute(op));
+         return null === pp || void 0 === pp || null === (cp = pp.parentElement) || void 0 === cp || cp.setAttribute(op, ip ? "covered" : ""), this.markedHost = pp, this.markedCovered = ip, Op
+       }
+       getElements() {
+         if (this.elements) return this.elements;
+         const pp = Dp("top"),
+           ip = Dp("bottom");
+         pp.style.transform = "translateY(-100%)", ip.style.transform = "translateY(100%)";
+         const cp = Yp();
+         cp.style.top = "0", cp.style.bottom = "0", cp.style.display = "none", cp.setAttribute("data-camera-fade-layer", "");
+         const Op = this.getContainer();
+         return Op.appendChild(pp), Op.appendChild(ip), pp.getBoundingClientRect(), this.elements = {
+           fade: cp,
+ ... (3 more added lines; see GitHub link above)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L436-L453` → after: `L422-L467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L422-L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/199.js#L422-L467) · [Before (L436-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/199.js#L436-L453)

```diff
-     oC.LERP_MODE_SCHEMA_MAPPING = {
-       linear: QC.f.Linear,
-       "catmull-rom-spline": QC.f.CatmullRomSpline
-     };
-     class qC {
-       constructor(CC) {
-         this.animationSchema = CC
-       }
-       createAnimationScript() {
-         const {
-           animation_length: CC,
-           loop: zC,
-           bones: ZC
-         } = this.animationSchema;
-         return {
-           Cb: Math.round(1e3 * CC),
- ... (2 more removed lines; see GitHub link above)
+   },
+   37207: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => Sp,
+       d: () => op,
+       f: () => Ip,
+       h: () => Op,
+       i: () => Dp,
+       j: () => Ap,
+       m: () => Lp
+     });
+     const Op = [0, 0, 1, 1],
+       op = [.42, 0, 1, 1],
+       Ip = [0, 0, .58, 1],
+       Sp = [.42, 0, .58, 1];
+ 
+ ... (30 more added lines; see GitHub link above)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L455-L463` → after: `L469-L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L469-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/199.js#L469-L480) · [Before (L455-L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/199.js#L455-L463)

```diff
-       }
-       createLoopMode(CC) {
-         switch (CC) {
-           case !1:
-             return QC.g.NoLoop;
-           case !0:
-             return QC.g.LoopOnLastFrame;
-           case "hold_on_last_frame":
-             return QC.g.HoldOnLastFrame
+         const ip = Yp(Op, Ip, Dp);
+         if (Math.abs(ip) < 1e-6) break;
+         Dp = xp(Dp - pp / ip)
+       }
+       if (!Ap) {
+         let pp = 0,
+           ip = 1;
+         Dp = cp;
+         for (let op = 0; op < 12; op++) {
+           const op = Lp(Op, Ip, Dp);
+           if (Math.abs(op - cp) < 1e-6) break;
+           cp > op ? pp = Dp : ip = Dp, Dp = (pp + ip) / 2
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L467-L474` → after: `L483-L497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L483-L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/199.js#L483-L497) · [Before (L467-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/199.js#L467-L474)

```diff
-       createNodeSkeletonAnimationScript(CC) {
-         if (null === CC) return null;
-         const zC = {};
-         for (const ZC in CC) {
-           const QC = CC[ZC];
-           zC[ZC] = this.createNodeAnimationScript(QC)
-         }
-         return zC
+       return Lp(op, Sp, Dp)
+     }
+ 
+     function Ap(pp) {
+       switch (pp) {
+         case "linear":
+           return Op;
+         case "easeIn":
+           return op;
+         case "easeOut":
+           return Ip;
+         case "easeInOut":
+           return Sp;
+         default:
+           return pp
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L476-L483` → after: `L499-L527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L499-L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/199.js#L499-L527) · [Before (L476-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/199.js#L476-L483)

```diff
-       createNodeAnimationScript(CC) {
-         const {
-           rotation: zC,
-           position: ZC
-         } = CC;
-         return {
-           rotation: this.createAnimationTimeline(null !== zC && void 0 !== zC ? zC : null, pC, NC, !0),
-           position: this.createAnimationTimeline(null !== ZC && void 0 !== ZC ? ZC : null, GC, gC, !1)
+     }
+   },
+   36767: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Op,
+       i: () => op,
+       j: () => Ip
+     });
+     const Op = .12,
+       op = 1 - 2 * Op;
+ 
+     function Ip(pp) {
+       return Math.abs(pp) > op
+     }
+   },
+   34375: (pp, ip, cp) => {
+ ... (13 more added lines; see GitHub link above)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L486-L509` → after: `L530-L543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L530-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/199.js#L530-L543) · [Before (L486-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/199.js#L486-L509)

```diff
-       createAnimationTimeline(CC, zC, ZC, QC) {
-         if (null === CC) return [];
-         if (Array.isArray(CC)) {
-           CC = {
-             "0.0": CC
-           }
-         }
-         const wC = Object.entries(CC).map((CC => {
-           let [ZC, QC] = CC;
-           const wC = Number(ZC) / this.animationSchema.animation_length;
-           return this.createAnimationFrameWithoutPrecomputes(wC, QC, zC)
-         })).filter(FC);
-         wC.sort(((CC, zC) => CC.timeFraction - zC.timeFraction)), QC && function(CC) {
-           for (let zC = 1; zC < CC.length; zC++) {
-             const ZC = CC[zC - 1].post,
-               QC = CC[zC],
- ... (8 more removed lines; see GitHub link above)
+       isHeld() {
+         return this.holding && op() !== this.heldOrientation && (this.holding = !1), this.holding
+       }
+       hold() {
+         this.heldOrientation = op(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
+           this.holding && (0, Op.NU)(new Error("Game view size held for 60 s"))
+         }), 6e4)
+       }
+       release() {
+         clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
+           if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
+           else {
+             this.holding = !1;
+             for (const pp of this.resizers) pp()
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L511-L522` → after: `L545-L552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L545-L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/199.js#L545-L552) · [Before (L511-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/199.js#L511-L522)

```diff
-         }(wC);
-         const bC = [];
-         for (let qC = 0; qC < wC.length; qC++) {
-           var nC, fC, oC;
-           const CC = wC[qC],
-             zC = null !== (nC = wC[qC - 1]) && void 0 !== nC ? nC : CC,
-             QC = null !== (fC = wC[qC + 1]) && void 0 !== fC ? fC : CC,
-             FC = null !== (oC = wC[qC + 2]) && void 0 !== oC ? oC : QC;
-           bC.push({
-             ...CC,
-             ...ZC(zC.post, zC.timeFraction, CC.post, CC.timeFraction, QC.pre, QC.timeFraction, FC.pre, FC.timeFraction)
-           })
+         }), 1e3)
+       }
+       heldSizer(pp) {
+         let ip = !1;
+         return () => {
+           if (ip && this.isHeld()) return null;
+           const cp = pp();
+           return ip ||= null !== cp, cp
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L526-L539` → after: `L555-L557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L555-L557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/199.js#L555-L557) · [Before (L526-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/199.js#L526-L539)

```diff
-       createAnimationFrameWithoutPrecomputes(CC, zC, ZC) {
-         let QC, wC, bC = null;
-         if ("object" === typeof zC && "post" in zC) {
-           var nC;
-           bC = null !== (nC = zC.lerp_mode) && void 0 !== nC ? nC : null, wC = SC(zC.post, ZC), QC = zC.pre ? SC(zC.pre, ZC) : wC
-         } else {
-           const CC = SC(zC, ZC);
-           wC = CC, QC = CC
-         }
-         return {
-           timeFraction: CC,
-           nb: this.createLerpMode(bC),
-           pre: QC,
-           post: wC
+       onRelease(pp) {
+         return this.resizers.add(pp), () => {
+           this.resizers.delete(pp)
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L546-L548` → after: `L561-L568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L561-L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/199.js#L561-L568) · [Before (L546-L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/199.js#L546-L548)

```diff
- 
-     function FC(CC) {
-       return Number.isFinite(CC.timeFraction) && WC(CC.pre) && WC(CC.post)
+   },
+   36703: (pp, ip, cp) => {
+     const Op = JSON.parse('{"classicGame":{"loseItemsIfLogOutTip":"You will lose your items if you log out when less than 80hp and hit by a player within the last 8 seconds.","protectLandWithProtectorsTip":"Protect your land and chests with protectors - craft them from diamonds", … [truncated]
+     (0, cp(1201).d)(Op)
+   },
+   37025: (pp, ip, cp) => {
+     function Op(pp, ip) {
+       return pp.size === ip.size && [...pp].every((pp => ip.has(pp)))
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L551-L552` → after: `L606-L611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L606-L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/199.js#L606-L611) · [Before (L551-L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/199.js#L551-L552)

```diff
-     function WC(CC) {
-       return Number.isFinite(CC[0]) && Number.isFinite(CC[1]) && Number.isFinite(CC[2])
+     function op(pp, ip) {
+       const {
+         numLines: cp,
+         charsPerLine: op
+       } = Op[ip];
+       return Hp(pp, cp, op, !1)
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L555-L560` → after: `L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/199.js#L617) · [Before (L555-L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/199.js#L555-L560)

```diff
-     function NC(CC, zC, ZC, QC, wC, bC, nC, fC) {
-       const oC = bC - zC,
-         qC = bC - QC,
-         FC = fC - QC,
-         WC = [null, null, null];
-       for (let NC = 0; NC < WC.length; NC++) WC[NC] = MC(CC[NC], ZC[NC], wC[NC], nC[NC], oC, FC);
+     function Lp(pp, ip) {
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L562-L563` → after: `L619-L620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L619-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/199.js#L619-L620) · [Before (L562-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/199.js#L562-L563)

```diff
-         fb: qC,
-         ob: WC
+         width: Math.min(pp, xp) - 2 * Sp,
+         height: Math.min(ip, xp) - 2 * Sp
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L567` → after: `L624-L629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L624-L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/199.js#L624-L629) · [Before (L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/199.js#L567)

```diff
-     function MC(CC, zC, ZC, QC, bC, nC) {
+     function Yp(pp, ip, cp) {
+       const op = Lp(pp, ip),
+         {
+           numLines: Sp,
+           charsPerLine: xp
+         } = Op[cp];
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L569-L571` → after: `L631-L632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L631-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/199.js#L631-L632) · [Before (L569-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/199.js#L569-L571)

```diff
-         Fb: wC.c.computeShortestRotation(CC, ZC) / bC,
-         Wb: wC.c.computeShortestRotation(zC, QC) / nC,
-         delta: wC.c.computeShortestRotation(zC, ZC)
+         numLines: Math.max(1, Math.floor(Sp / Ip * op.height)),
+         charsPerLine: Math.max(1, Math.floor(xp * op.width))
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L575-L588` → after: `L636-L641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L636-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/199.js#L636-L641) · [Before (L575-L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/199.js#L575-L588)

```diff
-     function gC(CC, zC, ZC, QC, wC, bC, nC, fC) {
-       const oC = bC - zC,
-         qC = bC - QC,
-         FC = fC - QC,
-         WC = [null, null, null];
-       for (let NC = 0; NC < WC.length; NC++) WC[NC] = {
-         Fb: (wC[NC] - CC[NC]) / oC,
-         Wb: (nC[NC] - ZC[NC]) / FC,
-         delta: wC[NC] - ZC[NC]
-       };
-       return {
-         fb: qC,
-         ob: WC
-       }
+     function Dp(pp, ip, cp, Op) {
+       const {
+         numLines: op,
+         charsPerLine: Ip
+       } = Yp(cp, Op, ip);
+       return Hp(pp, op, Ip, !1)
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L592` → after: `L653-L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L653-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/199.js#L653-L680) · [Before (L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/199.js#L592)

```diff
-       return null === zC ? CC : zC(CC)
+       const cp = Math.max(0, Up - ip),
+         Op = Math.min(Wp, cp);
+       return pp.slice(0, Op)
+     }
+     const vp = {
+       book: {
+         numLines: 13,
+         charsPerLine: 19,
+         uiFontSize: 1.95
+       },
+       Ux: {
+         numLines: 1,
+         charsPerLine: 19,
+         uiFontSize: 1.95
+       },
+       nameTag: {
+ ... (12 more added lines; see GitHub link above)
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L596-L597` → after: `L781-L784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L781-L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/199.js#L781-L784) · [Before (L596-L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/199.js#L596-L597)

```diff
-       const [zC, ZC, QC] = CC, nC = -(0, bC.j)(zC), fC = -(0, bC.j)(ZC), oC = (0, bC.j)(QC), qC = wC.c.quaternionFromEulerZYX(nC, fC, oC);
-       return wC.c.eulerYXZFromQuaternion(qC)
+       var ip;
+       return null !== (ip = Ip[pp]) && void 0 !== ip ? ip : {
+         translationKey: ""
+       }
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L599-L601` → after: `L786-L836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L786-L836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/199.js#L786-L836) · [Before (L599-L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/199.js#L599-L601)

```diff
-     qC.LERP_MODE_SCHEMA_MAPPING = {
-       linear: QC.f.Linear,
-       catmullrom: QC.f.CatmullRomSpline
+     const xp = {
+       "Wood Enchanting Table": [{
+         min: 1,
+         max: 2
+       }, {
+         min: 3,
+         max: 4
+       }, {
+         min: 5,
+         max: 6
+       }],
+       "Stone Enchanting Table": [{
+         min: 2,
+         max: 4
+       }, {
+         min: 5,
+ ... (35 more added lines; see GitHub link above)
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L606` → after: `L840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/199.js#L840) · [Before (L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/199.js#L606)

```diff
-       return [-CC[0] * PC, CC[1] * PC, CC[2] * PC]
+       return op.includes(pp)
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L610-L611` → after: `L844-L852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L844-L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/199.js#L844-L852) · [Before (L610-L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/199.js#L610-L611)

```diff
-       const [zC, ZC, QC] = CC;
-       return [zC >= 0 ? Math.PI - zC : -Math.PI - zC, AC(ZC + Math.PI), AC(QC + Math.PI)]
+       var ip;
+       return !0 === (null === pp || void 0 === pp || null === (ip = pp.customAttributes) || void 0 === ip ? void 0 : ip.cannotEnchant)
+     }
+ 
+     function Dp(pp, ip) {
+       const {
+         max: cp
+       } = xp[pp].at(-1);
+       return ip <= cp
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L615` → after: `L856-L882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L856-L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/199.js#L856-L882) · [Before (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/199.js#L615)

```diff
-       return wC.c.mod(CC + Math.PI, 2 * Math.PI) - Math.PI
+       const ip = Math.sin(pp / 80),
+         cp = pp => {
+           if (pp <= 0) return 0;
+           if (pp > 1) return 1;
+           let ip = 0;
+           const cp = [1, 7, 21, 35, 35, 21, 7, 1];
+           for (let Op = 0; Op < cp.length; Op++) {
+             ip += (Op % 2 === 0 ? 1 : -1) * cp[Op] * Math.pow(pp, 2 + Op) / (2 + Op)
+           }
+           return 72 * ip
+         },
+         Op = .3 - .78 * ip,
+         op = .5 - .78 * ip,
+         Ip = .6 - .7 * ip,
+         Sp = .8 - .6 * ip;
+       let xp = cp(Op),
+ ... (11 more added lines; see GitHub link above)
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/199.js` (Changed code · before: `L619` → after: `L886-L893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24dfR886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0cc86b6458d668e153e722c83f10c00a70965268dd350cfe6ea09c24f1dd24df) · [After (L886-L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/199.js#L886-L893) · [Before (L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/199.js#L619)

```diff
-       return Math.abs(wC.c.computeShortestRotation(CC[0], zC[0])) + Math.abs(wC.c.computeShortestRotation(CC[1], zC[1])) + Math.abs(wC.c.computeShortestRotation(CC[2], zC[2]))
+       const {
+         min: cp,
+         max: op
+       } = xp[pp][ip], Ip = Op.d.sampleUniformIntDistribution(cp, op, "includeMax");
+       return {
+         ...Ap(Ip),
+         level: Ip
+       }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/200.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/200.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L4-L6` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/200.js#L4-L7) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/200.js#L4-L6)

```diff
-   41321: (CC, zC, ZC) => {
-     ZC.r(zC), ZC.d(zC, {
-       MobPreview: () => WC
+   39283: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => xp,
+       f: () => Ip
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L8-L43` → after: `L9-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L9-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/200.js#L9-L102) · [Before (L8-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/200.js#L8-L43)

```diff
-     var QC = ZC(48),
-       wC = ZC(1002),
-       bC = ZC.n(wC),
-       nC = ZC(41330),
-       fC = ZC(34185),
-       oC = ZC(41336),
-       qC = ZC(1056);
- 
-     function FC(CC) {
-       return fC.k.openMob(CC)
-     }
-     const WC = (0, QC.memo)((function(CC) {
-       let {
-         mobType: zC,
-         variation: ZC = null,
-         animation: wC = oC.e,
- ... (20 more removed lines; see GitHub link above)
+     var Op = cp(4176);
+     let op = null;
+ 
+     function Ip(pp) {
+       return null !== op && pp === op
+     }
+ 
+     function Sp() {
+       this.YG = !1, this.stopPropagation = !1, this.WG = !1, this.disabled = !1
+     }
+     class xp {
+       constructor(pp, ip) {
+         this.version = "0.7.0";
+         var cp = Object.assign({}, new Sp, ip || {});
+         this.element = pp || document, this.YG = !!cp.YG, this.stopPropagation = !!cp.stopPropagation, this.WG = !!cp.WG, this.disabled = !!cp.disabled, this.filterEvents = (pp, ip) => !0, this.ignoreEvent = pp => !1, this.down = new Op.EventEmitter, this.up = new Op.EventEmitter … [truncated]
+           dx: 0,
+ ... (78 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L46-L54` → after: `L105-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L105-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/200.js#L105-L188) · [Before (L46-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/200.js#L46-L54)

```diff
-       const bC = (0, QC.useRef)(null),
-         {
-           width: nC,
-           height: fC
-         } = (0, wC.e)(CC);
-       (0, QC.useEffect)((() => {
-         const ZC = zC(CC.current);
-         return bC.current = ZC, () => {
-           ZC.close(), bC.current = null
+       if (!pp.ignoreEvent(cp)) try {
+         mp(pp, cp), ip && cp.isTrusted && !cp.repeat && pp._keyStates[cp.code] && Rp(pp, cp.code)
+       } finally {
+         qp(cp.code, ip, pp, cp)
+       }
+     }
+ 
+     function vp(pp, ip, cp) {
+       if (!pp.ignoreEvent(cp)) try {
+         mp(pp, cp)
+       } finally {
+         ! function(pp, ip, cp) {
+           if ("pointerId" in cp)
+             if (ip) {
+               if (null !== pp._touches.currID) return;
+               pp._touches.currID = cp.pointerId
+ ... (68 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L56-L63` → after: `L190-L240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L190-L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/200.js#L190-L240) · [Before (L56-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/200.js#L56-L63)

```diff
-       }), [CC, zC]), (0, QC.useEffect)((() => {
-         nC <= 0 || fC <= 0 || bC.current.resize(nC, fC)
-       }), [nC, fC]), (0, QC.useEffect)((() => {
-         bC.current.show(ZC)
-       }), [ZC])
-     }
-   },
-   41336: (CC, zC, ZC) => {
+       }() && (clearTimeout(pp._blurRelease), pp._blurRelease = setTimeout((function() {
+         if (!document.hasFocus())
+           for (var ip in pp._modifiersHeldThroughBlur = {}, pp._keyStates) pp._keyStates[ip] && !/^Mouse\d/.test(ip) && Rp(pp, ip)
+       }), 0))
+     }
+ 
+     function mp(pp, ip) {
+       var cp = pp._modifiersHeldThroughBlur;
+       if (cp && ip.isTrusted && document.hasFocus())
+         for (var Op in cp) delete cp[Op], pp._keyStates[Op] && Op !== ip.code && (jp(ip, Op) || Rp(pp, Op))
+     }
+ 
+     function Rp(pp, ip) {
+       const cp = {
+           code: ip,
+           preventDefault: () => {},
+ ... (35 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L69-L78` → after: `L245-L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L245-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/200.js#L245-L306) · [Before (L69-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/200.js#L69-L78)

```diff
-     var QC = ZC(37023),
-       wC = ZC(38454);
- 
-     function bC(CC, zC) {
-       let [ZC, QC, wC] = CC;
-       return [0, .5, 1].map((CC => ({
-         timeFraction: CC,
-         rotation: {
-           nb: "catmull-rom-spline",
-           point: [ZC, QC, wC + (.5 === CC ? zC : 0)]
+     var Op = cp(62),
+       op = cp(1476),
+       Ip = cp(2004),
+       Sp = cp(36828),
+       xp = cp(640),
+       Lp = cp(1049),
+       Yp = cp.n(Lp),
+       Dp = cp(1112);
+     const Ap = [Pp()];
+ 
+     function Pp() {
+       return {
+         source: null,
+         direction: null,
+         oN: null,
+         timeout: void 0,
+ ... (46 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L80-L95` → after: `L308-L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L308-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/200.js#L308-L312) · [Before (L80-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/200.js#L80-L95)

```diff
-       })))
-     }
- 
-     function nC(CC, zC, ZC) {
-       return {
-         Cb: 3200,
-         loop: !0,
-         Zb: {
-           Root: {
-             timeline: [0, .5, 1].map((CC => ({
-               timeFraction: CC,
-               position: {
-                 nb: "catmull-rom-spline",
-                 point: [0, .5 === CC ? .18 : 0, 0]
-               }
-             })))
+       }), []), (0, Dp.jsx)("div", {
+         className: "DirectionalDamage",
+         children: Ap.map(((pp, ip) => (0, Dp.jsx)("div", {
+           ref: ip => {
+             pp.oN = ip
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L97-L104` → after: `L314-L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L314-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/200.js#L314-L417) · [Before (L97-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/200.js#L97-L104)

```diff
-           HeadMesh: {
-             timeline: [0, .25, .75, 1].map((CC => ({
-               timeFraction: CC,
-               rotation: {
-                 nb: "catmull-rom-spline",
-                 point: [0, .25 === CC ? .12 : .75 === CC ? -.12 : 0, 0]
-               }
-             })))
+           className: Yp()("DamageIndicator", {
+             DamageIndicatorFullCircle: (0, xp.G)(pp.direction),
+             DamageIndicatorIdle: null === pp.source
+           })
+         }, ip)))
+       })
+     }));
+ 
+     function wp(pp) {
+       for (const ip of Ap) {
+         if (null === ip.source || (0, xp.G)(ip.direction)) continue;
+         const cp = ip.direction - pp;
+         cp !== ip.writtenAngle && (ip.writtenAngle = cp, ip.oN.style.rotate = `${cp}rad`)
+       }
+     }
+   },
+ ... (88 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L106-L110` → after: `L419-L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L419-L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/200.js#L419-L422) · [Before (L106-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/200.js#L106-L110)

```diff
-           ArmLeftMesh: {
-             timeline: bC(CC, ZC)
-           },
-           ArmRightMesh: {
-             timeline: bC(zC, -ZC)
+           release: pp.release,
+           uninstall: () => {
+             const ip = (0, Dp.g)();
+             ip && pp.uninstall(ip)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L113-L123` → after: `L425-L539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L425-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/200.js#L425-L539) · [Before (L113-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/200.js#L113-L123)

```diff
-       }
-     }
-     const fC = nC([0, 0, 0], [0, 0, 0], .07),
-       oC = (0, wC.b)((0, QC.f)(fC), "mobIdle"),
-       qC = nC([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
-       FC = nC([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
-       WC = (0, wC.b)((0, QC.f)(qC), "gunReady"),
-       NC = (0, wC.b)((0, QC.f)(FC), "gunAimed")
-   },
-   34194: (CC, zC, ZC) => {
-     ZC.d(zC, {
+       };
+     var dp = cp(40758);
+     cp(37907), cp(8869);
+     cp(8883).d;
+     const ep = () => {
+       const pp = (0, dp.d)((() => {
+           const pp = {
+             x: 0,
+             y: 0,
+             magnitude: 0,
+             headingOffset: 0,
+             jumpHeld: !1,
+             jumpPressedSinceTick: !1,
+             crouchHeld: !1,
+             running: !1,
+             sprintHeld: !1
+ ... (99 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L125-L126` → after: `L541-L546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L541-L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/200.js#L541-L546) · [Before (L125-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/200.js#L125-L126)

```diff
-       g: () => wC,
-       i: () => FC
+       f: () => wp,
+       j: () => xp,
+       n: () => Pp,
+       q: () => vp,
+       u: () => Ap,
+       w: () => Hp
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L128-L149` → after: `L548-L638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L548-L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/200.js#L548-L638) · [Before (L128-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/200.js#L128-L149)

```diff
-     var QC = ZC(1501);
- 
-     function wC(CC) {
-       var zC;
-       return {
-         ...nC.store,
-         yaw: nC.store.yaw + (null !== (zC = QC.b[CC].previewYaw) && void 0 !== zC ? zC : 0)
-       }
-     }
-     const bC = {
-         yaw: .61 * Math.PI,
-         pitch: Math.PI / 2.05,
-         radius: 30,
-         target: [0, 0, 0]
-       },
-       nC = {
- ... (6 more removed lines; see GitHub link above)
+     var Op = cp(25),
+       op = cp(34);
+     const Ip = "clientGameInventoryButtonsChanged",
+       Sp = new Map;
+ 
+     function xp() {
+       return [...Sp.values()].sort(((pp, ip) => {
+         var cp, Op;
+         return (null !== (cp = pp.order) && void 0 !== cp ? cp : 0) - (null !== (Op = ip.order) && void 0 !== Op ? Op : 0)
+       }))
+     }
+     let Lp = null;
+ 
+     function Yp(pp) {
+       Lp = pp
+     }
+ ... (75 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L151-L259` → after: `L640-L681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L640-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/200.js#L640-L681) · [Before (L151-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/200.js#L151-L259)

```diff
- 
-     function fC(CC, zC) {
-       CC instanceof Promise ? CC.then(zC).catch((CC => {
-         console.error("Couldn't open the preview", CC)
-       })) : zC(CC)
-     }
-     class oC {
-       constructor(CC) {
-         this.opened = null, this.view = null, this.size = null, this.closed = !1, fC(CC, (CC => {
-           this.closed ? CC.close() : (this.opened = CC, null !== this.size && CC.resize(this.size.width, this.size.height), null !== this.view && CC.show(this.view))
-         }))
-       }
-       show(CC) {
-         var zC;
-         this.view = CC, null === (zC = this.opened) || void 0 === zC || zC.show(CC)
-       }
- ... (93 more removed lines; see GitHub link above)
+       return Lp = cp, op.m.GA(xp, Lp, !0), () => {
+         Lp === cp && (Lp = null, yp = !1, wp(), op.m.GA(xp, null))
+       }
+     }
+     let Ap = null;
+ 
+     function Pp() {
+       return Ap
+     }
+ 
+     function Wp(pp) {
+       return Ap = pp, () => {
+         Ap === pp && (Ap = null)
+       }
+     }
+     let yp = !1;
+ ... (26 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/200.js` (Changed code · before: `L261-L289` → after: `L683-L722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43cR683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-78841c12ef2e5c18d19f16a4c227efcf7a7538571a581645e1d254fc3cf5e43c) · [After (L683-L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/200.js#L683-L722) · [Before (L261-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/200.js#L261-L289)

```diff
-     var QC = ZC(34194);
-     class wC {
-       constructor(CC) {
-         this.load = CC, this.loaded = null, this.loading = null
-       }
-       run(CC) {
-         return null !== this.loaded ? CC(this.loaded) : (this.loading ??= this.load().then((CC => (this.loaded = CC, CC)), (CC => {
-           throw this.loading = null, CC
-         })), this.loading.then(CC))
-       }
-     }
-     class bC {
-       constructor() {
-         this.mobScene = new wC((() => Promise.all([ZC.e(72), ZC.e(232), ZC.e(231), ZC.e(254), ZC.e(96), ZC.e(255), ZC.e(75), ZC.e(74), ZC.e(252), ZC.e(73), ZC.e(262), ZC.e(256), ZC.e(261), ZC.e(259), ZC.e(251), ZC.e(274), ZC.e(228), ZC.e(244), ZC.e(257), ZC.e(260), ZC.e(77), ZC.e … [truncated]
-       }
-       openMob(CC) {
- ... (13 more removed lines; see GitHub link above)
+     var Op = cp(322),
+       op = cp(25),
+       Ip = cp(36693),
+       Sp = cp(1650),
+       xp = cp(2012);
+ 
+     function Lp(pp, ip) {
+       var cp, Lp, Yp;
+       if (!op.c.get("isKeydownEnabled") || pp.repeat) return;
+       const Dp = pp.code;
+       "Escape" === pp.key ? (0, Sp.h)(pp) : null !== (cp = xp.t.OpenSettings) && void 0 !== cp && cp.includes(Dp) ? (0, Sp.q)(pp, Op.n.SETTINGS) : null !== (Lp = xp.t.OpenCharacterCustomization) && void 0 !== Lp && Lp.includes(Dp) ? (0, Ip.c)() || (0, Sp.q)(pp, Op.n.CUSTOMISATION … [truncated]
+         showDebugOverlay: !op.c.get("showDebugOverlay")
+       })
+     }
+   },
+   39169: (pp, ip, cp) => {
+ ... (24 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/201.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/201.js` (22 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8)

#### 1. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L4-L7` → after: `L4-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L4-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/201.js#L4-L29) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/201.js#L4-L7)

```diff
-   34214: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       c: () => wC,
-       g: () => bC
+   34448: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       MAX_BLOCK_ID: () => Op,
+       armourReductionOf: () => ap,
+       clipSizeOf: () => hp,
+       creativeAltNames: () => Li,
+       creativeCategoryOf: () => Vp,
+       creativeItemCategories: () => xp,
+       creativeItemCategoryIcons: () => Lp,
+       creativeItemIds: () => Kp,
+       descriptionOf: () => Tp,
+       displayNameOf: () => Np,
+       dropsNothing: () => gp,
+       enchantmentPerksOf: () => zp,
+       gunTypeOf: () => Fp,
+       harvestsNullLevelOf: () => Gp,
+ ... (10 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L9` → after: `L31-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L31-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/201.js#L31-L51) · [Before (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/201.js#L9)

```diff
-     var QC = ZC(3242);
+     const Op = 8558,
+       op = "''WL&M3GT%cM)MK$YE1aM2'I+F+O_*c^*=%'%%%%%%%K>F>%%)K=H=%%[*W5_5['[R$ZW$S%[X&NH&L5C$W$5,KS&%]]&I%^Z&NM&b7TK$Y6G,Y>%M%M7P6$WD%Vc$LZ$OY$%+Q[&;S$/G$N&W%F$W%F$S$N&G'.F$c%`'1+%)41(1(+49$(2=b$/`N,RN,K/c_&Q0EC$O(''P`&O$%-%%^R2-*)&%;NV/ZT%IT%3XM$%%%%%_U$%b73.%%`-T-%%%%%%L9$M8X7 … [truncated]
+       Ip = "S-$SW$$R&$SG2$)$'$)$4$)$X*$I6$-$%$%$cC1$WD1$%%%$]5$b7$RH4$%$%$%$%$%$%$%$%$%$)$N+$EG&$ZT%$IT%$3$XM$$%$%$%$%$%$Z1$Y[$$O`0$'$'$'$-&+&%&)&4&1&(&1*(*+&4&9&$&(&2&=&E$&'&%&%&%&1%_%$TV3$%$D.$$$Uc&$S$$S$$S$$S$$S$$S$$S$&S$&S$$S$$S$$S$$S$$S$$S$$S$$^1$S$$]I($%$M/$+$N-$%$Z$$%$I6$3 … [truncated]
+       Sp = "Crafting Table|Cauldron|Sign|Iron Nugget|Gold Nugget|Diamond Nugget|Moonstone Nugget|Iron Ingot|Gold Ingot|Draugr Knight Sword|Cooked Potato|Cooked Beef|Raw Lamb|Cooked Lamb|Gold Watermelon Stag Antlers|Bear Fur|Cave Golem Eye|Frost Golem Eye|Draugr Knight Heart|Fur B … [truncated]
+       xp = ["building", "colours", "nature", "decoration", "utility", "tools", "combat", "food", "mobs", "materials", "worldTools"],
+       Lp = {
+         building: "Stone Bricks",
+         colours: "Magenta Wool",
+         nature: "Grass Block",
+         decoration: "Lantern",
+         utility: "Workbench",
+         tools: "Iron Pickaxe",
+         combat: "Iron Sword",
+         food: "Apple",
+         mobs: "Pig Spawn Orb",
+         materials: "Iron Bar",
+ ... (5 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L11-L20` → after: `L53-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L53-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/201.js#L53-L67) · [Before (L11-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/201.js#L11-L20)

```diff
-     function wC() {
-       if ("undefined" === typeof BroadcastChannel) return null;
-       const CC = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
-       try {
-         const zC = new BroadcastChannel(QC.m);
-         zC.postMessage({
-           stored: CC
-         }), zC.close()
-       } catch {
-         return null
+     function Pp(pp) {
+       let ip = null;
+       return cp => {
+         var Op;
+         return ip ??= (0, Dp.A)(pp, 10091), null !== (Op = ip[cp]) && void 0 !== Op ? Op : 0
+       }
+     }
+ 
+     function Wp(pp, ip, cp) {
+       const Op = Pp(pp);
+       let op = null,
+         Ip = [];
+       return pp => {
+         const Sp = Op(pp);
+         if (0 !== Sp) return null === op && (op = ip.split(Dp.p), Ip = new Array(op.length)), Ip[Sp - 1] ??= cp(op[Sp - 1])
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L26-L27` → after: `L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/201.js#L76) · [Before (L26-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/201.js#L26-L27)

```diff
-       const zC = "object" === typeof CC && null !== CC ? CC.stored : null;
-       return "string" === typeof zC ? zC : null
+       return pp === Dp.f ? null : (0, Dp.C)(pp)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L29-L47` → after: `L78-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L78-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/201.js#L78-L108) · [Before (L29-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/201.js#L29-L47)

```diff
-   },
-   34210: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       e: () => nC,
-       i: () => wC,
-       k: () => bC
-     });
-     var QC = ZC(3242);
-     async function wC(CC, zC, ZC) {
-       let wC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
-       const bC = nC(await CC.getItem(QC.f, zC));
-       if (null === bC || wC()) return null;
-       const fC = await CC.getItem(QC.i, zC);
-       return wC() ? null : (await async function(CC) {
-         await Promise.all([CC.removeItem(QC.f), CC.removeItem(QC.i)])
-       }(CC).catch(ZC), {
- ... (3 more removed lines; see GitHub link above)
+     const wp = Wp("T$$#&#$T'#$F$#$$%$B#$>#$##=$$1$.)$*#$(&$)#)$N$#$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$+##$&#$$%$*/$*&$*&$*&$*&$*&$*&$*&$*&$*&$*&$*&$*&$*&$*&$*&$T$&$($$$*$(#$$1$$1$$1$$1$$1$$1$$)$$)$$)$$)$$)$*)$N2#$.($$1$$)$T$$$,#$4#$)##$V'#$)#[$$+#$#$($$'#%$&$$N)*$4#$ … [truncated]
+       vp = Wp("$J$#$&$$F&$23$$J$$$A$$c$$,^'$&H2$$'$$'$$0$*9$$R$#49$$($$&$$%$$$#,C(##$$#$&U)#$#$$($B+#2R$$1#7$%#+$6#$$)$J$O$#*-$1#M1$$a$$&'#%$&)$$4$.&$(;$*%$$$$$#$$#$,Z/$$T&$&V$$$Z-$###$%/V$O$$&2$*5#X$#$V%.$&2$&#$*&$$5$$E$#c2R1$&$$cc$c]$$$R%$*G=$]/=$2:$J5-$b*#G$$,,#%$+##$#4+#+##$+ … [truncated]
+       tp = new Map,
+       Hp = new Map;
+     let dp = -1;
+ 
+     function ep(pp, ip, cp) {
+       dp !== (0, Yp.g)() && (dp = (0, Yp.g)(), tp.clear(), Hp.clear());
+       let Op = pp.get(ip);
+       return void 0 === Op && (Op = cp(), void 0 !== Op && pp.set(ip, Op)), Op
+     }
+     const jp = Wp("_$QN+###Y$#b'#%$=%/#I'%##7%))+%[%(#%9##%)(#%9(#%?(I$%'('%%('%%('%%('%#(%%%('%%('%%('%#(%%%('%#('%%('%%('%%('%%('%#(%%#(%%#(%%%('%#(%%%(#%I%##%%)M&%A)A%A)b&%b&(Q.%)(#%)(W%%#(1%#(-%#(#%#(Q$%#(G(%/(#%1('%I%$b%%+$+&3(-$%%+$+&3(-$%%+$+&3(-$%%+$+&3(-$?&#%#$3(-$+&#%#$ … [truncated]
+       kp = Wp("J,##O$##$#%/$#%/$#%/$-%9$1%#$)%A$#%b&$1%-$[+%S%$%%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%9$M2#+%-$#%/$#%/$#%/$#%%$-&/$-%+$9%3$-%E$$b%%I%$A%#$%%=$b(&-$-&#%/$#%/$#%/$#%%$-&)%'$-%#$7%M'$E+%#$%%#$?%K)$5%#$-&#%%$#%+$#%/$#%/$#%/$#%%$-&Q$%#$-& … [truncated]
+       mp = Wp(".W]+#%#%#%#%#%#%#%#%%%#%#%#%%%#%#%#", "30|20|16|1|2|5|7|12|8|100|21|24|22|75", Number),
+       Rp = Wp("&PO+#####%####################$#%#,#%#####,%&#)#,#.#%#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1$bC$'#*#/#,#&$8'#*#/#,#&$8'#*#/#,#&$8'#*#/#,#&$1'#*# … [truncated]
+       qp = Wp(">W]+#%#)$)%9$", "none|sniper", yp),
+ ... (15 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L51-L53` → after: `L112-L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L112-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/201.js#L112-L116) · [Before (L51-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/201.js#L51-L53)

```diff
-       return (0, QC.r)() ? Promise.resolve(null) : wC(CC, !1, (CC => {
-         console.error("Error removing temporary texture pack: ", CC)
-       }), QC.r)
+       const ip = vp(pp);
+       return null !== ip ? ip : ep(Hp, pp, (() => {
+         var ip;
+         return null !== (ip = (0, Dp.D)(Np(pp))) && void 0 !== ip ? ip : void 0
+       }))
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L57-L59` → after: `L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/201.js#L120) · [Before (L57-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/201.js#L57-L59)

```diff
-       if ("object" !== typeof CC || null === CC) return null;
-       const zC = CC.metaData;
-       return "object" !== typeof zC || null === zC || "string" !== typeof zC.id ? null : CC
+       return jp(pp)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L61-L62` → after: `L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/201.js#L122) · [Before (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/201.js#L61-L62)

```diff
-   },
-   50739: (CC, zC, ZC) => {
+ 
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L64` → after: `L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/201.js#L124) · [Before (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/201.js#L64)

```diff
-       return null === CC.gameSource ? "player" : "customGame"
+       return kp(pp)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L75` → after: `L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/201.js#L128) · [Before (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/201.js#L75)

```diff
-       return "" === CC || "string" === typeof CC && wC.test(CC)
+       return mp(pp)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L79-L82` → after: `L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/201.js#L132) · [Before (L79-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/201.js#L79-L82)

```diff
-       return "object" === typeof CC && null !== CC && ("earth" === CC.type || Object.entries(CC).every((CC => {
-         let [zC, ZC] = CC;
-         return "type" === zC || bC(ZC)
-       })))
+       return Rp(pp)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L92-L110` → after: `L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/201.js#L136) · [Before (L92-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/201.js#L92-L110)

```diff
-       var zC, ZC;
-       if (CC.includes("\\") || fC.test(CC)) return !0;
-       const QC = [...CC.matchAll(oC)];
-       return QC.length !== (null !== (zC = null === (ZC = CC.match(qC)) || void 0 === ZC ? void 0 : ZC.length) && void 0 !== zC ? zC : 0) || !QC.every((CC => {
-         var zC, ZC, QC;
-         let {
-           groups: wC
-         } = CC;
-         return function(CC) {
-           try {
-             return FC.every((zC => {
-               const ZC = new URL(CC, zC);
-               return "data:" === ZC.protocol || WC.has(ZC.origin) || NC.has(ZC.href)
-             }))
-           } catch {
-             return !1
- ... (3 more removed lines; see GitHub link above)
+       return qp(pp)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L114-L117` → after: `L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/201.js#L140) · [Before (L114-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/201.js#L114-L117)

```diff
-       var zC, ZC, QC, wC, fC, oC, qC;
-       const FC = [...Object.values(null !== (zC = CC.textureOverrides) && void 0 !== zC ? zC : {}), ...Object.values(null !== (ZC = CC.modelOverrides) && void 0 !== ZC ? ZC : {})],
-         WC = [...Object.values(null !== (QC = null === (wC = CC.customCss) || void 0 === wC ? void 0 : wC.fontFaces) && void 0 !== QC ? QC : {}), ...Object.values(null !== (fC = null === (oC = CC.customCss) || void 0 === oC ? void 0 : oC.classStyles) && void 0 !== fC ? fC : {})]. … [truncated]
-       return !FC.every(bC) || !Object.values(null !== (qC = CC.skyBoxes) && void 0 !== qC ? qC : {}).every(nC) || WC.some((CC => "string" === typeof CC && MC(CC)))
+       return Mp(pp)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L120-L137` → after: `L143-L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L143-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/201.js#L143-L144) · [Before (L120-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/201.js#L120-L137)

```diff
-     function SC(CC, zC) {
-       if (null === CC || "player" === zC || !gC(CC)) return CC;
-       const ZC = {
-         ...CC
-       };
-       return CC.textureOverrides && (ZC.textureOverrides = PC(CC.textureOverrides, bC, "texture")), CC.modelOverrides && (ZC.modelOverrides = PC(CC.modelOverrides, bC, "model")), CC.skyBoxes && (ZC.skyBoxes = PC(CC.skyBoxes, nC, "sky")), CC.customCss && (ZC.customCss = function(C … [truncated]
-         const zC = CC => PC(CC, (CC => "string" === typeof CC && !MC(CC)), "CSS"),
-           {
-             fontFaces: ZC,
-             classStyles: QC
-           } = pC(CC) ? CC : {},
-           wC = {};
-         for (const [bC, nC] of Object.entries(pC(QC) ? QC : {})) wC[bC] = zC(nC);
-         return {
-           fontFaces: (Array.isArray(ZC) ? ZC : []).map(zC),
-           classStyles: wC
- ... (2 more removed lines; see GitHub link above)
+     function gp(pp) {
+       return 0 !== Ep(pp)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L141` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/201.js#L148) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/201.js#L141)

```diff
-       return "object" === typeof CC && null !== CC && !Array.isArray(CC)
+       return Xp(pp)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L144-L160` → after: `L151-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L151-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/201.js#L151-L152) · [Before (L144-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/201.js#L144-L160)

```diff
-     function PC(CC, zC, ZC) {
-       const QC = Object.entries(pC(CC) ? CC : {}),
-         wC = QC.filter((CC => {
-           let [, ZC] = CC;
-           return !zC(ZC)
-         }));
-       if (wC.length > 0) {
-         const CC = wC.map((CC => {
-           let [zC] = CC;
-           return zC
-         }));
-         console.warn(`Ignoring a custom game texture pack's ${ZC} files that name another site: ${CC.join(", ")}`)
-       }
-       return Object.fromEntries(QC.filter((CC => {
-         let [, ZC] = CC;
-         return zC(ZC)
- ... (1 more removed lines; see GitHub link above)
+     function rp(pp) {
+       return 0 !== Cp(pp)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L162-L396` → after: `L154-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L154-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/201.js#L154-L159) · [Before (L162-L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/201.js#L162-L396)

```diff
-   },
-   50746: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       b: () => gC,
-       f: () => RC,
-       g: () => GC
-     });
-     var QC = ZC(970),
-       wC = ZC(2063),
-       bC = ZC(3229),
-       nC = ZC(3242),
-       fC = ZC(34214),
-       oC = ZC(34210),
-       qC = ZC(50739),
-       FC = ZC(40820),
-       WC = ZC(40798),
- ... (219 more removed lines; see GitHub link above)
+ 
+     function Zp(pp) {
+       const ip = lp(pp);
+       if (void 0 === ip || ip.startsWith(Dp.m)) return null === ip || void 0 === ip ? void 0 : ip.slice(Dp.m.length);
+       const cp = (0, Yp.d)(pp);
+       return void 0 === cp ? void 0 : `${cp}${Dp.p}${ip}`
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L398-L410` → after: `L161-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L161-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/201.js#L161-L174) · [Before (L398-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/201.js#L398-L410)

```diff
-     async function SC(CC, zC, ZC) {
-       const QC = (0, oC.e)(await ZC.fetchPack(zC));
-       if (null !== QC) return {
-         pack: QC,
-         key: zC
-       };
-       const wC = await ZC.packKey(CC);
-       if (null === wC) return null;
-       const bC = (0, oC.e)(await ZC.fetchPack(wC));
-       if (null === bC) throw new Error(`no texture pack at ${wC}`);
-       return {
-         pack: bC,
-         key: wC
+ 
+     function zp(pp) {
+       var ip;
+       return null !== (ip = Qp(pp)) && void 0 !== ip ? ip : Ap
+     }
+     let sp = null;
+ 
+     function Kp() {
+       if (null === sp) {
+         const pp = [],
+           ip = new Dp.s(op);
+         let cp = 0;
+         for (; !ip.done;) cp += (0, Dp.K)(ip.next()), pp.push(cp);
+         sp = Object.freeze(pp)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L415` → after: `L180-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L180-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/201.js#L180-L185) · [Before (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/201.js#L415)

```diff
-       return null === CC || CC.metaData.id === wC.c
+       return Jp(pp)
+     }
+ 
+     function ii(pp, ip) {
+       var cp;
+       return 0 !== ((null !== (cp = Bp(pp)) && void 0 !== cp ? cp : 0) & ip)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L419-L420` → after: `L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/201.js#L189) · [Before (L419-L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/201.js#L419-L420)

```diff
-       const zC = (0, oC.e)(CC);
-       return pC(zC) ? null : zC
+       return ii(pp, Dp.b.OnlyInSearch)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L422-L428` → after: `L191-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L191-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/201.js#L191-L193) · [Before (L422-L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/201.js#L422-L428)

```diff
-     async function GC(CC) {
-       let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bC.d;
-       if (null === CC.pack) return null;
-       const {
-         packAssets: QC
-       } = await Promise.all([ZC.e(203), ZC.e(44)]).then((() => ZC(61135)));
-       return QC(CC, zC)
+ 
+     function Oi(pp) {
+       return ii(pp, Dp.b.OnlyInCategory)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/201.js` (Changed code · before: `L432-L437` → after: `L197-L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8R197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c3b44b83efe17e1f55a6dd50c2d62f55a57aadb51b6e018c596d2d02f43548a8) · [After (L197-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/201.js#L197-L225) · [Before (L432-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/201.js#L432-L437)

```diff
-       const zC = (0, nC.t)();
-       return null === zC ? () => {} : (zC.onmessage = zC => {
-         CC.readPlayerPack((0, fC.g)(zC.data))
-       }, () => {
-         zC.close()
-       })
+       return ii(pp, Dp.b.DevOnly)
+     }
+ 
+     function Ii(pp) {
+       return !ii(pp, Dp.b.HiddenByDefault) && void 0
+     }
+ 
+     function Si(pp, ip, cp, Op) {
+       var op;
+       const Ip = null !== (op = Bp(pp)) && void 0 !== op ? op : 0;
+       return 0 !== (Ip & Dp.b.DisabledInPublicLobbies) && ip || 0 !== (Ip & Dp.b.DisabledInProduction) && !0 || !cp || !Op && 0 !== (Ip & Dp.b.DevOnly)
+     }
+     let xi = null;
+ 
+     function Li() {
+       if (null === xi) {
+ ... (13 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/202.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/202.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783)

#### 1. `bundles/preprod.bloxd.io/chunks/js/202.js` (Changed code · before: `L4-L36` → after: `L4-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783) · [After (L4-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/202.js#L4-L76) · [Before (L4-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/202.js#L4-L36)

```diff
-   34221: (CC, zC, ZC) => {
-     ZC.r(zC), ZC.d(zC, {
-       packDisplayName: () => gC,
-       packModelMessage: () => SC,
-       packModelSummary: () => PC,
-       refusedPackModels: () => pC
-     });
-     var QC = ZC(34223),
-       wC = ZC(34228);
-     const bC = "DRACO",
-       nC = 0,
-       fC = 1,
-       oC = 0,
-       qC = 1,
-       FC = 32768;
- 
- ... (17 more removed lines; see GitHub link above)
+   41773: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Ip
+     });
+     var Op = cp(62),
+       op = cp(2835);
+ 
+     function Ip(pp, ip, cp) {
+       const Ip = (0, Op.useRef)(null),
+         {
+           width: Sp,
+           height: xp
+         } = (0, op.d)(pp);
+       (0, Op.useEffect)((() => {
+         const cp = ip(pp.current);
+         return Ip.current = cp, () => {
+ ... (57 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/202.js` (Changed code · before: `L38-L116` → after: `L78-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783R78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783) · [After (L78-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/202.js#L78-L97) · [Before (L38-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/202.js#L38-L116)

```diff
-           throw new RangeError("varint too long")
-         };
-       try {
-         for (let CC = 0; CC < bC.length; CC++)
-           if (QC() !== bC.charCodeAt(CC)) return null;
-         const zC = QC(),
-           NC = QC(),
-           MC = QC(),
-           gC = QC(),
-           SC = QC() | QC() << 8;
-         if (2 !== zC) return null;
-         0 !== (SC & FC) && function(CC, zC, ZC) {
-           const QC = () => {
-               zC(ZC())
-             },
-             wC = () => {
- ... (63 more removed lines; see GitHub link above)
+         }
+       }
+     }
+     const xp = Sp([0, 0, 0], [0, 0, 0], .07),
+       Lp = (0, op.b)((0, Op.d)(xp), "mobIdle"),
+       Yp = Sp([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
+       Dp = Sp([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
+       Ap = (0, op.b)((0, Op.d)(Yp), "gunReady"),
+       Pp = (0, op.b)((0, Op.d)(Dp), "gunAimed")
+   },
+   38856: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => op,
+       c: () => Ip
+     });
+     const Op = new WeakMap;
+ ... (4 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/202.js` (Changed code · before: `L120-L127` → after: `L101-L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783) · [After (L101-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/202.js#L101-L288) · [Before (L120-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/202.js#L120-L127)

```diff
-       return null !== (zC = CC.name) && void 0 !== zC ? zC : CC.fromFolderName || CC.id
-     }
- 
-     function SC(CC, zC, ZC) {
-       return `Texture pack "${CC}": model "${zC}" was not loaded because it ${ZC}. The default model is used instead.`
-     }
- 
-     function pC(CC, zC, ZC) {
+       return null !== (ip = Op.get(pp)) && void 0 !== ip ? ip : null
+     }
+   },
+   34466: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Sp,
+       e: () => op,
+       i: () => Dp
+     });
+     var Op = cp(1579);
+ 
+     function op(pp) {
+       var ip;
+       return {
+         ...Sp.store,
+         yaw: Sp.store.yaw + (null !== (ip = Op.b[pp].previewYaw) && void 0 !== ip ? ip : 0)
+ ... (172 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/202.js` (Changed code · before: `L129-L141` → after: `L290-L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783R290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783) · [After (L290-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/202.js#L290-L304) · [Before (L129-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/202.js#L129-L141)

```diff
-         strictDraco: bC = !1
-       } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
-       const nC = {};
-       for (const [fC, oC] of Object.entries(zC)) {
-         let zC;
-         if (oC.startsWith("data:")) try {
-           const CC = new Uint8Array((0, wC.s)(oC));
-           if (zC = (0, QC.d)(CC), null === zC) {
-             const {
-               json: ZC,
-               bin: QC
-             } = (0, wC.x)(CC);
-             zC = NC(ZC, QC, bC)
+         players: ip,
+         className: cp
+       } = pp;
+       const op = (0, Op.useRef)(null),
+         Sp = (0, Op.useMemo)((() => ip.map((pp => {
+           let {
+             cosmetics: ip,
+             size: cp,
+             heldGun: Op
+           } = pp;
+           return {
+             cosmetics: ip,
+             size: cp,
+             qm: Op.name,
+             animation: Op.aimed ? xp.b : xp.e
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/202.js` (Changed code · before: `L143-L157` → after: `L306-L332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783R306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5731d0cd5279a118320f73d9ab46854f51725f86b2881ce2985421aebf523783) · [After (L306-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/202.js#L306-L332) · [Before (L143-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/202.js#L143-L157)

```diff
-         } catch {
-           zC = "is not a binary glTF 2.0 file"
-         } else zC = "loads data from outside the file";
-         zC && (nC[fC] = zC, ZC && console.warn(SC(CC, fC, zC)))
-       }
-       return nC
-     }
- 
-     function PC(CC, zC) {
-       const ZC = Object.keys(zC);
-       if (0 === ZC.length) return null;
-       if (1 === ZC.length) return SC(CC, ZC[0], zC[ZC[0]]);
-       const QC = ZC.map((CC => `"${CC}" ${zC[CC]}`)).join("; ");
-       return `Texture pack "${CC}": ${ZC.length} models were not loaded (${QC}). The default models are used instead.`
-     }
+         }))), [ip]),
+         Ap = function(pp) {
+           const [ip, cp] = (0, Op.useState)([]);
+           return (0, Op.useEffect)((() => {
+             cp(pp.map((() => !1)));
+             const ip = pp.map(((pp, ip) => {
+               let {
+                 showAfterMs: Op
+               } = pp;
+               return window.setTimeout((() => {
+                 cp((pp => pp.map(((pp, cp) => pp || cp === ip))))
+               }), Op)
+             }));
+             return () => {
+               for (const pp of ip) window.clearTimeout(pp)
+             }
+ ... (11 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/203.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/203.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e)

#### 1. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L4-L10` → after: `L4-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L4-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/203.js#L4-L136) · [Before (L4-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/203.js#L4-L10)

```diff
-   34223: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       d: () => mC,
-       f: () => dC,
-       j: () => YC
-     });
-     var QC = ZC(34228);
+   41768: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       MobPreview: () => Ap
+     });
+     var Op = cp(62),
+       op = cp(1049),
+       Ip = cp.n(op),
+       Sp = cp(41773),
+       xp = cp(34462),
+       Lp = cp(41776),
+       Yp = cp(1112);
+ 
+     function Dp(pp) {
+       return xp.j.openMob(pp)
+     }
+     const Ap = (0, Op.memo)((function(pp) {
+ ... (117 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L12-L21` → after: `L138-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L138-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/203.js#L138-L141) · [Before (L12-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/203.js#L12-L21)

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
+         yaw: .61 * Math.PI,
+         pitch: Math.PI / 2.05,
+         radius: 30,
+         target: [0, 0, 0]
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L24-L75` → after: `L144-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L144-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/203.js#L144-L150) · [Before (L24-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/203.js#L24-L75)

```diff
-         items: 1024,
-         perFile: 1024,
-         surfaces: 256,
-         few: 64,
-         bounds: 16,
-         attributeMembers: 32
-       },
-       nC = 1048576,
-       fC = "is not a binary glTF 2.0 file",
-       oC = "loads data from outside the file",
-       qC = new Set(["KHR_draco_mesh_compression", "KHR_materials_unlit", "KHR_texture_transform", "KHR_materials_specular", "KHR_materials_ior", "KHR_materials_anisotropy"]),
-       FC = {
-         POSITION: "VEC3",
-         NORMAL: "VEC3",
-         TEXCOORD_0: "VEC2",
-         COLOR_0: "VEC4"
- ... (36 more removed lines; see GitHub link above)
+         player: Ip,
+         store: {
+           ...Ip,
+           radius: 33,
+           target: [0, 3.9, 0]
+         }
+       };
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L78-L412` → after: `L153-L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L153-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/203.js#L153-L157) · [Before (L78-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/203.js#L78-L412)

```diff
-       return Number.isInteger(CC) && CC >= 0 && CC < (null !== zC && void 0 !== zC ? zC : 0)
-     }
- 
-     function RC(CC) {
-       return Number.isInteger(CC) && CC >= 0
-     }
- 
-     function AC(CC, zC) {
-       return void 0 !== CC && (!Array.isArray(CC) || CC.length > zC)
-     }
- 
-     function xC(CC, zC) {
-       return "object" === typeof CC && null !== CC && Object.keys(CC).length > zC
-     }
- 
-     function JC(CC) {
- ... (319 more removed lines; see GitHub link above)
+       pp instanceof Promise ? pp.then(ip).catch((pp => {
+         console.error("Couldn't open the preview", pp)
+       })) : ip(pp)
+     }
+     class Lp {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L414-L417` → after: `L159-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L159-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/203.js#L159-L179) · [Before (L414-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/203.js#L414-L417)

```diff
-         super(`GLB refused: it ${CC}`), this.reason = CC, this.name = "GlbRefused"
-       }
-     }
-     class bC extends Error {
+         this.opened = null, this.view = null, this.size = null, this.closed = !1, xp(pp, (pp => {
+           this.closed ? pp.close() : (this.opened = pp, null !== this.size && pp.resize(this.size.width, this.size.height), null !== this.view && pp.show(this.view))
+         }))
+       }
+       show(pp) {
+         var ip;
+         this.view = pp, null === (ip = this.opened) || void 0 === ip || ip.show(pp)
+       }
+       resize(pp, ip) {
+         var cp;
+         this.size = {
+           width: pp,
+           height: ip
+         }, null === (cp = this.opened) || void 0 === cp || cp.resize(pp, ip)
+       }
+       close() {
+ ... (5 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L419-L552` → after: `L181-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L181-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/203.js#L181-L182) · [Before (L419-L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/203.js#L419-L552)

```diff
-         super(CC), this.name = "GlbError"
-       }
-     }
- 
-     function nC(CC) {
-       return Reflect.get(CC, "scene")
-     }
-     const fC = 5130562,
-       oC = "is not a binary glTF 2.0 file";
- 
-     function qC(CC) {
-       var zC;
-       const ZC = CC instanceof Uint8Array ? CC : new Uint8Array(CC),
-         bC = (0, QC.f)(ZC);
-       if (null === bC) throw new wC(oC);
-       const nC = bC.json,
- ... (118 more removed lines; see GitHub link above)
+         this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(pp).then((pp => pp.ready)), xp(pp, (pp => {
+           this.closed ? pp.close() : (this.opened = pp, null !== this.size && pp.resize(this.size.width, this.size.height))
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/203.js` (Changed code · before: `L554-L555` → after: `L184-L289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2eR184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3f8f43959d9421cb44a0c6617f59868ecc628523ac50f1f3c0a5f4ed6db52a2e) · [After (L184-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/203.js#L184-L289) · [Before (L554-L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/203.js#L554-L555)

```diff
-       }))
-     }
+       }
+       get dev() {
+         return this.opened.dev
+       }
+       isReady() {
+         var pp, ip;
+         return null !== (pp = null === (ip = this.opened) || void 0 === ip ? void 0 : ip.isReady()) && void 0 !== pp && pp
+       }
+       setCosmetic(pp, ip) {
+         var cp;
+         null === (cp = this.opened) || void 0 === cp || cp.setCosmetic(pp, ip)
+       }
+       playEmote(pp) {
+         var ip;
+         null === (ip = this.opened) || void 0 === ip || ip.playEmote(pp)
+       }
+ ... (90 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/204.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/204.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca)

#### 1. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L4-L15` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/204.js#L4-L7) · [Before (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/204.js#L4-L15)

```diff
-   34243: (CC, zC, ZC) => {
-     ZC.r(zC), ZC.d(zC, {
-       animatedBlockTextures: () => oC,
-       armourAtlasUrl: () => nC,
-       averageColors: () => qC,
-       blockAtlasUrls: () => bC,
-       blockAtlasWidth: () => QC,
-       buildHash: () => WC,
-       builtTextureIndexFingerprint: () => FC,
-       imagesPerAtlas: () => wC,
-       outputHash: () => NC,
-       rotatedBlockTextures: () => fC
+   34482: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => op,
+       f: () => Ip
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/204.js` (Changed code · before: `L17-L10900` → after: `L9-L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022caR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c2923ddb29ca1acc2f9bd5162cb1b39d71d6a3d9c5adedb4333096e3460022ca) · [After (L9-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/204.js#L9-L438) · [Before (L17-L10900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/204.js#L17-L10900)

```diff
-     const QC = 8,
-       wC = [256, 256, 256, 256, 256, 256, 114],
-       bC = [ZC(34249), ZC(34256), ZC(34262), ZC(34271), ZC(34273), ZC(34282), ZC(34285)],
-       nC = ZC(34290),
-       fC = {
-         "alloy_kiln_top[rot[1": ZC(34294),
-         "alloy_kiln_top[rot[2": ZC(34296),
-         "alloy_kiln_top[rot[3": ZC(34303),
-         "alloy_kiln_top[rot[4": ZC(34312),
-         "auto_bench_top[rot[1": ZC(34314),
-         "auto_bench_top[rot[2": ZC(34318),
-         "auto_bench_top[rot[3": ZC(34323),
-         "auto_bench_top[rot[4": ZC(34326),
-         "belt_tunnel_exit_top[rot[1": ZC(34334),
-         "belt_tunnel_exit_top[rot[2": ZC(34339),
-         "belt_tunnel_exit_top[rot[3": ZC(34342),
- ... (10868 more removed lines; see GitHub link above)
+     var Op = cp(3352);
+ 
+     function op() {
+       if ("undefined" === typeof BroadcastChannel) return null;
+       const pp = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
+       try {
+         const ip = new BroadcastChannel(Op.j);
+         ip.postMessage({
+           stored: pp
+         }), ip.close()
+       } catch {
+         return null
+       }
+       return pp
+     }
+ 
+ ... (414 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/205.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/205.js` (21 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530)

#### 1. `bundles/preprod.bloxd.io/chunks/js/205.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/205.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/205.js#L4)

```diff
-   41295: (CC, zC, ZC) => {
+   34484: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/205.js` (Changed code · before: `L6-L7` → after: `L6-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530) · [After (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/205.js#L6-L9) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/205.js#L6-L7)

```diff
-       loadGlbAsset: () => Rz,
-       loadGlbTree: () => Gz
+       packDisplayName: () => yp,
+       packModelMessage: () => Up,
+       packModelSummary: () => vp,
+       refusedPackModels: () => wp
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/205.js` (Changed code · before: `L9-L63` → after: `L11-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530) · [After (L11-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/205.js#L11-L18) · [Before (L9-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/205.js#L9-L63)

```diff
-     var QC = ZC(37731),
-       wC = ZC(41298),
-       bC = ZC(36162),
-       nC = ZC.n(bC);
- 
-     function fC() {
-       return nC()('(()=>{class CC extends Error{}function zC(zC,ZC){const QC=zC._malloc(ZC);if(0===QC)throw new CC(`Draco: the decoder\'s heap refused ${ZC} bytes`);return QC}function ZC(CC){return{[CC.DT_FLOAT32]:[Float32Array,5126],[CC.DT_INT8]:[Int8Array,5120],[CC.DT_INT16]:[I … [truncated]
-     }
-     var oC = ZC(77);
-     const qC = 1e3;
-     let FC = null,
-       WC = null;
-     const NC = [],
-       MC = [];
-     let gC = 0;
-     const SC = {
- ... (39 more removed lines; see GitHub link above)
+     var Op = cp(34493),
+       op = cp(34496);
+     const Ip = "DRACO",
+       Sp = 0,
+       xp = 1,
+       Lp = 0,
+       Yp = 1,
+       Dp = 32768;
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/205.js` (Changed code · before: `L66-L92` → after: `L21-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530) · [After (L21-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/205.js#L21-L36) · [Before (L66-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/205.js#L66-L92)

```diff
-       const zC = NC.indexOf(CC); - 1 !== zC && NC.splice(zC, 1);
-       const ZC = MC.shift();
-       ZC && AC(ZC)
-     }
- 
-     function RC(CC, zC) {
-       CC.busy = !0, CC.releaseTimer && (clearTimeout(CC.releaseTimer), CC.releaseTimer = null);
-       CC.worker.then((ZC => {
-         const QC = gC++;
-         ZC.onmessage = wC => {
-           let {
-             data: bC
-           } = wC;
-           if (("decoded" === bC.id || "decodeError" === bC.id) && bC.seq === QC) {
-             if (ZC.onmessage = null, ZC.onerror = null, "decoded" === bC.id) return SC.decodes++, zC.resolve({
-               indices: bC.indices,
- ... (11 more removed lines; see GitHub link above)
+       const ip = new DataView(pp.buffer, pp.byteOffset, pp.byteLength);
+       let cp = 0;
+       const Op = () => {
+           if (cp >= pp.byteLength) throw new RangeError("past the stream");
+           return pp[cp++]
+         },
+         op = () => {
+           if (cp + 4 > pp.byteLength) throw new RangeError("past the stream");
+           const Op = ip.getUint32(cp, !0);
+           return cp += 4, Op
+         },
+         Ap = () => {
+           let pp = 0;
+           for (let ip = 0; ip < 35; ip += 7) {
+             const cp = Op();
+             if (pp += (127 & cp) * 2 ** ip, 0 === (128 & cp)) return pp
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/205.js` (Changed code · before: `L94-L102` → after: `L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530) · [After (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/205.js#L38) · [Before (L94-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/205.js#L94-L102)

```diff
-         }, ZC.onerror = QC => {
-           ZC.onmessage = null, ZC.onerror = null, ZC.terminate(), zC.reject(new Error(`Draco: the decode worker failed: ${QC.message}`)), GC(CC)
-         };
-         const wC = {
-           id: "decode",
-           seq: QC,
-           data: zC.data,
-           attributeIds: zC.attributeIds,
-           expected: zC.expected
+           throw new RangeError("varint too long")
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/205.js` (Changed code · before: `L158-L173` → after: `L41-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530) · [After (L41-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/205.js#L41-L51) · [Before (L158-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/205.js#L158-L173)

```diff
-         return function(CC, zC) {
-           var ZC, QC, wC, bC, nC, fC, oC, qC, FC, WC, NC, MC, gC, SC, pC;
-           const PC = new Map,
-             GC = ZC => {
-               let QC = PC.get(ZC);
-               if (!QC) {
-                 var wC;
-                 const bC = CC.bufferViews[ZC],
-                   nC = null !== (wC = bC.byteOffset) && void 0 !== wC ? wC : 0;
-                 QC = {
-                   index: ZC,
-                   bytes: zC.subarray(nC, nC + bC.byteLength),
-                   byteStride: bC.byteStride
-                 }, PC.set(ZC, QC)
-               }
-               return QC
+         for (let pp = 0; pp < Ip.length; pp++)
+           if (Op() !== Ip.charCodeAt(pp)) return null;
+         const ip = Op(),
+           Pp = Op(),
+           Wp = Op(),
+           yp = Op(),
+           Up = Op() | Op() << 8;
+         if (2 !== ip) return null;
+         0 !== (Up & Dp) && function(pp, ip, cp) {
+           const Op = () => {
+               ip(cp())
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/205.js` (Changed code · before: `L175-L192` → after: `L53-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530) · [After (L53-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/205.js#L53-L60) · [Before (L175-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/205.js#L175-L192)

```diff
-             RC = new Map,
-             AC = zC => {
-               let ZC = RC.get(zC);
-               if (!ZC) {
-                 var QC;
-                 const wC = CC.accessors[zC];
-                 ZC = {
-                   index: zC,
-                   count: wC.count,
-                   type: wC.type,
-                   numComponents: iC.q[wC.type],
-                   componentType: wC.componentType,
-                   normalized: null !== (QC = wC.normalized) && void 0 !== QC && QC,
-                   byteOffset: wC.byteOffset,
-                   bufferView: void 0 === wC.bufferView ? null : GC(wC.bufferView),
-                   min: wC.min,
- ... (2 more removed lines; see GitHub link above)
+             op = () => {
+               let cp = 1,
+                 op = !0;
+               for (; cp > 0;) {
+                 cp--, op || Op(), op = !1;
+                 const Ip = pp();
+                 for (let cp = 0; cp < Ip; cp++) Op(), ip(pp());
+                 cp += pp()
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/205.js` (Changed code · before: `L196-L400` → after: `L63-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530) · [After (L63-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/205.js#L63-L76) · [Before (L196-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/205.js#L196-L400)

```diff
-             xC = null !== (ZC = null === (QC = CC.extensionsUsed) || void 0 === QC ? void 0 : QC.includes("KHR_draco_mesh_compression")) && void 0 !== ZC && ZC,
-             JC = (null !== (wC = CC.meshes) && void 0 !== wC ? wC : []).map(((zC, ZC) => {
-               const QC = zC.primitives.map(((zC, ZC) => {
-                 var QC, wC, bC;
-                 const nC = xC ? null === (QC = zC.extensions) || void 0 === QC ? void 0 : QC.KHR_draco_mesh_compression : void 0;
-                 let fC = null;
-                 const oC = [];
-                 if (nC) {
-                   const ZC = {
-                     vertices: CC.accessors[zC.attributes.POSITION].count,
-                     indices: void 0 === zC.indices ? 0 : CC.accessors[zC.indices].count,
-                     components: {}
-                   };
-                   fC = {
-                     bufferView: GC(nC.bufferView),
-                     attributeIds: {},
- ... (189 more removed lines; see GitHub link above)
+             Ip = pp();
+           for (let Sp = 0; Sp < Ip; Sp++) pp(), op();
+           op()
+         }(Ap, (ip => {
+           if (cp + ip > pp.byteLength) throw new RangeError("past the stream");
+           cp += ip
+         }), Op);
+         const wp = Pp < 2 ? op : Ap;
+         if (Wp === Sp) return {
+           faces: 0,
+           vertices: op()
+         };
+         if (Wp !== xp) return null;
+         if (yp === Lp) {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/205.js` (Changed code · before: `L402-L408` → after: `L78-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530R78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530) · [After (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/205.js#L78-L79) · [Before (L402-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/205.js#L402-L408)

```diff
-             kind: QC,
-             data: bC.bytes,
-             offset: null !== (ZC = wC.byteOffset) && void 0 !== ZC ? ZC : 0,
-             stride: fC,
-             components: nC,
-             glType: wC.componentType,
-             isNormalized: wC.normalized
+             faces: wp(),
+             vertices: wp()
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/205.js` (Changed code · before: `L410-L427` → after: `L81-L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530) · [After (L81-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/205.js#L81-L84) · [Before (L410-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/205.js#L410-L427)

```diff
-         })),
-         ZC = CC.indices,
-         QC = ZC && dC(ZC, mC),
-         wC = CC.position;
-       return new IC.f(zC, QC, wC.count, ...HC(wC, zC))
-     }
-     const lC = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array];
- 
-     function XC(CC, zC) {
-       const ZC = zC.attributes.map((CC => {
-         let {
-           kind: zC,
-           data: ZC,
-           size: QC,
-           byteOffset: wC,
-           byteStride: bC,
- ... (2 more removed lines; see GitHub link above)
+         }
+         if (yp !== Yp) return null;
+         Op(), Pp < 2 && Ap();
+         const vp = Ap();
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/205.js` (Changed code · before: `L429-L435` → after: `L86-L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530) · [After (L86-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/205.js#L86-L87) · [Before (L429-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/205.js#L429-L435)

```diff
-           kind: zC,
-           data: ZC,
-           offset: wC,
-           stride: bC,
-           components: QC,
-           glType: 5120 + lC.indexOf(ZC.constructor),
-           isNormalized: nC
+           faces: Ap(),
+           vertices: vp
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/205.js` (Changed code · before: `L437-L499` → after: `L89-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530) · [After (L89-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/205.js#L89-L90) · [Before (L437-L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/205.js#L437-L499)

```diff
-       }));
-       return new IC.f(ZC, zC.indices, zC.totalVertices, ...HC(CC.position, ZC))
-     }
- 
-     function cC(CC) {
-       const zC = CC.lastIndexOf("/");
-       return zC < 0 ? CC : CC.substring(zC + 1)
-     }
- 
-     function uC(CC) {
-       const zC = CC.lastIndexOf("/");
-       return zC < 0 ? "" : CC.substring(0, zC + 1)
-     }
- 
-     function rC(CC) {
-       return CC.name || `node${CC.index}`
- ... (47 more removed lines; see GitHub link above)
+       } catch {
+         return null
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/205.js` (Changed code · before: `L503-L592` → after: `L94-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530R94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530) · [After (L94-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/205.js#L94-L97) · [Before (L503-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/205.js#L503-L592)

```diff
-     function UC(CC, zC) {
-       let {
-         translation: ZC,
-         rotation: QC,
-         scale: wC
-       } = CC;
-       const bC = new Float32Array(16);
-       return (0, JC.b)(wC, 0, QC, 0, ZC, 0, bC), zC && (0, JC.o)(bC, zC, 0, bC), bC
-     }
-     class BC {
-       constructor(CC, zC, ZC, QC) {
-         this.model = CC, this.decode = zC, this.fileInfo = ZC, this.uniqueRootUrl = QC, this.primitives = void 0, this.parents = new Map, this.uses = new Map, this.own = new Map;
-         const wC = new Set,
-           bC = (zC, ZC) => {
-             const QC = CC.nodes[zC];
-             if (this.parents.has(QC)) throw new iC.l(`/nodes/${zC}: Invalid recursive node hierarchy`);
- ... (74 more removed lines; see GitHub link above)
+     function Pp(pp, ip, cp) {
+       var Op, op;
+       if (null === (Op = null === (op = pp.extensionsUsed) || void 0 === op ? void 0 : op.includes("KHR_draco_mesh_compression")) || void 0 === Op || !Op) return null;
+       for (const yp of null !== (Ip = pp.meshes) && void 0 !== Ip ? Ip : []) {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/205.js` (Changed code · before: `L594-L637` → after: `L99-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530) · [After (L99-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/205.js#L99-L111) · [Before (L594-L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/205.js#L594-L637)

```diff
-         let {
-           texture: QC,
-           transform: wC
-         } = CC;
-         const {
-           sampler: bC,
-           image: nC
-         } = this.model.textures[QC], {
-           bufferView: fC,
-           mimeType: oC,
-           name: qC
-         } = this.model.images[nC], FC = wC && {
-           ...wC.offset ? {
-             uOffset: wC.offset[0],
-             vOffset: wC.offset[1]
-           } : {},
- ... (28 more removed lines; see GitHub link above)
+         for (const Op of yp.primitives) {
+           var Sp, xp, Lp, Yp, Dp, Pp;
+           const op = null === (Sp = Op.extensions) || void 0 === Sp ? void 0 : Sp.KHR_draco_mesh_compression;
+           if ("object" !== typeof op || null === op) continue;
+           const Ip = null === (xp = pp.bufferViews) || void 0 === xp ? void 0 : xp[op.bufferView];
+           if (null === ip || void 0 === Ip) return Wp;
+           const yp = null !== (Lp = Ip.byteOffset) && void 0 !== Lp ? Lp : 0,
+             Up = Ap(ip.subarray(yp, yp + Ip.byteLength));
+           if (null === Up && !cp) continue;
+           const wp = null !== (Yp = pp.accessors) && void 0 !== Yp ? Yp : [],
+             vp = null === (Dp = wp[Op.attributes.POSITION]) || void 0 === Dp ? void 0 : Dp.count,
+             tp = void 0 === Op.indices ? 0 : null === (Pp = wp[Op.indices]) || void 0 === Pp ? void 0 : Pp.count;
+           if (null === Up || void 0 === vp || void 0 === tp || 3 * Up.faces !== tp || Up.vertices > vp) return Wp
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/205.js` (Changed code · before: `L641-L695` → after: `L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530R116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530) · [After (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/205.js#L116) · [Before (L641-L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/205.js#L641-L695)

```diff
-     async function OC(CC, zC, ZC, QC, wC, bC) {
-       let nC = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
-       const fC = function(CC, zC, ZC) {
-           return "string" !== typeof zC ? {
-             url: "",
-             rootUrl: CC,
-             name: ZC()
-           } : zC ? zC.startsWith("data:") ? {
-             url: zC,
-             rootUrl: CC,
-             name: ""
-           } : CC ? {
-             url: CC + zC,
-             rootUrl: CC,
-             name: zC
-           } : {
- ... (39 more removed lines; see GitHub link above)
+     const Wp = "has a Draco stream whose counts don't match its accessors";
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/205.js` (Changed code · before: `L698-L796` → after: `L119-L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530R119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530) · [After (L119-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/205.js#L119-L120) · [Before (L698-L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/205.js#L698-L796)

```diff
-       (0, VC.d)(CC) || (CC.geometry && CC.geometry.useBoundingInfoFromGeometry ? CC._updateBoundingInfo() : CC.refreshBoundingInfo(!0, !0))
-     }
-     class Qz {
-       constructor(CC, zC) {
-         this.sS = CC, this.decode = zC, this.bufferData = Promise.resolve(), this.viewData = new Map, this.viewBuffers = new Map, this.vertexBuffers = new Map, this.dracoGeometry = new Map
-       }
-       viewBytes(CC) {
-         let zC = this.viewData.get(CC.index);
-         return zC || (zC = this.bufferData.then((() => CC.bytes)), this.viewData.set(CC.index, zC)), zC
-       }
-       viewBuffer(CC) {
-         let zC = this.viewBuffers.get(CC.index);
-         return zC || (zC = this.viewBytes(CC).then((CC => new((0, kC.b)().gg)(this.sS.mg(), CC, !1))), this.viewBuffers.set(CC.index, zC)), zC
-       }
-       vertexBuffer(CC, zC) {
-         const {
- ... (83 more removed lines; see GitHub link above)
+       var ip;
+       return null !== (ip = pp.name) && void 0 !== ip ? ip : pp.fromFolderName || pp.id
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/205.js` (Changed code · before: `L799-L803` → after: `L123-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530) · [After (L123-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/205.js#L123-L124) · [Before (L799-L803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/205.js#L799-L803)

```diff
-     function Mz(CC, zC) {
-       if (zC && Object.keys(zC).length > 0) {
-         const ZC = CC.metadata = CC.metadata || {};
-         (ZC.Wm = ZC.Wm || {}).extras = zC
-       }
+     function Up(pp, ip, cp) {
+       return `Texture pack "${pp}": model "${ip}" was not loaded because it ${cp}. The default model is used instead.`
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/205.js` (Changed code · before: `L806-L868` → after: `L127-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530R127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530) · [After (L127-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/205.js#L127-L132) · [Before (L806-L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/205.js#L806-L868)

```diff
-     function gz(CC, zC) {
-       zC.position = CC.translation ? nz.Eg.FromArray(CC.translation) : nz.Eg.Zero(), zC.rotationQuaternion = CC.rotation ? nz.Quaternion.FromArray(CC.rotation) : nz.Quaternion.Identity(), zC.sq = CC.scale ? nz.Eg.FromArray(CC.scale) : nz.Eg.One()
-     }
-     class Sz {
-       constructor(CC, zC) {
-         if (this.sS = CC, this.meshes = [], this.transformNodes = [], this.geometries = [], this.materials = [], this.textures = [], this.rootNodes = [], this.release = null, zC) {
-           const zC = CC.mg(),
-             ZC = CC.Tm.add((() => {
-               this.dispose()
-             })),
-             QC = zC.Yg.add((() => {
-               for (const CC of [...this.geometries, ...this.meshes, ...this.textures]) CC._rebuild()
-             }));
-           this.release = () => {
-             CC.Tm.remove(ZC), zC.Yg.remove(QC)
-           }
- ... (47 more removed lines; see GitHub link above)
+     function wp(pp, ip, cp) {
+       let {
+         strictDraco: Ip = !1
+       } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
+       const Sp = {};
+       for (const [xp, Lp] of Object.entries(ip)) {
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/205.js` (Changed code · before: `L870-L931` → after: `L134-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530) · [After (L134-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/205.js#L134-L141) · [Before (L870-L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/205.js#L870-L931)

```diff
-         zC && (zC.blockMaterialDirtyMechanism = !0);
-         try {
-           QC = this.loadScene()
-         } finally {
-           null === zC || void 0 === zC || zC._forceBlockMaterialDirtyMechanism(ZC)
-         }
-         await QC;
-         const {
-           root: wC,
-           tree: bC
-         } = this;
-         wC && (wC.IK(!0), bC.meshes.push(wC), bC.rootNodes.push(wC));
-         for (const fC of this.asset.model.nodes) {
-           const CC = this.nodeObjects.get(fC.index);
-           CC && ["TransformNode", "LiteNode"].includes(CC.getClassName()) && bC.transformNodes.push(CC);
-           for (const zC of null !== (nC = this.nodePrimitives.get(fC.index)) && void 0 !== nC ? nC : []) {
- ... (46 more removed lines; see GitHub link above)
+         if (Lp.startsWith("data:")) try {
+           const pp = new Uint8Array((0, op.s)(Lp));
+           if (ip = (0, Op.b)(pp), null === ip) {
+             const {
+               json: cp,
+               bin: Op
+             } = (0, op.B)(pp);
+             ip = Pp(cp, Op, Ip)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/205.js` (Changed code · before: `L933-L1038` → after: `L143-L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530) · [After (L143-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/205.js#L143-L146) · [Before (L933-L1038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/205.js#L933-L1038)

```diff
-           return this.nodeObjects.get(CC.index)
-         }))
-       }
-       loadMesh(CC, zC, ZC, QC) {
-         const wC = [],
-           bC = rC(zC);
-         if (1 === ZC.primitives.length) {
-           const QC = ZC.primitives[0];
-           wC.push(this.loadPrimitive(`${CC}/primitives/${QC.index}`, bC, QC, (CC => {
-             this.nodeObjects.set(zC.index, CC), this.nodePrimitives.set(zC.index, [CC])
-           })))
-         } else {
-           const QC = this.node(bC, !1);
-           this.nodeObjects.set(zC.index, QC);
-           const nC = [];
-           this.nodePrimitives.set(zC.index, nC);
- ... (90 more removed lines; see GitHub link above)
+         } catch {
+           ip = "is not a binary glTF 2.0 file"
+         } else ip = "loads data from outside the file";
+         ip && (Sp[xp] = ip, cp && console.warn(Up(pp, xp, ip)))
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/205.js` (Changed code · before: `L1053-L1082` → after: `L151-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9e40af44abb7a1798670aa6c569413b43547c401eb5efa3c780e4c31bf073530) · [After (L151-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/205.js#L151-L156) · [Before (L1053-L1082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/205.js#L1053-L1082)

```diff
-     function bC(CC) {
-       return (0, QC.e)() ? `https://${wC.c.discordDomain}/${CC.href}` : CC.href
-     }
-     const nC = {
-       scriptUrl: bC(new ZC.U(ZC(41302))),
-       wasmBinaryUrl: bC(new ZC.U(ZC(41310)))
-     }
-   },
-   36162: CC => {
-     CC.exports = function(CC, zC, ZC, QC) {
-       var wC = self || window;
-       try {
-         try {
-           var bC;
-           try {
-             bC = new wC.Blob([CC])
- ... (14 more removed lines; see GitHub link above)
+     function vp(pp, ip) {
+       const cp = Object.keys(ip);
+       if (0 === cp.length) return null;
+       if (1 === cp.length) return Up(pp, cp[0], ip[cp[0]]);
+       const Op = cp.map((pp => `"${pp}" ${ip[pp]}`)).join("; ");
+       return `Texture pack "${pp}": ${cp.length} models were not loaded (${Op}). The default models are used instead.`
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/206.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/206.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4)

#### 1. `bundles/preprod.bloxd.io/chunks/js/206.js` (Changed code · before: `L4-L6` → after: `L4-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4) · [After (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/206.js#L4-L8) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/206.js#L4-L6)

```diff
-   41314: (CC, zC, ZC) => {
-     ZC.r(zC), ZC.d(zC, {
-       default: () => bC
+   34493: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => lp,
+       e: () => Xp,
+       f: () => Ep
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/206.js` (Changed code · before: `L8-L9` → after: `L10-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4) · [After (L10-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/206.js#L10-L67) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/206.js#L8-L9)

```diff
-     var QC = ZC(36162),
-       wC = ZC.n(QC);
+     var Op = cp(34496);
+     const op = {
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
+       Ip = {
+         items: 1024,
+         perFile: 1024,
+ ... (42 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/206.js` (Changed code · before: `L11-L12` → after: `L69-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4) · [After (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/206.js#L69-L70) · [Before (L11-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/206.js#L11-L12)

```diff
-     function bC() {
-       return wC()('/*! For license information please see w4ddu.procGen.worker.0c0703f0.worker.js.LICENSE.txt */\n(()=>{var CC={49:CC=>{const zC="object"===typeof performance&&performance&&"function"===typeof performance.now?performance:Date,ZC=()=>zC.now(),QC=CC=>CC===1/0||(CC=> … [truncated]
+     function wp(pp) {
+       return pp.toLocaleString("en-US")
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/206.js` (Changed code · before: `L14-L17` → after: `L72-L385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4) · [After (L72-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/206.js#L72-L385) · [Before (L14-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/206.js#L14-L17)

```diff
-   },
-   36162: CC => {
-     CC.exports = function(CC, zC, ZC, QC) {
-       var wC = self || window;
+ 
+     function vp(pp, ip, cp) {
+       return pp > ip ? `has ${wp(pp)} ${cp} (the limit is ${wp(ip)})` : null
+     }
+ 
+     function tp(pp, ip) {
+       return Number.isInteger(pp) && pp >= 0 && pp < (null !== ip && void 0 !== ip ? ip : 0)
+     }
+ 
+     function Hp(pp) {
+       return Number.isInteger(pp) && pp >= 0
+     }
+ 
+     function dp(pp, ip) {
+       return void 0 !== pp && (!Array.isArray(pp) || pp.length > ip)
+     }
+ ... (298 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/206.js` (Changed code · before: `L19-L32` → after: `L387-L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4R387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4) · [After (L387-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/206.js#L387-L391) · [Before (L19-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/206.js#L19-L32)

```diff
-         try {
-           var bC;
-           try {
-             bC = new wC.Blob([CC])
-           } catch (qC) {
-             (bC = new(wC.BlobBuilder || wC.WebKitBlobBuilder || wC.MozBlobBuilder || wC.MSBlobBuilder)).append(CC), bC = bC.getBlob()
-           }
-           var nC = wC.URL || wC.webkitURL,
-             fC = nC.createObjectURL(bC),
-             oC = new wC[zC](fC, ZC);
-           return nC.revokeObjectURL(fC), oC
-         } catch (qC) {
-           return new wC[zC]("data:application/javascript,".concat(encodeURIComponent(CC)), ZC)
-         }
+         const {
+           json: ip,
+           bin: cp
+         } = (0, Op.B)(pp);
+         return Xp(ip, cp)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/206.js` (Changed code · before: `L34-L35` → after: `L393-L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4R393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c85b7fd591e2b41297116aa9dca6a98326f3056d0c7287fdecceeda859c2cef4) · [After (L393-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/206.js#L393-L394) · [Before (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/206.js#L34-L35)

```diff
-         if (!QC) throw Error("Inline worker is not supported");
-         return new wC[zC](QC, ZC)
+         if (cp instanceof Op.o) return cp.reason;
+         throw cp
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/207.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/207.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/207.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/207.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/207.js#L4)

```diff
-   41345: (CC, zC, ZC) => {
+   34510: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/207.js` (Changed code · before: `L6` → after: `L6-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3aR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3a) · [After (L6-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/207.js#L6-L15) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/207.js#L6)

```diff
-       default: () => bC
+       animatedBlockTextures: () => Lp,
+       armourAtlasUrl: () => Sp,
+       averageColors: () => Yp,
+       blockAtlasUrls: () => Ip,
+       blockAtlasWidth: () => Op,
+       buildHash: () => Ap,
+       builtTextureIndexFingerprint: () => Dp,
+       imagesPerAtlas: () => op,
+       outputHash: () => Pp,
+       rotatedBlockTextures: () => xp
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/207.js` (Changed code · before: `L8-L13` → after: `L17-L9876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3aR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3a) · [After (L17-L9876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/207.js#L17-L9876) · [Before (L8-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/207.js#L8-L13)

```diff
-     var QC = ZC(36162),
-       wC = ZC.n(QC);
- 
-     function bC() {
-       return wC()('(()=>{var CC={20:(CC,zC,ZC)=>{CC.exports=ZC.p+"static/media/bloxd_wasm_bg.70f80f804c9e94c93b74.wasm"},22:(CC,zC,ZC)=>{CC.exports=ZC.p+"static/media/bloxd_wasm_textures_bg.c1374c5ae94b21c284ad.wasm"},13:(CC,zC,ZC)=>{CC.exports=ZC.p+"static/media/zstdDecodeWorker … [truncated]
-     }
+     const Op = 8,
+       op = [256, 256, 256, 256, 256, 256, 114],
+       Ip = [cp(34515), cp(34524), cp(34531), cp(34533), cp(34539), cp(34547), cp(34554)],
+       Sp = cp(34558),
+       xp = {
+         "alloy_kiln_top[rot[1": cp(34560),
+         "alloy_kiln_top[rot[2": cp(34566),
+         "alloy_kiln_top[rot[3": cp(34569),
+         "alloy_kiln_top[rot[4": cp(34572),
+         "auto_bench_top[rot[1": cp(34575),
+         "auto_bench_top[rot[2": cp(34578),
+         "auto_bench_top[rot[3": cp(34584),
+         "auto_bench_top[rot[4": cp(34593),
+         "belt_tunnel_exit_top[rot[1": cp(34601),
+         "belt_tunnel_exit_top[rot[2": cp(34605),
+         "belt_tunnel_exit_top[rot[3": cp(34610),
+ ... (9844 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/207.js` (Changed code · before: `L16-L37` → after: `L9879-L10902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3aR9879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-34117fc9a6275d49c0b4f9b9198ddc30cadb9267c353f46d1e67614472f12f3a) · [After (L9879-L10902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/207.js#L9879-L10902) · [Before (L16-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/207.js#L16-L37)

```diff
-     CC.exports = function(CC, zC, ZC, QC) {
-       var wC = self || window;
-       try {
-         try {
-           var bC;
-           try {
-             bC = new wC.Blob([CC])
-           } catch (qC) {
-             (bC = new(wC.BlobBuilder || wC.WebKitBlobBuilder || wC.MozBlobBuilder || wC.MSBlobBuilder)).append(CC), bC = bC.getBlob()
-           }
-           var nC = wC.URL || wC.webkitURL,
-             fC = nC.createObjectURL(bC),
-             oC = new wC[zC](fC, ZC);
-           return nC.revokeObjectURL(fC), oC
-         } catch (qC) {
-           return new wC[zC]("data:application/javascript,".concat(encodeURIComponent(CC)), ZC)
- ... (6 more removed lines; see GitHub link above)
+     pp.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAABACAYAAAAnBDaKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA0ElEQVR42mNI2sr0HwPPZ/m/efdZMGYAcYqL67HiGbNXQRQkJuX/V1JWBuOQxwxgGiS2et0+hAKQBEhg1/Hb/7V1dDEVgARBkiAMUoxVAUgCRGM1Ad2BIDG4I5M6WTEwwptUDQfrZiEwxhoODh3iYCNB3gSxSVcA8jtI … [truncated]
+   },
+   36164: pp => {
+     pp.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAEACAYAAACOKzdSAAAACXBIWXMAAAsTAAALEwEAmpwYAAABJElEQVR42u2ZPQrCQBCF9yj2lpZp7OyDXRRsLT2AaOkRBAutLBRsLAULe/EQXsJu5Q0MqOxPVkESfcWDzcwjs/st7E9itrujhWatjl1muQhtjZv5YmOL3tAp5AxceV7YW3/6JMTkDY+G9aotet/gLIGO4OG1g4hJJ/eH … [truncated]
+   },
+   36168: pp => {
+     pp.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAABACAYAAAAnBDaKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA7ElEQVR42mPYvPvsfxA2y+76b1K7EAMzzJi96n9xcT1WDNLEsHrdvv+JSfn/z1669X/FsetgDGKDxFAUaOvo/rdccA6MQWysChw3PQZjrApgkl6HPoIxXAHIkSAOugPhCmDe1IusxsAoCqgTDrvP3ARjnOFglFYHxli9 … [truncated]
+   },
+   36172: pp => {
+     pp.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAABACAYAAAAnBDaKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAd0lEQVR42mMwqV34Hx9mMMvu+r963b7/IHrz7rMoGCQGVqAXWf0fpjDo0n8whmkCK4BhkGDyk39gjFMBzHisCkBWIWO4AphqdNMwHIluGlgB9cMh+vZ/MMbpTYIKhkc4EIxugglmND0Mp3AYLR9G08No+TBM0gMAFfvr … [truncated]
+   },
+   36174: pp => {
+     pp.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAABACAYAAAAnBDaKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA40lEQVR42mMwqV34Hx2bZXf937z7LBgzgDjFxfVY8YzZqyAKEpPy/5+9dOv/imPXwRjEBomtXrcPoUBbR/e/5YJzYAxiY1XguOkxGGNV4HXoIxjDFGEoQHcgSAzuSL3IagwM9yZ1w2H3mZtgjDMcjNLqwBirNw39ouFe … [truncated]
+   },
+   36178: pp => {
+     pp.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAABACAYAAAAnBDaKAAAACXBIWXMAAAsTAAALEwEAmpwYAAABLUlEQVR42q1VIQ4CMRDstwhBYBD4syTwAT5BwgtISDAYBEgkkgegMGgcjheUbMk03em1e6KiyW5vLzc7szvnNtud3x8u4UjMueu6hR8dH35yfnmJkcuROBTM799wUCDx9Pr+FyxX63ghMXI5EocCeWgW4IJfsDGYbQ7m … [truncated]
+ ... (1008 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/208.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/208.js` (23 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9)

#### 1. `bundles/preprod.bloxd.io/chunks/js/208.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/208.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/208.js#L2)

```diff
- export const ids = [208, 209];
+ export const ids = [208];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/208.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/208.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/208.js#L4)

```diff
-   36167: (CC, zC, ZC) => {
+   36453: (pp, ip, cp) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/208.js` (Changed code · before: `L6-L10` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/208.js#L6) · [Before (L6-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/208.js#L6-L10)

```diff
-       CAPPED_COUNTS_VISIT_CAP: () => bC,
-       reportCappedWasmFailure: () => oC,
-       reportUncappedWasmFailure: () => fC,
-       reportWasmCrash: () => wC,
-       reportWasmFailure: () => nC
+       WasmTextureWorker: () => tp
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/208.js` (Changed code · before: `L12-L54` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/208.js#L8-L11) · [Before (L12-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/208.js#L12-L54)

```diff
-     var QC = ZC(2927);
- 
-     function wC(CC) {
-       (0, QC.reportClientError)("wasm_load", CC.message, CC.code)
-     }
-     const bC = QC.d - 4;
- 
-     function nC(CC, zC, ZC) {
-       (0, QC.reportClientError)(CC, zC, ZC, !1)
-     }
- 
-     function fC(CC, zC, ZC) {
-       (0, QC.reportClientError)(CC, zC, ZC, !1, 1 / 0)
-     }
- 
-     function oC(CC, zC, ZC) {
- ... (27 more removed lines; see GitHub link above)
+     var Op = cp(629),
+       op = cp(3296),
+       Ip = cp(36455),
+       Sp = cp.n(Ip);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/208.js` (Changed code · before: `L57` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/208.js#L14) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/208.js#L57)

```diff
-       return "undefined" === typeof WebAssembly
+       return Sp()('(()=>{var pp={d:(ip,cp)=>{for(var Op in cp)pp.o(cp,Op)&&!pp.o(ip,Op)&&Object.defineProperty(ip,Op,{enumerable:!0,get:cp[Op]})},o:(pp,ip)=>Object.prototype.hasOwnProperty.call(pp,ip),r:pp=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(p … [truncated]
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/208.js` (Changed code · before: `L60-L61` → after: `L22-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9) · [After (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/208.js#L22-L23) · [Before (L60-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/208.js#L60-L61)

```diff
-     function xC() {
-       return (0, QC.d)()
+     function Wp(pp) {
+       return "" === pp ? [] : pp.split("\0")
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/208.js` (Changed code · before: `L64-L70` → after: `L26-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9) · [After (L26-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/208.js#L26-L28) · [Before (L64-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/208.js#L64-L70)

```diff
-     function JC() {
-       if (AC()) return "this browser has no WebAssembly";
-       const CC = (0, wC.q)();
-       return "compile" === CC || "instantiate" === CC ? `the core wasm didn't load here (${(0,wC.j)()})` : null
-     }
-     async function IC(CC) {
-       return await (0, bC.e)(bC.b, void 0, CC)
+     function yp(pp) {
+       if ("" !== pp)
+         for (const ip of pp.split("\n")) console.error(ip)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/208.js` (Changed code · before: `L73-L75` → after: `L31-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9) · [After (L31-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/208.js#L31-L75) · [Before (L73-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/208.js#L73-L75)

```diff
-     function iC() {
-       AC() || (0, GC.d)((() => {
-         IC()
+     function Up(pp, ip) {
+       return async function(pp, ip) {
+         const cp = Object.keys(pp),
+           Op = [],
+           op = new Map,
+           Ip = new Uint32Array(cp.length);
+         for (const [Sp, xp] of cp.entries()) {
+           const {
+             url: ip
+           } = pp[xp];
+           op.has(ip) || (op.set(ip, Op.length), Op.push(ip)), Ip[Sp] = op.get(ip)
+         }
+         return {
+           sources: await ip(Op),
+           names: cp.join("\0"),
+           sourceOfName: Ip
+ ... (29 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/208.js` (Changed code · before: `L113-L140` → after: `L80-L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9) · [After (L80-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/208.js#L80-L81) · [Before (L113-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/208.js#L113-L140)

```diff
-       (0, FC.g)(RC, `Bloxd wasm ${CC}, so the game can't start: ${zC}`, zC, CC)
-     }
-   },
-   36180: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       d: () => fC,
-       f: () => qC,
-       j: () => nC,
-       m: () => WC
-     });
-     var QC = ZC(36172),
-       wC = ZC(10);
-     const bC = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;
- 
-     function nC(CC) {
-       if (CC instanceof WebAssembly.RuntimeError) return !0;
- ... (12 more removed lines; see GitHub link above)
+       const cp = Dp.l.from(pp, ip ? Dp.k.Optional : Dp.k.Error);
+       return cp.code !== Dp.k.Fetch && cp.code !== Dp.k.Error && (0, Yp.f)(cp.message), cp
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/208.js` (Changed code · before: `L145-L244` → after: `L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9) · [After (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/208.js#L85) · [Before (L145-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/208.js#L145-L244)

```diff
-       var zC;
-       let ZC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
-       if (!(CC instanceof Error) || !oC.test(CC.message)) return {};
-       if (!("detached" in ZC)) return {
-         arrayBufferDetached: "absent"
-       };
-       return {
-         arrayBufferDetached: (0, wC.O)(null === (zC = (0, wC.K)(ZC, "detached")) || void 0 === zC ? void 0 : zC.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
-       }
-     }
-     const FC = 500;
- 
-     function WC(CC) {
-       let zC = "[object Object]";
-       try {
-         zC = String(CC)
- ... (84 more removed lines; see GitHub link above)
+       return pp.message ? new Error(`the texture worker failed: ${pp.message}`) : new Dp.l(Dp.k.Load, "the texture worker failed to start")
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/208.js` (Changed code · before: `L270-L333` → after: `L88-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9) · [After (L88-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/208.js#L88-L203) · [Before (L270-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/208.js#L270-L333)

```diff
-       __destroy_into_raw() {
-         const CC = this.__wbg_ptr;
-         return this.__wbg_ptr = 0, lC.unregister(this), CC
-       }
-       free() {
-         const CC = this.__destroy_into_raw();
-         Rz.FpMs(CC, 0)
-       }
-       rW(CC, zC) {
-         const ZC = Rz.YPaV(this.__wbg_ptr, CC, zC);
-         if (ZC[2]) throw Nz(ZC[1]);
-         return ZC[0] >>> 0
-       }
-       sW(CC) {
-         const zC = Rz.bhE7(this.__wbg_ptr, CC);
-         if (zC[2]) throw Nz(zC[1]);
- ... (48 more removed lines; see GitHub link above)
+       constructor(pp) {
+         this.worker = pp, this.failure = void 0, this.abandonStep = null, pp.addEventListener("error", (pp => {
+           pp.preventDefault(), this.failure ??= vp(pp)
+         }))
+       }
+       static async generateRequired(pp, ip, cp, Ip) {
+         let Sp = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Dp.d,
+           Yp = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
+         const Pp = (0, Lp.i)();
+         if (null !== Pp) throw wp(new Dp.l(Dp.k.Load, Pp), !1);
+         let Wp;
+         const vp = new AbortController;
+         try {
+           Wp = new tp(function() {
+             try {
+               return new xp
+ ... (100 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/208.js` (Changed code · before: `L335-L336` → after: `L205-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9R205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9) · [After (L205-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/208.js#L205-L206) · [Before (L335-L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/208.js#L335-L336)

```diff
-       text() {
-         let CC, zC;
+       async generateOptional() {
+         let pp;
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/208.js` (Changed code · before: `L338-L339` → after: `L208-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9R208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9) · [After (L208-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/208.js#L208-L212) · [Before (L338-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/208.js#L338-L339)

```diff
-           const ZC = Rz.XDXh(this.__wbg_ptr);
-           return CC = ZC[0], zC = ZC[1], OC(ZC[0], ZC[1])
+           pp = await this.request({
+             type: "optional"
+           }, [])
+         } catch (ip) {
+           throw wp(ip, !0)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/208.js` (Changed code · before: `L341` → after: `L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9R214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9) · [After (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/208.js#L214) · [Before (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/208.js#L341)

```diff
-           Rz.B5Ib(CC, zC, 1)
+           this.terminate()
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/208.js` (Changed code · before: `L343-L1017` → after: `L216-L276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9R216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9) · [After (L216-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/208.js#L216-L276) · [Before (L343-L1017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/208.js#L343-L1017)

```diff
-       }
-     }
-     Symbol.dispose && (bC.prototype[Symbol.dispose] = bC.prototype.free);
-     class nC {
-       __destroy_into_raw() {
-         const CC = this.__wbg_ptr;
-         return this.__wbg_ptr = 0, XC.unregister(this), CC
-       }
-       free() {
-         const CC = this.__destroy_into_raw();
-         Rz.z5MF(CC, 0)
-       }
-       zN(CC, zC) {
-         tC(zC, QC);
-         const ZC = Rz.XnxE(this.__wbg_ptr, CC, zC.__wbg_ptr);
-         if (ZC[2]) throw Nz(ZC[1]);
- ... (659 more removed lines; see GitHub link above)
+         return yp(pp.warnings),
+           function(pp) {
+             let {
+               blocks: ip,
+               counts: cp,
+               values: Op
+             } = pp;
+             const op = {};
+             let Ip = 0;
+             for (const [Sp, xp] of Wp(ip).entries()) {
+               const pp = [];
+               for (let ip = 0; ip < cp[Sp]; ip++, Ip += 3) pp.push([Op[Ip], Op[Ip + 1], Op[Ip + 2]]);
+               op[xp] = pp
+             }
+             return op
+           }(pp)
+ ... (45 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/208.js` (Changed code · before: `L1019` → after: `L278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9R278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9) · [After (L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/208.js#L278) · [Before (L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/208.js#L1019)

```diff
-         }
+         }))
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/208.js` (Changed code · before: `L1063-L1232` → after: `L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9R283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9) · [After (L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/208.js#L283) · [Before (L1063-L1232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/208.js#L1063-L1232)

```diff
-       if (!(CC instanceof zC)) throw new Error(`expected instance of ${zC.name}`)
-     }
- 
-     function DC(CC, zC) {
-       return CC >>>= 0, UC().subarray(CC / 8, CC / 8 + zC)
-     }
- 
-     function jC(CC, zC) {
-       return CC >>>= 0, Cz().subarray(CC / 4, CC / 4 + zC)
-     }
- 
-     function yC(CC, zC) {
-       return CC >>>= 0, Zz().subarray(CC / 1, CC / 1 + zC)
-     }
-     let LC = null;
- 
- ... (154 more removed lines; see GitHub link above)
+       return ip > 0 ? `${pp}, its module's memory ${Math.round(ip/2**20)} MiB` : pp
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/208.js` (Changed code · before: `L1235` → after: `L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9R286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9) · [After (L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/208.js#L286) · [Before (L1235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/208.js#L1235)

```diff
-   36196: (CC, zC, ZC) => {
+   36481: (pp, ip, cp) => {
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/208.js` (Changed code · before: `L1239` → after: `L291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9R291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9) · [After (L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/208.js#L291) · [Before (L1239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/208.js#L1239)

```diff
-       f: () => oC
+       g: () => Sp
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/208.js` (Changed code · before: `L1241-L1256` → after: `L293-L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9R293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9) · [After (L293-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/208.js#L293-L294) · [Before (L1241-L1256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/208.js#L1241-L1256)

```diff
-     var QC = ZC(36199),
-       wC = ZC(2848),
-       bC = ZC(36201);
-     const nC = {
-       name: wC.d,
-       url: () => new ZC.U(ZC(36210)),
-       init: QC.default,
-       bindings: QC
-     };
- 
-     function fC() {
-       let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nC,
-         zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : nC,
-         ZC = arguments.length > 2 ? arguments[2] : void 0;
-       return (0, bC.h)(CC, zC, ZC)
-     }
+     const Op = 1024,
+       op = 1024 * Op;
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/208.js` (Changed code · before: `L1259-L1282` → after: `L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9R297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9) · [After (L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/208.js#L297) · [Before (L1259-L1282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/208.js#L1259-L1282)

```diff
-       return (0, wC.K)((() => CC), QC, nC)
-     }
-   },
-   36189: (CC, zC, ZC) => {
-     function QC(CC, zC) {
-       return new Error(`${CC}: ${zC instanceof Error?`${zC.name}: ${zC.message}`:String(zC)}`, {
-         cause: zC
-       })
-     }
-     ZC.d(zC, {
-       e: () => QC
-     })
-   },
-   36184: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       b: () => nC,
- ... (8 more removed lines; see GitHub link above)
+       return 2 ** Math.floor(Math.log2(Math.max(1, pp / op)))
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/208.js` (Changed code · before: `L1286-L1289` → after: `L300-L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9R300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9) · [After (L300-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/208.js#L300-L301) · [Before (L1286-L1289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/208.js#L1286-L1289)

```diff
-     function oC() {
-       return fC ??= (async () => (0, QC.I)(new URL(nC()), (0, wC.e)("bloxd_wasm_textures")))().catch((CC => {
-         throw (0, bC.e)((0, QC.P)(CC), CC)
-       })), fC
+     function Sp(pp) {
+       return (pp / op).toFixed(1)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/208.js` (Changed code · before: `L1292-L1324` → after: `L304-L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9R304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a6d10c83f26c4952cf52b3f9d910a4561cb303a6246da05b7298d634c3a458b9) · [After (L304-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/208.js#L304-L324) · [Before (L1292-L1324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/208.js#L1292-L1324)

```diff
-   36172: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       e: () => QC,
-       i: () => bC,
-       m: () => oC,
-       n: () => nC,
-       p: () => wC
-     });
-     const QC = /^alloc_failed (\d+) bytes$/;
- 
-     function wC(CC, zC) {
-       return bC(CC, zC) ? `trap=alloc_failed ${zC} bytes` : `trap=${CC}`
-     }
- 
-     function bC(CC, zC) {
-       return "unreachable" === CC && zC > 0
- ... (17 more removed lines; see GitHub link above)
+   36455: pp => {
+     pp.exports = function(pp, ip, cp, Op) {
+       var op = self || window;
+       try {
+         try {
+           var Ip;
+           try {
+             Ip = new op.Blob([pp])
+           } catch (Yp) {
+             (Ip = new(op.BlobBuilder || op.WebKitBlobBuilder || op.MozBlobBuilder || op.MSBlobBuilder)).append(pp), Ip = Ip.getBlob()
+           }
+           var Sp = op.URL || op.webkitURL,
+             xp = Sp.createObjectURL(Ip),
+             Lp = new op[ip](xp, cp);
+           return Sp.revokeObjectURL(xp), Lp
+         } catch (Yp) {
+ ... (5 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/209.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/209.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db)

#### 1. `bundles/preprod.bloxd.io/chunks/js/209.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0dbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/209.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/209.js#L4)

```diff
-   36167: (CC, zC, ZC) => {
+   41741: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/209.js` (Changed code · before: `L6-L10` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0dbR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/209.js#L6-L7) · [Before (L6-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/209.js#L6-L10)

```diff
-       CAPPED_COUNTS_VISIT_CAP: () => bC,
-       reportCappedWasmFailure: () => oC,
-       reportUncappedWasmFailure: () => fC,
-       reportWasmCrash: () => wC,
-       reportWasmFailure: () => nC
+       loadGlbAsset: () => ei,
+       loadGlbTree: () => di
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/209.js` (Changed code · before: `L12` → after: `L9-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0dbR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db) · [After (L9-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/209.js#L9-L63) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/209.js#L12)

```diff
-     var QC = ZC(2927);
+     var Op = cp(38124),
+       op = cp(41745),
+       Ip = cp(36455),
+       Sp = cp.n(Ip);
+ 
+     function xp() {
+       return Sp()('(()=>{class pp extends Error{}function ip(ip,cp){const Op=ip._malloc(cp);if(0===Op)throw new pp(`Draco: the decoder\'s heap refused ${cp} bytes`);return Op}function cp(pp){return{[pp.DT_FLOAT32]:[Float32Array,5126],[pp.DT_INT8]:[Int8Array,5120],[pp.DT_INT16]:[I … [truncated]
+     }
+     var Lp = cp(104);
+     const Yp = 1e3;
+     let Dp = null,
+       Ap = null;
+     const Pp = [],
+       Wp = [];
+     let yp = 0;
+     const Up = {
+ ... (39 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/209.js` (Changed code · before: `L15` → after: `L66-L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0dbR66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db) · [After (L66-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/209.js#L66-L68) · [Before (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/209.js#L15)

```diff
-       (0, QC.reportClientError)("wasm_load", CC.message, CC.code)
+       const ip = Pp.indexOf(pp); - 1 !== ip && Pp.splice(ip, 1);
+       const cp = Wp.shift();
+       cp && dp(cp)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/209.js` (Changed code · before: `L19-L20` → after: `L71-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0dbR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db) · [After (L71-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/209.js#L71-L107) · [Before (L19-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/209.js#L19-L20)

```diff
-     function nC(CC, zC, ZC) {
-       (0, QC.reportClientError)(CC, zC, ZC, !1)
+     function Hp(pp, ip) {
+       pp.busy = !0, pp.releaseTimer && (clearTimeout(pp.releaseTimer), pp.releaseTimer = null);
+       pp.worker.then((cp => {
+         const Op = yp++;
+         cp.onmessage = op => {
+           let {
+             data: Ip
+           } = op;
+           if (("decoded" === Ip.id || "decodeError" === Ip.id) && Ip.seq === Op) {
+             if (cp.onmessage = null, cp.onerror = null, "decoded" === Ip.id) return Up.decodes++, ip.resolve({
+               indices: Ip.indices,
+               attributes: Ip.attributes,
+               totalVertices: Ip.totalVertices
+             }), void(() => {
+               const ip = Wp.shift();
+               ip ? Hp(pp, ip) : (pp.busy = !1, pp.releaseTimer = setTimeout((() => {
+ ... (21 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/209.js` (Changed code · before: `L23-L24` → after: `L110-L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0dbR110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db) · [After (L110-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/209.js#L110-L123) · [Before (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/209.js#L23-L24)

```diff
-     function fC(CC, zC, ZC) {
-       (0, QC.reportClientError)(CC, zC, ZC, !1, 1 / 0)
+     function dp(pp) {
+       const ip = Pp.find((pp => !pp.busy));
+       if (ip) Hp(ip, pp);
+       else {
+         if (Pp.length < wp) {
+           const ip = {
+             worker: vp(),
+             busy: !0,
+             releaseTimer: null
+           };
+           return Pp.push(ip), Up.mostWorkers = Math.max(Up.mostWorkers, Pp.length), void Hp(ip, pp)
+         }
+         Wp.push(pp)
+       }
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/209.js` (Changed code · before: `L28` → after: `L127-L1082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0dbR127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-441cfb862b6a40d61cf499daf0352f5e1ee982620f0899e8911e89e5ec3bc0db) · [After (L127-L1082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/209.js#L127-L1082) · [Before (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/209.js#L28)

```diff
-       (0, QC.reportClientError)(CC, zC, ZC, !1, bC)
+       return new Promise(((Op, op) => {
+         dp({
+           data: new Int8Array(pp.buffer, pp.byteOffset, pp.byteLength).slice(),
+           attributeIds: ip,
+           expected: cp,
+           resolve: Op,
+           reject: op
+         })
+       }))
+     }
+     var jp = cp(37693),
+       kp = cp(37698),
+       mp = cp(34496),
+       Rp = cp(34493);
+     const qp = {
+       index: -1,
+ ... (940 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/210.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/210.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe)

#### 1. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L4-L21` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/210.js#L4-L6) · [Before (L4-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/210.js#L4-L21)

```diff
-   40652: (CC, zC, ZC) => {
-     function QC(CC, zC, ZC) {
-       if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(CC, zC).getContext("2d", ZC);
-       const QC = document.createElement("canvas");
-       return QC.width = CC, QC.height = zC, QC.getContext("2d", ZC)
-     }
- 
-     function wC(CC, zC) {
-       return CC.getContext("2d", zC)
-     }
-     ZC.d(zC, {
-       b: () => wC,
-       f: () => QC
-     })
-   },
-   40606: (CC, zC, ZC) => {
- ... (2 more removed lines; see GitHub link above)
+   41764: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       default: () => Ip
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L23-L26` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/210.js#L8-L9) · [Before (L23-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/210.js#L23-L26)

```diff
-     const QC = 1 << 20,
-       wC = 1 << 21,
-       bC = 1024,
-       nC = 2048;
+     var Op = cp(36455),
+       op = cp.n(Op);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L28-L32` → after: `L11-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L11-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/210.js#L11-L12) · [Before (L28-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/210.js#L28-L32)

```diff
-     function fC(CC, zC, ZC) {
-       const fC = CC + QC,
-         oC = zC + bC,
-         qC = ZC + QC;
-       return fC < 0 || fC >= wC || qC < 0 || qC >= wC || oC < 0 || oC >= nC ? -1 : (fC * wC + qC) * nC + oC
+     function Ip() {
+       return op()('/*! For license information please see sn3sfj.procGen.worker.b125915b.worker.js.LICENSE.txt */\n(()=>{var pp={79:pp=>{const ip="object"===typeof performance&&performance&&"function"===typeof performance.now?performance:Date,cp=()=>ip.now(),Op=pp=>pp===1/0||(pp= … [truncated]
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L35-L337` → after: `L15-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L15-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/210.js#L15-L18) · [Before (L35-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/210.js#L35-L337)

```diff
-   40598: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       e: () => QC,
-       i: () => nC,
-       l: () => wC,
-       n: () => bC,
-       o: () => FC,
-       q: () => qC,
-       u: () => oC,
-       y: () => fC
-     });
-     ZC(3436);
-     ZC(40606);
- 
-     function QC(CC) {}
- 
- ... (287 more removed lines; see GitHub link above)
+   36455: pp => {
+     pp.exports = function(pp, ip, cp, Op) {
+       var op = self || window;
+       try {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L339-L414` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/210.js#L20) · [Before (L339-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/210.js#L339-L414)

```diff
-           const zC = (WC ? QC.ib.Draws : 0) | (bC ? QC.ib.NetAll : 0) | (vC ? QC.ib.StopForSends : 0);
-           pC = (0, MC.g)((() => {
-             let ZC = this.core.frame(CC, PC, fC.cursor, RC, zC, AC);
-             for (; ZC === QC.kd && vC;) {
-               var wC;
-               if (xC ??= null === (wC = this.gameHost) || void 0 === wC ? void 0 : wC.takeFault(), void 0 === xC && !this.takeSends(vC)) return QC.R.Fatal;
-               ZC = this.core.sp()
-             }
-             return ZC
-           }))
-         } catch (tC) {
-           JC = {
-             error: tC
-           }
-         }
-         xC ??= null === (ZC = this.gameHost) || void 0 === ZC ? void 0 : ZC.takeFault();
- ... (60 more removed lines; see GitHub link above)
+           var Ip;
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L416-L417` → after: `L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/210.js#L22) · [Before (L416-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/210.js#L416-L417)

```diff
-             var ZC, QC;
-             null === (ZC = (QC = this.handlers).onEnvEvent) || void 0 === ZC || ZC.call(QC, bC)
+             Ip = new op.Blob([pp])
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L419` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/210.js#L24) · [Before (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/210.js#L419)

```diff
-             return this.crashOn(vC, wC), !1
+             (Ip = new(op.BlobBuilder || op.WebKitBlobBuilder || op.MozBlobBuilder || op.MSBlobBuilder)).append(pp), Ip = Ip.getBlob()
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L421-L451` → after: `L26-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L26-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/210.js#L26-L29) · [Before (L421-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/210.js#L421-L451)

```diff
-         }
-         return !this.stopped
-       }
-       setEventWalker(CC) {
-         this.eventWalker = CC
-       }
-       writePendingInput() {
-         if (this.stopped) return !1;
-         const {
-           input: CC
-         } = this.rings;
-         try {
-           const zC = this.unsentUiPrefs;
-           zC && CC.writeRecord(QC.wb.UiPrefs, 0, zC.nametagCutDistance, 0, (0, QC.ve)(zC)) && (this.unsentUiPrefs = null);
-           const ZC = this.unsentEnvPrefs;
-           ZC && CC.writeRecord(QC.wb.EnvPrefs, (0, QC.be)(ZC), ZC.fogChunks, 0, 0) && (this.unsentEnvPrefs = null);
- ... (15 more removed lines; see GitHub link above)
+           var Sp = op.URL || op.webkitURL,
+             xp = Sp.createObjectURL(Ip),
+             Lp = new op[ip](xp, cp);
+           return Sp.revokeObjectURL(xp), Lp
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/210.js` (Changed code · before: `L453-L472` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbeR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-995634aced7d8423e330b9c246bf4a13ce316ee9f727a558ce63abf971e9dcbe) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/210.js#L31) · [Before (L453-L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/210.js#L453-L472)

```diff
-           return this.crash(PC, zC), !1
-         }
-         return !0
-       }
-       setHoldDraws(CC) {
-         this.drawsHeld = CC
-       }
-       setUiPrefs(CC) {
-         this.unsentUiPrefs = {
-           ...CC
-         }
-       }
-       setEnvPrefs(CC) {
-         this.unsentEnvPrefs = {
-           ...CC
-         }
- ... (4 more removed lines; see GitHub link above)
+           return new op[ip]("data:application/javascript,".concat(encodeURIComponent(pp)), cp)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/211.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/211.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327)

#### 1. `bundles/preprod.bloxd.io/chunks/js/211.js` (Changed code · before: `L4-L8` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/211.js#L4-L6) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/211.js#L4-L8)

```diff
-   36369: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       b: () => nC,
-       f: () => wC,
-       g: () => bC
+   41785: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       default: () => Ip
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/211.js` (Changed code · before: `L10-L248` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/211.js#L8-L9) · [Before (L10-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/211.js#L10-L248)

```diff
-     var QC = ZC(1724);
-     class wC extends Error {
-       constructor(CC) {
-         super("The game server didn't answer in time"), this.leg = CC, this.name = "SeatRequestTimedOut"
-       }
-     }
-     const bC = new class {
-       constructor() {
-         this.count = 0, this.answers = 0, this.waiting = new Set
-       }
-       get answered() {
-         return this.answers
-       }
-       answer() {
-         this.answers++
-       }
- ... (223 more removed lines; see GitHub link above)
+     var Op = cp(36455),
+       op = cp.n(Op);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/211.js` (Changed code · before: `L251-L260` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/211.js#L12) · [Before (L251-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/211.js#L251-L260)

```diff
-       return AC ??= IC(), AC
-     }
- 
-     function eC() {
-       var CC;
-       return (null !== (CC = AC) && void 0 !== CC ? CC : IC()).basis
-     }
- 
-     function hC(CC, zC) {
-       return CC.setChunkCap(zC.chunkCap)
+       return op()('(()=>{var pp={13:(pp,ip,cp)=>{pp.exports=cp.p+"static/media/bloxd_wasm_bg.f1177b9ed1fe02dfded8.wasm"},21:(pp,ip,cp)=>{pp.exports=cp.p+"static/media/bloxd_wasm_textures_bg.d7d41d4f0bb8769a2dc8.wasm"},6:(pp,ip,cp)=>{pp.exports=cp.p+"static/media/zstdDecodeWorker. … [truncated]
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/211.js` (Changed code · before: `L263-L498` → after: `L15-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327) · [After (L15-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/211.js#L15-L18) · [Before (L263-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/211.js#L263-L498)

```diff
-   36360: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       e: () => vC,
-       j: () => AC,
-       l: () => WC,
-       n: () => xC,
-       p: () => PC,
-       t: () => IC,
-       z: () => iC
-     });
-     var QC = ZC(36175),
-       wC = ZC(36351);
-     const bC = 64 * QC.c,
-       nC = 40 * QC.d,
-       fC = 36 * QC.d,
-       oC = 20 * QC.d,
- ... (220 more removed lines; see GitHub link above)
+   36455: pp => {
+     pp.exports = function(pp, ip, cp, Op) {
+       var op = self || window;
+       try {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/211.js` (Changed code · before: `L500` → after: `L20-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327) · [After (L20-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/211.js#L20-L29) · [Before (L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/211.js#L500)

```diff
-           return CC()
+           var Ip;
+           try {
+             Ip = new op.Blob([pp])
+           } catch (Yp) {
+             (Ip = new(op.BlobBuilder || op.WebKitBlobBuilder || op.MozBlobBuilder || op.MSBlobBuilder)).append(pp), Ip = Ip.getBlob()
+           }
+           var Sp = op.URL || op.webkitURL,
+             xp = Sp.createObjectURL(Ip),
+             Lp = new op[ip](xp, cp);
+           return Sp.revokeObjectURL(xp), Lp
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/211.js` (Changed code · before: `L502` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bc873596dd6a10036c992df13591c71502db0b987831b0dcf09062a505fa6327) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/211.js#L31) · [Before (L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/211.js#L502)

```diff
-           return this.stop(), this.onError(ZC), zC
+           return new op[ip]("data:application/javascript,".concat(encodeURIComponent(pp)), cp)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/212.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/212.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8)

#### 1. `bundles/preprod.bloxd.io/chunks/js/212.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/212.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/212.js#L2)

```diff
- export const ids = [212];
+ export const ids = [212, 213];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/212.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/212.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/212.js#L4)

```diff
-   36219: (CC, zC, ZC) => {
+   36469: (pp, ip, cp) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/212.js` (Changed code · before: `L6-L16` → after: `L6-L1331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-83c4795ecc04c86695afd81ce517d8ea408f034827f3236c0a84531c03f2afe8) · [After (L6-L1331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/212.js#L6-L1331) · [Before (L6-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/212.js#L6-L16)

```diff
-       ITEM_FILES_WITHOUT_SPRITE: () => fC,
-       ITEM_SPRITES: () => bC,
-       ITEM_SPRITES_WITHOUT_FILE: () => nC,
-       ITEM_SPRITE_RUNS: () => wC,
-       MAX_SPRITE_ITEM_ID: () => QC
-     });
-     const QC = 10090,
-       wC = "$######$################################################%=####################################################################################################################################################$########################################$#################### … [truncated]
-       bC = "unloaded|dirt|coarse_dirt|sand|clay|gravel|snow|log_maple|log_pine|log_plum|log_cedar|log_aspen|log_jungle|planks_maple|planks_aspen|planks_plum|planks_jungle|planks_pine|planks_cedar|stripped_maple_log|stripped_aspen_log|stripped_plum_log|stripped_jungle_log|stripped … [truncated]
-       nC = "############################################################################################################################################4+##&###############%####$##3########################0######&#####&####$%###############<#####$#&###%##########'*######G%#####-$ … [truncated]
-       fC = "amethite_armour_2|astral_armour_2|beetroot_plant_stage0|beetroot_plant_stage1|beetroot_plant_stage2|berry_bush_stage0|book_page|camel_painting_option2|carrot_plant_stage0|carrot_plant_stage1|carrot_plant_stage2|crimson_trapdoor|cursemetal_armour_2|date_pudding_option2 … [truncated]
+       CAPPED_COUNTS_VISIT_CAP: () => Ip,
+       reportCappedWasmFailure: () => Lp,
+       reportUncappedWasmFailure: () => xp,
+       reportWasmCrash: () => op,
+       reportWasmFailure: () => Sp
+     });
+     var Op = cp(3025);
+ 
+     function op(pp) {
+       (0, Op.reportClientError)("wasm_load", pp.message, pp.code)
+     }
+     const Ip = Op.b - 4;
+ 
+     function Sp(pp, ip, cp) {
+       (0, Op.reportClientError)(pp, ip, cp, !1)
+     }
+ ... (1310 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/213.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/213.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/213.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/213.js#L4)

```diff
-   36223: (CC, zC, ZC) => {
+   36469: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L6` → after: `L6-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L6-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/213.js#L6-L10) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/213.js#L6)

```diff
-       CreateCustomLobby: () => YC
+       CAPPED_COUNTS_VISIT_CAP: () => Ip,
+       reportCappedWasmFailure: () => Lp,
+       reportUncappedWasmFailure: () => xp,
+       reportWasmCrash: () => op,
+       reportWasmFailure: () => Sp
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L8-L34` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/213.js#L12) · [Before (L8-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/213.js#L8-L34)

```diff
-     ZC(36227);
-     var QC = ZC(4562),
-       wC = ZC(48),
-       bC = ZC(1593),
-       nC = ZC(1002),
-       fC = ZC.n(nC),
-       oC = ZC(3113),
-       qC = ZC(1078),
-       FC = ZC(1149),
-       WC = ZC(4525),
-       NC = ZC(1388),
-       MC = ZC(36234),
-       gC = ZC(1143),
-       SC = ZC(1284),
-       pC = ZC(1453),
-       PC = ZC(20),
- ... (11 more removed lines; see GitHub link above)
+     var Op = cp(3025);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L37-L81` → after: `L15-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L15-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/213.js#L15-L17) · [Before (L37-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/213.js#L37-L81)

```diff
-       var zC, ZC, nC, YC;
-       let {
-         gameNameWithVariation: dC,
-         close: mC,
-         initialDefaultGamemode: HC
-       } = CC;
-       const {
-         t: EC
-       } = (0, gC.y)(), lC = (0, pC.useNavigatePreserveSearch)(), [XC, cC] = (0, wC.useState)("Enter"), [uC, rC] = (0, wC.useState)(""), sC = wC.useRef(null), TC = null === (zC = xC.d[dC]) || void 0 === zC ? void 0 : zC.showWorldsInsteadOfCustomLobbies, aC = TC ? 1 : null === (ZC  … [truncated]
-       HC || (HC = "classic_creative" === dC || "classic_creativeFlat" === dC ? "creative" : "classic" === dC ? "peaceful" : "survival");
-       const jC = {
-         baseOptions: {
-           gameNameWithVariation: TC ? "classic" : dC,
-           name: "",
-           visibility: "unlisted"
-         },
- ... (29 more removed lines; see GitHub link above)
+       (0, Op.reportClientError)("wasm_load", pp.message, pp.code)
+     }
+     const Ip = Op.b - 4;
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L83-L553` → after: `L19-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L19-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/213.js#L19-L20) · [Before (L83-L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/213.js#L83-L553)

```diff
-       function OC(CC, zC) {
-         LC({
-           ...yC,
-           baseOptions: {
-             ...yC.baseOptions,
-             [CC]: zC
-           }
-         })
-       }
- 
-       function kC(CC, zC) {
-         LC({
-           ...yC,
-           listedOptions: {
-             ...yC.listedOptions,
-             [CC]: zC
- ... (455 more removed lines; see GitHub link above)
+     function Sp(pp, ip, cp) {
+       (0, Op.reportClientError)(pp, ip, cp, !1)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L556-L595` → after: `L23-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/213.js#L23-L24) · [Before (L556-L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/213.js#L556-L595)

```diff
-     function WC(CC) {
-       let {
-         ownedSchematics: zC,
-         currentWorldSchematicId: ZC,
-         onClose: wC
-       } = CC;
-       const {
-         t: nC
-       } = (0, bC.y)(), [fC, WC] = (0, QC.useState)(null);
-       return (0, qC.jsxs)("div", {
-         className: "SchematicListWindow",
-         children: [null === fC && (0, qC.jsxs)(qC.Fragment, {
-           children: [(0, qC.jsx)("h1", {
-             className: "SchematicPopupTitle",
-             children: nC("worldBuilder:schematicList")
-           }), (0, qC.jsx)("h2", {
- ... (24 more removed lines; see GitHub link above)
+     function xp(pp, ip, cp) {
+       (0, Op.reportClientError)(pp, ip, cp, !1, 1 / 0)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L598-L613` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/213.js#L27-L28) · [Before (L598-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/213.js#L598-L613)

```diff
-     function NC(CC) {
-       let {
-         ownedSchematics: zC,
-         currentWorldSchematicId: ZC,
-         onClose: QC
-       } = CC;
-       wC.NotificationProvider.showCustomPopup({
-         body: CC => (0, qC.jsx)(WC, {
-           ownedSchematics: zC,
-           currentWorldSchematicId: ZC,
-           onClose: CC
-         }),
-         middleScreenPopupClassName: "SchematicPopup",
-         onClose: QC,
-         unlockPointerKey: "schematicListPopup"
-       })
+     function Lp(pp, ip, cp) {
+       (0, Op.reportClientError)(pp, ip, cp, !1, Ip)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/213.js` (Changed code · before: `L615-L705` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1dR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3c4537942bea4755c44d5fa9273fa3f9e7c23c484bb3dbaaf875b5ab96072c1d) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/213.js#L30) · [Before (L615-L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/213.js#L615-L705)

```diff
-   },
-   36241: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       e: () => qC,
-       h: () => FC
-     });
-     ZC(48);
-     var QC = ZC(1002),
-       wC = ZC.n(QC),
-       bC = ZC(4562),
-       nC = ZC(310),
-       fC = ZC(1143),
-       oC = ZC(1056);
- 
-     function qC(CC) {
-       let {
- ... (75 more removed lines; see GitHub link above)
+   }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/214.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/214.js` (17 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25)

#### 1. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L4` → after: `L4-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L4-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/214.js#L4-L19) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/214.js#L4)

```diff
-   36234: (CC, zC, ZC) => {
+   41014: (pp, ip, cp) => {
+     function Op(pp, ip, cp) {
+       if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(pp, ip).getContext("2d", cp);
+       const Op = document.createElement("canvas");
+       return Op.width = pp, Op.height = ip, Op.getContext("2d", cp)
+     }
+ 
+     function op(pp, ip) {
+       return pp.getContext("2d", ip)
+     }
+     cp.d(ip, {
+       c: () => op,
+       e: () => Op
+     })
+   },
+   40978: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L9-L15` → after: `L23-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L23-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/214.js#L23-L182) · [Before (L9-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/214.js#L9-L15)

```diff
-     var QC = ZC(48),
-       wC = ZC(1307),
-       bC = ZC(1143),
-       nC = ZC(1295),
-       fC = ZC(3448),
-       oC = ZC(4873),
-       qC = ZC(1056);
+     const Op = 1 << 20,
+       op = 1 << 21,
+       Ip = 1024,
+       Sp = 2048;
+ 
+     function xp(pp, ip, cp) {
+       const xp = pp + Op,
+         Lp = ip + Ip,
+         Yp = cp + Op;
+       return xp < 0 || xp >= op || Yp < 0 || Yp >= op || Lp < 0 || Lp >= Sp ? -1 : (xp * op + Yp) * Sp + Lp
+     }
+   },
+   40976: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Op,
+       f: () => Sp,
+ ... (144 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L18-L51` → after: `L185-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L185-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/214.js#L185-L212) · [Before (L18-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/214.js#L18-L51)

```diff
-       let {
-         loading: zC,
-         schematics: ZC,
-         onSchematicPicked: QC,
-         selectedSchematicIdList: wC = [],
-         disableAutoExport: oC
-       } = CC;
-       const {
-         t: FC
-       } = (0, bC.y)();
-       return (0, qC.jsxs)("div", {
-         className: "SchematicList",
-         children: [zC && (0, qC.jsx)(nC.d, {}), !zC && 0 === ZC.length && (0, qC.jsx)("div", {
-           className: "NoSchematicsText",
-           children: FC("worldBuilder:noSavedSchematic")
-         }), !zC && ZC.map((CC => (0, qC.jsx)(fC.d, {
- ... (18 more removed lines; see GitHub link above)
+       if (0 === pp) return xp;
+       const ip = new Ip.c(Op.Yb);
+       for (let cp = 0; cp < Op.Yb; cp++) ip[cp] = pp >>> 8 * cp & 255;
+       return ip
+     }
+     class Yp {
+       constructor(pp, ip) {
+         this.input = void 0, this.net = void 0, this.worker = void 0, this.cmd = void 0, this.input = new Sp(ip, {
+           ptr: () => pp.VA(),
+           TA: () => pp.eSp(),
+           reserve: ip => pp.lSp(ip)
+         }), this.net = new Sp(ip, {
+           ptr: () => pp.CSp(),
+           TA: () => pp.MSp(),
+           reserve: ip => pp.QSp(ip)
+         }), this.worker = new Sp(ip, {
+ ... (12 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L55-L59` → after: `L266-L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L266-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/214.js#L266-L275) · [Before (L55-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/214.js#L55-L59)

```diff
-       let {
-         ownedSchematics: zC,
-         currentWorldSchematicId: ZC,
-         onClose: wC
-       } = CC;
+       return Ep.has(pp.site) ? pp.error instanceof WebAssembly.RuntimeError || (0, op.g)(pp.error) : !Np.has(pp.site) && pp.error instanceof Error
+     }
+     const fp = "events",
+       bp = [],
+       hp = "debugLog",
+       ap = "terrainTextures",
+       np = "sunShadowTextures",
+       Fp = new TextDecoder;
+ 
+     function gp(pp, ip) {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L61-L80` → after: `L277-L674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L277-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/214.js#L277-L674) · [Before (L61-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/214.js#L61-L80)

```diff
-         t: nC
-       } = (0, bC.y)(), [fC, WC] = (0, QC.useState)(null);
-       return (0, qC.jsxs)("div", {
-         className: "SchematicListWindow",
-         children: [null === fC && (0, qC.jsxs)(qC.Fragment, {
-           children: [(0, qC.jsx)("h1", {
-             className: "SchematicPopupTitle",
-             children: nC("worldBuilder:schematicList")
-           }), (0, qC.jsx)("h2", {
-             className: "SchematicPopupSubtitle",
-             children: nC("worldBuilder:clickSchematicForOptions")
-           }), (0, qC.jsx)("div", {
-             className: "SchematicPopupSchematicListContainer",
-             children: (0, qC.jsx)(FC, {
-               loading: !1,
-               schematics: zC,
- ... (4 more removed lines; see GitHub link above)
+         site: cp,
+         error: op,
+         header: Ip
+       } = pp, Sp = Ip ? (0, Op._d)(Ip.lastError) : "noFrame", xp = `CORE-${cp===Up?Sp:cp}`, Lp = null === op || void 0 === op ? "" : ` ${(0,Dp.h)(op)}`, Yp = {
+         site: cp,
+         wasmBuild: ip.wasm,
+         clientVersion: ip.client
+       };
+       return Ip && (Yp.status = String(Ip.status), Yp.lastError = Sp, Yp.lastErrorCode = String(Ip.lastError), Yp.lastErrorDetail = String(Ip.lastErrorDetail), Yp.errorCount = String(Ip.errorCount), Yp.frameIndex = String(Ip.frameIndex), Yp.tickIndex = String(Ip.tickIndex)), {
+         code: xp,
+         message: `core ${cp}, last error ${Sp};${Lp}`,
+         details: Yp
+       }
+     }
+     class Gp {
+       constructor(pp, ip, cp) {
+ ... (382 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L92-L93` → after: `L677-L788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L677-L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/214.js#L677-L788) · [Before (L92-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/214.js#L92-L93)

```diff
-         })]
-       })
+           Dp = pp + (0, Op.ue)(Lp)
+         }
+         return Ip
+       }
+       takeSends(pp) {
+         this.atSendsStop = !0;
+         try {
+           pp()
+         } catch (ip) {
+           this.crashOn(Cp, ip)
+         } finally {
+           this.atSendsStop = !1
+         }
+         return !this.stopped
+       }
+       forEachNetOut(pp) {
+ ... (96 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L97-L111` → after: `L800-L814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L800-L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/214.js#L800-L814) · [Before (L97-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/214.js#L97-L111)

```diff
-       let {
-         ownedSchematics: zC,
-         currentWorldSchematicId: ZC,
-         onClose: QC
-       } = CC;
-       wC.NotificationProvider.showCustomPopup({
-         body: CC => (0, qC.jsx)(WC, {
-           ownedSchematics: zC,
-           currentWorldSchematicId: ZC,
-           onClose: CC
-         }),
-         middleScreenPopupClassName: "SchematicPopup",
-         onClose: QC,
-         unlockPointerKey: "schematicListPopup"
-       })
+       op = {
+         scanned: !1
+       };
+       try {
+         return pp()
+       } finally {
+         op = null
+       }
+     }
+ 
+     function Sp() {
+       const pp = op;
+       if (null === pp) return (0, Op.f)();
+       const ip = (0, Op.f)(!pp.scanned);
+       return pp.scanned = !0, ip
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L114-L116` → after: `L817-L819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L817-L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/214.js#L817-L819) · [Before (L114-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/214.js#L114-L116)

```diff
-   41552: (CC, zC, ZC) => {
-     ZC.r(zC), ZC.d(zC, {
-       runClientGameMessage: () => KC
+   41025: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Op
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L118-L131` → after: `L821-L830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L821-L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/214.js#L821-L830) · [Before (L118-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/214.js#L118-L131)

```diff
-     var QC = ZC(3661),
-       wC = ZC(3677),
-       bC = ZC(1275),
-       nC = ZC(36234),
-       fC = ZC(4895),
-       oC = ZC(1002),
-       qC = ZC.n(oC),
-       FC = ZC(48),
-       WC = ZC(1307),
-       NC = ZC(1388),
-       MC = ZC(326),
-       gC = ZC(1143),
-       SC = ZC(1013),
-       pC = ZC(1056);
+     const Op = {
+       webgpu: "rust_webgpu",
+       webgl: "rust_webgl2",
+       webgl1: "rust_webgl1"
+     }
+   },
+   41046: (pp, ip, cp) => {
+     function Op() {
+       return cp(41049)
+     }
```
