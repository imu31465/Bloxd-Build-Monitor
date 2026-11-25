# Changed — Bundle Modifications Report (Part 003 / 056)

- **Updated at**: `2026-11-26T01:26 JST`
- **Part**: `3 / 56` (**296** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 002](part-002.md) · [Part 004 →](part-004.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/118.js` (8104he.3820eae0 → fo1voe.f743fbcf · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/118.js` (43 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b)

#### 43. `bundles/preprod.bloxd.io/chunks/js/118.js` (Changed code · before: `L356-L367` → after: `L1725-L32200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050bR1725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7d7caf0291d707f16baa3b5cc394bb6a6e11402401203a7aa160813d002c050b) · [After (L1725-L32200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/118.js#L1725-L32200) · [Before (L356-L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/118.js#L356-L367)

```diff
-         named: [...rQ].sort(((QQ, WQ) => {
-           let [XQ] = QQ, [wQ] = WQ;
-           return XQ < wQ ? -1 : XQ > wQ ? 1 : 0
-         })).map((QQ => {
-           let [WQ, XQ] = QQ;
-           return {
-             name: WQ,
-             id: XQ
-           }
-         })),
-         aliases: [...IQ.values()],
-         layers: JQ
+         endDay: MM.endDay,
+         kind: "percentiles",
+         points: OM,
+         ranking: {
+           avgDailyPlays: MM.rankingWindow.dailyPlays,
+           avgSessionMs: MM.rankingWindow.sessionMs,
+           sessionsPerPlayer: MM.rankingWindow.sessionsPerPlayer
+         },
+         dropoffCurve: null === SM ? null : {
+           maxBucketMinute: SM.maxBucketMinute,
+           survivalPercents: SM.survivalPercents
+         },
+         scope: MM.scope
+       }
+     }
+ 
+ ... (30460 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/119.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/119.js` (32 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/119.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/119.js#L2)

```diff
- export const ids = [119, 120, 140];
+ export const ids = [119];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/119.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/119.js#L4)

```diff
-   5394: (QQ, WQ, XQ) => {
+   5343: (MM, rM, iM) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L6-L21` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/119.js#L6-L8) · [Before (L6-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/119.js#L6-L21)

```diff
-       b: () => wQ.i,
-       c: () => qQ,
-       g: () => wQ.n
-     });
-     var wQ = XQ(5396);
-     const qQ = [!1, !0].flatMap((QQ => ["terrain", "liquid", "model"].map((WQ => ({
-       strict: QQ,
-       program: WQ
-     })))))
-   },
-   39494: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       ShaderPackPage: () => FQ,
-       harnessShaderPackMode: () => rQ,
-       setHarnessUrlShaderPack: () => JQ,
-       shaderPackPage: () => gQ
+       b: () => LM,
+       d: () => zM,
+       f: () => mM
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L23-L86` → after: `L10-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L10-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/119.js#L10-L51) · [Before (L23-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/119.js#L23-L86)

