# Changed — Bundle Modifications Report (Part 029 / 115)

- **Updated at**: `2026-11-27T00:54 JST`
- **Part**: `29 / 115` (**294** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 028](part-028.md) · [Part 030 →](part-030.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/219.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/219.js` (51 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0)

#### 17. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L79-L89` → after: `L716-L717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L716-L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/219.js#L716-L717) · [Before (L79-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/219.js#L79-L89)

```diff
-       return "object" === typeof UU && null !== UU && ("earth" === UU.type || Object.entries(UU).every((UU => {
-         let [XU, zU] = UU;
-         return "type" === XU || QU(zU)
-       })))
-     }
-     const FU = /(?:src|image|image-set|cross-fade)\(/i,
-       oU = /url\(\s*(?:"(?<doubleQuoted>[^"]*)"|'(?<singleQuoted>[^']*)'|(?<unquoted>[^"'()\s]*))\s*\)/gi,
-       DU = /url\(/gi,
-       EU = ["https://bloxd.invalid/", "http://bloxd.invalid/"],
-       YU = new Set([...EU.map((UU => new URL(UU).origin)), "https://fonts.gstatic.com"]),
-       NU = new Set(["https://i.imgur.com/MEcjBFQ.png"]);
+       return `#${HH.toString(16).padStart(6,"0")}`
+     }
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L92-L110` → after: `L720-L743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L720-L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/219.js#L720-L743) · [Before (L92-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/219.js#L92-L110)

```diff
-       var XU, zU;
-       if (UU.includes("\\") || FU.test(UU)) return !0;
-       const cU = [...UU.matchAll(oU)];
-       return cU.length !== (null !== (XU = null === (zU = UU.match(DU)) || void 0 === zU ? void 0 : zU.length) && void 0 !== XU ? XU : 0) || !cU.every((UU => {
-         var XU, zU, cU;
-         let {
-           groups: yU
-         } = UU;
-         return function(UU) {
-           try {
-             return EU.every((XU => {
-               const zU = new URL(UU, XU);
-               return "data:" === zU.protocol || YU.has(zU.origin) || NU.has(zU.href)
-             }))
-           } catch {
-             return !1
- ... (3 more removed lines; see GitHub link above)
+       const BH = /^#?([0-9a-f]{6})$/i.exec(HH.trim());
+       return BH ? parseInt(BH[1], 16) : null
+     }
+   },
+   34969: (HH, BH, LH) => {
+     LH.d(BH, {
+       c: () => XH,
+       g: () => GH
+     });
+     var AH = LH(45),
+       rH = LH(30),
+       SH = LH(34962),
+       hH = LH(34946);
+     const tH = "crosshairCode";
+     let zH = null;
+     const CH = new Set;
+ ... (8 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L114-L117` → after: `L747-L748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L747-L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/219.js#L747-L748) · [Before (L114-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/219.js#L114-L117)

```diff
-       var XU, zU, cU, yU, FU, oU, DU;
-       const EU = [...Object.values(null !== (XU = UU.textureOverrides) && void 0 !== XU ? XU : {}), ...Object.values(null !== (zU = UU.modelOverrides) && void 0 !== zU ? zU : {})],
-         YU = [...Object.values(null !== (cU = null === (yU = UU.customCss) || void 0 === yU ? void 0 : yU.fontFaces) && void 0 !== cU ? cU : {}), ...Object.values(null !== (FU = null === (oU = UU.customCss) || void 0 === oU ? void 0 : oU.classStyles) && void 0 !== FU ? FU : {})]. … [truncated]
-       return !EU.every(QU) || !Object.values(null !== (DU = UU.skyBoxes) && void 0 !== DU ? DU : {}).every(AU) || YU.some((UU => "string" === typeof UU && IU(UU)))
+       zH = HH, (0, hH.f)(HH) ? rH.e.removeItem(tH) : rH.e.setItem(tH, (0, SH.g)(HH));
+       for (const BH of CH) BH()
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L120-L137` → after: `L751-L761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L751-L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/219.js#L751-L761) · [Before (L120-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/219.js#L120-L137)

```diff
-     function aU(UU, XU) {
-       if (null === UU || "player" === XU || !pU(UU)) return UU;
-       const zU = {
-         ...UU
-       };
-       return UU.textureOverrides && (zU.textureOverrides = gU(UU.textureOverrides, QU, "texture")), UU.modelOverrides && (zU.modelOverrides = gU(UU.modelOverrides, QU, "model")), UU.skyBoxes && (zU.skyBoxes = gU(UU.skyBoxes, AU, "sky")), UU.customCss && (zU.customCss = function(U … [truncated]
-         const XU = UU => gU(UU, (UU => "string" === typeof UU && !IU(UU)), "CSS"),
-           {
-             fontFaces: zU,
-             classStyles: cU
-           } = tU(UU) ? UU : {},
-           yU = {};
-         for (const [QU, AU] of Object.entries(tU(cU) ? cU : {})) yU[QU] = XU(AU);
-         return {
-           fontFaces: (Array.isArray(zU) ? zU : []).map(XU),
-           classStyles: yU
- ... (2 more removed lines; see GitHub link above)
+     function GH() {
+       const [HH, BH] = (0, AH.useState)(EH);
+       return (0, AH.useEffect)((() => {
+         const HH = () => {
+           BH(EH())
+         };
+         return HH(), LH = HH, CH.add(LH), () => {
+           CH.delete(LH)
+         };
+         var LH
+       }), []), HH
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L141` → after: `L774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/219.js#L774) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/219.js#L141)

```diff
-       return "object" === typeof UU && null !== UU && !Array.isArray(UU)
+       return HH === (0, rH.c)().JBH ? (0, rH.c)().lF : HH
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L144-L160` → after: `L777-L783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L777-L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/219.js#L777-L783) · [Before (L144-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/219.js#L144-L160)

```diff
-     function gU(UU, XU, zU) {
-       const cU = Object.entries(tU(UU) ? UU : {}),
-         yU = cU.filter((UU => {
-           let [, zU] = UU;
-           return !XU(zU)
-         }));
-       if (yU.length > 0) {
-         const UU = yU.map((UU => {
-           let [XU] = UU;
-           return XU
-         }));
-         console.warn(`Ignoring a custom game texture pack's ${zU} files that name another site: ${UU.join(", ")}`)
-       }
-       return Object.fromEntries(cU.filter((UU => {
-         let [, zU] = UU;
-         return XU(zU)
- ... (1 more removed lines; see GitHub link above)
+     function hH(HH) {
+       return !(0, AH.M)(HH) && SH(HH) === (0, rH.c)().lF
+     }
+     const tH = "gravity";
+ 
+     function zH() {
+       return (0, rH.c)().physics[tH][1]
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L163` → after: `L786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/219.js#L786) · [Before (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/219.js#L163)

```diff
-   53776: (UU, XU, zU) => {
+   37608: (HH, BH, LH) => {
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L165-L167` → after: `L788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/219.js#L788) · [Before (L165-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/219.js#L165-L167)

```diff
-       d: () => pU,
-       e: () => GU,
-       h: () => kU
+       c: () => VH
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L169-L178` → after: `L790-L807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L790-L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/219.js#L790-L807) · [Before (L169-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/219.js#L169-L178)

```diff
-     var cU = zU(1079),
-       yU = zU(2219),
-       QU = zU(3612),
-       AU = zU(3626),
-       FU = zU(34948),
-       oU = zU(34945),
-       DU = zU(53774),
-       EU = zU(42098),
-       YU = zU(42073),
-       NU = zU(5629);
+     var AH = LH(37617),
+       rH = LH(176),
+       SH = LH(5335),
+       hH = LH(37626),
+       tH = LH(37326),
+       zH = LH(37656),
+       CH = LH(37633),
+       EH = LH(330),
+       XH = LH.n(EH),
+       GH = LH(3038),
+       YH = LH(37654),
+       uH = LH(18),
+       QH = LH(15),
+       WH = LH(37640),
+       MH = LH(37642),
+       xH = LH(37648),
+ ... (2 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L180-L181` → after: `L809-L819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L809-L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/219.js#L809-L819) · [Before (L180-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/219.js#L180-L181)

```diff
-       pack: null,
-       gameSource: null
+       stop: () => TH,
+       fade: () => TH,
+       rate: () => TH,
+       stopsAtOnce: () => !1,
+       isAlive: () => !1,
+       getDurationMs: () => 0,
+       getVolume: () => 0,
+       getRelativeVolume: () => 0,
+       setRelativeVolume: () => TH,
+       setPannerAttr: () => TH,
+       setPosition: () => TH
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L185` → after: `L823-L828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L823-L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/219.js#L823-L828) · [Before (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/219.js#L185)

```diff
-         this.host = UU, this.ready = void 0, this.state = IU, this.playerPack = null, this.onGamePack = !1, this.confirmGamePack = null, this.skippedKey = null, this.ownAnnouncements = new Set, this.listeners = new Map, this.ownListeners = new Set, this.changes = 0, this.picks =  … [truncated]
+         this._howl = void 0, this._volumeMultiplier = void 0, this._loadFailed = !1, this._unloaded = !1, this._volumeMultiplier = new zH.f, this._howl = (0, tH.countDecodesAs)(new SH.Howl({
+           src: [...(0, AH.v)(HH).src],
+           pool: 15
+         }), "sound"), this._howl.once("loaderror", (() => {
+           this._loadFailed = !0
+         }))
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L187-L190` → after: `L830-L890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L830-L890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/219.js#L830-L890) · [Before (L187-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/219.js#L187-L190)

```diff
-       readyWithin(UU) {
-         return Promise.race([this.ready, new Promise((XU => {
-           setTimeout(XU, UU)
-         }))])
+       play() {
+         let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         const BH = this._howl.play(hH.b);
+         HH && this._howl.loop(!0, BH);
+         let LH = 1;
+         this._howl.volume(this._volumeMultiplier.getTotalMultipliedVal(), BH);
+         const AH = {
+           stop: () => {
+             var HH;
+             return null === (HH = this.liveHowl()) || void 0 === HH || HH.stop(BH), AH
+           },
+           fade: (HH, LH, rH) => {
+             var SH;
+             return null === (SH = this.liveHowl()) || void 0 === SH || SH.fade(HH, LH, rH, BH), AH
+           },
+           rate: HH => {
+ ... (45 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L192-L193` → after: `L892-L893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L892-L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/219.js#L892-L893) · [Before (L192-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/219.js#L192-L193)

```diff
-       current() {
-         return this.state
+       liveHowl() {
+         return this._unloaded ? null : this._howl
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L195-L199` → after: `L895-L896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L895-L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/219.js#L895-L896) · [Before (L195-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/219.js#L195-L199)

```diff
-       playerState() {
-         return {
-           pack: this.playerPack,
-           gameSource: null
-         }
+       loaded() {
+         return "loaded" === this._howl.state()
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L201-L204` → after: `L898-L901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L898-L901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/219.js#L898-L901) · [Before (L201-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/219.js#L201-L204)

```diff
-       onPlayerPackChange(UU) {
-         return this.ownListeners.add(UU), () => {
-           this.ownListeners.delete(UU)
-         }
+       unloadOnceIdle() {
+         (0, hH.d)(this._howl, (() => {
+           this._unloaded = !0
+         }))
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L206-L207` → after: `L903-L904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L903-L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/219.js#L903-L904) · [Before (L206-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/219.js#L206-L207)

```diff
-       isUsingCustomGameTexturePack(UU) {
-         return (0, YU.h)(this.state, UU)
+       setGlobalVolume(HH) {
+         this._volumeMultiplier.setMultiplierType("globalVolume", HH), this._howl.volume(HH)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L209-L210` → after: `L906-L933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L906-L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/219.js#L906-L933) · [Before (L209-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/219.js#L209-L210)

```diff
-       setGamePackConfirm(UU) {
-         this.confirmGamePack = UU
+       _setPannerAttr(HH) {
+         let {
+           id: BH,
+           coneInnerAngle: LH = 360,
+           coneOuterAngle: AH = 360,
+           coneOuterGain: rH = 0,
+           distanceModel: SH = "inverse",
+           maxDistance: hH = 1e3,
+           panningModel: tH = "HRTF",
+           refDistance: zH = YH.i,
+           rolloffFactor: CH = 1
+         } = HH;
+         const EH = this.liveHowl();
+         if (null === EH) return;
+         EH.pannerAttr({
+           coneOuterAngle: AH
+ ... (12 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L212-L217` → after: `L935-L941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L935-L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/219.js#L935-L941) · [Before (L212-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/219.js#L212-L217)

```diff
-       subscribe(UU) {
-         return this.listeners.set(UU, null), this.ready.then((() => {
-           this.deliver(UU)
-         })), () => {
-           this.listeners.delete(UU)
-         }
+     }
+     const VH = new class {
+       constructor() {
+         this.stereoSounds = {}, this.spatialSounds = {}, this.spatialVoices = new WH.b, this.idlePreloads = new Set, this.idlePreloadGeneration = 0, uH.k.subscribe("appManagerUpdated|soundVolume", (HH => {
+           const BH = Object.values(this.stereoSounds).concat(Object.values(this.spatialSounds));
+           for (const LH of BH) LH.setGlobalVolume(HH)
+         }))
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L219-L279` → after: `L943-L955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L943-L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/219.js#L943-L955) · [Before (L219-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/219.js#L219-L279)

```diff
-       async setPlayerPack(UU) {
-         const XU = tU(UU) ? null : UU;
-         this.picks++, this.playerPicked = !0, this.ownChanges++, this.setOwn(XU), this.change({
-           pack: XU,
-           gameSource: null
-         }, !1);
-         const zU = await this.storePlayerPack(XU);
-         return zU && this.announce(), zU
-       }
-       async packForGame(UU, XU, zU) {
-         await this.readyWithin(Math.max(0, (null !== zU && void 0 !== zU ? zU : performance.now() + EU.c) - performance.now()));
-         const yU = ++this.picks,
-           QU = (0, cU.l)(UU) ? (0, cU.p)(UU) : null;
-         if (null === QU) return void this.usePlayerPack();
-         let AU;
-         const FU = function(UU) {
- ... (45 more removed lines; see GitHub link above)
+       play(HH, BH) {
+         var LH;
+         let SH, hH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (LH = (0, GH.c)()) || void 0 === LH ? void 0 : LH.lF,
+           tH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : YH.f,
+           zH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : YH.i,
+           EH = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
+         var uH;
+         (0, GH.c)() ? SH = !!Array.isArray(hH) || (0, CH.b)(hH) !== (null === (uH = (0, GH.c)()) || void 0 === uH ? void 0 : uH.lF): SH = !1;
+         const QH = (0, AH.o)(HH),
+           MH = this.loadSound(SH ? this.spatialSounds : this.stereoSounds, HH);
+         if (!SH) {
+           const HH = MH.play(EH);
+           return HH.setRelativeVolume(BH), HH
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L281-L286` → after: `L957-L960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L957-L960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/219.js#L957-L960) · [Before (L281-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/219.js#L281-L286)

```diff
-       }
-       async readPlayerPack() {
-         let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
-         if (null !== UU && this.ownAnnouncements.delete(UU)) return;
-         await this.ready;
-         const XU = this.ownChanges;
+         const xH = (0, GH.c)(),
+           vH = Array.isArray(hH) ? hH : xH.pT.hT(hH),
+           UH = xH.pT.hT(xH.lF);
+         if (!vH || XH().sqrDist(vH, UH) > tH * tH) return TH;
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L288-L291` → after: `L962-L983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L962-L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/219.js#L962-L983) · [Before (L288-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/219.js#L288-L291)

```diff
-         try {
-           zU = await this.host.store.getItem(AU.e, !0)
-         } catch (yU) {
-           return void this.host.warn("the stored texture pack didn't read again: the pack in play stays", yU)
+         if (!EH) {
+           if (!this.spatialVoices.admit({
+               group: PH.has(QH) ? null : (0, WH.e)(HH),
+               loudness: (0, WH.d)(BH, XH().Ot(vH, UH), zH),
+               startMs: performance.now(),
+               getDurationMs: () => {
+                 var HH, BH;
+                 return null !== (HH = null === (BH = VH) || void 0 === BH ? void 0 : BH.getDurationMs()) && void 0 !== HH ? HH : 0
+               },
+               isAlive: () => {
+                 var HH, BH;
+                 return null !== (HH = null === (BH = VH) || void 0 === BH ? void 0 : BH.isAlive()) && void 0 !== HH && HH
+               },
+               canStop: () => {
+                 var HH, BH;
+                 return null !== (HH = null === (BH = VH) || void 0 === BH ? void 0 : BH.stopsAtOnce()) && void 0 !== HH && HH
+ ... (6 more added lines; see GitHub link above)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L293-L298` → after: `L985-L987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L985-L987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/219.js#L985-L987) · [Before (L293-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/219.js#L293-L298)

```diff
-         if (this.kp || this.ownChanges !== XU) return;
-         const cU = gU(zU);
-         (0, NU.d)(cU, this.playerPack) || (this.ownChanges++, this.setOwn(cU), this.onGamePack || this.change({
-           pack: cU,
-           gameSource: null
-         }, !1))
+         return VH = MH.play(EH), VH.setRelativeVolume(BH), VH.setPannerAttr({
+           refDistance: zH
+         }), VH.setPosition([vH[0], vH[1] + rH.g.iW * rH.g.playerEyeToHeightRatio, vH[2]]), VH
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L300-L301` → after: `L989-L992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L989-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/219.js#L989-L992) · [Before (L300-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/219.js#L300-L301)

```diff
-       joinedWithout() {
-         this.picks++
+       preload(HH) {
+         const BH = (0, AH.s)(HH) ? [HH] : (0, AH.x)(HH);
+         if (0 === BH.length) throw new Error(`Invalid sound name ${HH} (no sound has it or starts with it)`);
+         for (const LH of BH) this.loadSound(this.stereoSounds, LH)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L303-L328` → after: `L994-L1010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L994-L1010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/219.js#L994-L1010) · [Before (L303-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/219.js#L303-L328)

```diff
-       dispose() {
-         this.kp = !0, this.listeners.clear()
-       }
-       async readStored() {
-         const {
-           store: UU,
-           warn: XU
-         } = this.host;
-         await Promise.all([!1 === this.host.oneShot ? void 0 : (0, oU.g)(UU, !0, (UU => {
-           XU("the custom game's texture pack wasn't removed from storage", UU)
-         })).then((UU => {
-           this.takeOneShot(UU)
-         }), (UU => {
-           XU("the custom game's texture pack didn't read: the player's own shows", UU)
-         })), UU.getItem(AU.e, !0).then((UU => {
-           this.takeStoredOwn(UU)
- ... (10 more removed lines; see GitHub link above)
+       preloadAtIdle(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : vH.e;
+         const LH = HH.filter((HH => !this.idlePreloads.has(HH)));
+         for (const rH of LH) this.idlePreloads.add(rH);
+         const AH = this.idlePreloadGeneration;
+         (0, xH.b)(LH, {
+           ...BH,
+           xB: () => AH !== this.idlePreloadGeneration,
+           fetchFile: HH => {
+             this.idlePreloads.delete(HH);
+             try {
+               return this.preload(HH), Promise.resolve()
+             } catch (BH) {
+               return Promise.reject(BH)
+             }
+           }
+ ... (1 more added lines; see GitHub link above)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L330-L365` → after: `L1012-L1018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R1012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L1012-L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/219.js#L1012-L1018) · [Before (L330-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/219.js#L330-L365)

```diff
-       takeStoredOwn(UU) {
-         if (this.playerPicked || this.kp) return;
-         if (this.ownChanges++, this.setOwn(gU(UU)), this.onGamePack) return;
-         const XU = {
-           pack: this.playerPack,
-           gameSource: null
-         };
-         0 === this.changes ? this.state = XU : this.change(XU, !1)
-       }
-       async update() {
-         const UU = this.playerPack,
-           XU = null === UU || void 0 === UU ? void 0 : UU.metaData.id;
-         if (!UU || !XU || !this.host.fetchLatest || XU === yU.b || XU === yU.p.CUSTOM) return;
-         const zU = yU.s[XU];
-         if (void 0 === zU || UU.metaData.version >= zU) return;
-         let cU;
- ... (20 more removed lines; see GitHub link above)
+       loadSound(HH, BH) {
+         const LH = HH[BH];
+         if (LH) return LH;
+         const rH = this.makeSound(HH, BH);
+         for (const hH of null !== (SH = (0, AH.t)(BH)) && void 0 !== SH ? SH : []) {
+           var SH;
+           HH[hH] || this.makeSound(HH, hH)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L368-L379` → after: `L1022-L1025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R1022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L1022-L1025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/219.js#L1022-L1025) · [Before (L368-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/219.js#L368-L379)

```diff
-       usePlayerPack() {
-         this.onGamePack && this.change({
-           pack: this.playerPack,
-           gameSource: null
-         }, !1)
-       }
-       async storePlayerPack(UU) {
-         try {
-           return null === UU ? (await this.host.store.removeItem(AU.e), !0) : await this.host.store.setItem(AU.e, UU)
-         } catch (XU) {
-           return this.host.warn("the texture pack wasn't stored: it shows until the page reloads", XU), !1
-         }
+       makeSound(HH, BH) {
+         (0, vH.i)(BH);
+         const LH = new UH(BH);
+         return LH.setGlobalVolume(QH.c.get("soundVolume")), HH[BH] = LH, LH
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L381-L385` → after: `L1027-L1028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R1027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L1027-L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/219.js#L1027-L1028) · [Before (L381-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/219.js#L381-L385)

```diff
-       change(UU, XU) {
-         if (!this.kp) {
-           this.changes++, this.onGamePack = XU, this.state = UU;
-           for (const UU of [...this.listeners.keys()]) this.deliver(UU)
-         }
+       freeSoundsAfterGame() {
+         this.idlePreloadGeneration++, this.idlePreloads.clear(), this.freeSounds()
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L387-L395` → after: `L1030-L1032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R1030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L1030-L1032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/219.js#L1030-L1032) · [Before (L387-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/219.js#L387-L395)

```diff
-       deliver(UU) {
-         if (!this.kp && this.listeners.has(UU) && this.listeners.get(UU) !== this.state) {
-           this.listeners.set(UU, this.state);
-           try {
-             UU(this.state)
-           } catch (XU) {
-             this.host.warn("a texture pack listener threw", XU)
-           }
-         }
+       freeSounds() {
+         for (const HH of [this.stereoSounds, this.spatialSounds])
+           for (const [BH, LH] of Object.entries(HH)) !MH.d.has((0, AH.o)(BH)) && LH.loaded() && (LH.unloadOnceIdle(), delete HH[BH])
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L398-L411` → after: `L1035-L1039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R1035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L1035-L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/219.js#L1035-L1039) · [Before (L398-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/219.js#L398-L411)

```diff
-     async function aU(UU, XU, zU) {
-       const cU = (0, oU.c)(await zU.fetchPack(XU));
-       if (null !== cU) return {
-         pack: cU,
-         key: XU
-       };
-       const yU = await zU.packKey(UU);
-       if (null === yU) return null;
-       const QU = (0, oU.c)(await zU.fetchPack(yU));
-       if (null === QU) throw new Error(`no texture pack at ${yU}`);
-       return {
-         pack: QU,
-         key: yU
-       }
+   },
+   37694: (HH, BH, LH) => {
+     function AH(HH, BH) {
+       var LH, AH, rH, SH, hH, tH, zH, CH;
+       return HH.name === BH.name && ((null === (LH = HH.attributes) || void 0 === LH || null === (AH = LH.customAttributes) || void 0 === AH ? void 0 : AH.stackKey) === (null === (rH = BH.attributes) || void 0 === rH || null === (SH = rH.customAttributes) || void 0 === SH ? void  … [truncated]
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L413` → after: `L1041-L1045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R1041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L1041-L1045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/219.js#L1041-L1045) · [Before (L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/219.js#L413)

```diff
- 
+     LH.d(BH, {
+       d: () => AH
+     })
+   },
+   37798: (HH, BH, LH) => {
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L415` → after: `L1047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R1047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/219.js#L1047) · [Before (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/219.js#L415)

```diff
-       return null === UU || UU.metaData.id === yU.b
+       return HH.includes("Leaf Bed")
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L419-L420` → after: `L1051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R1051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L1051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/219.js#L1051) · [Before (L419-L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/219.js#L419-L420)

```diff
-       const XU = (0, oU.c)(UU);
-       return tU(XU) ? null : XU
+       return / Bed(?: Head)?(?:\||$)/.test(HH) && !AH(HH)
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L422-L428` → after: `L1053-L1055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R1053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L1053-L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/219.js#L1053-L1055) · [Before (L422-L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/219.js#L422-L428)

```diff
-     async function kU(UU) {
-       let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QU.e;
-       if (null === UU.pack) return null;
-       const {
-         packAssets: cU
-       } = await Promise.all([zU.e(221), zU.e(52)]).then((() => zU(64155)));
-       return cU(UU, XU)
+ 
+     function SH(HH) {
+       return HH.includes(" Strongbed")
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L432-L437` → after: `L1059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R1059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L1059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/219.js#L1059) · [Before (L432-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/219.js#L432-L437)

```diff
-       const XU = (0, AU.A)();
-       return null === XU ? () => {} : (XU.onmessage = XU => {
-         UU.readPlayerPack((0, FU.d)(XU.data))
-       }, () => {
-         XU.close()
-       })
+       return AH(HH) || rH(HH) || SH(HH)
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L439` → after: `L1061-L1088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R1061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L1061-L1088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/219.js#L1061-L1088) · [Before (L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/219.js#L439)

```diff
-   }
+     LH.d(BH, {
+       d: () => hH,
+       h: () => AH,
+       l: () => SH,
+       m: () => rH
+     })
+   },
+   37793: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => CH
+     });
+     var AH = LH(37798),
+       rH = LH(9940);
+     const SH = [],
+       hH = [],
+       tH = [],
+ ... (12 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/220.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/220.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557)

#### 1. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/220.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/220.js#L4)

```diff
-   34956: (UU, XU, zU) => {
+   35006: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L6-L9` → after: `L6-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L6-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/220.js#L6-L29) · [Before (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/220.js#L6-L9)

```diff
-       packDisplayName: () => aU,
-       packModelMessage: () => tU,
-       packModelSummary: () => kU,
-       refusedPackModels: () => gU
+       MAX_BLOCK_ID: () => AH,
+       armourReductionOf: () => nH,
+       clipSizeOf: () => jH,
+       creativeAltNames: () => hB,
+       creativeCategoryOf: () => pH,
+       creativeItemCategories: () => tH,
+       creativeItemCategoryIcons: () => zH,
+       creativeItemIds: () => iH,
+       descriptionOf: () => gH,
+       displayNameOf: () => qH,
+       dropsNothing: () => wH,
+       enchantmentPerksOf: () => sH,
+       gunTypeOf: () => DH,
+       harvestsNullLevelOf: () => ZH,
+       isDevOnlyItem: () => LB,
+       itemIsDisabled: () => rB,
+ ... (8 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L11-L82` → after: `L31-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L31-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/220.js#L31-L221) · [Before (L11-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/220.js#L11-L82)

```diff
-     var cU = zU(34959),
-       yU = zU(34968);
-     const QU = "DRACO",
-       AU = 0,
-       FU = 1,
-       oU = 0,
-       DU = 1,
-       EU = 32768;
- 
-     function YU(UU) {
-       const XU = new DataView(UU.buffer, UU.byteOffset, UU.byteLength);
-       let zU = 0;
-       const cU = () => {
-           if (zU >= UU.byteLength) throw new RangeError("past the stream");
-           return UU[zU++]
-         },
- ... (56 more removed lines; see GitHub link above)
+     const AH = 8574,
+       rH = "''WL&M3GT%cM)MK$YE1aM2'I+F+O_*c^*=%'%%%%%%%K>F>%%)K=H=%%[*W5_5['[R$ZW$S%[X&NH&L5C$W$5,KS&%]]&I%^Z&NM&b7TK$Y6G,Y>%M%M7P6$WD%Vc$LZ$OY$%+Q[&;S$/G$N&W%F$W%F$S$N&G'.F$c%`'1+%)41(1(+49$(2=b$/`N,RN,K/c_&Q0EC$O(''P`&O$%-%%^R2-*)&%;NV/ZT%IT%3XM$%%%%%_U$%b73.%%`-T-%%%%%%L9$M8X7 … [truncated]
+       SH = "S-$SW$$R&$SH2$)$'$)$4$)$X*$I6$-$%$%$cD1$WE1$%%%$]5$b7$RI4$%$%$%$%$%$%$%$%$%$)$N+$EG&$ZT%$IT%$3$XM$$%$%$%$%$%$Z1$Y[$$Oa0$'$'$'$-&+&%&)&4&1&(&1*(*+&4&9&$&(&2&=&E$&'&%&%&%&1%_%$TW3$%$D.$$$Uc&$S$$S$$S$$S$$S$$S$$S$&S$&S$$S$$S$$S$$S$$S$$S$$S$$^1$S$$]I($%$M/$+$N-$%$Z$$%$I6$3 … [truncated]
+       hH = "Crafting Table|Cauldron|Sign|Iron Nugget|Gold Nugget|Diamond Nugget|Moonstone Nugget|Iron Ingot|Gold Ingot|Draugr Knight Sword|Cooked Potato|Cooked Beef|Raw Lamb|Cooked Lamb|Gold Watermelon Stag Antlers|Bear Fur|Cave Golem Eye|Frost Golem Eye|Draugr Knight Heart|Fur B … [truncated]
+       tH = ["building", "colours", "nature", "decoration", "utility", "tools", "combat", "food", "mobs", "materials", "worldTools"],
+       zH = {
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
+ ... (175 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L84-L151` → after: `L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/220.js#L223) · [Before (L84-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/220.js#L84-L151)

```diff
-         if (pU !== DU) return null;
-         cU(), NU < 2 && YU();
-         const gU = YU();
-         return {
-           faces: YU(),
-           vertices: gU,
-           minor: NU
-         }
-       } catch {
-         return null
-       }
-     }
- 
-     function NU(UU, XU, zU) {
-       var cU, yU;
-       if (null === (cU = null === (yU = UU.extensionsUsed) || void 0 === yU ? void 0 : yU.includes("KHR_draco_mesh_compression")) || void 0 === cU || !cU) return null;
- ... (52 more removed lines; see GitHub link above)
+         SB = BH
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/221.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/221.js` (33 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L4-L8` → after: `L4-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/221.js#L4-L9) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/221.js#L4-L8)

```diff
-   34959: (UU, XU, zU) => {
-     zU.d(XU, {
-       d: () => OU,
-       g: () => qU,
-       i: () => wU
+   37093: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       capturePreviewPicture: () => MH,
+       holdPreviewsLow: () => hH.f,
+       openLiveFigure: () => WH,
+       rasterNametag: () => TH
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L10-L40` → after: `L11-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L11-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/221.js#L11-L20) · [Before (L10-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/221.js#L10-L40)

```diff
-     var cU = zU(34968);
-     const yU = {
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
-       QU = {
-         items: 1024,
-         perFile: 1024,
- ... (15 more removed lines; see GitHub link above)
+     var AH = LH(1182),
+       rH = LH(2760),
+       SH = LH(35016),
+       hH = LH(37100),
+       tH = LH(37105),
+       zH = LH(37110),
+       CH = LH(37157),
+       EH = LH(3840);
+     const XH = 480,
+       GH = 16,
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L42-L43` → after: `L22-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L22-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/221.js#L22-L24) · [Before (L42-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/221.js#L42-L43)

```diff
-         type: "VEC2",
-         componentTypes: [5126, 5121, 5123]
+         minGapMs: 250,
+         now: () => performance.now(),
+         skip: hH.p
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L45-L48` → after: `L26-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L26-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/221.js#L26-L94) · [Before (L45-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/221.js#L45-L48)

```diff
-       NU = {
-         TANGENT: {
-           type: "VEC4",
-           componentTypes: [5126]
+       uH = 30,
+       QH = 1e4;
+ 
+     function WH(HH, BH, LH, zH) {
+       const CH = SH.h.openCharacter(HH, "player");
+       let EH = !1,
+         XH = !1,
+         uH = null;
+       const WH = async () => {
+         const HH = CH.dev.canvas(),
+           BH = await (AH = () => HH.isConnected && function(HH) {
+             const {
+               x: BH,
+               width: LH
+             } = xH(HH);
+             if (0 === LH || 0 === HH.height) return !1;
+ ... (53 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L50-L67` → after: `L96-L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L96-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/221.js#L96-L100) · [Before (L50-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/221.js#L50-L67)

```diff
-         TEXCOORD_1: YU,
-         TEXCOORD_2: YU,
-         TEXCOORD_3: YU,
-         TEXCOORD_4: YU,
-         TEXCOORD_5: YU
-       },
-       IU = new Set(cU.i.map((UU => {
-         let [XU] = UU;
-         return XU
-       }))),
-       pU = {
-         1: "line",
-         2: "line loop",
-         3: "line strip",
-         5: "triangle strip",
-         6: "triangle fan"
- ... (2 more removed lines; see GitHub link above)
+         close: () => {
+           EH = !0, CH.close()
+         }
+       }
+     }
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L69-L70` → after: `L102-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L102-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/221.js#L102-L128) · [Before (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/221.js#L69-L70)

```diff
-     function tU(UU) {
-       return UU.toLocaleString("en-US")
+     function MH(HH, BH) {
+       return new Promise((LH => {
+         const AH = rH => {
+           (0, hH.d)((() => {
+             if (!BH()) return void LH(null);
+             const SH = HH.isConnected ? function(HH) {
+               let {
+                 canvas: BH,
+                 x: LH,
+                 width: AH
+               } = HH;
+               if (0 === AH || 0 === BH.height) return null;
+               const rH = Math.min(1, XH / BH.height),
+                 SH = document.createElement("canvas");
+               SH.width = Math.max(1, Math.round(AH * rH)), SH.height = Math.max(1, Math.round(BH.height * rH));
+               const hH = SH.getContext("2d", {
+ ... (11 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L73-L74` → after: `L131-L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L131-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/221.js#L131-L137) · [Before (L73-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/221.js#L73-L74)

```diff
-     function gU(UU, XU, zU) {
-       return UU > XU ? `has ${tU(UU)} ${zU} (the limit is ${tU(XU)})` : null
+     function xH(HH) {
+       const BH = Math.min(HH.width, Math.round(HH.height * EH.c));
+       return {
+         canvas: HH,
+         x: Math.round((HH.width - BH) / 2),
+         width: BH
+       }
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L77-L78` → after: `L141-L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L141-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/221.js#L141-L166) · [Before (L77-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/221.js#L77-L78)

```diff
-     function kU(UU, XU) {
-       return Number.isInteger(UU) && UU >= 0 && UU < (null !== XU && void 0 !== XU ? XU : 0)
+     function PH(HH) {
+       for (let BH = 3; BH < HH.length; BH += 4)
+         if (0 !== HH[BH]) return !0;
+       return !1
+     }
+     async function TH(HH) {
+       var BH;
+       await CH.h.load();
+       const LH = {
+           name: HH.name,
+           info: null,
+           colour: null !== (BH = HH.nameColour) && void 0 !== BH ? BH : "default",
+           ranks: HH.ranks,
+           effects: [],
+           health: null,
+           Ot: null,
+ ... (10 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L82` → after: `L178-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L178-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/221.js#L178-L182) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/221.js#L82)

```diff
-       return Number.isInteger(UU) && UU >= 0
+       var BH;
+       return {
+         ...hH.store,
+         yaw: hH.store.yaw + (null !== (BH = AH.c[HH].previewYaw) && void 0 !== BH ? BH : 0)
+       }
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L86` → after: `L200-L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L200-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/221.js#L200-L342) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/221.js#L86)

```diff
-       return void 0 !== UU && (!Array.isArray(UU) || UU.length > XU)
+       HH instanceof Promise ? HH.then(BH).catch((HH => {
+         console.error("Couldn't open the preview", HH)
+       })) : BH(HH)
+     }
+     class zH {
+       constructor(HH) {
+         this.opened = null, this.view = null, this.size = null, this.closed = !1, tH(HH, (HH => {
+           this.closed ? HH.close() : (this.opened = HH, null !== this.size && HH.resize(this.size.width, this.size.height), null !== this.view && HH.show(this.view))
+         }))
+       }
+       show(HH) {
+         var BH;
+         this.view = HH, null === (BH = this.opened) || void 0 === BH || BH.show(HH)
+       }
+       resize(HH, BH) {
+         var LH;
+ ... (127 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L90` → after: `L346-L383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L346-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/221.js#L346-L383) · [Before (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/221.js#L90)

```diff
-       return "object" === typeof UU && null !== UU && Object.keys(UU).length > XU
+       return HH.getContext("2d", BH)
+     }
+     LH.d(BH, {
+       d: () => rH,
+       h: () => AH
+     })
+   },
+   37105: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => SH
+     });
+     const AH = 4e5,
+       rH = 2;
+ 
+     function SH(HH, BH, LH) {
+       let [SH, hH] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [HH, BH], tH = Math.min(Number.isFinite(LH) && LH > 0 ? LH : 1, rH);
+ ... (22 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L94-L95` → after: `L387-L388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L387-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/221.js#L387-L388) · [Before (L94-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/221.js#L94-L95)

```diff
-       var XU;
-       return `${UU.normalized?"normalized ":""}${null!==(XU=cU.g[UU.componentType])&&void 0!==XU?XU:UU.componentType} ${UU.type}`
+       rH = HH, SH++, (0, AH.e)();
+       for (const BH of hH) BH()
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L99-L103` → after: `L392-L418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L392-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/221.js#L392-L418) · [Before (L99-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/221.js#L99-L103)

```diff
-       const XU = XU => {
-         var zU;
-         return null !== (zU = UU[XU]) && void 0 !== zU ? zU : -1
-       };
-       return 255 === XU(0) && 216 === XU(1) ? "JPEG" : 82 === XU(0) && 73 === XU(1) && 87 === XU(8) && 69 === XU(9) ? "WebP" : 171 === XU(0) && 75 === XU(1) && 84 === XU(2) && 88 === XU(3) ? "KTX2" : "non-PNG"
+       hH.add(HH)
+     }
+   },
+   37100: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => QH,
+       f: () => EH,
+       i: () => YH,
+       j: () => XH,
+       k: () => WH,
+       l: () => uH,
+       p: () => GH
+     });
+     const AH = 30,
+       rH = 4;
+     let SH = 0,
+ ... (11 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L107` → after: `L422-L426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L422-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/221.js#L422-L426) · [Before (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/221.js#L107)

```diff
-       return UU.length >= 24 && [137, 80, 78, 71, 13, 10, 26, 10].every(((XU, zU) => UU[zU] === XU)) && 73 === UU[12] && 72 === UU[13] && 68 === UU[14] && 82 === UU[15]
+       HH && (tH = !0)
+     }
+ 
+     function GH() {
+       return tH
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L111` → after: `L430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/221.js#L430) · [Before (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/221.js#L111)

```diff
-       return /^[aeiou]/i.test(UU) ? `an ${UU}` : `a ${UU}`
+       hH = HH
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L115-L116` → after: `L434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/221.js#L434) · [Before (L115-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/221.js#L115-L116)

```diff
-       const XU = UU.byteStride;
-       return void 0 === XU || Number.isInteger(XU) && XU >= 4 && XU <= 252 && XU % 4 === 0
+       return !(SH > 0 && (hH || HH - zH < 1e3 / AH - rH)) && (zH = HH, !0)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L119-L124` → after: `L437-L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L437-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/221.js#L437-L438) · [Before (L119-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/221.js#L119-L124)

```diff
-     function eU(UU, XU, zU) {
-       var cU, yU;
-       const QU = null === (cU = UU.bufferViews) || void 0 === cU ? void 0 : cU[zU];
-       if (!QU || !XU || 0 !== QU.buffer) return null;
-       const AU = null !== (yU = QU.byteOffset) && void 0 !== yU ? yU : 0;
-       return !GU(AU) || !GU(QU.byteLength) || AU + QU.byteLength > XU.byteLength ? null : XU.subarray(AU, AU + QU.byteLength)
+     function QH(HH) {
+       CH.push(HH)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L127-L139` → after: `L441-L458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L441-L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/221.js#L441-L458) · [Before (L127-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/221.js#L127-L139)

```diff
-     function CU(UU, XU) {
-       var zU, yU, QU;
-       const AU = cU.o[XU.type],
-         FU = cU.d[XU.componentType];
-       if (!AU || !FU || !Number.isInteger(XU.count) || XU.count < 0) return !1;
-       if (void 0 === XU.bufferView) return !0;
-       const oU = null === (zU = UU.bufferViews) || void 0 === zU ? void 0 : zU[XU.bufferView],
-         DU = null !== (yU = XU.byteOffset) && void 0 !== yU ? yU : 0;
-       if (!oU || !GU(DU) || DU % FU !== 0) return !1;
-       const EU = AU * FU,
-         YU = null !== (QU = oU.byteStride) && void 0 !== QU ? QU : EU;
-       if (YU < EU) return !1;
-       return (0 === XU.count ? 0 : DU + YU * (XU.count - 1) + EU) <= oU.byteLength
+     function WH() {
+       if (0 === CH.length) return;
+       const HH = CH;
+       CH = [];
+       for (const LH of HH) try {
+         LH()
+       } catch (BH) {
+         console.warn("[bloxd-previews] an after-draw callback threw", BH)
+       }
+     }
+   },
+   37177: (HH, BH, LH) => {
+     function AH() {
+       return LH(37184)
+     }
+ 
+ ... (2 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L143` → after: `L462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/221.js#L462) · [Before (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/221.js#L143)

```diff
-       return UU > yU.fileBytes ? `is ${(UU/AU).toFixed(1)} MiB (the limit is ${yU.fileBytes/AU} MiB)` : null
+       return ["pl", "ru", "tr", "uk", "vi"].includes(HH)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L146-L201` → after: `L482-L499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L482-L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/221.js#L482-L499) · [Before (L146-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/221.js#L146-L201)

```diff
-     function qU(UU, XU) {
-       try {
-         return function(UU, XU) {
-           var zU, AU, YU, tU, GU, wU, qU, OU, SU, rU, uU, fU, iU, HU, MU, vU, VU;
-           const sU = Array.isArray(UU.extensionsUsed) && UU.extensionsUsed.includes("KHR_draco_mesh_compression");
-           if (function(UU, XU) {
-               var zU, cU;
-               const {
-                 items: yU,
-                 perFile: AU,
-                 surfaces: FU,
-                 few: oU,
-                 bounds: DU,
-                 attributeMembers: EU
-               } = QU;
-               if (BU(UU.extensionsRequired, oU) || BU(UU.animations, 1 / 0) || BU(UU.skins, 1 / 0)) return !0;
- ... (40 more removed lines; see GitHub link above)
+     function tH(HH, BH, LH) {
+       const AH = "object" === typeof HH && null !== HH ? HH : {},
+         rH = function(HH, BH, LH) {
+           if (!Array.isArray(HH) || 0 === HH.length) return [];
+           const AH = [{
+             width: 0,
+             height: 0,
+             y: 0,
+             items: []
+           }];
+           for (const tH of (0, hH.i)(HH, hH.e.DEFAULT_FONT_SIZE, LH)) {
+             if ("text" !== tH.kind) {
+               AH[AH.length - 1].items.push({
+                 content: tH,
+                 chars: 1,
+                 size: {
+ ... (2 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L203-L248` → after: `L501-L502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L501-L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/221.js#L501-L502) · [Before (L203-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/221.js#L203-L248)

```diff
-               }
-               return !1
-             }(UU, sU)) return FU;
-           const nU = null === (zU = UU.asset) || void 0 === zU ? void 0 : zU.version;
-           if ("string" !== typeof nU || !/^2\.\d+/.test(nU)) return `uses glTF version ${null!==nU&&void 0!==nU?nU:"(none)"}`;
-           const mU = null === (AU = UU.asset) || void 0 === AU ? void 0 : AU.minVersion;
-           if (void 0 !== mU && "2.0" !== mU) return `uses glTF version ${mU}`;
-           for (const cU of null !== (lU = UU.extensionsRequired) && void 0 !== lU ? lU : []) {
-             var lU;
-             if (!DU.has(cU)) return `requires the glTF extension ${cU}`
-           }
-           if (null !== (YU = UU.animations) && void 0 !== YU && YU.length) return "has animations";
-           if (null !== (tU = UU.skins) && void 0 !== tU && tU.length) return "uses skins";
-           const xU = null !== (GU = UU.buffers) && void 0 !== GU ? GU : [];
-           for (const [cU, yU] of xU.entries()) {
-             if (void 0 !== yU.uri) return oU;
- ... (30 more removed lines; see GitHub link above)
+               });
+               continue
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L250-L320` → after: `L504-L520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L504-L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/221.js#L504-L520) · [Before (L250-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/221.js#L250-L320)

```diff
-           const AX = new Set,
-             FX = UU => {
-               var XU;
-               return !AX.has(UU) && (AX.add(UU), (null !== (XU = TU[UU].children) && void 0 !== XU ? XU : []).every(FX))
-             };
-           for (const cU of null !== (oX = KU[0].nodes) && void 0 !== oX ? oX : []) {
-             var oX;
-             if (!kU(cU, TU.length) || yX.has(cU) || !FX(cU)) return FU
-           }
-           for (const cU of TU) {
-             if (void 0 !== cU.matrix) return "uses node matrices";
-             if (void 0 !== cU.skin) return "uses skins";
-             if (void 0 !== cU.weights) return "uses morph targets";
-             if (void 0 !== cU.mesh && !kU(cU.mesh, hU.length)) return FU;
-             const UU = [
-               [cU.translation, 3],
- ... (55 more removed lines; see GitHub link above)
+             if (0 === tH.text.length) continue;
+             const HH = AH[AH.length - 1].items.reduce(((HH, BH) => HH + ("text" === BH.content.kind ? (0, SH.b)(BH.content.text) : BH.chars)), 0);
+             (0, SH.e)(tH.text, HH).forEach(((HH, BH) => {
+               BH > 0 && AH.push({
+                 width: 0,
+                 height: 0,
+                 y: 0,
+                 items: []
+               }), HH.length > 0 && AH[AH.length - 1].items.push({
+                 content: {
+                   ...tH,
+                   text: HH
+                 },
+                 chars: HH.length,
+                 size: {
+                   x: 0,
+ ... (1 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L322-L359` → after: `L522-L523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L522-L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/221.js#L522-L523) · [Before (L322-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/221.js#L322-L359)

```diff
-               }
-               let DU = oU;
-               if (void 0 !== zU.indices) {
-                 if (!kU(zU.indices, jU.length)) return FU;
-                 const UU = jU[zU.indices];
-                 if ("SCALAR" !== UU.type) return FU;
-                 if (5121 === UU.componentType) return "uses 8-bit indices";
-                 var tX;
-                 if (5123 !== UU.componentType && 5125 !== UU.componentType) return `stores indices as ${null!==(tX=cU.g[UU.componentType])&&void 0!==tX?tX:UU.componentType}`;
-                 if (!QU && void 0 === UU.bufferView) return FU;
-                 DU = UU.count
-               }
-               if (4 === yU && DU % 3 !== 0) return FU
-             }
-           }
-           let gX = 0,
- ... (22 more removed lines; see GitHub link above)
+               })
+             }))
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L362-L374` → after: `L527-L535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L527-L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/221.js#L527-L535) · [Before (L362-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/221.js#L362-L374)

```diff
-             if (void 0 !== cU.uri) return oU;
-             if (void 0 === cU.bufferView) return FU;
-             const zU = eU(UU, XU, cU.bufferView);
-             if (!zU) return FU;
-             if ("image/png" !== cU.mimeType) {
-               var CX, wX, qX;
-               return `has ${dU(null!==(CX=null!==(wX={"image/jpeg":"JPEG","image/webp":"WebP","image/ktx2":"KTX2"}[null!==(qX=cU.mimeType)&&void 0!==qX?qX:""])&&void 0!==wX?wX:cU.mimeType)&&void 0!==CX?CX:"untyped")} image`
-             }
-             if (!WU(zU)) return `has ${dU(PU(zU))} image`;
-             const QU = new DataView(zU.buffer, zU.byteOffset, zU.byteLength),
-               AU = QU.getUint32(16),
-               DU = QU.getUint32(20);
-             if (AU > yU.imageSide || DU > yU.imageSide) return `has a ${AU} \xd7 ${DU} image (the limit is ${yU.imageSide})`
+             if (0 === SH.items.length) continue;
+             const {
+               width: HH,
+               height: AH,
+               sizes: tH
+             } = (0, hH.h)(SH.items.map((HH => HH.content)), BH, LH);
+             SH.items.forEach(((HH, BH) => {
+               HH.size = tH[BH]
+             })), SH.width = HH, SH.height = AH, SH.y = rH, rH += AH + hH.e.LINE_SPACING
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L376-L379` → after: `L537-L544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L537-L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/221.js#L537-L544) · [Before (L376-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/221.js#L376-L379)

```diff
-           return null
-         }(UU, XU)
-       } catch {
-         return FU
+           return AH
+         }(AH.content, BH, LH);
+       let tH = 0,
+         zH = hH.e.VERTICAL_PADDING,
+         CH = 0;
+       for (const SH of rH) {
+         tH = Math.max(tH, SH.width + 2 * hH.e.HORIZONTAL_PADDING), zH += SH.height + hH.e.LINE_SPACING;
+         for (const HH of SH.items) CH += HH.chars
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L384-L395` → after: `L640-L647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L640-L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/221.js#L640-L647) · [Before (L384-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/221.js#L384-L395)

```diff
-       const XU = wU(UU.byteLength);
-       if (XU) return XU;
-       try {
-         const {
-           json: XU,
-           bin: zU
-         } = (0, cU.w)(UU);
-         return qU(XU, zU)
-       } catch (zU) {
-         if (zU instanceof cU.n) return zU.reason;
-         throw zU
-       }
+       QH.h.load().then((() => {
+         if (HH()) return;
+         const BH = (0, rH.h)(1, 1, {
+           willReadFrequently: !0
+         });
+         var LH;
+         BH && (LH = BH.canvas, lH.map((HH => jH(HH, LH))))
+       }))
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L397-L416` → after: `L649-L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L649-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/221.js#L649-L652) · [Before (L397-L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/221.js#L397-L416)

```diff
-   },
-   34968: (UU, XU, zU) => {
-     zU.d(XU, {
-       d: () => pU,
-       g: () => IU,
-       i: () => tU,
-       m: () => AU,
-       n: () => QU,
-       o: () => aU,
-       p: () => YU,
-       t: () => NU,
-       u: () => FU,
-       w: () => EU
-     });
-     const cU = 1179937895,
-       yU = 1313821514;
- ... (4 more removed lines; see GitHub link above)
+     let cH = QH.q;
+ 
+     function eH() {
+       bH.clear(), kH.clear()
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L418-L421` → after: `L654-L657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L654-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/221.js#L654-L657) · [Before (L418-L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/221.js#L418-L421)

```diff
-     class AU extends Error {
-       constructor(UU) {
-         super(UU), this.name = "GlbError"
-       }
+ 
+     function qH(HH, BH) {
+       const LH = HH.get(BH);
+       return void 0 !== LH && (HH.delete(BH), HH.set(BH, LH)), LH
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L424-L425` → after: `L660-L661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L660-L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/221.js#L660-L661) · [Before (L424-L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/221.js#L424-L425)

```diff
-     function FU(UU) {
-       return Reflect.get(UU, "scene")
+     function gH(HH, BH, LH) {
+       HH.set(BH, LH), HH.size > xH && HH.delete(HH.keys().next().value)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L430-L471` → after: `L664-L667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L664-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/221.js#L664-L667) · [Before (L430-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/221.js#L430-L471)

```diff
-     function EU(UU) {
-       var XU;
-       const zU = UU instanceof Uint8Array ? UU : new Uint8Array(UU),
-         AU = function(UU) {
-           const XU = new DataView(UU.buffer, UU.byteOffset, UU.byteLength);
-           if (UU.byteLength < 20 || XU.getUint32(0, !0) !== cU || 2 !== XU.getUint32(4, !0)) return null;
-           const zU = Math.min(XU.getUint32(8, !0), UU.byteLength),
-             QU = XU.getUint32(12, !0);
-           if (XU.getUint32(16, !0) !== yU || 20 + QU > zU) return null;
-           let AU;
-           try {
-             AU = JSON.parse((new TextDecoder).decode(UU.subarray(20, 20 + QU)))
-           } catch {
-             return null
-           }
-           return "object" === typeof AU && null !== AU ? {
- ... (26 more removed lines; see GitHub link above)
+     function NH(HH, BH, LH) {
+       if (HH === WH.Nametag) {
+         let HH = qH(bH, BH);
+         return void 0 === HH && (HH = (0, zH.e)(JSON.parse(BH), LH, VH), gH(bH, BH, HH)), HH
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L473-L476` → after: `L669-L684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L669-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/221.js#L669-L684) · [Before (L473-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/221.js#L473-L476)

```diff
-       return {
-         json: FU,
-         bin: aU,
-         fileBytes: zU.byteLength
+       if (HH === WH.MultilineText) {
+         var rH;
+         const HH = JSON.parse(BH),
+           AH = JSON.stringify(null !== (rH = HH.box) && void 0 !== rH ? rH : null),
+           SH = "number" === typeof HH.shown ? HH.shown : null;
+         let hH = qH(kH, AH);
+         void 0 === hH && (hH = tH(HH.box, LH, VH), gH(kH, AH, hH));
+         const zH = null === SH ? null : Math.min(Math.max(0, Math.floor(SH)), hH.chars),
+           CH = hH;
+         return {
+           width: CH.width,
+           height: CH.height,
+           draw: HH => {
+             CH.draw(HH, zH)
+           }
+         }
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L480-L493` → after: `L745-L791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L745-L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/221.js#L745-L791) · [Before (L480-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/221.js#L480-L493)

```diff
-     function YU(UU) {
-       const XU = UU.slice(UU.indexOf(",") + 1),
-         zU = Uint8Array.fromBase64;
-       if (zU) return zU(XU).buffer;
-       const cU = atob(XU),
-         yU = new Uint8Array(cU.length);
-       for (let QU = 0; QU < cU.length; QU++) yU[QU] = cU.charCodeAt(QU);
-       return yU.buffer
-     }
-     async function NU(UU) {
-       if (UU.startsWith("data:")) return YU(UU);
-       const XU = await fetch(UU);
-       if (!XU.ok) throw new AU(`fetching ${UU} failed: ${XU.status} ${XU.statusText}`);
-       return await XU.arrayBuffer()
+     function jH(HH, BH) {
+       let LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+         AH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+       try {
+         if (HH.length < 2) return [0, 0];
+         const SH = (0, rH.d)(BH);
+         if (!SH) return [0, 0];
+         const hH = cH();
+         hH !== OH && (OH = hH, eH());
+         const [tH] = HH, zH = UH.decode(HH.subarray(1));
+         let CH;
+         tH !== WH.Board && tH !== WH.Leaderboard || !VH.canSeePlayerWrittenText || VH.glyphsShown(zH), SH.save();
+         try {
+           CH = NH(tH, zH, SH)
+         } finally {
+           SH.restore()
+ ... (31 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L495-L531` → after: `L793-L798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L793-L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/221.js#L793-L798) · [Before (L495-L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/221.js#L495-L531)

```diff
-     const IU = {
-         5120: "i8",
-         5121: "u8",
-         5122: "i16",
-         5123: "u16",
-         5125: "u32",
-         5126: "f32"
-       },
-       pU = {
-         5120: 1,
-         5121: 1,
-         5122: 2,
-         5123: 2,
-         5125: 4,
-         5126: 4
-       },
- ... (21 more removed lines; see GitHub link above)
+   },
+   37184: (HH, BH, LH) => {
+     HH.exports = LH.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
+   },
+   37187: (HH, BH, LH) => {
+     HH.exports = LH.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/222.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/222.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5)

#### 1. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L4-L15` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/222.js#L4-L6) · [Before (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/222.js#L4-L15)

```diff
-   34975: (UU, XU, zU) => {
-     zU.r(XU), zU.d(XU, {
-       animatedBlockTextures: () => oU,
-       armourAtlasUrl: () => AU,
-       averageColors: () => DU,
-       blockAtlasUrls: () => QU,
-       blockAtlasWidth: () => cU,
-       buildHash: () => YU,
-       builtTextureIndexFingerprint: () => EU,
-       imagesPerAtlas: () => yU,
-       outputHash: () => NU,
-       rotatedBlockTextures: () => FU
+   45011: (HH, BH, LH) => {
+     LH.d(BH, {
+       c: () => SH
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L17-L527` → after: `L8-L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L8-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/222.js#L8-L123) · [Before (L17-L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/222.js#L17-L527)

```diff
-     const cU = 8,
-       yU = [256, 256, 256, 256, 256, 256, 114],
-       QU = [zU(34981), zU(34988), zU(34993), zU(34995), zU(34999), zU(35001), zU(35010)],
-       AU = zU(35017),
-       FU = {
-         "alloy_kiln_top[rot[1": zU(35023),
-         "alloy_kiln_top[rot[2": zU(35028),
-         "alloy_kiln_top[rot[3": zU(35031),
-         "alloy_kiln_top[rot[4": zU(35033),
-         "auto_bench_top[rot[1": zU(35039),
-         "auto_bench_top[rot[2": zU(35041),
-         "auto_bench_top[rot[3": zU(35048),
-         "auto_bench_top[rot[4": zU(35054),
-         "belt_tunnel_exit_top[rot[1": zU(35061),
-         "belt_tunnel_exit_top[rot[2": zU(35070),
-         "belt_tunnel_exit_top[rot[3": zU(35076),
- ... (495 more removed lines; see GitHub link above)
+     var AH = LH(45),
+       rH = LH(3018);
+ 
+     function SH(HH, BH, LH) {
+       const SH = (0, AH.useRef)(null),
+         {
+           width: hH,
+           height: tH
+         } = (0, rH.c)(HH);
+       (0, AH.useEffect)((() => {
+         const LH = BH(HH.current);
+         return SH.current = LH, () => {
+           LH.close(), SH.current = null
+         }
+       }), [HH, BH]), (0, AH.useEffect)((() => {
+         hH <= 0 || tH <= 0 || SH.current.resize(hH, tH)
+ ... (100 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L530-L10909` → after: `L126-L332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L126-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/222.js#L126-L332) · [Before (L530-L10909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/222.js#L530-L10909)

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
+         player: SH,
+         store: {
+           ...SH,
+           radius: 33,
+           target: [0, 3.9, 0]
+         }
+       };
+ 
+     function tH(HH, BH) {
+       HH instanceof Promise ? HH.then(BH).catch((HH => {
+         console.error("Couldn't open the preview", HH)
+       })) : BH(HH)
+     }
+     class zH {
+       constructor(HH) {
+         this.opened = null, this.view = null, this.size = null, this.closed = !1, tH(HH, (HH => {
+ ... (191 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/223.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/223.js` (51 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L5-L139` → after: `L4-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L4-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/223.js#L4-L14) · [Before (L5-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/223.js#L5-L139)

```diff
-   40549: (UU, XU, zU) => {
-     function cU() {
-       return "object" === typeof process && "object" === typeof process.versions && "undefined" !== typeof process.versions.node
-     }
- 
-     function yU(UU) {
-       return UU instanceof Uint8Array && (!cU() || !Buffer.isBuffer(UU))
-     }
- 
-     function QU(UU) {
-       return UU instanceof ArrayBuffer
-     }
- 
-     function AU(UU) {
-       return !!cU() && Buffer.isBuffer(UU)
-     }
- ... (119 more removed lines; see GitHub link above)
+   45006: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       MobPreview: () => XH
+     });
+     var AH = LH(45),
+       rH = LH(1038),
+       SH = LH.n(rH),
+       hH = LH(45011),
+       tH = LH(35016),
+       zH = LH(45013),
+       CH = LH(1225);
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L142-L2492` → after: `L17-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L17-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/223.js#L17-L36) · [Before (L142-L2492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/223.js#L142-L2492)

```diff
-       this.array = UU, this.pos = 0
-     }
-     QU.prototype.readUncompressedLength = function() {
-       for (var UU, XU, zU = 0, cU = 0; cU < 32 && this.pos < this.array.length;) {
-         if (UU = this.array[this.pos], this.pos += 1, (XU = 127 & UU) << cU >>> cU !== XU) return -1;
-         if (zU |= XU << cU, UU < 128) return zU;
-         cU += 7
-       }
-       return -1
-     }, QU.prototype.uncompressToBuffer = function(UU) {
-       for (var XU, QU, AU, FU, oU = this.array, DU = oU.length, EU = this.pos, YU = 0; EU < oU.length;)
-         if (XU = oU[EU], EU += 1, 0 === (3 & XU)) {
-           if ((QU = 1 + (XU >>> 2)) > 60) {
-             if (EU + 3 >= DU) return !1;
-             AU = QU - 60, QU = 1 + ((QU = oU[EU] + (oU[EU + 1] << 8) + (oU[EU + 2] << 16) + (oU[EU + 3] << 24)) & zU[AU]), EU += AU
-           }
- ... (2335 more removed lines; see GitHub link above)
+       return tH.h.openMob(HH)
+     }
+     const XH = (0, AH.memo)((function(HH) {
+       let {
+         mobType: BH,
+         variation: LH = null,
+         animation: rH = zH.i,
+         className: tH
+       } = HH;
+       const XH = (0, AH.useRef)(null),
+         GH = (0, AH.useMemo)((() => ({
+           mobType: BH,
+           variation: LH,
+           animation: rH
+         })), [BH, LH, rH]);
+       return (0, hH.c)(XH, EH, GH), (0, CH.jsx)("div", {
+ ... (4 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L2494` → after: `L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/223.js#L38) · [Before (L2494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/223.js#L2494)

```diff
-   40758: (UU, XU, zU) => {
+   45011: (HH, BH, LH) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L2496-L2502` → after: `L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/223.js#L40) · [Before (L2496-L2502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/223.js#L2496-L2502)

```diff
-       d: () => NU,
-       f: () => YU,
-       g: () => gU,
-       h: () => oU,
-       j: () => kU,
-       k: () => DU,
-       m: () => AU
+       c: () => SH
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L2504-L6325` → after: `L42-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L42-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/223.js#L42-L60) · [Before (L2504-L6325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/223.js#L2504-L6325)

```diff
-     var cU = zU(40723),
-       yU = zU(40687),
-       QU = zU(40764);
-     new Map, new Map;
-     const AU = UU => {
-         if (!UU || "object" !== typeof UU) throw new TypeError("Encoding config must be an object.");
-         if (!cU.w.includes(UU.codec)) throw new TypeError(`Invalid video codec '${UU.codec}'. Must be one of: ${cU.w.join(", ")}.`);
-         const XU = UU.bitrate;
-         if (void 0 === UU.quality && void 0 === XU) throw new TypeError("config.quality must be provided.");
-         if (void 0 !== UU.quality && void 0 !== XU) throw new TypeError("config.quality and config.bitrate cannot both be provided.");
-         if (void 0 !== UU.quality && !(UU.quality instanceof NU)) throw new TypeError("config.quality, when provided, must be a Quality.");
-         if (void 0 !== XU && !(XU instanceof NU) && (!Number.isInteger(XU) || XU <= 0)) throw new TypeError("config.bitrate, when provided, must be a positive integer or a quality.");
-         if (void 0 !== UU.keyFrameInterval && (!Number.isFinite(UU.keyFrameInterval) || UU.keyFrameInterval < 0)) throw new TypeError("config.keyFrameInterval, when provided, must be a non-negative number.");
-         if (void 0 !== UU.sizeChangeBehavior && !["deny", "passThrough", "fill", "contain", "cover"].includes(UU.sizeChangeBehavior)) throw new TypeError("config.sizeChangeBehavior, when provided, must be 'deny', 'passThrough', 'fill', 'contain' or 'cover'.");
-         if (void 0 !== UU.transform) {
-           if ("object" !== typeof UU.transform || !UU.transform) throw new TypeError("config.transform, when provided, must be an object.");
- ... (3806 more removed lines; see GitHub link above)
+     var AH = LH(45),
+       rH = LH(3018);
+ 
+     function SH(HH, BH, LH) {
+       const SH = (0, AH.useRef)(null),
+         {
+           width: hH,
+           height: tH
+         } = (0, rH.c)(HH);
+       (0, AH.useEffect)((() => {
+         const LH = BH(HH.current);
+         return SH.current = LH, () => {
+           LH.close(), SH.current = null
+         }
+       }), [HH, BH]), (0, AH.useEffect)((() => {
+         hH <= 0 || tH <= 0 || SH.current.resize(hH, tH)
+ ... (3 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L6328` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/223.js#L63) · [Before (L6328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/223.js#L6328)

```diff
-   40679: (UU, XU, zU) => {
+   45013: (HH, BH, LH) => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L6330` → after: `L65-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L65-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/223.js#L65-L67) · [Before (L6330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/223.js#L6330)

```diff
-       e: () => GU
+       d: () => GH,
+       h: () => XH,
+       i: () => zH
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L6332-L6362` → after: `L69-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L69-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/223.js#L69-L78) · [Before (L6332-L6362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/223.js#L6332-L6362)

```diff
-     var cU = zU(40687),
-       yU = zU(40689),
-       QU = zU(40698),
-       AU = zU(40771),
-       FU = zU(40747),
-       oU = zU(40742),
-       DU = zU(40727),
-       EU = zU(40754),
-       YU = zU(40723);
-     const NU = ["video", "audio", "subtitle"];
-     class IU {
-       constructor(UU, XU, zU, cU, yU) {
-         this.id = UU, this.output = XU, this.type = zU, this.source = cU, this.metadata = yU
-       }
-       isVideoTrack() {
-         return "video" === this.type
- ... (15 more removed lines; see GitHub link above)
+     var AH = LH(38029),
+       rH = LH(39550);
+ 
+     function SH(HH, BH) {
+       let [LH, AH, rH] = HH;
+       return [0, .5, 1].map((HH => ({
+         timeFraction: HH,
+         rotation: {
+           lB: "catmull-rom-spline",
+           point: [LH, AH, rH + (.5 === HH ? BH : 0)]
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L6364-L6370` → after: `L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/223.js#L80) · [Before (L6364-L6370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/223.js#L6364-L6370)

```diff
-         return !1
-       }
-     }
-     class pU extends IU {
-       constructor(UU, XU, zU, cU) {
-         super(UU, XU, "video", zU, cU)
-       }
+       })))
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L6372-L6459` → after: `L82-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L82-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/223.js#L82-L95) · [Before (L6372-L6459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/223.js#L6372-L6459)

```diff
-     class aU extends IU {
-       constructor(UU, XU, zU, cU) {
-         super(UU, XU, "audio", zU, cU)
-       }
-     }
-     class tU extends IU {
-       constructor(UU, XU, zU, cU) {
-         super(UU, XU, "subtitle", zU, cU)
-       }
-     }
-     class gU {
-       constructor() {
-         this._pairedGroups = new Set
-       }
-       pairWith(UU) {
-         if (!(UU instanceof gU)) throw new TypeError("other must be an OutputTrackGroup.");
- ... (72 more removed lines; see GitHub link above)
+ 
+     function hH(HH, BH, LH) {
+       return {
+         kB: 3200,
+         loop: !0,
+         oB: {
+           Root: {
+             timeline: [0, .5, 1].map((HH => ({
+               timeFraction: HH,
+               position: {
+                 lB: "catmull-rom-spline",
+                 point: [0, .5 === HH ? .18 : 0, 0]
+               }
+             })))
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L6461-L6608` → after: `L97-L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L97-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/223.js#L97-L110) · [Before (L6461-L6608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/223.js#L6461-L6608)

```diff
-           XU = this._getTargetValidated(UU),
-           zU = XU => ("canceled" === this.state ? XU._close() : this._rememberTarget(XU), this._emit("target", {
-             target: XU,
-             request: UU,
-             isRoot: !0
-           }), this._rootTarget = XU, XU);
-         return (0, cU.Zb)(XU) ? this._rootTargetPromise = XU.then(zU) : zU(XU)
-       }
-       _getRootWriter(UU) {
-         return this._rootWriterPromise ??= (async () => {
-           const XU = await this._getRootTarget(),
-             zU = new oU.d(XU, "boolean" === typeof UU ? UU : UU(XU));
-           return zU.start(), zU
-         })()
-       }
-       addVideoTrack(UU) {
- ... (132 more removed lines; see GitHub link above)
+           HeadMesh: {
+             timeline: [0, .25, .75, 1].map((HH => ({
+               timeFraction: HH,
+               rotation: {
+                 lB: "catmull-rom-spline",
+                 point: [0, .25 === HH ? .12 : .75 === HH ? -.12 : 0, 0]
+               }
+             })))
+           },
+           ArmLeftMesh: {
+             timeline: SH(HH, LH)
+           },
+           ArmRightMesh: {
+             timeline: SH(BH, -LH)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L6610` → after: `L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/223.js#L112) · [Before (L6610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/223.js#L6610)

```diff
-         })()
+         }
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L6614` → after: `L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/223.js#L122) · [Before (L6614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/223.js#L6614)

```diff
-   40754: (UU, XU, zU) => {
+   35018: (HH, BH, LH) => {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L6616-L6617` → after: `L124-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L124-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/223.js#L124-L126) · [Before (L6616-L6617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/223.js#L6616-L6617)

```diff
-       e: () => QU,
-       h: () => yU
+       d: () => hH,
+       h: () => rH,
+       j: () => EH
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L6619-L6692` → after: `L128-L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L128-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/223.js#L128-L134) · [Before (L6619-L6692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/223.js#L6619-L6692)

```diff
-     var cU = zU(40687);
-     const yU = new Uint8Array(0);
-     class QU {
-       constructor(UU, XU, zU, cU) {
-         let QU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
-           AU = arguments.length > 5 ? arguments[5] : void 0,
-           FU = arguments.length > 6 ? arguments[6] : void 0;
-         if (this.data = UU, this.type = XU, this.timestamp = zU, this.duration = cU, this.sequenceNumber = QU, UU === yU && void 0 === AU) throw new Error("Internal error: byteLength must be explicitly provided when constructing metadata-only packets.");
-         if (void 0 === AU && (AU = UU.byteLength), !(UU instanceof Uint8Array)) throw new TypeError("data must be a Uint8Array.");
-         if ("key" !== XU && "delta" !== XU) throw new TypeError('type must be either "key" or "delta".');
-         if (!Number.isFinite(zU)) throw new TypeError("timestamp must be a number.");
-         if (!Number.isFinite(cU) || cU < 0) throw new TypeError("duration must be a non-negative number.");
-         if (!Number.isFinite(QU)) throw new TypeError("sequenceNumber must be a number.");
-         if (!Number.isInteger(AU) || AU < 0) throw new TypeError("byteLength must be a non-negative integer.");
-         if (void 0 !== FU && ("object" !== typeof FU || !FU)) throw new TypeError("sideData, when provided, must be an object.");
-         if (void 0 !== FU?.alpha && !(FU.alpha instanceof Uint8Array)) throw new TypeError("sideData.alpha, when provided, must be a Uint8Array.");
- ... (58 more removed lines; see GitHub link above)
+     var AH = LH(1565);
+ 
+     function rH(HH) {
+       var BH;
+       return {
+         ...hH.store,
+         yaw: hH.store.yaw + (null !== (BH = AH.c[HH].previewYaw) && void 0 !== BH ? BH : 0)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L6695-L6733` → after: `L137-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L137-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/223.js#L137-L141) · [Before (L6695-L6733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/223.js#L6695-L6733)

```diff
-   },
-   40764: (UU, XU, zU) => {
-     zU.d(XU, {
-       c: () => OU,
-       e: () => IU,
-       f: () => vU,
-       g: () => HU,
-       k: () => ZU
-     });
-     var cU = zU(40687),
-       yU = zU(40727),
-       QU = function(UU, XU, zU) {
-         if (null !== XU && void 0 !== XU) {
-           if ("object" !== typeof XU && "function" !== typeof XU) throw new TypeError("Object expected.");
-           var cU, yU;
-           if (zU) {
- ... (23 more removed lines; see GitHub link above)
+     const SH = {
+         yaw: .61 * Math.PI,
+         pitch: Math.PI / 2.05,
+         radius: 30,
+         target: [0, 0, 0]
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L6735-L7266` → after: `L143-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L143-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/223.js#L143-L148) · [Before (L6735-L7266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/223.js#L6735-L7266)

```diff
-       AU = function(UU) {
-         return function(XU) {
-           function zU(zU) {
-             XU.error = XU.hasError ? new UU(zU, XU.error, "An error was suppressed during disposal.") : zU, XU.hasError = !0
-           }
-           var cU, yU = 0;
-           return function UU() {
-             for (; cU = XU.stack.pop();) try {
-               if (!cU.async && 1 === yU) return yU = 0, XU.stack.push(cU), Promise.resolve().then(UU);
-               if (cU.dispose) {
-                 var QU = cU.dispose.call(cU.value);
-                 if (cU.async) return yU |= 2, Promise.resolve(QU).then(UU, (function(XU) {
-                   return zU(XU), UU()
-                 }))
-               } else yU |= 1
-             } catch (AU) {
- ... (516 more removed lines; see GitHub link above)
+       hH = {
+         player: SH,
+         store: {
+           ...SH,
+           radius: 33,
+           target: [0, 3.9, 0]
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L7268-L7308` → after: `L150-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L150-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/223.js#L150-L155) · [Before (L7268-L7308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/223.js#L7268-L7308)

```diff
-         const {
-           canvas: aU,
-           context: tU,
-           isNew: kU
-         } = gU(NU.width, NU.height);
-         return this._drawWithFitAndMipmapping(aU, tU, {
-           fit: NU.fit,
-           rotation: NU.rotation,
-           flip: NU.flip,
-           crop: NU.crop,
-           targetIsFresh: kU,
-           fillBlack: "discard" === NU.alpha
-         }), new IU(aU, {
-           timestamp: this.timestamp,
-           duration: this.duration,
-           rotation: 0,
- ... (25 more removed lines; see GitHub link above)
+       };
+ 
+     function tH(HH, BH) {
+       HH instanceof Promise ? HH.then(BH).catch((HH => {
+         console.error("Couldn't open the preview", HH)
+       })) : BH(HH)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L7343-L7353` → after: `L159-L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L159-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/223.js#L159-L161) · [Before (L7343-L7353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/223.js#L7343-L7353)

```diff
-         if (void 0 !== UU) {
-           if (!UU || "object" !== typeof UU) throw new TypeError("init.colorSpace, when provided, must be an object.");
-           const XU = Object.keys(cU.c);
-           if (null != UU.primaries && !XU.includes(UU.primaries)) throw new TypeError(`init.colorSpace.primaries, when provided, must be one of ${XU.join(", ")}.`);
-           const zU = Object.keys(cU.v);
-           if (null != UU.transfer && !zU.includes(UU.transfer)) throw new TypeError(`init.colorSpace.transfer, when provided, must be one of ${zU.join(", ")}.`);
-           const yU = Object.keys(cU.l);
-           if (null != UU.matrix && !yU.includes(UU.matrix)) throw new TypeError(`init.colorSpace.matrix, when provided, must be one of ${yU.join(", ")}.`);
-           if (null != UU.fullRange && "boolean" !== typeof UU.fullRange) throw new TypeError("init.colorSpace.fullRange, when provided, must be a boolean.")
-         }
-         this.primaries = UU?.primaries ?? null, this.transfer = UU?.transfer ?? null, this.matrix = UU?.matrix ?? null, this.fullRange = UU?.fullRange ?? null
+         this.opened = null, this.view = null, this.size = null, this.closed = !1, tH(HH, (HH => {
+           this.closed ? HH.close() : (this.opened = HH, null !== this.size && HH.resize(this.size.width, this.size.height), null !== this.view && HH.show(this.view))
+         }))
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L7355-L7361` → after: `L163-L165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L163-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/223.js#L163-L165) · [Before (L7355-L7361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/223.js#L7355-L7361)

```diff
-       toJSON() {
-         return {
-           primaries: this.primaries,
-           transfer: this.transfer,
-           matrix: this.matrix,
-           fullRange: this.fullRange
-         }
+       show(HH) {
+         var BH;
+         this.view = HH, null === (BH = this.opened) || void 0 === BH || BH.show(HH)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L7363-L7372` → after: `L167-L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L167-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/223.js#L167-L169) · [Before (L7363-L7372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/223.js#L7363-L7372)

```diff
-     }
-     const GU = UU => "undefined" !== typeof VideoFrame && UU instanceof VideoFrame,
-       BU = (UU, XU, zU) => {
-         const yU = Math.min(UU.left, XU),
-           QU = Math.min(UU.top, zU),
-           AU = Math.min(UU.width, XU - yU),
-           FU = Math.min(UU.height, zU - QU);
-         return (0, cU.J)(AU >= 0), (0, cU.J)(FU >= 0), {
-           left: yU,
-           top: QU,
+       resize(HH, BH) {
+         var LH;
+         this.size = {
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L7375-L7791` → after: `L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/223.js#L172) · [Before (L7375-L7791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/223.js#L7375-L7791)

```diff
-         }
-       },
-       ZU = (UU, XU) => {
-         if (!UU || "object" !== typeof UU) throw new TypeError(XU + "crop, when provided, must be an object.");
-         if (!Number.isInteger(UU.left) || UU.left < 0) throw new TypeError(XU + "crop.left must be a non-negative integer.");
-         if (!Number.isInteger(UU.top) || UU.top < 0) throw new TypeError(XU + "crop.top must be a non-negative integer.");
-         if (!Number.isInteger(UU.width) || UU.width < 0) throw new TypeError(XU + "crop.width must be a non-negative integer.");
-         if (!Number.isInteger(UU.height) || UU.height < 0) throw new TypeError(XU + "crop.height must be a non-negative integer.")
-       },
-       RU = UU => {
-         if (!UU || "object" !== typeof UU) throw new TypeError("options must be an object.");
-         if (void 0 !== UU.colorSpace && !["display-p3", "srgb"].includes(UU.colorSpace)) throw new TypeError("options.colorSpace, when provided, must be 'display-p3' or 'srgb'.");
-         if (void 0 !== UU.format && "string" !== typeof UU.format) throw new TypeError("options.format, when provided, must be a string.");
-         if (void 0 !== UU.layout) {
-           if (!Array.isArray(UU.layout)) throw new TypeError("options.layout, when provided, must be an array.");
-           for (const XU of UU.layout) {
- ... (401 more removed lines; see GitHub link above)
+         }, null === (LH = this.opened) || void 0 === LH || LH.resize(HH, BH)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L7794-L7912` → after: `L175-L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L175-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/223.js#L175-L176) · [Before (L7794-L7912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/223.js#L7794-L7912)

```diff
-         this._closed || (DU?.unregister(this), this._data instanceof qU ? (this._data._referenceCount--, 0 === this._data._referenceCount && this._data.close()) : iU(this._data) ? this._data.close() : this._data = new Uint8Array(0), this._closed = !0)
-       }
-       toAudioData() {
-         if (this._closed) throw new Error("AudioSample is closed.");
-         return this._data instanceof qU ? this._createAudioDataFromData() : iU(this._data) ? this._data.timestamp === this.microsecondTimestamp ? this._data.clone() : this._createAudioDataFromData() : new AudioData({
-           format: this.format,
-           sampleRate: this.sampleRate,
-           numberOfFrames: this.numberOfFrames,
-           numberOfChannels: this.numberOfChannels,
-           timestamp: this.microsecondTimestamp,
-           data: this._data.buffer instanceof ArrayBuffer ? this._data.buffer : this._data.slice()
-         })
-       }
-       _createAudioDataFromData() {
-         if (rU(this.format)) {
-           const UU = this.allocationSize({
- ... (103 more removed lines; see GitHub link above)
+         var HH;
+         this.closed = !0, null === (HH = this.opened) || void 0 === HH || HH.close(), this.opened = null
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L8083-L8131` → after: `L181-L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L181-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/223.js#L181-L183) · [Before (L8083-L8131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/223.js#L8083-L8131)

```diff
-         this.preambleText = null, this.preambleEmitted = !1, this.options = UU
-       }
-       parse(UU) {
-         let XU;
-         if (UU = UU.replaceAll("\r\n", "\n").replaceAll("\r", "\n"), cU.lastIndex = 0, !this.preambleText) {
-           if (!yU.test(UU)) throw new Error("WebVTT preamble incorrect.");
-           XU = cU.exec(UU);
-           const zU = UU.slice(0, XU?.index ?? UU.length).trimEnd();
-           if (!zU) throw new Error("No WebVTT preamble provided.");
-           this.preambleText = zU, XU && (UU = UU.slice(XU.index), cU.lastIndex = 0)
-         }
-         for (; XU = cU.exec(UU);) {
-           const zU = UU.slice(0, XU.index),
-             yU = XU[1],
-             QU = XU.index + XU[0].length,
-             AU = UU.indexOf("\n", QU) + 1,
- ... (33 more removed lines; see GitHub link above)
+         this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(HH).then((HH => HH.ready)), tH(HH, (HH => {
+           this.closed ? HH.close() : (this.opened = HH, null !== this.size && HH.resize(this.size.width, this.size.height))
+         }))
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L8133-L8147` → after: `L185-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L185-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/223.js#L185-L186) · [Before (L8133-L8147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/223.js#L8133-L8147)

```diff
-   },
-   40747: (UU, XU, zU) => {
-     var cU;
-     zU.d(XU, {
-       b: () => DU,
-       d: () => EU,
-       g: () => NU,
-       i: () => AU
-     });
-     var yU = zU(40752),
-       QU = zU(40687);
-     "undefined" !== typeof(cU || (cU = zU.t(yU, 2))) && (cU || (cU = zU.t(yU, 2)));
-     class AU extends QU.f {
-       constructor() {
-         super(...arguments), this._writerAcquired = !1, this._monotonicity = null, this.onwrite = null
+       get dev() {
+         return this.opened.dev
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L8149-L8150` → after: `L188-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L188-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/223.js#L188-L190) · [Before (L8149-L8150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/223.js#L8149-L8150)

```diff
-       _setMonotonicity(UU) {
-         !1 !== this._monotonicity && (this._monotonicity = UU)
+       isReady() {
+         var HH, BH;
+         return null !== (HH = null === (BH = this.opened) || void 0 === BH ? void 0 : BH.isReady()) && void 0 !== HH && HH
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L8152-L8156` → after: `L192-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L192-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/223.js#L192-L194) · [Before (L8152-L8156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/223.js#L8152-L8156)

```diff
-       _dispatchWrite(UU, XU) {
-         this.onwrite?.(UU, XU), this._emit("write", {
-           start: UU,
-           end: XU
-         })
+       setCosmetic(HH, BH) {
+         var LH;
+         null === (LH = this.opened) || void 0 === LH || LH.setCosmetic(HH, BH)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L8158-L8160` → after: `L196-L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L196-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/223.js#L196-L198) · [Before (L8158-L8160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/223.js#L8158-L8160)

```diff
-       slice(UU) {
-         if (!Number.isInteger(UU) || UU < 0) throw new TypeError("offset must be a non-negative integer.");
-         return new YU(this, UU)
+       playEmote(HH) {
+         var BH;
+         null === (BH = this.opened) || void 0 === BH || BH.playEmote(HH)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L8162-L8177` → after: `L200-L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L200-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/223.js#L200-L202) · [Before (L8162-L8177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/223.js#L8162-L8177)

```diff
-     }
-     const FU = 65536,
-       oU = 2 ** 32;
-     class DU extends AU {
-       constructor() {
-         let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
-         if (super(), this.buffer = null, this._maxPos = 0, !UU || "object" !== typeof UU) throw new TypeError("BufferTarget options, when provided, must be an object.");
-         if (void 0 !== UU.onFinalize && "function" !== typeof UU.onFinalize) throw new TypeError("options.onFinalize, when provided, must be a function.");
-         if (this._options = UU, this._supportsResize = "resize" in new ArrayBuffer(0), this._supportsResize) try {
-           this._buffer = new ArrayBuffer(FU, {
-             maxByteLength: oU
-           })
-         } catch {
-           this._buffer = new ArrayBuffer(FU), this._supportsResize = !1
-         } else this._buffer = new ArrayBuffer(FU);
-         this._bytes = new Uint8Array(this._buffer)
+       setOrbit(HH) {
+         var BH;
+         null === (BH = this.opened) || void 0 === BH || BH.setOrbit(HH)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L8179-L8190` → after: `L204-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L204-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/223.js#L204-L206) · [Before (L8179-L8190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/223.js#L8179-L8190)

```diff
-       _ensureSize(UU) {
-         let XU = this._buffer.byteLength;
-         for (; XU < UU;) XU *= 2;
-         if (XU !== this._buffer.byteLength) {
-           if (XU > oU) throw new Error("ArrayBuffer exceeded maximum size of 4294967296 bytes. Please consider using another target.");
-           if (this._supportsResize) this._buffer.resize(XU);
-           else {
-             const UU = new ArrayBuffer(XU),
-               zU = new Uint8Array(UU);
-             zU.set(this._bytes, 0), this._buffer = UU, this._bytes = zU
-           }
-         }
+       resetCamera() {
+         var HH;
+         null === (HH = this.opened) || void 0 === HH || HH.resetCamera()
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L8192-L8194` → after: `L208-L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L208-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/223.js#L208-L210) · [Before (L8192-L8194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/223.js#L8192-L8194)

```diff
-       _start() {}
-       _write(UU, XU) {
-         this._ensureSize(XU + UU.byteLength), this._bytes.set(UU, XU), this._maxPos = Math.max(this._maxPos, XU + UU.byteLength), this._dispatchWrite(XU, XU + UU.byteLength)
+       async untilDrawn(HH) {
+         var BH;
+         await this.ready, await (null === (BH = this.opened) || void 0 === BH ? void 0 : BH.untilDrawn(HH))
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L8196-L8198` → after: `L212-L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L212-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/223.js#L212-L217) · [Before (L8196-L8198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/223.js#L8196-L8198)

```diff
-       async _flush() {}
-       async _finalize() {
-         this.buffer = this._buffer.slice(0, this._maxPos), this._options.onFinalize && await this._options.onFinalize(this.buffer), this._emit("finalized")
+       resize(HH, BH) {
+         var LH;
+         this.size = {
+           width: HH,
+           height: BH
+         }, null === (LH = this.opened) || void 0 === LH || LH.resize(HH, BH)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L8200-L8202` → after: `L219-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L219-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/223.js#L219-L221) · [Before (L8200-L8202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/223.js#L8200-L8202)

```diff
-       async _close() {}
-       _getSlice(UU, XU) {
-         return this._bytes.slice(UU, XU)
+       close() {
+         var HH;
+         this.closed = !0, null === (HH = this.opened) || void 0 === HH || HH.close(), this.opened = null
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L8205-L8208` → after: `L224-L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L224-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/223.js#L224-L226) · [Before (L8205-L8208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/223.js#L8205-L8208)

```diff
-     class EU extends AU {
-       _start() {}
-       _write(UU, XU) {
-         this._dispatchWrite(XU, XU + UU.byteLength)
+     const EH = new class {
+       constructor() {
+         this.host = null, this.makeDefault = null
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L8210-L8212` → after: `L228-L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L228-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/223.js#L228-L229) · [Before (L8210-L8212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/223.js#L8210-L8212)

```diff
-       async _flush() {}
-       async _finalize() {
-         this._emit("finalized")
+       setHost(HH) {
+         this.host = HH
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L8214-L8218` → after: `L231-L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L231-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/223.js#L231-L232) · [Before (L8214-L8218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/223.js#L8214-L8218)

```diff
-       async _close() {}
-     }
-     class YU extends AU {
-       constructor(UU, XU) {
-         super(), this._baseTarget = UU, this._offset = XU
+       setDefaultHost(HH) {
+         this.makeDefault = HH
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L8220-L8222` → after: `L234-L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L234-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/223.js#L234-L239) · [Before (L8220-L8222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/223.js#L8220-L8222)

```diff
-       _start() {}
-       _write(UU, XU) {
-         this._baseTarget._write(UU, this._offset + XU), this._dispatchWrite(XU, XU + UU.byteLength)
+       current() {
+         if (null === this.host) {
+           if (null === this.makeDefault) throw new Error("no preview host");
+           this.host = this.makeDefault()
+         }
+         return this.host
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L8224-L8225` → after: `L241-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L241-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/223.js#L241-L242) · [Before (L8224-L8225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/223.js#L8224-L8225)

```diff
-       _flush() {
-         return this._baseTarget._flush()
+       openMob(HH) {
+         return new zH(this.current().openMob(HH))
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L8227-L8228` → after: `L244-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L244-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/223.js#L244-L245) · [Before (L8227-L8228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/223.js#L8227-L8228)

```diff
-       async _finalize() {
-         this._emit("finalized")
+       openPet(HH) {
+         return new zH(this.current().openPet(HH))
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L8230-L8232` → after: `L247-L248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L247-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/223.js#L247-L248) · [Before (L8230-L8232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/223.js#L8230-L8232)

```diff
-       async _close() {}
-       _setMonotonicity(UU) {
-         super._setMonotonicity(UU), this._baseTarget._setMonotonicity(UU)
+       openMobLineup(HH) {
+         return new zH(this.current().openMobLineup(HH))
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L8234-L8238` → after: `L250-L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L250-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/223.js#L250-L251) · [Before (L8234-L8238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/223.js#L8234-L8238)

```diff
-     }
-     class NU {
-       constructor(UU, XU) {
-         if (this.rootPath = UU, this.getTarget = XU, "string" !== typeof UU) throw new TypeError("rootPath must be a string.");
-         if ("function" !== typeof XU) throw new TypeError("getTarget must be a function.")
+       openCharacter(HH, BH) {
+         return new CH(this.current().openCharacter(HH, BH))
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L8242` → after: `L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/223.js#L255) · [Before (L8242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/223.js#L8242)

```diff
-   40730: (UU, XU, zU) => {
+   35016: (HH, BH, LH) => {
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L8244` → after: `L257-L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L257-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/223.js#L257-L259) · [Before (L8244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/223.js#L8244)

```diff
-       e: () => cU
+       e: () => AH.d,
+       g: () => AH.h,
+       h: () => AH.j
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L8246-L8252` → after: `L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/223.js#L261) · [Before (L8246-L8252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/223.js#L8246-L8252)

```diff
-     const cU = "Mediabunny v1.61.3"
-   },
-   40742: (UU, XU, zU) => {
-     zU.d(XU, {
-       d: () => yU
-     });
-     var cU = zU(40687);
+     var AH = LH(35018);
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L8254-L8265` → after: `L263-L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L263-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/223.js#L263-L264) · [Before (L8254-L8265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/223.js#L8254-L8265)

```diff
-       constructor(UU, XU) {
-         if (this.finalized = !1, this.started = !1, this.pos = 0, this.trackedWrites = null, this.trackedStart = -1, this.trackedEnd = -1, UU._writerAcquired) throw new Error("Can't have multiple Writers for the same Target.");
-         this.target = UU, UU._setMonotonicity(XU), UU._writerAcquired = !0
-       }
-       start() {
-         (0, cU.J)(!this.started), this.target._start(), this.started = !0
-       }
-       write(UU) {
-         (0, cU.J)(this.started && !this.finalized), this.maybeTrackWrites(UU), this.target._write(UU, this.pos), this.pos += UU.byteLength
-       }
-       seek(UU) {
-         this.pos = UU
+       constructor(HH) {
+         this.load = HH, this.loaded = null, this.loading = null
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L8267-L8268` → after: `L266-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L266-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/223.js#L266-L269) · [Before (L8267-L8268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/223.js#L8267-L8268)

```diff
-       getPos() {
-         return this.pos
+       run(HH) {
+         return null !== this.loaded ? HH(this.loaded) : (this.loading ??= this.load().then((HH => (this.loaded = HH, HH)), (HH => {
+           throw this.loading = null, HH
+         })), this.loading.then(HH))
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L8270-L8271` → after: `L271-L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L271-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/223.js#L271-L274) · [Before (L8270-L8271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/223.js#L8270-L8271)

```diff
-       async flush() {
-         return (0, cU.J)(this.started && !this.finalized), this.target._flush()
+     }
+     class SH {
+       constructor() {
+         this.mobScene = new rH((() => Promise.all([LH.e(84), LH.e(259), LH.e(258), LH.e(283), LH.e(111), LH.e(284), LH.e(87), LH.e(281), LH.e(85), LH.e(86), LH.e(291), LH.e(285), LH.e(290), LH.e(288), LH.e(280), LH.e(303), LH.e(255), LH.e(272), LH.e(286), LH.e(289), LH.e(89), LH. … [truncated]
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L8273-L8274` → after: `L276-L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L276-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/223.js#L276-L277) · [Before (L8273-L8274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/223.js#L8273-L8274)

```diff
-       async finalize() {
-         (0, cU.J)(this.started && !this.finalized), await this.target._finalize(), this.finalized = !0
+       openMob(HH) {
+         return this.mobScene.run((BH => BH.openMobPreview(HH)))
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L8276-L8290` → after: `L279-L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L279-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/223.js#L279-L280) · [Before (L8276-L8290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/223.js#L8276-L8290)

```diff
-       maybeTrackWrites(UU) {
-         if (!this.trackedWrites) return;
-         let XU = this.getPos();
-         if (XU < this.trackedStart) {
-           if (XU + UU.byteLength <= this.trackedStart) return;
-           UU = UU.subarray(this.trackedStart - XU), XU = 0
-         }
-         const zU = XU + UU.byteLength - this.trackedStart;
-         let cU = this.trackedWrites.byteLength;
-         for (; cU < zU;) cU *= 2;
-         if (cU !== this.trackedWrites.byteLength) {
-           const UU = new Uint8Array(cU);
-           UU.set(this.trackedWrites, 0), this.trackedWrites = UU
-         }
-         this.trackedWrites.set(UU, XU - this.trackedStart), this.trackedEnd = Math.max(this.trackedEnd, XU + UU.byteLength)
+       openPet(HH) {
+         return this.mobScene.run((BH => BH.openPetPreview(HH)))
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L8292-L8293` → after: `L282-L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L282-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/223.js#L282-L283) · [Before (L8292-L8293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/223.js#L8292-L8293)

```diff
-       startTrackingWrites() {
-         this.trackedWrites = new Uint8Array(1024), this.trackedStart = this.getPos(), this.trackedEnd = this.trackedStart
+       openMobLineup(HH) {
+         return this.mobScene.run((BH => BH.openMobLineupPreview(HH)))
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L8295-L8302` → after: `L285-L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L285-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/223.js#L285-L286) · [Before (L8295-L8302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/223.js#L8295-L8302)

```diff
-       stopTrackingWrites() {
-         if (!this.trackedWrites) throw new Error("Internal error: Can't get tracked writes since nothing was tracked.");
-         const UU = {
-           data: this.trackedWrites.subarray(0, this.trackedEnd - this.trackedStart),
-           start: this.trackedStart,
-           end: this.trackedEnd
-         };
-         return this.trackedWrites = null, UU
+       openCharacter(HH, BH) {
+         return this.characterScene.run((LH => LH.openCharacterPreview(HH, BH)))
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/224.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/224.js` (38 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd)

#### 1. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/224.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/224.js#L4)

```diff
-   44182: (UU, XU, zU) => {
+   37270: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L6-L7` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/224.js#L6) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/224.js#L6-L7)

```diff
-       loadGlbAsset: () => dX,
-       loadGlbTree: () => WX
+       default: () => LB
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L9-L11` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/224.js#L8-L12) · [Before (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/224.js#L9-L11)

```diff
-     var cU = zU(38649),
-       yU = zU(142),
-       QU = zU(1211);
+     var AH = LH(45);
+     const rH = "newPlayerDeal",
+       SH = 36e5,
+       hH = [4, 12, 20, 20, 30];
+     const tH = 12 * SH;
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L14` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/224.js#L15) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/224.js#L14)

```diff
-       return (0, yU.isDiscordClient)() ? `https://${QU.d.discordDomain}/${UU.href}` : UU.href
+       return HH - tH
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L23-L24` → after: `L18-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L18-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/224.js#L18-L20) · [Before (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/224.js#L23-L24)

```diff
-     function EU() {
-       return DU()('(()=>{class UU extends Error{}function XU(XU,zU){const cU=XU._malloc(zU);if(0===cU)throw new UU(`Draco: the decoder\'s heap refused ${zU} bytes`);return cU}function zU(zU,cU,yU,QU){let AU=null,FU=null,oU=null;try{AU=new zU.Decoder,FU=new zU.DecoderBuffer,FU.Ini … [truncated]
+     function CH(HH, BH, LH) {
+       const AH = zH(LH);
+       return BH >= AH && BH < LH && (null === HH.lastShownAt || HH.lastShownAt < AH)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L43-L44` → after: `L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/224.js#L23) · [Before (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/224.js#L43-L44)

```diff
-     function PU() {
-       if (!tU) return Promise.reject(new Error("Draco: configureDracoPool was not called"));
+     function EH(HH, BH) {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L46-L47` → after: `L25-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L25-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/224.js#L25-L28) · [Before (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/224.js#L46-L47)

```diff
-         scriptUrl: UU,
-         wasmBinaryUrl: XU
+         arrival: LH,
+         now: AH,
+         endsAt: rH,
+         playedOnDevice: tH
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L49-L75` → after: `L30-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L30-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/224.js#L30-L59) · [Before (L49-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/224.js#L49-L75)

```diff
-       return gU ??= fetch(XU).then((UU => {
-         if (!UU.ok) throw new Error(`Draco: fetching ${XU} failed: ${UU.status}`);
-         return UU.arrayBuffer()
-       })), gU.catch((() => {
-         gU = null
-       })), ZU.workersStarted++, Promise.all([gU, (0, IU.j)()]).then((XU => {
-         let [zU] = XU;
-         return new Promise(((XU, cU) => {
-           const yU = new EU;
-           yU.onerror = UU => {
-             yU.onmessage = null, yU.onerror = null, yU.terminate(), cU(new Error("Draco: the decode worker failed to start" + (UU.message ? `: ${UU.message}` : " (its script did not load)")))
-           }, yU.onmessage = UU => {
-             let {
-               data: zU
-             } = UU;
-             yU.onmessage = null, yU.onerror = null, "initDone" === zU.id ? XU(yU) : (yU.terminate(), cU(new Error(`Draco: ${"initError"===zU.id?zU.message:"the worker did not start"}`)))
- ... (11 more removed lines; see GitHub link above)
+       return !(AH >= rH || !tH) && (!(!CH(HH, AH, rH) && 0 !== HH.shownCount && null !== HH.lastShownAt) || "open" === LH && AH - HH.lastShownAt >= (zH = HH.shownCount, hH[Math.min(Math.max(zH, 1), hH.length) - 1] * SH));
+       var zH
+     }
+     var XH = LH(304),
+       GH = LH(1475),
+       YH = LH(15),
+       uH = LH(2397),
+       QH = LH(3337),
+       WH = LH(3340),
+       MH = LH(2027),
+       xH = LH(1131),
+       vH = LH(1070);
+     var PH = LH(1352),
+       TH = LH(30),
+       UH = LH(656),
+       VH = LH(2727),
+ ... (14 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L78-L104` → after: `L62-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L62-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/224.js#L62-L97) · [Before (L78-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/224.js#L78-L104)

```diff
-       const XU = kU.indexOf(UU); - 1 !== XU && kU.splice(XU, 1);
-       const zU = GU.shift();
-       zU && LU(zU)
-     }
- 
-     function dU(UU, XU) {
-       UU.busy = !0, UU.releaseTimer && (clearTimeout(UU.releaseTimer), UU.releaseTimer = null);
-       UU.worker.then((zU => {
-         const cU = BU++;
-         zU.onmessage = yU => {
-           let {
-             data: QU
-           } = yU;
-           if (("decoded" === QU.id || "decodeError" === QU.id) && QU.seq === cU) {
-             if (zU.onmessage = null, zU.onerror = null, "decoded" === QU.id) return ZU.decodes++, XU.resolve({
-               indices: QU.indices,
- ... (11 more removed lines; see GitHub link above)
+       let {
+         shownView: BH,
+         close: LH
+       } = HH;
+       const {
+         t: rH
+       } = (0, lH.B)(), SH = (0, oH.S)(), {
+         purchaseUnderWay: hH,
+         notice: tH,
+         needsLogin: zH,
+         buyPack: CH
+       } = (0, gH.e)("popup", ((HH, BH) => {
+         LH(!1), (0, fH.d)(HH, BH)
+       })), EH = null === SH;
+       (0, AH.useEffect)((() => {
+         EH && LH(!1)
+ ... (20 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L106-L119` → after: `L99-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L99-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/224.js#L99-L111) · [Before (L106-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/224.js#L106-L119)

```diff
-         }, zU.onerror = cU => {
-           zU.onmessage = null, zU.onerror = null, zU.terminate(), XU.reject(new Error(`Draco: the decode worker failed: ${cU.message}`)), WU(UU)
-         };
-         const yU = {
-           id: "decode",
-           seq: cU,
-           data: XU.data,
-           attributeIds: XU.attributeIds,
-           expected: XU.expected
-         };
-         zU.postMessage(yU, [XU.data.buffer])
-       }), (zU => {
-         XU.reject(zU instanceof Error ? zU : new Error(String(zU))), WU(UU)
-       }))
+         }), (0, NH.jsx)(cH.e, {
+           notice: tH,
+           className: "SmallTextBold NewPlayerDealNotice"
+         }), (0, NH.jsx)(cH.b, {
+           className: "SmallTextBold NewPlayerDealNotice"
+         }), (0, NH.jsx)(KH.i, {
+           className: "NewPlayerDealNoThanks",
+           onClick: () => {
+             LH(!0)
+           },
+           children: rH("newPlayerDeal:noThanks")
+         })]
+       })
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L123-L138` → after: `L115-L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L115-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/224.js#L115-L121) · [Before (L123-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/224.js#L123-L138)

```diff
-       const XU = kU.find((UU => !UU.busy));
-       if (XU) dU(XU, UU);
-       else {
-         if (RU ??= (0, NU.d)() ? 1 : function(UU, XU) {
-             const zU = UU ? Math.max(1, Math.min(Math.floor(.5 * UU), 4)) : 1;
-             return XU ? Math.min(zU, pU) : zU
-           }("object" === typeof navigator ? navigator.hardwareConcurrency : void 0, (0, YU.isMobile)()), kU.length < RU) {
-           const XU = {
-             worker: PU(),
-             busy: !0,
-             releaseTimer: null
-           };
-           return kU.push(XU), ZU.mostWorkers = Math.max(ZU.mostWorkers, kU.length), void dU(XU, UU)
-         }
-         GU.push(UU)
-       }
+       let {
+         arm: BH,
+         children: LH
+       } = HH;
+       return (0, AH.useEffect)((() => {
+         (0, oH.J)(!0)
+       }), []), (0, oH.V)(BH, "popup"), LH
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L141-L149` → after: `L124-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L124-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/224.js#L124-L141) · [Before (L141-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/224.js#L141-L149)

```diff
-     function eU(UU, XU, zU) {
-       return new Promise(((cU, yU) => {
-         LU({
-           data: new Int8Array(UU.buffer, UU.byteOffset, UU.byteLength).slice(),
-           attributeIds: XU,
-           expected: zU,
-           resolve: cU,
-           reject: yU
-         })
+     function nH(HH) {
+       let BH = null;
+       PH.NotificationProvider.showCustomPopup({
+         body: LH => (0, NH.jsx)(jH, {
+           arm: HH.arm,
+           children: (0, NH.jsx)(RH, {
+             shownView: HH,
+             close: HH => {
+               BH ??= HH, LH()
+             }
+           })
+         }),
+         middleScreenPopupContainerClassName: "NewPlayerDealPopupContainer",
+         middleScreenPopupClassName: "NewPlayerDealPopupPanel",
+         disableExitButton: !0,
+         unlockPointerKey: "NewPlayerDealPopup"
+ ... (2 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L152-L162` → after: `L144-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L144-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/224.js#L144-L147) · [Before (L152-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/224.js#L152-L162)

```diff
-     var CU = zU(38106),
-       wU = zU(38121),
-       qU = zU(34968),
-       OU = zU(34959);
-     const SU = {
-       index: -1,
-       magFilter: void 0,
-       minFilter: void 0,
-       wrapS: void 0,
-       wrapT: void 0
-     };
+     const FH = 2500,
+       DH = 6e4;
+     const wH = 500,
+       ZH = 6e4;
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L165-L363` → after: `L150-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L150-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/224.js#L150-L156) · [Before (L165-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/224.js#L165-L363)

```diff
-       const XU = (0, OU.i)(UU.byteLength);
-       if (XU) throw new qU.n(XU);
-       const {
-         json: zU,
-         bin: cU
-       } = (0, qU.w)(UU), yU = (0, OU.g)(zU, cU);
-       if (yU) throw new qU.n(yU);
-       try {
-         return function(UU, XU) {
-           var zU, cU, yU, QU, AU, FU, oU, DU, EU, YU, NU, IU, pU, aU, tU;
-           const gU = new Map,
-             kU = zU => {
-               let cU = gU.get(zU);
-               if (!cU) {
-                 var yU;
-                 const QU = UU.bufferViews[zU],
- ... (183 more removed lines; see GitHub link above)
+       const BH = Date.now() + ZH;
+       return new Promise((LH => {
+         const AH = () => {
+           HH() ? (0, bH.e)() || PH.NotificationProvider.hasPopup() || (0, OH.n)() || (0, oH.t)() || null !== YH.c.get("openEverythingMenuName") ? Date.now() > BH ? LH(!1) : setTimeout(AH, wH) : LH(!0) : LH(!1)
+         };
+         AH()
+       }))
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L365` → after: `L158-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L158-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/224.js#L158-L160) · [Before (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/224.js#L365)

```diff
-     const fU = new WeakMap;
+     const aH = "newPlayerDealPointerDeferred_";
+     let sH = !1,
+       JH = null;
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L369-L370` → after: `L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/224.js#L164) · [Before (L369-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/224.js#L369-L370)

```diff
-       const cU = null !== (zU = fU.get(UU)) && void 0 !== zU ? zU : XU(UU);
-       return fU.set(UU, cU), cU
+       return (null === (LH = JH) || void 0 === LH ? void 0 : LH.accountId) === BH && JH.shownCount === HH.shownCount
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L373-L390` → after: `L167-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L167-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/224.js#L167-L168) · [Before (L373-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/224.js#L373-L390)

```diff
-     function HU(UU) {
-       const XU = UU.bufferView,
-         zU = 5125 === UU.componentType ? Uint32Array : Uint16Array,
-         cU = XU.bytes.buffer,
-         yU = XU.bytes.byteOffset + (UU.byteOffset || 0);
-       return yU % zU.BYTES_PER_ELEMENT !== 0 ? new zU(cU.slice(yU, yU + UU.count * zU.BYTES_PER_ELEMENT), 0) : new zU(cU, yU, UU.count)
-     }
- 
-     function MU(UU, XU) {
-       if (UU.min && UU.max) return [new Float64Array(UU.min), new Float64Array(UU.max)];
-       const zU = XU.find((UU => {
-           let {
-             kind: XU
-           } = UU;
-           return "position" === XU
-         })),
- ... (2 more removed lines; see GitHub link above)
+     function pH(HH, BH, LH) {
+       return !!iH(BH, LH) && (JH = null, (0, oH.z)(LH), nH(HH), !0)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L392-L399` → after: `L170-L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L170-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/224.js#L170-L175) · [Before (L392-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/224.js#L392-L399)

```diff
- 
-     function vU(UU) {
-       const XU = UU.attributes.map((UU => {
-           var XU, zU;
-           let {
-             kind: cU,
-             accessor: yU
-           } = UU;
+     async function yH(HH, BH, LH, AH) {
+       if (sH) return !1;
+       let rH;
+       sH = !0;
+       try {
+         rH = await async function(HH) {
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L401-L415` → after: `L177-L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L177-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/224.js#L177-L183) · [Before (L401-L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/224.js#L401-L415)

```diff
-             bufferView: QU,
-             numComponents: AU
-           } = yU;
-           if (!QU) {
-             return {
-               kind: cU,
-               data: iU(yU, (() => new Float32Array(AU * yU.count))),
-               offset: 0,
-               stride: 4 * AU,
-               components: AU,
-               glType: 5126,
-               isNormalized: !1
-             }
-           }
-           const FU = null !== (XU = QU.byteStride) && void 0 !== XU ? XU : AU * qU.d[yU.componentType];
+             newPlayerDeal: BH,
+             counted: LH
+           } = await (0, vH.postJsonWithMetricsCookiesAndJsonResponse)(`${xH.clientSideServerUrls.indexUrl}/index/new-player-deal/shown`, {
+             shownCount: HH
+           }, {
+             retries: 1
+           });
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L417-L423` → after: `L185-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L185-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/224.js#L185-L186) · [Before (L417-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/224.js#L417-L423)

```diff
-             kind: cU,
-             data: QU.bytes,
-             offset: null !== (zU = yU.byteOffset) && void 0 !== zU ? zU : 0,
-             stride: FU,
-             components: AU,
-             glType: yU.componentType,
-             isNormalized: yU.normalized
+             newPlayerDeal: BH,
+             counted: !0 === LH
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L425-L429` → after: `L188-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L188-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/224.js#L188-L197) · [Before (L425-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/224.js#L425-L429)

```diff
-         })),
-         zU = UU.indices,
-         cU = zU && iU(zU, HU),
-         yU = UU.position;
-       return new wU.h(XU, cU, yU.count, ...MU(yU, XU))
+         }(BH.shownCount)
+       } catch (SH) {
+         return console.error("New player deal: counting a showing of its popup failed", SH), !1
+       } finally {
+         sH = !1
+       }
+       return (0, oH.N)(LH, rH.newPlayerDeal), rH.counted && null !== rH.newPlayerDeal && (JH = {
+         accountId: AH,
+         shownCount: rH.newPlayerDeal.shownCount
+       }, "landingPage" === YH.c.get("gameState") && pH(HH, rH.newPlayerDeal, AH)), !0
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L431` → after: `L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/224.js#L199) · [Before (L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/224.js#L431)

```diff
-     const VU = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array];
+     let HB = null;
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L433-L450` → after: `L201-L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L201-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/224.js#L201-L232) · [Before (L433-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/224.js#L433-L450)

```diff
-     function sU(UU, XU) {
-       const zU = XU.attributes.map((UU => {
-         let {
-           kind: XU,
-           data: zU,
-           size: cU,
-           byteOffset: yU,
-           byteStride: QU,
-           normalized: AU
-         } = UU;
-         return {
-           kind: XU,
-           data: zU,
-           offset: yU,
-           stride: QU,
-           components: cU,
- ... (2 more removed lines; see GitHub link above)
+     function BB(HH, BH, LH, rH, SH) {
+       var hH;
+       const {
+         gameState: tH
+       } = (0, YH.m)(["gameState"]), GH = "landingPage" === tH, {
+         pointing: uH
+       } = (0, VH.g)(), QH = (0, AH.useRef)(uH);
+       QH.current = uH;
+       const WH = (0, AH.useRef)(HH);
+       WH.current = HH;
+       const xH = (0, AH.useRef)(BH);
+       xH.current = BH;
+       const vH = (0, AH.useRef)(LH);
+       vH.current = LH;
+       const [PH, OH] = (0, AH.useState)(null), bH = (0, AH.useRef)(0), kH = (0, AH.useRef)(0), mH = (0, AH.useRef)(!1), oH = (0, AH.useCallback)((HH => {
+         "open" === function(HH) {
+ ... (16 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L452-L453` → after: `L234-L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L234-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/224.js#L234-L277) · [Before (L452-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/224.js#L452-L453)

```diff
-       }));
-       return new wU.h(zU, XU.indices, XU.totalVertices, ...MU(UU.position, zU))
+       }), [GH, oH]);
+       const IH = null !== (hH = null === HH || void 0 === HH ? void 0 : HH.endsAt) && void 0 !== hH ? hH : null;
+       (0, AH.useEffect)((() => {
+         if (!GH || null === IH) return;
+         const HH = zH(IH) - Date.now();
+         if (HH <= 0 || HH > MH.c) return;
+         const BH = setTimeout((() => {
+           oH(!1)
+         }), HH);
+         return () => {
+           clearTimeout(BH)
+         }
+       }), [GH, IH, oH]);
+       const fH = null !== HH && null !== rH && null === SH;
+       (0, AH.useEffect)((() => {
+         if (null === PH || !fH || kH.current >= PH.seq) return;
+ ... (28 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L456-L458` → after: `L280-L366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L280-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/224.js#L280-L366) · [Before (L456-L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/224.js#L456-L458)

```diff
-     function nU(UU) {
-       const XU = UU.lastIndexOf("/");
-       return XU < 0 ? UU : UU.substring(XU + 1)
+     function LB() {
+       const {
+         userContext: HH
+       } = (0, mH.e)(), BH = (0, uH.usePurchasesAllowed)(), [LH, SH] = (0, AH.useState)(IH.k);
+       (0, AH.useEffect)((() => (SH((0, IH.k)()), (0, IH.n)(SH))), []);
+       const hH = (0, oH.e)(HH);
+       ! function(HH, BH, LH) {
+         const [SH, hH] = (0, AH.useState)(0);
+         (0, AH.useEffect)((() => {
+           if (!BH || null === HH) return;
+           if (null !== LH) return void(0, oH.I)(HH, (0, IH.h)());
+           if (null !== (0, oH.j)(HH)) return;
+           let AH, SH = !1;
+           return (0, WH.getBillingClient)().getOfferings(rH).then((BH => {
+             let {
+               offering: LH
+ ... (71 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L462-L463` → after: `L388-L399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L388-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/224.js#L388-L399) · [Before (L462-L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/224.js#L462-L463)

```diff
-       const XU = UU.lastIndexOf("/");
-       return XU < 0 ? "" : UU.substring(0, XU + 1)
+       let {
+         endsAt: BH,
+         className: LH
+       } = HH;
+       return (0, YH.jsxs)("span", {
+         className: SH()("NewPlayerDealClock", LH),
+         children: [(0, YH.jsx)(CH.c, {
+           name: "hourglass"
+         }), (0, YH.jsx)(zH.i, {
+           toTime: BH
+         })]
+       })
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L467` → after: `L403-L447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L403-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/224.js#L403-L447) · [Before (L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/224.js#L467)

```diff
-       return UU.name || `node${UU.index}`
+       let {
+         offered: BH,
+         needsLogin: LH,
+         busy: AH,
+         highlight: rH,
+         onBuy: zH
+       } = HH;
+       const {
+         t: CH
+       } = (0, hH.B)(), {
+         pack: uH
+       } = BH, QH = (0, XH.f)(BH.package);
+       return (0, YH.jsxs)("div", {
+         className: SH()("NewPlayerDealPack", {
+           NewPlayerDealPackHighlight: rH
+         }),
+ ... (29 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L490-L492` → after: `L451-L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L451-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/224.js#L451-L484) · [Before (L490-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/224.js#L490-L492)

```diff
-       var XU, zU, cU, yU;
-       const QU = null !== (XU = UU.minFilter) && void 0 !== XU ? XU : 9987;
-       return 9729 === (null !== (zU = UU.magFilter) && void 0 !== zU ? zU : 9729) ? null !== (cU = JU[QU]) && void 0 !== cU ? cU : 3 : null !== (yU = jU[QU]) && void 0 !== yU ? yU : 4
+       let {
+         view: BH,
+         needsLogin: LH,
+         busy: rH,
+         highlight: tH,
+         onBuy: zH
+       } = HH;
+       const {
+         t: CH
+       } = (0, hH.B)();
+       return (0, YH.jsxs)("div", {
+         className: SH()("NewPlayerDealPacks", BH.packs.length > 1 ? "NewPlayerDealPacksTwo" : "NewPlayerDealPacksOne"),
+         children: [BH.packs.map(((HH, BH) => (0, YH.jsxs)(AH.Fragment, {
+           children: [BH > 0 && (0, YH.jsx)("div", {
+             className: "NewPlayerDealDivider",
+             "aria-hidden": !0,
+ ... (18 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L494-L497` → after: `L486-L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L486-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/224.js#L486-L512) · [Before (L494-L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/224.js#L494-L497)

```diff
-     const bU = {
-       33071: 0,
-       33648: 2
-     };
+   },
+   35037: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => bH,
+       e: () => mH
+     });
+     LH(35030);
+     var AH = LH(3388),
+       rH = LH(1475),
+       SH = LH(2397),
+       hH = LH(3376),
+       tH = LH(3356),
+       zH = LH(3382),
+       CH = LH(3340),
+       EH = LH(1123),
+       XH = LH(1352),
+ ... (11 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L499-L501` → after: `L514-L518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L514-L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/224.js#L514-L518) · [Before (L499-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/224.js#L499-L501)

```diff
-     function TU(UU) {
-       var XU;
-       return null !== (XU = bU[null !== UU && void 0 !== UU ? UU : 10497]) && void 0 !== XU ? XU : 1
+     function VH(HH, BH) {
+       null !== HH && (0, MH.q)(HH) || ((0, rH.reportAnalyticsClick)({
+         id: "store.purchase_done",
+         value: `self:${BH.pack.packageId}`
+       }), null !== HH && (0, MH.w)(HH), bH(BH.pack.gems))
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L504-L505` → after: `L521-L538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L521-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/224.js#L521-L538) · [Before (L504-L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/224.js#L504-L505)

```diff
-     function hU(UU) {
-       return 9728 === UU.minFilter || 9729 === UU.minFilter
+     function OH(HH, BH, LH) {
+       const rH = (0, MH.e)(BH);
+       switch (HH.kind) {
+         case "completed":
+           VH(rH, LH);
+           break;
+         case "pending":
+           SH = HH.intentId, hH = () => {
+             WH.h.refresh(), VH(rH, LH)
+           }, UH || (UH = !0, TH.listen()), TH.follow(SH, hH);
+           break;
+         case "unknownPackage":
+           (0, MH.N)(BH, null);
+           break;
+         case "failed":
+           HH.errorKey === AH.c.newPlayerDealUnavailable && (0, MH.N)(BH, null)
+ ... (2 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L509-L515` → after: `L542-L549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L542-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/224.js#L542-L549) · [Before (L509-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/224.js#L509-L515)

```diff
-       var XU, zU, cU;
-       const yU = Float64Array.from(null !== (XU = UU.scale) && void 0 !== XU ? XU : [1, 1, 1]);
-       return UU.hasCamera && (yU[0] = -1), {
-         translation: Float64Array.from(null !== (zU = UU.translation) && void 0 !== zU ? zU : [0, 0, 0]),
-         rotation: Float64Array.from(null !== (cU = UU.rotation) && void 0 !== cU ? cU : [0, 0, 0, 1]),
-         scale: yU
-       }
+       XH.NotificationProvider.showCustomPopup({
+         body: BH => (0, PH.jsx)(kH, {
+           gems: HH,
+           close: BH
+         }),
+         middleScreenPopupClassName: "NewPlayerDealAddedPopup",
+         disableExitButton: !0
+       })
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L518` → after: `L552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/224.js#L552) · [Before (L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/224.js#L518)

```diff
-     function XX(UU, XU) {
+     function kH(HH) {
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L520-L522` → after: `L554-L555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L554-L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/224.js#L554-L555) · [Before (L520-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/224.js#L520-L522)

```diff
-         translation: zU,
-         rotation: cU,
-         scale: yU
+         gems: BH,
+         close: LH
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L524-L709` → after: `L557-L576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L557-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/224.js#L557-L576) · [Before (L524-L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/224.js#L524-L709)

```diff
-       const QU = new Float32Array(16);
-       return (0, CU.e)(yU, 0, cU, 0, zU, 0, QU), XU && (0, CU.q)(QU, XU, 0, QU), QU
-     }
-     class zX {
-       constructor(UU, XU, zU, cU) {
-         this.model = UU, this.decode = XU, this.fileInfo = zU, this.uniqueRootUrl = cU, this.primitives = void 0, this.parents = new Map, this.uses = new Map, this.own = new Map;
-         const yU = new Set,
-           QU = (XU, zU) => {
-             const cU = UU.nodes[XU];
-             if (this.parents.has(cU)) throw new qU.m(`/nodes/${XU}: Invalid recursive node hierarchy`);
-             this.parents.set(cU, zU);
-             const AU = null === cU.mesh ? [] : UU.meshes[cU.mesh].primitives,
-               FU = AU.map((UU => {
-                 const XU = AU.length > 1;
-                 return {
-                   name: XU ? `${lU(cU)}_primitive${UU.index}` : lU(cU),
- ... (170 more removed lines; see GitHub link above)
+       const {
+         t: AH
+       } = (0, EH.B)();
+       return (0, PH.jsxs)("div", {
+         className: "NewPlayerDealAdded",
+         children: [(0, PH.jsxs)("div", {
+           className: "NewPlayerDealAddedHead",
+           children: [(0, PH.jsx)(uH.c, {
+             name: "circle-check"
+           }), (0, PH.jsx)(QH.e, {
+             amount: BH
+           }), (0, PH.jsx)("span", {
+             children: AH("newPlayerDeal:added")
+           })]
+         }), (0, PH.jsx)(YH.u, {
+           className: "NewPlayerDealAddedOk",
+ ... (4 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L713-L927` → after: `L580-L599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L580-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/224.js#L580-L599) · [Before (L713-L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/224.js#L713-L927)

```diff
-       (0, QX.e)(UU) || (UU.geometry && UU.geometry.useBoundingInfoFromGeometry ? UU._updateBoundingInfo() : UU.refreshBoundingInfo(!0, !0))
-     }
-     class DX {
-       constructor(UU, XU) {
-         this.sa = UU, this.decode = XU, this.bufferData = Promise.resolve(), this.viewData = new Map, this.viewBuffers = new Map, this.vertexBuffers = new Map, this.dracoGeometry = new Map
-       }
-       viewBytes(UU) {
-         let XU = this.viewData.get(UU.index);
-         return XU || (XU = this.bufferData.then((() => UU.bytes)), this.viewData.set(UU.index, XU)), XU
-       }
-       viewBuffer(UU) {
-         let XU = this.viewBuffers.get(UU.index);
-         return XU || (XU = this.viewBytes(UU).then((UU => new((0, yX.c)().XY)(this.sa.qp(), UU, !1))), this.viewBuffers.set(UU.index, XU)), XU
-       }
-       vertexBuffer(UU, XU) {
-         const {
- ... (199 more removed lines; see GitHub link above)
+       let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hH.d;
+       const {
+         userContext: LH
+       } = (0, GH.e)(), {
+         purchaseUnderWay: AH,
+         notice: rH,
+         buy: zH
+       } = (0, tH.c)(BH), CH = (0, xH.k)(), EH = LH.mayBuy() || (0, SH.guestsMayBuy)(), XH = null === CH ? !EH : CH.guest && !LH.isLoggedIn();
+       return {
+         purchaseUnderWay: AH,
+         notice: rH,
+         needsLogin: XH,
+         buyPack: function(AH, rH) {
+           (0, MH.F)("new_player_deal.buy", (0, vH.e)(AH.arm, HH, rH.pack.packageId)), null === CH ? zH(function(HH) {
+             return {
+               sku: HH.pack.packageId,
+ ... (4 more added lines; see GitHub link above)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L929-L1027` → after: `L601-L605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L601-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/224.js#L601-L605) · [Before (L929-L1027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/224.js#L929-L1027)

```diff
-             for (const XU of UU.children) cU.push(this.loadNode(this.asset.model.nodes[XU], (UU => {
-               UU.parent = yU
-             })));
-             (zU => {
-               GX(zU, UU.extras), XU(zU)
-             })(yU)
-           };
-         if (null === UU.mesh) {
-           const XU = this.node(lU(UU), !1);
-           this.nodeObjects.set(UU.index, XU), yU(XU)
-         } else {
-           const XU = this.asset.model.meshes[UU.mesh];
-           cU.push(this.loadMesh(`/meshes/${XU.index}`, UU, XU, yU))
-         }
-         return Promise.all(cU).then((() => {
-           for (const zU of null !== (XU = this.nodePrimitives.get(UU.index)) && void 0 !== XU ? XU : []) {
- ... (83 more removed lines; see GitHub link above)
+           }(rH), null, {
+             followPending: !1
+           }).then((HH => {
+             OH(HH, LH, rH)
+           })) : XH ? BH(rH.pack.packageId, null) : VH((0, MH.e)(LH), rH)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L1088-L1090` → after: `L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/224.js#L610) · [Before (L1088-L1090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/224.js#L1088-L1090)

```diff
-   44184: (UU, XU, zU) => {
-     UU.exports = zU.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
-   }
+   35030: () => {}
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/225.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/225.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee)

#### 1. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L4-L6` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/225.js#L4-L7) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/225.js#L4-L6)

```diff
-   44194: (UU, XU, zU) => {
-     zU.r(XU), zU.d(XU, {
-       default: () => QU
+   35054: (HH, BH, LH) => {
+     LH.d(BH, {
+       c: () => rH,
+       f: () => SH
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L8-L9` → after: `L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/225.js#L9) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/225.js#L8-L9)

```diff
-     var cU = zU(36961),
-       yU = zU.n(cU);
+     var AH = LH(3610);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L12` → after: `L12-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L12-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/225.js#L12-L27) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/225.js#L12)

```diff
-       return yU()('/*! For license information please see fecih8.procGen.worker.0c2636d3.worker.js.LICENSE.txt */\n(()=>{var UU={69:UU=>{const XU="object"===typeof performance&&performance&&"function"===typeof performance.now?performance:Date,zU=()=>XU.now(),cU=UU=>UU===1/0||(UU= … [truncated]
+       if ("undefined" === typeof BroadcastChannel) return null;
+       const HH = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
+       try {
+         const BH = new BroadcastChannel(AH.f);
+         BH.postMessage({
+           stored: HH
+         }), BH.close()
+       } catch {
+         return null
+       }
+       return HH
+     }
+ 
+     function SH(HH) {
+       const BH = "object" === typeof HH && null !== HH ? HH.stored : null;
+       return "string" === typeof BH ? BH : null
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L15-L18` → after: `L30-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L30-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/225.js#L30-L287) · [Before (L15-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/225.js#L15-L18)

```diff
-   36961: UU => {
-     UU.exports = function(UU, XU, zU, cU) {
-       var yU = self || window;
-       try {
+   35048: (HH, BH, LH) => {
+     LH.d(BH, {
+       b: () => hH,
+       f: () => rH,
+       g: () => SH
+     });
+     var AH = LH(3610);
+     async function rH(HH, BH, LH) {
+       let rH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
+       const SH = hH(await HH.getItem(AH.c, BH));
+       if (null === SH || rH()) return null;
+       const tH = await HH.getItem(AH.e, BH);
+       return rH() ? null : (await async function(HH) {
+         await Promise.all([HH.removeItem(AH.c), HH.removeItem(AH.e)])
+       }(HH).catch(LH), {
+         pack: SH,
+ ... (242 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L20` → after: `L289-L389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L289-L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/225.js#L289-L389) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/225.js#L20)

```diff
-           var QU;
+           LH = await this.host.store.getItem(hH.b, !0)
+         } catch (rH) {
+           return void this.host.warn("the stored texture pack didn't read again: the pack in play stays", rH)
+         }
+         if (this.Mu || this.ownChanges !== BH) return;
+         const AH = MH(LH);
+         (0, GH.c)(AH, this.playerPack) || (this.ownChanges++, this.setOwn(AH), this.onGamePack || this.change({
+           pack: AH,
+           gameSource: null
+         }, !1))
+       }
+       joinedWithout() {
+         this.picks++
+       }
+       dispose() {
+         this.Mu = !0, this.listeners.clear()
+ ... (85 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L22` → after: `L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/225.js#L391) · [Before (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/225.js#L22)

```diff
-             QU = new yU.Blob([UU])
+             HH(this.state)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L24` → after: `L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/225.js#L393) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/225.js#L24)

```diff
-             (QU = new(yU.BlobBuilder || yU.WebKitBlobBuilder || yU.MozBlobBuilder || yU.MSBlobBuilder)).append(UU), QU = QU.getBlob()
+             this.host.warn("a texture pack listener threw", BH)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/226.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/226.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843)

#### 1. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/226.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/226.js#L4)

```diff
-   44220: (UU, XU, zU) => {
+   35061: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L6` → after: `L6-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/226.js#L6-L9) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/226.js#L6)

```diff
-       default: () => QU
+       packDisplayName: () => QH,
+       packModelMessage: () => WH,
+       packModelSummary: () => xH,
+       refusedPackModels: () => MH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L8-L9` → after: `L11-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L11-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/226.js#L11-L18) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/226.js#L8-L9)

```diff
-     var cU = zU(36961),
-       yU = zU.n(cU);
+     var AH = LH(35067),
+       rH = LH(35071);
+     const SH = "DRACO",
+       hH = 0,
+       tH = 1,
+       zH = 0,
+       CH = 1,
+       EH = 32768;
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L11-L17` → after: `L20-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L20-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/226.js#L20-L39) · [Before (L11-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/226.js#L11-L17)

```diff
-     function QU() {
-       return yU()('(()=>{var UU={19:(UU,XU,zU)=>{UU.exports=zU.p+"static/media/bloxd_wasm_bg.0f9c10d0d401d306b045.wasm"},23:(UU,XU,zU)=>{UU.exports=zU.p+"static/media/bloxd_wasm_textures_bg.25fe60e88eb857bf3bdf.wasm"},13:(UU,XU,zU)=>{UU.exports=zU.p+"static/media/zstdDecodeWorker … [truncated]
-     }
-   },
-   36961: UU => {
-     UU.exports = function(UU, XU, zU, cU) {
-       var yU = self || window;
+     function XH(HH) {
+       const BH = new DataView(HH.buffer, HH.byteOffset, HH.byteLength);
+       let LH = 0;
+       const AH = () => {
+           if (LH >= HH.byteLength) throw new RangeError("past the stream");
+           return HH[LH++]
+         },
+         rH = () => {
+           if (LH + 4 > HH.byteLength) throw new RangeError("past the stream");
+           const AH = BH.getUint32(LH, !0);
+           return LH += 4, AH
+         },
+         XH = () => {
+           let HH = 0;
+           for (let BH = 0; BH < 35; BH += 7) {
+             const LH = AH();
+ ... (4 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L19-L24` → after: `L41-L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L41-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/226.js#L41-L81) · [Before (L19-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/226.js#L19-L24)

```diff
-         try {
-           var QU;
-           try {
-             QU = new yU.Blob([UU])
-           } catch (DU) {
-             (QU = new(yU.BlobBuilder || yU.WebKitBlobBuilder || yU.MozBlobBuilder || yU.MSBlobBuilder)).append(UU), QU = QU.getBlob()
+         for (let HH = 0; HH < SH.length; HH++)
+           if (AH() !== SH.charCodeAt(HH)) return null;
+         const BH = AH(),
+           GH = AH(),
+           YH = AH(),
+           uH = AH(),
+           QH = AH() | AH() << 8;
+         if (2 !== BH) return null;
+         0 !== (QH & EH) && function(HH, BH, LH) {
+           const AH = () => {
+               BH(LH())
+             },
+             rH = () => {
+               let LH = 1,
+                 rH = !0;
+               for (; LH > 0;) {
+ ... (25 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L33-L35` → after: `L84-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L84-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/226.js#L84-L93) · [Before (L33-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/226.js#L33-L35)

```diff
-       } catch (DU) {
-         if (!cU) throw Error("Inline worker is not supported");
-         return new yU[XU](cU, zU)
+         if (uH !== CH) return null;
+         AH(), GH < 2 && XH();
+         const MH = XH();
+         return {
+           faces: XH(),
+           vertices: MH,
+           minor: GH
+         }
+       } catch {
+         return null
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/227.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/227.js` (38 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2)

#### 1. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L4-L13` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/227.js#L4) · [Before (L4-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/227.js#L4-L13)

```diff
-   41910: (UU, XU, zU) => {
-     function cU(UU, XU, zU) {
-       if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(UU, XU).getContext("2d", zU);
-       const cU = document.createElement("canvas");
-       return cU.width = UU, cU.height = XU, cU.getContext("2d", zU)
-     }
- 
-     function yU(UU, XU) {
-       return UU.getContext("2d", XU)
-     }
+   35067: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L16-L21` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/227.js#L8) · [Before (L16-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/227.js#L16-L21)

```diff
-       d: () => cU
-     })
-   },
-   41867: (UU, XU, zU) => {
-     zU.d(XU, {
-       b: () => FU
+       g: () => IH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L23-L26` → after: `L10-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L10-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/227.js#L10-L67) · [Before (L23-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/227.js#L23-L26)

```diff
-     const cU = 1 << 20,
-       yU = 1 << 21,
-       QU = 1024,
-       AU = 2048;
+     var AH = LH(35071);
+     const rH = {
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
+       SH = {
+         items: 1024,
+         perFile: 1024,
+ ... (42 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L28-L32` → after: `L69-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/227.js#L69-L70) · [Before (L28-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/227.js#L28-L32)

```diff
-     function FU(UU, XU, zU) {
-       const FU = UU + cU,
-         oU = XU + QU,
-         DU = zU + cU;
-       return FU < 0 || FU >= yU || DU < 0 || DU >= yU || oU < 0 || oU >= AU ? -1 : (FU * yU + DU) * AU + oU
+     function WH(HH) {
+       return HH.toLocaleString("en-US")
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L49` → after: `L73-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L73-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/227.js#L73-L75) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/227.js#L49)

```diff
-     function cU(UU) {}
+     function MH(HH, BH, LH) {
+       return HH > BH ? `has ${WH(HH)} ${LH} (the limit is ${WH(BH)})` : null
+     }
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L51` → after: `L77-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L77-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/227.js#L77-L79) · [Before (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/227.js#L51)

```diff
-     function yU(UU) {}
+     function xH(HH, BH) {
+       return Number.isInteger(HH) && HH >= 0 && HH < (null !== BH && void 0 !== BH ? BH : 0)
+     }
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L53` → after: `L81-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L81-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/227.js#L81-L83) · [Before (L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/227.js#L53)

```diff
-     function QU(UU) {}
+     function vH(HH) {
+       return Number.isInteger(HH) && HH >= 0
+     }
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L55` → after: `L85-L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L85-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/227.js#L85-L87) · [Before (L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/227.js#L55)

```diff
-     function AU(UU) {}
+     function PH(HH, BH) {
+       return void 0 !== HH && (!Array.isArray(HH) || HH.length > BH)
+     }
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L57` → after: `L89-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L89-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/227.js#L89-L91) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/227.js#L57)

```diff
-     function FU(UU) {}
+     function TH(HH, BH) {
+       return "object" === typeof HH && null !== HH && Object.keys(HH).length > BH
+     }
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L59` → after: `L93-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L93-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/227.js#L93-L96) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/227.js#L59)

```diff
-     function oU(UU, XU, zU) {}
+     function UH(HH) {
+       var BH;
+       return `${HH.normalized?"normalized ":""}${null!==(BH=AH.e[HH.componentType])&&void 0!==BH?BH:HH.componentType} ${HH.type}`
+     }
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L61` → after: `L98-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L98-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/227.js#L98-L104) · [Before (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/227.js#L61)

```diff
-     function DU(UU) {}
+     function VH(HH) {
+       const BH = BH => {
+         var LH;
+         return null !== (LH = HH[BH]) && void 0 !== LH ? LH : -1
+       };
+       return 255 === BH(0) && 216 === BH(1) ? "JPEG" : 82 === BH(0) && 73 === BH(1) && 87 === BH(8) && 69 === BH(9) ? "WebP" : 171 === BH(0) && 75 === BH(1) && 84 === BH(2) && 88 === BH(3) ? "KTX2" : "non-PNG"
+     }
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L63-L180` → after: `L106-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L106-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/227.js#L106-L107) · [Before (L63-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/227.js#L63-L180)

```diff
-     function EU(UU) {}
-   },
-   41863: (UU, XU, zU) => {
-     zU.d(XU, {
-       d: () => GU,
-       e: () => pU,
-       h: () => lU,
-       l: () => eU,
-       o: () => qU,
-       r: () => OU,
-       t: () => kU,
-       w: () => tU,
-       y: () => gU,
-       C: () => LU,
-       F: () => VU,
-       J: () => RU,
- ... (102 more removed lines; see GitHub link above)
+     function OH(HH) {
+       return HH.length >= 24 && [137, 80, 78, 71, 13, 10, 26, 10].every(((BH, LH) => HH[LH] === BH)) && 73 === HH[12] && 72 === HH[13] && 68 === HH[14] && 82 === HH[15]
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L185-L188` → after: `L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/227.js#L111) · [Before (L185-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/227.js#L185-L188)

```diff
-       if (0 === UU) return FU;
-       const XU = new QU.e(cU.Yb);
-       for (let zU = 0; zU < cU.Yb; zU++) XU[zU] = UU >>> 8 * zU & 255;
-       return XU
+       return /^[aeiou]/i.test(HH) ? `an ${HH}` : `a ${HH}`
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L190-L212` → after: `L113-L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L113-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/227.js#L113-L116) · [Before (L190-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/227.js#L190-L212)

```diff
-     class DU {
-       constructor(UU, XU) {
-         this.input = void 0, this.net = void 0, this.worker = void 0, this.cmd = void 0, this.input = new AU(XU, {
-           ptr: () => UU.AN(),
-           xY: () => UU.wAU(),
-           reserve: XU => UU.VAU(XU)
-         }), this.net = new AU(XU, {
-           ptr: () => UU.HAU(),
-           xY: () => UU.iAU(),
-           reserve: XU => UU.sAU(XU)
-         }), this.worker = new AU(XU, {
-           ptr: () => UU.YFU(),
-           xY: () => UU.EFU(),
-           reserve: XU => UU.nAU(XU)
-         }), this.cmd = new AU(XU, {
-           ptr: () => UU.BAU(),
- ... (7 more removed lines; see GitHub link above)
+ 
+     function kH(HH) {
+       const BH = HH.byteStride;
+       return void 0 === BH || Number.isInteger(BH) && BH >= 4 && BH <= 252 && BH % 4 === 0
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L237-L250` → after: `L119-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L119-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/227.js#L119-L124) · [Before (L237-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/227.js#L237-L250)

```diff
-     function SU(UU, XU) {
-       UU.forEachWorkerOut(((zU, yU, QU) => {
-         if ((0, cU.oe)(zU)) try {
-           var AU;
-           null === (AU = XU.worldgen) || void 0 === AU || AU.take(zU, QU)
-         } catch (oU) {
-           UU.crash(RU, oU)
-         } else try {
-           var FU;
-           null === (FU = XU.mesh) || void 0 === FU || FU.take(zU, yU, QU)
-         } catch (oU) {
-           UU.crash(OU, oU)
-         }
-       }))
+     function mH(HH, BH, LH) {
+       var AH, rH;
+       const SH = null === (AH = HH.bufferViews) || void 0 === AH ? void 0 : AH[LH];
+       if (!SH || !BH || 0 !== SH.buffer) return null;
+       const hH = null !== (rH = SH.byteOffset) && void 0 !== rH ? rH : 0;
+       return !vH(hH) || !vH(SH.byteLength) || hH + SH.byteLength > BH.byteLength ? null : BH.subarray(hH, hH + SH.byteLength)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L255-L261` → after: `L128-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L128-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/227.js#L128-L139) · [Before (L255-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/227.js#L255-L261)

```diff
-       let zU = !1;
-       const cU = () => {
-         zU = !1, XU()
-       };
-       return () => {
-         !zU && UU.cursor >= rU && (zU = !0, queueMicrotask(cU))
-       }
+       var LH, rH, SH;
+       const hH = AH.p[BH.type],
+         tH = AH.d[BH.componentType];
+       if (!hH || !tH || !Number.isInteger(BH.count) || BH.count < 0) return !1;
+       if (void 0 === BH.bufferView) return !0;
+       const zH = null === (LH = HH.bufferViews) || void 0 === LH ? void 0 : LH[BH.bufferView],
+         CH = null !== (rH = BH.byteOffset) && void 0 !== rH ? rH : 0;
+       if (!zH || !vH(CH) || CH % tH !== 0) return !1;
+       const EH = hH * tH,
+         XH = null !== (SH = zH.byteStride) && void 0 !== SH ? SH : EH;
+       if (XH < EH) return !1;
+       return (0 === BH.count ? 0 : CH + XH * (BH.count - 1) + EH) <= zH.byteLength
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L266` → after: `L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/227.js#L143) · [Before (L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/227.js#L266)

```diff
-       return wU.has(UU.site) ? UU.error instanceof WebAssembly.RuntimeError || (0, yU.l)(UU.error) : !fU.has(UU.site) && UU.error instanceof Error
+       return HH > rH.fileBytes ? `is ${(HH/hH).toFixed(1)} MiB (the limit is ${rH.fileBytes/hH} MiB)` : null
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L276-L342` → after: `L147-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L147-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/227.js#L147-L245) · [Before (L276-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/227.js#L276-L342)

```diff
-       const {
-         site: zU,
-         error: yU,
-         header: QU
-       } = UU, AU = QU ? (0, cU.ke)(QU.lastError) : "noFrame", FU = `CORE-${zU===aU?AU:zU}`, oU = null === yU || void 0 === yU ? "" : ` ${(0,EU.l)(yU)}`, DU = {
-         site: zU,
-         wasmBuild: XU.wasm,
-         clientVersion: XU.client
-       };
-       return QU && (DU.status = String(QU.status), DU.lastError = AU, DU.lastErrorCode = String(QU.lastError), DU.lastErrorDetail = String(QU.lastErrorDetail), DU.errorCount = String(QU.errorCount), DU.frameIndex = String(QU.frameIndex), DU.tickIndex = String(QU.tickIndex)), {
-         code: FU,
-         message: `core ${zU}, last error ${AU};${oU}`,
-         details: DU
-       }
-     }
-     class lU {
- ... (51 more removed lines; see GitHub link above)
+       try {
+         return function(HH, BH) {
+           var LH, hH, XH, WH, vH, IH, fH, lH, KH, cH, eH, qH, gH, NH, RH, jH, nH;
+           const FH = Array.isArray(HH.extensionsUsed) && HH.extensionsUsed.includes("KHR_draco_mesh_compression");
+           if (function(HH, BH) {
+               var LH, AH;
+               const {
+                 items: rH,
+                 perFile: hH,
+                 surfaces: tH,
+                 few: zH,
+                 bounds: CH,
+                 attributeMembers: EH
+               } = SH;
+               if (PH(HH.extensionsRequired, zH) || PH(HH.animations, 1 / 0) || PH(HH.skins, 1 / 0)) return !0;
+               if (null !== (LH = HH.animations) && void 0 !== LH && LH.length || null !== (AH = HH.skins) && void 0 !== AH && AH.length) return !1;
+ ... (83 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L344-L345` → after: `L247-L248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L247-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/227.js#L247-L248) · [Before (L344-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/227.js#L344-L345)

```diff
-               if (ZU ??= null === (yU = this.gameHost) || void 0 === yU ? void 0 : yU.takeFault(), void 0 === ZU && !this.takeSends(dU)) return cU.L.Fatal;
-               zU = this.core.ht()
+               if (!xH(HH, pH.length) || rB.has(HH)) return tH;
+               rB.add(HH)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L347-L351` → after: `L250-L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L250-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/227.js#L250-L257) · [Before (L347-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/227.js#L347-L351)

```diff
-             return zU
-           }))
-         } catch (nU) {
-           RU = {
-             error: nU
+           const hB = new Set,
+             tB = HH => {
+               var BH;
+               return !hB.has(HH) && (hB.add(HH), (null !== (BH = pH[HH].children) && void 0 !== BH ? BH : []).every(tB))
+             };
+           for (const AH of null !== (zB = JH[0].nodes) && void 0 !== zB ? zB : []) {
+             var zB;
+             if (!xH(AH, pH.length) || rB.has(AH) || !tB(AH)) return tH
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L353-L388` → after: `L259-L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L259-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/227.js#L259-L270) · [Before (L353-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/227.js#L353-L388)

```diff
-         }
-         ZU ??= null === (zU = this.gameHost) || void 0 === zU ? void 0 : zU.takeFault();
-         const LU = this.stopped || null !== RU || void 0 !== ZU;
-         this.rings.reset(LU ? AU.cursor : gU, LU ? oU.cursor : GU, LU ? DU.cursor : BU);
-         const eU = null === RU && void 0 === ZU,
-           CU = eU && !this.stopped && tU === cU.L.Fatal && 0 === this.core.CI(),
-           wU = eU && !CU ? this.headerView() : null,
-           qU = CU ? {
-             ...null !== (OU = this.lastHeader) && void 0 !== OU ? OU : (0, cU.Ee)(new Uint32Array(cU.fb)),
-             status: cU.L.Fatal,
-             lastError: cU.K.CoreBusy,
-             lastErrorDetail: 0
-           } : null === wU ? null : (0, cU.Ee)(wU);
-         var OU;
-         null !== qU && (this.lastHeader = qU);
-         const SU = null !== qU && tU !== cU.L.Fatal,
- ... (20 more removed lines; see GitHub link above)
+           for (const AH of pH) {
+             if (void 0 !== AH.matrix) return "uses node matrices";
+             if (void 0 !== AH.skin) return "uses skins";
+             if (void 0 !== AH.weights) return "uses morph targets";
+             if (void 0 !== AH.mesh && !xH(AH.mesh, yH.length)) return tH;
+             const HH = [
+               [AH.translation, 3],
+               [AH.rotation, 4],
+               [AH.scale, 3]
+             ];
+             for (const [BH, LH] of HH)
+               if (void 0 !== BH && (!Array.isArray(BH) || BH.length !== LH || !BH.every((HH => Number.isFinite(HH))))) return tH
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L390-L398` → after: `L272-L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L272-L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/227.js#L272-L335) · [Before (L390-L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/227.js#L390-L398)

```diff
-           return this.handEnvEvents()
-         }
-         for (const cU of HU) {
-           if (this.stopped) return !1;
-           try {
-             var VU, sU;
-             null === (VU = (sU = this.handlers).onNetEvent) || void 0 === VU || VU.call(sU, cU)
-           } catch (nU) {
-             return this.crashOn(WU, nU), !1
+           let CB = -1,
+             EB = 0,
+             XB = 0,
+             GB = null;
+           for (const rH of yH) {
+             if (void 0 !== rH.weights) return "uses morph targets";
+             if (0 === rH.primitives.length) return tH;
+             for (const LH of rH.primitives) {
+               var YB, uB;
+               const rH = null !== (YB = LH.mode) && void 0 !== YB ? YB : 4;
+               var QB;
+               if (4 !== rH && 0 !== rH) return `uses ${null!==(QB=uH[rH])&&void 0!==QB?QB:`mode ${rH}`} primitives`;
+               if (void 0 !== LH.targets) return "uses morph targets";
+               if (void 0 !== LH.material && !xH(LH.material, HB.length)) return tH;
+               const SH = FH ? null === (uB = LH.extensions) || void 0 === uB ? void 0 : uB.KHR_draco_mesh_compression : void 0;
+               if (SH) {
+ ... (48 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L400-L410` → after: `L337-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L337-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/227.js#L337-L343) · [Before (L400-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/227.js#L400-L410)

```diff
-         }
-         return this.handEnvEvents()
-       }
-       handEnvEvents() {
-         for (const QU of this.graceEvents) {
-           if (this.stopped) return !1;
-           try {
-             var UU, XU;
-             null === (UU = (XU = this.handlers).onReconnectGrace) || void 0 === UU || UU.call(XU, QU)
-           } catch (yU) {
-             return this.crashOn(WU, yU), !1
+           let MB = 0,
+             xB = 0,
+             vB = 0;
+           for (let AH = 0; AH < pH.length; AH++) {
+             const HH = pH[AH].mesh;
+             if (void 0 !== HH && hB.has(AH))
+               for (const BH of yH[HH].primitives) vB++, MB += sH[BH.attributes.POSITION].count, void 0 !== BH.indices && (xB += sH[BH.indices].count)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L412-L415` → after: `L345-L347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L345-L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/227.js#L345-L347) · [Before (L412-L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/227.js#L412-L415)

```diff
-         }
-         for (const QU of this.envEvents) {
-           if (this.stopped) return !1;
-           try {
+           const PB = null !== (jH = null !== (nH = MH(MB, rH.vertices, "vertices")) && void 0 !== nH ? nH : MH(xB, rH.indices, "indices")) && void 0 !== jH ? jH : MH(vB, rH.primitives, "primitives");
+           if (PB) return PB;
+           for (const AH of HB) {
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L417-L447` → after: `L349-L358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L349-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/227.js#L349-L358) · [Before (L417-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/227.js#L417-L447)

```diff
-             null === (zU = (cU = this.handlers).onEnvEvent) || void 0 === zU || zU.call(cU, QU)
-           } catch (yU) {
-             return this.crashOn(dU, yU), !1
-           }
-         }
-         return !this.stopped
-       }
-       setEventWalker(UU) {
-         this.eventWalker = UU
-       }
-       writePendingInput() {
-         if (this.stopped) return !1;
-         const {
-           input: UU
-         } = this.rings;
-         try {
- ... (15 more removed lines; see GitHub link above)
+             if (void 0 !== AH.emissiveTexture) return "uses an emissive texture";
+             const BH = null !== (TB = AH.alphaMode) && void 0 !== TB ? TB : "OPAQUE";
+             if ("OPAQUE" !== BH && "MASK" !== BH && "BLEND" !== BH) return tH;
+             const LH = null === (UB = AH.pbrMetallicRoughness) || void 0 === UB ? void 0 : UB.baseColorTexture;
+             if (LH) {
+               var VB, OB, bB, kB, mB;
+               const BH = null !== (VB = HH.extensionsUsed) && void 0 !== VB && VB.includes("KHR_texture_transform") ? null === (OB = LH.extensions) || void 0 === OB ? void 0 : OB.KHR_texture_transform : void 0;
+               if (0 !== (null !== (bB = LH.texCoord) && void 0 !== bB ? bB : 0) || 0 !== (null !== (kB = null === BH || void 0 === BH ? void 0 : BH.texCoord) && void 0 !== kB ? kB : 0)) return "uses a second UV set";
+               const AH = BB[LH.index];
+               if (!AH || !xH(AH.source, LB.length) || void 0 !== AH.sampler && !xH(AH.sampler, null === (mB = HH.samplers) || void 0 === mB ? void 0 : mB.length)) return tH
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L451-L675` → after: `L361-L374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L361-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/227.js#L361-L374) · [Before (L451-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/227.js#L451-L675)

```diff
-           QU > 0 && this.unsentOptions.splice(0, QU)
-         } catch (XU) {
-           return this.crash(gU, XU), !1
-         }
-         return !0
-       }
-       setHoldDraws(UU) {
-         this.drawsHeld = UU
-       }
-       setUiPrefs(UU) {
-         this.unsentUiPrefs = {
-           ...UU
-         }
-       }
-       setEnvPrefs(UU) {
-         this.unsentEnvPrefs = {
- ... (209 more removed lines; see GitHub link above)
+           for (const AH of LB) {
+             if (void 0 !== AH.uri) return zH;
+             if (void 0 === AH.bufferView) return tH;
+             const LH = mH(HH, BH, AH.bufferView);
+             if (!LH) return tH;
+             if ("image/png" !== AH.mimeType) {
+               var oB, IB, fB;
+               return `has ${bH(null!==(oB=null!==(IB={"image/jpeg":"JPEG","image/webp":"WebP","image/ktx2":"KTX2"}[null!==(fB=AH.mimeType)&&void 0!==fB?fB:""])&&void 0!==IB?IB:AH.mimeType)&&void 0!==oB?oB:"untyped")} image`
+             }
+             if (!OH(LH)) return `has ${bH(VH(LH))} image`;
+             const SH = new DataView(LH.buffer, LH.byteOffset, LH.byteLength),
+               hH = SH.getUint32(16),
+               CH = SH.getUint32(20);
+             if (hH > rH.imageSide || CH > rH.imageSide) return `has a ${hH} \xd7 ${CH} image (the limit is ${rH.imageSide})`
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L677-L678` → after: `L376-L378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L376-L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/227.js#L376-L378) · [Before (L677-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/227.js#L677-L678)

```diff
-           EU = UU + (0, cU.De)(oU)
-         }
+           return null
+         }(HH, BH)
+       } catch {
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L800-L802` → after: `L384-L385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L384-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/227.js#L384-L385) · [Before (L800-L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/227.js#L800-L802)

```diff
-       yU = {
-         scanned: !1
-       };
+       const BH = IH(HH.byteLength);
+       if (BH) return BH;
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L804-L806` → after: `L387-L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L387-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/227.js#L387-L394) · [Before (L804-L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/227.js#L804-L806)

```diff
-         return UU()
-       } finally {
-         yU = null
+         const {
+           json: BH,
+           bin: LH
+         } = (0, AH.z)(HH);
+         return fH(BH, LH)
+       } catch (LH) {
+         if (LH instanceof AH.n) return LH.reason;
+         throw LH
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L817-L838` → after: `L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/227.js#L398) · [Before (L817-L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/227.js#L817-L838)

```diff
-   41927: (UU, XU, zU) => {
-     zU.d(XU, {
-       e: () => cU
-     });
-     const cU = {
-       webgpu: "rust_webgpu",
-       webgl: "rust_webgl2",
-       webgl1: "rust_webgl1"
-     }
-   },
-   41947: (UU, XU, zU) => {
-     function cU() {
-       return zU(41955)
-     }
- 
-     function yU() {
- ... (6 more removed lines; see GitHub link above)
+   35071: (HH, BH, LH) => {
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L842-L850` → after: `L402-L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L402-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/227.js#L402-L409) · [Before (L842-L850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/227.js#L842-L850)

```diff
-       f: () => yU
-     })
-   },
-   36981: (UU, XU, zU) => {
-     zU.d(XU, {
-       d: () => FU,
-       h: () => DU,
-       j: () => AU,
-       l: () => YU
+       g: () => WH,
+       k: () => hH,
+       n: () => SH,
+       p: () => QH,
+       q: () => XH,
+       t: () => GH,
+       v: () => tH,
+       z: () => EH
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L852-L859` → after: `L411-L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L411-L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/227.js#L411-L416) · [Before (L852-L859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/227.js#L852-L859)

```diff
-     var cU = zU(36972),
-       yU = zU(13);
-     const QU = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;
- 
-     function AU(UU) {
-       if (UU instanceof WebAssembly.RuntimeError) return !0;
-       const XU = UU instanceof Error ? UU.stack : void 0;
-       return "string" === typeof XU && QU.test(XU)
+     const AH = 1179937895,
+       rH = 1313821514;
+     class SH extends Error {
+       constructor(HH) {
+         super(`GLB refused: it ${HH}`), this.reason = HH, this.name = "GlbRefused"
+       }
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L861-L869` → after: `L418-L421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L418-L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/227.js#L418-L421) · [Before (L861-L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/227.js#L861-L869)

```diff
- 
-     function FU(UU, XU, zU) {
-       var yU;
-       const AU = UU instanceof Error ? UU.name : "thrown",
-         FU = (UU instanceof Error && null !== (yU = UU.stack) && void 0 !== yU ? yU : "").split("\n").filter((UU => QU.test(UU))).slice(0, 8).map((UU => UU.trim())),
-         oU = null === XU ? "wasm memory unknown" : `wasm memory ${Math.round(XU/2**20)} MB`,
-         DU = null === zU.panic ? "" : `, panic: ${(0,cU.e)(zU.panic)}`,
-         EU = `${AU}: ${UU instanceof Error?UU.message:String(UU)}`;
-       return `${(0,cU.l)(zU.kind,zU.refusedBytes)} ${EU} (${oU})${DU}${FU.length>0?` | ${FU.join(" < ")}`:""}`
+     class hH extends Error {
+       constructor(HH) {
+         super(HH), this.name = "GlbError"
+       }
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L874-L882` → after: `L425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/227.js#L425) · [Before (L874-L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/227.js#L874-L882)

```diff
-       var XU;
-       let zU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
-       if (!(UU instanceof Error) || !oU.test(UU.message)) return {};
-       if (!("detached" in zU)) return {
-         arrayBufferDetached: "absent"
-       };
-       return {
-         arrayBufferDetached: (0, yU.W)(null === (XU = (0, yU.P)(zU, "detached")) || void 0 === XU ? void 0 : XU.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
-       }
+       return Reflect.get(HH, "scene")
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L884` → after: `L427-L428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L427-L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/227.js#L427-L428) · [Before (L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/227.js#L884)

```diff
-     const EU = 500;
+     const zH = 5130562,
+       CH = "is not a binary glTF 2.0 file";
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L887-L896` → after: `L431-L471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L431-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/227.js#L431-L471) · [Before (L887-L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/227.js#L887-L896)

```diff
-       let XU = "[object Object]";
-       try {
-         XU = String(UU)
-       } catch {}
-       if ("[object Object]" !== XU) return XU;
-       try {
-         var zU, cU;
-         return null !== (zU = null === (cU = JSON.stringify(UU)) || void 0 === cU ? void 0 : cU.slice(0, EU)) && void 0 !== zU ? zU : XU
-       } catch {
-         return XU
+       var BH;
+       const LH = HH instanceof Uint8Array ? HH : new Uint8Array(HH),
+         hH = function(HH) {
+           const BH = new DataView(HH.buffer, HH.byteOffset, HH.byteLength);
+           if (HH.byteLength < 20 || BH.getUint32(0, !0) !== AH || 2 !== BH.getUint32(4, !0)) return null;
+           const LH = Math.min(BH.getUint32(8, !0), HH.byteLength),
+             SH = BH.getUint32(12, !0);
+           if (BH.getUint32(16, !0) !== rH || 20 + SH > LH) return null;
+           let hH;
+           try {
+             hH = JSON.parse((new TextDecoder).decode(HH.subarray(20, 20 + SH)))
+           } catch {
+             return null
+           }
+           return "object" === typeof hH && null !== hH ? {
+             json: hH,
+ ... (25 more added lines; see GitHub link above)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L936-L938` → after: `L474-L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L474-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/227.js#L474-L476) · [Before (L936-L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/227.js#L936-L938)

```diff
-         kind: cU,
-         panic: QU > 0 ? null : yU,
-         refusedBytes: QU
+         json: tH,
+         bin: QH,
+         fileBytes: LH.byteLength
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L944` → after: `L481-L493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L481-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/227.js#L481-L493) · [Before (L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/227.js#L944)

```diff
-       return UU.replace(/\s*\n\s*/g, " / ").slice(0, FU)
+       const BH = HH.slice(HH.indexOf(",") + 1),
+         LH = Uint8Array.fromBase64;
+       if (LH) return LH(BH).buffer;
+       const AH = atob(BH),
+         rH = new Uint8Array(AH.length);
+       for (let SH = 0; SH < AH.length; SH++) rH[SH] = AH.charCodeAt(SH);
+       return rH.buffer
+     }
+     async function GH(HH) {
+       if (HH.startsWith("data:")) return XH(HH);
+       const BH = await fetch(HH);
+       if (!BH.ok) throw new hH(`fetching ${HH} failed: ${BH.status} ${BH.statusText}`);
+       return await BH.arrayBuffer()
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/228.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/228.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3)

#### 1. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L4-L8` → after: `L4-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/228.js#L4-L15) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/228.js#L4-L8)

```diff
-   37201: (UU, XU, zU) => {
-     zU.d(XU, {
-       b: () => AU,
-       c: () => yU,
-       e: () => QU
+   35079: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       animatedBlockTextures: () => zH,
+       armourAtlasUrl: () => hH,
+       averageColors: () => CH,
+       blockAtlasUrls: () => SH,
+       blockAtlasWidth: () => AH,
+       buildHash: () => XH,
+       builtTextureIndexFingerprint: () => EH,
+       imagesPerAtlas: () => rH,
+       outputHash: () => GH,
+       rotatedBlockTextures: () => tH
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L10-L277` → after: `L17-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L17-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/228.js#L17-L20) · [Before (L10-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/228.js#L10-L277)

```diff
-     var cU = zU(1877);
-     class yU extends Error {
-       constructor(UU) {
-         super("The game server didn't answer in time"), this.leg = UU, this.name = "SeatRequestTimedOut"
-       }
-     }
-     const QU = new class {
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
+     const AH = 8,
+       rH = [256, 256, 256, 256, 256, 256, 114],
+       SH = [LH(35081), LH(35090), LH(35095), LH(35102), LH(35109), LH(35115), LH(35118)],
+       hH = LH(35125),
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L279-L383` → after: `L22-L527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L22-L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/228.js#L22-L527) · [Before (L279-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/228.js#L279-L383)

```diff
-         halvedAt: null,
-         reloadSpent: !1
-       };
- 
-     function fU() {
-       let UU = null;
-       try {
-         var XU;
-         UU = JSON.parse(null !== (XU = (0, DU.p)((0, DU.w)(), rU)) && void 0 !== XU ? XU : "null")
-       } catch {
-         return uU
-       }
-       if ("object" !== typeof UU || null === UU) return uU;
-       const {
-         halvedAt: zU,
-         reloadSpent: cU
- ... (89 more removed lines; see GitHub link above)
+         "alloy_kiln_top[rot[1": LH(35127),
+         "alloy_kiln_top[rot[2": LH(35134),
+         "alloy_kiln_top[rot[3": LH(35138),
+         "alloy_kiln_top[rot[4": LH(35146),
+         "auto_bench_top[rot[1": LH(35155),
+         "auto_bench_top[rot[2": LH(35157),
+         "auto_bench_top[rot[3": LH(35165),
+         "auto_bench_top[rot[4": LH(35170),
+         "belt_tunnel_exit_top[rot[1": LH(35178),
+         "belt_tunnel_exit_top[rot[2": LH(35180),
+         "belt_tunnel_exit_top[rot[3": LH(35184),
+         "belt_tunnel_exit_top[rot[4": LH(35191),
+         "belt_tunnel_top[rot[1": LH(35196),
+         "belt_tunnel_top[rot[2": LH(35205),
+         "belt_tunnel_top[rot[3": LH(35211),
+         "belt_tunnel_top[rot[4": LH(35219),
+ ... (490 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L386-L616` → after: `L530-L10909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L530-L10909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/228.js#L530-L10909) · [Before (L386-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/228.js#L386-L616)

```diff
-         targetBytes: FU,
-         leastBytes: oU
-       };
- 
-     function ZU(UU) {
-       return {
-         targetBytes: UU,
-         leastBytes: 0
-       }
-     }
- 
-     function RU(UU) {
-       return UU >= yU.d ? GU : BU
-     }
-     const PU = 2 * QU;
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

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/229.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/229.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e)

#### 1. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L4-L16` → after: `L5-L8304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L5-L8304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/229.js#L5-L8304) · [Before (L4-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/229.js#L4-L16)

```diff
-   37027: (UU, XU, zU) => {
-     zU.r(XU), zU.d(XU, {
-       ITEM_FILES_WITHOUT_SPRITE: () => FU,
-       ITEM_SPRITES: () => QU,
-       ITEM_SPRITES_WITHOUT_FILE: () => AU,
-       ITEM_SPRITE_RUNS: () => yU,
-       MAX_SPRITE_ITEM_ID: () => cU
-     });
-     const cU = 10113,
-       yU = "$######$################################################%=####################################################################################################################################################$########################################$#################### … [truncated]
-       QU = "unloaded|dirt|coarse_dirt|sand|clay|gravel|snow|log_maple|log_pine|log_plum|log_cedar|log_aspen|log_jungle|planks_maple|planks_aspen|planks_plum|planks_jungle|planks_pine|planks_cedar|stripped_maple_log|stripped_aspen_log|stripped_plum_log|stripped_jungle_log|stripped … [truncated]
-       AU = "############################################################################################################################################4+##&###############%####$##3########################0######&#####&####$%###############<#####$#&###%##########'*######G%#####-$ … [truncated]
-       FU = "amethite_armour_2|astral_armour_2|beetroot_plant_stage0|beetroot_plant_stage1|beetroot_plant_stage2|berry_bush_stage0|book_page|camel_painting_option2|carrot_plant_stage0|carrot_plant_stage1|carrot_plant_stage2|crimson_trapdoor|cursemetal_armour_2|date_pudding_option2 … [truncated]
+   40708: (HH, BH, LH) => {
+     function AH() {
+       return "object" === typeof process && "object" === typeof process.versions && "undefined" !== typeof process.versions.node
+     }
+ 
+     function rH(HH) {
+       return HH instanceof Uint8Array && (!AH() || !Buffer.isBuffer(HH))
+     }
+ 
+     function SH(HH) {
+       return HH instanceof ArrayBuffer
+     }
+ 
+     function hH(HH) {
+       return !!AH() && Buffer.isBuffer(HH)
+     }
+ ... (8284 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/230.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/230.js` (25 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341)

#### 1. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/230.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/230.js#L4)

```diff
-   37036: (UU, XU, zU) => {
+   44985: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L6` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/230.js#L6-L7) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/230.js#L6)

```diff
-       CreateCustomLobby: () => wU
+       loadGlbAsset: () => bB,
+       loadGlbTree: () => OB
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L8-L34` → after: `L9-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/230.js#L9-L11) · [Before (L8-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/230.js#L8-L34)

```diff
-     zU(37039);
-     var cU = zU(5057),
-       yU = zU(61),
-       QU = zU(1726),
-       AU = zU(1106),
-       FU = zU.n(AU),
-       oU = zU(3490),
-       DU = zU(1131),
-       EU = zU(1203),
-       YU = zU(5026),
-       NU = zU(1494),
-       IU = zU(37046),
-       pU = zU(1193),
-       aU = zU(1376),
-       tU = zU(1568),
-       gU = zU(27),
- ... (11 more removed lines; see GitHub link above)
+     var AH = LH(38790),
+       rH = LH(120),
+       SH = LH(1139);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L37-L42` → after: `L14-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L14-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/230.js#L14-L44) · [Before (L37-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/230.js#L37-L42)

```diff
-       var XU, zU, AU, wU;
-       let {
-         gameNameWithVariation: qU,
-         close: OU,
-         initialDefaultGamemode: SU
-       } = UU;
+       return (0, rH.isDiscordClient)() ? `https://${SH.e.discordDomain}/${HH.href}` : HH.href
+     }
+     const tH = {
+       scriptUrl: hH(new LH.U(LH(44989))),
+       wasmBinaryUrl: hH(new LH.U(LH(44996)))
+     };
+     var zH = LH(37014),
+       CH = LH.n(zH);
+ 
+     function EH() {
+       return CH()('(()=>{class HH extends Error{}function BH(BH,LH){const AH=BH._malloc(LH);if(0===AH)throw new HH(`Draco: the decoder\'s heap refused ${LH} bytes`);return AH}function LH(LH,AH,rH,SH){let hH=null,tH=null,zH=null;try{hH=new LH.Decoder,tH=new LH.DecoderBuffer,tH.Ini … [truncated]
+     }
+     var XH = LH(81),
+       GH = LH(4802),
+       YH = LH(3595);
+     const uH = 2;
+ ... (15 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L44-L81` → after: `L46-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L46-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/230.js#L46-L75) · [Before (L44-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/230.js#L44-L81)

```diff
-         t: rU
-       } = (0, pU.I)(), uU = (0, tU.useNavigatePreserveSearch)(), [fU, iU] = (0, yU.useState)("Enter"), [HU, MU] = (0, yU.useState)(""), vU = yU.useRef(null), VU = null === (XU = ZU.d[qU]) || void 0 === XU ? void 0 : XU.showWorldsInsteadOfCustomLobbies, sU = VU ? 1 : null === (zU  … [truncated]
-       SU || (SU = "classic_creative" === qU || "classic_creativeFlat" === qU ? "creative" : "classic" === qU ? "peaceful" : "survival");
-       const lU = {
-         baseOptions: {
-           gameNameWithVariation: VU ? "classic" : qU,
-           name: "",
-           visibility: "unlisted"
-         },
-         listedOptions: {
-           description: "",
-           color: "",
-           emojis: ""
-         },
-         mapOptions: {
-           mapType: "classic_creativeFlat" === qU ? "flat" : "default",
- ... (22 more removed lines; see GitHub link above)
+         scriptUrl: HH,
+         wasmBinaryUrl: BH
+       } = WH;
+       return MH ??= fetch(BH).then((HH => {
+         if (!HH.ok) throw new Error(`Draco: fetching ${BH} failed: ${HH.status}`);
+         return HH.arrayBuffer()
+       })), MH.catch((() => {
+         MH = null
+       })), TH.workersStarted++, Promise.all([MH, (0, YH.l)()]).then((BH => {
+         let [LH] = BH;
+         return new Promise(((BH, AH) => {
+           const rH = new EH;
+           rH.onerror = HH => {
+             rH.onmessage = null, rH.onerror = null, rH.terminate(), AH(new Error("Draco: the decode worker failed to start" + (HH.message ? `: ${HH.message}` : " (its script did not load)")))
+           }, rH.onmessage = HH => {
+             let {
+ ... (14 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L83-L91` → after: `L77-L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L77-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/230.js#L77-L81) · [Before (L83-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/230.js#L83-L91)

```diff
-       function bU(UU, XU) {
-         JU({
-           ...xU,
-           baseOptions: {
-             ...xU.baseOptions,
-             [UU]: XU
-           }
-         })
-       }
+     function OH(HH) {
+       const BH = xH.indexOf(HH); - 1 !== BH && xH.splice(BH, 1);
+       const LH = vH.shift();
+       LH && kH(LH)
+     }
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L93-L98` → after: `L83-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L83-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/230.js#L83-L104) · [Before (L93-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/230.js#L93-L98)

```diff
-       function TU(UU, XU) {
-         JU({
-           ...xU,
-           listedOptions: {
-             ...xU.listedOptions,
-             [UU]: XU
+     function bH(HH, BH) {
+       HH.busy = !0, HH.releaseTimer && (clearTimeout(HH.releaseTimer), HH.releaseTimer = null);
+       HH.worker.then((LH => {
+         const AH = PH++;
+         LH.onmessage = rH => {
+           let {
+             data: SH
+           } = rH;
+           if (("decoded" === SH.id || "decodeError" === SH.id) && SH.seq === AH) {
+             if (LH.onmessage = null, LH.onerror = null, "decoded" === SH.id) return TH.decodes++, BH.resolve({
+               indices: SH.indices,
+               attributes: SH.attributes,
+               totalVertices: SH.totalVertices
+             }), void(() => {
+               const BH = vH.shift();
+               BH ? bH(HH, BH) : (HH.busy = !1, HH.releaseTimer = setTimeout((() => {
+ ... (6 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L100-L101` → after: `L106-L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L106-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/230.js#L106-L120) · [Before (L100-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/230.js#L100-L101)

```diff
-         })
-       }
+         }, LH.onerror = AH => {
+           LH.onmessage = null, LH.onerror = null, LH.terminate(), BH.reject(new Error(`Draco: the decode worker failed: ${AH.message}`)), OH(HH)
+         };
+         const rH = {
+           id: "decode",
+           seq: AH,
+           data: BH.data,
+           attributeIds: BH.attributeIds,
+           expected: BH.expected
+         };
+         LH.postMessage(rH, [BH.data.buffer])
+       }), (LH => {
+         BH.reject(LH instanceof Error ? LH : new Error(String(LH))), OH(HH)
+       }))
+     }
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L103-L110` → after: `L122-L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L122-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/230.js#L122-L137) · [Before (L103-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/230.js#L103-L110)

```diff
-       function hU(UU, XU) {
-         JU({
-           ...xU,
-           worldOptions: {
-             ...xU.worldOptions,
-             [UU]: XU
-           }
-         })
+     function kH(HH) {
+       const BH = xH.find((HH => !HH.busy));
+       if (BH) bH(BH, HH);
+       else {
+         if (UH ??= (0, GH.e)() ? 1 : function(HH, BH) {
+             const LH = HH ? Math.max(1, Math.min(Math.floor(.5 * HH), 4)) : 1;
+             return BH ? Math.min(LH, uH) : LH
+           }("object" === typeof navigator ? navigator.hardwareConcurrency : void 0, (0, XH.isMobile)()), xH.length < UH) {
+           const BH = {
+             worker: VH(),
+             busy: !0,
+             releaseTimer: null
+           };
+           return xH.push(BH), TH.mostWorkers = Math.max(TH.mostWorkers, xH.length), void bH(BH, HH)
+         }
+         vH.push(HH)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L113` → after: `L141-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/230.js#L141-L142) · [Before (L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/230.js#L113)

```diff
-       function UX(UU) {
+     function mH(HH, BH, LH) {
+       return new Promise(((AH, rH) => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L115-L119` → after: `L144-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L144-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/230.js#L144-L148) · [Before (L115-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/230.js#L115-L119)

```diff
-           ...xU,
-           mapOptions: {
-             ...xU.mapOptions,
-             ...UU
-           }
+           data: new Int8Array(HH.buffer, HH.byteOffset, HH.byteLength).slice(),
+           attributeIds: BH,
+           expected: LH,
+           resolve: AH,
+           reject: rH
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L121-L194` → after: `L150-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L150-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/230.js#L150-L188) · [Before (L121-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/230.js#L121-L194)

```diff
-       }(0, yU.useEffect)((() => {
-         YU.d.getNewStarterName().then((UU => {
-           JU((XU => "" !== XU.baseOptions.name ? XU : {
-             ...XU,
-             baseOptions: {
-               ...XU.baseOptions,
-               name: UU
-             }
-           }))
-         })).catch((UU => {
-           console.error("Error getting new starter name:", UU)
-         }))
-       }), []), (0, yU.useEffect)((() => {
-         "customSchematic" === xU.mapOptions.mapType && null === jU && (0, DU.postJsonWithMetricsCookiesAndJsonResponse)(`${EU.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
-           retries: 0,
-           minTimeout: 3e3
- ... (58 more removed lines; see GitHub link above)
+       }))
+     }
+     var oH = LH(38241),
+       IH = LH(38251),
+       fH = LH(35071),
+       lH = LH(35067);
+     const KH = {
+       index: -1,
+       magFilter: void 0,
+       minFilter: void 0,
+       wrapS: void 0,
+       wrapT: void 0
+     };
+ 
+     function cH(HH) {
+       const BH = (0, lH.g)(HH.byteLength);
+ ... (23 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L196-L334` → after: `L190-L244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L190-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/230.js#L190-L244) · [Before (L196-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/230.js#L196-L334)

```diff
-             maxLength: PU.H,
-             defaultValue: xU.baseOptions.name
-           })
-         });
-       return (0, CU.jsxs)("div", {
-         className: FU()("CreateCustomLobby", {
-           CreateCustomLobbySuccess: "Success" === fU,
-           AdvancedMode: nU
-         }),
-         children: ["Success" === fU && (0, CU.jsxs)("div", {
-           className: "CreateCustomLobbySuccessOverlay",
-           children: [(0, CU.jsxs)("div", {
-             className: "CreateCustomLobbySuccessTitle FullyFancyText AnimFadeInScaleUp",
-             children: [(0, CU.jsx)(dU.d, {
-               name: "check"
-             }), (0, CU.jsx)(kU.e, {})]
- ... (123 more removed lines; see GitHub link above)
+             vH = new Map,
+             PH = BH => {
+               let LH = vH.get(BH);
+               if (!LH) {
+                 var AH;
+                 const rH = HH.accessors[BH];
+                 LH = {
+                   index: BH,
+                   count: rH.count,
+                   type: rH.type,
+                   numComponents: fH.p[rH.type],
+                   componentType: rH.componentType,
+                   normalized: null !== (AH = rH.normalized) && void 0 !== AH && AH,
+                   byteOffset: rH.byteOffset,
+                   bufferView: void 0 === rH.bufferView ? null : xH(rH.bufferView),
+                   min: rH.min,
+ ... (39 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L453-L475` → after: `L256-L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L256-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/230.js#L256-L370) · [Before (L453-L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/230.js#L453-L475)

```diff
-               }()
-             },
-             children: rU("general:create")
-           }), VU && (0, CU.jsx)("div", {
-             className: "CreateCustomLobbyAdvancedToggle",
-             "data-pad-ignore": zX || void 0,
-             children: (0, CU.jsx)(BU.g, {
-               label: "customLobby:showAdvancedOptions",
-               disabled: zX,
-               onLabelClick: () => {
-                 mU(!nU)
-               },
-               children: (0, CU.jsx)(BU.e, {
-                 checked: nU,
-                 setChecked: mU
-               })
- ... (7 more removed lines; see GitHub link above)
+               }));
+               return {
+                 index: LH,
+                 name: BH.name,
+                 primitives: AH,
+                 extras: BH.extras
+               }
+             })),
+             VH = (null !== (SH = HH.nodes) && void 0 !== SH ? SH : []).map(((HH, BH) => {
+               var LH, AH;
+               return {
+                 index: BH,
+                 name: HH.name,
+                 children: null !== (LH = HH.children) && void 0 !== LH ? LH : [],
+                 mesh: null !== (AH = HH.mesh) && void 0 !== AH ? AH : null,
+                 translation: HH.translation,
+ ... (99 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L489-L503` → after: `L374-L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L374-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/230.js#L374-L390) · [Before (L489-L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/230.js#L489-L503)

```diff
-       let {
-         locked: XU,
-         children: zU
-       } = UU;
-       const cU = (0, QU.useRef)(null),
-         oU = (0, AU.b)(cU, "y");
-       return (0, FU.jsx)("div", {
-         ref: cU,
-         className: yU()("CreateCustomLobbyBody", {
-           CreateCustomLobbyBodyMoreAbove: oU.before,
-           CreateCustomLobbyBodyMoreBelow: oU.after
-         }),
-         "data-pad-ignore": XU || void 0,
-         children: zU
-       })
+       const BH = HH.bufferView,
+         LH = 5125 === HH.componentType ? Uint32Array : Uint16Array,
+         AH = BH.bytes.buffer,
+         rH = BH.bytes.byteOffset + (HH.byteOffset || 0);
+       return rH % LH.BYTES_PER_ELEMENT !== 0 ? new LH(AH.slice(rH, rH + HH.count * LH.BYTES_PER_ELEMENT), 0) : new LH(AH, rH, HH.count)
+     }
+ 
+     function RH(HH, BH) {
+       if (HH.min && HH.max) return [new Float64Array(HH.min), new Float64Array(HH.max)];
+       const LH = BH.find((HH => {
+           let {
+             kind: BH
+           } = HH;
+           return "position" === BH
+         })),
+         AH = LH ? (0, IH.l)(LH, HH.count) : new Float32Array(0);
+ ... (1 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L520-L553` → after: `L394-L505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L394-L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/230.js#L394-L505) · [Before (L520-L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/230.js#L520-L553)

```diff
-       let {
-         loading: XU,
-         schematics: zU,
-         onSchematicPicked: cU,
-         selectedSchematicIdList: yU = [],
-         disableAutoExport: oU
-       } = UU;
-       const {
-         t: EU
-       } = (0, QU.I)();
-       return (0, DU.jsxs)("div", {
-         className: "SchematicList",
-         children: [XU && (0, DU.jsx)(AU.b, {}), !XU && 0 === zU.length && (0, DU.jsx)("div", {
-           className: "NoSchematicsText",
-           children: EU("worldBuilder:noSavedSchematic")
-         }), !XU && zU.map((UU => (0, DU.jsx)(FU.g, {
- ... (18 more removed lines; see GitHub link above)
+       const BH = HH.attributes.map((HH => {
+           var BH, LH;
+           let {
+             kind: AH,
+             accessor: rH
+           } = HH;
+           const {
+             bufferView: SH,
+             numComponents: hH
+           } = rH;
+           if (!SH) {
+             return {
+               kind: AH,
+               data: gH(rH, (() => new Float32Array(hH * rH.count))),
+               offset: 0,
+               stride: 4 * hH,
+ ... (96 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L558-L560` → after: `L520-L522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L520-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/230.js#L520-L522) · [Before (L558-L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/230.js#L558-L560)

```diff
-         ownedSchematics: XU,
-         currentWorldSchematicId: zU,
-         onClose: yU
+         translation: LH,
+         rotation: AH,
+         scale: rH
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L562-L589` → after: `L524-L644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L524-L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/230.js#L524-L644) · [Before (L562-L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/230.js#L562-L589)

```diff
-       const {
-         t: AU
-       } = (0, QU.I)(), [FU, YU] = (0, cU.useState)(null);
-       return (0, DU.jsxs)("div", {
-         className: "SchematicListWindow",
-         children: [null === FU && (0, DU.jsxs)(DU.Fragment, {
-           children: [(0, DU.jsx)("h1", {
-             className: "SchematicPopupTitle",
-             children: AU("worldBuilder:schematicList")
-           }), (0, DU.jsx)("h2", {
-             className: "SchematicPopupSubtitle",
-             children: AU("worldBuilder:clickSchematicForOptions")
-           }), (0, DU.jsx)("div", {
-             className: "SchematicPopupSchematicListContainer",
-             children: (0, DU.jsx)(EU, {
-               loading: !1,
- ... (12 more removed lines; see GitHub link above)
+       const SH = new Float32Array(16);
+       return (0, oH.e)(rH, 0, AH, 0, LH, 0, SH), BH && (0, oH.l)(SH, BH, 0, SH), SH
+     }
+     class LB {
+       constructor(HH, BH, LH, AH) {
+         this.model = HH, this.decode = BH, this.fileInfo = LH, this.uniqueRootUrl = AH, this.primitives = void 0, this.parents = new Map, this.uses = new Map, this.own = new Map;
+         const rH = new Set,
+           SH = (BH, LH) => {
+             const AH = HH.nodes[BH];
+             if (this.parents.has(AH)) throw new fH.k(`/nodes/${BH}: Invalid recursive node hierarchy`);
+             this.parents.set(AH, LH);
+             const hH = null === AH.mesh ? [] : HH.meshes[AH.mesh].primitives,
+               tH = hH.map((HH => {
+                 const BH = hH.length > 1;
+                 return {
+                   name: BH ? `${ZH(AH)}_primitive${HH.index}` : ZH(AH),
+ ... (105 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L591-L592` → after: `L646-L651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L646-L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/230.js#L646-L651) · [Before (L591-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/230.js#L591-L592)

```diff
-           onClose: () => {
-             YU(null), yU()
+           sets: {
+             wrapU: pH(SH.wrapS),
+             wrapV: pH(SH.wrapT),
+             ...EH,
+             coordinatesIndex: null !== (LH = null === rH || void 0 === rH ? void 0 : rH.texCoord) && void 0 !== LH ? LH : 0,
+             hasAlpha: BH
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L594-L595` → after: `L653-L697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L653-L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/230.js#L653-L697) · [Before (L594-L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/230.js#L594-L595)

```diff
-         })]
-       })
+         }
+       }
+     }
+     async function AB(HH, BH, LH, AH, rH, SH) {
+       let hH = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
+       const tH = function(HH, BH, LH) {
+           return "string" !== typeof BH ? {
+             url: "",
+             rootUrl: HH,
+             name: LH()
+           } : BH ? BH.startsWith("data:") ? {
+             url: BH,
+             rootUrl: HH,
+             name: ""
+           } : HH ? {
+             url: HH + BH,
+ ... (29 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L599-L613` → after: `L704-L709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L704-L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/230.js#L704-L709) · [Before (L599-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/230.js#L599-L613)

```diff
-       let {
-         ownedSchematics: XU,
-         currentWorldSchematicId: zU,
-         onClose: cU
-       } = UU;
-       yU.NotificationProvider.showCustomPopup({
-         body: UU => (0, DU.jsx)(YU, {
-           ownedSchematics: XU,
-           currentWorldSchematicId: zU,
-           onClose: UU
-         }),
-         middleScreenPopupClassName: "SchematicPopup",
-         onClose: cU,
-         unlockPointerKey: "schematicListPopup"
-       })
+       if (null === HH || void 0 === HH || !HH.min || !HH.max) return null;
+       const [BH, LH, AH] = HH.min, [rH, SH, hH] = HH.max, {
+         BoundingInfo: tH,
+         lu: zH
+       } = (0, rB.c)();
+       return new tH(new zH(BH, LH, AH), new zH(rH, SH, hH))
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L630-L663` → after: `L713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/230.js#L713) · [Before (L630-L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/230.js#L630-L663)

```diff
-       let {
-         value: XU,
-         onChange: zU,
-         showAll: cU,
-         disabled: DU = !1
-       } = UU;
-       const {
-         t: EU
-       } = (0, FU.I)();
-       return (0, oU.jsxs)("div", {
-         className: yU()("BloxdForm GamemodeForm", {
-           BasicOptions: !cU
-         }),
-         children: [(0, oU.jsx)("div", {
-           className: "SectionTitle",
-           children: EU("classic:defaultGamemode")
- ... (18 more removed lines; see GitHub link above)
+       (0, SB.f)(HH) || (HH.geometry && HH.geometry.useBoundingInfoFromGeometry ? HH._updateBoundingInfo() : HH.refreshBoundingInfo(!0, !0))
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L666-L697` → after: `L807-L1008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L807-L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/230.js#L807-L1008) · [Before (L666-L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/230.js#L666-L697)

```diff
-     function EU(UU) {
-       let {
-         mapTypes: XU,
-         value: zU,
-         onChange: cU,
-         showAll: DU,
-         disabled: EU = !1,
-         children: YU
-       } = UU;
-       const {
-         t: NU
-       } = (0, FU.I)();
-       return (0, oU.jsxs)("div", {
-         className: yU()("BloxdForm MapTypeForm", {
-           BasicOptions: !DU
-         }),
- ... (16 more removed lines; see GitHub link above)
+     function xB(HH, BH) {
+       HH.metadata = HH.metadata || {};
+       const LH = HH._internalMetadata = HH._internalMetadata || {},
+         AH = LH.XN = LH.XN || {};
+       (AH.pointers = AH.pointers || []).push(BH)
+     }
+ 
+     function vB(HH, BH) {
+       if (BH && Object.keys(BH).length > 0) {
+         const LH = HH.metadata = HH.metadata || {};
+         (LH.XN = LH.XN || {}).extras = BH
+       }
+     }
+ 
+     function PB(HH, BH) {
+       BH.position = HH.translation ? GB.lu.FromArray(HH.translation) : GB.lu.Zero(), BH.rotationQuaternion = HH.rotation ? GB.Quaternion.FromArray(HH.rotation) : GB.Quaternion.Identity(), BH.bX = HH.scale ? GB.lu.FromArray(HH.scale) : GB.lu.One()
+ ... (186 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L699-L702` → after: `L1010-L1029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R1010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L1010-L1029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/230.js#L1010-L1029) · [Before (L699-L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/230.js#L699-L702)

```diff
-             children: AU.m[UU]
-           }, UU) : null))
-         }), YU]
-       })
+             unrendered: !0
+           });
+           return SH = hH.model, hH.mirror
+         }));
+         let tH = Promise.resolve();
+         if (HH) {
+           const BH = `/materials/${HH.index}`,
+             AH = SH.diffuseTexture;
+           if (AH && !AH.mirror) tH = new Promise((HH => setTimeout(HH)));
+           else if (AH) {
+             const rH = AH.mirror;
+             rH._parentContainer = this.container, rH.name = `${LH} (Base Color)`, xB(rH, `${BH}${HH.unlit?"":"/pbrMetallicRoughness"}/baseColorTexture`), this.tree.textures.push(rH), tH = (0, QB.r)(AH)
+           }
+           vB(hH, HH.extras), xB(hH, BH)
+         }
+         return this.tree.materials.push(hH), {
+ ... (4 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L705` → after: `L1088-L1090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R1088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L1088-L1090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/230.js#L1088-L1090) · [Before (L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/230.js#L705)

```diff
-   37039: () => {}
+   44989: (HH, BH, LH) => {
+     HH.exports = LH.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
+   }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/231.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/231.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5)

#### 1. `bundles/preprod.bloxd.io/chunks/js/231.js` (Changed code · before: `L4-L114` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/231.js#L4) · [Before (L4-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/231.js#L4-L114)

```diff
-   37046: (UU, XU, zU) => {
-     zU.d(XU, {
-       d: () => EU,
-       f: () => NU
-     });
-     var cU = zU(61),
-       yU = zU(1410),
-       QU = zU(1193),
-       AU = zU(1384),
-       FU = zU(3869),
-       oU = zU(5454),
-       DU = zU(1305);
- 
-     function EU(UU) {
-       let {
-         loading: XU,
- ... (95 more removed lines; see GitHub link above)
+   45003: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/231.js` (Changed code · before: `L116` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/231.js#L6) · [Before (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/231.js#L116)

```diff
-       runClientGameMessage: () => CU
+       default: () => SH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/231.js` (Changed code · before: `L118-L195` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/231.js#L8-L9) · [Before (L118-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/231.js#L118-L195)

```diff
-     var cU = zU(4122),
-       yU = zU(4139),
-       QU = zU(1360),
-       AU = zU(37046),
-       FU = zU(5490),
-       oU = zU(1106),
-       DU = zU.n(oU),
-       EU = zU(61),
-       YU = zU(1410),
-       NU = zU(1494),
-       IU = zU(344),
-       pU = zU(1193),
-       aU = zU(1390),
-       tU = zU(1305);
- 
-     function gU(UU) {
- ... (62 more removed lines; see GitHub link above)
+     var AH = LH(37014),
+       rH = LH.n(AH);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/231.js` (Changed code · before: `L197-L305` → after: `L11-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5) · [After (L11-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/231.js#L11-L12) · [Before (L197-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/231.js#L197-L305)

```diff
-     function kU(UU) {
-       let {
-         ownedSchematics: XU,
-         onClose: zU,
-         onChosenPreset: cU,
-         onChosenFile: yU
-       } = UU;
-       const {
-         t: QU
-       } = (0, pU.I)();
-       return (0, tU.jsxs)(tU.Fragment, {
-         children: [(0, tU.jsx)("h1", {
-           className: "SchematicPopupTitle",
-           children: QU("worldBuilder:loadSchematic")
-         }), (0, tU.jsx)("h2", {
-           className: "SchematicPopupSubtitle",
- ... (93 more removed lines; see GitHub link above)
+     function SH() {
+       return rH()('/*! For license information please see cwj32u.procGen.worker.b2aeb6a1.worker.js.LICENSE.txt */\n(()=>{var HH={59:HH=>{const BH="object"===typeof performance&&performance&&"function"===typeof performance.now?performance:Date,LH=()=>BH.now(),AH=HH=>HH===1/0||(HH= … [truncated]
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/231.js` (Changed code · before: `L307-L524` → after: `L14-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5) · [After (L14-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/231.js#L14-L19) · [Before (L307-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/231.js#L307-L524)

```diff
- 
-     function WU(UU) {
-       let {
-         type: XU,
-         prepopName: zU,
-         ownedSchematics: cU,
-         onSubmit: yU,
-         onBack: QU
-       } = UU;
-       const {
-         t: AU
-       } = (0, pU.I)(), [FU, oU] = (0, EU.useState)(""), [YU, IU] = (0, EU.useState)(""), [aU, gU] = (0, EU.useState)(null), [kU, GU] = (0, EU.useState)(!0), PU = UU => {
-         var yU;
-         UU = null !== (yU = UU) && void 0 !== yU ? yU : FU;
-         const QU = (0, RU.rb)(UU, "new" === XU || "existing" === XU && UU !== zU);
-         return QU ? (gU(AU(QU.translationKey, QU.params)), !1) : "new" === XU && cU.find((XU => XU.name === UU)) ? (gU(AU("worldBuilder:schematicAlreadyExists")), !1) : (gU(null), !0)
- ... (202 more removed lines; see GitHub link above)
+   },
+   37014: HH => {
+     HH.exports = function(HH, BH, LH, AH) {
+       var rH = self || window;
+       try {
+         try {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/231.js` (Changed code · before: `L526-L540` → after: `L21-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5) · [After (L21-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/231.js#L21-L35) · [Before (L526-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/231.js#L526-L540)

```diff
-           const UU = null !== (DU = XU.schematic) && void 0 !== DU ? DU : XU;
-           (0, GU.f)({
-             schematic: UU,
-             inSourceWorld: UU.schematicId === XU.currentWorldSchematicId,
-             onClose: () => {
-               oU("cancel", {})
-             }
-           })
-         } else console.error(`Unknown plugin message type ${UU}`)
-       }(UU, XU);
-       else {
-         const UU = JSON.stringify(XU.data, null, 2);
-         (0, LU.downloadBlob)(new Blob([UU], {
-           type: "application/json"
-         }), XU.filename)
+           try {
+             SH = new rH.Blob([HH])
+           } catch (CH) {
+             (SH = new(rH.BlobBuilder || rH.WebKitBlobBuilder || rH.MozBlobBuilder || rH.MSBlobBuilder)).append(HH), SH = SH.getBlob()
+           }
+           var hH = rH.URL || rH.webkitURL,
+             tH = hH.createObjectURL(SH),
+             zH = new rH[BH](tH, LH);
+           return hH.revokeObjectURL(tH), zH
+         } catch (CH) {
+           return new rH[BH]("data:application/javascript,".concat(encodeURIComponent(HH)), LH)
+         }
+       } catch (CH) {
+         if (!AH) throw Error("Inline worker is not supported");
+         return new rH[BH](AH, LH)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/232.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/232.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff)

#### 1. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/232.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/232.js#L2)

```diff
- export const ids = [59, 232];
+ export const ids = [232];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L4-L135` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/232.js#L4) · [Before (L4-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/232.js#L4-L135)

```diff
-   39382: (UU, XU, zU) => {
-     var cU = {
-       "./combat_1.png": 39386,
-       "./dungeon_crumbling_crypt.png": 39390,
-       "./dungeon_frozen_hollow.png": 39393,
-       "./dungeon_wildwood_grove.png": 39400,
-       "./dungeons.png": 39402,
-       "./farming_1.png": 39407,
-       "./fishing_1.png": 39415,
-       "./hub.png": 39421,
-       "./island.png": 39429,
-       "./mining_1.png": 39434,
-       "./mining_1_bridge.png": 39436,
-       "./mining_1_gallery.png": 39441,
-       "./mining_1_hollow.png": 39445,
-       "./mining_1_village.png": 39447
- ... (116 more removed lines; see GitHub link above)
+   45022: (HH, BH, LH) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L139-L728` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/232.js#L8-L9) · [Before (L139-L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/232.js#L139-L728)

```diff
-     const cU = "island";
-     var yU = zU(39311);
- 
-     function QU(UU, XU, zU) {
-       const QU = "local" === XU,
-         FU = UU.background,
-         oU = XU => FU ? (0, yU.e)(XU[0] - UU.mapOrigin[0], XU[2] - UU.mapOrigin[2], FU.bounds) : [50, 50],
-         DU = (UU.insideDungeon ? [] : UU.landmarks).map((UU => {
-           var XU, cU;
-           return {
-             id: UU.id,
-             name: zU(UU.visited && UU.nameKey ? null !== (XU = UU.mapLabelKey) && void 0 !== XU ? XU : UU.nameKey : "skyblockGame:mapUnknown"),
-             icon: UU.visited && null !== (cU = UU.icon) && void 0 !== cU ? cU : "unknown",
-             visited: UU.visited,
-             current: !1,
-             position: oU(UU.position),
- ... (574 more removed lines; see GitHub link above)
+     var AH = LH(37014),
+       rH = LH.n(AH);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L730-L1062` → after: `L11-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L11-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/232.js#L11-L12) · [Before (L730-L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/232.js#L730-L1062)

```diff
-     function EX(UU) {
-       return DX.has(UU)
-     }
-     new Set(["Watermelon", "Melon", "Wheat|FreshlyGrown", "Rice|FreshlyGrown", "Corn Plant|FreshlyGrown", "Chili Pepper Plant|FreshlyGrown", "Chili Pepper Plant|Lava|FreshlyGrown", "Tomato Plant|FreshlyGrown", "Tomato Plant|Top|FreshlyGrown", "Carrot Plant|FreshlyGrown", "Potato  … [truncated]
-     const YX = {
-         "Maple Log": 10,
-         "Pine Log": 10,
-         "Plum Log": 10,
-         "Cedar Log": 10,
-         "Aspen Log": 10,
-         "Jungle Log": 10,
-         "Palm Log": 10,
-         "Pear Log": 10,
-         "Cherry Log": 10,
-         "Spectral Log": 10,
-         "Mango Log": 10
- ... (317 more removed lines; see GitHub link above)
+     function SH() {
+       return rH()('(()=>{var HH={16:(HH,BH,LH)=>{HH.exports=LH.p+"static/media/bloxd_wasm_bg.d827f2f3b3de35f70008.wasm"},20:(HH,BH,LH)=>{HH.exports=LH.p+"static/media/bloxd_wasm_textures_bg.e2eb154503b56db9191d.wasm"},10:(HH,BH,LH)=>{HH.exports=LH.p+"static/media/zstdDecodeWorker … [truncated]
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L1064-L1154` → after: `L14-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L14-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/232.js#L14-L19) · [Before (L1064-L1154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/232.js#L1064-L1154)

```diff
-     var PX = zU(39331),
-       WX = zU(39339),
-       dX = zU(39296),
-       LX = zU(39367);
-     const eX = ".InGameHeaderContainer, .TopRightElementsLeft > *, .TopRightElementsRight > *, .MiddleTextTopContainer";
-     class CX {
-       constructor() {
-         this.compassSpacing = 1, this.compassSize = {
-           trackHalfWidth: 0,
-           screenHalfWidth: 0
-         }, this.compass = null, this.terrain = null, this.searchAreaPath = {
-           seed: "",
-           d: ""
-         }, this.searchAreas = {
-           minimap: null,
-           map: null
- ... (75 more removed lines; see GitHub link above)
+   },
+   37014: HH => {
+     HH.exports = function(HH, BH, LH, AH) {
+       var rH = self || window;
+       try {
+         try {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L1156-L1543` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/232.js#L21-L24) · [Before (L1156-L1543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/232.js#L1156-L1543)

```diff
-           if (null === (XU = this.stopWaypointOrigin) || void 0 === XU || XU.call(this), this.stopWaypointOrigin = null, this.waypointLaunch = null, this.waypointOriginToken = UU && !this.kp ? Number(UU.dataset.notificationToken) : null, UU && !this.kp && !window.matchMedia("(pre … [truncated]
-             const XU = {
-               nameKey: UU.dataset.waypointNameKey,
-               x: 0,
-               y: 0,
-               startedAt: null
-             };
-             this.waypointLaunch = XU;
-             const zU = () => {
-                 const zU = UU.getBoundingClientRect();
-                 XU.x = (zU.left + zU.width / 2) / window.innerWidth * 100, XU.y = (zU.top + zU.height / 2) / window.innerHeight * 100
-               },
-               cU = new ResizeObserver(zU);
-             cU.observe(UU.parentElement), cU.observe(UU), window.addEventListener("resize", zU), this.stopWaypointOrigin = () => {
-               cU.disconnect(), window.removeEventListener("resize", zU)
-             }, zU()
- ... (372 more removed lines; see GitHub link above)
+           try {
+             SH = new rH.Blob([HH])
+           } catch (CH) {
+             (SH = new(rH.BlobBuilder || rH.WebKitBlobBuilder || rH.MozBlobBuilder || rH.MSBlobBuilder)).append(HH), SH = SH.getBlob()
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L1545-L1873` → after: `L26-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L26-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/232.js#L26-L31) · [Before (L1545-L1873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/232.js#L1545-L1873)

```diff
-           this.emit()
-         }
-       }
-       predictBlock(UU, XU, zU) {
-         if (!this.progress || this.kp || zU) return;
-         const cU = function(UU, XU) {
-           const zU = UU.split("|")[0];
-           return "Air" === XU || XU === `Barkless ${UU}` ? Object.hasOwn(YX, zU) ? {
-             skill: "foraging",
-             amount: YX[zU]
-           } : "Air" !== XU ? null : Object.hasOwn(IX, UU) ? {
-             skill: "mining",
-             amount: IX[UU]
-           } : oX(UU) ? {
-             skill: "farming",
-             amount: 10
- ... (313 more removed lines; see GitHub link above)
+           var hH = rH.URL || rH.webkitURL,
+             tH = hH.createObjectURL(SH),
+             zH = new rH[BH](tH, LH);
+           return hH.revokeObjectURL(tH), zH
+         } catch (CH) {
+           return new rH[BH]("data:application/javascript,".concat(encodeURIComponent(HH)), LH)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/233.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/233.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925)

#### 1. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L4-L6` → after: `L4-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L4-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/233.js#L4-L21) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/233.js#L4-L6)

```diff
-   37074: (UU, XU, zU) => {
-     zU.r(XU), zU.d(XU, {
-       default: () => WU
+   37112: (HH, BH, LH) => {
+     function AH(HH, BH, LH) {
+       if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(HH, BH).getContext("2d", LH);
+       const AH = document.createElement("canvas");
+       return AH.width = HH, AH.height = BH, AH.getContext("2d", LH)
+     }
+ 
+     function rH(HH, BH) {
+       return HH.getContext("2d", BH)
+     }
+     LH.d(BH, {
+       d: () => rH,
+       h: () => AH
+     })
+   },
+   42106: (HH, BH, LH) => {
+ ... (2 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L8-L21` → after: `L23-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L23-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/233.js#L23-L182) · [Before (L8-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/233.js#L8-L21)

```diff
-     var cU = zU(1106),
-       yU = zU.n(cU),
-       QU = zU(1577),
-       AU = zU(1103),
-       FU = zU(825),
-       oU = zU(1193),
-       DU = zU(1494),
-       EU = zU(1568),
-       YU = zU(3952),
-       NU = zU(1390),
-       IU = zU(3869),
-       pU = zU(2833),
-       aU = zU(1305);
-     const tU = 2;
+     const AH = 1 << 20,
+       rH = 1 << 21,
+       SH = 1024,
+       hH = 2048;
+ 
+     function tH(HH, BH, LH) {
+       const tH = HH + AH,
+         zH = BH + SH,
+         CH = LH + AH;
+       return tH < 0 || tH >= rH || CH < 0 || CH >= rH || zH < 0 || zH >= hH ? -1 : (tH * rH + CH) * hH + zH
+     }
+   },
+   42101: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => AH,
+       f: () => hH,
+ ... (144 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L24-L31` → after: `L185-L263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L185-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/233.js#L185-L263) · [Before (L24-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/233.js#L24-L31)

```diff
-       return "firstPartyGame" === UU.type ? {
-         type: "game",
-         gameNameWithVariation: UU.gameNameWithVariation
-       } : {
-         type: "preview",
-         preview: UU.preview
-       }
-     }
+       if (0 === HH) return tH;
+       const BH = new SH.d(AH.Vb);
+       for (let LH = 0; LH < AH.Vb; LH++) BH[LH] = HH >>> 8 * LH & 255;
+       return BH
+     }
+     class CH {
+       constructor(HH, BH) {
+         this.input = void 0, this.net = void 0, this.worker = void 0, this.cmd = void 0, this.input = new hH(BH, {
+           ptr: () => HH.tG(),
+           aX: () => HH.DhH(),
+           reserve: BH => HH.BtH(BH)
+         }), this.net = new hH(BH, {
+           ptr: () => HH.phH(),
+           aX: () => HH.ihH(),
+           reserve: BH => HH.LtH(BH)
+         }), this.worker = new hH(BH, {
+ ... (63 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L34-L49` → after: `L266-L871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L266-L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/233.js#L266-L871) · [Before (L34-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/233.js#L34-L49)

```diff
-       let {
-         game: XU,
-         disabled: zU,
-         showPlaceholder: cU
-       } = UU;
-       return null !== XU ? (0, aU.jsx)(IU.g, {
-         source: gU(XU),
-         gameWidth: "100%",
-         useLongRatio: !0,
-         disabled: zU,
-         entrySource: "customGamePlace"
-       }) : cU ? (0, aU.jsx)(IU.c, {
-         gameWidth: "100%",
-         useLongRatio: !0
-       }) : null
-     }
+       return IH.has(HH.site) ? HH.error instanceof WebAssembly.RuntimeError || (0, rH.j)(HH.error) : !qH.has(HH.site) && HH.error instanceof Error
+     }
+     const NH = "events",
+       RH = [],
+       jH = "debugLog",
+       nH = "terrainTextures",
+       FH = "sunShadowTextures",
+       DH = new TextDecoder;
+ 
+     function wH(HH, BH) {
+       const {
+         site: LH,
+         error: rH,
+         header: SH
+       } = HH, hH = SH ? (0, AH.Zd)(SH.lastError) : "noFrame", tH = `CORE-${LH===QH?hH:LH}`, zH = null === rH || void 0 === rH ? "" : ` ${(0,EH.k)(rH)}`, CH = {
+         site: LH,
+ ... (590 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L53-L64` → after: `L875-L878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L875-L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/233.js#L875-L878) · [Before (L53-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/233.js#L53-L64)

```diff
-       let {
-         category: zU,
-         title: cU,
-         tintColour: yU,
-         layout: QU,
-         games: AU,
-         landscape: FU = !1
-       } = UU;
-       const {
-         followsLeader: oU
-       } = (0, pU.g)(), DU = null !== (XU = null === AU || void 0 === AU ? void 0 : AU.slice(0, QU.gameCount)) && void 0 !== XU ? XU : [], YU = {
-         "--custom-game-place-tint": yU
+       let LH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
+       if (!(HH instanceof Error) || !zH.test(HH.message)) return {};
+       if (!("detached" in LH)) return {
+         arrayBufferDetached: "absent"
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L66-L97` → after: `L880-L884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L880-L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/233.js#L880-L884) · [Before (L66-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/233.js#L66-L97)

```diff
-       return (0, aU.jsxs)("div", {
-         className: "CustomGamePlacePanel AnimFadeIn",
-         style: YU,
-         children: [(0, aU.jsx)("h2", {
-           className: "CustomGamePlacePanelHeading",
-           children: (0, aU.jsxs)(EU.LinkPreserveSearch, {
-             to: `/custom-games/${encodeURIComponent(zU)}`,
-             className: "CustomGamePlacePanelTitle SmallTextBold",
-             children: [(0, aU.jsx)("span", {
-               children: cU
-             }), (0, aU.jsx)(NU.d, {
-               name: "arrow-up"
-             })]
-           })
-         }), (0, aU.jsx)("div", {
-           className: "CustomGamePlacePanelGames",
- ... (16 more removed lines; see GitHub link above)
+       return {
+         arrayBufferDetached: (0, rH.R)(null === (BH = (0, rH.J)(LH, "detached")) || void 0 === BH ? void 0 : BH.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
+       }
+     }
+     const EH = 500;
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L100-L153` → after: `L887-L931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L887-L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/233.js#L887-L931) · [Before (L100-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/233.js#L100-L153)

```diff
-       let {
-         categories: XU
-       } = UU;
- 
-       function zU(UU) {
-         const zU = XU[UU];
-         return (0, aU.jsx)(GU, {
-           ...zU,
-           landscape: !0
-         }, zU.id)
-       }
-       return (0, aU.jsxs)("div", {
-         className: "CustomGamePlaceMosaic CustomGamePlaceMosaicLandscape AnimFadeIn",
-         children: [(0, aU.jsxs)("div", {
-           className: "CustomGamePlaceUpper",
-           children: [(0, aU.jsxs)("div", {
- ... (38 more removed lines; see GitHub link above)
+       let BH = "[object Object]";
+       try {
+         BH = String(HH)
+       } catch {}
+       if ("[object Object]" !== BH) return BH;
+       try {
+         var LH, AH;
+         return null !== (LH = null === (AH = JSON.stringify(HH)) || void 0 === AH ? void 0 : AH.slice(0, EH)) && void 0 !== LH ? LH : BH
+       } catch {
+         return BH
+       }
+     }
+   },
+   37184: (HH, BH, LH) => {
+     HH.exports = LH.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
+   },
+ ... (29 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L155-L213` → after: `L933-L944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L933-L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/233.js#L933-L944) · [Before (L155-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/233.js#L155-L213)

```diff
-     var PU = zU(1115);
- 
-     function WU() {
-       var UU;
-       const {
-         t: XU
-       } = (0, oU.I)(), zU = (0, QU.C)(), cU = (0, PU.h)(), NU = (0, YU.c)({
-         refresh: !0
-       }), IU = zU.customGamePlace;
-       if (!(0, AU.k)(IU)) return (0, aU.jsx)(EU.NavigatePreserveSearch, {
-         to: "/"
-       });
-       const pU = FU.d[IU],
-         tU = AU.c[IU],
-         gU = null !== (UU = null === NU || void 0 === NU ? void 0 : NU[IU]) && void 0 !== UU ? UU : null,
-         kU = [];
- ... (43 more removed lines; see GitHub link above)
+       const rH = BH(),
+         SH = LH();
+       return {
+         kind: AH,
+         panic: SH > 0 ? null : rH,
+         refusedBytes: SH
+       }
+     }
+     const tH = 300;
+ 
+     function zH(HH) {
+       return HH.replace(/\s*\n\s*/g, " / ").slice(0, tH)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/234.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/234.js` (11 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89)

#### 1. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/234.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/234.js#L4)

```diff
-   37083: (UU, XU, zU) => {
+   37366: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L6-L7` → after: `L6-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L6-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/234.js#L6-L90) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/234.js#L6-L7)

```diff
-       e: () => EU,
-       i: () => FU,
+       b: () => hH,
+       c: () => rH,
+       f: () => SH
+     });
+     var AH = LH(1863);
+     class rH extends Error {
+       constructor(HH) {
+         super("The game server didn't answer in time"), this.leg = HH, this.name = "SeatRequestTimedOut"
+       }
+     }
+     const SH = new class {
+       constructor() {
+         this.count = 0, this.answers = 0, this.waiting = new Set
+       }
+       get answered() {
+         return this.answers
+ ... (69 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L10` → after: `L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/234.js#L149) · [Before (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/234.js#L10)

```diff
-       q: () => GU
+       p: () => gH
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L12-L34` → after: `L151-L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L151-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/234.js#L151-L288) · [Before (L12-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/234.js#L12-L34)

```diff
-     var cU = zU(654),
-       yU = zU(1817),
-       QU = zU(5326);
-     class AU {
-       constructor(UU, XU) {
-         this.width = UU, this.xY = XU, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(UU * XU)
-       }
-       push(UU) {
-         let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         const zU = this.data,
-           cU = this.next * this.width;
-         for (let yU = 0; yU < this.width; yU++) zU[cU + yU] = UU[XU + yU];
-         this.next = (this.next + 1) % this.xY, this.size = Math.min(this.size + 1, this.xY)
-       }
-       rows() {
-         let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
- ... (7 more removed lines; see GitHub link above)
+     var AH = LH(176),
+       rH = LH(81),
+       SH = LH(120),
+       hH = LH(277),
+       tH = LH(4780),
+       zH = LH(644),
+       CH = LH(669),
+       EH = LH(4786),
+       XH = LH(4802),
+       GH = LH(37351),
+       YH = LH(37358);
+     const uH = 1048576,
+       QH = 1024 * uH,
+       WH = 400 * uH,
+       MH = 147456,
+       xH = .5,
+ ... (122 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L37-L47` → after: `L291-L383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L291-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/234.js#L291-L383) · [Before (L37-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/234.js#L37-L47)

```diff
-       lines() {
-         return this.rows().map((UU => UU.join(",")))
-       }
-     }
-     const FU = 10,
-       oU = {
-         idle: 0,
-         cY: 1,
-         LO: 2,
-         kS: 3,
-         Yt: 4
+       if ("object" !== typeof HH || null === HH) return eH;
+       const {
+         halvedAt: LH,
+         reloadSpent: AH
+       } = HH;
+       return {
+         halvedAt: "number" === typeof LH && Number.isFinite(LH) ? LH : null,
+         reloadSpent: !0 === AH
+       }
+     }
+ 
+     function gH() {
+       return null !== qH().halvedAt
+     }
+ 
+     function NH(HH) {
+ ... (77 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L50-L78` → after: `L386-L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L386-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/234.js#L386-L410) · [Before (L50-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/234.js#L50-L78)

```diff
-         none: 0,
-         skipped: 1,
-         paced: 2,
-         drawn: 3
-       },
-       EU = {
-         lockGained: 1,
-         lockLost: 2,
-         lockError: 3,
-         visible: 4,
-         hidden: 5,
-         focus: 6,
-         blur: 7,
-         jsClient: 8,
-         wasmClient: 9,
-         droppedCopies: 10,
- ... (13 more removed lines; see GitHub link above)
+         targetBytes: tH,
+         leastBytes: zH
+       };
+ 
+     function TH(HH) {
+       return {
+         targetBytes: HH,
+         leastBytes: 0
+       }
+     }
+ 
+     function UH(HH) {
+       return HH >= rH.b ? vH : PH
+     }
+     const VH = 2 * SH;
+ 
+ ... (9 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L80-L100` → after: `L412-L444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L412-L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/234.js#L412-L444) · [Before (L80-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/234.js#L80-L100)

```diff
-       constructor() {
-         this.steps = new AU(FU, YU), this.events = new AU(IU.length, YU), this.frames = new AU(pU.length, YU), this.cameraSets = new AU(QU.d, 256), this.changes = new AU(tU.length, 256)
-       }
-     }
-     const GU = new class {
-       constructor() {
-         this.rings = null, this.sample = new Float64Array(IU.length), this.startedClient = null, this.startedAtMs = 0
-       }
-       get client() {
-         return this.startedClient
-       }
-       start(UU, XU) {
-         this.startedClient = UU, this.startedAtMs = performance.now(), null !== this.rings ? this.change(gU(UU)) : XU && this.allocate()
-       }
-       lockGained() {
-         this.allocate(), this.change(EU.lockGained)
- ... (5 more removed lines; see GitHub link above)
+       constructor(HH, BH, LH) {
+         let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : bH;
+         this.memory = HH, this.readPeakStoredChunks = BH, this.onError = LH, this.clock = AH, this.pendingSince = null, this.stepsRefused = !1, this.stepsHeldUntil = null, this.shedding = null, this.sheds = 0, this.gcSheds = 0, this.shedCap = null, this.stopped = !1, this.statsAt … [truncated]
+           reserves: 0,
+           allocations: 0
+         }, this.joinReserveTaken = null, this.ceilingBytes = null, this.ballastCheckAt = -1 / 0, this.ballastPeakBytes = 0, this.distanceInUse = null, this.footprint = null, this.gcPressure = null
+       }
+       setShed(HH, BH, LH) {
+         this.shedding = {
+           shed: HH,
+           XX: BH,
+           readDistanceInUse: LH
+         }
+       }
+       shedDistanceInUse() {
+         return this.distanceInUse
+ ... (17 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L102-L109` → after: `L446-L565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L446-L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/234.js#L446-L565) · [Before (L102-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/234.js#L102-L109)

```diff
-         UU[XU + 6] !== oU.Yt && (null === (zU = this.rings) || void 0 === zU || zU.steps.push(UU, XU))
-       }
-       cameraSet(UU, XU) {
-         var zU;
-         null === (zU = this.rings) || void 0 === zU || zU.cameraSets.push(UU, XU)
-       }
-       mouseMove(UU, XU) {
-         const zU = this.rings;
+         return OH(this.memory.memoryBytes(), HH, null !== (LH = this.ceilingBytes) && void 0 !== LH ? LH : BH)
+       }
+       reserveAtJoin(HH) {
+         let {
+           targetBytes: BH,
+           leastBytes: LH
+         } = HH;
+         const AH = this.memory.memoryBytes(),
+           rH = AH + LH,
+           SH = Math.max(BH + (this.ballastOn() ? EH : 0), rH),
+           hH = this.call((() => this.memory.reserveUpFront(SH) ? "target" : SH > rH && this.memory.reserveUpFront(rH) ? "least" : "none"), "none");
+         if (this.stopped) return !1;
+         if ("target" !== hH) {
+           const HH = "least" === hH ? `took ${rH} bytes instead` : "frames grow it in steps";
+           console.warn(`[bloxd-wasm-client] wasm memory: the join's reserve to ${SH} bytes was refused at ${AH} bytes; ${HH}`)
+         }
+ ... (104 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L111-L125` → after: `L567-L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L567-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/234.js#L567-L593) · [Before (L111-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/234.js#L111-L125)

```diff
-         const cU = this.sample;
-         cU[0] = UU.timeStamp, cU[1] = performance.now(), cU[2] = UU.movementX, cU[3] = UU.movementY, cU[4] = XU ? 1 : 0, zU.events.push(cU)
-       }
-       frame(UU, XU, zU, cU) {
-         const yU = this.rings;
-         if (null === yU || cU === DU.none) return;
-         const QU = this.sample;
-         QU[0] = performance.now(), QU[1] = UU, QU[2] = XU, QU[3] = zU, QU[4] = cU, yU.frames.push(QU)
-       }
-       change(UU) {
-         let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-         this.changeAt(performance.now(), UU, XU)
-       }
-       changeAt(UU, XU, zU) {
-         const cU = this.rings;
+         if (null !== BH.nextAt || "undefined" !== typeof document && document.hidden || (BH.nextAt = HH + 6e4), null === BH.nextAt || HH < BH.nextAt) return;
+         if (this.stopped || null === this.shedding || this.stepsRefused || null !== this.stepsHeldUntil) return;
+         const LH = BH.highEpisode();
+         null !== LH && LH !== BH.shedEpisode && (BH.shedEpisode = LH, BH.nextAt = HH + 3e4, this.shedFor("gcPressure"))
+       }
+       step() {
+         this.pendingSince = null, this.call((() => this.memory.reserveAhead(CH)), !0) || (null === this.shedding ? this.stopSteps("a step ahead was refused (the ceiling, or the browser)") : this.shedFor("step"))
+       }
+       ballastOn() {
+         return null !== this.shedding
+       }
+       takeBallast(HH) {
+         if (!this.ballastOn() || null === this.joinReserveTaken) return;
+         this.ballastCheckAt = HH + 1e3;
+         const BH = this.call((() => this.memory.takeBallast()), 0);
+         this.ballastPeakBytes = Math.max(this.ballastPeakBytes, BH)
+ ... (11 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L127-L172` → after: `L595-L608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L595-L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/234.js#L595-L608) · [Before (L127-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/234.js#L127-L172)

```diff
-         const yU = this.sample;
-         yU[0] = UU, yU[1] = XU, yU[2] = zU, cU.changes.push(yU)
-       }
-       dumpText() {
-         var UU, XU;
-         const zU = this.rings;
-         return [`look records (${this.startedClient}): ${NU.join(",")}`, ...null !== (UU = null === zU || void 0 === zU ? void 0 : zU.steps.lines()) && void 0 !== UU ? UU : [], `mousemove events: ${IU.join(",")}`, ...null !== (XU = null === zU || void 0 === zU ? void 0 : zU.event … [truncated]
-       }
-       toJson(UU, XU) {
-         var zU;
-         const yU = UU - 6e4,
-           QU = this.rings,
-           AU = function(UU, XU) {
-             var zU;
-             let cU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-             const QU = null !== (zU = null === UU || void 0 === UU ? void 0 : UU.rows(cU, yU)) && void 0 !== zU ? zU : [];
- ... (30 more removed lines; see GitHub link above)
+         this.pendingSince = null;
+         const LH = this.call((() => BH.shed(HH)), null);
+         if (this.stopped) return;
+         if (null === LH) return void(XH(HH) && this.stopSteps("nothing is left to shed"));
+         this.sheds++, this.shedCap = LH, this.stepsHeldUntil = this.clock.now() + 5e3, this.refreshStats();
+         const AH = "gcPressure" === HH ? ++this.gcSheds : this.sheds - this.gcSheds;
+         BH.XX(HH, AH, this.details())
+       }
+       call(HH, BH) {
+         if (this.stopped) return BH;
+         try {
+           return HH()
+         } catch (LH) {
+           return this.stop(), this.onError(LH), BH
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L175-L359` → after: `L611-L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L611-L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/234.js#L611-L615) · [Before (L175-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/234.js#L175-L359)

```diff
-       save(UU) {
-         const XU = JSON.stringify(this.toJson(performance.now(), UU));
-         (0, yU.c)(new Blob([XU], {
-           type: "application/json"
-         }), `bloxd-mouse-look-${(new Date).toISOString().replace(/[:.]/g,"-")}.json`)
-       }
-     }
-   },
-   37081: (UU, XU, zU) => {
-     zU.r(XU), zU.d(XU, {
-       LOOK_DEBUG_HEADER: () => EU,
-       endLookDebugTake: () => gU,
-       noteLookDroppedCopy: () => kU,
-       saveLookCapture: () => GU,
-       startLookDebug: () => tU
-     });
- ... (169 more removed lines; see GitHub link above)
+     }
+ 
+     function mH(HH) {
+       const BH = (HH, BH) => `${HH}/${(0,AH.l)(BH)}`;
+       return `memory ${(0,AH.l)(HH.memoryBytes)} live ${(0,AH.l)(HH.liveBytes)} peak ${(0,AH.l)(HH.peakLiveBytes)} unused ${(0,AH.l)(HH.unusedBytes)} ceiling ${(0,AH.l)(HH.ceilingBytes)} MiB; grows upFront ${BH(HH.grows.upFront,HH.grownBytes.upFront)} ahead ${BH(HH.grows.ahead,HH … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/235.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/235.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248)

#### 1. `bundles/preprod.bloxd.io/chunks/js/235.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/235.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/235.js#L2)

```diff
- export const ids = [235, 598];
+ export const ids = [235];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/235.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/235.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/235.js#L4)

```diff
-   43979: (UU, XU, zU) => {
+   37091: (HH, BH, LH) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/235.js` (Changed code · before: `L6` → after: `L6-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248) · [After (L6-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/235.js#L6-L10) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/235.js#L6)

```diff
-       CharacterCustomisationUI: () => QX
+       ITEM_FILES_WITHOUT_SPRITE: () => tH,
+       ITEM_SPRITES: () => SH,
+       ITEM_SPRITES_WITHOUT_FILE: () => hH,
+       ITEM_SPRITE_RUNS: () => rH,
+       MAX_SPRITE_ITEM_ID: () => AH
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/235.js` (Changed code · before: `L8-L1074` → after: `L12-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248) · [After (L12-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/235.js#L12-L16) · [Before (L8-L1074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/235.js#L8-L1074)

```diff
-     var cU = zU(61),
-       yU = zU(2818),
-       QU = zU(1129),
-       AU = zU(1106),
-       FU = zU.n(AU),
-       oU = zU(1258),
-       DU = zU(1193),
-       EU = zU(2334),
-       YU = zU(1613),
-       NU = zU(2772);
-     const IU = oU.v.filter((UU => !YU.i.includes(UU)));
- 
-     function pU(UU, XU) {
-       return IU.includes(UU) && "string" === typeof XU && (0, NU.h)(UU, XU)
-     }
- 
- ... (1051 more removed lines; see GitHub link above)
+     const AH = 10113,
+       rH = "$######$################################################%=####################################################################################################################################################$########################################$#################### … [truncated]
+       SH = "unloaded|dirt|coarse_dirt|sand|clay|gravel|snow|log_maple|log_pine|log_plum|log_cedar|log_aspen|log_jungle|planks_maple|planks_aspen|planks_plum|planks_jungle|planks_pine|planks_cedar|stripped_maple_log|stripped_aspen_log|stripped_plum_log|stripped_jungle_log|stripped … [truncated]
+       hH = "############################################################################################################################################4+##&###############%####$##3########################0######&#####&####$%###############<#####$#&###%##########'*######G%#####-$ … [truncated]
+       tH = "amethite_armour_2|astral_armour_2|beetroot_plant_stage0|beetroot_plant_stage1|beetroot_plant_stage2|berry_bush_stage0|book_page|camel_painting_option2|carrot_plant_stage0|carrot_plant_stage1|carrot_plant_stage2|crimson_trapdoor|cursemetal_armour_2|date_pudding_option2 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/236.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/236.js` (25 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb)

#### 1. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/236.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/236.js#L2)

```diff
- export const ids = [236];
+ export const ids = [236, 237];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L4-L7` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/236.js#L4-L6) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/236.js#L4-L7)

```diff
-   39900: (UU, XU, zU) => {
-     zU.d(XU, {
-       d: () => QU,
-       h: () => AU
+   44789: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       CharacterCustomisationUI: () => CB
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L9-L10` → after: `L8-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L8-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/236.js#L8-L21) · [Before (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/236.js#L9-L10)

```diff
-     var cU = zU(31);
-     let yU = !1;
+     var AH = LH(45),
+       rH = LH(2800),
+       SH = LH(3865),
+       hH = LH(3847),
+       tH = LH(1061),
+       zH = LH(1038),
+       CH = LH.n(zH),
+       EH = LH(1182),
+       XH = LH(597),
+       GH = LH(1123),
+       YH = LH(2339),
+       uH = LH(1565),
+       QH = LH(2760);
+     const WH = EH.r.filter((HH => !uH.k.includes(HH)));
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L12-L13` → after: `L23-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/236.js#L23-L24) · [Before (L12-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/236.js#L12-L13)

```diff
-     function QU() {
-       return yU
+     function MH(HH, BH) {
+       return WH.includes(HH) && "string" === typeof BH && (0, QH.e)(HH, BH)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L17` → after: `L28-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L28-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/236.js#L28-L33) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/236.js#L17)

```diff
-       yU !== UU && (yU = UU, cU.k.UY("replayViewer|videoExportChanged"))
+       const BH = {};
+       for (const LH of WH) {
+         const AH = HH[LH];
+         void 0 !== AH && MH(LH, AH) && (BH[LH] = AH)
+       }
+       return BH
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L39-L41` → after: `L36-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/236.js#L36-L37) · [Before (L39-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/236.js#L39-L41)

```diff
-     function EU() {
-       let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AU.n;
-       (0, QU.k)(UU, FU)
+     function vH(HH) {
+       return 0 === Object.keys(HH).length
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L44-L45` → after: `L40-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L40-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/236.js#L40-L44) · [Before (L44-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/236.js#L44-L45)

```diff
-     function YU() {
-       (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AU.n).setItem(DU, !0)
+     function PH(HH, BH) {
+       return Object.entries(HH).every((HH => {
+         let [LH, AH] = HH;
+         return BH[LH] === AH
+       }))
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L47-L50` → after: `L46-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L46-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/236.js#L46-L139) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/236.js#L47-L50)

```diff
- 
-     function NU() {
-       let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AU.n;
-       return (0, QU.e)(UU, FU)
+     var TH = LH(2347),
+       UH = LH(3436),
+       VH = LH(2051),
+       OH = LH(1455),
+       bH = LH(2388),
+       kH = LH(2486),
+       mH = LH(15),
+       oH = LH(2936),
+       IH = LH(1502),
+       fH = LH(1070),
+       lH = LH(1922);
+     class KH {
+       constructor() {
+         this.slots = new Map, this.before = new Map, this.accountId = null
+       }
+       moveTo(HH) {
+ ... (78 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L54-L73` → after: `L161-L253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L161-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/236.js#L161-L253) · [Before (L54-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/236.js#L54-L73)

```diff
-       let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : AU.n;
-       const zU = (0, QU.e)(XU, FU),
-         EU = function(UU) {
-           const XU = UU.getItem(oU);
-           return "string" !== typeof XU ? null : XU
-         }(XU),
-         YU = function() {
-           return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AU.n).getItem(DU)
-         }(XU);
-       let NU;
-       return NU = null !== zU && null !== EU && (0, QU.i)(XU, FU) && function(UU, XU, zU) {
-           const yU = (0, cU.Tb)(UU),
-             QU = (0, cU.Tb)(XU),
-             AU = (0, cU.Nb)(UU),
-             FU = (0, cU.Nb)(XU);
-           return !(yU !== QU || !zU) || yU === QU && AU === FU
- ... (4 more removed lines; see GitHub link above)
+       let {
+         wornOutfit: BH,
+         onApply: LH,
+         onOverwrite: rH,
+         onDelete: SH
+       } = HH;
+       const {
+         t: hH
+       } = (0, GH.B)(), {
+         accountId: zH,
+         data: EH
+       } = (0, oH.h)(eH, !1), {
+         userContext: XH
+       } = (0, tH.e)();
+       async function YH(HH, BH) {
+         const LH = await JH.NotificationProvider.showPromptPopup({
+ ... (77 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L75-L86` → after: `L255-L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L255-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/236.js#L255-L257) · [Before (L75-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/236.js#L75-L86)

```diff
-   },
-   42010: (UU, XU, zU) => {
-     zU.d(XU, {
-       d: () => EU,
-       f: () => AU,
-       g: () => oU,
-       k: () => QU,
-       l: () => FU,
-       o: () => DU
-     });
-     let cU = null,
-       yU = null;
+     var yH = LH(37264),
+       HB = LH(2746),
+       BB = LH(2752);
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L88-L91` → after: `L259-L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L259-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/236.js#L259-L260) · [Before (L88-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/236.js#L88-L91)

```diff
-     function QU(UU, XU) {
-       return cU = UU, yU = null, FU(XU), () => {
-         cU === UU && (cU = null, yU = null)
-       }
+     function LB(HH, BH, LH) {
+       return null !== HH && !(0, HB.f)(BB.b, BH, LH, HH.collected, HH.ownedPacks)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L94-L97` → after: `L263-L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L263-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/236.js#L263-L270) · [Before (L94-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/236.js#L94-L97)

```diff
-     function AU() {
-       return null === yU ? null : {
-         ...yU
-       }
+     function AB(HH) {
+       let {
+         locked: BH,
+         children: LH
+       } = HH;
+       return BH ? (0, iH.jsx)(rB, {
+         children: LH
+       }) : LH
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L102-L103` → after: `L275-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L275-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/236.js#L275-L287) · [Before (L102-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/236.js#L102-L103)

```diff
-       null !== (XU = cU) && void 0 !== XU && XU(UU) && (yU = {
-         ...UU
+       let {
+         children: LH
+       } = HH;
+       const {
+         t: AH
+       } = (0, GH.B)(), {
+         userContext: rH
+       } = (0, tH.e)(), SH = null !== (BH = rH.dailyDrop) && void 0 !== BH && BH.hidden ? AH("dailyDrop:lockedFromHidden") : AH("dailyDrop:lockedFrom");
+       return (0, iH.jsx)(aH.g, {
+         tooltipInner: (0, iH.jsx)(iH.Fragment, {
+           children: SH
+         }),
+         children: LH
```
