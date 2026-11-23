# Changed — Bundle Modifications Report (Part 011 / 050)

- **Updated at**: `2026-11-24T00:42 JST`
- **Part**: `11 / 50` (**282** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 010](part-010.md) · [Part 012 →](part-012.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/239.js` (bbb6l5.0244a119 → w4ddu.56408518 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/239.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034)

#### 3. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L156-L422` → after: `L65-L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L65-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/239.js#L65-L183) · [Before (L156-L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/239.js#L156-L422)

```diff
-     var Yq = gq(4625),
-       lq = gq(4622),
-       Oq = gq(40353),
-       mq = gq(40366);
-     const xq = new Set(Yq.G),
-       Aq = Yq.G.map((qq => (new TextEncoder).encode(qq))),
-       cq = new Map;
- 
-     function uq(qq, Eq) {
-       var gq;
-       return null === (gq = cq.get(qq)) || void 0 === gq ? void 0 : gq[Eq]
-     }(0, mq.l)(Yq.ec.NewOtherEntitySettings, (qq => {
-       qq.payloadKind === lq.hc.Msgpack && Aq.some((Eq => function(qq, Eq) {
-         const gq = Eq[0];
-         for (let Yq = qq.indexOf(gq); - 1 !== Yq && Yq + Eq.length <= qq.length; Yq = qq.indexOf(gq, Yq + 1)) {
-           let gq = 1;
- ... (251 more removed lines; see GitHub link above)
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
+       getClassName() {
+         return "Plane"
+       }
+       getHashCode() {
+         let CC = this.normal.getHashCode();
+ ... (103 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L425-L468` → after: `L186-L253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L186-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/239.js#L186-L253) · [Before (L425-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/239.js#L425-L468)

```diff
-       },
-       Mq = {
-         localPos() {
-           const qq = (0, cq.e)();
-           if (null === qq) return bq;
-           const Eq = qq.api.apiView;
-           for (let gq = 0; gq < 3; gq++) iq[gq] = xq.t.localPos(Eq, 0, gq);
-           return iq
-         },
-         targetedBlockPos() {
-           const qq = (0, cq.e)();
-           if (null === qq || xq.t.targetBlockId(qq.api.apiView, 0) === xq.id) return null;
-           for (let Eq = 0; Eq < 3; Eq++) Zq[Eq] = xq.t.targetBlock(qq.api.apiView, 0, Eq);
-           return Zq
-         }
-       }
- ... (28 more removed lines; see GitHub link above)
+       }
+     }
+   },
+   37731: (CC, zC, ZC) => {
+     function QC() {
+       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (CC => {
+         const zC = 16 * Math.random() | 0;
+         return ("x" === CC ? zC : 3 & zC | 8).toString(16)
+       }))
+     }
+     ZC.d(zC, {
+       b: () => QC
+     })
+   },
+   38507: (CC, zC, ZC) => {
+     ZC.d(zC, {
+ ... (52 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L470-L502` → after: `L255-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L255-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/239.js#L255-L269) · [Before (L470-L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/239.js#L470-L502)

```diff
-         }
-         for (const Yq of qq.Wg) {
-           const qq = this.members.get(Yq);
-           var gq;
-           if (qq) this.members.delete(Yq), Eq.removed.push({
-             playerId: Yq,
-             name: null !== (gq = qq.name) && void 0 !== gq ? gq : void 0
-           })
-         }
-         return Eq
-       }
-       has(qq) {
-         return this.members.has(qq)
-       }
-       ids() {
-         return [...this.members.keys()]
- ... (17 more removed lines; see GitHub link above)
+       }
+     }
+     QC.NoneLogLevel = 0, QC.MessageLogLevel = 1, QC.WarningLogLevel = 2, QC.ErrorLogLevel = 4, QC.AllLogLevel = 7, QC.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", QC._LogCache = "", QC._LogLimitOutputs = {}, QC._Levels =  … [truncated]
+       color: "white",
+       logFunc: console.log,
+       name: "Log"
+     }, {
+       color: "orange",
+       logFunc: console.warn,
+       name: "Warn"
+     }, {}, {
+       color: "red",
+       logFunc: console.error,
+       name: "Error"
+     }], QC.errorsCount = 0, QC.Log = QC._LogEnabled.bind(QC, QC.MessageLogLevel), QC.Warn = QC._LogEnabled.bind(QC, QC.WarningLogLevel), QC.Error = QC._LogEnabled.bind(QC, QC.ErrorLogLevel)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/240.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/240.js` (39 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L4-L6` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/240.js#L4-L7) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/240.js#L4-L6)

```diff
-   39374: (qq, Eq, gq) => {
-     gq.r(Eq), gq.d(Eq, {
-       default: () => Dg
+   37640: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       b: () => WC,
+       f: () => nC
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L8-L287` → after: `L9-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/240.js#L9-L11) · [Before (L8-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/240.js#L8-L287)

```diff
-     const Yq = [0, 90, 180, 270],
-       lq = "plotsblueprint";
-     var Oq = gq(57),
-       mq = gq(36657),
-       xq = gq(24),
-       Aq = gq(1622),
-       cq = gq(1710),
-       uq = gq(31);
-     const Bq = [
-         ["farm_hut", "farm_house", "farm_barn"],
-         ["rusticHome_tent", "rusticHome_cabin", "rusticHome_house"],
-         ["market_stand", "market_stall", "market_shop"],
-         ["castle_wall", "castle_gate", "castle_tower"]
-       ],
-       Wq = {
-         farm_hut: {
- ... (264 more removed lines; see GitHub link above)
+     var QC = ZC(9217),
+       wC = ZC(9194),
+       bC = ZC(326);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L289-L348` → after: `L13-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L13-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/240.js#L13-L24) · [Before (L289-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/240.js#L289-L348)

```diff
-         farm_hut: {
-           size: [7, 7, 7],
-           palette: ["Aspen Wood Planks", "Messy Stone", "Barkless Aspen Log", "Red Planks", "Glass", "Barkless Pine Log", "Maple Wood Planks", "Smooth Stone"],
-           layers: ["....... .cbhbc. .bgggb. .bgggb. .bgggb. .cbbbc. .......", "....... .cd.dc. .d...d. .d...d. .d...d. .cdddc. .......", "....... .cd.dc. .d...d. .e...d. .d...d. .cdddc. .......", "aa...aa bfdadfb bd...db bd...db bd...db bfdddfb aa...aa", ".aa.aa. .bbdbb. .bb.bb.  … [truncated]
-         },
-         rusticHome_tent: {
-           size: [7, 6, 7],
-           palette: ["Barkless Pine Log", "White Wool", "Pine Wood Planks"],
-           layers: ["a..a..a b.....b b.....b b.....b b.....b b.....b a..a..a", "a..a..a b.....b b.....b b.....b b.....b b.....b a..a..a", "cc.a.cc b.....b b.....b b.....b b.....b b.....b cc.a.cc", ".ccacc. .b...b. .b...b. .b...b. .b...b. .b...b. .ccacc.", "..ccc.. ..b.b.. ..b.b..  … [truncated]
-         },
-         market_stand: {
-           size: [7, 4, 4],
-           palette: ["Barkless Pine Log", "Pine Wood Planks", "White Wool", "Green Wool"],
-           layers: ["a.bbbba ....... ....... acdcdca", "a.....a ....... ....... acdcdca", "a.....a ....... ....... acdcdca", "bcdcdcb bcdcdcb bcdcdcb bcdcdcb"]
-         },
-         castle_wall: {
- ... (44 more removed lines; see GitHub link above)
+       "Maple Door": {
+         positions: [{
+           block: "Maple Door",
+           x: 0,
+           y: 0,
+           z: 0
+         }, {
+           block: "_Maple Door Top",
+           x: 0,
+           y: 1,
+           z: 0
+         }]
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L350-L1357` → after: `L26-L3222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L26-L3222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/240.js#L26-L3222) · [Before (L350-L1357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/240.js#L350-L1357)

```diff
-       kq = new Map;
- 
-     function Rq(qq, Eq) {
-       const gq = `${qq}|${Eq}`;
-       let Yq = kq.get(gq);
-       if (void 0 === Yq) {
-         const {
-           size: lq,
-           palette: Oq,
-           layers: mq
-         } = Jq[qq], xq = 90 === Eq || 270 === Eq, [Aq, cq] = xq ? [lq[2], lq[0]] : [lq[0], lq[2]], uq = function(qq, Eq, gq) {
-           let Yq = null,
-             lq = null,
-             Oq = !1;
-           switch (qq) {
-             case 0:
- ... (992 more removed lines; see GitHub link above)
+       "Maple Door|meta|rot1|open": {
+         positions: [{
+           block: "Maple Door|meta|rot1|open",
+           x: 0,
+           y: 0,
+           z: 0
+         }, {
+           block: "_Maple Door Top|meta|rot1|open",
+           x: 0,
+           y: 1,
+           z: 0
+         }]
+       },
+       "Maple Door|meta|rot2|closed": {
+         positions: [{
+           block: "Maple Door|meta|rot2|closed",
+ ... (3181 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L1359-L1362` → after: `L3224-L3260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R3224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L3224-L3260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/240.js#L3224-L3260) · [Before (L1359-L1362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/240.js#L1359-L1362)

```diff
-           const qq = this.turn.arrived(lq, Eq);
-           if (null !== qq) {
-             this.pressFilled = Yq;
-             for (const [Eq, gq] of this.foreseen) gq <= qq && this.foreseen.delete(Eq)
+         }
+       }(),
+       ... function() {
+         const CC = {
+             1: CC => ({
+               x: 0,
+               z: CC
+             }),
+             2: CC => ({
+               x: CC,
+               z: 0
+             }),
+             3: CC => ({
+               x: 0,
+               z: -CC
+             }),
+ ... (21 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L1365-L1390` → after: `L3263-L3288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R3263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L3263-L3288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/240.js#L3263-L3288) · [Before (L1365-L1390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/240.js#L1365-L1390)

```diff
-         this.juice.filled(qq)
-       }
-       showNext() {
-         var qq;
-         const Eq = this.api.getPositionView(this.localPlayerId);
-         this.playerCells.splice(0, 1 / 0, ...cg(Eq));
-         const gq = this.lastFilled;
-         this.nextCell = this.pickNext(null === gq ? [Eq[0], Eq[1] + 1, Eq[2]] : (0, JE.e)(gq), (() => !1)), this.outline.show(null !== (qq = this.aimed) && void 0 !== qq ? qq : this.nextCell)
-       }
-       pickNext(qq, Eq) {
-         const gq = this.api.getPositionView(this.localPlayerId),
-           Yq = [gq[0], gq[1] + kE.c.UH * kE.c.playerEyeToHeightRatio, gq[2]],
-           lq = mg(this.api, this.localPlayerId),
-           {
-             nextCells: Oq
-           } = this,
- ... (10 more removed lines; see GitHub link above)
+         return zC
+       }(),
+       ... function() {
+         const CC = {};
+         for (let zC = 1; zC <= QC.n; zC++) {
+           const ZC = (0, QC.gc)(zC),
+             wC = QC.r[zC - 1],
+             bC = [{
+               block: ZC,
+               x: 0,
+               y: 0,
+               z: 0
+             }];
+           for (const CC of QC.h)
+             for (let zC = 1; zC <= wC; zC++) {
+               if ("southwest" === CC && 1 === zC) continue;
+ ... (10 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L1392-L1445` → after: `L3290-L3404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R3290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L3290-L3404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/240.js#L3290-L3404) · [Before (L1392-L1445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/240.js#L1392-L1445)

```diff
-             return mq
-           }(Oq, 4, qq, (qq => 1 === Oq[qq + 3]), (qq => {
-             const Yq = mq(qq);
-             return RE(Yq, gq) || this.foreseen.has(Yq.join()) || Eq(Yq)
-           }), (qq => function(qq, Eq, gq) {
-             return (Eq[0] + .5 - qq[0]) ** 2 + (Eq[1] + .5 - qq[1]) ** 2 + (Eq[2] + .5 - qq[2]) ** 2 <= gq ** 2
-           }(Yq, mq(qq), lq)));
-         return -1 === xq ? null : mq(xq)
-       }
-       afterRender(qq) {
-         var Eq;
-         this.turn.look(qq);
-         const gq = this.api.getTargetedBlock();
-         this.aimed = this.pressFilled && this.isHolding(performance.now()) ? null : this.findAimed(null === gq ? null : gq.position), this.outline.show(null !== (Eq = this.aimed) && void 0 !== Eq ? Eq : this.nextCell)
-       }
-       isHolding(qq) {
- ... (38 more removed lines; see GitHub link above)
+           CC[ZC] = {
+             positions: bC
+           }
+         }
+         return CC
+       }(),
+       "Solar Panel": {
+         positions: [{
+           block: "Solar Panel",
+           x: 0,
+           y: 0,
+           z: 0
+         }, {
+           block: "_Solar Panel SE",
+           x: 1,
+           y: 0,
+ ... (99 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L1447` → after: `L3406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R3406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L3406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/240.js#L3406) · [Before (L1447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/240.js#L1447)

```diff
-     }
+     };
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L1450-L1464` → after: `L3409-L3565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R3409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L3409-L3565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/240.js#L3409-L3565) · [Before (L1450-L1464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/240.js#L1450-L1464)

```diff
-       let [Eq, gq, Yq] = qq;
-       const lq = kE.c.ZH / 2;
-       return [Math.floor(Eq), Math.floor(gq), Math.floor(Yq), Math.floor(Eq - lq), Math.floor(Eq + lq), Math.floor(gq + kE.c.UH), Math.floor(Yq - lq), Math.floor(Yq + lq)]
-     }
- 
-     function ug(qq, Eq) {
-       return Eq % 4 !== 3
-     }
- 
-     function Bg(qq, Eq, gq, Yq, lq) {
-       if (!qq.isBlockInLoadedChunk(Eq, Yq - 6, gq) || !qq.isBlockInLoadedChunk(Eq, Yq + 6 + lq, gq) || !qq.canModifyBlockAt(Eq, Yq, gq)) return NaN;
-       let Oq = Yq - 1;
-       if (0 !== qq.getBlockId(Eq, Oq, gq)) {
-         for (; Oq < Yq + 6 && 0 !== qq.getBlockId(Eq, Oq + 1, gq);) Oq++;
-         return Oq
+       return {
+         [`${CC} Banner`]: {
+           positions: [{
+             block: `${CC} Banner`,
+             x: 0,
+             y: 0,
+             z: 0
+           }, {
+             block: `_${CC} Banner Flag|meta|rot1|bot`,
+             x: 0,
+             y: 1,
+             z: 0
+           }]
+         },
+         [`${CC} Banner|meta|rot2|bot`]: {
+           positions: [{
+ ... (141 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L1478-L1482` → after: `L3570-L3663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R3570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L3570-L3663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/240.js#L3570-L3663) · [Before (L1478-L1482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/240.js#L1478-L1482)

```diff
-       const Eq = new Map;
-       for (const mq of qq) {
-         var gq;
-         if (Number.isNaN(mq)) return null;
-         Eq.set(mq, (null !== (gq = Eq.get(mq)) && void 0 !== gq ? gq : 0) + 1)
+       const zC = (0, bC.Gb)(CC);
+       return {
+         [zC]: {
+           positions: [{
+             block: zC,
+             x: 0,
+             y: 0,
+             z: 0
+           }, {
+             block: `_${zC} Top Left`,
+             x: 0,
+             y: 1,
+             z: 0
+           }, {
+             block: `_${zC} Top Right`,
+             x: -1,
+ ... (78 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L1492-L1724` → after: `L3667-L3741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R3667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L3667-L3741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/240.js#L3667-L3741) · [Before (L1492-L1724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/240.js#L1492-L1724)

```diff
-     function ag(qq, Eq, gq, Yq) {
-       const {
-         eye: lq,
-         forward: Oq,
-         tanHalfFovX: mq,
-         tanHalfFovY: xq
-       } = qq, [Aq, cq] = function(qq) {
-         let [Eq, gq, Yq] = qq;
-         const lq = Math.hypot(Eq, Yq),
-           [Oq, mq] = [Yq / lq, -Eq / lq];
-         return [
-           [Oq, 0, mq],
-           [gq * mq, Yq * Oq - Eq * mq, -gq * Oq]
-         ]
-       }(Oq), [uq, Bq] = [Eq * mq, gq * xq], Wq = Oq[0] + uq * Aq[0] + Bq * cq[0], Nq = Oq[1] + Bq * cq[1], aq = Oq[2] + uq * Aq[2] + Bq * cq[2], Vq = (Yq - lq[1]) / Nq;
-       return Vq > 0 && Vq < 1 / 0 ? [lq[0] + Vq * Wq, lq[2] + Vq * aq] : null
- ... (217 more removed lines; see GitHub link above)
+     function qC(CC) {
+       const zC = `_${CC} Back`,
+         ZC = `_${CC} Dish`;
+       return {
+         [CC]: {
+           positions: [{
+             block: CC,
+             x: 0,
+             y: 0,
+             z: 0
+           }, {
+             block: zC,
+             x: 0,
+             y: 0,
+             z: -1
+           }, {
+ ... (59 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L1743-L1753` → after: `L3747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R3747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L3747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/240.js#L3747) · [Before (L1743-L1753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/240.js#L1743-L1753)

```diff
-       let {
-         sent: Eq
-       } = qq;
-       return null !== Eq && !Eq.timedOut
-     }
-     var og = gq(4096),
-       Pg = gq(39098);
- 
-     function Qg(qq, Eq, gq) {
-       const Yq = [255 * qq, 255 * Eq, 255 * gq],
-         [lq, Oq, mq] = Yq.map((qq => qq + .4 * (255 - qq)));
+       const zC = `Small ${CC} Pod`;
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L1755-L1774` → after: `L3749-L3766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R3749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L3749-L3766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/240.js#L3749-L3766) · [Before (L1755-L1774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/240.js#L1755-L1774)

```diff
-         texture: "square_particle",
-         WB: 48,
-         minLifeTime: .3 / Pg.b,
-         maxLifeTime: .55 / Pg.b,
-         minSize: .07,
-         maxSize: .14,
-         minEmitPower: 1,
-         maxEmitPower: 1,
-         emitRate: 0,
-         gravity: [0, -14 * Pg.b * Pg.b, 0],
-         colorGradients: [{
-           timeFraction: 0,
-           minColor: [...Yq, 1],
-           maxColor: [lq, Oq, mq, 1]
-         }, {
-           timeFraction: 1,
- ... (4 more removed lines; see GitHub link above)
+         [zC]: {
+           positions: [{
+             block: zC,
+             x: 0,
+             y: 0,
+             z: 0
+           }, {
+             block: `_Small ${CC} Pod Mid`,
+             x: 0,
+             y: 1,
+             z: 0
+           }, {
+             block: `_Small ${CC} Pod Top`,
+             x: 0,
+             y: 2,
+             z: 0
+ ... (2 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L1777-L1824` → after: `L3769-L3780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R3769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L3769-L3780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/240.js#L3769-L3780) · [Before (L1777-L1824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/240.js#L1777-L1824)

```diff
-     const yg = {
-       texture: "glint",
-       mipmaps: !1,
-       WB: 96,
-       minLifeTime: .5 / Pg.b,
-       maxLifeTime: .9 / Pg.b,
-       minSize: .15,
-       maxSize: .3,
-       minEmitPower: 1,
-       maxEmitPower: 1,
-       emitRate: 0,
-       gravity: [0, 2 * Pg.b * Pg.b, 0],
-       colorGradients: [{
-         timeFraction: 0,
-         minColor: [255, 224, 97, 1],
-         maxColor: [255, 166, 38, 1]
- ... (32 more removed lines; see GitHub link above)
+     for (const NC in nC) {
+       for (const CC of nC[NC].positions)
+         if (CC.id = wC.g[CC.block].id, NC === CC.block && (0 !== CC.x || 0 !== CC.y || 0 !== CC.z)) throw new Error(`Multiblock "${NC}" has main block "${CC.block}" at non-origin position (${CC.x}, ${CC.y}, ${CC.z}) - if you need to do something like this, you'll need to rethink  … [truncated]
+       nC[wC.g[NC].id] = nC[NC]
+     }
+     const WC = {};
+     for (const NC in nC)
+       for (const {
+           block: CC,
+           x: zC,
+           y: ZC,
+           z: QC
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L1826-L1837` → after: `L3782-L3789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R3782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L3782-L3789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/240.js#L3782-L3789) · [Before (L1826-L1837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/240.js#L1826-L1837)

```diff
-         this.sparkles ??= this.api.createParticles(yg, {
-           pos: [Yq, lq, Oq]
-         }), this.sparkles.emitPoints([Yq, lq, Oq], this.points, mq)
-       }
-       dispose() {
-         var qq;
-         for (const Eq of this.chips.values()) Eq.stop();
-         this.chips.clear(), null === (qq = this.sparkles) || void 0 === qq || qq.stop(), this.sparkles = null
-       }
-       setPoint(qq, Eq, gq, Yq, lq) {
-         const Oq = 4 * qq;
-         this.points[Oq] = Eq, this.points[Oq + 1] = gq, this.points[Oq + 2] = Yq, this.points[Oq + 3] = lq
+         of nC[NC].positions) {
+         const bC = {
+           mainMultiblock: NC,
+           compX: zC,
+           compY: ZC,
+           compZ: QC
+         };
+         WC[CC] = bC, WC[wC.g[CC].id] = bC
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L1839-L1845` → after: `L3791-L3800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R3791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L3791-L3800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/240.js#L3791-L3800) · [Before (L1839-L1845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/240.js#L1839-L1845)

```diff
-     }
-     var rg = gq(1952);
-     const vg = "SpecialAction1",
-       hg = "KeyY",
-       ng = "KeyX";
- 
-     function bg(qq) {
+   },
+   38047: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => oC,
+       g: () => fC
+     });
+     var QC = ZC(9194),
+       wC = ZC(9243),
+       bC = ZC(9252);
+     const nC = wC.w.map((CC => {
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L1847` → after: `L3802-L3803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R3802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L3802-L3803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/240.js#L3802-L3803) · [Before (L1847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/240.js#L1847)

```diff
-         placement: Eq
+         dx: zC,
+         dz: ZC
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L1849-L1901` → after: `L3805-L3806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R3805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L3805-L3806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/240.js#L3805-L3806) · [Before (L1849-L1901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/240.js#L1849-L1901)

```diff
-       const gq = (0, nq.h)(Vg, Eq.getView()),
-         {
-           t: Yq
-         } = (0, iq.v)(),
-         {
-           isTouchScreen: lq
-         } = (0, xq.j)(["isTouchScreen"]),
-         Oq = null !== gq,
-         mq = Oq && !gq.blocked && !gq.waiting;
-       if ((0, hq.c)((qq => Oq && !qq.repeat && !(0, cq.isTypingInInput)() && !(0, Aq.p)() && !lq), (qq => {
-           const gq = function(qq, Eq, gq) {
-             if (qq === ng) return Eq.stop;
-             if (qq === hg) return gq ? Eq.build : Zg;
-             return rg.u[vg].includes(qq) ? Eq.rotate : null
-           }(qq.code, Eq, mq);
-           null !== gq && (qq.stopPropagation(), gq())
- ... (37 more removed lines; see GitHub link above)
+       return [zC, 0, ZC]
+     }));
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L1904-L1907` → after: `L3809-L3810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R3809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L3809-L3810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/240.js#L3809-L3810) · [Before (L1904-L1907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/240.js#L1904-L1907)

```diff
-       return (0, Fq.jsx)(AE.c, {
-         className: "PlotsPlacementKey",
-         ...qq
-       })
+       const zC = QC.g[CC];
+       return !!zC && CC !== QC.d && !zC.model && !zC.NM && !1 !== zC.solid && !zC.qp
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L1914-L1932` → after: `L3814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R3814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L3814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/240.js#L3814) · [Before (L1914-L1932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/240.js#L1914-L1932)

```diff
-         this.placement = qq, this.press = null
-       }
-       down(qq) {
-         if (null !== this.press) return !1;
-         const {
-           id: Eq,
-           mouse: gq,
-           x: Yq,
-           y: lq,
-           atMs: Oq
-         } = qq;
-         return this.press = {
-           id: Eq,
-           mouse: gq,
-           x: Yq,
-           y: lq,
- ... (3 more removed lines; see GitHub link above)
+         this.model = CC, this.reshapeOffsets = [...nC, [0, -1, 0]]
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L1934-L1936` → after: `L3816-L3818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R3816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L3816-L3818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/240.js#L3816-L3818) · [Before (L1934-L1936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/240.js#L1934-L1936)

```diff
-       move(qq) {
-         const Eq = this.press;
-         null !== Eq && Eq.id === qq.id && (Eq.moved ||= Math.hypot(qq.x - Eq.x, qq.y - Eq.y) > 8), qq.mouse ? this.placement.hoverAt(qq.ndcX, qq.ndcY) : (null === Eq || void 0 === Eq ? void 0 : Eq.id) === qq.id && this.placement.dragTo(qq.ndcX, qq.ndcY)
+       handles(CC) {
+         const zC = QC.g[CC];
+         return (null === zC || void 0 === zC ? void 0 : zC.model) === this.model && void 0 !== zC.attachedTop
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L1938-L1940` → after: `L3820-L3821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R3820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L3820-L3821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/240.js#L3820-L3821) · [Before (L1938-L1940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/240.js#L1938-L1940)

```diff
-       up(qq) {
-         const Eq = this.press;
-         (null === Eq || void 0 === Eq ? void 0 : Eq.id) === qq.id && (this.move(qq), this.end(), !Eq.moved && (Eq.mouse || qq.atMs - Eq.atMs <= 250) && this.placement.tap())
+       affects(CC) {
+         return this.handles(CC) || fC(CC) || (0, bC.A)(QC.g[CC])
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L1942-L1954` → after: `L3823-L3835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R3823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L3823-L3835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/240.js#L3823-L3835) · [Before (L1942-L1954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/240.js#L1942-L1954)

```diff
-       cancel(qq) {
-         var Eq;
-         (null === (Eq = this.press) || void 0 === Eq ? void 0 : Eq.id) === qq && this.end()
-       }
-       leave(qq) {
-         let {
-           id: Eq,
-           mouse: gq
-         } = qq;
-         gq && this.placement.endHover(), this.cancel(Eq)
-       }
-       end() {
-         this.press.mouse || this.placement.endDrag(), this.press = null
+       shape(CC, zC, ZC, nC, oC) {
+         let qC = this.handles(CC(zC, ZC + 1, nC)) ? wC.m : 0;
+         return wC.w.forEach(((oC, FC) => {
+           let {
+             dx: WC,
+             dz: NC
+           } = oC;
+           const MC = CC(zC + WC, ZC, nC + NC);
+           (this.handles(MC) || fC(MC) || function(CC, zC) {
+             const ZC = QC.g[CC];
+             return (0, bC.A)(ZC) && (0, bC.y)(ZC.meta.rot) === (0 !== wC.w[zC].dx)
+           }(MC, FC)) && (qC |= 1 << FC)
+         })), (0, QC.k)((0, wC.q)(QC.g[oC].meta.rootName, qC))
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L1957-L1964` → after: `L3838-L3868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R3838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L3838-L3868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/240.js#L3838-L3868) · [Before (L1957-L1964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/240.js#L1957-L1964)

```diff
- 
-     function Tg(qq) {
-       let {
-         placement: Eq
-       } = qq;
-       return null === (0, nq.h)(Vg, Eq.getView()) ? null : (0, Fq.jsx)(zg, {
-         placement: Eq
-       })
+   },
+   37834: (CC, zC, ZC) => {
+     function QC(CC, zC) {
+       var ZC;
+       zC || (zC = {});
+       const QC = null !== (ZC = zC.customAttributes) && void 0 !== ZC ? ZC : {};
+       var wC, bC, nC;
+       "Gun" === (null === CC || void 0 === CC ? void 0 : CC.type) && (QC.shotsLeft = null !== (wC = null !== (bC = QC.shotsLeft) && void 0 !== bC ? bC : null === (nC = QC.gunStats) || void 0 === nC ? void 0 : nC.clipSize) && void 0 !== wC ? wC : CC.clipSize);
+       if (QC.enchantmentTier && (QC.enchantmentTier = QC.enchantmentTier.toString()), QC.enchantments)
+         for (const WC in QC.enchantments) {
+           const CC = QC.enchantments[WC];
+           if ("number" !== typeof CC) {
+             const zC = parseInt(CC);
+             isNaN(zC) || zC < 0 ? QC.enchantments[WC] = void 0 : QC.enchantments[WC] = zC > 1e9 ? 1e9 : zC
+           }
+         }
+ ... (15 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L1968-L1994` → after: `L3889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R3889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L3889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/240.js#L3889) · [Before (L1968-L1994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/240.js#L1968-L1994)

```diff
-       let {
-         placement: Eq
-       } = qq;
-       (0, fg.e)(!0, !0, "PlotsPlacementLayer");
-       const gq = (0, Oq.useMemo)((() => new Mg(Eq)), [Eq]);
-       return (0, Fq.jsx)("div", {
-         className: "PlotsPlacementLayer",
-         onPointerDown: qq => {
-           "mouse" === qq.pointerType && 0 !== qq.button || !gq.down(Sg(qq)) || qq.currentTarget.setPointerCapture(qq.pointerId)
-         },
-         onPointerMove: qq => {
-           gq.move(Sg(qq))
-         },
-         onPointerUp: qq => {
-           gq.up(Sg(qq))
-         },
- ... (11 more removed lines; see GitHub link above)
+       return nC <= CC && CC <= fC
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L1998-L2012` → after: `L3898-L3899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R3898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L3898-L3899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/240.js#L3898-L3899) · [Before (L1998-L2012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/240.js#L1998-L2012)

```diff
-       const {
-         left: Eq,
-         top: gq,
-         width: Yq,
-         height: lq
-       } = qq.currentTarget.getBoundingClientRect();
-       return {
-         id: qq.pointerId,
-         mouse: "mouse" === qq.pointerType,
-         x: qq.clientX,
-         y: qq.clientY,
-         ndcX: (qq.clientX - Eq) / Yq * 2 - 1,
-         ndcY: 1 - (qq.clientY - gq) / lq * 2,
-         atMs: qq.timeStamp
-       }
+       var zC, ZC;
+       return "string" === typeof(null === CC || void 0 === CC || null === (zC = CC.persisted) || void 0 === zC || null === (ZC = zC.shared) || void 0 === ZC ? void 0 : ZC.text)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L2025-L2045` → after: `L3903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R3903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L3903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/240.js#L3903) · [Before (L2025-L2045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/240.js#L2025-L2045)

```diff
-       let {
-         hud: Eq
-       } = qq;
-       const gq = (0, nq.h)(uE, Eq.getPlot()),
-         [Yq, lq] = (0, Oq.useState)(null),
-         mq = (0, Gg.j)(Yq);
-       if ("none" === gq[0]) return null;
-       const [, xq, Aq, cq, uq, Bq] = gq;
-       return (0, Fq.jsx)("div", {
-         className: yq()("PlotsPlotBannerContainer", {
-           Below: mq
-         }),
-         children: (0, Fq.jsx)(Ug, {
-           plotX: xq,
-           plotZ: Aq,
-           ownerName: cq,
- ... (5 more removed lines; see GitHub link above)
+       return pC(CC) && "" !== CC.persisted.shared.text.trim()
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L2048-L2095` → after: `L3906-L3909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R3906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L3906-L3909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/240.js#L3906-L3909) · [Before (L2048-L2095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/240.js#L2048-L2095)

```diff
-     function Ug(qq) {
-       var Eq, gq;
-       let {
-         plotX: Yq,
-         plotZ: lq,
-         ownerName: Oq,
-         ownerId: mq,
-         relation: xq,
-         plaqueRef: Aq
-       } = qq;
-       const {
-         t: cq
-       } = (0, iq.v)(), uq = (0, Lg.g)("hiddenPlayerNames"), Bq = (0, Lg.g)("players"), Wq = null === mq ? null : null !== (Eq = null === (gq = Bq.byId[mq]) || void 0 === gq ? void 0 : gq.cosmetics) && void 0 !== Eq ? Eq : null, Nq = cq("plotsGame:plotBannerCoords", {
-         x: Yq,
-         z: lq
-       }), aq = "own" === xq || null !== Oq;
- ... (32 more removed lines; see GitHub link above)
+     function GC(CC, zC) {
+       let [ZC, , QC] = zC;
+       const [bC, , nC] = wC.q[CC][MC];
+       return ZC * bC + QC * nC
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L2098-L2122` → after: `L3912-L3913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R3912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L3912-L3913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/240.js#L3912-L3913) · [Before (L2098-L2122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/240.js#L2098-L2122)

```diff
-     function Fg(qq) {
-       let {
-         progress: Eq,
-         goal: gq
-       } = qq;
-       const Yq = Math.min(Eq, gq);
-       return (0, Fq.jsxs)("div", {
-         className: "PlotsProgress",
-         children: [(0, Fq.jsx)("div", {
-           className: "PlotsProgressBar",
-           role: "progressbar",
-           "aria-valuemin": 0,
-           "aria-valuemax": gq,
-           "aria-valuenow": Yq,
-           children: (0, Fq.jsx)("div", {
-             className: "PlotsProgressBarFill",
- ... (9 more removed lines; see GitHub link above)
+     function RC(CC, zC, ZC) {
+       return ZC[1] - zC[1] || GC(CC, zC) - GC(CC, ZC)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L2125-L2129` → after: `L3916-L3921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R3916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L3916-L3921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/240.js#L3916-L3921) · [Before (L2125-L2129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/240.js#L2125-L2129)

```diff
-     function sg(qq) {
-       return {
-         translationKey: `plotsGame:${qq}`,
-         actions: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
-       }
+     function AC(CC, zC, ZC, bC, fC) {
+       var oC;
+       let FC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : CC(zC[0], zC[1], zC[2]);
+       if (!(qC[FC - nC] & 1 << ZC)) return null;
+       const [WC, NC, MC] = wC.q[fC][ZC], gC = [zC[0] + WC, zC[1] + NC, zC[2] + MC], SC = CC(gC[0], gC[1], gC[2]), pC = null === (oC = QC.g[SC]) || void 0 === oC ? void 0 : oC.meta;
+       return (null === pC || void 0 === pC ? void 0 : pC.rootId) === bC && pC.rot === fC && qC[SC - nC] & 1 << (1 ^ ZC) ? gC : null
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L2176` → after: `L3924-L3926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R3924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L3924-L3926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/240.js#L3924-L3926) · [Before (L2176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/240.js#L2176)

```diff
-     function wg(qq, Eq, gq) {
+     function xC(CC, zC, ZC, bC) {
+       const nC = CC(zC, ZC, bC);
+       if (!oC(nC)) return null;
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L2178-L2187` → after: `L3928-L3948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R3928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L3928-L3948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/240.js#L3928-L3948) · [Before (L2178-L2187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/240.js#L2178-L2187)

```diff
-         translationKey: Yq,
-         actions: lq
-       } = gq ? Eq.touch : Eq.desktop;
-       if (0 === lq.length) return qq(Yq);
-       const Oq = [];
-       for (const mq of lq) {
-         const Yq = (0, rg.s)(mq, gq),
-           lq = rg.u[mq][0];
-         if (null === Yq && void 0 === lq) return qq(Eq.plainKey);
-         Oq.push(null === Yq ? (0, rg.l)(lq) : qq(Yq.translationKey))
+         rootId: fC,
+         rot: qC
+       } = QC.g[nC].meta, WC = (zC, ZC) => {
+         let QC = zC,
+           wC = 1;
+         for (let bC = AC(CC, QC, ZC, fC, qC); bC && wC < FC; bC = AC(CC, QC, ZC, fC, qC)) QC = bC, wC++;
+         return {
+           end: QC,
+           cells: wC
+         }
+       }, pC = WC(WC([zC, ZC, bC], NC).end, gC).end, PC = WC(pC, MC).cells, [GC, , RC] = wC.q[qC][MC];
+       let xC = 1;
+       CC: for (; xC < FC; xC++)
+         for (let zC = 0; zC < PC; zC++)
+           if (!AC(CC, [pC[0] + GC * zC, pC[1] - xC + 1, pC[2] + RC * zC], SC, fC, qC)) break CC;
+       return {
+ ... (5 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L2194-L2215` → after: `L3952-L3966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R3952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L3952-L3966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/240.js#L3952-L3966) · [Before (L2194-L2215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/240.js#L2194-L2215)

```diff
-     function Kg(qq) {
-       let {
-         hud: Eq
-       } = qq;
-       const gq = (0, nq.h)(cE, Eq.getStep()),
-         {
-           t: Yq
-         } = (0, iq.v)();
-       return (0, Fq.jsxs)(mE.g, {
-         placement: "bottom",
-         children: ["step" === gq[0] && (0, Fq.jsx)(Cg, {
-           step: gq[1],
-           progress: gq[2],
-           goal: gq[3]
-         }, gq[1]), "celebrate" === gq[0] && (0, Fq.jsx)(Ig, {
-           className: yq()("Celebrate", {
- ... (6 more removed lines; see GitHub link above)
+     function JC(CC, zC) {
+       for (const ZC of function(CC) {
+           let {
+             anchor: zC,
+             rot: ZC,
+             width: QC,
+             height: bC
+           } = CC;
+           const [nC, , fC] = wC.q[ZC][MC], oC = [];
+           for (let wC = 0; wC < bC; wC++)
+             for (let CC = 0; CC < QC; CC++) oC.push([zC[0] + nC * CC, zC[1] - wC, zC[2] + fC * CC]);
+           return oC
+         }(CC))
+         if (pC(zC(ZC[0], ZC[1], ZC[2]))) return ZC;
+       return null
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L2218-L2223` → after: `L3969-L3971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R3969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L3969-L3971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/240.js#L3969-L3971) · [Before (L2218-L2223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/240.js#L2218-L2223)

```diff
-     function Cg(qq) {
-       let {
-         step: Eq,
-         progress: gq,
-         goal: Yq
-       } = qq;
+     function IC(CC, zC, ZC, wC, bC) {
+       const nC = CC(ZC, wC, bC);
+       if (!oC(nC)) return null;
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L2225-L2264` → after: `L3973-L3996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R3973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L3973-L3996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/240.js#L3973-L3996) · [Before (L2225-L2264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/240.js#L2225-L2264)

```diff
-         isTouchScreen: lq
-       } = (0, xq.j)(["isTouchScreen"]), {
-         t: Oq
-       } = (0, iq.v)(), mq = Xg[Eq];
-       return (0, Fq.jsxs)(Ig, {
-         icon: mq.icon,
-         title: Oq(mq.titleKey),
-         children: [(0, Fq.jsx)("div", {
-           className: "PlotsStepCardHint SmallTextLight",
-           children: wg(Oq, mq, lq)
-         }), Yq > 1 && (0, Fq.jsx)(Fg, {
-           progress: gq,
-           goal: Yq
-         }), "backpack" === Eq && lq && (0, Fq.jsx)(eg, {})]
-       })
-     }
- ... (24 more removed lines; see GitHub link above)
+         rootId: fC,
+         rot: qC
+       } = QC.g[nC].meta, FC = [
+         [ZC, wC, bC]
+       ], NC = new Set([FC[0].join()]);
+       let MC = FC[0],
+         gC = null;
+       for (let QC = 0; QC < FC.length; QC++) {
+         const ZC = FC[QC];
+         if (RC(qC, ZC, MC) < 0 && (MC = ZC), pC(zC(ZC[0], ZC[1], ZC[2]))) {
+           const zC = xC(CC, ZC[0], ZC[1], ZC[2]);
+           (!gC || RC(qC, zC.anchor, gC.anchor) < 0) && (gC = zC)
+         }
+         for (let zC = 0; zC < 4 && FC.length < WC; zC++) {
+           const QC = AC(CC, ZC, zC, fC, qC);
+           QC && !NC.has(QC.join()) && (NC.add(QC.join()), FC.push(QC))
+ ... (8 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L2267-L2332` → after: `L3999-L4010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R3999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L3999-L4010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/240.js#L3999-L4010) · [Before (L2267-L2332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/240.js#L2267-L2332)

```diff
-     function eg() {
-       return (0, Oq.useEffect)((() => (xq.b.set({
-         backpackPointerRequested: !0
-       }), () => {
-         xq.b.set({
-           backpackPointerRequested: !1
-         })
-       })), []), null
-     }
-     const Dg = function(qq, Eq, gq, Yq) {
-       let {
-         localPlayerId: lq
-       } = Yq;
-       const xq = new BE;
-       let Aq = null,
-         cq = null,
- ... (50 more removed lines; see GitHub link above)
+     function iC(CC, zC, ZC, nC, fC) {
+       if (null !== ZC && oC(ZC)) {
+         const {
+           rootName: CC,
+           rot: zC
+         } = QC.g[ZC].meta;
+         if (wC.q[zC].some((CC => {
+             let [zC, ZC, QC] = CC;
+             return zC === nC[0] && ZC === nC[1] && QC === nC[2]
+           }))) return {
+           root: CC,
+           rot: zC
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L2337` → after: `L4020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R4020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L4020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/240.js#L4020) · [Before (L2337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/240.js#L2337)

```diff
-   39098: (qq, Eq, gq) => {
+   38055: (CC, zC, ZC) => {
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L2339-L2340` → after: `L4022-L4025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R4022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L4022-L4025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/240.js#L4022-L4025) · [Before (L2339-L2340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/240.js#L2339-L2340)

```diff
-       b: () => Yq,
-       f: () => Oq
+       d: () => bC,
+       e: () => nC,
+       i: () => wC,
+       l: () => fC
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L2342-L2388` → after: `L4027-L4038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R4027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L4027-L4038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/240.js#L4027-L4038) · [Before (L2342-L2388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/240.js#L2342-L2388)

```diff
-     const Yq = 1 / .6,
-       lq = {
-         kind: "smokePuff"
-       };
-     class Oq {
-       constructor(qq, Eq, gq) {
-         this.style = qq, this.WB = Eq, this.half = gq, this.particles = null, this.lastFrame = -1
-       }
-       emit(qq, Eq, gq) {
-         let Oq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
-         return gq !== this.lastFrame && (this.lastFrame = gq, this.particles || (this.particles = qq.createParticles(function(qq, Eq) {
-           const [
-             [gq, Oq, mq],
-             [xq, Aq, cq]
-           ] = qq.colours;
-           return {
- ... (31 more removed lines; see GitHub link above)
+     var QC = ZC(330);
+     const wC = ["Snowball", "Snowball Launcher", "Pebble", "Reinforced Pebble", "Ball", "Reinforced Ball", "Mango", "Moonstone Orb", ...ZC(597).B.map((CC => `${CC} Spawn Orb`)), "Fireball", "RPG", "Obby RPG", "Super RPG", "Grenade Launcher", "Iceball", "Bouncy Bomb", "Coconut", " … [truncated]
+       bC = ["Obby RPG"];
+ 
+     function nC(CC) {
+       const zC = CC.indexOf("|");
+       return -1 === zC ? {
+         item: CC,
+         clientPredictedThrower: null
+       } : {
+         item: CC.slice(0, zC),
+         clientPredictedThrower: CC.slice(zC + 1)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/241.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/241.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774)

#### 1. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L4-L6` → after: `L4-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L4-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/241.js#L4-L11) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/241.js#L4-L6)

```diff
-   39569: (qq, Eq, gq) => {
-     gq.r(Eq), gq.d(Eq, {
-       playDocsSound: () => xq
+   37900: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => qC,
+       g: () => QC,
+       i: () => fC,
+       m: () => wC,
+       n: () => nC,
+       r: () => bC
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L8-L11` → after: `L13-L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L13-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/241.js#L13-L224) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/241.js#L8-L11)

```diff
-     var Yq = gq(4684),
-       lq = gq(36796),
-       Oq = gq(1195);
-     const mq = new Map;
+     const QC = 1.001,
+       wC = .501,
+       bC = .025,
+       nC = .75,
+       fC = .08,
+       oC = 4;
+ 
+     function qC() {
+       const CC = wC,
+         zC = bC,
+         ZC = CC - zC / 2,
+         QC = (2 * CC - 2 * zC) / (2 * oC - 1),
+         nC = [];
+       for (const wC of [-ZC, ZC])
+         for (const bC of [-ZC, ZC])
+           for (let ZC = 0; ZC < oC; ZC++) {
+ ... (196 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L14-L22` → after: `L227-L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L227-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/241.js#L227-L286) · [Before (L14-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/241.js#L14-L22)

```diff
-       let cq, uq = null,
-         Bq = 0,
-         Wq = 0;
-       if (Eq) cq = new Yq.Howl({
-         src: [`${Oq.clientSideServerUrls.staticUrl}/sounds/music/${qq}.mp3`],
-         html5: !0,
-         volume: gq
-       });
-       else {
+       return zC < gC.s || zC >= gC.s + gC.v || Math.floor(CC / gC.A) === Math.floor(QC / gC.A) && Math.floor(ZC / gC.A) === Math.floor(wC / gC.A)
+     }
+     const pC = "Splitter",
+       PC = "Sorting Gate",
+       GC = new Set(gC.K),
+       RC = new Set([...gC.K, "Belt Loader", "Fast Loader", PC]),
+       AC = new Set(gC.x),
+       xC = [
+         [1, 0, 0],
+         [-1, 0, 0],
+         [0, 0, 1],
+         [0, 0, -1],
+         [0, 1, 0],
+         [0, -1, 0]
+       ];
+ 
+ ... (44 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L24-L73` → after: `L288-L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L288-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/241.js#L288-L306) · [Before (L24-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/241.js#L24-L73)

```diff
-         uq = (0, lq.k)(qq);
-         const Eq = (0, lq.g)(uq),
-           gq = null !== (Nq = Eq.sprite[qq]) && void 0 !== Nq ? Nq : null;
-         if (!gq) throw new Error(`Docs sound ${qq} is not in sprite sheet ${uq}`);
-         Bq = gq[0] / 1e3, Wq = gq[1] / 1e3, cq = mq.get(uq), cq || (cq = new Yq.Howl({
-           ...Eq,
-           volume: 1
-         }), mq.set(uq, cq))
-       }
-       const aq = Eq ? cq.play() : cq.play(qq);
-       cq.volume(gq, aq), xq > 0 && cq.seek(Bq + xq, aq);
-       const Vq = () => Eq ? cq.duration() : Wq;
-       let dq = !1;
-       const jq = qq => {
-           dq || (dq = !0, cq.off("play", Hq, aq), cq.off("end", oq, aq), cq.off("loaderror", Qq), cq.off("playerror", Pq, aq), Eq && cq.unload(), Aq.onEnd(qq))
-         },
- ... (34 more removed lines; see GitHub link above)
+         return "Stairs" === (null === (zC = QC.g[CC]) || void 0 === zC ? void 0 : zC.model)
+       }
+       affects(CC) {
+         return this.handles(CC)
+       }
+       shape(CC, zC, ZC, wC, bC) {
+         const nC = this.stairsOf(bC),
+           fC = this.cornerAt(CC, zC, ZC, wC, nC),
+           qC = nC.half === oC.c.top ? "top" : "bot";
+         return (0, QC.k)(`${QC.g[bC].meta.rootName}|meta|rot${nC.rot}|${qC}${null===fC?"":`|${fC}`}`)
+       }
+       stairsOf(CC) {
+         const {
+           rot: zC,
+           halfblockPlacement: ZC
+         } = QC.g[CC].meta;
+ ... (3 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/242.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/242.js` (29 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L4-L6` → after: `L4-L2033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L4-L2033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/242.js#L4-L2033) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/242.js#L4-L6)

```diff
-   39578: (qq, Eq, gq) => {
-     gq.r(Eq), gq.d(Eq, {
-       default: () => wq
+   38944: (CC, zC, ZC) => {
+     function QC(CC) {
+       return !(!CC.lobbyLeaderboardInfo && !CC.lobbyManage)
+     }
+     ZC.d(zC, {
+       d: () => QC
+     })
+   },
+   38923: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => bC,
+       g: () => nC
+     });
+     var QC = ZC(28);
+     let wC = !1;
+ 
+ ... (2014 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L69-L95` → after: `L2037-L2478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R2037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L2037-L2478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/242.js#L2037-L2478) · [Before (L69-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/242.js#L69-L95)

```diff
-       let {
-         heatmap: Eq,
-         scale: gq,
-         fullyOpaqueFrom: Mq,
-         bounds: Gq,
-         fitBounds: Lq,
-         schematic: Jq,
-         controls: kq,
-         onStepTime: Rq,
-         onShowAllTime: Uq,
-         onTogglePlaying: Fq,
-         getReadout: Xq = null
-       } = qq;
-       const {
-         t: wq
-       } = (0, Vq.v)(), {
- ... (11 more removed lines; see GitHub link above)
+       return Object.keys(ZZ.Metadata.getFields(CC))
+     }
+     const NZ = WZ(FZ);
+     for (const CQ of QZ.x)
+       if (!NZ.includes(CQ)) throw new Error(`Mob Schema is missing a networked property: "${CQ}"`);
+     const MZ = WZ((sz = (0, ZZ.type)("string"), Tz = (0, ZZ.type)("float32"), az = (0, ZZ.type)("float32"), tz = (0, ZZ.type)("float32"), Dz = (0, ZZ.type)("float32"), jz = class extends oZ {
+       constructor() {
+         super(...arguments), (0, CZ.b)(this, "soundName", yz, this), (0, CZ.b)(this, "volume", Lz, this), (0, CZ.b)(this, "refDistance", Uz, this), (0, CZ.b)(this, "maxHearDist", Bz, this), (0, CZ.b)(this, "rate", Oz, this)
+       }
+     }, yz = (0, zZ.d)(jz.prototype, "soundName", [sz], {
+       configurable: !0,
+       enumerable: !0,
+       writable: !0,
+       initializer: function() {
+         return ""
+       }
+ ... (426 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L97-L101` → after: `L2480-L2578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R2480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L2480-L2578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/242.js#L2480-L2578) · [Before (L97-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/242.js#L97-L101)

```diff
-           for (const [lq, Oq] of Object.entries(qq.frequencies)) {
-             const qq = Number(lq);
-             for (const [lq, mq] of Object.entries(Oq)) {
-               const Oq = Number(lq);
-               for (const [lq, xq] of Object.entries(mq)) xq <= 0 || (gq.push(qq - Eq[0], Oq - Eq[1], Number(lq) - Eq[2]), Yq.push(xq))
+           for (const bC of WZ(ZC.constructor)) fC.push(this.listenForFutureChanges(nC, bC, (() => {
+             this.onEntityFieldChange(CC, zC, QC, {
+               key: wC,
+               value: ZC
+             })
+           })));
+           bC.set(wC, (() => {
+             for (const CC of fC) CC()
+           }))
+         })), wC.lY(((ZC, wC) => {
+           var nC;
+           null === (nC = bC.get(wC)) || void 0 === nC || nC(), bC.delete(wC), this.onEntityFieldChange(CC, zC, QC, {
+             key: wC,
+             value: null
+           })
+         })), this.addDetacher(CC, (() => {
+ ... (83 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L126-L130` → after: `L2582-L3092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R2582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L2582-L3092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/242.js#L2582-L3092) · [Before (L126-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/242.js#L126-L130)

```diff
-       LE.current = {
-         fittedView: pE,
-         fieldOfView: TE,
-         mouseSensitivity: OE.mouseSensitivity,
-         canLock: dE
+         else if (!wC) {
+           this.MN.JR.YCC(QC, "smoothToServerPos") || this.MN.JR.lH(QC, "smoothToServerPos");
+           const CC = this.MN.JR.getState(QC, "smoothToServerPos"),
+             zC = this.MN.JR.lL(QC).position;
+           (0, DZ.setServerPosition)(CC, zC[0], zC[1], zC[2])
+         }
+       }
+       handleRotationChange(CC, zC, ZC) {
+         const QC = "xRotation" === zC ? 0 : "yRotation" === zC ? 1 : 2;
+         for (const wC of (0, sZ.c)().getFollowingEntities(CC)) {
+           const CC = this.MN.JR.getState(wC, "meshRotation"),
+             zC = this.MN.JR.BzC(wC);
+           CC && zC.OzC && (CC.serverSetRotation[QC] = ZC)
+         }
+       }
+       handleScaleChange(CC, zC) {
+ ... (495 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L132-L138` → after: `L3094-L3373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R3094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L3094-L3373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/242.js#L3094-L3373) · [Before (L132-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/242.js#L132-L138)

```diff
-       const JE = (0, Yq.useMemo)((() => {
-           if (!QE) return null;
-           const qq = (qq, gq, Yq) => {
-               var lq, Oq, mq;
-               return null !== (lq = null === (Oq = Eq.frequencies[qq + bE[0]]) || void 0 === Oq || null === (mq = Oq[gq + bE[1]]) || void 0 === mq ? void 0 : mq[Yq + bE[2]]) && void 0 !== lq ? lq : 0
-             },
-             Yq = function(qq, Eq, gq, Yq) {
+       CC.inputs.down.on("jump", (CC => {
+         zz() || (ZC(), Nz(CC))
+       }));
+       for (const QC of RC.g) CC.inputs.down.on(QC, (CC => {
+         var zC, ZC;
+         null !== (zC = (0, hC.c)().client) && void 0 !== zC && null !== (ZC = zC.freeCameraController) && void 0 !== ZC && ZC.handlefreeCamKeyPress(QC, CC, !0) && (CC.preventDefault(), CC.stopPropagation())
+       })), CC.inputs.up.on(QC, (CC => {
+         var zC, ZC;
+         null !== (zC = (0, hC.c)().client) && void 0 !== zC && null !== (ZC = zC.freeCameraController) && void 0 !== ZC && ZC.handlefreeCamKeyPress(QC, CC, !1) && (CC.preventDefault(), CC.stopPropagation())
+       }));
+       CC.inputs.down.on("recordGame", (() => {
+         var CC, zC;
+         null === (CC = (0, hC.c)().client) || void 0 === CC || null === (zC = CC.gameRecorder) || void 0 === zC || zC.toggleRecording()
+       })), CC.inputs.down.on("recordClip", (() => {
+         var CC, zC;
+         (0, iC.c)() || null === (CC = (0, hC.c)().client) || void 0 === CC || null === (zC = CC.gameRecorder) || void 0 === zC || zC.saveClip()
+ ... (264 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L140-L148` → after: `L3375-L3388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R3375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L3375-L3388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/242.js#L3375-L3388) · [Before (L140-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/242.js#L140-L148)

```diff
-                 Oq = 1 / 0;
-               for (const Bq of [0, 1, 2]) {
-                 if (0 === Eq[Bq]) {
-                   if (qq[Bq] < 0 || qq[Bq] > gq[Bq]) return null;
-                   continue
-                 }
-                 const Yq = (0 - qq[Bq]) / Eq[Bq],
-                   mq = (gq[Bq] - qq[Bq]) / Eq[Bq];
-                 lq = Math.max(lq, Math.min(Yq, mq)), Oq = Math.min(Oq, Math.max(Yq, mq))
+                 MC = null,
+                 gC = !1;
+               if (0 === bC.amount) gC = !0;
+               else {
+                 const {
+                   amountPickedUp: zC
+                 } = CC.JR.SzC(CC.qE).pickUpItem({
+                   name: bC.name,
+                   typeObj: bC.typeObj,
+                   amount: bC.amount,
+                   attributes: bC.attributes
+                 });
+                 if (NC = zC, 0 === NC) continue;
+                 MC = tC.c.pickUp(bC, NC), bC.amount -= NC, bC.amount < 0 ? console.error("Picking up led to less than 0 of item!") : 0 === bC.amount ? gC = !0 : bC.creationTime = Date.now() + Qz
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L150-L165` → after: `L3390-L3657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R3390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L3390-L3657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/242.js#L3390-L3657) · [Before (L150-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/242.js#L150-L165)

```diff
-               if (lq > Oq) return null;
-               const mq = [0, 1, 2].map((Yq => Math.min(gq[Yq] - 1, Math.max(0, Math.floor(qq[Yq] + Eq[Yq] * lq))))),
-                 xq = [0, 1, 2].map((qq => Math.sign(Eq[qq]))),
-                 Aq = [0, 1, 2].map((gq => {
-                   if (0 === xq[gq]) return 1 / 0;
-                   return ((xq[gq] > 0 ? mq[gq] + 1 : mq[gq]) - qq[gq]) / Eq[gq]
-                 })),
-                 cq = [0, 1, 2].map((qq => 0 === xq[qq] ? 1 / 0 : Math.abs(1 / Eq[qq])));
-               let uq = null;
-               for (;;) {
-                 const qq = Yq(mq[0], mq[1], mq[2]);
-                 if (qq >= 1) return mq;
-                 qq > 0 && (uq = [mq[0], mq[1], mq[2]]);
-                 const Eq = Aq[0] < Aq[1] ? Aq[0] < Aq[2] ? 0 : 2 : Aq[1] < Aq[2] ? 1 : 2;
-                 if (Aq[Eq] > Oq) return uq;
-                 if (mq[Eq] += xq[Eq], Aq[Eq] += cq[Eq], mq[Eq] < 0 || mq[Eq] >= gq[Eq]) return uq
+               const SC = (0, hC.c)().client.inventoryPrediction.record(MC);
+               (0, QC.sendColyMessage)(FC.Jh, {
+                 Yq: null === wC ? ZC : "",
+                 dq: NC,
+                 mq: qC.d,
+                 bn: SC,
+                 Hq: wC
+               }, !0), gC && (oC && nC.onPickedUpOffline(ZC, SC, wC), null === wC && CC.JR.deleteEntity(ZC));
+               fC.e.play("pickUp", sC.f.pickupSoundVol).rate(1 + Math.random() * sC.f.pickupSoundRateVariation)
+             }
+         }
+         if (!CC.JR.fzC(CC.qE)) return;
+         const bC = CC.inputs.Fy.kCC;
+         if (0 !== bC) {
+           const zC = bC > 0 ? 1 : -1;
+           CC.inputs.state["mid-fire"] || CC.inputs.state.Alt || !CC.pR.useInventory ? (CC.inputs.state["mid-fire"] && SC.o.bp("requestEmoteWheelClose"), (0, hC.c)().client.cameraController.handleScrollZoom(zC)) : SC.o.bp("ScrollInventorySlot", zC)
+ ... (252 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L167-L186` → after: `L3659-L3666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R3659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L3659-L3666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/242.js#L3659-L3666) · [Before (L167-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/242.js#L167-L186)

```diff
-             }(GE.position, qE(GE), fE, ((Eq, Yq, lq) => (0, Pq.x)(qq(Eq, Yq, lq), gq, Mq)));
-           return null === Yq ? null : {
-             x: Yq[0] + bE[0],
-             y: Yq[1] + bE[1],
-             z: Yq[2] + bE[2],
-             value: qq(Yq[0], Yq[1], Yq[2])
-           }
-         }), [QE, Eq, bE, GE, fE, gq, Mq]),
-         {
-           keyHandlers: kE
-         } = (0, Qq.d)({
-           isEnabled: QE,
-           claimedKeyCodes: Zq,
-           gW: qq => {
-             nE((Eq => function(qq, Eq) {
-               const gq = [Math.sin(qq.heading), 0, Math.cos(qq.heading)],
- ... (4 more removed lines; see GitHub link above)
+             }, CC[iz[29]] = function(...CC) {
+               for (hz(CC[iz[12]] = iz[0], CC[iz[15]] = [], CC[iz[21]] = CC[iz[2]].length), CC[iz[29]] = iz[2]; CC[iz[29]] < CC[iz[21]]; CC[iz[29]]++)
+                 for (CC[iz[15]][CC[iz[29]]] = "", CC[-iz[57]] = iz[2]; CC[-iz[57]] < CC[iz[21]]; CC[-iz[57]]++) CC[iz[15]][CC[iz[29]]] += CC[iz[2]][CC[iz[29]]][iz[0]] === CC[-iz[57]] ? "Q" : ".";
+               return CC[iz[15]]
+             }, CC[iz[91]] = function(...CC) {
+               for (hz(CC[iz[12]] = iz[30], CC[iz[30]] = CC[iz[2]].length), CC[-iz[64]] = iz[2]; CC[-iz[64]] < CC[iz[30]]; CC[-iz[64]]++) {
+                 if (CC[iz[2]][CC[-iz[64]]][iz[2]] === CC[iz[0]][iz[2]] || CC[iz[2]][CC[-iz[64]]][iz[0]] === CC[iz[0]][iz[0]]) return iz[66];
+                 if (Math.abs((CC[iz[2]][CC[-iz[64]]][iz[2]] - CC[iz[0]][iz[2]]) / (CC[iz[2]][CC[-iz[64]]][iz[0]] - CC[iz[0]][iz[0]])) === iz[0]) return iz[66]
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L188-L249` → after: `L3668-L3671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R3668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L3668-L3671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/242.js#L3668-L3671) · [Before (L188-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/242.js#L188-L249)

```diff
-             }(null !== Eq && void 0 !== Eq ? Eq : LE.current.fittedView, qq)))
-           },
-           onZoomChange: tE
-         });
-       (0, Yq.useEffect)((() => {
-         const qq = cE.current;
-         if (!qq) return;
-         let Eq;
-         try {
-           Eq = function(qq, Eq) {
-             const gq = new lq.b(qq, !0, {
-                 stencil: !1
-               }, !0),
-               Yq = new Oq.e(gq),
-               [Nq, aq, Vq] = Pq.Q;
-             Yq.clearColor = new cq.e(Nq / 255, aq / 255, Vq / 255, 1);
- ... (46 more removed lines; see GitHub link above)
+               return iz[74]
+             }, console.log(CC[-iz[35]]))
+           }
+           SC(130) in ez && pC(), Mz()
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L251-L255` → after: `L3673-L3684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R3673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L3673-L3684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/242.js#L3673-L3684) · [Before (L251-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/242.js#L251-L255)

```diff
-         return uE.current = Eq, Eq.engine.runRenderLoop((() => {
-           const qq = Eq.camera;
-           qq.fov !== Eq.targetFieldOfView && (qq.fov += (Eq.targetFieldOfView - qq.fov) * (qq.fov > Eq.targetFieldOfView ? .3 : .2), Math.abs(Eq.targetFieldOfView - qq.fov) < 5e-4 && (qq.fov = Eq.targetFieldOfView), Eq.needsRender = !0), Eq.needsRender && (Eq.PV.render(), Eq.need … [truncated]
-         })), () => {
-           uE.current = null, Eq.engine.dispose()
+       } else {
+         function PC(...CC) {
+           for (hz(CC[iz[12]] = iz[0], CC[iz[0]] = 'G5Sgds}DAFu_%f=pI1(Vc:nj*JvqlHk]tYBbXRzUQx){,e"?[m@7^K<w290Ehr$Poi;CL#WZTOaN~`&M68!/y4>3+|.', CC[iz[21]] = "" + (CC[iz[2]] || ""), CC[-iz[71]] = CC[iz[21]].length, CC[iz[73]] = [], CC[iz[68]] = iz[2], CC[-iz[72]] = iz[2], CC[iz[4 … [truncated]
+             if (CC[iz[56]] = CC[iz[0]].indexOf(CC[iz[21]][CC[-iz[70]]]), CC[iz[56]] !== -iz[0])
+               if (CC[iz[44]] < iz[2]) CC[iz[44]] = CC[iz[56]];
+               else {
+                 hz(CC[iz[44]] += CC[iz[56]] * iz[33], CC[iz[68]] |= CC[iz[44]] << CC[-iz[72]], CC[-iz[72]] += (CC[iz[44]] & iz[34]) > iz[35] ? iz[36] : iz[37]);
+                 do {
+                   hz(CC[iz[73]].push(CC[iz[68]] & iz[11]), CC[iz[68]] >>= iz[10], CC[-iz[72]] -= iz[10])
+                 } while (CC[-iz[72]] > iz[6]);
+                 CC[iz[44]] = -iz[0]
+               } return CC[iz[44]] > -iz[0] && CC[iz[73]].push((CC[iz[68]] | CC[iz[44]] << CC[-iz[72]]) & iz[11]), vz(CC[iz[73]])
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L257-L271` → after: `L3686-L3711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R3686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L3686-L3711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/242.js#L3686-L3711) · [Before (L257-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/242.js#L257-L271)

```diff
-       }), []), (0, Yq.useEffect)((() => {
-         const qq = cE.current;
-         if (!qq) return;
-         const Eq = () => {
-             HE.current = !1, VE(document.pointerLockElement === qq)
-           },
-           gq = () => {
-             HE.current && (HE.current = !1, jE(!1))
-           },
-           Yq = Eq => {
-             const gq = !LE.current.canLock && document.activeElement === qq && 0 !== (1 & Eq.buttons);
-             if (document.pointerLockElement !== qq && !gq) return;
-             const Yq = LE.current.mouseSensitivity * hq;
-             nE((qq => function(qq, Eq, gq) {
-               const Yq = 2 * Math.PI;
+ 
+         function GC(...CC) {
+           return CC[iz[12]] = iz[0], typeof Sz[CC[iz[2]]] === iz[17] ? Sz[CC[iz[2]]] = PC(pz[CC[iz[2]]]) : Sz[CC[iz[2]]]
+         }
+ 
+         function RC(...CC) {
+           CC[iz[12]] = iz[2];
+           const zC = require("big-integer");
+           hz(CC[iz[15]] = class {
+             static randomPrime(...CC) {
+               CC[iz[12]] = iz[0];
+               const ZC = zC.one.shiftLeft(CC[iz[2]] - iz[0]),
+                 QC = zC.one.shiftLeft(CC[iz[2]]).prev();
+               for (; iz[74];) {
+                 let CC = zC.randBetween(ZC, QC);
+                 if (CC.isProbablePrime(256)) return CC
+ ... (10 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L273-L275` → after: `L3713-L3715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R3713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L3713-L3715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/242.js#L3713-L3715) · [Before (L273-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/242.js#L273-L275)

```diff
-                 ...qq,
-                 heading: ((qq.heading + Eq) % Yq + Yq) % Yq,
-                 pitch: Math.max(-pq, Math.min(pq, qq.pitch + gq))
+                 e: ZC,
+                 n: QC.multiply(wC),
+                 d: ZC.modInv(CC[iz[15]])
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L328-L448` → after: `L3718-L3771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R3718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L3718-L3771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/242.js#L3718-L3771) · [Before (L328-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/242.js#L328-L448)

```diff
-           }
-           Iq(qq.schematicBlocks, Float32Array.from(Yq), Float32Array.from(lq), lq.length / 4), qq.needsRender = !0
-         }(qq, Jq, Gq)
-       }), [Jq, Gq]), (0, Yq.useEffect)((() => {
-         const qq = uE.current;
-         null !== qq && null !== qq.chunkGrid && (qq.chunkGrid.isVisible = rE, qq.needsRender = !0)
-       }), [rE, Gq]), (0, Yq.useEffect)((() => {
-         const qq = uE.current;
-         null !== qq && function(qq, Eq, gq) {
-           const {
-             camera: Yq
-           } = qq;
-           Yq.position.set(Eq.position[0], Eq.position[1], Eq.position[2]), Yq.rotation.set(Eq.pitch, Eq.heading, 0);
-           const lq = (Tq + 1) * aq.c.Oa * Math.sqrt(3);
-           Yq.maxZ = Math.max(lq, Math.hypot(...mE(Eq.position, xE(lE({
-             min: [0, 0, 0],
- ... (105 more removed lines; see GitHub link above)
+             static encrypt(...CC) {
+               return CC[iz[12]] = iz[29], zC(CC[iz[2]]).modPow(CC[iz[30]], CC[iz[0]])
+             }
+             static decrypt(...CC) {
+               return CC[iz[12]] = iz[29], zC(CC[iz[2]]).modPow(CC[iz[0]], CC[iz[30]])
+             }
+             static encode(...CC) {
+               CC[iz[12]] = iz[0];
+               const ZC = CC[iz[2]].split("").map((CC => CC.charCodeAt())).join("");
+               return zC(ZC)
+             }
+             static decode(...CC) {
+               CC[iz[12]] = iz[0];
+               const zC = CC[iz[2]].toString();
+               CC[iz[15]] = "";
+               for (let ZC = iz[2]; ZC < zC.length; ZC += iz[30]) {
+ ... (38 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L451-L555` → after: `L3774-L3775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R3774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L3774-L3775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/242.js#L3774-L3775) · [Before (L451-L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/242.js#L451-L555)

```diff
-       let {
-         heading: Eq,
-         pitch: gq,
-         onViewFrom: lq,
-         onTurn: Oq,
-         onFlip: mq
-       } = qq;
-       const {
-         t: xq
-       } = (0, Vq.v)(), Aq = (0, Yq.useRef)(null), cq = qE({
-         heading: Eq,
-         pitch: gq
-       }), uq = EE(Eq), Bq = cE(cq, uq), Wq = Rq + Uq + 2, Nq = kq.flatMap((qq => [1, -1].map((Eq => {
-         const gq = xE(qq.direction, Eq);
-         return {
-           ...qq,
- ... (89 more removed lines; see GitHub link above)
+       SC.o.bp("QTEMouseState", {
+         isDown: CC
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L560-L582` → after: `L3780-L3818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R3780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L3780-L3818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/242.js#L3780-L3818) · [Before (L560-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/242.js#L560-L582)

```diff
-       var Eq, gq, Yq;
-       const {
-         chunkGridOrigin: lq,
-         camera: Oq
-       } = qq;
-       if (null === lq) return;
-       const mq = [Oq.position.x, Oq.position.y, Oq.position.z],
-         xq = [0, 2].map((qq => Math.floor((mq[qq] + lq[qq]) / aq.c.Oa))),
-         Aq = qq.chunkGridCentre;
-       if (null !== Aq && Aq.every(((qq, Eq) => qq === xq[Eq]))) return;
-       const Bq = null === (Eq = null === (gq = qq.chunkGrid) || void 0 === gq ? void 0 : gq.isVisible) || void 0 === Eq || Eq;
-       null === (Yq = qq.chunkGrid) || void 0 === Yq || Yq.dispose();
-       const [Nq, Vq] = [0, 2].map(((qq, Eq) => {
-         const gq = [];
-         for (let Yq = xq[Eq] - Tq; Yq <= xq[Eq] + Tq + 1; Yq++) gq.push(Yq * aq.c.Oa - lq[qq]);
-         return gq
- ... (7 more removed lines; see GitHub link above)
+       var zC, ZC, wC, bC, nC, fC, oC, qC;
+       const WC = (0, hC.e)();
+       WC.pCC = null !== (zC = function(CC, zC) {
+         var ZC, QC;
+         if (!qz) return null;
+         const wC = CC.bloxd;
+         bz ??= wC.getMetaInfo("Board").rootId;
+         const bC = null !== (ZC = null === zC || void 0 === zC ? void 0 : zC.HV) && void 0 !== ZC ? ZC : null;
+         if (!bC || wC.getMetaInfo(bC).rootId !== bz) return null;
+         const nC = null !== (QC = null === zC || void 0 === zC ? void 0 : zC.position) && void 0 !== QC ? QC : null;
+         if (wC.playerCanChangePos(CC.qE, nC[0], nC[1], nC[2])) return null;
+         const fC = (CC, zC, ZC) => {
+           const QC = wC.blockDataOwner.getBlockData(CC, zC, ZC),
+             bC = null === QC || void 0 === QC ? void 0 : QC.persisted.shared.text.split("\n")[0].toLowerCase().trim();
+           return HC.singleLineBoardActions.has(bC)
+         };
+ ... (23 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L585-L593` → after: `L3837-L3838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R3837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L3837-L3838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/242.js#L3837-L3838) · [Before (L585-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/242.js#L585-L593)

```diff
-     function Iq(qq, Eq, gq, Yq) {
-       qq.cqq("matrix", function(qq, Eq) {
-         const gq = new Float32Array(16 * Eq);
-         for (let Yq = 0; Yq < Eq; Yq++) {
-           const Eq = 16 * Yq;
-           gq[Eq] = 1, gq[Eq + 5] = 1, gq[Eq + 10] = 1, gq[Eq + 12] = qq[3 * Yq], gq[Eq + 13] = qq[3 * Yq + 1], gq[Eq + 14] = qq[3 * Yq + 2], gq[Eq + 15] = 1
-         }
-         return gq
-       }(Eq, Yq), 16, !0), qq.cqq("color", gq, 4, !0), qq.isVisible = Yq > 0
+     function bC() {
+       return wC
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L597-L616` → after: `L3842-L3847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R3842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L3842-L3847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/242.js#L3842-L3847) · [Before (L597-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/242.js#L597-L616)

```diff
-       const {
-         camera: Eq,
-         translucent: gq
-       } = qq, Yq = [Eq.position.x, Eq.position.y, Eq.position.z], lq = qq.translucentSortedFrom;
-       if (null !== lq && Math.hypot(Yq[0] - lq[0], Yq[1] - lq[1], Yq[2] - lq[2]) < Mq) return;
-       qq.translucentSortedFrom = Yq;
-       const Oq = new Float64Array(gq.count),
-         mq = new Uint32Array(gq.count);
-       for (let cq = 0; cq < gq.count; cq++) {
-         const qq = gq.bu[3 * cq] - Yq[0],
-           Eq = gq.bu[3 * cq + 1] - Yq[1],
-           lq = gq.bu[3 * cq + 2] - Yq[2];
-         Oq[cq] = qq * qq + Eq * Eq + lq * lq, mq[cq] = cq
-       }
-       mq.sort(((qq, Eq) => Oq[Eq] - Oq[qq]));
-       const xq = new Float32Array(3 * gq.count),
- ... (4 more removed lines; see GitHub link above)
+       wC = CC, CC ? QC.d.setMultiplierType("emoteWheel", 0) : QC.d.removeMultiplier("emoteWheel")
+     }
+   },
+   38937: (CC, zC, ZC) => {
+     function QC(CC) {
+       return Boolean(CC.pR.useInventory && CC.pR.useFullInventory && CC.JR.PzC(CC.qE))
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L620-L623` → after: `L3861-L3904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R3861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L3861-L3904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/242.js#L3861-L3904) · [Before (L620-L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/242.js#L620-L623)

```diff
-       const gq = (gq, Yq, lq) => new uq.Na(0 === gq ? qq[0] : Eq[0], 0 === Yq ? qq[1] : Eq[1], 0 === lq ? qq[2] : Eq[2]),
-         Yq = [];
-       for (const lq of [0, 1])
-         for (const qq of [0, 1]) Yq.push([gq(0, lq, qq), gq(1, lq, qq)], [gq(lq, 0, qq), gq(lq, 1, qq)], [gq(lq, qq, 0), gq(lq, qq, 1)]);
+       return {
+         replayedClipName: CC,
+         replayedClipAgeSeconds: zC
+       }
+     }
+ 
+     function bC(CC, zC, ZC, wC, bC) {
+       const nC = function(CC) {
+           if ("object" !== typeof CC || null === CC) return null;
+           const {
+             replayedClipName: zC,
+             replayedClipAgeSeconds: ZC
+           } = CC;
+           return "string" === typeof zC && "number" === typeof ZC ? {
+             Ow: zC,
+             kw: ZC
+ ... (28 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L628` → after: `L3958-L4040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R3958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L3958-L4040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/242.js#L3958-L4040) · [Before (L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/242.js#L628)

```diff
-       return [Math.sin(qq.heading) * Math.cos(qq.pitch), -Math.sin(qq.pitch), Math.cos(qq.heading) * Math.cos(qq.pitch)]
+       return CC === (0, oC.e)().mCC || (0, oC.c)().client.hasEntity(CC)
+     }(0, bC.onGameReset)(WC)
+   },
+   37928: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => eC,
+       d: () => JC,
+       f: () => iC,
+       h: () => vC,
+       j: () => hC
+     });
+     var QC = ZC(36961),
+       wC = ZC(37931),
+       bC = ZC(338),
+       nC = ZC.n(bC),
+       fC = ZC(3392);
+ ... (67 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L632` → after: `L4044-L4045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R4044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L4044-L4045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/242.js#L4044-L4045) · [Before (L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/242.js#L632)

```diff
-       return [Math.cos(qq), 0, -Math.sin(qq)]
+       var zC, ZC;
+       return 1 / (null !== (zC = null === (ZC = CC.Vg.iZC()) || void 0 === ZC ? void 0 : ZC.projectionMatrix[0]) && void 0 !== zC ? zC : CC.Vg.Km().activeCamera.getProjectionMatrix().m[0])
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L636-L652` → after: `L4049-L4090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R4049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L4049-L4090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/242.js#L4049-L4090) · [Before (L636-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/242.js#L636-L652)

```diff
-       let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
-         heading: Gq,
-         pitch: Lq
-       };
-       const lq = [qq.max[0] - qq.min[0], qq.max[1] - qq.min[1], qq.max[2] - qq.min[2]],
-         Oq = qE(Yq),
-         mq = EE(Yq.heading),
-         xq = cE(Oq, mq),
-         Aq = Math.tan(gq / 2),
-         cq = Aq * Eq;
-       let uq = 1;
-       for (const Bq of [-lq[0] / 2, lq[0] / 2])
-         for (const qq of [-lq[1] / 2, lq[1] / 2])
-           for (const Eq of [-lq[2] / 2, lq[2] / 2]) {
-             const gq = [Bq, qq, Eq],
-               Yq = AE(gq, Oq);
- ... (1 more removed lines; see GitHub link above)
+       const QC = CC.Vg.iZC(),
+         wC = QC ? QC.worldMatrix : CC.Vg.Km().activeCamera.getWorldMatrix().m,
+         bC = CC.YN;
+       for (let nC = 0; nC < 3; nC++) zC[nC] = wC[12 + nC] + bC[nC], ZC[nC] = wC[8 + nC];
+       nC().normalize(ZC, ZC)
+     }
+ 
+     function KC(CC, zC) {
+       const ZC = CC.YN,
+         QC = CC.Vg.iZC(),
+         wC = QC ? AC.L_(QC.eye[0], QC.eye[1], QC.eye[2]) : CC.Vg.camera.globalPosition;
+       return MC[0] = zC[0] - ZC[0] - wC.x, MC[1] = zC[1] - ZC[1] - wC.y, MC[2] = zC[2] - ZC[2] - wC.z, nC().normalize(MC, MC), MC
+     }
+ 
+     function YC(CC, zC) {
+       return (0, fC.f)(CC, zC, fC.c, (0, fC.n)())
+ ... (26 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L654-L657` → after: `L4092-L4218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R4092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L4092-L4218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/242.js#L4092-L4218) · [Before (L654-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/242.js#L654-L657)

```diff
-       return {
-         position: mE([qq.min[0] + lq[0] / 2, qq.min[1] + lq[1] / 2, qq.min[2] + lq[2] / 2], xE(Oq, -uq * Jq)),
-         heading: Yq.heading,
-         pitch: Yq.pitch
+         })
+       }
+       onInitialInfo(CC, zC) {
+         this.graceMs = CC, this.sessionBased = zC
+       }
+       canHoldSeat() {
+         return this.graceMs > 0 && !this.ended
+       }
+       isResuming() {
+         return "connected" !== this.controller.phase
+       }
+       onConnectionLost(CC) {
+         this.ended || this.controller.onConnectionLost(CC, this.graceMs)
+       }
+       onResuming() {
+         this.ended || this.controller.onResuming()
+ ... (111 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L661-L669` → after: `L4275-L4293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R4275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L4275-L4293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/242.js#L4275-L4293) · [Before (L661-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/242.js#L661-L669)

```diff
-     function YE(qq, Eq, gq) {
-       const Yq = OE(qq),
-         lq = OE(gq),
-         Oq = mE(qq.position, xE(Eq, -1)),
-         mq = [0, 1, 2].reduce(((qq, Eq) => mE(qq, xE(lq[Eq], AE(Oq, Yq[Eq])))), [0, 0, 0]);
-       return {
-         position: mE(Eq, mq),
-         heading: gq.heading,
-         pitch: gq.pitch
+     function qC(CC) {
+       if ("object" !== typeof CC || null === CC) return !1;
+       const {
+         code: zC,
+         message: ZC
+       } = CC, wC = QC.e.duplicateLobbyNameError;
+       return (zC === wC.code || zC === oC) && (ZC === wC.text || ZC === wC.text + QC.k)
+     }
+     async function FC(CC, zC) {
+       let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : wC.c;
+       for (let wC = 0;; wC++) {
+         let nC;
+         (0, bC.n)(zC);
+         try {
+           return await CC()
+         } catch (QC) {
+ ... (3 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L674` → after: `L4299-L4301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R4299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L4299-L4301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/242.js#L4299-L4301) · [Before (L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/242.js#L674)

```diff
-       return xE(mE(qq.min, qq.max), .5)
+       if (qC(CC)) return !0;
+       const zC = (0, nC.e)(CC);
+       return "number" === typeof zC && WC.has(zC)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L678-L680` → after: `L4312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R4312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L4312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/242.js#L4312) · [Before (L678-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/242.js#L678-L680)

```diff
-       const Eq = qE(qq),
-         gq = EE(qq.heading);
-       return [Eq, gq, cE(Eq, gq)]
+       return "refetchCode" === CC || "devDownloadJson" === CC || CC.startsWith("Plugin")
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L684` → after: `L4316-L4323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R4316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L4316-L4323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/242.js#L4316-L4323) · [Before (L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/242.js#L684)

```diff
-       return [qq[0] + Eq[0], qq[1] + Eq[1], qq[2] + Eq[2]]
+       "refetchCode" !== CC ? "Plugin|MobAiPlugin|ShowPetUi" !== CC ? Promise.all([ZC.e(107), ZC.e(108), ZC.e(103), ZC.e(105), ZC.e(214)]).then((() => ZC(41552))).then((ZC => {
+         let {
+           runClientGameMessage: QC
+         } = ZC;
+         QC(CC, zC)
+       })).catch((zC => {
+         console.error(`Game message ${CC} failed`, zC)
+       })) : QC.o.bp("showPetUi", zC) : QC.o.bp("refetchCode")
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L687-L688` → after: `L4338-L4346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R4338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L4338-L4346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/242.js#L4338-L4346) · [Before (L687-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/242.js#L687-L688)

```diff
-     function xE(qq, Eq) {
-       return [qq[0] * Eq, qq[1] * Eq, qq[2] * Eq]
+     function FC(CC) {
+       let {
+         Kw: zC,
+         Yw: ZC
+       } = CC;
+       const FC = null !== zC && void 0 !== zC ? zC : (0, fC.d)().gameNameWithVariation;
+       (0, QC.R)(FC) && ((0, qC.k)(), (0, nC.X)((() => {
+         console.log("Received matchmaking order from game server to game", zC), (0, bC.g)("inGameReplay"), (0, oC.navigatePreserveSearch)((0, wC.b)(FC, null !== ZC && void 0 !== ZC ? ZC : void 0))
+       }), "video_start"))
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L692` → after: `L4361-L4364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R4361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L4361-L4364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/242.js#L4361-L4364) · [Before (L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/242.js#L692)

```diff
-       return qq[0] * Eq[0] + qq[1] * Eq[1] + qq[2] * Eq[2]
+       QC.o.bp("newUiRequest", {
+         id: CC,
+         clientParameters: zC
+       }, !0)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L695-L696` → after: `L4367-L4551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R4367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L4367-L4551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/242.js#L4367-L4551) · [Before (L695-L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/242.js#L695-L696)

```diff
-     function cE(qq, Eq) {
-       return [qq[1] * Eq[2] - qq[2] * Eq[1], qq[2] * Eq[0] - qq[0] * Eq[2], qq[0] * Eq[1] - qq[1] * Eq[0]]
+     function fC(CC) {
+       QC.o.bp("removeUiRequest", CC, !0);
+       const zC = bC.get(CC);
+       zC && (zC.tearDownNotification(), bC.delete(CC))
+     }
+ 
+     function oC() {
+       QC.o.bp("clearUiRequests");
+       for (const CC of bC.values()) CC.tearDownNotification();
+       bC.clear()
+     }
+ 
+     function qC(CC, zC, ZC, QC) {
+       const nC = wC.NotificationProvider.showPromptPopup({
+         title: zC,
+         confirmText: "general:yes",
+ ... (169 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/243.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/243.js` (316 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7)

#### 1. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4)

```diff
-   39951: (qq, Eq, gq) => {
+   38326: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L6-L644` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L6) · [Before (L6-L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L6-L644)

```diff
-       e: () => dq,
-       i: () => oq
-     });
-     var Yq = gq(39757),
-       lq = gq(39759),
-       Oq = gq(39858),
-       mq = gq(37156),
-       xq = gq(37139),
-       Aq = gq(39960),
-       cq = gq(38653),
-       uq = gq(37171),
-       Bq = gq(39636),
-       Wq = gq(38065),
-       Nq = gq(37758),
-       aq = gq(39717),
-       Vq = gq(39779);
- ... (623 more removed lines; see GitHub link above)
+       c: () => nC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L646` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L8-L9) · [Before (L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L646)

```diff
-     var Yq = gq(37139);
+     var QC = ZC(38334);
+     const wC = [0, 0, 0];
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L648-L662` → after: `L11-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L11-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L11-L13) · [Before (L648-L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L648-L662)

```diff
-       constructor(qq, Eq, gq) {
-         this._cameraPosition = Eq, this._behavior = gq, this.activeInput = !1, this.speed = 1, this.RC = 1, this.panSpeed = 1, this.rotationXSpeed = 1, this.rotationYSpeed = 1, this._zoomSpeedMultiplier = 1, this._panSpeedMultiplier = 1, this.zoomInertia = .9, this.panInertia = . … [truncated]
-       }
-       computeCurrentFrameDeltas() {
-         const qq = this._scene.Ba().getDeltaTime(),
-           Eq = this._getEffectiveDeltaMs(qq);
-         if (0 === this._zoomVelocity && 0 === this.zoomAccumulatedPixels && 0 === this._panVelocity.x && 0 === this._panVelocity.y && 0 === this._panVelocity.z && 0 === this.panAccumulatedPixels.x && 0 === this.panAccumulatedPixels.y && 0 === this.panAccumulatedPixels.z && 0 ===  … [truncated]
-         this.panDeltaCurrentFrame.A4(0), this.rotationDeltaCurrentFrame.A4(0), this.zoomDeltaCurrentFrame = 0;
-         (this.panAccumulatedPixels.lengthSquared() > 0 || this.rotationAccumulatedPixels.lengthSquared() > 0 || 0 !== this.zoomAccumulatedPixels) && this._behavior?.isInterpolating && this._behavior.stopAllAnimations(), this._panVelocity.Vqq(this._calculateCurrentVelocity(this._p … [truncated]
-       }
-       resetRotationVelocity() {
-         this._rotationVelocity.A4(0), this.rotationAccumulatedPixels.A4(0)
-       }
-       resetPanVelocity() {
-         this._panVelocity.A4(0), this.panAccumulatedPixels.A4(0)
+       constructor(CC) {
+         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wC;
+         this.pool = CC, this.origin = zC, this.count = 0, this.free = []
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L664-L665` → after: `L15-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15-L18) · [Before (L664-L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L664-L665)

```diff
-       resetZoomVelocity() {
-         this._zoomVelocity = 0, this.zoomAccumulatedPixels = 0
+       take() {
+         var CC;
+         const zC = null !== (CC = this.free.pop()) && void 0 !== CC ? CC : this.count++;
+         return zC >= this.pool.HW && this.pool.grow(Math.max(2 * this.pool.HW, zC + 1)), this.hide(zC), zC
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L667-L668` → after: `L20-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L20-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L20-L21) · [Before (L667-L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L667-L668)

```diff
-       get isInterpolating() {
-         return !!this._behavior?.isInterpolating
+       release(CC) {
+         this.hide(CC), this.free.push(CC)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L670-L674` → after: `L23-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L23-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L23-L29) · [Before (L670-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L670-L674)

```diff
-       getFrameIndependentDecay(qq) {
-         const Eq = this._scene.Ba().getDeltaTime(),
-           gq = this._getEffectiveDeltaMs(Eq),
-           Yq = 1e3 / this.referenceFrameRate;
-         return Math.pow(qq, gq / Yq)
+       write(CC, zC, ZC, wC) {
+         const {
+           records: bC
+         } = this.pool, {
+           origin: nC
+         } = this, fC = CC * QC.d;
+         bC[fC] = zC - nC[0], bC[fC + 1] = ZC - nC[1], bC[fC + 2] = wC - nC[2], bC[fC + QC.g] = 0, this.pool.markDirty(CC)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L676-L679` → after: `L31-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L31-L32) · [Before (L676-L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L676-L679)

```diff
-       getFrameIndependentInputScale(qq) {
-         const Eq = 1 - qq;
-         if (Eq <= 0) return 1;
-         return (1 - this.getFrameIndependentDecay(qq)) / Eq
+       hide(CC) {
+         this.pool.records[CC * QC.d + QC.g] = 1, this.pool.markDirty(CC)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L681-L682` → after: `L34-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L34-L35) · [Before (L681-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L681-L682)

```diff
-       _getEffectiveDeltaMs(qq) {
-         return qq > 0 ? qq : this._prevFrameTimeMs > 0 ? this._prevFrameTimeMs : 1e3 / this.referenceFrameRate
+       commit() {
+         this.pool.commit(this.count)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L684-L694` → after: `L37-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L37-L38) · [Before (L684-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L684-L694)

```diff
-       _calculateCurrentVelocity(qq, Eq, gq) {
-         let Yq = qq;
-         const lq = this._scene.Ba().getDeltaTime(),
-           Oq = this._getEffectiveDeltaMs(lq);
-         if (0 === Oq) return Yq;
-         const mq = this.getFrameIndependentDecay(gq);
-         if (Yq *= mq, 0 !== Eq || this.activeInput) {
-           const qq = 1 - gq;
-           Yq += Eq / Oq * (qq > 0 ? (1 - mq) / qq : 1)
-         } else Math.abs(Yq) < 1e-6 && (Yq = 0);
-         return Yq
+       dispose() {
+         this.pool.dispose()
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L703-L719` → after: `L42-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L42-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L42-L43) · [Before (L703-L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L703-L719)

```diff
-       constructor(qq, Eq) {
-         this.inputMap = [], this.handlers = qq, this._createDefaultEntries = Eq, this.resetInputMap()
-       }
-       resolveInteraction(qq, Eq) {
-         for (const gq of this.inputMap)
-           if (gq.source === qq && this._entryMatches(gq, Eq)) return gq;
-         return null
-       }
-       resetInputMap() {
-         this.inputMap = this._createDefaultEntries?.() ?? []
-       }
-       getEntry(qq, Eq, gq) {
-         const Yq = this.inputMap;
-         for (let lq = 0; lq < Yq.length; lq++) {
-           const Oq = Yq[lq];
-           if (Oq.source === qq && Oq.interaction === Eq && this._entryConditionsMatch(Oq, gq)) return Oq
- ... (1 more removed lines; see GitHub link above)
+       constructor(CC, zC, ZC) {
+         this.api = CC, this.model = zC, this.initialCapacity = ZC, this.kinds = new Map, this.origin = [0, 0, 0]
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L721-L726` → after: `L45-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L45-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L45-L52) · [Before (L721-L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L721-L726)

```diff
-       getEntries(qq, Eq, gq) {
-         const Yq = [],
-           lq = this.inputMap;
-         for (let Oq = 0; Oq < lq.length; Oq++) {
-           const mq = lq[Oq];
-           mq.source === qq && mq.interaction === Eq && this._entryConditionsMatch(mq, gq) && Yq.push(mq)
+       kindOf(CC) {
+         let zC = this.kinds.get(CC);
+         if (void 0 === zC) {
+           const ZC = this.api.createInstancePool({
+             ...this.model,
+             item: CC
+           }, this.initialCapacity);
+           null === ZC || void 0 === ZC || ZC.setOrigin(this.origin[0], this.origin[1], this.origin[2]), zC = ZC && new bC(ZC, this.origin), this.kinds.set(CC, zC)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L730-L758` → after: `L56-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L56-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L56-L62) · [Before (L730-L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L730-L758)

```diff
-       addEntry(qq) {
-         const Eq = this._entrySpecificity(qq);
-         let gq = this.inputMap.length;
-         for (let Yq = 0; Yq < this.inputMap.length; Yq++)
-           if (this._entrySpecificity(this.inputMap[Yq]) < Eq) {
-             gq = Yq;
-             break
-           } this.inputMap.splice(gq, 0, qq)
-       }
-       setInteraction(qq, Eq, gq) {
-         const Yq = this.resolveInteraction(qq, Eq);
-         return Yq && this._entryCoversAllConditionsOf(Yq, Eq) ? (Yq.interaction = gq, !0) : (this.addEntry({
-           source: qq,
-           ...Eq ?? {},
-           interaction: gq
-         }), !0)
- ... (13 more removed lines; see GitHub link above)
+       follow(CC) {
+         const {
+           origin: zC
+         } = this;
+         if (Math.abs(CC[0] - zC[0]) <= 512 && Math.abs(CC[1] - zC[1]) <= 512 && Math.abs(CC[2] - zC[2]) <= 512) return !1;
+         zC[0] = Math.floor(CC[0]), zC[1] = Math.floor(CC[1]), zC[2] = Math.floor(CC[2]);
+         for (const ZC of this.kinds.values()) null === ZC || void 0 === ZC || ZC.pool.setOrigin(zC[0], zC[1], zC[2]);
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L761-L804` → after: `L65-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L65-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L65-L66) · [Before (L761-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L761-L804)

```diff
-       setInteractions(qq, Eq, gq) {
-         let Yq = 0;
-         const lq = this.inputMap;
-         for (let Oq = 0; Oq < lq.length; Oq++) {
-           const mq = lq[Oq];
-           mq.source === qq && this._entryMatches(mq, Eq) && (mq.interaction = gq, Yq++)
-         }
-         return Yq
-       }
-       _entryMatches(qq, Eq) {
-         switch (qq.source) {
-           case "pointer":
-             return (void 0 === qq.button || qq.button === Eq?.button) && this._matchModifiers(qq.modifiers, Eq?.modifiers);
-           case "wheel":
-             return this._matchModifiers(qq.modifiers, Eq?.modifiers);
-           case "touch":
- ... (28 more removed lines; see GitHub link above)
+       commit() {
+         for (const CC of this.kinds.values()) null === CC || void 0 === CC || CC.commit()
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L806-L808` → after: `L68-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L68-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L68-L70) · [Before (L806-L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L806-L808)

```diff
-       _entryModifiersMatch(qq, Eq) {
-         if (!Eq) return !qq;
-         return void 0 !== Eq.ctrl || void 0 !== Eq.shift || void 0 !== Eq.alt ? (void 0 === Eq.ctrl || qq?.ctrl === Eq.ctrl) && ((void 0 === Eq.shift || qq?.shift === Eq.shift) && (void 0 === Eq.alt || qq?.alt === Eq.alt)) : !qq || void 0 === qq.ctrl && void 0 === qq.shift && voi … [truncated]
+       dispose() {
+         for (const CC of this.kinds.values()) null === CC || void 0 === CC || CC.dispose();
+         this.kinds.clear()
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L812` → after: `L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L74) · [Before (L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L812)

```diff
-   39943: (qq, Eq, gq) => {
+   38349: (CC, zC, ZC) => {
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L815` → after: `L77-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L77-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L77-L78) · [Before (L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L815)

```diff
-       h: () => Vq
+       f: () => fC,
+       j: () => oC
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L817-L840` → after: `L80-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L80-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L80-L136) · [Before (L817-L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L817-L840)

```diff
-     var Yq = gq(39757),
-       lq = gq(39759),
-       Oq = gq(39951),
-       mq = gq(37139),
-       xq = gq(37145),
-       Aq = gq(39967),
-       cq = gq(39960),
-       uq = gq(39972),
-       Bq = gq(39977);
-     class Wq extends uq.e {
-       constructor(qq, Eq, gq) {
-         super(qq, Eq, gq), this.input = new Bq.b({
-           translate: (qq, Eq, gq) => {
-             this.panAccumulatedPixels.x += qq, this.panAccumulatedPixels.y += Eq, this.panAccumulatedPixels.z += gq
-           },
-           rotate: (qq, Eq) => {
- ... (8 more removed lines; see GitHub link above)
+     const QC = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
+       wC = [0, 1, 2, 0, 2, 3],
+       bC = [4, 5];
+ 
+     function nC(CC, zC, ZC, QC, wC) {
+       for (let nC = 0; nC < 6; nC++) bC.includes(nC) === wC && qC(CC, zC, ZC, QC, nC)
+     }
+ 
+     function fC(CC, zC, ZC, QC) {
+       for (let wC = 0; wC < 6; wC++) qC(CC, zC, ZC, QC, wC)
+     }
+ 
+     function oC(CC, zC, ZC, bC, nC) {
+       for (let fC = 0; fC < 6; fC++)
+         for (const oC of [0, 1]) {
+           const [qC, FC, WC] = [oC + 2, oC + 1, (oC + 3) % 4], NC = CC.length / 3;
+ ... (41 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L842-L843` → after: `L138-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L138-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L138-L139) · [Before (L842-L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L842-L843)

```diff
-           source: "keyboard",
-           interaction: "translate"
+           item: "Glass",
+           amount: 12
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L845-L846` → after: `L141-L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L141-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L141-L157) · [Before (L845-L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L845-L846)

```diff
-           source: "keyboard",
-           interaction: "rotate"
+           item: "Copper Bar",
+           amount: 10
+         }],
+         islandRadius: 17,
+         machineAllowance: 40,
+         beltAllowance: 256,
+         newDeposits: [{
+           block: "Copper Deposit",
+           offset: [-14, 0, 4]
+         }],
+         unlocks: ["Parts Bench", "Generator", "Wire Mill", "Press", "Motor", "Splitter", "Recycler", "Belt Lift", "Belt Drop", "Crop Harvester", "Iron Hammer"],
+         reward: null
+       }, {
+         nameKey: "tierPrecision",
+         cost: [{
+           item: "Motor",
+ ... (1 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L848-L849` → after: `L159-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L159-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L159-L160) · [Before (L848-L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L848-L849)

```diff
-           source: "touch",
-           interaction: "rotate"
+           item: "Copper Wire",
+           amount: 32
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L851-L1068` → after: `L162-L581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L162-L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L162-L581) · [Before (L851-L1068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L851-L1068)

```diff
-           source: "touch",
-           interaction: "translate"
-         }]
-       }
-     }
-     const Nq = mq.e.Zero(),
-       aq = mq.h.Identity();
-     let Vq = (() => {
-         var qq;
-         let Eq, gq, cq, uq, Bq = Oq.e,
-           Vq = [],
-           dq = [],
-           jq = [],
-           Hq = [],
-           oq = [],
-           Pq = [],
- ... (202 more removed lines; see GitHub link above)
+           item: "Iron Plate",
+           amount: 32
+         }, {
+           item: "Gold Bar",
+           amount: 4
+         }, {
+           item: "Relay Coil",
+           amount: 2
+         }],
+         islandRadius: 24,
+         machineAllowance: 80,
+         beltAllowance: 384,
+         newDeposits: [{
+           block: "Gold Deposit",
+           offset: [16, 0, -14]
+         }, {
+ ... (404 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L1071` → after: `L584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L584) · [Before (L1071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L1071)

```diff
-       dq || (dq = !0, cq.c.AddNodeConstructor("TargetCamera", ((qq, Eq) => () => new Vq(qq, mq.q.Zero(), Eq))))
+       return nC
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L1081-L1096` → after: `L587-L588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L587-L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L587-L588) · [Before (L1081-L1096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L1081-L1096)

```diff
-     function Oq() {
-       lq || (lq = !0, Yq.b.prototype.getInputElement = function() {
-         return this._renderingCanvas
-       }, Yq.b.prototype.getRenderingCanvasClientRect = function() {
-         return this._renderingCanvas ? this._renderingCanvas.getBoundingClientRect() : null
-       }, Yq.b.prototype.getInputElementClientRect = function() {
-         return this._renderingCanvas ? this.getInputElement().getBoundingClientRect() : null
-       }, Yq.b.prototype.getAspectRatio = function(qq) {
-         let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         const gq = qq.viewport;
-         return this.getRenderWidth(Eq) * gq.width / (this.getRenderHeight(Eq) * gq.height)
-       }, Yq.b.prototype.getScreenAspectRatio = function() {
-         return this.getRenderWidth(!0) / this.getRenderHeight(!0)
-       }, Yq.b.prototype._verifyPointerLock = function() {
-         this._onPointerLockChange?.()
-       })
+     function oC(CC) {
+       nC = CC
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L1098-L1121` → after: `L590-L596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L590-L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L590-L596) · [Before (L1098-L1121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L1098-L1121)

```diff
-   },
-   39794: (qq, Eq, gq) => {
-     var Yq = gq(39653),
-       lq = gq(39799);
-     let Oq = !1;
-     Oq || (Oq = !0, (0, lq.D)(), Yq.b.prototype._loadFileAsync = async function(qq, Eq, gq) {
-       return await new Promise(((Yq, lq) => {
-         this._loadFile(qq, (qq => {
-           Yq(qq)
-         }), void 0, Eq, gq, ((qq, Eq) => {
-           lq(Eq)
-         }))
-       }))
-     })
-   },
-   39789: (qq, Eq, gq) => {
- ... (8 more removed lines; see GitHub link above)
+     const qC = {
+       11: "uraniumLine",
+       12: "centrifuge",
+       13: "reactorOnline",
+       14: "cryoCoolant",
+       15: "moreLasers"
+     };
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L1124-L1144` → after: `L599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L599) · [Before (L1124-L1144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L1124-L1144)

```diff
-       lq || (lq = !0, Yq.b.prototype.getRenderPassNames = function() {
-         return this._renderPassNames
-       }, Yq.b.prototype.getCurrentRenderPassName = function() {
-         return this._renderPassNames[this.currentRenderPassId]
-       }, Yq.b.prototype.createRenderPassId = function(qq) {
-         const Eq = ++Yq.b._RenderPassIdCounter;
-         return this._renderPassNames[Eq] = qq ?? "NONAME", Eq
-       }, Yq.b.prototype.releaseRenderPassId = function(qq) {
-         this._renderPassNames[qq] = void 0;
-         for (let Eq = 0; Eq < this.scenes.length; ++Eq) {
-           const gq = this.scenes[Eq];
-           for (let Eq = 0; Eq < gq.meshes.length; ++Eq) {
-             const Yq = gq.meshes[Eq];
-             if (Yq._releaseRenderPassId(qq), Yq.fn)
-               for (let Eq = 0; Eq < Yq.fn.length; ++Eq) {
-                 Yq.fn[Eq]._removeDrawWrapper(qq)
- ... (5 more removed lines; see GitHub link above)
+       return nC ? wC.length : bC
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L1160-L1173` → after: `L602-L604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L602-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L602-L604) · [Before (L1160-L1173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L1160-L1173)

```diff
-     function Oq() {
-       lq || (lq = !0, Yq.ThinEngine.prototype.setAlphaMode = function(qq) {
-         let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-         if (this._alphaMode[gq] === qq) {
-           if (!Eq) {
-             const Eq = 0 === qq;
-             this.depthCullingState.depthMask !== Eq && (this.depthCullingState.depthMask = Eq)
-           }
-           return
-         }
-         const Yq = 0 === qq;
-         this._alphaState.setAlphaBlend(!Yq, gq), this._alphaState.setAlphaMode(qq, gq), Eq || (this.depthCullingState.depthMask = Yq), this._alphaMode[gq] = qq
-       })
+     function WC(CC) {
+       var zC, ZC;
+       return null !== (zC = null === (ZC = wC[CC - 1]) || void 0 === ZC ? void 0 : ZC.reactorTier) && void 0 !== zC ? zC : 0
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L1407-L1418` → after: `L607-L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L607-L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L607-L610) · [Before (L1407-L1418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L1407-L1418)

```diff
-       function Eq(qq) {
-         return function(Eq, gq, Yq, lq, Oq, xq, Aq, cq) {
-           let uq = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
-             Bq = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
-           const Wq = qq ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
-             Nq = qq ? 10 : 11,
-             aq = new mq.c(this, Nq);
-           aq.baseWidth = gq, aq.baseHeight = Yq, aq.baseDepth = lq, aq.width = gq, aq.height = Yq, aq.depth = lq, aq.format = Oq, aq.type = Bq, aq.generateMipMaps = xq, aq.samplingMode = cq, qq ? aq.is3D = !0 : aq.is2DArray = !0, this._doNotHandleContextLost || (aq._bufferView =  … [truncated]
-           const Vq = this._getSamplingParameters(cq, xq);
-           return this._gl.texParameteri(Wq, this._gl.TEXTURE_MAG_FILTER, Vq.mag), this._gl.texParameteri(Wq, this._gl.TEXTURE_MIN_FILTER, Vq.min), xq && this._gl.generateMipmap(Wq), this._bindTextureDirectly(Wq, null), this._internalTexturesCache.push(aq), aq
-         }
-       }
+     function NC(CC, zC) {
+       let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : WC(CC) > 0;
+       return ZC && !nC ? "hidden" : CC <= zC ? "open" : ZC ? zC < 5 ? "hidden" : zC < bC ? "teaser" : "locked" : "locked"
+     }
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L1420-L1850` → after: `L612-L621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L612-L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L612-L621) · [Before (L1420-L1850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L1420-L1850)

```diff
-       function gq(qq) {
-         return function(Eq, gq, Yq, lq) {
-           let Oq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
-             mq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
-           const xq = qq ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
-             Aq = this._getWebGLTextureType(mq),
-             cq = this._getInternalFormat(Yq),
-             uq = this._getRGBABufferInternalSizedFormat(mq, Yq);
-           this._bindTextureDirectly(xq, Eq, !0), this._unpackFlipY(void 0 === lq || !!lq), this._doNotHandleContextLost || (Eq._bufferView = gq, Eq.format = Yq, Eq.invertY = lq, Eq._compression = Oq), Eq.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), Oq && … [truncated]
-         }
-       }
-       cq || (cq = !0, lq.ThinEngine.prototype.updateRawTexture = function(qq, Eq, gq, Yq) {
-         let lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
-           Oq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
-           mq = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
-         if (!qq) return;
- ... (415 more removed lines; see GitHub link above)
+     function MC(CC, zC) {
+       let ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+       const {
+         kind: QC,
+         n: wC
+       } = pC(CC);
+       return {
+         key: zC[QC],
+         params: {
+           [QC]: ZC ? String(wC) : wC
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L1885-L1911` → after: `L625-L632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L625-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L625-L632) · [Before (L1885-L1911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L1885-L1911)

```diff
-     class Aq {
-       constructor(qq) {
-         this._samples = new Array(qq), this.reset()
-       }
-       add(qq) {
-         let Eq;
-         if (this.isSaturated()) {
-           const qq = this._samples[this._pos];
-           Eq = qq - this.average, this.average -= Eq / (this._sampleCount - 1), this._m2 -= Eq * (qq - this.average)
-         } else this._sampleCount++;
-         Eq = qq - this.average, this.average += Eq / this._sampleCount, this._m2 += Eq * (qq - this.average), this.variance = this._m2 / (this._sampleCount - 1), this._samples[this._pos] = qq, this._pos++, this._pos %= this._samples.length
-       }
-       history(qq) {
-         if (qq >= this._sampleCount || qq >= this._samples.length) return 0;
-         const Eq = this._wrapPosition(this._pos - 1);
-         return this._samples[this._wrapPosition(Eq - qq)]
- ... (11 more removed lines; see GitHub link above)
+     const gC = {
+       tier: "coreTierName",
+       stage: "coreStageName",
+       atomic: "coreAtomicName"
+     };
+ 
+     function SC(CC, zC) {
+       return WC(CC) > 0 && zC < bC
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L1921-L1963` → after: `L643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L643) · [Before (L1921-L1963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L1921-L1963)

```diff
-         if (!(0, Nq.f)() || !document.body) return null;
-         const Eq = document.createElement("span");
-         Eq.textContent = "Hg", Eq.style.font = qq;
-         const gq = document.createElement("div");
-         gq.style.display = "inline-block", gq.style.width = "1px", gq.style.height = "0px", gq.style.verticalAlign = "bottom";
-         const Yq = document.createElement("div");
-         let lq, Oq;
-         Yq.style.whiteSpace = "nowrap", Yq.appendChild(Eq), Yq.appendChild(gq), document.body.appendChild(Yq);
-         try {
-           Oq = gq.getBoundingClientRect().top - Eq.getBoundingClientRect().top, gq.style.verticalAlign = "baseline", lq = gq.getBoundingClientRect().top - Eq.getBoundingClientRect().top
-         } finally {
-           document.body.removeChild(Yq)
-         }
-         const mq = {
-           ascent: lq,
-           height: Oq,
- ... (27 more removed lines; see GitHub link above)
+         return CC >= 6 && CC <= 10 ? CC - 6 + 1 : 0
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L1965-L1977` → after: `L645-L653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L645-L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L645-L653) · [Before (L1965-L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L1965-L1977)

```diff
-       return gq || function(qq) {
-         const Eq = Math.max(1, function(qq) {
-             const Eq = /(?:^|\s)([0-9]+(?:\.[0-9]+)?)px(?:\/|\s|$)/.exec(String(qq || ""));
-             return Eq ? Number(Eq[1]) : 16
-           }(qq)),
-           gq = .8 * Eq,
-           Yq = .2 * Eq;
-         return {
-           ascent: gq,
-           height: gq + Yq,
-           descent: Yq
-         }
-       }(qq)
+       return ZC > 0 ? {
+         kind: "stage",
+         n: ZC,
+         short: `S${ZC}`
+       } : {
+         kind: "tier",
+         n: CC,
+         short: String(CC)
+       }
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L1981` → after: `L657-L664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L657-L664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L657-L664) · [Before (L1981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L1981)

```diff
-       return Number.isFinite(qq.ascent) && Number.isFinite(qq.height) && Number.isFinite(qq.descent) && qq.height > 0
+       return wC[Math.max(1, Math.min(CC, wC.length)) - 1]
+     }
+ 
+     function GC(CC, zC) {
+       return CC < zC ? function(CC) {
+         var zC;
+         return null !== (zC = wC[CC]) && void 0 !== zC ? zC : null
+       }(CC) : null
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L1985-L1990` → after: `L672-L673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L672-L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L672-L673) · [Before (L1985-L1990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L1985-L1990)

```diff
-       if (qq.requestPointerLock) {
-         const Eq = qq.requestPointerLock();
-         Eq instanceof Promise ? Eq.then((() => {
-           qq.focus()
-         })).catch((() => {})) : qq.focus()
-       }
+       var zC;
+       return null !== (zC = CC.baf2CoreOpen) && void 0 !== zC ? zC : bC
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L1992-L2277` → after: `L675-L678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L675-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L675-L678) · [Before (L1992-L2277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L1992-L2277)

```diff
-     var jq = gq(39712),
-       Hq = gq(39644),
-       oq = gq(39714),
-       Pq = gq(39717);
-     class Qq extends Oq.ThinEngine {
-       static get NpmPackage() {
-         return Wq.b.NpmPackage
-       }
-       static get Version() {
-         return Wq.b.Version
-       }
-       static get Instances() {
-         return lq.b.Instances
-       }
-       static get LastCreatedEngine() {
-         return lq.b.LastCreatedEngine
- ... (270 more removed lines; see GitHub link above)
+     const iC = ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"];
+ 
+     function vC(CC) {
+       return iC.includes(CC)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L2279-L2494` → after: `L680-L686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L680-L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L680-L686) · [Before (L2279-L2494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L2279-L2494)

```diff
-     Qq.ALPHA_DISABLE = 0, Qq.ALPHA_ADD = 1, Qq.ALPHA_COMBINE = 2, Qq.ALPHA_SUBTRACT = 3, Qq.ALPHA_MULTIPLY = 4, Qq.ALPHA_MAXIMIZED = 5, Qq.ALPHA_ONEONE = 6, Qq.ALPHA_PREMULTIPLIED = 7, Qq.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, Qq.ALPHA_INTERPOLATE = 9, Qq.ALPHA_SCREENMODE = 10, Qq.D … [truncated]
-   },
-   39736: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       e: () => lq
-     });
-     var Yq = gq(39703);
-     class lq {
-       get depthStencilTexture() {
-         return this._depthStencilTexture
-       }
-       setDepthStencilTexture(qq) {
-         (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._depthStencilTexture && this._depthStencilTexture.dispose(), this._depthStencilTexture = qq, this._generateDepthBuffer = this._generateStencilBuffer = this._depthStencilTextureWithStencil = !1, q … [truncated]
-       }
-       get depthStencilTextureWithStencil() {
-         return this._depthStencilTextureWithStencil
- ... (200 more removed lines; see GitHub link above)
+     const eC = (CC, zC) => zC.map((zC => [zC, [CC]])),
+       hC = Object.fromEntries([...eC("Furnace", ["Iron Bar", "Gold Bar", "Copper Bar"]), ...eC("Workbench", ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"]), ...eC("Machine Bench", ["Burner Drill", "Crusher", "Smelter", "Conveyor Belt", "Tree Cutter", "Generator",  … [truncated]
+     new Set(["Recall Beacon", "Iron Hammer", "Wrench"]);
+ 
+     function KC(CC) {
+       var zC;
+       return null !== (zC = hC[CC]) && void 0 !== zC ? zC : ["Workbench"]
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L2496-L2525` → after: `L688-L690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L688-L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L688-L690) · [Before (L2496-L2525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L2496-L2525)

```diff
-   },
-   40186: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       e: () => Yq
-     });
-     class Yq {
-       static get ForceFullSceneLoadingForIncremental() {
-         return Yq._ForceFullSceneLoadingForIncremental
-       }
-       static set ForceFullSceneLoadingForIncremental(qq) {
-         Yq._ForceFullSceneLoadingForIncremental = qq
-       }
-       static get ShowLoadingScreen() {
-         return Yq._ShowLoadingScreen
-       }
-       static set ShowLoadingScreen(qq) {
- ... (14 more removed lines; see GitHub link above)
+ 
+     function YC(CC) {
+       return KC(CC)[0]
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L2527-L2534` → after: `L692-L694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L692-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L692-L694) · [Before (L2527-L2534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L2527-L2534)

```diff
-     Yq._ForceFullSceneLoadingForIncremental = !1, Yq._ShowLoadingScreen = !0, Yq._CleanBoneMatrixWeights = !1, Yq._LoggingLevel = 0
-   },
-   39830: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => mq
-     });
-     var Yq = gq(38653);
-     const lq = new Map;
+     wC.slice(1).map(((CC, zC) => `Core Tier ${zC+2}`));
+     var dC = ZC(9194);
+     const mC = ["on", "hud", "off"];
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L2536-L2539` → after: `L696-L697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L696-L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L696-L697) · [Before (L2536-L2539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L2536-L2539)

```diff
-     function Oq(qq, Eq) {
-       (function(qq) {
-         return lq.delete(qq)
-       })(qq) && Yq.b.Warn(`Extension with the name '${qq}' already exists`), lq.set(qq, Eq)
+     function HC(CC) {
+       return "on" === CC
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L2542-L2545` → after: `L722-L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L722-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L722-L723) · [Before (L2542-L2545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L2542-L2545)

```diff
-     function mq(qq, Eq) {
-       "image/ktx" !== Eq && "image/ktx2" !== Eq || (qq = ".ktx"), lq.has(qq) || (qq.endsWith(".ies") && Oq(".ies", (async () => await gq.e(300).then((() => gq(41525))).then((qq => new qq._IESTextureLoader)))), qq.endsWith(".dds") && Oq(".dds", (async () => await gq.e(298).then((( … [truncated]
-       const Yq = lq.get(qq);
-       return Yq ? Promise.resolve(Yq(Eq)) : null
+     function aC(CC) {
+       return `lifeform:${(0,EC.ke)(CC)}`
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L2547-L2627` → after: `L725-L730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L725-L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L725-L730) · [Before (L2547-L2627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L2547-L2627)

```diff
-   },
-   40202: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => mq,
-       f: () => cq
-     });
-     var Yq = gq(40037),
-       lq = gq(39786),
-       Oq = gq(37171);
-     class mq extends Yq.e {
-       get Bqq() {
-         return this._subMaterials
-       }
-       set Bqq(qq) {
-         this._subMaterials = qq, this._hookArray(qq)
-       }
- ... (65 more removed lines; see GitHub link above)
+ 
+     function tC(CC) {
+       if (!CC) return null;
+       if (CC.startsWith(sC)) {
+         const zC = CC.slice(6);
+         return cC.includes(zC) ? zC : null
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L2629-L2638` → after: `L732-L734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L732-L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L732-L734) · [Before (L2629-L2638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L2629-L2638)

```diff
-       dispose(qq, Eq, gq) {
-         const Yq = this.ZJ();
-         if (!Yq) return;
-         if (gq)
-           for (let Oq = 0; Oq < this.Bqq.length; Oq++) {
-             const gq = this.Bqq[Oq];
-             gq && gq.dispose(qq, Eq)
-           }
-         const lq = Yq.multiMaterials.indexOf(this);
-         lq >= 0 && Yq.multiMaterials.splice(lq, 1), super.dispose(qq, Eq)
+       if (CC.endsWith(TC)) {
+         const zC = CC.slice(0, -14);
+         return void 0 !== XC[zC] ? zC : null
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L2644-L2648` → after: `L744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L744) · [Before (L2644-L2648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L2644-L2648)

```diff
-       const gq = new mq(qq.name, Eq);
-       if (gq.id = qq.id, gq._loadedUniqueId = qq.uniqueId, lq.b && lq.b.AddTagsTo(gq, qq.tags), qq.materialsUniqueIds) gq._waitingSubMaterialsUniqueIds = qq.materialsUniqueIds;
-       else
-         for (const Yq of qq.materials) gq.Bqq.push(Eq.getLastMaterialById(Yq));
-       return gq
+       return uC[XC[zC]] * CC.opMs / 1e3
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L2651-L2652` → after: `L750-L752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L750-L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L750-L752) · [Before (L2651-L2652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L2651-L2652)

```diff
-     function cq() {
-       xq || (xq = !0, mq.ParseMultiMaterial = Aq, (0, Oq.g)("BABYLON.MultiMaterial", mq))
+     function BC(CC) {
+       const zC = wC.findIndex((zC => zC.unlocks.includes(CC)));
+       return zC < 0 ? 1 : zC + 1
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L2654-L2713` → after: `L754-L756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L754-L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L754-L756) · [Before (L2654-L2713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L2654-L2713)

```diff
-   },
-   39967: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => mq
-     });
-     var Yq, lq, Oq = gq(37139);
-     ! function(qq) {
-       qq[qq.LOCAL = 0] = "LOCAL", qq[qq.WORLD = 1] = "WORLD", qq[qq.BONE = 2] = "BONE"
-     }(Yq || (Yq = {}));
-     class mq {}
-     mq.X = new Oq.q(1, 0, 0), mq.Y = new Oq.q(0, 1, 0), mq.Z = new Oq.q(0, 0, 1),
-       function(qq) {
-         qq[qq.X = 0] = "X", qq[qq.Y = 1] = "Y", qq[qq.Z = 2] = "Z"
-       }(lq || (lq = {}))
-   },
-   39741: (qq, Eq, gq) => {
- ... (44 more removed lines; see GitHub link above)
+ 
+     function OC(CC) {
+       return Math.floor(CC).toLocaleString("en-US")
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L2715-L2739` → after: `L758-L764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L758-L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L758-L764) · [Before (L2715-L2739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L2715-L2739)

```diff
-     class cq {
-       constructor() {
-         this.x = Yq.q.Zero(), this.y = Yq.q.Zero(), this.z = Yq.q.Zero(), this.xx = Yq.q.Zero(), this.yy = Yq.q.Zero(), this.zz = Yq.q.Zero(), this.xy = Yq.q.Zero(), this.yz = Yq.q.Zero(), this.zx = Yq.q.Zero()
-       }
-       get preScaledHarmonics() {
-         return this._harmonics || (this._harmonics = Aq.FromPolynomial(this)), this._harmonics.preScaled || this._harmonics.preScaleForRendering(), this._harmonics
-       }
-       addAmbient(qq) {
-         Yq.o.Na[0].Vqq(qq.r, qq.g, qq.b);
-         const Eq = Yq.o.Na[0];
-         this.xx.addInPlace(Eq), this.yy.addInPlace(Eq), this.zz.addInPlace(Eq)
-       }
-       scaleInPlace(qq) {
-         this.x.scaleInPlace(qq), this.y.scaleInPlace(qq), this.z.scaleInPlace(qq), this.xx.scaleInPlace(qq), this.yy.scaleInPlace(qq), this.zz.scaleInPlace(qq), this.yz.scaleInPlace(qq), this.zx.scaleInPlace(qq), this.xy.scaleInPlace(qq)
-       }
-       updateFromHarmonics(qq) {
- ... (9 more removed lines; see GitHub link above)
+     var kC = ZC(38259);
+     const VC = "baf2terminaltake",
+       Cz = "baf2terminalput",
+       zz = ["one", "stack", "fill"];
+ 
+     function Zz(CC, zC, ZC) {
+       return `${VC} ${CC} ${zC} ${ZC}`
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L2741-L2758` → after: `L766-L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L766-L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L766-L800) · [Before (L2741-L2758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L2741-L2758)

```diff
-   },
-   40197: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       c: () => fq,
-       f: () => Tq
-     });
-     var Yq = gq(39757),
-       lq = gq(37156),
-       Oq = gq(37139),
-       mq = gq(39879),
-       xq = gq(40176),
-       Aq = gq(40199),
-       cq = gq(39876),
-       uq = gq(40055),
-       Bq = gq(39870);
-     class Wq {
- ... (2 more removed lines; see GitHub link above)
+ 
+     function Qz(CC, zC, ZC) {
+       return `${Cz} ${CC} ${zC} ${ZC}`
+     }
+ 
+     function wz(CC) {
+       return `${Cz} ${CC}`
+     }
+     const bz = [
+       [`${VC} `, "take"],
+       [`${Cz} `, "put"]
+     ];
+ 
+     function nz(CC) {
+       const zC = bz.find((zC => {
+         let [ZC] = zC;
+ ... (19 more added lines; see GitHub link above)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L2773` → after: `L805-L806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L805-L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L805-L806) · [Before (L2773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L2773)

```diff
-       return qq - Math.floor(qq / Eq) * Eq
+       const ZC = "number" === typeof CC ? CC : "one" === CC ? 1 : "stack" === CC ? 99 : zC;
+       return Math.min(zC, ZC)
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L2776-L2777` → after: `L809-L811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L809-L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L809-L811) · [Before (L2776-L2777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L2776-L2777)

```diff
-     function nq(qq, Eq, gq) {
-       qq instanceof Float32Array ? Oq.e.FromArrayToRef(qq, Eq, gq) : gq.Vqq((0, jq.e)(qq[Eq]), (0, jq.e)(qq[Eq + 1]), (0, jq.e)(qq[Eq + 2]), (0, jq.e)(qq[Eq + 3]), (0, jq.e)(qq[Eq + 4]), (0, jq.e)(qq[Eq + 5]), (0, jq.e)(qq[Eq + 6]), (0, jq.e)(qq[Eq + 7]), (0, jq.e)(qq[Eq + 8]), ( … [truncated]
+     function oz(CC, zC) {
+       const ZC = CC => "number" === typeof CC ? CC : "one" === CC ? 1 : 99;
+       return "fill" === CC || "fill" === zC ? "fill" : ZC(CC) + ZC(zC)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L2780-L2807` → after: `L814-L830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L814-L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L814-L830) · [Before (L2780-L2807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L2780-L2807)

```diff
-     function bq(qq, Eq, gq, Yq, lq, xq, Aq, cq, uq) {
-       const Bq = gq.texture,
-         Wq = Bq?.getInternalTexture(),
-         Nq = Wq?._bufferView;
-       if (!(Nq instanceof Float32Array) && !(Nq instanceof Uint16Array)) return yq.b.Warn("Baked vertex animation bounding info requires CPU-readable Float32Array or Uint16Array texture data.", 1), !1;
-       const aq = Bq.getSize(),
-         Vq = function(qq, Eq) {
-           const gq = qq.y - qq.x + 1,
-             Yq = Eq * qq.w / gq,
-             lq = Yq < 1 ? 0 : 1,
-             Oq = gq - lq;
-           let mq = hq(Yq - Math.floor(Yq), 1) * Oq;
-           return mq = hq(mq + qq.z, Oq), Math.floor(mq) + qq.x + lq
-         }(Yq, gq.time);
-       if (!isFinite(Vq) || Vq < 0 || Vq >= aq.height) return yq.b.Warn("Baked vertex animation bounding info could not be refreshed because the computed frame is outside the texture.", 1), !1;
-       const dq = Oq.o.Na[0],
- ... (12 more removed lines; see GitHub link above)
+     function qz(CC, zC) {
+       const ZC = nz(CC),
+         QC = nz(zC),
+         wC = ZC && QC ? function(CC, zC) {
+           return "take" === CC.kind || "take" === zC.kind ? "take" === CC.kind && "take" === zC.kind && CC.item === zC.item ? {
+             ...zC,
+             mode: oz(CC.mode, zC.mode)
+           } : null : "putAll" === CC.kind || "putAll" === zC.kind ? {
+             kind: "putAll",
+             seq: zC.seq
+           } : CC.item === zC.item ? {
+             ...zC,
+             mode: oz(CC.mode, zC.mode)
+           } : null
+         }(ZC, QC) : null;
+       return wC ? "putAll" === (bC = wC).kind ? wz(bC.seq) : "put" === bC.kind ? Qz(bC.seq, bC.mode, bC.item) : Zz(bC.seq, bC.mode, bC.item) : null;
+ ... (1 more added lines; see GitHub link above)
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L2809-L2817` → after: `L832-L836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L832-L836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L832-L836) · [Before (L2809-L2817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L2809-L2817)

```diff
-     class iq {
-       constructor() {
-         this.facetNb = 0, this.partitioningSubdivisions = 10, this.partitioningBBoxRatio = 1.01, this.facetDataEnabled = !1, this.facetParameters = {}, this.bbSize = Oq.q.Zero(), this.subDiv = {
-           max: 1,
-           X: 1,
-           Y: 1,
-           Z: 1
-         }, this.facetDepthSort = !1, this.facetDepthSortEnabled = !1
-       }
+     const Fz = "baf2rx";
+ 
+     function Wz(CC, zC) {
+       for (var ZC = arguments.length, QC = new Array(ZC > 2 ? ZC - 2 : 0), wC = 2; wC < ZC; wC++) QC[wC - 2] = arguments[wC];
+       return [Fz, CC[0], CC[1], CC[2], zC, ...QC].join(" ")
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L2819-L2821` → after: `L838-L881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L838-L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L838-L881) · [Before (L2819-L2821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L2819-L2821)

```diff
-     class Zq {
-       constructor() {
-         this._hasVertexAlpha = !1, this._useVertexColors = !0, this._numBoneInfluencers = 4, this._applyFog = !0, this._receiveShadows = !1, this._facetData = new iq, this._visibility = 1, this._skeleton = null, this._layerMask = 268435455, this._computeBonesUsingShaders = !0, th … [truncated]
+     const Nz = 2,
+       Mz = 4,
+       gz = 8,
+       Sz = 16,
+       pz = 32,
+       Pz = 64,
+       Gz = 128,
+       Rz = 256,
+       Az = 512,
+       xz = [{
+         item: "Raw Voltite",
+         chance: .55
+       }, {
+         item: "Raw Gold",
+         chance: .43
+       }, {
+ ... (28 more added lines; see GitHub link above)
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L2824` → after: `L884-L1127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L884-L1127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L884-L1127) · [Before (L2824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L2824)

```diff
-     let fq = (() => {
+     const ez = "baf2synth",
+       hz = ["Burner Drill", "Crusher", "Smelter", "Generator", "Press", "Wire Mill", "Alloy Kiln", "Electric Drill", "Assembler", "Tree Cutter", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Crystal Vat", "Recycler", "Crop Harvester", "Condenser", "Centrifuge", "Synthe … [truncated]
+       Kz = ["Raw Porkchop", "Raw Beef", "Raw Mutton", "Raw Venison"],
+       Yz = ["Cooked Porkchop", "Steak", "Cooked Mutton", "Cooked Venison"],
+       dz = function(CC, zC) {
+         return {
+           input: CC,
+           inputAmount: arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
+           output: zC,
+           outputAmount: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
+           bonus: arguments.length > 4 ? arguments[4] : void 0
+         }
+       },
+       mz = function(CC, zC) {
+         return {
+           ...dz(CC, zC, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
+ ... (228 more added lines; see GitHub link above)
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L2826-L3018` → after: `L1129-L1171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R1129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L1129-L1171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L1129-L1171) · [Before (L2826-L3018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L2826-L3018)

```diff
-         let Eq, Wq = Aq.g,
-           Nq = [];
-         return qq = class extends Wq {
-           static get BILLBOARDMODE_NONE() {
-             return Aq.g.BILLBOARDMODE_NONE
-           }
-           static get BILLBOARDMODE_X() {
-             return Aq.g.BILLBOARDMODE_X
-           }
-           static get BILLBOARDMODE_Y() {
-             return Aq.g.BILLBOARDMODE_Y
-           }
-           static get BILLBOARDMODE_Z() {
-             return Aq.g.BILLBOARDMODE_Z
-           }
-           static get BILLBOARDMODE_ALL() {
- ... (177 more removed lines; see GitHub link above)
+         const {
+           divisor: bC,
+           powerPerS: nC
+         } = rz[zC - 1], fC = CC.opMs / bC, oC = void 0 !== CC.fluidMade || void 0 !== CC.cryoMade ? CC.powerPerOp : nC * fC / 1e3;
+         QC = {
+           ...CC,
+           fuelSlot: null,
+           couplerSlot: null !== (wC = Tz(CC)) && void 0 !== wC ? wC : void 0,
+           opMs: fC,
+           powerPerOp: oC,
+           coupled: !0
+         }, zC > 1 && (QC = {
+           ...QC,
+           couplerLevel: zC
+         }), ZC[zC] = QC
+       }
+ ... (27 more added lines; see GitHub link above)
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L3020-L3021` → after: `L1173-L1293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R1173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L1173-L1293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L1173-L1293) · [Before (L3020-L3021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L3020-L3021)

```diff
-           set collisionGroup(qq) {
-             this._internalAbstractMeshDataInfo._meshCollisionData._collisionGroup = isNaN(qq) ? -1 : qq
+         }))
+       }),
+       Uz = Object.fromEntries([Lz("Conveyor Belt", 4, 1, [
+         ["Iron Bar", 2]
+       ]), Lz("Motor", 1, 2, [
+         ["Iron Plate", 2],
+         ["Copper Wire", 6],
+         ["Iron Bar", 1]
+       ]), Lz("Splitter", 2, 2, [
+         ["Conveyor Belt", 2],
+         ["Iron Plate", 1]
+       ]), Lz("Logic Board", 1, 3, [
+         ["Gold Plate", 1],
+         ["Copper Wire", 6],
+         ["Glass", 1]
+       ]), Lz("Machine Hull", 1, 3, [
+ ... (105 more added lines; see GitHub link above)
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L3023-L3024` → after: `L1295-L1640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R1295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L1295-L1640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L1295-L1640) · [Before (L3023-L3024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L3023-L3024)

```diff
-           get surroundingMeshes() {
-             return this._internalAbstractMeshDataInfo._meshCollisionData._surroundingMeshes
+           return ZC
+         }(ZC)), ZC.synth) return jz(ZC, zC.taught);
+       if (zC.coupled && ZC.couplable) return az(ZC, zC.level);
+       const QC = ZC.inputSlots && null !== zC.taught ? Uz[zC.taught] : void 0;
+       if (!QC) return ZC;
+       const wC = `${CC}|${QC.output}`;
+       let bC = Bz.get(wC);
+       return bC || (bC = {
+         ...ZC,
+         bench: QC
+       }, Bz.set(wC, bC)), bC
+     }
+     const kz = ["Diamond", "Moonstone"];
+ 
+     function Vz(CC) {
+       return new Set(CC.flatMap((CC => CC.bonus ? [CC.output, CC.bonus.item] : [CC.output])).filter((CC => !kz.includes(CC))))
+ ... (330 more added lines; see GitHub link above)
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L3026-L3027` → after: `L1642-L9912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R1642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L1642-L9912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L1642-L9912) · [Before (L3026-L3027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L3026-L3027)

```diff
-           set surroundingMeshes(qq) {
-             this._internalAbstractMeshDataInfo._meshCollisionData._surroundingMeshes = qq
+           return !0
+         }))
+       }(gQ(CC)[1], zC.spawnXZ, zC.coreXZ, (CC => CC[1] >= NZ.s && CC[1] < NZ.s + NZ.v && CC[0] >= zC.minXZ[0] && CC[0] <= zC.maxXZ[0] && CC[2] >= zC.minXZ[1] && CC[2] <= zC.maxXZ[1]))
+     }
+     const AQ = ["Storage Silo", "Solar Panel", "Charge Vault", "Charging Pad", "Forge Hopper", "Fluid Tank", "Fluid Pipe", "Collider", "Laser", "Dense Silo", "Wireless Terminal"];
+ 
+     function xQ(CC) {
+       return Math.max(48 + 16 * CC, PC(CC).machineAllowance)
+     }
+     const JQ = ["_Solar Panel SE", "_Solar Panel NW", "_Solar Panel NE"];
+ 
+     function IQ(CC) {
+       const zC = CC.split("|")[0];
+       return JQ.includes(zC) ? "Solar Panel" : zC === gZ.b ? "Fluid Pipe" : NQ(zC) >= 0 ? "Collider" : (ZC = zC, AQ.includes(ZC) ? zC : null);
+       var ZC
+     }
+ ... (8255 more added lines; see GitHub link above)
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L3029-L3030` → after: `L9914-L10523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R9914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L9914-L10523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L9914-L10523) · [Before (L3029-L3030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L3029-L3030)

```diff
-           get lightSources() {
-             return this._lightSources
+           fC(ZC)
+         }), [fC, CC]);
+       return {
+         explained: zC,
+         hinting: wC,
+         explain: fC,
+         explainOnce: oC
+       }
+     }
+ 
+     function fN(CC) {
+       let {
+         text: zC,
+         tone: ZC,
+         explained: QC
+       } = CC;
+ ... (594 more added lines; see GitHub link above)
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L3032-L3034` → after: `L10525-L10567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R10525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L10525-L10567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L10525-L10567) · [Before (L3032-L3034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L3032-L3034)

```diff
-           set skeleton(qq) {
-             const Eq = this._internalAbstractMeshDataInfo._skeleton;
-             Eq && Eq.needInitialSkinMatrix && Eq._unregisterMeshWithPoseMatrix(this), qq && qq.needInitialSkinMatrix && qq._registerMeshWithPoseMatrix(this), this._internalAbstractMeshDataInfo._skeleton = qq, this._internalAbstractMeshDataInfo._skeleton || (this._bonesTransformMa … [truncated]
+         }
+       }
+       return CC === oo ? {
+         key: `${IN}rxWhy_channel`,
+         params: {
+           amount: String(Df)
+         }
+       } : CC === qo ? {
+         key: `${IN}rxWhy_deadChannel`,
+         params: {}
+       } : CC === Fo ? {
+         key: `${IN}rxWhy_graphite`,
+         params: {}
+       } : {
+         key: `${IN}rxWhy_core`,
+         params: {}
+ ... (27 more added lines; see GitHub link above)
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L3036-L3037` → after: `L10569-L10729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R10569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L10569-L10729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L10569-L10729) · [Before (L3036-L3037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L3036-L3037)

```diff
-           get skeleton() {
-             return this._internalAbstractMeshDataInfo._skeleton
+         }
+       }(QC), FC = null === (WC = YN(zC, 100).hotAbove) ? {
+         amber: 100,
+         red: 100
+       } : {
+         amber: Math.max(0, WC - 10),
+         red: WC
+       };
+       var WC;
+       return (0, vb.jsxs)("div", {
+         className: Jw()("Baf2RxThrottle", {
+           Off: nC
+         }),
+         onClick: () => {
+           nC && wC(`${rN}rxWhy_startFirst`)
+         },
+ ... (145 more added lines; see GitHub link above)
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L3039-L3053` → after: `L10731-L11404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R10731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L10731-L11404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L10731-L11404) · [Before (L3039-L3053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L3039-L3053)

```diff
-           constructor(Eq) {
-             var gq;
-             let Yq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
-             switch (super(Eq, Yq, !1), gq = this, this._internalAbstractMeshDataInfo = new Zq, this._waitingMaterialId = null, this._waitingMorphTargetManagerId = null, this._waitingSkeletonId = null, this._waitingSkeletonUniqueId = null, this.cullingStrategy = qq.CULLINGSTRATEGY … [truncated]
-                 lods: null,
-                 actions: null,
-                 eJ: null
-               }, this._bonesTransformMatrices = null, this._transformMatrixTexture = null, this.onRebuildObservable = new lq.d, this._onCollisionPositionChange = function(qq, Eq) {
-                 let Yq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-                 Eq.subtractToRef(gq._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, gq._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), gq._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions.length() … [truncated]
-               }, Yq = this.ZJ(), this.layerMask = Yq.defaultRenderableLayerMask, Yq.ZYq(this), this._resyncLightSources(), this._uniformBuffer = new Bq.b(this.ZJ().Ba(), void 0, void 0, Eq, !this.ZJ().Ba().isWebGPU), this._buildUniformLayout(), Yq.performancePriority) {
-               case 2:
-                 this.Va = !0;
-               case 1:
-                 this.Wa = !0, this.yV = !1
+         })]
+       })
+     }
+ 
+     function DN(CC) {
+       let {
+         view: zC,
+         store: ZC,
+         keepSize: QC
+       } = CC;
+       const {
+         t: wC
+       } = (0, ew.y)(), {
+         status: bC
+       } = zC;
+       return (0, vb.jsxs)("div", {
+ ... (658 more added lines; see GitHub link above)
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L3055-L3085` → after: `L11406-L11415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R11406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L11406-L11415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L11406-L11415) · [Before (L3055-L3085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L3055-L3085)

```diff
-           }
-           _buildUniformLayout() {
-             this._uniformBuffer.addUniform("world", 16), this._uniformBuffer.addUniform("visibility", 1), this._uniformBuffer.create()
-           }
-           transferToEffect(qq) {
-             const Eq = this._uniformBuffer;
-             Eq.Eqq("world", qq), Eq.updateFloat("visibility", this._internalAbstractMeshDataInfo._visibility), Eq.update()
-           }
-           getMeshUniformBuffer() {
-             return this._uniformBuffer
-           }
-           get _isGaussianSplatting() {
-             return !1
-           }
-           getClassName() {
-             return "AbstractMesh"
- ... (15 more removed lines; see GitHub link above)
+           }), (0, vb.jsx)(QN, {
+             kind: WC.kind,
+             label: WC.label,
+             number: WC.number,
+             preview: WC.preview,
+             note: WC.note,
+             tone: WC.tone,
+             share: WC.share,
+             onExplain: () => {
+               ZC(WC.why)
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L3087-L3093` → after: `L11417-L11459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R11417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L11417-L11459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L11417-L11459) · [Before (L3087-L3093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L3087-L3093)

```diff
-             return this.parent ? this.parent._getActionManagerForTrigger(qq, !1) : null
-           }
-           _releaseRenderPassId(qq) {}
-           _rebuild() {
-             if (this.onRebuildObservable.notifyObservers(this), null !== this._occlusionQuery && (this._occlusionQuery = null), this.fn) {
-               for (const qq of this.fn) qq._rebuild();
-               this.resetDrawCache()
+           })]
+         }), (0, vb.jsxs)("div", {
+           className: "Baf2RxPipes",
+           children: [(0, vb.jsx)(wN, {
+             kind: "Fuel",
+             step: FC,
+             short: "noFuel" === bC.baf2RxState
+           }), (0, vb.jsx)(wN, {
+             kind: WC.kind,
+             step: FC,
+             short: WC.short || "noWater" === bC.baf2RxState
+           })]
+         }), (0, vb.jsx)(QM, {
+           view: zC,
+           heat: bC.baf2RxHeat,
+           settle: Math.min(xo, gC.settle),
+ ... (27 more added lines; see GitHub link above)
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L3095-L3110` → after: `L11461-L11471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R11461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L11461-L11471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L11461-L11471) · [Before (L3095-L3110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L3095-L3110)

```diff
-           }
-           _resyncLightSources() {
-             this._lightSources.length = 0;
-             for (const qq of this.ZJ().lights) qq.isEnabled() && qq.canAffectMesh(this) && this._lightSources.push(qq);
-             this._markSubMeshesAsLightDirty()
-           }
-           _resyncLightSource(qq) {
-             const Eq = qq.isEnabled() && qq.canAffectMesh(this),
-               gq = this._lightSources.indexOf(qq);
-             let Yq = !1;
-             if (-1 === gq) {
-               if (!Eq) return;
-               this._lightSources.push(qq)
-             } else {
-               if (Eq) return;
-               Yq = !0, this._lightSources.splice(gq, 1)
+           }), (0, vb.jsx)(QN, {
+             kind: "Waste",
+             label: wC(`${VN}rxWaste`),
+             number: `${Math.floor(bC.baf2RxWaste)}/${nC.waste}`,
+             note: NC.full ? wC(`${VN}rxWasteFull`) : null !== NC.fullInS ? wC(`${VN}rxWasteFullIn`, {
+               time: xb(wC, NC.fullInS)
+             }) : wC(`${VN}rxWasteSpent`),
+             tone: "wasteFull" === bC.baf2RxState ? "danger" : NC.full ? "warn" : null,
+             share: bC.baf2RxWaste / nC.waste,
+             onExplain: () => {
+               ZC(`${VN}rxWhy_waste`)
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L3112-L3243` → after: `L11473-L11501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R11473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L11473-L11501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L11473-L11501) · [Before (L3112-L3243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L3112-L3243)

```diff
-             this._markSubMeshesAsLightDirty(Yq)
-           }
-           _unBindEffect() {
-             for (const qq of this.fn) qq.setEffect(null)
-           }
-           _removeLightSource(qq, Eq) {
-             const gq = this._lightSources.indexOf(qq); - 1 !== gq && (this._lightSources.splice(gq, 1), this._markSubMeshesAsLightDirty(Eq))
-           }
-           _markSubMeshesAsDirty(qq) {
-             if (this.fn)
-               for (const Eq of this.fn)
-                 for (let gq = 0; gq < Eq._drawWrappers.length; ++gq) {
-                   const Yq = Eq._drawWrappers[gq];
-                   Yq && Yq.defines && Yq.defines.markAllAsDirty && qq(Yq.defines)
-                 }
-           }
- ... (116 more removed lines; see GitHub link above)
+           })]
+         })]
+       })
+     }
+ 
+     function nM(CC) {
+       let {
+         view: zC,
+         explain: ZC
+       } = CC;
+       const {
+         t: QC
+       } = (0, ew.y)(), wC = zC.plan;
+       if (!wC) return null;
+       const bC = wC.fuelHeat <= 0 ? null : wC.cooling > 0 ? Math.min(xo, 100 * wC.fuelHeat / wC.cooling) : xo,
+         nC = QC(`${VN}rxPlanAtFull`);
+ ... (13 more added lines; see GitHub link above)
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L3245-L3327` → after: `L11503-L11511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R11503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L11503-L11511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L11503-L11511) · [Before (L3245-L3327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L3245-L3327)

```diff
-             if (this.fn)
-               for (let gq = 0; gq < this.fn.length; gq++) this.fn[gq].refreshBoundingInfo(qq);
-             this._updateBoundingInfo()
-           }
-           _refreshBoundingInfoDirect(qq) {
-             if (this._boundingInfo ? this._boundingInfo.reConstruct(qq.minimum, qq.maximum) : this._boundingInfo = new uq.d(qq.minimum, qq.maximum), this.fn)
-               for (let Eq = 0; Eq < this.fn.length; Eq++) this.fn[Eq].refreshBoundingInfo(null);
-             this._updateBoundingInfo()
-           }
-           static _ApplySkeleton(qq, Eq, gq, Yq, lq, xq, Aq) {
-             ! function(qq, Eq, gq, Yq, lq, xq, Aq) {
-               const cq = Oq.o.Na[0],
-                 uq = Oq.o.Matrix[0],
-                 Bq = Oq.o.Matrix[1],
-                 Wq = Eq === mq.g.NormalKind ? Oq.q.TransformNormalFromFloatsToRef : Oq.q.TransformCoordinatesFromFloatsToRef;
-               for (let mq = 0, Nq = 0; mq < qq.length; mq += 3, Nq += 4) {
- ... (67 more removed lines; see GitHub link above)
+           }), (0, vb.jsx)(QN, {
+             kind: "Water",
+             label: QC(`${VN}rxWater`),
+             number: `${AN(wC.waterPerS)}/s`,
+             note: zC.status.baf2RxCryoOpen && wC.waterPerS > 0 ? QC(`${VN}rxPlanOrCryo`, {
+               rate: AN(Po(wC, kC.f) * kC.i)
+             }) : nC,
+             onExplain: () => {
+               ZC(`${VN}rxWhy_water`)
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L3329-L3338` → after: `L11513-L11553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R11513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L11513-L11553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L11513-L11553) · [Before (L3329-L3338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L3329-L3338)

```diff
-             if (!cq && Eq.applySkeleton && this.skeleton) {
-               const Eq = xq(mq.g.MatricesIndicesKind),
-                 lq = xq(mq.g.MatricesWeightsKind);
-               if (lq && Eq) {
-                 const Oq = this.numBoneInfluencers > 4,
-                   Aq = Oq ? xq(mq.g.MatricesIndicesExtraKind) : null,
-                   cq = Oq ? xq(mq.g.MatricesWeightsExtraKind) : null,
-                   uq = this.skeleton.getTransformMatrices(this);
-                 qq._ApplySkeleton(gq, Yq, uq, Eq, lq, Aq, cq)
-               }
+           })]
+         }), (0, vb.jsxs)("div", {
+           className: "Baf2RxPipes",
+           children: [(0, vb.jsx)(wN, {
+             kind: "Fuel",
+             step: 0,
+             planned: !0
+           }), (0, vb.jsx)(wN, {
+             kind: "Water",
+             step: 0,
+             planned: !0
+           })]
+         }), (0, vb.jsx)(QM, {
+           view: zC,
+           heat: null,
+           settle: bC,
+ ... (25 more added lines; see GitHub link above)
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L3340-L3346` → after: `L11555-L11563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R11555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L11555-L11563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L11555-L11563) · [Before (L3340-L3346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L3340-L3346)

```diff
-             if (!1 !== Eq.updatePositionsArray && Yq === mq.g.PositionKind) {
-               const qq = this._internalAbstractMeshDataInfo._positions || [],
-                 Eq = qq.length;
-               if (qq.length = gq.length / 3, Eq < qq.length)
-                 for (let gq = Eq; gq < qq.length; gq++) qq[gq] = new Oq.q;
-               for (let Yq = 0, lq = 0; Yq < qq.length; Yq++, lq += 3) qq[Yq].Vqq(gq[lq], gq[lq + 1], gq[lq + 2]);
-               this._internalAbstractMeshDataInfo._positions = qq
+           }), (0, vb.jsx)(QN, {
+             kind: "Waste",
+             label: QC(`${VN}rxWaste`),
+             number: QC(`${VN}rxPlanPerMin`, {
+               amount: uo(wC.pelletsPerMin)
+             }),
+             note: QC(`${VN}rxWasteSpent`),
+             onExplain: () => {
+               ZC(`${VN}rxWhy_waste`)
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L3348-L3377` → after: `L11565-L11638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R11565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L11565-L11638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L11565-L11638) · [Before (L3348-L3377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L3348-L3377)

```diff
-             return gq
-           }
-           getNormalsData() {
-             let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
-               Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-             return this._getData({
-               applySkeleton: qq,
-               applyMorph: Eq,
-               updatePositionsArray: !1
-             }, null, mq.g.NormalKind)
-           }
-           qI() {
-             let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
-               Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-               gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-             return this._getData({
- ... (14 more removed lines; see GitHub link above)
+           })]
+         })]
+       })
+     }
+     const fM = "buildAFactory2Game:",
+       oM = {
+         key: `${fM}rxWaiting`,
+         params: {},
+         tone: "info"
+       };
+ 
+     function qM(CC, zC) {
+       return 0 !== (CC.baf2RxFlags & zC)
+     }
+ 
+     function FM(CC) {
+ ... (58 more added lines; see GitHub link above)
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L3390-L3427` → after: `L11641-L11899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R11641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L11641-L11899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L11641-L11899) · [Before (L3390-L3427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L3390-L3427)

```diff
-           Nlq(qq) {
-             let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-               gq = arguments.length > 2 ? arguments[2] : void 0;
-             const Yq = this.yR(),
-               lq = qq.yR();
-             if (Yq.intersects(lq, Eq)) return !0;
-             if (gq)
-               for (const Oq of this.getChildMeshes())
-                 if (Oq.Nlq(qq, Eq, !0)) return !0;
-             return !1
-           }
-           intersectsPoint(qq) {
-             return this.yR().intersectsPoint(qq)
-           }
-           get checkCollisions() {
-             return this._internalAbstractMeshDataInfo._meshCollisionData._checkCollisions
- ... (22 more removed lines; see GitHub link above)
+         }(GC) : null,
+         [hC, KC, YC] = null !== (zC = null === fC || void 0 === fC ? void 0 : fC.dims) && void 0 !== zC ? zC : [0, 0, 0],
+         dC = `${hC}\xd7${KC}\xd7${YC}`;
+       return (0, vb.jsx)(Jn.c, {
+         close: bC,
+         togglePointerLock: !1,
+         className: "Baf2PanelOverlay Baf2RxOverlay",
+         children: (0, vb.jsxs)("section", {
+           className: "Baf2Panel Baf2RxPanel",
+           role: "dialog",
+           "aria-modal": "true",
+           "aria-labelledby": "baf2RxTitle",
+           children: [(0, vb.jsxs)("header", {
+             className: "Baf2PanelHeader",
+             children: [(0, vb.jsxs)("div", {
+               className: "Baf2RxTitle",
+ ... (243 more added lines; see GitHub link above)
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L3429-L3434` → after: `L11901-L12304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R11901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L11901-L12304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L11901-L12304) · [Before (L3429-L3434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L3429-L3434)

```diff
-           _processCollisionsForSubMeshes(qq, Eq) {
-             const gq = this._scene.getCollidingSubMeshCandidates(this, qq),
-               Yq = gq.length;
-             for (let lq = 0; lq < Yq; lq++) {
-               const Oq = gq.data[lq];
-               Yq > 1 && !Oq._checkCollision(qq) || this._collideForSubMesh(Oq, Eq, qq)
+         })), this.remPx = 16, this.lM = [], this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100, this.mG = () => {
+           this.pxPerVw = window.innerWidth / 100, this.pxPerVh = window.innerHeight / 100
+         }, window.addEventListener("resize", this.mG)
+       }
+       observe(CC) {
+         this.observer.observe(CC)
+       }
+       unobserve(CC) {
+         this.observer.unobserve(CC)
+       }
+       run(CC) {
+         const zC = CC.list;
+         zC.sort(gM);
+         const ZC = this.pxPerVw,
+           QC = this.pxPerVh;
+         this.lM.length = 0, this.hud && this.lM.push(...this.hud.boxes(performance.now()));
+ ... (388 more added lines; see GitHub link above)
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L3436-L3439` → after: `L12306-L12311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R12306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L12306-L12311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L12306-L12311) · [Before (L3436-L3439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L3436-L3439)

```diff
-             return this
-           }
-           _shouldConvertRHS() {
-             return !1
+             let oC = ZC.kind;
+             if (null === oC) {
+               if (oC = zC.kindOf(ZC.name), null === oC) continue;
+               ZC.kind = oC, ZC.slot = oC.take(), ZC.hidden = !0, ZC.drawn = NaN
+             } else if (QC === ZC.drawn && !ZC.hidden && !nC) continue;
+             sM(CC, QC), oC.write(ZC.slot, XM[0], XM[1], XM[2]), ZC.hidden = !1, ZC.drawn = QC
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L3441-L3445` → after: `L12313-L12360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R12313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L12313-L12360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L12313-L12360) · [Before (L3441-L3445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L3441-L3445)

```diff
-           _checkCollision(qq) {
-             if (!this.yR()._checkCollision(qq)) return this;
-             const Eq = Oq.o.Matrix[0],
-               gq = Oq.o.Matrix[1];
-             return Oq.e.ScalingToRef(1 / qq._radius.x, 1 / qq._radius.y, 1 / qq._radius.z, Eq), this.worldMatrixFromCache.multiplyToRef(Eq, gq), this._processCollisionsForSubMeshes(qq, gq), this
+         }
+         zC.commit()
+       }
+       dispose() {
+         var CC;
+         window.removeEventListener("resize", this.mG), this.lines.clear(), this.shown = [], this.pending.length = 0, this.pendingHead = 0, null === (CC = this.pool) || void 0 === CC || CC.dispose(), this.pool = null
+       }
+       setView(CC, zC) {
+         const {
+           cameraDir: ZC,
+           lastDir: QC
+         } = this, wC = CC.cameraDirection;
+         for (let FC = 0; FC < 3; FC++) QC[FC] = ZC[FC], ZC[FC] = wC[FC];
+         const bC = ZC[0] * QC[0] + ZC[1] * QC[1] + ZC[2] * QC[2],
+           nC = Number.isNaN(bC) ? 0 : Math.acos(Math.min(1, Math.max(-1, bC))),
+           {
+ ... (32 more added lines; see GitHub link above)
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L3447-L3448` → after: `L12362-L12382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R12362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L12362-L12382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L12362-L12382) · [Before (L3447-L3448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L3447-L3448)

```diff
-           _generatePointsArray() {
-             return !1
+         }
+         this.pendingHead === zC.length ? (zC.length = 0, this.pendingHead = 0) : this.pendingHead > 256 && 2 * this.pendingHead > zC.length && (zC.splice(0, this.pendingHead), this.pendingHead = 0)
+       }
+       applyLines(CC, zC) {
+         this.clearIsland(CC.baf2BeltIsland);
+         for (const ZC of CC.baf2BeltLineList) this.lines.set(ZC[0], cM(CC.baf2BeltIsland, ZC, zC));
+         this.shown = [...this.lines.values()]
+       }
+       applyMove(CC, zC, ZC) {
+         let {
+           name: QC,
+           pos: wC,
+           idx: bC
+         } = zC;
+         CC.changed = !0, CC.loop && (uM(CC, ZC), (0, SZ.B)(CC.items, CC.length, ZC, CC.cellsPerMs)), null !== QC && null !== wC ? (0, SZ.C)(CC.items, CC.length, lM(QC, ZC), wC, ZC, CC.cellsPerMs) : null !== QC ? CC.items.push(lM(QC, ZC)) : CC.items.length > bC && this.release((0, … [truncated]
+       }
+ ... (5 more added lines; see GitHub link above)
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L3450-L3470` → after: `L12384-L12503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R12384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L12384-L12503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L12384-L12503) · [Before (L3450-L3470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L3450-L3470)

```diff
-           intersects(qq, Eq, gq) {
-             let Yq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-               lq = arguments.length > 4 ? arguments[4] : void 0,
-               mq = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
-             const xq = new cq.d,
-               Aq = this.getClassName(),
-               uq = "InstancedLinesMesh" === Aq || "LinesMesh" === Aq || "GreasedLineMesh" === Aq ? this.intersectionThreshold : 0,
-               Bq = this.yR();
-             if (!this.fn) return xq;
-             if (!mq && (!qq.intersectsSphere(Bq.DYq, uq) || !qq.intersectsBox(Bq.boundingBox, uq))) return xq;
-             if (Yq) return xq.hit = !mq, xq.pickedMesh = mq ? null : this, xq.distance = mq ? 0 : Oq.q.Distance(qq.origin, Bq.DYq.center), xq.subMeshId = 0, xq;
-             if (!this._generatePointsArray()) return xq;
-             let Wq = null;
-             const Nq = this._scene.getIntersectingSubMeshCandidates(this, qq),
-               aq = Nq.length;
-             let Vq = !1;
- ... (5 more removed lines; see GitHub link above)
+       }
+       release(CC) {
+         null !== CC.kind && (CC.kind.release(CC.slot), CC.kind = null, CC.slot = -1, CC.hidden = !0, CC.drawn = NaN)
+       }
+     }
+     var tM = ZC(36483),
+       DM = ZC(38341);
+ 
+     function jM(CC) {
+       let {
+         depth: zC,
+         store: ZC,
+         t: wC
+       } = CC;
+       const bC = function(CC) {
+         const [zC, ZC] = (0, QC.useState)(CC.lastPlayerY());
+ ... (104 more added lines; see GitHub link above)
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L3472-L3490` → after: `L12505-L13043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R12505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L12505-L13043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L12505-L13043) · [Before (L3472-L3490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L3472-L3490)

```diff
-             }
-             if (!Vq) return xq.hit = !0, xq.pickedMesh = this, xq.distance = Oq.q.Distance(qq.origin, Bq.DYq.center), xq.subMeshId = -1, xq;
-             for (let Oq = 0; Oq < aq; Oq++) {
-               const Yq = Nq.data[Oq];
-               if (aq > 1 && !mq && !Yq.canIntersects(qq)) continue;
-               const lq = Yq.intersects(qq, this._positions, this.iYq(), Eq, gq);
-               if (lq && (Eq || !Wq || lq.distance < Wq.distance) && (Wq = lq, Wq.subMeshId = Yq._id, Wq._internalSubMeshId = Oq, Eq)) break
-             }
-             if (Wq) {
-               const Eq = lq ?? this.getWorldMatrix(),
-                 gq = Oq.o.Na[0],
-                 Yq = Oq.o.Na[1];
-               Oq.q.TransformCoordinatesToRef(qq.origin, Eq, gq), qq.direction.scaleToRef(Wq.distance, Yq);
-               const mq = Oq.q.TransformNormal(Yq, Eq).addInPlace(gq);
-               return xq.hit = !0, xq.distance = Oq.q.Distance(gq, mq), xq.pickedPoint = mq, xq.pickedMesh = this, xq.bu = Wq.bu || 0, xq.bv = Wq.bv || 0, xq.subMeshFaceId = Wq.faceId, xq.faceId = Wq.faceId + Nq.data[Wq._internalSubMeshId].indexStart / (-1 !== this.getClassName(). … [truncated]
-             }
- ... (3 more removed lines; see GitHub link above)
+             }(oC, qC, function(CC) {
+               const zC = CC.firstElementChild,
+                 ZC = zC ? zC.scrollHeight - zC.clientHeight : 0;
+               return CC.getBoundingClientRect().height + Math.max(0, ZC)
+             }(QC), FC, ib());
+           CC.style.top = `${WC}px`, CC.style.maxHeight = `${NC}px`
+         }))
+       }), [ZC]), (0, vb.jsx)("div", {
+         ref: bC,
+         className: Jw()("Baf2QuestHud", {
+           Expanded: zC
+         }),
+         children: wC
+       })
+     }
+ 
+ ... (523 more added lines; see GitHub link above)
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L3493-L3509` → after: `L13138-L13522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R13138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L13138-L13522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L13138-L13522) · [Before (L3493-L3509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L3493-L3509)

```diff
-           releaseSubMeshes() {
-             let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-             if (this.fn)
-               for (; this.fn.length;) this.fn[0].dispose(qq);
-             else this.fn = [];
-             return this
-           }
-           dispose(qq) {
-             let Eq, gq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-             const Yq = this.ZJ();
-             for (this._scene.useMaterialMeshMap && this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), Yq.freeActiveMeshes(), Yq.freeRenderingGroups … [truncated]
-               const qq = this._intersectionsInProgress[Eq],
-                 gq = qq._intersectionsInProgress.indexOf(this);
-               qq._intersectionsInProgress.splice(gq, 1)
-             }
-             this._intersectionsInProgress.length = 0;
- ... (1 more removed lines; see GitHub link above)
+           const nC = xM(bC, CC, zC, wC.pos, 1.1, 24);
+           nC && ZC.add(nC, bC, 0, !1)
+         }
+       }
+     }
+     const Sg = (0, QC.memo)((function(CC) {
+         let {
+           item: zC
+         } = CC;
+         return (0, vb.jsx)("div", {
+           className: "Baf2IslandLabelIcon",
+           children: (0, vb.jsx)(Kw.e, {
+             itemName: zC,
+             amount: 0
+           })
+         })
+ ... (369 more added lines; see GitHub link above)
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L3511-L3580` → after: `L13524-L13576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R13524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L13524-L13576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L13524-L13576) · [Before (L3511-L3580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L3511-L3580)

```diff
-               let qq = mq.includedOnlyMeshes.indexOf(this); - 1 !== qq && mq.includedOnlyMeshes.splice(qq, 1), qq = mq.excludedMeshes.indexOf(this), -1 !== qq && mq.excludedMeshes.splice(qq, 1);
-               const Eq = mq.getShadowGenerators();
-               if (Eq) {
-                 const gq = Eq.values();
-                 for (let Eq = gq.next(); !0 !== Eq.done; Eq = gq.next()) {
-                   const gq = Eq.value.getShadowMap();
-                   gq && gq.renderList && (qq = gq.renderList.indexOf(this), -1 !== qq && gq.renderList.splice(qq, 1))
-                 }
-               }
-             }
-             this.releaseSubMeshes(Yq._isDisposing);
-             const Oq = Yq.Ba();
-             if (null !== this._occlusionQuery && (this.isOcclusionQueryInProgress = !1, Oq.deleteQuery(this._occlusionQuery), this._occlusionQuery = null), Oq.wipeCaches(), Yq.Wk(this), this._parentContainer) {
-               const qq = this._parentContainer.meshes.indexOf(this);
-               qq > -1 && this._parentContainer.meshes.splice(qq, 1), this._parentContainer = null
-             }
- ... (54 more removed lines; see GitHub link above)
+               const zC = kZ(bC.box, 0),
+                 nC = kZ(bC.box, LZ(bC.box) - 1),
+                 fC = [Math.min(zC[0], nC[0]), Math.min(zC[1], nC[1]), Math.min(zC[2], nC[2])].map((CC => Math.floor(CC / ZC))),
+                 oC = [Math.max(zC[0], nC[0]), Math.max(zC[1], nC[1]), Math.max(zC[2], nC[2])].map((CC => Math.floor(CC / ZC)));
+               for (let ZC = fC[0]; ZC <= oC[0]; ZC++)
+                 for (let zC = fC[1]; zC <= oC[1]; zC++)
+                   for (let bC = fC[2]; bC <= oC[2]; bC++) {
+                     var wC;
+                     QC.set(`${ZC},${zC},${bC}`, null !== (wC = CC.getChunkVersion(ZC, zC, bC)) && void 0 !== wC ? wC : -1)
+                   }
+             }
+             return QC
+           }(CC, QC);
+         this.plans.getVersion() === this.storeVersion && (function(CC, zC) {
+           if (CC.size !== zC.size) return !1;
+           for (const [ZC, QC] of CC)
+ ... (37 more added lines; see GitHub link above)
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L3651-L3652` → after: `L13579-L13584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R13579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L13579-L13584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L13579-L13584) · [Before (L3651-L3652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L3651-L3652)

```diff
-           updateIndices(qq, Eq) {
-             return this
+         }
+         if (bC && this.startsBattery && this.goal) {
+           const [CC, zC, wC] = this.goal, bC = [];
+           for (const [QC, nC, fC] of rg) {
+             const oC = [CC + QC, zC + nC, wC + fC];
+             "Air" === ZC(oC) && bC.push(oC)
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L3654-L3660` → after: `L13586-L13595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R13586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L13586-L13595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L13586-L13595) · [Before (L3654-L3660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L3654-L3660)

```diff
-           createNormals(qq) {
-             const Eq = this.getVerticesData(mq.g.PositionKind),
-               gq = this.iYq();
-             let Yq;
-             return Yq = this.isVerticesDataPresent(mq.g.NormalKind) ? this.getVerticesData(mq.g.NormalKind) : [], xq.d.ComputeNormals(Eq, gq, Yq, {
-               useRightHandedSystem: this.ZJ().useRightHandedSystem
-             }), this.setVerticesData(mq.g.NormalKind, Yq, qq), this
+           if (bC.length > 0) {
+             var nC;
+             const CC = null !== (nC = QC.get("cell")) && void 0 !== nC ? nC : {
+               draw: {
+                 ghost: "cell",
+                 dim: !1
+               },
+               list: []
+             };
+             CC.list.push(...bC), QC.set("cell", CC)
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L3662-L3664` → after: `L13597-L13602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R13597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L13597-L13602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L13597-L13602) · [Before (L3662-L3664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L3662-L3664)

```diff
-           async optimizeIndicesAsync() {
-             const qq = this.iYq();
-             if (!qq) return this;
+         }
+         const fC = [...QC.keys()].sort(),
+           oC = [...fC.map((CC => `${CC}:${QC.get(CC).list.join(";")}`)), `cue:${wC.join(";")}`].join("|");
+         if (oC !== this.shownKey) {
+           this.shownKey = oC, this.clearMeshes(CC);
+           for (const zC of fC) {
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L3666-L3668` → after: `L13604-L13607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R13604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L13604-L13607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L13604-L13607) · [Before (L3666-L3668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L3666-L3668)

```diff
-               OptimizeIndices: Eq
-             } = await gq.e(342).then((() => gq(42308)));
-             return Eq(qq), this.setIndices(qq, this.getTotalVertices()), this
+               draw: ZC,
+               list: wC
+             } = QC.get(zC);
+             this.meshes.push(this.build(CC, ZC, wC))
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L3670-L3710` → after: `L13609-L13764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R13609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L13609-L13764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L13609-L13764) · [Before (L3670-L3710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L3670-L3710)

```diff
-           alignWithNormal(qq, Eq) {
-             Eq || (Eq = Qq.b.Y);
-             const gq = Oq.o.Na[0],
-               Yq = Oq.o.Na[1];
-             return Oq.q.CrossToRef(Eq, qq, Yq), Oq.q.CrossToRef(qq, Yq, gq), this.rotationQuaternion ? Oq.h.RotationQuaternionFromAxisToRef(gq, qq, Yq, this.rotationQuaternion) : Oq.q.RotationFromAxisToRef(gq, qq, Yq, this.rotation), this
-           }
-           _checkOcclusionQuery() {
-             return !1
-           }
-           disableEdgesRendering() {
-             throw (0, dq.m)("EdgesRenderer")
-           }
-           enableEdgesRendering(qq, Eq, gq) {
-             throw (0, dq.m)("EdgesRenderer")
-           }
-           getConnectedParticleSystems() {
- ... (25 more removed lines; see GitHub link above)
+           for (const [zC, ZC] of wC) this.cues.push(vg(CC, ag(zC, ZC), sg))
+         }
+       }
+       build(CC, zC, ZC) {
+         let {
+           ghost: QC,
+           dim: wC
+         } = zC;
+         const {
+           size: bC,
+           colour: nC,
+           alpha: fC
+         } = cg[QC], oC = ZC[0], qC = [], FC = [];
+         for (const [WC, NC, MC] of ZC) ig(qC, FC, [WC - oC[0] + .5, NC - oC[1] + .5, MC - oC[2] + .5], [bC, bC, bC]);
+         return CC.createGameMesh({
+           positions: qC,
+ ... (140 more added lines; see GitHub link above)
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L3713-L3733` → after: `L13767-L13768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R13767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L13767-L13768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L13767-L13768) · [Before (L3713-L3733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L3713-L3733)

```diff
-       Mq || (Mq = !0, (0, vq.g)("BABYLON.AbstractMesh", fq))
-     }(Nq = fq.prototype).createOrUpdateSubmeshesOctree ?? (Nq.createOrUpdateSubmeshesOctree = (0, dq.i)("AbstractMesh", "createOrUpdateSubmeshesOctree")), (aq = fq.prototype).getPhysicsImpostor ?? (aq.getPhysicsImpostor = (0, dq.i)("AbstractMesh", "getPhysicsImpostor")), (Vq = fq … [truncated]
-   },
-   40180: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       d: () => jq
-     });
-     var Yq = gq(37139),
-       lq = gq(37289),
-       Oq = gq(40176),
-       mq = gq(39879),
-       xq = gq(40040),
-       Aq = gq(40186),
-       cq = gq(40055),
-       uq = gq(39845),
-       Bq = gq(38653),
- ... (5 more removed lines; see GitHub link above)
+       return performance.now()
+     }
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L3735-L3736` → after: `L13770-L13772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R13770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L13770-L13772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L13770-L13772) · [Before (L3735-L3736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L3735-L3736)

```diff
-       get boundingBias() {
-         return this._boundingBias
+       constructor(CC, zC, ZC) {
+         let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ZS;
+         this.ticket = CC, this.sent = zC, this.backstopMs = ZC, this.now = QC, this.queuedAt = void 0, this.queuedAt = QC()
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L3738-L3739` → after: `L13774-L13777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R13774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L13774-L13777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L13774-L13777) · [Before (L3738-L3739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L3738-L3739)

```diff
-       set boundingBias(qq) {
-         this._boundingBias ? this._boundingBias.WG(qq) : this._boundingBias = qq.clone(), this._updateBoundingInfo(!0, null)
+       answered() {
+         const CC = this.now(),
+           zC = this.sent.leftAt(this.ticket);
+         return null !== zC && CC - zC > 4e3 || CC - this.queuedAt > this.backstopMs
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L3741-L3743` → after: `L13779-L13780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R13779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L13779-L13780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L13779-L13780) · [Before (L3741-L3743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L3741-L3743)

```diff
-       static CreateGeometryForMesh(qq) {
-         const Eq = new jq(jq.RandomId(), qq.ZJ());
-         return Eq.applyToMesh(qq), Eq
+       age() {
+         return this.now() - this.queuedAt
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L3745-L3746` → after: `L13782-L13785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R13782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L13782-L13785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L13782-L13785) · [Before (L3745-L3746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L3745-L3746)

```diff
-       get meshes() {
-         return this._meshes
+     }
+     class wS {
+       constructor() {
+         this.echoes = []
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L3748-L3755` → after: `L13787-L13788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R13787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L13787-L13788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L13787-L13788) · [Before (L3748-L3755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L3748-L3755)

```diff
-       constructor(qq, Eq, gq) {
-         let lq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-           Oq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
-           mq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
-         this.delayLoadState = 0, this._totalVertices = 0, this._isDisposed = !1, this._extend = {
-           minimum: new Yq.q(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
-           maximum: new Yq.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
-         }, this._indexBufferIsUpdatable = !1, this._positionsCache = [], this._parentContainer = null, this.useBoundingInfoFromGeometry = !1, this._scene = Eq || aq.b.LastCreatedScene, this._scene && (this.id = qq, this.uniqueId = this._scene.getUniqueId(), this._engine = this._s … [truncated]
+       add(CC) {
+         this.echoes = this.echoes.filter((CC => !CC.answered())), this.echoes.push(CC)
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L3757-L3758` → after: `L13790-L13792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R13790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L13790-L13792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L13790-L13792) · [Before (L3757-L3758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L3757-L3758)

```diff
-       get extend() {
-         return this._extend
+       answered() {
+         var CC, zC;
+         return null === (CC = null === (zC = this.echoes.at(-1)) || void 0 === zC ? void 0 : zC.answered()) || void 0 === CC || CC
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L3760-L3761` → after: `L13794-L13795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R13794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L13794-L13795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L13794-L13795) · [Before (L3760-L3761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L3760-L3761)

```diff
-       ZJ() {
-         return this._scene
+       agreeCounts() {
+         return this.echoes.slice(0, -1).every((CC => CC.answered()))
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L3763-L3764` → after: `L13797-L13799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R13797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L13797-L13799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L13797-L13799) · [Before (L3763-L3764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L3763-L3764)

```diff
-       Ba() {
-         return this._engine
+       age() {
+         var CC, zC;
+         return null !== (CC = null === (zC = this.echoes.at(-1)) || void 0 === zC ? void 0 : zC.age()) && void 0 !== CC ? CC : null
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L3766-L3767` → after: `L13801-L13802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R13801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L13801-L13802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L13801-L13802) · [Before (L3766-L3767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L3766-L3767)

```diff
-       isReady() {
-         return 1 === this.delayLoadState || 0 === this.delayLoadState
+       clear() {
+         this.echoes = []
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L3769-L3772` → after: `L13804-L13807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R13804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L13804-L13807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L13804-L13807) · [Before (L3769-L3772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L3769-L3772)

```diff
-       get doNotSerialize() {
-         for (let qq = 0; qq < this._meshes.length; qq++)
-           if (!this._meshes[qq].doNotSerialize) return !1;
-         return !0
+     }
+     class bS {
+       constructor(CC) {
+         this.send = CC, this.value = null, this.sent = null, this.echoes = new wS, this.down = !1, this.timer = null
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L3774-L3780` → after: `L13809-L13810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R13809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L13809-L13810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L13809-L13810) · [Before (L3774-L3780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L3774-L3780)

```diff
-       _rebuild() {
-         this._vertexArrayObjects && (this._vertexArrayObjects = {}), 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer"));
-         const qq = new Set;
-         for (const Eq in this._vertexBuffers) qq.add(this._vertexBuffers[Eq].getWrapperBuffer());
-         qq.forEach((qq => {
-           qq._rebuild()
-         }))
+       shown(CC) {
+         return null === this.value ? CC : this.down || this.value !== this.sent ? this.value : CC === this.sent && this.echoes.agreeCounts() || this.echoes.answered() ? (this.value = null, this.sent = null, this.echoes.clear(), CC) : this.value
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L3782-L3816` → after: `L13812-L13813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R13812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L13812-L13813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L13812-L13813) · [Before (L3782-L3816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L3782-L3816)

```diff
-       setAllVerticesData(qq, Eq) {
-         qq.applyToGeometry(this, Eq), this._notifyUpdate()
-       }
-       setVerticesData(qq, Eq) {
-         let gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-           Yq = arguments.length > 3 ? arguments[3] : void 0;
-         gq && Array.isArray(Eq) && (Eq = new Float32Array(Eq));
-         const lq = new mq.g(this._engine, Eq, qq, {
-           updatable: gq,
-           postponeInternalCreation: 0 === this._meshes.length,
-           stride: Yq,
-           label: "Geometry_" + this.id + "_" + qq
-         });
-         this.setVerticesBuffer(lq)
-       }
-       removeVerticesData(qq) {
- ... (19 more removed lines; see GitHub link above)
+       pendingFor(CC) {
+         return null !== this.value && this.value === this.sent && CC !== this.value ? this.echoes.age() : null
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L3818-L3821` → after: `L13815-L13816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R13815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L13815-L13816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L13815-L13816) · [Before (L3818-L3821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L3818-L3821)

```diff
-       updateVerticesDataDirectly(qq, Eq, gq) {
-         let Yq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-         const lq = this.getVertexBuffer(qq);
-         lq && (lq.updateDirectly(Eq, gq, Yq), this._notifyUpdate(qq))
+       assume(CC, zC) {
+         this.disarm(), this.down = !1, this.value = CC, this.sent = CC, this.echoes.clear(), this.echoes.add(zC)
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L3823-L3826` → after: `L13818-L13819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R13818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L13818-L13819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L13818-L13819) · [Before (L3823-L3826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L3823-L3826)

```diff
-       updateVerticesData(qq, Eq) {
-         let gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-         const Yq = this.getVertexBuffer(qq);
-         Yq && (Yq.update(Eq), qq === mq.g.PositionKind && this._updateBoundingInfo(gq, Eq), this._notifyUpdate(qq))
+       press() {
+         this.down = !0
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L3828-L3836` → after: `L13821-L13822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R13821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L13821-L13822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L13821-L13822) · [Before (L3828-L3836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L3828-L3836)

```diff
-       _updateBoundingInfo(qq, Eq) {
-         if (qq && this._updateExtend(Eq), this._resetPointsArrayCache(), qq) {
-           const qq = this._meshes;
-           for (const Eq of qq) {
-             Eq.hasBoundingInfo ? Eq.yR().reConstruct(this._extend.minimum, this._extend.maximum) : Eq.buildBoundingInfo(this._extend.minimum, this._extend.maximum);
-             const qq = Eq.fn;
-             for (const Eq of qq) Eq.refreshBoundingInfo()
-           }
-         }
+       drag(CC) {
+         this.value = CC, this.arm(this.down ? 1e3 : 400)
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L3838-L3846` → after: `L13824-L13825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R13824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L13824-L13825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L13824-L13825) · [Before (L3838-L3846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L3838-L3846)

```diff
-       _bind(qq, Eq, gq, Yq) {
-         if (!qq) return;
-         void 0 === Eq && (Eq = this._indexBuffer);
-         const lq = this.getVertexBuffers();
-         if (!lq) return;
-         if (Eq != this._indexBuffer || !this._vertexArrayObjects && !Yq) return void this._engine.bindBuffers(lq, Eq, qq, gq);
-         const Oq = Yq || this._vertexArrayObjects,
-           mq = this._engine;
-         Oq[qq.key] || (Oq[qq.key] = mq.recordVertexArrayObject(lq, Eq, qq, gq)), mq.bindVertexArrayObject(Oq[qq.key], Eq)
+       release() {
+         this.down = !1, this.flush()
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L3848-L3849` → after: `L13827-L13828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R13827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L13827-L13828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L13827-L13828) · [Before (L3848-L3849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L3848-L3849)

```diff
-       getTotalVertices() {
-         return this.isReady() ? this._totalVertices : 0
+       flush() {
+         this.disarm(), null !== this.value && this.value !== this.sent && (this.sent = this.value, this.echoes.add(this.send(this.value)))
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L3851-L3853` → after: `L13830-L13831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R13830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L13830-L13831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L13830-L13831) · [Before (L3851-L3853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L3851-L3853)

```diff
-       getVerticesData(qq, Eq, gq) {
-         const Yq = this.getVertexBuffer(qq);
-         return Yq ? Yq.getFloatData(this._totalVertices, gq || Eq && 1 !== this._meshes.length) : null
+       clear() {
+         this.disarm(), this.value = null, this.sent = null, this.echoes.clear(), this.down = !1
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L3855-L3860` → after: `L13833-L13836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R13833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L13833-L13836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L13833-L13836) · [Before (L3855-L3860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L3855-L3860)

```diff
-       copyVerticesData(qq, Eq) {
-         const gq = this.getVertexBuffer(qq);
-         if (!gq) return;
-         Eq[qq] || (Eq[qq] = new Float32Array(this._totalVertices * gq.getSize()));
-         const Yq = gq.getData();
-         Yq && (0, dq.d)(Yq, gq.getSize(), gq.type, gq.byteOffset, gq.byteStride, gq.normalized, this._totalVertices, Eq[qq])
+       arm(CC) {
+         this.disarm(), this.timer = setTimeout((() => {
+           this.timer = null, this.flush()
+         }), CC)
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L3862-L3864` → after: `L13838-L13844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R13838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L13838-L13844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L13838-L13844) · [Before (L3862-L3864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L3862-L3864)

```diff
-       isVertexBufferUpdatable(qq) {
-         const Eq = this._vertexBuffers[qq];
-         return !!Eq && Eq.isUpdatable()
+       disarm() {
+         null !== this.timer && (clearTimeout(this.timer), this.timer = null)
+       }
+     }
+     class nS {
+       constructor() {
+         this.pending = new Map
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L3866-L3867` → after: `L13846-L13852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R13846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L13846-L13852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L13846-L13852) · [Before (L3866-L3867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L3866-L3867)

```diff
-       getVertexBuffer(qq) {
-         return this.isReady() ? this._vertexBuffers[qq] : null
+       set(CC, zC, ZC) {
+         var QC;
+         const wC = null !== (QC = this.pending.get(CC)) && void 0 !== QC ? QC : {
+           on: zC,
+           echoes: new wS
+         };
+         wC.on = zC, wC.echoes.add(ZC), this.pending.set(CC, wC)
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L3869-L3870` → after: `L13854-L13860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R13854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L13854-L13860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L13854-L13860) · [Before (L3869-L3870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L3869-L3870)

```diff
-       getVertexBuffers() {
-         return this.isReady() ? this._vertexBuffers : null
+       shown(CC) {
+         let zC = CC;
+         for (const [ZC, {
+             on: QC,
+             echoes: wC
+           }] of this.pending) 0 !== (CC & ZC) === QC && wC.agreeCounts() || wC.answered() ? this.pending.delete(ZC) : zC = QC ? zC | ZC : zC & ~ZC;
+         return zC
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L3872-L3873` → after: `L13862-L13865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R13862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L13862-L13865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L13862-L13865) · [Before (L3872-L3873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L3872-L3873)

```diff
-       isVerticesDataPresent(qq) {
-         return this._vertexBuffers ? void 0 !== this._vertexBuffers[qq] : !!this._delayInfo && -1 !== this._delayInfo.indexOf(qq)
+       pendingMask() {
+         let CC = 0;
+         for (const zC of this.pending.keys()) CC |= zC;
+         return CC
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L3875-L3881` → after: `L13867-L13877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R13867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L13867-L13877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L13867-L13877) · [Before (L3875-L3881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L3875-L3881)

```diff
-       getVerticesDataKinds() {
-         const qq = [];
-         let Eq;
-         if (!this._vertexBuffers && this._delayInfo)
-           for (Eq in this._delayInfo) qq.push(Eq);
-         else
-           for (Eq in this._vertexBuffers) qq.push(Eq);
+       pendingFor(CC) {
+         let zC = null;
+         for (const [QC, {
+             on: wC,
+             echoes: bC
+           }] of this.pending) {
+           if (void 0 !== CC && 0 !== (CC & QC) === wC) continue;
+           const nC = bC.age();
+           var ZC;
+           if (null !== nC) zC = Math.max(null !== (ZC = zC) && void 0 !== ZC ? ZC : 0, nC)
+         }
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L3884-L3891` → after: `L13880-L13881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R13880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L13880-L13881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L13880-L13881) · [Before (L3884-L3891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L3884-L3891)

```diff
-       updateIndices(qq, Eq) {
-         let gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-         if (this._indexBuffer)
-           if (this._indexBufferIsUpdatable) {
-             const Yq = qq.length !== this._indices.length;
-             if (gq || (this._indices = qq.slice()), this._engine.updateDynamicIndexBuffer(this._indexBuffer, qq, Eq), Yq)
-               for (const qq of this._meshes) qq._createGlobalSubMesh(!0)
-           } else this.setIndices(qq, null, !0)
+       clear() {
+         this.pending.clear()
```

#### 110. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L3893-L3920` → after: `L13883-L13886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R13883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L13883-L13886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L13883-L13886) · [Before (L3893-L3920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L3893-L3920)

```diff
-       setIndexBuffer(qq, Eq, gq) {
-         let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
-         this._indices = [], this._indexBufferIsUpdatable = !1, this._indexBuffer = qq, this._totalVertices = Eq, this._totalIndices = gq, qq.is32Bits = null === Yq ? Eq > 65535 : Yq;
-         for (const lq of this._meshes) lq._createGlobalSubMesh(!0), lq.synchronizeInstances();
-         this._notifyUpdate()
-       }
-       setIndices(qq) {
-         let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-           gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-           Yq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-         this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indices = qq, this._indexBufferIsUpdatable = gq, 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, gq, "Geometry_" + this.id + "_Index … [truncated]
-         for (const lq of this._meshes) lq._createGlobalSubMesh(!Yq), lq.synchronizeInstances();
-         this._notifyUpdate()
-       }
-       getTotalIndices() {
-         return this.isReady() ? void 0 !== this._totalIndices ? this._totalIndices : this._indices.length : 0
- ... (12 more removed lines; see GitHub link above)
+     }
+     class fS {
+       constructor() {
+         this.dims = null, this.echoes = new wS, this.unmet = null
```

#### 111. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L3922-L3924` → after: `L13888-L13890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R13888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L13888-L13890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L13888-L13890) · [Before (L3922-L3924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L3922-L3924)

```diff
-       releaseForMesh(qq, Eq) {
-         const gq = this._meshes,
-           Yq = gq.indexOf(qq); - 1 !== Yq && (gq.splice(Yq, 1), this._vertexArrayObjects && qq._invalidateInstanceVertexArrayObject(), qq._geometry = null, 0 === gq.length && Eq && this.dispose())
+       shown(CC) {
+         var zC;
+         return this.dims && (oS(this.dims, CC) && this.echoes.agreeCounts() || this.echoes.answered()) && (oS(this.dims, CC) || (this.unmet = this.dims), this.dims = null, this.echoes.clear()), null !== (zC = this.dims) && void 0 !== zC ? zC : CC
```

#### 112. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L3926-L3931` → after: `L13892-L13894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R13892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L13892-L13894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L13892-L13894) · [Before (L3926-L3931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L3926-L3931)

```diff
-       applyToMesh(qq) {
-         if (qq._geometry === this) return;
-         const Eq = qq._geometry;
-         Eq && Eq.releaseForMesh(qq), this._vertexArrayObjects && qq._invalidateInstanceVertexArrayObject();
-         const gq = this._meshes;
-         qq._geometry = this, qq._internalAbstractMeshDataInfo._positions = null, this._scene.pushGeometry(this), gq.push(qq), this.isReady() ? this._applyToMesh(qq) : this._boundingInfo && qq.setBoundingInfo(this._boundingInfo)
+       takeUnmet() {
+         const CC = this.unmet;
+         return this.unmet = null, CC
```

#### 113. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L3933-L3942` → after: `L13896-L13897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R13896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L13896-L13897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L13896-L13897) · [Before (L3933-L3942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L3933-L3942)

```diff
-       _updateExtend() {
-         let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
-         if (this.useBoundingInfoFromGeometry && this._boundingInfo) this._extend = {
-           minimum: this._boundingInfo.minimum.clone(),
-           maximum: this._boundingInfo.maximum.clone()
-         };
-         else {
-           if (!qq && (qq = this.getVerticesData(mq.g.PositionKind), !qq)) return;
-           this._extend = (0, Nq.c)(qq, 0, this._totalVertices, this.boundingBias, 3)
-         }
+       set(CC, zC) {
+         this.dims = CC, this.echoes.add(zC)
```

#### 114. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L3944-L3948` → after: `L13899-L13900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R13899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L13899-L13900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L13899-L13900) · [Before (L3944-L3948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L3944-L3948)

```diff
-       _applyToMesh(qq) {
-         for (const Eq in this._vertexBuffers) {
-           const gq = this._vertexBuffers[Eq];
-           gq._buffer.getBuffer() || gq.create(), Eq === mq.g.PositionKind && (this._extend || this._updateExtend(), qq.buildBoundingInfo(this._extend.minimum, this._extend.maximum), qq._createGlobalSubMesh(qq.isUnIndexed), qq._updateBoundingInfo())
-         }!this._indexBuffer && this._indices && this._indices.length > 0 && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer")), qq._syncGeometryWithMorphTargetManager(), qq.synchronizeInstances()
+       pendingFor(CC) {
+         return null === this.dims || CC && oS(this.dims, CC) ? null : this.echoes.age()
```

#### 115. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L3950-L3952` → after: `L13902-L13903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R13902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L13902-L13903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L13902-L13903) · [Before (L3950-L3952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L3950-L3952)

```diff
-       _notifyUpdate(qq) {
-         this.onGeometryUpdated && this.onGeometryUpdated(this, qq), this._vertexArrayObjects && this._disposeVertexArrayObjects();
-         for (const Eq of this._meshes) Eq._markSubMeshesAsAttributesDirty()
+       clear() {
+         this.dims = null, this.unmet = null, this.echoes.clear()
```

#### 116. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L3954-L3955` → after: `L13905-L13913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R13905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L13905-L13913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L13905-L13913) · [Before (L3954-L3955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L3954-L3955)

```diff
-       load(qq, Eq) {
-         2 !== this.delayLoadState && (this.isReady() ? Eq && Eq() : (this.delayLoadState = 2, this._queueLoad(qq, Eq)))
+     }
+ 
+     function oS(CC, zC) {
+       return CC[0] === zC[0] && CC[1] === zC[1] && CC[2] === zC[2]
+     }
+     class qS {
+       constructor() {
+         let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ZS;
+         this.now = CC, this.taps = new Map
```

#### 117. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L3957-L3984` → after: `L13915-L13982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R13915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L13915-L13982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L13915-L13982) · [Before (L3957-L3984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L3957-L3984)

```diff
-       _queueLoad(qq, Eq) {
-         this.delayLoadingFile && (qq.addPendingData(this), (async () => {
-           try {
-             const gq = await qq._loadDelayedFileAsync(this.delayLoadingFile, !1, !0);
-             if (!this._delayLoadingFunction) return void qq.removePendingData(this);
-             this._delayLoadingFunction(JSON.parse(gq), this), this.delayLoadState = 1, this._delayInfo = [], qq.removePendingData(this);
-             const Yq = this._meshes,
-               lq = Yq.length;
-             for (let qq = 0; qq < lq; qq++) this._applyToMesh(Yq[qq]);
-             Eq && Eq()
-           } catch (gq) {
-             qq.removePendingData(this), qq.bM || Bq.b.Error(`Unable to delay load geometry "${this.id}" from "${this.delayLoadingFile}": ${gq}`)
-           }
-         })())
-       }
-       toLeftHanded() {
- ... (12 more removed lines; see GitHub link above)
+       tap(CC, zC, ZC) {
+         return !this.busy(CC) && (this.taps.set(CC, {
+           at: this.now(),
+           done: zC
+         }), ZC(), !0)
+       }
+       settle(CC) {
+         for (const [zC, ZC] of [...this.taps]) ZC.done(CC) && this.taps.delete(zC)
+       }
+       busy(CC) {
+         const zC = this.taps.get(CC);
+         return !!zC && (!(this.now() - zC.at >= 3e3) || (this.taps.delete(CC), !1))
+       }
+       busyIds() {
+         const CC = new Set;
+         for (const zC of [...this.taps.keys()]) this.busy(zC) && CC.add(zC);
+ ... (52 more added lines; see GitHub link above)
```

#### 118. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L3986-L3989` → after: `L13984-L14016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R13984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L13984-L14016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L13984-L14016) · [Before (L3986-L3989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L3986-L3989)

```diff
-         const gq = this.getVerticesData(mq.g.NormalKind, !1);
-         if (null != gq && gq.length > 0) {
-           for (let qq = 0; qq < gq.length; qq += 3) gq[qq + 2] = -gq[qq + 2];
-           this.setVerticesData(mq.g.NormalKind, gq, !1)
+       }
+       notify() {
+         for (const CC of this.listeners) CC()
+       }
+       clear() {
+         this.listeners.clear()
+       }
+     }
+     class PS {
+       constructor() {
+         this.lastAt = -1 / 0, this.lastUntil = -1 / 0
+       }
+       heard(CC, zC) {
+         this.lastAt = CC, this.lastUntil = CC + zC
+       }
+       answered(CC) {
+ ... (17 more added lines; see GitHub link above)
```

#### 119. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L3992-L3993` → after: `L14023-L14030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R14023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L14023-L14030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L14023-L14030) · [Before (L3992-L3993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L3992-L3993)

```diff
-       _resetPointsArrayCache() {
-         this._positions = null
+       CM(CC, zC, ZC) {
+         CC.predictSize(zC, ZC), this.picked = {
+           plans: CC,
+           ctrl: zC,
+           at: this.now()
+         };
+         const QC = this.link.send(Wz(zC, "plan", ...ZC));
+         this.hold.set(ZC, new QS(QC, this.link, this.link.answerMs, this.now))
```

#### 120. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L3995-L4001` → after: `L14032-L14033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R14032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L14032-L14033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L14032-L14033) · [Before (L3995-L4001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L3995-L4001)

```diff
-       _generatePointsArray() {
-         if (this._positions) return !0;
-         const qq = this.getVerticesData(mq.g.PositionKind);
-         if (!qq || 0 === qq.length) return !1;
-         for (let Eq = 3 * this._positionsCache.length, gq = this._positionsCache.length; Eq < qq.length; Eq += 3, ++gq) this._positionsCache[gq] = Yq.q.FromArray(qq, Eq);
-         for (let Eq = 0, gq = 0; Eq < qq.length; Eq += 3, ++gq) this._positionsCache[gq].set(qq[0 + Eq], qq[1 + Eq], qq[2 + Eq]);
-         return this._positionsCache.length = qq.length / 3, this._positions = this._positionsCache, !0
+       clear() {
+         this.hold.clear(), this.picked = null
```

#### 121. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4003-L4004` → after: `L14035-L14048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R14035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L14035-L14048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L14035-L14048) · [Before (L4003-L4004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4003-L4004)

```diff
-       bM() {
-         return this._isDisposed
+     }
+     class RS {
+       constructor(CC, zC, ZC) {
+         let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : WS;
+         this.plans = CC, this.readInterior = zC, this.link = ZC, this.now = QC, this.view = null, this.raw = null, this.looksOf = null, this.odConfirmed = !1, this.startedAt = null, this.size = void 0, this.flags = new nS, this.throttle = void 0, this.oneShots = void 0, this.list … [truncated]
+       }
+       set(CC) {
+         !CC.baf2RxOpen && this.raw && SS(this.raw.baf2RxAt) === SS(CC.baf2RxAt) || (this.size.clear(), this.flags.clear(), this.throttle.clear(), this.oneShots.clear(), this.startedAt = null), this.oneShots.settle(CC), this.bp(CC)
+       }
+       get() {
+         return this.view
+       }
+       onSizeNotTaken(CC) {
+         this.size.notTaken = CC
```

#### 122. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4006-L4012` → after: `L14050-L14067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R14050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L14050-L14067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L14050-L14067) · [Before (L4006-L4012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4006-L4012)

```diff
-       _disposeVertexArrayObjects() {
-         if (this._vertexArrayObjects) {
-           for (const gq in this._vertexArrayObjects) this._engine.releaseVertexArrayObject(this._vertexArrayObjects[gq]);
-           this._vertexArrayObjects = {};
-           const qq = this._meshes,
-             Eq = qq.length;
-           for (let gq = 0; gq < Eq; gq++) qq[gq]._invalidateInstanceVertexArrayObject()
+       resize(CC) {
+         this.raw && (this.size.CM(this.plans, this.raw.baf2RxAt, CC), this.bp(this.raw))
+       }
+       toggleStarter() {
+         if (!this.raw) return;
+         const CC = this.raw.baf2RxAt;
+         this.plans.setStarter(CC, !this.plans.showsStarter(CC)), this.bp(this.raw)
+       }
+       toggleGuide() {
+         this.plans.setGuide(!this.plans.guideOn()), this.raw && this.bp(this.raw)
+       }
+       confirmOverdrive() {
+         this.odConfirmed = !0, this.raw && this.bp(this.raw)
+       }
+       send(CC) {
+         if (this.raw) {
+ ... (2 more added lines; see GitHub link above)
```

#### 123. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4016-L4066` → after: `L14115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R14115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L14115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L14115) · [Before (L4016-L4066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4016-L4066)

```diff
-         const qq = this._meshes,
-           Eq = qq.length;
-         let gq;
-         for (gq = 0; gq < Eq; gq++) this.releaseForMesh(qq[gq]);
-         this._meshes.length = 0, this._disposeVertexArrayObjects();
-         for (const Yq in this._vertexBuffers) this._vertexBuffers[Yq].dispose();
-         if (this._vertexBuffers = {}, this._totalVertices = 0, this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null, this._indices = [], this.delayLoadState = 0, this.delayLoadingFile = null, this._delayLoadingFunction = null, this._delayI … [truncated]
-           const qq = this._parentContainer.geometries.indexOf(this);
-           qq > -1 && this._parentContainer.geometries.splice(qq, 1), this._parentContainer = null
-         }
-         this._isDisposed = !0
-       }
-       copy(qq) {
-         const Eq = new jq(qq, this._scene),
-           gq = this.iYq(void 0, !0);
-         gq && Eq.setIndices(gq);
- ... (35 more removed lines; see GitHub link above)
+         this.closed(), this.throttle.clear(), this.flags.clear(), this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.raw = null, this.looksOf = null, this.listeners.clear()
```

#### 124. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4068-L4070` → after: `L14117-L14119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R14117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L14117-L14119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L14117-L14119) · [Before (L4068-L4070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4068-L4070)

```diff
-       serialize() {
-         const qq = {};
-         return qq.id = this.id, qq.uniqueId = this.uniqueId, qq.updatable = this._updatable, Wq.b && Wq.b.HasTags(this) && (qq.tags = Wq.b.GetTags(this)), qq
+       command(CC) {
+         for (var zC = arguments.length, ZC = new Array(zC > 1 ? zC - 1 : 0), QC = 1; QC < zC; QC++) ZC[QC - 1] = arguments[QC];
+         return Wz(this.raw.baf2RxAt, CC, ...ZC)
```

#### 125. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4072-L4073` → after: `L14121-L14122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R14121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L14121-L14122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L14121-L14122) · [Before (L4072-L4073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4072-L4073)

```diff
-       _toNumberArray(qq) {
-         return Array.isArray(qq) ? qq : Array.prototype.slice.call(qq)
+       echo(CC) {
+         return new QS(CC, this.link, this.link.answerMs, this.now)
```

#### 126. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4075-L4077` → after: `L14124-L14170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R14124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L14124-L14170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L14124-L14170) · [Before (L4075-L4077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4075-L4077)

```diff
-       clearCachedData() {
-         this._totalIndices = this._indices.length, this._indices = [], this._resetPointsArrayCache();
-         for (const qq in this._vertexBuffers) Object.prototype.hasOwnProperty.call(this._vertexBuffers, qq) && (this._vertexBuffers[qq]._buffer._data = null)
+       bp(CC) {
+         var zC;
+         this.raw = CC;
+         const ZC = this.flags.shown(CC.baf2RxFlags),
+           QC = {
+             ...CC,
+             baf2RxFlags: ZC,
+             baf2RxTarget: this.throttle.shown(CC.baf2RxTarget),
+             baf2RxState: MS(CC, ZC)
+           },
+           wC = this.size.shown(QC.baf2RxDims),
+           bC = this.throttle.pendingFor(),
+           nC = [this.throttle.pendingFor(CC.baf2RxTarget), this.flags.pendingFor(CC.baf2RxFlags), this.size.pendingFor(CC.baf2RxDims)].filter((CC => null !== CC)),
+           fC = nC.length > 0 ? Math.max(...nC) : null,
+           oC = this.oneShots.busyIds(),
+           qC = QC.baf2RxAt;
+ ... (31 more added lines; see GitHub link above)
```

#### 127. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4079-L4081` → after: `L14172-L14176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R14172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L14172-L14176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L14172-L14176) · [Before (L4079-L4081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4079-L4081)

```diff
-       serializeVerticeData() {
-         const qq = this.serialize();
-         return this.isVerticesDataPresent(mq.g.PositionKind) && (qq.positions = this._toNumberArray(this.getVerticesData(mq.g.PositionKind)), this.isVertexBufferUpdatable(mq.g.PositionKind) && (qq.positionsUpdatable = !0)), this.isVerticesDataPresent(mq.g.NormalKind) && (qq.norma … [truncated]
+     }
+     class AS {
+       constructor(CC, zC) {
+         let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : WS;
+         this.plans = CC, this.view = null, this.size = void 0, this.oneShots = void 0, this.listeners = new pS, this.redraw = null, this.size = new GS(zC, ZC), this.oneShots = new qS(ZC)
```

#### 128. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4083-L4085` → after: `L14178-L14179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R14178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L14178-L14179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L14178-L14179) · [Before (L4083-L4085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4083-L4085)

```diff
-       static ExtractFromMesh(qq, Eq) {
-         const gq = qq._geometry;
-         return gq ? gq.copy(Eq) : null
+       set(CC) {
+         !CC.baf2BatOpen && this.view && SS(this.view.status.baf2BatAt) === SS(CC.baf2BatAt) || (this.size.clear(), this.oneShots.clear()), this.oneShots.settle(CC), this.bp(CC)
```

#### 129. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4087-L4088` → after: `L14181-L14184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R14181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L14181-L14184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L14181-L14184) · [Before (L4087-L4088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4087-L4088)

```diff
-       static RandomId() {
-         return uq.f.RandomId()
+       tap(CC, zC) {
+         if (!this.view) return;
+         const ZC = gS(this.view.status);
+         this.oneShots.tap(CC, (CC => gS(CC) !== ZC), zC) && this.bp(this.view.status)
```

#### 130. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4090-L4093` → after: `L14186-L14187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R14186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L14186-L14187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L14186-L14187) · [Before (L4090-L4093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4090-L4093)

```diff
-       static _GetGeometryByLoadedUniqueId(qq, Eq) {
-         for (let gq = 0; gq < Eq.geometries.length; gq++)
-           if (Eq.geometries[gq]._loadedUniqueId === qq) return Eq.geometries[gq];
-         return null
+       get() {
+         return this.view
```

#### 131. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4095-L4222` → after: `L14189-L14190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R14189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L14189-L14190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L14189-L14190) · [Before (L4095-L4222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4095-L4222)

```diff
-       static _ImportGeometry(qq, Eq) {
-         const gq = Eq.ZJ(),
-           Yq = qq.geometryUniqueId,
-           Oq = qq.geometryId;
-         if (Yq || Oq) {
-           const qq = Yq ? this._GetGeometryByLoadedUniqueId(Yq, gq) : gq.getGeometryById(Oq);
-           qq && qq.applyToMesh(Eq)
-         } else if (qq instanceof ArrayBuffer) {
-           const gq = Eq._binaryInfo;
-           if (gq.positionsAttrDesc && gq.positionsAttrDesc.count > 0) {
-             const Yq = new Float32Array(qq, gq.positionsAttrDesc.offset, gq.positionsAttrDesc.count);
-             Eq.setVerticesData(mq.g.PositionKind, Yq, !1)
-           }
-           if (gq.normalsAttrDesc && gq.normalsAttrDesc.count > 0) {
-             const Yq = new Float32Array(qq, gq.normalsAttrDesc.offset, gq.normalsAttrDesc.count);
-             Eq.setVerticesData(mq.g.NormalKind, Yq, !1)
- ... (112 more removed lines; see GitHub link above)
+       onSizeNotTaken(CC) {
+         this.size.notTaken = CC
```

#### 132. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4224-L4259` → after: `L14192-L14193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R14192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L14192-L14193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L14192-L14193) · [Before (L4224-L4259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4224-L4259)

```diff
-       static _CleanMatricesWeights(qq, Eq) {
-         const gq = .001;
-         if (!Aq.e.CleanBoneMatrixWeights) return;
-         let Yq;
-         if (!(qq.skeletonId > -1)) return;
-         {
-           const gq = Eq.ZJ().getLastSkeletonById(qq.skeletonId);
-           if (!gq) return;
-           Yq = gq.bones.length
-         }
-         const lq = Eq.getVerticesData(mq.g.MatricesIndicesKind),
-           Oq = Eq.getVerticesData(mq.g.MatricesIndicesExtraKind),
-           xq = qq.matricesWeights,
-           cq = qq.matricesWeightsExtra,
-           uq = qq.numBoneInfluencer,
-           Bq = xq.length;
- ... (20 more removed lines; see GitHub link above)
+       resize(CC) {
+         this.view && (this.size.CM(this.plans, this.view.status.baf2BatAt, CC), this.bp(this.view.status))
```

#### 133. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4261-L4263` → after: `L14195-L14294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R14195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L14195-L14294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L14195-L14294) · [Before (L4261-L4263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4261-L4263)

```diff
-       static Parse(qq, Eq, gq) {
-         const lq = new jq(qq.id, Eq, void 0, qq.updatable);
-         return lq._loadedUniqueId = qq.uniqueId, Wq.b && Wq.b.AddTagsTo(lq, qq.tags), qq.delayLoadingFile ? (lq.delayLoadState = 4, lq.delayLoadingFile = gq + qq.delayLoadingFile, lq._boundingInfo = new cq.d(Yq.q.FromArray(qq.boundingBoxMinimum), Yq.q.FromArray(qq.boundingBoxMaxi … [truncated]
+       toggleGuide() {
+         this.plans.setGuide(!this.plans.guideOn()), this.view && this.bp(this.view.status)
+       }
+       subscribe(CC) {
+         return this.listeners.subscribe(CC)
+       }
+       dispose() {
+         this.oneShots.clear(), null !== this.redraw && (clearTimeout(this.redraw), this.redraw = null), this.view = null, this.listeners.clear()
+       }
+       bp(CC) {
+         const zC = this.size.shown(CC.baf2BatDims),
+           ZC = this.oneShots.busyIds();
+         this.view = {
+           status: CC,
+           dims: zC,
+           HW: vo(zC, CC.baf2BatDims) ? CC.baf2BatCapacity : go(...zC),
+ ... (84 more added lines; see GitHub link above)
```

#### 134. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4265-L4284` → after: `L14296-L14301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R14296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L14296-L14301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L14296-L14301) · [Before (L4265-L4284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4265-L4284)

```diff
-     }
-   },
-   40221: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => Bq,
-       c: () => aq
-     });
-     var Yq = gq(37139),
-       lq = gq(38653),
-       Oq = gq(40197),
-       mq = gq(40163),
-       xq = gq(38649),
-       Aq = gq(40199),
-       cq = gq(39879),
-       uq = gq(37171);
-     class Bq extends Oq.c {
- ... (4 more removed lines; see GitHub link above)
+       fR(CC) {
+         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
+         const ZC = CC.baf2RxAlarmAt.join(",");
+         let QC = this.snapshot.boomAt;
+         if (CC.baf2RxAlarmBoom) this.byReactor.delete(ZC), QC = zC;
+         else if (CC.baf2RxAlarmDamage <= 0) this.byReactor.delete(ZC);
```

#### 135. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4286-L4287` → after: `L14303-L14309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R14303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L14303-L14309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L14303-L14309) · [Before (L4286-L4287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4286-L4287)

```diff
-           const qq = Eq.yR();
-           this.buildBoundingInfo(qq.minimum, qq.maximum)
+           var wC;
+           this.byReactor.set(ZC, {
+             damage: CC.baf2RxAlarmDamage,
+             secs: null !== (wC = CC.baf2RxAlarmSecs) && void 0 !== wC ? wC : null,
+             hot: !0 === CC.baf2RxAlarmHot,
+             receivedAt: zC
+           })
```

#### 136. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4289` → after: `L14311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R14311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L14311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L14311) · [Before (L4289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4289)

```diff
-         this._syncSubMeshes()
+         this.bp(QC)
```

#### 137. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4291-L4292` → after: `L14313-L14316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R14313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L14313-L14316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L14313-L14316) · [Before (L4291-L4292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4291-L4292)

```diff
-       getClassName() {
-         return "InstancedMesh"
+       retain(CC) {
+         let zC = !1;
+         for (const ZC of [...this.byReactor.keys()]) CC.has(ZC) || (this.byReactor.delete(ZC), zC = !0);
+         zC && this.bp(this.snapshot.boomAt)
```

#### 138. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4294-L4295` → after: `L14318-L14319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R14318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L14318-L14319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L14318-L14319) · [Before (L4294-L4295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4294-L4295)

```diff
-       get lightSources() {
-         return this._sourceMesh._lightSources
+       has(CC) {
+         return this.byReactor.has(CC)
```

#### 139. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4297-L4301` → after: `L14321-L14322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R14321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L14321-L14322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L14321-L14322) · [Before (L4297-L4301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4297-L4301)

```diff
-       _resyncLightSources() {}
-       _resyncLightSource() {}
-       _removeLightSource() {}
-       get receiveShadows() {
-         return this._sourceMesh.receiveShadows
+       get() {
+         return this.snapshot
```

#### 140. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4303-L4304` → after: `L14324-L14327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R14324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L14324-L14327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L14324-L14327) · [Before (L4303-L4304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4303-L4304)

```diff
-       set receiveShadows(qq) {
-         this._sourceMesh?.receiveShadows !== qq && lq.b.Warn("Setting receiveShadows on an instanced mesh has no effect")
+       subscribe(CC) {
+         return this.listeners.add(CC), () => {
+           this.listeners.delete(CC)
+         }
```

#### 141. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4306-L4307` → after: `L14329-L14330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R14329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L14329-L14330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L14329-L14330) · [Before (L4306-L4307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4306-L4307)

```diff
-       get material() {
-         return this._sourceMesh.material
+       dispose() {
+         this.listeners.clear(), this.byReactor.clear()
```

#### 142. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4309-L4310` → after: `L14332-L14339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R14332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L14332-L14339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L14332-L14339) · [Before (L4309-L4310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4309-L4310)

```diff
-       set material(qq) {
-         this._sourceMesh?.material !== qq && lq.b.Warn("Setting material on an instanced mesh has no effect")
+       bp(CC) {
+         let zC = null;
+         for (const ZC of this.byReactor.values())(!zC || ZC.damage > zC.damage) && (zC = ZC);
+         this.snapshot = {
+           alarm: zC,
+           boomAt: CC
+         };
+         for (const ZC of this.listeners) ZC()
```

#### 143. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4312-L4313` → after: `L14341-L14351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R14341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L14341-L14351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L14341-L14351) · [Before (L4312-L4313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4312-L4313)

```diff
-       get visibility() {
-         return this._sourceMesh.visibility
+     }
+     const vS = {
+       formed: {
+         colour: [1, 1, .85],
+         ms: 1200,
+         thick: .18
+       },
+       on: {
+         colour: [.45, 1, .35],
+         ms: 900,
+         thick: .14
```

#### 144. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4315-L4316` → after: `L14353-L14377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R14353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L14353-L14377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L14353-L14377) · [Before (L4315-L4316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4315-L4316)

```diff
-       set visibility(qq) {
-         this._sourceMesh?.visibility !== qq && lq.b.Warn("Setting visibility on an instanced mesh has no effect")
+     };
+ 
+     function eS(CC) {
+       return [CC[0], CC[1], CC[2]]
+     }
+ 
+     function hS(CC) {
+       return `${CC[0]},${CC[1]},${CC[2]}`
+     }
+     class KS {
+       constructor(CC) {
+         if (this.plans = CC, this.flashedAt = 0, this.levels = new Map, this.glows = [], this.devLog = null, this.devAccessor = () => {
+             var CC;
+             return {
+               active: this.glows.flatMap((CC => {
+                 let {
+ ... (9 more added lines; see GitHub link above)
```

#### 145. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4318-L4319` → after: `L14379-L14381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R14379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L14379-L14381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L14379-L14381) · [Before (L4318-L4319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4318-L4319)

```diff
-       get skeleton() {
-         return this._sourceMesh.skeleton
+       glowLog() {
+         var CC;
+         return null !== (CC = this.devLog) && void 0 !== CC ? CC : []
```

#### 146. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4321-L4322` → after: `L14383-L14418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R14383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L14383-L14418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L14383-L14418) · [Before (L4321-L4322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4321-L4322)

```diff
-       set skeleton(qq) {
-         this._sourceMesh?.skeleton !== qq && lq.b.Warn("Setting skeleton on an instanced mesh has no effect")
+       check(CC, zC, ZC) {
+         const QC = new Set(zC.map((CC => hS(CC.box.ctrl))));
+         for (const nC of function(CC, zC) {
+             const ZC = [],
+               QC = new Map(CC);
+             CC.clear();
+             for (const wC of zC) {
+               const zC = Rg(wC.box.ctrl),
+                 bC = wC.formed ? wC.level : 0;
+               CC.set(zC, bC), bC > 0 && 0 === QC.get(zC) && ZC.push(wC)
+             }
+             return ZC
+           }(this.levels, this.plans.all())) QC.has(hS(nC.box.ctrl)) && this.show(CC, nC, "on", ZC);
+         const wC = this.plans.lastFormed();
+         if (null === wC || wC.receivedAt <= this.flashedAt) return null;
+         this.flashedAt = wC.receivedAt;
+ ... (20 more added lines; see GitHub link above)
```

#### 147. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4324-L4325` → after: `L14420-L14427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R14420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L14420-L14427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L14420-L14427) · [Before (L4324-L4325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4324-L4325)

```diff
-       get renderingGroupId() {
-         return this._sourceMesh.renderingGroupId
+       dispose(CC) {
+         for (const {
+             mesh: ZC
+           }
+           of this.glows) CC.disposeGameMesh(ZC);
+         this.glows = [], this.levels.clear();
+         const zC = "undefined" !== typeof window ? window : null;
+         (null === zC || void 0 === zC ? void 0 : zC.baf2Glows) === this.devAccessor && delete zC.baf2Glows
```

#### 148. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4327-L4328` → after: `L14429-L14447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R14429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L14429-L14447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L14429-L14447) · [Before (L4327-L4328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4327-L4328)

```diff
-       set renderingGroupId(qq) {
-         this._sourceMesh && qq !== this._sourceMesh.renderingGroupId && lq.b.Warn("Note - setting renderingGroupId of an instanced mesh has no effect on the scene")
+       show(CC, zC, ZC, QC) {
+         const {
+           lo: wC,
+           hi: bC
+         } = ro(zC.box);
+         let nC = null;
+         this.devLog && (nC = {
+           glow: ZC,
+           ctrl: eS(zC.box.ctrl),
+           lo: eS(wC),
+           hi: eS(bC),
+           startMs: QC,
+           endMs: null
+         }, this.devLog.push(nC), this.devLog.length > 64 && this.devLog.shift()), this.glows.push({
+           mesh: this.build(CC, ZC, so(wC, bC, vS[ZC].thick)),
+           glow: ZC,
+ ... (3 more added lines; see GitHub link above)
```

#### 149. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4330-L4331` → after: `L14449-L14456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R14449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L14449-L14456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L14449-L14456) · [Before (L4330-L4331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4330-L4331)

```diff
-       get meshBlendingTag() {
-         return this._sourceMesh.meshBlendingTag
+       build(CC, zC, ZC) {
+         const QC = vg(CC, ZC, {
+           rgb: vS[zC].colour,
+           alpha: 1
+         });
+         return CC.setGameMesh(QC, {
+           visibility: 0
+         }), QC
```

#### 150. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4333-L4334` → after: `L14458-L14492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R14458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L14458-L14492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L14458-L14492) · [Before (L4333-L4334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4333-L4334)

```diff
-       set meshBlendingTag(qq) {
-         this._sourceMesh && qq !== this._sourceMesh.meshBlendingTag && lq.b.Warn("Setting meshBlendingTag on an instanced mesh has no effect")
+     }
+     const YS = 1 / .6,
+       dS = {
+         colours: [
+           [150, 150, 156],
+           [104, 104, 110]
+         ],
+         alpha: .55,
+         size: [.16, .3],
+         life: [1.2, 2],
+         power: [.3, .6],
+         lift: .15,
+         spread: .15,
+         count: 1,
+         blendMode: sf.d.Standard,
+         soft: !0
+ ... (19 more added lines; see GitHub link above)
```

#### 151. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4336-L4337` → after: `L14494-L14535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R14494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L14494-L14535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L14494-L14535) · [Before (L4336-L4337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4336-L4337)

```diff
-       getTotalVertices() {
-         return this._sourceMesh ? this._sourceMesh.getTotalVertices() : 0
+     }
+     const ES = HS([150, 225, 255]),
+       lS = HS([185, 145, 255]),
+       XS = ["Deep Drill", "Shatter Mill", "Sky Tap"];
+ 
+     function cS(CC) {
+       const zC = Ez[CC];
+       return null === zC.fuelSlot || wZ(zC) ? XS.includes(CC) ? lS : ES : dS
+     }
+     const uS = {
+         kind: "smokePuff"
+       },
+       rS = [.2, .025, .2];
+ 
+     function sS(CC, zC) {
+       const [
+ ... (26 more added lines; see GitHub link above)
```

#### 152. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4339-L4340` → after: `L14537-L14540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R14537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L14537-L14540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L14537-L14540) · [Before (L4339-L4340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4339-L4340)

```diff
-       getTotalIndices() {
-         return this._sourceMesh.getTotalIndices()
+     }
+     class TS {
+       constructor(CC) {
+         this.fixed = CC, this.particles = new Map, this.lastFrame = -1, this.at = [0, 0, 0]
```

#### 153. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4342-L4343` → after: `L14542-L14555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R14542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L14542-L14555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L14542-L14555) · [Before (L4342-L4343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4342-L4343)

```diff
-       get Plq() {
-         return this._sourceMesh
+       puff(CC, zC, ZC) {
+         var QC;
+         if (ZC === this.lastFrame) return !1;
+         this.lastFrame = ZC;
+         const wC = this.at;
+         wC[0] = zC[0] + .5, wC[1] = zC[1] + 1.025, wC[2] = zC[2] + .5;
+         const bC = null !== (QC = this.fixed) && void 0 !== QC ? QC : fC() ? mS : dS;
+         let nC = this.particles.get(bC);
+         return nC || (nC = CC.createParticles(function(CC) {
+           return sS(CC, Math.ceil(12 * CC.count * CC.life[1]) + CC.count)
+         }(bC), {
+           pos: wC,
+           half: rS
+         }), this.particles.set(bC, nC)), nC.moveTo(wC), nC.emit(bC.count), !0
```

#### 154. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4345-L4346` → after: `L14557-L14559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R14557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L14557-L14559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L14557-L14559) · [Before (L4345-L4346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4345-L4346)

```diff
-       get geometry() {
-         return this._sourceMesh._geometry
+       dispose() {
+         for (const CC of this.particles.values()) CC.stop();
+         this.particles.clear()
```

#### 155. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4348-L4349` → after: `L14561-L14564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R14561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L14561-L14564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L14561-L14564) · [Before (L4348-L4349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4348-L4349)

```diff
-       createInstance(qq) {
-         return this._sourceMesh.createInstance(qq)
+     }
+     class aS {
+       constructor() {
+         this.pufferList = [], this.pufferIndexByStyle = new Map, this.pufferIndexById = new Uint8Array(65536), this.indexed = !1, this.hits = [], this.sources = [], this.found = [], this.origin = [0, 0, 0], this.scanRow = 0, this.cursor = 0, this.budget = 0, this.lastMs = 0, this … [truncated]
```

#### 156. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4351-L4353` → after: `L14566-L14576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R14566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L14566-L14576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L14566-L14576) · [Before (L4351-L4353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4351-L4353)

```diff
-       isReady() {
-         let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         return this._sourceMesh.isReady(qq, !0)
+       index(CC) {
+         this.indexed = !0;
+         for (const zC of hz) {
+           const ZC = cS(zC);
+           for (let QC = 1; QC <= 4; QC++) {
+             const wC = CC.blockNameToBlockId(`${zC}|meta|rot${QC}|Running`, !0);
+             if (null === wC) continue;
+             let bC = this.pufferIndexByStyle.get(ZC);
+             void 0 === bC && (bC = this.pufferList.push(new TS(ZC === dS ? null : ZC)) - 1, this.pufferIndexByStyle.set(ZC, bC)), this.pufferIndexById[wC] = bC + 1
+           }
+         }
```

#### 157. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4355-L4356` → after: `L14578-L14582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R14578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L14578-L14582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L14578-L14582) · [Before (L4355-L4356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4355-L4356)

```diff
-       getVerticesData(qq, Eq, gq) {
-         return this._sourceMesh.getVerticesData(qq, Eq, gq)
+       onAfterRender(CC, zC) {
+         this.indexed || this.index(CC);
+         const ZC = performance.now(),
+           QC = 0 === this.lastMs ? 0 : Math.min(ZC - this.lastMs, 250) / 1e3;
+         this.lastMs = ZC, this.frame++, CC.particlesEnabled() ? (this.scan(CC, zC), this.puff(CC, QC)) : this.sources = []
```

#### 158. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4358-L4359` → after: `L14584-L14607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R14584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L14584-L14607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L14584-L14607) · [Before (L4358-L4359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4358-L4359)

```diff
-       copyVerticesData(qq, Eq) {
-         this._sourceMesh.copyVerticesData(qq, Eq)
+       dispose() {
+         for (const CC of this.pufferList) CC.dispose();
+         this.sources = [], this.found = []
+       }
+       scan(CC, zC) {
+         0 === this.scanRow && (this.origin = [Math.floor(zC[0]) - 12, Math.floor(zC[1]) - 6, Math.floor(zC[2]) - 12]);
+         const ZC = Math.min(this.scanRow + 16, 325),
+           [QC, wC, bC] = this.origin,
+           nC = this.hits;
+         nC.length = 0;
+         for (let fC = this.scanRow; fC < ZC; fC++) {
+           const zC = QC + fC % 25,
+             ZC = wC + Math.floor(fC / 25);
+           CC.scanBlocks(zC, ZC, bC, zC + 1, ZC + 1, bC + 25, this.pufferIndexById, nC)
+         }
+         for (let fC = 0; fC < nC.length; fC += 4) {
+ ... (8 more added lines; see GitHub link above)
```

#### 159. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4361-L4362` → after: `L14609-L14617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R14609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L14609-L14617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L14609-L14617) · [Before (L4361-L4362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4361-L4362)

```diff
-       getVertexBuffer(qq, Eq) {
-         return this._sourceMesh.getVertexBuffer(qq, Eq)
+       puff(CC, zC) {
+         const ZC = this.sources.length;
+         if (0 !== ZC) {
+           this.budget = Math.min(this.budget + Math.min(ZC / 1.2, 12) * zC, 2);
+           for (let zC = 0; zC < ZC && this.budget >= 1; zC++) {
+             const zC = this.sources[this.cursor % ZC];
+             this.cursor = (this.cursor + 1) % ZC, CC.getBlockId(zC.pos[0], zC.pos[1], zC.pos[2]) === zC.SF && (zC.puffer.puff(CC, zC.pos, this.frame) && this.budget--)
+           }
+         } else this.budget = 0
```

#### 160. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4364-L4365` → after: `L14619-L14664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R14619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L14619-L14664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L14619-L14664) · [Before (L4364-L4365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4364-L4365)

```diff
-       setVerticesData(qq, Eq, gq, Yq) {
-         return this.Plq && this.Plq.setVerticesData(qq, Eq, gq, Yq), this.Plq
+     }
+     const tS = {
+         ...HS([190, 255, 150]),
+         size: [.16, .26],
+         life: [.6, 1],
+         power: [1, 1.8],
+         count: 5
+       },
+       DS = [
+         [1, 0, 0],
+         [-1, 0, 0],
+         [0, 1, 0],
+         [0, -1, 0],
+         [0, 0, 1],
+         [0, 0, -1]
+       ];
+ ... (30 more added lines; see GitHub link above)
```

#### 161. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4367-L4368` → after: `L14666-L14700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R14666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L14666-L14700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L14666-L14700) · [Before (L4367-L4368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4367-L4368)

```diff
-       updateVerticesData(qq, Eq, gq, Yq) {
-         return this.Plq && this.Plq.updateVerticesData(qq, Eq, gq, Yq), this.Plq
+       return bC
+     }
+ 
+     function BS(CC, zC) {
+       const {
+         lo: ZC,
+         hi: QC
+       } = ro(zC), wC = [];
+       for (let bC = ZC[0]; bC < QC[0]; bC++)
+         for (let zC = ZC[1]; zC < QC[1]; zC++) {
+           const nC = bC === ZC[0] || bC === QC[0] - 1 || zC === ZC[1] || zC === QC[1] - 1 ? 1 : Math.max(1, QC[2] - 1 - ZC[2]);
+           for (let fC = ZC[2]; fC < QC[2]; fC += nC) {
+             const nC = [bC, zC, fC];
+             if (!OS(CC, nC)) continue;
+             const oC = bC === ZC[0] ? DS[1] : bC === QC[0] - 1 ? DS[0] : fC === ZC[2] ? DS[5] : fC === QC[2] - 1 ? DS[4] : zC === ZC[1] ? DS[3] : DS[2];
+             wC.push(kS(nC, oC))
+ ... (19 more added lines; see GitHub link above)
```

#### 162. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4370-L4372` → after: `L14702-L14731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R14702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L14702-L14731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L14702-L14731) · [Before (L4370-L4372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4370-L4372)

```diff
-       setIndices(qq) {
-         let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
-         return this.Plq && this.Plq.setIndices(qq, Eq), this.Plq
+       update(CC, zC, ZC, QC) {
+         const wC = [],
+           bC = new Set;
+         for (const qC of zC) {
+           var nC, fC, oC;
+           const {
+             box: zC
+           } = qC;
+           if ("reactor" !== qC.kind || qC.level <= 0 || (zC.ctrl[0] - ZC[0]) ** 2 + (zC.ctrl[1] - ZC[1]) ** 2 + (zC.ctrl[2] - ZC[2]) ** 2 > 576) continue;
+           const FC = LS(zC);
+           bC.add(FC);
+           let WC = this.spots.get(FC);
+           if ((!WC || QC - WC.at > 3e3) && (WC = {
+               at: QC,
+               spots: US(CC, zC),
+               glass: BS(CC, zC)
+ ... (14 more added lines; see GitHub link above)
```

#### 163. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4374-L4375` → after: `L14733-L14751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R14733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L14733-L14751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L14733-L14751) · [Before (L4374-L4375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4374-L4375)

```diff
-       isVerticesDataPresent(qq) {
-         return this._sourceMesh.isVerticesDataPresent(qq)
+       emit(CC, zC, ZC) {
+         var QC;
+         if (0 === this.sparking.length || !CC.particlesEnabled() || ZC === this.lastFrame) return;
+         this.lastFrame = ZC;
+         let wC = 0,
+           bC = 0;
+         for (const gC of this.sparking) wC += jS(gC), bC += yS(gC);
+         const nC = wC > 8 ? 8 / wC : 1,
+           fC = bC > 6 ? 6 / bC : 1;
+         let oC, qC = null,
+           FC = null;
+         for (const gC of this.sparking) gC.budget = Math.min(gC.budget + jS(gC) * nC * zC, 2), gC.budget >= 1 && (!qC || gC.budget > qC.budget) && (qC = gC), gC.glassBudget = Math.min(gC.glassBudget + yS(gC) * fC * zC, 2), gC.glassBudget >= 1 && (!FC || gC.glassBudget > FC.glassB … [truncated]
+         if (qC) qC.budget--, oC = qC.spots[qC.cursor++ % qC.spots.length];
+         else {
+           if (!FC) return;
+           FC.glassBudget--, oC = FC.glass[Math.floor(Math.random() * FC.glass.length)]
+ ... (3 more added lines; see GitHub link above)
```

#### 164. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4377-L4378` → after: `L14753-L14755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R14753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L14753-L14755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L14753-L14755) · [Before (L4377-L4378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4377-L4378)

```diff
-       iYq() {
-         return this._sourceMesh.iYq()
+       dispose() {
+         var CC;
+         null === (CC = this.emitter) || void 0 === CC || CC.dispose(), this.emitter = null, this.sparking = [], this.spots.clear()
```

#### 165. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4380-L4381` → after: `L14757-L14762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R14757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L14757-L14762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L14757-L14762) · [Before (L4380-L4381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4380-L4381)

```diff
-       get _positions() {
-         return this._sourceMesh._positions
+       create(CC, zC, ZC) {
+         const QC = Math.ceil(14 * tS.count * tS.life[1]) + tS.count;
+         return this.emitter = CC.createParticles(sS(tS, QC), {
+           pos: zC,
+           half: ZC
+         }), this.emitter
```

#### 166. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4383-L4392` → after: `L14764-L14805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R14764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L14764-L14805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L14764-L14805) · [Before (L4383-L4392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4383-L4392)

```diff
-       refreshBoundingInfo() {
-         let qq, Eq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
-           gq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         if (this.hasBoundingInfo && this.yR().isLocked) return this;
-         qq = "object" === typeof Eq ? Eq : {
-           applySkeleton: Eq,
-           applyMorph: gq
-         };
-         const Yq = this._sourceMesh.geometry ? this._sourceMesh.geometry.boundingBias : null;
-         return this._refreshBoundingInfo(this._sourceMesh._getData(qq, null, cq.g.PositionKind), Yq), this
+     }
+     const Cp = [2, 3.2],
+       zp = 1 / 3,
+       Zp = 1 / .6,
+       Qp = {
+         texture: uS,
+         HW: Math.ceil(18 * Cp[1]) + 4,
+         minLifeTime: Cp[0] / Zp,
+         maxLifeTime: Cp[1] / Zp,
+         minEmitPower: 1,
+         maxEmitPower: 1.8333333333333335,
+         minSize: .5,
+         maxSize: .9,
+         emitRate: 0,
+         gravity: [0, .6944444444444445, 0],
+         dir1: [-.2, 1, -.2],
+ ... (26 more added lines; see GitHub link above)
```

#### 167. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4394-L4395` → after: `L14807-L14818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R14807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L14807-L14818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L14807-L14818) · [Before (L4394-L4395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4394-L4395)

```diff
-       _preActivate() {
-         return this._currentLOD && this._currentLOD._preActivate(), this
+       dispose(CC) {
+         var zC;
+         this.outline.dispose(CC), null === (zC = this.steam) || void 0 === zC || zC.dispose(), this.steam = null, this.sparks.dispose();
+         for (const ZC of this.hums.values()) ZC.stop();
+         this.hums.clear()
+       }
+       chimeFormed(CC, zC, ZC, QC) {
+         const wC = this.outline.check(CC, ZC, QC);
+         wC && CC.playSound(zC, "exp_levelup", .6, 1, {
+           UQ: [wC.box.ctrl[0] + .5, wC.box.ctrl[1], wC.box.ctrl[2] + .5],
+           maxHearDist: 64
+         })
```

#### 168. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4397-L4402` → after: `L14820-L14834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R14820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L14820-L14834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L14820-L14834) · [Before (L4397-L4402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4397-L4402)

```diff
-       _activate(qq, Eq) {
-         if (super._activate(qq, Eq), this._sourceMesh.fn || lq.b.Warn("Instances should only be created for meshes with geometry."), this._currentLOD) {
-           if (this._currentLOD._getWorldMatrixDeterminant() >= 0 !== this._getWorldMatrixDeterminant() >= 0) return this._internalAbstractMeshDataInfo._actAsRegularMesh = !0, !0;
-           if (this._internalAbstractMeshDataInfo._actAsRegularMesh = !1, this._currentLOD._registerInstanceForRenderId(this, qq), Eq) {
-             if (!this._currentLOD._internalAbstractMeshDataInfo._isActiveIntermediate) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !0, !0
-           } else if (!this._currentLOD._internalAbstractMeshDataInfo._isActive) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstances = !0, !0
+       puff(CC, zC, ZC) {
+         const QC = this.plumes;
+         if (0 === QC.length || !CC.particlesEnabled()) return void(this.plumeBudget = 0);
+         const wC = QC.reduce(((CC, zC) => CC + 3 * zC.level), 0);
+         if (this.plumeBudget = Math.min(this.plumeBudget + wC * zC, 3), this.plumeBudget < 1) return;
+         this.plumeBudget--;
+         let bC = this.plumeCursor % (wC / 3);
+         this.plumeCursor++;
+         let nC = QC[0];
+         for (const WC of QC) {
+           if (bC < WC.level) {
+             nC = WC;
+             break
+           }
+           bC -= WC.level
```

#### 169. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4404-L4413` → after: `L14836-L14867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R14836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L14836-L14867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L14836-L14867) · [Before (L4404-L4413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4404-L4413)

```diff
-         return !1
-       }
-       _postActivate() {
-         this._sourceMesh.edgesShareWithInstances && this._sourceMesh._edgesRenderer && this._sourceMesh._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup ? (this._sourceMesh._renderingGroup._edgesRenderers.pushNoDuplicate(this._sourceMesh._edgesRenderer), this._sourceM … [truncated]
-       }
-       getWorldMatrix() {
-         if (this._currentLOD && this._currentLOD !== this._sourceMesh && this._currentLOD.billboardMode !== Aq.g.BILLBOARDMODE_NONE && this._currentLOD._masterMesh !== this) {
-           this._billboardWorldMatrix || (this._billboardWorldMatrix = new Yq.e);
-           const qq = this._currentLOD._masterMesh;
-           return this._currentLOD._masterMesh = this, Yq.o.Na[7].WG(this._currentLOD.position), this._currentLOD.position.set(0, 0, 0), this._billboardWorldMatrix.WG(this._currentLOD.computeWorldMatrix(!0)), this._currentLOD.position.WG(Yq.o.Na[7]), this._currentLOD._masterMesh = … [truncated]
+         const {
+           lo: fC,
+           hi: oC
+         } = ro(nC.box);
+         if (function(CC, zC, ZC) {
+             const QC = Math.max(CC[0] - ZC[0], 0, ZC[0] - zC[0]),
+               wC = Math.max(CC[2] - ZC[2], 0, ZC[2] - zC[2]);
+             return Math.hypot(QC, ZC[1] - zC[1], wC)
+           }(fC, oC, ZC) < 6 && Math.random() > zp) return;
+         const qC = [(fC[0] + oC[0]) / 2, oC[1] + .05, (fC[2] + oC[2]) / 2],
+           FC = [(oC[0] - fC[0]) / 2 - .5, .05, (oC[2] - fC[2]) / 2 - .5];
+         this.steam ??= CC.createParticles(Qp, {
+           pos: qC,
+           half: FC
+         }), this.steam.moveTo(qC, FC), this.steam.emit(1)
+       }
+ ... (16 more added lines; see GitHub link above)
```

#### 170. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4420-L4452` → after: `L14870-L14905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R14870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L14870-L14905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L14870-L14905) · [Before (L4420-L4452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4420-L4452)

```diff
-       getLOD(qq) {
-         if (!qq) return this;
-         const Eq = this.Plq.getLODLevels();
-         if (Eq && 0 !== Eq.length) {
-           const Eq = this.yR();
-           this._currentLOD = this.Plq.getLOD(qq, Eq.DYq)
-         } else this._currentLOD = this.Plq;
-         return this._currentLOD
-       }
-       _preActivateForIntermediateRendering(qq) {
-         return this.Plq._preActivateForIntermediateRendering(qq)
-       }
-       _syncSubMeshes() {
-         if (this.releaseSubMeshes(), this._sourceMesh.fn)
-           for (let qq = 0; qq < this._sourceMesh.fn.length; qq++) this._sourceMesh.fn[qq].clone(this, this._sourceMesh);
-         return this
- ... (17 more removed lines; see GitHub link above)
+     }
+ 
+     function bp(CC, zC) {
+       return (CC[0] - zC[0]) ** 2 + (CC[1] - zC[1]) ** 2 + (CC[2] - zC[2]) ** 2
+     }
+     class np {
+       constructor() {
+         this.snapshot = {
+           fuse: null,
+           blast: null
+         }, this.listeners = new Set
+       }
+       fR(CC, zC) {
+         let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
+         const QC = [CC.baf2BombAt[0], CC.baf2BombAt[1], CC.baf2BombAt[2]],
+           wC = CC.baf2BombR;
+ ... (20 more added lines; see GitHub link above)
```

#### 171. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4454-L4456` → after: `L14907-L14908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R14907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L14907-L14908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L14907-L14908) · [Before (L4454-L4456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4454-L4456)

```diff
-       dispose(qq) {
-         let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         this._sourceMesh.qqq(this), super.dispose(qq, Eq)
+       get() {
+         return this.snapshot
```

#### 172. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4458-L4459` → after: `L14910-L14913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R14910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L14910-L14913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L14910-L14913) · [Before (L4458-L4459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4458-L4459)

```diff
-       _serializeAsParent(qq) {
-         super._serializeAsParent(qq), qq.parentId = this._sourceMesh.uniqueId, qq.parentInstanceIndex = this._indexInSourceMeshInstanceArray
+       subscribe(CC) {
+         return this.listeners.add(CC), () => {
+           this.listeners.delete(CC)
+         }
```

#### 173. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4461-L4468` → after: `L14915-L14919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R14915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L14915-L14919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L14915-L14919) · [Before (L4461-L4468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4461-L4468)

```diff
-       instantiateHierarchy() {
-         let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
-           Eq = arguments.length > 1 ? arguments[1] : void 0,
-           gq = arguments.length > 2 ? arguments[2] : void 0;
-         const Yq = this.clone("Clone of " + (this.name || this.id), qq || this.parent, !0, Eq && Eq.newSourcedMesh);
-         Yq && gq && gq(this, Yq);
-         for (const lq of this.getChildTransformNodes(!0)) lq.instantiateHierarchy(Yq, Eq, gq);
-         return Yq
+       dispose() {
+         this.listeners.clear(), this.snapshot = {
+           fuse: null,
+           blast: null
+         }
```

#### 174. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4470-L4477` → after: `L14921-L14923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R14921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L14921-L14923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L14921-L14923) · [Before (L4470-L4477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4470-L4477)

```diff
-     }
-     let Wq = !1;
- 
-     function Nq(qq, Eq, gq, Yq, lq) {
-       for (let Oq = 0; Oq < Eq.length; Oq++) {
-         const mq = qq[Eq[Oq]] ?? 0,
-           xq = lq + gq[Oq];
-         mq.toArray ? mq.toArray(Yq, xq) : mq.copyToArray ? mq.copyToArray(Yq, xq) : Yq[xq] = mq
+       bp(CC) {
+         this.snapshot = CC;
+         for (const zC of this.listeners) zC()
```

#### 175. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4480-L4511` → after: `L14926-L14941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R14926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L14926-L14941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L14926-L14941) · [Before (L4480-L4511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4480-L4511)

```diff
- 
-     function aq() {
-       Wq || (Wq = !0, mq.e._instancedMeshFactory = (qq, Eq) => {
-         const gq = new Bq(qq, Eq);
-         if (Eq.uR) {
-           gq.uR = {};
-           for (const qq in Eq.uR) gq.uR[qq] = Eq.uR[qq]
-         }
-         return gq
-       }, mq.e.prototype.xR = function(qq, Eq) {
-         if (!this.uR) {
-           this.uR = {};
-           for (const qq of this.instances) qq.uR = {}
-         }
-         this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
-           data: {},
- ... (16 more removed lines; see GitHub link above)
+     const fp = (0, QC.memo)((function(CC) {
+       var zC;
+       let {
+         store: ZC
+       } = CC;
+       const {
+         t: wC
+       } = (0, ew.y)(), [bC, nC] = (0, QC.useState)((() => ZC.get())), [fC, oC] = (0, QC.useState)((() => performance.now()));
+       (0, QC.useEffect)((() => (nC(ZC.get()), ZC.subscribe((() => {
+         nC(ZC.get()), oC(performance.now())
+       })))), [ZC]);
+       const {
+         fuse: qC,
+         blast: FC
+       } = bC;
+       (0, QC.useEffect)((() => {
```

#### 176. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4513-L4594` → after: `L14943-L14985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R14943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L14943-L14985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L14943-L14985) · [Before (L4513-L4594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4513-L4594)

```diff
-         const lq = qq ? qq.length : 0,
-           Oq = (lq + 1) * Yq;
-         let mq = gq.interleavedData;
-         if (mq.length < Oq) {
-           let qq = mq.length;
-           for (; qq < Oq;) qq *= 2;
-           mq = gq.interleavedData = new Float32Array(qq)
-         }
-         const xq = gq.interleavedKinds,
-           Aq = gq.interleavedOffsets;
-         let uq = 0;
-         Eq && (Nq(this.uR, xq, Aq, mq, uq), uq += Yq);
-         for (let cq = 0; cq < lq; cq++) Nq(qq[cq].uR, xq, Aq, mq, uq), uq += Yq;
-         let Bq = "shared",
-           Wq = gq.vertexBuffers;
-         this._instanceDataStorage.useMonoDataStorageRenderPass || (Bq = this._instanceDataStorage.engine.currentRenderPassId, gq.renderPasses || (gq.renderPasses = {}), gq.renderPasses[Bq] || (gq.renderPasses[Bq] = {}), Wq = gq.renderPasses[Bq]);
- ... (66 more removed lines; see GitHub link above)
+         const CC = setInterval((() => {
+           oC(performance.now())
+         }), 250);
+         return () => {
+           clearInterval(CC)
+         }
+       }), [qC]);
+       const [WC, NC] = (0, QC.useState)(!1);
+       (0, QC.useEffect)((() => {
+         if (null === FC || void 0 === FC || !FC.flash) return;
+         NC(!0);
+         const CC = setTimeout((() => {
+           NC(!1)
+         }), 2500);
+         return () => {
+           clearTimeout(CC)
+ ... (27 more added lines; see GitHub link above)
```

#### 177. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4600` → after: `L14990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R14990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L14990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L14990) · [Before (L4600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4600)

```diff
-         this.batchCache = new Xq(this), this.batchCacheReplacementModeInFrozenMode = new Xq(this), this.instancesBufferSize = 2048
+         this.vq = !1
```

#### 178. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4602-L4605` → after: `L14992-L14996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R14992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L14992-L14996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L14992-L14996) · [Before (L4602-L4605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4602-L4605)

```diff
-     }
-     class sq {
-       constructor() {
-         this.renderPasses = {}
+       hold(CC) {
+         CC.getCameraFar() < 1e3 && (CC.setCameraFar(1e3), this.vq = !0)
+       }
+       release(CC) {
+         this.vq && (this.vq = !1, CC.setCameraFar(null))
```

#### 179. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4610` → after: `L15079-L15214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15079-L15214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15079-L15214) · [Before (L4610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4610)

```diff
-         this.parent = qq, this.mustReturn = !1, this.visibleInstances = new Array, this.renderSelf = [], this.hardwareInstancedRendering = []
+         this.store = CC, this.beacon = null, this.beaconBudget = 0, this.streams = [], this.cloud = null, this.shownBlast = null, this.lastMs = 0, this.ringAngle = 0, this.far = new qp, this.timers = []
+       }
+       onAfterRender(CC, zC) {
+         const ZC = performance.now(),
+           QC = 0 === this.lastMs ? 0 : Math.min(ZC - this.lastMs, 250) / 1e3;
+         this.lastMs = ZC;
+         const {
+           fuse: wC,
+           blast: bC
+         } = this.store.get();
+         null !== bC && bC !== this.shownBlast && (this.shownBlast = bC, this.startBlast(CC, zC, bC, ZC));
+         const nC = CC.particlesEnabled();
+         null !== wC && wC.endsAt > ZC && nC ? this.emitBeacon(CC, wC, QC, ZC) : this.beaconBudget = 0, null !== this.cloud && (ZC - this.cloud.startMs > 33e3 ? this.disposeCloud(CC) : (this.far.hold(CC), nC && this.emitCloud(CC, QC, ZC)))
+       }
+       dispose(CC) {
+         var zC;
+ ... (120 more added lines; see GitHub link above)
```

#### 180. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4613-L4615` → after: `L15217-L15226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15217-L15226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15217-L15226) · [Before (L4613-L4615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4613-L4615)

```diff
-     class wq {
-       constructor() {
-         this.instancesCount = 0, this.matrixBuffer = null, this.previousMatrixBuffer = null, this.matrixBufferSize = 512, this.matrixData = null, this.boundingVectors = [], this.worldMatrices = null
+ 
+     function Gp(CC, zC) {
+       return [(CC[0] + zC[0]) / 2, (CC[1] + zC[1]) / 2, (CC[2] + zC[2]) / 2, .75 * CC[3]]
+     }
+ 
+     function Rp(CC, zC, ZC, QC, wC) {
+       try {
+         CC.playSound(zC, ZC, QC, wC)
+       } catch (bC) {
+         console.error(bC)
```

#### 181. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4620` → after: `L15239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15239) · [Before (L4620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4620)

```diff
-         this._areNormalsFrozen = !1, this._source = null, this.meshMap = null, this._preActivateId = -1, this._LODLevels = new Array, this._useLODScreenCoverage = !1, this._effectiveMaterial = null, this._forcedInstanceCount = 0, this._overrideRenderingFillMode = null
+         this.zone = null, this.endsAt = 0
```

#### 182. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4622-L4632` → after: `L15241-L15249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15241-L15249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15241-L15249) · [Before (L4622-L4632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4622-L4632)

```diff
-     }
-     const Cq = {
-       source: null,
-       parent: null,
-       doNotCloneChildren: !1,
-       clonePhysicsImpostor: !0,
-       cloneThinInstances: !1
-     };
-     class Iq extends Zq.c {
-       static _GetDefaultSideOrientation(qq) {
-         return qq || Iq.FRONTSIDE
+       start(CC, zC) {
+         this.zone = {
+           centre: [...CC.centre],
+           r: CC.r,
+           band: CC.band ? [CC.band[0], CC.band[1]] : void 0
+         }, this.endsAt = zC
+       }
+       stop() {
+         this.zone = null
```

#### 183. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4634-L4635` → after: `L15251-L15268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15251-L15268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15251-L15268) · [Before (L4634-L4635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4634-L4635)

```diff
-       get useLODScreenCoverage() {
-         return this._internalMeshDataInfo._useLODScreenCoverage
+       fR(CC, zC) {
+         const {
+           baf2FalloutMs: ZC,
+           baf2FalloutAt: QC,
+           baf2FalloutR: wC,
+           baf2FalloutY: bC
+         } = CC;
+         ZC > 0 && QC && void 0 !== wC ? this.start({
+           centre: QC,
+           r: wC,
+           band: bC
+         }, zC + ZC) : this.stop()
+       }
+       perS(CC, zC, ZC) {
+         const QC = this.zone;
+         if (!QC) return 0;
+ ... (2 more added lines; see GitHub link above)
```

#### 184. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4637-L4638` → after: `L15270-L15287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15270-L15287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15270-L15287) · [Before (L4637-L4638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4637-L4638)

```diff
-       set useLODScreenCoverage(qq) {
-         this._internalMeshDataInfo._useLODScreenCoverage = qq, this._sortLODLevels()
+     }
+     const Ip = [5, 7],
+       ip = [24, 8, 24],
+       vp = .5,
+       ep = 1 / .6,
+       hp = [{
+         rgba: [150, 150, 140, .85],
+         share: .7
+       }, {
+         rgba: [120, 225, 90, .9],
+         share: .3
+       }];
+     class Kp {
+       constructor() {
+         let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, uf.isMobile)();
+         this.state = new Jp, this.tier = void 0, this.systems = null, this.budget = 0, this.lastMs = 0, this.at = [0, 0, 0], this.amounts = [0, 0], this.tier = function(CC) {
+ ... (2 more added lines; see GitHub link above)
```

#### 185. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4640-L4641` → after: `L15289-L15290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15289-L15290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15289-L15290) · [Before (L4640-L4641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4640-L4641)

```diff
-       get computeBonesUsingShaders() {
-         return this._internalAbstractMeshDataInfo._computeBonesUsingShaders
+       startFallout(CC, zC) {
+         this.state.start(CC, zC)
```

#### 186. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4643-L4644` → after: `L15292-L15293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15292-L15293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15292-L15293) · [Before (L4643-L4644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4643-L4644)

```diff
-       set computeBonesUsingShaders(qq) {
-         this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== qq && (qq && this._internalMeshDataInfo._sourcePositions && (this.setVerticesData(nq.g.PositionKind, this._internalMeshDataInfo._sourcePositions, !0), this._internalMeshDataInfo._sourceNormals && this.setVer … [truncated]
+       stopFallout() {
+         this.state.stop()
```

#### 187. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4646-L4647` → after: `L15295-L15296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15295-L15296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15295-L15296) · [Before (L4646-L4647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4646-L4647)

```diff
-       get onBeforeRenderObservable() {
-         return this._internalMeshDataInfo._onBeforeRenderObservable || (this._internalMeshDataInfo._onBeforeRenderObservable = new jq.d), this._internalMeshDataInfo._onBeforeRenderObservable
+       fR(CC) {
+         this.state.fR(CC, performance.now())
```

#### 188. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4649-L4650` → after: `L15298-L15315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15298-L15315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15298-L15315) · [Before (L4649-L4650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4649-L4650)

```diff
-       get onBeforeBindObservable() {
-         return this._internalMeshDataInfo._onBeforeBindObservable || (this._internalMeshDataInfo._onBeforeBindObservable = new jq.d), this._internalMeshDataInfo._onBeforeBindObservable
+       onAfterRender(CC, zC) {
+         var ZC;
+         const QC = performance.now(),
+           wC = 0 === this.lastMs ? 0 : Math.min(QC - this.lastMs, 250) / 1e3;
+         this.lastMs = QC;
+         const bC = this.state.perS(QC, zC, this.tier);
+         if (bC <= 0 || !CC.particlesEnabled()) return void(this.budget = 0);
+         this.budget = Math.min(this.budget + bC * wC, bC / 4);
+         const nC = Math.floor(this.budget);
+         if (nC < 1) return;
+         this.budget -= nC;
+         const fC = this.at;
+         fC[0] = zC[0], fC[1] = zC[1] + 12, fC[2] = zC[2];
+         const oC = null !== (ZC = this.systems) && void 0 !== ZC ? ZC : this.create(CC, fC),
+           qC = this.amounts;
+         qC[0] = 0, qC[1] = 0;
+ ... (2 more added lines; see GitHub link above)
```

#### 189. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4652-L4653` → after: `L15317-L15362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15317-L15362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15317-L15362) · [Before (L4652-L4653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4652-L4653)

```diff
-       get onAfterRenderObservable() {
-         return this._internalMeshDataInfo._onAfterRenderObservable || (this._internalMeshDataInfo._onAfterRenderObservable = new jq.d), this._internalMeshDataInfo._onAfterRenderObservable
+       dispose() {
+         for (const zC of null !== (CC = this.systems) && void 0 !== CC ? CC : []) {
+           var CC;
+           zC.dispose()
+         }
+         this.systems = null, this.state.stop()
+       }
+       create(CC, zC) {
+         return this.systems = hp.map((ZC => {
+           let {
+             rgba: [QC, wC, bC, nC],
+             share: fC
+           } = ZC;
+           const oC = {
+             texture: "square_particle",
+             HW: Math.ceil(this.tier.HW * fC),
+ ... (30 more added lines; see GitHub link above)
```

#### 190. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4655-L4656` → after: `L15364-L15415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15364-L15415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15364-L15415) · [Before (L4655-L4656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4655-L4656)

```diff
-       get onBetweenPassObservable() {
-         return this._internalMeshDataInfo._onBetweenPassObservable || (this._internalMeshDataInfo._onBetweenPassObservable = new jq.d), this._internalMeshDataInfo._onBetweenPassObservable
+     }
+     const Yp = {
+       1: [0, 0, 1],
+       2: [1, 0, 0],
+       3: [0, 0, -1],
+       4: [-1, 0, 0]
+     };
+ 
+     function dp(CC) {
+       const zC = /\|rot(\d)/.exec(CC);
+       return Yp[zC ? Number(zC[1]) : 1]
+     }
+     var mp = ZC(597),
+       Hp = ZC(38300);
+     const Ep = new Set(mp.p);
+ 
+ ... (36 more added lines; see GitHub link above)
```

#### 191. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4658-L4659` → after: `L15417-L15422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15417-L15422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15417-L15422) · [Before (L4658-L4659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4658-L4659)

```diff
-       get onBeforeDrawObservable() {
-         return this._internalMeshDataInfo._onBeforeDrawObservable || (this._internalMeshDataInfo._onBeforeDrawObservable = new jq.d), this._internalMeshDataInfo._onBeforeDrawObservable
+       onAfterRender(CC, zC) {
+         if (0 === this.farms.size) return;
+         const ZC = this.now(),
+           QC = Number.isNaN(this.frameMs) ? 0 : Math.min(ZC - this.frameMs, 100);
+         this.frameMs = ZC, ZC - this.checkedMs >= 1e3 && (this.checkedMs = ZC, this.check(CC, zC));
+         for (const wC of this.farms.values()) wC.shown && wC.running && null !== wC.model && QC > 0 && (wC.spin = sp(wC.spin, QC), wC.model.setPose(wC.feet, rp(wC.front, wC.spin)))
```

#### 192. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4661-L4662` → after: `L15424-L15427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15424-L15427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15424-L15427) · [Before (L4661-L4662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4661-L4662)

```diff
-       set onBeforeDraw(qq) {
-         this._onBeforeDrawObserver && this.onBeforeDrawObservable.remove(this._onBeforeDrawObserver), this._onBeforeDrawObserver = this.onBeforeDrawObservable.add(qq)
+       dispose() {
+         this.unsubscribe();
+         for (const CC of this.farms.values()) this.drop(CC);
+         this.farms.clear()
```

#### 193. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4664-L4665` → after: `L15429-L15451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15429-L15451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15429-L15451) · [Before (L4664-L4665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4664-L4665)

```diff
-       get olq() {
-         return this.instances.length > 0
+       sync() {
+         const CC = new Set;
+         for (const zC of this.labels.list()) {
+           const ZC = lp(zC);
+           if (null === ZC) continue;
+           CC.add(zC.key);
+           const QC = this.farms.get(zC.key);
+           if ((null === QC || void 0 === QC ? void 0 : QC.mob) === ZC) continue;
+           QC && this.drop(QC);
+           const [wC, bC, nC] = zC.pos;
+           this.farms.set(zC.key, {
+             pos: zC.pos,
+             feet: [wC + .5, bC + 1, nC + .5],
+             mob: ZC,
+             model: null,
+             shown: !1,
+ ... (7 more added lines; see GitHub link above)
```

#### 194. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4667-L4668` → after: `L15453-L15457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15453-L15457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15453-L15457) · [Before (L4667-L4668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4667-L4668)

```diff
-       get hasThinInstances() {
-         return (this.forcedInstanceCount || this._thinInstanceDataStorage.instancesCount || 0) > 0
+       check(CC, zC) {
+         for (const ZC of this.farms.values()) {
+           const [QC, wC, bC] = ZC.pos, nC = tg(CC, ZC.pos);
+           null !== nC && dZ(nC) === lC && cp(ZC.pos, zC, "Air" === tg(CC, [QC, wC + 1, bC])) ? (ZC.running = nC.endsWith("|Running"), ZC.front = dp(nC), null === ZC.model && (ZC.model = CC.createMobModel(ZC.mob, Xp(ZC.mob)), null === ZC.model) || (ZC.model.setPose(ZC.feet, rp(ZC. … [truncated]
+         }
```

#### 195. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4670-L4671` → after: `L15459-L15461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15459-L15461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15459-L15461) · [Before (L4670-L4671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4670-L4671)

```diff
-       get forcedInstanceCount() {
-         return this._internalMeshDataInfo._forcedInstanceCount
+       drop(CC) {
+         var zC;
+         null === (zC = CC.model) || void 0 === zC || zC.dispose(), CC.model = null, CC.shown = !1
```

#### 196. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4673-L4674` → after: `L15463-L15466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15463-L15466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15463-L15466) · [Before (L4673-L4674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4673-L4674)

```diff
-       set forcedInstanceCount(qq) {
-         this._internalMeshDataInfo._forcedInstanceCount = qq
+     }
+     class ap {
+       constructor() {
+         this.island = null, this.islandSite = null, this.views = [], this.status = null, this.openHeld = null, this.beamsVersion = 0, this.listeners = new Set
```

#### 197. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4676-L4677` → after: `L15468-L15477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15468-L15477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15468-L15477) · [Before (L4676-L4677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4676-L4677)

```diff
-       get sideOrientation() {
-         return this._internalMeshDataInfo._sideOrientation
+       onBeams(CC) {
+         var zC;
+         this.island = CC.baf2ColIsland, this.islandSite = (zC = CC.baf2ColSite) && 8 === zC.length ? {
+           spawnXZ: [zC[0], zC[1]],
+           coreXZ: [zC[2], zC[3]],
+           minXZ: [zC[4], zC[5]],
+           maxXZ: [zC[6], zC[7]]
+         } : null, this.views = CC.baf2ColList.map((CC => ({
+           entry: nw(CC)
+         }))), this.beamsVersion++, this.emit()
```

#### 198. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4679-L4680` → after: `L15479-L15480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15479-L15480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15479-L15480) · [Before (L4679-L4680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4679-L4680)

```diff
-       set sideOrientation(qq) {
-         this._internalMeshDataInfo._sideOrientation = qq, this._internalAbstractMeshDataInfo._sideOrientationHint = this._scene.useRightHandedSystem && 1 === qq || !this._scene.useRightHandedSystem && 0 === qq
+       onStatus(CC) {
+         this.status = CC, this.emit()
```

#### 199. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4682-L4683` → after: `L15482-L15483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15482-L15483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15482-L15483) · [Before (L4682-L4683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4682-L4683)

```diff
-       get _effectiveSideOrientation() {
-         return this._internalMeshDataInfo._effectiveSideOrientation
+       onOpen(CC) {
+         this.openHeld = CC
```

#### 200. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4685-L4686` → after: `L15485-L15486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15485-L15486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15485-L15486) · [Before (L4685-L4686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4685-L4686)

```diff
-       get overrideMaterialSideOrientation() {
-         return this.sideOrientation
+       heldAtOpen() {
+         return this.openHeld
```

#### 201. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4688-L4689` → after: `L15488-L15489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15488-L15489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15488-L15489) · [Before (L4688-L4689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4688-L4689)

```diff
-       set overrideMaterialSideOrientation(qq) {
-         this.sideOrientation = qq, this.material && (this.material.sideOrientation = null)
+       site() {
+         return this.islandSite
```

#### 202. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4691-L4692` → after: `L15491-L15492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15491-L15492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15491-L15492) · [Before (L4691-L4692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4691-L4692)

```diff
-       get overrideRenderingFillMode() {
-         return this._internalMeshDataInfo._overrideRenderingFillMode
+       colliders() {
+         return this.views
```

#### 203. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4694-L4695` → after: `L15494-L15495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15494-L15495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15494-L15495) · [Before (L4694-L4695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4694-L4695)

```diff
-       set overrideRenderingFillMode(qq) {
-         this._internalMeshDataInfo._overrideRenderingFillMode = qq
+       entries() {
+         return this.views.map((CC => CC.entry))
```

#### 204. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4697-L4698` → after: `L15497-L15504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15497-L15504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15497-L15504) · [Before (L4697-L4698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4697-L4698)

```diff
-       get material() {
-         return this._internalAbstractMeshDataInfo._material
+       entryAtRoot(CC) {
+         var zC;
+         return null === (zC = this.views.find((zC => {
+           let {
+             entry: ZC
+           } = zC;
+           return ZC.focus[0] === CC[0] && ZC.focus[1] === CC[1] + 1 && ZC.focus[2] === CC[2]
+         }))) || void 0 === zC ? void 0 : zC.entry
```

#### 205. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4700-L4701` → after: `L15506-L15507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15506-L15507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15506-L15507) · [Before (L4700-L4701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4700-L4701)

```diff
-       set material(qq) {
-         qq && (this.material && null === this.material.sideOrientation || this._internalAbstractMeshDataInfo._sideOrientationHint) && (qq.sideOrientation = null), this._setMaterial(qq)
+       getStatus() {
+         return this.status
```

#### 206. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4703-L4704` → after: `L15509-L15510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15509-L15510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15509-L15510) · [Before (L4703-L4704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4703-L4704)

```diff
-       get source() {
-         return this._internalMeshDataInfo._source
+       version() {
+         return this.beamsVersion
```

#### 207. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4706-L4707` → after: `L15512-L15513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R15512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L15512-L15513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/243.js#L15512-L15513) · [Before (L4706-L4707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/243.js#L4706-L4707)

```diff
-       get cloneMeshMap() {
-         return this._internalMeshDataInfo.meshMap
+       lookLine(CC, zC) {
+         return yo(this.entries(), CC, zC)
```