```diff
-     var wQ = XQ(105),
-       qQ = XQ(43),
-       TQ = (XQ(3723), XQ(5394), XQ(3716)),
-       zQ = XQ(7026);
-     XQ(7002);
-     const sQ = {
-       status: "none"
-     };
-     class FQ {
-       constructor() {
-         this.stored = null, this.compiling = null, this.pagePack = null, this.resolved = null
-       }
-       preload() {
-         if (null === this.stored) {
-           if ((0, TQ.j)(wQ.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), PQ().then((QQ => {
-             QQ && qQ.i.removeItem(TQ.c)
- ... (48 more removed lines; see GitHub link above)
+     iM(5348);
+     var OM = iM(1188),
+       SM = iM(1116),
+       jM = iM.n(SM),
+       aM = iM(1440),
+       PM = (iM(44), iM(4720)),
+       nM = iM(1398),
+       QM = iM(1303);
+ 
+     function zM(MM) {
+       let {
+         children: rM,
+         label: iM,
+         className: SM,
+         circleInfoText: PM,
+         disabled: zM,
+ ... (26 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L90` → after: `L54-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L54-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/119.js#L54-L73) · [Before (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/119.js#L90)

```diff
-     function JQ(QQ, WQ) {}
+     function LM(MM) {
+       let {
+         checked: rM,
+         setChecked: iM
+       } = MM;
+       return (0, QM.jsx)("div", {
+         className: "OtherInput ClickableOtherInput",
+         "data-pad-focusable": !0,
+         onClick: MM => {
+           iM(!rM)
+         },
+         children: (0, QM.jsx)(PM.c, {
+           checked: rM,
+           onChange: MM => {
+             iM(MM.target.checked)
+           },
+ ... (4 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L92-L93` → after: `L75-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L75-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/119.js#L75-L96) · [Before (L92-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/119.js#L92-L93)

```diff
-     function rQ() {
-       return null
+     function mM(MM) {
+       let {
+         checked: rM,
+         setChecked: iM,
+         disabled: OM
+       } = MM;
+       return (0, QM.jsx)("div", {
+         className: jM()("SwitchContainer", {
+           SwitchContainerDisabled: OM
+         }),
+         onClick: () => {
+           OM || iM(!rM)
+         },
+         children: (0, QM.jsx)(PM.c, {
+           className: "SwitchCheckbox",
+           checked: rM,
+ ... (6 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L96` → after: `L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/119.js#L99) · [Before (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/119.js#L96)

```diff
-   7026: (QQ, WQ, XQ) => {
+   5356: (MM, rM, iM) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L98-L99` → after: `L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/119.js#L101) · [Before (L98-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/119.js#L98-L99)

```diff
-       b: () => qQ,
-       f: () => TQ
+       b: () => QM
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L101-L116` → after: `L103-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L103-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/119.js#L103-L108) · [Before (L101-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/119.js#L101-L116)

```diff
-     var wQ = XQ(43);
-     const qQ = "shaderPack";
-     async function TQ() {
-       var QQ;
-       let WQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-       return null !== (QQ = await wQ.f.getItem(qQ, WQ)) && void 0 !== QQ ? QQ : null
-     }
-   },
-   7002: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       loadShaderPackTextures: () => zQ,
-       shaderPackTextures: () => sQ
-     });
-     var wQ = XQ(5396);
-     let qQ = null,
-       TQ = null;
+     var OM = iM(1116),
+       SM = iM.n(OM),
+       jM = iM(5003),
+       aM = iM(1188),
+       PM = iM(1303);
+     const nM = [...jM.m, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L118-L126` → after: `L110-L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L110-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/119.js#L110-L135) · [Before (L118-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/119.js#L118-L126)

```diff
-     function zQ() {
-       return TQ ??= Promise.all([XQ.e(75), XQ.e(192)]).then((() => XQ(40738))).then((QQ => {
-         let {
-           FORMER_BLOCK_IMAGE_NAMES: WQ,
-           textureNameToIndex: XQ,
-           textureAnimationData: TQ
-         } = QQ;
-         return qQ ??= (0, wQ.l)(XQ, TQ, WQ), qQ
-       })), TQ
+     function QM(MM) {
+       const {
+         disabled: rM,
+         hideWrapper: iM
+       } = MM, {
+         t: OM
+       } = (0, aM.A)(), QM = MM.advancedMode ? nM.map((rM => [rM, MM.callbacks[rM]])) : jM.m.map((rM => [rM, MM.callbacks[rM]])), LM = (0, PM.jsx)("div", {
+         className: SM()("PluginsGrid", {
+           SectionBody: !iM
+         }),
+         children: QM.map((MM => {
+           let [iM, OM] = MM;
+           return (0, PM.jsx)(zM, {
+             plugin: iM,
+             callbacks: OM,
+             disabled: rM
+ ... (10 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L129-L131` → after: `L138-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L138-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/119.js#L138-L179) · [Before (L129-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/119.js#L129-L131)

```diff
-     function sQ() {
-       if (null === qQ) throw new Error("Shader pack textures read before loadShaderPackTextures");
-       return qQ
+     function zM(MM) {
+       let {
+         plugin: rM,
+         callbacks: {
+           isEnabled: iM,
+           kR: OM
+         },
+         disabled: jM
+       } = MM;
+       const {
+         t: nM
+       } = (0, aM.A)(), QM = iM();
+       return (0, PM.jsxs)("div", {
+         className: SM()("PluginCard", {
+           PluginCardEnabled: QM,
+           PluginCardDisabledForm: jM
+ ... (26 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L134` → after: `L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/119.js#L200) · [Before (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/119.js#L134)

```diff
-   5396: (QQ, WQ, XQ) => {
+   5335: (MM, rM, iM) => {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L138-L145` → after: `L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/119.js#L205) · [Before (L138-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/119.js#L138-L145)

```diff
-       i: () => wQ,
-       l: () => BQ,
-       m: () => JQ,
-       n: () => qQ,
-       r: () => TQ,
-       t: () => PQ,
-       w: () => gQ,
-       z: () => rQ
+       j: () => jr
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L147` → after: `L207-L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L207-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/119.js#L207-L224) · [Before (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/119.js#L147)

```diff
-     const wQ = 5;
+     var OM = iM(44),
+       SM = iM(1429),
+       jM = iM(1520),
+       aM = iM(1763),
+       PM = iM(1188),
+       nM = iM(1396),
+       QM = iM(1440),
+       zM = iM(1398),
+       LM = iM(1229),
+       mM = iM(1116),
+       HM = iM.n(mM),
+       hM = iM(313),
+       JM = iM(5003),
+       dM = iM(1242),
+       yM = iM(5343),
+       lM = iM(3530),
+ ... (2 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L150` → after: `L227-L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L227-L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/119.js#L227-L256) · [Before (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/119.js#L150)

```diff
-       return QQ === wQ
+       let {
+         icon: rM,
+         title: iM,
+         disabled: OM,
+         children: SM
+       } = MM;
+       return (0, UM.jsxs)("div", {
+         className: HM()("ManageCard", {
+           ManageCardDisabled: OM
+         }),
+         children: [(0, UM.jsxs)("div", {
+           className: "ManageCardHead",
+           children: [(0, UM.jsx)("div", {
+             className: "ManageCardIcon",
+             children: (0, UM.jsx)(zM.b, {
+               name: rM
+ ... (14 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L154` → after: `L260-L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L260-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/119.js#L260-L274) · [Before (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/119.js#L154)

```diff
-       return [...QQ.features]
+       let {
+         label: rM,
+         caption: iM,
+         children: OM
+       } = MM;
+       return (0, UM.jsxs)("div", {
+         className: "ManageStackedField",
+         children: [(0, UM.jsx)("div", {
+           className: "ManageStackedFieldLabel",
+           children: rM
+         }), OM, iM && (0, UM.jsx)("div", {
+           className: "ManageStackedFieldCaption",
+           children: iM
+         })]
+       })
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L161-L168` → after: `L278-L528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L278-L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/119.js#L278-L528) · [Before (L161-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/119.js#L161-L168)

```diff
-       if ("object" !== typeof QQ || null === QQ || Array.isArray(QQ)) return "The pack has no files.";
-       const WQ = [];
-       for (const [XQ, wQ] of Object.entries(QQ)) {
-         if ("string" !== typeof wQ) return `${XQ} isn't text.`;
-         WQ.push({
-           path: XQ,
-           source: wQ
-         })
+       let {
+         label: rM,
+         caption: iM,
+         disabled: OM,
+         children: SM
+       } = MM;
+       return (0, UM.jsxs)("div", {
+         className: HM()("ManageField", {
+           ManageFieldDisabled: OM
+         }),
+         children: [(0, UM.jsxs)("div", {
+           className: "ManageFieldText",
+           children: [(0, UM.jsx)("div", {
+             className: "ManageFieldLabel",
+             children: rM
+           }), (0, UM.jsx)("div", {
+ ... (235 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L170-L182` → after: `L530-L567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L530-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/119.js#L530-L567) · [Before (L170-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/119.js#L170-L182)

```diff
-       return WQ.sort(((QQ, WQ) => JQ(QQ.path, WQ.path))),
-         function(QQ) {
-           if (0 === QQ.length) return "The pack has no .wgsl files.";
-           if (QQ.length > sQ) return `The pack has more than ${sQ} .wgsl files.`;
-           const WQ = new Set;
-           for (const {
-               path: XQ
-             }
-             of QQ) {
-             const QQ = IQ(XQ);
-             if (null !== QQ) return QQ;
-             if (WQ.has(XQ)) return `The pack has two files at ${XQ}.`;
-             WQ.add(XQ)
+     }
+     class oM extends Error {}
+     class fM extends Error {}
+     var YM = function(MM) {
+       return MM[MM.NOT_LOGGED_IN = 0] = "NOT_LOGGED_IN", MM[MM.THUMBNAIL_LIMIT_REACHED = 1] = "THUMBNAIL_LIMIT_REACHED", MM
+     }(YM || {});
+ 
+     function NM(MM) {
+       var rM;
+       let {
+         schematicId: iM,
+         hasReadUploadPolicy: SM,
+         onPolicyValidationError: nM,
+         onThumbnailReady: QM
+       } = MM;
+       const {
+ ... (22 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L184-L185` → after: `L569-L682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L569-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/119.js#L569-L682) · [Before (L184-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/119.js#L184-L185)

```diff
-           return rQ(QQ) > zQ ? `The pack's .wgsl files are over ${zQ/1024} KB in total.` : null
-         }(WQ) ?? WQ
+         },
+         useFsAccessApi: !1
+       }), AM = dM.length <= 30 ? dM : `${dM.slice(0,27)}...`, xM = null !== (rM = null === hM || void 0 === hM ? void 0 : hM.base64Jpg) && void 0 !== rM ? rM : null, vM = lM.trim(), FM = vM.length >= LM.q && vM.length <= LM.p, BM = pM && !hM && !tM, XM = pM && !FM;
+       return (0, UM.jsxs)("div", {
+         className: "ThumbnailUploadContainer",
+         children: [(0, UM.jsxs)("div", {
+           ...kM({
+             className: HM()("ThumbnailUploadDropzone", {
+               ActiveDrag: NM,
+               ValidationError: BM
+             })
+           }),
+           children: [(0, UM.jsx)("input", {
+             ...YM()
+           }), !NM && xM ? (0, UM.jsxs)(UM.Fragment, {
+             children: [(0, UM.jsxs)("div", {
+ ... (98 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L189-L191` → after: `L687-L846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L687-L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/119.js#L687-L846) · [Before (L189-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/119.js#L189-L191)

```diff
-       const WQ = {};
-       for (const XQ of QQ) WQ[XQ.path] = XQ.source;
-       return WQ
+       let {
+         schematicId: rM,
+         ownedThumbnailCount: iM,
+         onClose: SM,
+         onThumbnailReady: jM
+       } = MM;
+       const {
+         t: aM
+       } = (0, PM.A)(), {
+         userContext: nM
+       } = (0, RM.b)(), [QM, mM] = (0, OM.useState)(!1), [hM, JM] = (0, OM.useState)(!1), [dM, yM] = (0, OM.useState)(!1), lM = (0, OM.useRef)();
+       (0, OM.useEffect)((() => () => {
+         clearTimeout(lM.current)
+       }), []);
+       const EM = function(MM, rM) {
+         const iM = [];
+ ... (144 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L194-L195` → after: `L880-L1085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L880-L1085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/119.js#L880-L1085) · [Before (L194-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/119.js#L194-L195)

```diff
-     function JQ(QQ, WQ) {
-       return QQ < WQ ? -1 : QQ > WQ ? 1 : 0
+     function BM(MM) {
+       var rM, iM;
+       let {
+         schematicData: aM,
+         updateSchematicData: QM,
+         publishFormEnabled: LM,
+         onClose: mM
+       } = MM;
+       const {
+         t: hM
+       } = (0, PM.A)(), {
+         userContext: JM,
+         isUserContextUpdating: dM
+       } = (0, RM.b)(), yM = (0, uM.b)(), [lM, EM] = (0, OM.useState)([]), [GM, CM] = (0, OM.useState)([]), [eM, bM] = (0, OM.useState)(!0), [wM, tM] = (0, OM.useState)(null !== (rM = aM.customThumbnailId) && void 0 !== rM ? rM : null), [WM, sM] = (0, OM.useState)(null), DM = (0,  … [truncated]
+ 
+       function NM(MM, rM) {
+ ... (190 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L199-L202` → after: `L1089-L1102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR1089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L1089-L1102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/119.js#L1089-L1102) · [Before (L199-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/119.js#L199-L202)

```diff
-       const WQ = new TextEncoder;
-       let XQ = 0;
-       for (const {
-           source: wQ
+       let {
+         rejectedThumbnails: rM,
+         userContext: iM,
+         isMountedRef: SM,
+         onAcknowledged: aM
+       } = MM;
+       const {
+         t: QM
+       } = (0, PM.A)(), [LM, mM] = (0, OM.useState)(!1), [HM, hM] = (0, OM.useState)(!1), JM = function(MM) {
+         const rM = new Map;
+         for (const iM of MM) {
+           const MM = iM.rejectionPolicyId,
+             OM = rM.get(MM);
+           OM ? OM.push(iM) : rM.set(MM, [iM])
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L204-L205` → after: `L1104-L1174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR1104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L1104-L1174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/119.js#L1104-L1174) · [Before (L204-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/119.js#L204-L205)

```diff
-         of QQ) XQ += WQ.encode(wQ).byteLength;
-       return XQ
+         return rM
+       }(rM);
+       return (0, UM.jsxs)("div", {
+         className: "ThumbnailRejectionNotice",
+         children: [(0, UM.jsxs)("div", {
+           className: "ThumbnailRejectionNoticeTitle",
+           children: [(0, UM.jsx)(zM.b, {
+             name: "triangle-exclamation"
+           }), " ", QM("thumbnail:thumbnailsRejected"), " ", (0, UM.jsx)(zM.b, {
+             name: "triangle-exclamation"
+           })]
+         }), (0, UM.jsx)("div", {
+           className: "ThumbnailRejectionNoticeSubtitle",
+           children: QM("thumbnail:thumbnailsRejectedDescription")
+         }), (0, UM.jsx)("div", {
+           className: "ThumbnailRejectionNoticeList",
+ ... (55 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L209-L212` → after: `L1178-L1218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR1178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L1178-L1218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/119.js#L1178-L1218) · [Before (L209-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/119.js#L209-L212)

```diff
-       if (!QQ.toLowerCase().endsWith(".wgsl")) return `${QQ} isn't a .wgsl file.`;
-       if (QQ.length > FQ) return `A file path is over ${FQ} characters.`;
-       if (QQ.includes("\\") || /[\u0000-\u001f]/.test(QQ)) return `${QQ} isn't a valid file path.`;
-       return QQ.split("/").some((QQ => "" === QQ || "." === QQ || ".." === QQ)) ? `${QQ} isn't a valid file path.` : null
+       let {
+         thumbnailId: rM,
+         thumbnailName: iM,
+         onClose: OM
+       } = MM;
+       const {
+         t: SM
+       } = (0, PM.A)();
+       return (0, UM.jsxs)("div", {
+         className: "ThumbnailDeleteConfirm",
+         children: [(0, UM.jsx)("div", {
+           className: "ThumbnailDeleteConfirmTitle",
+           children: SM("thumbnail:deleteThumbnail")
+         }), (0, UM.jsxs)("div", {
+           className: "ThumbnailDeleteConfirmImageContainer",
+           children: [(0, UM.jsx)("img", {
+ ... (25 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L214` → after: `L1220-L1223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR1220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L1220-L1223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/119.js#L1220-L1223) · [Before (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/119.js#L214)

```diff
-     const jQ = /^(.*)\[rot\[([1-4])$/;
+     var KM = iM(2263),
+       qM = iM(5388),
+       TM = iM(5393),
+       VM = iM(5424);
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L216-L230` → after: `L1225-L1238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR1225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L1225-L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/119.js#L1225-L1238) · [Before (L216-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/119.js#L216-L230)

```diff
-     function BQ(QQ, WQ) {
-       let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
-       const wQ = new Map;
-       WQ.forEach(((QQ, WQ) => {
-         let {
-           numAnimStates: XQ,
-           animStartIdx: qQ
-         } = QQ;
-         for (let TQ = 1; TQ < XQ; TQ++) wQ.set(qQ + TQ - 1, WQ)
-       }));
-       const qQ = Object.entries(QQ),
-         TQ = new Map;
-       for (const [BQ, yQ] of qQ) {
-         const QQ = jQ.exec(BQ);
-         "1" === QQ?.[2] && TQ.set(QQ[1], yQ + 1)
+     function cM(MM) {
+       let {
+         schematicData: rM,
+         setTexturePack: iM,
+         initializeTexturePack: SM,
+         publishFormEnabled: jM
+       } = MM;
+       const {
+         t: aM
+       } = (0, PM.A)(), [nM, QM] = (0, OM.useState)(null), [zM, LM] = (0, OM.useState)(null), [mM, hM] = (0, OM.useState)(!1), JM = (0, uM.b)(), dM = jM && !mM, yM = rM.customTexturePackKey;
+ 
+       function lM(MM) {
+         var rM;
+         QM(MM.metaData.id), LM(null !== (rM = MM.metaData.fromFolderName) && void 0 !== rM ? rM : null), (MM.metaData.id !== KM.o.CUSTOM || MM.metaData.fromFolderName) && iM(MM)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L232-L285` → after: `L1240-L1268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR1240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L1240-L1268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/119.js#L1240-L1268) · [Before (L232-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/119.js#L232-L285)

```diff
-       const zQ = QQ => {
-           const WQ = jQ.exec(QQ);
-           return WQ && TQ.has(WQ[1]) ? {
-             root: WQ[1],
-             rotation: Number(WQ[2]) - 1
-           } : null
-         },
-         sQ = new Set(qQ.map((QQ => {
-           let [WQ] = QQ;
-           return zQ(WQ)?.root ?? WQ
-         }))),
-         FQ = (QQ, XQ) => {
-           const wQ = QQ.replace(/_?0$/, "");
-           return (WQ[XQ]?.numAnimStates ?? 0) > 1 && !sQ.has(wQ) ? wQ : QQ
-         },
-         PQ = new Map;
- ... (38 more removed lines; see GitHub link above)
+       return (0, OM.useEffect)((() => {
+         yM && (hM(!0), (0, qM.d)(yM).then((MM => {
+           var rM;
+           JM.current && (MM ? (QM(MM.metaData.id), LM(null !== (rM = MM.metaData.fromFolderName) && void 0 !== rM ? rM : null), SM(MM)) : console.error(`No texture pack at ${yM}`))
+         })).catch((MM => {
+           console.error("Error fetching texture pack: ", MM)
+         })).finally((() => {
+           hM(!1)
+         })))
+       }), [yM, SM, JM]), (0, UM.jsxs)("div", {
+         className: "BloxdForm TexturePackSection",
+         children: [(0, UM.jsx)("div", {
+           className: "SectionTitle",
+           children: aM("customTexturePack:customTexturePack")
+         }), (0, UM.jsxs)("div", {
+           className: "TexturePackList",
+ ... (13 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L287-L291` → after: `L1270-L1543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR1270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L1270-L1543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/119.js#L1270-L1543) · [Before (L287-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/119.js#L287-L291)

```diff
-             rotation: QQ.rotation
-           }, rQ.set(XQ, WQ), IQ.set(jQ, {
-             name: jQ,
-             texture: XQ,
-             kind: "rotation"
+             isSelected: MM === nM,
+             setSelected: lM,
+             disabled: !dM
+           }, MM)))]
+         }), nM === KM.o.CUSTOM && (0, UM.jsx)(VM.e, {
+           folderName: zM,
+           onTexturePackUpdated: lM,
+           disabled: !dM,
+           maxFileSizeMb: 25,
+           packOwner: "customGame"
+         })]
+       })
+     }
+     var Mr = iM(5468);
+ 
+     function rr(MM) {
+ ... (258 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L293` → after: `L1545-L1647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR1545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L1545-L1647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/119.js#L1545-L1647) · [Before (L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/119.js#L293)

```diff
-         } else rQ.set(XQ, BQ + 1)
+         }), !0 === LM.gamePublished && (0, zM.jsxs)(zM.Fragment, {
+           children: [(0, zM.jsx)(nM.i, {
+             tooltipInner: (0, zM.jsx)("div", {
+               className: "PublishButtonTooltip",
+               children: OM("worldBuilder:unpublishAsGameDescription")
+             }),
+             children: (0, zM.jsxs)(PM.J, {
+               onClick: rM.unpublishSchematic,
+               disabled: hM,
+               children: [(0, zM.jsx)(aM.b, {
+                 name: "rocket-launch"
+               }), " ", OM("worldBuilder:unpublishAsGame"), " ", (0, zM.jsx)(aM.b, {
+                 name: "info-circle"
+               })]
+             })
+           }), (0, zM.jsxs)(PM.e, {
+ ... (87 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L295-L298` → after: `L1649-L1677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR1649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L1649-L1677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/119.js#L1649-L1677) · [Before (L295-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/119.js#L295-L298)

```diff
-       for (const jQ of rQ.keys()) IQ.delete(jQ);
-       for (const [jQ, BQ] of XQ) {
-         const QQ = rQ.get(BQ);
-         void 0 === QQ || rQ.has(jQ) || (rQ.set(jQ, QQ), IQ.delete(jQ))
+       const pM = (0, OM.useCallback)((MM => {
+         wM.current = MM, eM(MM)
+       }), []);
+ 
+       function WM(MM) {
+         GM("Loading");
+         const rM = JM(lM, MM),
+           iM = CM !== wM.current ? CM : void 0;
+         zM.c.updateSchematic(dM, rM, iM).then((iM => {
+           let {
+             customTexturePackKey: OM
+           } = iM;
+           GM("Success"), RM("customTexturePackKey", OM), bM.current = rM, wM.current = void 0, eM(void 0), setTimeout((() => {
+             RM("gamePublished", MM), GM("Enter")
+           }), 1e3)
+         })).catch((MM => {
+ ... (13 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L301-L312` → after: `L1680-L1717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR1680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L1680-L1717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/119.js#L1680-L1717) · [Before (L301-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/119.js#L301-L312)

```diff
-         named: [...rQ].sort(((QQ, WQ) => {
-           let [XQ] = QQ, [wQ] = WQ;
-           return XQ < wQ ? -1 : XQ > wQ ? 1 : 0
-         })).map((QQ => {
-           let [WQ, XQ] = QQ;
-           return {
-             name: WQ,
-             id: XQ
-           }
-         })),
-         aliases: [...IQ.values()],
-         layers: JQ
+         schematicData: lM,
+         updateSchematicData: RM,
+         setTexturePack: eM,
+         initializeTexturePack: pM,
+         updateState: UM,
+         formEnabled: tM,
+         publishFormEnabled: gM,
+         hasUnsavedChanges: uM,
+         canEditSourceWorld: !iM,
+         saveSchematic: WM,
+         unpublishSchematic: function() {
+           mM.NotificationProvider.showPromptPopup({
+             icon: "rocket-launch",
+             title: "worldBuilder:unpublishAsGameConfirmTitle",
+             subtitle: "worldBuilder:unpublishAsGameConfirmSubtitle",
+             confirmText: "worldBuilder:unpublishAsGame",
+ ... (22 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/119.js` (Changed code · before: `L315` → after: `L1720-L1721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67dR1720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e5037de68cc14b0efdb67687af1db4344787a02ef71be4a94af43ce11a4be67d) · [After (L1720-L1721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/119.js#L1720-L1721) · [Before (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/119.js#L315)

```diff
-   }
+   },
+   5348: () => {}
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/120.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/120.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/120.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/120.js#L2)

```diff
- export const ids = [120, 140];
+ export const ids = [120];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L4` → after: `L4-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L4-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/120.js#L4-L32) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/120.js#L4)

```diff
-   7002: (QQ, WQ, XQ) => {
+   37303: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => nM
+     });
+     var OM = iM(1116),
+       SM = iM.n(OM),
+       jM = iM(44),
+       aM = iM(4950),
+       PM = iM(1303);
+ 
+     function nM(MM) {
+       let {
+         locked: rM,
+         children: iM
+       } = MM;
+       const OM = (0, jM.useRef)(null),
+ ... (13 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L6-L7` → after: `L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/120.js#L34) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/120.js#L6-L7)

```diff
-       loadShaderPackTextures: () => zQ,
-       shaderPackTextures: () => sQ
+       showFirstWorldSetupPopup: () => JM
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L9-L26` → after: `L36-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L36-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/120.js#L36-L167) · [Before (L9-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/120.js#L9-L26)

```diff
-     var wQ = XQ(5396);
-     let qQ = null,
-       TQ = null;
- 
-     function zQ() {
-       return TQ ??= Promise.all([XQ.e(75), XQ.e(192)]).then((() => XQ(40738))).then((QQ => {
-         let {
-           FORMER_BLOCK_IMAGE_NAMES: WQ,
-           textureNameToIndex: XQ,
-           textureAnimationData: TQ
-         } = QQ;
-         return qQ ??= (0, wQ.l)(XQ, TQ, WQ), qQ
-       })), TQ
-     }
- 
-     function sQ() {
- ... (2 more removed lines; see GitHub link above)
+     iM(5348), iM(37287);
+     var OM = iM(5003),
+       SM = iM(44),
+       jM = iM(4961),
+       aM = iM(1188),
+       PM = iM(1429),
+       nM = iM(37303),
+       QM = iM(5356),
+       zM = iM(1520),
+       LM = iM(3881),
+       mM = iM(37298),
+       HM = iM(4996),
+       hM = iM(1303);
+ 
+     function JM(MM) {
+       const rM = {
+ ... (116 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L29` → after: `L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/120.js#L170) · [Before (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/120.js#L29)

```diff
-   5396: (QQ, WQ, XQ) => {
+   5356: (MM, rM, iM) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L31-L40` → after: `L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/120.js#L172) · [Before (L31-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/120.js#L31-L40)

```diff
-       d: () => sQ,
-       f: () => zQ,
-       i: () => wQ,
-       l: () => BQ,
-       m: () => JQ,
-       n: () => qQ,
-       r: () => TQ,
-       t: () => PQ,
-       w: () => gQ,
-       z: () => rQ
+       b: () => QM
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L42-L63` → after: `L174-L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L174-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/120.js#L174-L268) · [Before (L42-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/120.js#L42-L63)

```diff
-     const wQ = 5;
- 
-     function qQ(QQ) {
-       return QQ === wQ
-     }
- 
-     function TQ(QQ) {
-       return [...QQ.features]
-     }
-     const zQ = 262144,
-       sQ = 256,
-       FQ = 256;
- 
-     function PQ(QQ) {
-       if ("object" !== typeof QQ || null === QQ || Array.isArray(QQ)) return "The pack has no files.";
-       const WQ = [];
- ... (6 more removed lines; see GitHub link above)
+     var OM = iM(1116),
+       SM = iM.n(OM),
+       jM = iM(5003),
+       aM = iM(1188),
+       PM = iM(1303);
+     const nM = [...jM.m, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];
+ 
+     function QM(MM) {
+       const {
+         disabled: rM,
+         hideWrapper: iM
+       } = MM, {
+         t: OM
+       } = (0, aM.A)(), QM = MM.advancedMode ? nM.map((rM => [rM, MM.callbacks[rM]])) : jM.m.map((rM => [rM, MM.callbacks[rM]])), LM = (0, PM.jsx)("div", {
+         className: SM()("PluginsGrid", {
+           SectionBody: !iM
+ ... (79 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/120.js` (Changed code · before: `L65-L210` → after: `L270-L361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9bR270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c4b1e07d015b67da80ae77b6e75533cba57f73bb89a07595bb73d177209cfa9b) · [After (L270-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/120.js#L270-L361) · [Before (L65-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/120.js#L65-L210)

```diff
-       return WQ.sort(((QQ, WQ) => JQ(QQ.path, WQ.path))),
-         function(QQ) {
-           if (0 === QQ.length) return "The pack has no .wgsl files.";
-           if (QQ.length > sQ) return `The pack has more than ${sQ} .wgsl files.`;
-           const WQ = new Set;
-           for (const {
-               path: XQ
-             }
-             of QQ) {
-             const QQ = IQ(XQ);
-             if (null !== QQ) return QQ;
-             if (WQ.has(XQ)) return `The pack has two files at ${XQ}.`;
-             WQ.add(XQ)
-           }
-           return rQ(QQ) > zQ ? `The pack's .wgsl files are over ${zQ/1024} KB in total.` : null
-         }(WQ) ?? WQ
- ... (130 more removed lines; see GitHub link above)
+   },
+   37298: (MM, rM, iM) => {
+     iM.d(rM, {
+       c: () => QM,
+       e: () => zM
+     });
+     iM(44);
+     var OM = iM(1116),
+       SM = iM.n(OM),
+       jM = iM(5003),
+       aM = iM(313),
+       PM = iM(1188),
+       nM = iM(1303);
+ 
+     function QM(MM) {
+       let {
+ ... (76 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/121.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/121.js` (61 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L5-L42` → after: `L4-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L4-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/121.js#L4-L14) · [Before (L5-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/121.js#L5-L42)

```diff
-   6593: function(QQ, WQ, XQ) {
-     var wQ;
-     ! function() {
-       var qQ, TQ = 1e9,
-         zQ = {
-           precision: 20,
-           rounding: 4,
-           toExpNeg: -7,
-           toExpPos: 21,
-           LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
-         },
-         sQ = !0,
-         FQ = "[DecimalError] ",
-         PQ = FQ + "Invalid argument: ",
-         gQ = FQ + "Exponent out of range: ",
-         JQ = Math.floor,
- ... (22 more removed lines; see GitHub link above)
+   5384: (MM, rM) => {
+     rM.d = function(MM, rM) {
+       if (MM && rM) {
+         var iM = Array.isArray(rM) ? rM : rM.split(","),
+           OM = MM.name || "",
+           SM = (MM.type || "").toLowerCase(),
+           jM = SM.replace(/\/.*$/, "");
+         return iM.some((function(MM) {
+           var rM = MM.trim().toLowerCase();
+           return "." === rM.charAt(0) ? OM.toLowerCase().endsWith(rM) : rM.endsWith("/*") ? jM === rM.replace(/\/.*$/, "") : SM === rM
+         }))
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L45-L196` → after: `L27-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L27-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/121.js#L27-L33) · [Before (L45-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/121.js#L45-L196)

```diff
-       function GQ(QQ) {
-         var WQ, XQ, wQ, qQ = QQ.length - 1,
-           TQ = "",
-           zQ = QQ[0];
-         if (qQ > 0) {
-           for (TQ += zQ, WQ = 1; WQ < qQ; WQ++)(XQ = 7 - (wQ = QQ[WQ] + "").length) && (TQ += HQ(XQ)), TQ += wQ;
-           (XQ = 7 - (wQ = (zQ = QQ[WQ]) + "").length) && (TQ += HQ(XQ))
-         } else if (0 === zQ) return "0";
-         for (; zQ % 10 === 0;) zQ /= 10;
-         return TQ + zQ
-       }
-       VQ.absoluteValue = VQ.abs = function() {
-         var QQ = new this.constructor(this);
-         return QQ.s && (QQ.s = 1), QQ
-       }, VQ.comparedTo = VQ.cmp = function(QQ) {
-         var WQ, XQ, wQ, qQ, TQ = this;
- ... (136 more removed lines; see GitHub link above)
+     function aM(MM, rM, iM, OM) {
+       return new(iM || (iM = Promise))((function(SM, jM) {
+         function aM(MM) {
+           try {
+             nM(OM.next(MM))
+           } catch (rM) {
+             jM(rM)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L232-L253` → after: `L37-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L37-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/121.js#L37-L41) · [Before (L232-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/121.js#L232-L253)

```diff
-         function XQ(QQ, WQ, XQ) {
-           for (var wQ = 0; XQ--;) QQ[XQ] -= wQ, wQ = QQ[XQ] < WQ[XQ] ? 1 : 0, QQ[XQ] = wQ * jQ + QQ[XQ] - WQ[XQ];
-           for (; !QQ[0] && QQ.length > 1;) QQ.shift()
-         }
-         return function(wQ, qQ, TQ, zQ) {
-           var sQ, PQ, gQ, JQ, rQ, IQ, BQ, yQ, VQ, DQ, pQ, GQ, UQ, bQ, dQ, HQ, aQ, lQ, iQ = wQ.constructor,
-             cQ = wQ.s == qQ.s ? 1 : -1,
-             AQ = wQ.d,
-             RQ = qQ.d;
-           if (!wQ.s) return new iQ(wQ);
-           if (!qQ.s) throw Error(FQ + "Division by zero");
-           for (PQ = wQ.e - qQ.e, aQ = RQ.length, dQ = AQ.length, yQ = (BQ = new iQ(cQ)).d = [], gQ = 0; RQ[gQ] == (AQ[gQ] || 0);) ++gQ;
-           if (RQ[gQ] > (AQ[gQ] || 0) && --PQ, (GQ = null == TQ ? TQ = iQ.precision : zQ ? TQ + (vQ(wQ) - vQ(qQ)) + 1 : TQ) < 0) return new iQ(0);
-           if (GQ = GQ / 7 + 2 | 0, gQ = 0, 1 == aQ)
-             for (JQ = 0, RQ = RQ[0], GQ++;
-               (gQ < dQ || JQ) && GQ--; gQ++) UQ = JQ * jQ + (AQ[gQ] || 0), yQ[gQ] = UQ / RQ | 0, JQ = UQ % RQ | 0;
- ... (6 more removed lines; see GitHub link above)
+         function PM(MM) {
+           try {
+             nM(OM.throw(MM))
+           } catch (rM) {
+             jM(rM)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L259-L272` → after: `L45-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L45-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/121.js#L45-L49) · [Before (L259-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/121.js#L259-L272)

```diff
-       function bQ(QQ, WQ) {
-         var XQ, wQ, TQ, zQ, FQ, PQ = 0,
-           JQ = 0,
-           IQ = QQ.constructor,
-           jQ = IQ.precision;
-         if (vQ(QQ) > 16) throw Error(gQ + vQ(QQ));
-         if (!QQ.s) return new IQ(qQ);
-         for (null == WQ ? (sQ = !1, FQ = jQ) : FQ = WQ, zQ = new IQ(.03125); QQ.abs().gte(.1);) QQ = QQ.times(zQ), JQ += 5;
-         for (FQ += Math.log(rQ(2, JQ)) / Math.LN10 * 2 + 5 | 0, XQ = wQ = TQ = new IQ(qQ), IQ.precision = FQ;;) {
-           if (wQ = hQ(wQ.times(QQ), FQ), XQ = XQ.times(++PQ), GQ((zQ = TQ.plus(UQ(wQ, XQ, FQ))).d).slice(0, FQ) === GQ(TQ.d).slice(0, FQ)) {
-             for (; JQ--;) TQ = hQ(TQ.times(TQ), FQ);
-             return IQ.precision = jQ, null == WQ ? (sQ = !0, hQ(TQ, jQ)) : TQ
-           }
-           TQ = zQ
+         function nM(MM) {
+           var rM;
+           MM.done ? SM(MM.value) : (rM = MM.value, rM instanceof iM ? rM : new iM((function(MM) {
+             MM(rM)
+           }))).then(aM, PM)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L274-L279` → after: `L51-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L51-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/121.js#L51-L53) · [Before (L274-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/121.js#L274-L279)

```diff
-       }
- 
-       function vQ(QQ) {
-         for (var WQ = 7 * QQ.e, XQ = QQ.d[0]; XQ >= 10; XQ /= 10) WQ++;
-         return WQ
-       }
+         nM((OM = OM.apply(MM, rM || [])).next())
+       }))
+     }
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L281-L284` → after: `L55-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L55-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/121.js#L55-L71) · [Before (L281-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/121.js#L281-L284)

```diff
-       function dQ(QQ, WQ, XQ) {
-         if (WQ > QQ.LN10.sd()) throw sQ = !0, XQ && (QQ.precision = XQ), Error(FQ + "LN10 precision limit exceeded");
-         return hQ(new QQ(QQ.LN10), WQ)
-       }
+     function PM(MM, rM) {
+       var iM, OM, SM, jM, aM = {
+         label: 0,
+         sent: function() {
+           if (1 & SM[0]) throw SM[1];
+           return SM[1]
+         },
+         trys: [],
+         ops: []
+       };
+       return jM = {
+         next: PM(0),
+         throw: PM(1),
+         return: PM(2)
+       }, "function" === typeof Symbol && (jM[Symbol.iterator] = function() {
+         return this
+ ... (1 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L287-L304` → after: `L74-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L74-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/121.js#L74-L126) · [Before (L287-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/121.js#L287-L304)

```diff
-         for (var WQ = ""; QQ--;) WQ += "0";
-         return WQ
-       }
- 
-       function aQ(QQ, WQ) {
-         var XQ, wQ, TQ, zQ, PQ, gQ, JQ, rQ, IQ, jQ = 1,
-           BQ = QQ,
-           yQ = BQ.d,
-           VQ = BQ.constructor,
-           DQ = VQ.precision;
-         if (BQ.s < 1) throw Error(FQ + (BQ.s ? "NaN" : "-Infinity"));
-         if (BQ.eq(qQ)) return new VQ(0);
-         if (null == WQ ? (sQ = !1, rQ = DQ) : rQ = WQ, BQ.eq(10)) return null == WQ && (sQ = !0), dQ(VQ, rQ);
-         if (rQ += 10, VQ.precision = rQ, wQ = (XQ = GQ(yQ)).charAt(0), zQ = vQ(BQ), !(Math.abs(zQ) < 15e14)) return JQ = dQ(VQ, rQ + 2, DQ).times(zQ + ""), BQ = aQ(new VQ(wQ + "." + XQ.slice(1)), rQ - 10).plus(JQ), VQ.precision = DQ, null == WQ ? (sQ = !0, hQ(BQ, DQ)) : BQ;
-         for (; wQ < 7 && 1 != wQ || 1 == wQ && XQ.charAt(1) > 3;) wQ = (XQ = GQ((BQ = BQ.times(QQ)).d)).charAt(0), jQ++;
-         for (zQ = vQ(BQ), wQ > 1 ? (BQ = new VQ("0." + XQ), zQ++) : BQ = new VQ(wQ + "." + XQ.slice(1)), gQ = PQ = BQ = UQ(BQ.minus(qQ), BQ.plus(qQ), rQ), IQ = hQ(BQ.times(BQ), rQ), TQ = 3;;) {
- ... (2 more removed lines; see GitHub link above)
+         return function(nM) {
+           return function(PM) {
+             if (iM) throw new TypeError("Generator is already executing.");
+             for (; jM && (jM = 0, PM[0] && (aM = 0)), aM;) try {
+               if (iM = 1, OM && (SM = 2 & PM[0] ? OM.return : PM[0] ? OM.throw || ((SM = OM.return) && SM.call(OM), 0) : OM.next) && !(SM = SM.call(OM, PM[1])).done) return SM;
+               switch (OM = 0, SM && (PM = [2 & PM[0], SM.value]), PM[0]) {
+                 case 0:
+                 case 1:
+                   SM = PM;
+                   break;
+                 case 4:
+                   return aM.label++, {
+                     value: PM[1],
+                     done: !1
+                   };
+                 case 5:
+ ... (37 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L308-L330` → after: `L132-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L132-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/121.js#L132-L142) · [Before (L308-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/121.js#L308-L330)

```diff
-       function lQ(QQ, WQ) {
-         var XQ, wQ, qQ;
-         for ((XQ = WQ.indexOf(".")) > -1 && (WQ = WQ.replace(".", "")), (wQ = WQ.search(/e/i)) > 0 ? (XQ < 0 && (XQ = wQ), XQ += +WQ.slice(wQ + 1), WQ = WQ.substring(0, wQ)) : XQ < 0 && (XQ = WQ.length), wQ = 0; 48 === WQ.charCodeAt(wQ);) ++wQ;
-         for (qQ = WQ.length; 48 === WQ.charCodeAt(qQ - 1);) --qQ;
-         if (WQ = WQ.slice(wQ, qQ)) {
-           if (qQ -= wQ, XQ = XQ - wQ - 1, QQ.e = JQ(XQ / 7), QQ.d = [], wQ = (XQ + 1) % 7, XQ < 0 && (wQ += 7), wQ < qQ) {
-             for (wQ && QQ.d.push(+WQ.slice(0, wQ)), qQ -= 7; wQ < qQ;) QQ.d.push(+WQ.slice(wQ, wQ += 7));
-             wQ = 7 - (WQ = WQ.slice(wQ)).length
-           } else wQ -= qQ;
-           for (; wQ--;) WQ += "0";
-           if (QQ.d.push(+WQ), sQ && (QQ.e > yQ || QQ.e < -yQ)) throw Error(gQ + XQ)
-         } else QQ.s = 0, QQ.e = 0, QQ.d = [0];
-         return QQ
-       }
- 
-       function hQ(QQ, WQ, XQ) {
- ... (7 more removed lines; see GitHub link above)
+     function nM(MM, rM) {
+       var iM = "function" === typeof Symbol && MM[Symbol.iterator];
+       if (!iM) return MM;
+       var OM, SM, jM = iM.call(MM),
+         aM = [];
+       try {
+         for (;
+           (void 0 === rM || rM-- > 0) && !(OM = jM.next()).done;) aM.push(OM.value)
+       } catch (PM) {
+         SM = {
+           error: PM
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L332-L345` → after: `L144-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L144-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/121.js#L144-L242) · [Before (L332-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/121.js#L332-L345)

```diff
-         if (void 0 !== XQ && (FQ = IQ / (TQ = rQ(10, zQ - qQ - 1)) % 10 | 0, PQ = WQ < 0 || void 0 !== VQ[BQ + 1] || IQ % TQ, PQ = XQ < 4 ? (FQ || PQ) && (0 == XQ || XQ == (QQ.s < 0 ? 3 : 2)) : FQ > 5 || 5 == FQ && (4 == XQ || PQ || 6 == XQ && (wQ > 0 ? qQ > 0 ? IQ / rQ(10, zQ -  … [truncated]
-         if (0 == wQ ? (VQ.length = BQ, TQ = 1, BQ--) : (VQ.length = BQ + 1, TQ = rQ(10, 7 - wQ), VQ[BQ] = qQ > 0 ? (IQ / rQ(10, zQ - qQ) % rQ(10, qQ) | 0) * TQ : 0), PQ)
-           for (;;) {
-             if (0 == BQ) {
-               (VQ[0] += TQ) == jQ && (VQ[0] = 1, ++QQ.e);
-               break
-             }
-             if (VQ[BQ] += TQ, VQ[BQ] != jQ) break;
-             VQ[BQ--] = 0, TQ = 1
-           }
-         for (wQ = VQ.length; 0 === VQ[--wQ];) VQ.pop();
-         if (sQ && (QQ.e > yQ || QQ.e < -yQ)) throw Error(gQ + vQ(QQ));
-         return QQ
-       }
+       } finally {
+         try {
+           OM && !OM.done && (iM = jM.return) && iM.call(jM)
+         } finally {
+           if (SM) throw SM.error
+         }
+       }
+       return aM
+     }
+ 
+     function QM(MM, rM, iM) {
+       if (iM || 2 === arguments.length)
+         for (var OM, SM = 0, jM = rM.length; SM < jM; SM++) !OM && SM in rM || (OM || (OM = Array.prototype.slice.call(rM, 0, SM)), OM[SM] = rM[SM]);
+       return MM.concat(OM || Array.prototype.slice.call(rM))
+     }
+     Object.create;
+ ... (83 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L347-L367` → after: `L244-L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L244-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/121.js#L244-L255) · [Before (L347-L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/121.js#L347-L367)

```diff
-       function iQ(QQ, WQ) {
-         var XQ, wQ, qQ, TQ, zQ, FQ, PQ, gQ, JQ, rQ, IQ = QQ.constructor,
-           BQ = IQ.precision;
-         if (!QQ.s || !WQ.s) return WQ.s ? WQ.s = -WQ.s : WQ = new IQ(QQ), sQ ? hQ(WQ, BQ) : WQ;
-         if (PQ = QQ.d, rQ = WQ.d, wQ = WQ.e, gQ = QQ.e, PQ = PQ.slice(), zQ = gQ - wQ) {
-           for ((JQ = zQ < 0) ? (XQ = PQ, zQ = -zQ, FQ = rQ.length) : (XQ = rQ, wQ = gQ, FQ = PQ.length), zQ > (qQ = Math.max(Math.ceil(BQ / 7), FQ) + 2) && (zQ = qQ, XQ.length = 1), XQ.reverse(), qQ = zQ; qQ--;) XQ.push(0);
-           XQ.reverse()
-         } else {
-           for ((JQ = (qQ = PQ.length) < (FQ = rQ.length)) && (FQ = qQ), qQ = 0; qQ < FQ; qQ++)
-             if (PQ[qQ] != rQ[qQ]) {
-               JQ = PQ[qQ] < rQ[qQ];
-               break
-             } zQ = 0
-         }
-         for (JQ && (XQ = PQ, PQ = rQ, rQ = XQ, WQ.s = -WQ.s), FQ = PQ.length, qQ = rQ.length - FQ; qQ > 0; --qQ) PQ[FQ++] = 0;
-         for (qQ = rQ.length; qQ > zQ;) {
- ... (5 more removed lines; see GitHub link above)
+     function LM(MM, rM) {
+       var iM = function(MM) {
+         var rM = MM.name;
+         if (rM && -1 !== rM.lastIndexOf(".") && !MM.type) {
+           var iM = rM.split(".").pop().toLowerCase(),
+             OM = zM.get(iM);
+           OM && Object.defineProperty(MM, "type", {
+             value: OM,
+             writable: !1,
+             configurable: !1,
+             enumerable: !0
+           })
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L369-L371` → after: `L257-L266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L257-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/121.js#L257-L266) · [Before (L369-L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/121.js#L369-L371)

```diff
-         for (; 0 === PQ[--FQ];) PQ.pop();
-         for (; 0 === PQ[0]; PQ.shift()) --wQ;
-         return PQ[0] ? (WQ.d = PQ, WQ.e = wQ, sQ ? hQ(WQ, BQ) : WQ) : new IQ(0)
+         return MM
+       }(MM);
+       if ("string" !== typeof iM.path) {
+         var OM = MM.webkitRelativePath;
+         Object.defineProperty(iM, "path", {
+           value: "string" === typeof rM ? rM : "string" === typeof OM && OM.length > 0 ? OM : MM.name,
+           writable: !1,
+           configurable: !1,
+           enumerable: !0
+         })
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L374-L379` → after: `L272-L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L272-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/121.js#L272-L274) · [Before (L374-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/121.js#L374-L379)

```diff
-       function cQ(QQ, WQ, XQ) {
-         var wQ, qQ = vQ(QQ),
-           TQ = GQ(QQ.d),
-           zQ = TQ.length;
-         return WQ ? (XQ && (wQ = XQ - zQ) > 0 ? TQ = TQ.charAt(0) + "." + TQ.slice(1) + HQ(wQ) : zQ > 1 && (TQ = TQ.charAt(0) + "." + TQ.slice(1)), TQ = TQ + (qQ < 0 ? "e" : "e+") + qQ) : qQ < 0 ? (TQ = "0." + HQ(-qQ - 1) + TQ, XQ && (wQ = XQ - zQ) > 0 && (TQ += HQ(wQ))) : qQ >=  … [truncated]
-       }
+     function HM(MM) {
+       return "object" === typeof MM && null !== MM
+     }
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L381-L383` → after: `L276-L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L276-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/121.js#L276-L280) · [Before (L381-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/121.js#L381-L383)

```diff
-       function AQ(QQ, WQ) {
-         if (QQ.length > WQ) return QQ.length = WQ, !0
-       }
+     function hM(MM) {
+       return lM(MM.target.files).map((function(MM) {
+         return LM(MM)
+       }))
+     }
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L385-L399` → after: `L282-L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L282-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/121.js#L282-L297) · [Before (L385-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/121.js#L385-L399)

```diff
-       function RQ(QQ) {
-         if (!QQ || "object" !== typeof QQ) throw Error(FQ + "Object expected");
-         var WQ, XQ, wQ, qQ = ["precision", 1, TQ, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
-         for (WQ = 0; WQ < qQ.length; WQ += 3)
-           if (void 0 !== (wQ = QQ[XQ = qQ[WQ]])) {
-             if (!(JQ(wQ) === wQ && wQ >= qQ[WQ + 1] && wQ <= qQ[WQ + 2])) throw Error(PQ + XQ + ": " + wQ);
-             this[XQ] = wQ
-           } if (void 0 !== (wQ = QQ[XQ = "LN10"])) {
-           if (wQ != Math.LN10) throw Error(PQ + XQ + ": " + wQ);
-           this[XQ] = new this(wQ)
-         }
-         return this
-       }
-       zQ = function QQ(WQ) {
-         var XQ, wQ, qQ;
+     function JM(MM) {
+       return aM(this, void 0, void 0, (function() {
+         return PM(this, (function(rM) {
+           switch (rM.label) {
+             case 0:
+               return [4, Promise.all(MM.map((function(MM) {
+                 return MM.getFile()
+               })))];
+             case 1:
+               return [2, rM.sent().map((function(MM) {
+                 return LM(MM)
+               }))]
+           }
+         }))
+       }))
+     }
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L401-L412` → after: `L299-L313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L299-L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/121.js#L299-L313) · [Before (L401-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/121.js#L401-L412)

```diff
-         function TQ(QQ) {
-           var WQ = this;
-           if (!(WQ instanceof TQ)) return new TQ(QQ);
-           if (WQ.constructor = TQ, QQ instanceof TQ) return WQ.s = QQ.s, WQ.e = QQ.e, void(WQ.d = (QQ = QQ.d) ? QQ.slice() : QQ);
-           if ("number" === typeof QQ) {
-             if (0 * QQ !== 0) throw Error(PQ + QQ);
-             if (QQ > 0) WQ.s = 1;
-             else {
-               if (!(QQ < 0)) return WQ.s = 0, WQ.e = 0, void(WQ.d = [0]);
-               QQ = -QQ, WQ.s = -1
-             }
-             return QQ === ~~QQ && QQ < 1e7 ? (WQ.e = 0, void(WQ.d = [QQ])) : lQ(WQ, QQ.toString())
+     function dM(MM, rM) {
+       return aM(this, void 0, void 0, (function() {
+         var iM;
+         return PM(this, (function(OM) {
+           switch (OM.label) {
+             case 0:
+               return MM.items ? (iM = lM(MM.items).filter((function(MM) {
+                 return "file" === MM.kind
+               })), "drop" !== rM ? [2, iM] : [4, Promise.all(iM.map(EM))]) : [3, 2];
+             case 1:
+               return [2, yM(UM(OM.sent()))];
+             case 2:
+               return [2, yM(lM(MM.files).map((function(MM) {
+                 return LM(MM)
+               })))]
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L414-L435` → after: `L315-L317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L315-L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/121.js#L315-L317) · [Before (L414-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/121.js#L414-L435)

```diff
-           if ("string" !== typeof QQ) throw Error(PQ + QQ);
-           if (45 === QQ.charCodeAt(0) ? (QQ = QQ.slice(1), WQ.s = -1) : WQ.s = 1, !IQ.test(QQ)) throw Error(PQ + QQ);
-           lQ(WQ, QQ)
-         }
-         if (TQ.prototype = VQ, TQ.ROUND_UP = 0, TQ.ROUND_DOWN = 1, TQ.ROUND_CEIL = 2, TQ.ROUND_FLOOR = 3, TQ.ROUND_HALF_UP = 4, TQ.ROUND_HALF_DOWN = 5, TQ.ROUND_HALF_EVEN = 6, TQ.ROUND_HALF_CEIL = 7, TQ.ROUND_HALF_FLOOR = 8, TQ.clone = QQ, TQ.config = TQ.set = RQ, void 0 === WQ & … [truncated]
-           for (qQ = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], XQ = 0; XQ < qQ.length;) WQ.hasOwnProperty(wQ = qQ[XQ++]) || (WQ[wQ] = this[wQ]);
-         return TQ.config(WQ), TQ
-       }(zQ), zQ.default = zQ.Decimal = zQ, qQ = new zQ(1), void 0 === (wQ = function() {
-         return zQ
-       }.call(WQ, XQ, WQ, QQ)) || (QQ.exports = wQ)
-     }()
-   },
-   6133: (QQ, WQ, XQ) => {
-     var wQ = XQ(5609)(XQ(5455), "DataView");
-     QQ.exports = wQ
-   },
- ... (6 more removed lines; see GitHub link above)
+         }))
+       }))
+     }
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L438-L443` → after: `L320-L322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L320-L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/121.js#L320-L322) · [Before (L438-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/121.js#L438-L443)

```diff
-       var WQ = -1,
-         XQ = null == QQ ? 0 : QQ.length;
-       for (this.clear(); ++WQ < XQ;) {
-         var wQ = QQ[WQ];
-         this.set(wQ[0], wQ[1])
-       }
+       return MM.filter((function(MM) {
+         return -1 === mM.indexOf(MM.name)
+       }))
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L455-L457` → after: `L326-L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L326-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/121.js#L326-L327) · [Before (L455-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/121.js#L455-L457)

```diff
-       var WQ = -1,
-         XQ = null == QQ ? 0 : QQ.length;
-       for (this.clear(); ++WQ < XQ;) {
+       if (null === MM) return [];
+       for (var rM = [], iM = 0; iM < MM.length; iM++) {
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L459` → after: `L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/121.js#L329) · [Before (L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/121.js#L459)

```diff
-         this.set(wQ[0], wQ[1])
+         rM.push(OM)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L476-L481` → after: `L335-L337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L335-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/121.js#L335-L337) · [Before (L476-L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/121.js#L476-L481)

```diff
-       var WQ = -1,
-         XQ = null == QQ ? 0 : QQ.length;
-       for (this.clear(); ++WQ < XQ;) {
-         var wQ = QQ[WQ];
-         this.set(wQ[0], wQ[1])
-       }
+       if ("function" !== typeof MM.webkitGetAsEntry) return GM(MM);
+       var rM = MM.webkitGetAsEntry();
+       return rM && rM.isDirectory ? eM(rM) : GM(MM)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L499-L501` → after: `L341-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L341-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/121.js#L341-L343) · [Before (L499-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/121.js#L499-L501)

```diff
-       var WQ = -1,
-         XQ = null == QQ ? 0 : QQ.length;
-       for (this.__data__ = new wQ; ++WQ < XQ;) this.add(QQ[WQ])
+       return MM.reduce((function(MM, rM) {
+         return QM(QM([], nM(MM), !1), nM(Array.isArray(rM) ? UM(rM) : [rM]), !1)
+       }), [])
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L514-L550` → after: `L347-L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L347-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/121.js#L347-L350) · [Before (L514-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/121.js#L514-L550)

```diff
-       var WQ = this.__data__ = new wQ(QQ);
-       this.size = WQ.size
-     }
-     PQ.prototype.clear = qQ, PQ.prototype.delete = TQ, PQ.prototype.get = zQ, PQ.prototype.has = sQ, PQ.prototype.set = FQ, QQ.exports = PQ
-   },
-   5501: (QQ, WQ, XQ) => {
-     var wQ = XQ(5455).Symbol;
-     QQ.exports = wQ
-   },
-   6012: (QQ, WQ, XQ) => {
-     var wQ = XQ(5455).Uint8Array;
-     QQ.exports = wQ
-   },
-   6149: (QQ, WQ, XQ) => {
-     var wQ = XQ(5609)(XQ(5455), "WeakMap");
-     QQ.exports = wQ
- ... (21 more removed lines; see GitHub link above)
+       var rM = MM.getAsFile();
+       if (!rM) return Promise.reject("".concat(MM, " is not a File"));
+       var iM = LM(rM);
+       return Promise.resolve(iM)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L552-L559` → after: `L352-L358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L352-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/121.js#L352-L358) · [Before (L552-L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/121.js#L552-L559)

```diff
-   },
-   6053: QQ => {
-     QQ.exports = function(QQ, WQ) {
-       for (var XQ = -1, wQ = null == QQ ? 0 : QQ.length, qQ = 0, TQ = []; ++XQ < wQ;) {
-         var zQ = QQ[XQ];
-         WQ(zQ, XQ, QQ) && (TQ[qQ++] = zQ)
-       }
-       return TQ
+ 
+     function CM(MM) {
+       return aM(this, void 0, void 0, (function() {
+         return PM(this, (function(rM) {
+           return [2, MM.isDirectory ? eM(MM) : bM(MM)]
+         }))
+       }))
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L561-L565` → after: `L360-L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L360-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/121.js#L360-L394) · [Before (L561-L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/121.js#L561-L565)

```diff
-   },
-   6371: (QQ, WQ, XQ) => {
-     var wQ = XQ(6380);
-     QQ.exports = function(QQ, WQ) {
-       return !!(null == QQ ? 0 : QQ.length) && wQ(QQ, WQ, 0) > -1
+ 
+     function eM(MM) {
+       var rM = MM.createReader();
+       return new Promise((function(MM, iM) {
+         var OM = [];
+         ! function SM() {
+           var jM = this;
+           rM.readEntries((function(rM) {
+             return aM(jM, void 0, void 0, (function() {
+               var jM, aM, nM;
+               return PM(this, (function(PM) {
+                 switch (PM.label) {
+                   case 0:
+                     if (rM.length) return [3, 5];
+                     PM.label = 1;
+                   case 1:
+ ... (19 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L567-L572` → after: `L396-L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L396-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/121.js#L396-L409) · [Before (L567-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/121.js#L567-L572)

```diff
-   },
-   6409: QQ => {
-     QQ.exports = function(QQ, WQ, XQ) {
-       for (var wQ = -1, qQ = null == QQ ? 0 : QQ.length; ++wQ < qQ;)
-         if (XQ(WQ, QQ[wQ])) return !0;
-       return !1
+ 
+     function bM(MM) {
+       return aM(this, void 0, void 0, (function() {
+         return PM(this, (function(rM) {
+           return [2, new Promise((function(rM, iM) {
+             MM.file((function(iM) {
+               var OM = LM(iM, MM.fullPath);
+               rM(OM)
+             }), (function(MM) {
+               iM(MM)
+             }))
+           }))]
+         }))
+       }))
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L574-L592` → after: `L411-L420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L411-L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/121.js#L411-L420) · [Before (L574-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/121.js#L574-L592)

```diff
-   },
-   6066: (QQ, WQ, XQ) => {
-     var wQ = XQ(6071),
-       qQ = XQ(5885),
-       TQ = XQ(5529),
-       zQ = XQ(6075),
-       sQ = XQ(5848),
-       FQ = XQ(6085),
-       PQ = Object.prototype.hasOwnProperty;
-     QQ.exports = function(QQ, WQ) {
-       var XQ = TQ(QQ),
-         gQ = !XQ && qQ(QQ),
-         JQ = !XQ && !gQ && zQ(QQ),
-         rQ = !XQ && !gQ && !JQ && FQ(QQ),
-         IQ = XQ || gQ || JQ || rQ,
-         jQ = IQ ? wQ(QQ.length, String) : [],
- ... (3 more removed lines; see GitHub link above)
+     var wM = iM(5384);
+ 
+     function tM(MM) {
+       return function(MM) {
+         if (Array.isArray(MM)) return sM(MM)
+       }(MM) || function(MM) {
+         if ("undefined" !== typeof Symbol && null != MM[Symbol.iterator] || null != MM["@@iterator"]) return Array.from(MM)
+       }(MM) || WM(MM) || function() {
+         throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
+       }()
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L594-L597` → after: `L422-L430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L422-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/121.js#L422-L430) · [Before (L594-L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/121.js#L594-L597)

```diff
-   },
-   5756: QQ => {
-     QQ.exports = function(QQ, WQ) {
-       for (var XQ = -1, wQ = null == QQ ? 0 : QQ.length, qQ = Array(wQ); ++XQ < wQ;) qQ[XQ] = WQ(QQ[XQ], XQ, QQ);
+ 
+     function gM(MM, rM) {
+       var iM = Object.keys(MM);
+       if (Object.getOwnPropertySymbols) {
+         var OM = Object.getOwnPropertySymbols(MM);
+         rM && (OM = OM.filter((function(rM) {
+           return Object.getOwnPropertyDescriptor(MM, rM).enumerable
+         }))), iM.push.apply(iM, OM)
+       }
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L600-L603` → after: `L433-L442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L433-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/121.js#L433-L442) · [Before (L600-L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/121.js#L600-L603)

```diff
-   },
-   5875: QQ => {
-     QQ.exports = function(QQ, WQ) {
-       for (var XQ = -1, wQ = WQ.length, qQ = QQ.length; ++XQ < wQ;) QQ[qQ + XQ] = WQ[XQ];
+ 
+     function uM(MM) {
+       for (var rM = 1; rM < arguments.length; rM++) {
+         var iM = null != arguments[rM] ? arguments[rM] : {};
+         rM % 2 ? gM(Object(iM), !0).forEach((function(rM) {
+           RM(MM, rM, iM[rM])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(MM, Object.getOwnPropertyDescriptors(iM)) : gM(Object(iM)).forEach((function(rM) {
+           Object.defineProperty(MM, rM, Object.getOwnPropertyDescriptor(iM, rM))
+         }))
+       }
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L606-L632` → after: `L445-L447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L445-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/121.js#L445-L447) · [Before (L606-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/121.js#L606-L632)

```diff
-   },
-   5998: QQ => {
-     QQ.exports = function(QQ, WQ) {
-       for (var XQ = -1, wQ = null == QQ ? 0 : QQ.length; ++XQ < wQ;)
-         if (WQ(QQ[XQ], XQ, QQ)) return !0;
-       return !1
-     }
-   },
-   6475: QQ => {
-     QQ.exports = function(QQ) {
-       return QQ.split("")
-     }
-   },
-   5681: (QQ, WQ, XQ) => {
-     var wQ = XQ(5683);
-     QQ.exports = function(QQ, WQ) {
- ... (11 more removed lines; see GitHub link above)
+ 
+     function RM(MM, rM, iM) {
+       return rM in MM ? Object.defineProperty(MM, rM, {
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L635` → after: `L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/121.js#L452) · [Before (L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/121.js#L635)

```diff
-       }) : QQ[WQ] = XQ
+       }) : MM[rM] = iM, MM
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L637-L649` → after: `L454-L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L454-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/121.js#L454-L478) · [Before (L637-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/121.js#L637-L649)

```diff
-   },
-   6231: (QQ, WQ, XQ) => {
-     var wQ = XQ(6240),
-       qQ = XQ(6257)(wQ);
-     QQ.exports = qQ
-   },
-   6662: (QQ, WQ, XQ) => {
-     var wQ = XQ(6231);
-     QQ.exports = function(QQ, WQ) {
-       var XQ = !0;
-       return wQ(QQ, (function(QQ, wQ, qQ) {
-         return XQ = !!WQ(QQ, wQ, qQ)
-       })), XQ
+ 
+     function pM(MM, rM) {
+       return function(MM) {
+         if (Array.isArray(MM)) return MM
+       }(MM) || function(MM, rM) {
+         var iM = null == MM ? null : "undefined" !== typeof Symbol && MM[Symbol.iterator] || MM["@@iterator"];
+         if (null == iM) return;
+         var OM, SM, jM = [],
+           aM = !0,
+           PM = !1;
+         try {
+           for (iM = iM.call(MM); !(aM = (OM = iM.next()).done) && (jM.push(OM.value), !rM || jM.length !== rM); aM = !0);
+         } catch (nM) {
+           PM = !0, SM = nM
+         } finally {
+           try {
+ ... (9 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L651-L659` → after: `L480-L485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L480-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/121.js#L480-L485) · [Before (L651-L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/121.js#L651-L659)

```diff
-   },
-   6555: (QQ, WQ, XQ) => {
-     var wQ = XQ(5484);
-     QQ.exports = function(QQ, WQ, XQ) {
-       for (var qQ = -1, TQ = QQ.length; ++qQ < TQ;) {
-         var zQ = QQ[qQ],
-           sQ = WQ(zQ);
-         if (null != sQ && (void 0 === FQ ? sQ === sQ && !wQ(sQ) : XQ(sQ, FQ))) var FQ = sQ,
-           PQ = zQ
+ 
+     function WM(MM, rM) {
+       if (MM) {
+         if ("string" === typeof MM) return sM(MM, rM);
+         var iM = Object.prototype.toString.call(MM).slice(8, -1);
+         return "Object" === iM && MM.constructor && (iM = MM.constructor.name), "Map" === iM || "Set" === iM ? Array.from(MM) : "Arguments" === iM || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(iM) ? sM(MM, rM) : void 0
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L663-L19293` → after: `L494-L497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L494-L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/121.js#L494-L497) · [Before (L663-L19293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/121.js#L663-L19293)

```diff
-   },
-   6385: QQ => {
-     QQ.exports = function(QQ, WQ, XQ, wQ) {
-       for (var qQ = QQ.length, TQ = XQ + (wQ ? 1 : -1); wQ ? TQ-- : ++TQ < qQ;)
-         if (WQ(QQ[TQ], TQ, QQ)) return TQ;
-       return -1
-     }
-   },
-   5871: (QQ, WQ, XQ) => {
-     var wQ = XQ(5875),
-       qQ = XQ(5878);
-     QQ.exports = function QQ(WQ, XQ, TQ, zQ, sQ) {
-       var FQ = -1,
-         PQ = WQ.length;
-       for (TQ || (TQ = qQ), sQ || (sQ = []); ++FQ < PQ;) {
-         var gQ = WQ[FQ];
- ... (18615 more removed lines; see GitHub link above)
+     var DM = "file-invalid-type",
+       kM = "file-too-large",
+       ZM = "file-too-small",
+       oM = "too-many-files",
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L19296-L19297` → after: `L502-L503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L502-L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/121.js#L502-L503) · [Before (L19296-L19297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/121.js#L19296-L19297)

```diff
-           top: QQ.top + window.scrollY - document.documentElement.clientTop,
-           left: QQ.left + window.scrollX - document.documentElement.clientLeft
+           code: DM,
+           message: "File type must be ".concat(rM)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L19388-L19391` → after: `L508-L509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L508-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/121.js#L508-L509) · [Before (L19388-L19391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/121.js#L19388-L19391)

```diff
-           xmin: zQ,
-           xmax: sQ,
-           a: JQ,
-           b: (wQ - JQ * XQ) / WQ
+           code: kM,
+           message: "File is larger than ".concat(MM, " ").concat(1 === MM ? "byte" : "bytes")
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L19501-L19575` → after: `L514-L515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L514-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/121.js#L514-L515) · [Before (L19501-L19575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/121.js#L19501-L19575)

```diff
-           x: QQ + Math.cos(-sQ * wQ) * XQ,
-           y: WQ + Math.sin(-sQ * wQ) * XQ
-         }
-       },
-       gQ = function(QQ, WQ) {
-         var XQ = QQ.x,
-           wQ = QQ.y,
-           qQ = WQ.cx,
-           TQ = WQ.cy,
-           zQ = function(QQ, WQ) {
-             var XQ = QQ.x,
-               wQ = QQ.y,
-               qQ = WQ.x,
-               TQ = WQ.y;
-             return Math.sqrt(Math.pow(XQ - qQ, 2) + Math.pow(wQ - TQ, 2))
-           }({
- ... (59 more removed lines; see GitHub link above)
+           code: ZM,
+           message: "File is smaller than ".concat(MM, " ").concat(1 === MM ? "byte" : "bytes")
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L19655-L19665` → after: `L518-L520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L518-L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/121.js#L518-L520) · [Before (L19655-L19665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/121.js#L19655-L19665)

```diff
-       vQ = function(QQ) {
-         return "string" === typeof QQ ? QQ : QQ ? QQ.displayName || QQ.name || "Component" : ""
-       },
-       dQ = null,
-       HQ = null,
-       aQ = function QQ(WQ) {
-         if (WQ === dQ && Array.isArray(HQ)) return HQ;
-         var XQ = [];
-         return IQ.Children.forEach(WQ, (function(WQ) {
-           zQ()(WQ) || ((0, jQ.isFragment)(WQ) ? XQ = XQ.concat(QQ(WQ.props.children)) : XQ.push(WQ))
-         })), HQ = XQ, dQ = WQ, XQ
+       AM = {
+         code: oM,
+         message: "Too many files"
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L19669-L19872` → after: `L524-L525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L524-L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/121.js#L524-L525) · [Before (L19669-L19872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/121.js#L19669-L19872)

```diff
-       var XQ = [],
-         wQ = [];
-       return wQ = Array.isArray(WQ) ? WQ.map((function(QQ) {
-         return vQ(QQ)
-       })) : [vQ(WQ)], aQ(QQ).forEach((function(QQ) {
-         var WQ = qQ()(QQ, "type.displayName") || qQ()(QQ, "type.name"); - 1 !== wQ.indexOf(WQ) && XQ.push(QQ)
-       })), XQ
-     }
- 
-     function hQ(QQ, WQ) {
-       var XQ = lQ(QQ, WQ);
-       return XQ && XQ[0]
-     }
-     var iQ = function(QQ) {
-         if (!QQ || !QQ.props) return !1;
-         var WQ = QQ.props,
- ... (188 more removed lines; see GitHub link above)
+       var iM = "application/x-moz-file" === MM.type || (0, wM.d)(MM, rM);
+       return [iM, iM ? null : fM(rM)]
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L19884-L19898` → after: `L528-L537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L528-L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/121.js#L528-L537) · [Before (L19884-L19898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/121.js#L19884-L19898)

```diff
-     function sQ(QQ, WQ, XQ) {
-       return !0 === WQ ? qQ()(QQ, XQ) : zQ()(WQ) ? qQ()(QQ, WQ) : QQ
-     }
-   },
-   5800: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       b: () => gQ,
-       e: () => PQ,
-       h: () => sQ,
-       k: () => JQ,
-       o: () => rQ
-     });
-     var wQ = XQ(61),
-       qQ = XQ(5441),
-       TQ = XQ.n(qQ);
+     function vM(MM, rM, iM) {
+       if (FM(MM.size))
+         if (FM(rM) && FM(iM)) {
+           if (MM.size > iM) return [!1, YM(iM)];
+           if (MM.size < rM) return [!1, NM(rM)]
+         } else {
+           if (FM(rM) && MM.size < rM) return [!1, NM(rM)];
+           if (FM(iM) && MM.size > iM) return [!1, YM(iM)]
+         } return [!0, null]
+     }
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L19901-L19905` → after: `L540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/121.js#L540) · [Before (L19901-L19905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/121.js#L19901-L19905)

```diff
-       return zQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
-         return typeof QQ
-       } : function(QQ) {
-         return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
-       }, zQ(QQ)
+       return void 0 !== MM && null !== MM
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L19956-L19986` → after: `L544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/121.js#L544) · [Before (L19956-L19986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/121.js#L19956-L19986)

```diff
-       if ("object" === typeof QQ && null !== QQ) {
-         var WQ = QQ.$$typeof;
-         switch (WQ) {
-           case wQ:
-             switch (QQ = QQ.type) {
-               case TQ:
-               case sQ:
-               case zQ:
-               case rQ:
-               case IQ:
-                 return QQ;
-               default:
-                 switch (QQ = QQ && QQ.$$typeof) {
-                   case gQ:
-                   case PQ:
-                   case JQ:
- ... (15 more removed lines; see GitHub link above)
+       return "function" === typeof MM.isPropagationStopped ? MM.isPropagationStopped() : "undefined" !== typeof MM.cancelBubble && MM.cancelBubble
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L19988-L19992` → after: `L546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/121.js#L546) · [Before (L19988-L19992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/121.js#L19988-L19992)

```diff
-   },
-   5780: (QQ, WQ, XQ) => {
-     QQ.exports = XQ(5785)
-   },
-   5423: (QQ, WQ, XQ) => {
+ 
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L19994-L20002` → after: `L548-L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L548-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/121.js#L548-L550) · [Before (L19994-L20002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/121.js#L19994-L20002)

```diff
-       var WQ, XQ, qQ = "";
-       if ("string" == typeof QQ || "number" == typeof QQ) qQ += QQ;
-       else if ("object" == typeof QQ)
-         if (Array.isArray(QQ)) {
-           var TQ = QQ.length;
-           for (WQ = 0; WQ < TQ; WQ++) QQ[WQ] && (XQ = wQ(QQ[WQ])) && (qQ && (qQ += " "), qQ += XQ)
-         } else
-           for (XQ in QQ) QQ[XQ] && (qQ && (qQ += " "), qQ += XQ);
-       return qQ
+       return MM.dataTransfer ? Array.prototype.some.call(MM.dataTransfer.types, (function(MM) {
+         return "Files" === MM || "application/x-moz-file" === MM
+       })) : !!MM.target && !!MM.target.files
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L20004-L20009` → after: `L552-L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L552-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/121.js#L552-L554) · [Before (L20004-L20009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/121.js#L20004-L20009)

```diff
-     XQ.d(WQ, {
-       e: () => qQ
-     });
-     const qQ = function() {
-       for (var QQ, WQ, XQ = 0, qQ = "", TQ = arguments.length; XQ < TQ; XQ++)(QQ = arguments[XQ]) && (WQ = wQ(QQ)) && (qQ && (qQ += " "), qQ += WQ);
-       return qQ
+ 
+     function IM(MM) {
+       MM.preventDefault()
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L20021-L20044` → after: `L558-L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L558-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/121.js#L558-L563) · [Before (L20021-L20044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/121.js#L20021-L20044)

```diff
-       var QQ, WQ, XQ = (0, qQ.e)().unknown(void 0),
-         zQ = XQ.domain,
-         sQ = XQ.range,
-         FQ = 0,
-         PQ = 1,
-         gQ = !1,
-         JQ = 0,
-         rQ = 0,
-         IQ = .5;
- 
-       function jQ() {
-         var XQ = zQ().length,
-           wQ = PQ < FQ,
-           qQ = wQ ? PQ : FQ,
-           TQ = wQ ? FQ : PQ;
-         QQ = (TQ - qQ) / Math.max(1, XQ - JQ + 2 * rQ), gQ && (QQ = Math.floor(QQ)), qQ += (TQ - qQ - QQ * (XQ - JQ)) * IQ, WQ = QQ * (1 - JQ), gQ && (qQ = Math.round(qQ), WQ = Math.round(WQ));
- ... (8 more removed lines; see GitHub link above)
+       for (var MM = arguments.length, rM = new Array(MM), iM = 0; iM < MM; iM++) rM[iM] = arguments[iM];
+       return function(MM) {
+         for (var iM = arguments.length, OM = new Array(iM > 1 ? iM - 1 : 0), SM = 1; SM < iM; SM++) OM[SM - 1] = arguments[SM];
+         return rM.some((function(rM) {
+           return !BM(MM) && rM && rM.apply(void 0, [MM].concat(OM)), BM(MM)
+         }))
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L20072-L20075` → after: `L568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/121.js#L568) · [Before (L20072-L20075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/121.js#L20072-L20075)

```diff
-       var WQ = QQ.copy;
-       return QQ.padding = QQ.paddingOuter, delete QQ.paddingInner, delete QQ.paddingOuter, QQ.copy = function() {
-         return zQ(WQ())
-       }, QQ
+       return "audio/*" === MM || "video/*" === MM || "image/*" === MM || "text/*" === MM || /\w+\/[-+.\w]+/g.test(MM)
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L20078-L20079` → after: `L571-L572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L571-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/121.js#L571-L572) · [Before (L20078-L20079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/121.js#L20078-L20079)

```diff
-     function sQ() {
-       return zQ(TQ.apply(null, arguments).paddingInner(1))
+     function TM(MM) {
+       return /^.*\.[\w]+$/.test(MM)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L20081-L20093` → after: `L574-L586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L574-L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/121.js#L574-L586) · [Before (L20081-L20093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/121.js#L20081-L20093)

```diff
-   },
-   6540: (QQ, WQ, XQ) => {
-     function wQ(QQ, WQ) {
-       switch (arguments.length) {
-         case 0:
-           break;
-         case 1:
-           this.range(QQ);
-           break;
-         default:
-           this.range(WQ).domain(QQ)
-       }
-       return this
+     var VM = ["children"],
+       cM = ["open"],
+       Mr = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
+       rr = ["refKey", "onChange", "onClick"];
+ 
+     function ir(MM) {
+       return function(MM) {
+         if (Array.isArray(MM)) return jr(MM)
+       }(MM) || function(MM) {
+         if ("undefined" !== typeof Symbol && null != MM[Symbol.iterator] || null != MM["@@iterator"]) return Array.from(MM)
+       }(MM) || Sr(MM) || function() {
+         throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
+       }()
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L20097-L20142` → after: `L590-L612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L590-L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/121.js#L590-L612) · [Before (L20097-L20142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/121.js#L20097-L20142)

```diff
-       switch (arguments.length) {
-         case 0:
-           break;
-         case 1:
-           "function" === typeof QQ ? this.interpolator(QQ) : this.range(QQ);
-           break;
-         default:
-           this.domain(QQ), "function" === typeof WQ ? this.interpolator(WQ) : this.range(WQ)
-       }
-       return this
-     }
-     XQ.d(WQ, {
-       d: () => qQ,
-       g: () => wQ
-     })
-   },
- ... (30 more removed lines; see GitHub link above)
+       return function(MM) {
+         if (Array.isArray(MM)) return MM
+       }(MM) || function(MM, rM) {
+         var iM = null == MM ? null : "undefined" !== typeof Symbol && MM[Symbol.iterator] || MM["@@iterator"];
+         if (null == iM) return;
+         var OM, SM, jM = [],
+           aM = !0,
+           PM = !1;
+         try {
+           for (iM = iM.call(MM); !(aM = (OM = iM.next()).done) && (jM.push(OM.value), !rM || jM.length !== rM); aM = !0);
+         } catch (nM) {
+           PM = !0, SM = nM
+         } finally {
+           try {
+             aM || null == iM.return || iM.return()
+           } finally {
+ ... (7 more added lines; see GitHub link above)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L20147-L20152` → after: `L616-L620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L616-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/121.js#L616-L620) · [Before (L20147-L20152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/121.js#L20147-L20152)

```diff
-       let {
-         _intern: XQ,
-         _key: wQ
-       } = QQ;
-       const qQ = wQ(WQ);
-       return XQ.has(qQ) ? XQ.get(qQ) : WQ
+       if (MM) {
+         if ("string" === typeof MM) return jr(MM, rM);
+         var iM = Object.prototype.toString.call(MM).slice(8, -1);
+         return "Object" === iM && MM.constructor && (iM = MM.constructor.name), "Map" === iM || "Set" === iM ? Array.from(MM) : "Arguments" === iM || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(iM) ? jr(MM, rM) : void 0
+       }
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L20156-L20161` → after: `L624-L626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L624-L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/121.js#L624-L626) · [Before (L20156-L20161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/121.js#L20156-L20161)

```diff
-       let {
-         _intern: XQ,
-         _key: wQ
-       } = QQ;
-       const qQ = wQ(WQ);
-       return XQ.has(qQ) ? XQ.get(qQ) : (XQ.set(qQ, WQ), WQ)
+       (null == rM || rM > MM.length) && (rM = MM.length);
+       for (var iM = 0, OM = new Array(rM); iM < rM; iM++) OM[iM] = MM[iM];
+       return OM
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L20165-L20170` → after: `L630-L637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L630-L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/121.js#L630-L637) · [Before (L20165-L20170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/121.js#L20165-L20170)

```diff
-       let {
-         _intern: XQ,
-         _key: wQ
-       } = QQ;
-       const qQ = wQ(WQ);
-       return XQ.has(qQ) && (WQ = XQ.get(qQ), XQ.delete(qQ)), WQ
+       var iM = Object.keys(MM);
+       if (Object.getOwnPropertySymbols) {
+         var OM = Object.getOwnPropertySymbols(MM);
+         rM && (OM = OM.filter((function(rM) {
+           return Object.getOwnPropertyDescriptor(MM, rM).enumerable
+         }))), iM.push.apply(iM, OM)
+       }
+       return iM
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L20174-L20191` → after: `L641-L647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L641-L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/121.js#L641-L647) · [Before (L20174-L20191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/121.js#L20174-L20191)

```diff
-       return null !== QQ && "object" === typeof QQ ? QQ.valueOf() : QQ
-     }
-     var FQ = XQ(6540);
-     const PQ = Symbol("implicit");
- 
-     function gQ() {
-       var QQ = new wQ,
-         WQ = [],
-         XQ = [],
-         qQ = PQ;
- 
-       function TQ(wQ) {
-         let TQ = QQ.get(wQ);
-         if (void 0 === TQ) {
-           if (qQ !== PQ) return qQ;
-           QQ.set(wQ, TQ = WQ.push(wQ) - 1)
- ... (2 more removed lines; see GitHub link above)
+       for (var rM = 1; rM < arguments.length; rM++) {
+         var iM = null != arguments[rM] ? arguments[rM] : {};
+         rM % 2 ? ar(Object(iM), !0).forEach((function(rM) {
+           nr(MM, rM, iM[rM])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(MM, Object.getOwnPropertyDescriptors(iM)) : ar(Object(iM)).forEach((function(rM) {
+           Object.defineProperty(MM, rM, Object.getOwnPropertyDescriptor(iM, rM))
+         }))
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L20193-L20204` → after: `L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/121.js#L649) · [Before (L20193-L20204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/121.js#L20193-L20204)

```diff
-       return TQ.domain = function(XQ) {
-         if (!arguments.length) return WQ.slice();
-         WQ = [], QQ = new wQ;
-         for (const wQ of XQ) QQ.has(wQ) || QQ.set(wQ, WQ.push(wQ) - 1);
-         return TQ
-       }, TQ.range = function(QQ) {
-         return arguments.length ? (XQ = Array.from(QQ), TQ) : XQ.slice()
-       }, TQ.unknown = function(QQ) {
-         return arguments.length ? (qQ = QQ, TQ) : qQ
-       }, TQ.copy = function() {
-         return gQ(WQ, XQ).unknown(qQ)
-       }, FQ.g.apply(TQ, arguments), TQ
+       return MM
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L20213-L20214` → after: `L652-L658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L652-L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/121.js#L652-L658) · [Before (L20213-L20214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/121.js#L20213-L20214)

```diff
-     function wQ(QQ) {
-       return "object" === typeof QQ && "length" in QQ ? QQ : Array.from(QQ)
+     function nr(MM, rM, iM) {
+       return rM in MM ? Object.defineProperty(MM, rM, {
+         value: iM,
+         enumerable: !0,
+         configurable: !0,
+         writable: !0
+       }) : MM[rM] = iM, MM
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L20216-L20219` → after: `L660-L667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L660-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/121.js#L660-L667) · [Before (L20216-L20219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/121.js#L20216-L20219)

```diff
-   },
-   6484: (QQ, WQ, XQ) => {
-     function wQ(QQ) {
-       return function() {
+ 
+     function Qr(MM, rM) {
+       if (null == MM) return {};
+       var iM, OM, SM = function(MM, rM) {
+         if (null == MM) return {};
+         var iM, OM, SM = {},
+           jM = Object.keys(MM);
+         for (OM = 0; OM < jM.length; OM++) iM = jM[OM], rM.indexOf(iM) >= 0 || (SM[iM] = MM[iM]);
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L20223-L20234` → after: `L676-L751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L676-L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/121.js#L676-L751) · [Before (L20223-L20234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/121.js#L20223-L20234)

```diff
-     XQ.d(WQ, {
-       e: () => wQ
-     })
-   },
-   6491: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       e: () => PQ
-     });
-     const wQ = Math.PI,
-       qQ = 2 * wQ,
-       TQ = 1e-6,
-       zQ = qQ - TQ;
+     var zr = (0, OM.forwardRef)((function(MM, rM) {
+       var iM = MM.children,
+         SM = Hr(Qr(MM, VM)),
+         jM = SM.open,
+         aM = Qr(SM, cM);
+       return (0, OM.useImperativeHandle)(rM, (function() {
+         return {
+           open: jM
+         }
+       }), [jM]), OM.createElement(OM.Fragment, null, iM(Pr(Pr({}, aM), {}, {
+         open: jM
+       })))
+     }));
+     zr.displayName = "Dropzone";
+     var Lr = {
+       disabled: !1,
+ ... (60 more added lines; see GitHub link above)
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L20236-L20246` → after: `L753-L792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L753-L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/121.js#L753-L792) · [Before (L20236-L20246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/121.js#L20236-L20246)

```diff
-     function sQ(QQ) {
-       this._ += QQ[0];
-       for (let WQ = 1, XQ = QQ.length; WQ < XQ; ++WQ) this._ += arguments[WQ] + QQ[WQ]
-     }
-     class FQ {
-       constructor(QQ) {
-         this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = null == QQ ? sQ : function(QQ) {
-           let WQ = Math.floor(QQ);
-           if (!(WQ >= 0)) throw new Error(`invalid digits: ${QQ}`);
-           if (WQ > 15) return sQ;
-           const XQ = 10 ** WQ;
+     function Hr() {
+       var MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
+         rM = Pr(Pr({}, Lr), MM),
+         iM = rM.accept,
+         SM = rM.disabled,
+         jM = rM.getFilesFromEvent,
+         aM = rM.maxSize,
+         PM = rM.minSize,
+         nM = rM.multiple,
+         QM = rM.maxFiles,
+         zM = rM.onDragEnter,
+         LM = rM.onDragLeave,
+         mM = rM.onDragOver,
+         HM = rM.onDrop,
+         hM = rM.onDropAccepted,
+         JM = rM.onDropRejected,
+ ... (24 more added lines; see GitHub link above)
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L20248-L20249` → after: `L794-L835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L794-L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/121.js#L794-L835) · [Before (L20248-L20249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/121.js#L20248-L20249)

```diff
-             this._ += QQ[0];
-             for (let WQ = 1, wQ = QQ.length; WQ < wQ; ++WQ) this._ += Math.round(arguments[WQ] * XQ) / XQ + QQ[WQ]
+             return FM(MM) ? [{
+               description: "Files",
+               accept: Object.entries(MM).filter((function(MM) {
+                 var rM = pM(MM, 2),
+                   iM = rM[0],
+                   OM = rM[1],
+                   SM = !0;
+                 return qM(iM) || (console.warn('Skipped "'.concat(iM, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), SM = !1), Array.isArray(OM) && OM.every … [truncated]
+               })).reduce((function(MM, rM) {
+                 var iM = pM(rM, 2),
+                   OM = iM[0],
+                   SM = iM[1];
+                 return uM(uM({}, MM), {}, RM({}, OM, SM))
+               }), {})
+             }] : MM
+           }(iM)
+ ... (26 more added lines; see GitHub link above)
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L20251-L20322` → after: `L837-L1076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L837-L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/121.js#L837-L1076) · [Before (L20251-L20322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/121.js#L20251-L20322)

```diff
-         }(QQ)
-       }
-       moveTo(QQ, WQ) {
-         this._append`M${this._x0=this._x1=+QQ},${this._y0=this._y1=+WQ}`
-       }
-       closePath() {
-         null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`)
-       }
-       lineTo(QQ, WQ) {
-         this._append`L${this._x1=+QQ},${this._y1=+WQ}`
-       }
-       quadraticCurveTo(QQ, WQ, XQ, wQ) {
-         this._append`Q${+QQ},${+WQ},${this._x1=+XQ},${this._y1=+wQ}`
-       }
-       bezierCurveTo(QQ, WQ, XQ, wQ, qQ, TQ) {
-         this._append`C${+QQ},${+WQ},${+XQ},${+wQ},${this._x1=+qQ},${this._y1=+TQ}`
- ... (56 more removed lines; see GitHub link above)
+       }), [oM, cM, kM, Sr]);
+       var ar = (0, OM.useRef)([]),
+         zr = function(MM) {
+           ZM.current && ZM.current.contains(MM.target) || (MM.preventDefault(), ar.current = [])
+         };
+       (0, OM.useEffect)((function() {
+         return UM && (document.addEventListener("dragover", IM, !1), document.addEventListener("drop", zr, !1)),
+           function() {
+             UM && (document.removeEventListener("dragover", IM), document.removeEventListener("drop", zr))
+           }
+       }), [ZM, UM]), (0, OM.useEffect)((function() {
+         return !SM && EM && ZM.current && ZM.current.focus(),
+           function() {}
+       }), [ZM, EM, SM]);
+       var Hr = (0, OM.useCallback)((function(MM) {
+           wM ? wM(MM) : console.error(MM)
+ ... (224 more added lines; see GitHub link above)
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/121.js` (Changed code · before: `L20334-L20338` → after: `L1080-L1111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1R1080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-10b33c42d1ee33f1acecdba8798c1488248cc69a69883114479fffa15c8c73f1) · [After (L1080-L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/121.js#L1080-L1111) · [Before (L20334-L20338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/121.js#L20334-L20338)

```diff
-       if (!QQ) {
-         if (wQ) throw new Error(qQ);
-         var XQ = "function" === typeof WQ ? WQ() : WQ,
-           TQ = XQ ? "".concat(qQ, ": ").concat(XQ) : qQ;
-         throw new Error(TQ)
+       switch (rM.type) {
+         case "focus":
+           return Pr(Pr({}, MM), {}, {
+             jD: !0
+           });
+         case "blur":
+           return Pr(Pr({}, MM), {}, {
+             jD: !1
+           });
+         case "openDialog":
+           return Pr(Pr({}, mr), {}, {
+             isFileDialogActive: !0
+           });
+         case "closeDialog":
+           return Pr(Pr({}, MM), {}, {
+             isFileDialogActive: !1
+ ... (16 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/122.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/122.js` (38 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994)

#### 1. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L5-L1169` → after: `L4-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L4-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/122.js#L4-L35) · [Before (L5-L1169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/122.js#L5-L1169)

```diff
-   6830: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       Graph: () => SQ,
-       debug: () => iX,
-       default: () => AX,
-       graphlib: () => TQ,
-       layout: () => IX,
-       util: () => cX,
-       version: () => TW
-     });
-     var wQ = Object.defineProperty,
-       qQ = (QQ, WQ, XQ) => ((QQ, WQ, XQ) => WQ in QQ ? wQ(QQ, WQ, {
-         enumerable: !0,
-         configurable: !0,
-         writable: !0,
-         value: XQ
- ... (1149 more removed lines; see GitHub link above)
+   5405: (MM, rM, iM) => {
+     function OM(MM) {
+       return OM = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
+         return typeof MM
+       } : function(MM) {
+         return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
+       }, OM(MM)
+     }
+     Object.defineProperty(rM, "__esModule", {
+       value: !0
+     }), rM.default = void 0;
+     var SM = LM(iM(1116)),
+       jM = function(MM, rM) {
+         if (!rM && MM && MM.__esModule) return MM;
+         if (null === MM || "object" !== OM(MM) && "function" !== typeof MM) return {
+           default: MM
+ ... (16 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L1171-L1172` → after: `L37-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L37-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/122.js#L37-L43) · [Before (L1171-L1172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/122.js#L1171-L1172)

```diff
-     function RW(QQ, WQ, XQ) {
-       return XQ.low <= WQ.lim && WQ.lim <= XQ.lim
+     function zM(MM) {
+       if ("function" !== typeof WeakMap) return null;
+       var rM = new WeakMap,
+         iM = new WeakMap;
+       return (zM = function(MM) {
+         return MM ? iM : rM
+       })(MM)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L1196` → after: `L47-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L47-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/122.js#L47-L49) · [Before (L1196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/122.js#L1196)

```diff
-       vW(QQ)
+       return MM && MM.__esModule ? MM : {
+         default: MM
+       }
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L1203-L1248` → after: `L52-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L52-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/122.js#L52-L79) · [Before (L1203-L1248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/122.js#L1203-L1248)

```diff
-           function wQ(qQ) {
-             let TQ = XQ;
-             QQ.children(qQ).forEach(wQ), WQ[qQ] = {
-               low: TQ,
-               lim: XQ++
-             }
-           }
-           return QQ.children(wW).forEach(wQ), WQ
-         }(QQ),
-         XQ = QQ.graph();
-       if (!Array.isArray(XQ.dummyChains)) return;
-       XQ.dummyChains.forEach((XQ => {
-         let wQ = QQ.node(XQ),
-           qQ = wQ.edgeObj,
-           TQ = function(QQ, WQ, XQ, wQ) {
-             let qQ, TQ = [],
- ... (30 more removed lines; see GitHub link above)
+     function mM(MM, rM) {
+       var iM = "undefined" !== typeof Symbol && MM[Symbol.iterator] || MM["@@iterator"];
+       if (!iM) {
+         if (Array.isArray(MM) || (iM = function(MM, rM) {
+             if (!MM) return;
+             if ("string" === typeof MM) return HM(MM, rM);
+             var iM = Object.prototype.toString.call(MM).slice(8, -1);
+             "Object" === iM && MM.constructor && (iM = MM.constructor.name);
+             if ("Map" === iM || "Set" === iM) return Array.from(MM);
+             if ("Arguments" === iM || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(iM)) return HM(MM, rM)
+           }(MM)) || rM && MM && "number" === typeof MM.length) {
+           iM && (MM = iM);
+           var OM = 0,
+             SM = function() {};
+           return {
+             s: SM,
+ ... (12 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L1252-L1262` → after: `L82-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L82-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/122.js#L82-L101) · [Before (L1252-L1262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/122.js#L1252-L1262)

```diff
-       }))
-     };
- 
-     function kW(QQ) {
-       let WQ = tQ(QQ, "root", {}, "_root"),
-         XQ = function(QQ) {
-           let WQ = {};
- 
-           function XQ(wQ, qQ) {
-             let TQ = QQ.children(wQ);
-             TQ && TQ.length && TQ.forEach((QQ => XQ(QQ, qQ + 1))), WQ[wQ] = qQ
+         throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
+       }
+       var jM, aM = !0,
+         PM = !1;
+       return {
+         s: function() {
+           iM = iM.call(MM)
+         },
+         n: function() {
+           var MM = iM.next();
+           return aM = MM.done, MM
+         },
+         e: function(MM) {
+           PM = !0, jM = MM
+         },
+         f: function() {
+ ... (4 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L1318-L1332` → after: `L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/122.js#L104) · [Before (L1318-L1332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/122.js#L1318-L1332)

```diff
-       }))
-     };
- 
-     function tW(QQ, WQ, XQ, wQ, qQ, TQ) {
-       let zQ = {
-           width: 0,
-           height: 0,
-           rank: TQ,
-           borderType: WQ
-         },
-         sQ = qQ[WQ][TQ - 1],
-         FQ = tQ(QQ, "border", zQ, XQ);
-       qQ[WQ][TQ] = FQ, QQ.setParent(FQ, wQ), sQ && QQ.setEdge(sQ, FQ, {
-         weight: 1
-       })
+       }
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L1335-L1350` → after: `L107-L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L107-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/122.js#L107-L110) · [Before (L1335-L1350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/122.js#L1335-L1350)

```diff
-     function oW(QQ) {
-       var WQ;
-       let XQ = null == (WQ = QQ.graph().rankdir) ? void 0 : WQ.toLowerCase();
-       ("bt" === XQ || "rl" === XQ) && function(QQ) {
-         QQ.nodes().forEach((WQ => xW(QQ.node(WQ)))), QQ.edges().forEach((WQ => {
-           var XQ;
-           let wQ = QQ.edge(WQ);
-           null == (XQ = wQ.points) || XQ.forEach(xW), Object.hasOwn(wQ, "y") && xW(wQ)
-         }))
-       }(QQ), ("lr" === XQ || "rl" === XQ) && (function(QQ) {
-         QQ.nodes().forEach((WQ => YW(QQ.node(WQ)))), QQ.edges().forEach((WQ => {
-           var XQ;
-           let wQ = QQ.edge(WQ);
-           null == (XQ = wQ.points) || XQ.forEach(YW), Object.hasOwn(wQ, "x") && YW(wQ)
-         }))
-       }(QQ), eW(QQ))
+     function HM(MM, rM) {
+       (null == rM || rM > MM.length) && (rM = MM.length);
+       for (var iM = 0, OM = new Array(rM); iM < rM; iM++) OM[iM] = MM[iM];
+       return OM
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L1353-L1354` → after: `L113-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L113-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/122.js#L113-L117) · [Before (L1353-L1354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/122.js#L1353-L1354)

```diff
-     function eW(QQ) {
-       QQ.nodes().forEach((WQ => nW(QQ.node(WQ)))), QQ.edges().forEach((WQ => nW(QQ.edge(WQ))))
+     function hM(MM, rM) {
+       for (var iM = 0; iM < rM.length; iM++) {
+         var OM = rM[iM];
+         OM.enumerable = OM.enumerable || !1, OM.configurable = !0, "value" in OM && (OM.writable = !0), Object.defineProperty(MM, OM.key, OM)
+       }
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L1357-L1359` → after: `L120-L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L120-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/122.js#L120-L123) · [Before (L1357-L1359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/122.js#L1357-L1359)

```diff
-     function nW(QQ) {
-       let WQ = QQ.width;
-       QQ.width = QQ.height, QQ.height = WQ
+     function JM(MM, rM) {
+       return JM = Object.setPrototypeOf || function(MM, rM) {
+         return MM.__proto__ = rM, MM
+       }, JM(MM, rM)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L1363` → after: `L127-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L127-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/122.js#L127-L148) · [Before (L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/122.js#L1363)

```diff
-       QQ.y = -QQ.y
+       var rM = function() {
+         if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
+         if (Reflect.construct.sham) return !1;
+         if ("function" === typeof Proxy) return !0;
+         try {
+           return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
+         } catch (MM) {
+           return !1
+         }
+       }();
+       return function() {
+         var iM, SM = lM(MM);
+         if (rM) {
+           var jM = lM(this).constructor;
+           iM = Reflect.construct(SM, arguments, jM)
+         } else iM = SM.apply(this, arguments);
+ ... (6 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L1367-L1368` → after: `L152-L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L152-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/122.js#L152-L153) · [Before (L1367-L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/122.js#L1367-L1368)

```diff
-       let WQ = QQ.x;
-       QQ.x = QQ.y, QQ.y = WQ
+       if (void 0 === MM) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
+       return MM
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L1372-L1394` → after: `L157-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L157-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/122.js#L157-L159) · [Before (L1372-L1394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/122.js#L1372-L1394)

```diff
-       let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-         XQ = {},
-         wQ = QQ.nodes().filter((WQ => !QQ.children(WQ).length)),
-         qQ = wQ.map((WQ => QQ.node(WQ).rank)),
-         TQ = QW(NQ(Math.max, qQ) + 1).map((() => []));
-       return wQ.sort(((WQ, XQ) => QQ.node(WQ).rank - QQ.node(XQ).rank)).forEach((function wQ(qQ) {
-         if (XQ[qQ]) return;
-         XQ[qQ] = !0;
-         let zQ = QQ.node(qQ);
-         TQ[zQ.rank].push(qQ);
-         let sQ = QQ.successors(qQ);
-         sQ && [...sQ].sort(((XQ, wQ) => function(XQ, wQ) {
-           let qQ = QQ.node(XQ),
-             TQ = QQ.node(wQ);
-           return qW(WQ, qQ, TQ)
-         }(XQ, wQ))).forEach(wQ)
- ... (7 more removed lines; see GitHub link above)
+       return lM = Object.setPrototypeOf ? Object.getPrototypeOf : function(MM) {
+         return MM.__proto__ || Object.getPrototypeOf(MM)
+       }, lM(MM)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L1398-L1462` → after: `L163-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L163-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/122.js#L163-L168) · [Before (L1398-L1462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/122.js#L1398-L1462)

```diff
-       let wQ = function(QQ, WQ) {
-           return QQ.reduce(((QQ, XQ, wQ) => (QQ[XQ] = WQ[wQ], QQ)), {})
-         }(XQ, XQ.map(((QQ, WQ) => WQ))),
-         qQ = WQ.flatMap((WQ => {
-           let XQ = QQ.outEdges(WQ);
-           return XQ ? XQ.map((WQ => ({
-             pos: wQ[WQ.w],
-             weight: QQ.edge(WQ).weight
-           }))).sort(((QQ, WQ) => QQ.pos - WQ.pos)) : []
-         })),
-         TQ = 1;
-       for (; TQ < XQ.length;) TQ <<= 1;
-       let zQ = 2 * TQ - 1;
-       TQ -= 1;
-       let sQ = new Array(zQ).fill(0),
-         FQ = 0;
- ... (49 more removed lines; see GitHub link above)
+       return rM in MM ? Object.defineProperty(MM, rM, {
+         value: iM,
+         enumerable: !0,
+         configurable: !0,
+         writable: !0
+       }) : MM[rM] = iM, MM
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L1464-L1494` → after: `L170-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L170-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/122.js#L170-L182) · [Before (L1464-L1494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/122.js#L1464-L1494)

```diff
- 
-     function mW(QQ, WQ, XQ, wQ, qQ) {
-       let TQ = {},
-         zQ = null,
-         sQ = null,
-         FQ = qQ;
-       "boolean" == typeof WQ ? (FQ = WQ, TQ = {}) : WQ && (TQ = WQ, zQ = null != XQ ? XQ : null, sQ = null != wQ ? wQ : null);
-       let PQ = function(QQ, WQ) {
-           let XQ = {
-             lhs: [],
-             rhs: []
-           };
-           return QQ.forEach((QQ => {
-             WQ(QQ) ? XQ.lhs.push(QQ) : XQ.rhs.push(QQ)
-           })), XQ
-         }(QQ, (QQ => Object.hasOwn(QQ, "barycenter"))),
- ... (15 more removed lines; see GitHub link above)
+     var UM = {
+         orientation: {
+           horizontal: {
+             dimension: "width",
+             direction: "left",
+             reverseDirection: "right",
+             coordinate: "x"
+           },
+           vertical: {
+             dimension: "height",
+             direction: "top",
+             reverseDirection: "bottom",
+             coordinate: "y"
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L1498-L1541` → after: `L185-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L185-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/122.js#L185-L194) · [Before (L1498-L1541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/122.js#L1498-L1541)

```diff
-       }(sQ, zQ, !!FQ));
-       for (let [VQ, DQ] of Object.entries(TQ)) {
-         let QQ = gQ.findIndex((QQ => QQ.vs[0] === VQ));
-         gQ.splice(QQ + 1, 0, DQ)
-       }
-       BQ = MW(rQ, JQ, BQ), gQ.forEach((QQ => {
-         BQ += QQ.vs.length, rQ.push(QQ.vs), IQ += QQ.barycenter * QQ.weight, jQ += QQ.weight, BQ = MW(rQ, JQ, BQ)
-       }));
-       let yQ = {
-         vs: rQ.flat(1)
-       };
-       return jQ && (yQ.barycenter = IQ / jQ, yQ.weight = jQ), yQ
-     }
- 
-     function MW(QQ, WQ, XQ) {
-       let wQ;
- ... (28 more removed lines; see GitHub link above)
+       },
+       GM = function(MM) {
+         ! function(MM, rM) {
+           if ("function" !== typeof rM && null !== rM) throw new TypeError("Super expression must either be null or a function");
+           Object.defineProperty(MM, "prototype", {
+             value: Object.create(rM && rM.prototype, {
+               constructor: {
+                 value: MM,
+                 writable: !0,
+                 configurable: !0
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L1543-L1546` → after: `L196-L300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L196-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/122.js#L196-L300) · [Before (L1543-L1546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/122.js#L1543-L1546)

```diff
-             }), {
-               sum: 0,
-               weight: 0
-             });
+             }),
+             writable: !1
+           }), rM && JM(MM, rM)
+         }(aM, MM);
+         var rM, iM, OM, jM = dM(aM);
+ 
+         function aM(MM, rM) {
+           var iM;
+           return function(MM, rM) {
+             if (!(MM instanceof rM)) throw new TypeError("Cannot call a class as a function")
+           }(this, aM), EM(yM(iM = jM.call(this, MM, rM)), "handleFormat", (function(MM) {
+             var rM = iM.props.format;
+             return rM ? rM(MM) : MM
+           })), EM(yM(iM), "handleUpdate", (function() {
+             if (iM.slider) {
+               var MM = iM.props.orientation,
+ ... (89 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L1548-L1550` → after: `L302-L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L302-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/122.js#L302-L304) · [Before (L1548-L1550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/122.js#L1548-L1550)

```diff
-               v: WQ,
-               barycenter: wQ.sum / wQ.weight,
-               weight: wQ.weight
+               fill: "horizontal" === jM ? nM : OM - nM,
+               handle: nM,
+               label: nM
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L1553-L1583` → after: `L325-L372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L325-L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/122.js#L325-L372) · [Before (L1553-L1583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/122.js#L1553-L1583)

```diff
-         }))
-       }(QQ, DQ);
-       vQ.forEach((WQ => {
-         if (QQ.children(WQ.v).length) {
-           let {
-             result: wQ
-           } = QX(QQ, WQ.v, XQ, yQ, VQ);
-           bQ[WQ.v] = wQ, Object.hasOwn(wQ, "barycenter") && function(QQ, WQ) {
-             void 0 !== QQ.barycenter ? (QQ.barycenter = (QQ.barycenter * QQ.weight + WQ.barycenter * WQ.weight) / (QQ.weight + WQ.weight), QQ.weight += WQ.weight) : (QQ.barycenter = WQ.barycenter, QQ.weight = WQ.weight)
-           }(WQ, wQ)
-         }
-       }));
-       let dQ = KW(vQ, XQ);
-       ! function(QQ, WQ) {
-         QQ.forEach((QQ => {
-           QQ.vs = QQ.vs.flatMap((QQ => WQ[QQ] ? WQ[QQ].vs : QQ))
- ... (15 more removed lines; see GitHub link above)
+         }, {
+           key: "render",
+           value: function() {
+             var MM = this,
+               rM = this.props,
+               iM = rM.value,
+               OM = rM.orientation,
+               jM = rM.className,
+               aM = rM.tooltip,
+               PM = rM.reverse,
+               nM = rM.labels,
+               zM = rM.min,
+               LM = rM.max,
+               HM = rM.handleLabel,
+               hM = this.state.active,
+               JM = UM.orientation[OM].dimension,
+ ... (32 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L1585-L1634` → after: `L374-L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L374-L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/122.js#L374-L416) · [Before (L1585-L1634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/122.js#L1585-L1634)

```diff
-               HQ[XQ] = dQ[WQ], dQ.splice(WQ, 1), WQ--
-             } else aQ = !0
-           } let lQ = mW(dQ, HQ, yQ, QQ, VQ);
-       if (GQ && UQ) {
-         lQ.vs = [GQ, lQ.vs, UQ].flat(1);
-         let WQ = QQ.predecessors(GQ);
-         if (WQ && WQ.length) {
-           let XQ = QQ.node(WQ[0]),
-             wQ = QQ.predecessors(UQ),
-             qQ = QQ.node(wQ[0]);
-           Object.hasOwn(lQ, "barycenter") || (lQ.barycenter = 0, lQ.weight = 0), lQ.barycenter = (lQ.barycenter * lQ.weight + XQ.order + qQ.order) / (lQ.weight + 2), lQ.weight += 2
-         }
-       }
-       return Object.defineProperty(lQ, "result", {
-         value: lQ,
-         enumerable: !1,
- ... (34 more removed lines; see GitHub link above)
+             }
+             return (0, QM.jsxs)("div", {
+               ref: function(rM) {
+                 MM.slider = rM
+               },
+               className: (0, SM.default)("rangeslider", "rangeslider-".concat(OM), {
+                 "rangeslider-reverse": PM
+               }, jM),
+               onMouseDown: this.handleDrag,
+               onMouseUp: this.handleEnd,
+               onTouchStart: this.handleStart,
+               onTouchEnd: this.handleEnd,
+               "aria-valuemin": zM,
+               "aria-valuemax": LM,
+               "aria-valuenow": iM,
+               "aria-orientation": OM,
+ ... (27 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L1636-L1639` → after: `L418-L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L418-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/122.js#L418-L478) · [Before (L1636-L1639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/122.js#L1636-L1639)

```diff
-           })), Object.hasOwn(zQ, "minRank") && TQ.setNode(wQ, {
-             borderLeft: zQ.borderLeft[WQ],
-             borderRight: zQ.borderRight[WQ]
-           })
+           }
+         }]) && hM(rM.prototype, iM), OM && hM(rM, OM), Object.defineProperty(rM, "prototype", {
+           writable: !1
+         }), aM
+       }(jM.Component);
+     EM(GM, "propTypes", {
+       min: aM.default.number,
+       max: aM.default.number,
+       step: aM.default.number,
+       value: aM.default.number,
+       orientation: aM.default.string,
+       tooltip: aM.default.bool,
+       reverse: aM.default.bool,
+       labels: aM.default.object,
+       handleLabel: aM.default.string,
+       format: aM.default.func,
+ ... (45 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L1715-L1718` → after: `L482-L483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L482-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/122.js#L482-L483) · [Before (L1715-L1718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/122.js#L1715-L1718)

```diff
-     function sX(QQ, WQ, XQ) {
-       if (WQ > XQ) {
-         let QQ = WQ;
-         WQ = XQ, XQ = QQ
+       function rM() {
+         return MM
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L1720-L1722` → after: `L485-L523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L485-L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/122.js#L485-L523) · [Before (L1720-L1722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/122.js#L1720-L1722)

```diff
-       let wQ = QQ[WQ];
-       return void 0 !== wQ && Object.hasOwn(wQ, XQ)
-     }
+       MM.isRequired = MM;
+       var iM = {
+         array: MM,
+         bigint: MM,
+         bool: MM,
+         func: MM,
+         number: MM,
+         object: MM,
+         string: MM,
+         symbol: MM,
+         any: MM,
+         arrayOf: rM,
+         element: MM,
+         elementType: MM,
+         instanceOf: rM,
+         node: MM,
+ ... (23 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L1724-L1766` → after: `L525-L528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L525-L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/122.js#L525-L528) · [Before (L1724-L1766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/122.js#L1724-L1766)

```diff
-     function FX(QQ, WQ, XQ, wQ) {
-       let qQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
-         TQ = {},
-         zQ = function(QQ, WQ, XQ, wQ) {
-           let qQ = new SQ,
-             TQ = QQ.graph(),
-             zQ = function(QQ, WQ, XQ) {
-               return (wQ, qQ, TQ) => {
-                 let zQ, sQ = wQ.node(qQ),
-                   FQ = wQ.node(TQ),
-                   PQ = 0;
-                 if (PQ += sQ.width / 2, Object.hasOwn(sQ, "labelpos")) switch (sQ.labelpos.toLowerCase()) {
-                   case "l":
-                     zQ = -sQ.width / 2;
-                     break;
-                   case "r":
- ... (27 more removed lines; see GitHub link above)
+         function MM(MM, rM) {
+           var iM = -1;
+           return MM.some((function(MM, OM) {
+             return MM[0] === rM && (iM = OM, !0)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L1783-L1854` → after: `L531-L533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L531-L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/122.js#L531-L533) · [Before (L1783-L1854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/122.js#L1783-L1854)

```diff
-       }
-       return FQ((function(QQ) {
-         let WQ = zQ.inEdges(QQ);
-         TQ[QQ] = WQ ? WQ.reduce(((QQ, WQ) => {
-           var XQ;
-           let wQ = null != (XQ = TQ[WQ.v]) ? XQ : 0,
-             qQ = zQ.edge(WQ);
-           return Math.max(QQ, wQ + (void 0 !== qQ ? qQ : 0))
-         }), 0) : 0
-       }), (function(QQ) {
-         return zQ.predecessors(QQ) || []
-       })), FQ((function(WQ) {
-         let XQ = zQ.outEdges(WQ),
-           wQ = Number.POSITIVE_INFINITY;
-         XQ && (wQ = XQ.reduce(((QQ, WQ) => {
-           let XQ = TQ[WQ.w],
- ... (56 more removed lines; see GitHub link above)
+         return function() {
+           function rM() {
+             this.__entries__ = []
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L1856-L1959` → after: `L535-L560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L535-L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/122.js#L535-L560) · [Before (L1856-L1959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/122.js#L1856-L1959)

```diff
-           return WQ.length && WQ.reduce((function(WQ, XQ) {
-             let qQ = -1,
-               TQ = -1,
-               zQ = 0;
-             return XQ.forEach(((sQ, FQ) => {
-               if ("border" === QQ.node(sQ).dummy) {
-                 let WQ = QQ.predecessors(sQ);
-                 if (WQ && WQ.length) {
-                   let sQ = WQ[0];
-                   if (void 0 === sQ) return;
-                   TQ = QQ.node(sQ).order, wQ(XQ, zQ, FQ, qQ, TQ), zQ = FQ, qQ = TQ
-                 }
-               }
-               wQ(XQ, zQ, XQ.length, TQ, WQ.length)
-             })), XQ
-           })), XQ
- ... (88 more removed lines; see GitHub link above)
+           return Object.defineProperty(rM.prototype, "size", {
+             get: function() {
+               return this.__entries__.length
+             },
+             enumerable: !0,
+             configurable: !0
+           }), rM.prototype.get = function(rM) {
+             var iM = MM(this.__entries__, rM),
+               OM = this.__entries__[iM];
+             return OM && OM[1]
+           }, rM.prototype.set = function(rM, iM) {
+             var OM = MM(this.__entries__, rM);
+             ~OM ? this.__entries__[OM][1] = iM : this.__entries__.push([rM, iM])
+           }, rM.prototype.delete = function(rM) {
+             var iM = this.__entries__,
+               OM = MM(iM, rM);
+ ... (10 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L1961-L2016` → after: `L562-L579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L562-L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/122.js#L562-L579) · [Before (L1961-L2016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/122.js#L1961-L2016)

```diff
-             let zQ = Object.values(QQ).map((QQ => {
-               let WQ = QQ[wQ];
-               return void 0 !== WQ ? WQ : 0
-             })).sort(((QQ, WQ) => QQ - WQ));
-             return ((null != (qQ = zQ[1]) ? qQ : 0) + (null != (TQ = zQ[2]) ? TQ : 0)) / 2
-           })) : {}
-         }(TQ, QQ.graph().align)
-     }
- 
-     function gX(QQ, WQ, XQ) {
-       var wQ;
-       if (!XQ) return !1;
-       let qQ = null == (wQ = WQ.node(QQ)) ? void 0 : wQ.edgeObj;
-       if (!qQ || WQ.node(QQ).edgeLabel.reversed) return !1;
-       let TQ = XQ.indexOf(null == qQ ? void 0 : qQ.v),
-         zQ = XQ.indexOf(null == qQ ? void 0 : qQ.w);
- ... (40 more removed lines; see GitHub link above)
+           }, rM
+         }()
+       }(),
+       SM = "undefined" !== typeof window && "undefined" !== typeof document && window.document === document,
+       jM = "undefined" !== typeof iM.g && iM.g.Math === Math ? iM.g : "undefined" !== typeof self && self.Math === Math ? self : "undefined" !== typeof window && window.Math === Math ? window : Function("return this")(),
+       aM = "function" === typeof requestAnimationFrame ? requestAnimationFrame.bind(jM) : function(MM) {
+         return setTimeout((function() {
+           return MM(Date.now())
+         }), 1e3 / 60)
+       };
+     var PM = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
+       nM = "undefined" !== typeof MutationObserver,
+       QM = function() {
+         function MM() {
+           this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(MM, rM) {
+             var iM = !1,
+ ... (2 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L2018-L2212` → after: `L581-L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L581-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/122.js#L581-L582) · [Before (L2018-L2212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/122.js#L2018-L2212)

```diff
-     function BX(QQ, WQ, XQ) {
-       var wQ;
-       let qQ = QQ.nodes().filter((WQ => QQ.children(WQ).length)),
-         TQ = {};
-       qQ.forEach((wQ => {
-         let qQ = QQ.node(wQ);
-         if (qQ && qQ.rankdir) {
-           let zQ = new SQ({
-             multigraph: !0,
-             compound: !0
-           });
-           zQ.setGraph({
-             rankdir: qQ.rankdir
-           });
-           let sQ = QQ.children(wQ);
-           sQ.forEach((WQ => {
- ... (179 more removed lines; see GitHub link above)
+             function jM() {
+               iM && (iM = !1, MM()), OM && nM()
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L2219-L2402` → after: `L585-L586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L585-L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/122.js#L585-L586) · [Before (L2219-L2402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/122.js#L2219-L2402)

```diff
-     function yX(QQ, WQ, XQ) {
-       let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
-       var qQ, TQ;
-       let zQ = !1 !== (null == XQ ? void 0 : XQ.useDynamic),
-         sQ = zQ && null != (qQ = null == wQ ? void 0 : wQ.graph) ? qQ : null,
-         FQ = zQ && null != (TQ = null == wQ ? void 0 : wQ.rawNodes) ? TQ : null;
-       WQ("    makeSpaceForEdgeLabels", (() => function(QQ) {
-         let WQ = QQ.graph();
-         WQ.ranksep /= 2, QQ.edges().forEach((XQ => {
-           var wQ;
-           let qQ = QQ.edge(XQ);
-           qQ.minlen *= 2, "c" !== (null != (wQ = qQ.labelpos) ? wQ : "r").toLowerCase() && ("TB" === WQ.rankdir || "BT" === WQ.rankdir ? qQ.width += qQ.labeloffset : qQ.height += qQ.labeloffset)
-         }))
-       }(QQ))), WQ("    removeSelfEdges", (() => function(QQ) {
-         QQ.edges().forEach((WQ => {
-           if (WQ.v === WQ.w) {
- ... (168 more removed lines; see GitHub link above)
+             function PM() {
+               aM(jM)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L2450-L2455` → after: `L589-L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L589-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/122.js#L589-L642) · [Before (L2450-L2455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/122.js#L2450-L2455)

```diff
-         function FQ(QQ) {
-           let TQ = QQ.x,
-             zQ = QQ.y,
-             sQ = QQ.width,
-             FQ = QQ.height;
-           WQ = Math.min(WQ, TQ - sQ / 2), XQ = Math.max(XQ, TQ + sQ / 2), wQ = Math.min(wQ, zQ - FQ / 2), qQ = Math.max(qQ, zQ + FQ / 2)
+             function nM() {
+               var MM = Date.now();
+               if (iM) {
+                 if (MM - SM < 2) return;
+                 OM = !0
+               } else iM = !0, OM = !1, setTimeout(PM, rM);
+               SM = MM
+             }
+             return nM
+           }(this.refresh.bind(this), 20)
+         }
+         return MM.prototype.addObserver = function(MM) {
+           ~this.observers_.indexOf(MM) || this.observers_.push(MM), this.connected_ || this.connect_()
+         }, MM.prototype.removeObserver = function(MM) {
+           var rM = this.observers_,
+             iM = rM.indexOf(MM);
+ ... (38 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L2457-L2520` → after: `L644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/122.js#L644) · [Before (L2457-L2520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/122.js#L2457-L2520)

```diff
-         QQ.nodes().forEach((WQ => FQ(QQ.node(WQ)))), QQ.edges().forEach((WQ => {
-           let XQ = QQ.edge(WQ);
-           Object.hasOwn(XQ, "x") && FQ(XQ)
-         })), WQ -= zQ, wQ -= sQ, QQ.nodes().forEach((XQ => {
-           let qQ = QQ.node(XQ);
-           qQ.x -= WQ, qQ.y -= wQ
-         })), QQ.edges().forEach((XQ => {
-           let qQ = QQ.edge(XQ);
-           qQ.points.forEach((QQ => {
-             QQ.x -= WQ, QQ.y -= wQ
-           })), Object.hasOwn(qQ, "x") && (qQ.x -= WQ), Object.hasOwn(qQ, "y") && (qQ.y -= wQ)
-         })), TQ.width = XQ - WQ + zQ, TQ.height = qQ - wQ + sQ
-       }(QQ))), WQ("    assignNodeIntersects", (() => function(QQ) {
-         QQ.edges().forEach((WQ => {
-           if (WQ.v === WQ.w) return;
-           let XQ, wQ, qQ = QQ.edge(WQ),
- ... (48 more removed lines; see GitHub link above)
+         return MM
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L2522-L2529` → after: `L646-L647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L646-L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/122.js#L646-L647) · [Before (L2522-L2529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/122.js#L2522-L2529)

```diff
-       vX = ["minlen", "weight", "width", "height", "labeloffset"],
-       dX = {
-         minlen: 1,
-         weight: 1,
-         width: 0,
-         height: 0,
-         labeloffset: 10,
-         labelpos: "r"
+       LM = function(MM) {
+         return MM && MM.ownerDocument && MM.ownerDocument.defaultView || jM
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L2531` → after: `L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/122.js#L649) · [Before (L2531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/122.js#L2531)

```diff
-       HX = ["labelpos"];
+       mM = lM(0, 0, 0, 0);
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L2534-L2549` → after: `L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/122.js#L652) · [Before (L2534-L2549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/122.js#L2534-L2549)

```diff
-       let WQ = new SQ({
-           multigraph: !0,
-           compound: !0
-         }),
-         XQ = hX(QQ.graph());
-       return WQ.setGraph(Object.assign({}, pX, lX(XQ, DX), WW(XQ, GX))), QQ.nodes().forEach((XQ => {
-         let wQ = lX(hX(QQ.node(XQ)), UX);
-         Object.keys(bX).forEach((QQ => {
-           void 0 === wQ[QQ] && (wQ[QQ] = bX[QQ])
-         })), WQ.setNode(XQ, wQ);
-         let qQ = QQ.parent(XQ);
-         void 0 !== qQ && WQ.setParent(XQ, qQ)
-       })), QQ.edges().forEach((XQ => {
-         let wQ = hX(QQ.edge(XQ));
-         WQ.setEdge(XQ, Object.assign({}, dX, lX(wQ, vX), WW(wQ, HX)))
-       })), WQ
+       return parseFloat(MM) || 0
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L2552-L2553` → after: `L655-L659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L655-L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/122.js#L655-L659) · [Before (L2552-L2553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/122.js#L2552-L2553)

```diff
-     function lX(QQ, WQ) {
-       return XW(WW(QQ, WQ), Number)
+     function hM(MM) {
+       for (var rM = [], iM = 1; iM < arguments.length; iM++) rM[iM - 1] = arguments[iM];
+       return rM.reduce((function(rM, iM) {
+         return rM + HM(MM["border-" + iM + "-width"])
+       }), 0)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L2557-L2561` → after: `L663-L686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L663-L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/122.js#L663-L686) · [Before (L2557-L2561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/122.js#L2557-L2561)

```diff
-       let WQ = {};
-       return QQ && Object.entries(QQ).forEach((QQ => {
-         let [XQ, wQ] = QQ;
-         "string" == typeof XQ && (XQ = XQ.toLowerCase()), WQ[XQ] = wQ
-       })), WQ
+       var rM = MM.clientWidth,
+         iM = MM.clientHeight;
+       if (!rM && !iM) return mM;
+       var OM = LM(MM).getComputedStyle(MM),
+         SM = function(MM) {
+           for (var rM = {}, iM = 0, OM = ["top", "right", "bottom", "left"]; iM < OM.length; iM++) {
+             var SM = OM[iM],
+               jM = MM["padding-" + SM];
+             rM[SM] = HM(jM)
+           }
+           return rM
+         }(OM),
+         jM = SM.left + SM.right,
+         aM = SM.top + SM.bottom,
+         PM = HM(OM.width),
+         nM = HM(OM.height);
+ ... (8 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L2565-L2581` → after: `L695-L698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L695-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/122.js#L695-L698) · [Before (L2565-L2581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/122.js#L2565-L2581)

```diff
-       let WQ = nQ(QQ),
-         XQ = new SQ({
-           compound: !0,
-           multigraph: !0
-         }).setGraph({});
-       return QQ.nodes().forEach((WQ => {
-         XQ.setNode(WQ, {
-           label: WQ
-         }), XQ.setParent(WQ, "layer" + QQ.node(WQ).rank)
-       })), QQ.edges().forEach((QQ => XQ.setEdge(QQ.v, QQ.w, {}, QQ.name))), WQ.forEach(((QQ, WQ) => {
-         let wQ = "layer" + WQ;
-         XQ.setNode(wQ, {
-           rank: "same"
-         }), QQ.reduce(((QQ, WQ) => (XQ.setEdge(QQ, WQ, {
-           style: "invis"
-         }), WQ)))
- ... (1 more removed lines; see GitHub link above)
+       return SM ? dM(MM) ? function(MM) {
+         var rM = MM.getBBox();
+         return lM(0, 0, rM.width, rM.height)
+       }(MM) : JM(MM) : mM
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L2583-L2585` → after: `L700-L743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L700-L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/122.js#L700-L743) · [Before (L2583-L2585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/122.js#L2583-L2585)

```diff
-     var cX = {
-         time: OQ,
-         notime: KQ
+ 
+     function lM(MM, rM, iM, OM) {
+       return {
+         x: MM,
+         y: rM,
+         width: iM,
+         height: OM
+       }
+     }
+     var EM = function() {
+         function MM(MM) {
+           this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = lM(0, 0, 0, 0), this.target = MM
+         }
+         return MM.prototype.isActive = function() {
+           var MM = yM(this.target);
+           return this.contentRect_ = MM, MM.width !== this.broadcastWidth || MM.height !== this.broadcastHeight
+ ... (28 more added lines; see GitHub link above)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/122.js` (Changed code · before: `L2587-L2595` → after: `L745-L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994R745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-0bac5f638aeba80bd5f0f29f08685c1f8edc20a01792cd0b1fe8287960802994) · [After (L745-L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/122.js#L745-L796) · [Before (L2587-L2595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/122.js#L2587-L2595)

```diff
-       AX = {
-         graphlib: TQ,
-         version: TW,
-         layout: IX,
-         debug: iX,
-         util: {
-           time: OQ,
-           notime: KQ
-         }
+       GM = function() {
+         function MM(MM, rM, iM) {
+           if (this.activeObservations_ = [], this.observations_ = new OM, "function" !== typeof MM) throw new TypeError("The callback provided as parameter 1 is not a function.");
+           this.callback_ = MM, this.controller_ = rM, this.callbackCtx_ = iM
+         }
+         return MM.prototype.observe = function(MM) {
+           if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
+           if ("undefined" !== typeof Element && Element instanceof Object) {
+             if (!(MM instanceof LM(MM).Element)) throw new TypeError('parameter 1 is not of type "Element".');
+             var rM = this.observations_;
+             rM.has(MM) || (rM.set(MM, new EM(MM)), this.controller_.addObserver(this), this.controller_.refresh())
+           }
+         }, MM.prototype.unobserve = function(MM) {
+           if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
+           if ("undefined" !== typeof Element && Element instanceof Object) {
+             if (!(MM instanceof LM(MM).Element)) throw new TypeError('parameter 1 is not of type "Element".');
+ ... (36 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/123.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/123.js` (56 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/123.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/123.js#L2)

```diff
- export const ids = [123];
+ export const ids = [123, 706];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L4-L58` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/123.js#L4-L5) · [Before (L4-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/123.js#L4-L58)

```diff
-   36912: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       b: () => BQ,
-       d: () => bQ
-     });
-     XQ(34485);
-     var wQ = XQ(61),
-       qQ = XQ(1498),
-       TQ = XQ(2003),
-       zQ = XQ(2052),
-       sQ = XQ(26),
-       FQ = XQ(2535),
-       PQ = XQ(36920),
-       gQ = XQ(36926),
-       JQ = XQ(34469),
-       rQ = XQ(34480),
- ... (39 more removed lines; see GitHub link above)
+   5372: (MM, rM, iM) => {
+     var OM = iM(5376);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L60-L79` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/123.js#L7) · [Before (L60-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/123.js#L60-L79)

```diff
-     function yQ() {
-       return TQ.gameBridge.lookup("cameraZoom", null)
-     }
-     const VQ = [{
-         current: null
-       }, {
-         current: null
-       }, {
-         current: null
-       }, {
-         current: null
-       }],
-       DQ = {
-         current: null
-       },
-       pQ = {
- ... (4 more removed lines; see GitHub link above)
+     function SM() {}
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L81-L87` → after: `L9-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L9-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/123.js#L9-L16) · [Before (L81-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/123.js#L81-L87)

```diff
-     function bQ(QQ) {
-       UQ = QQ, VQ[0].current || DQ.current || pQ.current ? dQ(QQ) : GQ = QQ
-     }
- 
-     function vQ(QQ) {
-       return ((0, PQ.i)(QQ) - (0, PQ.i)(0)) * window.innerHeight / 100
-     }
+     function jM() {}
+     jM.resetWarningCache = SM, MM.exports = function() {
+       function MM(MM, rM, iM, SM, jM, aM) {
+         if (aM !== OM) {
+           var PM = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
+           throw PM.name = "Invariant Violation", PM
+         }
+       }
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L89-L93` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/123.js#L18-L19) · [Before (L89-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/123.js#L89-L93)

```diff
-     function dQ(QQ) {
-       var WQ;
-       if (null === (WQ = pQ.current) || void 0 === WQ || WQ.call(pQ, vQ(QQ)), VQ[0].current) {
-         const WQ = `${(0,PQ.i)(QQ)}vh`;
-         VQ[0].current.style.transform = `translateX(calc(0px - ${WQ}))`, VQ[1].current.style.transform = `translateX(calc(0px + ${WQ}))`, VQ[2].current.style.transform = `translateY(calc(0px - ${WQ}))`, VQ[3].current.style.transform = `translateY(calc(0px + ${WQ}))`
+       function rM() {
+         return MM
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L95` → after: `L21-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L21-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/123.js#L21-L45) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/123.js#L95)

```diff
-       DQ.current && (DQ.current.style.filter = `blur(${Math.round(QQ/10)}px)`)
+       MM.isRequired = MM;
+       var iM = {
+         array: MM,
+         bigint: MM,
+         bool: MM,
+         func: MM,
+         number: MM,
+         object: MM,
+         string: MM,
+         symbol: MM,
+         any: MM,
+         arrayOf: rM,
+         element: MM,
+         elementType: MM,
+         instanceOf: rM,
+         node: MM,
+ ... (9 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L98-L174` → after: `L66-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L66-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/123.js#L66-L89) · [Before (L98-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/123.js#L98-L174)

```diff
-     function HQ(QQ) {
-       let {
-         custom: WQ,
-         touch: XQ
-       } = QQ;
-       const TQ = (0, qQ.j)("aimingOverlay", "none"),
-         zQ = "1.2vh",
-         sQ = "0.3vh";
-       (0, wQ.useEffect)((() => {
-         GQ && dQ(GQ)
-       }), []);
-       const FQ = (0, wQ.useRef)(null !== WQ);
-       return (0, wQ.useLayoutEffect)((() => {
-         var QQ;
-         WQ ? null === (QQ = pQ.current) || void 0 === QQ || QQ.call(pQ, vQ(UQ)) : FQ.current && dQ(UQ);
-         FQ.current = null !== WQ
- ... (61 more removed lines; see GitHub link above)
+     function zM() {
+       const {
+         t: MM
+       } = (0, jM.A)(), rM = (0, OM.useNavigatePreserveSearch)();
+       return (0, PM.c)(), (0, QM.jsxs)("div", {
+         className: "ShaderPackPublishPage AnimFadeIn",
+         children: [(0, QM.jsx)("div", {
+           className: "ShaderPackPublishBack",
+           children: (0, QM.jsx)(SM.c, {
+             onClick: () => {
+               rM(nM.P)
+             },
+             children: MM("shaderPackListing:backToPacks")
+           })
+         }), (0, QM.jsx)("h1", {
+           className: "ShaderPackPublishTitle",
+ ... (8 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L179` → after: `L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/123.js#L94) · [Before (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/123.js#L179)

```diff
-   34480: (QQ, WQ, XQ) => {
+   7068: (MM, rM, iM) => {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L182` → after: `L97-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L97-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/123.js#L97-L99) · [Before (L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/123.js#L182)

```diff
-       f: () => jQ
+       e: () => HM,
+       h: () => LM,
+       l: () => hM
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L184-L188` → after: `L101-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L101-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/123.js#L101-L108) · [Before (L184-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/123.js#L184-L188)

```diff
-     XQ(34485);
-     var wQ = XQ(1081),
-       qQ = XQ.n(wQ),
-       TQ = XQ(61),
-       zQ = XQ(34471);
+     var OM = iM(44),
+       SM = iM(7054),
+       jM = iM(1573),
+       aM = iM(7051),
+       PM = iM(7077),
+       nM = iM(1142);
+     const QM = "shaderPackListingView",
+       zM = "shaderPackListingFilterOpen";
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L190-L269` → after: `L110-L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L110-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/123.js#L110-L113) · [Before (L190-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/123.js#L190-L269)

```diff
-     function sQ(QQ, WQ) {
-       return Math.max(1, Math.round(QQ * WQ))
-     }
- 
-     function FQ(QQ, WQ) {
-       const XQ = WQ * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
-         wQ = function(QQ, WQ) {
-           if (QQ.lines) return sQ(QQ.lineThickness, WQ) % 2;
-           if (QQ.dot) return sQ(QQ.dotSize, WQ) % 2;
-           return PQ(QQ, WQ) % 2
-         }(QQ, WQ),
-         qQ = gQ(QQ.lineThickness * XQ, wQ),
-         TQ = sQ(QQ.lineLength, XQ),
-         zQ = Math.round(QQ.gap * XQ),
-         FQ = QQ.outline > 0 ? sQ(QQ.outline, XQ) : 0,
-         rQ = [];
- ... (64 more removed lines; see GitHub link above)
+     function LM() {
+       var MM;
+       const [rM, iM] = (0, PM.e)(QM, SM.E[0]);
+       return [null !== (MM = SM.E.find((MM => MM === rM))) && void 0 !== MM ? MM : SM.E[0], iM]
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L272-L273` → after: `L116-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L116-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/123.js#L116-L119) · [Before (L272-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/123.js#L272-L273)

```diff
-     function PQ(QQ, WQ) {
-       return Math.round(QQ.circleRadius * WQ * 2 + sQ(QQ.circleThickness, WQ))
+     function mM() {
+       (0, OM.useEffect)((() => () => {
+         window.location.pathname.startsWith(aM.P) || (0, aM.h)()
+       }), [])
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L276-L277` → after: `L122-L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L122-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/123.js#L122-L123) · [Before (L276-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/123.js#L276-L277)

```diff
-     function gQ(QQ, WQ) {
-       return Math.max(2 - WQ, 2 * Math.round((QQ - WQ) / 2) + WQ)
+     function HM() {
+       return (0, PM.e)(zM, !1)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L280-L287` → after: `L126-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L126-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/123.js#L126-L159) · [Before (L280-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/123.js#L280-L287)

```diff
-     function JQ(QQ, WQ, XQ) {
-       const wQ = 2 * XQ >= WQ - 1;
-       return {
-         x: QQ,
-         y: QQ,
-         size: WQ,
-         border: Math.min(XQ, Math.floor(WQ / 2)),
-         filled: wQ
+     function hM() {
+       const {
+         userContext: MM,
+         isUserContextUpdating: rM
+       } = (0, nM.b)(), [iM, SM] = (0, OM.useState)(null), aM = (0, OM.useRef)(new Set);
+ 
+       function PM(MM, rM) {
+         SM((iM => {
+           const OM = new Set(iM);
+           return rM ? OM.add(MM) : OM.delete(MM), OM
+         }))
+       }
+       return (0, OM.useEffect)((() => {
+         if (rM) return;
+         let iM = !1;
+         return jM.c.getFavouriteShaderPacks(MM).then((MM => {
+ ... (18 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L290-L291` → after: `L162-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L162-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/123.js#L162-L195) · [Before (L290-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/123.js#L290-L291)

```diff
-     var rQ = XQ(1145);
-     const IQ = 1.4;
+   },
+   7051: (MM, rM, iM) => {
+     iM.d(rM, {
+       $: () => DM,
+       B: () => zM,
+       F: () => RM,
+       I: () => JM,
+       K: () => fM,
+       N: () => ZM,
+       P: () => aM,
+       S: () => oM,
+       W: () => nM,
+       Y: () => PM,
+       c: () => lM,
+       d: () => wM,
+       db: () => kM,
+ ... (18 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L293-L294` → after: `L197-L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L197-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/123.js#L197-L198) · [Before (L293-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/123.js#L293-L294)

```diff
-     function jQ(QQ, WQ) {
-       return QQ && WQ ? `scale(${IQ})` : "scale(1)"
+     function nM(MM) {
+       return `${aM}/${encodeURIComponent(MM)}`
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L298-L302` → after: `L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/123.js#L203) · [Before (L298-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/123.js#L298-L302)

```diff
-       return "classic" === QQ.settings.style ? (0, rQ.jsx)(DQ, {
-         ...QQ
-       }) : (0, rQ.jsx)(HQ, {
-         ...QQ
-       })
+       QM = MM
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L306-L316` → after: `L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/123.js#L206) · [Before (L306-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/123.js#L306-L316)

```diff
-     function VQ(QQ, WQ) {
-       const XQ = {};
-       if (QQ.color !== zQ.h.color && (XQ.color = (0, zQ.l)(QQ.color)), QQ.opacity !== zQ.h.opacity && (XQ.opacity = QQ.opacity / 100), QQ.outline !== zQ.h.outline || QQ.outlineColor !== zQ.h.outlineColor) {
-         const WQ = QQ.outline,
-           wQ = (0, zQ.l)(QQ.outlineColor);
-         XQ.textShadow = WQ > 0 ? `-${WQ}px 0 ${wQ}, 0 ${WQ}px ${wQ}, ${WQ}px 0 ${wQ}, 0 -${WQ}px ${wQ}` : "none"
-       }
-       if (QQ.size !== zQ.h.size) {
-         const wQ = QQ.size / 100;
-         XQ.fontSize = WQ ? `calc(max(1.3rem, 18px) * ${wQ})` : `calc(1.3rem * ${wQ})`, XQ.marginTop = `-${yQ}em`, XQ.transformOrigin = `50% calc(50% + ${yQ}em)`
-       }
+     function LM() {
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L321-L341` → after: `L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/123.js#L215) · [Before (L321-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/123.js#L321-L341)

```diff
-       let {
-         settings: WQ,
-         touch: XQ,
-         inPreview: wQ,
-         inEditor: TQ,
-         pressed: zQ = !1,
-         pressRef: sQ
-       } = QQ;
-       return (0, rQ.jsx)("div", {
-         className: qQ()("Crosshair", {
-           Touch: XQ,
-           CrosshairInPreview: wQ,
-           CrosshairInEditor: TQ || wQ
-         }),
-         ref: sQ,
-         style: {
- ... (5 more removed lines; see GitHub link above)
+       return MM.playerHasRank("developer") || MM.playerHasRank("admin")
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L345` → after: `L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/123.js#L227) · [Before (L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/123.js#L345)

```diff
-       return QQ / WQ + "px"
+       return MM.withFeatures.includes(rM) ? "with" : MM.withoutFeatures.includes(rM) ? "without" : null
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L348-L354` → after: `L230-L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L230-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/123.js#L230-L231) · [Before (L348-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/123.js#L348-L354)

```diff
-     function GQ(QQ, WQ, XQ, wQ) {
-       return {
-         ...vQ(QQ, WQ, XQ),
-         width: pQ(QQ.w, XQ),
-         height: pQ(QQ.h, XQ),
-         background: wQ
-       }
+     function yM(MM) {
+       return null === MM ? "with" : "with" === MM ? "without" : null
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L357-L366` → after: `L234-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L234-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/123.js#L234-L235) · [Before (L357-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/123.js#L357-L366)

```diff
-     function UQ(QQ, WQ, XQ) {
-       return {
-         left: pQ(QQ.x, WQ),
-         top: pQ(QQ.y, WQ),
-         width: pQ(QQ.size, WQ),
-         height: pQ(QQ.size, WQ),
-         borderWidth: pQ(QQ.border, WQ),
-         borderColor: XQ,
-         background: QQ.filled ? XQ : void 0
-       }
+     function lM(MM) {
+       return "with" === MM ? "only" : null === MM ? "include" : void 0
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L375-L376` → after: `L238-L240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L238-L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/123.js#L238-L240) · [Before (L375-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/123.js#L375-L376)

```diff
-     function vQ(QQ, WQ, XQ) {
-       const [wQ, qQ] = QQ.arm ? bQ[QQ.arm] : [0, 0], TQ = Math.round(WQ * XQ);
+     function EM(MM, rM) {
+       const iM = dM(MM, rM),
+         OM = MM => MM.filter((MM => MM !== rM));
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L378-L379` → after: `L242-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L242-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/123.js#L242-L243) · [Before (L378-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/123.js#L378-L379)

```diff
-         left: pQ(QQ.x + wQ * TQ, XQ),
-         top: pQ(QQ.y + qQ * TQ, XQ)
+         withFeatures: null === iM ? [...MM.withFeatures, rM] : OM(MM.withFeatures),
+         withoutFeatures: "with" === iM ? [...MM.withoutFeatures, rM] : OM(MM.withoutFeatures)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L384-L388` → after: `L255-L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L255-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/123.js#L255-L267) · [Before (L384-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/123.js#L384-L388)

```diff
-       return QQ.arm ? {
-         "data-arm": QQ.arm,
-         "data-x": QQ.x,
-         "data-y": QQ.y
-       } : {}
+       var rM, iM, SM;
+       const aM = MM.get(UM),
+         PM = (null !== (rM = MM.get(CM)) && void 0 !== rM ? rM : tM).split(","),
+         nM = MM.get(bM);
+       return {
+         section: "favourites" === aM || "mine" === aM ? aM : "explore",
+         sort: null !== (iM = OM.y.find((rM => rM === MM.get(GM)))) && void 0 !== iM ? iM : wM,
+         withFeatures: hM.filter((MM => PM.includes(MM) && !PM.includes(`-${MM}`))),
+         withoutFeatures: hM.filter((MM => PM.includes(`-${MM}`))),
+         searchQuery: (null === (SM = MM.get(eM)) || void 0 === SM ? void 0 : SM.slice(0, OM.M)) || null,
+         pageNumber: (0, jM.d)(MM.get(jM.c)),
+         banned: "only" === nM ? "with" : "include" === nM ? null : "without"
+       }
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L391-L501` → after: `L270-L273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L270-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/123.js#L270-L273) · [Before (L391-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/123.js#L391-L501)

```diff
-     function HQ(QQ) {
-       let {
-         settings: WQ,
-         inPreview: XQ,
-         inEditor: wQ,
-         pressed: sQ = !1,
-         spread: PQ,
-         spreadRef: gQ
-       } = QQ;
-       const JQ = (0, TQ.useRef)(null),
-         {
-           box: jQ,
-           dpr: BQ
-         } = function(QQ) {
-           const [WQ, XQ] = (0, TQ.useState)({
-             box: {
- ... (95 more removed lines; see GitHub link above)
+     function uM(MM, rM) {
+       var iM;
+       const OM = sM(rM);
+       (0, jM.f)(MM, UM, "explore" === rM.section ? null : rM.section), (0, jM.f)(MM, GM, rM.sort === wM ? null : rM.sort), (0, jM.f)(MM, CM, OM === tM ? null : OM), (0, jM.f)(MM, eM, rM.searchQuery), (0, jM.f)(MM, bM, null !== (iM = lM(rM.banned)) && void 0 !== iM ? iM : null), ( … [truncated]
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L520-L537` → after: `L277-L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L277-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/123.js#L277-L286) · [Before (L520-L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/123.js#L520-L537)

```diff
-       let WQ = 90;
-       for (const XQ of QQ) WQ = 31 * WQ + XQ & 255;
-       return WQ
-     }
-     const rQ = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
-       IQ = BigInt(rQ.length);
- 
-     function jQ(QQ, WQ) {
-       let XQ = 0n;
-       for (const qQ of QQ) {
-         const QQ = rQ.indexOf(qQ);
-         if (QQ < 0) return null;
-         XQ = XQ * IQ + BigInt(QQ)
-       }
-       if (XQ >> BigInt(8 * WQ) !== 0n) return null;
-       const wQ = [];
- ... (2 more removed lines; see GitHub link above)
+       const rM = new URLSearchParams;
+       return uM(rM, {
+         section: "explore",
+         sort: wM,
+         withFeatures: "strict" === MM ? [MM] : [MM, "strict"],
+         withoutFeatures: [],
+         searchQuery: null,
+         pageNumber: 1,
+         banned: "without"
+       }), `${aM}?${rM.toString()}`
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L541-L563` → after: `L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/123.js#L290) · [Before (L541-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/123.js#L541-L563)

```diff
-       let WQ = "shapes" === QQ.style ? 1 : 0;
-       TQ.forEach(((XQ, wQ) => {
-         QQ[XQ] && (WQ |= 1 << wQ + 1)
-       }));
-       const XQ = [WQ];
-       for (const qQ of sQ) {
-         const WQ = (0, wQ.i)(qQ, QQ[qQ]);
-         XQ.push(WQ >> 16 & 255, WQ >> 8 & 255, 255 & WQ)
-       }
-       for (const qQ of zQ) {
-         const {
-           min: WQ,
-           step: TQ
-         } = wQ.e[qQ];
-         XQ.push(Math.round(((0, wQ.i)(qQ, QQ[qQ]) - WQ) / TQ))
-       }
- ... (7 more removed lines; see GitHub link above)
+       return sM(MM) === tM
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L567-L571` → after: `L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/123.js#L294) · [Before (L567-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/123.js#L567-L571)

```diff
-       for (const WQ of QQ.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${PQ}})`, "gi"))) {
-         const QQ = VQ(jQ(WQ[1], FQ));
-         if (QQ) return QQ
-       }
-       return null
+       return null !== MM.searchQuery || "with" === MM.banned || sM(MM) !== tM
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L575-L593` → after: `L298-L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L298-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/123.js#L298-L301) · [Before (L575-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/123.js#L575-L593)

```diff
-       if (!QQ || QQ.length !== FQ || JQ(QQ.slice(0, -1)) !== QQ[QQ.length - 1]) return null;
-       const WQ = QQ[0],
-         XQ = {
-           ...wQ.h,
-           style: 1 & WQ ? "shapes" : "classic"
-         };
-       TQ.forEach(((QQ, wQ) => {
-         XQ[QQ] = 0 !== (WQ & 1 << wQ + 1)
-       }));
-       let qQ = 1;
-       for (const wQ of sQ) XQ[wQ] = QQ[qQ] << 16 | QQ[qQ + 1] << 8 | QQ[qQ + 2], qQ += 3;
-       for (const TQ of zQ) {
-         const {
-           min: WQ,
-           step: zQ
-         } = wQ.e[TQ];
- ... (3 more removed lines; see GitHub link above)
+       return hM.flatMap((rM => {
+         const iM = dM(MM, rM);
+         return "with" === iM ? [rM] : "without" === iM ? [`-${rM}`] : []
+       })).join(",")
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L608-L662` → after: `L304-L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L304-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/123.js#L304-L306) · [Before (L608-L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/123.js#L608-L662)

```diff
-         opacity: {
-           min: 5,
-           max: 100,
-           step: 1
-         },
-         outline: {
-           min: 0,
-           max: 4,
-           step: .1
-         },
-         size: {
-           min: 25,
-           max: 400,
-           step: 5
-         },
-         lineLength: {
- ... (39 more removed lines; see GitHub link above)
+         popular: "shaderPackListing:sortPopular",
+         updated: "shaderPackListing:sortUpdated",
+         newest: "shaderPackListing:sortNewest"
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L664-L683` → after: `L308-L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L308-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/123.js#L308-L314) · [Before (L664-L683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/123.js#L664-L683)

```diff
-       qQ = Object.freeze({
-         style: "classic",
-         color: 16777215,
-         opacity: 100,
-         outline: 1.2,
-         outlineColor: 0,
-         growOnClick: !0,
-         size: 100,
-         lines: !0,
-         lineLength: 6,
-         lineThickness: 2,
-         gap: 3,
-         tStyle: !1,
-         dot: !1,
-         dotSize: 2,
-         circle: !1,
- ... (4 more removed lines; see GitHub link above)
+       kM = {
+         forest: "shaderPackListing:viewForest",
+         desert: "shaderPackListing:viewDesert",
+         water: "shaderPackListing:viewWater",
+         night: "shaderPackListing:viewNight",
+         cave: "shaderPackListing:viewCave"
+       };
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L685-L695` → after: `L316-L317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L316-L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/123.js#L316-L317) · [Before (L685-L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/123.js#L685-L695)

```diff
-     function TQ(QQ, WQ) {
-       var XQ;
-       const {
-         min: TQ,
-         max: zQ,
-         step: sQ
-       } = wQ[QQ];
-       if (!Number.isFinite(WQ)) return qQ[QQ];
-       const FQ = (null !== (XQ = String(sQ).split(".")[1]) && void 0 !== XQ ? XQ : "").length,
-         PQ = Number((Math.round(WQ / sQ) * sQ).toFixed(FQ));
-       return Math.min(zQ, Math.max(TQ, PQ))
+     function ZM(MM) {
+       return Math.round(100 * Math.max(0, 1 - 1 / MM))
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L698-L702` → after: `L320-L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L320-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/123.js#L320-L349) · [Before (L698-L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/123.js#L698-L702)

```diff
-     function zQ(QQ, WQ, XQ) {
-       const wQ = "number" === typeof XQ ? TQ(WQ, XQ) : XQ;
-       return {
-         ...QQ,
-         [WQ]: wQ
+     function oM(MM, rM, iM, SM) {
+       const jM = [];
+       MM.isBanned && jM.push({
+         tone: "warning",
+         text: SM("shaderPackListing:ownerBanned"),
+         detail: null
+       });
+       const {
+         pending: aM
+       } = MM;
+       if (null === MM.brokenError || aM && !aM.error || jM.push({
+           tone: "warning",
+           text: SM("shaderPackListing:ownerBroken"),
+           detail: MM.brokenError
+         }), null !== aM && void 0 !== aM && aM.error) jM.push({
+         tone: "warning",
+ ... (14 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L704-L708` → after: `L351-L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L351-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/123.js#L351-L355) · [Before (L704-L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/123.js#L704-L708)

```diff
-     }
- 
-     function sQ(QQ, WQ) {
-       let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
-       return Object.keys(qQ).every((wQ => XQ.includes(wQ) || QQ[wQ] === WQ[wQ]))
+       return MM.listed || jM.push({
+         tone: "info",
+         text: SM("shaderPackListing:ownerUnlisted"),
+         detail: null
+       }), jM
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L712` → after: `L359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/123.js#L359) · [Before (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/123.js#L712)

```diff
-       return sQ(QQ, qQ)
+       return Math.max(1, Math.round(MM / 1024))
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L715-L721` → after: `L362-L363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L362-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/123.js#L362-L363) · [Before (L715-L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/123.js#L715-L721)

```diff
-     function PQ(QQ) {
-       return `#${QQ.toString(16).padStart(6,"0")}`
-     }
- 
-     function gQ(QQ) {
-       const WQ = /^#?([0-9a-f]{6})$/i.exec(QQ.trim());
-       return WQ ? parseInt(WQ[1], 16) : null
+     function YM(MM, rM, iM) {
+       return MM instanceof SM.e && MM.errorMessageForUser ? MM.errorMessageForUser : rM(iM)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L724` → after: `L366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/123.js#L366) · [Before (L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/123.js#L724)

```diff
-   34491: (QQ, WQ, XQ) => {
+   7077: (MM, rM, iM) => {
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L729-L735` → after: `L370-L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L370-L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/123.js#L370-L371) · [Before (L729-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/123.js#L729-L735)

```diff
-     var wQ = XQ(61),
-       qQ = XQ(43),
-       TQ = XQ(34488),
-       zQ = XQ(34471);
-     const sQ = "crosshairCode";
-     let FQ = null;
-     const PQ = new Set;
+     var OM = iM(44),
+       SM = iM(30);
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L737-L761` → after: `L373-L378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L373-L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/123.js#L373-L378) · [Before (L737-L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/123.js#L737-L761)

```diff
-     function gQ() {
-       if (null === FQ) {
-         var QQ;
-         const WQ = qQ.i.getItem(sQ);
-         FQ = null !== (QQ = "string" === typeof WQ ? (0, TQ.h)(WQ) : null) && void 0 !== QQ ? QQ : zQ.h
-       }
-       return FQ
-     }
- 
-     function JQ(QQ) {
-       FQ = QQ, (0, zQ.o)(QQ) ? qQ.i.removeItem(sQ) : qQ.i.setItem(sQ, (0, TQ.j)(QQ));
-       for (const WQ of PQ) WQ()
-     }
- 
-     function rQ() {
-       const [QQ, WQ] = (0, wQ.useState)(gQ);
- ... (9 more removed lines; see GitHub link above)
+     function jM(MM, rM) {
+       var iM;
+       const [jM, aM] = (0, OM.useState)(null !== (iM = SM.g.getItem(MM)) && void 0 !== iM ? iM : rM);
+       return [jM, rM => {
+         SM.g.setItem(MM, rM), aM(rM)
+       }]
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L764` → after: `L381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/123.js#L381) · [Before (L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/123.js#L764)

```diff
-   37060: (QQ, WQ, XQ) => {
+   7148: (MM, rM, iM) => {
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L767-L768` → after: `L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/123.js#L384) · [Before (L767-L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/123.js#L767-L768)

```diff
-       d: () => FQ,
-       g: () => zQ
+       d: () => jM
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L770-L783` → after: `L386-L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L386-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/123.js#L386-L391) · [Before (L770-L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/123.js#L770-L783)

```diff
-     var wQ = XQ(663),
-       qQ = XQ(2997);
- 
-     function TQ(QQ) {
-       return QQ === (0, qQ.f)().mQQ ? (0, qQ.f)().RC : QQ
-     }
- 
-     function zQ(QQ) {
-       return !(0, wQ.G)(QQ) && TQ(QQ) === (0, qQ.f)().RC
-     }
-     const sQ = "gravity";
- 
-     function FQ() {
-       return (0, qQ.f)().physics[sQ][1]
+     var OM = iM(30);
+     const SM = "shaderPack";
+     async function jM() {
+       var MM;
+       let rM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+       return null !== (MM = await OM.f.getItem(SM, rM)) && void 0 !== MM ? MM : null
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L786` → after: `L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/123.js#L394) · [Before (L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/123.js#L786)

```diff
-   37047: (QQ, WQ, XQ) => {
+   7054: (MM, rM, iM) => {
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L788` → after: `L396-L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L396-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/123.js#L396-L413) · [Before (L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/123.js#L788)

```diff
-       b: () => vQ
+       D: () => aM,
+       E: () => OM,
+       I: () => mM,
+       M: () => zM,
+       Q: () => UM,
+       U: () => LM,
+       V: () => QM,
+       b: () => hM,
+       e: () => dM,
+       g: () => JM,
+       k: () => HM,
+       m: () => EM,
+       q: () => CM,
+       t: () => nM,
+       v: () => SM,
+       w: () => GM,
+ ... (2 more added lines; see GitHub link above)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L790-L807` → after: `L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/123.js#L415) · [Before (L790-L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/123.js#L790-L807)

```diff
-     var wQ = XQ(37049),
-       qQ = XQ(231),
-       TQ = XQ(5212),
-       zQ = XQ(37052),
-       sQ = XQ(36750),
-       FQ = XQ(37098),
-       PQ = XQ(37060),
-       gQ = XQ(416),
-       JQ = XQ.n(gQ),
-       rQ = XQ(1238),
-       IQ = XQ(2997),
-       jQ = XQ(37091),
-       BQ = XQ(31),
-       yQ = XQ(26),
-       VQ = XQ(37067),
-       DQ = XQ(37074),
- ... (2 more removed lines; see GitHub link above)
+     const OM = ["forest", "desert", "water", "night", "cave"];
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L809-L995` → after: `L417-L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L417-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/123.js#L417-L427) · [Before (L809-L995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/123.js#L809-L995)

```diff
-       stop: () => UQ,
-       fade: () => UQ,
-       rate: () => UQ,
-       stopsAtOnce: () => !1,
-       isAlive: () => !1,
-       getDurationMs: () => 0,
-       getVolume: () => 0,
-       getRelativeVolume: () => 0,
-       setRelativeVolume: () => UQ,
-       setPannerAttr: () => UQ,
-       setPosition: () => UQ
-     };
-     class bQ {
-       constructor(QQ) {
-         let WQ, {
-           src: XQ,
- ... (171 more removed lines; see GitHub link above)
+         full: {
+           width: 3840,
+           height: 2160
+         },
+         large: {
+           width: 1920,
+           height: 1080
+         },
+         thumb: {
+           width: 640,
+           height: 360
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L997-L1018` → after: `L429-L434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L429-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/123.js#L429-L434) · [Before (L997-L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/123.js#L997-L1018)

```diff
-         return vQ = yQ.play(QQ, gQ), vQ.setRelativeVolume(WQ), vQ.setPannerAttr({
-           refDistance: FQ
-         }), vQ.setPosition([pQ[0], pQ[1] + qQ.h.xy * qQ.h.playerEyeToHeightRatio, pQ[2]]), vQ
-       }
-       preload(QQ) {
-         this.loadSheet(this.stereoSheets, (0, wQ.l)(QQ))
-       }
-       loadSheet(QQ, WQ) {
-         let XQ = QQ[WQ];
-         return XQ || ((0, pQ.e)(WQ), XQ = new bQ({
-           src: WQ,
-           isSoundSprite: !0,
-           volumeScalar: 1
-         }), XQ.setGlobalVolume(yQ.b.get("soundVolume")), QQ[WQ] = XQ), XQ
-       }
-       freeSheetsAfterGame() {
- ... (6 more removed lines; see GitHub link above)
+       },
+       jM = ["popular", "updated", "newest"],
+       aM = 3,
+       PM = 32,
+       nM = 300;
+ 
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L1020-L1021` → after: `L436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/123.js#L436) · [Before (L1020-L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/123.js#L1020-L1021)

```diff
-       var XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ;
-       return QQ.name === WQ.name && ((null === (XQ = QQ.attributes) || void 0 === XQ || null === (wQ = XQ.customAttributes) || void 0 === wQ ? void 0 : wQ.stackKey) === (null === (qQ = WQ.attributes) || void 0 === qQ || null === (TQ = qQ.customAttributes) || void 0 === TQ ? void  … [truncated]
+       return MM.slice(0, rM).replace(/[\uD800-\uDBFF]$/, "")
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L1023-L1027` → after: `L438-L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L438-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/123.js#L438-L441) · [Before (L1023-L1027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/123.js#L1023-L1027)

```diff
-     XQ.d(WQ, {
-       d: () => wQ
-     })
-   },
-   37217: (QQ, WQ, XQ) => {
+     const zM = 64,
+       LM = 512,
+       mM = 18e5;
+ 
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L1029` → after: `L443-L445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L443-L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/123.js#L443-L445) · [Before (L1029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/123.js#L1029)

```diff
-       return QQ.includes("Leaf Bed")
+       const rM = MM,
+         iM = null === rM || void 0 === rM ? void 0 : rM.files;
+       return "number" === typeof(null === rM || void 0 === rM ? void 0 : rM.apiVersion) && "string" === typeof rM.name && (null === rM.author || "string" === typeof rM.author) && (void 0 === rM.keepCircleShadows || "boolean" === typeof rM.keepCircleShadows) && "object" === typeof … [truncated]
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L1033` → after: `L451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/123.js#L451) · [Before (L1033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/123.js#L1033)

```diff
-       return / Bed(?: Head)?(?:\||$)/.test(QQ) && !wQ(QQ)
+       return `https://bloxdhub.com/workshop/${encodeURIComponent(MM)}`
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L1037` → after: `L457-L458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L457-L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/123.js#L457-L458) · [Before (L1037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/123.js#L1037)

```diff
-       return QQ.includes(" Strongbed")
+       var rM;
+       return MM === yM || null !== (rM = null === MM || void 0 === MM ? void 0 : MM.startsWith(lM)) && void 0 !== rM && rM
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L1040-L1041` → after: `L461-L462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L461-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/123.js#L461-L462) · [Before (L1040-L1041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/123.js#L1040-L1041)

```diff
-     function zQ(QQ) {
-       return wQ(QQ) || qQ(QQ) || TQ(QQ)
+     function UM(MM, rM) {
+       return `shaderPacks/${MM}/${rM}.json`
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L1043-L1067` → after: `L464-L466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L464-L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/123.js#L464-L466) · [Before (L1043-L1067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/123.js#L1043-L1067)

```diff
-     XQ.d(WQ, {
-       e: () => zQ,
-       f: () => wQ,
-       h: () => TQ,
-       l: () => qQ
-     })
-   },
-   37212: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       e: () => PQ
-     });
-     var wQ = XQ(37217),
-       qQ = XQ(9580);
-     const TQ = [],
-       zQ = [],
-       sQ = [],
- ... (9 more removed lines; see GitHub link above)
+ 
+     function GM(MM, rM, iM, OM) {
+       return null === rM.renderId ? CM(MM, rM.baselineVersion, iM, OM) : `${MM}/${function(MM,rM,iM,OM){return`shaderPacks/${MM}/${rM}/${iM}-${OM}.webp`}(rM.packId,rM.renderId,iM,OM)}`
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/123.js` (Changed code · before: `L1069-L1103` → after: `L468-L472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5cR468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e91d65436c2f65debf445fbd8cd01df8553b6462982deafdb254962b0d23de5c) · [After (L468-L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/123.js#L468-L472) · [Before (L1069-L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/123.js#L1069-L1103)

```diff
-   },
-   6873: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       c: () => zQ,
-       g: () => qQ,
-       j: () => FQ,
-       n: () => TQ,
-       q: () => PQ,
-       s: () => wQ,
-       u: () => sQ
-     });
-     let wQ = function(QQ) {
-         return QQ[QQ.DEFAULT = 0] = "DEFAULT", QQ[QQ.BOAT = 1] = "BOAT", QQ[QQ.GLIDER = 2] = "GLIDER", QQ[QQ.BALLOON = 3] = "BALLOON", QQ[QQ.SLEEPING = 4] = "SLEEPING", QQ[QQ.RIDING_MOB = 5] = "RIDING_MOB", QQ[QQ.CAR = 6] = "CAR", QQ[QQ.HOVERCRAFT = 7] = "HOVERCRAFT", QQ
-       }({}),
-       qQ = function(QQ) {
-         return QQ[QQ.WOOD = 0] = "WOOD", QQ[QQ.OBSIDIAN = 1] = "OBSIDIAN", QQ[QQ.SPEED = 2] = "SPEED", QQ
- ... (19 more removed lines; see GitHub link above)
+ 
+     function CM(MM, rM, iM, OM) {
+       return `${MM}/${function(MM,rM,iM){return`shaderPacks/baseline/${MM}/${rM}-${iM}.webp`}(rM,iM,OM)}`
+     }
+   }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/124.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/124.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851)

#### 1. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L4` → after: `L4-L631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L4-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/124.js#L4-L631) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/124.js#L4)

```diff
-   6880: (QQ, WQ, XQ) => {
+   9502: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       default: () => Gr
+     });
+     var OM = iM(1608),
+       SM = iM(19),
+       jM = iM(5035),
+       aM = iM(44),
+       PM = iM(1516);
+     var nM = iM(2039),
+       QM = iM(1591),
+       zM = iM(1429),
+       LM = iM(1188),
+       mM = iM(143),
+       HM = iM(181),
+       hM = iM(1073),
+ ... (612 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L6` → after: `L633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/124.js#L633) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/124.js#L6)

```diff
-       b: () => wQ
+       d: () => SM
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/124.js` (Changed code · before: `L9-L166` → after: `L799-L802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851R799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-74918bc08f94a5e52c17ff4cfce213b6e2ac95323f494d0403b2a026ea1f5851) · [After (L799-L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/124.js#L799-L802) · [Before (L9-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/124.js#L9-L166)

```diff
-       canChange: !0,
-       blockReach: 6,
-       ezBridging: !0,
-       ezBridgingGrowMs: null,
-       ezTowering: !0,
-       ezToweringGrowMs: null,
-       speedMultiplier: 1,
-       crouchingSpeed: 2,
-       walkingSpeed: 4,
-       runningSpeed: 7,
-       jumpAmount: 8,
-       airJumpCount: 0,
-       jumpHoldThrust: null,
-       bunnyhopMaxMultiplier: 1.3,
-       music: null,
-       musicVolumeLevel: .6,
- ... (142 more removed lines; see GitHub link above)
+       private: "customLobby:cantJoinPrivate",
+       notWhitelisted: "customLobby:cantJoinNotWhitelisted",
+       banned: "customLobby:cantJoinBanned",
+       adminLocked: "customLobby:cantJoinAdminLocked"
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/125.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/125.js` (55 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/125.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/125.js#L2)

```diff
- export const ids = [125, 405];
+ export const ids = [125];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L4-L6` → after: `L4-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/125.js#L4-L9) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/125.js#L4-L6)

```diff
-   36625: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       default: () => CW
+   5401: (MM, rM, iM) => {
+     iM.d(rM, {
+       c: () => hM,
+       f: () => UM,
+       h: () => JM,
+       j: () => EM
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L8-L18` → after: `L11-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L11-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/125.js#L11-L16) · [Before (L8-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/125.js#L8-L18)

```diff
-     var wQ = XQ(382),
-       qQ = XQ(3751),
-       TQ = XQ(3793),
-       zQ = XQ(3785),
-       sQ = XQ(3776),
-       FQ = XQ(1226),
-       PQ = XQ(43),
-       gQ = XQ(1802),
-       JQ = XQ(1416),
-       rQ = XQ(1507),
-       IQ = XQ(1081),
+     var OM = iM(44),
+       SM = iM(5403),
+       jM = iM(4720),
+       aM = iM(1440),
+       PM = iM(5417),
+       nM = iM(1116),
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L20-L40` → after: `L18-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L18-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/125.js#L18-L21) · [Before (L20-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/125.js#L20-L40)

```diff
-       BQ = XQ(1739),
-       yQ = XQ(61),
-       VQ = XQ(78),
-       DQ = XQ(2447),
-       pQ = XQ(1384),
-       GQ = XQ(1676),
-       UQ = XQ(1162),
-       bQ = XQ(3681),
-       vQ = XQ(4875),
-       dQ = XQ(2726),
-       HQ = XQ(1975),
-       aQ = XQ(3743),
-       lQ = XQ(1808),
-       hQ = XQ(1548),
-       iQ = XQ(2237),
-       cQ = XQ(1391),
- ... (5 more removed lines; see GitHub link above)
+       zM = iM(1429),
+       LM = iM(1830),
+       mM = iM(5419),
+       HM = iM(1303);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L45` → after: `L25-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L25-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/125.js#L25-L31) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/125.js#L45)

```diff
-         eventName: XQ
+         label: rM,
+         onClick: iM,
+         checked: OM,
+         circleInfoText: SM,
+         className: PM,
+         disabled: nM,
+         note: zM
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L47-L107` → after: `L33-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L33-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/125.js#L33-L51) · [Before (L47-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/125.js#L47-L107)

```diff
-       const {
-         t: wQ
-       } = (0, FQ.C)(), qQ = lQ.c[XQ], [TQ, zQ] = (0, yQ.useState)((() => Date.now() >= qQ.endsAt.getTime())), [sQ, PQ] = (0, yQ.useState)("overall"), gQ = function(QQ, WQ) {
-         const {
-           userContext: XQ,
-           isUserContextUpdating: wQ
-         } = (0, UQ.c)(), qQ = `${QQ}:${WQ}`, [TQ, zQ] = (0, yQ.useState)({
-           requestKey: qQ,
-           leaderboard: {
-             status: "loading"
-           }
-         });
-         return (0, yQ.useEffect)((() => {
-           if (wQ) return;
-           let TQ, sQ = !1;
-           const FQ = async () => {
- ... (45 more removed lines; see GitHub link above)
+       return (0, HM.jsxs)("div", {
+         "aria-disabled": nM || void 0,
+         "data-pad-focusable": !0,
+         className: QM()("SettingBox CheckboxContainer", {
+           [PM]: PM,
+           SettingBoxDisabled: nM
+         }),
+         onClick: () => {
+           nM || iM(!OM)
+         },
+         children: [(0, HM.jsxs)("div", {
+           className: "CheckboxInputAndText",
+           children: [(0, HM.jsx)("label", {
+             className: "CheckboxClickableLabel",
+             children: (0, HM.jsx)(jM.c, {
+               className: "SettingsCheckbox",
+ ... (3 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L174-L241` → after: `L54-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L54-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/125.js#L54-L60) · [Before (L174-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/125.js#L174-L241)

```diff
-             className: "GameEventPanelLeaderboard",
-             children: [(0, EQ.jsxs)("div", {
-               className: "GameEventPanelLeaderboardHeader",
-               children: [(0, EQ.jsx)("h3", {
-                 className: "GameEventPanelLeaderboardTitle",
-                 children: wQ(qQ.leaderboard.titleKey)
-               }), (0, EQ.jsx)(RQ.d, {
-                 ariaLabel: wQ("gameEvents:leaderboardScope"),
-                 options: lQ.b.map((QQ => ({
-                   value: QQ,
-                   label: wQ(`gameEvents:${QQ}Scope`)
-                 }))),
-                 value: sQ,
-                 onChange: PQ
-               })]
-             }), "loading" === gQ.status && (0, EQ.jsx)("div", {
- ... (52 more removed lines; see GitHub link above)
+             className: "CheckboxText",
+             children: [rM, SM && (0, HM.jsx)("span", {
+               onClick: MM => MM.stopPropagation(),
+               children: (0, HM.jsx)(aM.e, {
+                 className: "SettingsTextInputCircleInfo",
+                 hoverInfo: SM
+               })
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L244` → after: `L63-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L63-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/125.js#L63-L66) · [Before (L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/125.js#L244)

```diff
-         })
+         }), zM && (0, HM.jsx)("div", {
+           className: "SettingNote",
+           children: zM
+         })]
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L250-L251` → after: `L72-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L72-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/125.js#L72-L85) · [Before (L250-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/125.js#L250-L251)

```diff
-         event: WQ,
-         progress: XQ
+         name: rM,
+         onChange: iM,
+         min: SM,
+         max: jM,
+         step: PM,
+         initValue: nM,
+         circleInfoText: zM,
+         format: LM,
+         className: mM,
+         padStep: hM,
+         disabled: JM = !1,
+         selectableMax: dM,
+         cappedNote: yM,
+         onChangeComplete: EM
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L253-L255` → after: `L87-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L87-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/125.js#L87-L94) · [Before (L253-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/125.js#L253-L255)

```diff
-       const {
-         t: wQ
-       } = (0, FQ.C)(), qQ = null !== XQ && WQ.prizeGoals.some(((QQ, WQ) => XQ[WQ] >= QQ.target));
+       const [UM, GM] = (0, OM.useState)(nM), CM = (0, OM.useRef)(nM);
+       (0, OM.useEffect)((() => {
+         CM.current = nM, GM(nM)
+       }), [nM]);
+       const eM = void 0 !== dM && dM < jM,
+         bM = eM ? {
+           "--slider-selectable": (dM - SM) / (jM - SM)
+         } : void 0;
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L257-L260` → after: `L96-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L96-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/125.js#L96-L107) · [Before (L257-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/125.js#L257-L260)

```diff
-         className: "GameEventPanelGoals",
-         children: [(0, EQ.jsx)("div", {
-           className: "GameEventPanelGoalsHeading",
-           children: wQ(qQ ? "gameEvents:prizeEarned" : "gameEvents:goalsHeading")
+         className: QM()("SettingBox SettingsSliderDiv", {
+           [mM]: mM,
+           SettingBoxDisabled: JM,
+           SliderCapped: eM
+         }),
+         style: bM,
+         children: [(0, HM.jsxs)("div", {
+           className: "SliderText",
+           children: [`${rM}: ${LM?LM(UM):UM}`, zM && (0, HM.jsx)(aM.e, {
+             className: "SettingsTextInputCircleInfo",
+             hoverInfo: zM
+           })]
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L262-L290` → after: `L109-L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L109-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/125.js#L109-L129) · [Before (L262-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/125.js#L262-L290)

```diff
-           className: "GameEventPanelGoalRow",
-           children: WQ.prizeGoals.map(((QQ, WQ) => {
-             const qQ = null === XQ ? null : Math.min(XQ[WQ], QQ.target);
-             return (0, EQ.jsxs)(yQ.Fragment, {
-               children: [WQ > 0 && (0, EQ.jsx)("div", {
-                 className: "GameEventPanelGoalsOr",
-                 children: wQ("gameEvents:goalsOr")
-               }), (0, EQ.jsxs)("div", {
-                 className: jQ()("GameEventPanelGoal", {
-                   GameEventPanelGoalDone: qQ === QQ.target
-                 }),
-                 children: [(0, EQ.jsx)("span", {
-                   className: "GameEventPanelGoalLabel",
-                   children: wQ(QQ.labelKey)
-                 }), (0, EQ.jsxs)("div", {
-                   className: "GameEventPanelGoalBar",
- ... (13 more removed lines; see GitHub link above)
+           className: "SliderDiv",
+           children: (0, HM.jsx)(lM, {
+             value: UM,
+             min: SM,
+             max: jM,
+             step: PM,
+             onChange: MM => {
+               if (eM && MM >= dM && UM === dM) return;
+               const rM = eM ? Math.min(MM, dM) : MM;
+               CM.current = rM, GM(rM), iM(rM)
+             },
+             onChangeComplete: EM && (() => {
+               EM(CM.current)
+             }),
+             format: LM,
+             padStep: hM,
+ ... (5 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L294-L298` → after: `L133-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L133-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/125.js#L133-L138) · [Before (L294-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/125.js#L294-L298)

```diff
-     var fQ = XQ(1607),
-       SQ = XQ(1666),
-       tQ = XQ(1064),
-       oQ = XQ(772),
-       eQ = XQ(3732);
+     const dM = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);
+ 
+     function yM(MM) {
+       var rM;
+       return (null !== (rM = String(MM).split(".")[1]) && void 0 !== rM ? rM : "").length
+     }
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L302` → after: `L142-L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L142-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/125.js#L142-L157) · [Before (L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/125.js#L302)

```diff
-         gameNameWithVariation: WQ
+         value: rM,
+         min: iM,
+         max: jM,
+         step: aM,
+         onChange: PM,
+         orientation: nM,
+         reverse: QM,
+         setIsChanging: zM,
+         tooltip: LM,
+         labels: hM,
+         handleLabel: JM,
+         format: lM,
+         onChangeStart: EM,
+         onChangeComplete: UM,
+         padStep: GM,
+         disabled: CM = !1
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L304-L314` → after: `L159-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L159-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/125.js#L159-L227) · [Before (L304-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/125.js#L304-L314)

```diff
-       const XQ = (0, fQ.A)(WQ),
-         [wQ, qQ] = (0, yQ.useState)(null);
-       if ((0, yQ.useEffect)((() => {
-           if (!XQ) return;
-           let QQ = !0;
-           return (0, SQ.f)(XQ).then((WQ => {
-             QQ && qQ(WQ)
-           })).catch((QQ => {
-             console.error(`Failed to load the page copy for ${XQ.name}`, QQ)
-           })), () => {
-             QQ = !1
+       const eM = (0, OM.useRef)(null),
+         bM = (0, OM.useRef)(null);
+       (0, OM.useLayoutEffect)((() => {
+         var MM, rM, iM;
+         const OM = null !== (MM = null === (rM = eM.current) || void 0 === rM ? void 0 : rM.querySelector(".rangeslider")) && void 0 !== MM ? MM : null;
+         null === OM || void 0 === OM || OM.setAttribute("data-pad-slider", ""), null === OM || void 0 === OM || OM.setAttribute("data-pad-focusable", ""), null === OM || void 0 === OM || null === (iM = OM.querySelector(".rangeslider__handle")) || void 0 === iM || iM.setAttribute( … [truncated]
+       }), []), (0, OM.useLayoutEffect)((() => {
+         var MM, rM;
+         CM ? null === (MM = bM.current) || void 0 === MM || MM.setAttribute("aria-disabled", "true") : null === (rM = bM.current) || void 0 === rM || rM.removeAttribute("aria-disabled")
+       }), [CM]);
+       const wM = Math.max(yM(aM), yM(iM)),
+         tM = MM => {
+           if (MM >= jM) return jM;
+           if (MM <= iM) return iM;
+           const rM = Number((Math.round((MM - iM) / aM) * aM + iM).toFixed(wM));
+           return Math.min(jM, Math.max(iM, rM))
+ ... (53 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L396-L418` → after: `L232-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L232-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/125.js#L232-L242) · [Before (L396-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/125.js#L396-L418)

```diff
-     var xQ = XQ(1094),
-       YQ = XQ(105),
-       NQ = XQ(1165),
-       ZQ = XQ(34554),
-       OQ = XQ(1714),
-       KQ = XQ(1581),
-       mQ = XQ(1567),
-       MQ = XQ(1674),
-       QW = XQ(1517),
-       WW = XQ(1404),
-       XW = XQ(36634),
-       wW = XQ(1268),
-       qW = XQ(1049),
-       TW = XQ(402),
-       zW = XQ(1057),
-       sW = XQ(1601),
- ... (7 more removed lines; see GitHub link above)
+     async function EM() {
+       const MM = zM.NotificationProvider.showPromptPopup({
+         title: "settingsMenu:reloadPagePopupTitle",
+         subtitle: "settingsMenu:reloadPagePopupSubtitle",
+         confirmText: "settingsMenu:reloadPagePopupConfirm",
+         confirmTooltip: "",
+         cancelText: "general:cancel",
+         cancelTooltip: ""
+       });
+       !0 === await MM.getResult() && (0, LM.reloadBloxd)()
+     }
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L422-L423` → after: `L246-L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L246-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/125.js#L246-L250) · [Before (L422-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/125.js#L422-L423)

```diff
-         preview: WQ,
-         isBroken: XQ
+         label: rM,
+         options: iM,
+         value: OM,
+         onChange: SM,
+         circleInfoText: jM
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L425-L441` → after: `L252-L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L252-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/125.js#L252-L265) · [Before (L425-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/125.js#L425-L441)

```diff
-       const wQ = null === WQ ? null : (0, TQ.g)(WQ, "small"),
-         zQ = (0, qQ.g)(null !== wQ && void 0 !== wQ ? wQ : TQ.q);
-       return null === WQ ? (0, EQ.jsx)("div", {
-         className: jQ()("FeaturedGamesPopupSlotThumbnail FeaturedGamesPopupSlotThumbnailEmpty", {
-           FeaturedGamesPopupSlotThumbnailBroken: XQ
-         }),
-         children: (0, EQ.jsx)(xQ.d, {
-           name: XQ ? "triangle-exclamation" : "star"
-         })
-       }) : (0, EQ.jsx)("div", {
-         className: jQ()("FeaturedGamesPopupSlotThumbnail", sQ.i),
-         style: (0, sQ.h)(zQ),
-         role: "img",
-         "aria-label": WQ.name,
-         children: (0, EQ.jsx)(sQ.e, {
-           image: zQ
- ... (1 more removed lines; see GitHub link above)
+       return (0, HM.jsxs)("div", {
+         className: "SettingBox SegmentedSettingRow",
+         children: [(0, HM.jsxs)("div", {
+           className: "SliderText",
+           children: [rM, jM && (0, HM.jsx)(aM.e, {
+             className: "SettingsTextInputCircleInfo",
+             hoverInfo: jM
+           })]
+         }), (0, HM.jsx)(PM.e, {
+           ariaLabel: rM,
+           options: iM,
+           value: OM,
+           onChange: SM
+         })]
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L447-L448` → after: `L304-L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L304-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/125.js#L304-L306) · [Before (L447-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/125.js#L447-L448)

```diff
-         schematicId: WQ,
-         gameName: XQ
+         details: rM,
+         owner: iM,
+         onChanged: SM
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L452-L478` → after: `L312-L353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L312-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/125.js#L312-L353) · [Before (L452-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/125.js#L452-L478)

```diff
-       } = (0, UQ.c)(), TQ = (0, jW.d)(), [zQ, sQ] = (0, yQ.useState)(null), [FQ, PQ] = (0, yQ.useState)(null), [gQ, JQ] = (0, yQ.useState)(!1), IQ = (0, yQ.useCallback)((() => {
-         PQ(null), hQ.e.getFeaturedGames(qQ).then((QQ => {
-           TQ.current && sQ(QQ.slots)
-         })).catch((QQ => {
-           console.error("Failed to get featured games", QQ), TQ.current && PQ("Failed to load featured games")
-         }))
-       }), [qQ, TQ]);
-       (0, yQ.useEffect)((() => {
-         IQ()
-       }), [IQ]);
-       const jQ = (QQ, WQ) => {
-         gQ || (JQ(!0), hQ.e.setFeaturedGame(qQ, QQ, WQ).then((() => {
-           TQ.current && IQ()
-         })).catch((QQ => {
-           console.error("Failed to set featured game", QQ), TQ.current && PQ("Failed to update the featured slot")
-         })).finally((() => {
- ... (11 more removed lines; see GitHub link above)
+       } = (0, yM.b)(), [mM, HM] = (0, OM.useState)(!1), [hM, JM] = (0, OM.useState)(null), [dM, EM] = (0, OM.useState)(!1), {
+         packId: GM,
+         name: CM,
+         description: RM,
+         live: pM
+       } = rM;
+       async function WM(MM) {
+         let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SM;
+         HM(!0), JM(null);
+         try {
+           await MM(), rM()
+         } catch (iM) {
+           console.error("Failed to change a shader pack", iM), JM((0, tM.u)(iM, aM, "shaderPackListing:ownerActionFailed"))
+         } finally {
+           HM(!1)
+         }
+ ... (26 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L480` → after: `L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/125.js#L355) · [Before (L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/125.js#L480)

```diff
-           className: "FeaturedGamesPopupError",
+           className: "ShaderPackOwnerError",
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L482-L548` → after: `L357-L448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L357-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/125.js#L357-L448) · [Before (L482-L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/125.js#L482-L548)

```diff
-         }), zQ && (0, EQ.jsxs)(EQ.Fragment, {
-           children: [(0, EQ.jsx)("div", {
-             className: "FeaturedGamesPopupSlots",
-             children: zQ.map((QQ => {
-               const XQ = QQ.schematicId === WQ,
-                 qQ = null === QQ.schematicId,
-                 {
-                   categoryGroup: TQ
-                 } = wQ.O[QQ.slotId];
-               return (0, EQ.jsxs)("div", {
-                 className: "FeaturedGamesPopupSlot",
-                 children: [(0, EQ.jsx)(BW, {
-                   preview: QQ.preview,
-                   isBroken: !qQ
-                 }), (0, EQ.jsxs)("div", {
-                   className: "FeaturedGamesPopupSlotText",
- ... (51 more removed lines; see GitHub link above)
+         }), (0, gM.jsxs)("div", {
+           className: "ShaderPackOwnerActions",
+           children: [(0, gM.jsxs)(LM.V, {
+             disabled: mM,
+             onClick: () => {
+               !async function() {
+                 const MM = await wM.NotificationProvider.showInputPopup({
+                   title: "shaderPackListing:renameTitle",
+                   initialValue: CM,
+                   maxLength: jM.z,
+                   submitText: "general:save",
+                   validate: MM => MM.trim().length < jM.D ? aM("shaderPackListing:nameTooShort", {
+                     min: String(jM.D)
+                   }) : null
+                 }).getResult();
+                 "notificationTornDown" !== MM && "submit" === (null === MM || void 0 === MM ? void 0 : MM.type) && MM.value.trim() !== CM && await WM((() => lM.c.updateShaderPack(nM, {
+ ... (76 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L553-L557` → after: `L465-L472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L465-L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/125.js#L465-L472) · [Before (L553-L557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/125.js#L553-L557)

```diff
-     var VW = XQ(4990),
-       DW = XQ(4916),
-       pW = XQ(3699);
-     const GW = 8,
-       UW = 12;
+     var pM = iM(65),
+       WM = iM(2e3),
+       sM = iM(1287),
+       DM = iM(5419),
+       kM = iM(1202),
+       ZM = iM(7068),
+       oM = iM(7061),
+       fM = iM(7081);
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L561-L564` → after: `L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/125.js#L476) · [Before (L561-L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/125.js#L561-L564)

```diff
-         customLobbies: WQ,
-         favouriteLobbies: XQ,
-         toggleLikeLobby: wQ,
-         showReport: qQ
+         item: rM
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L646-L652` → after: `L479-L548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L479-L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/125.js#L479-L548) · [Before (L646-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/125.js#L646-L652)

```diff
-         gameNameWithVariation: QQ
-       } = (0, KQ.E)();
-       if ((0, yQ.useEffect)(aW.l, []), QQ && (0, wW.q)(QQ)) return (0, EQ.jsx)(uW, {
-         urlId: QQ
-       }, QQ);
-       const WQ = QQ && (0, qW.k)(QQ) ? QQ : "firstParty";
-       return (0, EQ.jsx)(LW, {}, WQ)
+         t: iM
+       } = (0, UM.A)(), [SM] = (0, ZM.h)(), [aM, PM] = (0, OM.useState)(SM), [nM, QM] = (0, OM.useState)(!1), [zM, LM] = (0, OM.useState)(!1), {
+         s3Url: mM
+       } = kM.clientSideServerUrls, {
+         width: HM,
+         height: hM
+       } = jM.v.large, JM = (0, jM.w)(mM, rM, aM, "large"), {
+         renderVersion: dM
+       } = rM;
+       return (0, gM.jsxs)("div", {
+         className: "ShaderPackPreviews",
+         children: [(0, gM.jsx)(fM.c, {
+           selected: aM,
+           onSelect: MM => {
+             PM(MM), QM(!1)
+           },
+ ... (54 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L657` → after: `L553-L556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L553-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/125.js#L553-L556) · [Before (L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/125.js#L657)

```diff
-         urlId: WQ
+         fullUrl: rM,
+         largeUrl: iM,
+         alt: SM,
+         onClose: jM
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L659-L682` → after: `L558-L561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L558-L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/125.js#L558-L561) · [Before (L659-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/125.js#L659-L682)

```diff
-       const {
-         userContext: XQ,
-         isUserContextUpdating: wQ
-       } = (0, UQ.c)(), qQ = (0, yQ.useMemo)((() => (0, OQ.i)(WQ)), [WQ]);
-       (0, yQ.useMemo)((() => {
-         if (null === qQ) return;
-         const QQ = NQ.userContextManager.peekCurrentUserContext();
-         (null !== QQ ? hQ.e.getGame(QQ, qQ.schematicId) : NQ.userContextManager.getCurrentUserContext().then((QQ => hQ.e.getGame(QQ, qQ.schematicId)))).catch((QQ => {
-           console.error(`Failed to get the custom game ${qQ.schematicId}`, QQ), (0, OQ.g)(WQ)
-         }))
-       }), [qQ, WQ]);
-       const [TQ, zQ] = (0, yQ.useState)(null), sQ = (0, ZQ.c)();
-       (0, yQ.useEffect)((() => {
-         if (null !== qQ || wQ) return;
-         let QQ = !0;
-         return hQ.e.getGameByUrlId(XQ, WQ).then((XQ => {
- ... (8 more removed lines; see GitHub link above)
+       const aM = (0, OM.useRef)(null);
+       return (0, sM.v)("popup", aM, jM), (0, OM.useEffect)((() => {
+         function MM(MM) {
+           "Escape" === MM.key && (MM.stopPropagation(), jM())
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L684-L689` → after: `L563-L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L563-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/125.js#L563-L582) · [Before (L684-L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/125.js#L684-L689)

```diff
-       }), [WQ, qQ, wQ, XQ]);
-       const FQ = null !== qQ && void 0 !== qQ ? qQ : (null === TQ || void 0 === TQ ? void 0 : TQ.urlId) === WQ ? TQ.game : null;
-       return null === FQ ? (0, EQ.jsx)(cQ.e, {}) : sQ ? (0, EQ.jsx)(LW, {
-         gameNameWithVariation: (0, qW.u)(FQ.schematicId),
-         knownCustomGame: FQ
-       }, FQ.schematicId) : null
+         return window.addEventListener("keydown", MM, !0), () => {
+           window.removeEventListener("keydown", MM, !0)
+         }
+       }), [jM]), (0, pM.createPortal)((0, gM.jsxs)("div", {
+         ref: aM,
+         className: "ShaderPackFullSize",
+         onClick: jM,
+         children: [(0, gM.jsx)("img", {
+           className: "ShaderPackFullSizeImage",
+           src: rM,
+           alt: SM,
+           draggable: !1,
+           style: {
+             backgroundImage: `url(${iM})`
+           }
+         }), (0, gM.jsx)(LM.l, {
+ ... (4 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L695-L696` → after: `L588-L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L588-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/125.js#L588-L590) · [Before (L695-L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/125.js#L695-L696)

```diff
-         gameNameWithVariation: CQ,
-         knownCustomGame: uQ = null
+         item: rM,
+         packUrl: iM,
+         baselineUrl: SM
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L700-L860` → after: `L594-L597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L594-L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/125.js#L594-L597) · [Before (L700-L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/125.js#L700-L860)

```diff
-       } = (0, FQ.C)();
-       (0, gW.i)();
-       const SQ = (0, gW.m)(),
-         {
-           userContext: tQ,
-           isUserContextUpdating: oQ
-         } = (0, UQ.c)(),
-         eQ = (0, HW.e)(),
-         NQ = (0, mQ.useNavigatePreserveSearch)(),
-         ZQ = (0, KQ.E)(),
-         OQ = (0, yQ.useMemo)((() => CQ ? {
-           gameNameWithVariation: CQ
-         } : ZQ), [CQ, ZQ]),
-         QW = (0, FW.e)(OQ),
-         wW = (0, yQ.useMemo)((() => {
-           const QQ = function(QQ) {
- ... (145 more removed lines; see GitHub link above)
+       } = (0, UM.A)(), [PM, nM] = (0, OM.useState)(50), QM = (0, OM.useRef)(!1), zM = (0, OM.useRef)(null), {
+         width: LM,
+         height: mM
+       } = jM.v.large;
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L863-L892` → after: `L600-L653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L600-L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/125.js#L600-L653) · [Before (L863-L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/125.js#L863-L892)

```diff
-         (0, lW.f)(), NQ((0, pQ.c)(wW.gameNameWithVariation, QQ))
-       }(0, yQ.useEffect)((() => {
-         PX && (0, mQ.navigateToHomePage)()
-       }), [PX]), (0, yQ.useEffect)((() => {
-         if (!1 === fW.canCreateCustomLobbies) return;
-         let QQ = !0;
-         return null !== fW.showWorldsInsteadOfCustomLobbies && !1 === oQ && (xW(!0), hQ.e.getFavouriteLobbies(tQ).then((QQ => {
-           OW(QQ)
-         })), hQ.e.getOpenCustomLobbies(tQ, {
-           gameNameWithVariation: fW.showWorldsInsteadOfCustomLobbies ? "classic" : wW.gameNameWithVariation,
-           onlyOwnedLobbies: "owned" === KW,
-           onlyFavouriteLobbies: "favourite" === KW
-         }).then((WQ => {
-           QQ && (0, VQ.unstable_batchedUpdates)((() => {
-             NW(WQ), xW(!1)
-           }))
- ... (14 more removed lines; see GitHub link above)
+         nM((rM => (0, WM.f)(rM + MM, 0, 100)))
+       }
+ 
+       function hM(MM) {
+         const rM = MM.currentTarget.getBoundingClientRect();
+         nM((0, WM.f)((MM.clientX - rM.left) / rM.width * 100, 0, 100))
+       }
+       return (0, DM.d)(zM, {
+         adjust: MM => {
+           HM(MM * AM)
+         },
+         setFraction: MM => {
+           nM(100 * MM)
+         },
+         endDrag: () => {}
+       }), (0, gM.jsxs)("div", {
+ ... (38 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L894-L1268` → after: `L655-L667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L655-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/125.js#L655-L667) · [Before (L894-L1268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/125.js#L894-L1268)

```diff
-         }), [tQ, ZW]),
-         rX = (null === GW || void 0 === GW ? void 0 : GW.schematicId) === (0, qW.n)(QW.gameNameWithVariation) ? GW : null,
-         IX = rX && (0, fQ.E)(QW.gameNameWithVariation, (QQ => kQ(QQ)), rX);
-       (0, MQ.g)(rX && (0, fQ.v)(QW.gameNameWithVariation, rX));
-       const jX = YQ.featureFlags.canUseCustomLobbies && !0 === fW.canCreateCustomLobbies,
-         BX = (0, EQ.jsx)("div", {
-           className: "GameInformationPageContentAnchor",
-           children: (0, EQ.jsx)(nQ, {
-             gameNameWithVariation: wW.gameNameWithVariation
-           })
-         });
-       return (0, EQ.jsx)(EQ.Fragment, {
-         children: (0, EQ.jsxs)("article", {
-           className: jQ()("GameInformation", {
-             GameInformationFadeIn: SW,
-             GameInformationReleaseCountdown: "releaseCountdown" === (null === (IQ = fW.countdownInformation) || void 0 === IQ ? void 0 : IQ.type)
- ... (359 more removed lines; see GitHub link above)
+         }), (0, gM.jsx)("div", {
+           className: "ShaderPackCompareLine"
+         }), (0, gM.jsx)("img", {
+           className: "ShaderPackComparePack",
+           src: iM,
+           width: LM,
+           height: mM,
+           alt: "",
+           draggable: !1
+         }), (0, gM.jsx)(oM.e, {
+           item: rM,
+           className: "ShaderPackCompareNotice"
+         })]
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L1274-L1275` → after: `L673-L674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L673-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/125.js#L673-L674) · [Before (L1274-L1275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/125.js#L1274-L1275)

```diff
-         variation: WQ,
-         isSelected: XQ,
+         side: rM,
+         onClick: iM,
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L1278-L1300` → after: `L677-L684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L677-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/125.js#L677-L684) · [Before (L1278-L1300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/125.js#L1278-L1300)

```diff
-       const FQ = JW.e[WQ],
-         gQ = (0, TQ.i)(WQ, (0, TQ.m)(FQ)),
-         JQ = (0, qQ.g)(gQ),
-         rQ = (0, zQ.d)([(0, TQ.h)(WQ, (0, TQ.e)(FQ))]);
-       return (0, EQ.jsxs)(mQ.LinkPreserveSearch, {
-         to: (0, fQ.v)(WQ),
-         replace: !0,
-         className: jQ()("GameInformationVariation", sQ.i, {
-           SelectedGameInformationVariation: XQ
-         }),
-         onClick: QQ => {
-           if (!(0, QW.d)(QQ)) return;
-           const XQ = (0, DQ.i)(WQ);
-           PQ.i.setItem(XQ, WQ)
-         },
-         onMouseEnter: rQ.start,
- ... (7 more removed lines; see GitHub link above)
+       return (0, gM.jsx)("button", {
+         type: "button",
+         className: `ShaderPackStageButton ${rM}`,
+         onClick: iM,
+         children: (0, gM.jsx)("span", {
+           className: "ShaderPackStageButtonFace SmallTextBold",
+           children: OM
+         })
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L1303-L1319` → after: `L687-L745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L687-L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/125.js#L687-L745) · [Before (L1303-L1319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/125.js#L1303-L1319)

```diff
-   },
-   6900: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       b: () => DQ
-     });
-     var wQ = XQ(61),
-       qQ = XQ(1507),
-       TQ = XQ(1548),
-       zQ = XQ(3736),
-       sQ = XQ(1162),
-       FQ = XQ(1391),
-       PQ = XQ(1416),
-       gQ = XQ(1094),
-       JQ = XQ(1081),
-       rQ = XQ.n(JQ),
-       IQ = XQ(6896),
- ... (1 more removed lines; see GitHub link above)
+     var FM = iM(5401),
+       BM = iM(308),
+       XM = iM(7148);
+     const IM = {
+       compiler: "shaderPack:compilerUnavailable",
+       download: "shaderPackListing:useDownloadFailed",
+       apiVersion: "shaderPackListing:useOtherApiVersion",
+       invalid: "shaderPackListing:useInvalid",
+       errors: "shaderPackListing:useFailsHere",
+       save: "shaderPack:saveFailed"
+     };
+ 
+     function KM(MM) {
+       const {
+         userContext: rM
+       } = (0, yM.b)(), [SM, jM] = (0, OM.useState)(null), [aM, PM] = (0, OM.useState)(!1), [nM, QM] = (0, OM.useState)(!1), [zM, LM] = (0, OM.useState)(null), mM = null === MM || void 0 === MM ? void 0 : MM.packId, HM = null === MM || void 0 === MM ? void 0 : MM.sourceHash;
+ ... (43 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L1323-L1324` → after: `L749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/125.js#L749) · [Before (L1323-L1324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/125.js#L1323-L1324)

```diff
-         info: WQ,
-         className: XQ
+         packUse: rM
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L1327-L1329` → after: `L752-L759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L752-L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/125.js#L752-L759) · [Before (L1327-L1329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/125.js#L1327-L1329)

```diff
-         statusText: wQ,
-         rowText: qQ
-       } = (0, IQ.e)();
+         t: iM
+       } = (0, UM.A)(), {
+         webGpuUsable: OM,
+         inUse: SM,
+         busy: jM,
+         errorKey: aM,
+         use: PM
+       } = rM;
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L1331-L1360` → after: `L761-L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L761-L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/125.js#L761-L800) · [Before (L1331-L1360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/125.js#L1331-L1360)

```diff
-         className: rQ()("GameApprovalInfoDetails", XQ),
-         children: [(0, jQ.jsxs)("div", {
-           className: rQ()("GameApprovalInfoSummary", WQ.overallPassed ? "Passed" : "Failed"),
-           children: [(0, jQ.jsx)(gQ.d, {
-             name: WQ.overallPassed ? "circle-check" : "circle-xmark"
-           }), (0, jQ.jsx)("span", {
-             children: wQ(WQ.status)
-           })]
-         }), WQ.rows.length > 0 && (0, jQ.jsx)("div", {
-           className: "GameApprovalInfoRows",
-           children: WQ.rows.map((QQ => {
-             const {
-               label: WQ,
-               value: XQ
-             } = qQ(QQ);
-             return (0, jQ.jsxs)("div", {
- ... (14 more removed lines; see GitHub link above)
+         className: "ShaderPackUse",
+         children: [(0, gM.jsxs)(LM.p, {
+           disabled: !0 !== OM || SM,
+           loading: jM,
+           onClick: PM,
+           children: [(0, gM.jsx)(bM.b, {
+             name: SM ? "check" : "download"
+           }), " ", iM(SM ? "shaderPackListing:inUse" : "shaderPackListing:use")]
+         }), !1 === OM && (0, gM.jsx)("div", {
+           className: "ShaderPackUseNote",
+           children: iM((0, BM.k)() ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
+         }), aM && (0, gM.jsx)("div", {
+           className: "ShaderPackUseNote Error",
+           children: iM(aM)
+         })]
+       })
+ ... (24 more added lines; see GitHub link above)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L1369-L1375` → after: `L856-L873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L856-L873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/125.js#L856-L873) · [Before (L1369-L1375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/125.js#L1369-L1375)

```diff
-       VQ.NotificationProvider.showCustomPopup({
-         body: () => (0, jQ.jsx)(pQ, {
-           ...QQ
-         }),
-         middleScreenPopupClassName: "ApprovalInfoPopup",
-         onClose: () => {},
-         unlockPointerKey: "approvalInfoPopup"
+       let {
+         item: rM,
+         favourites: iM,
+         packUse: OM
+       } = MM;
+       const SM = iM.isFavourite(rM.packId);
+       return (0, gM.jsxs)("div", {
+         className: "ShaderPackInformationActions",
+         children: [EM.featureFlags.settings.canUseShaderPacks && (0, gM.jsx)(qM, {
+           packUse: OM
+         }), (0, gM.jsx)(LM.y, {
+           className: "ShaderPackInformationLike",
+           onClick: () => {
+             iM.toggle(rM.packId)
+           },
+           isLiked: !0 === SM,
+ ... (2 more added lines; see GitHub link above)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L1381-L1383` → after: `L879-L882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L879-L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/125.js#L879-L882) · [Before (L1381-L1383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/125.js#L1381-L1383)

```diff
-         schematicId: WQ,
-         canOverride: XQ,
-         onApprovalChanged: JQ
+         item: rM,
+         ownerPreview: iM,
+         bloxdhubSlug: OM,
+         actions: SM
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L1387-L1407` → after: `L886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/125.js#L886) · [Before (L1387-L1407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/125.js#L1387-L1407)

```diff
-       } = (0, yQ.C)(), {
-         userContext: IQ
-       } = (0, sQ.c)(), VQ = (0, zQ.d)(), [DQ, pQ] = (0, wQ.useState)(null), [GQ, UQ] = (0, wQ.useState)(null), [bQ, vQ] = (0, wQ.useState)(!1), dQ = (0, wQ.useCallback)((() => {
-         UQ(null), TQ.e.getGameApprovalInfo(IQ, WQ).then((QQ => {
-           VQ.current && pQ(QQ)
-         })).catch((QQ => {
-           console.error("Failed to get game approval info", QQ), VQ.current && UQ(rQ("studio:approvalLoadFailed"))
-         }))
-       }), [IQ, WQ, VQ, rQ]);
-       (0, wQ.useEffect)((() => {
-         dQ()
-       }), [dQ]);
-       const HQ = QQ => {
-         bQ || (vQ(!0), TQ.e.setGameApproval(IQ, WQ, QQ).then((() => {
-           null === JQ || void 0 === JQ || JQ(), VQ.current && dQ()
-         })).catch((QQ => {
- ... (5 more removed lines; see GitHub link above)
+       } = (0, UM.A)(), nM = (0, JM.p)(), QM = null === OM ? null : (0, jM.e)(OM);
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L1409-L1450` → after: `L888-L947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L888-L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/125.js#L888-L947) · [Before (L1409-L1450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/125.js#L1409-L1450)

```diff
-         className: "ApprovalInfoPopupBody",
-         children: [(0, jQ.jsx)("h1", {
-           className: "ApprovalInfoPopupTitle",
-           children: rQ("studio:approvalTitle")
-         }), !DQ && !GQ && (0, jQ.jsx)("div", {
-           className: "ApprovalInfoPopupLoader",
-           children: (0, jQ.jsx)(FQ.e, {})
-         }), GQ && (0, jQ.jsx)("div", {
-           className: "ApprovalInfoPopupError",
-           children: GQ
-         }), DQ && (0, jQ.jsxs)(jQ.Fragment, {
-           children: [(0, jQ.jsx)(BQ, {
-             info: DQ
-           }), XQ && (0, jQ.jsxs)("div", {
-             className: "ApprovalInfoPopupActions",
-             children: [!0 !== DQ.manualOverride && (0, jQ.jsx)(PQ.e, {
- ... (26 more removed lines; see GitHub link above)
+         className: "ShaderPackFacts",
+         children: [rM.description && (0, gM.jsx)("p", {
+           className: "ShaderPackDescription",
+           children: rM.description
+         }), (0, gM.jsxs)("div", {
+           className: "ShaderPackFeatureList",
+           children: [(null !== iM || null !== QM) && (0, gM.jsx)("div", {
+             className: "ShaderPackAuthor",
+             children: null !== iM ? (0, gM.jsxs)(gM.Fragment, {
+               children: [(0, gM.jsx)(hM.f, {
+                 playerSocialPreview: iM,
+                 showLocation: !1,
+                 linkToProfile: !0
+               }), null !== QM && (0, gM.jsx)("a", {
+                 className: "ShaderPackBloxdhubLogo",
+                 href: QM,
+ ... (44 more added lines; see GitHub link above)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L1452-L1464` → after: `L949-L955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L949-L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/125.js#L949-L955) · [Before (L1452-L1464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/125.js#L1452-L1464)

```diff
-             }), null !== DQ.manualOverride && (0, jQ.jsx)(PQ.e, {
-               tooltipInner: (0, jQ.jsx)("div", {
-                 children: rQ("studio:approvalClearOverrideTooltip")
-               }),
-               children: (0, jQ.jsxs)(qQ.h, {
-                 className: "ApprovalInfoPopupActionButton",
-                 onClick: () => {
-                   HQ(null)
-                 },
-                 disabled: bQ,
-                 children: [(0, jQ.jsx)(gQ.d, {
-                   name: "arrows-rotate"
-                 }), " ", rQ("studio:approvalClearOverride")]
+             })]
+           }), (0, gM.jsxs)("div", {
+             children: [(0, gM.jsx)("dt", {
+               children: PM("shaderPackListing:size")
+             }), (0, gM.jsx)("dd", {
+               children: PM("shaderPackListing:sizeValue", {
+                 kilobytes: String((0, tM.K)(rM.sourceBytes))
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L1488` → after: `L969-L974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L969-L974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/125.js#L969-L974) · [Before (L1488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/125.js#L1488)

```diff
-     function zQ() {
+     function Mr(MM) {
+       let {
+         label: rM,
+         time: iM,
+         now: OM
+       } = MM;
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L1492-L1546` → after: `L978-L984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L978-L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/125.js#L978-L984) · [Before (L1492-L1546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/125.js#L1492-L1546)

```diff
-       } = (0, qQ.C)();
-       return {
-         statusText: WQ => QQ(TQ[WQ]),
-         rowText: XQ => {
-           const TQ = (QQ, XQ) => (0, wQ.bb)((0, qQ.n)(WQ.code, QQ), 0, XQ);
-           switch (XQ.kind) {
-             case "ownerAccountAge": {
-               const WQ = XQ.ownerIsLoggedIn ? "studio:approvalAccountAgeLoggedIn" : "studio:approvalAccountAgeNotLoggedIn";
-               return {
-                 label: QQ("studio:approvalAccountAgeLabel"),
-                 value: QQ(WQ, {
-                   age: TQ(WQ, XQ.accountAgeMs),
-                   days: XQ.minAccountAgeDays
-                 })
-               }
-             }
- ... (39 more removed lines; see GitHub link above)
+       } = (0, UM.A)(), aM = new Date(iM);
+       let nM = aM.toLocaleDateString();
+       if (OM - iM <= 30 * PM.i) {
+         const MM = (0, UM.n)(jM.code, "shaderPackListing:timeAgo");
+         nM = SM("shaderPackListing:timeAgo", {
+           time: (0, PM.db)(MM, iM, OM)
+         })
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L1548-L1570` → after: `L986-L995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L986-L995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/125.js#L986-L995) · [Before (L1548-L1570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/125.js#L1548-L1570)

```diff
-     }
- 
-     function sQ(QQ) {
-       return null === QQ.manualOverride && QQ.rows.some((QQ => "reportHold" === QQ.kind && !QQ.passed))
-     }
-   },
-   34554: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       c: () => TQ
-     });
-     var wQ = XQ(61),
-       qQ = XQ(3699);
- 
-     function TQ() {
-       const [QQ, WQ] = (0, wQ.useState)(!1);
-       return (0, wQ.useLayoutEffect)((() => {
- ... (7 more removed lines; see GitHub link above)
+       return (0, gM.jsx)(mM.i, {
+         tooltipInner: aM.toLocaleString(),
+         children: (0, gM.jsxs)("div", {
+           children: [(0, gM.jsx)("dt", {
+             children: rM
+           }), (0, gM.jsx)("dd", {
+             children: nM
+           })]
+         })
+       })
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L1573` → after: `L998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/125.js#L998) · [Before (L1573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/125.js#L1573)

```diff
-   9297: (QQ, WQ, XQ) => {
+   5417: (MM, rM, iM) => {
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L1577-L1579` → after: `L1002-L1004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R1002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L1002-L1004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/125.js#L1002-L1004) · [Before (L1577-L1579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/125.js#L1577-L1579)

```diff
-     var wQ = XQ(1384),
-       qQ = XQ(1257),
-       TQ = XQ(663);
+     var OM = iM(1116),
+       SM = iM.n(OM),
+       jM = iM(1303);
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L1582-L1603` → after: `L1007-L1045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R1007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L1007-L1045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/125.js#L1007-L1045) · [Before (L1582-L1603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/125.js#L1582-L1603)

```diff
-       return QQ = function(QQ, WQ) {
-         var XQ;
-         const wQ = new URLSearchParams(WQ),
-           qQ = wQ.get("lobby"),
-           TQ = wQ.get("vm"),
-           zQ = null !== (XQ = qQ) && void 0 !== XQ ? XQ : QQ.lobbyName,
-           sQ = null !== TQ && void 0 !== TQ ? TQ : QQ.directJoinVmUrl;
-         if (zQ === QQ.lobbyName && sQ === QQ.directJoinVmUrl) return QQ;
-         return {
-           ...QQ,
-           lobbyName: zQ,
-           directJoinVmUrl: sQ
-         }
-       }(QQ, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), QQ = function(QQ) {
-         if ((0, TQ.G)(QQ.directJoinVmUrl)) return QQ;
-         const WQ = (0, qQ.X)(QQ.directJoinVmUrl);
- ... (6 more removed lines; see GitHub link above)
+       let {
+         options: rM,
+         value: iM,
+         onChange: OM,
+         ariaLabel: aM,
+         className: PM,
+         reselectable: nM = !1,
+         keepsFocus: QM = !1,
+         padTabs: zM
+       } = MM;
+       const LM = void 0 !== zM;
+       return (0, jM.jsx)("div", {
+         className: SM()("SegmentedToggle", PM),
+         role: "group",
+         "aria-label": aM,
+         "data-pad-tabs": zM,
+ ... (23 more added lines; see GitHub link above)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L1606` → after: `L1048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R1048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L1048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/125.js#L1048) · [Before (L1606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/125.js#L1606)

```diff
-   9295: (QQ, WQ, XQ) => {
+   5419: (MM, rM, iM) => {
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L1609` → after: `L1051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R1051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L1051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/125.js#L1051) · [Before (L1609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/125.js#L1609)

```diff
-       f: () => qQ
+       d: () => aM
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L1611-L1619` → after: `L1053-L1077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R1053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L1053-L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/125.js#L1053-L1077) · [Before (L1611-L1619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/125.js#L1611-L1619)

```diff
-     let wQ = !1;
- 
-     function qQ() {
-       wQ = !0
-     }
- 
-     function TQ() {
-       return wQ
-     }
+     var OM = iM(44);
+     const SM = new WeakMap,
+       jM = MM => {
+         var rM;
+         const iM = MM.closest("[data-pad-slider]");
+         return iM && null !== (rM = SM.get(iM)) && void 0 !== rM ? rM : null
+       },
+       aM = (MM, rM) => {
+         const iM = (0, OM.useRef)(rM);
+         iM.current = rM, (0, OM.useEffect)((() => {
+           if (MM.current) return ((MM, rM) => (SM.set(MM, rM), () => {
+             SM.get(MM) === rM && SM.delete(MM)
+           }))(MM.current, {
+             adjust: MM => {
+               iM.current.adjust(MM)
+             },
+ ... (9 more added lines; see GitHub link above)
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L1621` → after: `L1079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R1079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L1079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/125.js#L1079) · [Before (L1621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/125.js#L1621)

```diff
-   36661: (QQ, WQ, XQ) => {
+   7148: (MM, rM, iM) => {
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L1623-L1624` → after: `L1081-L1082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R1081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L1081-L1082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/125.js#L1081-L1082) · [Before (L1623-L1624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/125.js#L1623-L1624)

```diff
-       e: () => qQ,
-       i: () => wQ
+       b: () => SM,
+       d: () => jM
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/125.js` (Changed code · before: `L1626-L1627` → after: `L1084-L1090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1R1084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e253f347af0350b8d75039b870a91f9fb67505f56adfc8e0e92678e308a287c1) · [After (L1084-L1090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/125.js#L1084-L1090) · [Before (L1626-L1627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/125.js#L1626-L1627)

```diff
-     const wQ = "skyblockSkills",
-       qQ = "skills_test_gym"
+     var OM = iM(30);
+     const SM = "shaderPack";
+     async function jM() {
+       var MM;
+       let rM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+       return null !== (MM = await OM.f.getItem(SM, rM)) && void 0 !== MM ? MM : null
+     }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/126.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/126.js` (23 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/126.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/126.js#L2)

```diff
- export const ids = [126, 127];
+ export const ids = [126];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/126.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/126.js#L4)

```diff
-   6923: (QQ, WQ, XQ) => {
+   5451: (MM, rM, iM) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L6` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/126.js#L6-L7) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/126.js#L6)

```diff
-       c: () => qQ
+       d: () => zM,
+       g: () => QM
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L8` → after: `L9-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L9-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/126.js#L9-L18) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/126.js#L8)

```diff
-     var wQ = XQ(1145);
+     var OM = iM(44),
+       SM = iM(1520),
+       jM = iM(1188),
+       aM = iM(83),
+       PM = iM(3540),
+       nM = iM(1303);
+ 
+     function QM() {
+       return !(0, aM.isMobile)()
+     }
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L12-L13` → after: `L22-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L22-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/126.js#L22-L24) · [Before (L12-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/126.js#L12-L13)

```diff
-         href: WQ,
-         children: XQ
+         disabled: rM,
+         openFolderPicker: iM,
+         onFiles: aM
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L15-L22` → after: `L26-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L26-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/126.js#L26-L50) · [Before (L15-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/126.js#L15-L22)

```diff
-       return (0, wQ.jsxs)("a", {
-         className: "WorldCodeAiExternalLink",
-         href: WQ,
-         target: "_blank",
-         rel: "noreferrer noopener",
-         children: [XQ, " ", (0, wQ.jsx)("span", {
-           "aria-hidden": "true",
-           children: "\u2197"
+       const {
+         t: zM
+       } = (0, jM.A)(), LM = (0, OM.useRef)(null);
+       return (0, nM.jsxs)("div", {
+         className: "PackPickButtons",
+         "data-pad-mouse-only": !0,
+         children: [(0, nM.jsx)("input", {
+           ref: LM,
+           type: "file",
+           accept: ".zip,application/zip",
+           hidden: !0,
+           onChange: function(MM) {
+             const rM = Array.from(MM.target.files);
+             MM.target.value = "", aM(rM)
+           }
+         }), QM() && (0, nM.jsx)(SM.e, {
+ ... (9 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L27` → after: `L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/126.js#L55) · [Before (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/126.js#L27)

```diff
-   6917: (QQ, WQ, XQ) => {
+   5430: (MM, rM, iM) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L32-L33` → after: `L58-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L58-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/126.js#L58-L59) · [Before (L32-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/126.js#L32-L33)

```diff
-       f: () => FQ,
-       j: () => sQ
+       e: () => aM,
+       i: () => jM
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L35-L40` → after: `L61-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/126.js#L61-L62) · [Before (L35-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/126.js#L35-L40)

```diff
-     var wQ = XQ(1226),
-       qQ = XQ(6923),
-       TQ = XQ(1145);
-     const zQ = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html",
-       sQ = "https://openai.com/policies/terms-of-use/",
-       FQ = "https://openai.com/policies/privacy-policy/";
+     var OM = iM(5435);
+     const SM = [MM => MM.strict ? "strict" : "nonStrict", MM => MM.program];
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L42-L51` → after: `L64-L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L64-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/126.js#L64-L68) · [Before (L42-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/126.js#L42-L51)

```diff
-     function PQ() {
-       const {
-         t: QQ
-       } = (0, wQ.C)();
-       return (0, TQ.jsxs)(TQ.Fragment, {
-         children: [QQ("superBotXd:deepSeekNotice"), " ", (0, TQ.jsx)(qQ.c, {
-           href: zQ,
-           children: QQ("superBotXd:deepSeekPrivacyPolicy")
-         })]
-       })
+     function jM(MM, rM) {
+       let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
+       const OM = {};
+       for (const SM in iM) OM[SM] = `\0${SM}\0`;
+       return MM(rM, OM).replace(/\0(\w+)\0/g, ((MM, rM) => iM[rM]))
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L54-L66` → after: `L71-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L71-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/126.js#L71-L108) · [Before (L54-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/126.js#L54-L66)

```diff
-     function gQ() {
-       const {
-         t: QQ
-       } = (0, wQ.C)();
-       return (0, TQ.jsxs)(TQ.Fragment, {
-         children: [QQ("aiHelperChatGpt:notice"), " ", (0, TQ.jsx)(qQ.c, {
-           href: sQ,
-           children: QQ("aiHelperChatGpt:terms")
-         }), " ", (0, TQ.jsx)(qQ.c, {
-           href: FQ,
-           children: QQ("aiHelperChatGpt:privacyPolicy")
-         })]
-       })
+     function aM(MM) {
+       return null === MM.file ? null : MM.line > 0 ? `${MM.file}:${MM.line}` : MM.file
+     }
+ 
+     function PM(MM) {
+       const rM = new Map(MM.map((MM => [nM(MM).join("."), MM])));
+       if (0 === rM.size) return [];
+       const iM = zM([...rM.values()]);
+       return 0 === iM[0].length ? [] : iM
+     }
+ 
+     function nM(MM) {
+       return SM.map((rM => rM(MM)))
+     }
+     const QM = SM.map((MM => new Set(OM.g.map(MM)).size));
+ 
+ ... (22 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L69` → after: `L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/126.js#L111) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/126.js#L69)

```diff
-   6914: (QQ, WQ, XQ) => {
+   7093: (MM, rM, iM) => {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L71` → after: `L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/126.js#L113) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/126.js#L71)

```diff
-       default: () => yQ
+       ShaderPackPublishForm: () => EM
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L73-L83` → after: `L115-L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L115-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/126.js#L115-L130) · [Before (L73-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/126.js#L73-L83)

```diff
-     var wQ = XQ(1226),
-       qQ = XQ(158),
-       TQ = XQ(260),
-       zQ = XQ(1507),
-       sQ = XQ(1360),
-       FQ = XQ(26),
-       PQ = XQ(1747),
-       gQ = XQ(3665),
-       JQ = XQ(3395),
-       rQ = XQ(6917),
-       IQ = XQ(1145);
+     var OM = iM(44),
+       SM = iM(7054),
+       jM = iM(184),
+       aM = iM(5442),
+       PM = iM(1398),
+       nM = iM(1520),
+       QM = iM(1763),
+       zM = iM(1142),
+       LM = iM(7102),
+       mM = iM(7105),
+       HM = iM(1573),
+       hM = iM(1188),
+       JM = iM(7111),
+       dM = iM(7134),
+       yM = iM(7051),
+       lM = iM(1303);
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L85` → after: `L132-L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L132-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/126.js#L132-L137) · [Before (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/126.js#L85)

```diff
-     function jQ() {
+     function EM(MM) {
+       var rM, iM, LM;
+       let {
+         existing: EM,
+         onPublished: GM
+       } = MM;
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L88` → after: `L140-L165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L140-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/126.js#L140-L165) · [Before (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/126.js#L88)

```diff
-       } = (0, wQ.C)(), WQ = !(0, TQ.shouldUseUkPrivacyPolicy)();
+       } = (0, hM.A)(), {
+         userContext: bM,
+         isUserContextUpdating: wM
+       } = (0, zM.b)(), [tM, gM] = (0, OM.useState)(null), [uM, RM] = (0, OM.useState)(0), [pM, WM] = (0, OM.useState)(null !== (rM = null === EM || void 0 === EM ? void 0 : EM.name) && void 0 !== rM ? rM : ""), sM = (0, OM.useRef)(pM), DM = (0, OM.useRef)(""), kM = MM => {
+         sM.current = MM, WM(MM)
+       }, [ZM, oM] = (0, OM.useState)(null !== (iM = null === EM || void 0 === EM ? void 0 : EM.description) && void 0 !== iM ? iM : ""), fM = (0, OM.useRef)(ZM), YM = (0, OM.useRef)(""), NM = MM => {
+         fM.current = MM, oM(MM)
+       }, [AM, xM] = (0, OM.useState)(!1), {
+         loading: vM,
+         error: FM,
+         setError: BM,
+         onFiles: XM
+       } = (0, mM.e)((async MM => {
+         const rM = await (0, JM.loadPageShaderPackCompiler)();
+         if (!rM) return void BM(eM("shaderPack:compilerUnavailable"));
+         const iM = await (0, dM.f)(rM, MM.files);
+ ... (10 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L90-L814` → after: `L167-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L167-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/126.js#L167-L195) · [Before (L90-L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/126.js#L90-L814)

```diff
-         className: "LegalText",
-         children: [(0, IQ.jsx)("div", {
-           className: "BloxdInformationHeader FullyFancyText",
-           children: QQ("homePage:privacyPolicy")
-         }), (0, IQ.jsx)("p", {
-           children: (0, IQ.jsxs)("em", {
-             children: ["Last updated: ", gQ.e.toLocaleDateString()]
-           })
-         }), (0, IQ.jsx)("p", {
-           children: "This Privacy Policy outlines how Bloxd LTD collects, uses, and protects your information when you visit and interact with Bloxd.io. This document is intended to provide clarity on our practices and your rights concerning your data."
-         }), (0, IQ.jsx)("h2", {
-           children: "1. Who We Are"
-         }), (0, IQ.jsx)("p", {
-           children: "At Bloxd.io, we take your privacy\u2014and the privacy of your children\u2014very seriously. This Privacy Policy explains how we collect, use, and protect the information of both you and your child when you use our website. Our goal is to make sure you unders … [truncated]
-         }), (0, IQ.jsx)("p", {
-           children: "Whether you\u2019re a parent, guardian, or player, this document is designed to provide you with clear and straightforward information about our privacy practices. We\u2019re committed to providing a safe and enjoyable environment for our younger players whil … [truncated]
- ... (709 more removed lines; see GitHub link above)
+         className: "ShaderPackPublishForm",
+         children: [(0, lM.jsx)("p", {
+           className: "ShaderPackPublishIntro",
+           children: EM ? eM("shaderPackListing:uploadIntro", {
+             minutes: String(SM.I / 6e4)
+           }) : eM("shaderPackListing:publishIntro")
+         }), (0, lM.jsx)(CM, {}), IM && (0, lM.jsx)("div", {
+           className: "ShaderPackPublishNote Warning",
+           children: eM("shaderPackListing:publishNeedsLogin")
+         }), (0, lM.jsx)(mM.b, {
+           busy: vM,
+           disabled: vM || AM,
+           onFiles: MM => {
+             gM(null), XM(MM)
+           }
+         }), tM && (0, lM.jsxs)("div", {
+ ... (13 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L816-L849` → after: `L197-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L197-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/126.js#L197-L223) · [Before (L816-L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/126.js#L816-L849)

```diff
-         }), (0, IQ.jsx)("h4", {
-           children: "Payment Providers"
-         }), (0, IQ.jsxs)("table", {
-           children: [(0, IQ.jsxs)("tr", {
-             children: [(0, IQ.jsx)("td", {
-               children: (0, IQ.jsx)("p", {
-                 children: "Service Provider"
-               })
-             }), (0, IQ.jsx)("td", {
-               children: (0, IQ.jsx)("p", {
-                 children: "What They Collect"
-               })
-             }), (0, IQ.jsx)("td", {
-               children: (0, IQ.jsx)("p", {
-                 children: "What They Do"
-               })
- ... (18 more removed lines; see GitHub link above)
+         }), !EM && (0, lM.jsxs)(lM.Fragment, {
+           children: [(0, lM.jsxs)("label", {
+             className: "ShaderPackPublishField",
+             children: [(0, lM.jsx)("span", {
+               children: eM("general:name")
+             }), (0, lM.jsx)(QM.b, {
+               className: "ShaderPackPublishInput",
+               defaultValue: pM,
+               maxLength: SM.z,
+               onValueChange: kM
+             }, uM), tM && qM && (0, lM.jsx)("span", {
+               className: "ShaderPackPublishHint",
+               children: eM("shaderPackListing:nameTooShort", {
+                 min: String(SM.D)
+               })
+             })]
+ ... (11 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L851-L1195` → after: `L225-L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L225-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/126.js#L225-L298) · [Before (L851-L1195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/126.js#L851-L1195)

```diff
-         }), (0, IQ.jsx)("h4", {
-           children: "Platform Integrations"
-         }), (0, IQ.jsxs)("table", {
-           children: [(0, IQ.jsxs)("tr", {
-             children: [(0, IQ.jsx)("td", {
-               children: (0, IQ.jsx)("p", {
-                 children: "Service Provider"
-               })
-             }), (0, IQ.jsx)("td", {
-               children: (0, IQ.jsx)("p", {
-                 children: "Information Processed"
-               })
-             }), (0, IQ.jsx)("td", {
-               children: (0, IQ.jsx)("p", {
-                 children: "What They Do"
-               })
- ... (329 more removed lines; see GitHub link above)
+         }), FM && (0, lM.jsx)("div", {
+           className: "ShaderPackPublishNote Error",
+           children: FM
+         }), (0, lM.jsxs)(nM.p, {
+           className: "ShaderPackPublishButton",
+           disabled: !TM,
+           loading: AM,
+           onClick: () => {
+             !async function() {
+               var MM;
+               if (!tM) return;
+               const {
+                 name: rM,
+                 description: iM
+               } = null !== EM && void 0 !== EM ? EM : {
+                 name: KM,
+ ... (58 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L1197-L1200` → after: `L300-L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L300-L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/126.js#L300-L310) · [Before (L1197-L1200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/126.js#L1197-L1200)

```diff
-         }), (0, IQ.jsx)("h2", {
-           children: "10. Updates to This Policy"
-         }), (0, IQ.jsx)("p", {
-           children: "We may update this policy occasionally to reflect changes in our practices or the law. When we do, we\u2019ll update the \u201cLast updated\u201d date at the top. Please check back occasionally to stay informed."
+         })]
+       }) : (0, lM.jsxs)(lM.Fragment, {
+         children: [(0, lM.jsxs)("div", {
+           className: "ShaderPackPublishNote Error",
+           children: [(0, lM.jsx)(PM.b, {
+             name: "triangle-exclamation"
+           }), " ", iM("shaderPackListing:publishHasErrors")]
+         }), (0, lM.jsx)(LM.b, {
+           diagnostics: OM.errors,
+           more: OM.moreErrors,
+           t: iM
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L1207-L1221` → after: `L318-L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L318-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/126.js#L318-L330) · [Before (L1207-L1221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/126.js#L1207-L1221)

```diff
-         adMobPrivacyOptionsRequired: QQ
-       } = (0, FQ.n)(["adMobPrivacyOptionsRequired"]);
-       if (!QQ) return null;
-       return (0, IQ.jsx)(zQ.h, {
-         className: "PrivacyChoicesButton",
-         onClick: () => {
-           (async () => {
-             try {
-               await PQ.e.request("ads.showPrivacyOptions", {})
-             } catch (QQ) {
-               console.error("Failed to open AdMob privacy options:", QQ)
-             }
-           })()
-         },
-         children: "Manage Privacy Choices"
+         t: MM
+       } = (0, hM.A)(), [rM, iM] = MM("shaderPackListing:bloxdhubHelp", {
+         site: GM
+       }).split(GM);
+       return (0, lM.jsxs)("p", {
+         className: "ShaderPackPublishIntro",
+         children: [rM, (0, lM.jsx)("a", {
+           className: "ShaderPackPublishLink",
+           href: SM.g,
+           target: "_blank",
+           rel: "noopener noreferrer",
+           children: SM.b
+         }), iM]
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L1225-L1233` → after: `L361-L503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L361-L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/126.js#L361-L503) · [Before (L1225-L1233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/126.js#L1225-L1233)

```diff
-     function yQ() {
-       return (0, IQ.jsxs)(IQ.Fragment, {
-         children: [(0, qQ.isDiscordClient)() && (0, IQ.jsx)(IQ.Fragment, {
-           children: (0, IQ.jsx)(zQ.h, {
-             className: "PrivacyChoicesButton",
-             onClick: () => {
-               (0, sQ.t)()
-             },
-             children: "Adjust Discord Privacy Choices"
+     function SM(MM) {
+       return MM === OM
+     }
+ 
+     function jM(MM) {
+       return [...MM.features]
+     }
+     const aM = 262144,
+       PM = 256,
+       nM = 256;
+ 
+     function QM(MM) {
+       if ("object" !== typeof MM || null === MM || Array.isArray(MM)) return "The pack has no files.";
+       const rM = [];
+       for (const [iM, OM] of Object.entries(MM)) {
+         if ("string" !== typeof OM) return `${iM} isn't text.`;
+ ... (127 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L1235-L1238` → after: `L505-L525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L505-L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/126.js#L505-L525) · [Before (L1235-L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/126.js#L1235-L1238)

```diff
-         }), (0, IQ.jsx)(BQ, {}), (0, IQ.jsx)(JQ.c, {
-           className: "PrivacyPolicyLinks"
-         }), (0, IQ.jsx)(jQ, {})]
-       })
+         } else mM.set(iM, JM + 1)
+       }
+       for (const hM of mM.keys()) HM.delete(hM);
+       for (const [hM, JM] of iM) {
+         const MM = mM.get(JM);
+         void 0 === MM || mM.has(hM) || (mM.set(hM, MM), HM.delete(hM))
+       }
+       return {
+         named: [...mM].sort(((MM, rM) => {
+           let [iM] = MM, [OM] = rM;
+           return iM < OM ? -1 : iM > OM ? 1 : 0
+         })).map((MM => {
+           let [rM, iM] = MM;
+           return {
+             name: rM,
+             id: iM
+ ... (5 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/127.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/127.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596)

#### 1. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/127.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/127.js#L2)

```diff
- export const ids = [127];
+ export const ids = [127, 130, 151, 152];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/127.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/127.js#L4)

```diff
-   6917: (QQ, WQ, XQ) => {
+   5435: (MM, rM, iM) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L6-L7` → after: `L6-L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L6-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/127.js#L6-L338) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/127.js#L6-L7)

```diff
-       WorldCodeAiChatGptNotice: () => gQ,
-       WorldCodeAiDeepSeekNotice: () => PQ,
+       e: () => OM.g,
+       g: () => SM,
+       k: () => OM.o
+     });
+     var OM = iM(5442);
+     const SM = [!1, !0].flatMap((MM => ["terrain", "liquid", "model"].map((rM => ({
+       strict: MM,
+       program: rM
+     })))))
+   },
+   41591: (MM, rM, iM) => {
+     iM.d(rM, {
+       b: () => LM,
+       installListedShaderPack: () => zM
+     });
+     var OM = iM(7054),
+ ... (317 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L10` → after: `L341-L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L341-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/127.js#L341-L348) · [Before (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/127.js#L10)

```diff
-       j: () => sQ
+       g: () => OM,
+       j: () => JM,
+       k: () => LM,
+       o: () => SM,
+       q: () => jM,
+       t: () => QM,
+       w: () => zM,
+       z: () => mM
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L12-L43` → after: `L350-L516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L350-L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/127.js#L350-L516) · [Before (L12-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/127.js#L12-L43)

```diff
-     var wQ = XQ(1226),
-       qQ = XQ(6923),
-       TQ = XQ(1145);
-     const zQ = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html",
-       sQ = "https://openai.com/policies/terms-of-use/",
-       FQ = "https://openai.com/policies/privacy-policy/";
- 
-     function PQ() {
-       const {
-         t: QQ
-       } = (0, wQ.C)();
-       return (0, TQ.jsxs)(TQ.Fragment, {
-         children: [QQ("superBotXd:deepSeekNotice"), " ", (0, TQ.jsx)(qQ.c, {
-           href: zQ,
-           children: QQ("superBotXd:deepSeekPrivacyPolicy")
-         })]
- ... (16 more removed lines; see GitHub link above)
+     const OM = 5;
+ 
+     function SM(MM) {
+       return MM === OM
+     }
+ 
+     function jM(MM) {
+       return [...MM.features]
+     }
+     const aM = 262144,
+       PM = 256,
+       nM = 256;
+ 
+     function QM(MM) {
+       if ("object" !== typeof MM || null === MM || Array.isArray(MM)) return "The pack has no files.";
+       const rM = [];
+ ... (151 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/128.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/128.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc)

#### 1. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/128.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/128.js#L2)

```diff
- export const ids = [128];
+ export const ids = [128, 130, 151, 152];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L4` → after: `L4-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L4-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/128.js#L4-L16) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/128.js#L4)

```diff
-   6928: (QQ, WQ, XQ) => {
+   5435: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => OM.g,
+       g: () => SM,
+       k: () => OM.o
+     });
+     var OM = iM(5442);
+     const SM = [!1, !0].flatMap((MM => ["terrain", "liquid", "model"].map((rM => ({
+       strict: MM,
+       program: rM
+     })))))
+   },
+   7142: (MM, rM, iM) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L6-L22` → after: `L18-L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L18-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/128.js#L18-L346) · [Before (L6-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/128.js#L6-L22)

```diff
-       default: () => TQ
-     });
-     var wQ = XQ(1226),
-       qQ = XQ(1145);
- 
-     function TQ() {
-       const {
-         t: QQ
-       } = (0, wQ.C)();
-       return (0, qQ.jsxs)("div", {
-         className: "LegalText",
-         children: [(0, qQ.jsx)("div", {
-           className: "BloxdInformationHeader FullyFancyText",
-           children: QQ("homePage:termsOfService")
-         }), (0, qQ.jsx)("p", {
-           children: (0, qQ.jsx)("em", {
- ... (1 more removed lines; see GitHub link above)
+       forgetShaderPackActiveHint: () => uM,
+       isOtherApiVersion: () => bM,
+       isShaderPackActive: () => UM,
+       isShaderPackChangePending: () => eM,
+       markShaderPackChangePending: () => CM,
+       pageShaderPackValidationVersion: () => wM,
+       reconcileStoredShaderPackHint: () => gM,
+       removeShaderPack: () => EM,
+       replaceShaderPack: () => dM,
+       saveShaderPack: () => JM,
+       shaderPackNeedsCheck: () => tM,
+       storedPackOutcome: () => GM,
+       storedShaderPackFiles: () => mM,
+       toStoredShaderPack: () => LM
+     });
+     var OM = iM(5442),
+ ... (313 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L24-L221` → after: `L348-L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L348-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/128.js#L348-L368) · [Before (L24-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/128.js#L24-L221)

```diff
-         }), (0, qQ.jsx)("p", {
-           children: 'These Terms of Service ("Terms") govern your access to and use of the Bloxd.io website and services (the "Services"). These Terms form a legally binding agreement between you and Bloxd LTD ("we," "us" or "our"). By using our Services, you agree to these Terms … [truncated]
-         }), (0, qQ.jsx)("h3", {
-           children: "1. General Information"
-         }), (0, qQ.jsx)("p", {
-           children: "We may update these Terms at any time. When we do, we\u2019ll post the revised version on our website with the new effective date. Your continued use of Bloxd.io after the changes take effect means you accept the updated Terms. If you do not agree to the chan … [truncated]
-         }), (0, qQ.jsx)("h3", {
-           children: "2. Definitions"
-         }), (0, qQ.jsx)("p", {
-           children: (0, qQ.jsxs)("ul", {
-             children: [(0, qQ.jsx)("li", {
-               children: '"Account" means the account you create to access the Services on Bloxd.io.'
-             }), (0, qQ.jsx)("li", {
-               children: '"Company" refers to Bloxd LTD and its affiliates, subsidiaries, and associated entities.'
-             }), (0, qQ.jsx)("li", {
-               children: '"Services" includes the Bloxd.io website, games, content, and related services provided by us.'
- ... (182 more removed lines; see GitHub link above)
+         } else mM.set(iM, JM + 1)
+       }
+       for (const hM of mM.keys()) HM.delete(hM);
+       for (const [hM, JM] of iM) {
+         const MM = mM.get(JM);
+         void 0 === MM || mM.has(hM) || (mM.set(hM, MM), HM.delete(hM))
+       }
+       return {
+         named: [...mM].sort(((MM, rM) => {
+           let [iM] = MM, [OM] = rM;
+           return iM < OM ? -1 : iM > OM ? 1 : 0
+         })).map((MM => {
+           let [rM, iM] = MM;
+           return {
+             name: rM,
+             id: iM
+ ... (5 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/129.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/129.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/129.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/129.js#L2)

```diff
- export const ids = [129];
+ export const ids = [129, 130, 151];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L4` → after: `L4-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L4-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/129.js#L4-L16) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/129.js#L4)

```diff
-   6932: (QQ, WQ, XQ) => {
+   5435: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => OM.g,
+       g: () => SM,
+       k: () => OM.o
+     });
+     var OM = iM(5442);
+     const SM = [!1, !0].flatMap((MM => ["terrain", "liquid", "model"].map((rM => ({
+       strict: MM,
+       program: rM
+     })))))
+   },
+   40300: (MM, rM, iM) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L6-L18` → after: `L18-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L18-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/129.js#L18-L90) · [Before (L6-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/129.js#L6-L18)

```diff
-       default: () => jQ
-     });
-     var wQ = XQ(1581),
-       qQ = XQ(1620),
-       TQ = XQ(3255),
-       zQ = XQ(2366),
-       sQ = XQ(1507),
-       FQ = XQ(1567),
-       PQ = XQ(1162),
-       gQ = XQ(1085),
-       JQ = XQ(1226),
-       rQ = XQ(1094),
-       IQ = XQ(1145);
+       ShaderPackPage: () => nM,
+       harnessShaderPackMode: () => mM,
+       setHarnessUrlShaderPack: () => LM,
+       shaderPackPage: () => zM
+     });
+     var OM = iM(83),
+       SM = iM(30),
+       jM = (iM(3860), iM(5435), iM(3855)),
+       aM = iM(7148);
+     iM(7120);
+     const PM = {
+       status: "none"
+     };
+     class nM {
+       constructor() {
+         this.stored = null, this.compiling = null, this.pagePack = null, this.resolved = null
+ ... (57 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L22-L32` → after: `L105-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L105-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/129.js#L105-L167) · [Before (L22-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/129.js#L22-L32)

```diff
-       const {
-         t: WQ
-       } = (0, JQ.C)(), {
-         pack: XQ
-       } = (0, wQ.E)(), {
-         userContext: jQ
-       } = (0, PQ.c)();
-       if (XQ) {
-         const QQ = qQ.d[XQ];
-         if (null === QQ || void 0 === QQ || !QQ.purchasable) return (0, IQ.jsx)(FQ.NavigatePreserveSearch, {
-           to: "/"
+       let rM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+       return null !== (MM = await OM.f.getItem(SM, rM)) && void 0 !== MM ? MM : null
+     }
+   },
+   7120: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       loadShaderPackTextures: () => aM,
+       shaderPackTextures: () => PM
+     });
+     var OM = iM(5442);
+     let SM = null,
+       jM = null;
+ 
+     function aM() {
+       return jM ??= Promise.all([iM.e(84), iM.e(204)]).then((() => iM(41585))).then((MM => {
+         let {
+ ... (47 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L35-L67` → after: `L170-L291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L170-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/129.js#L170-L291) · [Before (L35-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/129.js#L35-L67)

```diff
-       const BQ = XQ ? qQ.d[XQ] : null,
-         yQ = XQ ? TQ.l[(0, zQ.i)(XQ)] : null,
-         VQ = void 0 !== (null === BQ || void 0 === BQ ? void 0 : BQ.characterSet) || null !== BQ && void 0 !== BQ && BQ.singleItem ? BQ.displayName : `${null!==(QQ=null===BQ||void 0===BQ?void 0:BQ.displayName)&&void 0!==QQ?QQ:XQ} Pack`,
-         DQ = BQ ? `Your ${VQ} is Ready!` : "Welcome To Super Rank!",
-         pQ = BQ ? "Equip your new cosmetics in the character customisation menu!" : "You can change you name color and cape in the customization menu in game!",
-         GQ = BQ ? !jQ.getOwnedCosmeticPacks().includes(XQ) : !jQ.playerHasRank("super"),
-         UQ = BQ ? "You should get your cosmetics instantly, but it could take up to an hour to apply. If you don't have them after an hour, contact help@bloxd.io." : "You should get Super Rank instantly, but it could take up to an hour to apply. If you don't have Super Rank after … [truncated]
-       return (0, IQ.jsxs)("div", {
-         className: "PurchaseWelcome AnimFadeInScaleUp",
-         children: [yQ && (0, IQ.jsx)(yQ, {}), !BQ && (0, IQ.jsx)(gQ.b, {
-           iconName: "bolt",
-           iconCountPerGroup: 10,
-           animation: "Fall",
-           midShowerStart: !0,
-           customClass: "SuperRankWelcomeIconShower"
-         }), (0, IQ.jsx)("div", {
- ... (17 more removed lines; see GitHub link above)
+       return rM.sort(((MM, rM) => LM(MM.path, rM.path))),
+         function(MM) {
+           if (0 === MM.length) return "The pack has no .wgsl files.";
+           if (MM.length > PM) return `The pack has more than ${PM} .wgsl files.`;
+           const rM = new Set;
+           for (const {
+               path: iM
+             }
+             of MM) {
+             const MM = HM(iM);
+             if (null !== MM) return MM;
+             if (rM.has(iM)) return `The pack has two files at ${iM}.`;
+             rM.add(iM)
+           }
+           return mM(MM) > aM ? `The pack's .wgsl files are over ${aM/1024} KB in total.` : null
+         }(rM) ?? rM
+ ... (106 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L69-L70` → after: `L293-L313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L293-L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/129.js#L293-L313) · [Before (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/129.js#L69-L70)

```diff
-         })]
-       })
+         } else mM.set(iM, JM + 1)
+       }
+       for (const hM of mM.keys()) HM.delete(hM);
+       for (const [hM, JM] of iM) {
+         const MM = mM.get(JM);
+         void 0 === MM || mM.has(hM) || (mM.set(hM, MM), HM.delete(hM))
+       }
+       return {
+         named: [...mM].sort(((MM, rM) => {
+           let [iM] = MM, [OM] = rM;
+           return iM < OM ? -1 : iM > OM ? 1 : 0
+         })).map((MM => {
+           let [rM, iM] = MM;
+           return {
+             name: rM,
+             id: iM
+ ... (5 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/130.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/130.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66)

#### 1. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/130.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/130.js#L2)

```diff
- export const ids = [130];
+ export const ids = [130, 151];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/130.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/130.js#L4)

```diff
-   6941: (QQ, WQ, XQ) => {
+   7120: (MM, rM, iM) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L6` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/130.js#L6-L7) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/130.js#L6)

```diff
-       default: () => rQ
+       loadShaderPackTextures: () => aM,
+       shaderPackTextures: () => PM
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L8-L16` → after: `L9-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/130.js#L9-L11) · [Before (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/130.js#L8-L16)

```diff
-     var wQ = XQ(1391),
-       qQ = XQ(61),
-       TQ = XQ(121),
-       zQ = XQ(1581),
-       sQ = XQ(1263),
-       FQ = XQ(382),
-       PQ = XQ(691);
-     const gQ = new URL(sQ.p[FQ.b.PRODUCTION]).origin;
-     var JQ = XQ(1145);
+     var OM = iM(5442);
+     let SM = null,
+       jM = null;
```
