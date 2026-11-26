# Changed — Bundle Modifications Report (Part 030 / 115)

- **Updated at**: `2026-11-27T00:54 JST`
- **Part**: `30 / 115` (**288** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 029](part-029.md) · [Part 031 →](part-031.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/236.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/236.js` (25 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb)

#### 14. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L107-L113` → after: `L291-L292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L291-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/236.js#L291-L292) · [Before (L107-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/236.js#L107-L113)

```diff
-     function oU() {
-       return "undefined" === typeof location ? null : function(UU) {
-         const XU = new URLSearchParams(UU).get("renderDistanceMax");
-         if (null === XU || !/^\d{1,2}$/.test(XU)) return null;
-         const zU = Number(XU);
-         return zU >= 1 && zU <= 64 ? zU : null
-       }(location.search)
+     function SB(HH, BH, LH) {
+       return (0, YH.k)(HH, BH).purchasable && !(0, RH.y)(HH, BH, LH)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L117-L119` → after: `L296-L358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L296-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/236.js#L296-L358) · [Before (L117-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/236.js#L117-L119)

```diff
-       return null === XU ? UU : {
-         horizontal: Math.min(UU.horizontal, XU),
-         vertical: UU.vertical
+       return Object.entries(HH).some((HH => {
+         let [LH, AH] = HH;
+         return SB(LH, AH, BH)
+       }))
+     }
+ 
+     function tB(HH) {
+       var BH;
+       let {
+         pack: LH,
+         ownedPacks: AH,
+         showStoreLink: rH = !1,
+         children: SH
+       } = HH;
+       const {
+         t: hH
+ ... (47 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L123-L127` → after: `L474-L946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L474-L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/236.js#L474-L946) · [Before (L123-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/236.js#L123-L127)

```diff
-     function EU(UU, XU) {
-       return null === XU ? UU : DU(null !== UU && void 0 !== UU ? UU : {
-         horizontal: 1 / 0,
-         vertical: 1 / 0
-       }, XU)
+       function EB() {
+         null !== rB.current && (clearTimeout(rB.current), rB.current = null);
+         const HH = CB.current;
+         null !== HH && (CB.current = null, (0, yH.d)(WH, [
+           ["emote", HH]
+         ]))
+       }
+ 
+       function XB(HH, BH, LH) {
+         var AH, rH, SH;
+         sH.current = {
+           ...sH.current,
+           [HH]: BH
+         }, vH(), LH && ((0, yH.d)(WH, [
+           [HH, BH]
+         ]), jH(null));
+ ... (457 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L130` → after: `L1101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR1101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L1101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/236.js#L1101) · [Before (L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/236.js#L130)

```diff
-   42020: (UU, XU, zU) => {
+   37264: (HH, BH, LH) => {
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L132-L133` → after: `L1103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR1103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/236.js#L1103) · [Before (L132-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/236.js#L132-L133)

```diff
-       c: () => yU,
-       f: () => QU
+       d: () => hH
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L135` → after: `L1105-L1137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR1105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L1105-L1137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/236.js#L1105-L1137) · [Before (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/236.js#L135)

```diff
-     let cU = null;
+     var AH = LH(1998),
+       rH = LH(1502);
+     const SH = new class {
+       constructor() {
+         this.pending = new Map, this.userContext = null, this.timer = null, this.lastSentAt = -1 / 0, this.watchingVisibility = !1
+       }
+       save(HH, BH) {
+         HH !== this.userContext && this.sendHeld(), this.userContext = HH;
+         for (const [AH, rH] of BH) this.pending.set(AH, rH);
+         if (null !== this.timer) return;
+         const LH = this.lastSentAt + 1100 - Date.now();
+         LH <= 0 ? this.send(HH) : (this.timer = setTimeout((() => {
+           this.sendHeld()
+         }), LH), this.watchingVisibility || (this.watchingVisibility = !0, document.addEventListener("visibilitychange", (() => {
+           "hidden" === document.visibilityState && this.sendHeld()
+         }))))
+ ... (17 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L138-L141` → after: `L1140-L1153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR1140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L1140-L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/236.js#L1140-L1153) · [Before (L138-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/236.js#L138-L141)

```diff
-       cU = {
-         conn: UU,
-         reason: XU
-       }
+       for (const [LH, AH] of BH) HH.setPlayerCosmetics(LH, AH);
+       if (null === AH.gameBridge.latest("connectedGame").websocketUrl) SH.save(HH, BH);
+       else
+         for (const [LH, rH] of BH) AH.gameBridge.send("updateMyCosmetic", {
+           rh: LH,
+           Sh: rH
+         })
+     }
+   },
+   37112: (HH, BH, LH) => {
+     function AH(HH, BH, LH) {
+       if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(HH, BH).getContext("2d", LH);
+       const AH = document.createElement("canvas");
+       return AH.width = HH, AH.height = BH, AH.getContext("2d", LH)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L144-L147` → after: `L1156-L1157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR1156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L1156-L1157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/236.js#L1156-L1157) · [Before (L144-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/236.js#L144-L147)

```diff
-     function QU(UU) {
-       var XU;
-       const zU = (null === (XU = cU) || void 0 === XU ? void 0 : XU.conn) === UU ? cU.reason : null;
-       return cU = null, zU
+     function rH(HH, BH) {
+       return HH.getContext("2d", BH)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L150` → after: `L1164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR1164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L1164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/236.js#L1164) · [Before (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/236.js#L150)

```diff
-   42091: (UU, XU, zU) => {
+   37162: (HH, BH, LH) => {
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L152-L153` → after: `L1166-L1169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR1166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L1166-L1169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/236.js#L1166-L1169) · [Before (L152-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/236.js#L152-L153)

```diff
-       b: () => QU,
-       d: () => yU
+       e: () => EH,
+       h: () => zH,
+       k: () => tH,
+       l: () => CH
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L155-L158` → after: `L1171-L1174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR1171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L1171-L1174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/236.js#L1171-L1174) · [Before (L155-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/236.js#L155-L158)

```diff
-     let cU = {
-       fire: () => {},
-       close: () => {}
-     };
+     var AH = LH(2010);
+     let rH = null,
+       SH = 0;
+     const hH = new Set;
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L160-L161` → after: `L1176-L1177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR1176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L1176-L1177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/236.js#L1176-L1177) · [Before (L160-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/236.js#L160-L161)

```diff
-     function yU(UU) {
-       cU = UU
+     function tH() {
+       return rH
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/237.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/237.js` (18 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab)

#### 1. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L5-L77` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/237.js#L4-L6) · [Before (L5-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/237.js#L5-L77)

```diff
-   40462: (UU, XU, zU) => {
-     UU.exports = yU;
-     var cU = zU(352);
- 
-     function yU(UU, XU) {
-       if (!(this instanceof yU)) return new yU(UU, XU);
-       var zU = cU.create();
-       cU.add(zU, UU, XU), this.base = cU.min(cU.create(), UU, zU), this.vec = cU.clone(XU), this.max = cU.max(cU.create(), UU, zU), this.mag = cU.length(this.vec)
-     }
-     var QU = yU.prototype;
-     QU.width = function() {
-       return this.vec[0]
-     }, QU.height = function() {
-       return this.vec[1]
-     }, QU.depth = function() {
-       return this.vec[2]
- ... (57 more removed lines; see GitHub link above)
+   44796: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       CharacterPreview: () => WH
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L79-L80` → after: `L8-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L8-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/237.js#L8-L17) · [Before (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/237.js#L79-L80)

```diff
-     var cU = zU(4460);
-     let yU = null;
+     var AH = LH(45),
+       rH = LH(3018),
+       SH = LH(1182),
+       hH = LH(2760),
+       tH = LH(35016),
+       zH = LH(3991),
+       CH = LH(37112),
+       EH = LH(37135),
+       XH = LH(37157),
+       GH = LH(1225);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L83-L120` → after: `L20-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L20-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/237.js#L20-L38) · [Before (L83-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/237.js#L83-L120)

```diff
-       return null !== yU && UU === yU
-     }
- 
-     function AU() {
-       this.HJ = !1, this.stopPropagation = !1, this.MJ = !1, this.disabled = !1
-     }
-     class FU {
-       constructor(UU, XU) {
-         this.version = "0.7.0";
-         var zU = Object.assign({}, new AU, XU || {});
-         this.element = UU || document, this.HJ = !!zU.HJ, this.stopPropagation = !!zU.stopPropagation, this.MJ = !!zU.MJ, this.disabled = !!zU.disabled, this.filterEvents = (UU, XU) => !0, this.ignoreEvent = UU => !1, this.down = new cU.EventEmitter, this.up = new cU.EventEmitter … [truncated]
-           dx: 0,
-           dy: 0,
-           UzU: 0,
-           XzU: 0,
-           zzU: 0
- ... (22 more removed lines; see GitHub link above)
+       let {
+         nametag: BH
+       } = HH;
+       const LH = (0, AH.useRef)(null),
+         {
+           height: SH
+         } = (0, rH.c)(LH),
+         [hH, tH] = (0, AH.useState)(!1),
+         {
+           name: zH,
+           ranks: YH,
+           nameColour: uH
+         } = BH;
+       return (0, AH.useEffect)((() => {
+         let HH = !0;
+         return XH.h.untilLoadedFor(zH).then((() => {
+ ... (3 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L122-L128` → after: `L40-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L40-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/237.js#L40-L64) · [Before (L122-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/237.js#L122-L128)

```diff
-       }
-       getBindings() {
-         var UU = {};
-         for (var XU in this._keyBindmap) {
-           this._keyBindmap[XU].forEach((zU => {
-             UU[zU] = UU[zU] || [], UU[zU].push(XU)
-           }))
+       }), [zH]), (0, AH.useEffect)((() => {
+         if (!hH || SH <= 0) return;
+         const HH = LH.current,
+           BH = (0, CH.d)(HH),
+           AH = () => {
+             const LH = (0, EH.e)({
+               name: zH,
+               ranks: YH,
+               colour: uH,
+               player: !1
+             }, BH, XH.o, {
+               nameAsGiven: !0
+             });
+             if (null === LH) return HH.width = 0, void(HH.height = 0);
+             const AH = SH * devicePixelRatio / LH.height;
+             HH.width = Math.ceil(LH.width * AH), HH.height = Math.ceil(LH.height * AH), BH.scale(AH, AH), LH.draw(BH)
+ ... (9 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L130-L179` → after: `L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/237.js#L66) · [Before (L130-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/237.js#L130-L179)

```diff
-         return UU
-       }
-       LY() {
-         oU(this.vJ), oU(this.pressCount), oU(this.releaseCount)
-       }
-     }
- 
-     function oU(UU) {
-       for (var XU in UU) UU[XU] = 0
-     }
- 
-     function DU(UU) {
-       window.addEventListener("keydown", tU.bind(null, UU, !0), !1), window.addEventListener("keyup", tU.bind(null, UU, !1), !1);
-       var XU = {
-         passive: !0
-       };
- ... (34 more removed lines; see GitHub link above)
+       })
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L181` → after: `L68-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L68-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/237.js#L68-L221) · [Before (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/237.js#L181)

```diff
- 
+     let uH = null;
+     const QH = .6 * Math.PI,
+       WH = (0, AH.memo)((0, AH.forwardRef)((function(HH, BH) {
+         let {
+           onReady: LH,
+           onDrawn: CH,
+           owner: EH = "other",
+           framing: XH = "player",
+           forcedCosmetics: WH,
+           zE: MH,
+           emotePlaySeq: xH,
+           turntableFromYaw: vH = null,
+           nametag: PH
+         } = HH;
+         const TH = (0, AH.useRef)(null),
+           {
+ ... (138 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L183-L197` → after: `L223-L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L223-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/237.js#L223-L225) · [Before (L183-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/237.js#L183-L197)

```diff
-       if (!UU.ignoreEvent(zU)) try {
-         WU(UU, zU)
-       } finally {
-         ! function(UU, XU, zU) {
-           if ("pointerId" in zU)
-             if (XU) {
-               if (null !== UU._touches.currID) return;
-               UU._touches.currID = zU.pointerId
-             } else {
-               if (UU._touches.currID !== zU.pointerId) return;
-               UU._touches.currID = null
-             } var cU = "button" in zU ? zU.button + 1 : 1;
-           LU("Mouse" + cU, XU, UU, zU)
-         }(UU, XU, zU)
-       }
+       if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(HH, BH).getContext("2d", LH);
+       const AH = document.createElement("canvas");
+       return AH.width = HH, AH.height = BH, AH.getContext("2d", LH)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L201-L263` → after: `L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/237.js#L229) · [Before (L201-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/237.js#L201-L263)

```diff
-       var zU = XU.movementX || XU.mozMovementX || 0,
-         cU = XU.movementY || XU.mozMovementY || 0;
-       if (XU.touches && 0 === (zU | cU)) {
-         var yU = function(UU) {
-           pU(UU);
-           for (let XU = 0; XU < UU.changedTouches.length; ++XU)
-             if (UU.changedTouches[XU].identifier == NU) {
-               const zU = UU.changedTouches[XU],
-                 cU = [zU.clientX - EU, zU.clientY - YU];
-               return EU = zU.clientX, YU = zU.clientY, cU
-             } return console.error(`Did not find touch id ${NU}`), [0, 0]
-         }(XU);
-         zU = yU[0], cU = yU[1]
-       }
-       UU.vJ.dx += zU, UU.vJ.dy += cU
-     }
- ... (47 more removed lines; see GitHub link above)
+       return HH.getContext("2d", BH)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L266-L269` → after: `L248-L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L248-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/237.js#L248-L249) · [Before (L266-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/237.js#L266-L269)

```diff
-     function WU(UU, XU) {
-       var zU = UU._modifiersHeldThroughBlur;
-       if (zU && XU.isTrusted && document.hasFocus())
-         for (var cU in zU) delete zU[cU], UU._keyStates[cU] && cU !== XU.code && (RU(XU, cU) || dU(UU, cU))
+     function tH() {
+       return rH
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L272-L284` → after: `L252-L253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L252-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/237.js#L252-L253) · [Before (L272-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/237.js#L272-L284)

```diff
-     function dU(UU, XU) {
-       const zU = {
-           code: XU,
-           preventDefault: () => {},
-           stopPropagation: () => {}
-         },
-         cU = yU;
-       yU = zU;
-       try {
-         LU(XU, !1, UU, zU)
-       } finally {
-         yU = cU
-       }
+     function zH() {
+       return SH
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L287-L303` → after: `L256-L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L256-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/237.js#L256-L258) · [Before (L287-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/237.js#L287-L303)

```diff
-     function LU(UU, XU, zU, cU) {
-       var yU = zU._keyBindmap[UU];
-       yU && (eU(zU._keyStates[UU], XU) && (zU._keyStates[UU] = XU, yU.forEach((UU => {
-         (!zU.filterEvents || zU.filterEvents(cU, UU)) && function(UU, XU, zU, cU) {
-           var yU = XU ? zU.pressCount : zU.releaseCount;
-           yU[UU] = (yU[UU] || 0) + 1;
-           var QU = zU._bindPressCount[UU] || 0;
-           (QU += XU ? 1 : -1) < 0 && (QU = 0);
-           zU._bindPressCount[UU] = QU;
-           var AU = zU.state[UU];
-           if (eU(AU, QU)) {
-             zU.state[UU] = QU > 0;
-             var FU = XU ? zU.down : zU.up;
-             zU.disabled || FU.emit(UU, cU)
-           }
-         }(UU, XU, zU, cU)
- ... (1 more removed lines; see GitHub link above)
+     function CH(HH) {
+       rH = HH, SH++, (0, AH.e)();
+       for (const BH of hH) BH()
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L312-L318` → after: `L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/237.js#L262) · [Before (L312-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/237.js#L312-L318)

```diff
-       if (UU && "object" === typeof UU) {
-         var XU = UU.which || UU.keyCode || UU.charCode;
-         XU && (UU = XU)
-       }
-       if ("number" === typeof UU) return AU[UU];
-       var zU, QU = String(UU);
-       return (zU = cU[QU.toLowerCase()]) ? zU : (zU = yU[QU.toLowerCase()]) || (1 === QU.length ? QU.charCodeAt(0) : void 0)
+       hH.add(HH)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L407-L481` → after: `L265-L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L265-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/237.js#L265-L267) · [Before (L407-L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/237.js#L407-L481)

```diff
-   40443: (UU, XU, zU) => {
-     zU.d(XU, {
-       d: () => cU
-     });
-     class cU {
-       constructor() {
-         let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
-           XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
-         this.YV = !1, this.tV = !1, this.bq = 30, this.zV = 0, this.GV = 100, this.Tt = !1, this.fullscreen = !1, this.aG = function(UU) {}, this.RV = function(UU, XU, zU) {}, this.wY = function() {}, this.QG = function() {}, this.wV = function() {}, this.onFullscreenChanged = fu … [truncated]
-           function(UU) {
-             if ("loading" === document.readyState) {
-               var XU = () => {
-                 document.removeEventListener("readystatechange", XU), UU()
-               };
-               document.addEventListener("readystatechange", XU)
-             } else setTimeout(UU, 0)
- ... (59 more removed lines; see GitHub link above)
+   37177: (HH, BH, LH) => {
+     function AH() {
+       return LH(37184)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L485-L486` → after: `L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/237.js#L271) · [Before (L485-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/237.js#L485-L486)

```diff
-       let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
-       this.nowObject = performance || Date, this.pollTime = UU, this.renderAccum = 0, this.lastTickStarted = 0, this.lastFrameStarted = 0, this.lastRenderStarted = 0, this.avgTickTime = 2, this.frameCB = null, this.intervalCB = null, this.intervalID = -1
+       return LH(37187)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L492-L706` → after: `L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/237.js#L275) · [Before (L492-L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/237.js#L492-L706)

```diff
-       for (var XU = UU._data, zU = 1e3 / UU.bq, cU = XU.nowObject.now() + AU, yU = 0; XU.nowObject.now() >= XU.lastTickStarted + zU && XU.nowObject.now() < cU && ++yU <= QU;) UU.aG(zU), XU.lastTickStarted += zU;
-       var FU = 5 * (zU + 5),
-         oU = XU.nowObject.now();
-       if (oU - XU.lastTickStarted > FU)
-         for (; oU >= XU.lastTickStarted + zU;) XU.lastTickStarted += zU
-     }
-   },
-   37429: (UU, XU, zU) => {
-     zU.d(XU, {
-       e: () => AU
-     });
-     var cU = zU(61);
-     const yU = cU.useLayoutEffect;
-     const QU = function(UU) {
-       var XU = (0, cU.useRef)(UU);
-       return yU((function() {
- ... (199 more removed lines; see GitHub link above)
+       return ["pl", "ru", "tr", "uk", "vi"].includes(HH)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L714-L872` → after: `L279-L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L279-L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/237.js#L279-L281) · [Before (L714-L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/237.js#L714-L872)

```diff
-       g: () => FU
-     });
-     var cU = zU(37923);
-     class yU {
-       constructor(UU, XU, zU) {
-         this.gradient = UU, this.color1 = XU, this.color2 = zU
-       }
-       getColorToRef(UU) {
-         this.color2 ? cU.e.LerpToRef(this.color1, this.color2, Math.random(), UU) : UU.YL(this.color1)
-       }
-     }
-     class QU {
-       constructor(UU, XU) {
-         this.gradient = UU, this.color = XU
-       }
-     }
- ... (143 more removed lines; see GitHub link above)
+       h: () => AH,
+       k: () => rH
+     })
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L874-L967` → after: `L283-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L283-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/237.js#L283-L284) · [Before (L874-L967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/237.js#L874-L967)

```diff
-   39484: (UU, XU, zU) => {
-     zU.d(XU, {
-       b: () => FU,
-       f: () => AU
-     });
-     var cU = zU(37819),
-       yU = zU(37855),
-       QU = zU(39486);
-     class AU {
-       constructor() {
-         let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
-           XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
-           zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
-           yU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-         this.radius = UU, this.height = XU, this.radiusRange = zU, this.directionRandomizer = yU, this._tempVector = cU.q.Zero()
-       }
- ... (78 more removed lines; see GitHub link above)
+   37184: (HH, BH, LH) => {
+     HH.exports = LH.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L969-L1192` → after: `L286-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L286-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/237.js#L286-L287) · [Before (L969-L1192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/237.js#L969-L1192)

```diff
-   39617: (UU, XU, zU) => {
-     zU.d(XU, {
-       b: () => YU
-     });
-     const cU = .5 * (Math.sqrt(3) - 1),
-       yU = (3 - Math.sqrt(3)) / 6,
-       QU = 1 / 3,
-       AU = 1 / 6,
-       FU = (Math.sqrt(5) - 1) / 4,
-       oU = (5 - Math.sqrt(5)) / 20,
-       DU = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
-       EU = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0,  … [truncated]
-     const YU = class {
-       constructor() {
-         let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
-         const XU = "function" == typeof UU ? UU : function(UU) {
- ... (208 more removed lines; see GitHub link above)
+   37187: (HH, BH, LH) => {
+     HH.exports = LH.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/238.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/238.js` (38 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94)

#### 1. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/238.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/238.js#L4-L6)

```diff
-   42174: (UU, XU, zU) => {
-     zU.r(XU), zU.d(XU, {
-       LobbyManageView: () => RX
+   37139: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => tH
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L8-L106` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/238.js#L8) · [Before (L8-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/238.js#L8-L106)

```diff
-     var cU = zU(61),
-       yU = zU(1521),
-       QU = zU(37740),
-       AU = zU(2627),
-       FU = zU(2635),
-       oU = zU(2616),
-       DU = zU(37279);
- 
-     function EU() {
-       const [UU, XU] = (0, cU.useState)(new Map);
-       return {
-         get: XU => UU.get(XU),
-         hold: (0, cU.useCallback)(((UU, zU, cU) => {
-           XU((XU => new Map(XU).set(UU, zU))), cU.then((() => {
-             XU((XU => {
-               const zU = new Map(XU);
- ... (83 more removed lines; see GitHub link above)
+     var AH = LH(1168);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L109-L119` → after: `L11-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L11-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/238.js#L11-L12) · [Before (L109-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/238.js#L109-L119)

```diff
-       let {
-         status: XU
-       } = UU;
-       return (0, uU.jsx)("span", {
-         className: NU()("LobbyManageStatus", {
-           LobbyManageStatusRefused: !XU.ok
-         }),
-         children: (0, uU.jsx)(SU.d, {
-           text: XU.text
-         })
-       })
+       const BH = /(\d*\.?\d+)px/.exec(HH);
+       return BH ? Number(BH[1]) : null
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L123-L159` → after: `L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/238.js#L16) · [Before (L123-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/238.js#L123-L159)

```diff
-       let {
-         names: XU,
-         cap: zU,
-         filterFrom: yU,
-         moreLabel: QU,
-         reveal: AU = null,
-         renderRow: FU
-       } = UU;
-       const {
-         t: oU
-       } = (0, IU.I)(), [DU, EU] = (0, cU.useState)(!1), [YU, NU] = (0, cU.useState)(""), aU = DU || null !== AU && XU.indexOf(AU) >= zU, gU = (aU || XU.length <= zU) && null !== yU && XU.length > yU, kU = YU.trim().toLowerCase();
-       let GU = aU ? XU : XU.slice(0, zU);
-       return gU && "" !== kU && (GU = GU.filter((UU => UU.toLowerCase().includes(kU)))), (0, uU.jsxs)(uU.Fragment, {
-         children: [gU && (0, uU.jsx)(rU.e, {
-           className: "LobbyManageFilter",
-           placeholderText: oU("lobbyManage:findName"),
- ... (21 more removed lines; see GitHub link above)
+       return HH.split(/[\s,]+/).pop()
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L161-L238` → after: `L18-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L18-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/238.js#L18-L32) · [Before (L161-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/238.js#L161-L238)

```diff
- 
-     function HU(UU) {
-       let {
-         value: XU,
-         placeholder: zU,
-         ariaLabel: yU,
-         maxLength: QU,
-         wide: AU = !1,
-         onSave: FU
-       } = UU;
-       const oU = (0, cU.useRef)(null),
-         [DU, EU] = (0, cU.useState)(0),
-         YU = (0, cU.useRef)(!0),
-         IU = (0, cU.useRef)(null),
-         pU = (0, cU.useRef)({
-           value: XU,
- ... (62 more removed lines; see GitHub link above)
+     let hH = !1;
+     const tH = {
+       debug: !1,
+       align: "center",
+       vAlign: "middle",
+       fontSize: 14,
+       fontWeight: "",
+       fontStyle: "",
+       fontVariant: "",
+       font: "Arial",
+       lineHeight: null,
+       justify: !1,
+       drawText: function(HH, BH, AH, tH, zH, CH) {
+         if (zH <= 0 || CH <= 0 || this.fontSize <= 0) return {
+           height: 0
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L242-L542` → after: `L35-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L35-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/238.js#L35-L59) · [Before (L242-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/238.js#L242-L542)

```diff
-           player: zU
-         } = UU, cU = "here" === UU.section, yU = cU || "none" !== zU.role ? zU.can.roles : [], QU = cU && XU && null !== zU.gamemode && zU.can.gamemode;
-         return {
-           gamemode: QU,
-           roles: yU,
-           fixedRole: 0 !== yU.length || "none" === zU.role && !QU ? null : zU.role,
-           kick: cU && zU.can.kick,
-           ban: zU.can.ban,
-           unban: !1
-         }
-       }(FU, null !== ZU.gamemodes), wU = YU.statusOf(RU), SU = YU.isPending(RU), rU = EU(), iU = Date.now(), HU = UU => {
-         var XU, zU;
-         return null !== (XU = null === (zU = (UU => ZU.roles.find((XU => XU.role === UU)))(UU)) || void 0 === zU ? void 0 : zU.label) && void 0 !== XU ? XU : UU
-       }, VU = UU => {
-         const XU = vU[UU];
-         return void 0 === XU ? void 0 : tU(XU)
- ... (285 more removed lines; see GitHub link above)
+           fontStyle: EH,
+           fontVariant: XH,
+           fontWeight: GH,
+           fontSize: YH,
+           font: uH
+         } = this, QH = [EH, XH, GH, `${YH}px`, uH].filter(Boolean).join(" "), WH = [
+           [GH, `${YH}px`, SH(uH)].filter(Boolean).join(" "), `${YH}px sans-serif`
+         ], MH = HH.font, xH = function(HH, BH, LH) {
+           for (const AH of BH) {
+             HH.font = AH;
+             const BH = rH(HH.font),
+               hH = SH(AH);
+             if (null !== BH && Math.abs(BH - LH) <= .5 && HH.font.toLowerCase().includes(hH.toLowerCase())) return AH
+           }
+           return null
+         }(HH, [QH, ...WH], YH);
+ ... (9 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L544-L673` → after: `L61-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L61-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/238.js#L61-L69) · [Before (L544-L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/238.js#L544-L673)

```diff
-           }), (0, uU.jsx)(iU, {
-             names: ZU.here,
-             cap: ZU.here.length,
-             filterFrom: 20,
-             moreLabel: "",
-             renderRow: CU("here")
-           })]
-         }), ZU.away.length > 0 && (0, uU.jsxs)("div", {
-           className: "LobbyManageBox",
-           children: [(0, uU.jsx)(tU.b, {
-             label: DU("lobbyManage:notHere"),
-             meta: ZU.away.length
-           }), (0, uU.jsx)(iU, {
-             names: ZU.away,
-             cap: 5,
-             filterFrom: null,
- ... (114 more removed lines; see GitHub link above)
+           })).catch((() => {})))
+         }(QH, MH, xH);
+         const vH = rH(HH.font);
+         if (null === xH && null !== vH && vH > 0) {
+           const LH = YH / vH;
+           HH.save();
+           try {
+             return HH.scale(LH, LH), {
+               height: this.drawLines(HH, BH, AH / LH, tH / LH, zH / LH, CH / LH, vH).height * LH
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L808-L818` → after: `L75-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L75-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/238.js#L75-L83) · [Before (L808-L818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/238.js#L808-L818)

```diff
-       }), []), (0, uU.jsx)("input", {
-         ref: QU,
-         type: "color",
-         className: "LobbyManageColour",
-         defaultValue: XU,
-         "aria-label": zU,
-         onInput: () => {
-           oU.current = !0
-         },
-         onBlur: UU => {
-           DU(UU.currentTarget)
+         return this.drawLines(HH, BH, AH, tH, zH, CH, YH)
+       },
+       drawLines: function(HH, BH, LH, rH, SH, hH, tH) {
+         const zH = LH + SH,
+           CH = rH + hH;
+         let EH, XH = rH + hH / 2 + tH / 2;
+         "right" === this.align ? (EH = zH, HH.textAlign = "right") : "left" === this.align ? (EH = LH, HH.textAlign = "left") : (EH = LH + SH / 2, HH.textAlign = "center");
+         for (const AH of BH) {
+           HH.measureText(AH).width >= SH && (BH = BH.replace(AH, ""))
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L820-L1143` → after: `L85-L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L85-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/238.js#L85-L105) · [Before (L820-L1143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/238.js#L820-L1143)

```diff
-       })
-     }
- 
-     function cX(UU) {
-       let {
-         manage: XU
-       } = UU;
-       const {
-         lobbyName: zU,
-         shownLobbyName: cU
-       } = (0, GU.i)("connectedGame");
-       return XU.state.you.canSetVisibility && null !== zU ? (0, uU.jsx)(QX, {
-         manage: XU,
-         lobbyName: zU,
-         worldCode: null !== cU && void 0 !== cU ? cU : zU
-       }, zU) : (0, uU.jsx)(AX, {
- ... (308 more removed lines; see GitHub link above)
+         BH = (0, AH.X)(BH);
+         const GH = [],
+           YH = BH.split("\n"),
+           uH = this.justify ? HH.measureText("\u200a").width : 0;
+         YH.forEach((BH => {
+           let LH = HH.measureText(BH).width;
+           if (LH <= SH) GH.push(BH);
+           else {
+             let AH = BH;
+             const rH = SH;
+             let hH, tH, zH;
+             for (LH = HH.measureText(AH).width; LH > rH;) {
+               for (hH = 0, tH = 0, zH = ""; tH < rH;) hH++, zH = AH.substr(0, hH), tH = HH.measureText(zH).width;
+               hH--, zH = zH.substr(0, hH);
+               const BH = hH;
+               if (" " !== AH.substr(hH, 1)) {
+ ... (5 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L1145-L1238` → after: `L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/238.js#L107) · [Before (L1145-L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/238.js#L1145-L1238)

```diff
-           }), tU.length > 0 && tU.length <= 3 && tU.map((UU => (0, uU.jsx)(BU.j, {
-             className: "SmallTextLight",
-             disabled: QU,
-             onClick: () => {
-               YU(UU.value)
-             },
-             children: UU.label
-           }, UU.value))), 0 === tU.length && (0, uU.jsx)(BU.j, {
-             className: "SmallTextLight",
-             disabled: QU,
-             onClick: () => {
-               YU()
-             },
-             children: null !== aU && void 0 !== aU ? aU : NU
-           })]
-         }), "names" === zU.kind && (0, uU.jsx)(YX, {
- ... (78 more removed lines; see GitHub link above)
+             LH > 0 && GH.push(AH)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L1242-L1361` → after: `L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/238.js#L118) · [Before (L1242-L1361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/238.js#L1242-L1361)

```diff
-           group: cU,
-           title: yU,
-           items: QU
-         }
-       }))
-     }
- 
-     function pX(UU) {
-       return UU.flatMap((UU => {
-         let {
-           items: XU
-         } = UU;
-         return XU.flatMap((UU => {
-           let {
-             rule: XU,
-             children: zU
- ... (104 more removed lines; see GitHub link above)
+           height: WH + QH
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L1364-L1568` → after: `L121-L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L121-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/238.js#L121-L143) · [Before (L1364-L1568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/238.js#L1364-L1568)

```diff
-       gX = 5,
-       kX = (0, cU.memo)((function(UU) {
-         let {
-           page: XU,
-           manage: zU,
-           leaderboard: yU,
-           focusRequest: QU,
-           onFocused: AU,
-           ruleRowsShown: FU
-         } = UU;
-         return "leaderboard" === XU ? (0, uU.jsx)(cU.Suspense, {
-           fallback: (0, uU.jsx)("div", {
-             className: "LobbyManageLoading",
-             children: (0, uU.jsx)(aU.b, {})
-           }),
-           children: yU
- ... (189 more removed lines; see GitHub link above)
+       getTextHeight: function(HH, BH) {
+         const LH = HH.textBaseline;
+         HH.textBaseline = "bottom";
+         const {
+           actualBoundingBoxAscent: AH
+         } = HH.measureText(BH);
+         return HH.textBaseline = LH, AH
+       },
+       justifyLine: function(HH, BH, LH, AH, rH) {
+         const SH = BH.trim(),
+           hH = HH.measureText(SH).width,
+           tH = SH.split(/\s+/).length - 1,
+           zH = Math.floor((rH - hH) / LH);
+         if (tH <= 0 || zH <= 0) return SH;
+         const CH = Math.floor(zH / tH);
+         let EH = zH - tH * CH,
+ ... (7 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L1629` → after: `L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/238.js#L147) · [Before (L1629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/238.js#L1629)

```diff
-   37279: (UU, XU, zU) => {
+   37149: (HH, BH, LH) => {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L1634-L1638` → after: `L155-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L155-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/238.js#L155-L163) · [Before (L1634-L1638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/238.js#L1634-L1638)

```diff
-     var cU = zU(1521),
-       yU = zU(2032),
-       QU = zU(2005);
-     const AU = 1e4;
-     let FU = 0;
+     var AH = LH(4617),
+       rH = LH(317);
+     const SH = 1024,
+       hH = 1536,
+       tH = 2 * AH.m + 1,
+       zH = new Intl.NumberFormat("en", {
+         maximumSignificantDigits: 15
+       }),
+       CH = 1.5;
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L1640-L1717` → after: `L165-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L165-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/238.js#L165-L171) · [Before (L1640-L1717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/238.js#L1640-L1717)

```diff
-     function oU(UU) {
-       const XU = ++FU;
-       return new Promise((zU => {
-         const FU = XU => {
-             oU(), clearTimeout(DU), !1 === (null === XU || void 0 === XU ? void 0 : XU.ok) && (0, cU.reportAnalyticsClick)({
-               id: "lobby_manage.refused",
-               value: UU.type
-             }), zU(XU)
-           },
-           oU = yU.d.subscribe("lobbyManage", (UU => {
-             const zU = function(UU, XU) {
-               var zU;
-               return null !== (zU = null === UU || void 0 === UU ? void 0 : UU.results.find((UU => UU.requestId === XU))) && void 0 !== zU ? zU : null
-             }(UU, XU);
-             null !== zU && FU(zU)
-           })),
- ... (62 more removed lines; see GitHub link above)
+     function EH(HH, BH, LH) {
+       if ("string" !== typeof HH) return BH;
+       try {
+         const LH = JSON.parse(HH);
+         return LH && "object" === typeof LH ? LH : BH
+       } catch (AH) {
+         return void 0 !== LH && console.error(`Couldn't parse ${LH}`, AH), BH
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L1814-L1864` → after: `L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/238.js#L176) · [Before (L1814-L1864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/238.js#L1814-L1864)

```diff
-       let {
-         visibility: XU,
-         onPick: zU
-       } = UU;
-       const {
-         t: yU
-       } = (0, AU.I)(), YU = (0, cU.useRef)([]);
-       return (0, oU.jsx)("div", {
-         className: "WorldSocialTiles",
-         role: "group",
-         "aria-label": yU("worldSocial:whoCanJoin"),
-         children: EU.map(((UU, cU) => {
-           const AU = UU === XU;
-           return (0, oU.jsxs)("button", {
-             ref: UU => {
-               YU.current[cU] = UU
- ... (35 more removed lines; see GitHub link above)
+       return EH(HH, null, "a leaderboard's rows")
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L1876-L1913` → after: `L179-L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L179-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/238.js#L179-L184) · [Before (L1876-L1913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/238.js#L1876-L1913)

```diff
-     function FU(UU) {
-       let {
-         LY: XU,
-         children: zU,
-         ...FU
-       } = UU;
-       const {
-         t: oU
-       } = (0, cU.I)();
-       return (0, AU.jsx)("div", {
-         className: "WhitelistTickRow",
-         onClick: () => {
-           XU.onChange(!XU.on)
-         },
-         children: (0, AU.jsx)(yU.f, {
-           ...FU,
- ... (22 more removed lines; see GitHub link above)
+     function GH(HH, BH) {
+       var LH, AH;
+       return null !== BH && void 0 !== BH ? BH : {
+         status: null !== (LH = HH.status) && void 0 !== LH ? LH : "loading",
+         entries: null !== (AH = HH.entries) && void 0 !== AH ? AH : []
+       }
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L1932-L1990` → after: `L187-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L187-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/238.js#L187-L188) · [Before (L1932-L1990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/238.js#L1932-L1990)

```diff
-     function pU(UU) {
-       let {
-         worldCode: XU,
-         message: zU
-       } = UU;
-       const {
-         t: pU
-       } = (0, yU.I)(), {
-         isTouchScreen: aU
-       } = (0, FU.q)(["isTouchScreen"]), tU = AU.featureFlags.canUseInviteLinks, gU = (0, EU.j)(tU && null === zU), [kU, GU] = (0, DU.h)(), BU = (0, cU.useRef)(null);
-       if (null !== zU) return (0, IU.jsxs)("div", {
-         className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
-         children: [(0, IU.jsx)(NU.d, {
-           name: "lock"
-         }), (0, IU.jsx)("span", {
-           children: zU
- ... (43 more removed lines; see GitHub link above)
+     function YH(HH, BH) {
+       return "number" === typeof HH && Number.isFinite(HH) && HH > 0 ? HH : BH
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L2009` → after: `L192-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L192-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/238.js#L192-L197) · [Before (L2009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/238.js#L2009)

```diff
-       var zU;
+       const LH = YH(HH.size, 1);
+       let AH = YH(HH.width, YH(2.5 * LH, 2.5)),
+         rH = YH(HH.height, YH(3.75 * LH, 3.75));
+       Number.isFinite(SH * rH / AH) && Number.isFinite(hH * AH / rH) || (AH = 2.5, rH = 3.75);
+       const tH = rH / AH,
+         zH = Math.max(1, Math.min(SH, BH / tH));
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L2011-L2018` → after: `L199-L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L199-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/238.js#L199-L204) · [Before (L2011-L2018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/238.js#L2011-L2018)

```diff
-         isError: !1,
-         name: UU,
-         ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
-         cosmetics: null !== XU && void 0 !== XU ? XU : {},
-         nameColour: null !== (zU = null === XU || void 0 === XU ? void 0 : XU.nameColour) && void 0 !== zU ? zU : cU.e,
-         location: {
-           status: "offline"
-         }
+         width: AH,
+         height: rH,
+         layoutWidth: Math.max(SH, hH / tH),
+         layoutHeight: Math.max(hH, SH * tH),
+         pixelWidth: Math.round(zH),
+         pixelHeight: Math.round(Math.max(1, Math.min(BH, zH * tH)))
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L2022-L2065` → after: `L208-L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L208-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/238.js#L208-L303) · [Before (L2022-L2065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/238.js#L2022-L2065)

```diff
-     function NU(UU) {
-       let {
-         player: XU,
-         isFriend: zU = !1,
-         status: cU,
-         showLocation: oU = void 0 === cU,
-         LY: YU,
-         onSendFriendRequest: NU,
-         actions: IU,
-         zIndex: pU
-       } = UU;
-       const {
-         t: aU
-       } = (0, yU.I)();
-       let tU = cU;
-       null !== YU && void 0 !== YU && YU.on && (tU = (0, EU.jsxs)(EU.Fragment, {
- ... (28 more removed lines; see GitHub link above)
+     function QH(HH, BH, LH, hH, EH, XH) {
+       HH.setTransform(1, 0, 0, 1, 0, 0), HH.fillStyle = rH.K.defaultNameTagBackground, HH.fillRect(0, 0, BH, LH), HH.scale(BH / hH.layoutWidth, LH / hH.layoutHeight), HH.translate((hH.layoutWidth - SH) / 2, 0),
+         function(HH, BH, LH, SH) {
+           var hH, EH, XH, GH;
+           const {
+             top: YH,
+             around: uH,
+             showPlayerText: QH,
+             localPlayerDbId: xH
+           } = LH, {
+             whiteUiText: vH,
+             grayUiText: PH,
+             yellowUiText: TH
+           } = rH.K;
+           HH.textBaseline = "middle";
+           const UH = function(BH, LH, AH, rH, SH, hH) {
+ ... (80 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L2068-L2094` → after: `L306-L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L306-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/238.js#L306-L307) · [Before (L2068-L2094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/238.js#L2068-L2094)

```diff
-     function IU(UU) {
-       let {
-         row: XU,
-         LY: zU,
-         canInvite: cU,
-         invited: QU,
-         onInvite: AU,
-         zIndex: FU
-       } = UU;
-       const {
-         t: DU
-       } = (0, yU.I)(), YU = "online" === XU.place ? oU.f : oU.j;
-       return (0, EU.jsx)(NU, {
-         player: XU.friend,
-         isFriend: !0,
-         status: "here" === XU.place ? DU("worldSocial:inThisWorld") : void 0,
- ... (11 more removed lines; see GitHub link above)
+     function WH(HH, BH) {
+       return Array.isArray(HH) ? HH.slice(0, BH).filter((HH => HH && Number.isFinite(HH.rank) && Number.isFinite(HH.value))) : []
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L2107-L2114` → after: `L310-L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L310-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/238.js#L310-L316) · [Before (L2107-L2114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/238.js#L2107-L2114)

```diff
-     function AU(UU) {
-       const XU = {
-         lobbyName: UU,
-         answer: null,
-         response: yU.d.getSocialSettings(UU)
-       };
-       return XU.response.then((UU => {
-         XU.answer = UU
+     function MH(HH, BH) {
+       const LH = [];
+       let AH = !1;
+       return HH.forEach(((rH, SH) => {
+         if (null !== BH && rH.value === BH.value) return void LH.push(BH.rank);
+         const hH = SH > 0 && rH.value === HH[SH - 1].value;
+         hH || (AH = 0 === SH && 1 !== rH.rank), LH.push(hH && !AH ? LH[SH - 1] : rH.rank)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L2117` → after: `L319-L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L319-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/238.js#L319-L325) · [Before (L2117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/238.js#L2117)

```diff
-     const FU = new Map;
+   },
+   37120: (HH, BH, LH) => {
+     LH.d(BH, {
+       b: () => rH,
+       e: () => SH
+     });
+     const AH = 32;
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L2120` → after: `L328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/238.js#L328) · [Before (L2120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/238.js#L2120)

```diff
-       FU.set(UU.lobbyName, UU)
+       return Array.from(HH).length
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L2124-L2149` → after: `L332-L336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L332-L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/238.js#L332-L336) · [Before (L2124-L2149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/238.js#L2124-L2149)

```diff
-       const [XU] = (0, cU.useState)((() => function(UU) {
-         var XU;
-         const zU = null !== (XU = FU.get(UU)) && void 0 !== XU ? XU : null;
-         return null !== zU && void 0 !== zU && zU.answer && "error" in zU.answer ? null : zU
-       }(UU))), [zU, AU] = (0, cU.useState)((() => null !== XU && void 0 !== XU && XU.answer && "settings" in XU.answer ? XU.answer.settings : null)), [oU, DU] = (0, cU.useState)(!0), [EU, YU] = (0, cU.useState)(null !== zU), NU = (0, cU.useRef)(zU);
-       NU.current = zU;
-       const IU = (0, cU.useRef)(0),
-         pU = (0, cU.useRef)(0),
-         aU = (0, cU.useRef)(!1),
-         tU = (0, cU.useRef)(!0),
-         gU = (0, cU.useCallback)((async XU => {
-           const zU = ++IU.current,
-             cU = await (null !== XU && void 0 !== XU ? XU : yU.d.getSocialSettings(UU));
-           tU.current && zU === IU.current && (YU(!0), DU(!1), "error" in cU || AU(cU.settings))
-         }), [UU]),
-         kU = (0, cU.useCallback)((() => {
- ... (10 more removed lines; see GitHub link above)
+       const BH = [""];
+       let LH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+         rH = "";
+       const SH = () => {
+         BH.push(""), LH = 0, rH = ""
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L2151-L2183` → after: `L338-L344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L338-L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/238.js#L338-L344) · [Before (L2151-L2183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/238.js#L2151-L2183)

```diff
-       return {
-         settings: zU,
-         loading: oU,
-         answered: EU,
-         retry: kU,
-         refresh: GU,
-         change: async function(XU, zU) {
-           let {
-             quiet: cU = !1,
-             onAnswer: AU
-           } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
-           const FU = NU.current;
-           if (null === FU) return !1;
-           BU(zU(FU)), pU.current > 0 && (aU.current = !0), pU.current++;
-           const oU = await yU.d.setSocialSettings(UU, XU);
-           pU.current--;
- ... (17 more removed lines; see GitHub link above)
+       for (const hH of HH.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
+         if (/^\r?\n$/.test(hH)) SH();
+         else if (/^\s+$/.test(hH)) rH += hH;
+       else if (hH.length > 0) {
+         const HH = Array.from(hH);
+         LH > 0 && LH + rH.length + HH.length > AH && SH(), BH[BH.length - 1] += rH, LH += rH.length, rH = "";
+         for (const rH of HH) LH >= AH && SH(), BH[BH.length - 1] += rH, LH++
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L2187` → after: `L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/238.js#L349) · [Before (L2187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/238.js#L2187)

```diff
-   37468: (UU, XU, zU) => {
+   37146: (HH, BH, LH) => {
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L2189-L2190` → after: `L351-L363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L351-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/238.js#L351-L363) · [Before (L2189-L2190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/238.js#L2189-L2190)

```diff
-       b: () => AU,
-       e: () => QU
+       C: () => uH,
+       E: () => QH,
+       F: () => MH,
+       c: () => AH,
+       e: () => XH,
+       g: () => rH,
+       h: () => GH,
+       l: () => WH,
+       n: () => EH,
+       r: () => xH,
+       u: () => zH,
+       y: () => CH,
+       z: () => YH
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L2192-L2193` → after: `L365-L380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L365-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/238.js#L365-L380) · [Before (L2192-L2193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/238.js#L2192-L2193)

```diff
-     var cU = zU(173);
-     const yU = new Map;
+     const AH = [{
+       numLines: 7,
+       charsPerLine: 16,
+       uiFontSize: 3.3,
+       ingameFontSize: 25
+     }, {
+       numLines: 5,
+       charsPerLine: 11,
+       uiFontSize: 4.6,
+       ingameFontSize: 36
+     }, {
+       numLines: 3,
+       charsPerLine: 7,
+       uiFontSize: 7.5,
+       ingameFontSize: 58
+     }];
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L2196-L2198` → after: `L383-L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L383-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/238.js#L383-L387) · [Before (L2196-L2198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/238.js#L2196-L2198)

```diff
-       var zU;
-       const cU = null !== (zU = yU.get(UU)) && void 0 !== zU ? zU : new Map;
-       cU.set(XU, Date.now()), yU.set(UU, cU)
+       const {
+         numLines: LH,
+         charsPerLine: rH
+       } = AH[BH];
+       return vH(HH, LH, rH, !1)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L2211-L2231` → after: `L394-L397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L394-L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/238.js#L394-L397) · [Before (L2211-L2231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/238.js#L2211-L2231)

```diff
-       const zU = XU.toLowerCase();
-       for (const cU of UU)
-         if (cU.toLowerCase() === zU) return !0;
-       return !1
-     }
- 
-     function yU(UU, XU, zU) {
-       const yU = [],
-         QU = [],
-         AU = [];
-       for (const FU of UU) !FU.isError && FU.name && ("inGame" === FU.location.status && FU.location.inLobbyName === XU || cU(zU, FU.name) ? QU.push({
-         friend: FU,
-         place: "here"
-       }) : "offline" === FU.location.status ? AU.push({
-         friend: FU,
-         place: "offline"
- ... (5 more removed lines; see GitHub link above)
+       return {
+         width: Math.min(HH, tH) - 2 * hH,
+         height: Math.min(BH, tH) - 2 * hH
+       }
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L2235-L2238` → after: `L401-L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L401-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/238.js#L401-L409) · [Before (L2235-L2238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/238.js#L2235-L2238)

```diff
-       const yU = [],
-         QU = UU.flatMap((UU => "here" === UU.place ? [UU.friend.name] : []));
-       for (const AU of [...QU, ...XU]) cU(yU, AU) || cU(zU, AU) || yU.push(AU);
-       return yU
+       const rH = zH(HH, BH),
+         {
+           numLines: hH,
+           charsPerLine: tH
+         } = AH[LH];
+       return {
+         numLines: Math.max(1, Math.floor(hH / SH * rH.height)),
+         charsPerLine: Math.max(1, Math.floor(tH * rH.width))
+       }
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L2241-L2242` → after: `L412-L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L412-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/238.js#L412-L417) · [Before (L2241-L2242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/238.js#L2241-L2242)

```diff
-     function AU(UU, XU) {
-       return null === UU || void 0 === UU || !UU.canManage || cU(UU.whitelist, XU) ? "none" : "whitelist" === UU.visibility ? "required" : "quiet"
+     function EH(HH, BH, LH, AH) {
+       const {
+         numLines: rH,
+         charsPerLine: SH
+       } = CH(LH, AH, BH);
+       return vH(HH, rH, SH, !1)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L2246-L2250` → after: `L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/238.js#L422) · [Before (L2246-L2250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/238.js#L2246-L2250)

```diff
-       if (null === UU) return !0;
-       const {
-         visibility: XU
-       } = UU;
-       return "public" === XU || "unlisted" === XU || "whitelist" === XU && UU.canManage
+       return HH.slice(0, XH)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L2253-L2264` → after: `L428-L431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L428-L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/238.js#L428-L431) · [Before (L2253-L2264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/238.js#L2253-L2264)

```diff
-     function oU(UU, XU, zU) {
-       if (zU) {
-         const zU = XU.filter((XU => !cU(UU.whitelist, XU)));
-         return {
-           ...UU,
-           whitelist: [...UU.whitelist, ...zU]
-         }
-       }
-       return {
-         ...UU,
-         whitelist: UU.whitelist.filter((UU => !cU(XU, UU)))
-       }
+     function WH(HH, BH) {
+       const LH = Math.max(0, QH - BH),
+         AH = Math.min(YH, LH);
+       return HH.slice(0, AH)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L2268-L2270` → after: `L452-L456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L452-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/238.js#L452-L456) · [Before (L2268-L2270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/238.js#L2268-L2270)

```diff
-       const zU = [];
-       for (let cU = 0; cU < UU.length; cU += XU) zU.push(UU.slice(cU, cU + XU));
-       return zU
+       const {
+         numLines: LH,
+         charsPerLine: AH
+       } = MH[BH];
+       return vH(HH, LH, AH, !1)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L2289-L2302` → after: `L459-L467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L459-L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/238.js#L459-L467) · [Before (L2289-L2302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/238.js#L2289-L2302)

```diff
-     function QU() {
-       const UU = (0, yU.f)("lobbyLeaderboardInfo");
-       return (0, cU.useMemo)((() => function(UU) {
-         if (null === UU) return null;
-         const XU = Object.entries(UU),
-           zU = XU.filter((UU => {
-             let [, XU] = UU;
-             return void 0 !== XU
-           }));
-         if (zU.length === XU.length) return UU;
-         const cU = Object.fromEntries(zU),
-           yU = Object.keys(UU).filter((UU => !Object.hasOwn(cU, UU)));
-         return console.warn(`lobbyLeaderboardInfo left out its undefined columns: ${yU.join(", ")}`), cU
-       }(UU)), [UU])
+     function vH(HH, BH, LH, AH, rH) {
+       (rH || AH) && (HH = HH.slice(0, null !== rH && void 0 !== rH ? rH : BH * LH));
+       const SH = HH.split("\n");
+       if (SH.length > BH && SH.splice(BH, SH.length - BH), !AH)
+         for (let hH = 0; hH < SH.length; hH++) {
+           const HH = SH[hH];
+           HH.length > LH && (SH[hH] = HH.substring(0, LH), SH.length < BH && SH.splice(hH + 1, 0, HH.substring(LH)))
+         }
+       return SH.join("\n")
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/239.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/239.js` (15 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034)

#### 1. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L4-L9` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/239.js#L4-L6) · [Before (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/239.js#L4-L9)

```diff
-   37604: (UU, XU, zU) => {
-     zU.d(XU, {
-       c: () => WU,
-       d: () => RU,
-       h: () => PU,
-       k: () => pU
+   37201: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       CreateCustomLobby: () => IH
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L11` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/239.js#L8-L12) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/239.js#L11)

```diff
-     var cU = zU(1106),
+     LH(37210);
+     var AH = LH(5037),
+       rH = LH(45),
+       SH = LH(1706),
+       hH = LH(1038),
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L13-L21` → after: `L14-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L14-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/239.js#L14-L34) · [Before (L13-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/239.js#L13-L21)

```diff
-       QU = zU(61),
-       AU = zU(73),
-       FU = zU(1427),
-       oU = zU(1494),
-       DU = zU(1420),
-       EU = zU(1294),
-       YU = zU(1193),
-       NU = zU(37612),
-       IU = zU(1305);
+       zH = LH(3473),
+       CH = LH(1070),
+       EH = LH(1131),
+       XH = LH(4991),
+       GH = LH(1455),
+       YH = LH(37215),
+       uH = LH(1123),
+       QH = LH(1306),
+       WH = LH(1509),
+       MH = LH(15),
+       xH = LH(1457),
+       vH = LH(619),
+       PH = LH(5405),
+       TH = LH(761),
+       UH = LH(1182),
+       VH = LH(1168),
+ ... (5 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L24-L34` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/239.js#L37) · [Before (L24-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/239.js#L24-L34)

```diff
-       const [XU, zU] = (0, QU.useState)((() => (0, NU.l)(UU)));
-       return (0, QU.useEffect)((() => (zU((0, NU.l)(UU)), (0, NU.L)((() => {
-         zU((0, NU.l)(UU))
-       })))), [UU]), XU
-     }
- 
-     function aU(UU, XU) {
-       "function" === typeof UU ? UU(XU) : UU && (UU.current = XU)
-     }
- 
-     function tU(UU) {
+       var BH, LH, hH, IH;
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L36-L74` → after: `L39-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L39-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/239.js#L39-L41) · [Before (L36-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/239.js#L36-L74)

```diff
-         tutorial: XU,
-         step: zU,
-         enabled: cU = !0
-       } = UU;
-       const yU = pU(XU);
-       return cU && yU === zU
-     }
- 
-     function gU(UU, XU) {
-       const zU = (0, NU.p)(UU),
-         cU = zU.indexOf(XU);
-       return !zU.slice(cU + 1).some((XU => (0, NU.z)(UU, XU)))
-     }
- 
-     function kU(UU, XU, zU, cU) {
-       let {
- ... (23 more removed lines; see GitHub link above)
+         gameNameWithVariation: fH,
+         close: lH,
+         initialDefaultGamemode: KH
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L78-L82` → after: `L45-L436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L45-L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/239.js#L45-L436) · [Before (L78-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/239.js#L78-L82)

```diff
-       } = (0, YU.I)(), FU = gU(XU, zU);
-       return (0, IU.jsxs)(IU.Fragment, {
-         children: [(0, IU.jsx)("div", {
-           className: "TutorialStepText",
-           children: cU
+       } = (0, uH.B)(), eH = (0, WH.useNavigatePreserveSearch)(), [qH, gH] = (0, rH.useState)("Enter"), [NH, RH] = (0, rH.useState)(""), jH = rH.useRef(null), nH = null === (BH = TH.b[fH]) || void 0 === BH ? void 0 : BH.showWorldsInsteadOfCustomLobbies, FH = nH ? 1 : null === (LH  … [truncated]
+       KH || (KH = "classic_creative" === fH || "classic_creativeFlat" === fH ? "creative" : "classic" === fH ? "peaceful" : "survival");
+       const ZH = {
+         baseOptions: {
+           gameNameWithVariation: nH ? "classic" : fH,
+           name: "",
+           visibility: "unlisted"
+         },
+         listedOptions: {
+           description: "",
+           color: "",
+           emojis: ""
+         },
+         mapOptions: {
+           mapType: "classic_creativeFlat" === fH ? "flat" : "default",
+           schematicIdList: []
+ ... (376 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L84-L86` → after: `L438-L442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L438-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/239.js#L438-L442) · [Before (L84-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/239.js#L84-L86)

```diff
-           className: "TutorialStepButtons",
-           children: [(0, NU.w)(XU, zU) && (0, IU.jsx)(oU.j, {
-             className: "TutorialStepButton",
+           className: "CreateCustomLobbyFooter",
+           children: [(0, oH.jsx)(GH.u, {
+             className: "CreateCustomLobbyButton",
+             padDefaultFocus: !0,
+             loading: "Enter" !== qH,
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L88` → after: `L444-L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L444-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/239.js#L444-L453) · [Before (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/239.js#L88)

```diff
-               null === QU || void 0 === QU || QU(), (0, NU.t)(XU, zU)
+               !async function() {
+                 if ("Enter" === qH) {
+                   gH("Loading"), RH("");
+                   try {
+                     await XH.e.createCustomLobby(dH), gH("Success")
+                   } catch (HH) {
+                     RH(HH.message), console.error(HH.message), gH("Enter")
+                   }
+                 }
+               }()
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L90-L103` → after: `L455-L472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L455-L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/239.js#L455-L472) · [Before (L90-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/239.js#L90-L103)

```diff
-             children: AU("tutorial:back")
-           }), !yU && (0, IU.jsx)(oU.f, {
-             className: "TutorialStepButton",
-             onClick: () => {
-               (0, NU.d)(zU)
-             },
-             padDefaultFocus: !0,
-             children: AU(FU ? "tutorial:done" : "tutorial:next")
-           }), !FU && (0, IU.jsx)(oU.j, {
-             className: "TutorialStepButton",
-             onClick: () => {
-               (0, NU.j)(XU)
-             },
-             children: AU("tutorial:skip")
+             children: cH("general:create")
+           }), nH && (0, oH.jsx)("div", {
+             className: "CreateCustomLobbyAdvancedToggle",
+             "data-pad-ignore": LB || void 0,
+             children: (0, oH.jsx)(PH.g, {
+               label: "customLobby:showAdvancedOptions",
+               disabled: LB,
+               onLabelClick: () => {
+                 wH(!DH)
+               },
+               children: (0, oH.jsx)(PH.e, {
+                 checked: DH,
+                 setChecked: wH
+               })
+             })
+           }), NH && (0, oH.jsx)("div", {
+ ... (2 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L108` → after: `L477-L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L477-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/239.js#L477-L486) · [Before (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/239.js#L108)

```diff
-     const BU = 6;
+   },
+   37228: (HH, BH, LH) => {
+     LH.d(BH, {
+       c: () => zH
+     });
+     var AH = LH(1038),
+       rH = LH.n(AH),
+       SH = LH(45),
+       hH = LH(4978),
+       tH = LH(1225);
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L112-L113` → after: `L490-L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L490-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/239.js#L490-L491) · [Before (L112-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/239.js#L112-L113)

```diff
-         rect: XU,
-         margin: zU
+         locked: BH,
+         children: LH
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L115-L150` → after: `L493-L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L493-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/239.js#L493-L592) · [Before (L115-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/239.js#L115-L150)

```diff
-       const cU = Math.max(0, XU.top - zU),
-         yU = XU.bottom + zU,
-         QU = Math.max(0, XU.left - zU),
-         AU = XU.right + zU;
-       return (0, IU.jsxs)(IU.Fragment, {
-         children: [(0, IU.jsx)("div", {
-           className: "TutorialSpotlightBackdrop",
-           style: {
-             top: 0,
-             left: 0,
-             right: 0,
-             height: cU
-           }
-         }), (0, IU.jsx)("div", {
-           className: "TutorialSpotlightBackdrop",
-           style: {
- ... (20 more removed lines; see GitHub link above)
+       const AH = (0, SH.useRef)(null),
+         zH = (0, hH.d)(AH, "y");
+       return (0, tH.jsx)("div", {
+         ref: AH,
+         className: rH()("CreateCustomLobbyBody", {
+           CreateCustomLobbyBodyMoreAbove: zH.before,
+           CreateCustomLobbyBodyMoreBelow: zH.after
+         }),
+         "data-pad-ignore": BH || void 0,
+         children: LH
+       })
+     }
+   },
+   37215: (HH, BH, LH) => {
+     LH.d(BH, {
+       b: () => EH,
+ ... (84 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L158-L163` → after: `L600-L672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L600-L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/239.js#L600-L672) · [Before (L158-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/239.js#L158-L163)

```diff
-         target: XU,
-         placement: zU,
-         boxRef: cU,
-         className: oU,
-         spotlight: EU = !0,
-         spotlightMargin: YU = BU,
+         ownedSchematics: BH,
+         currentWorldSchematicId: LH,
+         onClose: AH
+       } = HH;
+       rH.NotificationProvider.showCustomPopup({
+         body: HH => (0, CH.jsx)(XH, {
+           ownedSchematics: BH,
+           currentWorldSchematicId: LH,
+           onClose: HH
+         }),
+         middleScreenPopupClassName: "SchematicPopup",
+         onClose: AH,
+         unlockPointerKey: "schematicListPopup"
+       })
+     }
+   },
+ ... (57 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L167-L257` → after: `L676-L701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L676-L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/239.js#L676-L701) · [Before (L167-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/239.js#L167-L257)

```diff
-         getArrowProps: pU,
-         getTooltipProps: aU,
-         setTooltipRef: tU,
-         setTriggerRef: gU,
-         update: kU
-       } = (0, FU.e)({
-         placement: zU,
-         trigger: null,
-         visible: !0,
-         interactive: !0,
-         closeOnOutsideClick: !1,
-         offset: [0, YU]
-       });
-       (0, QU.useLayoutEffect)((() => {
-         gU(XU)
-       }), [XU, gU]);
- ... (75 more removed lines; see GitHub link above)
+         t: GH
+       } = (0, tH.B)();
+       return (0, zH.jsxs)("div", {
+         className: rH()("BloxdForm MapTypeForm", {
+           BasicOptions: !CH
+         }),
+         children: [(0, zH.jsx)("div", {
+           className: "SectionTitle",
+           children: GH("customLobby:mapType")
+         }), (0, zH.jsx)("div", {
+           className: "SectionBody",
+           children: BH.map((HH => CH || (0, SH.A)(HH) ? (0, zH.jsx)("button", {
+             type: "button",
+             className: rH()("MapType", {
+               Selected: LH === HH
+             }),
+ ... (10 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L276-L587` → after: `L705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/239.js#L705) · [Before (L276-L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/239.js#L276-L587)

```diff
-   37334: (UU, XU, zU) => {
-     zU.d(XU, {
-       e: () => QU,
-       i: () => aU,
-       l: () => tU,
-       o: () => FU,
-       r: () => NU,
-       t: () => gU,
-       v: () => YU,
-       w: () => GU,
-       x: () => pU,
-       y: () => kU
-     });
-     var cU = zU(27),
-       yU = zU(31);
-     const QU = "clientGameInventoryButtonsChanged",
- ... (296 more removed lines; see GitHub link above)
+   37210: () => {}
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/240.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/240.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L4-L169` → after: `L4-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/240.js#L4-L15) · [Before (L4-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/240.js#L4-L169)

```diff
-   37368: UU => {
-     UU.exports = {
-       aliceblue: [240, 248, 255],
-       antiquewhite: [250, 235, 215],
-       aqua: [0, 255, 255],
-       aquamarine: [127, 255, 212],
-       azure: [240, 255, 255],
-       beige: [245, 245, 220],
-       bisque: [255, 228, 196],
-       black: [0, 0, 0],
-       blanchedalmond: [255, 235, 205],
-       blue: [0, 0, 255],
-       blueviolet: [138, 43, 226],
-       brown: [165, 42, 42],
-       burlywood: [222, 184, 135],
-       cadetblue: [95, 158, 160],
- ... (150 more removed lines; see GitHub link above)
+   37215: (HH, BH, LH) => {
+     LH.d(BH, {
+       b: () => EH,
+       d: () => GH
+     });
+     var AH = LH(45),
+       rH = LH(1352),
+       SH = LH(1123),
+       hH = LH(1313),
+       tH = LH(3872),
+       zH = LH(5399),
+       CH = LH(1225);
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L172-L462` → after: `L18-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L18-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/240.js#L18-L24) · [Before (L172-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/240.js#L172-L462)

```diff
-       var XU = Math.round(UU).toString(16).toUpperCase();
-       return XU.length < 2 ? "0" + XU : XU
-     }
-     oU.get = function(UU) {
-       var XU, zU;
-       switch (UU.substring(0, 3).toLowerCase()) {
-         case "hsl":
-           XU = oU.get.hsl(UU), zU = "hsl";
-           break;
-         case "hwb":
-           XU = oU.get.hwb(UU), zU = "hwb";
-           break;
-         default:
-           XU = oU.get.rgb(UU), zU = "rgb"
-       }
-       return XU ? {
- ... (275 more removed lines; see GitHub link above)
+       let {
+         loading: BH,
+         schematics: LH,
+         onSchematicPicked: AH,
+         selectedSchematicIdList: rH = [],
+         disableAutoExport: zH
+       } = HH;
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L464-L475` → after: `L26-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L26-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/240.js#L26-L51) · [Before (L464-L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/240.js#L464-L475)

```diff
-         channels: UU
-       } = yU[IU];
-       oU.prototype[IU] = function() {
-         if (this.model === IU) return new oU(this);
-         for (var UU = arguments.length, XU = new Array(UU), zU = 0; zU < UU; zU++) XU[zU] = arguments[zU];
-         return XU.length > 0 ? new oU(XU, IU) : new oU([...(cU = yU[this.model][IU].raw(this.color), Array.isArray(cU) ? cU : [cU]), this.valpha], IU);
-         var cU
-       }, oU[IU] = function() {
-         for (var XU = arguments.length, zU = new Array(XU), cU = 0; cU < XU; cU++) zU[cU] = arguments[cU];
-         let yU = zU[0];
-         return "number" === typeof yU && (yU = NU(zU, UU)), new oU(yU, IU)
-       }
+         t: EH
+       } = (0, SH.B)();
+       return (0, CH.jsxs)("div", {
+         className: "SchematicList",
+         children: [BH && (0, CH.jsx)(hH.d, {}), !BH && 0 === LH.length && (0, CH.jsx)("div", {
+           className: "NoSchematicsText",
+           children: EH("worldBuilder:noSavedSchematic")
+         }), !BH && LH.map((HH => (0, CH.jsx)(tH.d, {
+           source: {
+             type: "schematic",
+             schematic: HH
+           },
+           gameWidth: "25%",
+           useLongRatio: !0,
+           onClick: () => {
+             AH(HH)
+ ... (10 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L479-L483` → after: `L55-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L55-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/240.js#L55-L93) · [Before (L479-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/240.js#L479-L483)

```diff
-       return function(XU) {
-         return function(UU, XU) {
-           return Number(UU.toFixed(XU))
-         }(XU, UU)
-       }
+       let {
+         ownedSchematics: BH,
+         currentWorldSchematicId: LH,
+         onClose: rH
+       } = HH;
+       const {
+         t: hH
+       } = (0, SH.B)(), [tH, XH] = (0, AH.useState)(null);
+       return (0, CH.jsxs)("div", {
+         className: "SchematicListWindow",
+         children: [null === tH && (0, CH.jsxs)(CH.Fragment, {
+           children: [(0, CH.jsx)("h1", {
+             className: "SchematicPopupTitle",
+             children: hH("worldBuilder:schematicList")
+           }), (0, CH.jsx)("h2", {
+             className: "SchematicPopupSubtitle",
+ ... (23 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L486-L493` → after: `L96-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L96-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/240.js#L96-L111) · [Before (L486-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/240.js#L486-L493)

```diff
-     function EU(UU, XU, zU) {
-       UU = Array.isArray(UU) ? UU : [UU];
-       for (const cU of UU)(FU[cU] || (FU[cU] = []))[XU] = zU;
-       return UU = UU[0],
-         function(cU) {
-           let yU;
-           return void 0 !== cU ? (zU && (cU = zU(cU)), yU = this[UU](), yU.color[XU] = cU, yU) : (yU = this[UU]().color[XU], zU && (yU = zU(yU)), yU)
-         }
+     function GH(HH) {
+       let {
+         ownedSchematics: BH,
+         currentWorldSchematicId: LH,
+         onClose: AH
+       } = HH;
+       rH.NotificationProvider.showCustomPopup({
+         body: HH => (0, CH.jsx)(XH, {
+           ownedSchematics: BH,
+           currentWorldSchematicId: LH,
+           onClose: HH
+         }),
+         middleScreenPopupClassName: "SchematicPopup",
+         onClose: AH,
+         unlockPointerKey: "schematicListPopup"
+       })
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L497-L499` → after: `L134-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L134-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/240.js#L134-L194) · [Before (L497-L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/240.js#L497-L499)

```diff
-       return function(XU) {
-         return Math.max(0, Math.min(UU, XU))
-       }
+       let {
+         onFilePicked: BH
+       } = HH;
+       const {
+         t: LH
+       } = (0, uH.B)(), [AH, rH] = (0, EH.useState)(null), {
+         getRootProps: SH,
+         getInputProps: hH,
+         isDragActive: zH
+       } = (0, tH.c)({
+         onDrop: HH => {
+           HH.length > 0 && rH(HH[0])
+         },
+         useFsAccessApi: !1
+       }), XH = AH && AH.size > 1024 * YH.md;
+       return (0, WH.jsxs)("div", {
+ ... (45 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L502-L578` → after: `L197-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L197-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/240.js#L197-L203) · [Before (L502-L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/240.js#L502-L578)

```diff
-     function NU(UU, XU) {
-       for (let zU = 0; zU < XU; zU++) "number" !== typeof UU[zU] && (UU[zU] = 0);
-       return UU
-     }
-     UU.exports = oU
-   },
-   37390: (UU, XU, zU) => {
-     const cU = zU(37393),
-       yU = {};
-     for (const AU of Object.keys(cU)) yU[cU[AU]] = AU;
-     const QU = {
-       rgb: {
-         channels: 3,
-         labels: "rgb"
-       },
-       hsl: {
- ... (61 more removed lines; see GitHub link above)
+     function xH(HH) {
+       let {
+         ownedSchematics: BH,
+         onClose: LH,
+         onChosenPreset: AH,
+         onChosenFile: rH
+       } = HH;
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L580-L586` → after: `L205-L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L205-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/240.js#L205-L237) · [Before (L580-L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/240.js#L580-L586)

```diff
-         channels: UU,
-         labels: XU
-       } = QU[AU];
-       delete QU[AU].channels, delete QU[AU].labels, Object.defineProperty(QU[AU], "channels", {
-         value: UU
-       }), Object.defineProperty(QU[AU], "labels", {
-         value: XU
+         t: SH
+       } = (0, uH.B)();
+       return (0, WH.jsxs)(WH.Fragment, {
+         children: [(0, WH.jsx)("h1", {
+           className: "SchematicPopupTitle",
+           children: SH("worldBuilder:loadSchematic")
+         }), (0, WH.jsx)("h2", {
+           className: "SchematicPopupSubtitle",
+           children: SH("worldBuilder:chooseOneOfYourSchematics")
+         }), (0, WH.jsx)("div", {
+           className: "SchematicPopupSchematicListContainer",
+           children: (0, WH.jsx)(hH.b, {
+             schematics: BH,
+             onSchematicPicked: HH => {
+               AH(HH.schematicId), LH()
+             },
+ ... (17 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L589-L940` → after: `L240-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L240-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/240.js#L240-L243) · [Before (L589-L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/240.js#L589-L940)

```diff
-     QU.rgb.hsl = function(UU) {
-       const XU = UU[0] / 255,
-         zU = UU[1] / 255,
-         cU = UU[2] / 255,
-         yU = Math.min(XU, zU, cU),
-         QU = Math.max(XU, zU, cU),
-         AU = QU - yU;
-       let FU, oU;
-       QU === yU ? FU = 0 : XU === QU ? FU = (zU - cU) / AU : zU === QU ? FU = 2 + (cU - XU) / AU : cU === QU && (FU = 4 + (XU - zU) / AU), FU = Math.min(60 * FU, 360), FU < 0 && (FU += 360);
-       const DU = (yU + QU) / 2;
-       return oU = QU === yU ? 0 : DU <= .5 ? AU / (QU + yU) : AU / (2 - QU - yU), [FU, 100 * oU, 100 * DU]
-     }, QU.rgb.hsv = function(UU) {
-       let XU, zU, cU, yU, QU;
-       const AU = UU[0] / 255,
-         FU = UU[1] / 255,
-         oU = UU[2] / 255,
- ... (336 more removed lines; see GitHub link above)
+     var vH = LH(5399),
+       PH = LH(1706),
+       TH = LH(4745),
+       UH = LH(1168);
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L943-L961` → after: `L246-L305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L246-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/240.js#L246-L305) · [Before (L943-L961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/240.js#L943-L961)

```diff
-       const XU = function() {
-           const UU = {},
-             XU = Object.keys(cU);
-           for (let zU = XU.length, cU = 0; cU < zU; cU++) UU[XU[cU]] = {
-             distance: -1,
-             parent: null
-           };
-           return UU
-         }(),
-         zU = [UU];
-       for (XU[UU].distance = 0; zU.length;) {
-         const UU = zU.pop(),
-           yU = Object.keys(cU[UU]);
-         for (let cU = yU.length, QU = 0; QU < cU; QU++) {
-           const cU = yU[QU],
-             AU = XU[cU]; - 1 === AU.distance && (AU.distance = XU[UU].distance + 1, AU.parent = UU, zU.unshift(cU))
- ... (3 more removed lines; see GitHub link above)
+       var BH;
+       let {
+         ownedSchematics: LH,
+         onClose: AH,
+         onChosenEdit: rH,
+         onChosenNew: SH,
+         onChosenDownload: tH
+       } = HH;
+       const {
+         t: zH
+       } = (0, uH.B)(), [CH, XH] = (0, EH.useState)("choose"), [YH, QH] = (0, EH.useState)(null), [MH, xH] = (0, EH.useState)(null);
+       return (0, WH.jsxs)(WH.Fragment, {
+         children: [(0, WH.jsx)("h1", {
+           className: "SchematicPopupTitle",
+           children: zH("worldBuilder:saveSchematic")
+         }), "choose" === CH && (0, WH.jsxs)(WH.Fragment, {
+ ... (44 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L964-L967` → after: `L308-L389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L308-L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/240.js#L308-L389) · [Before (L964-L967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/240.js#L964-L967)

```diff
-     function QU(UU, XU) {
-       return function(zU) {
-         return XU(UU(zU))
-       }
+     function OH(HH) {
+       let {
+         type: BH,
+         prepopName: LH,
+         ownedSchematics: AH,
+         onSubmit: rH,
+         onBack: SH
+       } = HH;
+       const {
+         t: hH
+       } = (0, uH.B)(), [tH, zH] = (0, EH.useState)(""), [XH, YH] = (0, EH.useState)(""), [QH, MH] = (0, EH.useState)(null), [xH, vH] = (0, EH.useState)(!0), VH = HH => {
+         var rH;
+         HH = null !== (rH = HH) && void 0 !== rH ? rH : tH;
+         const SH = (0, UH.Bb)(HH, "new" === BH || "existing" === BH && HH !== LH);
+         return SH ? (MH(hH(SH.translationKey, SH.params)), !1) : "new" === BH && AH.find((BH => BH.name === HH)) ? (MH(hH("worldBuilder:schematicAlreadyExists")), !1) : (MH(null), !0)
+       };
+ ... (66 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L971-L1153` → after: `L396-L540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L396-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/240.js#L396-L540) · [Before (L971-L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/240.js#L971-L1153)

```diff
-       const zU = [XU[UU].parent, UU];
-       let yU = cU[XU[UU].parent][UU],
-         AU = XU[UU].parent;
-       for (; XU[AU].parent;) zU.unshift(XU[AU].parent), yU = QU(cU[XU[AU].parent][AU], yU), AU = XU[AU].parent;
-       return yU.conversion = zU, yU
-     }
-     UU.exports = function(UU) {
-       const XU = yU(UU),
-         zU = {},
-         cU = Object.keys(XU);
-       for (let yU = cU.length, QU = 0; QU < yU; QU++) {
-         const UU = cU[QU];
-         null !== XU[UU].parent && (zU[UU] = AU(UU, XU))
-       }
-       return zU
-     }
- ... (167 more removed lines; see GitHub link above)
+       if ("devDownloadJson" !== HH) ! function(HH, BH) {
+         const LH = bH.clientSideServerUrls.getHttpUrlFromWebSocketUrl((0, SH.c)().websocketUrl);
+         let tH = !1;
+         const zH = async (HH, BH) => {
+           if (tH) return;
+           tH = !0;
+           const {
+             gameNameWithVariation: AH,
+             lobbyName: hH
+           } = (0, SH.c)(), zH = {
+             gameNameWithVariation: AH,
+             lobbyName: hH
+           };
+           return await (0, mH.postJsonWithMetricsCookiesAndJsonResponse)(`${LH}/schematic/${HH}`, rH.K[HH].toBuffer({
+             ...zH,
+             ...BH
+ ... (129 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/241.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/241.js` (16 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774)

#### 1. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/241.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/241.js#L2)

```diff
- export const ids = [241];
+ export const ids = [59, 241];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L4` → after: `L4-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L4-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/241.js#L4-L38) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/241.js#L4)

```diff
-   37480: (UU, XU, zU) => {
+   39475: (HH, BH, LH) => {
+     var AH = {
+       "./combat_1.png": 39480,
+       "./dungeon_crumbling_crypt.png": 39484,
+       "./dungeon_frozen_hollow.png": 39487,
+       "./dungeon_wildwood_grove.png": 39496,
+       "./dungeons.png": 39501,
+       "./farming_1.png": 39510,
+       "./fishing_1.png": 39514,
+       "./hub.png": 39517,
+       "./island.png": 39524,
+       "./mining_1.png": 39526,
+       "./mining_1_bridge.png": 39528,
+       "./mining_1_gallery.png": 39533,
+       "./mining_1_hollow.png": 39538,
+       "./mining_1_village.png": 39545
+ ... (19 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L6-L14` → after: `L40-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L40-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/241.js#L40-L41) · [Before (L6-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/241.js#L6-L14)

```diff
-       e: () => FX,
-       f: () => kX,
-       j: () => NX,
-       n: () => DX,
-       r: () => IX,
-       t: () => YX,
-       v: () => GX,
-       y: () => EX,
-       B: () => aX
+       d: () => rH,
+       e: () => SH
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L16-L136` → after: `L43-L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L43-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/241.js#L43-L405) · [Before (L16-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/241.js#L16-L136)

```diff
-     const cU = JSON.parse('{"sounds":{"lavaFlow":{"src":["/sounds/generatedSounds/ambient/lavaFlow.ba535035cf.ogg","/sounds/generatedSounds/ambient/lavaFlow.40571c16d7.m4a"],"ms":34000}}}'),
-       yU = JSON.parse('{"sounds":{"carCrash":{"src":["/sounds/generatedSounds/cars/carCrash.e9cf35a412.ogg","/sounds/generatedSounds/cars/carCrash.378aeb32a4.m4a"],"ms":539.7732426303855},"carDoorClose":{"src":["/sounds/generatedSounds/cars/carDoorClose.792cfcf48d.ogg","/sounds/g … [truncated]
-       QU = JSON.parse('{"sounds":{"crowdAmbience":{"src":["/sounds/generatedSounds/crowd/crowdAmbience.c8437e74dd.ogg","/sounds/generatedSounds/crowd/crowdAmbience.ea6c2e684d.m4a"],"ms":54935.51020408163},"crowdCheer":{"src":["/sounds/generatedSounds/crowd/crowdCheer.d4ed8b2c1c.o … [truncated]
-       AU = JSON.parse('{"sounds":{"cryptWhoosh":{"src":["/sounds/generatedSounds/customGame_horror/cryptWhoosh.844ce087ed.ogg","/sounds/generatedSounds/customGame_horror/cryptWhoosh.c75574f860.m4a"],"ms":1700},"doorKnock":{"src":["/sounds/generatedSounds/customGame_horror/doorKno … [truncated]
-       FU = JSON.parse('{"sounds":{"cloth1":{"src":["/sounds/generatedSounds/dig/cloth1.05a08dc4fb.ogg","/sounds/generatedSounds/dig/cloth1.f8fe54888d.m4a"],"ms":1671.8367346938776},"cloth2":{"src":["/sounds/generatedSounds/dig/cloth2.7829e18f4b.ogg","/sounds/generatedSounds/dig/c … [truncated]
-       oU = JSON.parse('{"sounds":{"extinguisherSpray":{"src":["/sounds/generatedSounds/fire/extinguisherSpray.a0ff717082.ogg","/sounds/generatedSounds/fire/extinguisherSpray.0d3a5c7316.m4a"],"ms":2598.7301587301586},"fireAlarmBell":{"src":["/sounds/generatedSounds/fire/fireAlarmB … [truncated]
-       DU = JSON.parse('{"sounds":{"caughtFish":{"src":["/sounds/generatedSounds/fishing/caughtFish.6e9d3bcd83.ogg","/sounds/generatedSounds/fishing/caughtFish.720027e64c.m4a"],"ms":1976.7573696145125},"reel":{"src":["/sounds/generatedSounds/fishing/reel.0d8a9b6ef7.ogg","/sounds/g … [truncated]
-       EU = JSON.parse('{"sounds":{"game_start_countdown_01":{"src":["/sounds/generatedSounds/gameStart/game_start_countdown_01.cf3394eef0.ogg","/sounds/generatedSounds/gameStart/game_start_countdown_01.3008ea2146.m4a"],"ms":1000.7709750566893},"game_start_countdown_02":{"src":["/ … [truncated]
-       YU = JSON.parse('{"sounds":{"bullet_shell_bounce_general_07":{"src":["/sounds/generatedSounds/gunMisc/bullet_shell_bounce_general_07.1dee1c5e3e.ogg","/sounds/generatedSounds/gunMisc/bullet_shell_bounce_general_07.36191552b5.m4a"],"ms":823.0612244897959},"bullet_shell_bounce … [truncated]
-       NU = JSON.parse('{"sounds":{"pistol_cock_01":{"src":["/sounds/generatedSounds/gunPistol/pistol_cock_01.6bb1557b84.ogg","/sounds/generatedSounds/gunPistol/pistol_cock_01.213b7dc7b8.m4a"],"ms":510},"pistol_cock_02":{"src":["/sounds/generatedSounds/gunPistol/pistol_cock_02.61a … [truncated]
-       IU = JSON.parse('{"sounds":{"rifle_cock_01":{"src":["/sounds/generatedSounds/gunRifle/rifle_cock_01.7f2d42f56d.ogg","/sounds/generatedSounds/gunRifle/rifle_cock_01.7facd07e84.m4a"],"ms":705.3061224489796},"rifle_cock_02":{"src":["/sounds/generatedSounds/gunRifle/rifle_cock_ … [truncated]
-       pU = JSON.parse('{"sounds":{"semiAuto_cock_01":{"src":["/sounds/generatedSounds/gunSemiAutomatic/semiAuto_cock_01.1bf3b423df.ogg","/sounds/generatedSounds/gunSemiAutomatic/semiAuto_cock_01.c1262696d3.m4a"],"ms":500},"semiAuto_cock_02":{"src":["/sounds/generatedSounds/gunSem … [truncated]
-       aU = JSON.parse('{"sounds":{"shotgun_cock_01":{"src":["/sounds/generatedSounds/gunShotgun/shotgun_cock_01.c54ea385b9.ogg","/sounds/generatedSounds/gunShotgun/shotgun_cock_01.ee18a51143.m4a"],"ms":914.2857142857142},"shotgun_cock_02":{"src":["/sounds/generatedSounds/gunShotg … [truncated]
-       tU = JSON.parse('{"sounds":{"submachine_cock_01":{"src":["/sounds/generatedSounds/gunSubmachineGun/submachine_cock_01.32e98c51f0.ogg","/sounds/generatedSounds/gunSubmachineGun/submachine_cock_01.afcbd0a497.m4a"],"ms":500},"submachine_cock_02":{"src":["/sounds/generatedSound … [truncated]
-       gU = JSON.parse('{"sounds":{"bearRoar1":{"src":["/sounds/generatedSounds/mobBear/bearRoar1.63c50e53db.ogg","/sounds/generatedSounds/mobBear/bearRoar1.035fff53ae.m4a"],"ms":1011.1791383219954},"bearRoar2":{"src":["/sounds/generatedSounds/mobBear/bearRoar2.78b4410ea2.ogg","/s … [truncated]
-       kU = JSON.parse('{"sounds":{"catHiss1":{"src":["/sounds/generatedSounds/mobCat/catHiss1.33269da18a.ogg","/sounds/generatedSounds/mobCat/catHiss1.930fa86a61.m4a"],"ms":1252.0861678004535},"catHiss2":{"src":["/sounds/generatedSounds/mobCat/catHiss2.f2bda6f1b6.ogg","/sounds/ge … [truncated]
- ... (105 more removed lines; see GitHub link above)
+     const AH = new WeakMap;
+ 
+     function rH(HH, BH) {
+       return AH.set(HH, BH), HH
+     }
+ 
+     function SH(HH) {
+       var BH;
+       return null !== (BH = AH.get(HH)) && void 0 !== BH ? BH : null
+     }
+   },
+   39421: (HH, BH, LH) => {
+     LH.d(BH, {
+       b: () => AH
+     });
+     class AH {
+ ... (347 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L140-L143` → after: `L498-L535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L498-L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/241.js#L498-L535) · [Before (L140-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/241.js#L140-L143)

```diff
-     const FX = new Map([...yX].map((UU => {
-       const XU = Object.keys(QX).filter((XU => XU.startsWith(UU) && /^[A-Z]/.test(XU.slice(UU.length))));
-       return [UU, XU]
-     })));
+       dispose() {
+         this.providers.clear(), this.candidates = []
+       }
+     }
+     var UH = LH(37479),
+       VH = LH(45);
+     const OH = [{
+         dailyRewardCoins: 1e3,
+         dailyRewardItems: []
+       }, {
+         dailyRewardCoins: 3e3,
+         dailyRewardItems: []
+       }, {
+         dailyRewardCoins: 4e3,
+         dailyRewardItems: []
+       }, {
+ ... (22 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L146-L148` → after: `L538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/241.js#L538) · [Before (L146-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/241.js#L146-L148)

```diff
-       const XU = AX.get(UU);
-       if (void 0 === XU) throw new Error(`Invalid sound name ${UU} (not in any sound group)`);
-       return XU
+       return HH >= bH ? 1 : HH + 1
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L152` → after: `L555-L634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L555-L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/241.js#L555-L634) · [Before (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/241.js#L152)

```diff
-       return oX(UU).group
+       let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+       const LH = Math.max(0, Math.floor(HH)),
+         AH = Math.floor(LH % 1e3 / 100),
+         rH = Math.floor(LH / 1e3),
+         SH = rH % 60,
+         hH = Math.floor(rH / 60),
+         tH = hH % 60,
+         zH = Math.floor(hH / 60),
+         CH = HH => HH < 10 ? `0${HH}` : String(HH),
+         EH = BH ? `.${AH}` : "";
+       return zH > 0 ? `${zH}:${CH(tH)}:${CH(SH)}${EH}` : `${tH}:${CH(SH)}${EH}`
+     }
+     const lH = "devquests",
+       KH = "none",
+       cH = {
+         hub: {
+ ... (64 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L156` → after: `L645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/241.js#L645) · [Before (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/241.js#L156)

```diff
-       return oX(UU).file
+       return Math.max(0, HH)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L160` → after: `L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/241.js#L649) · [Before (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/241.js#L160)

```diff
-       return AX.has(UU)
+       return 1 + .01 * JH(HH)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L163-L164` → after: `L652-L653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L652-L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/241.js#L652-L653) · [Before (L163-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/241.js#L163-L164)

```diff
-     function NX(UU, XU) {
-       return IX(UU).includes(XU)
+     function pH(HH) {
+       return 1 + .005 * JH(HH)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L168-L169` → after: `L657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/241.js#L657) · [Before (L168-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/241.js#L168-L169)

```diff
-       if (!(UU in QX)) throw new Error(`Invalid sound group ${UU}`);
-       return Object.keys(QX[UU].sounds)
+       return 1 + .005 * JH(HH)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L174-L175` → after: `L661-L702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L661-L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/241.js#L661-L702) · [Before (L174-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/241.js#L174-L175)

```diff
-       let XU = pX.get(UU);
-       return void 0 === XU && (XU = [...AX.keys()].filter((XU => XU.startsWith(UU))), pX.set(UU, XU)), XU
+       return .01 * JH(HH)
+     }
+ 
+     function BB(HH) {
+       return 150 / (150 + JH(HH))
+     }
+ 
+     function LB(HH) {
+       return 1 + .002 * JH(HH)
+     }
+ 
+     function AB(HH) {
+       return Math.round(10 * HH) / 10
+     }
+ 
+     function rB(HH, BH) {
+ ... (26 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L182-L189` → after: `L712-L720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L712-L720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/241.js#L712-L720) · [Before (L182-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/241.js#L182-L189)

```diff
-         zU = XU[Math.floor(Math.random() * XU.length)];
-       if (XU.length > 1) {
-         const XU = function(UU, XU) {
-           const zU = `${XU}\n${UU}`;
-           let cU = gX.get(zU);
-           return void 0 === cU && (cU = aX(UU).filter((UU => AX.get(UU).group === XU)), gX.set(zU, cU)), cU
-         }(UU, AX.get(zU).group);
-         XU.length > 1 ? tX.set(zU, XU) : tX.delete(zU)
+         AH = HH => function(HH, BH) {
+           return SB(HH) * BH * (BH + 1) / 2
+         }(BH, HH);
+       let rH = Math.min(sH, Math.floor((Math.sqrt(8 * HH / LH + 1) - 1) / 2));
+       return rH < sH && AH(rH + 1) <= HH ? rH++ : AH(rH) > HH && rH--, {
+         totalXp: HH,
+         level: rH,
+         xpIntoLevel: HH - AH(rH),
+         xpForNextLevel: rH === sH ? null : LH * (rH + 1)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L195` → after: `L726-L1349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L726-L1349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/241.js#L726-L1349) · [Before (L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/241.js#L195)

```diff
-       return tX.get(UU)
+       return tB.has(HH)
+     }
+     const CB = new Set(XH.ob);
+ 
+     function EB(HH) {
+       return CB.has(HH)
+     }
+     new Set(["Watermelon", "Melon", "Wheat|FreshlyGrown", "Rice|FreshlyGrown", "Corn Plant|FreshlyGrown", "Chili Pepper Plant|FreshlyGrown", "Chili Pepper Plant|Lava|FreshlyGrown", "Tomato Plant|FreshlyGrown", "Tomato Plant|Top|FreshlyGrown", "Carrot Plant|FreshlyGrown", "Potato  … [truncated]
+     const XB = {
+         "Maple Log": 10,
+         "Pine Log": 10,
+         "Plum Log": 10,
+         "Cedar Log": 10,
+         "Aspen Log": 10,
+         "Jungle Log": 10,
+         "Palm Log": 10,
+ ... (608 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L207-L212` → after: `L1353-L1468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R1353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L1353-L1468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/241.js#L1353-L1468) · [Before (L207-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/241.js#L207-L212)

```diff
-       const zU = () => {
-         if (function(UU) {
-             return "loaded" === UU.state() && !UU.playing() && !UU._playLock
-           }(UU)) {
-           for (const XU of yU) UU.off(XU, zU);
-           UU.unload(), null === XU || void 0 === XU || XU()
+       HH.hidden !== BH && (HH.hidden = BH)
+     }
+     const cB = .55,
+       eB = .6;
+     var qB = LH(39415);
+     const gB = {
+       talk: "quest_talk",
+       search: "quest_search"
+     };
+     class NB {
+       constructor(HH, BH, LH, AH) {
+         this.map = HH, this.quests = BH, this.compass = LH, this.display = new lB, this.translate = void 0, this.locale = "en-GB", this.metresFormat = new Intl.NumberFormat(this.locale), this.Mu = !1, this.snapshot = null, this.texts = new Map, this.translate = AH
+       }
+       setTranslator(HH, BH) {
+         this.translate = HH, this.locale = BH, this.metresFormat = new Intl.NumberFormat(BH), this.texts.clear()
+       }
+ ... (100 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L214-L216` → after: `L1470-L1711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R1470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L1470-L1711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/241.js#L1470-L1711) · [Before (L214-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/241.js#L214-L216)

```diff
-       };
-       for (const cU of yU) UU.on(cU, zU);
-       zU()
+         const {
+           waypoint: uH
+         } = this.quests.getSnapshot();
+         if ("search" === (null === uH || void 0 === uH ? void 0 : uH.questMarkerIcon) && null !== AH && void 0 !== AH && AH.background) {
+           const {
+             bounds: HH
+           } = AH.background, [BH, LH] = (0, rH.c)(uH.position[0] - AH.mapOrigin[0], uH.position[2] - AH.mapOrigin[2], HH);
+           GH.searchArea = {
+             left: BH,
+             top: LH,
+             width: 6400 / (HH.mapMaxX - HH.mapMinX),
+             height: 6400 / (HH.mapMaxZ - HH.mapMinZ),
+             shapeSeed: uH.nameKey
+           }
+         }
+         const QH = this.quests.getNotificationSnapshot(),
+ ... (226 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/242.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/242.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L4-L7` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/242.js#L4-L6) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/242.js#L4-L7)

```diff
-   40525: (UU, XU, zU) => {
-     zU.d(XU, {
-       b: () => cU,
-       e: () => yU
+   37242: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       default: () => OH
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L9-L25` → after: `L8-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L8-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/242.js#L8-L128) · [Before (L9-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/242.js#L9-L25)

```diff
-     const cU = "The world isn't loaded, so no blocks can be seen.",
-       yU = "The world isn't loaded, so nothing in it can be seen."
-   },
-   39926: (UU, XU, zU) => {
-     function cU(UU) {
-       return !(!UU.lobbyLeaderboardInfo && !UU.lobbyManage)
-     }
-     zU.d(XU, {
-       c: () => cU
-     })
-   },
-   37535: (UU, XU, zU) => {
-     zU.d(XU, {
-       e: () => yU,
-       f: () => cU
-     });
- ... (1 more removed lines; see GitHub link above)
+     var AH = LH(1038),
+       rH = LH.n(AH),
+       SH = LH(1520),
+       hH = LH(1031),
+       tH = LH(761),
+       zH = LH(1123),
+       CH = LH(1455),
+       EH = LH(1509),
+       XH = LH(3943),
+       GH = LH(1315),
+       YH = LH(3872),
+       uH = LH(2820),
+       QH = LH(1225);
+     const WH = 2;
+ 
+     function MH(HH) {
+ ... (105 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L27-L91` → after: `L130-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L130-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/242.js#L130-L152) · [Before (L27-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/242.js#L27-L91)

```diff
-         recording: !1,
-         clipping: !1,
-         hasClipBuffer: !1,
-         seconds: 0
-       }
-   },
-   37538: (UU, XU, zU) => {
-     zU.d(XU, {
-       e: () => QU,
-       f: () => yU
-     });
-     let cU = () => null;
- 
-     function yU(UU) {
-       cU = UU
-     }
- ... (49 more removed lines; see GitHub link above)
+         section1: {
+           gameCount: 4,
+           columnCount: 2
+         },
+         section2: {
+           gameCount: 6,
+           columnCount: 6
+         },
+         section3: {
+           gameCount: 8,
+           columnCount: 4
+         },
+         section4: {
+           gameCount: 6,
+           columnCount: 3
+         },
+ ... (7 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L93-L213` → after: `L154-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L154-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/242.js#L154-L155) · [Before (L93-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/242.js#L93-L213)

```diff
-       }
-       return {
-         ...UU,
-         type: XU,
-         ironChest: zU
-       }
-     }
- 
-     function gU(UU) {
-       const XU = EU(UU),
-         zU = null === XU || void 0 === XU ? void 0 : XU.ownerDbId,
-         cU = function(UU) {
-           var XU;
-           let zU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : EU(UU);
-           const cU = YU(UU),
-             yU = NU.get(cU);
- ... (105 more removed lines; see GitHub link above)
+       };
+     var VH = LH(1049);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L217-L229` → after: `L159-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L159-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/242.js#L159-L171) · [Before (L217-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/242.js#L217-L229)

```diff
-       const XU = null === (UU = (0, QU.f)()) || void 0 === UU ? void 0 : UU.api.localId;
-       return void 0 === XU || XU === cU.ad ? null : String(XU)
-     }
- 
-     function FU(UU) {
-       const XU = (0, QU.f)();
-       if (null !== XU) return UU(XU);
-       let zU = null;
-       const cU = (0, yU.r)((() => {
-         const XU = (0, QU.f)();
-         null !== XU && null === zU && (cU(), zU = UU(XU))
-       }));
-       return () => {
+       const {
+         t: BH
+       } = (0, zH.B)(), LH = (0, SH.A)(), AH = (0, VH.k)(), GH = (0, XH.d)({
+         refresh: !0
+       }), YH = LH.customGamePlace;
+       if (!(0, hH.j)(YH)) return (0, QH.jsx)(EH.NavigatePreserveSearch, {
+         to: "/"
+       });
+       const uH = tH.b[YH],
+         WH = hH.c[YH],
+         MH = null !== (HH = null === GH || void 0 === GH ? void 0 : GH[YH]) && void 0 !== HH ? HH : null,
+         xH = [];
+       for (let rH = 0; rH < WH.length; rH++) {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L231` → after: `L173-L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L173-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/242.js#L173-L183) · [Before (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/242.js#L231)

```diff
-         cU(), null === (UU = zU) || void 0 === UU || UU()
+         const HH = TH[rH];
+         if (!HH) continue;
+         const LH = WH[rH];
+         xH.push({
+           id: LH.id,
+           category: LH.category,
+           title: BH(LH.displayTranslationKey),
+           tintColour: LH.tintColour,
+           layout: UH[HH],
+           games: null !== (OH = null === MH || void 0 === MH ? void 0 : MH[LH.id]) && void 0 !== OH ? OH : null
+         })
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L233-L455` → after: `L185-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L185-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/242.js#L185-L190) · [Before (L233-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/242.js#L233-L455)

```diff
-     }
- 
-     function oU(UU, XU, zU) {
-       return {
-         current: () => {
-           const zU = (0, QU.f)();
-           return null === zU ? XU : UU(zU)()
-         },
-         watch: XU => FU((cU => {
-           const yU = UU(cU);
-           let QU = yU();
-           return XU(QU), zU((() => {
-             const UU = yU();
-             UU !== QU && (QU = UU, XU(UU))
-           }))
-         }))
- ... (207 more removed lines; see GitHub link above)
+       return (0, QH.jsxs)("div", {
+         className: "CustomGamePlaceContainer AnimFadeIn",
+         children: [(0, QH.jsx)("div", {
+           className: "BackgroundImage",
+           style: {
+             backgroundImage: `url(/textures/games/${YH}/${uH.largePicture}.png)`
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L457-L589` → after: `L192-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L192-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/242.js#L192-L212) · [Before (L457-L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/242.js#L457-L589)

```diff
-         },
-         commands: {
-           selectHotbarSlot: AU,
-           removeInventoryItem: () => !1,
-           swapInventorySlots: () => !1,
-           moveInventoryItem: () => !1,
-           quickMoveInventoryItem: () => null,
-           closeChest: AU,
-           setInventoryOpen: AU,
-           changeIronChestPasskey: AU,
-           dragReplayCamera: AU,
-           applyTemporaryThirdPerson: AU,
-           holdEmoteWheel: AU,
-           recordFlyingMiddleText: AU,
-           focusCrafting: AU,
-           craftRecipe: () => ({
- ... (117 more removed lines; see GitHub link above)
+         }), (0, QH.jsx)("h1", {
+           className: "VisuallyHidden",
+           children: BH(uH.title)
+         }), (0, QH.jsx)("div", {
+           className: "CustomGamePlaceHeaderContainer",
+           children: (0, QH.jsx)(CH.e, {
+             onClick: () => (0, EH.navigatePreserveSearch)("/"),
+             children: BH("homePage:backToGames")
+           })
+         }), !AH && (0, QH.jsx)(PH, {
+           categories: xH
+         }), AH && (0, QH.jsx)("div", {
+           className: rH()("CustomGamePlaceMosaic", "CustomGamePlaceMosaicPortrait"),
+           children: xH.map((HH => (0, QH.jsx)(vH, {
+             category: HH.category,
+             title: HH.title,
+ ... (5 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/243.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/243.js` (11 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7)

#### 1. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/243.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/243.js#L4)

```diff
-   37653: (UU, XU, zU) => {
+   37250: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L7` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/243.js#L8-L10) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/243.js#L7)

```diff
-       e: () => BU
+       d: () => CH,
+       e: () => zH,
+       f: () => vH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L9-L187` → after: `L12-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L12-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/243.js#L12-L78) · [Before (L9-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/243.js#L9-L187)

```diff
-     var cU = zU(4622),
-       yU = zU(1492),
-       QU = zU(61),
-       AU = zU(7056),
-       FU = zU(4612),
-       oU = zU(1310),
-       DU = zU(2005),
-       EU = zU(1978),
-       YU = zU(1494),
-       NU = zU(1193),
-       IU = zU(37659),
-       pU = zU(1106),
-       aU = zU.n(pU),
-       tU = zU(1349),
-       gU = zU(1390),
-       kU = zU(1294),
- ... (163 more removed lines; see GitHub link above)
+     var AH = LH(625),
+       rH = LH(1807),
+       SH = LH(5268);
+     class hH {
+       constructor(HH, BH) {
+         this.width = HH, this.aX = BH, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(HH * BH)
+       }
+       push(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         const LH = this.data,
+           AH = this.next * this.width;
+         for (let rH = 0; rH < this.width; rH++) LH[AH + rH] = HH[BH + rH];
+         this.next = (this.next + 1) % this.aX, this.size = Math.min(this.size + 1, this.aX)
+       }
+       rows() {
+         let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
+ ... (51 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L190-L265` → after: `L81-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L81-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/243.js#L81-L147) · [Before (L190-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/243.js#L190-L265)

```diff
-         this.lostAtMs = null
-       }
-       update(UU, XU) {
-         return UU ? (this.lostAtMs = null, !1) : (this.lostAtMs ??= XU, XU - this.lostAtMs >= 250)
-       }
-       reset() {
-         this.lostAtMs = null
-       }
-     }
-     class eU {
-       constructor(UU, XU) {
-         this.press = UU, this.release = XU, this.downAtMs = null, this.token = null, this.latched = !1
-       }
-       update(UU, XU, zU, cU) {
-         if (UU && null === this.downAtMs) return this.downAtMs = zU, this.latched = cU, void(this.token = this.press(cU));
-         null !== this.downAtMs && (this.latched ? UU && this.end() : !XU && zU - this.downAtMs >= 40 && this.end())
- ... (60 more removed lines; see GitHub link above)
+         this.steps = new hH(tH, XH), this.events = new hH(YH.length, XH), this.frames = new hH(uH.length, XH), this.cameraSets = new hH(SH.d, 256), this.changes = new hH(WH.length, 256)
+       }
+     }
+     const vH = new class {
+       constructor() {
+         this.rings = null, this.sample = new Float64Array(YH.length), this.startedClient = null, this.startedAtMs = 0
+       }
+       get client() {
+         return this.startedClient
+       }
+       start(HH, BH) {
+         this.startedClient = HH, this.startedAtMs = performance.now(), null !== this.rings ? this.change(MH(HH)) : BH && this.allocate()
+       }
+       lockGained() {
+         this.allocate(), this.change(EH.lockGained)
+       }
+ ... (51 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L268-L280` → after: `L150-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L150-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/243.js#L150-L160) · [Before (L268-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/243.js#L268-L280)

```diff
-           update: (AU, FU, DU, EU) => {
-             var NU;
-             const IU = (0, PU.n)(UU.contextActionInputs()),
-               pU = null !== (NU = IU[0]) && void 0 !== NU ? NU : CU;
-             (0, WU.d)((0, PU.i)(pU) ? pU : null);
-             const aU = (0, PU.e)(IU);
-             (0, WU.f)(aU);
-             const tU = (0, oU.h)("actionButton");
-             if (aU) {
-               const UU = zU.update(FU.wasPressed(tU), FU.isHeld(tU), DU, EU);
-               "tap" === UU ? QU(AU, pU, [tU], DU) : "hold" === UU && (YU.d.consumeButton(tU), yU.k.UY(BU.k, IU))
-             } else zU.release(), FU.wasPressed(tU) && QU(AU, pU, [tU], DU);
-             XU && DU - XU.atMs >= 40 && !XU.heldBy.some((UU => (0, RU.I)(FU.frame.values, UU))) && cU()
+           version: AH.d,
+           client: null !== (LH = this.startedClient) && void 0 !== LH ? LH : "not started",
+           savedAt: (new Date).toISOString(),
+           savedAtMs: HH,
+           keptMs: 6e4,
+           page: window.location.href,
+           userAgent: navigator.userAgent,
+           devicePixelRatio: window.devicePixelRatio,
+           screen: {
+             width: window.screen.width,
+             height: window.screen.height
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L282-L494` → after: `L162-L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L162-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/243.js#L162-L181) · [Before (L282-L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/243.js#L282-L494)

```diff
-           pressPicked: (UU, XU) => {
-             QU(UU, XU, [(0, oU.h)("menuConfirm"), (0, oU.h)("actionButton")], performance.now())
-           },
-           release: () => {
-             zU.release(), cU(), (0, WU.d)(null), (0, WU.f)(!1)
-           }
-         }
-       };
-     var qU = zU(8733);
-     var OU = zU(41638),
-       SU = zU(9314),
-       rU = zU(8774),
-       uU = zU(9422);
-     var fU = zU(41636),
-       iU = zU(9431),
-       HU = zU(41644),
- ... (197 more removed lines; see GitHub link above)
+           ZW: null !== document.pointerLockElement,
+           visibility: document.visibilityState,
+           ...BH,
+           outcomes: zH,
+           frameKinds: CH,
+           changes: EH,
+           lookSteps: hH(null === SH || void 0 === SH ? void 0 : SH.steps, GH),
+           mouseMoves: hH(null === SH || void 0 === SH ? void 0 : SH.events, YH, 1),
+           frames: hH(null === SH || void 0 === SH ? void 0 : SH.frames, uH),
+           cameraSets: hH(null === SH || void 0 === SH ? void 0 : SH.cameraSets, QH),
+           pageChanges: hH(null === SH || void 0 === SH ? void 0 : SH.changes, WH)
+         }
+       }
+       save(HH) {
+         const BH = JSON.stringify(this.toJson(performance.now(), HH));
+         (0, rH.e)(new Blob([BH], {
+ ... (4 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L496-L500` → after: `L183-L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L183-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/243.js#L183-L189) · [Before (L496-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/243.js#L496-L500)

```diff
-   41638: (UU, XU, zU) => {
-     zU.d(XU, {
-       b: () => pU,
-       d: () => tU,
-       h: () => IU
+   37245: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       LOOK_DEBUG_HEADER: () => EH,
+       endLookDebugTake: () => MH,
+       noteLookDroppedCopy: () => xH,
+       saveLookCapture: () => vH,
+       startLookDebug: () => WH
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L502-L540` → after: `L191-L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L191-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/243.js#L191-L215) · [Before (L502-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/243.js#L502-L540)

```diff
-     var cU = zU(1310),
-       yU = zU(4651),
-       QU = zU(9355),
-       AU = zU(37653),
-       FU = zU(1769),
-       oU = zU(1190),
-       DU = zU(8785),
-       EU = zU(9273),
-       YU = zU(9383);
-     const NU = {
-         emoteWheel: QU.e,
-         quickChatWheel: EU.c,
-         actionWheel: YU.q
-       },
-       IU = Object.keys(NU),
-       pU = "dead",
- ... (23 more removed lines; see GitHub link above)
+     var AH = LH(5268),
+       rH = LH(3105),
+       SH = LH(1962);
+     const hH = new Map(Object.entries(AH.l).map((HH => {
+       let [BH, LH] = HH;
+       return [LH, BH]
+     })));
+ 
+     function tH(HH) {
+       return (0, SH.t)(HH).toFixed(1)
+     }
+ 
+     function zH(HH, BH) {
+       return `camera set by ${hH.get(HH[BH+1])}: heading ${`${tH(HH[BH+2])} -> ${tH(HH[BH+4])}`} deg, pitch ${`${tH(HH[BH+3])} -> ${tH(HH[BH+5])}`} deg, at ${HH[BH].toFixed(1)} ms`
+     }
+     var CH = LH(37250);
+ ... (9 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L543-L668` → after: `L218-L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L218-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/243.js#L218-L226) · [Before (L543-L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/243.js#L543-L668)

```diff
-         this.fullTiltSinceMs = null
-       }
-       update(UU, XU, zU) {
-         const yU = (0, cU.j)(UU, XU.lookDeadzone);
-         if (Math.hypot(yU.x, yU.y) < .9 || Math.abs(yU.x) < Math.abs(yU.y)) return this.fullTiltSinceMs = null, 1;
-         null === this.fullTiltSinceMs && (this.fullTiltSinceMs = zU);
-         const QU = (AU = XU.lookSensitivityX, Math.min(1, 100 / AU));
-         var AU;
-         return 1 + (1.6 - 1) * Math.max(0, Math.min(1, (zU - this.fullTiltSinceMs - 250 * QU) / (200 * QU)))
-       }
-       reset() {
-         this.fullTiltSinceMs = null
-       }
-     }
-     const QU = (UU, XU, zU, yU, QU) => {
-         let AU = 1;
- ... (110 more removed lines; see GitHub link above)
+         this.frames = 0, this.looked = 0, this.idle = 0, this.qN = 0, this.pastLimit = 0, this.lockSkips = 0, this.XW = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakR … [truncated]
+       }
+       moved() {
+         return this.events > 0 || 0 !== this.raw[0] || 0 !== this.raw[1] || this.lockSkips > 0 || this.qN > 0 || this.dropped > 0 || this.cameraSets > 0
+       }
+       hasEvent() {
+         return this.qN > 0 || this.pastLimit > 0 || this.bigEvents > 0 || this.dropped > 0 || this.cameraSets > 0
+       }
+     }
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L671-L778` → after: `L229-L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L229-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/243.js#L229-L250) · [Before (L671-L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/243.js#L671-L778)

```diff
-         this.regainPending = !1, this.regainedAtMs = -1 / 0, this.graceEndsMs = -1 / 0, this.ignoringHeld = !1
-       }
-       lostToPadScreen() {
-         this.regainPending = !0
-       }
-       filter(UU, XU) {
-         this.regainPending && (this.regainPending = !1, this.regainedAtMs = XU, this.graceEndsMs = XU + 500);
-         const zU = XU < this.graceEndsMs;
-         return zU && (UU.sneakPressed || UU.sneakTogglePressed) && (this.graceEndsMs = Math.min(this.regainedAtMs + 1e3, Math.max(this.graceEndsMs, XU + 300))), UU.sneakHeld ? zU && UU.sneakPressed && (this.ignoringHeld = !0) : this.ignoringHeld = !1, {
-           sneakHeld: UU.sneakHeld && !this.ignoringHeld,
-           sneakPressed: UU.sneakPressed && !this.ignoringHeld,
-           sneakTogglePressed: UU.sneakTogglePressed && !zU
-         }
-       }
-     }
-   },
- ... (92 more removed lines; see GitHub link above)
+         var HH = this;
+         this.topicOn = (0, rH.o)("look"), this.remote = (0, rH.s)(), this.tally = new YH, this.takes = null, this.started = !1, this.record = function(BH) {
+           let LH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+           if (CH.f.step(BH, LH), !HH.topicOn) return;
+           const AH = BH[LH],
+             rH = BH[LH + 1],
+             SH = BH[LH + 2],
+             hH = BH[LH + 3],
+             tH = BH[LH + 4],
+             zH = BH[LH + 5],
+             EH = BH[LH + 6],
+             YH = BH[LH + 7],
+             uH = BH[LH + 8],
+             QH = BH[LH + 9],
+             WH = HH.tally;
+           switch (WH.frames++, EH) {
+ ... (6 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L780-L781` → after: `L252-L360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L252-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/243.js#L252-L360) · [Before (L780-L781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/243.js#L780-L781)

```diff
-         })
-       }
+           WH.looked++, Number.isFinite(rH) && (WH.dtMin = Math.min(WH.dtMin, rH), WH.dtMax = Math.max(WH.dtMax, rH), WH.dtSum += rH, rH > 0 && (WH.peakRate = Math.max(WH.peakRate, Math.hypot(tH, zH) / rH))), WH.raw[0] += SH, WH.raw[1] += hH, WH.turned[0] += tH, WH.turned[1] += zH … [truncated]
+           const MH = Math.abs(SH) > QH || Math.abs(hH) > QH,
+             xH = `raw (${XH(SH)}, ${XH(hH)}) over ${GH(rH)} ms, limit ${XH(QH)}, filter v (${YH.toFixed(3)}, ${uH.toFixed(3)}) px/ms, at ${GH(AH)} ms`;
+           EH === CH.e.qN ? (WH.qN++, HH.outlier(`spike put right: ${xH} -> turned (${XH(tH)}, ${XH(zH)})`)) : MH ? (WH.pastLimit++, HH.outlier(`kept past limit: ${xH}`)) : rH > 50 && (WH.longFrames++, HH.remote || HH.outlier(`long frame: ${xH}, turned in full`))
+         }, this.onMouseMove = HH => {
+           const BH = null !== document.pointerLockElement;
+           if (CH.f.mouseMove(HH, BH), !this.topicOn) return;
+           const LH = this.tally,
+             {
+               movementX: AH,
+               movementY: rH
+             } = HH;
+           LH.events++;
+           const SH = Math.max(Math.abs(AH), Math.abs(rH));
+           LH.eventMax = Math.max(LH.eventMax, SH), SH >= 200 && (LH.bigEvents++, this.eventOutlier(`big mousemove (${AH}, ${rH}) at ${GH(HH.timeStamp)} ms, lock ${BH?"LX":"free"}`))
+         }, this.onLockChange = () => {
+ ... (93 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/244.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/244.js` (24 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/244.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/244.js#L4)

```diff
-   39250: (UU, XU, zU) => {
+   40018: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L6` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/244.js#L6-L7) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/244.js#L6)

```diff
-       b: () => pU
+       e: () => SH,
+       h: () => hH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L8-L607` → after: `L9-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L9-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/244.js#L9-L14) · [Before (L8-L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/244.js#L8-L607)

```diff
-     var cU = zU(212),
-       yU = zU(38388);
-     const QU = 1.2,
-       AU = {
-         poseRig: "golem",
-         physicsBodyDimensions: {
-           width: .5,
-           height: 2.5
-         },
-         hitBoxDimensions: {
-           width: 2.2,
-           height: 2.8
-         },
-         eyeHeight: 2.3,
-         rideHeight: 2.3,
-         xE: .5,
- ... (584 more removed lines; see GitHub link above)
+     var AH = LH(18);
+     let rH = !1;
+ 
+     function SH() {
+       return rH
+     }
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L610` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/244.js#L17) · [Before (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/244.js#L610)

```diff
-       return IU[UU]
+       rH !== HH && (rH = HH, AH.k.AX("replayViewer|videoExportChanged"))
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L613` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/244.js#L20) · [Before (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/244.js#L613)

```diff
-   37794: (UU, XU, zU) => {
+   37345: (HH, BH, LH) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L615` → after: `L22-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L22-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/244.js#L22-L25) · [Before (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/244.js#L615)

```diff
-       b: () => cU
+       e: () => GH,
+       g: () => EH,
+       i: () => YH,
+       j: () => XH
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L618-L637` → after: `L32-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L32-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/244.js#L32-L34) · [Before (L618-L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/244.js#L618-L637)

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
- ... (4 more removed lines; see GitHub link above)
+         idStorageKey: "playSessionId",
+         lastActivityStorageKey: "playSessionLastActivityMs",
+         expiryMs: 3e5
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L639-L774` → after: `L36-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L36-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/244.js#L36-L73) · [Before (L639-L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/244.js#L639-L774)

```diff
-       "skyblock:forged:astral-sanguine-magmasteel": {
-         name: "Triune Flame",
-         lore: "Each of Lord Vulcan's three faces, bound into one burning edge.",
-         damageMultiplier: 1.65,
-         cooldownMultiplier: .83,
-         ability: "magmaWave"
-       },
-       "skyblock:forged:magmasteel-magmasteel-magmasteel": {
-         name: "Vulcan's Bane",
-         lore: "Forged in the heat of his own rift. It remembers the way down.",
-         damageMultiplier: 1.56,
-         cooldownMultiplier: .83,
-         ability: "magmaWave"
-       },
-       "skyblock:forged:magmasteel-astral-sanguine": {
-         name: "Comet's Wake",
- ... (120 more removed lines; see GitHub link above)
+       zH = "playSessionGameNameWithVariation",
+       CH = "wasMatchmakePlayer";
+ 
+     function EH() {
+       let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hH.f;
+       (0, SH.k)(HH, tH)
+     }
+ 
+     function XH() {
+       (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hH.f).setItem(CH, !0)
+     }
+ 
+     function GH() {
+       let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hH.f;
+       return (0, SH.e)(HH, tH)
+     }
+ ... (22 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L777` → after: `L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/244.js#L76) · [Before (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/244.js#L777)

```diff
-   38394: (UU, XU, zU) => {
+   42234: (HH, BH, LH) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L779` → after: `L78-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L78-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/244.js#L78-L83) · [Before (L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/244.js#L779)

```diff
-       d: () => AU
+       d: () => EH,
+       g: () => hH,
+       k: () => zH,
+       o: () => SH,
+       r: () => tH,
+       u: () => CH
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L781-L786` → after: `L85-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L85-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/244.js#L85-L86) · [Before (L781-L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/244.js#L781-L786)

```diff
-     var cU = zU(352),
-       yU = zU.n(cU),
-       QU = zU(1974);
-     let AU;
-     var FU, oU, DU, EU, YU, NU, IU, pU, aU;
-     const tU = [1, 143, 0, 36, 3, "i", "g", "e", 6, "d", 8, 255, "length", 100, 149, 40, 4, "undefined", void 0, 162, 2, "a", 63, "fromCodePoint", 7, 12, "push", 156, 222, 76, "c", "b", 105, 230, 54, 84, 91, 8191, 88, 13, 14, 17, 173, 28, 33554432, 67108864, 45, 195, 212, 111, 12 … [truncated]
+     let AH = null,
+       rH = null;
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L788-L800` → after: `L88-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L88-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/244.js#L88-L91) · [Before (L788-L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/244.js#L788-L800)

```diff
-     function gU(...UU) {
-       return UU[tU[12]] = tU[0], typeof FU[UU[tU[2]]] === tU[17] ? FU[UU[tU[2]]] = function(...UU) {
-         for (CU(UU[tU[12]] = tU[0], UU[tU[0]] = 'nutYgsFdEfIoRSZcXpmUKkLDQ]9/he%bi;)j=v{",^4+}NCBO3x1yz<w~PrHWTMJ!*_.|7:A@q(l>a[&$VG58`?206#', UU[-tU[1]] = "" + (UU[tU[2]] || ""), UU[tU[4]] = UU[-tU[1]].length, UU[tU[9]] = [], UU[tU[7]] = tU[2], UU[tU[8]] = tU[2], UU[tU[6]] = -tU … [truncated]
-           if (UU[tU[5]] = UU[tU[0]].indexOf(UU[-tU[1]][UU[tU[3]]]), UU[tU[5]] !== -tU[0])
-             if (UU[tU[6]] < tU[2]) UU[tU[6]] = UU[tU[5]];
-             else {
-               CU(UU[tU[6]] += UU[tU[5]] * tU[36], UU[tU[7]] |= UU[tU[6]] << UU[tU[8]], UU[tU[8]] += (UU[tU[6]] & tU[37]) > tU[38] ? tU[39] : tU[40]);
-               do {
-                 CU(UU[tU[9]].push(UU[tU[7]] & tU[11]), UU[tU[7]] >>= tU[10], UU[tU[8]] -= tU[10])
-               } while (UU[tU[8]] > tU[24]);
-               UU[tU[6]] = -tU[0]
-             } return UU[tU[6]] > -tU[0] && UU[tU[9]].push((UU[tU[7]] | UU[tU[6]] << UU[tU[8]]) & tU[11]), kU(UU[tU[9]])
-       }(oU[UU[tU[2]]]) : FU[UU[tU[2]]]
+     function SH(HH, BH) {
+       return AH = HH, rH = null, tH(BH), () => {
+         AH === HH && (AH = null, rH = null)
+       }
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L803-L804` → after: `L94-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L94-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/244.js#L94-L97) · [Before (L803-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/244.js#L803-L804)

```diff
-     function kU(...UU) {
-       return UU[tU[12]] = tU[0], typeof EU !== tU[17] && EU ? (new EU).decode(new YU(UU[tU[2]])) : typeof NU !== tU[17] && NU ? NU.from(UU[tU[2]]).toString("utf-8") : aU(UU[tU[2]])
+     function hH() {
+       return null === rH ? null : {
+         ...rH
+       }
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L807-L859` → after: `L100-L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L100-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/244.js#L100-L105) · [Before (L807-L859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/244.js#L807-L859)

```diff
-     function GU() {}
-     CU(FU = {}, oU = ['3A[>0{(RopQw+G)p?"RebTUeySQ', "sehIIMQQYUW$L{F", "]ei%BroUmRJqXHI]Z3k>#qZQ0SGLHZX90)YsG{vdBz!:yXJe.YFy(W[FF", "AY[hi<~yVJ)bjxd].Nc[!OD^OmsFiAuD*O&<X5QExUPaTg@{UPpiejmCI*}", "nWeyD7HJpf`ztVhj>*Swm5pe%_|qg=y/RP7Atzy!eH<jhBtv", "P)zbC|MCDr37;vIK)R7wx:BU)Wg|KAd … [truncated]
-       CU(UU[tU[12]] = tU[2], UU[tU[15]] = [function() {
-         return globalThis
-       }, function() {
-         return global
-       }, function() {
-         return window
-       }, function() {
-         return new Function("return this")()
-       }], UU[tU[13]] = tU[18], UU[-tU[14]] = []);
-       try {
-         CU(UU[tU[13]] = Object, UU[-tU[14]][tU[26]]("".__proto__.constructor.name))
-       } catch (oU) {}
-       UU: for (UU[tU[7]] = tU[2]; UU[tU[7]] < UU[tU[15]][tU[12]]; UU[tU[7]]++) try {
-         for (UU[tU[13]] = UU[tU[15]][UU[tU[7]]](), UU[tU[16]] = tU[2]; UU[tU[16]] < UU[-tU[14]][tU[12]]; UU[tU[16]]++)
- ... (37 more removed lines; see GitHub link above)
+     function tH(HH) {
+       var BH;
+       null !== (BH = AH) && void 0 !== BH && BH(HH) && (rH = {
+         ...HH
+       })
+     }
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L862` → after: `L108-L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L108-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/244.js#L108-L113) · [Before (L862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/244.js#L862)

```diff
-       CU = function() {}
+       return "undefined" === typeof location ? null : function(HH) {
+         const BH = new URLSearchParams(HH).get("renderDistanceMax");
+         if (null === BH || !/^\d{1,2}$/.test(BH)) return null;
+         const LH = Number(BH);
+         return LH >= 1 && LH <= 64 ? LH : null
+       }(location.search)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L939-L994` → after: `L116-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L116-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/244.js#L116-L119) · [Before (L939-L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/244.js#L939-L994)

```diff
-           function OU(...UU) {
-             return UU[tU[12]] = tU[0], typeof FU[UU[tU[2]]] === tU[17] ? FU[UU[tU[2]]] = qU(oU[UU[tU[2]]]) : FU[UU[tU[2]]]
-           }
- 
-           function SU(...UU) {
-             UU[tU[12]] = tU[2];
-             const XU = require("big-integer");
-             CU(UU[tU[21]] = class {
-               static randomPrime(...UU) {
-                 UU[tU[12]] = tU[0];
-                 const zU = XU.one.shiftLeft(UU[tU[2]] - tU[0]),
-                   cU = XU.one.shiftLeft(UU[tU[2]]).prev();
-                 for (;;) {
-                   let UU = XU.randBetween(zU, cU);
-                   if (UU.isProbablePrime(256)) return UU
-                 }
- ... (40 more removed lines; see GitHub link above)
+     function CH(HH, BH) {
+       return null === BH ? HH : {
+         horizontal: Math.min(HH.horizontal, BH),
+         vertical: HH.vertical
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L996-L1013` → after: `L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/244.js#L121) · [Before (L996-L1013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/244.js#L996-L1013)

```diff
-       const EU = WU;
-       if (CU(yU()[XU(151)](EU, BU, LU), EU[tU[0]] = tU[2], UU[tU[82]] = yU()[XU(152)](EU)), !DU) {
-         function rU(UU) {
-           var XU, zU, cU, yU, QU, AU, FU;
-           for (CU(XU = "" + (UU || ""), zU = XU.length, cU = [], yU = tU[2], QU = tU[2], AU = -tU[0]), FU = tU[2]; FU < zU; FU++) {
-             var oU = '2BeK#c`|1!6rlW0~&("Dj[;TPzJ]+v93dFxyq4)YguXn%sO87Qb@:*<LhS$.fZ=AoiGk^IRt_/>CEwM?,V5}HUp{mNa'.indexOf(XU[FU]);
-             if (oU !== -tU[0])
-               if (AU < tU[2]) AU = oU;
-               else {
-                 CU(AU += oU * tU[36], yU |= AU << QU, QU += (AU & tU[37]) > tU[38] ? tU[39] : tU[40]);
-                 do {
-                   CU(cU.push(yU & tU[11]), yU >>= tU[10], QU -= tU[10])
-                 } while (QU > tU[24]);
-                 AU = -tU[0]
-               }
-           }
- ... (2 more removed lines; see GitHub link above)
+     }
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L1015-L1017` → after: `L123-L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L123-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/244.js#L123-L135) · [Before (L1015-L1017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/244.js#L1015-L1017)

```diff
-         function uU(...UU) {
-           return UU[tU[12]] = tU[0], typeof FU[UU[tU[2]]] === tU[17] ? FU[UU[tU[2]]] = rU(oU[UU[tU[2]]]) : FU[UU[tU[2]]]
-         }
+     function EH(HH, BH) {
+       return null === BH ? HH : CH(null !== HH && void 0 !== HH ? HH : {
+         horizontal: 1 / 0,
+         vertical: 1 / 0
+       }, BH)
+     }
+   },
+   42248: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => rH,
+       g: () => SH
+     });
+     let AH = null;
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L1019-L1036` → after: `L137-L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L137-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/244.js#L137-L140) · [Before (L1019-L1036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/244.js#L1019-L1036)

```diff
-         function fU(...UU) {
-           UU[tU[12]] = tU[2];
-           const XU = require("path"),
-             {
-               version: zU
-             } = require("../../package"),
-             {
-               version: cU
-             } = require("@redacted/enterprise-plugin/package"),
-             {
-               version: yU
-             } = require("@redacted/components/package"),
-             {
-               sdkVersion: QU
-             } = require("@redacted/enterprise-plugin");
-           require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), XU.resolve(__dirname, uU(154) + uU(155) + "js")
- ... (2 more removed lines; see GitHub link above)
+     function rH(HH, BH) {
+       AH = {
+         conn: HH,
+         reason: BH
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L1038-L1101` → after: `L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/244.js#L142) · [Before (L1038-L1101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/244.js#L1038-L1101)

```diff
-       const YU = UU[tU[8]][XU(tU[27]) + XU(157) + XU(158)],
-         NU = YU ? Math[XU(159)](YU, UU[tU[82]]) : UU[tU[82]];
-       yU()[XU(160) + XU(161)](EU, EU);
-       const IU = UU[tU[24]] !== tU[53] && void 0 !== UU[tU[24]] ? UU[tU[24]] : UU[tU[8]][XU(tU[19]) + XU(163) + XU(164) + XU(165)];
-       if (NU > tU[2]) {
-         function iU(UU) {
-           var XU, zU, cU, yU, QU, AU, FU;
-           for (CU(XU = "" + (UU || ""), zU = XU.length, cU = [], yU = tU[2], QU = tU[2], AU = -tU[0]), FU = tU[2]; FU < zU; FU++) {
-             var oU = 'fet%v7JCPQ:LgxYcD|s{G2Bol`6ZS;3O1j&4$H+*ad?IrTb"~EF.k)M_R,5uA]h<#KmnWVNpy[=>/wX^qi(}9z8!@U0'.indexOf(XU[FU]);
-             if (oU !== -tU[0])
-               if (AU < tU[2]) AU = oU;
-               else {
-                 CU(AU += oU * tU[36], yU |= AU << QU, QU += (AU & tU[37]) > tU[38] ? tU[39] : tU[40]);
-                 do {
-                   CU(cU.push(yU & tU[11]), yU >>= tU[10], QU -= tU[10])
-                 } while (QU > tU[24]);
- ... (48 more removed lines; see GitHub link above)
+     }
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L1103-L1111` → after: `L144-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L144-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/244.js#L144-L147) · [Before (L1103-L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/244.js#L1103-L1111)

```diff
-           function nU(...UU) {
-             return UU[tU[12]] = tU[0], typeof FU[UU[tU[2]]] === tU[17] ? FU[UU[tU[2]]] = sU(oU[UU[tU[2]]]) : FU[UU[tU[2]]]
-           }
-           vU *= UU[tU[20]][nU(169) + nU(170)]
-         }
-         let VU = UU[tU[20]][HU(171) + HU(172) + "ss"] * NU;
-         NU < .3 && (VU *= NU), vU > VU && (vU = VU), CU(yU()[HU(tU[42])](EU, EU, vU), UU[tU[16]][HU(174) + HU(175)](EU))
-       }
-       UU[tU[16]][XU(176) + tU[86]] = UU[tU[20]][XU(177) + XU(tU[51]) + tU[86]] * (DU ? cU : AU)
+     function SH(HH) {
+       var BH;
+       const LH = (null === (BH = AH) || void 0 === BH ? void 0 : BH.conn) === HH ? AH.reason : null;
+       return AH = null, LH
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L1114` → after: `L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/244.js#L150) · [Before (L1114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/244.js#L1114)

```diff
-   38388: (UU, XU, zU) => {
+   42304: (HH, BH, LH) => {
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L1119-L1161` → after: `L155-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L155-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/244.js#L155-L158) · [Before (L1119-L1161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/244.js#L1119-L1161)

```diff
-     var cU = zU(38394),
-       yU = zU(1974);
-     const QU = 2,
-       AU = 1,
-       FU = {
-         xE: 1,
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
+     let AH = {
+       fire: () => {},
+       close: () => {}
+     };
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L1163-L1173` → after: `L160-L165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L160-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/244.js#L160-L165) · [Before (L1163-L1173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/244.js#L1163-L1173)

```diff
-     function oU(UU, XU, zU, FU, oU, DU, EU) {
-       if (oU.speed) return (0, cU.d)(XU, zU, FU, oU, DU, EU, UU), void(oU.ticksToReachMaxIdleFriction = QU);
-       const YU = FU.isOnGround(),
-         NU = XU.bloxd.getSyncedClientOptions(XU.bloxd.getPlayerReader(zU)),
-         IU = null === NU ? XU.bloxd.getClientPredictedOption(zU, "groundFrictionScale") : NU.groundFrictionScale,
-         pU = null === NU ? XU.bloxd.getClientPredictedOption(zU, "airFrictionScale") : NU.airFrictionScale,
-         aU = YU ? IU : pU,
-         tU = Math.max(AU, aU),
-         gU = oU.ticksToReachMaxIdleFriction / QU,
-         kU = (0, yU.y)(tU, aU, gU);
-       DU.friction = UU.standingFriction * ((null === NU ? XU.bloxd.getClientPredictedOption(zU, "airMomentumConservation") : NU.airMomentumConservation) ? kU : aU), oU.ticksToReachMaxIdleFriction > 0 && oU.ticksToReachMaxIdleFriction--
+     function rH(HH) {
+       AH = HH
+     }
+ 
+     function SH() {
+       return AH
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/245.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/245.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad)

#### 1. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L4-L10` → after: `L5-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L5-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/245.js#L5-L77) · [Before (L4-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/245.js#L4-L10)

```diff
-   40906: (UU, XU, zU) => {
-     zU.r(XU), zU.d(XU, {
-       getBlockFaces: () => NU,
-       getIngameIconUrl: () => aU,
-       getItemIconUrl: () => pU,
-       getItemTextureUrl: () => IU,
-       getParticleTextureUrl: () => tU
+   40621: (HH, BH, LH) => {
+     HH.exports = rH;
+     var AH = LH(330);
+ 
+     function rH(HH, BH) {
+       if (!(this instanceof rH)) return new rH(HH, BH);
+       var LH = AH.create();
+       AH.add(LH, HH, BH), this.base = AH.min(AH.create(), HH, LH), this.vec = AH.clone(BH), this.max = AH.max(AH.create(), HH, LH), this.mag = AH.length(this.vec)
+     }
+     var SH = rH.prototype;
+     SH.width = function() {
+       return this.vec[0]
+     }, SH.height = function() {
+       return this.vec[1]
+     }, SH.depth = function() {
+       return this.vec[2]
+ ... (57 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L12-L17` → after: `L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/245.js#L79) · [Before (L12-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/245.js#L12-L17)

```diff
-     var cU = zU(4895),
-       yU = zU(37756),
-       QU = zU(9775),
-       AU = zU(3526);
-     const FU = new Set,
-       oU = new Set;
+     var AH = LH(4477);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L21-L23` → after: `L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/245.js#L83) · [Before (L21-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/245.js#L21-L23)

```diff
-       FU.has(UU) || (FU.add(UU), oU.add(UU), DU ??= setTimeout((() => {
-         console.warn(`Docs gallery: no default texture for ${oU.size} names`, [...oU]), oU.clear(), DU = null
-       }), 1e3))
+       return null !== rH && HH === rH
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L26-L30` → after: `L86-L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L86-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/245.js#L86-L133) · [Before (L26-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/245.js#L26-L30)

```diff
-     function YU(UU, XU) {
-       try {
-         return (0, QU.getDefaultTexture)(UU, XU).url
-       } catch {
-         return EU(UU), null
+     function hH() {
+       this.Qp = !1, this.stopPropagation = !1, this.kp = !1, this.disabled = !1
+     }
+     class tH {
+       constructor(HH, BH) {
+         this.version = "0.7.0";
+         var LH = Object.assign({}, new hH, BH || {});
+         this.element = HH || document, this.Qp = !!LH.Qp, this.stopPropagation = !!LH.stopPropagation, this.kp = !!LH.kp, this.disabled = !!LH.disabled, this.filterEvents = (HH, BH) => !0, this.ignoreEvent = HH => !1, this.down = new AH.EventEmitter, this.up = new AH.EventEmitter … [truncated]
+           dx: 0,
+           dy: 0,
+           uLH: 0,
+           QLH: 0,
+           WLH: 0
+         }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
+           lastX: 0,
+           lastY: 0,
+ ... (32 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L35-L49` → after: `L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/245.js#L138) · [Before (L35-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/245.js#L35-L49)

```diff
-       var XU, zU;
-       const QU = yU.n[UU];
-       if (!QU || QU.itemTexture || !QU.textureInfo) return null;
-       const {
-         textureInfo: FU,
-         texturePerSide: oU
-       } = QU, DU = UU => {
-         return "string" === typeof(XU = oU && Array.isArray(FU) ? FU[oU[UU]] : FU) ? YU(XU, AU.j.BLOCK) : XU && "object" === typeof XU && "animTextures" in XU ? YU((0, cU.i)(XU), AU.j.BLOCK) : null;
-         var XU
-       }, EU = DU(2);
-       return EU ? {
-         top: EU,
-         left: null !== (XU = DU(4)) && void 0 !== XU ? XU : EU,
-         right: null !== (zU = DU(0)) && void 0 !== zU ? zU : EU
-       } : null
+       for (var BH in HH) HH[BH] = 0
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L53-L55` → after: `L142-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L142-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/245.js#L142-L155) · [Before (L53-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/245.js#L53-L55)

```diff
-       var XU;
-       const zU = yU.n[UU];
-       return YU(null !== (XU = null === zU || void 0 === zU ? void 0 : zU.itemTexture) && void 0 !== XU ? XU : "string" === typeof(null === zU || void 0 === zU ? void 0 : zU.textureInfo) ? zU.textureInfo : UU, AU.j.ITEM)
+       window.addEventListener("keydown", WH.bind(null, HH, !0), !1), window.addEventListener("keyup", WH.bind(null, HH, !1), !1);
+       var BH = {
+         passive: !0
+       };
+       HH.element.addEventListener("touchstart", YH.bind(void 0, HH), {
+         passive: !1
+       }), HH.element.addEventListener("touchend", QH.bind(void 0, HH), BH), HH.element.addEventListener("mousedown", MH.bind(null, HH, !0), BH), window.document.addEventListener("mouseup", MH.bind(null, HH, !1), BH), HH.element.addEventListener("touchmove", xH.bind(null, HH), BH) … [truncated]
+     }
+     var EH = 0,
+       XH = 0,
+       GH = null;
+ 
+     function YH(HH, BH) {
+       BH.preventDefault(), uH(BH)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L59-L60` → after: `L159-L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L159-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/245.js#L159-L303) · [Before (L59-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/245.js#L59-L60)

```diff
-       var XU, zU;
-       return yU.n[UU] ? null !== (XU = null === (zU = NU(UU)) || void 0 === zU ? void 0 : zU.top) && void 0 !== XU ? XU : IU(UU) : null
+       let BH = !1;
+       for (let LH = 0; LH < HH.touches.length; ++LH)
+         if (HH.touches[LH].identifier === GH) {
+           BH = !0;
+           break
+         } if (!BH) {
+         const BH = HH.changedTouches[0];
+         EH = BH.clientX, XH = BH.clientY, GH = BH.identifier
+       }
+     }
+ 
+     function QH(HH, BH) {
+       for (var LH = BH.changedTouches, AH = 0; AH < LH.length; ++AH) LH[AH].identifier === GH && (GH = null)
+     }
+ 
+     function WH(HH, BH, LH) {
+ ... (129 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L64` → after: `L312-L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L312-L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/245.js#L312-L481) · [Before (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/245.js#L64)

```diff
-       return YU(UU, AU.j.ICON)
+       if (HH && "object" === typeof HH) {
+         var BH = HH.which || HH.keyCode || HH.charCode;
+         BH && (HH = BH)
+       }
+       if ("number" === typeof HH) return hH[HH];
+       var LH, SH = String(HH);
+       return (LH = AH[SH.toLowerCase()]) ? LH : (LH = rH[SH.toLowerCase()]) || (1 === SH.length ? SH.charCodeAt(0) : void 0)
+     }
+     LH.isEventKey = function(HH, BH) {
+       if (HH && "object" === typeof HH) {
+         var LH = HH.which || HH.keyCode || HH.charCode;
+         if (null === LH || void 0 === LH) return !1;
+         if ("string" === typeof BH) {
+           var SH;
+           if (SH = AH[BH.toLowerCase()]) return SH === LH;
+           if (SH = rH[BH.toLowerCase()]) return SH === LH
+ ... (154 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L68-L71` → after: `L492-L705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L492-L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/245.js#L492-L705) · [Before (L68-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/245.js#L68-L71)

```diff
-       try {
-         return zU(3690)(`./${UU}.png`)
-       } catch {
-         return EU(UU), null
+       for (var BH = HH._data, LH = 1e3 / HH.oN, AH = BH.nowObject.now() + hH, rH = 0; BH.nowObject.now() >= BH.lastTickStarted + LH && BH.nowObject.now() < AH && ++rH <= SH;) HH.Dv(LH), BH.lastTickStarted += LH;
+       var tH = 5 * (LH + 5),
+         zH = BH.nowObject.now();
+       if (zH - BH.lastTickStarted > tH)
+         for (; zH >= BH.lastTickStarted + LH;) BH.lastTickStarted += LH
+     }
+   },
+   37578: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => hH
+     });
+     var AH = LH(45);
+     const rH = AH.useLayoutEffect;
+     const SH = function(HH) {
+       var BH = (0, AH.useRef)(HH);
+       return rH((function() {
+ ... (198 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L75` → after: `L709-L824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L709-L824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/245.js#L709-L824) · [Before (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/245.js#L75)

```diff
-   37794: (UU, XU, zU) => {
+   39627: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => rH,
+       i: () => SH,
+       m: () => hH,
+       o: () => tH
+     });
+     var AH = LH(38074);
+     class rH {
+       constructor(HH, BH, LH) {
+         this.gradient = HH, this.color1 = BH, this.color2 = LH
+       }
+       getColorToRef(HH) {
+         this.color2 ? AH.g.LerpToRef(this.color1, this.color2, Math.random(), HH) : HH.Tm(this.color1)
+       }
+     }
+ ... (100 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L79-L178` → after: `L828-L1044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L828-L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/245.js#L828-L1044) · [Before (L79-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/245.js#L79-L178)

```diff
-     const cU = {
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
- ... (84 more removed lines; see GitHub link above)
+     var AH = LH(37963),
+       rH = LH(38002),
+       SH = LH(39588);
+     class hH {
+       constructor() {
+         this.direction1 = new AH.o(0, 1, 0), this.direction2 = new AH.o(0, 1, 0), this.minEmitBox = new AH.o(-.5, -.5, -.5), this.maxEmitBox = new AH.o(.5, .5, .5)
+       }
+       startDirectionFunction(HH, BH, LH, SH) {
+         const hH = (0, rH.RandomRange)(this.direction1.x, this.direction2.x),
+           tH = (0, rH.RandomRange)(this.direction1.y, this.direction2.y),
+           zH = (0, rH.RandomRange)(this.direction1.z, this.direction2.z);
+         if (SH) return BH.x = hH, BH.y = tH, void(BH.z = zH);
+         AH.o.TransformNormalFromFloatsToRef(hH, tH, zH, HH, BH)
+       }
+       startPositionFunction(HH, BH, LH, SH) {
+         const hH = (0, rH.RandomRange)(this.minEmitBox.x, this.maxEmitBox.x),
+ ... (201 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L180-L195` → after: `L1046-L1049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR1046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L1046-L1049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/245.js#L1046-L1049) · [Before (L180-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/245.js#L180-L195)

```diff
-       },
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
+         let bH = .5 - xH * xH - vH * vH;
+         if (bH >= 0) {
+           const HH = 3 * LH[UH + WH + SH[VH + MH]];
+           bH *= bH, tH = bH * bH * (CH[HH] * xH + CH[HH + 1] * vH)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L197-L206` → after: `L1051-L1054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR1051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L1051-L1054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/245.js#L1051-L1054) · [Before (L197-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/245.js#L197-L206)

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
+         let kH = .5 - PH * PH - TH * TH;
+         if (kH >= 0) {
+           const HH = 3 * LH[UH + 1 + SH[VH + 1]];
+           kH *= kH, zH = kH * kH * (CH[HH] * PH + CH[HH + 1] * TH)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L208-L235` → after: `L1056-L1190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR1056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L1056-L1190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/245.js#L1056-L1190) · [Before (L208-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/245.js#L208-L235)

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
+         return 70 * (hH + tH + zH)
+       }
+       noise3D(HH, BH, LH) {
+         const AH = this.permMod12,
+           rH = this.perm;
+         let tH, zH, EH, XH;
+         const GH = (HH + BH + LH) * SH,
+           YH = Math.floor(HH + GH),
+           uH = Math.floor(BH + GH),
+           QH = Math.floor(LH + GH),
+           WH = (YH + uH + QH) * hH,
+           MH = HH - (YH - WH),
+           xH = BH - (uH - WH),
+           vH = LH - (QH - WH);
+         let PH, TH, UH, VH, OH, bH;
+         MH >= xH ? xH >= vH ? (PH = 1, TH = 0, UH = 0, VH = 1, OH = 1, bH = 0) : MH >= vH ? (PH = 1, TH = 0, UH = 0, VH = 1, OH = 0, bH = 1) : (PH = 0, TH = 0, UH = 1, VH = 1, OH = 0, bH = 1) : xH < vH ? (PH = 0, TH = 0, UH = 1, VH = 0, OH = 1, bH = 1) : MH < vH ? (PH = 0, TH = 1 … [truncated]
+ ... (119 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/246.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/246.js` (37 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768)

#### 1. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L4-L8` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/246.js#L4-L6) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/246.js#L4-L8)

```diff
-   37825: (UU, XU, zU) => {
-     zU.d(XU, {
-       c: () => QU,
-       d: () => cU,
-       h: () => yU
+   42383: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       LobbyManageView: () => UB
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L10-L18` → after: `L8-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/246.js#L8-L14) · [Before (L10-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/246.js#L10-L18)

```diff
-     const cU = 1 / 2.2,
-       yU = 2.2;
-     Math.sqrt(5);
-     let QU = .001
-   },
-   37855: (UU, XU, zU) => {
-     function cU(UU) {
-       return parseInt(UU.toString().replace(/\W/g, ""))
-     }
+     var AH = LH(45),
+       rH = LH(1475),
+       SH = LH(37881),
+       hH = LH(2642),
+       tH = LH(2650),
+       zH = LH(2628),
+       CH = LH(37439);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L20-L22` → after: `L16-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L16-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/246.js#L16-L28) · [Before (L20-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/246.js#L20-L22)

```diff
-     function yU(UU, XU) {
-       let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
-       return Math.abs(UU - XU) <= zU
+     function EH() {
+       const [HH, BH] = (0, AH.useState)(new Map);
+       return {
+         get: BH => HH.get(BH),
+         hold: (0, AH.useCallback)(((HH, LH, AH) => {
+           BH((BH => new Map(BH).set(HH, LH))), AH.then((() => {
+             BH((BH => {
+               const LH = new Map(BH);
+               return LH.delete(HH), LH
+             }))
+           }))
+         }), [])
+       }
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L26-L27` → after: `L42-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L42-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/246.js#L42-L45) · [Before (L26-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/246.js#L26-L27)

```diff
-       let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
-       return UU < XU - cU || UU > zU + cU
+       const AH = HH.filter((HH => HH.name !== BH)),
+         rH = AH.filter((HH => "none" === HH.role)).sort(((HH, BH) => BH.at - HH.at)),
+         SH = AH.filter((HH => "none" !== HH.role)).sort(((HH, BH) => LH.indexOf(HH.role) - LH.indexOf(BH.role) || BH.at - HH.at));
+       return [...HH.some((HH => HH.name === BH)) && null !== BH ? [BH] : [], ...[...rH, ...SH].map((HH => HH.name))]
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L31` → after: `L49-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L49-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/246.js#L49-L55) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/246.js#L31)

```diff
-       return UU === XU ? UU : Math.random() * (XU - UU) + UU
+       const LH = HH.banned.map((HH => HH.name)),
+         AH = new Set(LH);
+       return {
+         here: TH(HH.here, BH, HH.roles.map((HH => HH.role))),
+         away: HH.away.filter((HH => !AH.has(HH.name))).map((HH => HH.name)),
+         banned: LH
+       }
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L34-L35` → after: `L58-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L58-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/246.js#L58-L75) · [Before (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/246.js#L34-L35)

```diff
-     function FU(UU, XU, zU) {
-       return UU + (XU - UU) * zU
+     function VH(HH, BH) {
+       const LH = HH.here.find((HH => HH.name === BH));
+       if (LH) return {
+         section: "here",
+         player: LH
+       };
+       const AH = HH.banned.find((HH => HH.name === BH));
+       if (AH) return {
+         section: "banned",
+         bannedAt: AH.at
+       };
+       const rH = HH.away.find((HH => HH.name === BH));
+       return rH ? {
+         section: "away",
+         player: rH
+       } : {
+ ... (2 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L39-L40` → after: `L92-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L92-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/246.js#L92-L96) · [Before (L39-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/246.js#L39-L40)

```diff
-       let cU = tU(XU - UU, 360);
-       return cU > 180 && (cU -= 360), UU + cU * NU(zU)
+       return BH.map((BH => {
+         if ("string" === typeof BH) return BH;
+         const AH = "str" in BH ? BH.str : BH;
+         return "string" === typeof AH ? AH : "entityName" in AH ? AH.entityName : "translationKey" in AH ? HH(AH.translationKey, (0, YH.q)(AH.params, LH)) : ""
+       })).join("")
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L43-L45` → after: `L99-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L99-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/246.js#L99-L102) · [Before (L43-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/246.js#L43-L45)

```diff
-     function DU(UU, XU, zU) {
-       let cU;
-       return cU = UU != XU ? NU((zU - UU) / (XU - UU)) : 0, cU
+     function lH(HH, BH, LH, AH, rH) {
+       return rH - AH < 6e4 ? HH(`${LH}JustNow`) : HH(LH, {
+         time: (0, IH._)((0, YH.n)(BH, LH), AH, rH)
+       })
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L48-L51` → after: `L108-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L108-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/246.js#L108-L119) · [Before (L48-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/246.js#L48-L51)

```diff
-     function EU(UU, XU, zU, cU, yU) {
-       const QU = yU * yU,
-         AU = yU * QU;
-       return UU * (2 * AU - 3 * QU + 1) + zU * (-2 * AU + 3 * QU) + XU * (AU - 2 * QU + yU) + cU * (AU - QU)
+     function qH(HH) {
+       let {
+         status: BH
+       } = HH;
+       return (0, eH.jsx)("span", {
+         className: GH()("LobbyManageStatus", {
+           LobbyManageStatusRefused: !BH.ok
+         }),
+         children: (0, eH.jsx)(KH.b, {
+           text: BH.text
+         })
+       })
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L54-L56` → after: `L122-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L122-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/246.js#L122-L159) · [Before (L54-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/246.js#L54-L56)

```diff
-     function YU(UU, XU, zU, cU, yU) {
-       const QU = yU * yU;
-       return 6 * (QU - yU) * UU + (3 * QU - 4 * yU + 1) * XU + 6 * (-QU + yU) * zU + (3 * QU - 2 * yU) * cU
+     function gH(HH) {
+       let {
+         names: BH,
+         cap: LH,
+         filterFrom: rH,
+         moreLabel: SH,
+         reveal: hH = null,
+         renderRow: tH
+       } = HH;
+       const {
+         t: zH
+       } = (0, YH.B)(), [CH, EH] = (0, AH.useState)(!1), [XH, GH] = (0, AH.useState)(""), QH = CH || null !== hH && BH.indexOf(hH) >= LH, MH = (QH || BH.length <= LH) && null !== rH && BH.length > rH, xH = XH.trim().toLowerCase();
+       let vH = QH ? BH : BH.slice(0, LH);
+       return MH && "" !== xH && (vH = vH.filter((HH => HH.toLowerCase().includes(xH)))), (0, eH.jsxs)(eH.Fragment, {
+         children: [MH && (0, eH.jsx)(cH.e, {
+           className: "LobbyManageFilter",
+ ... (22 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L60-L62` → after: `L163-L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L163-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/246.js#L163-L209) · [Before (L60-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/246.js#L60-L62)

```diff
-       let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-         zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
-       return Math.min(zU, Math.max(XU, UU))
+       let {
+         value: BH,
+         placeholder: LH,
+         ariaLabel: rH,
+         maxLength: SH,
+         wide: hH = !1,
+         onSave: tH
+       } = HH;
+       const zH = (0, AH.useRef)(null),
+         [CH, EH] = (0, AH.useState)(0),
+         XH = (0, AH.useRef)(!0),
+         YH = (0, AH.useRef)(null),
+         uH = (0, AH.useRef)({
+           value: BH,
+           onSave: tH
+         });
+ ... (31 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L66` → after: `L220-L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L220-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/246.js#L220-L441) · [Before (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/246.js#L66)

```diff
-       return UU -= 2 * Math.PI * Math.floor((UU + Math.PI) / (2 * Math.PI))
+       var BH, LH, SH;
+       let {
+         name: hH,
+         place: tH,
+         openedIn: zH,
+         isYou: CH,
+         manage: XH,
+         hiddenNames: GH,
+         zIndex: QH
+       } = HH;
+       const {
+         t: WH,
+         selectedLanguage: MH
+       } = (0, YH.B)(), [xH, vH] = (0, AH.useState)(null), {
+         state: TH
+       } = XH, UH = `player:${hH}`, VH = function(HH, BH) {
+ ... (206 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L70-L71` → after: `L445-L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L445-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/246.js#L445-L582) · [Before (L70-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/246.js#L70-L71)

```diff
-       const XU = UU.toString(16);
-       return UU <= 15 ? ("0" + XU).toUpperCase() : XU.toUpperCase()
+       var BH, LH, rH, SH;
+       let {
+         manage: hH,
+         focusRequest: tH,
+         onFocused: zH
+       } = HH;
+       const {
+         t: CH
+       } = (0, YH.B)(), EH = (0, vH.e)("players"), XH = (0, vH.e)("hiddenPlayerNames"), GH = (0, AH.useRef)(null), {
+         state: QH
+       } = hH, MH = null === EH.localId ? null : null !== (BH = null === (LH = EH.byId[EH.localId]) || void 0 === LH ? void 0 : LH.name) && void 0 !== BH ? BH : null, [xH] = (0, AH.useState)((() => UH(QH, MH))), TH = function(HH, BH, LH) {
+         const AH = new Set([...HH.here, ...HH.away, ...HH.banned]),
+           rH = UH(BH, LH),
+           SH = BH => {
+             const LH = rH[BH].filter((HH => !AH.has(HH)));
+             for (const HH of LH) AH.add(HH);
+ ... (122 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L75-L83` → after: `L595-L596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L595-L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/246.js#L595-L596) · [Before (L75-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/246.js#L75-L83)

```diff
-       if (Math.log2) return Math.floor(Math.log2(UU));
-       if (UU < 0) return NaN;
-       if (0 === UU) return -1 / 0;
-       let XU = 0;
-       if (UU < 1) {
-         for (; UU < 1;) XU++, UU *= 2;
-         XU = -XU
-       } else if (UU > 1)
-         for (; UU > 1;) XU++, UU = Math.floor(UU / 2);
+       const BH = new Set;
+       for (const LH of HH) BH.add(LH.toLowerCase());
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L87-L88` → after: `L600-L711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L600-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/246.js#L600-L711) · [Before (L87-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/246.js#L87-L88)

```diff
-     function tU(UU, XU) {
-       return UU - Math.floor(UU / XU) * XU
+     function HB(HH) {
+       var BH, LH;
+       let {
+         state: rH,
+         lobbyName: SH,
+         listed: hH,
+         isListed: tH,
+         Dv: zH,
+         aT: CH,
+         statusOf: EH
+       } = HH;
+       const {
+         t: XH,
+         selectedLanguage: GH
+       } = (0, YH.B)(), uH = (0, wH.l)(), QH = (0, vH.e)("players"), MH = null === QH.localId ? null : null !== (BH = null === (LH = QH.byId[QH.localId]) || void 0 === LH ? void 0 : LH.name) && void 0 !== BH ? BH : null, xH = (0, AH.useMemo)((() => (0, sH.k)(uH.friends, SH, rH.her … [truncated]
+         let {
+ ... (96 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L91-L92` → after: `L714-L775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L714-L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/246.js#L714-L775) · [Before (L91-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/246.js#L91-L92)

```diff
-     function gU(UU, XU, zU) {
-       return (UU - XU) / (zU - XU)
+     function BB(HH) {
+       let {
+         manage: BH,
+         listing: LH
+       } = HH;
+       const {
+         t: AH
+       } = (0, YH.B)(), SH = (HH, LH) => ((0, rH.reportAnalyticsClick)({
+         id: "lobby_manage.set_listing",
+         value: HH
+       }), BH.send({
+         type: "setListing",
+         field: HH,
+         value: LH
+       }, `listing:${HH}`)), hH = HH => {
+         const LH = BH.statusOf(`listing:${HH}`);
+ ... (46 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L95-L96` → after: `L778-L820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L778-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/246.js#L778-L820) · [Before (L95-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/246.js#L95-L96)

```diff
-     function kU(UU, XU, zU) {
-       return UU * (zU - XU) + XU
+     function LB(HH) {
+       let {
+         value: BH,
+         ariaLabel: LH,
+         onSave: rH
+       } = HH;
+       const SH = (0, AH.useRef)(null),
+         hH = (0, AH.useRef)({
+           value: BH,
+           onSave: rH
+         });
+       hH.current = {
+         value: BH,
+         onSave: rH
+       };
+       const tH = (0, AH.useRef)(null),
+ ... (27 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L99-L101` → after: `L823-L983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L823-L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/246.js#L823-L983) · [Before (L99-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/246.js#L99-L101)

```diff
-     function GU(UU, XU) {
-       let zU = tU(XU - UU, 360);
-       return zU > 180 && (zU -= 360), zU
+     function AB(HH) {
+       let {
+         manage: BH
+       } = HH;
+       const {
+         lobbyName: LH,
+         shownLobbyName: AH
+       } = (0, vH.e)("connectedGame");
+       return BH.state.you.canSetVisibility && null !== LH ? (0, eH.jsx)(SB, {
+         manage: BH,
+         lobbyName: LH,
+         worldCode: null !== AH && void 0 !== AH ? AH : LH
+       }, LH) : (0, eH.jsx)(hB, {
+         manage: BH,
+         lobbyName: null !== LH && void 0 !== LH ? LH : ""
+       })
+ ... (145 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L105-L106` → after: `L1229-L1246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R1229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L1229-L1246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/246.js#L1229-L1246) · [Before (L105-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/246.js#L105-L106)

```diff
-       const zU = tU(UU, 2 * XU);
-       return XU - Math.abs(zU - XU)
+       return GB.map((LH => {
+         let {
+           group: AH,
+           title: rH
+         } = LH;
+         const SH = HH.filter((HH => HH.group === AH && void 0 === HH.parent)).map((LH => {
+           const AH = !0 === BH(LH) ? HH.filter((HH => HH.parent === LH.key)) : [];
+           return {
+             rule: LH,
+             children: AH
+           }
+         }));
+         return {
+           group: AH,
+           title: rH,
+           items: SH
+ ... (2 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L109-L111` → after: `L1249-L1261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R1249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L1249-L1261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/246.js#L1249-L1261) · [Before (L109-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/246.js#L109-L111)

```diff
-     function ZU(UU, XU, zU) {
-       let cU = NU(zU);
-       return cU = -2 * cU * cU * cU + 3 * cU * cU, XU * cU + UU * (1 - cU)
+     function uB(HH) {
+       return HH.flatMap((HH => {
+         let {
+           items: BH
+         } = HH;
+         return BH.flatMap((HH => {
+           let {
+             rule: BH,
+             children: LH
+           } = HH;
+           return [BH, ...LH]
+         }))
+       }))
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L114-L116` → after: `L1264-L1344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R1264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L1264-L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/246.js#L1264-L1344) · [Before (L114-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/246.js#L114-L116)

```diff
-     function RU(UU, XU, zU) {
-       let cU;
-       return cU = Math.abs(XU - UU) <= zU ? XU : UU + Math.sign(XU - UU) * zU, cU
+     function QB(HH) {
+       let {
+         manage: BH,
+         rowsShown: LH
+       } = HH;
+       const {
+         t: SH
+       } = (0, YH.B)(), hH = (0, vH.e)("hiddenPlayerNames"), {
+         rules: tH
+       } = BH.state, zH = EH(), CH = HH => {
+         const BH = zH.get(HH.key);
+         return void 0 === BH ? HH.value : BH
+       }, XH = YB(tH, CH), [GH] = (0, AH.useState)((() => uB(XH).map((HH => HH.key)))), uH = LH === 1 / 0 ? null : new Set(GH.slice(0, LH)), QH = HH => null === uH || uH.has(HH.key), {
+         hold: MH
+       } = zH, xH = (0, AH.useCallback)(((HH, LH) => {
+         (0, rH.reportAnalyticsClick)({
+ ... (65 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L119-L122` → after: `L1392-L1406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R1392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L1392-L1406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/246.js#L1392-L1406) · [Before (L119-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/246.js#L119-L122)

```diff
-     function PU(UU, XU, zU) {
-       const cU = GU(UU, XU);
-       let yU;
-       return yU = -zU < cU && cU < zU ? XU : RU(UU, XU = UU + cU, zU), yU
+     function vB(HH) {
+       let {
+         page: BH
+       } = HH;
+       const {
+         t: LH
+       } = (0, YH.B)(), AH = WB[BH];
+       return (0, eH.jsxs)(eH.Fragment, {
+         children: [(0, eH.jsx)(uH.c, {
+           name: AH.icon
+         }), " ", (0, eH.jsx)("span", {
+           className: "LobbyManagePageTitle",
+           children: LH(AH.title)
+         })]
+       })
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L125-L126` → after: `L1409-L1562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R1409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L1409-L1562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/246.js#L1409-L1562) · [Before (L125-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/246.js#L125-L126)

```diff
-     function WU(UU, XU, zU) {
-       return (UU - XU) / (zU - XU)
+     function PB(HH) {
+       var BH;
+       const {
+         t: LH
+       } = (0, YH.B)(), {
+         pages: SH,
+         landing: hH
+       } = HH, zH = (0, AH.useRef)(null), CH = (0, AH.useRef)(null), EH = (0, AH.useRef)(null), XH = (0, AH.useRef)(new Map), [uH, QH] = (0, AH.useState)(null), vH = (0, AH.useRef)(uH), PH = (0, AH.useRef)(0), [TH, UH] = (0, AH.useState)(SH[0]), VH = null !== uH && void 0 !== uH ? … [truncated]
+         const BH = uB(YB(HH.manage.state.rules, (HH => HH.value)));
+         return Math.max(1, Math.ceil(BH.length / MB))
+       })), mH = bH.flatMap((HH => "rules" === HH ? Array(kH).fill(HH) : [HH])), oH = function(HH, BH) {
+         const [LH, rH] = (0, AH.useState)(HH), SH = LH >= BH;
+         return SH && LH !== 1 / 0 && rH(1 / 0), (0, AH.useLayoutEffect)((() => {
+           if (SH) return;
+           let HH = !0;
+           return (0, xH.e)().then((() => {
+ ... (138 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L129-L130` → after: `L1565-L1569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R1565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L1565-L1569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/246.js#L1565-L1569) · [Before (L129-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/246.js#L129-L130)

```diff
-     function dU(UU, XU, zU) {
-       return (zU - XU) * UU + XU
+     function TB(HH) {
+       return void 0 === (null === HH || void 0 === HH ? void 0 : HH.page) ? null : {
+         page: HH.page,
+         seq: HH.seq
+       }
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L133-L135` → after: `L1572-L1626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R1572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L1572-L1626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/246.js#L1572-L1626) · [Before (L133-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/246.js#L133-L135)

```diff
-     function LU(UU, XU) {
-       const zU = UU % XU;
-       return 0 === zU ? XU : LU(XU, zU)
+     function UB(HH) {
+       let {
+         leaderboard: BH
+       } = HH;
+       const LH = function() {
+           const HH = (0, zH.j)("lobbyManage"),
+             [BH, LH] = (0, AH.useReducer)((HH => HH + 1), 0),
+             [rH] = (0, AH.useState)((() => new CH.e(LH)));
+           return (0, AH.useEffect)((() => {
+             const HH = rH.nextDeadline();
+             if (null === HH) return;
+             const BH = setTimeout((() => {
+               rH.expire(Date.now()), LH()
+             }), Math.max(0, HH - Date.now()));
+             return () => {
+               clearTimeout(BH)
+ ... (39 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L164-L172` → after: `L1629-L1632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R1629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L1629-L1632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/246.js#L1629-L1632) · [Before (L164-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/246.js#L164-L172)

```diff
-   37814: (UU, XU, zU) => {
-     zU.r(XU), zU.d(XU, {
-       Matrix: () => cU.e,
-       Quaternion: () => cU.f,
-       RegisterMathVector: () => cU.h,
-       TmpVectors: () => cU.l,
-       Vector2: () => cU.m,
-       Sp: () => cU.q,
-       Vector4: () => cU.t
+   37439: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => EH,
+       i: () => zH
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L174-L175` → after: `L1634-L1719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R1634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L1634-L1719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/246.js#L1634-L1719) · [Before (L174-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/246.js#L174-L175)

```diff
-     var cU = zU(37819);
-     (0, cU.h)()
+     var AH = LH(1475),
+       rH = LH(2036),
+       SH = LH(1998);
+     const hH = 1e4;
+     let tH = 0;
+ 
+     function zH(HH) {
+       const BH = ++tH;
+       return new Promise((LH => {
+         const tH = BH => {
+             zH(), clearTimeout(CH), !1 === (null === BH || void 0 === BH ? void 0 : BH.ok) && (0, AH.reportAnalyticsClick)({
+               id: "lobby_manage.refused",
+               value: HH.type
+             }), LH(BH)
+           },
+           zH = rH.e.subscribe("lobbyManage", (HH => {
+ ... (70 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L177-L181` → after: `L1721-L1792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R1721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L1721-L1792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/246.js#L1721-L1792) · [Before (L177-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/246.js#L177-L181)

```diff
-   37827: (UU, XU, zU) => {
-     function cU(UU, XU) {
-       const zU = [];
-       for (let cU = 0; cU < UU; ++cU) zU.push(XU());
-       return zU
+   37601: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => XH
+     });
+     var AH = LH(45),
+       rH = LH(1038),
+       SH = LH.n(rH),
+       hH = LH(1706),
+       tH = LH(1455),
+       zH = LH(1313),
+       CH = LH(1315),
+       EH = LH(1225);
+ 
+     function XH(HH) {
+       let {
+         label: BH,
+ ... (56 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L184-L185` → after: `L1813-L1864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R1813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L1813-L1864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/246.js#L1813-L1864) · [Before (L184-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/246.js#L184-L185)

```diff
-     function yU(UU, XU) {
-       return cU(UU, XU)
+     function XH(HH) {
+       let {
+         visibility: BH,
+         onPick: LH
+       } = HH;
+       const {
+         t: rH
+       } = (0, hH.B)(), XH = (0, AH.useRef)([]);
+       return (0, zH.jsx)("div", {
+         className: "WorldSocialTiles",
+         role: "group",
+         "aria-label": rH("worldSocial:whoCanJoin"),
+         children: EH.map(((HH, AH) => {
+           const hH = HH === BH;
+           return (0, zH.jsxs)("button", {
+             ref: HH => {
+ ... (36 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L188-L190` → after: `L1869-L1997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R1869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L1869-L1997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/246.js#L1869-L1997) · [Before (L188-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/246.js#L188-L190)

```diff
-       d: () => cU,
-       f: () => yU,
-       i: () => AU
+       d: () => tH
+     });
+     var AH = LH(1123),
+       rH = LH(2893),
+       SH = LH(4745),
+       hH = LH(1225);
+ 
+     function tH(HH) {
+       let {
+         IX: BH,
+         children: LH,
+         ...tH
+       } = HH;
+       const {
+         t: zH
+       } = (0, AH.B)();
+ ... (113 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L192` → after: `L1999-L2006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R1999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L1999-L2006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/246.js#L1999-L2006) · [Before (L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/246.js#L192)

```diff
-     const QU = ["push", "splice", "pop", "shift", "unshift"];
+     var AH = LH(602),
+       rH = LH(1123),
+       SH = LH(1664),
+       hH = LH(2893),
+       tH = LH(2833),
+       zH = LH(1455),
+       CH = LH(37599),
+       EH = LH(1225);
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L195-L211` → after: `L2009-L2018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R2009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L2009-L2018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/246.js#L2009-L2018) · [Before (L195-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/246.js#L195-L211)

```diff
-       const zU = QU.map((zU => function(UU, XU, zU) {
-         const cU = UU[XU];
-         if ("function" !== typeof cU) return null;
-         const yU = function() {
-           const cU = UU.length,
-             QU = yU.previous.apply(UU, arguments);
-           return zU(XU, cU), QU
-         };
-         return cU.next = yU, yU.previous = cU, UU[XU] = yU, () => {
-           const zU = yU.previous;
-           if (!zU) return;
-           const cU = yU.next;
-           cU ? (zU.next = cU, cU.previous = zU) : (zU.next = void 0, UU[XU] = zU), yU.next = void 0, yU.previous = void 0
-         }
-       }(UU, zU, XU)));
-       return () => {
- ... (1 more removed lines; see GitHub link above)
+       var LH;
+       return {
+         isError: !1,
+         name: HH,
+         ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
+         cosmetics: null !== BH && void 0 !== BH ? BH : {},
+         nameColour: null !== (LH = null === BH || void 0 === BH ? void 0 : BH.nameColour) && void 0 !== LH ? LH : AH.c,
+         location: {
+           status: "offline"
+         }
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L215` → after: `L2097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R2097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L2097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/246.js#L2097) · [Before (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/246.js#L215)

```diff
-   37863: (UU, XU, zU) => {
+   37582: (HH, BH, LH) => {
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L217` → after: `L2099-L2100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R2099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L2099-L2100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/246.js#L2099-L2100) · [Before (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/246.js#L217)

```diff
-       e: () => QU,
+       c: () => zH,
+       g: () => hH,
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L220` → after: `L2103-L2239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R2103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L2103-L2239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/246.js#L2103-L2239) · [Before (L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/246.js#L220)

```diff
-     const cU = {};
+     var AH = LH(45),
+       rH = LH(4991),
+       SH = LH(1922);
+ 
+     function hH(HH) {
+       const BH = {
+         lobbyName: HH,
+         answer: null,
+         response: rH.e.getSocialSettings(HH)
+       };
+       return BH.response.then((HH => {
+         BH.answer = HH
+       })), BH
+     }
+     const tH = new Map;
+ 
+ ... (121 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L223` → after: `L2242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R2242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L2242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/246.js#L2242) · [Before (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/246.js#L223)

```diff
-       cU[UU] = XU
+       return null === HH || void 0 === HH || !HH.canManage || AH(HH.whitelist, BH) ? "none" : "whitelist" === HH.visibility ? "required" : "quiet"
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L227` → after: `L2246-L2302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R2246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L2246-L2302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/246.js#L2246-L2302) · [Before (L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/246.js#L227)

```diff
-       return cU[UU]
+       if (null === HH) return !0;
+       const {
+         visibility: BH
+       } = HH;
+       return "public" === BH || "unlisted" === BH || "whitelist" === BH && HH.canManage
+     }
+ 
+     function zH(HH, BH, LH) {
+       if (LH) {
+         const LH = BH.filter((BH => !AH(HH.whitelist, BH)));
+         return {
+           ...HH,
+           whitelist: [...HH.whitelist, ...LH]
+         }
+       }
+       return {
+ ... (41 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/247.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/247.js` (58 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L3` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/247.js#L2) · [Before (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/247.js#L3)

```diff
- export const ids = [247, 254];
+ export const ids = [247];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L5-L25` → after: `L4-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/247.js#L4-L9) · [Before (L5-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/247.js#L5-L25)

```diff
-   39080: UU => {
-     UU.exports = function(UU) {
-       return null != UU && null != UU.constructor && "function" === typeof UU.constructor.isBuffer && UU.constructor.isBuffer(UU)
-     }
-   },
-   39062: (UU, XU, zU) => {
-     var cU = zU(39067),
-       yU = zU(39074),
-       QU = zU(39080);
-     zU.g.__TYPEDARRAY_POOL || (zU.g.__TYPEDARRAY_POOL = {
-       UINT8: yU([32, 0]),
-       UINT16: yU([32, 0]),
-       UINT32: yU([32, 0]),
-       INT8: yU([32, 0]),
-       INT16: yU([32, 0]),
-       INT32: yU([32, 0]),
- ... (5 more removed lines; see GitHub link above)
+   37747: (HH, BH, LH) => {
+     LH.d(BH, {
+       c: () => OH,
+       g: () => UH,
+       h: () => VH,
+       j: () => uH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L27-L31` → after: `L11-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L11-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/247.js#L11-L21) · [Before (L27-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/247.js#L27-L31)

```diff
-     var AU = "undefined" !== typeof Uint8ClampedArray,
-       FU = zU.g.__TYPEDARRAY_POOL;
-     FU.UINT8C || (FU.UINT8C = yU([32, 0])), FU.BUFFER || (FU.BUFFER = yU([32, 0]));
-     var oU = FU.DATA,
-       DU = FU.BUFFER;
+     var AH = LH(1038),
+       rH = LH.n(AH),
+       SH = LH(45),
+       hH = LH(69),
+       tH = LH(1369),
+       zH = LH(1455),
+       CH = LH(1365),
+       EH = LH(1214),
+       XH = LH(1123),
+       GH = LH(37754),
+       YH = LH(1225);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L34-L38` → after: `L24-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L24-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/247.js#L24-L27) · [Before (L34-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/247.js#L34-L38)

```diff
-       if (UU) {
-         var XU = UU.length || UU.byteLength,
-           zU = cU.log2(XU);
-         oU[zU].push(UU)
-       }
+       const [BH, LH] = (0, SH.useState)((() => (0, GH.l)(HH)));
+       return (0, SH.useEffect)((() => (LH((0, GH.l)(HH)), (0, GH.F)((() => {
+         LH((0, GH.l)(HH))
+       })))), [HH]), BH
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L41-L45` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/247.js#L30-L31) · [Before (L41-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/247.js#L41-L45)

```diff
-     function YU(UU) {
-       UU = cU.nextPow2(UU);
-       var XU = cU.log2(UU),
-         zU = oU[XU];
-       return zU.length > 0 ? zU.pop() : new ArrayBuffer(UU)
+     function QH(HH, BH) {
+       "function" === typeof HH ? HH(BH) : HH && (HH.current = BH)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L49` → after: `L35-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L35-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/247.js#L35-L41) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/247.js#L49)

```diff
-       return new Uint8Array(YU(UU), 0, UU)
+       let {
+         tutorial: BH,
+         step: LH,
+         enabled: AH = !0
+       } = HH;
+       const rH = uH(BH);
+       return AH && rH === LH
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L52-L53` → after: `L44-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L44-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/247.js#L44-L47) · [Before (L52-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/247.js#L52-L53)

```diff
-     function IU(UU) {
-       return new Uint16Array(YU(2 * UU), 0, UU)
+     function MH(HH, BH) {
+       const LH = (0, GH.m)(HH),
+         AH = LH.indexOf(BH);
+       return !LH.slice(AH + 1).some((BH => (0, GH.s)(HH, BH)))
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L56-L57` → after: `L50-L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L50-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/247.js#L50-L65) · [Before (L56-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/247.js#L56-L57)

```diff
-     function pU(UU) {
-       return new Uint32Array(YU(4 * UU), 0, UU)
+     function xH(HH, BH, LH, AH) {
+       let {
+         tutorial: rH,
+         step: SH,
+         waitForClick: hH = !1,
+         onPrevious: tH
+       } = HH;
+       const zH = BH && (0, GH.p)(rH, SH),
+         CH = BH && !MH(rH, SH),
+         XH = hH ? AH : LH;
+       let YH = null;
+       zH ? YH = () => {
+         null === tH || void 0 === tH || tH(), (0, GH.o)(rH, SH)
+       } : CH && (YH = () => {
+         (0, GH.j)(rH)
+       }), (0, EH.r)("popup", null !== XH && void 0 !== XH ? XH : LH, YH, BH && null !== XH, null, zH ? void 0 : "controller:menusSkipTutorial")
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L61-L62` → after: `L69-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L69-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/247.js#L69-L108) · [Before (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/247.js#L61-L62)

```diff
-       return new Int8Array(YU(UU), 0, UU)
-     }
+       let {
+         tutorial: BH,
+         step: LH,
+         text: AH,
+         waitForClick: rH = !1,
+         onPrevious: SH
+       } = HH;
+       const {
+         t: hH
+       } = (0, XH.B)(), tH = MH(BH, LH);
+       return (0, YH.jsxs)(YH.Fragment, {
+         children: [(0, YH.jsx)("div", {
+           className: "TutorialStepText",
+           children: AH
+         }), (0, YH.jsxs)("div", {
+           className: "TutorialStepButtons",
+ ... (24 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L65` → after: `L111-L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L111-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/247.js#L111-L153) · [Before (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/247.js#L65)

```diff
-       return new Int16Array(YU(2 * UU), 0, UU)
+       let {
+         rect: BH,
+         margin: LH
+       } = HH;
+       const AH = Math.max(0, BH.top - LH),
+         rH = BH.bottom + LH,
+         SH = Math.max(0, BH.left - LH),
+         hH = BH.right + LH;
+       return (0, YH.jsxs)(YH.Fragment, {
+         children: [(0, YH.jsx)("div", {
+           className: "TutorialSpotlightBackdrop",
+           style: {
+             top: 0,
+             left: 0,
+             right: 0,
+             height: AH
+ ... (27 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L69-L70` → after: `L157-L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L157-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/247.js#L157-L259) · [Before (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/247.js#L69-L70)

```diff
-       return new Int32Array(YU(4 * UU), 0, UU)
-     }
+       let {
+         target: BH,
+         placement: LH,
+         boxRef: AH,
+         className: zH,
+         spotlight: EH = !0,
+         spotlightMargin: XH = PH,
+         children: GH
+       } = HH;
+       const {
+         getArrowProps: uH,
+         getTooltipProps: QH,
+         setTooltipRef: WH,
+         setTriggerRef: MH,
+         update: xH
+       } = (0, tH.b)({
+ ... (87 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L73` → after: `L262-L273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L262-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/247.js#L262-L273) · [Before (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/247.js#L73)

```diff
-       return new Float32Array(YU(4 * UU), 0, UU)
+       const BH = WH(HH),
+         LH = (0, SH.useRef)(null);
+       return xH(HH, BH, LH, null), BH ? (0, hH.createPortal)((0, YH.jsx)("div", {
+         className: "TutorialCentreBackdrop",
+         children: (0, YH.jsx)("div", {
+           ref: LH,
+           className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
+           children: (0, YH.jsx)(vH, {
+             ...HH
+           })
+         })
+       }), (0, CH.j)()) : null
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L76-L77` → after: `L294-L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L294-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/247.js#L294-L298) · [Before (L76-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/247.js#L76-L77)

```diff
-     function GU(UU) {
-       return new Float64Array(YU(8 * UU), 0, UU)
+     function tH() {
+       return [...hH.values()].sort(((HH, BH) => {
+         var LH, AH;
+         return (null !== (LH = HH.order) && void 0 !== LH ? LH : 0) - (null !== (AH = BH.order) && void 0 !== AH ? AH : 0)
+       }))
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L81` → after: `L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/247.js#L303) · [Before (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/247.js#L81)

```diff
-       return AU ? new Uint8ClampedArray(YU(UU), 0, UU) : NU(UU)
+       zH = HH
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L85-L172` → after: `L308-L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L308-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/247.js#L308-L312) · [Before (L85-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/247.js#L85-L172)

```diff
-       return new DataView(YU(UU), 0, UU)
-     }
-     XU.free = function(UU) {
-       if (QU(UU)) DU[cU.log2(UU.length)].push(UU);
-       else {
-         if ("[object ArrayBuffer]" !== Object.prototype.toString.call(UU) && (UU = UU.buffer), !UU) return;
-         var XU = UU.length || UU.byteLength,
-           zU = 0 | cU.log2(XU);
-         oU[zU].push(UU)
-       }
-     }, XU.freeUint8 = XU.freeUint16 = XU.freeUint32 = XU.freeInt8 = XU.freeInt16 = XU.freeInt32 = XU.freeFloat32 = XU.freeFloat = XU.freeFloat64 = XU.freeDouble = XU.freeUint8Clamped = XU.freeDataView = function(UU) {
-       EU(UU.buffer)
-     }, XU.freeArrayBuffer = EU, XU.freeBuffer = function(UU) {
-       DU[cU.log2(UU.length)].push(UU)
-     }, XU.malloc = function(UU, XU) {
-       if (void 0 === XU || "arraybuffer" === XU) return YU(UU);
- ... (72 more removed lines; see GitHub link above)
+       EH = !0;
+       try {
+         HH.onClick()
+       } finally {
+         EH = !1
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L174-L186` → after: `L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/247.js#L314) · [Before (L174-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/247.js#L174-L186)

```diff
-     }(cU), XU.reverse = function(UU) {
-       return cU[255 & UU] << 24 | cU[UU >>> 8 & 255] << 16 | cU[UU >>> 16 & 255] << 8 | cU[UU >>> 24 & 255]
-     }, XU.interleave2 = function(UU, XU) {
-       return (UU = 1431655765 & ((UU = 858993459 & ((UU = 252645135 & ((UU = 16711935 & ((UU &= 65535) | UU << 8)) | UU << 4)) | UU << 2)) | UU << 1)) | (XU = 1431655765 & ((XU = 858993459 & ((XU = 252645135 & ((XU = 16711935 & ((XU &= 65535) | XU << 8)) | XU << 4)) | XU << 2)) | … [truncated]
-     }, XU.deinterleave2 = function(UU, XU) {
-       return (UU = 65535 & ((UU = 16711935 & ((UU = 252645135 & ((UU = 858993459 & ((UU = UU >>> XU & 1431655765) | UU >>> 1)) | UU >>> 2)) | UU >>> 4)) | UU >>> 16)) << 16 >> 16
-     }, XU.interleave3 = function(UU, XU, zU) {
-       return UU = 1227133513 & ((UU = 3272356035 & ((UU = 251719695 & ((UU = 4278190335 & ((UU &= 1023) | UU << 16)) | UU << 8)) | UU << 4)) | UU << 2), (UU |= (XU = 1227133513 & ((XU = 3272356035 & ((XU = 251719695 & ((XU = 4278190335 & ((XU &= 1023) | XU << 16)) | XU << 8)) | X … [truncated]
-     }, XU.deinterleave3 = function(UU, XU) {
-       return (UU = 1023 & ((UU = 4278190335 & ((UU = 251719695 & ((UU = 3272356035 & ((UU = UU >>> XU & 1227133513) | UU >>> 2)) | UU >>> 4)) | UU >>> 8)) | UU >>> 16)) << 22 >> 22
-     }, XU.nextCombination = function(UU) {
-       var XU = UU | UU - 1;
-       return XU + 1 | (~XU & -~XU) - 1 >>> zU(UU) + 1
+       HH.panel && "clientGame" === AH.c.get("openInGameMenuName") && CH(HH.id)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L209-L222` → after: `L317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/247.js#L317) · [Before (L209-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/247.js#L209-L222)

```diff
-     function FU(UU, XU) {
-       for (var zU = 0; zU < UU; ++zU)
-         if (!(XU[zU] <= XU[zU + UU])) return !0;
-       return !1
-     }
- 
-     function oU(UU, XU, zU, cU) {
-       for (var yU = 0, QU = 0, AU = 0, oU = UU.length; AU < oU; ++AU) {
-         var DU = UU[AU];
-         if (!FU(XU, DU)) {
-           for (var EU = 0; EU < 2 * XU; ++EU) zU[yU++] = DU[EU];
-           cU[QU++] = AU
-         }
-       }
+     function GH() {
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L226-L245` → after: `L321-L322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L321-L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/247.js#L321-L322) · [Before (L226-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/247.js#L226-L245)

```diff
-     function DU(UU, XU, zU, cU) {
-       var FU = UU.length,
-         DU = XU.length;
-       if (!(FU <= 0 || DU <= 0)) {
-         var EU = UU[0].length >>> 1;
-         if (!(EU <= 0)) {
-           var YU, NU = yU.mallocDouble(2 * EU * FU),
-             IU = yU.mallocInt32(FU);
-           if ((FU = oU(UU, EU, NU, IU)) > 0) {
-             if (1 === EU && cU) QU.init(FU), YU = QU.sweepComplete(EU, zU, 0, FU, NU, IU, 0, FU, NU, IU);
-             else {
-               var pU = yU.mallocDouble(2 * EU * DU),
-                 aU = yU.mallocInt32(DU);
-               (DU = oU(XU, EU, pU, aU)) > 0 && (QU.init(FU + DU), YU = 1 === EU ? QU.sweepBipartite(EU, zU, 0, FU, NU, IU, 0, DU, pU, aU) : AU(EU, zU, cU, FU, NU, IU, DU, pU, aU), yU.free(pU), yU.free(aU))
-             }
-             yU.free(NU), yU.free(IU)
- ... (4 more removed lines; see GitHub link above)
+     function YH() {
+       return tH().filter((HH => HH.panel && !HH.disabled))
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L248-L249` → after: `L325-L328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L325-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/247.js#L325-L328) · [Before (L248-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/247.js#L248-L249)

```diff
-     function EU(UU, XU) {
-       cU.push([UU, XU])
+     function uH(HH) {
+       const BH = YH(),
+         LH = BH.findIndex((HH => HH.id === zH));
+       return !(LH < 0 || BH.length < 2) && (XH(BH[(LH + HH + BH.length) % BH.length]), !0)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L265-L270` → after: `L331-L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L331-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/247.js#L331-L333) · [Before (L265-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/247.js#L265-L270)

```diff
-     function IU(UU) {
-       var XU = "bruteForce" + (UU ? "Full" : "Partial"),
-         cU = [],
-         AU = NU.slice();
-       UU || AU.splice(3, 0, yU);
-       var FU = ["function " + XU + "(" + AU.join() + "){"];
+     function QH() {
+       return null !== zH && YH().length > 1
+     }
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L272-L287` → after: `L335-L336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L335-L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/247.js#L335-L336) · [Before (L272-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/247.js#L272-L287)

```diff
-       function oU(XU, yU) {
-         var AU = function(UU, XU, cU) {
-           var yU = "bruteForce" + (UU ? "Red" : "Blue") + (XU ? "Flip" : "") + (cU ? "Full" : ""),
-             AU = ["function ", yU, "(", NU.join(), "){", "var ", QU, "=2*", zU, ";"],
-             FU = "for(var i=rs,rp=es*rs;i<re;++i,rp+=es){var x0=rb[ax+rp],x1=rb[ax+rp+d],xi=ri[i];",
-             oU = "for(var j=bs,bp=es*bs;j<be;++j,bp+=es){var y0=bb[ax+bp]," + (cU ? "y1=bb[ax+bp+d]," : "") + "yi=bi[j];";
-           return UU ? AU.push(FU, "Q", ":", oU) : AU.push(oU, "Q", ":", FU), cU ? AU.push("if(y1<x0||x1<y0)continue;") : XU ? AU.push("if(y0<=x0||x1<y0)continue;") : AU.push("if(y0<x0||x1<y0)continue;"), AU.push("for(var k=ax+1;k<d;++k){var r0=rb[k+rp],r1=rb[k+d+rp],b0=bb[k+bp],b … [truncated]
-             name: yU,
-             code: AU.join("")
-           }
-         }(XU, yU, UU);
-         cU.push(AU.code), FU.push("return " + AU.name + "(" + NU.join() + ");")
-       }
-       FU.push("if(re-rs>be-bs){"), UU ? (oU(!0, !1), FU.push("}else{"), oU(!1, !1)) : (FU.push("if(fp){"), oU(!0, !0), FU.push("}else{"), oU(!0, !1), FU.push("}}else{if(fp){"), oU(!1, !0), FU.push("}else{"), oU(!1, !1), FU.push("}")), FU.push("}}return " + XU);
-       var DU = cU.join("") + FU.join("");
-       return new Function(DU)()
+     function WH() {
+       CH(null)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L389-L393` → after: `L339-L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L339-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/247.js#L339-L340) · [Before (L389-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/247.js#L389-L393)

```diff
-     function WU(UU, XU, zU, cU, yU, QU, AU, FU, oU) {
-       var DU = BU * UU;
-       RU[DU] = XU, RU[DU + 1] = zU, RU[DU + 2] = cU, RU[DU + 3] = yU, RU[DU + 4] = QU, RU[DU + 5] = AU;
-       var EU = ZU * UU;
-       PU[EU] = FU, PU[EU + 1] = oU
+     function MH() {
+       "inventory" !== AH.c.get("openInGameMenuName") && CH(null)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L396-L412` → after: `L343-L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L343-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/247.js#L343-L345) · [Before (L396-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/247.js#L396-L412)

```diff
-     function dU(UU, XU, zU, cU, yU, QU, AU, FU, oU, DU, EU) {
-       var YU = 2 * UU,
-         NU = oU * YU,
-         IU = DU[NU + XU];
-       UU: for (var pU = yU, aU = yU * YU; pU < QU; ++pU, aU += YU) {
-         var tU = AU[aU + XU],
-           gU = AU[aU + XU + UU];
-         if (!(IU < tU || gU < IU) && (!cU || IU !== tU)) {
-           for (var kU, GU = FU[pU], BU = XU + 1; BU < UU; ++BU) {
-             tU = AU[aU + BU], gU = AU[aU + BU + UU];
-             var ZU = DU[NU + BU],
-               RU = DU[NU + BU + UU];
-             if (gU < ZU || RU < tU) continue UU
-           }
-           if (void 0 !== (kU = cU ? zU(EU, GU) : zU(GU, EU))) return kU
-         }
- ... (1 more removed lines; see GitHub link above)
+     function xH() {
+       const HH = zH;
+       return CH(null), HH
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L415-L434` → after: `L348-L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L348-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/247.js#L348-L350) · [Before (L415-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/247.js#L415-L434)

```diff
-     function LU(UU, XU, zU, cU, yU, QU, AU, FU, oU, DU) {
-       var EU = 2 * UU,
-         YU = FU * EU,
-         NU = oU[YU + XU];
-       UU: for (var IU = cU, pU = cU * EU; IU < yU; ++IU, pU += EU) {
-         var aU = AU[IU];
-         if (aU !== DU) {
-           var tU = QU[pU + XU],
-             gU = QU[pU + XU + UU];
-           if (!(NU < tU || gU < NU)) {
-             for (var kU = XU + 1; kU < UU; ++kU) {
-               tU = QU[pU + kU], gU = QU[pU + kU + UU];
-               var GU = oU[YU + kU],
-                 BU = oU[YU + kU + UU];
-               if (gU < GU || BU < tU) continue UU
-             }
- ... (4 more removed lines; see GitHub link above)
+     function vH(HH) {
+       return hH.set(HH.id, HH), rH.k.AX(SH, tH(), !0), () => {
+         hH.get(HH.id) === HH && (hH.delete(HH.id), rH.k.AX(SH, tH()))
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L438-L482` → after: `L354-L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L354-L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/247.js#L354-L371) · [Before (L438-L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/247.js#L438-L482)

```diff
-   39099: (UU, XU, zU) => {
-     UU.exports = function(UU, XU, zU, AU, FU, oU) {
-       if (AU <= zU + 1) return zU;
-       var DU = zU,
-         EU = AU,
-         YU = AU + zU >>> 1,
-         NU = 2 * UU,
-         IU = YU,
-         pU = FU[NU * YU + XU];
-       for (; DU < EU;) {
-         if (EU - DU < yU) {
-           QU(UU, XU, DU, EU, FU, oU), pU = FU[NU * YU + XU];
-           break
-         }
-         var aU = EU - DU,
-           tU = Math.random() * aU + DU | 0,
- ... (29 more removed lines; see GitHub link above)
+   37474: (HH, BH, LH) => {
+     LH.d(BH, {
+       b: () => tH,
+       c: () => xH,
+       g: () => WH,
+       j: () => MH,
+       n: () => GH,
+       p: () => CH,
+       t: () => QH,
+       u: () => YH,
+       v: () => EH
+     });
+     var AH = LH(15),
+       rH = LH(18),
+       SH = LH(1241),
+       hH = LH(37479);
+ ... (2 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L484-L493` → after: `L373-L374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L373-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/247.js#L373-L374) · [Before (L484-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/247.js#L484-L493)

```diff
-     function QU(UU, XU, zU, cU, yU, QU) {
-       for (var AU = 2 * UU, FU = AU * (zU + 1) + XU, oU = zU + 1; oU < cU; ++oU, FU += AU)
-         for (var DU = yU[FU], EU = oU, YU = AU * (oU - 1); EU > zU && yU[YU + XU] > DU; --EU, YU -= AU) {
-           for (var NU = YU, IU = YU + AU, pU = 0; pU < AU; ++pU, ++NU, ++IU) {
-             var aU = yU[NU];
-             yU[NU] = yU[IU], yU[IU] = aU
-           }
-           var tU = QU[EU];
-           QU[EU] = QU[EU - 1], QU[EU - 1] = tU
-         }
+     function CH() {
+       return zH
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L512-L521` → after: `L377-L383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L377-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/247.js#L377-L383) · [Before (L512-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/247.js#L512-L521)

```diff
-     function zU(UU, XU, zU) {
-       for (var cU = 2 * (UU + 1), yU = UU + 1; yU <= XU; ++yU) {
-         for (var QU = zU[cU++], AU = zU[cU++], FU = yU, oU = cU - 2; FU-- > UU;) {
-           var DU = zU[oU - 2],
-             EU = zU[oU - 1];
-           if (DU < QU) break;
-           if (DU === QU && EU < AU) break;
-           zU[oU] = DU, zU[oU + 1] = EU, oU -= 2
-         }
-         zU[oU] = QU, zU[oU + 1] = AU
+     function EH(HH, BH) {
+       const LH = {
+         content: HH,
+         menu: BH
+       };
+       return zH = LH, rH.k.AX(tH, zH, !0), () => {
+         zH === LH && (zH = null, uH = !1, WH(), rH.k.AX(tH, null))
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L525-L529` → after: `L388-L389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L388-L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/247.js#L388-L389) · [Before (L525-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/247.js#L525-L529)

```diff
-     function cU(UU, XU, zU) {
-       XU *= 2;
-       var cU = zU[UU *= 2],
-         yU = zU[UU + 1];
-       zU[UU] = zU[XU], zU[UU + 1] = zU[XU + 1], zU[XU] = cU, zU[XU + 1] = yU
+     function GH() {
+       return XH
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L532-L533` → after: `L392-L395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L392-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/247.js#L392-L395) · [Before (L532-L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/247.js#L532-L533)

```diff
-     function yU(UU, XU, zU) {
-       XU *= 2, zU[UU *= 2] = zU[XU], zU[UU + 1] = zU[XU + 1]
+     function YH(HH) {
+       return XH = HH, () => {
+         XH === HH && (XH = null)
+       }
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L536-L540` → after: `L399-L404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L399-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/247.js#L399-L404) · [Before (L536-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/247.js#L536-L540)

```diff
-     function QU(UU, XU, zU, cU) {
-       XU *= 2, zU *= 2;
-       var yU = cU[UU *= 2],
-         QU = cU[UU + 1];
-       cU[UU] = cU[XU], cU[UU + 1] = cU[XU + 1], cU[XU] = cU[zU], cU[XU + 1] = cU[zU + 1], cU[zU] = yU, cU[zU + 1] = QU
+     function QH() {
+       const HH = AH.c.get("openInGameMenuName");
+       "clientGame" !== HH && (uH = "inventory" === HH), (0, hH.n)() || (0, hH.j)(), (0, SH.x)(SH.d), AH.c.set({
+         openInGameMenuName: "clientGame",
+         openEverythingMenuName: null
+       })
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L543-L544` → after: `L407-L408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L407-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/247.js#L407-L408) · [Before (L543-L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/247.js#L543-L544)

```diff
-     function AU(UU, XU, zU, cU, yU) {
-       XU *= 2, yU[UU *= 2] = yU[XU], yU[XU] = zU, yU[UU + 1] = yU[XU + 1], yU[XU + 1] = cU
+     function WH() {
+       vH(!1)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L547-L551` → after: `L411-L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L411-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/247.js#L411-L412) · [Before (L547-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/247.js#L547-L551)

```diff
-     function FU(UU, XU, zU) {
-       XU *= 2;
-       var cU = zU[UU *= 2],
-         yU = zU[XU];
-       return !(cU < yU) && (cU !== yU || zU[UU + 1] > zU[XU + 1])
+     function MH() {
+       vH(uH)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L554-L556` → after: `L415-L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L415-L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/247.js#L415-L416) · [Before (L554-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/247.js#L554-L556)

```diff
-     function oU(UU, XU, zU, cU) {
-       var yU = cU[UU *= 2];
-       return yU < XU || yU === XU && cU[UU + 1] < zU
+     function xH() {
+       uH && vH(!1)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L559-L592` → after: `L419-L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L419-L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/247.js#L419-L422) · [Before (L559-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/247.js#L559-L592)

```diff
-     function DU(UU, EU, YU) {
-       var NU = (EU - UU + 1) / 6 | 0,
-         IU = UU + NU,
-         pU = EU - NU,
-         aU = UU + EU >> 1,
-         tU = aU - NU,
-         gU = aU + NU,
-         kU = IU,
-         GU = tU,
-         BU = aU,
-         ZU = gU,
-         RU = pU,
-         PU = UU + 1,
-         WU = EU - 1,
-         dU = 0;
-       FU(kU, GU, YU) && (dU = kU, kU = GU, GU = dU), FU(ZU, RU, YU) && (dU = ZU, ZU = RU, RU = dU), FU(kU, BU, YU) && (dU = kU, kU = BU, BU = dU), FU(GU, BU, YU) && (dU = GU, GU = BU, BU = dU), FU(kU, ZU, YU) && (dU = kU, kU = ZU, ZU = dU), FU(BU, ZU, YU) && (dU = BU, BU = ZU, ZU … [truncated]
- ... (18 more removed lines; see GitHub link above)
+     function vH(HH) {
+       "clientGame" === AH.c.get("openInGameMenuName") && AH.c.set({
+         openInGameMenuName: HH ? "inventory" : null
+       }), HH || (0, hH.j)(), uH = !1
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L595-L680` → after: `L425-L445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L425-L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/247.js#L425-L445) · [Before (L595-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/247.js#L595-L680)

```diff
-   39082: (UU, XU, zU) => {
-     UU.exports = {
-       init: function(UU) {
-         var XU = yU.nextPow2(UU);
-         oU.length < XU && (cU.free(oU), oU = cU.mallocInt32(XU));
-         DU.length < XU && (cU.free(DU), DU = cU.mallocInt32(XU));
-         EU.length < XU && (cU.free(EU), EU = cU.mallocInt32(XU));
-         YU.length < XU && (cU.free(YU), YU = cU.mallocInt32(XU));
-         NU.length < XU && (cU.free(NU), NU = cU.mallocInt32(XU));
-         IU.length < XU && (cU.free(IU), IU = cU.mallocInt32(XU));
-         var zU = 8 * XU;
-         pU.length < zU && (cU.free(pU), pU = cU.mallocDouble(zU))
-       },
-       sweepBipartite: function(UU, XU, zU, cU, yU, FU, NU, IU, gU, kU) {
-         for (var GU = 0, BU = 2 * UU, ZU = UU - 1, RU = BU - 1, PU = zU; PU < cU; ++PU) {
-           var WU = FU[PU],
- ... (70 more removed lines; see GitHub link above)
+   37754: (HH, BH, LH) => {
+     LH.d(BH, {
+       A: () => gH,
+       E: () => cH,
+       F: () => NH,
+       d: () => zH,
+       e: () => oH,
+       i: () => tH,
+       j: () => KH,
+       l: () => kH,
+       m: () => UH,
+       o: () => lH,
+       p: () => fH,
+       s: () => bH,
+       w: () => eH,
+       z: () => qH
+ ... (5 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L682-L725` → after: `L447-L454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L447-L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/247.js#L447-L454) · [Before (L682-L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/247.js#L682-L725)

```diff
-       scanBipartite: function(UU, XU, zU, cU, yU, FU, EU, YU, NU, IU, gU, kU) {
-         var GU = 0,
-           BU = 2 * UU,
-           ZU = XU,
-           RU = XU + UU,
-           PU = 1,
-           WU = 1;
-         cU ? WU = AU : PU = AU;
-         for (var dU = yU; dU < FU; ++dU) {
-           var LU = dU + PU,
-             eU = BU * dU;
-           pU[GU++] = EU[eU + ZU], pU[GU++] = -LU, pU[GU++] = EU[eU + RU], pU[GU++] = LU
-         }
-         for (dU = NU; dU < IU; ++dU) {
-           LU = dU + WU;
-           var CU = BU * dU;
- ... (28 more removed lines; see GitHub link above)
+       SH = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
+       hH = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
+       tH = SH.filter((HH => "docsButton" !== HH)),
+       zH = hH.filter((HH => "aiHelperButton" !== HH)),
+       CH = "codeEditorTutorials",
+       EH = {
+         codeBlockIntro: "codeBlockIntroShown",
+         worldCodeIntro: "worldCodeIntroShown"
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L727-L784` → after: `L456-L467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L456-L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/247.js#L456-L467) · [Before (L727-L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/247.js#L727-L784)

```diff
-       scanComplete: function(UU, XU, zU, cU, yU, FU, DU, EU, YU, NU, IU) {
-         for (var aU = 0, tU = 2 * UU, gU = XU, kU = XU + UU, GU = cU; GU < yU; ++GU) {
-           var BU = GU + AU,
-             ZU = tU * GU;
-           pU[aU++] = FU[ZU + gU], pU[aU++] = -BU, pU[aU++] = FU[ZU + kU], pU[aU++] = BU
-         }
-         for (GU = EU; GU < YU; ++GU) {
-           BU = GU + 1;
-           var RU = tU * GU;
-           pU[aU++] = NU[RU + gU], pU[aU++] = -BU
-         }
-         var PU = aU >>> 1;
-         QU(pU, PU);
-         var WU = 0;
-         for (GU = 0; GU < PU; ++GU) {
-           var dU = 0 | pU[2 * GU + 1];
- ... (42 more removed lines; see GitHub link above)
+       XH = {
+         welcome: "welcomeComplete",
+         docsOverview: "docsOverviewComplete",
+         aiHelperOverview: "aiHelperOverviewComplete"
+       };
+     let GH = null,
+       YH = null;
+     const uH = new Set,
+       QH = new Set;
+     let WH = null;
+     const MH = new Set,
+       xH = new Set;
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L786-L789` → after: `L469-L472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L469-L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/247.js#L469-L472) · [Before (L786-L789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/247.js#L786-L789)

```diff
-     function aU(UU, XU, zU, cU) {
-       var yU = XU[cU],
-         QU = UU[zU - 1];
-       UU[yU] = QU, XU[QU] = yU
+     function vH() {
+       xH.forEach((HH => {
+         HH()
+       }))
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L792-L830` → after: `L475-L477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L475-L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/247.js#L475-L477) · [Before (L792-L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/247.js#L792-L830)

```diff
-     function tU(UU, XU, zU, cU) {
-       UU[zU] = cU, XU[cU] = zU
-     }
-   },
-   39074: UU => {
-     function XU(UU, zU, cU) {
-       var yU = 0 | UU[cU];
-       if (yU <= 0) return [];
-       var QU, AU = new Array(yU);
-       if (cU === UU.length - 1)
-         for (QU = 0; QU < yU; ++QU) AU[QU] = zU;
-       else
-         for (QU = 0; QU < yU; ++QU) AU[QU] = XU(UU, zU, cU + 1);
-       return AU
-     }
-     UU.exports = function(UU, zU) {
- ... (23 more removed lines; see GitHub link above)
+     function PH() {
+       if (!GH) {
+         const HH = AH.e.getItem(CH);
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L832-L962` → after: `L479-L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L479-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/247.js#L479-L484) · [Before (L832-L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/247.js#L832-L962)

```diff
-           timeout: !1,
-           removals: [],
-           multiComps: []
-         };
- 
-       function oU(UU, zU) {
-         var cU = XU[zU],
-           QU = yU[zU],
-           AU = QU.hash[UU];
-         AU && (QU.remove(UU), cU.Cw && (cU.multi ? (AU.forEach((XU => {
-           XU && cU.Cw(UU, XU)
-         })), AU.length = 0) : cU.Cw(UU, AU)), FU.removals.push(QU), DU())
-       }
- 
-       function DU() {
-         FU.timeout || (FU.timeout = !0, setTimeout(EU, 1))
- ... (115 more removed lines; see GitHub link above)
+           codeBlockIntroShown: !1,
+           worldCodeIntroShown: !1,
+           welcomeComplete: !1,
+           docsOverviewComplete: !1,
+           aiHelperOverviewComplete: !1,
+           ..."object" === typeof HH && null !== HH ? HH : {}
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L1095-L1113` → after: `L491-L495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L491-L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/247.js#L491-L495) · [Before (L1095-L1113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/247.js#L1095-L1113)

```diff
-       var XU = -1,
-         zU = Array(UU.size);
-       return UU.forEach((function(UU, cU) {
-         zU[++XU] = [cU, UU]
-       })), zU
-     }
- 
-     function xU(UU, XU) {
-       return function(zU) {
-         return UU(XU(zU))
-       }
-     }
- 
-     function JU(UU) {
-       var XU = -1,
-         zU = Array(UU.size);
- ... (3 more removed lines; see GitHub link above)
+       const BH = PH();
+       BH[HH] || (GH = {
+         ...BH,
+         [HH]: !0
+       }, AH.e.setItem(CH, GH))
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L1152-L1157` → after: `L499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/247.js#L499) · [Before (L1152-L1157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/247.js#L1152-L1157)

```diff
-       var XU = -1,
-         zU = UU ? UU.length : 0;
-       for (this.clear(); ++XU < zU;) {
-         var cU = UU[XU];
-         this.set(cU[0], cU[1])
-       }
+       return "docsOverview" === HH ? SH : "aiHelperOverview" === HH ? hH : YH ? rH[YH] : []
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L1161-L1175` → after: `L503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/247.js#L503) · [Before (L1161-L1175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/247.js#L1161-L1175)

```diff
-       var XU = -1,
-         zU = UU ? UU.length : 0;
-       for (this.clear(); ++XU < zU;) {
-         var cU = UU[XU];
-         this.set(cU[0], cU[1])
-       }
-     }
- 
-     function wX(UU) {
-       var XU = -1,
-         zU = UU ? UU.length : 0;
-       for (this.clear(); ++XU < zU;) {
-         var cU = UU[XU];
-         this.set(cU[0], cU[1])
-       }
+       return ("worldCodeButton" !== HH || !PH().worldCodeIntroShown) && !MH.has(HH)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L1179-L1201` → after: `L507-L508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L507-L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/247.js#L507-L508) · [Before (L1179-L1201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/247.js#L1179-L1201)

```diff
-       this.__data__ = new CX(UU)
-     }
- 
-     function OX(UU, XU) {
-       var zU = JX(UU) || function(UU) {
-           return function(UU) {
-             return function(UU) {
-               return !!UU && "object" == typeof UU
-             }(UU) && jX(UU)
-           }(UU) && XX.call(UU, "callee") && (!DX.call(UU, "callee") || zX.call(UU) == QU)
-         }(UU) ? function(UU, XU) {
-           for (var zU = -1, cU = Array(UU); ++zU < UU;) cU[zU] = XU(zU);
-           return cU
-         }(UU.length, String) : [],
-         cU = zU.length,
-         yU = !!cU;
- ... (7 more removed lines; see GitHub link above)
+       var BH;
+       return (null === (BH = WH) || void 0 === BH ? void 0 : BH.name) === HH ? WH.stepsDone : uH
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L1205-L1207` → after: `L512-L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L512-L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/247.js#L512-L517) · [Before (L1205-L1207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/247.js#L1205-L1207)

```diff
-       for (var zU = UU.length; zU--;)
-         if (xX(UU[zU][0], XU)) return zU;
-       return -1
+       if (! function(HH) {
+           return WH ? WH.name === HH : "welcome" === HH
+         }(HH) || !VH(BH) || OH(HH).has(BH)) return !1;
+       if (WH) return !0;
+       const LH = EH[BH];
+       return LH ? !PH()[LH] || QH.has(BH) : !PH()[XH[HH]]
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L1210` → after: `L520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/247.js#L520) · [Before (L1210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/247.js#L1210)

```diff
-     function uX(UU, XU, zU, cU, yU, IU, kU) {
+     function kH(HH) {
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L1212-L1315` → after: `L522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/247.js#L522) · [Before (L1212-L1315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/247.js#L1212-L1315)

```diff
-       if (cU && (OU = IU ? cU(UU, yU, IU, kU) : cU(UU)), void 0 !== OU) return OU;
-       if (!TX(UU)) return UU;
-       var SU = JX(UU);
-       if (SU) {
-         if (OU = function(UU) {
-             var XU = UU.length,
-               zU = UU.constructor(XU);
-             XU && "string" == typeof UU[0] && XX.call(UU, "index") && (zU.index = UU.index, zU.input = UU.input);
-             return zU
-           }(UU), !XU) return function(UU, XU) {
-           var zU = -1,
-             cU = UU.length;
-           XU || (XU = Array(cU));
-           for (; ++zU < cU;) XU[zU] = UU[zU];
-           return XU
-         }(UU, OU)
- ... (88 more removed lines; see GitHub link above)
+       return null !== (BH = UH(HH).find((BH => bH(HH, BH)))) && void 0 !== BH ? BH : null
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L1319-L1320` → after: `L526-L527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L526-L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/247.js#L526-L527) · [Before (L1319-L1320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/247.js#L1319-L1320)

```diff
-       return !(!TX(UU) || (XU = UU, hU && hU in XU)) && (bX(UU) || mU(UU) ? cX : OU).test(lX(UU));
-       var XU
+       var BH;
+       TH(XH[HH]), (null === (BH = WH) || void 0 === BH ? void 0 : BH.name) === HH && (WH = null)
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L1324-L1335` → after: `L531-L535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L531-L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/247.js#L531-L535) · [Before (L1324-L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/247.js#L1324-L1335)

```diff
-       var XU = new UU.constructor(UU.byteLength);
-       return new AX(XU).set(new AX(UU)), XU
-     }
- 
-     function HX(UU, XU, zU, cU) {
-       zU || (zU = {});
-       for (var yU = -1, QU = XU.length; ++yU < QU;) {
-         var AU = XU[yU],
-           FU = cU ? cU(zU[AU], UU[AU], AU, zU, UU) : void 0;
-         SX(zU, AU, void 0 === FU ? UU[AU] : FU)
-       }
-       return zU
+       const BH = (WH ? [WH.name] : ["welcome", "docsOverview"]).find((BH => kH(BH) === HH));
+       if (!BH) return;
+       OH(BH).add(HH);
+       const LH = EH[HH];
+       LH && (TH(LH), WH || QH.add(HH)), null === kH(BH) && mH(BH), vH()
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L1339-L1343` → after: `L539-L543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L539-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/247.js#L539-L543) · [Before (L1339-L1343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/247.js#L1339-L1343)

```diff
-       var zU = UU.__data__;
-       return function(UU) {
-         var XU = typeof UU;
-         return "string" == XU || "number" == XU || "symbol" == XU || "boolean" == XU ? "__proto__" !== UU : null === UU
-       }(XU) ? zU["string" == typeof XU ? "string" : "hash"] : zU.map
+       const LH = UH(HH),
+         AH = OH(HH);
+       for (let rH = LH.indexOf(BH) - 1; rH >= 0; rH--)
+         if (AH.has(LH[rH]) && VH(LH[rH])) return LH[rH];
+       return null
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L1347-L1350` → after: `L547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/247.js#L547) · [Before (L1347-L1350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/247.js#L1347-L1350)

```diff
-       var zU = function(UU, XU) {
-         return null == UU ? void 0 : UU[XU]
-       }(UU, XU);
-       return fX(zU) ? zU : void 0
+       return null !== IH(HH, BH)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L1423` → after: `L551-L552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L551-L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/247.js#L551-L552) · [Before (L1423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/247.js#L1423)

```diff
-       return !!(XU = null == XU ? yU : XU) && ("number" == typeof UU || SU.test(UU)) && UU > -1 && UU % 1 == 0 && UU < XU
+       const LH = IH(HH, BH);
+       LH && (OH(HH).delete(LH), vH())
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L1427-L1440` → after: `L556-L559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L556-L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/247.js#L556-L559) · [Before (L1427-L1440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/247.js#L1427-L1440)

```diff
-       var XU = UU && UU.constructor;
-       return UU === ("function" == typeof XU && XU.prototype || bU)
-     }
- 
-     function lX(UU) {
-       if (null != UU) {
-         try {
-           return UX.call(UU)
-         } catch (XU) {}
-         try {
-           return UU + ""
-         } catch (XU) {}
-       }
-       return ""
+       mH(HH), "welcome" === HH && UH("welcome").forEach((HH => {
+         const BH = EH[HH];
+         BH && TH(BH)
+       })), vH()
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L1466-L1468` → after: `L563-L566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L563-L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/247.js#L563-L566) · [Before (L1466-L1468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/247.js#L1466-L1468)

```diff
-       return null != UU && function(UU) {
-         return "number" == typeof UU && UU > -1 && UU % 1 == 0 && UU <= yU
-       }(UU.length) && !bX(UU)
+       WH = {
+         name: HH,
+         stepsDone: new Set
+       }, vH()
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L1474-L1476` → after: `L569-L570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L569-L570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/247.js#L569-L570) · [Before (L1474-L1476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/247.js#L1474-L1476)

```diff
-     function bX(UU) {
-       var XU = TX(UU) ? zX.call(UU) : "";
-       return XU == oU || XU == DU
+     function eH() {
+       (WH || 0 !== uH.size || 0 !== QH.size) && (WH = null, uH.clear(), QH.clear(), vH())
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L1479-L1481` → after: `L573-L575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L573-L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/247.js#L573-L575) · [Before (L1479-L1481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/247.js#L1479-L1481)

```diff
-     function TX(UU) {
-       var XU = typeof UU;
-       return !!UU && ("object" == XU || "function" == XU)
+     function qH(HH, BH) {
+       const LH = BH ? HH : YH === HH ? null : YH;
+       LH !== YH && (YH = LH, vH())
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L1484-L1508` → after: `L578-L579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L578-L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/247.js#L578-L579) · [Before (L1484-L1508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/247.js#L1484-L1508)

```diff
-     function hX(UU) {
-       return jX(UU) ? OX(UU) : function(UU) {
-         if (!mX(UU)) return IX(UU);
-         var XU = [];
-         for (var zU in Object(UU)) XX.call(UU, zU) && "constructor" != zU && XU.push(zU);
-         return XU
-       }(UU)
-     }
-     UU.exports = function(UU) {
-       return uX(UU, !0, !0)
-     }
-   },
-   39229: UU => {
-     function XU(UU, XU, zU) {
-       for (var cU = UU.length, yU = -1 / 0, QU = 1 / 0, AU = 0; AU < cU; AU++) {
-         var FU = (zU[0][AU] - UU[AU]) / XU[AU],
- ... (9 more removed lines; see GitHub link above)
+     function gH(HH, BH) {
+       MH.has(HH) === BH && (BH ? MH.delete(HH) : MH.add(HH), vH())
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L1524-L1773` → after: `L583-L584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L583-L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/247.js#L583-L584) · [Before (L1524-L1773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/247.js#L1524-L1773)

```diff
-       for (var XU, zU, yU = 0, QU = UU.length, AU = 0; AU < UU.length;) {
-         for (XU = UU[AU], zU = 0; AU < QU && UU[AU] === XU;) ++AU, ++zU;
-         yU += cU.log2(zU) / 7 | 0, yU += cU.log2(XU >>> 0) / 7 | 0, yU += 2
-       }
-       return yU
-     }
-     XU.size = yU, XU.encode = function(UU, XU) {
-       XU || (XU = new Uint8Array(yU(UU)));
-       for (var zU, cU, QU = 0, AU = XU.length, FU = 0; FU < UU.length;) {
-         for (zU = UU[FU], cU = 0; FU < UU.length && UU[FU] === zU;) ++FU, ++cU;
-         for (; QU < AU && cU >= 128;) XU[QU++] = 128 + (127 & cU), cU >>>= 7;
-         if (QU >= AU) throw new Error("RLE buffer overflow");
-         for (XU[QU++] = cU, zU >>>= 0; QU < AU && zU >= 128;) XU[QU++] = 128 + (127 & zU), zU >>>= 7;
-         if (QU >= AU) throw new Error("RLE buffer overflow");
-         XU[QU++] = zU
-       }
- ... (234 more removed lines; see GitHub link above)
+       return xH.add(HH), () => {
+         xH.delete(HH)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/248.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/248.js` (22 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016)

#### 1. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/248.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/248.js#L2)

```diff
- export const ids = [248, 254, 258];
+ export const ids = [248];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L4-L93` → after: `L4-L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L4-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/248.js#L4-L153) · [Before (L4-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/248.js#L4-L93)

```diff
-   41323: (UU, XU, zU) => {
-     zU.d(XU, {
-       d: () => AU,
-       h: () => FU
-     });
-     var cU = zU(39493),
-       yU = zU(41134),
-       QU = zU(41309),
-       AU = {};
-     class FU {
-       constructor(UU) {
-         this.attachedToElement = !1, this.attached = {}, this.camera = UU, this.checkInputs = () => {}
-       }
-       add(UU) {
-         const XU = UU.getSimpleName();
-         this.attached[XU] ? cU.b.Warn("camera input of type " + XU + " already exists on camera") : (this.attached[XU] = UU, UU.camera = this.camera, UU.checkInputs && (this.checkInputs = this._addCheckInputs(UU.checkInputs.bind(UU))), this.attachedToElement && UU.attachControl(t … [truncated]
- ... (74 more removed lines; see GitHub link above)
+   37526: HH => {
+     HH.exports = {
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

#### 3. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L96-L191` → after: `L156-L165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L156-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/248.js#L156-L165) · [Before (L96-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/248.js#L96-L191)

```diff
-   41331: (UU, XU, zU) => {
-     zU.d(XU, {
-       d: () => cU.d
-     });
-     var cU = zU(41340);
-     (0, cU.f)()
-   },
-   41340: (UU, XU, zU) => {
-     zU.d(XU, {
-       d: () => EU,
-       f: () => NU
-     });
-     var cU = zU(41113),
-       yU = zU(41121),
-       QU = zU(37819),
-       AU = zU(37923),
- ... (80 more removed lines; see GitHub link above)
+   37517: (HH, BH, LH) => {
+     var AH = LH(37526),
+       rH = LH(37532),
+       SH = Object.hasOwnProperty,
+       hH = Object.create(null);
+     for (var tH in AH) SH.call(AH, tH) && (hH[AH[tH]] = tH);
+     var zH = HH.exports = {
+       to: {},
+       get: {}
+     };
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L193-L331` → after: `L167-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L167-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/248.js#L167-L168) · [Before (L193-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/248.js#L193-L331)

```diff
-     function NU() {
-       YU || (YU = !0, oU.e.AddNodeConstructor("Light_Type_3", ((UU, XU) => () => new EU(UU, QU.q.Zero(), XU))), (0, DU.h)("BABYLON.HemisphericLight", EU))
-     }
-   },
-   37919: (UU, XU, zU) => {
-     zU.d(XU, {
-       Color3: () => cU.b,
-       e: () => cU.e
-     });
-     var cU = zU(37923);
-     (0, cU.f)()
-   },
-   38502: (UU, XU, zU) => {
-     zU.d(XU, {
-       d: () => yU
-     });
- ... (123 more removed lines; see GitHub link above)
+     function CH(HH, BH, LH) {
+       return Math.min(Math.max(BH, HH), LH)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L378-L390` → after: `L172-L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L172-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/248.js#L172-L215) · [Before (L378-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/248.js#L378-L390)

```diff
-       let XU = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
-       const zU = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
-         QU = [],
-         oU = UU.width || UU.size || 1,
-         DU = UU.height || UU.size || 1,
-         EU = UU.depth || UU.size || 1,
-         YU = UU.wrap || !1;
-       let NU = void 0 === UU.topBaseAt ? 1 : UU.topBaseAt,
-         IU = void 0 === UU.bottomBaseAt ? 0 : UU.bottomBaseAt;
-       NU = (NU + 4) % 4, IU = (IU + 4) % 4;
-       let pU = [2, 0, 3, 1][NU],
-         aU = [2, 0, 1, 3][IU],
-         tU = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];
+       var BH = Math.round(HH).toString(16).toUpperCase();
+       return BH.length < 2 ? "0" + BH : BH
+     }
+     zH.get = function(HH) {
+       var BH, LH;
+       switch (HH.substring(0, 3).toLowerCase()) {
+         case "hsl":
+           BH = zH.get.hsl(HH), LH = "hsl";
+           break;
+         case "hwb":
+           BH = zH.get.hwb(HH), LH = "hwb";
+           break;
+         default:
+           BH = zH.get.rgb(HH), LH = "rgb"
+       }
+       return BH ? {
+ ... (28 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L392-L409` → after: `L217-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/248.js#L217-L218) · [Before (L392-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/248.js#L392-L409)

```diff
-         XU = [2, 3, 0, 2, 0, 1, 4, 5, 6, 4, 6, 7, 9, 10, 11, 9, 11, 8, 12, 14, 15, 12, 13, 14], tU = [-1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1];
-         let UU = [
-             [1, 1, 1],
-             [-1, 1, 1],
-             [-1, 1, -1],
-             [1, 1, -1]
-           ],
-           zU = [
-             [-1, -1, 1],
-             [1, -1, 1],
-             [1, -1, -1],
-             [-1, -1, -1]
-           ];
-         const cU = [17, 18, 19, 16],
-           yU = [22, 23, 20, 21];
-         for (; pU > 0;) UU.unshift(UU.pop()), cU.unshift(cU.pop()), pU--;
- ... (2 more removed lines; see GitHub link above)
+         var LH = parseFloat(BH[4]);
+         return [(parseFloat(BH[1]) % 360 + 360) % 360, CH(parseFloat(BH[2]), 0, 100), CH(parseFloat(BH[3]), 0, 100), CH(isNaN(LH) ? 1 : LH, 0, 1)]
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L411-L435` → after: `L220-L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L220-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/248.js#L220-L249) · [Before (L411-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/248.js#L411-L435)

```diff
-       const gU = [oU / 2, DU / 2, EU / 2],
-         kU = tU.reduce(((UU, XU, zU) => UU.concat(XU * gU[zU % 3])), []),
-         GU = 0 === UU.sideOrientation ? 0 : UU.sideOrientation || AU.c.DEFAULTSIDE,
-         BU = UU.faceUV || new Array(6),
-         ZU = UU.faceColors,
-         RU = [];
-       for (let AU = 0; AU < 6; AU++) void 0 === BU[AU] && (BU[AU] = new cU.t(0, 0, 1, 1)), ZU && void 0 === ZU[AU] && (ZU[AU] = new yU.e(1, 1, 1, 1));
-       for (let cU = 0; cU < 6; cU++)
-         if (QU.push(BU[cU].z, FU.c ? 1 - BU[cU].w : BU[cU].w), QU.push(BU[cU].x, FU.c ? 1 - BU[cU].w : BU[cU].w), QU.push(BU[cU].x, FU.c ? 1 - BU[cU].y : BU[cU].y), QU.push(BU[cU].z, FU.c ? 1 - BU[cU].y : BU[cU].y), ZU)
-           for (let UU = 0; UU < 4; UU++) RU.push(ZU[cU].r, ZU[cU].g, ZU[cU].b, ZU[cU].a);
-       AU.c._ComputeSides(GU, kU, XU, zU, QU, UU.frontUVs, UU.backUVs);
-       const PU = new AU.c;
-       if (PU.indices = XU, PU.positions = kU, PU.normals = zU, PU.uvs = QU, ZU) {
-         const UU = GU === AU.c.DOUBLESIDE ? RU.concat(RU) : RU;
-         PU.colors = UU
-       }
- ... (9 more removed lines; see GitHub link above)
+       return null
+     }, zH.get.hwb = function(HH) {
+       if (!HH) return null;
+       var BH = HH.match(/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);
+       if (BH) {
+         var LH = parseFloat(BH[4]);
+         return [(parseFloat(BH[1]) % 360 + 360) % 360, CH(parseFloat(BH[2]), 0, 100), CH(parseFloat(BH[3]), 0, 100), CH(isNaN(LH) ? 1 : LH, 0, 1)]
+       }
+       return null
+     }, zH.to.hex = function() {
+       var HH = rH(arguments);
+       return "#" + EH(HH[0]) + EH(HH[1]) + EH(HH[2]) + (HH[3] < 1 ? EH(Math.round(255 * HH[3])) : "")
+     }, zH.to.rgb = function() {
+       var HH = rH(arguments);
+       return HH.length < 4 || 1 === HH[3] ? "rgb(" + Math.round(HH[0]) + ", " + Math.round(HH[1]) + ", " + Math.round(HH[2]) + ")" : "rgba(" + Math.round(HH[0]) + ", " + Math.round(HH[1]) + ", " + Math.round(HH[2]) + ", " + HH[3] + ")"
+     }, zH.to.rgb.percent = function() {
+ ... (14 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L446-L455` → after: `L252-L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L252-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/248.js#L252-L258) · [Before (L446-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/248.js#L446-L455)

```diff
-   41532: (UU, XU, zU) => {
-     zU.d(XU, {
-       b: () => YU
-     });
-     var cU = zU(37819),
-       yU = zU(41481),
-       QU = zU(41493),
-       AU = zU(41536),
-       FU = zU(41237),
-       oU = zU(39493);
+   37509: (HH, BH, LH) => {
+     const AH = LH(37517),
+       rH = LH(37541),
+       SH = ["keyword", "gray", "hex"],
+       hH = {};
+     for (const YH of Object.keys(rH)) hH[[...rH[YH].labels].sort().join("")] = YH;
+     const tH = {};
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L457-L482` → after: `L260-L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L260-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/248.js#L260-L384) · [Before (L457-L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/248.js#L457-L482)

```diff
-     function DU(UU) {
-       const XU = [],
-         zU = [],
-         cU = UU.lines,
-         yU = UU.colors,
-         AU = [];
-       let FU = 0;
-       for (let QU = 0; QU < cU.length; QU++) {
-         const UU = cU[QU];
-         for (let cU = 0; cU < UU.length; cU++) {
-           const {
-             x: oU,
-             y: DU,
-             z: EU
-           } = UU[cU];
-           if (zU.push(oU, DU, EU), yU) {
- ... (10 more removed lines; see GitHub link above)
+     function zH(HH, BH) {
+       if (!(this instanceof zH)) return new zH(HH, BH);
+       if (BH && BH in SH && (BH = null), BH && !(BH in rH)) throw new Error("Unknown model: " + BH);
+       let LH, CH;
+       if (null == HH) this.model = "rgb", this.color = [0, 0, 0], this.valpha = 1;
+       else if (HH instanceof zH) this.model = HH.model, this.color = [...HH.color], this.valpha = HH.valpha;
+       else if ("string" === typeof HH) {
+         const BH = AH.get(HH);
+         if (null === BH) throw new Error("Unable to parse color from string: " + HH);
+         this.model = BH.model, CH = rH[this.model].channels, this.color = BH.value.slice(0, CH), this.valpha = "number" === typeof BH.value[CH] ? BH.value[CH] : 1
+       } else if (HH.length > 0) {
+         this.model = BH || "rgb", CH = rH[this.model].channels;
+         const LH = Array.prototype.slice.call(HH, 0, CH);
+         this.color = GH(LH, CH), this.valpha = "number" === typeof HH[CH] ? HH[CH] : 1
+       } else if ("number" === typeof HH) this.model = "rgb", this.color = [HH >> 16 & 255, HH >> 8 & 255, 255 & HH], this.valpha = 1;
+       else {
+ ... (109 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L490-L504` → after: `L479-L482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L479-L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/248.js#L479-L482) · [Before (L490-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/248.js#L490-L504)

```diff
-       const XU = UU.dashSize || 3,
-         zU = UU.gapSize || 1,
-         yU = UU.dashNb || 200,
-         AU = UU.points,
-         FU = [],
-         oU = [],
-         DU = cU.q.Zero();
-       let EU, YU, NU, IU = 0,
-         pU = 0;
-       for (NU = 0; NU < AU.length - 1; NU++) AU[NU + 1].subtractToRef(AU[NU], DU), IU += DU.length();
-       const aU = IU / yU,
-         tU = XU * aU / (XU + zU);
-       for (NU = 0; NU < AU.length - 1; NU++) {
-         AU[NU + 1].subtractToRef(AU[NU], DU), EU = Math.floor(DU.length() / aU), DU.normalize();
-         for (let UU = 0; UU < EU; UU++) YU = aU * UU, FU.push(AU[NU].x + YU * DU.x, AU[NU].y + YU * DU.y, AU[NU].z + YU * DU.z), FU.push(AU[NU].x + (YU + tU) * DU.x, AU[NU].y + (YU + tU) * DU.y, AU[NU].z + (YU + tU) * DU.z), oU.push(pU, pU + 1), pU += 2
+       return function(BH) {
+         return function(HH, BH) {
+           return Number(HH.toFixed(BH))
+         }(BH, HH)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L510-L523` → after: `L486-L492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L486-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/248.js#L486-L492) · [Before (L510-L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/248.js#L510-L523)

```diff
-     function YU(UU, XU) {
-       let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-       const cU = XU.instance,
-         yU = XU.lines,
-         QU = XU.colors;
-       if (cU) {
-         const UU = cU.getVerticesData(FU.h.PositionKind);
-         let XU, zU;
-         QU && (XU = cU.getVerticesData(FU.h.ColorKind));
-         let AU = 0,
-           oU = 0;
-         for (let cU = 0; cU < yU.length; cU++) {
-           const FU = yU[cU];
-           for (let yU = 0; yU < FU.length; yU++) UU[AU] = FU[yU].x, UU[AU + 1] = FU[yU].y, UU[AU + 2] = FU[yU].z, QU && XU && (zU = QU[cU], XU[oU] = zU[yU].r, XU[oU + 1] = zU[yU].g, XU[oU + 2] = zU[yU].b, XU[oU + 3] = zU[yU].a, oU += 4), AU += 3
+     function EH(HH, BH, LH) {
+       HH = Array.isArray(HH) ? HH : [HH];
+       for (const AH of HH)(tH[AH] || (tH[AH] = []))[BH] = LH;
+       return HH = HH[0],
+         function(AH) {
+           let rH;
+           return void 0 !== AH ? (LH && (AH = LH(AH)), rH = this[HH](), rH.color[BH] = AH, rH) : (rH = this[HH]().color[BH], LH && (rH = LH(rH)), rH)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L532-L542` → after: `L496-L499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L496-L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/248.js#L496-L499) · [Before (L532-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/248.js#L532-L542)

```diff
-     function NU(UU, XU) {
-       let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-       const cU = XU.colors ? [XU.colors] : null;
-       return YU(UU, {
-         lines: [XU.points],
-         updatable: XU.updatable,
-         instance: XU.instance,
-         colors: cU,
-         useVertexAlpha: XU.useVertexAlpha,
-         material: XU.material
-       }, zU)
+     function XH(HH) {
+       return function(BH) {
+         return Math.max(0, Math.min(HH, BH))
+       }
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L546-L568` → after: `L503-L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L503-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/248.js#L503-L504) · [Before (L546-L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/248.js#L546-L568)

```diff
-       let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-       const QU = XU.points,
-         FU = XU.instance,
-         DU = XU.gapSize || 1,
-         YU = XU.dashSize || 3;
-       if (FU) {
-         const UU = UU => {
-           const XU = cU.q.Zero(),
-             zU = UU.length / 6;
-           let yU, AU, oU, DU, EU = 0,
-             YU = 0;
-           for (oU = 0; oU < QU.length - 1; oU++) QU[oU + 1].subtractToRef(QU[oU], XU), EU += XU.length();
-           const NU = EU / zU,
-             IU = FU._creationDataStorage.dashSize,
-             pU = IU * NU / (IU + FU._creationDataStorage.gapSize);
-           for (oU = 0; oU < QU.length - 1; oU++)
- ... (7 more removed lines; see GitHub link above)
+       for (let LH = 0; LH < BH; LH++) "number" !== typeof HH[LH] && (HH[LH] = 0);
+       return HH
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L570-L586` → after: `L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/248.js#L506) · [Before (L570-L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/248.js#L570-L586)

```diff
-     let pU = !1;
-     pU || (pU = !0, QU.c.CreateLineSystem = DU, QU.c.CreateDashedLines = EU, yU.b.CreateLines = function(UU, XU) {
-       return NU(UU, {
-         points: XU,
-         updatable: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-         instance: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
-       }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
-     }, yU.b.CreateDashedLines = function(UU, XU, zU, cU, yU) {
-       return IU(UU, {
-         points: XU,
-         dashSize: zU,
-         gapSize: cU,
-         dashNb: yU,
-         updatable: arguments.length > 6 ? arguments[6] : void 0,
-         instance: arguments.length > 7 ? arguments[7] : void 0
-       }, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null)
- ... (1 more removed lines; see GitHub link above)
+     HH.exports = zH
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L588-L616` → after: `L508-L608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L508-L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/248.js#L508-L608) · [Before (L588-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/248.js#L588-L616)

```diff
-   41536: (UU, XU, zU) => {
-     zU.d(XU, {
-       d: () => NU,
-       e: () => aU
-     });
-     var cU, yU, QU = zU(37923),
-       AU = zU(41237),
-       FU = zU(41481),
-       oU = zU(41540),
-       DU = zU(41374),
-       EU = zU(41549),
-       YU = zU(40989);
-     class NU extends FU.b {
-       _isShaderMaterial(UU) {
-         return !!UU && "ShaderMaterial" === UU.getClassName()
-       }
- ... (13 more removed lines; see GitHub link above)
+   37545: (HH, BH, LH) => {
+     const AH = LH(37553),
+       rH = {};
+     for (const hH of Object.keys(AH)) rH[AH[hH]] = hH;
+     const SH = {
+       rgb: {
+         channels: 3,
+         labels: "rgb"
+       },
+       hsl: {
+         channels: 3,
+         labels: "hsl"
+       },
+       hsv: {
+         channels: 3,
+         labels: "hsv"
+ ... (85 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L618-L621` → after: `L610-L925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L610-L925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/248.js#L610-L925) · [Before (L618-L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/248.js#L618-L621)

```diff
-         if (this.useVertexAlpha ? oU.defines.push("#define VERTEXALPHA") : oU.needAlphaBlending = !1, this.useVertexColor ? (oU.defines.push("#define VERTEXCOLOR"), oU.attributes.push(AU.h.ColorKind)) : (oU.uniforms.push("color"), this._color4 = new QU.e), FU) this.material = FU;
-         else {
-           this.nS().qp().isWebGPU && !NU.ForceGLSL && (this._shaderLanguage = 1), oU.shaderLanguage = this._shaderLanguage, oU.extraInitializationsAsync = async () => {
-             1 === this._shaderLanguage ? await Promise.all([zU.e(650).then((() => zU(45224))), zU.e(656).then((() => zU(45229)))]) : await Promise.all([zU.e(632).then((() => zU(45233))), zU.e(638).then((() => zU(45242)))])
+       return 0 === EH ? (rH = 0, SH = 0) : (SH = EH / CH, BH = XH(hH), LH = XH(tH), AH = XH(zH), hH === CH ? rH = AH - LH : tH === CH ? rH = 1 / 3 + BH - AH : zH === CH && (rH = 2 / 3 + LH - BH), rH < 0 ? rH += 1 : rH > 1 && (rH -= 1)), [360 * rH, 100 * SH, 100 * CH]
+     }, SH.rgb.hwb = function(HH) {
+       const BH = HH[0],
+         LH = HH[1];
+       let AH = HH[2];
+       const rH = SH.rgb.hsl(HH)[0],
+         hH = 1 / 255 * Math.min(BH, Math.min(LH, AH));
+       return AH = 1 - 1 / 255 * Math.max(BH, Math.max(LH, AH)), [rH, 100 * hH, 100 * AH]
+     }, SH.rgb.cmyk = function(HH) {
+       const BH = HH[0] / 255,
+         LH = HH[1] / 255,
+         AH = HH[2] / 255,
+         rH = Math.min(1 - BH, 1 - LH, 1 - AH);
+       return [100 * ((1 - BH - rH) / (1 - rH) || 0), 100 * ((1 - LH - rH) / (1 - rH) || 0), 100 * ((1 - AH - rH) / (1 - rH) || 0), 100 * rH]
+     }, SH.rgb.keyword = function(HH) {
+       const BH = rH[HH];
+ ... (300 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L623-L681` → after: `L927-L958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L927-L958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/248.js#L927-L958) · [Before (L623-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/248.js#L623-L681)

```diff
-           const UU = new EU.o("colorShader", this.nS(), "color", oU, !1);
-           UU.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(UU)
-         }
-       }
-       getClassName() {
-         return "LinesMesh"
-       }
-       get material() {
-         return this._internalAbstractMeshDataInfo._material
-       }
-       set material(UU) {
-         const XU = this.material;
-         if (XU === UU) return;
-         const zU = XU && this._ownsMaterial;
-         this._ownsMaterial = !1, this._setInternalMaterial(UU), zU && XU?.dispose()
-       }
- ... (43 more removed lines; see GitHub link above)
+           return "conversion" in HH && (BH.conversion = HH.conversion), BH
+         }(AH), SH[HH][LH].raw = function(HH) {
+           const BH = function() {
+             for (var BH = arguments.length, LH = new Array(BH), AH = 0; AH < BH; AH++) LH[AH] = arguments[AH];
+             const rH = LH[0];
+             return void 0 === rH || null === rH ? rH : (rH.length > 1 && (LH = rH), HH(LH))
+           };
+           return "conversion" in HH && (BH.conversion = HH.conversion), BH
+         }(AH)
+       }))
+     })), HH.exports = SH
+   },
+   37558: (HH, BH, LH) => {
+     const AH = LH(37545);
+ 
+     function rH(HH) {
+ ... (16 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L693-L699` → after: `L963-L966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L963-L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/248.js#L963-L966) · [Before (L693-L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/248.js#L693-L699)

```diff
-     NU.ForceGLSL = !1;
-     class IU extends oU.b {
-       constructor(UU, XU) {
-         super(UU, XU), this.intersectionThreshold = XU.intersectionThreshold
-       }
-       getClassName() {
-         return "InstancedLinesMesh"
+ 
+     function SH(HH, BH) {
+       return function(LH) {
+         return BH(HH(LH))
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L704-L747` → after: `L970-L983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L970-L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/248.js#L970-L983) · [Before (L704-L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/248.js#L704-L747)

```diff
-     function aU() {
-       pU || (pU = !0, FU.b._LinesMeshParser = (UU, XU) => NU.Parse(UU, XU))
-     }(cU = NU.prototype).enableEdgesRendering ?? (cU.enableEdgesRendering = (0, YU.k)("LinesMesh", "enableEdgesRendering")), (yU = IU.prototype).enableEdgesRendering ?? (yU.enableEdgesRendering = (0, YU.k)("InstancedLinesMesh", "enableEdgesRendering"))
-   },
-   39486: (UU, XU, zU) => {
-     zU.d(XU, {
-       c: () => QU
-     });
-     var cU = zU(39493);
-     const yU = (UU, XU, zU) => UU ? UU.getClassName && "Mesh" === UU.getClassName() ? null : !UU.getClassName || "SubMesh" !== UU.getClassName() && "PhysicsBody" !== UU.getClassName() ? UU.clone ? UU.clone() : Array.isArray(UU) ? UU.slice() : zU && "object" === typeof UU ? {
-       ...UU
-     } : null : UU.clone(XU) : null;
-     class QU {
-       static DeepCopy(UU, XU, zU, QU) {
-         let AU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         const FU = function(UU) {
- ... (28 more removed lines; see GitHub link above)
+     function hH(HH, BH) {
+       const LH = [BH[HH].parent, HH];
+       let rH = AH[BH[HH].parent][HH],
+         hH = BH[HH].parent;
+       for (; BH[hH].parent;) LH.unshift(BH[hH].parent), rH = SH(AH[BH[hH].parent][hH], rH), hH = BH[hH].parent;
+       return rH.conversion = LH, rH
+     }
+     HH.exports = function(HH) {
+       const BH = rH(HH),
+         LH = {},
+         AH = Object.keys(BH);
+       for (let rH = AH.length, SH = 0; SH < rH; SH++) {
+         const HH = AH[SH];
+         null !== BH[HH].parent && (LH[HH] = hH(HH, BH))
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L751-L756` → after: `L988-L1137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L988-L1137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/248.js#L988-L1137) · [Before (L751-L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/248.js#L751-L756)

```diff
-   38649: (UU, XU, zU) => {
-     function cU() {
-       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (UU => {
-         const XU = 16 * Math.random() | 0;
-         return ("x" === UU ? XU : 3 & XU | 8).toString(16)
-       }))
+   37553: HH => {
+     HH.exports = {
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

#### 21. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L762-L816` → after: `L1140-L1153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R1140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L1140-L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/248.js#L1140-L1153) · [Before (L762-L816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/248.js#L762-L816)

```diff
-   39493: (UU, XU, zU) => {
-     zU.d(XU, {
-       b: () => cU
-     });
-     class cU {
-       static _CheckLimit(UU, XU) {
-         let zU = cU._LogLimitOutputs[UU];
-         return zU ? zU.current++ : (zU = {
-           limit: XU,
-           current: 1
-         }, cU._LogLimitOutputs[UU] = zU), zU.current <= zU.limit
-       }
-       static _GenerateLimitMessage(UU) {
-         let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-         const zU = cU._LogLimitOutputs[UU];
-         if (!zU || !cU.MessageLimitReached) return;
- ... (39 more removed lines; see GitHub link above)
+   37532: (HH, BH, LH) => {
+     var AH = LH(37536),
+       rH = Array.prototype.concat,
+       SH = Array.prototype.slice,
+       hH = HH.exports = function(HH) {
+         for (var BH = [], LH = 0, hH = HH.length; LH < hH; LH++) {
+           var tH = HH[LH];
+           AH(tH) ? BH = rH.call(BH, SH.call(tH)) : BH.push(tH)
+         }
+         return BH
+       };
+     hH.wrap = function(HH) {
+       return function() {
+         return HH(hH(arguments))
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L833-L838` → after: `L1157-L1160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R1157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L1157-L1160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/248.js#L1157-L1160) · [Before (L833-L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/248.js#L833-L838)

```diff
-   41199: (UU, XU, zU) => {
-     zU.d(XU, {
-       e: () => cU.d
-     });
-     var cU = zU(41202);
-     (0, cU.b)()
+   37536: HH => {
+     HH.exports = function(HH) {
+       return !(!HH || "string" === typeof HH) && (HH instanceof Array || Array.isArray(HH) || HH.length >= 0 && (HH.splice instanceof Function || Object.getOwnPropertyDescriptor(HH, HH.length - 1) && "String" !== HH.constructor.name))
+     }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/249.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/249.js` (17 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/249.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/249.js#L2)

```diff
- export const ids = [249, 254];
+ export const ids = [249];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/249.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/249.js#L4)

```diff
-   44532: (UU, XU, zU) => {
+   37617: (HH, BH, LH) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L6` → after: `L6-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L6-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/249.js#L6-L14) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/249.js#L6)

```diff
-       b: () => AU
+       d: () => tB,
+       h: () => xB,
+       k: () => GB,
+       o: () => CB,
+       p: () => YB,
+       s: () => XB,
+       t: () => vB,
+       v: () => EB,
+       x: () => QB
```
